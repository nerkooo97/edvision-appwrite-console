const LEGACY_SIDEBAR_PERCENT_REFERENCE_WIDTH_PX = 1280;
const TABLE_VIEW_SIDEBAR_MIN_WIDTH_PX = 224;
const TABLE_VIEW_SIDEBAR_MAX_WIDTH_PX = 480;
const TABLE_VIEW_SIDEBAR_DEFAULT_WIDTH_PX = 224;
const TABLE_VIEW_MAIN_MIN_WIDTH_PX = 360;
const FUNCTIONS_EDITOR_EXPLORER_MIN_WIDTH_PX = 200;
const FUNCTIONS_EDITOR_EXPLORER_MAX_WIDTH_PX = 480;
const FUNCTIONS_EDITOR_EXPLORER_DEFAULT_WIDTH_PX = 280;
const FUNCTIONS_EDITOR_MAIN_MIN_WIDTH_PX = 400;
const CLI_SHELL_SESSIONS_SIDEBAR_MIN_WIDTH_PX = 176;
const CLI_SHELL_SESSIONS_SIDEBAR_MAX_WIDTH_PX = 320;
const CLI_SHELL_SESSIONS_SIDEBAR_DEFAULT_WIDTH_PX = 208;
const CLI_SHELL_TERMINAL_MAIN_MIN_WIDTH_PX = 240;
const CLI_SHELL_SESSIONS_STRIP_MAX_WIDTH_PX = 640;
const AI_CHAT_CONVERSATIONS_SIDEBAR_MIN_WIDTH_PX = 220;
const AI_CHAT_CONVERSATIONS_SIDEBAR_MAX_WIDTH_PX = 420;
const AI_CHAT_CONVERSATIONS_SIDEBAR_DEFAULT_WIDTH_PX = 288;
const AI_CHAT_MAIN_MIN_WIDTH_PX = 360;
var LEGACY_SIDEBAR_PERCENT_MAX = 60;
function effectivePanelGroupWidthPx(measuredWidth) {
	return measuredWidth > 0 ? measuredWidth : LEGACY_SIDEBAR_PERCENT_REFERENCE_WIDTH_PX;
}
function panelPercentFromPx(px, containerWidth, fallbackPercent = 0) {
	const w = effectivePanelGroupWidthPx(containerWidth);
	if (w <= 0) return fallbackPercent;
	return Math.min(100, px / w * 100);
}
function clampSplitFirstPaneWidthPx(widthPx, containerWidth, firstMinPx, firstMaxPx, secondMinPx) {
	const w = effectivePanelGroupWidthPx(containerWidth);
	const maxFirstPx = Math.min(firstMaxPx, Math.max(firstMinPx, w - secondMinPx));
	return Math.min(maxFirstPx, Math.max(firstMinPx, Math.round(widthPx)));
}
function fitSplitFirstPaneWidthOnContainerResize(currentWidthPx, containerWidth, firstMinPx, firstMaxPx, secondMinPx) {
	const w = effectivePanelGroupWidthPx(containerWidth);
	const maxFirstPx = Math.min(firstMaxPx, Math.max(firstMinPx, w - secondMinPx));
	const current = Math.round(currentWidthPx);
	if (current > maxFirstPx) return maxFirstPx;
	return current;
}
function syncPanelGroupFirstPanePx(panel, containerWidth, firstPx, constraints) {
	if (containerWidth <= 0) return firstPx;
	const layout = computeTwoPanelHorizontalLayout({
		containerWidth,
		firstPx: fitSplitFirstPaneWidthOnContainerResize(firstPx, containerWidth, constraints.firstMinPx, constraints.firstMaxPx, constraints.secondMinPx),
		...constraints
	});
	if (panel) {
		const currentSize = panel.getSize();
		if (Math.abs(currentSize - layout.firstPercent) > .5) panel.resize(layout.firstPercent);
	}
	return layout.firstPx;
}
function computeTwoPanelHorizontalLayout(input) {
	const w = effectivePanelGroupWidthPx(input.containerWidth);
	const firstPx = clampSplitFirstPaneWidthPx(input.firstPx, w, input.firstMinPx, input.firstMaxPx, input.secondMinPx);
	const secondMinPercent = panelPercentFromPx(input.secondMinPx, w);
	const firstMinPercent = panelPercentFromPx(input.firstMinPx, w);
	const firstMaxPercent = Math.min(panelPercentFromPx(input.firstMaxPx, w, 100), Math.max(firstMinPercent, 100 - secondMinPercent));
	const effectiveFirstMinPercent = Math.min(firstMinPercent, Math.max(0, 100 - secondMinPercent));
	let firstPercent = panelPercentFromPx(firstPx, w, effectiveFirstMinPercent);
	firstPercent = Math.min(firstMaxPercent, Math.max(effectiveFirstMinPercent, firstPercent));
	return {
		firstPercent,
		secondPercent: 100 - firstPercent,
		firstMinPercent: effectiveFirstMinPercent,
		firstMaxPercent,
		secondMinPercent,
		firstPx
	};
}
function clampTableViewSidebarWidthPx(px) {
	return Math.min(480, Math.max(224, Math.round(px)));
}
function clampCliShellSessionsSidebarWidthPx(px) {
	return Math.min(320, Math.max(176, Math.round(px)));
}
function clampAIChatConversationsSidebarWidthPx(px) {
	return Math.min(420, Math.max(220, Math.round(px)));
}
const POSTGRES_SQL_EDITOR_MIN_HEIGHT_PX = 120;
const POSTGRES_SQL_EDITOR_MAX_HEIGHT_PX = 720;
const POSTGRES_SQL_EDITOR_DEFAULT_HEIGHT_PX = 220;
const POSTGRES_SQL_RESULTS_MIN_HEIGHT_PX = 160;
function clampPostgresSqlEditorHeightPx(px) {
	return Math.min(720, Math.max(120, Math.round(px)));
}
const MYSQL_SQL_EDITOR_MIN_HEIGHT_PX = 120;
const MYSQL_SQL_EDITOR_MAX_HEIGHT_PX = 720;
const MYSQL_SQL_EDITOR_DEFAULT_HEIGHT_PX = 220;
const MYSQL_SQL_RESULTS_MIN_HEIGHT_PX = 160;
function clampMysqlSqlEditorHeightPx(px) {
	return clampPostgresSqlEditorHeightPx(px);
}
const COVER_GENERATOR_COLUMNS_DEFAULT_LAYOUT = [
	22,
	53,
	25
];
const COVER_GENERATOR_COLUMNS_MIN = [
	16,
	28,
	19
];
const COVER_GENERATOR_COLUMNS_MAX = [
	38,
	100,
	38
];
const API_EXPLORER_COLUMNS_DEFAULT_LAYOUT = [
	20,
	24,
	56
];
const API_EXPLORER_COLUMNS_MIN = [
	14,
	18,
	36
];
const API_EXPLORER_COLUMNS_MAX = [
	28,
	34,
	100
];
const API_EXPLORER_RESPONSE_SPLIT_DEFAULT_LAYOUT = [58, 42];
const API_EXPLORER_RESPONSE_SPLIT_MIN = [20, 15];
const API_EXPLORER_RESPONSE_SPLIT_MAX = [85, 75];
const API_REFERENCE_COLUMNS_DEFAULT_LAYOUT = [24, 76];
const API_REFERENCE_COLUMNS_MIN = [18, 36];
const API_REFERENCE_COLUMNS_MAX = [34, 100];
const DIAGRAM_GENERATOR_PROPERTIES_SPLIT_DEFAULT_LAYOUT = [62, 38];
const DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MIN = [22, 18];
const DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MAX = [82, 78];
function normalizePanelLayout(sizes, mins, maxs, fallback) {
	if (sizes.length !== mins.length) return [...fallback];
	const clamped = sizes.map((size, index) => {
		if (typeof size !== "number" || !Number.isFinite(size)) return fallback[index] ?? 0;
		const min = mins[index] ?? 0;
		const max = maxs[index] ?? 100;
		return Math.min(max, Math.max(min, size));
	});
	const sum = clamped.reduce((total, size) => total + size, 0);
	if (sum <= 0) return [...fallback];
	if (Math.abs(sum - 100) < .01) return clamped;
	return clamped.map((size) => size / sum * 100);
}
function normalizeCoverGeneratorColumnsLayout(sizes) {
	return normalizePanelLayout(sizes, COVER_GENERATOR_COLUMNS_MIN, COVER_GENERATOR_COLUMNS_MAX, COVER_GENERATOR_COLUMNS_DEFAULT_LAYOUT);
}
function normalizeApiExplorerColumnsLayout(sizes) {
	return normalizePanelLayout(sizes, API_EXPLORER_COLUMNS_MIN, API_EXPLORER_COLUMNS_MAX, API_EXPLORER_COLUMNS_DEFAULT_LAYOUT);
}
function normalizeApiExplorerResponseSplitLayout(sizes) {
	return normalizePanelLayout(sizes, API_EXPLORER_RESPONSE_SPLIT_MIN, API_EXPLORER_RESPONSE_SPLIT_MAX, API_EXPLORER_RESPONSE_SPLIT_DEFAULT_LAYOUT);
}
function normalizeApiReferenceColumnsLayout(sizes) {
	return normalizePanelLayout(sizes, API_REFERENCE_COLUMNS_MIN, API_REFERENCE_COLUMNS_MAX, API_REFERENCE_COLUMNS_DEFAULT_LAYOUT);
}
function normalizeDiagramGeneratorPropertiesSplitLayout(sizes) {
	return normalizePanelLayout(sizes, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MIN, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MAX, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_DEFAULT_LAYOUT);
}
function normalizeLegacySidebarWidthPrefValue(raw) {
	if (raw > 0 && raw <= LEGACY_SIDEBAR_PERCENT_MAX && raw < 224) return clampTableViewSidebarWidthPx(raw / 100 * LEGACY_SIDEBAR_PERCENT_REFERENCE_WIDTH_PX);
	return clampTableViewSidebarWidthPx(raw);
}
export { normalizeCoverGeneratorColumnsLayout as $, MYSQL_SQL_EDITOR_MAX_HEIGHT_PX as A, TABLE_VIEW_SIDEBAR_MIN_WIDTH_PX as B, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MAX as C, FUNCTIONS_EDITOR_EXPLORER_MIN_WIDTH_PX as D, FUNCTIONS_EDITOR_EXPLORER_MAX_WIDTH_PX as E, POSTGRES_SQL_EDITOR_MIN_HEIGHT_PX as F, clampSplitFirstPaneWidthPx as G, clampCliShellSessionsSidebarWidthPx as H, POSTGRES_SQL_RESULTS_MIN_HEIGHT_PX as I, effectivePanelGroupWidthPx as J, clampTableViewSidebarWidthPx as K, TABLE_VIEW_MAIN_MIN_WIDTH_PX as L, MYSQL_SQL_RESULTS_MIN_HEIGHT_PX as M, POSTGRES_SQL_EDITOR_DEFAULT_HEIGHT_PX as N, FUNCTIONS_EDITOR_MAIN_MIN_WIDTH_PX as O, POSTGRES_SQL_EDITOR_MAX_HEIGHT_PX as P, normalizeApiReferenceColumnsLayout as Q, TABLE_VIEW_SIDEBAR_DEFAULT_WIDTH_PX as R, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_DEFAULT_LAYOUT as S, FUNCTIONS_EDITOR_EXPLORER_DEFAULT_WIDTH_PX as T, clampMysqlSqlEditorHeightPx as U, clampAIChatConversationsSidebarWidthPx as V, clampPostgresSqlEditorHeightPx as W, normalizeApiExplorerColumnsLayout as X, fitSplitFirstPaneWidthOnContainerResize as Y, normalizeApiExplorerResponseSplitLayout as Z, CLI_SHELL_SESSIONS_STRIP_MAX_WIDTH_PX as _, API_EXPLORER_COLUMNS_DEFAULT_LAYOUT as a, COVER_GENERATOR_COLUMNS_MAX as b, API_EXPLORER_RESPONSE_SPLIT_DEFAULT_LAYOUT as c, API_REFERENCE_COLUMNS_DEFAULT_LAYOUT as d, normalizeDiagramGeneratorPropertiesSplitLayout as et, API_REFERENCE_COLUMNS_MAX as f, CLI_SHELL_SESSIONS_SIDEBAR_MIN_WIDTH_PX as g, CLI_SHELL_SESSIONS_SIDEBAR_MAX_WIDTH_PX as h, AI_CHAT_MAIN_MIN_WIDTH_PX as i, MYSQL_SQL_EDITOR_MIN_HEIGHT_PX as j, MYSQL_SQL_EDITOR_DEFAULT_HEIGHT_PX as k, API_EXPLORER_RESPONSE_SPLIT_MAX as l, CLI_SHELL_SESSIONS_SIDEBAR_DEFAULT_WIDTH_PX as m, AI_CHAT_CONVERSATIONS_SIDEBAR_MAX_WIDTH_PX as n, syncPanelGroupFirstPanePx as nt, API_EXPLORER_COLUMNS_MAX as o, API_REFERENCE_COLUMNS_MIN as p, computeTwoPanelHorizontalLayout as q, AI_CHAT_CONVERSATIONS_SIDEBAR_MIN_WIDTH_PX as r, API_EXPLORER_COLUMNS_MIN as s, AI_CHAT_CONVERSATIONS_SIDEBAR_DEFAULT_WIDTH_PX as t, normalizeLegacySidebarWidthPrefValue as tt, API_EXPLORER_RESPONSE_SPLIT_MIN as u, CLI_SHELL_TERMINAL_MAIN_MIN_WIDTH_PX as v, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_MIN as w, COVER_GENERATOR_COLUMNS_MIN as x, COVER_GENERATOR_COLUMNS_DEFAULT_LAYOUT as y, TABLE_VIEW_SIDEBAR_MAX_WIDTH_PX as z };
