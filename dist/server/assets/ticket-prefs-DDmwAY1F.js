import { a as parseInitTicketStack, t as INIT_TICKET_DEFAULT_STACK } from "./ticket-stack-pzBI8NL4.js";
const INIT_TICKET_PREFS_KEY_PREFIX = "console.init.ticket";
const INIT_TICKET_PREFS_CHANGE_EVENT = "initTicketPrefsChange";
const DEFAULT_INIT_TICKET_PREFS = { stack: [...INIT_TICKET_DEFAULT_STACK] };
function getInitTicketPrefsAccountKey(eventId) {
	return `${INIT_TICKET_PREFS_KEY_PREFIX}.${eventId}`;
}
function getInitTicketPrefsStorageKey(eventId, userId) {
	return `${INIT_TICKET_PREFS_KEY_PREFIX}.v1.${eventId}.${userId}`;
}
function getInitTicketGuestPrefsStorageKey(eventId) {
	return `${INIT_TICKET_PREFS_KEY_PREFIX}.v1.${eventId}.guest`;
}
function parseInitTicketPrefs(value) {
	if (!value || typeof value !== "object") return null;
	const record = value;
	const displayName = typeof record.displayName === "string" ? record.displayName.trim() : void 0;
	const holderTitle = typeof record.holderTitle === "string" ? record.holderTitle.trim() : void 0;
	const stack = parseInitTicketStack(record.stack);
	const sectionCollapsed = typeof record.sectionCollapsed === "boolean" ? record.sectionCollapsed : void 0;
	const imageFileId = typeof record.imageFileId === "string" ? record.imageFileId.trim() : void 0;
	const imageSignature = typeof record.imageSignature === "string" ? record.imageSignature.trim() : void 0;
	return {
		stack,
		...displayName ? { displayName } : {},
		...holderTitle ? { holderTitle } : {},
		...imageFileId ? { imageFileId } : {},
		...imageSignature ? { imageSignature } : {},
		...sectionCollapsed !== void 0 ? { sectionCollapsed } : {}
	};
}
function getInitTicketHolderTitle(prefs, defaultTitle) {
	return prefs.holderTitle?.trim() || defaultTitle;
}
function readInitTicketGuestPrefsFromStorage(eventId) {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(getInitTicketGuestPrefsStorageKey(eventId));
		if (!raw) return null;
		return parseInitTicketPrefs(JSON.parse(raw));
	} catch {
		return null;
	}
}
function writeInitTicketGuestPrefsToStorage(eventId, prefs) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(getInitTicketGuestPrefsStorageKey(eventId), JSON.stringify(prefs));
	} catch {}
}
function readInitTicketPrefsFromStorage(eventId, userId) {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(getInitTicketPrefsStorageKey(eventId, userId));
		if (!raw) return null;
		return parseInitTicketPrefs(JSON.parse(raw));
	} catch {
		return null;
	}
}
function writeInitTicketPrefsToStorage(eventId, userId, prefs) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(getInitTicketPrefsStorageKey(eventId, userId), JSON.stringify(prefs));
	} catch {}
}
function readInitTicketPrefsFromAccountPrefs(accountPrefs, eventId) {
	if (!accountPrefs) return null;
	const raw = accountPrefs[getInitTicketPrefsAccountKey(eventId)];
	if (typeof raw === "string") try {
		return parseInitTicketPrefs(JSON.parse(raw));
	} catch {
		return null;
	}
	return parseInitTicketPrefs(raw);
}
function mergeInitTicketPrefsIntoAccountPrefs(existingPrefs, eventId, ticketPrefs) {
	return {
		...existingPrefs ?? {},
		[getInitTicketPrefsAccountKey(eventId)]: JSON.stringify(ticketPrefs)
	};
}
function formatInitTicketNumber(userId) {
	if (!userId) return "#INIT-000000";
	return `#INIT-${userId.replace(/[^a-z0-9]/gi, "").slice(-6).toUpperCase().padStart(6, "0")}`;
}
function stripInitTicketImageFromPrefs(prefs) {
	const { imageFileId: _imageFileId, imageSignature: _imageSignature, ...rest } = prefs;
	return rest;
}
function notifyInitTicketPrefsChange(detail) {
	if (typeof window === "undefined") return;
	window.dispatchEvent(new CustomEvent(INIT_TICKET_PREFS_CHANGE_EVENT, { detail }));
}
function buildInitTicketShareMessage(params) {
	return `I'm going to ${params.eventName} (${params.dateRangeLabel}) as ${params.holderName}. One ticket holder wins exclusive Init swag on the last day - claim your pass: ${params.shareUrl}`;
}
export { formatInitTicketNumber as a, notifyInitTicketPrefsChange as c, readInitTicketPrefsFromAccountPrefs as d, readInitTicketPrefsFromStorage as f, writeInitTicketPrefsToStorage as h, buildInitTicketShareMessage as i, parseInitTicketPrefs as l, writeInitTicketGuestPrefsToStorage as m, INIT_TICKET_PREFS_CHANGE_EVENT as n, getInitTicketHolderTitle as o, stripInitTicketImageFromPrefs as p, INIT_TICKET_PREFS_KEY_PREFIX as r, mergeInitTicketPrefsIntoAccountPrefs as s, DEFAULT_INIT_TICKET_PREFS as t, readInitTicketGuestPrefsFromStorage as u };
