const NOINDEX_ROBOTS_META = {
	name: "robots",
	content: "noindex, nofollow"
};
const INDEXABLE_ROBOTS_META = {
	name: "robots",
	content: "max-image-preview:large"
};
const NOINDEX_ROBOTS_HEADER = "noindex, nofollow";
function normalizeRequestHost(host) {
	return host.trim().toLowerCase().split(":")[0] ?? "";
}
function isSeoIndexableHost(host) {
	return true;
}
function isSeoIndexableOrigin(origin) {
	try {
		return isSeoIndexableHost(new URL(origin).hostname);
	} catch {
		return false;
	}
}
function getRequestHostFromHeaders(headers, requestUrl) {
	const forwarded = headers.get("x-forwarded-host");
	if (forwarded) {
		const first = forwarded.split(",")[0]?.trim();
		if (first) return normalizeRequestHost(first);
	}
	try {
		return normalizeRequestHost(new URL(requestUrl).host);
	} catch {
		return "";
	}
}
function getSeoRobotsMetaTags(siteOrigin) {
	return isSeoIndexableOrigin(siteOrigin) ? [INDEXABLE_ROBOTS_META] : [NOINDEX_ROBOTS_META];
}
function getNonProductionRobotsTxt() {
	return `# Non-production host. Do not index.
User-agent: *
Disallow: /
`;
}
function applyNoIndexResponseHeaders(headers) {
	const next = new Headers(headers);
	next.set("X-Robots-Tag", NOINDEX_ROBOTS_HEADER);
	return next;
}
export { getRequestHostFromHeaders as a, getNonProductionRobotsTxt as i, NOINDEX_ROBOTS_META as n, getSeoRobotsMetaTags as o, applyNoIndexResponseHeaders as r, isSeoIndexableHost as s, NOINDEX_ROBOTS_HEADER as t };
