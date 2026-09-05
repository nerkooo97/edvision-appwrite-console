import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as buttonVariants, t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { a as serviceHeaderIconOnlyButton, i as serviceHeaderFiltersLabel, n as SERVICE_HEADER_TITLE_CONTAINER, o as serviceHeaderShowLabel, r as serviceHeaderFiltersButton, t as SERVICE_HEADER_CONTAINER } from "./service-header-container-CwwZ6im7.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { ChevronRight, ChevronUp, Download, Filter, Plus, Search, Upload } from "lucide-react";
var createButtonClassName = cn(serviceHeaderIconOnlyButton, "text-[13px] font-medium");
function ServiceHeaderCreateButton({ createLabel, createDisabled, createDisabledTooltip, createTo, createParams, onCreate, createAnalyticsAction }) {
	const t = useT();
	const label = /* @__PURE__ */ jsx("span", {
		className: serviceHeaderShowLabel,
		children: createLabel
	});
	const analytics = createAnalyticsAction ? analyticsAttrs(createAnalyticsAction) : void 0;
	if (createDisabled) return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("div", { children: createTo && createParams ? /* @__PURE__ */ jsxs("span", {
				className: cn(buttonVariants({ variant: "brandCta" }), createButtonClassName, "inline-flex cursor-not-allowed items-center justify-center opacity-50 pointer-events-none"),
				"aria-disabled": true,
				children: [
					/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
					label,
					/* @__PURE__ */ jsx("span", {
						className: "sr-only @[640px]:hidden",
						children: createLabel
					})
				]
			}) : /* @__PURE__ */ jsxs(Button, {
				variant: "brandCta",
				onClick: onCreate,
				disabled: true,
				className: createButtonClassName,
				"aria-label": createLabel,
				children: [
					/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
					label,
					/* @__PURE__ */ jsx("span", {
						className: "sr-only @[640px]:hidden",
						children: createLabel
					})
				]
			}) })
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: createDisabledTooltip ? t(createDisabledTooltip) : t("You've reached the limit for this resource on your plan") })
		})] })
	});
	if (createTo && createParams) return /* @__PURE__ */ jsx(Button, {
		variant: "brandCta",
		asChild: true,
		className: createButtonClassName,
		children: /* @__PURE__ */ jsxs(Link, {
			to: createTo,
			params: createParams,
			"aria-label": createLabel,
			...analytics,
			children: [
				/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
				label,
				/* @__PURE__ */ jsx("span", {
					className: "sr-only @[640px]:hidden",
					children: createLabel
				})
			]
		})
	});
	return /* @__PURE__ */ jsxs(Button, {
		variant: "brandCta",
		onClick: onCreate,
		className: createButtonClassName,
		"aria-label": createLabel,
		...analytics,
		children: [
			/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 shrink-0" }),
			label,
			/* @__PURE__ */ jsx("span", {
				className: "sr-only @[640px]:hidden",
				children: createLabel
			})
		]
	});
}
const ServiceHeader = forwardRef(function ServiceHeader$1({ title, tabs, activeTab, onTabChange, searchPlaceholder = "Search...", searchValue = "", onSearchChange, createLabel, onCreate, createTo, createParams, createAnalyticsAction, createDisabled = false, createDisabledTooltip, showFilters = false, onFilterClick, filterTrigger, fullWidthBorder = false, fullWidth = false, rightContent, beforeCreateButtons, beforeRefreshButtons, beforeSearchButtons, showRefresh = false, onRefresh, isRefreshing = false, showImport = false, onImport, importTooltip, importDisabled = false, showExport = false, onExport, exportTooltip, exportDisabled = false, collapsible = false, breadcrumbs, hideTitle = false, titleRightContent, contentAfterBorder, showToolbarBottomBorder = false }, ref) {
	const t = useT();
	const searchInputRef = useRef(null);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const hasToolbar = onSearchChange || showFilters || createLabel && (onCreate || createTo && createParams) || rightContent || showRefresh || showImport || showExport || beforeCreateButtons || beforeRefreshButtons || beforeSearchButtons;
	const showToolbarRow = hasToolbar || collapsible;
	const hasLinkTabs = tabs && tabs.length > 0 && activeTab && tabs.some((tab) => !!tab.to);
	const hasButtonTabs = tabs && tabs.length > 0 && activeTab && !!onTabChange;
	const hasTabs = hasLinkTabs || hasButtonTabs;
	useImperativeHandle(ref, () => ({ focusSearch: () => {
		searchInputRef.current?.focus();
	} }));
	const tabsContent = hasTabs ? /* @__PURE__ */ jsx("div", {
		className: cn("flex gap-0 overflow-x-auto px-4 sm:px-6", fullWidthBorder && !fullWidth && "mx-auto w-full max-w-7xl", fullWidthBorder && fullWidth && "w-full"),
		role: "tablist",
		children: tabs.map((tab) => {
			const isActive = activeTab === tab.id;
			const tabContent = /* @__PURE__ */ jsxs(Fragment, { children: [
				t(tab.label),
				tab.count !== void 0 && /* @__PURE__ */ jsx("span", {
					className: cn("rounded-full px-1.5 py-0.5 text-[10px]", isActive ? "bg-accent text-foreground" : "bg-muted text-muted-foreground"),
					children: tab.count
				}),
				isActive && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 start-0 end-0 h-[2px] bg-foreground" })
			] });
			if (tab.to) return /* @__PURE__ */ jsx(Link, {
				to: tab.to,
				params: tab.params,
				replace: true,
				onMouseDown: (e) => e.preventDefault(),
				role: "tab",
				"aria-selected": isActive,
				className: cn("relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
				children: tabContent
			}, tab.id);
			return /* @__PURE__ */ jsx("button", {
				type: "button",
				role: "tab",
				"aria-selected": isActive,
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => onTabChange?.(tab.id),
				className: cn("relative flex shrink-0 cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
				children: tabContent
			}, tab.id);
		})
	}) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("min-w-0 w-full", fullWidthBorder && "w-full"),
		children: [
			!isCollapsed && (!hideTitle || hasTabs) && /* @__PURE__ */ jsxs("div", {
				className: "legacy-theme-header",
				children: [!hideTitle && /* @__PURE__ */ jsxs("div", {
					className: cn("flex flex-col gap-1 overflow-visible px-4 pt-6 sm:px-6", hasTabs ? "pb-4" : contentAfterBorder ? "pb-4" : "pb-6", fullWidthBorder && !fullWidth && "mx-auto w-full max-w-7xl", fullWidthBorder && fullWidth && "w-full"),
					children: [breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsx("nav", {
						className: "flex items-center gap-1 text-[13px]",
						children: breadcrumbs.map((breadcrumb, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [breadcrumb.href ? /* @__PURE__ */ jsx(Link, {
							to: breadcrumb.href,
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: breadcrumb.label
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: breadcrumb.label
						}), index < breadcrumbs.length - 1 && /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" })] }, breadcrumb.label))
					}), /* @__PURE__ */ jsxs("div", {
						className: cn("@container/service-header-title", "flex min-w-0 flex-row items-center justify-between gap-x-4"),
						children: [/* @__PURE__ */ jsx("h1", {
							className: "min-w-0 flex-1 overflow-hidden text-[17px] font-semibold leading-tight text-foreground",
							children: typeof title === "string" ? /* @__PURE__ */ jsx("span", {
								className: "block truncate",
								children: title
							}) : title
						}), titleRightContent ? /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 items-center justify-end gap-2 overflow-visible @[560px]:gap-3",
							children: titleRightContent
						}) : null]
					})]
				}), fullWidthBorder ? /* @__PURE__ */ jsx("div", {
					className: "w-full border-b border-border",
					children: tabsContent
				}) : hasTabs ? /* @__PURE__ */ jsx("div", {
					className: "flex gap-0 overflow-x-auto border-b border-border px-4 sm:px-6",
					role: "tablist",
					children: tabs.map((tab) => {
						const isActive = activeTab === tab.id;
						const tabContent = /* @__PURE__ */ jsxs(Fragment, { children: [t(tab.label), isActive && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 start-0 end-0 h-[2px] bg-foreground" })] });
						if (tab.to) return /* @__PURE__ */ jsx(Link, {
							to: tab.to,
							params: tab.params,
							replace: true,
							onMouseDown: (e) => e.preventDefault(),
							role: "tab",
							"aria-selected": isActive,
							className: cn("relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
							children: tabContent
						}, tab.id);
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							role: "tab",
							"aria-selected": isActive,
							onMouseDown: (e) => e.preventDefault(),
							onClick: () => onTabChange?.(tab.id),
							className: cn("relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
							children: tabContent
						}, tab.id);
					})
				}) : /* @__PURE__ */ jsx("div", { className: "border-b border-border" })]
			}),
			contentAfterBorder ? /* @__PURE__ */ jsx("div", {
				className: "min-w-0",
				children: contentAfterBorder
			}) : null,
			showToolbarRow && /* @__PURE__ */ jsxs("div", {
				className: cn("@container/service-header", "flex min-w-0 flex-nowrap items-center gap-2 px-4 @[640px]:gap-3 sm:px-6", hasToolbar ? "py-4" : "py-2", fullWidthBorder && !fullWidth && "mx-auto w-full max-w-7xl", fullWidthBorder && fullWidth && "w-full", (isCollapsed || showToolbarBottomBorder) && "border-b border-border"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-2 @[640px]:gap-3",
					children: [
						beforeSearchButtons ? /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 items-center gap-1.5 @[640px]:gap-2",
							children: beforeSearchButtons
						}) : null,
						onSearchChange && /* @__PURE__ */ jsxs("div", {
							className: "relative min-w-0 w-full max-w-xs flex-1 shrink @[520px]:w-64 @[520px]:max-w-none @[520px]:flex-none @[520px]:shrink-0",
							children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
								ref: searchInputRef,
								type: "text",
								placeholder: t(searchPlaceholder),
								value: searchValue,
								onChange: (e) => onSearchChange(e.target.value),
								className: "h-9 w-full min-w-0 rounded-md border border-border bg-accent/50 ps-10 pe-4 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
							})]
						}),
						showFilters && (filterTrigger ?? /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							onClick: onFilterClick,
							className: cn("border-border bg-transparent text-[13px] text-muted-foreground hover:bg-accent hover:text-foreground", "h-9 shrink-0 gap-0 px-2.5 @[560px]:gap-1.5 @[560px]:px-3"),
							children: [/* @__PURE__ */ jsx(Filter, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only @[560px]:not-sr-only",
								children: t("Filters")
							})]
						})),
						rightContent ? /* @__PURE__ */ jsx("div", {
							className: "hidden shrink-0 @[480px]:block",
							children: rightContent
						}) : null
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "ms-auto flex min-w-0 shrink-0 items-center gap-1.5 @[640px]:gap-2",
					children: [
						beforeRefreshButtons ? /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 items-center gap-1.5 @[640px]:gap-2",
							children: beforeRefreshButtons
						}) : null,
						showRefresh ? /* @__PURE__ */ jsx(RefreshButton, {
							onClick: onRefresh,
							isRefreshing
						}) : null,
						/* @__PURE__ */ jsxs(TooltipProvider, {
							delayDuration: 0,
							children: [showImport && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									onClick: onImport,
									disabled: importDisabled,
									className: "h-9 w-9 shrink-0 p-0 border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground disabled:opacity-50",
									children: /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "bottom",
								children: /* @__PURE__ */ jsx("p", { children: t(importTooltip ?? "Import") })
							})] }), showExport && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									onClick: onExport,
									disabled: exportDisabled,
									className: "h-9 w-9 shrink-0 p-0 border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground disabled:opacity-50",
									children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "bottom",
								children: /* @__PURE__ */ jsx("p", { children: t(exportTooltip ?? "Export") })
							})] })]
						}),
						beforeCreateButtons ? /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 items-center gap-1.5 @[640px]:gap-2",
							children: beforeCreateButtons
						}) : null,
						createLabel && (onCreate || createTo && createParams) && /* @__PURE__ */ jsx(ServiceHeaderCreateButton, {
							createLabel,
							createDisabled,
							createDisabledTooltip,
							createTo,
							createParams,
							onCreate,
							createAnalyticsAction
						}),
						collapsible && /* @__PURE__ */ jsx(TooltipProvider, {
							delayDuration: 0,
							children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setIsCollapsed(!isCollapsed),
									className: "h-9 w-9 p-0 border-border bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
									children: /* @__PURE__ */ jsx(ChevronUp, { className: cn("h-4 w-4 transition-transform duration-200", isCollapsed && "rotate-180") })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "bottom",
								children: /* @__PURE__ */ jsx("p", { children: isCollapsed ? t("Expand header") : t("Collapse header") })
							})] })
						})
					]
				})]
			})
		]
	});
});
export { ServiceHeader as t };
