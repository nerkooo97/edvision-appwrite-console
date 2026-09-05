import { a as resolveAppwriteEndpointFallback, t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
const ENDPOINT_PRESETS = {
	production: {
		label: "Production",
		url: "https://cloud.appwrite.io/v1",
		description: "Appwrite Cloud production"
	},
	stage: {
		label: "Stage",
		url: "https://cloud.staging.appwrite.io/v1",
		description: "Appwrite Cloud staging"
	},
	localhostCloud: {
		label: "Local Cloud",
		url: "http://localhost/v1",
		description: "Local Cloud instance"
	},
	localhostCe: {
		label: "Local CE",
		url: "http://localhost:9522/v1",
		description: "Local Community Edition instance"
	},
	oss: {
		label: "OSS",
		url: "https://oss.appwrite.org/v1",
		description: "Permanent self-hosted (AWS)"
	}
};
var DEBUG_ENDPOINT_URL_KEY = "debug:endpointUrl";
var DEBUG_CUSTOM_ENDPOINTS_KEY = "debug:customEndpointUrls";
function normalizeEndpointUrl(url) {
	try {
		return `${new URL(url).origin.replace(/\/$/, "")}/v1`;
	} catch {
		return url.trim();
	}
}
function getStoredUrl() {
	if (typeof window === "undefined" || !window.localStorage) return null;
	const stored = window.localStorage.getItem(DEBUG_ENDPOINT_URL_KEY);
	if (!stored || !stored.trim()) return null;
	return stored.trim();
}
function isPresetUrl(url) {
	const normalized = normalizeEndpointUrl(url);
	return Object.values(ENDPOINT_PRESETS).some((preset) => normalizeEndpointUrl(preset.url) === normalized);
}
function readStoredCustomEndpoints() {
	if (typeof window === "undefined" || !window.localStorage) return [];
	const raw = window.localStorage.getItem(DEBUG_CUSTOM_ENDPOINTS_KEY);
	if (!raw) return [];
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		const seen = /* @__PURE__ */ new Set();
		const urls = [];
		for (const entry of parsed) {
			if (typeof entry !== "string" || !entry.trim()) continue;
			const normalized = normalizeEndpointUrl(entry.trim());
			if (!normalized || isPresetUrl(normalized) || seen.has(normalized)) continue;
			try {
				new URL(normalized);
			} catch {
				continue;
			}
			seen.add(normalized);
			urls.push(normalized);
		}
		return urls;
	} catch {
		return [];
	}
}
function writeStoredCustomEndpoints(urls) {
	if (typeof window === "undefined" || !window.localStorage) return;
	if (urls.length === 0) {
		window.localStorage.removeItem(DEBUG_CUSTOM_ENDPOINTS_KEY);
		return;
	}
	window.localStorage.setItem(DEBUG_CUSTOM_ENDPOINTS_KEY, JSON.stringify(urls));
}
function notifyEndpointChange() {
	window.dispatchEvent(new CustomEvent(DEBUG_ENDPOINT_CHANGE_EVENT));
}
function getDebugEndpointOverride() {
	const url = getStoredUrl();
	if (!url) return null;
	const normalized = normalizeEndpointUrl(url);
	for (const [id, preset] of Object.entries(ENDPOINT_PRESETS)) if (normalizeEndpointUrl(preset.url) === normalized) return id;
	return "custom";
}
function getDebugCustomEndpoint() {
	const url = getStoredUrl();
	if (!url) return null;
	return getDebugEndpointOverride() === "custom" ? normalizeEndpointUrl(url) : null;
}
function getCustomDebugEndpoints() {
	const urls = readStoredCustomEndpoints();
	const activeCustom = getDebugCustomEndpoint();
	if (!activeCustom || urls.includes(activeCustom)) return urls;
	const merged = [...urls, activeCustom];
	writeStoredCustomEndpoints(merged);
	return merged;
}
function removeCustomDebugEndpoint(url) {
	if (typeof window === "undefined" || !window.localStorage) return false;
	const normalized = normalizeEndpointUrl(url.trim());
	writeStoredCustomEndpoints(readStoredCustomEndpoints().filter((entry) => entry !== normalized));
	const active = getStoredUrl();
	const wasActive = !!active && normalizeEndpointUrl(active) === normalized && !isPresetUrl(normalized);
	if (wasActive) window.localStorage.removeItem(DEBUG_ENDPOINT_URL_KEY);
	notifyEndpointChange();
	return wasActive;
}
function getDebugEndpointBaseUrl() {
	const url = getStoredUrl();
	if (!url) return null;
	try {
		new URL(url);
		return normalizeEndpointUrl(url);
	} catch {
		return null;
	}
}
function getEnvEndpointBaseUrl() {
	const config = getRuntimeConfig();
	if (config.appwriteEndpoint.trim()) return normalizeEndpointUrl(config.appwriteEndpoint.trim());
	if (typeof window !== "undefined") return normalizeEndpointUrl(resolveAppwriteEndpointFallback(config.consoleProfile, window.location));
	return null;
}
function getEffectiveEndpointBaseUrl() {
	const debugBase = getDebugEndpointBaseUrl();
	if (debugBase) return debugBase;
	return getEnvEndpointBaseUrl();
}
const DEBUG_ENDPOINT_CHANGE_EVENT = "debugEndpointChange";
function setDebugEndpointOverride(preset, customUrl) {
	if (typeof window === "undefined" || !window.localStorage) return;
	if (preset === null) window.localStorage.removeItem(DEBUG_ENDPOINT_URL_KEY);
	else if (preset === "custom" && customUrl?.trim()) {
		const normalized = normalizeEndpointUrl(customUrl.trim());
		window.localStorage.setItem(DEBUG_ENDPOINT_URL_KEY, normalized);
		if (!isPresetUrl(normalized)) {
			const urls = readStoredCustomEndpoints();
			if (!urls.includes(normalized)) writeStoredCustomEndpoints([...urls, normalized]);
		}
	} else if (preset !== "custom" && ENDPOINT_PRESETS[preset]) window.localStorage.setItem(DEBUG_ENDPOINT_URL_KEY, ENDPOINT_PRESETS[preset].url);
	notifyEndpointChange();
}
function subscribeToDebugEndpointChange(callback) {
	if (typeof window === "undefined") return () => void 0;
	const handler = () => callback();
	window.addEventListener(DEBUG_ENDPOINT_CHANGE_EVENT, handler);
	window.addEventListener("storage", (e) => {
		if (e.key === DEBUG_ENDPOINT_URL_KEY || e.key === DEBUG_CUSTOM_ENDPOINTS_KEY) callback();
	});
	return () => {
		window.removeEventListener(DEBUG_ENDPOINT_CHANGE_EVENT, handler);
	};
}
export { getDebugEndpointOverride as a, removeCustomDebugEndpoint as c, getDebugEndpointBaseUrl as i, setDebugEndpointOverride as l, getCustomDebugEndpoints as n, getEffectiveEndpointBaseUrl as o, getDebugCustomEndpoint as r, getEnvEndpointBaseUrl as s, ENDPOINT_PRESETS as t, subscribeToDebugEndpointChange as u };
