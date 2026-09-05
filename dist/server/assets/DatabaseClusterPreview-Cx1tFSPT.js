import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { n as useViewportPanZoom, r as SchemaBlueprintMat, t as VIEWPORT_PAN_ZOOM_MAX } from "./useViewportPanZoom-COUwlx3T.js";
import { t as SchemaVisualizerRelationshipEdges } from "./SchemaVisualizerRelationshipEdges-DLVYWLVz.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Database, Maximize2, Network, ZoomIn, ZoomOut } from "lucide-react";
const DATABASE_CLUSTER_PREVIEW_HEIGHT = 200;
var PREVIEW_FIT_WIDTH = 340;
var HEADER_HEIGHT = 34;
var METRICS_BODY_HEIGHT = 28;
var NODE_HEIGHT = HEADER_HEIGHT + METRICS_BODY_HEIGHT;
var NODE_MIN_WIDTH = 148;
var VERTICAL_GAP = 28;
var HORIZONTAL_GAP = 12;
var CONTENT_PADDING_X = 16;
var CONTENT_PADDING_Y = 14;
var NODE_CHROME_WIDTH = 50;
var NODE_LABEL_FONT = "500 11px ui-sans-serif, system-ui, sans-serif";
function resolveClusterProxyLabel(options) {
	const api = String(options.api ?? "").trim().toLowerCase();
	if (options.hideProxyProductName === true || api === "tablesdb" || api === "documentsdb" || api === "vectorsdb") return options.t("Proxy");
	const engine = String(options.engine ?? "").trim().toLowerCase();
	if (engine === "postgres" || engine === "postgresql") return "PgDog";
	if (engine === "mysql" || engine === "mariadb") return "ProxySQL";
	return options.t("Proxy");
}
function normalizeClusterNodeStatus(status) {
	const normalized = String(status ?? "").trim().toLowerCase();
	if (normalized === "active" || normalized === "ready") return "active";
	if (normalized === "provisioning" || normalized === "restoring") return "provisioning";
	if (normalized === "scaling") return "scaling";
	if (normalized === "starting") return "starting";
	if (normalized === "failed" || normalized === "deleted" || normalized === "error" || normalized === "notfound") return "failed";
	if (normalized === "pending" || normalized === "paused" || normalized === "inactive") return "pending";
	if (normalized === "adding") return "adding";
	if (normalized === "removing") return "removing";
	return "unknown";
}
function overlayScalingLifecycle(status, lifecycleStatus) {
	if (lifecycleStatus !== "scaling") return status;
	if (status === "adding" || status === "removing" || status === "failed") return status;
	return "scaling";
}
function clusterNodeStatusesFromDatabaseStatus(databaseStatus, replicaCount) {
	const status = normalizeClusterNodeStatus(databaseStatus);
	const safeReplicaCount = Math.max(0, Math.floor(replicaCount));
	return [status, ...Array.from({ length: safeReplicaCount }, () => status)];
}
function clusterNodeStatusesFromMembers(members, replicaCount, fallbackStatus) {
	const safeReplicaCount = Math.max(0, Math.floor(replicaCount));
	const fallback = normalizeClusterNodeStatus(fallbackStatus ?? "active");
	const primary = members.find((member) => String(member.role ?? "").trim().toLowerCase() === "primary");
	const replicas = members.filter((member) => String(member.role ?? "").trim().toLowerCase() !== "primary");
	const statuses = [overlayScalingLifecycle(normalizeClusterNodeStatus(primary?.status ?? fallback), fallback)];
	for (let index = 0; index < safeReplicaCount; index += 1) {
		const member = replicas[index];
		statuses.push(member ? overlayScalingLifecycle(normalizeClusterNodeStatus(member.status), fallback) : "provisioning");
	}
	return statuses;
}
function clusterReplicaChangePreview(databaseStatus, committedReplicaCount, draftReplicaCount, memberStatuses) {
	const fallback = normalizeClusterNodeStatus(databaseStatus);
	const committed = Math.max(0, Math.floor(committedReplicaCount));
	const draft = Math.max(0, Math.floor(draftReplicaCount));
	const displayReplicaCount = Math.max(committed, draft);
	const liveStatuses = memberStatuses && memberStatuses.length > 0 ? memberStatuses.map((status) => normalizeClusterNodeStatus(status)) : null;
	const resolveLiveStatus = (index) => overlayScalingLifecycle(liveStatuses?.[index] ?? fallback, fallback);
	const nodeStatuses = [resolveLiveStatus(0)];
	for (let index = 0; index < displayReplicaCount; index += 1) {
		const exists = index < committed;
		const kept = index < draft;
		if (exists && kept) nodeStatuses.push(resolveLiveStatus(index + 1));
		else if (!exists && kept) nodeStatuses.push("adding");
		else nodeStatuses.push("removing");
	}
	return {
		displayReplicaCount,
		nodeStatuses
	};
}
function clusterNodeStatusDotClass(status) {
	switch (status) {
		case "active": return "bg-emerald-500 dark:bg-emerald-400";
		case "provisioning":
		case "scaling":
		case "starting":
		case "pending":
		case "adding": return "bg-amber-500 dark:bg-amber-400";
		case "removing": return "bg-slate-400 dark:bg-slate-500";
		case "failed": return "bg-red-500 dark:bg-red-400";
		default: return "bg-slate-500 dark:bg-slate-400";
	}
}
function clusterNodeStatusLabel(status, t) {
	switch (status) {
		case "active": return t("Active");
		case "provisioning": return t("Provisioning");
		case "scaling": return t("Scaling");
		case "starting": return t("Starting");
		case "failed": return t("Failed");
		case "pending": return t("Pending");
		case "adding": return t("Adding");
		case "removing": return t("Removing");
		default: return t("Unknown");
	}
}
var RESOURCE_PERCENT_SLOT_CLASSNAME = "inline-block w-[4ch] shrink-0 text-end font-mono tabular-nums font-medium leading-none";
function ResourcePercentValue({ value }) {
	const ready = value != null && !Number.isNaN(value);
	return /* @__PURE__ */ jsx("span", {
		className: cn(RESOURCE_PERCENT_SLOT_CLASSNAME, ready ? "text-foreground" : "text-transparent select-none"),
		"aria-hidden": !ready,
		children: ready ? `${Math.round(value)}%` : "100%"
	});
}
var measureCanvas = null;
function measureLabelWidth(label) {
	if (typeof document === "undefined") return Math.ceil(label.length * 7);
	measureCanvas ??= document.createElement("canvas");
	const ctx = measureCanvas.getContext("2d");
	if (!ctx) return Math.ceil(label.length * 7);
	ctx.font = NODE_LABEL_FONT;
	return Math.ceil(ctx.measureText(label).width);
}
function nodeWidthForLabel(label) {
	return Math.max(NODE_MIN_WIDTH, NODE_CHROME_WIDTH + measureLabelWidth(label));
}
function buildCompactPaths(proxy, primary, replicas) {
	const paths = [];
	if (proxy) {
		const proxyCenterX = proxy.x + proxy.width / 2;
		const proxyBottomY = proxy.y + proxy.height;
		const primaryCenterX$1 = primary.x + primary.width / 2;
		const primaryTopY = primary.y;
		paths.push({
			d: `M ${proxyCenterX} ${proxyBottomY} L ${primaryCenterX$1} ${primaryTopY}`,
			from: {
				x: proxyCenterX,
				y: proxyBottomY,
				side: "right"
			},
			to: {
				x: primaryCenterX$1,
				y: primaryTopY,
				side: "left"
			}
		});
	}
	if (replicas.length === 0) return paths;
	const primaryCenterX = primary.x + primary.width / 2;
	const primaryBottomY = primary.y + primary.height;
	if (replicas.length === 1) {
		const replica = replicas[0];
		const replicaCenterX = replica.x + replica.width / 2;
		const replicaTopY = replica.y;
		paths.push({
			d: `M ${primaryCenterX} ${primaryBottomY} L ${replicaCenterX} ${replicaTopY}`,
			from: {
				x: primaryCenterX,
				y: primaryBottomY,
				side: "right"
			},
			to: {
				x: replicaCenterX,
				y: replicaTopY,
				side: "left"
			}
		});
		return paths;
	}
	const branchY = primaryBottomY + VERTICAL_GAP / 2;
	for (const replica of replicas) {
		const replicaCenterX = replica.x + replica.width / 2;
		const replicaTopY = replica.y;
		paths.push({
			d: [
				`M ${primaryCenterX} ${primaryBottomY}`,
				`L ${primaryCenterX} ${branchY}`,
				`L ${replicaCenterX} ${branchY}`,
				`L ${replicaCenterX} ${replicaTopY}`
			].join(" "),
			from: {
				x: primaryCenterX,
				y: primaryBottomY,
				side: "right"
			},
			to: {
				x: replicaCenterX,
				y: replicaTopY,
				side: "left"
			}
		});
	}
	return paths;
}
function buildCompactLayout(primaryLabel, replicaLabels, proxyLabel) {
	const hasProxy = Boolean(proxyLabel);
	const isSolo = replicaLabels.length === 0;
	const proxyWidth = hasProxy ? nodeWidthForLabel(proxyLabel) : 0;
	const primaryWidth = nodeWidthForLabel(primaryLabel);
	const replicaWidths = replicaLabels.map((label) => nodeWidthForLabel(label));
	const replicaRowWidth = replicaWidths.length > 0 ? replicaWidths.reduce((sum, width$1) => sum + width$1, 0) + Math.max(0, replicaWidths.length - 1) * HORIZONTAL_GAP : 0;
	const clusterWidth = Math.max(proxyWidth, primaryWidth, replicaRowWidth);
	const rowCount = 1 + (hasProxy ? 1 : 0) + (isSolo ? 0 : 1);
	const clusterHeight = rowCount * NODE_HEIGHT + Math.max(0, rowCount - 1) * VERTICAL_GAP;
	const width = clusterWidth + CONTENT_PADDING_X * 2;
	const height = clusterHeight + CONTENT_PADDING_Y * 2;
	const clusterStartX = CONTENT_PADDING_X;
	let nextY = CONTENT_PADDING_Y;
	const proxy = hasProxy ? {
		id: "proxy",
		label: proxyLabel,
		x: clusterStartX + clusterWidth / 2 - proxyWidth / 2,
		y: nextY,
		width: proxyWidth,
		height: NODE_HEIGHT
	} : null;
	if (proxy) nextY += NODE_HEIGHT + VERTICAL_GAP;
	const primary = {
		id: "primary",
		label: primaryLabel,
		x: clusterStartX + clusterWidth / 2 - primaryWidth / 2,
		y: nextY,
		width: primaryWidth,
		height: NODE_HEIGHT
	};
	nextY += NODE_HEIGHT + VERTICAL_GAP;
	let replicaX = width / 2 - replicaRowWidth / 2;
	const replicas = replicaLabels.map((label, index) => {
		const nodeWidth = replicaWidths[index];
		const node = {
			id: `replica-${index + 1}`,
			label,
			x: replicaX,
			y: nextY,
			width: nodeWidth,
			height: NODE_HEIGHT
		};
		replicaX += nodeWidth + HORIZONTAL_GAP;
		return node;
	});
	return {
		width,
		height,
		proxy,
		primary,
		replicas,
		paths: buildCompactPaths(proxy, primary, replicas)
	};
}
function CompactClusterNode({ label, node, status, emphasized, icon: Icon$1 = Database, metrics }) {
	const t = useT();
	const statusLabel = clusterNodeStatusLabel(status, t);
	const isPreviewChange = status === "adding" || status === "removing";
	const showStatusBody = isPreviewChange || status === "provisioning" || status === "starting" || status === "pending" || status === "failed";
	const connectionsLabel = metrics.kind === "connections" ? `${metrics.current == null ? "-" : metrics.current.toLocaleString()} / ${metrics.max == null ? "-" : metrics.max.toLocaleString()}` : null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute select-none transition-opacity", status === "removing" && "opacity-45"),
		style: {
			left: `${node.x}px`,
			top: `${node.y}px`,
			width: `${node.width}px`
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("overflow-hidden rounded-md border bg-card shadow-sm", isPreviewChange ? "border-dashed border-muted-foreground/55" : "border-border", status === "adding" && "bg-amber-500/5", status === "removing" && "bg-muted/40"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center gap-1.5 bg-muted/50 px-2", emphasized ? "py-2" : "py-1.5"),
				style: { minHeight: HEADER_HEIGHT },
				children: [
					/* @__PURE__ */ jsx(Icon$1, {
						className: "h-3.5 w-3.5 shrink-0 text-muted-foreground",
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx("span", {
						className: cn("min-w-0 flex-1 whitespace-nowrap text-[11px] font-medium text-foreground", status === "removing" && "line-through text-muted-foreground"),
						children: label
					}),
					/* @__PURE__ */ jsx("span", {
						className: cn("h-2 w-2 shrink-0 rounded-full", clusterNodeStatusDotClass(status)),
						title: statusLabel,
						"aria-label": statusLabel
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center gap-2 border-t border-border/60 bg-card px-2.5 py-1.5",
				style: { minHeight: METRICS_BODY_HEIGHT },
				children: showStatusBody ? /* @__PURE__ */ jsx("span", {
					className: cn("text-[10px] font-medium leading-none", status === "removing" ? "text-muted-foreground" : status === "adding" || status === "provisioning" || status === "starting" || status === "pending" ? "text-amber-700 dark:text-amber-400" : "text-muted-foreground"),
					children: statusLabel
				}) : metrics.kind === "connections" ? /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1 text-[10px] leading-none",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: t("Connections")
					}), /* @__PURE__ */ jsx("span", {
						className: "font-mono tabular-nums font-medium text-foreground",
						children: connectionsLabel
					})]
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1 text-[10px] leading-none",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("CPU")
						}), /* @__PURE__ */ jsx(ResourcePercentValue, { value: metrics.cpu })]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "h-3 w-px shrink-0 bg-border",
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1 text-[10px] leading-none",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Memory")
						}), /* @__PURE__ */ jsx(ResourcePercentValue, { value: metrics.memory })]
					})
				] })
			})]
		})
	});
}
function fitCompactLayoutToViewport(layout, canvas, setZoom, setPan) {
	const canvasWidth = canvas.clientWidth;
	const canvasHeight = canvas.clientHeight;
	if (canvasWidth <= 0 || canvasHeight <= 0) return;
	const padding = 48;
	const fitZoom = Math.min(2, canvasWidth / (layout.width + padding * 2), canvasHeight / (layout.height + padding * 2));
	const centerX = layout.width / 2;
	const centerY = layout.height / 2;
	setZoom(fitZoom);
	setPan({
		x: canvasWidth / 2 - centerX * fitZoom,
		y: canvasHeight / 2 - centerY * fitZoom
	});
}
function resolveNodeResourceMetrics(nodeMetrics, index) {
	return nodeMetrics?.[index] ?? {
		cpu: null,
		memory: null
	};
}
function ClusterDiagramNodes({ layout, statuses, soloPrimary, proxy, nodeMetrics }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SchemaBlueprintMat, { density: "dense" }),
		/* @__PURE__ */ jsx(SchemaVisualizerRelationshipEdges, {
			paths: layout.paths,
			extent: {
				width: layout.width,
				height: layout.height
			},
			showArrowHeads: false
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "relative z-20",
			children: [
				layout.proxy ? /* @__PURE__ */ jsx(CompactClusterNode, {
					label: layout.proxy.label,
					node: layout.proxy,
					status: normalizeClusterNodeStatus(proxy?.status ?? "active"),
					icon: Network,
					metrics: {
						kind: "connections",
						current: proxy?.connections?.current ?? null,
						max: proxy?.connections?.max ?? null
					}
				}) : null,
				/* @__PURE__ */ jsx(CompactClusterNode, {
					label: layout.primary.label,
					node: layout.primary,
					status: statuses[0] ?? "active",
					emphasized: soloPrimary && !layout.proxy,
					metrics: {
						kind: "resource",
						...resolveNodeResourceMetrics(nodeMetrics, 0)
					}
				}),
				layout.replicas.map((replica, index) => /* @__PURE__ */ jsx(CompactClusterNode, {
					label: replica.label,
					node: replica,
					status: statuses[index + 1] ?? "active",
					metrics: {
						kind: "resource",
						...resolveNodeResourceMetrics(nodeMetrics, index + 1)
					}
				}, replica.id))
			]
		})
	] });
}
function DatabaseClusterPreview({ replicaCount, nodeStatuses, nodeMetrics, proxy, className, withSectionDivider = true, interactive = false, onRefresh, isRefreshing = false, previewHeight = 200 }) {
	const t = useT();
	const safeReplicaCount = Math.max(0, Math.floor(replicaCount));
	const primaryLabel = t("Primary");
	const proxyLabel = proxy?.label?.trim() || null;
	const replicaLabels = useMemo(() => Array.from({ length: safeReplicaCount }, (_, index) => `${t("Replica")} ${index + 1}`), [safeReplicaCount, t]);
	const layout = useMemo(() => buildCompactLayout(primaryLabel, replicaLabels, proxyLabel), [
		primaryLabel,
		replicaLabels,
		proxyLabel
	]);
	const resolvedStatuses = useMemo(() => {
		const total = 1 + safeReplicaCount;
		return Array.from({ length: total }, (_, index) => normalizeClusterNodeStatus(nodeStatuses?.[index] ?? "active"));
	}, [nodeStatuses, safeReplicaCount]);
	const interactiveHeight = proxyLabel ? 340 : 280;
	const ariaLabel = useMemo(() => {
		const parts = [];
		if (proxyLabel) parts.push(proxyLabel);
		parts.push(t("Primary"));
		if (safeReplicaCount > 0) parts.push(`${safeReplicaCount} ${safeReplicaCount === 1 ? t("Replica") : t("Replicas")}`);
		return parts.join(" + ");
	}, [
		proxyLabel,
		safeReplicaCount,
		t
	]);
	const hasAutoFocusedRef = useRef(false);
	const lastReplicaCountRef = useRef(replicaCount);
	const lastProxyLabelRef = useRef(proxyLabel);
	const { canvasRef, zoom, pan, setZoom, setPan, isDragging, zoomPercentage, zoomInDisabled, zoomOutDisabled, bindCanvas, zoomIn, zoomOut } = useViewportPanZoom();
	const fitToView = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		fitCompactLayoutToViewport(layout, canvas, setZoom, setPan);
	}, [
		canvasRef,
		layout,
		setPan,
		setZoom
	]);
	useEffect(() => {
		if (!interactive) return;
		if (lastReplicaCountRef.current !== replicaCount || lastProxyLabelRef.current !== proxyLabel) {
			hasAutoFocusedRef.current = false;
			lastReplicaCountRef.current = replicaCount;
			lastProxyLabelRef.current = proxyLabel;
		}
		if (hasAutoFocusedRef.current) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const frame = requestAnimationFrame(() => {
			fitCompactLayoutToViewport(layout, canvas, setZoom, setPan);
			hasAutoFocusedRef.current = true;
		});
		return () => cancelAnimationFrame(frame);
	}, [
		interactive,
		layout,
		replicaCount,
		proxyLabel,
		canvasRef,
		setPan,
		setZoom
	]);
	const handleKeyDown = useCallback((event) => {
		if (!interactive) return;
		const key = event.key;
		if (key === "+" || key === "=") {
			event.preventDefault();
			zoomIn();
		} else if (key === "-" || key === "_") {
			event.preventDefault();
			zoomOut();
		} else if (key === "0") {
			event.preventDefault();
			fitToView();
		}
	}, [
		fitToView,
		interactive,
		zoomIn,
		zoomOut
	]);
	const content = interactive ? /* @__PURE__ */ jsxs("div", {
		className: cn("relative min-w-0", className),
		style: {
			height: interactiveHeight,
			backgroundColor: "hsl(var(--muted) / 0.3)"
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute end-3 top-3 z-30 flex items-center gap-1.5",
			children: /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-auto flex items-center gap-1.5",
				children: [
					onRefresh ? /* @__PURE__ */ jsx(RefreshButton, {
						onClick: onRefresh,
						isRefreshing,
						className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm text-foreground hover:bg-accent"
					}) : null,
					/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: zoomIn,
							disabled: zoomInDisabled,
							children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Zoom in") })] }),
					/* @__PURE__ */ jsx("div", {
						className: "flex h-8 min-w-[52px] items-center justify-center rounded-md border border-border bg-card/95 px-2.5 backdrop-blur-sm",
						children: /* @__PURE__ */ jsxs("span", {
							className: "text-[11px] font-medium tabular-nums text-foreground",
							children: [zoomPercentage, "%"]
						})
					}),
					/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: zoomOut,
							disabled: zoomOutDisabled,
							children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Zoom out") })] }),
					/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-8 w-8 border-border bg-card/95 p-0 backdrop-blur-sm",
							onClick: fitToView,
							children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Fit to view") })] })
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			ref: canvasRef,
			className: cn("h-full w-full cursor-grab overflow-hidden select-none", isDragging && "cursor-grabbing"),
			role: "application",
			"aria-label": ariaLabel,
			tabIndex: 0,
			onKeyDown: handleKeyDown,
			...bindCanvas,
			children: /* @__PURE__ */ jsx("div", {
				className: "relative",
				style: {
					width: layout.width,
					height: layout.height,
					transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
					transformOrigin: "0 0"
				},
				children: /* @__PURE__ */ jsx(ClusterDiagramNodes, {
					layout,
					statuses: resolvedStatuses,
					soloPrimary: safeReplicaCount === 0,
					proxy,
					nodeMetrics
				})
			})
		})]
	}) : /* @__PURE__ */ jsx("div", {
		className: cn("min-w-0", className),
		style: { height: previewHeight },
		role: "img",
		"aria-label": ariaLabel,
		children: /* @__PURE__ */ jsx("div", {
			className: "relative h-full w-full overflow-hidden",
			style: { backgroundColor: "hsl(var(--muted) / 0.3)" },
			children: /* @__PURE__ */ jsx("div", {
				className: "absolute left-1/2 top-1/2",
				style: {
					width: layout.width,
					height: layout.height,
					transform: `translate(-50%, -50%) scale(${Math.min(1, (previewHeight - 4) / layout.height, (PREVIEW_FIT_WIDTH - 4) / layout.width)})`,
					transformOrigin: "center center"
				},
				children: /* @__PURE__ */ jsx(ClusterDiagramNodes, {
					layout,
					statuses: resolvedStatuses,
					soloPrimary: safeReplicaCount === 0,
					proxy,
					nodeMetrics
				})
			})
		})
	});
	if (!withSectionDivider) return content;
	return /* @__PURE__ */ jsx("div", {
		className: cn("-mx-4 mt-2 min-w-0 shrink-0 border-t border-border"),
		"aria-hidden": false,
		children: content
	});
}
export { clusterReplicaChangePreview as a, clusterNodeStatusesFromMembers as i, DatabaseClusterPreview as n, resolveClusterProxyLabel as o, clusterNodeStatusesFromDatabaseStatus as r, DATABASE_CLUSTER_PREVIEW_HEIGHT as t };
