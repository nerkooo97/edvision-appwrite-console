import { Ct as useViewBox, D as CartesianLabelContextProvider, Gt as Layer, Ht as useAppSelector, O as CartesianLabelFromLabelProp, Q as selectYAxisSettings, V as selectAxisScale, Vt as useAppDispatch, Y as selectXAxisSettings, d as removeLine, f as createLabeledScales, l as addLine, p as rectWithCoords, qt as filterProps, rn as isNumOrStr, s as useClipPathId, tn as isNan, wt as useIsPanorama } from "./CartesianChart-IK-OMdOm.js";
import * as React$1 from "react";
import { Component, useEffect } from "react";
import { clsx } from "clsx";
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
var renderLine = (option, props) => {
	var line;
	if (/* @__PURE__ */ React$1.isValidElement(option)) line = /* @__PURE__ */ React$1.cloneElement(option, props);
	else if (typeof option === "function") line = option(props);
	else line = /* @__PURE__ */ React$1.createElement("line", _extends({}, props, { className: "recharts-reference-line-line" }));
	return line;
};
var getEndPoints = (scales, isFixedX, isFixedY, isSegment, viewBox, position, xAxisOrientation, yAxisOrientation, props) => {
	var { x, y, width, height } = viewBox;
	if (isFixedY) {
		var { y: yCoord } = props;
		var coord = scales.y.apply(yCoord, { position });
		if (isNan(coord)) return null;
		if (props.ifOverflow === "discard" && !scales.y.isInRange(coord)) return null;
		var points = [{
			x: x + width,
			y: coord
		}, {
			x,
			y: coord
		}];
		return yAxisOrientation === "left" ? points.reverse() : points;
	}
	if (isFixedX) {
		var { x: xCoord } = props;
		var _coord = scales.x.apply(xCoord, { position });
		if (isNan(_coord)) return null;
		if (props.ifOverflow === "discard" && !scales.x.isInRange(_coord)) return null;
		var _points = [{
			x: _coord,
			y: y + height
		}, {
			x: _coord,
			y
		}];
		return xAxisOrientation === "top" ? _points.reverse() : _points;
	}
	if (isSegment) {
		var { segment } = props;
		var _points2 = segment.map((p) => scales.apply(p, { position }));
		if (props.ifOverflow === "discard" && _points2.some((p) => !scales.isInRange(p))) return null;
		return _points2;
	}
	return null;
};
function ReportReferenceLine(props) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(addLine(props));
		return () => {
			dispatch(removeLine(props));
		};
	});
	return null;
}
function ReferenceLineImpl(props) {
	var { x: fixedX, y: fixedY, segment, xAxisId, yAxisId, shape, className, ifOverflow } = props;
	var isPanorama = useIsPanorama();
	var clipPathId = useClipPathId();
	var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
	var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
	var xAxisScale = useAppSelector((state) => selectAxisScale(state, "xAxis", xAxisId, isPanorama));
	var yAxisScale = useAppSelector((state) => selectAxisScale(state, "yAxis", yAxisId, isPanorama));
	var viewBox = useViewBox();
	var isFixedX = isNumOrStr(fixedX);
	var isFixedY = isNumOrStr(fixedY);
	if (!clipPathId || !viewBox || xAxis == null || yAxis == null || xAxisScale == null || yAxisScale == null) return null;
	var endPoints = getEndPoints(createLabeledScales({
		x: xAxisScale,
		y: yAxisScale
	}), isFixedX, isFixedY, segment && segment.length === 2, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
	if (!endPoints) return null;
	var [{ x: x1, y: y1 }, { x: x2, y: y2 }] = endPoints;
	var lineProps = _objectSpread(_objectSpread({ clipPath: ifOverflow === "hidden" ? "url(#".concat(clipPathId, ")") : void 0 }, filterProps(props, true)), {}, {
		x1,
		y1,
		x2,
		y2
	});
	return /* @__PURE__ */ React$1.createElement(Layer, { className: clsx("recharts-reference-line", className) }, renderLine(shape, lineProps), /* @__PURE__ */ React$1.createElement(CartesianLabelContextProvider, rectWithCoords({
		x1,
		y1,
		x2,
		y2
	}), /* @__PURE__ */ React$1.createElement(CartesianLabelFromLabelProp, { label: props.label }), props.children));
}
function ReferenceLineSettingsDispatcher(props) {
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(ReportReferenceLine, {
		yAxisId: props.yAxisId,
		xAxisId: props.xAxisId,
		ifOverflow: props.ifOverflow,
		x: props.x,
		y: props.y
	}), /* @__PURE__ */ React$1.createElement(ReferenceLineImpl, props));
}
var ReferenceLine = class extends Component {
	render() {
		return /* @__PURE__ */ React$1.createElement(ReferenceLineSettingsDispatcher, this.props);
	}
};
_defineProperty(ReferenceLine, "displayName", "ReferenceLine");
_defineProperty(ReferenceLine, "defaultProps", {
	ifOverflow: "discard",
	xAxisId: 0,
	yAxisId: 0,
	fill: "none",
	stroke: "#ccc",
	fillOpacity: 1,
	strokeWidth: 1,
	position: "middle"
});
export { ReferenceLine as t };
