function normalizeHostnameForFavicon(hostname) {
	const trimmed = hostname.trim();
	if (!trimmed || trimmed === "Unknown") return null;
	const withoutScheme = trimmed.replace(/^https?:\/\//i, "").split("/")[0] ?? "";
	if (!withoutScheme) return null;
	if (withoutScheme.startsWith("[")) {
		const end = withoutScheme.indexOf("]");
		if (end !== -1) return withoutScheme.slice(0, end + 1);
	}
	return withoutScheme.split(":")[0] ?? withoutScheme;
}
export { normalizeHostnameForFavicon as t };
