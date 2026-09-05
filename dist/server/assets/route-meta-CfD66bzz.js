import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { r as buildOgImageUrl } from "./og-image-DdV5MU0-.js";
import { n as getPageMetaTags } from "./page-meta-DY0pOkK9.js";
const MARKETING_HOMEPAGE_OG_DESCRIPTION = "The open-source developer platform with Auth, Databases, Storage, Functions, Messaging, and Sites. Build like a team of hundreds.";
function asRouteMetaTags(tags) {
	return [...tags];
}
function getMarketingHomeOgImage(siteOrigin) {
	return buildOgImageUrl({
		title: "Appwrite",
		subtitle: MARKETING_HOMEPAGE_OG_DESCRIPTION
	}, siteOrigin);
}
function getMarketingPageMetaTags(input) {
	const siteOrigin = getSeoSiteOrigin(input.siteOrigin);
	return asRouteMetaTags(getPageMetaTags({
		title: pageTitle(input.pageName),
		description: input.description,
		canonical: input.canonical,
		ogType: input.ogType,
		ogImage: input.ogImage,
		ogImageParams: input.ogImage ? void 0 : {
			title: input.ogImageTitle ?? input.pageName,
			subtitle: input.ogImageSubtitle ?? input.description,
			eyebrow: input.ogImageEyebrow,
			cta: input.ogImageCta
		},
		siteOrigin
	}));
}
export { getMarketingPageMetaTags as n, getMarketingHomeOgImage as t };
