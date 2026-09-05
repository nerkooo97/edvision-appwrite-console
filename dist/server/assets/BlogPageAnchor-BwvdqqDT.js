import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { c as isBlogPageExternal, n as getBlogPageUrl, p as parseBlogPagePath } from "./urls-BIlyr2O2.js";
import { jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function BlogRouterLink({ blogPath, className, children, ...props }) {
	if (blogPath.startsWith("/blog/post/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/post/$slug",
		params: { slug: blogPath.slice(11) },
		className,
		...props,
		children
	});
	if (blogPath.startsWith("/blog/category/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/category/$category",
		params: { category: blogPath.slice(15) },
		className,
		...props,
		children
	});
	if (blogPath.startsWith("/blog/author/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/author/$author",
		params: { author: blogPath.slice(13) },
		className,
		...props,
		children
	});
	const pageMatch = blogPath.match(/^\/blog\/(\d+)$/);
	if (pageMatch) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/$page",
		params: { page: pageMatch[1] },
		className,
		...props,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		to: "/blog",
		className,
		...props,
		children
	});
}
function BlogPageAnchor({ href, children, className, ...props }) {
	const { features } = useConsoleProfile();
	const blogPath = parseBlogPagePath(href);
	const url = getBlogPageUrl(href, features.marketing);
	const external = blogPath ? isBlogPageExternal(features.marketing) : url.startsWith("http");
	if (blogPath && !external) return /* @__PURE__ */ jsx(BlogRouterLink, {
		blogPath,
		className,
		...props,
		children
	});
	return /* @__PURE__ */ jsx("a", {
		href: url,
		className,
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		...props,
		children
	});
}
export { BlogPageAnchor as t };
