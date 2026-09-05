import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { createPortal } from "react-dom";
var NavigationHistoryContext = createContext(null);
function NavigationHistoryProvider({ children }) {
	const location = useLocation();
	const historyStackRef = useRef([]);
	const forwardStackRef = useRef([]);
	const currentPathRef = useRef("");
	const skipNextPushRef = useRef(false);
	useEffect(() => {
		const searchString = location.searchStr || "";
		const currentPath = location.pathname + searchString;
		if (currentPath !== currentPathRef.current) {
			if (skipNextPushRef.current) skipNextPushRef.current = false;
			else if (currentPathRef.current) {
				forwardStackRef.current = [];
				historyStackRef.current.push({
					path: currentPathRef.current,
					title: typeof document !== "undefined" ? document.title : currentPathRef.current
				});
				if (historyStackRef.current.length > 50) historyStackRef.current.shift();
			}
			currentPathRef.current = currentPath;
		}
	}, [location.pathname, location.searchStr]);
	const value = {
		hasInternalHistory: useCallback(() => {
			return historyStackRef.current.length > 0;
		}, []),
		getPreviousPath: useCallback(() => {
			const stack = historyStackRef.current;
			return stack.length > 0 ? stack[stack.length - 1].path : void 0;
		}, []),
		popHistory: useCallback(() => {
			const stack = historyStackRef.current;
			const currentPath = currentPathRef.current;
			const currentTitle = typeof document !== "undefined" ? document.title : currentPath;
			const entry = stack.pop();
			if (entry) forwardStackRef.current.push({
				path: currentPath,
				title: currentTitle
			});
			return entry?.path;
		}, []),
		getBackStack: useCallback(() => {
			return [...historyStackRef.current];
		}, []),
		popUntil: useCallback((path) => {
			const stack = historyStackRef.current;
			const i = stack.findIndex((e) => e.path === path);
			if (i === -1) return void 0;
			const currentPath = currentPathRef.current;
			const currentTitle = typeof document !== "undefined" ? document.title : currentPath;
			stack.splice(i);
			forwardStackRef.current.push({
				path: currentPath,
				title: currentTitle
			});
			return path;
		}, []),
		skipNextPush: useCallback(() => {
			skipNextPushRef.current = true;
		}, []),
		hasForwardHistory: useCallback(() => {
			return forwardStackRef.current.length > 0;
		}, []),
		popForward: useCallback(() => {
			return forwardStackRef.current.pop()?.path;
		}, [])
	};
	return /* @__PURE__ */ jsx(NavigationHistoryContext.Provider, {
		value,
		children
	});
}
function useNavigationHistorySafe() {
	return useContext(NavigationHistoryContext);
}
function useSmartNavigation({ fallbackPath } = {}) {
	const navigate = useNavigate();
	const navigationHistory = useNavigationHistorySafe();
	return useCallback(() => {
		if (fallbackPath) {
			navigate({ to: fallbackPath });
			return;
		}
		if (navigationHistory) {
			const previousPath = navigationHistory.popHistory();
			if (previousPath) {
				navigate({ to: previousPath });
				return;
			}
		}
		navigate({ to: "/" });
	}, [
		navigate,
		fallbackPath,
		navigationHistory
	]);
}
function WizardLayout({ title, description, headerBottom, headerActions, children, sidebar, footer, onClose, fallbackPath, fullscreen = false, contentClassName, useSidebar = true, constrainWidth = true, constrainFooterWidth = true, maxWidth = "max-w-7xl", showBackButton = false, backButtonLabel = "Back", onBack, footerAlign = "left", contentPadding = true, contentWrapperClassName, fullscreenInnerClassName, fullscreenContentXClassName, skipInitialFieldFocus = false, initialFocusKey }) {
	const t = useT();
	const smartGoBack = useSmartNavigation({ fallbackPath });
	const rootRef = useRef(null);
	const contentRef = useRef(null);
	useEffect(() => {
		if (skipInitialFieldFocus) return;
		const timer = requestAnimationFrame(() => {
			const root = contentRef.current;
			if (!root) return;
			const textInput = root.querySelector("input:not([type=\"hidden\"]):not([disabled]), textarea:not([disabled]), select:not([disabled])");
			if (textInput) {
				textInput.focus();
				return;
			}
			root.querySelector("[data-slot=\"radio-group-item\"]:not([disabled])")?.focus();
		});
		return () => cancelAnimationFrame(timer);
	}, [skipInitialFieldFocus, initialFocusKey]);
	const handleClose = useCallback(() => {
		if (onClose) onClose();
		else smartGoBack();
	}, [onClose, smartGoBack]);
	const handleBack = useCallback(() => {
		if (onBack) onBack();
		else window.history.back();
	}, [onBack]);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				const openWizards = document.querySelectorAll("[data-wizard-layout]");
				const topmostWizard = openWizards[openWizards.length - 1];
				if (!rootRef.current || topmostWizard !== rootRef.current) return;
				const target = event.target;
				const isInPopover = target.closest("[data-slot=\"popover-content\"]");
				const isInCommand = target.closest("[data-slot=\"command\"]");
				const isInDialog = target.closest("[data-slot=\"dialog-content\"]");
				const hasOpenPopover = document.querySelector("[data-slot=\"popover-content\"][data-state=\"open\"]");
				const hasOpenDialog = document.querySelector("[data-slot=\"dialog-overlay\"][data-state=\"open\"]");
				if (isInPopover || isInCommand || isInDialog || hasOpenPopover || hasOpenDialog) return;
				event.preventDefault();
				event.stopImmediatePropagation();
				handleClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown, true);
		return () => window.removeEventListener("keydown", handleKeyDown, true);
	}, [handleClose]);
	const containerClasses = fullscreen ? "fixed inset-0 z-[9998] flex h-[100dvh] max-h-[100dvh] w-screen flex-col overflow-hidden bg-background" : "flex h-full flex-col";
	const headerClasses = fullscreen ? cn("shrink-0 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80", !headerBottom && "border-b border-border") : cn("bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80", !headerBottom && "border-b border-border/30");
	const contentWrapperClasses = fullscreen ? cn("flex-1 min-h-0 overflow-y-auto", contentWrapperClassName) : "mx-auto w-full max-w-7xl flex-1 overflow-y-auto px-4 pb-4 sm:px-6 sm:pb-6";
	const footerClasses = fullscreen ? "shrink-0 border-t border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80" : "border-t border-border/30 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 px-4 py-4 sm:px-6";
	const wizardContent = /* @__PURE__ */ jsxs("div", {
		ref: rootRef,
		"data-wizard-layout": "",
		className: containerClasses,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: headerClasses,
				children: [/* @__PURE__ */ jsx("div", {
					className: cn("mx-auto w-full", constrainWidth && maxWidth),
					children: /* @__PURE__ */ jsx("div", {
						className: cn("h-14 flex items-center shrink-0", headerBottom && (fullscreen ? "border-b border-border" : "border-b border-border/30"), fullscreen ? "px-6" : "px-4 @[1000px]:px-6"),
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between w-full",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 min-w-0 flex-1",
								children: [showBackButton && /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									onClick: handleBack,
									className: "h-8 w-8 p-0 shrink-0",
									"aria-label": t(backButtonLabel),
									children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("h1", {
										className: cn("font-semibold text-foreground truncate", "text-[15px]", typeof title !== "string" && "flex items-center gap-2"),
										children: typeof title === "string" ? t(title) : title
									}), description && /* @__PURE__ */ jsx("div", {
										className: "mt-0.5",
										children: typeof description === "string" ? /* @__PURE__ */ jsx("p", {
											className: "text-[12px] text-muted-foreground truncate",
											children: t(description)
										}) : description
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 shrink-0",
								children: [headerActions && /* @__PURE__ */ jsxs(Fragment, { children: [headerActions, /* @__PURE__ */ jsx("div", { className: "h-5 w-px bg-border" })] }), /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									onClick: handleClose,
									className: "h-8 w-8 p-0",
									"aria-label": t("Close wizard"),
									children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
								})]
							})]
						})
					})
				}), headerBottom && /* @__PURE__ */ jsx("div", {
					className: cn("w-full border-b shadow-none", fullscreen ? "border-border" : "border-border/30"),
					children: headerBottom
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: contentWrapperClasses,
				children: [
					fullscreen && /* @__PURE__ */ jsx("div", {
						className: cn("mx-auto w-full", fullscreenContentXClassName ?? "px-6", constrainWidth && maxWidth, contentPadding && (fullscreen ? "py-6" : "pt-6"), fullscreenInnerClassName),
						children: useSidebar ? /* @__PURE__ */ jsxs("div", {
							className: "grid gap-8 lg:grid-cols-3",
							children: [/* @__PURE__ */ jsx("div", {
								ref: contentRef,
								className: cn("lg:col-span-2 space-y-8", contentClassName),
								children
							}), sidebar && /* @__PURE__ */ jsx("div", {
								className: "lg:col-span-1 self-start sticky top-6",
								children: sidebar
							})]
						}) : /* @__PURE__ */ jsx("div", {
							ref: contentRef,
							className: contentClassName,
							children
						})
					}),
					!fullscreen && useSidebar && /* @__PURE__ */ jsxs("div", {
						className: cn("grid gap-6 lg:grid-cols-3", contentPadding && "pt-6"),
						children: [/* @__PURE__ */ jsx("div", {
							ref: contentRef,
							className: cn("lg:col-span-2 space-y-6", contentClassName),
							children
						}), sidebar && /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-1 self-start sticky top-6",
							children: sidebar
						})]
					}),
					!fullscreen && !useSidebar && /* @__PURE__ */ jsx("div", {
						ref: contentRef,
						className: cn(contentPadding && "pt-6", contentClassName),
						children
					})
				]
			}),
			footer && /* @__PURE__ */ jsx("div", {
				className: footerClasses,
				children: /* @__PURE__ */ jsx("div", {
					className: cn("mx-auto w-full flex items-center gap-3", constrainFooterWidth && maxWidth, fullscreen && "px-6 py-4", footerAlign === "right" && "justify-end"),
					children: footer
				})
			})
		]
	});
	if (fullscreen && typeof document !== "undefined") return createPortal(wizardContent, document.body);
	return wizardContent;
}
export { useNavigationHistorySafe as i, useSmartNavigation as n, NavigationHistoryProvider as r, WizardLayout as t };
