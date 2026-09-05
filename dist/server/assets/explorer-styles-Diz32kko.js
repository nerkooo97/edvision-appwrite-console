import { g as normalizeOpenApiPrimitiveType, i as getOpenApiTypeBadgeVariant, n as FORM_FIELD_TYPE_PILL_CLASS, t as API_EXPLORER_PILL_CLASS } from "./form-field-type-badge-C7qMzJo0.js";
import { h as verticalPanelResizeHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { n as DOCS_SECTION_HEADER_CLASS } from "./nav-styles-BnkuEWRE.js";
const REFERENCE_EXPLORER_CONTAINER = "@container/reference-explorer";
const REFERENCE_EXPLORER_MOBILE_ONLY_CLASS = "@[900px]/reference-explorer:hidden";
const REFERENCE_EXPLORER_DESKTOP_ONLY_CLASS = "hidden @[900px]/reference-explorer:block";
const REFERENCE_SECTION_SUBNAV_DESKTOP_CLASS = "@[1280px]:flex";
const REFERENCE_COLUMN_HEADER_CLASS = `${DOCS_SECTION_HEADER_CLASS} px-4`;
const REFERENCE_SCROLL_AREA_CLASS = "min-h-0 min-w-0 flex-1 overflow-hidden";
const REFERENCE_RESIZE_HANDLE_CLASS = verticalPanelResizeHandleClass("z-[45]");
const REFERENCE_PILL_CLASS = API_EXPLORER_PILL_CLASS;
const REFERENCE_TYPE_PILL_CLASS = FORM_FIELD_TYPE_PILL_CLASS;
function formatOpenApiTypeLabel(type) {
	const normalized = normalizeOpenApiPrimitiveType(type);
	const lower = normalized.toLowerCase().trim();
	if (lower === "string" || lower === "integer" || lower === "number" || lower === "boolean" || lower === "array" || lower === "object" || lower === "enum") return lower;
	return normalized;
}
function getModelPropertyTypeBadgeVariant(typeKind, type) {
	if (typeKind === "array") return "success";
	if (typeKind === "object") return "info";
	return getOpenApiTypeBadgeVariant(formatOpenApiTypeLabel(type));
}
export { REFERENCE_PILL_CLASS as a, REFERENCE_SECTION_SUBNAV_DESKTOP_CLASS as c, getModelPropertyTypeBadgeVariant as d, REFERENCE_EXPLORER_MOBILE_ONLY_CLASS as i, REFERENCE_TYPE_PILL_CLASS as l, REFERENCE_EXPLORER_CONTAINER as n, REFERENCE_RESIZE_HANDLE_CLASS as o, REFERENCE_EXPLORER_DESKTOP_ONLY_CLASS as r, REFERENCE_SCROLL_AREA_CLASS as s, REFERENCE_COLUMN_HEADER_CLASS as t, formatOpenApiTypeLabel as u };
