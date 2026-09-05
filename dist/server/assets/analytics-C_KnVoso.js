import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { G as canTrackAnalytics } from "./sdk-DjIJ_hjn.js";
import { i as getActiveLanguage } from "./i18n-Db4baE06.js";
import { ln as getPlanNameFromTier } from "./organizations-BKtnlNrj.js";
import { n as PLAUSIBLE_PROXY_SCRIPT_PATH, o as getAnalyticsArea, s as getAnalyticsSurface, t as PLAUSIBLE_PROXY_EVENT_PATH } from "./plausible-proxy-Dv8rZ-v1.js";
const PLAUSIBLE_UPSTREAM_SCRIPT_SRC = getRuntimeConfig().plausibleScriptSrc;
const ANALYTICS_ENABLED = Boolean(PLAUSIBLE_UPSTREAM_SCRIPT_SRC);
const PLAUSIBLE_SCRIPT_SRC = ANALYTICS_ENABLED ? PLAUSIBLE_PROXY_SCRIPT_PATH : "";
function isAnalyticsAllowed() {
	return ANALYTICS_ENABLED && canTrackAnalytics();
}
const PLAUSIBLE_INIT_SCRIPT = `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init({ autoCapturePageviews: false, endpoint: ${JSON.stringify(PLAUSIBLE_PROXY_EVENT_PATH)} })`;
var sessionProps = {
	auth: "guest",
	plan: "none",
	lang: "en"
};
var hasTrackedPageview = false;
var pendingAnalyticsEvents = [];
function setAnalyticsSessionProps(next) {
	sessionProps = {
		...sessionProps,
		...next
	};
}
function getAnalyticsSessionProps() {
	return {
		...sessionProps,
		lang: getActiveLanguage()
	};
}
function getAnalyticsPlanFromBillingId(planId) {
	if (!planId) return "none";
	return getPlanNameFromTier(planId);
}
function normalizeAnalyticsProps(props = {}) {
	return Object.fromEntries(Object.entries(props).filter(([, value]) => value !== null && value !== void 0));
}
function getAnalyticsRoutePath(routeId, pathname) {
	const template = routeId?.split("/").filter(Boolean).filter((part) => !part.startsWith("_")).join("/");
	const routePath = template ? `/${template}` : pathname || "/";
	const surface = getAnalyticsSurface(routePath);
	if (surface === "marketing" || surface === "docs") return pathname || routePath;
	return routePath;
}
function getAnalyticsRouteUrl(routePath) {
	if (typeof window === "undefined") return routePath;
	return `${window.location.origin}${routePath}`;
}
function getGlobalAnalyticsProps(routePath) {
	const session = getAnalyticsSessionProps();
	return {
		auth: session.auth,
		plan: session.plan,
		lang: session.lang,
		...routePath ? { surface: getAnalyticsSurface(routePath) } : {}
	};
}
function flushPendingAnalyticsEvents() {
	if (typeof window === "undefined" || !window.plausible) return;
	while (pendingAnalyticsEvents.length > 0) {
		const pending = pendingAnalyticsEvents.shift();
		if (!pending) break;
		window.plausible(pending.eventName, pending.options);
	}
}
var MAX_PENDING_ANALYTICS_EVENTS = 20;
function trackPageView(routePath) {
	if (!isAnalyticsAllowed() || typeof window === "undefined") return;
	if (!window.plausible) return;
	window.plausible("pageview", {
		url: getAnalyticsRouteUrl(routePath),
		props: normalizeAnalyticsProps({
			route: routePath,
			area: getAnalyticsArea(routePath),
			...getGlobalAnalyticsProps(routePath)
		})
	});
	hasTrackedPageview = true;
	flushPendingAnalyticsEvents();
}
function trackEvent(eventName, props = {}, options = {}) {
	if (!isAnalyticsAllowed() || typeof window === "undefined") return;
	const routePath = options.routePath;
	const plausibleOptions = {
		url: options.url ?? (routePath ? getAnalyticsRouteUrl(routePath) : void 0),
		props: normalizeAnalyticsProps({
			...routePath ? {
				route: routePath,
				area: getAnalyticsArea(routePath)
			} : {},
			...props,
			...getGlobalAnalyticsProps(routePath)
		})
	};
	if (!hasTrackedPageview) {
		if (pendingAnalyticsEvents.length < MAX_PENDING_ANALYTICS_EVENTS) pendingAnalyticsEvents.push({
			eventName,
			options: plausibleOptions
		});
		return;
	}
	window.plausible?.(eventName, plausibleOptions);
}
function getSafeInternalPathParts(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts[0] === "projects") return {
		scope: "project",
		area: parts[2] ?? "overview"
	};
	if (parts[0] === "organizations") return {
		scope: "organization",
		area: parts[2] ?? "overview"
	};
	return {
		scope: parts[0] ?? "root",
		area: parts[0] ?? "root"
	};
}
export { getAnalyticsRouteUrl as a, trackEvent as c, getAnalyticsRoutePath as i, trackPageView as l, PLAUSIBLE_SCRIPT_SRC as n, getSafeInternalPathParts as o, getAnalyticsPlanFromBillingId as r, setAnalyticsSessionProps as s, PLAUSIBLE_INIT_SCRIPT as t };
