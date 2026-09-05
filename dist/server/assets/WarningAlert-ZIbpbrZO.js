import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle } from "lucide-react";
const warningAlertContainerClassName = "border-red-500/30 bg-red-500/5";
const warningAlertIconClassName = "h-4 w-4 text-red-500";
const warningAlertTitleClassName = "text-[13px] font-medium text-red-600 dark:text-red-400";
const warningAlertDescriptionClassName = "text-[13px] leading-relaxed text-red-600/80 dark:text-red-400/80";
const warningAlertTextClassName = "text-[13px] text-red-600 dark:text-red-400";
function WarningAlert({ title, children, className, icon: Icon$1 = AlertTriangle, descriptionClassName }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Alert, {
		variant: "default",
		className: cn(warningAlertContainerClassName, className),
		children: [
			/* @__PURE__ */ jsx(Icon$1, { className: warningAlertIconClassName }),
			title ? /* @__PURE__ */ jsx(AlertTitle, {
				className: warningAlertTitleClassName,
				children: typeof title === "string" ? t(title) : title
			}) : null,
			/* @__PURE__ */ jsx(AlertDescription, {
				className: cn(title ? cn("mt-2", warningAlertDescriptionClassName) : warningAlertTextClassName, !title && "col-start-2", descriptionClassName),
				children: typeof children === "string" ? t(children) : children
			})
		]
	});
}
export { warningAlertContainerClassName as n, warningAlertTextClassName as r, WarningAlert as t };
