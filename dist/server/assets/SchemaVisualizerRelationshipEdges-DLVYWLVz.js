import { t as cn } from "./utils-DoqqkI3X.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useId, useMemo } from "react";
var RELATIONSHIP_EDGE_OPACITY = .45;
function resolveEdgeCanvasExtent(paths, extent) {
	const padding = 160;
	let maxX = extent?.width ?? padding;
	let maxY = extent?.height ?? padding;
	for (const path of paths) {
		maxX = Math.max(maxX, path.from.x + padding, path.to.x + padding);
		maxY = Math.max(maxY, path.from.y + padding, path.to.y + padding);
	}
	return {
		width: Math.max(maxX, 1),
		height: Math.max(maxY, 1)
	};
}
function SchemaVisualizerRelationshipEdges({ paths, extent, className, showArrowHeads = true }) {
	const markerId = `schema-visualizer-arrow-${useId().replace(/:/g, "")}`;
	const canvas = useMemo(() => resolveEdgeCanvasExtent(paths, extent), [paths, extent]);
	if (paths.length === 0) return null;
	return /* @__PURE__ */ jsxs("svg", {
		className: cn("absolute pointer-events-none z-[8] text-foreground", className),
		style: {
			left: 0,
			top: 0,
			width: canvas.width,
			height: canvas.height,
			overflow: "visible"
		},
		"aria-hidden": true,
		children: [showArrowHeads ? /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("marker", {
			id: markerId,
			markerWidth: "10",
			markerHeight: "10",
			refX: "9",
			refY: "5",
			orient: "auto",
			markerUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ jsx("polygon", {
				points: "0 0, 10 5, 0 10",
				className: "fill-foreground",
				opacity: RELATIONSHIP_EDGE_OPACITY
			})
		}) }) : null, /* @__PURE__ */ jsx("g", { children: paths.map((path, index) => /* @__PURE__ */ jsx("path", {
			d: path.d,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinejoin: "round",
			strokeLinecap: "round",
			strokeDasharray: "3 5",
			markerEnd: showArrowHeads ? `url(#${markerId})` : void 0,
			opacity: RELATIONSHIP_EDGE_OPACITY
		}, `schema-edge-${index}`)) })]
	});
}
function SchemaVisualizerRelationshipEdgesMinimap({ paths, isDarkMode }) {
	const stroke = isDarkMode ? "oklch(0.985 0 0)" : "oklch(0.141 0.005 285.823)";
	return /* @__PURE__ */ jsx(Fragment, { children: paths.map((path, index) => /* @__PURE__ */ jsx("path", {
		d: path.d,
		fill: "none",
		stroke,
		strokeWidth: "1.5",
		strokeLinejoin: "round",
		strokeDasharray: "3 5",
		opacity: RELATIONSHIP_EDGE_OPACITY
	}, `minimap-edge-${index}`)) });
}
export { SchemaVisualizerRelationshipEdgesMinimap as n, SchemaVisualizerRelationshipEdges as t };
