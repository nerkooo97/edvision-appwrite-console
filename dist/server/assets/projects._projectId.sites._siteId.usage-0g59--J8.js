import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import { i as getUsageChartIntervalsForPlan } from "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import "./toggle-group-qQyCSBun.js";
import "./tooltip-DUssQZhw.js";
import { t as UsageChartIntervalToggle } from "./UsageChartIntervalToggle-Bbo7DqjH.js";
import "./CartesianChart-IK-OMdOm.js";
import "./UsageChartBrushReferenceArea-PlRYgCRx.js";
import "./ChartXAxis-Sg7PTtJF.js";
import "./chart-panel-CCGEGd61.js";
import "./OverviewChartPanelError-D9UA3Ssz.js";
import "./upgrade-curtain-D427ml_E.js";
import "./addons-DpAB_yDA.js";
import "./stripe-B07yV6XF.js";
import "./utils-DMkzhjmw.js";
import "./EnablePremiumGeoDBDialog-B57n4Kqr.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./HostnameFaviconIcon-BEkCxwPN.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import "./DatabaseTypeIcon-CqLDDPFP.js";
import "./database-mascot-icons-mAQ4uqbH.js";
import "./chart-animation-CE90Rh4_.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./usage-chart-filters-pmJA5qvl.js";
import "./UsageResourceBreakdownCard-D5ZVWuSc.js";
import { t as useUsageChartFilters } from "./use-usage-chart-filters-LYrUaOea.js";
import "./RefreshContext-CCamFujD.js";
import "./GbHoursUnitInfo-Coi9G67P.js";
import { t as ComputeUsageSection } from "./ComputeUsageSection-B1ubq5cs.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useMemo } from "react";
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { plan } = useOrganizationPlan(project?.teamId);
	const allowedIntervals = useMemo(() => getUsageChartIntervalsForPlan(plan), [plan]);
	const { dateRange, chartInterval, dateRangePresetId, setDateRange, setChartInterval } = useUsageChartFilters(plan);
	if (!projectId || !siteId) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-lg font-semibold",
				children: t("Usage")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t("View usage statistics for this site")
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ jsx(DateRangePicker, {
					dateRange,
					onDateRangeChange: setDateRange,
					presetId: dateRangePresetId
				}), /* @__PURE__ */ jsx(UsageChartIntervalToggle, {
					value: chartInterval,
					onValueChange: setChartInterval,
					dateRange,
					allowedIntervals
				})]
			})]
		}), /* @__PURE__ */ jsx(ComputeUsageSection, {
			projectId,
			siteId,
			scope: "sites",
			dateRange,
			chartInterval,
			onDateRangeChange: setDateRange
		})]
	});
}
function SiteUsagePage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { SiteUsagePage as component };
