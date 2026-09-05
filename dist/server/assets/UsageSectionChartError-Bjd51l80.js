import { n as useT } from "./translate-DZcqveGn.js";
import { An as useOptionalUsageFilters } from "./hooks-BONwG3Mt.js";
import { yt as DEFAULT_USAGE_LOG_RETENTION_DAYS } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { r as UsageChartErrorMessage } from "./OverviewChartPanelError-D9UA3Ssz.js";
import { i as shouldSuppressUsageChartRetry, r as resolveUsageChartErrorCopy, t as isUsageAddonNotFoundError } from "./usage-history-errors-9ZmxvNiN.js";
import { s as UsagePremiumGeoDBCurtain } from "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { AlertCircle } from "lucide-react";
function UsageSectionChartError({ error, errorTitle, errorMessage, onRetry }) {
	const t = useT();
	const usageFilters = useOptionalUsageFilters();
	const resolvedErrorCopy = useMemo(() => resolveUsageChartErrorCopy(error, usageFilters?.usageLogRetentionDays ?? 30, {
		title: errorTitle,
		message: errorMessage
	}), [
		error,
		usageFilters?.usageLogRetentionDays,
		errorTitle,
		errorMessage
	]);
	const showRetry = !!onRetry && !shouldSuppressUsageChartRetry(resolvedErrorCopy);
	if (isUsageAddonNotFoundError(error) || resolvedErrorCopy.isAddonNotFound) return /* @__PURE__ */ jsx(UsagePremiumGeoDBCurtain, {
		className: "absolute inset-0 rounded-lg",
		onEnabled: onRetry,
		children: /* @__PURE__ */ jsx("div", { className: "h-full min-h-[200px] rounded-lg border border-dashed border-border bg-muted/20" })
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/20 px-6 text-center",
		children: [
			/* @__PURE__ */ jsx(AlertCircle, { className: "h-8 w-8 shrink-0 text-muted-foreground" }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-sm",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: t(resolvedErrorCopy.title)
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
					children: /* @__PURE__ */ jsx(UsageChartErrorMessage, { copy: resolvedErrorCopy })
				})]
			}),
			showRetry ? /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				onClick: onRetry,
				children: t("Try again")
			}) : null
		]
	});
}
export { UsageSectionChartError as t };
