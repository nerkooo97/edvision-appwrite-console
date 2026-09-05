import { n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT, t as COMPUTE_BREAKDOWN_RESOURCE_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
const OVERVIEW_CHART_HEIGHT = 240;
const OVERVIEW_TOP_BREAKDOWN_ITEM_COUNT = 6;
const OVERVIEW_COMPUTE_BREAKDOWN_ITEM_COUNT = 8;
var OVERVIEW_BREAKDOWN_ROW_HEIGHT_PX = 36;
var OVERVIEW_BREAKDOWN_ROW_GAP_PX = 4;
function overviewBreakdownListMinHeightPx(rowCount) {
	return rowCount * OVERVIEW_BREAKDOWN_ROW_HEIGHT_PX + Math.max(0, rowCount - 1) * OVERVIEW_BREAKDOWN_ROW_GAP_PX;
}
overviewBreakdownListMinHeightPx(OVERVIEW_TOP_BREAKDOWN_ITEM_COUNT);
overviewBreakdownListMinHeightPx(OVERVIEW_COMPUTE_BREAKDOWN_ITEM_COUNT);
const overviewTopBreakdownListClass = "relative flex h-full min-h-[236px] w-full min-w-0 flex-col gap-1 overflow-hidden";
const overviewComputeBreakdownListClass = "relative flex h-full min-h-[316px] w-full min-w-0 flex-col gap-1 overflow-hidden";
function overviewBreakdownListClassForRowCount(rowCount = OVERVIEW_TOP_BREAKDOWN_ITEM_COUNT) {
	return rowCount === OVERVIEW_COMPUTE_BREAKDOWN_ITEM_COUNT ? overviewComputeBreakdownListClass : overviewTopBreakdownListClass;
}
const overviewTopBreakdownRowClass = "flex h-9 min-h-9 w-full min-w-0 shrink-0 items-center gap-2 overflow-hidden rounded-md px-2";
const overviewChartTabPanelsContainerClass = "grid w-full [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:w-full";
function overviewChartTabPanelVisibilityClass(isActive) {
	return isActive ? "" : "invisible pointer-events-none";
}
function overviewChartContentRowClassName(withBreakdown = true) {
	return withBreakdown ? "flex min-h-[684px] min-w-0 flex-col @[700px]:h-[360px] @[700px]:min-h-[360px] @[700px]:max-h-[360px] @[700px]:flex-row @[700px]:items-stretch" : "flex min-h-[324px] min-w-0 flex-col @[700px]:h-[324px] @[700px]:min-h-[324px] @[700px]:max-h-[324px] @[700px]:flex-row @[700px]:items-stretch";
}
overviewChartContentRowClassName(true);
const overviewChartColumnClass = "flex h-full w-full min-w-0 flex-col overflow-hidden border-b border-border px-5 pb-8 pt-3 @[700px]:min-h-0 @[700px]:min-w-0 @[700px]:flex-1 @[700px]:border-b-0 @[700px]:border-e";
const overviewBreakdownColumnClass = "flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden px-5 pb-8 pt-3 @[700px]:w-[400px] @[700px]:shrink-0";
const overviewChartPanelHeaderClass = "mb-4 flex h-[60px] shrink-0 flex-nowrap items-center justify-between gap-x-3";
const overviewChartPanelHeaderActionsClass = "flex shrink-0 flex-nowrap items-center justify-end gap-x-4 gap-y-1.5";
const overviewChartPanelBodyClass = "flex h-[240px] w-full min-w-0 shrink-0 flex-col text-muted-foreground";
const overviewChartPanelChartAreaClass = "relative flex h-full min-h-0 w-full min-w-0 flex-col";
const overviewChartPanelChartFillClass = `absolute inset-0 min-h-0 min-w-0 ${FORCE_LTR_CLASS}`;
const overviewChartPanelEmptyClass = "flex h-full min-h-0 w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 text-[13px] text-muted-foreground";
const overviewChartPanelErrorClass = "flex h-full min-h-0 w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/20 px-6 text-center";
const OVERVIEW_METRIC_NOT_AVAILABLE = "N/A";
const OVERVIEW_BANDWIDTH_ERROR = {
	title: "Couldn't load bandwidth",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
const OVERVIEW_REQUESTS_ERROR = {
	title: "Couldn't load requests",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
const OVERVIEW_EXECUTIONS_ERROR = {
	title: "Couldn't load executions",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
const OVERVIEW_GB_HOURS_ERROR = {
	title: "Couldn't load compute",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
const OVERVIEW_STORAGE_ERROR = {
	title: "Couldn't load storage",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
export { overviewTopBreakdownListClass as C, overviewChartTabPanelsContainerClass as S, overviewChartPanelEmptyClass as _, OVERVIEW_GB_HOURS_ERROR as a, overviewChartPanelHeaderClass as b, OVERVIEW_STORAGE_ERROR as c, overviewBreakdownListClassForRowCount as d, overviewChartColumnClass as f, overviewChartPanelChartFillClass as g, overviewChartPanelChartAreaClass as h, OVERVIEW_EXECUTIONS_ERROR as i, OVERVIEW_TOP_BREAKDOWN_ITEM_COUNT as l, overviewChartPanelBodyClass as m, OVERVIEW_CHART_HEIGHT as n, OVERVIEW_METRIC_NOT_AVAILABLE as o, overviewChartContentRowClassName as p, OVERVIEW_COMPUTE_BREAKDOWN_ITEM_COUNT as r, OVERVIEW_REQUESTS_ERROR as s, OVERVIEW_BANDWIDTH_ERROR as t, overviewBreakdownColumnClass as u, overviewChartPanelErrorClass as v, overviewTopBreakdownRowClass as w, overviewChartTabPanelVisibilityClass as x, overviewChartPanelHeaderActionsClass as y };
