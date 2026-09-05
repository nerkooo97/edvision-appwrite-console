import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { t as getOAuth2App } from "./cimd-CRIktQxf.js";
import { Query } from "@appwrite.io/console";
import { queryOptions, useQuery } from "@tanstack/react-query";
var LOOPBACK = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i;
var KNOWN_CLIENTS = [
	{
		id: "appwrite-agent",
		name: "Appwrite Agent",
		iconPath: "/icons/appwrite.svg",
		namePattern: /^appwrite agent$/i,
		uriPatterns: [/\/agent\/mcp\/callback/i, /\/assistant\/mcp\/callback/i]
	},
	{
		id: "claude-code",
		name: "Claude Code",
		iconPath: "/icons/apps/claude.svg",
		namePattern: /^claude code(\s*\(.*\))?$/i,
		uriPatterns: [LOOPBACK, /^https:\/\/(www\.)?(claude|anthropic)\.(ai|com)(\/|$)/i]
	},
	{
		id: "claude",
		name: "Claude",
		iconPath: "/icons/apps/claude.svg",
		namePattern: /^(claude|claudeai|claude\.ai)$/i,
		uriPatterns: [/^https:\/\/(www\.)?claude\.(ai|com)\/api\/mcp\/auth_callback/i, /^https:\/\/(www\.)?(claude|anthropic)\.(ai|com)\/[^?#]*/i]
	},
	{
		id: "opencode",
		name: "OpenCode",
		iconPath: "/icons/apps/opencode.svg",
		namePattern: /^opencode$/i,
		uriPatterns: [LOOPBACK, /^https:\/\/(www\.)?opencode\.ai(\/|$)/i]
	},
	{
		id: "cursor",
		name: "Cursor",
		iconPath: "/icons/apps/cursor.svg",
		namePattern: /^cursor$/i,
		uriPatterns: [
			/^cursor:\/\/anysphere\.cursor-mcp\//i,
			/^https:\/\/(www\.)?cursor\.com(\/|$)/i,
			LOOPBACK
		]
	},
	{
		id: "vscode",
		name: "Visual Studio Code",
		iconPath: "/icons/apps/vscode.svg",
		namePattern: /^(visual studio code(\s*-.*)?|code - oss)$/i,
		uriPatterns: [/^https:\/\/(insiders\.)?vscode\.dev\/redirect/i, LOOPBACK]
	},
	{
		id: "windsurf",
		name: "Windsurf",
		iconPath: "/icons/apps/windsurf.svg",
		namePattern: /^(windsurf|devin)$/i,
		uriPatterns: [
			/^windsurf:\/\//i,
			/^https:\/\/(insiders\.)?vscode\.dev\/redirect/i,
			LOOPBACK
		]
	},
	{
		id: "zed",
		name: "Zed",
		iconPath: "/icons/apps/zed.svg",
		namePattern: /^zed$/i,
		uriPatterns: [LOOPBACK, /^https:\/\/zed\.dev(\/|$)/i]
	},
	{
		id: "codex",
		name: "Codex",
		iconPath: "/icons/apps/codex.svg",
		namePattern: /^codex(\s+cli)?$/i,
		uriPatterns: [LOOPBACK]
	},
	{
		id: "chatgpt",
		name: "ChatGPT",
		iconPath: "/icons/apps/chatgpt.svg",
		namePattern: /^chatgpt$/i,
		uriPatterns: [/^https:\/\/(www\.)?chatgpt\.com(\/|$)/i]
	}
];
function collectAppUris(app, cimdUrl) {
	const uris = [...app?.redirectUris ?? []];
	if (app?.clientUri) uris.push(app.clientUri);
	if (cimdUrl) uris.push(cimdUrl);
	return uris;
}
function matchKnownOAuthClient(app, cimdUrl) {
	const name = app?.name?.trim() ?? "";
	if (!name) return null;
	const uris = collectAppUris(app, cimdUrl);
	for (const client of KNOWN_CLIENTS) {
		if (!client.namePattern.test(name)) continue;
		if (client.uriPatterns && uris.length > 0 && !uris.some((uri) => client.uriPatterns.some((p) => p.test(uri)))) continue;
		return {
			id: client.id,
			name: client.name,
			iconPath: client.iconPath
		};
	}
	return null;
}
var PAGE_SIZE = 100;
var MAX_PAGES = 100;
async function fetchAllPages(list) {
	const items = [];
	let cursor = null;
	for (let page = 0; page < MAX_PAGES; page++) {
		const queries = [Query.limit(PAGE_SIZE)];
		if (cursor) queries.push(Query.cursorAfter(cursor));
		const batch = await list(queries);
		items.push(...batch);
		if (batch.length < PAGE_SIZE) break;
		cursor = batch[batch.length - 1].$id;
	}
	return items;
}
function cimdUrlHost(url) {
	try {
		return new URL(url).host;
	} catch {
		return url;
	}
}
function getGrantTime(connectedApp) {
	return new Date(connectedApp.consent.$createdAt).getTime() || 0;
}
function getGroupKey(connectedApp, knownClient) {
	if (connectedApp.cimdUrl) return `cimd:${connectedApp.cimdUrl}`;
	if (knownClient) return `client:${knownClient.id}`;
	const { app, clientId } = connectedApp;
	if (!app) return `app:${clientId}`;
	const normalizedName = app.name.trim().toLowerCase();
	return normalizedName ? `name:${normalizedName}` : `app:${clientId}`;
}
function getDisplayName(connectedApp, knownClient) {
	return connectedApp.app?.name?.trim() || knownClient?.name || (connectedApp.cimdUrl ? cimdUrlHost(connectedApp.cimdUrl) : connectedApp.clientId);
}
function groupConnectedApps(connectedApps) {
	const sorted = [...connectedApps].sort((a, b) => getGrantTime(b) - getGrantTime(a));
	const groups = /* @__PURE__ */ new Map();
	for (const connectedApp of sorted) {
		const knownClient = matchKnownOAuthClient(connectedApp.app, connectedApp.cimdUrl);
		const key = getGroupKey(connectedApp, knownClient);
		const existing = groups.get(key);
		if (existing) {
			existing.grants.push(connectedApp);
			continue;
		}
		groups.set(key, {
			key,
			displayName: getDisplayName(connectedApp, knownClient),
			knownClient,
			app: connectedApp.app,
			grants: [connectedApp],
			latestAuthorizedAt: connectedApp.consent.$createdAt
		});
	}
	return [...groups.values()];
}
async function fetchAccountConnectedApps() {
	const consents = await fetchAllPages((queries) => sdk.forConsole.account.listConsents({ queries }).then((response) => response.consents));
	const connectedApps = await Promise.all(consents.map(async (consent) => {
		const cimdUrl = consent.cimdUrl || null;
		const clientId = consent.appId || consent.cimdUrl;
		return {
			consent,
			clientId,
			cimdUrl,
			app: await getOAuth2App(clientId).catch(() => null)
		};
	}));
	connectedApps.sort((a, b) => getGrantTime(b) - getGrantTime(a));
	return {
		connectedApps,
		groups: groupConnectedApps(connectedApps),
		total: connectedApps.length
	};
}
function accountConnectedAppsQueryOptions() {
	return queryOptions({
		queryKey: ["applications", "account"],
		queryFn: fetchAccountConnectedApps,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useAccountConnectedApps() {
	return useQuery(accountConnectedAppsQueryOptions());
}
function consentTokensQueryOptions(consentId) {
	return queryOptions({
		queryKey: [
			"applications",
			"account",
			consentId,
			"tokens"
		],
		queryFn: () => fetchAllPages((queries) => sdk.forConsole.account.listConsentTokens({
			consentId,
			queries
		}).then((response) => response.tokens)),
		staleTime: DEFAULT_STALE_TIME,
		retry: false
	});
}
function useConsentTokens(consentId, enabled = true) {
	return useQuery({
		...consentTokensQueryOptions(consentId),
		enabled
	});
}
export { groupConnectedApps as a, fetchAccountConnectedApps as i, cimdUrlHost as n, useAccountConnectedApps as o, consentTokensQueryOptions as r, useConsentTokens as s, accountConnectedAppsQueryOptions as t };
