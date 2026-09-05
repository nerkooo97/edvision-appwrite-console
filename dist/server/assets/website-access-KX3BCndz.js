const WEBSITE_ACCESS_COOKIE_NAME = "aw_website_access";
const WEBSITE_ACCESS_PASSWORD = "Appwrite2";
function isWebsiteAccessEnabled(envValue) {
	const normalized = (envValue ?? "").toLowerCase().trim();
	if (normalized === "false" || normalized === "0" || normalized === "disabled") return false;
	return true;
}
var COOKIE_MAX_AGE_SECONDS = 3600 * 24 * 365;
var COOKIE_PATTERN = /* @__PURE__ */ new RegExp(`(?:^|;\\s*)${WEBSITE_ACCESS_COOKIE_NAME}=([^;]*)`);
function hasWebsiteAccessCookieFromHeader(cookieHeader) {
	if (!cookieHeader) return false;
	const match = cookieHeader.match(COOKIE_PATTERN);
	return Boolean(match?.[1]?.trim());
}
function hasWebsiteAccessCookie() {
	if (typeof document === "undefined") return false;
	return hasWebsiteAccessCookieFromHeader(document.cookie);
}
function setWebsiteAccessCookie() {
	if (typeof document === "undefined") return;
	const secure = window.location.protocol === "https:" ? "; Secure" : "";
	document.cookie = `${WEBSITE_ACCESS_COOKIE_NAME}=1; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}
function isWebsiteAccessProtectedPath(pathname) {
	const normalized = (pathname ?? "/").replace(/\/+$/, "") || "/";
	if (normalized === "/access") return false;
	if (normalized === "/i" || normalized.startsWith("/i/")) return false;
	return true;
}
function shouldShowWebsiteAccessGate(pathname) {
	const normalized = (pathname ?? "/").replace(/\/+$/, "") || "/";
	if (normalized === "/i" || normalized.startsWith("/i/")) return false;
	return true;
}
export { isWebsiteAccessEnabled as a, shouldShowWebsiteAccessGate as c, hasWebsiteAccessCookieFromHeader as i, WEBSITE_ACCESS_PASSWORD as n, isWebsiteAccessProtectedPath as o, hasWebsiteAccessCookie as r, setWebsiteAccessCookie as s, WEBSITE_ACCESS_COOKIE_NAME as t };
