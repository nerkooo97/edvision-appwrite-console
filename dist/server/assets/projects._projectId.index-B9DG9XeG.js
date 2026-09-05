import { s as loadDebugOverrides } from "./i18n-Db4baE06.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Dt as requestsOverviewQueryOptions, et as bandwidthOverviewQueryOptions, ft as overviewStorageOverviewQueryOptions, lt as gbHoursOverviewQueryOptions, rt as executionsOverviewQueryOptions } from "./hooks-BONwG3Mt.js";
import { s as consoleAccountQueryOptions } from "./auth-BPuxYQAc.js";
import { X as ensureProjectRegion, b as mapApiKeysFromResponse, m as fetchProject, s as apiKeysQueryOptions, w as platformsQueryOptions } from "./projects-BaTJenfQ.js";
import { St as getUsageLogRetentionHoursFromPlan } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as resolveUsageChartFiltersFromPrefs } from "./usage-chart-filters-pmJA5qvl.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
const OVERVIEW_CHART_TAB_ORDER = [
	"bandwidth",
	"requests",
	"storage",
	"executions",
	"gbhours"
];
const OVERVIEW_CHART_TAB_LABELS = {
	bandwidth: "Bandwidth",
	requests: "Requests",
	storage: "Storage",
	executions: "Executions",
	gbhours: "Compute"
};
const OVERVIEW_CHART_TAB_DISABLE_KEYS = {
	bandwidth: "disableOverviewBandwidthChart",
	requests: "disableOverviewRequestsChart",
	storage: "disableOverviewStorageChart",
	executions: "disableOverviewExecutionsChart",
	gbhours: "disableOverviewComputeChart"
};
function isOverviewChartTabEnabled(tabId, overrides = loadDebugOverrides()) {
	return !overrides[OVERVIEW_CHART_TAB_DISABLE_KEYS[tabId]];
}
var OVERVIEW_CHART_TAB_USAGE_CATEGORY = {
	bandwidth: "bandwidth",
	requests: "requests",
	storage: "storage",
	executions: "compute",
	gbhours: "compute"
};
function getUsageCategoryIdForOverviewChartTab(tabId) {
	return OVERVIEW_CHART_TAB_USAGE_CATEGORY[tabId];
}
var $$splitComponentImporter = () => import("./projects._projectId.index-BqBEnnGk.js");
var OVERVIEW_CHART_PREFETCH_BY_TAB = {
	bandwidth: (projectId, parsedRange, chartInterval, includeBreakdown, logRetentionHours) => bandwidthOverviewQueryOptions(projectId, parsedRange, chartInterval, includeBreakdown, void 0, logRetentionHours),
	requests: (projectId, parsedRange, chartInterval, includeBreakdown, logRetentionHours) => requestsOverviewQueryOptions(projectId, parsedRange, chartInterval, includeBreakdown, void 0, logRetentionHours),
	executions: (projectId, parsedRange, chartInterval, includeBreakdown, logRetentionHours) => executionsOverviewQueryOptions(projectId, parsedRange, chartInterval, includeBreakdown, void 0, logRetentionHours),
	gbhours: (projectId, parsedRange, chartInterval, includeBreakdown, logRetentionHours) => gbHoursOverviewQueryOptions(projectId, parsedRange, chartInterval, includeBreakdown, void 0, logRetentionHours),
	storage: (projectId, parsedRange, chartInterval, includeBreakdown, logRetentionHours) => overviewStorageOverviewQueryOptions(projectId, parsedRange, chartInterval, includeBreakdown, void 0, logRetentionHours)
};
const Route = createFileRoute("/_public/projects/$projectId/")({
	head: () => ({ meta: [{ title: pageTitle("Dashboard") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (context.budgetLimitReached || context.planUsageLimitReached) return;
		try {
			await ensureProjectRegion(queryClient, projectId);
			const apiKeysRaw = await Promise.race([queryClient.ensureQueryData(apiKeysQueryOptions(projectId)).catch(() => null), new Promise((resolve) => {
				window.setTimeout(() => resolve(null), 4e3);
			})]);
			const account = await queryClient.ensureQueryData(consoleAccountQueryOptions()).catch(() => null);
			const usageStatsEnabled = getActiveProfileFeatures().usageStats;
			queryClient.prefetchQuery(platformsQueryOptions(projectId)).catch(() => void 0);
			if (usageStatsEnabled) {
				const project = await queryClient.ensureQueryData({
					queryKey: ["project", projectId],
					queryFn: () => fetchProject(projectId),
					staleTime: 300 * 1e3
				}).catch(() => null);
				const organizationPlan = project?.teamId ? await queryClient.ensureQueryData(organizationPlanQueryOptions(project.teamId)).catch(() => null) : null;
				const logRetentionHours = getUsageLogRetentionHoursFromPlan(organizationPlan);
				const usageChartFilters = resolveUsageChartFiltersFromPrefs(account?.prefs, organizationPlan);
				const parsedRange = {
					from: usageChartFilters.dateRange.from,
					to: usageChartFilters.dateRange.to
				};
				const chartInterval = usageChartFilters.chartInterval;
				const debugOverrides = loadDebugOverrides();
				const usagePrefetchTasks = OVERVIEW_CHART_TAB_ORDER.filter((tabId) => isOverviewChartTabEnabled(tabId, debugOverrides)).map((tabId) => queryClient.prefetchQuery(OVERVIEW_CHART_PREFETCH_BY_TAB[tabId](projectId, parsedRange, chartInterval, tabId === "bandwidth", logRetentionHours)));
				Promise.all(usagePrefetchTasks).catch(() => void 0);
			}
			return {
				apiKeys: mapApiKeysFromResponse(apiKeysRaw),
				apiKeysRaw
			};
		} catch (error) {
			console.warn("Failed to fetch overview data in loader:", error);
			return;
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { getUsageCategoryIdForOverviewChartTab as a, OVERVIEW_CHART_TAB_ORDER as i, OVERVIEW_CHART_TAB_DISABLE_KEYS as n, isOverviewChartTabEnabled as o, OVERVIEW_CHART_TAB_LABELS as r, Route as t };
