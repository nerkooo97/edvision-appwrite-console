import { t as cn } from "./utils-DoqqkI3X.js";
import { i as getActiveLanguage } from "./i18n-Db4baE06.js";
import { n as useT, t as translate } from "./translate-DZcqveGn.js";
import { a as getIntlLocale } from "./date-format-BD1j7PxK.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as useLocalizedDateFormat } from "./use-localized-date-format-Dy8J1Ssn.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
var UNIT_FORMS = {
	minute: {
		singular: "minute",
		plural: "minutes"
	},
	hour: {
		singular: "hour",
		plural: "hours"
	},
	day: {
		singular: "day",
		plural: "days"
	},
	week: {
		singular: "week",
		plural: "weeks"
	},
	month: {
		singular: "month",
		plural: "months"
	},
	year: {
		singular: "year",
		plural: "years"
	}
};
function getUnitLabel(count, unit, t) {
	const forms = UNIT_FORMS[unit];
	return t(count === 1 ? forms.singular : forms.plural);
}
function formatDurationPhrase(duration, isFuture, t) {
	const language = getActiveLanguage();
	if (language === "he") return `${t(isFuture ? "In relative time" : "Ago relative time")} ${duration}`;
	if (language === "ja") return `${duration}${t(isFuture ? "In relative time" : "Ago relative time")}`;
	return isFuture ? `in ${duration}` : `${duration} ago`;
}
function formatRelativeDuration(count, unit, options = {}) {
	const t = options.t ?? translate;
	return formatDurationPhrase(`${count} ${getUnitLabel(count, unit, t)}`, options.isFuture ?? false, t);
}
function formatRelativeDurationBreakdown(parts, options = {}) {
	if (parts.length === 0) return "";
	const t = options.t ?? translate;
	return formatDurationPhrase(parts.map(({ count, unit }) => `${count} ${getUnitLabel(count, unit, t)}`).join(", "), options.isFuture ?? false, t);
}
function parseDate(date) {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return Number.isNaN(dateObj.getTime()) ? null : dateObj;
}
function formatShortRelativeTime(date, options = {}) {
	const t = options.t ?? translate;
	const dateObj = parseDate(date);
	if (!dateObj) return t("Unknown");
	const diffMs = (/* @__PURE__ */ new Date()).getTime() - dateObj.getTime();
	const diffMinutes = Math.floor(diffMs / 6e4);
	if (diffMinutes < 1) return t("Just now");
	const language = getActiveLanguage();
	if (language === "he" || language === "ja") {
		if (diffMinutes < 60) return formatRelativeDuration(diffMinutes, "minute", { t });
		const diffHours$1 = Math.floor(diffMinutes / 60);
		if (diffHours$1 < 24) return formatRelativeDuration(diffHours$1, "hour", { t });
		const diffDays$1 = Math.floor(diffHours$1 / 24);
		if (diffDays$1 < 7) return formatRelativeDuration(diffDays$1, "day", { t });
		const diffWeeks$1 = Math.floor(diffDays$1 / 7);
		if (diffWeeks$1 < 4) return formatRelativeDuration(diffWeeks$1, "week", { t });
		return dateObj.toLocaleDateString(getIntlLocale(language), {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
	}
	if (diffMinutes < 60) return `${diffMinutes}m ago`;
	const diffHours = Math.floor(diffMinutes / 60);
	if (diffHours < 24) return `${diffHours}h ago`;
	const diffDays = Math.floor(diffHours / 24);
	if (diffDays < 7) return `${diffDays}d ago`;
	const diffWeeks = Math.floor(diffDays / 7);
	if (diffWeeks < 4) return `${diffWeeks}w ago`;
	return dateObj.toLocaleDateString(getIntlLocale("en"), {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function pickPrimaryRelativeUnit(diff) {
	if (diff.diffYears > 0) return {
		count: diff.diffYears,
		unit: "year"
	};
	if (diff.diffMonths > 0) return {
		count: diff.diffMonths,
		unit: "month"
	};
	if (diff.diffWeeks > 0) return {
		count: diff.diffWeeks,
		unit: "week"
	};
	if (diff.diffDays > 0) return {
		count: diff.diffDays,
		unit: "day"
	};
	if (diff.diffHours > 0) return {
		count: diff.diffHours,
		unit: "hour"
	};
	return {
		count: diff.diffMinutes,
		unit: "minute"
	};
}
function parseTooltipDate(date) {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return Number.isNaN(dateObj.getTime()) ? null : dateObj;
}
function DateTooltip({ date, className, showFormattedDate = false, live = false, liveUpdateMs = 3e4, disableTooltip = false }) {
	const t = useT();
	const dateObj = parseTooltipDate(date);
	if (!dateObj) return /* @__PURE__ */ jsx("span", {
		className: cn("text-muted-foreground", className),
		children: t("Unknown")
	});
	return /* @__PURE__ */ jsx(DateTooltipContent, {
		dateObj,
		className,
		showFormattedDate,
		live,
		liveUpdateMs,
		disableTooltip
	});
}
function DateTooltipContent({ dateObj, className, showFormattedDate = false, live = false, liveUpdateMs = 3e4, disableTooltip = false }) {
	const t = useT();
	const { formatDateTime: formatLocalizedDateTimeForLanguage } = useLocalizedDateFormat();
	const [nowMs, setNowMs] = useState(() => Date.now());
	useEffect(() => {
		if (!live || showFormattedDate) return;
		const intervalId = window.setInterval(() => {
			setNowMs(Date.now());
		}, Math.max(5e3, liveUpdateMs));
		return () => window.clearInterval(intervalId);
	}, [
		live,
		liveUpdateMs,
		showFormattedDate
	]);
	const diffMs = dateObj.getTime() - nowMs;
	const isFuture = diffMs > 0;
	const absDiffMs = Math.abs(diffMs);
	const diffSeconds = Math.floor(absDiffMs / 1e3);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);
	const diffWeeks = Math.floor(diffDays / 7);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);
	const getSimpleRelativeTime = () => {
		if (diffSeconds < 60) return t("Just now");
		const { count, unit } = pickPrimaryRelativeUnit({
			diffYears,
			diffMonths,
			diffWeeks,
			diffDays,
			diffHours,
			diffMinutes
		});
		return formatRelativeDuration(count, unit, {
			isFuture,
			t
		});
	};
	const getDetailedRelativeTime = () => {
		const parts = [];
		let remaining = absDiffMs;
		const years = Math.floor(remaining / (365 * 24 * 60 * 60 * 1e3));
		remaining -= years * 365 * 24 * 60 * 60 * 1e3;
		const months = Math.floor(remaining / (720 * 60 * 60 * 1e3));
		remaining -= months * 30 * 24 * 60 * 60 * 1e3;
		const weeks = Math.floor(remaining / (10080 * 60 * 1e3));
		remaining -= weeks * 7 * 24 * 60 * 60 * 1e3;
		const days = Math.floor(remaining / (1440 * 60 * 1e3));
		remaining -= days * 24 * 60 * 60 * 1e3;
		const hours = Math.floor(remaining / (3600 * 1e3));
		remaining -= hours * 60 * 60 * 1e3;
		const minutes = Math.floor(remaining / (60 * 1e3));
		const timeUnits = [
			{
				value: years,
				unit: "year"
			},
			{
				value: months,
				unit: "month"
			},
			{
				value: weeks,
				unit: "week"
			},
			{
				value: days,
				unit: "day"
			},
			{
				value: hours,
				unit: "hour"
			},
			{
				value: minutes,
				unit: "minute"
			}
		];
		let startIndex = 0;
		for (let i = 0; i < timeUnits.length; i++) if (timeUnits[i].value > 0) {
			startIndex = i;
			break;
		}
		for (let i = startIndex; i < timeUnits.length && parts.length < 3; i++) {
			const unit = timeUnits[i];
			if (unit.value > 0 || i === timeUnits.length - 1 && parts.length === 0) parts.push({
				count: unit.value,
				unit: unit.unit
			});
		}
		return formatRelativeDurationBreakdown(parts, {
			isFuture,
			t
		});
	};
	const formatDateTime = (d, timeZone) => {
		return formatLocalizedDateTimeForLanguage(d, {
			day: "numeric",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
			timeZone
		});
	};
	const utcTime = formatDateTime(dateObj, "UTC");
	const localTime = formatDateTime(dateObj);
	const [isOpen, setIsOpen] = useState(false);
	const [copiedField, setCopiedField] = useState(null);
	const closeTimeoutRef = useRef(null);
	const isoTime = dateObj.toISOString();
	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current !== null) window.clearTimeout(closeTimeoutRef.current);
		};
	}, []);
	const openPopover = () => {
		if (closeTimeoutRef.current !== null) {
			window.clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		setIsOpen(true);
	};
	const scheduleClosePopover = () => {
		if (closeTimeoutRef.current !== null) window.clearTimeout(closeTimeoutRef.current);
		closeTimeoutRef.current = window.setTimeout(() => {
			setIsOpen(false);
			closeTimeoutRef.current = null;
		}, 120);
	};
	const handleCopyIso = (field, event) => {
		event?.preventDefault();
		event?.stopPropagation();
		navigator.clipboard.writeText(isoTime);
		setCopiedField(field);
		window.setTimeout(() => setCopiedField(null), 2e3);
	};
	const timeLabel = showFormattedDate ? formatDateTime(dateObj) : getSimpleRelativeTime();
	if (disableTooltip) return /* @__PURE__ */ jsx("span", {
		className,
		children: timeLabel
	});
	return /* @__PURE__ */ jsxs(Popover, {
		open: isOpen,
		onOpenChange: setIsOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: cn("cursor-default", className),
				onMouseEnter: openPopover,
				onMouseLeave: scheduleClosePopover,
				children: timeLabel
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			side: "top",
			align: "center",
			sideOffset: 8,
			className: "w-auto max-w-[280px] p-0",
			onOpenAutoFocus: (event) => event.preventDefault(),
			onClick: (event) => event.stopPropagation(),
			onPointerDown: (event) => event.stopPropagation(),
			onMouseEnter: openPopover,
			onMouseLeave: scheduleClosePopover,
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ jsx("div", {
					className: "border-b border-border px-3 py-2",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: getDetailedRelativeTime()
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1.5 px-3 py-2",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "group flex w-full cursor-pointer items-center gap-2 rounded px-1 py-0.5 text-start transition-colors hover:bg-muted/40",
						onClick: (event) => handleCopyIso("utc", event),
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-popover-foreground",
								children: utcTime
							}),
							/* @__PURE__ */ jsx("span", {
								className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
								children: "UTC"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "ms-auto inline-flex h-6 w-6 items-center justify-center text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
								"aria-hidden": "true",
								children: copiedField === "utc" ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
							})
						]
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "group flex w-full cursor-pointer items-center gap-2 rounded px-1 py-0.5 text-start transition-colors hover:bg-muted/40",
						onClick: (event) => handleCopyIso("local", event),
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-popover-foreground",
								children: localTime
							}),
							/* @__PURE__ */ jsx("span", {
								className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
								children: t("Local")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "ms-auto inline-flex h-6 w-6 items-center justify-center text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
								"aria-hidden": "true",
								children: copiedField === "local" ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
							})
						]
					})]
				})]
			})
		})]
	});
}
function getRelativeTimeString(date) {
	return formatShortRelativeTime(date);
}
export { getRelativeTimeString as n, formatRelativeDuration as r, DateTooltip as t };
