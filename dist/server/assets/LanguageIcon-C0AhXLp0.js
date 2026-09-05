import { t as cn } from "./utils-DoqqkI3X.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { jsx } from "react/jsx-runtime";
var sizeClasses = {
	sm: "h-5 w-5",
	md: "h-6 w-6",
	lg: "h-8 w-8"
};
var languageIconMap = {
	node: "node.svg",
	python: "python.svg",
	php: "php.svg",
	ruby: "ruby.svg",
	go: "go.svg",
	deno: "deno.svg",
	bun: "bun.svg",
	dart: "dart.svg",
	flutter: "flutter.svg",
	swift: "swift.svg",
	kotlin: "kotlin.svg",
	java: "java.svg",
	dotnet: "dotnet.svg",
	rust: "rust.svg",
	cpp: "cpp.svg"
};
function LanguageIcon({ language, className, size = "md" }) {
	const normalized = language.toLowerCase();
	const iconFile = languageIconMap[normalized];
	const sizeClass = sizeClasses[size];
	if (!iconFile) return null;
	const isGoIcon = normalized === "go";
	return /* @__PURE__ */ jsx("img", {
		src: `/icons/${iconFile}`,
		alt: language,
		className: cn(sizeClass, isGoIcon ? "brightness-0 dark:brightness-0 dark:invert" : PUBLIC_ICON_MUTED_CLASSES, className)
	});
}
export { LanguageIcon as t };
