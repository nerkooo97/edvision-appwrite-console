import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { v as overviewChartPanelErrorClass } from "./chart-panel-CCGEGd61.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";
function UsageChartErrorMessage({ copy }) {
	const t = useT();
	if (copy.isAddonNotFound) return /* @__PURE__ */ jsx(Fragment, { children: t(copy.message) });
	if (copy.isRetentionLimit && copy.retentionDays != null) return /* @__PURE__ */ jsxs(Fragment, { children: [
		t("Your plan includes"),
		" ",
		/* @__PURE__ */ jsx("span", {
			className: "font-medium",
			children: copy.retentionDays
		}),
		" ",
		t("days of usage history. Choose a shorter date range or upgrade for longer retention.")
	] });
	return /* @__PURE__ */ jsx(Fragment, { children: t(copy.message) });
}
var OBJECT_ID_PATTERN = /^[a-f0-9]{20,}$/i;
var UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var STATIC_PATH_SEGMENTS = new Set([
	"account",
	"attributes",
	"auth",
	"avatars",
	"blocks",
	"buckets",
	"challenges",
	"collections",
	"columns",
	"console",
	"databases",
	"deployments",
	"documents",
	"download",
	"executions",
	"factors",
	"files",
	"functions",
	"graphql",
	"health",
	"identities",
	"identity",
	"indexes",
	"invites",
	"jwt",
	"keys",
	"labels",
	"locale",
	"logs",
	"memberships",
	"messages",
	"messaging",
	"mfa",
	"migrations",
	"oauth2",
	"platforms",
	"preferences",
	"preview",
	"project",
	"projects",
	"providers",
	"proxy",
	"realtime",
	"recovery",
	"rest",
	"rows",
	"rules",
	"sessions",
	"sites",
	"stats",
	"storage",
	"subscribers",
	"tables",
	"tablesdb",
	"targets",
	"teams",
	"tokens",
	"topics",
	"uploads",
	"usage",
	"users",
	"v1",
	"v2",
	"variables",
	"verification",
	"view",
	"webhooks"
]);
function isPathIdSegment(segment) {
	if (!segment || segment.length <= 4) return false;
	if (segment.includes("{") || segment.includes("}")) return false;
	if (STATIC_PATH_SEGMENTS.has(segment.toLowerCase())) return false;
	if (OBJECT_ID_PATTERN.test(segment) || UUID_PATTERN.test(segment)) return true;
	if (segment.length >= 16 && /^[a-zA-Z0-9_-]+$/.test(segment)) return true;
	if (segment.length >= 8 && /^[a-f0-9]+$/i.test(segment)) return true;
	return false;
}
function compactUsagePathIds(path, visibleSuffix = 4) {
	if (!path) return path;
	return path.split("/").map((segment) => {
		if (!segment || !isPathIdSegment(segment)) return segment;
		if (segment.length <= visibleSuffix) return segment;
		return `...${segment.slice(-visibleSuffix)}`;
	}).join("/");
}
function OverviewChartPanelError({ title, message, onRetry, upgradeOrgId }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const showUpgradeCta = features.billing && !!upgradeOrgId;
	return /* @__PURE__ */ jsxs("div", {
		className: overviewChartPanelErrorClass,
		children: [
			/* @__PURE__ */ jsx(AlertCircle, { className: "h-8 w-8 shrink-0 text-muted-foreground" }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-sm",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
					children: message
				})]
			}),
			showUpgradeCta ? /* @__PURE__ */ jsx(Button, {
				asChild: true,
				size: "sm",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/upgrade",
					search: { orgId: upgradeOrgId },
					...analyticsAttrs("upgrade-clicked"),
					children: t("Upgrade plan")
				})
			}) : onRetry ? /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				onClick: onRetry,
				children: t("Try again")
			}) : null
		]
	});
}
export { compactUsagePathIds as n, UsageChartErrorMessage as r, OverviewChartPanelError as t };
