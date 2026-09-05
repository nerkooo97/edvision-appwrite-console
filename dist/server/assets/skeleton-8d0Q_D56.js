import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn("bg-accent animate-pulse rounded-md", className),
		...props
	});
}
export { Skeleton as t };
