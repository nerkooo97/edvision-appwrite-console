var LAST_LOGIN_METHOD_KEY = "last-login-method";
function getLastLoginMethod() {
	if (typeof window === "undefined") return null;
	try {
		const stored = localStorage.getItem(LAST_LOGIN_METHOD_KEY);
		if (stored === "github" || stored === "email") return stored;
	} catch {}
	return null;
}
function setLastLoginMethod(method) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(LAST_LOGIN_METHOD_KEY, method);
	} catch {}
}
export { setLastLoginMethod as n, getLastLoginMethod as t };
