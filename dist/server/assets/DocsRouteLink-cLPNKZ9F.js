import { t as cn } from "./utils-DoqqkI3X.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { n as isMarketingPagePath } from "./is-marketing-page-dgx45Oqy.js";
import { i as openInNewTab, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { _ as splitHrefHash, m as parseDocsPagePath, r as getDocsPageUrl } from "./urls-BIlyr2O2.js";
import { jsx } from "react/jsx-runtime";
import { Link, useLocation } from "@tanstack/react-router";
import { createContext, useContext } from "react";
const DocsPreviewContext = createContext(null);
function useDocsPreview() {
	const context = useContext(DocsPreviewContext);
	if (!context) return {
		isOpen: false,
		slug: null,
		view: "article",
		openDocsPreview: () => {},
		closeDocsPreview: () => {}
	};
	return context;
}
var CONSOLE_RIGHT_PANE_PREFIXES = [
	"/projects/",
	"/organizations/",
	"/account"
];
function matchesConsoleRightPanePath(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	if (normalized === "/") return false;
	return CONSOLE_RIGHT_PANE_PREFIXES.some((prefix) => normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix));
}
function isConsoleRightPanePath(pathname) {
	if (isMarketingPagePath(pathname)) return false;
	return matchesConsoleRightPanePath(pathname);
}
function isConsoleDocsPreviewPath(pathname) {
	if (!getActiveProfileFeatures().marketing) return false;
	return matchesConsoleRightPanePath(pathname);
}
function docsHrefToPreviewSlug(href) {
	const { pathname } = splitHrefHash(href);
	const docsPath = parseDocsPagePath(pathname);
	if (!docsPath) return null;
	if (docsPath === "/docs") return "";
	return docsPath.slice(6);
}
var DocsPreviewNavigationContext = createContext(null);
function DocsPreviewNavigationProvider({ navigateToSlug, children }) {
	return /* @__PURE__ */ jsx(DocsPreviewNavigationContext.Provider, {
		value: { navigateToSlug },
		children
	});
}
function useDocsPreviewNavigation() {
	return useContext(DocsPreviewNavigationContext);
}
var OVERLAY_CONTENT_SELECTOR = [
	"[data-slot=\"dialog-content\"]",
	"[data-slot=\"alert-dialog-content\"]",
	"[data-slot=\"sheet-content\"]",
	"[data-slot=\"drawer-content\"]",
	"[data-wizard-layout]"
].join(", ");
function isInsideOverlay(target) {
	return target instanceof Element && Boolean(target.closest(OVERLAY_CONTENT_SELECTOR));
}
function docsHrefToRoute(href) {
	const { pathname, hash } = splitHrefHash(href);
	if (pathname === "/docs" || pathname === "/docs/") return {
		to: "/docs",
		params: void 0,
		hash: hash || void 0
	};
	if (pathname.startsWith("/docs/")) return {
		to: "/docs/$",
		params: { _splat: pathname.slice(6) },
		hash: hash || void 0
	};
	return null;
}
function openDocsInNewTab(href, marketingEnabled) {
	const docsUrl = getDocsPageUrl(href, marketingEnabled);
	openInNewTab(marketingEnabled ? buildConsoleUrl(docsUrl) : docsUrl);
}
function DocsRouteLink({ href, children, className, onClick, previewView = "article", ...props }) {
	const location = useLocation();
	const { features } = useConsoleProfile();
	const marketingEnabled = features.marketing;
	const previewNav = useDocsPreviewNavigation();
	const { openDocsPreview } = useDocsPreview();
	const route = docsHrefToRoute(href);
	const previewSlug = docsHrefToPreviewSlug(href);
	const canUsePreviewPane = marketingEnabled && isConsoleDocsPreviewPath(location.pathname);
	const handleOverlayClick = (event) => {
		if (!isInsideOverlay(event.currentTarget)) return false;
		event.preventDefault();
		event.stopPropagation();
		onClick?.(event);
		openDocsInNewTab(href, marketingEnabled);
		return true;
	};
	if (route && !marketingEnabled) {
		const externalUrl = getDocsPageUrl(href, false);
		const handleExternalClick = (event) => {
			event.preventDefault();
			event.stopPropagation();
			onClick?.(event);
			openInNewTab(externalUrl);
		};
		return /* @__PURE__ */ jsx("a", {
			...props,
			href: externalUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			className,
			onClick: handleExternalClick,
			children
		});
	}
	if (previewSlug !== null && (canUsePreviewPane || previewNav)) {
		const handlePreviewClick = (event) => {
			if (handleOverlayClick(event)) return;
			event.preventDefault();
			event.stopPropagation();
			onClick?.(event);
			if (previewNav) {
				previewNav.navigateToSlug(previewSlug, previewView);
				return;
			}
			openDocsPreview(previewSlug, { view: previewView });
		};
		return /* @__PURE__ */ jsx("a", {
			...props,
			href,
			className,
			onClick: handlePreviewClick,
			children
		});
	}
	if (!route) return /* @__PURE__ */ jsx("a", {
		...props,
		href,
		className,
		onClick,
		children
	});
	const handleRouteClick = (event) => {
		if (handleOverlayClick(event)) return;
		onClick?.(event);
	};
	if (!route.params) return /* @__PURE__ */ jsx(Link, {
		...props,
		to: route.to,
		hash: route.hash,
		className,
		onClick: handleRouteClick,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		...props,
		to: route.to,
		params: route.params,
		hash: route.hash,
		className: cn(className),
		onClick: handleRouteClick,
		children
	});
}
export { isConsoleRightPanePath as a, isConsoleDocsPreviewPath as i, DocsPreviewNavigationProvider as n, DocsPreviewContext as o, docsHrefToPreviewSlug as r, useDocsPreview as s, DocsRouteLink as t };
