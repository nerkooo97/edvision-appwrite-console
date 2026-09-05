import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Kr as USAGE_RESOURCES_BREAKDOWN_TITLE } from "./hooks-BONwG3Mt.js";
import { n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { C as overviewTopBreakdownListClass } from "./chart-panel-CCGEGd61.js";
import { a as UsageMetricCardFooter, c as UsageBreakdownListSkeleton, i as UsageBreakdownListError, l as UsageBreakdownRowsList, o as UsageMetricCardShell, r as UsageBreakdownListEmptyOverlay } from "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function UsageResourceBreakdownCard({ title = USAGE_RESOURCES_BREAKDOWN_TITLE, description, items, isLoading, isError, error, countryLookups = null, databaseLookup, computeLookup, storageLookup, tableLookup, errorTitle, errorMessage, formatValue, onRetry, onShowMore, showMoreItemCount, titleAddon, embedded = false, className }) {
	const t = useT();
	const showLeadingIcon = !!(databaseLookup || computeLookup || storageLookup || tableLookup) && items.length > 0;
	const showEmptyOverlay = !isLoading && !isError && items.length === 0;
	const showShowMore = !isError && (showMoreItemCount ?? items.length) >= 6 && !!onShowMore;
	const breakdownContent = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 flex-col gap-3 border-b border-border px-4", embedded ? "py-3" : "py-4"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("h3", {
					className: cn("min-w-0 font-medium text-foreground", embedded ? "text-[13px]" : "text-[14px]"),
					children: t(title)
				}), titleAddon]
			}), showShowMore && onShowMore ? /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "shrink-0 cursor-pointer text-[12px] text-muted-foreground transition-colors hover:text-foreground",
				onClick: onShowMore,
				children: t("Show more")
			}) : null]
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 flex-col p-4",
		children: isError ? /* @__PURE__ */ jsx(UsageBreakdownListError, {
			title: errorTitle,
			message: errorMessage,
			error,
			onRetry
		}) : isLoading && items.length === 0 ? /* @__PURE__ */ jsx(UsageBreakdownListSkeleton, { showLeadingIcon }) : /* @__PURE__ */ jsxs("div", {
			className: cn(overviewTopBreakdownListClass, "flex-1"),
			children: [showEmptyOverlay ? /* @__PURE__ */ jsx(UsageBreakdownListEmptyOverlay, {}) : null, /* @__PURE__ */ jsx(UsageBreakdownRowsList, {
				items,
				dimension: "resource",
				labelVariant: "default",
				countryLookups,
				databaseLookup,
				computeLookup,
				storageLookup,
				tableLookup,
				variant: "card",
				formatValue
			})]
		})
	})] });
	if (embedded) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full min-h-0 flex-col", className),
		children: breakdownContent
	});
	return /* @__PURE__ */ jsxs(UsageMetricCardShell, {
		className: cn("h-full", className),
		children: [breakdownContent, /* @__PURE__ */ jsx(UsageMetricCardFooter, { description })]
	});
}
export { UsageResourceBreakdownCard as t };
