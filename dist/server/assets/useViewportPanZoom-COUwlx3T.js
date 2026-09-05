import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useRef, useState } from "react";
var DOT_DENSITY = {
	default: {
		spacing: 40,
		radius: 2.5
	},
	dense: {
		spacing: 22,
		radius: 1.75
	}
};
function SchemaBlueprintMat({ className, density = "default" }) {
	const patternId = `schema-blueprint-dots-${useId().replace(/:/g, "")}`;
	const { spacing, radius } = DOT_DENSITY[density];
	return /* @__PURE__ */ jsxs("svg", {
		className: cn("absolute pointer-events-none", className),
		style: {
			left: "-5000px",
			top: "-5000px",
			width: "10000px",
			height: "10000px",
			zIndex: 0
		},
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
			id: patternId,
			width: spacing,
			height: spacing,
			patternUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ jsx("circle", {
				cx: "0",
				cy: "0",
				r: radius,
				className: "fill-foreground/20 dark:fill-foreground/30"
			})
		}) }), /* @__PURE__ */ jsx("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${patternId})`
		})]
	});
}
const VIEWPORT_PAN_ZOOM_MAX = 2;
function useViewportPanZoom(options) {
	const minZoom = options?.minZoom ?? .2;
	const maxZoom = options?.maxZoom ?? 2;
	const zoomStep = options?.zoomStep ?? .05;
	const wheelZoomStep = options?.wheelZoomStep ?? .02;
	const contentLayout = options?.contentLayout ?? "scaled";
	const getContentSize = options?.getContentSize;
	const canvasRef = useRef(null);
	const [zoom, setZoom] = useState(1);
	const [pan, setPan] = useState({
		x: 0,
		y: 0
	});
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({
		x: 0,
		y: 0
	});
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const handleWheel = (e) => {
			e.preventDefault();
			const delta = e.deltaY > 0 ? -wheelZoomStep : wheelZoomStep;
			const newZoom = Math.max(minZoom, Math.min(maxZoom, zoom + delta));
			const rect = canvas.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;
			if (contentLayout === "sized" && getContentSize) {
				const contentSize = getContentSize(zoom);
				const contentLeft = (rect.width - contentSize.width) / 2 + pan.x;
				const contentTop = (rect.height - contentSize.height) / 2 + pan.y;
				const relX = mouseX - contentLeft;
				const relY = mouseY - contentTop;
				const contentFractionX = contentSize.width > 0 ? relX / contentSize.width : 0;
				const contentFractionY = contentSize.height > 0 ? relY / contentSize.height : 0;
				const nextContentSize = getContentSize(newZoom);
				const nextRelX = contentFractionX * nextContentSize.width;
				const nextRelY = contentFractionY * nextContentSize.height;
				const nextContentLeft = mouseX - nextRelX;
				const nextContentTop = mouseY - nextRelY;
				setZoom(newZoom);
				setPan({
					x: nextContentLeft - (rect.width - nextContentSize.width) / 2,
					y: nextContentTop - (rect.height - nextContentSize.height) / 2
				});
				return;
			}
			const zoomPointX = (mouseX - pan.x) / zoom;
			const zoomPointY = (mouseY - pan.y) / zoom;
			setZoom(newZoom);
			setPan({
				x: mouseX - zoomPointX * newZoom,
				y: mouseY - zoomPointY * newZoom
			});
		};
		canvas.addEventListener("wheel", handleWheel, { passive: false });
		return () => canvas.removeEventListener("wheel", handleWheel);
	}, [
		zoom,
		pan,
		minZoom,
		maxZoom,
		wheelZoomStep,
		contentLayout,
		getContentSize
	]);
	const handleMouseDown = useCallback((e) => {
		if (e.button !== 0) return;
		setIsDragging(true);
		setDragStart({
			x: e.clientX - pan.x,
			y: e.clientY - pan.y
		});
	}, [pan]);
	const handleMouseMove = useCallback((e) => {
		if (!isDragging) return;
		setPan({
			x: e.clientX - dragStart.x,
			y: e.clientY - dragStart.y
		});
	}, [isDragging, dragStart]);
	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);
	const zoomIn = useCallback(() => {
		const nextZoom = Math.min(maxZoom, zoom + zoomStep);
		if (nextZoom === zoom) return;
		if (contentLayout === "sized" && getContentSize && canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const contentSize = getContentSize(zoom);
			const relX = centerX - (rect.width - contentSize.width) / 2 - pan.x;
			const relY = centerY - (rect.height - contentSize.height) / 2 - pan.y;
			const contentFractionX = contentSize.width > 0 ? relX / contentSize.width : .5;
			const contentFractionY = contentSize.height > 0 ? relY / contentSize.height : .5;
			const nextContentSize = getContentSize(nextZoom);
			setPan({
				x: centerX - contentFractionX * nextContentSize.width - (rect.width - nextContentSize.width) / 2,
				y: centerY - contentFractionY * nextContentSize.height - (rect.height - nextContentSize.height) / 2
			});
		}
		setZoom(nextZoom);
	}, [
		maxZoom,
		zoomStep,
		contentLayout,
		getContentSize,
		zoom,
		pan.x,
		pan.y
	]);
	const zoomOut = useCallback(() => {
		const nextZoom = Math.max(minZoom, zoom - zoomStep);
		if (nextZoom === zoom) return;
		if (contentLayout === "sized" && getContentSize && canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			const contentSize = getContentSize(zoom);
			const relX = centerX - (rect.width - contentSize.width) / 2 - pan.x;
			const relY = centerY - (rect.height - contentSize.height) / 2 - pan.y;
			const contentFractionX = contentSize.width > 0 ? relX / contentSize.width : .5;
			const contentFractionY = contentSize.height > 0 ? relY / contentSize.height : .5;
			const nextContentSize = getContentSize(nextZoom);
			setPan({
				x: centerX - contentFractionX * nextContentSize.width - (rect.width - nextContentSize.width) / 2,
				y: centerY - contentFractionY * nextContentSize.height - (rect.height - nextContentSize.height) / 2
			});
		}
		setZoom(nextZoom);
	}, [
		minZoom,
		zoomStep,
		contentLayout,
		getContentSize,
		zoom,
		pan.x,
		pan.y
	]);
	const resetView = useCallback(() => {
		setZoom(1);
		setPan({
			x: 0,
			y: 0
		});
	}, []);
	const bindCanvas = {
		onMouseDown: handleMouseDown,
		onMouseMove: handleMouseMove,
		onMouseUp: handleMouseUp,
		onMouseLeave: handleMouseUp
	};
	return {
		canvasRef,
		zoom,
		pan,
		setZoom,
		setPan,
		isDragging,
		zoomPercentage: Math.round(zoom * 100),
		zoomInDisabled: zoom >= maxZoom,
		zoomOutDisabled: zoom <= minZoom,
		bindCanvas,
		zoomIn,
		zoomOut,
		resetView
	};
}
export { useViewportPanZoom as n, SchemaBlueprintMat as r, VIEWPORT_PAN_ZOOM_MAX as t };
