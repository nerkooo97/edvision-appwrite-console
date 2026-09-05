import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as OG_IMAGE_WIDTH, r as buildOgImageUrl, t as OG_IMAGE_HEIGHT } from "./og-image-DdV5MU0-.js";
var SITE_ORIGIN = "https://appwrite.io";
function getDocsCanonicalUrl(slug) {
	return `${SITE_ORIGIN}${slug ? `/docs/${slug}` : "/docs"}`;
}
function getDocsPageTitle(meta, isOverview = false) {
	if (isOverview) return `${meta.title} - Overview - Appwrite`;
	return `${meta.title} - Docs - Appwrite`;
}
var DOCS_OG_EYEBROW = "Documentation";
var DOCS_OG_FALLBACK_SUBTITLE = "Guides and references for building with Appwrite.";
var DOCS_OG_HOME_TITLE = "Build with Appwrite";
function getDocsOgImageUrl(meta, siteOrigin) {
	const title = meta.title.trim();
	const description = meta.description.trim();
	const ogTitle = title.localeCompare(DOCS_OG_EYEBROW, void 0, { sensitivity: "accent" }) === 0 ? DOCS_OG_HOME_TITLE : title;
	return buildOgImageUrl({
		title: ogTitle,
		eyebrow: DOCS_OG_EYEBROW,
		subtitle: description && description !== ogTitle && description !== title ? description : DOCS_OG_FALLBACK_SUBTITLE
	}, siteOrigin);
}
function getDocsMetaTags(meta, slug, options) {
	const title = getDocsPageTitle(meta, slug.split("/").pop() === slug.split("/")[0] && !slug.includes("/"));
	const canonical = getDocsCanonicalUrl(options?.canonicalSlug ?? slug);
	const ogImage = getDocsOgImageUrl(meta, getSeoSiteOrigin(options?.siteOrigin));
	return [
		{ title },
		{
			name: "description",
			content: meta.description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: meta.description
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			property: "og:url",
			content: canonical
		},
		{
			property: "og:image",
			content: ogImage
		},
		{
			property: "og:image:width",
			content: String(OG_IMAGE_WIDTH)
		},
		{
			property: "og:image:height",
			content: String(OG_IMAGE_HEIGHT)
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: meta.description
		},
		{
			name: "twitter:image",
			content: ogImage
		},
		{
			tag: "link",
			rel: "canonical",
			href: canonical
		}
	];
}
function getDocsBreadcrumbSchema(meta, slug, options) {
	const effectiveSlug = options?.canonicalSlug ?? slug;
	const parts = effectiveSlug ? effectiveSlug.split("/") : [];
	const items = [{
		name: "Docs",
		item: `${SITE_ORIGIN}/docs`
	}, ...parts.map((part, index) => ({
		name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
		item: `${SITE_ORIGIN}/docs/${parts.slice(0, index + 1).join("/")}`
	}))];
	if (parts.length > 0) items[items.length - 1] = {
		name: meta.title,
		item: getDocsCanonicalUrl(effectiveSlug)
	};
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.item
		}))
	};
}
function getDocsArticleSchema(meta, slug, options) {
	const effectiveSlug = options?.canonicalSlug ?? slug;
	return {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: meta.title,
		description: meta.description,
		url: getDocsCanonicalUrl(effectiveSlug),
		...meta.readingTimeMinutes ? { timeRequired: `PT${meta.readingTimeMinutes}M` } : {},
		publisher: {
			"@type": "Organization",
			name: "Appwrite",
			url: SITE_ORIGIN
		}
	};
}
function getDocsMetaTags$1(meta, options) {
	return getDocsMetaTags({
		slug: meta.slug,
		title: meta.title,
		description: meta.description,
		layout: "article"
	}, meta.slug, options);
}
export { getDocsArticleSchema as n, getDocsBreadcrumbSchema as r, getDocsMetaTags$1 as t };
