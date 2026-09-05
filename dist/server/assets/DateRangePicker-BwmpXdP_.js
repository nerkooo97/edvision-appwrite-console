import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { b as findMatchingUsageDateRangePreset, d as isFullCalendarDayRange, f as normalizeUsageDateRangeSelection, x as getUsageDateRangePresetByValue, y as USAGE_DATE_RANGE_PRESET_GROUPS } from "./chart-interval-Dbrn19qD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as SelectLabel, c as SelectValue, i as SelectItem, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as useLocalizedDateFormat } from "./use-localized-date-format-Dy8J1Ssn.js";
import { t as Calendar$1 } from "./calendar-6OJ5dwYN.js";
import { t as useMediaMinWidth } from "./use-media-min-width-T-T6WgXi.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { isSameDay } from "date-fns";
import { Calendar, ChevronDown } from "lucide-react";
var PRESET_GROUPS = USAGE_DATE_RANGE_PRESET_GROUPS;
var WIDE_LAYOUT_MIN_WIDTH = 820;
function findMatchingPreset(range) {
	return findMatchingUsageDateRangePreset(range);
}
function DateRangePicker({ dateRange, onDateRangeChange, className, popoverContentAlign = "end", presetId = null }) {
	const t = useT();
	const { formatDate } = useLocalizedDateFormat();
	const isWideLayout = useMediaMinWidth(WIDE_LAYOUT_MIN_WIDTH);
	const [isOpen, setIsOpen] = React$1.useState(false);
	const [pendingDateRange, setPendingDateRange] = React$1.useState(dateRange);
	React$1.useEffect(() => {
		if (!isOpen) setPendingDateRange(dateRange);
	}, [dateRange, isOpen]);
	const matchingPreset = React$1.useMemo(() => {
		if (presetId) return getUsageDateRangePresetByValue(presetId) ?? findMatchingPreset(dateRange);
		return findMatchingPreset(dateRange);
	}, [dateRange, presetId]);
	const pendingMatchingPreset = React$1.useMemo(() => findMatchingPreset(pendingDateRange), [pendingDateRange]);
	const [selectedPreset, setSelectedPreset] = React$1.useState(null);
	React$1.useEffect(() => {
		setSelectedPreset((isOpen ? pendingMatchingPreset : matchingPreset)?.value ?? null);
	}, [
		isOpen,
		matchingPreset?.value,
		pendingMatchingPreset?.value
	]);
	const handleOpenChange = (open) => {
		if (open) {
			if (presetId) {
				const preset = getUsageDateRangePresetByValue(presetId);
				setPendingDateRange(preset ? preset.getRange() : dateRange);
			} else setPendingDateRange(dateRange);
			setIsOpen(true);
			return;
		}
		if (isOpen) {
			setPendingDateRange(dateRange);
			setIsOpen(false);
		}
	};
	const handlePresetSelect = (preset) => {
		const range = preset.getRange();
		setPendingDateRange(range);
		setSelectedPreset(preset.value);
		onDateRangeChange(range);
		setIsOpen(false);
	};
	const handlePresetValueChange = (value) => {
		const preset = getUsageDateRangePresetByValue(value);
		if (preset) handlePresetSelect(preset);
	};
	const handleClear = () => {
		setPendingDateRange(void 0);
		setSelectedPreset(null);
	};
	const handleApply = () => {
		onDateRangeChange(normalizeUsageDateRangeSelection(pendingDateRange));
		setIsOpen(false);
	};
	const handleCancel = () => {
		setPendingDateRange(dateRange);
		setIsOpen(false);
	};
	const formatDateRange = (range) => {
		if (!range?.from) return t("Select date range");
		if (!range.to) return formatDate(range.from, "MMM d, yyyy");
		if (isSameDay(range.from, range.to)) {
			if (isFullCalendarDayRange(range.from, range.to)) return formatDate(range.from, "MMM d, yyyy");
			return `${formatDate(range.from, "MMM d · h:mm a")} – ${formatDate(range.to, "h:mm a")}`;
		}
		if (isFullCalendarDayRange(range.from, range.to)) return `${formatDate(range.from, "MMM d")} - ${formatDate(range.to, "MMM d, yyyy")}`;
		return `${formatDate(range.from, "MMM d, h:mm a")} - ${formatDate(range.to, "MMM d, h:mm a")}`;
	};
	const triggerLabel = matchingPreset ? t(matchingPreset.label) : formatDateRange(dateRange);
	const pendingSummary = pendingMatchingPreset ? t(pendingMatchingPreset.label) : formatDateRange(pendingDateRange);
	return /* @__PURE__ */ jsxs(Popover, {
		open: isOpen,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "outline",
				size: "sm",
				className: cn("h-8 gap-1.5 text-[12px] font-medium justify-start text-start min-w-[180px]", !dateRange && "text-muted-foreground", className),
				children: [
					/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ jsx("span", {
						className: "flex-1 truncate text-start",
						children: triggerLabel
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-50 shrink-0" })
				]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: cn("overflow-hidden rounded-xl p-0 shadow-lg", isWideLayout ? "w-auto max-w-[calc(100vw-1rem)]" : "w-[min(calc(100vw-1rem),21.5rem)]"),
			align: popoverContentAlign,
			sideOffset: 4,
			collisionPadding: 8,
			children: isWideLayout ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-row items-stretch",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex w-[220px] shrink-0 flex-col border-e border-border bg-muted/25",
					children: [/* @__PURE__ */ jsx("div", {
						className: "shrink-0 border-b border-border/80 px-3 py-2.5",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-semibold leading-none text-foreground",
							children: t("Quick select")
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "flex min-h-0 flex-1 flex-col justify-start px-2 py-2",
						children: PRESET_GROUPS.map((group, groupIndex) => /* @__PURE__ */ jsxs("div", {
							className: cn(groupIndex > 0 && "mt-2 border-t border-border/60 pt-2"),
							children: [group.title ? /* @__PURE__ */ jsx("p", {
								className: "mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t(group.title)
							}) : null, /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 gap-0.5",
								children: group.presets.map((preset) => {
									return /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => handlePresetSelect(preset),
										className: cn("cursor-pointer rounded-md px-2.5 py-1.5 text-start text-[12px] font-medium transition-colors", "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", selectedPreset === preset.value ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground hover:bg-background/60 hover:text-foreground"),
										children: t(preset.label)
									}, preset.value);
								})
							})]
						}, group.title ?? `group-${groupIndex}`))
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 min-w-0 flex-1 flex-col bg-background",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-3",
						children: /* @__PURE__ */ jsx(Calendar$1, {
							mode: "range",
							selected: pendingDateRange,
							onSelect: setPendingDateRange,
							numberOfMonths: 2,
							defaultMonth: pendingDateRange?.from || dateRange?.from || /* @__PURE__ */ new Date()
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center justify-between gap-2 border-t border-border p-3",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-7 text-[11px]",
							onClick: handleClear,
							children: t("Clear")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-7 text-[11px]",
								onClick: handleCancel,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-7 text-[11px]",
								onClick: handleApply,
								children: t("Apply")
							})]
						})]
					})]
				})]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col bg-background",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "border-b border-border px-3.5 py-3",
						children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "date-range-quick-select",
							className: "mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Quick select")
						}), /* @__PURE__ */ jsxs(Select, {
							value: selectedPreset ?? void 0,
							onValueChange: handlePresetValueChange,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								id: "date-range-quick-select",
								size: "sm",
								className: "h-9 w-full min-w-0 bg-muted/30 text-[13px]",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: pendingSummary })
							}), /* @__PURE__ */ jsx(SelectContent, {
								position: "popper",
								className: "z-[10060]",
								align: "start",
								children: PRESET_GROUPS.map((group, groupIndex) => /* @__PURE__ */ jsxs(SelectGroup, { children: [group.title ? /* @__PURE__ */ jsx(SelectLabel, {
									className: "text-[10px] font-semibold uppercase tracking-wider",
									children: t(group.title)
								}) : null, group.presets.map((preset) => /* @__PURE__ */ jsx(SelectItem, {
									value: preset.value,
									className: "text-[13px]",
									children: t(preset.label)
								}, preset.value))] }, group.title ?? `group-${groupIndex}`))
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-2.5 pt-2 pb-1",
						children: /* @__PURE__ */ jsx(Calendar$1, {
							mode: "range",
							selected: pendingDateRange,
							onSelect: setPendingDateRange,
							numberOfMonths: 1,
							defaultMonth: pendingDateRange?.from || dateRange?.from || /* @__PURE__ */ new Date(),
							className: "mx-auto w-full p-0 [--cell-size:2.25rem]",
							classNames: {
								root: "w-full",
								months: "flex w-full flex-col relative",
								month: "flex w-full flex-col gap-2",
								week: "flex w-full mt-1",
								weekdays: "flex w-full",
								caption_label: "select-none font-medium text-[13px]"
							}
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center justify-between gap-2 border-t border-border bg-muted/20 px-3.5 py-2.5",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "h-8 px-2.5 text-[12px]",
							onClick: handleClear,
							children: t("Clear")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 px-3 text-[12px]",
								onClick: handleCancel,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-8 px-3 text-[12px]",
								onClick: handleApply,
								children: t("Apply")
							})]
						})]
					})
				]
			})
		})]
	});
}
export { DateRangePicker as t };
