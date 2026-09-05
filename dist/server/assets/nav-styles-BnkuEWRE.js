import { t as cn } from "./utils-DoqqkI3X.js";
import { u as DOCS_TOC_LINK_TEXT_CLASS } from "./prose-typography-BMJgwhz7.js";
import { n as apiNavItemClassName, t as API_NAV_ACTIVE_BG_CLASS } from "./nav-styles-B9rWOQql.js";
const DOCS_SECTION_HEADER_CLASS = "flex h-14 shrink-0 items-center border-b border-border bg-background";
const DOCS_NAV_SCROLL_CLASS = "overlay-scrollbar overscroll-y-contain";
function docsSidebarNavLinkClassName(active) {
	return cn("block w-full text-start", apiNavItemClassName(active));
}
function docsTocLinkClassName(active) {
	return cn("block min-w-0 truncate rounded-md px-2 py-1.5 font-medium transition-colors", DOCS_TOC_LINK_TEXT_CLASS, active ? cn(API_NAV_ACTIVE_BG_CLASS, "text-foreground/90") : "hover:bg-accent/50 hover:text-foreground/85");
}
export { docsTocLinkClassName as i, DOCS_SECTION_HEADER_CLASS as n, docsSidebarNavLinkClassName as r, DOCS_NAV_SCROLL_CLASS as t };
