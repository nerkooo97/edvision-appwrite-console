import { s as MCP_SERVER_URL } from "./mcp-CgjPVMsn.js";
const MCP_ENDPOINT_PRESETS = {
	production: {
		label: "Production",
		url: MCP_SERVER_URL,
		description: "Hosted Appwrite MCP"
	},
	localhost: {
		label: "Localhost",
		url: "http://localhost:8100/",
		description: "Local cloud compose (appwrite-mcp)"
	}
};
var DEBUG_MCP_ENDPOINT_URL_KEY = "debug:mcpEndpointUrl";
function normalizeMcpEndpointUrl(url) {
	return url.trim().replace(/\/+$/, "") + "/";
}
function getStoredUrl() {
	if (typeof window === "undefined" || !window.localStorage) return null;
	const stored = window.localStorage.getItem(DEBUG_MCP_ENDPOINT_URL_KEY);
	if (!stored || !stored.trim()) return null;
	return stored.trim();
}
function getDebugMcpEndpointOverride() {
	const url = getStoredUrl();
	if (!url) return null;
	const normalized = normalizeMcpEndpointUrl(url);
	for (const [id, preset] of Object.entries(MCP_ENDPOINT_PRESETS)) if (normalizeMcpEndpointUrl(preset.url) === normalized) return id;
	return "custom";
}
function getDebugCustomMcpEndpoint() {
	const url = getStoredUrl();
	if (!url) return null;
	return getDebugMcpEndpointOverride() === "custom" ? normalizeMcpEndpointUrl(url) : null;
}
function getDebugMcpEndpointUrl() {
	const url = getStoredUrl();
	if (!url) return null;
	try {
		new URL(url);
		return normalizeMcpEndpointUrl(url);
	} catch {
		return null;
	}
}
function getEnvMcpEndpointUrl() {
	const fromEnv = (void 0)?.trim();
	return normalizeMcpEndpointUrl(fromEnv || "https://mcp.appwrite.io");
}
function getEffectiveMcpEndpointUrl() {
	const debugUrl = getDebugMcpEndpointUrl();
	if (debugUrl) return debugUrl;
	return getEnvMcpEndpointUrl();
}
const DEBUG_MCP_ENDPOINT_CHANGE_EVENT = "debugMcpEndpointChange";
function setDebugMcpEndpointOverride(preset, customUrl) {
	if (typeof window === "undefined" || !window.localStorage) return;
	if (preset === null) window.localStorage.removeItem(DEBUG_MCP_ENDPOINT_URL_KEY);
	else if (preset === "custom" && customUrl?.trim()) window.localStorage.setItem(DEBUG_MCP_ENDPOINT_URL_KEY, normalizeMcpEndpointUrl(customUrl.trim()));
	else if (preset !== "custom" && MCP_ENDPOINT_PRESETS[preset]) window.localStorage.setItem(DEBUG_MCP_ENDPOINT_URL_KEY, normalizeMcpEndpointUrl(MCP_ENDPOINT_PRESETS[preset].url));
	window.dispatchEvent(new CustomEvent(DEBUG_MCP_ENDPOINT_CHANGE_EVENT));
}
function subscribeToDebugMcpEndpointChange(callback) {
	if (typeof window === "undefined") return () => void 0;
	const handler = () => callback();
	window.addEventListener(DEBUG_MCP_ENDPOINT_CHANGE_EVENT, handler);
	window.addEventListener("storage", (e) => {
		if (e.key === DEBUG_MCP_ENDPOINT_URL_KEY) callback();
	});
	return () => {
		window.removeEventListener(DEBUG_MCP_ENDPOINT_CHANGE_EVENT, handler);
	};
}
export { getEnvMcpEndpointUrl as a, subscribeToDebugMcpEndpointChange as c, getEffectiveMcpEndpointUrl as i, getDebugCustomMcpEndpoint as n, normalizeMcpEndpointUrl as o, getDebugMcpEndpointOverride as r, setDebugMcpEndpointOverride as s, MCP_ENDPOINT_PRESETS as t };
