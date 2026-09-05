import { a as COVER_WIDTH, t as COVER_HEIGHT } from "./constants-CL7SLzjY.js";
const COVER_ARTBOARD_DISPLAY_WIDTH = 720;
const COVER_LAYOUT_REFERENCE = {
	width: COVER_WIDTH,
	height: 630
};
function getCoverContentLayoutTransform(canvasWidth, canvasHeight, anchor = "center") {
	const scale = Math.min(canvasWidth / COVER_LAYOUT_REFERENCE.width, canvasHeight / COVER_LAYOUT_REFERENCE.height);
	const scaledWidth = COVER_LAYOUT_REFERENCE.width * scale;
	const scaledHeight = COVER_LAYOUT_REFERENCE.height * scale;
	return {
		scale,
		translateX: anchor === "right" ? canvasWidth - scaledWidth : (canvasWidth - scaledWidth) / 2,
		translateY: anchor === "bottom" ? canvasHeight - scaledHeight : (canvasHeight - scaledHeight) / 2
	};
}
function transformCoverArtboardRect(rect, transform) {
	const { scale, translateX, translateY } = transform;
	return {
		x: Math.round(rect.x * scale + translateX),
		y: Math.round(rect.y * scale + translateY),
		width: Math.max(1, Math.round(rect.width * scale)),
		height: Math.max(1, Math.round(rect.height * scale))
	};
}
function coverExportYToArtboardY(exportY, transform) {
	return (exportY - transform.translateY) / transform.scale;
}
function getCoverDisplayScale(exportWidth) {
	return 720 / exportWidth;
}
function getCoverDisplayHeight(exportWidth, exportHeight) {
	return Math.round(exportHeight * getCoverDisplayScale(exportWidth));
}
const COVER_SCREENSHOT_FRAME_WIDTH = {
	minPercent: 30,
	maxPercent: 100,
	flatDefaultPercent: 82,
	sideDefaultPercent: 58,
	angledDefaultPercent: 92,
	step: 1
};
const COVER_SCREENSHOT_FRAME_MIN_HEIGHT_PX = 200;
const COVER_SCREENSHOT_FRAME_HEIGHT = {
	minPercent: 0,
	maxPercent: 100,
	defaultPercent: 100,
	sideDefaultPercent: 90,
	step: 1
};
function getCoverFrameWidthPx(frameWidthPercent, canvas) {
	const { scale } = getCoverContentLayoutTransform(canvas.width, canvas.height);
	const targetExportPx = canvas.width * frameWidthPercent / 100;
	return Math.max(1, Math.round(targetExportPx / scale));
}
function clampCoverFrameWidthPercent(percent, limits = COVER_SCREENSHOT_FRAME_WIDTH) {
	return Math.min(limits.maxPercent, Math.max(limits.minPercent, Math.round(percent)));
}
function resolveCoverScreenshotFrameHeightExportPx(frameHeightPercent, maxFrameHeightExport, minFrameHeightExport) {
	const max = Math.max(minFrameHeightExport, maxFrameHeightExport);
	const min = Math.min(minFrameHeightExport, max);
	const percent = clampCoverFrameHeightPercent(frameHeightPercent);
	return Math.round(min + (max - min) * (percent / 100));
}
function clampCoverFrameHeightPercent(percent, limits = COVER_SCREENSHOT_FRAME_HEIGHT) {
	return Math.min(limits.maxPercent, Math.max(limits.minPercent, Math.round(percent)));
}
function stripCoverTitleSuffix(value) {
	return value.trimEnd().replace(/_+$/u, "");
}
function formatCoverEyebrow(value) {
	const raw = value?.trim();
	if (!raw) return void 0;
	return stripCoverTitleSuffix(raw).toUpperCase() || void 0;
}
function escapeXml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function splitWordToFit(word, maxCharsPerLine) {
	if (word.length <= maxCharsPerLine) return [word];
	const parts = [];
	for (let index = 0; index < word.length; index += maxCharsPerLine) parts.push(word.slice(index, index + maxCharsPerLine));
	return parts;
}
function wrapTextLines(text, maxCharsPerLine, maxLines) {
	if (maxLines <= 0) return [];
	const words = text.trim().split(/\s+/).filter(Boolean).flatMap((word) => splitWordToFit(word, maxCharsPerLine));
	if (!words.length) return [];
	const lines = [];
	let current = words[0] ?? "";
	for (const word of words.slice(1)) {
		const next = `${current} ${word}`;
		if (next.length <= maxCharsPerLine) {
			current = next;
			continue;
		}
		lines.push(current);
		current = word;
		if (lines.length >= maxLines - 1) break;
	}
	if (lines.length < maxLines) lines.push(current);
	const joinedLines = lines.slice(0, maxLines).join(" ");
	if (words.join(" ").length > joinedLines.length) {
		const last = lines[maxLines - 1] ?? "";
		lines[maxLines - 1] = last.length > maxCharsPerLine - 3 ? `${last.slice(0, Math.max(0, maxCharsPerLine - 3)).trimEnd()}...` : `${last.trimEnd()}...`;
	}
	return lines.slice(0, maxLines);
}
function clampNumber(value, min, max) {
	return Math.min(max, Math.max(min, value));
}
function parseBooleanParam(value, fallback) {
	if (value == null || value === "") return fallback;
	const normalized = value.trim().toLowerCase();
	if (normalized === "1" || normalized === "true" || normalized === "yes") return true;
	if (normalized === "0" || normalized === "false" || normalized === "no") return false;
	return fallback;
}
function parseNumberParam(value, fallback, min, max) {
	if (value == null || value === "") return fallback;
	const parsed = Number(value);
	if (!Number.isFinite(parsed)) return fallback;
	if (min != null && max != null) return clampNumber(parsed, min, max);
	return parsed;
}
const PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM = {
	perspective: 1400,
	rotateX: 58,
	rotateZ: -36,
	rotateY: 0,
	translateX: 0,
	translateY: -40
};
const COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM = {
	rotateX: 51,
	rotateZ: -19,
	rotateY: -2,
	translateX: 225,
	translateY: -25
};
const PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO = 16 / 9;
const COVER_SCREENSHOT_ANGLED_DEFAULTS = {
	frameWidthPercent: 92,
	displayScale: 1.65
};
const PERSPECTIVE_SCREENSHOT_CARD_SURFACE = {
	borderRadius: 24,
	background: "#17171c",
	border: "1px solid rgba(255, 255, 255, 0.08)",
	boxShadow: "0 40px 100px rgba(0, 0, 0, 0.55)"
};
function buildPerspectiveScreenshotCardTransform(options) {
	const rotateX = options?.rotateX ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateX;
	const rotateY = options?.rotateY ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateY;
	const rotateZ = options?.rotateZ ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateZ;
	const translateX = options?.translateX ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateX;
	const translateY = options?.translateY ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateY;
	return `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)${rotateY !== 0 ? ` rotateY(${rotateY}deg)` : ""}${translateX !== 0 ? ` translateX(${translateX}px)` : ""}${translateY !== 0 ? ` translateY(${translateY}px)` : ""}`;
}
function buildPerspectiveScreenshotCardOgTransform(options) {
	const rotateX = options?.rotateX ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateX;
	const rotateY = options?.rotateY ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateY;
	const rotateZ = options?.rotateZ ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.rotateZ;
	const translateX = options?.translateX ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateX;
	const translateY = options?.translateY ?? PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM.translateY;
	const rx = rotateX * Math.PI / 180;
	const scaleY = Math.cos(rx);
	const skewX = -rotateX * .38 + rotateY * .5;
	const parts = [];
	if (translateX !== 0 || translateY !== 0) parts.push(`translate(${translateX}px, ${translateY}px)`);
	if (rotateZ !== 0) parts.push(`rotate(${rotateZ}deg)`);
	if (Math.abs(skewX) > .01) parts.push(`skewX(${skewX.toFixed(2)}deg)`);
	if (Math.abs(scaleY - 1) > .001) parts.push(`scaleY(${scaleY.toFixed(4)})`);
	return parts.join(" ");
}
const COVER_SCREENSHOT_ANGLED_LAYOUT = {
	offsetXRatio: -.13,
	offsetYRatio: -.06
};
const COVER_SCREENSHOT_ANGLED_3D_DEFAULTS = {
	rotateX: COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM.rotateX,
	rotateZ: COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM.rotateZ,
	rotateY: COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM.rotateY,
	translateX: COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM.translateX,
	translateY: COVER_SCREENSHOT_ANGLED_CARD_TRANSFORM.translateY,
	displayScale: COVER_SCREENSHOT_ANGLED_DEFAULTS.displayScale,
	posXRatio: COVER_SCREENSHOT_ANGLED_LAYOUT.offsetXRatio,
	posYRatio: COVER_SCREENSHOT_ANGLED_LAYOUT.offsetYRatio
};
const COVER_SCREENSHOT_ANGLED_3D_LIMITS = {
	rotateX: {
		min: 15,
		max: 85,
		step: 1
	},
	rotateZ: {
		min: -70,
		max: 10,
		step: 1
	},
	rotateY: {
		min: -45,
		max: 45,
		step: 1
	},
	translateX: {
		min: -300,
		max: 600,
		step: 5
	},
	translateY: {
		min: -200,
		max: 400,
		step: 5
	},
	displayScale: {
		min: .5,
		max: 4,
		step: .05
	},
	posXRatio: {
		min: -.6,
		max: .6,
		step: .01
	},
	posYRatio: {
		min: -.35,
		max: .75,
		step: .01
	}
};
function getCoverScreenshotAngledCardTransform(fields) {
	return {
		rotateX: fields.rotateX,
		rotateY: fields.rotateY,
		rotateZ: fields.rotateZ,
		translateX: fields.translateX,
		translateY: fields.translateY
	};
}
function getCoverScreenshotAngledCanvasScale(canvasWidth) {
	return canvasWidth / COVER_WIDTH;
}
function scaleCoverScreenshotAngledCardTransform(transform, canvasScale) {
	if (canvasScale === 1) return transform;
	return {
		...transform,
		translateX: transform.translateX * canvasScale,
		translateY: transform.translateY * canvasScale
	};
}
function scaleCoverScreenshotAngledPerspective(perspective, canvasScale) {
	return perspective * canvasScale;
}
function computeCoverScreenshotAngledLayoutOffset(containerWidth, containerHeight, position) {
	const posXRatio = position?.posXRatio ?? COVER_SCREENSHOT_ANGLED_LAYOUT.offsetXRatio;
	const posYRatio = position?.posYRatio ?? COVER_SCREENSHOT_ANGLED_LAYOUT.offsetYRatio;
	return {
		x: Math.round(containerWidth * posXRatio),
		y: Math.round(containerHeight * posYRatio)
	};
}
function computeCoverScreenshotAngledOgFrameBox(options) {
	const displayScale = options.displayScale ?? COVER_SCREENSHOT_ANGLED_DEFAULTS.displayScale;
	const offset = computeCoverScreenshotAngledLayoutOffset(options.containerWidth, options.containerHeight, {
		posXRatio: options.posXRatio,
		posYRatio: options.posYRatio
	});
	const originX = options.frameWidth * .2;
	const originY = options.frameHeight * .2;
	const anchorLeft = options.containerWidth - options.frameWidth;
	const anchorTop = options.containerHeight - options.frameHeight;
	return {
		left: Math.round(anchorLeft - originX * (displayScale - 1) + offset.x),
		top: Math.round(anchorTop - originY * (displayScale - 1) + offset.y),
		width: options.frameWidth,
		height: options.frameHeight,
		scale: displayScale,
		transformOrigin: "20% 20%"
	};
}
const COVER_TABLE_GRID = {
	columns: {
		min: 2,
		max: 5,
		default: 4
	},
	rows: {
		min: 1,
		max: 6,
		default: 4
	}
};
const COVER_TABLE_MAX_COLUMNS = COVER_TABLE_GRID.columns.max;
const COVER_TABLE_MAX_ROWS = COVER_TABLE_GRID.rows.max;
const COVER_TABLE_DEFAULT_FRAME_WIDTH_PERCENT = 94;
const COVER_TABLE_DEFAULT_HEADERS = [
	"Feature",
	"Free",
	"Pro",
	"Scale",
	"Enterprise"
];
const COVER_TABLE_DEFAULT_ROWS = [
	[
		"Storage",
		"2 GB",
		"150 GB",
		"Unlimited",
		"Unlimited"
	],
	[
		"Users",
		"75K MAU",
		"200K MAU",
		"1M MAU",
		"Custom"
	],
	[
		"Functions",
		"750K / mo",
		"3.5M / mo",
		"10M / mo",
		"Custom"
	],
	[
		"Support",
		"Community",
		"Priority",
		"Dedicated",
		"Dedicated"
	],
	[
		"",
		"",
		"",
		"",
		""
	],
	[
		"",
		"",
		"",
		"",
		""
	]
];
function getCoverTableHeaderKey(col) {
	return `header${col}`;
}
function getCoverTableCellKey(row, col) {
	return `cell_r${row}c${col}`;
}
function getCoverTableHeaderKeys(count = COVER_TABLE_MAX_COLUMNS) {
	return Array.from({ length: count }, (_, col) => getCoverTableHeaderKey(col));
}
function getCoverTableCellKeys(rows = COVER_TABLE_MAX_ROWS, columns = COVER_TABLE_MAX_COLUMNS) {
	const keys = [];
	for (let row = 0; row < rows; row += 1) for (let col = 0; col < columns; col += 1) keys.push(getCoverTableCellKey(row, col));
	return keys;
}
function buildCoverTableDefaultFieldParams() {
	const params = {};
	for (let col = 0; col < COVER_TABLE_MAX_COLUMNS; col += 1) params[getCoverTableHeaderKey(col)] = COVER_TABLE_DEFAULT_HEADERS[col] ?? "";
	for (let row = 0; row < COVER_TABLE_MAX_ROWS; row += 1) for (let col = 0; col < COVER_TABLE_MAX_COLUMNS; col += 1) params[getCoverTableCellKey(row, col)] = COVER_TABLE_DEFAULT_ROWS[row]?.[col] ?? "";
	return params;
}
function normalizeCoverTableData(data) {
	const tableData = data.template === "table" ? data : null;
	const tableValues = data.template === "table" ? data : null;
	const columns = tableData && Number.isFinite(tableData.columns) ? Math.min(COVER_TABLE_GRID.columns.max, Math.max(COVER_TABLE_GRID.columns.min, tableData.columns)) : COVER_TABLE_GRID.columns.default;
	const rows = tableData && Number.isFinite(tableData.rows) ? Math.min(COVER_TABLE_GRID.rows.max, Math.max(COVER_TABLE_GRID.rows.min, tableData.rows)) : COVER_TABLE_GRID.rows.default;
	const defaults = buildCoverTableDefaultFieldParams();
	const headerFields = Object.fromEntries(getCoverTableHeaderKeys(columns).map((key, col) => [key, tableValues?.[key]?.trim() || defaults[key] || COVER_TABLE_DEFAULT_HEADERS[col] || ""]));
	const cellFields = Object.fromEntries(Array.from({ length: rows }, (_, row) => Array.from({ length: columns }, (_$1, col) => {
		const key = getCoverTableCellKey(row, col);
		return [key, tableValues?.[key]?.trim() || defaults[key] || ""];
	})).flat());
	return {
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		template: "table",
		title: tableData?.title?.trim() || void 0,
		subtitle: tableData?.subtitle?.trim() || void 0,
		columns,
		rows,
		showHeader: tableData?.showHeader == null ? true : Boolean(tableData.showHeader),
		frameWidthPercent: tableData && Number.isFinite(tableData.frameWidthPercent) ? tableData.frameWidthPercent : 94,
		...headerFields,
		...cellFields
	};
}
function getCoverTableMatrix(data) {
	const normalized = normalizeCoverTableData(data);
	return {
		headers: Array.from({ length: normalized.columns }, (_, col) => {
			return normalized[getCoverTableHeaderKey(col)] ?? "";
		}),
		rows: Array.from({ length: normalized.rows }, (_, row) => Array.from({ length: normalized.columns }, (_$1, col) => {
			return normalized[getCoverTableCellKey(row, col)] ?? "";
		}))
	};
}
const COVER_CHART = { pointCount: {
	min: 2,
	max: 12,
	default: 6
} };
const COVER_CHART_MAX_POINTS = COVER_CHART.pointCount.max;
const COVER_CHART_DEFAULT_FRAME_WIDTH_PERCENT = 80;
const COVER_CHART_DEFAULT_LABELS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const COVER_CHART_DEFAULT_VALUES = [
	42,
	58,
	71,
	88,
	96,
	112,
	98,
	120,
	105,
	130,
	118,
	145
];
function getCoverChartLabelKey(index) {
	return `label${index}`;
}
function getCoverChartValueKey(index) {
	return `value${index}`;
}
function getCoverChartLabelKeys(count = COVER_CHART_MAX_POINTS) {
	return Array.from({ length: count }, (_, index) => getCoverChartLabelKey(index));
}
function getCoverChartValueKeys(count = COVER_CHART_MAX_POINTS) {
	return Array.from({ length: count }, (_, index) => getCoverChartValueKey(index));
}
function buildCoverChartDefaultFieldParams() {
	const params = {};
	for (let index = 0; index < COVER_CHART_MAX_POINTS; index += 1) {
		params[getCoverChartLabelKey(index)] = COVER_CHART_DEFAULT_LABELS[index] ?? "";
		params[getCoverChartValueKey(index)] = String(COVER_CHART_DEFAULT_VALUES[index] ?? 0);
	}
	return params;
}
function clampPointCount(value) {
	if (!Number.isFinite(value)) return COVER_CHART.pointCount.default;
	return Math.min(COVER_CHART.pointCount.max, Math.max(COVER_CHART.pointCount.min, Math.round(value)));
}
function buildChartPointFields(template, data, pointCount) {
	const values = data.template === template ? data : null;
	const defaults = buildCoverChartDefaultFieldParams();
	const fields = {};
	for (let index = 0; index < pointCount; index += 1) {
		const labelKey = getCoverChartLabelKey(index);
		const valueKey = getCoverChartValueKey(index);
		const rawValue = values?.[valueKey];
		const parsedValue = typeof rawValue === "number" ? rawValue : Number.parseFloat(String(rawValue ?? defaults[valueKey] ?? 0));
		fields[labelKey] = (typeof values?.[labelKey] === "string" ? values[labelKey]?.trim() : "") || defaults[labelKey] || COVER_CHART_DEFAULT_LABELS[index] || "";
		fields[valueKey] = Number.isFinite(parsedValue) ? Math.max(0, parsedValue) : COVER_CHART_DEFAULT_VALUES[index] ?? 0;
	}
	return fields;
}
function normalizeCoverBarChartData(data) {
	const chartData = data.template === "bar-chart" ? data : null;
	const pointCount = clampPointCount(chartData?.pointCount);
	return {
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		template: "bar-chart",
		title: chartData?.title?.trim() || void 0,
		subtitle: chartData?.subtitle?.trim() || void 0,
		frameWidthPercent: chartData && Number.isFinite(chartData.frameWidthPercent) ? chartData.frameWidthPercent : 80,
		pointCount,
		showGrid: chartData?.showGrid == null ? true : Boolean(chartData.showGrid),
		showValues: chartData?.showValues == null ? false : Boolean(chartData.showValues),
		...buildChartPointFields("bar-chart", data, pointCount)
	};
}
function normalizeCoverLineChartData(data) {
	const chartData = data.template === "line-chart" ? data : null;
	const pointCount = clampPointCount(chartData?.pointCount);
	return {
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		template: "line-chart",
		title: chartData?.title?.trim() || void 0,
		subtitle: chartData?.subtitle?.trim() || void 0,
		frameWidthPercent: chartData && Number.isFinite(chartData.frameWidthPercent) ? chartData.frameWidthPercent : 80,
		pointCount,
		showGrid: chartData?.showGrid == null ? true : Boolean(chartData.showGrid),
		showValues: chartData?.showValues == null ? false : Boolean(chartData.showValues),
		showArea: chartData?.showArea == null ? true : Boolean(chartData.showArea),
		...buildChartPointFields("line-chart", data, pointCount)
	};
}
function getCoverChartPoints(data) {
	const normalized = data.template === "bar-chart" ? normalizeCoverBarChartData(data) : normalizeCoverLineChartData(data);
	return Array.from({ length: normalized.pointCount }, (_, index) => ({
		label: normalized[getCoverChartLabelKey(index)] ?? "",
		value: Number(normalized[getCoverChartValueKey(index)] ?? 0)
	}));
}
const COVER_CLI_CODE_DEFAULT_FRAME_WIDTH_PERCENT = 58;
const COVER_CLI_CODE = {
	maxLines: 8,
	codeFontSize: 16,
	codePaddingX: 20,
	codePaddingY: 12,
	promptWidth: 20,
	maxCharsPerLine: 44,
	terminalHeaderHeight: 34,
	terminalTitleFontSize: 13,
	terminalIconSize: 16,
	terminalIconGap: 8,
	terminalDotSize: 10,
	terminalDotGap: 6,
	terminalDotMarginLeft: 14
};
const DEFAULT_CLI_CODE = `appwrite login
appwrite init project
appwrite deploy function`;
const DEFAULT_CLI_CODE_TITLE = "Deploy from the CLI";
const DEFAULT_CLI_CODE_SUBTITLE = "Ship functions and sites from your terminal";
const DEFAULT_CLI_TERMINAL_TITLE = "Appwrite CLI";
const DEFAULT_CLI_TERMINAL_ICON = "lucide:terminal";
function parseCoverCliCodeLines(code) {
	return (code ?? "").split(/\r?\n/).map((line) => line.trimEnd()).filter((line, index, lines) => {
		if (line.length > 0) return true;
		return lines.slice(index + 1).some((next) => next.length > 0);
	}).slice(0, COVER_CLI_CODE.maxLines).map((line) => {
		const trimmed = line.trim();
		if (trimmed.length <= COVER_CLI_CODE.maxCharsPerLine) return trimmed;
		return `${trimmed.slice(0, COVER_CLI_CODE.maxCharsPerLine - 1)}…`;
	});
}
function normalizeCoverCliCodeData(data) {
	const cliData = data.template === "cli-code" ? data : null;
	return {
		template: "cli-code",
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		title: cliData?.title?.trim() || void 0,
		subtitle: cliData?.subtitle?.trim() || void 0,
		code: parseCoverCliCodeLines(cliData?.code).join("\n") || DEFAULT_CLI_CODE,
		showPrompt: cliData?.showPrompt == null ? true : Boolean(cliData.showPrompt),
		terminalTitle: cliData?.terminalTitle?.trim() || "Appwrite CLI",
		terminalIcon: cliData?.terminalIcon?.trim() || "lucide:terminal",
		frameWidthPercent: clampCoverFrameWidthPercent(cliData && Number.isFinite(cliData.frameWidthPercent) ? cliData.frameWidthPercent : 58, COVER_SCREENSHOT_FRAME_WIDTH)
	};
}
function escapeCoverCodeTokenContent(content) {
	return content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&#160;");
}
function getCoverCodeLineIndentPx(line, fontSize, options) {
	const leading = line.match(/^(\s*)/)?.[1] ?? "";
	if (!leading) return 0;
	const tabWidthSpaces = options?.tabWidthSpaces ?? 2;
	const charWidthRatio = options?.charWidthRatio ?? .6;
	return leading.replace(/\t/g, " ".repeat(tabWidthSpaces)).length * fontSize * charWidthRatio;
}
function stripLeadingWhitespaceCoverTokens(tokens, defaultColor) {
	const result = [...tokens];
	while (result.length > 0 && /^\s*$/.test(result[0].content)) result.shift();
	return result.length > 0 ? result : [{
		content: " ",
		color: defaultColor
	}];
}
function normalizeCoverCodeTspanTokens(tokens) {
	const result = [];
	for (const token of tokens) {
		if (!token.content) continue;
		const leading = token.content.match(/^\s*/)?.[0] ?? "";
		const rest = token.content.slice(leading.length);
		if (leading && result.length > 0) result[result.length - 1].content += leading;
		else if (leading && !rest) {
			result.push({
				content: leading,
				color: token.color
			});
			continue;
		} else if (leading && rest) {
			result.push({
				content: leading + rest,
				color: token.color
			});
			continue;
		}
		if (rest) result.push({
			content: rest,
			color: token.color
		});
	}
	return result;
}
function alignCoverCodeTokensToContent(content, tokens, defaultColor) {
	if (!content) return [{
		content: " ",
		color: defaultColor
	}];
	if (tokens.map((token) => token.content).join("") === content) return normalizeCoverCodeTspanTokens(tokens);
	const aligned = [];
	let contentIndex = 0;
	let tokenIndex = 0;
	let tokenOffset = 0;
	while (contentIndex < content.length) {
		if (tokenIndex < tokens.length) {
			const token = tokens[tokenIndex];
			const remaining = token.content.slice(tokenOffset);
			if (remaining.length > 0 && remaining[0] !== content[contentIndex]) {
				if (/^\s/.test(remaining[0]) && !/\s/.test(content[contentIndex])) {
					tokenOffset += 1;
					continue;
				}
				if (tokenOffset > 0 || remaining[0] !== content[contentIndex]) {
					tokenIndex += 1;
					tokenOffset = 0;
					continue;
				}
			}
			if (remaining.length > 0 && remaining[0] === content[contentIndex]) {
				let runLength = 0;
				while (runLength < remaining.length && contentIndex + runLength < content.length && remaining[runLength] === content[contentIndex + runLength]) runLength += 1;
				if (runLength > 0) {
					const chunk = remaining.slice(0, runLength);
					const previous$1 = aligned[aligned.length - 1];
					if (previous$1 && previous$1.color === token.color) previous$1.content += chunk;
					else aligned.push({
						content: chunk,
						color: token.color
					});
					contentIndex += runLength;
					tokenOffset += runLength;
					if (tokenOffset >= token.content.length) {
						tokenIndex += 1;
						tokenOffset = 0;
					}
					continue;
				}
			}
		}
		const character = content[contentIndex];
		const previous = aligned[aligned.length - 1];
		if (previous && previous.color === defaultColor) previous.content += character;
		else aligned.push({
			content: character,
			color: defaultColor
		});
		contentIndex += 1;
	}
	return normalizeCoverCodeTspanTokens(aligned);
}
function buildCoverCodeTokenTexts(tokens, startX, fontSize, y, _charWidthRatio = .6) {
	if (tokens.length === 0) return "";
	const tspans = normalizeCoverCodeTspanTokens(tokens).map((token) => {
		const escaped = escapeCoverCodeTokenContent(token.content);
		return `<tspan fill="${token.color}">${escaped}</tspan>`;
	}).join("");
	return `<text class="cover-code" xml:space="preserve" font-size="${fontSize}" x="${Math.round(startX)}" y="${y}">${tspans}</text>`;
}
const COVER_CODE_SNIPPET_DEFAULT_FRAME_WIDTH_PERCENT = 72;
const COVER_CODE_SNIPPET_FONT_SIZE = {
	min: 11,
	max: 22,
	default: 15,
	step: 1
};
const COVER_CODE_SNIPPET_LANGUAGES = [
	"javascript",
	"typescript",
	"python",
	"php",
	"ruby",
	"go",
	"java",
	"kotlin",
	"swift",
	"dart",
	"csharp",
	"rust",
	"bash",
	"json",
	"yaml",
	"graphql",
	"css",
	"markup",
	"plaintext"
];
const COVER_CODE_SNIPPET_LANGUAGE_LABELS = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	python: "Python",
	php: "PHP",
	ruby: "Ruby",
	go: "Go",
	java: "Java",
	kotlin: "Kotlin",
	swift: "Swift",
	dart: "Dart",
	csharp: "C#",
	rust: "Rust",
	bash: "Bash",
	json: "JSON",
	yaml: "YAML",
	graphql: "GraphQL",
	css: "CSS",
	markup: "Markup",
	plaintext: "Plain text"
};
const COVER_CODE_SNIPPET = {
	maxLines: 12,
	compositionVerticalMargin: 24,
	codeFontSize: COVER_CODE_SNIPPET_FONT_SIZE.default,
	codeLineHeightRatio: 1.5,
	shellInsetX: 20,
	activityBarWidth: 52,
	activityBarIconSize: 18,
	activityBarIconGap: 16,
	activityBarPaddingTop: 18,
	minCodeContentHeight: 184,
	codePaddingX: 16,
	codePaddingY: 16,
	shellPaddingBottom: 20,
	monoCharWidthRatio: .6,
	tabWidthSpaces: 2,
	maxTitleChars: 52,
	titleFontSize: 42,
	titleLineHeight: 50,
	titleCardGap: 28,
	headerHeight: 32,
	headerFontSize: 12,
	outerRadius: 24,
	innerRadius: 14
};
const DEFAULT_CODE_SNIPPET_TITLE = "List databases";
const DEFAULT_CODE_SNIPPET_LANGUAGE = "typescript";
const DEFAULT_CODE_SNIPPET = `import { Client, Databases } from 'appwrite'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>')

const databases = new Databases(client)
await databases.list()`;
function isCoverCodeSnippetLanguage(value) {
	return COVER_CODE_SNIPPET_LANGUAGES.includes(value);
}
function parseCoverCodeSnippetLanguage(value) {
	const normalized = value?.trim().toLowerCase();
	if (normalized && isCoverCodeSnippetLanguage(normalized)) return normalized;
	return DEFAULT_CODE_SNIPPET_LANGUAGE;
}
function mapCoverCodeSnippetLanguageToCodeEditorLanguage(language) {
	return {
		javascript: "javascript",
		typescript: "typescript",
		python: "python",
		php: "php",
		ruby: "ruby",
		go: "go",
		java: "java",
		kotlin: "kotlin",
		swift: "swift",
		dart: "dart",
		csharp: "csharp",
		rust: "rust",
		bash: "shell",
		json: "json",
		yaml: "yaml",
		graphql: "graphql",
		css: "css",
		markup: "html",
		plaintext: "plaintext"
	}[parseCoverCodeSnippetLanguage(typeof language === "string" ? language : language ?? void 0)];
}
function clampCoverCodeSnippetFontSize(value) {
	const snapped = Math.round(value);
	return Math.min(COVER_CODE_SNIPPET_FONT_SIZE.max, Math.max(COVER_CODE_SNIPPET_FONT_SIZE.min, snapped));
}
function getCoverCodeSnippetLineHeight(codeFontSize) {
	return codeFontSize * COVER_CODE_SNIPPET.codeLineHeightRatio;
}
function getCoverCodeSnippetMaxCharsForLine(line, codeColumnWidthPx, codeFontSize) {
	const charWidth = codeFontSize * COVER_CODE_SNIPPET.monoCharWidthRatio;
	if (charWidth <= 0) return 1;
	const textAreaWidth = codeColumnWidthPx - COVER_CODE_SNIPPET.codePaddingX * 2;
	const indentPx = getCoverCodeLineIndentPx(line, codeFontSize, {
		tabWidthSpaces: COVER_CODE_SNIPPET.tabWidthSpaces,
		charWidthRatio: COVER_CODE_SNIPPET.monoCharWidthRatio
	});
	return Math.max(1, Math.floor((textAreaWidth - indentPx) / charWidth));
}
function getCoverCodeSnippetMaxLines(canvasHeight, hasTitle = true, codeFontSize = COVER_CODE_SNIPPET_FONT_SIZE.default) {
	const titleHeight = hasTitle ? COVER_CODE_SNIPPET.titleLineHeight : 0;
	const titleCardGap = hasTitle ? COVER_CODE_SNIPPET.titleCardGap : 0;
	const fixedCardHeight = COVER_CODE_SNIPPET.headerHeight + COVER_CODE_SNIPPET.shellPaddingBottom + COVER_CODE_SNIPPET.codePaddingY * 2;
	const available = canvasHeight - titleHeight - titleCardGap - fixedCardHeight - COVER_CODE_SNIPPET.compositionVerticalMargin;
	const codeLineHeight = getCoverCodeSnippetLineHeight(codeFontSize);
	return Math.max(1, Math.floor(available / codeLineHeight));
}
function parseCoverCodeSnippetLines(code, maxLines = COVER_CODE_SNIPPET.maxLines, maxCharsPerLine = 120) {
	return (code ?? "").split(/\r?\n/).map((line) => line.trimEnd()).filter((line, index, lines) => {
		if (line.length > 0) return true;
		return lines.slice(index + 1).some((next) => next.length > 0);
	}).slice(0, maxLines).map((line) => {
		const limit = typeof maxCharsPerLine === "function" ? maxCharsPerLine(line) : maxCharsPerLine;
		if (line.length <= limit) return line;
		return `${line.slice(0, limit - 1)}…`;
	});
}
function normalizeCoverCodeSnippetData(data) {
	const snippetData = data.template === "code-snippet" ? data : null;
	return {
		template: "code-snippet",
		theme: data.theme,
		format: data.format,
		width: data.width,
		height: data.height,
		title: snippetData?.title?.trim() || "List databases",
		code: snippetData?.code?.trim() ? snippetData.code : DEFAULT_CODE_SNIPPET,
		language: parseCoverCodeSnippetLanguage(snippetData?.language),
		codeFontSize: clampCoverCodeSnippetFontSize(snippetData && Number.isFinite(snippetData.codeFontSize) ? snippetData.codeFontSize : COVER_CODE_SNIPPET_FONT_SIZE.default),
		frameWidthPercent: clampCoverFrameWidthPercent(snippetData && Number.isFinite(snippetData.frameWidthPercent) ? snippetData.frameWidthPercent : 72, COVER_SCREENSHOT_FRAME_WIDTH)
	};
}
export { PERSPECTIVE_SCREENSHOT_CARD_SURFACE as $, COVER_CHART_DEFAULT_FRAME_WIDTH_PERCENT as A, COVER_TABLE_GRID as B, DEFAULT_CLI_CODE_SUBTITLE as C, coverExportYToArtboardY as Ct, normalizeCoverCliCodeData as D, DEFAULT_CLI_TERMINAL_TITLE as E, transformCoverArtboardRect as Et, getCoverChartValueKey as F, getCoverTableHeaderKeys as G, getCoverTableCellKey as H, getCoverChartValueKeys as I, COVER_SCREENSHOT_ANGLED_3D_DEFAULTS as J, getCoverTableMatrix as K, normalizeCoverBarChartData as L, getCoverChartLabelKey as M, getCoverChartLabelKeys as N, parseCoverCliCodeLines as O, getCoverChartPoints as P, PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO as Q, normalizeCoverLineChartData as R, DEFAULT_CLI_CODE as S, COVER_ARTBOARD_DISPLAY_WIDTH as St, DEFAULT_CLI_TERMINAL_ICON as T, getCoverDisplayHeight as Tt, getCoverTableCellKeys as U, buildCoverTableDefaultFieldParams as V, getCoverTableHeaderKey as W, COVER_SCREENSHOT_ANGLED_DEFAULTS as X, COVER_SCREENSHOT_ANGLED_3D_LIMITS as Y, COVER_SCREENSHOT_ANGLED_LAYOUT as Z, buildCoverCodeTokenTexts as _, COVER_SCREENSHOT_FRAME_MIN_HEIGHT_PX as _t, COVER_CODE_SNIPPET_LANGUAGE_LABELS as a, getCoverScreenshotAngledCanvasScale as at, COVER_CLI_CODE as b, getCoverFrameWidthPx as bt, DEFAULT_CODE_SNIPPET_TITLE as c, scaleCoverScreenshotAngledPerspective as ct, getCoverCodeSnippetMaxLines as d, formatCoverEyebrow as dt, PERSPECTIVE_SCREENSHOT_CARD_TRANSFORM as et, mapCoverCodeSnippetLanguageToCodeEditorLanguage as f, parseBooleanParam as ft, alignCoverCodeTokensToContent as g, COVER_SCREENSHOT_FRAME_HEIGHT as gt, parseCoverCodeSnippetLines as h, wrapTextLines as ht, COVER_CODE_SNIPPET_LANGUAGES as i, computeCoverScreenshotAngledOgFrameBox as it, buildCoverChartDefaultFieldParams as j, COVER_CHART as k, getCoverCodeSnippetLineHeight as l, clampNumber as lt, parseCoverCodeSnippetLanguage as m, stripCoverTitleSuffix as mt, COVER_CODE_SNIPPET_DEFAULT_FRAME_WIDTH_PERCENT as n, buildPerspectiveScreenshotCardTransform as nt, DEFAULT_CODE_SNIPPET as o, getCoverScreenshotAngledCardTransform as ot, normalizeCoverCodeSnippetData as p, parseNumberParam as pt, normalizeCoverTableData as q, COVER_CODE_SNIPPET_FONT_SIZE as r, computeCoverScreenshotAngledLayoutOffset as rt, DEFAULT_CODE_SNIPPET_LANGUAGE as s, scaleCoverScreenshotAngledCardTransform as st, COVER_CODE_SNIPPET as t, buildPerspectiveScreenshotCardOgTransform as tt, getCoverCodeSnippetMaxCharsForLine as u, escapeXml as ut, getCoverCodeLineIndentPx as v, COVER_SCREENSHOT_FRAME_WIDTH as vt, DEFAULT_CLI_CODE_TITLE as w, getCoverContentLayoutTransform as wt, COVER_CLI_CODE_DEFAULT_FRAME_WIDTH_PERCENT as x, resolveCoverScreenshotFrameHeightExportPx as xt, stripLeadingWhitespaceCoverTokens as y, clampCoverFrameHeightPercent as yt, COVER_TABLE_DEFAULT_FRAME_WIDTH_PERCENT as z };
