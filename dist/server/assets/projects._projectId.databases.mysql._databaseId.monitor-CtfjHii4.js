import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { B as DEDICATED_DATABASE_CPU_DESCRIPTION, Bm as formatConnectionStateLabel, F as useDedicatedDatabaseMonitorMetrics, H as DEDICATED_DATABASE_MEMORY_DESCRIPTION, J as getDedicatedDatabaseRateHeadline, Jm as formatMysqlUptime, Pp as useMysqlDatabase, U as DEDICATED_DATABASE_QPS_DESCRIPTION, V as DEDICATED_DATABASE_IOPS_DESCRIPTION, W as DEDICATED_DATABASE_STORAGE_DESCRIPTION, X as usageChartPointsToMonitorSeries, Y as mergeDualUsageChartSeries, ef as useMysqlConnectionApps, nf as useMysqlMetricsSampling, q as getDedicatedDatabaseGaugeHeadline, rf as useMysqlTableActivity, tf as useMysqlConnectionStates, z as DEDICATED_DATABASE_CONNECTIONS_DESCRIPTION } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { qt as MYSQL_DATABASE_SPECS_SOURCE, yt as useDatabaseSpecifications } from "./databases-Dh0pwZ6h.js";
import { p as mapDedicatedDatabaseSpecifications } from "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import { c as resolveUsageChartIntervalForRange, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import { a as formatCompactBytes, o as formatCompactCount } from "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import { a as SelectLabel, c as SelectValue, i as SelectItem, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as UsageChartIntervalToggle } from "./UsageChartIntervalToggle-Bbo7DqjH.js";
import { j as Tooltip$1, k as ResponsiveContainer, n as YAxis } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { t as ReferenceLine } from "./ReferenceLine-8Hp-JrzD.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { t as SeriesChartXAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { t as shouldShowUsageChartSkeleton } from "./usage-chart-loading-qgdN2UV0.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import "./mysql-tab-route-loader-D18CXQ4h.js";
import { t as Route$1 } from "./projects._projectId.databases.mysql._databaseId.monitor-DLrkGBKV.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { t as DatabaseMonitorNodeSelect } from "./DatabaseMonitorNodeSelect-B4gBFf96.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { endOfDay, format, formatDistanceToNow, startOfDay, subDays } from "date-fns";
import { Activity, AlertCircle, AppWindow, Cpu, HardDrive, HeartPulse, Info, MemoryStick, ScanLine, Table2, Timer, Users, Zap } from "lucide-react";
const MYSQL_USAGE_PLACEHOLDER_NOTE = "Sample data only. Instance metrics will be provided by the usage service.";
var CHART_COLOR = "var(--chart-brand)";
var SECONDARY_CHART_COLOR = "var(--chart-2)";
var CHART_HEIGHT_PX = 180;
var METRIC_HEADER_MIN_CLASS = "mt-2 min-h-[52px] flex flex-wrap items-baseline gap-x-2 gap-y-1";
var AREA_MARGIN = {
	top: 8,
	right: 8,
	left: 4,
	bottom: 8
};
var Y_TICK_CHAR_PX = 6.25;
var Y_TICK_PAD_PX = 10;
var Y_AXIS_WIDTH_MIN = 30;
var Y_AXIS_WIDTH_MAX = 52;
function formatYAxisTickCompact(value, formatY) {
	const labeled = formatY(value);
	if (labeled.includes("%")) return labeled;
	if (value >= 1e6) return `${(value / 1e6).toFixed(0)}M`;
	if (value >= 1e3) return `${(value / 1e3).toFixed(0)}K`;
	if (labeled.includes(".") || !Number.isInteger(value)) return labeled;
	return Math.round(value).toString();
}
function collectYAxisTickSamples(values, formatY) {
	const out = /* @__PURE__ */ new Set();
	if (values.length === 0) {
		out.add(0);
		return [...out];
	}
	const sorted = [...values].sort((a, b) => a - b);
	const lo = sorted[0];
	const hi = sorted[sorted.length - 1];
	const span = hi - lo || 1;
	out.add(lo);
	out.add(hi);
	out.add(lo + span / 2);
	for (let i = 0; i <= 4; i++) out.add(lo + span * i / 4);
	if (lo <= 0 && hi >= 0) out.add(0);
	const midSample = sorted[Math.floor(sorted.length / 2)];
	if (formatY(midSample).includes("%")) {
		for (const t of [
			0,
			20,
			40,
			60,
			80,
			100
		]) if (t >= lo - 1 && t <= hi + 1) out.add(t);
	}
	return [...out];
}
function measureYAxisWidth(samples, formatTick) {
	let maxChars = 0;
	for (const v of samples) maxChars = Math.max(maxChars, formatTick(v).length);
	const w = Math.ceil(maxChars * Y_TICK_CHAR_PX + Y_TICK_PAD_PX);
	return Math.min(Y_AXIS_WIDTH_MAX, Math.max(Y_AXIS_WIDTH_MIN, w));
}
function ChartBodySkeleton() {
	return /* @__PURE__ */ jsx("div", {
		className: "relative w-full shrink-0",
		style: { height: CHART_HEIGHT_PX },
		children: /* @__PURE__ */ jsx(Skeleton, { className: "absolute inset-0 rounded-md" })
	});
}
function MysqlMetricChart({ id, title, description, unit, secondaryUnit, primaryLabel, secondaryLabel, data, formatY = (v) => v.toFixed(1), formatSecondaryY, emptyMessage = "Collecting samples. Keep this view open to build a time series from live SQL metrics.", usageValue, usageSecondaryValue, usageQuota, usageQuotaLabel = "available", usageUnitLabel, usageSecondaryUnitLabel, isPlaceholder = false, placeholderNote = MYSQL_USAGE_PLACEHOLDER_NOTE, isLoading = false, className }) {
	const t = useT();
	const gradientId = `mysql-metric-gradient-${id}`;
	const secondaryGradientId = `mysql-metric-gradient-secondary-${id}`;
	const seriesPrimaryLabel = primaryLabel ?? title;
	const hasSecondary = data.some((point) => point.secondaryValue != null);
	const secondaryFormatter = formatSecondaryY ?? formatY;
	const hasUsageQuota = usageQuota != null && usageQuota > 0;
	const isTrivialPercentQuota = hasUsageQuota && usageQuota === 100 && (formatY(0).includes("%") || usageValue != null && formatY(usageValue).includes("%"));
	const reserveUsageHeader = hasUsageQuota || !!usageUnitLabel || usageSecondaryValue != null || !!usageSecondaryUnitLabel;
	const showUsageQuotaSummary = hasUsageQuota && !isTrivialPercentQuota;
	const chartData = useMemo(() => data.map((point) => ({
		date: formatLocalizedDate(new Date(point.timestamp), "MMM d"),
		time: format(new Date(point.timestamp), "HH:mm"),
		fullDate: formatLocalizedDate(new Date(point.timestamp), "MMM d, yyyy HH:mm"),
		value: point.value,
		secondaryValue: point.secondaryValue
	})), [data]);
	const xAxisLabels = useMemo(() => chartData.map((point) => point.time), [chartData]);
	const yAxisTickFormatter = useCallback((v) => formatYAxisTickCompact(v, formatY), [formatY]);
	const yAxisWidth = useMemo(() => {
		return measureYAxisWidth(collectYAxisTickSamples(data.flatMap((d) => [
			d.value,
			...d.secondaryValue != null ? [d.secondaryValue] : [],
			...usageQuota != null && usageQuota > 0 ? [usageQuota] : []
		]), formatY), (v) => formatYAxisTickCompact(v, formatY));
	}, [
		data,
		formatY,
		usageQuota
	]);
	const yAxisDomain = useMemo(() => {
		if (usageQuota == null || usageQuota <= 0) return;
		return [0, (max) => Math.max(max, usageQuota)];
	}, [usageQuota]);
	const showUsageValue = usageValue != null && Number.isFinite(usageValue);
	const showDualUsageHeadline = showUsageValue && usageSecondaryValue != null && Number.isFinite(usageSecondaryValue);
	const usagePercent = showUsageValue && showUsageQuotaSummary && usageQuota != null ? usageValue / usageQuota * 100 : null;
	const showEmpty = !isLoading && data.length < 2;
	return /* @__PURE__ */ jsxs("div", {
		id: `mysql-metric-chart-${id}`,
		className: cn("scroll-mt-[calc(4rem+env(safe-area-inset-top))] w-full overflow-hidden rounded-lg border border-border bg-card", isPlaceholder && "border-dashed", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between",
				children: /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-[14px] font-medium text-foreground",
									children: title
								}),
								isPlaceholder ? /* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: t("Sample data")
								}) : null,
								/* @__PURE__ */ jsx(TooltipProvider, {
									delayDuration: 0,
									children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx("button", {
											type: "button",
											className: "text-muted-foreground transition-colors hover:text-foreground",
											children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
										})
									}), /* @__PURE__ */ jsx(TooltipContent, {
										side: "top",
										className: "max-w-xs text-[12px] leading-relaxed",
										children: /* @__PURE__ */ jsx("p", { children: description })
									})] })
								})
							]
						}),
						reserveUsageHeader ? /* @__PURE__ */ jsx("div", {
							className: METRIC_HEADER_MIN_CLASS,
							children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-28 shrink-0 rounded-sm" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[4.5rem] shrink-0 rounded-sm" }),
								usageSecondaryUnitLabel || usageSecondaryValue != null ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-28 shrink-0 rounded-sm" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[4.5rem] shrink-0 rounded-sm" })] }) : null
							] }) : showDualUsageHeadline ? /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-baseline gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[24px] font-semibold tabular-nums text-foreground",
										children: formatY(usageValue)
									}), usageUnitLabel ? /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: t(usageUnitLabel)
									}) : null]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									"aria-hidden": true,
									children: "·"
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-baseline gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[24px] font-semibold tabular-nums text-foreground",
										children: secondaryFormatter(usageSecondaryValue)
									}), usageSecondaryUnitLabel ? /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: t(usageSecondaryUnitLabel)
									}) : null]
								})
							] }) : showUsageValue ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[24px] font-semibold tabular-nums text-foreground",
								children: formatY(usageValue)
							}), showUsageQuotaSummary ? /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] text-muted-foreground",
								children: [
									"/ ",
									formatY(usageQuota),
									" ",
									t(usageQuotaLabel),
									usagePercent != null ? ` · ${usagePercent.toFixed(1)}%` : null
								]
							}) : usageUnitLabel ? /* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: t(usageUnitLabel)
							}) : null] }) : null
						}) : null,
						secondaryLabel ? /* @__PURE__ */ jsx("div", {
							className: "mt-2 flex min-h-[20px] flex-wrap items-center gap-3 text-[11px] text-muted-foreground",
							children: hasSecondary || isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "h-2 w-2 rounded-full",
									style: { backgroundColor: CHART_COLOR }
								}), t(seriesPrimaryLabel)]
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "h-2 w-2 rounded-full",
									style: { backgroundColor: SECONDARY_CHART_COLOR }
								}), t(secondaryLabel)]
							})] }) : null
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "p-4",
				children: isLoading ? /* @__PURE__ */ jsx(ChartBodySkeleton, {}) : showEmpty ? /* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-center rounded-md border border-dashed border-border bg-muted/20 px-6 text-center",
					style: { height: CHART_HEIGHT_PX },
					children: /* @__PURE__ */ jsx("p", {
						className: "max-w-sm text-[12px] leading-relaxed text-muted-foreground",
						children: t(emptyMessage)
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "shrink-0 text-muted-foreground",
					style: { height: CHART_HEIGHT_PX },
					children: /* @__PURE__ */ jsx(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ jsxs(AreaChart, {
							data: chartData,
							margin: { ...AREA_MARGIN },
							children: [
								/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
									id: gradientId,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: CHART_COLOR,
										stopOpacity: .2
									}), /* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: CHART_COLOR,
										stopOpacity: 0
									})]
								}), hasSecondary ? /* @__PURE__ */ jsxs("linearGradient", {
									id: secondaryGradientId,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: SECONDARY_CHART_COLOR,
										stopOpacity: .15
									}), /* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: SECONDARY_CHART_COLOR,
										stopOpacity: 0
									})]
								}) : null] }),
								/* @__PURE__ */ jsx(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "hsl(var(--border))",
									vertical: false
								}),
								/* @__PURE__ */ jsx(SeriesChartXAxis, {
									pointCount: chartData.length,
									labels: xAxisLabels,
									tick: {
										fill: "currentColor",
										fontSize: 10,
										className: "tabular-nums"
									},
									dy: 8
								}),
								/* @__PURE__ */ jsx(YAxis, {
									axisLine: false,
									tickLine: false,
									tick: {
										fill: "currentColor",
										fontSize: 10,
										className: "tabular-nums"
									},
									tickFormatter: yAxisTickFormatter,
									dx: 0,
									width: yAxisWidth,
									domain: yAxisDomain
								}),
								showUsageQuotaSummary ? /* @__PURE__ */ jsx(ReferenceLine, {
									y: usageQuota,
									stroke: "hsl(var(--muted-foreground) / 0.45)",
									strokeDasharray: "4 4",
									ifOverflow: "extendDomain"
								}) : null,
								/* @__PURE__ */ jsx(Tooltip$1, { content: ({ active, payload }) => {
									if (!active || !payload?.length) return null;
									const row = payload[0].payload;
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-md border border-border bg-popover px-3 py-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "mb-1 text-[11px] text-muted-foreground",
											children: row.fullDate
										}), hasSecondary && secondaryLabel ? /* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
												children: [
													/* @__PURE__ */ jsx(ChartSeriesDot, { color: CHART_COLOR }),
													t(seriesPrimaryLabel),
													":",
													" ",
													unit ? `${formatY(row.value)} ${unit}` : formatY(row.value)
												]
											}), row.secondaryValue != null ? /* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
												children: [
													/* @__PURE__ */ jsx(ChartSeriesDot, { color: SECONDARY_CHART_COLOR }),
													t(secondaryLabel),
													":",
													" ",
													secondaryUnit ? `${secondaryFormatter(row.secondaryValue)} ${secondaryUnit}` : secondaryFormatter(row.secondaryValue)
												]
											}) : null]
										}) : /* @__PURE__ */ jsxs("p", {
											className: "text-[13px] font-medium text-foreground",
											children: [unit ? `${formatY(row.value)} ${unit}` : formatY(row.value), showUsageQuotaSummary && usageQuota != null && !formatY(row.value).includes("%") ? /* @__PURE__ */ jsxs("span", {
												className: "font-normal text-muted-foreground",
												children: [
													" ",
													"·",
													" ",
													(row.value / usageQuota * 100).toFixed(1),
													"%"
												]
											}) : null]
										})]
									});
								} }),
								/* @__PURE__ */ jsx(Area, {
									type: "monotone",
									dataKey: "value",
									stroke: CHART_COLOR,
									strokeWidth: 2,
									fill: `url(#${gradientId})`,
									name: seriesPrimaryLabel,
									isAnimationActive: false
								}),
								hasSecondary ? /* @__PURE__ */ jsx(Area, {
									type: "monotone",
									dataKey: "secondaryValue",
									stroke: SECONDARY_CHART_COLOR,
									strokeWidth: 2,
									fill: `url(#${secondaryGradientId})`,
									name: secondaryLabel ?? "Secondary",
									isAnimationActive: false
								}) : null
							]
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border bg-muted/30 px-4 py-3",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: isPlaceholder ? placeholderNote : description
				})
			})
		]
	});
}
function MysqlMetricRankedList({ id, title, description, items, formatValue = (value) => formatCompactBytes(value), emptyMessage = "No data available yet.", className }) {
	const t = useT();
	const rankedItems = useMemo(() => {
		const sorted = [...items].sort((a, b) => b.value - a.value);
		const maxValue = sorted[0]?.value ?? 0;
		return sorted.map((item, index) => ({
			...item,
			fullLabel: item.fullLabel ?? item.label,
			rank: index + 1,
			sharePercent: maxValue > 0 ? Math.min(100, item.value / maxValue * 100) : 0
		}));
	}, [items]);
	return /* @__PURE__ */ jsxs("div", {
		id: `mysql-metric-chart-${id}`,
		className: cn("scroll-mt-[calc(4rem+env(safe-area-inset-top))] w-full overflow-hidden rounded-lg border border-border bg-card", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between",
				children: /* @__PURE__ */ jsx("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[14px] font-medium text-foreground",
							children: title
						}), /* @__PURE__ */ jsx(TooltipProvider, {
							delayDuration: 0,
							children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "text-muted-foreground transition-colors hover:text-foreground",
									children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "top",
								className: "max-w-xs text-[12px] leading-relaxed",
								children: /* @__PURE__ */ jsx("p", { children: description })
							})] })
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "p-4",
				children: rankedItems.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "flex min-h-[180px] items-center justify-center rounded-md border border-dashed border-border bg-muted/20 px-6 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "max-w-sm text-[12px] leading-relaxed text-muted-foreground",
						children: t(emptyMessage)
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "divide-y divide-border",
					children: rankedItems.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 py-3 first:pt-0 last:pb-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "w-5 shrink-0 text-[11px] font-medium tabular-nums text-muted-foreground",
										children: item.rank
									}), /* @__PURE__ */ jsxs("p", {
										className: "min-w-0 truncate text-[13px] font-medium text-foreground",
										children: [item.fullLabel, item.detail ? /* @__PURE__ */ jsxs("span", {
											className: "font-normal text-muted-foreground",
											children: [
												" ",
												"· ",
												item.detail
											]
										}) : null]
									})]
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "shrink-0 text-[13px] font-medium tabular-nums text-foreground",
								children: formatValue(item.value)
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "ps-7",
							children: /* @__PURE__ */ jsx(Progress, {
								value: item.sharePercent,
								className: "h-1.5 bg-[var(--chart-brand)]/15 [&_[data-slot=progress-indicator]]:bg-[var(--chart-brand)]"
							})
						})]
					}, `${item.fullLabel}-${item.rank}`))
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border bg-muted/30 px-4 py-3",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: description
				})
			})
		]
	});
}
function MysqlMetricKpiCard({ label, value, subValue, description, progress = null, progressTone = "normal", progressCaption, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-lg border border-border bg-card p-4", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t(label)
				}), /* @__PURE__ */ jsx(TooltipProvider, {
					delayDuration: 0,
					children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "top",
						className: "max-w-xs text-[12px] leading-relaxed",
						children: /* @__PURE__ */ jsx("p", { children: t(description) })
					})] })
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-2 flex items-baseline gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[22px] font-semibold tabular-nums text-foreground",
					children: value
				}), subValue ? /* @__PURE__ */ jsx("span", {
					className: "text-[12px] text-muted-foreground",
					children: subValue
				}) : null]
			}),
			progress != null ? /* @__PURE__ */ jsxs("div", {
				className: "mt-3 space-y-1",
				children: [/* @__PURE__ */ jsx(Progress, {
					value: Math.min(100, Math.max(0, progress)),
					className: cn("h-1.5", progressTone === "critical" && "[&_[data-slot=progress-indicator]]:bg-red-500", progressTone === "warning" && "[&_[data-slot=progress-indicator]]:bg-amber-500", progressTone === "normal" && "bg-[var(--chart-brand)]/15 [&_[data-slot=progress-indicator]]:bg-[var(--chart-brand)]")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-muted-foreground",
					children: progressCaption ?? `${progress.toFixed(1)}% ${t("of limit")}`
				})]
			}) : null
		]
	});
}
function chunkTiles(tiles, size) {
	const rows = [];
	for (let index = 0; index < tiles.length; index += size) rows.push(tiles.slice(index, index + size));
	return rows;
}
function rowGridClassName(columnCount) {
	if (columnCount <= 1) return "grid-cols-1";
	if (columnCount === 2) return "grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0";
	if (columnCount === 3) return "grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0";
	return "grid-cols-1 divide-y divide-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0";
}
function MysqlMetricBentoTile({ label, value, subValue, description, progress = null, progressTone = "normal", progressCaption }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 px-4 py-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t(label)
				}), description ? /* @__PURE__ */ jsx(TooltipProvider, {
					delayDuration: 0,
					children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "shrink-0 text-muted-foreground transition-colors hover:text-foreground",
							children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "top",
						className: "max-w-xs text-[12px] leading-relaxed",
						children: /* @__PURE__ */ jsx("p", { children: t(description) })
					})] })
				}) : null]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-1.5 flex items-baseline gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[15px] font-semibold tabular-nums text-foreground",
					children: value
				}), subValue ? /* @__PURE__ */ jsx("span", {
					className: "text-[12px] text-muted-foreground",
					children: subValue
				}) : null]
			}),
			progress != null ? /* @__PURE__ */ jsxs("div", {
				className: "mt-3 space-y-1",
				children: [/* @__PURE__ */ jsx(Progress, {
					value: Math.min(100, Math.max(0, progress)),
					className: cn("h-1.5", progressTone === "critical" && "[&_[data-slot=progress-indicator]]:bg-red-500", progressTone === "warning" && "[&_[data-slot=progress-indicator]]:bg-amber-500", progressTone === "normal" && "bg-[var(--chart-brand)]/15 [&_[data-slot=progress-indicator]]:bg-[var(--chart-brand)]")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-muted-foreground",
					children: progressCaption ? t(progressCaption) : `${progress.toFixed(1)}% ${t("of limit")}`
				})]
			}) : null
		]
	});
}
function MysqlMetricsBentoCard({ title, tiles, columns = 3, className }) {
	const rows = chunkTiles(tiles, columns);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card/50", className),
		children: [title ? /* @__PURE__ */ jsx("div", {
			className: "border-b border-border px-4 py-3",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[14px] font-medium text-foreground",
				children: title
			})
		}) : null, /* @__PURE__ */ jsx("div", {
			className: "divide-y divide-border",
			children: rows.map((row, rowIndex) => /* @__PURE__ */ jsx("div", {
				className: cn("grid", rowGridClassName(row.length)),
				children: row.map((tile) => /* @__PURE__ */ jsx(MysqlMetricBentoTile, { ...tile }, tile.id))
			}, rowIndex))
		})]
	});
}
var MONITOR_SCROLL_MARGIN = "scroll-mt-[calc(4rem+env(safe-area-inset-top))]";
function getDefaultMonitorDateRange() {
	return {
		from: startOfDay(subDays(/* @__PURE__ */ new Date(), 1)),
		to: endOfDay(/* @__PURE__ */ new Date())
	};
}
function getUsageTone(percentage) {
	if (percentage == null) return "normal";
	if (percentage >= 90) return "critical";
	if (percentage >= 75) return "warning";
	return "normal";
}
function getCacheHitTone(ratio) {
	if (ratio == null) return "normal";
	if (ratio < 90) return "critical";
	if (ratio < 95) return "warning";
	return "normal";
}
function monitorNavLinkClassName(isActive) {
	return cn("flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-start text-[13px] font-medium transition-colors", isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
}
function MonitorSectionHeading({ title }) {
	return /* @__PURE__ */ jsx("h2", {
		className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
		children: title
	});
}
function MysqlMonitorNav({ navGroups, activeSectionId, onNavigate }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "space-y-2 lg:hidden",
		"aria-label": t("Monitor metrics"),
		children: /* @__PURE__ */ jsxs(Select, {
			value: activeSectionId,
			onValueChange: onNavigate,
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				size: "sm",
				className: "h-9 w-full text-[13px]",
				children: /* @__PURE__ */ jsx(SelectValue, {})
			}), /* @__PURE__ */ jsx(SelectContent, { children: navGroups.map((group) => /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, {
				className: "text-[11px] uppercase tracking-wider",
				children: t(group.label)
			}), group.items.map((item) => {
				const Icon$1 = item.icon;
				return /* @__PURE__ */ jsx(SelectItem, {
					value: item.id,
					className: "text-[13px]",
					children: /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }), t(item.label)]
					})
				}, item.id);
			})] }, group.id)) })]
		})
	}), /* @__PURE__ */ jsx("nav", {
		className: "hidden w-[220px] shrink-0 flex-col gap-5 lg:sticky lg:top-4 lg:flex lg:self-start",
		"aria-label": t("Monitor metrics"),
		children: navGroups.map((group) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: t(group.label)
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-0.5",
			children: group.items.map((item) => {
				const Icon$1 = item.icon;
				return /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => onNavigate(item.id),
					className: monitorNavLinkClassName(activeSectionId === item.id),
					children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: t(item.label)
					})]
				}, item.id);
			})
		})] }, group.id))
	})] });
}
function View({ projectId, databaseId }) {
	const t = useT();
	const [dateRange, setDateRange] = useState(getDefaultMonitorDateRange);
	const [chartInterval, setChartInterval] = useState("1h");
	const [selectedOrdinal, setSelectedOrdinal] = useState(0);
	const [activeSectionId, setActiveSectionId] = useState("connections");
	const resolvedInterval = useMemo(() => resolveUsageChartIntervalForRange(chartInterval, dateRange), [chartInterval, dateRange]);
	const { database } = useMysqlDatabase(projectId, databaseId);
	const replicaCount = database?.replicas ?? 0;
	const metricsOrdinal = replicaCount > 0 ? selectedOrdinal : void 0;
	useEffect(() => {
		if (selectedOrdinal > replicaCount) setSelectedOrdinal(0);
	}, [replicaCount, selectedOrdinal]);
	const { data: specificationsData } = useDatabaseSpecifications(projectId, MYSQL_DATABASE_SPECS_SOURCE);
	const specs = useMemo(() => mapDedicatedDatabaseSpecifications(specificationsData?.specifications), [specificationsData?.specifications]);
	const currentSpec = useMemo(() => specs.find((spec) => spec.id === database?.specification), [specs, database?.specification]);
	const { snapshot, lastRecordedAt, isLoading, isFetching, error, refresh } = useMysqlMetricsSampling(projectId, databaseId);
	const { states: connectionStates, isLoading: connectionStatesLoading, error: connectionStatesError } = useMysqlConnectionStates(projectId, databaseId);
	const { apps: connectionApps, isLoading: connectionAppsLoading, error: connectionAppsError } = useMysqlConnectionApps(projectId, databaseId);
	const { tables: tableActivity, isLoading: tableActivityLoading, error: tableActivityError } = useMysqlTableActivity(projectId, databaseId);
	const dedicatedMetrics = useDedicatedDatabaseMonitorMetrics(projectId, databaseId, dateRange, true, resolvedInterval, metricsOrdinal);
	const storageLimitGb = useMemo(() => {
		if (database?.storage && database.storage > 0) return database.storage;
		const rawSpec = specificationsData?.specifications?.find((spec) => spec.slug === database?.specification);
		if (rawSpec?.includedStorage && rawSpec.includedStorage > 0) return rawSpec.includedStorage;
		return null;
	}, [
		database?.specification,
		database?.storage,
		specificationsData?.specifications
	]);
	const storageLimitBytes = useMemo(() => {
		if (storageLimitGb == null || storageLimitGb <= 0) return null;
		return storageLimitGb * 1e9;
	}, [storageLimitGb]);
	const maxConnections = useMemo(() => {
		const fromSpec = currentSpec?.connections;
		if (fromSpec && fromSpec !== "-" && fromSpec !== "Serverless") {
			const parsed = Number.parseInt(fromSpec, 10);
			if (Number.isFinite(parsed) && parsed > 0) return parsed;
		}
		return null;
	}, [currentSpec?.connections]);
	const connectionUsagePercent = useMemo(() => {
		if (!snapshot || maxConnections == null) return null;
		return snapshot.totalConnections / maxConnections * 100;
	}, [snapshot, maxConnections]);
	const navGroups = [
		{
			id: "overview",
			label: "Overview",
			items: [{
				id: "health",
				label: "Health",
				icon: HeartPulse
			}]
		},
		{
			id: "compute",
			label: "Compute",
			items: [
				{
					id: "cpu",
					label: "CPU",
					icon: Cpu
				},
				{
					id: "memory",
					label: "Memory",
					icon: MemoryStick
				},
				{
					id: "qps",
					label: "Queries per second",
					icon: Zap
				},
				{
					id: "iops",
					label: "Disk IOPS",
					icon: HardDrive
				}
			]
		},
		{
			id: "connections",
			label: "Connections",
			items: [
				{
					id: "connections",
					label: "Connections",
					icon: Users
				},
				{
					id: "connection-states",
					label: "Connection states",
					icon: Activity
				},
				{
					id: "connection-apps",
					label: "Connections by app",
					icon: AppWindow
				},
				{
					id: "session-signals",
					label: "Session signals",
					icon: Timer
				}
			]
		},
		{
			id: "storage",
			label: "Storage",
			items: [
				{
					id: "storage",
					label: "Storage",
					icon: HardDrive
				},
				{
					id: "tables",
					label: "Largest tables",
					icon: Table2
				},
				{
					id: "table-bloat",
					label: "Dead tuples",
					icon: Table2
				},
				{
					id: "sequential-scans",
					label: "Sequential scans",
					icon: ScanLine
				}
			]
		}
	];
	const scrollToChart = useCallback((id) => {
		setActiveSectionId(id);
		document.getElementById(`mysql-metric-chart-${id}`)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, []);
	const tableSizeBars = useMemo(() => tableActivity.map((table) => ({
		label: table.tableName,
		fullLabel: `${table.schema}.${table.tableName}`,
		value: table.totalBytes,
		detail: `${formatCompactCount(table.liveTuples)} live rows`
	})), [tableActivity]);
	const connectionStateBars = useMemo(() => connectionStates.map((state) => ({
		label: formatConnectionStateLabel(state.state),
		value: state.count
	})), [connectionStates]);
	const connectionAppBars = useMemo(() => connectionApps.map((app) => ({
		label: app.applicationName,
		fullLabel: app.applicationName,
		value: app.count
	})), [connectionApps]);
	const tableBloatBars = useMemo(() => [...tableActivity].filter((table) => table.deadTuples > 0).sort((a, b) => b.deadTuples - a.deadTuples).slice(0, 12).map((table) => {
		const tupleTotal = table.liveTuples + table.deadTuples;
		const deadRatio = tupleTotal > 0 ? table.deadTuples / tupleTotal * 100 : 0;
		return {
			label: table.tableName,
			fullLabel: `${table.schema}.${table.tableName}`,
			value: table.deadTuples,
			detail: `${deadRatio.toFixed(1)}% dead · ${formatCompactCount(table.liveTuples)} live`
		};
	}), [tableActivity]);
	const sequentialScanBars = useMemo(() => [...tableActivity].filter((table) => table.seqScans > 0).sort((a, b) => b.seqScans - a.seqScans).slice(0, 12).map((table) => ({
		label: table.tableName,
		fullLabel: `${table.schema}.${table.tableName}`,
		value: table.seqScans,
		detail: `${formatCompactCount(table.idxScans)} index scans`
	})), [tableActivity]);
	const rollbackRatio = useMemo(() => {
		if (!snapshot) return null;
		const total = snapshot.xactCommit + snapshot.xactRollback;
		if (total <= 0) return null;
		return snapshot.xactRollback / total * 100;
	}, [snapshot]);
	const cpuPoints = dedicatedMetrics.cpu.isError ? [] : dedicatedMetrics.cpu.data?.chartPoints ?? [];
	const memoryPoints = dedicatedMetrics.memory.isError ? [] : dedicatedMetrics.memory.data?.chartPoints ?? [];
	const qpsPoints = dedicatedMetrics.qps.isError ? [] : dedicatedMetrics.qps.data?.chartPoints ?? [];
	const iopsReadPoints = dedicatedMetrics.iopsRead.isError ? [] : dedicatedMetrics.iopsRead.data?.chartPoints ?? [];
	const iopsWritePoints = dedicatedMetrics.iopsWrite.isError ? [] : dedicatedMetrics.iopsWrite.data?.chartPoints ?? [];
	const dedicatedStoragePoints = dedicatedMetrics.storage.isError ? [] : dedicatedMetrics.storage.data?.chartPoints ?? [];
	const dedicatedConnectionsPoints = dedicatedMetrics.connections.isError ? [] : dedicatedMetrics.connections.data?.chartPoints ?? [];
	const storageUsedBytes = dedicatedStoragePoints.length > 0 ? getDedicatedDatabaseGaugeHeadline(dedicatedStoragePoints) : null;
	const storageUsagePercent = useMemo(() => {
		if (storageUsedBytes == null || storageLimitBytes == null || storageLimitBytes <= 0) return null;
		return storageUsedBytes / storageLimitBytes * 100;
	}, [storageUsedBytes, storageLimitBytes]);
	const cpuSeries = useMemo(() => usageChartPointsToMonitorSeries(cpuPoints), [cpuPoints]);
	const memorySeries = useMemo(() => usageChartPointsToMonitorSeries(memoryPoints), [memoryPoints]);
	const qpsSeries = useMemo(() => usageChartPointsToMonitorSeries(qpsPoints), [qpsPoints]);
	const iopsSeries = useMemo(() => mergeDualUsageChartSeries(iopsReadPoints, iopsWritePoints), [iopsReadPoints, iopsWritePoints]);
	const dedicatedStorageSeries = useMemo(() => usageChartPointsToMonitorSeries(dedicatedStoragePoints), [dedicatedStoragePoints]);
	const dedicatedConnectionsSeries = useMemo(() => usageChartPointsToMonitorSeries(dedicatedConnectionsPoints), [dedicatedConnectionsPoints]);
	const cpuPercent = getDedicatedDatabaseGaugeHeadline(cpuPoints);
	const memoryPercent = getDedicatedDatabaseGaugeHeadline(memoryPoints);
	const qpsLatest = getDedicatedDatabaseRateHeadline(qpsPoints);
	const iopsReadLatest = getDedicatedDatabaseRateHeadline(iopsReadPoints);
	const iopsWriteLatest = getDedicatedDatabaseRateHeadline(iopsWritePoints);
	const cpuChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.cpu.isError, dedicatedMetrics.cpu.isLoading, dedicatedMetrics.cpu.isPlaceholderData);
	const memoryChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.memory.isError, dedicatedMetrics.memory.isLoading, dedicatedMetrics.memory.isPlaceholderData);
	const qpsChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.qps.isError, dedicatedMetrics.qps.isLoading, dedicatedMetrics.qps.isPlaceholderData);
	const iopsChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.iopsRead.isError || dedicatedMetrics.iopsWrite.isError, dedicatedMetrics.iopsRead.isLoading || dedicatedMetrics.iopsWrite.isLoading, dedicatedMetrics.iopsRead.isPlaceholderData || dedicatedMetrics.iopsWrite.isPlaceholderData);
	const connectionsChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.connections.isError, dedicatedMetrics.connections.isLoading, dedicatedMetrics.connections.isPlaceholderData);
	const storageChartLoading = shouldShowUsageChartSkeleton(dedicatedMetrics.storage.isError, dedicatedMetrics.storage.isLoading, dedicatedMetrics.storage.isPlaceholderData);
	const refetchDedicatedMetrics = dedicatedMetrics.refetchAll;
	const handleRefresh = useCallback(async () => {
		await Promise.all([refresh(), refetchDedicatedMetrics()]);
	}, [refresh, refetchDedicatedMetrics]);
	const metricsError = error ?? connectionStatesError ?? connectionAppsError ?? tableActivityError ?? null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 w-full flex-col overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "shrink-0 border-b border-border bg-background px-4 py-3 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-full flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ jsx(DatabaseMonitorNodeSelect, {
						replicaCount,
						value: selectedOrdinal,
						onValueChange: setSelectedOrdinal,
						className: "h-9"
					}),
					lastRecordedAt ? /* @__PURE__ */ jsxs("span", {
						className: "text-[12px] text-muted-foreground",
						children: ["Updated ", formatDistanceToNow(lastRecordedAt, { addSuffix: true })]
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "ms-auto flex shrink-0 flex-wrap items-center justify-end gap-3",
						children: [
							/* @__PURE__ */ jsx(UsageChartIntervalToggle, {
								value: resolvedInterval,
								onValueChange: setChartInterval,
								dateRange
							}),
							/* @__PURE__ */ jsx(DateRangePicker, {
								dateRange,
								onDateRangeChange: (range) => setDateRange(range ?? getDefaultMonitorDateRange()),
								className: "h-9 min-w-[200px]"
							}),
							/* @__PURE__ */ jsx(RefreshButton, {
								onClick: () => void handleRefresh(),
								isRefreshing: isFetching || dedicatedMetrics.cpu.isFetching || dedicatedMetrics.memory.isFetching,
								tooltip: t("Refresh metrics")
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full px-4 py-4 sm:px-6 sm:py-6",
				children: [metricsError ? /* @__PURE__ */ jsxs(Alert, {
					variant: "destructive",
					className: "mb-6",
					children: [
						/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
						/* @__PURE__ */ jsx(AlertTitle, { children: t("Failed to load metrics") }),
						/* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[13px]",
							children: getErrorMessage(metricsError)
						})
					]
				}) : null, /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 lg:flex-row lg:gap-10",
					children: [/* @__PURE__ */ jsx(MysqlMonitorNav, {
						navGroups,
						activeSectionId,
						onNavigate: scrollToChart
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 space-y-10",
						children: [
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsx(MonitorSectionHeading, { title: t("Overview") }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
										children: [
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Connections"),
												value: snapshot ? String(snapshot.totalConnections) : isLoading ? "-" : "0",
												subValue: maxConnections != null ? `/ ${maxConnections}` : void 0,
												description: t("Active client sessions connected to this database."),
												progress: connectionUsagePercent,
												progressTone: getUsageTone(connectionUsagePercent)
											}),
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Storage used"),
												value: storageUsedBytes != null ? formatCompactBytes(storageUsedBytes) : storageChartLoading ? "-" : "0B",
												subValue: storageLimitBytes != null ? `/ ${formatCompactBytes(storageLimitBytes)} available${storageUsagePercent != null ? ` · ${storageUsagePercent.toFixed(1)}%` : ""}` : void 0,
												description: t("Storage used by this database instance compared to provisioned capacity."),
												progress: storageUsagePercent,
												progressTone: getUsageTone(storageUsagePercent),
												progressCaption: storageUsedBytes != null && storageLimitBytes != null ? `${formatCompactBytes(storageUsedBytes)} of ${formatCompactBytes(storageLimitBytes)} available${storageUsagePercent != null ? ` (${storageUsagePercent.toFixed(1)}%)` : ""}` : void 0
											}),
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Cache hit ratio"),
												value: snapshot ? `${snapshot.cacheHitRatio.toFixed(1)}%` : isLoading ? "-" : "0%",
												description: t("Share of blocks served from memory instead of disk."),
												progress: snapshot?.cacheHitRatio ?? null,
												progressTone: getCacheHitTone(snapshot?.cacheHitRatio ?? null),
												progressCaption: snapshot ? `${snapshot.cacheHitRatio.toFixed(1)}% buffer cache hits` : void 0
											})
										]
									}),
									snapshot ? /* @__PURE__ */ jsx("div", {
										id: "mysql-metric-chart-health",
										className: MONITOR_SCROLL_MARGIN,
										children: /* @__PURE__ */ jsx(MysqlMetricsBentoCard, {
											title: t("Health"),
											columns: 4,
											tiles: [
												{
													id: "server-uptime",
													label: "Server uptime",
													value: formatMysqlUptime(snapshot.uptimeSeconds),
													description: "Time elapsed since the MySQL server process last started."
												},
												{
													id: "server-started",
													label: "Server started",
													value: snapshot.serverStartedAt ? /* @__PURE__ */ jsx(DateTooltip, { date: new Date(snapshot.serverStartedAt) }) : "-",
													description: "When the MySQL server process was last started."
												},
												{
													id: "commits",
													label: "Commits",
													value: formatCompactCount(snapshot.xactCommit),
													subValue: t("since stats reset"),
													description: "Committed transactions since MySQL statistics were last reset."
												},
												{
													id: "rollbacks",
													label: "Rollbacks",
													value: formatCompactCount(snapshot.xactRollback),
													subValue: rollbackRatio != null ? `${rollbackRatio.toFixed(1)}% ${t("of transactions")}` : t("since stats reset"),
													description: "Rolled back transactions since MySQL statistics were last reset."
												}
											]
										})
									}) : null
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsx(MonitorSectionHeading, { title: t("Compute") }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
										children: [
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("CPU"),
												value: cpuPoints.length > 0 ? `${cpuPercent.toFixed(1)}%` : "-",
												description: t(DEDICATED_DATABASE_CPU_DESCRIPTION),
												progress: cpuPoints.length > 0 ? cpuPercent : null,
												progressTone: getUsageTone(cpuPoints.length > 0 ? cpuPercent : null)
											}),
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Memory"),
												value: memoryPoints.length > 0 ? `${memoryPercent.toFixed(1)}%` : "-",
												description: t(DEDICATED_DATABASE_MEMORY_DESCRIPTION),
												progress: memoryPoints.length > 0 ? memoryPercent : null,
												progressTone: getUsageTone(memoryPoints.length > 0 ? memoryPercent : null)
											}),
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Queries per second"),
												value: qpsPoints.length > 0 ? qpsLatest.toFixed(1) : "-",
												description: t(DEDICATED_DATABASE_QPS_DESCRIPTION)
											}),
											/* @__PURE__ */ jsx(MysqlMetricKpiCard, {
												label: t("Disk IOPS"),
												value: iopsChartLoading && iopsReadPoints.length === 0 && iopsWritePoints.length === 0 ? "-" : `${(iopsReadPoints.length > 0 ? iopsReadLatest : 0).toFixed(1)} ${t("read")} · ${(iopsWritePoints.length > 0 ? iopsWriteLatest : 0).toFixed(1)} ${t("write")}`,
												description: t(DEDICATED_DATABASE_IOPS_DESCRIPTION)
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ jsx(MysqlMetricChart, {
												id: "cpu",
												title: t("CPU"),
												description: t(DEDICATED_DATABASE_CPU_DESCRIPTION),
												unit: "",
												data: cpuSeries,
												formatY: (value) => `${value.toFixed(1)}%`,
												usageValue: cpuPoints.length > 0 ? cpuPercent : null,
												usageQuota: 100,
												usageUnitLabel: "utilization",
												isLoading: cpuChartLoading,
												emptyMessage: t("No CPU metrics for this date range")
											}),
											/* @__PURE__ */ jsx(MysqlMetricChart, {
												id: "memory",
												title: t("Memory"),
												description: t(DEDICATED_DATABASE_MEMORY_DESCRIPTION),
												unit: "",
												data: memorySeries,
												formatY: (value) => `${value.toFixed(1)}%`,
												usageValue: memoryPoints.length > 0 ? memoryPercent : null,
												usageQuota: 100,
												usageUnitLabel: "utilization",
												isLoading: memoryChartLoading,
												emptyMessage: t("No memory metrics for this date range")
											}),
											/* @__PURE__ */ jsx(MysqlMetricChart, {
												id: "qps",
												title: t("Queries per second"),
												description: t(DEDICATED_DATABASE_QPS_DESCRIPTION),
												unit: "qps",
												data: qpsSeries,
												formatY: (value) => value.toFixed(1),
												isLoading: qpsChartLoading,
												emptyMessage: t("No QPS metrics for this date range")
											}),
											/* @__PURE__ */ jsx(MysqlMetricChart, {
												id: "iops",
												title: t("Disk IOPS"),
												description: t(DEDICATED_DATABASE_IOPS_DESCRIPTION),
												unit: "iops",
												primaryLabel: "Reads",
												secondaryLabel: "Writes",
												secondaryUnit: "iops",
												data: iopsSeries,
												formatY: (value) => value.toFixed(1),
												formatSecondaryY: (value) => value.toFixed(1),
												usageValue: iopsReadPoints.length > 0 || iopsWritePoints.length > 0 ? iopsReadPoints.length > 0 ? iopsReadLatest : 0 : null,
												usageSecondaryValue: iopsReadPoints.length > 0 || iopsWritePoints.length > 0 ? iopsWritePoints.length > 0 ? iopsWriteLatest : 0 : null,
												usageUnitLabel: "read",
												usageSecondaryUnitLabel: "write",
												isLoading: iopsChartLoading,
												emptyMessage: t("No IOPS metrics for this date range")
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-6",
								children: [/* @__PURE__ */ jsx(MonitorSectionHeading, { title: t("Connections") }), /* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsx(MysqlMetricChart, {
											id: "connections",
											title: t("Connections"),
											description: t(DEDICATED_DATABASE_CONNECTIONS_DESCRIPTION),
											unit: "connections",
											data: dedicatedConnectionsSeries,
											formatY: (value) => Math.round(value).toLocaleString(),
											isLoading: connectionsChartLoading,
											emptyMessage: t("No connection metrics for this date range")
										}),
										/* @__PURE__ */ jsx(MysqlMetricRankedList, {
											id: "connection-states",
											title: t("Connection states"),
											description: t("Current session states from information_schema.PROCESSLIST."),
											items: connectionStateBars,
											formatValue: (value) => Math.round(value).toLocaleString(),
											emptyMessage: connectionStatesLoading ? t("Loading connection states...") : t("No active client sessions.")
										}),
										/* @__PURE__ */ jsx(MysqlMetricRankedList, {
											id: "connection-apps",
											title: t("Connections by app"),
											description: t("Client sessions grouped by user from information_schema.PROCESSLIST."),
											items: connectionAppBars,
											formatValue: (value) => Math.round(value).toLocaleString(),
											emptyMessage: connectionAppsLoading ? t("Loading connection apps...") : t("No active client sessions.")
										}),
										snapshot ? /* @__PURE__ */ jsx("div", {
											id: "mysql-metric-chart-session-signals",
											className: MONITOR_SCROLL_MARGIN,
											children: /* @__PURE__ */ jsx(MysqlMetricsBentoCard, {
												title: t("Session signals"),
												tiles: [{
													id: "idle-in-transaction",
													label: t("Idle in transaction"),
													value: String(snapshot.idleInTransaction),
													description: t("Sessions holding an open transaction without running a query. These can block vacuum and hold locks.")
												}, {
													id: "long-running",
													label: t("Long-running queries"),
													value: String(snapshot.longRunningQueries),
													subValue: t("active over 10s"),
													description: t("Currently active queries that have been running for more than 10 seconds.")
												}]
											})
										}) : null
									]
								})]
							}),
							/* @__PURE__ */ jsxs("section", {
								className: "space-y-6",
								children: [/* @__PURE__ */ jsx(MonitorSectionHeading, { title: t("Storage") }), /* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsx(MysqlMetricChart, {
											id: "storage",
											title: t("Storage"),
											description: t(DEDICATED_DATABASE_STORAGE_DESCRIPTION),
											unit: "",
											data: dedicatedStorageSeries,
											formatY: (value) => formatCompactBytes(value),
											usageValue: dedicatedStoragePoints.length > 0 ? getDedicatedDatabaseGaugeHeadline(dedicatedStoragePoints) : null,
											usageQuota: storageLimitBytes,
											isLoading: storageChartLoading,
											emptyMessage: t("No storage metrics for this date range")
										}),
										/* @__PURE__ */ jsx(MysqlMetricRankedList, {
											id: "tables",
											title: t("Largest tables"),
											description: t("Top tables by on-disk size, including indexes and TOAST data."),
											items: tableSizeBars,
											emptyMessage: tableActivityLoading ? t("Loading table activity...") : t("No user tables found in this database.")
										}),
										/* @__PURE__ */ jsx(MysqlMetricRankedList, {
											id: "table-bloat",
											title: t("Dead tuples"),
											description: t("Tables with the most dead rows waiting for vacuum. High dead tuple ratios can slow scans and waste space."),
											items: tableBloatBars,
											formatValue: (value) => formatCompactCount(value),
											emptyMessage: tableActivityLoading ? t("Loading table activity...") : t("No dead tuples found across user tables.")
										}),
										/* @__PURE__ */ jsx(MysqlMetricRankedList, {
											id: "sequential-scans",
											title: t("Sequential scans"),
											description: t("Tables with the most sequential scans since statistics were reset. Compare with index scans to spot missing or unused indexes."),
											items: sequentialScanBars,
											formatValue: (value) => formatCompactCount(value),
											emptyMessage: tableActivityLoading ? t("Loading table activity...") : t("No sequential scans recorded on user tables.")
										})
									]
								})]
							})
						]
					})]
				})]
			})
		})]
	});
}
function MysqlMonitorPage() {
	const { projectId, databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(View, {
		projectId,
		databaseId
	});
}
export { MysqlMonitorPage as component };
