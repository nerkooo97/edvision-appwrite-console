import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
function EmptyState({ icon: Icon, title, description, isEmpty = true, hasFilters = false, children, action, className, variant = "default", iconSize = "sm", iconClassName }) {
	const t = useT();
	const iconSizeClasses = {
		sm: "h-5 w-5",
		md: "h-6 w-6",
		lg: "h-8 w-8",
		xl: "h-10 w-10"
	};
	const iconContainerSize = {
		sm: "h-12 w-12",
		md: "h-12 w-12",
		lg: "h-14 w-14",
		xl: "h-20 w-20"
	};
	const isHeroEmpty = iconSize === "xl";
	if (children) {
		if (variant === "card") return /* @__PURE__ */ jsx("div", {
			className: cn("rounded-xl border border-dashed border-border bg-card/50 p-8", className),
			children
		});
		if (variant === "centered") return /* @__PURE__ */ jsx("div", {
			className: cn("flex h-full items-center justify-center", isHeroEmpty ? "py-20" : "py-16", className),
			children
		});
		return /* @__PURE__ */ jsx("div", {
			className: cn("flex flex-col items-center text-center", className),
			children
		});
	}
	const defaultTitle = t(title || (hasFilters ? "No results found" : isEmpty ? "No items yet" : "No items found"));
	const defaultDescription = t(description || (hasFilters ? "Try adjusting your search or filters to see more results." : isEmpty ? "Get started by creating your first item." : "No items match your criteria."));
	const content = /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center text-center",
		children: [
			Icon && /* @__PURE__ */ jsx("div", {
				className: cn("mx-auto flex items-center justify-center rounded-full bg-muted", isHeroEmpty ? "mb-5" : "mb-4", iconContainerSize[iconSize], variant === "centered" && "ring-1 ring-border"),
				children: /* @__PURE__ */ jsx(Icon, { className: cn("text-muted-foreground", iconSizeClasses[iconSize], iconClassName) })
			}),
			/* @__PURE__ */ jsx("p", {
				className: cn("mb-1 text-foreground", isHeroEmpty ? "text-[15px] font-semibold tracking-tight" : "text-[14px] font-medium"),
				children: defaultTitle
			}),
			/* @__PURE__ */ jsx("p", {
				className: cn("text-muted-foreground", isHeroEmpty ? "max-w-md text-[14px] leading-relaxed" : "text-[13px]"),
				children: defaultDescription
			}),
			action ? /* @__PURE__ */ jsx("div", {
				className: "mt-6 flex w-full flex-wrap justify-center gap-2",
				children: action
			}) : null
		]
	});
	if (variant === "card") return /* @__PURE__ */ jsx("div", {
		className: cn("rounded-xl border border-dashed border-border bg-card/50 p-8", className),
		children: content
	});
	if (variant === "centered") return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full items-center justify-center", isHeroEmpty ? "py-20" : "py-16", className),
		children: content
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col items-center text-center", className),
		children: content
	});
}
export { EmptyState as t };
