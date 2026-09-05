function getHttpStatusCodeBadgeVariant(code) {
	const status = typeof code === "number" ? code : Number.parseInt(String(code), 10);
	if (Number.isNaN(status)) return "inactive";
	if (status >= 200 && status < 300) return "success";
	if (status >= 400 && status < 500) return "warning";
	if (status >= 500) return "error";
	return "inactive";
}
function getHttpMethodBadgeVariant(method) {
	switch (method.toLowerCase()) {
		case "get": return "processing";
		case "post": return "success";
		case "put":
		case "patch": return "warning";
		case "delete": return "error";
		default: return "secondary";
	}
}
function formatHttpMethodBadgeLabel(method) {
	return method.trim().toUpperCase() || "UNKNOWN";
}
function getHttpMethodAccentClasses(method) {
	switch (method.toLowerCase()) {
		case "get": return {
			endpointBox: "bg-blue-500/[0.06]",
			methodText: "text-blue-600 dark:text-blue-400"
		};
		case "post": return {
			endpointBox: "bg-emerald-500/[0.06]",
			methodText: "text-emerald-600 dark:text-emerald-400"
		};
		case "put":
		case "patch": return {
			endpointBox: "bg-amber-500/[0.06]",
			methodText: "text-amber-600 dark:text-amber-400"
		};
		case "delete": return {
			endpointBox: "bg-red-500/[0.06]",
			methodText: "text-red-600 dark:text-red-400"
		};
		default: return {
			endpointBox: "bg-muted/40",
			methodText: "text-foreground"
		};
	}
}
export { getHttpStatusCodeBadgeVariant as i, getHttpMethodAccentClasses as n, getHttpMethodBadgeVariant as r, formatHttpMethodBadgeLabel as t };
