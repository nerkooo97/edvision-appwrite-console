import { i as getRequestUrl } from "../server.js";
function getSitemapSiteOrigin() {
	return ((typeof process !== "undefined" ? process.env.VITE_SITE_ORIGIN?.trim() : void 0) || "https://appwrite.io").replace(/\/+$/, "");
}
function getDefaultSiteOrigin() {
	return getSitemapSiteOrigin();
}
function getSeoSiteOrigin(siteOrigin) {
	return (siteOrigin ?? getRequestSiteOrigin()).replace(/\/+$/, "");
}
function resolveSiteAssetUrl(path, siteOrigin) {
	if (!path.startsWith("/")) return path;
	return `${getSeoSiteOrigin(siteOrigin)}${path}`;
}
const getRequestSiteOrigin = () => {
	try {
		return getRequestUrl({
			xForwardedHost: true,
			xForwardedProto: true
		}).origin;
	} catch {
		return getDefaultSiteOrigin();
	}
};
export { resolveSiteAssetUrl as i, getRequestSiteOrigin as n, getSeoSiteOrigin as r, getDefaultSiteOrigin as t };
