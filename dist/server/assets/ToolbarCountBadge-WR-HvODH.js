import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
function ToolbarCountBadge({ count, placement, className, inlineTone = "muted" }) {
	if (count <= 0) return null;
	const label = count > 99 ? "99+" : String(count);
	if (placement === "inline") return /* @__PURE__ */ jsx("span", {
		className: cn("flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full px-1 text-[10px] tabular-nums", inlineTone === "emphasis" ? "bg-primary/15 font-semibold text-primary" : "bg-muted font-medium text-muted-foreground", className),
		children: label
	});
	return /* @__PURE__ */ jsx("span", {
		className: cn("pointer-events-none absolute -end-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-background bg-primary px-1 text-[10px] font-semibold tabular-nums text-primary-foreground", className),
		children: label
	});
}
export { ToolbarCountBadge as t };
