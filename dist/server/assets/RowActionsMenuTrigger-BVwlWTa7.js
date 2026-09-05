import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { MoreHorizontal } from "lucide-react";
const rowActionsMenuTriggerClassName = "h-8 w-8 shrink-0 cursor-pointer p-0 text-muted-foreground hover:bg-accent hover:text-foreground";
const rowActionsMenuTriggerCompactClassName = "h-7 w-7 shrink-0 cursor-pointer p-0 text-muted-foreground hover:bg-accent hover:text-foreground";
const RowActionsMenuTrigger = forwardRef(function RowActionsMenuTrigger$1({ className, compact = false, revealOnGroupHover = false, variant = "ghost", size = "sm", ...props }, ref) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		type: "button",
		variant,
		size,
		className: cn(compact ? rowActionsMenuTriggerCompactClassName : rowActionsMenuTriggerClassName, revealOnGroupHover && "opacity-0 transition-opacity group-hover:opacity-100", className),
		...props,
		children: [/* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: t("Actions")
		})]
	});
});
export { RowActionsMenuTrigger as t };
