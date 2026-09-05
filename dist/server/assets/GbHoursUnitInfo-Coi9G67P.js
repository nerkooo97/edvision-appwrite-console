import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Q as isUsageProjectResourceType } from "./affiliates-BOg1SHC6.js";
import { t as GB_HOURS_UNIT_TOOLTIP } from "./format-metric-6jsfxd5f.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Info } from "lucide-react";
const COMPUTE_EXECUTIONS_DESCRIPTION = "Function and site executions during the selected period. Each HTTP trigger, schedule run, event invocation, or site request counts as one execution.";
const COMPUTE_GB_HOURS_DESCRIPTION = "Compute time during the selected period, measured in gigabyte-hours (GBH). Memory allocated to functions and sites multiplied by execution, request handling, and build duration.";
const COMPUTE_FUNCTION_EXECUTIONS_DESCRIPTION = "Function executions during the selected period. Each HTTP trigger, schedule run, or event invocation counts as one execution.";
const COMPUTE_SITE_EXECUTIONS_DESCRIPTION = "Site executions during the selected period. Each HTTP request served by your site counts toward execution usage.";
const COMPUTE_FUNCTION_GB_HOURS_DESCRIPTION = "Function compute time during the selected period, measured in gigabyte-hours (GBH). Memory allocated to functions multiplied by execution and build duration.";
const COMPUTE_SITE_GB_HOURS_DESCRIPTION = "Site compute time during the selected period, measured in gigabyte-hours (GBH). Memory allocated to sites multiplied by request handling and build duration.";
const COMPUTE_FUNCTIONS_DOCS_HREF = "/docs/products/functions";
const COMPUTE_SITES_DOCS_HREF = "/docs/products/sites";
const COMPUTE_EXECUTIONS_BREAKDOWN_TITLE = "Resource IDs";
const COMPUTE_EXECUTIONS_CHART_TITLE = "Executions over time";
function topConsumersToBreakdownItems(topConsumers) {
	return topConsumers.map((item) => {
		if (isUsageProjectResourceType(item.resourceType)) return {
			id: item.id,
			label: "project",
			count: item.count,
			resourceType: "project"
		};
		return {
			id: item.id,
			label: item.path,
			count: item.count,
			resourceId: item.path,
			resourceType: item.resourceType
		};
	});
}
function GbHoursUnitInfo({ className, iconClassName, nested = false }) {
	const t = useT();
	const triggerClassName = cn("inline-flex shrink-0 text-muted-foreground transition-colors hover:text-foreground", className);
	return /* @__PURE__ */ jsxs(Tooltip, {
		delayDuration: 0,
		children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: nested ? /* @__PURE__ */ jsx("span", {
				className: triggerClassName,
				onClick: (event) => event.stopPropagation(),
				onPointerDown: (event) => event.stopPropagation(),
				"aria-label": t("About GBH"),
				role: "img",
				children: /* @__PURE__ */ jsx(Info, { className: cn("h-3 w-3", iconClassName) })
			}) : /* @__PURE__ */ jsx("button", {
				type: "button",
				className: triggerClassName,
				onClick: (event) => event.stopPropagation(),
				onPointerDown: (event) => event.stopPropagation(),
				"aria-label": t("About GBH"),
				children: /* @__PURE__ */ jsx(Info, { className: cn("h-3 w-3", iconClassName) })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-xs text-[12px] leading-relaxed",
			children: /* @__PURE__ */ jsx("p", { children: t(GB_HOURS_UNIT_TOOLTIP) })
		})]
	});
}
export { COMPUTE_FUNCTIONS_DOCS_HREF as a, COMPUTE_GB_HOURS_DESCRIPTION as c, COMPUTE_SITE_GB_HOURS_DESCRIPTION as d, topConsumersToBreakdownItems as f, COMPUTE_EXECUTIONS_DESCRIPTION as i, COMPUTE_SITES_DOCS_HREF as l, COMPUTE_EXECUTIONS_BREAKDOWN_TITLE as n, COMPUTE_FUNCTION_EXECUTIONS_DESCRIPTION as o, COMPUTE_EXECUTIONS_CHART_TITLE as r, COMPUTE_FUNCTION_GB_HOURS_DESCRIPTION as s, GbHoursUnitInfo as t, COMPUTE_SITE_EXECUTIONS_DESCRIPTION as u };
