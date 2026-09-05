import { t as cn } from "./utils-DoqqkI3X.js";
import { i as DOCS_PAGE_EYEBROW_CLASS } from "./prose-typography-BMJgwhz7.js";
import { t as slugifyHeading } from "./slugify-P-hUWnOW.js";
import { t as DocsHeadingLink } from "./DocsHeadingLink-ACXvhwfq.js";
import { jsx, jsxs } from "react/jsx-runtime";
function getHubCategoryTocItem(title) {
	return {
		id: slugifyHeading(title),
		label: title,
		level: 2
	};
}
function DocsHubCategorySection({ title, children, className }) {
	const sectionId = slugifyHeading(title);
	return /* @__PURE__ */ jsxs("section", {
		className: cn("scroll-mt-24 space-y-4", className),
		children: [/* @__PURE__ */ jsx("h2", {
			id: sectionId,
			className: cn(DOCS_PAGE_EYEBROW_CLASS, "group font-aeonik-fono scroll-mt-24"),
			children: /* @__PURE__ */ jsx(DocsHeadingLink, {
				headingId: sectionId,
				linkIconSizeClass: "size-3.5",
				children: title
			})
		}), children]
	});
}
export { getHubCategoryTocItem as n, DocsHubCategorySection as t };
