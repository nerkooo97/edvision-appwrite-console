import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider } from "./tooltip-DUssQZhw.js";
import { t as BuildLogsView } from "./BuildLogsView-ByzI55tv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, CircleDashed, Copy, Download, Search } from "lucide-react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function BuildLogsCard({ buildLogs, durationDisplay = null, emptyMessage, downloadFilename = "build-logs.txt", hideWhenEmpty = false, title = "Build logs", hideTitle = false }) {
	const t = useT();
	const resolvedEmptyMessage = emptyMessage ?? /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ jsx(CircleDashed, { className: "h-3.5 w-3.5 shrink-0" }), t("Waiting for build logs...")]
	});
	const logsContainerRef = useRef(null);
	const hasUserScrolledRef = useRef(false);
	const isFollowingRef = useRef(false);
	const [logsSearch, setLogsSearch] = useState("");
	const [isAtTop, setIsAtTop] = useState(true);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const readScrollPosition = useCallback(() => {
		const el = logsContainerRef.current;
		if (!el) return;
		const { scrollTop, scrollHeight, clientHeight } = el;
		const threshold = 10;
		const atTop = scrollTop <= threshold;
		const atBottom = scrollTop + clientHeight >= scrollHeight - threshold;
		setIsAtTop((prev) => prev === atTop ? prev : atTop);
		setIsAtBottom((prev) => prev === atBottom ? prev : atBottom);
	}, []);
	const handleUserScroll = useCallback(() => {
		if (isFollowingRef.current) {
			readScrollPosition();
			return;
		}
		hasUserScrolledRef.current = true;
		readScrollPosition();
	}, [readScrollPosition]);
	useEffect(() => {
		const el = logsContainerRef.current;
		if (!el) return;
		readScrollPosition();
		el.addEventListener("scroll", handleUserScroll, { passive: true });
		window.addEventListener("resize", readScrollPosition);
		return () => {
			el.removeEventListener("scroll", handleUserScroll);
			window.removeEventListener("resize", readScrollPosition);
		};
	}, [handleUserScroll, readScrollPosition]);
	useLayoutEffect(() => {
		const el = logsContainerRef.current;
		if (!el) return;
		if (!hasUserScrolledRef.current || isAtBottom) {
			isFollowingRef.current = true;
			el.scrollTop = el.scrollHeight;
			readScrollPosition();
			requestAnimationFrame(() => {
				isFollowingRef.current = false;
			});
			return;
		}
		readScrollPosition();
	}, [
		buildLogs,
		isAtBottom,
		readScrollPosition
	]);
	const handleScrollToTop = useCallback(() => {
		logsContainerRef.current?.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);
	const handleScrollToBottom = useCallback(() => {
		const el = logsContainerRef.current;
		if (el) el.scrollTo({
			top: el.scrollHeight,
			behavior: "smooth"
		});
	}, []);
	const handleCopyLogs = useCallback(async () => {
		if (!buildLogs) {
			toast.error(t("No logs to copy"));
			return;
		}
		try {
			await navigator.clipboard.writeText(buildLogs);
			toast.success(t("Logs copied to clipboard"));
		} catch {
			toast.error(t("Failed to copy logs"));
		}
	}, [buildLogs, t]);
	const handleDownloadLogs = useCallback(() => {
		if (!buildLogs) {
			toast.error(t("No logs to download"));
			return;
		}
		const blob = new Blob([buildLogs], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = downloadFilename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		toast.success(t("Logs downloaded"));
	}, [
		buildLogs,
		downloadFilename,
		t
	]);
	if (hideWhenEmpty && !buildLogs) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			!hideTitle && /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t(title)
				}), durationDisplay && /* @__PURE__ */ jsxs("span", {
					className: "text-[12px] sm:text-[13px] text-muted-foreground shrink-0",
					children: [
						t("Duration:"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: durationDisplay
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: `px-4 sm:px-6 py-3 ${!hideTitle ? "border-t border-border" : ""}`,
				children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex-1 min-w-0",
							children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
								placeholder: t("Search logs..."),
								value: logsSearch,
								onChange: (e) => setLogsSearch(e.target.value),
								className: "ps-9 h-9 text-[13px]"
							})]
						}),
						/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleDownloadLogs,
								disabled: !buildLogs,
								className: "h-9 w-9 p-0 shrink-0",
								children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Download logs") }) })] }),
						/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleCopyLogs,
								disabled: !buildLogs,
								className: "h-9 w-9 p-0 shrink-0",
								children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Copy logs") }) })] })
					]
				}) })
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					ref: logsContainerRef,
					className: "h-[400px] overflow-y-scroll overflow-x-hidden pe-16 [scrollbar-gutter:stable]",
					children: /* @__PURE__ */ jsx(BuildLogsView, {
						buildLogs,
						searchTerm: logsSearch,
						highlightLineOnHover: true,
						emptyMessage: resolvedEmptyMessage
					})
				}), buildLogs && /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-3 end-3 flex flex-col gap-2 z-10",
					children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleScrollToTop,
							disabled: isAtTop,
							className: "h-8 w-8 p-0 bg-card/95 backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "left",
						children: /* @__PURE__ */ jsx("p", { children: t("Scroll to top") })
					})] }), /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleScrollToBottom,
							disabled: isAtBottom,
							className: "h-8 w-8 p-0 bg-card/95 backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "left",
						children: /* @__PURE__ */ jsx("p", { children: t("Scroll to bottom") })
					})] })] })
				})]
			})
		]
	});
}
export { BuildLogsCard as t };
