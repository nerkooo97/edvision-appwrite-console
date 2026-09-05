import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Nt as resolvePostAuthOrganizationId, Un as USER_PREFS_KEY_ORGANIZATION, l as ensureConsoleAccountQueryData } from "./auth-BPuxYQAc.js";
import { redirect } from "@tanstack/react-router";
import { AppwriteException } from "@appwrite.io/console";
const ASSISTANT_MCP_OAUTH_CALLBACK_PATH = "/agent/mcp/callback";
const ASSISTANT_MCP_OAUTH_MESSAGE_TYPE = "assistant-mcp-oauth";
const ASSISTANT_MCP_OAUTH_STORAGE_KEY = "assistant.mcp.oauth.pending";
function base64UrlEncode(bytes) {
	const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
	let binary = "";
	for (const byte of view) binary += String.fromCharCode(byte);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function randomUrlSafeString(byteLength) {
	const bytes = new Uint8Array(byteLength);
	crypto.getRandomValues(bytes);
	return base64UrlEncode(bytes);
}
async function sha256Base64Url(input) {
	const data = new TextEncoder().encode(input);
	return base64UrlEncode(await crypto.subtle.digest("SHA-256", data));
}
function getAssistantMcpOAuthRedirectUri(origin = typeof window !== "undefined" ? window.location.origin : "") {
	return `${origin.replace(/\/+$/, "")}${ASSISTANT_MCP_OAUTH_CALLBACK_PATH}`;
}
function savePendingSession(session) {
	sessionStorage.setItem(ASSISTANT_MCP_OAUTH_STORAGE_KEY, JSON.stringify(session));
}
function readPendingMcpOAuthSession() {
	const raw = sessionStorage.getItem(ASSISTANT_MCP_OAUTH_STORAGE_KEY);
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function clearPendingMcpOAuthSession() {
	sessionStorage.removeItem(ASSISTANT_MCP_OAUTH_STORAGE_KEY);
}
async function fetchJson(url, init) {
	const response = await fetch(url, init);
	const text = await response.text();
	let body = null;
	if (text) try {
		body = JSON.parse(text);
	} catch {
		body = text;
	}
	if (!response.ok) {
		const detail = body && typeof body === "object" && body !== null && ("error_description" in body || "message" in body || "error" in body) ? String(body.error_description || body.message || body.error) : `${response.status} ${response.statusText}`;
		throw new Error(detail || `Request failed: ${url}`);
	}
	return body;
}
function joinUrl(base, path) {
	return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
async function discoverProtectedResource(mcpUrl) {
	const url = new URL(mcpUrl);
	const candidates = [joinUrl(url.origin, "/.well-known/oauth-protected-resource"), joinUrl(url.origin, `/.well-known/oauth-protected-resource${url.pathname === "/" ? "" : url.pathname}`)];
	let lastError;
	for (const candidate of candidates) try {
		return await fetchJson(candidate);
	} catch (error) {
		lastError = error;
	}
	throw lastError instanceof Error ? lastError : /* @__PURE__ */ new Error("Failed to discover MCP protected resource metadata");
}
async function discoverAuthorizationServer(authorizationServer) {
	const base = authorizationServer.replace(/\/+$/, "");
	const candidates = [`${base}/.well-known/openid-configuration`, `${base}/.well-known/oauth-authorization-server`];
	let lastError;
	for (const candidate of candidates) try {
		return await fetchJson(candidate);
	} catch (error) {
		lastError = error;
	}
	throw lastError instanceof Error ? lastError : /* @__PURE__ */ new Error("Failed to discover authorization server metadata");
}
async function registerPublicClient(params) {
	const body = {
		client_name: params.clientName,
		redirect_uris: [params.redirectUri],
		token_endpoint_auth_method: "none",
		grant_types: ["authorization_code", "refresh_token"],
		response_types: ["code"],
		application_type: "web",
		client_uri: typeof window !== "undefined" ? window.location.origin : void 0
	};
	const client = await fetchJson(params.registrationEndpoint, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
	if (!client.client_id) throw new Error("Dynamic client registration did not return a client_id");
	return client;
}
const MCP_DEFAULT_AUTHORIZATION_DETAILS = [{
	type: "project",
	identifiers: ["*"]
}, {
	type: "organization",
	identifiers: ["*"]
}];
function buildAuthorizeUrl(params) {
	const url = new URL(params.authorizationEndpoint);
	url.searchParams.set("response_type", "code");
	url.searchParams.set("client_id", params.clientId);
	url.searchParams.set("redirect_uri", params.redirectUri);
	url.searchParams.set("scope", params.scope);
	url.searchParams.set("state", params.state);
	url.searchParams.set("code_challenge", params.codeChallenge);
	url.searchParams.set("code_challenge_method", "S256");
	url.searchParams.set("resource", params.resource);
	if (params.authorizationDetails) url.searchParams.set("authorization_details", params.authorizationDetails);
	return url.toString();
}
async function exchangeMcpOAuthCode(params) {
	const tokens = await fetchJson(params.tokenEndpoint, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			grant_type: "authorization_code",
			code: params.code,
			redirect_uri: params.redirectUri,
			client_id: params.clientId,
			code_verifier: params.codeVerifier,
			resource: params.resource
		})
	});
	if (!tokens.access_token) throw new Error("Token response did not include an access_token");
	return tokens;
}
var MCP_DEFAULT_SCOPES = [
	"openid",
	"profile",
	"email",
	"project:all",
	"organization:all"
];
function buildFixedClientInfo(params) {
	return {
		client_id: params.clientId,
		client_name: params.clientName || "Appwrite Agent",
		token_endpoint_auth_method: "none",
		redirect_uris: [params.redirectUri]
	};
}
function scopeFromInput(input) {
	return (input.scopes && input.scopes.length > 0 ? input.scopes : [...MCP_DEFAULT_SCOPES]).join(" ");
}
function isInvalidOAuthClientError(error) {
	if (error instanceof AppwriteException) return error.type === "oauth2_invalid_client_id" || error.code === 400 && /invalid client/i.test(error.message);
	if (!error || typeof error !== "object") return false;
	const typed = error;
	if (typed.type === "oauth2_invalid_client_id") return true;
	return typed.code === 400 && typeof typed.message === "string" && /invalid client/i.test(typed.message);
}
function extractAuthorizationCodeFromRedirectUrl(redirectUrl, expectedState) {
	let url;
	try {
		url = new URL(redirectUrl, typeof window !== "undefined" ? window.location.origin : void 0);
	} catch {
		throw new Error("Authorization redirect URL was invalid");
	}
	const error = url.searchParams.get("error");
	if (error) throw new Error(url.searchParams.get("error_description") || error || "Authorization was denied");
	const code = url.searchParams.get("code");
	if (!code) throw new Error("Authorization redirect did not include a code");
	if (expectedState) {
		if (url.searchParams.get("state") !== expectedState) throw new Error("MCP OAuth state mismatch");
	}
	return code;
}
async function prepareMcpOAuthSession(input) {
	if (typeof window === "undefined") throw new Error("MCP OAuth can only run in the browser");
	const redirectUri = getAssistantMcpOAuthRedirectUri();
	const resource = input.resource || input.url;
	const authorizationServer = (await discoverProtectedResource(input.url)).authorization_servers?.[0];
	if (!authorizationServer) throw new Error("MCP server did not advertise an authorization server");
	const asMeta = await discoverAuthorizationServer(authorizationServer);
	if (!asMeta.authorization_endpoint || !asMeta.token_endpoint) throw new Error("Authorization server metadata is incomplete");
	if (asMeta.code_challenge_methods_supported && !asMeta.code_challenge_methods_supported.includes("S256")) throw new Error("Authorization server does not support PKCE S256");
	const scope = scopeFromInput(input);
	const fixedClientId = input.clientId?.trim();
	let client;
	if (fixedClientId) client = buildFixedClientInfo({
		clientId: fixedClientId,
		clientName: input.clientName,
		redirectUri
	});
	else {
		if (!asMeta.registration_endpoint) throw new Error("Authorization server does not support dynamic client registration");
		client = await registerPublicClient({
			registrationEndpoint: asMeta.registration_endpoint,
			redirectUri,
			clientName: input.clientName || "Appwrite Agent"
		});
	}
	const state = randomUrlSafeString(24);
	const codeVerifier = randomUrlSafeString(64);
	const codeChallenge = await sha256Base64Url(codeVerifier);
	const authorizationDetails = JSON.stringify(MCP_DEFAULT_AUTHORIZATION_DETAILS);
	const session = {
		mcpId: input.mcpId,
		name: input.name,
		url: input.url,
		description: input.description,
		resource,
		state,
		codeVerifier,
		redirectUri,
		authorizationServer,
		authorizationEndpoint: asMeta.authorization_endpoint,
		tokenEndpoint: asMeta.token_endpoint,
		client,
		createdAt: Date.now()
	};
	savePendingSession(session);
	return {
		session,
		scope,
		codeChallenge,
		authorizationDetails
	};
}
async function resolveAuthorizationCode(params) {
	const authorizeResult = await sdk.forConsole.oauth2.authorize({
		clientId: params.clientId,
		redirectUri: params.redirectUri,
		responseType: "code",
		scope: params.scope,
		state: params.state,
		codeChallenge: params.codeChallenge,
		codeChallengeMethod: "S256",
		resource: params.resource,
		authorizationDetails: params.authorizationDetails
	});
	let redirectUrl = authorizeResult.redirectUrl?.trim() || "";
	if (!redirectUrl) {
		const grantId = authorizeResult.grantId?.trim();
		if (!grantId) throw new Error("Authorization did not return a grant or redirect");
		redirectUrl = (await sdk.forConsole.oauth2.approve({ grantId })).redirectUrl?.trim() || "";
	}
	if (!redirectUrl) throw new Error("Authorization approve did not return a redirect URL");
	return extractAuthorizationCodeFromRedirectUrl(redirectUrl, params.state);
}
async function connectMcpOAuthSilentlyWithDcr(input) {
	const { session, scope, codeChallenge, authorizationDetails } = await prepareMcpOAuthSession({
		...input,
		clientId: void 0
	});
	try {
		return await completeMcpOAuthConnect({
			code: await resolveAuthorizationCode({
				clientId: session.client.client_id,
				redirectUri: session.redirectUri,
				scope,
				state: session.state,
				codeChallenge,
				resource: session.resource,
				authorizationDetails
			}),
			session
		});
	} catch (error) {
		clearPendingMcpOAuthSession();
		throw error;
	}
}
async function connectMcpOAuthSilently(input) {
	const fixedClientId = input.clientId?.trim();
	if (fixedClientId) {
		if (typeof window === "undefined") throw new Error("MCP OAuth can only run in the browser");
		const redirectUri = getAssistantMcpOAuthRedirectUri();
		const resource = input.resource || input.url;
		const scope = scopeFromInput(input);
		const state = randomUrlSafeString(24);
		const codeVerifier = randomUrlSafeString(64);
		const codeChallenge = await sha256Base64Url(codeVerifier);
		const authorizationDetails = JSON.stringify(MCP_DEFAULT_AUTHORIZATION_DETAILS);
		const clientInfo = buildFixedClientInfo({
			clientId: fixedClientId,
			clientName: input.clientName,
			redirectUri
		});
		try {
			const code = await resolveAuthorizationCode({
				clientId: fixedClientId,
				redirectUri,
				scope,
				state,
				codeChallenge,
				resource,
				authorizationDetails
			});
			const tokens = await sdk.forConsole.oauth2.createToken({
				grantType: "authorization_code",
				code,
				redirectUri,
				clientId: fixedClientId,
				codeVerifier,
				resource
			});
			if (!tokens.access_token) throw new Error("Token response did not include an access_token");
			return {
				mcpId: input.mcpId,
				name: input.name,
				url: input.url,
				description: input.description,
				tokens,
				clientInfo
			};
		} catch (error) {
			clearPendingMcpOAuthSession();
			if (isInvalidOAuthClientError(error)) return await connectMcpOAuthSilentlyWithDcr(input);
			throw error;
		}
	}
	return await connectMcpOAuthSilentlyWithDcr(input);
}
async function startMcpOAuthConnect(input) {
	const { session, scope, codeChallenge, authorizationDetails } = await prepareMcpOAuthSession(input);
	const authorizeUrl = buildAuthorizeUrl({
		authorizationEndpoint: session.authorizationEndpoint,
		clientId: session.client.client_id,
		redirectUri: session.redirectUri,
		scope,
		state: session.state,
		codeChallenge,
		resource: session.resource,
		authorizationDetails
	});
	const popup = window.open(authorizeUrl, "assistant-mcp-oauth", "popup=yes,width=520,height=720");
	if (!popup) {
		window.location.assign(authorizeUrl);
		return new Promise(() => {});
	}
	return await waitForMcpOAuthPopup(popup, session);
}
function waitForMcpOAuthPopup(popup, session) {
	return new Promise((resolve, reject) => {
		let settled = false;
		const cleanup = () => {
			window.removeEventListener("message", onMessage);
			window.clearInterval(closedPoll);
		};
		const settle = (fn) => {
			if (settled) return;
			settled = true;
			cleanup();
			fn();
		};
		const onMessage = (event) => {
			if (event.origin !== window.location.origin) return;
			const data = event.data;
			if (!data || data.type !== "assistant-mcp-oauth") return;
			if (data.status === "error") {
				settle(() => {
					clearPendingMcpOAuthSession();
					reject(new Error(data.errorDescription || data.error || "MCP OAuth was cancelled"));
				});
				return;
			}
			if (data.state !== session.state) {
				settle(() => {
					clearPendingMcpOAuthSession();
					reject(/* @__PURE__ */ new Error("MCP OAuth state mismatch"));
				});
				return;
			}
			settle(() => resolve({
				code: data.code,
				session
			}));
		};
		window.addEventListener("message", onMessage);
		const closedPoll = window.setInterval(() => {
			if (!popup.closed) return;
			settle(() => {
				if (readPendingMcpOAuthSession()?.state === session.state) {
					clearPendingMcpOAuthSession();
					reject(/* @__PURE__ */ new Error("MCP OAuth window was closed"));
				}
			});
		}, 400);
	});
}
async function completeMcpOAuthConnect(params) {
	const session = params.session ?? readPendingMcpOAuthSession();
	if (!session) throw new Error("No pending MCP OAuth session");
	try {
		const tokens = await exchangeMcpOAuthCode({
			tokenEndpoint: session.tokenEndpoint,
			code: params.code,
			redirectUri: session.redirectUri,
			clientId: session.client.client_id,
			codeVerifier: session.codeVerifier,
			resource: session.resource
		});
		return {
			mcpId: session.mcpId,
			name: session.name,
			url: session.url,
			description: session.description,
			tokens,
			clientInfo: session.client
		};
	} finally {
		clearPendingMcpOAuthSession();
	}
}
function parseMcpOAuthCallbackSearch(search) {
	const params = typeof search === "string" ? new URLSearchParams(search.startsWith("?") ? search : `?${search}`) : new URLSearchParams(Object.entries(search).flatMap(([key, value]) => typeof value === "string" ? [[key, value]] : []));
	const error = params.get("error");
	if (error) return {
		type: ASSISTANT_MCP_OAUTH_MESSAGE_TYPE,
		status: "error",
		error,
		errorDescription: params.get("error_description") ?? void 0,
		state: params.get("state") ?? void 0
	};
	const code = params.get("code");
	const state = params.get("state");
	if (!code || !state) return {
		type: ASSISTANT_MCP_OAUTH_MESSAGE_TYPE,
		status: "error",
		error: "invalid_callback",
		errorDescription: "Missing authorization code or state"
	};
	return {
		type: ASSISTANT_MCP_OAUTH_MESSAGE_TYPE,
		status: "success",
		code,
		state
	};
}
var AGENT_PAGE_PATH_RE = /^\/organizations\/([^/]+)\/agent(?:\/|$)/;
function isAgentPagePath(pathname) {
	return AGENT_PAGE_PATH_RE.test(pathname);
}
function agentIndexPath(orgId) {
	return `/organizations/${orgId}/agent`;
}
function agentConversationPath(orgId, agentId) {
	return `/organizations/${orgId}/agent/${agentId}`;
}
function agentAutomationsPath(orgId) {
	return `/organizations/${orgId}/agent/automations`;
}
function agentAutomationCreatePath(orgId) {
	return `/organizations/${orgId}/agent/automations/create`;
}
function agentAutomationDetailPath(orgId, automationId) {
	return `/organizations/${orgId}/agent/automations/${automationId}`;
}
function agentSettingsPath(orgId, section = "models") {
	switch (section) {
		case "mcp": return `/organizations/${orgId}/agent/settings/mcp`;
		case "memory": return `/organizations/${orgId}/agent/settings/memory`;
		case "usage": return `/organizations/${orgId}/agent/settings/usage`;
		case "models":
		default: return `/organizations/${orgId}/agent/settings/models`;
	}
}
function preferredOrganizationId(prefs) {
	const value = prefs?.[USER_PREFS_KEY_ORGANIZATION];
	return typeof value === "string" && value.trim() ? value.trim() : void 0;
}
function mapLegacyAgentPathToOrg(orgId, pathname) {
	const suffix = pathname.replace(/^\/agent\/?/, "");
	if (!suffix) return agentIndexPath(orgId);
	return `${agentIndexPath(orgId)}/${suffix}`;
}
async function redirectLegacyAgentLocation(options) {
	const { queryClient, pathname } = options;
	if (!getActiveProfileFeatures().agent) throw redirect({
		to: "/",
		replace: true
	});
	const account = await ensureConsoleAccountQueryData(queryClient);
	if (!account) throw redirect({
		to: "/sign-in",
		search: { redirect: pathname },
		replace: true
	});
	throw redirect({
		to: mapLegacyAgentPathToOrg(await resolvePostAuthOrganizationId(account, queryClient), pathname),
		replace: true
	});
}
export { agentIndexPath as a, preferredOrganizationId as c, completeMcpOAuthConnect as d, connectMcpOAuthSilently as f, startMcpOAuthConnect as h, agentConversationPath as i, redirectLegacyAgentLocation as l, readPendingMcpOAuthSession as m, agentAutomationDetailPath as n, agentSettingsPath as o, parseMcpOAuthCallbackSearch as p, agentAutomationsPath as r, isAgentPagePath as s, agentAutomationCreatePath as t, ASSISTANT_MCP_OAUTH_MESSAGE_TYPE as u };
