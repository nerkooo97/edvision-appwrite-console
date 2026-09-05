import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
function productFeaturePublicIconMaskStyle(iconSrc) {
	return {
		maskImage: `url(${iconSrc})`,
		maskMode: "alpha",
		maskRepeat: "no-repeat",
		maskPosition: "center",
		maskSize: "contain",
		WebkitMaskImage: `url(${iconSrc})`,
		WebkitMaskRepeat: "no-repeat",
		WebkitMaskPosition: "center",
		WebkitMaskSize: "contain"
	};
}
function ProductFeaturePublicIcon({ src, className, tone = "foreground", inactive = false }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("size-4 shrink-0", tone === "foreground" ? "bg-foreground" : "bg-muted-foreground", inactive && "opacity-60 transition-opacity duration-300 group-hover/visual:opacity-100 motion-reduce:opacity-100", className),
		style: productFeaturePublicIconMaskStyle(src),
		"aria-hidden": true
	});
}
export { ProductFeaturePublicIcon as t };
