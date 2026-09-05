function getDocsSlugFromPath(pathname) {
	const normalized = pathname.replace(/\/+$/, "");
	if (normalized === "/docs") return "";
	if (!normalized.startsWith("/docs/")) return "";
	return normalized.slice(6);
}
export { getDocsSlugFromPath as t };
