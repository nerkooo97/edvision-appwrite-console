import { f as useDebugOverrides, r as useI18n, u as setDebugOverride } from "./i18n-Db4baE06.js";
import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
function resolveEffectivePageDirection(language) {
	return language === "he" ? "rtl" : "ltr";
}
function usePageDirection() {
	const { language } = useI18n();
	return resolveEffectivePageDirection(language);
}
function PageDirectionProvider({ children }) {
	const { language } = useI18n();
	const { pageDirection } = useDebugOverrides();
	const effectiveDirection = resolveEffectivePageDirection(language);
	useEffect(() => {
		if (language === "he" && pageDirection !== "rtl") setDebugOverride("pageDirection", "rtl");
		else if (language === "en" && pageDirection !== "ltr") setDebugOverride("pageDirection", "ltr");
	}, [language, pageDirection]);
	useEffect(() => {
		document.documentElement.dir = effectiveDirection;
	}, [effectiveDirection]);
	return /* @__PURE__ */ jsx(DirectionProvider, {
		dir: effectiveDirection,
		children
	});
}
export { usePageDirection as n, PageDirectionProvider as t };
