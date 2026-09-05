import { i as scrollConsoleMainToTop, t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { c as DropdownMenuRadioItem, p as DropdownMenuTrigger, r as DropdownMenuContent, s as DropdownMenuRadioGroup, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
var paginationChevronClass = "h-4 w-4";
function SimplePagination({ currentPage, hasMore, onPageChange, disabled = false, className }) {
	const t = useT();
	const prevPageRef = useRef(currentPage);
	const isUserInitiatedRef = useRef(false);
	const canGoPrevious = currentPage > 1;
	const canGoNext = hasMore;
	useEffect(() => {
		if (prevPageRef.current !== currentPage) {
			if (!isUserInitiatedRef.current) scrollConsoleMainToTop();
			isUserInitiatedRef.current = false;
			prevPageRef.current = currentPage;
		}
	}, [currentPage]);
	const handlePreviousPage = () => {
		if (canGoPrevious && !disabled) {
			isUserInitiatedRef.current = true;
			onPageChange(currentPage - 1);
			scrollConsoleMainToTop();
		}
	};
	const handleNextPage = () => {
		if (canGoNext && !disabled) {
			isUserInitiatedRef.current = true;
			onPageChange(currentPage + 1);
			scrollConsoleMainToTop();
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center justify-center gap-0", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "inline-flex items-center rounded-md border border-border bg-muted/30 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 rounded-none border-0 border-e border-border hover:bg-muted/80",
					onClick: handlePreviousPage,
					disabled: !canGoPrevious || disabled,
					"aria-label": t("Go to previous page"),
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: paginationChevronClass })
				}),
				/* @__PURE__ */ jsx("span", {
					className: "flex items-center justify-center min-w-[2.25rem] h-8 px-2.5 text-[12px] font-medium text-muted-foreground tabular-nums border-e border-border",
					children: currentPage
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 rounded-none border-0 hover:bg-muted/80",
					onClick: handleNextPage,
					disabled: !canGoNext || disabled,
					"aria-label": t("Go to next page"),
					children: /* @__PURE__ */ jsx(ChevronRight, { className: paginationChevronClass })
				})
			]
		})
	});
}
function Pagination({ currentPage, totalItems, totalKnown = true, hasNextPage = false, pageSize, pageSizeOptions = [
	10,
	25,
	50,
	100
], onPageChange, onPageSizeChange, className, showTotal = true, itemLabel = "items", showPageSizeSelector = true, scrollToTopOnPageChange = true, displayItemRange }) {
	const t = useT();
	const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
	const derivedStart = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
	const derivedEnd = Math.min(currentPage * pageSize, totalItems);
	const startItem = displayItemRange?.start ?? derivedStart;
	const endItem = displayItemRange ? totalKnown ? Math.min(displayItemRange.end, totalItems) : displayItemRange.end : derivedEnd;
	const canGoPrevious = currentPage > 1;
	const canGoNext = totalKnown ? currentPage < totalPages : hasNextPage;
	const prevPageRef = useRef(currentPage);
	const isUserInitiatedRef = useRef(false);
	const scrollToTop = () => {
		if (scrollToTopOnPageChange) scrollConsoleMainToTop();
	};
	useEffect(() => {
		if (prevPageRef.current !== currentPage) {
			if (!isUserInitiatedRef.current) scrollToTop();
			isUserInitiatedRef.current = false;
			prevPageRef.current = currentPage;
		}
	}, [currentPage]);
	const handleFirstPage = () => {
		if (canGoPrevious) {
			isUserInitiatedRef.current = true;
			onPageChange(1);
			scrollToTop();
		}
	};
	const handlePreviousPage = () => {
		if (canGoPrevious) {
			isUserInitiatedRef.current = true;
			onPageChange(currentPage - 1);
			scrollToTop();
		}
	};
	const handleNextPage = () => {
		if (canGoNext) {
			isUserInitiatedRef.current = true;
			onPageChange(currentPage + 1);
			scrollToTop();
		}
	};
	const handleLastPage = () => {
		if (totalKnown && canGoNext) {
			isUserInitiatedRef.current = true;
			onPageChange(totalPages);
			scrollToTop();
		}
	};
	const handlePageSizeChange = (value) => {
		onPageSizeChange(parseInt(value, 10));
		scrollToTop();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("@container flex items-center justify-between gap-2 min-h-8 py-3 text-[12px] text-muted-foreground w-full", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 min-w-0",
			children: [showTotal && /* @__PURE__ */ jsx("span", {
				className: "hidden @[600px]:inline whitespace-nowrap",
				children: totalKnown ? totalItems === 0 ? `${t("No")} ${t(itemLabel)}` : `${startItem}-${endItem} ${t("of")} ${totalItems.toLocaleString()}` : startItem === 0 && endItem === 0 ? `${t("No")} ${t(itemLabel)}` : `${startItem}-${endItem}`
			}), showPageSizeSelector && /* @__PURE__ */ jsxs("div", {
				className: "hidden sm:flex items-center gap-2 shrink-0",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground whitespace-nowrap text-[12px]",
						children: t("Show")
					}),
					/* @__PURE__ */ jsxs(DropdownMenu, {
						modal: false,
						children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 w-[72px] gap-1 px-2 text-[12px] font-normal tabular-nums",
								"aria-label": t("Rows per page"),
								children: [pageSize, /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(DropdownMenuContent, {
							align: "start",
							className: "z-[10050] min-w-[var(--radix-dropdown-menu-trigger-width)]",
							children: /* @__PURE__ */ jsx(DropdownMenuRadioGroup, {
								value: pageSize.toString(),
								onValueChange: handlePageSizeChange,
								children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx(DropdownMenuRadioItem, {
									value: size.toString(),
									className: "text-[12px]",
									children: size
								}, size))
							})
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground whitespace-nowrap text-[12px]",
						children: t("per page")
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-2 flex-shrink-0",
			children: /* @__PURE__ */ jsxs("div", {
				className: "inline-flex items-center rounded-md border border-border bg-muted/30 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "hidden h-8 w-8 rounded-none border-0 border-e border-border @[500px]:inline-flex hover:bg-muted/80",
						onClick: handleFirstPage,
						disabled: !canGoPrevious,
						"aria-label": t("Go to first page"),
						children: /* @__PURE__ */ jsx(ChevronsLeft, { className: paginationChevronClass })
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-8 w-8 rounded-none border-0 border-e border-border hover:bg-muted/80",
						onClick: handlePreviousPage,
						disabled: !canGoPrevious,
						"aria-label": t("Go to previous page"),
						children: /* @__PURE__ */ jsx(ChevronLeft, { className: paginationChevronClass })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden items-center gap-1.5 h-8 px-3 border-e border-border @[400px]:flex",
						dir: "ltr",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground whitespace-nowrap text-[12px]",
								children: t("Page")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground tabular-nums text-[12px]",
								children: currentPage
							}),
							totalKnown ? /* @__PURE__ */ jsxs("span", {
								className: "text-muted-foreground whitespace-nowrap text-[12px]",
								children: [
									t("of"),
									" ",
									totalPages.toLocaleString()
								]
							}) : null
						]
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-8 w-8 rounded-none border-0 border-e border-border hover:bg-muted/80",
						onClick: handleNextPage,
						disabled: !canGoNext,
						"aria-label": t("Go to next page"),
						children: /* @__PURE__ */ jsx(ChevronRight, { className: paginationChevronClass })
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "hidden h-8 w-8 rounded-none border-0 @[500px]:inline-flex hover:bg-muted/80",
						onClick: handleLastPage,
						disabled: !totalKnown || !canGoNext,
						"aria-label": t("Go to last page"),
						children: /* @__PURE__ */ jsx(ChevronsRight, { className: paginationChevronClass })
					})
				]
			})
		})]
	});
}
export { SimplePagination as n, Pagination as t };
