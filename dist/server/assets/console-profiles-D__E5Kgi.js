import { a as resolveAppwriteEndpointFallback, t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { i as getDebugEndpointBaseUrl } from "./debug-endpoint-BvungD5q.js";
const CONSOLE_PROFILE_FEATURE_LABELS = {
	billing: "Billing",
	domains: "Domains",
	marketplace: "Marketplace",
	usageStats: "Usage stats",
	activity: "Activity",
	init: "Init",
	marketing: "Marketing",
	partnersDocs: "Partners docs",
	multiTenancy: "Multi-tenancy",
	orgRoles: "Org roles",
	systemStatus: "System status",
	accountMfa: "Account MFA",
	accountIdentities: "Account identities",
	compliance: "Compliance",
	oauthApps: "OAuth apps",
	oauth2Server: "OAuth2 server",
	orgApiKeys: "Org API keys",
	agent: "Agent",
	notifications: "Notifications",
	databaseBackups: "Database backups",
	dedicatedDbsSupport: "Dedicated DBs (global)",
	dedicatedDbsDocumentsDB: "Dedicated DBs: Documents",
	dedicatedDbsVectorsDB: "Dedicated DBs: Vectors",
	nativeDbsPostgres: "Native DBs: PostgreSQL",
	nativeDbsMySQL: "Native DBs: MySQL",
	nativeDbsMongo: "Native DBs: MongoDB",
	multiRegion: "Multi-region",
	edgeNetwork: "Edge network",
	userVerification: "User verification",
	firewall: "Firewall",
	affiliates: "Affiliates",
	cookieBanner: "Cookie banner",
	blogDrafts: "Blog drafts"
};
const CONSOLE_PROFILES = {
	cloud: {
		id: "cloud",
		label: "Cloud",
		description: "Appwrite Cloud - full feature set",
		features: {
			billing: true,
			domains: true,
			marketplace: false,
			usageStats: true,
			activity: true,
			init: true,
			marketing: true,
			partnersDocs: false,
			multiTenancy: true,
			orgRoles: true,
			systemStatus: true,
			accountMfa: true,
			accountIdentities: true,
			compliance: true,
			oauthApps: false,
			oauth2Server: true,
			orgApiKeys: false,
			agent: true,
			notifications: false,
			databaseBackups: true,
			dedicatedDbsSupport: true,
			dedicatedDbsDocumentsDB: false,
			dedicatedDbsVectorsDB: false,
			nativeDbsPostgres: true,
			nativeDbsMySQL: true,
			nativeDbsMongo: false,
			multiRegion: true,
			edgeNetwork: true,
			userVerification: true,
			firewall: true,
			affiliates: true,
			cookieBanner: true,
			blogDrafts: false
		}
	},
	"self-hosted": {
		id: "self-hosted",
		label: "Self-hosted",
		description: "Self-hosted Appwrite - cloud-only features disabled",
		features: {
			billing: false,
			domains: false,
			marketplace: false,
			usageStats: false,
			activity: false,
			init: false,
			marketing: false,
			partnersDocs: false,
			multiTenancy: false,
			orgRoles: false,
			systemStatus: false,
			accountMfa: false,
			accountIdentities: false,
			compliance: false,
			oauthApps: false,
			oauth2Server: false,
			orgApiKeys: false,
			agent: false,
			notifications: false,
			databaseBackups: false,
			dedicatedDbsSupport: false,
			dedicatedDbsDocumentsDB: false,
			dedicatedDbsVectorsDB: false,
			nativeDbsPostgres: false,
			nativeDbsMySQL: false,
			nativeDbsMongo: false,
			multiRegion: false,
			edgeNetwork: false,
			userVerification: false,
			firewall: false,
			affiliates: false,
			cookieBanner: false,
			blogDrafts: false
		}
	}
};
var VALID_PROFILE_IDS = ["cloud", "self-hosted"];
function isCloudEndpoint(url) {
	try {
		const host = new URL(url).hostname.toLowerCase();
		return host === "cloud.appwrite.io" || host.endsWith(".cloud.appwrite.io");
	} catch {
		return false;
	}
}
function detectProfileFromEndpoint() {
	if (typeof window !== "undefined") {
		const debugBase = getDebugEndpointBaseUrl();
		if (debugBase) return isCloudEndpoint(debugBase) ? "cloud" : "self-hosted";
	}
	const envEndpoint = getRuntimeConfig().appwriteEndpoint;
	if (envEndpoint.trim()) return isCloudEndpoint(envEndpoint) ? "cloud" : "self-hosted";
	if (typeof window !== "undefined") return isCloudEndpoint(resolveAppwriteEndpointFallback(getRuntimeConfig().consoleProfile, window.location)) ? "cloud" : "self-hosted";
	return "cloud";
}
function getProfileFromEnv() {
	if (typeof import.meta === "undefined" || false) return detectProfileFromEndpoint();
	const normalized = getRuntimeConfig().consoleProfile?.toLowerCase().trim().replace(/\s+/g, "-");
	if (normalized && VALID_PROFILE_IDS.includes(normalized)) return normalized;
	return detectProfileFromEndpoint();
}
function getEnvProfileId() {
	const normalized = getRuntimeConfig().consoleProfile?.toLowerCase().trim().replace(/\s+/g, "-");
	if (normalized && VALID_PROFILE_IDS.includes(normalized)) return normalized;
	return "cloud";
}
function getEnvProfileFeatures() {
	const profileId = getEnvProfileId();
	return applyCloudOnlyFeatureGates(profileId, CONSOLE_PROFILES[profileId].features);
}
var DEBUG_PROFILE_KEY = "debug:consoleProfile";
var DEBUG_PROFILE_COOKIE = "debug_console_profile";
var DEBUG_PROFILE_COOKIE_MAX_AGE_SECONDS = 3600 * 24 * 365;
function migrateStoredProfileFeatures(features) {
	const next = { ...features };
	if (!("agent" in next) && typeof next.aiAssistant === "boolean") next.agent = next.aiAssistant;
	delete next.aiAssistant;
	delete next.executionLogs;
	return next;
}
function parseStoredProfileRaw(stored) {
	if (!stored?.trim()) return null;
	try {
		const parsed = JSON.parse(stored);
		if (parsed && typeof parsed === "object" && "id" in parsed && VALID_PROFILE_IDS.includes(parsed.id) && "features" in parsed && typeof parsed.features === "object") {
			const profile = parsed;
			return {
				...profile,
				features: migrateStoredProfileFeatures(profile.features)
			};
		}
	} catch {}
	if (VALID_PROFILE_IDS.includes(stored)) return CONSOLE_PROFILES[stored];
	return null;
}
function syncDebugProfileCookie(profile) {
	if (typeof document === "undefined") return;
	const secure = window.location.protocol === "https:" ? "; Secure" : "";
	if (!profile) {
		document.cookie = `${DEBUG_PROFILE_COOKIE}=; path=/; max-age=0; SameSite=Lax${secure}`;
		return;
	}
	const payload = JSON.stringify({
		id: profile.id,
		features: profile.features ?? {}
	});
	document.cookie = `${DEBUG_PROFILE_COOKIE}=${encodeURIComponent(payload)}; path=/; max-age=${DEBUG_PROFILE_COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}
function persistDebugProfile(profile) {
	if (typeof window === "undefined") return;
	if (profile) localStorage.setItem(DEBUG_PROFILE_KEY, JSON.stringify(profile));
	else localStorage.removeItem(DEBUG_PROFILE_KEY);
	syncDebugProfileCookie(profile);
}
var didSyncDebugProfileCookieFromStorage = false;
function getStoredProfile() {
	if (typeof window === "undefined") return null;
	const stored = parseStoredProfileRaw(localStorage.getItem(DEBUG_PROFILE_KEY));
	if (!didSyncDebugProfileCookieFromStorage) {
		didSyncDebugProfileCookieFromStorage = true;
		syncDebugProfileCookie(stored);
	}
	return stored;
}
function hasDebugProfileOverride() {
	return getStoredProfile() !== null;
}
function getActiveProfileId() {
	const stored = getStoredProfile();
	if (stored) return stored.id;
	return getProfileFromEnv();
}
var backendUsageStatsAvailability = null;
function resolveBackendUsageStatsAvailability(value) {
	return parseEnvFeatureOverride(value ?? "");
}
function setBackendUsageStatsAvailability(value) {
	const next = resolveBackendUsageStatsAvailability(value);
	if (backendUsageStatsAvailability === next) return;
	backendUsageStatsAvailability = next;
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(CONSOLE_PROFILE_CHANGE_EVENT));
}
function applyCloudOnlyFeatureGates(profileId, features) {
	if (profileId === "self-hosted") return {
		...features,
		marketplace: false,
		init: false,
		marketing: false,
		multiTenancy: false,
		oauth2Server: false
	};
	return features;
}
function parseEnvFeatureOverride(value) {
	const normalized = value.toLowerCase().trim();
	if (normalized === "false" || normalized === "0" || normalized === "disabled") return false;
	if (normalized === "true" || normalized === "1" || normalized === "enabled") return true;
	return null;
}
function applyEnvFeatureOverrides(profileId, features) {
	const config = getRuntimeConfig();
	let next = features;
	const userVerification = parseEnvFeatureOverride(config.userVerification);
	if (userVerification !== null) next = {
		...next,
		userVerification
	};
	const cookieBanner = parseEnvFeatureOverride(config.cookieBanner);
	if (cookieBanner !== null) next = {
		...next,
		cookieBanner
	};
	const blogDrafts = parseEnvFeatureOverride(config.blogDrafts);
	if (blogDrafts !== null) next = {
		...next,
		blogDrafts
	};
	const usageStatsOverride = parseEnvFeatureOverride(config.usageStats);
	if (usageStatsOverride !== null) next = {
		...next,
		usageStats: usageStatsOverride
	};
	else if (profileId === "self-hosted" && backendUsageStatsAvailability !== null) next = {
		...next,
		usageStats: backendUsageStatsAvailability
	};
	return next;
}
function getActiveProfile() {
	const stored = getStoredProfile();
	const profileId = stored?.id ?? getProfileFromEnv();
	const canonical = CONSOLE_PROFILES[profileId];
	if (!stored) return {
		...canonical,
		features: applyEnvFeatureOverrides(profileId, applyCloudOnlyFeatureGates(profileId, canonical.features))
	};
	const mergedFeatures = applyCloudOnlyFeatureGates(profileId, {
		...applyEnvFeatureOverrides(profileId, canonical.features),
		...stored.features
	});
	return {
		...stored,
		features: mergedFeatures
	};
}
function getActiveProfileFeatures() {
	return getActiveProfile().features;
}
function getCanonicalProfileFeatures(profileId) {
	return applyEnvFeatureOverrides(profileId, applyCloudOnlyFeatureGates(profileId, CONSOLE_PROFILES[profileId].features));
}
function isFeatureEnabled(feature) {
	return getActiveProfileFeatures()[feature];
}
const CONSOLE_PROFILE_CHANGE_EVENT = "consoleProfileChange";
function setDebugProfileOverride(profileId) {
	if (typeof window === "undefined") return;
	if (profileId) persistDebugProfile({
		...CONSOLE_PROFILES[profileId],
		features: {}
	});
	else persistDebugProfile(null);
	window.dispatchEvent(new CustomEvent(CONSOLE_PROFILE_CHANGE_EVENT));
}
function setDebugProfileFeatureOverride(key, value) {
	if (typeof window === "undefined") return;
	const stored = getStoredProfile();
	const profileId = stored?.id ?? getProfileFromEnv();
	const canonical = CONSOLE_PROFILES[profileId];
	const nextOverrideFeatures = {
		...stored?.features ?? {},
		[key]: value
	};
	persistDebugProfile({
		...canonical,
		id: profileId,
		features: nextOverrideFeatures
	});
	window.dispatchEvent(new CustomEvent(CONSOLE_PROFILE_CHANGE_EVENT));
}
function resetDebugProfileFeatureOverrides() {
	if (typeof window === "undefined") return;
	const stored = getStoredProfile();
	if (!stored) return;
	if (!VALID_PROFILE_IDS.includes(stored.id)) return;
	persistDebugProfile({
		...CONSOLE_PROFILES[stored.id],
		features: {}
	});
	window.dispatchEvent(new CustomEvent(CONSOLE_PROFILE_CHANGE_EVENT));
}
function resetDebugProfileFeatureOverride(key) {
	if (typeof window === "undefined") return;
	const stored = getStoredProfile();
	if (!stored?.features || !(key in stored.features)) return;
	if (!VALID_PROFILE_IDS.includes(stored.id)) return;
	const canonical = CONSOLE_PROFILES[stored.id];
	const nextFeatures = { ...stored.features };
	delete nextFeatures[key];
	persistDebugProfile({
		...canonical,
		id: stored.id,
		features: nextFeatures
	});
	window.dispatchEvent(new CustomEvent(CONSOLE_PROFILE_CHANGE_EVENT));
}
function subscribeToProfileChange(callback) {
	if (typeof window === "undefined") return () => void 0;
	const handler = () => callback(getActiveProfileId());
	const storageHandler = (e) => {
		if (e.key === DEBUG_PROFILE_KEY) handler();
	};
	window.addEventListener(CONSOLE_PROFILE_CHANGE_EVENT, handler);
	window.addEventListener("storage", storageHandler);
	return () => {
		window.removeEventListener(CONSOLE_PROFILE_CHANGE_EVENT, handler);
		window.removeEventListener("storage", storageHandler);
	};
}
export { getActiveProfileId as a, getEnvProfileId as c, resetDebugProfileFeatureOverride as d, resetDebugProfileFeatureOverrides as f, subscribeToProfileChange as g, setDebugProfileOverride as h, getActiveProfileFeatures as i, hasDebugProfileOverride as l, setDebugProfileFeatureOverride as m, CONSOLE_PROFILE_FEATURE_LABELS as n, getCanonicalProfileFeatures as o, setBackendUsageStatsAvailability as p, getActiveProfile as r, getEnvProfileFeatures as s, CONSOLE_PROFILES as t, isFeatureEnabled as u };
