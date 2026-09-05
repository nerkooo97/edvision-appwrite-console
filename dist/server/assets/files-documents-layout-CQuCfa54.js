import { t as cn } from "./utils-DoqqkI3X.js";
import { an as STORAGE_FILES_TABLE_PANE_MAX_PX, on as STORAGE_FILES_TABLE_PANE_MIN_PX } from "./auth-BPuxYQAc.js";
import { G as clampSplitFirstPaneWidthPx } from "./resizable-layout-BVnWw80t.js";
import { a as RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X, n as RESIZE_HANDLE_PSEUDO_AFTER_HAIRLINE_LOGICAL_X } from "./horizontal-resize-BcegzCwH.js";
import { c as SPREADSHEET_STICKY_START_HEADER_SHADOW, o as SPREADSHEET_STICKY_END_HEADER_SHADOW, r as SPREADSHEET_SCROLL_LAYER_CLASS } from "./spreadsheet-sticky-CpUihTZG.js";
const STORAGE_FILES_PREVIEW_PANE_MIN_PX = 480;
const STORAGE_FILES_TABLE_PREVIEW_SPLIT_MIN_VIEWPORT_PX = 1024;
const STORAGE_FILES_TABLE_EDGE_COL_PX = 40;
const DOCUMENTS_TABLE_PANE_WIDTH_STORAGE_KEY = "console.documentsTablePaneWidthPx";
const DOCUMENTS_TABLE_PANE_MIN_PX = 260;
const DOCUMENTS_TABLE_PANE_MAX_PX = 4e3;
const DOCUMENTS_PREVIEW_PANE_MIN_PX = 280;
function defaultStorageFilesTablePaneWidthPx(containerWidth) {
	return clampSplitFirstPaneWidthPx(containerWidth - 480, containerWidth, 260, STORAGE_FILES_TABLE_PANE_MAX_PX, 480);
}
function readStoredDocumentsTablePaneWidthPx() {
	if (typeof window === "undefined") return 260;
	const raw = localStorage.getItem(DOCUMENTS_TABLE_PANE_WIDTH_STORAGE_KEY);
	const n = raw ? parseInt(raw, 10) : NaN;
	return Number.isFinite(n) && n >= 260 && n <= 4e3 ? n : 260;
}
const STORAGE_FILES_SPLIT_PANE_BG_CLASS = "bg-background";
const STORAGE_FILES_TABLE_HEADER_ROW_HEIGHT_CLASS = "h-[34px]";
const STORAGE_FILES_TABLE_HEADER_TH_CLASS = cn(STORAGE_FILES_TABLE_HEADER_ROW_HEIGHT_CLASS, "max-h-[34px] box-border py-0 align-middle");
const STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS = cn("box-border flex shrink-0 items-center gap-2 px-3 py-0", STORAGE_FILES_TABLE_HEADER_ROW_HEIGHT_CLASS, "max-h-[34px]", "shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]");
const STORAGE_FILES_INSPECTOR_DRAWER_HEIGHT_CLASS = "h-[min(92dvh,920px)] max-h-[92dvh]";
function storageFilesSplitGridStyle(tablePaneWidthPx) {
	return {
		gridTemplateColumns: `${tablePaneWidthPx}px minmax(480px, 1fr)`,
		gridTemplateRows: "1fr auto"
	};
}
const STORAGE_SPREADSHEET_STICKY_THEAD_CLASS = "sticky top-0 z-20 bg-background";
const STORAGE_SPREADSHEET_HEADER_CELL_BORDER = "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]";
const STORAGE_SPREADSHEET_BODY_CELL_BORDER = "border-b border-e border-border";
const STORAGE_SPREADSHEET_BODY_STICKY_EDGE_BG_CLASS = "bg-background";
const STORAGE_SPREADSHEET_TABLE_LAYER_CLASS = SPREADSHEET_SCROLL_LAYER_CLASS;
const STORAGE_SPREADSHEET_HEADER_STICKY_CHECKBOX_SHADOW = SPREADSHEET_STICKY_START_HEADER_SHADOW;
const STORAGE_SPREADSHEET_HEADER_STICKY_ACTIONS_SHADOW = SPREADSHEET_STICKY_END_HEADER_SHADOW;
const STORAGE_FILES_LIST_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS = cn("group absolute top-0 bottom-0 z-[41] w-2 cursor-col-resize touch-none border-0 bg-transparent p-0 outline-none", "after:pointer-events-none after:absolute after:inset-y-0 after:w-[0.5px] after:bg-border", RESIZE_HANDLE_PSEUDO_AFTER_HAIRLINE_LOGICAL_X, "before:pointer-events-none before:absolute before:inset-y-0 before:z-10 before:w-2 before:bg-border before:opacity-0 before:transition-opacity", RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X, "hover:before:opacity-100");
export { storageFilesSplitGridStyle as S, STORAGE_SPREADSHEET_HEADER_STICKY_CHECKBOX_SHADOW as _, STORAGE_FILES_INSPECTOR_DRAWER_HEIGHT_CLASS as a, defaultStorageFilesTablePaneWidthPx as b, STORAGE_FILES_PREVIEW_PANE_MIN_PX as c, STORAGE_FILES_TABLE_HEADER_TH_CLASS as d, STORAGE_FILES_TABLE_PREVIEW_SPLIT_MIN_VIEWPORT_PX as f, STORAGE_SPREADSHEET_HEADER_STICKY_ACTIONS_SHADOW as g, STORAGE_SPREADSHEET_HEADER_CELL_BORDER as h, DOCUMENTS_TABLE_PANE_WIDTH_STORAGE_KEY as i, STORAGE_FILES_SPLIT_PANE_BG_CLASS as l, STORAGE_SPREADSHEET_BODY_STICKY_EDGE_BG_CLASS as m, DOCUMENTS_TABLE_PANE_MAX_PX as n, STORAGE_FILES_LIST_DATA_COLUMN_RESIZE_RAIL_HANDLE_CLASS as o, STORAGE_SPREADSHEET_BODY_CELL_BORDER as p, DOCUMENTS_TABLE_PANE_MIN_PX as r, STORAGE_FILES_PREVIEW_HEADER_ROW_CLASS as s, DOCUMENTS_PREVIEW_PANE_MIN_PX as t, STORAGE_FILES_TABLE_EDGE_COL_PX as u, STORAGE_SPREADSHEET_STICKY_THEAD_CLASS as v, readStoredDocumentsTablePaneWidthPx as x, STORAGE_SPREADSHEET_TABLE_LAYER_CLASS as y };
