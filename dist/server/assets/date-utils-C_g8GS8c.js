import { a as getIntlLocale, n as formatLocalizedDateShort, r as formatLocalizedDateTime } from "./date-format-BD1j7PxK.js";
function parseDisplayDate(date) {
	if (!date) return null;
	let dateObj;
	if (date instanceof Date) dateObj = date;
	else if (typeof date === "number") dateObj = new Date(date < 0xe8d4a51000 ? date * 1e3 : date);
	else if (typeof date === "string") dateObj = new Date(date);
	else return null;
	if (isNaN(dateObj.getTime())) return null;
	return dateObj;
}
function formatDate(date) {
	const dateObj = parseDisplayDate(date);
	if (!dateObj) return "N/A";
	return formatLocalizedDateShort(dateObj);
}
function formatDateMonthYear(date) {
	const dateObj = parseDisplayDate(date);
	if (!dateObj) return "N/A";
	return dateObj.toLocaleDateString(getIntlLocale(), {
		month: "short",
		year: "numeric"
	});
}
function formatDateTime(date) {
	const dateObj = parseDisplayDate(date);
	if (!dateObj) return "N/A";
	return formatLocalizedDateTime(dateObj, {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	});
}
export { formatDateMonthYear as n, formatDateTime as r, formatDate as t };
