import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
var VARIANT_CONTAINER = {
	warning: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-b border-amber-700/14 dark:border-amber-400/22",
	danger: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-b border-red-600/12 dark:border-red-400/18",
	info: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-b border-blue-600/12 dark:border-blue-400/18"
};
var VARIANT_OUTLINE_ACTION = {
	warning: "border border-amber-500 bg-transparent text-amber-600 hover:bg-amber-500/10 hover:text-amber-700 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-500/20 dark:hover:text-amber-300",
	danger: "border border-red-500 bg-transparent text-red-600 hover:bg-red-500/10 hover:text-red-700 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500/20 dark:hover:text-red-300",
	info: "border border-blue-500 bg-transparent text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500/20 dark:hover:text-blue-300"
};
function headerAlertOutlineButtonClass(variant) {
	return cn("inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 rounded-md px-3 text-[13px] font-medium transition-colors", VARIANT_OUTLINE_ACTION[variant]);
}
var VARIANT_TEXT_ACTION = {
	warning: "text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300",
	danger: "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
	info: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
};
function headerAlertTextButtonClass(variant) {
	return cn("inline-flex h-8 w-fit cursor-pointer items-center justify-center px-1 text-[13px] font-medium underline-offset-4 hover:underline transition-colors", VARIANT_TEXT_ACTION[variant]);
}
function HeaderAlertBar({ variant, icon: Icon, children, action, className, role, "aria-label": ariaLabel }) {
	return /* @__PURE__ */ jsxs("div", {
		role,
		"aria-label": ariaLabel,
		className: cn("relative flex min-h-14 min-w-0 flex-col gap-3 px-4 py-3 transition-all duration-200 sm:flex-row sm:items-center sm:gap-4", VARIANT_CONTAINER[variant], className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-1 items-start gap-3",
			children: [/* @__PURE__ */ jsx(Icon, {
				className: "mt-0.5 h-4 w-4 shrink-0",
				"aria-hidden": true
			}), /* @__PURE__ */ jsx("div", {
				className: "min-w-0 flex-1 text-[13px] font-medium leading-snug",
				children
			})]
		}), action ? /* @__PURE__ */ jsx("div", {
			className: "flex w-full shrink-0 sm:ms-auto sm:w-auto",
			children: action
		}) : null]
	});
}
export { headerAlertOutlineButtonClass as n, headerAlertTextButtonClass as r, HeaderAlertBar as t };
