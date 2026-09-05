function isMonacoEditorFocused() {
	if (typeof document === "undefined") return false;
	return document.querySelector(".monaco-editor:focus-within") !== null;
}
function shouldSuppressGlobalShortcuts(focusTarget) {
	if (isMonacoEditorFocused()) return true;
	if (focusTarget == null || !(focusTarget instanceof Element)) return false;
	const el = focusTarget;
	if (el.closest?.(".monaco-editor, [data-postgres-sql-editor]")) return true;
	const tag = el.tagName;
	if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
	if (el.isContentEditable) return true;
	if (el.getAttribute("contenteditable") === "true") return true;
	return false;
}
export { shouldSuppressGlobalShortcuts as t };
