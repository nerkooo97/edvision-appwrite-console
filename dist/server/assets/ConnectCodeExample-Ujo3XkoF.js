import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as getCodeLanguageLabel, r as normalizeCodeBlockContent, t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
function CodeSnippetCopyButton({ content, onCopied }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(content);
			setCopied(true);
			onCopied?.();
			toast.success(t("Copied to clipboard"));
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error(t("Failed to copy"));
		}
	};
	return /* @__PURE__ */ jsxs(Button, {
		type: "button",
		variant: "ghost",
		size: "sm",
		className: "h-7 shrink-0 gap-1 text-[12px] text-muted-foreground",
		onClick: handleCopy,
		children: [copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy")]
	});
}
function HorizontalScrollFade({ children, className, viewportClassName, fadeFromClassName = "from-background" }) {
	const scrollRef = useRef(null);
	const [showLeftFade, setShowLeftFade] = useState(false);
	const [showRightFade, setShowRightFade] = useState(false);
	const updateFades = useCallback(() => {
		const element = scrollRef.current;
		if (!element) return;
		const { scrollLeft, scrollWidth, clientWidth } = element;
		setShowLeftFade(scrollLeft > 1);
		setShowRightFade(scrollLeft + clientWidth < scrollWidth - 1);
	}, []);
	useEffect(() => {
		const element = scrollRef.current;
		if (!element) return;
		updateFades();
		element.addEventListener("scroll", updateFades, { passive: true });
		const resizeObserver = new ResizeObserver(updateFades);
		resizeObserver.observe(element);
		const content = element.firstElementChild;
		if (content) resizeObserver.observe(content);
		return () => {
			element.removeEventListener("scroll", updateFades);
			resizeObserver.disconnect();
		};
	}, [updateFades, children]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative min-w-0", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				ref: scrollRef,
				className: cn("overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden", viewportClassName),
				children
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: cn("pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r to-transparent transition-opacity duration-200 sm:w-12", fadeFromClassName, showLeftFade ? "opacity-100" : "opacity-0")
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: cn("pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l to-transparent transition-opacity duration-200 sm:w-12", fadeFromClassName, showRightFade ? "opacity-100" : "opacity-0")
			})
		]
	});
}
var CODE_EXAMPLE_HEADER_LABEL_CLASS = "flex h-8 items-center text-[12px] font-medium";
function ConnectCodePanel({ code, language, fixedHeight, headless = false, className, wrapLines = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex min-h-0 min-w-0 w-full flex-1 flex-col", className),
		children: /* @__PURE__ */ jsx(CodeBlock, {
			code,
			language,
			variant: headless ? "headless" : "default",
			showCopy: false,
			fixedHeight,
			wrapLines,
			className: cn("flex min-h-0 w-full flex-1 flex-col [&>div:last-child]:flex-1 [&>div:last-child]:min-h-0", headless && "[&>div:last-child]:border-0")
		})
	});
}
function ConnectCodeExample({ code, language, tabs, activeTabId, onTabChange, selectorVariant = "tabs", selectorAriaLabel, fixedHeight, className, actions, headless = false }) {
	const t = useT();
	const displayCode = normalizeCodeBlockContent(code);
	const showSelector = Boolean(tabs && tabs.length > 1);
	const selectedTabId = activeTabId ?? tabs?.[0]?.id;
	const [copiedTabIds, setCopiedTabIds] = useState(() => /* @__PURE__ */ new Set());
	useEffect(() => {
		setCopiedTabIds(/* @__PURE__ */ new Set());
	}, [tabs?.map((tab) => `${tab.id}:${tab.label}`).join("|") ?? ""]);
	const markActiveTabCopied = () => {
		if (!selectedTabId) return;
		setCopiedTabIds((prev) => {
			if (prev.has(selectedTabId)) return prev;
			const next = new Set(prev);
			next.add(selectedTabId);
			return next;
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		dir: "ltr",
		"data-code-example": true,
		className: cn(FORCE_LTR_CLASS, "flex w-full min-w-0 flex-col overflow-hidden", !headless && "rounded-xl border border-border", fixedHeight && "min-h-0", className),
		style: fixedHeight ? { height: fixedHeight } : void 0,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center justify-between gap-2 border-b border-border px-3 py-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "min-w-0 flex-1",
				children: showSelector && selectorVariant === "dropdown" ? /* @__PURE__ */ jsxs(Select, {
					value: selectedTabId,
					onValueChange: (value) => onTabChange?.(value),
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						size: "sm",
						className: cn(CODE_EXAMPLE_HEADER_LABEL_CLASS, "min-w-[9rem] max-w-full bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"),
						"aria-label": selectorAriaLabel ?? t("Code language"),
						children: /* @__PURE__ */ jsx(SelectValue, {})
					}), /* @__PURE__ */ jsx(SelectContent, { children: tabs.map((tab) => /* @__PURE__ */ jsx(SelectItem, {
						value: tab.id,
						className: "text-[12px]",
						children: tab.label
					}, tab.id)) })]
				}) : showSelector ? /* @__PURE__ */ jsx(HorizontalScrollFade, {
					className: "min-w-0",
					viewportClassName: "flex gap-1.5",
					fadeFromClassName: "from-background",
					children: /* @__PURE__ */ jsx("div", {
						role: "tablist",
						"aria-label": selectorAriaLabel ?? t("Select file"),
						className: "flex w-max gap-1.5",
						children: tabs.map((tab) => {
							const isCopied = copiedTabIds.has(tab.id);
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								role: "tab",
								"aria-selected": selectedTabId === tab.id,
								title: isCopied ? `${tab.label} (${t("Copied")})` : tab.label,
								onClick: () => onTabChange?.(tab.id),
								className: cn("cursor-pointer inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] font-medium transition-[color,background-color,opacity]", selectedTabId === tab.id ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground", isCopied && "opacity-40"),
								children: [tab.icon, tab.label]
							}, tab.id);
						})
					})
				}) : /* @__PURE__ */ jsx("span", {
					className: CODE_EXAMPLE_HEADER_LABEL_CLASS,
					children: getCodeLanguageLabel(language)
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-1",
				children: [actions, /* @__PURE__ */ jsx(CodeSnippetCopyButton, {
					content: displayCode,
					onCopied: markActiveTabCopied
				})]
			})]
		}), /* @__PURE__ */ jsx(ConnectCodePanel, {
			code: displayCode,
			language,
			headless: true,
			fixedHeight: fixedHeight ? "100%" : void 0,
			className: "min-h-0 flex-1"
		})]
	});
}
export { CodeSnippetCopyButton as i, ConnectCodePanel as n, HorizontalScrollFade as r, ConnectCodeExample as t };
