import { t as cn } from "./utils-DoqqkI3X.js";
const SECONDARY_SIDEBAR_ASIDE_CLASS = cn("w-[220px]", "hidden shrink-0 border-e border-border bg-background lg:block");
const SECONDARY_SIDEBAR_LAYOUT_CLASS = "flex min-h-0 flex-1 overflow-hidden";
const SECONDARY_SIDEBAR_CONTENT_CLASS = "min-h-0 min-w-0 flex-1 overflow-y-auto";
const SECONDARY_SIDEBAR_GROUP_HEADING_CLASS = "mb-1.5 px-2.5 text-start text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60";
var NAV_LINK_FOCUS = "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background";
function secondarySidebarNavLinkClassName(active, extra) {
	return cn("rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors", NAV_LINK_FOCUS, active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground", extra);
}
const SECONDARY_SIDEBAR_NAV_LINK_GRID_CLASS = "flex w-full items-center gap-x-2.5 text-start";
const SECONDARY_SIDEBAR_NAV_LINK_GRID_TRAILING_CLASS = "flex w-full items-center gap-x-2.5 text-start";
const SECONDARY_SIDEBAR_NAV_LINK_LABEL_CLASS = "min-w-0 flex-1 truncate text-start";
const SECONDARY_SIDEBAR_NAV_LINK_COLLAPSED_CLASS = "flex w-full justify-center px-0";
export { SECONDARY_SIDEBAR_NAV_LINK_COLLAPSED_CLASS as a, SECONDARY_SIDEBAR_NAV_LINK_LABEL_CLASS as c, SECONDARY_SIDEBAR_LAYOUT_CLASS as i, secondarySidebarNavLinkClassName as l, SECONDARY_SIDEBAR_CONTENT_CLASS as n, SECONDARY_SIDEBAR_NAV_LINK_GRID_CLASS as o, SECONDARY_SIDEBAR_GROUP_HEADING_CLASS as r, SECONDARY_SIDEBAR_NAV_LINK_GRID_TRAILING_CLASS as s, SECONDARY_SIDEBAR_ASIDE_CLASS as t };
