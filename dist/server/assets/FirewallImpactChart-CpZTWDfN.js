import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { r as createCompactCountAxisTickFormatter } from "./format-metric-6jsfxd5f.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { j as Tooltip, k as ResponsiveContainer } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { a as USAGE_CHART_RESPONSIVE_CONTAINER_PROPS, n as UsageChartXAxis, r as UsageChartYAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { g as overviewChartPanelChartFillClass, h as overviewChartPanelChartAreaClass, m as overviewChartPanelBodyClass, n as OVERVIEW_CHART_HEIGHT } from "./chart-panel-CCGEGd61.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useId, useMemo } from "react";
import { WafRuleAction } from "@appwrite.io/console";
const FIREWALL_CREATABLE_ACTIONS = [
	WafRuleAction.Deny,
	WafRuleAction.Bypass,
	WafRuleAction.Challenge,
	WafRuleAction.RateLimit,
	WafRuleAction.Redirect
];
const CHALLENGE_DIFFICULTY_MIN = 1;
const CHALLENGE_DIFFICULTY_MAX = 5;
const CHALLENGE_DIFFICULTY_DEFAULT = 3;
const CHALLENGE_TTL_MIN = 900;
const CHALLENGE_TTL_MAX = 86400;
const CHALLENGE_TTL_DEFAULT = 1800;
const FIREWALL_RATE_LIMIT_KEYS = [{
	value: "ip",
	label: "IP address"
}, {
	value: "userId",
	label: "User ID"
}];
const FIREWALL_RATE_LIMIT_KEY_DEFAULT = "ip";
const FIREWALL_RATE_LIMIT_STRATEGIES = [
	{
		value: "fixedWindow",
		label: "Fixed window"
	},
	{
		value: "slidingWindow",
		label: "Sliding window"
	},
	{
		value: "tokenBucket",
		label: "Token bucket"
	}
];
const FIREWALL_RATE_LIMIT_STRATEGY_DEFAULT = "fixedWindow";
const MAX_BUCKET_SIZE_MIN = 1;
const MAX_BUCKET_SIZE_MAX = 1e6;
function getFirewallActionLabel(action) {
	switch (action) {
		case WafRuleAction.Deny: return "Deny";
		case WafRuleAction.Bypass: return "Bypass";
		case WafRuleAction.RateLimit: return "Rate limit";
		case WafRuleAction.Redirect: return "Redirect";
		case WafRuleAction.Challenge: return "Challenge";
		default: return action;
	}
}
var FIREWALL_ACTION_COLORS = {
	[WafRuleAction.Deny]: {
		chart: "#ef4444",
		dot: "bg-red-500",
		badge: "bg-red-500/10 text-red-600 dark:text-red-400"
	},
	[WafRuleAction.Bypass]: {
		chart: "#3b82f6",
		dot: "bg-blue-500",
		badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
	},
	[WafRuleAction.Challenge]: {
		chart: "#8b5cf6",
		dot: "bg-violet-500",
		badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400"
	},
	[WafRuleAction.RateLimit]: {
		chart: "#f59e0b",
		dot: "bg-amber-500",
		badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
	},
	[WafRuleAction.Redirect]: {
		chart: "#64748b",
		dot: "bg-slate-500",
		badge: "bg-slate-500/10 text-slate-600 dark:text-slate-400"
	}
};
var FIREWALL_ACTION_COLORS_FALLBACK = {
	chart: "var(--muted-foreground)",
	dot: "bg-muted-foreground",
	badge: "bg-muted text-foreground/80 dark:text-muted-foreground"
};
const FIREWALL_PASSED_CHART_COLOR = "#10b981";
function getFirewallActionChartColor(action) {
	return (FIREWALL_ACTION_COLORS[action] ?? FIREWALL_ACTION_COLORS_FALLBACK).chart;
}
function getFirewallActionDotClass(action) {
	return (FIREWALL_ACTION_COLORS[action] ?? FIREWALL_ACTION_COLORS_FALLBACK).dot;
}
function getFirewallActionBadgeClass(action) {
	return (FIREWALL_ACTION_COLORS[action] ?? FIREWALL_ACTION_COLORS_FALLBACK).badge;
}
function isRateLimitRule(rule) {
	return rule.action === WafRuleAction.RateLimit;
}
function isRedirectRule(rule) {
	return rule.action === WafRuleAction.Redirect;
}
function isChallengeRule(rule) {
	return rule.action === WafRuleAction.Challenge;
}
function normalizeRateLimitKey(value) {
	return FIREWALL_RATE_LIMIT_KEYS.some((k) => k.value === value) ? value : "ip";
}
function normalizeRateLimitStrategy(value) {
	return FIREWALL_RATE_LIMIT_STRATEGIES.some((s) => s.value === value) ? value : FIREWALL_RATE_LIMIT_STRATEGY_DEFAULT;
}
function getRuleRateLimit(rule) {
	if (isRateLimitRule(rule) && typeof rule.limit === "number" && typeof rule.interval === "number") return {
		limit: rule.limit,
		interval: rule.interval,
		key: normalizeRateLimitKey(rule.key),
		strategy: normalizeRateLimitStrategy(rule.strategy),
		maxBucketSize: toFiniteNumber(rule.maxBucketSize) ?? 0
	};
	const config = readRuleConfig(rule);
	if (!config) return null;
	const limit = toFiniteNumber(config.limit);
	const interval = toFiniteNumber(config.interval);
	if (limit == null || interval == null) return null;
	return {
		limit,
		interval,
		key: normalizeRateLimitKey(config.key),
		strategy: normalizeRateLimitStrategy(config.strategy),
		maxBucketSize: toFiniteNumber(config.maxBucketSize) ?? 0
	};
}
function getRuleChallenge(rule) {
	if (!isChallengeRule(rule)) {
		const config$1 = readRuleConfig(rule);
		if (!config$1) return null;
		const difficulty$1 = toFiniteNumber(config$1.difficulty);
		const ttl$1 = toFiniteNumber(config$1.ttl);
		if (difficulty$1 == null || ttl$1 == null) return null;
		return {
			challengeType: typeof config$1.challengeType === "string" ? config$1.challengeType : "",
			difficulty: difficulty$1,
			ttl: ttl$1
		};
	}
	const config = readRuleConfig(rule);
	const difficulty = typeof rule.difficulty === "number" ? rule.difficulty : toFiniteNumber(config?.difficulty) ?? 3;
	const ttl = typeof rule.ttl === "number" ? rule.ttl : toFiniteNumber(config?.ttl) ?? 1800;
	return {
		challengeType: typeof rule.challengeType === "string" ? rule.challengeType : "",
		difficulty,
		ttl
	};
}
function getRuleRedirect(rule) {
	if (isRedirectRule(rule) && typeof rule.location === "string" && rule.location.length > 0 && typeof rule.statusCode === "number") return {
		location: rule.location,
		statusCode: rule.statusCode
	};
	const config = readRuleConfig(rule);
	if (!config) return null;
	const location = typeof config.location === "string" ? config.location.trim() : "";
	const statusCode = toFiniteNumber(config.statusCode);
	if (!location || statusCode == null) return null;
	return {
		location,
		statusCode
	};
}
function readRuleConfig(rule) {
	const config = rule.config;
	if (!config || typeof config !== "object" || Array.isArray(config)) return null;
	return config;
}
function toFiniteNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string" && value.trim() !== "") {
		const parsed = Number(value);
		if (Number.isFinite(parsed)) return parsed;
	}
	return null;
}
const FIREWALL_IMPACT_MATCHED_COLOR = "#10b981";
var IMPACT_CHART_MARGIN = {
	top: 12,
	right: 8,
	left: 0,
	bottom: 0
};
var IMPACT_CHART_Y_AXIS_WIDTH = 36;
function FirewallImpactChart({ series, dateRange, chartInterval, height = 240, className, emptyLabel }) {
	const t = useT();
	const gradientId = `firewall-impact-matched-${useId().replace(/:/g, "")}`;
	const chartPoints = useMemo(() => series.map((point) => ({
		date: point.date,
		day: point.day
	})), [series]);
	const chartAxisMax = useMemo(() => series.reduce((max, point) => Math.max(max, point.total), 0), [series]);
	const yAxisTickFormatter = useMemo(() => createCompactCountAxisTickFormatter(chartAxisMax), [chartAxisMax]);
	const hasData = Boolean(dateRange && series.length > 0);
	return /* @__PURE__ */ jsx("div", {
		className: cn(overviewChartPanelBodyClass, FORCE_LTR_CLASS, className),
		style: { height },
		children: /* @__PURE__ */ jsx("div", {
			className: overviewChartPanelChartAreaClass,
			children: /* @__PURE__ */ jsx("div", {
				className: overviewChartPanelChartFillClass,
				children: hasData ? /* @__PURE__ */ jsx(ResponsiveContainer, {
					...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
					minHeight: height,
					children: /* @__PURE__ */ jsxs(AreaChart, {
						data: [...series],
						margin: IMPACT_CHART_MARGIN,
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: gradientId,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: FIREWALL_IMPACT_MATCHED_COLOR,
									stopOpacity: .2
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: FIREWALL_IMPACT_MATCHED_COLOR,
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ jsx(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "hsl(var(--border))",
								vertical: false
							}),
							/* @__PURE__ */ jsx(UsageChartXAxis, {
								points: chartPoints,
								dateRange,
								chartInterval,
								variant: "overview"
							}),
							/* @__PURE__ */ jsx(UsageChartYAxis, {
								tickFormatter: yAxisTickFormatter,
								width: IMPACT_CHART_Y_AXIS_WIDTH,
								domain: [0, (dataMax) => Math.ceil(dataMax * 1.05) || 1]
							}),
							/* @__PURE__ */ jsx(Tooltip, {
								isAnimationActive: false,
								content: ({ active, payload }) => {
									if (!active || !payload?.length) return null;
									const point = payload[0]?.payload;
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-md border border-border bg-popover px-3 py-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "mb-1.5 text-[11px] text-muted-foreground",
											children: point.fullDate
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex justify-between gap-6 text-[11px]",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5 text-muted-foreground",
													children: [/* @__PURE__ */ jsx(ChartSeriesDot, { color: "hsl(var(--muted-foreground))" }), t("Total traffic")]
												}), /* @__PURE__ */ jsx("span", {
													className: "font-medium tabular-nums text-foreground",
													children: point.total.toLocaleString()
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex justify-between gap-6 text-[11px]",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5 text-muted-foreground",
													children: [/* @__PURE__ */ jsx(ChartSeriesDot, { color: FIREWALL_IMPACT_MATCHED_COLOR }), t("Matched by rule")]
												}), /* @__PURE__ */ jsx("span", {
													className: "font-medium tabular-nums text-foreground",
													children: point.matched.toLocaleString()
												})]
											})]
										})]
									});
								}
							}),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "total",
								name: t("Total traffic"),
								stroke: "hsl(var(--muted-foreground))",
								strokeWidth: 1.5,
								strokeDasharray: "4 4",
								fill: "transparent",
								dot: false,
								...CHART_ANIMATION_DISABLED
							}),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "matched",
								name: t("Matched by rule"),
								stroke: FIREWALL_IMPACT_MATCHED_COLOR,
								strokeWidth: 2,
								fill: `url(#${gradientId})`,
								dot: false,
								...CHART_ANIMATION_DISABLED
							})
						]
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "flex h-full items-center justify-center text-[12px] text-muted-foreground",
					children: emptyLabel ?? t("No traffic data for this period")
				})
			})
		})
	});
}
export { getRuleRedirect as S, getFirewallActionChartColor as _, CHALLENGE_TTL_DEFAULT as a, getRuleChallenge as b, FIREWALL_CREATABLE_ACTIONS as c, FIREWALL_RATE_LIMIT_KEY_DEFAULT as d, FIREWALL_RATE_LIMIT_STRATEGIES as f, getFirewallActionBadgeClass as g, MAX_BUCKET_SIZE_MIN as h, CHALLENGE_DIFFICULTY_MIN as i, FIREWALL_PASSED_CHART_COLOR as l, MAX_BUCKET_SIZE_MAX as m, CHALLENGE_DIFFICULTY_DEFAULT as n, CHALLENGE_TTL_MAX as o, FIREWALL_RATE_LIMIT_STRATEGY_DEFAULT as p, CHALLENGE_DIFFICULTY_MAX as r, CHALLENGE_TTL_MIN as s, FirewallImpactChart as t, FIREWALL_RATE_LIMIT_KEYS as u, getFirewallActionDotClass as v, getRuleRateLimit as x, getFirewallActionLabel as y };
