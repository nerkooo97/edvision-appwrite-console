import { C as resolveUserOs, f as useDebugOverrides, g as isMacOs } from "./i18n-Db4baE06.js";
import { t as shouldSuppressGlobalShortcuts } from "./global-shortcut-suppress-C5j6k0iy.js";
import { useEffect, useRef, useState } from "react";
function normalizeKey(key) {
	return {
		cmd: "meta",
		command: "meta",
		"⌘": "meta",
		ctrl: "control",
		ctl: "control",
		opt: "alt",
		option: "alt",
		return: "enter",
		esc: "escape",
		" ": "space"
	}[key.toLowerCase()] || key.toLowerCase();
}
function parseKeyCombo(combo) {
	if (Array.isArray(combo)) return combo.map(normalizeKey);
	return combo.split("+").map((k) => normalizeKey(k.trim()));
}
function isBackquoteKey(e) {
	const pressed = normalizeKey(e.key);
	return pressed === "`" || pressed === "backquote" || e.code === "Backquote";
}
function eventMatchesRequiredKey(e, requiredKey) {
	const pressed = normalizeKey(e.key);
	if (pressed === requiredKey) return true;
	if (/^[a-z]$/i.test(requiredKey) && e.code === `Key${requiredKey.toUpperCase()}`) return true;
	if (requiredKey === "/" && pressed === "?") return true;
	if ((requiredKey === ";" || requiredKey === ":") && (pressed === ";" || pressed === ":")) return true;
	if ((requiredKey === "'" || requiredKey === "\"" || requiredKey === "quote") && (pressed === "'" || pressed === "\"" || e.code === "Quote")) return true;
	if ((requiredKey === "." || requiredKey === ">" || requiredKey === "period") && (pressed === "." || pressed === ">" || e.code === "Period")) return true;
	if ((requiredKey === "\\" || requiredKey === "|" || requiredKey === "backslash") && (pressed === "\\" || pressed === "|" || e.code === "Backslash")) return true;
	if ((requiredKey === "backquote" || requiredKey === "`") && isBackquoteKey(e)) return true;
	if (requiredKey === "tab" && (pressed === "tab" || e.code === "Tab")) return true;
	return false;
}
function isInputElement(element) {
	return shouldSuppressGlobalShortcuts(element);
}
function useKeyboardShortcut(keyCombo, handler, options = {}) {
	const { preventDefault = true, stopPropagation = false, ignoreInputs = true, enabled = true, capture = false } = options;
	const handlerRef = useRef(handler);
	handlerRef.current = handler;
	useEffect(() => {
		if (!enabled) return;
		const keys = parseKeyCombo(keyCombo);
		const handleKeyDown = (e) => {
			if (ignoreInputs && isInputElement(document.activeElement)) return;
			const modifiers = {
				meta: e.metaKey,
				control: e.ctrlKey,
				alt: e.altKey,
				shift: e.shiftKey
			};
			const requiredModifiers = keys.filter((k) => [
				"meta",
				"control",
				"alt",
				"shift"
			].includes(k));
			const requiredKeys = keys.filter((k) => ![
				"meta",
				"control",
				"alt",
				"shift"
			].includes(k));
			const modifiersMatch = requiredModifiers.every((mod) => modifiers[mod]);
			const noExtraModifiers = Object.entries(modifiers).every(([mod, pressed]) => {
				if (requiredModifiers.includes(mod)) return true;
				return !pressed;
			});
			const keyMatches = requiredKeys.length === 0 || requiredKeys.every((key) => eventMatchesRequiredKey(e, key));
			if (modifiersMatch && noExtraModifiers && keyMatches) {
				if (preventDefault) e.preventDefault();
				if (stopPropagation) e.stopPropagation();
				handlerRef.current(e);
			}
		};
		window.addEventListener("keydown", handleKeyDown, capture);
		return () => window.removeEventListener("keydown", handleKeyDown, capture);
	}, [
		keyCombo,
		preventDefault,
		stopPropagation,
		ignoreInputs,
		enabled,
		capture
	]);
}
function useSequentialShortcuts(shortcuts, options = {}) {
	const { ignoreInputs = true, enabled = true } = options;
	const sequenceRef = useRef([]);
	const timeoutRef = useRef(null);
	const handlersRef = useRef(shortcuts);
	handlersRef.current = shortcuts;
	useEffect(() => {
		if (!enabled) return;
		const resetSequence = () => {
			sequenceRef.current = [];
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};
		const handleKeyDown = (e) => {
			if (ignoreInputs && isInputElement(document.activeElement)) return;
			if ([
				"Meta",
				"Control",
				"Alt",
				"Shift"
			].includes(e.key)) return;
			if (e.metaKey || e.ctrlKey || e.altKey) {
				resetSequence();
				return;
			}
			const key = normalizeKey(e.key);
			sequenceRef.current.push(key);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			const currentSequence = sequenceRef.current.join(" ");
			if (Object.keys(handlersRef.current).filter((shortcut) => shortcut.startsWith(currentSequence)).length === 0) {
				resetSequence();
				return;
			}
			e.preventDefault();
			if (handlersRef.current[currentSequence]) {
				e.preventDefault();
				handlersRef.current[currentSequence](e);
				resetSequence();
				return;
			}
			timeoutRef.current = setTimeout(resetSequence, 1e3);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [ignoreInputs, enabled]);
}
function usePlatform() {
	const [isPlatformKnown, setIsPlatformKnown] = useState(false);
	const { userOs: userOsOverride } = useDebugOverrides();
	useEffect(() => {
		setIsPlatformKnown(true);
	}, []);
	const os = resolveUserOs(userOsOverride);
	const isMac = isMacOs(os);
	return {
		os,
		isMac,
		isPlatformKnown,
		userOsOverride,
		keyboardLayout: userOsOverride,
		modKey: isPlatformKnown ? isMac ? "⌘" : "Ctrl" : void 0,
		altKey: isPlatformKnown ? isMac ? "⌥" : "Alt" : void 0
	};
}
export { usePlatform as n, useSequentialShortcuts as r, useKeyboardShortcut as t };
