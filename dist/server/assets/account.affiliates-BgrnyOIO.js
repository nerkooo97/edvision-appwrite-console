import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { J as organizationsFullQueryOptions } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Js as normalizeCountryCode, Ws as useCountryLookups, qs as getCountryDisplayName } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import { g as resolveUsageDateBounds, l as getStableUsageChartDateRange } from "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { A as useCreateAffiliateLink, C as sumPendingAffiliateRewardAmount, D as useAffiliateRewards, E as useAffiliateReferrals, M as usePendingAffiliateRewards, O as useAffiliateUsage, S as resolveAffiliateUsageInterval, T as useAffiliateLinks, a as AFFILIATE_USAGE_INTERVALS, d as buildAffiliateFunnelChartPoints, i as AFFILIATE_REWARD_AMOUNT_USD, j as useDeleteAffiliateLink, k as useClaimAffiliateReward, o as affiliateLinksQueryOptions, t as AFFILIATE_ATTRIBUTION_DAYS, x as getDefaultAffiliateUsageQueryParams } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { r as buildAffiliateInviteUrl } from "./invite-url-B18y3cBt.js";
import { o as formatCompactCount, r as createCompactCountAxisTickFormatter } from "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip$1 } from "./tooltip-DUssQZhw.js";
import { t as UsageChartIntervalToggle } from "./UsageChartIntervalToggle-Bbo7DqjH.js";
import { j as Tooltip, k as ResponsiveContainer } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { a as USAGE_CHART_RESPONSIVE_CONTAINER_PROPS, i as USAGE_CHART_MARGIN, n as UsageChartXAxis, r as UsageChartYAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { n as OVERVIEW_CHART_HEIGHT } from "./chart-panel-CCGEGd61.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import { t as Route$1 } from "./account.affiliates-CC3p-MAQ.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Gift, Globe, Info, Link2, Plus, Share2, Sparkles, Trash2 } from "lucide-react";
function ClaimAffiliateReward({ reward, open, onOpenChange, organizations }) {
	const t = useT();
	const claimReward = useClaimAffiliateReward();
	const [organizationId, setOrganizationId] = useState("");
	useEffect(() => {
		if (!open) {
			setOrganizationId("");
			return;
		}
		if (organizations.length === 1) setOrganizationId(organizations[0].$id);
	}, [open, organizations]);
	const handleClaim = async () => {
		if (!reward || !organizationId) return;
		try {
			await claimReward.mutateAsync({
				rewardId: reward.$id,
				organizationId
			});
			toast.success(t("Credits claimed for organization"));
			onOpenChange(false);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to claim credits")));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Claim credits") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Choose an organization you own to receive these affiliate credits.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-4 space-y-3",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground",
						children: [
							t("Amount"),
							":",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: formatCurrency(reward?.amount ?? 0)
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[13px] font-medium text-foreground",
							children: t("Organization")
						}), /* @__PURE__ */ jsxs(Select, {
							value: organizationId,
							onValueChange: setOrganizationId,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "h-9",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select organization") })
							}), /* @__PURE__ */ jsx(SelectContent, { children: organizations.map((org) => /* @__PURE__ */ jsx(SelectItem, {
								value: org.$id,
								children: org.name
							}, org.$id)) })]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: claimReward.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: !organizationId || claimReward.isPending,
						onClick: handleClaim,
						...analyticsAttrs("claim-affiliate-reward"),
						children: t("Claim credits")
					})]
				})
			]
		})
	});
}
var CLICKS_COLOR = "var(--chart-2)";
var SIGNUPS_COLOR = "var(--chart-brand)";
var CONVERSIONS_COLOR = "var(--chart-1)";
var ALL_LINKS_VALUE = "all";
function formatRate(numerator, denominator) {
	if (denominator <= 0) return null;
	const rate = numerator / denominator * 100;
	if (!Number.isFinite(rate)) return null;
	return `${rate.toFixed(rate >= 10 ? 0 : 1)}%`;
}
function sumMetric(usage, metric) {
	return usage?.metrics?.find((entry) => entry.metric === metric)?.points?.reduce((sum, point) => sum + (point.value || 0), 0) ?? 0;
}
function MetricTile({ label, value, hint, info, isLoading }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 px-5 py-4 sm:px-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t(label)
				}), info ? /* @__PURE__ */ jsxs(Tooltip$1, {
					delayDuration: 0,
					children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "inline-flex shrink-0 text-muted-foreground transition-colors hover:text-foreground",
							"aria-label": `${t("More about")} ${t(label)}`,
							children: /* @__PURE__ */ jsx(Info, {
								className: "h-3 w-3",
								"aria-hidden": true
							})
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "top",
						className: "max-w-xs text-[12px] leading-relaxed",
						children: /* @__PURE__ */ jsx("p", { children: t(info) })
					})]
				}) : null]
			}),
			isLoading ? /* @__PURE__ */ jsx(Skeleton, { className: "mt-2 h-7 w-16 rounded-sm" }) : /* @__PURE__ */ jsx("p", {
				className: "mt-1.5 text-[22px] font-semibold tabular-nums tracking-tight text-foreground",
				children: formatCompactCount(value)
			}),
			hint ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] tabular-nums text-muted-foreground",
				children: hint
			}) : /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] text-transparent",
				"aria-hidden": true,
				children: "-"
			})
		]
	});
}
function ChartLegendItem({ label, color }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "h-2 w-2 rounded-full",
			style: { backgroundColor: color },
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[11px] text-muted-foreground",
			children: t(label)
		})]
	});
}
function AffiliatesOverview({ initialUsage, initialPendingRewards, links, organizations }) {
	const t = useT();
	const [dateRange, setDateRange] = useState(() => getStableUsageChartDateRange());
	const [chartInterval, setChartInterval] = useState("1h");
	const [selectedLinkId, setSelectedLinkId] = useState(ALL_LINKS_VALUE);
	const [rewardToClaim, setRewardToClaim] = useState(null);
	const resolvedInterval = resolveAffiliateUsageInterval(chartInterval, dateRange);
	const { from, to } = useMemo(() => resolveUsageDateBounds(dateRange), [dateRange]);
	const linkIdFilter = selectedLinkId === ALL_LINKS_VALUE ? void 0 : selectedLinkId;
	const usageParams = useMemo(() => ({
		linkId: linkIdFilter,
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString()
	}), [
		linkIdFilter,
		resolvedInterval,
		from,
		to
	]);
	const { usage: usageFromHook, clicks, signups, conversions, isLoading, isFetching, isError, refetch } = useAffiliateUsage(usageParams);
	const pendingQuery = usePendingAffiliateRewards();
	const pendingRewards = pendingQuery.data?.rewards ?? initialPendingRewards?.rewards ?? [];
	const pendingAmount = sumPendingAffiliateRewardAmount(pendingRewards);
	const pendingCount = pendingQuery.data?.total ?? initialPendingRewards?.total ?? pendingRewards.length;
	const firstPendingReward = pendingRewards[0] ?? null;
	const canClaim = organizations.length > 0 && !!firstPendingReward;
	const defaultUsageParams = getDefaultAffiliateUsageQueryParams();
	const canUseInitialUsage = !linkIdFilter && usageParams.interval === defaultUsageParams.interval && usageParams.startAt === defaultUsageParams.startAt && usageParams.endAt === defaultUsageParams.endAt;
	const usage = usageFromHook ?? (canUseInitialUsage ? initialUsage : void 0);
	const showSkeleton = isLoading && !usage;
	const displayClicks = usageFromHook ? clicks : sumMetric(usage, "affiliates.clicks");
	const displaySignups = usageFromHook ? signups : sumMetric(usage, "affiliates.signups");
	const displayConversions = usageFromHook ? conversions : sumMetric(usage, "affiliates.conversions");
	const chartPoints = useMemo(() => buildAffiliateFunnelChartPoints(usage, from, to, resolvedInterval), [
		usage,
		from,
		to,
		resolvedInterval
	]);
	const chartData = useMemo(() => chartPoints.map((point) => ({
		date: point.date,
		day: point.day,
		fullDate: formatLocalizedDate(point.day, resolvedInterval === "1h" ? "MMM d, yyyy HH:mm" : "MMM d, yyyy"),
		clicks: point.clicks,
		signups: point.signups,
		conversions: point.conversions,
		total: point.clicks
	})), [chartPoints, resolvedInterval]);
	const axisMax = useMemo(() => chartPoints.reduce((max, point) => Math.max(max, point.clicks, point.signups, point.conversions), 0), [chartPoints]);
	const yAxisTickFormatter = useMemo(() => createCompactCountAxisTickFormatter(axisMax), [axisMax]);
	const signupRate = formatRate(displaySignups, displayClicks);
	const conversionRate = formatRate(displayConversions, displaySignups);
	const hasSeries = chartPoints.some((point) => point.clicks > 0 || point.signups > 0 || point.conversions > 0);
	const handleDateRangeChange = (next) => {
		if (!next?.from) return;
		setDateRange(next);
		setChartInterval((current) => resolveAffiliateUsageInterval(current, next));
	};
	const handleIntervalChange = (next) => {
		setChartInterval(resolveAffiliateUsageInterval(next, dateRange));
	};
	const claimDisabledTooltip = organizations.length === 0 ? t("Create or join an organization you own to claim credits.") : void 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Affiliates program")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] text-muted-foreground max-w-xl",
						children: t("Create shareable links and earn $15 in credits when a referred user upgrades to Pro. Attribution lasts 180 days.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end",
					children: [
						links.length > 0 ? /* @__PURE__ */ jsxs(Select, {
							value: selectedLinkId,
							onValueChange: setSelectedLinkId,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "h-9 w-full sm:w-[180px]",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("All links") })
							}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
								value: ALL_LINKS_VALUE,
								children: t("All links")
							}), links.map((link) => /* @__PURE__ */ jsx(SelectItem, {
								value: link.$id,
								children: link.name?.trim() || link.$id
							}, link.$id))] })]
						}) : null,
						/* @__PURE__ */ jsx(UsageChartIntervalToggle, {
							value: resolvedInterval,
							onValueChange: (value) => handleIntervalChange(value),
							dateRange,
							allowedIntervals: AFFILIATE_USAGE_INTERVALS,
							className: "h-9 w-full sm:w-fit"
						}),
						/* @__PURE__ */ jsx(DateRangePicker, {
							dateRange,
							onDateRangeChange: handleDateRangeChange,
							className: "h-9 w-full min-w-0 sm:w-auto sm:min-w-[180px]",
							popoverContentAlign: "end"
						})
					]
				})]
			}),
			pendingAmount > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between bg-muted/30",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-start gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background border border-border",
						children: /* @__PURE__ */ jsx(Gift, {
							className: "h-4 w-4 text-muted-foreground",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[15px] font-semibold tabular-nums text-foreground",
							children: [
								formatCurrency(pendingAmount),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-muted-foreground",
									children: t("ready to claim")
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[13px] text-muted-foreground",
							children: pendingCount === 1 ? t("1 pending reward") : `${pendingCount} ${t("pending rewards")}`
						})]
					})]
				}), claimDisabledTooltip ? /* @__PURE__ */ jsxs(Tooltip$1, {
					delayDuration: 0,
					children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("span", {
							className: "inline-flex w-full sm:w-auto",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								className: "h-9 w-full text-[13px] sm:w-auto",
								disabled: true,
								children: t("Claim")
							})
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "top",
						className: "max-w-xs text-[12px]",
						children: /* @__PURE__ */ jsx("p", { children: claimDisabledTooltip })
					})]
				}) : /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					className: "h-9 w-full text-[13px] sm:w-auto",
					disabled: !canClaim,
					onClick: () => setRewardToClaim(firstPendingReward),
					...analyticsAttrs("claim-affiliate-reward"),
					children: t("Claim")
				})]
			})] }) : null,
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: cn("grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0", isFetching && !showSkeleton && "opacity-90"),
				children: [
					/* @__PURE__ */ jsx(MetricTile, {
						label: "Clicks",
						value: displayClicks,
						hint: t("Invite link visits"),
						isLoading: showSkeleton
					}),
					/* @__PURE__ */ jsx(MetricTile, {
						label: "Signups",
						value: displaySignups,
						hint: signupRate ? `${t("Signup rate")}: ${signupRate}` : t("Attributed accounts"),
						info: "Signup rate is the share of invite link clicks that resulted in a new account in the selected date range.",
						isLoading: showSkeleton
					}),
					/* @__PURE__ */ jsx(MetricTile, {
						label: "Conversions",
						value: displayConversions,
						hint: conversionRate ? `${t("Conversion rate")}: ${conversionRate}` : t("Pro upgrades"),
						info: "Conversion rate is the share of attributed signups that upgraded to Pro in the selected date range.",
						isLoading: showSkeleton
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-4 py-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-3 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-medium text-foreground",
						children: t("Funnel over time")
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ jsx(ChartLegendItem, {
								label: "Clicks",
								color: CLICKS_COLOR
							}),
							/* @__PURE__ */ jsx(ChartLegendItem, {
								label: "Signups",
								color: SIGNUPS_COLOR
							}),
							/* @__PURE__ */ jsx(ChartLegendItem, {
								label: "Conversions",
								color: CONVERSIONS_COLOR
							})
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: cn("relative w-full shrink-0 text-muted-foreground", FORCE_LTR_CLASS),
					style: { height: 240 },
					children: showSkeleton ? /* @__PURE__ */ jsx(Skeleton, {
						className: "h-full w-full rounded-md",
						"aria-hidden": true
					}) : isError ? /* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Could not load affiliate analytics")
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "text-[13px] font-medium text-foreground underline-offset-4 hover:underline",
							onClick: () => refetch(),
							children: t("Retry")
						})]
					}) : !hasSeries ? /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 flex items-center justify-center text-[13px] text-muted-foreground",
						children: t("No affiliate activity in this date range")
					}) : /* @__PURE__ */ jsx(ResponsiveContainer, {
						...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
						children: /* @__PURE__ */ jsxs(AreaChart, {
							data: chartData,
							margin: USAGE_CHART_MARGIN,
							children: [
								/* @__PURE__ */ jsxs("defs", { children: [
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "affiliate-clicks-fill",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: CLICKS_COLOR,
											stopOpacity: .16
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: CLICKS_COLOR,
											stopOpacity: 0
										})]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "affiliate-signups-fill",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: SIGNUPS_COLOR,
											stopOpacity: .18
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: SIGNUPS_COLOR,
											stopOpacity: 0
										})]
									}),
									/* @__PURE__ */ jsxs("linearGradient", {
										id: "affiliate-conversions-fill",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: CONVERSIONS_COLOR,
											stopOpacity: .2
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: CONVERSIONS_COLOR,
											stopOpacity: 0
										})]
									})
								] }),
								/* @__PURE__ */ jsx(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "hsl(var(--border))",
									vertical: false
								}),
								/* @__PURE__ */ jsx(UsageChartXAxis, {
									points: chartPoints.map((point) => ({
										date: point.date,
										day: point.day,
										total: point.clicks
									})),
									dateRange,
									chartInterval: resolvedInterval
								}),
								/* @__PURE__ */ jsx(UsageChartYAxis, {
									tickFormatter: yAxisTickFormatter,
									domain: axisMax > 0 ? [0, Math.ceil(axisMax * 1.1)] : [0, 1]
								}),
								/* @__PURE__ */ jsx(Tooltip, { content: ({ active, payload }) => {
									if (!active || !payload?.length) return null;
									const data = payload[0]?.payload;
									if (!data) return null;
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-md border border-border bg-popover px-3 py-2 shadow-sm",
										children: [/* @__PURE__ */ jsx("p", {
											className: "mb-1.5 text-[11px] text-muted-foreground",
											children: data.fullDate
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-0.5",
											children: [
												/* @__PURE__ */ jsxs("p", {
													className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
													children: [
														/* @__PURE__ */ jsx(ChartSeriesDot, { color: CLICKS_COLOR }),
														formatCompactCount(data.clicks),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "font-normal text-muted-foreground",
															children: t("clicks")
														})
													]
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
													children: [
														/* @__PURE__ */ jsx(ChartSeriesDot, { color: SIGNUPS_COLOR }),
														formatCompactCount(data.signups),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "font-normal text-muted-foreground",
															children: t("signups")
														})
													]
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
													children: [
														/* @__PURE__ */ jsx(ChartSeriesDot, { color: CONVERSIONS_COLOR }),
														formatCompactCount(data.conversions),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "font-normal text-muted-foreground",
															children: t("conversions")
														})
													]
												})
											]
										})]
									});
								} }),
								/* @__PURE__ */ jsx(Area, {
									type: "monotone",
									dataKey: "clicks",
									name: "Clicks",
									stroke: CLICKS_COLOR,
									strokeWidth: 2,
									fill: "url(#affiliate-clicks-fill)",
									...CHART_ANIMATION_DISABLED
								}),
								/* @__PURE__ */ jsx(Area, {
									type: "monotone",
									dataKey: "signups",
									name: "Signups",
									stroke: SIGNUPS_COLOR,
									strokeWidth: 2,
									fill: "url(#affiliate-signups-fill)",
									...CHART_ANIMATION_DISABLED
								}),
								/* @__PURE__ */ jsx(Area, {
									type: "monotone",
									dataKey: "conversions",
									name: "Conversions",
									stroke: CONVERSIONS_COLOR,
									strokeWidth: 2,
									fill: "url(#affiliate-conversions-fill)",
									...CHART_ANIMATION_DISABLED
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border bg-muted/30 px-6 py-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted-foreground",
					children: [
						/* @__PURE__ */ jsxs("span", { children: [
							t("Reward"),
							": ",
							formatCurrency(15)
						] }),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "hidden h-3 w-px bg-border sm:block"
						}),
						/* @__PURE__ */ jsxs("span", { children: [
							t("Attribution window"),
							": ",
							180,
							" ",
							t("days")
						] }),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "hidden h-3 w-px bg-border sm:block"
						}),
						/* @__PURE__ */ jsxs("span", { children: [t("Qualifying plan"), ": Pro"] })
					]
				})
			})
		]
	}), /* @__PURE__ */ jsx(ClaimAffiliateReward, {
		reward: rewardToClaim,
		open: !!rewardToClaim,
		onOpenChange: (open) => {
			if (!open) setRewardToClaim(null);
		},
		organizations
	})] });
}
var PROGRAM_STEPS = [
	{
		icon: Link2,
		title: "Create an invite link",
		description: "Generate a shareable link with an optional name for each campaign or channel."
	},
	{
		icon: Share2,
		title: "Share with developers",
		description: "Clicks are tracked automatically. Signups are attributed for 180 days."
	},
	{
		icon: Sparkles,
		title: "Earn Pro credits",
		description: "When a referred user upgrades to Pro, you receive $15 in organization credits."
	}
];
function AffiliatesProgramEmpty() {
	const t = useT();
	const createLink = useCreateAffiliateLink();
	const [createOpen, setCreateOpen] = useState(false);
	const [linkId, setLinkId] = useState(void 0);
	const [name, setName] = useState("");
	useEffect(() => {
		if (!createOpen) {
			setLinkId(void 0);
			setName("");
		}
	}, [createOpen]);
	const handleCreate = async () => {
		try {
			await createLink.mutateAsync({
				linkId,
				name: name.trim() || void 0
			});
			toast.success(t("Affiliate link created"));
			setCreateOpen(false);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create affiliate link")));
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-10 sm:px-10 sm:py-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-2xl flex-col items-center text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-muted ring-1 ring-border",
							children: /* @__PURE__ */ jsx(Gift, {
								className: "h-7 w-7 text-muted-foreground",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-[18px] font-semibold tracking-tight text-foreground",
							children: t("Earn credits by referring developers")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 max-w-lg text-[13px] leading-relaxed text-muted-foreground",
							children: t("The Affiliates program rewards you when people you invite join Appwrite and upgrade to Pro. Create a link to get started.")
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3",
					children: PROGRAM_STEPS.map((step, index) => {
						const Icon$1 = step.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-background/60 px-4 py-4 text-start",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
										children: /* @__PURE__ */ jsx(Icon$1, {
											className: "h-4 w-4",
											"aria-hidden": true
										})
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: [
											t("Step"),
											" ",
											index + 1
										]
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 text-[13px] font-semibold text-foreground",
									children: t(step.title)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1.5 text-[12px] leading-relaxed text-muted-foreground",
									children: t(step.description)
								})
							]
						}, step.title);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto mt-8 max-w-3xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("How rewards work")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-muted/20 px-4 py-3 text-center sm:text-start",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[15px] font-semibold tabular-nums text-foreground",
										children: formatCurrency(15)
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
										children: t("Credits added to your organization for each Pro upgrade")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-muted/20 px-4 py-3 text-center sm:text-start",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-[15px] font-semibold tabular-nums text-foreground",
										children: [
											180,
											" ",
											t("days")
										]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
										children: t("Time after signup during which a Pro upgrade still counts for you")
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-muted/20 px-4 py-3 text-center sm:text-start",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[15px] font-semibold text-foreground",
										children: "Pro"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
										children: t("Only referrals who upgrade to Pro generate a reward")
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 flex justify-center",
							children: /* @__PURE__ */ jsxs(Button, {
								className: "h-9 text-[13px]",
								onClick: () => setCreateOpen(true),
								...analyticsAttrs("create-affiliate-link"),
								children: [/* @__PURE__ */ jsx(Link2, { className: "mr-1.5 h-4 w-4" }), t("Create invite link")]
							})
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx(Dialog, {
		open: createOpen,
		onOpenChange: setCreateOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create link") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create a shareable invite link. The link ID is your referral code.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-4 space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "affiliate-empty-link-name",
							children: t("Name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "affiliate-empty-link-name",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: t("Optional name"),
							maxLength: 128,
							className: "h-9"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "affiliate-empty-link-id",
							children: t("Link ID")
						}), /* @__PURE__ */ jsx(IdInput, {
							id: "affiliate-empty-link-id",
							value: linkId,
							onChange: setLinkId,
							placeholder: t("Leave blank to auto-generate")
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setCreateOpen(false),
						disabled: createLink.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: createLink.isPending,
						onClick: handleCreate,
						...analyticsAttrs("create-affiliate-link"),
						children: t("Create")
					})]
				})
			]
		})
	})] });
}
var AFFILIATE_PAGE_SIZE_OPTIONS = [
	10,
	25,
	50,
	100
];
var AFFILIATE_LINK_LOOKUP_LIMIT = 100;
function useAffiliateCardPagination(defaultPageSize = 10) {
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(defaultPageSize);
	return {
		requestedPage,
		displayedPage,
		setDisplayedPage,
		pageSize,
		handlePageChange: useCallback((page) => {
			setRequestedPage(page);
		}, []),
		handlePageSizeChange: useCallback((size) => {
			setPageSize(size);
			setRequestedPage(1);
			setDisplayedPage(1);
		}, [])
	};
}
function ReferralCountryFlag({ flagUrl }) {
	const [failed, setFailed] = useState(false);
	if (!flagUrl || failed) return /* @__PURE__ */ jsx(Globe, {
		className: "h-4 w-4 shrink-0 text-muted-foreground/60",
		"aria-hidden": true
	});
	return /* @__PURE__ */ jsx("img", {
		src: flagUrl,
		alt: "",
		className: "h-4 w-4 shrink-0 rounded-sm border border-border/30 object-cover shadow-sm",
		width: 16,
		height: 16,
		onError: () => setFailed(true)
	});
}
function referralStatusVariant(status) {
	if (status === "converted") return "success";
	if (status === "expired") return "error";
	if (status === "pending") return "pending";
	return "info";
}
function rewardStatusVariant(status) {
	if (status === "claimed") return "success";
	if (status === "pending") return "pending";
	return "info";
}
function referralStatusLabel(status, t) {
	if (status === "converted") return t("Converted");
	if (status === "expired") return t("Expired");
	if (status === "pending") return t("Pending");
	return status;
}
function rewardStatusLabel(status, t) {
	if (status === "claimed") return t("Claimed");
	if (status === "pending") return t("Pending");
	return status;
}
function CreateLinkDialog({ open, onOpenChange }) {
	const t = useT();
	const createLink = useCreateAffiliateLink();
	const [linkId, setLinkId] = useState(void 0);
	const [name, setName] = useState("");
	useEffect(() => {
		if (!open) {
			setLinkId(void 0);
			setName("");
		}
	}, [open]);
	const handleCreate = async () => {
		try {
			await createLink.mutateAsync({
				linkId,
				name: name.trim() || void 0
			});
			toast.success(t("Affiliate link created"));
			onOpenChange(false);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create affiliate link")));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create link") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create a shareable invite link. The link ID is your referral code.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-4 space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "affiliate-link-name",
							children: t("Name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "affiliate-link-name",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: t("Optional name"),
							maxLength: 128,
							className: "h-9"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "affiliate-link-id",
							children: t("Link ID")
						}), /* @__PURE__ */ jsx(IdInput, {
							id: "affiliate-link-id",
							value: linkId,
							onChange: setLinkId,
							placeholder: t("Leave blank to auto-generate")
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: createLink.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: createLink.isPending,
						onClick: handleCreate,
						...analyticsAttrs("create-affiliate-link"),
						children: t("Create")
					})]
				})
			]
		})
	});
}
function DeleteLinkDialog({ link, open, onOpenChange }) {
	const t = useT();
	const deleteLink = useDeleteAffiliateLink();
	const handleDelete = async () => {
		if (!link) return;
		try {
			await deleteLink.mutateAsync(link.$id);
			toast.success(t("Affiliate link deleted"));
			onOpenChange(false);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete affiliate link")));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete link") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Existing referrals and rewards keep their history. New visits to this invite URL will stop working.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: deleteLink.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						disabled: deleteLink.isPending,
						onClick: handleDelete,
						...analyticsAttrs("delete-affiliate-link"),
						children: t("Delete")
					})]
				})
			]
		})
	});
}
function LinksCard({ initialData }) {
	const t = useT();
	const { requestedPage, displayedPage, setDisplayedPage, pageSize, handlePageChange, handlePageSizeChange } = useAffiliateCardPagination();
	const [createOpen, setCreateOpen] = useState(false);
	const [linkToDelete, setLinkToDelete] = useState(null);
	const requested = useAffiliateLinks(requestedPage - 1, pageSize);
	const displayed = useAffiliateLinks(displayedPage - 1, pageSize);
	useEffect(() => {
		if (requestedPage !== displayedPage && !requested.isFetching && requested.isSuccess) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		requested.isFetching,
		requested.isSuccess,
		setDisplayedPage
	]);
	const isFirstPage = displayedPage === 1;
	const matchesDefaultPageSize = pageSize === 10;
	const links = isFirstPage && matchesDefaultPageSize && initialData && displayed.links.length === 0 ? initialData.links : displayed.links;
	const total = isFirstPage && matchesDefaultPageSize && initialData ? displayed.total || initialData.total : displayed.total;
	useEffect(() => {
		if (total <= 0) return;
		const maxPage = Math.max(1, Math.ceil(total / pageSize));
		if (requestedPage > maxPage) handlePageChange(maxPage);
		if (displayedPage > maxPage) setDisplayedPage(maxPage);
	}, [
		total,
		pageSize,
		requestedPage,
		displayedPage,
		handlePageChange,
		setDisplayedPage
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Links")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Share invite links to attribute signups. Clicks are tracked automatically.")
					})] }), /* @__PURE__ */ jsxs(Button, {
						size: "sm",
						className: "h-9 shrink-0 text-[13px]",
						onClick: () => setCreateOpen(true),
						...analyticsAttrs("create-affiliate-link"),
						children: [/* @__PURE__ */ jsx(Plus, { className: "mr-1.5 h-4 w-4" }), t("Create link")]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				displayed.isLoading && links.length === 0 && total === 0 ? /* @__PURE__ */ jsx("div", {
					className: "px-6 py-10 text-center text-[13px] text-muted-foreground",
					children: t("Loading links...")
				}) : total === 0 ? /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6",
					children: /* @__PURE__ */ jsx(EmptyState, {
						icon: Link2,
						title: t("No links yet"),
						description: t("Create your first invite link to start referring users.")
					})
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Name")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Invite link")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Status")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Created")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-right w-[100px]" })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: links.map((link) => {
					const inviteUrl = buildAffiliateInviteUrl(link.$id);
					return /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-medium",
								children: link.name?.trim() || t("Untitled")
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 max-w-[min(420px,40vw)]",
							children: /* @__PURE__ */ jsx(CopyableId, {
								id: inviteUrl,
								displayText: inviteUrl,
								variant: "inline",
								size: "sm",
								constrainToContainer: true,
								copyToastLabel: "Invite link"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(Badge, {
								variant: link.status === "active" ? "success" : "inactive",
								className: "text-[10px] shrink-0",
								children: link.status === "active" ? t("Active") : t("Disabled")
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(DateTooltip, { date: link.$createdAt })
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								variant: "outline",
								className: "h-8 w-8 p-0",
								onClick: () => setLinkToDelete(link),
								"aria-label": t("Delete"),
								children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
							})
						})
					] }, link.$id);
				}) })] }), /* @__PURE__ */ jsx("div", {
					className: "border-t border-border px-4",
					children: /* @__PURE__ */ jsx(Pagination, {
						currentPage: displayedPage,
						totalItems: total,
						pageSize,
						pageSizeOptions: AFFILIATE_PAGE_SIZE_OPTIONS,
						onPageChange: handlePageChange,
						onPageSizeChange: handlePageSizeChange,
						itemLabel: t("links"),
						scrollToTopOnPageChange: false
					})
				})] })
			]
		}),
		/* @__PURE__ */ jsx(CreateLinkDialog, {
			open: createOpen,
			onOpenChange: setCreateOpen
		}),
		/* @__PURE__ */ jsx(DeleteLinkDialog, {
			link: linkToDelete,
			open: !!linkToDelete,
			onOpenChange: (open) => {
				if (!open) setLinkToDelete(null);
			}
		})
	] });
}
function ReferralsCard({ initialData, links }) {
	const t = useT();
	const { requestedPage, displayedPage, setDisplayedPage, pageSize, handlePageChange, handlePageSizeChange } = useAffiliateCardPagination();
	const { lookups: countryLookups } = useCountryLookups();
	const requested = useAffiliateReferrals(requestedPage - 1, pageSize);
	const displayed = useAffiliateReferrals(displayedPage - 1, pageSize);
	useEffect(() => {
		if (requestedPage !== displayedPage && !requested.isFetching && requested.isSuccess) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		requested.isFetching,
		requested.isSuccess,
		setDisplayedPage
	]);
	const isFirstPage = displayedPage === 1;
	const matchesDefaultPageSize = pageSize === 10;
	const referrals = isFirstPage && matchesDefaultPageSize && initialData && displayed.referrals.length === 0 ? initialData.referrals : displayed.referrals;
	const total = isFirstPage && matchesDefaultPageSize && initialData ? displayed.total || initialData.total : displayed.total;
	useEffect(() => {
		if (total <= 0) return;
		const maxPage = Math.max(1, Math.ceil(total / pageSize));
		if (requestedPage > maxPage) handlePageChange(maxPage);
		if (displayedPage > maxPage) setDisplayedPage(maxPage);
	}, [
		total,
		pageSize,
		requestedPage,
		displayedPage,
		handlePageChange,
		setDisplayedPage
	]);
	const linkNameById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		links.forEach((link) => {
			map.set(link.$id, link.name?.trim() || link.$id);
		});
		return map;
	}, [links]);
	const getCountryFlagUrl = (countryCode) => {
		const code = normalizeCountryCode(countryCode);
		if (!code) return null;
		return `${getBaseEndpoint()}/avatars/flags/${code.toLowerCase()}?width=20&height=20&quality=100&project=console`;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Referrals")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Signups attributed to your invite links. Converted referrals earn you credits.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			displayed.isLoading && referrals.length === 0 && total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-10 text-center text-[13px] text-muted-foreground",
				children: t("Loading referrals...")
			}) : total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-6",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Gift,
					title: t("No referrals yet"),
					description: t("Share an invite link to start attributing signups.")
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("User")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Country")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Link")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Status")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Attributed")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Expires at")
					})
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: referrals.map((referral) => {
				const flagUrl = getCountryFlagUrl(referral.referredUserCountry);
				const countryLabel = getCountryDisplayName(referral.referredUserCountry, countryLookups) ?? t("Unknown");
				return /* @__PURE__ */ jsxs(TableRow, { children: [
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-mono text-[13px] text-foreground",
							children: referral.referredUserMaskedId
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(ReferralCountryFlag, { flagUrl }), /* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: countryLabel
							})]
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-[13px] text-muted-foreground",
							children: linkNameById.get(referral.linkId) ?? referral.linkId
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(Badge, {
							variant: referralStatusVariant(referral.status),
							className: "text-[10px] shrink-0",
							children: referralStatusLabel(referral.status, t)
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(DateTooltip, { date: referral.attributedAt })
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(DateTooltip, { date: referral.expiresAt })
					})
				] }, referral.$id);
			}) })] }), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-4",
				children: /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: total,
					pageSize,
					pageSizeOptions: AFFILIATE_PAGE_SIZE_OPTIONS,
					onPageChange: handlePageChange,
					onPageSizeChange: handlePageSizeChange,
					itemLabel: t("referrals"),
					scrollToTopOnPageChange: false
				})
			})] })
		]
	});
}
function RewardsCard({ initialData, organizations, links }) {
	const t = useT();
	const { requestedPage, displayedPage, setDisplayedPage, pageSize, handlePageChange, handlePageSizeChange } = useAffiliateCardPagination();
	const [selectedReward, setSelectedReward] = useState(null);
	const requested = useAffiliateRewards(requestedPage - 1, pageSize);
	const displayed = useAffiliateRewards(displayedPage - 1, pageSize);
	useEffect(() => {
		if (requestedPage !== displayedPage && !requested.isFetching && requested.isSuccess) setDisplayedPage(requestedPage);
	}, [
		requestedPage,
		displayedPage,
		requested.isFetching,
		requested.isSuccess,
		setDisplayedPage
	]);
	const isFirstPage = displayedPage === 1;
	const matchesDefaultPageSize = pageSize === 10;
	const rewards = isFirstPage && matchesDefaultPageSize && initialData && displayed.rewards.length === 0 ? initialData.rewards : displayed.rewards;
	const total = isFirstPage && matchesDefaultPageSize && initialData ? displayed.total || initialData.total : displayed.total;
	useEffect(() => {
		if (total <= 0) return;
		const maxPage = Math.max(1, Math.ceil(total / pageSize));
		if (requestedPage > maxPage) handlePageChange(maxPage);
		if (displayedPage > maxPage) setDisplayedPage(maxPage);
	}, [
		total,
		pageSize,
		requestedPage,
		displayedPage,
		handlePageChange,
		setDisplayedPage
	]);
	const orgNameById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		organizations.forEach((org) => map.set(org.$id, org.name));
		return map;
	}, [organizations]);
	const linkNameById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		links.forEach((link) => {
			map.set(link.$id, link.name?.trim() || link.$id);
		});
		return map;
	}, [links]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Rewards")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Credits earned from converted referrals. Claim pending rewards to an organization you own.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			displayed.isLoading && rewards.length === 0 && total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-10 text-center text-[13px] text-muted-foreground",
				children: t("Loading rewards...")
			}) : total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-6",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Gift,
					title: t("No rewards yet"),
					description: t("Rewards appear here after a referral upgrades to Pro.")
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Amount")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Link")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Status")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Organization")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Created")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-right w-[120px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: rewards.map((reward) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-[13px] font-medium",
						children: formatCurrency(reward.amount)
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: linkNameById.get(reward.linkId) ?? reward.linkId
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx(Badge, {
						variant: rewardStatusVariant(reward.status),
						className: "text-[10px] shrink-0",
						children: rewardStatusLabel(reward.status, t)
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: reward.teamId ? orgNameById.get(reward.teamId) ?? reward.teamId : t("Not claimed")
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx(DateTooltip, { date: reward.$createdAt })
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3 text-right",
					children: reward.status === "pending" ? /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: "h-8 text-[12px]",
						onClick: () => setSelectedReward(reward),
						disabled: organizations.length === 0,
						...analyticsAttrs("claim-affiliate-reward"),
						children: t("Claim")
					}) : null
				})
			] }, reward.$id)) })] }), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-4",
				children: /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: total,
					pageSize,
					pageSizeOptions: AFFILIATE_PAGE_SIZE_OPTIONS,
					onPageChange: handlePageChange,
					onPageSizeChange: handlePageSizeChange,
					itemLabel: t("rewards"),
					scrollToTopOnPageChange: false
				})
			})] })
		]
	}), /* @__PURE__ */ jsx(ClaimAffiliateReward, {
		reward: selectedReward,
		open: !!selectedReward,
		onOpenChange: (open) => {
			if (!open) setSelectedReward(null);
		},
		organizations
	})] });
}
function AccountAffiliatesPage({ initialData } = {}) {
	const { data: linksPageData } = useQuery(affiliateLinksQueryOptions(0, 10));
	const { data: linksLookupData } = useQuery({
		...affiliateLinksQueryOptions(0, AFFILIATE_LINK_LOOKUP_LIMIT),
		enabled: (linksPageData?.total ?? initialData?.links?.total ?? 0) > 0
	});
	const { data: organizationsFromQuery } = useQuery({
		...organizationsFullQueryOptions(),
		enabled: (linksPageData?.total ?? initialData?.links?.total ?? 0) > 0
	});
	const links = linksLookupData?.links ?? linksPageData?.links ?? initialData?.links?.links ?? [];
	const organizations = organizationsFromQuery ?? initialData?.organizations ?? [];
	const totalLinks = linksPageData?.total ?? initialData?.links?.total;
	const cards = useMemo(() => [
		{
			id: "affiliates-overview",
			search: {
				title: "Affiliates program",
				keywords: [
					"affiliate",
					"referral",
					"credits",
					"earn",
					"reward",
					"pro",
					"clicks",
					"signups",
					"conversions",
					"funnel",
					"analytics",
					"chart"
				]
			},
			node: /* @__PURE__ */ jsx(AffiliatesOverview, {
				initialUsage: initialData?.usage,
				initialPendingRewards: initialData?.pendingRewards,
				links,
				organizations
			})
		},
		{
			id: "affiliates-links",
			search: {
				title: "Links",
				keywords: [
					"link",
					"invite",
					"share",
					"referral code"
				]
			},
			node: /* @__PURE__ */ jsx(LinksCard, { initialData: initialData?.links })
		},
		{
			id: "affiliates-referrals",
			search: {
				title: "Referrals",
				keywords: [
					"referral",
					"signup",
					"converted",
					"pending",
					"country"
				]
			},
			node: /* @__PURE__ */ jsx(ReferralsCard, {
				initialData: initialData?.referrals,
				links
			})
		},
		{
			id: "affiliates-rewards",
			search: {
				title: "Rewards",
				keywords: [
					"reward",
					"credits",
					"claim",
					"pending",
					"balance"
				]
			},
			node: /* @__PURE__ */ jsx(RewardsCard, {
				initialData: initialData?.rewards,
				organizations,
				links
			})
		}
	], [
		initialData?.links,
		initialData?.referrals,
		initialData?.rewards,
		initialData?.pendingRewards,
		initialData?.usage,
		links,
		organizations
	]);
	if (totalLinks === void 0) return null;
	if (totalLinks === 0) return /* @__PURE__ */ jsx(AffiliatesProgramEmpty, {});
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards });
}
function AccountAffiliatesRoute() {
	return /* @__PURE__ */ jsx(AccountAffiliatesPage, { initialData: Route$1.useLoaderData() });
}
export { AccountAffiliatesRoute as component };
