import { C as DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MAX, Q as normalizeApiReferenceColumnsLayout, X as normalizeApiExplorerColumnsLayout, Z as normalizeApiExplorerResponseSplitLayout, et as normalizeDiagramGeneratorPropertiesSplitLayout, f as API_REFERENCE_COLUMNS_MAX, l as API_EXPLORER_RESPONSE_SPLIT_MAX, o as API_EXPLORER_COLUMNS_MAX, p as API_REFERENCE_COLUMNS_MIN, s as API_EXPLORER_COLUMNS_MIN, u as API_EXPLORER_RESPONSE_SPLIT_MIN, w as DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MIN } from "./resizable-layout-BVnWw80t.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, useCallback, useEffect, useRef, useState } from "react";
var PERSIST_DEBOUNCE_MS = 250;
function PersistedResizablePanelGroup({ direction, layout, persistLayout, normalizeLayout, mins, maxs, className, handleClassName, panelClassName, children }) {
	const [mountedLayout, setMountedLayout] = useState(() => normalizeLayout(layout));
	const isResizingRef = useRef(false);
	const persistTimerRef = useRef(null);
	const lastPersistedRef = useRef(mountedLayout);
	const latestLayoutRef = useRef(mountedLayout);
	useEffect(() => {
		if (isResizingRef.current) return;
		const normalized = normalizeLayout(layout);
		lastPersistedRef.current = normalized;
		latestLayoutRef.current = normalized;
		setMountedLayout((prev) => prev.join(",") === normalized.join(",") ? prev : normalized);
	}, [layout, normalizeLayout]);
	const handleLayout = useCallback((sizes) => {
		const normalized = normalizeLayout(sizes);
		latestLayoutRef.current = normalized;
		if (!isResizingRef.current) return;
		if (normalized.every((size, index) => Math.abs(size - lastPersistedRef.current[index]) < .5)) return;
		if (persistTimerRef.current !== null) window.clearTimeout(persistTimerRef.current);
		persistTimerRef.current = window.setTimeout(() => {
			persistTimerRef.current = null;
			lastPersistedRef.current = normalized;
			persistLayout(normalized);
		}, PERSIST_DEBOUNCE_MS);
	}, [normalizeLayout, persistLayout]);
	const handleDragging = useCallback((isDragging) => {
		if (isDragging) {
			isResizingRef.current = true;
			return;
		}
		isResizingRef.current = false;
		if (persistTimerRef.current !== null) {
			window.clearTimeout(persistTimerRef.current);
			persistTimerRef.current = null;
		}
		const next = latestLayoutRef.current;
		lastPersistedRef.current = next;
		setMountedLayout(next);
		persistLayout(next);
	}, [persistLayout]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) window.clearTimeout(persistTimerRef.current);
		};
	}, []);
	const layoutKey = mountedLayout.map((size) => size.toFixed(1)).join("-");
	return /* @__PURE__ */ jsx(ResizablePanelGroup, {
		direction,
		className,
		onLayout: handleLayout,
		children: children.map((panel, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [index > 0 ? /* @__PURE__ */ jsx(ResizableHandle, {
			className: handleClassName,
			onDragging: handleDragging
		}) : null, /* @__PURE__ */ jsx(ResizablePanel, {
			defaultSize: mountedLayout[index],
			minSize: mins[index],
			maxSize: maxs[index] < 100 ? maxs[index] : void 0,
			className: panelClassName,
			children: panel
		})] }, index))
	}, layoutKey);
}
function ExplorerColumnsResizableLayout({ layout, persistLayout, handleClassName, className, services, methods, request }) {
	return /* @__PURE__ */ jsx(PersistedResizablePanelGroup, {
		direction: "horizontal",
		layout,
		persistLayout,
		normalizeLayout: normalizeApiExplorerColumnsLayout,
		mins: API_EXPLORER_COLUMNS_MIN,
		maxs: API_EXPLORER_COLUMNS_MAX,
		className,
		handleClassName,
		panelClassName: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
		children: [
			services,
			methods,
			request
		]
	});
}
function ExplorerResponseSplitResizableLayout({ layout, persistLayout, handleClassName, className, request, response }) {
	return /* @__PURE__ */ jsx(PersistedResizablePanelGroup, {
		direction: "vertical",
		layout,
		persistLayout,
		normalizeLayout: normalizeApiExplorerResponseSplitLayout,
		mins: API_EXPLORER_RESPONSE_SPLIT_MIN,
		maxs: API_EXPLORER_RESPONSE_SPLIT_MAX,
		className,
		handleClassName,
		panelClassName: "min-h-0 overflow-hidden",
		children: [request, response]
	});
}
function ReferenceColumnsResizableLayout({ layout, persistLayout, handleClassName, className, methods, request }) {
	return /* @__PURE__ */ jsx(PersistedResizablePanelGroup, {
		direction: "horizontal",
		layout,
		persistLayout,
		normalizeLayout: normalizeApiReferenceColumnsLayout,
		mins: API_REFERENCE_COLUMNS_MIN,
		maxs: API_REFERENCE_COLUMNS_MAX,
		className,
		handleClassName,
		panelClassName: "min-h-0 min-w-0 overflow-hidden",
		children: [methods, request]
	});
}
function DiagramPropertiesSplitResizableLayout({ layout, persistLayout, handleClassName, className, properties, layers }) {
	return /* @__PURE__ */ jsx(PersistedResizablePanelGroup, {
		direction: "vertical",
		layout,
		persistLayout,
		normalizeLayout: normalizeDiagramGeneratorPropertiesSplitLayout,
		mins: DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MIN,
		maxs: DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MAX,
		className,
		handleClassName,
		panelClassName: "min-h-0 overflow-hidden",
		children: [properties, layers]
	});
}
export { ReferenceColumnsResizableLayout as i, ExplorerColumnsResizableLayout as n, ExplorerResponseSplitResizableLayout as r, DiagramPropertiesSplitResizableLayout as t };
