import { n as findScrollParent, t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as DOCS_STICKY_TITLE_CLASS } from "./prose-typography-BMJgwhz7.js";
import { n as DOCS_SECTION_HEADER_CLASS } from "./nav-styles-BnkuEWRE.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
function ArticleStickyToolbar({ pinned, bounds, title, titleSuffix, actions, titleClassName = DOCS_STICKY_TITLE_CLASS }) {
	const t = useT();
	if (!pinned || !bounds) return null;
	const contentInsetInlineStart = bounds.contentLeft - bounds.shellLeft;
	return /* @__PURE__ */ jsxs("header", {
		className: "pointer-events-none fixed z-30 h-14",
		style: {
			top: bounds.top,
			left: bounds.shellLeft,
			width: bounds.shellWidth
		},
		"aria-label": t("Article toolbar"),
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80"
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn(DOCS_SECTION_HEADER_CLASS, "relative pointer-events-auto border-b-0 bg-transparent"),
				style: {
					marginInlineStart: contentInsetInlineStart,
					width: bounds.contentWidth,
					maxWidth: bounds.contentWidth
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex w-full min-w-0 items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("p", {
						className: cn(titleClassName, "min-w-0 text-start"),
						children: [t(title), titleSuffix]
					}), actions ? /* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 flex-wrap items-center justify-end gap-2",
						children: actions
					}) : null]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 bottom-0 border-b border-border"
			})
		]
	});
}
function measureStickyOverlayBounds(shellRect, contentRect, shellTop) {
	return {
		top: shellTop,
		shellLeft: shellRect.left,
		shellWidth: shellRect.width,
		contentLeft: contentRect.left,
		contentWidth: contentRect.width
	};
}
function useArticleStickyOverlay({ sentinelRef, contentAnchorRef, resetKey }) {
	const [pinned, setPinned] = useState(false);
	const [bounds, setBounds] = useState(null);
	useEffect(() => {
		setPinned(false);
		setBounds(null);
		const sentinel = sentinelRef.current;
		if (!sentinel) return;
		const updateOverlay = () => {
			const currentSentinel = sentinelRef.current;
			if (!currentSentinel) return;
			const scrollRoot$1 = findScrollParent(currentSentinel) ?? document.getElementById("main-content");
			const contentAnchor = contentAnchorRef?.current ?? currentSentinel.closest("article");
			const scrollContainer = scrollRoot$1 instanceof HTMLElement ? scrollRoot$1 : document.getElementById("main-content");
			const shellTop = scrollContainer?.getBoundingClientRect().top ?? 0;
			const isPinned = currentSentinel.getBoundingClientRect().top <= shellTop + 1;
			setPinned(isPinned);
			if (isPinned && contentAnchor && scrollContainer) setBounds(measureStickyOverlayBounds(scrollContainer.getBoundingClientRect(), contentAnchor.getBoundingClientRect(), shellTop));
			else setBounds(null);
		};
		const scrollRoot = findScrollParent(sentinel) ?? document.getElementById("main-content");
		const observer = new IntersectionObserver(updateOverlay, {
			root: scrollRoot,
			threshold: 0
		});
		observer.observe(sentinel);
		scrollRoot?.addEventListener("scroll", updateOverlay, { passive: true });
		window.addEventListener("scroll", updateOverlay, { passive: true });
		window.addEventListener("resize", updateOverlay);
		const dirObserver = new MutationObserver(updateOverlay);
		dirObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["dir"]
		});
		updateOverlay();
		return () => {
			observer.disconnect();
			dirObserver.disconnect();
			scrollRoot?.removeEventListener("scroll", updateOverlay);
			window.removeEventListener("scroll", updateOverlay);
			window.removeEventListener("resize", updateOverlay);
		};
	}, [resetKey]);
	return {
		pinned,
		bounds
	};
}
export { ArticleStickyToolbar as n, useArticleStickyOverlay as t };
