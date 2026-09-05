import { gt as buildFilterQueryString, yt as getOperatorsForType } from "./form-field-type-badge-C7qMzJo0.js";
const REALTIME_QUERY_VALUE_TYPES = [
	{
		value: "string",
		label: "String"
	},
	{
		value: "integer",
		label: "Integer"
	},
	{
		value: "double",
		label: "Float"
	},
	{
		value: "boolean",
		label: "Boolean"
	},
	{
		value: "datetime",
		label: "Datetime"
	}
];
const REALTIME_ALLOWED_QUERY_OPERATOR_KEYS = [
	"equal",
	"notEqual",
	"lessThan",
	"lessThanEqual",
	"greaterThan",
	"greaterThanEqual",
	"isNull",
	"isNotNull"
];
function createSubscriptionQueryEntryId() {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function normalizeRealtimeQueryValueType(value) {
	if (typeof value === "string" && REALTIME_QUERY_VALUE_TYPES.some((item) => item.value === value)) return value;
	return "string";
}
function createSubscriptionQueryEntry(partial) {
	return {
		id: createSubscriptionQueryEntryId(),
		attribute: partial?.attribute ?? "",
		operatorKey: partial?.operatorKey ?? "equal",
		value: partial?.value ?? "",
		valueType: normalizeRealtimeQueryValueType(partial?.valueType)
	};
}
function subscriptionQueryOperatorsForType(valueType = "string") {
	const allowed = new Set(REALTIME_ALLOWED_QUERY_OPERATOR_KEYS);
	return getOperatorsForType(valueType).filter((operator) => allowed.has(operator.key));
}
function subscriptionQueryNeedsValue(operatorKey) {
	return operatorKey !== "isNull" && operatorKey !== "isNotNull";
}
function parseQueryEntryValue(entry) {
	if (!subscriptionQueryNeedsValue(entry.operatorKey)) return null;
	const raw = entry.value.trim();
	if (!raw) return "";
	switch (entry.valueType ?? "string") {
		case "boolean":
			if (raw === "true") return true;
			if (raw === "false") return false;
			return raw;
		case "integer": {
			const parsed = Number.parseInt(raw, 10);
			return Number.isFinite(parsed) ? parsed : raw;
		}
		case "double": {
			const parsed = Number.parseFloat(raw);
			return Number.isFinite(parsed) ? parsed : raw;
		}
		default: return raw;
	}
}
function entryToQueryString(entry) {
	const attribute = entry.attribute.trim();
	if (!attribute) return null;
	const needsValue = subscriptionQueryNeedsValue(entry.operatorKey);
	if (needsValue && !entry.value.trim()) return null;
	return buildFilterQueryString(entry.operatorKey, attribute, needsValue ? parseQueryEntryValue(entry) : null);
}
function entriesToQueryStrings(entries) {
	return entries.map((entry) => entryToQueryString(entry)).filter((query) => !!query);
}
function normalizeSubscriptionQueries(queries) {
	return queries.map((query) => query.trim()).filter(Boolean);
}
function subscriptionQueriesKey(queries) {
	return JSON.stringify([...queries].sort());
}
function subscriptionsMatch(channelA, queriesA, channelB, queriesB) {
	return channelA.trim() === channelB.trim() && subscriptionQueriesKey(queriesA) === subscriptionQueriesKey(queriesB);
}
const EMPTY_REALTIME_DEBUGGER_CONFIG = { subscriptions: [] };
const USER_PREFS_KEY_REALTIME_DEBUGGER_PREFIX = "console.realtimeDebugger";
function getRealtimeDebuggerPrefsKey(projectId) {
	return `${USER_PREFS_KEY_REALTIME_DEBUGGER_PREFIX}.${projectId.trim()}`;
}
function isQueryEntry(value) {
	if (!value || typeof value !== "object") return false;
	const record = value;
	return typeof record.id === "string" && typeof record.attribute === "string" && typeof record.operatorKey === "string" && typeof record.value === "string";
}
function normalizeQueryEntry(entry) {
	return {
		id: entry.id.trim(),
		attribute: entry.attribute.trim(),
		operatorKey: entry.operatorKey.trim(),
		value: entry.value,
		valueType: normalizeRealtimeQueryValueType(entry.valueType)
	};
}
function isConfiguredSubscription(value) {
	if (!value || typeof value !== "object") return false;
	const record = value;
	return typeof record.id === "string" && typeof record.channel === "string";
}
function parseStoredConfig(raw) {
	if (!raw) return EMPTY_REALTIME_DEBUGGER_CONFIG;
	let parsed = raw;
	if (typeof raw === "string") try {
		parsed = JSON.parse(raw);
	} catch {
		return EMPTY_REALTIME_DEBUGGER_CONFIG;
	}
	if (!parsed || typeof parsed !== "object") return EMPTY_REALTIME_DEBUGGER_CONFIG;
	const record = parsed;
	const legacyQueries = Array.isArray(record.queries) ? record.queries.filter(isQueryEntry).map(normalizeQueryEntry) : [];
	return { subscriptions: Array.isArray(record.subscriptions) ? record.subscriptions.filter(isConfiguredSubscription).map((entry) => {
		const recordEntry = entry;
		const nestedQueries = Array.isArray(recordEntry.queries) ? recordEntry.queries.filter(isQueryEntry).map(normalizeQueryEntry) : legacyQueries.map(normalizeQueryEntry);
		return {
			id: entry.id.trim(),
			channel: entry.channel.trim(),
			queries: nestedQueries
		};
	}).filter((entry) => entry.id && entry.channel) : [] };
}
function parseRealtimeDebuggerConfig(prefs, projectId) {
	if (!projectId?.trim()) return EMPTY_REALTIME_DEBUGGER_CONFIG;
	return parseStoredConfig(prefs?.[getRealtimeDebuggerPrefsKey(projectId)]);
}
function mergeRealtimeDebuggerConfigIntoPrefs(prefs, projectId, config) {
	const key = getRealtimeDebuggerPrefsKey(projectId);
	if (config.subscriptions.length === 0) {
		const next = { ...prefs };
		delete next[key];
		return next;
	}
	return {
		...prefs,
		[key]: JSON.stringify(config)
	};
}
function createConfiguredSubscription(channel) {
	return {
		id: createSubscriptionQueryEntryId(),
		channel: channel.trim(),
		queries: []
	};
}
function createConfiguredQueryEntry(partial) {
	return createSubscriptionQueryEntry(partial);
}
export { parseRealtimeDebuggerConfig as a, entriesToQueryStrings as c, subscriptionQueryNeedsValue as d, subscriptionQueryOperatorsForType as f, mergeRealtimeDebuggerConfigIntoPrefs as i, normalizeSubscriptionQueries as l, createConfiguredQueryEntry as n, REALTIME_QUERY_VALUE_TYPES as o, subscriptionsMatch as p, createConfiguredSubscription as r, createSubscriptionQueryEntry as s, USER_PREFS_KEY_REALTIME_DEBUGGER_PREFIX as t, parseQueryEntryValue as u };
