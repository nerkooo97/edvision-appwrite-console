const COVER_LUCIDE_POPULAR_ICONS = [
	"activity",
	"app-window",
	"archive",
	"arrow-right",
	"bell",
	"blocks",
	"book-open",
	"box",
	"calendar",
	"chart-bar",
	"check",
	"cloud",
	"code",
	"cog",
	"database",
	"file",
	"folder",
	"globe",
	"heart",
	"image",
	"key",
	"layers",
	"link",
	"lock",
	"mail",
	"message-square",
	"package",
	"palette",
	"rocket",
	"search",
	"server",
	"settings",
	"shield",
	"sparkles",
	"star",
	"terminal",
	"upload",
	"user",
	"users",
	"zap"
];
const COVER_LUCIDE_ICON_PREFIX = "lucide:";
const COVER_LUCIDE_ICON_NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function isCoverLucideIconValue(value) {
	return value?.startsWith("lucide:") ?? false;
}
function parseCoverLucideIconName(value) {
	if (!isCoverLucideIconValue(value)) return null;
	const name = value.slice(7).trim();
	if (!name || !COVER_LUCIDE_ICON_NAME_PATTERN.test(name)) return null;
	return name;
}
function formatCoverLucideIconValue(name) {
	return `${COVER_LUCIDE_ICON_PREFIX}${name}`;
}
function formatCoverLucideIconLabel(name) {
	return name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}
function searchCoverLucideIcons(query, iconNames) {
	const normalized = query.trim().toLowerCase();
	if (!normalized) return [...COVER_LUCIDE_POPULAR_ICONS];
	return (iconNames ?? [...COVER_LUCIDE_POPULAR_ICONS]).filter((name) => name.includes(normalized)).slice(0, 100);
}
function getCoverLucideIconSearchMeta(query, iconNames) {
	const normalized = query.trim().toLowerCase();
	if (!normalized) return {
		isLimited: false,
		totalMatches: COVER_LUCIDE_POPULAR_ICONS.length,
		isLibraryLoaded: iconNames != null
	};
	if (!iconNames) return {
		isLimited: false,
		totalMatches: COVER_LUCIDE_POPULAR_ICONS.filter((name) => name.includes(normalized)).length,
		isLibraryLoaded: false
	};
	const totalMatches = iconNames.filter((name) => name.includes(normalized)).length;
	return {
		isLimited: totalMatches > 100,
		totalMatches,
		isLibraryLoaded: true
	};
}
export { parseCoverLucideIconName as a, isCoverLucideIconValue as i, formatCoverLucideIconValue as n, searchCoverLucideIcons as o, getCoverLucideIconSearchMeta as r, formatCoverLucideIconLabel as t };
