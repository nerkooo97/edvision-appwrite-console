import { n as useT } from "./translate-DZcqveGn.js";
import { en as DEDICATED_FEATURE_UNAVAILABLE } from "./databases-Dh0pwZ6h.js";
import { C as dedicatedDatabaseStatusAlertTitleKey, E as isDedicatedDatabaseReady, S as dedicatedDatabaseStatusAlertDescriptionKey, b as coerceTrimmedString, x as dedicatedDatabaseHeaderAlertVariant } from "./database-routes-DB_xKWuY.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as HeaderAlertBar } from "./HeaderAlertBar-CK7Gy4sE.js";
import { t as shouldRedirectDedicatedDatabaseProvisioning } from "./dedicated-database-provisioning-access-De1sGrke.js";
import { s as localizeResourceStatusLabel } from "./resource-status-labels-C-bLMJxj.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
function DedicatedDatabaseStatusHeaderAlert({ status }) {
	const t = useT();
	const normalized = coerceTrimmedString(status);
	if (!normalized || isDedicatedDatabaseReady(normalized)) return null;
	const normalizedStatus = normalized.toLowerCase();
	const variant = dedicatedDatabaseHeaderAlertVariant(normalized);
	const titleKey = dedicatedDatabaseStatusAlertTitleKey(normalized);
	const descriptionKey = dedicatedDatabaseStatusAlertDescriptionKey(normalized);
	const showSpinner = ![
		"failed",
		"deleted",
		"paused",
		"inactive"
	].includes(normalizedStatus);
	return /* @__PURE__ */ jsxs(HeaderAlertBar, {
		variant,
		icon: showSpinner ? Loader2 : AlertCircle,
		className: showSpinner ? "shrink-0 [&_svg]:animate-spin" : "shrink-0",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "font-semibold",
				children: t(titleKey)
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 font-normal text-[12px] opacity-90",
				children: t(descriptionKey)
			}),
			titleKey === "Database is not ready" ? /* @__PURE__ */ jsxs("p", {
				className: "mt-1 font-normal text-[12px] opacity-90",
				children: [
					t("Current status"),
					":",
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "font-medium",
						children: localizeResourceStatusLabel(status, t)
					})
				]
			}) : null
		]
	});
}
function DatabaseTypeUnavailable({ projectId }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-[400px] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted ring-1 ring-border",
					children: /* @__PURE__ */ jsx(AlertCircle, { className: "h-6 w-6 text-muted-foreground" })
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[15px] font-medium text-foreground",
					children: t(DEDICATED_FEATURE_UNAVAILABLE)
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "link",
					className: "mt-3",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/databases",
						params: { projectId },
						children: t("Back to databases")
					})
				})
			]
		})
	});
}
function useRedirectIfDedicatedDatabaseProvisioning(status, fallbackTo, fallbackParams) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const paramsKey = JSON.stringify(fallbackParams);
	useEffect(() => {
		if (!shouldRedirectDedicatedDatabaseProvisioning(status, pathname)) return;
		navigate({
			to: fallbackTo,
			params: JSON.parse(paramsKey),
			replace: true
		});
	}, [
		fallbackTo,
		navigate,
		paramsKey,
		pathname,
		status
	]);
}
export { DatabaseTypeUnavailable as n, DedicatedDatabaseStatusHeaderAlert as r, useRedirectIfDedicatedDatabaseProvisioning as t };
