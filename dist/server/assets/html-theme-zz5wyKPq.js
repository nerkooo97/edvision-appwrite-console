var DARK_CHROME_CLASSES = [
	"dark",
	"crazy",
	"stealth",
	"premium",
	"high-contrast"
];
const HTML_THEME_CLASSES = [
	"light",
	"dark",
	"crazy",
	"stealth",
	"premium",
	"high-contrast",
	"barbie",
	"nineties",
	"legacy"
];
function getHtmlThemeKey() {
	if (typeof document === "undefined") return "light";
	const root = document.documentElement;
	for (const theme of HTML_THEME_CLASSES) if (root.classList.contains(theme)) return theme;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function isHtmlDarkChrome() {
	if (typeof document === "undefined") return false;
	const list = document.documentElement.classList;
	return DARK_CHROME_CLASSES.some((c) => list.contains(c));
}
function isResolvedThemeDarkChrome(resolvedTheme) {
	if (!resolvedTheme) return false;
	if (resolvedTheme === "dark") return true;
	return resolvedTheme === "crazy" || resolvedTheme === "stealth" || resolvedTheme === "premium" || resolvedTheme === "high-contrast";
}
function getConsoleHeaderLogoClass(theme, resolvedTheme, mounted) {
	if (!mounted) return "text-[var(--brand-cta)]";
	const effective = theme === "system" ? resolvedTheme : theme;
	if (effective === "light" || effective === "dark") return "text-[var(--brand-cta)]";
	if (effective === "crazy" || effective === "stealth" || effective === "premium" || effective === "high-contrast" || effective === "barbie" || effective === "nineties") return "text-primary";
	return "text-[var(--brand-cta)]";
}
export { isResolvedThemeDarkChrome as i, getHtmlThemeKey as n, isHtmlDarkChrome as r, getConsoleHeaderLogoClass as t };
