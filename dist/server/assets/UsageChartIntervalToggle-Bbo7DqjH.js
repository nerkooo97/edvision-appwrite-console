import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as USAGE_CHART_INTERVAL_OPTIONS, r as getUsageChartIntervalDisabledReasonDetails } from "./chart-interval-Dbrn19qD.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { jsx, jsxs } from "react/jsx-runtime";
var TOGGLE_ITEM_CLASS = "h-full w-full min-w-[2.75rem] px-2 text-[12px] font-medium text-muted-foreground hover:text-foreground data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:hover:bg-secondary data-[state=on]:hover:text-secondary-foreground";
var TOGGLE_CELL_CLASS = "flex min-w-0 flex-1 h-full";
function formatUsageChartIntervalDisabledReason(details, t) {
	if (!details) return void 0;
	if (details.kind === "hours") return `${t("Use a date range of")} ${details.maxHours} ${t("hours or less for this interval.")}`;
	return `${t("Use a date range of")} ${details.maxDays} ${t("days or less for this interval.")}`;
}
function UsageChartIntervalToggle({ value, onValueChange, dateRange, allowedIntervals, className }) {
	const t = useT();
	const options = allowedIntervals?.length ? USAGE_CHART_INTERVAL_OPTIONS.filter((option) => allowedIntervals.includes(option.value)) : USAGE_CHART_INTERVAL_OPTIONS;
	const optionCount = options.length;
	if (optionCount <= 1) return null;
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 300,
		children: /* @__PURE__ */ jsx(ToggleGroup, {
			type: "single",
			variant: "outline",
			size: "default",
			value,
			onValueChange: (next) => {
				if (!next) return;
				if (options.some((option) => option.value === next)) onValueChange(next);
			},
			className: cn("h-9 w-fit shrink-0 gap-0", className),
			"aria-label": t("Chart interval"),
			children: options.map((option, index) => {
				const isFirst = index === 0;
				const isLast = index === optionCount - 1;
				const disabledReason = formatUsageChartIntervalDisabledReason(getUsageChartIntervalDisabledReasonDetails(option.value, dateRange), t);
				const item = /* @__PURE__ */ jsx(ToggleGroupItem, {
					value: option.value,
					disabled: !!disabledReason,
					className: cn(TOGGLE_ITEM_CLASS, "!rounded-none shadow-none", isFirst && "!rounded-s-md !border-s", isLast && "!rounded-e-md", !isFirst && "!border-s-0"),
					children: t(option.label)
				});
				const cell = /* @__PURE__ */ jsx("span", {
					className: cn(TOGGLE_CELL_CLASS, disabledReason && "cursor-not-allowed"),
					children: item
				});
				if (!disabledReason) return /* @__PURE__ */ jsx("span", {
					className: TOGGLE_CELL_CLASS,
					children: item
				}, option.value);
				return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: cell
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "bottom",
					className: "max-w-[220px]",
					children: disabledReason
				})] }, option.value);
			})
		})
	});
}
export { UsageChartIntervalToggle as t };
