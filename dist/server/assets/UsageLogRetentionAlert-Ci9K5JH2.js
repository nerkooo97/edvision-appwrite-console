import { n as useT } from "./translate-DZcqveGn.js";
import { u as getUsageChartQueryRangeKeyPart } from "./chart-interval-Dbrn19qD.js";
import { Ct as hasFiniteUsageLogRetention, wt as isUsageDateRangeBeyondRetention } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { n as isUsageHistoryLimitExceededError } from "./usage-history-errors-9ZmxvNiN.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo, useSyncExternalStore } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
function isProjectUsageQueryKey(queryKey, projectId) {
	const root = queryKey[0];
	if (root !== "usage-events" && root !== "usage-gauges" && root !== "firewall-impact") return false;
	const projectIndex = queryKey.indexOf("project");
	if (projectIndex === -1) return false;
	return queryKey[projectIndex + 1] === projectId;
}
function useUsageHistoryLimitAlertState({ projectId, dateRange, dateRangePresetId, retentionHours, organizationPlan }) {
	const queryClient = useQueryClient();
	const currentRangeKeyPart = useMemo(() => getUsageChartQueryRangeKeyPart(dateRange, dateRangePresetId), [dateRange, dateRangePresetId]);
	const hasUsageHistoryLimitError = useSyncExternalStore((onStoreChange) => queryClient.getQueryCache().subscribe((event) => {
		if (event.type === "updated" || event.type === "added") onStoreChange();
	}), () => {
		if (!projectId) return false;
		const impactFrom = dateRange?.from?.toISOString() ?? "";
		const impactTo = dateRange?.to?.toISOString() ?? "";
		return queryClient.getQueryCache().getAll().some((query) => {
			if (query.state.status !== "error") return false;
			if (!isProjectUsageQueryKey(query.queryKey, projectId)) return false;
			if (!isUsageHistoryLimitExceededError(query.state.error)) return false;
			if (query.queryKey[0] === "firewall-impact") return query.queryKey.includes(impactFrom) && query.queryKey.includes(impactTo);
			return query.queryKey.includes(currentRangeKeyPart);
		});
	}, () => false);
	const rangeBeyondRetention = !!organizationPlan && hasFiniteUsageLogRetention(organizationPlan) && isUsageDateRangeBeyondRetention(dateRange, retentionHours, dateRangePresetId);
	return {
		showAlert: hasUsageHistoryLimitError || rangeBeyondRetention,
		triggeredByServerError: hasUsageHistoryLimitError,
		triggeredByDateRange: rangeBeyondRetention
	};
}
function UsageLogRetentionAlert({ retentionDays, organizationId, onAdjustRange }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const showUpgradeCta = features.billing && !!organizationId;
	return /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-amber-500/5",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full px-4 py-3 sm:px-6",
			children: /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: "border-amber-500/30 bg-transparent",
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx(AlertTitle, {
							className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
							children: t("Usage history limit reached")
						}), /* @__PURE__ */ jsxs(AlertDescription, {
							className: "col-start-2 block min-w-0 truncate whitespace-nowrap text-[12px] text-amber-600/80 dark:text-amber-400/80",
							children: [
								t("Your plan includes"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: retentionDays
								}),
								" ",
								t("days of usage history. Use a shorter range or upgrade for more.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 flex-wrap items-center justify-end gap-2",
						children: [onAdjustRange ? /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 border-amber-500/30 bg-transparent px-3 text-[12px] text-amber-700 hover:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/10",
							onClick: onAdjustRange,
							children: t("Use shorter range")
						}) : null, showUpgradeCta ? /* @__PURE__ */ jsx(Button, {
							asChild: true,
							size: "sm",
							className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/upgrade",
								search: { orgId: organizationId },
								children: t("Upgrade plan")
							})
						}) : null]
					})]
				})]
			})
		})
	});
}
export { useUsageHistoryLimitAlertState as n, UsageLogRetentionAlert as t };
