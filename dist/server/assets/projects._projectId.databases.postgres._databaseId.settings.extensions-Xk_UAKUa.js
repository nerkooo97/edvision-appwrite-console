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
import { Mt as useOrganizationPlan } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Af as useUninstallPostgresDatabaseExtension, Of as useInstallPostgresDatabaseExtension, kf as usePostgresDatabaseExtensions } from "./hooks-BONwG3Mt.js";
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
import "./affiliates-BOg1SHC6.js";
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
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./Avatar-D1PavDBA.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./horizontal-resize-BcegzCwH.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import "./postgres-sql-editor-shortcuts-CXAI529H.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { i as RESOURCE_CARD_GRID_CLASSNAME, t as RESOURCE_CARD_BASE_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { n as useDatabaseAdminOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import "./postgres-chrome-B-StjUdY.js";
import { t as PostgresSegmentedToggle } from "./PostgresSegmentedToggle-DI-wMyPm.js";
import { _ as matchesPostgresLocalSearch } from "./postgres-spreadsheet-chrome-BSNXJzGv.js";
import { n as usePostgresDatabaseSettingsPage, t as PostgresSettingsLoading } from "./PostgresSettingsLoading-Ba3ADHgQ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Loader2, Puzzle, Search, Tags, X } from "lucide-react";
var catalogByKey = new Map([
	{
		key: "pgvector",
		name: "pgvector",
		description: "Vector similarity search for embeddings and AI workloads.",
		category: "AI"
	},
	{
		key: "postgis",
		name: "PostGIS",
		description: "Geospatial types, indexes, and functions for location data.",
		category: "Geospatial"
	},
	{
		key: "uuid-ossp",
		name: "uuid-ossp",
		description: "Generate universally unique identifiers (UUIDs).",
		category: "Utility"
	},
	{
		key: "pg_trgm",
		name: "pg_trgm",
		description: "Trigram-based text similarity and fuzzy search.",
		category: "Search"
	},
	{
		key: "citext",
		name: "citext",
		description: "Case-insensitive character string type.",
		category: "Data types"
	},
	{
		key: "hstore",
		name: "hstore",
		description: "Key-value store inside a single column.",
		category: "Data types"
	},
	{
		key: "pgcrypto",
		name: "pgcrypto",
		description: "Cryptographic functions for hashing and encryption.",
		category: "Security"
	},
	{
		key: "btree_gin",
		name: "btree_gin",
		description: "B-tree equivalent operators for GIN indexes.",
		category: "Indexing"
	},
	{
		key: "btree_gist",
		name: "btree_gist",
		description: "B-tree equivalent operators for GiST indexes.",
		category: "Indexing"
	},
	{
		key: "pg_stat_statements",
		name: "pg_stat_statements",
		description: "Track planning and execution statistics for SQL statements.",
		category: "Monitoring"
	},
	{
		key: "pg_cron",
		name: "pg_cron",
		description: "Schedule PostgreSQL commands using cron syntax.",
		category: "Scheduling"
	},
	{
		key: "timescaledb",
		name: "TimescaleDB",
		description: "Time-series data hypertables and analytics.",
		category: "Time series"
	},
	{
		key: "plpgsql",
		name: "plpgsql",
		description: "Procedural language for PostgreSQL functions and triggers.",
		category: "Language"
	},
	{
		key: "fuzzystrmatch",
		name: "fuzzystrmatch",
		description: "String distance and phonetic matching functions.",
		category: "Search"
	},
	{
		key: "unaccent",
		name: "unaccent",
		description: "Remove accents from text for search and matching.",
		category: "Search"
	}
].map((entry) => [entry.key.toLowerCase(), entry]));
function resolvePostgresExtensionInfo(key, apiMetadata) {
	const normalized = key.trim().toLowerCase();
	const fromApi = apiMetadata?.find((entry) => entry.key.trim().toLowerCase() === normalized);
	if (fromApi) return {
		key: fromApi.key,
		name: fromApi.name || fromApi.key,
		description: fromApi.description || "",
		category: fromApi.category || "Extension"
	};
	const catalog = catalogByKey.get(normalized);
	if (catalog) return catalog;
	return {
		key,
		name: key,
		description: "",
		category: "Extension"
	};
}
var EXTENSION_STATUS_SORT_RANK = {
	installed: 0,
	uninstalling: 1,
	installing: 2,
	available: 3
};
function compareStrings(a, b, order) {
	const result = a.localeCompare(b, void 0, { sensitivity: "base" });
	return order === "asc" ? result : -result;
}
function sortPostgresExtensionRows(rows, sortBy, sortOrder) {
	const sorted = [...rows];
	sorted.sort((a, b) => {
		let primary = 0;
		switch (sortBy) {
			case "key":
				primary = compareStrings(a.key, b.key, sortOrder);
				break;
			case "category":
				primary = compareStrings(a.category || "", b.category || "", sortOrder);
				break;
			case "status":
				primary = (EXTENSION_STATUS_SORT_RANK[a.status] - EXTENSION_STATUS_SORT_RANK[b.status]) * (sortOrder === "asc" ? 1 : -1);
				break;
			case "description":
				primary = compareStrings(a.description || "", b.description || "", sortOrder);
				break;
		}
		if (primary !== 0) return primary;
		return compareStrings(a.key, b.key, "asc");
	});
	return sorted;
}
function matchesExtensionStatusFilter(status, filter) {
	switch (filter) {
		case "all": return true;
		case "installed": return status === "installed" || status === "uninstalling";
		case "in_progress": return status === "installing" || status === "uninstalling";
	}
}
function matchesExtensionCategoryFilter(category, selectedCategories) {
	if (selectedCategories.size === 0) return true;
	return selectedCategories.has(category || "Extension");
}
function getPostgresExtensionCategories(rows) {
	const categories = /* @__PURE__ */ new Set();
	for (const row of rows) categories.add(row.category || "Extension");
	return Array.from(categories).sort((a, b) => a.localeCompare(b));
}
function buildPostgresExtensionRows(args) {
	const { installed, available, pendingInstalls, pendingUninstalls, metadata } = args;
	const installedSet = new Set(installed);
	const availableSet = new Set(available);
	const keys = /* @__PURE__ */ new Set();
	for (const key of installed) keys.add(key);
	for (const key of available) keys.add(key);
	for (const key of pendingInstalls) keys.add(key);
	for (const key of pendingUninstalls) keys.add(key);
	const rows = [];
	for (const key of keys) {
		const info = resolvePostgresExtensionInfo(key, metadata);
		let status = "available";
		if (pendingInstalls.has(key)) status = "installing";
		else if (pendingUninstalls.has(key)) status = "uninstalling";
		else if (installedSet.has(key)) status = "installed";
		else if (availableSet.has(key)) status = "available";
		rows.push({
			...info,
			status
		});
	}
	return sortPostgresExtensionRows(rows, "status", "asc");
}
function PostgresExtensionsHeaderLimit({ projectId, databaseId }) {
	const { project } = useProject(projectId);
	const { plan } = useOrganizationPlan(project?.teamId);
	const { installed, isLoading } = usePostgresDatabaseExtensions(projectId, databaseId);
	const maxExtensions = plan?.dedicatedDatabases?.maxExtensions;
	if (maxExtensions == null || maxExtensions <= 0) return null;
	const installedCount = installed.length;
	const usagePercent = installedCount / maxExtensions * 100;
	const usageTone = usagePercent >= 90 ? "critical" : usagePercent >= 75 ? "warning" : "normal";
	const tooltipText = isLoading ? `This plan allows up to ${maxExtensions} database extensions.` : `${installedCount} of ${maxExtensions} extensions are installed on this database.`;
	const inlineLabel = `${installedCount.toLocaleString()} / ${maxExtensions.toLocaleString()}`;
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: cn("shrink-0 text-[12px] font-normal tabular-nums", usageTone === "critical" && "text-destructive", usageTone === "warning" && "text-amber-600 dark:text-amber-500", usageTone === "normal" && "text-muted-foreground"),
				children: inlineLabel
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			className: "max-w-xs text-[12px]",
			children: tooltipText
		})] })
	});
}
function ExtensionStatusBadge({ status }) {
	const t = useT();
	if (status === "installing" || status === "uninstalling") return /* @__PURE__ */ jsxs(Badge, {
		variant: "info",
		className: "gap-1 text-[10px] shrink-0",
		children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }), status === "installing" ? t("Installing") : t("Uninstalling")]
	});
	if (status === "installed") return /* @__PURE__ */ jsx(Badge, {
		variant: "success",
		className: "text-[10px] shrink-0",
		children: t("Installed")
	});
	return /* @__PURE__ */ jsx(Badge, {
		variant: "info",
		className: "text-[10px] shrink-0",
		children: t("Available")
	});
}
function ExtensionCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(RESOURCE_CARD_BASE_CLASSNAME, "flex flex-col p-4"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 space-y-1.5",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-16" })]
			}), /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-16 shrink-0 rounded-full" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-3 border-t border-border pt-3",
			children: /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-full rounded-md" })
		})]
	});
}
function ExtensionCard({ row, canManage, atExtensionLimit, actionPending, onInstall, onUninstall, getInstallDisabledReason }) {
	const t = useT();
	const canInstall = row.status === "available" && canManage && !atExtensionLimit;
	const canUninstall = row.status === "installed" && canManage;
	const installDisabledReason = getInstallDisabledReason(row);
	const isRowBusy = row.status === "installing" || row.status === "uninstalling";
	const showActions = canInstall || canUninstall;
	const installButton = /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "secondary",
		size: "sm",
		className: "h-8 w-full text-[13px]",
		disabled: !!installDisabledReason || isRowBusy || actionPending,
		onClick: () => onInstall(row),
		children: t("Install")
	});
	const uninstallButton = /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "secondary",
		size: "sm",
		className: "h-8 w-full text-[13px]",
		disabled: isRowBusy || actionPending,
		onClick: () => onUninstall(row),
		children: t("Uninstall")
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn(RESOURCE_CARD_BASE_CLASSNAME, "flex h-full flex-col p-4"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate font-mono text-[13px] font-medium text-foreground",
					children: row.key
				}), row.category ? /* @__PURE__ */ jsx("p", {
					className: "truncate text-[11px] text-muted-foreground",
					children: row.category
				}) : null]
			}), /* @__PURE__ */ jsx(ExtensionStatusBadge, { status: row.status })]
		}), showActions ? /* @__PURE__ */ jsx("div", {
			className: "mt-3 border-t border-border pt-3",
			children: canInstall ? installDisabledReason ? /* @__PURE__ */ jsx(TooltipProvider, {
				delayDuration: 0,
				children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("span", {
						className: "inline-flex w-full",
						children: installButton
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "bottom",
					className: "max-w-xs text-[12px]",
					children: installDisabledReason
				})] })
			}) : installButton : uninstallButton
		}) : null]
	});
}
function PostgresExtensionsPanel({ databaseId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { plan } = useOrganizationPlan(project?.teamId);
	const { canWrite: canManage, writeTooltip: manageWriteTooltip } = useDatabaseAdminOperationsAccess();
	const [searchValue, setSearchValue] = useState("");
	const [filter, setFilter] = useState("all");
	const [selectedCategories, setSelectedCategories] = useState(() => /* @__PURE__ */ new Set());
	const [categoryPopoverOpen, setCategoryPopoverOpen] = useState(false);
	const [pendingInstalls, setPendingInstalls] = useState(() => /* @__PURE__ */ new Set());
	const [pendingUninstalls, setPendingUninstalls] = useState(() => /* @__PURE__ */ new Set());
	const [confirmInstall, setConfirmInstall] = useState(null);
	const [confirmUninstall, setConfirmUninstall] = useState(null);
	const hasPendingOperations = pendingInstalls.size > 0 || pendingUninstalls.size > 0;
	const { installed, available, metadata, isLoading, isFetching, error, refetch } = usePostgresDatabaseExtensions(projectId, databaseId, { pollWhilePending: hasPendingOperations });
	const installMutation = useInstallPostgresDatabaseExtension(projectId, databaseId);
	const uninstallMutation = useUninstallPostgresDatabaseExtension(projectId, databaseId);
	const maxExtensions = plan?.dedicatedDatabases?.maxExtensions ?? 0;
	const atExtensionLimit = maxExtensions > 0 && installed.length >= maxExtensions;
	const rows = useMemo(() => buildPostgresExtensionRows({
		installed,
		available,
		pendingInstalls,
		pendingUninstalls,
		metadata
	}), [
		installed,
		available,
		pendingInstalls,
		pendingUninstalls,
		metadata
	]);
	const filterCounts = useMemo(() => {
		const counts = {
			all: rows.length,
			installed: 0,
			in_progress: 0
		};
		for (const row of rows) {
			if (row.status === "installed" || row.status === "uninstalling") counts.installed += 1;
			if (row.status === "installing" || row.status === "uninstalling") counts.in_progress += 1;
		}
		return counts;
	}, [rows]);
	const categories = useMemo(() => getPostgresExtensionCategories(rows), [rows]);
	const filteredRows = useMemo(() => {
		const normalizedSearch = searchValue.trim();
		return rows.filter((row) => {
			if (!matchesExtensionStatusFilter(row.status, filter)) return false;
			if (!matchesExtensionCategoryFilter(row.category, selectedCategories)) return false;
			if (!normalizedSearch) return true;
			return matchesPostgresLocalSearch(normalizedSearch, row.name, row.key, row.category, row.description);
		});
	}, [
		filter,
		rows,
		searchValue,
		selectedCategories
	]);
	const displayRows = useMemo(() => sortPostgresExtensionRows(filteredRows, "status", "asc"), [filteredRows]);
	const hasPanelFilters = filter !== "all" || selectedCategories.size > 0;
	const hasActiveFilters = hasPanelFilters || !!searchValue.trim();
	const toggleCategory = useCallback((category, checked) => {
		setSelectedCategories((current) => {
			const next = new Set(current);
			if (checked) next.add(category);
			else next.delete(category);
			return next;
		});
	}, []);
	const clearFilters = useCallback(() => {
		setFilter("all");
		setSelectedCategories(/* @__PURE__ */ new Set());
	}, []);
	const clearResolvedPending = useCallback(() => {
		setPendingInstalls((current) => {
			const next = new Set(current);
			for (const key of current) if (installed.includes(key)) next.delete(key);
			return next.size === current.size ? current : next;
		});
		setPendingUninstalls((current) => {
			const next = new Set(current);
			for (const key of current) if (!installed.includes(key)) next.delete(key);
			return next.size === current.size ? current : next;
		});
	}, [installed]);
	useEffect(() => {
		clearResolvedPending();
	}, [
		clearResolvedPending,
		installed,
		available
	]);
	const handleInstall = async () => {
		if (!confirmInstall) return;
		const extensionKey = confirmInstall.key;
		setPendingInstalls((current) => new Set(current).add(extensionKey));
		try {
			await installMutation.mutateAsync(extensionKey);
			toast.success(t("Extension install started"));
			setConfirmInstall(null);
			await refetch();
		} catch (installError) {
			setPendingInstalls((current) => {
				const next = new Set(current);
				next.delete(extensionKey);
				return next;
			});
			toast.error(getErrorMessage(installError) ?? t("Failed to install extension"));
		}
	};
	const handleUninstall = async () => {
		if (!confirmUninstall) return;
		const extensionKey = confirmUninstall.key;
		setPendingUninstalls((current) => new Set(current).add(extensionKey));
		try {
			await uninstallMutation.mutateAsync(extensionKey);
			toast.success(t("Extension uninstall started"));
			setConfirmUninstall(null);
			await refetch();
		} catch (uninstallError) {
			setPendingUninstalls((current) => {
				const next = new Set(current);
				next.delete(extensionKey);
				return next;
			});
			toast.error(getErrorMessage(uninstallError) ?? t("Failed to uninstall extension"));
		}
	};
	const actionPending = installMutation.isPending || uninstallMutation.isPending;
	const errorMessage = error ? getErrorMessage(error) : null;
	const filterOptions = [
		{
			value: "all",
			label: `${t("All")} (${filterCounts.all})`
		},
		{
			value: "installed",
			label: `${t("Installed")} (${filterCounts.installed})`
		},
		{
			value: "in_progress",
			label: `${t("In progress")} (${filterCounts.in_progress})`
		}
	];
	const emptyTitle = filter === "installed" ? t("No extensions installed") : filter === "in_progress" ? t("No extensions in progress") : searchValue.trim() && !hasPanelFilters ? t("No extensions match your search") : hasActiveFilters ? t("No extensions match your filters") : t("No extensions");
	const emptyDescription = filter === "installed" ? t("Install an extension from the available list to extend PostgreSQL capabilities.") : filter === "in_progress" ? t("Extensions being installed or uninstalled will appear here.") : hasActiveFilters ? t("Try adjusting or clearing filters.") : t("Extensions for this database will appear here when available.");
	const getInstallDisabledReason = (row) => {
		if (!canManage) return manageWriteTooltip ?? t("You don't have permission to manage extensions.");
		if (atExtensionLimit) return t("Upgrade your plan or uninstall an extension to install more.");
		if (row.status === "installing" || row.status === "uninstalling") return t("An extension operation is already in progress.");
	};
	const showLoadingCards = isLoading && rows.length === 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center gap-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative w-48",
							children: [
								/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ jsx(Input, {
									placeholder: t("Search extensions..."),
									value: searchValue,
									onChange: (event) => setSearchValue(event.target.value),
									className: cn("h-8 w-full ps-9 text-[13px]", searchValue && "pe-9")
								}),
								searchValue ? /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setSearchValue(""),
									className: "absolute end-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground",
									"aria-label": t("Clear search"),
									children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
								}) : null
							]
						}), /* @__PURE__ */ jsx(PostgresExtensionsHeaderLimit, {
							projectId,
							databaseId
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 flex-1 items-center gap-2 overflow-x-auto py-1",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "hidden h-4 w-px shrink-0 bg-border sm:block",
								"aria-hidden": true
							}),
							/* @__PURE__ */ jsx(PostgresSegmentedToggle, {
								value: filter,
								onValueChange: setFilter,
								options: filterOptions,
								ariaLabel: "Extension filters",
								variant: "inline"
							}),
							categories.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
								className: "hidden h-4 w-px shrink-0 bg-border sm:block",
								"aria-hidden": true
							}), /* @__PURE__ */ jsxs(Popover, {
								open: categoryPopoverOpen,
								onOpenChange: setCategoryPopoverOpen,
								children: [/* @__PURE__ */ jsx(PopoverTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: selectedCategories.size > 0 ? "secondary" : "outline",
										size: "sm",
										className: "h-8 shrink-0 text-[12px]",
										"aria-label": t("Filter by category"),
										children: [
											/* @__PURE__ */ jsx(Tags, { className: "me-1.5 h-3.5 w-3.5" }),
											t("Category"),
											selectedCategories.size > 0 ? /* @__PURE__ */ jsx("span", {
												className: "ms-1.5 text-muted-foreground",
												children: selectedCategories.size
											}) : null
										]
									})
								}), /* @__PURE__ */ jsxs(PopoverContent, {
									align: "start",
									className: "w-56 p-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "max-h-[min(40dvh,280px)] overflow-y-auto",
										children: categories.map((category) => {
											return /* @__PURE__ */ jsxs("label", {
												className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] hover:bg-muted/60",
												children: [/* @__PURE__ */ jsx(Checkbox, {
													checked: selectedCategories.has(category),
													onCheckedChange: (value) => toggleCategory(category, value === true)
												}), /* @__PURE__ */ jsx("span", {
													className: "min-w-0 truncate",
													children: category
												})]
											}, category);
										})
									}), selectedCategories.size > 0 ? /* @__PURE__ */ jsx("div", {
										className: "mt-2 border-t border-border pt-2",
										children: /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "ghost",
											size: "sm",
											className: "h-8 w-full text-[12px]",
											onClick: () => setSelectedCategories(/* @__PURE__ */ new Set()),
											children: t("All categories")
										})
									}) : null]
								})]
							})] }) : null,
							hasPanelFilters ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "h-8 shrink-0 text-[12px]",
								onClick: clearFilters,
								children: t("Clear filters")
							}) : null
						]
					}),
					/* @__PURE__ */ jsx(RefreshButton, {
						className: "shrink-0",
						onClick: () => void refetch(),
						isRefreshing: isFetching
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { children: errorMessage ? /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: Puzzle,
				title: t("Failed to load extensions"),
				description: errorMessage,
				isEmpty: true
			}) : showLoadingCards ? /* @__PURE__ */ jsx("div", {
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				"aria-label": t("Loading extensions..."),
				children: /* @__PURE__ */ jsx("div", {
					className: RESOURCE_CARD_GRID_CLASSNAME,
					children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ jsx(ExtensionCardSkeleton, {}, index))
				})
			}) : displayRows.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "flex min-h-[12rem] items-center justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "w-full max-w-sm",
					children: /* @__PURE__ */ jsx(EmptyState, {
						variant: "centered",
						icon: Puzzle,
						title: emptyTitle,
						description: emptyDescription,
						isEmpty: true
					})
				})
			}) : /* @__PURE__ */ jsx("div", {
				className: RESOURCE_CARD_GRID_CLASSNAME,
				children: displayRows.map((row) => /* @__PURE__ */ jsx(ExtensionCard, {
					row,
					canManage,
					atExtensionLimit,
					actionPending,
					onInstall: setConfirmInstall,
					onUninstall: setConfirmUninstall,
					getInstallDisabledReason
				}, row.key))
			}) }),
			isFetching && !showLoadingCards ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: hasPendingOperations ? t("Waiting for extension operation to complete...") : t("Refreshing extensions...")
			}) : null,
			/* @__PURE__ */ jsx(AlertDialog, {
				open: !!confirmInstall,
				onOpenChange: (open) => {
					if (!open) setConfirmInstall(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(AlertDialogHeader, {
						className: "px-6 pt-6 pb-4 text-left",
						children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: t("Install extension") }), /* @__PURE__ */ jsxs(AlertDialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Install"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium font-mono",
									children: confirmInstall?.key
								}),
								"?",
								" ",
								t("Installation runs in the background and may take a few minutes.")
							]
						})]
					}), /* @__PURE__ */ jsxs(AlertDialogFooter, {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
							disabled: actionPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							disabled: actionPending,
							onClick: () => void handleInstall(),
							children: t("Install")
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(AlertDialog, {
				open: !!confirmUninstall,
				onOpenChange: (open) => {
					if (!open) setConfirmUninstall(null);
				},
				children: /* @__PURE__ */ jsxs(AlertDialogContent, {
					className: "sm:max-w-md p-0",
					children: [/* @__PURE__ */ jsxs(AlertDialogHeader, {
						className: "px-6 pt-6 pb-4 text-left",
						children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: t("Uninstall extension") }), /* @__PURE__ */ jsxs(AlertDialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("Uninstall"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium font-mono",
									children: confirmUninstall?.key
								}),
								"?",
								" ",
								t("This action cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs(AlertDialogFooter, {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
							disabled: actionPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							disabled: actionPending,
							onClick: () => void handleUninstall(),
							children: t("Uninstall")
						})]
					})]
				})
			})
		]
	});
}
function View() {
	const { databaseId, isLoading } = usePostgresDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(PostgresSettingsLoading, {});
	return /* @__PURE__ */ jsx(PostgresExtensionsPanel, { databaseId });
}
var SplitComponent = View;
export { SplitComponent as component };
