import { u as parseMysqlDatabaseTabFromPathname } from "./mysql-database-routes-CVHkJzTt.js";
import { useEffect, useState } from "react";
var registeredActions = null;
var subscribers = /* @__PURE__ */ new Set();
var jumpToTabPickerHandler = null;
function openMysqlSqlJumpToTabPicker() {
	jumpToTabPickerHandler?.();
}
function registerMysqlSqlEditorActions(actions) {
	registeredActions = actions;
	subscribers.forEach((listener) => listener());
}
function getMysqlSqlEditorActions() {
	return registeredActions;
}
function isMysqlSqlEditorPath(pathname) {
	return parseMysqlDatabaseTabFromPathname(pathname) === "sql";
}
function isMysqlSqlMonacoFocused() {
	if (typeof document === "undefined") return false;
	return document.querySelector("[data-mysql-sql-workbench]")?.querySelector(".monaco-editor:focus-within") != null;
}
export { registerMysqlSqlEditorActions as a, openMysqlSqlJumpToTabPicker as i, isMysqlSqlEditorPath as n, isMysqlSqlMonacoFocused as r, getMysqlSqlEditorActions as t };
