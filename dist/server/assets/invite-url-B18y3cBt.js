import { o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
var AFFILIATE_LINK_ID_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/;
function isValidAffiliateLinkId(linkId) {
	return AFFILIATE_LINK_ID_PATTERN.test(linkId);
}
function buildAffiliateApiInviteUrl(linkId) {
	return `${getApiEndpoint().replace(/\/$/, "")}/affiliates/invite/${encodeURIComponent(linkId)}`;
}
function buildAffiliateInvitePath(linkId) {
	return `/i/${encodeURIComponent(linkId)}`;
}
function buildAffiliateInviteUrl(linkId) {
	const path = buildAffiliateInvitePath(linkId);
	if (typeof window !== "undefined") return `${window.location.origin}${path}`;
	return path;
}
export { isValidAffiliateLinkId as i, buildAffiliateInvitePath as n, buildAffiliateInviteUrl as r, buildAffiliateApiInviteUrl as t };
