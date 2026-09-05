import { t as cn } from "./utils-DoqqkI3X.js";
const API_NAV_ACTIVE_BG_CLASS = "bg-accent/60";
function apiNavItemClassName(active) {
	return cn("rounded-md px-2 py-1.5 text-[13px] font-medium leading-5 transition-colors", active ? cn(API_NAV_ACTIVE_BG_CLASS, "text-foreground") : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
}
function apiNavMethodItemClassName(active) {
	return cn("flex w-full max-w-full min-w-0 cursor-pointer flex-col gap-1 rounded-md px-2 py-1.5 text-start transition-colors", active ? cn(API_NAV_ACTIVE_BG_CLASS, "text-foreground") : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
}
export { apiNavItemClassName as n, apiNavMethodItemClassName as r, API_NAV_ACTIVE_BG_CLASS as t };
