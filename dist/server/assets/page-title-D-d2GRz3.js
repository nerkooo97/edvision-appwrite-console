var CONSOLE_SUFFIX = "Appwrite";
var PAGE_TITLE_SEPARATOR = " · ";
var LEGACY_CONTEXT_PREFIXES = ["Project ID: ", "Organization ID: "];
function trimForPageTitle(text, maxLength = 80) {
	const t = text.trim();
	if (t.length <= maxLength) return t;
	const sliceEnd = Math.max(1, maxLength - 1);
	return `${t.slice(0, sliceEnd)}…`;
}
function pageTitle(...parts) {
	const filtered = parts.filter(Boolean);
	if (filtered.length === 0) return CONSOLE_SUFFIX;
	return [...filtered, CONSOLE_SUFFIX].join(PAGE_TITLE_SEPARATOR);
}
function splitPageTitle(title) {
	return title.split(PAGE_TITLE_SEPARATOR).map((part) => part.trim()).filter((part) => part && !LEGACY_CONTEXT_PREFIXES.some((prefix) => part.startsWith(prefix)));
}
function withPageTitleNameContext(title, context) {
	const parts = splitPageTitle(title);
	const suffixIndex = parts.lastIndexOf(CONSOLE_SUFFIX);
	const appwriteConsoleIndex = parts.lastIndexOf("Appwrite Console");
	const titleSuffixIndex = suffixIndex >= 0 ? suffixIndex : appwriteConsoleIndex >= 0 ? appwriteConsoleIndex : -1;
	const suffix = titleSuffixIndex >= 0 ? parts[titleSuffixIndex] : void 0;
	if (context.previousContextPart && titleSuffixIndex > 0) {
		const previousIndex = titleSuffixIndex - 1;
		if (parts[previousIndex] === context.previousContextPart) parts.splice(previousIndex, 1);
	}
	if (context.projectName) {
		const projectName = trimForPageTitle(context.projectName);
		if (titleSuffixIndex >= 0) {
			const insertIndex = parts.lastIndexOf(suffix);
			if (parts[insertIndex - 1] !== projectName) parts.splice(insertIndex, 0, projectName);
			return parts.join(PAGE_TITLE_SEPARATOR);
		}
		if (parts.at(-1) !== projectName) parts.push(projectName);
		return parts.join(PAGE_TITLE_SEPARATOR);
	}
	if (context.organizationName) {
		const organizationName = trimForPageTitle(context.organizationName);
		const organizationIndex = parts.indexOf("Organization");
		if (organizationIndex >= 0) {
			parts[organizationIndex] = organizationName;
			return parts.join(PAGE_TITLE_SEPARATOR);
		}
		if (titleSuffixIndex >= 0) {
			const insertIndex = parts.lastIndexOf(suffix);
			if (parts[insertIndex - 1] !== organizationName) parts.splice(insertIndex, 0, organizationName);
			return parts.join(PAGE_TITLE_SEPARATOR);
		}
		if (parts.at(-1) !== organizationName) parts.push(organizationName);
	}
	return parts.join(PAGE_TITLE_SEPARATOR);
}
function getConsoleRouteIds(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	try {
		if (parts[0] === "projects" && parts[1]) return { projectId: decodeURIComponent(parts[1]) };
		if (parts[0] === "organizations" && parts[1]) return { orgId: decodeURIComponent(parts[1]) };
	} catch {
		return {};
	}
	return {};
}
export { withPageTitleNameContext as i, pageTitle as n, trimForPageTitle as r, getConsoleRouteIds as t };
