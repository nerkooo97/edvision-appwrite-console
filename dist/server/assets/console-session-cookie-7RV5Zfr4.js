const CONSOLE_SESSION_COOKIE_NAME = "a_session_console";
var CONSOLE_SESSION_COOKIE_PATTERN = /* @__PURE__ */ new RegExp(`(?:^|;\\s*)${CONSOLE_SESSION_COOKIE_NAME}=([^;]*)`);
function hasConsoleSessionCookieFromHeader(cookieHeader) {
	if (!cookieHeader) return false;
	const match = cookieHeader.match(CONSOLE_SESSION_COOKIE_PATTERN);
	return Boolean(match?.[1]?.trim());
}
export { hasConsoleSessionCookieFromHeader as n, CONSOLE_SESSION_COOKIE_NAME as t };
