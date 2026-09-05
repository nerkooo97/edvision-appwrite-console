import { n as useT } from "./translate-DZcqveGn.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { c as MarketingSectionHeading, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
function MarketingFaqSection({ items, title = "FAQ", description }) {
	const t = useT();
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: marketingSplitLayoutClassName(),
				children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
					align: "left",
					size: "md",
					title,
					description
				}), /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "item-0",
					className: "w-full",
					children: items.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${index}`,
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "py-5 text-start hover:no-underline",
							children: /* @__PURE__ */ jsx("span", {
								className: "pe-4 text-[14px] font-medium text-foreground",
								children: t(item.question)
							})
						}), /* @__PURE__ */ jsxs(AccordionContent, {
							className: "text-[13px] leading-6 text-muted-foreground",
							children: [/* @__PURE__ */ jsx("p", { children: t(item.answer) }), item.links?.length ? /* @__PURE__ */ jsx("div", {
								className: "mt-3 flex flex-wrap gap-x-4 gap-y-2",
								children: item.links.map((link) => /* @__PURE__ */ jsxs(Link, {
									to: link.href,
									className: "inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground",
									children: [t(link.label), /* @__PURE__ */ jsx(ArrowUpRight, {
										className: "size-3",
										"aria-hidden": true
									})]
								}, link.href))
							}) : null]
						})]
					}, item.question))
				})]
			})
		})
	});
}
export { MarketingFaqSection as t };
