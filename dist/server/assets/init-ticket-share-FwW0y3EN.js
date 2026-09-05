import { d as INIT_TICKET_OG_EXPORT_HEIGHT, f as INIT_TICKET_OG_EXPORT_WIDTH } from "./ticket-layout-B97VGq99.js";
import { i as resolveSiteAssetUrl, n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as getPageMetaTags } from "./page-meta-DY0pOkK9.js";
const INIT_PAGE_SEO_TITLE = "Init week: Five days of launches, demos, and giveaways";
const INIT_PAGE_SEO_DESCRIPTION = "Join Init week August 31–September 4. Claim your personalized pass, watch live product launches, and enter giveaways for exclusive swag.";
const INIT_TICKET_SHARE_SEO_TITLE = "Init week ticket: Claim your pass and win launch swag";
const INIT_TICKET_SHARE_SEO_DESCRIPTION = "Join Init week. Claim your personalized pass and share for a chance to win exclusive swag.";
const INIT_OG_CTA_LABEL = "Claim your ticket";
const INIT_PAGE_OG_IMAGE_PATH = "/og/init.png";
const INIT_PAGE_OG_IMAGE_PARAMS = {
	title: "Five days of Appwrite product launches",
	subtitle: "Claim your personalized Init pass and join live sessions.",
	eyebrow: "Init week · August 31–September 4",
	cta: INIT_OG_CTA_LABEL
};
function getInitPageOgImageUrl(siteOrigin) {
	return resolveSiteAssetUrl(INIT_PAGE_OG_IMAGE_PATH, siteOrigin);
}
function getInitPageMetaTags(siteOrigin) {
	const origin = siteOrigin ?? getRequestSiteOrigin();
	return [...getPageMetaTags({
		title: pageTitle(INIT_PAGE_SEO_TITLE),
		description: INIT_PAGE_SEO_DESCRIPTION,
		canonical: resolveSiteAssetUrl("/init", origin),
		ogImage: getInitPageOgImageUrl(origin),
		siteOrigin: origin
	})];
}
function readEnvValue(env, key) {
	return (env[key] ?? "").toString().trim();
}
function readInitTicketStorageConfigFromEnv(env) {
	return {
		endpoint: readEnvValue(env, "VITE_INIT_TICKET_STORAGE_ENDPOINT") || readEnvValue(env, "INIT_TICKET_STORAGE_ENDPOINT") || "https://fra.cloud.appwrite.io/v1",
		projectId: readEnvValue(env, "VITE_INIT_TICKET_STORAGE_PROJECT_ID") || readEnvValue(env, "INIT_TICKET_STORAGE_PROJECT_ID") || "659868b10fff07726b85",
		bucketId: readEnvValue(env, "VITE_INIT_TICKET_STORAGE_BUCKET_ID") || readEnvValue(env, "INIT_TICKET_STORAGE_BUCKET_ID") || "tickets"
	};
}
function getInitTicketStorageConfig() {
	if (typeof import.meta !== "undefined" && {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_APP_BASE": "/",
		"TSS_CLIENT_OUTPUT_DIR": "dist/client",
		"TSS_DEV_SERVER": "false",
		"TSS_SERVER_FN_BASE": "/_serverFn",
		"VITE_APPWRITE_PROJECT_ID": "",
		"VITE_COMPANY_NAME": "",
		"VITE_CONTACT_SALES_URL": "",
		"VITE_LEGAL_EMAIL": ""
	}) return readInitTicketStorageConfigFromEnv({
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_APP_BASE": "/",
		"TSS_CLIENT_OUTPUT_DIR": "dist/client",
		"TSS_DEV_SERVER": "false",
		"TSS_SERVER_FN_BASE": "/_serverFn",
		"VITE_APPWRITE_PROJECT_ID": "",
		"VITE_COMPANY_NAME": "",
		"VITE_CONTACT_SALES_URL": "",
		"VITE_LEGAL_EMAIL": ""
	});
	return readInitTicketStorageConfigFromEnv(process.env);
}
function isInitTicketStorageConfigured() {
	const { endpoint, projectId, bucketId } = getInitTicketStorageConfig();
	return Boolean(endpoint && projectId && bucketId);
}
function getInitTicketStorageFileViewUrl(fileId) {
	const { endpoint, projectId, bucketId } = getInitTicketStorageConfig();
	return `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?${new URLSearchParams({ project: projectId }).toString()}`;
}
function buildInitTicketShareOgImagePath(ticketId) {
	return `/init/${ticketId}/og.png`;
}
function getInitTicketShareOgImageUrl(ticketId, siteOrigin) {
	return resolveSiteAssetUrl(buildInitTicketShareOgImagePath(ticketId), siteOrigin);
}
function buildInitTicketSharePath(ticketId) {
	return `/init/${ticketId}`;
}
function buildInitTicketShareUrl(ticketId, siteOrigin) {
	return resolveSiteAssetUrl(buildInitTicketSharePath(ticketId), siteOrigin);
}
async function initTicketStorageFileExists(fileId) {
	const { endpoint, projectId, bucketId } = getInitTicketStorageConfig();
	const params = new URLSearchParams({ project: projectId });
	try {
		return (await fetch(`${endpoint}/storage/buckets/${bucketId}/files/${fileId}?${params.toString()}`, { method: "GET" })).ok;
	} catch {
		return false;
	}
}
function getInitTicketShareRouteMetaTags(params) {
	const siteOrigin = params.siteOrigin ?? getRequestSiteOrigin();
	const canonicalUrl = buildInitTicketShareUrl(params.ticketId, siteOrigin);
	const ogImage = getInitTicketShareOgImageUrl(params.ticketId, siteOrigin);
	return [...getPageMetaTags({
		title: pageTitle(INIT_TICKET_SHARE_SEO_TITLE),
		description: INIT_TICKET_SHARE_SEO_DESCRIPTION,
		canonical: canonicalUrl,
		ogImage,
		ogType: "website",
		siteOrigin
	}).map((tag) => {
		if ("property" in tag && tag.property === "og:image:width") return {
			property: "og:image:width",
			content: String(INIT_TICKET_OG_EXPORT_WIDTH)
		};
		if ("property" in tag && tag.property === "og:image:height") return {
			property: "og:image:height",
			content: String(630)
		};
		return tag;
	})];
}
function getInitTicketShareImageSrc(ticketId) {
	return getInitTicketStorageFileViewUrl(ticketId);
}
export { getInitTicketStorageConfig as a, INIT_PAGE_OG_IMAGE_PARAMS as c, initTicketStorageFileExists as i, getInitPageMetaTags as l, getInitTicketShareImageSrc as n, getInitTicketStorageFileViewUrl as o, getInitTicketShareRouteMetaTags as r, isInitTicketStorageConfigured as s, buildInitTicketShareUrl as t };
