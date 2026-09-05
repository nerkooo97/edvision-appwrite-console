import { t as cn } from "./utils-DoqqkI3X.js";
import { r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as DOCS_HEADING_LINK_TEXT_CLASS } from "./prose-link-DLbkQskb.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link2 } from "lucide-react";
function buildHeadingUrl(headingId) {
	return `${window.location.origin}${window.location.pathname}${window.location.search}#${headingId}`;
}
function DocsHeadingLink({ headingId, linkIconSizeClass, children }) {
	const handleCopyLink = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		await copyToClipboard("Link", buildHeadingUrl(headingId));
	};
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex max-w-full items-center gap-2",
		children: [/* @__PURE__ */ jsx("a", {
			href: `#${headingId}`,
			className: cn(DOCS_HEADING_LINK_TEXT_CLASS, "focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),
			children
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: handleCopyLink,
			className: cn(linkIconSizeClass, "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted-foreground opacity-0 transition-opacity duration-150 hover:text-foreground focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover:opacity-100 group-focus-within:opacity-100"),
			"aria-label": "Copy link",
			children: /* @__PURE__ */ jsx(Link2, {
				className: "size-full -rotate-45",
				"aria-hidden": true
			})
		})]
	});
}
export { DocsHeadingLink as t };
