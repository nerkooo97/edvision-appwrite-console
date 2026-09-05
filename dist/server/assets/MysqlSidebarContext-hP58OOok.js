import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Gp as useMysqlSidebarSchemas, Jp as useMysqlSqlEditorPersistence, Lp as useMysqlQueryHistory, Up as useMysqlSelectedSchema, Vp as useMysqlSavedQueryScope, Wp as useMysqlSidebarPanel } from "./hooks-BONwG3Mt.js";
import { It as MAX_MYSQL_QUERY_HISTORY_ENTRIES, Lt as MAX_MYSQL_SQL_EDITOR_TAB_TITLE_LENGTH } from "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { c as mysqlTableRows, f as parseMysqlTableId, l as normalizeMysqlTableRouteId, o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { sn as buildMysqlSelectSql } from "./form-field-type-badge-C7qMzJo0.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { jsx } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
var DEFAULT_SQL = "SELECT NOW() AS now;";
var MysqlSidebarContext = createContext(null);
function queryPreview(sql) {
	const line = sql.trim().split("\n")[0]?.trim() ?? sql.trim();
	if (line.length <= 72) return line;
	return `${line.slice(0, 69)}...`;
}
function queryPreviewLabel(sql) {
	return queryPreview(sql);
}
function mysqlQuerySelectionKey(kind, id) {
	return `${kind}:${id}`;
}
function createBlankTab(existingCount) {
	return {
		id: crypto.randomUUID(),
		title: `Query ${existingCount + 1}`,
		sql: DEFAULT_SQL,
		result: null,
		explainResult: null,
		error: null
	};
}
function createTableTab(tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	return {
		id: crypto.randomUUID(),
		title: table,
		sql: buildMysqlSelectSql(schema, table, 25, 0),
		tableId,
		result: null,
		explainResult: null,
		error: null
	};
}
function createInitialTabState() {
	const initialTab = createBlankTab(0);
	return {
		tabs: [initialTab],
		activeTabId: initialTab.id
	};
}
function openQueryInEditorState(state, sql) {
	const trimmed = sql.trim();
	if (!trimmed) return null;
	const existing = state.tabs.find((tab) => tab.sql === trimmed);
	if (existing) return {
		...state,
		activeTabId: existing.id
	};
	const newTab = {
		id: crypto.randomUUID(),
		title: queryPreviewLabel(trimmed),
		sql: trimmed,
		result: null,
		explainResult: null,
		error: null
	};
	return {
		tabs: [...state.tabs, newTab],
		activeTabId: newTab.id
	};
}
function openTableInEditorState(state, tableId) {
	const normalizedTableId = normalizeMysqlTableRouteId(tableId);
	const existing = state.tabs.find((tab) => tab.tableId === normalizedTableId);
	if (existing) return {
		...state,
		activeTabId: existing.id
	};
	const newTab = createTableTab(normalizedTableId);
	return {
		tabs: [...state.tabs, newTab],
		activeTabId: newTab.id
	};
}
function createBlankEditorTabState(state) {
	const newTab = createBlankTab(state.tabs.length);
	return {
		tabs: [...state.tabs, newTab],
		activeTabId: newTab.id
	};
}
function duplicateQueryInEditorState(state, sql) {
	const trimmed = sql.trim();
	const newTab = {
		id: crypto.randomUUID(),
		title: queryPreviewLabel(trimmed || DEFAULT_SQL),
		sql: trimmed || DEFAULT_SQL,
		result: null,
		explainResult: null,
		error: null
	};
	return {
		tabs: [...state.tabs, newTab],
		activeTabId: newTab.id
	};
}
function closeOtherEditorTabsState(state, tabId) {
	const tab = state.tabs.find((entry) => entry.id === tabId);
	if (!tab || state.tabs.length <= 1) return null;
	return {
		tabs: [tab],
		activeTabId: tabId
	};
}
function closeEditorTabState(state, tabId) {
	if (state.tabs.length <= 1) return state;
	const index = state.tabs.findIndex((tab) => tab.id === tabId);
	if (index < 0) return state;
	const tabs = state.tabs.filter((tab) => tab.id !== tabId);
	if (tabId !== state.activeTabId) return {
		...state,
		tabs
	};
	return {
		tabs,
		activeTabId: tabs[Math.min(index, tabs.length - 1)]?.id ?? tabs[0].id
	};
}
function editorTabStateFromPersisted(persisted) {
	const tabs = persisted.tabs.map((tab) => ({
		id: tab.id,
		title: tab.title,
		sql: tab.sql,
		tableId: tab.tableId,
		result: null,
		explainResult: null,
		error: null
	}));
	return {
		tabs,
		activeTabId: tabs.some((tab) => tab.id === persisted.activeTabId) ? persisted.activeTabId : tabs[0]?.id
	};
}
function persistedFromEditorTabState(state) {
	const tabs = state.tabs.map((tab) => ({
		id: tab.id,
		title: tab.title.slice(0, 64),
		sql: tab.sql,
		...tab.tableId ? { tableId: tab.tableId } : {}
	}));
	return {
		tabs,
		activeTabId: tabs.some((tab) => tab.id === state.activeTabId) ? state.activeTabId : tabs[0]?.id ?? state.activeTabId
	};
}
function MysqlSidebarProvider({ databaseId, children }) {
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { account } = useAuth();
	const { project } = useProject(projectId);
	const { savedQueryLevel, setSavedQueryLevel } = useMysqlSavedQueryScope(databaseId, account, project?.teamId ?? null);
	const { recentQueries, persistRecentQueries } = useMysqlQueryHistory(databaseId, account);
	const { panel, setPanel } = useMysqlSidebarPanel(databaseId, account);
	const { schemas: sidebarSchemas } = useMysqlSidebarSchemas(projectId, databaseId, "");
	const { selectedSchema, setSelectedSchema } = useMysqlSelectedSchema(databaseId, sidebarSchemas, account);
	const { parseInitialEditorState, persistEditorTabState } = useMysqlSqlEditorPersistence(databaseId, account);
	const [selectedQueryKey, setSelectedQueryKey] = useState(null);
	const skipEditorPersistRef = useRef(true);
	const editorInitializedDatabaseIdRef = useRef(null);
	const pendingActiveTabIdRef = useRef(null);
	const [editorTabState, setEditorTabState] = useState(createInitialTabState);
	const { tabs, activeTabId } = editorTabState;
	useEffect(() => {
		editorInitializedDatabaseIdRef.current = null;
	}, [databaseId]);
	useEffect(() => {
		if (!databaseId) return;
		if (editorInitializedDatabaseIdRef.current === databaseId) return;
		if (!account) return;
		skipEditorPersistRef.current = true;
		const persisted = parseInitialEditorState();
		setEditorTabState(persisted ? editorTabStateFromPersisted(persisted) : createInitialTabState());
		editorInitializedDatabaseIdRef.current = databaseId;
		requestAnimationFrame(() => {
			skipEditorPersistRef.current = false;
		});
	}, [
		account,
		databaseId,
		parseInitialEditorState
	]);
	useEffect(() => {
		if (skipEditorPersistRef.current || !databaseId) return;
		persistEditorTabState(persistedFromEditorTabState(editorTabState));
	}, [
		databaseId,
		editorTabState,
		persistEditorTabState
	]);
	const activeTab = useMemo(() => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0], [activeTabId, tabs]);
	const applyPendingActiveTab = useCallback(() => {
		const tabId = pendingActiveTabIdRef.current;
		if (!tabId) return;
		flushSync(() => {
			setEditorTabState((prev) => {
				if (!prev.tabs.some((tab) => tab.id === tabId)) {
					pendingActiveTabIdRef.current = null;
					return prev;
				}
				if (prev.activeTabId === tabId) {
					pendingActiveTabIdRef.current = null;
					return prev;
				}
				pendingActiveTabIdRef.current = null;
				return {
					...prev,
					activeTabId: tabId
				};
			});
		});
	}, []);
	const schedulePendingActiveTab = useCallback(() => {
		queueMicrotask(() => applyPendingActiveTab());
		requestAnimationFrame(() => applyPendingActiveTab());
	}, [applyPendingActiveTab]);
	const commitEditorTabState = useCallback((updater, options) => {
		let nextActiveTabId = null;
		flushSync(() => {
			setEditorTabState((prev) => {
				const next = updater(prev);
				if (!next) return prev;
				if (options?.focusTab !== false) nextActiveTabId = next.activeTabId;
				return next;
			});
		});
		if (nextActiveTabId) pendingActiveTabIdRef.current = nextActiveTabId;
		return nextActiveTabId;
	}, []);
	const focusTableRouteTab = useCallback((tableId) => {
		const normalizedTableId = normalizeMysqlTableRouteId(tableId);
		commitEditorTabState((prev) => openTableInEditorState(prev, normalizedTableId));
	}, [commitEditorTabState]);
	const setActiveTabId = useCallback((tabId) => {
		pendingActiveTabIdRef.current = null;
		setEditorTabState((prev) => {
			if (!prev.tabs.some((tab) => tab.id === tabId)) return prev;
			return prev.activeTabId === tabId ? prev : {
				...prev,
				activeTabId: tabId
			};
		});
	}, []);
	const updateActiveTabSql = useCallback((sql) => {
		setEditorTabState((prev) => ({
			...prev,
			tabs: prev.tabs.map((tab) => tab.id === prev.activeTabId ? {
				...tab,
				sql
			} : tab)
		}));
	}, []);
	const setActiveTabResult = useCallback((result, error = null, resultKind = "query", explainResult = null) => {
		setEditorTabState((prev) => ({
			...prev,
			tabs: prev.tabs.map((tab) => tab.id === prev.activeTabId ? {
				...tab,
				result: resultKind === "explain" ? null : result,
				explainResult: resultKind === "explain" ? explainResult : null,
				error,
				resultKind
			} : tab)
		}));
	}, []);
	const addRecentQuery = useCallback((sql) => {
		const trimmed = sql.trim();
		if (!trimmed) return;
		persistRecentQueries([{
			id: recentQueries.find((entry) => entry.sql === trimmed)?.id ?? crypto.randomUUID(),
			sql: trimmed,
			ranAt: Date.now()
		}, ...recentQueries.filter((entry) => entry.sql !== trimmed)].slice(0, 30));
	}, [persistRecentQueries, recentQueries]);
	const clearRecentQueries = useCallback(() => {
		persistRecentQueries([]);
		setSelectedQueryKey((key) => key?.startsWith("recent:") ? null : key);
	}, [persistRecentQueries]);
	const openQueryTab = useCallback((sql) => {
		if (!commitEditorTabState((prev) => openQueryInEditorState(prev, sql))) return;
		navigate({ ...mysqlNav({
			projectId,
			databaseId
		}).sql() });
		schedulePendingActiveTab();
	}, [
		commitEditorTabState,
		databaseId,
		navigate,
		projectId,
		schedulePendingActiveTab
	]);
	const selectRecentQuery = useCallback((query) => {
		setSelectedQueryKey(mysqlQuerySelectionKey("recent", query.id));
		openQueryTab(query.sql);
	}, [openQueryTab]);
	const selectSavedQuery = useCallback((level, query) => {
		setSelectedQueryKey(mysqlQuerySelectionKey(level, query.id));
		openQueryTab(query.sql);
	}, [openQueryTab]);
	const openTableInEditor = useCallback((tableId) => {
		navigate({
			...mysqlTableRows({
				projectId,
				databaseId,
				tableId: normalizeMysqlTableRouteId(tableId)
			}),
			replace: true
		});
	}, [
		databaseId,
		navigate,
		projectId
	]);
	const openTableInSqlEditor = useCallback((tableId) => {
		focusTableRouteTab(normalizeMysqlTableRouteId(tableId));
		navigate({
			...mysqlNav({
				projectId,
				databaseId
			}).sql(),
			replace: true
		});
		schedulePendingActiveTab();
	}, [
		databaseId,
		focusTableRouteTab,
		navigate,
		projectId,
		schedulePendingActiveTab
	]);
	const createTab = useCallback(() => {
		commitEditorTabState((prev) => createBlankEditorTabState(prev));
		setSelectedQueryKey(null);
		schedulePendingActiveTab();
	}, [commitEditorTabState, schedulePendingActiveTab]);
	const closeTab = useCallback((tabId) => {
		commitEditorTabState((prev) => closeEditorTabState(prev, tabId), { focusTab: false });
	}, [commitEditorTabState]);
	const closeOtherTabs = useCallback((tabId) => {
		commitEditorTabState((prev) => closeOtherEditorTabsState(prev, tabId), { focusTab: false });
	}, [commitEditorTabState]);
	const duplicateQueryTab = useCallback((sql) => {
		commitEditorTabState((prev) => duplicateQueryInEditorState(prev, sql));
		setSelectedQueryKey(null);
		navigate({ ...mysqlNav({
			projectId,
			databaseId
		}).sql() });
		schedulePendingActiveTab();
	}, [
		commitEditorTabState,
		databaseId,
		navigate,
		projectId,
		schedulePendingActiveTab
	]);
	const reorderTabs = useCallback((activeId, overId) => {
		setEditorTabState((prev) => {
			const oldIndex = prev.tabs.findIndex((tab) => tab.id === activeId);
			const newIndex = prev.tabs.findIndex((tab) => tab.id === overId);
			if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) return prev;
			const tabs$1 = [...prev.tabs];
			const [moved] = tabs$1.splice(oldIndex, 1);
			tabs$1.splice(newIndex, 0, moved);
			return {
				...prev,
				tabs: tabs$1
			};
		});
	}, []);
	const renameTab = useCallback((tabId, title) => {
		const trimmed = title.trim();
		if (!trimmed) return;
		setEditorTabState((prev) => {
			if (!prev.tabs.some((tab) => tab.id === tabId)) return prev;
			const nextTitle = trimmed.slice(0, 64);
			return {
				...prev,
				tabs: prev.tabs.map((tab) => tab.id === tabId ? {
					...tab,
					title: nextTitle
				} : tab)
			};
		});
	}, []);
	const value = useMemo(() => ({
		panel,
		setPanel,
		selectedSchema,
		setSelectedSchema,
		recentQueries,
		addRecentQuery,
		clearRecentQueries,
		selectedQueryKey,
		savedQueryLevel,
		setSavedQueryLevel,
		selectRecentQuery,
		selectSavedQuery,
		tabs,
		activeTabId,
		activeTab,
		openTableInEditor,
		openTableInSqlEditor,
		focusTableRouteTab,
		openQueryTab,
		createTab,
		closeTab,
		closeOtherTabs,
		duplicateQueryTab,
		reorderTabs,
		renameTab,
		setActiveTabId,
		updateActiveTabSql,
		setActiveTabResult
	}), [
		panel,
		setPanel,
		selectedSchema,
		setSelectedSchema,
		recentQueries,
		addRecentQuery,
		clearRecentQueries,
		selectedQueryKey,
		savedQueryLevel,
		setSavedQueryLevel,
		selectRecentQuery,
		selectSavedQuery,
		tabs,
		activeTabId,
		activeTab,
		openTableInEditor,
		openTableInSqlEditor,
		focusTableRouteTab,
		openQueryTab,
		createTab,
		closeTab,
		closeOtherTabs,
		duplicateQueryTab,
		reorderTabs,
		renameTab,
		updateActiveTabSql,
		setActiveTabResult
	]);
	return /* @__PURE__ */ jsx(MysqlSidebarContext.Provider, {
		value,
		children
	});
}
function useMysqlSidebar() {
	const context = useContext(MysqlSidebarContext);
	if (!context) throw new Error("useMysqlSidebar must be used within MysqlSidebarProvider");
	return context;
}
export { useMysqlSidebar as i, mysqlQuerySelectionKey as n, queryPreviewLabel as r, MysqlSidebarProvider as t };
