import { f as getCoverTheme } from "./constants-CL7SLzjY.js";
function estimateDiagramEdgeLabelTextWidth(label) {
	let width = 0;
	for (const char of label) if (/[MW@]/.test(char)) width += 9;
	else if (/[A-Z]/.test(char)) width += 7.4;
	else if (/[mw]/.test(char)) width += 8;
	else if (/[ilj1.'|:;!]/.test(char)) width += 3.4;
	else if (char === " ") width += 3.6;
	else width += 6.5;
	return Math.ceil(width);
}
function getDiagramEdgeLabelMetrics(label) {
	const paddingX = 12;
	const height = 24;
	const width = Math.max(44, estimateDiagramEdgeLabelTextWidth(label) + paddingX * 2);
	return {
		width,
		height,
		rx: height / 2,
		offsetX: width / 2,
		offsetY: height / 2
	};
}
function withAlpha(color, alpha) {
	if (color.startsWith("#") && color.length === 7) return `${color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
	return color;
}
function getDiagramNodeSurfaceColors(brand, themeId) {
	if (getCoverTheme(themeId).family === "dark") return {
		fill: withAlpha(brand.muted, .45),
		stroke: withAlpha(brand.foreground, .16),
		strokeWidth: 1
	};
	return {
		fill: withAlpha(brand.background, .92),
		stroke: withAlpha(brand.foreground, .1),
		strokeWidth: 1
	};
}
function getDiagramEdgeLabelSurfaceColors(brand, themeId) {
	if (getCoverTheme(themeId).family === "dark") return {
		fill: withAlpha(brand.background, .92),
		stroke: withAlpha(brand.foreground, .14)
	};
	return {
		fill: brand.background,
		stroke: withAlpha(brand.foreground, .1)
	};
}
export { getDiagramNodeSurfaceColors as n, getDiagramEdgeLabelMetrics as r, getDiagramEdgeLabelSurfaceColors as t };
