import { t as cn } from "./utils-DoqqkI3X.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { n as DOCS_BODY_TEXT_CLASS, o as DOCS_PROSE_DETAIL_CLASSES } from "./prose-typography-BMJgwhz7.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as getBlogPageUrl, p as parseBlogPagePath, t as MARKETING_SITE_ORIGIN } from "./urls-BIlyr2O2.js";
import { n as ImagePreviewGalleryProvider } from "./ImagePreviewGallery-CuJmaZOR.js";
import { C as MultiCode, E as docsMarkdocConfig, S as TabsItem, T as CardsItem, _ as Info$1, b as Fence, c as MarkdocTableCell, d as MarkdocTableRoot, f as MarkdocTableRow, g as DocsImage, h as OnlyLight, i as Blockquote, l as MarkdocTableHead, m as OnlyDark, n as MarkdocAccordion, o as Heading, p as MarkdocTableTag, r as MarkdocAccordionItem, s as MarkdocTableBody, t as MarkdocYoutube, u as MarkdocTableHeader, v as MarkdocIcon, w as Cards, x as Tabs, y as MarkdocIconImage } from "./Youtube-pQDzLroP.js";
import { c as BLOG_PROSE_DETAIL_CLASSES, n as BLOG_BODY_TEXT_SIZE_CLASS } from "./prose-typography-DB73MMim.js";
import { n as DOCS_PROSE_LINK_CLASS } from "./prose-link-DLbkQskb.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import Markdoc from "@markdoc/markdoc";
var INTERNAL_MARKETING_ROUTES = new Set([
	"/terms",
	"/privacy",
	"/cookies",
	"/company",
	"/assets",
	"/pricing",
	"/partners",
	"/education",
	"/startups",
	"/affiliates",
	"/community",
	"/changelog",
	"/blog"
]);
function normalizePath(href) {
	return href.split("#")[0]?.replace(/\/+$/, "") || "/";
}
function ChangelogLink({ href, children, className }) {
	const linkClassName = className ?? DOCS_PROSE_LINK_CLASS;
	if (!href) return /* @__PURE__ */ jsx("span", {
		className,
		children
	});
	const blogPath = parseBlogPagePath(href);
	if (blogPath) href = getBlogPageUrl(blogPath, getActiveProfileFeatures().marketing);
	const external = href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:") || href.startsWith("tel:");
	if (external || href.startsWith("#")) return /* @__PURE__ */ jsx("a", {
		href,
		className: linkClassName,
		...external && !href.startsWith("#") ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
	if (href.startsWith("/docs")) return /* @__PURE__ */ jsx(DocsRouteLink, {
		href,
		className: linkClassName,
		children
	});
	if (href.startsWith("/changelog/entry/")) return /* @__PURE__ */ jsx(Link, {
		to: "/changelog/entry/$entry",
		params: { entry: href.slice(17) },
		className: linkClassName,
		children
	});
	if (href.startsWith("/blog/post/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/post/$slug",
		params: { slug: href.slice(11).replace(/\/+$/, "") },
		className: linkClassName,
		children
	});
	if (href.startsWith("/blog/category/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/category/$category",
		params: { category: href.slice(15).replace(/\/+$/, "") },
		className: linkClassName,
		children
	});
	if (href.startsWith("/blog/author/")) return /* @__PURE__ */ jsx(Link, {
		to: "/blog/author/$author",
		params: { author: href.slice(13).replace(/\/+$/, "") },
		className: linkClassName,
		children
	});
	const normalizedPath = normalizePath(href);
	if (INTERNAL_MARKETING_ROUTES.has(normalizedPath)) return /* @__PURE__ */ jsx(Link, {
		to: normalizedPath,
		className: linkClassName,
		children
	});
	if (href.startsWith("/")) return /* @__PURE__ */ jsx("a", {
		href: `${MARKETING_SITE_ORIGIN}${href}`,
		className: linkClassName,
		target: "_blank",
		rel: "noopener noreferrer",
		children
	});
	return /* @__PURE__ */ jsx("a", {
		href,
		className: linkClassName,
		children
	});
}
const CHANGELOG_RESOURCE_LINK_GROUP_CLASSES = [
	"[&_.changelog-resource-link]:mt-8",
	"[&_.changelog-resource-link]:overflow-hidden",
	"[&_.changelog-resource-link]:bg-card/50",
	"[&_.changelog-resource-link:not(:has(+_.changelog-resource-link)):not(.changelog-resource-link+_.changelog-resource-link)]:rounded-xl",
	"[&_.changelog-resource-link:not(:has(+_.changelog-resource-link)):not(.changelog-resource-link+_.changelog-resource-link)]:border",
	"[&_.changelog-resource-link:not(:has(+_.changelog-resource-link)):not(.changelog-resource-link+_.changelog-resource-link)]:border-border",
	"[&_.changelog-resource-link:has(+_.changelog-resource-link):not(.changelog-resource-link+_.changelog-resource-link)]:rounded-t-xl",
	"[&_.changelog-resource-link:has(+_.changelog-resource-link):not(.changelog-resource-link+_.changelog-resource-link)]:border",
	"[&_.changelog-resource-link:has(+_.changelog-resource-link):not(.changelog-resource-link+_.changelog-resource-link)]:border-border",
	"[&_.changelog-resource-link:has(+_.changelog-resource-link):not(.changelog-resource-link+_.changelog-resource-link)]:border-b-0",
	"[&_.changelog-resource-link+.changelog-resource-link]:mt-0",
	"[&_.changelog-resource-link+.changelog-resource-link]:border-border",
	"[&_.changelog-resource-link+.changelog-resource-link]:border-x",
	"[&_.changelog-resource-link+.changelog-resource-link]:border-t",
	"[&_.changelog-resource-link+.changelog-resource-link:not(:has(+_.changelog-resource-link))]:rounded-b-xl",
	"[&_.changelog-resource-link+.changelog-resource-link:not(:has(+_.changelog-resource-link))]:border-b"
];
function ChangelogArrowLink({ href, children, textClassName }) {
	if (!href) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "changelog-resource-link not-prose",
		children: /* @__PURE__ */ jsxs(ChangelogLink, {
			href,
			className: cn("relative block w-full rounded-none px-4 py-4 pe-10 text-start transition-colors duration-150 hover:bg-muted/40", textClassName ?? "text-[13px] font-medium leading-5 text-foreground"),
			children: [/* @__PURE__ */ jsx("span", {
				className: cn("min-w-0", "[&_p]:m-0 [&_p]:inline [&_p]:text-inherit"),
				children
			}), /* @__PURE__ */ jsx(ArrowUpRight, {
				className: "absolute top-4 end-4 size-3.5 shrink-0 text-muted-foreground",
				"aria-hidden": true
			})]
		})
	});
}
var markdocComponents = {
	MultiCode,
	Fence,
	Info: Info$1,
	Tabs,
	TabsItem,
	Cards,
	CardsItem,
	MarkdocIcon,
	MarkdocIconImage,
	Heading,
	Link: ChangelogLink,
	Image: DocsImage,
	OnlyLight,
	OnlyDark,
	Blockquote,
	MarkdocTableTag,
	MarkdocTableRoot,
	MarkdocTableHeader,
	MarkdocTableBody,
	MarkdocTableRow,
	MarkdocTableHead,
	MarkdocTableCell,
	Accordion: MarkdocAccordion,
	AccordionItem: MarkdocAccordionItem,
	Section: () => null,
	ArrowLink: ({ href, children }) => /* @__PURE__ */ jsx(ChangelogArrowLink, {
		href,
		children
	}),
	CallToAction: ({ href, title }) => /* @__PURE__ */ jsx("div", {
		className: "not-prose my-6",
		children: /* @__PURE__ */ jsx("a", {
			href: href?.startsWith("/") ? `${MARKETING_SITE_ORIGIN}${href}` : href,
			className: "inline-flex items-center rounded-lg bg-[var(--brand-cta)] px-4 py-2 text-[13px] font-medium text-white hover:opacity-90",
			target: href?.startsWith("/") ? "_blank" : void 0,
			rel: href?.startsWith("/") ? "noopener noreferrer" : void 0,
			children: title
		})
	}),
	Video: ({ src, title }) => /* @__PURE__ */ jsx("div", {
		className: "not-prose my-6 overflow-hidden rounded-xl border border-border",
		children: /* @__PURE__ */ jsx("video", {
			src,
			controls: true,
			className: "w-full",
			title
		})
	}),
	Youtube: MarkdocYoutube
};
function ChangelogMarkdown({ content, className, bodyTextClass, linkClassName, arrowLinkTextClass, proseVariant = "docs" }) {
	const proseBodyClass = bodyTextClass ?? DOCS_BODY_TEXT_CLASS;
	const proseLinkClass = linkClassName ?? DOCS_PROSE_LINK_CLASS;
	const proseDetailClasses = proseVariant === "blog" ? BLOG_PROSE_DETAIL_CLASSES : DOCS_PROSE_DETAIL_CLASSES;
	const rendered = useMemo(() => {
		const ast = Markdoc.parse(content);
		const transformed = Markdoc.transform(ast, docsMarkdocConfig);
		return Markdoc.renderers.react(transformed, React, { components: {
			...markdocComponents,
			Link: (props) => /* @__PURE__ */ jsx(ChangelogLink, {
				...props,
				className: props.className ?? proseLinkClass
			}),
			ArrowLink: ({ href, children }) => /* @__PURE__ */ jsx(ChangelogArrowLink, {
				href,
				textClassName: arrowLinkTextClass,
				children
			}),
			Heading: (props) => /* @__PURE__ */ jsx(Heading, {
				...props,
				proseVariant
			}),
			Blockquote: (props) => /* @__PURE__ */ jsx(Blockquote, {
				...props,
				proseVariant
			}),
			Info: (props) => /* @__PURE__ */ jsx(Info$1, {
				...props,
				proseVariant
			}),
			Tabs: (props) => /* @__PURE__ */ jsx(Tabs, {
				...props,
				proseVariant
			}),
			MarkdocTableCell: (props) => /* @__PURE__ */ jsx(MarkdocTableCell, {
				...props,
				proseVariant
			}),
			AccordionItem: ({ title, children: itemChildren }) => /* @__PURE__ */ jsxs(AccordionItem, {
				value: title ?? "item",
				className: "rounded-lg border border-border px-4",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, {
					className: cn(proseBodyClass, "font-medium hover:no-underline"),
					children: title
				}), /* @__PURE__ */ jsx(AccordionContent, {
					className: proseBodyClass,
					children: itemChildren
				})]
			}),
			CallToAction: ({ href, title }) => /* @__PURE__ */ jsx("div", {
				className: "not-prose my-6",
				children: /* @__PURE__ */ jsx("a", {
					href: href?.startsWith("/") ? `${MARKETING_SITE_ORIGIN}${href}` : href,
					className: cn("inline-flex items-center rounded-lg bg-[var(--brand-cta)] px-4 py-2 font-medium text-white hover:opacity-90", proseVariant === "blog" ? BLOG_BODY_TEXT_SIZE_CLASS : "text-[13px]"),
					target: href?.startsWith("/") ? "_blank" : void 0,
					rel: href?.startsWith("/") ? "noopener noreferrer" : void 0,
					children: title
				})
			})
		} });
	}, [
		content,
		proseBodyClass,
		proseLinkClass,
		arrowLinkTextClass,
		proseVariant
	]);
	return /* @__PURE__ */ jsx(ImagePreviewGalleryProvider, { children: /* @__PURE__ */ jsx("div", {
		className: cn("docs-prose", proseBodyClass, ...proseDetailClasses, ...CHANGELOG_RESOURCE_LINK_GROUP_CLASSES, className),
		children: rendered
	}) });
}
export { ChangelogMarkdown as t };
