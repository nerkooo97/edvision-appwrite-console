import { t as cn } from "./utils-DoqqkI3X.js";
import { u as docsPreviewSectionTitleClass } from "./docs-container-qv9gqb9G.js";
import { jsx, jsxs } from "react/jsx-runtime";
var DOCS_HOME_SECTION_TITLE_CLASS = "font-aeonik-pro text-balance text-[28px] font-normal leading-none tracking-tight text-foreground @[480px]:text-[32px]";
var DOCS_HOME_SECTION_DESCRIPTION_CLASS = "mt-4 max-w-3xl text-[14px] leading-6 text-muted-foreground @[480px]:text-[15px] @[480px]:leading-7";
var DOCS_PREVIEW_HOME_SECTION_DESCRIPTION_CLASS = "mt-2 max-w-3xl text-[12px] leading-5 text-muted-foreground @[480px]:mt-2.5 @[480px]:text-[13px] @[480px]:leading-6";
function DocsHomeSectionHeading({ title, description, className, variant = "page" }) {
	const titleClassName = variant === "preview" ? docsPreviewSectionTitleClass : DOCS_HOME_SECTION_TITLE_CLASS;
	const descriptionClassName = variant === "preview" ? DOCS_PREVIEW_HOME_SECTION_DESCRIPTION_CLASS : DOCS_HOME_SECTION_DESCRIPTION_CLASS;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("max-w-2xl text-start", className),
		children: [/* @__PURE__ */ jsxs("h2", {
			className: titleClassName,
			children: [title, /* @__PURE__ */ jsx("span", {
				className: "text-[var(--brand-cta)]",
				children: "_"
			})]
		}), description ? typeof description === "string" ? /* @__PURE__ */ jsx("p", {
			className: descriptionClassName,
			children: description
		}) : /* @__PURE__ */ jsx("div", {
			className: descriptionClassName,
			children: description
		}) : null]
	});
}
export { DocsHomeSectionHeading as t };
