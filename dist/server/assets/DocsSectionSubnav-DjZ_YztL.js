import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as SheetHeader, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-CbM5lIV1.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as isDocsNavGroup } from "./navigation-BOrhbgOp.js";
import { n as DOCS_SECTION_HEADER_CLASS, r as docsSidebarNavLinkClassName, t as DOCS_NAV_SCROLL_CLASS } from "./nav-styles-BnkuEWRE.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
var DOCS_MENU_ICON_STROKE = 1.25;
function isSubnavActive(href, pathname) {
	return (pathname.replace(/\/+$/, "") || "/") === href;
}
function SectionNavLinks({ items, pathname, onNavigate, nested = false }) {
	const list = /* @__PURE__ */ jsx("ul", {
		className: "space-y-0.5",
		children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DocsRouteLink, {
			href: item.href,
			onClick: onNavigate,
			className: docsSidebarNavLinkClassName(isSubnavActive(item.href, pathname)),
			children: item.label
		}) }, item.href))
	});
	if (!nested) return list;
	return /* @__PURE__ */ jsx("div", {
		className: "ms-3 mt-0.5 ps-2",
		children: list
	});
}
function SectionNavCategory({ label, items, pathname, onNavigate }) {
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": label,
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-1.5 px-2 text-start text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx(SectionNavLinks, {
			items,
			pathname,
			onNavigate,
			nested: true
		})]
	});
}
function SectionParentLink({ parent, onNavigate }) {
	return /* @__PURE__ */ jsxs(DocsRouteLink, {
		href: parent.href,
		onClick: onNavigate,
		className: "flex items-center gap-1.5 px-2 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-foreground/80",
		children: [/* @__PURE__ */ jsx(ChevronLeft, {
			className: "size-3.5",
			strokeWidth: DOCS_MENU_ICON_STROKE
		}), parent.label]
	});
}
function SectionNavContent({ navigation, parent, pathname, onNavigate }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [parent ? /* @__PURE__ */ jsx(SectionParentLink, {
			parent,
			onNavigate
		}) : null, navigation.map((entry, index) => isDocsNavGroup(entry) ? entry.label ? /* @__PURE__ */ jsx(SectionNavCategory, {
			label: entry.label,
			items: entry.items,
			pathname,
			onNavigate
		}, entry.label ?? index) : /* @__PURE__ */ jsx(SectionNavLinks, {
			items: entry.items,
			pathname,
			onNavigate
		}, index) : /* @__PURE__ */ jsx(SectionNavLinks, {
			items: [entry],
			pathname,
			onNavigate
		}, entry.href))]
	});
}
function DocsSectionSubnavPanel({ navigation, parent }) {
	const pathname = useLocation().pathname;
	return /* @__PURE__ */ jsxs("aside", {
		className: "relative z-10 hidden h-full w-[220px] shrink-0 flex-col overflow-hidden border-e border-border bg-background @[1024px]:flex",
		"aria-label": parent?.label ? `${parent.label} section navigation` : "Section navigation",
		children: [parent ? /* @__PURE__ */ jsx("div", {
			className: cn(DOCS_SECTION_HEADER_CLASS, "px-3"),
			children: /* @__PURE__ */ jsx(SectionParentLink, { parent })
		}) : null, /* @__PURE__ */ jsx("nav", {
			className: cn("min-h-0 flex-1 overflow-y-auto px-3 py-4", DOCS_NAV_SCROLL_CLASS),
			children: /* @__PURE__ */ jsx(SectionNavContent, {
				navigation,
				parent: null,
				pathname
			})
		})]
	});
}
function DocsSectionSubnavMobile({ navigation, parent }) {
	const pathname = useLocation().pathname;
	const [sheetOpen, setSheetOpen] = useState(false);
	return /* @__PURE__ */ jsx("div", {
		className: "border-b border-border px-4 py-3 @[1024px]:hidden",
		children: /* @__PURE__ */ jsxs(Sheet, {
			open: sheetOpen,
			onOpenChange: setSheetOpen,
			children: [/* @__PURE__ */ jsx(SheetTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					className: "h-8 gap-1.5 text-[13px]",
					children: [/* @__PURE__ */ jsx(Menu, {
						className: "size-3.5",
						strokeWidth: DOCS_MENU_ICON_STROKE
					}), parent?.label ?? "Section"]
				})
			}), /* @__PURE__ */ jsxs(SheetContent, {
				side: "left",
				className: "w-[280px] p-0",
				children: [/* @__PURE__ */ jsx(SheetHeader, {
					className: "border-b border-border px-4 py-4 text-start",
					children: /* @__PURE__ */ jsx(SheetTitle, {
						className: "text-[15px]",
						children: parent?.label ?? "Section"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: cn("overflow-y-auto px-4 py-4", DOCS_NAV_SCROLL_CLASS),
					children: /* @__PURE__ */ jsx(SectionNavContent, {
						navigation,
						parent,
						pathname,
						onNavigate: () => setSheetOpen(false)
					})
				})]
			})]
		})
	});
}
export { DocsSectionSubnavPanel as n, DocsSectionSubnavMobile as t };
