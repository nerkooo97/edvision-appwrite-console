import { n as useT } from "./translate-DZcqveGn.js";
import { Ht as useProjectBandwidthBreakdownDrawer, Jr as splitUsageBreakdownEntries, Jt as useProjectDatabaseReadsBreakdownDrawer, Ml as formatRequestsValue, On as useUsageResourceBreakdownLookups, Ur as formatDatabaseOperationsTotal, Wr as formatDatabaseOperationsValue, Ws as useCountryLookups, Zt as useProjectDatabaseWritesBreakdownDrawer, ei as formatBandwidthValue, mn as useProjectRequestsBreakdownDrawer } from "./hooks-BONwG3Mt.js";
import { r as USAGE_BREAKDOWN_DRAWER_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { t as downloadAsFile } from "./database-schema-export-CXFqsfki.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { s as OVERVIEW_REQUESTS_ERROR, t as OVERVIEW_BANDWIDTH_ERROR } from "./chart-panel-CCGEGd61.js";
import { t as OverviewChartPanelError } from "./OverviewChartPanelError-D9UA3Ssz.js";
import { c as UsageBreakdownListSkeleton, l as UsageBreakdownRowsList, n as UsageBreakdownCard, t as UsageTimeSeriesChartCard, u as formatBreakdownLabel } from "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { t as UsageResourceBreakdownCard } from "./UsageResourceBreakdownCard-D5ZVWuSc.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useId, useMemo } from "react";
import { toast } from "sonner";
import { Download, FileJson, FileText, Loader2 } from "lucide-react";
var DATABASE_USAGE_ERROR$1 = {
	title: "Couldn't load database usage",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
function breakdownDrawerTitle(operation, section, t) {
	return `${operation === "reads" ? t("Reads") : t("Writes")} · ${t(section.title)}`;
}
function DatabaseOperationBentoCard({ projectId: _projectId, operation, title, description, unitLabel, chartGradientId, chartPoints, total, changePercent, isLoading, isError, queryError, showBreakdown, breakdowns, computeLookup, databaseLookup, storageLookup, tableLookup, onRetry, onOpenBreakdownDrawer, docsHref, dateRange, chartInterval }) {
	const t = useT();
	const breakdownHeadingId = useId();
	const { lookups: countryLookups } = useCountryLookups();
	const { standardEntries, resourceEntry } = useMemo(() => splitUsageBreakdownEntries(breakdowns), [breakdowns]);
	const breakdownHeading = operation === "reads" ? t("Reads breakdown") : t("Writes breakdown");
	return /* @__PURE__ */ jsxs("section", {
		className: "space-y-4 border-b border-border pb-10 last:border-b-0 last:pb-0",
		children: [/* @__PURE__ */ jsx(UsageTimeSeriesChartCard, {
			title,
			description,
			unitLabel,
			chartGradientId,
			total,
			changePercent,
			chartPoints,
			isLoading,
			isError,
			queryError,
			errorTitle: DATABASE_USAGE_ERROR$1.title,
			errorMessage: DATABASE_USAGE_ERROR$1.message,
			formatTotal: formatDatabaseOperationsTotal,
			formatValue: formatDatabaseOperationsValue,
			onRetry,
			docsHref,
			dateRange,
			chartInterval
		}), showBreakdown ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			"aria-labelledby": breakdownHeadingId,
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 pt-1",
				children: [/* @__PURE__ */ jsx("h3", {
					id: breakdownHeadingId,
					className: "shrink-0 text-[13px] font-semibold text-foreground",
					children: breakdownHeading
				}), /* @__PURE__ */ jsx("div", {
					className: "h-px min-w-0 flex-1 bg-border",
					"aria-hidden": true
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid items-stretch gap-4 lg:grid-cols-2",
				children: [standardEntries.map(({ section, items, isLoading: isLoading$1, isError: isError$1, error }) => /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 flex-col",
					children: /* @__PURE__ */ jsx(UsageBreakdownCard, {
						title: section.title,
						description: section.description,
						dimension: section.dimension,
						items,
						labelVariant: section.labelVariant,
						countryLookups,
						computeLookup,
						databaseLookup,
						storageLookup,
						tableLookup,
						isLoading: isLoading$1,
						isError: isError$1,
						error,
						errorTitle: DATABASE_USAGE_ERROR$1.title,
						errorMessage: DATABASE_USAGE_ERROR$1.message,
						formatValue: formatDatabaseOperationsValue,
						onRetry,
						onShowMore: () => onOpenBreakdownDrawer({
							operation,
							title: breakdownDrawerTitle(operation, section, t),
							description: section.description,
							dimension: section.dimension,
							labelVariant: section.labelVariant
						})
					})
				}, section.dimension)), resourceEntry ? /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 flex-col",
					children: /* @__PURE__ */ jsx(UsageResourceBreakdownCard, {
						description: resourceEntry.section.description,
						items: resourceEntry.items,
						isLoading: resourceEntry.isLoading,
						isError: resourceEntry.isError,
						error: resourceEntry.error,
						countryLookups,
						computeLookup,
						databaseLookup,
						storageLookup,
						tableLookup,
						errorTitle: DATABASE_USAGE_ERROR$1.title,
						errorMessage: DATABASE_USAGE_ERROR$1.message,
						formatValue: formatDatabaseOperationsValue,
						onRetry,
						onShowMore: () => onOpenBreakdownDrawer({
							operation,
							title: breakdownDrawerTitle(operation, resourceEntry.section, t),
							description: resourceEntry.section.description,
							dimension: "resource",
							labelVariant: "default"
						})
					})
				}) : null]
			})]
		}) : null]
	});
}
var REQUESTS_COLUMN = "Requests";
var BANDWIDTH_COLUMN = "Bandwidth";
var DATABASE_READS_COLUMN = "Reads";
var DATABASE_WRITES_COLUMN = "Writes";
var VALUE_COLUMN_BY_KIND = {
	requests: REQUESTS_COLUMN,
	bandwidth: BANDWIDTH_COLUMN,
	"database-reads": DATABASE_READS_COLUMN,
	"database-writes": DATABASE_WRITES_COLUMN
};
var DIMENSION_LABEL_COLUMN = {
	path: "Path",
	method: "Method",
	status: "Status",
	service: "Service",
	country: "Country",
	city: "Caller city",
	hostname: "Hostname",
	ip: "IP address",
	osName: "OS",
	clientType: "Client type",
	clientName: "Client name",
	deviceName: "Device",
	teamId: "Team ID",
	resourceId: "Resource ID",
	resourceType: "Resource type",
	resource: "Resource",
	sdk: "SDK"
};
function escapeCsvCell(value) {
	if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, "\"\"")}"`;
	return value;
}
function sanitizeFilename(title) {
	return title.replace(/[^a-zA-Z0-9_-]+/g, "_").replace(/^_+|_+$/g, "") || "breakdown";
}
function buildExportFilename(title, extension) {
	const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
	return `${sanitizeFilename(title)}_${stamp}.${extension}`;
}
function buildUsageBreakdownExportRows(items, dimension, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup) {
	return items.map((item) => ({
		label: item.label,
		displayLabel: formatBreakdownLabel(item, labelVariant, dimension, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup),
		value: item.count
	}));
}
function downloadUsageBreakdownJson(items, title, dimension, labelVariant, countryLookups, kind = "requests", databaseLookup, computeLookup, storageLookup, tableLookup) {
	const labelColumn = DIMENSION_LABEL_COLUMN[dimension];
	const valueColumn = VALUE_COLUMN_BY_KIND[kind];
	const payload = {
		title,
		dimension,
		items: buildUsageBreakdownExportRows(items, dimension, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup).map((row) => ({
			[labelColumn]: row.displayLabel,
			label: row.label,
			[valueColumn]: row.value
		}))
	};
	downloadAsFile(JSON.stringify(payload, null, 2), buildExportFilename(title, "json"), "application/json");
}
function downloadUsageBreakdownCsv(items, title, dimension, labelVariant, countryLookups, kind = "requests", databaseLookup, computeLookup, storageLookup, tableLookup) {
	const labelColumn = DIMENSION_LABEL_COLUMN[dimension];
	const valueColumn = VALUE_COLUMN_BY_KIND[kind];
	const rows = buildUsageBreakdownExportRows(items, dimension, labelVariant, countryLookups, databaseLookup, computeLookup, storageLookup, tableLookup);
	downloadAsFile([[labelColumn, valueColumn].map(escapeCsvCell).join(","), ...rows.map((row) => [escapeCsvCell(row.displayLabel), String(row.value)].join(","))].join("\n"), buildExportFilename(title, "csv"), "text/csv");
}
var DATABASE_USAGE_ERROR = {
	title: "Couldn't load database usage",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
function UsageBreakdownDrawer({ open, onOpenChange, projectId, dateRange, title, description, dimension, labelVariant, kind = "requests", databaseLookup: databaseLookupProp, computeLookup: computeLookupProp, storageLookup: storageLookupProp, tableLookup: tableLookupProp }) {
	const t = useT();
	const { lookups: countryLookups } = useCountryLookups();
	const requestsQuery = useProjectRequestsBreakdownDrawer(projectId, dateRange, dimension, open && kind === "requests");
	const bandwidthQuery = useProjectBandwidthBreakdownDrawer(projectId, dateRange, dimension, open && kind === "bandwidth");
	const databaseReadsQuery = useProjectDatabaseReadsBreakdownDrawer(projectId, dateRange, dimension, open && kind === "database-reads");
	const databaseWritesQuery = useProjectDatabaseWritesBreakdownDrawer(projectId, dateRange, dimension, open && kind === "database-writes");
	const { data: items = [], isLoading, isError, isFetching, refetch } = kind === "bandwidth" ? bandwidthQuery : kind === "database-reads" ? databaseReadsQuery : kind === "database-writes" ? databaseWritesQuery : requestsQuery;
	const resourceItems = useMemo(() => dimension === "resource" || dimension === "resourceId" ? items : [], [dimension, items]);
	const fetchedLookups = useUsageResourceBreakdownLookups(projectId, resourceItems, open && (dimension === "resource" || dimension === "resourceId") && resourceItems.length > 0);
	const computeLookup = computeLookupProp ?? fetchedLookups.computeLookup;
	const databaseLookup = databaseLookupProp ?? fetchedLookups.databaseLookup;
	const storageLookup = storageLookupProp ?? fetchedLookups.storageLookup;
	const tableLookup = tableLookupProp ?? fetchedLookups.tableLookup;
	const formatValue = kind === "bandwidth" ? formatBandwidthValue : kind === "database-reads" || kind === "database-writes" ? formatDatabaseOperationsValue : formatRequestsValue;
	const errorMeta = kind === "bandwidth" ? OVERVIEW_BANDWIDTH_ERROR : kind === "database-reads" || kind === "database-writes" ? DATABASE_USAGE_ERROR : OVERVIEW_REQUESTS_ERROR;
	const showLeadingIcon = dimension === "country" && !!countryLookups || dimension === "hostname" || dimension === "service" || (dimension === "resourceId" || dimension === "resource") && (!!databaseLookup || !!computeLookup || !!storageLookup || !!tableLookup);
	const showLoading = isLoading && items.length === 0;
	const showEmpty = !showLoading && !isError && items.length === 0;
	const canExport = !showLoading && !isError && items.length > 0;
	const handleExportJson = useCallback(() => {
		if (!canExport) return;
		downloadUsageBreakdownJson(items, title, dimension, labelVariant, countryLookups, kind, databaseLookup, computeLookup, storageLookup, tableLookup);
		toast.success(t("Exported as JSON"));
	}, [
		canExport,
		countryLookups,
		computeLookup,
		databaseLookup,
		storageLookup,
		tableLookup,
		dimension,
		items,
		labelVariant,
		kind,
		title,
		t
	]);
	const handleExportCsv = useCallback(() => {
		if (!canExport) return;
		downloadUsageBreakdownCsv(items, title, dimension, labelVariant, countryLookups, kind, databaseLookup, computeLookup, storageLookup, tableLookup);
		toast.success(t("Exported as CSV"));
	}, [
		canExport,
		countryLookups,
		computeLookup,
		databaseLookup,
		storageLookup,
		tableLookup,
		dimension,
		items,
		labelVariant,
		kind,
		title,
		t
	]);
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange,
		title: t(title),
		description: description ? t(description) : t(title),
		maxWidth: "sm:max-w-md",
		headerActions: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 cursor-pointer text-[12px]",
				disabled: !canExport,
				children: [/* @__PURE__ */ jsx(Download, { className: "me-1.5 h-3.5 w-3.5" }), t("Export")]
			})
		}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
			align: "end",
			className: "w-48",
			children: [/* @__PURE__ */ jsxs(DropdownMenuItem, {
				className: "cursor-pointer",
				onClick: handleExportJson,
				children: [/* @__PURE__ */ jsx(FileJson, { className: "me-2 h-4 w-4" }), t("Export as JSON")]
			}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
				className: "cursor-pointer",
				onClick: handleExportCsv,
				children: [/* @__PURE__ */ jsx(FileText, { className: "me-2 h-4 w-4" }), t("Export as CSV")]
			})]
		})] }),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 flex-1 flex-col border-t border-border",
			children: [
				description ? /* @__PURE__ */ jsx("p", {
					className: "shrink-0 px-6 py-3 text-[12px] leading-relaxed text-muted-foreground",
					children: t(description)
				}) : null,
				isError ? /* @__PURE__ */ jsx("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 py-8 text-center",
					children: /* @__PURE__ */ jsx(OverviewChartPanelError, {
						title: t(errorMeta.title),
						message: t(errorMeta.message),
						onRetry: () => void refetch()
					})
				}) : showLoading ? /* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx(UsageBreakdownListSkeleton, {
						rowCount: 10,
						showLeadingIcon
					})
				}) : showEmpty ? /* @__PURE__ */ jsx("div", {
					className: "flex flex-1 items-center justify-center px-6 py-8 text-center text-[13px] text-muted-foreground",
					children: t("No data for this date range")
				}) : /* @__PURE__ */ jsx("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-6 py-4",
					children: /* @__PURE__ */ jsx(UsageBreakdownRowsList, {
						items,
						dimension,
						labelVariant,
						countryLookups,
						databaseLookup,
						computeLookup,
						storageLookup,
						tableLookup,
						variant: "drawer",
						formatValue
					})
				}),
				!showLoading && !isError && items.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "shrink-0 border-t border-border bg-muted/30 px-6 py-3",
					children: /* @__PURE__ */ jsxs("p", {
						className: "text-[11px] text-muted-foreground",
						children: [
							t("Showing up to"),
							" ",
							100,
							" ",
							t("items"),
							isFetching ? /* @__PURE__ */ jsx(Loader2, {
								className: "ms-1 inline h-3 w-3 animate-spin align-middle",
								"aria-hidden": true
							}) : null
						]
					})
				}) : null
			]
		})
	});
}
export { DatabaseOperationBentoCard as n, UsageBreakdownDrawer as t };
