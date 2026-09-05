import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { An as SITE_TEMPLATE_USE_CASE_OPTIONS, Cn as useSiteTemplates, Mn as getSiteTemplateScreenshotUrl, jn as buildSiteTemplateFrameworkOptions, kn as SITE_TEMPLATE_GALLERY_DEFAULT_PAGE_SIZE, yn as useSiteFrameworks } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { ChevronsUpDown, LayoutTemplate, Search } from "lucide-react";
import { useTheme } from "next-themes";
function TemplateScreenshot({ src, alt, className }) {
	const [loaded, setLoaded] = useState(false);
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		className: cn(className, "transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0"),
		onLoad: () => setLoaded(true)
	});
}
function SiteTemplateCard({ template, isDark, interactive = false, onSelect, size = "default", className }) {
	const screenshotUrl = getSiteTemplateScreenshotUrl(template, isDark);
	const Tag$1 = interactive ? "button" : "div";
	const isCompact = size === "compact";
	return /* @__PURE__ */ jsxs(Tag$1, {
		type: interactive ? "button" : void 0,
		onClick: interactive ? onSelect : void 0,
		className: cn("group/template flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-start transition-all", isCompact ? "h-[176px]" : "h-[180px]", interactive && "cursor-pointer hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("px-4 pb-2 pt-4", isCompact ? "h-[76px]" : "h-[80px]"),
			children: [/* @__PURE__ */ jsx("h3", {
				className: cn("line-clamp-1 font-semibold leading-tight text-foreground", isCompact ? "text-[13px]" : "text-[14px]", interactive && "transition-colors group-hover/template:text-primary"),
				children: template.name
			}), template.tagline ? /* @__PURE__ */ jsx("p", {
				className: cn("mt-1 line-clamp-2 leading-snug text-muted-foreground", isCompact ? "text-[11px]" : "text-[12px] leading-snug"),
				children: template.tagline
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative min-h-0 flex-1 overflow-hidden",
			children: screenshotUrl ? /* @__PURE__ */ jsx("div", {
				className: "absolute -end-4 start-8 top-4 aspect-video -rotate-3 transition-transform duration-300 group-hover/visual:-rotate-2 group-hover/template:-rotate-2 motion-reduce:transform-none",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative h-full w-full overflow-hidden rounded-lg bg-muted/30 ring-1 ring-border",
					children: /* @__PURE__ */ jsx(TemplateScreenshot, {
						src: screenshotUrl,
						alt: template.name,
						className: "absolute inset-0 h-full w-full object-cover object-top"
					})
				})
			}) : /* @__PURE__ */ jsx("div", {
				className: "absolute -end-4 start-8 top-4 flex aspect-video -rotate-3 items-center justify-center rounded-lg bg-muted/50 ring-1 ring-border",
				children: /* @__PURE__ */ jsx(LayoutTemplate, {
					className: "size-8 text-muted-foreground/30",
					"aria-hidden": true
				})
			})
		})]
	});
}
function SiteTemplateCardSkeleton({ compact = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col overflow-hidden rounded-2xl border border-border bg-card", compact ? "h-[176px]" : "h-[180px]"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("px-4 pb-2 pt-4", compact ? "h-[76px]" : "h-[80px]"),
			children: [
				/* @__PURE__ */ jsx("div", { className: "mb-1.5 h-3.5 w-24 rounded bg-muted animate-pulse" }),
				/* @__PURE__ */ jsx("div", { className: "h-3 w-full rounded bg-muted animate-pulse" }),
				/* @__PURE__ */ jsx("div", { className: "mt-0.5 h-3 w-3/4 rounded bg-muted animate-pulse" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative flex-1 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "absolute inset-x-3 top-4 -rotate-3",
				children: /* @__PURE__ */ jsx("div", { className: "h-[120px] w-full rounded-lg bg-muted animate-pulse" })
			})
		})]
	});
}
var DEFAULT_PAGE_SIZE_OPTIONS = [
	9,
	12,
	18,
	36
];
var GRID_COLUMNS_CLASS = {
	3: "grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4",
	4: "grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
};
function SiteTemplateGallery({ projectId, onSelectTemplate, defaultPageSize = 9, pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS, columns = 3, compact = false, scrollToTopOnPageChange = true, maintainGridHeight = false, className }) {
	const t = useT();
	const { theme, resolvedTheme } = useTheme();
	const [templateSearch, setTemplateSearch] = useState("");
	const [debouncedTemplateSearch, setDebouncedTemplateSearch] = useState("");
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(defaultPageSize);
	const [selectedFramework, setSelectedFramework] = useState("all");
	const [selectedUseCase, setSelectedUseCase] = useState("all");
	const [useCaseOpen, setUseCaseOpen] = useState(false);
	const [frameworkOpen, setFrameworkOpen] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedTemplateSearch(templateSearch);
			setRequestedPage(1);
			setDisplayedPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, [templateSearch]);
	const isDark = useMemo(() => {
		if (typeof window === "undefined") return true;
		return resolvedTheme === "dark" || theme === "dark";
	}, [theme, resolvedTheme]);
	const frameworkFilter = selectedFramework !== "all" ? [selectedFramework] : void 0;
	const useCaseFilter = selectedUseCase !== "all" ? [selectedUseCase] : void 0;
	const { data: frameworksData } = useSiteFrameworks(projectId);
	const frameworkOptions = useMemo(() => buildSiteTemplateFrameworkOptions(frameworksData?.frameworks), [frameworksData?.frameworks]);
	const { isLoading: templatesLoading, isFetching: templatesFetching } = useSiteTemplates(projectId, frameworkFilter, useCaseFilter, pageSize, (requestedPage - 1) * pageSize);
	const { templates: displayedTemplates, total: templatesTotal, isLoading: templatesDisplayedLoading } = useSiteTemplates(projectId, frameworkFilter, useCaseFilter, pageSize, (displayedPage - 1) * pageSize);
	useEffect(() => {
		if (!templatesFetching && requestedPage !== displayedPage && !templatesLoading) setDisplayedPage(requestedPage);
	}, [
		templatesFetching,
		templatesLoading,
		requestedPage,
		displayedPage
	]);
	const showTemplatesLoading = templatesDisplayedLoading && displayedTemplates.length === 0;
	const filteredTemplates = useMemo(() => {
		if (!debouncedTemplateSearch.trim()) return displayedTemplates;
		const searchLower = debouncedTemplateSearch.toLowerCase();
		return displayedTemplates.filter((template) => template.name.toLowerCase().includes(searchLower) || template.tagline && template.tagline.toLowerCase().includes(searchLower));
	}, [displayedTemplates, debouncedTemplateSearch]);
	const gridClassName = GRID_COLUMNS_CLASS[columns];
	const cardHeightClass = compact ? "h-[176px]" : "h-[180px]";
	const emptyGridSlots = maintainGridHeight && !showTemplatesLoading ? Math.max(0, pageSize - filteredTemplates.length) : 0;
	const showFixedHeightGrid = maintainGridHeight && !showTemplatesLoading;
	const emptyMessage = templateSearch ? t("No templates found") : t("No templates available");
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-4 p-1", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative min-w-[140px] flex-1",
						children: [/* @__PURE__ */ jsx(Search, {
							className: "pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": true
						}), /* @__PURE__ */ jsx(Input, {
							value: templateSearch,
							onChange: (event) => setTemplateSearch(event.target.value),
							placeholder: t("Search templates..."),
							className: "h-9 ps-9 text-[13px]"
						})]
					}),
					/* @__PURE__ */ jsxs(Popover, {
						open: useCaseOpen,
						onOpenChange: setUseCaseOpen,
						modal: true,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								role: "combobox",
								"aria-expanded": useCaseOpen,
								className: "h-9 w-[150px] justify-between text-[13px] font-normal",
								children: [t(SITE_TEMPLATE_USE_CASE_OPTIONS.find((option) => option.value === selectedUseCase)?.label || "All use cases"), /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ms-2 size-3.5 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(PopoverContent, {
							className: "w-[200px] p-0",
							align: "start",
							sideOffset: 4,
							children: /* @__PURE__ */ jsxs(Command$1, { children: [/* @__PURE__ */ jsx(CommandInput, {
								placeholder: t("Search use cases..."),
								className: "h-9"
							}), /* @__PURE__ */ jsxs(CommandList, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t("No use case found.") }), /* @__PURE__ */ jsx(CommandGroup, { children: SITE_TEMPLATE_USE_CASE_OPTIONS.map((option) => /* @__PURE__ */ jsx(CommandItem, {
								value: option.value,
								onSelect: () => {
									setSelectedUseCase(option.value);
									setRequestedPage(1);
									setDisplayedPage(1);
									setUseCaseOpen(false);
								},
								children: t(option.label)
							}, option.value)) })] })] })
						})]
					}),
					/* @__PURE__ */ jsxs(Popover, {
						open: frameworkOpen,
						onOpenChange: setFrameworkOpen,
						modal: true,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								role: "combobox",
								"aria-expanded": frameworkOpen,
								className: "h-9 w-[160px] justify-between text-[13px] font-normal",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2 truncate",
									children: [selectedFramework !== "all" ? /* @__PURE__ */ jsx(FrameworkIcon, {
										framework: selectedFramework,
										size: "sm"
									}) : null, /* @__PURE__ */ jsx("span", {
										className: "truncate capitalize",
										children: selectedFramework === "all" ? t("All frameworks") : frameworkOptions.find((option) => option.value === selectedFramework)?.label || t("All frameworks")
									})]
								}), /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ms-2 size-3.5 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(PopoverContent, {
							className: "w-[220px] p-0",
							align: "start",
							sideOffset: 4,
							children: /* @__PURE__ */ jsxs(Command$1, { children: [/* @__PURE__ */ jsx(CommandInput, {
								placeholder: t("Search frameworks..."),
								className: "h-9"
							}), /* @__PURE__ */ jsxs(CommandList, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t("No framework found.") }), /* @__PURE__ */ jsx(CommandGroup, { children: frameworkOptions.map((option) => /* @__PURE__ */ jsxs(CommandItem, {
								value: option.label,
								onSelect: () => {
									setSelectedFramework(option.value);
									setRequestedPage(1);
									setDisplayedPage(1);
									setFrameworkOpen(false);
								},
								children: [option.value !== "all" ? /* @__PURE__ */ jsx(FrameworkIcon, {
									framework: option.value,
									size: "sm",
									className: "me-2"
								}) : null, /* @__PURE__ */ jsx("span", {
									className: "capitalize",
									children: option.value === "all" ? t(option.label) : option.label
								})]
							}, option.value)) })] })] })
						})]
					})
				]
			}),
			showTemplatesLoading ? /* @__PURE__ */ jsx("div", {
				className: cn("grid", gridClassName),
				children: Array.from({ length: pageSize }).map((_, index) => /* @__PURE__ */ jsx(SiteTemplateCardSkeleton, { compact }, index))
			}) : showFixedHeightGrid ? /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn("grid", gridClassName, templatesFetching && "pointer-events-none opacity-60"),
					children: [filteredTemplates.map((template) => /* @__PURE__ */ jsx(SiteTemplateCard, {
						template,
						isDark,
						size: compact ? "compact" : "default",
						interactive: !!onSelectTemplate,
						onSelect: onSelectTemplate ? () => onSelectTemplate(template) : void 0
					}, template.key)), Array.from({ length: emptyGridSlots }).map((_, index) => /* @__PURE__ */ jsx("div", {
						className: cn(cardHeightClass, "invisible pointer-events-none"),
						"aria-hidden": true
					}, `grid-placeholder-${index}`))]
				}), filteredTemplates.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: emptyMessage
					})
				}) : null]
			}) : filteredTemplates.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: cn("grid", gridClassName, templatesFetching && "pointer-events-none opacity-60"),
				children: filteredTemplates.map((template) => /* @__PURE__ */ jsx(SiteTemplateCard, {
					template,
					isDark,
					size: compact ? "compact" : "default",
					interactive: !!onSelectTemplate,
					onSelect: onSelectTemplate ? () => onSelectTemplate(template) : void 0
				}, template.key))
			}) : /* @__PURE__ */ jsx("div", {
				className: "py-8 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: emptyMessage
				})
			}),
			templatesTotal > pageSize ? /* @__PURE__ */ jsx(Pagination, {
				currentPage: displayedPage,
				totalItems: templatesTotal,
				pageSize,
				pageSizeOptions: [...pageSizeOptions],
				scrollToTopOnPageChange,
				onPageChange: setRequestedPage,
				onPageSizeChange: (size) => {
					setPageSize(size);
					setRequestedPage(1);
					setDisplayedPage(1);
				}
			}) : null
		]
	});
}
export { SiteTemplateGallery as t };
