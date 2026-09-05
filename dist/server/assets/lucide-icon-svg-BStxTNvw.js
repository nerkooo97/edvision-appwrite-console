import { a as COVER_WIDTH, d as getCoverBrandThemeForSvgExport, f as getCoverTheme, g as resolveCoverThemeId, t as COVER_HEIGHT, v as getCoverBrandLightRgb } from "./constants-CL7SLzjY.js";
import { Ct as coverExportYToArtboardY, _t as COVER_SCREENSHOT_FRAME_MIN_HEIGHT_PX, bt as getCoverFrameWidthPx, gt as COVER_SCREENSHOT_FRAME_HEIGHT, ht as wrapTextLines, mt as stripCoverTitleSuffix, wt as getCoverContentLayoutTransform, xt as resolveCoverScreenshotFrameHeightExportPx } from "./constants-B5zUV45z.js";
function getCoverGridStroke(themeId) {
	if (getCoverTheme(themeId).family === "dark") return "rgba(63, 67, 70, 0.35)";
	return getCoverBrandThemeForSvgExport(themeId).border;
}
function svgPatternDataUri(svg) {
	return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
function buildCoverBackgroundGridSvgPattern(themeId, style) {
	const stroke = getCoverGridStroke(themeId);
	const fill = getCoverGridStroke(themeId);
	switch (style) {
		case "dots": return `
        <pattern id="cover-background-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="${fill}" />
        </pattern>
      `.trim();
		case "grid": return `
        <pattern id="cover-background-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${stroke}" stroke-width="0.75" />
        </pattern>
      `.trim();
		case "diagonal": return `
        <pattern id="cover-background-grid" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="${stroke}" stroke-width="0.75" />
        </pattern>
      `.trim();
		case "none": return "";
	}
}
function getCoverBackgroundGridCssStyle(themeId, style) {
	if (style === "none") return null;
	const stroke = getCoverGridStroke(themeId);
	switch (style) {
		case "dots": return {
			backgroundImage: `radial-gradient(circle, ${stroke} 1px, transparent 1px)`,
			backgroundSize: "18px 18px"
		};
		case "grid": return {
			backgroundImage: `
          linear-gradient(${stroke} 0.75px, transparent 0.75px),
          linear-gradient(90deg, ${stroke} 0.75px, transparent 0.75px)
        `.trim(),
			backgroundSize: "24px 24px"
		};
		case "diagonal": return {
			backgroundImage: svgPatternDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><line x1="0" y1="10" x2="10" y2="0" stroke="${stroke}" stroke-width="0.75"/></svg>`),
			backgroundSize: "10px 10px"
		};
	}
}
var BASE_WIDTH = 1200;
var BASE_HEIGHT = 630;
var MILESTONE_CONFETTI_PIECES = [
	{
		x: .06,
		y: .1,
		w: 16,
		h: 7,
		rotation: -32,
		tone: "pink",
		opacity: .5,
		shape: "rect"
	},
	{
		x: .14,
		y: .22,
		w: 8,
		h: 8,
		rotation: 0,
		tone: "purple",
		opacity: .45,
		shape: "circle"
	},
	{
		x: .22,
		y: .08,
		w: 12,
		h: 5,
		rotation: 48,
		tone: "teal",
		opacity: .42,
		shape: "rect"
	},
	{
		x: .04,
		y: .42,
		w: 10,
		h: 10,
		rotation: 0,
		tone: "orange",
		opacity: .4,
		shape: "circle"
	},
	{
		x: .18,
		y: .78,
		w: 14,
		h: 6,
		rotation: 22,
		tone: "pink",
		opacity: .48,
		shape: "rect"
	},
	{
		x: .08,
		y: .88,
		w: 7,
		h: 7,
		rotation: 0,
		tone: "purple",
		opacity: .38,
		shape: "circle"
	},
	{
		x: .32,
		y: .92,
		w: 11,
		h: 4,
		rotation: -18,
		tone: "teal",
		opacity: .4,
		shape: "rect"
	},
	{
		x: .88,
		y: .09,
		w: 15,
		h: 6,
		rotation: 36,
		tone: "purple",
		opacity: .5,
		shape: "rect"
	},
	{
		x: .94,
		y: .2,
		w: 9,
		h: 9,
		rotation: 0,
		tone: "pink",
		opacity: .44,
		shape: "circle"
	},
	{
		x: .78,
		y: .06,
		w: 12,
		h: 5,
		rotation: -42,
		tone: "orange",
		opacity: .42,
		shape: "rect"
	},
	{
		x: .96,
		y: .48,
		w: 8,
		h: 8,
		rotation: 0,
		tone: "teal",
		opacity: .38,
		shape: "circle"
	},
	{
		x: .86,
		y: .72,
		w: 13,
		h: 5,
		rotation: -28,
		tone: "pink",
		opacity: .46,
		shape: "rect"
	},
	{
		x: .92,
		y: .9,
		w: 10,
		h: 10,
		rotation: 0,
		tone: "purple",
		opacity: .4,
		shape: "circle"
	},
	{
		x: .72,
		y: .94,
		w: 14,
		h: 6,
		rotation: 54,
		tone: "orange",
		opacity: .42,
		shape: "rect"
	},
	{
		x: .48,
		y: .06,
		w: 9,
		h: 9,
		rotation: 0,
		tone: "teal",
		opacity: .35,
		shape: "circle"
	},
	{
		x: .58,
		y: .12,
		w: 11,
		h: 4,
		rotation: 18,
		tone: "pink",
		opacity: .36,
		shape: "rect"
	},
	{
		x: .42,
		y: .9,
		w: 12,
		h: 5,
		rotation: -24,
		tone: "purple",
		opacity: .38,
		shape: "rect"
	},
	{
		x: .52,
		y: .82,
		w: 7,
		h: 7,
		rotation: 0,
		tone: "orange",
		opacity: .34,
		shape: "circle"
	},
	{
		x: .38,
		y: .14,
		w: 6,
		h: 6,
		rotation: 0,
		tone: "pink",
		opacity: .32,
		shape: "circle"
	},
	{
		x: .64,
		y: .88,
		w: 10,
		h: 4,
		rotation: 40,
		tone: "teal",
		opacity: .36,
		shape: "rect"
	},
	{
		x: .28,
		y: .52,
		w: 8,
		h: 8,
		rotation: 0,
		tone: "purple",
		opacity: .28,
		shape: "circle"
	},
	{
		x: .68,
		y: .18,
		w: 9,
		h: 4,
		rotation: -12,
		tone: "orange",
		opacity: .32,
		shape: "rect"
	},
	{
		x: .12,
		y: .58,
		w: 11,
		h: 5,
		rotation: 62,
		tone: "teal",
		opacity: .3,
		shape: "rect"
	},
	{
		x: .82,
		y: .38,
		w: 7,
		h: 7,
		rotation: 0,
		tone: "pink",
		opacity: .3,
		shape: "circle"
	}
];
function rgba$1(rgb, alpha) {
	return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}
function isCoverMilestoneTemplate(templateId) {
	return templateId === "milestone-split" || templateId === "milestone-centered";
}
function buildCoverMilestoneConfettiSvg(width, height, family) {
	if (width <= 0 || height <= 0) return "";
	const scaleX = width / BASE_WIDTH;
	const scaleY = height / BASE_HEIGHT;
	const opacityScale = family === "dark" ? 1.12 : 1;
	return `<g aria-hidden="true">${MILESTONE_CONFETTI_PIECES.map((piece) => {
		const rgb = getCoverBrandLightRgb(piece.tone);
		const opacity = Math.min(.72, piece.opacity * opacityScale);
		const cx = piece.x * width;
		const cy = piece.y * height;
		const w = piece.w * scaleX;
		const h = piece.h * scaleY;
		const color = rgba$1(rgb, opacity);
		if (piece.shape === "circle") {
			const radius = ((w + h) / 4).toFixed(1);
			return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${radius}" fill="${color}" />`;
		}
		const rx = Math.max(1, Math.min(w, h) * .2).toFixed(1);
		return `<rect x="${(-w / 2).toFixed(1)}" y="${(-h / 2).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="${rx}" fill="${color}" transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${piece.rotation})" />`;
	}).join("")}</g>`;
}
function getCoverMilestoneConfettiDomPieces(width, height, family) {
	if (width <= 0 || height <= 0) return [];
	const scaleX = width / BASE_WIDTH;
	const scaleY = height / BASE_HEIGHT;
	const opacityScale = family === "dark" ? 1.12 : 1;
	return MILESTONE_CONFETTI_PIECES.map((piece) => {
		const rgb = getCoverBrandLightRgb(piece.tone);
		const opacity = Math.min(.72, piece.opacity * opacityScale);
		const w = piece.w * scaleX;
		const h = piece.h * scaleY;
		const cx = piece.x * width;
		const cy = piece.y * height;
		return {
			left: cx - w / 2,
			top: cy - h / 2,
			width: w,
			height: h,
			rotation: piece.rotation,
			backgroundColor: rgba$1(rgb, opacity),
			borderRadius: piece.shape === "circle" ? "9999px" : `${Math.min(w, h) * .2}px`
		};
	});
}
const COVER_HERO_SOFT_LIGHT_LAYOUT = {
	left: {
		left: -.28,
		anchor: "bottom",
		bottomOverflow: .22,
		widthRatio: 1e3 / 1200,
		heightRatio: 560 / 630,
		tone: "pink",
		midStop: 38,
		fadeStop: 72
	},
	right: {
		right: -.3,
		anchor: "bottom",
		bottomOverflow: .24,
		widthRatio: 1020 / 1200,
		heightRatio: 580 / 630,
		tone: "purple",
		midStop: 40,
		fadeStop: 74
	}
};
var COVER_INTEGRATION_ICON_SOFT_LIGHT_LAYOUT = {
	top: {
		left: -.44,
		anchor: "top",
		verticalOffset: -.36,
		widthRatio: 1360 / 1200,
		heightRatio: 780 / 630,
		tone: "pink",
		midStop: 40,
		fadeStop: 76
	},
	bottom: {
		right: -.4,
		anchor: "bottom",
		bottomOverflow: .32,
		widthRatio: 1240 / 1200,
		heightRatio: 700 / 630,
		tone: "purple",
		midStop: 40,
		fadeStop: 74
	}
};
const COVER_SOFT_LIGHT_VARIANTS = {
	hero: COVER_HERO_SOFT_LIGHT_LAYOUT,
	aurora: {
		left: {
			left: -.18,
			anchor: "top",
			verticalOffset: -.06,
			widthRatio: 820 / 1200,
			heightRatio: 480 / 630,
			tone: "teal",
			midStop: 34,
			fadeStop: 68
		},
		right: {
			right: -.18,
			anchor: "top",
			verticalOffset: -.06,
			widthRatio: 820 / 1200,
			heightRatio: 480 / 630,
			tone: "purple",
			midStop: 36,
			fadeStop: 70
		}
	},
	beam: {
		center: {
			centerX: .5,
			anchor: "top",
			verticalOffset: -.12,
			widthRatio: 1100 / 1200,
			heightRatio: 500 / 630,
			tone: "pink",
			midStop: 28,
			fadeStop: 62
		},
		accent: {
			centerX: .58,
			anchor: "top",
			verticalOffset: -.08,
			widthRatio: 680 / 1200,
			heightRatio: 380 / 630,
			tone: "orange",
			midStop: 32,
			fadeStop: 66
		}
	},
	glow: { bottomLeft: {
		left: -.42,
		anchor: "bottom",
		bottomOverflow: .34,
		widthRatio: 1280 / 1200,
		heightRatio: 720 / 630,
		tone: "teal",
		midStop: 36,
		fadeStop: 76
	} }
};
const COVER_SOFT_LIGHT_REFERENCE = {
	width: 1200,
	height: 630
};
function rgba([r, g, b], alpha) {
	return `rgba(${r},${g},${b},${alpha})`;
}
function getCoverSoftLightGradient(softLights, layout) {
	const rgb = getCoverBrandLightRgb(layout.tone);
	const { strong, mid } = softLights[layout.tone];
	return `radial-gradient(ellipse at center, ${rgba(rgb, strong)} 0%, ${rgba(rgb, mid)} ${layout.midStop}%, transparent ${layout.fadeStop}%)`;
}
function getCoverSoftLightReferenceHeight(layout) {
	return layout.heightRatio * COVER_SOFT_LIGHT_REFERENCE.height;
}
function getCoverSoftLightSize(layout, canvasWidth, canvasHeight) {
	const { height: refCanvasHeight } = COVER_SOFT_LIGHT_REFERENCE;
	const width = layout.widthRatio * canvasWidth;
	const refLightHeight = getCoverSoftLightReferenceHeight(layout);
	if (layout.anchor === "bottom") return {
		width,
		height: (refLightHeight - (layout.bottomOverflow ?? 0) * refCanvasHeight) / refCanvasHeight * canvasHeight + (layout.bottomOverflow ?? 0) * canvasHeight
	};
	const refOffset = (layout.verticalOffset ?? 0) * refCanvasHeight;
	return {
		width,
		height: (refLightHeight + Math.max(0, -refOffset)) / refCanvasHeight * canvasHeight + (layout.verticalOffset ?? 0) * canvasHeight
	};
}
function getCoverSoftLightRect(layout, canvasWidth, canvasHeight) {
	const { width, height } = getCoverSoftLightSize(layout, canvasWidth, canvasHeight);
	let x;
	if (layout.centerX != null) x = layout.centerX * canvasWidth - width / 2;
	else if (layout.left != null) x = layout.left * canvasWidth;
	else x = canvasWidth - layout.right * canvasWidth - width;
	const y = layout.anchor === "top" ? (layout.verticalOffset ?? 0) * canvasHeight : canvasHeight - height + (layout.bottomOverflow ?? 0) * canvasHeight;
	return {
		x,
		y,
		width,
		height
	};
}
function getCoverSoftLightLayoutsForTheme(themeId, context) {
	const theme = getCoverTheme(themeId);
	if (context?.templateId === "integration-icon" && theme.softLightVariant !== "glow") return Object.entries(COVER_INTEGRATION_ICON_SOFT_LIGHT_LAYOUT);
	const layouts = COVER_SOFT_LIGHT_VARIANTS[theme.softLightVariant];
	if (theme.softLightVariant === "hero") {
		if (theme.backgroundGrid === "grid") return applyHeroToneOverrides(layouts, {
			left: "purple",
			right: "teal"
		});
	}
	return Object.entries(layouts);
}
function applyHeroToneOverrides(layouts, tones) {
	return Object.entries(layouts).map(([key, layout]) => {
		const toneOverride = tones[key];
		if (!toneOverride) return [key, layout];
		return [key, {
			...layout,
			tone: toneOverride
		}];
	});
}
function buildCoverSoftLightSvgDefs(themeId, canvasWidth, canvasHeight, context) {
	const { softLights } = getCoverTheme(themeId);
	const defs = [];
	const lightRects = [];
	for (const [side, layout] of getCoverSoftLightLayoutsForTheme(themeId, context)) {
		const rect = getCoverSoftLightRect(layout, canvasWidth, canvasHeight);
		const rgb = getCoverBrandLightRgb(layout.tone);
		const { strong, mid } = softLights[layout.tone];
		const gradientId = `cover-light-${side}`;
		defs.push(`
      <radialGradient id="${gradientId}" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${rgba(rgb, strong)}" />
        <stop offset="${layout.midStop}%" stop-color="${rgba(rgb, mid)}" />
        <stop offset="${layout.fadeStop}%" stop-color="${rgba(rgb, 0)}" />
      </radialGradient>
    `);
		lightRects.push(`<rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}" fill="url(#${gradientId})" />`);
	}
	return {
		defs: defs.join("\n"),
		lightRects: lightRects.join("\n")
	};
}
function buildCoverBrandBackgroundSvgLayers(themeId, width, height, context) {
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const { backgroundGrid, family } = getCoverTheme(themeId);
	const gridPattern = backgroundGrid === "none" ? "" : buildCoverBackgroundGridSvgPattern(themeId, backgroundGrid);
	const gridLayer = backgroundGrid === "none" ? "" : `<rect width="${width}" height="${height}" fill="url(#cover-background-grid)" />`;
	const { defs: lightDefs, lightRects } = buildCoverSoftLightSvgDefs(themeId, width, height, context);
	const confettiLayer = isCoverMilestoneTemplate(context?.templateId) ? buildCoverMilestoneConfettiSvg(width, height, family) : "";
	return {
		defs: `${[gridPattern, lightDefs].filter(Boolean).join("\n")}\n<clipPath id="cover-soft-lights-clip"><rect width="${width}" height="${height}" /></clipPath>`,
		layers: `
      <rect width="${width}" height="${height}" fill="${brand.background}" />
      ${gridLayer}
      <g clip-path="url(#cover-soft-lights-clip)">
        ${lightRects}
        ${confettiLayer}
      </g>
    `.trim()
	};
}
function getCoverBackgroundGridStyleForTheme(themeId) {
	const { backgroundGrid } = getCoverTheme(themeId);
	return getCoverBackgroundGridCssStyle(themeId, backgroundGrid);
}
function getCoverSoftLightCssGradient(themeId, layout) {
	return getCoverSoftLightGradient(getCoverTheme(themeId).softLights, layout);
}
const COVER_SCREENSHOT_TITLE = {
	y: 72,
	fontSize: 56,
	lineHeight: 64,
	subtitleFontSize: 24,
	subtitleGap: 20,
	frameGap: 48,
	maxCharsPerLine: 42,
	maxLines: 1
};
const COVER_HERO_SCREENSHOT_FRAME = {
	outerRadius: 28,
	defaultInnerRadius: 8,
	borderWidth: 2,
	paddingX: 16,
	paddingTop: 4,
	chromeHeight: 40,
	chromeDotSize: 10,
	chromeDotGap: 6,
	chromeDotMarginLeft: 8,
	paddingBottom: 16,
	imageOpacity: .95
};
function getCoverScreenshotFrameRadii(closed) {
	const { outerRadius, defaultInnerRadius, paddingX } = COVER_HERO_SCREENSHOT_FRAME;
	const bottomRadius = closed ? Math.max(defaultInnerRadius, outerRadius - paddingX) : 0;
	return {
		topLeft: defaultInnerRadius,
		topRight: defaultInnerRadius,
		bottomLeft: bottomRadius,
		bottomRight: bottomRadius
	};
}
function getCoverScreenshotGlassColors(themeId) {
	if (getCoverTheme(themeId).family === "dark") return {
		shellFill: "rgba(63, 67, 79, 0.1)",
		shellBorder: "rgba(63, 67, 79, 0.3)",
		chromeDotFill: "rgba(161, 161, 170, 0.3)"
	};
	return {
		shellFill: "rgba(113, 113, 122, 0.035)",
		shellBorder: "rgba(113, 113, 122, 0.08)",
		chromeDotFill: "rgba(113, 113, 122, 0.3)"
	};
}
function getCoverScreenshotGlassPreviewStyles(themeId) {
	const theme = getCoverTheme(themeId);
	if (theme.family === "dark") return {
		shellFill: `color-mix(in oklch, ${theme.muted} 10%, transparent)`,
		shellBorder: `color-mix(in oklch, ${theme.muted} 30%, transparent)`,
		chromeDotFill: `color-mix(in oklch, ${theme.mutedForeground} 30%, transparent)`
	};
	return {
		shellFill: `color-mix(in oklch, ${theme.mutedForeground} 3.5%, transparent)`,
		shellBorder: `color-mix(in oklch, ${theme.mutedForeground} 8%, transparent)`,
		chromeDotFill: `color-mix(in oklch, ${theme.mutedForeground} 30%, transparent)`
	};
}
function buildCoverScreenshotFrameShellLayout(frameX, frameY, frameWidth, frameHeightPx, options) {
	const { paddingX, paddingTop, chromeHeight, outerRadius, defaultInnerRadius, paddingBottom } = COVER_HERO_SCREENSHOT_FRAME;
	const bottomInset = options?.closed ?? false ? paddingBottom : 0;
	const screenshotWidth = Math.max(1, frameWidth - paddingX * 2);
	const screenshotHeight = Math.max(1, frameHeightPx - paddingTop - chromeHeight - bottomInset);
	return {
		shell: {
			x: frameX,
			y: frameY,
			width: frameWidth,
			height: frameHeightPx
		},
		screenshot: {
			x: frameX + paddingX,
			y: frameY + paddingTop + chromeHeight,
			width: screenshotWidth,
			height: screenshotHeight
		},
		outerRadius,
		innerRadius: defaultInnerRadius,
		borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth,
		paddingX,
		paddingTop,
		chromeHeight
	};
}
function getCoverScreenshotFrameLayout(data, frameX, frameY, frameHeightPx) {
	const canvas = {
		width: data.width,
		height: data.height
	};
	return buildCoverScreenshotFrameShellLayout(frameX, frameY, getCoverFrameWidthPx(data.frameWidthPercent, canvas), frameHeightPx);
}
function buildTopRoundedRectPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height);
	return [
		`M ${x + r} ${y}`,
		`L ${x + width - r} ${y}`,
		`Q ${x + width} ${y} ${x + width} ${y + r}`,
		`L ${x + width} ${y + height}`,
		`L ${x} ${y + height}`,
		`L ${x} ${y + r}`,
		`Q ${x} ${y} ${x + r} ${y}`,
		"Z"
	].join(" ");
}
function buildTopSidesBorderPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height);
	return [
		`M ${x + r} ${y}`,
		`L ${x + width - r} ${y}`,
		`Q ${x + width} ${y} ${x + width} ${y + r}`,
		`L ${x + width} ${y + height}`,
		`M ${x} ${y + height}`,
		`L ${x} ${y + r}`,
		`Q ${x} ${y} ${x + r} ${y}`
	].join(" ");
}
function buildTopRoundedClipPath(width, height, radius) {
	const r = Math.min(radius, width / 2, height);
	return [
		`M ${r} 0`,
		`L ${width - r} 0`,
		`Q ${width} 0 ${width} ${r}`,
		`L ${width} ${height}`,
		`L 0 ${height}`,
		`L 0 ${r}`,
		`Q 0 0 ${r} 0`,
		"Z"
	].join(" ");
}
function buildCoverScreenshotChromeSvg(layout, glass) {
	const { shell, chromeHeight, paddingTop, paddingX } = layout;
	const { chromeDotSize, chromeDotGap, chromeDotMarginLeft } = COVER_HERO_SCREENSHOT_FRAME;
	const dotY = shell.y + paddingTop + chromeHeight / 2;
	const dotStartX = shell.x + paddingX + chromeDotMarginLeft + chromeDotSize / 2;
	return Array.from({ length: 3 }, (_, index) => {
		return `<circle cx="${dotStartX + index * (chromeDotSize + chromeDotGap)}" cy="${dotY}" r="${chromeDotSize / 2}" fill="${glass.chromeDotFill}" />`;
	}).join("\n    ");
}
function buildCoverScreenshotGlassFrameSvg(layout, glass) {
	const { shell, outerRadius, borderWidth } = layout;
	const { x, y, width, height } = shell;
	const shellPath = buildTopRoundedRectPath(x, y, width, height, outerRadius);
	const borderPath = buildTopSidesBorderPath(x, y, width, height, outerRadius);
	return `
    <path d="${shellPath}" fill="${glass.shellFill}" />
    <path d="${borderPath}" fill="none" stroke="${glass.shellBorder}" stroke-width="${borderWidth}" stroke-linecap="round" stroke-linejoin="round" />
  `;
}
function buildCoverScreenshotClipSvg(width, height, innerRadius) {
	return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><path d="${buildTopRoundedClipPath(width, height, innerRadius)}" fill="#fff"/></svg>`;
}
function getCoverScreenshotTitleLines(data) {
	return data.title ? wrapTextLines(stripCoverTitleSuffix(data.title), COVER_SCREENSHOT_TITLE.maxCharsPerLine, COVER_SCREENSHOT_TITLE.maxLines) : [];
}
function getCoverScreenshotTitleLayout(data, canvas) {
	const titleLines = getCoverScreenshotTitleLines(data);
	const layoutTransform = getCoverContentLayoutTransform(canvas.width, canvas.height, "bottom");
	const { scale } = layoutTransform;
	const { y, lineHeight, subtitleGap, subtitleFontSize, frameGap } = COVER_SCREENSHOT_TITLE;
	const titleYExport = y * scale;
	const lineHeightExport = lineHeight * scale;
	const subtitleGapExport = subtitleGap * scale;
	const subtitleFontSizeExport = subtitleFontSize * scale;
	const frameGapExport = frameGap * scale;
	const subtitleYExport = titleLines.length > 0 ? titleYExport + titleLines.length * lineHeightExport + subtitleGapExport : titleYExport + subtitleGapExport;
	const contentBottomExport = data.subtitle ? subtitleYExport + subtitleFontSizeExport : titleLines.length > 0 ? titleYExport + titleLines.length * lineHeightExport : titleYExport;
	const titleBlockBottomExport = contentBottomExport > titleYExport ? contentBottomExport + frameGapExport : titleYExport + frameGapExport;
	return {
		titleLines,
		titleYArtboard: coverExportYToArtboardY(titleYExport, layoutTransform),
		subtitleYArtboard: coverExportYToArtboardY(subtitleYExport, layoutTransform),
		titleBlockBottomExport,
		layoutTransform
	};
}
function getCoverScreenshotSceneLayout(data) {
	const canvas = {
		width: data.width,
		height: data.height
	};
	const { titleLines, titleYArtboard, subtitleYArtboard, titleBlockBottomExport, layoutTransform } = getCoverScreenshotTitleLayout(data, canvas);
	const { scale } = layoutTransform;
	const frameWidth = getCoverFrameWidthPx(data.frameWidthPercent, canvas);
	const frameX = Math.round((COVER_WIDTH - frameWidth) / 2);
	const maxFrameHeightExport = Math.max(0, canvas.height - titleBlockBottomExport);
	const minFrameHeightExport = 200 * scale;
	const frameHeightExport = resolveCoverScreenshotFrameHeightExportPx(data.frameHeightPercent ?? COVER_SCREENSHOT_FRAME_HEIGHT.defaultPercent, maxFrameHeightExport, minFrameHeightExport);
	const frameHeightPx = Math.max(1, Math.round(frameHeightExport / scale));
	return {
		titleLines,
		layout: getCoverScreenshotFrameLayout(data, frameX, 630 - frameHeightPx, frameHeightPx),
		titleY: titleYArtboard,
		subtitleY: subtitleYArtboard,
		frameHeight: frameHeightPx
	};
}
const COVER_BRAND_ICON_COLOR = "#C4C6D7";
const COVER_LIGHT_ICON_TINT = {
	r: 9,
	g: 9,
	b: 11
};
function getCoverIconRasterTint(source, themeFamily) {
	if (!source || !themeFamily || themeFamily !== "light") return null;
	if (!source.startsWith("/icons/") && !source.startsWith("lucide:")) return null;
	return COVER_LIGHT_ICON_TINT;
}
function getCoverLucideIconStrokeColorForFamily(family) {
	return family === "light" ? "#000000" : COVER_BRAND_ICON_COLOR;
}
function getCoverLucideIconStrokeColor(themeId) {
	const family = getCoverTheme(resolveCoverThemeId(themeId)).family;
	return getCoverLucideIconStrokeColorForFamily(family);
}
function getCoverIconPreviewClassesForFamily(family) {
	return family === "light" ? "brightness-0 opacity-[0.55]" : "brightness-100 opacity-100";
}
function getCoverLucideIconStrokeColorFromOptions(options) {
	if (options.themeId != null && options.themeId !== "") return getCoverLucideIconStrokeColor(options.themeId);
	return getCoverLucideIconStrokeColorForFamily(options.themeFamily ?? "light");
}
function getCoverIconPreviewClasses(themeId) {
	const family = getCoverTheme(themeId).family;
	return getCoverIconPreviewClassesForFamily(family);
}
var COVER_LUCIDE_ICON_ATTRS = {
	fill: "none",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
function escapeSvgAttr(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function buildCoverLucideIconChildAttrs(attrs, stroke) {
	const { key: _key, ...rest } = attrs;
	return {
		...rest,
		fill: COVER_LUCIDE_ICON_ATTRS.fill,
		stroke,
		"stroke-width": COVER_LUCIDE_ICON_ATTRS.strokeWidth,
		"stroke-linecap": COVER_LUCIDE_ICON_ATTRS.strokeLinecap,
		"stroke-linejoin": COVER_LUCIDE_ICON_ATTRS.strokeLinejoin
	};
}
function coverLucideIconNodeToSvg(iconNode, stroke = "currentColor") {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconNode.map(([tag, attrs]) => {
		const childAttrs = buildCoverLucideIconChildAttrs(attrs, stroke);
		return `<${tag} ${Object.entries(childAttrs).map(([key, val]) => `${key}="${escapeSvgAttr(val)}"`).join(" ")} />`;
	}).join("")}</svg>`;
}
var coverLucideIconNodeCache = /* @__PURE__ */ new Map();
function getCachedCoverLucideIconNode(iconName) {
	return coverLucideIconNodeCache.get(iconName) ?? null;
}
async function preloadCoverLucideIconNodes(iconNames) {
	const pending = [...new Set(iconNames)].filter((name) => name && !coverLucideIconNodeCache.has(name)).map(async (name) => {
		const node = await loadCoverLucideIconNode(name);
		if (node) coverLucideIconNodeCache.set(name, node);
	});
	await Promise.all(pending);
}
async function loadCoverLucideIconNode(iconName) {
	const cached = coverLucideIconNodeCache.get(iconName);
	if (cached) return cached;
	try {
		const loader = (await import("lucide-react/dist/esm/dynamicIconImports.js")).default[iconName];
		if (!loader) return null;
		const mod = await loader();
		const iconNode = mod.__iconNode?.length ? mod.__iconNode : null;
		if (iconNode) coverLucideIconNodeCache.set(iconName, iconNode);
		return iconNode;
	} catch {
		return null;
	}
}
async function loadCoverLucideIconNames() {
	try {
		const dynamicIconImports = (await import("lucide-react/dist/esm/dynamicIconImports.js")).default;
		return Object.keys(dynamicIconImports).sort();
	} catch {
		return [];
	}
}
export { isCoverMilestoneTemplate as A, getCoverScreenshotSceneLayout as C, getCoverSoftLightLayoutsForTheme as D, getCoverSoftLightCssGradient as E, getCoverSoftLightRect as O, getCoverScreenshotGlassPreviewStyles as S, getCoverBackgroundGridStyleForTheme as T, buildCoverScreenshotFrameShellLayout as _, preloadCoverLucideIconNodes as a, getCoverScreenshotFrameRadii as b, getCoverIconPreviewClassesForFamily as c, getCoverLucideIconStrokeColorForFamily as d, getCoverLucideIconStrokeColorFromOptions as f, buildCoverScreenshotClipSvg as g, buildCoverScreenshotChromeSvg as h, loadCoverLucideIconNode as i, getCoverMilestoneConfettiDomPieces as k, getCoverIconRasterTint as l, COVER_SCREENSHOT_TITLE as m, getCachedCoverLucideIconNode as n, COVER_BRAND_ICON_COLOR as o, COVER_HERO_SCREENSHOT_FRAME as p, loadCoverLucideIconNames as r, getCoverIconPreviewClasses as s, coverLucideIconNodeToSvg as t, getCoverLucideIconStrokeColor as u, buildCoverScreenshotGlassFrameSvg as v, buildCoverBrandBackgroundSvgLayers as w, getCoverScreenshotGlassColors as x, getCoverScreenshotFrameLayout as y };
