import { t as cn } from "./utils-DoqqkI3X.js";
import { c as columnResizeRailHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { c as parsePostgresIndexKeyColumns } from "./postgres-index-metadata-CC7j1aCq.js";
import { a as SPREADSHEET_STICKY_END_EDGE_SHADOW, o as SPREADSHEET_STICKY_END_HEADER_SHADOW } from "./spreadsheet-sticky-CpUihTZG.js";
const POSTGRES_ROWS_TABLE_EDGE_COL_PX = 40;
const POSTGRES_ACTIONS_COL_PX = 40;
const POSTGRES_ACTIONS_COL_STYLE = {
	width: 40,
	minWidth: 40,
	maxWidth: 40
};
const POSTGRES_STICKY_ACTIONS_HEADER_CLASS = cn("relative sticky end-0 z-30 bg-background p-0", SPREADSHEET_STICKY_END_HEADER_SHADOW);
function postgresStickyActionsCellClass(options) {
	return cn("sticky end-0 z-10 border-b border-border p-0", SPREADSHEET_STICKY_END_EDGE_SHADOW, options?.mutedRow ? "bg-muted/30" : "bg-background group-hover:bg-muted/50");
}
const POSTGRES_ROWS_DATA_COLUMN_DEFAULT_WIDTH_PX = 150;
const POSTGRES_ROWS_DATA_COLUMN_MIN_WIDTH_PX = 72;
const POSTGRES_ROWS_DATA_COLUMN_MAX_WIDTH_PX = 640;
function computePostgresRowsTableWidthPx(columnKeys, getColumnWidthPx) {
	let total = 40;
	for (const key of columnKeys) {
		if (!key) continue;
		total += getColumnWidthPx(key);
	}
	return total;
}
function getPostgresRowsDataColumnColStyle(columnIndex, columnCount, widthPx, isDragResize) {
	if (isDragResize) return void 0;
	if (columnIndex === columnCount - 1) return { minWidth: widthPx };
	return {
		width: widthPx,
		minWidth: widthPx,
		maxWidth: widthPx
	};
}
function getPostgresRowsDataColumnHeaderStyle(columnIndex, columnCount, widthPx, isDragResize) {
	if (isDragResize) return void 0;
	if (columnIndex === columnCount - 1) return { minWidth: widthPx };
	return {
		width: widthPx,
		minWidth: widthPx,
		maxWidth: widthPx
	};
}
const POSTGRES_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS = columnResizeRailHandleClass();
const POSTGRES_STICKY_THEAD_CLASS = "sticky top-0 z-20 bg-background";
const POSTGRES_HEADER_CELL_BORDER_CLASS = "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]";
const POSTGRES_BODY_CELL_BORDER_CLASS = "border-b border-e border-border";
function getPostgresColumnTypeColor(type) {
	return {
		text: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
		varchar: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
		bpchar: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
		int2: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
		int4: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
		int8: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
		integer: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
		bigint: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
		numeric: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
		float4: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
		float8: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
		bool: "bg-green-500/10 text-green-600 dark:text-green-400",
		boolean: "bg-green-500/10 text-green-600 dark:text-green-400",
		timestamp: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
		timestamptz: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
		date: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
		uuid: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
		jsonb: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
		json: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
	}[type.toLowerCase()] || "bg-muted text-muted-foreground";
}
function getPostgresEnumValueBadgeClass() {
	return "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400";
}
function matchesPostgresLocalSearch(query, ...parts) {
	const normalized = query.trim().toLowerCase();
	if (!normalized) return true;
	return parts.some((part) => part?.toLowerCase().includes(normalized));
}
function parsePostgresIndexColumnsFromDefinition(definition) {
	return parsePostgresIndexKeyColumns(definition);
}
export { matchesPostgresLocalSearch as _, POSTGRES_HEADER_CELL_BORDER_CLASS as a, POSTGRES_ROWS_DATA_COLUMN_MIN_WIDTH_PX as c, POSTGRES_STICKY_THEAD_CLASS as d, computePostgresRowsTableWidthPx as f, getPostgresRowsDataColumnHeaderStyle as g, getPostgresRowsDataColumnColStyle as h, POSTGRES_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS as i, POSTGRES_ROWS_TABLE_EDGE_COL_PX as l, getPostgresEnumValueBadgeClass as m, POSTGRES_ACTIONS_COL_STYLE as n, POSTGRES_ROWS_DATA_COLUMN_DEFAULT_WIDTH_PX as o, getPostgresColumnTypeColor as p, POSTGRES_BODY_CELL_BORDER_CLASS as r, POSTGRES_ROWS_DATA_COLUMN_MAX_WIDTH_PX as s, POSTGRES_ACTIONS_COL_PX as t, POSTGRES_STICKY_ACTIONS_HEADER_CLASS as u, parsePostgresIndexColumnsFromDefinition as v, postgresStickyActionsCellClass as y };
