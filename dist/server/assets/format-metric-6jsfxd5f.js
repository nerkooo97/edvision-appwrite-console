var BYTE_BASE = 1e3;
var BYTE_UNITS = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB"
];
function getByteUnitIndex(bytes) {
	if (bytes <= 0) return 0;
	return Math.min(Math.floor(Math.log(bytes) / Math.log(BYTE_BASE)), BYTE_UNITS.length - 1);
}
function trimTrailingZeros(value) {
	return value.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
}
function getByteDecimals(scaled, unit) {
	if (unit === "B") return 0;
	if (unit === "KB" || unit === "MB") return 1;
	if (scaled >= 100) return 0;
	if (scaled >= 10) return 1;
	return 2;
}
function formatCompactBytes(bytes, options = {}) {
	const { compact = true } = options;
	const separator = compact ? "" : " ";
	if (!Number.isFinite(bytes) || bytes <= 0) return compact ? "0B" : "0 B";
	const unitIndex = getByteUnitIndex(bytes);
	const unit = BYTE_UNITS[unitIndex];
	const scaled = bytes / BYTE_BASE ** unitIndex;
	const decimals = getByteDecimals(scaled, unit);
	let amount;
	if (unit === "KB" || unit === "MB") amount = scaled.toFixed(1);
	else amount = trimTrailingZeros(scaled.toFixed(decimals));
	return `${amount}${separator}${unit}`;
}
var BYTE_AXIS_SHORT_UNITS = {
	B: "B",
	KB: "KB",
	MB: "MB",
	GB: "GB",
	TB: "TB"
};
function createCompactBytesAxisTickFormatter(referenceBytes) {
	const unitIndex = !Number.isFinite(referenceBytes) || referenceBytes <= 0 ? 2 : getByteUnitIndex(referenceBytes);
	const shortUnit = BYTE_AXIS_SHORT_UNITS[BYTE_UNITS[unitIndex]];
	const divisor = BYTE_BASE ** unitIndex;
	return (bytes) => {
		if (!Number.isFinite(bytes) || bytes <= 0) return `0${shortUnit}`;
		const scaled = bytes / divisor;
		if (unitIndex === 0) return `${Math.round(scaled)}${shortUnit}`;
		if (scaled >= 100) return `${Math.round(scaled)}${shortUnit}`;
		return `${trimTrailingZeros(scaled.toFixed(1))}${shortUnit}`;
	};
}
function formatCompactCount(num, options = {}) {
	const { compact = true } = options;
	if (!Number.isFinite(num) || num <= 0) return "0";
	if (num >= 1e9) {
		const scaled = num / 1e9;
		const amount = scaled >= 100 ? Math.round(scaled).toString() : trimTrailingZeros(scaled.toFixed(1));
		return compact ? `${amount}B` : `${amount} B`;
	}
	if (num >= 1e6) {
		const scaled = num / 1e6;
		const amount = scaled >= 100 ? Math.round(scaled).toString() : trimTrailingZeros(scaled.toFixed(1));
		return compact ? `${amount}M` : `${amount} M`;
	}
	if (num >= 1e4) {
		const scaled = num / 1e3;
		const amount = scaled >= 100 ? Math.round(scaled).toString() : trimTrailingZeros(scaled.toFixed(1));
		return compact ? `${amount}K` : `${amount} K`;
	}
	if (num >= 1e3) return compact ? `${trimTrailingZeros((num / 1e3).toFixed(1))}K` : `${trimTrailingZeros((num / 1e3).toFixed(1))} K`;
	return Math.round(num).toLocaleString();
}
function getCountAxisUnit(max) {
	if (!Number.isFinite(max) || max <= 0) return "plain";
	if (max >= 1e9) return "B";
	if (max >= 1e6) return "M";
	if (max >= 1e3) return "K";
	return "plain";
}
function createCompactCountAxisTickFormatter(referenceCount) {
	const unit = getCountAxisUnit(referenceCount);
	const divisor = unit === "B" ? 1e9 : unit === "M" ? 1e6 : unit === "K" ? 1e3 : 1;
	const suffix = unit === "plain" ? "" : unit;
	return (num) => {
		if (!Number.isFinite(num) || num <= 0) return unit === "plain" ? "0" : `0${suffix}`;
		if (unit === "plain") return Math.round(num).toLocaleString();
		const scaled = num / divisor;
		if (scaled >= 100) return `${Math.round(scaled)}${suffix}`;
		return `${trimTrailingZeros(scaled.toFixed(1))}${suffix}`;
	};
}
function createGbHoursAxisTickFormatter(referenceGbHours) {
	const useK = Number.isFinite(referenceGbHours) && referenceGbHours >= 1e3;
	return (gbHours) => {
		if (!Number.isFinite(gbHours) || gbHours <= 0) return "0";
		if (useK) {
			const scaled = gbHours / 1e3;
			if (scaled >= 100) return `${Math.round(scaled)}k`;
			return trimGbHoursValue(scaled) + "k";
		}
		return trimGbHoursValue(gbHours);
	};
}
function createUsageChartAxisTickFormatter(format, referenceMax) {
	switch (format) {
		case "bytes": return createCompactBytesAxisTickFormatter(referenceMax);
		case "gbhours": return createGbHoursAxisTickFormatter(referenceMax);
		case "count":
		default: return createCompactCountAxisTickFormatter(referenceMax);
	}
}
function getChartSeriesMax(points) {
	return points.reduce((max, point) => {
		const value = point.total ?? point.value ?? 0;
		return Math.max(max, value);
	}, 0);
}
const MB_SECONDS_PER_GB_HOUR = 1e3 * 3600;
function mbSecondsToGbHours(mbSeconds) {
	if (!Number.isFinite(mbSeconds) || mbSeconds <= 0) return 0;
	return mbSeconds / MB_SECONDS_PER_GB_HOUR;
}
function trimGbHoursValue(gbHours) {
	if (gbHours >= 100) return Math.round(gbHours).toLocaleString();
	if (gbHours >= 10) return gbHours.toFixed(1).replace(/\.0$/, "");
	if (gbHours >= 1) return gbHours.toFixed(1);
	if (gbHours >= .01) return gbHours.toFixed(2);
	return gbHours.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
const GB_HOURS_UNIT_TOOLTIP = "GB hours (GBH). Compute time based on memory allocated to functions and sites multiplied by execution duration.";
function formatGbHoursCore(gbHours) {
	if (!Number.isFinite(gbHours) || gbHours <= 0) return "0";
	if (gbHours >= 1e3) return `${trimGbHoursValue(gbHours / 1e3)}k`;
	return trimGbHoursValue(gbHours);
}
function formatGbHoursTotal(gbHours) {
	return `${formatGbHoursCore(gbHours)}GBH`;
}
function formatGbHoursValue(gbHours) {
	return formatGbHoursTotal(gbHours);
}
export { formatCompactBytes as a, formatGbHoursValue as c, createUsageChartAxisTickFormatter as i, getChartSeriesMax as l, createCompactBytesAxisTickFormatter as n, formatCompactCount as o, createCompactCountAxisTickFormatter as r, formatGbHoursTotal as s, GB_HOURS_UNIT_TOOLTIP as t, mbSecondsToGbHours as u };
