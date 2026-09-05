import { a as COVER_WIDTH, g as resolveCoverThemeId, n as COVER_IMAGE_FORMATS, p as isCoverThemeId, s as isCoverTemplateId, t as COVER_HEIGHT, u as DEFAULT_COVER_THEME_ID } from "./constants-CL7SLzjY.js";
import { A as COVER_CHART_DEFAULT_FRAME_WIDTH_PERCENT, B as COVER_TABLE_GRID, C as DEFAULT_CLI_CODE_SUBTITLE, E as DEFAULT_CLI_TERMINAL_TITLE, G as getCoverTableHeaderKeys, H as getCoverTableCellKey, I as getCoverChartValueKeys, J as COVER_SCREENSHOT_ANGLED_3D_DEFAULTS, N as getCoverChartLabelKeys, S as DEFAULT_CLI_CODE, T as DEFAULT_CLI_TERMINAL_ICON, V as buildCoverTableDefaultFieldParams, Y as COVER_SCREENSHOT_ANGLED_3D_LIMITS, Z as COVER_SCREENSHOT_ANGLED_LAYOUT, c as DEFAULT_CODE_SNIPPET_TITLE, dt as formatCoverEyebrow, ft as parseBooleanParam, gt as COVER_SCREENSHOT_FRAME_HEIGHT, j as buildCoverChartDefaultFieldParams, k as COVER_CHART, m as parseCoverCodeSnippetLanguage, mt as stripCoverTitleSuffix, n as COVER_CODE_SNIPPET_DEFAULT_FRAME_WIDTH_PERCENT, o as DEFAULT_CODE_SNIPPET, pt as parseNumberParam, r as COVER_CODE_SNIPPET_FONT_SIZE, s as DEFAULT_CODE_SNIPPET_LANGUAGE, vt as COVER_SCREENSHOT_FRAME_WIDTH, w as DEFAULT_CLI_CODE_TITLE, x as COVER_CLI_CODE_DEFAULT_FRAME_WIDTH_PERCENT, z as COVER_TABLE_DEFAULT_FRAME_WIDTH_PERCENT } from "./constants-B5zUV45z.js";
const COVER_CARDS_ANGLED_ICON_VISIBILITY_OPTIONS = [
	{
		value: "visible",
		label: "Visible"
	},
	{
		value: "fade",
		label: "Faded"
	},
	{
		value: "hidden",
		label: "Hidden"
	}
];
const COVER_CARDS_ANGLED_FADED_ICON_OPACITY = .35;
const COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY = .6;
function buildCoverCardsAngledHaloGrid(filledColumns, filledRows) {
	const gridColumns = Math.max(6, filledColumns + 2);
	const gridRows = 1 + filledRows + 2;
	const filledColStart = Math.floor((gridColumns - filledColumns) / 2);
	const filledRowStart = 1;
	const cells = [];
	for (let row = 0; row < gridRows; row += 1) for (let col = 0; col < gridColumns; col += 1) {
		const inFilledRow = row >= filledRowStart && row < filledRowStart + filledRows;
		const inFilledCol = col >= filledColStart && col < filledColStart + filledColumns;
		if (inFilledRow && inFilledCol) {
			const iconIndex = (row - filledRowStart) * filledColumns + (col - filledColStart);
			cells.push({
				kind: "filled",
				iconIndex
			});
			continue;
		}
		cells.push({ kind: "empty" });
	}
	return {
		columns: gridColumns,
		rows: gridRows,
		cells
	};
}
const COVER_CARDS_ANGLED_DEFAULT_ICONS = [
	"/icons/appwrite.svg",
	"/icons/github.svg",
	"/icons/vercel.svg",
	"/icons/react.svg",
	"/icons/nextjs.svg",
	"/icons/supabase.svg",
	"/icons/stripe.svg",
	"/icons/docker.svg",
	"/icons/node.svg",
	"/icons/python.svg",
	"/icons/flutter.svg",
	"/icons/figma.svg"
];
const COVER_CARDS_ANGLED_GRID = {
	columns: {
		min: 2,
		max: 6,
		default: 4
	},
	rows: {
		min: 2,
		max: 4,
		default: 3
	},
	iconSize: {
		min: 48,
		max: 140,
		default: 84,
		step: 4
	},
	gap: {
		min: 8,
		max: 48,
		default: 20,
		step: 2
	}
};
const COVER_CARDS_ANGLED_3D_DEFAULTS = {
	...COVER_SCREENSHOT_ANGLED_3D_DEFAULTS,
	displayScale: 1.9,
	translateX: -65,
	translateY: -90,
	posXRatio: COVER_SCREENSHOT_ANGLED_LAYOUT.offsetXRatio,
	posYRatio: COVER_SCREENSHOT_ANGLED_LAYOUT.offsetYRatio
};
const COVER_CARDS_ANGLED_ICON_KEYS = [
	"icon1",
	"icon2",
	"icon3",
	"icon4",
	"icon5",
	"icon6",
	"icon7",
	"icon8",
	"icon9",
	"icon10",
	"icon11",
	"icon12"
];
function getCoverCardsAngledIconVisibilityKey(iconKey) {
	return `${iconKey}Visibility`;
}
function parseCoverCardsAngledIconVisibility(value) {
	if (value === "hidden" || value === "fade") return value;
	return "visible";
}
function getCoverCardsAngledIconKeys() {
	return [...COVER_CARDS_ANGLED_ICON_KEYS];
}
function buildCoverCardsAngledDefaultIconParams() {
	return Object.fromEntries(getCoverCardsAngledIconKeys().map((key, index) => [key, COVER_CARDS_ANGLED_DEFAULT_ICONS[index] ?? "/icons/appwrite.svg"]));
}
function getCoverCardsAngledLayoutResetFields() {
	return {
		columns: COVER_CARDS_ANGLED_GRID.columns.default,
		rows: COVER_CARDS_ANGLED_GRID.rows.default,
		iconSize: COVER_CARDS_ANGLED_GRID.iconSize.default,
		gap: COVER_CARDS_ANGLED_GRID.gap.default,
		...COVER_CARDS_ANGLED_3D_DEFAULTS
	};
}
function normalizeCoverCardsAngledData(data) {
	const cardsData = data.template === "cards-angled" ? data : null;
	const defaultIcons = buildCoverCardsAngledDefaultIconParams();
	const iconFields = Object.fromEntries(getCoverCardsAngledIconKeys().map((key) => [key, cardsData?.[key]?.trim() || defaultIcons[key]]));
	const iconVisibilityFields = Object.fromEntries(getCoverCardsAngledIconKeys().map((key) => {
		const visibilityKey = getCoverCardsAngledIconVisibilityKey(key);
		return [visibilityKey, parseCoverCardsAngledIconVisibility(cardsData?.[visibilityKey])];
	}));
	return {
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		template: "cards-angled",
		columns: cardsData && Number.isFinite(cardsData.columns) ? cardsData.columns : COVER_CARDS_ANGLED_GRID.columns.default,
		rows: cardsData && Number.isFinite(cardsData.rows) ? cardsData.rows : COVER_CARDS_ANGLED_GRID.rows.default,
		iconSize: cardsData && Number.isFinite(cardsData.iconSize) ? cardsData.iconSize : COVER_CARDS_ANGLED_GRID.iconSize.default,
		gap: cardsData && Number.isFinite(cardsData.gap) ? cardsData.gap : COVER_CARDS_ANGLED_GRID.gap.default,
		rotateX: cardsData && Number.isFinite(cardsData.rotateX) ? cardsData.rotateX : COVER_CARDS_ANGLED_3D_DEFAULTS.rotateX,
		rotateZ: cardsData && Number.isFinite(cardsData.rotateZ) ? cardsData.rotateZ : COVER_CARDS_ANGLED_3D_DEFAULTS.rotateZ,
		rotateY: cardsData && Number.isFinite(cardsData.rotateY) ? cardsData.rotateY : COVER_CARDS_ANGLED_3D_DEFAULTS.rotateY,
		translateX: cardsData && Number.isFinite(cardsData.translateX) ? cardsData.translateX : COVER_CARDS_ANGLED_3D_DEFAULTS.translateX,
		translateY: cardsData && Number.isFinite(cardsData.translateY) ? cardsData.translateY : COVER_CARDS_ANGLED_3D_DEFAULTS.translateY,
		displayScale: cardsData && Number.isFinite(cardsData.displayScale) ? cardsData.displayScale : COVER_CARDS_ANGLED_3D_DEFAULTS.displayScale,
		posXRatio: cardsData && Number.isFinite(cardsData.posXRatio) ? cardsData.posXRatio : COVER_CARDS_ANGLED_3D_DEFAULTS.posXRatio,
		posYRatio: cardsData && Number.isFinite(cardsData.posYRatio) ? cardsData.posYRatio : COVER_CARDS_ANGLED_3D_DEFAULTS.posYRatio,
		...iconFields,
		...iconVisibilityFields
	};
}
function getCoverCardsAngledIconSlots(data) {
	const normalized = normalizeCoverCardsAngledData(data);
	const slotCount = Math.min(normalized.columns * normalized.rows, 12);
	return getCoverCardsAngledIconKeys().slice(0, slotCount).map((key, index) => {
		const visibilityKey = getCoverCardsAngledIconVisibilityKey(key);
		return {
			src: normalized[key]?.trim() || COVER_CARDS_ANGLED_DEFAULT_ICONS[index] || "/icons/appwrite.svg",
			visibility: normalized[visibilityKey] ?? "visible"
		};
	});
}
function getCoverCardsAngledIconCardMetrics(iconSize) {
	const padding = Math.max(10, Math.round(iconSize * (28 / 120)));
	return {
		padding,
		cardSize: padding * 2 + iconSize,
		radius: Math.max(14, Math.round(iconSize * (32 / 120)))
	};
}
function isCoverDomPreviewTemplate(template) {
	return template === "screenshot-angled" || template === "cards-angled";
}
const COVER_MILESTONE_DEFAULTS = {
	eyebrow: "Milestone",
	stat: "100K",
	statLabel: "developers",
	title: "Thank you for building with us",
	subtitle: "And we are just getting started.",
	gradientStat: true
};
const COVER_MILESTONE_FIELD_DEFINITIONS = [
	{
		key: "eyebrow",
		label: "Eyebrow",
		type: "text",
		placeholder: COVER_MILESTONE_DEFAULTS.eyebrow
	},
	{
		key: "stat",
		label: "Stat",
		type: "text",
		placeholder: COVER_MILESTONE_DEFAULTS.stat,
		description: "The milestone number or metric (e.g. 100K, 1M+, $10M)."
	},
	{
		key: "statLabel",
		label: "Stat label",
		type: "text",
		placeholder: COVER_MILESTONE_DEFAULTS.statLabel,
		description: "Short label under the stat (e.g. developers, GitHub stars)."
	},
	{
		key: "title",
		label: "Title",
		type: "textarea",
		placeholder: COVER_MILESTONE_DEFAULTS.title
	},
	{
		key: "subtitle",
		label: "Subtitle",
		type: "textarea",
		placeholder: COVER_MILESTONE_DEFAULTS.subtitle
	},
	{
		key: "gradientStat",
		label: "Gradient stat",
		type: "boolean",
		description: "Use the brand pink-to-purple gradient on the stat."
	}
];
const COVER_VERSION_DEFAULTS = {
	eyebrow: "Release",
	version: "1.9.6",
	title: "What's new"
};
const COVER_VERSION_NUMBER_FIELD_DEFINITIONS = [{
	key: "eyebrow",
	label: "Eyebrow",
	type: "text",
	placeholder: COVER_VERSION_DEFAULTS.eyebrow
}, {
	key: "version",
	label: "Version",
	type: "text",
	placeholder: COVER_VERSION_DEFAULTS.version,
	description: "The release version number (e.g. 1.9.6, 2.0.0, 1.10.0-rc.1)."
}];
const COVER_VERSION_TITLE_FIELD_DEFINITIONS = [...COVER_VERSION_NUMBER_FIELD_DEFINITIONS, {
	key: "title",
	label: "Title",
	type: "textarea",
	placeholder: COVER_VERSION_DEFAULTS.title
}];
function parseCoverTitle(value, fallback) {
	return stripCoverTitleSuffix(value?.trim() || fallback) || fallback;
}
function parseCoverOptionalText(value) {
	const raw = value?.trim();
	if (!raw) return void 0;
	return stripCoverTitleSuffix(raw) || void 0;
}
function parseCoverMilestoneFields(searchParams) {
	return {
		stat: searchParams.get("stat")?.trim() || COVER_MILESTONE_DEFAULTS.stat,
		statLabel: searchParams.get("statLabel")?.trim() || void 0,
		title: parseCoverTitle(searchParams.get("title"), COVER_MILESTONE_DEFAULTS.title),
		subtitle: searchParams.get("subtitle")?.trim() || void 0,
		eyebrow: formatCoverEyebrow(searchParams.get("eyebrow") ?? void 0),
		gradientStat: parseBooleanParam(searchParams.get("gradientStat"), COVER_MILESTONE_DEFAULTS.gradientStat)
	};
}
function appendCoverMilestoneSearchParams(params, data) {
	params.set("stat", data.stat);
	params.set("title", stripCoverTitleSuffix(data.title));
	const setOptional = (key, value) => {
		if (value == null || value === "") return;
		params.set(key, String(value));
	};
	setOptional("statLabel", data.statLabel);
	setOptional("subtitle", data.subtitle);
	setOptional("eyebrow", formatCoverEyebrow(data.eyebrow));
	setOptional("gradientStat", data.gradientStat);
}
function parseCoverVersionNumberFields(searchParams) {
	return {
		version: searchParams.get("version")?.trim() || COVER_VERSION_DEFAULTS.version,
		eyebrow: formatCoverEyebrow(searchParams.get("eyebrow") ?? COVER_VERSION_DEFAULTS.eyebrow)
	};
}
function parseCoverVersionTitleFields(searchParams) {
	return {
		...parseCoverVersionNumberFields(searchParams),
		title: parseCoverTitle(searchParams.get("title"), COVER_VERSION_DEFAULTS.title)
	};
}
function appendCoverVersionNumberSearchParams(params, data) {
	params.set("version", data.version);
	const setOptional = (key, value) => {
		if (value == null || value === "") return;
		params.set(key, String(value));
	};
	setOptional("eyebrow", formatCoverEyebrow(data.eyebrow));
}
function appendCoverVersionTitleSearchParams(params, data) {
	appendCoverVersionNumberSearchParams(params, data);
	params.set("title", stripCoverTitleSuffix(data.title));
}
const DEFAULT_COVER_VALUES = {
	template: "simple-title",
	theme: DEFAULT_COVER_THEME_ID,
	format: "png",
	width: COVER_WIDTH,
	height: 630,
	title: "Build like a team of hundreds",
	subtitle: "The open-source developer platform",
	eyebrow: "Cover generator",
	connector: "×",
	iconSize: 120,
	integrationIconSize: 140,
	titleIconSize: 80,
	titleIconTitle: "Auth",
	titleIconIcon: "lucide:users",
	zoom: 1,
	focusX: 0,
	focusY: 0,
	frameWidthPercent: COVER_SCREENSHOT_FRAME_WIDTH.flatDefaultPercent,
	frameHeightPercent: COVER_SCREENSHOT_FRAME_HEIGHT.defaultPercent,
	screenshotAngledFrameWidthPercent: COVER_SCREENSHOT_FRAME_WIDTH.angledDefaultPercent,
	screenshotSideFrameWidthPercent: COVER_SCREENSHOT_FRAME_WIDTH.sideDefaultPercent,
	screenshotSideFrameHeightPercent: COVER_SCREENSHOT_FRAME_HEIGHT.sideDefaultPercent,
	logoLeft: "/icons/appwrite.svg",
	logoRight: "/icons/github.svg",
	icon: "/icons/appwrite.svg",
	screenshot: ""
};
function parseFormat(value) {
	const normalized = value?.trim().toLowerCase();
	if (normalized && COVER_IMAGE_FORMATS.includes(normalized)) return normalized;
	return DEFAULT_COVER_VALUES.format;
}
function parseTemplate(value) {
	const normalized = value?.trim();
	if (normalized && isCoverTemplateId(normalized)) return normalized;
	return DEFAULT_COVER_VALUES.template;
}
function parseTheme(value) {
	const normalized = value?.trim().toLowerCase();
	if (normalized && isCoverThemeId(normalized)) return normalized;
	return DEFAULT_COVER_THEME_ID;
}
function parseCoverScreenshotFields(searchParams, options) {
	const frameWidthLimits = COVER_SCREENSHOT_FRAME_WIDTH;
	const frameHeightLimits = COVER_SCREENSHOT_FRAME_HEIGHT;
	const frameWidthPercentRaw = searchParams.get("frameWidthPercent");
	let frameWidthPercent = options.frameWidthPercentDefault;
	if (frameWidthPercentRaw != null && frameWidthPercentRaw !== "") frameWidthPercent = parseNumberParam(frameWidthPercentRaw, options.frameWidthPercentDefault, frameWidthLimits.minPercent, frameWidthLimits.maxPercent);
	let frameHeightPercent;
	if (!options.angled) {
		const frameHeightPercentRaw = searchParams.get("frameHeightPercent");
		const defaultHeightPercent = options.frameHeightPercentDefault ?? COVER_SCREENSHOT_FRAME_HEIGHT.defaultPercent;
		frameHeightPercent = defaultHeightPercent;
		if (frameHeightPercentRaw != null && frameHeightPercentRaw !== "") frameHeightPercent = parseNumberParam(frameHeightPercentRaw, defaultHeightPercent, frameHeightLimits.minPercent, frameHeightLimits.maxPercent);
	}
	return {
		title: options.angled ? void 0 : parseCoverOptionalText(searchParams.get("title")),
		subtitle: options.angled ? void 0 : searchParams.get("subtitle")?.trim() || void 0,
		screenshot: searchParams.get("screenshot")?.trim() || void 0,
		zoom: parseNumberParam(searchParams.get("zoom"), DEFAULT_COVER_VALUES.zoom, 1, 3),
		focusX: parseNumberParam(searchParams.get("focusX"), DEFAULT_COVER_VALUES.focusX, 0, 100),
		focusY: parseNumberParam(searchParams.get("focusY"), DEFAULT_COVER_VALUES.focusY, 0, 100),
		frameWidthPercent,
		frameHeightPercent
	};
}
function parseCoverScreenshotAngled3DFields(searchParams, defaults = COVER_SCREENSHOT_ANGLED_3D_DEFAULTS) {
	const limits = COVER_SCREENSHOT_ANGLED_3D_LIMITS;
	return {
		rotateX: parseNumberParam(searchParams.get("rotateX"), defaults.rotateX, limits.rotateX.min, limits.rotateX.max),
		rotateZ: parseNumberParam(searchParams.get("rotateZ"), defaults.rotateZ, limits.rotateZ.min, limits.rotateZ.max),
		rotateY: parseNumberParam(searchParams.get("rotateY"), defaults.rotateY, limits.rotateY.min, limits.rotateY.max),
		translateX: parseNumberParam(searchParams.get("translateX"), defaults.translateX, limits.translateX.min, limits.translateX.max),
		translateY: parseNumberParam(searchParams.get("translateY"), defaults.translateY, limits.translateY.min, limits.translateY.max),
		displayScale: parseNumberParam(searchParams.get("displayScale"), defaults.displayScale, limits.displayScale.min, limits.displayScale.max),
		posXRatio: parseNumberParam(searchParams.get("posXRatio"), defaults.posXRatio, limits.posXRatio.min, limits.posXRatio.max),
		posYRatio: parseNumberParam(searchParams.get("posYRatio"), defaults.posYRatio, limits.posYRatio.min, limits.posYRatio.max)
	};
}
function appendCoverScreenshotAngled3DSearchParams(params, data) {
	const setOptional = (key, value) => {
		if (value == null || value === "") return;
		params.set(key, String(value));
	};
	setOptional("rotateX", data.rotateX);
	setOptional("rotateZ", data.rotateZ);
	setOptional("rotateY", data.rotateY);
	setOptional("translateX", data.translateX);
	setOptional("translateY", data.translateY);
	setOptional("displayScale", data.displayScale);
	setOptional("posXRatio", data.posXRatio);
	setOptional("posYRatio", data.posYRatio);
}
function appendCoverScreenshotSearchParams(params, data, options) {
	const setOptional = (key, value) => {
		if (value == null || value === "") return;
		params.set(key, String(value));
	};
	if (!options?.angled) {
		setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
		setOptional("subtitle", data.subtitle);
	}
	setOptional("screenshot", data.screenshot);
	setOptional("zoom", data.zoom);
	setOptional("focusX", data.focusX);
	setOptional("focusY", data.focusY);
	setOptional("frameWidthPercent", data.frameWidthPercent);
	if (!options?.angled) setOptional("frameHeightPercent", data.frameHeightPercent);
}
function parseCoverRenderData(searchParams) {
	const template = parseTemplate(searchParams.get("template"));
	const shared = {
		theme: parseTheme(searchParams.get("theme")),
		format: parseFormat(searchParams.get("format")),
		width: parseNumberParam(searchParams.get("width"), DEFAULT_COVER_VALUES.width, 320, 4096),
		height: parseNumberParam(searchParams.get("height"), DEFAULT_COVER_VALUES.height, 200, 4096)
	};
	switch (template) {
		case "integration": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			logoLeft: searchParams.get("logoLeft")?.trim() || void 0,
			logoRight: searchParams.get("logoRight")?.trim() || void 0,
			connector: searchParams.get("connector")?.trim() || DEFAULT_COVER_VALUES.connector
		};
		case "integration-icon": return {
			...shared,
			template,
			icon: searchParams.get("icon")?.trim() || void 0,
			iconSize: parseNumberParam(searchParams.get("iconSize"), DEFAULT_COVER_VALUES.integrationIconSize, 96, 200)
		};
		case "showcase-icon": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			icon: searchParams.get("icon")?.trim() || void 0,
			iconSize: parseNumberParam(searchParams.get("iconSize"), DEFAULT_COVER_VALUES.iconSize, 48, 220)
		};
		case "title-icon": return {
			...shared,
			template,
			title: parseCoverTitle(searchParams.get("title"), DEFAULT_COVER_VALUES.titleIconTitle),
			icon: searchParams.get("icon")?.trim() || DEFAULT_COVER_VALUES.titleIconIcon,
			iconSize: parseNumberParam(searchParams.get("iconSize"), DEFAULT_COVER_VALUES.titleIconSize, 40, 128)
		};
		case "screenshot": return {
			...shared,
			template,
			...parseCoverScreenshotFields(searchParams, {
				frameWidthPercentDefault: DEFAULT_COVER_VALUES.frameWidthPercent,
				frameHeightPercentDefault: DEFAULT_COVER_VALUES.frameHeightPercent
			})
		};
		case "screenshot-side": return {
			...shared,
			template,
			...parseCoverScreenshotFields(searchParams, {
				frameWidthPercentDefault: DEFAULT_COVER_VALUES.screenshotSideFrameWidthPercent,
				frameHeightPercentDefault: DEFAULT_COVER_VALUES.screenshotSideFrameHeightPercent
			})
		};
		case "screenshot-angled": return {
			...shared,
			template,
			...parseCoverScreenshotFields(searchParams, {
				frameWidthPercentDefault: DEFAULT_COVER_VALUES.screenshotAngledFrameWidthPercent,
				angled: true
			}),
			...parseCoverScreenshotAngled3DFields(searchParams)
		};
		case "cards-angled": return {
			...shared,
			template,
			columns: parseNumberParam(searchParams.get("columns"), COVER_CARDS_ANGLED_GRID.columns.default, COVER_CARDS_ANGLED_GRID.columns.min, COVER_CARDS_ANGLED_GRID.columns.max),
			rows: parseNumberParam(searchParams.get("rows"), COVER_CARDS_ANGLED_GRID.rows.default, COVER_CARDS_ANGLED_GRID.rows.min, COVER_CARDS_ANGLED_GRID.rows.max),
			iconSize: parseNumberParam(searchParams.get("iconSize"), COVER_CARDS_ANGLED_GRID.iconSize.default, COVER_CARDS_ANGLED_GRID.iconSize.min, COVER_CARDS_ANGLED_GRID.iconSize.max),
			gap: parseNumberParam(searchParams.get("gap"), COVER_CARDS_ANGLED_GRID.gap.default, COVER_CARDS_ANGLED_GRID.gap.min, COVER_CARDS_ANGLED_GRID.gap.max),
			...Object.fromEntries(getCoverCardsAngledIconKeys().flatMap((key) => {
				const visibilityKey = getCoverCardsAngledIconVisibilityKey(key);
				const visibility = parseCoverCardsAngledIconVisibility(searchParams.get(visibilityKey));
				return [[key, searchParams.get(key)?.trim() || void 0], [visibilityKey, visibility]];
			})),
			...parseCoverScreenshotAngled3DFields(searchParams, COVER_CARDS_ANGLED_3D_DEFAULTS)
		};
		case "table": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			columns: parseNumberParam(searchParams.get("columns"), COVER_TABLE_GRID.columns.default, COVER_TABLE_GRID.columns.min, COVER_TABLE_GRID.columns.max),
			rows: parseNumberParam(searchParams.get("rows"), COVER_TABLE_GRID.rows.default, COVER_TABLE_GRID.rows.min, COVER_TABLE_GRID.rows.max),
			showHeader: parseBooleanParam(searchParams.get("showHeader"), true),
			frameWidthPercent: parseNumberParam(searchParams.get("frameWidthPercent"), 94, COVER_SCREENSHOT_FRAME_WIDTH.minPercent, COVER_SCREENSHOT_FRAME_WIDTH.maxPercent),
			...Object.fromEntries(getCoverTableHeaderKeys().map((key) => [key, searchParams.get(key)?.trim() || void 0])),
			...Object.fromEntries(Array.from({ length: COVER_TABLE_GRID.rows.max }, (_, row) => Array.from({ length: COVER_TABLE_GRID.columns.max }, (_$1, col) => {
				const key = getCoverTableCellKey(row, col);
				return [key, searchParams.get(key)?.trim() || void 0];
			})).flat())
		};
		case "bar-chart": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			frameWidthPercent: parseNumberParam(searchParams.get("frameWidthPercent"), 80, COVER_SCREENSHOT_FRAME_WIDTH.minPercent, COVER_SCREENSHOT_FRAME_WIDTH.maxPercent),
			pointCount: parseNumberParam(searchParams.get("pointCount"), COVER_CHART.pointCount.default, COVER_CHART.pointCount.min, COVER_CHART.pointCount.max),
			showGrid: parseBooleanParam(searchParams.get("showGrid"), true),
			showValues: parseBooleanParam(searchParams.get("showValues"), false),
			...Object.fromEntries(getCoverChartLabelKeys().map((key) => [key, searchParams.get(key)?.trim() || void 0])),
			...Object.fromEntries(getCoverChartValueKeys().map((key) => [key, parseNumberParam(searchParams.get(key), 0, 0, 1e6)]))
		};
		case "line-chart": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			frameWidthPercent: parseNumberParam(searchParams.get("frameWidthPercent"), 80, COVER_SCREENSHOT_FRAME_WIDTH.minPercent, COVER_SCREENSHOT_FRAME_WIDTH.maxPercent),
			pointCount: parseNumberParam(searchParams.get("pointCount"), COVER_CHART.pointCount.default, COVER_CHART.pointCount.min, COVER_CHART.pointCount.max),
			showGrid: parseBooleanParam(searchParams.get("showGrid"), true),
			showValues: parseBooleanParam(searchParams.get("showValues"), false),
			showArea: parseBooleanParam(searchParams.get("showArea"), true),
			...Object.fromEntries(getCoverChartLabelKeys().map((key) => [key, searchParams.get(key)?.trim() || void 0])),
			...Object.fromEntries(getCoverChartValueKeys().map((key) => [key, parseNumberParam(searchParams.get(key), 0, 0, 1e6)]))
		};
		case "cli-code": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			code: searchParams.get("code")?.trim() || DEFAULT_CLI_CODE,
			showPrompt: parseBooleanParam(searchParams.get("showPrompt"), true),
			terminalTitle: searchParams.get("terminalTitle")?.trim() || "Appwrite CLI",
			terminalIcon: searchParams.get("terminalIcon")?.trim() || "lucide:terminal",
			frameWidthPercent: parseNumberParam(searchParams.get("frameWidthPercent"), 58, COVER_SCREENSHOT_FRAME_WIDTH.minPercent, COVER_SCREENSHOT_FRAME_WIDTH.maxPercent)
		};
		case "code-snippet": return {
			...shared,
			template,
			title: parseCoverOptionalText(searchParams.get("title")) ?? "List databases",
			code: (() => {
				const raw = searchParams.get("code");
				return raw && raw.trim().length > 0 ? raw : DEFAULT_CODE_SNIPPET;
			})(),
			language: parseCoverCodeSnippetLanguage(searchParams.get("language")),
			codeFontSize: parseNumberParam(searchParams.get("codeFontSize"), COVER_CODE_SNIPPET_FONT_SIZE.default, COVER_CODE_SNIPPET_FONT_SIZE.min, COVER_CODE_SNIPPET_FONT_SIZE.max),
			frameWidthPercent: parseNumberParam(searchParams.get("frameWidthPercent"), 72, COVER_SCREENSHOT_FRAME_WIDTH.minPercent, COVER_SCREENSHOT_FRAME_WIDTH.maxPercent)
		};
		case "milestone-split": return {
			...shared,
			template,
			...parseCoverMilestoneFields(searchParams)
		};
		case "milestone-centered": return {
			...shared,
			template,
			...parseCoverMilestoneFields(searchParams)
		};
		case "version-number": return {
			...shared,
			template,
			...parseCoverVersionNumberFields(searchParams)
		};
		case "version-title": return {
			...shared,
			template,
			...parseCoverVersionTitleFields(searchParams)
		};
		case "simple-title":
		default: return {
			...shared,
			template: "simple-title",
			title: parseCoverTitle(searchParams.get("title"), DEFAULT_COVER_VALUES.title),
			subtitle: searchParams.get("subtitle")?.trim() || void 0,
			eyebrow: formatCoverEyebrow(searchParams.get("eyebrow") ?? void 0),
			cta: searchParams.get("cta")?.trim() || void 0
		};
	}
}
function coverRenderDataToSearchParams(data) {
	const params = new URLSearchParams();
	params.set("template", data.template);
	params.set("theme", data.theme);
	params.set("format", data.format);
	if (data.width !== 1200 || data.height !== 630) {
		params.set("width", String(data.width));
		params.set("height", String(data.height));
	}
	const setOptional = (key, value) => {
		if (value == null || value === "") return;
		params.set(key, String(value));
	};
	switch (data.template) {
		case "simple-title":
			params.set("title", stripCoverTitleSuffix(data.title));
			setOptional("subtitle", data.subtitle);
			setOptional("eyebrow", formatCoverEyebrow(data.eyebrow));
			setOptional("cta", data.cta);
			break;
		case "integration":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("logoLeft", data.logoLeft);
			setOptional("logoRight", data.logoRight);
			setOptional("connector", data.connector);
			break;
		case "integration-icon":
			setOptional("icon", data.icon);
			setOptional("iconSize", data.iconSize);
			break;
		case "showcase-icon":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("icon", data.icon);
			setOptional("iconSize", data.iconSize);
			break;
		case "title-icon":
			params.set("title", stripCoverTitleSuffix(data.title));
			setOptional("icon", data.icon);
			setOptional("iconSize", data.iconSize);
			break;
		case "screenshot":
			appendCoverScreenshotSearchParams(params, data);
			break;
		case "screenshot-side":
			appendCoverScreenshotSearchParams(params, data);
			break;
		case "screenshot-angled":
			appendCoverScreenshotSearchParams(params, data, { angled: true });
			appendCoverScreenshotAngled3DSearchParams(params, data);
			break;
		case "cards-angled":
			setOptional("columns", data.columns);
			setOptional("rows", data.rows);
			setOptional("iconSize", data.iconSize);
			setOptional("gap", data.gap);
			for (const key of getCoverCardsAngledIconKeys()) {
				setOptional(key, data[key]);
				const visibilityKey = getCoverCardsAngledIconVisibilityKey(key);
				const visibility = data[visibilityKey];
				if (visibility && visibility !== "visible") setOptional(visibilityKey, visibility);
			}
			appendCoverScreenshotAngled3DSearchParams(params, data);
			break;
		case "table":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("columns", data.columns);
			setOptional("rows", data.rows);
			if (!data.showHeader) setOptional("showHeader", data.showHeader);
			setOptional("frameWidthPercent", data.frameWidthPercent);
			for (const key of getCoverTableHeaderKeys()) setOptional(key, data[key]);
			for (let row = 0; row < COVER_TABLE_GRID.rows.max; row += 1) for (let col = 0; col < COVER_TABLE_GRID.columns.max; col += 1) {
				const key = getCoverTableCellKey(row, col);
				setOptional(key, data[key]);
			}
			break;
		case "bar-chart":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("frameWidthPercent", data.frameWidthPercent);
			setOptional("pointCount", data.pointCount);
			if (!data.showGrid) setOptional("showGrid", data.showGrid);
			if (data.showValues) setOptional("showValues", data.showValues);
			for (const key of getCoverChartLabelKeys()) setOptional(key, data[key]);
			for (const key of getCoverChartValueKeys()) setOptional(key, data[key]);
			break;
		case "line-chart":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("frameWidthPercent", data.frameWidthPercent);
			setOptional("pointCount", data.pointCount);
			if (!data.showGrid) setOptional("showGrid", data.showGrid);
			if (data.showValues) setOptional("showValues", data.showValues);
			if (!data.showArea) setOptional("showArea", data.showArea);
			for (const key of getCoverChartLabelKeys()) setOptional(key, data[key]);
			for (const key of getCoverChartValueKeys()) setOptional(key, data[key]);
			break;
		case "cli-code":
			setOptional("title", data.title ? stripCoverTitleSuffix(data.title) : void 0);
			setOptional("subtitle", data.subtitle);
			setOptional("code", data.code);
			if (!data.showPrompt) setOptional("showPrompt", data.showPrompt);
			setOptional("terminalTitle", data.terminalTitle);
			setOptional("terminalIcon", data.terminalIcon);
			setOptional("frameWidthPercent", data.frameWidthPercent);
			break;
		case "code-snippet":
			params.set("title", stripCoverTitleSuffix(data.title));
			setOptional("code", data.code);
			setOptional("language", data.language);
			setOptional("codeFontSize", data.codeFontSize);
			setOptional("frameWidthPercent", data.frameWidthPercent);
			break;
		case "milestone-split":
		case "milestone-centered":
			appendCoverMilestoneSearchParams(params, data);
			break;
		case "version-number":
			appendCoverVersionNumberSearchParams(params, data);
			break;
		case "version-title":
			appendCoverVersionTitleSearchParams(params, data);
			break;
	}
	return params;
}
function createDefaultCoverData(template = DEFAULT_COVER_VALUES.template, theme = DEFAULT_COVER_THEME_ID, options) {
	const resolvedTheme = resolveCoverThemeId(theme);
	const screenshotDefaults = template === "screenshot-angled" ? { frameWidthPercent: DEFAULT_COVER_VALUES.screenshotAngledFrameWidthPercent } : template === "screenshot-side" ? {
		frameWidthPercent: DEFAULT_COVER_VALUES.screenshotSideFrameWidthPercent,
		frameHeightPercent: DEFAULT_COVER_VALUES.screenshotSideFrameHeightPercent
	} : {
		frameWidthPercent: DEFAULT_COVER_VALUES.frameWidthPercent,
		frameHeightPercent: DEFAULT_COVER_VALUES.frameHeightPercent
	};
	const angled3dDefaults = template === "screenshot-angled" ? COVER_SCREENSHOT_ANGLED_3D_DEFAULTS : template === "cards-angled" ? COVER_CARDS_ANGLED_3D_DEFAULTS : null;
	const cardsAngledIconParams = template === "cards-angled" ? buildCoverCardsAngledDefaultIconParams() : {};
	const cardsAngledGridParams = template === "cards-angled" ? {
		columns: String(COVER_CARDS_ANGLED_GRID.columns.default),
		rows: String(COVER_CARDS_ANGLED_GRID.rows.default),
		iconSize: String(COVER_CARDS_ANGLED_GRID.iconSize.default),
		gap: String(COVER_CARDS_ANGLED_GRID.gap.default),
		...cardsAngledIconParams
	} : {};
	const tableFieldParams = template === "table" ? buildCoverTableDefaultFieldParams() : {};
	const chartFieldParams = template === "bar-chart" || template === "line-chart" ? buildCoverChartDefaultFieldParams() : {};
	const tableGridParams = template === "table" ? {
		columns: String(COVER_TABLE_GRID.columns.default),
		rows: String(COVER_TABLE_GRID.rows.default),
		showHeader: String(true),
		frameWidthPercent: String(94),
		title: DEFAULT_COVER_VALUES.title,
		subtitle: DEFAULT_COVER_VALUES.subtitle,
		...tableFieldParams
	} : {};
	const chartGridParams = template === "bar-chart" ? {
		pointCount: String(COVER_CHART.pointCount.default),
		showGrid: String(true),
		showValues: String(false),
		frameWidthPercent: String(80),
		title: "API requests over time",
		subtitle: "Monthly growth across all regions",
		...chartFieldParams
	} : template === "line-chart" ? {
		pointCount: String(COVER_CHART.pointCount.default),
		showGrid: String(true),
		showValues: String(false),
		showArea: String(true),
		frameWidthPercent: String(80),
		title: "Active users trend",
		subtitle: "Rolling 30-day average",
		...chartFieldParams
	} : {};
	const cliCodeParams = template === "cli-code" ? {
		title: DEFAULT_CLI_CODE_TITLE,
		subtitle: DEFAULT_CLI_CODE_SUBTITLE,
		code: DEFAULT_CLI_CODE,
		showPrompt: String(true),
		terminalTitle: DEFAULT_CLI_TERMINAL_TITLE,
		terminalIcon: DEFAULT_CLI_TERMINAL_ICON,
		frameWidthPercent: String(58)
	} : {};
	const codeSnippetParams = template === "code-snippet" ? {
		title: DEFAULT_CODE_SNIPPET_TITLE,
		code: DEFAULT_CODE_SNIPPET,
		language: DEFAULT_CODE_SNIPPET_LANGUAGE,
		codeFontSize: String(COVER_CODE_SNIPPET_FONT_SIZE.default),
		frameWidthPercent: String(72)
	} : {};
	const milestoneParams = template === "milestone-split" || template === "milestone-centered" ? {
		stat: COVER_MILESTONE_DEFAULTS.stat,
		statLabel: COVER_MILESTONE_DEFAULTS.statLabel,
		title: COVER_MILESTONE_DEFAULTS.title,
		subtitle: COVER_MILESTONE_DEFAULTS.subtitle,
		eyebrow: COVER_MILESTONE_DEFAULTS.eyebrow,
		gradientStat: String(COVER_MILESTONE_DEFAULTS.gradientStat)
	} : {};
	const versionParams = template === "version-number" ? {
		version: COVER_VERSION_DEFAULTS.version,
		eyebrow: COVER_VERSION_DEFAULTS.eyebrow
	} : template === "version-title" ? {
		version: COVER_VERSION_DEFAULTS.version,
		eyebrow: COVER_VERSION_DEFAULTS.eyebrow,
		title: COVER_VERSION_DEFAULTS.title
	} : {};
	const titleIconParams = template === "title-icon" ? {
		title: DEFAULT_COVER_VALUES.titleIconTitle,
		icon: DEFAULT_COVER_VALUES.titleIconIcon
	} : {};
	return parseCoverRenderData(new URLSearchParams({
		template,
		theme: resolvedTheme,
		format: options?.format ?? DEFAULT_COVER_VALUES.format,
		width: String(options?.width ?? DEFAULT_COVER_VALUES.width),
		height: String(options?.height ?? DEFAULT_COVER_VALUES.height),
		title: titleIconParams.title ?? DEFAULT_COVER_VALUES.title,
		subtitle: DEFAULT_COVER_VALUES.subtitle,
		eyebrow: DEFAULT_COVER_VALUES.eyebrow,
		connector: DEFAULT_COVER_VALUES.connector,
		iconSize: String(template === "integration-icon" ? DEFAULT_COVER_VALUES.integrationIconSize : template === "title-icon" ? DEFAULT_COVER_VALUES.titleIconSize : template === "cards-angled" ? COVER_CARDS_ANGLED_GRID.iconSize.default : DEFAULT_COVER_VALUES.iconSize),
		logoLeft: DEFAULT_COVER_VALUES.logoLeft,
		logoRight: DEFAULT_COVER_VALUES.logoRight,
		icon: titleIconParams.icon ?? DEFAULT_COVER_VALUES.icon,
		zoom: String(DEFAULT_COVER_VALUES.zoom),
		focusX: String(DEFAULT_COVER_VALUES.focusX),
		focusY: String(DEFAULT_COVER_VALUES.focusY),
		frameWidthPercent: String(screenshotDefaults.frameWidthPercent),
		...screenshotDefaults.frameHeightPercent != null ? { frameHeightPercent: String(screenshotDefaults.frameHeightPercent) } : {},
		...cardsAngledGridParams,
		...tableGridParams,
		...chartGridParams,
		...cliCodeParams,
		...codeSnippetParams,
		...milestoneParams,
		...versionParams,
		...angled3dDefaults ? {
			rotateX: String(angled3dDefaults.rotateX),
			rotateZ: String(angled3dDefaults.rotateZ),
			rotateY: String(angled3dDefaults.rotateY),
			translateX: String(angled3dDefaults.translateX),
			translateY: String(angled3dDefaults.translateY),
			displayScale: String(angled3dDefaults.displayScale),
			posXRatio: String(angled3dDefaults.posXRatio),
			posYRatio: String(angled3dDefaults.posYRatio)
		} : {}
	}));
}
function buildCoverApiUrl(data, origin = "") {
	const path = `/generator/cover?${coverRenderDataToSearchParams(data).toString()}`;
	return origin ? `${origin.replace(/\/+$/, "")}${path}` : path;
}
export { getCoverCardsAngledIconVisibilityKey as _, parseCoverRenderData as a, normalizeCoverCardsAngledData as b, COVER_MILESTONE_FIELD_DEFINITIONS as c, COVER_CARDS_ANGLED_HALO_EMPTY_OPACITY as d, COVER_CARDS_ANGLED_ICON_VISIBILITY_OPTIONS as f, getCoverCardsAngledIconSlots as g, getCoverCardsAngledIconKeys as h, createDefaultCoverData as i, COVER_CARDS_ANGLED_FADED_ICON_OPACITY as l, getCoverCardsAngledIconCardMetrics as m, buildCoverApiUrl as n, COVER_VERSION_NUMBER_FIELD_DEFINITIONS as o, buildCoverCardsAngledHaloGrid as p, coverRenderDataToSearchParams as r, COVER_VERSION_TITLE_FIELD_DEFINITIONS as s, DEFAULT_COVER_VALUES as t, COVER_CARDS_ANGLED_GRID as u, getCoverCardsAngledLayoutResetFields as v, isCoverDomPreviewTemplate as y };
