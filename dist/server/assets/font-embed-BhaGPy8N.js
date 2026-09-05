import { a as COVER_WIDTH, t as COVER_HEIGHT } from "./constants-CL7SLzjY.js";
import { wt as getCoverContentLayoutTransform } from "./constants-B5zUV45z.js";
import { f as getCoverLucideIconStrokeColorFromOptions, i as loadCoverLucideIconNode, l as getCoverIconRasterTint, t as coverLucideIconNodeToSvg, w as buildCoverBrandBackgroundSvgLayers } from "./lucide-icon-svg-BStxTNvw.js";
import { n as readCoverPublicAssetDataUri, r as COVER_EXPORT_TTF_SOURCES, t as readCoverPublicAssetBuffer } from "./public-assets-2YjDGwMP.js";
import { l as buildCoverTitleGradientSvgDef, u as buildCoverExportFontStyleBlock } from "./render-frame-BkUqYiWN.js";
import { a as parseCoverLucideIconName, i as isCoverLucideIconValue } from "./lucide-icon-utils-BZZNNTPu.js";
import { n as COVER_JPEG_QUALITY, t as COVER_AVIF_QUALITY } from "./cover-image-format-CKZUHQO-.js";
import sharp from "sharp";
async function loadCoverLucideIconSvgBuffer(iconName, stroke) {
	const iconNode = await loadCoverLucideIconNode(iconName);
	if (!iconNode) return null;
	return Buffer.from(coverLucideIconNodeToSvg(iconNode, stroke), "utf-8");
}
function buildCoverBrandBackgroundParts(theme, width = COVER_WIDTH, height = 630, titleGradientBounds, templateId) {
	const { defs: backgroundDefs, layers } = buildCoverBrandBackgroundSvgLayers(theme, width, height, templateId ? { templateId } : void 0);
	return {
		defs: `
      ${backgroundDefs}
      ${buildCoverTitleGradientSvgDef(theme, titleGradientBounds)}
  `,
		layers
	};
}
function buildCoverSvgShell(params) {
	const outputWidth = params.width ?? 1200;
	const outputHeight = params.height ?? 630;
	const layoutTransform = getCoverContentLayoutTransform(outputWidth, outputHeight, params.contentAnchor);
	const titleGradientBounds = params.titleGradientBounds;
	const { defs, layers } = buildCoverBrandBackgroundParts(params.theme, outputWidth, outputHeight, titleGradientBounds, params.templateId);
	const { scale, translateX, translateY } = layoutTransform;
	return `
    <svg width="${outputWidth}" height="${outputHeight}" viewBox="0 0 ${outputWidth} ${outputHeight}" xmlns="http://www.w3.org/2000/svg">
      ${buildCoverExportFontStyleBlock(params.fontFaceCss ?? "")}
      <defs>${defs}</defs>
      ${layers}
      <g transform="translate(${translateX} ${translateY}) scale(${scale})">
        ${params.content}
      </g>
    </svg>
  `;
}
function getTitleFill(brand, gradientTitle) {
	return gradientTitle ? "url(#cover-title-gradient)" : brand.foreground;
}
async function resolveCoverImageHref(source) {
	const value = source?.trim();
	if (!value) return null;
	if (value.startsWith("data:")) return value;
	if (value.startsWith("/")) {
		const ext = value.split(".").pop()?.toLowerCase();
		return readCoverPublicAssetDataUri(value, ext === "svg" ? "image/svg+xml" : ext === "png" ? "image/png" : ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "webp" ? "image/webp" : ext === "avif" ? "image/avif" : "application/octet-stream");
	}
	if (/^https?:\/\//i.test(value)) return value;
	return null;
}
async function loadCoverImageBuffer(source, options = {}) {
	if (isCoverLucideIconValue(source)) {
		const iconName = parseCoverLucideIconName(source);
		if (!iconName || !options.lucideStroke) return null;
		return loadCoverLucideIconSvgBuffer(iconName, options.lucideStroke);
	}
	const href = await resolveCoverImageHref(source);
	if (!href) return null;
	if (href.startsWith("data:")) {
		const match = href.match(/^data:[^;]+;base64,(.+)$/);
		if (!match?.[1]) return null;
		return Buffer.from(match[1], "base64");
	}
	try {
		const response = await fetch(href);
		if (!response.ok) return null;
		return Buffer.from(await response.arrayBuffer());
	} catch {
		return null;
	}
}
const COVER_ICON_SAFE_INSET_RATIO = .12;
function getCoverIconSafeInset(size, insetRatio = COVER_ICON_SAFE_INSET_RATIO) {
	return Math.max(1, Math.round(size * insetRatio));
}
async function prepareCoverIconDataUri(source, size, options = {}) {
	const buffer = await loadCoverImageBuffer(source, { lucideStroke: isCoverLucideIconValue(source) ? getCoverLucideIconStrokeColorFromOptions(options) : void 0 });
	if (!buffer || size <= 0) return null;
	const inset = getCoverIconSafeInset(size, options.insetRatio ?? .12);
	const contentAlign = options.contentAlign ?? "center";
	const inner = contentAlign === "left" ? Math.max(1, size - inset) : Math.max(1, size - inset * 2);
	const tint = getCoverIconRasterTint(source, options.themeFamily);
	const leftTopInset = contentAlign === "left" ? Math.floor(inset / 2) : inset;
	const leftBottomInset = contentAlign === "left" ? Math.ceil(inset / 2) : inset;
	let pipeline = sharp(buffer, { density: Math.max(96, Math.ceil(inner * 2)) }).resize(inner, inner, {
		fit: "contain",
		position: contentAlign === "left" ? "west" : "centre",
		background: {
			r: 0,
			g: 0,
			b: 0,
			alpha: 0
		}
	});
	if (tint) {
		const resized = pipeline.ensureAlpha();
		const { width, height } = await resized.clone().metadata();
		if (!width || !height) return null;
		const alpha = await resized.clone().extractChannel("alpha").toBuffer();
		pipeline = sharp({ create: {
			width,
			height,
			channels: 3,
			background: tint
		} }).joinChannel(alpha);
	}
	return `data:image/png;base64,${(await pipeline.extend(contentAlign === "left" ? {
		top: leftTopInset,
		bottom: leftBottomInset,
		left: 0,
		right: inset,
		background: {
			r: 0,
			g: 0,
			b: 0,
			alpha: 0
		}
	} : {
		top: inset,
		bottom: inset,
		left: inset,
		right: inset,
		background: {
			r: 0,
			g: 0,
			b: 0,
			alpha: 0
		}
	}).png().toBuffer()).toString("base64")}`;
}
async function applyCoverImageFormat(pipeline, format) {
	switch (format) {
		case "jpeg": return pipeline.jpeg({ quality: 90 }).toBuffer();
		case "avif": return pipeline.avif({ quality: 50 }).toBuffer();
		default: return pipeline.png().toBuffer();
	}
}
async function encodeCoverImageBuffer(input, format) {
	if (format === "png") return sharp(input).png().toBuffer();
	return applyCoverImageFormat(sharp(input), format);
}
var cachedFontFaceCss = null;
var ttfDataUriCache = /* @__PURE__ */ new Map();
function shouldEmbedCoverFontsInSvg() {
	return process.platform !== "linux";
}
async function readFontTtfDataUri(relativePath) {
	const normalized = relativePath.replace(/^\/+/, "");
	const cached = ttfDataUriCache.get(normalized);
	if (cached) return cached;
	const ttf = await readCoverPublicAssetBuffer(normalized);
	if (!ttf) throw new Error(`Cover export font not found: ${normalized}`);
	const dataUri = `data:font/truetype;base64,${ttf.toString("base64")}`;
	ttfDataUriCache.set(normalized, dataUri);
	return dataUri;
}
function buildFontFaceRule(family, weight, src) {
	return `
    @font-face {
      font-family: '${family}';
      font-style: normal;
      font-weight: ${weight};
      src: url('${src}') format('truetype');
    }`;
}
async function getCoverFontFaceCss() {
	if (cachedFontFaceCss !== null) return cachedFontFaceCss;
	if (!shouldEmbedCoverFontsInSvg()) {
		cachedFontFaceCss = "";
		return cachedFontFaceCss;
	}
	const [aeonikRegular, aeonikMedium, interRegular, interSemibold] = await Promise.all([
		readFontTtfDataUri(COVER_EXPORT_TTF_SOURCES.aeonikRegular),
		readFontTtfDataUri(COVER_EXPORT_TTF_SOURCES.aeonikMedium),
		readFontTtfDataUri(COVER_EXPORT_TTF_SOURCES.interRegular),
		readFontTtfDataUri(COVER_EXPORT_TTF_SOURCES.interSemibold)
	]);
	cachedFontFaceCss = [
		buildFontFaceRule("Aeonik Pro", 400, aeonikRegular),
		buildFontFaceRule("Aeonik Pro", 500, aeonikMedium),
		buildFontFaceRule("Aeonik Pro", 600, aeonikMedium),
		buildFontFaceRule("Inter", 400, interRegular),
		buildFontFaceRule("Inter", 600, interSemibold)
	].join("\n");
	return cachedFontFaceCss;
}
export { buildCoverSvgShell as a, prepareCoverIconDataUri as c, buildCoverBrandBackgroundParts as i, resolveCoverImageHref as l, applyCoverImageFormat as n, getTitleFill as o, encodeCoverImageBuffer as r, loadCoverImageBuffer as s, getCoverFontFaceCss as t, loadCoverLucideIconSvgBuffer as u };
