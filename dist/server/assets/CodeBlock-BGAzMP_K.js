import { i as isResolvedThemeDarkChrome, r as isHtmlDarkChrome } from "./html-theme-zz5wyKPq.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { r as prismSyntaxHighlightStyles, t as getCodeSyntaxColors } from "./code-syntax-theme-CApDi7y8.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Maximize2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Highlight, Prism, themes } from "prism-react-renderer";
var PRISM_BACKGROUND_KEYS = [
	"background",
	"backgroundColor",
	"backgroundImage",
	"backgroundSize",
	"backgroundPosition",
	"backgroundRepeat",
	"backdropFilter"
];
const CODE_BLOCK_PRISM_SURFACE_CLASS = "border-0 outline-none ring-0 shadow-none !bg-transparent [background:transparent!important] [background-color:transparent!important] [&_.token-line]:!bg-transparent [&_.token-line]:[background:transparent!important] [&_code]:!bg-transparent";
function buildCodeBlockPrismTheme(resolvedTheme) {
	const isDark = resolvedTheme !== void 0 ? isResolvedThemeDarkChrome(resolvedTheme) : isHtmlDarkChrome();
	const base = isDark ? themes.vsDark : themes.vsLight;
	const colors = getCodeSyntaxColors(isDark);
	return {
		plain: {
			color: base.plain.color,
			backgroundColor: "transparent",
			background: "transparent"
		},
		styles: prismSyntaxHighlightStyles(colors, base.plain.color)
	};
}
const CODE_BLOCK_EDITOR_SURFACE_STYLE = {
	background: "transparent",
	backgroundColor: "transparent"
};
function stripPrismTokenBackground(style) {
	if (!style) return { ...CODE_BLOCK_EDITOR_SURFACE_STYLE };
	const next = { ...style };
	for (const key of PRISM_BACKGROUND_KEYS) delete next[key];
	return {
		...next,
		...CODE_BLOCK_EDITOR_SURFACE_STYLE
	};
}
function resolvePrismPreSurfaceStyle(style) {
	return {
		margin: 0,
		color: style?.color,
		...CODE_BLOCK_EDITOR_SURFACE_STYLE
	};
}
if (typeof globalThis !== "undefined") globalThis.Prism = Prism;
if (typeof Prism !== "undefined" && !Prism.languages.env) Prism.languages.env = {
	comment: /#.*/,
	"attr-name": /^[A-Za-z_][A-Za-z0-9_]*/m,
	operator: /=/,
	string: [{
		pattern: /"(?:[^"\\]|\\.)*"/,
		greedy: true
	}, {
		pattern: /'(?:[^'\\]|\\.)*'/,
		greedy: true
	}]
};
var RUNTIME_TO_PRISM = {
	node: "javascript",
	deno: "javascript",
	bun: "javascript",
	dotnet: "csharp"
};
function getPrismLanguage(lang) {
	return RUNTIME_TO_PRISM[lang] ?? lang;
}
function normalizeCodeBlockContent(code) {
	return code.endsWith("\n") ? code.slice(0, -1) : code;
}
function getCodeLanguageLabel(lang) {
	return {
		javascript: "JavaScript",
		typescript: "TypeScript",
		json: "JSON",
		dart: "Dart",
		swift: "Swift",
		kotlin: "Kotlin",
		java: "Java",
		bash: "Bash",
		powershell: "PowerShell",
		php: "PHP",
		python: "Python",
		ruby: "Ruby",
		go: "Go",
		csharp: "C#",
		markup: "Markup",
		plaintext: "Plain text",
		env: ".env",
		hcl: "Terraform",
		rust: "Rust",
		graphql: "GraphQL",
		http: "HTTP",
		groovy: "Groovy",
		docker: "Dockerfile",
		css: "CSS",
		yaml: "YAML",
		toml: "TOML",
		cpp: "C++",
		markdown: "Markdown",
		diff: "Diff",
		node: "Node.js",
		deno: "Deno",
		bun: "Bun",
		dotnet: ".NET"
	}[lang] ?? lang;
}
var EXTRA_LANGUAGES = [
	"json",
	"dart",
	"swift",
	"kotlin",
	"java",
	"bash",
	"powershell",
	"php",
	"python",
	"ruby",
	"go",
	"csharp",
	"markup",
	"hcl",
	"rust",
	"graphql",
	"http",
	"groovy",
	"docker",
	"css",
	"yaml",
	"toml",
	"cpp",
	"markdown",
	"diff"
];
var PRISM_LOADERS = {
	json: () => import("prismjs/components/prism-json.js"),
	dart: () => import("prismjs/components/prism-dart.js"),
	swift: () => import("prismjs/components/prism-swift.js"),
	kotlin: () => import("prismjs/components/prism-kotlin.js"),
	java: () => import("prismjs/components/prism-java.js"),
	bash: () => import("prismjs/components/prism-bash.js"),
	powershell: () => import("prismjs/components/prism-powershell.js"),
	markup: () => import("prismjs/components/prism-markup.js"),
	"markup-templating": () => loadLanguage("markup").then(() => import("prismjs/components/prism-markup-templating.js")),
	php: () => loadLanguage("markup-templating").then(() => import("prismjs/components/prism-php.js")),
	python: () => import("prismjs/components/prism-python.js"),
	ruby: () => import("prismjs/components/prism-ruby.js"),
	go: () => import("prismjs/components/prism-go.js"),
	csharp: () => import("prismjs/components/prism-csharp.js"),
	hcl: () => import("prismjs/components/prism-hcl.js"),
	rust: () => import("prismjs/components/prism-rust.js"),
	graphql: () => import("prismjs/components/prism-graphql.js"),
	http: () => import("prismjs/components/prism-http.js"),
	groovy: () => import("prismjs/components/prism-groovy.js"),
	docker: () => import("prismjs/components/prism-docker.js"),
	css: () => import("prismjs/components/prism-css.js"),
	yaml: () => import("prismjs/components/prism-yaml.js"),
	toml: () => import("prismjs/components/prism-toml.js"),
	c: () => import("prismjs/components/prism-c.js"),
	cpp: () => loadLanguage("c").then(() => import("prismjs/components/prism-cpp.js")),
	markdown: () => loadLanguage("markup").then(() => import("prismjs/components/prism-markdown.js")),
	diff: () => import("prismjs/components/prism-diff.js")
};
var loadedLanguages = /* @__PURE__ */ new Set();
function loadLanguage(lang) {
	if (loadedLanguages.has(lang)) return Promise.resolve();
	const loader = PRISM_LOADERS[lang];
	if (!loader) return Promise.resolve();
	return loader().then(() => {
		loadedLanguages.add(lang);
	});
}
if (typeof window !== "undefined") loadLanguage("json");
function resolveCodeBlockSurface(surface, transparentBackground) {
	if (transparentBackground) return "transparent";
	return surface ?? "default";
}
var SURFACE_FRAME_CLASS = {
	default: "bg-transparent",
	muted: "bg-transparent",
	transparent: "bg-transparent"
};
var SURFACE_PRE_CLASS = {
	default: CODE_BLOCK_PRISM_SURFACE_CLASS,
	muted: CODE_BLOCK_PRISM_SURFACE_CLASS,
	transparent: CODE_BLOCK_PRISM_SURFACE_CLASS
};
function CodeBlock({ code, language, variant = "default", showCopy = true, copyInside = false, fixedHeight, className, label, surface, transparentBackground = false, showFullscreen = false, wrapLines = false }) {
	const t = useT();
	const resolvedSurface = resolveCodeBlockSurface(surface, transparentBackground);
	const [copied, setCopied] = useState(false);
	const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
	const preRef = useRef(null);
	const prismLanguage = getPrismLanguage(language);
	const languageIsRegistered = !EXTRA_LANGUAGES.includes(prismLanguage) || loadedLanguages.has(prismLanguage) || Boolean(Prism.languages[prismLanguage]);
	const [, setLoadGeneration] = useState(0);
	const { resolvedTheme } = useTheme();
	const isDarkChrome = resolvedTheme !== void 0 ? isResolvedThemeDarkChrome(resolvedTheme) : isHtmlDarkChrome();
	const handleWheel = (e) => {
		const pre = preRef.current;
		if (!pre || e.deltaY === 0) return;
		if (pre.scrollHeight > pre.clientHeight) return;
		const scrollParent = findScrollParent(pre);
		if (scrollParent && scrollParent instanceof Element) {
			scrollParent.scrollTop += e.deltaY;
			e.preventDefault();
		}
	};
	function findScrollParent(el) {
		let parent = el.parentElement;
		while (parent) {
			const { overflowY } = getComputedStyle(parent);
			if (/(auto|scroll|overlay)/.test(overflowY) && parent.scrollHeight > parent.clientHeight) return parent;
			parent = parent.parentElement;
		}
		return null;
	}
	useEffect(() => {
		if (languageIsRegistered) return;
		let cancelled = false;
		loadLanguage(prismLanguage).then(() => {
			if (!cancelled) setLoadGeneration((n) => n + 1);
		});
		return () => {
			cancelled = true;
		};
	}, [prismLanguage, languageIsRegistered]);
	const handleCopy = () => {
		navigator.clipboard.writeText(displayCode);
		setCopied(true);
		toast.success(t("Copied to clipboard"));
		setTimeout(() => setCopied(false), 2e3);
	};
	const effectiveLanguage = languageIsRegistered ? prismLanguage : "plaintext";
	const displayCode = useMemo(() => normalizeCodeBlockContent(code), [code]);
	const prismTheme = useMemo(() => buildCodeBlockPrismTheme(resolvedTheme), [isDarkChrome]);
	const isHeadless = variant === "headless";
	const isNestedSurface = resolvedSurface === "muted";
	const preOverflowClasses = wrapLines ? "overflow-x-hidden whitespace-pre-wrap break-words [overflow-wrap:anywhere]" : "overflow-x-auto";
	const lineWrapClasses = wrapLines ? "min-w-0 w-full break-all" : void 0;
	const renderCopyButton = () => {
		if (!showCopy) return null;
		return /* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
			onClick: handleCopy,
			"aria-label": t("Copy code"),
			children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
		});
	};
	const renderFullscreenButton = () => {
		if (!showFullscreen) return null;
		return /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			size: "sm",
			className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
			onClick: () => setIsFullscreenOpen(true),
			children: /* @__PURE__ */ jsx(Maximize2, { className: "h-3.5 w-3.5" })
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		dir: "ltr",
		"data-code-example": true,
		className: cn(FORCE_LTR_CLASS, "w-full", isHeadless ? "space-y-0" : "space-y-1.5", className),
		children: [
			!copyInside && (label || showCopy || showFullscreen) && /* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center", label ? "justify-between" : "justify-end"),
				children: [label && /* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
					children: label
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [renderCopyButton(), renderFullscreenButton()]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative flex w-full flex-col overflow-hidden", isHeadless ? "rounded-none border-0 shadow-none" : isNestedSurface ? "rounded-none border-0 shadow-none" : "rounded-xl border border-border", SURFACE_FRAME_CLASS[resolvedSurface], fixedHeight && "min-h-0"),
				style: fixedHeight ? { height: fixedHeight } : void 0,
				children: [copyInside && (showCopy || showFullscreen) && /* @__PURE__ */ jsxs("div", {
					className: cn("flex h-10 shrink-0 items-center justify-between px-3", isHeadless ? "border-0 bg-muted/20" : "border-b border-border"),
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium text-muted-foreground",
						children: getCodeLanguageLabel(language)
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1",
						children: [renderCopyButton(), renderFullscreenButton()]
					})]
				}), /* @__PURE__ */ jsx(Highlight, {
					theme: prismTheme,
					code: displayCode,
					language: effectiveLanguage,
					children: ({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ jsx("pre", {
						ref: preRef,
						onWheel: handleWheel,
						className: cn("rounded-none text-[12px] font-mono", isNestedSurface ? "px-0 py-2" : "p-4", preOverflowClasses, fixedHeight && "min-h-0 flex-1 overflow-y-auto", preClassName, SURFACE_PRE_CLASS[resolvedSurface]),
						style: resolvePrismPreSurfaceStyle(style),
						children: /* @__PURE__ */ jsx("code", {
							className: "block bg-transparent text-start",
							children: tokens.map((line, i) => {
								const lineProps = getLineProps({
									line,
									className: cn(lineWrapClasses, "bg-transparent")
								});
								lineProps.style = stripPrismTokenBackground(lineProps.style);
								return /* @__PURE__ */ jsx("div", {
									...lineProps,
									children: line.map((token, key) => {
										const tokenProps = getTokenProps({ token });
										if (tokenProps.style) tokenProps.style = stripPrismTokenBackground(tokenProps.style);
										return /* @__PURE__ */ jsx("span", { ...tokenProps }, key);
									})
								}, i);
							})
						})
					})
				}, effectiveLanguage)]
			}),
			showFullscreen && isFullscreenOpen && /* @__PURE__ */ jsx(WizardLayout, {
				title: `${getCodeLanguageLabel(language)} ${t("example")}`,
				fullscreen: true,
				useSidebar: false,
				constrainWidth: false,
				constrainFooterWidth: false,
				contentPadding: false,
				onClose: () => setIsFullscreenOpen(false),
				contentClassName: "-mx-6",
				headerActions: renderCopyButton(),
				children: /* @__PURE__ */ jsx("div", {
					dir: "ltr",
					"data-code-example": true,
					className: "force-ltr",
					children: /* @__PURE__ */ jsx(Highlight, {
						theme: prismTheme,
						code: displayCode,
						language: effectiveLanguage,
						children: ({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ jsx("pre", {
							className: cn("p-6 text-[12px] font-mono", preOverflowClasses, preClassName, "border-0 outline-none ring-0 shadow-none !bg-transparent [background:transparent!important] [background-color:transparent!important] [&_.token-line]:!bg-transparent [&_.token-line]:[background:transparent!important] [&_code]:!bg-transparent"),
							style: resolvePrismPreSurfaceStyle(style),
							children: /* @__PURE__ */ jsx("code", {
								className: "block bg-transparent text-start",
								children: tokens.map((line, i) => {
									const lineProps = getLineProps({
										line,
										className: cn(lineWrapClasses, "bg-transparent")
									});
									lineProps.style = stripPrismTokenBackground(lineProps.style);
									return /* @__PURE__ */ jsx("div", {
										...lineProps,
										children: line.map((token, key) => {
											const tokenProps = getTokenProps({ token });
											if (tokenProps.style) tokenProps.style = stripPrismTokenBackground(tokenProps.style);
											return /* @__PURE__ */ jsx("span", { ...tokenProps }, key);
										})
									}, i);
								})
							})
						})
					}, effectiveLanguage)
				})
			})
		]
	});
}
export { getCodeLanguageLabel as n, normalizeCodeBlockContent as r, CodeBlock as t };
