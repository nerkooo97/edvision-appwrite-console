import { t as cn } from "./utils-DoqqkI3X.js";
import { h as fetchConsoleAccount } from "./sdk-DjIJ_hjn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { d as getCoverBrandThemeForSvgExport, n as COVER_IMAGE_FORMATS } from "./constants-CL7SLzjY.js";
import { mt as stripCoverTitleSuffix } from "./constants-B5zUV45z.js";
import { S as getCoverScreenshotGlassPreviewStyles, a as preloadCoverLucideIconNodes } from "./lucide-icon-svg-BStxTNvw.js";
import { a as getScaledCoverTableLayout, o as measureCoverTableTitleBlockHeight } from "./render-frame-BkUqYiWN.js";
import { a as parseCoverLucideIconName, i as isCoverLucideIconValue } from "./lucide-icon-utils-BZZNNTPu.js";
import { a as getCoverImageMimeType, r as getCoverCanvasEncodeQuality } from "./cover-image-format-CKZUHQO-.js";
import { Aa as getDiagramEdgeDash, Ba as getDiagramArtboardRenderScale, Ca as resizeDiagramTableRows, D as syncConsoleAccountAfterMutation, Da as DIAGRAM_EDGE_LINE_STYLE_LABELS, Ea as DIAGRAM_EDGE_LABEL_SUGGESTIONS, Fa as DIAGRAM_NODE_KIND_LABELS, Fr as isAccountPrefsPayloadWithinLimit, Gi as DIAGRAM_GENERATIONS_LOCAL_STORAGE_KEY, Ha as resolveDiagramSizePresetKey, Ia as DIAGRAM_SIZE_PRESETS, Ji as mergeDiagramGenerationsIntoPrefs, K as useCoverGeneratorColumnsLayout, Ki as MAX_SAVED_DIAGRAM_GENERATION_NAME_LENGTH, La as DIAGRAM_SNAP_GRID, Ma as getDiagramEdgeStroke, Na as normalizeDiagramEdge, O as updateAccountPrefs, Oa as DIAGRAM_EDGE_PRESETS, Pa as DIAGRAM_NODE_DEFAULTS, Qi as normalizeDiagramDocument, Ra as DIAGRAM_STORAGE_KEY, Sa as resizeDiagramTableColumns, Ta as DIAGRAM_EDGE_ARROW_LABELS, Va as getDiagramSizePresetKey, Xi as removeSavedDiagramGeneration, Yi as parseSavedDiagramGenerations, Zi as upsertSavedDiagramGeneration, _a as DIAGRAM_TABLE_MAX_COLUMNS, aa as snapDiagramValue, ba as DIAGRAM_TABLE_MIN_ROWS, ca as getDiagramNodeAnchor, da as normalizeDiagramNode, ea as createDiagramFromTemplate, fa as DIAGRAM_SCREENSHOT_GRAVITY_GRID_ROWS, ga as getDiagramScreenshotGravityFromFocus, ha as getDiagramScreenshotFocusForGravity, ia as createDiagramNode, ja as getDiagramEdgeOpacity, ka as DIAGRAM_EDGE_STROKE_TONE_LABELS, la as getDiagramNodeIconSrc, m as getConsoleAccountFromCache, ma as getDiagramScreenshotFocus, na as createDefaultDiagramDocument, oa as buildDiagramEdgeArrowheadPath, pa as formatDiagramScreenshotGravityLabel, q as useDiagramGeneratorPropertiesSplitLayout, qi as USER_PREFS_KEY_DIAGRAM_GENERATIONS, ra as createDiagramEdge, sa as buildDiagramEdgePaths, ta as getDiagramNodeCenterPlacement, ua as hasDiagramNodeIcon, va as DIAGRAM_TABLE_MAX_ROWS, wa as updateDiagramTableCell, xa as createDefaultDiagramTable, ya as DIAGRAM_TABLE_MIN_COLUMNS, za as getDiagramArtboardDisplaySize } from "./auth-BPuxYQAc.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DropdownMenuItem, i as DropdownMenuGroup, l as DropdownMenuSeparator, o as DropdownMenuLabel, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as useIsXlUp } from "./use-mobile-C9thwzsE.js";
import { n as getDiagramNodeSurfaceColors, r as getDiagramEdgeLabelMetrics } from "./node-chrome-H37I5O3g.js";
import { n as useViewportPanZoom, r as SchemaBlueprintMat } from "./useViewportPanZoom-COUwlx3T.js";
import { n as sortableAxisTransform, t as getAxisRestrictedDragModifiers } from "./dnd-modifiers-CiFEVwzL.js";
import { t as DiagramPropertiesSplitResizableLayout } from "./ApiExplorerResizableLayout-D2_hOOoH.js";
import { d as formatCoverDownloadScaleLabel, f as getCoverScaledDimensions, l as COVER_DOWNLOAD_SCALES, n as useGeneratorLayout, o as encodeCoverImageBlob, u as formatCoverDimensionsLabel } from "./GeneratorLayoutContext-SOAvqHb9.js";
import { n as GENERATOR_DIAGRAM_API_PATH } from "./constants-BnJhDCOM.js";
import { a as getDiagramGenerationDraft, c as GeneratorStartShell, d as CoverBuiltInIconPicker, f as CoverBrandBackgroundPreview, h as GeneratorColumnsResizableLayout, l as GeneratorSavedGenerationsPanel, m as CoverIconPreview, p as CoverHeroBrowserFrame, r as deleteDiagramGenerationDraft, s as setDiagramGenerationDraft, t as useRouteGenerationEditor, u as CoverThemeSelect } from "./use-route-generation-editor-CNwZmqYt.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Box, ChevronDown, CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight, Crosshair, Download, ExternalLink, GitBranch, GripVertical, ImageIcon, LayoutGrid, Maximize2, Minus, MoreHorizontal, Plus, Redo2, Shapes, Table2, Tag, Trash2, Type, Undo2, Workflow, ZoomIn, ZoomOut } from "lucide-react";
import { flushSync } from "react-dom";
import { toCanvas } from "html-to-image";
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { createRoot } from "react-dom/client";
function DiagramAlignGuidesLayer({ guides, brand, width, height }) {
	if (guides.length === 0) return null;
	return /* @__PURE__ */ jsx("svg", {
		className: "pointer-events-none absolute inset-0 overflow-visible",
		width,
		height,
		viewBox: `0 0 ${width} ${height}`,
		overflow: "visible",
		"aria-hidden": true,
		children: guides.map((guide, index) => guide.orientation === "vertical" ? /* @__PURE__ */ jsx("line", {
			x1: guide.position,
			y1: guide.start,
			x2: guide.position,
			y2: guide.end,
			stroke: brand.brandCta,
			strokeWidth: 1,
			strokeDasharray: "4 4",
			opacity: .9
		}, `v-${index}`) : /* @__PURE__ */ jsx("line", {
			x1: guide.start,
			y1: guide.position,
			x2: guide.end,
			y2: guide.position,
			stroke: brand.brandCta,
			strokeWidth: 1,
			strokeDasharray: "4 4",
			opacity: .9
		}, `h-${index}`))
	});
}
function stopEdgePointerEvent(event) {
	event.stopPropagation();
}
function DiagramEdgesLayer({ paths, brand, layer, selectedEdgeId, onEdgeClick }) {
	if (layer === "hit") return /* @__PURE__ */ jsx(Fragment, { children: paths.map((path) => /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("path", {
		d: path.d,
		fill: "none",
		stroke: "transparent",
		strokeWidth: 18,
		"data-diagram-edge": "",
		className: "pointer-events-auto cursor-pointer",
		onMouseDown: stopEdgePointerEvent,
		onClick: (event) => {
			stopEdgePointerEvent(event);
			onEdgeClick?.(path.id);
		}
	}), path.label ? /* @__PURE__ */ jsx("rect", {
		x: path.labelX - 40,
		y: path.labelY - 14,
		width: 80,
		height: 28,
		rx: 14,
		fill: "transparent",
		"data-diagram-edge": "",
		className: "pointer-events-auto cursor-pointer",
		onMouseDown: stopEdgePointerEvent,
		onClick: (event) => {
			stopEdgePointerEvent(event);
			onEdgeClick?.(path.id);
		}
	}) : null] }, path.id)) });
	if (layer === "arrowheads") return /* @__PURE__ */ jsx(Fragment, { children: paths.map((path) => {
		const selected = selectedEdgeId === path.id;
		const stroke = getDiagramEdgeStroke(path.strokeTone, brand, selected);
		const strokeOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected,
			part: "stroke"
		});
		return /* @__PURE__ */ jsxs("g", {
			pointerEvents: "none",
			children: [path.forwardArrow ? /* @__PURE__ */ jsx("path", {
				d: buildDiagramEdgeArrowheadPath(path.forwardArrow),
				fill: stroke,
				stroke: "none",
				opacity: strokeOpacity
			}) : null, path.backwardArrow ? /* @__PURE__ */ jsx("path", {
				d: buildDiagramEdgeArrowheadPath(path.backwardArrow),
				fill: stroke,
				stroke: "none",
				opacity: strokeOpacity
			}) : null]
		}, path.id);
	}) });
	if (layer === "labels") return /* @__PURE__ */ jsx(Fragment, { children: paths.map((path) => {
		if (!path.label) return null;
		const selected = selectedEdgeId === path.id;
		const labelOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected,
			part: "label"
		});
		const metrics = getDiagramEdgeLabelMetrics(path.label);
		return /* @__PURE__ */ jsxs("g", {
			pointerEvents: "none",
			opacity: labelOpacity,
			children: [/* @__PURE__ */ jsx("rect", {
				x: path.labelX - metrics.offsetX,
				y: path.labelY - metrics.offsetY,
				width: metrics.width,
				height: metrics.height,
				rx: metrics.rx,
				fill: brand.background,
				stroke: selected ? brand.brandCta : brand.border,
				strokeWidth: selected ? 1.5 : 1
			}), /* @__PURE__ */ jsx("text", {
				x: path.labelX,
				y: path.labelY + 5,
				textAnchor: "middle",
				fill: selected ? brand.brandCta : brand.mutedForeground,
				fontSize: 12,
				fontFamily: "Inter, system-ui, sans-serif",
				fontWeight: 500,
				children: path.label
			})]
		}, path.id);
	}) });
	return /* @__PURE__ */ jsx(Fragment, { children: paths.map((path) => {
		const selected = selectedEdgeId === path.id;
		const stroke = getDiagramEdgeStroke(path.strokeTone, brand, selected);
		const strokeOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected,
			part: "stroke"
		});
		return /* @__PURE__ */ jsx("g", {
			pointerEvents: "none",
			children: /* @__PURE__ */ jsx("path", {
				d: path.d,
				fill: "none",
				stroke,
				strokeWidth: selected ? 2.5 : 2,
				strokeLinecap: "butt",
				strokeLinejoin: "miter",
				strokeMiterlimit: 4,
				strokeDasharray: getDiagramEdgeDash(path.lineStyle),
				opacity: strokeOpacity
			})
		}, path.id);
	}) });
}
function truncateCellText(value, maxLength) {
	const trimmed = value.trim();
	if (trimmed.length <= maxLength) return trimmed;
	return `${trimmed.slice(0, Math.max(0, maxLength - 1))}…`;
}
function CoverTableFramePreview({ themeId, width, height, title, subtitle, headers, rows, showHeader = true }) {
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const glass = getCoverScreenshotGlassPreviewStyles(themeId);
	const layout = useMemo(() => getScaledCoverTableLayout(width), [width]);
	const titleText = title ? stripCoverTitleSuffix(title) : "";
	const titleBlockHeight = measureCoverTableTitleBlockHeight(title, subtitle, layout);
	const titleGap = titleText && subtitle ? layout.subtitleGap : 0;
	const frameGap = titleBlockHeight > 0 ? layout.titleCardGap : 0;
	const outerRadius = Math.max(4, layout.outerRadius);
	const innerRadius = Math.max(3, layout.innerRadius);
	const paddingX = Math.max(8, layout.cardPaddingX);
	const paddingY = Math.max(8, layout.cardPaddingY);
	const columnCount = Math.max(1, headers.length);
	const colWidth = (width - paddingX * 2) / columnCount;
	const maxChars = Math.max(8, Math.floor(colWidth / 8));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex size-full flex-col",
		style: {
			width,
			height,
			color: brand.foreground
		},
		children: [titleText || subtitle ? /* @__PURE__ */ jsxs("div", {
			className: "shrink-0 text-center",
			style: { marginBottom: frameGap },
			children: [titleText ? /* @__PURE__ */ jsx("p", {
				className: "font-semibold leading-none",
				style: { fontSize: layout.titleFontSize },
				children: titleText
			}) : null, subtitle ? /* @__PURE__ */ jsx("p", {
				className: "leading-none",
				style: {
					fontSize: layout.subtitleFontSize,
					color: brand.mutedForeground,
					marginTop: titleText ? titleGap : 0
				},
				children: subtitle
			}) : null]
		}) : null, /* @__PURE__ */ jsx("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			style: {
				borderRadius: outerRadius,
				border: `${layout.borderWidth}px solid ${glass.shellBorder}`,
				backgroundColor: glass.shellFill,
				padding: `${paddingY}px ${paddingX}px`
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 flex-1 flex-col overflow-hidden",
				style: {
					borderRadius: innerRadius,
					border: `1px solid ${brand.border}`,
					backgroundColor: `${brand.background}66`
				},
				children: [showHeader ? /* @__PURE__ */ jsx("div", {
					className: "grid shrink-0",
					style: {
						gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
						minHeight: layout.rowHeight,
						backgroundColor: `${brand.border}73`
					},
					children: headers.map((header, columnIndex) => /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center px-1 font-semibold uppercase tracking-wider",
						style: {
							fontSize: layout.headerFontSize,
							borderLeft: columnIndex > 0 ? `1px solid ${brand.border}` : void 0,
							opacity: columnIndex > 0 ? .65 : 1
						},
						children: /* @__PURE__ */ jsx("span", {
							className: "truncate",
							children: truncateCellText(header, maxChars).toUpperCase()
						})
					}, `header-${columnIndex}`))
				}) : null, /* @__PURE__ */ jsx("div", {
					className: "flex min-h-0 flex-1 flex-col",
					children: rows.map((row, rowIndex) => /* @__PURE__ */ jsx("div", {
						className: "grid flex-1",
						style: {
							gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
							minHeight: layout.rowHeight,
							borderTop: rowIndex > 0 || showHeader ? `1px solid ${brand.border}` : void 0
						},
						children: row.map((cell, columnIndex) => /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center px-1",
							style: {
								fontSize: layout.cellFontSize,
								fontWeight: columnIndex === 0 ? 600 : 400,
								color: columnIndex === 0 ? brand.foreground : brand.mutedForeground,
								borderLeft: columnIndex > 0 ? `1px solid ${brand.border}` : void 0,
								opacity: columnIndex > 0 ? .65 : 1
							},
							children: /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: truncateCellText(cell, maxChars)
							})
						}, `cell-${rowIndex}-${columnIndex}`))
					}, `row-${rowIndex}`))
				})]
			})
		})]
	});
}
var ANCHOR_SIDES = [
	"top",
	"right",
	"bottom",
	"left"
];
function stopCanvasPan(event) {
	event.stopPropagation();
}
function getPortPosition(side, width, height) {
	const size = 12;
	switch (side) {
		case "top": return {
			left: width / 2 - size / 2,
			top: -size / 2
		};
		case "bottom": return {
			left: width / 2 - size / 2,
			top: height - size / 2
		};
		case "left": return {
			left: -size / 2,
			top: height / 2 - size / 2
		};
		case "right": return {
			left: width - size / 2,
			top: height / 2 - size / 2
		};
	}
}
function DiagramNodeChrome({ nodeId, node, brand, stackIndex = 0, selected = false, interactive = false, connectDraftSide = null, showPorts = false, className, style, children, onPointerDown, onClick, onPortPointerDown, onResizePointerDown }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-diagram-node": "",
		className: cn("absolute", interactive && "pointer-events-auto", className),
		style: {
			left: node.x,
			top: node.y,
			width: node.width,
			height: node.height,
			zIndex: stackIndex + 1,
			...style
		},
		onMouseDown: interactive ? stopCanvasPan : void 0,
		onPointerDown,
		onClick: (event) => {
			event.stopPropagation();
			onClick?.(event);
		},
		children: [
			children,
			interactive && showPorts ? ANCHOR_SIDES.map((side) => {
				const position = getPortPosition(side, node.width, node.height);
				const isActive = connectDraftSide === side;
				return /* @__PURE__ */ jsx("button", {
					type: "button",
					"data-diagram-port": "",
					"data-node-id": nodeId,
					"data-port-side": side,
					"aria-label": `Connect from ${side}`,
					className: cn("absolute z-30 size-3 rounded-full border-2 transition-transform before:absolute before:-inset-1.5 before:content-[\"\"] hover:scale-125", isActive ? "scale-125" : ""),
					style: {
						left: position.left,
						top: position.top,
						backgroundColor: isActive ? brand.brandCta : brand.background,
						borderColor: isActive ? brand.brandCta : brand.foreground
					},
					onMouseDown: stopCanvasPan,
					onPointerDown: (event) => {
						event.stopPropagation();
						onPortPointerDown?.(side, event);
					},
					onClick: (event) => event.stopPropagation()
				}, side);
			}) : null,
			interactive && selected && onResizePointerDown ? /* @__PURE__ */ jsx("button", {
				type: "button",
				"data-diagram-resize": "",
				"aria-label": "Resize",
				className: "absolute z-20 size-3 cursor-se-resize rounded-sm border",
				style: {
					right: -6,
					bottom: -6,
					backgroundColor: brand.background,
					borderColor: brand.brandCta
				},
				onMouseDown: stopCanvasPan,
				onPointerDown: (event) => {
					event.stopPropagation();
					onResizePointerDown(event);
				},
				onClick: (event) => event.stopPropagation()
			}) : null
		]
	});
}
function getDiagramConnectPreviewPath(node, side, pointer) {
	const anchor = getDiagramNodeAnchor(node, side);
	return `M ${anchor.x} ${anchor.y} L ${pointer.x} ${pointer.y}`;
}
function withAlpha(color, alpha) {
	if (color.startsWith("#") && color.length === 7) return `${color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
	return color;
}
function shouldShowCaption(node) {
	const defaultLabel = DIAGRAM_NODE_KIND_LABELS[node.kind];
	return Boolean(node.label.trim() && node.label !== defaultLabel);
}
function getSelectedChromeShadow(brand, selected) {
	if (!selected) return `0 1px 3px ${withAlpha(brand.foreground, .04)}`;
	return `0 2px 8px ${withAlpha(brand.foreground, .05)}, 0 0 0 1px ${withAlpha(brand.brandCta, .25)}`;
}
function DiagramNodeView({ node, brand, themeId, stackIndex = 0, selected = false, interactive = false, showPorts = false, connectDraftSide = null, onPointerDown, onClick, onPortPointerDown, onResizePointerDown }) {
	const chromeProps = {
		nodeId: node.id,
		node,
		brand,
		stackIndex,
		selected,
		interactive,
		showPorts,
		connectDraftSide,
		onPointerDown,
		onClick: onClick ? (event) => onClick(event) : void 0,
		onPortPointerDown,
		onResizePointerDown: selected ? onResizePointerDown : void 0
	};
	if (node.kind === "group") return /* @__PURE__ */ jsx(DiagramNodeChrome, {
		...chromeProps,
		className: cn("rounded-2xl border border-dashed", selected && "ring-1 ring-offset-1"),
		style: {
			borderColor: withAlpha(brand.border, .9),
			backgroundColor: withAlpha(brand.muted, .18),
			boxShadow: selected ? `0 0 0 1px ${withAlpha(brand.brandCta, .35)}` : void 0
		},
		children: /* @__PURE__ */ jsx("div", {
			className: "absolute left-4 top-3 text-[12px] font-semibold uppercase tracking-wider",
			style: { color: brand.mutedForeground },
			children: node.label
		})
	});
	if (node.kind === "label") return /* @__PURE__ */ jsx(DiagramNodeChrome, {
		...chromeProps,
		className: cn("flex items-center justify-center rounded-md px-3 py-1 text-center text-[14px] font-medium", interactive && "cursor-pointer"),
		style: {
			color: brand.foreground,
			backgroundColor: withAlpha(brand.background, .72),
			border: `1px solid ${withAlpha(brand.border, .65)}`,
			boxShadow: selected ? `0 1px 4px ${withAlpha(brand.foreground, .04)}, 0 0 0 1px ${withAlpha(brand.brandCta, .3)}` : `0 1px 2px ${withAlpha(brand.foreground, .03)}`,
			minHeight: node.height
		},
		children: node.label
	});
	if (node.kind === "title") return /* @__PURE__ */ jsxs(DiagramNodeChrome, {
		...chromeProps,
		className: cn("flex flex-col items-center justify-center px-4 text-center", interactive && "cursor-pointer"),
		style: {
			backgroundColor: "transparent",
			border: selected ? `1px dashed ${withAlpha(brand.brandCta, .45)}` : "1px solid transparent",
			boxShadow: selected ? `0 0 0 1px ${withAlpha(brand.brandCta, .2)}` : void 0
		},
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-aeonik-pro max-w-full text-balance text-[28px] font-normal leading-tight tracking-[-0.022em]",
			style: { color: brand.foreground },
			children: node.label
		}), node.subtitle ? /* @__PURE__ */ jsx("p", {
			className: "mt-2 max-w-full text-balance text-[14px] font-medium leading-snug",
			style: { color: brand.mutedForeground },
			children: node.subtitle
		}) : null]
	});
	if (node.kind === "icon") {
		const showCaption = shouldShowCaption(node);
		const chromePadding = 16;
		const captionBand = showCaption ? 20 : 0;
		const availableWidth = node.width - chromePadding * 2;
		const availableHeight = node.height - chromePadding * 2 - captionBand;
		const iconSize = Math.max(24, Math.min(availableWidth, availableHeight));
		const surface$1 = getDiagramNodeSurfaceColors(brand, themeId);
		return /* @__PURE__ */ jsxs(DiagramNodeChrome, {
			...chromeProps,
			className: cn("flex flex-col items-center justify-center rounded-xl border px-4 py-4", interactive && "cursor-pointer"),
			style: {
				backgroundColor: surface$1.fill,
				borderColor: selected ? brand.brandCta : surface$1.stroke,
				borderWidth: surface$1.strokeWidth,
				boxShadow: getSelectedChromeShadow(brand, selected)
			},
			children: [/* @__PURE__ */ jsx(CoverIconPreview, {
				src: getDiagramNodeIconSrc(node),
				themeId,
				colorMode: "cover",
				size: iconSize
			}), showCaption ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 max-w-full truncate px-1 text-center text-[11px] font-medium",
				style: { color: brand.mutedForeground },
				children: node.label
			}) : null]
		});
	}
	if (node.kind === "screenshot") {
		const showCaption = shouldShowCaption(node);
		const captionBandHeight = showCaption ? 28 : 0;
		const frameHeight = Math.max(1, node.height - captionBandHeight);
		const focus = getDiagramScreenshotFocus(node);
		return /* @__PURE__ */ jsxs(DiagramNodeChrome, {
			...chromeProps,
			className: cn("flex flex-col overflow-hidden", interactive && "cursor-pointer", selected && "ring-1 ring-offset-1"),
			style: { boxShadow: selected ? `0 0 0 1px ${withAlpha(brand.brandCta, .35)}` : void 0 },
			children: [/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ jsx(CoverHeroBrowserFrame, {
					frameWidth: node.width,
					frameHeight,
					themeId,
					closed: true,
					src: node.imageSrc,
					focusX: focus.focusX,
					focusY: focus.focusY,
					alt: node.label || "Screenshot",
					placeholder: /* @__PURE__ */ jsxs("div", {
						className: "flex size-full flex-col items-center justify-center gap-2 px-3 text-center",
						style: { color: brand.mutedForeground },
						children: [/* @__PURE__ */ jsx(ImageIcon, {
							className: "size-6",
							strokeWidth: 1.5
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-medium",
							children: "Upload screenshot"
						})]
					})
				})
			}), showCaption ? /* @__PURE__ */ jsx("div", {
				className: "shrink-0 border-t px-2 py-1.5 text-center text-[11px] font-medium",
				style: {
					borderColor: withAlpha(brand.border, .8),
					color: brand.foreground,
					backgroundColor: withAlpha(brand.background, .88)
				},
				children: /* @__PURE__ */ jsx("span", {
					className: "block truncate",
					children: node.label
				})
			}) : null]
		});
	}
	if (node.kind === "table") {
		const defaults = createDefaultDiagramTable();
		const headers = node.tableHeaders ?? defaults.tableHeaders;
		const rows = node.tableRows ?? defaults.tableRows;
		const showTitle = shouldShowCaption(node);
		return /* @__PURE__ */ jsx(DiagramNodeChrome, {
			...chromeProps,
			className: cn("overflow-visible", interactive && "cursor-pointer", selected && "ring-1 ring-offset-1"),
			style: { boxShadow: selected ? `0 0 0 1px ${withAlpha(brand.brandCta, .35)}` : void 0 },
			children: /* @__PURE__ */ jsx(CoverTableFramePreview, {
				themeId,
				width: node.width,
				height: node.height,
				title: showTitle ? node.label : void 0,
				subtitle: node.subtitle,
				headers,
				rows,
				instanceId: node.id
			})
		});
	}
	const surface = getDiagramNodeSurfaceColors(brand, themeId);
	return /* @__PURE__ */ jsxs(DiagramNodeChrome, {
		...chromeProps,
		className: cn("flex items-center gap-3 rounded-xl border px-4 py-3", interactive && "cursor-pointer"),
		style: {
			backgroundColor: surface.fill,
			borderColor: selected ? brand.brandCta : surface.stroke,
			borderWidth: surface.strokeWidth,
			boxShadow: selected ? `0 2px 8px ${withAlpha(brand.foreground, .05)}, 0 0 0 1px ${withAlpha(brand.brandCta, .25)}` : `0 1px 3px ${withAlpha(brand.foreground, .04)}`
		},
		children: [hasDiagramNodeIcon(node) ? /* @__PURE__ */ jsx("div", {
			className: "flex size-10 shrink-0 items-center justify-center rounded-lg",
			style: {
				backgroundColor: withAlpha(brand.muted, .85),
				color: brand.foreground
			},
			children: /* @__PURE__ */ jsx(CoverIconPreview, {
				src: getDiagramNodeIconSrc(node),
				themeId,
				colorMode: "cover",
				size: 24
			})
		}) : null, /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "truncate text-[14px] font-semibold leading-tight",
				style: { color: brand.foreground },
				children: node.label
			}), node.subtitle ? /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 truncate text-[12px]",
				style: { color: brand.mutedForeground },
				children: node.subtitle
			}) : null]
		})]
	});
}
function getSelectedNodeIds(selection) {
	if (selection.type === "node") return [selection.id];
	if (selection.type === "nodes") return selection.ids;
	return [];
}
function isNodeSelected(selection, nodeId) {
	return getSelectedNodeIds(selection).includes(nodeId);
}
function selectDiagramNodes(ids) {
	const unique = [...new Set(ids)];
	if (unique.length === 0) return { type: "none" };
	if (unique.length === 1) return {
		type: "node",
		id: unique[0]
	};
	return {
		type: "nodes",
		ids: unique
	};
}
function selectDiagramNode(selection, nodeId, options) {
	const currentIds = getSelectedNodeIds(selection);
	if (options?.toggle) {
		if (currentIds.includes(nodeId)) return selectDiagramNodes(currentIds.filter((id) => id !== nodeId));
		return selectDiagramNodes([...currentIds, nodeId]);
	}
	if (options?.additive) {
		if (currentIds.includes(nodeId)) return selection;
		return selectDiagramNodes([...currentIds, nodeId]);
	}
	return {
		type: "node",
		id: nodeId
	};
}
function resolveNodePointerSelection(selection, nodeId, modifiers) {
	let nextSelection = selection;
	if (modifiers.metaKey || modifiers.ctrlKey) nextSelection = selectDiagramNode(selection, nodeId, { toggle: true });
	else if (modifiers.shiftKey) nextSelection = selectDiagramNode(selection, nodeId, { additive: true });
	else if (!isNodeSelected(selection, nodeId)) nextSelection = {
		type: "node",
		id: nodeId
	};
	const selectedIds = getSelectedNodeIds(nextSelection);
	const dragNodeIds = selectedIds.includes(nodeId) ? selectedIds : [nodeId];
	return {
		selection: nextSelection,
		dragNodeIds
	};
}
function getDiagramNodesInRect(nodes, rect) {
	const left = Math.min(rect.x, rect.x + rect.width);
	const right = Math.max(rect.x, rect.x + rect.width);
	const top = Math.min(rect.y, rect.y + rect.height);
	const bottom = Math.max(rect.y, rect.y + rect.height);
	return nodes.filter((node) => {
		const nodeRight = node.x + node.width;
		const nodeBottom = node.y + node.height;
		return node.x < right && nodeRight > left && node.y < bottom && nodeBottom > top;
	}).map((node) => node.id);
}
function sanitizeDiagramSelection(selection, document) {
	if (selection.type === "node") return document.nodes.some((node) => node.id === selection.id) ? selection : { type: "none" };
	if (selection.type === "nodes") {
		const ids = selection.ids.filter((id) => document.nodes.some((node) => node.id === id));
		if (ids.length === 0) return { type: "none" };
		if (ids.length === 1) return {
			type: "node",
			id: ids[0]
		};
		return {
			type: "nodes",
			ids
		};
	}
	if (selection.type === "edge") return document.edges.some((edge) => edge.id === selection.id) ? selection : { type: "none" };
	return selection;
}
function DiagramArtboard({ document, width, height, hideBackground = false, interactive = false, selection, connectDraft = null, connectPreviewPoint = null, onNodePointerDown, onNodeClick, onPortPointerDown, onResizePointerDown, onEdgeClick, onCanvasClick, onCanvasPointerDown, onPointerMove, alignGuides = [], marqueeRect = null, className }) {
	const brand = getCoverBrandThemeForSvgExport(document.theme);
	const edgePaths = buildDiagramEdgePaths(document.nodes, document.edges);
	const selectedNodeIds = getSelectedNodeIds(selection ?? { type: "none" });
	const selectedNodeCount = selectedNodeIds.length;
	const selectedNodeIdSet = useMemo(() => new Set(selectedNodeIds), [selectedNodeIds]);
	const renderNodes = useMemo(() => {
		const entries = document.nodes.map((node, stackIndex) => ({
			node,
			stackIndex
		}));
		if (!interactive || selectedNodeIds.length === 0 || document.nodes.length <= 1) return entries;
		const selected = entries.filter((entry) => selectedNodeIdSet.has(entry.node.id));
		return [...entries.filter((entry) => !selectedNodeIdSet.has(entry.node.id)), ...selected.map((entry, index) => ({
			...entry,
			stackIndex: document.nodes.length - selected.length + index
		}))];
	}, [
		document.nodes,
		interactive,
		selectedNodeIdSet,
		selectedNodeIds.length
	]);
	const draftNode = connectDraft ? document.nodes.find((node) => node.id === connectDraft.nodeId) : void 0;
	const connectPreviewPath = draftNode && connectPreviewPoint ? getDiagramConnectPreviewPath(draftNode, connectDraft.side, connectPreviewPoint) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative", interactive ? "overflow-visible" : "overflow-hidden", className),
		style: {
			width,
			height
		},
		onPointerDown: interactive ? onCanvasPointerDown : void 0,
		onMouseDown: interactive ? (event) => {
			if (event.target.closest("[data-diagram-node],[data-diagram-edge],[data-diagram-port],[data-diagram-resize]")) return;
			event.stopPropagation();
		} : void 0,
		onPointerMove: interactive ? onPointerMove : void 0,
		onClick: interactive ? (event) => {
			if (event.target.closest("[data-diagram-node],[data-diagram-edge],[data-diagram-port],[data-diagram-resize]")) return;
			event.stopPropagation();
			onCanvasClick?.();
		} : void 0,
		children: [
			hideBackground ? null : /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ jsx(CoverBrandBackgroundPreview, {
					themeId: document.theme,
					width,
					height
				})
			}),
			/* @__PURE__ */ jsxs("svg", {
				className: "pointer-events-none absolute inset-0 z-[1]",
				width,
				height,
				viewBox: `0 0 ${width} ${height}`,
				overflow: interactive ? "visible" : "hidden",
				"aria-hidden": true,
				children: [/* @__PURE__ */ jsx(DiagramEdgesLayer, {
					paths: edgePaths,
					brand,
					layer: "strokes",
					selectedEdgeId: selection?.type === "edge" ? selection.id : null
				}), connectPreviewPath ? /* @__PURE__ */ jsx("path", {
					d: connectPreviewPath,
					fill: "none",
					stroke: brand.brandCta,
					strokeWidth: 2,
					strokeDasharray: "6 5",
					strokeLinecap: "round",
					opacity: .45,
					pointerEvents: "none"
				}) : null]
			}),
			/* @__PURE__ */ jsx("svg", {
				className: "pointer-events-none absolute inset-0 z-[2]",
				width,
				height,
				viewBox: `0 0 ${width} ${height}`,
				overflow: interactive ? "visible" : "hidden",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx(DiagramEdgesLayer, {
					paths: edgePaths,
					brand,
					layer: "labels",
					selectedEdgeId: selection?.type === "edge" ? selection.id : null
				})
			}),
			interactive && !connectDraft ? /* @__PURE__ */ jsx("svg", {
				className: "pointer-events-none absolute inset-0 z-[3] overflow-visible",
				width,
				height,
				viewBox: `0 0 ${width} ${height}`,
				overflow: "visible",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx(DiagramEdgesLayer, {
					paths: edgePaths,
					brand,
					layer: "hit",
					selectedEdgeId: selection?.type === "edge" ? selection.id : null,
					onEdgeClick
				})
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 z-10 overflow-visible",
				children: renderNodes.map(({ node, stackIndex }) => {
					const isSelected = selectedNodeIdSet.has(node.id);
					const isConnectTarget = Boolean(connectDraft && connectDraft.nodeId !== node.id);
					const showPorts = Boolean(connectDraft) || isConnectTarget || isSelected && selectedNodeCount === 1;
					return /* @__PURE__ */ jsx(DiagramNodeView, {
						node,
						stackIndex,
						brand,
						themeId: document.theme,
						selected: isSelected,
						showPorts,
						connectDraftSide: connectDraft?.nodeId === node.id ? connectDraft.side : null,
						interactive,
						onPointerDown: interactive && onNodePointerDown ? (event) => onNodePointerDown(event, node.id) : void 0,
						onClick: interactive && onNodeClick ? (event) => onNodeClick(node.id, event) : void 0,
						onPortPointerDown: interactive && onPortPointerDown ? (side, event) => onPortPointerDown(node.id, side, event) : void 0,
						onResizePointerDown: interactive && onResizePointerDown && isSelected && selectedNodeCount === 1 ? (event) => onResizePointerDown(event, node.id) : void 0
					}, node.id);
				})
			}),
			/* @__PURE__ */ jsx("svg", {
				className: "pointer-events-none absolute inset-0 z-[11]",
				width,
				height,
				viewBox: `0 0 ${width} ${height}`,
				overflow: interactive ? "visible" : "hidden",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx(DiagramEdgesLayer, {
					paths: edgePaths,
					brand,
					layer: "arrowheads",
					selectedEdgeId: selection?.type === "edge" ? selection.id : null
				})
			}),
			interactive && alignGuides.length > 0 ? /* @__PURE__ */ jsx(DiagramAlignGuidesLayer, {
				guides: alignGuides,
				brand,
				width,
				height
			}) : null,
			interactive && marqueeRect ? /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute z-20 border border-[var(--brand-cta)] bg-[var(--brand-cta)]/10",
				style: {
					left: Math.min(marqueeRect.x, marqueeRect.x + marqueeRect.width),
					top: Math.min(marqueeRect.y, marqueeRect.y + marqueeRect.height),
					width: Math.abs(marqueeRect.width),
					height: Math.abs(marqueeRect.height)
				}
			}) : null
		]
	});
}
function getDiagramNodeBounds(node) {
	return {
		left: node.x,
		right: node.x + node.width,
		top: node.y,
		bottom: node.y + node.height,
		centerX: node.x + node.width / 2,
		centerY: node.y + node.height / 2
	};
}
function getBoundsAtPosition(node, x, y) {
	return getDiagramNodeBounds({
		...node,
		x,
		y
	});
}
function getAxisAnchors(bounds) {
	return [
		bounds.left,
		bounds.centerX,
		bounds.right
	];
}
function getVerticalAnchors(bounds) {
	return [
		bounds.top,
		bounds.centerY,
		bounds.bottom
	];
}
function snapToAxisTargets(anchors, targets, threshold) {
	let best = null;
	for (const anchor of anchors) for (const target of targets) {
		const offset = target.value - anchor;
		const distance = Math.abs(offset);
		if (distance > threshold) continue;
		if (!best || distance < best.distance) best = {
			offset,
			line: target.value,
			partnerBounds: target.bounds,
			distance
		};
	}
	if (!best) return null;
	return {
		offset: best.offset,
		line: best.line,
		partnerBounds: best.partnerBounds
	};
}
function applyDiagramShiftAxisConstraint(deltaX, deltaY, shiftKey) {
	if (!shiftKey) return {
		deltaX,
		deltaY
	};
	if (Math.abs(deltaX) >= Math.abs(deltaY)) return {
		deltaX,
		deltaY: 0
	};
	return {
		deltaX: 0,
		deltaY
	};
}
function buildGuideSpan(a, b) {
	return {
		start: Math.min(a.top, b.top),
		end: Math.max(a.bottom, b.bottom)
	};
}
function buildHorizontalGuideSpan(a, b) {
	return {
		start: Math.min(a.left, b.left),
		end: Math.max(a.right, b.right)
	};
}
function resolveDiagramNodeDragPosition(options) {
	const { node, originX, originY, deltaX, deltaY, shiftKey, otherNodes, snapToGrid = true } = options;
	const constrained = applyDiagramShiftAxisConstraint(deltaX, deltaY, shiftKey);
	let x = originX + constrained.deltaX;
	let y = originY + constrained.deltaY;
	const draggedBounds = getBoundsAtPosition(node, x, y);
	const guides = [];
	const xTargets = [];
	const yTargets = [];
	for (const other of otherNodes) {
		if (other.id === node.id) continue;
		const bounds = getDiagramNodeBounds(other);
		for (const value of getAxisAnchors(bounds)) xTargets.push({
			value,
			bounds
		});
		for (const value of getVerticalAnchors(bounds)) yTargets.push({
			value,
			bounds
		});
	}
	const xSnap = snapToAxisTargets(getAxisAnchors(draggedBounds), xTargets, 8);
	const ySnap = snapToAxisTargets(getVerticalAnchors(draggedBounds), yTargets, 8);
	let xSnapped = false;
	let ySnapped = false;
	if (xSnap) {
		x += xSnap.offset;
		xSnapped = true;
		const span = buildHorizontalGuideSpan(getBoundsAtPosition(node, x, y), xSnap.partnerBounds);
		guides.push({
			orientation: "vertical",
			position: xSnap.line,
			start: span.start,
			end: span.end
		});
	}
	if (ySnap) {
		y += ySnap.offset;
		ySnapped = true;
		const span = buildGuideSpan(getBoundsAtPosition(node, x, y), ySnap.partnerBounds);
		guides.push({
			orientation: "horizontal",
			position: ySnap.line,
			start: span.start,
			end: span.end
		});
	}
	if (snapToGrid) {
		if (!xSnapped) x = snapDiagramValue(x);
		if (!ySnapped) y = snapDiagramValue(y);
	}
	return {
		x,
		y,
		guides
	};
}
function DiagramCanvas({ document, selection, connectDraft, onSelectionChange, onCancelConnectDraft, onMoveNode, onMoveNodes, onResizeNode, onBeginDocumentGesture, onCommitDocumentGesture, canUndo, canRedo, onUndo, onRedo, onPortClick, onPortConnectComplete, onCanvasSizeChange, onDownload, onOpenImage, onBackToStart }) {
	const canvasPresetKey = getDiagramSizePresetKey(document.width, document.height);
	const dragStateRef = useRef(null);
	const marqueeStateRef = useRef(null);
	const suppressNextCanvasClickRef = useRef(false);
	const [marqueeRect, setMarqueeRect] = useState(null);
	const isNodeDraggingRef = useRef(false);
	const canvasPanGestureRef = useRef({
		active: false,
		moved: false,
		startX: 0,
		startY: 0
	});
	const [alignGuides, setAlignGuides] = useState([]);
	const [connectPreviewPoint, setConnectPreviewPoint] = useState(null);
	const [pendingConnectDraft, setPendingConnectDraft] = useState(null);
	const effectiveConnectDraft = connectDraft ?? pendingConnectDraft;
	const connectGestureRef = useRef(null);
	const findPortTarget = useCallback((clientX, clientY) => {
		const element = window.document.elementFromPoint(clientX, clientY)?.closest("[data-diagram-port]");
		if (!(element instanceof HTMLElement)) return null;
		const nodeId = element.dataset.nodeId;
		const side = element.dataset.portSide;
		if (!nodeId || !side) return null;
		return {
			nodeId,
			side
		};
	}, []);
	const toDocumentPointFromClient = useCallback((clientX, clientY) => {
		const artboard = window.document.querySelector("[data-diagram-artboard]");
		if (!(artboard instanceof HTMLElement)) return null;
		const rect = artboard.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return null;
		return {
			x: (clientX - rect.left) / rect.width * document.width,
			y: (clientY - rect.top) / rect.height * document.height
		};
	}, [document.width, document.height]);
	const { canvasRef, pan, zoom, isDragging, bindCanvas, zoomIn, zoomOut, resetView, zoomPercentage, zoomInDisabled, zoomOutDisabled } = useViewportPanZoom({
		maxZoom: 3,
		contentLayout: "sized",
		getContentSize: useCallback((nextZoom) => getDiagramArtboardDisplaySize(document.width, document.height, nextZoom), [document.width, document.height])
	});
	const artboardDisplaySize = getDiagramArtboardDisplaySize(document.width, document.height, zoom);
	const artboardRenderScale = getDiagramArtboardRenderScale(document.width, zoom);
	const artboardTransformStyle = {
		width: document.width,
		height: document.height,
		transform: `scale(${artboardRenderScale})`,
		transformOrigin: "top left"
	};
	const isDiagramElementTarget = useCallback((target) => {
		if (!(target instanceof HTMLElement)) return false;
		return Boolean(target.closest("[data-diagram-node]") || target.closest("[data-diagram-edge]") || target.closest("[data-diagram-port]") || target.closest("[data-diagram-resize]"));
	}, []);
	const isArtboardBackgroundTarget = useCallback((target) => {
		if (!(target instanceof HTMLElement)) return false;
		if (!target.closest("[data-diagram-artboard]")) return false;
		return !isDiagramElementTarget(target);
	}, [isDiagramElementTarget]);
	const clearCanvasFocus = useCallback(() => {
		if (suppressNextCanvasClickRef.current) return;
		onSelectionChange({ type: "none" });
		onCancelConnectDraft();
		setConnectPreviewPoint(null);
	}, [onCancelConnectDraft, onSelectionChange]);
	const consumeSuppressedCanvasClick = useCallback(() => {
		if (!suppressNextCanvasClickRef.current) return false;
		suppressNextCanvasClickRef.current = false;
		return true;
	}, []);
	const handleCanvasMouseDown = useCallback((event) => {
		if (isDiagramElementTarget(event.target)) return;
		if (isArtboardBackgroundTarget(event.target)) return;
		canvasPanGestureRef.current = {
			active: true,
			moved: false,
			startX: event.clientX,
			startY: event.clientY
		};
		bindCanvas.onMouseDown(event);
	}, [
		bindCanvas,
		isArtboardBackgroundTarget,
		isDiagramElementTarget
	]);
	const handleCanvasMouseMove = useCallback((event) => {
		const panGesture = canvasPanGestureRef.current;
		if (panGesture.active) {
			if (Math.hypot(event.clientX - panGesture.startX, event.clientY - panGesture.startY) > 4) panGesture.moved = true;
		}
		if (isNodeDraggingRef.current) return;
		bindCanvas.onMouseMove(event);
	}, [bindCanvas]);
	const handleCanvasMouseUp = useCallback(() => {
		isNodeDraggingRef.current = false;
		canvasPanGestureRef.current.active = false;
		bindCanvas.onMouseUp();
	}, [bindCanvas]);
	const handleCanvasClick = useCallback((event) => {
		if (event.target instanceof HTMLElement && event.target.closest("[data-diagram-artboard]")) return;
		if (consumeSuppressedCanvasClick()) return;
		if (isDiagramElementTarget(event.target)) return;
		const wasPanGesture = canvasPanGestureRef.current.moved;
		canvasPanGestureRef.current.moved = false;
		if (wasPanGesture) return;
		clearCanvasFocus();
	}, [
		clearCanvasFocus,
		consumeSuppressedCanvasClick,
		isDiagramElementTarget
	]);
	useEffect(() => {
		resetView();
	}, [
		document.width,
		document.height,
		document.theme,
		resetView
	]);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") clearCanvasFocus();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [clearCanvasFocus]);
	useEffect(() => {
		if (!effectiveConnectDraft) setConnectPreviewPoint(null);
	}, [effectiveConnectDraft]);
	useEffect(() => {
		if (connectDraft) setPendingConnectDraft(null);
	}, [connectDraft]);
	const handleArtboardPointerMove = useCallback((event) => {
		if (!effectiveConnectDraft) return;
		setConnectPreviewPoint(toDocumentPointFromClient(event.clientX, event.clientY));
	}, [effectiveConnectDraft, toDocumentPointFromClient]);
	const handlePortPointerDown = useCallback((nodeId, side, event) => {
		event.stopPropagation();
		event.preventDefault();
		isNodeDraggingRef.current = true;
		if (connectDraft) {
			onPortClick(nodeId, side);
			isNodeDraggingRef.current = false;
			setConnectPreviewPoint(null);
			return;
		}
		connectGestureRef.current = {
			startX: event.clientX,
			startY: event.clientY,
			moved: false,
			fromNodeId: nodeId,
			fromSide: side
		};
		setPendingConnectDraft({
			nodeId,
			side
		});
		onPortClick(nodeId, side);
		event.currentTarget.setPointerCapture(event.pointerId);
		const handlePointerMove = (moveEvent) => {
			const gesture = connectGestureRef.current;
			if (!gesture) return;
			if (Math.hypot(moveEvent.clientX - gesture.startX, moveEvent.clientY - gesture.startY) > 4) gesture.moved = true;
			const point = toDocumentPointFromClient(moveEvent.clientX, moveEvent.clientY);
			if (point) setConnectPreviewPoint(point);
		};
		const handlePointerUp = (upEvent) => {
			const gesture = connectGestureRef.current;
			connectGestureRef.current = null;
			isNodeDraggingRef.current = false;
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointercancel", handlePointerUp);
			if (!gesture) return;
			if (gesture.moved) {
				const target = findPortTarget(upEvent.clientX, upEvent.clientY);
				if (target) onPortConnectComplete(gesture.fromNodeId, gesture.fromSide, target.nodeId, target.side);
				else onCancelConnectDraft();
				setConnectPreviewPoint(null);
			}
			setPendingConnectDraft(null);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointercancel", handlePointerUp);
	}, [
		connectDraft,
		findPortTarget,
		onCancelConnectDraft,
		onPortClick,
		onPortConnectComplete,
		toDocumentPointFromClient
	]);
	const handleNodePointerDown = useCallback((event, nodeId) => {
		if (connectDraft) return;
		event.stopPropagation();
		isNodeDraggingRef.current = true;
		const { selection: nextSelection, dragNodeIds } = resolveNodePointerSelection(selection, nodeId, {
			shiftKey: event.shiftKey,
			metaKey: event.metaKey,
			ctrlKey: event.ctrlKey
		});
		onSelectionChange(nextSelection);
		onBeginDocumentGesture();
		const nodeOrigins = /* @__PURE__ */ new Map();
		for (const id of dragNodeIds) {
			const node = document.nodes.find((item) => item.id === id);
			if (node) nodeOrigins.set(id, {
				x: node.x,
				y: node.y
			});
		}
		const anchorNodeId = nodeId;
		if (!document.nodes.find((item) => item.id === anchorNodeId) || nodeOrigins.size === 0) return;
		dragStateRef.current = {
			anchorNodeId,
			startX: event.clientX,
			startY: event.clientY,
			nodeOrigins
		};
		event.currentTarget.setPointerCapture(event.pointerId);
		const handlePointerMove = (moveEvent) => {
			const dragState = dragStateRef.current;
			if (!dragState || dragState.anchorNodeId !== anchorNodeId) return;
			const deltaX = (moveEvent.clientX - dragState.startX) / artboardRenderScale;
			const deltaY = (moveEvent.clientY - dragState.startY) / artboardRenderScale;
			const anchorOrigin = dragState.nodeOrigins.get(anchorNodeId);
			const draggedNode = document.nodes.find((item) => item.id === anchorNodeId);
			if (!anchorOrigin || !draggedNode) return;
			const dragIds = [...dragState.nodeOrigins.keys()];
			const { x, y, guides } = resolveDiagramNodeDragPosition({
				node: draggedNode,
				originX: anchorOrigin.x,
				originY: anchorOrigin.y,
				deltaX,
				deltaY,
				shiftKey: moveEvent.shiftKey,
				otherNodes: document.nodes.filter((item) => !dragIds.includes(item.id))
			});
			const appliedDeltaX = x - anchorOrigin.x;
			const appliedDeltaY = y - anchorOrigin.y;
			setAlignGuides(guides);
			if (dragIds.length === 1) {
				onMoveNode(anchorNodeId, x, y);
				return;
			}
			onMoveNodes(dragIds.map((id) => {
				const origin = dragState.nodeOrigins.get(id);
				return {
					id,
					x: (origin?.x ?? 0) + appliedDeltaX,
					y: (origin?.y ?? 0) + appliedDeltaY
				};
			}));
		};
		const handlePointerUp = () => {
			dragStateRef.current = null;
			isNodeDraggingRef.current = false;
			setAlignGuides([]);
			onCommitDocumentGesture();
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
	}, [
		artboardRenderScale,
		connectDraft,
		document.nodes,
		onMoveNode,
		onMoveNodes,
		onBeginDocumentGesture,
		onCommitDocumentGesture,
		onSelectionChange,
		selection
	]);
	const handleCanvasMarqueePointerDown = useCallback((event) => {
		if (connectDraft) return;
		if (event.target.closest("[data-diagram-node],[data-diagram-edge],[data-diagram-port],[data-diagram-resize]")) return;
		event.stopPropagation();
		event.preventDefault();
		isNodeDraggingRef.current = true;
		const marqueePointerTarget = event.currentTarget;
		marqueePointerTarget.setPointerCapture(event.pointerId);
		const point = toDocumentPointFromClient(event.clientX, event.clientY);
		if (!point) return;
		marqueeStateRef.current = {
			startX: point.x,
			startY: point.y,
			additive: event.shiftKey || event.metaKey || event.ctrlKey
		};
		setMarqueeRect({
			x: point.x,
			y: point.y,
			width: 0,
			height: 0
		});
		const handlePointerMove = (moveEvent) => {
			const marqueeState = marqueeStateRef.current;
			if (!marqueeState) return;
			const currentPoint = toDocumentPointFromClient(moveEvent.clientX, moveEvent.clientY);
			if (!currentPoint) return;
			setMarqueeRect({
				x: marqueeState.startX,
				y: marqueeState.startY,
				width: currentPoint.x - marqueeState.startX,
				height: currentPoint.y - marqueeState.startY
			});
		};
		const handlePointerUp = (upEvent) => {
			const marqueeState = marqueeStateRef.current;
			marqueeStateRef.current = null;
			isNodeDraggingRef.current = false;
			setMarqueeRect(null);
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointercancel", handlePointerUp);
			try {
				if (marqueePointerTarget.hasPointerCapture(upEvent.pointerId)) marqueePointerTarget.releasePointerCapture(upEvent.pointerId);
			} catch {}
			if (!marqueeState) return;
			const endPoint = toDocumentPointFromClient(upEvent.clientX, upEvent.clientY);
			if (!endPoint) return;
			const rect = {
				x: marqueeState.startX,
				y: marqueeState.startY,
				width: endPoint.x - marqueeState.startX,
				height: endPoint.y - marqueeState.startY
			};
			if (Math.abs(rect.width) < 4 && Math.abs(rect.height) < 4) return;
			suppressNextCanvasClickRef.current = true;
			const nodeIds = getDiagramNodesInRect(document.nodes, rect);
			if (nodeIds.length === 0) {
				if (!marqueeState.additive) onSelectionChange({ type: "none" });
				return;
			}
			if (marqueeState.additive) {
				onSelectionChange(selectDiagramNodes([...selection.type === "nodes" ? selection.ids : selection.type === "node" ? [selection.id] : [], ...nodeIds]));
				return;
			}
			onSelectionChange(selectDiagramNodes(nodeIds));
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointercancel", handlePointerUp);
	}, [
		connectDraft,
		document.nodes,
		onSelectionChange,
		selection,
		toDocumentPointFromClient
	]);
	const handleResizePointerDown = useCallback((event, nodeId) => {
		event.stopPropagation();
		isNodeDraggingRef.current = true;
		const node = document.nodes.find((item) => item.id === nodeId);
		if (!node) return;
		onBeginDocumentGesture();
		const start = {
			clientX: event.clientX,
			clientY: event.clientY,
			width: node.width,
			height: node.height
		};
		const handlePointerMove = (moveEvent) => {
			const deltaX = (moveEvent.clientX - start.clientX) / artboardRenderScale;
			const deltaY = (moveEvent.clientY - start.clientY) / artboardRenderScale;
			onResizeNode(nodeId, start.width + deltaX, start.height + deltaY);
		};
		const handlePointerUp = () => {
			isNodeDraggingRef.current = false;
			onCommitDocumentGesture();
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
	}, [
		artboardRenderScale,
		document.nodes,
		onBeginDocumentGesture,
		onCommitDocumentGesture,
		onResizeNode
	]);
	const handleCanvasKeyDown = useCallback((event) => {
		const isMeta = event.metaKey || event.ctrlKey;
		if (isMeta && (event.key === "z" || event.key === "Z")) {
			event.preventDefault();
			if (event.shiftKey) {
				if (canRedo) onRedo();
			} else if (canUndo) onUndo();
			return;
		}
		if (event.ctrlKey && event.key === "y") {
			event.preventDefault();
			if (canRedo) onRedo();
			return;
		}
		if (isMeta || event.altKey) return;
		const key = event.key;
		if (key === "+" || key === "=") {
			if (zoomInDisabled) return;
			event.preventDefault();
			zoomIn();
		} else if (key === "-" || key === "_") {
			if (zoomOutDisabled) return;
			event.preventDefault();
			zoomOut();
		} else if (key === "0") {
			event.preventDefault();
			resetView();
		}
	}, [
		canRedo,
		canUndo,
		onRedo,
		onUndo,
		zoomIn,
		zoomOut,
		resetView,
		zoomInDisabled,
		zoomOutDisabled
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-0 flex-1 overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx("div", {
				ref: canvasRef,
				onMouseDown: handleCanvasMouseDown,
				onMouseMove: handleCanvasMouseMove,
				onMouseUp: handleCanvasMouseUp,
				onMouseLeave: handleCanvasMouseUp,
				onClick: handleCanvasClick,
				tabIndex: -1,
				role: "application",
				"aria-label": "Pan and zoom diagram canvas. Scroll to zoom, drag the diagram background to pan.",
				onKeyDown: handleCanvasKeyDown,
				className: cn("absolute inset-0 overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", isDragging ? "cursor-grabbing" : "cursor-grab"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "pointer-events-none absolute inset-0 overflow-visible will-change-transform",
					style: { transform: `translate(${pan.x}px, ${pan.y}px)` },
					children: [/* @__PURE__ */ jsx(SchemaBlueprintMat, {}), /* @__PURE__ */ jsx("div", {
						className: "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
						style: {
							width: artboardDisplaySize.width,
							height: artboardDisplaySize.height
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "absolute left-0 top-0 origin-top-left overflow-hidden rounded-xl border border-border shadow-sm",
							style: artboardTransformStyle,
							children: [/* @__PURE__ */ jsx(CoverBrandBackgroundPreview, {
								themeId: document.theme,
								width: document.width,
								height: document.height
							}), /* @__PURE__ */ jsx("div", {
								"data-diagram-artboard": "",
								className: "absolute inset-0 overflow-visible",
								children: /* @__PURE__ */ jsx(DiagramArtboard, {
									document,
									width: document.width,
									height: document.height,
									hideBackground: true,
									interactive: true,
									selection,
									connectDraft: effectiveConnectDraft,
									connectPreviewPoint,
									onNodePointerDown: handleNodePointerDown,
									onPortPointerDown: handlePortPointerDown,
									onResizePointerDown: handleResizePointerDown,
									onCanvasPointerDown: handleCanvasMarqueePointerDown,
									marqueeRect,
									onEdgeClick: (edgeId) => {
										onCancelConnectDraft();
										onSelectionChange({
											type: "edge",
											id: edgeId
										});
									},
									onPointerMove: handleArtboardPointerMove,
									alignGuides,
									onCanvasClick: () => {
										if (consumeSuppressedCanvasClick()) return;
										clearCanvasFocus();
									}
								})
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-x-4 top-4 z-20 flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "pointer-events-auto flex shrink-0 items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: onUndo,
							disabled: !canUndo,
							"aria-label": "Undo",
							children: /* @__PURE__ */ jsx(Undo2, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: onRedo,
							disabled: !canRedo,
							"aria-label": "Redo",
							children: /* @__PURE__ */ jsx(Redo2, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: zoomIn,
							disabled: zoomInDisabled,
							"aria-label": "Zoom in",
							children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-8 min-w-[64px] items-center justify-center rounded-md border border-border bg-card/95 px-3 backdrop-blur-sm",
							children: /* @__PURE__ */ jsxs("span", {
								className: "text-[12px] font-medium text-foreground",
								children: [zoomPercentage, "%"]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: zoomOut,
							disabled: zoomOutDisabled,
							"aria-label": "Zoom out",
							children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: resetView,
							"aria-label": "Reset pan and zoom",
							children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "pointer-events-auto flex max-w-[min(100%,720px)] shrink-0 flex-wrap items-center justify-end gap-2",
					children: [
						onBackToStart ? /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 border-border bg-card/95 text-[12px] backdrop-blur-sm",
							onClick: onBackToStart,
							children: [/* @__PURE__ */ jsx(LayoutGrid, { className: "me-1.5 size-3.5" }), "All diagrams"]
						}) : null,
						/* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 border-border bg-card/95 text-[12px] backdrop-blur-sm",
							onClick: onOpenImage,
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 size-3.5" }), "Open image"]
						}),
						/* @__PURE__ */ jsxs(Select, {
							value: canvasPresetKey,
							onValueChange: (value) => {
								const { width, height } = resolveDiagramSizePresetKey(value);
								onCanvasSizeChange(width, height);
							},
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								"aria-label": "Canvas size",
								className: "h-8 w-auto max-w-[min(100%,220px)] border-border bg-card/95 text-[12px] backdrop-blur-sm",
								children: /* @__PURE__ */ jsx(SelectValue, {})
							}), /* @__PURE__ */ jsx(SelectContent, {
								align: "end",
								children: DIAGRAM_SIZE_PRESETS.map((preset) => /* @__PURE__ */ jsx(SelectItem, {
									value: preset.id,
									children: preset.label
								}, preset.id))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative isolate flex shrink-0 items-stretch",
							children: [/* @__PURE__ */ jsxs(Button, {
								type: "button",
								size: "sm",
								className: "relative z-[1] h-8 rounded-e-none px-3 text-[12px] shadow-sm",
								onClick: () => onDownload(document.format, 1),
								children: [/* @__PURE__ */ jsx(Download, { className: "me-1.5 size-3.5" }), "Download"]
							}), /* @__PURE__ */ jsxs(DropdownMenu, {
								modal: false,
								children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(Button, {
										type: "button",
										size: "sm",
										className: "relative z-[2] h-8 rounded-s-none border-s border-primary-foreground/15 px-2 shadow-sm",
										"aria-label": "More download options",
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5" })
									})
								}), /* @__PURE__ */ jsx(DropdownMenuContent, {
									align: "end",
									className: "w-60 p-1.5",
									children: COVER_IMAGE_FORMATS.map((format, formatIndex) => /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
										formatIndex > 0 ? /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1.5" }) : null,
										/* @__PURE__ */ jsx(DropdownMenuLabel, {
											className: "px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: format.toUpperCase()
										}),
										COVER_DOWNLOAD_SCALES.map((scaleOption) => {
											const dimensions = getCoverScaledDimensions(document.width, document.height, scaleOption);
											const scaleLabel = formatCoverDownloadScaleLabel(scaleOption);
											const sizeLabel = dimensions ? formatCoverDimensionsLabel(dimensions.width, dimensions.height) : "Too large";
											return /* @__PURE__ */ jsxs(DropdownMenuItem, {
												disabled: !dimensions,
												className: "min-h-10 cursor-pointer px-2.5 py-2 text-[13px]",
												onSelect: () => onDownload(format, scaleOption),
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-medium",
													children: scaleLabel
												}), /* @__PURE__ */ jsx("span", {
													className: "ms-auto text-[12px] text-muted-foreground",
													children: sizeLabel
												})]
											}, `${format}-${scaleOption}`);
										})
									] }, format))
								})]
							})]
						})
					]
				})]
			}),
			connectDraft ? /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-x-4 bottom-4 z-20 flex justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card/95 px-4 py-2 text-[12px] text-foreground shadow-sm backdrop-blur-sm",
					children: "Click a dot on another node to connect. Press Escape to cancel."
				})
			}) : null
		]
	});
}
var ELEMENT_ITEMS = [
	{
		kind: "service",
		label: DIAGRAM_NODE_KIND_LABELS.service,
		icon: Box
	},
	{
		kind: "title",
		label: DIAGRAM_NODE_KIND_LABELS.title,
		icon: Type
	},
	{
		kind: "label",
		label: DIAGRAM_NODE_KIND_LABELS.label,
		icon: Tag
	},
	{
		kind: "group",
		label: DIAGRAM_NODE_KIND_LABELS.group,
		icon: GitBranch
	},
	{
		kind: "icon",
		label: DIAGRAM_NODE_KIND_LABELS.icon,
		icon: Shapes
	},
	{
		kind: "screenshot",
		label: DIAGRAM_NODE_KIND_LABELS.screenshot,
		icon: ImageIcon
	},
	{
		kind: "table",
		label: DIAGRAM_NODE_KIND_LABELS.table,
		icon: Table2
	}
];
function DiagramElementsPanel({ theme, onThemeChange, onAddNode, variant = "panel" }) {
	if (variant === "compact") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsx(CoverThemeSelect, {
			theme,
			onThemeChange
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap gap-2",
			children: ELEMENT_ITEMS.map((item) => /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 text-[12px]",
				onClick: () => onAddNode(item.kind),
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 size-3.5" }), item.label]
			}, item.kind))
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "shrink-0 space-y-2 border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[12px] font-medium text-foreground",
				children: "Elements"
			}), /* @__PURE__ */ jsx(CoverThemeSelect, {
				theme,
				onThemeChange
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-4 py-3",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-2",
				children: ELEMENT_ITEMS.map((item) => {
					const Icon$1 = item.icon;
					return /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 justify-start text-[12px]",
						onClick: () => onAddNode(item.kind),
						children: [
							/* @__PURE__ */ jsx(Icon$1, { className: "me-1.5 size-3.5" }),
							"Add ",
							item.label.toLowerCase()
						]
					}, item.kind);
				})
			})
		})]
	});
}
function getDiagramLayerListItems(nodes) {
	return nodes.map((node, index) => ({
		node,
		index
	})).reverse();
}
function reorderDiagramNodesInDisplayOrder(nodes, activeId, overId) {
	if (activeId === overId) return nodes;
	const displayIds = nodes.map((node) => node.id).reverse();
	const oldIndex = displayIds.indexOf(activeId);
	const newIndex = displayIds.indexOf(overId);
	if (oldIndex === -1 || newIndex === -1) return nodes;
	const nextDisplayIds = arrayMove(displayIds, oldIndex, newIndex);
	const nodeById = new Map(nodes.map((node) => [node.id, node]));
	return nextDisplayIds.reverse().map((id) => nodeById.get(id));
}
var GRAVITY_PICKER_ICON = {
	"top-left": CornerUpLeft,
	top: ArrowUp,
	"top-right": CornerUpRight,
	left: ArrowLeft,
	center: Crosshair,
	right: ArrowRight,
	"bottom-left": CornerDownLeft,
	bottom: ArrowDown,
	"bottom-right": CornerDownRight
};
function DiagramScreenshotGravityPicker({ node, onChange }) {
	const focus = getDiagramScreenshotFocus(node);
	const selectedGravity = getDiagramScreenshotGravityFromFocus(focus.focusX, focus.focusY);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					className: "text-[12px]",
					children: "Gravity"
				}), /* @__PURE__ */ jsx("span", {
					className: "ms-auto min-w-0 shrink-0 whitespace-nowrap text-end text-[11px] capitalize text-muted-foreground",
					"aria-live": "polite",
					children: formatDiagramScreenshotGravityLabel(selectedGravity)
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "w-full max-w-[11.5rem] rounded-lg border border-border bg-muted/25 p-px shadow-inner dark:bg-muted/15",
				role: "group",
				"aria-label": "Screenshot gravity",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-3 gap-px bg-border/70",
					children: DIAGRAM_SCREENSHOT_GRAVITY_GRID_ROWS.flatMap((row, rowIndex) => row.map((gravity, columnIndex) => {
						const Icon$1 = GRAVITY_PICKER_ICON[gravity];
						const selected = selectedGravity === gravity;
						const cellIndex = rowIndex * 3 + columnIndex;
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							className: cn("relative flex aspect-square min-h-10 w-full min-w-0 items-center justify-center", "bg-background/90 transition-colors duration-150", "hover:bg-muted/70 hover:text-foreground", "focus-visible:z-[2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", selected ? "bg-accent text-foreground shadow-sm" : "text-muted-foreground", cellIndex === 0 ? "rounded-ss-[calc(var(--radius-lg)_-_1px)]" : cellIndex === 2 ? "rounded-se-[calc(var(--radius-lg)_-_1px)]" : cellIndex === 6 ? "rounded-es-[calc(var(--radius-lg)_-_1px)]" : cellIndex === 8 ? "rounded-ee-[calc(var(--radius-lg)_-_1px)]" : ""),
							"aria-label": formatDiagramScreenshotGravityLabel(gravity),
							"aria-pressed": selected,
							onClick: () => onChange(getDiagramScreenshotFocusForGravity(gravity)),
							children: /* @__PURE__ */ jsx(Icon$1, {
								className: "size-3.5",
								strokeWidth: 1.75,
								"aria-hidden": true
							})
						}, gravity);
					}))
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: "Controls how the image is cropped inside the browser frame."
			})
		]
	});
}
function DiagramTableEditor({ headers, rows, onChange }) {
	const columnCount = headers.length;
	const rowCount = rows.length;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					className: "text-[12px]",
					children: "Columns"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "icon",
							className: "size-7",
							disabled: columnCount <= 2,
							"aria-label": "Remove column",
							onClick: () => onChange(resizeDiagramTableColumns(headers, rows, columnCount - 1)),
							children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
						}),
						/* @__PURE__ */ jsx("span", {
							className: "w-6 text-center text-[12px] tabular-nums text-muted-foreground",
							children: columnCount
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "icon",
							className: "size-7",
							disabled: columnCount >= 6,
							"aria-label": "Add column",
							onClick: () => onChange(resizeDiagramTableColumns(headers, rows, columnCount + 1)),
							children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					className: "text-[12px]",
					children: "Rows"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "icon",
							className: "size-7",
							disabled: rowCount <= 2,
							"aria-label": "Remove row",
							onClick: () => onChange(resizeDiagramTableRows(headers, rows, rowCount - 1)),
							children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
						}),
						/* @__PURE__ */ jsx("span", {
							className: "w-6 text-center text-[12px] tabular-nums text-muted-foreground",
							children: rowCount
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "icon",
							className: "size-7",
							disabled: rowCount >= 8,
							"aria-label": "Add row",
							onClick: () => onChange(resizeDiagramTableRows(headers, rows, rowCount + 1)),
							children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "overflow-x-auto rounded-lg border border-border",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-max min-w-full border-collapse text-[12px]",
					style: { minWidth: columnCount * 120 },
					children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", {
						className: "border-b border-border bg-muted/30",
						children: headers.map((header, columnIndex) => /* @__PURE__ */ jsx("th", {
							className: "min-w-[120px] px-2 py-1.5 text-start font-medium",
							children: /* @__PURE__ */ jsx(Input, {
								value: header,
								maxLength: 48,
								className: "h-7 min-w-[104px] border-0 bg-transparent px-1 text-[11px] shadow-none focus-visible:ring-1",
								onChange: (event) => onChange(updateDiagramTableCell(headers, rows, -1, columnIndex, event.target.value))
							})
						}, columnIndex))
					}) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row, rowIndex) => /* @__PURE__ */ jsx("tr", {
						className: "border-b border-border last:border-b-0",
						children: row.map((cell, columnIndex) => /* @__PURE__ */ jsx("td", {
							className: "min-w-[120px] px-2 py-1",
							children: /* @__PURE__ */ jsx(Input, {
								value: cell,
								maxLength: 48,
								className: "h-7 min-w-[104px] border-0 bg-transparent px-1 text-[11px] shadow-none focus-visible:ring-1",
								onChange: (event) => onChange(updateDiagramTableCell(headers, rows, rowIndex, columnIndex, event.target.value))
							})
						}, columnIndex))
					}, rowIndex)) })]
				})
			})
		]
	});
}
var SCREENSHOT_ACCEPT = "image/png,image/jpeg,image/webp,image/avif";
var SCREENSHOT_MAX_BYTES = 4 * 1024 * 1024;
var SCREENSHOT_PREVIEW_FRAME_HEIGHT = 144;
function readScreenshotFile(file) {
	return new Promise((resolve, reject) => {
		if (!file.type.startsWith("image/")) {
			reject(/* @__PURE__ */ new Error("Unsupported file type"));
			return;
		}
		if (file.size > SCREENSHOT_MAX_BYTES) {
			reject(/* @__PURE__ */ new Error("Image is too large"));
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") {
				resolve(reader.result);
				return;
			}
			reject(/* @__PURE__ */ new Error("Could not read image"));
		};
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read image"));
		reader.readAsDataURL(file);
	});
}
function DiagramNodeKindProperties({ node, themeId, onNodeChange }) {
	const screenshotInputRef = useRef(null);
	if (node.kind === "service") {
		const iconValue = node.iconSrc ?? "";
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx(CoverBuiltInIconPicker, {
					id: `diagram-service-icon-${node.id}`,
					label: "Icon",
					description: "Optional. Choose a brand or Lucide icon for this element.",
					value: iconValue,
					isCustomImage: false,
					onSelectBuiltIn: (iconSrc) => onNodeChange(node.id, { iconSrc })
				}),
				iconValue ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-8 text-[12px]",
					onClick: () => onNodeChange(node.id, { iconSrc: void 0 }),
					children: "Remove icon"
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: `diagram-service-subtitle-${node.id}`,
						className: "text-[12px]",
						children: "Subtitle"
					}), /* @__PURE__ */ jsx(Input, {
						id: `diagram-service-subtitle-${node.id}`,
						value: node.subtitle ?? "",
						maxLength: 64,
						placeholder: "Optional helper text",
						className: "h-9 text-[13px]",
						onChange: (event) => onNodeChange(node.id, { subtitle: event.target.value || void 0 })
					})]
				})
			]
		});
	}
	if (node.kind === "title") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx(Label, {
			htmlFor: `diagram-title-subtitle-${node.id}`,
			className: "text-[12px]",
			children: "Subtitle"
		}), /* @__PURE__ */ jsx(Input, {
			id: `diagram-title-subtitle-${node.id}`,
			value: node.subtitle ?? "",
			maxLength: 96,
			placeholder: "Optional supporting line",
			className: "h-9 text-[13px]",
			onChange: (event) => onNodeChange(node.id, { subtitle: event.target.value || void 0 })
		})]
	});
	if (node.kind === "icon") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsx(CoverBuiltInIconPicker, {
			id: `diagram-icon-${node.id}`,
			label: "Icon",
			description: "Choose a brand or Lucide icon for this element.",
			value: getDiagramNodeIconSrc(node),
			isCustomImage: false,
			onSelectBuiltIn: (iconSrc) => onNodeChange(node.id, { iconSrc })
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: `diagram-icon-caption-${node.id}`,
				className: "text-[12px]",
				children: "Caption"
			}), /* @__PURE__ */ jsx(Input, {
				id: `diagram-icon-caption-${node.id}`,
				value: node.label,
				maxLength: 48,
				placeholder: "Optional",
				className: "h-9 text-[13px]",
				onChange: (event) => onNodeChange(node.id, { label: event.target.value })
			})]
		})]
	});
	if (node.kind === "screenshot") {
		const focus = getDiagramScreenshotFocus(node);
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[12px]",
						children: "Image"
					}), /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-border bg-muted/20 p-3",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-3 overflow-hidden rounded-md border border-border",
								children: /* @__PURE__ */ jsx(CoverHeroBrowserFrame, {
									frameWidth: 240,
									frameHeight: SCREENSHOT_PREVIEW_FRAME_HEIGHT,
									themeId,
									closed: true,
									src: node.imageSrc,
									focusX: focus.focusX,
									focusY: focus.focusY,
									alt: node.label || "Screenshot",
									placeholder: /* @__PURE__ */ jsx("div", {
										className: "flex h-full w-full items-center justify-center bg-[#17171c] text-[12px] text-white/45",
										children: "No image"
									})
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: () => screenshotInputRef.current?.click(),
									children: node.imageSrc ? "Replace image" : "Upload image"
								}), node.imageSrc ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-8 text-[12px]",
									onClick: () => onNodeChange(node.id, { imageSrc: void 0 }),
									children: "Remove"
								}) : null]
							}),
							/* @__PURE__ */ jsx("input", {
								ref: screenshotInputRef,
								type: "file",
								accept: SCREENSHOT_ACCEPT,
								className: "hidden",
								onChange: (event) => {
									const file = event.target.files?.[0];
									event.target.value = "";
									if (!file) return;
									readScreenshotFile(file).then((imageSrc) => onNodeChange(node.id, { imageSrc })).catch(() => {});
								}
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: "PNG, JPEG, WebP, or AVIF up to 4 MB."
							})
						]
					})]
				}),
				node.imageSrc ? /* @__PURE__ */ jsx(DiagramScreenshotGravityPicker, {
					node,
					onChange: (patch) => onNodeChange(node.id, patch)
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: `diagram-screenshot-caption-${node.id}`,
						className: "text-[12px]",
						children: "Caption"
					}), /* @__PURE__ */ jsx(Input, {
						id: `diagram-screenshot-caption-${node.id}`,
						value: node.label,
						maxLength: 48,
						placeholder: "Optional",
						className: "h-9 text-[13px]",
						onChange: (event) => onNodeChange(node.id, { label: event.target.value })
					})]
				})
			]
		});
	}
	if (node.kind === "table") {
		const defaults = createDefaultDiagramTable();
		const headers = node.tableHeaders ?? defaults.tableHeaders;
		const rows = node.tableRows ?? defaults.tableRows;
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: `diagram-table-title-${node.id}`,
					className: "text-[12px]",
					children: "Title"
				}), /* @__PURE__ */ jsx(Input, {
					id: `diagram-table-title-${node.id}`,
					value: node.label,
					maxLength: 48,
					className: "h-9 text-[13px]",
					onChange: (event) => onNodeChange(node.id, { label: event.target.value })
				})]
			}), /* @__PURE__ */ jsx(DiagramTableEditor, {
				headers,
				rows,
				onChange: (patch) => onNodeChange(node.id, patch)
			})]
		});
	}
	return null;
}
function shouldShowDiagramNodeLabelField(node) {
	return ![
		"icon",
		"screenshot",
		"table"
	].includes(node.kind);
}
function getDiagramNodeLabelFieldLabel(node) {
	return node.kind === "title" ? "Title" : "Label";
}
function getDiagramNodeLabelMaxLength(node) {
	return node.kind === "title" ? 96 : 48;
}
function getDiagramNodePropertiesSubtitle(node) {
	if (node.kind === "service") return "Element";
	if (node.kind === "title") return "Title element";
	if (node.kind === "icon") return "Icon element";
	if (node.kind === "screenshot") return "Screenshot element";
	if (node.kind === "table") return "Table element";
	return `${node.kind} node`;
}
function getDiagramNodeLayerSubtitle(node) {
	return DIAGRAM_NODE_KIND_LABELS[node.kind];
}
var layerDragModifiers = getAxisRestrictedDragModifiers("vertical");
var NODE_KIND_ICONS = {
	service: Box,
	title: Type,
	label: Tag,
	group: GitBranch,
	icon: Shapes,
	screenshot: ImageIcon,
	table: Table2
};
function LayerNodeIcon({ node }) {
	if (node.kind === "service" && node.iconSrc) return /* @__PURE__ */ jsx(CoverIconPreview, {
		src: getDiagramNodeIconSrc(node),
		colorMode: "app",
		size: 14,
		className: "shrink-0"
	});
	if (node.kind === "icon") return /* @__PURE__ */ jsx(CoverIconPreview, {
		src: getDiagramNodeIconSrc(node),
		colorMode: "app",
		size: 14,
		className: "shrink-0"
	});
	const KindIcon = NODE_KIND_ICONS[node.kind];
	return /* @__PURE__ */ jsx(KindIcon, {
		className: "size-3.5 shrink-0 text-muted-foreground",
		"aria-hidden": true
	});
}
function SortableLayerRow({ node, stackIndex, total, selected, onSelect, onRemove }) {
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
		id: node.id,
		animateLayoutChanges: () => false,
		transition: null
	});
	return /* @__PURE__ */ jsxs("div", {
		ref: setNodeRef,
		style: isDragging ? void 0 : {
			transform: sortableAxisTransform(transform, "vertical"),
			transition
		},
		className: cn("group flex items-center gap-0.5 rounded-lg border border-transparent px-0.5 py-0.5 transition-colors", selected && "border-[var(--brand-cta)]/25 bg-[var(--brand-cta)]/5", !selected && "hover:bg-accent/40", isDragging && "opacity-0"),
		children: [
			/* @__PURE__ */ jsx("button", {
				ref: setActivatorNodeRef,
				type: "button",
				className: "flex size-7 shrink-0 cursor-grab items-center justify-center rounded-md text-muted-foreground hover:bg-accent/60 hover:text-foreground active:cursor-grabbing",
				"aria-label": `Drag to reorder ${node.label}`,
				...attributes,
				...listeners,
				children: /* @__PURE__ */ jsx(GripVertical, { className: "size-3.5" })
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: (event) => onSelect(event),
				className: "flex min-w-0 flex-1 items-center gap-2 rounded-md px-1.5 py-1.5 text-start",
				children: [
					/* @__PURE__ */ jsx(LayerNodeIcon, { node }),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "truncate text-[12px] font-medium text-foreground",
							children: node.label
						}), /* @__PURE__ */ jsx("p", {
							className: "truncate text-[10px] text-muted-foreground",
							children: getDiagramNodeLayerSubtitle(node)
						})]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "shrink-0 text-[10px] tabular-nums text-muted-foreground",
						children: [
							stackIndex + 1,
							"/",
							total
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs(DropdownMenu, {
				modal: false,
				children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						className: "size-7 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 data-[state=open]:opacity-100",
						"aria-label": `Layer options for ${node.label}`,
						children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "size-3.5" })
					})
				}), /* @__PURE__ */ jsx(DropdownMenuContent, {
					align: "end",
					className: "w-36",
					children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
						onClick: onRemove,
						children: [/* @__PURE__ */ jsx(Trash2, { className: "me-2 size-3.5" }), "Delete"]
					})
				})]
			})
		]
	});
}
function LayerRowPreview({ node, stackIndex, total, selected }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-0.5 rounded-lg border border-border bg-background px-0.5 py-0.5 shadow-sm", selected && "border-[var(--brand-cta)]/25 bg-[var(--brand-cta)]/5"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-7 shrink-0 items-center justify-center text-muted-foreground",
			children: /* @__PURE__ */ jsx(GripVertical, { className: "size-3.5" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-1 items-center gap-2 px-1.5 py-1.5",
			children: [
				/* @__PURE__ */ jsx(LayerNodeIcon, { node }),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("p", {
						className: "truncate text-[12px] font-medium text-foreground",
						children: node.label
					}), /* @__PURE__ */ jsx("p", {
						className: "truncate text-[10px] text-muted-foreground",
						children: getDiagramNodeLayerSubtitle(node)
					})]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "shrink-0 text-[10px] tabular-nums text-muted-foreground",
					children: [
						stackIndex + 1,
						"/",
						total
					]
				})
			]
		})]
	});
}
function DiagramLayersPanel({ nodes, selection, onSelectNode, onReorderNodes, onRemoveNode }) {
	const layerItems = getDiagramLayerListItems(nodes);
	const selectedNodeIds = getSelectedNodeIds(selection);
	const [activeDragId, setActiveDragId] = useState(null);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
	const sortableIds = useMemo(() => layerItems.map(({ node }) => node.id), [layerItems]);
	const activeDragItem = activeDragId ? layerItems.find(({ node }) => node.id === activeDragId) : void 0;
	const handleDragStart = (event) => {
		setActiveDragId(String(event.active.id));
	};
	const handleDragEnd = (event) => {
		setActiveDragId(null);
		const { active, over } = event;
		if (!over || active.id === over.id) return;
		onReorderNodes(String(active.id), String(over.id));
	};
	const handleDragCancel = () => {
		setActiveDragId(null);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center justify-between gap-2 border-b border-border px-4 py-2.5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Layers"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[11px] text-muted-foreground",
					children: "Drag to reorder. Top layers draw above others."
				})]
			}), /* @__PURE__ */ jsx("span", {
				className: "rounded-md bg-muted px-2 py-0.5 text-[11px] tabular-nums text-muted-foreground",
				children: nodes.length
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-2 py-2",
			children: layerItems.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "px-2 py-6 text-center text-[12px] text-muted-foreground",
				children: "No elements yet. Add nodes from the left panel."
			}) : /* @__PURE__ */ jsxs(DndContext, {
				sensors,
				collisionDetection: closestCenter,
				modifiers: layerDragModifiers,
				onDragStart: handleDragStart,
				onDragEnd: handleDragEnd,
				onDragCancel: handleDragCancel,
				children: [/* @__PURE__ */ jsx(SortableContext, {
					items: sortableIds,
					strategy: verticalListSortingStrategy,
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: layerItems.map(({ node, index }) => /* @__PURE__ */ jsx(SortableLayerRow, {
							node,
							stackIndex: index,
							total: nodes.length,
							selected: selectedNodeIds.includes(node.id),
							onSelect: (event) => onSelectNode(node.id, {
								shiftKey: event.shiftKey,
								metaKey: event.metaKey,
								ctrlKey: event.ctrlKey
							}),
							onRemove: () => onRemoveNode(node.id)
						}, node.id))
					})
				}), /* @__PURE__ */ jsx(DragOverlay, {
					dropAnimation: null,
					children: activeDragItem ? /* @__PURE__ */ jsx(LayerRowPreview, {
						node: activeDragItem.node,
						stackIndex: activeDragItem.index,
						total: nodes.length,
						selected: selectedNodeIds.includes(activeDragItem.node.id)
					}) : null
				})]
			})
		})]
	});
}
var PROPERTIES_LAYERS_SPLIT_HANDLE_CLASS = cn("relative z-[45] h-[0.5px] w-full bg-border", "before:pointer-events-none before:absolute before:inset-x-0 before:top-1/2 before:h-2 before:w-full before:-translate-y-1/2 before:bg-border before:opacity-0 before:transition-opacity", "hover:before:opacity-100 data-[resize-handle-state=drag]:before:opacity-100", "after:h-2 after:top-1/2 after:w-full after:-translate-y-1/2");
function getNodeLabel(document, nodeId) {
	return document.nodes.find((node) => node.id === nodeId)?.label ?? "Unknown";
}
function DiagramPropertiesPanel({ document, selection, connectDraft, onDocumentChange, onNodeChange, onEdgeChange, onSelectEdge, onSelectNode, onReorderNodes, onRemoveNode, onRemoveNodes, onRemoveEdge, onReset }) {
	const { account } = useAuth();
	const { layout: propertiesSplitLayout, persistLayout: persistPropertiesSplitLayout } = useDiagramGeneratorPropertiesSplitLayout(account);
	const selectedNodeIds = getSelectedNodeIds(selection);
	const selectedNodeCount = selectedNodeIds.length;
	const selectedNode = selection.type === "node" ? document.nodes.find((node) => node.id === selection.id) : void 0;
	const selectedEdge = selection.type === "edge" ? document.edges.find((edge) => edge.id === selection.id) : void 0;
	const nodeConnections = selectedNode ? document.edges.filter((edge) => edge.fromNodeId === selectedNode.id || edge.toNodeId === selectedNode.id) : [];
	const propertiesContent = /* @__PURE__ */ jsxs("div", {
		className: "h-full overflow-y-auto px-4 py-4",
		children: [connectDraft ? /* @__PURE__ */ jsx("p", {
			className: "text-[12px] text-muted-foreground",
			children: "Click a dot on another node to finish the connection. Press Escape to cancel."
		}) : null, selectedNodeCount > 1 ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-muted/20 px-3 py-2.5",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[13px] font-medium text-foreground",
					children: [selectedNodeCount, " elements selected"]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: "Drag any selected element to move the group together. Hold Shift and drag on the canvas to box select."
				})]
			}), /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 text-[12px]",
				onClick: () => onRemoveNodes(selectedNodeIds),
				children: [
					/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 size-3.5" }),
					"Delete ",
					selectedNodeCount,
					" elements"
				]
			})]
		}) : selectedNode ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				shouldShowDiagramNodeLabelField(selectedNode) ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "diagram-node-label",
						className: "text-[12px]",
						children: getDiagramNodeLabelFieldLabel(selectedNode)
					}), /* @__PURE__ */ jsx(Input, {
						id: "diagram-node-label",
						value: selectedNode.label,
						maxLength: getDiagramNodeLabelMaxLength(selectedNode),
						className: "h-9 text-[13px]",
						onChange: (event) => onNodeChange(selectedNode.id, { label: event.target.value })
					})]
				}) : null,
				/* @__PURE__ */ jsx(DiagramNodeKindProperties, {
					node: selectedNode,
					themeId: document.theme,
					onNodeChange
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-medium text-foreground",
						children: "Connections"
					}), nodeConnections.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: "No connections yet. Click a dot on this node, then a dot on another node."
					}) : /* @__PURE__ */ jsx("div", {
						className: "space-y-1.5",
						children: nodeConnections.map((edge) => {
							const isOutgoing = edge.fromNodeId === selectedNode.id;
							const otherLabel = getNodeLabel(document, isOutgoing ? edge.toNodeId : edge.fromNodeId);
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onSelectEdge(edge.id),
								className: cn("flex w-full items-center gap-2 rounded-lg border border-border px-3 py-2 text-start text-[12px] transition-colors hover:bg-accent/40", selection.type === "edge" && selection.id === edge.id && "border-[var(--brand-cta)]/40 bg-[var(--brand-cta)]/5"),
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate text-foreground",
										children: isOutgoing ? selectedNode.label : otherLabel
									}),
									/* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5 shrink-0 text-muted-foreground" }),
									/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate text-foreground",
										children: isOutgoing ? otherLabel : selectedNode.label
									})
								]
							}, edge.id);
						})
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: "Drag the corner handle to resize. Use the side dots to connect nodes."
				}),
				/* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-8 text-[12px]",
					onClick: () => onRemoveNode(selectedNode.id),
					children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 size-3.5" }), "Delete node"]
				})
			]
		}) : selectedEdge ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-muted/20 px-3 py-2.5 text-[12px]",
					children: /* @__PURE__ */ jsxs("p", {
						className: "font-medium text-foreground",
						children: [
							getNodeLabel(document, selectedEdge.fromNodeId),
							/* @__PURE__ */ jsx(ArrowRight, { className: "mx-1.5 inline size-3.5 text-muted-foreground" }),
							getNodeLabel(document, selectedEdge.toNodeId)
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[12px]",
							children: "Presets"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-1.5",
							children: DIAGRAM_EDGE_PRESETS.map((preset) => {
								return /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: selectedEdge.lineStyle === preset.lineStyle && selectedEdge.arrow === preset.arrow && selectedEdge.strokeTone === preset.strokeTone ? "default" : "outline",
									size: "sm",
									className: "h-7 px-2.5 text-[11px]",
									title: preset.description,
									onClick: () => onEdgeChange(selectedEdge.id, {
										lineStyle: preset.lineStyle,
										arrow: preset.arrow,
										strokeTone: preset.strokeTone,
										...selectedEdge.label ? {} : preset.labelSuggestion ? { label: preset.labelSuggestion } : {}
									}),
									children: preset.label
								}, preset.id);
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[12px]",
									children: "Line"
								}), /* @__PURE__ */ jsxs(Select, {
									value: selectedEdge.lineStyle,
									onValueChange: (value) => onEdgeChange(selectedEdge.id, { lineStyle: value }),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(DIAGRAM_EDGE_LINE_STYLE_LABELS).map(([style, label]) => /* @__PURE__ */ jsx(SelectItem, {
										value: style,
										children: label
									}, style)) })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[12px]",
									children: "Arrow"
								}), /* @__PURE__ */ jsxs(Select, {
									value: selectedEdge.arrow,
									onValueChange: (value) => onEdgeChange(selectedEdge.id, { arrow: value }),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(DIAGRAM_EDGE_ARROW_LABELS).map(([arrow, label]) => /* @__PURE__ */ jsx(SelectItem, {
										value: arrow,
										children: label
									}, arrow)) })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[12px]",
									children: "Color"
								}), /* @__PURE__ */ jsxs(Select, {
									value: selectedEdge.strokeTone,
									onValueChange: (value) => onEdgeChange(selectedEdge.id, { strokeTone: value }),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(DIAGRAM_EDGE_STROKE_TONE_LABELS).map(([tone, label]) => /* @__PURE__ */ jsx(SelectItem, {
										value: tone,
										children: label
									}, tone)) })]
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "diagram-edge-label",
							className: "text-[12px]",
							children: "Label"
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "diagram-edge-label",
							value: selectedEdge.label ?? "",
							maxLength: 32,
							placeholder: "HTTPS, Webhook, SQL…",
							className: "h-9 text-[13px]",
							onChange: (event) => onEdgeChange(selectedEdge.id, { label: event.target.value || void 0 })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-1.5",
							children: DIAGRAM_EDGE_LABEL_SUGGESTIONS.map((suggestion) => /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-6 px-2 text-[10px]",
								onClick: () => onEdgeChange(selectedEdge.id, { label: suggestion }),
								children: suggestion
							}, suggestion))
						})
					]
				}),
				/* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-8 text-[12px]",
					onClick: () => onRemoveEdge(selectedEdge.id),
					children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 size-3.5" }), "Delete connection"]
				})
			]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "diagram-title",
					className: "text-[12px]",
					children: "Title"
				}), /* @__PURE__ */ jsx(Input, {
					id: "diagram-title",
					value: document.title,
					maxLength: 80,
					className: "h-9 text-[13px]",
					onChange: (event) => onDocumentChange({ title: event.target.value })
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: "Select a node to resize it or create connections using the dots on each side. Click a connection line to edit its style and label."
			})]
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Properties"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[12px] text-muted-foreground",
					children: connectDraft ? "Connecting…" : selectedNodeCount > 1 ? `${selectedNodeCount} elements` : selectedNode ? getDiagramNodePropertiesSubtitle(selectedNode) : selectedEdge ? "Connection" : "Diagram settings"
				})]
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 shrink-0 text-[12px]",
				onClick: onReset,
				children: "Reset"
			})]
		}), /* @__PURE__ */ jsx(DiagramPropertiesSplitResizableLayout, {
			layout: propertiesSplitLayout,
			persistLayout: persistPropertiesSplitLayout,
			handleClassName: PROPERTIES_LAYERS_SPLIT_HANDLE_CLASS,
			className: "min-h-0 flex-1",
			properties: propertiesContent,
			layers: /* @__PURE__ */ jsx("div", {
				className: "flex h-full min-h-0 flex-col bg-muted/10",
				children: /* @__PURE__ */ jsx(DiagramLayersPanel, {
					nodes: document.nodes,
					selection,
					onSelectNode,
					onReorderNodes,
					onRemoveNode
				})
			})
		})]
	});
}
function DiagramTemplatePreviewCard({ template, onSelect }) {
	const previewRef = useRef(null);
	const [displayWidth, setDisplayWidth] = useState(0);
	const document = useMemo(() => normalizeDiagramDocument(createDiagramFromTemplate(template.id)), [template.id]);
	const previewBackground = getCoverBrandThemeForSvgExport(document.theme).background;
	const scale = displayWidth > 0 ? displayWidth / document.width : 0;
	useLayoutEffect(() => {
		const element = previewRef.current;
		if (!element) return;
		const updateDisplayWidth = () => {
			const width = element.getBoundingClientRect().width;
			if (width > 0) setDisplayWidth(width);
		};
		updateDisplayWidth();
		const resizeObserver = new ResizeObserver(updateDisplayWidth);
		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: onSelect,
		className: cn("flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 text-start transition-colors hover:bg-accent/40"),
		children: [/* @__PURE__ */ jsx("div", {
			ref: previewRef,
			className: "relative aspect-[1200/630] w-full overflow-hidden border-b border-border",
			style: { backgroundColor: previewBackground },
			children: displayWidth > 0 ? /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute left-0 top-0 origin-top-left",
				style: {
					width: document.width,
					height: document.height,
					transform: `scale(${scale})`
				},
				children: /* @__PURE__ */ jsx(DiagramArtboard, {
					document,
					width: document.width,
					height: document.height,
					interactive: false
				})
			}) : null
		}), /* @__PURE__ */ jsx("div", {
			className: "px-3 py-2.5",
			children: /* @__PURE__ */ jsx("span", {
				className: "block text-[14px] font-medium text-foreground",
				children: template.label
			})
		})]
	});
}
const DIAGRAM_TEMPLATE_CATALOG = [
	{
		id: "blank",
		label: "Blank",
		description: "Start from an empty canvas"
	},
	{
		id: "appwrite-platform",
		label: "Appwrite platform",
		description: "Clients, API, and core project services"
	},
	{
		id: "appwrite-architecture",
		label: "Appwrite architecture",
		description: "Full platform stack from clients to workers"
	},
	{
		id: "appwrite-auth",
		label: "Appwrite auth",
		description: "Sign in, sessions, and users table"
	},
	{
		id: "appwrite-storage",
		label: "Appwrite storage",
		description: "Uploads, functions, and file metadata"
	},
	{
		id: "appwrite-messaging",
		label: "Appwrite messaging",
		description: "Function triggers to email and push"
	},
	{
		id: "three-tier",
		label: "Three-tier",
		description: "Client, API, and database"
	},
	{
		id: "serverless",
		label: "Serverless",
		description: "Functions with data and storage"
	},
	{
		id: "realtime-flow",
		label: "Realtime",
		description: "Subscribe and event flow"
	}
];
function getDiagramTemplateLabel(templateId) {
	return DIAGRAM_TEMPLATE_CATALOG.find((item) => item.id === templateId)?.label ?? "Diagram";
}
function DiagramStartView({ generations, isAuthenticated, isDeleting = false, isRenaming = false, maxNameLength, onSelectTemplate, onOpenGeneration, onRenameGeneration, onDeleteGeneration }) {
	return /* @__PURE__ */ jsx(GeneratorStartShell, {
		title: "Create a diagram",
		description: "Continue a saved diagram or start from a template. Your work is saved automatically while you edit.",
		savedTitle: "Saved diagrams",
		templatesTitle: "Choose template",
		saved: /* @__PURE__ */ jsx(GeneratorSavedGenerationsPanel, {
			generations: useMemo(() => generations.map((generation) => ({
				id: generation.id,
				name: generation.name,
				updatedAt: generation.updatedAt,
				subtitle: generation.templateId ? getDiagramTemplateLabel(generation.templateId) : void 0
			})), [generations]),
			isAuthenticated,
			isDeleting,
			isRenaming,
			maxNameLength,
			icon: Workflow,
			emptyTitle: "No saved diagrams yet",
			emptyDescription: "Pick a template to create your first diagram.",
			signInHint: "Sign in to sync diagrams across devices.",
			onOpenGeneration,
			onRenameGeneration,
			onDeleteGeneration
		}),
		templates: /* @__PURE__ */ jsx("div", {
			className: "grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
			children: DIAGRAM_TEMPLATE_CATALOG.map((template) => /* @__PURE__ */ jsx(DiagramTemplatePreviewCard, {
				template,
				onSelect: () => onSelectTemplate(template.id)
			}, template.id))
		})
	});
}
function buildDiagramApiUrl(origin = "") {
	const normalizedOrigin = origin.replace(/\/+$/, "");
	return normalizedOrigin ? `${normalizedOrigin}${GENERATOR_DIAGRAM_API_PATH}` : GENERATOR_DIAGRAM_API_PATH;
}
async function fetchDiagramImage(document, origin = typeof window !== "undefined" ? window.location.origin : "") {
	const endpoint = buildDiagramApiUrl(origin);
	const response = await fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(document)
	});
	if (!response.ok) throw new Error(`Failed to render diagram (${response.status})`);
	return response.blob();
}
function collectDiagramLucideIconNames(document) {
	const names = /* @__PURE__ */ new Set();
	for (const node of document.nodes) {
		if (!hasDiagramNodeIcon(node)) continue;
		const src = getDiagramNodeIconSrc(node);
		if (!isCoverLucideIconValue(src)) continue;
		const name = parseCoverLucideIconName(src);
		if (name) names.add(name);
	}
	return [...names];
}
function waitForPaint() {
	return new Promise((resolve) => {
		requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
	});
}
async function preloadImages(element) {
	const images = element.querySelectorAll("img");
	await Promise.all(Array.from(images).map((img) => new Promise((resolve) => {
		if (img.complete && img.naturalWidth > 0) {
			resolve();
			return;
		}
		const done = () => resolve();
		img.addEventListener("load", done, { once: true });
		img.addEventListener("error", done, { once: true });
	})));
}
function tryCanvasToBlob(canvas, mimeType, quality) {
	return new Promise((resolve) => {
		canvas.toBlob((blob) => resolve(blob), mimeType, quality);
	});
}
async function canvasToBlob(canvas, format) {
	const blob = await tryCanvasToBlob(canvas, getCoverImageMimeType(format), getCoverCanvasEncodeQuality(format));
	if (blob) return blob;
	if (format === "avif") {
		const pngBlob = await tryCanvasToBlob(canvas, "image/png");
		if (!pngBlob) throw new Error("Could not encode diagram image");
		return encodeCoverImageBlob(pngBlob, "avif");
	}
	throw new Error("Could not encode diagram image");
}
async function captureDiagramDomBlob(document, options = {}) {
	if (typeof window === "undefined") throw new Error("Diagram capture requires a browser environment");
	const format = options.format ?? document.format;
	const pixelRatio = options.pixelRatio ?? 1;
	await preloadCoverLucideIconNodes(collectDiagramLucideIconNames(document));
	const mount = window.document.createElement("div");
	mount.style.position = "fixed";
	mount.style.left = "-100000px";
	mount.style.top = "0";
	mount.style.width = `${document.width}px`;
	mount.style.height = `${document.height}px`;
	mount.style.pointerEvents = "none";
	mount.style.opacity = "1";
	window.document.body.appendChild(mount);
	const root = createRoot(mount);
	try {
		flushSync(() => {
			root.render(/* @__PURE__ */ jsx(DiagramArtboard, {
				document,
				width: document.width,
				height: document.height,
				interactive: false
			}));
		});
		const artboard = mount.firstElementChild;
		if (!artboard) throw new Error("Could not render diagram for export");
		await window.document.fonts.ready;
		await preloadImages(artboard);
		await waitForPaint();
		return canvasToBlob(await toCanvas(artboard, {
			width: document.width,
			height: document.height,
			pixelRatio,
			cacheBust: false,
			skipAutoScale: true
		}), format);
	} finally {
		root.unmount();
		mount.remove();
	}
}
function shouldCaptureDiagramDomClientSide() {
	return typeof window !== "undefined";
}
async function captureDiagramBlob(document, options = {}) {
	const payload = {
		...document,
		format: options.format ?? document.format
	};
	if (shouldCaptureDiagramDomClientSide()) try {
		return await captureDiagramDomBlob(payload, options);
	} catch {
		return fetchDiagramImage(payload);
	}
	return fetchDiagramImage(payload);
}
function downloadDiagramBlob(blob, document, scale = 1) {
	const scaleSuffix = scale === 1 ? "" : `-${scale}x`;
	const extension = document.format === "jpeg" ? "jpg" : document.format;
	const filename = `${document.title.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 48) || "diagram"}-${document.width}x${document.height}${scaleSuffix}.${extension}`;
	const url = URL.createObjectURL(blob);
	const anchor = window.document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.click();
	URL.revokeObjectURL(url);
}
async function openDiagramImage(document) {
	const blob = await captureDiagramBlob(document);
	const objectUrl = URL.createObjectURL(blob);
	window.open(objectUrl, "_blank", "noopener,noreferrer");
	window.setTimeout(() => URL.revokeObjectURL(objectUrl), 6e4);
}
const DIAGRAM_NODE_SIZE_LIMITS = {
	service: {
		minWidth: 160,
		minHeight: 56,
		maxWidth: 320,
		maxHeight: 120
	},
	title: {
		minWidth: 240,
		minHeight: 48,
		maxWidth: 960,
		maxHeight: 160
	},
	label: {
		minWidth: 80,
		minHeight: 28,
		maxWidth: 400,
		maxHeight: 64
	},
	group: {
		minWidth: 200,
		minHeight: 120,
		maxWidth: 960,
		maxHeight: 640
	},
	icon: {
		minWidth: 48,
		minHeight: 48,
		maxWidth: 160,
		maxHeight: 160
	},
	screenshot: {
		minWidth: 160,
		minHeight: 100,
		maxWidth: 720,
		maxHeight: 540
	},
	table: {
		minWidth: 176,
		minHeight: 96,
		maxWidth: 720,
		maxHeight: 420
	}
};
function clampDiagramNodeSize(kind, width, height) {
	const limits = DIAGRAM_NODE_SIZE_LIMITS[kind];
	return {
		width: snapDiagramValue(Math.min(limits.maxWidth, Math.max(limits.minWidth, width))),
		height: snapDiagramValue(Math.min(limits.maxHeight, Math.max(limits.minHeight, height)))
	};
}
const DIAGRAM_CLIPBOARD_PASTE_OFFSET = 16;
function cloneDiagramNode(node) {
	return {
		...node,
		tableHeaders: node.tableHeaders ? [...node.tableHeaders] : void 0,
		tableRows: node.tableRows ? node.tableRows.map((row) => [...row]) : void 0
	};
}
function cloneDiagramEdge(edge) {
	return { ...edge };
}
function getCopyableNodeIds(document, selection) {
	const selectedNodeIds = getSelectedNodeIds(selection);
	if (selectedNodeIds.length > 0) return selectedNodeIds;
	if (selection.type !== "edge") return [];
	const edge = document.edges.find((item) => item.id === selection.id);
	if (!edge) return [];
	return [edge.fromNodeId, edge.toNodeId];
}
function buildDiagramClipboardPayload(document, selection) {
	const nodeIds = getCopyableNodeIds(document, selection);
	if (nodeIds.length === 0) return null;
	const nodeIdSet = new Set(nodeIds);
	const nodes = document.nodes.filter((node) => nodeIdSet.has(node.id)).map(cloneDiagramNode);
	if (nodes.length === 0) return null;
	return {
		nodes,
		edges: document.edges.filter((edge) => nodeIdSet.has(edge.fromNodeId) && nodeIdSet.has(edge.toNodeId)).map(cloneDiagramEdge)
	};
}
function pasteDiagramClipboardPayload(payload, pasteGeneration) {
	const offset = DIAGRAM_CLIPBOARD_PASTE_OFFSET * Math.max(pasteGeneration, 1);
	const idMap = /* @__PURE__ */ new Map();
	const nodes = payload.nodes.map((node) => {
		const nextId = crypto.randomUUID();
		idMap.set(node.id, nextId);
		return normalizeDiagramNode({
			...node,
			id: nextId,
			x: snapDiagramValue(node.x + offset),
			y: snapDiagramValue(node.y + offset)
		});
	});
	return {
		nodes,
		edges: payload.edges.flatMap((edge) => {
			const fromNodeId = idMap.get(edge.fromNodeId);
			const toNodeId = idMap.get(edge.toNodeId);
			if (!fromNodeId || !toNodeId) return [];
			return [normalizeDiagramEdge({
				...edge,
				id: crypto.randomUUID(),
				fromNodeId,
				toNodeId
			})];
		}),
		selectedNodeIds: nodes.map((node) => node.id)
	};
}
function cloneDiagramDocument(document) {
	return structuredClone(document);
}
function diagramDocumentsEqual(left, right) {
	return JSON.stringify(left) === JSON.stringify(right);
}
function useDiagramDocumentHistory(document) {
	const documentRef = useRef(document);
	documentRef.current = document;
	const undoStackRef = useRef([]);
	const redoStackRef = useRef([]);
	const groupSnapshotRef = useRef(null);
	const isApplyingHistoryRef = useRef(false);
	const coalescedCommitTimerRef = useRef(null);
	const [historyTick, setHistoryTick] = useState(0);
	const bumpHistory = useCallback(() => {
		setHistoryTick((tick) => tick + 1);
	}, []);
	const pushUndo = useCallback((snapshot) => {
		undoStackRef.current = [...undoStackRef.current.slice(-49), cloneDiagramDocument(snapshot)];
		redoStackRef.current = [];
		bumpHistory();
	}, [bumpHistory]);
	const recordUndoPoint = useCallback(() => {
		if (isApplyingHistoryRef.current) return;
		pushUndo(documentRef.current);
	}, [pushUndo]);
	const beginHistoryGroup = useCallback(() => {
		if (groupSnapshotRef.current || isApplyingHistoryRef.current) return;
		groupSnapshotRef.current = cloneDiagramDocument(documentRef.current);
	}, []);
	const commitHistoryGroup = useCallback(() => {
		const snapshot = groupSnapshotRef.current;
		groupSnapshotRef.current = null;
		if (!snapshot || isApplyingHistoryRef.current) return;
		if (diagramDocumentsEqual(snapshot, documentRef.current)) return;
		pushUndo(snapshot);
	}, [pushUndo]);
	const cancelHistoryGroup = useCallback(() => {
		groupSnapshotRef.current = null;
	}, []);
	const scheduleCoalescedCommit = useCallback((delayMs = 500) => {
		if (coalescedCommitTimerRef.current) window.clearTimeout(coalescedCommitTimerRef.current);
		coalescedCommitTimerRef.current = window.setTimeout(() => {
			coalescedCommitTimerRef.current = null;
			commitHistoryGroup();
		}, delayMs);
	}, [commitHistoryGroup]);
	const cancelCoalescedCommit = useCallback(() => {
		if (coalescedCommitTimerRef.current) {
			window.clearTimeout(coalescedCommitTimerRef.current);
			coalescedCommitTimerRef.current = null;
		}
		cancelHistoryGroup();
	}, [cancelHistoryGroup]);
	const undo = useCallback(() => {
		const stack = undoStackRef.current;
		if (stack.length === 0) return null;
		const previous = cloneDiagramDocument(stack[stack.length - 1]);
		undoStackRef.current = stack.slice(0, -1);
		redoStackRef.current = [...redoStackRef.current, cloneDiagramDocument(documentRef.current)];
		isApplyingHistoryRef.current = true;
		bumpHistory();
		return previous;
	}, [bumpHistory]);
	const redo = useCallback(() => {
		const stack = redoStackRef.current;
		if (stack.length === 0) return null;
		const next = cloneDiagramDocument(stack[stack.length - 1]);
		redoStackRef.current = stack.slice(0, -1);
		undoStackRef.current = [...undoStackRef.current, cloneDiagramDocument(documentRef.current)];
		isApplyingHistoryRef.current = true;
		bumpHistory();
		return next;
	}, [bumpHistory]);
	const clearHistory = useCallback(() => {
		undoStackRef.current = [];
		redoStackRef.current = [];
		groupSnapshotRef.current = null;
		if (coalescedCommitTimerRef.current) {
			window.clearTimeout(coalescedCommitTimerRef.current);
			coalescedCommitTimerRef.current = null;
		}
		bumpHistory();
	}, [bumpHistory]);
	const finishApplyingHistory = useCallback(() => {
		isApplyingHistoryRef.current = false;
	}, []);
	return {
		canUndo: useMemo(() => undoStackRef.current.length > 0, [historyTick]),
		canRedo: useMemo(() => redoStackRef.current.length > 0, [historyTick]),
		recordUndoPoint,
		beginHistoryGroup,
		commitHistoryGroup,
		cancelHistoryGroup,
		scheduleCoalescedCommit,
		cancelCoalescedCommit,
		undo,
		redo,
		clearHistory,
		finishApplyingHistory
	};
}
var PERSIST_DEBOUNCE_MS = 400;
function useDiagramGeneratorState(options = {}) {
	const onDocumentPersistRef = useRef(options.onDocumentPersist);
	onDocumentPersistRef.current = options.onDocumentPersist;
	const [document, setDocumentState] = useState(() => createDefaultDiagramDocument());
	const [selection, setSelection] = useState({ type: "none" });
	const [connectDraft, setConnectDraft] = useState(null);
	const persistTimerRef = useRef(null);
	const suppressNextPersistRef = useRef(true);
	const hasUserEditsRef = useRef(false);
	const clipboardRef = useRef(null);
	const pasteGenerationRef = useRef(0);
	const { canUndo, canRedo, recordUndoPoint, beginHistoryGroup, commitHistoryGroup, scheduleCoalescedCommit, cancelCoalescedCommit, undo: undoDocument, redo: redoDocument, clearHistory, finishApplyingHistory } = useDiagramDocumentHistory(document);
	useEffect(() => {
		if (!onDocumentPersistRef.current) return;
		if (suppressNextPersistRef.current) {
			suppressNextPersistRef.current = false;
			return;
		}
		hasUserEditsRef.current = true;
		if (persistTimerRef.current) window.clearTimeout(persistTimerRef.current);
		persistTimerRef.current = window.setTimeout(() => {
			onDocumentPersistRef.current?.(document);
		}, PERSIST_DEBOUNCE_MS);
		return () => {
			if (persistTimerRef.current) window.clearTimeout(persistTimerRef.current);
		};
	}, [document]);
	const updateDocument = useCallback((patch) => {
		beginHistoryGroup();
		setDocumentState((current) => normalizeDiagramDocument({
			...current,
			...patch
		}));
		scheduleCoalescedCommit();
	}, [beginHistoryGroup, scheduleCoalescedCommit]);
	const applyDocument = useCallback((next) => {
		setDocumentState(normalizeDiagramDocument(next));
		finishApplyingHistory();
	}, [finishApplyingHistory]);
	const undo = useCallback(() => {
		cancelCoalescedCommit();
		const previous = undoDocument();
		if (!previous) return;
		applyDocument(previous);
		setSelection((current) => sanitizeDiagramSelection(current, previous));
		setConnectDraft(null);
	}, [
		applyDocument,
		cancelCoalescedCommit,
		undoDocument
	]);
	const redo = useCallback(() => {
		cancelCoalescedCommit();
		const next = redoDocument();
		if (!next) return;
		applyDocument(next);
		setSelection((current) => sanitizeDiagramSelection(current, next));
		setConnectDraft(null);
	}, [
		applyDocument,
		cancelCoalescedCommit,
		redoDocument
	]);
	const cancelConnectDraft = useCallback(() => {
		setConnectDraft(null);
	}, []);
	const applyTemplate = useCallback((templateId) => {
		recordUndoPoint();
		setDocumentState((current) => normalizeDiagramDocument({
			...createDiagramFromTemplate(templateId),
			theme: current.theme
		}));
		setSelection({ type: "none" });
		setConnectDraft(null);
		clipboardRef.current = null;
		pasteGenerationRef.current = 0;
		clearHistory();
	}, [clearHistory, recordUndoPoint]);
	const addNode = useCallback((kind, overrides) => {
		recordUndoPoint();
		setDocumentState((current) => {
			const defaults = DIAGRAM_NODE_DEFAULTS[kind];
			const node = createDiagramNode(kind, getDiagramNodeCenterPlacement(current, defaults, current.nodes.length), overrides);
			return {
				...current,
				nodes: [...current.nodes, node]
			};
		});
	}, [recordUndoPoint]);
	const updateNode = useCallback((nodeId, patch) => {
		beginHistoryGroup();
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.map((node) => {
				if (node.id !== nodeId) return node;
				const next = normalizeDiagramNode({
					...node,
					...patch,
					id: node.id,
					kind: node.kind
				});
				if (patch.width !== void 0 || patch.height !== void 0) {
					const size = clampDiagramNodeSize(next.kind, next.width, next.height);
					return {
						...next,
						...size
					};
				}
				return next;
			})
		}));
		scheduleCoalescedCommit();
	}, [beginHistoryGroup, scheduleCoalescedCommit]);
	const moveNode = useCallback((nodeId, x, y) => {
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.map((node) => node.id === nodeId ? {
				...node,
				x: snapDiagramValue(x),
				y: snapDiagramValue(y)
			} : node)
		}));
	}, []);
	const moveNodes = useCallback((updates) => {
		if (updates.length === 0) return;
		const updateMap = new Map(updates.map((update) => [update.id, update]));
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.map((node) => {
				const update = updateMap.get(node.id);
				if (!update) return node;
				return {
					...node,
					x: snapDiagramValue(update.x),
					y: snapDiagramValue(update.y)
				};
			})
		}));
	}, []);
	const resizeNode = useCallback((nodeId, width, height) => {
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.map((node) => {
				if (node.id !== nodeId) return node;
				const size = clampDiagramNodeSize(node.kind, width, height);
				return {
					...node,
					...size
				};
			})
		}));
	}, []);
	const removeNode = useCallback((nodeId) => {
		recordUndoPoint();
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.filter((node) => node.id !== nodeId),
			edges: current.edges.filter((edge) => edge.fromNodeId !== nodeId && edge.toNodeId !== nodeId)
		}));
		setSelection((current) => {
			if (current.type === "node" && current.id === nodeId) return { type: "none" };
			if (current.type === "nodes") {
				const ids = current.ids.filter((id) => id !== nodeId);
				if (ids.length === 0) return { type: "none" };
				if (ids.length === 1) return {
					type: "node",
					id: ids[0]
				};
				return {
					type: "nodes",
					ids
				};
			}
			return current;
		});
		setConnectDraft((current) => current?.nodeId === nodeId ? null : current);
	}, [recordUndoPoint]);
	const removeNodes = useCallback((nodeIds) => {
		if (nodeIds.length === 0) return;
		recordUndoPoint();
		const removeSet = new Set(nodeIds);
		setDocumentState((current) => ({
			...current,
			nodes: current.nodes.filter((node) => !removeSet.has(node.id)),
			edges: current.edges.filter((edge) => !removeSet.has(edge.fromNodeId) && !removeSet.has(edge.toNodeId))
		}));
		setSelection({ type: "none" });
		setConnectDraft((current) => current && removeSet.has(current.nodeId) ? null : current);
	}, [recordUndoPoint]);
	const addEdgeBetweenPorts = useCallback((fromNodeId, fromSide, toNodeId, toSide) => {
		if (fromNodeId === toNodeId) return null;
		recordUndoPoint();
		const createdEdgeRef = { current: null };
		setDocumentState((current) => {
			const fromNode = current.nodes.find((node) => node.id === fromNodeId);
			const toNode = current.nodes.find((node) => node.id === toNodeId);
			if (!fromNode || !toNode) return current;
			if (current.edges.some((edge$1) => edge$1.fromNodeId === fromNodeId && edge$1.toNodeId === toNodeId && edge$1.fromSide === fromSide && edge$1.toSide === toSide)) return current;
			const edge = createDiagramEdge(fromNode, toNode, {
				fromSide,
				toSide
			});
			createdEdgeRef.current = edge;
			return {
				...current,
				edges: [...current.edges, edge]
			};
		});
		return createdEdgeRef.current;
	}, [recordUndoPoint]);
	const updateEdge = useCallback((edgeId, patch) => {
		beginHistoryGroup();
		setDocumentState((current) => ({
			...current,
			edges: current.edges.map((edge) => edge.id === edgeId ? normalizeDiagramEdge({
				...edge,
				...patch,
				id: edge.id
			}) : edge)
		}));
		scheduleCoalescedCommit();
	}, [beginHistoryGroup, scheduleCoalescedCommit]);
	const removeEdge = useCallback((edgeId) => {
		recordUndoPoint();
		setDocumentState((current) => ({
			...current,
			edges: current.edges.filter((edge) => edge.id !== edgeId)
		}));
		setSelection((current) => current.type === "edge" && current.id === edgeId ? { type: "none" } : current);
	}, [recordUndoPoint]);
	const copySelection = useCallback(() => {
		const payload = buildDiagramClipboardPayload(document, selection);
		if (!payload) return false;
		clipboardRef.current = payload;
		pasteGenerationRef.current = 0;
		return true;
	}, [document, selection]);
	const pasteClipboard = useCallback(() => {
		const payload = clipboardRef.current;
		if (!payload || payload.nodes.length === 0) return false;
		pasteGenerationRef.current += 1;
		const pasted = pasteDiagramClipboardPayload(payload, pasteGenerationRef.current);
		recordUndoPoint();
		setDocumentState((current) => ({
			...current,
			nodes: [...current.nodes, ...pasted.nodes],
			edges: [...current.edges, ...pasted.edges]
		}));
		setSelection(selectDiagramNodes(pasted.selectedNodeIds));
		setConnectDraft(null);
		return true;
	}, [recordUndoPoint]);
	const cutSelection = useCallback(() => {
		const nodeIds = buildDiagramClipboardPayload(document, selection)?.nodes.map((node) => node.id);
		if (!nodeIds?.length) return false;
		if (!copySelection()) return false;
		removeNodes(nodeIds);
		return true;
	}, [
		copySelection,
		document,
		removeNodes,
		selection
	]);
	const handleNodeClick = useCallback((nodeId, modifiers) => {
		if (modifiers?.shiftKey || modifiers?.metaKey || modifiers?.ctrlKey) {
			setSelection((current) => selectDiagramNode(current, nodeId, {
				additive: modifiers.shiftKey,
				toggle: modifiers.metaKey || modifiers.ctrlKey
			}));
			return;
		}
		setSelection({
			type: "node",
			id: nodeId
		});
	}, []);
	const handlePortClick = useCallback((nodeId, side) => {
		if (!connectDraft) {
			setConnectDraft({
				nodeId,
				side
			});
			setSelection({
				type: "node",
				id: nodeId
			});
			return;
		}
		if (connectDraft.nodeId === nodeId && connectDraft.side === side) {
			setConnectDraft(null);
			return;
		}
		const edge = addEdgeBetweenPorts(connectDraft.nodeId, connectDraft.side, nodeId, side);
		setConnectDraft(null);
		if (edge) setSelection({
			type: "edge",
			id: edge.id
		});
		else setSelection({
			type: "node",
			id: nodeId
		});
	}, [addEdgeBetweenPorts, connectDraft]);
	const completePortConnect = useCallback((fromNodeId, fromSide, toNodeId, toSide) => {
		if (fromNodeId === toNodeId && fromSide === toSide) {
			setConnectDraft(null);
			return;
		}
		const edge = addEdgeBetweenPorts(fromNodeId, fromSide, toNodeId, toSide);
		setConnectDraft(null);
		if (edge) setSelection({
			type: "edge",
			id: edge.id
		});
		else setSelection({
			type: "node",
			id: toNodeId
		});
	}, [addEdgeBetweenPorts]);
	const reorderNodes = useCallback((activeId, overId) => {
		recordUndoPoint();
		setDocumentState((current) => ({
			...current,
			nodes: reorderDiagramNodesInDisplayOrder(current.nodes, activeId, overId)
		}));
	}, [recordUndoPoint]);
	return {
		document,
		selection,
		connectDraft,
		canUndo,
		canRedo,
		undo,
		redo,
		loadDocument: useCallback((next) => {
			cancelCoalescedCommit();
			if (persistTimerRef.current) {
				window.clearTimeout(persistTimerRef.current);
				persistTimerRef.current = null;
			}
			suppressNextPersistRef.current = true;
			hasUserEditsRef.current = false;
			setDocumentState(normalizeDiagramDocument(next));
			setSelection({ type: "none" });
			setConnectDraft(null);
			clipboardRef.current = null;
			pasteGenerationRef.current = 0;
			clearHistory();
			finishApplyingHistory();
		}, [
			cancelCoalescedCommit,
			clearHistory,
			finishApplyingHistory
		]),
		flushPersist: useCallback(() => {
			if (!hasUserEditsRef.current) {
				if (persistTimerRef.current) {
					window.clearTimeout(persistTimerRef.current);
					persistTimerRef.current = null;
				}
				return;
			}
			if (persistTimerRef.current) {
				window.clearTimeout(persistTimerRef.current);
				persistTimerRef.current = null;
			}
			onDocumentPersistRef.current?.(document);
		}, [document]),
		isDirty: useCallback(() => hasUserEditsRef.current, []),
		setDocument: updateDocument,
		setSelection,
		cancelConnectDraft,
		beginDocumentGesture: beginHistoryGroup,
		commitDocumentGesture: commitHistoryGroup,
		applyTemplate,
		addNode,
		updateNode,
		moveNode,
		moveNodes,
		resizeNode,
		removeNode,
		removeNodes,
		reorderNodes,
		updateEdge,
		removeEdge,
		copySelection,
		pasteClipboard,
		cutSelection,
		handleNodeClick,
		handlePortClick,
		completePortConnect,
		resetDocument: useCallback(() => {
			recordUndoPoint();
			setDocumentState(createDefaultDiagramDocument());
			setSelection({ type: "none" });
			setConnectDraft(null);
			clipboardRef.current = null;
			pasteGenerationRef.current = 0;
			clearHistory();
		}, [clearHistory, recordUndoPoint]),
		setTheme: useCallback((theme) => {
			updateDocument({ theme });
		}, [updateDocument]),
		setFormat: useCallback((format) => {
			setDocumentState((current) => ({
				...current,
				format
			}));
		}, []),
		setCanvasSize: useCallback((width, height) => {
			updateDocument({
				width,
				height
			});
		}, [updateDocument])
	};
}
function readLocalDiagramGenerations() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(DIAGRAM_GENERATIONS_LOCAL_STORAGE_KEY);
		if (!raw) return [];
		return parseSavedDiagramGenerations(raw);
	} catch {
		return [];
	}
}
function writeLocalDiagramGenerations(list) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(DIAGRAM_GENERATIONS_LOCAL_STORAGE_KEY, JSON.stringify(list));
	} catch {}
}
function readLegacySingleDiagramLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(DIAGRAM_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed?.version !== 1 || !parsed.document) return null;
		const document = normalizeDiagramDocument(parsed.document);
		if (document.nodes.length === 0 && document.edges.length === 0 && document.title === "Untitled diagram") return null;
		return {
			id: crypto.randomUUID(),
			name: document.title.trim() || "Imported diagram",
			updatedAt: Date.now(),
			document
		};
	} catch {
		return null;
	}
}
function clearLegacySingleDiagramLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.removeItem(DIAGRAM_STORAGE_KEY);
	} catch {}
}
function isPrefsCapacityError(error) {
	if (!(error instanceof AppwriteException)) return false;
	if (error.code !== 400 && error.code !== 413) return false;
	const message = error.message.toLowerCase();
	return message.includes("valid object") || message.includes("size") || message.includes("limit") || message.includes("too long") || message.includes("too large") || message.includes("storage") || message.includes("maximum");
}
function trimDiagramGenerationsToPrefsLimit(existingPrefs, list) {
	let candidate = list;
	while (candidate.length > 0) {
		if (isAccountPrefsPayloadWithinLimit(mergeDiagramGenerationsIntoPrefs(existingPrefs, candidate))) return candidate;
		candidate = candidate.slice(0, -1);
	}
	return candidate;
}
function useDiagramGenerations(account) {
	const queryClient = useQueryClient();
	const isAuthenticated = Boolean(account);
	const [localRevision, setLocalRevision] = useState(0);
	const resolveAccount = useCallback(() => {
		return getConsoleAccountFromCache(queryClient) ?? account;
	}, [account, queryClient]);
	const readGenerationsList = useCallback(() => {
		if (isAuthenticated) return parseSavedDiagramGenerations(resolveAccount()?.prefs?.[USER_PREFS_KEY_DIAGRAM_GENERATIONS]);
		return readLocalDiagramGenerations();
	}, [isAuthenticated, resolveAccount]);
	const generations = useMemo(() => {
		if (isAuthenticated) return parseSavedDiagramGenerations(resolveAccount()?.prefs?.[USER_PREFS_KEY_DIAGRAM_GENERATIONS]);
		return readLocalDiagramGenerations();
	}, [
		isAuthenticated,
		localRevision,
		resolveAccount
	]);
	const persistList = useCallback(async (next) => {
		if (isAuthenticated) {
			const currentAccount = resolveAccount();
			if (!currentAccount) throw new Error("Account not available");
			const existingPrefs = currentAccount.prefs ?? {};
			let candidate = trimDiagramGenerationsToPrefsLimit(existingPrefs, next);
			if (candidate.length === 0 && next.length > 0) throw new Error("Account preferences are full. Delete older diagrams or other saved prefs and try again.");
			let prefsBase = existingPrefs;
			let refreshedFromServer = false;
			for (;;) try {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: await updateAccountPrefs(mergeDiagramGenerationsIntoPrefs(prefsBase, candidate)) });
				return;
			} catch (error) {
				if (!isPrefsCapacityError(error)) throw error;
				if (!refreshedFromServer) {
					refreshedFromServer = true;
					const fresh = await fetchConsoleAccount({ force: true });
					syncConsoleAccountAfterMutation(queryClient, { apiResult: fresh });
					prefsBase = fresh.prefs ?? {};
					candidate = trimDiagramGenerationsToPrefsLimit(prefsBase, next);
					if (candidate.length === 0 && next.length > 0) throw new Error("Account preferences are full. Delete older diagrams or other saved prefs and try again.");
					continue;
				}
				if (candidate.length <= 1) throw error;
				candidate = candidate.slice(0, -1);
			}
		}
		writeLocalDiagramGenerations(next);
		setLocalRevision((value) => value + 1);
	}, [
		isAuthenticated,
		queryClient,
		resolveAccount
	]);
	const saveMutation = useMutation({ mutationFn: async (entry) => {
		const next = upsertSavedDiagramGeneration(readGenerationsList(), entry);
		await persistList(next);
		return next;
	} });
	const deleteMutation = useMutation({ mutationFn: async (id) => {
		const next = removeSavedDiagramGeneration(readGenerationsList(), id);
		await persistList(next);
		return next;
	} });
	const renameMutation = useMutation({ mutationFn: async ({ id, name }) => {
		const generation = readGenerationsList().find((item) => item.id === id);
		if (!generation) throw new Error("Diagram not found");
		const trimmed = name.trim().slice(0, 64);
		if (!trimmed) throw new Error("Name is required");
		const entry = {
			...generation,
			name: trimmed,
			updatedAt: Date.now(),
			document: {
				...generation.document,
				title: trimmed
			}
		};
		const next = upsertSavedDiagramGeneration(readGenerationsList(), entry);
		await persistList(next);
		return next;
	} });
	const migrateLegacyMutation = useMutation({ mutationFn: async () => {
		const current = readGenerationsList();
		if (current.length > 0) return current;
		const legacy = readLegacySingleDiagramLocalStorage();
		if (!legacy) return current;
		const next = upsertSavedDiagramGeneration(current, legacy);
		await persistList(next);
		clearLegacySingleDiagramLocalStorage();
		return next;
	} });
	const saveGeneration = useCallback((entry) => saveMutation.mutateAsync(entry), [saveMutation]);
	const deleteGeneration = useCallback((id) => deleteMutation.mutateAsync(id), [deleteMutation]);
	const renameGeneration = useCallback((id, name) => renameMutation.mutateAsync({
		id,
		name
	}), [renameMutation]);
	const migrateLegacyIfNeeded = useCallback(() => migrateLegacyMutation.mutateAsync(), [migrateLegacyMutation]);
	return {
		generations,
		isAuthenticated,
		isSaving: saveMutation.isPending,
		isDeleting: deleteMutation.isPending,
		isRenaming: renameMutation.isPending,
		saveGeneration,
		deleteGeneration,
		renameGeneration,
		maxNameLength: 64,
		migrateLegacyIfNeeded
	};
}
var RESIZE_HANDLE_CLASS = cn("relative z-[45] w-[0.5px] bg-border", "before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:w-2 before:-translate-x-1/2 before:bg-border before:opacity-0 before:transition-opacity", "hover:before:opacity-100 data-[resize-handle-state=drag]:before:opacity-100", "after:w-2 after:left-1/2 after:-translate-x-1/2");
function DiagramsView({ generationId: routeGenerationId } = {}) {
	const { setDiagramDocument, setDocumentChrome, setEditorTitle, leftPanelOpen, rightPanelOpen, setLeftPanelOpen, setRightPanelOpen } = useGeneratorLayout();
	const { account } = useAuth();
	const consoleAccount = account;
	const { layout, persistLayout } = useCoverGeneratorColumnsLayout(consoleAccount);
	const { generations, isAuthenticated, isDeleting, isRenaming, saveGeneration, deleteGeneration, renameGeneration, maxNameLength, migrateLegacyIfNeeded } = useDiagramGenerations(consoleAccount);
	const loadDocumentRef = useRef(() => {});
	const loadSavedDiagramGeneration = useCallback((generation) => {
		loadDocumentRef.current(generation.document);
	}, []);
	const leaveEditorRef = useRef(() => {});
	const getDiagramGenerationId = useCallback((generation) => generation.id, []);
	const resolveDraft = useCallback((id) => getDiagramGenerationDraft(id), []);
	const discardDraftIfUnsaved = useCallback((generationId) => {
		if (!generationId) return;
		deleteDiagramGenerationDraft(generationId);
	}, []);
	const { phase, activeGenerationId, activeGenerationIdRef, isRouteSyncing, openEditorRoute, backToStart } = useRouteGenerationEditor({
		routeGenerationId,
		startTo: "/generator/diagrams",
		editorTo: "/generator/diagrams/$generationId",
		generations,
		getGenerationId: getDiagramGenerationId,
		loadGeneration: loadSavedDiagramGeneration,
		resolveDraft,
		migrateLegacyIfNeeded,
		onEnterEditor: () => setLeftPanelOpen(false),
		onLeaveEditor: (generationId) => {
			leaveEditorRef.current();
			discardDraftIfUnsaved(generationId);
		},
		notFoundMessage: "Diagram not found"
	});
	const { document, selection, connectDraft, setDocument, setSelection, cancelConnectDraft, addNode, updateNode, moveNode, moveNodes, resizeNode, reorderNodes, removeNode, removeNodes, updateEdge, removeEdge, copySelection, pasteClipboard, cutSelection, handleNodeClick, handlePortClick, completePortConnect, canUndo, canRedo, undo, redo, beginDocumentGesture, commitDocumentGesture, resetDocument, setTheme, setFormat, setCanvasSize, loadDocument, flushPersist, isDirty } = useDiagramGeneratorState({ onDocumentPersist: useCallback((document$1) => {
		const generationId = activeGenerationIdRef.current;
		if (!generationId) return;
		const draft = getDiagramGenerationDraft(generationId);
		saveGeneration({
			id: generationId,
			name: document$1.title.trim() || draft?.name || "Untitled diagram",
			updatedAt: Date.now(),
			...draft?.templateId ? { templateId: draft.templateId } : {},
			document: normalizeDiagramDocument(document$1)
		}).then(() => {
			deleteDiagramGenerationDraft(generationId);
		}).catch((error) => {
			toast.error(getErrorMessage(error, "Could not save diagram"));
		});
	}, [saveGeneration]) });
	loadDocumentRef.current = loadDocument;
	leaveEditorRef.current = () => {
		setSelection({ type: "none" });
		cancelConnectDraft();
	};
	const isXlUp = useIsXlUp();
	const migratedLegacyRef = useRef(false);
	useEffect(() => {
		if (migratedLegacyRef.current) return;
		migratedLegacyRef.current = true;
		migrateLegacyIfNeeded().catch(() => {});
	}, [migrateLegacyIfNeeded]);
	useEffect(() => {
		if (phase === "editor") {
			setDiagramDocument(document);
			return () => setDiagramDocument(null);
		}
		setDiagramDocument(null);
	}, [
		document,
		phase,
		setDiagramDocument
	]);
	const openEditor = useCallback((generationId, nextDocument, templateId) => {
		setDiagramGenerationDraft({
			id: generationId,
			name: nextDocument.title.trim() || "Untitled diagram",
			updatedAt: Date.now(),
			...templateId ? { templateId } : {},
			document: normalizeDiagramDocument(nextDocument)
		});
		openEditorRoute(generationId);
	}, [openEditorRoute]);
	const handleSelectTemplate = useCallback((templateId) => {
		const nextDocument = normalizeDiagramDocument(createDiagramFromTemplate(templateId));
		openEditor(crypto.randomUUID(), nextDocument, templateId);
	}, [openEditor]);
	const handleOpenGeneration = useCallback((generationId) => {
		if (!generations.some((item) => item.id === generationId)) {
			toast.error("Diagram not found");
			return;
		}
		openEditorRoute(generationId);
	}, [generations, openEditorRoute]);
	const handleBackToStart = useCallback(() => {
		const generationId = activeGenerationIdRef.current;
		backToStart(() => {
			flushPersist();
			leaveEditorRef.current();
			if (!isDirty()) discardDraftIfUnsaved(generationId);
		});
		setLeftPanelOpen(false);
	}, [
		activeGenerationIdRef,
		backToStart,
		discardDraftIfUnsaved,
		flushPersist,
		isDirty,
		setLeftPanelOpen
	]);
	const handleBackToStartRef = useRef(handleBackToStart);
	handleBackToStartRef.current = handleBackToStart;
	useEffect(() => {
		setDocumentChrome({
			phase: phase === "editor" ? "editor" : "start",
			resource: "diagrams",
			showLeftPanelToggle: phase === "editor",
			leftPanelLabel: "Toggle elements panel",
			onNewDocument: () => handleBackToStartRef.current(),
			onBrowseDocuments: () => handleBackToStartRef.current(),
			newDocumentLabel: "New diagram",
			browseDocumentsLabel: "All diagrams"
		});
		return () => setDocumentChrome(null);
	}, [phase, setDocumentChrome]);
	const handleDeleteGeneration = useCallback(async (generationId) => {
		try {
			await deleteGeneration(generationId);
			deleteDiagramGenerationDraft(generationId);
			if (activeGenerationId === generationId) handleBackToStart();
			toast.success("Diagram deleted");
		} catch {
			toast.error("Could not delete diagram");
		}
	}, [
		activeGenerationId,
		deleteGeneration,
		handleBackToStart
	]);
	const handleRenameGeneration = useCallback(async (generationId, name) => {
		try {
			await renameGeneration(generationId, name);
			toast.success("Name updated");
		} catch {
			toast.error("Could not update name");
			throw new Error("Could not update name");
		}
	}, [renameGeneration]);
	const handleEditorTitleChange = useCallback(async (name) => {
		if (!activeGenerationId) return;
		const trimmed = name.trim().slice(0, maxNameLength);
		if (!trimmed) return;
		setDocument({ title: trimmed });
		const draft = getDiagramGenerationDraft(activeGenerationId);
		if (draft) setDiagramGenerationDraft({
			...draft,
			name: trimmed,
			updatedAt: Date.now(),
			document: {
				...draft.document,
				title: trimmed
			}
		});
		if (generations.some((item) => item.id === activeGenerationId)) await handleRenameGeneration(activeGenerationId, trimmed);
	}, [
		activeGenerationId,
		generations,
		handleRenameGeneration,
		maxNameLength,
		setDocument
	]);
	const handleEditorTitleChangeRef = useRef(handleEditorTitleChange);
	handleEditorTitleChangeRef.current = handleEditorTitleChange;
	useEffect(() => {
		if (phase !== "editor" || !activeGenerationId) {
			setEditorTitle(null);
			return;
		}
		setEditorTitle({
			name: document.title.trim() || "Untitled diagram",
			maxLength: maxNameLength,
			isSaving: isRenaming,
			onChange: (name) => handleEditorTitleChangeRef.current(name)
		});
		return () => setEditorTitle(null);
	}, [
		activeGenerationId,
		document.title,
		isRenaming,
		maxNameLength,
		phase,
		setEditorTitle
	]);
	useEffect(() => {
		const isEditableTarget = (target) => Boolean(target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable));
		const handleKeyDown = (event) => {
			if (phase !== "editor") return;
			const target = event.target;
			const isMeta = event.metaKey || event.ctrlKey;
			if (isMeta && (event.key === "z" || event.key === "Z")) {
				if (isEditableTarget(target)) return;
				event.preventDefault();
				if (event.shiftKey) {
					if (canRedo) redo();
				} else if (canUndo) undo();
				return;
			}
			if (event.ctrlKey && event.key === "y") {
				if (isEditableTarget(target)) return;
				event.preventDefault();
				if (canRedo) redo();
				return;
			}
			if (isMeta && !event.shiftKey) {
				if (isEditableTarget(target)) return;
				const key = event.key.toLowerCase();
				if (key === "c") {
					if (copySelection()) event.preventDefault();
					return;
				}
				if (key === "v") {
					if (pasteClipboard()) event.preventDefault();
					return;
				}
				if (key === "x") {
					if (cutSelection()) event.preventDefault();
					return;
				}
			}
			if (event.key !== "Delete" && event.key !== "Backspace") return;
			if (isEditableTarget(target)) return;
			if (selection.type === "node") {
				event.preventDefault();
				removeNode(selection.id);
			} else if (selection.type === "nodes") {
				event.preventDefault();
				removeNodes(selection.ids);
			} else if (selection.type === "edge") {
				event.preventDefault();
				removeEdge(selection.id);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		canRedo,
		canUndo,
		copySelection,
		cutSelection,
		pasteClipboard,
		phase,
		redo,
		removeEdge,
		removeNode,
		removeNodes,
		selection,
		undo
	]);
	const handleDownload = useCallback(async (format, scale) => {
		setFormat(format);
		try {
			downloadDiagramBlob(await captureDiagramBlob({
				...document,
				format
			}, {
				format,
				pixelRatio: scale
			}), {
				...document,
				format
			}, scale);
		} catch {
			toast.error("Could not download diagram");
		}
	}, [document, setFormat]);
	const handleOpenImage = useCallback(async () => {
		try {
			await openDiagramImage(document);
		} catch {
			toast.error("Could not open diagram image");
		}
	}, [document]);
	if (phase === "editor" && (isRouteSyncing || activeGenerationId !== routeGenerationId)) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center text-[13px] text-muted-foreground",
		children: "Loading diagram…"
	});
	if (phase === "start") return /* @__PURE__ */ jsx(DiagramStartView, {
		generations,
		isAuthenticated,
		isDeleting,
		isRenaming,
		maxNameLength,
		onSelectTemplate: handleSelectTemplate,
		onOpenGeneration: handleOpenGeneration,
		onRenameGeneration: handleRenameGeneration,
		onDeleteGeneration: (generationId) => {
			handleDeleteGeneration(generationId);
		}
	});
	const propertiesPanel = /* @__PURE__ */ jsx(DiagramPropertiesPanel, {
		document,
		selection,
		connectDraft,
		onDocumentChange: setDocument,
		onNodeChange: updateNode,
		onEdgeChange: updateEdge,
		onSelectEdge: (edgeId) => setSelection({
			type: "edge",
			id: edgeId
		}),
		onSelectNode: handleNodeClick,
		onReorderNodes: reorderNodes,
		onRemoveNode: removeNode,
		onRemoveNodes: removeNodes,
		onRemoveEdge: removeEdge,
		onReset: resetDocument
	});
	const canvas = /* @__PURE__ */ jsx(DiagramCanvas, {
		document,
		selection,
		connectDraft,
		onSelectionChange: setSelection,
		onCancelConnectDraft: cancelConnectDraft,
		onMoveNode: moveNode,
		onMoveNodes: moveNodes,
		onResizeNode: resizeNode,
		onBeginDocumentGesture: beginDocumentGesture,
		onCommitDocumentGesture: commitDocumentGesture,
		canUndo,
		canRedo,
		onUndo: undo,
		onRedo: redo,
		onPortClick: handlePortClick,
		onPortConnectComplete: completePortConnect,
		onCanvasSizeChange: setCanvasSize,
		onDownload: handleDownload,
		onOpenImage: handleOpenImage
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-hidden",
			children: !isXlUp ? /* @__PURE__ */ jsxs("div", {
				className: "flex h-full min-h-0 flex-col overflow-hidden",
				children: [
					leftPanelOpen ? /* @__PURE__ */ jsx("div", {
						className: "shrink-0 border-b border-border px-4 py-3",
						children: /* @__PURE__ */ jsx(DiagramElementsPanel, {
							theme: document.theme,
							onThemeChange: setTheme,
							onAddNode: addNode,
							variant: "compact"
						})
					}) : null,
					canvas,
					rightPanelOpen ? /* @__PURE__ */ jsx("div", {
						className: "max-h-[42dvh] min-h-0 shrink-0 overflow-hidden border-t border-border",
						children: propertiesPanel
					}) : null
				]
			}) : /* @__PURE__ */ jsx(GeneratorColumnsResizableLayout, {
				layout,
				persistLayout,
				leftOpen: leftPanelOpen,
				rightOpen: rightPanelOpen,
				onLeftOpenChange: setLeftPanelOpen,
				onRightOpenChange: setRightPanelOpen,
				handleClassName: RESIZE_HANDLE_CLASS,
				className: "h-full min-h-0",
				templates: /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 flex-col overflow-hidden border-r border-border bg-background",
					children: /* @__PURE__ */ jsx(DiagramElementsPanel, {
						theme: document.theme,
						onThemeChange: setTheme,
						onAddNode: addNode
					})
				}),
				canvas: /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
					children: canvas
				}),
				properties: /* @__PURE__ */ jsx("div", {
					className: "flex h-full min-h-0 flex-col overflow-hidden border-l border-border bg-background",
					children: propertiesPanel
				})
			})
		})
	});
}
export { DiagramsView as t };
