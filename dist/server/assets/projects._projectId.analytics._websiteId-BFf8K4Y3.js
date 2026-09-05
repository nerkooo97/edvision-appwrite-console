import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./chart-interval-Dbrn19qD.js";
import "./date-format-BD1j7PxK.js";
import { l as getChartSeriesMax, r as createCompactCountAxisTickFormatter } from "./format-metric-6jsfxd5f.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import "./tooltip-DUssQZhw.js";
import { Ht as useAppSelector, Kt as Surface, Qt as adaptEventsOfChild, Rt as useElementOffset, Ut as getUniqPayload, Vt as useAppDispatch, Wt as useLegendPortal, bt as useChartWidth, gt as setLegendSize, ht as setLegendSettings, in as isNumber, j as Tooltip, k as ResponsiveContainer, n as YAxis, vt as useChartHeight, xt as useMargin, zt as selectLegendPayload } from "./CartesianChart-IK-OMdOm.js";
import { i as Symbols, n as Bar, t as BarChart } from "./BarChart-DNAI4HHT.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { i as USAGE_CHART_MARGIN, o as USAGE_CHART_Y_AXIS_WIDTH, t as SeriesChartXAxis } from "./ChartXAxis-Sg7PTtJF.js";
import "./chart-panel-CCGEGd61.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as Route$1 } from "./projects._projectId.analytics._websiteId-3HwP97MB.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import * as React$1 from "react";
import { PureComponent, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { endOfDay, startOfDay, subDays, subYears } from "date-fns";
import { ArrowLeft, Bot, ChevronDown, Chrome, Globe, Monitor, Smartphone, Sparkles, Tablet, TrendingDown, TrendingUp, UserPlus, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { createPortal } from "react-dom";
import maplibregl from "maplibre-gl";
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
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
var SIZE = 32;
var DefaultLegendContent = class extends PureComponent {
	renderIcon(data, iconType) {
		var { inactiveColor } = this.props;
		var halfSize = SIZE / 2;
		var sixthSize = SIZE / 6;
		var thirdSize = SIZE / 3;
		var color = data.inactive ? inactiveColor : data.color;
		var preferredIcon = iconType !== null && iconType !== void 0 ? iconType : data.type;
		if (preferredIcon === "none") return null;
		if (preferredIcon === "plainline") return /* @__PURE__ */ React$1.createElement("line", {
			strokeWidth: 4,
			fill: "none",
			stroke: color,
			strokeDasharray: data.payload.strokeDasharray,
			x1: 0,
			y1: halfSize,
			x2: SIZE,
			y2: halfSize,
			className: "recharts-legend-icon"
		});
		if (preferredIcon === "line") return /* @__PURE__ */ React$1.createElement("path", {
			strokeWidth: 4,
			fill: "none",
			stroke: color,
			d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
			className: "recharts-legend-icon"
		});
		if (preferredIcon === "rect") return /* @__PURE__ */ React$1.createElement("path", {
			stroke: "none",
			fill: color,
			d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
			className: "recharts-legend-icon"
		});
		if (/* @__PURE__ */ React$1.isValidElement(data.legendIcon)) {
			var iconProps = _objectSpread$1({}, data);
			delete iconProps.legendIcon;
			return /* @__PURE__ */ React$1.cloneElement(data.legendIcon, iconProps);
		}
		return /* @__PURE__ */ React$1.createElement(Symbols, {
			fill: color,
			cx: halfSize,
			cy: halfSize,
			size: SIZE,
			sizeType: "diameter",
			type: preferredIcon
		});
	}
	renderItems() {
		var { payload, iconSize, layout, formatter, inactiveColor, iconType } = this.props;
		var viewBox = {
			x: 0,
			y: 0,
			width: SIZE,
			height: SIZE
		};
		var itemStyle = {
			display: layout === "horizontal" ? "inline-block" : "block",
			marginRight: 10
		};
		var svgStyle = {
			display: "inline-block",
			verticalAlign: "middle",
			marginRight: 4
		};
		return payload.map((entry, i) => {
			var finalFormatter = entry.formatter || formatter;
			var className = clsx({
				"recharts-legend-item": true,
				["legend-item-".concat(i)]: true,
				inactive: entry.inactive
			});
			if (entry.type === "none") return null;
			var color = entry.inactive ? inactiveColor : entry.color;
			var finalValue = finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value;
			return /* @__PURE__ */ React$1.createElement("li", _extends$1({
				className,
				style: itemStyle,
				key: "legend-item-".concat(i)
			}, adaptEventsOfChild(this.props, entry, i)), /* @__PURE__ */ React$1.createElement(Surface, {
				width: iconSize,
				height: iconSize,
				viewBox,
				style: svgStyle,
				"aria-label": "".concat(finalValue, " legend icon")
			}, this.renderIcon(entry, iconType)), /* @__PURE__ */ React$1.createElement("span", {
				className: "recharts-legend-item-text",
				style: { color }
			}, finalValue));
		});
	}
	render() {
		var { payload, layout, align } = this.props;
		if (!payload || !payload.length) return null;
		var finalStyle = {
			padding: 0,
			margin: 0,
			textAlign: layout === "horizontal" ? align : "left"
		};
		return /* @__PURE__ */ React$1.createElement("ul", {
			className: "recharts-default-legend",
			style: finalStyle
		}, this.renderItems());
	}
};
_defineProperty$1(DefaultLegendContent, "displayName", "Legend");
_defineProperty$1(DefaultLegendContent, "defaultProps", {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	layout: "horizontal",
	verticalAlign: "middle"
});
function useLegendPayload() {
	return useAppSelector(selectLegendPayload);
}
var _excluded = ["contextPayload"];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
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
function defaultUniqBy(entry) {
	return entry.value;
}
function LegendContent(props) {
	var { contextPayload } = props, otherProps = _objectWithoutProperties(props, _excluded);
	var finalPayload = getUniqPayload(contextPayload, props.payloadUniqBy, defaultUniqBy);
	var contentProps = _objectSpread(_objectSpread({}, otherProps), {}, { payload: finalPayload });
	if (/* @__PURE__ */ React$1.isValidElement(props.content)) return /* @__PURE__ */ React$1.cloneElement(props.content, contentProps);
	if (typeof props.content === "function") return /* @__PURE__ */ React$1.createElement(props.content, contentProps);
	return /* @__PURE__ */ React$1.createElement(DefaultLegendContent, contentProps);
}
function getDefaultPosition(style, props, margin, chartWidth, chartHeight, box) {
	var { layout, align, verticalAlign } = props;
	var hPos, vPos;
	if (!style || (style.left === void 0 || style.left === null) && (style.right === void 0 || style.right === null)) if (align === "center" && layout === "vertical") hPos = { left: ((chartWidth || 0) - box.width) / 2 };
	else hPos = align === "right" ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
	if (!style || (style.top === void 0 || style.top === null) && (style.bottom === void 0 || style.bottom === null)) if (verticalAlign === "middle") vPos = { top: ((chartHeight || 0) - box.height) / 2 };
	else vPos = verticalAlign === "bottom" ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
	return _objectSpread(_objectSpread({}, hPos), vPos);
}
function LegendSettingsDispatcher(props) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setLegendSettings(props));
	}, [dispatch, props]);
	return null;
}
function LegendSizeDispatcher(props) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setLegendSize(props));
		return () => {
			dispatch(setLegendSize({
				width: 0,
				height: 0
			}));
		};
	}, [dispatch, props]);
	return null;
}
function LegendWrapper(props) {
	var contextPayload = useLegendPayload();
	var legendPortalFromContext = useLegendPortal();
	var margin = useMargin();
	var { width: widthFromProps, height: heightFromProps, wrapperStyle, portal: portalFromProps } = props;
	var [lastBoundingBox, updateBoundingBox] = useElementOffset([contextPayload]);
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	if (chartWidth == null || chartHeight == null) return null;
	var maxWidth = chartWidth - (margin.left || 0) - (margin.right || 0);
	var widthOrHeight = Legend.getWidthOrHeight(props.layout, heightFromProps, widthFromProps, maxWidth);
	var outerStyle = portalFromProps ? wrapperStyle : _objectSpread(_objectSpread({
		position: "absolute",
		width: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.width) || widthFromProps || "auto",
		height: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.height) || heightFromProps || "auto"
	}, getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox)), wrapperStyle);
	var legendPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : legendPortalFromContext;
	if (legendPortal == null) return null;
	return /* @__PURE__ */ createPortal(/* @__PURE__ */ React$1.createElement("div", {
		className: "recharts-legend-wrapper",
		style: outerStyle,
		ref: updateBoundingBox
	}, /* @__PURE__ */ React$1.createElement(LegendSettingsDispatcher, {
		layout: props.layout,
		align: props.align,
		verticalAlign: props.verticalAlign,
		itemSorter: props.itemSorter
	}), /* @__PURE__ */ React$1.createElement(LegendSizeDispatcher, {
		width: lastBoundingBox.width,
		height: lastBoundingBox.height
	}), /* @__PURE__ */ React$1.createElement(LegendContent, _extends({}, props, widthOrHeight, {
		margin,
		chartWidth,
		chartHeight,
		contextPayload
	}))), legendPortal);
}
var Legend = class extends PureComponent {
	static getWidthOrHeight(layout, height, width, maxWidth) {
		if (layout === "vertical" && isNumber(height)) return { height };
		if (layout === "horizontal") return { width: width || maxWidth };
		return null;
	}
	render() {
		return /* @__PURE__ */ React$1.createElement(LegendWrapper, this.props);
	}
};
_defineProperty(Legend, "displayName", "Legend");
_defineProperty(Legend, "defaultProps", {
	align: "center",
	iconSize: 14,
	itemSorter: "value",
	layout: "horizontal",
	verticalAlign: "bottom"
});
var COMPARISON_OPTIONS = [
	{
		value: "none",
		label: "No comparison",
		description: "Show only current period",
		getRange: () => void 0
	},
	{
		value: "previous-period",
		label: "Previous period",
		description: "Same length period before",
		getRange: (mainRange) => {
			if (!mainRange?.from || !mainRange?.to) return void 0;
			const daysDiff = Math.ceil((mainRange.to.getTime() - mainRange.from.getTime()) / (1e3 * 60 * 60 * 24));
			return {
				from: startOfDay(subDays(mainRange.from, daysDiff + 1)),
				to: endOfDay(subDays(mainRange.from, 1))
			};
		}
	},
	{
		value: "previous-year",
		label: "Previous year",
		description: "Same dates, previous year",
		getRange: (mainRange) => {
			if (!mainRange?.from || !mainRange?.to) return void 0;
			return {
				from: startOfDay(subYears(mainRange.from, 1)),
				to: endOfDay(subYears(mainRange.to, 1))
			};
		}
	},
	{
		value: "same-period-last-year",
		label: "Same period last year",
		description: "Same dates, one year ago",
		getRange: (mainRange) => {
			if (!mainRange?.from || !mainRange?.to) return void 0;
			return {
				from: startOfDay(subYears(mainRange.from, 1)),
				to: endOfDay(subYears(mainRange.to, 1))
			};
		}
	}
];
function ComparisonSelector({ dateRange, comparisonType, onComparisonTypeChange, onComparisonRangeChange, className }) {
	const t = useT();
	const selectedOption = COMPARISON_OPTIONS.find((opt) => opt.value === comparisonType);
	React$1.useEffect(() => {
		if (comparisonType === "none") {
			onComparisonRangeChange(void 0);
			return;
		}
		const option = COMPARISON_OPTIONS.find((opt) => opt.value === comparisonType);
		if (option) onComparisonRangeChange(option.getRange(dateRange));
	}, [
		dateRange,
		comparisonType,
		onComparisonRangeChange
	]);
	const handleSelect = (type) => {
		onComparisonTypeChange(type);
	};
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			size: "sm",
			className: cn("h-8 gap-1.5 text-[12px] font-medium", comparisonType === "none" && "text-muted-foreground", className),
			children: [
				/* @__PURE__ */ jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
				/* @__PURE__ */ jsx("span", {
					className: "min-w-[120px] text-start",
					children: selectedOption ? t(selectedOption.label) : t("Compare")
				}),
				/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-50" })
			]
		})
	}), /* @__PURE__ */ jsx(DropdownMenuContent, {
		align: "end",
		className: "w-[200px]",
		children: COMPARISON_OPTIONS.map((option, index) => /* @__PURE__ */ jsxs(React$1.Fragment, { children: [index > 0 && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
			onClick: () => handleSelect(option.value),
			className: cn("flex flex-col items-start gap-0.5 py-2.5 cursor-pointer", comparisonType === option.value && "bg-accent"),
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-[12px] font-medium",
				children: t(option.label)
			}), /* @__PURE__ */ jsx("span", {
				className: "text-[11px] text-muted-foreground",
				children: t(option.description)
			})]
		})] }, option.value))
	})] });
}
var MapContext = React$1.createContext({
	map: null,
	isLoaded: false
});
function useMap() {
	const context = React$1.useContext(MapContext);
	if (!context) throw new Error("useMap must be used within a Map component");
	return context;
}
var COUNTRY_COORDINATES = {
	IN: [77.209, 20.5937],
	US: [-95.7129, 37.0902],
	DE: [10.4515, 51.1657],
	GB: [-3.436, 55.3781],
	NL: [5.2913, 52.1326],
	AU: [133.7751, -25.2744],
	CA: [-106.3468, 56.1304],
	SG: [103.8198, 1.3521]
};
function Map$1({ children, styles, projection, disableScrollZoom, ...mapOptions }) {
	const { theme } = useTheme();
	const mapContainerRef = React$1.useRef(null);
	const mapRef = React$1.useRef(null);
	const [isLoaded, setIsLoaded] = React$1.useState(false);
	const mapStyle = styles?.[theme === "dark" ? "dark" : "light"] || {
		light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
		dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
	}[theme === "dark" ? "dark" : "light"];
	const [mapInstance, setMapInstance] = React$1.useState(null);
	React$1.useEffect(() => {
		if (!mapContainerRef.current) return;
		let map = null;
		let resizeObserver = null;
		let timeoutId = null;
		let mutationObserver = null;
		let retryCount = 0;
		const maxRetries = 50;
		const checkVisibility = () => {
			if (!mapContainerRef.current) return false;
			const rect = mapContainerRef.current.getBoundingClientRect();
			const computedStyle = window.getComputedStyle(mapContainerRef.current);
			return computedStyle.display !== "none" && computedStyle.visibility !== "hidden" && mapContainerRef.current.offsetParent !== null && rect.width > 0 && rect.height > 0;
		};
		const initMap = () => {
			if (!mapContainerRef.current) return;
			if (!checkVisibility()) {
				retryCount++;
				if (retryCount < maxRetries) timeoutId = setTimeout(() => {
					initMap();
				}, 100);
				return;
			}
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
				setMapInstance(null);
			}
			try {
				map = new maplibregl.Map({
					container: mapContainerRef.current,
					style: mapStyle,
					...mapOptions,
					...projection && { projection }
				});
				mapRef.current = map;
				setMapInstance(map);
				map.on("load", () => {
					if (disableScrollZoom && map.scrollZoom) map.scrollZoom.disable();
					setIsLoaded(true);
					setTimeout(() => {
						if (map) map.resize();
					}, 50);
				});
				map.on("error", (e) => {
					console.error("Map error:", e);
				});
				resizeObserver = new ResizeObserver(() => {
					if (map && mapContainerRef.current && checkVisibility()) requestAnimationFrame(() => {
						map.resize();
					});
				});
				if (mapContainerRef.current) resizeObserver.observe(mapContainerRef.current);
				if (mapContainerRef.current.parentElement) {
					mutationObserver = new MutationObserver(() => {
						if (checkVisibility() && map && !isLoaded) setTimeout(() => {
							if (map) map.resize();
						}, 100);
					});
					mutationObserver.observe(mapContainerRef.current.parentElement, {
						attributes: true,
						attributeFilter: ["style", "class"],
						childList: false,
						subtree: false
					});
				}
			} catch (error) {
				console.error("Error initializing map:", error);
			}
		};
		initMap();
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (resizeObserver) resizeObserver.disconnect();
			if (mutationObserver) mutationObserver.disconnect();
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
				setMapInstance(null);
			}
			setIsLoaded(false);
		};
	}, [
		mapStyle,
		theme,
		disableScrollZoom,
		JSON.stringify(mapOptions),
		projection
	]);
	return /* @__PURE__ */ jsxs(MapContext.Provider, {
		value: {
			map: mapInstance,
			isLoaded
		},
		children: [/* @__PURE__ */ jsx("div", {
			ref: mapContainerRef,
			className: "h-full w-full"
		}), children]
	});
}
var MarkerContext = React$1.createContext({
	marker: null,
	popup: null,
	setPopup: () => {}
});
function MapMarker({ longitude, latitude, children, onClick, onMouseEnter, onMouseLeave, onDragStart, onDrag, onDragEnd, ...markerOptions }) {
	const { map, isLoaded } = useMap();
	const markerRef = React$1.useRef(null);
	const elementRef = React$1.useRef(null);
	const popupRef = React$1.useRef(null);
	const [popup, setPopup] = React$1.useState(null);
	React$1.useEffect(() => {
		if (!map || !isLoaded) return;
		const element = document.createElement("div");
		elementRef.current = element;
		const marker = new maplibregl.Marker({
			element,
			...markerOptions
		}).setLngLat([longitude, latitude]).addTo(map);
		markerRef.current = marker;
		if (!onClick) element.style.cursor = "pointer";
		if (onClick) element.addEventListener("click", onClick);
		if (onMouseEnter) element.addEventListener("mouseenter", onMouseEnter);
		if (onMouseLeave) element.addEventListener("mouseleave", onMouseLeave);
		if (onDragStart) marker.on("dragstart", () => {
			const lngLat = marker.getLngLat();
			onDragStart({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		});
		if (onDrag) marker.on("drag", () => {
			const lngLat = marker.getLngLat();
			onDrag({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		});
		if (onDragEnd) marker.on("dragend", () => {
			const lngLat = marker.getLngLat();
			onDragEnd({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		});
		return () => {
			marker.remove();
			if (popupRef.current) popupRef.current.remove();
			if (onClick) element.removeEventListener("click", onClick);
			if (onMouseEnter) element.removeEventListener("mouseenter", onMouseEnter);
			if (onMouseLeave) element.removeEventListener("mouseleave", onMouseLeave);
		};
	}, [
		map,
		isLoaded,
		longitude,
		latitude,
		onClick,
		onMouseEnter,
		onMouseLeave
	]);
	if (!elementRef.current) return null;
	return /* @__PURE__ */ jsx(MarkerContext.Provider, {
		value: {
			marker: markerRef.current,
			popup: popupRef.current,
			setPopup: (p) => {
				popupRef.current = p;
				setPopup(p);
			}
		},
		children: createPortal(/* @__PURE__ */ jsx("div", {
			className: "relative",
			children: children || /* @__PURE__ */ jsx(DefaultMarker, {})
		}), elementRef.current)
	});
}
function DefaultMarker() {
	return /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full border-2 border-white bg-blue-500" });
}
function MarkerContent({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative", className),
		children
	});
}
function MarkerPopup({ children, className, closeButton = false, ...popupOptions }) {
	const { marker, setPopup } = React$1.useContext(MarkerContext);
	const containerRef = React$1.useRef(null);
	const popupRef = React$1.useRef(null);
	React$1.useEffect(() => {
		if (!marker) return;
		const container = document.createElement("div");
		container.className = cn("", className);
		containerRef.current = container;
		const popup = new maplibregl.Popup({
			closeButton,
			...popupOptions
		});
		popupRef.current = popup;
		marker.setPopup(popup);
		setPopup(popup);
		const timeoutId = setTimeout(() => {
			if (containerRef.current) popup.setDOMContent(containerRef.current);
		}, 0);
		return () => {
			clearTimeout(timeoutId);
			if (popup) popup.remove();
			setPopup(null);
		};
	}, [
		marker,
		closeButton,
		className,
		setPopup
	]);
	React$1.useEffect(() => {
		if (containerRef.current && popupRef.current) popupRef.current.setDOMContent(containerRef.current);
	}, [children]);
	if (containerRef.current) return createPortal(children, containerRef.current);
	return null;
}
function MapControls({ position = "bottom-right", showZoom = true, showCompass = false, showLocate = false, showFullscreen = false, className, onLocate }) {
	const { map, isLoaded } = useMap();
	if (!map || !isLoaded) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute z-10 flex flex-col gap-1", {
			"top-left": "top-2 start-2",
			"top-right": "top-2 end-2",
			"bottom-left": "bottom-2 start-2",
			"bottom-right": "bottom-2 end-2"
		}[position], className),
		children: showZoom && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("button", {
			onClick: () => map.zoomIn(),
			className: "flex h-8 w-8 items-center justify-center rounded border border-border bg-background hover:bg-accent",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-sm",
				children: "+"
			})
		}), /* @__PURE__ */ jsx("button", {
			onClick: () => map.zoomOut(),
			className: "flex h-8 w-8 items-center justify-center rounded border border-border bg-background hover:bg-accent",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-sm",
				children: "−"
			})
		})] })
	});
}
var THEMES = {
	light: "",
	dark: ".dark"
};
var ChartContext = React$1.createContext(null);
function useChart() {
	const context = React$1.useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a <ChartContainer />");
	return context;
}
function ChartContainer({ id, className, children, config, ...props }) {
	const uniqueId = React$1.useId();
	const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
	return /* @__PURE__ */ jsx(ChartContext.Provider, {
		value: { config },
		children: /* @__PURE__ */ jsxs("div", {
			"data-slot": "chart",
			"data-chart": chartId,
			className: cn("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", className),
			...props,
			children: [/* @__PURE__ */ jsx(ChartStyle, {
				id: chartId,
				config
			}), /* @__PURE__ */ jsx(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				minWidth: 0,
				minHeight: 0,
				children
			})]
		})
	});
}
var ChartStyle = ({ id, config }) => {
	const colorConfig = Object.entries(config).filter(([, config$1]) => config$1.theme || config$1.color);
	if (!colorConfig.length) return null;
	return /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
		const color = itemConfig.theme?.[theme] || itemConfig.color;
		return color ? `  --color-${key}: ${color};` : null;
	}).join("\n")}
}
`).join("\n") } });
};
var ChartTooltip = Tooltip;
function ChartTooltipContent({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }) {
	const { config } = useChart();
	const tooltipLabel = React$1.useMemo(() => {
		if (hideLabel || !payload?.length) return null;
		const [item] = payload;
		const itemConfig = getPayloadConfigFromPayload(config, item, `${labelKey || item?.dataKey || item?.name || "value"}`);
		const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
		if (labelFormatter) return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: labelFormatter(value, payload)
		});
		if (!value) return null;
		return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: value
		});
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey
	]);
	if (!active || !payload?.length) return null;
	const nestLabel = payload.length === 1 && indicator !== "dot";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className),
		children: [!nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("div", {
			className: "grid gap-1.5",
			children: payload.filter((item) => item.type !== "none").map((item, index) => {
				const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.name || item.dataKey || "value"}`);
				const indicatorColor = color || item.payload.fill || item.color;
				return /* @__PURE__ */ jsxs("div", {
					className: cn("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", indicator === "dot" && "items-center"),
					children: [itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx("div", {
						className: cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": indicator === "dot",
							"w-1": indicator === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
							"my-0.5": nestLabel && indicator === "dashed"
						}),
						style: {
							"--color-bg": indicatorColor,
							"--color-border": indicatorColor
						}
					}), formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs("div", {
						className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid gap-1.5",
							children: [nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: itemConfig?.label || item.name
							})]
						}), item.value && /* @__PURE__ */ jsx("span", {
							className: "text-foreground font-mono font-medium tabular-nums",
							children: item.value.toLocaleString()
						})]
					})]
				}, item.dataKey);
			})
		})]
	});
}
function getPayloadConfigFromPayload(config, payload, key) {
	if (typeof payload !== "object" || payload === null) return;
	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
	let configLabelKey = key;
	if (key in payload && typeof payload[key] === "string") configLabelKey = payload[key];
	else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
	return configLabelKey in config ? config[configLabelKey] : config[key];
}
var visitorMetrics = [
	{
		id: "unique",
		value: 10402,
		label: "Unique visitors",
		change: 218
	},
	{
		id: "total",
		value: 14402,
		label: "Total visitors",
		change: 225
	},
	{
		id: "pageviews",
		value: 24891,
		label: "Page views",
		change: 312
	},
	{
		id: "pagesPerVisit",
		value: 2.4,
		label: "Pages per visit",
		change: 8
	},
	{
		id: "bounceRate",
		value: 42.3,
		label: "Bounce rate",
		change: -5
	},
	{
		id: "visitDuration",
		value: 185,
		label: "Visit duration",
		change: 12
	}
];
var generateChartData = () => {
	const data = [];
	const startDate = /* @__PURE__ */ new Date("2024-09-26");
	for (let i = 0; i < 30; i++) {
		const date = new Date(startDate);
		date.setDate(startDate.getDate() + i);
		const dateStr = date.toLocaleDateString("en-US", {
			day: "numeric",
			month: "short"
		});
		const baseVisitors = 6e3 + Math.random() * 4e3;
		data.push({
			date: dateStr,
			visitors: Math.floor(baseVisitors)
		});
	}
	return data;
};
var chartData = generateChartData();
var visitorYAxisTickFormatter = createCompactCountAxisTickFormatter(getChartSeriesMax(chartData.map((point) => ({ value: point.visitors }))));
var locationData = [
	{
		country: "India",
		flag: "🇮🇳",
		code: "IN",
		visitors: 46800,
		uniqueVisitors: 6400
	},
	{
		country: "United States",
		flag: "🇺🇸",
		code: "US",
		visitors: 39200,
		uniqueVisitors: 6200
	},
	{
		country: "Germany",
		flag: "🇩🇪",
		code: "DE",
		visitors: 37100,
		uniqueVisitors: 5100
	},
	{
		country: "United Kingdom",
		flag: "🇬🇧",
		code: "GB",
		visitors: 35500,
		uniqueVisitors: 4900
	},
	{
		country: "Netherlands",
		flag: "🇳🇱",
		code: "NL",
		visitors: 34400,
		uniqueVisitors: 3800
	},
	{
		country: "Australia",
		flag: "🇦🇺",
		code: "AU",
		visitors: 29e3,
		uniqueVisitors: 3200
	},
	{
		country: "Canada",
		flag: "🇨🇦",
		code: "CA",
		visitors: 13800,
		uniqueVisitors: 3e3
	},
	{
		country: "Singapore",
		flag: "🇸🇬",
		code: "SG",
		visitors: 7600,
		uniqueVisitors: 2600
	}
];
var topPages = [
	{
		path: "/",
		visitors: 2300
	},
	{
		path: "/page",
		visitors: 1900
	},
	{
		path: "/page/subpage",
		visitors: 1200
	},
	{
		path: "/docs",
		visitors: 948
	},
	{
		path: "/pricing",
		visitors: 876
	},
	{
		path: "/blog",
		visitors: 654
	},
	{
		path: "/about",
		visitors: 566
	},
	{
		path: "/contact",
		visitors: 211
	}
];
var topSources = [
	{
		name: "Google",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[14px] font-medium",
			children: "G"
		}),
		visitors: 145600
	},
	{
		name: "GitHub",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 94100
	},
	{
		name: "Twitter",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[14px] font-bold",
			children: "𝕏"
		}),
		visitors: 47800
	},
	{
		name: "Youtube",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[14px]",
			children: "▶"
		}),
		visitors: 26600
	},
	{
		name: "Direct",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 2800
	}
];
var channels = [
	{
		name: "Organic Search",
		visitors: 145600,
		color: "var(--chart-1)"
	},
	{
		name: "Social",
		visitors: 94100,
		color: "var(--chart-2)"
	},
	{
		name: "Direct",
		visitors: 47800,
		color: "var(--chart-3)"
	},
	{
		name: "Referral",
		visitors: 26600,
		color: "var(--chart-4)"
	},
	{
		name: "Email",
		visitors: 11200,
		color: "var(--chart-5)"
	}
];
var campaigns = [
	{
		name: "Summer Launch 2024",
		visitors: 34200
	},
	{
		name: "Product Update",
		visitors: 28900
	},
	{
		name: "Blog Series",
		visitors: 15600
	},
	{
		name: "Newsletter",
		visitors: 11200
	},
	{
		name: "Social Campaign",
		visitors: 8900
	}
];
var regions = [
	{
		region: "South Asia",
		country: "India",
		flag: "🇮🇳",
		code: "IN",
		visitors: 46800
	},
	{
		region: "North America",
		country: "United States",
		flag: "🇺🇸",
		code: "US",
		visitors: 39200
	},
	{
		region: "Western Europe",
		country: "Germany",
		flag: "🇩🇪",
		code: "DE",
		visitors: 37100
	},
	{
		region: "Western Europe",
		country: "United Kingdom",
		flag: "🇬🇧",
		code: "GB",
		visitors: 35500
	},
	{
		region: "Western Europe",
		country: "Netherlands",
		flag: "🇳🇱",
		code: "NL",
		visitors: 34400
	}
];
var cities = [
	{
		city: "Mumbai",
		country: "India",
		flag: "🇮🇳",
		code: "IN",
		visitors: 12400
	},
	{
		city: "New York",
		country: "United States",
		flag: "🇺🇸",
		code: "US",
		visitors: 11200
	},
	{
		city: "Berlin",
		country: "Germany",
		flag: "🇩🇪",
		code: "DE",
		visitors: 9800
	},
	{
		city: "London",
		country: "United Kingdom",
		flag: "🇬🇧",
		code: "GB",
		visitors: 8900
	},
	{
		city: "Amsterdam",
		country: "Netherlands",
		flag: "🇳🇱",
		code: "NL",
		visitors: 7600
	}
];
var browsers = [
	{
		name: "Chrome",
		icon: /* @__PURE__ */ jsx(Chrome, { className: "h-4 w-4" }),
		visitors: 24700
	},
	{
		name: "Firefox",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 11900
	},
	{
		name: "Safari",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 6400
	},
	{
		name: "Microsoft Edge",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 3700
	},
	{
		name: "Opera",
		icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
		visitors: 2100
	}
];
var operatingSystems = [
	{
		name: "Mac",
		visitors: 94200,
		color: "var(--chart-1)",
		fill: "var(--chart-1)"
	},
	{
		name: "Windows",
		visitors: 67300,
		color: "var(--chart-2)",
		fill: "var(--chart-2)"
	},
	{
		name: "Linux",
		visitors: 20900,
		color: "var(--chart-3)",
		fill: "var(--chart-3)"
	},
	{
		name: "iOS",
		visitors: 19200,
		color: "var(--chart-4)",
		fill: "var(--chart-4)"
	},
	{
		name: "Android",
		visitors: 18900,
		color: "var(--chart-5)",
		fill: "var(--chart-5)"
	}
];
var devices = [
	{
		type: "Desktop",
		icon: /* @__PURE__ */ jsx(Monitor, { className: "h-4 w-4" }),
		visitors: 124800,
		color: "var(--chart-1)"
	},
	{
		type: "Mobile",
		icon: /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4" }),
		visitors: 89200,
		color: "var(--chart-2)"
	},
	{
		type: "Tablet",
		icon: /* @__PURE__ */ jsx(Tablet, { className: "h-4 w-4" }),
		visitors: 12400,
		color: "var(--chart-3)"
	}
];
var entryPages = [
	{
		path: "/",
		visitors: 12400,
		type: "entry"
	},
	{
		path: "/page",
		visitors: 8900,
		type: "entry"
	},
	{
		path: "/docs",
		visitors: 6700,
		type: "entry"
	},
	{
		path: "/pricing",
		visitors: 5400,
		type: "entry"
	},
	{
		path: "/blog",
		visitors: 3200,
		type: "entry"
	}
];
var exitPages = [
	{
		path: "/page/subpage",
		visitors: 9800,
		type: "exit"
	},
	{
		path: "/contact",
		visitors: 7200,
		type: "exit"
	},
	{
		path: "/blog",
		visitors: 5600,
		type: "exit"
	},
	{
		path: "/docs",
		visitors: 4100,
		type: "exit"
	},
	{
		path: "/about",
		visitors: 3400,
		type: "exit"
	}
];
var peakHours = [
	{
		hour: 0,
		visitors: 1200,
		label: "12 AM"
	},
	{
		hour: 1,
		visitors: 800,
		label: "1 AM"
	},
	{
		hour: 2,
		visitors: 600,
		label: "2 AM"
	},
	{
		hour: 3,
		visitors: 500,
		label: "3 AM"
	},
	{
		hour: 4,
		visitors: 400,
		label: "4 AM"
	},
	{
		hour: 5,
		visitors: 500,
		label: "5 AM"
	},
	{
		hour: 6,
		visitors: 800,
		label: "6 AM"
	},
	{
		hour: 7,
		visitors: 1200,
		label: "7 AM"
	},
	{
		hour: 8,
		visitors: 2100,
		label: "8 AM"
	},
	{
		hour: 9,
		visitors: 3400,
		label: "9 AM"
	},
	{
		hour: 10,
		visitors: 4200,
		label: "10 AM"
	},
	{
		hour: 11,
		visitors: 4800,
		label: "11 AM"
	},
	{
		hour: 12,
		visitors: 5200,
		label: "12 PM"
	},
	{
		hour: 13,
		visitors: 5100,
		label: "1 PM"
	},
	{
		hour: 14,
		visitors: 4900,
		label: "2 PM"
	},
	{
		hour: 15,
		visitors: 4600,
		label: "3 PM"
	},
	{
		hour: 16,
		visitors: 4400,
		label: "4 PM"
	},
	{
		hour: 17,
		visitors: 3800,
		label: "5 PM"
	},
	{
		hour: 18,
		visitors: 3200,
		label: "6 PM"
	},
	{
		hour: 19,
		visitors: 2800,
		label: "7 PM"
	},
	{
		hour: 20,
		visitors: 2400,
		label: "8 PM"
	},
	{
		hour: 21,
		visitors: 2e3,
		label: "9 PM"
	},
	{
		hour: 22,
		visitors: 1600,
		label: "10 PM"
	},
	{
		hour: 23,
		visitors: 1400,
		label: "11 PM"
	}
];
var peakHoursYAxisTickFormatter = createCompactCountAxisTickFormatter(getChartSeriesMax(peakHours.map((point) => ({ value: point.visitors }))));
var visitorTypes = {
	new: 89200,
	returning: 54800
};
var trafficComposition = {
	human: 78,
	ai: 22
};
var topAiAgents = [
	{
		name: "ChatGPT",
		platform: "OpenAI",
		icon: "/icons/chatgpt.svg",
		requests: 12400,
		topPages: [
			"/docs",
			"/api-reference",
			"/getting-started"
		]
	},
	{
		name: "Claude",
		platform: "Anthropic",
		icon: "/icons/claude.svg",
		requests: 8900,
		topPages: [
			"/docs",
			"/pricing",
			"/features"
		]
	},
	{
		name: "Gemini",
		platform: "Google",
		icon: "/icons/google.svg",
		requests: 6200,
		topPages: [
			"/docs",
			"/blog",
			"/"
		]
	},
	{
		name: "Perplexity",
		platform: "Perplexity AI",
		icon: "/icons/perplexity.svg",
		requests: 4100,
		topPages: [
			"/docs",
			"/",
			"/pricing"
		]
	},
	{
		name: "Copilot",
		platform: "Microsoft",
		icon: "/icons/microsoft.svg",
		requests: 2800,
		topPages: ["/docs", "/api-reference"]
	}
];
var aiDiscoveryImpact = {
	humanConversions: 342,
	attributionRate: 2.7,
	trend: 18
};
function formatNumber(num) {
	if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
	if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
	return num.toString();
}
function formatMetricValue(metric) {
	switch (metric.id) {
		case "pagesPerVisit": return metric.value.toFixed(1);
		case "bounceRate": return metric.value.toFixed(1) + "%";
		case "visitDuration": return `${Math.floor(metric.value / 60)}m ${metric.value % 60}s`;
		default: return formatNumber(metric.value);
	}
}
var CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		const data = payload[0].payload;
		return /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-popover px-3 py-2",
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-[13px] font-medium text-foreground",
				children: [
					data.date,
					" ",
					formatNumber(data.visitors)
				]
			})
		});
	}
	return null;
};
function MetricTab({ metric, isActive, onClick }) {
	const t = useT();
	const isPositive = metric.id === "bounceRate" ? metric.change < 0 : metric.change > 0;
	const TrendIcon = isPositive ? TrendingUp : TrendingDown;
	return /* @__PURE__ */ jsxs("button", {
		onClick,
		className: cn("relative flex min-w-[140px] flex-col gap-0.5 px-3 py-2.5 text-start transition-colors", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: cn("text-[18px] font-semibold tracking-tight tabular-nums", isActive ? "text-foreground" : "text-muted-foreground"),
					children: formatMetricValue(metric)
				}), /* @__PURE__ */ jsxs("span", {
					className: cn("flex items-center gap-0.5 text-[10px] font-semibold tabular-nums", isPositive ? isActive ? "text-emerald-500" : "text-emerald-500/60" : isActive ? "text-red-500" : "text-red-500/60"),
					children: [
						/* @__PURE__ */ jsx(TrendIcon, { className: "h-2.5 w-2.5" }),
						Math.abs(metric.change),
						"%"
					]
				})]
			}),
			/* @__PURE__ */ jsx("span", {
				className: cn("text-[11px] font-medium", isActive ? "text-muted-foreground" : "text-muted-foreground/70"),
				children: t(metric.label)
			}),
			isActive && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 start-0 end-0 h-[2px] bg-foreground" })
		]
	});
}
function MapContent({ data }) {
	const t = useT();
	const { map, isLoaded } = useMap();
	React$1.useEffect(() => {
		if (!map || !isLoaded) return;
		const resizeMap = () => {
			const container$1 = map.getContainer();
			if (container$1) {
				const rect = container$1.getBoundingClientRect();
				if (container$1.offsetParent !== null && rect.width > 0 && rect.height > 0) requestAnimationFrame(() => {
					map.resize();
				});
			}
		};
		const handleLoad = () => {
			setTimeout(resizeMap, 100);
		};
		map.on("load", handleLoad);
		const container = map.getContainer();
		if (container) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setTimeout(() => {
						resizeMap();
					}, 100);
				});
			}, { threshold: .1 });
			observer.observe(container);
			const initialTimeout = setTimeout(() => {
				resizeMap();
			}, 200);
			return () => {
				clearTimeout(initialTimeout);
				map.off("load", handleLoad);
				observer.disconnect();
			};
		}
		return () => {
			map.off("load", handleLoad);
		};
	}, [map, isLoaded]);
	const maxVisitors = Math.max(...data.map((d) => d.visitors));
	const minSize = 8;
	const maxSize = 20;
	const minVisitors = Math.min(...data.map((d) => d.visitors));
	const maxVisitorsForLegend = maxVisitors;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(MapControls, {
			position: "top-right",
			showZoom: true
		}),
		data.map((location) => {
			const coords = COUNTRY_COORDINATES[location.code];
			if (!coords) return null;
			const [longitude, latitude] = coords;
			const size = Math.max(minSize, Math.min(maxSize, location.visitors / maxVisitors * maxSize));
			return /* @__PURE__ */ jsxs(MapMarker, {
				longitude,
				latitude,
				children: [/* @__PURE__ */ jsx(MarkerContent, { children: /* @__PURE__ */ jsx("div", {
					className: "relative flex cursor-pointer items-center justify-center rounded-full border-2 border-white transition-transform hover:scale-110",
					style: {
						width: `${size}px`,
						height: `${size}px`,
						backgroundColor: "var(--chart-brand)"
					}
				}) }), /* @__PURE__ */ jsx(MarkerPopup, {
					closeButton: false,
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-border bg-popover px-3 py-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background",
								children: /* @__PURE__ */ jsx("img", {
									src: `${sdk.forConsole.client.config.endpoint}/avatars/flags/${location.code.toLowerCase()}?width=40&height=40&quality=100&project=console`,
									alt: `${location.country} flag`,
									className: "h-full w-full object-cover",
									role: "img",
									"aria-label": `${location.country} flag`
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[12px] font-medium",
								children: location.country
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-1 text-[11px] text-muted-foreground",
							children: [
								formatNumber(location.visitors),
								" ",
								t("visitors")
							]
						})]
					})
				})]
			}, location.code);
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "absolute bottom-8 start-4 rounded-lg border border-border bg-background/95 px-3 py-2 backdrop-blur-sm",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-[11px] font-semibold text-foreground",
				children: t("Visitors")
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-full border-2 border-white",
							style: {
								width: `${minSize}px`,
								height: `${minSize}px`,
								backgroundColor: "var(--chart-brand)"
							}
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-medium text-muted-foreground tabular-nums",
							children: formatNumber(minVisitors)
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-px w-4 bg-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-full border-2 border-white",
							style: {
								width: `${maxSize}px`,
								height: `${maxSize}px`,
								backgroundColor: "var(--chart-brand)"
							}
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-medium text-muted-foreground tabular-nums",
							children: formatNumber(maxVisitorsForLegend)
						})]
					})
				]
			})]
		})
	] });
}
function WorldMapChart({ data }) {
	return /* @__PURE__ */ jsx("div", {
		className: "relative h-full w-full p-2 flex flex-col",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex-1 w-full overflow-hidden rounded-lg min-h-[400px]",
			children: /* @__PURE__ */ jsx(Map$1, {
				center: React$1.useMemo(() => {
					const coords = data.map((item) => COUNTRY_COORDINATES[item.code]).filter(Boolean);
					if (coords.length === 0) return [0, 20];
					return [coords.reduce((sum, [lng]) => sum + lng, 0) / coords.length, coords.reduce((sum, [, lat]) => sum + lat, 0) / coords.length];
				}, [data]),
				zoom: 2,
				disableScrollZoom: true,
				children: /* @__PURE__ */ jsx(MapContent, { data })
			})
		})
	});
}
function View({ websiteId, websiteName = "Main Marketing Site", onBack }) {
	const t = useT();
	const [activeTab, setActiveTab] = useState("analytics");
	const [activeMetric, setActiveMetric] = useState("unique");
	const [dateRange, setDateRange] = useState({
		from: startOfDay(subDays(/* @__PURE__ */ new Date(), 29)),
		to: endOfDay(/* @__PURE__ */ new Date())
	});
	const [comparisonType, setComparisonType] = useState("none");
	const [, setComparisonRange] = useState();
	const [locationView, setLocationView] = useState("countries");
	const [sourcesView, setSourcesView] = useState("sources");
	const [pagesView, setPagesView] = useState("top");
	const [techView, setTechView] = useState("browsers");
	const chartContainerRef = useRef(null);
	const [chartHasDimensions, setChartHasDimensions] = useState(false);
	const peakHoursChartRef = useRef(null);
	const [peakHoursChartHasDimensions, setPeakHoursChartHasDimensions] = useState(false);
	useEffect(() => {
		if (!chartContainerRef.current) return;
		const checkDimensions = () => {
			if (chartContainerRef.current) {
				const rect = chartContainerRef.current.getBoundingClientRect();
				const computedStyle = window.getComputedStyle(chartContainerRef.current);
				setChartHasDimensions(computedStyle.display !== "none" && computedStyle.visibility !== "hidden" && chartContainerRef.current.offsetParent !== null && rect.width > 0 && rect.height > 0);
			}
		};
		const timeout = setTimeout(() => {
			checkDimensions();
		}, 50);
		const observer = new ResizeObserver(() => {
			checkDimensions();
		});
		if (chartContainerRef.current) observer.observe(chartContainerRef.current);
		return () => {
			clearTimeout(timeout);
			observer.disconnect();
		};
	}, []);
	useEffect(() => {
		if (!peakHoursChartRef.current) return;
		const checkDimensions = () => {
			if (peakHoursChartRef.current) {
				const rect = peakHoursChartRef.current.getBoundingClientRect();
				const computedStyle = window.getComputedStyle(peakHoursChartRef.current);
				setPeakHoursChartHasDimensions(computedStyle.display !== "none" && computedStyle.visibility !== "hidden" && peakHoursChartRef.current.offsetParent !== null && rect.width > 0 && rect.height > 0);
			}
		};
		const timeout = setTimeout(() => {
			checkDimensions();
		}, 50);
		const observer = new ResizeObserver(() => {
			checkDimensions();
		});
		if (peakHoursChartRef.current) observer.observe(peakHoursChartRef.current);
		return () => {
			clearTimeout(timeout);
			observer.disconnect();
		};
	}, []);
	const [showAllCountries, setShowAllCountries] = useState(false);
	const [showAllRegions, setShowAllRegions] = useState(false);
	const [showAllCities, setShowAllCities] = useState(false);
	const [showAllTopPages, setShowAllTopPages] = useState(false);
	const [showAllEntryPages, setShowAllEntryPages] = useState(false);
	const [showAllExitPages, setShowAllExitPages] = useState(false);
	const [showAllBrowsers, setShowAllBrowsers] = useState(false);
	const [showAllOS, setShowAllOS] = useState(false);
	const [showAllDevices, setShowAllDevices] = useState(false);
	React$1.useEffect(() => {
		setShowAllCountries(false);
		setShowAllRegions(false);
		setShowAllCities(false);
	}, [locationView]);
	React$1.useEffect(() => {
		setShowAllTopPages(false);
		setShowAllEntryPages(false);
		setShowAllExitPages(false);
	}, [pagesView]);
	React$1.useEffect(() => {
		setShowAllBrowsers(false);
		setShowAllOS(false);
		setShowAllDevices(false);
	}, [techView]);
	const tabs = [{
		id: "analytics",
		label: t("Analytics")
	}, {
		id: "settings",
		label: t("Settings")
	}];
	const maxLocationVisitors = Math.max(...locationData.map((l) => l.visitors));
	const maxPageVisitors = Math.max(...topPages.map((p) => p.visitors));
	const maxSourceVisitors = Math.max(...topSources.map((s) => s.visitors));
	const maxBrowserVisitors = Math.max(...browsers.map((b) => b.visitors));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 items-center gap-2",
				children: [
					onBack && /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 w-7 p-0",
						onClick: onBack,
						children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: websiteName
					}),
					websiteId ? /* @__PURE__ */ jsx(CopyableId, {
						id: websiteId,
						size: "xs",
						className: "shrink-0"
					}) : null
				]
			}),
			tabs,
			activeTab,
			onTabChange: setActiveTab,
			showFilters: false,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 flex flex-col",
			children: /* @__PURE__ */ jsxs("div", {
				className: cn("mx-auto w-full max-w-7xl flex-1"),
				children: [activeTab === "analytics" && /* @__PURE__ */ jsxs("div", {
					className: "px-4 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), /* @__PURE__ */ jsxs("span", {
									className: "text-[12px] font-medium text-muted-foreground",
									children: ["30 ", t("active visitors")]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(ComparisonSelector, {
									dateRange,
									comparisonType,
									onComparisonTypeChange: setComparisonType,
									onComparisonRangeChange: setComparisonRange
								}), /* @__PURE__ */ jsx(DateRangePicker, {
									dateRange,
									onDateRangeChange: setDateRange
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-card",
							children: [/* @__PURE__ */ jsx("div", {
								className: "border-b border-border px-2",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex overflow-x-auto overflow-y-hidden",
									children: visitorMetrics.map((metric, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex shrink-0",
										children: [index > 0 && /* @__PURE__ */ jsx("div", { className: "my-2 w-px bg-border" }), /* @__PURE__ */ jsx(MetricTab, {
											metric,
											isActive: activeMetric === metric.id,
											onClick: () => setActiveMetric(metric.id)
										})]
									}, metric.id))
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "p-4",
								children: /* @__PURE__ */ jsx("div", {
									ref: chartContainerRef,
									className: "h-[280px] w-full text-muted-foreground",
									children: chartHasDimensions && typeof window !== "undefined" ? /* @__PURE__ */ jsx(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										minWidth: 0,
										minHeight: 0,
										children: /* @__PURE__ */ jsxs(AreaChart, {
											data: chartData,
											margin: USAGE_CHART_MARGIN,
											children: [
												/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
													id: "visitorGradient",
													x1: "0",
													y1: "0",
													x2: "0",
													y2: "1",
													children: [/* @__PURE__ */ jsx("stop", {
														offset: "0%",
														stopColor: "var(--chart-brand)",
														stopOpacity: .15
													}), /* @__PURE__ */ jsx("stop", {
														offset: "100%",
														stopColor: "var(--chart-brand)",
														stopOpacity: 0
													})]
												}) }),
												/* @__PURE__ */ jsx(SeriesChartXAxis, {
													pointCount: chartData.length,
													tick: {
														fill: "currentColor",
														fontSize: 12
													}
												}),
												/* @__PURE__ */ jsx(YAxis, {
													axisLine: false,
													tickLine: false,
													tick: {
														fill: "currentColor",
														fontSize: 12
													},
													tickFormatter: visitorYAxisTickFormatter,
													dx: -5,
													width: 48
												}),
												/* @__PURE__ */ jsx(Tooltip, {
													content: /* @__PURE__ */ jsx(CustomTooltip, {}),
													cursor: false
												}),
												/* @__PURE__ */ jsx(Area, {
													type: "monotone",
													dataKey: "visitors",
													stroke: "var(--chart-brand)",
													strokeWidth: 2,
													fill: "url(#visitorGradient)",
													dot: false,
													activeDot: {
														r: 5,
														fill: "var(--chart-brand)",
														stroke: "#fff",
														strokeWidth: 2
													}
												})
											]
										})
									}) : null
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "border-b border-border px-4 py-2.5",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("Traffic composition")
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-0.5 text-[11px] text-muted-foreground",
										children: t("Human visitors vs AI agents and crawlers")
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "p-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "space-y-3",
										children: [{
											type: "Human",
											value: trafficComposition.human,
											icon: /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
											color: "var(--chart-1)"
										}, {
											type: "AI agents",
											value: trafficComposition.ai,
											icon: /* @__PURE__ */ jsx(Bot, { className: "h-4 w-4" }),
											color: "var(--chart-2)"
										}].map((item) => {
											const total = trafficComposition.human + trafficComposition.ai;
											const percentage = total > 0 ? item.value / total * 100 : 0;
											return /* @__PURE__ */ jsxs("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx("span", {
															className: "flex h-4 w-4 items-center justify-center",
															style: { color: item.color },
															children: item.icon
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[12px] font-medium text-foreground",
															children: t(item.type)
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3",
														children: [/* @__PURE__ */ jsxs("span", {
															className: "text-[11px] font-medium text-muted-foreground tabular-nums",
															children: [percentage.toFixed(1), "%"]
														}), /* @__PURE__ */ jsxs("span", {
															className: "text-[12px] font-semibold tabular-nums text-foreground",
															children: [
																formatNumber(Math.round(percentage / 100 * (visitorMetrics.find((m) => m.id === "total")?.value ?? 0))),
																" ",
																t("visits")
															]
														})]
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "h-2 w-full overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full transition-all",
														style: {
															width: `${percentage}%`,
															backgroundColor: item.color
														}
													})
												})]
											}, item.type);
										})
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "border-b border-border px-4 py-2.5",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("AI discovery impact")
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-0.5 text-[11px] text-muted-foreground",
										children: t("Human sign-ups attributed to AI agent discovery")
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "p-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-4",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-baseline gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-[24px] font-semibold tracking-tight text-foreground tabular-nums",
													children: formatNumber(aiDiscoveryImpact.humanConversions)
												}), /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums",
													children: [
														/* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
														"+",
														aiDiscoveryImpact.trend,
														"%"
													]
												})]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-[12px] text-muted-foreground",
												children: [
													/* @__PURE__ */ jsxs("span", {
														className: "font-medium text-foreground",
														children: [aiDiscoveryImpact.attributionRate, "%"]
													}),
													" ",
													t("of human conversions came from users who discovered you via AI agents")
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 rounded-md bg-violet-500/10 px-3 py-2",
												children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" }), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground",
													children: t("Optimize docs and key pages for AI visibility to increase discovery-driven sign-ups")
												})]
											})
										]
									})
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6",
							children: /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "border-b border-border px-4 py-2.5",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("AI agents")
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-0.5 text-[11px] text-muted-foreground",
										children: t("Top AI platforms crawling and accessing your site")
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "p-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "space-y-0.5",
										children: topAiAgents.map((agent) => {
											const maxRequests = Math.max(...topAiAgents.map((a) => a.requests));
											const percentage = Math.round(agent.requests / maxRequests * 100);
											const share = Math.round(agent.requests / topAiAgents.reduce((sum, a) => sum + a.requests, 0) * 100);
											return /* @__PURE__ */ jsxs("div", {
												className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
												children: [/* @__PURE__ */ jsx("div", {
													className: "absolute inset-y-0 start-0 rounded-md transition-all group-hover:opacity-80",
													style: {
														width: `${percentage}%`,
														backgroundColor: "var(--chart-2)",
														opacity: .12
													}
												}), /* @__PURE__ */ jsxs("div", {
													className: "relative flex flex-1 items-center gap-2",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-muted/30",
															children: /* @__PURE__ */ jsx("img", {
																src: agent.icon,
																alt: "",
																className: `h-3.5 w-3.5 object-contain brightness-0 opacity-[0.55] dark:brightness-100 dark:opacity-100`,
																loading: "lazy"
															})
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex min-w-0 flex-1 flex-col",
															children: [/* @__PURE__ */ jsx("span", {
																className: "truncate text-[12px] font-medium text-foreground",
																children: agent.name
															}), /* @__PURE__ */ jsx("span", {
																className: "truncate text-[10px] text-muted-foreground",
																children: agent.platform
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex shrink-0 items-center gap-3",
															children: [
																/* @__PURE__ */ jsx("span", {
																	className: "hidden truncate max-w-[140px] text-[10px] text-muted-foreground sm:inline",
																	children: agent.topPages[0]
																}),
																/* @__PURE__ */ jsxs("span", {
																	className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																	children: [share, "%"]
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																	children: formatNumber(agent.requests)
																})
															]
														})
													]
												})]
											}, agent.name);
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 grid gap-4 lg:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-4 py-2.5",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[13px] font-semibold text-foreground",
												children: t("Traffic sources")
											}), /* @__PURE__ */ jsx(Tabs, {
												value: sourcesView,
												onValueChange: (v) => setSourcesView(v),
												children: /* @__PURE__ */ jsxs(TabsList, {
													className: "h-7",
													children: [
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "channels",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Channels")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "sources",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Sources")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "campaigns",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Campaigns")
														})
													]
												})
											})]
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "p-4",
										children: /* @__PURE__ */ jsxs(Tabs, {
											value: sourcesView,
											onValueChange: (v) => setSourcesView(v),
											children: [
												/* @__PURE__ */ jsx(TabsContent, {
													value: "channels",
													className: "mt-0",
													children: /* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: channels.map((channel) => {
															const maxChannelVisitors = Math.max(...channels.map((c) => c.visitors));
															const percentage = Math.round(channel.visitors / maxChannelVisitors * 100);
															const share = Math.round(channel.visitors / channels.reduce((sum, c) => sum + c.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md transition-all group-hover:opacity-80",
																	style: {
																		width: `${percentage}%`,
																		backgroundColor: channel.color,
																		opacity: .15
																	}
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "h-2.5 w-2.5 rounded-full",
																			style: { backgroundColor: channel.color }
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: t(channel.name)
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(channel.visitors)
																			})]
																		})
																	]
																})]
															}, channel.name);
														})
													})
												}),
												/* @__PURE__ */ jsx(TabsContent, {
													value: "sources",
													className: "mt-0",
													children: /* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: topSources.map((source) => {
															const percentage = Math.round(source.visitors / maxSourceVisitors * 100);
															const share = Math.round(source.visitors / topSources.reduce((sum, s) => sum + s.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "flex h-4 w-4 items-center justify-center text-[11px] text-muted-foreground",
																			children: source.icon
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: source.name
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(source.visitors)
																			})]
																		})
																	]
																})]
															}, source.name);
														})
													})
												}),
												/* @__PURE__ */ jsx(TabsContent, {
													value: "campaigns",
													className: "mt-0",
													children: /* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: campaigns.map((campaign, index) => {
															const maxCampaignVisitors = Math.max(...campaigns.map((c) => c.visitors));
															const percentage = Math.round(campaign.visitors / maxCampaignVisitors * 100);
															const share = Math.round(campaign.visitors / campaigns.reduce((sum, c) => sum + c.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "font-mono text-[11px] text-muted-foreground",
																			children: index + 1
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: campaign.name
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(campaign.visitors)
																			})]
																		})
																	]
																})]
															}, campaign.name);
														})
													})
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-4 py-2.5",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[13px] font-semibold text-foreground",
												children: t("Pages")
											}), /* @__PURE__ */ jsx(Tabs, {
												value: pagesView,
												onValueChange: (v) => setPagesView(v),
												children: /* @__PURE__ */ jsxs(TabsList, {
													className: "h-7",
													children: [
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "top",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Top Pages")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "entry",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Entry Pages")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "exit",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Exit Pages")
														})
													]
												})
											})]
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "p-4",
										children: /* @__PURE__ */ jsxs(Tabs, {
											value: pagesView,
											onValueChange: (v) => setPagesView(v),
											children: [
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "top",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllTopPages ? topPages : topPages.slice(0, 15)).map((page, index) => {
															const percentage = Math.round(page.visitors / maxPageVisitors * 100);
															const share = Math.round(page.visitors / topPages.reduce((sum, p) => sum + p.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "font-mono text-[11px] text-muted-foreground",
																			children: index + 1
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate font-mono text-[12px] font-medium text-foreground",
																			children: page.path
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(page.visitors)
																			})]
																		})
																	]
																})]
															}, page.path);
														})
													}), topPages.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllTopPages(!showAllTopPages),
															className: "h-7 text-[11px]",
															children: showAllTopPages ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																topPages.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												}),
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "entry",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllEntryPages ? entryPages : entryPages.slice(0, 15)).map((page, index) => {
															const maxEntryVisitors = Math.max(...entryPages.map((p) => p.visitors));
															const percentage = Math.round(page.visitors / maxEntryVisitors * 100);
															const share = Math.round(page.visitors / entryPages.reduce((sum, p) => sum + p.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "font-mono text-[11px] text-muted-foreground",
																			children: index + 1
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate font-mono text-[12px] font-medium text-foreground",
																			children: page.path
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(page.visitors)
																			})]
																		})
																	]
																})]
															}, page.path);
														})
													}), entryPages.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllEntryPages(!showAllEntryPages),
															className: "h-7 text-[11px]",
															children: showAllEntryPages ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																entryPages.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												}),
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "exit",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllExitPages ? exitPages : exitPages.slice(0, 15)).map((page, index) => {
															const maxExitVisitors = Math.max(...exitPages.map((p) => p.visitors));
															const percentage = Math.round(page.visitors / maxExitVisitors * 100);
															const share = Math.round(page.visitors / exitPages.reduce((sum, p) => sum + p.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "font-mono text-[11px] text-muted-foreground",
																			children: index + 1
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate font-mono text-[12px] font-medium text-foreground",
																			children: page.path
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(page.visitors)
																			})]
																		})
																	]
																})]
															}, page.path);
														})
													}), exitPages.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllExitPages(!showAllExitPages),
															className: "h-7 text-[11px]",
															children: showAllExitPages ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																exitPages.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col rounded-lg border border-border bg-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-4 py-2.5",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[13px] font-semibold text-foreground",
												children: t("Locations")
											}), /* @__PURE__ */ jsx(Tabs, {
												value: locationView,
												onValueChange: (v) => setLocationView(v),
												children: /* @__PURE__ */ jsxs(TabsList, {
													className: "h-7",
													children: [
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "map",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Map")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "countries",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Countries")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "regions",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Regions")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "cities",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Cities")
														})
													]
												})
											})]
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-1 min-h-[400px] w-full flex-col overflow-hidden",
										children: /* @__PURE__ */ jsxs(Tabs, {
											value: locationView,
											onValueChange: (v) => setLocationView(v),
											className: "flex flex-1 flex-col",
											children: [
												locationView === "map" ? /* @__PURE__ */ jsx("div", {
													className: "mt-0 flex flex-1 min-h-[400px]",
													children: /* @__PURE__ */ jsx(WorldMapChart, { data: locationData })
												}) : null,
												/* @__PURE__ */ jsx(TabsContent, {
													value: "countries",
													className: "mt-0 flex-1 min-h-[400px]",
													children: /* @__PURE__ */ jsxs("div", {
														className: "h-full overflow-y-auto p-4",
														children: [/* @__PURE__ */ jsx("div", {
															className: "space-y-0.5",
															children: (showAllCountries ? locationData : locationData.slice(0, 15)).map((location) => {
																return /* @__PURE__ */ jsxs("div", {
																	className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																	children: [/* @__PURE__ */ jsx("div", {
																		className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																		style: { width: `${Math.round(location.visitors / maxLocationVisitors * 100)}%` }
																	}), /* @__PURE__ */ jsxs("div", {
																		className: "relative flex flex-1 items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx("div", {
																				className: "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background",
																				children: /* @__PURE__ */ jsx("img", {
																					src: `${sdk.forConsole.client.config.endpoint}/avatars/flags/${location.code.toLowerCase()}?width=40&height=40&quality=100&project=console`,
																					alt: `${location.country} flag`,
																					className: "h-full w-full object-cover",
																					role: "img",
																					"aria-label": `${location.country} flag`
																				})
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "flex-1 truncate text-[12px] font-medium text-foreground",
																				children: location.country
																			}),
																			/* @__PURE__ */ jsxs("div", {
																				className: "flex items-center gap-3",
																				children: [/* @__PURE__ */ jsxs("span", {
																					className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																					children: [
																						formatNumber(location.uniqueVisitors),
																						" ",
																						t("unique")
																					]
																				}), /* @__PURE__ */ jsx("span", {
																					className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																					children: formatNumber(location.visitors)
																				})]
																			})
																		]
																	})]
																}, location.country);
															})
														}), locationData.length > 15 && /* @__PURE__ */ jsx("div", {
															className: "mt-3 flex justify-center",
															children: /* @__PURE__ */ jsx(Button, {
																variant: "ghost",
																size: "sm",
																onClick: () => setShowAllCountries(!showAllCountries),
																className: "h-7 text-[11px]",
																children: showAllCountries ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																	t("Show more"),
																	" (",
																	locationData.length - 15,
																	" ",
																	t("more"),
																	")",
																	/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
																] })
															})
														})]
													})
												}),
												/* @__PURE__ */ jsx(TabsContent, {
													value: "regions",
													className: "mt-0 flex-1 min-h-[400px]",
													children: /* @__PURE__ */ jsxs("div", {
														className: "h-full overflow-y-auto p-4",
														children: [/* @__PURE__ */ jsx("div", {
															className: "space-y-0.5",
															children: (showAllRegions ? regions : regions.slice(0, 15)).map((region) => {
																const maxRegionVisitors = Math.max(...regions.map((r) => r.visitors));
																return /* @__PURE__ */ jsxs("div", {
																	className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																	children: [/* @__PURE__ */ jsx("div", {
																		className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																		style: { width: `${Math.round(region.visitors / maxRegionVisitors * 100)}%` }
																	}), /* @__PURE__ */ jsxs("div", {
																		className: "relative flex flex-1 items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx("div", {
																				className: "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background",
																				children: /* @__PURE__ */ jsx("img", {
																					src: `${sdk.forConsole.client.config.endpoint}/avatars/flags/${region.code.toLowerCase()}?width=40&height=40&quality=100&project=console`,
																					alt: `${region.country} flag`,
																					className: "h-full w-full object-cover",
																					role: "img",
																					"aria-label": `${region.country} flag`
																				})
																			}),
																			/* @__PURE__ */ jsxs("div", {
																				className: "flex flex-1 flex-col",
																				children: [/* @__PURE__ */ jsx("span", {
																					className: "text-[12px] font-medium text-foreground",
																					children: region.region
																				}), /* @__PURE__ */ jsx("span", {
																					className: "text-[11px] text-muted-foreground",
																					children: region.country
																				})]
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(region.visitors)
																			})
																		]
																	})]
																}, `${region.region}-${region.country}`);
															})
														}), regions.length > 15 && /* @__PURE__ */ jsx("div", {
															className: "mt-3 flex justify-center",
															children: /* @__PURE__ */ jsx(Button, {
																variant: "ghost",
																size: "sm",
																onClick: () => setShowAllRegions(!showAllRegions),
																className: "h-7 text-[11px]",
																children: showAllRegions ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																	t("Show more"),
																	" (",
																	regions.length - 15,
																	" ",
																	t("more"),
																	")",
																	/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
																] })
															})
														})]
													})
												}),
												/* @__PURE__ */ jsx(TabsContent, {
													value: "cities",
													className: "mt-0 flex-1 min-h-[400px]",
													children: /* @__PURE__ */ jsxs("div", {
														className: "h-full overflow-y-auto p-4",
														children: [/* @__PURE__ */ jsx("div", {
															className: "space-y-0.5",
															children: (showAllCities ? cities : cities.slice(0, 15)).map((city) => {
																const maxCityVisitors = Math.max(...cities.map((c) => c.visitors));
																return /* @__PURE__ */ jsxs("div", {
																	className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																	children: [/* @__PURE__ */ jsx("div", {
																		className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																		style: { width: `${Math.round(city.visitors / maxCityVisitors * 100)}%` }
																	}), /* @__PURE__ */ jsxs("div", {
																		className: "relative flex flex-1 items-center gap-2",
																		children: [
																			/* @__PURE__ */ jsx("div", {
																				className: "flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded border border-border/50 bg-background",
																				children: /* @__PURE__ */ jsx("img", {
																					src: `${sdk.forConsole.client.config.endpoint}/avatars/flags/${city.code.toLowerCase()}?width=40&height=40&quality=100&project=console`,
																					alt: `${city.country} flag`,
																					className: "h-full w-full object-cover",
																					role: "img",
																					"aria-label": `${city.country} flag`
																				})
																			}),
																			/* @__PURE__ */ jsxs("div", {
																				className: "flex flex-1 flex-col",
																				children: [/* @__PURE__ */ jsx("span", {
																					className: "text-[12px] font-medium text-foreground",
																					children: city.city
																				}), /* @__PURE__ */ jsx("span", {
																					className: "text-[11px] text-muted-foreground",
																					children: city.country
																				})]
																			}),
																			/* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(city.visitors)
																			})
																		]
																	})]
																}, `${city.city}-${city.country}`);
															})
														}), cities.length > 15 && /* @__PURE__ */ jsx("div", {
															className: "mt-3 flex justify-center",
															children: /* @__PURE__ */ jsx(Button, {
																variant: "ghost",
																size: "sm",
																onClick: () => setShowAllCities(!showAllCities),
																className: "h-7 text-[11px]",
																children: showAllCities ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																	t("Show more"),
																	" (",
																	cities.length - 15,
																	" ",
																	t("more"),
																	")",
																	/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
																] })
															})
														})]
													})
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-border bg-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-4 py-2.5",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-[13px] font-semibold text-foreground",
												children: t("Technology")
											}), /* @__PURE__ */ jsx(Tabs, {
												value: techView,
												onValueChange: (v) => setTechView(v),
												children: /* @__PURE__ */ jsxs(TabsList, {
													className: "h-7",
													children: [
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "browsers",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Browsers")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "os",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Operating Systems")
														}),
														/* @__PURE__ */ jsx(TabsTrigger, {
															value: "devices",
															className: "h-5 px-2.5 text-[11px]",
															children: t("Devices")
														})
													]
												})
											})]
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "p-4",
										children: /* @__PURE__ */ jsxs(Tabs, {
											value: techView,
											onValueChange: (v) => setTechView(v),
											children: [
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "browsers",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllBrowsers ? browsers : browsers.slice(0, 15)).map((browser) => {
															const percentage = Math.round(browser.visitors / maxBrowserVisitors * 100);
															const share = Math.round(browser.visitors / browsers.reduce((sum, b) => sum + b.visitors, 0) * 100);
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md bg-accent/30 transition-all group-hover:bg-accent/50",
																	style: { width: `${percentage}%` }
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "flex h-4 w-4 items-center justify-center text-muted-foreground",
																			children: browser.icon
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: browser.name
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [share, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(browser.visitors)
																			})]
																		})
																	]
																})]
															}, browser.name);
														})
													}), browsers.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllBrowsers(!showAllBrowsers),
															className: "h-7 text-[11px]",
															children: showAllBrowsers ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																browsers.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												}),
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "os",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllOS ? operatingSystems : operatingSystems.slice(0, 15)).map((os) => {
															const total = operatingSystems.reduce((sum, o) => sum + o.visitors, 0);
															const percentage = Math.round(os.visitors / total * 100);
															const maxOSVisitors = Math.max(...operatingSystems.map((o) => o.visitors));
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md transition-all group-hover:opacity-80",
																	style: {
																		width: `${Math.round(os.visitors / maxOSVisitors * 100)}%`,
																		backgroundColor: os.color,
																		opacity: .15
																	}
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("div", {
																			className: "h-2.5 w-2.5 rounded-full",
																			style: { backgroundColor: os.color }
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: os.name
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [percentage, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(os.visitors)
																			})]
																		})
																	]
																})]
															}, os.name);
														})
													}), operatingSystems.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllOS(!showAllOS),
															className: "h-7 text-[11px]",
															children: showAllOS ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																operatingSystems.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												}),
												/* @__PURE__ */ jsxs(TabsContent, {
													value: "devices",
													className: "mt-0",
													children: [/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5",
														children: (showAllDevices ? devices : devices.slice(0, 15)).map((device) => {
															const total = devices.reduce((sum, d) => sum + d.visitors, 0);
															const percentage = Math.round(device.visitors / total * 100);
															const maxDeviceVisitors = Math.max(...devices.map((d) => d.visitors));
															return /* @__PURE__ */ jsxs("div", {
																className: "group relative flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/50",
																children: [/* @__PURE__ */ jsx("div", {
																	className: "absolute inset-y-0 start-0 rounded-md transition-all group-hover:opacity-80",
																	style: {
																		width: `${Math.round(device.visitors / maxDeviceVisitors * 100)}%`,
																		backgroundColor: device.color,
																		opacity: .15
																	}
																}), /* @__PURE__ */ jsxs("div", {
																	className: "relative flex flex-1 items-center gap-2",
																	children: [
																		/* @__PURE__ */ jsx("span", {
																			className: "flex h-4 w-4 items-center justify-center",
																			style: { color: device.color },
																			children: device.icon
																		}),
																		/* @__PURE__ */ jsx("span", {
																			className: "flex-1 truncate text-[12px] font-medium text-foreground",
																			children: t(device.type)
																		}),
																		/* @__PURE__ */ jsxs("div", {
																			className: "flex items-center gap-3",
																			children: [/* @__PURE__ */ jsxs("span", {
																				className: "text-[11px] font-medium text-muted-foreground tabular-nums",
																				children: [percentage, "%"]
																			}), /* @__PURE__ */ jsx("span", {
																				className: "min-w-[50px] text-end text-[12px] font-semibold tabular-nums text-foreground",
																				children: formatNumber(device.visitors)
																			})]
																		})
																	]
																})]
															}, device.type);
														})
													}), devices.length > 15 && /* @__PURE__ */ jsx("div", {
														className: "mt-3 flex justify-center",
														children: /* @__PURE__ */ jsx(Button, {
															variant: "ghost",
															size: "sm",
															onClick: () => setShowAllDevices(!showAllDevices),
															className: "h-7 text-[11px]",
															children: showAllDevices ? /* @__PURE__ */ jsxs(Fragment, { children: [t("Show less"), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3 rotate-180" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
																t("Show more"),
																" (",
																devices.length - 15,
																" ",
																t("more"),
																")",
																/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3 w-3" })
															] })
														})
													})]
												})
											]
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 grid gap-4 lg:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card overflow-hidden",
								children: [/* @__PURE__ */ jsx("div", {
									className: "border-b border-border px-4 py-2.5",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("Peak hours")
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "px-4 pt-3 pb-4",
									children: /* @__PURE__ */ jsx("div", {
										ref: peakHoursChartRef,
										className: "h-[160px] w-full min-h-0 min-w-0",
										children: peakHoursChartHasDimensions && typeof window !== "undefined" ? /* @__PURE__ */ jsx(ChartContainer, {
											config: { visitors: {
												label: t("Visitors"),
												color: "var(--chart-brand)"
											} },
											className: "h-full w-full min-h-0 min-w-0",
											children: /* @__PURE__ */ jsxs(BarChart, {
												data: peakHours,
												margin: {
													top: 4,
													right: 4,
													left: 0,
													bottom: 0
												},
												children: [
													/* @__PURE__ */ jsx(SeriesChartXAxis, {
														pointCount: peakHours.length,
														dataKey: "label",
														maxTicks: 6,
														tick: {
															fill: "currentColor",
															fontSize: 9
														},
														height: 20,
														padding: {
															left: 4,
															right: 4
														}
													}),
													/* @__PURE__ */ jsx(YAxis, {
														axisLine: false,
														tickLine: false,
														tick: {
															fill: "currentColor",
															fontSize: 9
														},
														width: 48,
														tickFormatter: peakHoursYAxisTickFormatter
													}),
													/* @__PURE__ */ jsx(ChartTooltip, {
														cursor: {
															fill: "hsl(var(--accent))",
															opacity: .3
														},
														content: /* @__PURE__ */ jsx(ChartTooltipContent, {
															hideLabel: true,
															formatter: (value) => /* @__PURE__ */ jsxs("span", {
																className: "text-[12px] font-semibold tabular-nums",
																children: [
																	formatNumber(value),
																	" ",
																	t("visitors")
																]
															})
														})
													}),
													/* @__PURE__ */ jsx(Bar, {
														dataKey: "visitors",
														radius: [
															2,
															2,
															0,
															0
														],
														fill: "var(--color-visitors)",
														fillOpacity: .85
													})
												]
											})
										}) : null
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "border-b border-border px-4 py-2.5",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("Visitor types")
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "p-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "space-y-3",
										children: [{
											type: "New",
											visitors: visitorTypes.new,
											icon: /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4" }),
											color: "var(--chart-1)"
										}, {
											type: "Returning",
											visitors: visitorTypes.returning,
											icon: /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
											color: "var(--chart-2)"
										}].map((visitorType) => {
											const total = visitorTypes.new + visitorTypes.returning;
											const percentage = Math.round(visitorType.visitors / total * 100);
											return /* @__PURE__ */ jsxs("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ jsx("span", {
															className: "flex h-4 w-4 items-center justify-center",
															style: { color: visitorType.color },
															children: visitorType.icon
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[12px] font-medium text-foreground",
															children: t(`${visitorType.type} visitors`)
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3",
														children: [/* @__PURE__ */ jsxs("span", {
															className: "text-[11px] font-medium text-muted-foreground tabular-nums",
															children: [percentage, "%"]
														}), /* @__PURE__ */ jsx("span", {
															className: "text-[12px] font-semibold tabular-nums text-foreground",
															children: formatNumber(visitorType.visitors)
														})]
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "h-1.5 w-full overflow-hidden rounded-full bg-muted",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full transition-all",
														style: {
															width: `${percentage}%`,
															backgroundColor: visitorType.color
														}
													})
												})]
											}, visitorType.type);
										})
									})
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "border-b border-border px-4 py-2.5",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-semibold text-foreground",
										children: t("Goals")
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-6 text-center",
									children: [/* @__PURE__ */ jsx("p", {
										className: "mb-4 text-[13px] text-muted-foreground",
										children: t("Measure how often visitors complete specific actions. Goals allow you to track registrations, button clicks, form completions, external link clicks, file downloads, 404 error pages and more.")
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ jsx(Button, {
											variant: "outline",
											size: "sm",
											className: "h-8 text-[12px]",
											children: t("Hide this report")
										}), /* @__PURE__ */ jsxs(Button, {
											size: "sm",
											className: "h-8 text-[12px]",
											children: [t("Set up goals"), " →"]
										})]
									})]
								})]
							})
						})
					]
				}), activeTab === "settings" && /* @__PURE__ */ jsx("div", {
					className: "px-4 py-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-4 text-[14px] font-medium text-foreground",
							children: t("Settings")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Settings content will be displayed here.")
						})]
					})
				})]
			})
		})]
	});
}
function WebsiteAnalyticsPage() {
	const { projectId, websiteId } = Route$1.useParams();
	const navigate = useNavigate();
	const websiteName = {
		web1: "Main Marketing Site",
		web2: "Documentation Portal",
		web3: "Customer Dashboard",
		web4: "Blog"
	}[websiteId] || "Website Analytics";
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/analytics",
			params: { projectId }
		});
	};
	return /* @__PURE__ */ jsx(View, {
		websiteId,
		websiteName,
		onBack: handleBack
	});
}
export { WebsiteAnalyticsPage as component };
