import { i as readRuntimeConfigFromEnv } from "./runtime-config-DK7G0iKr.js";
import { a as resolvePlausibleEventUrl, d as getClientIpFromRequest, o as getAnalyticsArea, s as getAnalyticsSurface } from "./plausible-proxy-Dv8rZ-v1.js";
function inferServerPageviewFormat(pathname) {
	if (pathname.endsWith(".json")) return "json";
	if (pathname.endsWith(".md")) return "markdown";
	if (pathname.includes("llms")) return "markdown";
	if (pathname.endsWith(".txt") || pathname.endsWith(".sh") || pathname.endsWith(".ps1") || pathname === "/robots.txt" || pathname.endsWith("/robots.txt")) return "text";
	return "markdown";
}
function trackServerPageview(request, options = {}) {
	if (process.env.TSS_PRERENDERING === "true") return;
	const scriptSrc = readRuntimeConfigFromEnv(process.env).plausibleScriptSrc;
	if (!scriptSrc) return;
	try {
		const clientIp = getClientIpFromRequest(request);
		if (!clientIp) return;
		const url = new URL(request.url);
		const origin = url.origin;
		const pathname = url.pathname || "/";
		const format = options.format ?? inferServerPageviewFormat(pathname);
		const headers = {
			"Content-Type": "application/json",
			"User-Agent": request.headers.get("user-agent") || "Unknown",
			"X-Forwarded-For": clientIp
		};
		const body = JSON.stringify({
			name: "pageview",
			url: `${origin}${pathname}`,
			domain: url.hostname,
			referrer: request.headers.get("referer") || null,
			props: {
				route: pathname,
				area: getAnalyticsArea(pathname),
				surface: getAnalyticsSurface(pathname),
				format
			}
		});
		fetch(resolvePlausibleEventUrl(scriptSrc), {
			method: "POST",
			headers,
			body
		}).catch(() => {});
	} catch {}
}
export { trackServerPageview as t };
