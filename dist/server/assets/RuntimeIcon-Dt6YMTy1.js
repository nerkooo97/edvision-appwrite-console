import { t as cn } from "./utils-DoqqkI3X.js";
import { t as LanguageIcon } from "./LanguageIcon-C0AhXLp0.js";
import { jsx } from "react/jsx-runtime";
import { Brain, Code, FileCode } from "lucide-react";
var sizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6"
};
function getRuntimeLanguage(runtime) {
	if (!runtime) return null;
	const normalized = runtime.toLowerCase();
	if (normalized.startsWith("python-ml")) return "python-ml";
	return {
		node: "node",
		python: "python",
		php: "php",
		ruby: "ruby",
		java: "java",
		go: "go",
		deno: "deno",
		bun: "bun",
		dart: "dart",
		flutter: "flutter",
		swift: "swift",
		kotlin: "kotlin",
		dotnet: "dotnet",
		cpp: "cpp",
		rust: "rust"
	}[normalized.split("-")[0]] || null;
}
function RuntimeIcon({ runtime, className, size = "md" }) {
	if (!runtime) return /* @__PURE__ */ jsx(FileCode, { className: cn(sizeClasses[size], className) });
	const language = getRuntimeLanguage(runtime);
	if (language === "python-ml") return /* @__PURE__ */ jsx(Brain, { className: cn(sizeClasses[size], "text-muted-foreground", className) });
	if (language) return /* @__PURE__ */ jsx(LanguageIcon, {
		language,
		className,
		size
	});
	return /* @__PURE__ */ jsx(Code, { className: cn(sizeClasses[size], className) });
}
export { RuntimeIcon as t };
