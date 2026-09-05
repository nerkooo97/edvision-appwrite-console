import { i as getBlogCategoryMetaTags, n as getBlogAuthorMetaTags, o as getBlogIndexMetaTags, s as getBlogPostMetaTags } from "./seo-BkUvL66S.js";
function asRouteMetaTags(tags) {
	return [...tags];
}
function getBlogIndexRouteMetaTags(options) {
	return asRouteMetaTags(getBlogIndexMetaTags(options));
}
function getBlogPostRouteMetaTags(post, authors = [], options) {
	return asRouteMetaTags(getBlogPostMetaTags(post, authors, options));
}
function getBlogCategoryRouteMetaTags(category, options) {
	return asRouteMetaTags(getBlogCategoryMetaTags(category, options));
}
function getBlogAuthorRouteMetaTags(author, options) {
	return asRouteMetaTags(getBlogAuthorMetaTags(author, options));
}
export { getBlogPostRouteMetaTags as i, getBlogCategoryRouteMetaTags as n, getBlogIndexRouteMetaTags as r, getBlogAuthorRouteMetaTags as t };
