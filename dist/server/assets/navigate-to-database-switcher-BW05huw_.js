import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan, Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Pp as useMysqlDatabase, hg as usePostgresDatabase } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { a as productFromDatabaseTypeValue, i as isNativeDatabaseTypeValue, r as engineFromDatabaseTypeValue, t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { C as dedicatedDatabasesQueryOptions, Jt as POSTGRES_DATABASE_SPECS_SOURCE, Qt as dedicatedDatabaseSourceFromRouteKind, Tt as useProjectDedicatedDatabases, c as consoleDatabasesQueryOptions, en as DEDICATED_FEATURE_UNAVAILABLE, ft as tablesQueryOptions, qt as MYSQL_DATABASE_SPECS_SOURCE, wt as useProjectDatabase, yt as useDatabaseSpecifications } from "./databases-Dh0pwZ6h.js";
import { c as getSpecOptionById, d as isServerlessDatabaseMonitoring, h as resolveDatabaseSpecDisplayParts, p as mapDedicatedDatabaseSpecifications, r as formatDatabaseSpecDisplayTooltip, s as getEffectiveDatabaseSpecIdForMonitoring } from "./database-specs-CBc802K0.js";
import { E as isDedicatedDatabaseReady, b as coerceTrimmedString, d as productDatabaseListLink, g as isPostgresEngine, h as isMysqlEngine, m as isMongoEngine, n as databaseRouteKindFromApiType, o as isDatabaseTypeFeatureEnabled, r as dbNavLink, w as dedicatedDatabaseStatusBadgeVariant } from "./database-routes-DB_xKWuY.js";
import { d as postgresNav, l as postgresDatabaseHome } from "./postgres-database-routes-CyTsPbzl.js";
import { i as mysqlDatabaseHome, o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { n as DatabaseTypeIcon, r as getDatabaseTypeDisplayLabel } from "./DatabaseTypeIcon-CqLDDPFP.js";
import { c as canCreateDatabase } from "./console-access-checks-BTMEOKcL.js";
import { a as planSupportsDedicatedDatabases, o as formatDedicatedDatabaseRegionUnavailableDescription, s as projectSupportsDedicatedDatabaseCompute } from "./dedicated-database-plan-D5hnUTFL.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { r as hasDedicatedDatabaseCompute, s as resolveDatabaseComputeSpecId } from "./database-compute-CWpwADg-.js";
import { s as localizeResourceStatusLabel } from "./resource-status-labels-C-bLMJxj.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Fragment as Fragment$1, useEffect, useMemo, useState } from "react";
import { Query } from "@appwrite.io/console";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Cable, ChevronDown, ChevronRight, Cpu, Database, Loader2, MemoryStick, Plus, Table2 } from "lucide-react";
function DedicatedDatabaseStatusBadge({ status, className, onlyWhenNotReady = false }) {
	const t = useT();
	const normalized = coerceTrimmedString(status);
	if (!normalized) return null;
	if (onlyWhenNotReady && isDedicatedDatabaseReady(normalized)) return null;
	return /* @__PURE__ */ jsx(Badge, {
		variant: dedicatedDatabaseStatusBadgeVariant(normalized),
		className: cn("text-[10px] font-medium shrink-0 border px-2 py-0.5 capitalize", className),
		children: localizeResourceStatusLabel(normalized, t)
	});
}
const DATABASE_SIDEBAR_LIST_STRIP_CLASS = "shrink-0 border-t border-border px-2 py-1.5";
const DATABASE_SIDEBAR_LIST_STRIP_ROW_CLASS = "flex min-h-6 min-w-0 items-center justify-between gap-1 text-[11px] text-muted-foreground";
const DATABASE_SIDEBAR_FOOTER_STRIP_CLASS = "h-[54px] shrink-0 border-t border-border bg-background";
const DATABASE_SIDEBAR_FOOTER_STRIP_ROW_CLASS = "flex h-full min-w-0 items-center justify-between gap-2 px-4 text-[12px] text-muted-foreground";
const DATABASE_SIDEBAR_STRIP_FULL_BLEED_CLASS = "-mx-2.5";
var SPREADSHEET_LIKE_TABLE_TABS = new Set([
	"rows",
	"documents",
	"columns",
	"indexes"
]);
function isSpreadsheetLikeTableTab(activeTab) {
	return activeTab != null && SPREADSHEET_LIKE_TABLE_TABS.has(activeTab);
}
function SpecMetric({ icon: Icon$1, value }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex min-w-0 max-w-full items-center gap-0.5",
		children: [/* @__PURE__ */ jsx(Icon$1, {
			className: "h-3 w-3 shrink-0 opacity-70",
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "truncate tabular-nums",
			children: value
		})]
	});
}
function DatabaseSidebarComputeSpecDisplay({ parts, label, className }) {
	if (parts.variant === "serverless" || parts.variant === "label") return /* @__PURE__ */ jsx("span", {
		className: cn("min-w-0 truncate", className),
		children: label ?? parts.label
	});
	const metrics = [
		parts.cpu ? /* @__PURE__ */ jsx(SpecMetric, {
			icon: Cpu,
			value: parts.cpu
		}, "cpu") : null,
		parts.memory ? /* @__PURE__ */ jsx(SpecMetric, {
			icon: MemoryStick,
			value: parts.memory
		}, "memory") : null,
		parts.connections ? /* @__PURE__ */ jsx(SpecMetric, {
			icon: Cable,
			value: parts.connections
		}, "connections") : null
	].filter(Boolean);
	if (metrics.length === 0) return /* @__PURE__ */ jsx("span", {
		className: cn("min-w-0 truncate", className),
		children: label ?? parts.label
	});
	return /* @__PURE__ */ jsx("span", {
		className: cn("flex min-w-0 items-center gap-1 overflow-hidden", className),
		children: metrics.map((metric, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [index > 0 ? /* @__PURE__ */ jsx("span", {
			className: "shrink-0 text-muted-foreground/40",
			"aria-hidden": true,
			children: "·"
		}) : null, metric] }, index))
	});
}
function getNextEnabledSpec(specs, currentSlug) {
	if (specs.length === 0) return void 0;
	const currentIndex = currentSlug ? specs.findIndex((spec) => spec.id === currentSlug) : -1;
	const start = currentIndex >= 0 ? currentIndex + 1 : 0;
	return specs.slice(start).find((spec) => !spec.comingSoon);
}
function getNextLockedSpec(specs, currentSlug) {
	if (specs.length === 0) return void 0;
	const currentIndex = currentSlug ? specs.findIndex((spec) => spec.id === currentSlug) : -1;
	const start = currentIndex >= 0 ? currentIndex + 1 : 0;
	return specs.slice(start).find((spec) => spec.comingSoon === true);
}
function isDedicatedDbFeatureEnabled(dbKind, features) {
	if (dbKind === "documentsdb") return features.dedicatedDbsDocumentsDB;
	if (dbKind === "vectorsdb") return features.dedicatedDbsVectorsDB;
	return features.dedicatedDbsSupport;
}
function DatabaseSidebarComputeSpec({ projectId, databaseId, mode, dbKind, variant = "standalone" }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const { access } = useOrganizationScopes(project?.teamId);
	const { data: specificationsData } = useDatabaseSpecifications(projectId, mode === "postgres" ? POSTGRES_DATABASE_SPECS_SOURCE : mode === "mysql" ? MYSQL_DATABASE_SPECS_SOURCE : dedicatedDatabaseSourceFromRouteKind(dbKind ?? "tablesdb"));
	const { database: productDatabase } = useProjectDatabase(projectId, mode === "product" ? databaseId : null, dbKind ?? "tablesdb");
	const { database: postgresDatabase } = usePostgresDatabase(projectId, mode === "postgres" ? databaseId : null);
	const { database: mysqlDatabase } = useMysqlDatabase(projectId, mode === "mysql" ? databaseId : null);
	const { databases: dedicatedDatabases } = useProjectDedicatedDatabases(projectId);
	const specs = useMemo(() => mapDedicatedDatabaseSpecifications(specificationsData?.specifications), [specificationsData?.specifications]);
	const regionSupportsDedicatedCompute = projectSupportsDedicatedDatabaseCompute(project?.region);
	const planSupportsDedicatedCompute = planSupportsDedicatedDatabases(organizationPlan);
	const canManageCompute = canCreateDatabase(access, features);
	const billingEnabled = getActiveProfileFeatures().billing;
	const dedicatedById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const dedicated of dedicatedDatabases) map.set(dedicated.$id, dedicated);
		return map;
	}, [dedicatedDatabases]);
	const resolved = useMemo(() => {
		const connectionsUnit = t("connections");
		if (mode === "postgres" || mode === "mysql") {
			const nativeDatabase = mode === "postgres" ? postgresDatabase : mysqlDatabase;
			const nativeDedicated = dedicatedById.get(databaseId);
			const specSlug = coerceTrimmedString(nativeDatabase?.specification) || coerceTrimmedString(nativeDedicated?.specification) || void 0;
			const displayParts$1 = resolveDatabaseSpecDisplayParts(specs, specSlug, {
				cpuMillicores: nativeDatabase?.cpu ?? nativeDedicated?.cpu ?? void 0,
				memoryMb: nativeDatabase?.memory ?? nativeDedicated?.memory ?? void 0,
				fallbackLabel: specSlug ?? t("Compute tier")
			});
			return {
				displayParts: displayParts$1,
				specTooltip: displayParts$1.variant === "serverless" ? t("Serverless") : formatDatabaseSpecDisplayTooltip(displayParts$1, connectionsUnit) ?? t("Compute tier"),
				specSlug,
				computeLink: mode === "postgres" ? postgresNav({
					projectId,
					databaseId
				}).computeSettings() : mysqlNav({
					projectId,
					databaseId
				}).computeSettings(),
				serverless: false
			};
		}
		const databaseType = productDatabase?.databaseType ?? DatabaseType.Tablesdb;
		const dedicated = dedicatedById.get(databaseId);
		const productHints = {
			databaseType: productDatabase?.apiType ?? databaseType,
			status: productDatabase?.status ?? null,
			replicas: productDatabase?.replicas ?? null,
			specification: productDatabase?.specification ?? null
		};
		const resolvedSpecId = resolveDatabaseComputeSpecId(productHints, dedicated, {
			specs,
			rawSpecifications: specificationsData?.specifications ?? null
		});
		const dedicatedBacking = hasDedicatedDatabaseCompute(productHints, dedicated);
		const serverless = !dedicatedBacking && (resolvedSpecId == null || isServerlessDatabaseMonitoring(databaseType, resolvedSpecId));
		const apiSpecId = resolvedSpecId && !isServerlessDatabaseMonitoring(databaseType, resolvedSpecId) ? resolvedSpecId : dedicatedBacking ? null : getEffectiveDatabaseSpecIdForMonitoring(databaseType, null);
		const displayParts = resolveDatabaseSpecDisplayParts(specs, apiSpecId, {
			forceServerless: serverless,
			fallbackLabel: (apiSpecId ? getSpecOptionById(apiSpecId)?.label : void 0) ?? (serverless ? t("Serverless") : apiSpecId || t("Dedicated"))
		});
		const specTooltip = displayParts.variant === "serverless" ? t("Serverless") : formatDatabaseSpecDisplayTooltip(displayParts, connectionsUnit) ?? (serverless ? t("Serverless") : apiSpecId || t("Dedicated"));
		const tableNavParams = {
			projectId,
			dbKind: dbKind ?? "tablesdb",
			databaseId,
			resourceId: "-"
		};
		return {
			displayParts,
			specTooltip,
			specSlug: apiSpecId,
			serverless,
			computeLink: dbNavLink(tableNavParams.dbKind).dbSpecificationSettings(tableNavParams)
		};
	}, [
		dedicatedById,
		databaseId,
		dbKind,
		mode,
		postgresDatabase,
		mysqlDatabase,
		productDatabase,
		projectId,
		specificationsData?.specifications,
		specs,
		t
	]);
	const nextEnabledSpec = useMemo(() => getNextEnabledSpec(specs, resolved.specSlug ?? void 0), [resolved.specSlug, specs]);
	const nextLockedSpec = useMemo(() => getNextLockedSpec(specs, resolved.specSlug ?? void 0), [resolved.specSlug, specs]);
	const showUpgradeComingSoon = !regionSupportsDedicatedCompute && (resolved.serverless || !!nextEnabledSpec || !!nextLockedSpec);
	const showComputeUpgrade = regionSupportsDedicatedCompute && planSupportsDedicatedCompute === true && canManageCompute && (!!nextEnabledSpec || !!nextLockedSpec || resolved.serverless);
	const showPlanUpgrade = !showUpgradeComingSoon && !showComputeUpgrade && billingEnabled && (planSupportsDedicatedCompute === false || !!nextLockedSpec);
	if (!isDedicatedDbFeatureEnabled(dbKind, features) && mode === "product") return null;
	if (mode === "postgres" && !postgresDatabase && !dedicatedById.has(databaseId)) return null;
	const upgradeLink = showComputeUpgrade ? /* @__PURE__ */ jsx(Link, {
		...resolved.computeLink,
		className: "shrink-0 font-medium hover:text-foreground",
		children: t("Upgrade")
	}) : showPlanUpgrade ? /* @__PURE__ */ jsx(UpgradePlanLink, {
		orgId: project?.teamId,
		className: "shrink-0 font-medium",
		children: t("Upgrade")
	}) : showUpgradeComingSoon ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("span", {
			className: "shrink-0 font-medium text-muted-foreground/60",
			children: t("Upgrade")
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "max-w-xs text-[12px]",
		children: formatDedicatedDatabaseRegionUnavailableDescription(t)
	})] }) : null;
	const specLabel = resolved.displayParts.variant === "serverless" ? t("Serverless") : resolved.displayParts.variant === "label" ? resolved.displayParts.label ?? resolved.specTooltip : null;
	const strip = /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsx("div", {
			className: DATABASE_SIDEBAR_FOOTER_STRIP_ROW_CLASS,
			children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: canManageCompute ? /* @__PURE__ */ jsx(Link, {
					...resolved.computeLink,
					className: "min-w-0 flex-1 overflow-hidden transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
					"aria-label": resolved.specTooltip,
					children: /* @__PURE__ */ jsx(DatabaseSidebarComputeSpecDisplay, {
						parts: resolved.displayParts,
						label: specLabel
					})
				}) : /* @__PURE__ */ jsx("span", {
					className: "min-w-0 flex-1 overflow-hidden",
					"aria-label": resolved.specTooltip,
					children: /* @__PURE__ */ jsx(DatabaseSidebarComputeSpecDisplay, {
						parts: resolved.displayParts,
						label: specLabel
					})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-xs text-[12px]",
				children: resolved.specTooltip
			})] }), upgradeLink] })
		})
	});
	if (variant === "standalone") return /* @__PURE__ */ jsx("div", {
		className: DATABASE_SIDEBAR_FOOTER_STRIP_CLASS,
		children: strip
	});
	return /* @__PURE__ */ jsx("div", {
		"data-sidebar-spec": "",
		className: cn(DATABASE_SIDEBAR_STRIP_FULL_BLEED_CLASS, DATABASE_SIDEBAR_FOOTER_STRIP_CLASS),
		children: strip
	});
}
function DatabaseSidebarNavItem({ disabled = false, disabledTooltip, className, children, onClick, to, params, search }) {
	const t = useT();
	if (disabled) {
		const content = /* @__PURE__ */ jsx("span", {
			className: cn(className, "cursor-not-allowed opacity-50"),
			"aria-disabled": "true",
			children
		});
		if (!disabledTooltip) return content;
		return /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: content
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-xs",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px]",
					children: t(disabledTooltip)
				})
			})] })
		});
	}
	if (onClick) return /* @__PURE__ */ jsx("button", {
		type: "button",
		className,
		onClick,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		to,
		params,
		search,
		className,
		children
	});
}
var DEFAULT_LIMIT = 15;
function DatabaseSelectorBreadcrumb({ typeLabel, name, status, translate }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "flex min-w-0 flex-1 items-center gap-1.5 text-[13px]",
		children: [/* @__PURE__ */ jsxs("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "shrink-0 text-muted-foreground",
					children: translate(typeLabel)
				}),
				/* @__PURE__ */ jsx(ChevronRight, {
					className: "h-3 w-3 shrink-0 text-muted-foreground/60",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("span", {
					className: "min-w-0 truncate font-medium text-foreground",
					children: name
				})
			]
		}), /* @__PURE__ */ jsx(DedicatedDatabaseStatusBadge, {
			status,
			onlyWhenNotReady: true
		})]
	});
}
function DatabaseSelector({ projectId, value, selectedName, onSelect, placeholder = "Select database", limit = DEFAULT_LIMIT, triggerClassName, emptyLabel, selectedIsNative = false, createTableMenuLabel = "Create table", onCreateDatabaseClick, onCreateTableClick, createDatabaseDisabled = false, createDatabaseDisabledTooltip = "You don't have permission to create databases.", createTableDisabled = false, createTableDisabledTooltip = "You don't have permission to create tables." }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const showCreateActions = onCreateDatabaseClick != null || onCreateTableClick != null;
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const { data: consoleData, isFetching: isConsoleFetching } = useQuery({
		...consoleDatabasesQueryOptions(projectId, 0, limit, debouncedSearch || void 0),
		enabled: !!projectId && open,
		placeholderData: keepPreviousData
	});
	const { data: dedicatedData } = useQuery({
		...dedicatedDatabasesQueryOptions(projectId),
		enabled: !!projectId && (open || !!value),
		placeholderData: keepPreviousData
	});
	const dedicatedById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const dedicated of dedicatedData?.databases ?? []) {
			if (!dedicated.$id) continue;
			map.set(dedicated.$id, {
				specSlug: coerceTrimmedString(dedicated.specification) || null,
				engine: dedicated.engine ?? null,
				api: dedicated.api ?? null,
				status: dedicated.status ?? null
			});
		}
		return map;
	}, [dedicatedData?.databases]);
	const selectedDedicated = value ? dedicatedById.get(value) : void 0;
	const skipProductDatabaseLookup = selectedIsNative || Boolean(selectedDedicated);
	const { data: selectedProductDatabase } = useQuery({
		...consoleDatabasesQueryOptions(projectId, 0, 1, void 0, [Query.equal("$id", [value || ""])]),
		enabled: !!projectId && !!value && !skipProductDatabaseLookup
	});
	const items = useMemo(() => {
		return (consoleData?.databases ?? []).map((db) => {
			const dedicated = dedicatedById.get(db.$id);
			const productHints = {
				databaseType: db.type,
				status: db.status,
				replicas: typeof db.replicas === "number" ? db.replicas : null,
				specification: coerceTrimmedString(db.specification) || null
			};
			return {
				id: db.$id,
				name: db.$id === value && selectedName ? selectedName : db.name,
				apiType: db.type,
				engine: db.engine ?? engineFromDatabaseTypeValue(db.type) ?? dedicated?.engine ?? null,
				product: productFromDatabaseTypeValue(db.type) ?? dedicated?.api ?? null,
				specSlug: resolveDatabaseComputeSpecId(productHints, dedicated),
				status: dedicated?.status ?? (typeof db.status === "string" ? db.status : null)
			};
		});
	}, [
		consoleData?.databases,
		dedicatedById,
		selectedName,
		value
	]);
	const selectedItem = value ? items.find((item) => item.id === value) : void 0;
	const displayName = selectedName || selectedItem?.name || t(placeholder);
	const selectedApiType = selectedItem?.apiType ?? selectedProductDatabase?.databases?.[0]?.type ?? null;
	const selectedEngine = selectedItem?.engine ?? selectedDedicated?.engine ?? null;
	const selectedProduct = selectedItem?.product ?? selectedDedicated?.api ?? null;
	const isFetching = isConsoleFetching;
	const resolvedEmptyLabel = emptyLabel ?? t("No databases found");
	const bothCreateDisabled = createDatabaseDisabled && createTableDisabled;
	const triggerDisabledTooltip = t("You don't have permission to create databases or tables.");
	const popover = /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				className: cn("h-9 min-w-0 justify-between gap-1.5 text-[13px] font-normal", showCreateActions ? "flex-1" : "w-full", !value && "text-muted-foreground", triggerClassName),
				children: [/* @__PURE__ */ jsxs("span", {
					className: "flex min-w-0 flex-1 items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx(DatabaseTypeIcon, {
							apiType: selectedApiType,
							engine: selectedEngine,
							product: selectedProduct
						}),
						/* @__PURE__ */ jsx("span", {
							className: cn("min-w-0 truncate", value && "text-[13px] font-medium text-foreground"),
							children: displayName
						}),
						/* @__PURE__ */ jsx(DedicatedDatabaseStatusBadge, {
							status: selectedItem?.status ?? selectedDedicated?.status ?? null,
							onlyWhenNotReady: true
						})
					]
				}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: "min-w-[var(--radix-popover-trigger-width)] max-w-[320px] p-0",
			align: "start",
			children: /* @__PURE__ */ jsxs(Command$1, {
				shouldFilter: false,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(CommandInput, {
						placeholder: t("Search databases..."),
						value: search,
						onValueChange: setSearch,
						className: cn("h-9", isFetching && "pe-8")
					}), /* @__PURE__ */ jsx("div", {
						className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
					})]
				}), /* @__PURE__ */ jsxs(CommandList, {
					className: "min-h-[180px] max-h-[240px]",
					children: [items.length === 0 && /* @__PURE__ */ jsx(CommandEmpty, { children: isFetching ? "" : t(resolvedEmptyLabel) }), /* @__PURE__ */ jsx(CommandGroup, { children: items.map((item) => {
						const typeLabel = getDatabaseTypeDisplayLabel(item.apiType, item.engine, item.product);
						const typeUnavailable = !isDatabaseTypeFeatureEnabled(item.apiType, features);
						const option = /* @__PURE__ */ jsxs("button", {
							type: "button",
							disabled: typeUnavailable,
							onClick: () => {
								if (typeUnavailable) return;
								onSelect(item.id, {
									id: item.id,
									apiType: item.apiType,
									engine: item.engine,
									product: item.product
								});
								setOpen(false);
							},
							className: cn("flex w-full items-center gap-1.5 rounded-sm px-2 py-1.5 text-start outline-none transition-colors", typeUnavailable ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-accent hover:text-accent-foreground", item.id === value && "bg-accent/50"),
							children: [/* @__PURE__ */ jsx(DatabaseTypeIcon, {
								apiType: item.apiType,
								engine: item.engine,
								product: item.product
							}), /* @__PURE__ */ jsx(DatabaseSelectorBreadcrumb, {
								typeLabel,
								name: item.name,
								status: item.status,
								translate: t
							})]
						});
						if (!typeUnavailable) return /* @__PURE__ */ jsx(Fragment$1, { children: option }, item.id);
						return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", {
								className: "block w-full",
								children: option
							})
						}), /* @__PURE__ */ jsx(TooltipContent, {
							className: "max-w-xs text-[12px]",
							children: t(DEDICATED_FEATURE_UNAVAILABLE)
						})] }, item.id);
					}) })]
				})]
			})
		})]
	});
	if (!showCreateActions) return popover;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 flex-1 items-center gap-2",
		children: [popover, bothCreateDisabled ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: "inline-flex",
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "icon",
					className: "h-8 w-8 shrink-0",
					disabled: true,
					"aria-label": triggerDisabledTooltip,
					children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: triggerDisabledTooltip
		})] }) : /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "icon",
				className: "h-8 w-8 shrink-0",
				"aria-label": t("Create database or table"),
				"aria-haspopup": "menu",
				children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			children: [/* @__PURE__ */ jsxs(DropdownMenuItem, {
				disabled: createDatabaseDisabled,
				title: createDatabaseDisabled ? t(createDatabaseDisabledTooltip) : void 0,
				className: "gap-2 text-[13px]",
				onSelect: () => onCreateDatabaseClick?.(),
				...analyticsAttrs("create-database"),
				children: [/* @__PURE__ */ jsx(Database, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), t("Create database")]
			}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
				disabled: createTableDisabled,
				title: createTableDisabled ? t(createTableDisabledTooltip) : void 0,
				className: "gap-2 text-[13px]",
				onSelect: () => onCreateTableClick?.(),
				...analyticsAttrs("create-table"),
				children: [/* @__PURE__ */ jsx(Table2, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), t(createTableMenuLabel)]
			})]
		})] })]
	});
}
function normalizeKey(value) {
	return String(value ?? "").trim().toLowerCase().replace(/-/g, "");
}
function isAppwriteProductKey(key) {
	return key === "tablesdb" || key === "documentsdb" || key === "vectorsdb" || key === String(DatabaseType.Tablesdb).toLowerCase() || key === String(DatabaseType.Documentsdb).toLowerCase() || key === String(DatabaseType.Vectorsdb).toLowerCase();
}
function resolveProductDatabaseType(selection) {
	const apiType = normalizeKey(selection.apiType);
	const product = normalizeKey(selection.product);
	for (const key of [apiType, product]) {
		if (key === "documentsdb") return DatabaseType.Documentsdb;
		if (key === "vectorsdb") return DatabaseType.Vectorsdb;
		if (key === "tablesdb") return DatabaseType.Tablesdb;
	}
	return DatabaseType.Tablesdb;
}
function resolveDatabaseSwitcherHomeLink(projectId, selection) {
	const product = normalizeKey(selection.product);
	const apiType = normalizeKey(selection.apiType);
	const hasAppwriteProduct = isAppwriteProductKey(apiType) || isAppwriteProductKey(product);
	const isNativeProduct = isNativeDatabaseTypeValue(product) || isNativeDatabaseTypeValue(apiType);
	const engineHint = selection.engine ?? selection.apiType ?? selection.product;
	const isNativeEngineOnly = !hasAppwriteProduct && !isNativeProduct && apiType !== "legacy" && apiType !== "databases" && (isPostgresEngine(engineHint ?? void 0) || isMysqlEngine(engineHint ?? void 0) || isMongoEngine(engineHint ?? void 0));
	if (isNativeProduct || isNativeEngineOnly) {
		if (isPostgresEngine(engineHint ?? void 0)) {
			const link$1 = postgresDatabaseHome({
				projectId,
				databaseId: selection.id,
				tableId: "-"
			});
			return {
				to: link$1.to,
				params: link$1.params
			};
		}
		if (isMysqlEngine(engineHint ?? void 0)) {
			const link$1 = mysqlDatabaseHome({
				projectId,
				databaseId: selection.id,
				tableId: "-"
			});
			return {
				to: link$1.to,
				params: link$1.params
			};
		}
	}
	const type = resolveProductDatabaseType(selection);
	const link = productDatabaseListLink(projectId, selection.id, type);
	return {
		to: link.to,
		params: link.params
	};
}
function isNativeDatabaseHomeLink(link) {
	const to = String(link.to);
	return to.includes("/databases/postgres/") || to.includes("/databases/mysql/");
}
async function navigateToDatabaseFromSwitcher(options) {
	const { projectId, selection, navigate, queryClient } = options;
	const home = resolveDatabaseSwitcherHomeLink(projectId, selection);
	if (isNativeDatabaseHomeLink(home)) {
		navigate(home);
		return;
	}
	const dbKind = databaseRouteKindFromApiType(resolveProductDatabaseType(selection));
	try {
		const firstTable = ((await queryClient.ensureQueryData(tablesQueryOptions(projectId, selection.id, dbKind, 0, 25, void 0, "asc", "$createdAt"))).tables || [])[0];
		const link = dbNavLink(dbKind).dataGrid({
			projectId,
			dbKind,
			databaseId: selection.id,
			resourceId: firstTable?.$id ?? "-"
		});
		navigate({
			to: link.to,
			params: link.params
		});
	} catch {
		navigate(home);
	}
}
export { DATABASE_SIDEBAR_LIST_STRIP_CLASS as a, DedicatedDatabaseStatusBadge as c, DatabaseSidebarComputeSpec as i, DatabaseSelector as n, DATABASE_SIDEBAR_LIST_STRIP_ROW_CLASS as o, DatabaseSidebarNavItem as r, isSpreadsheetLikeTableTab as s, navigateToDatabaseFromSwitcher as t };
