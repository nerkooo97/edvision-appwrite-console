import { s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import { Boxes, Database, Folder, Globe, Globe2, MessageSquare, MoreHorizontal, Network, Plug2, ScanSearch, Users, UsersRound, Zap } from "lucide-react";
function isCloudEnvironment() {
	try {
		return getBaseEndpoint().includes("cloud.appwrite.io");
	} catch {
		return false;
	}
}
function isOAuth2AppsCatalogScope(scopeId, apiCategory) {
	if (scopeId.toLowerCase().startsWith("apps.")) return true;
	return (apiCategory ?? "").trim().toLowerCase() === "apps";
}
const CLOUD_ONLY_SCOPE_IDS = new Set([
	"policies.read",
	"policies.write",
	"archives.read",
	"archives.write",
	"restorations.read",
	"restorations.write"
]);
const LEGACY_CATALOG_ONLY_WHEN_ON_KEY = new Set([
	"collections.read",
	"collections.write",
	"attributes.read",
	"attributes.write",
	"documents.read",
	"documents.write",
	"execution.read",
	"execution.write"
]);
function scopeRowDeprecated(selfDeprecated, apiCategoryIsDeprecatedGroup) {
	return Boolean(selfDeprecated) || apiCategoryIsDeprecatedGroup;
}
function inferAccordionCategoryFromScopeId(scopeId) {
	const id = scopeId.toLowerCase();
	if (/^(users|teams|sessions)\./.test(id)) return "Auth";
	if (/^domains\./.test(id)) return "Domains";
	if (/^(databases|tables|columns|rows|indexes|collections|attributes|documents|archives|restorations)\./.test(id)) return "Databases";
	if (/^(functions|executions|execution)\./.test(id)) return "Functions";
	if (/^(files|buckets|tokens)\./.test(id)) return "Storage";
	if (/^(messages|topics|subscribers|targets|providers)\./.test(id)) return "Messaging";
	if (/^(sites|log)\./.test(id)) return "Sites";
	if (/^presences\./.test(id)) return "Presences";
	if (/^apps\./.test(id)) return "Apps";
	if (/^(projects|platforms|keys|webhooks|mocks|templates|oauth2|events|policies)\./.test(id)) return "Project";
	if (/^advisor\./.test(id)) return "Advisor";
	if (/^proxy\./.test(id)) return "Proxy";
	return "General";
}
function scopeEditorCategory(scopeId, apiCategory) {
	const raw = (apiCategory ?? "").trim();
	if (raw.toLowerCase() === "deprecated") return inferAccordionCategoryFromScopeId(scopeId);
	if (raw) return raw;
	return inferAccordionCategoryFromScopeId(scopeId);
}
var KNOWN_CATEGORY_ORDER = [
	"Auth",
	"Database",
	"Databases",
	"Functions",
	"Storage",
	"Messaging",
	"Sites",
	"Presences",
	"Domains",
	"Project",
	"Advisor",
	"Proxy",
	"General"
];
var KNOWN_CATEGORY_ORDER_SET = new Set(KNOWN_CATEGORY_ORDER);
function sortScopeCategories(categories) {
	const set = new Set(categories);
	const ranked = KNOWN_CATEGORY_ORDER.filter((c) => set.has(c));
	const rest = Array.from(set).filter((c) => !KNOWN_CATEGORY_ORDER_SET.has(c) && c !== "Other").sort((a, b) => a.localeCompare(b));
	return set.has("Other") ? [
		...ranked,
		...rest,
		"Other"
	] : [...ranked, ...rest];
}
function getScopeCategoryIcon(category, scopeId) {
	const c = category.toLowerCase();
	if (c.includes("auth") || c.includes("user") || c.includes("session") || c.includes("team")) return Users;
	if (c.includes("domain")) return Globe2;
	if (c.includes("project")) return Boxes;
	if (c.includes("database") || c.includes("table") || c.includes("column") || c.includes("row") || c.includes("index") || c.includes("document") || c.includes("collection") || c.includes("attribute") || c.includes("backup") || c.includes("policy") || c.includes("archive") || c.includes("restoration")) return Database;
	if (c.includes("function") || c.includes("execution")) return Zap;
	if (c.includes("storage") || c.includes("bucket") || c.includes("file") || c.includes("token")) return Folder;
	if (c.includes("message") || c.includes("topic") || c.includes("provider")) return MessageSquare;
	if (c.includes("site") || c.includes("log")) return Globe;
	if (c.includes("presence")) return UsersRound;
	if (c === "apps") return Plug2;
	if (c.includes("advisor")) return ScanSearch;
	if (c.includes("proxy")) return Network;
	const id = scopeId?.toLowerCase() ?? "";
	if (id) {
		if (/^(users|teams|sessions)\./.test(id)) return Users;
		if (/^domains\./.test(id)) return Globe2;
		if (/^(projects|platforms|keys|webhooks|mocks|templates|oauth2|events|policies)\./.test(id)) return Boxes;
		if (/^(databases|tables|columns|rows|indexes|collections|attributes|documents|archives|restorations)\./.test(id)) return Database;
		if (/^(functions|executions|execution)\./.test(id)) return Zap;
		if (/^(files|buckets|tokens)\./.test(id)) return Folder;
		if (/^(messages|topics|subscribers|targets|providers)\./.test(id)) return MessageSquare;
		if (/^(sites|log)\./.test(id)) return Globe;
		if (/^presences\./.test(id)) return UsersRound;
		if (/^apps\./.test(id)) return Plug2;
		if (/^advisor\./.test(id)) return ScanSearch;
		if (/^proxy\./.test(id)) return Network;
	}
	return MoreHorizontal;
}
function isOAuth2AppsScopeEditorRow(row) {
	return row.category === "Apps" || isOAuth2AppsCatalogScope(row.scope);
}
function compareScopeRowsDeprecatedLast(a, b) {
	const dep = Number(Boolean(a.deprecated)) - Number(Boolean(b.deprecated));
	if (dep !== 0) return dep;
	return a.scope.localeCompare(b.scope);
}
function compareScopeEditorRowsForDisplay(a, b) {
	const cat = a.category.localeCompare(b.category);
	if (cat !== 0) return cat;
	return compareScopeRowsDeprecatedLast(a, b);
}
function scopeEditorRowMatchesQuery(row, query) {
	const normalized = query.trim().toLowerCase();
	if (!normalized) return true;
	return row.scope.toLowerCase().includes(normalized) || row.description.toLowerCase().includes(normalized) || row.category.toLowerCase().includes(normalized);
}
function filterScopeEditorRows(rows, query) {
	const normalized = query.trim();
	if (!normalized) return rows;
	return rows.filter((row) => scopeEditorRowMatchesQuery(row, normalized));
}
function consoleKeyScopesToEditorRows(list, opts) {
	if (!list?.scopes?.length) return [];
	const selected = new Set(opts.selectedScopeIds ?? []);
	return list.scopes.filter((s) => !CLOUD_ONLY_SCOPE_IDS.has(s.$id) || opts.isCloud).filter((s) => !isOAuth2AppsCatalogScope(s.$id, s.category) || opts.oauth2Server).filter((s) => {
		if (!LEGACY_CATALOG_ONLY_WHEN_ON_KEY.has(s.$id)) return true;
		return selected.has(s.$id);
	}).map((s) => {
		const categoryLooksDeprecated = (s.category || "Other").trim().toLowerCase() === "deprecated";
		const deprecatedBadge = scopeRowDeprecated(s.deprecated, categoryLooksDeprecated);
		const accordionCategory = scopeEditorCategory(s.$id, s.category);
		return {
			scope: s.$id,
			description: s.description,
			category: accordionCategory,
			icon: getScopeCategoryIcon(accordionCategory, s.$id),
			deprecated: deprecatedBadge
		};
	}).sort(compareScopeEditorRowsForDisplay);
}
export { getScopeCategoryIcon as a, isOAuth2AppsScopeEditorRow as c, sortScopeCategories as d, filterScopeEditorRows as i, scopeEditorCategory as l, compareScopeRowsDeprecatedLast as n, isCloudEnvironment as o, consoleKeyScopesToEditorRows as r, isOAuth2AppsCatalogScope as s, compareScopeEditorRowsForDisplay as t, scopeRowDeprecated as u };
