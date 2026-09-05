import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as isMarketingPagePath } from "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as openInNewWindow } from "./context-menu-D55xedo-.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { a as getMarketingPageUrl } from "./urls-BIlyr2O2.js";
import { a as StandaloneCommandCenterScope, t as ConsoleLayout } from "./ConsoleLayout-c5WGBGep.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as MarketingScrollToTop } from "./MarketingScrollToTop-DPpEnmVv.js";
import { t as getLegacyRedirectTarget } from "./legacy-redirects-DXrxvtwB.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useCanGoBack, useLocation, useMatches, useRouter } from "@tanstack/react-router";
import { createContext, useContext, useEffect } from "react";
import { ArrowLeft, FileQuestion, Home } from "lucide-react";
var MarketingSiteLayoutContext = createContext(false);
function MarketingSiteLayoutProvider({ children }) {
	return /* @__PURE__ */ jsx(MarketingSiteLayoutContext.Provider, {
		value: true,
		children
	});
}
function useMarketingSiteLayoutProvided() {
	return useContext(MarketingSiteLayoutContext);
}
function MarketingPageShell({ children }) {
	if (useMarketingSiteLayoutProvided()) return /* @__PURE__ */ jsx(Fragment, { children });
	return /* @__PURE__ */ jsx(StandaloneCommandCenterScope, {
		context: "account",
		children: /* @__PURE__ */ jsxs(ConsoleLayout, {
			header: { marketingNav: true },
			showFooter: true,
			footer: { expanded: true },
			children: [/* @__PURE__ */ jsx(MarketingScrollToTop, {}), children]
		})
	});
}
var CONSOLE_AREA_PREFIXES = new Set([
	"projects",
	"organizations",
	"account",
	"blocks",
	"init",
	"generator",
	"assistant",
	"agent"
]);
function isConsoleAreaPath(pathname) {
	const firstSegment = pathname.split("/").filter(Boolean)[0];
	return firstSegment ? CONSOLE_AREA_PREFIXES.has(firstSegment) : false;
}
function isDocsPath(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	return normalized === "/docs" || normalized.startsWith("/docs/");
}
function isOrgOutletOnlyPath(pathname, matches) {
	if (pathname.includes("/domains/buy") || pathname.includes("/domains/transfer-in") || pathname === "/upgrade") return true;
	return matches.some((match) => match.routeId.includes("/domains/$domainId") || match.routeId.includes("/marketplace/$appId") || match.routeId.includes("/apps/$appId") || match.routeId.includes("/support"));
}
function shouldRenderContentOnly(pathname, matches) {
	if (isDocsPath(pathname)) return true;
	if (matches.some((m) => m.routeId === "/_public/projects/$projectId")) return true;
	if (matches.some((m) => m.routeId === "/_public/account")) return true;
	if (matches.some((m) => m.routeId === "/_public/organizations/$orgId/apps/$appId")) return true;
	if (matches.some((m) => m.routeId === "/_public/organizations/$orgId")) return !isOrgOutletOnlyPath(pathname, matches);
	return false;
}
function shouldUseMarketingShell(pathname, marketingEnabled) {
	if (!marketingEnabled) return false;
	if (isMarketingPagePath(pathname)) return true;
	return !isConsoleAreaPath(pathname);
}
function getHomeHref(pathname, marketingEnabled) {
	if (marketingEnabled && (isMarketingPagePath(pathname) || !isConsoleAreaPath(pathname))) return "/home";
	return "/";
}
function NotFoundContent({ homeHref, canGoBack, onGoBack, docsHref, docsExternal }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "grid min-h-full w-full place-items-center px-4 py-24 sm:px-6 sm:py-32 lg:py-40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-md flex-col items-center gap-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-full bg-muted p-3 ring-1 ring-border",
					children: /* @__PURE__ */ jsx(FileQuestion, {
						className: "h-8 w-8 text-muted-foreground",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3 text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: "404"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-semibold text-foreground",
							children: t("Page not found")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[14px] leading-relaxed text-muted-foreground",
							children: t("The page you requested does not exist, may have been moved, or is temporarily unavailable.")
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-col gap-3 sm:flex-row",
					children: [canGoBack ? /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						onClick: onGoBack,
						className: "min-h-9 w-full shrink-0 sm:flex-1",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), t("Go back")]
					}) : null, /* @__PURE__ */ jsx(Button, {
						variant: "brandCta",
						size: "sm",
						className: cn("h-9 min-h-9 w-full shrink-0 gap-2 text-[13px] font-medium sm:flex-1", !canGoBack && "sm:w-full"),
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: homeHref,
							children: [/* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }), t("Go home")]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-center text-[13px] text-muted-foreground",
					children: [
						t("Looking for product docs?"),
						" ",
						docsExternal ? /* @__PURE__ */ jsx("a", {
							href: docsHref,
							className: "link-neutral",
							onClick: (event) => {
								event.preventDefault();
								openInNewWindow(docsHref);
							},
							children: t("Browse documentation")
						}) : /* @__PURE__ */ jsx(Link, {
							to: docsHref,
							className: "link-neutral",
							children: t("Browse documentation")
						})
					]
				})
			]
		})
	});
}
function NotFoundView() {
	const t = useT();
	const router = useRouter();
	const canGoBack = useCanGoBack();
	const location = useLocation();
	const { features } = useConsoleProfile();
	const homeHref = getHomeHref(location.pathname, features.marketing);
	const docsHref = getMarketingPageUrl("/docs", features.marketing);
	const docsExternal = !features.marketing;
	const legacyTarget = getLegacyRedirectTarget(location.pathname);
	useEffect(() => {
		if (!legacyTarget) return;
		const hashIndex = legacyTarget.indexOf("#");
		const pathname = hashIndex === -1 ? legacyTarget : legacyTarget.slice(0, hashIndex);
		const hash = hashIndex === -1 ? void 0 : legacyTarget.slice(hashIndex + 1);
		router.navigate({
			to: pathname,
			hash,
			replace: true
		});
	}, [legacyTarget, router]);
	useEffect(() => {
		if (typeof document === "undefined") return;
		if (legacyTarget) return;
		document.title = pageTitle(t("Page not found"));
	}, [t, legacyTarget]);
	if (legacyTarget) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-full w-full flex-1 flex-col",
		children: /* @__PURE__ */ jsx(NotFoundContent, {
			homeHref,
			canGoBack,
			onGoBack: () => router.history.back(),
			docsHref,
			docsExternal
		})
	});
}
function NotFound() {
	const location = useLocation();
	const matches = useMatches();
	const { features } = useConsoleProfile();
	if (shouldRenderContentOnly(location.pathname, matches)) return /* @__PURE__ */ jsx(NotFoundView, {});
	const useMarketingLayout = shouldUseMarketingShell(location.pathname, features.marketing);
	const view = /* @__PURE__ */ jsx(NotFoundView, {});
	if (useMarketingLayout) return /* @__PURE__ */ jsx(MarketingPageShell, { children: view });
	return /* @__PURE__ */ jsx(StandaloneCommandCenterScope, {
		context: "account",
		children: /* @__PURE__ */ jsx(ConsoleLayout, {
			showFooter: true,
			children: view
		})
	});
}
export { NotFoundView as n, MarketingSiteLayoutProvider as r, NotFound as t };
