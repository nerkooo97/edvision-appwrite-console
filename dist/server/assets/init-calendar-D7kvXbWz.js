import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import { d as resolveInitCurrentDay, f as resolveInitRecapMode, h as resolveInitDayUnlockDate } from "./events-s0i9XY3r.js";
import { useEffect, useState } from "react";
function getLowPowerAnimationSignals() {
	if (typeof window === "undefined") return {
		hardwareConcurrency: null,
		deviceMemory: null,
		saveData: null,
		effectiveType: null
	};
	const navigatorWithHints = navigator;
	const connection = navigatorWithHints.connection;
	return {
		hardwareConcurrency: navigator.hardwareConcurrency || null,
		deviceMemory: navigatorWithHints.deviceMemory ?? null,
		saveData: connection?.saveData ?? null,
		effectiveType: connection?.effectiveType ?? null
	};
}
function getPrefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function evaluateAutoLowPowerDecision(signals) {
	if (signals.saveData) return {
		autoDetected: true,
		reason: "Data Saver is enabled."
	};
	if (signals.effectiveType === "slow-2g" || signals.effectiveType === "2g") return {
		autoDetected: true,
		reason: `Connection effective type is ${signals.effectiveType}.`
	};
	if (typeof signals.deviceMemory === "number" && signals.deviceMemory <= 4) return {
		autoDetected: true,
		reason: `Device memory is ${signals.deviceMemory} GB, at or below the 4 GB threshold.`
	};
	if (typeof signals.hardwareConcurrency === "number" && signals.hardwareConcurrency > 0 && signals.hardwareConcurrency <= 4) return {
		autoDetected: true,
		reason: `CPU reports ${signals.hardwareConcurrency} logical cores, at or below the 4-core threshold.`
	};
	return {
		autoDetected: false,
		reason: "No low-power signal matched. Auto mode keeps the full Init animation."
	};
}
function getInitLowPowerAnimationDecision(override) {
	const signals = getLowPowerAnimationSignals();
	const prefersReducedMotion = getPrefersReducedMotion();
	const auto = evaluateAutoLowPowerDecision(signals);
	const enabled = override === "on" ? true : override === "off" ? false : auto.autoDetected;
	const reason = override === "on" ? "Debug override is set to On." : override === "off" ? "Debug override is set to Off." : auto.reason;
	const joolAnimationEnabled = !prefersReducedMotion;
	const joolAnimationReason = prefersReducedMotion ? "System reduced-motion preference is enabled, so Jool particles are not mounted." : "System motion preference allows Jool particles to run.";
	return {
		enabled,
		autoDetected: auto.autoDetected,
		override,
		reason,
		prefersReducedMotion,
		joolAnimationEnabled,
		joolAnimationReason,
		signals
	};
}
function useInitLowPowerAnimationDecision() {
	const { initLowPowerAnimations } = useDebugOverrides();
	const [decision, setDecision] = useState(() => getInitLowPowerAnimationDecision(initLowPowerAnimations));
	useEffect(() => {
		setDecision(getInitLowPowerAnimationDecision(initLowPowerAnimations));
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const handleChange = () => {
			setDecision(getInitLowPowerAnimationDecision(initLowPowerAnimations));
		};
		media.addEventListener("change", handleChange);
		return () => media.removeEventListener("change", handleChange);
	}, [initLowPowerAnimations]);
	return decision;
}
var INIT_PAGE_PATH = "/init";
function resolveInitPageUrl(origin) {
	if (origin) return `${origin.replace(/\/+$/, "")}${INIT_PAGE_PATH}`;
	if (typeof window !== "undefined") return `${window.location.origin}${INIT_PAGE_PATH}`;
	return INIT_PAGE_PATH;
}
function initPageAnchor(dayNumber) {
	return `${INIT_PAGE_PATH}#day-${dayNumber}`;
}
function getInitCalendarCurrentDay(event, options) {
	return resolveInitCurrentDay(event, options?.now, options?.mockCurrentDay ?? null);
}
function isInitCalendarDayLocked(event, dayNumber, options) {
	if (resolveInitRecapMode(event, options?.now, options?.mockCurrentDay ?? null)) return false;
	const currentDay = getInitCalendarCurrentDay(event, options);
	return currentDay <= 0 || dayNumber > currentDay;
}
function getInitCalendarDaySummary(event, dayNumber, options) {
	const day = event.days.find((entry) => entry.day === dayNumber);
	if (!day) return "";
	if (isInitCalendarDayLocked(event, dayNumber, options)) return `Init · Day ${dayNumber} (${day.dateLabel})`;
	return `Init Day ${dayNumber}: ${day.title}`;
}
function getInitCalendarDayDescription(event, dayNumber, options) {
	const day = event.days.find((entry) => entry.day === dayNumber);
	if (!day) return "";
	if (isInitCalendarDayLocked(event, dayNumber, options)) return [
		"Coming soon.",
		"",
		`This launch unlocks on ${day.dateLabel}. Check back on Init for announcements, resources, and sessions.`,
		"",
		INIT_PAGE_PATH
	].join("\n");
	return [
		day.description,
		"",
		`View on Init: ${initPageAnchor(dayNumber)}`
	].join("\n");
}
function formatIcsDateOnly(date) {
	return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}
function formatIcsUtcTimestamp(date) {
	return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}
function escapeIcsText(value) {
	return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}
function foldIcsLine(line) {
	if (line.length <= 75) return line;
	const chunks = [line.slice(0, 75)];
	let index = 75;
	while (index < line.length) {
		chunks.push(` ${line.slice(index, index + 74)}`);
		index += 74;
	}
	return chunks.join("\r\n");
}
function buildInitDayCalendarEvent(event, dayNumber, options) {
	if (!event.days.find((entry) => entry.day === dayNumber)) return "";
	const unlockDate = resolveInitDayUnlockDate(event.startDate, dayNumber);
	const endDate = new Date(unlockDate);
	endDate.setDate(endDate.getDate() + 1);
	const summary = getInitCalendarDaySummary(event, dayNumber, options);
	const description = getInitCalendarDayDescription(event, dayNumber, options);
	return [
		"BEGIN:VEVENT",
		`UID:init-${event.id}-day-${dayNumber}@appwrite.io`,
		`DTSTAMP:${formatIcsUtcTimestamp(/* @__PURE__ */ new Date())}`,
		`DTSTART;VALUE=DATE:${formatIcsDateOnly(unlockDate)}`,
		`DTEND;VALUE=DATE:${formatIcsDateOnly(endDate)}`,
		foldIcsLine(`SUMMARY:${escapeIcsText(summary)}`),
		foldIcsLine(`DESCRIPTION:${escapeIcsText(description)}`),
		`URL:${resolveInitPageUrl()}#day-${dayNumber}`,
		"END:VEVENT"
	].join("\r\n");
}
function buildInitEventCalendarIcs(event, options) {
	const events = event.days.map((day) => day.day).sort((a, b) => a - b).map((dayNumber) => buildInitDayCalendarEvent(event, dayNumber, options)).filter(Boolean).join("\r\n");
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Appwrite//Init//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		foldIcsLine(`X-WR-CALNAME:${escapeIcsText(`Init ${event.dateRangeLabel}`)}`),
		events,
		"END:VCALENDAR"
	].join("\r\n");
}
function formatGoogleCalendarDate(date) {
	return formatIcsDateOnly(date);
}
function formatGoogleCalendarDateTime(date) {
	return `${formatIcsDateOnly(date)}T${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}00`;
}
function parseScheduleTimeLabel(timeLabel) {
	const match = timeLabel.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
	if (!match) return null;
	const hour = Number.parseInt(match[1], 10);
	const minutes = Number.parseInt(match[2], 10);
	const period = match[3].toUpperCase();
	if (hour < 1 || hour > 12 || minutes < 0 || minutes > 59) return null;
	return {
		hours: hour % 12 + (period === "PM" ? 12 : 0),
		minutes
	};
}
function getInitScheduleItemDateRange(event, item) {
	const start = resolveInitDayUnlockDate(event.startDate, item.day);
	const parsedTime = parseScheduleTimeLabel(item.timeLabel);
	if (!parsedTime) {
		const end$1 = new Date(start);
		end$1.setDate(end$1.getDate() + 1);
		return {
			start,
			end: end$1,
			allDay: true
		};
	}
	start.setHours(parsedTime.hours, parsedTime.minutes, 0, 0);
	const end = new Date(start);
	end.setHours(end.getHours() + 1);
	return {
		start,
		end,
		allDay: false
	};
}
function getInitScheduleItemPlatformLabel(platform) {
	switch (platform) {
		case "discord": return "Discord";
		case "reddit": return "Reddit";
		case "youtube": return "YouTube";
	}
}
function getInitScheduleItemSummary(item) {
	return `Init: ${item.title}`;
}
function getInitScheduleItemDescription(event, item) {
	const details = [
		`${getInitScheduleItemPlatformLabel(item.platform)} · ${item.timeLabel}`,
		"",
		`View on Init: ${initPageAnchor(item.day)}`
	];
	if (item.href) details.push("", item.href);
	const day = event.days.find((entry) => entry.day === item.day);
	if (day && "title" in day) details.unshift(`Day ${day.day}: ${day.title}`, "");
	return details.join("\n");
}
function buildInitScheduleItemCalendarEvent(event, item) {
	const { start, end, allDay } = getInitScheduleItemDateRange(event, item);
	const dateLines = allDay ? [`DTSTART;VALUE=DATE:${formatIcsDateOnly(start)}`, `DTEND;VALUE=DATE:${formatIcsDateOnly(end)}`] : [`DTSTART:${formatGoogleCalendarDateTime(start)}`, `DTEND:${formatGoogleCalendarDateTime(end)}`];
	return [
		"BEGIN:VEVENT",
		`UID:init-${event.id}-${item.id}@appwrite.io`,
		`DTSTAMP:${formatIcsUtcTimestamp(/* @__PURE__ */ new Date())}`,
		...dateLines,
		foldIcsLine(`SUMMARY:${escapeIcsText(getInitScheduleItemSummary(item))}`),
		foldIcsLine(`DESCRIPTION:${escapeIcsText(getInitScheduleItemDescription(event, item))}`),
		`URL:${resolveInitPageUrl()}#day-${item.day}`,
		"END:VEVENT"
	].join("\r\n");
}
function buildInitScheduleItemCalendarIcs(event, item) {
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Appwrite//Init//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		foldIcsLine(`X-WR-CALNAME:${escapeIcsText(getInitScheduleItemSummary(item))}`),
		buildInitScheduleItemCalendarEvent(event, item),
		"END:VCALENDAR"
	].join("\r\n");
}
function buildGoogleCalendarScheduleItemEventUrl(event, item) {
	const { start, end, allDay } = getInitScheduleItemDateRange(event, item);
	const dates = allDay ? `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(end)}` : `${formatGoogleCalendarDateTime(start)}/${formatGoogleCalendarDateTime(end)}`;
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: getInitScheduleItemSummary(item),
		dates,
		details: getInitScheduleItemDescription(event, item),
		location: item.href ?? resolveInitPageUrl()
	}).toString()}`;
}
function openGoogleCalendarEventUrl(url) {
	window.open(url, "_blank", "noopener,noreferrer");
}
function downloadInitScheduleItemCalendar(event, item) {
	const ics = buildInitScheduleItemCalendarIcs(event, item);
	const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = `${event.slug}-${item.id}.ics`;
	anchor.click();
	URL.revokeObjectURL(url);
}
export { useInitLowPowerAnimationDecision as a, openGoogleCalendarEventUrl as i, buildInitEventCalendarIcs as n, downloadInitScheduleItemCalendar as r, buildGoogleCalendarScheduleItemEventUrl as t };
