import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
function isPartnersDocsSlug(slug) {
	return slug === "partners" || slug.startsWith("partners/");
}
function isPartnersDocsPathname(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	return normalized === "/docs/partners" || normalized.startsWith("/docs/partners/");
}
function isPartnersDocsEnabled() {
	return getActiveProfileFeatures().partnersDocs;
}
function shouldBlockPartnersDocs() {
	if (isPartnersDocsEnabled()) return false;
	if (typeof window === "undefined") return false;
	return true;
}
export { shouldBlockPartnersDocs as i, isPartnersDocsPathname as n, isPartnersDocsSlug as r, isPartnersDocsEnabled as t };
