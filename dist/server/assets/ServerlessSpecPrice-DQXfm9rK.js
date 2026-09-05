import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { o as formatCompactCount } from "./format-metric-6jsfxd5f.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { r as getPlanDatabaseOperationLimits } from "./dedicated-database-plan-D5hnUTFL.js";
import { jsx, jsxs } from "react/jsx-runtime";
function formatOpsCount(value, t) {
	if (value === "unlimited") return t("Unlimited");
	return formatCompactCount(value);
}
function formatIncludedOpsLabel(reads, writes, t) {
	if (reads == null && writes == null) return null;
	if (reads === "unlimited" && writes === "unlimited") return t("Unlimited reads and writes included");
	if (reads != null && writes != null) return `${formatOpsCount(reads, t)} ${t("reads")}, ${formatOpsCount(writes, t)} ${t("writes included")}`;
	if (reads != null) return `${formatOpsCount(reads, t)} ${t("reads included")}`;
	return `${formatOpsCount(writes, t)} ${t("writes included")}`;
}
function ServerlessSpecPrice({ plan, showTooltip = true, className }) {
	const t = useT();
	const { reads, writes } = getPlanDatabaseOperationLimits(plan);
	const label = formatIncludedOpsLabel(reads, writes, t);
	const content = /* @__PURE__ */ jsx("span", {
		className: cn("inline-block whitespace-nowrap text-end text-[13px] font-semibold tabular-nums tracking-tight text-foreground", className),
		children: label ?? t("No compute fee")
	});
	if (!showTooltip) return content;
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("span", {
			className: "inline-block cursor-help underline decoration-dotted decoration-muted-foreground/50 underline-offset-2",
			children: content
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "max-w-[240px]",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[12px]",
			children: t("Included in your plan every month.")
		})
	})] }) });
}
export { ServerlessSpecPrice as t };
