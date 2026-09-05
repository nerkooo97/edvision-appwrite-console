import { i as scrollConsoleMainToTop, t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan, Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Fn as allFunctionTemplatesQueryOptions, Nn as FUNCTIONS_DEFAULT_SORT_BY, Pn as FUNCTIONS_DEFAULT_SORT_ORDER, Zn as fetchProjectFunctions, sr as functionTemplatesPageQueryOptions } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import "./Avatar-D1PavDBA.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import "./sheet-CbM5lIV1.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { l as canCreateFunction } from "./console-access-checks-BTMEOKcL.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { a as RESOURCE_CARD_GRID_WIDE_CLASSNAME, c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, d as RESOURCE_CARD_SHELL_CLASSNAME, l as RESOURCE_CARD_PADDED_CLASSNAME, o as RESOURCE_CARD_INTERACTIVE_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as Route$1 } from "./projects._projectId.functions.templates-DfK5v_Jq.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as ScrollArea } from "./scroll-area-CakPDLgR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Braces, ChevronDown, ChevronRight, ExternalLink, LayoutTemplate, Loader2, Search } from "lucide-react";
function parseTemplatesPage(value) {
	const n = Number(value);
	if (!Number.isFinite(n) || n < 1) return 1;
	return Math.min(Math.floor(n), 1e6);
}
function parseTemplatesOffset(value) {
	const n = Number(value);
	if (!Number.isFinite(n) || n < 0) return 0;
	return Math.min(Math.floor(n), 1e9);
}
function parseTemplatesLimit(value, fallback) {
	const n = Number(value);
	if (!Number.isFinite(n) || n < 1) return fallback;
	return Math.min(Math.max(1, Math.floor(n)), 100);
}
function parseCsvParam(s) {
	if (!s?.trim()) return [];
	return s.split(",").map((x) => x.trim()).filter(Boolean);
}
function joinCsvParam(arr) {
	return arr.length > 0 ? arr.join(",") : void 0;
}
function getBaseRuntimes(runtimes) {
	const list = runtimes ?? [];
	const base = /* @__PURE__ */ new Map();
	for (const runtime of list) {
		const key = runtime.name.split("-")[0] ?? runtime.name;
		if (!base.has(key)) base.set(key, {
			...runtime,
			name: key
		});
	}
	return [...base.values()];
}
function formatUseCaseLabel(useCase) {
	const u = useCase.trim();
	if (u.toLowerCase() === "ai") return "AI";
	return u.charAt(0).toUpperCase() + u.slice(1);
}
function collectTemplateFacetLabels(templates) {
	const useCaseSet = /* @__PURE__ */ new Set();
	const runtimeSet = /* @__PURE__ */ new Set();
	for (const t of templates ?? []) {
		for (const u of t.useCases ?? []) useCaseSet.add(u);
		for (const r of t.runtimes ?? []) if (r.name) runtimeSet.add(r.name);
	}
	return {
		useCases: [...useCaseSet].sort((a, b) => a.localeCompare(b)),
		runtimes: [...runtimeSet].sort((a, b) => a.localeCompare(b))
	};
}
function formatRuntimeLabel(runtime) {
	return runtime.split("-").join(" ");
}
var filterSectionTitle = "text-start text-[11px] font-semibold uppercase tracking-wider text-muted-foreground";
function UseCaseFilterTrigger({ selectedUseCases }) {
	const t = useT();
	if (selectedUseCases.length === 0) return /* @__PURE__ */ jsx("span", {
		className: "min-w-0 truncate text-[13px] text-muted-foreground",
		children: t("All use cases")
	});
	if (selectedUseCases.length === 1) {
		const uc = selectedUseCases[0];
		return /* @__PURE__ */ jsx("span", {
			className: "min-w-0 truncate text-[13px] text-foreground",
			children: formatUseCaseLabel(uc)
		});
	}
	return /* @__PURE__ */ jsxs("span", {
		className: "min-w-0 truncate text-[13px] text-foreground tabular-nums",
		children: [
			selectedUseCases.length,
			" ",
			t("selected")
		]
	});
}
function RuntimeFilterTrigger({ selectedRuntimes }) {
	const t = useT();
	if (selectedRuntimes.length === 0) return /* @__PURE__ */ jsx("span", {
		className: "min-w-0 truncate text-[13px] text-muted-foreground",
		children: t("All runtimes")
	});
	if (selectedRuntimes.length === 1) {
		const rt = selectedRuntimes[0];
		return /* @__PURE__ */ jsxs("span", {
			className: "flex min-w-0 flex-1 items-center gap-2",
			children: [/* @__PURE__ */ jsx(RuntimeIcon, {
				runtime: rt,
				size: "sm",
				className: "h-4 w-4 shrink-0 text-muted-foreground"
			}), /* @__PURE__ */ jsx("span", {
				className: "min-w-0 truncate font-mono text-[13px] text-foreground",
				children: formatRuntimeLabel(rt)
			})]
		});
	}
	return /* @__PURE__ */ jsxs("span", {
		className: "flex min-w-0 flex-1 items-center gap-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex shrink-0 -space-x-1.5",
			children: selectedRuntimes.slice(0, 3).map((rt) => /* @__PURE__ */ jsx("span", {
				className: "inline-flex rounded border border-border bg-muted/60 p-0.5 ring-2 ring-background",
				children: /* @__PURE__ */ jsx(RuntimeIcon, {
					runtime: rt,
					size: "sm",
					className: "h-3.5 w-3.5"
				})
			}, rt))
		}), /* @__PURE__ */ jsxs("span", {
			className: "min-w-0 truncate text-[13px] text-foreground tabular-nums",
			children: [
				selectedRuntimes.length,
				" ",
				t("selected")
			]
		})]
	});
}
var filterPopoverContentClass = "w-[var(--radix-popover-trigger-width)] min-w-[14rem] max-h-[min(320px,var(--radix-popover-content-available-height))] overflow-hidden p-0";
function FilterDropdownToolbar({ onSelectAll, onClear, selectAllDisabled, clearDisabled }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-end gap-0.5 border-b border-border/50 px-2 py-0.5",
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: selectAllDisabled,
				onClick: (e) => {
					e.preventDefault();
					e.stopPropagation();
					onSelectAll();
				},
				className: "rounded px-1 py-0.5 text-[11px] leading-none text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground disabled:pointer-events-none disabled:opacity-30",
				children: t("Select all")
			}),
			/* @__PURE__ */ jsx("span", {
				className: "select-none px-0.5 text-[9px] text-muted-foreground/30",
				"aria-hidden": true,
				children: "·"
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: clearDisabled,
				onClick: (e) => {
					e.preventDefault();
					e.stopPropagation();
					onClear();
				},
				className: "rounded px-1 py-0.5 text-[11px] leading-none text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground disabled:pointer-events-none disabled:opacity-30",
				children: t("Clear")
			})
		]
	});
}
function GitHubIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
	});
}
function asCatalogTemplate(t) {
	return t;
}
function catalogTemplateSourceUrl(t) {
	const provider = (t.vcsProvider ?? "").toLowerCase();
	const owner = t.providerOwner;
	const repo = t.providerRepositoryId;
	const root = t.runtimes?.[0]?.providerRootDirectory;
	if (!owner || !repo || !root) return null;
	if (provider === "github" || provider === "") return `https://github.com/${owner}/${repo}/tree/main/${root}`;
	return null;
}
function truncateMiddle(s, max) {
	if (s.length <= max) return s;
	const head = Math.floor((max - 1) / 2);
	const tail = Math.ceil((max - 1) / 2);
	return `${s.slice(0, head)}…${s.slice(s.length - tail)}`;
}
function FunctionTemplateDetailDrawer({ open, onOpenChange, template, projectId, createBlockedTooltip }) {
	const tr = useT();
	if (!template) return null;
	const t = asCatalogTemplate(template);
	const sourceUrl = catalogTemplateSourceUrl(t);
	const runtimes = t.runtimes ?? [];
	const variables = t.variables ?? [];
	const scopes = t.scopes ?? [];
	const permissions = t.permissions ?? [];
	const events = t.events ?? [];
	const cron = (t.cron ?? "").trim();
	const useCasesList = t.useCases ?? [];
	const hasUseCases = useCasesList.length > 0;
	const hasSchedulingOrEvents = events.length > 0 || cron.length > 0;
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: t.name ?? tr("Template"),
		maxWidth: "sm:max-w-lg",
		contentClassName: "overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "shrink-0 border-b border-border" }),
				/* @__PURE__ */ jsx(ScrollArea, {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4 px-6 py-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [
									t.tagline ? /* @__PURE__ */ jsx("p", {
										className: "text-[13px] leading-snug text-muted-foreground",
										children: t.tagline
									}) : null,
									hasUseCases ? /* @__PURE__ */ jsx("div", {
										className: "flex min-w-0 flex-wrap gap-1",
										children: useCasesList.map((u) => /* @__PURE__ */ jsx(Badge, {
											variant: "info",
											className: "text-[10px] font-normal",
											children: formatUseCaseLabel(u)
										}, u))
									}) : null,
									(t.providerOwner || t.providerRepositoryId) && /* @__PURE__ */ jsxs("p", {
										className: "truncate font-mono text-[11px] text-muted-foreground/90",
										children: [[t.providerOwner, t.providerRepositoryId].filter(Boolean).join("/"), t.providerVersion ? /* @__PURE__ */ jsxs("span", {
											className: "text-muted-foreground/70",
											children: [
												" ",
												"@ ",
												t.providerVersion
											]
										}) : null]
									})
								]
							}),
							hasSchedulingOrEvents && /* @__PURE__ */ jsxs("div", {
								className: "space-y-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-medium text-foreground",
									children: tr("Execution")
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-3",
									children: [events.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-muted-foreground",
										children: tr("Events")
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 flex flex-wrap gap-1",
										children: events.map((ev) => /* @__PURE__ */ jsx("code", {
											className: "rounded border border-border bg-muted/30 px-1.5 py-px font-mono text-[10px] text-foreground",
											children: ev
										}, ev))
									})] }), cron.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-muted-foreground",
										children: "Cron"
									}), /* @__PURE__ */ jsx("code", {
										className: "mt-1 block w-full overflow-x-auto rounded border border-border bg-muted/30 px-2 py-1 font-mono text-[11px] leading-snug text-foreground",
										children: cron
									})] })]
								})]
							}),
							t.instructions ? /* @__PURE__ */ jsxs("div", {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "mb-2 text-[12px] font-medium text-foreground",
									children: tr("Documentation")
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[13px] leading-relaxed text-muted-foreground prose-links-neutral",
									dangerouslySetInnerHTML: { __html: t.instructions }
								})]
							}) : null,
							runtimes.length > 0 || variables.length > 0 || scopes.length > 0 || permissions.length > 0 ? /* @__PURE__ */ jsxs(Accordion, {
								type: "multiple",
								defaultValue: [],
								className: "border-t border-border pt-4",
								children: [
									runtimes.length > 0 ? /* @__PURE__ */ jsxs(AccordionItem, {
										value: "runtimes",
										className: "border-border",
										children: [/* @__PURE__ */ jsx(AccordionTrigger, {
											className: "cursor-pointer py-3 text-[12px] font-medium text-foreground hover:no-underline",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-baseline gap-1.5",
												children: [/* @__PURE__ */ jsx("span", { children: tr("Runtimes") }), /* @__PURE__ */ jsxs("span", {
													className: "font-normal tabular-nums text-muted-foreground",
													children: [
														"(",
														runtimes.length,
														")"
													]
												})]
											})
										}), /* @__PURE__ */ jsx(AccordionContent, {
											className: "pb-4 pt-0",
											children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
												className: "hover:bg-transparent border-b border-border",
												children: [
													/* @__PURE__ */ jsx(TableHead, {
														className: "px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
														children: tr("Runtime")
													}),
													/* @__PURE__ */ jsx(TableHead, {
														className: "px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
														children: tr("Entrypoint")
													}),
													/* @__PURE__ */ jsx(TableHead, {
														className: "px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
														children: tr("Build")
													})
												]
											}) }), /* @__PURE__ */ jsx(TableBody, { children: runtimes.map((r) => /* @__PURE__ */ jsxs(TableRow, { children: [
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-3 py-2 align-middle",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ jsx(RuntimeIcon, {
															runtime: r.name,
															size: "sm",
															className: "h-4 w-4 shrink-0 text-muted-foreground"
														}), /* @__PURE__ */ jsx("span", {
															className: "min-w-0 font-mono text-[11px] text-foreground",
															children: r.name
														})]
													})
												}),
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-3 py-2 align-top",
													children: /* @__PURE__ */ jsx("span", {
														className: "break-all font-mono text-[11px] text-muted-foreground",
														children: r.entrypoint ?? "-"
													})
												}),
												/* @__PURE__ */ jsx(TableCell, {
													className: "px-3 py-2 align-top",
													children: /* @__PURE__ */ jsx("span", {
														className: "break-all font-mono text-[10px] leading-snug text-muted-foreground",
														title: r.commands ?? "",
														children: r.commands ? truncateMiddle(r.commands, 48) : "-"
													})
												})
											] }, r.name)) })] })
										})]
									}) : null,
									variables.length > 0 ? /* @__PURE__ */ jsxs(AccordionItem, {
										value: "env",
										className: "border-border",
										children: [/* @__PURE__ */ jsx(AccordionTrigger, {
											className: "cursor-pointer py-3 text-[12px] font-medium text-foreground hover:no-underline",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-baseline gap-1.5",
												children: [/* @__PURE__ */ jsx("span", { children: tr("Environment variables") }), /* @__PURE__ */ jsxs("span", {
													className: "font-normal tabular-nums text-muted-foreground",
													children: [
														"(",
														variables.length,
														")"
													]
												})]
											})
										}), /* @__PURE__ */ jsx(AccordionContent, {
											className: "pb-4 pt-0",
											children: /* @__PURE__ */ jsx("ul", {
												className: "space-y-3",
												children: variables.map((v, idx) => /* @__PURE__ */ jsxs("li", {
													className: "border-b border-border/60 pb-3 last:border-0 last:pb-0",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex flex-wrap items-center gap-1.5",
														children: [
															/* @__PURE__ */ jsx("span", {
																className: "font-mono text-[12px] font-medium text-foreground",
																children: v.name
															}),
															v.required ? /* @__PURE__ */ jsx(Badge, {
																variant: "warning",
																className: "h-5 text-[9px] px-1",
																children: tr("Req")
															}) : /* @__PURE__ */ jsx(Badge, {
																variant: "info",
																className: "h-5 text-[9px] px-1",
																children: tr("Opt")
															}),
															v.type ? /* @__PURE__ */ jsx(Badge, {
																variant: "info",
																className: "h-5 font-mono text-[9px] px-1",
																children: v.type
															}) : null
														]
													}), v.description ? /* @__PURE__ */ jsx("div", {
														className: "mt-1.5 text-[12px] leading-snug text-muted-foreground prose-links-neutral",
														dangerouslySetInnerHTML: { __html: v.description }
													}) : null]
												}, v.name ?? `var-${idx}`))
											})
										})]
									}) : null,
									scopes.length > 0 ? /* @__PURE__ */ jsxs(AccordionItem, {
										value: "scopes",
										className: "border-border",
										children: [/* @__PURE__ */ jsx(AccordionTrigger, {
											className: "cursor-pointer py-3 text-[12px] font-medium text-foreground hover:no-underline",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-baseline gap-1.5",
												children: [/* @__PURE__ */ jsx("span", { children: tr("API scopes") }), /* @__PURE__ */ jsxs("span", {
													className: "font-normal tabular-nums text-muted-foreground",
													children: [
														"(",
														scopes.length,
														")"
													]
												})]
											})
										}), /* @__PURE__ */ jsx(AccordionContent, {
											className: "pb-4 pt-0",
											children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, {
												className: "hover:bg-transparent border-b border-border",
												children: /* @__PURE__ */ jsx(TableHead, {
													className: "px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
													children: tr("Scope")
												})
											}) }), /* @__PURE__ */ jsx(TableBody, { children: scopes.map((s) => /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
												className: "px-3 py-2",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-mono text-[11px] text-foreground",
													children: s
												})
											}) }, s)) })] })
										})]
									}) : null,
									permissions.length > 0 ? /* @__PURE__ */ jsxs(AccordionItem, {
										value: "permissions",
										className: "border-border",
										children: [/* @__PURE__ */ jsx(AccordionTrigger, {
											className: "cursor-pointer py-3 text-[12px] font-medium text-foreground hover:no-underline",
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-baseline gap-1.5",
												children: [/* @__PURE__ */ jsx("span", { children: tr("Permissions") }), /* @__PURE__ */ jsxs("span", {
													className: "font-normal tabular-nums text-muted-foreground",
													children: [
														"(",
														permissions.length,
														")"
													]
												})]
											})
										}), /* @__PURE__ */ jsx(AccordionContent, {
											className: "pb-4 pt-0",
											children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsx(TableRow, {
												className: "hover:bg-transparent border-b border-border",
												children: /* @__PURE__ */ jsx(TableHead, {
													className: "px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
													children: tr("Permission")
												})
											}) }), /* @__PURE__ */ jsx(TableBody, { children: permissions.map((p) => /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
												className: "px-3 py-2",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-mono text-[11px] text-foreground",
													children: p
												})
											}) }, p)) })] })
										})]
									}) : null
								]
							}) : null
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "shrink-0 border-t border-border bg-muted/30 px-6 py-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [sourceUrl ? /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "gap-1.5 sm:w-auto",
						asChild: true,
						children: /* @__PURE__ */ jsxs("a", {
							href: sourceUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: [
								/* @__PURE__ */ jsx(GitHubIcon, { className: "h-4 w-4 shrink-0" }),
								tr("View on GitHub"),
								/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
							]
						})
					}) : null, createBlockedTooltip ? /* @__PURE__ */ jsx(TooltipProvider, {
						delayDuration: 0,
						children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-flex w-full sm:w-auto",
								children: /* @__PURE__ */ jsx(Button, {
									className: "w-full sm:w-auto",
									disabled: true,
									type: "button",
									children: tr("Create from template")
								})
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: createBlockedTooltip })] })
					}) : /* @__PURE__ */ jsx(Button, {
						className: "w-full sm:w-auto",
						asChild: true,
						children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/functions/create/template/$templateId",
							params: {
								projectId,
								templateId: String(t.id ?? "")
							},
							children: tr("Create from template")
						})
					})]
				})
			]
		})
	});
}
function TemplateCatalogFilters({ searchInput, onSearchInputChange, catalogUseCases, catalogRuntimes, selectedUseCases, selectedRuntimes, toggleUseCase, toggleRuntime, onSelectAllUseCases, onClearUseCases, onSelectAllRuntimes, onClearRuntimes, className }) {
	const t = useT();
	const [useCaseOpen, setUseCaseOpen] = useState(false);
	const [runtimeOpen, setRuntimeOpen] = useState(false);
	const useCaseAllSelected = catalogUseCases.length > 0 && catalogUseCases.every((uc) => selectedUseCases.some((s) => s.toLowerCase() === uc.toLowerCase()));
	const useCaseHasSelection = selectedUseCases.length > 0;
	const runtimeAllSelected = catalogRuntimes.length > 0 && catalogRuntimes.every((rt) => selectedRuntimes.includes(rt));
	const runtimeHasSelection = selectedRuntimes.length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex max-h-[min(70dvh,calc(100dvh-10rem))] flex-col gap-5", className),
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("label", {
					htmlFor: "template-catalog-search",
					className: "sr-only",
					children: t("Search templates by name")
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative w-full",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						id: "template-catalog-search",
						type: "search",
						placeholder: t("Search by name..."),
						value: searchInput,
						onChange: (e) => onSearchInputChange(e.target.value),
						className: "h-9 w-full border-border bg-background ps-9 pe-3 text-[13px] placeholder:text-muted-foreground",
						autoComplete: "off"
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: filterSectionTitle,
						children: t("Use case")
					}), /* @__PURE__ */ jsxs(Popover, {
						open: useCaseOpen,
						onOpenChange: setUseCaseOpen,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								type: "button",
								role: "combobox",
								"aria-expanded": useCaseOpen,
								className: "h-9 w-full justify-between gap-2 px-3 text-[13px] font-normal",
								children: [/* @__PURE__ */ jsx(UseCaseFilterTrigger, { selectedUseCases }), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(PopoverContent, {
							align: "start",
							className: filterPopoverContentClass,
							onWheelCapture: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ jsxs(Command$1, { children: [
								/* @__PURE__ */ jsx(CommandInput, {
									placeholder: t("Search use cases..."),
									className: "h-9 text-[13px]"
								}),
								catalogUseCases.length > 0 ? /* @__PURE__ */ jsx(FilterDropdownToolbar, {
									onSelectAll: onSelectAllUseCases,
									onClear: onClearUseCases,
									selectAllDisabled: useCaseAllSelected,
									clearDisabled: !useCaseHasSelection
								}) : null,
								/* @__PURE__ */ jsxs(CommandList, {
									className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
									children: [/* @__PURE__ */ jsx(CommandEmpty, {
										className: "py-6 text-center text-[13px] text-muted-foreground",
										children: t("No use cases match")
									}), /* @__PURE__ */ jsx(CommandGroup, {
										className: "p-1",
										children: catalogUseCases.map((uc) => {
											const checked = selectedUseCases.some((s) => s.toLowerCase() === uc.toLowerCase());
											const label = formatUseCaseLabel(uc);
											return /* @__PURE__ */ jsxs(CommandItem, {
												value: `${uc} ${label}`,
												onSelect: () => toggleUseCase(uc),
												className: cn("group cursor-pointer gap-2 rounded-sm px-2 py-2 text-[13px]", "[&_[data-slot=checkbox][data-state=unchecked]]:border-foreground/55 [&_[data-slot=checkbox][data-state=unchecked]]:bg-background", "data-[selected=true]:[&_[data-slot=checkbox][data-state=unchecked]]:border-foreground/80", "[&_[data-slot=checkbox][data-state=checked]]:!border-primary [&_[data-slot=checkbox][data-state=checked]]:!bg-primary", "[&_[data-slot=checkbox]_svg]:!text-primary-foreground"),
												children: [/* @__PURE__ */ jsx(Checkbox, {
													checked,
													className: "pointer-events-none shrink-0 border-border bg-background shadow-sm data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
													tabIndex: -1
												}), /* @__PURE__ */ jsx("span", {
													className: "min-w-0 flex-1 text-[13px] leading-snug",
													children: label
												})]
											}, uc);
										})
									})]
								})
							] })
						})]
					})]
				}), /* @__PURE__ */ jsxs("section", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: filterSectionTitle,
						children: t("Runtime")
					}), /* @__PURE__ */ jsxs(Popover, {
						open: runtimeOpen,
						onOpenChange: setRuntimeOpen,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								type: "button",
								role: "combobox",
								"aria-expanded": runtimeOpen,
								className: "h-9 w-full justify-between gap-2 px-3 text-[13px] font-normal",
								children: [/* @__PURE__ */ jsx(RuntimeFilterTrigger, { selectedRuntimes }), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(PopoverContent, {
							align: "start",
							className: filterPopoverContentClass,
							onWheelCapture: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ jsxs(Command$1, { children: [
								/* @__PURE__ */ jsx(CommandInput, {
									placeholder: t("Search runtimes..."),
									className: "h-9 text-[13px]"
								}),
								catalogRuntimes.length > 0 ? /* @__PURE__ */ jsx(FilterDropdownToolbar, {
									onSelectAll: onSelectAllRuntimes,
									onClear: onClearRuntimes,
									selectAllDisabled: runtimeAllSelected,
									clearDisabled: !runtimeHasSelection
								}) : null,
								/* @__PURE__ */ jsxs(CommandList, {
									className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
									children: [/* @__PURE__ */ jsx(CommandEmpty, {
										className: "py-6 text-center text-[13px] text-muted-foreground",
										children: t("No runtimes match")
									}), /* @__PURE__ */ jsx(CommandGroup, {
										className: "p-1",
										children: catalogRuntimes.map((rt) => {
											const checked = selectedRuntimes.includes(rt);
											const label = formatRuntimeLabel(rt);
											return /* @__PURE__ */ jsxs(CommandItem, {
												value: `${rt} ${label}`,
												onSelect: () => toggleRuntime(rt),
												className: cn("group cursor-pointer gap-2 rounded-sm px-2 py-2 text-[13px]", "[&_[data-slot=checkbox][data-state=unchecked]]:border-foreground/55 [&_[data-slot=checkbox][data-state=unchecked]]:bg-background", "data-[selected=true]:[&_[data-slot=checkbox][data-state=unchecked]]:border-foreground/80", "[&_[data-slot=checkbox][data-state=checked]]:!border-primary [&_[data-slot=checkbox][data-state=checked]]:!bg-primary", "[&_[data-slot=checkbox]_svg]:!text-primary-foreground"),
												children: [
													/* @__PURE__ */ jsx(Checkbox, {
														checked,
														className: "pointer-events-none shrink-0 border-border bg-background shadow-sm data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
														tabIndex: -1
													}),
													/* @__PURE__ */ jsx(RuntimeIcon, {
														runtime: rt,
														size: "sm",
														className: "h-4 w-4 shrink-0 text-muted-foreground group-data-[selected=true]:text-foreground"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "min-w-0 flex-1 font-mono text-[13px] leading-snug",
														children: label
													})
												]
											}, rt);
										})
									})]
								})
							] })
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "shrink-0 space-y-2 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: filterSectionTitle,
						children: t("Contribute")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] leading-relaxed text-muted-foreground",
						children: t("This catalog is built from our public GitHub repository. Browse the source, open issues, or submit a pull request if you want to add or improve a template.")
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://github.com/appwrite/templates",
						target: "_blank",
						rel: "noreferrer noopener",
						className: "link-neutral inline-flex max-w-full items-center gap-1.5 pt-0.5 text-[13px]",
						children: [
							/* @__PURE__ */ jsx(GitHubIcon, { className: "h-4 w-4 shrink-0" }),
							"appwrite/templates on GitHub",
							/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
						]
					})
				]
			})
		]
	});
}
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const search = Route$1.useSearch();
	const urlLimit = parseTemplatesLimit(search.limit, 12);
	const urlOffset = useMemo(() => {
		if (search.offset != null) return parseTemplatesOffset(search.offset);
		if (search.page != null) return (parseTemplatesPage(search.page) - 1) * urlLimit;
		return 0;
	}, [
		search.offset,
		search.page,
		urlLimit
	]);
	const urlSearch = search.search?.trim() ?? "";
	const selectedUseCases = useMemo(() => parseCsvParam(search.uc), [search.uc]);
	const selectedRuntimes = useMemo(() => parseCsvParam(search.rt), [search.rt]);
	const [searchInput, setSearchInput] = useState(urlSearch);
	const searchDebounceRef = useRef(null);
	useEffect(() => {
		setSearchInput(urlSearch);
	}, [urlSearch]);
	const navigateCatalog = useCallback((patch) => {
		navigate({
			to: "/projects/$projectId/functions/templates",
			params: { projectId },
			search: (prev) => {
				const next = {
					...prev,
					...patch
				};
				if (next.search === "" || next.search === void 0) delete next.search;
				delete next.page;
				if (next.offset === 0 || next.offset === void 0) delete next.offset;
				if (next.limit === 12 || next.limit === void 0) delete next.limit;
				if (!next.uc) delete next.uc;
				if (!next.rt) delete next.rt;
				return next;
			},
			replace: true
		});
	}, [navigate, projectId]);
	useEffect(() => {
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = searchInput.trim();
			if (trimmed === urlSearch) return;
			navigateCatalog({
				search: trimmed || void 0,
				offset: 0
			});
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [
		searchInput,
		urlSearch,
		navigateCatalog
	]);
	const skipFilterScrollRef = useRef(true);
	useEffect(() => {
		if (skipFilterScrollRef.current) {
			skipFilterScrollRef.current = false;
			return;
		}
		scrollConsoleMainToTop();
	}, [
		urlSearch,
		search.uc,
		search.rt
	]);
	const isNameSearch = urlSearch.trim().length > 0;
	const pageSize = Math.max(1, urlLimit);
	const facetSourceQuery = useQuery({
		...functionTemplatesPageQueryOptions(projectId, 0, 12, [], []),
		enabled: !!projectId && !isNameSearch
	});
	const pageQuery = useQuery({
		...functionTemplatesPageQueryOptions(projectId, urlOffset, pageSize, selectedRuntimes, selectedUseCases),
		enabled: !!projectId && !isNameSearch
	});
	const searchCatalogQuery = useQuery({
		...allFunctionTemplatesQueryOptions(projectId, {
			runtimes: selectedRuntimes.length ? selectedRuntimes : void 0,
			useCases: selectedUseCases.length ? selectedUseCases : void 0
		}),
		enabled: !!projectId && isNameSearch
	});
	const searchFilteredTemplates = useMemo(() => {
		if (!isNameSearch) return [];
		const q = urlSearch.toLowerCase();
		return [...searchCatalogQuery.data?.templates ?? []].filter((template) => {
			return (template.name ?? "").toLowerCase().includes(q);
		}).sort((a, b) => {
			const an = (a.name ?? "").toLowerCase();
			const bn = (b.name ?? "").toLowerCase();
			if (an !== bn) return an.localeCompare(bn);
			return String(a.id ?? "").localeCompare(String(b.id ?? ""));
		});
	}, [
		isNameSearch,
		urlSearch,
		searchCatalogQuery.data?.templates
	]);
	const { useCases: catalogUseCases, runtimes: catalogRuntimes } = useMemo(() => {
		return collectTemplateFacetLabels(isNameSearch ? searchCatalogQuery.data?.templates : facetSourceQuery.data?.templates);
	}, [
		isNameSearch,
		facetSourceQuery.data?.templates,
		searchCatalogQuery.data?.templates
	]);
	const catalogFacetKey = useMemo(() => `${String(projectId ?? "")}\u0000${[...selectedRuntimes].sort().join(",")}\u0000${[...selectedUseCases].sort().join(",")}`, [
		projectId,
		selectedRuntimes,
		selectedUseCases
	]);
	const lastServerTotalByFacetRef = useRef(/* @__PURE__ */ new Map());
	if (!isNameSearch && pageQuery.data && typeof pageQuery.data.total === "number") lastServerTotalByFacetRef.current.set(catalogFacetKey, pageQuery.data.total);
	const hasKnownCatalogTotal = isNameSearch || pageQuery.data != null || lastServerTotalByFacetRef.current.has(catalogFacetKey);
	const totalFiltered = isNameSearch ? searchFilteredTemplates.length : pageQuery.data?.total ?? lastServerTotalByFacetRef.current.get(catalogFacetKey) ?? 0;
	const pageCount = Math.max(1, Math.ceil(totalFiltered / pageSize));
	const maxOffset = isNameSearch || hasKnownCatalogTotal ? totalFiltered === 0 ? 0 : Math.max(0, (pageCount - 1) * pageSize) : Number.MAX_SAFE_INTEGER;
	const safeOffset = maxOffset === Number.MAX_SAFE_INTEGER ? urlOffset : Math.min(urlOffset, maxOffset);
	const safePage = Math.floor(safeOffset / pageSize) + 1;
	const paginatedTemplates = isNameSearch ? searchFilteredTemplates.slice(safeOffset, safeOffset + pageSize) : pageQuery.data?.templates ?? [];
	const paginationDisplayItemRange = useMemo(() => {
		if (totalFiltered <= 0 || paginatedTemplates.length === 0) return void 0;
		return {
			start: safeOffset + 1,
			end: Math.min(safeOffset + paginatedTemplates.length, totalFiltered)
		};
	}, [
		totalFiltered,
		paginatedTemplates.length,
		safeOffset
	]);
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const { data: totalFunctionsData } = useQuery({
		queryKey: [
			"functions",
			"project",
			projectId,
			0,
			12,
			void 0,
			void 0,
			FUNCTIONS_DEFAULT_SORT_BY,
			FUNCTIONS_DEFAULT_SORT_ORDER
		],
		queryFn: () => fetchProjectFunctions(projectId, 0, 12, void 0, void 0, FUNCTIONS_DEFAULT_SORT_BY, FUNCTIONS_DEFAULT_SORT_ORDER),
		enabled: !!projectId,
		staleTime: 30 * 1e3,
		refetchOnMount: false
	});
	const totalFunctionsCount = totalFunctionsData?.total ?? 0;
	const functionsLimit = organizationPlan?.functions ?? 0;
	const createBlockedTooltip = !canCreateFunction(access, features) ? t("You don't have permission to create functions.") : functionsLimit > 0 && totalFunctionsCount >= functionsLimit ? t("Function limit reached for your plan.") : void 0;
	useEffect(() => {
		if (urlOffset > maxOffset) navigateCatalog({ offset: maxOffset });
	}, [
		urlOffset,
		maxOffset,
		navigateCatalog
	]);
	const tabs = useMemo(() => [{
		id: "functions",
		label: t("Functions"),
		to: "/projects/$projectId/functions/",
		params: { projectId }
	}, {
		id: "templates",
		label: t("Templates"),
		to: "/projects/$projectId/functions/templates",
		params: { projectId }
	}], [projectId, t]);
	const toggleUseCase = (value) => {
		const lower = value.toLowerCase();
		navigateCatalog({
			uc: joinCsvParam(selectedUseCases.some((u) => u.toLowerCase() === lower) ? selectedUseCases.filter((u) => u.toLowerCase() !== lower) : [...selectedUseCases, value]),
			offset: 0
		});
	};
	const toggleRuntime = (value) => {
		navigateCatalog({
			rt: joinCsvParam(selectedRuntimes.includes(value) ? selectedRuntimes.filter((r) => r !== value) : [...selectedRuntimes, value]),
			offset: 0
		});
	};
	const selectAllUseCases = useCallback(() => {
		navigateCatalog({
			uc: joinCsvParam([...catalogUseCases]),
			offset: 0
		});
	}, [navigateCatalog, catalogUseCases]);
	const clearUseCases = useCallback(() => {
		navigateCatalog({
			uc: void 0,
			offset: 0
		});
	}, [navigateCatalog]);
	const selectAllRuntimes = useCallback(() => {
		navigateCatalog({
			rt: joinCsvParam([...catalogRuntimes]),
			offset: 0
		});
	}, [navigateCatalog, catalogRuntimes]);
	const clearRuntimes = useCallback(() => {
		navigateCatalog({
			rt: void 0,
			offset: 0
		});
	}, [navigateCatalog]);
	const clearFiltersAndSearch = () => {
		setSearchInput("");
		navigate({
			to: "/projects/$projectId/functions/templates",
			params: { projectId },
			search: {},
			replace: true
		});
	};
	const [detailTemplate, setDetailTemplate] = useState(null);
	const listError = facetSourceQuery.error ?? pageQuery.error ?? searchCatalogQuery.error;
	const facetsLoading = !isNameSearch && facetSourceQuery.isPending && !facetSourceQuery.data || isNameSearch && searchCatalogQuery.isPending && !searchCatalogQuery.data;
	const pageLoading = !isNameSearch && pageQuery.isPending && !pageQuery.data;
	const searchLoading = isNameSearch && searchCatalogQuery.isPending && !searchCatalogQuery.data;
	const showLoading = facetsLoading || pageLoading || searchLoading;
	const hasFiltersOrSearch = urlSearch.length > 0 || selectedUseCases.length > 0 || selectedRuntimes.length > 0;
	const noResults = !showLoading && totalFiltered === 0 && hasFiltersOrSearch;
	const emptyCatalog = !showLoading && totalFiltered === 0 && !hasFiltersOrSearch && !listError;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: t("Functions"),
				tabs,
				activeTab: "templates",
				fullWidthBorder: true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex w-full max-w-7xl flex-1 gap-4 px-4 pb-6 pt-6 sm:px-6 lg:gap-5",
				children: [/* @__PURE__ */ jsx("aside", {
					className: "hidden w-[15.5rem] shrink-0 lg:block",
					children: /* @__PURE__ */ jsx("div", {
						className: "sticky top-4",
						children: /* @__PURE__ */ jsx(TemplateCatalogFilters, {
							searchInput,
							onSearchInputChange: setSearchInput,
							catalogUseCases,
							catalogRuntimes,
							selectedUseCases,
							selectedRuntimes,
							toggleUseCase,
							toggleRuntime,
							onSelectAllUseCases: selectAllUseCases,
							onClearUseCases: clearUseCases,
							onSelectAllRuntimes: selectAllRuntimes,
							onClearRuntimes: clearRuntimes
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-4 lg:hidden",
						children: /* @__PURE__ */ jsx(TemplateCatalogFilters, {
							searchInput,
							onSearchInputChange: setSearchInput,
							catalogUseCases,
							catalogRuntimes,
							selectedUseCases,
							selectedRuntimes,
							toggleUseCase,
							toggleRuntime,
							onSelectAllUseCases: selectAllUseCases,
							onClearUseCases: clearUseCases,
							onSelectAllRuntimes: selectAllRuntimes,
							onClearRuntimes: clearRuntimes,
							className: "max-h-[min(55dvh,26rem)] lg:max-h-none"
						})
					}), listError ? /* @__PURE__ */ jsx(EmptyState, {
						icon: AlertCircle,
						title: t("Couldn't load templates"),
						description: t("Something went wrong. Please try again."),
						isEmpty: false,
						hasFilters: false,
						variant: "card"
					}) : showLoading ? /* @__PURE__ */ jsx(EmptyState, {
						variant: "card",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-3",
							children: [/* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: t("Loading templates...")
							})]
						})
					}) : emptyCatalog ? /* @__PURE__ */ jsx(EmptyState, {
						icon: LayoutTemplate,
						title: t("No templates yet"),
						description: t("Function templates will appear here when they are available in the catalog."),
						isEmpty: true,
						hasFilters: false,
						variant: "card"
					}) : noResults ? /* @__PURE__ */ jsx(EmptyState, {
						icon: Braces,
						isEmpty: false,
						hasFilters: true,
						variant: "card",
						title: t("No templates match"),
						description: t("Try adjusting filters or search, or clear everything to see the full catalog."),
						action: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: clearFiltersAndSearch,
							children: t("Clear filters and search")
						})
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						className: RESOURCE_CARD_GRID_WIDE_CLASSNAME,
						children: paginatedTemplates.map((template, i) => /* @__PURE__ */ jsx(TemplateCard, {
							template,
							onOpenDetails: () => setDetailTemplate(template)
						}, `${safeOffset + i}-${String(template.id)}`))
					}), totalFiltered > 0 && /* @__PURE__ */ jsx(Pagination, {
						currentPage: safePage,
						totalItems: totalFiltered,
						pageSize,
						displayItemRange: paginationDisplayItemRange,
						pageSizeOptions: [
							12,
							18,
							36,
							72
						],
						onPageChange: (page) => {
							navigateCatalog({ offset: (page - 1) * pageSize });
						},
						onPageSizeChange: (limit) => {
							navigateCatalog({
								limit,
								offset: 0
							});
						},
						itemLabel: "templates"
					})] })]
				})]
			}),
			/* @__PURE__ */ jsx(FunctionTemplateDetailDrawer, {
				open: !!detailTemplate,
				onOpenChange: (open) => !open && setDetailTemplate(null),
				template: detailTemplate,
				projectId,
				createBlockedTooltip
			})
		]
	});
}
function TemplateCard({ template, onOpenDetails }) {
	const baseRuntimes = getBaseRuntimes(template.runtimes ?? []);
	const displayed = baseRuntimes.slice(0, 2);
	const hidden = baseRuntimes.slice(2);
	const hiddenRuntimeNames = hidden.map((h) => h.name).join(", ");
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn(RESOURCE_CARD_PADDED_CLASSNAME, RESOURCE_CARD_INTERACTIVE_CLASSNAME, "flex w-full min-h-[160px] min-w-0 flex-col text-start", RESOURCE_CARD_SHELL_CLASSNAME, "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),
		onClick: onOpenDetails,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "min-w-0 flex-1 truncate text-[15px] font-semibold leading-snug text-foreground",
						children: template.name
					}), /* @__PURE__ */ jsx(LayoutTemplate, { className: "h-4 w-4 shrink-0 text-muted-foreground opacity-60" })]
				}), /* @__PURE__ */ jsx("p", {
					className: "line-clamp-2 text-[13px] leading-relaxed text-muted-foreground",
					children: template.tagline
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: cn(RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, "mt-auto flex items-center justify-between gap-2"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [displayed.map((r) => /* @__PURE__ */ jsx("div", {
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50",
						children: /* @__PURE__ */ jsx(RuntimeIcon, {
							runtime: r.name,
							size: "sm",
							className: "h-4 w-4"
						})
					}, r.name)), hidden.length > 0 ? /* @__PURE__ */ jsxs("span", {
						className: "flex h-8 min-w-8 shrink-0 items-center justify-center rounded-md border border-dashed border-border px-1.5 font-mono text-[10px] text-muted-foreground",
						title: hiddenRuntimeNames || void 0,
						children: ["+", hidden.length]
					}) : null]
				}), /* @__PURE__ */ jsx(ChevronRight, {
					className: "h-4 w-4 shrink-0 text-muted-foreground opacity-60 transition-colors group-hover:opacity-100",
					"aria-hidden": true
				})]
			})]
		})
	});
}
function FunctionsTemplatesPage() {
	const { projectId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(View, {}, `functions-templates-${projectId}`);
}
export { FunctionsTemplatesPage as component };
