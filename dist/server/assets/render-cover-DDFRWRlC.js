import "./render-context-C1ssi7kM.js";
import { a as COVER_WIDTH, d as getCoverBrandThemeForSvgExport, f as getCoverTheme, t as COVER_HEIGHT } from "./constants-CL7SLzjY.js";
import { Ct as coverExportYToArtboardY, D as normalizeCoverCliCodeData, Et as transformCoverArtboardRect, K as getCoverTableMatrix, L as normalizeCoverBarChartData, O as parseCoverCliCodeLines, P as getCoverChartPoints, Q as PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO, R as normalizeCoverLineChartData, _ as buildCoverCodeTokenTexts, a as COVER_CODE_SNIPPET_LANGUAGE_LABELS, b as COVER_CLI_CODE, bt as getCoverFrameWidthPx, d as getCoverCodeSnippetMaxLines, dt as formatCoverEyebrow, g as alignCoverCodeTokensToContent, gt as COVER_SCREENSHOT_FRAME_HEIGHT, h as parseCoverCodeSnippetLines, ht as wrapTextLines, it as computeCoverScreenshotAngledOgFrameBox, l as getCoverCodeSnippetLineHeight, lt as clampNumber, mt as stripCoverTitleSuffix, ot as getCoverScreenshotAngledCardTransform, p as normalizeCoverCodeSnippetData, q as normalizeCoverTableData, t as COVER_CODE_SNIPPET, tt as buildPerspectiveScreenshotCardOgTransform, u as getCoverCodeSnippetMaxCharsForLine, ut as escapeXml, v as getCoverCodeLineIndentPx, wt as getCoverContentLayoutTransform, y as stripLeadingWhitespaceCoverTokens, yt as clampCoverFrameHeightPercent } from "./constants-B5zUV45z.js";
import { C as getCoverScreenshotSceneLayout, g as buildCoverScreenshotClipSvg, h as buildCoverScreenshotChromeSvg, m as COVER_SCREENSHOT_TITLE, p as COVER_HERO_SCREENSHOT_FRAME, v as buildCoverScreenshotGlassFrameSvg, x as getCoverScreenshotGlassColors } from "./lucide-icon-svg-BStxTNvw.js";
import { t as buildCoverOgBackgroundDataUri } from "./og-background-Ch6x_wVd.js";
import { n as getCoverScreenshotAngledInnerDimensions, t as getCoverScreenshotAngledFrameLayout } from "./cover-screenshot-angled-frame-B65X7TQr.js";
import { r as COVER_EXPORT_TTF_SOURCES, t as readCoverPublicAssetBuffer } from "./public-assets-2YjDGwMP.js";
import { c as coverSvgTextBaseline, i as buildCoverTableTitleBlockSvg, o as measureCoverTableTitleBlockHeight, r as buildCoverTableGridSvgFragment, s as coverSvgConnectorBaseline, t as COVER_TABLE_LAYOUT, u as buildCoverExportFontStyleBlock } from "./render-frame-BkUqYiWN.js";
import { a as buildCoverSvgShell, c as prepareCoverIconDataUri, l as resolveCoverImageHref, n as applyCoverImageFormat, o as getTitleFill, r as encodeCoverImageBuffer, s as loadCoverImageBuffer, t as getCoverFontFaceCss } from "./font-embed-BhaGPy8N.js";
import "./cover-image-format-CKZUHQO-.js";
import { t as getCodeSyntaxColors } from "./code-syntax-theme-CApDi7y8.js";
import { createRequire } from "node:module";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ImageResponse } from "@vercel/og";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
function CoverOgBrandBackground({ themeId, width = COVER_WIDTH, height = 630, className }) {
	return /* @__PURE__ */ jsx("img", {
		src: buildCoverOgBackgroundDataUri(themeId, width, height),
		alt: "",
		"aria-hidden": true,
		width,
		height,
		className,
		style: {
			position: "absolute",
			inset: 0,
			width,
			height
		}
	});
}
function ChromeDots({ paddingX, paddingTop, chromeHeight, dotFill }) {
	const { chromeDotSize, chromeDotGap, chromeDotMarginLeft } = COVER_HERO_SCREENSHOT_FRAME;
	const dotY = paddingTop + chromeHeight / 2 - chromeDotSize / 2;
	const dotStartX = paddingX + chromeDotMarginLeft;
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: 3 }, (_, index) => /* @__PURE__ */ jsx("div", { style: {
		position: "absolute",
		left: dotStartX + index * (chromeDotSize + chromeDotGap),
		top: dotY,
		width: chromeDotSize,
		height: chromeDotSize,
		borderRadius: chromeDotSize / 2,
		backgroundColor: dotFill
	} }, index)) });
}
function ScreenshotAngledOg({ data, prepared }) {
	const layout = getCoverScreenshotAngledFrameLayout(data);
	const glass = getCoverScreenshotGlassColors(data.theme);
	const cardTransform = buildPerspectiveScreenshotCardOgTransform(getCoverScreenshotAngledCardTransform(data));
	const frameBox = computeCoverScreenshotAngledOgFrameBox({
		containerWidth: COVER_WIDTH,
		containerHeight: 630,
		frameWidth: layout.shell.width,
		frameHeight: layout.shell.height,
		displayScale: data.displayScale,
		posXRatio: data.posXRatio,
		posYRatio: data.posYRatio
	});
	const { shell, screenshot: shotRect, outerRadius, innerRadius, paddingX, paddingTop, chromeHeight } = layout;
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "absolute",
			left: frameBox.left,
			top: frameBox.top,
			width: frameBox.width,
			height: frameBox.height,
			display: "flex",
			transform: `scale(${frameBox.scale})`,
			transformOrigin: frameBox.transformOrigin
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				width: shell.width,
				height: shell.height,
				display: "flex",
				transform: cardTransform,
				transformOrigin: "50% 50%"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					width: shell.width,
					height: shell.height,
					borderTopLeftRadius: outerRadius,
					borderTopRightRadius: outerRadius,
					borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth,
					borderStyle: "solid",
					borderColor: glass.shellBorder,
					borderBottomWidth: 0,
					backgroundColor: glass.shellFill,
					overflow: "hidden",
					display: "flex",
					flexDirection: "column"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						height: paddingTop + chromeHeight,
						width: "100%",
						position: "relative",
						display: "flex"
					},
					children: /* @__PURE__ */ jsx(ChromeDots, {
						paddingX,
						paddingTop,
						chromeHeight,
						dotFill: glass.chromeDotFill
					})
				}), /* @__PURE__ */ jsx("div", {
					style: {
						width: shotRect.width,
						height: shotRect.height,
						marginInlineStart: paddingX,
						borderTopLeftRadius: innerRadius,
						borderTopRightRadius: innerRadius,
						overflow: "hidden",
						opacity: COVER_HERO_SCREENSHOT_FRAME.imageOpacity,
						display: "flex"
					},
					children: prepared.screenshot ? /* @__PURE__ */ jsx("img", {
						src: prepared.screenshot,
						width: shotRect.width,
						height: shotRect.height,
						style: {
							width: "100%",
							height: "100%",
							objectFit: "cover",
							objectPosition: `${data.focusX}% ${data.focusY}%`,
							display: "block"
						}
					}) : /* @__PURE__ */ jsx("div", {
						style: {
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: "rgba(255, 255, 255, 0.45)",
							fontSize: 22
						},
						children: "Screenshot preview"
					})
				})]
			})
		})
	});
}
function CoverOgRoot({ data, prepared }) {
	const { scale, translateX, translateY } = getCoverContentLayoutTransform(data.width, data.height);
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			position: "relative",
			display: "flex",
			width: data.width,
			height: data.height,
			overflow: "hidden",
			backgroundColor: brand.background
		},
		children: [/* @__PURE__ */ jsx(CoverOgBrandBackground, {
			themeId: data.theme,
			width: data.width,
			height: data.height
		}), /* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				inset: 0,
				display: "flex"
			},
			children: /* @__PURE__ */ jsx("div", {
				style: {
					width: COVER_WIDTH,
					height: 630,
					display: "flex",
					position: "relative",
					transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
					transformOrigin: "top left"
				},
				children: /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						inset: 0,
						display: "flex"
					},
					children: /* @__PURE__ */ jsx(ScreenshotAngledOg, {
						data,
						themeId: data.theme,
						prepared
					})
				})
			})
		})]
	});
}
var cachedFonts = null;
async function loadOgFont(relativePath, weight) {
	const ttf = await readCoverPublicAssetBuffer(relativePath);
	if (!ttf) throw new Error(`Cover OG font not found: ${relativePath}`);
	return {
		name: "Aeonik Pro",
		data: Uint8Array.from(ttf).buffer,
		weight,
		style: "normal"
	};
}
async function loadCoverOgFonts() {
	if (cachedFonts) return cachedFonts;
	cachedFonts = await Promise.all([loadOgFont(COVER_EXPORT_TTF_SOURCES.aeonikRegular, 400), loadOgFont(COVER_EXPORT_TTF_SOURCES.aeonikMedium, 600)]);
	return cachedFonts;
}
function clampPercent(value) {
	return Math.min(100, Math.max(0, value));
}
function getScreenshotCropRect(naturalWidth, naturalHeight, outputWidth, outputHeight, data) {
	const outputAspect = outputWidth / outputHeight;
	const zoom = Math.max(1, data.zoom);
	let cropHeight = naturalHeight / zoom;
	let cropWidth = cropHeight * outputAspect;
	if (cropWidth > naturalWidth) {
		cropWidth = naturalWidth / zoom;
		cropHeight = cropWidth / outputAspect;
	}
	cropWidth = Math.max(1, Math.min(Math.round(cropWidth), naturalWidth));
	cropHeight = Math.max(1, Math.min(Math.round(cropHeight), naturalHeight));
	const maxLeft = Math.max(0, naturalWidth - cropWidth);
	const maxTop = Math.max(0, naturalHeight - cropHeight);
	const left = Math.round(maxLeft * (clampPercent(data.focusX) / 100));
	const top = Math.round(maxTop * (clampPercent(data.focusY) / 100));
	return {
		left,
		top,
		width: Math.min(cropWidth, naturalWidth - left),
		height: Math.min(cropHeight, naturalHeight - top)
	};
}
async function bufferToPngDataUri(buffer) {
	return `data:image/png;base64,${buffer.toString("base64")}`;
}
async function prepareScreenshotDataUri(data, outputWidth, outputHeight) {
	if (!data.screenshot?.trim()) return null;
	const input = await loadCoverImageBuffer(data.screenshot);
	if (!input) return null;
	const metadata = await sharp(input).metadata();
	const naturalWidth = metadata.width ?? 0;
	const naturalHeight = metadata.height ?? 0;
	if (!naturalWidth || !naturalHeight) return null;
	const crop = getScreenshotCropRect(naturalWidth, naturalHeight, outputWidth, outputHeight, data);
	return bufferToPngDataUri(await sharp(input).extract({
		left: crop.left,
		top: crop.top,
		width: crop.width,
		height: crop.height
	}).resize(outputWidth, outputHeight, { fit: "cover" }).png().toBuffer());
}
async function prepareCoverRenderData(data) {
	switch (data.template) {
		case "integration": {
			const [logoLeft, logoRight] = await Promise.all([resolveCoverImageHref(data.logoLeft), resolveCoverImageHref(data.logoRight)]);
			return {
				logoLeft,
				logoRight,
				icon: null,
				screenshot: null
			};
		}
		case "showcase-icon": return {
			logoLeft: null,
			logoRight: null,
			icon: await resolveCoverImageHref(data.icon),
			screenshot: null
		};
		case "screenshot-angled": {
			const { width, height } = getCoverScreenshotAngledInnerDimensions(data);
			return {
				logoLeft: null,
				logoRight: null,
				icon: null,
				screenshot: await prepareScreenshotDataUri(data, width, height)
			};
		}
		default: return {
			logoLeft: null,
			logoRight: null,
			icon: null,
			screenshot: null
		};
	}
}
async function renderCoverImageWithOg(data) {
	const [fonts, prepared] = await Promise.all([loadCoverOgFonts(), prepareCoverRenderData(data)]);
	const response = new ImageResponse(/* @__PURE__ */ jsx(CoverOgRoot, {
		data,
		prepared
	}), {
		width: data.width,
		height: data.height,
		fonts
	});
	let bytes = new Uint8Array(await response.arrayBuffer());
	if (data.format !== "png") bytes = new Uint8Array(await encodeCoverImageBuffer(Buffer.from(bytes), data.format));
	return bytes;
}
var PRISM_COMPONENT_PATHS = [
	"prismjs/components/prism-clike",
	"prismjs/components/prism-markup",
	"prismjs/components/prism-markup-templating",
	"prismjs/components/prism-javascript",
	"prismjs/components/prism-typescript",
	"prismjs/components/prism-python",
	"prismjs/components/prism-php",
	"prismjs/components/prism-ruby",
	"prismjs/components/prism-go",
	"prismjs/components/prism-java",
	"prismjs/components/prism-kotlin",
	"prismjs/components/prism-swift",
	"prismjs/components/prism-dart",
	"prismjs/components/prism-csharp",
	"prismjs/components/prism-rust",
	"prismjs/components/prism-bash",
	"prismjs/components/prism-json",
	"prismjs/components/prism-yaml",
	"prismjs/components/prism-graphql",
	"prismjs/components/prism-css"
];
var PRISM_LANGUAGE_IDS = {
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
	bash: "bash",
	json: "json",
	yaml: "yaml",
	graphql: "graphql",
	css: "css",
	markup: "markup",
	plaintext: "plain"
};
var globalScope = globalThis;
var prismInstance = null;
var prismLoadAttempted = false;
function findPackageJsonWithPrism() {
	const candidates = [];
	if (typeof import.meta.url === "string") {
		let dir = dirname(fileURLToPath(import.meta.url));
		while (dir !== dirname(dir)) {
			candidates.push(join(dir, "package.json"));
			dir = dirname(dir);
		}
	}
	candidates.push(join(process.cwd(), "package.json"));
	for (const packageJsonPath of candidates) {
		if (!existsSync(packageJsonPath)) continue;
		try {
			createRequire(packageJsonPath).resolve("prismjs/package.json");
			return packageJsonPath;
		} catch {
			continue;
		}
	}
	return null;
}
function tryLoadPrism() {
	if (prismInstance) return prismInstance;
	if (prismLoadAttempted) return null;
	prismLoadAttempted = true;
	const packageJsonPath = findPackageJsonWithPrism();
	if (!packageJsonPath) return null;
	try {
		const nodeRequire = createRequire(packageJsonPath);
		const prism = nodeRequire("prismjs");
		globalScope.Prism = prism;
		for (const componentPath of PRISM_COMPONENT_PATHS) try {
			nodeRequire(nodeRequire.resolve(componentPath));
		} catch (error) {
			console.warn(`[cover-generator] Failed to load Prism component "${componentPath}"`, error);
		}
		prismInstance = prism;
		globalScope.Prism = prism;
		return prism;
	} catch (error) {
		console.warn("[cover-generator] Failed to initialize Prism", error);
		return null;
	}
}
function getCoverPrism() {
	const prism = tryLoadPrism();
	if (!prism) throw new Error("Prism is not available for cover syntax highlighting");
	return prism;
}
function ensureCoverCodeSnippetPrismGrammars() {
	tryLoadPrism();
}
function getCoverCodeSnippetPrismLanguageId(language) {
	const grammarId = PRISM_LANGUAGE_IDS[language];
	return grammarId === "plain" ? null : grammarId;
}
function getCoverCodeSnippetPrismGrammar(language) {
	const prism = tryLoadPrism();
	if (!prism) return null;
	const grammarId = getCoverCodeSnippetPrismLanguageId(language);
	if (!grammarId) return null;
	return prism.languages[grammarId] ?? null;
}
var CARD_BORDER_WIDTH = COVER_HERO_SCREENSHOT_FRAME.borderWidth;
var PLACEHOLDER_RADIUS = 14;
function getIntegrationIconCardSize(iconSize) {
	return 56 + iconSize;
}
function buildIntegrationIconCardSvg(options) {
	const { x, y, iconSize, iconHref, themeId } = options;
	const cardSize = getIntegrationIconCardSize(iconSize);
	const glass = getCoverScreenshotGlassColors(themeId);
	const brand = getCoverBrandThemeForSvgExport(themeId);
	return `
    <g transform="translate(${x} ${y})">
      <rect
        width="${cardSize}"
        height="${cardSize}"
        rx="32"
        ry="32"
        fill="${glass.shellFill}"
        stroke="${glass.shellBorder}"
        stroke-width="${CARD_BORDER_WIDTH}"
      />
      ${iconHref ? `<image href="${iconHref}" x="28" y="28" width="${iconSize}" height="${iconSize}" />` : `<rect x="28" y="28" width="${iconSize}" height="${iconSize}" rx="${PLACEHOLDER_RADIUS}" fill="${brand.border}" opacity="0.35" />`}
    </g>
  `;
}
var ARTBOARD_CENTER_X = 600;
var ARTBOARD_CENTER_Y = 315;
async function renderIntegrationIconTemplateSvg(data, themeId) {
	const themeFamily = getCoverTheme(themeId).family;
	const iconSize = data.iconSize;
	const cardSize = getIntegrationIconCardSize(iconSize);
	const iconHref = await prepareCoverIconDataUri(data.icon, iconSize, {
		themeFamily,
		themeId
	});
	return `
    <g transform="translate(${ARTBOARD_CENTER_X} ${ARTBOARD_CENTER_Y})">
      ${buildIntegrationIconCardSvg({
		x: -cardSize / 2,
		y: -cardSize / 2,
		iconSize,
		iconHref,
		themeId
	})}
    </g>
  `;
}
var ICON_SIZE = 120;
var ICON_GAP_FROM_CENTER = 64;
var CARD_SIZE = getIntegrationIconCardSize(ICON_SIZE);
async function renderIntegrationTemplateSvg(data, themeId) {
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const themeFamily = getCoverTheme(themeId).family;
	const centerY = 250;
	const [leftHref, rightHref] = await Promise.all([prepareCoverIconDataUri(data.logoLeft, ICON_SIZE, {
		themeFamily,
		themeId
	}), prepareCoverIconDataUri(data.logoRight, ICON_SIZE, {
		themeFamily,
		themeId
	})]);
	const titleLines = data.title ? wrapTextLines(stripCoverTitleSuffix(data.title), 28, 2) : [];
	const subtitle = data.subtitle?.trim();
	const titleFontSize = 52;
	const subtitleFontSize = 24;
	const connectorFontSize = 48;
	const titleLineStep = titleFontSize + 6;
	const cardBottom = centerY + CARD_SIZE / 2;
	const titleStartY = titleLines.length ? cardBottom + 44 : subtitle ? cardBottom + 36 : cardBottom + 28;
	const subtitleLayoutY = titleLines.length ? titleStartY + titleLines.length * titleLineStep + 18 : titleStartY + 52;
	const cardY = -CARD_SIZE / 2;
	const leftCardX = -ICON_GAP_FROM_CENTER - CARD_SIZE;
	const rightCardX = ICON_GAP_FROM_CENTER;
	return `
    <g transform="translate(600 ${centerY})">
      ${buildIntegrationIconCardSvg({
		x: leftCardX,
		y: cardY,
		iconSize: ICON_SIZE,
		iconHref: leftHref,
		themeId
	})}
      <text text-anchor="middle" class="cover-title" fill="${brand.mutedForeground}" font-size="${connectorFontSize}" y="${coverSvgConnectorBaseline(connectorFontSize)}">${escapeXml(data.connector)}</text>
      ${buildIntegrationIconCardSvg({
		x: rightCardX,
		y: cardY,
		iconSize: ICON_SIZE,
		iconHref: rightHref,
		themeId
	})}
    </g>
    ${titleLines.length ? titleLines.map((line, index) => {
		const layoutY = titleStartY + index * titleLineStep;
		return `<text text-anchor="middle" class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="600" y="${coverSvgTextBaseline(layoutY, titleFontSize)}">${escapeXml(line)}</text>`;
	}).join("") : ""}
    ${subtitle ? `<text text-anchor="middle" class="cover-body" fill="${brand.mutedForeground}" font-size="${subtitleFontSize}" x="600" y="${coverSvgTextBaseline(subtitleLayoutY, subtitleFontSize)}">${escapeXml(subtitle)}</text>` : ""}
  `;
}
async function renderShowcaseIconTemplateSvg(data, theme) {
	const brand = getCoverBrandThemeForSvgExport(theme);
	const iconSize = data.iconSize;
	const contentX = 96;
	const iconHref = await prepareCoverIconDataUri(data.icon, iconSize, {
		themeFamily: getCoverTheme(theme).family,
		themeId: theme,
		contentAlign: "left"
	});
	const iconY = 150;
	const titleLines = data.title ? wrapTextLines(stripCoverTitleSuffix(data.title), 24, 2) : [];
	const titleStartY = iconY + iconSize + 56;
	const titleFontSize = 58;
	const subtitleFontSize = 24;
	const titleLineStep = titleFontSize + 8;
	const subtitleLayoutY = titleLines.length ? titleStartY + titleLines.length * titleLineStep + 18 : titleStartY + 18;
	return `
    ${iconHref ? `<image href="${iconHref}" x="${contentX}" y="${iconY}" width="${iconSize}" height="${iconSize}" />` : `<rect x="${contentX}" y="${iconY}" width="${iconSize}" height="${iconSize}" rx="24" fill="${brand.border}" opacity="0.35" />`}
    ${titleLines.length ? titleLines.map((line, index) => {
		const layoutY = titleStartY + index * titleLineStep;
		return `<text class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="${contentX}" y="${coverSvgTextBaseline(layoutY, titleFontSize)}">${escapeXml(line)}${index === titleLines.length - 1 ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`;
	}).join("") : ""}
    ${data.subtitle ? `<text class="cover-body" fill="${brand.mutedForeground}" font-size="${subtitleFontSize}" x="${contentX}" y="${coverSvgTextBaseline(subtitleLayoutY, subtitleFontSize)}">${escapeXml(data.subtitle)}</text>` : ""}
  `;
}
var ROW_CENTER_Y = 630 / 2;
var TITLE_CHAR_WIDTH_RATIO = .58;
var ICON_PLACEHOLDER_RADIUS = 12;
var ICON_TITLE_GAP_RATIO = .45;
var ICON_OPTICAL_Y_OFFSET_RATIO = -.04;
function getTitleIconLockupFontSize(title) {
	const text = stripCoverTitleSuffix(title);
	const length = Math.max(text.length, 1);
	if (length <= 5) return 112;
	if (length <= 10) return 96;
	if (length <= 16) return 80;
	if (length <= 22) return 68;
	return 56;
}
function getTitleLineStep(fontSize) {
	return fontSize + 6;
}
function estimateTitleWidth(lines, fontSize) {
	const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
	return Math.max(longestLine, 1) * fontSize * TITLE_CHAR_WIDTH_RATIO;
}
function getTitleStartLayoutY(lineCount, fontSize, lineStep) {
	if (lineCount <= 0) return ROW_CENTER_Y;
	return ROW_CENTER_Y - (fontSize + (lineCount - 1) * lineStep) / 2;
}
async function renderTitleIconTemplateSvg(data, themeId) {
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const themeFamily = getCoverTheme(themeId).family;
	const titleText = data.title ? stripCoverTitleSuffix(data.title) : "";
	const titleFontSize = titleText ? getTitleIconLockupFontSize(titleText) : 96;
	const titleLineStep = getTitleLineStep(titleFontSize);
	const titleLines = titleText ? wrapTextLines(titleText, 18, 2) : [];
	const iconSize = clampNumber(data.iconSize, 40, 128);
	const iconTitleGap = Math.round(titleFontSize * ICON_TITLE_GAP_RATIO);
	const iconHref = await prepareCoverIconDataUri(data.icon, iconSize, {
		themeFamily,
		themeId,
		contentAlign: "left"
	});
	const titleWidth = estimateTitleWidth(titleLines, titleFontSize);
	const iconX = (COVER_WIDTH - (iconSize + (titleLines.length > 0 ? iconTitleGap + titleWidth : 0))) / 2;
	const iconY = ROW_CENTER_Y - iconSize / 2 + Math.round(iconSize * ICON_OPTICAL_Y_OFFSET_RATIO);
	const titleX = iconX + iconSize + iconTitleGap;
	const titleStartY = getTitleStartLayoutY(titleLines.length, titleFontSize, titleLineStep);
	return `
    ${iconHref ? `<image href="${iconHref}" x="${iconX}" y="${iconY}" width="${iconSize}" height="${iconSize}" />` : `<rect x="${iconX}" y="${iconY}" width="${iconSize}" height="${iconSize}" rx="${ICON_PLACEHOLDER_RADIUS}" fill="${brand.border}" opacity="0.35" />`}
    ${titleLines.map((line, index) => {
		const layoutY = titleStartY + index * titleLineStep;
		const isLast = index === titleLines.length - 1;
		return `<text class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="${titleX}" y="${coverSvgTextBaseline(layoutY, titleFontSize)}">${escapeXml(line)}${isLast ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`;
	}).join("")}
  `;
}
var COVER_CONTENT_X$2 = 96;
var COVER_EYEBROW_FONT_SIZE$2 = 18;
var COVER_EYEBROW_TITLE_GAP$1 = 32;
var COVER_SUBTITLE_FONT_SIZE$1 = 26;
var COVER_SUBTITLE_LINE_STEP = COVER_SUBTITLE_FONT_SIZE$1 + 8;
var COVER_SUBTITLE_MAX_CHARS_PER_LINE = 42;
var COVER_SUBTITLE_MAX_LINES = 3;
var COVER_BOTTOM_PADDING$1 = 80;
var COVER_CTA_FONT_SIZE = 22;
var COVER_CTA_PILL_HEIGHT = 48;
var COVER_CTA_PILL_PADDING_X = 28;
var COVER_CTA_RESERVED_HEIGHT = 72;
function renderTitleTspans(lines, lineStep, brandCta) {
	return lines.map((line, index) => {
		const underscore = index === lines.length - 1 ? `<tspan fill="${brandCta}">_</tspan>` : "";
		const content = `${escapeXml(line)}${underscore}`;
		if (index === 0) return `<tspan>${content}</tspan>`;
		return `<tspan x="${COVER_CONTENT_X$2}" dy="${lineStep}">${content}</tspan>`;
	}).join("");
}
function renderBodyTspans(lines, x, lineStep) {
	return lines.map((line, index) => {
		const content = escapeXml(line);
		if (index === 0) return `<tspan>${content}</tspan>`;
		return `<tspan x="${x}" dy="${lineStep}">${content}</tspan>`;
	}).join("");
}
function getSimpleTitleMaxSubtitleLines(subtitleLayoutY, hasCta) {
	const availableHeight = 630 - (hasCta ? COVER_BOTTOM_PADDING$1 + COVER_CTA_RESERVED_HEIGHT : COVER_BOTTOM_PADDING$1) - subtitleLayoutY;
	return Math.max(1, Math.min(COVER_SUBTITLE_MAX_LINES, Math.floor(availableHeight / COVER_SUBTITLE_LINE_STEP)));
}
function estimateCtaPillWidth(label) {
	return Math.max(200, Math.round(label.length * COVER_CTA_FONT_SIZE * .56 + COVER_CTA_PILL_PADDING_X * 2));
}
function renderCtaPill(label, brandCta) {
	const pillWidth = estimateCtaPillWidth(label);
	const pillTop = 630 - COVER_BOTTOM_PADDING$1 - COVER_CTA_PILL_HEIGHT;
	const textX = COVER_CONTENT_X$2 + COVER_CTA_PILL_PADDING_X;
	const textBaseline = coverSvgTextBaseline(pillTop + COVER_CTA_PILL_HEIGHT / 2, COVER_CTA_FONT_SIZE);
	return `
    <rect x="${COVER_CONTENT_X$2}" y="${pillTop}" width="${pillWidth}" height="${COVER_CTA_PILL_HEIGHT}" rx="${COVER_CTA_PILL_HEIGHT / 2}" fill="${brandCta}" />
    <text class="cover-cta" fill="#ffffff" font-size="${COVER_CTA_FONT_SIZE}" font-weight="600" x="${textX}" y="${textBaseline}">${escapeXml(label)}</text>
  `;
}
function renderSimpleTitleTemplateSvg(data, theme) {
	const brand = getCoverBrandThemeForSvgExport(theme);
	const titleLines = wrapTextLines(stripCoverTitleSuffix(data.title), 22, 3);
	const titleFontSize = titleLines.some((line) => line.length > 18) ? 72 : 84;
	const lineStep = titleFontSize + 8;
	const eyebrowText = formatCoverEyebrow(data.eyebrow);
	const eyebrowLayoutY = 196;
	const startY = eyebrowText ? eyebrowLayoutY + COVER_EYEBROW_FONT_SIZE$2 + COVER_EYEBROW_TITLE_GAP$1 : 220;
	const firstBaseline = coverSvgTextBaseline(startY, titleFontSize);
	const titleSvg = titleLines.length ? `<text class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="${COVER_CONTENT_X$2}" y="${firstBaseline}">${renderTitleTspans(titleLines, lineStep, brand.brandCta)}</text>` : "";
	const subtitleLayoutY = startY + titleLines.length * lineStep + (data.subtitle ? 24 : 0);
	const ctaLabel = data.cta?.trim();
	const subtitleMaxLines = data.subtitle ? getSimpleTitleMaxSubtitleLines(subtitleLayoutY, Boolean(ctaLabel)) : 0;
	const subtitleLines = data.subtitle ? wrapTextLines(data.subtitle.trim(), COVER_SUBTITLE_MAX_CHARS_PER_LINE, subtitleMaxLines) : [];
	return `
    ${eyebrowText ? `<text class="cover-eyebrow" fill="${brand.mutedForeground}" font-size="${COVER_EYEBROW_FONT_SIZE$2}" font-weight="600" letter-spacing="0.25em" x="${COVER_CONTENT_X$2}" y="${coverSvgTextBaseline(eyebrowLayoutY, COVER_EYEBROW_FONT_SIZE$2)}">${escapeXml(eyebrowText)}<tspan fill="${brand.brandCta}">_</tspan></text>` : ""}
    ${titleSvg}
    ${subtitleLines.length ? `<text class="cover-body" fill="${brand.mutedForeground}" font-size="${COVER_SUBTITLE_FONT_SIZE$1}" x="${COVER_CONTENT_X$2}" y="${coverSvgTextBaseline(subtitleLayoutY, COVER_SUBTITLE_FONT_SIZE$1)}">${renderBodyTspans(subtitleLines, COVER_CONTENT_X$2, COVER_SUBTITLE_LINE_STEP)}</text>` : ""}
    ${ctaLabel ? renderCtaPill(ctaLabel, brand.brandCta) : ""}
  `;
}
function renderTableTemplateSvg(data, themeId) {
	const normalized = normalizeCoverTableData(data);
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const glass = getCoverScreenshotGlassColors(themeId);
	const matrix = getCoverTableMatrix(normalized);
	const frameWidth = getCoverFrameWidthPx(normalized.frameWidthPercent, {
		width: normalized.width,
		height: normalized.height
	});
	const frameX = Math.round((COVER_WIDTH - frameWidth) / 2);
	const contentX = COVER_TABLE_LAYOUT.cardPaddingX;
	const contentWidth = frameWidth - COVER_TABLE_LAYOUT.cardPaddingX * 2;
	const tableGrid = buildCoverTableGridSvgFragment({
		x: contentX,
		y: COVER_TABLE_LAYOUT.cardPaddingY,
		width: contentWidth,
		headers: matrix.headers,
		rows: matrix.rows,
		showHeader: normalized.showHeader,
		brand,
		layout: COVER_TABLE_LAYOUT,
		clipId: "cover-table-grid-clip"
	});
	const cardHeight = COVER_TABLE_LAYOUT.cardPaddingY * 2 + tableGrid.height;
	const titleHeight = measureCoverTableTitleBlockHeight(normalized.title, normalized.subtitle, COVER_TABLE_LAYOUT);
	const titleCardGap = titleHeight > 0 ? COVER_TABLE_LAYOUT.titleCardGap : 0;
	const compositionHeight = titleHeight + titleCardGap + cardHeight;
	const compositionY = Math.round((630 - compositionHeight) / 2);
	const cardY = compositionY + titleHeight + titleCardGap;
	return `
    ${buildCoverTableTitleBlockSvg(normalized.title, normalized.subtitle, COVER_WIDTH / 2, compositionY, brand, COVER_TABLE_LAYOUT).svg}
    <g transform="translate(${frameX} ${cardY})">
      <rect
        width="${frameWidth}"
        height="${cardHeight}"
        rx="${COVER_TABLE_LAYOUT.outerRadius}"
        ry="${COVER_TABLE_LAYOUT.outerRadius}"
        fill="${glass.shellFill}"
        stroke="${glass.shellBorder}"
        stroke-width="${COVER_TABLE_LAYOUT.borderWidth}"
      />
      <defs>${tableGrid.clipPathDef}</defs>
      ${tableGrid.svg}
    </g>
  `;
}
const COVER_CHART_LAYOUT = {
	cardPaddingX: 24,
	cardPaddingY: 24,
	chartHeight: 280,
	titleFontSize: 42,
	titleLineHeight: 50,
	subtitleFontSize: 24,
	subtitleGap: 12,
	titleCardGap: 28,
	outerRadius: 24,
	borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth,
	plotTop: 16,
	plotBottom: 40,
	plotLeft: 52,
	plotRight: 20,
	axisLabelFontSize: 13,
	valueLabelFontSize: 12,
	gridLineCount: 4
};
function measureCoverChartTitleBlockHeight(title, subtitle) {
	if (!title && !subtitle) return 0;
	const titleText = title ? stripCoverTitleSuffix(title) : "";
	return (titleText ? COVER_CHART_LAYOUT.titleLineHeight : 0) + (titleText && subtitle ? COVER_CHART_LAYOUT.subtitleGap : 0) + (subtitle ? COVER_CHART_LAYOUT.subtitleFontSize + 8 : 0);
}
function buildCoverChartTitleBlock(title, subtitle, centerX, yOffset, brand) {
	if (!title && !subtitle) return "";
	const titleText = title ? stripCoverTitleSuffix(title) : "";
	const titleY = yOffset;
	const subtitleY = titleText ? titleY + COVER_CHART_LAYOUT.titleLineHeight + COVER_CHART_LAYOUT.subtitleGap : titleY;
	return `
    ${titleText ? `<text class="cover-title" text-anchor="middle" fill="${brand.foreground}" font-size="${COVER_CHART_LAYOUT.titleFontSize}" font-weight="600" x="${centerX}" y="${coverSvgTextBaseline(titleY, COVER_CHART_LAYOUT.titleFontSize)}">${escapeXml(titleText)}</text>` : ""}
    ${subtitle ? `<text class="cover-body" text-anchor="middle" fill="${brand.mutedForeground}" font-size="${COVER_CHART_LAYOUT.subtitleFontSize}" x="${centerX}" y="${coverSvgTextBaseline(subtitleY, COVER_CHART_LAYOUT.subtitleFontSize)}">${escapeXml(subtitle)}</text>` : ""}
  `;
}
function getCoverChartYAxisMax(values) {
	const maxValue = Math.max(...values, 1);
	const magnitude = 10 ** Math.floor(Math.log10(maxValue));
	const normalized = maxValue / magnitude;
	let niceMax;
	if (normalized <= 1) niceMax = 1;
	else if (normalized <= 2) niceMax = 2;
	else if (normalized <= 5) niceMax = 5;
	else niceMax = 10;
	return niceMax * magnitude;
}
function getCoverChartPlotArea(cardX, cardY, cardWidth) {
	const { cardPaddingX, cardPaddingY, chartHeight, plotTop, plotBottom, plotLeft, plotRight } = COVER_CHART_LAYOUT;
	return {
		x: cardX + cardPaddingX + plotLeft,
		y: cardY + cardPaddingY + plotTop,
		width: cardWidth - cardPaddingX * 2 - plotLeft - plotRight,
		height: chartHeight - plotTop - plotBottom,
		yMax: 0
	};
}
function buildCoverChartGridSvg(options) {
	const { plot, showGrid, brand } = options;
	const parts = [];
	for (let index = 0; index <= COVER_CHART_LAYOUT.gridLineCount; index += 1) {
		const ratio = index / COVER_CHART_LAYOUT.gridLineCount;
		const y = plot.y + plot.height * (1 - ratio);
		const value = Math.round(plot.yMax * ratio);
		if (showGrid && index > 0) parts.push(`<line x1="${plot.x}" y1="${y}" x2="${plot.x + plot.width}" y2="${y}" stroke="${brand.border}" stroke-width="1" opacity="0.55" />`);
		parts.push(`<text class="cover-body" text-anchor="end" fill="${brand.mutedForeground}" font-size="${COVER_CHART_LAYOUT.axisLabelFontSize}" x="${plot.x - 10}" y="${coverSvgTextBaseline(y - 4, COVER_CHART_LAYOUT.axisLabelFontSize)}">${value}</text>`);
	}
	parts.push(`<line x1="${plot.x}" y1="${plot.y + plot.height}" x2="${plot.x + plot.width}" y2="${plot.y + plot.height}" stroke="${brand.border}" stroke-width="1" opacity="0.75" />`);
	return parts.join("\n");
}
function buildCoverChartCardShell(options) {
	const { frameWidthPercent, width, height, title, subtitle, themeId, chartContentSvg } = options;
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const glass = getCoverScreenshotGlassColors(themeId);
	const frameWidth = getCoverFrameWidthPx(frameWidthPercent, {
		width,
		height
	});
	const frameX = Math.round((COVER_WIDTH - frameWidth) / 2);
	const centerX = COVER_WIDTH / 2;
	const cardHeight = COVER_CHART_LAYOUT.cardPaddingY * 2 + COVER_CHART_LAYOUT.chartHeight;
	const titleHeight = measureCoverChartTitleBlockHeight(title, subtitle);
	const titleCardGap = titleHeight > 0 ? COVER_CHART_LAYOUT.titleCardGap : 0;
	const compositionHeight = titleHeight + titleCardGap + cardHeight;
	const compositionY = Math.round((630 - compositionHeight) / 2);
	const cardY = compositionY + titleHeight + titleCardGap;
	return `
    ${buildCoverChartTitleBlock(title, subtitle, centerX, compositionY, brand)}
    <g transform="translate(${frameX} ${cardY})">
      <rect
        width="${frameWidth}"
        height="${cardHeight}"
        rx="${COVER_CHART_LAYOUT.outerRadius}"
        ry="${COVER_CHART_LAYOUT.outerRadius}"
        fill="${glass.shellFill}"
        stroke="${glass.shellBorder}"
        stroke-width="${COVER_CHART_LAYOUT.borderWidth}"
      />
      ${chartContentSvg}
    </g>
  `;
}
function buildBarChartContentSvg(data, themeId) {
	const normalized = normalizeCoverBarChartData(data);
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const points = getCoverChartPoints(normalized);
	const frameWidth = getCoverFrameWidthPx(normalized.frameWidthPercent, {
		width: normalized.width,
		height: normalized.height
	});
	const yMax = getCoverChartYAxisMax(points.map((point) => point.value));
	const plot = getCoverChartPlotArea(0, 0, frameWidth);
	plot.yMax = yMax;
	const slotWidth = plot.width / points.length;
	const barWidth = Math.min(48, slotWidth * .58);
	const parts = [buildCoverChartGridSvg({
		plot,
		showGrid: normalized.showGrid,
		brand
	})];
	points.forEach((point, index) => {
		const barHeight = point.value / yMax * plot.height;
		const x = plot.x + index * slotWidth + (slotWidth - barWidth) / 2;
		const y = plot.y + plot.height - barHeight;
		const labelX = plot.x + index * slotWidth + slotWidth / 2;
		parts.push(`<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="6" ry="6" fill="${brand.brandCta}" opacity="0.92" />`);
		if (normalized.showValues && point.value > 0) parts.push(`<text class="cover-body" text-anchor="middle" fill="${brand.foreground}" font-size="${COVER_CHART_LAYOUT.valueLabelFontSize}" font-weight="600" x="${labelX}" y="${coverSvgTextBaseline(y - 8, COVER_CHART_LAYOUT.valueLabelFontSize)}">${escapeXml(String(Math.round(point.value)))}</text>`);
		parts.push(`<text class="cover-body" text-anchor="middle" fill="${brand.mutedForeground}" font-size="${COVER_CHART_LAYOUT.axisLabelFontSize}" x="${labelX}" y="${coverSvgTextBaseline(plot.y + plot.height + 22, COVER_CHART_LAYOUT.axisLabelFontSize)}">${escapeXml(point.label)}</text>`);
	});
	return parts.join("\n");
}
function renderBarChartTemplateSvg(data, themeId) {
	const normalized = normalizeCoverBarChartData(data);
	return buildCoverChartCardShell({
		frameWidthPercent: normalized.frameWidthPercent,
		width: normalized.width,
		height: normalized.height,
		title: normalized.title,
		subtitle: normalized.subtitle,
		themeId,
		chartContentSvg: buildBarChartContentSvg(normalized, themeId)
	});
}
var LINE_CHART_AREA_GRADIENT_ID = "cover-line-chart-area-gradient";
function buildLinePoints(points, plot) {
	const slotWidth = plot.width / Math.max(points.length - 1, 1);
	return points.map((point, index) => {
		return {
			x: points.length === 1 ? plot.x + plot.width / 2 : plot.x + index * slotWidth,
			y: plot.y + plot.height - point.value / plot.yMax * plot.height,
			label: point.label,
			value: point.value
		};
	});
}
function buildLineChartContentSvg(data, themeId) {
	const normalized = normalizeCoverLineChartData(data);
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const points = getCoverChartPoints(normalized);
	const frameWidth = getCoverFrameWidthPx(normalized.frameWidthPercent, {
		width: normalized.width,
		height: normalized.height
	});
	const yMax = getCoverChartYAxisMax(points.map((point) => point.value));
	const plot = getCoverChartPlotArea(0, 0, frameWidth);
	plot.yMax = yMax;
	const linePoints = buildLinePoints(points, plot);
	const polylinePoints = linePoints.map((point) => `${point.x},${point.y}`).join(" ");
	const parts = [`<defs>
      <linearGradient id="${LINE_CHART_AREA_GRADIENT_ID}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${brand.brandCta}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${brand.brandCta}" stop-opacity="0" />
      </linearGradient>
    </defs>`, buildCoverChartGridSvg({
		plot,
		showGrid: normalized.showGrid,
		brand
	})];
	if (normalized.showArea && linePoints.length > 1) {
		const baselineY = plot.y + plot.height;
		const areaPath = [
			`M ${linePoints[0].x} ${baselineY}`,
			...linePoints.map((point) => `L ${point.x} ${point.y}`),
			`L ${linePoints[linePoints.length - 1].x} ${baselineY}`,
			"Z"
		].join(" ");
		parts.push(`<path d="${areaPath}" fill="url(#${LINE_CHART_AREA_GRADIENT_ID})" />`);
	}
	if (linePoints.length > 1) parts.push(`<polyline points="${polylinePoints}" fill="none" stroke="${brand.brandCta}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`);
	linePoints.forEach((point) => {
		parts.push(`<circle cx="${point.x}" cy="${point.y}" r="5" fill="${brand.background}" stroke="${brand.brandCta}" stroke-width="2.5" />`);
		if (normalized.showValues && point.value > 0) parts.push(`<text class="cover-body" text-anchor="middle" fill="${brand.foreground}" font-size="${COVER_CHART_LAYOUT.valueLabelFontSize}" font-weight="600" x="${point.x}" y="${coverSvgTextBaseline(point.y - 12, COVER_CHART_LAYOUT.valueLabelFontSize)}">${escapeXml(String(Math.round(point.value)))}</text>`);
		parts.push(`<text class="cover-body" text-anchor="middle" fill="${brand.mutedForeground}" font-size="${COVER_CHART_LAYOUT.axisLabelFontSize}" x="${point.x}" y="${coverSvgTextBaseline(plot.y + plot.height + 22, COVER_CHART_LAYOUT.axisLabelFontSize)}">${escapeXml(point.label)}</text>`);
	});
	return parts.join("\n");
}
function renderLineChartTemplateSvg(data, themeId) {
	const normalized = normalizeCoverLineChartData(data);
	return buildCoverChartCardShell({
		frameWidthPercent: normalized.frameWidthPercent,
		width: normalized.width,
		height: normalized.height,
		title: normalized.title,
		subtitle: normalized.subtitle,
		themeId,
		chartContentSvg: buildLineChartContentSvg(normalized, themeId)
	});
}
var CLI_TOKEN_PATTERN = /("[^"]*"|'[^']*'|--?[\w-]+|\S+)/g;
function resolveCliTokenColor(token, index, colors, defaultColor) {
	if (token.startsWith("\"") || token.startsWith("'")) return colors.string;
	if (token.startsWith("-")) return colors.keyword;
	if (index === 0) return colors.function;
	if (index === 1) return colors.keyword;
	if (index === 2) return colors.moduleKeyword;
	return colors.string;
}
function tokenizeCoverCliCodeLine(line, themeFamily, defaultColor) {
	const trimmed = line.trim();
	if (!trimmed) return [{
		content: " ",
		color: defaultColor
	}];
	const colors = getCodeSyntaxColors(themeFamily === "dark");
	if (trimmed.startsWith("#")) return [{
		content: trimmed,
		color: colors.comment
	}];
	const tokens = [];
	let lastIndex = 0;
	let tokenIndex = 0;
	let match;
	CLI_TOKEN_PATTERN.lastIndex = 0;
	while ((match = CLI_TOKEN_PATTERN.exec(trimmed)) !== null) {
		if (match.index > lastIndex) tokens.push({
			content: trimmed.slice(lastIndex, match.index),
			color: defaultColor
		});
		const part = match[0];
		tokens.push({
			content: part,
			color: resolveCliTokenColor(part, tokenIndex, colors, defaultColor)
		});
		lastIndex = CLI_TOKEN_PATTERN.lastIndex;
		tokenIndex += 1;
	}
	if (lastIndex < trimmed.length) tokens.push({
		content: trimmed.slice(lastIndex),
		color: defaultColor
	});
	return tokens.length > 0 ? tokens : [{
		content: trimmed,
		color: defaultColor
	}];
}
function buildCoverCliCodeTokenTspans(tokens, startX, fontSize, y) {
	return buildCoverCodeTokenTexts(tokens, startX, fontSize, y);
}
const COVER_SCREENSHOT_SIDE_TITLE = {
	x: 72,
	fontSize: 56,
	lineHeight: 64,
	subtitleFontSize: 24,
	subtitleGap: 16,
	frameGap: 32,
	maxCharsPerLine: 22,
	maxLines: 3
};
const COVER_SCREENSHOT_SIDE_SHELL = {
	verticalInset: 24,
	rightOverflowPercent: 22,
	leftOffset: 88,
	aspectRatio: PERSPECTIVE_SCREENSHOT_CARD_ASPECT_RATIO
};
function estimateCoverTextWidth(text, fontSize) {
	return Math.ceil(text.length * fontSize * .52);
}
function getCoverScreenshotSideMinFrameX(titleLines, subtitle) {
	const { x, fontSize, subtitleFontSize, frameGap } = COVER_SCREENSHOT_SIDE_TITLE;
	const titleWidth = titleLines.reduce((max, line) => Math.max(max, estimateCoverTextWidth(line, fontSize)), 0);
	const subtitleWidth = subtitle ? estimateCoverTextWidth(subtitle, subtitleFontSize) : 0;
	return x + Math.max(titleWidth, subtitleWidth) + frameGap;
}
function buildLeftRoundedRectPath$1(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + width} ${y}`,
		`L ${x + r} ${y}`,
		`Q ${x} ${y} ${x} ${y + r}`,
		`L ${x} ${y + height - r}`,
		`Q ${x} ${y + height} ${x + r} ${y + height}`,
		`L ${x + width} ${y + height}`,
		`L ${x + width} ${y}`,
		"Z"
	].join(" ");
}
function buildLeftSidesBorderPath$1(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + width} ${y}`,
		`L ${x + r} ${y}`,
		`Q ${x} ${y} ${x} ${y + r}`,
		`L ${x} ${y + height - r}`,
		`Q ${x} ${y + height} ${x + r} ${y + height}`,
		`L ${x + width} ${y + height}`,
		`M ${x + width} ${y}`
	].join(" ");
}
function buildLeftRoundedClipPath(width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${width} 0`,
		`L ${r} 0`,
		`Q 0 0 0 ${r}`,
		`L 0 ${height - r}`,
		`Q 0 ${height} ${r} ${height}`,
		`L ${width} ${height}`,
		`L ${width} 0`,
		"Z"
	].join(" ");
}
function buildCoverScreenshotSideGlassFrameSvg(layout, glass) {
	const { shell, outerRadius, borderWidth: borderWidth$1 } = layout;
	const { x, y, width, height } = shell;
	const shellPath = buildLeftRoundedRectPath$1(x, y, width, height, outerRadius);
	const borderPath = buildLeftSidesBorderPath$1(x, y, width, height, outerRadius);
	return `
    <path d="${shellPath}" fill="${glass.shellFill}" />
    <path d="${borderPath}" fill="none" stroke="${glass.shellBorder}" stroke-width="${borderWidth$1}" stroke-linecap="round" stroke-linejoin="round" />
  `;
}
function buildScreenshotInnerBorderPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + width} ${y}`,
		`L ${x + r} ${y}`,
		`Q ${x} ${y} ${x} ${y + r}`,
		`L ${x} ${y + height - r}`,
		`Q ${x} ${y + height} ${x + r} ${y + height}`,
		`L ${x + width} ${y + height}`,
		`M ${x + width} ${y}`
	].join(" ");
}
function buildCoverScreenshotSideScreenshotBorderSvg(layout, borderColor) {
	const { screenshot, innerRadius } = layout;
	return `
    <path
      d="${buildScreenshotInnerBorderPath(screenshot.x, screenshot.y, screenshot.width, screenshot.height, innerRadius)}"
      fill="none"
      stroke="${borderColor}"
      stroke-width="1"
      opacity="0.75"
    />
  `;
}
function buildCoverScreenshotSideClipSvg(width, height, innerRadius) {
	return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><path d="${buildLeftRoundedClipPath(width, height, innerRadius)}" fill="#fff"/></svg>`;
}
function getCoverScreenshotSideShellDimensions(options) {
	const { paddingX, paddingTop, chromeHeight } = COVER_HERO_SCREENSHOT_FRAME;
	const { rightOverflowPercent, aspectRatio, leftOffset } = COVER_SCREENSHOT_SIDE_SHELL;
	const paddingBottom = paddingX;
	const maxContentHeight = Math.max(1, options.maxShellHeight - paddingTop - chromeHeight - paddingBottom);
	const fromWidth = () => {
		let shellWidth$1 = Math.max(1, options.shellWidth);
		let innerWidth$1 = Math.max(1, shellWidth$1 - paddingX * 2);
		let innerHeight$1 = Math.max(1, Math.round(innerWidth$1 / aspectRatio));
		let shellHeight$1 = paddingTop + chromeHeight + paddingBottom + innerHeight$1;
		if (shellHeight$1 > options.maxShellHeight) {
			shellHeight$1 = Math.max(1, options.maxShellHeight);
			innerHeight$1 = maxContentHeight;
			innerWidth$1 = Math.max(1, Math.round(innerHeight$1 * aspectRatio));
			shellWidth$1 = innerWidth$1 + paddingX * 2;
		}
		return {
			shellWidth: shellWidth$1,
			shellHeight: shellHeight$1,
			innerWidth: innerWidth$1,
			innerHeight: innerHeight$1
		};
	};
	const fromHeight = () => {
		const innerHeight$1 = maxContentHeight;
		const innerWidth$1 = Math.max(1, Math.round(innerHeight$1 * aspectRatio));
		return {
			shellWidth: innerWidth$1 + paddingX * 2,
			shellHeight: options.maxShellHeight,
			innerWidth: innerWidth$1,
			innerHeight: innerHeight$1
		};
	};
	const widthBased = fromWidth();
	const heightBased = fromHeight();
	const { shellWidth, shellHeight, innerWidth, innerHeight } = heightBased.innerHeight > widthBased.innerHeight ? heightBased : widthBased;
	const rightOverflow = Math.round(shellWidth * (rightOverflowPercent / 100));
	let frameX = COVER_WIDTH - shellWidth + rightOverflow;
	frameX = Math.max(frameX, options.minFrameX - leftOffset);
	const availableHeight = 630 - COVER_SCREENSHOT_SIDE_SHELL.verticalInset * 2;
	const frameY = COVER_SCREENSHOT_SIDE_SHELL.verticalInset + Math.round((availableHeight - shellHeight) / 2);
	return {
		shellWidth,
		shellHeight,
		innerWidth,
		innerHeight,
		frameX,
		frameY,
		rightOverflow
	};
}
function buildCoverScreenshotSideFrameShellLayout(dimensions) {
	const { paddingX, paddingTop, chromeHeight, outerRadius, defaultInnerRadius } = COVER_HERO_SCREENSHOT_FRAME;
	const { shellWidth, shellHeight, innerWidth, innerHeight, frameX, frameY } = dimensions;
	return {
		shell: {
			x: frameX,
			y: frameY,
			width: shellWidth,
			height: shellHeight
		},
		screenshot: {
			x: frameX + paddingX,
			y: frameY + paddingTop + chromeHeight,
			width: innerWidth,
			height: innerHeight
		},
		outerRadius,
		innerRadius: defaultInnerRadius,
		borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth,
		paddingX,
		paddingTop,
		chromeHeight
	};
}
function getCoverScreenshotSideTitleLines(data) {
	return data.title ? wrapTextLines(stripCoverTitleSuffix(data.title), COVER_SCREENSHOT_SIDE_TITLE.maxCharsPerLine, COVER_SCREENSHOT_SIDE_TITLE.maxLines) : [];
}
function getCoverScreenshotSideTitleLayout(data, canvas) {
	const titleLines = getCoverScreenshotSideTitleLines(data);
	const layoutTransform = getCoverContentLayoutTransform(canvas.width, canvas.height, "right");
	const { scale } = layoutTransform;
	const { x, lineHeight, subtitleFontSize, subtitleGap } = COVER_SCREENSHOT_SIDE_TITLE;
	const titleBlockHeightExport = (titleLines.length > 0 ? titleLines.length * lineHeight : 0) + (titleLines.length > 0 && data.subtitle ? subtitleGap : 0) + (data.subtitle ? subtitleFontSize + 8 : 0);
	const titleYExport = titleBlockHeightExport > 0 ? (canvas.height - titleBlockHeightExport * scale) / 2 : canvas.height / 2;
	const lineHeightExport = lineHeight * scale;
	const subtitleGapExport = subtitleGap * scale;
	const titleXExport = x * scale;
	const subtitleYExport = titleLines.length > 0 ? titleYExport + titleLines.length * lineHeightExport + subtitleGapExport : titleYExport + subtitleGapExport;
	return {
		titleLines,
		titleXArtboard: titleXExport / scale,
		titleYArtboard: coverExportYToArtboardY(titleYExport, layoutTransform),
		subtitleYArtboard: coverExportYToArtboardY(subtitleYExport, layoutTransform)
	};
}
function getCoverScreenshotSideSceneLayout(data) {
	const canvas = {
		width: data.width,
		height: data.height
	};
	const { titleLines, titleXArtboard, titleYArtboard, subtitleYArtboard } = getCoverScreenshotSideTitleLayout(data, canvas);
	const requestedShellWidth = getCoverFrameWidthPx(data.frameWidthPercent, canvas);
	const availableHeight = 630 - COVER_SCREENSHOT_SIDE_SHELL.verticalInset * 2;
	const frameHeightPercent = clampCoverFrameHeightPercent(data.frameHeightPercent ?? COVER_SCREENSHOT_FRAME_HEIGHT.defaultPercent);
	const dimensions = getCoverScreenshotSideShellDimensions({
		shellWidth: requestedShellWidth,
		maxShellHeight: Math.max(1, Math.round(availableHeight * frameHeightPercent / 100)),
		minFrameX: getCoverScreenshotSideMinFrameX(titleLines, data.subtitle)
	});
	return {
		titleLines,
		layout: buildCoverScreenshotSideFrameShellLayout(dimensions),
		titleX: titleXArtboard,
		titleY: titleYArtboard,
		subtitleY: subtitleYArtboard,
		frameWidth: dimensions.shellWidth,
		frameHeight: dimensions.shellHeight,
		rightOverflow: dimensions.rightOverflow
	};
}
function buildLeftRoundedRectPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + width} ${y}`,
		`L ${x + r} ${y}`,
		`Q ${x} ${y} ${x} ${y + r}`,
		`L ${x} ${y + height - r}`,
		`Q ${x} ${y + height} ${x + r} ${y + height}`,
		`L ${x + width} ${y + height}`,
		`L ${x + width} ${y}`,
		"Z"
	].join(" ");
}
function buildLeftSidesBorderPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + width} ${y}`,
		`L ${x + r} ${y}`,
		`Q ${x} ${y} ${x} ${y + r}`,
		`L ${x} ${y + height - r}`,
		`Q ${x} ${y + height} ${x + r} ${y + height}`,
		`L ${x + width} ${y + height}`,
		`M ${x + width} ${y}`
	].join(" ");
}
function buildCoverCliCodeGlassFrameSvg(layout, glass) {
	const { shell, outerRadius, borderWidth: borderWidth$1 } = layout;
	const { x, y, width, height } = shell;
	const shellPath = buildLeftRoundedRectPath(x, y, width, height, outerRadius);
	const borderPath = buildLeftSidesBorderPath(x, y, width, height, outerRadius);
	return `
    <path d="${shellPath}" fill="${glass.shellFill}" />
    <path d="${borderPath}" fill="none" stroke="${glass.shellBorder}" stroke-width="${borderWidth$1}" stroke-linecap="round" stroke-linejoin="round" />
  `;
}
function buildCoverCliCodeTrafficLightsSvg(header, glass) {
	const { terminalDotSize, terminalDotGap, terminalDotMarginLeft, terminalHeaderHeight } = COVER_CLI_CODE;
	const dotY = header.y + terminalHeaderHeight / 2;
	const dotStartX = header.x + terminalDotMarginLeft + terminalDotSize / 2;
	return Array.from({ length: 3 }, (_, index) => {
		return `<circle cx="${dotStartX + index * (terminalDotSize + terminalDotGap)}" cy="${dotY}" r="${terminalDotSize / 2}" fill="${glass.chromeDotFill}" />`;
	}).join("\n    ");
}
function buildCoverCliCodeTerminalHeaderSvg(options) {
	const { layout, glass, terminalTitle, terminalIconHref, mutedForeground, borderColor } = options;
	const { header, innerRadius } = layout;
	const { terminalHeaderHeight, terminalTitleFontSize, terminalIconSize, terminalIconGap } = COVER_CLI_CODE;
	const titleText = terminalTitle.trim();
	const dotsReservedWidth = COVER_CLI_CODE.terminalDotMarginLeft + COVER_CLI_CODE.terminalDotSize * 3 + COVER_CLI_CODE.terminalDotGap * 2 + 12;
	const availableTitleWidth = Math.max(1, header.width - dotsReservedWidth * 2);
	const maxTitleChars = Math.max(4, Math.floor(availableTitleWidth / (terminalTitleFontSize * .52)));
	const displayTitle = titleText.length <= maxTitleChars ? titleText : `${titleText.slice(0, Math.max(4, maxTitleChars - 1))}…`;
	const titleWidth = displayTitle.length * terminalTitleFontSize * .52;
	const lockupWidth = (terminalIconHref ? terminalIconSize + terminalIconGap : 0) + titleWidth;
	const lockupStartX = header.x + (header.width - lockupWidth) / 2;
	const iconY = header.y + (terminalHeaderHeight - terminalIconSize) / 2;
	const titleX = lockupStartX + (terminalIconHref ? terminalIconSize + terminalIconGap : 0);
	const titleY = coverSvgTextBaseline(header.y + (terminalHeaderHeight - terminalTitleFontSize) / 2, terminalTitleFontSize);
	return `
    ${buildCoverCliCodeTrafficLightsSvg(header, glass)}
    ${terminalIconHref ? `<image href="${terminalIconHref}" x="${Math.round(lockupStartX)}" y="${Math.round(iconY)}" width="${terminalIconSize}" height="${terminalIconSize}" />` : ""}
    ${displayTitle ? `<text class="cover-body" fill="${mutedForeground}" font-size="${terminalTitleFontSize}" font-weight="600" x="${Math.round(titleX)}" y="${titleY}">${escapeXml(displayTitle)}</text>` : ""}
    <line
      x1="${header.x + innerRadius}"
      y1="${header.y + terminalHeaderHeight}"
      x2="${header.x + header.width}"
      y2="${header.y + terminalHeaderHeight}"
      stroke="${borderColor}"
      stroke-width="1"
      opacity="0.55"
    />
  `;
}
function getCoverCliCodeShellDimensions(options) {
	const { paddingX } = COVER_HERO_SCREENSHOT_FRAME;
	const { rightOverflowPercent, leftOffset } = COVER_SCREENSHOT_SIDE_SHELL;
	const { terminalHeaderHeight } = COVER_CLI_CODE;
	const paddingBottom = paddingX;
	const innerWidth = Math.max(1, options.shellWidth - paddingX * 2);
	const codeHeight = Math.max(1, options.codeContentHeight);
	const shellHeight = terminalHeaderHeight + codeHeight + paddingBottom;
	const shellWidth = innerWidth + paddingX * 2;
	const rightOverflow = Math.round(shellWidth * (rightOverflowPercent / 100));
	let frameX = COVER_WIDTH - shellWidth + rightOverflow;
	frameX = Math.max(frameX, options.minFrameX - leftOffset);
	const availableHeight = 630 - COVER_SCREENSHOT_SIDE_SHELL.verticalInset * 2;
	const frameY = COVER_SCREENSHOT_SIDE_SHELL.verticalInset + Math.round((availableHeight - shellHeight) / 2);
	return {
		shellWidth,
		shellHeight,
		innerWidth,
		codeHeight,
		frameX,
		frameY
	};
}
function buildCoverCliCodeFrameShellLayout(dimensions) {
	const { paddingX, outerRadius, defaultInnerRadius } = COVER_HERO_SCREENSHOT_FRAME;
	const { terminalHeaderHeight } = COVER_CLI_CODE;
	const { shellWidth, shellHeight, innerWidth, codeHeight, frameX, frameY } = dimensions;
	const headerY = frameY;
	const codeY = frameY + terminalHeaderHeight;
	return {
		shell: {
			x: frameX,
			y: frameY,
			width: shellWidth,
			height: shellHeight
		},
		header: {
			x: frameX + paddingX,
			y: headerY,
			width: innerWidth,
			height: terminalHeaderHeight
		},
		code: {
			x: frameX + paddingX,
			y: codeY,
			width: innerWidth,
			height: codeHeight
		},
		outerRadius,
		innerRadius: defaultInnerRadius,
		borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth
	};
}
function getCoverCliCodeTitleLines(data) {
	return data.title ? wrapTextLines(stripCoverTitleSuffix(data.title), COVER_SCREENSHOT_SIDE_TITLE.maxCharsPerLine, COVER_SCREENSHOT_SIDE_TITLE.maxLines) : [];
}
function getCoverCliCodeTitleLayout(data, canvas) {
	const titleLines = getCoverCliCodeTitleLines(data);
	const layoutTransform = getCoverContentLayoutTransform(canvas.width, canvas.height, "right");
	const { scale } = layoutTransform;
	const { x, lineHeight, subtitleFontSize, subtitleGap } = COVER_SCREENSHOT_SIDE_TITLE;
	const titleBlockHeightExport = (titleLines.length > 0 ? titleLines.length * lineHeight : 0) + (titleLines.length > 0 && data.subtitle ? subtitleGap : 0) + (data.subtitle ? subtitleFontSize + 8 : 0);
	const titleYExport = titleBlockHeightExport > 0 ? (canvas.height - titleBlockHeightExport * scale) / 2 : canvas.height / 2;
	const lineHeightExport = lineHeight * scale;
	const subtitleGapExport = subtitleGap * scale;
	const titleXExport = x * scale;
	const subtitleYExport = titleLines.length > 0 ? titleYExport + titleLines.length * lineHeightExport + subtitleGapExport : titleYExport + subtitleGapExport;
	return {
		titleLines,
		titleXArtboard: titleXExport / scale,
		titleYArtboard: coverExportYToArtboardY(titleYExport, layoutTransform),
		subtitleYArtboard: coverExportYToArtboardY(subtitleYExport, layoutTransform)
	};
}
function getCoverCliCodeSceneLayout(data) {
	const canvas = {
		width: data.width,
		height: data.height
	};
	const codeLines = parseCoverCliCodeLines(data.code);
	const { titleLines, titleXArtboard, titleYArtboard, subtitleYArtboard } = getCoverCliCodeTitleLayout(data, canvas);
	const lineCount = Math.max(1, codeLines.length);
	const codeContentHeight = COVER_CLI_CODE.codePaddingY * 2 + lineCount * COVER_CLI_CODE.codeFontSize;
	return {
		titleLines,
		layout: buildCoverCliCodeFrameShellLayout(getCoverCliCodeShellDimensions({
			shellWidth: getCoverFrameWidthPx(data.frameWidthPercent, canvas),
			codeContentHeight,
			minFrameX: getCoverScreenshotSideMinFrameX(titleLines, data.subtitle)
		})),
		codeLines,
		titleX: titleXArtboard,
		titleY: titleYArtboard,
		subtitleY: subtitleYArtboard
	};
}
function coverCliCodeLineY(codeY, index, fontSize) {
	return coverSvgTextBaseline(codeY + COVER_CLI_CODE.codePaddingY + index * fontSize, fontSize);
}
function buildCoverCliCodeLinesSvg(options) {
	const { lines, showPrompt, layout, themeFamily, foreground, promptColor, codeBackground } = options;
	const { code, innerRadius } = layout;
	const { codePaddingX, codeFontSize, promptWidth } = COVER_CLI_CODE;
	const lineElements = lines.map((line, index) => {
		const y = coverCliCodeLineY(code.y, index, codeFontSize);
		const commandX = code.x + codePaddingX + (showPrompt ? promptWidth : 0);
		const isComment = line.trim().startsWith("#");
		const tokens = tokenizeCoverCliCodeLine(line, themeFamily, foreground);
		return `
        ${showPrompt && !isComment ? `<text class="cover-code" fill="${promptColor}" font-size="${codeFontSize}" font-weight="600" x="${code.x + codePaddingX}" y="${y}">$</text>` : ""}
        ${buildCoverCliCodeTokenTspans(tokens, commandX, codeFontSize, y)}
      `;
	}).join("");
	return `
    <rect
      x="${code.x}"
      y="${code.y}"
      width="${code.width}"
      height="${code.height}"
      rx="${innerRadius}"
      ry="${innerRadius}"
      fill="${codeBackground}"
      opacity="0.92"
    />
    ${lineElements}
  `;
}
function buildCliCodeTitleSvgContent(data, titleLines, titleX, titleY, subtitleY) {
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	const { fontSize, lineHeight, subtitleFontSize } = COVER_SCREENSHOT_SIDE_TITLE;
	return `
    ${titleLines.length ? titleLines.map((line, index) => `<text text-anchor="start" class="cover-title" fill="${brand.foreground}" font-size="${fontSize}" x="${titleX}" y="${coverSvgTextBaseline(titleY + index * lineHeight, fontSize)}">${escapeXml(line)}${index === titleLines.length - 1 ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`).join("") : ""}
    ${data.subtitle ? `<text text-anchor="start" class="cover-body" fill="${brand.mutedForeground}" font-size="${subtitleFontSize}" x="${titleX}" y="${coverSvgTextBaseline(subtitleY, subtitleFontSize)}">${escapeXml(data.subtitle)}</text>` : ""}
  `;
}
async function renderCliCodeTemplateSvg(data, themeId) {
	const normalized = normalizeCoverCliCodeData(data);
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const theme = getCoverTheme(themeId);
	const glass = getCoverScreenshotGlassColors(themeId);
	const { titleLines, layout, codeLines, titleX, titleY, subtitleY } = getCoverCliCodeSceneLayout(normalized);
	const codeBackground = theme.family === "dark" ? "rgba(0, 0, 0, 0.35)" : "rgba(9, 9, 11, 0.06)";
	const terminalIconHref = await prepareCoverIconDataUri(normalized.terminalIcon, COVER_CLI_CODE.terminalIconSize, {
		themeFamily: theme.family,
		themeId,
		contentAlign: "left",
		insetRatio: .08
	});
	return `
    ${buildCliCodeTitleSvgContent(normalized, titleLines, titleX, titleY, subtitleY)}
    ${buildCoverCliCodeGlassFrameSvg(layout, glass)}
    ${buildCoverCliCodeTerminalHeaderSvg({
		layout,
		glass,
		terminalTitle: normalized.terminalTitle,
		terminalIconHref,
		mutedForeground: brand.mutedForeground,
		borderColor: brand.border
	})}
    ${buildCoverCliCodeLinesSvg({
		lines: codeLines,
		showPrompt: normalized.showPrompt,
		layout,
		themeFamily: theme.family,
		foreground: brand.foreground,
		mutedForeground: brand.mutedForeground,
		promptColor: brand.brandCta,
		codeBackground
	})}
  `;
}
var ACTIVITY_BAR_ICONS = [
	{
		id: "files",
		active: true
	},
	{ id: "search" },
	{ id: "git" },
	{ id: "extensions" },
	{ id: "settings" }
];
function buildActivityBarIconSvg(icon, centerX, centerY, size, inactiveColor, activeColor) {
	const color = icon.active ? activeColor : inactiveColor;
	const opacity = icon.active ? .88 : .38;
	const s = size;
	const half = s / 2;
	switch (icon.id) {
		case "files": return `
        <rect x="${centerX - half + 1}" y="${centerY - half + 2}" width="${s - 2}" height="${s - 1}" rx="2" fill="none" stroke="${color}" stroke-width="1.5" opacity="${opacity}" />
        <rect x="${centerX - half + 4}" y="${centerY - half + 6}" width="${s - 8}" height="1.5" rx="0.75" fill="${color}" opacity="${opacity * .7}" />
        <rect x="${centerX - half + 4}" y="${centerY - half + 9}" width="${s - 10}" height="1.5" rx="0.75" fill="${color}" opacity="${opacity * .5}" />
      `;
		case "search": return `
        <circle cx="${centerX - 1}" cy="${centerY - 1}" r="${half - 3}" fill="none" stroke="${color}" stroke-width="1.75" opacity="${opacity}" />
        <line x1="${centerX + half - 5}" y1="${centerY + half - 5}" x2="${centerX + half - 1}" y2="${centerY + half - 1}" stroke="${color}" stroke-width="1.75" stroke-linecap="round" opacity="${opacity}" />
      `;
		case "git": return `
        <circle cx="${centerX - 3}" cy="${centerY - 4}" r="2.25" fill="${color}" opacity="${opacity}" />
        <circle cx="${centerX + 3}" cy="${centerY + 4}" r="2.25" fill="${color}" opacity="${opacity}" />
        <path d="M ${centerX - 3} ${centerY - 1.75} V ${centerY + 1.75}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="${opacity}" />
        <path d="M ${centerX - 3} ${centerY + 1.75} Q ${centerX} ${centerY + 1.75} ${centerX + 3} ${centerY + 1.75}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="${opacity}" />
      `;
		case "extensions":
			const grid = s - 6;
			const cell = grid / 2 - 1;
			const gx = centerX - grid / 2;
			const gy = centerY - grid / 2;
			return `
        <rect x="${gx}" y="${gy}" width="${cell}" height="${cell}" rx="1.5" fill="${color}" opacity="${opacity}" />
        <rect x="${gx + cell + 2}" y="${gy}" width="${cell}" height="${cell}" rx="1.5" fill="${color}" opacity="${opacity * .75}" />
        <rect x="${gx}" y="${gy + cell + 2}" width="${cell}" height="${cell}" rx="1.5" fill="${color}" opacity="${opacity * .75}" />
        <rect x="${gx + cell + 2}" y="${gy + cell + 2}" width="${cell}" height="${cell}" rx="1.5" fill="${color}" opacity="${opacity * .55}" />
      `;
		case "settings": return `
        <circle cx="${centerX}" cy="${centerY}" r="${half - 2}" fill="none" stroke="${color}" stroke-width="1.5" opacity="${opacity}" />
        <circle cx="${centerX}" cy="${centerY}" r="2" fill="${color}" opacity="${opacity * .85}" />
        <circle cx="${centerX}" cy="${centerY - half + 2}" r="1.5" fill="${color}" opacity="${opacity}" />
        <circle cx="${centerX + half - 2}" cy="${centerY}" r="1.5" fill="${color}" opacity="${opacity}" />
        <circle cx="${centerX}" cy="${centerY + half - 2}" r="1.5" fill="${color}" opacity="${opacity}" />
        <circle cx="${centerX - half + 2}" cy="${centerY}" r="1.5" fill="${color}" opacity="${opacity}" />
      `;
		default: return "";
	}
}
function buildCoverCodeSnippetActivityBarSvg(options) {
	const { x, y, width, dividerX, dividerY, dividerHeight, borderColor, mutedIconColor, activeIconColor, accentColor } = options;
	const { activityBarIconSize, activityBarIconGap, activityBarPaddingTop } = COVER_CODE_SNIPPET;
	const iconCenterX = x + width / 2;
	const icons = ACTIVITY_BAR_ICONS.map((icon, index) => {
		const iconY = y + activityBarPaddingTop + index * (activityBarIconSize + activityBarIconGap) + activityBarIconSize / 2;
		return `
      ${icon.active ? `<rect x="${x + 4}" y="${iconY - activityBarIconSize / 2 + 2}" width="2" height="${activityBarIconSize - 4}" rx="1" fill="${accentColor}" opacity="0.95" />` : ""}
      ${buildActivityBarIconSvg(icon, iconCenterX, iconY, activityBarIconSize, mutedIconColor, activeIconColor)}
    `;
	}).join("");
	return `
    <line
      x1="${dividerX}"
      y1="${dividerY}"
      x2="${dividerX}"
      y2="${dividerY + dividerHeight}"
      stroke="${borderColor}"
      stroke-width="1"
      opacity="0.35"
    />
    ${icons}
  `;
}
function resolvePrismTokenColor(types, colors, defaultColor) {
	const joined = types.join(" ");
	if (joined.includes("comment") || joined.includes("prolog") || joined.includes("doctype") || joined.includes("cdata")) return colors.comment;
	if (joined.includes("namespace")) return colors.moduleKeyword;
	if (joined.includes("keyword") || joined.includes("builtin") || joined.includes("changed") || joined.includes("interpolation-punctuation") || joined.includes("selector") || joined.includes("tag") || joined.includes("delimiter")) return colors.keyword;
	if (joined.includes("function") || joined.includes("method") || joined.includes("macro")) return colors.function;
	if (joined.includes("class-name") || joined.includes("return-type") || joined.includes("type")) return colors.moduleKeyword;
	if (joined.includes("variable") || joined.includes("attr-name") || joined.includes("property") || joined.includes("key")) return colors.property;
	if (joined.includes("string") || joined.includes("char") || joined.includes("attr-value") || joined.includes("template-punctuation") || joined.includes("regexp") || joined.includes("number") || joined.includes("inserted") || joined.includes("constant")) return colors.string;
	if (joined.includes("operator") || joined.includes("punctuation")) return defaultColor;
	return defaultColor;
}
function flattenPrismTokens(tokens, colors, defaultColor, parentTypes = [], parentColor) {
	const result = [];
	for (const token of tokens) {
		if (typeof token === "string") {
			if (!token) continue;
			result.push({
				content: token,
				color: parentColor ?? defaultColor
			});
			continue;
		}
		const alias = token.alias ? Array.isArray(token.alias) ? token.alias : [token.alias] : [];
		const types = [
			...parentTypes,
			token.type,
			...alias.map(String)
		];
		const color = resolvePrismTokenColor(types, colors, defaultColor);
		if (typeof token.content === "string") {
			if (!token.content) continue;
			result.push({
				content: token.content,
				color
			});
			continue;
		}
		if (Array.isArray(token.content)) {
			result.push(...flattenPrismTokens(token.content, colors, defaultColor, types, color));
			continue;
		}
		result.push(...flattenPrismTokens([token.content], colors, defaultColor, types, color));
	}
	return result;
}
function splitCoverCodeTokensIntoLines(tokens, defaultColor) {
	const lines = [];
	let currentLine = [];
	const pushLine = () => {
		if (currentLine.length === 0) lines.push([{
			content: " ",
			color: defaultColor
		}]);
		else lines.push(currentLine);
		currentLine = [];
	};
	for (const token of tokens) {
		let remaining = token.content;
		while (remaining.length > 0) {
			const newlineIndex = remaining.indexOf("\n");
			if (newlineIndex === -1) {
				if (remaining.length > 0) currentLine.push({
					content: remaining,
					color: token.color
				});
				break;
			}
			const before = remaining.slice(0, newlineIndex);
			if (before.length > 0) currentLine.push({
				content: before,
				color: token.color
			});
			pushLine();
			remaining = remaining.slice(newlineIndex + 1);
		}
	}
	if (currentLine.length > 0) lines.push(currentLine);
	return lines.length > 0 ? lines : [[{
		content: " ",
		color: defaultColor
	}]];
}
var COVER_SNIPPET_HEURISTIC_KEYWORDS = /\b(import|export|from|const|let|var|new|await|async|function|return|if|else|class|interface|type|extends|implements|public|private|protected|readonly|enum|namespace|declare|default|void|typeof|instanceof|in|of|try|catch|finally|throw|switch|case|break|continue|do|while|for|yield|super|this|def|fn|func|package|echo|print|println|using|struct|mut|impl|trait|lambda|yield|raise|except|elif|pass|nil|true|false|null|undefined)\b/iy;
var COVER_SNIPPET_HEURISTIC_STRING = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/y;
var COVER_SNIPPET_HEURISTIC_DELIMITER = /<\?php|<\?=|\?>|<\/?[a-zA-Z][^>]*>/y;
var COVER_SNIPPET_HEURISTIC_COMMENT = /\/\/.*|#.*$/y;
var COVER_SNIPPET_HEURISTIC_CLASS = /\b[A-Z][a-zA-Z0-9_]*\b/y;
var COVER_SNIPPET_HEURISTIC_METHOD = /\.[a-zA-Z_][\w]*/y;
var COVER_SNIPPET_HEURISTIC_NUMBER = /\b\d+(?:\.\d+)?\b/y;
function tokenizeCoverCodeSnippetHeuristicLine(line, colors, defaultColor) {
	const tokens = [];
	let index = 0;
	while (index < line.length) {
		const rest = line.slice(index);
		COVER_SNIPPET_HEURISTIC_STRING.lastIndex = 0;
		const stringMatch = COVER_SNIPPET_HEURISTIC_STRING.exec(rest);
		if (stringMatch && stringMatch.index === 0) {
			tokens.push({
				content: stringMatch[0],
				color: colors.string
			});
			index += stringMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_COMMENT.lastIndex = 0;
		const commentMatch = COVER_SNIPPET_HEURISTIC_COMMENT.exec(rest);
		if (commentMatch && commentMatch.index === 0) {
			tokens.push({
				content: commentMatch[0],
				color: colors.comment
			});
			index += commentMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_DELIMITER.lastIndex = 0;
		const delimiterMatch = COVER_SNIPPET_HEURISTIC_DELIMITER.exec(rest);
		if (delimiterMatch && delimiterMatch.index === 0) {
			tokens.push({
				content: delimiterMatch[0],
				color: colors.keyword
			});
			index += delimiterMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_KEYWORDS.lastIndex = 0;
		const keywordMatch = COVER_SNIPPET_HEURISTIC_KEYWORDS.exec(rest);
		if (keywordMatch && keywordMatch.index === 0) {
			tokens.push({
				content: keywordMatch[0],
				color: colors.keyword
			});
			index += keywordMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_CLASS.lastIndex = 0;
		const classMatch = COVER_SNIPPET_HEURISTIC_CLASS.exec(rest);
		if (classMatch && classMatch.index === 0) {
			tokens.push({
				content: classMatch[0],
				color: colors.moduleKeyword
			});
			index += classMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_METHOD.lastIndex = 0;
		const methodMatch = COVER_SNIPPET_HEURISTIC_METHOD.exec(rest);
		if (methodMatch && methodMatch.index === 0) {
			tokens.push({
				content: methodMatch[0],
				color: colors.function
			});
			index += methodMatch[0].length;
			continue;
		}
		COVER_SNIPPET_HEURISTIC_NUMBER.lastIndex = 0;
		const numberMatch = COVER_SNIPPET_HEURISTIC_NUMBER.exec(rest);
		if (numberMatch && numberMatch.index === 0) {
			tokens.push({
				content: numberMatch[0],
				color: colors.string
			});
			index += numberMatch[0].length;
			continue;
		}
		tokens.push({
			content: rest[0],
			color: defaultColor
		});
		index += 1;
	}
	return tokens.length > 0 ? tokens : [{
		content: " ",
		color: defaultColor
	}];
}
function tokenizeCoverCodeSnippetHeuristicLines(code, colors, defaultColor) {
	return code.split("\n").map((line) => {
		const trimmed = line.trimEnd();
		if (!trimmed) return [{
			content: " ",
			color: defaultColor
		}];
		return tokenizeCoverCodeSnippetHeuristicLine(trimmed, colors, defaultColor);
	});
}
function tokenizeCoverCodeSnippet(code, language, themeFamily, defaultColor) {
	const colors = getCodeSyntaxColors(themeFamily === "dark");
	const normalizedCode = code.replace(/\t/g, "  ");
	if (language === "plaintext") return normalizedCode.split("\n").map((line) => {
		const trimmed = line.trimEnd();
		return trimmed ? [{
			content: trimmed,
			color: defaultColor
		}] : [{
			content: " ",
			color: defaultColor
		}];
	});
	ensureCoverCodeSnippetPrismGrammars();
	const grammar = getCoverCodeSnippetPrismGrammar(language);
	if (!grammar) return tokenizeCoverCodeSnippetHeuristicLines(normalizedCode, colors, defaultColor);
	try {
		const flattened = flattenPrismTokens(getCoverPrism().tokenize(normalizedCode, grammar), colors, defaultColor);
		if (flattened.length === 0) return tokenizeCoverCodeSnippetHeuristicLines(normalizedCode, colors, defaultColor);
		return splitCoverCodeTokensIntoLines(flattened, defaultColor);
	} catch {
		return tokenizeCoverCodeSnippetHeuristicLines(normalizedCode, colors, defaultColor);
	}
}
var { borderWidth } = COVER_HERO_SCREENSHOT_FRAME;
var CODE_SNIPPET_CLIP_ID = "cover-code-snippet-code-clip";
function truncateTitle(title) {
	const text = stripCoverTitleSuffix(title).trim();
	if (text.length <= COVER_CODE_SNIPPET.maxTitleChars) return text;
	return `${text.slice(0, COVER_CODE_SNIPPET.maxTitleChars - 1)}…`;
}
function coverCodeSnippetLineY(codeY, index, fontSize, lineHeight) {
	return coverSvgTextBaseline(codeY + COVER_CODE_SNIPPET.codePaddingY + index * lineHeight, fontSize);
}
function renderCodeSnippetTemplateSvg(data, themeId) {
	const normalized = normalizeCoverCodeSnippetData(data);
	const artboardWidth = COVER_WIDTH;
	const artboardHeight = 630;
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const theme = getCoverTheme(themeId);
	const glass = getCoverScreenshotGlassColors(themeId);
	const titleText = truncateTitle(normalized.title);
	const codeFontSize = normalized.codeFontSize;
	const codeLineHeight = getCoverCodeSnippetLineHeight(codeFontSize);
	const frameWidth = getCoverFrameWidthPx(normalized.frameWidthPercent, {
		width: normalized.width,
		height: normalized.height
	});
	const innerRectWidth = frameWidth - COVER_CODE_SNIPPET.shellInsetX * 2;
	const codeColumnWidth = innerRectWidth - COVER_CODE_SNIPPET.activityBarWidth;
	const maxCharsForLine = (line) => getCoverCodeSnippetMaxCharsForLine(line, codeColumnWidth, codeFontSize);
	const maxCodeLines = getCoverCodeSnippetMaxLines(artboardHeight, Boolean(titleText), codeFontSize);
	const codeLines = parseCoverCodeSnippetLines(normalized.code, maxCodeLines, maxCharsForLine);
	const tokenLines = tokenizeCoverCodeSnippet(codeLines.join("\n"), normalized.language, theme.family, brand.foreground);
	const lineCount = Math.max(1, codeLines.length);
	const centerX = artboardWidth / 2;
	const lineBasedCodeContentHeight = COVER_CODE_SNIPPET.codePaddingY * 2 + lineCount * codeLineHeight;
	const codeContentHeight = Math.max(COVER_CODE_SNIPPET.minCodeContentHeight, lineBasedCodeContentHeight);
	const cardHeight = COVER_CODE_SNIPPET.headerHeight + codeContentHeight + COVER_CODE_SNIPPET.shellPaddingBottom;
	const titleHeight = titleText ? COVER_CODE_SNIPPET.titleLineHeight : 0;
	const titleCardGap = titleText ? COVER_CODE_SNIPPET.titleCardGap : 0;
	const compositionHeight = titleHeight + titleCardGap + cardHeight;
	const compositionY = Math.round((artboardHeight - compositionHeight) / 2);
	const cardY = compositionY + titleHeight + titleCardGap;
	const frameX = Math.round((artboardWidth - frameWidth) / 2);
	const codeBackground = theme.family === "dark" ? "rgba(0, 0, 0, 0.35)" : "rgba(9, 9, 11, 0.06)";
	const innerRectX = frameX + COVER_CODE_SNIPPET.shellInsetX;
	const activityBarWidth = COVER_CODE_SNIPPET.activityBarWidth;
	const codeX = innerRectX + activityBarWidth;
	const codeWidth = codeColumnWidth;
	const codeTextX = codeX + COVER_CODE_SNIPPET.codePaddingX;
	const codeAreaY = cardY + COVER_CODE_SNIPPET.headerHeight;
	const languageLabel = COVER_CODE_SNIPPET_LANGUAGE_LABELS[normalized.language];
	const indentOptions = {
		tabWidthSpaces: COVER_CODE_SNIPPET.tabWidthSpaces,
		charWidthRatio: COVER_CODE_SNIPPET.monoCharWidthRatio
	};
	const lineElements = codeLines.map((line, index) => {
		const y = coverCodeSnippetLineY(codeAreaY, index, codeFontSize, codeLineHeight);
		const indentPx = getCoverCodeLineIndentPx(line, codeFontSize, indentOptions);
		const lineContent = line.trimEnd().replace(/^\s+/, "");
		return buildCoverCodeTokenTexts(alignCoverCodeTokensToContent(lineContent, stripLeadingWhitespaceCoverTokens(tokenLines[index] ?? (lineContent ? [{
			content: lineContent,
			color: brand.foreground
		}] : [{
			content: " ",
			color: brand.foreground
		}]), brand.foreground), brand.foreground), codeTextX + indentPx, codeFontSize, y, COVER_CODE_SNIPPET.monoCharWidthRatio);
	}).join("");
	const titleSvg = titleText ? `<text class="cover-title" text-anchor="middle" fill="${brand.foreground}" font-size="${COVER_CODE_SNIPPET.titleFontSize}" font-weight="600" x="${centerX}" y="${coverSvgTextBaseline(compositionY, COVER_CODE_SNIPPET.titleFontSize)}">${escapeXml(titleText)}<tspan fill="${brand.brandCta}">_</tspan></text>` : "";
	const activityBarSvg = buildCoverCodeSnippetActivityBarSvg({
		x: innerRectX,
		y: codeAreaY,
		width: activityBarWidth,
		dividerX: codeX,
		dividerY: codeAreaY + 8,
		dividerHeight: codeContentHeight - 16,
		borderColor: brand.border,
		mutedIconColor: brand.mutedForeground,
		activeIconColor: brand.foreground,
		accentColor: brand.brandCta
	});
	const headerLabelY = coverSvgTextBaseline(cardY + (COVER_CODE_SNIPPET.headerHeight - COVER_CODE_SNIPPET.headerFontSize) / 2, COVER_CODE_SNIPPET.headerFontSize);
	const headerLabelX = innerRectX + innerRectWidth / 2;
	return `
    ${titleSvg}
    <g>
      <rect
        x="${frameX}"
        y="${cardY}"
        width="${frameWidth}"
        height="${cardHeight}"
        rx="${COVER_CODE_SNIPPET.outerRadius}"
        ry="${COVER_CODE_SNIPPET.outerRadius}"
        fill="${glass.shellFill}"
        stroke="${glass.shellBorder}"
        stroke-width="${borderWidth}"
      />
      ${activityBarSvg}
      <text
        class="cover-body"
        text-anchor="middle"
        fill="${brand.mutedForeground}"
        font-size="${COVER_CODE_SNIPPET.headerFontSize}"
        font-weight="600"
        x="${headerLabelX}"
        y="${headerLabelY}"
      >${escapeXml(languageLabel)}</text>
      <rect
        x="${codeX}"
        y="${codeAreaY}"
        width="${codeWidth}"
        height="${codeContentHeight}"
        rx="${COVER_CODE_SNIPPET.innerRadius}"
        ry="${COVER_CODE_SNIPPET.innerRadius}"
        fill="${codeBackground}"
        opacity="0.92"
      />
      <clipPath id="${CODE_SNIPPET_CLIP_ID}">
        <rect
          x="${codeX}"
          y="${codeAreaY}"
          width="${codeWidth}"
          height="${codeContentHeight}"
          rx="${COVER_CODE_SNIPPET.innerRadius}"
          ry="${COVER_CODE_SNIPPET.innerRadius}"
        />
      </clipPath>
      <g clip-path="url(#${CODE_SNIPPET_CLIP_ID})">
        ${lineElements}
      </g>
    </g>
  `;
}
var COVER_CONTENT_X$1 = 96;
var COVER_EYEBROW_FONT_SIZE$1 = 18;
var COVER_EYEBROW_TITLE_GAP = 28;
var COVER_STAT_LABEL_FONT_SIZE = 22;
var COVER_TITLE_FONT_SIZE = 58;
var COVER_SUBTITLE_FONT_SIZE = 26;
var COVER_TITLE_LINE_STEP = COVER_TITLE_FONT_SIZE + 8;
function getMilestoneStatFontSize(stat) {
	const length = stat.trim().length;
	if (length <= 3) return 168;
	if (length <= 5) return 140;
	if (length <= 7) return 118;
	return 96;
}
function getMilestoneCenteredStatFontSize(stat) {
	const length = stat.trim().length;
	if (length <= 3) return 212;
	if (length <= 5) return 176;
	if (length <= 7) return 148;
	return 120;
}
function getMilestoneCenteredHeroStatFontSize(stat) {
	const length = stat.trim().length;
	if (length <= 3) return 252;
	if (length <= 5) return 212;
	if (length <= 7) return 176;
	return 144;
}
var COVER_MILESTONE_CENTERED_STAT_LABEL_FONT_SIZE = 32;
var COVER_MILESTONE_CENTERED_STAT_LABEL_GAP = 10;
var COVER_MILESTONE_CENTERED_STAT_TITLE_GAP = 52;
var COVER_MILESTONE_CENTERED_BOTTOM_PADDING = 12;
var COVER_MILESTONE_SPLIT_STAT_LABEL_FONT_SIZE = 32;
var COVER_MILESTONE_CENTERED_TITLE_MAX_WIDTH = COVER_WIDTH - COVER_CONTENT_X$1 * 2;
var COVER_MILESTONE_SPLIT_CENTER_X = COVER_WIDTH * .75;
function getMilestoneCenteredTitleFontSize(title) {
	const text = stripCoverTitleSuffix(title);
	const length = Math.max(text.length, 1);
	return clampNumber(Math.floor(COVER_MILESTONE_CENTERED_TITLE_MAX_WIDTH / (length * .62)), 28, 46);
}
function buildStatGradientBounds(x, y, stat, fontSize) {
	const width = Math.min(COVER_WIDTH - x - COVER_CONTENT_X$1, stat.length * fontSize * .62);
	return {
		x,
		y,
		width: Math.max(width, 120),
		height: fontSize
	};
}
function renderEyebrow(eyebrow, x, layoutY, brand) {
	const eyebrowText = formatCoverEyebrow(eyebrow);
	if (!eyebrowText) return "";
	return `<text class="cover-eyebrow" fill="${brand.mutedForeground}" font-size="${COVER_EYEBROW_FONT_SIZE$1}" font-weight="600" letter-spacing="0.25em" x="${x}" y="${coverSvgTextBaseline(layoutY, COVER_EYEBROW_FONT_SIZE$1)}">${escapeXml(eyebrowText)}<tspan fill="${brand.brandCta}">_</tspan></text>`;
}
function renderTitleBlock(title, subtitle, x, startY, brand, maxChars = 22) {
	const titleLines = wrapTextLines(stripCoverTitleSuffix(title), maxChars, 3);
	const titleSvg = titleLines.map((line, index) => {
		const layoutY = startY + index * COVER_TITLE_LINE_STEP;
		return `<text class="cover-title" fill="${brand.foreground}" font-size="${COVER_TITLE_FONT_SIZE}" x="${x}" y="${coverSvgTextBaseline(layoutY, COVER_TITLE_FONT_SIZE)}">${escapeXml(line)}${index === titleLines.length - 1 ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`;
	}).join("");
	const subtitleLayoutY = startY + titleLines.length * COVER_TITLE_LINE_STEP + (subtitle ? 22 : 0);
	return `
    ${titleSvg}
    ${subtitle ? `<text class="cover-body" fill="${brand.mutedForeground}" font-size="${COVER_SUBTITLE_FONT_SIZE}" x="${x}" y="${coverSvgTextBaseline(subtitleLayoutY, COVER_SUBTITLE_FONT_SIZE)}">${escapeXml(subtitle)}</text>` : ""}
  `;
}
function renderStatBlock(params) {
	const fontSize = params.statFontSize ?? getMilestoneStatFontSize(params.stat);
	const statLabelFontSize = params.statLabelFontSize ?? COVER_STAT_LABEL_FONT_SIZE;
	const statLabelGap = params.statLabelGap ?? 16;
	const anchor = params.textAnchor ?? "start";
	const statBaseline = coverSvgTextBaseline(params.statLayoutY, fontSize);
	const labelLayoutY = params.statLayoutY + fontSize + statLabelGap;
	return {
		svg: `
    <text class="cover-title" fill="${params.statFill}" font-size="${fontSize}" x="${params.x}" y="${statBaseline}" text-anchor="${anchor}">${escapeXml(params.stat.trim())}</text>
    ${params.statLabel ? `<text class="cover-body" fill="${params.brand.mutedForeground}" font-size="${statLabelFontSize}" x="${params.x}" y="${coverSvgTextBaseline(labelLayoutY, statLabelFontSize)}" text-anchor="${anchor}">${escapeXml(params.statLabel)}</text>` : ""}
  `,
		fontSize
	};
}
function renderMilestoneSplitTemplateSvg(data, theme) {
	const brand = getCoverBrandThemeForSvgExport(theme);
	const statFill = getTitleFill(brand, data.gradientStat);
	const eyebrowLayoutY = 188;
	const copyStartY = data.eyebrow ? eyebrowLayoutY + COVER_EYEBROW_FONT_SIZE$1 + COVER_EYEBROW_TITLE_GAP : 210;
	const statFontSize = getMilestoneCenteredStatFontSize(data.stat);
	const statLabelFontSize = COVER_MILESTONE_SPLIT_STAT_LABEL_FONT_SIZE;
	const statLabelGap = 20;
	const statBlockHeight = statFontSize + (data.statLabel ? statLabelFontSize + statLabelGap : 0);
	const statLayoutY = Math.round((630 - statBlockHeight) / 2);
	const statBlock = renderStatBlock({
		stat: data.stat,
		statLabel: data.statLabel,
		x: COVER_MILESTONE_SPLIT_CENTER_X,
		statLayoutY,
		statFill,
		brand,
		textAnchor: "middle",
		statFontSize,
		statLabelFontSize,
		statLabelGap
	});
	const gradientWidth = Math.min(COVER_WIDTH / 2 - COVER_CONTENT_X$1, data.stat.length * statBlock.fontSize * .62);
	return {
		titleGradientBounds: data.gradientStat ? buildStatGradientBounds(COVER_MILESTONE_SPLIT_CENTER_X - gradientWidth / 2, statLayoutY, data.stat, statBlock.fontSize) : void 0,
		content: `
      ${renderEyebrow(data.eyebrow, COVER_CONTENT_X$1, eyebrowLayoutY, brand)}
      ${renderTitleBlock(data.title, data.subtitle, COVER_CONTENT_X$1, copyStartY, brand, 20)}
      ${statBlock.svg}
    `
	};
}
function renderMilestoneCenteredTemplateSvg(data, theme) {
	const brand = getCoverBrandThemeForSvgExport(theme);
	const statFill = getTitleFill(brand, data.gradientStat);
	const centerX = COVER_WIDTH / 2;
	const statFontSize = getMilestoneCenteredHeroStatFontSize(data.stat);
	const statLabelFontSize = COVER_MILESTONE_CENTERED_STAT_LABEL_FONT_SIZE;
	const statLabelGap = COVER_MILESTONE_CENTERED_STAT_LABEL_GAP;
	const eyebrowText = formatCoverEyebrow(data.eyebrow);
	const titleLine = wrapTextLines(stripCoverTitleSuffix(data.title), 120, 1)[0] ?? stripCoverTitleSuffix(data.title);
	const titleFontSize = getMilestoneCenteredTitleFontSize(titleLine);
	const titleLineStep = titleFontSize + 8;
	const eyebrowBlockHeight = eyebrowText ? COVER_EYEBROW_FONT_SIZE$1 + 28 : 0;
	const statBlockHeight = statFontSize + (data.statLabel ? statLabelFontSize + statLabelGap : 0);
	const titleBlockHeight = titleLineStep;
	const subtitleBlockHeight = data.subtitle ? COVER_SUBTITLE_FONT_SIZE + 20 : 0;
	const totalHeight = eyebrowBlockHeight + statBlockHeight + COVER_MILESTONE_CENTERED_STAT_TITLE_GAP + titleBlockHeight + subtitleBlockHeight + COVER_MILESTONE_CENTERED_BOTTOM_PADDING;
	let cursorY = Math.round((630 - totalHeight) / 2);
	const parts = [];
	if (eyebrowText) {
		parts.push(`<text class="cover-eyebrow" fill="${brand.mutedForeground}" font-size="${COVER_EYEBROW_FONT_SIZE$1}" font-weight="600" letter-spacing="0.25em" x="${centerX}" y="${coverSvgTextBaseline(cursorY, COVER_EYEBROW_FONT_SIZE$1)}" text-anchor="middle">${escapeXml(eyebrowText)}<tspan fill="${brand.brandCta}">_</tspan></text>`);
		cursorY += eyebrowBlockHeight;
	}
	const statLayoutY = cursorY;
	parts.push(renderStatBlock({
		stat: data.stat,
		statLabel: data.statLabel,
		x: centerX,
		statLayoutY,
		statFill,
		brand,
		textAnchor: "middle",
		statFontSize,
		statLabelFontSize,
		statLabelGap
	}).svg);
	cursorY += statBlockHeight + COVER_MILESTONE_CENTERED_STAT_TITLE_GAP;
	parts.push(`<text class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="${centerX}" y="${coverSvgTextBaseline(cursorY, titleFontSize)}" text-anchor="middle">${escapeXml(titleLine)}<tspan fill="${brand.brandCta}">_</tspan></text>`);
	cursorY += titleBlockHeight + (data.subtitle ? 20 : 0);
	if (data.subtitle) parts.push(`<text class="cover-body" fill="${brand.mutedForeground}" font-size="${COVER_SUBTITLE_FONT_SIZE}" x="${centerX}" y="${coverSvgTextBaseline(cursorY, COVER_SUBTITLE_FONT_SIZE)}" text-anchor="middle">${escapeXml(data.subtitle)}</text>`);
	return {
		titleGradientBounds: data.gradientStat ? buildStatGradientBounds(centerX - 280, statLayoutY, data.stat, statFontSize) : void 0,
		content: parts.join("")
	};
}
var COVER_CONTENT_X = 64;
var COVER_EYEBROW_FONT_SIZE = 18;
var COVER_EYEBROW_VERSION_GAP = 20;
var COVER_VERSION_TITLE_GAP = 36;
var COVER_TITLE_MAX_WIDTH = COVER_WIDTH - COVER_CONTENT_X * 2;
var COVER_BOTTOM_PADDING = 8;
function getVersionHeroFontSize(version) {
	const length = version.trim().length;
	if (length <= 3) return 480;
	if (length <= 5) return 420;
	if (length <= 7) return 350;
	if (length <= 10) return 280;
	return 210;
}
function getVersionTitleHeroFontSize(version) {
	const length = version.trim().length;
	if (length <= 3) return 420;
	if (length <= 5) return 380;
	if (length <= 7) return 310;
	if (length <= 10) return 250;
	return 190;
}
function getVersionTitleFontSize(title) {
	const text = stripCoverTitleSuffix(title);
	const length = Math.max(text.length, 1);
	return clampNumber(Math.floor(COVER_TITLE_MAX_WIDTH / (length * .62)), 28, 46);
}
function buildVersionGradientBounds(centerX, y, version, fontSize) {
	const width = Math.min(COVER_WIDTH - COVER_CONTENT_X * 2, Math.max(version.length * fontSize * .62, 120));
	return {
		x: centerX - width / 2,
		y,
		width,
		height: fontSize
	};
}
function buildVersionStack(params) {
	const brand = getCoverBrandThemeForSvgExport(params.theme);
	const centerX = COVER_WIDTH / 2;
	const version = params.data.version.trim() || "0.0.0";
	const versionFontSize = params.includeTitle ? getVersionTitleHeroFontSize(version) : getVersionHeroFontSize(version);
	const versionFill = getTitleFill(brand, true);
	const eyebrowText = formatCoverEyebrow(params.data.eyebrow);
	const titleLine = params.includeTitle ? wrapTextLines(stripCoverTitleSuffix(params.data.title ?? ""), 120, 1)[0] ?? stripCoverTitleSuffix(params.data.title ?? "") : "";
	const titleFontSize = params.includeTitle ? getVersionTitleFontSize(titleLine) : 0;
	const titleLineStep = titleFontSize + 8;
	const eyebrowBlockHeight = eyebrowText ? COVER_EYEBROW_FONT_SIZE + COVER_EYEBROW_VERSION_GAP : 0;
	const versionBlockHeight = versionFontSize;
	const titleBlockHeight = params.includeTitle && titleLine ? titleLineStep : 0;
	const titleGap = titleBlockHeight > 0 ? COVER_VERSION_TITLE_GAP : 0;
	const totalHeight = eyebrowBlockHeight + versionBlockHeight + titleGap + titleBlockHeight + COVER_BOTTOM_PADDING;
	let cursorY = Math.round((630 - totalHeight) / 2);
	const parts = [];
	if (eyebrowText) {
		parts.push(`<text class="cover-eyebrow" fill="${brand.mutedForeground}" font-size="${COVER_EYEBROW_FONT_SIZE}" font-weight="600" letter-spacing="0.25em" x="${centerX}" y="${coverSvgTextBaseline(cursorY, COVER_EYEBROW_FONT_SIZE)}" text-anchor="middle">${escapeXml(eyebrowText)}<tspan fill="${brand.brandCta}">_</tspan></text>`);
		cursorY += eyebrowBlockHeight;
	}
	const versionLayoutY = cursorY;
	parts.push(`<text class="cover-title" fill="${versionFill}" font-size="${versionFontSize}" x="${centerX}" y="${coverSvgTextBaseline(versionLayoutY, versionFontSize)}" text-anchor="middle">${escapeXml(version)}</text>`);
	cursorY += versionBlockHeight + titleGap;
	if (params.includeTitle && titleLine) parts.push(`<text class="cover-title" fill="${brand.foreground}" font-size="${titleFontSize}" x="${centerX}" y="${coverSvgTextBaseline(cursorY, titleFontSize)}" text-anchor="middle">${escapeXml(titleLine)}<tspan fill="${brand.brandCta}">_</tspan></text>`);
	return {
		content: parts.join("\n"),
		titleGradientBounds: buildVersionGradientBounds(centerX, versionLayoutY, version, versionFontSize)
	};
}
function renderVersionNumberTemplateSvg(data, theme) {
	return buildVersionStack({
		data,
		theme,
		includeTitle: false
	});
}
function renderVersionTitleTemplateSvg(data, theme) {
	return buildVersionStack({
		data,
		theme,
		includeTitle: true
	});
}
async function renderCoverSvg(data) {
	let content = "";
	let titleGradientBounds;
	switch (data.template) {
		case "simple-title":
			content = renderSimpleTitleTemplateSvg(data, data.theme);
			break;
		case "integration":
			content = await renderIntegrationTemplateSvg(data, data.theme);
			break;
		case "integration-icon":
			content = await renderIntegrationIconTemplateSvg(data, data.theme);
			break;
		case "showcase-icon":
			content = await renderShowcaseIconTemplateSvg(data, data.theme);
			break;
		case "title-icon":
			content = await renderTitleIconTemplateSvg(data, data.theme);
			break;
		case "table":
			content = renderTableTemplateSvg(data, data.theme);
			break;
		case "bar-chart":
			content = renderBarChartTemplateSvg(data, data.theme);
			break;
		case "line-chart":
			content = renderLineChartTemplateSvg(data, data.theme);
			break;
		case "cli-code":
			content = await renderCliCodeTemplateSvg(data, data.theme);
			break;
		case "code-snippet":
			content = renderCodeSnippetTemplateSvg(data, data.theme);
			break;
		case "milestone-split": {
			const milestone = renderMilestoneSplitTemplateSvg(data, data.theme);
			content = milestone.content;
			titleGradientBounds = milestone.titleGradientBounds;
			break;
		}
		case "milestone-centered": {
			const milestone = renderMilestoneCenteredTemplateSvg(data, data.theme);
			content = milestone.content;
			titleGradientBounds = milestone.titleGradientBounds;
			break;
		}
		case "version-number": {
			const version = renderVersionNumberTemplateSvg(data, data.theme);
			content = version.content;
			titleGradientBounds = version.titleGradientBounds;
			break;
		}
		case "version-title": {
			const version = renderVersionTitleTemplateSvg(data, data.theme);
			content = version.content;
			titleGradientBounds = version.titleGradientBounds;
			break;
		}
		default: throw new Error(`Template "${data.template}" is not supported by SVG export`);
	}
	const fontFaceCss = await getCoverFontFaceCss();
	return buildCoverSvgShell({
		theme: data.theme,
		width: data.width,
		height: data.height,
		fontFaceCss,
		titleGradientBounds,
		templateId: data.template,
		contentAnchor: data.template === "cli-code" ? "right" : void 0,
		content
	});
}
async function renderCoverImageWithSharp(data) {
	const svg = await renderCoverSvg(data);
	return applyCoverImageFormat(sharp(Buffer.from(svg)), data.format);
}
async function cropScreenshotToFrame$1(source, data, outputWidth, outputHeight) {
	const input = await loadCoverImageBuffer(source);
	if (!input) return null;
	const metadata = await sharp(input).metadata();
	const naturalWidth = metadata.width ?? 0;
	const naturalHeight = metadata.height ?? 0;
	if (!naturalWidth || !naturalHeight) return null;
	const crop = getScreenshotCropRect(naturalWidth, naturalHeight, outputWidth, outputHeight, data);
	return sharp(input).extract({
		left: crop.left,
		top: crop.top,
		width: crop.width,
		height: crop.height
	}).resize(outputWidth, outputHeight, { fit: "fill" }).png().toBuffer();
}
function buildScreenshotOverlayContent(data, theme) {
	const brand = getCoverBrandThemeForSvgExport(theme);
	const glass = getCoverScreenshotGlassColors(theme);
	const { titleLines, layout, titleY, subtitleY } = getCoverScreenshotSceneLayout(data);
	const { fontSize, lineHeight, subtitleFontSize } = COVER_SCREENSHOT_TITLE;
	return `
    ${buildCoverScreenshotGlassFrameSvg(layout, glass)}
    ${buildCoverScreenshotChromeSvg(layout, glass)}
    ${titleLines.length ? titleLines.map((line, index) => `<text text-anchor="middle" class="cover-title" fill="${brand.foreground}" font-size="${fontSize}" x="${COVER_WIDTH / 2}" y="${coverSvgTextBaseline(titleY + index * lineHeight, fontSize)}">${escapeXml(line)}${index === titleLines.length - 1 ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`).join("") : ""}
    ${data.subtitle ? `<text text-anchor="middle" class="cover-body" fill="${brand.mutedForeground}" font-size="${subtitleFontSize}" x="${COVER_WIDTH / 2}" y="${coverSvgTextBaseline(subtitleY, subtitleFontSize)}">${escapeXml(data.subtitle)}</text>` : ""}
  `;
}
async function renderScreenshotCoverPng(data) {
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	const { layout } = getCoverScreenshotSceneLayout(data);
	const layoutTransform = getCoverContentLayoutTransform(data.width, data.height, "bottom");
	const { screenshot: shotRect, innerRadius } = layout;
	const outputShotRect = transformCoverArtboardRect(shotRect, layoutTransform);
	const outputInnerRadius = Math.max(1, Math.round(innerRadius * layoutTransform.scale));
	const screenshotBuffer = data.screenshot ? await cropScreenshotToFrame$1(data.screenshot, data, layout.screenshot.width, layout.screenshot.height) : null;
	const fontFaceCss = await getCoverFontFaceCss();
	const frameSvg = buildCoverSvgShell({
		theme: data.theme,
		width: data.width,
		height: data.height,
		fontFaceCss,
		templateId: data.template,
		contentAnchor: "bottom",
		content: buildScreenshotOverlayContent(data, data.theme)
	});
	const base = sharp(Buffer.from(frameSvg));
	const { x: left, y: top, width: outputWidth, height: outputHeight } = outputShotRect;
	if (!screenshotBuffer) {
		const placeholderSvg = `
      <svg width="${outputWidth}" height="${outputHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${brand.background}" opacity="0.55" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${brand.mutedForeground}" font-size="22" font-family="sans-serif">Screenshot preview</text>
      </svg>
    `;
		const roundedPlaceholder = await sharp(Buffer.from(placeholderSvg)).png().composite([{
			input: Buffer.from(buildCoverScreenshotClipSvg(outputWidth, outputHeight, outputInnerRadius)),
			blend: "dest-in"
		}]).png().toBuffer();
		const png$1 = await base.composite([{
			input: roundedPlaceholder,
			left,
			top
		}]).png().toBuffer();
		if (data.format === "png") return png$1;
		return encodeCoverImageBuffer(png$1, data.format);
	}
	const screenshotWithOpacity = await applyScreenshotOpacity$1(await sharp(await sharp(screenshotBuffer).resize(outputWidth, outputHeight, { fit: "fill" }).ensureAlpha().png().toBuffer()).ensureAlpha().composite([{
		input: Buffer.from(buildCoverScreenshotClipSvg(outputWidth, outputHeight, outputInnerRadius)),
		blend: "dest-in"
	}]).png().toBuffer(), COVER_HERO_SCREENSHOT_FRAME.imageOpacity);
	const png = await base.composite([{
		input: screenshotWithOpacity,
		left,
		top
	}]).png().toBuffer();
	if (data.format === "png") return png;
	return encodeCoverImageBuffer(png, data.format);
}
async function applyScreenshotOpacity$1(buffer, opacity) {
	const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	for (let index = 3; index < data.length; index += 4) data[index] = Math.round(data[index] * opacity);
	return sharp(data, { raw: {
		width: info.width,
		height: info.height,
		channels: 4
	} }).png().toBuffer();
}
async function cropScreenshotToFrame(source, data, outputWidth, outputHeight) {
	const input = await loadCoverImageBuffer(source);
	if (!input) return null;
	const metadata = await sharp(input).metadata();
	const naturalWidth = metadata.width ?? 0;
	const naturalHeight = metadata.height ?? 0;
	if (!naturalWidth || !naturalHeight) return null;
	const crop = getScreenshotCropRect(naturalWidth, naturalHeight, outputWidth, outputHeight, data);
	return sharp(input).extract({
		left: crop.left,
		top: crop.top,
		width: crop.width,
		height: crop.height
	}).resize(outputWidth, outputHeight, { fit: "fill" }).png().toBuffer();
}
function buildScreenshotSideTitleSvgContent(data, titleLines, titleX, titleY, subtitleY) {
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	const { fontSize, lineHeight, subtitleFontSize } = COVER_SCREENSHOT_SIDE_TITLE;
	return `
    ${titleLines.length ? titleLines.map((line, index) => `<text text-anchor="start" class="cover-title" fill="${brand.foreground}" font-size="${fontSize}" x="${titleX}" y="${coverSvgTextBaseline(titleY + index * lineHeight, fontSize)}">${escapeXml(line)}${index === titleLines.length - 1 ? `<tspan fill="${brand.brandCta}">_</tspan>` : ""}</text>`).join("") : ""}
    ${data.subtitle ? `<text text-anchor="start" class="cover-body" fill="${brand.mutedForeground}" font-size="${subtitleFontSize}" x="${titleX}" y="${coverSvgTextBaseline(subtitleY, subtitleFontSize)}">${escapeXml(data.subtitle)}</text>` : ""}
  `;
}
function buildScreenshotSideFrameOverlayContent(data) {
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	const glass = getCoverScreenshotGlassColors(data.theme);
	const { layout } = getCoverScreenshotSideSceneLayout(data);
	return `
    ${buildCoverScreenshotSideGlassFrameSvg(layout, glass)}
    ${buildCoverScreenshotChromeSvg(layout, glass)}
    ${buildCoverScreenshotSideScreenshotBorderSvg(layout, brand.border)}
  `;
}
function buildScreenshotSideTitleOverlaySvg(data, fontFaceCss) {
	const { titleLines, titleX, titleY, subtitleY } = getCoverScreenshotSideSceneLayout(data);
	const { scale, translateX, translateY } = getCoverContentLayoutTransform(data.width, data.height, "right");
	const content = buildScreenshotSideTitleSvgContent(data, titleLines, titleX, titleY, subtitleY);
	return `
    <svg width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}" xmlns="http://www.w3.org/2000/svg">
      ${buildCoverExportFontStyleBlock(fontFaceCss)}
      <g transform="translate(${translateX} ${translateY}) scale(${scale})">
        ${content}
      </g>
    </svg>
  `;
}
async function compositeScreenshotSideTitleLayer(baseBuffer, data, fontFaceCss) {
	const titleSvg = buildScreenshotSideTitleOverlaySvg(data, fontFaceCss);
	const titleLayer = await sharp(Buffer.from(titleSvg)).png().toBuffer();
	return sharp(baseBuffer).composite([{
		input: titleLayer,
		left: 0,
		top: 0
	}]).png().toBuffer();
}
async function applyScreenshotOpacity(buffer, opacity) {
	const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	for (let index = 3; index < data.length; index += 4) data[index] = Math.round(data[index] * opacity);
	return sharp(data, { raw: {
		width: info.width,
		height: info.height,
		channels: 4
	} }).png().toBuffer();
}
async function renderScreenshotSideCoverPng(data) {
	const brand = getCoverBrandThemeForSvgExport(data.theme);
	const { layout } = getCoverScreenshotSideSceneLayout(data);
	const layoutTransform = getCoverContentLayoutTransform(data.width, data.height, "right");
	const { screenshot: shotRect, innerRadius } = layout;
	const outputShotRect = transformCoverArtboardRect(shotRect, layoutTransform);
	const outputInnerRadius = Math.max(1, Math.round(innerRadius * layoutTransform.scale));
	const screenshotBuffer = data.screenshot ? await cropScreenshotToFrame(data.screenshot, data, layout.screenshot.width, layout.screenshot.height) : null;
	const fontFaceCss = await getCoverFontFaceCss();
	const frameSvg = buildCoverSvgShell({
		theme: data.theme,
		width: data.width,
		height: data.height,
		fontFaceCss,
		templateId: data.template,
		contentAnchor: "right",
		content: buildScreenshotSideFrameOverlayContent(data)
	});
	const base = sharp(Buffer.from(frameSvg));
	const { x: left, y: top, width: outputWidth, height: outputHeight } = outputShotRect;
	if (!screenshotBuffer) {
		const placeholderSvg = `
      <svg width="${outputWidth}" height="${outputHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${brand.background}" opacity="0.55" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${brand.mutedForeground}" font-size="22" font-family="sans-serif">Screenshot preview</text>
      </svg>
    `;
		const roundedPlaceholder = await sharp(Buffer.from(placeholderSvg)).png().composite([{
			input: Buffer.from(buildCoverScreenshotSideClipSvg(outputWidth, outputHeight, outputInnerRadius)),
			blend: "dest-in"
		}]).png().toBuffer();
		const png$1 = await compositeScreenshotSideTitleLayer(await base.composite([{
			input: roundedPlaceholder,
			left,
			top
		}]).png().toBuffer(), data, fontFaceCss);
		if (data.format === "png") return png$1;
		return encodeCoverImageBuffer(png$1, data.format);
	}
	const screenshotWithOpacity = await applyScreenshotOpacity(await sharp(await sharp(screenshotBuffer).resize(outputWidth, outputHeight, { fit: "fill" }).ensureAlpha().png().toBuffer()).ensureAlpha().composite([{
		input: Buffer.from(buildCoverScreenshotSideClipSvg(outputWidth, outputHeight, outputInnerRadius)),
		blend: "dest-in"
	}]).png().toBuffer(), COVER_HERO_SCREENSHOT_FRAME.imageOpacity);
	const png = await compositeScreenshotSideTitleLayer(await base.composite([{
		input: screenshotWithOpacity,
		left,
		top
	}]).png().toBuffer(), data, fontFaceCss);
	if (data.format === "png") return png;
	return encodeCoverImageBuffer(png, data.format);
}
async function renderCoverImage(data) {
	if (data.template === "screenshot") return renderScreenshotCoverPng(data);
	if (data.template === "screenshot-side") return renderScreenshotSideCoverPng(data);
	if (data.template === "screenshot-angled") return renderCoverImageWithOg(data);
	if (data.template === "cards-angled") throw new Error("The cards-angled template uses browser 3D rendering. Download from the generator UI.");
	return renderCoverImageWithSharp(data);
}
export { renderCoverImage };
