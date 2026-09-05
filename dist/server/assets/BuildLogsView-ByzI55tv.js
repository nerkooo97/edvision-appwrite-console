import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { useMemo } from "react";
function stripAnsiForClipboard(text) {
	return text.replace(/\x1b\[[0-9;]*m/g, "");
}
var ANSI_COLORS = {
	30: "text-gray-800 dark:text-gray-200",
	31: "text-red-600 dark:text-red-400",
	32: "text-green-700 dark:text-green-400",
	33: "text-yellow-700 dark:text-yellow-400",
	34: "text-blue-600 dark:text-blue-400",
	35: "text-purple-600 dark:text-purple-400",
	36: "text-cyan-600 dark:text-cyan-400",
	37: "text-gray-900 dark:text-gray-100",
	90: "text-gray-600 dark:text-gray-400",
	91: "text-red-600 dark:text-red-400",
	92: "text-green-600 dark:text-green-400",
	93: "text-yellow-600 dark:text-yellow-400",
	94: "text-blue-600 dark:text-blue-400",
	95: "text-purple-600 dark:text-purple-400",
	96: "text-cyan-600 dark:text-cyan-400",
	97: "text-gray-900 dark:text-gray-100"
};
function extractTextFromReactNode(node) {
	if (typeof node === "string") return node;
	if (typeof node === "number") return String(node);
	if (React$1.isValidElement(node)) {
		const children = node.props?.children;
		if (typeof children === "string") return children;
		if (Array.isArray(children)) return children.map(extractTextFromReactNode).join("");
	}
	return "";
}
function replaceVercelTriangle(text, currentColor, baseKey) {
	if (!text.includes("▲")) return [currentColor ? /* @__PURE__ */ jsx("span", {
		className: currentColor,
		children: text
	}, baseKey) : text];
	const parts = [];
	const segments = text.split("▲");
	let keyCounter = baseKey;
	for (let i = 0; i < segments.length; i++) {
		if (segments[i]) parts.push(currentColor ? /* @__PURE__ */ jsx("span", {
			className: currentColor,
			children: segments[i]
		}, keyCounter++) : segments[i]);
		if (i < segments.length - 1) parts.push(/* @__PURE__ */ jsx("img", {
			src: "/icons/appwrite.svg",
			alt: "Appwrite",
			className: `inline-block h-[1em] w-[1em] align-middle ${PUBLIC_ICON_MUTED_CLASSES}`
		}, keyCounter++));
	}
	return parts;
}
function parseAnsiLogsWithoutHighlight(text) {
	const ansiRegex = /\x1b\[(\d+(?:;\d+)*)?m/g;
	const parts = [];
	let lastIndex = 0;
	let currentColor = null;
	let match;
	let keyCounter = 0;
	while ((match = ansiRegex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			const textBefore = text.substring(lastIndex, match.index);
			if (textBefore) {
				const processedText = replaceVercelTriangle(textBefore, currentColor, keyCounter);
				parts.push(...processedText);
				keyCounter += processedText.length;
			}
		}
		const code = match[1];
		if (!code || code === "0") currentColor = null;
		else {
			const colorCode = code.split(";").map(Number).find((c) => ANSI_COLORS[c]);
			if (colorCode) currentColor = ANSI_COLORS[colorCode];
		}
		lastIndex = match.index + match[0].length;
	}
	if (lastIndex < text.length) {
		const remainingText = text.substring(lastIndex);
		if (remainingText) {
			const processedText = replaceVercelTriangle(remainingText, currentColor, keyCounter);
			parts.push(...processedText);
		}
	}
	return parts.length > 0 ? parts : [text];
}
function highlightText(text, color, searchTerm, baseKey) {
	const searchLower = searchTerm.toLowerCase();
	const lowerText = text.toLowerCase();
	const parts = [];
	let lastIndex = 0;
	let keyCounter = baseKey;
	while (true) {
		const searchIndex = lowerText.indexOf(searchLower, lastIndex);
		if (searchIndex === -1) {
			if (lastIndex < text.length) {
				const remaining = text.substring(lastIndex);
				if (remaining) {
					const processedText = replaceVercelTriangle(remaining, color, keyCounter);
					parts.push(...processedText);
					keyCounter += processedText.length;
				}
			}
			break;
		}
		if (searchIndex > lastIndex) {
			const beforeMatch = text.substring(lastIndex, searchIndex);
			if (beforeMatch) {
				const processedText = replaceVercelTriangle(beforeMatch, color, keyCounter);
				parts.push(...processedText);
				keyCounter += processedText.length;
			}
		}
		const processedMatch = replaceVercelTriangle(text.substring(searchIndex, searchIndex + searchTerm.length), color, keyCounter);
		parts.push(/* @__PURE__ */ jsx("mark", {
			className: "bg-yellow-200 dark:bg-yellow-900/50 text-foreground",
			children: processedMatch
		}, keyCounter++));
		keyCounter += processedMatch.length;
		lastIndex = searchIndex + searchTerm.length;
	}
	return parts.length > 0 ? parts : [text];
}
function parseAnsiLogs(text, searchTerm) {
	if (!searchTerm || !searchTerm.trim()) return parseAnsiLogsWithoutHighlight(text);
	const coloredSegments = parseAnsiLogsWithoutHighlight(text);
	const highlightedParts = [];
	let keyCounter = 0;
	coloredSegments.forEach((segment) => {
		if (typeof segment === "string") {
			highlightedParts.push(...highlightText(segment, null, searchTerm, keyCounter));
			keyCounter += 1e3;
		} else if (React$1.isValidElement(segment) && segment.type === "span") {
			const textContent = extractTextFromReactNode(segment);
			const className = segment.props?.className || null;
			highlightedParts.push(...highlightText(textContent, className, searchTerm, keyCounter));
			keyCounter += 1e3;
		} else highlightedParts.push(segment);
	});
	return highlightedParts.length > 0 ? highlightedParts : [text];
}
function BuildLogsView({ buildLogs, searchTerm = "", selectedLines = null, onLineClick, lineRefs, emptyMessage = "No build logs available.", className = "", fontSizeClass = "text-[11px] sm:text-[12px]", highlightLineOnHover = false, trailingPadding = true, lineHorizontalPaddingClass }) {
	const t = useT();
	const parsedLogs = useMemo(() => {
		if (!buildLogs) return null;
		const term = searchTerm.trim();
		const allLines = buildLogs.split("\n");
		let linesToDisplay;
		if (term) {
			const searchLower = term.toLowerCase();
			linesToDisplay = allLines.map((line, index) => ({
				line,
				originalLineNumber: index + 1
			})).filter(({ line }) => line.toLowerCase().includes(searchLower));
		} else linesToDisplay = allLines.map((line, index) => ({
			line,
			originalLineNumber: index + 1
		}));
		const lineNumberWidth = `${allLines.length.toString().length + 3}ch`;
		const rowPadding = lineHorizontalPaddingClass ?? `ps-4 sm:ps-6 ${trailingPadding ? "pe-4 sm:pe-6" : "pe-0"}`;
		const gridStyle = { gridTemplateColumns: `${lineNumberWidth} minmax(0, 1fr)` };
		const gutterSpacerRow = (position) => /* @__PURE__ */ jsxs("div", {
			className: `grid min-h-5 min-w-0 items-stretch gap-4 ${rowPadding}`,
			style: gridStyle,
			"aria-hidden": true,
			children: [/* @__PURE__ */ jsx("div", { className: "border-e border-border/50 pe-2" }), /* @__PURE__ */ jsx("div", { className: "ps-1" })]
		}, `__gutter-spacer-${position}`);
		const rows = linesToDisplay.map(({ line, originalLineNumber }, displayIndex) => {
			const parsedLine = parseAnsiLogs(line, term || void 0);
			const isSelected = selectedLines != null && selectedLines.has(originalLineNumber);
			const isClickable = !!onLineClick;
			return /* @__PURE__ */ jsxs("div", {
				ref: (el) => {
					if (el && lineRefs) lineRefs.current.set(originalLineNumber, el);
					else if (lineRefs) lineRefs.current.delete(originalLineNumber);
				},
				className: `grid min-w-0 items-stretch gap-4 transition-colors ${rowPadding} ${isSelected ? "bg-yellow-100/50 dark:bg-yellow-900/20" : isClickable || highlightLineOnHover ? "hover:bg-muted/30" : ""}`,
				style: gridStyle,
				title: highlightLineOnHover ? `${t("Line")} ${originalLineNumber}` : void 0,
				children: [/* @__PURE__ */ jsx("div", {
					onClick: isClickable ? (e) => {
						e.preventDefault();
						onLineClick(originalLineNumber, e);
					} : void 0,
					className: `flex select-none items-start justify-end border-e border-border/50 pe-2 font-mono tabular-nums transition-colors ${fontSizeClass} ${isSelected ? "text-yellow-600 dark:text-yellow-400 font-semibold" : "text-muted-foreground"} ${isClickable ? "cursor-pointer" : ""}`,
					title: isClickable ? `${t("Select line")} ${originalLineNumber} ${t("(Shift for range, ⌘/Ctrl to toggle)")}` : void 0,
					children: originalLineNumber
				}), /* @__PURE__ */ jsx("div", {
					className: `min-w-0 break-all ps-1 font-mono ${fontSizeClass}`,
					children: parsedLine
				})]
			}, `${originalLineNumber}-${displayIndex}`);
		});
		return /* @__PURE__ */ jsxs(Fragment, { children: [
			gutterSpacerRow("top"),
			rows,
			gutterSpacerRow("bottom")
		] });
	}, [
		buildLogs,
		searchTerm,
		selectedLines,
		onLineClick,
		lineRefs,
		fontSizeClass,
		highlightLineOnHover,
		trailingPadding,
		lineHorizontalPaddingClass,
		t
	]);
	if (!buildLogs) return /* @__PURE__ */ jsx("div", {
		className: `py-4 text-[12px] sm:text-[13px] text-muted-foreground ${lineHorizontalPaddingClass !== void 0 ? "px-0" : trailingPadding ? "px-4 sm:px-6" : "ps-4 sm:ps-6 pe-0"} ${className}`,
		children: typeof emptyMessage === "string" ? t(emptyMessage) : emptyMessage
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("min-w-0", className),
		children: /* @__PURE__ */ jsx("div", {
			className: `${fontSizeClass} font-mono text-foreground flex min-w-0 max-w-full flex-col overflow-x-auto break-all`,
			children: parsedLogs
		})
	});
}
export { stripAnsiForClipboard as n, BuildLogsView as t };
