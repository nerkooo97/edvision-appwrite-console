import { d as sdk } from "./sdk-DjIJ_hjn.js";
var FETCH_TIMEOUT = 1e4;
var DEVICE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:device_code";
var HTTP_URL = /^https?:\/\//i;
function isCimdClientId(clientId) {
	try {
		const url = new URL(clientId);
		return url.protocol === "https:" || url.protocol === "http:" && [
			"localhost",
			"127.0.0.1",
			"[::1]"
		].includes(url.hostname);
	} catch {
		return false;
	}
}
function httpUrlOrEmpty(value) {
	return typeof value === "string" && HTTP_URL.test(value) ? value : "";
}
function stringArray(value) {
	return Array.isArray(value) ? value.filter((entry) => typeof entry === "string") : [];
}
function cimdDocumentToApp(clientId, document) {
	if (typeof document !== "object" || document === null) throw new Error("CIMD document is not a JSON object");
	const doc = document;
	if (doc.client_id !== clientId) throw new Error("CIMD document client_id does not match its URL");
	return {
		$id: clientId,
		$createdAt: "",
		$updatedAt: "",
		name: (typeof doc.client_name === "string" ? doc.client_name.trim() : "") || new URL(clientId).hostname,
		description: "",
		clientUri: httpUrlOrEmpty(doc.client_uri),
		logoUri: httpUrlOrEmpty(doc.logo_uri),
		privacyPolicyUrl: httpUrlOrEmpty(doc.policy_uri),
		termsUrl: httpUrlOrEmpty(doc.tos_uri),
		contacts: stringArray(doc.contacts),
		tagline: "",
		tags: [],
		labels: [],
		images: [],
		supportUrl: "",
		dataDeletionUrl: "",
		redirectUris: stringArray(doc.redirect_uris),
		postLogoutRedirectUris: stringArray(doc.post_logout_redirect_uris),
		enabled: true,
		type: doc.token_endpoint_auth_method === "none" ? "public" : "confidential",
		deviceFlow: stringArray(doc.grant_types).includes(DEVICE_GRANT_TYPE),
		teamId: "",
		userId: "",
		installationScopes: [],
		installationRedirectUrl: "",
		secrets: []
	};
}
async function getOAuth2App(appId) {
	if (!isCimdClientId(appId)) return sdk.forConsole.apps.get({ appId });
	try {
		const response = await fetch(appId, {
			headers: { accept: "application/json" },
			credentials: "omit",
			signal: AbortSignal.timeout(FETCH_TIMEOUT)
		});
		if (!response.ok) throw new Error(`CIMD document request failed: ${response.status}`);
		return cimdDocumentToApp(appId, await response.json());
	} catch {
		return cimdDocumentToApp(appId, { client_id: appId });
	}
}
export { getOAuth2App as t };
