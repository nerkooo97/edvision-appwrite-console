import { At as getCateCoordinateOfLine, Bt as createSelector, C as SetLegendPayload, Dt as getBandSizeOfAxis, E as LabelListFromLabelProp, F as selectActiveTooltipIndex, Ft as getValueByDataKey, Gt as Layer, H as selectAxisWithScale, Ht as useAppSelector, It as isCategoricalAxis, K as selectTicksOfGraphicalItem, M as arrayTooltipSearcher, Mt as getNormalizedStackId, N as useChartName, Pt as getTooltipNameProp, S as RegisterGraphicalItemId, T as CartesianLabelListContextProvider, W as selectStackGroups, Xt as svgPropertiesNoEvents, Yt as isClipDot, Zt as adaptEventHandlers, _ as useActiveTooltipDataPoints, _t as selectChartLayout, at as selectChartDataWithIndexesIfNotInPanorama, ct as useAnimationId, dt as resolveDefaultProps, en as interpolate, et as getStackSeriesIdentifier, ft as Curve, g as useNeedsClip, h as GraphicalItemClipPath, in as isNumber, lt as JavascriptAnimate, mt as Global, nn as isNullish, pt as isWellBehavedNumber, q as selectUnfilteredCartesianItems, qt as filterProps, t as CartesianChart, tn as isNan, v as usePlotArea, w as SetTooltipEntrySettings, wt as useIsPanorama, x as SetCartesianGraphicalItem, yt as useChartLayout } from "./CartesianChart-IK-OMdOm.js";
import * as React$1 from "react";
import { PureComponent, cloneElement, forwardRef, isValidElement, useCallback, useRef, useState } from "react";
import { clsx } from "clsx";
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
var Dot = (props) => {
	var { cx, cy, r, className } = props;
	var layerClass = clsx("recharts-dot", className);
	if (cx === +cx && cy === +cy && r === +r) return /* @__PURE__ */ React$1.createElement("circle", _extends$1({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
		className: layerClass,
		cx,
		cy,
		r
	}));
	return null;
};
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r$1) {
			_defineProperty$1(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var renderActivePoint = (_ref) => {
	var { point, childIndex, mainColor, activeDot, dataKey } = _ref;
	if (activeDot === false || point.x == null || point.y == null) return null;
	var dotProps = _objectSpread$1(_objectSpread$1({
		index: childIndex,
		dataKey,
		cx: point.x,
		cy: point.y,
		r: 4,
		fill: mainColor !== null && mainColor !== void 0 ? mainColor : "none",
		strokeWidth: 2,
		stroke: "#fff",
		payload: point.payload,
		value: point.value
	}, filterProps(activeDot, false)), adaptEventHandlers(activeDot));
	var dot;
	if (/* @__PURE__ */ isValidElement(activeDot)) dot = /* @__PURE__ */ cloneElement(activeDot, dotProps);
	else if (typeof activeDot === "function") dot = activeDot(dotProps);
	else dot = /* @__PURE__ */ React$1.createElement(Dot, dotProps);
	return /* @__PURE__ */ React$1.createElement(Layer, { className: "recharts-active-dot" }, dot);
};
function ActivePoints(_ref2) {
	var { points, mainColor, activeDot, itemDataKey } = _ref2;
	var activeTooltipIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataPoints = useActiveTooltipDataPoints();
	if (points == null || activeDataPoints == null) return null;
	var activePoint = points.find((p) => activeDataPoints.includes(p.payload));
	if (isNullish(activePoint)) return null;
	return renderActivePoint({
		point: activePoint,
		childIndex: Number(activeTooltipIndex),
		mainColor,
		dataKey: itemDataKey,
		activeDot
	});
}
var selectXAxisWithScale = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
var selectXAxisTicks = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
var selectYAxisWithScale = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
var selectYAxisTicks = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
var selectBandSize = createSelector([
	selectChartLayout,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
	if (isCategoricalAxis(layout, "xAxis")) return getBandSizeOfAxis(xAxis, xAxisTicks, false);
	return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickAreaId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
var selectSynchronisedAreaSettings = createSelector([selectUnfilteredCartesianItems, pickAreaId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "area").find((item) => item.id === id));
var selectGraphicalItemStackedData = (state, xAxisId, yAxisId, isPanorama, id) => {
	var _stackGroups$stackId;
	var areaSettings = selectSynchronisedAreaSettings(state, xAxisId, yAxisId, isPanorama, id);
	if (areaSettings == null) return;
	var isXAxisCategorical = isCategoricalAxis(selectChartLayout(state), "xAxis");
	var stackGroups;
	if (isXAxisCategorical) stackGroups = selectStackGroups(state, "yAxis", yAxisId, isPanorama);
	else stackGroups = selectStackGroups(state, "xAxis", xAxisId, isPanorama);
	if (stackGroups == null) return;
	var { stackId } = areaSettings;
	var stackSeriesIdentifier = getStackSeriesIdentifier(areaSettings);
	if (stackId == null || stackSeriesIdentifier == null) return;
	var groups = (_stackGroups$stackId = stackGroups[stackId]) === null || _stackGroups$stackId === void 0 ? void 0 : _stackGroups$stackId.stackedData;
	return groups === null || groups === void 0 ? void 0 : groups.find((v) => v.key === stackSeriesIdentifier);
};
var selectArea = createSelector([
	selectChartLayout,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	selectGraphicalItemStackedData,
	selectChartDataWithIndexesIfNotInPanorama,
	selectBandSize,
	selectSynchronisedAreaSettings
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, _ref, bandSize, areaSettings) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (areaSettings == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null) return;
	var { data } = areaSettings;
	var displayedData;
	if (data && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeArea({
		layout,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		dataStartIndex,
		areaSettings,
		stackedData,
		displayedData,
		chartBaseValue: void 0,
		bandSize
	});
});
var _excluded = ["id"], _excluded2 = [
	"activeDot",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"fill",
	"fillOpacity",
	"hide",
	"isAnimationActive",
	"legendType",
	"stroke",
	"xAxisId",
	"yAxisId"
];
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
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
function getLegendItemColor(stroke, fill) {
	return stroke && stroke !== "none" ? stroke : fill;
}
var computeLegendPayloadFromAreaData = (props) => {
	var { dataKey, name, stroke, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: getLegendItemColor(stroke, fill),
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
function getTooltipEntrySettings(props) {
	var { dataKey, data, stroke, strokeWidth, fill, name, hide, unit } = props;
	return {
		dataDefinedOnItem: data,
		positions: void 0,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: props.tooltipType,
			color: getLegendItemColor(stroke, fill),
			unit
		}
	};
}
var renderDotItem = (option, props) => {
	var dotItem;
	if (/* @__PURE__ */ React$1.isValidElement(option)) dotItem = /* @__PURE__ */ React$1.cloneElement(option, props);
	else if (typeof option === "function") dotItem = option(props);
	else {
		var className = clsx("recharts-area-dot", typeof option !== "boolean" ? option.className : "");
		dotItem = /* @__PURE__ */ React$1.createElement(Dot, _extends({}, props, { className }));
	}
	return dotItem;
};
function shouldRenderDots(points, dot) {
	if (points == null) return false;
	if (dot) return true;
	return points.length === 1;
}
function Dots(_ref) {
	var { clipPathId, points, props } = _ref;
	var { needClip, dot, dataKey } = props;
	if (!shouldRenderDots(points, dot)) return null;
	var clipDot = isClipDot(dot);
	var areaProps = svgPropertiesNoEvents(props);
	var customDotProps = filterProps(dot, true);
	var dots = points.map((entry, i) => {
		return renderDotItem(dot, _objectSpread(_objectSpread(_objectSpread({
			key: "dot-".concat(i),
			r: 3
		}, areaProps), customDotProps), {}, {
			index: i,
			cx: entry.x,
			cy: entry.y,
			dataKey,
			value: entry.value,
			payload: entry.payload,
			points
		}));
	});
	var dotsProps = { clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0 };
	return /* @__PURE__ */ React$1.createElement(Layer, _extends({ className: "recharts-area-dots" }, dotsProps), dots);
}
function AreaLabelListProvider(_ref2) {
	var { showLabels, children, points } = _ref2;
	var labelListEntries = points.map((point) => {
		var viewBox = {
			x: point.x,
			y: point.y,
			width: 0,
			height: 0
		};
		return _objectSpread(_objectSpread({}, viewBox), {}, {
			value: point.value,
			payload: point.payload,
			parentViewBox: void 0,
			viewBox,
			fill: void 0
		});
	});
	return /* @__PURE__ */ React$1.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : null }, children);
}
function StaticArea(_ref3) {
	var { points, baseLine, needClip, clipPathId, props } = _ref3;
	var { layout, type, stroke, connectNulls, isRange } = props;
	var { id } = props, propsWithoutId = _objectWithoutProperties(props, _excluded);
	var allOtherProps = svgPropertiesNoEvents(propsWithoutId);
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ React$1.createElement(Layer, { clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0 }, /* @__PURE__ */ React$1.createElement(Curve, _extends({}, allOtherProps, {
		id,
		points,
		connectNulls,
		type,
		baseLine,
		layout,
		stroke: "none",
		className: "recharts-area-area"
	})), stroke !== "none" && /* @__PURE__ */ React$1.createElement(Curve, _extends({}, allOtherProps, {
		className: "recharts-area-curve",
		layout,
		type,
		connectNulls,
		fill: "none",
		points
	})), stroke !== "none" && isRange && /* @__PURE__ */ React$1.createElement(Curve, _extends({}, allOtherProps, {
		className: "recharts-area-curve",
		layout,
		type,
		connectNulls,
		fill: "none",
		points: baseLine
	}))), /* @__PURE__ */ React$1.createElement(Dots, {
		points,
		props: propsWithoutId,
		clipPathId
	}));
}
function VerticalRect(_ref4) {
	var { alpha, baseLine, points, strokeWidth } = _ref4;
	var startY = points[0].y;
	var endY = points[points.length - 1].y;
	if (!isWellBehavedNumber(startY) || !isWellBehavedNumber(endY)) return null;
	var height = alpha * Math.abs(startY - endY);
	var maxX = Math.max(...points.map((entry) => entry.x || 0));
	if (isNumber(baseLine)) maxX = Math.max(baseLine, maxX);
	else if (baseLine && Array.isArray(baseLine) && baseLine.length) maxX = Math.max(...baseLine.map((entry) => entry.x || 0), maxX);
	if (isNumber(maxX)) return /* @__PURE__ */ React$1.createElement("rect", {
		x: 0,
		y: startY < endY ? startY : startY - height,
		width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
		height: Math.floor(height)
	});
	return null;
}
function HorizontalRect(_ref5) {
	var { alpha, baseLine, points, strokeWidth } = _ref5;
	var startX = points[0].x;
	var endX = points[points.length - 1].x;
	if (!isWellBehavedNumber(startX) || !isWellBehavedNumber(endX)) return null;
	var width = alpha * Math.abs(startX - endX);
	var maxY = Math.max(...points.map((entry) => entry.y || 0));
	if (isNumber(baseLine)) maxY = Math.max(baseLine, maxY);
	else if (baseLine && Array.isArray(baseLine) && baseLine.length) maxY = Math.max(...baseLine.map((entry) => entry.y || 0), maxY);
	if (isNumber(maxY)) return /* @__PURE__ */ React$1.createElement("rect", {
		x: startX < endX ? startX : startX - width,
		y: 0,
		width,
		height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
	});
	return null;
}
function ClipRect(_ref6) {
	var { alpha, layout, points, baseLine, strokeWidth } = _ref6;
	if (layout === "vertical") return /* @__PURE__ */ React$1.createElement(VerticalRect, {
		alpha,
		points,
		baseLine,
		strokeWidth
	});
	return /* @__PURE__ */ React$1.createElement(HorizontalRect, {
		alpha,
		points,
		baseLine,
		strokeWidth
	});
}
function AreaWithAnimation(_ref7) {
	var { needClip, clipPathId, props, previousPointsRef, previousBaselineRef } = _ref7;
	var { points, baseLine, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationStart, onAnimationEnd } = props;
	var animationId = useAnimationId(props, "recharts-area-");
	var [isAnimating, setIsAnimating] = useState(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = useCallback(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = useCallback(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	var prevPoints = previousPointsRef.current;
	var prevBaseLine = previousBaselineRef.current;
	return /* @__PURE__ */ React$1.createElement(AreaLabelListProvider, {
		showLabels,
		points
	}, props.children, /* @__PURE__ */ React$1.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		if (prevPoints) {
			var prevPointsDiffFactor = prevPoints.length / points.length;
			var stepPoints = t === 1 ? points : points.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (prevPoints[prevPointIndex]) {
					var prev = prevPoints[prevPointIndex];
					return _objectSpread(_objectSpread({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				return entry;
			});
			var stepBaseLine;
			if (isNumber(baseLine)) stepBaseLine = interpolate(prevBaseLine, baseLine, t);
			else if (isNullish(baseLine) || isNan(baseLine)) stepBaseLine = interpolate(prevBaseLine, 0, t);
			else stepBaseLine = baseLine.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (Array.isArray(prevBaseLine) && prevBaseLine[prevPointIndex]) {
					var prev = prevBaseLine[prevPointIndex];
					return _objectSpread(_objectSpread({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				return entry;
			});
			if (t > 0) {
				previousPointsRef.current = stepPoints;
				previousBaselineRef.current = stepBaseLine;
			}
			return /* @__PURE__ */ React$1.createElement(StaticArea, {
				points: stepPoints,
				baseLine: stepBaseLine,
				needClip,
				clipPathId,
				props
			});
		}
		if (t > 0) {
			previousPointsRef.current = points;
			previousBaselineRef.current = baseLine;
		}
		return /* @__PURE__ */ React$1.createElement(Layer, null, isAnimationActive && /* @__PURE__ */ React$1.createElement("defs", null, /* @__PURE__ */ React$1.createElement("clipPath", { id: "animationClipPath-".concat(clipPathId) }, /* @__PURE__ */ React$1.createElement(ClipRect, {
			alpha: t,
			points,
			baseLine,
			layout: props.layout,
			strokeWidth: props.strokeWidth
		}))), /* @__PURE__ */ React$1.createElement(Layer, { clipPath: "url(#animationClipPath-".concat(clipPathId, ")") }, /* @__PURE__ */ React$1.createElement(StaticArea, {
			points,
			baseLine,
			needClip,
			clipPathId,
			props
		})));
	}), /* @__PURE__ */ React$1.createElement(LabelListFromLabelProp, { label: props.label }));
}
function RenderArea(_ref8) {
	var { needClip, clipPathId, props } = _ref8;
	var previousPointsRef = useRef(null);
	var previousBaselineRef = useRef();
	return /* @__PURE__ */ React$1.createElement(AreaWithAnimation, {
		needClip,
		clipPathId,
		props,
		previousPointsRef,
		previousBaselineRef
	});
}
var AreaWithState = class extends PureComponent {
	render() {
		var _filterProps;
		var { hide, dot, points, className, top, left, needClip, xAxisId, yAxisId, width, height, id, baseLine } = this.props;
		if (hide) return null;
		var layerClass = clsx("recharts-area", className);
		var clipPathId = id;
		var { r = 3, strokeWidth = 2 } = (_filterProps = filterProps(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
			r: 3,
			strokeWidth: 2
		};
		var clipDot = isClipDot(dot);
		var dotSize = r * 2 + strokeWidth;
		return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(Layer, { className: layerClass }, needClip && /* @__PURE__ */ React$1.createElement("defs", null, /* @__PURE__ */ React$1.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		}), !clipDot && /* @__PURE__ */ React$1.createElement("clipPath", { id: "clipPath-dots-".concat(clipPathId) }, /* @__PURE__ */ React$1.createElement("rect", {
			x: left - dotSize / 2,
			y: top - dotSize / 2,
			width: width + dotSize,
			height: height + dotSize
		}))), /* @__PURE__ */ React$1.createElement(RenderArea, {
			needClip,
			clipPathId,
			props: this.props
		})), /* @__PURE__ */ React$1.createElement(ActivePoints, {
			points,
			mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot
		}), this.props.isRange && Array.isArray(baseLine) && /* @__PURE__ */ React$1.createElement(ActivePoints, {
			points: baseLine,
			mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot
		}));
	}
};
var defaultAreaProps = {
	activeDot: true,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	connectNulls: false,
	dot: false,
	fill: "#3182bd",
	fillOpacity: .6,
	hide: false,
	isAnimationActive: !Global.isSsr,
	legendType: "line",
	stroke: "#3182bd",
	xAxisId: 0,
	yAxisId: 0
};
function AreaImpl(props) {
	var _useAppSelector;
	var _resolveDefaultProps = resolveDefaultProps(props, defaultAreaProps), { activeDot, animationBegin, animationDuration, animationEasing, connectNulls, dot, fill, fillOpacity, hide, isAnimationActive, legendType, stroke, xAxisId, yAxisId } = _resolveDefaultProps, everythingElse = _objectWithoutProperties(_resolveDefaultProps, _excluded2);
	var layout = useChartLayout();
	var chartName = useChartName();
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var isPanorama = useIsPanorama();
	var { points, isRange, baseLine } = (_useAppSelector = useAppSelector((state) => selectArea(state, xAxisId, yAxisId, isPanorama, props.id))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
	var plotArea = usePlotArea();
	if (layout !== "horizontal" && layout !== "vertical" || plotArea == null) return null;
	if (chartName !== "AreaChart" && chartName !== "ComposedChart") return null;
	var { height, width, x: left, y: top } = plotArea;
	if (!points || !points.length) return null;
	return /* @__PURE__ */ React$1.createElement(AreaWithState, _extends({}, everythingElse, {
		activeDot,
		animationBegin,
		animationDuration,
		animationEasing,
		baseLine,
		connectNulls,
		dot,
		fill,
		fillOpacity,
		height,
		hide,
		layout,
		isAnimationActive,
		isRange,
		legendType,
		needClip,
		points,
		stroke,
		width,
		left,
		top,
		xAxisId,
		yAxisId
	}));
}
var getBaseValue = (layout, chartBaseValue, itemBaseValue, xAxis, yAxis) => {
	var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
	if (isNumber(baseValue)) return baseValue;
	var numericAxis = layout === "horizontal" ? yAxis : xAxis;
	var domain = numericAxis.scale.domain();
	if (numericAxis.type === "number") {
		var domainMax = Math.max(domain[0], domain[1]);
		var domainMin = Math.min(domain[0], domain[1]);
		if (baseValue === "dataMin") return domainMin;
		if (baseValue === "dataMax") return domainMax;
		return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
	}
	if (baseValue === "dataMin") return domain[0];
	if (baseValue === "dataMax") return domain[1];
	return domain[0];
};
function computeArea(_ref9) {
	var { areaSettings: { connectNulls, baseValue: itemBaseValue, dataKey }, stackedData, layout, chartBaseValue, xAxis, yAxis, displayedData, dataStartIndex, xAxisTicks, yAxisTicks, bandSize } = _ref9;
	var hasStack = stackedData && stackedData.length;
	var baseValue = getBaseValue(layout, chartBaseValue, itemBaseValue, xAxis, yAxis);
	var isHorizontalLayout = layout === "horizontal";
	var isRange = false;
	var points = displayedData.map((entry, index) => {
		var value;
		if (hasStack) value = stackedData[dataStartIndex + index];
		else {
			value = getValueByDataKey(entry, dataKey);
			if (!Array.isArray(value)) value = [baseValue, value];
			else isRange = true;
		}
		var isBreakPoint = value[1] == null || hasStack && !connectNulls && getValueByDataKey(entry, dataKey) == null;
		if (isHorizontalLayout) return {
			x: getCateCoordinateOfLine({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				entry,
				index
			}),
			y: isBreakPoint ? null : yAxis.scale(value[1]),
			value,
			payload: entry
		};
		return {
			x: isBreakPoint ? null : xAxis.scale(value[1]),
			y: getCateCoordinateOfLine({
				axis: yAxis,
				ticks: yAxisTicks,
				bandSize,
				entry,
				index
			}),
			value,
			payload: entry
		};
	});
	var baseLine;
	if (hasStack || isRange) baseLine = points.map((entry) => {
		var x = Array.isArray(entry.value) ? entry.value[0] : null;
		if (isHorizontalLayout) return {
			x: entry.x,
			y: x != null && entry.y != null ? yAxis.scale(x) : null,
			payload: entry.payload
		};
		return {
			x: x != null ? xAxis.scale(x) : null,
			y: entry.y,
			payload: entry.payload
		};
	});
	else baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
	return {
		points,
		baseLine,
		isRange
	};
}
function AreaFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultAreaProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ React$1.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "area"
	}, (id) => /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromAreaData(props) }), /* @__PURE__ */ React$1.createElement(SetTooltipEntrySettings, {
		fn: getTooltipEntrySettings,
		args: props
	}), /* @__PURE__ */ React$1.createElement(SetCartesianGraphicalItem, {
		type: "area",
		id,
		data: props.data,
		dataKey: props.dataKey,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		stackId: getNormalizedStackId(props.stackId),
		hide: props.hide,
		barSize: void 0,
		baseValue: props.baseValue,
		isPanorama,
		connectNulls: props.connectNulls
	}), /* @__PURE__ */ React$1.createElement(AreaImpl, _extends({}, props, { id }))));
}
var Area = /* @__PURE__ */ React$1.memo(AreaFn);
Area.displayName = "Area";
var allowedTooltipTypes = ["axis"];
var AreaChart = /* @__PURE__ */ forwardRef((props, ref) => {
	return /* @__PURE__ */ React$1.createElement(CartesianChart, {
		chartName: "AreaChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
export { Dot as i, Area as n, ActivePoints as r, AreaChart as t };
