import { t as cn } from "./utils-DoqqkI3X.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var OAUTH_MARK = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("circle", {
	cx: "12",
	cy: "12",
	r: "10",
	fill: "currentColor"
}), /* @__PURE__ */ jsx("path", {
	className: "fill-background",
	d: "M9.9 14.75 9.3 16.7H6.8l2.88-9.34c.17-.57.7-.96 1.3-.96h2.04c.6 0 1.13.39 1.3.96l2.88 9.34h-2.5l-.6-1.95H9.9zm.65-2.15h2.9L12 7.9l-1.45 4.7Z"
})] });
function OAuthIcon({ className, variant = "brand" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("h-4 w-4 shrink-0 text-muted-foreground", variant === "nav" ? "opacity-[0.55] dark:opacity-[0.72] group-hover:opacity-100 group-focus-visible:opacity-100" : "opacity-[0.55] dark:opacity-100", className),
		"aria-hidden": true,
		children: OAUTH_MARK
	});
}
export { OAuthIcon as t };
