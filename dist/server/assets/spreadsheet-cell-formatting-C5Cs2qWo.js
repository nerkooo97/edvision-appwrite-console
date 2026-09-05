function stringifySpreadsheetCellValue(value) {
	if (value === null || value === void 0) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
function formatSpreadsheetCellValue(value) {
	if (value === null || value === void 0) return {
		full: "null",
		display: "null",
		isNull: true
	};
	const stringValue = stringifySpreadsheetCellValue(value);
	return {
		full: stringValue,
		display: stringValue.length > 80 ? `${stringValue.slice(0, 77)}…` : stringValue,
		isNull: false
	};
}
function isSpreadsheetRtlText(text) {
	if (!text || typeof text !== "string") return false;
	return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}
function isSpreadsheetCellValueTrimmed(full, display) {
	return full !== display;
}
function copySpreadsheetCellValue(value) {
	return stringifySpreadsheetCellValue(value);
}
function formatSpreadsheetCellValueForDialog(value, full) {
	if (value !== null && typeof value === "object") try {
		return JSON.stringify(value, null, 2);
	} catch {
		return full;
	}
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]")) try {
			return JSON.stringify(JSON.parse(trimmed), null, 2);
		} catch {
			return full;
		}
	}
	return full;
}
export { isSpreadsheetRtlText as a, isSpreadsheetCellValueTrimmed as i, formatSpreadsheetCellValue as n, formatSpreadsheetCellValueForDialog as r, copySpreadsheetCellValue as t };
