import { t as cn } from "./utils-DoqqkI3X.js";
import { n as resolveFenceCodeLanguage } from "./code-language-RiwE0Xft.js";
import { o as DOCS_PROSE_DETAIL_CLASSES, s as DOCS_PROSE_WRAPPER_CLASS } from "./prose-typography-BMJgwhz7.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { m as parseDocsPagePath } from "./urls-BIlyr2O2.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { Fragment, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function normalizeApiDescriptionMarkdown(content) {
	return content.replace(/\r\n/g, "\n").trim();
}
function isExternalDomainLink(href) {
	if (!href) return false;
	if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
	if (parseDocsPagePath(href)) return false;
	try {
		if (typeof window === "undefined") return /^https?:\/\//i.test(href) || href.startsWith("//");
		const current = new URL(window.location.href);
		const resolved = new URL(href, current);
		return (resolved.protocol === "http:" || resolved.protocol === "https:") && resolved.hostname !== current.hostname;
	} catch {
		return false;
	}
}
var LINK_CLASS = "link-neutral";
var CARD_WRAPPER_CLASS = cn("rounded-lg border border-border bg-muted/25 px-4 py-3.5", "text-[14px] leading-[1.65] tracking-[0.01em] text-foreground/88", "[&_p]:my-0 [&_p+p]:mt-3", "[&_strong]:font-semibold [&_strong]:text-foreground", "[&_em]:text-foreground/90", "prose-links-neutral", "[&_code]:rounded-sm [&_code]:bg-background/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-foreground [&_code]:ring-1 [&_code]:ring-border/60", "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-5", "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-5", "[&_li]:text-foreground/88");
var DOCS_WRAPPER_CLASS = cn(DOCS_PROSE_WRAPPER_CLASS, "prose-links-neutral min-w-0", ...DOCS_PROSE_DETAIL_CLASSES);
function MethodDescriptionMarkdown({ content, className, variant = "card" }) {
	const normalized = useMemo(() => normalizeApiDescriptionMarkdown(content), [content]);
	return /* @__PURE__ */ jsx("div", {
		className: cn(variant === "docs" ? DOCS_WRAPPER_CLASS : CARD_WRAPPER_CLASS, className),
		children: /* @__PURE__ */ jsx(ReactMarkdown, {
			remarkPlugins: [remarkGfm],
			components: {
				a({ href, children, ...props }) {
					if (href && parseDocsPagePath(href)) return /* @__PURE__ */ jsx(DocsRouteLink, {
						href,
						className: LINK_CLASS,
						children
					});
					const openInNewWindow = isExternalDomainLink(href);
					return /* @__PURE__ */ jsx("a", {
						href,
						target: openInNewWindow ? "_blank" : void 0,
						rel: openInNewWindow ? "noopener noreferrer" : void 0,
						className: LINK_CLASS,
						...props,
						children
					});
				},
				pre({ children }) {
					return /* @__PURE__ */ jsx(Fragment, { children });
				},
				code({ className: codeClassName, children, ...props }) {
					if (!codeClassName) return /* @__PURE__ */ jsx("code", {
						...props,
						children
					});
					return /* @__PURE__ */ jsx("div", {
						className: "not-prose my-3 w-full",
						children: /* @__PURE__ */ jsx(ConnectCodeExample, {
							code: String(children ?? "").replace(/\n$/, ""),
							language: resolveFenceCodeLanguage(codeClassName.match(/language-([a-zA-Z0-9_-]+)/)?.[1])
						})
					});
				}
			},
			children: normalized
		})
	});
}
export { MethodDescriptionMarkdown as t };
