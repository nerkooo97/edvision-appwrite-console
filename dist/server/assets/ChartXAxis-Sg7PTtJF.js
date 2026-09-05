import { c as resolveUsageChartIntervalForRange, g as resolveUsageDateBounds, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { G as selectTicksOfAxis, Ht as useAppSelector, J as selectXAxisPosition, Tt as selectAxisViewBox, V as selectAxisScale, Vt as useAppDispatch, X as selectXAxisSettingsNoDefaults, Z as selectXAxisSize, b as removeXAxis, dt as resolveDefaultProps, n as YAxis, o as shallowEqual, r as CartesianAxis, wt as useIsPanorama, y as addXAxis, z as implicitXAxis } from "./CartesianChart-IK-OMdOm.js";
import { jsx } from "react/jsx-runtime";
import * as React$1 from "react";
import { useEffect, useMemo } from "react";
import { clsx } from "clsx";
import { format, isSameDay } from "date-fns";
var _excluded = ["dangerouslySetInnerHTML", "ticks"], _excluded2 = ["id"], _excluded3 = ["domain"], _excluded4 = ["domain"];
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
function SetXAxisSettings(settings) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(addXAxis(settings));
		return () => {
			dispatch(removeXAxis(settings));
		};
	}, [settings, dispatch]);
	return null;
}
var XAxisImpl = (props) => {
	var { xAxisId, className } = props;
	var viewBox = useAppSelector(selectAxisViewBox);
	var isPanorama = useIsPanorama();
	var axisType = "xAxis";
	var scale = useAppSelector((state) => selectAxisScale(state, axisType, xAxisId, isPanorama));
	var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
	var axisSize = useAppSelector((state) => selectXAxisSize(state, xAxisId));
	var position = useAppSelector((state) => selectXAxisPosition(state, xAxisId));
	var synchronizedSettings = useAppSelector((state) => selectXAxisSettingsNoDefaults(state, xAxisId));
	if (axisSize == null || position == null || synchronizedSettings == null) return null;
	var { dangerouslySetInnerHTML, ticks } = props, allOtherProps = _objectWithoutProperties(props, _excluded);
	var { id } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties(synchronizedSettings, _excluded2);
	return /* @__PURE__ */ React$1.createElement(CartesianAxis, _extends({}, allOtherProps, restSynchronizedSettings, {
		scale,
		x: position.x,
		y: position.y,
		width: axisSize.width,
		height: axisSize.height,
		className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
		viewBox,
		ticks: cartesianTickItems
	}));
};
var xAxisDefaultProps = {
	allowDataOverflow: implicitXAxis.allowDataOverflow,
	allowDecimals: implicitXAxis.allowDecimals,
	allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
	height: implicitXAxis.height,
	hide: false,
	mirror: implicitXAxis.mirror,
	orientation: implicitXAxis.orientation,
	padding: implicitXAxis.padding,
	reversed: implicitXAxis.reversed,
	scale: implicitXAxis.scale,
	tickCount: implicitXAxis.tickCount,
	type: implicitXAxis.type,
	xAxisId: 0
};
var XAxisSettingsDispatcher = (outsideProps) => {
	var _props$interval, _props$includeHidden, _props$angle, _props$minTickGap, _props$tick;
	var props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(SetXAxisSettings, {
		interval: (_props$interval = props.interval) !== null && _props$interval !== void 0 ? _props$interval : "preserveEnd",
		id: props.xAxisId,
		scale: props.scale,
		type: props.type,
		padding: props.padding,
		allowDataOverflow: props.allowDataOverflow,
		domain: props.domain,
		dataKey: props.dataKey,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		allowDecimals: props.allowDecimals,
		tickCount: props.tickCount,
		includeHidden: (_props$includeHidden = props.includeHidden) !== null && _props$includeHidden !== void 0 ? _props$includeHidden : false,
		reversed: props.reversed,
		ticks: props.ticks,
		height: props.height,
		orientation: props.orientation,
		mirror: props.mirror,
		hide: props.hide,
		unit: props.unit,
		name: props.name,
		angle: (_props$angle = props.angle) !== null && _props$angle !== void 0 ? _props$angle : 0,
		minTickGap: (_props$minTickGap = props.minTickGap) !== null && _props$minTickGap !== void 0 ? _props$minTickGap : 5,
		tick: (_props$tick = props.tick) !== null && _props$tick !== void 0 ? _props$tick : true,
		tickFormatter: props.tickFormatter
	}), /* @__PURE__ */ React$1.createElement(XAxisImpl, props));
};
var XAxisMemoComparator = (prevProps, nextProps) => {
	var { domain: prevDomain } = prevProps, prevRest = _objectWithoutProperties(prevProps, _excluded3);
	var { domain: nextDomain } = nextProps;
	if (!shallowEqual(prevRest, _objectWithoutProperties(nextProps, _excluded4))) return false;
	if (Array.isArray(prevDomain) && prevDomain.length === 2 && Array.isArray(nextDomain) && nextDomain.length === 2) return prevDomain[0] === nextDomain[0] && prevDomain[1] === nextDomain[1];
	return shallowEqual({ domain: prevDomain }, { domain: nextDomain });
};
var XAxis = /* @__PURE__ */ React$1.memo(XAxisSettingsDispatcher, XAxisMemoComparator);
XAxis.displayName = "XAxis";
const USAGE_CHART_Y_AXIS_WIDTH = 48;
const USAGE_CHART_MARGIN = {
	top: 8,
	right: 0,
	left: 0,
	bottom: 0
};
const USAGE_CHART_X_AXIS_PADDING = {
	left: 8,
	right: 8
};
const USAGE_CHART_RESPONSIVE_CONTAINER_PROPS = {
	width: "100%",
	height: "100%",
	minWidth: 0,
	debounce: 150
};
const CHART_X_AXIS_DEFAULT_TICK = {
	fill: "currentColor",
	fontSize: 10
};
function spansMultipleDays(rangeFrom, rangeTo) {
	return !isSameDay(rangeFrom, rangeTo);
}
function spansMultipleYears(rangeFrom, rangeTo) {
	return rangeFrom.getFullYear() !== rangeTo.getFullYear();
}
function isDayStart(day, interval) {
	if (interval === "1d") return true;
	if (interval === "1h") return day.getHours() === 0;
	return day.getHours() === 0 && day.getMinutes() === 0;
}
function resolveUsageChartXAxisMaxTicks(interval, variant = "full") {
	const base = variant === "overview" ? 6 : 7;
	switch (interval) {
		case "15m": return Math.min(base, 6);
		case "1d": return Math.min(base + 2, 8);
		case "1h":
		default: return base;
	}
}
function resolveChartXAxisTickIndices(pointCount, maxTicks) {
	if (pointCount <= 0) return [];
	if (pointCount <= maxTicks) return Array.from({ length: pointCount }, (_, index) => index);
	const indices = [0];
	const step = (pointCount - 1) / (maxTicks - 1);
	for (let tick = 1; tick < maxTicks - 1; tick += 1) indices.push(Math.round(tick * step));
	indices.push(pointCount - 1);
	return [...new Set(indices)].sort((a, b) => a - b);
}
function resolveUsageChartXAxisTickIndices(pointCount, interval, variant = "full") {
	return resolveChartXAxisTickIndices(pointCount, resolveUsageChartXAxisMaxTicks(interval, variant));
}
function createSeriesChartXAxisTickFormatter(pointCount, maxTicks = 7, formatLabel, labelsByIndex) {
	const tickIndexSet = new Set(resolveChartXAxisTickIndices(pointCount, maxTicks));
	return (value, index) => {
		if (!tickIndexSet.has(index)) return "";
		const label = labelsByIndex?.[index] ?? value;
		return formatLabel ? formatLabel(label, index) : label;
	};
}
function formatUsageChartXAxisLabel(day, interval, rangeFrom, rangeTo, previousTickDay) {
	const multiDay = spansMultipleDays(rangeFrom, rangeTo);
	const isNewDay = previousTickDay != null && !isSameDay(day, previousTickDay);
	switch (interval) {
		case "15m":
			if (!multiDay) return format(day, "HH:mm");
			if (isDayStart(day, interval) || isNewDay) return formatLocalizedDate(day, "d MMM");
			return format(day, "HH:mm");
		case "1h":
			if (!multiDay) return format(day, "HH:mm");
			if (isDayStart(day, interval) || isNewDay) return formatLocalizedDate(day, "d MMM");
			return format(day, "HH:mm");
		case "1d":
			if (spansMultipleYears(rangeFrom, rangeTo)) return formatLocalizedDate(day, "d MMM yy");
			return formatLocalizedDate(day, "d MMM");
		default: return formatLocalizedDate(day, "d MMM");
	}
}
function createUsageChartXAxisTickFormatter(points, tickIndices, interval, rangeFrom, rangeTo) {
	const tickIndexSet = new Set(tickIndices);
	const sortedTickIndices = [...tickIndices].sort((a, b) => a - b);
	return (_value, index) => {
		if (!tickIndexSet.has(index)) return "";
		const point = points[index];
		if (!point?.day) return "";
		const tickPosition = sortedTickIndices.indexOf(index);
		const previousTickDay = tickPosition > 0 ? points[sortedTickIndices[tickPosition - 1]]?.day : void 0;
		return formatUsageChartXAxisLabel(point.day, interval, rangeFrom, rangeTo, previousTickDay);
	};
}
function UsageChartXAxis({ points, dateRange, chartInterval = "1h", variant = "full", tick = CHART_X_AXIS_DEFAULT_TICK, dy = 10 }) {
	const resolvedInterval = useMemo(() => resolveUsageChartIntervalForRange(chartInterval, dateRange), [chartInterval, dateRange]);
	const { from: rangeFrom, to: rangeTo } = useMemo(() => resolveUsageDateBounds(dateRange), [dateRange]);
	const tickIndices = useMemo(() => resolveUsageChartXAxisTickIndices(points.length, resolvedInterval, variant), [
		points.length,
		resolvedInterval,
		variant
	]);
	return /* @__PURE__ */ jsx(XAxis, {
		axisLine: false,
		tickLine: false,
		tick,
		dy,
		padding: USAGE_CHART_X_AXIS_PADDING,
		interval: 0,
		tickFormatter: useMemo(() => createUsageChartXAxisTickFormatter(points, tickIndices, resolvedInterval, rangeFrom, rangeTo), [
			points,
			tickIndices,
			resolvedInterval,
			rangeFrom,
			rangeTo
		])
	});
}
function UsageChartYAxis({ tickFormatter, domain, width = 48, tick, allowDecimals, yAxisId, orientation, tickFill = "currentColor" }) {
	const tickProps = typeof tick === "object" && tick != null && !Array.isArray(tick) ? tick : {};
	return /* @__PURE__ */ jsx(YAxis, {
		...yAxisId != null ? { yAxisId } : {},
		...orientation != null ? { orientation } : {},
		axisLine: false,
		tickLine: false,
		width,
		domain,
		allowDecimals,
		tickFormatter,
		tick: {
			fill: tickFill,
			fontSize: 10,
			textAnchor: orientation === "right" ? "start" : "end",
			...tickProps
		}
	});
}
function SeriesChartXAxis({ pointCount, maxTicks = 7, labels, dataKey: dataKeyProp, tick = CHART_X_AXIS_DEFAULT_TICK, dy = 10, height, padding = USAGE_CHART_X_AXIS_PADDING, formatLabel }) {
	const tickFormatter = useMemo(() => createSeriesChartXAxisTickFormatter(pointCount, maxTicks, formatLabel, labels), [
		pointCount,
		maxTicks,
		formatLabel,
		labels
	]);
	const dataKey = labels != null ? void 0 : dataKeyProp ?? "date";
	return /* @__PURE__ */ jsx(XAxis, {
		...dataKey != null ? { dataKey } : {},
		axisLine: false,
		tickLine: false,
		tick,
		dy,
		height,
		padding,
		interval: 0,
		tickFormatter
	});
}
export { USAGE_CHART_RESPONSIVE_CONTAINER_PROPS as a, USAGE_CHART_MARGIN as i, UsageChartXAxis as n, USAGE_CHART_Y_AXIS_WIDTH as o, UsageChartYAxis as r, XAxis as s, SeriesChartXAxis as t };
