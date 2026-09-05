import { t as cn } from "./utils-DoqqkI3X.js";
import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Fo as getStatusIcon, Io as getStatusPresentation, Mo as formatLocalMaintenanceWindow, No as getMockReportTitle, jo as useAppwriteCloudStatus } from "./hooks-BONwG3Mt.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
const INITIAL_LOADER_SHELL_GATE = { projectSelector: "project-selector" };
var gateReady = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
function notifyShellGateListeners() {
	listeners.forEach((listener) => listener());
}
function setInitialLoaderShellGate(key, ready) {
	if (gateReady.get(key) === ready) return;
	gateReady.set(key, ready);
	notifyShellGateListeners();
}
function resetInitialLoaderShellGate(key) {
	if (!gateReady.has(key)) return;
	gateReady.delete(key);
	notifyShellGateListeners();
}
function subscribeInitialLoaderShellGates(listener) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}
function projectRouteRequiresProjectSelectorGate(pathname) {
	if (!pathname.startsWith("/projects/")) return false;
	const segments = pathname.split("/").filter(Boolean);
	return segments.length >= 2 && Boolean(segments[1]);
}
function getProjectIdFromPathname(pathname) {
	if (!pathname.startsWith("/projects/")) return null;
	const segments = pathname.split("/").filter(Boolean);
	return segments.length >= 2 ? segments[1] : null;
}
function areInitialLoaderShellGatesReady(pathname) {
	if (!projectRouteRequiresProjectSelectorGate(pathname)) return true;
	return gateReady.get(INITIAL_LOADER_SHELL_GATE.projectSelector) === true;
}
function isOperatorAccount(account) {
	return account?.impersonator === true || !!account?.impersonatorUserId;
}
var BANNER_EASE = [
	.22,
	1,
	.36,
	1
];
var BANNER_DURATION_S = .55;
var cloudStatusBannerEnterAnimationAlreadyPlayed = false;
function CloudStatusBannerInner({ aggregateState, data, mockCloudStatusAlert, skipEnterAnimation }) {
	const t = useT();
	const enterAnimationRecordedRef = useRef(false);
	const handleAnimationComplete = () => {
		if (skipEnterAnimation || enterAnimationRecordedRef.current) return;
		enterAnimationRecordedRef.current = true;
		cloudStatusBannerEnterAnimationAlreadyPlayed = true;
	};
	const presentation = getStatusPresentation(aggregateState);
	const Icon$1 = getStatusIcon(aggregateState);
	const activeReportTitle = mockCloudStatusAlert !== "live" ? getMockReportTitle(mockCloudStatusAlert) : data?.activeReport?.title;
	const maintenanceWindow = aggregateState === "maintenance" ? mockCloudStatusAlert !== "live" ? formatLocalMaintenanceWindow(new Date(Date.now() + 1800 * 1e3).toISOString(), new Date(Date.now() + 7200 * 1e3).toISOString()) : formatLocalMaintenanceWindow(data?.activeReport?.startsAt, data?.activeReport?.endsAt) : void 0;
	const regionsLine = mockCloudStatusAlert === "live" ? data?.regionsLine : void 0;
	return /* @__PURE__ */ jsx(motion.div, {
		initial: skipEnterAnimation ? false : { gridTemplateRows: "0fr" },
		animate: { gridTemplateRows: "1fr" },
		exit: { gridTemplateRows: "0fr" },
		transition: {
			duration: BANNER_DURATION_S,
			ease: BANNER_EASE
		},
		style: { display: "grid" },
		className: "overflow-hidden",
		onAnimationComplete: handleAnimationComplete,
		children: /* @__PURE__ */ jsx("div", {
			className: "min-h-0 overflow-hidden",
			children: /* @__PURE__ */ jsxs("a", {
				href: "https://status.appwrite.online",
				target: "_blank",
				rel: "noopener noreferrer",
				className: cn("relative flex min-h-14 min-w-0 flex-col gap-3 px-4 py-3 transition-all duration-200 hover:opacity-95 sm:flex-row sm:items-center sm:gap-4", presentation.containerClassName),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 items-start gap-3 sm:items-center",
					children: [/* @__PURE__ */ jsx(Icon$1, { className: "mt-0.5 h-4 w-4 shrink-0 sm:mt-0" }), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] font-medium leading-snug",
						children: [
							t(presentation.title),
							activeReportTitle ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: t(activeReportTitle)
							})] }) : null,
							maintenanceWindow ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
								className: "text-foreground/70",
								children: maintenanceWindow
							})] }) : null,
							regionsLine ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
								className: "text-foreground/70",
								children: t(regionsLine)
							})] }) : null
						]
					})]
				}), /* @__PURE__ */ jsxs("span", {
					className: cn("flex h-8 w-fit shrink-0 items-center gap-2 rounded-md px-3 text-[13px] font-medium sm:ms-auto", presentation.buttonClassName),
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: t("View Status")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "sm:hidden",
							children: t("Status")
						}),
						/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
					]
				})]
			})
		})
	});
}
function CloudStatusBanner() {
	const { isCloud, features } = useConsoleProfile();
	const { account, isFetched } = useAuth();
	const cloudStatusEnabled = isCloud && features.systemStatus;
	const showToOperator = isFetched && isOperatorAccount(account);
	const { mockCloudStatusAlert } = useDebugOverrides();
	const { data, isSuccess } = useAppwriteCloudStatus(cloudStatusEnabled && showToOperator);
	const aggregateState = !cloudStatusEnabled ? "operational" : mockCloudStatusAlert !== "live" ? mockCloudStatusAlert : isSuccess ? data?.consoleAlertState ?? "operational" : "operational";
	useEffect(() => {
		if (aggregateState === "operational") cloudStatusBannerEnterAnimationAlreadyPlayed = false;
	}, [aggregateState]);
	if (!cloudStatusEnabled || !showToOperator) return null;
	return /* @__PURE__ */ jsx(AnimatePresence, { children: aggregateState !== "operational" ? /* @__PURE__ */ jsx(CloudStatusBannerInner, {
		aggregateState,
		data,
		mockCloudStatusAlert,
		skipEnterAnimation: cloudStatusBannerEnterAnimationAlreadyPlayed
	}, "cloud-status-banner") : null });
}
export { getProjectIdFromPathname as a, setInitialLoaderShellGate as c, areInitialLoaderShellGatesReady as i, subscribeInitialLoaderShellGates as l, isOperatorAccount as n, projectRouteRequiresProjectSelectorGate as o, INITIAL_LOADER_SHELL_GATE as r, resetInitialLoaderShellGate as s, CloudStatusBanner as t };
