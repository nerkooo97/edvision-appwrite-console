const CLIENT_IP_HEADER = "x-cdn-client-ip";
const CLIENT_IP_DEBUG_HEADERS = [
	CLIENT_IP_HEADER,
	"cf-connecting-ip",
	"x-real-ip",
	"x-forwarded-for"
];
const SSR_CLIENT_IP_WINDOW_KEY = "__SSR_CLIENT_IP__";
function nonempty(value) {
	return typeof value === "string" && value.trim() ? value.trim() : null;
}
function getRuntimeRequestIp(request, runtimeIp) {
	const fromCaller = nonempty(runtimeIp);
	if (fromCaller) return fromCaller;
	const req = request;
	return nonempty(req.ip) || nonempty(req.context?.clientAddress);
}
function getClientIpFromRequest(request, runtimeIp) {
	return nonempty(request.headers.get("x-cdn-client-ip")) || getRuntimeRequestIp(request, runtimeIp);
}
function getClientIpSnapshotFromRequest(request, runtimeIp) {
	const headers = {};
	for (const name of CLIENT_IP_DEBUG_HEADERS) headers[name] = nonempty(request.headers.get(name));
	const headerIp = headers[CLIENT_IP_HEADER];
	const resolvedRuntimeIp = getRuntimeRequestIp(request, runtimeIp);
	const ip = headerIp || resolvedRuntimeIp;
	return {
		ip,
		source: headerIp ? CLIENT_IP_HEADER : ip ? "runtime" : null,
		runtimeIp: resolvedRuntimeIp,
		headers
	};
}
function getAnalyticsArea(routePath) {
	const parts = routePath.split("/").filter(Boolean);
	if (parts[0] === "projects") return parts[2] ?? "overview";
	if (parts[0] === "organizations") return parts[2] ?? "overview";
	return parts[0] ?? "root";
}
function getAnalyticsSurface(routePath) {
	const root = routePath.split("/").filter(Boolean)[0] ?? "";
	if (root === "docs") return "docs";
	if (root === "account") return "account";
	if (root === "sign-in" || root === "sign-up" || root === "join" || root === "verify-email" || root === "auth" || root === "oauth2" || root === "reset" || root === "card") return "auth";
	if (root === "projects" || root === "organizations" || root === "upgrade" || root === "generator") return "console";
	return "marketing";
}
const PLAUSIBLE_PROXY_SCRIPT_PATH = "/r/v.js";
const PLAUSIBLE_PROXY_EVENT_PATH = "/r/e";
var PLAUSIBLE_ORIGIN_FALLBACK = "https://plausible.io";
function resolvePlausibleEventUrl(scriptSrc) {
	try {
		return new URL("/api/event", new URL(scriptSrc).origin).toString();
	} catch {
		return `${PLAUSIBLE_ORIGIN_FALLBACK}/api/event`;
	}
}
async function proxyPlausibleScript(scriptSrc) {
	if (!scriptSrc) return new Response("Not found", { status: 404 });
	try {
		const upstream = await fetch(scriptSrc, {
			headers: { Accept: "application/javascript, text/javascript, */*" },
			redirect: "follow"
		});
		if (!upstream.ok) return new Response("Upstream script unavailable", { status: upstream.status === 404 ? 404 : 502 });
		const body = await upstream.arrayBuffer();
		return new Response(body, {
			status: 200,
			headers: {
				"Content-Type": upstream.headers.get("content-type") || "application/javascript; charset=utf-8",
				"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
			}
		});
	} catch {
		return new Response("Failed to proxy script", { status: 502 });
	}
}
async function proxyPlausibleEvent(request, eventUrl) {
	if (!eventUrl) return new Response("Not found", { status: 404 });
	const clientIp = getClientIpFromRequest(request);
	if (!clientIp) return new Response(null, { status: 204 });
	const headers = new Headers();
	headers.set("Content-Type", request.headers.get("content-type") || "application/json");
	headers.set("User-Agent", request.headers.get("user-agent") || "Unknown");
	headers.set("X-Forwarded-For", clientIp);
	try {
		const upstream = await fetch(eventUrl, {
			method: "POST",
			headers,
			body: await request.arrayBuffer(),
			redirect: "manual"
		});
		return new Response(await upstream.arrayBuffer(), {
			status: upstream.status,
			headers: {
				"Content-Type": upstream.headers.get("content-type") || "text/plain; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	} catch {
		return new Response("Failed to proxy event", { status: 502 });
	}
}
export { resolvePlausibleEventUrl as a, CLIENT_IP_DEBUG_HEADERS as c, getClientIpFromRequest as d, getClientIpSnapshotFromRequest as f, proxyPlausibleScript as i, CLIENT_IP_HEADER as l, PLAUSIBLE_PROXY_SCRIPT_PATH as n, getAnalyticsArea as o, proxyPlausibleEvent as r, getAnalyticsSurface as s, PLAUSIBLE_PROXY_EVENT_PATH as t, SSR_CLIENT_IP_WINDOW_KEY as u };
