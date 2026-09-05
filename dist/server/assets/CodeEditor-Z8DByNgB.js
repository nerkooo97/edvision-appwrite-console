import { i as isResolvedThemeDarkChrome, r as isHtmlDarkChrome } from "./html-theme-zz5wyKPq.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as monacoSyntaxHighlightRules } from "./code-syntax-theme-CApDi7y8.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { jsx } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
var MONACO_THEME_PREFIX = "app-console";
var EDITOR_SURFACE_CSS = "var(--editor-bg, var(--background))";
var FALLBACK_DARK_BG = "#141416";
var FALLBACK_LIGHT_BG = "#ffffff";
var CONSOLE_THEME_CLASSES = [
	"light",
	"dark",
	"crazy",
	"stealth",
	"premium",
	"high-contrast",
	"barbie",
	"nineties",
	"legacy"
];
function rgbChannelsToHex(r, g, b, alpha) {
	const channels = [
		r,
		g,
		b
	].map((channel) => Number(channel).toString(16).padStart(2, "0"));
	if (alpha !== void 0) {
		const normalized = alpha.endsWith("%") ? Math.round(parseFloat(alpha) / 100 * 255) : Math.round(parseFloat(alpha) * 255);
		if (normalized < 255) channels.push(normalized.toString(16).padStart(2, "0"));
	}
	return `#${channels.join("")}`;
}
function parseRgbStringToHex(value) {
	const trimmed = value.trim();
	if (/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(trimmed)) return trimmed.slice(0, 7);
	const commaMatch = trimmed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+%?))?\)$/);
	if (commaMatch) return rgbChannelsToHex(commaMatch[1], commaMatch[2], commaMatch[3], commaMatch[4]);
	const spaceMatch = trimmed.match(/^rgba?\((\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*([\d.]+%?))?\)$/);
	if (spaceMatch) return rgbChannelsToHex(spaceMatch[1], spaceMatch[2], spaceMatch[3], spaceMatch[4]);
	return null;
}
function resolveCssColorToHex(cssValue, fallback) {
	if (typeof document === "undefined" || !cssValue?.trim()) return fallback;
	const trimmed = cssValue.trim();
	const direct = parseRgbStringToHex(trimmed);
	if (direct) return direct;
	const el = document.createElement("div");
	el.style.cssText = "position:absolute;left:-9999px;top:0;width:1px;height:1px;visibility:hidden;pointer-events:none;background:" + trimmed;
	document.body.appendChild(el);
	const computed = getComputedStyle(el).backgroundColor;
	document.body.removeChild(el);
	return parseRgbStringToHex(computed) ?? fallback;
}
function isTransparentCssColor(value) {
	return !value || value === "transparent" || value === "rgba(0, 0, 0, 0)" || value === "rgba(0,0,0,0)";
}
function readComputedStyleColorHex(styleProperty, cssValue, fallback) {
	if (typeof document === "undefined") return fallback;
	const el = document.createElement("div");
	el.style.cssText = styleProperty === "background" ? `position:absolute;left:-9999px;top:0;width:1px;height:1px;${styleProperty}:${cssValue}` : `position:absolute;left:-9999px;${styleProperty}:${cssValue}`;
	document.documentElement.appendChild(el);
	const raw = styleProperty === "background" ? getComputedStyle(el).backgroundColor : getComputedStyle(el).color;
	document.documentElement.removeChild(el);
	if (isTransparentCssColor(raw)) return fallback;
	return resolveCssColorToHex(raw, fallback);
}
function readThemeColorHex(varName, kind, fallback) {
	return readComputedStyleColorHex(kind === "background" ? "background" : "color", `var(${varName})`, fallback);
}
function editorSurfaceHex(isDarkChrome) {
	return readComputedStyleColorHex("background", EDITOR_SURFACE_CSS, isDarkChrome ? FALLBACK_DARK_BG : FALLBACK_LIGHT_BG);
}
function getEffectiveConsoleTheme(resolvedTheme) {
	if (resolvedTheme && resolvedTheme !== "system") return resolvedTheme;
	if (typeof document === "undefined") return "light";
	const html = document.documentElement;
	for (const themeClass of CONSOLE_THEME_CLASSES) if (html.classList.contains(themeClass)) return themeClass;
	return "light";
}
function monacoAppThemeId(resolvedTheme, isDarkChrome) {
	const themeName = getEffectiveConsoleTheme(resolvedTheme);
	return `${MONACO_THEME_PREFIX}-${isDarkChrome ? "dark" : "light"}-${themeName}`;
}
function defineMonacoAppTheme(monaco, resolvedTheme, isDarkChrome) {
	const themeId = monacoAppThemeId(resolvedTheme, isDarkChrome);
	const surface = editorSurfaceHex(isDarkChrome);
	if (isDarkChrome) {
		const fgDark = readThemeColorHex("--foreground", "foreground", "#fafafa");
		const mutedDark = readThemeColorHex("--muted-foreground", "foreground", "#71717a");
		const accentDark = readThemeColorHex("--accent", "background", "#2d2d31");
		monaco.editor.defineTheme(themeId, {
			base: "vs-dark",
			inherit: true,
			rules: monacoSyntaxHighlightRules(true),
			colors: {
				"editor.background": surface,
				"editorGutter.background": surface,
				"editor.foreground": fgDark,
				"editorLineNumber.foreground": mutedDark,
				"editorLineNumber.activeForeground": fgDark,
				"editorCursor.foreground": fgDark,
				"editor.selectionBackground": accentDark,
				"editorWidget.background": surface,
				"editorSuggestWidget.background": surface,
				"minimap.background": surface,
				"minimapGutter.background": surface
			}
		});
		return;
	}
	const fgLight = readThemeColorHex("--foreground", "foreground", "#18181b");
	const mutedLight = readThemeColorHex("--muted-foreground", "foreground", "#71717a");
	const accentLight = readThemeColorHex("--accent", "background", "#e5e7eb");
	monaco.editor.defineTheme(themeId, {
		base: "vs",
		inherit: true,
		rules: monacoSyntaxHighlightRules(false),
		colors: {
			"editor.background": surface,
			"editorGutter.background": surface,
			"editor.foreground": fgLight,
			"editorLineNumber.foreground": mutedLight,
			"editorLineNumber.activeForeground": fgLight,
			"editorCursor.foreground": fgLight,
			"editor.selectionBackground": accentLight,
			"editorWidget.background": surface,
			"editorSuggestWidget.background": surface,
			"minimap.background": surface,
			"minimapGutter.background": surface
		}
	});
}
function applyMonacoAppTheme(monaco, resolvedTheme, isDarkChrome) {
	defineMonacoAppTheme(monaco, resolvedTheme, isDarkChrome);
	monaco.editor.setTheme(monacoAppThemeId(resolvedTheme, isDarkChrome));
}
const CodeEditor = forwardRef(({ value, onChange, language = "javascript", height = 400, className, readOnly = false, minimap = false, lineNumbers = "on", onEditorMount, modelPath }, ref) => {
	const { resolvedTheme } = useTheme();
	const isDarkChrome = resolvedTheme !== void 0 ? isResolvedThemeDarkChrome(resolvedTheme) : isHtmlDarkChrome();
	const monacoMountKey = resolvedTheme ?? (isDarkChrome ? "dark-chrome" : "light-chrome");
	const editorRef = useRef(null);
	const monacoRef = useRef(null);
	const valueRef = useRef(value);
	useEffect(() => {
		valueRef.current = value;
	}, [value]);
	const handleBeforeMount = useCallback((monaco) => {
		monacoRef.current = monaco;
		defineMonacoAppTheme(monaco, resolvedTheme, isDarkChrome);
	}, [isDarkChrome, resolvedTheme]);
	const handleEditorMount = useCallback((editorInstance, monaco) => {
		editorRef.current = editorInstance;
		monacoRef.current = monaco;
		applyMonacoAppTheme(monaco, resolvedTheme, isDarkChrome);
		onEditorMount?.(editorInstance, monaco);
	}, [
		isDarkChrome,
		onEditorMount,
		resolvedTheme
	]);
	useEffect(() => {
		const monaco = monacoRef.current;
		if (!monaco) return;
		applyMonacoAppTheme(monaco, resolvedTheme, isDarkChrome);
		editorRef.current?.updateOptions({ theme: monacoAppThemeId(resolvedTheme, isDarkChrome) });
	}, [isDarkChrome, resolvedTheme]);
	useEffect(() => {
		return () => {
			editorRef.current = null;
		};
	}, []);
	const handleChange = useCallback((newValue) => {
		valueRef.current = newValue ?? "";
		onChange?.(newValue ?? "");
	}, [onChange]);
	useImperativeHandle(ref, () => ({
		getValue: () => editorRef.current?.getValue() ?? valueRef.current,
		getEditor: () => editorRef.current
	}), []);
	return /* @__PURE__ */ jsx("div", {
		dir: "ltr",
		"data-code-example": true,
		className: cn(FORCE_LTR_CLASS, "overflow-hidden rounded-lg border border-border bg-background", className),
		children: /* @__PURE__ */ jsx(Editor, {
			height: typeof height === "number" ? `${height}px` : height,
			defaultLanguage: language,
			language,
			path: modelPath,
			value,
			keepCurrentModel: Boolean(modelPath),
			onChange: handleChange,
			beforeMount: handleBeforeMount,
			onMount: handleEditorMount,
			theme: monacoAppThemeId(resolvedTheme, isDarkChrome),
			loading: null,
			options: {
				readOnly,
				minimap: { enabled: minimap },
				lineNumbers,
				renderLineHighlight: "none",
				scrollBeyondLastLine: false,
				fontSize: 13,
				fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
				padding: {
					top: 12,
					bottom: 12
				},
				tabSize: 2,
				wordWrap: "on",
				automaticLayout: true
			}
		}, `monaco-${monacoMountKey}`)
	});
});
CodeEditor.displayName = "CodeEditor";
export { CodeEditor as t };
