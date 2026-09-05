const LEGACY_ICON_SRC = "/legacy-icon.svg";
const LEGACY_LOGO_SRC = "/legacy-logo.svg";
function resolveEffectiveTheme(theme, resolvedTheme) {
	return theme === "system" ? resolvedTheme : theme;
}
function isLegacyTheme(theme, resolvedTheme) {
	return resolveEffectiveTheme(theme, resolvedTheme) === "legacy";
}
function readStoredThemePreference() {
	if (typeof window === "undefined") return "system";
	try {
		const stored = localStorage.getItem("theme") || "system";
		return stored === "classic" ? "dark" : stored;
	} catch {
		return "system";
	}
}
function readEffectiveThemeFromStorage() {
	const preference = readStoredThemePreference();
	if (preference === "system") {
		if (typeof window === "undefined") return "light";
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	return preference;
}
function isLegacyThemeFromStorage() {
	return readEffectiveThemeFromStorage() === "legacy";
}
export { isLegacyThemeFromStorage as i, LEGACY_LOGO_SRC as n, isLegacyTheme as r, LEGACY_ICON_SRC as t };
