import { Ci as parseUsageChartIntervalFromPrefs, Si as parseUsageChartDateRangeFromPrefs } from "./auth-BPuxYQAc.js";
import { _ as serializeUsageChartDateRange, l as getStableUsageChartDateRange, p as parseUsageChartDateRange, s as resolveUsageChartInterval, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
function resolveUsageChartFiltersFromPrefs(prefs, plan) {
	const serialized = parseUsageChartDateRangeFromPrefs(prefs);
	const dateRange = serialized ? parseUsageChartDateRange(serialized) : getStableUsageChartDateRange();
	return {
		dateRange,
		chartInterval: resolveUsageChartInterval(parseUsageChartIntervalFromPrefs(prefs) ?? "1h", dateRange, plan)
	};
}
function serializeUsageChartFilters(filters) {
	return {
		serializedDateRange: serializeUsageChartDateRange(filters.dateRange),
		chartInterval: filters.chartInterval
	};
}
export { serializeUsageChartFilters as n, resolveUsageChartFiltersFromPrefs as t };
