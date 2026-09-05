import { h as resolveCoverEditorThemeId, i as COVER_TEMPLATE_IDS, s as isCoverTemplateId } from "./constants-CL7SLzjY.js";
import { D as normalizeCoverCliCodeData, L as normalizeCoverBarChartData, R as normalizeCoverLineChartData, X as COVER_SCREENSHOT_ANGLED_DEFAULTS, p as normalizeCoverCodeSnippetData, q as normalizeCoverTableData, vt as COVER_SCREENSHOT_FRAME_WIDTH } from "./constants-B5zUV45z.js";
import { a as parseCoverRenderData, b as normalizeCoverCardsAngledData, r as coverRenderDataToSearchParams } from "./parse-params-BpMT2Ilk.js";
import { t as COVER_TEMPLATE_DEFINITIONS } from "./template-config-BNvUm4v5.js";
const COVER_TEMPLATE_CATEGORY_IDS = [
	"text",
	"code",
	"milestones",
	"releases",
	"logos",
	"product",
	"data"
];
const COVER_TEMPLATE_CATEGORIES = [
	{
		id: "text",
		label: "Text",
		description: "Headlines and copy-focused covers.",
		templateIds: ["simple-title"]
	},
	{
		id: "code",
		label: "Code",
		description: "Terminal commands and syntax-highlighted snippets.",
		templateIds: ["cli-code", "code-snippet"]
	},
	{
		id: "milestones",
		label: "Milestones",
		description: "Share metrics, growth numbers, and launch milestones.",
		templateIds: ["milestone-split", "milestone-centered"]
	},
	{
		id: "releases",
		label: "Releases",
		description: "Announce new version releases with a large version number.",
		templateIds: ["version-number", "version-title"]
	},
	{
		id: "logos",
		label: "Logos",
		description: "Single icons, integrations, and partner logos.",
		templateIds: [
			"integration",
			"integration-icon",
			"showcase-icon",
			"title-icon"
		]
	},
	{
		id: "product",
		label: "Product",
		description: "Screenshots and 3D product visuals.",
		templateIds: [
			"screenshot",
			"screenshot-side",
			"screenshot-angled",
			"cards-angled"
		]
	},
	{
		id: "data",
		label: "Data",
		description: "Tables and charts for metrics and comparisons.",
		templateIds: [
			"table",
			"bar-chart",
			"line-chart"
		]
	}
];
var COVER_TEMPLATE_CATEGORY_BY_ID = new Map(COVER_TEMPLATE_CATEGORIES.map((category) => [category.id, category]));
var COVER_TEMPLATE_CATEGORY_BY_TEMPLATE = new Map(COVER_TEMPLATE_CATEGORIES.flatMap((category) => category.templateIds.map((templateId) => [templateId, category.id])));
const COVER_TEMPLATE_IDS_BY_CATEGORY = COVER_TEMPLATE_CATEGORIES.flatMap((category) => [...category.templateIds]);
function isCoverTemplateCategoryId(value) {
	return COVER_TEMPLATE_CATEGORY_IDS.includes(value);
}
function getCoverTemplateCategory(categoryId) {
	const category = COVER_TEMPLATE_CATEGORY_BY_ID.get(categoryId);
	if (!category) throw new Error(`Unknown cover template category: ${categoryId}`);
	return category;
}
function getCoverTemplateCategoryId(templateId) {
	return COVER_TEMPLATE_CATEGORY_BY_TEMPLATE.get(templateId) ?? "text";
}
function getCoverTemplatesForCategory(categoryFilter) {
	if (categoryFilter === "all") return [...COVER_TEMPLATE_IDS_BY_CATEGORY];
	return [...getCoverTemplateCategory(categoryFilter).templateIds];
}
function parseCoverTemplateCategoryFilter(value) {
	if (value === "all") return "all";
	if (typeof value === "string" && isCoverTemplateCategoryId(value)) return value;
	if (typeof value === "string" && isCoverTemplateId(value)) return getCoverTemplateCategoryId(value);
	return "all";
}
function assertCoverTemplateCategoryCoverage() {
	const categorized = new Set(COVER_TEMPLATE_IDS_BY_CATEGORY);
	for (const templateId of COVER_TEMPLATE_IDS) if (!categorized.has(templateId)) throw new Error(`Template "${templateId}" is missing from cover template categories`);
	if (categorized.size !== COVER_TEMPLATE_IDS.length) throw new Error("Cover template categories include unknown template ids");
}
assertCoverTemplateCategoryCoverage();
function normalizeStoredCoverData(data) {
	const normalizedTheme = {
		...data,
		theme: resolveCoverEditorThemeId(data.theme)
	};
	if (normalizedTheme.template === "screenshot-angled") {
		const defaultPercent = COVER_SCREENSHOT_ANGLED_DEFAULTS.frameWidthPercent;
		if (normalizedTheme.frameWidthPercent <= COVER_SCREENSHOT_FRAME_WIDTH.flatDefaultPercent) return {
			...normalizedTheme,
			frameWidthPercent: defaultPercent
		};
		return normalizedTheme;
	}
	if (normalizedTheme.template === "cards-angled") return normalizeCoverCardsAngledData(normalizedTheme);
	if (normalizedTheme.template === "table") return normalizeCoverTableData(normalizedTheme);
	if (normalizedTheme.template === "bar-chart") return normalizeCoverBarChartData(normalizedTheme);
	if (normalizedTheme.template === "line-chart") return normalizeCoverLineChartData(normalizedTheme);
	if (normalizedTheme.template === "cli-code") return normalizeCoverCliCodeData(normalizedTheme);
	if (normalizedTheme.template === "code-snippet") return normalizeCoverCodeSnippetData(normalizedTheme);
	return normalizedTheme;
}
const COVER_GENERATOR_EDITOR_STORAGE_KEY = "console.coverGenerator.editor";
function parseStoredTemplateData(value) {
	if (!value || typeof value !== "object") return {};
	const templateData = {};
	for (const [templateId, entry] of Object.entries(value)) {
		if (!isCoverTemplateId(templateId)) continue;
		const parsed = parseStoredCoverData(entry);
		if (!parsed || parsed.template !== templateId) continue;
		templateData[templateId] = normalizeStoredCoverData(parsed);
	}
	return templateData;
}
function syncTemplateDataThemes(data, templateData) {
	const theme = resolveCoverEditorThemeId(data.theme);
	const synced = applyThemeToStoredTemplateData(templateData, theme);
	synced[data.template] = {
		...data,
		theme
	};
	return synced;
}
function applyThemeToStoredTemplateData(templateData, theme) {
	const next = {};
	for (const [templateId, entry] of Object.entries(templateData)) {
		if (!entry || !isCoverTemplateId(templateId)) continue;
		next[templateId] = {
			...entry,
			theme
		};
	}
	return next;
}
function restoreCoverRenderDataFromJson(value) {
	const parsed = parseStoredCoverData(value);
	return parsed ? normalizeStoredCoverData(parsed) : null;
}
function parseStoredCoverData(value) {
	if (!value || typeof value !== "object") return null;
	const params = new URLSearchParams();
	for (const [key, entry] of Object.entries(value)) {
		if (entry == null || entry === "") continue;
		params.set(key, String(entry));
	}
	if (!params.get("template")) return null;
	try {
		return parseCoverRenderData(params);
	} catch {
		return null;
	}
}
function parseStoredTypeFilter(value) {
	return parseCoverTemplateCategoryFilter(value);
}
function readCoverGeneratorEditorState() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(COVER_GENERATOR_EDITOR_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		const data = parseStoredCoverData(parsed.data);
		if (!data) return null;
		const normalizedData = normalizeStoredCoverData(data);
		return {
			data: normalizedData,
			templateData: syncTemplateDataThemes(normalizedData, {
				...parseStoredTemplateData(parsed.templateData),
				[normalizedData.template]: normalizedData
			}),
			typeFilter: parseStoredTypeFilter(parsed.typeFilter)
		};
	} catch {
		return null;
	}
}
const USER_PREFS_KEY_COVER_GENERATIONS = "console.coverGenerator.generations";
const COVER_GENERATIONS_LOCAL_STORAGE_KEY = "console.coverGenerator.generations";
const MAX_SAVED_COVER_GENERATION_NAME_LENGTH = 64;
function isValidSavedCoverGeneration(value) {
	if (value == null || typeof value !== "object") return false;
	const item = value;
	return typeof item.id === "string" && typeof item.name === "string" && typeof item.updatedAt === "number" && Number.isFinite(item.updatedAt) && typeof item.templateId === "string" && item.data != null && typeof item.data === "object";
}
function getCoverGenerationDisplayName(data) {
	const record = data;
	const title = typeof record.title === "string" ? record.title.trim() : "";
	if (title) return title.slice(0, 64);
	return COVER_TEMPLATE_DEFINITIONS.find((entry) => entry.id === data.template)?.label ?? "Cover";
}
function coverTemplateHasDocumentTitle(data) {
	return COVER_TEMPLATE_DEFINITIONS.find((entry) => entry.id === data.template)?.fields.some((field) => field.key === "title") ?? false;
}
function resolveCoverEditorDocumentName(data, savedName) {
	if (coverTemplateHasDocumentTitle(data)) return getCoverGenerationDisplayName(data);
	const trimmed = savedName?.trim();
	if (trimmed) return trimmed.slice(0, 64);
	return getCoverGenerationDisplayName(data);
}
function resolveCoverGenerationPersistName(data, savedName) {
	if (coverTemplateHasDocumentTitle(data)) return getCoverGenerationDisplayName(data);
	return savedName.trim().slice(0, 64) || getCoverGenerationDisplayName(data);
}
function parseSavedCoverGenerations(raw) {
	let parsed = raw;
	if (typeof raw === "string") {
		const trimmed = raw.trim();
		if (!trimmed) return [];
		try {
			parsed = JSON.parse(trimmed);
		} catch {
			return [];
		}
	}
	if (!Array.isArray(parsed)) return [];
	return parsed.filter(isValidSavedCoverGeneration).flatMap((item) => {
		const data = restoreCoverRenderDataFromJson(item.data);
		if (!data) return [];
		return [{
			id: item.id,
			name: item.name.trim().slice(0, 64) || getCoverGenerationDisplayName(data),
			updatedAt: item.updatedAt,
			templateId: data.template,
			data
		}];
	}).sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 30);
}
function serializeCoverGenerationForPrefs(entry) {
	const data = Object.fromEntries(coverRenderDataToSearchParams(entry.data).entries());
	return {
		id: entry.id,
		name: entry.name,
		updatedAt: entry.updatedAt,
		templateId: entry.templateId,
		data
	};
}
function buildSavedCoverGenerationsPrefs(list) {
	return { [USER_PREFS_KEY_COVER_GENERATIONS]: JSON.stringify(list.slice(0, 30).map(serializeCoverGenerationForPrefs)) };
}
function mergeCoverGenerationsIntoPrefs(prefs, list) {
	return {
		...prefs,
		...buildSavedCoverGenerationsPrefs(list)
	};
}
function upsertSavedCoverGeneration(list, entry) {
	return [{
		id: entry.id,
		name: entry.name.trim().slice(0, 64) || getCoverGenerationDisplayName(entry.data),
		updatedAt: entry.updatedAt,
		templateId: entry.data.template,
		data: entry.data
	}, ...list.filter((item) => item.id !== entry.id)].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 30);
}
function removeSavedCoverGeneration(list, id) {
	return list.filter((item) => item.id !== id);
}
function applyCoverGenerationName(data, name) {
	if (!coverTemplateHasDocumentTitle(data)) return data;
	return {
		...data,
		title: name
	};
}
function readLegacyCoverEditorGeneration() {
	const persisted = readCoverGeneratorEditorState();
	if (!persisted) return null;
	return {
		id: crypto.randomUUID(),
		name: getCoverGenerationDisplayName(persisted.data),
		updatedAt: Date.now(),
		templateId: persisted.data.template,
		data: persisted.data
	};
}
function clearLegacyCoverEditorLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.removeItem("console.coverGenerator.editor");
	} catch {}
}
export { clearLegacyCoverEditorLocalStorage as a, parseSavedCoverGenerations as c, resolveCoverEditorDocumentName as d, resolveCoverGenerationPersistName as f, getCoverTemplatesForCategory as h, applyCoverGenerationName as i, readLegacyCoverEditorGeneration as l, COVER_TEMPLATE_CATEGORIES as m, MAX_SAVED_COVER_GENERATION_NAME_LENGTH as n, getCoverGenerationDisplayName as o, upsertSavedCoverGeneration as p, USER_PREFS_KEY_COVER_GENERATIONS as r, mergeCoverGenerationsIntoPrefs as s, COVER_GENERATIONS_LOCAL_STORAGE_KEY as t, removeSavedCoverGeneration as u };
