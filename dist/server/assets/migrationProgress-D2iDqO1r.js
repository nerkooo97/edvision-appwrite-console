function parseStatusCounters(m) {
	if (!m.statusCounters) return {};
	try {
		const raw = typeof m.statusCounters === "string" ? JSON.parse(m.statusCounters) : m.statusCounters;
		return typeof raw === "object" && raw !== null ? raw : {};
	} catch {
		return {};
	}
}
function getMigrationCounts(m) {
	const map = parseStatusCounters(m);
	let succeeded = 0;
	let total = 0;
	for (const counter of Object.values(map)) {
		const c = counter || {};
		const pending = c.pending ?? 0;
		const success = c.success ?? 0;
		const error = c.error ?? 0;
		const skip = c.skip ?? 0;
		const processing = c.processing ?? 0;
		const warning = c.warning ?? 0;
		succeeded += success;
		total += success + error + skip + warning + Math.max(0, pending) + processing;
	}
	return {
		succeeded,
		total
	};
}
function getMigrationProgress(m, resourceKeys) {
	if (m.status === "failed" || m.status === "completed") return 100;
	const map = parseStatusCounters(m);
	if (resourceKeys && resourceKeys.length > 0) {
		let sum = 0;
		let counted = 0;
		for (const key of sortRestoreResourceKeys(resourceKeys)) {
			if (!key) continue;
			const c = map[key];
			if (!c) {
				sum += 0;
				counted += 1;
				continue;
			}
			const pending = c.pending ?? 0;
			const success = c.success ?? 0;
			const error = c.error ?? 0;
			const skip = c.skip ?? 0;
			const processing = c.processing ?? 0;
			const warning = c.warning ?? 0;
			const total$1 = pending + success + error + skip + processing + warning;
			if (total$1 === 0) continue;
			const done = success + error + skip + warning;
			sum += done / total$1 * 100;
			counted += 1;
		}
		if (counted === 0) return 0;
		return Math.round(Math.min(100, Math.max(0, sum / counted)));
	}
	let totalDone = 0;
	let totalInProgress = 0;
	for (const counter of Object.values(map)) {
		const c = counter || {};
		const pending = c.pending ?? 0;
		const success = c.success ?? 0;
		const error = c.error ?? 0;
		const skip = c.skip ?? 0;
		const processing = c.processing ?? 0;
		const warning = c.warning ?? 0;
		totalDone += success + error + skip + warning;
		totalInProgress += pending + processing;
	}
	const total = totalDone + totalInProgress;
	if (total === 0) return 0;
	const pct = totalDone / total * 100;
	return Math.round(Math.min(100, Math.max(0, pct)));
}
function resourceTypeLabel(key, total) {
	const singular = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
	if (total === 1) return singular;
	return {
		database: "Databases",
		table: "Tables",
		column: "Columns",
		row: "Rows",
		index: "Indexes",
		collection: "Collections",
		document: "Documents",
		attribute: "Attributes",
		vectorsdb: "VectorsDB",
		documentsdb: "DocumentsDB"
	}[key.toLowerCase()] ?? `${singular}s`;
}
var RESTORE_RESOURCE_SEQUENCE = [
	"database",
	"databases",
	"documentsdb",
	"vectorsdb",
	"table",
	"tables",
	"collection",
	"collections",
	"column",
	"columns",
	"attribute",
	"attributes",
	"index",
	"indexes",
	"row",
	"rows",
	"document",
	"documents"
];
function normalizeRestoreResourceKey(key) {
	return String(key).trim().toLowerCase();
}
function sortRestoreResourceKeys(keys) {
	return keys.map((key, index) => ({
		key,
		index
	})).sort((a, b) => {
		const aNorm = normalizeRestoreResourceKey(a.key);
		const bNorm = normalizeRestoreResourceKey(b.key);
		const aRank = RESTORE_RESOURCE_SEQUENCE.indexOf(aNorm);
		const bRank = RESTORE_RESOURCE_SEQUENCE.indexOf(bNorm);
		const aKnown = aRank >= 0;
		const bKnown = bRank >= 0;
		if (aKnown && bKnown && aRank !== bRank) return aRank - bRank;
		if (aKnown && !bKnown) return -1;
		if (!aKnown && bKnown) return 1;
		return a.index - b.index;
	}).map(({ key }) => key);
}
function getMigrationResourceBreakdown(migration, resourceKeys = []) {
	const map = migration ? parseStatusCounters(migration) : {};
	const keys = [...resourceKeys, ...Object.keys(map).filter((key) => !resourceKeys.includes(key))];
	const seen = /* @__PURE__ */ new Set();
	return sortRestoreResourceKeys(keys.filter((key) => {
		if (!key || seen.has(key)) return false;
		seen.add(key);
		return true;
	})).map((key) => {
		const c = map[key] || {};
		const pending = c.pending ?? 0;
		const success = c.success ?? 0;
		const error = c.error ?? 0;
		const skip = c.skip ?? 0;
		const processing = c.processing ?? 0;
		const warning = c.warning ?? 0;
		const total = pending + success + error + skip + processing + warning;
		const succeeded = success;
		let tone = "waiting";
		if (error > 0) tone = "error";
		else if (pending > 0 || processing > 0) tone = "processing";
		else if (total > 0 && success + skip + warning === total) tone = "success";
		return {
			key,
			label: resourceTypeLabel(key, total > 1 ? total : 2),
			succeeded,
			total,
			error,
			processing,
			pending,
			tone
		};
	});
}
function getMigrationErrorMessage(errors) {
	if (!errors?.length) return null;
	const error = errors[0];
	try {
		const parsed = typeof error === "string" ? JSON.parse(error) : error;
		if (parsed && typeof parsed === "object") {
			if (typeof parsed.message === "string" && parsed.message.trim()) return parsed.message.trim();
			if (typeof parsed.error === "string" && parsed.error.trim()) return parsed.error.trim();
		}
	} catch {}
	if (typeof error === "string" && error.trim()) {
		if (error.trimStart().startsWith("{")) return null;
		return error;
	}
	return null;
}
export { parseStatusCounters as a, getMigrationResourceBreakdown as i, getMigrationErrorMessage as n, sortRestoreResourceKeys as o, getMigrationProgress as r, getMigrationCounts as t };
