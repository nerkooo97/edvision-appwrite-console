import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as useLocalizedDateFormat } from "./use-localized-date-format-Dy8J1Ssn.js";
import { t as Calendar$1 } from "./calendar-6OJ5dwYN.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { format } from "date-fns";
import { Calendar, ChevronDown } from "lucide-react";
function parseISO$1(value) {
	if (!value) return null;
	const d = new Date(value);
	return Number.isNaN(d.getTime()) ? null : d;
}
function DateTimePicker({ value, onChange, disabled, placeholder = "Select date & time", className, align = "start", clearable = true, size = "default", hideIcon = false, autoFocus, triggerRef, id, ariaLabel, onFocus }) {
	const t = useT();
	const { formatDate } = useLocalizedDateFormat();
	const [open, setOpen] = React$1.useState(false);
	const date = React$1.useMemo(() => parseISO$1(value), [value]);
	const [timeStr, setTimeStr] = React$1.useState(() => date ? format(date, "HH:mm") : "");
	React$1.useEffect(() => {
		setTimeStr(date ? format(date, "HH:mm") : "");
	}, [date]);
	const formatted = date ? formatDate(date, "MMM d, yyyy '·' HH:mm") : "";
	function commit(next) {
		onChange(next.toISOString());
	}
	function handleSelectDate(next) {
		if (!next) return;
		const [hStr = "0", mStr = "0"] = (timeStr || "00:00").split(":");
		const h = parseInt(hStr, 10) || 0;
		const m = parseInt(mStr, 10) || 0;
		const merged = new Date(next);
		merged.setHours(h, m, 0, 0);
		commit(merged);
	}
	function handleTimeChange(t$1) {
		setTimeStr(t$1);
		const base = date ?? /* @__PURE__ */ new Date();
		const [hStr = "0", mStr = "0"] = (t$1 || "00:00").split(":");
		const h = parseInt(hStr, 10) || 0;
		const m = parseInt(mStr, 10) || 0;
		const merged = new Date(base);
		merged.setHours(h, m, 0, 0);
		commit(merged);
	}
	function handleClear() {
		onChange(null);
		setOpen(false);
	}
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				id,
				ref: triggerRef,
				type: "button",
				variant: "outline",
				disabled,
				autoFocus,
				onFocus,
				"aria-label": ariaLabel ? t(ariaLabel) : void 0,
				className: cn("w-full cursor-pointer justify-start gap-2 text-start font-normal", size === "sm" ? "h-8 text-[12px]" : "h-9 text-[13px]", !date && "text-muted-foreground", className),
				children: [
					!hideIcon && /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0 opacity-70" }),
					/* @__PURE__ */ jsx("span", {
						className: "flex-1 truncate",
						children: date ? formatted : t(placeholder)
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })
				]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			align,
			sideOffset: 4,
			className: "w-auto overflow-hidden rounded-xl p-0 shadow-lg",
			children: [/* @__PURE__ */ jsx("div", {
				className: "p-3",
				children: /* @__PURE__ */ jsx(Calendar$1, {
					mode: "single",
					selected: date ?? void 0,
					onSelect: handleSelectDate,
					defaultMonth: date ?? /* @__PURE__ */ new Date()
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 border-t border-border bg-muted/30 p-3",
				children: [/* @__PURE__ */ jsxs("label", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
						children: t("Time")
					}), /* @__PURE__ */ jsx(Input, {
						type: "time",
						value: timeStr,
						onChange: (e) => handleTimeChange(e.target.value),
						className: "h-7 w-[110px] cursor-pointer text-[12px]"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [clearable && date && /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 cursor-pointer text-[11px]",
						onClick: handleClear,
						children: t("Clear")
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-7 cursor-pointer text-[11px]",
						onClick: () => setOpen(false),
						children: t("Done")
					})]
				})]
			})]
		})]
	});
}
export { DateTimePicker as t };
