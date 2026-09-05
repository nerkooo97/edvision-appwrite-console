function assertAllowedExplorerRequestUrl(requestUrl, allowedEndpoint) {
	let target;
	let allowed;
	try {
		target = new URL(requestUrl);
		allowed = new URL(allowedEndpoint);
	} catch {
		throw new Error("Invalid explorer request URL");
	}
	if (target.protocol !== "http:" && target.protocol !== "https:") throw new Error("Invalid explorer request URL protocol");
	if (target.username || target.password) throw new Error("Credentials in URL are not allowed");
	if (target.origin !== allowed.origin) throw new Error("Explorer request URL origin is not allowed");
	const allowedPrefix = allowed.pathname.replace(/\/$/, "") || "/";
	if (!pathnameMatchesAllowedPrefix(target.pathname, allowedPrefix)) throw new Error("Explorer request URL path is not allowed");
}
function pathnameMatchesAllowedPrefix(pathname, allowedPrefix) {
	if (allowedPrefix === "/") return true;
	if (pathname === allowedPrefix) return true;
	return pathname.startsWith(`${allowedPrefix}/`);
}
export { assertAllowedExplorerRequestUrl as t };
