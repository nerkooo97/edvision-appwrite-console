import { a as COVER_WIDTH, t as COVER_HEIGHT } from "./constants-CL7SLzjY.js";
import { w as buildCoverBrandBackgroundSvgLayers } from "./lucide-icon-svg-BStxTNvw.js";
function buildCoverOgBackgroundSvg(themeId, width = COVER_WIDTH, height = 630) {
	const { defs, layers } = buildCoverBrandBackgroundSvgLayers(themeId, width, height);
	return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>${defs}</defs>
      ${layers}
    </svg>
  `.trim();
}
function buildCoverOgBackgroundDataUri(themeId, width = COVER_WIDTH, height = 630) {
	const svg = buildCoverOgBackgroundSvg(themeId, width, height);
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
export { buildCoverOgBackgroundDataUri as t };
