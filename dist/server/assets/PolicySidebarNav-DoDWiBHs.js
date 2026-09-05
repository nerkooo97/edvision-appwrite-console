import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
function policySidebarLinkClassName(active) {
	return cn("block min-w-0 truncate rounded-md px-2 py-1.5 text-[13px] font-medium leading-5 transition-colors", active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
}
function PolicySidebarSection({ title, ariaLabel, children, className }) {
	return /* @__PURE__ */ jsxs("nav", {
		className,
		"aria-label": ariaLabel ?? title,
		children: [/* @__PURE__ */ jsx("p", {
			className: "pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: title
		}), children]
	});
}
export { policySidebarLinkClassName as n, PolicySidebarSection as t };
