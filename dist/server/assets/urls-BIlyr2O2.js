import { n as normalizeMarketingPath, t as MARKETING_PAGE_PATHS } from "./marketing-page-paths-m03JEIkd.js";
const MARKETING_SITE_ORIGIN = "https://appwrite.io";
function getMarketingPageUrl(path, marketingEnabled) {
	return marketingEnabled ? path : `${MARKETING_SITE_ORIGIN}${path}`;
}
function isMarketingPageExternal(marketingEnabled) {
	return !marketingEnabled;
}
function normalizeBlogPath(path) {
	return path.split("#")[0]?.replace(/\/+$/, "") || "/blog";
}
function parseBlogPagePath(href) {
	const trimmed = href.trim();
	if (trimmed.startsWith("/blog")) return normalizeBlogPath(trimmed);
	const match = trimmed.match(/^https?:\/\/(?:www\.)?appwrite\.io(\/blog(?:\/.*)?)?(?:[?#].*)?$/i);
	if (!match) return null;
	return normalizeBlogPath(match[1] ?? "/blog");
}
function getBlogPageUrl(path, marketingEnabled) {
	const blogPath = parseBlogPagePath(path);
	if (!blogPath) return path;
	return marketingEnabled ? blogPath : `${MARKETING_SITE_ORIGIN}${blogPath}`;
}
function isBlogPageExternal(marketingEnabled) {
	return !marketingEnabled;
}
function normalizeDocsPath(path) {
	const normalized = (path.split("#")[0]?.split("?")[0] ?? "/docs").replace(/\/+$/, "") || "/docs";
	return normalized === "" ? "/docs" : normalized;
}
function splitHrefHash(href) {
	const trimmed = href.trim();
	const hashIndex = trimmed.indexOf("#");
	if (hashIndex < 0) return {
		pathname: trimmed,
		hash: ""
	};
	return {
		pathname: trimmed.slice(0, hashIndex),
		hash: trimmed.slice(hashIndex + 1)
	};
}
function appendHrefHash(url, hash) {
	return hash ? `${url}#${hash}` : url;
}
function parseDocsPagePath(href) {
	const trimmed = href.trim();
	if (trimmed.startsWith("/docs")) return normalizeDocsPath(trimmed);
	const match = trimmed.match(/^https?:\/\/(?:www\.)?appwrite\.io(\/docs(?:\/.*)?)?(?:[?#].*)?$/i);
	if (!match) return null;
	return normalizeDocsPath(match[1] ?? "/docs");
}
function getDocsPageUrl(path, marketingEnabled) {
	const { pathname, hash } = splitHrefHash(path);
	const docsPath = parseDocsPagePath(pathname);
	if (!docsPath) return path;
	return appendHrefHash(marketingEnabled ? docsPath : `${MARKETING_SITE_ORIGIN}${docsPath}`, hash);
}
function isDocsPageExternal(marketingEnabled) {
	return !marketingEnabled;
}
function getDocsPageUrlFromSlug(slug, marketingEnabled) {
	return getDocsPageUrl(slug ? `/docs/${slug}` : "/docs", marketingEnabled);
}
function normalizeProductPath(path) {
	return path.split("#")[0]?.replace(/\/+$/, "") || "";
}
function parseProductPagePath(href) {
	const trimmed = href.trim();
	if (trimmed.startsWith("/products/")) return normalizeProductPath(trimmed);
	const match = trimmed.match(/^https?:\/\/(?:www\.)?appwrite\.io(\/products\/[^?#]*)(?:[?#].*)?$/i);
	if (!match?.[1]) return null;
	return normalizeProductPath(match[1]);
}
function getProductPageUrl(path, marketingEnabled) {
	const productPath = parseProductPagePath(path);
	if (!productPath) return path;
	return marketingEnabled ? productPath : `${MARKETING_SITE_ORIGIN}${productPath}`;
}
function isProductPageExternal(marketingEnabled) {
	return !marketingEnabled;
}
function parseMarketingSitePagePath(href) {
	const trimmed = href.trim();
	let path = null;
	if (trimmed.startsWith("/")) path = normalizeMarketingPath(trimmed.split("#")[0] ?? trimmed);
	else {
		const match = trimmed.match(/^https?:\/\/(?:www\.)?appwrite\.io(\/[^?#]*)(?:[?#].*)?$/i);
		path = match?.[1] ? normalizeMarketingPath(match[1]) : null;
	}
	if (!path) return null;
	return MARKETING_PAGE_PATHS.includes(path) ? path : null;
}
function resolveSiteLinkUrl(href, marketingEnabled) {
	if (parseDocsPagePath(href)) return getDocsPageUrl(href, marketingEnabled);
	const blogPath = parseBlogPagePath(href);
	if (blogPath) return getBlogPageUrl(blogPath, marketingEnabled);
	const productPath = parseProductPagePath(href);
	if (productPath) return getProductPageUrl(productPath, marketingEnabled);
	const marketingPath = parseMarketingSitePagePath(href);
	if (marketingPath) return marketingEnabled ? marketingPath : `${MARKETING_SITE_ORIGIN}${marketingPath}`;
	return href;
}
function isSiteLinkExternal(href, marketingEnabled) {
	if (parseDocsPagePath(href)) return isDocsPageExternal(marketingEnabled);
	if (parseBlogPagePath(href)) return isBlogPageExternal(marketingEnabled);
	if (parseProductPagePath(href)) return isProductPageExternal(marketingEnabled);
	if (parseMarketingSitePagePath(href)) return isMarketingPageExternal(marketingEnabled);
	return /^https?:\/\//i.test(href.trim());
}
function getSiteLinkInternalPath(href) {
	const { pathname, hash } = splitHrefHash(href);
	const docsPath = parseDocsPagePath(pathname);
	if (docsPath) return appendHrefHash(docsPath, hash);
	const blogPath = parseBlogPagePath(pathname);
	if (blogPath) return appendHrefHash(blogPath, hash);
	const productPath = parseProductPagePath(pathname);
	if (productPath) return appendHrefHash(productPath, hash);
	const marketingPath = parseMarketingSitePagePath(pathname);
	if (marketingPath) return appendHrefHash(marketingPath, hash);
	if (pathname.startsWith("/")) return appendHrefHash(pathname.split("?")[0] ?? pathname, hash);
	return null;
}
export { splitHrefHash as _, getMarketingPageUrl as a, isBlogPageExternal as c, isProductPageExternal as d, isSiteLinkExternal as f, resolveSiteLinkUrl as g, parseMarketingSitePagePath as h, getDocsPageUrlFromSlug as i, isDocsPageExternal as l, parseDocsPagePath as m, getBlogPageUrl as n, getProductPageUrl as o, parseBlogPagePath as p, getDocsPageUrl as r, getSiteLinkInternalPath as s, MARKETING_SITE_ORIGIN as t, isMarketingPageExternal as u };
