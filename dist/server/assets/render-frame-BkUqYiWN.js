import { _ as mixOklchHex, a as COVER_WIDTH, d as getCoverBrandThemeForSvgExport, f as getCoverTheme, t as COVER_HEIGHT } from "./constants-CL7SLzjY.js";
import { bt as getCoverFrameWidthPx, mt as stripCoverTitleSuffix, ut as escapeXml, z as COVER_TABLE_DEFAULT_FRAME_WIDTH_PERCENT } from "./constants-B5zUV45z.js";
import { p as COVER_HERO_SCREENSHOT_FRAME, x as getCoverScreenshotGlassColors } from "./lucide-icon-svg-BStxTNvw.js";
function buildCoverExportFontStyleBlock(fontFaceCss = "") {
	return `
    <style>
      ${fontFaceCss}
      .cover-title {
        font-family: 'Aeonik Pro', Arial, Helvetica, sans-serif;
        font-weight: 400;
        letter-spacing: -0.022em;
      }
      .cover-eyebrow {
        font-family: 'Inter', Arial, Helvetica, sans-serif;
        font-weight: 600;
        letter-spacing: 0.25em;
        text-transform: uppercase;
      }
      .cover-body {
        font-family: 'Inter', Arial, Helvetica, sans-serif;
        font-weight: 400;
      }
      .cover-code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        font-weight: 400;
        font-variant-ligatures: none;
        letter-spacing: 0;
        white-space: pre;
      }
    </style>
  `;
}
function getCoverTitleGradientSvgStopsForTheme(themeId) {
	const { brandCta, foreground, background } = getCoverBrandThemeForSvgExport(themeId);
	const { family } = getCoverTheme(themeId);
	if (family === "dark") return [
		{
			offset: "0%",
			color: mixOklchHex(brandCta, foreground, 55)
		},
		{
			offset: "28%",
			color: mixOklchHex(brandCta, foreground, 88)
		},
		{
			offset: "62%",
			color: foreground
		},
		{
			offset: "100%",
			color: foreground
		}
	];
	return [
		{
			offset: "0%",
			color: mixOklchHex(brandCta, background, 45)
		},
		{
			offset: "18%",
			color: mixOklchHex(brandCta, foreground, 72)
		},
		{
			offset: "46%",
			color: foreground
		},
		{
			offset: "100%",
			color: foreground
		}
	];
}
function getCoverTitleGradientSvgStops(themeId) {
	return getCoverTitleGradientSvgStopsForTheme(themeId);
}
function getCoverTitleGradientSvgLine(angleDeg = 145) {
	const angleRad = (angleDeg - 90) * Math.PI / 180;
	return {
		x1: .5 - Math.cos(angleRad) * .5,
		y1: .5 - Math.sin(angleRad) * .5,
		x2: .5 + Math.cos(angleRad) * .5,
		y2: .5 + Math.sin(angleRad) * .5
	};
}
function getCoverTitleGradientLineHalfLength(width, height, angleDeg = 145) {
	const angleRad = (angleDeg - 90) * Math.PI / 180;
	return Math.abs(width / 2 * Math.sin(angleRad)) + Math.abs(height / 2 * Math.cos(angleRad));
}
function getCoverTitleGradientUserSpaceLine(bounds, angleDeg = 145) {
	const angleRad = (angleDeg - 90) * Math.PI / 180;
	const cx = bounds.x + bounds.width / 2;
	const cy = bounds.y + bounds.height / 2;
	const length = getCoverTitleGradientLineHalfLength(bounds.width, bounds.height, angleDeg);
	return {
		x1: cx - Math.cos(angleRad) * length,
		y1: cy - Math.sin(angleRad) * length,
		x2: cx + Math.cos(angleRad) * length,
		y2: cy + Math.sin(angleRad) * length
	};
}
function buildCoverTitleGradientSvgDef(themeId, userSpaceBounds) {
	const stops = getCoverTitleGradientSvgStops(themeId).map((stop) => `<stop offset="${stop.offset}" stop-color="${stop.color}" />`).join("\n        ");
	if (userSpaceBounds) {
		const line$1 = getCoverTitleGradientUserSpaceLine(userSpaceBounds);
		return `
      <linearGradient id="cover-title-gradient" gradientUnits="userSpaceOnUse" x1="${line$1.x1}" y1="${line$1.y1}" x2="${line$1.x2}" y2="${line$1.y2}">
        ${stops}
      </linearGradient>
  `;
	}
	const line = getCoverTitleGradientSvgLine();
	return `
      <linearGradient id="cover-title-gradient" gradientUnits="objectBoundingBox" x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}">
        ${stops}
      </linearGradient>
  `;
}
var COVER_SVG_CAP_HEIGHT = .82;
function coverSvgTextBaseline(layoutY, fontSize) {
	return Math.round(layoutY + fontSize * COVER_SVG_CAP_HEIGHT);
}
function coverSvgConnectorBaseline(fontSize) {
	return Math.round(fontSize * .35);
}
const COVER_TABLE_LAYOUT = {
	cardPaddingX: 24,
	cardPaddingY: 24,
	titleFontSize: 42,
	titleLineHeight: 50,
	subtitleFontSize: 24,
	subtitleGap: 12,
	titleCardGap: 28,
	rowHeight: 58,
	headerFontSize: 16,
	cellFontSize: 17,
	innerRadius: 14,
	outerRadius: 24,
	borderWidth: COVER_HERO_SCREENSHOT_FRAME.borderWidth
};
const COVER_TABLE_REFERENCE_FRAME_WIDTH = getCoverFrameWidthPx(94, {
	width: COVER_WIDTH,
	height: 630
});
function getScaledCoverTableLayout(frameWidth) {
	const scale = frameWidth / COVER_TABLE_REFERENCE_FRAME_WIDTH;
	return {
		cardPaddingX: COVER_TABLE_LAYOUT.cardPaddingX * scale,
		cardPaddingY: COVER_TABLE_LAYOUT.cardPaddingY * scale,
		titleFontSize: COVER_TABLE_LAYOUT.titleFontSize * scale,
		titleLineHeight: COVER_TABLE_LAYOUT.titleLineHeight * scale,
		subtitleFontSize: COVER_TABLE_LAYOUT.subtitleFontSize * scale,
		subtitleGap: COVER_TABLE_LAYOUT.subtitleGap * scale,
		titleCardGap: COVER_TABLE_LAYOUT.titleCardGap * scale,
		rowHeight: COVER_TABLE_LAYOUT.rowHeight * scale,
		headerFontSize: COVER_TABLE_LAYOUT.headerFontSize * scale,
		cellFontSize: COVER_TABLE_LAYOUT.cellFontSize * scale,
		innerRadius: COVER_TABLE_LAYOUT.innerRadius * scale,
		outerRadius: COVER_TABLE_LAYOUT.outerRadius * scale,
		borderWidth: Math.max(1, COVER_TABLE_LAYOUT.borderWidth * scale)
	};
}
function truncateCellText(value, maxLength) {
	const trimmed = value.trim();
	if (trimmed.length <= maxLength) return trimmed;
	return `${trimmed.slice(0, Math.max(0, maxLength - 1))}…`;
}
function coverTableRowTextY(rowY, layout, fontSize) {
	return Math.round(rowY + (layout.rowHeight - fontSize) / 2);
}
function measureCoverTableTitleBlockHeight(title, subtitle, layout = COVER_TABLE_LAYOUT) {
	if (!title && !subtitle) return 0;
	const titleText = title ? stripCoverTitleSuffix(title) : "";
	return (titleText ? layout.titleLineHeight : 0) + (titleText && subtitle ? layout.subtitleGap : 0) + (subtitle ? layout.subtitleFontSize + 8 : 0);
}
function buildCoverTableTitleBlockSvg(title, subtitle, centerX, yOffset, brand, layout) {
	if (!title && !subtitle) return {
		svg: "",
		height: 0
	};
	const titleText = title ? stripCoverTitleSuffix(title) : "";
	const titleY = yOffset;
	const subtitleY = titleText ? titleY + layout.titleLineHeight + layout.subtitleGap : titleY;
	return {
		svg: `
    ${titleText ? `<text class="cover-title" text-anchor="middle" fill="${brand.foreground}" font-size="${layout.titleFontSize}" font-weight="600" x="${centerX}" y="${coverSvgTextBaseline(titleY, layout.titleFontSize)}">${escapeXml(titleText)}</text>` : ""}
    ${subtitle ? `<text class="cover-body" text-anchor="middle" fill="${brand.mutedForeground}" font-size="${layout.subtitleFontSize}" x="${centerX}" y="${coverSvgTextBaseline(subtitleY, layout.subtitleFontSize)}">${escapeXml(subtitle)}</text>` : ""}
  `,
		height: measureCoverTableTitleBlockHeight(title, subtitle, layout)
	};
}
function buildRoundedTopRectPath(x, y, width, height, radius) {
	const r = Math.min(radius, width / 2, height);
	return [
		`M ${x + r} ${y}`,
		`H ${x + width - r}`,
		`Q ${x + width} ${y} ${x + width} ${y + r}`,
		`V ${y + height}`,
		`H ${x}`,
		`V ${y + r}`,
		`Q ${x} ${y} ${x + r} ${y}`,
		"Z"
	].join(" ");
}
function buildCoverTableGridSvgFragment(options) {
	const { x, y, width, headers, rows, showHeader, brand, layout, clipId } = options;
	const columnCount = headers.length;
	if (columnCount === 0) return {
		svg: "",
		clipPathDef: "",
		height: 0
	};
	const colWidth = width / columnCount;
	const height = ((showHeader ? 1 : 0) + rows.length) * layout.rowHeight;
	const maxChars = Math.max(8, Math.floor(colWidth / 8));
	const radius = Math.max(.5, layout.innerRadius);
	const maskId = clipId;
	const clippedParts = [`<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${brand.background}" opacity="0.4" />`];
	let rowIndex = 0;
	if (showHeader) {
		const rowY = y + rowIndex * layout.rowHeight;
		clippedParts.push(`<path d="${buildRoundedTopRectPath(x, rowY, width, layout.rowHeight, radius)}" fill="${brand.border}" opacity="0.45" />`);
		headers.forEach((header, col) => {
			const cellCenterX = x + col * colWidth + colWidth / 2;
			clippedParts.push(`<text class="cover-body" text-anchor="middle" fill="${brand.foreground}" font-size="${layout.headerFontSize}" font-weight="600" letter-spacing="0.04em" x="${cellCenterX}" y="${coverSvgTextBaseline(coverTableRowTextY(rowY, layout, layout.headerFontSize), layout.headerFontSize)}">${escapeXml(truncateCellText(header, maxChars).toUpperCase())}</text>`);
		});
		rowIndex += 1;
	}
	rows.forEach((row) => {
		const rowY = y + rowIndex * layout.rowHeight;
		if (rowIndex > (showHeader ? 1 : 0)) clippedParts.push(`<line x1="${x}" y1="${rowY}" x2="${x + width}" y2="${rowY}" stroke="${brand.border}" stroke-width="1" />`);
		row.forEach((cell, col) => {
			const cellCenterX = x + col * colWidth + colWidth / 2;
			const isFirstCol = col === 0;
			clippedParts.push(`<text class="cover-body" text-anchor="middle" fill="${isFirstCol ? brand.foreground : brand.mutedForeground}" font-size="${layout.cellFontSize}" font-weight="${isFirstCol ? 600 : 400}" x="${cellCenterX}" y="${coverSvgTextBaseline(coverTableRowTextY(rowY, layout, layout.cellFontSize), layout.cellFontSize)}">${escapeXml(truncateCellText(cell, maxChars))}</text>`);
			if (col > 0) {
				const lineX = x + col * colWidth;
				clippedParts.push(`<line x1="${lineX}" y1="${rowY}" x2="${lineX}" y2="${rowY + layout.rowHeight}" stroke="${brand.border}" stroke-width="1" opacity="0.65" />`);
			}
		});
		rowIndex += 1;
	});
	const maskDef = `
    <mask id="${maskId}" maskUnits="userSpaceOnUse">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="white" />
    </mask>
  `;
	return {
		svg: `
      <g mask="url(#${maskId})">
        ${clippedParts.join("\n")}
      </g>
      <rect
        x="${x}"
        y="${y}"
        width="${width}"
        height="${height}"
        rx="${radius}"
        ry="${radius}"
        fill="none"
        stroke="${brand.border}"
        stroke-width="1"
      />
    `,
		clipPathDef: maskDef,
		height
	};
}
function buildCoverTableFrameComposition(options) {
	const { themeId, frameWidth, title, subtitle, headers, rows, showHeader = true, clipIdPrefix, titleCenterX = frameWidth / 2 } = options;
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const glass = getCoverScreenshotGlassColors(themeId);
	const layout = getScaledCoverTableLayout(frameWidth);
	const contentX = layout.cardPaddingX;
	const contentWidth = frameWidth - layout.cardPaddingX * 2;
	const gridClipId = `${clipIdPrefix}-grid`;
	const gridHeight = ((showHeader ? 1 : 0) + rows.length) * layout.rowHeight;
	const cardHeight = layout.cardPaddingY * 2 + gridHeight;
	const titleHeight = measureCoverTableTitleBlockHeight(title, subtitle, layout);
	const titleCardGap = titleHeight > 0 ? layout.titleCardGap : 0;
	const totalHeight = titleHeight + titleCardGap + cardHeight;
	const cardY = titleHeight + titleCardGap;
	const gridAbsoluteY = cardY + layout.cardPaddingY;
	const titleBlock = buildCoverTableTitleBlockSvg(title, subtitle, titleCenterX, 0, brand, layout);
	const outerRadius = Math.max(.5, layout.outerRadius);
	const tableGridAbsolute = buildCoverTableGridSvgFragment({
		x: contentX,
		y: gridAbsoluteY,
		width: contentWidth,
		headers,
		rows,
		showHeader,
		brand,
		layout,
		clipId: gridClipId
	});
	return {
		svg: `
    ${titleBlock.svg}
    <rect
      x="0"
      y="${cardY}"
      width="${frameWidth}"
      height="${cardHeight}"
      rx="${outerRadius}"
      ry="${outerRadius}"
      fill="${glass.shellFill}"
      stroke="${glass.shellBorder}"
      stroke-width="${layout.borderWidth}"
    />
    ${tableGridAbsolute.svg}
  `,
		defs: tableGridAbsolute.clipPathDef,
		width: frameWidth,
		height: totalHeight,
		strokePad: layout.borderWidth
	};
}
export { getScaledCoverTableLayout as a, coverSvgTextBaseline as c, buildCoverTableTitleBlockSvg as i, buildCoverTitleGradientSvgDef as l, buildCoverTableFrameComposition as n, measureCoverTableTitleBlockHeight as o, buildCoverTableGridSvgFragment as r, coverSvgConnectorBaseline as s, COVER_TABLE_LAYOUT as t, buildCoverExportFontStyleBlock as u };
