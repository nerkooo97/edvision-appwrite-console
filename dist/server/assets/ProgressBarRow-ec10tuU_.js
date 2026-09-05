import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import { jsx, jsxs } from "react/jsx-runtime";
function ProgressBarRow({ value, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-2 mb-2", className),
		children: [/* @__PURE__ */ jsx(Progress, {
			value,
			className: "h-1.5 flex-1"
		}), /* @__PURE__ */ jsxs("span", {
			className: "text-[11px] text-muted-foreground shrink-0",
			children: [Math.round(value), "%"]
		})]
	});
}
export { ProgressBarRow as t };
