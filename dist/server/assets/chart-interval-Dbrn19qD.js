import { differenceInCalendarDays, endOfDay, isSameDay, startOfDay, startOfMonth, startOfWeek, subDays, subHours } from "date-fns";
var WEEK_STARTS_ON = 1;
function isFullCalendarDayRange$1(from, to) {
	return from.getTime() === startOfDay(from).getTime() && to.getTime() === endOfDay(to).getTime();
}
function isCalendarDateOnlyRange$1(from, to) {
	return from.getTime() === startOfDay(from).getTime() && to.getTime() === startOfDay(to).getTime();
}
const USAGE_DATE_RANGE_PRESET_GROUPS = [
	{ presets: [
		{
			label: "Last hour",
			value: "1h",
			getRange: () => {
				const now = /* @__PURE__ */ new Date();
				return {
					from: subHours(now, 1),
					to: now
				};
			}
		},
		{
			label: "Last 6 hours",
			value: "6h",
			getRange: () => {
				const now = /* @__PURE__ */ new Date();
				return {
					from: subHours(now, 6),
					to: now
				};
			}
		},
		{
			label: "Last 24 hours",
			value: "24h",
			getRange: () => {
				const now = /* @__PURE__ */ new Date();
				return {
					from: subHours(now, 24),
					to: now
				};
			}
		}
	] },
	{
		title: "Days",
		presets: [
			{
				label: "Today",
				value: "today",
				getRange: () => {
					const n = /* @__PURE__ */ new Date();
					return {
						from: startOfDay(n),
						to: endOfDay(n)
					};
				}
			},
			{
				label: "Yesterday",
				value: "yesterday",
				getRange: () => {
					const day = subDays(/* @__PURE__ */ new Date(), 1);
					return {
						from: startOfDay(day),
						to: endOfDay(day)
					};
				}
			},
			{
				label: "Last 7 days",
				value: "7d",
				getRange: () => ({
					from: startOfDay(subDays(/* @__PURE__ */ new Date(), 6)),
					to: endOfDay(/* @__PURE__ */ new Date())
				})
			},
			{
				label: "Last 30 days",
				value: "30d",
				getRange: () => ({
					from: startOfDay(subDays(/* @__PURE__ */ new Date(), 29)),
					to: endOfDay(/* @__PURE__ */ new Date())
				})
			}
		]
	},
	{
		title: "To date",
		presets: [{
			label: "Week to date",
			value: "wtd",
			getRange: () => {
				const n = /* @__PURE__ */ new Date();
				return {
					from: startOfWeek(n, { weekStartsOn: WEEK_STARTS_ON }),
					to: endOfDay(n)
				};
			}
		}, {
			label: "Month to date",
			value: "mtd",
			getRange: () => {
				const n = /* @__PURE__ */ new Date();
				return {
					from: startOfMonth(n),
					to: endOfDay(n)
				};
			}
		}]
	}
];
const USAGE_DATE_RANGE_PRESETS = USAGE_DATE_RANGE_PRESET_GROUPS.flatMap((group) => group.presets);
const ROLLING_USAGE_DATE_RANGE_PRESET_VALUES = [
	"1h",
	"6h",
	"24h"
];
function isRollingUsageDateRangePresetId(value) {
	return ROLLING_USAGE_DATE_RANGE_PRESET_VALUES.includes(value);
}
var CALENDAR_USAGE_DATE_RANGE_PRESET_VALUES = [
	"today",
	"yesterday",
	"7d",
	"30d",
	"wtd",
	"mtd"
];
var MATCH_TOLERANCE_MS = 6e4;
var ROLLING_PRESET_TO_STALE_MS = 3600 * 1e3;
function datesMatch(a, b, toleranceMs = MATCH_TOLERANCE_MS) {
	return Math.abs(a.getTime() - b.getTime()) <= toleranceMs;
}
function isRollingPresetToAcceptable(to, now = /* @__PURE__ */ new Date()) {
	const driftMs = now.getTime() - to.getTime();
	return driftMs <= ROLLING_PRESET_TO_STALE_MS && driftMs >= -MATCH_TOLERANCE_MS;
}
function getUsageDateRangePresetByValue(value) {
	return USAGE_DATE_RANGE_PRESETS.find((preset) => preset.value === value);
}
function inferRollingPresetByDuration(range) {
	if (!range?.from || !range?.to) return null;
	if (isFullCalendarDayRange$1(range.from, range.to)) return null;
	if (isCalendarDateOnlyRange$1(range.from, range.to)) return null;
	const durationMs = range.to.getTime() - range.from.getTime();
	const hourMs = 3600 * 1e3;
	for (const hours of [
		1,
		6,
		24
	]) if (Math.abs(durationMs - hours * hourMs) <= MATCH_TOLERANCE_MS) return getUsageDateRangePresetByValue(`${hours}h`) ?? null;
	return null;
}
function dateRangeMatchesUsagePreset(range, preset) {
	if (!range?.from || !range?.to) return false;
	const presetRange = preset.getRange();
	if (CALENDAR_USAGE_DATE_RANGE_PRESET_VALUES.includes(preset.value)) return range.from.getTime() === presetRange.from.getTime() && range.to.getTime() === presetRange.to.getTime();
	if (preset.value === "1h" || preset.value === "6h" || preset.value === "24h") {
		if (isFullCalendarDayRange$1(range.from, range.to)) return false;
		if (isCalendarDateOnlyRange$1(range.from, range.to)) return false;
		const expectedDuration = (preset.value === "1h" ? 1 : preset.value === "6h" ? 6 : 24) * 60 * 60 * 1e3;
		const actualDuration = range.to.getTime() - range.from.getTime();
		return Math.abs(actualDuration - expectedDuration) <= MATCH_TOLERANCE_MS && isRollingPresetToAcceptable(range.to);
	}
	return datesMatch(range.from, presetRange.from) && datesMatch(range.to, presetRange.to);
}
function findMatchingUsageDateRangePreset(range) {
	if (!range?.from || !range?.to) return null;
	for (const preset of USAGE_DATE_RANGE_PRESETS) if (dateRangeMatchesUsagePreset(range, preset)) return preset;
	return null;
}
function inferUsageDateRangePresetFromStoredRange(range) {
	if (!range?.from || !range?.to) return null;
	const from = isCalendarDateOnlyRange$1(range.from, range.to) ? startOfDay(range.from) : range.from;
	const to = isCalendarDateOnlyRange$1(range.from, range.to) ? endOfDay(range.to) : range.to;
	if (isFullCalendarDayRange$1(from, to)) {
		const now = /* @__PURE__ */ new Date();
		if (isSameDay(from, to)) {
			if (isSameDay(from, now)) return getUsageDateRangePresetByValue("today") ?? null;
			if (isSameDay(from, subDays(now, 1))) return getUsageDateRangePresetByValue("yesterday") ?? null;
			return null;
		}
		if (isSameDay(to, now)) {
			if (from.getTime() === startOfWeek(now, { weekStartsOn: WEEK_STARTS_ON }).getTime()) return getUsageDateRangePresetByValue("wtd") ?? null;
			if (from.getTime() === startOfMonth(now).getTime()) return getUsageDateRangePresetByValue("mtd") ?? null;
		}
		const daySpan = differenceInCalendarDays(to, from) + 1;
		if (daySpan === 7) return getUsageDateRangePresetByValue("7d") ?? null;
		if (daySpan === 30) return getUsageDateRangePresetByValue("30d") ?? null;
		return null;
	}
	const durationMs = to.getTime() - from.getTime();
	const hourMs = 3600 * 1e3;
	for (const hours of [
		1,
		6,
		24
	]) if (Math.abs(durationMs - hours * hourMs) <= MATCH_TOLERANCE_MS) return getUsageDateRangePresetByValue(`${hours}h`) ?? null;
	return null;
}
function isStartOfLocalDay(date) {
	return date.getTime() === startOfDay(date).getTime();
}
function isFullCalendarDayRange(from, to) {
	return isStartOfLocalDay(from) && to.getTime() === endOfDay(to).getTime();
}
function isCalendarDateOnlyRange(from, to) {
	return isStartOfLocalDay(from) && isStartOfLocalDay(to);
}
function normalizeUsageDateRangeSelection(dateRange) {
	if (!dateRange?.from) return dateRange;
	const from = dateRange.from;
	const to = dateRange.to ?? from;
	if (!isCalendarDateOnlyRange(from, to)) return {
		from,
		to
	};
	return {
		from: startOfDay(from),
		to: endOfDay(to)
	};
}
function getDefaultUsageChartDateRange() {
	const now = /* @__PURE__ */ new Date();
	return {
		from: subHours(now, 24),
		to: now
	};
}
var stableDefaultUsageChartDateRange = null;
function getStableUsageChartDateRange() {
	if (!stableDefaultUsageChartDateRange) stableDefaultUsageChartDateRange = getDefaultUsageChartDateRange();
	const { from, to } = stableDefaultUsageChartDateRange;
	return {
		from: new Date(from),
		to: new Date(to)
	};
}
function resetStableUsageChartDateRange() {
	stableDefaultUsageChartDateRange = null;
}
function resolveUsageDateBounds(dateRange) {
	if (!dateRange?.from) return getStableUsageChartDateRange();
	const normalized = normalizeUsageDateRangeSelection(dateRange);
	const from = normalized.from;
	const to = normalized.to ?? endOfDay(from);
	if (isFullCalendarDayRange(from, to)) return {
		from: startOfDay(from),
		to: endOfDay(to)
	};
	return {
		from,
		to
	};
}
function serializeUsageChartDateRange(dateRange) {
	const normalized = normalizeUsageDateRangeSelection(dateRange) ?? dateRange;
	const matchedPreset = findMatchingUsageDateRangePreset(normalized);
	if (matchedPreset) return { preset: matchedPreset.value };
	const { from, to } = resolveUsageDateBounds(normalized);
	return {
		from: from.toISOString(),
		to: to.toISOString()
	};
}
function parseUsageChartDateRange(serialized) {
	if (serialized.preset) {
		const preset = getUsageDateRangePresetByValue(serialized.preset);
		if (preset) return preset.getRange();
	}
	if (serialized.from && serialized.to) {
		const storedRange = {
			from: new Date(serialized.from),
			to: new Date(serialized.to)
		};
		if (!Number.isNaN(storedRange.from.getTime()) && !Number.isNaN(storedRange.to.getTime())) {
			const normalized = normalizeUsageDateRangeSelection(storedRange) ?? storedRange;
			const inferredPreset = inferUsageDateRangePresetFromStoredRange(normalized);
			if (inferredPreset) return inferredPreset.getRange();
			return normalized;
		}
	}
	return getStableUsageChartDateRange();
}
function resolveUsageChartFetchBounds(dateRange, presetId) {
	if (presetId) {
		const preset = getUsageDateRangePresetByValue(presetId);
		if (preset) return preset.getRange();
	}
	const normalized = normalizeUsageDateRangeSelection(dateRange) ?? dateRange;
	const matchedPreset = findMatchingUsageDateRangePreset(normalized);
	if (matchedPreset) return matchedPreset.getRange();
	const inferredPreset = inferUsageDateRangePresetFromStoredRange(normalized);
	if (inferredPreset) return inferredPreset.getRange();
	const rollingPreset = inferRollingPresetByDuration(normalized);
	if (rollingPreset) return rollingPreset.getRange();
	return resolveUsageDateBounds(normalized);
}
function getUsageChartQueryRangeKeyPart(dateRange, presetId) {
	if (presetId) return `preset:${presetId}`;
	const normalized = normalizeUsageDateRangeSelection(dateRange) ?? dateRange;
	const matchedPreset = findMatchingUsageDateRangePreset(normalized);
	if (matchedPreset) return `preset:${matchedPreset.value}`;
	const inferredPreset = inferUsageDateRangePresetFromStoredRange(normalized);
	if (inferredPreset) return `preset:${inferredPreset.value}`;
	const rollingPreset = inferRollingPresetByDuration(normalized);
	if (rollingPreset) return `preset:${rollingPreset.value}`;
	const { from, to } = resolveUsageDateBounds(normalized);
	return `${from.toISOString()}|${to.toISOString()}`;
}
function shouldRefetchUsageChartOnMount(rangeKeyPart) {
	return rangeKeyPart.startsWith("preset:1h") || rangeKeyPart.startsWith("preset:6h") || rangeKeyPart.startsWith("preset:24h") || rangeKeyPart.startsWith("preset:today") || rangeKeyPart.startsWith("preset:yesterday") || rangeKeyPart.startsWith("preset:7d") || rangeKeyPart.startsWith("preset:30d") || rangeKeyPart.startsWith("preset:wtd") || rangeKeyPart.startsWith("preset:mtd");
}
const DEFAULT_USAGE_CHART_INTERVAL = "1h";
const USAGE_CHART_INTERVAL_OPTIONS = [
	{
		value: "15m",
		label: "15m"
	},
	{
		value: "1h",
		label: "1h"
	},
	{
		value: "1d",
		label: "1d"
	}
];
function getUsageChartIntervalOptionsForPlan(plan) {
	const allowed = plan?.usageLogsIntervals;
	if (!allowed?.length) return USAGE_CHART_INTERVAL_OPTIONS;
	const allowedSet = new Set(allowed);
	const filtered = USAGE_CHART_INTERVAL_OPTIONS.filter((option) => allowedSet.has(option.value));
	return filtered.length > 0 ? filtered : USAGE_CHART_INTERVAL_OPTIONS;
}
function getUsageChartIntervalsForPlan(plan) {
	return getUsageChartIntervalOptionsForPlan(plan).map((option) => option.value);
}
function resolveUsageChartIntervalForPlan(interval, plan) {
	const options = getUsageChartIntervalOptionsForPlan(plan);
	if (options.some((option) => option.value === interval)) return interval;
	return options[0]?.value ?? "1h";
}
const USAGE_CHART_INTERVAL_COARSEN_ORDER = [
	"15m",
	"1h",
	"1d"
];
function resolveChartIntervalDateBounds(dateRange) {
	return resolveUsageDateBounds(dateRange);
}
var INTERVAL_MAX_RANGE_DAYS = {
	"15m": null,
	"1h": 31,
	"1d": null
};
var INTERVAL_MAX_RANGE_HOURS = { "15m": 24 };
function getUsageChartIntervalMaxRangeDays(interval) {
	return INTERVAL_MAX_RANGE_DAYS[interval];
}
function getUsageChartIntervalMaxRangeHours(interval) {
	return INTERVAL_MAX_RANGE_HOURS[interval] ?? null;
}
function isUsageChartIntervalValidForRange(interval, dateRange) {
	const { from, to } = resolveChartIntervalDateBounds(dateRange);
	const maxHours = getUsageChartIntervalMaxRangeHours(interval);
	if (maxHours !== null) return to.getTime() - from.getTime() <= maxHours * 60 * 60 * 1e3 + 6e4;
	const maxDays = getUsageChartIntervalMaxRangeDays(interval);
	if (maxDays === null) return true;
	return Math.max(1, differenceInCalendarDays(to, from) + 1) <= maxDays;
}
function getUsageChartIntervalDisabledReasonDetails(interval, dateRange) {
	if (isUsageChartIntervalValidForRange(interval, dateRange)) return;
	const maxHours = getUsageChartIntervalMaxRangeHours(interval);
	if (maxHours !== null) return {
		kind: "hours",
		maxHours
	};
	const maxDays = getUsageChartIntervalMaxRangeDays(interval);
	if (maxDays !== null) return {
		kind: "days",
		maxDays
	};
}
function resolveUsageChartIntervalForRange(interval, dateRange, plan) {
	const allowed = getUsageChartIntervalsForPlan(plan);
	const allowedSet = new Set(allowed);
	const planInterval = resolveUsageChartIntervalForPlan(interval, plan);
	if (allowedSet.has(planInterval) && isUsageChartIntervalValidForRange(planInterval, dateRange)) return planInterval;
	const startIndex = USAGE_CHART_INTERVAL_COARSEN_ORDER.indexOf(planInterval);
	const candidates = startIndex >= 0 ? USAGE_CHART_INTERVAL_COARSEN_ORDER.slice(startIndex + 1) : USAGE_CHART_INTERVAL_COARSEN_ORDER.slice(1);
	for (const candidate of candidates) {
		if (!allowedSet.has(candidate)) continue;
		if (isUsageChartIntervalValidForRange(candidate, dateRange)) return candidate;
	}
	for (const candidate of USAGE_CHART_INTERVAL_COARSEN_ORDER) {
		if (!allowedSet.has(candidate)) continue;
		if (isUsageChartIntervalValidForRange(candidate, dateRange)) return candidate;
	}
	return allowed[allowed.length - 1] ?? "1d";
}
function resolveUsageChartInterval(interval, dateRange, plan) {
	return resolveUsageChartIntervalForRange(interval, dateRange, plan);
}
function normalizeUsageChartIntervalPref(value) {
	if (value === "1m") return "15m";
	if (isUsageChartInterval(value)) return value;
	return null;
}
function isUsageChartInterval(value) {
	return USAGE_CHART_INTERVAL_OPTIONS.some((option) => option.value === value);
}
export { isRollingUsageDateRangePresetId as C, inferUsageDateRangePresetFromStoredRange as S, serializeUsageChartDateRange as _, isUsageChartIntervalValidForRange as a, findMatchingUsageDateRangePreset as b, resolveUsageChartIntervalForRange as c, isFullCalendarDayRange as d, normalizeUsageDateRangeSelection as f, resolveUsageDateBounds as g, resolveUsageChartFetchBounds as h, getUsageChartIntervalsForPlan as i, getStableUsageChartDateRange as l, resetStableUsageChartDateRange as m, USAGE_CHART_INTERVAL_OPTIONS as n, normalizeUsageChartIntervalPref as o, parseUsageChartDateRange as p, getUsageChartIntervalDisabledReasonDetails as r, resolveUsageChartInterval as s, DEFAULT_USAGE_CHART_INTERVAL as t, getUsageChartQueryRangeKeyPart as u, shouldRefetchUsageChartOnMount as v, getUsageDateRangePresetByValue as x, USAGE_DATE_RANGE_PRESET_GROUPS as y };
