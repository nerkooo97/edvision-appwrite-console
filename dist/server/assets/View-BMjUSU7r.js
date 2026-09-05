import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { Mt as useOrganizationPlan, Pt as useOrganizationScopes, fn as resolveOrganizationPlanDisplayLabel } from "./organizations-BKtnlNrj.js";
import { It as useFunctionExecutionsForFunctionChart, Lt as useFunctionGbHoursForFunctionChart, Qr as formatExecutionsValue } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { H as functionsFilterColumns, at as getLimit, ct as getSearch, et as MIN_SEARCH_LENGTH, ft as parseSort, ht as urlFromRouterLocation, lt as getSort, ot as getPage, pt as queryParamToMap, rt as encodeSort, st as getQueryParam, tt as buildListSearchParams, ut as mapToQueryParam } from "./form-field-type-badge-C7qMzJo0.js";
import { l as getStableUsageChartDateRange } from "./chart-interval-Dbrn19qD.js";
import { J as sumUsageChartPoints, Nn as FUNCTIONS_DEFAULT_SORT_BY, Pn as FUNCTIONS_DEFAULT_SORT_ORDER, Tr as useProjectFunctions, Xn as fetchProjectFunction, Zn as fetchProjectFunctions, mr as useDeleteFunction } from "./affiliates-BOg1SHC6.js";
import { c as formatGbHoursValue, s as formatGbHoursTotal } from "./format-metric-6jsfxd5f.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as formatCronExpression } from "./CronScheduleEditor-Dctcdb1H.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { j as Tooltip$1, k as ResponsiveContainer, n as YAxis } from "./CartesianChart-IK-OMdOm.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { k as canShowFunctionSecuritySettings, l as canCreateFunction } from "./console-access-checks-BTMEOKcL.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, i as RESOURCE_CARD_GRID_CLASSNAME, l as RESOURCE_CARD_PADDED_CLASSNAME, o as RESOURCE_CARD_INTERACTIVE_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { t as ConfirmNameDialog } from "./ConfirmNameDialog-CzIMv4mD.js";
import { t as PlanLimitWarning } from "./PlanLimitWarning-Cyo_O_jj.js";
import { t as useServiceListViewMode } from "./use-service-list-view-mode-8H9q__qR.js";
import { t as ServiceListViewToggle } from "./ServiceListViewToggle-BmH3ip7r.js";
import { i as resourceHasVisibleStatus, n as getActiveDeploymentCreatedAt, r as resourceHasInProgressDeployment, t as DeploymentResourceStatusBadges } from "./DeploymentResourceStatusBadges-Bd09ksec.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Bell, Clock, Copy, ExternalLink, FileCode, FileJson, FolderGit, Globe, Link2, Play, Settings, Shield, Square, Trash2, Variable } from "lucide-react";
import { createPortal } from "react-dom";
var EXECUTIONS_COLOR = "var(--chart-brand)";
var GB_HOURS_COLOR = "var(--chart-2)";
function buildEmptyExecutionsSeries() {
	return Array.from({ length: 16 }, (_, index) => ({
		date: "",
		day: new Date(index),
		total: 0,
		executions: 0,
		gbHours: 0
	}));
}
function ChartTooltipBody({ point }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		point.date ? /* @__PURE__ */ jsx("p", {
			className: "text-[12px] font-medium text-foreground",
			children: point.date
		}) : null,
		/* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-1.5 text-[12px] tabular-nums text-muted-foreground",
			children: [
				/* @__PURE__ */ jsx(ChartSeriesDot, { color: EXECUTIONS_COLOR }),
				formatExecutionsValue(point.executions),
				" ",
				t("executions")
			]
		}),
		/* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-1.5 text-[12px] tabular-nums text-muted-foreground",
			children: [
				/* @__PURE__ */ jsx(ChartSeriesDot, { color: GB_HOURS_COLOR }),
				formatGbHoursValue(point.gbHours),
				" ",
				t("GB-hours")
			]
		})
	] });
}
function getChartAnchorElement(portalContainerRef) {
	const root = portalContainerRef.current;
	if (!root) return null;
	return root.querySelector(".recharts-wrapper") ?? root.querySelector(".recharts-responsive-container") ?? root;
}
function PortaledChartTooltip({ active, coordinate, portalContainerRef, children }) {
	const [position, setPosition] = useState(null);
	const coordinateX = coordinate?.x;
	const coordinateY = coordinate?.y;
	useLayoutEffect(() => {
		if (!active || coordinateX == null || coordinateY == null || !portalContainerRef.current) {
			setPosition(null);
			return;
		}
		const anchor = getChartAnchorElement(portalContainerRef);
		if (!anchor) {
			setPosition(null);
			return;
		}
		const rect = anchor.getBoundingClientRect();
		const anchorX = rect.left + coordinateX;
		const anchorY = rect.top + coordinateY;
		const estimatedTooltipHeight = 52;
		const gap = 8;
		const viewportPadding = 8;
		const fitsAbove = anchorY - estimatedTooltipHeight - gap >= viewportPadding;
		const fitsBelow = anchorY + gap + estimatedTooltipHeight <= window.innerHeight - viewportPadding;
		setPosition({
			left: anchorX,
			top: anchorY,
			placement: fitsAbove || !fitsBelow ? "above" : "below"
		});
	}, [
		active,
		coordinateX,
		coordinateY,
		portalContainerRef
	]);
	if (!active || !position || typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none fixed z-[200] max-w-none whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 shadow-md", position.placement === "above" ? "-translate-x-1/2 -translate-y-[calc(100%+8px)]" : "-translate-x-1/2 translate-y-2"),
		style: {
			left: position.left,
			top: position.top
		},
		children
	}), document.body);
}
function ChartTooltip({ active, payload, coordinate, disabled, portalContainerRef }) {
	const point = payload?.[0]?.payload;
	if (disabled || !active || !point) return null;
	return /* @__PURE__ */ jsx(PortaledChartTooltip, {
		active,
		coordinate,
		portalContainerRef,
		children: /* @__PURE__ */ jsx(ChartTooltipBody, { point })
	});
}
function FunctionExecutionsChartPreview({ projectId, functionId, enabled = true, className }) {
	const t = useT();
	const gradientId = useId().replace(/:/g, "");
	const chartContainerRef = useRef(null);
	const dateRange = useMemo(() => getStableUsageChartDateRange(), []);
	const executionsQuery = useFunctionExecutionsForFunctionChart(projectId, functionId, dateRange, enabled);
	const gbHoursQuery = useFunctionGbHoursForFunctionChart(projectId, functionId, dateRange, enabled);
	const executionsPoints = executionsQuery.data?.chartPoints ?? [];
	const gbHoursPoints = gbHoursQuery.data?.chartPoints ?? [];
	const hasPoints = executionsPoints.length > 0 || gbHoursPoints.length > 0;
	const chartData = useMemo(() => {
		if (!hasPoints) return buildEmptyExecutionsSeries();
		const executionsByTime = new Map(executionsPoints.map((point) => [point.day.getTime(), point]));
		const gbHoursByTime = new Map(gbHoursPoints.map((point) => [point.day.getTime(), point]));
		return [...new Set([...executionsPoints.map((point) => point.day.getTime()), ...gbHoursPoints.map((point) => point.day.getTime())])].sort((a, b) => a - b).map((timestamp) => {
			const executionsPoint = executionsByTime.get(timestamp);
			const gbHoursPoint = gbHoursByTime.get(timestamp);
			return {
				...executionsPoint ?? gbHoursPoint,
				total: executionsPoint?.total ?? 0,
				executions: executionsPoint?.total ?? 0,
				gbHours: gbHoursPoint?.total ?? 0
			};
		});
	}, [
		executionsPoints,
		gbHoursPoints,
		hasPoints
	]);
	const executionsTotal = useMemo(() => sumUsageChartPoints(executionsPoints), [executionsPoints]);
	const gbHoursTotal = useMemo(() => sumUsageChartPoints(gbHoursPoints), [gbHoursPoints]);
	const tooltipDisabled = !hasPoints || executionsTotal === 0 && gbHoursTotal === 0;
	return /* @__PURE__ */ jsx("div", {
		className: cn("-mx-4 mt-2 min-w-0 shrink-0 border-t border-border", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 min-w-0 flex-col",
			style: { height: 200 },
			children: [/* @__PURE__ */ jsx("div", {
				className: "shrink-0 px-4 pt-2.5 pb-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-5 min-w-0 items-center justify-between gap-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 text-[12px] font-medium leading-none text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "h-1.5 w-1.5 rounded-full",
									style: { backgroundColor: EXECUTIONS_COLOR },
									"aria-hidden": true
								}),
								t("Executions"),
								/* @__PURE__ */ jsx("span", {
									className: "font-mono tabular-nums text-foreground",
									children: executionsTotal.toLocaleString()
								})
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 text-[12px] font-medium leading-none text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "h-1.5 w-1.5 rounded-full",
									style: { backgroundColor: GB_HOURS_COLOR },
									"aria-hidden": true
								}),
								t("GB-hours"),
								/* @__PURE__ */ jsx("span", {
									className: "font-mono tabular-nums text-foreground",
									children: formatGbHoursTotal(gbHoursTotal)
								})
							]
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "shrink-0 text-[11px] font-medium leading-none text-muted-foreground/80",
						children: t("Last 24 hours")
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				ref: chartContainerRef,
				className: "relative min-h-0 w-full min-w-0 flex-1",
				role: "img",
				"aria-label": `${t("Function executions")}, ${t("GB-hours")}. ${t("Last 24 hours")}`,
				children: /* @__PURE__ */ jsx(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ jsxs(AreaChart, {
						data: chartData,
						margin: {
							top: 4,
							right: 0,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
								id: `executions-${gradientId}`,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: EXECUTIONS_COLOR,
									stopOpacity: .28
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: EXECUTIONS_COLOR,
									stopOpacity: 0
								})]
							}), /* @__PURE__ */ jsxs("linearGradient", {
								id: `gb-hours-${gradientId}`,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: GB_HOURS_COLOR,
									stopOpacity: .18
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: GB_HOURS_COLOR,
									stopOpacity: 0
								})]
							})] }),
							/* @__PURE__ */ jsx(YAxis, {
								yAxisId: "executions",
								hide: true,
								domain: [0, "auto"]
							}),
							/* @__PURE__ */ jsx(YAxis, {
								yAxisId: "gbHours",
								hide: true,
								domain: [0, "auto"]
							}),
							/* @__PURE__ */ jsx(Tooltip$1, {
								content: /* @__PURE__ */ jsx(ChartTooltip, {
									disabled: tooltipDisabled,
									portalContainerRef: chartContainerRef
								}),
								allowEscapeViewBox: {
									x: true,
									y: true
								},
								isAnimationActive: false,
								wrapperStyle: {
									visibility: "hidden",
									pointerEvents: "none",
									width: 0,
									height: 0,
									overflow: "hidden"
								},
								cursor: tooltipDisabled ? false : {
									stroke: "hsl(var(--border))",
									strokeWidth: 1,
									strokeDasharray: "4 4"
								}
							}),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "executions",
								yAxisId: "executions",
								stroke: EXECUTIONS_COLOR,
								strokeWidth: 1.5,
								fill: `url(#executions-${gradientId})`,
								dot: false,
								activeDot: tooltipDisabled ? false : {
									r: 3,
									strokeWidth: 0,
									fill: EXECUTIONS_COLOR
								},
								...CHART_ANIMATION_DISABLED
							}),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "gbHours",
								yAxisId: "gbHours",
								stroke: GB_HOURS_COLOR,
								strokeWidth: 1.5,
								fill: `url(#gb-hours-${gradientId})`,
								dot: false,
								activeDot: tooltipDisabled ? false : {
									r: 3,
									strokeWidth: 0,
									fill: GB_HOURS_COLOR
								},
								...CHART_ANIMATION_DISABLED
							})
						]
					})
				})
			})]
		})
	});
}
function FunctionContextMenu({ projectId, func, children }) {
	const t = useT();
	const navigate = useNavigate();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteMutation = useDeleteFunction(projectId);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const showSecuritySettings = canShowFunctionSecuritySettings(access, features);
	if (!func?.$id) return /* @__PURE__ */ jsx(Fragment, { children });
	const navigateToTab = (tab) => {
		const base = `/projects/${projectId}/functions/${func.$id}`;
		navigate({
			to: tab === "deployments" ? base : `${base}/${tab}`,
			params: {
				projectId,
				functionId: func.$id
			}
		});
	};
	const functionHref = buildConsoleUrl(`/projects/${projectId}/functions/${func.$id}/`);
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	const handleConfirmDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate(func.$id, {
			onSuccess: () => {
				toast.success(t("Function deleted"));
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete function"));
			}
		});
	};
	const hasName = !!func.name;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("deployments"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FolderGit }), t("Deployments")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("domains"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Globe }), t("Domains")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => navigateToTab("executions"),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Play }), t("Executions")]
			}),
			showSecuritySettings && /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => navigateToTab("variables"),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Variable }), t("Variables")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => navigateToTab("security"),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Shield }), t("Security")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => navigateToTab("settings"),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
				})
			] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", func.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				hasName && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", func.name),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", functionHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => fetchProjectFunction(projectId, func.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(functionHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(functionHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDeleteClick,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] }), /* @__PURE__ */ jsx(ConfirmNameDialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		title: "Delete function",
		description: /* @__PURE__ */ jsx(Fragment, { children: t("Are you sure you want to delete this function? This action cannot be undone.") }),
		confirmValue: func.name?.trim() || func.$id,
		confirmPlaceholder: "Enter function name",
		onConfirm: handleConfirmDelete,
		isConfirming: deleteMutation.isPending
	})] });
}
function formatRuntimeLabel$1(runtime) {
	if (!runtime) return "Unknown runtime";
	return runtime.split("-").join(" ");
}
function FunctionCronBadge({ schedule }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs("span", {
			className: "inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 shrink-0" }), t("Cron")]
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t(formatCronExpression(schedule)) }) })] });
}
function FunctionListTriggers({ schedule, eventCount }) {
	const t = useT();
	if (!schedule && eventCount === 0) return /* @__PURE__ */ jsx("span", {
		className: "text-[12px] text-muted-foreground/50",
		children: "-"
	});
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5",
			children: [schedule ? /* @__PURE__ */ jsx(FunctionCronBadge, { schedule }) : null, eventCount > 0 ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Bell, { className: "h-3 w-3 shrink-0" }), eventCount]
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: eventCount === 1 ? t("1 event trigger") : `${eventCount} ${t("event triggers")}` }) })] }) : null]
		})
	});
}
function FunctionsListTable({ projectId, functions, selectedFunctionIds, onToggleFunction, onToggleAll }) {
	const t = useT();
	const navigate = useNavigate();
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card",
		children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
			className: "border-b border-border hover:bg-transparent",
			children: [
				/* @__PURE__ */ jsx(TableHead, {
					className: "w-[40px] px-4",
					children: /* @__PURE__ */ jsx(Checkbox, {
						checked: functions.length > 0 && selectedFunctionIds.size === functions.length,
						onCheckedChange: onToggleAll
					})
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Function")
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Runtime")
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Status")
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Last deployed")
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Triggers")
				}),
				/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Created")
				})
			]
		}) }), /* @__PURE__ */ jsx(TableBody, { children: functions.map((func) => {
			const activeDeploymentCreatedAt = getActiveDeploymentCreatedAt(func);
			return /* @__PURE__ */ jsx(FunctionContextMenu, {
				projectId,
				func: {
					$id: func.$id,
					name: func.name
				},
				children: /* @__PURE__ */ jsxs(TableRow, {
					className: cn("cursor-pointer border-b border-border/50 transition-colors", selectedFunctionIds.has(func.$id) ? "bg-muted" : "hover:bg-muted/30"),
					onClick: (event) => {
						const target = event.target;
						if (target.closest("button") || target.closest("[role=\"checkbox\"]") || target.closest("a")) return;
						navigate({
							to: "/projects/$projectId/functions/$functionId",
							params: {
								projectId,
								functionId: func.$id
							}
						});
					},
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							onClick: (event) => event.stopPropagation(),
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(Checkbox, {
								checked: selectedFunctionIds.has(func.$id),
								onCheckedChange: () => onToggleFunction(func.$id)
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/projects/$projectId/functions/$functionId",
								params: {
									projectId,
									functionId: func.$id
								},
								className: "group block min-w-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
										children: /* @__PURE__ */ jsx(RuntimeIcon, {
											runtime: func.runtime || "",
											size: "sm"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: func.name || t("Unnamed Function")
										}), /* @__PURE__ */ jsx("div", {
											className: "mt-0.5",
											children: /* @__PURE__ */ jsx(CopyableId, {
												id: func.$id,
												size: "xs"
											})
										})]
									})]
								})
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[12px] text-muted-foreground",
								children: t(formatRuntimeLabel$1(func.runtime || ""))
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(DeploymentResourceStatusBadges, { resource: func })
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: activeDeploymentCreatedAt ? /* @__PURE__ */ jsx(DateTooltip, {
								date: activeDeploymentCreatedAt,
								live: true,
								className: "text-[12px] text-muted-foreground"
							}) : /* @__PURE__ */ jsx("span", {
								className: "text-[12px] text-muted-foreground/50",
								children: t("Never")
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(FunctionListTriggers, {
								schedule: func.schedule || void 0,
								eventCount: func.events?.length ?? 0
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-end",
							children: func.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
								date: func.$createdAt,
								className: "text-[12px] text-muted-foreground"
							}) : /* @__PURE__ */ jsx("span", {
								className: "text-[12px] text-muted-foreground/50",
								children: "-"
							})
						})
					]
				})
			}, func.$id);
		}) })] })
	});
}
function getFunctionsServiceTabs(projectId) {
	return [{
		id: "functions",
		label: "Functions",
		to: "/projects/$projectId/functions/",
		params: { projectId }
	}, {
		id: "templates",
		label: "Templates",
		to: "/projects/$projectId/functions/templates",
		params: { projectId }
	}];
}
function formatRuntimeLabel(runtime) {
	if (!runtime) return "Unknown runtime";
	return runtime.split("-").join(" ");
}
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const search = useSearch({ strict: false });
	const isFunctionsIndex = location.pathname.replace(/\/$/, "") === `/projects/${projectId}/functions`;
	const defaultFunctionsSort = {
		sortBy: FUNCTIONS_DEFAULT_SORT_BY,
		sortOrder: FUNCTIONS_DEFAULT_SORT_ORDER
	};
	const functionsListParams = useMemo(() => {
		if (!isFunctionsIndex || typeof search !== "object") return null;
		const url = urlFromRouterLocation(location, window.location.origin);
		const parsed = parseSort(search.sort) ?? getSort(url) ?? defaultFunctionsSort;
		const pageFromSearch = search.page != null ? typeof search.page === "number" ? search.page : Number(search.page) : void 0;
		const limitFromSearch = search.limit != null ? typeof search.limit === "number" ? search.limit : Number(search.limit) : void 0;
		const page = Number.isInteger(pageFromSearch) && (pageFromSearch ?? 0) >= 1 ? pageFromSearch : getPage(url, 1);
		const limit = Number.isInteger(limitFromSearch) && (limitFromSearch ?? 0) >= 1 ? limitFromSearch : getLimit(url, 12);
		return {
			search: getSearch(url) ?? search.search,
			page,
			limit,
			filterMap: queryParamToMap(getQueryParam(url) ?? search.query ?? null),
			sortBy: parsed.sortBy,
			sortOrder: parsed.sortOrder
		};
	}, [
		isFunctionsIndex,
		search,
		location.pathname,
		location.search,
		projectId
	]);
	const urlPage = functionsListParams?.page ?? 1;
	const urlLimit = functionsListParams?.limit ?? 12;
	const urlSearch = functionsListParams?.search;
	const urlSortBy = functionsListParams?.sortBy ?? "$createdAt";
	const urlSortOrder = functionsListParams?.sortOrder ?? "desc";
	const filterMap = functionsListParams?.filterMap ?? /* @__PURE__ */ new Map();
	const filterQueries = filterMap.size > 0 ? Array.from(filterMap.values()) : void 0;
	const filterQueryString = filterMap.size > 0 ? mapToQueryParam(filterMap) : "";
	const [searchInput, setSearchInput] = useState("");
	const searchDebounceRef = useRef(null);
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [displayedSearch, setDisplayedSearch] = useState(void 0);
	const [displayedSortBy, setDisplayedSortBy] = useState(FUNCTIONS_DEFAULT_SORT_BY);
	const [displayedSortOrder, setDisplayedSortOrder] = useState(FUNCTIONS_DEFAULT_SORT_ORDER);
	const [displayedFilterQueryString, setDisplayedFilterQueryString] = useState("");
	const displayedFilterQueries = useMemo(() => {
		if (!displayedFilterQueryString) return void 0;
		const map = queryParamToMap(displayedFilterQueryString);
		return map.size > 0 ? Array.from(map.values()) : void 0;
	}, [displayedFilterQueryString]);
	const hasInitedDisplayedRef = useRef(false);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [selectedFunctions, setSelectedFunctions] = useState(/* @__PURE__ */ new Set());
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const { viewMode, setViewMode } = useServiceListViewMode("functions");
	useEffect(() => {
		setSearchInput(urlSearch ?? "");
	}, [urlSearch]);
	useEffect(() => {
		if (!isFunctionsIndex) return;
		setRequestedPage((prev) => prev === urlPage ? prev : urlPage);
	}, [
		isFunctionsIndex,
		urlPage,
		urlLimit
	]);
	useEffect(() => {
		if (!isFunctionsIndex || !functionsListParams) return;
		if (!hasInitedDisplayedRef.current) {
			setDisplayedPage(urlPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
			hasInitedDisplayedRef.current = true;
		}
	}, [
		isFunctionsIndex,
		functionsListParams,
		urlPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString
	]);
	useEffect(() => {
		if (!isFunctionsIndex) return;
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = searchInput.trim();
			if (trimmed === (urlSearch ?? "")) return;
			if (trimmed.length > 0 && trimmed.length < 3) return;
			navigateToFunctionsList({
				search: trimmed || void 0,
				query: filterQueryString || void 0,
				page: 1,
				limit: urlLimit,
				sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
			});
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [
		searchInput,
		projectId,
		navigate,
		urlSearch,
		urlLimit,
		urlSortBy,
		urlSortOrder,
		filterQueryString,
		isFunctionsIndex
	]);
	const { total, isLoading: functionsLoading, isFetching: functionsFetching, isFetched: functionsFetched, error } = useProjectFunctions(projectId, requestedPage - 1, urlLimit, urlSearch ?? void 0, filterQueries, urlSortBy, urlSortOrder);
	const { functions, total: displayedTotal, isLoading: displayedLoading, refetch: refetchDisplayedFunctions } = useProjectFunctions(projectId, displayedPage - 1, urlLimit, displayedSearch ?? void 0, displayedFilterQueries, displayedSortBy, displayedSortOrder);
	useEffect(() => {
		if (!isFunctionsIndex || functionsFetching || functionsLoading || !functionsFetched) return;
		if (!(urlPage === displayedPage && (urlSearch ?? "") === (displayedSearch ?? "") && filterQueryString === displayedFilterQueryString && urlSortBy === displayedSortBy && urlSortOrder === displayedSortOrder)) {
			setDisplayedPage(urlPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
		}
	}, [
		isFunctionsIndex,
		functionsFetching,
		functionsLoading,
		functionsFetched,
		urlPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString,
		displayedPage,
		displayedSearch,
		displayedSortBy,
		displayedSortOrder,
		displayedFilterQueryString
	]);
	const hasInProgressDeployment = useMemo(() => functions.some((func) => resourceHasInProgressDeployment(func)), [functions]);
	useEffect(() => {
		if (!hasInProgressDeployment) return;
		const interval = setInterval(() => {
			refetchDisplayedFunctions();
		}, 5e3);
		return () => clearInterval(interval);
	}, [hasInProgressDeployment, refetchDisplayedFunctions]);
	const handleFunctionsSortChange = (sortBy, sortOrder) => {
		navigateToFunctionsList({
			search: urlSearch ?? void 0,
			query: filterQueryString || void 0,
			page: 1,
			limit: urlLimit,
			sort: sortBy !== "$createdAt" || sortOrder !== "desc" ? encodeSort(sortBy, sortOrder) : void 0
		});
	};
	const applyFilter = (compactKey, queryStr, replaceKey) => {
		const next = new Map(filterMap);
		if (replaceKey) next.delete(replaceKey);
		next.set(compactKey, queryStr);
		navigateToFunctionsList({
			search: urlSearch ?? void 0,
			query: mapToQueryParam(next) || void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const removeFilter = (compactKey) => {
		const next = new Map(filterMap);
		next.delete(compactKey);
		navigateToFunctionsList({
			search: urlSearch ?? void 0,
			query: next.size > 0 ? mapToQueryParam(next) : void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const clearAllFilters = () => {
		navigateToFunctionsList({
			search: urlSearch ?? void 0,
			query: void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
		setFiltersOpen(false);
	};
	const navigateToFunctionsList = (params) => {
		const hasQueryKey = "query" in params;
		const hasSearchKey = "search" in params;
		const hasSortKey = "sort" in params;
		navigate({
			to: "/projects/$projectId/functions",
			params: { projectId },
			search: (prev) => {
				const built = buildListSearchParams({
					search: hasSearchKey ? params.search : urlSearch ?? void 0,
					query: hasQueryKey ? params.query : filterQueryString || void 0,
					page: params.page ?? 1,
					limit: params.limit ?? urlLimit,
					sort: hasSortKey ? params.sort : urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				if (params.page === 1) delete next.page;
				if (hasQueryKey && params.query === void 0) delete next.query;
				if (hasSearchKey && (params.search === void 0 || params.search === "")) delete next.search;
				if (hasSortKey && params.sort === void 0) delete next.sort;
				return next;
			},
			replace: true
		});
	};
	const showLoading = displayedLoading && functions.length === 0;
	const { data: totalFunctionsData } = useQuery({
		queryKey: [
			"functions",
			"project",
			projectId,
			0,
			urlLimit,
			void 0,
			void 0,
			FUNCTIONS_DEFAULT_SORT_BY,
			FUNCTIONS_DEFAULT_SORT_ORDER
		],
		queryFn: () => fetchProjectFunctions(projectId, 0, urlLimit, void 0, void 0, FUNCTIONS_DEFAULT_SORT_BY, FUNCTIONS_DEFAULT_SORT_ORDER),
		enabled: !!projectId,
		staleTime: 30 * 1e3,
		refetchOnMount: false
	});
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const { features } = useConsoleProfile();
	const { showFunctionsLocalEditor } = useDebugOverrides();
	const { access } = useOrganizationScopes(project?.teamId);
	const localEditorBeforeCreateButtons = showFunctionsLocalEditor ? /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "h-9 w-9 gap-0 p-0 text-[13px] @[640px]:w-auto @[640px]:gap-1.5 @[640px]:px-3",
				asChild: true,
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/projects/$projectId/functions/editor",
					params: { projectId },
					"aria-label": t("Local editor"),
					children: [/* @__PURE__ */ jsx(FileCode, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
						className: "hidden @[640px]:inline",
						children: t("Local editor")
					})]
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: t("Edit code locally and prepare gzip for deployment") })
		})] })
	}) : void 0;
	const totalFunctionsCount = totalFunctionsData?.total || 0;
	const noCreatePermission = !canCreateFunction(access, features);
	const functionsLimit = organizationPlan?.functions ?? 0;
	const isCreateDisabled = noCreatePermission || functionsLimit > 0 && totalFunctionsCount >= functionsLimit;
	useEffect(() => {
		const searchString = typeof location.search === "string" ? location.search : new URLSearchParams(location.search).toString();
		const urlParams = new URLSearchParams(searchString);
		const from = urlParams.get("from");
		const to = urlParams.get("to");
		if (from === "github") {
			if (to === "template") navigate({
				to: "/projects/$projectId/functions/create",
				params: { projectId }
			});
			else if (to === "cover") toast.info(t("Function creation coming soon"));
		}
	}, [
		location.search,
		navigate,
		projectId,
		t
	]);
	useEffect(() => {
		setSelectedFunctions(/* @__PURE__ */ new Set());
		setDeleteDialogOpen(false);
	}, [
		location.pathname,
		projectId,
		urlSearch,
		filterQueryString
	]);
	const bulkDeleteMutation = useMutation({
		mutationFn: async (functionIds) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			await Promise.all(functionIds.map((functionId) => projectSdk.functions.delete({ functionId })));
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: Dependencies.FUNCTIONS });
			toast.success(selectedFunctions.size === 1 ? t("Function deleted successfully") : `${t("Successfully deleted")} ${selectedFunctions.size} ${t("functions")}`);
			setSelectedFunctions(/* @__PURE__ */ new Set());
			setDeleteDialogOpen(false);
		},
		onError: (error$1) => {
			toast.error(getErrorMessage(error$1) || t("Failed to delete functions"));
		}
	});
	const handleBulkDelete = () => {
		if (selectedFunctions.size === 0) return;
		setDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedFunctions.size === 0) return;
		bulkDeleteMutation.mutate(Array.from(selectedFunctions));
	};
	const toggleFunction = (functionId) => {
		const newSelected = new Set(selectedFunctions);
		if (newSelected.has(functionId)) newSelected.delete(functionId);
		else newSelected.add(functionId);
		setSelectedFunctions(newSelected);
	};
	const toggleAllFunctions = () => {
		if (selectedFunctions.size === functions.length) setSelectedFunctions(/* @__PURE__ */ new Set());
		else setSelectedFunctions(new Set(functions.map((func) => func.$id)));
	};
	const handleSearchChange = (value) => {
		setSearchInput(value);
		setRequestedPage(1);
		setDisplayedPage(1);
		setSelectedFunctions(/* @__PURE__ */ new Set());
	};
	const handleCreateFunction = () => {
		navigate({
			to: "/projects/$projectId/functions/create",
			params: { projectId }
		});
	};
	const functionsTabs = useMemo(() => getFunctionsServiceTabs(projectId).map((tab) => ({
		...tab,
		label: t(tab.label)
	})), [projectId, t]);
	const filtersMatch = (displayedSearch ?? "") === (urlSearch ?? "") && displayedFilterQueryString === filterQueryString;
	const hasFunctions = (displayedTotal ?? 0) > 0;
	const hasFilters = urlSearch && urlSearch.length > 0 || filterMap.size > 0;
	const noSearchResults = hasFilters && filtersMatch && (displayedTotal ?? 0) === 0 && !displayedLoading;
	const viewToggle = /* @__PURE__ */ jsx(ServiceListViewToggle, {
		viewMode,
		onViewModeChange: setViewMode
	});
	if (error) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Functions"),
			tabs: functionsTabs,
			activeTab: "functions",
			searchPlaceholder: t("Search functions..."),
			searchValue: searchInput,
			onSearchChange: handleSearchChange,
			createLabel: t("Create function"),
			createAnalyticsAction: "create-function",
			onCreate: handleCreateFunction,
			createDisabled: isCreateDisabled,
			createDisabledTooltip: noCreatePermission ? t("You don't have permission to create functions.") : void 0,
			fullWidthBorder: true,
			showFilters: true,
			rightContent: viewToggle,
			filterTrigger: /* @__PURE__ */ jsx(FiltersPopover, {
				open: filtersOpen,
				onOpenChange: setFiltersOpen,
				columns: functionsFilterColumns,
				filterMap,
				onRemoveFilter: removeFilter,
				onClearAll: clearAllFilters,
				onApplyFilter: applyFilter,
				resourceLabel: "functions",
				filterScope: "functions",
				onApplyQuery: (queryParam, sortParam) => navigateToFunctionsList({
					search: urlSearch ?? void 0,
					query: queryParam ?? void 0,
					page: 1,
					limit: urlLimit,
					sort: sortParam ?? void 0
				}),
				sortBy: urlSortBy,
				sortOrder: urlSortOrder,
				onSortChange: handleFunctionsSortChange,
				defaultSortParam: encodeSort(FUNCTIONS_DEFAULT_SORT_BY, FUNCTIONS_DEFAULT_SORT_ORDER),
				onReset: () => {
					navigate({
						to: "/projects/$projectId/functions",
						params: { projectId },
						search: {
							page: 1,
							limit: urlLimit
						},
						replace: true
					});
				},
				teamId: project?.teamId
			}),
			beforeCreateButtons: localEditorBeforeCreateButtons
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card py-12 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: t("Failed to load functions. Please try again.")
				})
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Functions"),
			tabs: functionsTabs,
			activeTab: "functions",
			searchPlaceholder: t("Search functions..."),
			searchValue: searchInput,
			onSearchChange: handleSearchChange,
			createLabel: t("Create function"),
			createAnalyticsAction: "create-function",
			onCreate: handleCreateFunction,
			createDisabled: isCreateDisabled,
			createDisabledTooltip: noCreatePermission ? t("You don't have permission to create functions.") : void 0,
			fullWidthBorder: true,
			beforeCreateButtons: localEditorBeforeCreateButtons,
			showFilters: true,
			rightContent: viewToggle,
			filterTrigger: /* @__PURE__ */ jsx(FiltersPopover, {
				open: filtersOpen,
				onOpenChange: setFiltersOpen,
				columns: functionsFilterColumns,
				filterMap,
				onRemoveFilter: removeFilter,
				onClearAll: clearAllFilters,
				onApplyFilter: applyFilter,
				resourceLabel: "functions",
				filterScope: "functions",
				onApplyQuery: (queryParam, sortParam) => navigateToFunctionsList({
					search: urlSearch ?? void 0,
					query: queryParam ?? void 0,
					page: 1,
					limit: urlLimit,
					sort: sortParam ?? void 0
				}),
				sortBy: urlSortBy,
				sortOrder: urlSortOrder,
				onSortChange: handleFunctionsSortChange,
				defaultSortParam: encodeSort(FUNCTIONS_DEFAULT_SORT_BY, FUNCTIONS_DEFAULT_SORT_ORDER),
				onReset: () => {
					navigate({
						to: "/projects/$projectId/functions",
						params: { projectId },
						search: {
							page: 1,
							limit: urlLimit
						},
						replace: true
					});
				},
				teamId: project?.teamId
			}),
			contentAfterBorder: project && organizationPlan !== void 0 && totalFunctionsData !== void 0 ? /* @__PURE__ */ jsx(PlanLimitWarning, {
				currentCount: totalFunctionsCount,
				limit: functionsLimit,
				planName: resolveOrganizationPlanDisplayLabel({
					planName: organizationPlan?.name ?? null,
					planId: organizationPlan?.$id
				}),
				resourceName: "functions",
				orgId: project?.teamId,
				fullWidth: false
			}) : void 0
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: [
				/* @__PURE__ */ jsx(Fragment, { children: showLoading ? /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card py-12 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Loading functions...")
					})
				}) : noSearchResults ? /* @__PURE__ */ jsx(EmptyState, {
					icon: Play,
					isEmpty: false,
					hasFilters,
					variant: "card"
				}) : !hasFunctions ? /* @__PURE__ */ jsx(EmptyState, {
					icon: Play,
					title: hasFilters ? void 0 : t("No functions yet"),
					description: hasFilters ? void 0 : t("Create your first function to deploy and manage serverless functions"),
					isEmpty: true,
					hasFilters,
					variant: "card"
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [viewMode === "list" ? /* @__PURE__ */ jsx(FunctionsListTable, {
					projectId,
					functions,
					selectedFunctionIds: selectedFunctions,
					onToggleFunction: toggleFunction,
					onToggleAll: toggleAllFunctions
				}) : /* @__PURE__ */ jsx("div", {
					className: RESOURCE_CARD_GRID_CLASSNAME,
					children: functions.map((func) => {
						const activeDeploymentCreatedAt = getActiveDeploymentCreatedAt(func);
						const showStatus = resourceHasVisibleStatus(func);
						return /* @__PURE__ */ jsx(FunctionContextMenu, {
							projectId,
							func: {
								$id: func.$id,
								name: func.name
							},
							children: /* @__PURE__ */ jsx(Link, {
								to: "/projects/$projectId/functions/$functionId",
								params: {
									projectId,
									functionId: func.$id
								},
								className: "block min-w-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: cn(RESOURCE_CARD_PADDED_CLASSNAME, RESOURCE_CARD_INTERACTIVE_CLASSNAME, "pb-0"),
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
												children: /* @__PURE__ */ jsx(RuntimeIcon, {
													runtime: func.runtime || "",
													size: "md",
													className: "h-5 w-5"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "min-w-0 flex-1 overflow-hidden",
												children: [
													/* @__PURE__ */ jsx("h3", {
														className: "truncate text-[14px] font-medium text-foreground",
														children: func.name || t("Unnamed Function")
													}),
													/* @__PURE__ */ jsx("p", {
														className: "mt-0.5 truncate text-[12px] text-muted-foreground whitespace-nowrap",
														children: t(formatRuntimeLabel(func.runtime || ""))
													}),
													/* @__PURE__ */ jsx("div", {
														className: "mt-1.5",
														children: /* @__PURE__ */ jsx(CopyableId, {
															id: func.$id,
															size: "xs",
															maxWidth: 120
														})
													})
												]
											})]
										}),
										/* @__PURE__ */ jsx(FunctionExecutionsChartPreview, {
											projectId,
											functionId: func.$id,
											enabled: features.usageStats
										}),
										/* @__PURE__ */ jsx("div", {
											className: RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME,
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex min-w-0 flex-nowrap items-center gap-x-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
												children: [
													showStatus ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DeploymentResourceStatusBadges, { resource: func }), /* @__PURE__ */ jsx("span", {
														className: "shrink-0 text-[10px] text-muted-foreground/40",
														"aria-hidden": true,
														children: "·"
													})] }) : null,
													/* @__PURE__ */ jsxs("div", {
														className: "flex shrink-0 items-center gap-0.5",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-[12px] text-muted-foreground/70",
															children: t("Deployed")
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[12px] font-medium text-muted-foreground",
															children: activeDeploymentCreatedAt ? /* @__PURE__ */ jsx(DateTooltip, {
																date: activeDeploymentCreatedAt,
																live: true,
																className: "text-[12px] font-medium text-muted-foreground"
															}) : t("Never")
														})]
													}),
													func.schedule?.trim() ? /* @__PURE__ */ jsxs("div", {
														className: "ms-auto flex min-w-0 shrink items-center gap-1",
														children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
															className: "truncate text-[12px] font-medium text-muted-foreground",
															title: func.schedule,
															children: t(formatCronExpression(func.schedule))
														})]
													}) : null
												]
											})
										})
									]
								})
							})
						}, func.$id);
					})
				}), /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: displayedTotal ?? total,
					pageSize: urlLimit,
					pageSizeOptions: [
						12,
						18,
						36,
						72
					],
					onPageChange: (page) => {
						setRequestedPage(page);
						setSelectedFunctions(/* @__PURE__ */ new Set());
						navigateToFunctionsList({
							search: urlSearch ?? void 0,
							query: filterQueryString || void 0,
							page,
							limit: urlLimit,
							sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
						});
					},
					onPageSizeChange: (size) => {
						setRequestedPage(1);
						setDisplayedPage(1);
						setSelectedFunctions(/* @__PURE__ */ new Set());
						navigateToFunctionsList({
							search: urlSearch ?? void 0,
							query: filterQueryString || void 0,
							page: 1,
							limit: size,
							sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
						});
					},
					itemLabel: t("functions")
				})] }) }),
				selectedFunctions.size > 0 && /* @__PURE__ */ jsx("div", {
					className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
						children: [/* @__PURE__ */ jsxs(Badge, {
							variant: "secondary",
							className: "h-6 px-2.5",
							children: [
								selectedFunctions.size,
								" ",
								selectedFunctions.size > 1 ? t("functions") : t("function"),
								" ",
								t("selected")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedFunctions(/* @__PURE__ */ new Set()),
								className: "h-8 text-xs",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								size: "sm",
								onClick: handleBulkDelete,
								disabled: bulkDeleteMutation.isPending,
								className: "h-8 gap-2",
								children: t("Delete")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete functions") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									selectedFunctions.size,
									" ",
									selectedFunctions.size > 1 ? t("functions") : t("function"),
									"?",
									" ",
									t("This action cannot be undone.")
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: bulkDeleteMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: confirmBulkDelete,
								disabled: bulkDeleteMutation.isPending,
								children: t("Delete")
							})]
						})]
					})
				})
			]
		})]
	});
}
export { View as t };
