import { i as resolveSiteAssetUrl, r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as getPageMetaTags } from "./page-meta-DY0pOkK9.js";
function asRouteMetaTags(tags) {
	return [...tags];
}
function getIntegrationsIndexMetaTags(siteOrigin) {
	return asRouteMetaTags(getPageMetaTags({
		title: pageTitle("Integrations"),
		description: "Connect your favorite apps to Appwrite for a unified tech stack. Explore the Appwrite catalog: a marketplace to find integrations for your projects.",
		ogImageParams: {
			title: "Connect your favorite apps",
			eyebrow: "Integrations",
			subtitle: "Explore the Appwrite catalog: a marketplace to find integrations for your projects."
		},
		siteOrigin: getSeoSiteOrigin(siteOrigin)
	}));
}
function getIntegrationDetailMetaTags(integration, siteOrigin) {
	const title = pageTitle(integration.title);
	const resolvedOrigin = getSeoSiteOrigin(siteOrigin);
	const ogImage = integration.cover ? integration.cover.startsWith("/") ? resolveSiteAssetUrl(integration.cover, resolvedOrigin) : integration.cover : void 0;
	const integrationDescription = integration.description.trim();
	const integrationTitle = integration.title.trim();
	return asRouteMetaTags(getPageMetaTags({
		title,
		description: integration.description,
		ogImage,
		ogImageParams: ogImage ? void 0 : {
			title: integrationTitle,
			eyebrow: "Integrations",
			subtitle: integrationDescription && integrationDescription !== integrationTitle ? integrationDescription : "Connect this integration to your Appwrite project."
		},
		ogType: "article",
		siteOrigin: resolvedOrigin
	}));
}
function getIntegrationsIndexRouteMetaTags() {
	return getIntegrationsIndexMetaTags();
}
function getIntegrationDetailRouteMetaTags(integration) {
	return getIntegrationDetailMetaTags(integration);
}
export { getIntegrationsIndexRouteMetaTags as n, getIntegrationDetailRouteMetaTags as t };
