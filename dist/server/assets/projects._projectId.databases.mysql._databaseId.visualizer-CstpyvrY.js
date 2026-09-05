import { r as isHtmlDarkChrome } from "./html-theme-zz5wyKPq.js";
import { t as cn } from "./utils-DoqqkI3X.js";
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
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Hp as useMysqlSchemaVisualizer } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
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
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { c as ContextMenuTrigger, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./mysql-tab-route-loader-D18CXQ4h.js";
import { t as Route$1 } from "./projects._projectId.databases.mysql._databaseId.visualizer-KBINgJLe.js";
import { t as getColumnIcon } from "./column-icons-CL3QmOrR.js";
import { n as useViewportPanZoom, r as SchemaBlueprintMat } from "./useViewportPanZoom-COUwlx3T.js";
import { n as SchemaVisualizerRelationshipEdgesMinimap, t as SchemaVisualizerRelationshipEdges } from "./SchemaVisualizerRelationshipEdges-DLVYWLVz.js";
import { i as useMysqlSidebar } from "./MysqlSidebarContext-hP58OOok.js";
import { b as formatMysqlColumnType } from "./mysql-table-ddl-DacHo4_T.js";
import { n as DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT, r as buildSchemaVisualizerRelationshipPaths, t as layoutSchemaVisualizerNodesWithMetadata } from "./schema-visualizer-graph-layout-CCNNxnof.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, ChevronUp, Eye, Key, Link2, Loader2, Map as Map$1, Maximize2, Table2, ZoomIn, ZoomOut } from "lucide-react";
var NODE_WIDTH = 300;
var NODE_HEADER_HEIGHT = DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.nodeHeaderHeight;
var COLUMN_HEIGHT = DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.columnHeight;
var NODE_PADDING = 12;
var MAX_VISIBLE_COLUMNS = DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT.maxVisibleColumns;
var MIN_NODE_GAP = 120;
function isViewRelation(relation) {
	return relation.tableType.toUpperCase() === "VIEW";
}
function formatRelationLabel(relation) {
	if (relation.isExternal && relation.schema) return `${relation.schema}.${relation.name}`;
	return relation.name;
}
function MysqlSchemaVisualizer({ databaseId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { selectedSchema } = useMysqlSidebar();
	const { relations, relationships, totalRelations, loadedRelations, isLoading, isLoadingColumns, isComplete, error } = useMysqlSchemaVisualizer(projectId, databaseId, selectedSchema);
	const minimapRef = useRef(null);
	const { canvasRef, zoom, pan, setZoom, setPan, isDragging, zoomInDisabled, zoomOutDisabled, bindCanvas, zoomIn, zoomOut, resetView, zoomPercentage } = useViewportPanZoom();
	const [selectedRelation, setSelectedRelation] = useState(null);
	const [expandedColumns, setExpandedColumns] = useState(/* @__PURE__ */ new Set());
	const [hasAutoFocused, setHasAutoFocused] = useState(false);
	const [showMinimap, setShowMinimap] = useState(true);
	const [copiedLink, setCopiedLink] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window === "undefined") return false;
		return isHtmlDarkChrome() || window.matchMedia("(prefers-color-scheme: dark)").matches;
	});
	useEffect(() => {
		const checkDarkMode = () => {
			setIsDarkMode(isHtmlDarkChrome() || window.matchMedia("(prefers-color-scheme: dark)").matches);
		};
		checkDarkMode();
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", checkDarkMode);
		return () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", checkDarkMode);
		};
	}, []);
	useEffect(() => {
		setHasAutoFocused(false);
		setSelectedRelation(null);
		setExpandedColumns(/* @__PURE__ */ new Set());
	}, [selectedSchema, databaseId]);
	const nodeDimensions = useMemo(() => relations.map((relation) => {
		const columnCount = relation.columns.length;
		const maxContentHeight = NODE_HEADER_HEIGHT + columnCount * COLUMN_HEIGHT + (columnCount > MAX_VISIBLE_COLUMNS ? COLUMN_HEIGHT : 0) + NODE_PADDING * 2 + 16;
		const currentContentHeight = NODE_HEADER_HEIGHT + (expandedColumns.has(relation.id) ? columnCount : Math.min(columnCount, MAX_VISIBLE_COLUMNS)) * COLUMN_HEIGHT + (columnCount > MAX_VISIBLE_COLUMNS && !expandedColumns.has(relation.id) ? COLUMN_HEIGHT : 0) + NODE_PADDING * 2 + 16;
		return {
			width: NODE_WIDTH,
			layoutHeight: Math.max(maxContentHeight, 100),
			renderHeight: Math.max(currentContentHeight, 100)
		};
	}), [relations, expandedColumns]);
	const layoutResult = useMemo(() => {
		if (relations.length === 0) return {
			positions: /* @__PURE__ */ new Map(),
			layers: /* @__PURE__ */ new Map(),
			metrics: {
				startX: 100,
				startY: 100,
				columnGap: MIN_NODE_GAP,
				rowGap: 48,
				nodeWidth: NODE_WIDTH,
				columnStride: NODE_WIDTH + MIN_NODE_GAP,
				corridorXByBoundary: /* @__PURE__ */ new Map(),
				layerStartX: /* @__PURE__ */ new Map()
			}
		};
		return layoutSchemaVisualizerNodesWithMetadata(relations.map((relation, index) => ({
			id: relation.id,
			width: nodeDimensions[index].width,
			height: nodeDimensions[index].layoutHeight,
			label: formatRelationLabel(relation)
		})), relationships.map((relationship) => ({
			from: relationship.from,
			to: relationship.to
		})), {
			startX: 100,
			startY: 100,
			columnGap: MIN_NODE_GAP,
			rowGap: 56,
			innerGap: 32,
			maxNodesPerRow: 2,
			componentGap: MIN_NODE_GAP * 2
		});
	}, [
		relations,
		relationships,
		nodeDimensions
	]);
	const nodes = useMemo(() => {
		if (relations.length === 0) return [];
		return relations.map((relation, index) => {
			const { width, layoutHeight, renderHeight } = nodeDimensions[index];
			const position = layoutResult.positions.get(relation.id) ?? {
				x: 100,
				y: 100
			};
			return {
				id: relation.id,
				schema: relation.schema,
				name: relation.name,
				tableType: relation.tableType,
				isExternal: relation.isExternal,
				x: position.x,
				y: position.y,
				width,
				height: renderHeight,
				layoutHeight,
				columns: relation.columns
			};
		});
	}, [
		relations,
		nodeDimensions,
		layoutResult.positions
	]);
	const visibleRelationships = useMemo(() => {
		const nodeIds = new Set(nodes.map((node) => node.id));
		return relationships.filter((relationship) => nodeIds.has(relationship.from) && nodeIds.has(relationship.to));
	}, [nodes, relationships]);
	const relationshipPaths = useMemo(() => buildSchemaVisualizerRelationshipPaths(nodes.map((node) => ({
		id: node.id,
		x: node.x,
		y: node.y,
		width: node.width,
		height: Math.max(node.height, node.layoutHeight),
		columns: node.columns
	})), visibleRelationships, expandedColumns, DEFAULT_SCHEMA_VISUALIZER_EDGE_LAYOUT, layoutResult.metrics, layoutResult.layers), [
		nodes,
		visibleRelationships,
		expandedColumns,
		layoutResult.metrics,
		layoutResult.layers
	]);
	const edgeCanvasExtent = useMemo(() => {
		const padding = 120;
		if (nodes.length === 0) return {
			width: 1,
			height: 1
		};
		const maxX = Math.max(...nodes.map((node) => node.x + node.width)) + padding;
		const maxY = Math.max(...nodes.map((node) => node.y + node.height)) + padding;
		return {
			width: Math.max(maxX, 1),
			height: Math.max(maxY, 1)
		};
	}, [nodes]);
	useEffect(() => {
		if (nodes.length === 0 || hasAutoFocused || isLoading) return;
		const bounds = nodes.reduce((acc, node) => ({
			minX: Math.min(acc.minX, node.x),
			minY: Math.min(acc.minY, node.y),
			maxX: Math.max(acc.maxX, node.x + node.width),
			maxY: Math.max(acc.maxY, node.y + node.height)
		}), {
			minX: Infinity,
			minY: Infinity,
			maxX: -Infinity,
			maxY: -Infinity
		});
		if (bounds.minX === Infinity || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const canvasWidth = canvas.clientWidth;
		const canvasHeight = canvas.clientHeight;
		const contentWidth = bounds.maxX - bounds.minX;
		const contentHeight = bounds.maxY - bounds.minY;
		const padding = 100;
		const fitZoom = Math.min(canvasWidth / (contentWidth + padding * 2), canvasHeight / (contentHeight + padding * 2), 1);
		const centerX = (bounds.minX + bounds.maxX) / 2;
		const centerY = (bounds.minY + bounds.maxY) / 2;
		setZoom(fitZoom);
		setPan({
			x: canvasWidth / 2 - centerX * fitZoom,
			y: canvasHeight / 2 - centerY * fitZoom
		});
		setHasAutoFocused(true);
	}, [
		nodes,
		isLoading,
		hasAutoFocused,
		canvasRef,
		setPan,
		setZoom
	]);
	const toggleColumns = (relationId) => {
		setExpandedColumns((previous) => {
			const next = new Set(previous);
			if (next.has(relationId)) next.delete(relationId);
			else next.add(relationId);
			return next;
		});
	};
	const handleCopyShareLink = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopiedLink(true);
			window.setTimeout(() => setCopiedLink(false), 2e3);
		} catch {}
	};
	const handleNavigateToRows = (relationId) => {
		navigate(mysqlNav({
			projectId,
			databaseId
		}).table({ tableId: relationId }).rows());
	};
	const handleNavigateToColumns = (relationId) => {
		navigate(mysqlNav({
			projectId,
			databaseId
		}).table({ tableId: relationId }).columns());
	};
	const loadingLabel = useMemo(() => {
		if (!selectedSchema) return t("Select a schema to visualize");
		if (totalRelations > 0) return `${t("Loading schema")} (${loadedRelations}/${totalRelations})`;
		return t("Loading schema...");
	}, [
		loadedRelations,
		selectedSchema,
		totalRelations,
		t
	]);
	const minimapBounds = useMemo(() => {
		if (nodes.length === 0) return null;
		const bounds = nodes.reduce((acc, node) => ({
			minX: Math.min(acc.minX, node.x),
			minY: Math.min(acc.minY, node.y),
			maxX: Math.max(acc.maxX, node.x + node.width),
			maxY: Math.max(acc.maxY, node.y + node.height)
		}), {
			minX: Infinity,
			minY: Infinity,
			maxX: -Infinity,
			maxY: -Infinity
		});
		if (bounds.minX === Infinity) return null;
		const padding = 100;
		return {
			minX: bounds.minX - padding,
			minY: bounds.minY - padding,
			maxX: bounds.maxX + padding,
			maxY: bounds.maxY + padding,
			width: bounds.maxX - bounds.minX + padding * 2,
			height: bounds.maxY - bounds.minY + padding * 2
		};
	}, [nodes]);
	const viewportRect = useMemo(() => {
		if (!canvasRef.current || !minimapBounds) return null;
		const canvas = canvasRef.current;
		const canvasWidth = canvas.clientWidth;
		const canvasHeight = canvas.clientHeight;
		const viewportLeft = -pan.x / zoom;
		const viewportTop = -pan.y / zoom;
		const viewportRight = viewportLeft + canvasWidth / zoom;
		const viewportBottom = viewportTop + canvasHeight / zoom;
		return {
			left: viewportLeft,
			top: viewportTop,
			width: viewportRight - viewportLeft,
			height: viewportBottom - viewportTop
		};
	}, [
		pan,
		zoom,
		minimapBounds,
		canvasRef
	]);
	const handleMinimapClick = (nodeId) => {
		const node = nodes.find((item) => item.id === nodeId);
		if (!node || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const centerX = node.x + node.width / 2;
		const centerY = node.y + node.height / 2;
		setPan({
			x: canvas.clientWidth / 2 - centerX * zoom,
			y: canvas.clientHeight / 2 - centerY * zoom
		});
		setSelectedRelation(nodeId);
	};
	const toolbar = /* @__PURE__ */ jsx(VisualizerToolbar, {
		copiedLink,
		onCopyLink: handleCopyShareLink,
		zoomPercentage,
		zoomIn,
		zoomOut,
		resetView,
		zoomInDisabled,
		zoomOutDisabled,
		loadingLabel,
		showProgress: Boolean(selectedSchema && (!isComplete || isLoadingColumns))
	});
	if (!selectedSchema) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [toolbar, /* @__PURE__ */ jsx("div", {
			className: "flex flex-1 items-center justify-center px-6 text-center text-[13px] text-muted-foreground",
			children: t("Select a schema in the sidebar to explore tables, views, and relationships.")
		})]
	});
	if (error && nodes.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [toolbar, /* @__PURE__ */ jsx("div", {
			className: "flex flex-1 items-center justify-center px-6 text-center text-[13px] text-destructive",
			children: error.message || t("Failed to load schema visualizer")
		})]
	});
	if (isLoading && nodes.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [toolbar, /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col items-center justify-center gap-3 text-[13px] text-muted-foreground",
			children: [/* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: loadingLabel })]
		})]
	});
	if (nodes.length === 0 && isComplete) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [toolbar, /* @__PURE__ */ jsx(EmptySchemaState, { schema: selectedSchema })]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex h-full min-h-0 flex-col overflow-hidden",
		children: [toolbar, /* @__PURE__ */ jsxs("div", {
			className: "relative min-h-0 flex-1 overflow-hidden",
			style: { backgroundColor: "hsl(var(--muted) / 0.3)" },
			children: [
				/* @__PURE__ */ jsx("div", {
					ref: canvasRef,
					className: cn("h-full w-full cursor-grab overflow-hidden select-none", isDragging && "cursor-grabbing"),
					...bindCanvas,
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative h-full w-full",
						style: {
							transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
							transformOrigin: "0 0"
						},
						children: [
							/* @__PURE__ */ jsx(SchemaBlueprintMat, {}),
							/* @__PURE__ */ jsx(SchemaVisualizerRelationshipEdges, {
								paths: relationshipPaths,
								extent: edgeCanvasExtent
							}),
							/* @__PURE__ */ jsx("div", {
								className: "relative z-20",
								children: nodes.map((node) => /* @__PURE__ */ jsx(RelationNodeCard, {
									node,
									selected: selectedRelation === node.id,
									expanded: expandedColumns.has(node.id),
									onSelect: () => setSelectedRelation(node.id === selectedRelation ? null : node.id),
									onToggleColumns: () => toggleColumns(node.id),
									onNavigateRows: () => handleNavigateToRows(node.id),
									onNavigateColumns: () => handleNavigateToColumns(node.id)
								}, node.id))
							})
						]
					})
				}),
				showMinimap && nodes.length > 0 && minimapBounds ? /* @__PURE__ */ jsx(Minimap, {
					minimapRef,
					nodes,
					relationshipPaths,
					selectedRelation,
					minimapBounds,
					viewportRect,
					isDarkMode,
					onMinimapClick: handleMinimapClick,
					onClose: () => setShowMinimap(false)
				}) : null,
				!showMinimap && nodes.length > 0 ? /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "absolute bottom-4 end-4 z-10 h-8 w-8 p-0 bg-card/95 backdrop-blur-sm",
					onClick: () => setShowMinimap(true),
					children: /* @__PURE__ */ jsx(Map$1, { className: "h-4 w-4" })
				}) : null
			]
		})]
	});
}
function VisualizerToolbar({ copiedLink, onCopyLink, zoomPercentage, zoomIn, zoomOut, resetView, zoomInDisabled, zoomOutDisabled, loadingLabel, showProgress }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-4 py-2",
		children: [showProgress ? /* @__PURE__ */ jsx("span", {
			className: "truncate text-[12px] text-muted-foreground",
			children: loadingLabel
		}) : /* @__PURE__ */ jsx("span", {}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 p-0",
						onClick: onCopyLink,
						children: copiedLink ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, { children: copiedLink ? t("Link copied") : t("Copy link") })] }),
				/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 p-0",
						onClick: zoomIn,
						disabled: zoomInDisabled,
						children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Zoom in") })] }),
				/* @__PURE__ */ jsx("div", {
					className: "flex h-8 min-w-[64px] items-center justify-center rounded-md border border-border px-3",
					children: /* @__PURE__ */ jsxs("span", {
						className: "text-[12px] font-medium",
						children: [zoomPercentage, "%"]
					})
				}),
				/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 p-0",
						onClick: zoomOut,
						disabled: zoomOutDisabled,
						children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Zoom out") })] }),
				/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 p-0",
						onClick: resetView,
						children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Fit to view") })] })
			]
		})]
	});
}
function RelationNodeCard({ node, selected, expanded, onSelect, onToggleColumns, onNavigateRows, onNavigateColumns }) {
	const t = useT();
	const isView = isViewRelation(node);
	const label = formatRelationLabel(node);
	const visibleColumns = expanded ? node.columns : node.columns.slice(0, MAX_VISIBLE_COLUMNS);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("div", {
			className: "absolute",
			style: {
				left: `${node.x}px`,
				top: `${node.y}px`,
				width: `${node.width}px`
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("overflow-hidden rounded-lg border bg-card transition-all cursor-pointer select-none", selected && "ring-2 ring-ring", node.isExternal && "border-dashed"),
				onClick: onSelect,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border bg-muted/50 px-3 py-2",
					children: [
						isView ? /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 shrink-0 text-muted-foreground" }) : /* @__PURE__ */ jsx(Table2, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ jsx("span", {
							className: "truncate text-[13px] font-medium text-foreground",
							children: label
						}),
						isView ? /* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: "ms-auto text-[10px] shrink-0",
							children: t("View")
						}) : null,
						node.isExternal ? /* @__PURE__ */ jsx(Badge, {
							variant: "warning",
							className: "ms-auto text-[10px] shrink-0",
							children: t("External")
						}) : null
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "p-2",
					children: node.columns.length > 0 ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-0.5",
						children: [visibleColumns.map((column) => {
							const Icon$1 = getColumnIcon(column.udtName || column.dataType);
							const typeLabel = formatMysqlColumnType({
								data_type: column.dataType,
								udt_name: column.udtName
							});
							return /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 rounded px-2 py-1 text-[12px] hover:bg-muted/50",
								children: [
									/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
									/* @__PURE__ */ jsxs("span", {
										className: "flex flex-1 items-center gap-1.5 truncate text-foreground",
										children: [column.name, column.isPrimaryKey ? /* @__PURE__ */ jsx(Key, { className: "h-3 w-3 shrink-0 text-muted-foreground" }) : null]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex shrink-0 items-center gap-1.5",
										children: [column.required ? /* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: "h-4 px-1.5 text-[10px] font-normal",
											children: t("Required")
										}) : null, /* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: "h-4 px-1.5 text-[10px] font-normal",
											children: typeLabel
										})]
									})
								]
							}, column.name);
						}), node.columns.length > MAX_VISIBLE_COLUMNS ? /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: (event) => {
								event.stopPropagation();
								onToggleColumns();
							},
							className: "flex w-full items-center justify-center gap-1.5 rounded px-2 py-1.5 text-[11px] text-muted-foreground transition-colors hover:bg-muted/50",
							children: expanded ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ChevronUp, { className: "h-3 w-3" }), t("Show less")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3" }),
								"Show ",
								node.columns.length - MAX_VISIBLE_COLUMNS,
								" more"
							] })
						}) : null]
					}) : /* @__PURE__ */ jsx("div", {
						className: "px-2 py-3 text-[12px] text-muted-foreground",
						children: t("No columns loaded")
					})
				})]
			})
		})
	}), /* @__PURE__ */ jsx(ContextMenuContent, { children: !node.isExternal ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
		onClick: onNavigateRows,
		children: [/* @__PURE__ */ jsx(Eye, { className: "me-2 h-4 w-4" }), t("Rows")]
	}), /* @__PURE__ */ jsxs(ContextMenuItem, {
		onClick: onNavigateColumns,
		children: [/* @__PURE__ */ jsx(Table2, { className: "me-2 h-4 w-4" }), t("Columns")]
	})] }) : null })] });
}
function EmptySchemaState({ schema }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex flex-1 items-center justify-center overflow-hidden",
		style: { backgroundColor: "hsl(var(--muted) / 0.3)" },
		children: [/* @__PURE__ */ jsx(SchemaBlueprintMat, {}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-lg px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-card ring-2 ring-border",
					children: /* @__PURE__ */ jsx(Table2, { className: "h-6 w-6 text-foreground" })
				}),
				/* @__PURE__ */ jsxs("h3", {
					className: "mb-2 text-base font-semibold text-foreground",
					children: ["No tables or views in ", schema]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: t("This schema has no user tables or views to visualize yet.")
				})
			]
		})]
	});
}
function Minimap({ minimapRef, nodes, relationshipPaths, selectedRelation, minimapBounds, viewportRect, isDarkMode, onMinimapClick, onClose }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute bottom-4 end-4 z-10 h-44 w-64 overflow-hidden rounded-lg border border-border bg-card/95 backdrop-blur-sm select-none",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute start-0 end-0 top-0 flex h-8 items-center justify-between border-b border-border bg-muted/50 px-3",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-2 text-[12px] font-medium text-foreground",
				children: [/* @__PURE__ */ jsx(Map$1, { className: "h-4 w-4" }), t("Overview")]
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClose,
				className: "text-[14px] leading-none text-muted-foreground hover:text-foreground",
				children: "×"
			})]
		}), /* @__PURE__ */ jsx("div", {
			ref: minimapRef,
			className: cn("relative mt-8 h-[calc(100%-32px)] w-full border", isDarkMode ? "bg-muted/80 border-border/60" : "bg-[#e5e5e5] border-border"),
			children: /* @__PURE__ */ jsxs("svg", {
				className: "absolute inset-0 h-full w-full",
				viewBox: `${minimapBounds.minX} ${minimapBounds.minY} ${minimapBounds.width} ${minimapBounds.height}`,
				preserveAspectRatio: "xMidYMid meet",
				children: [
					/* @__PURE__ */ jsx(SchemaVisualizerRelationshipEdgesMinimap, {
						paths: relationshipPaths,
						isDarkMode
					}),
					nodes.map((node) => {
						const isSelected = selectedRelation === node.id;
						const label = formatRelationLabel(node);
						return /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("rect", {
							x: node.x,
							y: node.y,
							width: node.width,
							height: node.height,
							rx: "6",
							ry: "6",
							fill: isSelected ? "#ff8d11" : isDarkMode ? "oklch(0.2 0.006 286)" : "oklch(1 0 0)",
							stroke: isSelected ? "#ff8d11" : isDarkMode ? "oklch(0.5 0.01 286)" : "oklch(0.4 0.01 285)",
							strokeWidth: isSelected ? 3 : 2,
							className: "cursor-pointer",
							onClick: () => onMinimapClick(node.id)
						}), /* @__PURE__ */ jsx("text", {
							x: node.x + 4,
							y: node.y + 12,
							fontSize: "8",
							fill: isSelected ? "#ffffff" : isDarkMode ? "oklch(0.985 0 0)" : "oklch(0.141 0.005 285.823)",
							fontWeight: "600",
							className: "pointer-events-none",
							children: label.length > 15 ? `${label.slice(0, 15)}...` : label
						})] }, `minimap-node-${node.id}`);
					}),
					viewportRect ? /* @__PURE__ */ jsx("rect", {
						x: viewportRect.left,
						y: viewportRect.top,
						width: viewportRect.width,
						height: viewportRect.height,
						fill: "none",
						stroke: isDarkMode ? "oklch(0.985 0 0)" : "oklch(0.141 0.005 285.823)",
						strokeWidth: "2",
						strokeDasharray: "4 4",
						opacity: "0.6"
					}) : null
				]
			})
		})]
	});
}
function MysqlVisualizerPage() {
	const { databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(MysqlSchemaVisualizer, { databaseId });
}
export { MysqlVisualizerPage as component };
