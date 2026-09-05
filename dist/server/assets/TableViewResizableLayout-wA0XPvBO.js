import { t as cn } from "./utils-DoqqkI3X.js";
import { $r as parseDatabasesSidebarWidthPx, rt as useTableViewSidebarWidth, yi as parseStorageSidebarWidthPx } from "./auth-BPuxYQAc.js";
import { B as TABLE_VIEW_SIDEBAR_MIN_WIDTH_PX, J as effectivePanelGroupWidthPx, K as clampTableViewSidebarWidthPx, L as TABLE_VIEW_MAIN_MIN_WIDTH_PX, R as TABLE_VIEW_SIDEBAR_DEFAULT_WIDTH_PX, nt as syncPanelGroupFirstPanePx, q as computeTwoPanelHorizontalLayout, z as TABLE_VIEW_SIDEBAR_MAX_WIDTH_PX } from "./resizable-layout-BVnWw80t.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { h as verticalPanelResizeHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
var HANDLE_CLASS = verticalPanelResizeHandleClass("z-[45]");
function TableViewResizableLayout({ sidebar, children, className, sidebarWidthScope = "databases" }) {
	const containerRef = useRef(null);
	const firstPanelRef = useRef(null);
	const prevContainerWidthRef = useRef(0);
	const [containerWidth, setContainerWidth] = useState(0);
	const { account } = useAuth();
	const accountPrefs = account;
	const { persistSidebarWidthPx } = useTableViewSidebarWidth(accountPrefs, sidebarWidthScope);
	const parsePersistedSidebarPx = sidebarWidthScope === "storage" ? parseStorageSidebarWidthPx : parseDatabasesSidebarWidthPx;
	const sidebarWidthPx = useMemo(() => clampTableViewSidebarWidthPx(parsePersistedSidebarPx(accountPrefs?.prefs) ?? 224), [accountPrefs?.prefs, parsePersistedSidebarPx]);
	const [mountedSidebarPx, setMountedSidebarPx] = useState(sidebarWidthPx);
	const isSidebarResizingRef = useRef(false);
	useLayoutEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const ro = new ResizeObserver((entries) => {
			setContainerWidth(entries[0]?.contentRect.width ?? 0);
		});
		ro.observe(el);
		setContainerWidth(el.getBoundingClientRect().width);
		return () => ro.disconnect();
	}, []);
	useEffect(() => {
		if (isSidebarResizingRef.current) return;
		setMountedSidebarPx((prev) => prev !== sidebarWidthPx ? sidebarWidthPx : prev);
	}, [sidebarWidthPx]);
	const panelLayout = useMemo(() => computeTwoPanelHorizontalLayout({
		containerWidth: effectivePanelGroupWidthPx(containerWidth),
		firstPx: mountedSidebarPx,
		firstMinPx: 224,
		firstMaxPx: 480,
		secondMinPx: 360
	}), [containerWidth, mountedSidebarPx]);
	useLayoutEffect(() => {
		if (containerWidth <= 0) return;
		if (isSidebarResizingRef.current) return;
		const prevWidth = prevContainerWidthRef.current;
		prevContainerWidthRef.current = containerWidth;
		if (prevWidth === containerWidth) return;
		const nextPx = syncPanelGroupFirstPanePx(firstPanelRef.current, containerWidth, mountedSidebarPx, {
			firstMinPx: 224,
			firstMaxPx: 480,
			secondMinPx: 360
		});
		if (nextPx !== mountedSidebarPx) setMountedSidebarPx(nextPx);
	}, [containerWidth, mountedSidebarPx]);
	const latestSidebarPxRef = useRef(sidebarWidthPx);
	useEffect(() => {
		if (isSidebarResizingRef.current) return;
		latestSidebarPxRef.current = sidebarWidthPx;
	}, [sidebarWidthPx]);
	const handleLayout = useCallback((sizes) => {
		if (!isSidebarResizingRef.current) return;
		const percent = sizes[0];
		if (typeof percent !== "number" || !Number.isFinite(percent)) return;
		const width = effectivePanelGroupWidthPx(containerWidth);
		latestSidebarPxRef.current = computeTwoPanelHorizontalLayout({
			containerWidth: width,
			firstPx: percent / 100 * width,
			firstMinPx: 224,
			firstMaxPx: 480,
			secondMinPx: 360
		}).firstPx;
	}, [containerWidth]);
	const handleSidebarDragging = useCallback((isDragging) => {
		if (isDragging) {
			isSidebarResizingRef.current = true;
			return;
		}
		if (!isSidebarResizingRef.current) return;
		isSidebarResizingRef.current = false;
		persistSidebarWidthPx(latestSidebarPxRef.current);
	}, [persistSidebarWidthPx]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className: cn("flex h-full min-h-0 min-w-0 flex-1 flex-col", className),
		children: /* @__PURE__ */ jsxs(ResizablePanelGroup, {
			direction: "horizontal",
			className: "h-full min-h-0 min-w-0 flex-1",
			onLayout: handleLayout,
			children: [
				/* @__PURE__ */ jsx(ResizablePanel, {
					ref: firstPanelRef,
					defaultSize: panelLayout.firstPercent,
					minSize: panelLayout.firstMinPercent,
					maxSize: panelLayout.firstMaxPercent,
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-e border-border bg-background",
						children: sidebar
					})
				}),
				/* @__PURE__ */ jsx(ResizableHandle, {
					className: HANDLE_CLASS,
					onDragging: handleSidebarDragging
				}),
				/* @__PURE__ */ jsx(ResizablePanel, {
					defaultSize: panelLayout.secondPercent,
					minSize: panelLayout.secondMinPercent,
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
						children
					})
				})
			]
		})
	});
}
export { TableViewResizableLayout as t };
