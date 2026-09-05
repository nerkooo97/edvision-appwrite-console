import { t as changelogCount } from "./content-NlXhGy_g.js";
const CHANGELOG_SEEN_COUNT_KEY = "console.changelogSeenCount";
const CHANGELOG_SEEN_UPDATED_EVENT = "changelog-seen-updated";
function getStoredChangelogSeenCount() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem(CHANGELOG_SEEN_COUNT_KEY);
	if (raw === null) return null;
	const parsed = Number(raw);
	return Number.isFinite(parsed) ? parsed : null;
}
function markChangelogSeen(count = changelogCount) {
	if (typeof window === "undefined") return;
	localStorage.setItem(CHANGELOG_SEEN_COUNT_KEY, String(count));
	window.dispatchEvent(new Event(CHANGELOG_SEEN_UPDATED_EVENT));
}
function isChangelogNavBadgeVisible(pathname) {
	if (typeof window === "undefined") return false;
	if (pathname.includes("/changelog")) return false;
	const seenCount = getStoredChangelogSeenCount();
	if (seenCount === null) return true;
	return seenCount < changelogCount;
}
export { markChangelogSeen as i, CHANGELOG_SEEN_UPDATED_EVENT as n, isChangelogNavBadgeVisible as r, CHANGELOG_SEEN_COUNT_KEY as t };
