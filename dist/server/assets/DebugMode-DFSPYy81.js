import { t as shouldSuppressGlobalShortcuts } from "./global-shortcut-suppress-C5j6k0iy.js";
import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
var DEBUG_MODE_OPEN_KEY = "debug:modeOpen";
var DEBUG_MODE_TOGGLE_SEQUENCE = "pink";
function readDebugModeOpen() {
	if (typeof window === "undefined") return false;
	try {
		return localStorage.getItem(DEBUG_MODE_OPEN_KEY) === "true";
	} catch {
		return false;
	}
}
function writeDebugModeOpen(open) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(DEBUG_MODE_OPEN_KEY, open ? "true" : "false");
	} catch {}
}
var DebugModeContext = createContext({
	isDebugModeOpen: false,
	closeDebugMode: () => {}
});
function useDebugMode() {
	return useContext(DebugModeContext);
}
function DebugModeProvider({ children }) {
	const [isDebugModeOpen, setIsDebugModeOpen] = useState(() => readDebugModeOpen());
	const typedSequenceRef = useRef("");
	const closeDebugMode = useCallback(() => {
		setIsDebugModeOpen(false);
		writeDebugModeOpen(false);
	}, []);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (shouldSuppressGlobalShortcuts(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
			if (e.key.length !== 1) {
				typedSequenceRef.current = "";
				return;
			}
			typedSequenceRef.current = (typedSequenceRef.current + e.key).slice(-4);
			if (typedSequenceRef.current.toLowerCase() === DEBUG_MODE_TOGGLE_SEQUENCE) {
				typedSequenceRef.current = "";
				setIsDebugModeOpen((prev) => {
					const next = !prev;
					writeDebugModeOpen(next);
					return next;
				});
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ jsx(DebugModeContext.Provider, {
		value: {
			isDebugModeOpen,
			closeDebugMode
		},
		children
	});
}
export { useDebugMode as n, DebugModeProvider as t };
