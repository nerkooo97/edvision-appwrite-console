import * as React$1 from "react";
import { Children, PureComponent, cloneElement, createContext, createElement, forwardRef, isValidElement, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { createPortal } from "react-dom";
import get from "es-toolkit/compat/get";
import { isFragment } from "react-is";
import { area, curveBasis, curveBasisClosed, curveBasisOpen, curveBumpX, curveBumpY, curveLinear, curveLinearClosed, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, line, stack, stackOffsetExpand, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderNone } from "victory-vendor/d3-shape";
import uniqBy from "es-toolkit/compat/uniqBy";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";
import sortBy from "es-toolkit/compat/sortBy";
import { noop } from "es-toolkit";
import range from "es-toolkit/compat/range";
import * as d3Scales from "victory-vendor/d3-scale";
import Decimal from "decimal.js-light/decimal.mjs";
import EventEmitter from "eventemitter3";
import throttle from "es-toolkit/compat/throttle";
import last from "es-toolkit/compat/last";
import "use-sync-external-store/with-selector.js";
var mathSign = (value) => {
	if (value === 0) return 0;
	if (value > 0) return 1;
	return -1;
};
var isNan = (value) => {
	return typeof value == "number" && value != +value;
};
var isPercent = (value) => typeof value === "string" && value.indexOf("%") === value.length - 1;
var isNumber = (value) => (typeof value === "number" || value instanceof Number) && !isNan(value);
var isNumOrStr = (value) => isNumber(value) || typeof value === "string";
var idCounter = 0;
var uniqueId = (prefix) => {
	var id = ++idCounter;
	return "".concat(prefix || "").concat(id);
};
var getPercentValue = function getPercentValue$1(percent, totalValue) {
	var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
	var validate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	if (!isNumber(percent) && typeof percent !== "string") return defaultValue;
	var value;
	if (isPercent(percent)) {
		if (totalValue == null) return defaultValue;
		var index = percent.indexOf("%");
		value = totalValue * parseFloat(percent.slice(0, index)) / 100;
	} else value = +percent;
	if (isNan(value)) value = defaultValue;
	if (validate && totalValue != null && value > totalValue) value = totalValue;
	return value;
};
var hasDuplicate = (ary) => {
	if (!Array.isArray(ary)) return false;
	var len = ary.length;
	var cache = {};
	for (var i = 0; i < len; i++) if (!cache[ary[i]]) cache[ary[i]] = true;
	else return true;
	return false;
};
function interpolate(start, end, t) {
	if (isNumber(start) && isNumber(end)) return start + t * (end - start);
	return end;
}
function findEntryInArray(ary, specifiedKey, specifiedValue) {
	if (!ary || !ary.length) return;
	return ary.find((entry) => entry && (typeof specifiedKey === "function" ? specifiedKey(entry) : get(entry, specifiedKey)) === specifiedValue);
}
var isNullish = (value) => {
	return value === null || typeof value === "undefined";
};
var upperFirst = (value) => {
	if (isNullish(value)) return value;
	return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
var EventKeys = [
	"dangerouslySetInnerHTML",
	"onCopy",
	"onCopyCapture",
	"onCut",
	"onCutCapture",
	"onPaste",
	"onPasteCapture",
	"onCompositionEnd",
	"onCompositionEndCapture",
	"onCompositionStart",
	"onCompositionStartCapture",
	"onCompositionUpdate",
	"onCompositionUpdateCapture",
	"onFocus",
	"onFocusCapture",
	"onBlur",
	"onBlurCapture",
	"onChange",
	"onChangeCapture",
	"onBeforeInput",
	"onBeforeInputCapture",
	"onInput",
	"onInputCapture",
	"onReset",
	"onResetCapture",
	"onSubmit",
	"onSubmitCapture",
	"onInvalid",
	"onInvalidCapture",
	"onLoad",
	"onLoadCapture",
	"onError",
	"onErrorCapture",
	"onKeyDown",
	"onKeyDownCapture",
	"onKeyPress",
	"onKeyPressCapture",
	"onKeyUp",
	"onKeyUpCapture",
	"onAbort",
	"onAbortCapture",
	"onCanPlay",
	"onCanPlayCapture",
	"onCanPlayThrough",
	"onCanPlayThroughCapture",
	"onDurationChange",
	"onDurationChangeCapture",
	"onEmptied",
	"onEmptiedCapture",
	"onEncrypted",
	"onEncryptedCapture",
	"onEnded",
	"onEndedCapture",
	"onLoadedData",
	"onLoadedDataCapture",
	"onLoadedMetadata",
	"onLoadedMetadataCapture",
	"onLoadStart",
	"onLoadStartCapture",
	"onPause",
	"onPauseCapture",
	"onPlay",
	"onPlayCapture",
	"onPlaying",
	"onPlayingCapture",
	"onProgress",
	"onProgressCapture",
	"onRateChange",
	"onRateChangeCapture",
	"onSeeked",
	"onSeekedCapture",
	"onSeeking",
	"onSeekingCapture",
	"onStalled",
	"onStalledCapture",
	"onSuspend",
	"onSuspendCapture",
	"onTimeUpdate",
	"onTimeUpdateCapture",
	"onVolumeChange",
	"onVolumeChangeCapture",
	"onWaiting",
	"onWaitingCapture",
	"onAuxClick",
	"onAuxClickCapture",
	"onClick",
	"onClickCapture",
	"onContextMenu",
	"onContextMenuCapture",
	"onDoubleClick",
	"onDoubleClickCapture",
	"onDrag",
	"onDragCapture",
	"onDragEnd",
	"onDragEndCapture",
	"onDragEnter",
	"onDragEnterCapture",
	"onDragExit",
	"onDragExitCapture",
	"onDragLeave",
	"onDragLeaveCapture",
	"onDragOver",
	"onDragOverCapture",
	"onDragStart",
	"onDragStartCapture",
	"onDrop",
	"onDropCapture",
	"onMouseDown",
	"onMouseDownCapture",
	"onMouseEnter",
	"onMouseLeave",
	"onMouseMove",
	"onMouseMoveCapture",
	"onMouseOut",
	"onMouseOutCapture",
	"onMouseOver",
	"onMouseOverCapture",
	"onMouseUp",
	"onMouseUpCapture",
	"onSelect",
	"onSelectCapture",
	"onTouchCancel",
	"onTouchCancelCapture",
	"onTouchEnd",
	"onTouchEndCapture",
	"onTouchMove",
	"onTouchMoveCapture",
	"onTouchStart",
	"onTouchStartCapture",
	"onPointerDown",
	"onPointerDownCapture",
	"onPointerMove",
	"onPointerMoveCapture",
	"onPointerUp",
	"onPointerUpCapture",
	"onPointerCancel",
	"onPointerCancelCapture",
	"onPointerEnter",
	"onPointerEnterCapture",
	"onPointerLeave",
	"onPointerLeaveCapture",
	"onPointerOver",
	"onPointerOverCapture",
	"onPointerOut",
	"onPointerOutCapture",
	"onGotPointerCapture",
	"onGotPointerCaptureCapture",
	"onLostPointerCapture",
	"onLostPointerCaptureCapture",
	"onScroll",
	"onScrollCapture",
	"onWheel",
	"onWheelCapture",
	"onAnimationStart",
	"onAnimationStartCapture",
	"onAnimationEnd",
	"onAnimationEndCapture",
	"onAnimationIteration",
	"onAnimationIterationCapture",
	"onTransitionEnd",
	"onTransitionEndCapture"
];
function isEventKey(key) {
	if (typeof key !== "string") return false;
	return EventKeys.includes(key);
}
var SVGContainerPropKeys = ["viewBox", "children"];
var PolyElementKeys = ["points", "pathLength"];
var FilteredElementKeyMap = {
	svg: SVGContainerPropKeys,
	polygon: PolyElementKeys,
	polyline: PolyElementKeys
};
var adaptEventHandlers = (props, newHandler) => {
	if (!props || typeof props === "function" || typeof props === "boolean") return null;
	var inputProps = props;
	if (/* @__PURE__ */ isValidElement(props)) inputProps = props.props;
	if (typeof inputProps !== "object" && typeof inputProps !== "function") return null;
	var out = {};
	Object.keys(inputProps).forEach((key) => {
		if (isEventKey(key)) out[key] = newHandler || ((e) => inputProps[key](inputProps, e));
	});
	return out;
};
var getEventHandlerOfChild = (originalHandler, data, index) => (e) => {
	originalHandler(data, index, e);
	return null;
};
var adaptEventsOfChild = (props, data, index) => {
	if (props === null || typeof props !== "object" && typeof props !== "function") return null;
	var out = null;
	Object.keys(props).forEach((key) => {
		var item = props[key];
		if (isEventKey(key) && typeof item === "function") {
			if (!out) out = {};
			out[key] = getEventHandlerOfChild(item, data, index);
		}
	});
	return out;
};
var SVGElementPropKeys = [
	"aria-activedescendant",
	"aria-atomic",
	"aria-autocomplete",
	"aria-busy",
	"aria-checked",
	"aria-colcount",
	"aria-colindex",
	"aria-colspan",
	"aria-controls",
	"aria-current",
	"aria-describedby",
	"aria-details",
	"aria-disabled",
	"aria-errormessage",
	"aria-expanded",
	"aria-flowto",
	"aria-haspopup",
	"aria-hidden",
	"aria-invalid",
	"aria-keyshortcuts",
	"aria-label",
	"aria-labelledby",
	"aria-level",
	"aria-live",
	"aria-modal",
	"aria-multiline",
	"aria-multiselectable",
	"aria-orientation",
	"aria-owns",
	"aria-placeholder",
	"aria-posinset",
	"aria-pressed",
	"aria-readonly",
	"aria-relevant",
	"aria-required",
	"aria-roledescription",
	"aria-rowcount",
	"aria-rowindex",
	"aria-rowspan",
	"aria-selected",
	"aria-setsize",
	"aria-sort",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext",
	"className",
	"color",
	"height",
	"id",
	"lang",
	"max",
	"media",
	"method",
	"min",
	"name",
	"style",
	"target",
	"width",
	"role",
	"tabIndex",
	"accentHeight",
	"accumulate",
	"additive",
	"alignmentBaseline",
	"allowReorder",
	"alphabetic",
	"amplitude",
	"arabicForm",
	"ascent",
	"attributeName",
	"attributeType",
	"autoReverse",
	"azimuth",
	"baseFrequency",
	"baselineShift",
	"baseProfile",
	"bbox",
	"begin",
	"bias",
	"by",
	"calcMode",
	"capHeight",
	"clip",
	"clipPath",
	"clipPathUnits",
	"clipRule",
	"colorInterpolation",
	"colorInterpolationFilters",
	"colorProfile",
	"colorRendering",
	"contentScriptType",
	"contentStyleType",
	"cursor",
	"cx",
	"cy",
	"d",
	"decelerate",
	"descent",
	"diffuseConstant",
	"direction",
	"display",
	"divisor",
	"dominantBaseline",
	"dur",
	"dx",
	"dy",
	"edgeMode",
	"elevation",
	"enableBackground",
	"end",
	"exponent",
	"externalResourcesRequired",
	"fill",
	"fillOpacity",
	"fillRule",
	"filter",
	"filterRes",
	"filterUnits",
	"floodColor",
	"floodOpacity",
	"focusable",
	"fontFamily",
	"fontSize",
	"fontSizeAdjust",
	"fontStretch",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"format",
	"from",
	"fx",
	"fy",
	"g1",
	"g2",
	"glyphName",
	"glyphOrientationHorizontal",
	"glyphOrientationVertical",
	"glyphRef",
	"gradientTransform",
	"gradientUnits",
	"hanging",
	"horizAdvX",
	"horizOriginX",
	"href",
	"ideographic",
	"imageRendering",
	"in2",
	"in",
	"intercept",
	"k1",
	"k2",
	"k3",
	"k4",
	"k",
	"kernelMatrix",
	"kernelUnitLength",
	"kerning",
	"keyPoints",
	"keySplines",
	"keyTimes",
	"lengthAdjust",
	"letterSpacing",
	"lightingColor",
	"limitingConeAngle",
	"local",
	"markerEnd",
	"markerHeight",
	"markerMid",
	"markerStart",
	"markerUnits",
	"markerWidth",
	"mask",
	"maskContentUnits",
	"maskUnits",
	"mathematical",
	"mode",
	"numOctaves",
	"offset",
	"opacity",
	"operator",
	"order",
	"orient",
	"orientation",
	"origin",
	"overflow",
	"overlinePosition",
	"overlineThickness",
	"paintOrder",
	"panose1",
	"pathLength",
	"patternContentUnits",
	"patternTransform",
	"patternUnits",
	"pointerEvents",
	"pointsAtX",
	"pointsAtY",
	"pointsAtZ",
	"preserveAlpha",
	"preserveAspectRatio",
	"primitiveUnits",
	"r",
	"radius",
	"refX",
	"refY",
	"renderingIntent",
	"repeatCount",
	"repeatDur",
	"requiredExtensions",
	"requiredFeatures",
	"restart",
	"result",
	"rotate",
	"rx",
	"ry",
	"seed",
	"shapeRendering",
	"slope",
	"spacing",
	"specularConstant",
	"specularExponent",
	"speed",
	"spreadMethod",
	"startOffset",
	"stdDeviation",
	"stemh",
	"stemv",
	"stitchTiles",
	"stopColor",
	"stopOpacity",
	"strikethroughPosition",
	"strikethroughThickness",
	"string",
	"stroke",
	"strokeDasharray",
	"strokeDashoffset",
	"strokeLinecap",
	"strokeLinejoin",
	"strokeMiterlimit",
	"strokeOpacity",
	"strokeWidth",
	"surfaceScale",
	"systemLanguage",
	"tableValues",
	"targetX",
	"targetY",
	"textAnchor",
	"textDecoration",
	"textLength",
	"textRendering",
	"to",
	"transform",
	"u1",
	"u2",
	"underlinePosition",
	"underlineThickness",
	"unicode",
	"unicodeBidi",
	"unicodeRange",
	"unitsPerEm",
	"vAlphabetic",
	"values",
	"vectorEffect",
	"version",
	"vertAdvY",
	"vertOriginX",
	"vertOriginY",
	"vHanging",
	"vIdeographic",
	"viewTarget",
	"visibility",
	"vMathematical",
	"widths",
	"wordSpacing",
	"writingMode",
	"x1",
	"x2",
	"x",
	"xChannelSelector",
	"xHeight",
	"xlinkActuate",
	"xlinkArcrole",
	"xlinkHref",
	"xlinkRole",
	"xlinkShow",
	"xlinkTitle",
	"xlinkType",
	"xmlBase",
	"xmlLang",
	"xmlns",
	"xmlnsXlink",
	"xmlSpace",
	"y1",
	"y2",
	"y",
	"yChannelSelector",
	"z",
	"zoomAndPan",
	"ref",
	"key",
	"angle"
];
function isSvgElementPropKey(key) {
	if (typeof key !== "string") return false;
	return SVGElementPropKeys.includes(key);
}
function svgPropertiesNoEvents(obj) {
	var filteredEntries = Object.entries(obj).filter((_ref$1) => {
		var [key] = _ref$1;
		return isSvgElementPropKey(key);
	});
	return Object.fromEntries(filteredEntries);
}
var getDisplayName = (Comp) => {
	if (typeof Comp === "string") return Comp;
	if (!Comp) return "";
	return Comp.displayName || Comp.name || "Component";
};
var lastChildren = null;
var lastResult = null;
var toArray = (children) => {
	if (children === lastChildren && Array.isArray(lastResult)) return lastResult;
	var result = [];
	Children.forEach(children, (child) => {
		if (isNullish(child)) return;
		if (isFragment(child)) result = result.concat(toArray(child.props.children));
		else result.push(child);
	});
	lastResult = result;
	lastChildren = children;
	return result;
};
function findAllByType(children, type) {
	var result = [];
	var types = [];
	if (Array.isArray(type)) types = type.map((t) => getDisplayName(t));
	else types = [getDisplayName(type)];
	toArray(children).forEach((child) => {
		var childType = get(child, "type.displayName") || get(child, "type.name");
		if (types.indexOf(childType) !== -1) result.push(child);
	});
	return result;
}
var isClipDot = (dot) => {
	if (dot && typeof dot === "object" && "clipDot" in dot) return Boolean(dot.clipDot);
	return true;
};
var isValidSpreadableProp = (property, key, includeEvents, svgElementType) => {
	var _ref$1;
	if (typeof key === "symbol" || typeof key === "number") return true;
	var matchingElementTypeKeys = (_ref$1 = svgElementType && (FilteredElementKeyMap === null || FilteredElementKeyMap === void 0 ? void 0 : FilteredElementKeyMap[svgElementType])) !== null && _ref$1 !== void 0 ? _ref$1 : [];
	var isDataAttribute = key.startsWith("data-");
	var isSpecificSvgAttribute = typeof property !== "function" && (Boolean(svgElementType) && matchingElementTypeKeys.includes(key) || isSvgElementPropKey(key));
	var isEventAttribute = Boolean(includeEvents) && isEventKey(key);
	return isDataAttribute || isSpecificSvgAttribute || isEventAttribute;
};
var filterProps = (props, includeEvents, svgElementType) => {
	if (!props || typeof props === "function" || typeof props === "boolean") return null;
	var inputProps = props;
	if (/* @__PURE__ */ isValidElement(props)) inputProps = props.props;
	if (typeof inputProps !== "object" && typeof inputProps !== "function") return null;
	var out = {};
	Object.keys(inputProps).forEach((key) => {
		var _inputProps;
		if (isValidSpreadableProp((_inputProps = inputProps) === null || _inputProps === void 0 ? void 0 : _inputProps[key], key, includeEvents, svgElementType)) out[key] = inputProps[key];
	});
	return out;
};
var _excluded$11 = [
	"children",
	"width",
	"height",
	"viewBox",
	"className",
	"style",
	"title",
	"desc"
];
function _extends$14() {
	return _extends$14 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$14.apply(null, arguments);
}
function _objectWithoutProperties$11(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$11(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$11(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var Surface = /* @__PURE__ */ forwardRef((props, ref) => {
	var { children, width, height, viewBox, className, style, title, desc } = props, others = _objectWithoutProperties$11(props, _excluded$11);
	var svgView = viewBox || {
		width,
		height,
		x: 0,
		y: 0
	};
	var layerClass = clsx("recharts-surface", className);
	return /* @__PURE__ */ React$1.createElement("svg", _extends$14({}, filterProps(others, true, "svg"), {
		className: layerClass,
		width,
		height,
		style,
		viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
		ref
	}), /* @__PURE__ */ React$1.createElement("title", null, title), /* @__PURE__ */ React$1.createElement("desc", null, desc), children);
});
var _excluded$10 = ["children", "className"];
function _extends$13() {
	return _extends$13 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$13.apply(null, arguments);
}
function _objectWithoutProperties$10(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$10(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$10(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var Layer = /* @__PURE__ */ React$1.forwardRef((props, ref) => {
	var { children, className } = props, others = _objectWithoutProperties$10(props, _excluded$10);
	var layerClass = clsx("recharts-layer", className);
	return /* @__PURE__ */ React$1.createElement("g", _extends$13({ className: layerClass }, filterProps(others, true), { ref }), children);
});
var LegendPortalContext = /* @__PURE__ */ createContext(null);
var useLegendPortal = () => useContext(LegendPortalContext);
function getUniqPayload(payload, option, defaultUniqBy$1) {
	if (option === true) return uniqBy(payload, defaultUniqBy$1);
	if (typeof option === "function") return uniqBy(payload, option);
	return payload;
}
var RechartsReduxContext = /* @__PURE__ */ createContext(null);
var noopDispatch = (a) => a;
var useAppDispatch = () => {
	var context = useContext(RechartsReduxContext);
	if (context) return context.store.dispatch;
	return noopDispatch;
};
var noop$4 = () => {};
var addNestedSubNoop = () => noop$4;
var refEquality = (a, b) => a === b;
function useAppSelector(selector) {
	var context = useContext(RechartsReduxContext);
	return useSyncExternalStoreWithSelector(context ? context.subscription.addNestedSub : addNestedSubNoop, context ? context.store.getState : noop$4, context ? context.store.getState : noop$4, context ? selector : noop$4, refEquality);
}
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
	if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
		let isInputSameAsOutput = false;
		try {
			const emptyObject = {};
			if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
		} catch {}
		if (isInputSameAsOutput) {
			let stack$1 = void 0;
			try {
				throw new Error();
			} catch (e) {
				({stack: stack$1} = e);
			}
			console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", { stack: stack$1 });
		}
	}
};
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
	const { memoize: memoize$1, memoizeOptions } = options;
	const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
	const createAnEmptyObject = memoize$1(() => ({}), ...memoizeOptions);
	if (!(createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy))) {
		let stack$1 = void 0;
		try {
			throw new Error();
		} catch (e) {
			({stack: stack$1} = e);
		}
		console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
			arguments: inputSelectorArgs,
			firstInputs: inputSelectorResults,
			secondInputs: inputSelectorResultsCopy,
			stack: stack$1
		});
	}
};
var globalDevModeChecks = {
	inputStabilityCheck: "once",
	identityFunctionCheck: "once"
};
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
	if (typeof func !== "function") throw new TypeError(errorMessage);
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
	if (typeof object !== "object") throw new TypeError(errorMessage);
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
	if (!array.every((item) => typeof item === "function")) {
		const itemTypes = array.map((item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
		throw new TypeError(`${errorMessage}[${itemTypes}]`);
	}
}
var ensureIsArray = (item) => {
	return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
	const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
	assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
	return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
	const inputSelectorResults = [];
	const { length } = dependencies;
	for (let i = 0; i < length; i++) inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
	return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
	const { identityFunctionCheck, inputStabilityCheck } = {
		...globalDevModeChecks,
		...devModeChecks
	};
	return {
		identityFunctionCheck: {
			shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
			run: runIdentityFunctionCheck
		},
		inputStabilityCheck: {
			shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
			run: runInputStabilityCheck
		}
	};
};
var StrongRef = class {
	constructor(value) {
		this.value = value;
	}
	deref() {
		return this.value;
	}
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
	return {
		s: UNTERMINATED,
		v: void 0,
		o: null,
		p: null
	};
}
function weakMapMemoize(func, options = {}) {
	let fnNode = createCacheNode();
	const { resultEqualityCheck } = options;
	let lastResult$1;
	let resultsCount = 0;
	function memoized() {
		let cacheNode = fnNode;
		const { length } = arguments;
		for (let i = 0, l = length; i < l; i++) {
			const arg = arguments[i];
			if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
				let objectCache = cacheNode.o;
				if (objectCache === null) cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
				const objectNode = objectCache.get(arg);
				if (objectNode === void 0) {
					cacheNode = createCacheNode();
					objectCache.set(arg, cacheNode);
				} else cacheNode = objectNode;
			} else {
				let primitiveCache = cacheNode.p;
				if (primitiveCache === null) cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
				const primitiveNode = primitiveCache.get(arg);
				if (primitiveNode === void 0) {
					cacheNode = createCacheNode();
					primitiveCache.set(arg, cacheNode);
				} else cacheNode = primitiveNode;
			}
		}
		const terminatedNode = cacheNode;
		let result;
		if (cacheNode.s === TERMINATED) result = cacheNode.v;
		else {
			result = func.apply(null, arguments);
			resultsCount++;
			if (resultEqualityCheck) {
				const lastResultValue = lastResult$1?.deref?.() ?? lastResult$1;
				if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
					result = lastResultValue;
					resultsCount !== 0 && resultsCount--;
				}
				lastResult$1 = typeof result === "object" && result !== null || typeof result === "function" ? new Ref(result) : result;
			}
		}
		terminatedNode.s = TERMINATED;
		terminatedNode.v = result;
		return result;
	}
	memoized.clearCache = () => {
		fnNode = createCacheNode();
		memoized.resetResultsCount();
	};
	memoized.resultsCount = () => resultsCount;
	memoized.resetResultsCount = () => {
		resultsCount = 0;
	};
	return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
	const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
		memoize: memoizeOrOptions,
		memoizeOptions: memoizeOptionsFromArgs
	} : memoizeOrOptions;
	const createSelector2 = (...createSelectorArgs) => {
		let recomputations = 0;
		let dependencyRecomputations = 0;
		let lastResult$1;
		let directlyPassedOptions = {};
		let resultFunc = createSelectorArgs.pop();
		if (typeof resultFunc === "object") {
			directlyPassedOptions = resultFunc;
			resultFunc = createSelectorArgs.pop();
		}
		assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
		const { memoize: memoize$1, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = {
			...createSelectorCreatorOptions,
			...directlyPassedOptions
		};
		const finalMemoizeOptions = ensureIsArray(memoizeOptions);
		const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
		const dependencies = getDependencies(createSelectorArgs);
		const memoizedResultFunc = memoize$1(function recomputationWrapper() {
			recomputations++;
			return resultFunc.apply(null, arguments);
		}, ...finalMemoizeOptions);
		let firstRun = true;
		const selector = argsMemoize(function dependenciesChecker() {
			dependencyRecomputations++;
			const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
			lastResult$1 = memoizedResultFunc.apply(null, inputSelectorResults);
			if (process.env.NODE_ENV !== "production") {
				const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
				if (identityFunctionCheck.shouldRun) identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult$1);
				if (inputStabilityCheck.shouldRun) {
					const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
					inputStabilityCheck.run({
						inputSelectorResults,
						inputSelectorResultsCopy
					}, {
						memoize: memoize$1,
						memoizeOptions: finalMemoizeOptions
					}, arguments);
				}
				if (firstRun) firstRun = false;
			}
			return lastResult$1;
		}, ...finalArgsMemoizeOptions);
		return Object.assign(selector, {
			resultFunc,
			memoizedResultFunc,
			dependencies,
			dependencyRecomputations: () => dependencyRecomputations,
			resetDependencyRecomputations: () => {
				dependencyRecomputations = 0;
			},
			lastResult: () => lastResult$1,
			recomputations: () => recomputations,
			resetRecomputations: () => {
				recomputations = 0;
			},
			memoize: memoize$1,
			argsMemoize
		});
	};
	Object.assign(createSelector2, { withTypes: () => createSelector2 });
	return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector) => {
	assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
	const inputSelectorKeys = Object.keys(inputSelectorsObject);
	return selectorCreator(inputSelectorKeys.map((key) => inputSelectorsObject[key]), (...inputSelectorResults) => {
		return inputSelectorResults.reduce((composition, value, index) => {
			composition[inputSelectorKeys[index]] = value;
			return composition;
		}, {});
	});
}, { withTypes: () => createStructuredSelector });
var selectLegendSettings = (state) => state.legend.settings;
var selectLegendSize = (state) => state.legend.size;
var selectAllLegendPayload2DArray = (state) => state.legend.payload;
var selectLegendPayload = createSelector([selectAllLegendPayload2DArray, selectLegendSettings], (payloads, _ref$1) => {
	var { itemSorter } = _ref$1;
	var flat = payloads.flat(1);
	return itemSorter ? sortBy(flat, itemSorter) : flat;
});
var EPS$1 = 1;
function useElementOffset() {
	var extraDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	var [lastBoundingBox, setLastBoundingBox] = useState({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	});
	return [lastBoundingBox, useCallback((node) => {
		if (node != null) {
			var rect = node.getBoundingClientRect();
			var box = {
				height: rect.height,
				left: rect.left,
				top: rect.top,
				width: rect.width
			};
			if (Math.abs(box.height - lastBoundingBox.height) > EPS$1 || Math.abs(box.left - lastBoundingBox.left) > EPS$1 || Math.abs(box.top - lastBoundingBox.top) > EPS$1 || Math.abs(box.width - lastBoundingBox.width) > EPS$1) setLastBoundingBox({
				height: box.height,
				left: box.left,
				top: box.top,
				width: box.width
			});
		}
	}, [
		lastBoundingBox.width,
		lastBoundingBox.height,
		lastBoundingBox.top,
		lastBoundingBox.left,
		...extraDependencies
	])];
}
function formatProdErrorMessage$1(code) {
	return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var symbol_observable_default = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var actionTypes_default = {
	INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
function isPlainObject(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	let proto$1 = obj;
	while (Object.getPrototypeOf(proto$1) !== null) proto$1 = Object.getPrototypeOf(proto$1);
	return Object.getPrototypeOf(obj) === proto$1 || Object.getPrototypeOf(obj) === null;
}
function miniKindOf(val) {
	if (val === void 0) return "undefined";
	if (val === null) return "null";
	const type = typeof val;
	switch (type) {
		case "boolean":
		case "string":
		case "number":
		case "symbol":
		case "function": return type;
	}
	if (Array.isArray(val)) return "array";
	if (isDate(val)) return "date";
	if (isError(val)) return "error";
	const constructorName = ctorName(val);
	switch (constructorName) {
		case "Symbol":
		case "Promise":
		case "WeakMap":
		case "WeakSet":
		case "Map":
		case "Set": return constructorName;
	}
	return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
	return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
	return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
	if (val instanceof Date) return true;
	return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
	let typeOfVal = typeof val;
	if (process.env.NODE_ENV !== "production") typeOfVal = miniKindOf(val);
	return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
	if (typeof reducer !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
	if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
	if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
		enhancer = preloadedState;
		preloadedState = void 0;
	}
	if (typeof enhancer !== "undefined") {
		if (typeof enhancer !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
		return enhancer(createStore)(reducer, preloadedState);
	}
	let currentReducer = reducer;
	let currentState = preloadedState;
	let currentListeners = /* @__PURE__ */ new Map();
	let nextListeners = currentListeners;
	let listenerIdCounter = 0;
	let isDispatching = false;
	function ensureCanMutateNextListeners() {
		if (nextListeners === currentListeners) {
			nextListeners = /* @__PURE__ */ new Map();
			currentListeners.forEach((listener$1, key) => {
				nextListeners.set(key, listener$1);
			});
		}
	}
	function getState() {
		if (isDispatching) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
		return currentState;
	}
	function subscribe(listener$1) {
		if (typeof listener$1 !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener$1)}'`);
		if (isDispatching) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
		let isSubscribed = true;
		ensureCanMutateNextListeners();
		const listenerId = listenerIdCounter++;
		nextListeners.set(listenerId, listener$1);
		return function unsubscribe() {
			if (!isSubscribed) return;
			if (isDispatching) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
			isSubscribed = false;
			ensureCanMutateNextListeners();
			nextListeners.delete(listenerId);
			currentListeners = null;
		};
	}
	function dispatch(action) {
		if (!isPlainObject(action)) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
		if (typeof action.type === "undefined") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(8) : "Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
		if (typeof action.type !== "string") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
		if (isDispatching) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(9) : "Reducers may not dispatch actions.");
		try {
			isDispatching = true;
			currentState = currentReducer(currentState, action);
		} finally {
			isDispatching = false;
		}
		(currentListeners = nextListeners).forEach((listener$1) => {
			listener$1();
		});
		return action;
	}
	function replaceReducer(nextReducer) {
		if (typeof nextReducer !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
		currentReducer = nextReducer;
		dispatch({ type: actionTypes_default.REPLACE });
	}
	function observable() {
		const outerSubscribe = subscribe;
		return {
			subscribe(observer) {
				if (typeof observer !== "object" || observer === null) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
				function observeState() {
					const observerAsObserver = observer;
					if (observerAsObserver.next) observerAsObserver.next(getState());
				}
				observeState();
				return { unsubscribe: outerSubscribe(observeState) };
			},
			[symbol_observable_default]() {
				return this;
			}
		};
	}
	dispatch({ type: actionTypes_default.INIT });
	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer,
		[symbol_observable_default]: observable
	};
}
function warning(message) {
	if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
	try {
		throw new Error(message);
	} catch (e) {}
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	const reducerKeys = Object.keys(reducers);
	const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
	if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
	if (!isPlainObject(inputState)) return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join("\", \"")}"`;
	const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
	unexpectedKeys.forEach((key) => {
		unexpectedKeyCache[key] = true;
	});
	if (action && action.type === actionTypes_default.REPLACE) return;
	if (unexpectedKeys.length > 0) return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join("\", \"")}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join("\", \"")}". Unexpected keys will be ignored.`;
}
function assertReducerShape(reducers) {
	Object.keys(reducers).forEach((key) => {
		const reducer = reducers[key];
		if (typeof reducer(void 0, { type: actionTypes_default.INIT }) === "undefined") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(12) : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
		if (typeof reducer(void 0, { type: actionTypes_default.PROBE_UNKNOWN_ACTION() }) === "undefined") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(13) : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
	});
}
function combineReducers(reducers) {
	const reducerKeys = Object.keys(reducers);
	const finalReducers = {};
	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];
		if (process.env.NODE_ENV !== "production") {
			if (typeof reducers[key] === "undefined") warning(`No reducer provided for key "${key}"`);
		}
		if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
	}
	const finalReducerKeys = Object.keys(finalReducers);
	let unexpectedKeyCache;
	if (process.env.NODE_ENV !== "production") unexpectedKeyCache = {};
	let shapeAssertionError;
	try {
		assertReducerShape(finalReducers);
	} catch (e) {
		shapeAssertionError = e;
	}
	return function combination(state = {}, action) {
		if (shapeAssertionError) throw shapeAssertionError;
		if (process.env.NODE_ENV !== "production") {
			const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
			if (warningMessage) warning(warningMessage);
		}
		let hasChanged = false;
		const nextState = {};
		for (let i = 0; i < finalReducerKeys.length; i++) {
			const key = finalReducerKeys[i];
			const reducer = finalReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);
			if (typeof nextStateForKey === "undefined") {
				const actionType = action && action.type;
				throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(14) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
			}
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
		return hasChanged ? nextState : state;
	};
}
function compose$1(...funcs) {
	if (funcs.length === 0) return (arg) => arg;
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
	return (createStore2) => (reducer, preloadedState) => {
		const store = createStore2(reducer, preloadedState);
		let dispatch = () => {
			throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage$1(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
		};
		const middlewareAPI = {
			getState: store.getState,
			dispatch: (action, ...args) => dispatch(action, ...args)
		};
		dispatch = compose$1(...middlewares.map((middleware) => middleware(middlewareAPI)))(store.dispatch);
		return {
			...store,
			dispatch
		};
	};
}
function isAction(action) {
	return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = process.env.NODE_ENV !== "production" ? [
	function(plugin) {
		return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
	},
	function(thing) {
		return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
	},
	"This object has been frozen and should not be mutated",
	function(data) {
		return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
	},
	"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
	"Immer forbids circular references",
	"The first or second argument to `produce` must be a function",
	"The third argument to `produce` must be a function or undefined",
	"First argument to `createDraft` must be a plain object, an array, or an immerable object",
	"First argument to `finishDraft` must be a draft returned by `createDraft`",
	function(thing) {
		return `'current' expects a draft, got: ${thing}`;
	},
	"Object.defineProperty() cannot be used on an Immer draft",
	"Object.setPrototypeOf() cannot be used on an Immer draft",
	"Immer only supports deleting array indices",
	"Immer only supports setting array indices and the 'length' property",
	function(thing) {
		return `'original' expects a draft, got: ${thing}`;
	}
] : [];
function die(error, ...args) {
	if (process.env.NODE_ENV !== "production") {
		const e = errors[error];
		const msg = typeof e === "function" ? e.apply(null, args) : e;
		throw new Error(`[Immer] ${msg}`);
	}
	throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
	return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
	if (!value) return false;
	return isPlainObject$1(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject$1(value) {
	if (!value || typeof value !== "object") return false;
	const proto$1 = getPrototypeOf(value);
	if (proto$1 === null) return true;
	const Ctor = Object.hasOwnProperty.call(proto$1, "constructor") && proto$1.constructor;
	if (Ctor === Object) return true;
	return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
	if (getArchtype(obj) === 0) Reflect.ownKeys(obj).forEach((key) => {
		iter(key, obj[key], obj);
	});
	else obj.forEach((entry, index) => iter(index, entry, obj));
}
function getArchtype(thing) {
	const state = thing[DRAFT_STATE];
	return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
	return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
	const t = getArchtype(thing);
	if (t === 2) thing.set(propOrOldValue, value);
	else if (t === 3) thing.add(value);
	else thing[propOrOldValue] = value;
}
function is(x, y) {
	if (x === y) return x !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
function isMap(target) {
	return target instanceof Map;
}
function isSet(target) {
	return target instanceof Set;
}
function latest(state) {
	return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
	if (isMap(base)) return new Map(base);
	if (isSet(base)) return new Set(base);
	if (Array.isArray(base)) return Array.prototype.slice.call(base);
	const isPlain$1 = isPlainObject$1(base);
	if (strict === true || strict === "class_only" && !isPlain$1) {
		const descriptors = Object.getOwnPropertyDescriptors(base);
		delete descriptors[DRAFT_STATE];
		let keys = Reflect.ownKeys(descriptors);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			const desc = descriptors[key];
			if (desc.writable === false) {
				desc.writable = true;
				desc.configurable = true;
			}
			if (desc.get || desc.set) descriptors[key] = {
				configurable: true,
				writable: true,
				enumerable: desc.enumerable,
				value: base[key]
			};
		}
		return Object.create(getPrototypeOf(base), descriptors);
	} else {
		const proto$1 = getPrototypeOf(base);
		if (proto$1 !== null && isPlain$1) return { ...base };
		const obj = Object.create(proto$1);
		return Object.assign(obj, base);
	}
}
function freeze(obj, deep = false) {
	if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
	if (getArchtype(obj) > 1) Object.defineProperties(obj, {
		set: { value: dontMutateFrozenCollections },
		add: { value: dontMutateFrozenCollections },
		clear: { value: dontMutateFrozenCollections },
		delete: { value: dontMutateFrozenCollections }
	});
	Object.freeze(obj);
	if (deep) Object.values(obj).forEach((value) => freeze(value, true));
	return obj;
}
function dontMutateFrozenCollections() {
	die(2);
}
function isFrozen(obj) {
	return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
	const plugin = plugins[pluginKey];
	if (!plugin) die(0, pluginKey);
	return plugin;
}
var currentScope;
function getCurrentScope() {
	return currentScope;
}
function createScope(parent_, immer_) {
	return {
		drafts_: [],
		parent_,
		immer_,
		canAutoFreeze_: true,
		unfinalizedDrafts_: 0
	};
}
function usePatchesInScope(scope, patchListener) {
	if (patchListener) {
		getPlugin("Patches");
		scope.patches_ = [];
		scope.inversePatches_ = [];
		scope.patchListener_ = patchListener;
	}
}
function revokeScope(scope) {
	leaveScope(scope);
	scope.drafts_.forEach(revokeDraft);
	scope.drafts_ = null;
}
function leaveScope(scope) {
	if (scope === currentScope) currentScope = scope.parent_;
}
function enterScope(immer2) {
	return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
	const state = draft[DRAFT_STATE];
	if (state.type_ === 0 || state.type_ === 1) state.revoke_();
	else state.revoked_ = true;
}
function processResult(result, scope) {
	scope.unfinalizedDrafts_ = scope.drafts_.length;
	const baseDraft = scope.drafts_[0];
	if (result !== void 0 && result !== baseDraft) {
		if (baseDraft[DRAFT_STATE].modified_) {
			revokeScope(scope);
			die(4);
		}
		if (isDraftable(result)) {
			result = finalize(scope, result);
			if (!scope.parent_) maybeFreeze(scope, result);
		}
		if (scope.patches_) getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
	} else result = finalize(scope, baseDraft, []);
	revokeScope(scope);
	if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
	return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
	if (isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	if (!state) {
		each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path));
		return value;
	}
	if (state.scope_ !== rootScope) return value;
	if (!state.modified_) {
		maybeFreeze(rootScope, state.base_, true);
		return state.base_;
	}
	if (!state.finalized_) {
		state.finalized_ = true;
		state.scope_.unfinalizedDrafts_--;
		const result = state.copy_;
		let resultEach = result;
		let isSet2 = false;
		if (state.type_ === 3) {
			resultEach = new Set(result);
			result.clear();
			isSet2 = true;
		}
		each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
		maybeFreeze(rootScope, result, false);
		if (path && rootScope.patches_) getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
	}
	return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
	if (process.env.NODE_ENV !== "production" && childValue === targetObject) die(5);
	if (isDraft(childValue)) {
		const res = finalize(rootScope, childValue, rootPath && parentState && parentState.type_ !== 3 && !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0);
		set(targetObject, prop, res);
		if (isDraft(res)) rootScope.canAutoFreeze_ = false;
		else return;
	} else if (targetIsSet) targetObject.add(childValue);
	if (isDraftable(childValue) && !isFrozen(childValue)) {
		if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return;
		finalize(rootScope, childValue);
		if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
	}
}
function maybeFreeze(scope, value, deep = false) {
	if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
}
function createProxyProxy(base, parent) {
	const isArray = Array.isArray(base);
	const state = {
		type_: isArray ? 1 : 0,
		scope_: parent ? parent.scope_ : getCurrentScope(),
		modified_: false,
		finalized_: false,
		assigned_: {},
		parent_: parent,
		base_: base,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: false
	};
	let target = state;
	let traps = objectTraps;
	if (isArray) {
		target = [state];
		traps = arrayTraps;
	}
	const { revoke, proxy } = Proxy.revocable(target, traps);
	state.draft_ = proxy;
	state.revoke_ = revoke;
	return proxy;
}
var objectTraps = {
	get(state, prop) {
		if (prop === DRAFT_STATE) return state;
		const source = latest(state);
		if (!has(source, prop)) return readPropFromProto(state, source, prop);
		const value = source[prop];
		if (state.finalized_ || !isDraftable(value)) return value;
		if (value === peek(state.base_, prop)) {
			prepareCopy(state);
			return state.copy_[prop] = createProxy(value, state);
		}
		return value;
	},
	has(state, prop) {
		return prop in latest(state);
	},
	ownKeys(state) {
		return Reflect.ownKeys(latest(state));
	},
	set(state, prop, value) {
		const desc = getDescriptorFromProto(latest(state), prop);
		if (desc?.set) {
			desc.set.call(state.draft_, value);
			return true;
		}
		if (!state.modified_) {
			const current2 = peek(latest(state), prop);
			const currentState = current2?.[DRAFT_STATE];
			if (currentState && currentState.base_ === value) {
				state.copy_[prop] = value;
				state.assigned_[prop] = false;
				return true;
			}
			if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
			prepareCopy(state);
			markChanged(state);
		}
		if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
		state.copy_[prop] = value;
		state.assigned_[prop] = true;
		return true;
	},
	deleteProperty(state, prop) {
		if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
			state.assigned_[prop] = false;
			prepareCopy(state);
			markChanged(state);
		} else delete state.assigned_[prop];
		if (state.copy_) delete state.copy_[prop];
		return true;
	},
	getOwnPropertyDescriptor(state, prop) {
		const owner = latest(state);
		const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
		if (!desc) return desc;
		return {
			writable: true,
			configurable: state.type_ !== 1 || prop !== "length",
			enumerable: desc.enumerable,
			value: owner[prop]
		};
	},
	defineProperty() {
		die(11);
	},
	getPrototypeOf(state) {
		return getPrototypeOf(state.base_);
	},
	setPrototypeOf() {
		die(12);
	}
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
	arrayTraps[key] = function() {
		arguments[0] = arguments[0][0];
		return fn.apply(this, arguments);
	};
});
arrayTraps.deleteProperty = function(state, prop) {
	if (process.env.NODE_ENV !== "production" && isNaN(parseInt(prop))) die(13);
	return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
	if (process.env.NODE_ENV !== "production" && prop !== "length" && isNaN(parseInt(prop))) die(14);
	return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
	const state = draft[DRAFT_STATE];
	return (state ? latest(state) : draft)[prop];
}
function readPropFromProto(state, source, prop) {
	const desc = getDescriptorFromProto(source, prop);
	return desc ? `value` in desc ? desc.value : desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
	if (!(prop in source)) return void 0;
	let proto$1 = getPrototypeOf(source);
	while (proto$1) {
		const desc = Object.getOwnPropertyDescriptor(proto$1, prop);
		if (desc) return desc;
		proto$1 = getPrototypeOf(proto$1);
	}
}
function markChanged(state) {
	if (!state.modified_) {
		state.modified_ = true;
		if (state.parent_) markChanged(state.parent_);
	}
}
function prepareCopy(state) {
	if (!state.copy_) state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
}
var Immer2 = class {
	constructor(config) {
		this.autoFreeze_ = true;
		this.useStrictShallowCopy_ = false;
		this.produce = (base, recipe, patchListener) => {
			if (typeof base === "function" && typeof recipe !== "function") {
				const defaultBase = recipe;
				recipe = base;
				const self = this;
				return function curriedProduce(base2 = defaultBase, ...args) {
					return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
				};
			}
			if (typeof recipe !== "function") die(6);
			if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
			let result;
			if (isDraftable(base)) {
				const scope = enterScope(this);
				const proxy = createProxy(base, void 0);
				let hasError = true;
				try {
					result = recipe(proxy);
					hasError = false;
				} finally {
					if (hasError) revokeScope(scope);
					else leaveScope(scope);
				}
				usePatchesInScope(scope, patchListener);
				return processResult(result, scope);
			} else if (!base || typeof base !== "object") {
				result = recipe(base);
				if (result === void 0) result = base;
				if (result === NOTHING) result = void 0;
				if (this.autoFreeze_) freeze(result, true);
				if (patchListener) {
					const p = [];
					const ip = [];
					getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
					patchListener(p, ip);
				}
				return result;
			} else die(1, base);
		};
		this.produceWithPatches = (base, recipe) => {
			if (typeof base === "function") return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
			let patches, inversePatches;
			return [
				this.produce(base, recipe, (p, ip) => {
					patches = p;
					inversePatches = ip;
				}),
				patches,
				inversePatches
			];
		};
		if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
		if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
	}
	createDraft(base) {
		if (!isDraftable(base)) die(8);
		if (isDraft(base)) base = current(base);
		const scope = enterScope(this);
		const proxy = createProxy(base, void 0);
		proxy[DRAFT_STATE].isManual_ = true;
		leaveScope(scope);
		return proxy;
	}
	finishDraft(draft, patchListener) {
		const state = draft && draft[DRAFT_STATE];
		if (!state || !state.isManual_) die(9);
		const { scope_: scope } = state;
		usePatchesInScope(scope, patchListener);
		return processResult(void 0, scope);
	}
	setAutoFreeze(value) {
		this.autoFreeze_ = value;
	}
	setUseStrictShallowCopy(value) {
		this.useStrictShallowCopy_ = value;
	}
	applyPatches(base, patches) {
		let i;
		for (i = patches.length - 1; i >= 0; i--) {
			const patch = patches[i];
			if (patch.path.length === 0 && patch.op === "replace") {
				base = patch.value;
				break;
			}
		}
		if (i > -1) patches = patches.slice(i + 1);
		const applyPatchesImpl = getPlugin("Patches").applyPatches_;
		if (isDraft(base)) return applyPatchesImpl(base, patches);
		return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
	}
};
function createProxy(value, parent) {
	const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
	(parent ? parent.scope_ : getCurrentScope()).drafts_.push(draft);
	return draft;
}
function current(value) {
	if (!isDraft(value)) die(10, value);
	return currentImpl(value);
}
function currentImpl(value) {
	if (!isDraftable(value) || isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	let copy;
	if (state) {
		if (!state.modified_) return state.base_;
		state.finalized_ = true;
		copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
	} else copy = shallowCopy(value, true);
	each(copy, (key, childValue) => {
		set(copy, key, currentImpl(childValue));
	});
	if (state) state.finalized_ = false;
	return copy;
}
var produce = new Immer2().produce;
function castDraft(value) {
	return value;
}
function createThunkMiddleware(extraArgument) {
	const middleware = ({ dispatch, getState }) => (next) => (action) => {
		if (typeof action === "function") return action(dispatch, getState, extraArgument);
		return next(action);
	};
	return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length === 0) return void 0;
	if (typeof arguments[0] === "object") return compose$1;
	return compose$1.apply(null, arguments);
};
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
var hasMatchFunction = (v) => {
	return v && typeof v.match === "function";
};
function createAction(type, prepareAction) {
	function actionCreator(...args) {
		if (prepareAction) {
			let prepared = prepareAction(...args);
			if (!prepared) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : "prepareAction did not return an object");
			return {
				type,
				payload: prepared.payload,
				..."meta" in prepared && { meta: prepared.meta },
				..."error" in prepared && { error: prepared.error }
			};
		}
		return {
			type,
			payload: args[0]
		};
	}
	actionCreator.toString = () => `${type}`;
	actionCreator.type = type;
	actionCreator.match = (action) => isAction(action) && action.type === type;
	return actionCreator;
}
function isActionCreator(action) {
	return typeof action === "function" && "type" in action && hasMatchFunction(action);
}
function getMessage(type) {
	const splitType = type ? `${type}`.split("/") : [];
	const actionName = splitType[splitType.length - 1] || "actionCreator";
	return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
	if (process.env.NODE_ENV === "production") return () => (next) => (action) => next(action);
	const { isActionCreator: isActionCreator2 = isActionCreator } = options;
	return () => (next) => (action) => {
		if (isActionCreator2(action)) console.warn(getMessage(action.type));
		return next(action);
	};
}
function getTimeMeasureUtils(maxDelay, fnName) {
	let elapsed = 0;
	return {
		measureTime(fn) {
			const started = Date.now();
			try {
				return fn();
			} finally {
				elapsed += Date.now() - started;
			}
		},
		warnIfExceeded() {
			if (elapsed > maxDelay) console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
		}
	};
}
var Tuple = class _Tuple extends Array {
	constructor(...items) {
		super(...items);
		Object.setPrototypeOf(this, _Tuple.prototype);
	}
	static get [Symbol.species]() {
		return _Tuple;
	}
	concat(...arr) {
		return super.concat.apply(this, arr);
	}
	prepend(...arr) {
		if (arr.length === 1 && Array.isArray(arr[0])) return new _Tuple(...arr[0].concat(this));
		return new _Tuple(...arr.concat(this));
	}
};
function freezeDraftable(val) {
	return isDraftable(val) ? produce(val, () => {}) : val;
}
function getOrInsertComputed(map$1, key, compute) {
	if (map$1.has(key)) return map$1.get(key);
	return map$1.set(key, compute(key)).get(key);
}
function isImmutableDefault(value) {
	return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
	const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
	return { detectMutations() {
		return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
	} };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
	const tracked = { value: obj };
	if (!isImmutable(obj) && !checkedObjects.has(obj)) {
		checkedObjects.add(obj);
		tracked.children = {};
		for (const key in obj) {
			const childPath = path ? path + "." + key : key;
			if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) continue;
			tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
		}
	}
	return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
	const prevObj = trackedProperty ? trackedProperty.value : void 0;
	const sameRef = prevObj === obj;
	if (sameParentRef && !sameRef && !Number.isNaN(obj)) return {
		wasMutated: true,
		path
	};
	if (isImmutable(prevObj) || isImmutable(obj)) return { wasMutated: false };
	const keysToDetect = {};
	for (let key in trackedProperty.children) keysToDetect[key] = true;
	for (let key in obj) keysToDetect[key] = true;
	const hasIgnoredPaths = ignoredPaths.length > 0;
	for (let key in keysToDetect) {
		const nestedPath = path ? path + "." + key : key;
		if (hasIgnoredPaths) {
			if (ignoredPaths.some((ignored) => {
				if (ignored instanceof RegExp) return ignored.test(nestedPath);
				return nestedPath === ignored;
			})) continue;
		}
		const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
		if (result.wasMutated) return result;
	}
	return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options = {}) {
	if (process.env.NODE_ENV === "production") return () => (next) => (action) => next(action);
	else {
		let stringify2 = function(obj, serializer, indent, decycler) {
			return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
		}, getSerialize2 = function(serializer, decycler) {
			let stack$1 = [], keys = [];
			if (!decycler) decycler = function(_, value) {
				if (stack$1[0] === value) return "[Circular ~]";
				return "[Circular ~." + keys.slice(0, stack$1.indexOf(value)).join(".") + "]";
			};
			return function(key, value) {
				if (stack$1.length > 0) {
					var thisPos = stack$1.indexOf(this);
					~thisPos ? stack$1.splice(thisPos + 1) : stack$1.push(this);
					~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
					if (~stack$1.indexOf(value)) value = decycler.call(this, key, value);
				} else stack$1.push(value);
				return serializer == null ? value : serializer.call(this, key, value);
			};
		};
		let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32 } = options;
		const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
		return ({ getState }) => {
			let state = getState();
			let tracker = track(state);
			let result;
			return (next) => (action) => {
				const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
				measureUtils.measureTime(() => {
					state = getState();
					result = tracker.detectMutations();
					tracker = track(state);
					if (result.wasMutated) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(19) : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
				});
				const dispatchedAction = next(action);
				measureUtils.measureTime(() => {
					state = getState();
					result = tracker.detectMutations();
					tracker = track(state);
					if (result.wasMutated) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(20) : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
				});
				measureUtils.warnIfExceeded();
				return dispatchedAction;
			};
		};
	}
}
function isPlain(val) {
	const type = typeof val;
	return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
	let foundNestedSerializable;
	if (!isSerializable(value)) return {
		keyPath: path || "<root>",
		value
	};
	if (typeof value !== "object" || value === null) return false;
	if (cache?.has(value)) return false;
	const entries = getEntries != null ? getEntries(value) : Object.entries(value);
	const hasIgnoredPaths = ignoredPaths.length > 0;
	for (const [key, nestedValue] of entries) {
		const nestedPath = path ? path + "." + key : key;
		if (hasIgnoredPaths) {
			if (ignoredPaths.some((ignored) => {
				if (ignored instanceof RegExp) return ignored.test(nestedPath);
				return nestedPath === ignored;
			})) continue;
		}
		if (!isSerializable(nestedValue)) return {
			keyPath: nestedPath,
			value: nestedValue
		};
		if (typeof nestedValue === "object") {
			foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
			if (foundNestedSerializable) return foundNestedSerializable;
		}
	}
	if (cache && isNestedFrozen(value)) cache.add(value);
	return false;
}
function isNestedFrozen(value) {
	if (!Object.isFrozen(value)) return false;
	for (const nestedValue of Object.values(value)) {
		if (typeof nestedValue !== "object" || nestedValue === null) continue;
		if (!isNestedFrozen(nestedValue)) return false;
	}
	return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
	if (process.env.NODE_ENV === "production") return () => (next) => (action) => next(action);
	else {
		const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = ["meta.arg", "meta.baseQueryMeta"], ignoredPaths = [], warnAfter = 32, ignoreState = false, ignoreActions = false, disableCache = false } = options;
		const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
		return (storeAPI) => (next) => (action) => {
			if (!isAction(action)) return next(action);
			const result = next(action);
			const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
			if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) measureUtils.measureTime(() => {
				const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
				if (foundActionNonSerializableValue) {
					const { keyPath, value } = foundActionNonSerializableValue;
					console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
				}
			});
			if (!ignoreState) {
				measureUtils.measureTime(() => {
					const foundStateNonSerializableValue = findNonSerializableValue(storeAPI.getState(), "", isSerializable, getEntries, ignoredPaths, cache);
					if (foundStateNonSerializableValue) {
						const { keyPath, value } = foundStateNonSerializableValue;
						console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
					}
				});
				measureUtils.warnIfExceeded();
			}
			return result;
		};
	}
}
function isBoolean(x) {
	return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
	const { thunk: thunk$1 = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
	let middlewareArray = new Tuple();
	if (thunk$1) if (isBoolean(thunk$1)) middlewareArray.push(thunk);
	else middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
	if (process.env.NODE_ENV !== "production") {
		if (immutableCheck) {
			let immutableOptions = {};
			if (!isBoolean(immutableCheck)) immutableOptions = immutableCheck;
			middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
		}
		if (serializableCheck) {
			let serializableOptions = {};
			if (!isBoolean(serializableCheck)) serializableOptions = serializableCheck;
			middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
		}
		if (actionCreatorCheck) {
			let actionCreatorOptions = {};
			if (!isBoolean(actionCreatorCheck)) actionCreatorOptions = actionCreatorCheck;
			middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
		}
	}
	return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var createQueueWithTimer = (timeout) => {
	return (notify) => {
		setTimeout(notify, timeout);
	};
};
var autoBatchEnhancer = (options = { type: "raf" }) => (next) => (...args) => {
	const store = next(...args);
	let notifying = true;
	let shouldNotifyAtEndOfTick = false;
	let notificationQueued = false;
	const listeners = /* @__PURE__ */ new Set();
	const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
	const notifyListeners = () => {
		notificationQueued = false;
		if (shouldNotifyAtEndOfTick) {
			shouldNotifyAtEndOfTick = false;
			listeners.forEach((l) => l());
		}
	};
	return Object.assign({}, store, {
		subscribe(listener2) {
			const wrappedListener = () => notifying && listener2();
			const unsubscribe = store.subscribe(wrappedListener);
			listeners.add(listener2);
			return () => {
				unsubscribe();
				listeners.delete(listener2);
			};
		},
		dispatch(action) {
			try {
				notifying = !action?.meta?.[SHOULD_AUTOBATCH];
				shouldNotifyAtEndOfTick = !notifying;
				if (shouldNotifyAtEndOfTick) {
					if (!notificationQueued) {
						notificationQueued = true;
						queueCallback(notifyListeners);
					}
				}
				return store.dispatch(action);
			} finally {
				notifying = true;
			}
		}
	});
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
	const { autoBatch = true } = options ?? {};
	let enhancerArray = new Tuple(middlewareEnhancer);
	if (autoBatch) enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
	return enhancerArray;
};
function configureStore(options) {
	const getDefaultMiddleware = buildGetDefaultMiddleware();
	const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
	let rootReducer$1;
	if (typeof reducer === "function") rootReducer$1 = reducer;
	else if (isPlainObject(reducer)) rootReducer$1 = combineReducers(reducer);
	else throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
	if (process.env.NODE_ENV !== "production" && middleware && typeof middleware !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "`middleware` field must be a callback");
	let finalMiddleware;
	if (typeof middleware === "function") {
		finalMiddleware = middleware(getDefaultMiddleware);
		if (process.env.NODE_ENV !== "production" && !Array.isArray(finalMiddleware)) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : "when using a middleware builder function, an array of middleware must be returned");
	} else finalMiddleware = getDefaultMiddleware();
	if (process.env.NODE_ENV !== "production" && finalMiddleware.some((item) => typeof item !== "function")) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "each middleware provided to configureStore must be a function");
	if (process.env.NODE_ENV !== "production" && duplicateMiddlewareCheck) {
		let middlewareReferences = /* @__PURE__ */ new Set();
		finalMiddleware.forEach((middleware2) => {
			if (middlewareReferences.has(middleware2)) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
			middlewareReferences.add(middleware2);
		});
	}
	let finalCompose = compose$1;
	if (devTools) finalCompose = composeWithDevTools({
		trace: process.env.NODE_ENV !== "production",
		...typeof devTools === "object" && devTools
	});
	const middlewareEnhancer = applyMiddleware(...finalMiddleware);
	const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
	if (process.env.NODE_ENV !== "production" && enhancers && typeof enhancers !== "function") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : "`enhancers` field must be a callback");
	let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
	if (process.env.NODE_ENV !== "production" && !Array.isArray(storeEnhancers)) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : "`enhancers` callback must return an array");
	if (process.env.NODE_ENV !== "production" && storeEnhancers.some((item) => typeof item !== "function")) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "each enhancer provided to configureStore must be a function");
	if (process.env.NODE_ENV !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
	const composedEnhancer = finalCompose(...storeEnhancers);
	return createStore(rootReducer$1, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
	const actionsMap = {};
	const actionMatchers = [];
	let defaultCaseReducer;
	const builder = {
		addCase(typeOrActionCreator, reducer) {
			if (process.env.NODE_ENV !== "production") {
				if (actionMatchers.length > 0) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
				if (defaultCaseReducer) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
			}
			const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
			if (!type) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(28) : "`builder.addCase` cannot be called with an empty action type");
			if (type in actionsMap) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
			actionsMap[type] = reducer;
			return builder;
		},
		addAsyncThunk(asyncThunk, reducers) {
			if (process.env.NODE_ENV !== "production") {
				if (defaultCaseReducer) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
			}
			if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
			if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
			if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
			if (reducers.settled) actionMatchers.push({
				matcher: asyncThunk.settled,
				reducer: reducers.settled
			});
			return builder;
		},
		addMatcher(matcher, reducer) {
			if (process.env.NODE_ENV !== "production") {
				if (defaultCaseReducer) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
			}
			actionMatchers.push({
				matcher,
				reducer
			});
			return builder;
		},
		addDefaultCase(reducer) {
			if (process.env.NODE_ENV !== "production") {
				if (defaultCaseReducer) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(31) : "`builder.addDefaultCase` can only be called once");
			}
			defaultCaseReducer = reducer;
			return builder;
		}
	};
	builderCallback(builder);
	return [
		actionsMap,
		actionMatchers,
		defaultCaseReducer
	];
}
function isStateFunction(x) {
	return typeof x === "function";
}
function createReducer(initialState$4, mapOrBuilderCallback) {
	if (process.env.NODE_ENV !== "production") {
		if (typeof mapOrBuilderCallback === "object") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
	}
	let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
	let getInitialState;
	if (isStateFunction(initialState$4)) getInitialState = () => freezeDraftable(initialState$4());
	else {
		const frozenInitialState = freezeDraftable(initialState$4);
		getInitialState = () => frozenInitialState;
	}
	function reducer(state = getInitialState(), action) {
		let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({ matcher }) => matcher(action)).map(({ reducer: reducer2 }) => reducer2)];
		if (caseReducers.filter((cr) => !!cr).length === 0) caseReducers = [finalDefaultCaseReducer];
		return caseReducers.reduce((previousState, caseReducer) => {
			if (caseReducer) if (isDraft(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) return previousState;
				return result;
			} else if (!isDraftable(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) {
					if (previousState === null) return previousState;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return result;
			} else return produce(previousState, (draft) => {
				return caseReducer(draft, action);
			});
			return previousState;
		}, state);
	}
	reducer.getInitialState = getInitialState;
	return reducer;
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
	let id = "";
	let i = size;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function getType(slice, actionKey) {
	return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
	const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
	return function createSlice2(options) {
		const { name, reducerPath = name } = options;
		if (!name) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "`name` is a required option for createSlice");
		if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
			if (options.initialState === void 0) console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
		}
		const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
		const reducerNames = Object.keys(reducers);
		const context = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		};
		const contextMethods = {
			addCase(typeOrActionCreator, reducer2) {
				const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
				if (!type) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(12) : "`context.addCase` cannot be called with an empty action type");
				if (type in context.sliceCaseReducersByType) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
				context.sliceCaseReducersByType[type] = reducer2;
				return contextMethods;
			},
			addMatcher(matcher, reducer2) {
				context.sliceMatchers.push({
					matcher,
					reducer: reducer2
				});
				return contextMethods;
			},
			exposeAction(name2, actionCreator) {
				context.actionCreators[name2] = actionCreator;
				return contextMethods;
			},
			exposeCaseReducer(name2, reducer2) {
				context.sliceCaseReducersByName[name2] = reducer2;
				return contextMethods;
			}
		};
		reducerNames.forEach((reducerName) => {
			const reducerDefinition = reducers[reducerName];
			const reducerDetails = {
				reducerName,
				type: getType(name, reducerName),
				createNotation: typeof options.reducers === "function"
			};
			if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
			else handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
		});
		function buildReducer() {
			if (process.env.NODE_ENV !== "production") {
				if (typeof options.extraReducers === "object") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
			}
			const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
			const finalCaseReducers = {
				...extraReducers,
				...context.sliceCaseReducersByType
			};
			return createReducer(options.initialState, (builder) => {
				for (let key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
				for (let sM of context.sliceMatchers) builder.addMatcher(sM.matcher, sM.reducer);
				for (let m of actionMatchers) builder.addMatcher(m.matcher, m.reducer);
				if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
			});
		}
		const selectSelf = (state) => state;
		const injectedSelectorCache = /* @__PURE__ */ new Map();
		const injectedStateCache = /* @__PURE__ */ new WeakMap();
		let _reducer;
		function reducer(state, action) {
			if (!_reducer) _reducer = buildReducer();
			return _reducer(state, action);
		}
		function getInitialState() {
			if (!_reducer) _reducer = buildReducer();
			return _reducer.getInitialState();
		}
		function makeSelectorProps(reducerPath2, injected = false) {
			function selectSlice(state) {
				let sliceState = state[reducerPath2];
				if (typeof sliceState === "undefined") {
					if (injected) sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
					else if (process.env.NODE_ENV !== "production") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(15) : "selectSlice returned undefined for an uninjected slice reducer");
				}
				return sliceState;
			}
			function getSelectors(selectState = selectSelf) {
				return getOrInsertComputed(getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap()), selectState, () => {
					const map$1 = {};
					for (const [name2, selector] of Object.entries(options.selectors ?? {})) map$1[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
					return map$1;
				});
			}
			return {
				reducerPath: reducerPath2,
				getSelectors,
				get selectors() {
					return getSelectors(selectSlice);
				},
				selectSlice
			};
		}
		const slice = {
			name,
			reducer,
			actions: context.actionCreators,
			caseReducers: context.sliceCaseReducersByName,
			getInitialState,
			...makeSelectorProps(reducerPath),
			injectInto(injectable, { reducerPath: pathOpt, ...config } = {}) {
				const newReducerPath = pathOpt ?? reducerPath;
				injectable.inject({
					reducerPath: newReducerPath,
					reducer
				}, config);
				return {
					...slice,
					...makeSelectorProps(newReducerPath, true)
				};
			}
		};
		return slice;
	};
}
function wrapSelector(selector, selectState, getInitialState, injected) {
	function wrapper(rootState, ...args) {
		let sliceState = selectState(rootState);
		if (typeof sliceState === "undefined") {
			if (injected) sliceState = getInitialState();
			else if (process.env.NODE_ENV !== "production") throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(16) : "selectState returned undefined for an uninjected slice reducer");
		}
		return selector(sliceState, ...args);
	}
	wrapper.unwrapped = selector;
	return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
	function asyncThunk(payloadCreator, config) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator,
			...config
		};
	}
	asyncThunk.withTypes = () => asyncThunk;
	return {
		reducer(caseReducer) {
			return Object.assign({ [caseReducer.name](...args) {
				return caseReducer(...args);
			} }[caseReducer.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(prepare, reducer) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare,
				reducer
			};
		},
		asyncThunk
	};
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
	let caseReducer;
	let prepareCallback;
	if ("reducer" in maybeReducerWithPrepare) {
		if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
		caseReducer = maybeReducerWithPrepare.reducer;
		prepareCallback = maybeReducerWithPrepare.prepare;
	} else caseReducer = maybeReducerWithPrepare;
	context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
	if (!cAT) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
	const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
	const thunk$1 = cAT(type, payloadCreator, options);
	context.exposeAction(reducerName, thunk$1);
	if (fulfilled) context.addCase(thunk$1.fulfilled, fulfilled);
	if (pending) context.addCase(thunk$1.pending, pending);
	if (rejected) context.addCase(thunk$1.rejected, rejected);
	if (settled) context.addMatcher(thunk$1.settled, settled);
	context.exposeCaseReducer(reducerName, {
		fulfilled: fulfilled || noop$3,
		pending: pending || noop$3,
		rejected: rejected || noop$3,
		settled: settled || noop$3
	});
}
function noop$3() {}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
	constructor(code) {
		this.code = code;
		this.message = `${task} ${cancelled} (reason: ${code})`;
	}
	name = "TaskAbortError";
	message;
};
var assertFunction = (func, expected) => {
	if (typeof func !== "function") throw new TypeError(process.env.NODE_ENV === "production" ? formatProdErrorMessage(32) : `${expected} is not a function`);
};
var noop2 = () => {};
var catchRejection = (promise, onError = noop2) => {
	promise.catch(onError);
	return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
	abortSignal.addEventListener("abort", callback, { once: true });
	return () => abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason) => {
	const signal = abortController.signal;
	if (signal.aborted) return;
	if (!("reason" in signal)) Object.defineProperty(signal, "reason", {
		enumerable: true,
		value: reason,
		configurable: true,
		writable: true
	});
	abortController.abort(reason);
};
var validateActive = (signal) => {
	if (signal.aborted) {
		const { reason } = signal;
		throw new TaskAbortError(reason);
	}
};
function raceWithSignal(signal, promise) {
	let cleanup = noop2;
	return new Promise((resolve, reject) => {
		const notifyRejection = () => reject(new TaskAbortError(signal.reason));
		if (signal.aborted) {
			notifyRejection();
			return;
		}
		cleanup = addAbortSignalListener(signal, notifyRejection);
		promise.finally(() => cleanup()).then(resolve, reject);
	}).finally(() => {
		cleanup = noop2;
	});
}
var runTask = async (task2, cleanUp) => {
	try {
		await Promise.resolve();
		return {
			status: "ok",
			value: await task2()
		};
	} catch (error) {
		return {
			status: error instanceof TaskAbortError ? "cancelled" : "rejected",
			error
		};
	} finally {
		cleanUp?.();
	}
};
var createPause = (signal) => {
	return (promise) => {
		return catchRejection(raceWithSignal(signal, promise).then((output) => {
			validateActive(signal);
			return output;
		}));
	};
};
var createDelay = (signal) => {
	const pause = createPause(signal);
	return (timeoutMs) => {
		return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
	};
};
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
	const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => abortControllerWithReason(controller, parentAbortSignal.reason));
	return (taskExecutor, opts) => {
		assertFunction(taskExecutor, "taskExecutor");
		const childAbortController = new AbortController();
		linkControllers(childAbortController);
		const result = runTask(async () => {
			validateActive(parentAbortSignal);
			validateActive(childAbortController.signal);
			const result2 = await taskExecutor({
				pause: createPause(childAbortController.signal),
				delay: createDelay(childAbortController.signal),
				signal: childAbortController.signal
			});
			validateActive(childAbortController.signal);
			return result2;
		}, () => abortControllerWithReason(childAbortController, taskCompleted));
		if (opts?.autoJoin) parentBlockingPromises.push(result.catch(noop2));
		return {
			result: createPause(parentAbortSignal)(result),
			cancel() {
				abortControllerWithReason(childAbortController, taskCancelled);
			}
		};
	};
};
var createTakePattern = (startListening, signal) => {
	const take = async (predicate, timeout) => {
		validateActive(signal);
		let unsubscribe = () => {};
		const promises = [new Promise((resolve, reject) => {
			let stopListening = startListening({
				predicate,
				effect: (action, listenerApi) => {
					listenerApi.unsubscribe();
					resolve([
						action,
						listenerApi.getState(),
						listenerApi.getOriginalState()
					]);
				}
			});
			unsubscribe = () => {
				stopListening();
				reject();
			};
		})];
		if (timeout != null) promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
		try {
			const output = await raceWithSignal(signal, Promise.race(promises));
			validateActive(signal);
			return output;
		} finally {
			unsubscribe();
		}
	};
	return (predicate, timeout) => catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options) => {
	let { type, actionCreator, matcher, predicate, effect } = options;
	if (type) predicate = createAction(type).match;
	else if (actionCreator) {
		type = actionCreator.type;
		predicate = actionCreator.match;
	} else if (matcher) predicate = matcher;
	else if (predicate) {} else throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(21) : "Creating or removing a listener requires one of the known fields for matching an action");
	assertFunction(effect, "options.listener");
	return {
		predicate,
		type,
		effect
	};
};
var createListenerEntry = /* @__PURE__ */ assign((options) => {
	const { type, predicate, effect } = getListenerEntryPropsFrom(options);
	return {
		id: nanoid(),
		effect,
		type,
		predicate,
		pending: /* @__PURE__ */ new Set(),
		unsubscribe: () => {
			throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(22) : "Unsubscribe not initialized");
		}
	};
}, { withTypes: () => createListenerEntry });
var findListenerEntry = (listenerMap, options) => {
	const { type, effect, predicate } = getListenerEntryPropsFrom(options);
	return Array.from(listenerMap.values()).find((entry) => {
		return (typeof type === "string" ? entry.type === type : entry.predicate === predicate) && entry.effect === effect;
	});
};
var cancelActiveListeners = (entry) => {
	entry.pending.forEach((controller) => {
		abortControllerWithReason(controller, listenerCancelled);
	});
};
var createClearListenerMiddleware = (listenerMap) => {
	return () => {
		listenerMap.forEach(cancelActiveListeners);
		listenerMap.clear();
	};
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
	try {
		errorHandler(errorToNotify, errorInfo);
	} catch (errorHandlerError) {
		setTimeout(() => {
			throw errorHandlerError;
		}, 0);
	}
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), { withTypes: () => addListener });
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), { withTypes: () => removeListener });
var defaultErrorHandler = (...args) => {
	console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
	const listenerMap = /* @__PURE__ */ new Map();
	const { extra, onError = defaultErrorHandler } = middlewareOptions;
	assertFunction(onError, "onError");
	const insertEntry = (entry) => {
		entry.unsubscribe = () => listenerMap.delete(entry.id);
		listenerMap.set(entry.id, entry);
		return (cancelOptions) => {
			entry.unsubscribe();
			if (cancelOptions?.cancelActive) cancelActiveListeners(entry);
		};
	};
	const startListening = (options) => {
		return insertEntry(findListenerEntry(listenerMap, options) ?? createListenerEntry(options));
	};
	assign(startListening, { withTypes: () => startListening });
	const stopListening = (options) => {
		const entry = findListenerEntry(listenerMap, options);
		if (entry) {
			entry.unsubscribe();
			if (options.cancelActive) cancelActiveListeners(entry);
		}
		return !!entry;
	};
	assign(stopListening, { withTypes: () => stopListening });
	const notifyListener = async (entry, action, api, getOriginalState) => {
		const internalTaskController = new AbortController();
		const take = createTakePattern(startListening, internalTaskController.signal);
		const autoJoinPromises = [];
		try {
			entry.pending.add(internalTaskController);
			await Promise.resolve(entry.effect(action, assign({}, api, {
				getOriginalState,
				condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
				take,
				delay: createDelay(internalTaskController.signal),
				pause: createPause(internalTaskController.signal),
				extra,
				signal: internalTaskController.signal,
				fork: createFork(internalTaskController.signal, autoJoinPromises),
				unsubscribe: entry.unsubscribe,
				subscribe: () => {
					listenerMap.set(entry.id, entry);
				},
				cancelActiveListeners: () => {
					entry.pending.forEach((controller, _, set$1) => {
						if (controller !== internalTaskController) {
							abortControllerWithReason(controller, listenerCancelled);
							set$1.delete(controller);
						}
					});
				},
				cancel: () => {
					abortControllerWithReason(internalTaskController, listenerCancelled);
					entry.pending.delete(internalTaskController);
				},
				throwIfCancelled: () => {
					validateActive(internalTaskController.signal);
				}
			})));
		} catch (listenerError) {
			if (!(listenerError instanceof TaskAbortError)) safelyNotifyError(onError, listenerError, { raisedBy: "effect" });
		} finally {
			await Promise.all(autoJoinPromises);
			abortControllerWithReason(internalTaskController, listenerCompleted);
			entry.pending.delete(internalTaskController);
		}
	};
	const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
	const middleware = (api) => (next) => (action) => {
		if (!isAction(action)) return next(action);
		if (addListener.match(action)) return startListening(action.payload);
		if (clearAllListeners.match(action)) {
			clearListenerMiddleware();
			return;
		}
		if (removeListener.match(action)) return stopListening(action.payload);
		let originalState = api.getState();
		const getOriginalState = () => {
			if (originalState === INTERNAL_NIL_TOKEN) throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(23) : `${alm}: getOriginalState can only be called synchronously`);
			return originalState;
		};
		let result;
		try {
			result = next(action);
			if (listenerMap.size > 0) {
				const currentState = api.getState();
				const listenerEntries = Array.from(listenerMap.values());
				for (const entry of listenerEntries) {
					let runListener = false;
					try {
						runListener = entry.predicate(action, currentState, originalState);
					} catch (predicateError) {
						runListener = false;
						safelyNotifyError(onError, predicateError, { raisedBy: "predicate" });
					}
					if (!runListener) continue;
					notifyListener(entry, action, api, getOriginalState);
				}
			}
		} finally {
			originalState = INTERNAL_NIL_TOKEN;
		}
		return result;
	};
	return {
		middleware,
		startListening,
		stopListening,
		clearListeners: clearListenerMiddleware
	};
};
function formatProdErrorMessage(code) {
	return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var chartLayoutSlice = createSlice({
	name: "chartLayout",
	initialState: {
		layoutType: "horizontal",
		width: 0,
		height: 0,
		margin: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		scale: 1
	},
	reducers: {
		setLayout(state, action) {
			state.layoutType = action.payload;
		},
		setChartSize(state, action) {
			state.width = action.payload.width;
			state.height = action.payload.height;
		},
		setMargin(state, action) {
			var _action$payload$top, _action$payload$right, _action$payload$botto, _action$payload$left;
			state.margin.top = (_action$payload$top = action.payload.top) !== null && _action$payload$top !== void 0 ? _action$payload$top : 0;
			state.margin.right = (_action$payload$right = action.payload.right) !== null && _action$payload$right !== void 0 ? _action$payload$right : 0;
			state.margin.bottom = (_action$payload$botto = action.payload.bottom) !== null && _action$payload$botto !== void 0 ? _action$payload$botto : 0;
			state.margin.left = (_action$payload$left = action.payload.left) !== null && _action$payload$left !== void 0 ? _action$payload$left : 0;
		},
		setScale(state, action) {
			state.scale = action.payload;
		}
	}
});
var { setMargin, setLayout, setChartSize, setScale } = chartLayoutSlice.actions;
var chartLayoutReducer = chartLayoutSlice.reducer;
function ownKeys$25(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$25(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$25(Object(t), !0).forEach(function(r$1) {
			_defineProperty$26(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$25(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$26(e, r, t) {
	return (r = _toPropertyKey$26(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$26(t) {
	var i = _toPrimitive$26(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$26(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var RADIAN = Math.PI / 180;
var radianToDegree = (angleInRadian) => angleInRadian * 180 / Math.PI;
var polarToCartesian = (cx, cy, radius, angle) => ({
	x: cx + Math.cos(-RADIAN * angle) * radius,
	y: cy + Math.sin(-RADIAN * angle) * radius
});
var getMaxRadius = function getMaxRadius$1(width, height) {
	var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: 0,
		height: 0,
		brushBottom: 0
	};
	return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
var distanceBetweenPoints = (point, anotherPoint) => {
	var { x: x1, y: y1 } = point;
	var { x: x2, y: y2 } = anotherPoint;
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};
var getAngleOfPoint = (_ref$1, _ref2) => {
	var { x, y } = _ref$1;
	var { cx, cy } = _ref2;
	var radius = distanceBetweenPoints({
		x,
		y
	}, {
		x: cx,
		y: cy
	});
	if (radius <= 0) return {
		radius,
		angle: 0
	};
	var cos = (x - cx) / radius;
	var angleInRadian = Math.acos(cos);
	if (y > cy) angleInRadian = 2 * Math.PI - angleInRadian;
	return {
		radius,
		angle: radianToDegree(angleInRadian),
		angleInRadian
	};
};
var formatAngleOfSector = (_ref3) => {
	var { startAngle, endAngle } = _ref3;
	var startCnt = Math.floor(startAngle / 360);
	var endCnt = Math.floor(endAngle / 360);
	var min = Math.min(startCnt, endCnt);
	return {
		startAngle: startAngle - min * 360,
		endAngle: endAngle - min * 360
	};
};
var reverseFormatAngleOfSector = (angle, _ref4) => {
	var { startAngle, endAngle } = _ref4;
	var startCnt = Math.floor(startAngle / 360);
	var endCnt = Math.floor(endAngle / 360);
	return angle + Math.min(startCnt, endCnt) * 360;
};
var inRangeOfSector = (_ref5, viewBox) => {
	var { x, y } = _ref5;
	var { radius, angle } = getAngleOfPoint({
		x,
		y
	}, viewBox);
	var { innerRadius, outerRadius } = viewBox;
	if (radius < innerRadius || radius > outerRadius) return null;
	if (radius === 0) return null;
	var { startAngle, endAngle } = formatAngleOfSector(viewBox);
	var formatAngle = angle;
	var inRange$1;
	if (startAngle <= endAngle) {
		while (formatAngle > endAngle) formatAngle -= 360;
		while (formatAngle < startAngle) formatAngle += 360;
		inRange$1 = formatAngle >= startAngle && formatAngle <= endAngle;
	} else {
		while (formatAngle > startAngle) formatAngle -= 360;
		while (formatAngle < endAngle) formatAngle += 360;
		inRange$1 = formatAngle >= endAngle && formatAngle <= startAngle;
	}
	if (inRange$1) return _objectSpread$25(_objectSpread$25({}, viewBox), {}, {
		radius,
		angle: reverseFormatAngleOfSector(formatAngle, viewBox)
	});
	return null;
};
function getSliced(arr, startIndex, endIndex) {
	if (!Array.isArray(arr)) return arr;
	if (arr && startIndex + endIndex !== 0) return arr.slice(startIndex, endIndex + 1);
	return arr;
}
function ownKeys$24(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$24(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$24(Object(t), !0).forEach(function(r$1) {
			_defineProperty$25(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$24(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$25(e, r, t) {
	return (r = _toPropertyKey$25(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$25(t) {
	var i = _toPrimitive$25(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$25(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function getValueByDataKey(obj, dataKey, defaultValue) {
	if (isNullish(obj) || isNullish(dataKey)) return defaultValue;
	if (isNumOrStr(dataKey)) return get(obj, dataKey, defaultValue);
	if (typeof dataKey === "function") return dataKey(obj);
	return defaultValue;
}
var calculateActiveTickIndex = (coordinate, ticks, unsortedTicks, axisType, range$2) => {
	var _ticks$length;
	var index = -1;
	var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
	if (len <= 1 || coordinate == null) return 0;
	if (axisType === "angleAxis" && range$2 != null && Math.abs(Math.abs(range$2[1] - range$2[0]) - 360) <= 1e-6) for (var i = 0; i < len; i++) {
		var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
		var cur = unsortedTicks[i].coordinate;
		var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
		var sameDirectionCoord = void 0;
		if (mathSign(cur - before) !== mathSign(after - cur)) {
			var diffInterval = [];
			if (mathSign(after - cur) === mathSign(range$2[1] - range$2[0])) {
				sameDirectionCoord = after;
				var curInRange = cur + range$2[1] - range$2[0];
				diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
				diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
			} else {
				sameDirectionCoord = before;
				var afterInRange = after + range$2[1] - range$2[0];
				diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
				diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
			}
			var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
			if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
				({index} = unsortedTicks[i]);
				break;
			}
		} else {
			var minValue = Math.min(before, after);
			var maxValue = Math.max(before, after);
			if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
				({index} = unsortedTicks[i]);
				break;
			}
		}
	}
	else if (ticks) {
		for (var _i = 0; _i < len; _i++) if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
			({index} = ticks[_i]);
			break;
		}
	}
	return index;
};
var appendOffsetOfLegend = (offset, legendSettings, legendSize) => {
	if (legendSettings && legendSize) {
		var { width: boxWidth, height: boxHeight } = legendSize;
		var { align, verticalAlign, layout } = legendSettings;
		if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && isNumber(offset[align])) return _objectSpread$24(_objectSpread$24({}, offset), {}, { [align]: offset[align] + (boxWidth || 0) });
		if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && isNumber(offset[verticalAlign])) return _objectSpread$24(_objectSpread$24({}, offset), {}, { [verticalAlign]: offset[verticalAlign] + (boxHeight || 0) });
	}
	return offset;
};
var isCategoricalAxis = (layout, axisType) => layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
var getCoordinatesOfGrid = (ticks, minValue, maxValue, syncWithTicks) => {
	if (syncWithTicks) return ticks.map((entry) => entry.coordinate);
	var hasMin, hasMax;
	var values = ticks.map((entry) => {
		if (entry.coordinate === minValue) hasMin = true;
		if (entry.coordinate === maxValue) hasMax = true;
		return entry.coordinate;
	});
	if (!hasMin) values.push(minValue);
	if (!hasMax) values.push(maxValue);
	return values;
};
var getTicksOfAxis = (axis, isGrid, isAll) => {
	if (!axis) return null;
	var { duplicateDomain, type, range: range$2, scale, realScaleType, isCategorical, categoricalDomain, tickCount, ticks, niceTicks, axisType } = axis;
	if (!scale) return null;
	var offsetForBand = realScaleType === "scaleBand" && scale.bandwidth ? scale.bandwidth() / 2 : 2;
	var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && range$2 && range$2.length >= 2 ? mathSign(range$2[0] - range$2[1]) * 2 * offset : offset;
	if (isGrid && (ticks || niceTicks)) return (ticks || niceTicks || []).map((entry, index) => {
		return {
			coordinate: scale(duplicateDomain ? duplicateDomain.indexOf(entry) : entry) + offset,
			value: entry,
			offset,
			index
		};
	}).filter((row) => !isNan(row.coordinate));
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		index,
		offset
	}));
	if (scale.ticks && !isAll && tickCount != null) return scale.ticks(tickCount).map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		offset,
		index
	}));
	return scale.domain().map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: duplicateDomain ? duplicateDomain[entry] : entry,
		index,
		offset
	}));
};
var EPS = 1e-4;
var checkDomainOfScale = (scale) => {
	var domain = scale.domain();
	if (!domain || domain.length <= 2) return;
	var len = domain.length;
	var range$2 = scale.range();
	var minValue = Math.min(range$2[0], range$2[1]) - EPS;
	var maxValue = Math.max(range$2[0], range$2[1]) + EPS;
	var first = scale(domain[0]);
	var last$1 = scale(domain[len - 1]);
	if (first < minValue || first > maxValue || last$1 < minValue || last$1 > maxValue) scale.domain([domain[0], domain[len - 1]]);
};
var truncateByDomain = (value, domain) => {
	if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) return value;
	var minValue = Math.min(domain[0], domain[1]);
	var maxValue = Math.max(domain[0], domain[1]);
	var result = [value[0], value[1]];
	if (!isNumber(value[0]) || value[0] < minValue) result[0] = minValue;
	if (!isNumber(value[1]) || value[1] > maxValue) result[1] = maxValue;
	if (result[0] > maxValue) result[0] = maxValue;
	if (result[1] < minValue) result[1] = minValue;
	return result;
};
var offsetSign = (series) => {
	var n = series.length;
	if (n <= 0) return;
	for (var j = 0, m = series[0].length; j < m; ++j) {
		var positive = 0;
		var negative = 0;
		for (var i = 0; i < n; ++i) {
			var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
			if (value >= 0) {
				series[i][j][0] = positive;
				series[i][j][1] = positive + value;
				positive = series[i][j][1];
			} else {
				series[i][j][0] = negative;
				series[i][j][1] = negative + value;
				negative = series[i][j][1];
			}
		}
	}
};
var offsetPositive = (series) => {
	var n = series.length;
	if (n <= 0) return;
	for (var j = 0, m = series[0].length; j < m; ++j) {
		var positive = 0;
		for (var i = 0; i < n; ++i) {
			var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
			if (value >= 0) {
				series[i][j][0] = positive;
				series[i][j][1] = positive + value;
				positive = series[i][j][1];
			} else {
				series[i][j][0] = 0;
				series[i][j][1] = 0;
			}
		}
	}
};
var STACK_OFFSET_MAP = {
	sign: offsetSign,
	expand: stackOffsetExpand,
	none: stackOffsetNone,
	silhouette: stackOffsetSilhouette,
	wiggle: stackOffsetWiggle,
	positive: offsetPositive
};
var getStackedData = (data, dataKeys, offsetType) => {
	var offsetAccessor = STACK_OFFSET_MAP[offsetType];
	return stack().keys(dataKeys).value((d, key) => +getValueByDataKey(d, key, 0)).order(stackOrderNone).offset(offsetAccessor)(data);
};
function getNormalizedStackId(publicStackId) {
	return publicStackId == null ? void 0 : String(publicStackId);
}
function getCateCoordinateOfLine(_ref$1) {
	var { axis, ticks, bandSize, entry, index, dataKey } = _ref$1;
	if (axis.type === "category") {
		if (!axis.allowDuplicatedCategory && axis.dataKey && !isNullish(entry[axis.dataKey])) {
			var matchedTick = findEntryInArray(ticks, "value", entry[axis.dataKey]);
			if (matchedTick) return matchedTick.coordinate + bandSize / 2;
		}
		return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
	}
	var value = getValueByDataKey(entry, !isNullish(dataKey) ? dataKey : axis.dataKey);
	return !isNullish(value) ? axis.scale(value) : null;
}
var getCateCoordinateOfBar = (_ref2) => {
	var { axis, ticks, offset, bandSize, entry, index } = _ref2;
	if (axis.type === "category") return ticks[index] ? ticks[index].coordinate + offset : null;
	var value = getValueByDataKey(entry, axis.dataKey, axis.scale.domain()[index]);
	return !isNullish(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = (_ref3) => {
	var { numericAxis } = _ref3;
	var domain = numericAxis.scale.domain();
	if (numericAxis.type === "number") {
		var minValue = Math.min(domain[0], domain[1]);
		var maxValue = Math.max(domain[0], domain[1]);
		if (minValue <= 0 && maxValue >= 0) return 0;
		if (maxValue < 0) return maxValue;
		return minValue;
	}
	return domain[0];
};
var getDomainOfSingle = (data) => {
	var flat = data.flat(2).filter(isNumber);
	return [Math.min(...flat), Math.max(...flat)];
};
var makeDomainFinite = (domain) => {
	return [domain[0] === Infinity ? 0 : domain[0], domain[1] === -Infinity ? 0 : domain[1]];
};
var getDomainOfStackGroups = (stackGroups, startIndex, endIndex) => {
	if (stackGroups == null) return;
	return makeDomainFinite(Object.keys(stackGroups).reduce((result, stackId) => {
		var { stackedData } = stackGroups[stackId];
		var domain = stackedData.reduce((res, entry) => {
			var s = getDomainOfSingle(getSliced(entry, startIndex, endIndex));
			return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
		}, [Infinity, -Infinity]);
		return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
	}, [Infinity, -Infinity]));
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var getBandSizeOfAxis = (axis, ticks, isBar) => {
	if (axis && axis.scale && axis.scale.bandwidth) {
		var bandWidth = axis.scale.bandwidth();
		if (!isBar || bandWidth > 0) return bandWidth;
	}
	if (axis && ticks && ticks.length >= 2) {
		var orderedTicks = sortBy(ticks, (o) => o.coordinate);
		var bandSize = Infinity;
		for (var i = 1, len = orderedTicks.length; i < len; i++) {
			var cur = orderedTicks[i];
			var prev = orderedTicks[i - 1];
			bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
		}
		return bandSize === Infinity ? 0 : bandSize;
	}
	return isBar ? void 0 : 0;
};
function getTooltipEntry(_ref4) {
	var { tooltipEntrySettings, dataKey, payload, value, name } = _ref4;
	return _objectSpread$24(_objectSpread$24({}, tooltipEntrySettings), {}, {
		dataKey,
		payload,
		value,
		name
	});
}
function getTooltipNameProp(nameFromItem, dataKey) {
	if (nameFromItem) return String(nameFromItem);
	if (typeof dataKey === "string") return dataKey;
}
function inRange(x, y, layout, polarViewBox, offset) {
	if (layout === "horizontal" || layout === "vertical") return x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height ? {
		x,
		y
	} : null;
	if (polarViewBox) return inRangeOfSector({
		x,
		y
	}, polarViewBox);
	return null;
}
var getActiveCoordinate = (layout, tooltipTicks, activeIndex, rangeObj) => {
	var entry = tooltipTicks.find((tick) => tick && tick.index === activeIndex);
	if (entry) {
		if (layout === "horizontal") return {
			x: entry.coordinate,
			y: rangeObj.y
		};
		if (layout === "vertical") return {
			x: rangeObj.x,
			y: entry.coordinate
		};
		if (layout === "centric") {
			var _angle = entry.coordinate;
			var { radius: _radius } = rangeObj;
			return _objectSpread$24(_objectSpread$24(_objectSpread$24({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
				angle: _angle,
				radius: _radius
			});
		}
		var radius = entry.coordinate;
		var { angle } = rangeObj;
		return _objectSpread$24(_objectSpread$24(_objectSpread$24({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
			angle,
			radius
		});
	}
	return {
		x: 0,
		y: 0
	};
};
var calculateTooltipPos = (rangeObj, layout) => {
	if (layout === "horizontal") return rangeObj.x;
	if (layout === "vertical") return rangeObj.y;
	if (layout === "centric") return rangeObj.angle;
	return rangeObj.radius;
};
var selectChartWidth = (state) => state.layout.width;
var selectChartHeight = (state) => state.layout.height;
var selectContainerScale = (state) => state.layout.scale;
var selectMargin = (state) => state.layout.margin;
var selectAllXAxes = createSelector((state) => state.cartesianAxis.xAxis, (xAxisMap) => {
	return Object.values(xAxisMap);
});
var selectAllYAxes = createSelector((state) => state.cartesianAxis.yAxis, (yAxisMap) => {
	return Object.values(yAxisMap);
});
var DATA_ITEM_INDEX_ATTRIBUTE_NAME = "data-recharts-item-index";
function ownKeys$23(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$23(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$23(Object(t), !0).forEach(function(r$1) {
			_defineProperty$24(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$23(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$24(e, r, t) {
	return (r = _toPropertyKey$24(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$24(t) {
	var i = _toPrimitive$24(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$24(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var selectBrushHeight = (state) => state.brush.height;
function selectLeftAxesOffset(state) {
	return selectAllYAxes(state).reduce((result, entry) => {
		if (entry.orientation === "left" && !entry.mirror && !entry.hide) return result + (typeof entry.width === "number" ? entry.width : 60);
		return result;
	}, 0);
}
function selectRightAxesOffset(state) {
	return selectAllYAxes(state).reduce((result, entry) => {
		if (entry.orientation === "right" && !entry.mirror && !entry.hide) return result + (typeof entry.width === "number" ? entry.width : 60);
		return result;
	}, 0);
}
function selectTopAxesOffset(state) {
	return selectAllXAxes(state).reduce((result, entry) => {
		if (entry.orientation === "top" && !entry.mirror && !entry.hide) return result + entry.height;
		return result;
	}, 0);
}
function selectBottomAxesOffset(state) {
	return selectAllXAxes(state).reduce((result, entry) => {
		if (entry.orientation === "bottom" && !entry.mirror && !entry.hide) return result + entry.height;
		return result;
	}, 0);
}
var selectChartOffsetInternal = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectMargin,
	selectBrushHeight,
	selectLeftAxesOffset,
	selectRightAxesOffset,
	selectTopAxesOffset,
	selectBottomAxesOffset,
	selectLegendSettings,
	selectLegendSize
], (chartWidth, chartHeight, margin, brushHeight, leftAxesOffset, rightAxesOffset, topAxesOffset, bottomAxesOffset, legendSettings, legendSize) => {
	var offsetH = {
		left: (margin.left || 0) + leftAxesOffset,
		right: (margin.right || 0) + rightAxesOffset
	};
	var offset = _objectSpread$23(_objectSpread$23({}, {
		top: (margin.top || 0) + topAxesOffset,
		bottom: (margin.bottom || 0) + bottomAxesOffset
	}), offsetH);
	var brushBottom = offset.bottom;
	offset.bottom += brushHeight;
	offset = appendOffsetOfLegend(offset, legendSettings, legendSize);
	var offsetWidth = chartWidth - offset.left - offset.right;
	var offsetHeight = chartHeight - offset.top - offset.bottom;
	return _objectSpread$23(_objectSpread$23({ brushBottom }, offset), {}, {
		width: Math.max(offsetWidth, 0),
		height: Math.max(offsetHeight, 0)
	});
});
var selectChartViewBox = createSelector(selectChartOffsetInternal, (offset) => ({
	x: offset.left,
	y: offset.top,
	width: offset.width,
	height: offset.height
}));
var selectAxisViewBox = createSelector(selectChartWidth, selectChartHeight, (width, height) => ({
	x: 0,
	y: 0,
	width,
	height
}));
var PanoramaContext = /* @__PURE__ */ createContext(null);
var useIsPanorama = () => useContext(PanoramaContext) != null;
var selectBrushSettings = (state) => state.brush;
var selectBrushDimensions = createSelector([
	selectBrushSettings,
	selectChartOffsetInternal,
	selectMargin
], (brushSettings, offset, margin) => ({
	height: brushSettings.height,
	x: isNumber(brushSettings.x) ? brushSettings.x : offset.left,
	y: isNumber(brushSettings.y) ? brushSettings.y : offset.top + offset.height + offset.brushBottom - ((margin === null || margin === void 0 ? void 0 : margin.bottom) || 0),
	width: isNumber(brushSettings.width) ? brushSettings.width : offset.width
}));
var useViewBox = () => {
	var _useAppSelector;
	var panorama = useIsPanorama();
	var rootViewBox = useAppSelector(selectChartViewBox);
	var brushDimensions = useAppSelector(selectBrushDimensions);
	var brushPadding = (_useAppSelector = useAppSelector(selectBrushSettings)) === null || _useAppSelector === void 0 ? void 0 : _useAppSelector.padding;
	if (!panorama || !brushDimensions || !brushPadding) return rootViewBox;
	return {
		width: brushDimensions.width - brushPadding.left - brushPadding.right,
		height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
		x: brushPadding.left,
		y: brushPadding.top
	};
};
var manyComponentsThrowErrorsIfOffsetIsUndefined = {
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: 0,
	height: 0,
	brushBottom: 0
};
var useOffsetInternal = () => {
	var _useAppSelector2;
	return (_useAppSelector2 = useAppSelector(selectChartOffsetInternal)) !== null && _useAppSelector2 !== void 0 ? _useAppSelector2 : manyComponentsThrowErrorsIfOffsetIsUndefined;
};
var useChartWidth = () => {
	return useAppSelector(selectChartWidth);
};
var useChartHeight = () => {
	return useAppSelector(selectChartHeight);
};
var useMargin = () => {
	return useAppSelector((state) => state.layout.margin);
};
var selectChartLayout = (state) => state.layout.layoutType;
var useChartLayout = () => useAppSelector(selectChartLayout);
var legendSlice = createSlice({
	name: "legend",
	initialState: {
		settings: {
			layout: "horizontal",
			align: "center",
			verticalAlign: "middle",
			itemSorter: "value"
		},
		size: {
			width: 0,
			height: 0
		},
		payload: []
	},
	reducers: {
		setLegendSize(state, action) {
			state.size.width = action.payload.width;
			state.size.height = action.payload.height;
		},
		setLegendSettings(state, action) {
			state.settings.align = action.payload.align;
			state.settings.layout = action.payload.layout;
			state.settings.verticalAlign = action.payload.verticalAlign;
			state.settings.itemSorter = action.payload.itemSorter;
		},
		addLegendPayload(state, action) {
			state.payload.push(castDraft(action.payload));
		},
		removeLegendPayload(state, action) {
			var index = current(state).payload.indexOf(castDraft(action.payload));
			if (index > -1) state.payload.splice(index, 1);
		}
	}
});
var { setLegendSize, setLegendSettings, addLegendPayload, removeLegendPayload } = legendSlice.actions;
var legendReducer = legendSlice.reducer;
function _extends$12() {
	return _extends$12 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$12.apply(null, arguments);
}
function ownKeys$22(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$22(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$22(Object(t), !0).forEach(function(r$1) {
			_defineProperty$23(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$22(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$23(e, r, t) {
	return (r = _toPropertyKey$23(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$23(t) {
	var i = _toPrimitive$23(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$23(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function defaultFormatter(value) {
	return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
}
var DefaultTooltipContent = (props) => {
	var { separator = " : ", contentStyle = {}, itemStyle = {}, labelStyle = {}, payload, formatter, itemSorter, wrapperClassName, labelClassName, label, labelFormatter, accessibilityLayer = false } = props;
	var renderContent$1 = () => {
		if (payload && payload.length) {
			var listStyle = {
				padding: 0,
				margin: 0
			};
			var items = (itemSorter ? sortBy(payload, itemSorter) : payload).map((entry, i) => {
				if (entry.type === "none") return null;
				var finalFormatter = entry.formatter || formatter || defaultFormatter;
				var { value, name } = entry;
				var finalValue = value;
				var finalName = name;
				if (finalFormatter) {
					var formatted = finalFormatter(value, name, entry, i, payload);
					if (Array.isArray(formatted)) [finalValue, finalName] = formatted;
					else if (formatted != null) finalValue = formatted;
					else return null;
				}
				var finalItemStyle = _objectSpread$22({
					display: "block",
					paddingTop: 4,
					paddingBottom: 4,
					color: entry.color || "#000"
				}, itemStyle);
				return /* @__PURE__ */ React$1.createElement("li", {
					className: "recharts-tooltip-item",
					key: "tooltip-item-".concat(i),
					style: finalItemStyle
				}, isNumOrStr(finalName) ? /* @__PURE__ */ React$1.createElement("span", { className: "recharts-tooltip-item-name" }, finalName) : null, isNumOrStr(finalName) ? /* @__PURE__ */ React$1.createElement("span", { className: "recharts-tooltip-item-separator" }, separator) : null, /* @__PURE__ */ React$1.createElement("span", { className: "recharts-tooltip-item-value" }, finalValue), /* @__PURE__ */ React$1.createElement("span", { className: "recharts-tooltip-item-unit" }, entry.unit || ""));
			});
			return /* @__PURE__ */ React$1.createElement("ul", {
				className: "recharts-tooltip-item-list",
				style: listStyle
			}, items);
		}
		return null;
	};
	var finalStyle = _objectSpread$22({
		margin: 0,
		padding: 10,
		backgroundColor: "#fff",
		border: "1px solid #ccc",
		whiteSpace: "nowrap"
	}, contentStyle);
	var finalLabelStyle = _objectSpread$22({ margin: 0 }, labelStyle);
	var hasLabel = !isNullish(label);
	var finalLabel = hasLabel ? label : "";
	var wrapperCN = clsx("recharts-default-tooltip", wrapperClassName);
	var labelCN = clsx("recharts-tooltip-label", labelClassName);
	if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) finalLabel = labelFormatter(label, payload);
	var accessibilityAttributes = accessibilityLayer ? {
		role: "status",
		"aria-live": "assertive"
	} : {};
	return /* @__PURE__ */ React$1.createElement("div", _extends$12({
		className: wrapperCN,
		style: finalStyle
	}, accessibilityAttributes), /* @__PURE__ */ React$1.createElement("p", {
		className: labelCN,
		style: finalLabelStyle
	}, /* @__PURE__ */ React$1.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent$1());
};
var CSS_CLASS_PREFIX = "recharts-tooltip-wrapper";
var TOOLTIP_HIDDEN = { visibility: "hidden" };
function getTooltipCSSClassName(_ref$1) {
	var { coordinate, translateX, translateY } = _ref$1;
	return clsx(CSS_CLASS_PREFIX, {
		["".concat(CSS_CLASS_PREFIX, "-right")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
		["".concat(CSS_CLASS_PREFIX, "-left")]: isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
		["".concat(CSS_CLASS_PREFIX, "-bottom")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
		["".concat(CSS_CLASS_PREFIX, "-top")]: isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y
	});
}
function getTooltipTranslateXY(_ref2) {
	var { allowEscapeViewBox, coordinate, key, offsetTopLeft, position, reverseDirection, tooltipDimension, viewBox, viewBoxDimension } = _ref2;
	if (position && isNumber(position[key])) return position[key];
	var negative = coordinate[key] - tooltipDimension - (offsetTopLeft > 0 ? offsetTopLeft : 0);
	var positive = coordinate[key] + offsetTopLeft;
	if (allowEscapeViewBox[key]) return reverseDirection[key] ? negative : positive;
	var viewBoxKey = viewBox[key];
	if (viewBoxKey == null) return 0;
	if (reverseDirection[key]) {
		if (negative < viewBoxKey) return Math.max(positive, viewBoxKey);
		return Math.max(negative, viewBoxKey);
	}
	if (viewBoxDimension == null) return 0;
	if (positive + tooltipDimension > viewBoxKey + viewBoxDimension) return Math.max(negative, viewBoxKey);
	return Math.max(positive, viewBoxKey);
}
function getTransformStyle(_ref3) {
	var { translateX, translateY, useTranslate3d } = _ref3;
	return { transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)") };
}
function getTooltipTranslate(_ref4) {
	var { allowEscapeViewBox, coordinate, offsetTopLeft, position, reverseDirection, tooltipBox, useTranslate3d, viewBox } = _ref4;
	var cssProperties, translateX, translateY;
	if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
		translateX = getTooltipTranslateXY({
			allowEscapeViewBox,
			coordinate,
			key: "x",
			offsetTopLeft,
			position,
			reverseDirection,
			tooltipDimension: tooltipBox.width,
			viewBox,
			viewBoxDimension: viewBox.width
		});
		translateY = getTooltipTranslateXY({
			allowEscapeViewBox,
			coordinate,
			key: "y",
			offsetTopLeft,
			position,
			reverseDirection,
			tooltipDimension: tooltipBox.height,
			viewBox,
			viewBoxDimension: viewBox.height
		});
		cssProperties = getTransformStyle({
			translateX,
			translateY,
			useTranslate3d
		});
	} else cssProperties = TOOLTIP_HIDDEN;
	return {
		cssProperties,
		cssClasses: getTooltipCSSClassName({
			translateX,
			translateY,
			coordinate
		})
	};
}
function ownKeys$21(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$21(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$21(Object(t), !0).forEach(function(r$1) {
			_defineProperty$22(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$21(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$22(e, r, t) {
	return (r = _toPropertyKey$22(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$22(t) {
	var i = _toPrimitive$22(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$22(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var TooltipBoundingBox = class extends PureComponent {
	constructor() {
		super(...arguments);
		_defineProperty$22(this, "state", {
			dismissed: false,
			dismissedAtCoordinate: {
				x: 0,
				y: 0
			}
		});
		_defineProperty$22(this, "handleKeyDown", (event) => {
			if (event.key === "Escape") {
				var _this$props$coordinat, _this$props$coordinat2, _this$props$coordinat3, _this$props$coordinat4;
				this.setState({
					dismissed: true,
					dismissedAtCoordinate: {
						x: (_this$props$coordinat = (_this$props$coordinat2 = this.props.coordinate) === null || _this$props$coordinat2 === void 0 ? void 0 : _this$props$coordinat2.x) !== null && _this$props$coordinat !== void 0 ? _this$props$coordinat : 0,
						y: (_this$props$coordinat3 = (_this$props$coordinat4 = this.props.coordinate) === null || _this$props$coordinat4 === void 0 ? void 0 : _this$props$coordinat4.y) !== null && _this$props$coordinat3 !== void 0 ? _this$props$coordinat3 : 0
					}
				});
			}
		});
	}
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}
	componentDidUpdate() {
		var _this$props$coordinat5, _this$props$coordinat6;
		if (!this.state.dismissed) return;
		if (((_this$props$coordinat5 = this.props.coordinate) === null || _this$props$coordinat5 === void 0 ? void 0 : _this$props$coordinat5.x) !== this.state.dismissedAtCoordinate.x || ((_this$props$coordinat6 = this.props.coordinate) === null || _this$props$coordinat6 === void 0 ? void 0 : _this$props$coordinat6.y) !== this.state.dismissedAtCoordinate.y) this.state.dismissed = false;
	}
	render() {
		var { active, allowEscapeViewBox, animationDuration, animationEasing, children, coordinate, hasPayload, isAnimationActive, offset, position, reverseDirection, useTranslate3d, viewBox, wrapperStyle, lastBoundingBox, innerRef, hasPortalFromProps } = this.props;
		var { cssClasses, cssProperties } = getTooltipTranslate({
			allowEscapeViewBox,
			coordinate,
			offsetTopLeft: offset,
			position,
			reverseDirection,
			tooltipBox: {
				height: lastBoundingBox.height,
				width: lastBoundingBox.width
			},
			useTranslate3d,
			viewBox
		});
		var outerStyle = _objectSpread$21(_objectSpread$21({}, hasPortalFromProps ? {} : _objectSpread$21(_objectSpread$21({ transition: isAnimationActive && active ? "transform ".concat(animationDuration, "ms ").concat(animationEasing) : void 0 }, cssProperties), {}, {
			pointerEvents: "none",
			visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden",
			position: "absolute",
			top: 0,
			left: 0
		})), {}, { visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden" }, wrapperStyle);
		return /* @__PURE__ */ React$1.createElement("div", {
			xmlns: "http://www.w3.org/1999/xhtml",
			tabIndex: -1,
			className: cssClasses,
			style: outerStyle,
			ref: innerRef
		}, children);
	}
};
var parseIsSsrByDefault = () => !(typeof window !== "undefined" && window.document && Boolean(window.document.createElement) && window.setTimeout);
var Global = {
	devToolsEnabled: false,
	isSsr: parseIsSsrByDefault()
};
var useAccessibilityLayer = () => useAppSelector((state) => state.rootProps.accessibilityLayer);
function isWellBehavedNumber(n) {
	return Number.isFinite(n);
}
function isPositiveNumber(n) {
	return typeof n === "number" && n > 0 && Number.isFinite(n);
}
function _extends$11() {
	return _extends$11 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$11.apply(null, arguments);
}
function ownKeys$20(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$20(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$20(Object(t), !0).forEach(function(r$1) {
			_defineProperty$21(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$20(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$21(e, r, t) {
	return (r = _toPropertyKey$21(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$21(t) {
	var i = _toPrimitive$21(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$21(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var CURVE_FACTORIES = {
	curveBasisClosed,
	curveBasisOpen,
	curveBasis,
	curveBumpX,
	curveBumpY,
	curveLinearClosed,
	curveLinear,
	curveMonotoneX,
	curveMonotoneY,
	curveNatural,
	curveStep,
	curveStepAfter,
	curveStepBefore
};
var defined = (p) => isWellBehavedNumber(p.x) && isWellBehavedNumber(p.y);
var getX = (p) => p.x;
var getY = (p) => p.y;
var getCurveFactory = (type, layout) => {
	if (typeof type === "function") return type;
	var name = "curve".concat(upperFirst(type));
	if ((name === "curveMonotone" || name === "curveBump") && layout) return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
	return CURVE_FACTORIES[name] || curveLinear;
};
var getPath$1 = (_ref$1) => {
	var { type = "linear", points = [], baseLine, layout, connectNulls = false } = _ref$1;
	var curveFactory = getCurveFactory(type, layout);
	var formatPoints = connectNulls ? points.filter(defined) : points;
	var lineFunction;
	if (Array.isArray(baseLine)) {
		var formatBaseLine = connectNulls ? baseLine.filter((base) => defined(base)) : baseLine;
		var areaPoints = formatPoints.map((entry, index) => _objectSpread$20(_objectSpread$20({}, entry), {}, { base: formatBaseLine[index] }));
		if (layout === "vertical") lineFunction = area().y(getY).x1(getX).x0((d) => d.base.x);
		else lineFunction = area().x(getX).y1(getY).y0((d) => d.base.y);
		lineFunction.defined(defined).curve(curveFactory);
		return lineFunction(areaPoints);
	}
	if (layout === "vertical" && isNumber(baseLine)) lineFunction = area().y(getY).x1(getX).x0(baseLine);
	else if (isNumber(baseLine)) lineFunction = area().x(getX).y1(getY).y0(baseLine);
	else lineFunction = line().x(getX).y(getY);
	lineFunction.defined(defined).curve(curveFactory);
	return lineFunction(formatPoints);
};
var Curve = (props) => {
	var { className, points, path, pathRef } = props;
	if ((!points || !points.length) && !path) return null;
	var realPath = points && points.length ? getPath$1(props) : path;
	return /* @__PURE__ */ React$1.createElement("path", _extends$11({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
		className: clsx("recharts-curve", className),
		d: realPath === null ? void 0 : realPath,
		ref: pathRef
	}));
};
var _excluded$9 = [
	"x",
	"y",
	"top",
	"left",
	"width",
	"height",
	"className"
];
function _extends$10() {
	return _extends$10 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$10.apply(null, arguments);
}
function ownKeys$19(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$19(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$19(Object(t), !0).forEach(function(r$1) {
			_defineProperty$20(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$19(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$20(e, r, t) {
	return (r = _toPropertyKey$20(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$20(t) {
	var i = _toPrimitive$20(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$20(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$9(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$9(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$9(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var getPath = (x, y, width, height, top, left) => {
	return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = (_ref$1) => {
	var { x = 0, y = 0, top = 0, left = 0, width = 0, height = 0, className } = _ref$1, rest = _objectWithoutProperties$9(_ref$1, _excluded$9);
	var props = _objectSpread$19({
		x,
		y,
		top,
		left,
		width,
		height
	}, rest);
	if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) return null;
	return /* @__PURE__ */ React$1.createElement("path", _extends$10({}, filterProps(props, true), {
		className: clsx("recharts-cross", className),
		d: getPath(x, y, width, height, top, left)
	}));
};
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
	var halfSize = tooltipAxisBandSize / 2;
	return {
		stroke: "none",
		fill: "#ccc",
		x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + .5,
		y: layout === "horizontal" ? offset.top + .5 : activeCoordinate.y - halfSize,
		width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
		height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
	};
}
function ownKeys$18(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$18(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$18(Object(t), !0).forEach(function(r$1) {
			_defineProperty$19(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$18(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$19(e, r, t) {
	return (r = _toPropertyKey$19(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$19(t) {
	var i = _toPrimitive$19(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$19(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function resolveDefaultProps(realProps, defaultProps$3) {
	var resolvedProps = _objectSpread$18({}, realProps);
	var dp = defaultProps$3;
	return Object.keys(defaultProps$3).reduce((acc, key) => {
		if (acc[key] === void 0 && dp[key] !== void 0) acc[key] = dp[key];
		return acc;
	}, resolvedProps);
}
function ownKeys$17(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$17(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$17(Object(t), !0).forEach(function(r$1) {
			_defineProperty$18(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$17(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$18(e, r, t) {
	return (r = _toPropertyKey$18(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$18(t) {
	var i = _toPrimitive$18(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$18(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var getDashCase = (name) => name.replace(/([A-Z])/g, (v) => "-".concat(v.toLowerCase()));
var getTransitionVal = (props, duration, easing) => props.map((prop) => "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing)).join(",");
var getIntersectionKeys = (preObj, nextObj) => [Object.keys(preObj), Object.keys(nextObj)].reduce((a, b) => a.filter((c) => b.includes(c)));
var mapObject = (fn, obj) => Object.keys(obj).reduce((res, key) => _objectSpread$17(_objectSpread$17({}, res), {}, { [key]: fn(key, obj[key]) }), {});
function ownKeys$16(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$16(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$16(Object(t), !0).forEach(function(r$1) {
			_defineProperty$17(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$16(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$17(e, r, t) {
	return (r = _toPropertyKey$17(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$17(t) {
	var i = _toPrimitive$17(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$17(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var alpha = (begin, end, k) => begin + (end - begin) * k;
var needContinue = (_ref$1) => {
	var { from: from$1, to: to$1 } = _ref$1;
	return from$1 !== to$1;
};
var calStepperVals = (easing, preVals, steps) => {
	var nextStepVals = mapObject((key, val) => {
		if (needContinue(val)) {
			var [newX, newV] = easing(val.from, val.to, val.velocity);
			return _objectSpread$16(_objectSpread$16({}, val), {}, {
				from: newX,
				velocity: newV
			});
		}
		return val;
	}, preVals);
	if (steps < 1) return mapObject((key, val) => {
		if (needContinue(val)) return _objectSpread$16(_objectSpread$16({}, val), {}, {
			velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
			from: alpha(val.from, nextStepVals[key].from, steps)
		});
		return val;
	}, preVals);
	return calStepperVals(easing, nextStepVals, steps - 1);
};
function createStepperUpdate(from$1, to$1, easing, interKeys, render, timeoutController) {
	var preTime;
	var stepperStyle = interKeys.reduce((res, key) => _objectSpread$16(_objectSpread$16({}, res), {}, { [key]: {
		from: from$1[key],
		velocity: 0,
		to: to$1[key]
	} }), {});
	var getCurrStyle = () => mapObject((key, val) => val.from, stepperStyle);
	var shouldStopAnimation = () => !Object.values(stepperStyle).filter(needContinue).length;
	var stopAnimation = null;
	var stepperUpdate = (now) => {
		if (!preTime) preTime = now;
		var steps = (now - preTime) / easing.dt;
		stepperStyle = calStepperVals(easing, stepperStyle, steps);
		render(_objectSpread$16(_objectSpread$16(_objectSpread$16({}, from$1), to$1), getCurrStyle()));
		preTime = now;
		if (!shouldStopAnimation()) stopAnimation = timeoutController.setTimeout(stepperUpdate);
	};
	return () => {
		stopAnimation = timeoutController.setTimeout(stepperUpdate);
		return () => {
			stopAnimation();
		};
	};
}
function createTimingUpdate(from$1, to$1, easing, duration, interKeys, render, timeoutController) {
	var stopAnimation = null;
	var timingStyle = interKeys.reduce((res, key) => _objectSpread$16(_objectSpread$16({}, res), {}, { [key]: [from$1[key], to$1[key]] }), {});
	var beginTime;
	var timingUpdate = (now) => {
		if (!beginTime) beginTime = now;
		var t = (now - beginTime) / duration;
		var currStyle = mapObject((key, val) => alpha(...val, easing(t)), timingStyle);
		render(_objectSpread$16(_objectSpread$16(_objectSpread$16({}, from$1), to$1), currStyle));
		if (t < 1) stopAnimation = timeoutController.setTimeout(timingUpdate);
		else {
			var finalStyle = mapObject((key, val) => alpha(...val, easing(1)), timingStyle);
			render(_objectSpread$16(_objectSpread$16(_objectSpread$16({}, from$1), to$1), finalStyle));
		}
	};
	return () => {
		stopAnimation = timeoutController.setTimeout(timingUpdate);
		return () => {
			stopAnimation();
		};
	};
}
var configUpdate_default = (from$1, to$1, easing, duration, render, timeoutController) => {
	var interKeys = getIntersectionKeys(from$1, to$1);
	return easing.isStepper === true ? createStepperUpdate(from$1, to$1, easing, interKeys, render, timeoutController) : createTimingUpdate(from$1, to$1, easing, duration, interKeys, render, timeoutController);
};
var cubicBezierFactor = (c1, c2) => [
	0,
	3 * c1,
	3 * c2 - 6 * c1,
	3 * c1 - 3 * c2 + 1
];
var evaluatePolynomial = (params, t) => params.map((param, i) => param * t ** i).reduce((pre, curr) => pre + curr);
var cubicBezier = (c1, c2) => (t) => {
	return evaluatePolynomial(cubicBezierFactor(c1, c2), t);
};
var derivativeCubicBezier = (c1, c2) => (t) => {
	return evaluatePolynomial([...cubicBezierFactor(c1, c2).map((param, i) => param * i).slice(1), 0], t);
};
var configBezier = function configBezier$1() {
	var x1, x2, y1, y2;
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	if (args.length === 1) switch (args[0]) {
		case "linear":
			[x1, y1, x2, y2] = [
				0,
				0,
				1,
				1
			];
			break;
		case "ease":
			[x1, y1, x2, y2] = [
				.25,
				.1,
				.25,
				1
			];
			break;
		case "ease-in":
			[x1, y1, x2, y2] = [
				.42,
				0,
				1,
				1
			];
			break;
		case "ease-out":
			[x1, y1, x2, y2] = [
				.42,
				0,
				.58,
				1
			];
			break;
		case "ease-in-out":
			[x1, y1, x2, y2] = [
				0,
				0,
				.58,
				1
			];
			break;
		default:
			var easing = args[0].split("(");
			if (easing[0] === "cubic-bezier" && easing[1].split(")")[0].split(",").length === 4) [x1, y1, x2, y2] = easing[1].split(")")[0].split(",").map((x) => parseFloat(x));
	}
	else if (args.length === 4) [x1, y1, x2, y2] = args;
	var curveX = cubicBezier(x1, x2);
	var curveY = cubicBezier(y1, y2);
	var derCurveX = derivativeCubicBezier(x1, x2);
	var rangeValue = (value) => {
		if (value > 1) return 1;
		if (value < 0) return 0;
		return value;
	};
	var bezier = (_t) => {
		var t = _t > 1 ? 1 : _t;
		var x = t;
		for (var i = 0; i < 8; ++i) {
			var evalT = curveX(x) - t;
			var derVal = derCurveX(x);
			if (Math.abs(evalT - t) < 1e-4 || derVal < 1e-4) return curveY(x);
			x = rangeValue(x - evalT / derVal);
		}
		return curveY(x);
	};
	bezier.isStepper = false;
	return bezier;
};
var configSpring = function configSpring$1() {
	var { stiff = 100, damping = 8, dt = 17 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	var stepper = (currX, destX, currV) => {
		var newV = currV + (-(currX - destX) * stiff - currV * damping) * dt / 1e3;
		var newX = currV * dt / 1e3 + currX;
		if (Math.abs(newX - destX) < 1e-4 && Math.abs(newV) < 1e-4) return [destX, 0];
		return [newX, newV];
	};
	stepper.isStepper = true;
	stepper.dt = dt;
	return stepper;
};
var configEasing = (easing) => {
	if (typeof easing === "string") switch (easing) {
		case "ease":
		case "ease-in-out":
		case "ease-out":
		case "ease-in":
		case "linear": return configBezier(easing);
		case "spring": return configSpring();
		default: if (easing.split("(")[0] === "cubic-bezier") return configBezier(easing);
	}
	if (typeof easing === "function") return easing;
	return null;
};
function createAnimateManager(timeoutController) {
	var currStyle;
	var handleChange = () => null;
	var shouldStop = false;
	var cancelTimeout = null;
	var setStyle = (_style) => {
		if (shouldStop) return;
		if (Array.isArray(_style)) {
			if (!_style.length) return;
			var [curr, ...restStyles] = _style;
			if (typeof curr === "number") {
				cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);
				return;
			}
			setStyle(curr);
			cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles));
			return;
		}
		if (typeof _style === "string") {
			currStyle = _style;
			handleChange(currStyle);
		}
		if (typeof _style === "object") {
			currStyle = _style;
			handleChange(currStyle);
		}
		if (typeof _style === "function") _style();
	};
	return {
		stop: () => {
			shouldStop = true;
		},
		start: (style) => {
			shouldStop = false;
			if (cancelTimeout) {
				cancelTimeout();
				cancelTimeout = null;
			}
			setStyle(style);
		},
		subscribe: (_handleChange) => {
			handleChange = _handleChange;
			return () => {
				handleChange = () => null;
			};
		},
		getTimeoutController: () => timeoutController
	};
}
var RequestAnimationFrameTimeoutController = class {
	setTimeout(callback) {
		var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		var startTime = performance.now();
		var requestId = null;
		var executeCallback = (now) => {
			if (now - startTime >= delay) callback(now);
			else if (typeof requestAnimationFrame === "function") requestId = requestAnimationFrame(executeCallback);
		};
		requestId = requestAnimationFrame(executeCallback);
		return () => {
			cancelAnimationFrame(requestId);
		};
	}
};
function createDefaultAnimationManager() {
	return createAnimateManager(new RequestAnimationFrameTimeoutController());
}
var AnimationManagerContext = /* @__PURE__ */ createContext(createDefaultAnimationManager);
function useAnimationManager(animationId, animationManagerFromProps) {
	var contextAnimationManager = useContext(AnimationManagerContext);
	return useMemo(() => animationManagerFromProps !== null && animationManagerFromProps !== void 0 ? animationManagerFromProps : contextAnimationManager(animationId), [
		animationId,
		animationManagerFromProps,
		contextAnimationManager
	]);
}
var defaultJavascriptAnimateProps = {
	begin: 0,
	duration: 1e3,
	easing: "ease",
	isActive: true,
	canBegin: true,
	onAnimationEnd: () => {},
	onAnimationStart: () => {}
};
var from = { t: 0 };
var to = { t: 1 };
function JavascriptAnimate(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
	var { isActive, canBegin, duration, easing, begin, onAnimationEnd, onAnimationStart, children } = props;
	var animationManager = useAnimationManager(props.animationId, props.animationManager);
	var [style, setStyle] = useState(isActive ? from : to);
	var stopJSAnimation = useRef(null);
	useEffect(() => {
		if (!isActive) setStyle(to);
	}, [isActive]);
	useEffect(() => {
		if (!isActive || !canBegin) return noop;
		var startAnimation = configUpdate_default(from, to, configEasing(easing), duration, setStyle, animationManager.getTimeoutController());
		var onAnimationActive = () => {
			stopJSAnimation.current = startAnimation();
		};
		animationManager.start([
			onAnimationStart,
			begin,
			onAnimationActive,
			duration,
			onAnimationEnd
		]);
		return () => {
			animationManager.stop();
			if (stopJSAnimation.current) stopJSAnimation.current();
			onAnimationEnd();
		};
	}, [
		isActive,
		canBegin,
		duration,
		easing,
		begin,
		onAnimationStart,
		onAnimationEnd,
		animationManager
	]);
	return children(style.t);
}
function useAnimationId(input) {
	var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-";
	var animationId = useRef(uniqueId(prefix));
	var prevProps = useRef(input);
	if (prevProps.current !== input) {
		animationId.current = uniqueId(prefix);
		prevProps.current = input;
	}
	return animationId.current;
}
function ownKeys$15(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$15(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$15(Object(t), !0).forEach(function(r$1) {
			_defineProperty$16(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$15(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$16(e, r, t) {
	return (r = _toPropertyKey$16(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$16(t) {
	var i = _toPrimitive$16(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$16(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$9() {
	return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$9.apply(null, arguments);
}
var getRectanglePath = (x, y, width, height, radius) => {
	var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
	var ySign = height >= 0 ? 1 : -1;
	var xSign = width >= 0 ? 1 : -1;
	var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
	var path;
	if (maxRadius > 0 && radius instanceof Array) {
		var newRadius = [
			0,
			0,
			0,
			0
		];
		for (var i = 0, len = 4; i < len; i++) newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
		path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);
		if (newRadius[0] > 0) path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
		path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);
		if (newRadius[1] > 0) path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
		path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);
		if (newRadius[2] > 0) path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
		path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);
		if (newRadius[3] > 0) path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
		path += "Z";
	} else if (maxRadius > 0 && radius === +radius && radius > 0) {
		var _newRadius = Math.min(maxRadius, radius);
		path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
	} else path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
	return path;
};
var defaultProps$2 = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	radius: 0,
	isAnimationActive: false,
	isUpdateAnimationActive: false,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
};
var Rectangle = (rectangleProps) => {
	var props = resolveDefaultProps(rectangleProps, defaultProps$2);
	var pathRef = useRef(null);
	var [totalLength, setTotalLength] = useState(-1);
	useEffect(() => {
		if (pathRef.current && pathRef.current.getTotalLength) try {
			var pathTotalLength = pathRef.current.getTotalLength();
			if (pathTotalLength) setTotalLength(pathTotalLength);
		} catch (_unused) {}
	}, []);
	var { x, y, width, height, radius, className } = props;
	var { animationEasing, animationDuration, animationBegin, isAnimationActive, isUpdateAnimationActive } = props;
	var prevWidthRef = useRef(width);
	var prevHeightRef = useRef(height);
	var prevXRef = useRef(x);
	var prevYRef = useRef(y);
	var animationId = useAnimationId(useMemo(() => ({
		x,
		y,
		width,
		height,
		radius
	}), [
		x,
		y,
		width,
		height,
		radius
	]), "rectangle-");
	if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) return null;
	var layerClass = clsx("recharts-rectangle", className);
	if (!isUpdateAnimationActive) return /* @__PURE__ */ React$1.createElement("path", _extends$9({}, filterProps(props, true), {
		className: layerClass,
		d: getRectanglePath(x, y, width, height, radius)
	}));
	var prevWidth = prevWidthRef.current;
	var prevHeight = prevHeightRef.current;
	var prevX = prevXRef.current;
	var prevY = prevYRef.current;
	var from$1 = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
	var to$1 = "".concat(totalLength, "px 0px");
	var transition = getTransitionVal(["strokeDasharray"], animationDuration, typeof animationEasing === "string" ? animationEasing : void 0);
	return /* @__PURE__ */ React$1.createElement(JavascriptAnimate, {
		animationId,
		key: animationId,
		canBegin: totalLength > 0,
		duration: animationDuration,
		easing: animationEasing,
		isActive: isUpdateAnimationActive,
		begin: animationBegin
	}, (t) => {
		var currWidth = interpolate(prevWidth, width, t);
		var currHeight = interpolate(prevHeight, height, t);
		var currX = interpolate(prevX, x, t);
		var currY = interpolate(prevY, y, t);
		if (pathRef.current) {
			prevWidthRef.current = currWidth;
			prevHeightRef.current = currHeight;
			prevXRef.current = currX;
			prevYRef.current = currY;
		}
		var animationStyle;
		if (!isAnimationActive) animationStyle = { strokeDasharray: to$1 };
		else if (t > 0) animationStyle = {
			transition,
			strokeDasharray: to$1
		};
		else animationStyle = { strokeDasharray: from$1 };
		return /* @__PURE__ */ React$1.createElement("path", _extends$9({}, filterProps(props, true), {
			className: layerClass,
			d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
			ref: pathRef,
			style: _objectSpread$15(_objectSpread$15({}, animationStyle), props.style)
		}));
	});
};
function getRadialCursorPoints(activeCoordinate) {
	var { cx, cy, radius, startAngle, endAngle } = activeCoordinate;
	return {
		points: [polarToCartesian(cx, cy, radius, startAngle), polarToCartesian(cx, cy, radius, endAngle)],
		cx,
		cy,
		radius,
		startAngle,
		endAngle
	};
}
function _extends$8() {
	return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$8.apply(null, arguments);
}
var getDeltaAngle$1 = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 359.999);
};
var getTangentCircle = (_ref$1) => {
	var { cx, cy, radius, angle, sign, isExternal, cornerRadius, cornerIsExternal } = _ref$1;
	var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
	var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
	var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
	var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
	var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
	var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
	return {
		center,
		circleTangency,
		lineTangency: polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle),
		theta
	};
};
var getSectorPath = (_ref2) => {
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = _ref2;
	var angle = getDeltaAngle$1(startAngle, endAngle);
	var tempEndAngle = startAngle + angle;
	var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
	var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
	var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
	if (innerRadius > 0) {
		var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
		var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
		path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
	} else path += "L ".concat(cx, ",").concat(cy, " Z");
	return path;
};
var getSectorWithCorner = (_ref3) => {
	var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle } = _ref3;
	var sign = mathSign(endAngle - startAngle);
	var { circleTangency: soct, lineTangency: solt, theta: sot } = getTangentCircle({
		cx,
		cy,
		radius: outerRadius,
		angle: startAngle,
		sign,
		cornerRadius,
		cornerIsExternal
	});
	var { circleTangency: eoct, lineTangency: eolt, theta: eot } = getTangentCircle({
		cx,
		cy,
		radius: outerRadius,
		angle: endAngle,
		sign: -sign,
		cornerRadius,
		cornerIsExternal
	});
	var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
	if (outerArcAngle < 0) {
		if (forceCornerRadius) return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
		return getSectorPath({
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle
		});
	}
	var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
	if (innerRadius > 0) {
		var { circleTangency: sict, lineTangency: silt, theta: sit } = getTangentCircle({
			cx,
			cy,
			radius: innerRadius,
			angle: startAngle,
			sign,
			isExternal: true,
			cornerRadius,
			cornerIsExternal
		});
		var { circleTangency: eict, lineTangency: eilt, theta: eit } = getTangentCircle({
			cx,
			cy,
			radius: innerRadius,
			angle: endAngle,
			sign: -sign,
			isExternal: true,
			cornerRadius,
			cornerIsExternal
		});
		var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
		if (innerArcAngle < 0 && cornerRadius === 0) return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
		path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
	} else path += "L".concat(cx, ",").concat(cy, "Z");
	return path;
};
var defaultProps$1 = {
	cx: 0,
	cy: 0,
	innerRadius: 0,
	outerRadius: 0,
	startAngle: 0,
	endAngle: 0,
	cornerRadius: 0,
	forceCornerRadius: false,
	cornerIsExternal: false
};
var Sector = (sectorProps) => {
	var props = resolveDefaultProps(sectorProps, defaultProps$1);
	var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle, className } = props;
	if (outerRadius < innerRadius || startAngle === endAngle) return null;
	var layerClass = clsx("recharts-sector", className);
	var deltaRadius = outerRadius - innerRadius;
	var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
	var path;
	if (cr > 0 && Math.abs(startAngle - endAngle) < 360) path = getSectorWithCorner({
		cx,
		cy,
		innerRadius,
		outerRadius,
		cornerRadius: Math.min(cr, deltaRadius / 2),
		forceCornerRadius,
		cornerIsExternal,
		startAngle,
		endAngle
	});
	else path = getSectorPath({
		cx,
		cy,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle
	});
	return /* @__PURE__ */ React$1.createElement("path", _extends$8({}, filterProps(props, true), {
		className: layerClass,
		d: path
	}));
};
function getCursorPoints(layout, activeCoordinate, offset) {
	var x1, y1, x2, y2;
	if (layout === "horizontal") {
		x1 = activeCoordinate.x;
		x2 = x1;
		y1 = offset.top;
		y2 = offset.top + offset.height;
	} else if (layout === "vertical") {
		y1 = activeCoordinate.y;
		y2 = y1;
		x1 = offset.left;
		x2 = offset.left + offset.width;
	} else if (activeCoordinate.cx != null && activeCoordinate.cy != null) if (layout === "centric") {
		var { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
		var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
		var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
		x1 = innerPoint.x;
		y1 = innerPoint.y;
		x2 = outerPoint.x;
		y2 = outerPoint.y;
	} else return getRadialCursorPoints(activeCoordinate);
	return [{
		x: x1,
		y: y1
	}, {
		x: x2,
		y: y2
	}];
}
var selectChartDataWithIndexes = (state) => state.chartData;
var selectChartDataAndAlwaysIgnoreIndexes = createSelector([selectChartDataWithIndexes], (dataState) => {
	var dataEndIndex = dataState.chartData != null ? dataState.chartData.length - 1 : 0;
	return {
		chartData: dataState.chartData,
		computedData: dataState.computedData,
		dataEndIndex,
		dataStartIndex: 0
	};
});
var selectChartDataWithIndexesIfNotInPanorama = (state, _unused1, _unused2, isPanorama) => {
	if (isPanorama) return selectChartDataAndAlwaysIgnoreIndexes(state);
	return selectChartDataWithIndexes(state);
};
function isWellFormedNumberDomain(v) {
	if (Array.isArray(v) && v.length === 2) {
		var [min, max] = v;
		if (isWellBehavedNumber(min) && isWellBehavedNumber(max)) return true;
	}
	return false;
}
function extendDomain(providedDomain, boundaryDomain, allowDataOverflow) {
	if (allowDataOverflow) return providedDomain;
	return [Math.min(providedDomain[0], boundaryDomain[0]), Math.max(providedDomain[1], boundaryDomain[1])];
}
function numericalDomainSpecifiedWithoutRequiringData(userDomain, allowDataOverflow) {
	if (!allowDataOverflow) return;
	if (typeof userDomain === "function") return;
	if (Array.isArray(userDomain) && userDomain.length === 2) {
		var [providedMin, providedMax] = userDomain;
		var finalMin, finalMax;
		if (isWellBehavedNumber(providedMin)) finalMin = providedMin;
		else if (typeof providedMin === "function") return;
		if (isWellBehavedNumber(providedMax)) finalMax = providedMax;
		else if (typeof providedMax === "function") return;
		var candidate = [finalMin, finalMax];
		if (isWellFormedNumberDomain(candidate)) return candidate;
	}
}
function parseNumericalUserDomain(userDomain, dataDomain, allowDataOverflow) {
	if (!allowDataOverflow && dataDomain == null) return;
	if (typeof userDomain === "function" && dataDomain != null) try {
		var result = userDomain(dataDomain, allowDataOverflow);
		if (isWellFormedNumberDomain(result)) return extendDomain(result, dataDomain, allowDataOverflow);
	} catch (_unused) {}
	if (Array.isArray(userDomain) && userDomain.length === 2) {
		var [providedMin, providedMax] = userDomain;
		var finalMin, finalMax;
		if (providedMin === "auto") {
			if (dataDomain != null) finalMin = Math.min(...dataDomain);
		} else if (isNumber(providedMin)) finalMin = providedMin;
		else if (typeof providedMin === "function") try {
			if (dataDomain != null) finalMin = providedMin(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0]);
		} catch (_unused2) {}
		else if (typeof providedMin === "string" && MIN_VALUE_REG.test(providedMin)) {
			var match = MIN_VALUE_REG.exec(providedMin);
			if (match == null || dataDomain == null) finalMin = void 0;
			else {
				var value = +match[1];
				finalMin = dataDomain[0] - value;
			}
		} else finalMin = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0];
		if (providedMax === "auto") {
			if (dataDomain != null) finalMax = Math.max(...dataDomain);
		} else if (isNumber(providedMax)) finalMax = providedMax;
		else if (typeof providedMax === "function") try {
			if (dataDomain != null) finalMax = providedMax(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1]);
		} catch (_unused3) {}
		else if (typeof providedMax === "string" && MAX_VALUE_REG.test(providedMax)) {
			var _match = MAX_VALUE_REG.exec(providedMax);
			if (_match == null || dataDomain == null) finalMax = void 0;
			else {
				var _value = +_match[1];
				finalMax = dataDomain[1] + _value;
			}
		} else finalMax = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1];
		var candidate = [finalMin, finalMax];
		if (isWellFormedNumberDomain(candidate)) {
			if (dataDomain == null) return candidate;
			return extendDomain(candidate, dataDomain, allowDataOverflow);
		}
	}
}
var decimal_js_light_default = Decimal;
var identity = (i) => i;
var PLACE_HOLDER = { "@@functional/placeholder": true };
var isPlaceHolder = (val) => val === PLACE_HOLDER;
var curry0 = (fn) => function _curried() {
	if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? void 0 : arguments[0])) return _curried;
	return fn(...arguments);
};
var curryN = (n, fn) => {
	if (n === 1) return fn;
	return curry0(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		var argsLength = args.filter((arg) => arg !== PLACE_HOLDER).length;
		if (argsLength >= n) return fn(...args);
		return curryN(n - argsLength, curry0(function() {
			for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) restArgs[_key2] = arguments[_key2];
			return fn(...args.map((arg) => isPlaceHolder(arg) ? restArgs.shift() : arg), ...restArgs);
		}));
	});
};
var curry = (fn) => curryN(fn.length, fn);
var range$1 = (begin, end) => {
	var arr = [];
	for (var i = begin; i < end; ++i) arr[i - begin] = i;
	return arr;
};
var map = curry((fn, arr) => {
	if (Array.isArray(arr)) return arr.map(fn);
	return Object.keys(arr).map((key) => arr[key]).map(fn);
});
var compose = function compose$2() {
	for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
	if (!args.length) return identity;
	var fns = args.reverse();
	var firstFn = fns[0];
	var tailsFn = fns.slice(1);
	return function() {
		return tailsFn.reduce((res, fn) => fn(res), firstFn(...arguments));
	};
};
var reverse = (arr) => {
	if (Array.isArray(arr)) return arr.reverse();
	return arr.split("").reverse().join("");
};
var memoize = (fn) => {
	var lastArgs = null;
	var lastResult$1 = null;
	return function() {
		for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
		if (lastArgs && args.every((val, i) => {
			var _lastArgs;
			return val === ((_lastArgs = lastArgs) === null || _lastArgs === void 0 ? void 0 : _lastArgs[i]);
		})) return lastResult$1;
		lastArgs = args;
		lastResult$1 = fn(...args);
		return lastResult$1;
	};
};
function getDigitCount(value) {
	var result;
	if (value === 0) result = 1;
	else result = Math.floor(new decimal_js_light_default(value).abs().log(10).toNumber()) + 1;
	return result;
}
function rangeStep(start, end, step) {
	var num = new decimal_js_light_default(start);
	var i = 0;
	var result = [];
	while (num.lt(end) && i < 1e5) {
		result.push(num.toNumber());
		num = num.add(step);
		i++;
	}
	return result;
}
curry((a, b, t) => {
	var newA = +a;
	return newA + t * (+b - newA);
});
curry((a, b, x) => {
	var diff = b - +a;
	diff = diff || Infinity;
	return (x - a) / diff;
});
curry((a, b, x) => {
	var diff = b - +a;
	diff = diff || Infinity;
	return Math.max(0, Math.min(1, (x - a) / diff));
});
var getValidInterval = (_ref$1) => {
	var [min, max] = _ref$1;
	var [validMin, validMax] = [min, max];
	if (min > max) [validMin, validMax] = [max, min];
	return [validMin, validMax];
};
var getFormatStep = (roughStep, allowDecimals, correctionFactor) => {
	if (roughStep.lte(0)) return new decimal_js_light_default(0);
	var digitCount = getDigitCount(roughStep.toNumber());
	var digitCountValue = new decimal_js_light_default(10).pow(digitCount);
	var stepRatio = roughStep.div(digitCountValue);
	var stepRatioScale = digitCount !== 1 ? .05 : .1;
	var formatStep = new decimal_js_light_default(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale).mul(digitCountValue);
	return allowDecimals ? new decimal_js_light_default(formatStep.toNumber()) : new decimal_js_light_default(Math.ceil(formatStep.toNumber()));
};
var getTickOfSingleValue = (value, tickCount, allowDecimals) => {
	var step = new decimal_js_light_default(1);
	var middle = new decimal_js_light_default(value);
	if (!middle.isint() && allowDecimals) {
		var absVal = Math.abs(value);
		if (absVal < 1) {
			step = new decimal_js_light_default(10).pow(getDigitCount(value) - 1);
			middle = new decimal_js_light_default(Math.floor(middle.div(step).toNumber())).mul(step);
		} else if (absVal > 1) middle = new decimal_js_light_default(Math.floor(value));
	} else if (value === 0) middle = new decimal_js_light_default(Math.floor((tickCount - 1) / 2));
	else if (!allowDecimals) middle = new decimal_js_light_default(Math.floor(value));
	var middleIndex = Math.floor((tickCount - 1) / 2);
	return compose(map((n) => middle.add(new decimal_js_light_default(n - middleIndex).mul(step)).toNumber()), range$1)(0, tickCount);
};
var _calculateStep = function calculateStep(min, max, tickCount, allowDecimals) {
	var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
	if (!Number.isFinite((max - min) / (tickCount - 1))) return {
		step: new decimal_js_light_default(0),
		tickMin: new decimal_js_light_default(0),
		tickMax: new decimal_js_light_default(0)
	};
	var step = getFormatStep(new decimal_js_light_default(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor);
	var middle;
	if (min <= 0 && max >= 0) middle = new decimal_js_light_default(0);
	else {
		middle = new decimal_js_light_default(min).add(max).div(2);
		middle = middle.sub(new decimal_js_light_default(middle).mod(step));
	}
	var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
	var upCount = Math.ceil(new decimal_js_light_default(max).sub(middle).div(step).toNumber());
	var scaleCount = belowCount + upCount + 1;
	if (scaleCount > tickCount) return _calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
	if (scaleCount < tickCount) {
		upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
		belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
	}
	return {
		step,
		tickMin: middle.sub(new decimal_js_light_default(belowCount).mul(step)),
		tickMax: middle.add(new decimal_js_light_default(upCount).mul(step))
	};
};
function getNiceTickValuesFn(_ref2) {
	var [min, max] = _ref2;
	var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
	var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	var count = Math.max(tickCount, 2);
	var [cormin, cormax] = getValidInterval([min, max]);
	if (cormin === -Infinity || cormax === Infinity) {
		var _values = cormax === Infinity ? [cormin, ...range$1(0, tickCount - 1).map(() => Infinity)] : [...range$1(0, tickCount - 1).map(() => -Infinity), cormax];
		return min > max ? reverse(_values) : _values;
	}
	if (cormin === cormax) return getTickOfSingleValue(cormin, tickCount, allowDecimals);
	var { step, tickMin, tickMax } = _calculateStep(cormin, cormax, count, allowDecimals, 0);
	var values = rangeStep(tickMin, tickMax.add(new decimal_js_light_default(.1).mul(step)), step);
	return min > max ? reverse(values) : values;
}
function getTickValuesFixedDomainFn(_ref3, tickCount) {
	var [min, max] = _ref3;
	var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	var [cormin, cormax] = getValidInterval([min, max]);
	if (cormin === -Infinity || cormax === Infinity) return [min, max];
	if (cormin === cormax) return [cormin];
	var count = Math.max(tickCount, 2);
	var step = getFormatStep(new decimal_js_light_default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
	var values = [...rangeStep(new decimal_js_light_default(cormin), new decimal_js_light_default(cormax), step), cormax];
	if (allowDecimals === false) values = values.map((value) => Math.round(value));
	return min > max ? reverse(values) : values;
}
var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);
var selectRootMaxBarSize = (state) => state.rootProps.maxBarSize;
var selectBarGap = (state) => state.rootProps.barGap;
var selectBarCategoryGap = (state) => state.rootProps.barCategoryGap;
var selectRootBarSize = (state) => state.rootProps.barSize;
var selectStackOffsetType = (state) => state.rootProps.stackOffset;
var selectChartName = (state) => state.options.chartName;
var selectSyncId = (state) => state.rootProps.syncId;
var selectSyncMethod = (state) => state.rootProps.syncMethod;
var selectEventEmitter = (state) => state.options.eventEmitter;
var defaultPolarAngleAxisProps = {
	allowDuplicatedCategory: true,
	angleAxisId: 0,
	axisLine: true,
	cx: 0,
	cy: 0,
	orientation: "outer",
	reversed: false,
	scale: "auto",
	tick: true,
	tickLine: true,
	tickSize: 8,
	type: "category"
};
var defaultPolarRadiusAxisProps = {
	allowDataOverflow: false,
	allowDuplicatedCategory: true,
	angle: 0,
	axisLine: true,
	cx: 0,
	cy: 0,
	orientation: "right",
	radiusAxisId: 0,
	scale: "auto",
	stroke: "#ccc",
	tick: true,
	tickCount: 5,
	type: "number"
};
var combineAxisRangeWithReverse = (axisSettings, axisRange) => {
	if (!axisSettings || !axisRange) return;
	if (axisSettings !== null && axisSettings !== void 0 && axisSettings.reversed) return [axisRange[1], axisRange[0]];
	return axisRange;
};
var implicitAngleAxis = {
	allowDataOverflow: false,
	allowDecimals: false,
	allowDuplicatedCategory: false,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarAngleAxisProps.angleAxisId,
	includeHidden: false,
	name: void 0,
	reversed: defaultPolarAngleAxisProps.reversed,
	scale: defaultPolarAngleAxisProps.scale,
	tick: defaultPolarAngleAxisProps.tick,
	tickCount: void 0,
	ticks: void 0,
	type: defaultPolarAngleAxisProps.type,
	unit: void 0
};
var implicitRadiusAxis = {
	allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
	allowDecimals: false,
	allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarRadiusAxisProps.radiusAxisId,
	includeHidden: false,
	name: void 0,
	reversed: false,
	scale: defaultPolarRadiusAxisProps.scale,
	tick: defaultPolarRadiusAxisProps.tick,
	tickCount: defaultPolarRadiusAxisProps.tickCount,
	ticks: void 0,
	type: defaultPolarRadiusAxisProps.type,
	unit: void 0
};
var implicitRadialBarAngleAxis = {
	allowDataOverflow: false,
	allowDecimals: false,
	allowDuplicatedCategory: defaultPolarAngleAxisProps.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarAngleAxisProps.angleAxisId,
	includeHidden: false,
	name: void 0,
	reversed: false,
	scale: defaultPolarAngleAxisProps.scale,
	tick: defaultPolarAngleAxisProps.tick,
	tickCount: void 0,
	ticks: void 0,
	type: "number",
	unit: void 0
};
var implicitRadialBarRadiusAxis = {
	allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
	allowDecimals: false,
	allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarRadiusAxisProps.radiusAxisId,
	includeHidden: false,
	name: void 0,
	reversed: false,
	scale: defaultPolarRadiusAxisProps.scale,
	tick: defaultPolarRadiusAxisProps.tick,
	tickCount: defaultPolarRadiusAxisProps.tickCount,
	ticks: void 0,
	type: "category",
	unit: void 0
};
var selectAngleAxis = (state, angleAxisId) => {
	if (state.polarAxis.angleAxis[angleAxisId] != null) return state.polarAxis.angleAxis[angleAxisId];
	if (state.layout.layoutType === "radial") return implicitRadialBarAngleAxis;
	return implicitAngleAxis;
};
var selectRadiusAxis = (state, radiusAxisId) => {
	if (state.polarAxis.radiusAxis[radiusAxisId] != null) return state.polarAxis.radiusAxis[radiusAxisId];
	if (state.layout.layoutType === "radial") return implicitRadialBarRadiusAxis;
	return implicitRadiusAxis;
};
var selectPolarOptions = (state) => state.polarOptions;
var selectMaxRadius = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartOffsetInternal
], getMaxRadius);
var selectInnerRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
	if (polarChartOptions == null) return;
	return getPercentValue(polarChartOptions.innerRadius, maxRadius, 0);
});
var selectOuterRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
	if (polarChartOptions == null) return;
	return getPercentValue(polarChartOptions.outerRadius, maxRadius, maxRadius * .8);
});
var combineAngleAxisRange = (polarOptions) => {
	if (polarOptions == null) return [0, 0];
	var { startAngle, endAngle } = polarOptions;
	return [startAngle, endAngle];
};
var selectAngleAxisRange = createSelector([selectPolarOptions], combineAngleAxisRange);
createSelector([selectAngleAxis, selectAngleAxisRange], combineAxisRangeWithReverse);
var selectRadiusAxisRange = createSelector([
	selectMaxRadius,
	selectInnerRadius,
	selectOuterRadius
], (maxRadius, innerRadius, outerRadius) => {
	if (maxRadius == null || innerRadius == null || outerRadius == null) return;
	return [innerRadius, outerRadius];
});
createSelector([selectRadiusAxis, selectRadiusAxisRange], combineAxisRangeWithReverse);
var selectPolarViewBox = createSelector([
	selectChartLayout,
	selectPolarOptions,
	selectInnerRadius,
	selectOuterRadius,
	selectChartWidth,
	selectChartHeight
], (layout, polarOptions, innerRadius, outerRadius, width, height) => {
	if (layout !== "centric" && layout !== "radial" || polarOptions == null || innerRadius == null || outerRadius == null) return;
	var { cx, cy, startAngle, endAngle } = polarOptions;
	return {
		cx: getPercentValue(cx, width, width / 2),
		cy: getPercentValue(cy, height, height / 2),
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		clockWise: false
	};
});
var pickAxisType = (_state, axisType) => axisType;
var pickAxisId = (_state, _axisType, axisId) => axisId;
function getStackSeriesIdentifier(graphicalItem) {
	return graphicalItem === null || graphicalItem === void 0 ? void 0 : graphicalItem.id;
}
var selectTooltipAxisType = (state) => {
	var layout = selectChartLayout(state);
	if (layout === "horizontal") return "xAxis";
	if (layout === "vertical") return "yAxis";
	if (layout === "centric") return "angleAxis";
	return "radiusAxis";
};
var selectTooltipAxisId = (state) => state.tooltip.settings.axisId;
var selectTooltipAxis = (state) => {
	return selectAxisSettings(state, selectTooltipAxisType(state), selectTooltipAxisId(state));
};
var selectTooltipAxisDataKey = createSelector([selectTooltipAxis], (axis) => axis === null || axis === void 0 ? void 0 : axis.dataKey);
function combineDisplayedStackedData(stackedGraphicalItems, _ref$1, tooltipAxisSettings) {
	var { chartData = [] } = _ref$1;
	var { allowDuplicatedCategory, dataKey: tooltipDataKey } = tooltipAxisSettings;
	var knownItemsByDataKey = /* @__PURE__ */ new Map();
	stackedGraphicalItems.forEach((item) => {
		var _item$data;
		var resolvedData = (_item$data = item.data) !== null && _item$data !== void 0 ? _item$data : chartData;
		if (resolvedData == null || resolvedData.length === 0) return;
		var stackIdentifier = getStackSeriesIdentifier(item);
		resolvedData.forEach((entry, index) => {
			var tooltipValue = tooltipDataKey == null || allowDuplicatedCategory ? index : String(getValueByDataKey(entry, tooltipDataKey, null));
			var numericValue = getValueByDataKey(entry, item.dataKey, 0);
			var curr;
			if (knownItemsByDataKey.has(tooltipValue)) curr = knownItemsByDataKey.get(tooltipValue);
			else curr = {};
			Object.assign(curr, { [stackIdentifier]: numericValue });
			knownItemsByDataKey.set(tooltipValue, curr);
		});
	});
	return Array.from(knownItemsByDataKey.values());
}
function isStacked(graphicalItem) {
	return graphicalItem.stackId != null && graphicalItem.dataKey != null;
}
function ownKeys$14(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$14(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$14(Object(t), !0).forEach(function(r$1) {
			_defineProperty$15(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$14(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$15(e, r, t) {
	return (r = _toPropertyKey$15(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$15(t) {
	var i = _toPrimitive$15(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$15(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var defaultNumericDomain = [0, "auto"];
var implicitXAxis = {
	allowDataOverflow: false,
	allowDecimals: true,
	allowDuplicatedCategory: true,
	angle: 0,
	dataKey: void 0,
	domain: void 0,
	height: 30,
	hide: true,
	id: 0,
	includeHidden: false,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: false,
	name: void 0,
	orientation: "bottom",
	padding: {
		left: 0,
		right: 0
	},
	reversed: false,
	scale: "auto",
	tick: true,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "category",
	unit: void 0
};
var selectXAxisSettingsNoDefaults = (state, axisId) => {
	return state.cartesianAxis.xAxis[axisId];
};
var selectXAxisSettings = (state, axisId) => {
	var axis = selectXAxisSettingsNoDefaults(state, axisId);
	if (axis == null) return implicitXAxis;
	return axis;
};
var implicitYAxis = {
	allowDataOverflow: false,
	allowDecimals: true,
	allowDuplicatedCategory: true,
	angle: 0,
	dataKey: void 0,
	domain: defaultNumericDomain,
	hide: true,
	id: 0,
	includeHidden: false,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: false,
	name: void 0,
	orientation: "left",
	padding: {
		top: 0,
		bottom: 0
	},
	reversed: false,
	scale: "auto",
	tick: true,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "number",
	unit: void 0,
	width: 60
};
var selectYAxisSettingsNoDefaults = (state, axisId) => {
	return state.cartesianAxis.yAxis[axisId];
};
var selectYAxisSettings = (state, axisId) => {
	var axis = selectYAxisSettingsNoDefaults(state, axisId);
	if (axis == null) return implicitYAxis;
	return axis;
};
var implicitZAxis = {
	domain: [0, "auto"],
	includeHidden: false,
	reversed: false,
	allowDataOverflow: false,
	allowDuplicatedCategory: false,
	dataKey: void 0,
	id: 0,
	name: "",
	range: [64, 64],
	scale: "auto",
	type: "number",
	unit: ""
};
var selectZAxisSettings = (state, axisId) => {
	var axis = state.cartesianAxis.zAxis[axisId];
	if (axis == null) return implicitZAxis;
	return axis;
};
var selectBaseAxis = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		case "zAxis": return selectZAxisSettings(state, axisId);
		case "angleAxis": return selectAngleAxis(state, axisId);
		case "radiusAxis": return selectRadiusAxis(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectCartesianAxisSettings = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectAxisSettings = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		case "angleAxis": return selectAngleAxis(state, axisId);
		case "radiusAxis": return selectRadiusAxis(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectHasBar = (state) => state.graphicalItems.cartesianItems.some((item) => item.type === "bar") || state.graphicalItems.polarItems.some((item) => item.type === "radialBar");
function itemAxisPredicate(axisType, axisId) {
	return (item) => {
		switch (axisType) {
			case "xAxis": return "xAxisId" in item && item.xAxisId === axisId;
			case "yAxis": return "yAxisId" in item && item.yAxisId === axisId;
			case "zAxis": return "zAxisId" in item && item.zAxisId === axisId;
			case "angleAxis": return "angleAxisId" in item && item.angleAxisId === axisId;
			case "radiusAxis": return "radiusAxisId" in item && item.radiusAxisId === axisId;
			default: return false;
		}
	};
}
var selectUnfilteredCartesianItems = (state) => state.graphicalItems.cartesianItems;
var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
var combineGraphicalItemsSettings = (graphicalItems, axisSettings, axisPredicate) => graphicalItems.filter(axisPredicate).filter((item) => {
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.includeHidden) === true) return true;
	return !item.hide;
});
var selectCartesianItemsSettings = createSelector([
	selectUnfilteredCartesianItems,
	selectBaseAxis,
	selectAxisPredicate
], combineGraphicalItemsSettings);
var selectStackedCartesianItemsSettings = createSelector([selectCartesianItemsSettings], (cartesianItems) => {
	return cartesianItems.filter((item) => item.type === "area" || item.type === "bar").filter(isStacked);
});
var filterGraphicalNotStackedItems = (cartesianItems) => cartesianItems.filter((item) => !("stackId" in item) || item.stackId === void 0);
var selectCartesianItemsSettingsExceptStacked = createSelector([selectCartesianItemsSettings], filterGraphicalNotStackedItems);
var combineGraphicalItemsData = (cartesianItems) => cartesianItems.map((item) => item.data).filter(Boolean).flat(1);
var selectCartesianGraphicalItemsData = createSelector([selectCartesianItemsSettings], combineGraphicalItemsData);
var combineDisplayedData = (graphicalItemsData, _ref$1) => {
	var { chartData = [], dataStartIndex, dataEndIndex } = _ref$1;
	if (graphicalItemsData.length > 0) return graphicalItemsData;
	return chartData.slice(dataStartIndex, dataEndIndex + 1);
};
var selectDisplayedData = createSelector([selectCartesianGraphicalItemsData, selectChartDataWithIndexesIfNotInPanorama], combineDisplayedData);
var combineAppliedValues = (data, axisSettings, items) => {
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({ value: getValueByDataKey(item, axisSettings.dataKey) }));
	if (items.length > 0) return items.map((item) => item.dataKey).flatMap((dataKey) => data.map((entry) => ({ value: getValueByDataKey(entry, dataKey) })));
	return data.map((entry) => ({ value: entry }));
};
var selectAllAppliedValues = createSelector([
	selectDisplayedData,
	selectBaseAxis,
	selectCartesianItemsSettings
], combineAppliedValues);
function isErrorBarRelevantForAxisType(axisType, errorBar) {
	switch (axisType) {
		case "xAxis": return errorBar.direction === "x";
		case "yAxis": return errorBar.direction === "y";
		default: return false;
	}
}
function onlyAllowNumbers(data) {
	return data.filter((v) => isNumOrStr(v) || v instanceof Date).map(Number).filter((n) => isNan(n) === false);
}
function getErrorDomainByDataKey(entry, appliedValue, relevantErrorBars) {
	if (!relevantErrorBars || typeof appliedValue !== "number" || isNan(appliedValue)) return [];
	if (!relevantErrorBars.length) return [];
	return onlyAllowNumbers(relevantErrorBars.flatMap((eb) => {
		var errorValue = getValueByDataKey(entry, eb.dataKey);
		var lowBound, highBound;
		if (Array.isArray(errorValue)) [lowBound, highBound] = errorValue;
		else lowBound = highBound = errorValue;
		if (!isWellBehavedNumber(lowBound) || !isWellBehavedNumber(highBound)) return;
		return [appliedValue - lowBound, appliedValue + highBound];
	}));
}
var selectDisplayedStackedData = createSelector([
	selectStackedCartesianItemsSettings,
	selectChartDataWithIndexesIfNotInPanorama,
	selectTooltipAxis
], combineDisplayedStackedData);
var combineStackGroups = (displayedData, items, stackOffsetType) => {
	var itemsGroup = items.reduce((acc, item) => {
		if (item.stackId == null) return acc;
		if (acc[item.stackId] == null) acc[item.stackId] = [];
		acc[item.stackId].push(item);
		return acc;
	}, {});
	return Object.fromEntries(Object.entries(itemsGroup).map((_ref2) => {
		var [stackId, graphicalItems] = _ref2;
		return [stackId, {
			stackedData: getStackedData(displayedData, graphicalItems.map(getStackSeriesIdentifier), stackOffsetType),
			graphicalItems
		}];
	}));
};
var selectStackGroups = createSelector([
	selectDisplayedStackedData,
	selectStackedCartesianItemsSettings,
	selectStackOffsetType
], combineStackGroups);
var combineDomainOfStackGroups = (stackGroups, _ref3, axisType) => {
	var { dataStartIndex, dataEndIndex } = _ref3;
	if (axisType === "zAxis") return;
	var domainOfStackGroups = getDomainOfStackGroups(stackGroups, dataStartIndex, dataEndIndex);
	if (domainOfStackGroups != null && domainOfStackGroups[0] === 0 && domainOfStackGroups[1] === 0) return;
	return domainOfStackGroups;
};
var selectDomainOfStackGroups = createSelector([
	selectStackGroups,
	selectChartDataWithIndexes,
	pickAxisType
], combineDomainOfStackGroups);
var combineAppliedNumericalValuesIncludingErrorValues = (data, axisSettings, items, errorBars, axisType) => {
	if (items.length > 0) return data.flatMap((entry) => {
		return items.flatMap((item) => {
			var _errorBars$item$id, _axisSettings$dataKey;
			var relevantErrorBars = (_errorBars$item$id = errorBars[item.id]) === null || _errorBars$item$id === void 0 ? void 0 : _errorBars$item$id.filter((errorBar) => isErrorBarRelevantForAxisType(axisType, errorBar));
			var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
			return {
				value: valueByDataKey,
				errorDomain: getErrorDomainByDataKey(entry, valueByDataKey, relevantErrorBars)
			};
		});
	}).filter(Boolean);
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({
		value: getValueByDataKey(item, axisSettings.dataKey),
		errorDomain: []
	}));
	return data.map((entry) => ({
		value: entry,
		errorDomain: []
	}));
};
var selectAllErrorBarSettings = (state) => state.errorBars;
var combineRelevantErrorBarSettings = (cartesianItemsSettings, allErrorBarSettings, axisType) => {
	return cartesianItemsSettings.flatMap((item) => {
		return allErrorBarSettings[item.id];
	}).filter(Boolean).filter((e) => {
		return isErrorBarRelevantForAxisType(axisType, e);
	});
};
createSelector([
	selectCartesianItemsSettingsExceptStacked,
	selectAllErrorBarSettings,
	pickAxisType
], combineRelevantErrorBarSettings);
var selectAllAppliedNumericalValuesIncludingErrorValues = createSelector([
	selectDisplayedData,
	selectBaseAxis,
	selectCartesianItemsSettingsExceptStacked,
	selectAllErrorBarSettings,
	pickAxisType
], combineAppliedNumericalValuesIncludingErrorValues);
function onlyAllowNumbersAndStringsAndDates(item) {
	var { value } = item;
	if (isNumOrStr(value) || value instanceof Date) return value;
}
var computeNumericalDomain = (dataWithErrorDomains) => {
	var onlyNumbers = onlyAllowNumbers(dataWithErrorDomains.flatMap((d) => [d.value, d.errorDomain]).flat(1));
	if (onlyNumbers.length === 0) return;
	return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
};
var computeDomainOfTypeCategory = (allDataSquished, axisSettings, isCategorical) => {
	var categoricalDomain = allDataSquished.map(onlyAllowNumbersAndStringsAndDates).filter((v) => v != null);
	if (isCategorical && (axisSettings.dataKey == null || axisSettings.allowDuplicatedCategory && hasDuplicate(categoricalDomain))) return range(0, allDataSquished.length);
	if (axisSettings.allowDuplicatedCategory) return categoricalDomain;
	return Array.from(new Set(categoricalDomain));
};
var getDomainDefinition = (axisSettings) => {
	var _axisSettings$domain;
	if (axisSettings == null || !("domain" in axisSettings)) return defaultNumericDomain;
	if (axisSettings.domain != null) return axisSettings.domain;
	if (axisSettings.ticks != null) {
		if (axisSettings.type === "number") {
			var allValues = onlyAllowNumbers(axisSettings.ticks);
			return [Math.min(...allValues), Math.max(...allValues)];
		}
		if (axisSettings.type === "category") return axisSettings.ticks.map(String);
	}
	return (_axisSettings$domain = axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.domain) !== null && _axisSettings$domain !== void 0 ? _axisSettings$domain : defaultNumericDomain;
};
var mergeDomains = function mergeDomains$1() {
	for (var _len = arguments.length, domains = new Array(_len), _key = 0; _key < _len; _key++) domains[_key] = arguments[_key];
	var allDomains = domains.filter(Boolean);
	if (allDomains.length === 0) return;
	var allValues = allDomains.flat();
	return [Math.min(...allValues), Math.max(...allValues)];
};
var selectReferenceDots = (state) => state.referenceElements.dots;
var filterReferenceElements = (elements, axisType, axisId) => {
	return elements.filter((el) => el.ifOverflow === "extendDomain").filter((el) => {
		if (axisType === "xAxis") return el.xAxisId === axisId;
		return el.yAxisId === axisId;
	});
};
var selectReferenceDotsByAxis = createSelector([
	selectReferenceDots,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var selectReferenceAreas = (state) => state.referenceElements.areas;
var selectReferenceAreasByAxis = createSelector([
	selectReferenceAreas,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var selectReferenceLines = (state) => state.referenceElements.lines;
var selectReferenceLinesByAxis = createSelector([
	selectReferenceLines,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var combineDotsDomain = (dots, axisType) => {
	var allCoords = onlyAllowNumbers(dots.map((dot) => axisType === "xAxis" ? dot.x : dot.y));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceDotsDomain = createSelector(selectReferenceDotsByAxis, pickAxisType, combineDotsDomain);
var combineAreasDomain = (areas, axisType) => {
	var allCoords = onlyAllowNumbers(areas.flatMap((area$1) => [axisType === "xAxis" ? area$1.x1 : area$1.y1, axisType === "xAxis" ? area$1.x2 : area$1.y2]));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceAreasDomain = createSelector([selectReferenceAreasByAxis, pickAxisType], combineAreasDomain);
var combineLinesDomain = (lines, axisType) => {
	var allCoords = onlyAllowNumbers(lines.map((line$1) => axisType === "xAxis" ? line$1.x : line$1.y));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceElementsDomain = createSelector(selectReferenceDotsDomain, createSelector(selectReferenceLinesByAxis, pickAxisType, combineLinesDomain), selectReferenceAreasDomain, (dotsDomain, linesDomain, areasDomain) => {
	return mergeDomains(dotsDomain, areasDomain, linesDomain);
});
var selectDomainDefinition = createSelector([selectBaseAxis], getDomainDefinition);
var combineNumericalDomain = (axisSettings, domainDefinition, domainOfStackGroups, allDataWithErrorDomains, referenceElementsDomain, layout, axisType) => {
	var domainFromUserPreference = numericalDomainSpecifiedWithoutRequiringData(domainDefinition, axisSettings.allowDataOverflow);
	if (domainFromUserPreference != null) return domainFromUserPreference;
	return parseNumericalUserDomain(domainDefinition, layout === "vertical" && axisType === "xAxis" || layout === "horizontal" && axisType === "yAxis" ? mergeDomains(domainOfStackGroups, referenceElementsDomain, computeNumericalDomain(allDataWithErrorDomains)) : mergeDomains(referenceElementsDomain, computeNumericalDomain(allDataWithErrorDomains)), axisSettings.allowDataOverflow);
};
var selectNumericalDomain = createSelector([
	selectBaseAxis,
	selectDomainDefinition,
	selectDomainOfStackGroups,
	selectAllAppliedNumericalValuesIncludingErrorValues,
	selectReferenceElementsDomain,
	selectChartLayout,
	pickAxisType
], combineNumericalDomain);
var expandDomain = [0, 1];
var combineAxisDomain = (axisSettings, layout, displayedData, allAppliedValues, stackOffsetType, axisType, numericalDomain) => {
	if ((axisSettings == null || displayedData == null || displayedData.length === 0) && numericalDomain === void 0) return;
	var { dataKey, type } = axisSettings;
	var isCategorical = isCategoricalAxis(layout, axisType);
	if (isCategorical && dataKey == null) return range(0, displayedData.length);
	if (type === "category") return computeDomainOfTypeCategory(allAppliedValues, axisSettings, isCategorical);
	if (stackOffsetType === "expand") return expandDomain;
	return numericalDomain;
};
var selectAxisDomain = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectDisplayedData,
	selectAllAppliedValues,
	selectStackOffsetType,
	pickAxisType,
	selectNumericalDomain
], combineAxisDomain);
var combineRealScaleType = (axisConfig, layout, hasBar, chartType, axisType) => {
	if (axisConfig == null) return;
	var { scale, type } = axisConfig;
	if (scale === "auto") {
		if (layout === "radial" && axisType === "radiusAxis") return "band";
		if (layout === "radial" && axisType === "angleAxis") return "linear";
		if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) return "point";
		if (type === "category") return "band";
		return "linear";
	}
	if (typeof scale === "string") {
		var name = "scale".concat(upperFirst(scale));
		return name in d3Scales ? name : "point";
	}
};
var selectRealScaleType = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectHasBar,
	selectChartName,
	pickAxisType
], combineRealScaleType);
function getD3ScaleFromType(realScaleType) {
	if (realScaleType == null) return;
	if (realScaleType in d3Scales) return d3Scales[realScaleType]();
	var name = "scale".concat(upperFirst(realScaleType));
	if (name in d3Scales) return d3Scales[name]();
}
function combineScaleFunction(axis, realScaleType, axisDomain, axisRange) {
	if (axisDomain == null || axisRange == null) return;
	if (typeof axis.scale === "function") return axis.scale.copy().domain(axisDomain).range(axisRange);
	var d3ScaleFunction = getD3ScaleFromType(realScaleType);
	if (d3ScaleFunction == null) return;
	var scale = d3ScaleFunction.domain(axisDomain).range(axisRange);
	checkDomainOfScale(scale);
	return scale;
}
var combineNiceTicks = (axisDomain, axisSettings, realScaleType) => {
	var domainDefinition = getDomainDefinition(axisSettings);
	if (realScaleType !== "auto" && realScaleType !== "linear") return;
	if (axisSettings != null && axisSettings.tickCount && Array.isArray(domainDefinition) && (domainDefinition[0] === "auto" || domainDefinition[1] === "auto") && isWellFormedNumberDomain(axisDomain)) return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
	if (axisSettings != null && axisSettings.tickCount && axisSettings.type === "number" && isWellFormedNumberDomain(axisDomain)) return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
};
var selectNiceTicks = createSelector([
	selectAxisDomain,
	selectAxisSettings,
	selectRealScaleType
], combineNiceTicks);
var combineAxisDomainWithNiceTicks = (axisSettings, domain, niceTicks, axisType) => {
	if (axisType !== "angleAxis" && (axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.type) === "number" && isWellFormedNumberDomain(domain) && Array.isArray(niceTicks) && niceTicks.length > 0) {
		var minFromDomain = domain[0];
		var minFromTicks = niceTicks[0];
		var maxFromDomain = domain[1];
		var maxFromTicks = niceTicks[niceTicks.length - 1];
		return [Math.min(minFromDomain, minFromTicks), Math.max(maxFromDomain, maxFromTicks)];
	}
	return domain;
};
var selectAxisDomainIncludingNiceTicks = createSelector([
	selectBaseAxis,
	selectAxisDomain,
	selectNiceTicks,
	pickAxisType
], combineAxisDomainWithNiceTicks);
var selectCalculatedPadding = createSelector(createSelector(selectAllAppliedValues, selectBaseAxis, (allDataSquished, axisSettings) => {
	if (!axisSettings || axisSettings.type !== "number") return;
	var smallestDistanceBetweenValues = Infinity;
	var sortedValues = Array.from(onlyAllowNumbers(allDataSquished.map((d) => d.value))).sort((a, b) => a - b);
	if (sortedValues.length < 2) return Infinity;
	var diff = sortedValues[sortedValues.length - 1] - sortedValues[0];
	if (diff === 0) return Infinity;
	for (var i = 0; i < sortedValues.length - 1; i++) {
		var distance = sortedValues[i + 1] - sortedValues[i];
		smallestDistanceBetweenValues = Math.min(smallestDistanceBetweenValues, distance);
	}
	return smallestDistanceBetweenValues / diff;
}), selectChartLayout, selectBarCategoryGap, selectChartOffsetInternal, (_1, _2, _3, padding) => padding, (smallestDistanceInPercent, layout, barCategoryGap, offset, padding) => {
	if (!isWellBehavedNumber(smallestDistanceInPercent)) return 0;
	var rangeWidth = layout === "vertical" ? offset.height : offset.width;
	if (padding === "gap") return smallestDistanceInPercent * rangeWidth / 2;
	if (padding === "no-gap") {
		var gap = getPercentValue(barCategoryGap, smallestDistanceInPercent * rangeWidth);
		var halfBand = smallestDistanceInPercent * rangeWidth / 2;
		return halfBand - gap - (halfBand - gap) / rangeWidth * gap;
	}
	return 0;
});
var selectCalculatedXAxisPadding = (state, axisId) => {
	var xAxisSettings = selectXAxisSettings(state, axisId);
	if (xAxisSettings == null || typeof xAxisSettings.padding !== "string") return 0;
	return selectCalculatedPadding(state, "xAxis", axisId, xAxisSettings.padding);
};
var selectCalculatedYAxisPadding = (state, axisId) => {
	var yAxisSettings = selectYAxisSettings(state, axisId);
	if (yAxisSettings == null || typeof yAxisSettings.padding !== "string") return 0;
	return selectCalculatedPadding(state, "yAxis", axisId, yAxisSettings.padding);
};
var selectXAxisPadding = createSelector(selectXAxisSettings, selectCalculatedXAxisPadding, (xAxisSettings, calculated) => {
	var _padding$left, _padding$right;
	if (xAxisSettings == null) return {
		left: 0,
		right: 0
	};
	var { padding } = xAxisSettings;
	if (typeof padding === "string") return {
		left: calculated,
		right: calculated
	};
	return {
		left: ((_padding$left = padding.left) !== null && _padding$left !== void 0 ? _padding$left : 0) + calculated,
		right: ((_padding$right = padding.right) !== null && _padding$right !== void 0 ? _padding$right : 0) + calculated
	};
});
var selectYAxisPadding = createSelector(selectYAxisSettings, selectCalculatedYAxisPadding, (yAxisSettings, calculated) => {
	var _padding$top, _padding$bottom;
	if (yAxisSettings == null) return {
		top: 0,
		bottom: 0
	};
	var { padding } = yAxisSettings;
	if (typeof padding === "string") return {
		top: calculated,
		bottom: calculated
	};
	return {
		top: ((_padding$top = padding.top) !== null && _padding$top !== void 0 ? _padding$top : 0) + calculated,
		bottom: ((_padding$bottom = padding.bottom) !== null && _padding$bottom !== void 0 ? _padding$bottom : 0) + calculated
	};
});
var combineXAxisRange = createSelector([
	selectChartOffsetInternal,
	selectXAxisPadding,
	selectBrushDimensions,
	selectBrushSettings,
	(_state, _axisId, isPanorama) => isPanorama
], (offset, padding, brushDimensions, _ref4, isPanorama) => {
	var { padding: brushPadding } = _ref4;
	if (isPanorama) return [brushPadding.left, brushDimensions.width - brushPadding.right];
	return [offset.left + padding.left, offset.left + offset.width - padding.right];
});
var combineYAxisRange = createSelector([
	selectChartOffsetInternal,
	selectChartLayout,
	selectYAxisPadding,
	selectBrushDimensions,
	selectBrushSettings,
	(_state, _axisId, isPanorama) => isPanorama
], (offset, layout, padding, brushDimensions, _ref5, isPanorama) => {
	var { padding: brushPadding } = _ref5;
	if (isPanorama) return [brushDimensions.height - brushPadding.bottom, brushPadding.top];
	if (layout === "horizontal") return [offset.top + offset.height - padding.bottom, offset.top + padding.top];
	return [offset.top + padding.top, offset.top + offset.height - padding.bottom];
});
var selectAxisRange = (state, axisType, axisId, isPanorama) => {
	var _selectZAxisSettings;
	switch (axisType) {
		case "xAxis": return combineXAxisRange(state, axisId, isPanorama);
		case "yAxis": return combineYAxisRange(state, axisId, isPanorama);
		case "zAxis": return (_selectZAxisSettings = selectZAxisSettings(state, axisId)) === null || _selectZAxisSettings === void 0 ? void 0 : _selectZAxisSettings.range;
		case "angleAxis": return selectAngleAxisRange(state);
		case "radiusAxis": return selectRadiusAxisRange(state, axisId);
		default: return;
	}
};
var selectAxisRangeWithReverse = createSelector([selectBaseAxis, selectAxisRange], combineAxisRangeWithReverse);
var selectAxisScale = createSelector([
	selectBaseAxis,
	selectRealScaleType,
	selectAxisDomainIncludingNiceTicks,
	selectAxisRangeWithReverse
], combineScaleFunction);
createSelector([
	selectCartesianItemsSettings,
	selectAllErrorBarSettings,
	pickAxisType
], combineRelevantErrorBarSettings);
function compareIds(a, b) {
	if (a.id < b.id) return -1;
	if (a.id > b.id) return 1;
	return 0;
}
var pickAxisOrientation = (_state, orientation) => orientation;
var pickMirror = (_state, _orientation, mirror) => mirror;
var selectAllXAxesWithOffsetType = createSelector(selectAllXAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
var selectAllYAxesWithOffsetType = createSelector(selectAllYAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
var getXAxisSize = (offset, axisSettings) => {
	return {
		width: offset.width,
		height: axisSettings.height
	};
};
var getYAxisSize = (offset, axisSettings) => {
	return {
		width: typeof axisSettings.width === "number" ? axisSettings.width : 60,
		height: offset.height
	};
};
var selectXAxisSize = createSelector(selectChartOffsetInternal, selectXAxisSettings, getXAxisSize);
var combineXAxisPositionStartingPoint = (offset, orientation, chartHeight) => {
	switch (orientation) {
		case "top": return offset.top;
		case "bottom": return chartHeight - offset.bottom;
		default: return 0;
	}
};
var combineYAxisPositionStartingPoint = (offset, orientation, chartWidth) => {
	switch (orientation) {
		case "left": return offset.left;
		case "right": return chartWidth - offset.right;
		default: return 0;
	}
};
var selectAllXAxesOffsetSteps = createSelector(selectChartHeight, selectChartOffsetInternal, selectAllXAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartHeight, offset, allAxesWithSameOffsetType, orientation, mirror) => {
	var steps = {};
	var position;
	allAxesWithSameOffsetType.forEach((axis) => {
		var axisSize = getXAxisSize(offset, axis);
		if (position == null) position = combineXAxisPositionStartingPoint(offset, orientation, chartHeight);
		var needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
		steps[axis.id] = position - Number(needSpace) * axisSize.height;
		position += (needSpace ? -1 : 1) * axisSize.height;
	});
	return steps;
});
var selectAllYAxesOffsetSteps = createSelector(selectChartWidth, selectChartOffsetInternal, selectAllYAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartWidth, offset, allAxesWithSameOffsetType, orientation, mirror) => {
	var steps = {};
	var position;
	allAxesWithSameOffsetType.forEach((axis) => {
		var axisSize = getYAxisSize(offset, axis);
		if (position == null) position = combineYAxisPositionStartingPoint(offset, orientation, chartWidth);
		var needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
		steps[axis.id] = position - Number(needSpace) * axisSize.width;
		position += (needSpace ? -1 : 1) * axisSize.width;
	});
	return steps;
});
var selectXAxisOffsetSteps = (state, axisId) => {
	var axisSettings = selectXAxisSettings(state, axisId);
	if (axisSettings == null) return;
	return selectAllXAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};
var selectXAxisPosition = createSelector([
	selectChartOffsetInternal,
	selectXAxisSettings,
	selectXAxisOffsetSteps,
	(_, axisId) => axisId
], (offset, axisSettings, allSteps, axisId) => {
	if (axisSettings == null) return;
	var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
	if (stepOfThisAxis == null) return {
		x: offset.left,
		y: 0
	};
	return {
		x: offset.left,
		y: stepOfThisAxis
	};
});
var selectYAxisOffsetSteps = (state, axisId) => {
	var axisSettings = selectYAxisSettings(state, axisId);
	if (axisSettings == null) return;
	return selectAllYAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};
var selectYAxisPosition = createSelector([
	selectChartOffsetInternal,
	selectYAxisSettings,
	selectYAxisOffsetSteps,
	(_, axisId) => axisId
], (offset, axisSettings, allSteps, axisId) => {
	if (axisSettings == null) return;
	var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
	if (stepOfThisAxis == null) return {
		x: 0,
		y: offset.top
	};
	return {
		x: stepOfThisAxis,
		y: offset.top
	};
});
var selectYAxisSize = createSelector(selectChartOffsetInternal, selectYAxisSettings, (offset, axisSettings) => {
	return {
		width: typeof axisSettings.width === "number" ? axisSettings.width : 60,
		height: offset.height
	};
});
var selectCartesianAxisSize = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSize(state, axisId).width;
		case "yAxis": return selectYAxisSize(state, axisId).height;
		default: return;
	}
};
var combineDuplicateDomain = (chartLayout, appliedValues, axis, axisType) => {
	if (axis == null) return;
	var { allowDuplicatedCategory, type, dataKey } = axis;
	var isCategorical = isCategoricalAxis(chartLayout, axisType);
	var allData = appliedValues.map((av) => av.value);
	if (dataKey && isCategorical && type === "category" && allowDuplicatedCategory && hasDuplicate(allData)) return allData;
};
var selectDuplicateDomain = createSelector([
	selectChartLayout,
	selectAllAppliedValues,
	selectBaseAxis,
	pickAxisType
], combineDuplicateDomain);
var combineCategoricalDomain = (layout, appliedValues, axis, axisType) => {
	if (axis == null || axis.dataKey == null) return;
	var { type, scale } = axis;
	if (isCategoricalAxis(layout, axisType) && (type === "number" || scale !== "auto")) return appliedValues.map((d) => d.value);
};
var selectCategoricalDomain = createSelector([
	selectChartLayout,
	selectAllAppliedValues,
	selectAxisSettings,
	pickAxisType
], combineCategoricalDomain);
var selectAxisPropsNeededForCartesianGridTicksGenerator = createSelector([
	selectChartLayout,
	selectCartesianAxisSettings,
	selectRealScaleType,
	selectAxisScale,
	selectDuplicateDomain,
	selectCategoricalDomain,
	selectAxisRange,
	selectNiceTicks,
	pickAxisType
], (layout, axis, realScaleType, scale, duplicateDomain, categoricalDomain, axisRange, niceTicks, axisType) => {
	if (axis == null) return null;
	var isCategorical = isCategoricalAxis(layout, axisType);
	return {
		angle: axis.angle,
		interval: axis.interval,
		minTickGap: axis.minTickGap,
		orientation: axis.orientation,
		tick: axis.tick,
		tickCount: axis.tickCount,
		tickFormatter: axis.tickFormatter,
		ticks: axis.ticks,
		type: axis.type,
		unit: axis.unit,
		axisType,
		categoricalDomain,
		duplicateDomain,
		isCategorical,
		niceTicks,
		range: axisRange,
		realScaleType,
		scale
	};
});
var combineAxisTicks = (layout, axis, realScaleType, scale, niceTicks, axisRange, duplicateDomain, categoricalDomain, axisType) => {
	if (axis == null || scale == null) return;
	var isCategorical = isCategoricalAxis(layout, axisType);
	var { type, ticks, tickCount } = axis;
	var offsetForBand = realScaleType === "scaleBand" && typeof scale.bandwidth === "function" ? scale.bandwidth() / 2 : 2;
	var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && axisRange != null && axisRange.length >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
	var ticksOrNiceTicks = ticks || niceTicks;
	if (ticksOrNiceTicks) return ticksOrNiceTicks.map((entry, index) => {
		return {
			index,
			coordinate: scale(duplicateDomain ? duplicateDomain.indexOf(entry) : entry) + offset,
			value: entry,
			offset
		};
	}).filter((row) => !isNan(row.coordinate));
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		index,
		offset
	}));
	if (scale.ticks) return scale.ticks(tickCount).map((entry) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		offset
	}));
	return scale.domain().map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: duplicateDomain ? duplicateDomain[entry] : entry,
		index,
		offset
	}));
};
var selectTicksOfAxis = createSelector([
	selectChartLayout,
	selectAxisSettings,
	selectRealScaleType,
	selectAxisScale,
	selectNiceTicks,
	selectAxisRange,
	selectDuplicateDomain,
	selectCategoricalDomain,
	pickAxisType
], combineAxisTicks);
var combineGraphicalItemTicks = (layout, axis, scale, axisRange, duplicateDomain, categoricalDomain, axisType) => {
	if (axis == null || scale == null || axisRange == null || axisRange[0] === axisRange[1]) return;
	var isCategorical = isCategoricalAxis(layout, axisType);
	var { tickCount } = axis;
	var offset = 0;
	offset = axisType === "angleAxis" && (axisRange === null || axisRange === void 0 ? void 0 : axisRange.length) >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		index,
		offset
	}));
	if (scale.ticks) return scale.ticks(tickCount).map((entry) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		offset
	}));
	return scale.domain().map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: duplicateDomain ? duplicateDomain[entry] : entry,
		index,
		offset
	}));
};
var selectTicksOfGraphicalItem = createSelector([
	selectChartLayout,
	selectAxisSettings,
	selectAxisScale,
	selectAxisRange,
	selectDuplicateDomain,
	selectCategoricalDomain,
	pickAxisType
], combineGraphicalItemTicks);
var selectAxisWithScale = createSelector(selectBaseAxis, selectAxisScale, (axis, scale) => {
	if (axis == null || scale == null) return;
	return _objectSpread$14(_objectSpread$14({}, axis), {}, { scale });
});
createSelector((state, _axisType, axisId) => selectZAxisSettings(state, axisId), createSelector([
	selectBaseAxis,
	selectRealScaleType,
	selectAxisDomain,
	selectAxisRangeWithReverse
], combineScaleFunction), (axis, scale) => {
	if (axis == null || scale == null) return;
	return _objectSpread$14(_objectSpread$14({}, axis), {}, { scale });
});
var selectChartDirection = createSelector([
	selectChartLayout,
	selectAllXAxes,
	selectAllYAxes
], (layout, allXAxes, allYAxes) => {
	switch (layout) {
		case "horizontal": return allXAxes.some((axis) => axis.reversed) ? "right-to-left" : "left-to-right";
		case "vertical": return allYAxes.some((axis) => axis.reversed) ? "bottom-to-top" : "top-to-bottom";
		case "centric":
		case "radial": return "left-to-right";
		default: return;
	}
});
var selectDefaultTooltipEventType = (state) => state.options.defaultTooltipEventType;
var selectValidateTooltipEventTypes = (state) => state.options.validateTooltipEventTypes;
function combineTooltipEventType(shared, defaultTooltipEventType, validateTooltipEventTypes) {
	if (shared == null) return defaultTooltipEventType;
	var eventType = shared ? "axis" : "item";
	if (validateTooltipEventTypes == null) return defaultTooltipEventType;
	return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}
function selectTooltipEventType(state, shared) {
	return combineTooltipEventType(shared, selectDefaultTooltipEventType(state), selectValidateTooltipEventTypes(state));
}
function useTooltipEventType(shared) {
	return useAppSelector((state) => selectTooltipEventType(state, shared));
}
var combineActiveLabel = (tooltipTicks, activeIndex) => {
	var _tooltipTicks$n;
	var n = Number(activeIndex);
	if (isNan(n) || activeIndex == null) return;
	return n >= 0 ? tooltipTicks === null || tooltipTicks === void 0 || (_tooltipTicks$n = tooltipTicks[n]) === null || _tooltipTicks$n === void 0 ? void 0 : _tooltipTicks$n.value : void 0;
};
var selectTooltipSettings = (state) => state.tooltip.settings;
var noInteraction = {
	active: false,
	index: null,
	dataKey: void 0,
	coordinate: void 0
};
var tooltipSlice = createSlice({
	name: "tooltip",
	initialState: {
		itemInteraction: {
			click: noInteraction,
			hover: noInteraction
		},
		axisInteraction: {
			click: noInteraction,
			hover: noInteraction
		},
		keyboardInteraction: noInteraction,
		syncInteraction: {
			active: false,
			index: null,
			dataKey: void 0,
			label: void 0,
			coordinate: void 0
		},
		tooltipItemPayloads: [],
		settings: {
			shared: void 0,
			trigger: "hover",
			axisId: 0,
			active: false,
			defaultIndex: void 0
		}
	},
	reducers: {
		addTooltipEntrySettings(state, action) {
			state.tooltipItemPayloads.push(castDraft(action.payload));
		},
		removeTooltipEntrySettings(state, action) {
			var index = current(state).tooltipItemPayloads.indexOf(castDraft(action.payload));
			if (index > -1) state.tooltipItemPayloads.splice(index, 1);
		},
		setTooltipSettingsState(state, action) {
			state.settings = action.payload;
		},
		setActiveMouseOverItemIndex(state, action) {
			state.syncInteraction.active = false;
			state.keyboardInteraction.active = false;
			state.itemInteraction.hover.active = true;
			state.itemInteraction.hover.index = action.payload.activeIndex;
			state.itemInteraction.hover.dataKey = action.payload.activeDataKey;
			state.itemInteraction.hover.coordinate = action.payload.activeCoordinate;
		},
		mouseLeaveChart(state) {
			state.itemInteraction.hover.active = false;
			state.axisInteraction.hover.active = false;
		},
		mouseLeaveItem(state) {
			state.itemInteraction.hover.active = false;
		},
		setActiveClickItemIndex(state, action) {
			state.syncInteraction.active = false;
			state.itemInteraction.click.active = true;
			state.keyboardInteraction.active = false;
			state.itemInteraction.click.index = action.payload.activeIndex;
			state.itemInteraction.click.dataKey = action.payload.activeDataKey;
			state.itemInteraction.click.coordinate = action.payload.activeCoordinate;
		},
		setMouseOverAxisIndex(state, action) {
			state.syncInteraction.active = false;
			state.axisInteraction.hover.active = true;
			state.keyboardInteraction.active = false;
			state.axisInteraction.hover.index = action.payload.activeIndex;
			state.axisInteraction.hover.dataKey = action.payload.activeDataKey;
			state.axisInteraction.hover.coordinate = action.payload.activeCoordinate;
		},
		setMouseClickAxisIndex(state, action) {
			state.syncInteraction.active = false;
			state.keyboardInteraction.active = false;
			state.axisInteraction.click.active = true;
			state.axisInteraction.click.index = action.payload.activeIndex;
			state.axisInteraction.click.dataKey = action.payload.activeDataKey;
			state.axisInteraction.click.coordinate = action.payload.activeCoordinate;
		},
		setSyncInteraction(state, action) {
			state.syncInteraction = action.payload;
		},
		setKeyboardInteraction(state, action) {
			state.keyboardInteraction.active = action.payload.active;
			state.keyboardInteraction.index = action.payload.activeIndex;
			state.keyboardInteraction.coordinate = action.payload.activeCoordinate;
			state.keyboardInteraction.dataKey = action.payload.activeDataKey;
		}
	}
});
var { addTooltipEntrySettings, removeTooltipEntrySettings, setTooltipSettingsState, setActiveMouseOverItemIndex, mouseLeaveItem, mouseLeaveChart, setActiveClickItemIndex, setMouseOverAxisIndex, setMouseClickAxisIndex, setSyncInteraction, setKeyboardInteraction } = tooltipSlice.actions;
var tooltipReducer = tooltipSlice.reducer;
function ownKeys$13(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$13(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$13(Object(t), !0).forEach(function(r$1) {
			_defineProperty$14(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$13(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$14(e, r, t) {
	return (r = _toPropertyKey$14(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$14(t) {
	var i = _toPrimitive$14(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$14(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger) {
	if (tooltipEventType === "axis") {
		if (trigger === "click") return tooltipState.axisInteraction.click;
		return tooltipState.axisInteraction.hover;
	}
	if (trigger === "click") return tooltipState.itemInteraction.click;
	return tooltipState.itemInteraction.hover;
}
function hasBeenActivePreviously(tooltipInteractionState) {
	return tooltipInteractionState.index != null;
}
var combineTooltipInteractionState = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
	if (tooltipEventType == null) return noInteraction;
	var appropriateMouseInteraction = chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger);
	if (appropriateMouseInteraction == null) return noInteraction;
	if (appropriateMouseInteraction.active) return appropriateMouseInteraction;
	if (tooltipState.keyboardInteraction.active) return tooltipState.keyboardInteraction;
	if (tooltipState.syncInteraction.active && tooltipState.syncInteraction.index != null) return tooltipState.syncInteraction;
	var activeFromProps = tooltipState.settings.active === true;
	if (hasBeenActivePreviously(appropriateMouseInteraction)) {
		if (activeFromProps) return _objectSpread$13(_objectSpread$13({}, appropriateMouseInteraction), {}, { active: true });
	} else if (defaultIndex != null) return {
		active: true,
		coordinate: void 0,
		dataKey: void 0,
		index: defaultIndex
	};
	return _objectSpread$13(_objectSpread$13({}, noInteraction), {}, { coordinate: appropriateMouseInteraction.coordinate });
};
var combineActiveTooltipIndex = (tooltipInteraction, chartData) => {
	var desiredIndex = tooltipInteraction === null || tooltipInteraction === void 0 ? void 0 : tooltipInteraction.index;
	if (desiredIndex == null) return null;
	var indexAsNumber = Number(desiredIndex);
	if (!isWellBehavedNumber(indexAsNumber)) return desiredIndex;
	var lowerLimit = 0;
	var upperLimit = Infinity;
	if (chartData.length > 0) upperLimit = chartData.length - 1;
	return String(Math.max(lowerLimit, Math.min(indexAsNumber, upperLimit)));
};
var combineCoordinateForDefaultIndex = (width, height, layout, offset, tooltipTicks, defaultIndex, tooltipConfigurations, tooltipPayloadSearcher) => {
	if (defaultIndex == null || tooltipPayloadSearcher == null) return;
	var firstConfiguration = tooltipConfigurations[0];
	var maybePosition = firstConfiguration == null ? void 0 : tooltipPayloadSearcher(firstConfiguration.positions, defaultIndex);
	if (maybePosition != null) return maybePosition;
	var tick = tooltipTicks === null || tooltipTicks === void 0 ? void 0 : tooltipTicks[Number(defaultIndex)];
	if (!tick) return;
	switch (layout) {
		case "horizontal": return {
			x: tick.coordinate,
			y: (offset.top + height) / 2
		};
		default: return {
			x: (offset.left + width) / 2,
			y: tick.coordinate
		};
	}
};
var combineTooltipPayloadConfigurations = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
	if (tooltipEventType === "axis") return tooltipState.tooltipItemPayloads;
	if (tooltipState.tooltipItemPayloads.length === 0) return [];
	var filterByDataKey;
	if (trigger === "hover") filterByDataKey = tooltipState.itemInteraction.hover.dataKey;
	else filterByDataKey = tooltipState.itemInteraction.click.dataKey;
	if (filterByDataKey == null && defaultIndex != null) return [tooltipState.tooltipItemPayloads[0]];
	return tooltipState.tooltipItemPayloads.filter((tpc) => {
		var _tpc$settings;
		return ((_tpc$settings = tpc.settings) === null || _tpc$settings === void 0 ? void 0 : _tpc$settings.dataKey) === filterByDataKey;
	});
};
var selectTooltipPayloadSearcher = (state) => state.options.tooltipPayloadSearcher;
var selectTooltipState = (state) => state.tooltip;
function ownKeys$12(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$12(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$12(Object(t), !0).forEach(function(r$1) {
			_defineProperty$13(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$13(e, r, t) {
	return (r = _toPropertyKey$13(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$13(t) {
	var i = _toPrimitive$13(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$13(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function selectFinalData(dataDefinedOnItem, dataDefinedOnChart) {
	if (dataDefinedOnItem != null) return dataDefinedOnItem;
	return dataDefinedOnChart;
}
var combineTooltipPayload = (tooltipPayloadConfigurations, activeIndex, chartDataState, tooltipAxisDataKey, activeLabel, tooltipPayloadSearcher, tooltipEventType) => {
	if (activeIndex == null || tooltipPayloadSearcher == null) return;
	var { chartData, computedData, dataStartIndex, dataEndIndex } = chartDataState;
	return tooltipPayloadConfigurations.reduce((agg, _ref$1) => {
		var _settings$dataKey;
		var { dataDefinedOnItem, settings } = _ref$1;
		var finalData = selectFinalData(dataDefinedOnItem, chartData);
		var sliced = Array.isArray(finalData) ? getSliced(finalData, dataStartIndex, dataEndIndex) : finalData;
		var finalDataKey = (_settings$dataKey = settings === null || settings === void 0 ? void 0 : settings.dataKey) !== null && _settings$dataKey !== void 0 ? _settings$dataKey : tooltipAxisDataKey;
		var finalNameKey = settings === null || settings === void 0 ? void 0 : settings.nameKey;
		var tooltipPayload;
		if (tooltipAxisDataKey && Array.isArray(sliced) && !Array.isArray(sliced[0]) && tooltipEventType === "axis") tooltipPayload = findEntryInArray(sliced, tooltipAxisDataKey, activeLabel);
		else tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex, computedData, finalNameKey);
		if (Array.isArray(tooltipPayload)) tooltipPayload.forEach((item) => {
			var newSettings = _objectSpread$12(_objectSpread$12({}, settings), {}, {
				name: item.name,
				unit: item.unit,
				color: void 0,
				fill: void 0
			});
			agg.push(getTooltipEntry({
				tooltipEntrySettings: newSettings,
				dataKey: item.dataKey,
				payload: item.payload,
				value: getValueByDataKey(item.payload, item.dataKey),
				name: item.name
			}));
		});
		else {
			var _getValueByDataKey;
			agg.push(getTooltipEntry({
				tooltipEntrySettings: settings,
				dataKey: finalDataKey,
				payload: tooltipPayload,
				value: getValueByDataKey(tooltipPayload, finalDataKey),
				name: (_getValueByDataKey = getValueByDataKey(tooltipPayload, finalNameKey)) !== null && _getValueByDataKey !== void 0 ? _getValueByDataKey : settings === null || settings === void 0 ? void 0 : settings.name
			}));
		}
		return agg;
	}, []);
};
var selectTooltipAxisRealScaleType = createSelector([
	selectTooltipAxis,
	selectChartLayout,
	selectHasBar,
	selectChartName,
	selectTooltipAxisType
], combineRealScaleType);
var selectAllGraphicalItemsSettings = createSelector([
	createSelector([(state) => state.graphicalItems.cartesianItems, (state) => state.graphicalItems.polarItems], (cartesianItems, polarItems) => [...cartesianItems, ...polarItems]),
	selectTooltipAxis,
	createSelector([selectTooltipAxisType, selectTooltipAxisId], itemAxisPredicate)
], combineGraphicalItemsSettings);
var selectAllStackedGraphicalItemsSettings = createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked));
var selectTooltipDisplayedData = createSelector([createSelector([selectAllGraphicalItemsSettings], combineGraphicalItemsData), selectChartDataWithIndexes], combineDisplayedData);
var selectTooltipStackedData = createSelector([
	selectAllStackedGraphicalItemsSettings,
	selectChartDataWithIndexes,
	selectTooltipAxis
], combineDisplayedStackedData);
var selectAllTooltipAppliedValues = createSelector([
	selectTooltipDisplayedData,
	selectTooltipAxis,
	selectAllGraphicalItemsSettings
], combineAppliedValues);
var selectTooltipAxisDomainDefinition = createSelector([selectTooltipAxis], getDomainDefinition);
var selectTooltipDomainOfStackGroups = createSelector([
	createSelector([
		selectTooltipStackedData,
		createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked)),
		selectStackOffsetType
	], combineStackGroups),
	selectChartDataWithIndexes,
	selectTooltipAxisType
], combineDomainOfStackGroups);
var selectTooltipAllAppliedNumericalValuesIncludingErrorValues = createSelector([
	selectTooltipDisplayedData,
	selectTooltipAxis,
	createSelector([selectAllGraphicalItemsSettings], filterGraphicalNotStackedItems),
	selectAllErrorBarSettings,
	selectTooltipAxisType
], combineAppliedNumericalValuesIncludingErrorValues);
var selectTooltipReferenceDotsDomain = createSelector([createSelector([
	selectReferenceDots,
	selectTooltipAxisType,
	selectTooltipAxisId
], filterReferenceElements), selectTooltipAxisType], combineDotsDomain);
var selectTooltipReferenceAreasDomain = createSelector([createSelector([
	selectReferenceAreas,
	selectTooltipAxisType,
	selectTooltipAxisId
], filterReferenceElements), selectTooltipAxisType], combineAreasDomain);
var selectTooltipAxisDomain = createSelector([
	selectTooltipAxis,
	selectChartLayout,
	selectTooltipDisplayedData,
	selectAllTooltipAppliedValues,
	selectStackOffsetType,
	selectTooltipAxisType,
	createSelector([
		selectTooltipAxis,
		selectTooltipAxisDomainDefinition,
		selectTooltipDomainOfStackGroups,
		selectTooltipAllAppliedNumericalValuesIncludingErrorValues,
		createSelector([
			selectTooltipReferenceDotsDomain,
			createSelector([createSelector([
				selectReferenceLines,
				selectTooltipAxisType,
				selectTooltipAxisId
			], filterReferenceElements), selectTooltipAxisType], combineLinesDomain),
			selectTooltipReferenceAreasDomain
		], mergeDomains),
		selectChartLayout,
		selectTooltipAxisType
	], combineNumericalDomain)
], combineAxisDomain);
var selectTooltipAxisDomainIncludingNiceTicks = createSelector([
	selectTooltipAxis,
	selectTooltipAxisDomain,
	createSelector([
		selectTooltipAxisDomain,
		selectTooltipAxis,
		selectTooltipAxisRealScaleType
	], combineNiceTicks),
	selectTooltipAxisType
], combineAxisDomainWithNiceTicks);
var selectTooltipAxisRange = (state) => {
	return selectAxisRange(state, selectTooltipAxisType(state), selectTooltipAxisId(state), false);
};
var selectTooltipAxisRangeWithReverse = createSelector([selectTooltipAxis, selectTooltipAxisRange], combineAxisRangeWithReverse);
var selectTooltipAxisScale = createSelector([
	selectTooltipAxis,
	selectTooltipAxisRealScaleType,
	selectTooltipAxisDomainIncludingNiceTicks,
	selectTooltipAxisRangeWithReverse
], combineScaleFunction);
var selectTooltipDuplicateDomain = createSelector([
	selectChartLayout,
	selectAllTooltipAppliedValues,
	selectTooltipAxis,
	selectTooltipAxisType
], combineDuplicateDomain);
var selectTooltipCategoricalDomain = createSelector([
	selectChartLayout,
	selectAllTooltipAppliedValues,
	selectTooltipAxis,
	selectTooltipAxisType
], combineCategoricalDomain);
var combineTicksOfTooltipAxis = (layout, axis, realScaleType, scale, range$2, duplicateDomain, categoricalDomain, axisType) => {
	if (!axis) return;
	var { type } = axis;
	var isCategorical = isCategoricalAxis(layout, axisType);
	if (!scale) return;
	var offsetForBand = realScaleType === "scaleBand" && scale.bandwidth ? scale.bandwidth() / 2 : 2;
	var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && range$2 != null && (range$2 === null || range$2 === void 0 ? void 0 : range$2.length) >= 2 ? mathSign(range$2[0] - range$2[1]) * 2 * offset : offset;
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: entry,
		index,
		offset
	}));
	return scale.domain().map((entry, index) => ({
		coordinate: scale(entry) + offset,
		value: duplicateDomain ? duplicateDomain[entry] : entry,
		index,
		offset
	}));
};
var selectTooltipAxisTicks = createSelector([
	selectChartLayout,
	selectTooltipAxis,
	selectTooltipAxisRealScaleType,
	selectTooltipAxisScale,
	selectTooltipAxisRange,
	selectTooltipDuplicateDomain,
	selectTooltipCategoricalDomain,
	selectTooltipAxisType
], combineTicksOfTooltipAxis);
var selectTooltipEventType$1 = createSelector([
	selectDefaultTooltipEventType,
	selectValidateTooltipEventTypes,
	selectTooltipSettings
], (defaultTooltipEventType, validateTooltipEventType, settings) => combineTooltipEventType(settings.shared, defaultTooltipEventType, validateTooltipEventType));
var selectTooltipTrigger = (state) => state.tooltip.settings.trigger;
var selectDefaultIndex = (state) => state.tooltip.settings.defaultIndex;
var selectTooltipInteractionState$1 = createSelector([
	selectTooltipState,
	selectTooltipEventType$1,
	selectTooltipTrigger,
	selectDefaultIndex
], combineTooltipInteractionState);
var selectActiveTooltipIndex = createSelector([selectTooltipInteractionState$1, selectTooltipDisplayedData], combineActiveTooltipIndex);
var selectActiveLabel = createSelector([selectTooltipAxisTicks, selectActiveTooltipIndex], combineActiveLabel);
var selectActiveTooltipDataKey = createSelector([selectTooltipInteractionState$1], (tooltipInteraction) => {
	if (!tooltipInteraction) return;
	return tooltipInteraction.dataKey;
});
var selectTooltipPayloadConfigurations$1 = createSelector([
	selectTooltipState,
	selectTooltipEventType$1,
	selectTooltipTrigger,
	selectDefaultIndex
], combineTooltipPayloadConfigurations);
var selectActiveTooltipCoordinate = createSelector([selectTooltipInteractionState$1, createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartLayout,
	selectChartOffsetInternal,
	selectTooltipAxisTicks,
	selectDefaultIndex,
	selectTooltipPayloadConfigurations$1,
	selectTooltipPayloadSearcher
], combineCoordinateForDefaultIndex)], (tooltipInteractionState, defaultIndexCoordinate) => {
	if (tooltipInteractionState !== null && tooltipInteractionState !== void 0 && tooltipInteractionState.coordinate) return tooltipInteractionState.coordinate;
	return defaultIndexCoordinate;
});
var selectIsTooltipActive = createSelector([selectTooltipInteractionState$1], (tooltipInteractionState) => tooltipInteractionState.active);
var selectActiveTooltipDataPoints = createSelector([createSelector([
	selectTooltipPayloadConfigurations$1,
	selectActiveTooltipIndex,
	selectChartDataWithIndexes,
	selectTooltipAxisDataKey,
	selectActiveLabel,
	selectTooltipPayloadSearcher,
	selectTooltipEventType$1
], combineTooltipPayload)], (payload) => {
	if (payload == null) return;
	var dataPoints = payload.map((p) => p.payload).filter((p) => p != null);
	return Array.from(new Set(dataPoints));
});
function ownKeys$11(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$11(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$11(Object(t), !0).forEach(function(r$1) {
			_defineProperty$12(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$12(e, r, t) {
	return (r = _toPropertyKey$12(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$12(t) {
	var i = _toPrimitive$12(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$12(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var useTooltipAxis = () => useAppSelector(selectTooltipAxis);
var useTooltipAxisBandSize = () => {
	var tooltipAxis = useTooltipAxis();
	var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
	var tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
	return getBandSizeOfAxis(_objectSpread$11(_objectSpread$11({}, tooltipAxis), {}, { scale: tooltipAxisScale }), tooltipTicks);
};
var useChartName = () => {
	return useAppSelector(selectChartName);
};
var pickTooltipEventType = (_state, tooltipEventType) => tooltipEventType;
var pickTrigger = (_state, _tooltipEventType, trigger) => trigger;
var pickDefaultIndex = (_state, _tooltipEventType, _trigger, defaultIndex) => defaultIndex;
var selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks) => sortBy(ticks, (o) => o.coordinate));
var selectTooltipInteractionState = createSelector([
	selectTooltipState,
	pickTooltipEventType,
	pickTrigger,
	pickDefaultIndex
], combineTooltipInteractionState);
var selectActiveIndex = createSelector([selectTooltipInteractionState, selectTooltipDisplayedData], combineActiveTooltipIndex);
var selectTooltipDataKey = (state, tooltipEventType, trigger) => {
	if (tooltipEventType == null) return;
	var tooltipState = selectTooltipState(state);
	if (tooltipEventType === "axis") {
		if (trigger === "hover") return tooltipState.axisInteraction.hover.dataKey;
		return tooltipState.axisInteraction.click.dataKey;
	}
	if (trigger === "hover") return tooltipState.itemInteraction.hover.dataKey;
	return tooltipState.itemInteraction.click.dataKey;
};
var selectTooltipPayloadConfigurations = createSelector([
	selectTooltipState,
	pickTooltipEventType,
	pickTrigger,
	pickDefaultIndex
], combineTooltipPayloadConfigurations);
var selectCoordinateForDefaultIndex = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartLayout,
	selectChartOffsetInternal,
	selectTooltipAxisTicks,
	pickDefaultIndex,
	selectTooltipPayloadConfigurations,
	selectTooltipPayloadSearcher
], combineCoordinateForDefaultIndex);
var selectActiveCoordinate = createSelector([selectTooltipInteractionState, selectCoordinateForDefaultIndex], (tooltipInteractionState, defaultIndexCoordinate) => {
	var _tooltipInteractionSt;
	return (_tooltipInteractionSt = tooltipInteractionState.coordinate) !== null && _tooltipInteractionSt !== void 0 ? _tooltipInteractionSt : defaultIndexCoordinate;
});
var selectActiveLabel$1 = createSelector(selectTooltipAxisTicks, selectActiveIndex, combineActiveLabel);
var selectTooltipPayload = createSelector([
	selectTooltipPayloadConfigurations,
	selectActiveIndex,
	selectChartDataWithIndexes,
	selectTooltipAxisDataKey,
	selectActiveLabel$1,
	selectTooltipPayloadSearcher,
	pickTooltipEventType
], combineTooltipPayload);
var selectIsTooltipActive$1 = createSelector([selectTooltipInteractionState], (tooltipInteractionState) => {
	return {
		isActive: tooltipInteractionState.active,
		activeIndex: tooltipInteractionState.index
	};
});
var combineActiveProps = (chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset) => {
	if (!chartEvent || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) return;
	var rangeObj = inRange(chartEvent.chartX, chartEvent.chartY, layout, polarViewBox, offset);
	if (!rangeObj) return;
	var activeIndex = calculateActiveTickIndex(calculateTooltipPos(rangeObj, layout), orderedTooltipTicks, tooltipTicks, tooltipAxisType, tooltipAxisRange);
	var activeCoordinate = getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj);
	return {
		activeIndex: String(activeIndex),
		activeCoordinate
	};
};
function _extends$7() {
	return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$7.apply(null, arguments);
}
function ownKeys$10(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$10(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$10(Object(t), !0).forEach(function(r$1) {
			_defineProperty$11(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$11(e, r, t) {
	return (r = _toPropertyKey$11(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$11(t) {
	var i = _toPrimitive$11(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$11(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function CursorInternal(props) {
	var { coordinate, payload, index, offset, tooltipAxisBandSize, layout, cursor, tooltipEventType, chartName } = props;
	var activeCoordinate = coordinate;
	var activePayload = payload;
	var activeTooltipIndex = index;
	if (!cursor || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") return null;
	var restProps, cursorComp;
	if (chartName === "ScatterChart") {
		restProps = activeCoordinate;
		cursorComp = Cross;
	} else if (chartName === "BarChart") {
		restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
		cursorComp = Rectangle;
	} else if (layout === "radial") {
		var { cx, cy, radius, startAngle, endAngle } = getRadialCursorPoints(activeCoordinate);
		restProps = {
			cx,
			cy,
			startAngle,
			endAngle,
			innerRadius: radius,
			outerRadius: radius
		};
		cursorComp = Sector;
	} else {
		restProps = { points: getCursorPoints(layout, activeCoordinate, offset) };
		cursorComp = Curve;
	}
	var extraClassName = typeof cursor === "object" && "className" in cursor ? cursor.className : void 0;
	var cursorProps = _objectSpread$10(_objectSpread$10(_objectSpread$10(_objectSpread$10({
		stroke: "#ccc",
		pointerEvents: "none"
	}, offset), restProps), filterProps(cursor, false)), {}, {
		payload: activePayload,
		payloadIndex: activeTooltipIndex,
		className: clsx("recharts-tooltip-cursor", extraClassName)
	});
	return /* @__PURE__ */ isValidElement(cursor) ? /* @__PURE__ */ cloneElement(cursor, cursorProps) : /* @__PURE__ */ createElement(cursorComp, cursorProps);
}
function Cursor(props) {
	var tooltipAxisBandSize = useTooltipAxisBandSize();
	var offset = useOffsetInternal();
	var layout = useChartLayout();
	var chartName = useChartName();
	return /* @__PURE__ */ React$1.createElement(CursorInternal, _extends$7({}, props, {
		coordinate: props.coordinate,
		index: props.index,
		payload: props.payload,
		offset,
		layout,
		tooltipAxisBandSize,
		chartName
	}));
}
var TooltipPortalContext = /* @__PURE__ */ createContext(null);
var useTooltipPortal = () => useContext(TooltipPortalContext);
var eventCenter = new EventEmitter();
var TOOLTIP_SYNC_EVENT = "recharts.syncEvent.tooltip";
var BRUSH_SYNC_EVENT = "recharts.syncEvent.brush";
function arrayTooltipSearcher(data, strIndex) {
	if (!strIndex) return void 0;
	var numIndex = Number.parseInt(strIndex, 10);
	if (isNan(numIndex)) return;
	return data === null || data === void 0 ? void 0 : data[numIndex];
}
var optionsSlice = createSlice({
	name: "options",
	initialState: {
		chartName: "",
		tooltipPayloadSearcher: void 0,
		eventEmitter: void 0,
		defaultTooltipEventType: "axis"
	},
	reducers: { createEventEmitter: (state) => {
		if (state.eventEmitter == null) state.eventEmitter = Symbol("rechartsEventEmitter");
	} }
});
var optionsReducer = optionsSlice.reducer;
var { createEventEmitter } = optionsSlice.actions;
function selectSynchronisedTooltipState(state) {
	return state.tooltip.syncInteraction;
}
var chartDataSlice = createSlice({
	name: "chartData",
	initialState: {
		chartData: void 0,
		computedData: void 0,
		dataStartIndex: 0,
		dataEndIndex: 0
	},
	reducers: {
		setChartData(state, action) {
			state.chartData = action.payload;
			if (action.payload == null) {
				state.dataStartIndex = 0;
				state.dataEndIndex = 0;
				return;
			}
			if (action.payload.length > 0 && state.dataEndIndex !== action.payload.length - 1) state.dataEndIndex = action.payload.length - 1;
		},
		setComputedData(state, action) {
			state.computedData = action.payload;
		},
		setDataStartEndIndexes(state, action) {
			var { startIndex, endIndex } = action.payload;
			if (startIndex != null) state.dataStartIndex = startIndex;
			if (endIndex != null) state.dataEndIndex = endIndex;
		}
	}
});
var { setChartData, setDataStartEndIndexes, setComputedData } = chartDataSlice.actions;
var chartDataReducer = chartDataSlice.reducer;
var _excluded$8 = ["x", "y"];
function ownKeys$9(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$9(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$9(Object(t), !0).forEach(function(r$1) {
			_defineProperty$10(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$10(e, r, t) {
	return (r = _toPropertyKey$10(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$10(t) {
	var i = _toPrimitive$10(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$10(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$8(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$8(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$8(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var noop$2 = () => {};
function useTooltipSyncEventsListener() {
	var mySyncId = useAppSelector(selectSyncId);
	var myEventEmitter = useAppSelector(selectEventEmitter);
	var dispatch = useAppDispatch();
	var syncMethod = useAppSelector(selectSyncMethod);
	var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
	var layout = useChartLayout();
	var viewBox = useViewBox();
	useEffect(() => {
		if (mySyncId == null) return noop$2;
		var listener$1 = (incomingSyncId, action, emitter) => {
			if (myEventEmitter === emitter) return;
			if (mySyncId !== incomingSyncId) return;
			if (syncMethod === "index") {
				var _action$payload;
				if (viewBox && action !== null && action !== void 0 && (_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.coordinate) {
					var _action$payload$coord = action.payload.coordinate, { x: _x, y: _y } = _action$payload$coord;
					var boundedCoordinate = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, _objectWithoutProperties$8(_action$payload$coord, _excluded$8)), typeof _x === "number" && { x: Math.max(viewBox.x, Math.min(_x, viewBox.x + viewBox.width)) }), typeof _y === "number" && { y: Math.max(viewBox.y, Math.min(_y, viewBox.y + viewBox.height)) });
					dispatch(_objectSpread$9(_objectSpread$9({}, action), {}, { payload: _objectSpread$9(_objectSpread$9({}, action.payload), {}, { coordinate: boundedCoordinate }) }));
				} else dispatch(action);
				return;
			}
			if (tooltipTicks == null) return;
			var activeTick;
			if (typeof syncMethod === "function") activeTick = tooltipTicks[syncMethod(tooltipTicks, {
				activeTooltipIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
				isTooltipActive: action.payload.active,
				activeIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
				activeLabel: action.payload.label,
				activeDataKey: action.payload.dataKey,
				activeCoordinate: action.payload.coordinate
			})];
			else if (syncMethod === "value") activeTick = tooltipTicks.find((tick) => String(tick.value) === action.payload.label);
			var { coordinate } = action.payload;
			if (activeTick == null || action.payload.active === false || coordinate == null || viewBox == null) {
				dispatch(setSyncInteraction({
					active: false,
					coordinate: void 0,
					dataKey: void 0,
					index: null,
					label: void 0
				}));
				return;
			}
			var { x, y } = coordinate;
			var validateChartX = Math.min(x, viewBox.x + viewBox.width);
			var validateChartY = Math.min(y, viewBox.y + viewBox.height);
			var activeCoordinate = {
				x: layout === "horizontal" ? activeTick.coordinate : validateChartX,
				y: layout === "horizontal" ? validateChartY : activeTick.coordinate
			};
			dispatch(setSyncInteraction({
				active: action.payload.active,
				coordinate: activeCoordinate,
				dataKey: action.payload.dataKey,
				index: String(activeTick.index),
				label: action.payload.label
			}));
		};
		eventCenter.on(TOOLTIP_SYNC_EVENT, listener$1);
		return () => {
			eventCenter.off(TOOLTIP_SYNC_EVENT, listener$1);
		};
	}, [
		useAppSelector((state) => state.rootProps.className),
		dispatch,
		myEventEmitter,
		mySyncId,
		syncMethod,
		tooltipTicks,
		layout,
		viewBox
	]);
}
function useBrushSyncEventsListener() {
	var mySyncId = useAppSelector(selectSyncId);
	var myEventEmitter = useAppSelector(selectEventEmitter);
	var dispatch = useAppDispatch();
	useEffect(() => {
		if (mySyncId == null) return noop$2;
		var listener$1 = (incomingSyncId, action, emitter) => {
			if (myEventEmitter === emitter) return;
			if (mySyncId === incomingSyncId) dispatch(setDataStartEndIndexes(action));
		};
		eventCenter.on(BRUSH_SYNC_EVENT, listener$1);
		return () => {
			eventCenter.off(BRUSH_SYNC_EVENT, listener$1);
		};
	}, [
		dispatch,
		myEventEmitter,
		mySyncId
	]);
}
function useSynchronisedEventsFromOtherCharts() {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(createEventEmitter());
	}, [dispatch]);
	useTooltipSyncEventsListener();
	useBrushSyncEventsListener();
}
function useTooltipChartSynchronisation(tooltipEventType, trigger, activeCoordinate, activeLabel, activeIndex, isTooltipActive) {
	var activeDataKey = useAppSelector((state) => selectTooltipDataKey(state, tooltipEventType, trigger));
	var eventEmitterSymbol = useAppSelector(selectEventEmitter);
	var syncId = useAppSelector(selectSyncId);
	var syncMethod = useAppSelector(selectSyncMethod);
	var tooltipState = useAppSelector(selectSynchronisedTooltipState);
	var isReceivingSynchronisation = tooltipState === null || tooltipState === void 0 ? void 0 : tooltipState.active;
	useEffect(() => {
		if (isReceivingSynchronisation) return;
		if (syncId == null) return;
		if (eventEmitterSymbol == null) return;
		var syncAction = setSyncInteraction({
			active: isTooltipActive,
			coordinate: activeCoordinate,
			dataKey: activeDataKey,
			index: activeIndex,
			label: typeof activeLabel === "number" ? String(activeLabel) : activeLabel
		});
		eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
	}, [
		isReceivingSynchronisation,
		activeCoordinate,
		activeDataKey,
		activeIndex,
		activeLabel,
		eventEmitterSymbol,
		syncId,
		syncMethod,
		isTooltipActive
	]);
}
function ownKeys$8(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$8(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$8(Object(t), !0).forEach(function(r$1) {
			_defineProperty$9(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$9(e, r, t) {
	return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
	var i = _toPrimitive$9(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$9(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function defaultUniqBy(entry) {
	return entry.dataKey;
}
function renderContent(content, props) {
	if (/* @__PURE__ */ React$1.isValidElement(content)) return /* @__PURE__ */ React$1.cloneElement(content, props);
	if (typeof content === "function") return /* @__PURE__ */ React$1.createElement(content, props);
	return /* @__PURE__ */ React$1.createElement(DefaultTooltipContent, props);
}
var emptyPayload = [];
var defaultTooltipProps = {
	allowEscapeViewBox: {
		x: false,
		y: false
	},
	animationDuration: 400,
	animationEasing: "ease",
	axisId: 0,
	contentStyle: {},
	cursor: true,
	filterNull: true,
	isAnimationActive: !Global.isSsr,
	itemSorter: "name",
	itemStyle: {},
	labelStyle: {},
	offset: 10,
	reverseDirection: {
		x: false,
		y: false
	},
	separator: " : ",
	trigger: "hover",
	useTranslate3d: false,
	wrapperStyle: {}
};
function Tooltip(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultTooltipProps);
	var { active: activeFromProps, allowEscapeViewBox, animationDuration, animationEasing, content, filterNull, isAnimationActive, offset, payloadUniqBy, position, reverseDirection, useTranslate3d, wrapperStyle, cursor, shared, trigger, defaultIndex, portal: portalFromProps, axisId } = props;
	var dispatch = useAppDispatch();
	var defaultIndexAsString = typeof defaultIndex === "number" ? String(defaultIndex) : defaultIndex;
	useEffect(() => {
		dispatch(setTooltipSettingsState({
			shared,
			trigger,
			axisId,
			active: activeFromProps,
			defaultIndex: defaultIndexAsString
		}));
	}, [
		dispatch,
		shared,
		trigger,
		axisId,
		activeFromProps,
		defaultIndexAsString
	]);
	var viewBox = useViewBox();
	var accessibilityLayer = useAccessibilityLayer();
	var tooltipEventType = useTooltipEventType(shared);
	var { activeIndex, isActive } = useAppSelector((state) => selectIsTooltipActive$1(state, tooltipEventType, trigger, defaultIndexAsString));
	var payloadFromRedux = useAppSelector((state) => selectTooltipPayload(state, tooltipEventType, trigger, defaultIndexAsString));
	var labelFromRedux = useAppSelector((state) => selectActiveLabel$1(state, tooltipEventType, trigger, defaultIndexAsString));
	var coordinate = useAppSelector((state) => selectActiveCoordinate(state, tooltipEventType, trigger, defaultIndexAsString));
	var payload = payloadFromRedux;
	var tooltipPortalFromContext = useTooltipPortal();
	var finalIsActive = activeFromProps !== null && activeFromProps !== void 0 ? activeFromProps : isActive;
	var [lastBoundingBox, updateBoundingBox] = useElementOffset([payload, finalIsActive]);
	var finalLabel = tooltipEventType === "axis" ? labelFromRedux : void 0;
	useTooltipChartSynchronisation(tooltipEventType, trigger, coordinate, finalLabel, activeIndex, finalIsActive);
	var tooltipPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : tooltipPortalFromContext;
	if (tooltipPortal == null) return null;
	var finalPayload = payload !== null && payload !== void 0 ? payload : emptyPayload;
	if (!finalIsActive) finalPayload = emptyPayload;
	if (filterNull && finalPayload.length) finalPayload = getUniqPayload(payload.filter((entry) => entry.value != null && (entry.hide !== true || props.includeHidden)), payloadUniqBy, defaultUniqBy);
	var hasPayload = finalPayload.length > 0;
	var tooltipElement = /* @__PURE__ */ React$1.createElement(TooltipBoundingBox, {
		allowEscapeViewBox,
		animationDuration,
		animationEasing,
		isAnimationActive,
		active: finalIsActive,
		coordinate,
		hasPayload,
		offset,
		position,
		reverseDirection,
		useTranslate3d,
		viewBox,
		wrapperStyle,
		lastBoundingBox,
		innerRef: updateBoundingBox,
		hasPortalFromProps: Boolean(portalFromProps)
	}, renderContent(content, _objectSpread$8(_objectSpread$8({}, props), {}, {
		payload: finalPayload,
		label: finalLabel,
		active: finalIsActive,
		coordinate,
		accessibilityLayer
	})));
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ createPortal(tooltipElement, tooltipPortal), finalIsActive && /* @__PURE__ */ React$1.createElement(Cursor, {
		cursor,
		tooltipEventType,
		coordinate,
		payload,
		index: activeIndex
	}));
}
var isDev = process.env.NODE_ENV !== "production";
var warn = function warn$1(condition, format) {
	for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
	if (isDev && typeof console !== "undefined" && console.warn) {
		if (format === void 0) console.warn("LogUtils requires an error message argument");
		if (!condition) if (format === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var argIndex = 0;
			console.warn(format.replace(/%s/g, () => args[argIndex++]));
		}
	}
};
function ownKeys$7(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$7(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r$1) {
			_defineProperty$8(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$8(e, r, t) {
	return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
	var i = _toPrimitive$8(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$8(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var ResponsiveContainer = /* @__PURE__ */ forwardRef((_ref$1, ref) => {
	var { aspect, initialDimension = {
		width: -1,
		height: -1
	}, width = "100%", height = "100%", minWidth = 0, minHeight, maxHeight, children, debounce = 0, id, className, onResize, style = {} } = _ref$1;
	var containerRef = useRef(null);
	var onResizeRef = useRef();
	onResizeRef.current = onResize;
	useImperativeHandle(ref, () => containerRef.current);
	var [sizes, setSizes] = useState({
		containerWidth: initialDimension.width,
		containerHeight: initialDimension.height
	});
	var setContainerSize = useCallback((newWidth, newHeight) => {
		setSizes((prevState) => {
			var roundedWidth = Math.round(newWidth);
			var roundedHeight = Math.round(newHeight);
			if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) return prevState;
			return {
				containerWidth: roundedWidth,
				containerHeight: roundedHeight
			};
		});
	}, []);
	useEffect(() => {
		var callback = (entries) => {
			var _onResizeRef$current;
			var { width: containerWidth$1, height: containerHeight$1 } = entries[0].contentRect;
			setContainerSize(containerWidth$1, containerHeight$1);
			(_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth$1, containerHeight$1);
		};
		if (debounce > 0) callback = throttle(callback, debounce, {
			trailing: true,
			leading: false
		});
		var observer = new ResizeObserver(callback);
		var { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
		setContainerSize(containerWidth, containerHeight);
		observer.observe(containerRef.current);
		return () => {
			observer.disconnect();
		};
	}, [setContainerSize, debounce]);
	var chartContent = useMemo(() => {
		var { containerWidth, containerHeight } = sizes;
		if (containerWidth < 0 || containerHeight < 0) return null;
		warn(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
		warn(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
		var calculatedWidth = isPercent(width) ? containerWidth : width;
		var calculatedHeight = isPercent(height) ? containerHeight : height;
		if (aspect && aspect > 0) {
			if (calculatedWidth) calculatedHeight = calculatedWidth / aspect;
			else if (calculatedHeight) calculatedWidth = calculatedHeight * aspect;
			if (maxHeight && calculatedHeight > maxHeight) calculatedHeight = maxHeight;
		}
		warn(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
		return React$1.Children.map(children, (child) => {
			return /* @__PURE__ */ cloneElement(child, {
				width: calculatedWidth,
				height: calculatedHeight,
				style: _objectSpread$7({
					width: calculatedWidth,
					height: calculatedHeight
				}, child.props.style)
			});
		});
	}, [
		aspect,
		children,
		height,
		maxHeight,
		minHeight,
		minWidth,
		sizes,
		width
	]);
	return /* @__PURE__ */ React$1.createElement("div", {
		id: id ? "".concat(id) : void 0,
		className: clsx("recharts-responsive-container", className),
		style: _objectSpread$7(_objectSpread$7({}, style), {}, {
			width,
			height,
			minWidth,
			minHeight,
			maxHeight
		}),
		ref: containerRef
	}, /* @__PURE__ */ React$1.createElement("div", { style: {
		width: 0,
		height: 0,
		overflow: "visible"
	} }, chartContent));
});
function _defineProperty$7(e, r, t) {
	return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
	var i = _toPrimitive$7(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$7(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var LRUCache = class {
	constructor(maxSize) {
		_defineProperty$7(this, "cache", /* @__PURE__ */ new Map());
		this.maxSize = maxSize;
	}
	get(key) {
		var value = this.cache.get(key);
		if (value !== void 0) {
			this.cache.delete(key);
			this.cache.set(key, value);
		}
		return value;
	}
	set(key, value) {
		if (this.cache.has(key)) this.cache.delete(key);
		else if (this.cache.size >= this.maxSize) {
			var firstKey = this.cache.keys().next().value;
			this.cache.delete(firstKey);
		}
		this.cache.set(key, value);
	}
	clear() {
		this.cache.clear();
	}
	size() {
		return this.cache.size;
	}
};
function ownKeys$6(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$6(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r$1) {
			_defineProperty$6(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$6(e, r, t) {
	return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
	var i = _toPrimitive$6(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$6(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var currentConfig = _objectSpread$6({}, {
	cacheSize: 2e3,
	enableCache: true
});
var stringCache = new LRUCache(currentConfig.cacheSize);
var SPAN_STYLE = {
	position: "absolute",
	top: "-20000px",
	left: 0,
	padding: 0,
	margin: 0,
	border: "none",
	whiteSpace: "pre"
};
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function createCacheKey(text, style) {
	var fontSize = style.fontSize || "";
	var fontFamily = style.fontFamily || "";
	var fontWeight = style.fontWeight || "";
	var fontStyle = style.fontStyle || "";
	var letterSpacing = style.letterSpacing || "";
	var textTransform = style.textTransform || "";
	return "".concat(text, "|").concat(fontSize, "|").concat(fontFamily, "|").concat(fontWeight, "|").concat(fontStyle, "|").concat(letterSpacing, "|").concat(textTransform);
}
var measureTextWithDOM = (text, style) => {
	try {
		var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
		if (!measurementSpan) {
			measurementSpan = document.createElement("span");
			measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
			measurementSpan.setAttribute("aria-hidden", "true");
			document.body.appendChild(measurementSpan);
		}
		Object.assign(measurementSpan.style, SPAN_STYLE, style);
		measurementSpan.textContent = "".concat(text);
		var rect = measurementSpan.getBoundingClientRect();
		return {
			width: rect.width,
			height: rect.height
		};
	} catch (_unused) {
		return {
			width: 0,
			height: 0
		};
	}
};
var getStringSize = function getStringSize$1(text) {
	var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (text === void 0 || text === null || Global.isSsr) return {
		width: 0,
		height: 0
	};
	if (!currentConfig.enableCache) return measureTextWithDOM(text, style);
	var cacheKey = createCacheKey(text, style);
	var cachedResult = stringCache.get(cacheKey);
	if (cachedResult) return cachedResult;
	var result = measureTextWithDOM(text, style);
	stringCache.set(cacheKey, result);
	return result;
};
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
	cm: 96 / 2.54,
	mm: 96 / 25.4,
	pt: 96 / 72,
	pc: 96 / 6,
	in: 96,
	Q: 96 / (2.54 * 40),
	px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = "NaN";
function convertToPx(value, unit) {
	return value * CONVERSION_RATES[unit];
}
var DecimalCSS = class DecimalCSS {
	static parse(str) {
		var _NUM_SPLIT_REGEX$exec;
		var [, numStr, unit] = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [];
		return new DecimalCSS(parseFloat(numStr), unit !== null && unit !== void 0 ? unit : "");
	}
	constructor(num, unit) {
		this.num = num;
		this.unit = unit;
		this.num = num;
		this.unit = unit;
		if (isNan(num)) this.unit = "";
		if (unit !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
			this.num = NaN;
			this.unit = "";
		}
		if (FIXED_CSS_LENGTH_UNITS.includes(unit)) {
			this.num = convertToPx(num, unit);
			this.unit = "px";
		}
	}
	add(other) {
		if (this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num + other.num, this.unit);
	}
	subtract(other) {
		if (this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num - other.num, this.unit);
	}
	multiply(other) {
		if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num * other.num, this.unit || other.unit);
	}
	divide(other) {
		if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num / other.num, this.unit || other.unit);
	}
	toString() {
		return "".concat(this.num).concat(this.unit);
	}
	isNaN() {
		return isNan(this.num);
	}
};
function calculateArithmetic(expr) {
	if (expr.includes(STR_NAN)) return STR_NAN;
	var newExpr = expr;
	while (newExpr.includes("*") || newExpr.includes("/")) {
		var _MULTIPLY_OR_DIVIDE_R;
		var [, leftOperand, operator, rightOperand] = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [];
		var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
		var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
		var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
		if (result.isNaN()) return STR_NAN;
		newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
	}
	while (newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)) {
		var _ADD_OR_SUBTRACT_REGE;
		var [, _leftOperand, _operator, _rightOperand] = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [];
		var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
		var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
		var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
		if (_result.isNaN()) return STR_NAN;
		newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
	}
	return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
	var newExpr = expr;
	var match;
	while ((match = PARENTHESES_REGEX.exec(newExpr)) != null) {
		var [, parentheticalExpression] = match;
		newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
	}
	return newExpr;
}
function evaluateExpression(expression) {
	var newExpr = expression.replace(/\s+/g, "");
	newExpr = calculateParentheses(newExpr);
	newExpr = calculateArithmetic(newExpr);
	return newExpr;
}
function safeEvaluateExpression(expression) {
	try {
		return evaluateExpression(expression);
	} catch (_unused) {
		return STR_NAN;
	}
}
function reduceCSSCalc(expression) {
	var result = safeEvaluateExpression(expression.slice(5, -1));
	if (result === STR_NAN) return "";
	return result;
}
var _excluded$7 = [
	"x",
	"y",
	"lineHeight",
	"capHeight",
	"scaleToFit",
	"textAnchor",
	"verticalAnchor",
	"fill"
], _excluded2$3 = [
	"dx",
	"dy",
	"angle",
	"className",
	"breakAll"
];
function _extends$6() {
	return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$6.apply(null, arguments);
}
function _objectWithoutProperties$7(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$7(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$7(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = (_ref$1) => {
	var { children, breakAll, style } = _ref$1;
	try {
		var words = [];
		if (!isNullish(children)) if (breakAll) words = children.toString().split("");
		else words = children.toString().split(BREAKING_SPACES);
		return {
			wordsWithComputedWidth: words.map((word) => ({
				word,
				width: getStringSize(word, style).width
			})),
			spaceWidth: breakAll ? 0 : getStringSize("\xA0", style).width
		};
	} catch (_unused) {
		return null;
	}
};
var calculateWordsByLines = (_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) => {
	var { maxLines, children, style, breakAll } = _ref2;
	var shouldLimitLines = isNumber(maxLines);
	var text = children;
	var calculate = function calculate$1() {
		return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).reduce((result$1, _ref3) => {
			var { word, width } = _ref3;
			var currentLine = result$1[result$1.length - 1];
			if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
				currentLine.words.push(word);
				currentLine.width += width + spaceWidth;
			} else {
				var newLine = {
					words: [word],
					width
				};
				result$1.push(newLine);
			}
			return result$1;
		}, []);
	};
	var originalResult = calculate(initialWordsWithComputedWith);
	var findLongestLine = (words) => words.reduce((a, b) => a.width > b.width ? a : b);
	if (!shouldLimitLines || scaleToFit) return originalResult;
	if (!(originalResult.length > maxLines || findLongestLine(originalResult).width > Number(lineWidth))) return originalResult;
	var suffix = "…";
	var checkOverflow = (index) => {
		var words = calculateWordWidths({
			breakAll,
			style,
			children: text.slice(0, index) + suffix
		}).wordsWithComputedWidth;
		var result$1 = calculate(words);
		return [result$1.length > maxLines || findLongestLine(result$1).width > Number(lineWidth), result$1];
	};
	var start = 0;
	var end = text.length - 1;
	var iterations = 0;
	var trimmedResult;
	while (start <= end && iterations <= text.length - 1) {
		var middle = Math.floor((start + end) / 2);
		var [doesPrevOverflow, result] = checkOverflow(middle - 1);
		var [doesMiddleOverflow] = checkOverflow(middle);
		if (!doesPrevOverflow && !doesMiddleOverflow) start = middle + 1;
		if (doesPrevOverflow && doesMiddleOverflow) end = middle - 1;
		if (!doesPrevOverflow && doesMiddleOverflow) {
			trimmedResult = result;
			break;
		}
		iterations++;
	}
	return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = (children) => {
	return [{ words: !isNullish(children) ? children.toString().split(BREAKING_SPACES) : [] }];
};
var getWordsByLines = (_ref4) => {
	var { width, scaleToFit, children, style, breakAll, maxLines } = _ref4;
	if ((width || scaleToFit) && !Global.isSsr) {
		var wordsWithComputedWidth, spaceWidth;
		var wordWidths = calculateWordWidths({
			breakAll,
			children,
			style
		});
		if (wordWidths) {
			var { wordsWithComputedWidth: wcw, spaceWidth: sw } = wordWidths;
			wordsWithComputedWidth = wcw;
			spaceWidth = sw;
		} else return getWordsWithoutCalculate(children);
		return calculateWordsByLines({
			breakAll,
			children,
			maxLines,
			style
		}, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
	}
	return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = "#808080";
var Text = /* @__PURE__ */ forwardRef((_ref5, ref) => {
	var { x: propsX = 0, y: propsY = 0, lineHeight = "1em", capHeight = "0.71em", scaleToFit = false, textAnchor = "start", verticalAnchor = "end", fill = DEFAULT_FILL } = _ref5, props = _objectWithoutProperties$7(_ref5, _excluded$7);
	var wordsByLines = useMemo(() => {
		return getWordsByLines({
			breakAll: props.breakAll,
			children: props.children,
			maxLines: props.maxLines,
			scaleToFit,
			style: props.style,
			width: props.width
		});
	}, [
		props.breakAll,
		props.children,
		props.maxLines,
		scaleToFit,
		props.style,
		props.width
	]);
	var { dx, dy, angle, className, breakAll } = props, textProps = _objectWithoutProperties$7(props, _excluded2$3);
	if (!isNumOrStr(propsX) || !isNumOrStr(propsY) || wordsByLines.length === 0) return null;
	var x = propsX + (isNumber(dx) ? dx : 0);
	var y = propsY + (isNumber(dy) ? dy : 0);
	var startDy;
	switch (verticalAnchor) {
		case "start":
			startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
			break;
		case "middle":
			startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
			break;
		default:
			startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
			break;
	}
	var transforms = [];
	if (scaleToFit) {
		var lineWidth = wordsByLines[0].width;
		var { width } = props;
		transforms.push("scale(".concat(isNumber(width) ? width / lineWidth : 1, ")"));
	}
	if (angle) transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
	if (transforms.length) textProps.transform = transforms.join(" ");
	return /* @__PURE__ */ React$1.createElement("text", _extends$6({}, filterProps(textProps, true), {
		ref,
		x,
		y,
		className: clsx("recharts-text", className),
		textAnchor,
		fill: fill.includes("url") ? DEFAULT_FILL : fill
	}), wordsByLines.map((line$1, index) => {
		var words = line$1.words.join(breakAll ? "" : " ");
		return /* @__PURE__ */ React$1.createElement("tspan", {
			x,
			dy: index === 0 ? startDy : lineHeight,
			key: "".concat(words, "-").concat(index)
		}, words);
	}));
});
Text.displayName = "Text";
var _excluded$6 = ["labelRef"];
function _objectWithoutProperties$6(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$6(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$6(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
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
function _extends$5() {
	return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$5.apply(null, arguments);
}
var CartesianLabelContext = /* @__PURE__ */ createContext(null);
var CartesianLabelContextProvider = (_ref$1) => {
	var { x, y, width, height, children } = _ref$1;
	var viewBox = useMemo(() => ({
		x,
		y,
		width,
		height
	}), [
		x,
		y,
		width,
		height
	]);
	return /* @__PURE__ */ React$1.createElement(CartesianLabelContext.Provider, { value: viewBox }, children);
};
var useCartesianLabelContext = () => {
	var labelChildContext = useContext(CartesianLabelContext);
	var chartContext = useViewBox();
	return labelChildContext || chartContext;
};
var PolarLabelContext = /* @__PURE__ */ createContext(null);
var usePolarLabelContext = () => {
	var labelChildContext = useContext(PolarLabelContext);
	var chartContext = useAppSelector(selectPolarViewBox);
	return labelChildContext || chartContext;
};
var getLabel = (props) => {
	var { value, formatter } = props;
	var label = isNullish(props.children) ? value : props.children;
	if (typeof formatter === "function") return formatter(label);
	return label;
};
var isLabelContentAFunction = (content) => {
	return content != null && typeof content === "function";
};
var getDeltaAngle = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 360);
};
var renderRadialLabel = (labelProps, position, label, attrs, viewBox) => {
	var { offset, className } = labelProps;
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox;
	var radius = (innerRadius + outerRadius) / 2;
	var deltaAngle = getDeltaAngle(startAngle, endAngle);
	var sign = deltaAngle >= 0 ? 1 : -1;
	var labelAngle, direction;
	switch (position) {
		case "insideStart":
			labelAngle = startAngle + sign * offset;
			direction = clockWise;
			break;
		case "insideEnd":
			labelAngle = endAngle - sign * offset;
			direction = !clockWise;
			break;
		case "end":
			labelAngle = endAngle + sign * offset;
			direction = clockWise;
			break;
		default: throw new Error("Unsupported position ".concat(position));
	}
	direction = deltaAngle <= 0 ? direction : !direction;
	var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
	var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
	var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
	var id = isNullish(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
	return /* @__PURE__ */ React$1.createElement("text", _extends$5({}, attrs, {
		dominantBaseline: "central",
		className: clsx("recharts-radial-bar-label", className)
	}), /* @__PURE__ */ React$1.createElement("defs", null, /* @__PURE__ */ React$1.createElement("path", {
		id,
		d: path
	})), /* @__PURE__ */ React$1.createElement("textPath", { xlinkHref: "#".concat(id) }, label));
};
var getAttrsOfPolarLabel = (viewBox, offset, position) => {
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = viewBox;
	var midAngle = (startAngle + endAngle) / 2;
	if (position === "outside") {
		var { x: _x, y: _y } = polarToCartesian(cx, cy, outerRadius + offset, midAngle);
		return {
			x: _x,
			y: _y,
			textAnchor: _x >= cx ? "start" : "end",
			verticalAnchor: "middle"
		};
	}
	if (position === "center") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
	if (position === "centerTop") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "start"
	};
	if (position === "centerBottom") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "end"
	};
	var { x, y } = polarToCartesian(cx, cy, (innerRadius + outerRadius) / 2, midAngle);
	return {
		x,
		y,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
};
var isPolar = (viewBox) => "cx" in viewBox && isNumber(viewBox.cx);
var getAttrsOfCartesianLabel = (props, viewBox) => {
	var { parentViewBox: parentViewBoxFromProps, offset, position } = props;
	var parentViewBox;
	if (parentViewBoxFromProps != null && !isPolar(parentViewBoxFromProps)) parentViewBox = parentViewBoxFromProps;
	var { x, y, width, height } = viewBox;
	var verticalSign = height >= 0 ? 1 : -1;
	var verticalOffset = verticalSign * offset;
	var verticalEnd = verticalSign > 0 ? "end" : "start";
	var verticalStart = verticalSign > 0 ? "start" : "end";
	var horizontalSign = width >= 0 ? 1 : -1;
	var horizontalOffset = horizontalSign * offset;
	var horizontalEnd = horizontalSign > 0 ? "end" : "start";
	var horizontalStart = horizontalSign > 0 ? "start" : "end";
	if (position === "top") return _objectSpread$5(_objectSpread$5({}, {
		x: x + width / 2,
		y: y - verticalSign * offset,
		textAnchor: "middle",
		verticalAnchor: verticalEnd
	}), parentViewBox ? {
		height: Math.max(y - parentViewBox.y, 0),
		width
	} : {});
	if (position === "bottom") return _objectSpread$5(_objectSpread$5({}, {
		x: x + width / 2,
		y: y + height + verticalOffset,
		textAnchor: "middle",
		verticalAnchor: verticalStart
	}), parentViewBox ? {
		height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
		width
	} : {});
	if (position === "left") {
		var _attrs2 = {
			x: x - horizontalOffset,
			y: y + height / 2,
			textAnchor: horizontalEnd,
			verticalAnchor: "middle"
		};
		return _objectSpread$5(_objectSpread$5({}, _attrs2), parentViewBox ? {
			width: Math.max(_attrs2.x - parentViewBox.x, 0),
			height
		} : {});
	}
	if (position === "right") {
		var _attrs3 = {
			x: x + width + horizontalOffset,
			y: y + height / 2,
			textAnchor: horizontalStart,
			verticalAnchor: "middle"
		};
		return _objectSpread$5(_objectSpread$5({}, _attrs3), parentViewBox ? {
			width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
			height
		} : {});
	}
	var sizeAttrs = parentViewBox ? {
		width,
		height
	} : {};
	if (position === "insideLeft") return _objectSpread$5({
		x: x + horizontalOffset,
		y: y + height / 2,
		textAnchor: horizontalStart,
		verticalAnchor: "middle"
	}, sizeAttrs);
	if (position === "insideRight") return _objectSpread$5({
		x: x + width - horizontalOffset,
		y: y + height / 2,
		textAnchor: horizontalEnd,
		verticalAnchor: "middle"
	}, sizeAttrs);
	if (position === "insideTop") return _objectSpread$5({
		x: x + width / 2,
		y: y + verticalOffset,
		textAnchor: "middle",
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideBottom") return _objectSpread$5({
		x: x + width / 2,
		y: y + height - verticalOffset,
		textAnchor: "middle",
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (position === "insideTopLeft") return _objectSpread$5({
		x: x + horizontalOffset,
		y: y + verticalOffset,
		textAnchor: horizontalStart,
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideTopRight") return _objectSpread$5({
		x: x + width - horizontalOffset,
		y: y + verticalOffset,
		textAnchor: horizontalEnd,
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideBottomLeft") return _objectSpread$5({
		x: x + horizontalOffset,
		y: y + height - verticalOffset,
		textAnchor: horizontalStart,
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (position === "insideBottomRight") return _objectSpread$5({
		x: x + width - horizontalOffset,
		y: y + height - verticalOffset,
		textAnchor: horizontalEnd,
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (!!position && typeof position === "object" && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) return _objectSpread$5({
		x: x + getPercentValue(position.x, width),
		y: y + getPercentValue(position.y, height),
		textAnchor: "end",
		verticalAnchor: "end"
	}, sizeAttrs);
	return _objectSpread$5({
		x: x + width / 2,
		y: y + height / 2,
		textAnchor: "middle",
		verticalAnchor: "middle"
	}, sizeAttrs);
};
var defaultLabelProps = { offset: 5 };
function Label(outerProps) {
	var props = resolveDefaultProps(outerProps, defaultLabelProps);
	var { viewBox: viewBoxFromProps, position, value, children, content, className = "", textBreakAll, labelRef } = props;
	var polarViewBox = usePolarLabelContext();
	var cartesianViewBox = useCartesianLabelContext();
	var viewBox = viewBoxFromProps || (position === "center" ? cartesianViewBox : polarViewBox !== null && polarViewBox !== void 0 ? polarViewBox : cartesianViewBox);
	if (!viewBox || isNullish(value) && isNullish(children) && !/* @__PURE__ */ isValidElement(content) && typeof content !== "function") return null;
	var propsWithViewBox = _objectSpread$5(_objectSpread$5({}, props), {}, { viewBox });
	if (/* @__PURE__ */ isValidElement(content)) {
		var { labelRef: _ } = propsWithViewBox;
		return /* @__PURE__ */ cloneElement(content, _objectWithoutProperties$6(propsWithViewBox, _excluded$6));
	}
	var label;
	if (typeof content === "function") {
		label = /* @__PURE__ */ createElement(content, propsWithViewBox);
		if (/* @__PURE__ */ isValidElement(label)) return label;
	} else label = getLabel(props);
	var isPolarLabel = isPolar(viewBox);
	var attrs = filterProps(props, true);
	if (isPolarLabel && (position === "insideStart" || position === "insideEnd" || position === "end")) return renderRadialLabel(props, position, label, attrs, viewBox);
	var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(viewBox, props.offset, props.position) : getAttrsOfCartesianLabel(props, viewBox);
	return /* @__PURE__ */ React$1.createElement(Text, _extends$5({
		ref: labelRef,
		className: clsx("recharts-label", className)
	}, attrs, positionAttrs, { breakAll: textBreakAll }), label);
}
Label.displayName = "Label";
var parseLabel = (label, viewBox, labelRef) => {
	if (!label) return null;
	var commonProps = {
		viewBox,
		labelRef
	};
	if (label === true) return /* @__PURE__ */ React$1.createElement(Label, _extends$5({ key: "label-implicit" }, commonProps));
	if (isNumOrStr(label)) return /* @__PURE__ */ React$1.createElement(Label, _extends$5({
		key: "label-implicit",
		value: label
	}, commonProps));
	if (/* @__PURE__ */ isValidElement(label)) {
		if (label.type === Label) return /* @__PURE__ */ cloneElement(label, _objectSpread$5({ key: "label-implicit" }, commonProps));
		return /* @__PURE__ */ React$1.createElement(Label, _extends$5({
			key: "label-implicit",
			content: label
		}, commonProps));
	}
	if (isLabelContentAFunction(label)) return /* @__PURE__ */ React$1.createElement(Label, _extends$5({
		key: "label-implicit",
		content: label
	}, commonProps));
	if (label && typeof label === "object") return /* @__PURE__ */ React$1.createElement(Label, _extends$5({}, label, { key: "label-implicit" }, commonProps));
	return null;
};
function CartesianLabelFromLabelProp(_ref3) {
	var { label } = _ref3;
	return parseLabel(label, useCartesianLabelContext()) || null;
}
var _excluded$5 = ["valueAccessor"], _excluded2$2 = [
	"dataKey",
	"clockWise",
	"id",
	"textBreakAll"
];
function _extends$4() {
	return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$4.apply(null, arguments);
}
function _objectWithoutProperties$5(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$5(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$5(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var defaultAccessor = (entry) => Array.isArray(entry.value) ? last(entry.value) : entry.value;
var CartesianLabelListContext = /* @__PURE__ */ createContext(void 0);
var CartesianLabelListContextProvider = CartesianLabelListContext.Provider;
var PolarLabelListContext = /* @__PURE__ */ createContext(void 0);
PolarLabelListContext.Provider;
function useCartesianLabelListContext() {
	return useContext(CartesianLabelListContext);
}
function usePolarLabelListContext() {
	return useContext(PolarLabelListContext);
}
function LabelList(_ref$1) {
	var { valueAccessor = defaultAccessor } = _ref$1, restProps = _objectWithoutProperties$5(_ref$1, _excluded$5);
	var { dataKey, clockWise, id, textBreakAll } = restProps, others = _objectWithoutProperties$5(restProps, _excluded2$2);
	var cartesianData = useCartesianLabelListContext();
	var polarData = usePolarLabelListContext();
	var data = cartesianData || polarData;
	if (!data || !data.length) return null;
	return /* @__PURE__ */ React$1.createElement(Layer, { className: "recharts-label-list" }, data.map((entry, index) => {
		var _restProps$fill;
		var value = isNullish(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
		var idProps = isNullish(id) ? {} : { id: "".concat(id, "-").concat(index) };
		return /* @__PURE__ */ React$1.createElement(Label, _extends$4({}, filterProps(entry, true), others, idProps, {
			fill: (_restProps$fill = restProps.fill) !== null && _restProps$fill !== void 0 ? _restProps$fill : entry.fill,
			parentViewBox: entry.parentViewBox,
			value,
			textBreakAll,
			viewBox: entry.viewBox,
			key: "label-".concat(index),
			index
		}));
	}));
}
LabelList.displayName = "LabelList";
function LabelListFromLabelProp(_ref2) {
	var { label } = _ref2;
	if (!label) return null;
	if (label === true) return /* @__PURE__ */ React$1.createElement(LabelList, { key: "labelList-implicit" });
	if (/* @__PURE__ */ React$1.isValidElement(label) || isLabelContentAFunction(label)) return /* @__PURE__ */ React$1.createElement(LabelList, {
		key: "labelList-implicit",
		content: label
	});
	if (typeof label === "object") return /* @__PURE__ */ React$1.createElement(LabelList, _extends$4({ key: "labelList-implicit" }, label, { type: String(label.type) }));
	return null;
}
var polarAxisSlice = createSlice({
	name: "polarAxis",
	initialState: {
		radiusAxis: {},
		angleAxis: {}
	},
	reducers: {
		addRadiusAxis(state, action) {
			state.radiusAxis[action.payload.id] = castDraft(action.payload);
		},
		removeRadiusAxis(state, action) {
			delete state.radiusAxis[action.payload.id];
		},
		addAngleAxis(state, action) {
			state.angleAxis[action.payload.id] = castDraft(action.payload);
		},
		removeAngleAxis(state, action) {
			delete state.angleAxis[action.payload.id];
		}
	}
});
var { addRadiusAxis, removeRadiusAxis, addAngleAxis, removeAngleAxis } = polarAxisSlice.actions;
var polarAxisReducer = polarAxisSlice.reducer;
function SetTooltipEntrySettings(_ref$1) {
	var { fn, args } = _ref$1;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	useEffect(() => {
		if (isPanorama) return;
		var tooltipEntrySettings = fn(args);
		dispatch(addTooltipEntrySettings(tooltipEntrySettings));
		return () => {
			dispatch(removeTooltipEntrySettings(tooltipEntrySettings));
		};
	}, [
		fn,
		args,
		dispatch,
		isPanorama
	]);
	return null;
}
var noop$1 = () => {};
function SetLegendPayload(_ref$1) {
	var { legendPayload } = _ref$1;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	useEffect(() => {
		if (isPanorama) return noop$1;
		dispatch(addLegendPayload(legendPayload));
		return () => {
			dispatch(removeLegendPayload(legendPayload));
		};
	}, [
		dispatch,
		isPanorama,
		legendPayload
	]);
	return null;
}
var _ref;
var useIdFallback = () => {
	var [id] = React$1.useState(() => uniqueId("uid-"));
	return id;
};
var useId$1 = (_ref = React$1["useId".toString()]) !== null && _ref !== void 0 ? _ref : useIdFallback;
function useUniqueId(prefix, customId) {
	var generatedId = useId$1();
	if (customId) return customId;
	return prefix ? "".concat(prefix, "-").concat(generatedId) : generatedId;
}
var GraphicalItemIdContext = /* @__PURE__ */ createContext(void 0);
var RegisterGraphicalItemId = (_ref$1) => {
	var { id, type, children } = _ref$1;
	var resolvedId = useUniqueId("recharts-".concat(type), id);
	return /* @__PURE__ */ React$1.createElement(GraphicalItemIdContext.Provider, { value: resolvedId }, children(resolvedId));
};
var graphicalItemsSlice = createSlice({
	name: "graphicalItems",
	initialState: {
		cartesianItems: [],
		polarItems: []
	},
	reducers: {
		addCartesianGraphicalItem(state, action) {
			state.cartesianItems.push(castDraft(action.payload));
		},
		replaceCartesianGraphicalItem(state, action) {
			var { prev, next } = action.payload;
			var index = current(state).cartesianItems.indexOf(castDraft(prev));
			if (index > -1) state.cartesianItems[index] = castDraft(next);
		},
		removeCartesianGraphicalItem(state, action) {
			var index = current(state).cartesianItems.indexOf(castDraft(action.payload));
			if (index > -1) state.cartesianItems.splice(index, 1);
		},
		addPolarGraphicalItem(state, action) {
			state.polarItems.push(castDraft(action.payload));
		},
		removePolarGraphicalItem(state, action) {
			var index = current(state).polarItems.indexOf(castDraft(action.payload));
			if (index > -1) state.polarItems.splice(index, 1);
		}
	}
});
var { addCartesianGraphicalItem, replaceCartesianGraphicalItem, removeCartesianGraphicalItem, addPolarGraphicalItem, removePolarGraphicalItem } = graphicalItemsSlice.actions;
var graphicalItemsReducer = graphicalItemsSlice.reducer;
function SetCartesianGraphicalItem(props) {
	var dispatch = useAppDispatch();
	var prevPropsRef = useRef(null);
	useEffect(() => {
		if (prevPropsRef.current === null) dispatch(addCartesianGraphicalItem(props));
		else if (prevPropsRef.current !== props) dispatch(replaceCartesianGraphicalItem({
			prev: prevPropsRef.current,
			next: props
		}));
		prevPropsRef.current = props;
	}, [dispatch, props]);
	useEffect(() => {
		return () => {
			if (prevPropsRef.current) {
				dispatch(removeCartesianGraphicalItem(prevPropsRef.current));
				prevPropsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
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
var cartesianAxisSlice = createSlice({
	name: "cartesianAxis",
	initialState: {
		xAxis: {},
		yAxis: {},
		zAxis: {}
	},
	reducers: {
		addXAxis(state, action) {
			state.xAxis[action.payload.id] = castDraft(action.payload);
		},
		removeXAxis(state, action) {
			delete state.xAxis[action.payload.id];
		},
		addYAxis(state, action) {
			state.yAxis[action.payload.id] = castDraft(action.payload);
		},
		removeYAxis(state, action) {
			delete state.yAxis[action.payload.id];
		},
		addZAxis(state, action) {
			state.zAxis[action.payload.id] = castDraft(action.payload);
		},
		removeZAxis(state, action) {
			delete state.zAxis[action.payload.id];
		},
		updateYAxisWidth(state, action) {
			var { id, width } = action.payload;
			if (state.yAxis[id]) state.yAxis[id] = _objectSpread$4(_objectSpread$4({}, state.yAxis[id]), {}, { width });
		}
	}
});
var { addXAxis, removeXAxis, addYAxis, removeYAxis, addZAxis, removeZAxis, updateYAxisWidth } = cartesianAxisSlice.actions;
var cartesianAxisReducer = cartesianAxisSlice.reducer;
var selectPlotArea = createSelector([
	createSelector([selectChartOffsetInternal], (offsetInternal) => {
		if (!offsetInternal) return;
		return {
			top: offsetInternal.top,
			bottom: offsetInternal.bottom,
			left: offsetInternal.left,
			right: offsetInternal.right
		};
	}),
	selectChartWidth,
	selectChartHeight
], (offset, chartWidth, chartHeight) => {
	if (!offset || chartWidth == null || chartHeight == null) return;
	return {
		x: offset.left,
		y: offset.top,
		width: Math.max(0, chartWidth - offset.left - offset.right),
		height: Math.max(0, chartHeight - offset.top - offset.bottom)
	};
});
var usePlotArea = () => {
	return useAppSelector(selectPlotArea);
};
var useActiveTooltipDataPoints = () => {
	return useAppSelector(selectActiveTooltipDataPoints);
};
var errorBarSlice = createSlice({
	name: "errorBars",
	initialState: {},
	reducers: {
		addErrorBar: (state, action) => {
			var { itemId, errorBar } = action.payload;
			if (!state[itemId]) state[itemId] = [];
			state[itemId].push(errorBar);
		},
		replaceErrorBar: (state, action) => {
			var { itemId, prev, next } = action.payload;
			if (state[itemId]) state[itemId] = state[itemId].map((e) => e.dataKey === prev.dataKey && e.direction === prev.direction ? next : e);
		},
		removeErrorBar: (state, action) => {
			var { itemId, errorBar } = action.payload;
			if (state[itemId]) state[itemId] = state[itemId].filter((e) => e.dataKey !== errorBar.dataKey || e.direction !== errorBar.direction);
		}
	}
});
var { addErrorBar, replaceErrorBar, removeErrorBar } = errorBarSlice.actions;
var errorBarReducer = errorBarSlice.reducer;
function useNeedsClip(xAxisId, yAxisId) {
	var _xAxis$allowDataOverf, _yAxis$allowDataOverf;
	var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
	var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
	var needClipX = (_xAxis$allowDataOverf = xAxis === null || xAxis === void 0 ? void 0 : xAxis.allowDataOverflow) !== null && _xAxis$allowDataOverf !== void 0 ? _xAxis$allowDataOverf : implicitXAxis.allowDataOverflow;
	var needClipY = (_yAxis$allowDataOverf = yAxis === null || yAxis === void 0 ? void 0 : yAxis.allowDataOverflow) !== null && _yAxis$allowDataOverf !== void 0 ? _yAxis$allowDataOverf : implicitYAxis.allowDataOverflow;
	return {
		needClip: needClipX || needClipY,
		needClipX,
		needClipY
	};
}
function GraphicalItemClipPath(_ref$1) {
	var { xAxisId, yAxisId, clipPathId } = _ref$1;
	var plotArea = usePlotArea();
	var { needClipX, needClipY, needClip } = useNeedsClip(xAxisId, yAxisId);
	if (!needClip) return null;
	var { x, y, width, height } = plotArea;
	return /* @__PURE__ */ React$1.createElement("clipPath", { id: "clipPath-".concat(clipPathId) }, /* @__PURE__ */ React$1.createElement("rect", {
		x: needClipX ? x : x - width / 2,
		y: needClipY ? y : y - height / 2,
		width: needClipX ? width : width * 2,
		height: needClipY ? height : height * 2
	}));
}
var ChartDataContextProvider = (props) => {
	var { chartData } = props;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	useEffect(() => {
		if (isPanorama) return () => {};
		dispatch(setChartData(chartData));
		return () => {
			dispatch(setChartData(void 0));
		};
	}, [
		chartData,
		dispatch,
		isPanorama
	]);
	return null;
};
var initialState$2 = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
};
var brushSlice = createSlice({
	name: "brush",
	initialState: initialState$2,
	reducers: { setBrushSettings(_state, action) {
		if (action.payload == null) return initialState$2;
		return action.payload;
	} }
});
var { setBrushSettings } = brushSlice.actions;
var brushReducer = brushSlice.reducer;
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
var rectWithPoints = (_ref$1, _ref2) => {
	var { x: x1, y: y1 } = _ref$1;
	var { x: x2, y: y2 } = _ref2;
	return {
		x: Math.min(x1, x2),
		y: Math.min(y1, y2),
		width: Math.abs(x2 - x1),
		height: Math.abs(y2 - y1)
	};
};
var rectWithCoords = (_ref3) => {
	var { x1, y1, x2, y2 } = _ref3;
	return rectWithPoints({
		x: x1,
		y: y1
	}, {
		x: x2,
		y: y2
	});
};
var ScaleHelper = class ScaleHelper {
	static create(obj) {
		return new ScaleHelper(obj);
	}
	constructor(scale) {
		this.scale = scale;
	}
	get domain() {
		return this.scale.domain;
	}
	get range() {
		return this.scale.range;
	}
	get rangeMin() {
		return this.range()[0];
	}
	get rangeMax() {
		return this.range()[1];
	}
	get bandwidth() {
		return this.scale.bandwidth;
	}
	apply(value) {
		var { bandAware, position } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (value === void 0) return;
		if (position) switch (position) {
			case "start": return this.scale(value);
			case "middle":
				var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
				return this.scale(value) + offset;
			case "end":
				var _offset = this.bandwidth ? this.bandwidth() : 0;
				return this.scale(value) + _offset;
			default: return this.scale(value);
		}
		if (bandAware) {
			var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
			return this.scale(value) + _offset2;
		}
		return this.scale(value);
	}
	isInRange(value) {
		var range$2 = this.range();
		var first = range$2[0];
		var last$1 = range$2[range$2.length - 1];
		return first <= last$1 ? value >= first && value <= last$1 : value >= last$1 && value <= first;
	}
};
_defineProperty$3(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = (options) => {
	var scales = Object.keys(options).reduce((res, key) => _objectSpread$3(_objectSpread$3({}, res), {}, { [key]: ScaleHelper.create(options[key]) }), {});
	return _objectSpread$3(_objectSpread$3({}, scales), {}, {
		apply(coord) {
			var { bandAware, position } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			return Object.fromEntries(Object.entries(coord).map((_ref4) => {
				var [label, value] = _ref4;
				return [label, scales[label].apply(value, {
					bandAware,
					position
				})];
			}));
		},
		isInRange(coord) {
			return Object.keys(coord).every((label) => scales[label].isInRange(coord[label]));
		}
	});
};
function normalizeAngle(angle) {
	return (angle % 180 + 180) % 180;
}
var getAngledRectangleWidth = function getAngledRectangleWidth$1(_ref5) {
	var { width, height } = _ref5;
	var angleRadians = normalizeAngle(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) * Math.PI / 180;
	var angleThreshold = Math.atan(height / width);
	var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
	return Math.abs(angledWidth);
};
var referenceElementsSlice = createSlice({
	name: "referenceElements",
	initialState: {
		dots: [],
		areas: [],
		lines: []
	},
	reducers: {
		addDot: (state, action) => {
			state.dots.push(action.payload);
		},
		removeDot: (state, action) => {
			var index = current(state).dots.findIndex((dot) => dot === action.payload);
			if (index !== -1) state.dots.splice(index, 1);
		},
		addArea: (state, action) => {
			state.areas.push(action.payload);
		},
		removeArea: (state, action) => {
			var index = current(state).areas.findIndex((area$1) => area$1 === action.payload);
			if (index !== -1) state.areas.splice(index, 1);
		},
		addLine: (state, action) => {
			state.lines.push(action.payload);
		},
		removeLine: (state, action) => {
			var index = current(state).lines.findIndex((line$1) => line$1 === action.payload);
			if (index !== -1) state.lines.splice(index, 1);
		}
	}
});
var { addDot, removeDot, addArea, removeArea, addLine, removeLine } = referenceElementsSlice.actions;
var referenceElementsReducer = referenceElementsSlice.reducer;
var ClipPathIdContext = /* @__PURE__ */ createContext(void 0);
var ClipPathProvider = (_ref$1) => {
	var { children } = _ref$1;
	var [clipPathId] = useState("".concat(uniqueId("recharts"), "-clip"));
	var plotArea = usePlotArea();
	if (plotArea == null) return null;
	var { x, y, width, height } = plotArea;
	return /* @__PURE__ */ React$1.createElement(ClipPathIdContext.Provider, { value: clipPathId }, /* @__PURE__ */ React$1.createElement("defs", null, /* @__PURE__ */ React$1.createElement("clipPath", { id: clipPathId }, /* @__PURE__ */ React$1.createElement("rect", {
		x,
		y,
		height,
		width
	}))), children);
};
var useClipPathId = () => {
	return useContext(ClipPathIdContext);
};
function shallowEqual(a, b) {
	for (var key in a) if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) return false;
	for (var _key in b) if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a, _key)) return false;
	return true;
}
function getEveryNthWithCondition(array, n, isValid) {
	if (n < 1) return [];
	if (n === 1 && isValid === void 0) return array;
	var result = [];
	for (var i = 0; i < array.length; i += n) if (isValid === void 0 || isValid(array[i]) === true) result.push(array[i]);
	else return;
	return result;
}
function getAngledTickWidth(contentSize, unitSize, angle) {
	return getAngledRectangleWidth({
		width: contentSize.width + unitSize.width,
		height: contentSize.height + unitSize.height
	}, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
	var isWidth = sizeKey === "width";
	var { x, y, width, height } = viewBox;
	if (sign === 1) return {
		start: isWidth ? x : y,
		end: isWidth ? x + width : y + height
	};
	return {
		start: isWidth ? x + width : y + height,
		end: isWidth ? x : y
	};
}
function isVisible(sign, tickPosition, getSize, start, end) {
	if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) return false;
	var size = getSize();
	return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
	return getEveryNthWithCondition(ticks, interval + 1);
}
function getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
	var result = (ticks || []).slice();
	var { start: initialStart, end } = boundaries;
	var index = 0;
	var stepsize = 1;
	var start = initialStart;
	var _loop = function _loop$1() {
		var entry = ticks === null || ticks === void 0 ? void 0 : ticks[index];
		if (entry === void 0) return { v: getEveryNthWithCondition(ticks, stepsize) };
		var i = index;
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(entry, i);
			return size;
		};
		var tickCoord = entry.coordinate;
		var isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);
		if (!isShow) {
			index = 0;
			start = initialStart;
			stepsize += 1;
		}
		if (isShow) {
			start = tickCoord + sign * (getSize() / 2 + minTickGap);
			index += stepsize;
		}
	}, _ret;
	while (stepsize <= result.length) {
		_ret = _loop();
		if (_ret) return _ret.v;
	}
	return [];
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
function getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap) {
	var result = (ticks || []).slice();
	var len = result.length;
	var { start } = boundaries;
	var { end } = boundaries;
	var _loop = function _loop$1(i$1) {
		var entry = result[i$1];
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(entry, i$1);
			return size;
		};
		if (i$1 === len - 1) {
			var gap = sign * (entry.coordinate + sign * getSize() / 2 - end);
			result[i$1] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, { tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate });
		} else result[i$1] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, { tickCoord: entry.coordinate });
		if (isVisible(sign, entry.tickCoord, getSize, start, end)) {
			end = entry.tickCoord - sign * (getSize() / 2 + minTickGap);
			result[i$1] = _objectSpread$2(_objectSpread$2({}, entry), {}, { isShow: true });
		}
	};
	for (var i = len - 1; i >= 0; i--) _loop(i);
	return result;
}
function getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, preserveEnd) {
	var result = (ticks || []).slice();
	var len = result.length;
	var { start, end } = boundaries;
	if (preserveEnd) {
		var tail = ticks[len - 1];
		var tailSize = getTickSize(tail, len - 1);
		var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
		result[len - 1] = tail = _objectSpread$2(_objectSpread$2({}, tail), {}, { tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate });
		if (isVisible(sign, tail.tickCoord, () => tailSize, start, end)) {
			end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
			result[len - 1] = _objectSpread$2(_objectSpread$2({}, tail), {}, { isShow: true });
		}
	}
	var count = preserveEnd ? len - 1 : len;
	var _loop2 = function _loop2$1(i$1) {
		var entry = result[i$1];
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(entry, i$1);
			return size;
		};
		if (i$1 === 0) {
			var gap = sign * (entry.coordinate - sign * getSize() / 2 - start);
			result[i$1] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, { tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate });
		} else result[i$1] = entry = _objectSpread$2(_objectSpread$2({}, entry), {}, { tickCoord: entry.coordinate });
		if (isVisible(sign, entry.tickCoord, getSize, start, end)) {
			start = entry.tickCoord + sign * (getSize() / 2 + minTickGap);
			result[i$1] = _objectSpread$2(_objectSpread$2({}, entry), {}, { isShow: true });
		}
	};
	for (var i = 0; i < count; i++) _loop2(i);
	return result;
}
function getTicks(props, fontSize, letterSpacing) {
	var { tick, ticks, viewBox, minTickGap, orientation, interval, tickFormatter, unit, angle } = props;
	if (!ticks || !ticks.length || !tick) return [];
	if (isNumber(interval) || Global.isSsr) {
		var _getNumberIntervalTic;
		return (_getNumberIntervalTic = getNumberIntervalTicks(ticks, isNumber(interval) ? interval : 0)) !== null && _getNumberIntervalTic !== void 0 ? _getNumberIntervalTic : [];
	}
	var candidates = [];
	var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
	var unitSize = unit && sizeKey === "width" ? getStringSize(unit, {
		fontSize,
		letterSpacing
	}) : {
		width: 0,
		height: 0
	};
	var getTickSize = (content, index) => {
		var value = typeof tickFormatter === "function" ? tickFormatter(content.value, index) : content.value;
		return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
			fontSize,
			letterSpacing
		}), unitSize, angle) : getStringSize(value, {
			fontSize,
			letterSpacing
		})[sizeKey];
	};
	var sign = ticks.length >= 2 ? mathSign(ticks[1].coordinate - ticks[0].coordinate) : 1;
	var boundaries = getTickBoundaries(viewBox, sign, sizeKey);
	if (interval === "equidistantPreserveStart") return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
	if (interval === "preserveStart" || interval === "preserveStartEnd") candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === "preserveStartEnd");
	else candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
	return candidates.filter((entry) => entry.isShow);
}
var getCalculatedYAxisWidth = (_ref$1) => {
	var { ticks, label, labelGapWithTick = 5, tickSize = 0, tickMargin = 0 } = _ref$1;
	var maxTickWidth = 0;
	if (ticks) {
		ticks.forEach((tickNode) => {
			if (tickNode) {
				var bbox = tickNode.getBoundingClientRect();
				if (bbox.width > maxTickWidth) maxTickWidth = bbox.width;
			}
		});
		var labelWidth = label ? label.getBoundingClientRect().width : 0;
		var tickWidth = tickSize + tickMargin;
		var updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (label ? labelGapWithTick : 0);
		return Math.round(updatedYAxisWidth);
	}
	return 0;
};
var _excluded$4 = [
	"axisLine",
	"width",
	"height",
	"className",
	"hide",
	"ticks"
], _excluded2$1 = ["viewBox"], _excluded3$1 = ["viewBox"];
function _objectWithoutProperties$4(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends$3() {
	return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$3.apply(null, arguments);
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
var defaultCartesianAxisProps = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	viewBox: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	orientation: "bottom",
	ticks: [],
	stroke: "#666",
	tickLine: true,
	axisLine: true,
	tick: true,
	mirror: false,
	minTickGap: 5,
	tickSize: 6,
	tickMargin: 2,
	interval: "preserveEnd"
};
function AxisLine(axisLineProps) {
	var { x, y, width, height, orientation, mirror, axisLine, otherSvgProps } = axisLineProps;
	if (!axisLine) return null;
	var props = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, otherSvgProps), filterProps(axisLine, false)), {}, { fill: "none" });
	if (orientation === "top" || orientation === "bottom") {
		var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
		props = _objectSpread$1(_objectSpread$1({}, props), {}, {
			x1: x,
			y1: y + needHeight * height,
			x2: x + width,
			y2: y + needHeight * height
		});
	} else {
		var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
		props = _objectSpread$1(_objectSpread$1({}, props), {}, {
			x1: x + needWidth * width,
			y1: y,
			x2: x + needWidth * width,
			y2: y + height
		});
	}
	return /* @__PURE__ */ React$1.createElement("line", _extends$3({}, props, { className: clsx("recharts-cartesian-axis-line", get(axisLine, "className")) }));
}
function getTickLineCoord(data, x, y, width, height, orientation, tickSize, mirror, tickMargin) {
	var x1, x2, y1, y2, tx, ty;
	var sign = mirror ? -1 : 1;
	var finalTickSize = data.tickSize || tickSize;
	var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
	switch (orientation) {
		case "top":
			x1 = x2 = data.coordinate;
			y2 = y + +!mirror * height;
			y1 = y2 - sign * finalTickSize;
			ty = y1 - sign * tickMargin;
			tx = tickCoord;
			break;
		case "left":
			y1 = y2 = data.coordinate;
			x2 = x + +!mirror * width;
			x1 = x2 - sign * finalTickSize;
			tx = x1 - sign * tickMargin;
			ty = tickCoord;
			break;
		case "right":
			y1 = y2 = data.coordinate;
			x2 = x + +mirror * width;
			x1 = x2 + sign * finalTickSize;
			tx = x1 + sign * tickMargin;
			ty = tickCoord;
			break;
		default:
			x1 = x2 = data.coordinate;
			y2 = y + +mirror * height;
			y1 = y2 + sign * finalTickSize;
			ty = y1 + sign * tickMargin;
			tx = tickCoord;
			break;
	}
	return {
		line: {
			x1,
			y1,
			x2,
			y2
		},
		tick: {
			x: tx,
			y: ty
		}
	};
}
function getTickTextAnchor(orientation, mirror) {
	switch (orientation) {
		case "left": return mirror ? "start" : "end";
		case "right": return mirror ? "end" : "start";
		default: return "middle";
	}
}
function getTickVerticalAnchor(orientation, mirror) {
	switch (orientation) {
		case "left":
		case "right": return "middle";
		case "top": return mirror ? "start" : "end";
		default: return mirror ? "end" : "start";
	}
}
function TickItem(props) {
	var { option, tickProps, value } = props;
	var tickItem;
	var combinedClassName = clsx(tickProps.className, "recharts-cartesian-axis-tick-value");
	if (/* @__PURE__ */ React$1.isValidElement(option)) tickItem = /* @__PURE__ */ React$1.cloneElement(option, _objectSpread$1(_objectSpread$1({}, tickProps), {}, { className: combinedClassName }));
	else if (typeof option === "function") tickItem = option(_objectSpread$1(_objectSpread$1({}, tickProps), {}, { className: combinedClassName }));
	else {
		var className = "recharts-cartesian-axis-tick-value";
		if (typeof option !== "boolean") className = clsx(className, option === null || option === void 0 ? void 0 : option.className);
		tickItem = /* @__PURE__ */ React$1.createElement(Text, _extends$3({}, tickProps, { className }), value);
	}
	return tickItem;
}
function Ticks(props) {
	var { ticks = [], tick, tickLine, stroke, tickFormatter, unit, padding, tickTextProps, orientation, mirror, x, y, width, height, tickSize, tickMargin, fontSize, letterSpacing, getTicksConfig, events } = props;
	var finalTicks = getTicks(_objectSpread$1(_objectSpread$1({}, getTicksConfig), {}, { ticks }), fontSize, letterSpacing);
	var textAnchor = getTickTextAnchor(orientation, mirror);
	var verticalAnchor = getTickVerticalAnchor(orientation, mirror);
	var axisProps = svgPropertiesNoEvents(getTicksConfig);
	var customTickProps = filterProps(tick, false);
	var tickLineProps = _objectSpread$1(_objectSpread$1({}, axisProps), {}, { fill: "none" }, filterProps(tickLine, false));
	var items = finalTicks.map((entry, i) => {
		var { line: lineCoord, tick: tickCoord } = getTickLineCoord(entry, x, y, width, height, orientation, tickSize, mirror, tickMargin);
		var tickProps = _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({
			textAnchor,
			verticalAnchor
		}, axisProps), {}, {
			stroke: "none",
			fill: stroke
		}, customTickProps), tickCoord), {}, {
			index: i,
			payload: entry,
			visibleTicksCount: finalTicks.length,
			tickFormatter,
			padding
		}, tickTextProps);
		return /* @__PURE__ */ React$1.createElement(Layer, _extends$3({
			className: "recharts-cartesian-axis-tick",
			key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
		}, adaptEventsOfChild(events, entry, i)), tickLine && /* @__PURE__ */ React$1.createElement("line", _extends$3({}, tickLineProps, lineCoord, { className: clsx("recharts-cartesian-axis-tick-line", get(tickLine, "className")) })), tick && /* @__PURE__ */ React$1.createElement(TickItem, {
			option: tick,
			tickProps,
			value: "".concat(typeof tickFormatter === "function" ? tickFormatter(entry.value, i) : entry.value).concat(unit || "")
		}));
	});
	if (items.length > 0) return /* @__PURE__ */ React$1.createElement("g", { className: "recharts-cartesian-axis-ticks" }, items);
	return null;
}
var CartesianAxisComponent = /* @__PURE__ */ forwardRef((props, ref) => {
	var { axisLine, width, height, className, hide, ticks } = props, rest = _objectWithoutProperties$4(props, _excluded$4);
	var [fontSize, setFontSize] = useState("");
	var [letterSpacing, setLetterSpacing] = useState("");
	var tickRefs = useRef([]);
	useImperativeHandle(ref, () => ({ getCalculatedWidth: () => {
		var _props$labelRef;
		return getCalculatedYAxisWidth({
			ticks: tickRefs.current,
			label: (_props$labelRef = props.labelRef) === null || _props$labelRef === void 0 ? void 0 : _props$labelRef.current,
			labelGapWithTick: 5,
			tickSize: props.tickSize,
			tickMargin: props.tickMargin
		});
	} }));
	var layerRef = useCallback((el) => {
		if (el) {
			var tickNodes = el.getElementsByClassName("recharts-cartesian-axis-tick-value");
			tickRefs.current = Array.from(tickNodes);
			var tick = tickNodes[0];
			if (tick) {
				var computedStyle = window.getComputedStyle(tick);
				var calculatedFontSize = computedStyle.fontSize;
				var calculatedLetterSpacing = computedStyle.letterSpacing;
				if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
					setFontSize(calculatedFontSize);
					setLetterSpacing(calculatedLetterSpacing);
				}
			}
		}
	}, [fontSize, letterSpacing]);
	if (hide) return null;
	if (width != null && width <= 0 || height != null && height <= 0) return null;
	return /* @__PURE__ */ React$1.createElement(Layer, {
		className: clsx("recharts-cartesian-axis", className),
		ref: layerRef
	}, /* @__PURE__ */ React$1.createElement(AxisLine, {
		x: props.x,
		y: props.y,
		width,
		height,
		orientation: props.orientation,
		mirror: props.mirror,
		axisLine,
		otherSvgProps: svgPropertiesNoEvents(props)
	}), /* @__PURE__ */ React$1.createElement(Ticks, {
		ticks,
		tick: props.tick,
		tickLine: props.tickLine,
		stroke: props.stroke,
		tickFormatter: props.tickFormatter,
		unit: props.unit,
		padding: props.padding,
		tickTextProps: props.tickTextProps,
		orientation: props.orientation,
		mirror: props.mirror,
		x: props.x,
		y: props.y,
		width: props.width,
		height: props.height,
		tickSize: props.tickSize,
		tickMargin: props.tickMargin,
		fontSize,
		letterSpacing,
		getTicksConfig: props,
		events: rest
	}), /* @__PURE__ */ React$1.createElement(CartesianLabelContextProvider, {
		x: props.x,
		y: props.y,
		width: props.width,
		height: props.height
	}, /* @__PURE__ */ React$1.createElement(CartesianLabelFromLabelProp, { label: props.label }), props.children));
});
var MemoCartesianAxis = /* @__PURE__ */ React$1.memo(CartesianAxisComponent, (prevProps, nextProps) => {
	var { viewBox: prevViewBox } = prevProps, prevRestProps = _objectWithoutProperties$4(prevProps, _excluded2$1);
	var { viewBox: nextViewBox } = nextProps, nextRestProps = _objectWithoutProperties$4(nextProps, _excluded3$1);
	return shallowEqual(prevViewBox, nextViewBox) && shallowEqual(prevRestProps, nextRestProps);
});
var CartesianAxis = /* @__PURE__ */ React$1.forwardRef((outsideProps, ref) => {
	var props = resolveDefaultProps(outsideProps, defaultCartesianAxisProps);
	return /* @__PURE__ */ React$1.createElement(MemoCartesianAxis, _extends$3({}, props, { ref }));
});
CartesianAxis.displayName = "CartesianAxis";
var _excluded$3 = ["dangerouslySetInnerHTML", "ticks"], _excluded2 = ["id"], _excluded3 = ["domain"], _excluded4 = ["domain"];
function _extends$2() {
	return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$2.apply(null, arguments);
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
function SetYAxisSettings(settings) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(addYAxis(settings));
		return () => {
			dispatch(removeYAxis(settings));
		};
	}, [settings, dispatch]);
	return null;
}
var YAxisImpl = (props) => {
	var { yAxisId, className, width, label } = props;
	var cartesianAxisRef = useRef(null);
	var labelRef = useRef(null);
	var viewBox = useAppSelector(selectAxisViewBox);
	var isPanorama = useIsPanorama();
	var dispatch = useAppDispatch();
	var axisType = "yAxis";
	var scale = useAppSelector((state) => selectAxisScale(state, axisType, yAxisId, isPanorama));
	var axisSize = useAppSelector((state) => selectYAxisSize(state, yAxisId));
	var position = useAppSelector((state) => selectYAxisPosition(state, yAxisId));
	var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));
	var synchronizedSettings = useAppSelector((state) => selectYAxisSettingsNoDefaults(state, yAxisId));
	useLayoutEffect(() => {
		if (width !== "auto" || !axisSize || isLabelContentAFunction(label) || /* @__PURE__ */ isValidElement(label) || synchronizedSettings == null) return;
		var axisComponent = cartesianAxisRef.current;
		if (!axisComponent) return;
		var updatedYAxisWidth = axisComponent.getCalculatedWidth();
		if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth)) dispatch(updateYAxisWidth({
			id: yAxisId,
			width: updatedYAxisWidth
		}));
	}, [
		cartesianTickItems,
		axisSize,
		dispatch,
		label,
		yAxisId,
		width,
		synchronizedSettings
	]);
	if (axisSize == null || position == null || synchronizedSettings == null) return null;
	var { dangerouslySetInnerHTML, ticks } = props, allOtherProps = _objectWithoutProperties$3(props, _excluded$3);
	var { id } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$3(synchronizedSettings, _excluded2);
	return /* @__PURE__ */ React$1.createElement(CartesianAxis, _extends$2({}, allOtherProps, restSynchronizedSettings, {
		ref: cartesianAxisRef,
		labelRef,
		scale,
		x: position.x,
		y: position.y,
		tickTextProps: width === "auto" ? { width: void 0 } : { width },
		width: axisSize.width,
		height: axisSize.height,
		className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
		viewBox,
		ticks: cartesianTickItems
	}));
};
var yAxisDefaultProps = {
	allowDataOverflow: implicitYAxis.allowDataOverflow,
	allowDecimals: implicitYAxis.allowDecimals,
	allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
	hide: false,
	mirror: implicitYAxis.mirror,
	orientation: implicitYAxis.orientation,
	padding: implicitYAxis.padding,
	reversed: implicitYAxis.reversed,
	scale: implicitYAxis.scale,
	tickCount: implicitYAxis.tickCount,
	type: implicitYAxis.type,
	width: implicitYAxis.width,
	yAxisId: 0
};
var YAxisSettingsDispatcher = (outsideProps) => {
	var _props$interval, _props$includeHidden, _props$angle, _props$minTickGap, _props$tick;
	var props = resolveDefaultProps(outsideProps, yAxisDefaultProps);
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(SetYAxisSettings, {
		interval: (_props$interval = props.interval) !== null && _props$interval !== void 0 ? _props$interval : "preserveEnd",
		id: props.yAxisId,
		scale: props.scale,
		type: props.type,
		domain: props.domain,
		allowDataOverflow: props.allowDataOverflow,
		dataKey: props.dataKey,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		allowDecimals: props.allowDecimals,
		tickCount: props.tickCount,
		padding: props.padding,
		includeHidden: (_props$includeHidden = props.includeHidden) !== null && _props$includeHidden !== void 0 ? _props$includeHidden : false,
		reversed: props.reversed,
		ticks: props.ticks,
		width: props.width,
		orientation: props.orientation,
		mirror: props.mirror,
		hide: props.hide,
		unit: props.unit,
		name: props.name,
		angle: (_props$angle = props.angle) !== null && _props$angle !== void 0 ? _props$angle : 0,
		minTickGap: (_props$minTickGap = props.minTickGap) !== null && _props$minTickGap !== void 0 ? _props$minTickGap : 5,
		tick: (_props$tick = props.tick) !== null && _props$tick !== void 0 ? _props$tick : true,
		tickFormatter: props.tickFormatter
	}), /* @__PURE__ */ React$1.createElement(YAxisImpl, props));
};
var YAxisMemoComparator = (prevProps, nextProps) => {
	var { domain: prevDomain } = prevProps, prevRest = _objectWithoutProperties$3(prevProps, _excluded3);
	var { domain: nextDomain } = nextProps;
	if (!shallowEqual(prevRest, _objectWithoutProperties$3(nextProps, _excluded4))) return false;
	if (Array.isArray(prevDomain) && prevDomain.length === 2 && Array.isArray(nextDomain) && nextDomain.length === 2) return prevDomain[0] === nextDomain[0] && prevDomain[1] === nextDomain[1];
	return shallowEqual({ domain: prevDomain }, { domain: nextDomain });
};
var YAxis = /* @__PURE__ */ React$1.memo(YAxisSettingsDispatcher, YAxisMemoComparator);
YAxis.displayName = "YAxis";
function defaultNoopBatch(callback) {
	callback();
}
function createListenerCollection() {
	let first = null;
	let last$1 = null;
	return {
		clear() {
			first = null;
			last$1 = null;
		},
		notify() {
			defaultNoopBatch(() => {
				let listener$1 = first;
				while (listener$1) {
					listener$1.callback();
					listener$1 = listener$1.next;
				}
			});
		},
		get() {
			const listeners = [];
			let listener$1 = first;
			while (listener$1) {
				listeners.push(listener$1);
				listener$1 = listener$1.next;
			}
			return listeners;
		},
		subscribe(callback) {
			let isSubscribed = true;
			const listener$1 = last$1 = {
				callback,
				next: null,
				prev: last$1
			};
			if (listener$1.prev) listener$1.prev.next = listener$1;
			else first = listener$1;
			return function unsubscribe() {
				if (!isSubscribed || first === null) return;
				isSubscribed = false;
				if (listener$1.next) listener$1.next.prev = listener$1.prev;
				else last$1 = listener$1.prev;
				if (listener$1.prev) listener$1.prev.next = listener$1.next;
				else first = listener$1.next;
			};
		}
	};
}
var nullListeners = {
	notify() {},
	get: () => []
};
function createSubscription(store, parentSub) {
	let unsubscribe;
	let listeners = nullListeners;
	let subscriptionsAmount = 0;
	let selfSubscribed = false;
	function addNestedSub(listener$1) {
		trySubscribe();
		const cleanupListener = listeners.subscribe(listener$1);
		let removed = false;
		return () => {
			if (!removed) {
				removed = true;
				cleanupListener();
				tryUnsubscribe();
			}
		};
	}
	function notifyNestedSubs() {
		listeners.notify();
	}
	function handleChangeWrapper() {
		if (subscription.onStateChange) subscription.onStateChange();
	}
	function isSubscribed() {
		return selfSubscribed;
	}
	function trySubscribe() {
		subscriptionsAmount++;
		if (!unsubscribe) {
			unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
			listeners = createListenerCollection();
		}
	}
	function tryUnsubscribe() {
		subscriptionsAmount--;
		if (unsubscribe && subscriptionsAmount === 0) {
			unsubscribe();
			unsubscribe = void 0;
			listeners.clear();
			listeners = nullListeners;
		}
	}
	function trySubscribeSelf() {
		if (!selfSubscribed) {
			selfSubscribed = true;
			trySubscribe();
		}
	}
	function tryUnsubscribeSelf() {
		if (selfSubscribed) {
			selfSubscribed = false;
			tryUnsubscribe();
		}
	}
	const subscription = {
		addNestedSub,
		notifyNestedSubs,
		handleChangeWrapper,
		isSubscribed,
		trySubscribe: trySubscribeSelf,
		tryUnsubscribe: tryUnsubscribeSelf,
		getListeners: () => listeners
	};
	return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? React$1.useLayoutEffect : React$1.useEffect;
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
Object.prototype;
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : {};
function getContext() {
	if (!React$1.createContext) return {};
	const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
	let realContext = contextMap.get(React$1.createContext);
	if (!realContext) {
		realContext = React$1.createContext(null);
		if (process.env.NODE_ENV !== "production") realContext.displayName = "ReactRedux";
		contextMap.set(React$1.createContext, realContext);
	}
	return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
function Provider(providerProps) {
	const { children, context, serverState, store } = providerProps;
	const contextValue = React$1.useMemo(() => {
		const baseContextValue = {
			store,
			subscription: createSubscription(store),
			getServerState: serverState ? () => serverState : void 0
		};
		if (process.env.NODE_ENV === "production") return baseContextValue;
		else {
			const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
			return /* @__PURE__ */ Object.assign(baseContextValue, {
				stabilityCheck,
				identityFunctionCheck
			});
		}
	}, [store, serverState]);
	const previousState = React$1.useMemo(() => store.getState(), [store]);
	useIsomorphicLayoutEffect(() => {
		const { subscription } = contextValue;
		subscription.onStateChange = subscription.notifyNestedSubs;
		subscription.trySubscribe();
		if (previousState !== store.getState()) subscription.notifyNestedSubs();
		return () => {
			subscription.tryUnsubscribe();
			subscription.onStateChange = void 0;
		};
	}, [contextValue, previousState]);
	const Context = context || ReactReduxContext;
	return /* @__PURE__ */ React$1.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
var pickChartPointer = (_state, chartPointer) => chartPointer;
var selectActivePropsFromChartPointer = createSelector([
	pickChartPointer,
	selectChartLayout,
	selectPolarViewBox,
	selectTooltipAxisType,
	selectTooltipAxisRangeWithReverse,
	selectTooltipAxisTicks,
	selectOrderedTooltipTicks,
	selectChartOffsetInternal
], combineActiveProps);
var getChartPointer = (event) => {
	var rect = event.currentTarget.getBoundingClientRect();
	var scaleX = rect.width / event.currentTarget.offsetWidth;
	var scaleY = rect.height / event.currentTarget.offsetHeight;
	return {
		chartX: Math.round((event.clientX - rect.left) / scaleX),
		chartY: Math.round((event.clientY - rect.top) / scaleY)
	};
};
var mouseClickAction = createAction("mouseClick");
var mouseClickMiddleware = createListenerMiddleware();
mouseClickMiddleware.startListening({
	actionCreator: mouseClickAction,
	effect: (action, listenerApi) => {
		var mousePointer = action.payload;
		var activeProps = selectActivePropsFromChartPointer(listenerApi.getState(), getChartPointer(mousePointer));
		if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseClickAxisIndex({
			activeIndex: activeProps.activeIndex,
			activeDataKey: void 0,
			activeCoordinate: activeProps.activeCoordinate
		}));
	}
});
var mouseMoveAction = createAction("mouseMove");
var mouseMoveMiddleware = createListenerMiddleware();
mouseMoveMiddleware.startListening({
	actionCreator: mouseMoveAction,
	effect: (action, listenerApi) => {
		var mousePointer = action.payload;
		var state = listenerApi.getState();
		var tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
		var activeProps = selectActivePropsFromChartPointer(state, getChartPointer(mousePointer));
		if (tooltipEventType === "axis") if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseOverAxisIndex({
			activeIndex: activeProps.activeIndex,
			activeDataKey: void 0,
			activeCoordinate: activeProps.activeCoordinate
		}));
		else listenerApi.dispatch(mouseLeaveChart());
	}
});
function reduxDevtoolsJsonStringifyReplacer(_key, value) {
	if (value instanceof HTMLElement) return "HTMLElement <".concat(value.tagName, " class=\"").concat(value.className, "\">");
	if (value === window) return "global.window";
	return value;
}
var initialState = {
	accessibilityLayer: true,
	barCategoryGap: "10%",
	barGap: 4,
	barSize: void 0,
	className: void 0,
	maxBarSize: void 0,
	stackOffset: "none",
	syncId: void 0,
	syncMethod: "index"
};
var rootPropsSlice = createSlice({
	name: "rootProps",
	initialState,
	reducers: { updateOptions: (state, action) => {
		var _action$payload$barGa;
		state.accessibilityLayer = action.payload.accessibilityLayer;
		state.barCategoryGap = action.payload.barCategoryGap;
		state.barGap = (_action$payload$barGa = action.payload.barGap) !== null && _action$payload$barGa !== void 0 ? _action$payload$barGa : initialState.barGap;
		state.barSize = action.payload.barSize;
		state.maxBarSize = action.payload.maxBarSize;
		state.stackOffset = action.payload.stackOffset;
		state.syncId = action.payload.syncId;
		state.syncMethod = action.payload.syncMethod;
		state.className = action.payload.className;
	} }
});
var rootPropsReducer = rootPropsSlice.reducer;
var { updateOptions } = rootPropsSlice.actions;
var polarOptionsSlice = createSlice({
	name: "polarOptions",
	initialState: null,
	reducers: { updatePolarOptions: (_state, action) => {
		return action.payload;
	} }
});
var { updatePolarOptions } = polarOptionsSlice.actions;
var polarOptionsReducer = polarOptionsSlice.reducer;
var keyDownAction = createAction("keyDown");
var focusAction = createAction("focus");
var keyboardEventsMiddleware = createListenerMiddleware();
keyboardEventsMiddleware.startListening({
	actionCreator: keyDownAction,
	effect: (action, listenerApi) => {
		var state = listenerApi.getState();
		if (!(state.rootProps.accessibilityLayer !== false)) return;
		var { keyboardInteraction } = state.tooltip;
		var key = action.payload;
		if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Enter") return;
		var currentIndex = Number(combineActiveTooltipIndex(keyboardInteraction, selectTooltipDisplayedData(state)));
		var tooltipTicks = selectTooltipAxisTicks(state);
		if (key === "Enter") {
			var _coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(keyboardInteraction.index));
			listenerApi.dispatch(setKeyboardInteraction({
				active: !keyboardInteraction.active,
				activeIndex: keyboardInteraction.index,
				activeDataKey: keyboardInteraction.dataKey,
				activeCoordinate: _coordinate
			}));
			return;
		}
		var directionMultiplier = selectChartDirection(state) === "left-to-right" ? 1 : -1;
		var nextIndex = currentIndex + (key === "ArrowRight" ? 1 : -1) * directionMultiplier;
		if (tooltipTicks == null || nextIndex >= tooltipTicks.length || nextIndex < 0) return;
		var coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(nextIndex));
		listenerApi.dispatch(setKeyboardInteraction({
			active: true,
			activeIndex: nextIndex.toString(),
			activeDataKey: void 0,
			activeCoordinate: coordinate
		}));
	}
});
keyboardEventsMiddleware.startListening({
	actionCreator: focusAction,
	effect: (_action, listenerApi) => {
		var state = listenerApi.getState();
		if (!(state.rootProps.accessibilityLayer !== false)) return;
		var { keyboardInteraction } = state.tooltip;
		if (keyboardInteraction.active) return;
		if (keyboardInteraction.index == null) {
			var nextIndex = "0";
			var coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(nextIndex));
			listenerApi.dispatch(setKeyboardInteraction({
				activeDataKey: void 0,
				active: true,
				activeIndex: nextIndex,
				activeCoordinate: coordinate
			}));
		}
	}
});
var externalEventAction = createAction("externalEvent");
var externalEventsMiddleware = createListenerMiddleware();
externalEventsMiddleware.startListening({
	actionCreator: externalEventAction,
	effect: (action, listenerApi) => {
		if (action.payload.handler == null) return;
		var state = listenerApi.getState();
		var nextState = {
			activeCoordinate: selectActiveTooltipCoordinate(state),
			activeDataKey: selectActiveTooltipDataKey(state),
			activeIndex: selectActiveTooltipIndex(state),
			activeLabel: selectActiveLabel(state),
			activeTooltipIndex: selectActiveTooltipIndex(state),
			isTooltipActive: selectIsTooltipActive(state)
		};
		action.payload.handler(nextState, action.payload.reactEvent);
	}
});
var selectTooltipCoordinate = createSelector([
	createSelector([selectTooltipState], (tooltipState) => tooltipState.tooltipItemPayloads),
	selectTooltipPayloadSearcher,
	(_state, tooltipIndex, _dataKey) => tooltipIndex,
	(_state, _tooltipIndex, dataKey) => dataKey
], (allTooltipConfigurations, tooltipPayloadSearcher, tooltipIndex, dataKey) => {
	var mostRelevantTooltipConfiguration = allTooltipConfigurations.find((tooltipConfiguration) => {
		return tooltipConfiguration.settings.dataKey === dataKey;
	});
	if (mostRelevantTooltipConfiguration == null) return;
	var { positions } = mostRelevantTooltipConfiguration;
	if (positions == null) return;
	return tooltipPayloadSearcher(positions, tooltipIndex);
});
var touchEventAction = createAction("touchMove");
var touchEventMiddleware = createListenerMiddleware();
touchEventMiddleware.startListening({
	actionCreator: touchEventAction,
	effect: (action, listenerApi) => {
		var touchEvent = action.payload;
		var state = listenerApi.getState();
		var tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
		if (tooltipEventType === "axis") {
			var activeProps = selectActivePropsFromChartPointer(state, getChartPointer({
				clientX: touchEvent.touches[0].clientX,
				clientY: touchEvent.touches[0].clientY,
				currentTarget: touchEvent.currentTarget
			}));
			if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseOverAxisIndex({
				activeIndex: activeProps.activeIndex,
				activeDataKey: void 0,
				activeCoordinate: activeProps.activeCoordinate
			}));
		} else if (tooltipEventType === "item") {
			var _target$getAttribute;
			var touch = touchEvent.touches[0];
			var target = document.elementFromPoint(touch.clientX, touch.clientY);
			if (!target || !target.getAttribute) return;
			var itemIndex = target.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
			var dataKey = (_target$getAttribute = target.getAttribute("data-recharts-item-data-key")) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : void 0;
			var coordinate = selectTooltipCoordinate(listenerApi.getState(), itemIndex, dataKey);
			listenerApi.dispatch(setActiveMouseOverItemIndex({
				activeDataKey: dataKey,
				activeIndex: itemIndex,
				activeCoordinate: coordinate
			}));
		}
	}
});
var rootReducer = combineReducers({
	brush: brushReducer,
	cartesianAxis: cartesianAxisReducer,
	chartData: chartDataReducer,
	errorBars: errorBarReducer,
	graphicalItems: graphicalItemsReducer,
	layout: chartLayoutReducer,
	legend: legendReducer,
	options: optionsReducer,
	polarAxis: polarAxisReducer,
	polarOptions: polarOptionsReducer,
	referenceElements: referenceElementsReducer,
	rootProps: rootPropsReducer,
	tooltip: tooltipReducer
});
var createRechartsStore = function createRechartsStore$1(preloadedState) {
	var chartName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([
			mouseClickMiddleware.middleware,
			mouseMoveMiddleware.middleware,
			keyboardEventsMiddleware.middleware,
			externalEventsMiddleware.middleware,
			touchEventMiddleware.middleware
		]),
		devTools: Global.devToolsEnabled && {
			serialize: { replacer: reduxDevtoolsJsonStringifyReplacer },
			name: "recharts-".concat(chartName)
		}
	});
};
function RechartsStoreProvider(_ref$1) {
	var { preloadedState, children, reduxStoreName } = _ref$1;
	var isPanorama = useIsPanorama();
	var storeRef = useRef(null);
	if (isPanorama) return children;
	if (storeRef.current == null) storeRef.current = createRechartsStore(preloadedState, reduxStoreName);
	var nonNullContext = RechartsReduxContext;
	return /* @__PURE__ */ React$1.createElement(Provider_default, {
		context: nonNullContext,
		store: storeRef.current
	}, children);
}
function ReportMainChartProps(_ref$1) {
	var { layout, width, height, margin } = _ref$1;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	useEffect(() => {
		if (!isPanorama) {
			dispatch(setLayout(layout));
			dispatch(setChartSize({
				width,
				height
			}));
			dispatch(setMargin(margin));
		}
	}, [
		dispatch,
		isPanorama,
		layout,
		width,
		height,
		margin
	]);
	return null;
}
function ReportChartProps(props) {
	var dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(updateOptions(props));
	}, [dispatch, props]);
	return null;
}
var _excluded$2 = ["children"];
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
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
var FULL_WIDTH_AND_HEIGHT = {
	width: "100%",
	height: "100%"
};
var MainChartSurface = /* @__PURE__ */ forwardRef((props, ref) => {
	var width = useChartWidth();
	var height = useChartHeight();
	var hasAccessibilityLayer = useAccessibilityLayer();
	if (!isPositiveNumber(width) || !isPositiveNumber(height)) return null;
	var { children, otherAttributes, title, desc } = props;
	var tabIndex, role;
	if (typeof otherAttributes.tabIndex === "number") tabIndex = otherAttributes.tabIndex;
	else tabIndex = hasAccessibilityLayer ? 0 : void 0;
	if (typeof otherAttributes.role === "string") role = otherAttributes.role;
	else role = hasAccessibilityLayer ? "application" : void 0;
	return /* @__PURE__ */ React$1.createElement(Surface, _extends$1({}, otherAttributes, {
		title,
		desc,
		role,
		tabIndex,
		width,
		height,
		style: FULL_WIDTH_AND_HEIGHT,
		ref
	}), children);
});
var BrushPanoramaSurface = (_ref$1) => {
	var { children } = _ref$1;
	var brushDimensions = useAppSelector(selectBrushDimensions);
	if (!brushDimensions) return null;
	var { width, height, y, x } = brushDimensions;
	return /* @__PURE__ */ React$1.createElement(Surface, {
		width,
		height,
		x,
		y
	}, children);
};
var RootSurface = /* @__PURE__ */ forwardRef((_ref2, ref) => {
	var { children } = _ref2, rest = _objectWithoutProperties$2(_ref2, _excluded$2);
	if (useIsPanorama()) return /* @__PURE__ */ React$1.createElement(BrushPanoramaSurface, null, children);
	return /* @__PURE__ */ React$1.createElement(MainChartSurface, _extends$1({ ref }, rest), children);
});
function useReportScale() {
	var dispatch = useAppDispatch();
	var [ref, setRef] = useState(null);
	var scale = useAppSelector(selectContainerScale);
	useEffect(() => {
		if (ref == null) return;
		var newScale = ref.getBoundingClientRect().width / ref.offsetWidth;
		if (isWellBehavedNumber(newScale) && newScale !== scale) dispatch(setScale(newScale));
	}, [
		ref,
		dispatch,
		scale
	]);
	return setRef;
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
var RechartsWrapper = /* @__PURE__ */ forwardRef((_ref$1, ref) => {
	var { children, className, height, onClick, onContextMenu, onDoubleClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, style, width } = _ref$1;
	var dispatch = useAppDispatch();
	var [tooltipPortal, setTooltipPortal] = useState(null);
	var [legendPortal, setLegendPortal] = useState(null);
	useSynchronisedEventsFromOtherCharts();
	var setScaleRef = useReportScale();
	var innerRef = useCallback((node) => {
		setScaleRef(node);
		if (typeof ref === "function") ref(node);
		setTooltipPortal(node);
		setLegendPortal(node);
	}, [
		setScaleRef,
		ref,
		setTooltipPortal,
		setLegendPortal
	]);
	var myOnClick = useCallback((e) => {
		dispatch(mouseClickAction(e));
		dispatch(externalEventAction({
			handler: onClick,
			reactEvent: e
		}));
	}, [dispatch, onClick]);
	var myOnMouseEnter = useCallback((e) => {
		dispatch(mouseMoveAction(e));
		dispatch(externalEventAction({
			handler: onMouseEnter,
			reactEvent: e
		}));
	}, [dispatch, onMouseEnter]);
	var myOnMouseLeave = useCallback((e) => {
		dispatch(mouseLeaveChart());
		dispatch(externalEventAction({
			handler: onMouseLeave,
			reactEvent: e
		}));
	}, [dispatch, onMouseLeave]);
	var myOnMouseMove = useCallback((e) => {
		dispatch(mouseMoveAction(e));
		dispatch(externalEventAction({
			handler: onMouseMove,
			reactEvent: e
		}));
	}, [dispatch, onMouseMove]);
	var onFocus = useCallback(() => {
		dispatch(focusAction());
	}, [dispatch]);
	var onKeyDown = useCallback((e) => {
		dispatch(keyDownAction(e.key));
	}, [dispatch]);
	var myOnContextMenu = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onContextMenu,
			reactEvent: e
		}));
	}, [dispatch, onContextMenu]);
	var myOnDoubleClick = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onDoubleClick,
			reactEvent: e
		}));
	}, [dispatch, onDoubleClick]);
	var myOnMouseDown = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onMouseDown,
			reactEvent: e
		}));
	}, [dispatch, onMouseDown]);
	var myOnMouseUp = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onMouseUp,
			reactEvent: e
		}));
	}, [dispatch, onMouseUp]);
	var myOnTouchStart = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onTouchStart,
			reactEvent: e
		}));
	}, [dispatch, onTouchStart]);
	var myOnTouchMove = useCallback((e) => {
		dispatch(touchEventAction(e));
		dispatch(externalEventAction({
			handler: onTouchMove,
			reactEvent: e
		}));
	}, [dispatch, onTouchMove]);
	var myOnTouchEnd = useCallback((e) => {
		dispatch(externalEventAction({
			handler: onTouchEnd,
			reactEvent: e
		}));
	}, [dispatch, onTouchEnd]);
	return /* @__PURE__ */ React$1.createElement(TooltipPortalContext.Provider, { value: tooltipPortal }, /* @__PURE__ */ React$1.createElement(LegendPortalContext.Provider, { value: legendPortal }, /* @__PURE__ */ React$1.createElement("div", {
		className: clsx("recharts-wrapper", className),
		style: _objectSpread({
			position: "relative",
			cursor: "default",
			width,
			height
		}, style),
		onClick: myOnClick,
		onContextMenu: myOnContextMenu,
		onDoubleClick: myOnDoubleClick,
		onFocus,
		onKeyDown,
		onMouseDown: myOnMouseDown,
		onMouseEnter: myOnMouseEnter,
		onMouseLeave: myOnMouseLeave,
		onMouseMove: myOnMouseMove,
		onMouseUp: myOnMouseUp,
		onTouchEnd: myOnTouchEnd,
		onTouchMove: myOnTouchMove,
		onTouchStart: myOnTouchStart,
		ref: innerRef
	}, children)));
});
var _excluded$1 = [
	"children",
	"className",
	"width",
	"height",
	"style",
	"compact",
	"title",
	"desc"
];
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
var CategoricalChart = /* @__PURE__ */ forwardRef((props, ref) => {
	var { children, className, width, height, style, compact, title, desc } = props;
	var attrs = svgPropertiesNoEvents(_objectWithoutProperties$1(props, _excluded$1));
	if (compact) return /* @__PURE__ */ React$1.createElement(RootSurface, {
		otherAttributes: attrs,
		title,
		desc
	}, children);
	return /* @__PURE__ */ React$1.createElement(RechartsWrapper, {
		className,
		style,
		width,
		height,
		onClick: props.onClick,
		onMouseLeave: props.onMouseLeave,
		onMouseEnter: props.onMouseEnter,
		onMouseMove: props.onMouseMove,
		onMouseDown: props.onMouseDown,
		onMouseUp: props.onMouseUp,
		onContextMenu: props.onContextMenu,
		onDoubleClick: props.onDoubleClick,
		onTouchStart: props.onTouchStart,
		onTouchMove: props.onTouchMove,
		onTouchEnd: props.onTouchEnd
	}, /* @__PURE__ */ React$1.createElement(RootSurface, {
		otherAttributes: attrs,
		title,
		desc,
		ref
	}, /* @__PURE__ */ React$1.createElement(ClipPathProvider, null, children)));
});
var _excluded = ["width", "height"];
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
var defaultProps = {
	accessibilityLayer: true,
	layout: "horizontal",
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: false,
	syncMethod: "index"
};
var CartesianChart = /* @__PURE__ */ forwardRef(function CartesianChart$1(props, ref) {
	var _categoricalChartProp;
	var rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultProps);
	var { width, height } = rootChartProps, otherCategoricalProps = _objectWithoutProperties(rootChartProps, _excluded);
	if (!isPositiveNumber(width) || !isPositiveNumber(height)) return null;
	var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher, categoricalChartProps } = props;
	var options = {
		chartName,
		defaultTooltipEventType,
		validateTooltipEventTypes,
		tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /* @__PURE__ */ React$1.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: (_categoricalChartProp = categoricalChartProps.id) !== null && _categoricalChartProp !== void 0 ? _categoricalChartProp : chartName
	}, /* @__PURE__ */ React$1.createElement(ChartDataContextProvider, { chartData: categoricalChartProps.data }), /* @__PURE__ */ React$1.createElement(ReportMainChartProps, {
		width,
		height,
		layout: rootChartProps.layout,
		margin: rootChartProps.margin
	}), /* @__PURE__ */ React$1.createElement(ReportChartProps, {
		accessibilityLayer: rootChartProps.accessibilityLayer,
		barCategoryGap: rootChartProps.barCategoryGap,
		maxBarSize: rootChartProps.maxBarSize,
		stackOffset: rootChartProps.stackOffset,
		barGap: rootChartProps.barGap,
		barSize: rootChartProps.barSize,
		syncId: rootChartProps.syncId,
		syncMethod: rootChartProps.syncMethod,
		className: rootChartProps.className
	}), /* @__PURE__ */ React$1.createElement(CategoricalChart, _extends({}, otherCategoricalProps, {
		width,
		height,
		ref
	})));
});
export { isStacked as $, getPercentValue as $t, warn as A, getCateCoordinateOfLine as At, selectAxisPropsNeededForCartesianGridTicksGenerator as B, createSelector as Bt, SetLegendPayload as C, useViewBox as Ct, CartesianLabelContextProvider as D, getBandSizeOfAxis as Dt, LabelListFromLabelProp as E, selectChartOffsetInternal as Et, selectActiveTooltipIndex as F, getValueByDataKey as Ft, selectTicksOfAxis as G, Layer as Gt, selectAxisWithScale as H, useAppSelector as Ht, mouseLeaveItem as I, isCategoricalAxis as It, selectXAxisPosition as J, findAllByType as Jt, selectTicksOfGraphicalItem as K, Surface as Kt, setActiveClickItemIndex as L, truncateByDomain as Lt, arrayTooltipSearcher as M, getNormalizedStackId as Mt, useChartName as N, getTicksOfAxis as Nt, CartesianLabelFromLabelProp as O, getBaseValueOfBar as Ot, selectActiveTooltipDataKey as P, getTooltipNameProp as Pt, selectYAxisSettings as Q, adaptEventsOfChild as Qt, setActiveMouseOverItemIndex as R, useElementOffset as Rt, RegisterGraphicalItemId as S, useOffsetInternal as St, CartesianLabelListContextProvider as T, selectAxisViewBox as Tt, selectCartesianAxisSize as U, getUniqPayload as Ut, selectAxisScale as V, useAppDispatch as Vt, selectStackGroups as W, useLegendPortal as Wt, selectXAxisSettingsNoDefaults as X, svgPropertiesNoEvents as Xt, selectXAxisSettings as Y, isClipDot as Yt, selectXAxisSize as Z, adaptEventHandlers as Zt, useActiveTooltipDataPoints as _, selectChartLayout as _t, getTicks as a, mathSign as an, selectChartDataWithIndexesIfNotInPanorama as at, removeXAxis as b, useChartWidth as bt, addArea as c, useAnimationId as ct, removeLine as d, resolveDefaultProps as dt, interpolate as en, getStackSeriesIdentifier as et, createLabeledScales as f, Curve as ft, useNeedsClip as g, setLegendSize as gt, GraphicalItemClipPath as h, setLegendSettings as ht, defaultCartesianAxisProps as i, isNumber as in, selectRootMaxBarSize as it, Tooltip as j, getCoordinatesOfGrid as jt, ResponsiveContainer as k, getCateCoordinateOfBar as kt, addLine as l, JavascriptAnimate as lt, rectWithPoints as m, Global as mt, YAxis as n, isNullish as nn, selectBarGap as nt, shallowEqual as o, upperFirst as on, Sector as ot, rectWithCoords as p, isWellBehavedNumber as pt, selectUnfilteredCartesianItems as q, filterProps as qt, CartesianAxis as r, isNumOrStr as rn, selectRootBarSize as rt, useClipPathId as s, Rectangle as st, CartesianChart as t, isNan as tn, selectBarCategoryGap as tt, removeArea as u, getTransitionVal as ut, usePlotArea as v, useChartHeight as vt, SetTooltipEntrySettings as w, useIsPanorama as wt, SetCartesianGraphicalItem as x, useMargin as xt, addXAxis as y, useChartLayout as yt, implicitXAxis as z, selectLegendPayload as zt };
