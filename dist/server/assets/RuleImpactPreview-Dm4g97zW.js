import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Mt as useOrganizationPlan } from "./organizations-BKtnlNrj.js";
import { Al as getFirewallActionMetric, Cl as isPremiumAttribute, Hs as useContinents, Iy as useProjectAddons, Ol as resolveFirewallListSearch, Sl as isOperatorAllowedForAttribute, Us as useCountries, bl as isDynamicKeyAttribute, dl as formatFirewallSolveTime, fl as FIREWALL_CONDITION_ATTRIBUTE_GROUPS, gl as createEmptyConditionDraft, ll as exceedsFirewallUsageConditionLimit, pl as FIREWALL_HTTP_METHODS, rl as useFirewallRuleImpact, sl as countUnestimableFirewallConditions, ul as firewallUsageConditionsKey, wl as isTextMatchOperator, xl as isNoValueOperator, yl as getOperatorsForAttribute } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { c as resolveUsageChartIntervalForRange, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { $t as siteQueryOptions, Ct as hasFiniteUsageLogRetention, St as getUsageLogRetentionHoursFromPlan, Tt as resolveShorterUsageDateRangePreset, ur as projectFunctionQueryOptions, xt as getUsageLogRetentionDaysFromPlan } from "./affiliates-BOg1SHC6.js";
import { r as createCompactCountAxisTickFormatter } from "./format-metric-6jsfxd5f.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as SelectLabel, c as SelectValue, i as SelectItem, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import { At as getCateCoordinateOfLine, Bt as createSelector, C as SetLegendPayload, Dt as getBandSizeOfAxis, E as LabelListFromLabelProp, Ft as getValueByDataKey, Gt as Layer, H as selectAxisWithScale, Ht as useAppSelector, It as isCategoricalAxis, K as selectTicksOfGraphicalItem, M as arrayTooltipSearcher, Pt as getTooltipNameProp, S as RegisterGraphicalItemId, T as CartesianLabelListContextProvider, Xt as svgPropertiesNoEvents, Yt as isClipDot, _t as selectChartLayout, at as selectChartDataWithIndexesIfNotInPanorama, ct as useAnimationId, dt as resolveDefaultProps, en as interpolate, ft as Curve, g as useNeedsClip, h as GraphicalItemClipPath, j as Tooltip, k as ResponsiveContainer, lt as JavascriptAnimate, mt as Global, nn as isNullish, q as selectUnfilteredCartesianItems, qt as filterProps, t as CartesianChart, v as usePlotArea, w as SetTooltipEntrySettings, wt as useIsPanorama, x as SetCartesianGraphicalItem, yt as useChartLayout } from "./CartesianChart-IK-OMdOm.js";
import { i as Dot, n as Area, r as ActivePoints } from "./AreaChart-BppVFiiZ.js";
import { t as SetErrorBarContext } from "./ErrorBarContext-BLfTus07.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { a as USAGE_CHART_RESPONSIVE_CONTAINER_PROPS, n as UsageChartXAxis, r as UsageChartYAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { g as overviewChartPanelChartFillClass, h as overviewChartPanelChartAreaClass, m as overviewChartPanelBodyClass, n as OVERVIEW_CHART_HEIGHT } from "./chart-panel-CCGEGd61.js";
import { n as ADDON_KEY_PREMIUM_GEO_DB, r as findActiveOrPendingAddon } from "./addons-DpAB_yDA.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as ResourceSearchPopover } from "./ResourceSearchPopover-bBzpMw-c.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { _ as getFirewallActionChartColor, c as FIREWALL_CREATABLE_ACTIONS, f as FIREWALL_RATE_LIMIT_STRATEGIES, l as FIREWALL_PASSED_CHART_COLOR, t as FirewallImpactChart, v as getFirewallActionDotClass, y as getFirewallActionLabel } from "./FirewallImpactChart-CpZTWDfN.js";
import { n as useUsageHistoryLimitAlertState, t as UsageLogRetentionAlert } from "./UsageLogRetentionAlert-Ci9K5JH2.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute, lazyRouteComponent, useParams } from "@tanstack/react-router";
import * as React$1 from "react";
import { Component, forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { WafRuleAction } from "@appwrite.io/console";
import { useQuery } from "@tanstack/react-query";
import { format, subHours } from "date-fns";
import { Activity, AppWindow, Building2, ChevronDown, Fingerprint, Globe, Globe2, Loader2, MapPin, Monitor, Plus, Route, SearchCode, Send, Server, Shield, Tags, Target, Terminal, Timer, Trash2, UserRound } from "lucide-react";
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
var pickLineId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
function isLineSettings(item) {
	return item.type === "line";
}
var selectLinePoints = createSelector([
	selectChartLayout,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	createSelector([selectUnfilteredCartesianItems, pickLineId], (graphicalItems, id) => graphicalItems.filter(isLineSettings).find((x) => x.id === id)),
	selectBandSize,
	selectChartDataWithIndexesIfNotInPanorama
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, lineSettings, bandSize, _ref) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (lineSettings == null || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null) return;
	var { dataKey, data } = lineSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeLinePoints({
		layout,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		dataKey,
		bandSize,
		displayedData
	});
});
var _excluded = ["id"], _excluded2 = [
	"type",
	"layout",
	"connectNulls",
	"needClip"
], _excluded3 = [
	"activeDot",
	"animateNewValues",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"hide",
	"isAnimationActive",
	"label",
	"legendType",
	"xAxisId",
	"yAxisId",
	"id"
];
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
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
var computeLegendPayloadFromAreaData = (props) => {
	var { dataKey, name, stroke, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: stroke,
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
			color: props.stroke,
			unit
		}
	};
}
var generateSimpleStrokeDasharray = (totalLength, length) => {
	return "".concat(length, "px ").concat(totalLength - length, "px");
};
function repeat(lines, count) {
	var linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
	var result = [];
	for (var i = 0; i < count; ++i) result = [...result, ...linesUnit];
	return result;
}
var getStrokeDasharray = (length, totalLength, lines) => {
	var lineLength = lines.reduce((pre, next) => pre + next);
	if (!lineLength) return generateSimpleStrokeDasharray(totalLength, length);
	var count = Math.floor(length / lineLength);
	var remainLength = length % lineLength;
	var restLength = totalLength - length;
	var remainLines = [];
	for (var i = 0, sum = 0; i < lines.length; sum += lines[i], ++i) if (sum + lines[i] > remainLength) {
		remainLines = [...lines.slice(0, i), remainLength - sum];
		break;
	}
	var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
	return [
		...repeat(lines, count),
		...remainLines,
		...emptyLines
	].map((line) => "".concat(line, "px")).join(", ");
};
function renderDotItem(option, props) {
	var dotItem;
	if (/* @__PURE__ */ React$1.isValidElement(option)) dotItem = /* @__PURE__ */ React$1.cloneElement(option, props);
	else if (typeof option === "function") dotItem = option(props);
	else {
		var className = clsx("recharts-line-dot", typeof option !== "boolean" ? option.className : "");
		dotItem = /* @__PURE__ */ React$1.createElement(Dot, _extends({}, props, { className }));
	}
	return dotItem;
}
function shouldRenderDots(points, dot) {
	if (points == null) return false;
	if (dot) return true;
	return points.length === 1;
}
function Dots(_ref) {
	var { clipPathId, points, props } = _ref;
	var { dot, dataKey, needClip } = props;
	if (!shouldRenderDots(points, dot)) return null;
	var { id } = props, propsWithoutId = _objectWithoutProperties(props, _excluded);
	var clipDot = isClipDot(dot);
	var lineProps = svgPropertiesNoEvents(propsWithoutId);
	var customDotProps = filterProps(dot, true);
	var dots = points.map((entry, i) => {
		return renderDotItem(dot, _objectSpread(_objectSpread(_objectSpread({
			key: "dot-".concat(i),
			r: 3
		}, lineProps), customDotProps), {}, {
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
	return /* @__PURE__ */ React$1.createElement(Layer, _extends({
		className: "recharts-line-dots",
		key: "dots"
	}, dotsProps), dots);
}
function LineLabelListProvider(_ref2) {
	var { showLabels, children, points } = _ref2;
	var labelListEntries = useMemo(() => {
		return points === null || points === void 0 ? void 0 : points.map((point) => {
			var viewBox = {
				x: point.x,
				y: point.y,
				width: 0,
				height: 0
			};
			return _objectSpread(_objectSpread({}, viewBox), {}, {
				value: point.value,
				payload: point.payload,
				viewBox,
				parentViewBox: void 0,
				fill: void 0
			});
		});
	}, [points]);
	return /* @__PURE__ */ React$1.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : null }, children);
}
function StaticCurve(_ref3) {
	var { clipPathId, pathRef, points, strokeDasharray, props } = _ref3;
	var { type, layout, connectNulls, needClip } = props;
	var curveProps = _objectSpread(_objectSpread({}, filterProps(_objectWithoutProperties(props, _excluded2), true)), {}, {
		fill: "none",
		className: "recharts-line-curve",
		clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0,
		points,
		type,
		layout,
		connectNulls,
		strokeDasharray: strokeDasharray !== null && strokeDasharray !== void 0 ? strokeDasharray : props.strokeDasharray
	});
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ React$1.createElement(Curve, _extends({}, curveProps, { pathRef })), /* @__PURE__ */ React$1.createElement(Dots, {
		points,
		clipPathId,
		props
	}));
}
function getTotalLength(mainCurve) {
	try {
		return mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength() || 0;
	} catch (_unused) {
		return 0;
	}
}
function CurveWithAnimation(_ref4) {
	var { clipPathId, props, pathRef, previousPointsRef, longestAnimatedLengthRef } = _ref4;
	var { points, strokeDasharray, isAnimationActive, animationBegin, animationDuration, animationEasing, animateNewValues, width, height, onAnimationEnd, onAnimationStart } = props;
	var prevPoints = previousPointsRef.current;
	var animationId = useAnimationId(props, "recharts-line-");
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
	var totalLength = getTotalLength(pathRef.current);
	var startingPoint = longestAnimatedLengthRef.current;
	return /* @__PURE__ */ React$1.createElement(LineLabelListProvider, {
		points,
		showLabels
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
		var lengthInterpolated = interpolate(startingPoint, totalLength + startingPoint, t);
		var curLength = Math.min(lengthInterpolated, totalLength);
		var currentStrokeDasharray;
		if (isAnimationActive) if (strokeDasharray) currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, "".concat(strokeDasharray).split(/[,\s]+/gim).map((num) => parseFloat(num)));
		else currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
		else currentStrokeDasharray = strokeDasharray == null ? void 0 : String(strokeDasharray);
		if (prevPoints) {
			var prevPointsDiffFactor = prevPoints.length / points.length;
			var stepData = t === 1 ? points : points.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (prevPoints[prevPointIndex]) {
					var prev = prevPoints[prevPointIndex];
					return _objectSpread(_objectSpread({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				if (animateNewValues) return _objectSpread(_objectSpread({}, entry), {}, {
					x: interpolate(width * 2, entry.x, t),
					y: interpolate(height / 2, entry.y, t)
				});
				return _objectSpread(_objectSpread({}, entry), {}, {
					x: entry.x,
					y: entry.y
				});
			});
			previousPointsRef.current = stepData;
			return /* @__PURE__ */ React$1.createElement(StaticCurve, {
				props,
				points: stepData,
				clipPathId,
				pathRef,
				strokeDasharray: currentStrokeDasharray
			});
		}
		if (t > 0 && totalLength > 0) {
			previousPointsRef.current = points;
			longestAnimatedLengthRef.current = curLength;
		}
		return /* @__PURE__ */ React$1.createElement(StaticCurve, {
			props,
			points,
			clipPathId,
			pathRef,
			strokeDasharray: currentStrokeDasharray
		});
	}), /* @__PURE__ */ React$1.createElement(LabelListFromLabelProp, { label: props.label }));
}
function RenderCurve(_ref5) {
	var { clipPathId, props } = _ref5;
	var previousPointsRef = useRef(null);
	var longestAnimatedLengthRef = useRef(0);
	var pathRef = useRef(null);
	return /* @__PURE__ */ React$1.createElement(CurveWithAnimation, {
		props,
		clipPathId,
		previousPointsRef,
		longestAnimatedLengthRef,
		pathRef
	});
}
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
	return {
		x: dataPoint.x,
		y: dataPoint.y,
		value: dataPoint.value,
		errorVal: getValueByDataKey(dataPoint.payload, dataKey)
	};
};
var LineWithState = class extends Component {
	render() {
		var _filterProps;
		var { hide, dot, points, className, xAxisId, yAxisId, top, left, width, height, id, needClip } = this.props;
		if (hide) return null;
		var layerClass = clsx("recharts-line", className);
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
		}))), /* @__PURE__ */ React$1.createElement(SetErrorBarContext, {
			xAxisId,
			yAxisId,
			data: points,
			dataPointFormatter: errorBarDataPointFormatter,
			errorBarOffset: 0
		}, /* @__PURE__ */ React$1.createElement(RenderCurve, {
			props: this.props,
			clipPathId
		}))), /* @__PURE__ */ React$1.createElement(ActivePoints, {
			activeDot: this.props.activeDot,
			points,
			mainColor: this.props.stroke,
			itemDataKey: this.props.dataKey
		}));
	}
};
var defaultLineProps = {
	activeDot: true,
	animateNewValues: true,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	connectNulls: false,
	dot: true,
	fill: "#fff",
	hide: false,
	isAnimationActive: !Global.isSsr,
	label: false,
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	xAxisId: 0,
	yAxisId: 0
};
function LineImpl(props) {
	var _resolveDefaultProps = resolveDefaultProps(props, defaultLineProps), { activeDot, animateNewValues, animationBegin, animationDuration, animationEasing, connectNulls, dot, hide, isAnimationActive, label, legendType, xAxisId, yAxisId, id } = _resolveDefaultProps, everythingElse = _objectWithoutProperties(_resolveDefaultProps, _excluded3);
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var plotArea = usePlotArea();
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var points = useAppSelector((state) => selectLinePoints(state, xAxisId, yAxisId, isPanorama, id));
	if (layout !== "horizontal" && layout !== "vertical" || points == null || plotArea == null) return null;
	var { height, width, x: left, y: top } = plotArea;
	return /* @__PURE__ */ React$1.createElement(LineWithState, _extends({}, everythingElse, {
		id,
		connectNulls,
		dot,
		activeDot,
		animateNewValues,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive,
		hide,
		label,
		legendType,
		xAxisId,
		yAxisId,
		points,
		layout,
		height,
		width,
		left,
		top,
		needClip
	}));
}
function computeLinePoints(_ref6) {
	var { layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData } = _ref6;
	return displayedData.map((entry, index) => {
		var value = getValueByDataKey(entry, dataKey);
		if (layout === "horizontal") return {
			x: getCateCoordinateOfLine({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				entry,
				index
			}),
			y: isNullish(value) ? null : yAxis.scale(value),
			value,
			payload: entry
		};
		var x = isNullish(value) ? null : xAxis.scale(value);
		var y = getCateCoordinateOfLine({
			axis: yAxis,
			ticks: yAxisTicks,
			bandSize,
			entry,
			index
		});
		if (x == null || y == null) return null;
		return {
			x,
			y,
			value,
			payload: entry
		};
	}).filter(Boolean);
}
function LineFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultLineProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ React$1.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "line"
	}, (id) => /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromAreaData(props) }), /* @__PURE__ */ React$1.createElement(SetTooltipEntrySettings, {
		fn: getTooltipEntrySettings,
		args: props
	}), /* @__PURE__ */ React$1.createElement(SetCartesianGraphicalItem, {
		type: "line",
		id,
		data: props.data,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		hide: props.hide,
		isPanorama
	}), /* @__PURE__ */ React$1.createElement(LineImpl, _extends({}, props, { id }))));
}
var Line = /* @__PURE__ */ React$1.memo(LineFn);
Line.displayName = "Line";
var allowedTooltipTypes = ["axis"];
var ComposedChart = /* @__PURE__ */ forwardRef((props, ref) => {
	return /* @__PURE__ */ React$1.createElement(CartesianChart, {
		chartName: "ComposedChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
var $$splitComponentImporter = () => import("./projects._projectId.firewall.index-CzCKnSmd.js");
const Route$1 = createFileRoute("/_public/projects/$projectId/firewall/")({
	head: () => ({ meta: [{ title: pageTitle("Firewall") }] }),
	validateSearch: (search) => resolveFirewallListSearch(search),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function FunctionSelector({ projectId, value, onValueChange, placeholder = "Select function", disabled = false, triggerClassName, contentClassName }) {
	const t = useT();
	const [selectedSnapshot, setSelectedSnapshot] = useState(null);
	useEffect(() => {
		if (!value) {
			setSelectedSnapshot(null);
			return;
		}
		if (selectedSnapshot && selectedSnapshot.id !== value) setSelectedSnapshot(null);
	}, [value, selectedSnapshot]);
	const { data: selectedFunction } = useQuery({
		...projectFunctionQueryOptions(projectId, value || void 0),
		enabled: !!projectId && !!value
	});
	const pinnedItems = useMemo(() => {
		if (selectedFunction) return [{
			id: selectedFunction.$id,
			label: selectedFunction.name || "Unnamed function",
			runtime: selectedFunction.runtime
		}];
		if (selectedSnapshot?.id === value) return [selectedSnapshot];
		return [];
	}, [
		selectedFunction,
		selectedSnapshot,
		value
	]);
	const selectedLabel = selectedFunction?.name || (selectedSnapshot?.id === value ? selectedSnapshot.label : void 0) || "";
	const selectedRuntime = selectedFunction?.runtime ?? (selectedSnapshot?.id === value ? selectedSnapshot.runtime : void 0) ?? "";
	return /* @__PURE__ */ jsx(ResourceSearchPopover, {
		kind: "function",
		projectId,
		selectedId: value,
		onSelect: (id, item) => {
			setSelectedSnapshot(item);
			onValueChange(id);
		},
		pinnedItems,
		disabled: disabled || !projectId,
		className: "w-full min-w-0",
		contentClassName: cn("w-[var(--radix-popover-trigger-width)] min-w-[240px]", contentClassName),
		trigger: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			role: "combobox",
			disabled: disabled || !projectId,
			className: cn("h-9 w-full justify-between gap-2 text-[13px] font-normal", !value && "text-muted-foreground", triggerClassName),
			children: [/* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 items-center gap-2 truncate",
				children: [value && selectedLabel ? /* @__PURE__ */ jsx(RuntimeIcon, {
					runtime: selectedRuntime,
					size: "sm",
					className: "h-4 w-4 shrink-0 text-muted-foreground"
				}) : /* @__PURE__ */ jsx(Terminal, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: value && selectedLabel ? selectedLabel : t(placeholder)
				})]
			}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
		})
	});
}
function getSiteFramework(site) {
	return site.buildFramework || site.buildFrameworkId || site.framework;
}
function SiteSelector({ projectId, value, onValueChange, placeholder = "Select site", disabled = false, triggerClassName, contentClassName }) {
	const t = useT();
	const [selectedSnapshot, setSelectedSnapshot] = useState(null);
	useEffect(() => {
		if (!value) {
			setSelectedSnapshot(null);
			return;
		}
		if (selectedSnapshot && selectedSnapshot.id !== value) setSelectedSnapshot(null);
	}, [value, selectedSnapshot]);
	const { data: selectedSite } = useQuery({
		...siteQueryOptions(projectId, value || void 0),
		enabled: !!projectId && !!value
	});
	const selectedFramework = selectedSite ? getSiteFramework(selectedSite) : selectedSnapshot?.id === value ? selectedSnapshot.framework : void 0;
	const pinnedItems = useMemo(() => {
		if (selectedSite) return [{
			id: selectedSite.$id,
			label: selectedSite.name || "Unnamed site",
			framework: getSiteFramework(selectedSite)
		}];
		if (selectedSnapshot?.id === value) return [selectedSnapshot];
		return [];
	}, [
		selectedSite,
		selectedSnapshot,
		value
	]);
	const selectedLabel = selectedSite?.name || (selectedSnapshot?.id === value ? selectedSnapshot.label : void 0) || "";
	return /* @__PURE__ */ jsx(ResourceSearchPopover, {
		kind: "site",
		projectId,
		selectedId: value,
		onSelect: (id, item) => {
			setSelectedSnapshot(item);
			onValueChange(id);
		},
		pinnedItems,
		disabled: disabled || !projectId,
		className: "w-full min-w-0",
		contentClassName: cn("w-[var(--radix-popover-trigger-width)] min-w-[240px]", contentClassName),
		trigger: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			role: "combobox",
			disabled: disabled || !projectId,
			className: cn("h-9 w-full justify-between gap-2 text-[13px] font-normal", !value && "text-muted-foreground", triggerClassName),
			children: [/* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 items-center gap-2 truncate",
				children: [value && selectedLabel ? /* @__PURE__ */ jsx(FrameworkIcon, {
					framework: selectedFramework,
					size: "sm",
					className: "h-4 w-4 shrink-0"
				}) : /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: value && selectedLabel ? selectedLabel : t(placeholder)
				})]
			}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
		})
	});
}
var ATTRIBUTE_ICONS = {
	ip: Fingerprint,
	host: Server,
	path: Route,
	method: Send,
	headers: Tags,
	query: SearchCode,
	country: Globe2,
	continent: Globe,
	city: Building2,
	state: MapPin,
	os: Monitor,
	browser: AppWindow,
	userAgent: UserRound
};
var PATH_PLACEHOLDERS = {
	api: "e.g. /v1/account",
	functions: "e.g. /api",
	sites: "e.g. /about"
};
function RailLabel({ children }) {
	return /* @__PURE__ */ jsx("span", {
		className: "relative z-10 bg-card px-1.5 text-[13px] font-semibold leading-none text-foreground",
		children
	});
}
function ConditionKeyInput({ attribute, value, disabled, onChange }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Input, {
		value,
		disabled,
		placeholder: attribute === "headers" ? t("Key, e.g. x-custom-header") : t("Key, e.g. token"),
		className: "h-9 w-full font-mono text-[13px]",
		onChange: (e) => onChange(e.target.value)
	});
}
function ConditionValueInput({ attribute, operator, value, disabled, pathPlaceholder, onChange }) {
	const t = useT();
	const { data: countriesData, isLoading: countriesLoading } = useCountries();
	const { data: continentsData } = useContinents();
	const countryItems = useMemo(() => (countriesData?.countries ?? []).map((country) => {
		const code = country.code.toUpperCase();
		return {
			value: code,
			label: country.name,
			description: code,
			inlineDescription: true,
			searchText: `${country.name} ${code} ${country.code}`
		};
	}), [countriesData?.countries]);
	switch (attribute) {
		case "method": return /* @__PURE__ */ jsxs(Select, {
			value: value || void 0,
			disabled,
			onValueChange: onChange,
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				className: "h-9 w-full",
				children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select method") })
			}), /* @__PURE__ */ jsx(SelectContent, { children: FIREWALL_HTTP_METHODS.map((method) => /* @__PURE__ */ jsx(SelectItem, {
				value: method,
				children: method
			}, method)) })]
		});
		case "country":
			if (isTextMatchOperator(operator)) return /* @__PURE__ */ jsx(Input, {
				value,
				disabled,
				placeholder: t("e.g. US"),
				className: "h-9 w-full font-mono text-[13px]",
				onChange: (e) => onChange(e.target.value)
			});
			return /* @__PURE__ */ jsx(SearchableSelect, {
				value: value.toUpperCase(),
				onValueChange: onChange,
				items: countryItems,
				placeholder: t("Select a country"),
				searchPlaceholder: t("Search countries..."),
				emptyMessage: t("No country found."),
				disabled,
				isFetching: countriesLoading,
				triggerClassName: "h-9 w-full"
			});
		case "continent":
			if (isTextMatchOperator(operator)) return /* @__PURE__ */ jsx(Input, {
				value,
				disabled,
				placeholder: t("e.g. EU"),
				className: "h-9 w-full font-mono text-[13px]",
				onChange: (e) => onChange(e.target.value)
			});
			return /* @__PURE__ */ jsxs(Select, {
				value: value || void 0,
				disabled,
				onValueChange: onChange,
				children: [/* @__PURE__ */ jsx(SelectTrigger, {
					className: "h-9 w-full",
					children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select a continent") })
				}), /* @__PURE__ */ jsx(SelectContent, { children: (continentsData?.continents ?? []).map((continent) => /* @__PURE__ */ jsx(SelectItem, {
					value: continent.code.toUpperCase(),
					children: continent.name
				}, continent.code)) })]
			});
		case "path": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: pathPlaceholder,
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "ip": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: isTextMatchOperator(operator) ? t("e.g. 203.0.113.10") : t("e.g. 203.0.113.10 or CIDR range 203.0.113.0/24"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "host": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. api.example.com"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "city": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. London"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "state": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. California"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "os": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. Windows"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "browser": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. Chrome"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "userAgent": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("e.g. curl/8.0"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		case "headers":
		case "query": return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("Value"),
			className: "h-9 w-full font-mono text-[13px]",
			onChange: (e) => onChange(e.target.value)
		});
		default: return /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: t("Value"),
			className: "h-9 w-full",
			onChange: (e) => onChange(e.target.value)
		});
	}
}
function ConditionsBuilder({ conditions, onChange, disabled, resourceType = "api", action, onActionChange, actionReadOnly = false, actionExtras, className }) {
	const t = useT();
	const showThen = action != null && (onActionChange != null || actionReadOnly);
	const pathPlaceholder = PATH_PLACEHOLDERS[resourceType] ?? "e.g. /v1/account";
	const { features } = useConsoleProfile();
	const projectId = useParams({ strict: false }).projectId;
	const { addons } = useProjectAddons(features.billing ? projectId ?? null : null);
	const premiumGeoEnabled = !features.billing || findActiveOrPendingAddon(addons, "premiumGeoDB")?.status === "active";
	const updateAt = (index, patch) => {
		onChange((prev) => prev.map((condition, i) => i === index ? {
			...condition,
			...patch
		} : condition));
	};
	const setAttribute = (index, attribute) => {
		onChange((prev) => prev.map((condition, i) => {
			if (i !== index) return condition;
			const nextOperator = isOperatorAllowedForAttribute(attribute, condition.operator) ? condition.operator : "equal";
			return {
				...condition,
				attribute,
				operator: nextOperator,
				value: "",
				key: ""
			};
		}));
	};
	const removeAt = (index) => {
		onChange((prev) => {
			if (prev.length <= 1) return [createEmptyConditionDraft()];
			return prev.filter((_, i) => i !== index);
		});
	};
	const addCondition = () => {
		onChange((prev) => [...prev, createEmptyConditionDraft()]);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border px-5 py-3.5",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[14px] font-semibold text-foreground",
				children: t("Configure")
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "relative px-5 py-5",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-3 gap-y-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "pointer-events-none absolute inset-y-0 start-0 w-12",
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" })
					}),
					conditions.map((condition, index) => {
						const AttributeIcon = ATTRIBUTE_ICONS[condition.attribute] ?? Route;
						const operators = getOperatorsForAttribute(condition.attribute);
						return /* @__PURE__ */ jsxs("div", {
							className: "contents",
							children: [/* @__PURE__ */ jsx("div", {
								className: "relative z-10 flex items-center justify-center self-center",
								children: /* @__PURE__ */ jsx(RailLabel, { children: index === 0 ? t("If") : t("And") })
							}), /* @__PURE__ */ jsx("div", {
								className: "rounded-xl border border-border bg-background p-2.5",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 flex-1 flex-col gap-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 items-center gap-2",
											children: [/* @__PURE__ */ jsxs(Select, {
												value: condition.attribute,
												disabled,
												onValueChange: (value) => setAttribute(index, value),
												children: [/* @__PURE__ */ jsx(SelectTrigger, {
													className: "h-9 min-w-0 flex-1",
													children: /* @__PURE__ */ jsxs("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ jsx(AttributeIcon, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx(SelectValue, {})]
													})
												}), /* @__PURE__ */ jsx(SelectContent, { children: FIREWALL_CONDITION_ATTRIBUTE_GROUPS.map((group) => /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, { children: t(group.label) }), group.attributes.map((attr) => {
													const premiumLocked = isPremiumAttribute(attr.value) && !premiumGeoEnabled;
													return /* @__PURE__ */ jsx(SelectItem, {
														value: attr.value,
														disabled: premiumLocked,
														children: /* @__PURE__ */ jsxs("span", {
															className: "flex items-center gap-2",
															children: [t(attr.label), isPremiumAttribute(attr.value) ? /* @__PURE__ */ jsx("span", {
																className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
																children: premiumLocked ? t("Premium Geo DB required") : t("Premium")
															}) : null]
														})
													}, attr.value);
												})] }, group.label)) })]
											}), /* @__PURE__ */ jsxs(Select, {
												value: condition.operator,
												disabled,
												onValueChange: (value) => updateAt(index, { operator: value }),
												children: [/* @__PURE__ */ jsx(SelectTrigger, {
													className: "h-9 w-[9.5rem] shrink-0",
													children: /* @__PURE__ */ jsx(SelectValue, {})
												}), /* @__PURE__ */ jsx(SelectContent, { children: operators.map((op) => /* @__PURE__ */ jsx(SelectItem, {
													value: op.value,
													children: t(op.label)
												}, op.value)) })]
											})]
										}), isDynamicKeyAttribute(condition.attribute) ? /* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 items-center gap-2",
											children: [/* @__PURE__ */ jsx("div", {
												className: "min-w-0 flex-1",
												children: /* @__PURE__ */ jsx(ConditionKeyInput, {
													attribute: condition.attribute,
													value: condition.key ?? "",
													disabled,
													onChange: (nextKey) => updateAt(index, { key: nextKey })
												})
											}), isNoValueOperator(condition.operator) ? null : /* @__PURE__ */ jsx("div", {
												className: "min-w-0 flex-1",
												children: /* @__PURE__ */ jsx(ConditionValueInput, {
													attribute: condition.attribute,
													operator: condition.operator,
													value: condition.value,
													disabled,
													pathPlaceholder,
													onChange: (nextValue) => updateAt(index, { value: nextValue })
												})
											})]
										}) : isNoValueOperator(condition.operator) ? null : /* @__PURE__ */ jsx(ConditionValueInput, {
											attribute: condition.attribute,
											operator: condition.operator,
											value: condition.value,
											disabled,
											pathPlaceholder,
											onChange: (nextValue) => updateAt(index, { value: nextValue })
										})]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "ghost",
										size: "icon",
										className: "h-9 w-9 shrink-0 self-center text-muted-foreground hover:text-foreground",
										disabled,
										onClick: () => removeAt(index),
										"aria-label": t("Remove condition"),
										children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
									})]
								})
							})]
						}, condition.id);
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 flex items-center justify-center self-center",
						children: /* @__PURE__ */ jsx("span", {
							className: "bg-card p-1.5",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "h-7 w-7 rounded-md border-border bg-card text-muted-foreground hover:bg-card hover:text-foreground",
								disabled,
								onClick: addCondition,
								"aria-label": t("Add condition"),
								children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
							})
						})
					}),
					/* @__PURE__ */ jsx("div", { "aria-hidden": true }),
					showThen ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						className: "relative z-10 flex justify-center self-start pt-2.5",
						children: /* @__PURE__ */ jsx(RailLabel, { children: t("Then") })
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 rounded-xl border border-border bg-background p-2.5",
						children: [actionReadOnly ? /* @__PURE__ */ jsxs("div", {
							className: "flex h-9 w-full items-center gap-2 rounded-md border border-input bg-muted/40 px-3 text-[13px] text-muted-foreground sm:max-w-xs",
							children: [/* @__PURE__ */ jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", getFirewallActionDotClass(String(action))) }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: t(getFirewallActionLabel(String(action)))
							})]
						}) : /* @__PURE__ */ jsxs(Select, {
							value: action,
							disabled: disabled || !onActionChange,
							onValueChange: (value) => onActionChange?.(value),
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "h-9 w-full sm:max-w-xs",
								children: /* @__PURE__ */ jsx(SelectValue, {})
							}), /* @__PURE__ */ jsx(SelectContent, { children: FIREWALL_CREATABLE_ACTIONS.map((item) => /* @__PURE__ */ jsx(SelectItem, {
								value: item,
								children: /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { className: cn("h-2 w-2 shrink-0 rounded-full", getFirewallActionDotClass(item)) }), t(getFirewallActionLabel(item))]
								})
							}, item)) })]
						}), actionExtras ? /* @__PURE__ */ jsx("div", {
							className: "border-t border-border pt-3",
							children: actionExtras
						}) : null]
					})] }) : null
				]
			})
		})]
	});
}
var ACTIVITY_CHART_MARGIN = {
	top: 12,
	right: 4,
	left: 0,
	bottom: 0
};
var ACTIVITY_CHART_Y_AXIS_WIDTH = 40;
var SOLVES_COLOR = getFirewallActionChartColor(WafRuleAction.Challenge);
var SOLVE_TIME_COLOR = getFirewallActionChartColor(WafRuleAction.RateLimit);
function FirewallActionActivityChart({ series, valueLabel, showSolveTime = false, dateRange, chartInterval, height = 240, className, emptyLabel }) {
	const t = useT();
	const gradientId = `firewall-action-activity-${useId().replace(/:/g, "")}`;
	const solveTimeLabel = t("Avg solve time");
	const chartPoints = useMemo(() => series.map((point) => ({
		date: point.date,
		day: point.day
	})), [series]);
	const countAxisMax = useMemo(() => series.reduce((max, point) => Math.max(max, point.value), 0), [series]);
	const countTickFormatter = useMemo(() => createCompactCountAxisTickFormatter(countAxisMax), [countAxisMax]);
	const hasData = Boolean(dateRange && series.length > 0);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(FORCE_LTR_CLASS, className),
		children: [showSolveTime && hasData ? /* @__PURE__ */ jsxs("div", {
			className: "mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 px-2",
			children: [/* @__PURE__ */ jsx(LegendDot, {
				color: SOLVES_COLOR,
				label: valueLabel
			}), /* @__PURE__ */ jsx(LegendDot, {
				color: SOLVE_TIME_COLOR,
				label: solveTimeLabel
			})]
		}) : null, /* @__PURE__ */ jsx("div", {
			className: cn(overviewChartPanelBodyClass, FORCE_LTR_CLASS),
			style: { height },
			children: /* @__PURE__ */ jsx("div", {
				className: overviewChartPanelChartAreaClass,
				children: /* @__PURE__ */ jsx("div", {
					className: overviewChartPanelChartFillClass,
					children: hasData ? /* @__PURE__ */ jsx(ResponsiveContainer, {
						...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
						minHeight: height,
						children: /* @__PURE__ */ jsxs(ComposedChart, {
							data: [...series],
							margin: ACTIVITY_CHART_MARGIN,
							children: [
								/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
									id: gradientId,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: SOLVES_COLOR,
										stopOpacity: .2
									}), /* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: SOLVES_COLOR,
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ jsx(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "hsl(var(--border))",
									vertical: false
								}),
								/* @__PURE__ */ jsx(UsageChartXAxis, {
									points: chartPoints,
									dateRange,
									chartInterval,
									variant: "overview"
								}),
								/* @__PURE__ */ jsx(UsageChartYAxis, {
									yAxisId: "count",
									tickFormatter: countTickFormatter,
									width: ACTIVITY_CHART_Y_AXIS_WIDTH,
									allowDecimals: false,
									domain: [0, (dataMax) => Math.ceil(dataMax * 1.05) || 1]
								}),
								showSolveTime ? /* @__PURE__ */ jsx(UsageChartYAxis, {
									yAxisId: "time",
									orientation: "right",
									tickFormatter: formatFirewallSolveTime,
									width: ACTIVITY_CHART_Y_AXIS_WIDTH,
									domain: [0, (dataMax) => Math.ceil(dataMax * 1.1) || 1]
								}) : null,
								/* @__PURE__ */ jsx(Tooltip, {
									isAnimationActive: false,
									content: ({ active, payload }) => {
										if (!active || !payload?.length) return null;
										const point = payload[0]?.payload;
										return /* @__PURE__ */ jsxs("div", {
											className: "rounded-md border border-border bg-popover px-3 py-2",
											children: [/* @__PURE__ */ jsx("p", {
												className: "mb-1.5 text-[11px] text-muted-foreground",
												children: point.fullDate
											}), /* @__PURE__ */ jsxs("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-6 text-[11px]",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5 text-muted-foreground",
														children: [/* @__PURE__ */ jsx(ChartSeriesDot, { color: SOLVES_COLOR }), valueLabel]
													}), /* @__PURE__ */ jsx("span", {
														className: "font-medium tabular-nums text-foreground",
														children: point.value.toLocaleString()
													})]
												}), showSolveTime ? /* @__PURE__ */ jsxs("div", {
													className: "flex justify-between gap-6 text-[11px]",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5 text-muted-foreground",
														children: [/* @__PURE__ */ jsx(ChartSeriesDot, { color: SOLVE_TIME_COLOR }), solveTimeLabel]
													}), /* @__PURE__ */ jsx("span", {
														className: "font-medium tabular-nums text-foreground",
														children: formatFirewallSolveTime(point.avgSolveTimeMs ?? 0)
													})]
												}) : null]
											})]
										});
									}
								}),
								/* @__PURE__ */ jsx(Area, {
									yAxisId: "count",
									type: "monotone",
									dataKey: "value",
									name: valueLabel,
									stroke: SOLVES_COLOR,
									strokeWidth: 2,
									fill: `url(#${gradientId})`,
									dot: false,
									...CHART_ANIMATION_DISABLED
								}),
								showSolveTime ? /* @__PURE__ */ jsx(Line, {
									yAxisId: "time",
									type: "monotone",
									dataKey: "avgSolveTimeMs",
									name: solveTimeLabel,
									stroke: SOLVE_TIME_COLOR,
									strokeWidth: 2,
									dot: false,
									...CHART_ANIMATION_DISABLED
								}) : null
							]
						})
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex h-full items-center justify-center text-[12px] text-muted-foreground",
						children: emptyLabel ?? t("No activity for this period")
					})
				})
			})
		})]
	});
}
function LegendDot({ color, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "h-2 w-2 rounded-full",
			style: { backgroundColor: color }
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[12px] text-muted-foreground",
			children: label
		})]
	});
}
var PASSED_COLOR = FIREWALL_PASSED_CHART_COLOR;
var LIMITED_COLOR = getFirewallActionChartColor(WafRuleAction.RateLimit);
var TIMELINE_VIEWBOX = "0 0 280 78";
var WINDOW_LEFT = 74;
var WINDOW_RIGHT = 214;
var BAND_TOP = 20;
var BAND_BOTTOM = 48;
var AXIS_Y = 34;
var MAX_DOTS_SHOWN = 6;
function formatCount(value) {
	return Math.max(0, Math.round(value)).toLocaleString();
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 >>> 0;
		let t = a;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function useScatteredRequests(count, fromX, toX) {
	const seed = useMemo(() => Date.now() % 2147483647 | 0, []);
	return useMemo(() => {
		const rand = mulberry32(seed);
		const slice = (toX - fromX) / Math.max(count, 1);
		const xs = [];
		for (let i = 0; i < count; i++) xs.push(Math.round((fromX + slice * (i + .25 + .5 * rand())) * 10) / 10);
		return xs;
	}, [
		seed,
		count,
		fromX,
		toX
	]);
}
function RequestDot({ x, emphasized = false }) {
	return /* @__PURE__ */ jsx("circle", {
		cx: x,
		cy: AXIS_Y,
		r: emphasized ? 3.75 : 3.25,
		fill: PASSED_COLOR,
		stroke: "var(--background)",
		strokeWidth: 1.5
	});
}
function QuotaLabel({ limit, interval }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("text", {
		x: (WINDOW_LEFT + WINDOW_RIGHT) / 2,
		y: 9,
		textAnchor: "middle",
		fontSize: 9,
		children: [/* @__PURE__ */ jsx("tspan", {
			fontWeight: 600,
			fill: "var(--foreground)",
			children: formatCount(limit)
		}), /* @__PURE__ */ jsx("tspan", {
			fill: "var(--muted-foreground)",
			children: ` ${t("requests")} ${t("per")} ${formatCount(interval)}s`
		})]
	});
}
function WindowBand() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("rect", {
			x: WINDOW_LEFT,
			y: BAND_TOP,
			width: WINDOW_RIGHT - WINDOW_LEFT,
			height: BAND_BOTTOM - BAND_TOP,
			fill: "var(--muted-foreground)",
			fillOpacity: .07
		}),
		/* @__PURE__ */ jsx("line", {
			x1: 6,
			y1: AXIS_Y,
			x2: 274,
			y2: AXIS_Y,
			stroke: "var(--border)"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: WINDOW_LEFT,
			y1: BAND_TOP,
			x2: WINDOW_LEFT,
			y2: BAND_BOTTOM + 4,
			stroke: "var(--muted-foreground)",
			strokeOpacity: .5
		}),
		/* @__PURE__ */ jsx("line", {
			x1: WINDOW_RIGHT,
			y1: BAND_TOP,
			x2: WINDOW_RIGHT,
			y2: BAND_BOTTOM + 4,
			stroke: "var(--muted-foreground)",
			strokeOpacity: .5
		})
	] });
}
function FixedWindowDiagram({ limit, interval, ariaLabel }) {
	const windowStart = useMemo(() => {
		const ms = Math.max(1, interval) * 1e3;
		return Math.floor(Date.now() / ms) * ms;
	}, [interval]);
	const dots = useScatteredRequests(Math.min(Math.max(limit, 1), MAX_DOTS_SHOWN), 84, 204);
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: TIMELINE_VIEWBOX,
		className: "h-auto w-full",
		role: "img",
		"aria-label": ariaLabel,
		children: [
			/* @__PURE__ */ jsx(QuotaLabel, {
				limit,
				interval
			}),
			/* @__PURE__ */ jsx(WindowBand, {}),
			dots.map((x) => /* @__PURE__ */ jsx(RequestDot, { x }, x)),
			/* @__PURE__ */ jsx("text", {
				x: WINDOW_LEFT,
				y: 62,
				textAnchor: "middle",
				fontSize: 8,
				fill: "var(--muted-foreground)",
				className: "tabular-nums",
				children: format(windowStart, "HH:mm:ss")
			}),
			/* @__PURE__ */ jsx("text", {
				x: WINDOW_RIGHT,
				y: 62,
				textAnchor: "middle",
				fontSize: 8,
				fill: "var(--muted-foreground)",
				className: "tabular-nums",
				children: format(windowStart + Math.max(1, interval) * 1e3, "HH:mm:ss")
			})
		]
	});
}
function SlidingWindowDiagram({ limit, interval, ariaLabel }) {
	const t = useT();
	const anchor = useMemo(() => Date.now(), []);
	const dotCount = Math.min(Math.max(limit, 1), MAX_DOTS_SHOWN);
	const scattered = useScatteredRequests(Math.max(dotCount - 1, 0), 92, 206);
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: TIMELINE_VIEWBOX,
		className: "h-auto w-full",
		role: "img",
		"aria-label": ariaLabel,
		children: [
			/* @__PURE__ */ jsx(QuotaLabel, {
				limit,
				interval
			}),
			/* @__PURE__ */ jsx(WindowBand, {}),
			/* @__PURE__ */ jsx(RequestDot, {
				x: WINDOW_LEFT,
				emphasized: true
			}),
			scattered.map((x) => /* @__PURE__ */ jsx(RequestDot, { x }, x)),
			/* @__PURE__ */ jsx("text", {
				x: WINDOW_LEFT,
				y: 62,
				textAnchor: "middle",
				fontSize: 8,
				fill: "var(--muted-foreground)",
				className: "tabular-nums",
				children: format(anchor, "HH:mm:ss")
			}),
			/* @__PURE__ */ jsx("text", {
				x: WINDOW_LEFT,
				y: 72,
				textAnchor: "middle",
				fontSize: 8,
				fill: "var(--muted-foreground)",
				children: t("first request")
			}),
			/* @__PURE__ */ jsx("text", {
				x: WINDOW_RIGHT,
				y: 62,
				textAnchor: "middle",
				fontSize: 8,
				fill: "var(--muted-foreground)",
				className: "tabular-nums",
				children: `+${formatCount(interval)}s`
			})
		]
	});
}
var BUCKET_SLOTS = [
	{
		x: 104,
		y: 103
	},
	{
		x: 117,
		y: 103
	},
	{
		x: 130,
		y: 103
	},
	{
		x: 143,
		y: 103
	},
	{
		x: 156,
		y: 103
	},
	{
		x: 110,
		y: 92
	},
	{
		x: 123,
		y: 92
	},
	{
		x: 136,
		y: 92
	},
	{
		x: 149,
		y: 92
	},
	{
		x: 104,
		y: 81
	},
	{
		x: 117,
		y: 81
	},
	{
		x: 130,
		y: 81
	},
	{
		x: 143,
		y: 81
	},
	{
		x: 156,
		y: 81
	},
	{
		x: 110,
		y: 70
	},
	{
		x: 123,
		y: 70
	},
	{
		x: 136,
		y: 70
	},
	{
		x: 149,
		y: 70
	},
	{
		x: 104,
		y: 59
	},
	{
		x: 117,
		y: 59
	},
	{
		x: 130,
		y: 59
	},
	{
		x: 143,
		y: 59
	},
	{
		x: 156,
		y: 59
	}
];
function TokenBucketDiagram({ limit, interval, maxBucketSize, ariaLabel }) {
	const t = useT();
	const slotCount = Math.min(Math.max(maxBucketSize, 1), BUCKET_SLOTS.length);
	const surfaceY = slotCount <= 5 ? 96 : slotCount <= 9 ? 85 : slotCount <= 14 ? 74 : slotCount <= 18 ? 63 : 52;
	const wallLeftX = (y) => 88 + .1 * (y - 42);
	const wallRightX = (y) => 172 - .1 * (y - 42);
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 280 158",
		className: "h-auto w-full",
		role: "img",
		"aria-label": ariaLabel,
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: 120,
				cy: 10,
				r: 2.75,
				fill: LIMITED_COLOR,
				fillOpacity: .35
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: 120,
				cy: 20,
				r: 2.75,
				fill: LIMITED_COLOR,
				fillOpacity: .65
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: 120,
				cy: 31,
				r: 2.75,
				fill: LIMITED_COLOR
			}),
			/* @__PURE__ */ jsxs("text", {
				x: 132,
				y: 22,
				fontSize: 9,
				children: [/* @__PURE__ */ jsx("tspan", {
					fontWeight: 600,
					fill: "var(--foreground)",
					children: `+${formatCount(limit)}`
				}), /* @__PURE__ */ jsx("tspan", {
					fill: "var(--muted-foreground)",
					children: ` ${t("tokens")} ${t("per")} ${formatCount(interval)}s`
				})]
			}),
			/* @__PURE__ */ jsxs("g", {
				stroke: "var(--muted-foreground)",
				strokeOpacity: .5,
				strokeWidth: 1.5,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				fill: "none",
				children: [/* @__PURE__ */ jsx("path", { d: "M 88 42 L 94.6 107 Q 95 112 99.5 112 L 121 112" }), /* @__PURE__ */ jsx("path", { d: "M 172 42 L 165.4 107 Q 165 112 160.5 112 L 139 112" })]
			}),
			/* @__PURE__ */ jsx("path", {
				d: `M ${wallLeftX(surfaceY)} ${surfaceY} L ${wallRightX(surfaceY)} ${surfaceY} L ${wallRightX(111)} 111 L ${wallLeftX(111)} 111 Z`,
				fill: LIMITED_COLOR,
				fillOpacity: .08
			}),
			/* @__PURE__ */ jsx("line", {
				x1: wallLeftX(surfaceY),
				y1: surfaceY,
				x2: wallRightX(surfaceY),
				y2: surfaceY,
				stroke: LIMITED_COLOR,
				strokeOpacity: .35
			}),
			BUCKET_SLOTS.slice(0, slotCount).map((slot) => /* @__PURE__ */ jsx("circle", {
				cx: slot.x,
				cy: slot.y,
				r: 3,
				fill: LIMITED_COLOR,
				stroke: "var(--background)",
				strokeWidth: 1.5
			}, `${slot.x}-${slot.y}`)),
			/* @__PURE__ */ jsxs("g", {
				stroke: "var(--muted-foreground)",
				strokeOpacity: .4,
				children: [
					/* @__PURE__ */ jsx("line", {
						x1: 182,
						y1: 42,
						x2: 182,
						y2: 112
					}),
					/* @__PURE__ */ jsx("line", {
						x1: 178,
						y1: 42,
						x2: 182,
						y2: 42
					}),
					/* @__PURE__ */ jsx("line", {
						x1: 178,
						y1: 112,
						x2: 182,
						y2: 112
					})
				]
			}),
			/* @__PURE__ */ jsx("text", {
				x: 188,
				y: 73,
				fontSize: 8,
				fill: "var(--muted-foreground)",
				children: t("Max bucket size")
			}),
			/* @__PURE__ */ jsxs("text", {
				x: 188,
				y: 85,
				fontSize: 9,
				children: [/* @__PURE__ */ jsx("tspan", {
					fontWeight: 600,
					fill: "var(--foreground)",
					children: formatCount(maxBucketSize)
				}), /* @__PURE__ */ jsx("tspan", {
					fill: "var(--muted-foreground)",
					children: ` ${t("tokens")}`
				})]
			}),
			/* @__PURE__ */ jsx("line", {
				x1: 130,
				y1: 117,
				x2: 130,
				y2: 126,
				stroke: "var(--muted-foreground)",
				strokeOpacity: .5,
				strokeWidth: 1.25
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "126.5,125.5 133.5,125.5 130,131",
				fill: "var(--muted-foreground)",
				fillOpacity: .5
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: 130,
				cy: 139,
				r: 3.25,
				fill: PASSED_COLOR,
				stroke: "var(--background)",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ jsx("text", {
				x: 130,
				y: 152,
				textAnchor: "middle",
				fontSize: 8.5,
				fill: "var(--muted-foreground)",
				children: t("each request takes one token")
			})
		]
	});
}
function RateLimitStrategyIllustration({ strategy, limit, interval, maxBucketSize }) {
	const t = useT();
	const strategyLabel = FIREWALL_RATE_LIMIT_STRATEGIES.find((s) => s.value === strategy)?.label;
	const ariaLabel = t("Rate limit strategy illustration");
	const caption = strategy === "fixedWindow" ? t("Windows align to the clock. Rate limit resets for everyone when the next time interval starts.") : strategy === "slidingWindow" ? t("Windows align to the user. Helps prevent traffic spikes since the reset doesn't occur for all users at the same time.") : t("Windows align to human behaviour. Allows accumulated short bursts, and refills for sustained pace.");
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-3 border-t border-border pt-3",
		children: [
			strategyLabel ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] font-medium text-foreground",
				children: t(strategyLabel)
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: cn("mx-auto mt-2 w-full max-w-[340px]", FORCE_LTR_CLASS),
				children: strategy === "fixedWindow" ? /* @__PURE__ */ jsx(FixedWindowDiagram, {
					limit,
					interval,
					ariaLabel
				}) : strategy === "slidingWindow" ? /* @__PURE__ */ jsx(SlidingWindowDiagram, {
					limit,
					interval,
					ariaLabel
				}) : /* @__PURE__ */ jsx(TokenBucketDiagram, {
					limit,
					interval,
					maxBucketSize,
					ariaLabel
				})
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-center text-[11px] leading-relaxed text-muted-foreground",
				children: caption
			})
		]
	});
}
var IMPACT_DEBOUNCE_MS = 300;
function RuleImpactPreview({ conditions, action, resourceType, resourceId, showActivity = false, rateLimit }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const [debouncedConditions, setDebouncedConditions] = useState(conditions);
	const [selectedDateRange, setSelectedDateRange] = useState(() => {
		const to = /* @__PURE__ */ new Date();
		return {
			from: subHours(to, 24),
			to
		};
	});
	const conditionsKey = firewallUsageConditionsKey(conditions);
	const usageLogRetentionHours = useMemo(() => getUsageLogRetentionHoursFromPlan(organizationPlan), [organizationPlan]);
	const usageLogRetentionDays = useMemo(() => getUsageLogRetentionDaysFromPlan(organizationPlan), [organizationPlan]);
	const chartInterval = useMemo(() => resolveUsageChartIntervalForRange("1h", selectedDateRange, organizationPlan), [organizationPlan, selectedDateRange]);
	const { showAlert: showUsageHistoryLimitAlert } = useUsageHistoryLimitAlertState({
		projectId,
		dateRange: selectedDateRange,
		retentionHours: usageLogRetentionHours,
		organizationPlan
	});
	const handleAdjustUsageDateRange = useCallback(() => {
		const fallbackPreset = resolveShorterUsageDateRangePreset(usageLogRetentionHours);
		if (fallbackPreset) setSelectedDateRange(fallbackPreset.getRange());
	}, [usageLogRetentionHours]);
	useEffect(() => {
		const timer = window.setTimeout(() => {
			setDebouncedConditions(conditions);
		}, IMPACT_DEBOUNCE_MS);
		return () => window.clearTimeout(timer);
	}, [conditions, conditionsKey]);
	const unestimableConditions = useMemo(() => countUnestimableFirewallConditions(debouncedConditions), [debouncedConditions]);
	const tooManyConditions = useMemo(() => exceedsFirewallUsageConditionLimit(debouncedConditions), [debouncedConditions]);
	const previewUnavailable = unestimableConditions > 0 || tooManyConditions;
	const { impact, isLoading, isFetching } = useFirewallRuleImpact(previewUnavailable ? null : projectId, debouncedConditions, resourceType, resourceId, selectedDateRange, chartInterval, usageLogRetentionHours, action);
	const series = useMemo(() => previewUnavailable ? [] : impact?.series ?? [], [previewUnavailable, impact?.series]);
	const dateRange = previewUnavailable ? void 0 : impact?.dateRange;
	const summary = {
		matched: impact?.matched ?? 0,
		rate: impact?.rate ?? 0
	};
	const isChallenge = action === WafRuleAction.Challenge;
	const activityConfig = showActivity && isChallenge && resourceType === "sites" ? getFirewallActionMetric(action) : void 0;
	const activity = previewUnavailable ? void 0 : impact?.activity;
	const showActivityPlaceholder = previewUnavailable || isLoading && !impact || !activity;
	const filledConditions = conditions.filter((c) => c.value.trim().length > 0).length;
	const showSubtleLoading = !previewUnavailable && isFetching && !isLoading;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "overflow-hidden rounded-xl border border-border bg-card/50",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[14px] font-medium text-foreground",
							children: t("Estimated impact")
						}), showSubtleLoading || isLoading ? /* @__PURE__ */ jsx(Loader2, {
							className: "h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground",
							"aria-label": t("Loading")
						}) : null]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[12px] text-muted-foreground",
						children: t("Estimated requests this rule would match during the selected period.")
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3 border-b border-border p-4",
					children: [
						/* @__PURE__ */ jsx(DateRangePicker, {
							dateRange: selectedDateRange,
							onDateRangeChange: (range) => {
								if (range?.from) {
									setSelectedDateRange({
										from: range.from,
										to: range.to ?? range.from
									});
									return;
								}
								const to = /* @__PURE__ */ new Date();
								setSelectedDateRange({
									from: subHours(to, 24),
									to
								});
							},
							className: "h-8 w-full min-w-0",
							popoverContentAlign: "start"
						}),
						showUsageHistoryLimitAlert && hasFiniteUsageLogRetention(organizationPlan) ? /* @__PURE__ */ jsx("div", {
							className: "-mx-4",
							children: /* @__PURE__ */ jsx(UsageLogRetentionAlert, {
								retentionDays: usageLogRetentionDays,
								organizationId: project?.teamId,
								onAdjustRange: handleAdjustUsageDateRange
							})
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							className: cn("grid grid-cols-2 gap-3 transition-opacity duration-200", showSubtleLoading && "opacity-60"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-muted/20 p-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-1 flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Target, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-[11px]",
										children: t("Matched requests")
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[18px] font-semibold tabular-nums text-foreground",
									children: previewUnavailable || isLoading && !impact ? "-" : summary.matched.toLocaleString()
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-muted/20 p-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-1 flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Activity, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-[11px]",
										children: t("Share of traffic")
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[18px] font-semibold tabular-nums text-foreground",
									children: previewUnavailable || isLoading && !impact ? "-" : `${(summary.rate * 100).toFixed(1)}%`
								})]
							})]
						}),
						activityConfig ? /* @__PURE__ */ jsxs("div", {
							className: cn("grid grid-cols-2 gap-3 transition-opacity duration-200", showSubtleLoading && "opacity-60"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-muted/20 p-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-1 flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-[11px]",
										children: t(activityConfig.label)
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[18px] font-semibold tabular-nums text-foreground",
									children: showActivityPlaceholder || !activity ? "-" : activity.total.toLocaleString()
								})]
							}), isChallenge ? /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-muted/20 p-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "mb-1 flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Timer, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-[11px]",
										children: t("Avg solve time")
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[18px] font-semibold tabular-nums text-foreground",
									children: showActivityPlaceholder || !activity ? "-" : formatFirewallSolveTime(activity.avgSolveTimeMs ?? 0)
								})]
							}) : null]
						}) : null,
						previewUnavailable ? /* @__PURE__ */ jsx("p", {
							className: "rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-[12px] text-amber-700 dark:text-amber-400",
							children: unestimableConditions > 0 ? t("Preview unavailable: header, query parameter, continent, state, and \"does not contain\" conditions have no usage data to estimate from. The rule will still enforce them.") : t("Preview unavailable: rules with this many conditions cannot be estimated from usage data. The rule will still enforce all conditions.")
						}) : null
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("px-2 pb-2 pt-1 transition-opacity duration-200", showSubtleLoading && "opacity-60"),
					children: /* @__PURE__ */ jsx(FirewallImpactChart, {
						series,
						dateRange,
						chartInterval,
						emptyLabel: previewUnavailable ? t("Preview unavailable") : isLoading ? t("Loading...") : t("No traffic data for this period")
					})
				}),
				activityConfig ? /* @__PURE__ */ jsxs("div", {
					className: cn("border-t border-border px-2 pb-2 pt-3 transition-opacity duration-200", showSubtleLoading && "opacity-60"),
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "px-2 text-[12px] font-medium text-foreground",
							children: [
								t(activityConfig.label),
								" ",
								t("over time")
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mb-1 px-2 text-[11px] text-muted-foreground",
							children: t("A solved challenge clears the whole site, not a single path")
						}),
						/* @__PURE__ */ jsx(FirewallActionActivityChart, {
							series: activity?.series ?? [],
							valueLabel: t(activityConfig.label),
							showSolveTime: isChallenge,
							dateRange,
							chartInterval,
							emptyLabel: previewUnavailable ? t("Preview unavailable") : isLoading ? t("Loading...") : t("No activity for this period")
						})
					]
				}) : null
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 px-4 py-3",
			children: [
				/* @__PURE__ */ jsxs("p", {
					className: "text-[12px] text-muted-foreground",
					children: [
						t("Action"),
						":",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: t(getFirewallActionLabel(action))
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: filledConditions === 0 ? t("Add conditions to narrow which requests this rule matches.") : t("Matching estimate updates as you refine conditions.")
				}),
				action === WafRuleAction.RateLimit && rateLimit ? /* @__PURE__ */ jsx(RateLimitStrategyIllustration, { ...rateLimit }) : null
			]
		})]
	});
}
export { Route$1 as a, FunctionSelector as i, ConditionsBuilder as n, SiteSelector as r, RuleImpactPreview as t };
