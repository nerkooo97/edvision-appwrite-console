import { b as initTicketOgStubAnchorBox, c as INIT_TICKET_IMAGE_HEIGHT, d as INIT_TICKET_OG_EXPORT_HEIGHT, f as INIT_TICKET_OG_EXPORT_WIDTH, l as INIT_TICKET_IMAGE_WIDTH, v as initTicketOgContentBox, y as initTicketOgScalePx } from "./ticket-layout-B97VGq99.js";
import "./render-context-C1ssi7kM.js";
import { r as COVER_EXPORT_TTF_SOURCES, t as readCoverPublicAssetBuffer } from "./public-assets-2YjDGwMP.js";
import { n as getFrameworkIconFile } from "./icons-Dw9jcxHS.js";
import { i as getInitTicketStackOption } from "./ticket-stack-pzBI8NL4.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ImageResponse } from "@vercel/og";
import sharp from "sharp";
const INIT_TICKET_OG_FONT_INTER = "Inter";
var cachedFonts = null;
async function loadOgFont(relativePath, weight) {
	const ttf = await readCoverPublicAssetBuffer(relativePath);
	if (!ttf) throw new Error(`Init ticket OG font not found: ${relativePath}`);
	return {
		name: INIT_TICKET_OG_FONT_INTER,
		data: Uint8Array.from(ttf).buffer,
		weight,
		style: "normal"
	};
}
async function loadInitTicketOgFonts() {
	if (cachedFonts) return cachedFonts;
	cachedFonts = await Promise.all([loadOgFont(COVER_EXPORT_TTF_SOURCES.interRegular, 400), loadOgFont(COVER_EXPORT_TTF_SOURCES.interSemibold, 600)]);
	return cachedFonts;
}
var SERVER_BRAND_CTA = "#ff8d11";
const INIT_TICKET_OG_LAYOUT = {
	wordmarkHeight: initTicketOgScalePx(38),
	dateSize: initTicketOgScalePx(13),
	stackIconSize: initTicketOgScalePx(20),
	stackGap: initTicketOgScalePx(14),
	headerGap: initTicketOgScalePx(8),
	bodyGap: initTicketOgScalePx(16),
	detailGap: initTicketOgScalePx(10),
	detailPaddingTop: initTicketOgScalePx(16),
	titleSize: initTicketOgScalePx(16),
	githubSize: initTicketOgScalePx(12),
	githubIconSize: initTicketOgScalePx(14),
	githubGap: initTicketOgScalePx(6),
	passSize: initTicketOgScalePx(9),
	ticketSize: initTicketOgScalePx(10),
	stubWordmarkHeight: initTicketOgScalePx(14),
	stubTicketSize: initTicketOgScalePx(12),
	stubNameSize: initTicketOgScalePx(16),
	stubPassSize: initTicketOgScalePx(7),
	stubGap: initTicketOgScalePx(4)
};
function resolveInitTicketOgAccentColor(accentColor) {
	return accentColor.startsWith("var(") ? SERVER_BRAND_CTA : accentColor;
}
function getInitTicketOgPalette(usesDarkChrome) {
	return {
		text: usesDarkChrome ? "#ffffff" : "#111827",
		date: usesDarkChrome ? "rgba(255,255,255,0.60)" : "#737373",
		muted: usesDarkChrome ? "rgba(255,255,255,0.55)" : "#737373",
		label: usesDarkChrome ? "rgba(255,255,255,0.70)" : "#525252",
		github: usesDarkChrome ? "rgba(255,255,255,0.75)" : "#525252",
		separator: usesDarkChrome ? "rgba(255,255,255,0.20)" : "rgba(17,24,39,0.15)"
	};
}
function initTicketOgEmTracking(fontSize, em) {
	return Math.round(fontSize * em * 10) / 10;
}
function initTicketOgNameTracking(nameSize) {
	return initTicketOgEmTracking(nameSize, -.025);
}
function initTicketOgTextStyle(size, color, extra) {
	return {
		fontFamily: INIT_TICKET_OG_FONT_INTER,
		fontSize: size,
		color,
		margin: 0,
		padding: 0,
		lineHeight: 1.2,
		...extra
	};
}
function initTicketOgHolderNameSize(name) {
	const len = name.trim().length;
	if (len > 32) return initTicketOgScalePx(28);
	if (len > 24) return initTicketOgScalePx(34);
	if (len > 16) return initTicketOgScalePx(40);
	return initTicketOgScalePx(48);
}
function initTicketOgStubTitleSize(title) {
	const len = title.trim().length;
	if (len > 36) return initTicketOgScalePx(8);
	if (len > 28) return initTicketOgScalePx(9);
	return initTicketOgScalePx(10);
}
function truncateInitTicketOgText(value, maxLength) {
	const trimmed = value.trim();
	if (trimmed.length <= maxLength) return trimmed;
	return `${trimmed.slice(0, Math.max(0, maxLength - 3)).trim()}...`;
}
var INIT_TICKET_OG_UI_DARK = {
	background: "#19191c",
	border: "#3f3f46",
	mutedWash: "rgba(39, 39, 42, 0.22)",
	heroPink: "#ff8d11"
};
var INIT_TICKET_OG_UI_LIGHT = {
	background: "#ffffff",
	border: "#e4e4e7",
	mutedWash: "rgba(244, 244, 245, 0.28)",
	heroPink: "#ff8d11"
};
var DOT_SPACING = 18;
function getInitTicketOgUiPalette(usesDarkChrome) {
	return usesDarkChrome ? INIT_TICKET_OG_UI_DARK : INIT_TICKET_OG_UI_LIGHT;
}
function hexToRgb(hex) {
	const normalized = hex.replace("#", "").trim();
	if (normalized.length === 3) {
		const [r, g, b] = normalized.split("");
		return {
			r: Number.parseInt(`${r}${r}`, 16),
			g: Number.parseInt(`${g}${g}`, 16),
			b: Number.parseInt(`${b}${b}`, 16)
		};
	}
	if (normalized.length !== 6) return null;
	return {
		r: Number.parseInt(normalized.slice(0, 2), 16),
		g: Number.parseInt(normalized.slice(2, 4), 16),
		b: Number.parseInt(normalized.slice(4, 6), 16)
	};
}
function rgba(hex, alpha) {
	const rgb = hexToRgb(hex);
	if (!rgb) return `rgba(253, 54, 110, ${alpha})`;
	return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}
function buildInitTicketOgParticleLayer(accent, usesDarkChrome) {
	return [
		{
			cx: 760,
			cy: 180,
			r: 48,
			opacity: usesDarkChrome ? .14 : .09
		},
		{
			cx: 860,
			cy: 260,
			r: 34,
			opacity: usesDarkChrome ? .11 : .07
		},
		{
			cx: 680,
			cy: 320,
			r: 40,
			opacity: usesDarkChrome ? .09 : .06
		},
		{
			cx: 920,
			cy: 140,
			r: 24,
			opacity: usesDarkChrome ? .08 : .05
		},
		{
			cx: 540,
			cy: 220,
			r: 20,
			opacity: usesDarkChrome ? .07 : .04
		},
		{
			cx: 820,
			cy: 360,
			r: 28,
			opacity: usesDarkChrome ? .08 : .05
		},
		{
			cx: 180,
			cy: 520,
			r: 32,
			opacity: usesDarkChrome ? .05 : .03
		},
		{
			cx: 960,
			cy: 420,
			r: 18,
			opacity: usesDarkChrome ? .06 : .04
		}
	].map((particle) => `<circle cx="${particle.cx}" cy="${particle.cy}" r="${particle.r}" fill="${rgba(accent, particle.opacity)}" />`).join("");
}
function buildInitTicketOgBackgroundSvg(accentColor, usesDarkChrome, width = INIT_TICKET_IMAGE_WIDTH, height = 682) {
	const palette = getInitTicketOgUiPalette(usesDarkChrome);
	const accent = resolveInitTicketOgAccentColor(accentColor);
	const particles = buildInitTicketOgParticleLayer(accent, usesDarkChrome);
	return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="init-ticket-dots" width="${DOT_SPACING}" height="${DOT_SPACING}" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="${palette.border}" />
        </pattern>
        <radialGradient id="init-ticket-accent-glow" cx="74%" cy="36%" r="52%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="${usesDarkChrome ? .12 : .08}" />
          <stop offset="45%" stop-color="${accent}" stop-opacity="${usesDarkChrome ? .04 : .03}" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="init-ticket-pink-wash" cx="12%" cy="88%" r="48%">
          <stop offset="0%" stop-color="${palette.heroPink}" stop-opacity="${usesDarkChrome ? .06 : .04}" />
          <stop offset="55%" stop-color="${palette.heroPink}" stop-opacity="${usesDarkChrome ? .02 : .015}" />
          <stop offset="100%" stop-color="${palette.heroPink}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="init-ticket-center-wash" cx="50%" cy="52%" r="72%">
          <stop offset="0%" stop-color="${palette.background}" stop-opacity="0" />
          <stop offset="100%" stop-color="${palette.background}" stop-opacity="${usesDarkChrome ? .22 : .12}" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="${palette.background}" />
      <rect width="${width}" height="${height}" fill="url(#init-ticket-dots)" opacity="${usesDarkChrome ? .38 : .48}" />
      <rect width="${width}" height="${height}" fill="url(#init-ticket-pink-wash)" />
      <rect width="${width}" height="${height}" fill="url(#init-ticket-accent-glow)" />
      <rect width="${width}" height="${height}" fill="${palette.mutedWash}" />
      ${particles}
      <rect width="${width}" height="${height}" fill="url(#init-ticket-center-wash)" />
    </svg>
  `.trim();
}
function buildInitTicketOgBackgroundDataUri(accentColor, usesDarkChrome, width = INIT_TICKET_IMAGE_WIDTH, height = 682) {
	const svg = buildInitTicketOgBackgroundSvg(accentColor, usesDarkChrome, width, height);
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
var INIT_WORDMARK_VIEWBOX = "-1 -82.4 185 92.4";
var INIT_WORDMARK_LETTERS = [
	{
		x: 0,
		d: "M19.4 -62.6Q15.4 -62.6 12.9 -65.05Q10.4 -67.5 10.4 -71.3Q10.4 -75.6 13.4 -78.5Q16.4 -81.4 20.7 -81.4Q24.7 -81.4 27.2 -78.95Q29.7 -76.5 29.7 -72.7Q29.7 -68.4 26.7 -65.5Q23.7 -62.6 19.4 -62.6ZM0 -7.2 9.1 -58.8H26.5L17.4 -7.2Z"
	},
	{
		x: 24,
		d: "M39.3 -59.4Q46.9 -59.4 52.3 -55.15Q57.7 -50.9 57.7 -41.4Q57.7 -38 57 -34.2L52.2 -7.2H34.9L39.7 -34.3Q40.2 -37.3 40.2 -39.1Q40.2 -45.6 33.2 -45.6Q24.1 -45.6 21.9 -33.3L17.3 -7.2H0L9.1 -58.8H24.2L24.4 -53.3Q30.8 -59.4 39.3 -59.4Z"
	},
	{
		x: 82,
		d: "M19.4 -62.6Q15.4 -62.6 12.9 -65.05Q10.4 -67.5 10.4 -71.3Q10.4 -75.6 13.4 -78.5Q16.4 -81.4 20.7 -81.4Q24.7 -81.4 27.2 -78.95Q29.7 -76.5 29.7 -72.7Q29.7 -68.4 26.7 -65.5Q23.7 -62.6 19.4 -62.6ZM0 -7.2 9.1 -58.8H26.5L17.4 -7.2Z"
	},
	{
		x: 106,
		d: "M6.3 -23.3 10.1 -44.5H2L4.5 -58.8H12.6L15.2 -73.3H32.5L29.9 -58.8H41L38.5 -44.5H27.4L24.1 -26.2Q23.9 -25 23.9 -24.2Q23.9 -21.5 27.5 -21.5H34.4L31.9 -7.2H20.5Q13.6 -7.2 9.75 -10.3Q5.9 -13.4 5.9 -19.4Q5.9 -20.5 6.3 -23.3Z"
	}
];
var INIT_WORDMARK_UNDERSCORE = {
	x: 141.7,
	d: "M38.5 9H-2.9L-0.1 -6.6H41.3Z"
};
function InitTicketOgWordmark({ height, textColor, accentColor }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: INIT_WORDMARK_VIEWBOX,
		width: height * (185 / 92.4),
		height,
		fill: "none",
		children: [INIT_WORDMARK_LETTERS.map((letter, index) => /* @__PURE__ */ jsx("g", {
			transform: `translate(${letter.x} 0)`,
			children: /* @__PURE__ */ jsx("path", {
				fill: textColor,
				d: letter.d
			})
		}, `init-letter-${index}`)), /* @__PURE__ */ jsx("g", {
			transform: `translate(${INIT_WORDMARK_UNDERSCORE.x} 0)`,
			children: /* @__PURE__ */ jsx("path", {
				fill: accentColor,
				d: INIT_WORDMARK_UNDERSCORE.d
			})
		})]
	});
}
function TicketStubOg({ ticketNumber, holderName, holderTitle, passLabel, dateRangeLabel, accentColor, palette, stubW, contentH }) {
	const { left, right, bottom } = initTicketOgStubAnchorBox(stubW, contentH);
	const layout = INIT_TICKET_OG_LAYOUT;
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "relative",
			display: "flex",
			height: contentH,
			width: stubW
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				display: "flex",
				alignItems: "flex-end",
				left,
				right,
				bottom
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: layout.stubGap,
					transform: "rotate(-90deg)",
					transformOrigin: "bottom left"
				},
				children: [
					/* @__PURE__ */ jsx(InitTicketOgWordmark, {
						height: layout.stubWordmarkHeight,
						textColor: palette.text,
						accentColor
					}),
					/* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(layout.stubTicketSize, accentColor, {
							fontWeight: 600,
							letterSpacing: .5
						}),
						children: ticketNumber
					}),
					/* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(layout.stubNameSize, palette.label, { fontWeight: 400 }),
						children: holderName
					}),
					/* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(initTicketOgStubTitleSize(holderTitle), palette.muted, {
							fontWeight: 500,
							lineHeight: 1
						}),
						children: holderTitle
					}),
					/* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(layout.stubPassSize, palette.muted, {
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: initTicketOgEmTracking(layout.stubPassSize, .22)
						}),
						children: passLabel
					}),
					/* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(layout.stubPassSize, palette.muted, {
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: initTicketOgEmTracking(layout.stubPassSize, .14)
						}),
						children: dateRangeLabel
					})
				]
			})
		})
	});
}
function InitTicketOgTicketLayer({ data, prepared }) {
	const usesDarkChrome = data.ticketAppearance.usesDarkChrome;
	const palette = getInitTicketOgPalette(usesDarkChrome);
	const accentColor = resolveInitTicketOgAccentColor(data.ticketAppearance.accentColor);
	const { contentX, contentY, contentH, mainW, stubW } = initTicketOgContentBox();
	const layout = INIT_TICKET_OG_LAYOUT;
	const holderTitle = data.prefs.holderTitle?.trim() || data.ticketAppearance.holderTitle;
	const holderName = truncateInitTicketOgText(data.holderName, 34);
	const holderNameSize = initTicketOgHolderNameSize(data.holderName);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			position: "relative",
			display: "flex",
			width: INIT_TICKET_IMAGE_WIDTH,
			height: 682,
			backgroundColor: "rgba(0, 0, 0, 0)"
		},
		children: [prepared.backgroundSrc ? /* @__PURE__ */ jsx("img", {
			src: prepared.backgroundSrc,
			alt: "",
			width: INIT_TICKET_IMAGE_WIDTH,
			height: 682,
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				width: INIT_TICKET_IMAGE_WIDTH,
				height: 682
			}
		}) : null, /* @__PURE__ */ jsxs("div", {
			style: {
				position: "absolute",
				display: "flex",
				top: contentY,
				left: contentX,
				width: mainW + stubW,
				height: contentH,
				color: palette.text
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					width: mainW,
					height: contentH,
					paddingRight: Math.round(mainW * .08)
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: layout.headerGap
					},
					children: [/* @__PURE__ */ jsx(InitTicketOgWordmark, {
						height: layout.wordmarkHeight,
						textColor: palette.text,
						accentColor
					}), /* @__PURE__ */ jsx("div", {
						style: initTicketOgTextStyle(layout.dateSize, palette.date, {
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: initTicketOgEmTracking(layout.dateSize, .16)
						}),
						children: data.dateRangeLabel
					})]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: layout.bodyGap
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: layout.stackGap
						},
						children: prepared.stackIcons.map((icon, index) => icon.src ? /* @__PURE__ */ jsx("img", {
							src: icon.src,
							alt: "",
							width: layout.stackIconSize,
							height: layout.stackIconSize,
							style: {
								width: layout.stackIconSize,
								height: layout.stackIconSize,
								objectFit: "contain"
							}
						}, `${icon.label}-${index}`) : null)
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: layout.detailGap,
							borderTop: `1px dashed ${palette.separator}`,
							paddingTop: layout.detailPaddingTop
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: initTicketOgTextStyle(holderNameSize, palette.text, {
									fontWeight: 400,
									letterSpacing: initTicketOgNameTracking(holderNameSize),
									lineHeight: 1.02
								}),
								children: holderName
							}),
							/* @__PURE__ */ jsx("div", {
								style: initTicketOgTextStyle(layout.titleSize, palette.label, {
									fontWeight: 500,
									lineHeight: 1.625
								}),
								children: truncateInitTicketOgText(holderTitle, 40)
							}),
							data.githubUsername ? /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: layout.githubGap
								},
								children: [prepared.githubIconSrc ? /* @__PURE__ */ jsx("img", {
									src: prepared.githubIconSrc,
									alt: "",
									width: layout.githubIconSize,
									height: layout.githubIconSize,
									style: {
										width: layout.githubIconSize,
										height: layout.githubIconSize,
										objectFit: "contain",
										opacity: usesDarkChrome ? .75 : 1
									}
								}) : null, /* @__PURE__ */ jsx("div", {
									style: initTicketOgTextStyle(layout.githubSize, palette.github, { fontWeight: 500 }),
									children: `@${truncateInitTicketOgText(data.githubUsername, 24)}`
								})]
							}) : null,
							/* @__PURE__ */ jsx("div", {
								style: initTicketOgTextStyle(layout.passSize, palette.muted, {
									fontWeight: 600,
									textTransform: "uppercase",
									letterSpacing: initTicketOgEmTracking(layout.passSize, .2)
								}),
								children: data.ticketAppearance.passLabel
							}),
							/* @__PURE__ */ jsx("div", {
								style: initTicketOgTextStyle(layout.ticketSize, accentColor, {
									fontWeight: 500,
									letterSpacing: .5
								}),
								children: data.ticketNumber
							})
						]
					})]
				})]
			}), /* @__PURE__ */ jsx(TicketStubOg, {
				ticketNumber: data.ticketNumber,
				holderName,
				holderTitle,
				passLabel: data.ticketAppearance.passLabel,
				dateRangeLabel: data.dateRangeLabel,
				accentColor,
				palette,
				stubW,
				contentH
			})]
		})]
	});
}
const INIT_TICKET_OG_3D = {
	rotateX: 6,
	rotateY: 14,
	perspective: 1e3
};
function degToRad(value) {
	return value * Math.PI / 180;
}
function rotateY(point, radians) {
	const cos = Math.cos(radians);
	const sin = Math.sin(radians);
	return {
		x: point.x * cos + point.z * sin,
		y: point.y,
		z: -point.x * sin + point.z * cos
	};
}
function rotateX(point, radians) {
	const cos = Math.cos(radians);
	const sin = Math.sin(radians);
	return {
		x: point.x,
		y: point.y * cos - point.z * sin,
		z: point.y * sin + point.z * cos
	};
}
function projectPoint(point, perspective, centerX, centerY) {
	const depth = perspective - point.z;
	if (depth <= 1) return {
		x: centerX,
		y: centerY
	};
	const scale = perspective / depth;
	return {
		x: centerX + point.x * scale,
		y: centerY + point.y * scale
	};
}
function computeInitTicketOgProjectedQuad(width, height, config = INIT_TICKET_OG_3D) {
	const centerX = width / 2;
	const centerY = height / 2;
	const halfW = width / 2;
	const halfH = height / 2;
	const rx = degToRad(config.rotateX);
	const ry = degToRad(config.rotateY);
	return centerInitTicketOgQuadInCanvas([
		{
			x: -halfW,
			y: -halfH,
			z: 0
		},
		{
			x: halfW,
			y: -halfH,
			z: 0
		},
		{
			x: halfW,
			y: halfH,
			z: 0
		},
		{
			x: -halfW,
			y: halfH,
			z: 0
		}
	].map((corner) => {
		return projectPoint(rotateX(rotateY(corner, ry), rx), config.perspective, centerX, centerY);
	}), width, height);
}
function centerInitTicketOgQuadInCanvas(quad, width, height) {
	const xs = quad.map((point) => point.x);
	const ys = quad.map((point) => point.y);
	const bboxCenterX = (Math.min(...xs) + Math.max(...xs)) / 2;
	const bboxCenterY = (Math.min(...ys) + Math.max(...ys)) / 2;
	const dx = width / 2 - bboxCenterX;
	const dy = height / 2 - bboxCenterY;
	return quad.map((point) => ({
		x: point.x + dx,
		y: point.y + dy
	}));
}
function initTicketOgShadowPlacement(width, height, config = INIT_TICKET_OG_3D) {
	const [, , br, bl] = computeInitTicketOgProjectedQuad(width, height, config);
	const anchorX = (br.x + bl.x) / 2;
	const anchorY = Math.max(br.y, bl.y);
	const shadowW = Math.round(width * .62);
	const shadowH = Math.round(height * .12);
	return {
		left: Math.round(anchorX - shadowW / 2),
		top: Math.round(anchorY - shadowH * .35),
		width: shadowW,
		height: shadowH
	};
}
function solveLinearSystem(matrix, values) {
	const size = values.length;
	const augmented = matrix.map((row, index) => [...row, values[index]]);
	for (let column = 0; column < size; column++) {
		let pivotRow = column;
		for (let row = column + 1; row < size; row++) if (Math.abs(augmented[row][column]) > Math.abs(augmented[pivotRow][column])) pivotRow = row;
		const pivot = augmented[pivotRow];
		augmented[pivotRow] = augmented[column];
		augmented[column] = pivot;
		const pivotValue = augmented[column][column];
		if (Math.abs(pivotValue) < 1e-8) continue;
		for (let row = 0; row < size; row++) {
			if (row === column) continue;
			const factor = augmented[row][column] / pivotValue;
			for (let col = column; col <= size; col++) augmented[row][col] -= factor * augmented[column][col];
		}
	}
	return augmented.map((row, index) => row[size] / (row[index] || 1));
}
function computeRectToQuadHomography(width, height, quad) {
	const [tl, tr, br, bl] = quad;
	const src = [
		{
			x: 0,
			y: 0,
			u: tl.x,
			v: tl.y
		},
		{
			x: width,
			y: 0,
			u: tr.x,
			v: tr.y
		},
		{
			x: width,
			y: height,
			u: br.x,
			v: br.y
		},
		{
			x: 0,
			y: height,
			u: bl.x,
			v: bl.y
		}
	];
	const matrix = [];
	const values = [];
	for (const point of src) {
		matrix.push([
			point.x,
			point.y,
			1,
			0,
			0,
			0,
			-point.u * point.x,
			-point.u * point.y
		]);
		values.push(point.u);
		matrix.push([
			0,
			0,
			0,
			point.x,
			point.y,
			1,
			-point.v * point.x,
			-point.v * point.y
		]);
		values.push(point.v);
	}
	const [h1, h2, h3, h4, h5, h6, h7, h8] = solveLinearSystem(matrix, values);
	return [
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		h7,
		h8,
		1
	];
}
function invertHomography3x3(matrix) {
	const [a, b, c, d, e, f, g, h, i] = matrix;
	const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
	if (Math.abs(det) < 1e-10) return null;
	const invDet = 1 / det;
	return [
		(e * i - f * h) * invDet,
		(c * h - b * i) * invDet,
		(b * f - c * e) * invDet,
		(f * g - d * i) * invDet,
		(a * i - c * g) * invDet,
		(c * d - a * f) * invDet,
		(d * h - e * g) * invDet,
		(b * g - a * h) * invDet,
		(a * e - b * d) * invDet
	];
}
function applyHomography(matrix, x, y) {
	const [a, b, c, d, e, f, g, h, i] = matrix;
	const denom = g * x + h * y + i;
	if (Math.abs(denom) < 1e-8) return null;
	return {
		x: (a * x + b * y + c) / denom,
		y: (d * x + e * y + f) / denom
	};
}
function sampleBilinear(source, width, height, x, y) {
	const clampedX = Math.min(width - 1, Math.max(0, x));
	const clampedY = Math.min(height - 1, Math.max(0, y));
	const x0 = Math.floor(clampedX);
	const y0 = Math.floor(clampedY);
	const x1 = Math.min(width - 1, x0 + 1);
	const y1 = Math.min(height - 1, y0 + 1);
	const tx = clampedX - x0;
	const ty = clampedY - y0;
	const sample = (sx, sy) => {
		const index = (sy * width + sx) * 4;
		return [
			source[index],
			source[index + 1],
			source[index + 2],
			source[index + 3]
		];
	};
	const c00 = sample(x0, y0);
	const c10 = sample(x1, y0);
	const c01 = sample(x0, y1);
	const c11 = sample(x1, y1);
	const channel = (index) => c00[index] * (1 - tx) * (1 - ty) + c10[index] * tx * (1 - ty) + c01[index] * (1 - tx) * ty + c11[index] * tx * ty;
	return [
		channel(0),
		channel(1),
		channel(2),
		channel(3)
	];
}
async function warpInitTicketOgPerspective(input, width = INIT_TICKET_IMAGE_WIDTH, height = 682, config = INIT_TICKET_OG_3D) {
	const sharp$1 = (await import("sharp")).default;
	const { data, info } = await sharp$1(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	const source = new Uint8ClampedArray(data);
	const sourceWidth = info.width;
	const sourceHeight = info.height;
	const inverse = invertHomography3x3(computeRectToQuadHomography(sourceWidth, sourceHeight, computeInitTicketOgProjectedQuad(width, height, config)));
	if (!inverse) return input;
	const output = new Uint8ClampedArray(width * height * 4);
	for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
		const mapped = applyHomography(inverse, x, y);
		const outIndex = (y * width + x) * 4;
		if (!mapped) {
			output[outIndex + 3] = 0;
			continue;
		}
		const [r, g, b, a] = sampleBilinear(source, sourceWidth, sourceHeight, mapped.x, mapped.y);
		output[outIndex] = r;
		output[outIndex + 1] = g;
		output[outIndex + 2] = b;
		output[outIndex + 3] = a;
	}
	return sharp$1(Buffer.from(output), { raw: {
		width,
		height,
		channels: 4
	} }).png().toBuffer();
}
async function bufferToPngDataUri(buffer) {
	return `data:image/png;base64,${buffer.toString("base64")}`;
}
async function loadRasterImageDataUri(publicSrc) {
	const buffer = await readCoverPublicAssetBuffer(publicSrc);
	if (!buffer) return null;
	return bufferToPngDataUri(await sharp(buffer).png().toBuffer());
}
async function loadTicketIconDataUri(publicSrc, iconKey, usesDarkChrome) {
	const buffer = await readCoverPublicAssetBuffer(publicSrc);
	if (!buffer) return null;
	const size = 64;
	const { data, info } = await sharp(buffer).ensureAlpha().resize(size, size, {
		fit: "contain",
		background: {
			r: 0,
			g: 0,
			b: 0,
			alpha: 0
		}
	}).raw().toBuffer({ resolveWithObject: true });
	const pixels = new Uint8Array(data);
	for (let i = 0; i < pixels.length; i += 4) {
		const alpha = pixels[i + 3];
		if (alpha <= 12) {
			pixels[i + 3] = 0;
			continue;
		}
		if (iconKey === "appwrite" && usesDarkChrome) continue;
		const tone = usesDarkChrome ? 255 : 0;
		pixels[i] = tone;
		pixels[i + 1] = tone;
		pixels[i + 2] = tone;
		pixels[i + 3] = usesDarkChrome ? Math.min(255, Math.round(alpha * .9)) : Math.min(255, Math.round(alpha * .85));
	}
	return bufferToPngDataUri(await sharp(Buffer.from(pixels), { raw: {
		width: info.width,
		height: info.height,
		channels: 4
	} }).png().toBuffer());
}
function resolveStackIconSrc(iconKey, usesDarkChrome) {
	if (iconKey === "appwrite") return `/icons/${usesDarkChrome ? "appwrite-white.svg" : "appwrite.svg"}`;
	const iconFile = getFrameworkIconFile(iconKey);
	return iconFile ? `/icons/${iconFile}` : null;
}
async function prepareInitTicketOgData(data) {
	const usesDarkChrome = data.ticketAppearance.usesDarkChrome;
	const uiBackgroundSrc = buildInitTicketOgBackgroundDataUri(data.ticketAppearance.accentColor, usesDarkChrome);
	const [backgroundSrc, githubIconSrc, stackIcons] = await Promise.all([
		loadRasterImageDataUri(data.ticketAppearance.backgroundSrc),
		loadTicketIconDataUri("/icons/github.svg", "github", usesDarkChrome),
		Promise.all(data.prefs.stack.map(async (id) => {
			const option = getInitTicketStackOption(id);
			if (!option) return {
				src: null,
				label: id,
				iconKey: id
			};
			const iconSrc = resolveStackIconSrc(option.iconKey, usesDarkChrome);
			return {
				src: iconSrc ? await loadTicketIconDataUri(iconSrc, option.iconKey, usesDarkChrome) : null,
				label: option.label,
				iconKey: option.iconKey
			};
		}))
	]);
	return {
		uiBackgroundSrc,
		backgroundSrc,
		stackIcons,
		githubIconSrc
	};
}
var TICKET_RENDER_OPTIONS = {
	width: INIT_TICKET_IMAGE_WIDTH,
	height: 682
};
async function renderOgPng(element, fonts, options) {
	const response = new ImageResponse(element, {
		...options,
		fonts
	});
	return Buffer.from(await response.arrayBuffer());
}
async function renderInitTicketOgShadow(usesDarkChrome) {
	const shadow = initTicketOgShadowPlacement(INIT_TICKET_IMAGE_WIDTH, 682);
	const fill = usesDarkChrome ? "rgba(0,0,0,0.38)" : "rgba(0,0,0,0.12)";
	const svg = Buffer.from(`<svg width="${shadow.width}" height="${shadow.height}" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="${shadow.width / 2}" cy="${shadow.height / 2}" rx="${shadow.width / 2}" ry="${shadow.height / 2}" fill="${fill}"/>
    </svg>`);
	const sharp$1 = (await import("sharp")).default;
	return {
		input: await sharp$1(svg).blur(28).png().toBuffer(),
		left: shadow.left,
		top: shadow.top
	};
}
async function compositeInitTicketOgExport(params) {
	const sharp$1 = (await import("sharp")).default;
	const edgePadding = 24;
	const contentHeight = 630 - edgePadding * 2;
	const contentWidth = INIT_TICKET_OG_EXPORT_WIDTH - edgePadding * 2;
	const scale = Math.min(contentHeight / 682, contentWidth / INIT_TICKET_IMAGE_WIDTH);
	const scaledWidth = Math.round(INIT_TICKET_IMAGE_WIDTH * scale);
	const scaledHeight = Math.round(682 * scale);
	const left = Math.round((INIT_TICKET_OG_EXPORT_WIDTH - scaledWidth) / 2);
	const top = Math.round((630 - scaledHeight) / 2);
	const [scaledTicketLayer, backgroundPng] = await Promise.all([sharp$1(params.ticketLayerPng).resize(scaledWidth, scaledHeight, { fit: "fill" }).png().toBuffer(), sharp$1(Buffer.from(buildInitTicketOgBackgroundSvg(params.accentColor, params.usesDarkChrome, INIT_TICKET_OG_EXPORT_WIDTH, 630))).png().toBuffer()]);
	const output = await sharp$1(backgroundPng).composite([{
		input: scaledTicketLayer,
		left,
		top
	}]).png().toBuffer();
	return new Uint8Array(output);
}
async function renderInitTicketImageWithOg(data) {
	const [fonts, prepared] = await Promise.all([loadInitTicketOgFonts(), prepareInitTicketOgData(data)]);
	const sharedProps = {
		data,
		prepared
	};
	const usesDarkChrome = data.ticketAppearance.usesDarkChrome;
	const [ticketPng, shadowLayer] = await Promise.all([renderOgPng(/* @__PURE__ */ jsx(InitTicketOgTicketLayer, { ...sharedProps }), fonts, TICKET_RENDER_OPTIONS), renderInitTicketOgShadow(usesDarkChrome)]);
	const sharp$1 = (await import("sharp")).default;
	const warpedTicket = await warpInitTicketOgPerspective(ticketPng);
	return compositeInitTicketOgExport({
		ticketLayerPng: await sharp$1({ create: {
			width: INIT_TICKET_IMAGE_WIDTH,
			height: 682,
			channels: 4,
			background: {
				r: 0,
				g: 0,
				b: 0,
				alpha: 0
			}
		} }).composite([{
			input: shadowLayer.input,
			left: shadowLayer.left,
			top: shadowLayer.top
		}, {
			input: warpedTicket,
			top: 0,
			left: 0
		}]).png().toBuffer(),
		usesDarkChrome,
		accentColor: data.ticketAppearance.accentColor
	});
}
export { renderInitTicketImageWithOg };
