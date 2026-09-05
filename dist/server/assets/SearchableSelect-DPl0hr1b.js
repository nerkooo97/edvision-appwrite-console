import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
function SearchableSelectItemContent({ item }) {
	const ItemIcon = item.icon;
	if (!item.description && !ItemIcon) return /* @__PURE__ */ jsx(Fragment, { children: item.label });
	if (item.inlineDescription) return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-2",
		children: [ItemIcon ? /* @__PURE__ */ jsx(ItemIcon, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }) : null, /* @__PURE__ */ jsxs("span", {
			className: "flex min-w-0 flex-1 items-center gap-1.5",
			children: [/* @__PURE__ */ jsx("span", {
				className: "truncate",
				children: item.label
			}), item.description ? /* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[11px] text-muted-foreground",
				children: item.description
			}) : null]
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-start gap-2",
		children: [ItemIcon ? /* @__PURE__ */ jsx(ItemIcon, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" }) : null, /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ jsx("span", {
				className: "truncate",
				children: item.label
			}), item.description ? /* @__PURE__ */ jsx("span", {
				className: "truncate text-[11px] text-muted-foreground",
				children: item.description
			}) : null]
		})]
	});
}
function SearchableSelect({ value, onValueChange, items, footerItems, placeholder = "Select…", searchPlaceholder = "Search...", disabled = false, triggerClassName, contentClassName, listClassName, emptyMessage = "No results", showPlaceholderWhenEmpty = true, onSearchChange, isFetching = false, hasNextPage = false, isFetchingNextPage = false, onLoadMore, listFooter, onOpenChange }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const listScrollRef = useRef(null);
	const sentinelRef = useRef(null);
	const selectedItem = useMemo(() => [...items, ...footerItems ?? []], [items, footerItems]).find((i) => i.value === value);
	const selectedLabel = selectedItem?.label ?? "";
	const displayText = value && selectedLabel ? selectedLabel : showPlaceholderWhenEmpty ? placeholder : "";
	const SelectedIcon = selectedItem?.icon;
	useEffect(() => {
		const sentinel = sentinelRef.current;
		const root = listScrollRef.current;
		if (!sentinel || !root || !open || !hasNextPage || isFetchingNextPage || !onLoadMore) return;
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) onLoadMore();
		}, {
			root,
			rootMargin: "120px",
			threshold: .1
		});
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [
		hasNextPage,
		isFetchingNextPage,
		onLoadMore,
		open,
		items.length
	]);
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: (nextOpen) => {
			setOpen(nextOpen);
			onOpenChange?.(nextOpen);
			if (!nextOpen && onSearchChange) onSearchChange("");
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				role: "combobox",
				"aria-expanded": open,
				disabled,
				className: cn("h-9 w-full justify-between gap-2 text-[13px] font-normal", !value && showPlaceholderWhenEmpty && "text-muted-foreground", triggerClassName),
				children: [/* @__PURE__ */ jsxs("span", {
					className: "flex min-w-0 items-center gap-2 truncate",
					children: [SelectedIcon ? /* @__PURE__ */ jsx(SelectedIcon, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }) : null, /* @__PURE__ */ jsxs("span", {
						className: "flex min-w-0 items-center gap-1.5 truncate",
						children: [/* @__PURE__ */ jsx("span", {
							className: "truncate",
							children: t(displayText || placeholder)
						}), selectedItem?.inlineDescription && selectedItem.description ? /* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-[11px] text-muted-foreground",
							children: selectedItem.description
						}) : null]
					})]
				}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: cn("max-h-[min(320px,var(--radix-popover-content-available-height))] w-[var(--radix-popover-trigger-width)] overflow-hidden p-0", contentClassName),
			align: "start",
			onWheelCapture: (event) => {
				event.stopPropagation();
			},
			children: /* @__PURE__ */ jsxs(Command$1, {
				shouldFilter: !onSearchChange,
				className: "overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t(searchPlaceholder),
							className: cn("h-9 text-[13px]", isFetching && "pe-8"),
							onValueChange: onSearchChange
						}), /* @__PURE__ */ jsx("div", {
							className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
						})]
					}),
					/* @__PURE__ */ jsx(CommandList, {
						ref: listScrollRef,
						className: cn("min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain", listClassName),
						children: items.length === 0 && isFetching ? /* @__PURE__ */ jsx("div", {
							className: "px-3 py-6 text-center text-[12px] text-muted-foreground",
							children: t("Loading…")
						}) : items.length === 0 && !footerItems?.length ? /* @__PURE__ */ jsx(CommandEmpty, {
							className: "py-4 text-center text-[13px] text-muted-foreground",
							children: t(emptyMessage)
						}) : /* @__PURE__ */ jsxs(CommandGroup, { children: [
							items.map((item) => /* @__PURE__ */ jsx(CommandItem, {
								value: item.searchText ?? item.label,
								className: "text-[13px]",
								onSelect: () => {
									onValueChange(item.value);
									setOpen(false);
								},
								children: /* @__PURE__ */ jsx(SearchableSelectItemContent, { item })
							}, item.value)),
							hasNextPage ? /* @__PURE__ */ jsx("div", {
								ref: sentinelRef,
								className: "h-px w-full shrink-0",
								"aria-hidden": true
							}) : null,
							isFetchingNextPage ? /* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-center py-2",
								children: /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" })
							}) : null
						] })
					}),
					footerItems && footerItems.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: "shrink-0 border-t border-border bg-popover p-1",
						children: footerItems.map((item) => /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-start text-[13px] outline-hidden hover:bg-accent hover:text-accent-foreground",
							onClick: () => {
								onValueChange(item.value);
								setOpen(false);
							},
							children: /* @__PURE__ */ jsx(SearchableSelectItemContent, { item })
						}, item.value))
					}) : null,
					listFooter ? /* @__PURE__ */ jsx("div", {
						className: "border-t border-border px-3 py-2 text-[11px] tabular-nums text-muted-foreground",
						children: listFooter
					}) : null
				]
			})
		})]
	});
}
export { SearchableSelect as t };
