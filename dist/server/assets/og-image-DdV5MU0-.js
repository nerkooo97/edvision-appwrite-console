import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { a as COVER_WIDTH, t as COVER_HEIGHT, u as DEFAULT_COVER_THEME_ID } from "./constants-CL7SLzjY.js";
import { a as parseCoverRenderData } from "./parse-params-BpMT2Ilk.js";
const OG_IMAGE_PATH = "/og/image.png";
const OG_IMAGE_WIDTH = COVER_WIDTH;
const OG_IMAGE_HEIGHT = 630;
var OG_TITLE_MAX_LENGTH = 120;
var OG_SUBTITLE_MAX_LENGTH = 160;
var OG_EYEBROW_MAX_LENGTH = 40;
var OG_CTA_MAX_LENGTH = 32;
function truncateOgText(value, maxLength) {
	const trimmed = value.trim();
	if (trimmed.length <= maxLength) return trimmed;
	return `${trimmed.slice(0, maxLength - 1).trimEnd()}…`;
}
function buildOgImageUrl(params, siteOrigin) {
	const searchParams = new URLSearchParams();
	searchParams.set("title", truncateOgText(params.title, OG_TITLE_MAX_LENGTH));
	if (params.subtitle?.trim()) searchParams.set("subtitle", truncateOgText(params.subtitle, OG_SUBTITLE_MAX_LENGTH));
	if (params.eyebrow?.trim()) searchParams.set("eyebrow", truncateOgText(params.eyebrow, OG_EYEBROW_MAX_LENGTH));
	if (params.cta?.trim()) searchParams.set("cta", truncateOgText(params.cta, OG_CTA_MAX_LENGTH));
	if (params.theme) searchParams.set("theme", params.theme);
	return `${getSeoSiteOrigin(siteOrigin)}${OG_IMAGE_PATH}?${searchParams.toString()}`;
}
function parseOgImageRenderData(searchParams) {
	const params = new URLSearchParams(searchParams);
	params.set("template", "simple-title");
	params.set("format", "png");
	params.set("width", String(OG_IMAGE_WIDTH));
	params.set("height", String(OG_IMAGE_HEIGHT));
	if (!params.get("theme")?.trim()) params.set("theme", DEFAULT_COVER_THEME_ID);
	return parseCoverRenderData(params);
}
export { parseOgImageRenderData as i, OG_IMAGE_WIDTH as n, buildOgImageUrl as r, OG_IMAGE_HEIGHT as t };
