import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as CONTENT_BODY_FONT_CLASS } from "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CsPM4E9L.js";
import { t as slugifyHeading } from "./slugify-P-hUWnOW.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import { n as PolicyRelatedLinks, t as PolicyToc } from "./PolicyToc-DJyn4nuB.js";
import { t as PricingSectionHeading } from "./PricingSectionHeading-Bstz-ues.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
var policyTableHeadClassName = "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider whitespace-normal";
var policyTableCellClassName = "px-4 py-3 align-top whitespace-normal text-[13px]";
var PolicyTableSectionContext = createContext("body");
function isExternalLink(href) {
	if (!href) return false;
	if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
	if (href.startsWith("/")) return false;
	return /^https?:\/\//i.test(href) || href.startsWith("//");
}
function extractText(children) {
	if (typeof children === "string") return children;
	if (Array.isArray(children)) return children.map(extractText).join("");
	if (children && typeof children === "object" && "props" in children) return extractText(children.props.children);
	return "";
}
function PolicyTableCellContent({ children }) {
	const text = extractText(children);
	if (text.includes("<br>")) return /* @__PURE__ */ jsx(Fragment, { children: text.split("<br>").map((line, index) => /* @__PURE__ */ jsx("span", {
		className: "block",
		children: line.trim()
	}, index)) });
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function extractPolicyToc(content) {
	const items = [{
		id: "introduction",
		label: "Introduction"
	}];
	for (const match of content.matchAll(/^## (.+)$/gm)) {
		const label = match[1].trim();
		items.push({
			id: slugifyHeading(label),
			label
		});
	}
	return items;
}
function PolicyMarkdown({ content, className }) {
	const safeContent = useMemo(() => content.replace(/\r\n/g, "\n").trim(), [content]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("policy-prose", CONTENT_BODY_FONT_CLASS, "text-[14px] leading-7 text-muted-foreground", "[&_p]:my-0 [&_p+p]:mt-4", "[&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:font-aeonik-pro [&_h2]:text-[20px] [&_h2]:font-normal [&_h2]:text-foreground", "[&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:scroll-mt-24 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-foreground", "[&_h4]:mb-2 [&_h4]:mt-5 [&_h4]:text-[14px] [&_h4]:font-semibold [&_h4]:text-foreground", "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-5", "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-5", "[&_li]:my-0", "prose-links-neutral", "[&_strong]:font-semibold [&_strong]:text-foreground", className),
		children: /* @__PURE__ */ jsx(ReactMarkdown, {
			remarkPlugins: [remarkGfm],
			components: {
				h2({ children, ...props }) {
					return /* @__PURE__ */ jsx("h2", {
						id: slugifyHeading(extractText(children)),
						...props,
						children
					});
				},
				h3({ children, ...props }) {
					return /* @__PURE__ */ jsx("h3", {
						id: slugifyHeading(extractText(children)),
						...props,
						children
					});
				},
				a({ href, children, ...props }) {
					const external = isExternalLink(href);
					return /* @__PURE__ */ jsx("a", {
						href,
						...props,
						...external ? {
							target: "_blank",
							rel: "noopener noreferrer"
						} : {},
						children
					});
				},
				table({ children }) {
					return /* @__PURE__ */ jsx("div", {
						className: "my-4 overflow-hidden rounded-lg border border-border bg-card",
						children: /* @__PURE__ */ jsx(Table, { children })
					});
				},
				thead({ children }) {
					return /* @__PURE__ */ jsx(PolicyTableSectionContext.Provider, {
						value: "header",
						children: /* @__PURE__ */ jsx(TableHeader, { children })
					});
				},
				tbody({ children }) {
					return /* @__PURE__ */ jsx(PolicyTableSectionContext.Provider, {
						value: "body",
						children: /* @__PURE__ */ jsx(TableBody, { children })
					});
				},
				tr({ children }) {
					return /* @__PURE__ */ jsx(TableRow, {
						className: cn("border-b border-border", useContext(PolicyTableSectionContext) === "header" ? "hover:bg-transparent" : "hover:bg-muted/30"),
						children
					});
				},
				th({ children }) {
					return /* @__PURE__ */ jsx(TableHead, {
						className: policyTableHeadClassName,
						children: /* @__PURE__ */ jsx(PolicyTableCellContent, { children })
					});
				},
				td({ children }) {
					return /* @__PURE__ */ jsx(TableCell, {
						className: policyTableCellClassName,
						children: /* @__PURE__ */ jsx(PolicyTableCellContent, { children })
					});
				}
			},
			children: safeContent
		})
	});
}
function PolicyLayout({ title, tocItems, currentPolicy, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, {
			variant: "pricing",
			className: "pointer-events-none opacity-70"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[240px_minmax(0,1fr)]",
				children: [
					/* @__PURE__ */ jsxs("header", {
						className: "space-y-4 lg:col-span-2",
						children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
							as: "h1",
							align: "left",
							title: t(title),
							className: "max-w-3xl"
						}), currentPolicy ? /* @__PURE__ */ jsx("div", {
							className: "lg:hidden",
							children: /* @__PURE__ */ jsx(PolicyRelatedLinks, { current: currentPolicy })
						}) : null]
					}),
					/* @__PURE__ */ jsx(PolicyToc, {
						items: tocItems,
						currentPolicy
					}),
					/* @__PURE__ */ jsx("div", {
						className: "min-w-0 overflow-x-hidden",
						children: /* @__PURE__ */ jsx("section", {
							id: "introduction",
							className: "scroll-mt-24",
							children
						})
					})
				]
			})
		})]
	});
}
function LegalPolicyView({ title, content, currentPolicy }) {
	return /* @__PURE__ */ jsx(PolicyLayout, {
		title,
		tocItems: extractPolicyToc(content),
		currentPolicy,
		children: /* @__PURE__ */ jsx(PolicyMarkdown, { content })
	});
}
export { LegalPolicyView as t };
