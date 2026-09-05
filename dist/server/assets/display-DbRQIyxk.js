import { r as useSequentialShortcuts } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { useMemo } from "react";
import { useTheme } from "next-themes";
const THEME_LIGHT_SHORTCUT_RAW = "T L";
const THEME_DARK_SHORTCUT_RAW = "T D";
const THEME_SYSTEM_SHORTCUT_RAW = "T A";
function buildThemeSequentialShortcuts(setTheme) {
	return {
		["t l"]: () => setTheme("light"),
		["t d"]: () => setTheme("dark"),
		["t a"]: () => setTheme("system")
	};
}
function useThemeShortcuts(options = {}) {
	const { setTheme } = useTheme();
	const { enabled = true } = options;
	useSequentialShortcuts(useMemo(() => buildThemeSequentialShortcuts(setTheme), [setTheme]), { enabled });
}
const GLOBAL_SHORTCUT_REFS = [
	{
		id: "global.command-center",
		description: "Open command center",
		raw: "mod+k"
	},
	{
		id: "global.shortcuts",
		description: "Show keyboard shortcuts",
		raw: "?"
	},
	{
		id: "global.back",
		description: "Close / go back",
		raw: "escape"
	},
	{
		id: "global.search",
		description: "Focus search",
		raw: "/"
	},
	{
		id: "global.theme.light",
		description: "Set theme to light",
		raw: "T L"
	},
	{
		id: "global.theme.dark",
		description: "Set theme to dark",
		raw: "T D"
	},
	{
		id: "global.theme.system",
		description: "Set theme to system",
		raw: "T A"
	}
];
const GLOBAL_SHORTCUT_IDS = new Set(GLOBAL_SHORTCUT_REFS.map((shortcut) => shortcut.id));
var MODIFIERS = new Set([
	"mod",
	"meta",
	"command",
	"cmd",
	"⌘",
	"ctrl",
	"control",
	"alt",
	"opt",
	"option",
	"shift"
]);
var SHORTCUT_GROUP_ORDER = [
	"Global",
	"Navigation",
	"Create",
	"Actions",
	"Agent",
	"SQL editor",
	"Terminal",
	"Help",
	"Theme"
];
function normalizeShortcutRaw(raw) {
	return raw.trim().toLowerCase();
}
function formatSingleDisplayKey(key, isMac) {
	const lower = key.toLowerCase();
	if (lower === "mod" || lower === "meta" || lower === "command" || lower === "cmd" || lower === "⌘") return isMac ? "⌘" : "Ctrl";
	if (lower === "ctrl" || lower === "control") return "Ctrl";
	if (lower === "alt" || lower === "opt" || lower === "option") return isMac ? "⌥" : "Alt";
	if (lower === "shift") return isMac ? "⇧" : "Shift";
	if (lower === "escape" || lower === "esc") return "Esc";
	if (lower === "slash" || key === "/") return "/";
	if (lower === "backquote" || key === "`") return "`";
	if (lower === "home") return "Home";
	if (lower === "end") return "End";
	if (lower === "delete") return "Delete";
	if (lower === "backspace") return "⌫";
	if (lower === "tab") return "Tab";
	if (lower === "pageup") return "PgUp";
	if (lower === "pagedown") return "PgDn";
	if (lower === "up") return "↑";
	if (lower === "down") return "↓";
	if (lower === "left") return "←";
	if (lower === "right") return "→";
	if (key === "?") return "?";
	if (key === ",") return ",";
	if (lower === "semicolon" || key === ";") return ";";
	if (lower === "quote" || key === "'" || key === "\"") return "'";
	if (lower === "backslash" || key === "\\" || key === "|") return "\\";
	if (lower === "period" || key === ".") return ".";
	if (key.length === 1 && /[a-z]/i.test(key)) return key.toUpperCase();
	return key;
}
function tokenToHighlightKey(token, isMac) {
	const lower = token.toLowerCase();
	if (lower === "mod" || lower === "meta" || lower === "command" || lower === "cmd" || lower === "⌘") return isMac ? ["metaLeft"] : ["controlLeft"];
	if (lower === "ctrl" || lower === "control") return ["controlLeft"];
	if (lower === "alt" || lower === "opt" || lower === "option") return ["altLeft"];
	if (lower === "shift") return ["shiftLeft"];
	if (lower === "escape" || lower === "esc") return ["escape"];
	if (lower === "slash" || token === "/") return ["slash"];
	if (lower === "backquote" || token === "`") return ["backquote"];
	if (lower === "home") return ["home"];
	if (lower === "end") return ["end"];
	if (lower === "delete") return ["delete"];
	if (lower === "backspace") return ["backspace"];
	if (lower === "tab") return ["tab"];
	if (lower === "pageup") return ["pageUp"];
	if (lower === "pagedown") return ["pageDown"];
	if (lower === "up") return ["arrowUp"];
	if (lower === "down") return ["arrowDown"];
	if (lower === "left") return ["arrowLeft"];
	if (lower === "right") return ["arrowRight"];
	if (token === "?") return ["shiftLeft", "slash"];
	if (token === ",") return ["comma"];
	if (token === ";" || lower === "semicolon") return ["semicolon"];
	if (token === "'" || token === "\"" || lower === "quote") return ["quote"];
	if (token === "\\" || token === "|" || lower === "backslash") return ["backslash"];
	if (token === "." || lower === "period") return ["period"];
	if (token.length === 1 && /[a-z]/i.test(token)) return [token.toLowerCase()];
	return [lower];
}
function formatDisplayKeys(raw, isMac) {
	if (raw.includes("+")) return raw.split("+").map((part) => formatSingleDisplayKey(part.trim(), isMac));
	return raw.split(/\s+/).filter(Boolean).map((part) => formatSingleDisplayKey(part.trim(), isMac));
}
function parseHighlightKeys(raw, isMac) {
	const keys = [];
	const addKeys = (token) => {
		for (const key of tokenToHighlightKey(token, isMac)) if (!keys.includes(key)) keys.push(key);
	};
	const normalized = raw.trim();
	if (normalized.includes("+")) {
		for (const part of normalized.split("+")) addKeys(part.trim());
		return keys;
	}
	for (const part of normalized.split(/\s+/).filter(Boolean)) addKeys(part.trim());
	return keys;
}
function isSequentialShortcut(raw) {
	if (raw.includes("+")) return false;
	const parts = raw.split(/\s+/).filter(Boolean);
	if (parts.length <= 1) return false;
	return parts.every((part) => !MODIFIERS.has(part.toLowerCase()));
}
function buildShortcutRefGroup(label, shortcuts, isMac) {
	return {
		label,
		shortcuts: shortcuts.map((shortcut) => ({
			id: shortcut.id,
			description: shortcut.description,
			raw: shortcut.raw,
			displayKeys: formatDisplayKeys(shortcut.raw, isMac),
			highlightKeys: parseHighlightKeys(shortcut.raw, isMac),
			isSequential: isSequentialShortcut(shortcut.raw)
		}))
	};
}
function mergeShortcutGroups(base, extra, insertAfterLabel = "Global") {
	if (extra.length === 0) return base;
	const insertIndex = base.findIndex((group) => group.label === insertAfterLabel);
	if (insertIndex === -1) return [...base, ...extra];
	return [
		...base.slice(0, insertIndex + 1),
		...extra,
		...base.slice(insertIndex + 1)
	];
}
function buildShortcutGroups(commands, groupLabelForKind, isMac) {
	const buckets = /* @__PURE__ */ new Map();
	for (const cmd of commands) {
		if (!cmd.shortcut) continue;
		if (GLOBAL_SHORTCUT_IDS.has(cmd.id)) continue;
		const label = cmd.group ?? groupLabelForKind(cmd.kind);
		const arr = buckets.get(label) ?? [];
		arr.push({
			id: cmd.id,
			description: cmd.label,
			raw: cmd.shortcut,
			displayKeys: formatDisplayKeys(cmd.shortcut, isMac),
			highlightKeys: parseHighlightKeys(cmd.shortcut, isMac),
			isSequential: isSequentialShortcut(cmd.shortcut)
		});
		buckets.set(label, arr);
	}
	buckets.set("Global", buildShortcutRefGroup("Global", GLOBAL_SHORTCUT_REFS, isMac).shortcuts);
	const groups = Array.from(buckets.entries()).map(([label, shortcuts]) => ({
		label,
		shortcuts
	})).filter((group) => group.shortcuts.length > 0);
	groups.sort((a, b) => {
		const ai = SHORTCUT_GROUP_ORDER.indexOf(a.label);
		const bi = SHORTCUT_GROUP_ORDER.indexOf(b.label);
		if (ai !== -1 || bi !== -1) {
			if (ai === -1) return 1;
			if (bi === -1) return -1;
			return ai - bi;
		}
		return a.label.localeCompare(b.label);
	});
	return dedupeShortcutGroups(groups);
}
function dedupeShortcutGroups(groups) {
	const seen = /* @__PURE__ */ new Set();
	return groups.map((group) => ({
		...group,
		shortcuts: group.shortcuts.filter((shortcut) => {
			const key = `${normalizeShortcutRaw(shortcut.raw)}::${shortcut.description.toLowerCase()}`;
			if (seen.has(key)) return false;
			seen.add(key);
			return true;
		})
	})).filter((group) => group.shortcuts.length > 0);
}
export { mergeShortcutGroups as a, THEME_SYSTEM_SHORTCUT_RAW as c, formatDisplayKeys as i, useThemeShortcuts as l, buildShortcutRefGroup as n, THEME_DARK_SHORTCUT_RAW as o, dedupeShortcutGroups as r, THEME_LIGHT_SHORTCUT_RAW as s, buildShortcutGroups as t };
