import { $ as isStacked, $t as getPercentValue, Bt as createSelector, C as SetLegendPayload, Dt as getBandSizeOfAxis, E as LabelListFromLabelProp, Et as selectChartOffsetInternal, F as selectActiveTooltipIndex, Ft as getValueByDataKey, Gt as Layer, H as selectAxisWithScale, Ht as useAppSelector, I as mouseLeaveItem, Jt as findAllByType, K as selectTicksOfGraphicalItem, L as setActiveClickItemIndex, Lt as truncateByDomain, M as arrayTooltipSearcher, Mt as getNormalizedStackId, Ot as getBaseValueOfBar, P as selectActiveTooltipDataKey, Pt as getTooltipNameProp, Qt as adaptEventsOfChild, R as setActiveMouseOverItemIndex, S as RegisterGraphicalItemId, T as CartesianLabelListContextProvider, Tt as selectAxisViewBox, U as selectCartesianAxisSize, Vt as useAppDispatch, W as selectStackGroups, Xt as svgPropertiesNoEvents, _t as selectChartLayout, an as mathSign, at as selectChartDataWithIndexesIfNotInPanorama, ct as useAnimationId, dt as resolveDefaultProps, en as interpolate, et as getStackSeriesIdentifier, g as useNeedsClip, h as GraphicalItemClipPath, in as isNumber, it as selectRootMaxBarSize, kt as getCateCoordinateOfBar, lt as JavascriptAnimate, mt as Global, nn as isNullish, nt as selectBarGap, on as upperFirst, ot as Sector, pt as isWellBehavedNumber, q as selectUnfilteredCartesianItems, qt as filterProps, rt as selectRootBarSize, st as Rectangle, t as CartesianChart, tn as isNan, tt as selectBarCategoryGap, ut as getTransitionVal, w as SetTooltipEntrySettings, wt as useIsPanorama, x as SetCartesianGraphicalItem, yt as useChartLayout } from "./CartesianChart-IK-OMdOm.js";
import { t as SetErrorBarContext } from "./ErrorBarContext-BLfTus07.js";
import invariant from "tiny-invariant";
import * as React$1 from "react";
import { PureComponent, cloneElement, forwardRef, isValidElement, useCallback, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { symbol, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye } from "victory-vendor/d3-shape";
import isPlainObject from "es-toolkit/compat/isPlainObject";
var _excluded$3 = [
	"type",
	"size",
	"sizeType"
];
function _extends$3() {
	return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$3.apply(null, arguments);
}
function ownKeys$5(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$5(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r$1) {
			_defineProperty$5(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$5(e, r, t) {
	return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
	var i = _toPrimitive$5(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$3(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var symbolFactories = {
	symbolCircle,
	symbolCross,
	symbolDiamond,
	symbolSquare,
	symbolStar,
	symbolTriangle,
	symbolWye
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = (type) => {
	return symbolFactories["symbol".concat(upperFirst(type))] || symbolCircle;
};
var calculateAreaSize = (size, sizeType, type) => {
	if (sizeType === "area") return size;
	switch (type) {
		case "cross": return 5 * size * size / 9;
		case "diamond": return .5 * size * size / Math.sqrt(3);
		case "square": return size * size;
		case "star":
			var angle = 18 * RADIAN;
			return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
		case "triangle": return Math.sqrt(3) * size * size / 4;
		case "wye": return (21 - 10 * Math.sqrt(3)) * size * size / 8;
		default: return Math.PI * size * size / 4;
	}
};
var registerSymbol = (key, factory) => {
	symbolFactories["symbol".concat(upperFirst(key))] = factory;
};
var Symbols = (_ref) => {
	var { type = "circle", size = 64, sizeType = "area" } = _ref;
	var props = _objectSpread$5(_objectSpread$5({}, _objectWithoutProperties$3(_ref, _excluded$3)), {}, {
		type,
		size,
		sizeType
	});
	var realType = "circle";
	if (typeof type === "string") realType = type;
	var getPath = () => {
		var symbolFactory = getSymbolFactory(realType);
		return symbol().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType))();
	};
	var { className, cx, cy } = props;
	var filteredProps = filterProps(props, true);
	if (cx === +cx && cy === +cy && size === +size) return /* @__PURE__ */ React$1.createElement("path", _extends$3({}, filteredProps, {
		className: clsx("recharts-symbols", className),
		transform: "translate(".concat(cx, ", ").concat(cy, ")"),
		d: getPath()
	}));
	return null;
};
Symbols.registerSymbol = registerSymbol;
var Cell = (_props) => null;
Cell.displayName = "Cell";
function ownKeys$4(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$4(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r$1) {
			_defineProperty$4(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$4(e, r, t) {
	return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
	var i = _toPrimitive$4(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$2() {
	return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$2.apply(null, arguments);
}
var getTrapezoidPath = (x, y, upperWidth, lowerWidth, height) => {
	var widthGap = upperWidth - lowerWidth;
	var path = "M ".concat(x, ",").concat(y);
	path += "L ".concat(x + upperWidth, ",").concat(y);
	path += "L ".concat(x + upperWidth - widthGap / 2, ",").concat(y + height);
	path += "L ".concat(x + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y + height);
	path += "L ".concat(x, ",").concat(y, " Z");
	return path;
};
var defaultProps = {
	x: 0,
	y: 0,
	upperWidth: 0,
	lowerWidth: 0,
	height: 0,
	isUpdateAnimationActive: false,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
};
var Trapezoid = (outsideProps) => {
	var trapezoidProps = resolveDefaultProps(outsideProps, defaultProps);
	var { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
	var { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;
	var pathRef = useRef();
	var [totalLength, setTotalLength] = useState(-1);
	var prevUpperWidthRef = useRef(upperWidth);
	var prevLowerWidthRef = useRef(lowerWidth);
	var prevHeightRef = useRef(height);
	var prevXRef = useRef(x);
	var prevYRef = useRef(y);
	var animationId = useAnimationId(outsideProps, "trapezoid-");
	useEffect(() => {
		if (pathRef.current && pathRef.current.getTotalLength) try {
			var pathTotalLength = pathRef.current.getTotalLength();
			if (pathTotalLength) setTotalLength(pathTotalLength);
		} catch (_unused) {}
	}, []);
	if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) return null;
	var layerClass = clsx("recharts-trapezoid", className);
	if (!isUpdateAnimationActive) return /* @__PURE__ */ React$1.createElement("g", null, /* @__PURE__ */ React$1.createElement("path", _extends$2({}, filterProps(trapezoidProps, true), {
		className: layerClass,
		d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
	})));
	var prevUpperWidth = prevUpperWidthRef.current;
	var prevLowerWidth = prevLowerWidthRef.current;
	var prevHeight = prevHeightRef.current;
	var prevX = prevXRef.current;
	var prevY = prevYRef.current;
	var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
	var to = "".concat(totalLength, "px 0px");
	var transition = getTransitionVal(["strokeDasharray"], animationDuration, animationEasing);
	return /* @__PURE__ */ React$1.createElement(JavascriptAnimate, {
		animationId,
		key: animationId,
		canBegin: totalLength > 0,
		duration: animationDuration,
		easing: animationEasing,
		isActive: isUpdateAnimationActive,
		begin: animationBegin
	}, (t) => {
		var currUpperWidth = interpolate(prevUpperWidth, upperWidth, t);
		var currLowerWidth = interpolate(prevLowerWidth, lowerWidth, t);
		var currHeight = interpolate(prevHeight, height, t);
		var currX = interpolate(prevX, x, t);
		var currY = interpolate(prevY, y, t);
		if (pathRef.current) {
			prevUpperWidthRef.current = currUpperWidth;
			prevLowerWidthRef.current = currLowerWidth;
			prevHeightRef.current = currHeight;
			prevXRef.current = currX;
			prevYRef.current = currY;
		}
		var animationStyle = t > 0 ? {
			transition,
			strokeDasharray: to
		} : { strokeDasharray: from };
		return /* @__PURE__ */ React$1.createElement("path", _extends$2({}, filterProps(trapezoidProps, true), {
			className: layerClass,
			d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
			ref: pathRef,
			style: _objectSpread$4(_objectSpread$4({}, animationStyle), trapezoidProps.style)
		}));
	});
};
var _excluded$2 = [
	"option",
	"shapeType",
	"propTransformer",
	"activeClassName",
	"isActive"
];
function _objectWithoutProperties$2(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$3(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$3(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r$1) {
			_defineProperty$3(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$3(e, r, t) {
	return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
	var i = _toPrimitive$3(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function defaultPropTransformer(option, props) {
	return _objectSpread$3(_objectSpread$3({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
	return shapeType === "symbols";
}
function ShapeSelector(_ref) {
	var { shapeType, elementProps } = _ref;
	switch (shapeType) {
		case "rectangle": return /* @__PURE__ */ React$1.createElement(Rectangle, elementProps);
		case "trapezoid": return /* @__PURE__ */ React$1.createElement(Trapezoid, elementProps);
		case "sector": return /* @__PURE__ */ React$1.createElement(Sector, elementProps);
		case "symbols":
			if (isSymbolsProps(shapeType, elementProps)) return /* @__PURE__ */ React$1.createElement(Symbols, elementProps);
			break;
		default: return null;
	}
}
function getPropsFromShapeOption(option) {
	if (/* @__PURE__ */ isValidElement(option)) return option.props;
	return option;
}
function Shape(_ref2) {
	var { option, shapeType, propTransformer = defaultPropTransformer, activeClassName = "recharts-active-shape", isActive } = _ref2, props = _objectWithoutProperties$2(_ref2, _excluded$2);
	var shape;
	if (/* @__PURE__ */ isValidElement(option)) shape = /* @__PURE__ */ cloneElement(option, _objectSpread$3(_objectSpread$3({}, props), getPropsFromShapeOption(option)));
	else if (typeof option === "function") shape = option(props);
	else if (isPlainObject(option) && typeof option !== "boolean") {
		var nextProps = propTransformer(option, props);
		shape = /* @__PURE__ */ React$1.createElement(ShapeSelector, {
			shapeType,
			elementProps: nextProps
		});
	} else {
		var elementProps = props;
		shape = /* @__PURE__ */ React$1.createElement(ShapeSelector, {
			shapeType,
			elementProps
		});
	}
	if (isActive) return /* @__PURE__ */ React$1.createElement(Layer, { className: activeClassName }, shape);
	return shape;
}
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
		dispatch(setActiveMouseOverItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition
		}));
	};
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
		dispatch(mouseLeaveItem());
	};
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
		dispatch(setActiveClickItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition
		}));
	};
};
var _excluded$1 = ["x", "y"];
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r$1) {
			_defineProperty$2(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i = _toPrimitive$2(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function typeguardBarRectangleProps(_ref, props) {
	var { x: xProp, y: yProp } = _ref, option = _objectWithoutProperties$1(_ref, _excluded$1);
	var xValue = "".concat(xProp);
	var x = parseInt(xValue, 10);
	var yValue = "".concat(yProp);
	var y = parseInt(yValue, 10);
	var heightValue = "".concat(props.height || option.height);
	var height = parseInt(heightValue, 10);
	var widthValue = "".concat(props.width || option.width);
	var width = parseInt(widthValue, 10);
	return _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, props), option), x ? { x } : {}), y ? { y } : {}), {}, {
		height,
		width,
		name: props.name,
		radius: props.radius
	});
}
function BarRectangle(props) {
	return /* @__PURE__ */ React$1.createElement(Shape, _extends$1({
		shapeType: "rectangle",
		propTransformer: typeguardBarRectangleProps,
		activeClassName: "recharts-active-bar"
	}, props));
}
var minPointSizeCallback = function minPointSizeCallback$1(minPointSize) {
	var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return (value, index) => {
		if (isNumber(minPointSize)) return minPointSize;
		var isValueNumberOrNil = isNumber(value) || isNullish(value);
		if (isValueNumberOrNil) return minPointSize(value, index);
		!isValueNumberOrNil && (process.env.NODE_ENV !== "production" ? invariant(false, "minPointSize callback function received a value with type of ".concat(typeof value, ". Currently only numbers or null/undefined are supported.")) : invariant(false));
		return defaultValue;
	};
};
var _excluded = [
	"onMouseEnter",
	"onMouseLeave",
	"onClick"
], _excluded2 = [
	"value",
	"background",
	"tooltipPosition"
], _excluded3 = ["id"], _excluded4 = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
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
var computeLegendPayloadFromBarData = (props) => {
	var { dataKey, name, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: fill,
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
function getTooltipEntrySettings(props) {
	var { dataKey, stroke, strokeWidth, fill, name, hide, unit } = props;
	return {
		dataDefinedOnItem: void 0,
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
			color: props.fill,
			unit
		}
	};
}
function BarBackground(props) {
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var { data, dataKey, background: backgroundFromProps, allOtherBarProps } = props;
	var { onMouseEnter: onMouseEnterFromProps, onMouseLeave: onMouseLeaveFromProps, onClick: onItemClickFromProps } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties(allOtherBarProps, _excluded);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
	if (!backgroundFromProps || data == null) return null;
	var backgroundProps = filterProps(backgroundFromProps, false);
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, data.map((entry, i) => {
		var { value, background: backgroundFromDataEntry, tooltipPosition } = entry, rest = _objectWithoutProperties(entry, _excluded2);
		if (!backgroundFromDataEntry) return null;
		var onMouseEnter = onMouseEnterFromContext(entry, i);
		var onMouseLeave = onMouseLeaveFromContext(entry, i);
		var onClick = onClickFromContext(entry, i);
		var barRectangleProps = _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({
			option: backgroundFromProps,
			isActive: String(i) === activeIndex
		}, rest), {}, { fill: "#eee" }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
			onMouseEnter,
			onMouseLeave,
			onClick,
			dataKey,
			index: i,
			className: "recharts-bar-background-rectangle"
		});
		return /* @__PURE__ */ React$1.createElement(BarRectangle, _extends({ key: "background-bar-".concat(barRectangleProps.index) }, barRectangleProps));
	}));
}
function BarLabelListProvider(_ref) {
	var { showLabels, children, rects } = _ref;
	var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
		var viewBox = {
			x: entry.x,
			y: entry.y,
			width: entry.width,
			height: entry.height
		};
		return _objectSpread$1(_objectSpread$1({}, viewBox), {}, {
			value: entry.value,
			payload: entry.payload,
			parentViewBox: entry.parentViewBox,
			viewBox,
			fill: entry.fill
		});
	});
	return /* @__PURE__ */ React$1.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function BarRectangleWithActiveState(props) {
	var { shape, activeBar, baseProps, entry, index, dataKey } = props;
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
	var isActive = activeBar && String(index) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
	var option = isActive ? activeBar : shape;
	return /* @__PURE__ */ React$1.createElement(BarRectangle, _extends({}, baseProps, entry, {
		isActive,
		option,
		index,
		dataKey
	}));
}
function BarRectangleNeverActive(props) {
	var { shape, baseProps, entry, index, dataKey } = props;
	return /* @__PURE__ */ React$1.createElement(BarRectangle, _extends({}, baseProps, entry, {
		isActive: false,
		option: shape,
		index,
		dataKey
	}));
}
function BarRectangles(_ref2) {
	var { data, props } = _ref2;
	var _svgPropertiesNoEvent = svgPropertiesNoEvents(props), { id } = _svgPropertiesNoEvent, baseProps = _objectWithoutProperties(_svgPropertiesNoEvent, _excluded3);
	var { shape, dataKey, activeBar } = props;
	var { onMouseEnter: onMouseEnterFromProps, onClick: onItemClickFromProps, onMouseLeave: onMouseLeaveFromProps } = props, restOfAllOtherProps = _objectWithoutProperties(props, _excluded4);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
	if (!data) return null;
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, data.map((entry, i) => {
		return /* @__PURE__ */ React$1.createElement(Layer, _extends({ className: "recharts-bar-rectangle" }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
			onMouseEnter: onMouseEnterFromContext(entry, i),
			onMouseLeave: onMouseLeaveFromContext(entry, i),
			onClick: onClickFromContext(entry, i),
			key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i)
		}), activeBar ? /* @__PURE__ */ React$1.createElement(BarRectangleWithActiveState, {
			shape,
			activeBar,
			baseProps,
			entry,
			index: i,
			dataKey
		}) : /* @__PURE__ */ React$1.createElement(BarRectangleNeverActive, {
			shape,
			baseProps,
			entry,
			index: i,
			dataKey
		}));
	}));
}
function RectanglesWithAnimation(_ref3) {
	var { props, previousRectanglesRef } = _ref3;
	var { data, layout, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationEnd, onAnimationStart } = props;
	var prevData = previousRectanglesRef.current;
	var animationId = useAnimationId(props, "recharts-bar-");
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
	return /* @__PURE__ */ React$1.createElement(BarLabelListProvider, {
		showLabels,
		rects: data
	}, /* @__PURE__ */ React$1.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
			var prev = prevData && prevData[index];
			if (prev) return _objectSpread$1(_objectSpread$1({}, entry), {}, {
				x: interpolate(prev.x, entry.x, t),
				y: interpolate(prev.y, entry.y, t),
				width: interpolate(prev.width, entry.width, t),
				height: interpolate(prev.height, entry.height, t)
			});
			if (layout === "horizontal") {
				var h = interpolate(0, entry.height, t);
				return _objectSpread$1(_objectSpread$1({}, entry), {}, {
					y: entry.y + entry.height - h,
					height: h
				});
			}
			var w = interpolate(0, entry.width, t);
			return _objectSpread$1(_objectSpread$1({}, entry), {}, { width: w });
		});
		if (t > 0) previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
		if (stepData == null) return null;
		return /* @__PURE__ */ React$1.createElement(Layer, null, /* @__PURE__ */ React$1.createElement(BarRectangles, {
			props,
			data: stepData
		}));
	}), /* @__PURE__ */ React$1.createElement(LabelListFromLabelProp, { label: props.label }), props.children);
}
function RenderRectangles(props) {
	var previousRectanglesRef = useRef(null);
	return /* @__PURE__ */ React$1.createElement(RectanglesWithAnimation, {
		previousRectanglesRef,
		props
	});
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
	var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
	return {
		x: dataPoint.x,
		y: dataPoint.y,
		value,
		errorVal: getValueByDataKey(dataPoint, dataKey)
	};
};
var BarWithState = class extends PureComponent {
	render() {
		var { hide, data, dataKey, className, xAxisId, yAxisId, needClip, background, id } = this.props;
		if (hide || data == null) return null;
		var layerClass = clsx("recharts-bar", className);
		var clipPathId = id;
		return /* @__PURE__ */ React$1.createElement(Layer, {
			className: layerClass,
			id
		}, needClip && /* @__PURE__ */ React$1.createElement("defs", null, /* @__PURE__ */ React$1.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		})), /* @__PURE__ */ React$1.createElement(Layer, {
			className: "recharts-bar-rectangles",
			clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
		}, /* @__PURE__ */ React$1.createElement(BarBackground, {
			data,
			dataKey,
			background,
			allOtherBarProps: this.props
		}), /* @__PURE__ */ React$1.createElement(RenderRectangles, this.props)));
	}
};
var defaultBarProps = {
	activeBar: false,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "ease",
	hide: false,
	isAnimationActive: !Global.isSsr,
	legendType: "rect",
	minPointSize: defaultMinPointSize,
	xAxisId: 0,
	yAxisId: 0
};
function BarImpl(props) {
	var { xAxisId, yAxisId, hide, legendType, minPointSize, activeBar, animationBegin, animationDuration, animationEasing, isAnimationActive } = props;
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var cells = findAllByType(props.children, Cell);
	var rects = useAppSelector((state) => selectBarRectangles(state, xAxisId, yAxisId, isPanorama, props.id, cells));
	if (layout !== "vertical" && layout !== "horizontal") return null;
	var errorBarOffset;
	var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
	if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) errorBarOffset = 0;
	else errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
	return /* @__PURE__ */ React$1.createElement(SetErrorBarContext, {
		xAxisId,
		yAxisId,
		data: rects,
		dataPointFormatter: errorBarDataPointFormatter,
		errorBarOffset
	}, /* @__PURE__ */ React$1.createElement(BarWithState, _extends({}, props, {
		layout,
		needClip,
		data: rects,
		xAxisId,
		yAxisId,
		hide,
		legendType,
		minPointSize,
		activeBar,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive
	})));
}
function computeBarRectangles(_ref4) {
	var { layout, barSettings: { dataKey, minPointSize: minPointSizeProp }, pos, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, displayedData, offset, cells, parentViewBox } = _ref4;
	var numericAxis = layout === "horizontal" ? yAxis : xAxis;
	var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
	var baseValue = getBaseValueOfBar({ numericAxis });
	return displayedData.map((entry, index) => {
		var value, x, y, width, height, background;
		if (stackedData) value = truncateByDomain(stackedData[index], stackedDomain);
		else {
			value = getValueByDataKey(entry, dataKey);
			if (!Array.isArray(value)) value = [baseValue, value];
		}
		var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
		if (layout === "horizontal") {
			var _ref5;
			var [baseValueScale, currentValueScale] = [yAxis.scale(value[0]), yAxis.scale(value[1])];
			x = getCateCoordinateOfBar({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			y = (_ref5 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref5 !== void 0 ? _ref5 : void 0;
			width = pos.size;
			var computedHeight = baseValueScale - currentValueScale;
			height = isNan(computedHeight) ? 0 : computedHeight;
			background = {
				x,
				y: offset.top,
				width,
				height: offset.height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
				var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
				y -= delta;
				height += delta;
			}
		} else {
			var [_baseValueScale, _currentValueScale] = [xAxis.scale(value[0]), xAxis.scale(value[1])];
			x = _baseValueScale;
			y = getCateCoordinateOfBar({
				axis: yAxis,
				ticks: yAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			width = _currentValueScale - _baseValueScale;
			height = pos.size;
			background = {
				x: offset.left,
				y,
				width: offset.width,
				height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
				var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
				width += _delta;
			}
		}
		if (x == null || y == null || width == null || height == null) return null;
		return _objectSpread$1(_objectSpread$1({}, entry), {}, {
			x,
			y,
			width,
			height,
			value: stackedData ? value : value[1],
			payload: entry,
			background,
			tooltipPosition: {
				x: x + width / 2,
				y: y + height / 2
			},
			parentViewBox
		}, cells && cells[index] && cells[index].props);
	}).filter(Boolean);
}
function BarFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultBarProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ React$1.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "bar"
	}, (id) => /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromBarData(props) }), /* @__PURE__ */ React$1.createElement(SetTooltipEntrySettings, {
		fn: getTooltipEntrySettings,
		args: props
	}), /* @__PURE__ */ React$1.createElement(SetCartesianGraphicalItem, {
		type: "bar",
		id,
		data: void 0,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		stackId: getNormalizedStackId(props.stackId),
		hide: props.hide,
		barSize: props.barSize,
		minPointSize: props.minPointSize,
		maxBarSize: props.maxBarSize,
		isPanorama
	}), /* @__PURE__ */ React$1.createElement(BarImpl, _extends({}, props, { id }))));
}
var Bar = /* @__PURE__ */ React$1.memo(BarFn);
Bar.displayName = "Bar";
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
var pickXAxisId = (_state, xAxisId) => xAxisId;
var pickYAxisId = (_state, _xAxisId, yAxisId) => yAxisId;
var pickIsPanorama = (_state, _xAxisId, _yAxisId, isPanorama) => isPanorama;
var pickBarId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _xAxisId, _yAxisId, _isPanorama, _id, cells) => cells;
var getBarSize = (globalSize, totalSize, selfSize) => {
	var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
	if (isNullish(barSize)) return;
	return getPercentValue(barSize, totalSize, 0);
};
var selectAllVisibleBars = createSelector([
	selectChartLayout,
	selectUnfilteredCartesianItems,
	pickXAxisId,
	pickYAxisId,
	pickIsPanorama
], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
	if (layout === "horizontal") return i.xAxisId === xAxisId;
	return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, xAxisId, yAxisId, isPanorama) => {
	if (selectChartLayout(state) === "horizontal") return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
	return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, xAxisId, yAxisId) => {
	if (selectChartLayout(state) === "horizontal") return selectCartesianAxisSize(state, "xAxis", xAxisId);
	return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
	var initialValue = {};
	var stackedBars = allBars.filter(isStacked);
	var unstackedBars = allBars.filter((b) => b.stackId == null);
	var groupByStack = stackedBars.reduce((acc, bar) => {
		if (!acc[bar.stackId]) acc[bar.stackId] = [];
		acc[bar.stackId].push(bar);
		return acc;
	}, initialValue);
	var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
		var [stackId, bars] = _ref;
		return {
			stackId,
			dataKeys: bars.map((b) => b.dataKey),
			barSize: getBarSize(globalSize, totalSize, bars[0].barSize)
		};
	});
	var unstackedSizeList = unstackedBars.map((b) => {
		return {
			stackId: void 0,
			dataKeys: [b.dataKey].filter((dk) => dk != null),
			barSize: getBarSize(globalSize, totalSize, b.barSize)
		};
	});
	return [...stackedSizeList, ...unstackedSizeList];
};
var selectBarSizeList = createSelector([
	selectAllVisibleBars,
	selectRootBarSize,
	selectBarCartesianAxisSize
], combineBarSizeList);
var selectBarBandSize = (state, xAxisId, yAxisId, isPanorama, id) => {
	var _ref2, _getBandSizeOfAxis;
	var barSettings = selectSynchronisedBarSettings(state, xAxisId, yAxisId, isPanorama, id);
	if (barSettings == null) return;
	var layout = selectChartLayout(state);
	var globalMaxBarSize = selectRootMaxBarSize(state);
	var { maxBarSize: childMaxBarSize } = barSettings;
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return (_ref2 = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref2 !== void 0 ? _ref2 : 0;
};
var selectAxisBandSize = (state, xAxisId, yAxisId, isPanorama) => {
	var layout = selectChartLayout(state);
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return getBandSizeOfAxis(axis, ticks);
};
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
	var len = sizeList.length;
	if (len < 1) return;
	var realBarGap = getPercentValue(barGap, bandSize, 0, true);
	var result;
	var initialValue = [];
	if (isWellBehavedNumber(sizeList[0].barSize)) {
		var useFull = false;
		var fullBarSize = bandSize / len;
		var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
		sum += (len - 1) * realBarGap;
		if (sum >= bandSize) {
			sum -= (len - 1) * realBarGap;
			realBarGap = 0;
		}
		if (sum >= bandSize && fullBarSize > 0) {
			useFull = true;
			fullBarSize *= .9;
			sum = len * fullBarSize;
		}
		var prev = {
			offset: ((bandSize - sum) / 2 >> 0) - realBarGap,
			size: 0
		};
		result = sizeList.reduce((res, entry) => {
			var _entry$barSize;
			var newPosition = {
				stackId: entry.stackId,
				dataKeys: entry.dataKeys,
				position: {
					offset: prev.offset + prev.size + realBarGap,
					size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
				}
			};
			var newRes = [...res, newPosition];
			prev = newRes[newRes.length - 1].position;
			return newRes;
		}, initialValue);
	} else {
		var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
		if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) realBarGap = 0;
		var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
		if (originalSize > 1) originalSize >>= 0;
		var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
		result = sizeList.reduce((res, entry, i) => [...res, {
			stackId: entry.stackId,
			dataKeys: entry.dataKeys,
			position: {
				offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
				size
			}
		}], initialValue);
	}
	return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
	if (barBandSize !== bandSize && allBarPositions != null) allBarPositions = allBarPositions.map((pos) => _objectSpread(_objectSpread({}, pos), {}, { position: _objectSpread(_objectSpread({}, pos.position), {}, { offset: pos.position.offset - barBandSize / 2 }) }));
	return allBarPositions;
};
var selectAllBarPositions = createSelector([
	selectBarSizeList,
	selectRootMaxBarSize,
	selectBarGap,
	selectBarCategoryGap,
	selectBarBandSize,
	selectAxisBandSize,
	selectMaxBarSize
], combineAllBarPositions);
var selectXAxisWithScale = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
var selectYAxisWithScale = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
var selectXAxisTicks = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
var selectYAxisTicks = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
var selectBarPosition = createSelector([selectAllBarPositions, selectSynchronisedBarSettings], (allBarPositions, barSettings) => {
	if (allBarPositions == null || barSettings == null) return;
	var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
	if (position == null) return;
	return position.position;
});
var combineStackedData = (stackGroups, barSettings) => {
	var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
	if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) return;
	var { stackId } = barSettings;
	if (stackId == null) return;
	var stackGroup = stackGroups[stackId];
	if (!stackGroup) return;
	var { stackedData } = stackGroup;
	if (!stackedData) return;
	return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
var selectBarRectangles = createSelector([
	selectChartOffsetInternal,
	selectAxisViewBox,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	selectBarPosition,
	selectChartLayout,
	selectChartDataWithIndexesIfNotInPanorama,
	selectAxisBandSize,
	createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData),
	selectSynchronisedBarSettings,
	pickCells
], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref3, bandSize, stackedData, barSettings, cells) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref3;
	if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) return;
	var { data } = barSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeBarRectangles({
		layout,
		barSettings,
		pos,
		parentViewBox: axisViewBox,
		bandSize,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		stackedData,
		displayedData,
		offset,
		cells
	});
});
var allowedTooltipTypes = ["axis", "item"];
var BarChart = /* @__PURE__ */ forwardRef((props, ref) => {
	return /* @__PURE__ */ React$1.createElement(CartesianChart, {
		chartName: "BarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
export { Symbols as i, Bar as n, Cell as r, BarChart as t };
