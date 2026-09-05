import { t as cn } from "./utils-DoqqkI3X.js";
import { n as getFrameworkIconFile } from "./icons-Dw9jcxHS.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { jsx } from "react/jsx-runtime";
import { Globe } from "lucide-react";
var sizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6"
};
function FrameworkIcon({ framework, className, size = "md" }) {
	if (!framework || typeof framework !== "string") return /* @__PURE__ */ jsx(Globe, { className: cn(sizeClasses[size], className) });
	const iconFile = getFrameworkIconFile(framework);
	const sizeClass = sizeClasses[size];
	if (iconFile) return /* @__PURE__ */ jsx("img", {
		src: `/icons/${iconFile}`,
		alt: framework,
		className: cn(sizeClass, PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(Globe, { className: cn(sizeClass, className) });
}
export { FrameworkIcon as t };
