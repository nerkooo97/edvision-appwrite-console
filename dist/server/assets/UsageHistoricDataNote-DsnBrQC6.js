import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Info } from "lucide-react";
const USAGE_HISTORIC_DATA_NOTE = "Historic data is not available through the new usage API.";
function UsageHistoricDataNote({ className, variant = "inline" }) {
	const t = useT();
	const content = /* @__PURE__ */ jsxs("p", {
		className: "text-[12px] leading-relaxed text-muted-foreground",
		children: [/* @__PURE__ */ jsx(Info, {
			className: "mb-0.5 me-1.5 inline-block h-3.5 w-3.5 align-middle",
			"aria-hidden": true
		}), t(USAGE_HISTORIC_DATA_NOTE)]
	});
	if (variant === "footer") return /* @__PURE__ */ jsx("div", {
		className: cn("border-t border-border bg-muted/30 px-5 py-3", className),
		children: content
	});
	return /* @__PURE__ */ jsx("div", {
		className,
		children: content
	});
}
export { UsageHistoricDataNote as t };
