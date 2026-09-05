import { t as cn } from "./utils-DoqqkI3X.js";
import { i as getOpenApiTypeBadgeVariant } from "./form-field-type-badge-C7qMzJo0.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { d as getModelPropertyTypeBadgeVariant, l as REFERENCE_TYPE_PILL_CLASS, u as formatOpenApiTypeLabel } from "./explorer-styles-Diz32kko.js";
import { jsx, jsxs } from "react/jsx-runtime";
function ApiReferenceCopyableName({ name, className, textClassName }) {
	return /* @__PURE__ */ jsx(CopyableId, {
		id: name,
		variant: "inline",
		size: "md",
		showCopyOnHover: true,
		copyToastLabel: "Name",
		constrainToContainer: true,
		className: cn("min-w-0 max-w-full font-mono px-0 py-0 text-start", textClassName, className)
	});
}
var TYPE_BADGE_CLASS = REFERENCE_TYPE_PILL_CLASS;
function getArrayItemType(property) {
	if (property.variants?.length === 1) return property.variants[0].name;
	return property.itemType;
}
function getVariantHint(property) {
	const count = property.variantCount ?? property.variants?.length ?? 0;
	if (count <= 1) return null;
	if (property.typeKind === "array") return `${count} possible object types`;
	if (property.typeKind === "object") return `${count} possible types`;
	return `${count} options`;
}
function ItemTypeLabel({ itemType }) {
	const normalizedType = formatOpenApiTypeLabel(itemType);
	if ([
		"string",
		"integer",
		"number",
		"boolean",
		"array",
		"object",
		"enum"
	].includes(normalizedType.toLowerCase())) return /* @__PURE__ */ jsx(Badge, {
		variant: getOpenApiTypeBadgeVariant(normalizedType),
		className: TYPE_BADGE_CLASS,
		children: normalizedType
	});
	return /* @__PURE__ */ jsx("span", {
		className: "font-mono text-foreground",
		children: itemType
	});
}
function ApiReferencePropertyTypeCell({ property, className }) {
	const variantHint = getVariantHint(property);
	const typeLabel = property.typeKind === "scalar" ? formatOpenApiTypeLabel(property.type) : formatOpenApiTypeLabel(property.typeKind);
	if (property.typeKind === "array") {
		const itemType = getArrayItemType(property);
		return /* @__PURE__ */ jsxs("div", {
			className: cn("flex min-w-0 flex-wrap items-start justify-start gap-1.5 text-[11px] text-muted-foreground", className),
			children: [/* @__PURE__ */ jsx(Badge, {
				variant: getModelPropertyTypeBadgeVariant(property.typeKind, property.type),
				className: TYPE_BADGE_CLASS,
				children: typeLabel
			}), itemType ? /* @__PURE__ */ jsxs("span", {
				className: "flex items-start gap-1",
				children: ["of ", /* @__PURE__ */ jsx(ItemTypeLabel, { itemType })]
			}) : variantHint ? /* @__PURE__ */ jsx("span", { children: variantHint }) : null]
		});
	}
	if (property.typeKind === "object") return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-w-0 flex-wrap items-start justify-start gap-1.5 text-[11px] text-muted-foreground", className),
		children: [/* @__PURE__ */ jsx(Badge, {
			variant: getModelPropertyTypeBadgeVariant(property.typeKind, property.type),
			className: TYPE_BADGE_CLASS,
			children: typeLabel
		}), property.itemType ? /* @__PURE__ */ jsx(ItemTypeLabel, { itemType: property.itemType }) : variantHint ? /* @__PURE__ */ jsx("span", { children: variantHint }) : null]
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex justify-start", className),
		children: /* @__PURE__ */ jsx(Badge, {
			variant: getModelPropertyTypeBadgeVariant(property.typeKind, property.type),
			className: TYPE_BADGE_CLASS,
			children: typeLabel
		})
	});
}
function getPropertyVariantsSectionTitle(property) {
	const count = property.variants?.length ?? 0;
	if (count === 1) return "Object type";
	if (property.typeKind === "array") return `Array object types (${count})`;
	if (property.typeKind === "object") return `Object types (${count})`;
	return `Types (${count})`;
}
export { getPropertyVariantsSectionTitle as n, ApiReferenceCopyableName as r, ApiReferencePropertyTypeCell as t };
