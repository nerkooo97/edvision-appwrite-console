import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { c as columnResizeRailHandleClass, l as horizontalResizeDeltaPx, m as setBodyResizeDragActive, s as applyColumnResizeRailPosition, t as COLUMN_RESIZE_RAILS_LAYER_CLASS } from "./horizontal-resize-BcegzCwH.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { r as SPREADSHEET_SCROLL_LAYER_CLASS } from "./spreadsheet-sticky-CpUihTZG.js";
import { a as isSpreadsheetRtlText, i as isSpreadsheetCellValueTrimmed, n as formatSpreadsheetCellValue, r as formatSpreadsheetCellValueForDialog, t as copySpreadsheetCellValue } from "./spreadsheet-cell-formatting-C5Cs2qWo.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cloneElement, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Copy, Expand } from "lucide-react";
function SpreadsheetCellContextMenu({ value, full, display, isNull, onViewFullValue, children }) {
	const t = useT();
	const showViewFullValue = !isNull && (isSpreadsheetCellValueTrimmed(full, display) || full.length > 50);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-52",
		children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
			onSelect: () => void copyToClipboard("Value", copySpreadsheetCellValue(value)),
			children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy value")]
		}), showViewFullValue ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ContextMenuSeparator, {}), /* @__PURE__ */ jsxs(ContextMenuItem, {
			onSelect: onViewFullValue,
			children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Expand }), t("View full value")]
		})] }) : null]
	})] });
}
function resolveDialogLanguage(content) {
	const trimmed = content.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]")) try {
		JSON.parse(trimmed);
		return "json";
	} catch {
		return "plaintext";
	}
	return "plaintext";
}
function SpreadsheetCellValueDialog({ state, onOpenChange }) {
	const t = useT();
	const content = state ? formatSpreadsheetCellValueForDialog(state.value, state.full) : "";
	const language = resolveDialogLanguage(content);
	return /* @__PURE__ */ jsx(Dialog, {
		open: state !== null,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "flex max-h-[min(85dvh,720px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "shrink-0 px-6 pb-4 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: state?.columnLabel ?? t("Cell value") }), state ? /* @__PURE__ */ jsxs(DialogDescription, {
					className: "mt-2 text-[13px]",
					children: [
						t("Row"),
						" ",
						state.rowNumber
					]
				}) : null]
			}), state ? /* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden border-t border-border",
				children: /* @__PURE__ */ jsx(ConnectCodeExample, {
					code: content,
					language,
					headless: true,
					className: "h-full max-h-[min(60dvh,520px)] rounded-none border-0",
					fixedHeight: "100%"
				})
			}) : null]
		})
	});
}
var stickyTheadClass = "sticky top-0 z-20 bg-background";
var headerCellBorderClass = "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]";
var bodyCellBorderClass = "border-b border-e border-border";
var rowNumberColumnWidthPx = 48;
var resizableColumnDefaultWidthPx = 150;
var resizableColumnMinWidthPx = 72;
var resizableColumnMaxWidthPx = 640;
var dataColumnResizeRailHandleClass = columnResizeRailHandleClass();
function normalizeColumns(columns) {
	return columns.map((column) => typeof column === "string" ? {
		key: column,
		label: column
	} : {
		key: column.key,
		label: column.label ?? column.key
	});
}
function clampColumnWidth(width) {
	return Math.min(resizableColumnMaxWidthPx, Math.max(resizableColumnMinWidthPx, width));
}
function ReadOnlyDataSpreadsheet({ columns, rows, getRowKey, isLoading = false, loadingLabel = "Loading rows…", emptyLabel = "No rows to display.", emptyContent, className, header, footer, minColumnWidthPx = 150, variant = "default", showRowNumbers = false, rowNumberOffset = 0, enableCellContextMenu, enableColumnResize = false }) {
	const t = useT();
	const normalizedColumns = useMemo(() => normalizeColumns(columns), [columns]);
	const isStudio = variant === "studio";
	const showCellContextMenu = enableCellContextMenu ?? isStudio;
	const [cellValueDialog, setCellValueDialog] = useState(null);
	const scrollRef = useRef(null);
	const tableLayerRef = useRef(null);
	const headerThRefs = useRef(/* @__PURE__ */ new Map());
	const colRefs = useRef(/* @__PURE__ */ new Map());
	const railRefs = useRef(/* @__PURE__ */ new Map());
	const columnKeys = useMemo(() => normalizedColumns.map((column) => column.key), [normalizedColumns]);
	const columnKeysRef = useRef(columnKeys);
	columnKeysRef.current = columnKeys;
	const [columnWidths, setColumnWidths] = useState({});
	const [resizingColumnKey, setResizingColumnKey] = useState(null);
	const columnWidthsRef = useRef({});
	if (resizingColumnKey == null) columnWidthsRef.current = columnWidths;
	useEffect(() => {
		setColumnWidths((prev) => {
			const next = {};
			let changed = false;
			for (const key of columnKeys) if (typeof prev[key] === "number") {
				next[key] = clampColumnWidth(prev[key]);
				changed ||= next[key] !== prev[key];
			}
			changed ||= Object.keys(prev).length !== Object.keys(next).length;
			return changed ? next : prev;
		});
	}, [columnKeys]);
	const getColumnWidthPx = useCallback((columnKey) => {
		const width = columnWidths[columnKey];
		if (typeof width === "number" && Number.isFinite(width)) return clampColumnWidth(width);
		return Math.max(resizableColumnDefaultWidthPx, minColumnWidthPx);
	}, [columnWidths, minColumnWidthPx]);
	const tableMinWidthPx = useMemo(() => {
		let total = showRowNumbers ? rowNumberColumnWidthPx : 0;
		for (const key of columnKeys) total += getColumnWidthPx(key);
		return total;
	}, [
		columnKeys,
		getColumnWidthPx,
		showRowNumbers
	]);
	const repositionRails = useCallback(() => {
		const layer = tableLayerRef.current;
		if (!layer) return;
		for (const columnKey of columnKeysRef.current) {
			const th = headerThRefs.current.get(columnKey);
			const rail = railRefs.current.get(columnKey);
			if (!th || !rail) continue;
			applyColumnResizeRailPosition(rail, layer, th);
		}
	}, []);
	const applyDraggedWidthPx = useCallback((columnKey, widthPx) => {
		const next = clampColumnWidth(Math.round(widthPx));
		const isLastColumn = columnKeysRef.current[columnKeysRef.current.length - 1] === columnKey;
		columnWidthsRef.current = {
			...columnWidthsRef.current,
			[columnKey]: next
		};
		const colEl = colRefs.current.get(columnKey);
		if (colEl) {
			colEl.style.width = `${next}px`;
			colEl.style.minWidth = `${next}px`;
			colEl.style.maxWidth = isLastColumn ? "" : `${next}px`;
		}
		const thEl = headerThRefs.current.get(columnKey);
		if (thEl) {
			thEl.style.width = `${next}px`;
			thEl.style.minWidth = `${next}px`;
			thEl.style.maxWidth = isLastColumn ? "" : `${next}px`;
		}
		repositionRails();
	}, [repositionRails]);
	const handleResizePointerDown = useCallback((columnKey) => (event) => {
		if (!columnKey) return;
		event.preventDefault();
		event.stopPropagation();
		setBodyResizeDragActive(true);
		const button = event.currentTarget;
		button.setPointerCapture(event.pointerId);
		const startX = event.clientX;
		const initialWidth = getColumnWidthPx(columnKey);
		setResizingColumnKey(columnKey);
		applyDraggedWidthPx(columnKey, initialWidth);
		const onMove = (ev) => {
			applyDraggedWidthPx(columnKey, initialWidth + horizontalResizeDeltaPx(startX, ev.clientX));
		};
		const onUp = () => {
			setBodyResizeDragActive(false);
			try {
				button.releasePointerCapture(event.pointerId);
			} catch {}
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			setResizingColumnKey(null);
			setColumnWidths({ ...columnWidthsRef.current });
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
	}, [applyDraggedWidthPx, getColumnWidthPx]);
	const openCellValueDialog = useCallback((params) => {
		setCellValueDialog(params);
	}, []);
	const columnResizeLayoutKey = columnKeys.join("");
	useLayoutEffect(() => {
		if (!enableColumnResize) return;
		repositionRails();
	}, [
		columnResizeLayoutKey,
		columnWidths,
		enableColumnResize,
		repositionRails
	]);
	useLayoutEffect(() => {
		if (!enableColumnResize) return;
		const scroll = scrollRef.current;
		const layer = tableLayerRef.current;
		if (!scroll || !layer || columnKeysRef.current.length === 0) return;
		const measure = () => {
			repositionRails();
		};
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(scroll);
		ro.observe(layer);
		scroll.addEventListener("scroll", measure, { passive: true });
		window.addEventListener("resize", measure);
		return () => {
			ro.disconnect();
			scroll.removeEventListener("scroll", measure);
			window.removeEventListener("resize", measure);
		};
	}, [
		columnResizeLayoutKey,
		columnWidths,
		enableColumnResize,
		repositionRails
	]);
	if (isLoading && rows.length === 0) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full min-h-[12rem] items-center justify-center text-[13px] text-muted-foreground", className),
		children: t(loadingLabel)
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col overflow-hidden", className),
		children: [
			header ? /* @__PURE__ */ jsx("div", {
				className: cn("shrink-0 border-b border-border bg-background px-4 sm:px-6", isStudio ? "py-3" : "py-2"),
				children: header
			}) : null,
			/* @__PURE__ */ jsx("div", {
				ref: scrollRef,
				className: "min-h-0 flex-1 overflow-auto",
				children: normalizedColumns.length === 0 || rows.length === 0 ? emptyContent ? /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-[12rem] items-center justify-center px-4",
					children: emptyContent
				}) : /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-[12rem] items-center justify-center px-4 text-center text-[13px] text-muted-foreground",
					children: t(emptyLabel)
				}) : /* @__PURE__ */ jsxs("div", {
					ref: tableLayerRef,
					className: cn(SPREADSHEET_SCROLL_LAYER_CLASS, !enableColumnResize && "min-w-max"),
					style: enableColumnResize ? { minWidth: tableMinWidthPx } : void 0,
					children: [/* @__PURE__ */ jsxs("table", {
						className: cn("relative z-0 w-full border-collapse text-start", enableColumnResize ? "table-fixed" : "min-w-max"),
						children: [
							/* @__PURE__ */ jsxs("colgroup", { children: [showRowNumbers ? /* @__PURE__ */ jsx("col", { style: {
								width: rowNumberColumnWidthPx,
								minWidth: rowNumberColumnWidthPx,
								maxWidth: rowNumberColumnWidthPx
							} }) : null, normalizedColumns.map((column, columnIndex) => {
								const width = getColumnWidthPx(column.key);
								const isDragResize = resizingColumnKey === column.key;
								const isLastColumn = columnIndex === normalizedColumns.length - 1;
								return /* @__PURE__ */ jsx("col", {
									ref: (node) => {
										if (node) colRefs.current.set(column.key, node);
										else colRefs.current.delete(column.key);
									},
									style: enableColumnResize ? isDragResize ? void 0 : isLastColumn ? { minWidth: width } : {
										width,
										minWidth: width,
										maxWidth: width
									} : { minWidth: `${minColumnWidthPx}px` }
								}, column.key);
							})] }),
							/* @__PURE__ */ jsx("thead", {
								className: stickyTheadClass,
								children: /* @__PURE__ */ jsxs("tr", { children: [showRowNumbers ? /* @__PURE__ */ jsx("th", {
									className: cn("w-12 px-3 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground", headerCellBorderClass),
									style: {
										width: rowNumberColumnWidthPx,
										minWidth: rowNumberColumnWidthPx,
										maxWidth: rowNumberColumnWidthPx
									},
									children: "#"
								}) : null, normalizedColumns.map((column, columnIndex) => {
									const width = getColumnWidthPx(column.key);
									const isDragResize = resizingColumnKey === column.key;
									const isLastColumn = columnIndex === normalizedColumns.length - 1;
									return /* @__PURE__ */ jsx("th", {
										ref: (node) => {
											if (node) headerThRefs.current.set(column.key, node);
											else headerThRefs.current.delete(column.key);
										},
										className: cn(isStudio ? "px-4 py-3 text-start text-[12px] font-semibold uppercase tracking-wider text-muted-foreground" : "px-3 py-2 text-start text-[12px] font-medium text-foreground", headerCellBorderClass),
										style: enableColumnResize ? isDragResize ? void 0 : isLastColumn ? { minWidth: width } : {
											width,
											minWidth: width,
											maxWidth: width
										} : void 0,
										children: /* @__PURE__ */ jsx("span", {
											className: "block truncate",
											children: column.label
										})
									}, column.key);
								})] })
							}),
							/* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIndex) => {
								const rowKey = getRowKey?.(row, rowIndex) ?? String(rowIndex);
								return /* @__PURE__ */ jsxs("tr", {
									className: cn("transition-colors hover:bg-muted/50", isStudio && rowIndex % 2 === 1 && "bg-muted/15"),
									children: [showRowNumbers ? /* @__PURE__ */ jsx("td", {
										className: cn(isStudio ? "px-3 py-2.5" : "px-3 py-1.5", bodyCellBorderClass),
										children: /* @__PURE__ */ jsx("span", {
											className: "block text-end text-[11px] tabular-nums text-muted-foreground",
											children: rowNumberOffset + rowIndex + 1
										})
									}) : null, normalizedColumns.map((column) => {
										const { full, display, isNull } = formatSpreadsheetCellValue(row[column.key]);
										const isRtl = isSpreadsheetRtlText(full);
										const rowNumber = rowNumberOffset + rowIndex + 1;
										const cell = /* @__PURE__ */ jsx("td", {
											"data-column": column.key,
											onClick: showCellContextMenu ? () => openCellValueDialog({
												columnLabel: column.label,
												rowNumber,
												value: row[column.key],
												full
											}) : void 0,
											className: cn(isStudio ? "px-4 py-2.5" : "px-3 py-1.5", bodyCellBorderClass, showCellContextMenu && "cursor-pointer"),
											children: /* @__PURE__ */ jsx("span", {
												className: cn("block max-w-[320px] truncate whitespace-nowrap text-[12px] font-mono", isNull ? "text-foreground/60" : "text-foreground"),
												title: full,
												dir: isRtl ? "rtl" : "ltr",
												children: display
											})
										});
										if (!showCellContextMenu) return cloneElement(cell, { key: column.key });
										return /* @__PURE__ */ jsx(SpreadsheetCellContextMenu, {
											value: row[column.key],
											full,
											display,
											isNull,
											onViewFullValue: () => openCellValueDialog({
												columnLabel: column.label,
												rowNumber,
												value: row[column.key],
												full
											}),
											children: cell
										}, column.key);
									})]
								}, rowKey);
							}) })
						]
					}), enableColumnResize ? /* @__PURE__ */ jsx("div", {
						className: COLUMN_RESIZE_RAILS_LAYER_CLASS,
						"aria-hidden": true,
						children: normalizedColumns.map((column) => /* @__PURE__ */ jsx("button", {
							ref: (node) => {
								if (node) railRefs.current.set(column.key, node);
								else railRefs.current.delete(column.key);
							},
							type: "button",
							"aria-label": `Resize ${column.label} column width`,
							"aria-orientation": "vertical",
							role: "separator",
							tabIndex: 0,
							onPointerDown: handleResizePointerDown(column.key),
							className: cn(dataColumnResizeRailHandleClass, resizingColumnKey === column.key && "before:opacity-100", "focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background")
						}, `col-resize-rail-${column.key}`))
					}) : null]
				})
			}),
			footer ? /* @__PURE__ */ jsx("div", {
				className: "h-[54px] shrink-0 border-t border-border bg-background",
				children: /* @__PURE__ */ jsx("div", {
					className: "@container flex h-full items-center px-4 sm:px-6",
					children: /* @__PURE__ */ jsx("div", {
						className: "min-w-0 flex-1",
						children: footer
					})
				})
			}) : null,
			/* @__PURE__ */ jsx(SpreadsheetCellValueDialog, {
				state: cellValueDialog,
				onOpenChange: (open) => {
					if (!open) setCellValueDialog(null);
				}
			})
		]
	});
}
export { ReadOnlyDataSpreadsheet as t };
