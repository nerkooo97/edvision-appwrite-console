import { t as cn } from "./utils-DoqqkI3X.js";
var bodyResizeDragLockCount = 0;
var savedBodyUserSelect = "";
var savedBodyCursor = "";
function setBodyResizeDragActive(active, cursor = "col-resize") {
	if (typeof document === "undefined") return;
	if (active) {
		if (bodyResizeDragLockCount === 0) {
			savedBodyUserSelect = document.body.style.userSelect;
			savedBodyCursor = document.body.style.cursor;
			document.body.style.userSelect = "none";
			if (cursor) document.body.style.cursor = cursor;
		}
		bodyResizeDragLockCount += 1;
		return;
	}
	bodyResizeDragLockCount = Math.max(0, bodyResizeDragLockCount - 1);
	if (bodyResizeDragLockCount === 0) {
		document.body.style.userSelect = savedBodyUserSelect;
		document.body.style.cursor = savedBodyCursor;
	}
}
const COLUMN_RESIZE_RAILS_LAYER_CLASS = "pointer-events-none absolute inset-0 z-50";
const RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X = "before:start-1/2 before:-ms-1";
const RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X = "after:start-1/2 after:-ms-1";
const RESIZE_HANDLE_PSEUDO_AFTER_HAIRLINE_LOGICAL_X = "after:start-1/2 after:-ms-[0.25px]";
const RESIZE_HANDLE_PSEUDO_BEFORE_X = RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X;
const RESIZE_HANDLE_PSEUDO_AFTER_X = RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X;
function isRtlElement(element) {
	if (!element || typeof window === "undefined") return false;
	return window.getComputedStyle(element).direction === "rtl";
}
function insetInlineStartCenteredOnBorderPx(borderFromInlineStartPx, handleWidthPx) {
	return borderFromInlineStartPx - handleWidthPx / 2;
}
function applyColumnResizeRailPosition(rail, layer, columnHeader, options) {
	const handleWidthPx = options?.handleWidthPx ?? 8;
	const layerRect = layer.getBoundingClientRect();
	const columnRect = columnHeader.getBoundingClientRect();
	let left = (isRtlElement(document.documentElement) ? columnRect.left : columnRect.right) - layerRect.left - handleWidthPx / 2;
	if (options?.maxInsetInlineStartPx != null) left = Math.min(left, Math.max(0, options.maxInsetInlineStartPx - handleWidthPx));
	left = Math.max(0, left);
	rail.style.insetInlineStart = "";
	rail.style.right = "";
	rail.style.left = `${left}px`;
}
function columnResizeRailHandleClass(...extra) {
	return cn("group pointer-events-auto absolute top-0 bottom-0 z-[41] w-2 cursor-col-resize touch-none border-0 bg-transparent p-0 outline-none", "after:pointer-events-none after:absolute after:inset-y-0 after:w-[0.5px] after:bg-border", RESIZE_HANDLE_PSEUDO_AFTER_HAIRLINE_LOGICAL_X, "before:pointer-events-none before:absolute before:inset-y-0 before:z-10 before:w-2 before:bg-border before:opacity-0 before:transition-opacity", RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X, "hover:before:opacity-100", ...extra);
}
function verticalPanelResizeHandleClass(...extra) {
	return cn("relative z-[45] w-[0.5px] bg-border", "before:pointer-events-none before:absolute before:inset-y-0 before:w-2 before:bg-border before:opacity-0 before:transition-opacity", RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X, "hover:before:opacity-100 data-[resize-handle-state=hover]:before:opacity-100 data-[resize-handle-state=drag]:before:opacity-100", "after:pointer-events-none after:absolute after:inset-y-0 after:w-2", RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X, ...extra);
}
function horizontalResizeDeltaPx(startX, currentX, isRtl = isRtlElement(typeof document !== "undefined" ? document.documentElement : null)) {
	return isRtl ? startX - currentX : currentX - startX;
}
function horizontalSplitHandleStyle(firstPanePx, handleWidthPx = 6) {
	return { insetInlineStart: insetInlineStartCenteredOnBorderPx(firstPanePx, handleWidthPx) };
}
function resizeHandleOnInlineStartEdgeStyle(handleWidthPx = 6) {
	return { insetInlineStart: -handleWidthPx / 2 };
}
function inlineEndPaneWidthFromPointer(clientX, viewportWidth, isRtl) {
	return isRtl ? clientX : viewportWidth - clientX;
}
export { RESIZE_HANDLE_PSEUDO_BEFORE_LOGICAL_X as a, columnResizeRailHandleClass as c, inlineEndPaneWidthFromPointer as d, isRtlElement as f, verticalPanelResizeHandleClass as h, RESIZE_HANDLE_PSEUDO_AFTER_X as i, horizontalResizeDeltaPx as l, setBodyResizeDragActive as m, RESIZE_HANDLE_PSEUDO_AFTER_HAIRLINE_LOGICAL_X as n, RESIZE_HANDLE_PSEUDO_BEFORE_X as o, resizeHandleOnInlineStartEdgeStyle as p, RESIZE_HANDLE_PSEUDO_AFTER_LOGICAL_X as r, applyColumnResizeRailPosition as s, COLUMN_RESIZE_RAILS_LAYER_CLASS as t, horizontalSplitHandleStyle as u };
