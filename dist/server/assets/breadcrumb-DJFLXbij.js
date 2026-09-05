import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
function Breadcrumb({ ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...props
	});
}
function BreadcrumbList({ className, ...props }) {
	return /* @__PURE__ */ jsx("ol", {
		"data-slot": "breadcrumb-list",
		className: cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
		...props
	});
}
function BreadcrumbItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1.5", className),
		...props
	});
}
function BreadcrumbLink({ asChild, className, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "a", {
		"data-slot": "breadcrumb-link",
		className: cn("hover:text-foreground transition-colors", className),
		...props
	});
}
function BreadcrumbPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: cn("text-foreground font-normal", className),
		...props
	});
}
function BreadcrumbSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("[&>svg]:size-3.5", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
	});
}
export { BreadcrumbPage as a, BreadcrumbList as i, BreadcrumbItem as n, BreadcrumbSeparator as o, BreadcrumbLink as r, Breadcrumb as t };
