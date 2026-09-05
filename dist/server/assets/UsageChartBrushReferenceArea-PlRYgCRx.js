import { t as cn } from "./utils-DoqqkI3X.js";
import { D as CartesianLabelContextProvider, Gt as Layer, Ht as useAppSelector, O as CartesianLabelFromLabelProp, V as selectAxisScale, Vt as useAppDispatch, c as addArea, f as createLabeledScales, m as rectWithPoints, qt as filterProps, rn as isNumOrStr, s as useClipPathId, st as Rectangle, u as removeArea, wt as useIsPanorama } from "./CartesianChart-IK-OMdOm.js";
import { jsx } from "react/jsx-runtime";
import * as React$1 from "react";
import { Component, useCallback, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { addDays, addHours, addMinutes, endOfDay } from "date-fns";
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
			_defineProperty(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
var getRect = (hasX1, hasX2, hasY1, hasY2, xAxisScale, yAxisScale, props) => {
	var { x1: xValue1, x2: xValue2, y1: yValue1, y2: yValue2 } = props;
	if (xAxisScale == null || yAxisScale == null) return null;
	var scales = createLabeledScales({
		x: xAxisScale,
		y: yAxisScale
	});
	var p1 = {
		x: hasX1 ? scales.x.apply(xValue1, { position: "start" }) : scales.x.rangeMin,
		y: hasY1 ? scales.y.apply(yValue1, { position: "start" }) : scales.y.rangeMin
	};
	var p2 = {
		x: hasX2 ? scales.x.apply(xValue2, { position: "end" }) : scales.x.rangeMax,
		y: hasY2 ? scales.y.apply(yValue2, { position: "end" }) : scales.y.rangeMax
	};
	if (props.ifOverflow === "discard" && (!scales.isInRange(p1) || !scales.isInRange(p2))) return null;
	return rectWithPoints(p1, p2);
};
var renderRect = (option, props) => {
	var rect;
	if (/* @__PURE__ */ React$1.isValidElement(option)) rect = /* @__PURE__ */ React$1.cloneElement(option, props);
	else if (typeof option === "function") rect = option(props);
	else rect = /* @__PURE__ */ React$1.createElement(Rectangle, _extends({}, props, { className: "recharts-reference-area-rect" }));
	return rect;
};
function ReportReferenceArea(props) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(addArea(props));
		return () => {
			dispatch(removeArea(props));
		};
	});
	return null;
}
function ReferenceAreaImpl(props) {
	var { x1, x2, y1, y2, className, shape, xAxisId, yAxisId } = props;
	var clipPathId = useClipPathId();
	var isPanorama = useIsPanorama();
	var xAxisScale = useAppSelector((state) => selectAxisScale(state, "xAxis", xAxisId, isPanorama));
	var yAxisScale = useAppSelector((state) => selectAxisScale(state, "yAxis", yAxisId, isPanorama));
	if (xAxisScale == null || !yAxisScale == null) return null;
	var hasX1 = isNumOrStr(x1);
	var hasX2 = isNumOrStr(x2);
	var hasY1 = isNumOrStr(y1);
	var hasY2 = isNumOrStr(y2);
	if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) return null;
	var rect = getRect(hasX1, hasX2, hasY1, hasY2, xAxisScale, yAxisScale, props);
	if (!rect && !shape) return null;
	var clipPath = props.ifOverflow === "hidden" ? "url(#".concat(clipPathId, ")") : void 0;
	return /* @__PURE__ */ React$1.createElement(Layer, { className: clsx("recharts-reference-area", className) }, renderRect(shape, _objectSpread(_objectSpread({ clipPath }, filterProps(props, true)), rect)), /* @__PURE__ */ React$1.createElement(CartesianLabelContextProvider, rect, /* @__PURE__ */ React$1.createElement(CartesianLabelFromLabelProp, { label: props.label }), props.children));
}
function ReferenceAreaSettingsDispatcher(props) {
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(ReportReferenceArea, {
		yAxisId: props.yAxisId,
		xAxisId: props.xAxisId,
		ifOverflow: props.ifOverflow,
		x1: props.x1,
		x2: props.x2,
		y1: props.y1,
		y2: props.y2
	}), /* @__PURE__ */ React$1.createElement(ReferenceAreaImpl, props));
}
var ReferenceArea = class extends Component {
	render() {
		return /* @__PURE__ */ React$1.createElement(ReferenceAreaSettingsDispatcher, this.props);
	}
};
_defineProperty(ReferenceArea, "displayName", "ReferenceArea");
_defineProperty(ReferenceArea, "defaultProps", {
	ifOverflow: "discard",
	xAxisId: 0,
	yAxisId: 0,
	r: 10,
	fill: "#ccc",
	fillOpacity: .5,
	stroke: "none",
	strokeWidth: 1
});
function getIntervalEndExclusive(start, interval) {
	if (interval === "15m") return addMinutes(start, 15);
	if (interval === "1h") return addHours(start, 1);
	return addDays(start, 1);
}
function resolveUsageChartBrushDateRange(points, leftIndex, rightIndex, interval) {
	if (points.length === 0) return null;
	const startIndex = Math.min(leftIndex, rightIndex);
	const endIndex = Math.max(leftIndex, rightIndex);
	if (!Number.isInteger(startIndex) || !Number.isInteger(endIndex) || startIndex < 0 || endIndex >= points.length || startIndex === endIndex) return null;
	const from = points[startIndex]?.day;
	const lastBucketStart = points[endIndex]?.day;
	if (!from || !lastBucketStart) return null;
	return {
		from,
		to: interval === "1d" ? endOfDay(lastBucketStart) : /* @__PURE__ */ new Date(getIntervalEndExclusive(lastBucketStart, interval).getTime() - 1)
	};
}
const USAGE_CHART_BRUSH_SURFACE_CLASS = "h-full w-full outline-none [&_.recharts-wrapper]:outline-none [&_.recharts-wrapper_*]:outline-none [&_svg]:outline-none [&_svg:focus]:outline-none [&_.recharts-surface:focus]:outline-none";
function useUsageChartBrushSelect({ points, chartInterval, onDateRangeChange, enabled = true }) {
	const [anchorIndex, setAnchorIndex] = useState(null);
	const [focusIndex, setFocusIndex] = useState(null);
	const selectingRef = useRef(false);
	const anchorRef = useRef(null);
	const focusRef = useRef(null);
	const pointsRef = useRef(points);
	const intervalRef = useRef(chartInterval);
	const onDateRangeChangeRef = useRef(onDateRangeChange);
	pointsRef.current = points;
	intervalRef.current = chartInterval;
	onDateRangeChangeRef.current = onDateRangeChange;
	const isSelecting = anchorIndex !== null;
	const canSelect = enabled && typeof onDateRangeChange === "function" && points.length > 1;
	const resetSelection = useCallback(() => {
		selectingRef.current = false;
		anchorRef.current = null;
		focusRef.current = null;
		setAnchorIndex(null);
		setFocusIndex(null);
	}, []);
	const commitSelection = useCallback(() => {
		const left = anchorRef.current;
		const right = focusRef.current;
		resetSelection();
		if (left == null || right == null) return;
		const nextRange = resolveUsageChartBrushDateRange(pointsRef.current, left, right, intervalRef.current);
		if (!nextRange) return;
		onDateRangeChangeRef.current?.(nextRange);
	}, [resetSelection]);
	useEffect(() => {
		if (!isSelecting) return;
		const handleWindowMouseUp = () => {
			if (!selectingRef.current) return;
			commitSelection();
		};
		window.addEventListener("mouseup", handleWindowMouseUp);
		return () => window.removeEventListener("mouseup", handleWindowMouseUp);
	}, [commitSelection, isSelecting]);
	const readIndex = (state) => {
		const raw = state?.activeTooltipIndex ?? state?.activeIndex;
		if (typeof raw === "number" && Number.isFinite(raw)) return raw;
		if (typeof raw === "string" && raw !== "") {
			const parsed = Number(raw);
			return Number.isFinite(parsed) ? parsed : null;
		}
		return null;
	};
	const onMouseDown = useCallback((state) => {
		if (!canSelect) return;
		const index = readIndex(state);
		if (index == null) return;
		selectingRef.current = true;
		anchorRef.current = index;
		focusRef.current = index;
		setAnchorIndex(index);
		setFocusIndex(index);
	}, [canSelect]);
	const onMouseMove = useCallback((state) => {
		if (!canSelect || !selectingRef.current) return;
		const index = readIndex(state);
		if (index == null) return;
		focusRef.current = index;
		setFocusIndex(index);
	}, [canSelect]);
	const onMouseUp = useCallback(() => {
		if (!canSelect || !selectingRef.current) return;
		commitSelection();
	}, [canSelect, commitSelection]);
	return {
		canSelect,
		isSelecting,
		brushLeft: anchorIndex != null && focusIndex != null ? Math.min(anchorIndex, focusIndex) : null,
		brushRight: anchorIndex != null && focusIndex != null ? Math.max(anchorIndex, focusIndex) : null,
		surfaceClassName: cn(USAGE_CHART_BRUSH_SURFACE_CLASS, canSelect && "cursor-col-resize select-none"),
		chartProps: {
			accessibilityLayer: false,
			...canSelect ? {
				onMouseDown,
				onMouseMove,
				onMouseUp
			} : {}
		}
	};
}
function UsageChartBrushReferenceArea({ left, right }) {
	if (left == null || right == null || left === right) return null;
	return /* @__PURE__ */ jsx(ReferenceArea, {
		x1: left,
		x2: right,
		stroke: "var(--selection-background)",
		strokeOpacity: .35,
		fill: "var(--selection-background)",
		fillOpacity: .25,
		ifOverflow: "visible"
	});
}
export { useUsageChartBrushSelect as n, UsageChartBrushReferenceArea as t };
