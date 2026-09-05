import { a as truncateMiddle } from "./utils-DoqqkI3X.js";
function normalizeIpForDisplay(raw) {
	if (raw == null) return "";
	let s = raw.trim();
	if (!s) return "";
	if (s.startsWith("[") && s.endsWith("]")) {
		const inner = s.slice(1, -1).trim();
		if (inner.includes(":")) s = inner;
	}
	const pct = s.indexOf("%");
	if (pct !== -1 && s.includes(":")) s = s.slice(0, pct);
	return s;
}
function isIpv6(ip) {
	return normalizeIpForDisplay(ip).includes(":");
}
function formatIpForDisplay(ip, maxLen = 36) {
	if (ip == null || ip.trim() === "") return null;
	const s = normalizeIpForDisplay(ip);
	if (!s) return null;
	if (!isIpv6(s)) return s;
	return s.length <= maxLen ? s : truncateMiddle(s, maxLen);
}
export { formatIpForDisplay as t };
