import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { n as normalizeMarketingPath, t as MARKETING_PAGE_PATHS } from "./marketing-page-paths-m03JEIkd.js";
import { n as isMarketingRouteMatch } from "./route-static-data-C0zd0Uu7.js";
function isMarketingPagePath(pathname) {
	const normalized = normalizeMarketingPath(pathname);
	if (!getActiveProfileFeatures().marketing) return false;
	if (normalized === "/docs" || normalized.startsWith("/docs/")) return true;
	if (normalized === "/changelog" || normalized.startsWith("/changelog/")) return true;
	if (normalized === "/blog" || normalized.startsWith("/blog/")) return true;
	if (normalized === "/threads" || normalized.startsWith("/threads/")) return true;
	if (normalized.startsWith("/products/")) return true;
	return MARKETING_PAGE_PATHS.includes(normalized);
}
function isMarketingPage({ pathname, matches }) {
	return matches?.some(isMarketingRouteMatch) || (pathname ? isMarketingPagePath(pathname) : false);
}
export { isMarketingPagePath as n, isMarketingPage as t };
