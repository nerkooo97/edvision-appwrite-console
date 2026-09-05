import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { LayoutGrid, List } from "lucide-react";
function ServiceListViewToggle({ viewMode, onViewModeChange }) {
	const t = useT();
	const buttonClassName = (selected) => cn("h-7 w-7 p-0", selected ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-transparent hover:text-foreground");
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center rounded-md border border-border bg-muted/30 p-0.5",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			type: "button",
			className: buttonClassName(viewMode === "list"),
			onClick: () => onViewModeChange("list"),
			"aria-label": t("List view"),
			"aria-pressed": viewMode === "list",
			children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
		}), /* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			type: "button",
			className: buttonClassName(viewMode === "grid"),
			onClick: () => onViewModeChange("grid"),
			"aria-label": t("Grid view"),
			"aria-pressed": viewMode === "grid",
			children: /* @__PURE__ */ jsx(LayoutGrid, { className: "h-4 w-4" })
		})]
	});
}
export { ServiceListViewToggle as t };
