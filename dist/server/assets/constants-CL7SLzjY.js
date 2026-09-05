const COVER_BRAND_LIGHT_RGB = {
	pink: [
		253,
		54,
		110
	],
	purple: [
		124,
		103,
		254
	],
	teal: [
		133,
		219,
		216
	],
	orange: [
		254,
		149,
		103
	]
};
var LIGHT_OPACITY = {
	pink: {
		strong: .2,
		mid: .07
	},
	purple: {
		strong: .17,
		mid: .06
	},
	teal: {
		strong: .17,
		mid: .06
	},
	orange: {
		strong: .17,
		mid: .06
	}
};
var DARK_OPACITY = {
	pink: {
		strong: .12,
		mid: .04
	},
	purple: {
		strong: .11,
		mid: .04
	},
	teal: {
		strong: .11,
		mid: .04
	},
	orange: {
		strong: .11,
		mid: .04
	}
};
function getCoverSoftLightOpacityPreset(family, scale = 1) {
	const base = family === "light" ? LIGHT_OPACITY : DARK_OPACITY;
	if (scale === 1) return base;
	return Object.keys(base).reduce((acc, tone) => {
		acc[tone] = {
			strong: base[tone].strong * scale,
			mid: base[tone].mid * scale
		};
		return acc;
	}, {});
}
function getCoverBrandLightRgb(tone) {
	return COVER_BRAND_LIGHT_RGB[tone];
}
function clamp01(value) {
	return Math.min(1, Math.max(0, value));
}
function srgbToLinear(channel) {
	return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4;
}
function linearToSrgb(channel) {
	return channel <= .0031308 ? 12.92 * channel : 1.055 * channel ** (1 / 2.4) - .055;
}
function hexToRgb(hex) {
	const normalized = hex.replace("#", "");
	const full = normalized.length === 3 ? normalized.split("").map((char) => char + char).join("") : normalized;
	return [
		Number.parseInt(full.slice(0, 2), 16) / 255,
		Number.parseInt(full.slice(2, 4), 16) / 255,
		Number.parseInt(full.slice(4, 6), 16) / 255
	];
}
function rgbToHex(r, g, b) {
	const toHex = (value) => Math.round(clamp01(value) * 255).toString(16).padStart(2, "0");
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function parseOklchString(value) {
	const match = value.trim().match(/^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:deg)?\s*\)$/i);
	if (!match) return null;
	let l = Number.parseFloat(match[1]);
	if (match[1].includes("%")) l /= 100;
	return {
		l,
		c: Number.parseFloat(match[2]),
		h: Number.parseFloat(match[3])
	};
}
function cssColorToHex(color) {
	const trimmed = color.trim();
	if (trimmed.startsWith("#")) return trimmed;
	const oklch = parseOklchString(trimmed);
	if (oklch) {
		const [r, g, b] = oklchToRgb(oklch);
		return rgbToHex(r, g, b);
	}
	return trimmed;
}
function rgbToOklab(r, g, b) {
	const lr = srgbToLinear(r);
	const lg = srgbToLinear(g);
	const lb = srgbToLinear(b);
	const l = Math.cbrt(.4122214708 * lr + .5363325363 * lg + .0514459929 * lb);
	const m = Math.cbrt(.2119034982 * lr + .6806995451 * lg + .1073969566 * lb);
	const s = Math.cbrt(.0883024619 * lr + .2817188376 * lg + .6299787005 * lb);
	return {
		l: .2104542553 * l + .793617785 * m - .0040720468 * s,
		a: 1.9779984951 * l - 2.428592205 * m + .4505937099 * s,
		b: .0259040371 * l + .7827717662 * m - .808675766 * s
	};
}
function oklabToRgb(color) {
	const l = color.l + .3963377774 * color.a + .2158037573 * color.b;
	const m = color.l - .1055613458 * color.a - .0638541728 * color.b;
	const s = color.l - .0894841775 * color.a - 1.291485548 * color.b;
	const lr = 4.0767416621 * l ** 3 - 3.3077115913 * m ** 3 + .2309699292 * s ** 3;
	const lg = -1.2684380046 * l ** 3 + 2.6097574011 * m ** 3 - .3413193965 * s ** 3;
	const lb = -.0041960863 * l ** 3 - .7047186147 * m ** 3 + 1.707614701 * s ** 3;
	return [
		linearToSrgb(lr),
		linearToSrgb(lg),
		linearToSrgb(lb)
	];
}
function oklabToOklch(color) {
	const c = Math.sqrt(color.a * color.a + color.b * color.b);
	let h = Math.atan2(color.b, color.a) * 180 / Math.PI;
	if (h < 0) h += 360;
	return {
		l: color.l,
		c,
		h
	};
}
function oklchToOklab(color) {
	const hueRad = color.h * Math.PI / 180;
	return {
		l: color.l,
		a: color.c * Math.cos(hueRad),
		b: color.c * Math.sin(hueRad)
	};
}
function rgbToOklch(r, g, b) {
	return oklabToOklch(rgbToOklab(r, g, b));
}
function oklchToRgb(color) {
	return oklabToRgb(oklchToOklab(color));
}
function interpolateHue(h1, h2, t) {
	return (h1 + ((h2 - h1 + 540) % 360 - 180) * t + 360) % 360;
}
var OKLCH_CHROMA_EPSILON = .01;
function mixOklchHue(h1, c1, h2, c2, t) {
	const firstIsAchromatic = c1 < OKLCH_CHROMA_EPSILON;
	const secondIsAchromatic = c2 < OKLCH_CHROMA_EPSILON;
	if (firstIsAchromatic && secondIsAchromatic) return h1;
	if (firstIsAchromatic) return h2;
	if (secondIsAchromatic) return h1;
	return interpolateHue(h1, h2, t);
}
function mixOklch(a, b, t) {
	return {
		l: a.l * t + b.l * (1 - t),
		c: a.c * t + b.c * (1 - t),
		h: mixOklchHue(a.h, a.c, b.h, b.c, t)
	};
}
function mixOklchHex(first, second, firstPercent) {
	const t = firstPercent / 100;
	const [r, g, b] = oklchToRgb(mixOklch(rgbToOklch(...hexToRgb(cssColorToHex(first))), rgbToOklch(...hexToRgb(cssColorToHex(second))), t));
	return rgbToHex(r, g, b);
}
const COVER_BACKGROUND_GRID_LABELS = {
	dots: "Dotted grid",
	grid: "Line grid",
	diagonal: "Diagonal lines",
	none: "Plain"
};
var COVER_THEME_LABEL_BY_ID = {
	light: "Dotted grid, bottom pink & purple",
	dark: "Dotted grid, bottom pink & purple",
	"light-aurora": "Dotted grid, top teal & purple aurora",
	"dark-aurora": "Dotted grid, top teal & purple aurora",
	"light-grid": "Line grid, bottom purple & teal",
	"dark-grid": "Line grid, bottom purple & teal",
	"light-beam": "Diagonal lines, top pink & orange spotlight",
	"dark-beam": "Diagonal lines, top pink & orange spotlight",
	"light-plain": "Plain, bottom pink & purple",
	"dark-plain": "Plain, bottom pink & purple",
	"dark-glow": "Plain, bottom teal ambient glow"
};
var COVER_THEME_DESCRIPTION_BY_ID = {
	light: "Classic brand hero wash from the lower corners.",
	dark: "Classic brand hero wash from the lower corners.",
	"light-aurora": "Mint teal and purple aurora from the upper edge.",
	"dark-aurora": "Mint teal and purple aurora from the upper edge.",
	"light-grid": "Square line grid with purple and mint teal corner glow.",
	"dark-grid": "Square line grid with purple and mint teal corner glow.",
	"light-beam": "Diagonal texture with a pink spotlight and orange accent above.",
	"dark-beam": "Diagonal texture with a pink spotlight and orange accent above.",
	"light-plain": "Solid background with soft corner glow, no texture.",
	"dark-plain": "Solid background with soft corner glow, no texture.",
	"dark-glow": "Plain dark background with a large teal light leak from the lower-left corner."
};
var BRAND_CTA = "#ff8d11";
var BRAND_PURPLE = "#7C67FE";
var BRAND_TEAL = "#85DBD8";
var LIGHT_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("light");
var DARK_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("dark");
var LIGHT_AURORA_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("light", 1.2);
var DARK_AURORA_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("dark", 1.25);
var LIGHT_BEAM_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("light", 1.1);
var DARK_BEAM_SOFT_LIGHTS = getCoverSoftLightOpacityPreset("dark", 1.15);
var DARK_GLOW_SOFT_LIGHTS = {
	pink: {
		strong: .06,
		mid: .02
	},
	purple: {
		strong: .07,
		mid: .025
	},
	teal: {
		strong: .13,
		mid: .045
	},
	orange: {
		strong: .06,
		mid: .02
	}
};
var LIGHT_BASE = {
	family: "light",
	background: "oklch(1 0 0)",
	foreground: "oklch(0.141 0.005 285.823)",
	mutedForeground: "oklch(0.552 0.016 285.938)",
	muted: "oklch(0.967 0.001 286.375)",
	border: "oklch(0.93 0.0035 286.32)",
	brandCta: BRAND_CTA,
	brandPurple: BRAND_PURPLE,
	brandTeal: BRAND_TEAL
};
var DARK_BASE = {
	family: "dark",
	background: "#19191c",
	foreground: "oklch(0.985 0 0)",
	mutedForeground: "oklch(0.705 0.015 286.067)",
	muted: "oklch(0.28 0.01 250)",
	border: "oklch(0.252 0.005 286.32)",
	brandCta: BRAND_CTA,
	brandPurple: BRAND_PURPLE,
	brandTeal: BRAND_TEAL
};
function defineCoverTheme(theme) {
	return {
		...theme,
		label: COVER_THEME_LABEL_BY_ID[theme.id] ?? COVER_BACKGROUND_GRID_LABELS[theme.backgroundGrid],
		description: COVER_THEME_DESCRIPTION_BY_ID[theme.id] ?? "Brand background with soft light wash."
	};
}
const COVER_THEME_DEFINITIONS = {
	light: defineCoverTheme({
		id: "light",
		...LIGHT_BASE,
		backgroundGrid: "dots",
		softLightVariant: "hero",
		softLights: LIGHT_SOFT_LIGHTS
	}),
	dark: defineCoverTheme({
		id: "dark",
		...DARK_BASE,
		backgroundGrid: "dots",
		softLightVariant: "hero",
		softLights: DARK_SOFT_LIGHTS
	}),
	"light-grid": defineCoverTheme({
		id: "light-grid",
		...LIGHT_BASE,
		backgroundGrid: "grid",
		softLightVariant: "hero",
		softLights: LIGHT_SOFT_LIGHTS
	}),
	"dark-grid": defineCoverTheme({
		id: "dark-grid",
		...DARK_BASE,
		backgroundGrid: "grid",
		softLightVariant: "hero",
		softLights: DARK_SOFT_LIGHTS
	}),
	"light-aurora": defineCoverTheme({
		id: "light-aurora",
		...LIGHT_BASE,
		backgroundGrid: "dots",
		softLightVariant: "aurora",
		softLights: LIGHT_AURORA_SOFT_LIGHTS
	}),
	"dark-aurora": defineCoverTheme({
		id: "dark-aurora",
		...DARK_BASE,
		backgroundGrid: "dots",
		softLightVariant: "aurora",
		softLights: DARK_AURORA_SOFT_LIGHTS
	}),
	"light-beam": defineCoverTheme({
		id: "light-beam",
		...LIGHT_BASE,
		backgroundGrid: "diagonal",
		softLightVariant: "beam",
		softLights: LIGHT_BEAM_SOFT_LIGHTS
	}),
	"dark-beam": defineCoverTheme({
		id: "dark-beam",
		...DARK_BASE,
		backgroundGrid: "diagonal",
		softLightVariant: "beam",
		softLights: DARK_BEAM_SOFT_LIGHTS
	}),
	"light-plain": defineCoverTheme({
		id: "light-plain",
		...LIGHT_BASE,
		backgroundGrid: "none",
		softLightVariant: "hero",
		softLights: LIGHT_SOFT_LIGHTS
	}),
	"dark-plain": defineCoverTheme({
		id: "dark-plain",
		...DARK_BASE,
		backgroundGrid: "none",
		softLightVariant: "hero",
		softLights: DARK_SOFT_LIGHTS
	}),
	"dark-glow": defineCoverTheme({
		id: "dark-glow",
		...DARK_BASE,
		backgroundGrid: "none",
		softLightVariant: "glow",
		softLights: DARK_GLOW_SOFT_LIGHTS
	})
};
const COVER_THEME_IDS = Object.keys(COVER_THEME_DEFINITIONS);
const COVER_EDITOR_THEME_IDS = [
	"light-plain",
	"dark-plain",
	"dark-glow"
];
const DEFAULT_COVER_THEME_ID = "dark-plain";
function isCoverThemeId(value) {
	return COVER_THEME_IDS.includes(value);
}
function resolveCoverThemeId(themeId) {
	if (typeof themeId === "string" && isCoverThemeId(themeId)) return themeId;
	return DEFAULT_COVER_THEME_ID;
}
function getCoverTheme(themeId) {
	return COVER_THEME_DEFINITIONS[resolveCoverThemeId(themeId)];
}
function isCoverEditorThemeId(value) {
	return COVER_EDITOR_THEME_IDS.includes(value);
}
function resolveCoverEditorThemeId(themeId) {
	const resolved = resolveCoverThemeId(themeId);
	if (isCoverEditorThemeId(resolved)) return resolved;
	return getCoverTheme(resolved).family === "dark" ? "dark-plain" : "light-plain";
}
function listCoverEditorThemes() {
	return COVER_EDITOR_THEME_IDS.map((id) => COVER_THEME_DEFINITIONS[id]);
}
function listCoverEditorThemesByFamily(family) {
	return listCoverEditorThemes().filter((theme) => theme.family === family);
}
function getCoverBrandThemeForSvgExport(themeId) {
	const theme = getCoverTheme(themeId);
	return {
		background: cssColorToHex(theme.background),
		foreground: cssColorToHex(theme.foreground),
		muted: cssColorToHex(theme.muted),
		mutedForeground: cssColorToHex(theme.mutedForeground),
		border: cssColorToHex(theme.border),
		brandCta: cssColorToHex(theme.brandCta),
		brandPurple: cssColorToHex(theme.brandPurple),
		brandTeal: cssColorToHex(theme.brandTeal),
		softLights: theme.softLights
	};
}
const COVER_WIDTH = 1200;
const COVER_HEIGHT = 630;
const COVER_SIZE_PRESETS = [
	{
		id: "og",
		label: "Open Graph",
		width: 1200,
		height: 630
	},
	{
		id: "blog",
		label: "Blog post (16:9)",
		width: 1920,
		height: 1080
	},
	{
		id: "twitter",
		label: "Twitter / X",
		width: 1600,
		height: 900
	},
	{
		id: "square",
		label: "Square",
		width: 1080,
		height: 1080
	},
	{
		id: "story",
		label: "Story",
		width: 1080,
		height: 1920
	},
	{
		id: "twitter-header",
		label: "Twitter header",
		width: 1500,
		height: 500
	}
];
function getCoverSizePresetKey(width, height) {
	return COVER_SIZE_PRESETS.find((preset) => preset.width === width && preset.height === height)?.id ?? `${width}x${height}`;
}
function resolveCoverSizePresetKey(key) {
	const preset = COVER_SIZE_PRESETS.find((item) => item.id === key);
	if (preset) return {
		width: preset.width,
		height: preset.height
	};
	const [widthRaw, heightRaw] = key.split("x");
	const width = Number(widthRaw);
	const height = Number(heightRaw);
	if (Number.isFinite(width) && Number.isFinite(height) && width >= 320 && width <= 4096 && height >= 200 && height <= 4096) return {
		width: Math.round(width),
		height: Math.round(height)
	};
	return {
		width: COVER_WIDTH,
		height: 630
	};
}
const COVER_TEMPLATE_IDS = [
	"simple-title",
	"integration",
	"integration-icon",
	"showcase-icon",
	"title-icon",
	"screenshot",
	"screenshot-side",
	"screenshot-angled",
	"cards-angled",
	"table",
	"bar-chart",
	"line-chart",
	"cli-code",
	"code-snippet",
	"milestone-split",
	"milestone-centered",
	"version-number",
	"version-title"
];
const COVER_IMAGE_FORMATS = [
	"png",
	"jpeg",
	"avif"
];
function isCoverTemplateId(value) {
	return COVER_TEMPLATE_IDS.includes(value);
}
export { mixOklchHex as _, COVER_WIDTH as a, resolveCoverSizePresetKey as c, getCoverBrandThemeForSvgExport as d, getCoverTheme as f, resolveCoverThemeId as g, resolveCoverEditorThemeId as h, COVER_TEMPLATE_IDS as i, COVER_THEME_IDS as l, listCoverEditorThemesByFamily as m, COVER_IMAGE_FORMATS as n, getCoverSizePresetKey as o, isCoverThemeId as p, COVER_SIZE_PRESETS as r, isCoverTemplateId as s, COVER_HEIGHT as t, DEFAULT_COVER_THEME_ID as u, getCoverBrandLightRgb as v };
