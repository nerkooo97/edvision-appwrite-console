import { A as warn, B as selectAxisPropsNeededForCartesianGridTicksGenerator, Ht as useAppSelector, Nt as getTicksOfAxis, St as useOffsetInternal, Xt as svgPropertiesNoEvents, a as getTicks, bt as useChartWidth, dt as resolveDefaultProps, i as defaultCartesianAxisProps, in as isNumber, jt as getCoordinatesOfGrid, vt as useChartHeight, wt as useIsPanorama } from "./CartesianChart-IK-OMdOm.js";
import * as React$1 from "react";
var _excluded = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], _excluded2 = ["offset"], _excluded3 = ["xAxisId", "yAxisId"], _excluded4 = ["xAxisId", "yAxisId"];
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
var Background = (props) => {
	var { fill } = props;
	if (!fill || fill === "none") return null;
	var { fillOpacity, x, y, width, height, ry } = props;
	return /* @__PURE__ */ React$1.createElement("rect", {
		x,
		y,
		ry,
		width,
		height,
		stroke: "none",
		fill,
		fillOpacity,
		className: "recharts-cartesian-grid-bg"
	});
};
function renderLineItem(option, props) {
	var lineItem;
	if (/* @__PURE__ */ React$1.isValidElement(option)) lineItem = /* @__PURE__ */ React$1.cloneElement(option, props);
	else if (typeof option === "function") lineItem = option(props);
	else {
		var { x1, y1, x2, y2, key } = props;
		var _svgPropertiesNoEvent = svgPropertiesNoEvents(_objectWithoutProperties(props, _excluded)), { offset: __ } = _svgPropertiesNoEvent, restOfFilteredProps = _objectWithoutProperties(_svgPropertiesNoEvent, _excluded2);
		lineItem = /* @__PURE__ */ React$1.createElement("line", _extends({}, restOfFilteredProps, {
			x1,
			y1,
			x2,
			y2,
			fill: "none",
			key
		}));
	}
	return lineItem;
}
function HorizontalGridLines(props) {
	var { x, width, horizontal = true, horizontalPoints } = props;
	if (!horizontal || !horizontalPoints || !horizontalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties(props, _excluded3);
	var items = horizontalPoints.map((entry, i) => {
		return renderLineItem(horizontal, _objectSpread(_objectSpread({}, otherLineItemProps), {}, {
			x1: x,
			y1: entry,
			x2: x + width,
			y2: entry,
			key: "line-".concat(i),
			index: i
		}));
	});
	return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
}
function VerticalGridLines(props) {
	var { y, height, vertical = true, verticalPoints } = props;
	if (!vertical || !verticalPoints || !verticalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties(props, _excluded4);
	var items = verticalPoints.map((entry, i) => {
		return renderLineItem(vertical, _objectSpread(_objectSpread({}, otherLineItemProps), {}, {
			x1: entry,
			y1: y,
			x2: entry,
			y2: y + height,
			key: "line-".concat(i),
			index: i
		}));
	});
	return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
}
function HorizontalStripes(props) {
	var { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal = true } = props;
	if (!horizontal || !horizontalFill || !horizontalFill.length) return null;
	var roundedSortedHorizontalPoints = horizontalPoints.map((e) => Math.round(e + y - y)).sort((a, b) => a - b);
	if (y !== roundedSortedHorizontalPoints[0]) roundedSortedHorizontalPoints.unshift(0);
	var items = roundedSortedHorizontalPoints.map((entry, i) => {
		var lineHeight = !roundedSortedHorizontalPoints[i + 1] ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
		if (lineHeight <= 0) return null;
		var colorIndex = i % horizontalFill.length;
		return /* @__PURE__ */ React$1.createElement("rect", {
			key: "react-".concat(i),
			y: entry,
			x,
			height: lineHeight,
			width,
			stroke: "none",
			fill: horizontalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
}
function VerticalStripes(props) {
	var { vertical = true, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
	if (!vertical || !verticalFill || !verticalFill.length) return null;
	var roundedSortedVerticalPoints = verticalPoints.map((e) => Math.round(e + x - x)).sort((a, b) => a - b);
	if (x !== roundedSortedVerticalPoints[0]) roundedSortedVerticalPoints.unshift(0);
	var items = roundedSortedVerticalPoints.map((entry, i) => {
		var lineWidth = !roundedSortedVerticalPoints[i + 1] ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
		if (lineWidth <= 0) return null;
		var colorIndex = i % verticalFill.length;
		return /* @__PURE__ */ React$1.createElement("rect", {
			key: "react-".concat(i),
			x: entry,
			y,
			width: lineWidth,
			height,
			stroke: "none",
			fill: verticalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
}
var defaultVerticalCoordinatesGenerator = (_ref, syncWithTicks) => {
	var { xAxis, width, height, offset } = _ref;
	return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, defaultCartesianAxisProps), xAxis), {}, {
		ticks: getTicksOfAxis(xAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = (_ref2, syncWithTicks) => {
	var { yAxis, width, height, offset } = _ref2;
	return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, defaultCartesianAxisProps), yAxis), {}, {
		ticks: getTicksOfAxis(yAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
	horizontal: true,
	vertical: true,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0
};
function CartesianGrid(props) {
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	var offset = useOffsetInternal();
	var propsIncludingDefaults = _objectSpread(_objectSpread({}, resolveDefaultProps(props, defaultProps)), {}, {
		x: isNumber(props.x) ? props.x : offset.left,
		y: isNumber(props.y) ? props.y : offset.top,
		width: isNumber(props.width) ? props.width : offset.width,
		height: isNumber(props.height) ? props.height : offset.height
	});
	var { xAxisId, yAxisId, x, y, width, height, syncWithTicks, horizontalValues, verticalValues } = propsIncludingDefaults;
	var isPanorama = useIsPanorama();
	var xAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "xAxis", xAxisId, isPanorama));
	var yAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "yAxis", yAxisId, isPanorama));
	if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x) || x !== +x || !isNumber(y) || y !== +y) return null;
	var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
	var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
	var { horizontalPoints, verticalPoints } = propsIncludingDefaults;
	if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === "function") {
		var isHorizontalValues = horizontalValues && horizontalValues.length;
		var generatorResult = horizontalCoordinatesGenerator({
			yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, { ticks: isHorizontalValues ? horizontalValues : yAxis.ticks }) : void 0,
			width: chartWidth,
			height: chartHeight,
			offset
		}, isHorizontalValues ? true : syncWithTicks);
		warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof generatorResult, "]"));
		if (Array.isArray(generatorResult)) horizontalPoints = generatorResult;
	}
	if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === "function") {
		var isVerticalValues = verticalValues && verticalValues.length;
		var _generatorResult = verticalCoordinatesGenerator({
			xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, { ticks: isVerticalValues ? verticalValues : xAxis.ticks }) : void 0,
			width: chartWidth,
			height: chartHeight,
			offset
		}, isVerticalValues ? true : syncWithTicks);
		warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _generatorResult, "]"));
		if (Array.isArray(_generatorResult)) verticalPoints = _generatorResult;
	}
	return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-grid" }, /* @__PURE__ */ React$1.createElement(Background, {
		fill: propsIncludingDefaults.fill,
		fillOpacity: propsIncludingDefaults.fillOpacity,
		x: propsIncludingDefaults.x,
		y: propsIncludingDefaults.y,
		width: propsIncludingDefaults.width,
		height: propsIncludingDefaults.height,
		ry: propsIncludingDefaults.ry
	}), /* @__PURE__ */ React$1.createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, { horizontalPoints })), /* @__PURE__ */ React$1.createElement(VerticalStripes, _extends({}, propsIncludingDefaults, { verticalPoints })), /* @__PURE__ */ React$1.createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
		offset,
		horizontalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ React$1.createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
		offset,
		verticalPoints,
		xAxis,
		yAxis
	})));
}
CartesianGrid.displayName = "CartesianGrid";
export { CartesianGrid as t };
