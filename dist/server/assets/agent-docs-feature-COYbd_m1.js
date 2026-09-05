import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
function isAgentDocsSlug(slug) {
	return slug === "products/agent" || slug.startsWith("products/agent/");
}
function isAgentDocsPathname(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	return normalized === "/docs/products/agent" || normalized.startsWith("/docs/products/agent/");
}
function isAgentDocsHref(href) {
	const path = href.split(/[?#]/, 2)[0] ?? href;
	return path === "/docs/products/agent" || path.startsWith("/docs/products/agent/");
}
function isAgentDocsEnabled() {
	return getActiveProfileFeatures().agent;
}
export { isAgentDocsSlug as i, isAgentDocsHref as n, isAgentDocsPathname as r, isAgentDocsEnabled as t };
