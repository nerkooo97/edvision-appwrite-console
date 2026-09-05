import { t as cn } from "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./CopyableId-DPIWAPIb.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, d as RESOURCE_CARD_SHELL_CLASSNAME, l as RESOURCE_CARD_PADDED_CLASSNAME, n as RESOURCE_CARD_GRID_2_COL_CLASSNAME, o as RESOURCE_CARD_INTERACTIVE_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, Outlet, useMatches, useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { BarChart3, Bot, Clock, ExternalLink, Eye, Globe, LayoutGrid, List, Monitor, MousePointerClick, Settings, Smartphone, Tablet, Trash2, TrendingDown, TrendingUp, Users } from "lucide-react";
var trackedWebsites = [
	{
		id: "507f1f77bcf86cd799439100",
		name: "Main Marketing Site",
		domain: "www.acme.com",
		siteId: "507f1f77bcf86cd799439101",
		isAppwriteSite: true,
		appwriteSiteId: "507f1f77bcf86cd799439090",
		status: "active",
		stats: {
			visitors: 12847,
			visitorsChange: 12.5,
			pageViews: 45230,
			pageViewsChange: 8.3,
			avgDuration: "2m 34s",
			durationChange: -3.2,
			bounceRate: 42.1,
			bounceRateChange: -5.8
		},
		traffic: {
			human: 82,
			ai: 18
		},
		topPages: [
			"/pricing",
			"/features",
			"/docs"
		],
		devices: {
			desktop: 62,
			mobile: 31,
			tablet: 7
		},
		createdAt: "2024-01-15T10:30:00Z",
		lastActivity: (/* @__PURE__ */ new Date(Date.now() - 300 * 1e3)).toISOString()
	},
	{
		id: "507f1f77bcf86cd799439102",
		name: "Documentation Portal",
		domain: "docs.acme.com",
		siteId: "507f1f77bcf86cd799439103",
		isAppwriteSite: true,
		appwriteSiteId: "507f1f77bcf86cd799439091",
		status: "active",
		stats: {
			visitors: 8234,
			visitorsChange: 24.1,
			pageViews: 32100,
			pageViewsChange: 18.7,
			avgDuration: "4m 12s",
			durationChange: 15.3,
			bounceRate: 28.5,
			bounceRateChange: -12.4
		},
		traffic: {
			human: 61,
			ai: 39
		},
		topPages: [
			"/getting-started",
			"/api-reference",
			"/tutorials"
		],
		devices: {
			desktop: 78,
			mobile: 18,
			tablet: 4
		},
		createdAt: "2024-02-20T14:15:00Z",
		lastActivity: (/* @__PURE__ */ new Date(Date.now() - 720 * 1e3)).toISOString()
	},
	{
		id: "507f1f77bcf86cd799439104",
		name: "Customer Dashboard",
		domain: "app.acme.com",
		siteId: "507f1f77bcf86cd799439105",
		isAppwriteSite: false,
		appwriteSiteId: null,
		status: "active",
		stats: {
			visitors: 3421,
			visitorsChange: 5.2,
			pageViews: 18750,
			pageViewsChange: 3.1,
			avgDuration: "8m 45s",
			durationChange: 2.8,
			bounceRate: 15.2,
			bounceRateChange: -1.5
		},
		traffic: {
			human: 96,
			ai: 4
		},
		topPages: [
			"/dashboard",
			"/settings",
			"/billing"
		],
		devices: {
			desktop: 85,
			mobile: 12,
			tablet: 3
		},
		createdAt: "2024-03-05T09:00:00Z",
		lastActivity: (/* @__PURE__ */ new Date(Date.now() - 120 * 1e3)).toISOString()
	},
	{
		id: "507f1f77bcf86cd799439106",
		name: "Blog",
		domain: "blog.acme.com",
		siteId: "507f1f77bcf86cd799439107",
		isAppwriteSite: true,
		appwriteSiteId: "507f1f77bcf86cd799439093",
		status: "inactive",
		stats: {
			visitors: 0,
			visitorsChange: 0,
			pageViews: 0,
			pageViewsChange: 0,
			avgDuration: "0m 0s",
			durationChange: 0,
			bounceRate: 0,
			bounceRateChange: 0
		},
		traffic: {
			human: 0,
			ai: 0
		},
		topPages: [],
		devices: {
			desktop: 0,
			mobile: 0,
			tablet: 0
		},
		createdAt: "2024-03-10T16:30:00Z",
		lastActivity: null
	}
];
function formatNumber(num) {
	if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
	if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
	return num.toString();
}
function StatHighlight({ label, value, change, icon: Icon$1 }) {
	const isPositive = change && change > 0;
	const isNegative = change && change < 0;
	const TrendIcon = isPositive ? TrendingUp : TrendingDown;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 rounded-lg bg-muted/30 px-3 py-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background",
			children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-muted-foreground" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[14px] font-semibold text-foreground",
					children: typeof value === "number" ? formatNumber(value) : value
				}), change !== void 0 && change !== 0 && /* @__PURE__ */ jsxs("span", {
					className: cn("flex items-center gap-0.5 text-[11px] font-medium", isPositive && "text-emerald-600 dark:text-emerald-400", isNegative && "text-red-600 dark:text-red-400"),
					children: [
						/* @__PURE__ */ jsx(TrendIcon, { className: "h-3 w-3" }),
						Math.abs(change),
						"%"
					]
				})]
			})]
		})]
	});
}
function AppwriteSitesBadge() {
	const t = useT();
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }), "Sites"]
			})
		}), /* @__PURE__ */ jsxs(TooltipContent, {
			side: "top",
			children: [/* @__PURE__ */ jsx("p", { children: t("Linked to Appwrite Sites deployment") }), " "]
		})] })
	});
}
function TrafficBreakdown({ traffic }) {
	const t = useT();
	if (traffic.human + traffic.ai === 0) return null;
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 rounded-md bg-muted/50 px-2 py-0.5",
					children: [/* @__PURE__ */ jsx(Users, { className: "h-3 w-3 text-muted-foreground" }), /* @__PURE__ */ jsxs("span", {
						className: "text-[10px] font-medium tabular-nums text-muted-foreground",
						children: [traffic.human, "%"]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 rounded-md bg-violet-500/10 px-2 py-0.5",
					children: [/* @__PURE__ */ jsx(Bot, { className: "h-3 w-3 text-violet-600 dark:text-violet-400" }), /* @__PURE__ */ jsxs("span", {
						className: "text-[10px] font-medium tabular-nums text-violet-600 dark:text-violet-400",
						children: [traffic.ai, "%"]
					})]
				})]
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			children: /* @__PURE__ */ jsx("p", { children: t("Human vs AI traffic (last 30 days)") })
		})] })
	});
}
function DeviceBreakdown({ devices }) {
	const t = useT();
	if (devices.desktop + devices.mobile + devices.tablet === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ jsx(TooltipProvider, {
				delayDuration: 0,
				children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Monitor, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", {
							className: "text-[11px]",
							children: [devices.desktop, "%"]
						})]
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					children: /* @__PURE__ */ jsxs("p", { children: [
						t("Desktop"),
						": ",
						devices.desktop,
						"%"
					] })
				})] })
			}),
			/* @__PURE__ */ jsx(TooltipProvider, {
				delayDuration: 0,
				children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Smartphone, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", {
							className: "text-[11px]",
							children: [devices.mobile, "%"]
						})]
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					children: /* @__PURE__ */ jsxs("p", { children: [
						t("Mobile"),
						": ",
						devices.mobile,
						"%"
					] })
				})] })
			}),
			/* @__PURE__ */ jsx(TooltipProvider, {
				delayDuration: 0,
				children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Tablet, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", {
							className: "text-[11px]",
							children: [devices.tablet, "%"]
						})]
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					children: /* @__PURE__ */ jsxs("p", { children: [
						t("Tablet"),
						": ",
						devices.tablet,
						"%"
					] })
				})] })
			})
		]
	});
}
function View() {
	const t = useT();
	const [searchValue, setSearchValue] = useState("");
	const [viewMode, setViewMode] = useState("grid");
	const navigate = useNavigate();
	const { projectId } = useParams({ strict: false });
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const filteredWebsites = trackedWebsites.filter((site) => site.name.toLowerCase().includes(searchValue.toLowerCase()) || site.domain.toLowerCase().includes(searchValue.toLowerCase()));
	const paginatedWebsites = filteredWebsites.slice((page - 1) * pageSize, page * pageSize);
	const handleSearchChange = (value) => {
		setSearchValue(value);
		setPage(1);
	};
	const ViewToggle = () => /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1 rounded-md border border-border bg-muted/30 p-0.5",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			className: cn("h-7 w-7 p-0", viewMode === "list" ? "bg-background" : "hover:bg-transparent"),
			onClick: () => setViewMode("list"),
			children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
		}), /* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			className: cn("h-7 w-7 p-0", viewMode === "grid" ? "bg-background" : "hover:bg-transparent"),
			onClick: () => setViewMode("grid"),
			children: /* @__PURE__ */ jsx(LayoutGrid, { className: "h-4 w-4" })
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Analytics"),
			searchPlaceholder: t("Search websites..."),
			searchValue,
			onSearchChange: handleSearchChange,
			createLabel: t("Add Website"),
			createAnalyticsAction: "add-website",
			onCreate: () => {},
			showFilters: true,
			fullWidthBorder: true,
			rightContent: /* @__PURE__ */ jsx(ViewToggle, {})
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: viewMode === "grid" ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: RESOURCE_CARD_GRID_2_COL_CLASSNAME,
					children: [paginatedWebsites.map((site) => /* @__PURE__ */ jsxs("div", {
						className: cn(RESOURCE_CARD_PADDED_CLASSNAME, RESOURCE_CARD_INTERACTIVE_CLASSNAME, RESOURCE_CARD_SHELL_CLASSNAME),
						onClick: () => navigate({
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							}
						}),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-start justify-between",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex items-start gap-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "truncate text-[14px] font-medium text-foreground",
											children: site.name
										}), site.isAppwriteSite && /* @__PURE__ */ jsx(AppwriteSitesBadge, {})]
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-0.5 flex min-w-0 items-center gap-1.5 truncate text-[12px] text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate",
											children: site.domain
										}), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
									})]
								})
							}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
									compact: true,
									revealOnGroupHover: true,
									onClick: (e) => e.stopPropagation()
								})
							}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
								align: "end",
								children: [
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: ExternalLink,
										children: t("Visit")
									}) }),
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: Settings,
										children: t("Settings")
									}) }),
									/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: Trash2,
										children: t("Remove")
									}) })
								]
							})] })]
						}), site.status === "active" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								/* @__PURE__ */ jsx(StatHighlight, {
									label: t("Visitors"),
									value: site.stats.visitors,
									change: site.stats.visitorsChange,
									icon: Users
								}),
								/* @__PURE__ */ jsx(StatHighlight, {
									label: t("Page Views"),
									value: site.stats.pageViews,
									change: site.stats.pageViewsChange,
									icon: Eye
								}),
								/* @__PURE__ */ jsx(StatHighlight, {
									label: t("Avg. Duration"),
									value: site.stats.avgDuration,
									change: site.stats.durationChange,
									icon: Clock
								}),
								/* @__PURE__ */ jsx(StatHighlight, {
									label: t("Bounce Rate"),
									value: `${site.stats.bounceRate}%`,
									change: site.stats.bounceRateChange,
									icon: MousePointerClick
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: cn(RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, "flex items-center justify-between"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx(TrafficBreakdown, { traffic: site.traffic }), /* @__PURE__ */ jsx(DeviceBreakdown, { devices: site.devices })]
							}), site.lastActivity && /* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(site.lastActivity),
								className: "text-[11px] text-muted-foreground"
							})]
						})] }) : /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center py-6 text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted",
									children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-muted-foreground" })
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-muted-foreground",
									children: t("No data yet")
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[12px] text-muted-foreground/70",
									children: t("Waiting for first visitor")
								})
							]
						})]
					}, site.id)), paginatedWebsites.length === 0 && /* @__PURE__ */ jsx("div", {
						className: "col-span-full py-12",
						children: /* @__PURE__ */ jsx(EmptyState, {
							icon: Globe,
							title: t("No websites yet"),
							description: t("Add your first website to start tracking analytics"),
							isEmpty: !searchValue,
							hasFilters: !!searchValue,
							iconSize: "md"
						})
					})]
				}), paginatedWebsites.length > 0 && /* @__PURE__ */ jsx(Pagination, {
					currentPage: page,
					totalItems: filteredWebsites.length,
					pageSize,
					pageSizeOptions: [
						10,
						25,
						50,
						100
					],
					onPageChange: setPage,
					onPageSizeChange: (size) => {
						setPageSize(size);
						setPage(1);
					},
					itemLabel: t("websites")
				})]
			}) : paginatedWebsites.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card",
				children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[250px]",
							children: t("Website")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
							children: t("Visitors")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
							children: t("Page Views")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
							children: t("Avg. Duration")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
							children: t("Bounce Rate")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
							children: t("Traffic")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[120px]",
							children: t("Last Activity")
						}),
						/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[50px]" })
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: paginatedWebsites.map((site) => /* @__PURE__ */ jsxs(TableRow, {
					className: "cursor-pointer",
					children: [
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: site.name
										}), site.isAppwriteSite && /* @__PURE__ */ jsx(AppwriteSitesBadge, {})]
									}), /* @__PURE__ */ jsx("p", {
										className: "flex items-center gap-1.5 truncate text-[12px] text-muted-foreground",
										children: site.domain
									})]
								})
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-foreground",
									children: formatNumber(site.stats.visitors)
								}), site.stats.visitorsChange !== 0 && /* @__PURE__ */ jsxs("span", {
									className: cn("text-[11px]", site.stats.visitorsChange > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"),
									children: [
										site.stats.visitorsChange > 0 ? "+" : "",
										site.stats.visitorsChange,
										"%"
									]
								})]
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: formatNumber(site.stats.pageViews)
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: site.stats.avgDuration
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] text-muted-foreground",
								children: [site.stats.bounceRate, "%"]
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: /* @__PURE__ */ jsx(TrafficBreakdown, { traffic: site.traffic })
						}) }),
						/* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/analytics/$websiteId",
							params: {
								projectId,
								websiteId: site.id
							},
							className: "block",
							children: site.lastActivity ? /* @__PURE__ */ jsx(DateTooltip, {
								date: new Date(site.lastActivity),
								className: "text-[12px] text-muted-foreground"
							}) : /* @__PURE__ */ jsx("span", {
								className: "text-[12px] text-muted-foreground/50",
								children: t("Never")
							})
						}) }),
						/* @__PURE__ */ jsx(TableCell, {
							onClick: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {
									compact: true,
									onClick: (e) => e.stopPropagation()
								})
							}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
								align: "end",
								children: [
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: BarChart3,
										children: t("Analytics")
									}) }),
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: ExternalLink,
										children: t("Visit")
									}) }),
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: Settings,
										children: t("Settings")
									}) }),
									/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
									/* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(MenuItemContent, {
										icon: Trash2,
										children: t("Remove")
									}) })
								]
							})] })
						})
					]
				}, site.id)) })] })
			}), /* @__PURE__ */ jsx(Pagination, {
				currentPage: page,
				totalItems: filteredWebsites.length,
				pageSize,
				pageSizeOptions: [
					10,
					25,
					50,
					100
				],
				onPageChange: setPage,
				onPageSizeChange: (size) => {
					setPageSize(size);
					setPage(1);
				},
				itemLabel: t("websites")
			})] }) : /* @__PURE__ */ jsx(EmptyState, {
				icon: Globe,
				title: t("No websites yet"),
				description: t("Add your first website to start tracking analytics"),
				isEmpty: !searchValue,
				hasFilters: !!searchValue,
				variant: "card",
				iconSize: "md"
			})
		})]
	});
}
function AnalyticsPage() {
	if (useMatches().some((match) => match.routeId === "/_public/projects/$projectId/analytics/$websiteId")) return /* @__PURE__ */ jsx(Outlet, {});
	return /* @__PURE__ */ jsx(View, {});
}
export { AnalyticsPage as component };
