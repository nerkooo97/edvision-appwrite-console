import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as OG_IMAGE_WIDTH, r as buildOgImageUrl, t as OG_IMAGE_HEIGHT } from "./og-image-DdV5MU0-.js";
const SEO_SITE_NAME = "Appwrite";
function stripPageTitleSuffix(title) {
	return title.replace(/\s·\sAppwrite$/u, "").trim() || title;
}
function getPageMetaTags(options) {
	const siteOrigin = getSeoSiteOrigin(options.siteOrigin);
	const ogImage = options.ogImage ?? buildOgImageUrl(options.ogImageParams ?? { title: stripPageTitleSuffix(options.title) }, siteOrigin);
	return [
		{ title: options.title },
		...options.description ? [{
			name: "description",
			content: options.description
		}] : [],
		{
			property: "og:title",
			content: options.title
		},
		...options.description ? [{
			property: "og:description",
			content: options.description
		}] : [],
		{
			property: "og:site_name",
			content: options.siteName ?? "Appwrite"
		},
		{
			property: "og:type",
			content: options.ogType ?? "website"
		},
		...options.canonical ? [{
			property: "og:url",
			content: options.canonical
		}] : [],
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
			content: options.title
		},
		...options.description ? [{
			name: "twitter:description",
			content: options.description
		}] : [],
		{
			name: "twitter:image",
			content: ogImage
		},
		...options.canonical ? [{
			tag: "link",
			rel: "canonical",
			href: options.canonical
		}] : []
	];
}
export { getPageMetaTags as n, SEO_SITE_NAME as t };
