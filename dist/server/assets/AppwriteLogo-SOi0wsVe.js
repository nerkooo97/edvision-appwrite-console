import { n as LEGACY_LOGO_SRC, r as isLegacyTheme } from "./legacy-theme-assets-f00JZBAw.js";
import { jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
function AppwriteLogo({ className }) {
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);
	if (mounted && isLegacyTheme(theme, resolvedTheme)) return /* @__PURE__ */ jsx("img", {
		src: LEGACY_LOGO_SRC,
		alt: "Appwrite",
		className
	});
	return /* @__PURE__ */ jsx("img", {
		src: (mounted ? (resolvedTheme ?? theme) === "dark" : true) ? "/cropped-logo5.png" : "/cropped-logo5.png",
		alt: "Appwrite",
		className
	});
}
export { AppwriteLogo as t };
