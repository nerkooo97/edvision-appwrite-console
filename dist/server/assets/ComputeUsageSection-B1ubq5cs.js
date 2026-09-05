import { t as cn } from "./utils-DoqqkI3X.js";
import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import { On as useUsageResourceBreakdownLookups, Qr as formatExecutionsValue, Tn as useSiteGbHoursForSite, Zr as formatExecutionsTotal, en as useProjectExecutionsOverview, gt as refetchProjectComputeUsageQueries, in as useProjectGbHoursOverview, nn as useProjectFunctionExecutionsOverview, rn as useProjectFunctionGbHoursOverview, vn as useProjectSiteExecutionsOverview, wn as useSiteExecutionsForSite, yn as useProjectSiteGbHoursOverview } from "./hooks-BONwG3Mt.js";
import { J as sumUsageChartPoints } from "./affiliates-BOg1SHC6.js";
import { c as formatGbHoursValue, s as formatGbHoursTotal } from "./format-metric-6jsfxd5f.js";
import { a as UsageMetricCardFooter, o as UsageMetricCardShell, t as UsageTimeSeriesChartCard } from "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { t as shouldShowUsageChartSkeleton } from "./usage-chart-loading-qgdN2UV0.js";
import { t as UsageResourceBreakdownCard } from "./UsageResourceBreakdownCard-D5ZVWuSc.js";
import { n as useRefresh } from "./RefreshContext-CCamFujD.js";
import { a as COMPUTE_FUNCTIONS_DOCS_HREF, c as COMPUTE_GB_HOURS_DESCRIPTION, d as COMPUTE_SITE_GB_HOURS_DESCRIPTION, f as topConsumersToBreakdownItems, i as COMPUTE_EXECUTIONS_DESCRIPTION, l as COMPUTE_SITES_DOCS_HREF, o as COMPUTE_FUNCTION_EXECUTIONS_DESCRIPTION, s as COMPUTE_FUNCTION_GB_HOURS_DESCRIPTION, t as GbHoursUnitInfo, u as COMPUTE_SITE_EXECUTIONS_DESCRIPTION } from "./GbHoursUnitInfo-Coi9G67P.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
var COMPUTE_USAGE_ERROR = {
	title: "Couldn't load compute usage",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
function ComputeMetricBentoCard({ title, description, unitLabel, chartGradientId, chartPoints, total, changePercent, isLoading, isError, queryError, formatTotal, formatValue, axisFormat = "count", showBreakdown, breakdownItems, breakdownLookup, breakdownTitleAddon, onRetry, docsHref, dateRange, chartInterval, onDateRangeChange }) {
	return /* @__PURE__ */ jsxs(UsageMetricCardShell, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("grid grid-cols-1 items-stretch divide-y divide-border lg:divide-y-0", showBreakdown && "lg:grid-cols-3 lg:divide-x"),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn(showBreakdown && "lg:col-span-2"),
			children: /* @__PURE__ */ jsx(UsageTimeSeriesChartCard, {
				embedded: true,
				title,
				description,
				unitLabel,
				chartGradientId,
				total,
				changePercent,
				chartPoints,
				isLoading,
				isError,
				queryError,
				errorTitle: COMPUTE_USAGE_ERROR.title,
				errorMessage: COMPUTE_USAGE_ERROR.message,
				formatTotal,
				formatValue,
				axisFormat,
				onRetry,
				dateRange,
				chartInterval,
				onDateRangeChange
			})
		}), showBreakdown ? /* @__PURE__ */ jsx(UsageResourceBreakdownCard, {
			embedded: true,
			description,
			items: breakdownItems,
			isLoading,
			isError,
			computeLookup: breakdownLookup,
			errorTitle: COMPUTE_USAGE_ERROR.title,
			errorMessage: COMPUTE_USAGE_ERROR.message,
			formatValue,
			onRetry,
			titleAddon: breakdownTitleAddon
		}) : null]
	}), /* @__PURE__ */ jsx(UsageMetricCardFooter, {
		description,
		docsHref
	})] });
}
function ComputeUsageSection({ projectId, dateRange, chartInterval, scope = "combined", siteId, onDateRangeChange }) {
	const queryClient = useQueryClient();
	const { registerRefreshHandler, unregisterRefreshHandler } = useRefresh();
	const { disableUsageBreakdownQueries } = useDebugOverrides();
	const showBreakdown = !disableUsageBreakdownQueries && !siteId;
	const combinedExecutionsQuery = useProjectExecutionsOverview(projectId, dateRange, scope === "combined", chartInterval);
	const combinedGbHoursQuery = useProjectGbHoursOverview(projectId, dateRange, scope === "combined", chartInterval);
	const functionExecutionsQuery = useProjectFunctionExecutionsOverview(projectId, dateRange, scope === "functions", chartInterval);
	const allSitesExecutionsQuery = useProjectSiteExecutionsOverview(projectId, dateRange, scope === "sites" && !siteId, chartInterval);
	const siteExecutionsQuery = useSiteExecutionsForSite(projectId, scope === "sites" ? siteId : void 0, dateRange, chartInterval);
	const functionGbHoursQuery = useProjectFunctionGbHoursOverview(projectId, dateRange, scope === "functions", chartInterval);
	const allSitesGbHoursQuery = useProjectSiteGbHoursOverview(projectId, dateRange, scope === "sites" && !siteId, chartInterval);
	const siteGbHoursQuery = useSiteGbHoursForSite(projectId, scope === "sites" ? siteId : void 0, dateRange, chartInterval);
	const executionsQuery = scope === "functions" ? functionExecutionsQuery : scope === "sites" ? siteId ? siteExecutionsQuery : allSitesExecutionsQuery : combinedExecutionsQuery;
	const gbHoursQuery = scope === "functions" ? functionGbHoursQuery : scope === "sites" ? siteId ? siteGbHoursQuery : allSitesGbHoursQuery : combinedGbHoursQuery;
	const breakdownItems = useMemo(() => {
		if (!showBreakdown) return [];
		return [...executionsQuery.isError ? [] : topConsumersToBreakdownItems(executionsQuery.data?.topConsumers ?? []), ...gbHoursQuery.isError ? [] : topConsumersToBreakdownItems(gbHoursQuery.data?.topConsumers ?? [])];
	}, [
		executionsQuery.data?.topConsumers,
		executionsQuery.isError,
		gbHoursQuery.data?.topConsumers,
		gbHoursQuery.isError,
		showBreakdown
	]);
	const { computeLookup } = useUsageResourceBreakdownLookups(projectId, breakdownItems, showBreakdown && breakdownItems.length > 0);
	useEffect(() => {
		registerRefreshHandler(() => refetchProjectComputeUsageQueries(queryClient, projectId), "Usage data");
		return () => unregisterRefreshHandler();
	}, [
		queryClient,
		projectId,
		registerRefreshHandler,
		unregisterRefreshHandler
	]);
	const handleRetryAll = () => {
		refetchProjectComputeUsageQueries(queryClient, projectId);
	};
	const executionsPoints = executionsQuery.isError ? [] : executionsQuery.data?.chartPoints ?? [];
	const gbHoursPoints = gbHoursQuery.isError ? [] : gbHoursQuery.data?.chartPoints ?? [];
	const executionsTitle = scope === "functions" ? "Function executions" : scope === "sites" ? "Site executions" : "Executions";
	const gbHoursTitle = scope === "functions" ? "Function GB-hours" : scope === "sites" ? "Site GB-hours" : "GB-hours";
	const executionsDescription = scope === "functions" ? COMPUTE_FUNCTION_EXECUTIONS_DESCRIPTION : scope === "sites" ? COMPUTE_SITE_EXECUTIONS_DESCRIPTION : COMPUTE_EXECUTIONS_DESCRIPTION;
	const gbHoursDescription = scope === "functions" ? COMPUTE_FUNCTION_GB_HOURS_DESCRIPTION : scope === "sites" ? COMPUTE_SITE_GB_HOURS_DESCRIPTION : COMPUTE_GB_HOURS_DESCRIPTION;
	const docsHref = scope === "sites" ? COMPUTE_SITES_DOCS_HREF : COMPUTE_FUNCTIONS_DOCS_HREF;
	const scopeKey = scope === "combined" ? "compute" : scope;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsx(ComputeMetricBentoCard, {
			projectId,
			title: executionsTitle,
			description: executionsDescription,
			unitLabel: "executions",
			chartGradientId: `usage-${scopeKey}-executions-gradient`,
			chartPoints: executionsPoints,
			total: sumUsageChartPoints(executionsPoints),
			changePercent: executionsQuery.data?.changePercent ?? 0,
			isLoading: shouldShowUsageChartSkeleton(executionsQuery.isError, executionsQuery.isLoading, executionsQuery.isPlaceholderData),
			isError: executionsQuery.isError,
			queryError: executionsQuery.error,
			formatTotal: formatExecutionsTotal,
			formatValue: formatExecutionsValue,
			showBreakdown,
			breakdownItems: executionsQuery.isError ? [] : topConsumersToBreakdownItems(executionsQuery.data?.topConsumers ?? []),
			breakdownLookup: computeLookup,
			onRetry: handleRetryAll,
			docsHref,
			dateRange,
			chartInterval,
			onDateRangeChange
		}), /* @__PURE__ */ jsx(ComputeMetricBentoCard, {
			projectId,
			title: gbHoursTitle,
			description: gbHoursDescription,
			unitLabel: "GBH",
			chartGradientId: `usage-${scopeKey}-gb-hours-gradient`,
			chartPoints: gbHoursPoints,
			total: sumUsageChartPoints(gbHoursPoints),
			changePercent: gbHoursQuery.data?.changePercent ?? 0,
			isLoading: shouldShowUsageChartSkeleton(gbHoursQuery.isError, gbHoursQuery.isLoading, gbHoursQuery.isPlaceholderData),
			isError: gbHoursQuery.isError,
			queryError: gbHoursQuery.error,
			formatTotal: formatGbHoursTotal,
			formatValue: formatGbHoursValue,
			axisFormat: "gbhours",
			showBreakdown,
			breakdownItems: gbHoursQuery.isError ? [] : topConsumersToBreakdownItems(gbHoursQuery.data?.topConsumers ?? []),
			breakdownLookup: computeLookup,
			breakdownTitleAddon: /* @__PURE__ */ jsx(GbHoursUnitInfo, {}),
			onRetry: handleRetryAll,
			docsHref,
			dateRange,
			chartInterval,
			onDateRangeChange
		})]
	});
}
export { ComputeUsageSection as t };
