import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
function PricingSectionHeading({ title, description, descriptionClassName, align = "center", size = "lg", className, as: HeadingTag = "h2", showUnderscore = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-start", className),
		children: [/* @__PURE__ */ jsxs(HeadingTag, {
			className: cn("font-aeonik-pro text-balance font-normal leading-none tracking-tight text-foreground", size === "lg" ? "text-[36px] sm:text-[44px]" : "text-[28px] sm:text-[32px]"),
			children: [title, showUnderscore ? /* @__PURE__ */ jsx("span", {
				className: "text-[var(--brand-cta)]",
				children: "_"
			}) : null]
		}), description ? /* @__PURE__ */ jsx("p", {
			className: cn("mt-4 text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7", align === "center" && cn("mx-auto text-balance", descriptionClassName ?? "max-w-2xl")),
			children: description
		}) : null]
	});
}
export { PricingSectionHeading as t };
