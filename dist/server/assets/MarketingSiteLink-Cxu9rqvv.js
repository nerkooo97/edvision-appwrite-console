import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { f as isSiteLinkExternal, g as resolveSiteLinkUrl, m as parseDocsPagePath, p as parseBlogPagePath, s as getSiteLinkInternalPath } from "./urls-BIlyr2O2.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function MarketingSiteLink({ href, children, className, ...props }) {
	const { features } = useConsoleProfile();
	if (parseDocsPagePath(href)) return /* @__PURE__ */ jsx(DocsRouteLink, {
		href,
		className,
		...props,
		children
	});
	if (parseBlogPagePath(href)) return /* @__PURE__ */ jsx(BlogPageAnchor, {
		href,
		className,
		...props,
		children
	});
	const external = isSiteLinkExternal(href, features.marketing);
	const url = resolveSiteLinkUrl(href, features.marketing);
	const internalPath = getSiteLinkInternalPath(href);
	if (!external && internalPath) return /* @__PURE__ */ jsx(Link, {
		to: internalPath,
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
export { MarketingSiteLink as t };
