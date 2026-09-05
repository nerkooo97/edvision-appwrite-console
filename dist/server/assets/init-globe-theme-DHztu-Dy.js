function normalizeComputedColorToRgb(computed, fallback) {
	if (!computed || computed === "rgba(0, 0, 0, 0)") return fallback;
	const rgbMatch = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
	if (rgbMatch) return `rgb(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]})`;
	const ctx = document.createElement("canvas").getContext("2d");
	if (!ctx) return fallback;
	try {
		ctx.fillStyle = computed;
		const normalized = ctx.fillStyle;
		if (normalized.startsWith("#")) {
			const hex = normalized.slice(1);
			const full = hex.length === 3 ? `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}` : hex;
			const r = Number.parseInt(full.slice(0, 2), 16);
			const g = Number.parseInt(full.slice(2, 4), 16);
			const b = Number.parseInt(full.slice(4, 6), 16);
			if (![
				r,
				g,
				b
			].some(Number.isNaN)) return `rgb(${r}, ${g}, ${b})`;
		}
		const normalizedMatch = normalized.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
		if (normalizedMatch) return `rgb(${normalizedMatch[1]}, ${normalizedMatch[2]}, ${normalizedMatch[3]})`;
	} catch {}
	return fallback;
}
function getCssColorExpression(expression, fallback) {
	if (typeof document === "undefined") return fallback;
	const probe = document.createElement("span");
	probe.style.color = expression;
	probe.style.display = "none";
	document.documentElement.appendChild(probe);
	const computed = getComputedStyle(probe).color;
	probe.remove();
	return normalizeComputedColorToRgb(computed, fallback);
}
function cssColorToHex(expression, fallback = "#888888") {
	return rgbToHex(getCssColorExpression(expression, fallback), fallback);
}
function withAlpha(color, alpha) {
	if (color.startsWith("#")) {
		const hex = color.replace("#", "");
		const normalized = hex.length === 3 ? `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}` : hex;
		const r = Number.parseInt(normalized.slice(0, 2), 16);
		const g = Number.parseInt(normalized.slice(2, 4), 16);
		const b = Number.parseInt(normalized.slice(4, 6), 16);
		if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b)) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
	if (!match) return color;
	return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`;
}
function rgbToHex(rgbColor, fallback = "#888888") {
	if (rgbColor.startsWith("#")) return rgbColor.length === 4 ? `#${rgbColor[1]}${rgbColor[1]}${rgbColor[2]}${rgbColor[2]}${rgbColor[3]}${rgbColor[3]}` : rgbColor;
	const match = rgbColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
	if (!match) return fallback;
	const toHex = (value) => Number(value).toString(16).padStart(2, "0");
	return `#${toHex(match[1])}${toHex(match[2])}${toHex(match[3])}`;
}
function getInitGlobeBrandRgb() {
	return getCssColorExpression("var(--brand-cta)", "rgb(253, 54, 110)");
}
var EVEN_LIGHTING = {
	evenLighting: true,
	ambientLightIntensity: 2.4,
	directionalLightIntensity: .2
};
function buildInitGlobeConfig(isDark) {
	const softAtmosphere = cssColorToHex(isDark ? "color-mix(in srgb, var(--brand-cta) 32%, var(--card))" : "color-mix(in srgb, var(--brand-cta) 24%, var(--card))", isDark ? "#3d2f38" : "#f5e8ee");
	if (!isDark) {
		const ocean$1 = cssColorToHex("var(--background)", "#ffffff");
		const land = cssColorToHex("color-mix(in srgb, var(--muted-foreground) 70%, var(--border))", "#8b8b96");
		return {
			...EVEN_LIGHTING,
			pointSize: 4,
			globeColor: ocean$1,
			showAtmosphere: true,
			atmosphereColor: softAtmosphere,
			atmosphereAltitude: .11,
			emissive: ocean$1,
			emissiveIntensity: .45,
			shininess: .08,
			polygonColor: land,
			ambientLight: "#ffffff",
			directionalLeftLight: "#ffffff",
			directionalTopLight: "#ffffff",
			fogColor: ocean$1,
			arcTime: 1400,
			arcLength: .9,
			rings: 1,
			maxRings: 3,
			autoRotate: true,
			autoRotateSpeed: .5
		};
	}
	const ocean = cssColorToHex("color-mix(in srgb, var(--brand-cta) 5%, color-mix(in srgb, var(--muted) 82%, var(--muted-foreground)))", "#43434d");
	return {
		pointSize: 4,
		globeColor: ocean,
		showAtmosphere: true,
		atmosphereColor: softAtmosphere,
		atmosphereAltitude: .13,
		emissive: ocean,
		emissiveIntensity: .14,
		shininess: .85,
		polygonColor: cssColorToHex("color-mix(in srgb, var(--muted-foreground) 70%, var(--foreground))", "#b8b8c0"),
		ambientLight: cssColorToHex("color-mix(in srgb, var(--brand-cta) 22%, var(--muted-foreground))", "#9a8a92"),
		directionalLeftLight: cssColorToHex("var(--foreground)", "#fafafa"),
		directionalTopLight: cssColorToHex("var(--muted-foreground)", "#a1a1aa"),
		pointLight: cssColorToHex("color-mix(in srgb, var(--brand-cta) 35%, var(--card))", "#5c3d4d"),
		fogColor: ocean,
		arcTime: 1400,
		arcLength: .9,
		rings: 1,
		maxRings: 3,
		autoRotate: true,
		autoRotateSpeed: .5
	};
}
export { withAlpha as i, getInitGlobeBrandRgb as n, getCssColorExpression as r, buildInitGlobeConfig as t };
