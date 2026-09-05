import { a as parsePostgresDatabaseTabFromPathname } from "./postgres-database-routes-CyTsPbzl.js";
import { useEffect, useState } from "react";
var registeredActions = null;
var subscribers = /* @__PURE__ */ new Set();
var jumpToTabPickerHandler = null;
function registerPostgresSqlJumpToTabPicker(handler) {
	jumpToTabPickerHandler = handler;
}
function openPostgresSqlJumpToTabPicker() {
	jumpToTabPickerHandler?.();
}
function registerPostgresSqlEditorActions(actions) {
	registeredActions = actions;
	subscribers.forEach((listener) => listener());
}
function getPostgresSqlEditorActions() {
	return registeredActions;
}
function subscribePostgresSqlEditorActions(listener) {
	subscribers.add(listener);
	return () => {
		subscribers.delete(listener);
	};
}
function usePostgresSqlEditorActions() {
	const [, setVersion] = useState(0);
	useEffect(() => subscribePostgresSqlEditorActions(() => {
		setVersion((version) => version + 1);
	}), []);
	return registeredActions;
}
function isPostgresSqlEditorPath(pathname) {
	return parsePostgresDatabaseTabFromPathname(pathname) === "sql";
}
function isPostgresSqlMonacoFocused() {
	if (typeof document === "undefined") return false;
	return document.querySelector("[data-postgres-sql-workbench]")?.querySelector(".monaco-editor:focus-within") != null;
}
export { registerPostgresSqlEditorActions as a, openPostgresSqlJumpToTabPicker as i, isPostgresSqlEditorPath as n, registerPostgresSqlJumpToTabPicker as o, isPostgresSqlMonacoFocused as r, usePostgresSqlEditorActions as s, getPostgresSqlEditorActions as t };
