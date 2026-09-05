import { t as cn } from "./utils-DoqqkI3X.js";
import { C as isConsoleImpersonationActive, S as hasConsoleImpersonationSessionTarget, T as readConsoleImpersonationOperatorSnapshot, n as clearConsoleImpersonateUser, r as clearConsoleSessionLocally, v as CONSOLE_IMPERSONATION_CHANGED_EVENT, x as hardNavigateToAccountAfterImpersonation, y as clearConsoleImpersonationSession } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as CONSOLE_ACCOUNT_ACCESS_BLOCKED, o as isHttpForbiddenError } from "./error-formatting-CL2hjGy5.js";
import { $t as applyScreenshotModeAccount, rn as subscribeScreenshotMode } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { St as requiresConsoleEmailVerification, _ as isConsoleSigningOut, b as performConsoleSignOut, p as flushRecentImpersonationUsersToAccountPrefs, s as consoleAccountQueryOptions } from "./auth-BPuxYQAc.js";
import { n as isMarketingPagePath } from "./is-marketing-page-dgx45Oqy.js";
import { t as useConsoleImpersonationRevision } from "./use-console-impersonation-revision-BiI0c7pX.js";
import { n as headerAlertOutlineButtonClass, t as HeaderAlertBar } from "./HeaderAlertBar-CK7Gy4sE.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLoaderData, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, Loader2, UserRound } from "lucide-react";
function AccountAccessBlockedScreen({ layout = "fullscreen" }) {
	const t = useT();
	const { title, message } = CONSOLE_ACCOUNT_ACCESS_BLOCKED;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex w-full flex-col items-center justify-center gap-8 px-4 py-8", layout === "fill" ? "min-h-0 flex-1" : "min-h-svh bg-background"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full max-w-md flex-col items-center gap-8",
			children: [/* @__PURE__ */ jsx("div", {
				className: "rounded-full bg-destructive/10 p-3",
				children: /* @__PURE__ */ jsx(AlertTriangle, {
					className: "h-8 w-8 text-destructive",
					"aria-hidden": true
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-3 text-center",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold",
					children: t(title)
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: t(message)
				})]
			})]
		})
	});
}
async function performExitConsoleImpersonation(options) {
	const opId = readConsoleImpersonationOperatorSnapshot()?.$id;
	clearConsoleImpersonateUser();
	clearConsoleImpersonationSession({ skipNotify: true });
	if (opId && !options?.skipRecentImpersonationFlush) flushRecentImpersonationUsersToAccountPrefs(opId).catch((e) => {
		console.error(e);
	});
	hardNavigateToAccountAfterImpersonation();
}
function ConsoleImpersonationBannerSession({ className }) {
	const t = useT();
	const [, bump] = useState(0);
	useEffect(() => {
		const onChange = () => bump((n) => n + 1);
		window.addEventListener(CONSOLE_IMPERSONATION_CHANGED_EVENT, onChange);
		return () => window.removeEventListener(CONSOLE_IMPERSONATION_CHANGED_EVENT, onChange);
	}, []);
	if (!hasConsoleImpersonationSessionTarget()) return null;
	const operatorSnapshot = readConsoleImpersonationOperatorSnapshot();
	const operatorLabel = operatorSnapshot?.name?.trim() || operatorSnapshot?.email?.trim() || t("Operator");
	const summary = t("Impersonation active. Operating as another console user. Exit to return to your operator session.");
	return /* @__PURE__ */ jsx(HeaderAlertBar, {
		variant: "warning",
		icon: UserRound,
		role: "status",
		"aria-label": summary,
		className,
		action: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: headerAlertOutlineButtonClass("warning"),
			"aria-label": t("Exit impersonation"),
			onClick: () => void performExitConsoleImpersonation({ skipRecentImpersonationFlush: true }),
			children: t("Exit")
		}),
		children: /* @__PURE__ */ jsxs(Fragment, { children: [
			t("Impersonation active. Operating as"),
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "text-foreground",
				children: t("another console user")
			}),
			t(". Operator"),
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "text-foreground",
				children: operatorLabel
			}),
			"."
		] })
	});
}
function ConsoleImpersonationBannerFull({ className }) {
	const t = useT();
	const { account: accountRaw } = useAuth();
	const account = accountRaw;
	const operatorSnapshot = readConsoleImpersonationOperatorSnapshot();
	if (!isConsoleImpersonationActive(account)) return null;
	const impersonatorUserId = account?.impersonatorUserId;
	const operatorLabel = operatorSnapshot?.name?.trim() || operatorSnapshot?.email?.trim() || (impersonatorUserId ? `${t("User")} ${impersonatorUserId}` : t("Operator"));
	const targetLabel = account?.name?.trim() || account?.email?.trim() || (account?.$id ? `${t("User")} ${account.$id}` : t("Console user"));
	const summary = `Impersonation active. Operating as ${targetLabel}. Operator ${operatorLabel}.`;
	return /* @__PURE__ */ jsx(HeaderAlertBar, {
		variant: "warning",
		icon: UserRound,
		role: "status",
		"aria-label": summary,
		className,
		action: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: headerAlertOutlineButtonClass("warning"),
			"aria-label": t("Exit impersonation"),
			onClick: () => void performExitConsoleImpersonation(),
			children: t("Exit")
		}),
		children: /* @__PURE__ */ jsxs(Fragment, { children: [
			t("Impersonation active. Operating as"),
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "text-foreground",
				children: targetLabel
			}),
			t(". Operator"),
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "text-foreground",
				children: operatorLabel
			}),
			"."
		] })
	});
}
function ConsoleImpersonationBanner({ className, sessionOnly = false }) {
	if (sessionOnly) return /* @__PURE__ */ jsx(ConsoleImpersonationBannerSession, { className });
	return /* @__PURE__ */ jsx(ConsoleImpersonationBannerFull, { className });
}
function isAuthPage(pathname) {
	return pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/recovery" || pathname === "/reset" || pathname === "/join" || pathname === "/mfa" || pathname === "/verify-email" || pathname === "/auth/magic-url";
}
function isOptionalAuthPage(pathname) {
	const features = getActiveProfileFeatures();
	if (pathname === "/access") return true;
	if (pathname === "/init") return features.init;
	if (pathname === "/agent" || pathname.startsWith("/agent/") || pathname === "/assistant" || pathname.startsWith("/assistant/")) {
		if (pathname.startsWith("/agent/mcp/") || pathname.startsWith("/assistant/mcp/")) return false;
		return features.agent;
	}
	if (pathname.startsWith("/debug/")) return true;
	return isMarketingPagePath(pathname);
}
function extractRedirectFromSearch(search) {
	if (!search) return null;
	const redirect$1 = (search instanceof URLSearchParams ? search : new URLSearchParams(typeof search === "string" ? search : "")).get("redirect");
	return redirect$1 && redirect$1.startsWith("/") && !redirect$1.includes("://") ? redirect$1 : null;
}
function getRelativeRedirectUrl(location) {
	if (isAuthPage(location.pathname)) {
		if (location.search && typeof location.search === "object" && "redirect" in location.search) {
			const redirect$1 = location.search.redirect;
			return redirect$1 && typeof redirect$1 === "string" && isValidRelativeRedirect(redirect$1) ? redirect$1 : null;
		}
		return extractRedirectFromSearch(location.search);
	}
	let searchStr = "";
	if (location.search) {
		if (typeof location.search === "string") searchStr = location.search;
		else if (location.search instanceof URLSearchParams) searchStr = location.search.toString();
		else if (typeof location.search === "object") {
			const params = new URLSearchParams();
			Object.entries(location.search).forEach(([key, value]) => {
				if (value !== void 0 && value !== null) params.set(key, String(value));
			});
			searchStr = params.toString();
		}
	}
	const redirectUrl = `${location.pathname}${searchStr ? `?${searchStr}` : ""}`;
	if (redirectUrl.startsWith("/") && !redirectUrl.includes("://")) return redirectUrl;
	return null;
}
function isValidRelativeRedirect(url) {
	try {
		return url.startsWith("/") && !url.includes("://");
	} catch {
		return false;
	}
}
var AUTH_REDIRECT_DEDUPE_WINDOW_MS = 750;
var lastAuthRedirectKey = null;
var lastAuthRedirectAtMs = 0;
function shouldSkipDuplicateAuthRedirect(key) {
	if (typeof window === "undefined") return false;
	const now = Date.now();
	if (lastAuthRedirectKey === key && now - lastAuthRedirectAtMs < AUTH_REDIRECT_DEDUPE_WINDOW_MS) return true;
	lastAuthRedirectKey = key;
	lastAuthRedirectAtMs = now;
	return false;
}
function useAuthErrorNavigation(error, location) {
	const navigate = useNavigate();
	const navigateRef = useRef(navigate);
	navigateRef.current = navigate;
	const needsMfa = error instanceof AppwriteException && error.type === "user_more_factors_required";
	useEffect(() => {
		if (isConsoleSigningOut()) return;
		if (!needsMfa || location.pathname === "/mfa") return;
		const redirectUrl = getRelativeRedirectUrl(location);
		if (shouldSkipDuplicateAuthRedirect(`mfa:${redirectUrl ?? ""}`)) return;
		if (redirectUrl && isValidRelativeRedirect(redirectUrl)) navigateRef.current({
			to: "/mfa",
			search: { redirect: redirectUrl }
		});
		else navigateRef.current({ to: "/mfa" });
	}, [needsMfa, location.pathname]);
	const is401 = !!error && (error.code === 401 || error.status === 401);
	useEffect(() => {
		if (isConsoleSigningOut()) return;
		if (!is401 || isAuthPage(location.pathname) || isOptionalAuthPage(location.pathname)) return;
		const redirectUrl = getRelativeRedirectUrl(location);
		if (shouldSkipDuplicateAuthRedirect(`signin:${redirectUrl ?? ""}`)) return;
		if (redirectUrl && isValidRelativeRedirect(redirectUrl)) navigateRef.current({
			to: "/sign-in",
			search: { redirect: redirectUrl }
		});
		else navigateRef.current({ to: "/sign-in" });
	}, [is401, location.pathname]);
}
function isMfaRequiredError(error) {
	return error instanceof AppwriteException && error.type === "user_more_factors_required";
}
async function signOut(_navigate, queryClient) {
	if (queryClient) {
		await performConsoleSignOut(queryClient);
		return;
	}
	clearConsoleSessionLocally();
	if (typeof window !== "undefined") window.location.replace("/sign-in");
}
function RequireAuth({ children, fallback = null, loadingComponent = null }) {
	const { currentUser } = useLoaderData({ from: "__root__" });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const { data: accountData, isLoading, isPending, isFetched, error } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const [, setScreenshotModeEpoch] = useState(0);
	useEffect(() => {
		return subscribeScreenshotMode(() => {
			setScreenshotModeEpoch((epoch) => epoch + 1);
		});
	}, []);
	const account = applyScreenshotModeAccount(accountData);
	useAuthErrorNavigation(error, location);
	const accountAccessBlocked = !!error && isHttpForbiddenError(error);
	const isMfaRequired = isMfaRequiredError(error);
	const isAuthenticated = !!account && !error;
	const needsEmailVerification = isAuthenticated && requiresConsoleEmailVerification(accountData);
	useEffect(() => {
		if (!needsEmailVerification) return;
		if (location.pathname === "/verify-email") return;
		if (isAuthPage(location.pathname) || isOptionalAuthPage(location.pathname)) return;
		const redirectUrl = getRelativeRedirectUrl(location);
		if (redirectUrl && isValidRelativeRedirect(redirectUrl)) navigate({
			to: "/verify-email",
			search: { redirect: redirectUrl },
			replace: true
		});
		else navigate({
			to: "/verify-email",
			replace: true
		});
	}, [
		needsEmailVerification,
		location.pathname,
		location.search,
		navigate
	]);
	const authData = {
		currentUser,
		account,
		isLoading,
		isPending,
		isFetched,
		isAuthenticated,
		isMfaRequired,
		accountAccessBlocked,
		signOut: () => signOut(navigate, queryClient)
	};
	if (isLoading) return /* @__PURE__ */ jsx(Fragment, { children: loadingComponent });
	if (accountAccessBlocked) return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-svh w-full flex-col bg-background",
		children: [/* @__PURE__ */ jsx(ConsoleImpersonationBanner, { sessionOnly: true }), /* @__PURE__ */ jsx(AccountAccessBlockedScreen, { layout: "fill" })]
	});
	if (!isAuthenticated) {
		if (isMfaRequired && location.pathname !== "/mfa") return loadingComponent ?? /* @__PURE__ */ jsx("div", {
			className: "flex min-h-svh items-center justify-center bg-background",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
		});
		return /* @__PURE__ */ jsx(Fragment, { children: fallback });
	}
	if (needsEmailVerification && location.pathname !== "/verify-email" && !isAuthPage(location.pathname) && !isOptionalAuthPage(location.pathname)) return loadingComponent ?? /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh items-center justify-center bg-background",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ jsx(Fragment, { children: typeof children === "function" ? children(authData) : children });
}
function useAuth() {
	const { currentUser } = useLoaderData({ from: "__root__" });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const consoleImpersonationRevision = useConsoleImpersonationRevision();
	const [, setScreenshotModeEpoch] = useState(0);
	useEffect(() => {
		return subscribeScreenshotMode(() => {
			setScreenshotModeEpoch((epoch) => epoch + 1);
		});
	}, []);
	const { data: accountData, isLoading, isPending, isFetched, error } = useQuery(consoleAccountQueryOptions({ revision: consoleImpersonationRevision }));
	useAuthErrorNavigation(error, location);
	const accountAccessBlocked = !!error && isHttpForbiddenError(error);
	const account = applyScreenshotModeAccount(accountData);
	return {
		currentUser,
		account,
		isLoading,
		isPending,
		isFetched,
		isAuthenticated: !!account && !error,
		isMfaRequired: isMfaRequiredError(error),
		accountAccessBlocked,
		signOut: () => signOut(navigate, queryClient)
	};
}
export { AccountAccessBlockedScreen as a, ConsoleImpersonationBanner as i, isOptionalAuthPage as n, useAuth as r, RequireAuth as t };
