import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
function ChartSeriesDot({ color, className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-block h-2 w-2 shrink-0 rounded-full", className),
		style: { backgroundColor: color },
		"aria-hidden": true
	});
}
export { ChartSeriesDot as t };
