const RUNTIME_CONFIG_PLACEHOLDER = "__APPWRITE_RUNTIME_CONFIG__";
const RUNTIME_CONFIG_WINDOW_KEY = "__APP_CONFIG__";
const DEFAULT_CLOUD_APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
function readEnvValue(env, key) {
	return (env[key] ?? "").toString().trim();
}
function isSelfHostedConsoleProfile(consoleProfile) {
	return consoleProfile.toLowerCase().trim().replace(/\s+/g, "-") === "self-hosted";
}
function readAppwriteEndpointFromEnv(env) {
	return readEnvValue(env, "VITE_APPWRITE_ENDPOINT") || readEnvValue(env, "APPWRITE_ENDPOINT") || readEnvValue(env, "PUBLIC_APPWRITE_ENDPOINT");
}
function resolveAppwriteEndpointFallback(consoleProfile, location) {
	if (isSelfHostedConsoleProfile(consoleProfile) && location) return `${location.protocol}//${location.host}/v1`;
	return DEFAULT_CLOUD_APPWRITE_ENDPOINT;
}
function readRuntimeConfigFromEnv(env) {
	const read = (key) => readEnvValue(env, key);
	return {
		appwriteEndpoint: readAppwriteEndpointFromEnv(env),
		consoleProfile: read("VITE_CONSOLE_PROFILE"),
		fingerprintKey: read("VITE_CONSOLE_FINGERPRINT_KEY") || read("PUBLIC_CONSOLE_FINGERPRINT_KEY"),
		growthEndpoint: read("VITE_GROWTH_ENDPOINT"),
		stripePublishableKey: read("VITE_STRIPE_PUBLISHABLE_KEY"),
		sentryDsn: read("VITE_SENTRY_DSN"),
		plausibleScriptSrc: read("VITE_PLAUSIBLE_SCRIPT_SRC"),
		userVerification: read("VITE_CONSOLE_USER_VERIFICATION"),
		cookieBanner: read("VITE_CONSOLE_COOKIE_BANNER"),
		blogDrafts: read("VITE_CONSOLE_BLOG_DRAFTS"),
		usageStats: read("VITE_CONSOLE_USAGE_STATS"),
		websiteAccess: read("VITE_CONSOLE_WEBSITE_ACCESS")
	};
}
var SCRIPT_UNSAFE = new RegExp("[<>&\\u2028\\u2029]", "g");
function serializeRuntimeConfig(config) {
	return JSON.stringify(config).replace(SCRIPT_UNSAFE, (ch) => "\\u" + ch.charCodeAt(0).toString(16).padStart(4, "0"));
}
var RUNTIME_CONFIG_SCRIPT_ASSIGNMENT = /window\.__APP_CONFIG__=[^;]*;/g;
function injectRuntimeConfigIntoHtml(html, configJson) {
	if (html.includes("__APPWRITE_RUNTIME_CONFIG__")) return html.split(RUNTIME_CONFIG_PLACEHOLDER).join(configJson);
	if (!html.includes("window.__APP_CONFIG__=")) return html;
	return html.replace(RUNTIME_CONFIG_SCRIPT_ASSIGNMENT, `window.__APP_CONFIG__=${configJson};`);
}
var EMPTY_CONFIG = {
	appwriteEndpoint: "",
	consoleProfile: "",
	fingerprintKey: "",
	growthEndpoint: "",
	stripePublishableKey: "",
	sentryDsn: "",
	plausibleScriptSrc: "",
	userVerification: "",
	cookieBanner: "",
	blogDrafts: "",
	usageStats: "",
	websiteAccess: ""
};
function readServerRuntimeConfig() {
	const env = process.env;
	return readRuntimeConfigFromEnv(env);
}
var cached = null;
function getRuntimeConfig() {
	if (cached) return cached;
	if (typeof window !== "undefined") {
		const injected = window[RUNTIME_CONFIG_WINDOW_KEY];
		cached = {
			...EMPTY_CONFIG,
			...injected ?? {}
		};
	} else cached = readServerRuntimeConfig();
	return cached;
}
function getRuntimeConfigScript() {
	if (typeof window !== "undefined") return `window.${RUNTIME_CONFIG_WINDOW_KEY}=${serializeRuntimeConfig(getRuntimeConfig())}`;
	if (process.env.TSS_PRERENDERING === "true") return `window.${RUNTIME_CONFIG_WINDOW_KEY}=${RUNTIME_CONFIG_PLACEHOLDER}`;
	return `window.${RUNTIME_CONFIG_WINDOW_KEY}=${serializeRuntimeConfig(readServerRuntimeConfig())}`;
}
export { resolveAppwriteEndpointFallback as a, readRuntimeConfigFromEnv as i, getRuntimeConfigScript as n, serializeRuntimeConfig as o, injectRuntimeConfigIntoHtml as r, getRuntimeConfig as t };
