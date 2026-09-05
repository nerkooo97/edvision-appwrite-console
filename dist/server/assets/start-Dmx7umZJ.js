import { a as createStart, o as createMiddleware } from "../server.js";
import { i as readRuntimeConfigFromEnv, o as serializeRuntimeConfig, r as injectRuntimeConfigIntoHtml, t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { n as hasConsoleSessionCookieFromHeader } from "./console-session-cookie-7RV5Zfr4.js";
import "./mcp-CgjPVMsn.js";
import { c as APPWRITE_MCP_SERVER_CARD_PATH, d as buildAiCatalogDocument, f as buildMcpServerCard, l as MCP_SERVER_CARD_CONTENT_TYPE, m as serializeDiscoveryJson, o as APPWRITE_AI_CATALOG_PATH, p as discoveryJsonResponse, r as APPWRITE_AGENT_SKILLS_DISCOVERY_PATH, t as AI_CATALOG_CONTENT_TYPE, u as buildAgentSkillsDiscoveryDocument } from "./agent-discovery-SMCX1bvP.js";
import { a as isWebsiteAccessEnabled, i as hasWebsiteAccessCookieFromHeader, o as isWebsiteAccessProtectedPath } from "./website-access-KX3BCndz.js";
import { a as getRequestHostFromHeaders, i as getNonProductionRobotsTxt, r as applyNoIndexResponseHeaders, s as isSeoIndexableHost, t as NOINDEX_ROBOTS_HEADER } from "./indexing-XiUq1KWH.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { t as getLegacyRedirectTarget } from "./legacy-redirects-DXrxvtwB.js";
var DISCOVERY_HANDLERS = {
	[APPWRITE_MCP_SERVER_CARD_PATH]: {
		contentType: MCP_SERVER_CARD_CONTENT_TYPE,
		body: () => serializeDiscoveryJson(buildMcpServerCard())
	},
	[APPWRITE_AI_CATALOG_PATH]: {
		contentType: AI_CATALOG_CONTENT_TYPE,
		body: () => serializeDiscoveryJson(buildAiCatalogDocument())
	},
	[APPWRITE_AGENT_SKILLS_DISCOVERY_PATH]: {
		contentType: "application/json; charset=utf-8",
		body: () => serializeDiscoveryJson(buildAgentSkillsDiscoveryDocument())
	}
};
const agentDiscoveryMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
	if (request.method === "OPTIONS" && DISCOVERY_HANDLERS[pathname]) throw new Response(null, {
		status: 204,
		headers: {
			...DISCOVERY_CORS_HEADERS,
			"Access-Control-Max-Age": "86400"
		}
	});
	const handler = DISCOVERY_HANDLERS[pathname];
	if (!handler) return next();
	trackServerPageview(request, { format: "json" });
	throw discoveryJsonResponse(handler.body(), handler.contentType);
});
function resolvePathname$1(pathname, requestUrl) {
	if (pathname) return pathname;
	try {
		return new URL(requestUrl).pathname;
	} catch {
		return "/";
	}
}
const legacyRedirectsMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
	if (process.env.TSS_PRERENDERING === "true") return next();
	const target = getLegacyRedirectTarget(resolvePathname$1(pathname, request.url));
	if (!target) return next();
	const targetUrl = new URL(target, request.url);
	new URL(request.url).searchParams.forEach((value, key) => {
		if (!targetUrl.searchParams.has(key)) targetUrl.searchParams.append(key, value);
	});
	throw Response.redirect(targetUrl, 301);
});
function isRootPath(pathname) {
	return pathname === "/" || pathname === "";
}
const rootGuestRedirectMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
	if (!isRootPath(pathname)) return next();
	if (hasConsoleSessionCookieFromHeader(request.headers.get("cookie"))) return next();
	throw Response.redirect(new URL("/home", request.url), 302);
});
var RUNTIME_CONFIG_JSON = serializeRuntimeConfig(readRuntimeConfigFromEnv(process.env));
const runtimeConfigMiddleware = createMiddleware({ type: "request" }).server(async ({ next }) => {
	const result = await next();
	const response = result.response;
	if (!response?.headers) return result;
	if (!(response.headers.get("content-type") ?? "").includes("text/html")) return result;
	const injected = injectRuntimeConfigIntoHtml(await response.text(), RUNTIME_CONFIG_JSON);
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return {
		...result,
		response: new Response(injected, {
			status: response.status,
			statusText: response.statusText,
			headers
		})
	};
});
const seoIndexingMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
	const indexable = isSeoIndexableHost(getRequestHostFromHeaders(request.headers, request.url));
	if (pathname === "/robots.txt" && !indexable) {
		trackServerPageview(request, { format: "text" });
		throw new Response(getNonProductionRobotsTxt(), {
			status: 200,
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-store",
				"X-Robots-Tag": NOINDEX_ROBOTS_HEADER
			}
		});
	}
	const result = await next();
	const response = result.response;
	if (!response || indexable) return result;
	const headers = applyNoIndexResponseHeaders(response.headers);
	return {
		...result,
		response: new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers
		})
	};
});
function resolvePathname(pathname, requestUrl) {
	if (pathname) return pathname;
	try {
		return new URL(requestUrl).pathname;
	} catch {
		return "/";
	}
}
const websiteAccessMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, next }) => {
	if (process.env.TSS_PRERENDERING === "true") return next();
	if (!isWebsiteAccessEnabled(getRuntimeConfig().websiteAccess)) return next();
	const path = resolvePathname(pathname, request.url);
	if (!isWebsiteAccessProtectedPath(path)) return next();
	if (hasWebsiteAccessCookieFromHeader(request.headers.get("cookie"))) return next();
	const redirectUrl = new URL("/access", request.url);
	const redirectTarget = `${path}${new URL(request.url).search}`;
	if (redirectTarget && redirectTarget !== "/access") redirectUrl.searchParams.set("redirect", redirectTarget);
	throw Response.redirect(redirectUrl, 302);
});
const startInstance = createStart(() => ({
	defaultSsr: true,
	requestMiddleware: [
		agentDiscoveryMiddleware,
		seoIndexingMiddleware,
		runtimeConfigMiddleware,
		legacyRedirectsMiddleware,
		websiteAccessMiddleware,
		rootGuestRedirectMiddleware
	]
}));
export { startInstance };
