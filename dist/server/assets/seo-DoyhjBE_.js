import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_SITE_ORIGIN } from "./urls-BIlyr2O2.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as OG_IMAGE_WIDTH, r as buildOgImageUrl, t as OG_IMAGE_HEIGHT } from "./og-image-DdV5MU0-.js";
import { t as SEO_SITE_NAME } from "./page-meta-DY0pOkK9.js";
import { l as getPublisherSchema, u as getCoverImageDimensions } from "./seo-BkUvL66S.js";
const CHANGELOG_DEFAULT_DESCRIPTION = "Explore Appwrite's changelog to stay on top of all the product updates and track our journey.";
function getChangelogCanonicalUrl(path) {
	return `${MARKETING_SITE_ORIGIN}${path}`;
}
function getChangelogEntryDescription(entry) {
	const description = entry.description?.trim();
	return description && description !== entry.title ? description : CHANGELOG_DEFAULT_DESCRIPTION;
}
function getChangelogEntryOgImage(entry, siteOrigin) {
	if (entry.cover) return entry.cover;
	return buildOgImageUrl({
		title: entry.title,
		eyebrow: "Changelog",
		subtitle: getChangelogEntryDescription(entry)
	}, siteOrigin);
}
function getChangelogEntryMetaTags(entry, options) {
	const siteOrigin = getSeoSiteOrigin(options?.siteOrigin);
	const title = pageTitle(entry.title);
	const description = getChangelogEntryDescription(entry);
	const canonical = getChangelogCanonicalUrl(entry.href);
	const ogImage = getChangelogEntryOgImage(entry, siteOrigin);
	const ogImageDimensions = entry.cover ? getCoverImageDimensions(entry.cover) : {
		width: OG_IMAGE_WIDTH,
		height: OG_IMAGE_HEIGHT
	};
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: entry.title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:site_name",
			content: SEO_SITE_NAME
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
		...ogImageDimensions ? [{
			property: "og:image:width",
			content: String(ogImageDimensions.width)
		}, {
			property: "og:image:height",
			content: String(ogImageDimensions.height)
		}] : [],
		{
			property: "article:published_time",
			content: entry.date
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: entry.title
		},
		{
			name: "twitter:description",
			content: description
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
function getChangelogEntrySchema(entry) {
	const canonical = getChangelogCanonicalUrl(entry.href);
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: entry.title,
		description: getChangelogEntryDescription(entry),
		datePublished: entry.date,
		url: canonical,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": canonical
		},
		...entry.cover ? { image: [entry.cover] } : {},
		author: getPublisherSchema(),
		publisher: getPublisherSchema()
	};
}
export { getChangelogEntryMetaTags as n, getChangelogEntrySchema as r, CHANGELOG_DEFAULT_DESCRIPTION as t };
