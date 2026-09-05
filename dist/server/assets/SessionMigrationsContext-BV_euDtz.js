import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
var IN_PROGRESS_EXPORT_STATUSES = ["pending", "processing"];
var IN_PROGRESS_IMPORT_STATUSES = [
	"pending",
	"uploading",
	"processing"
];
var SessionMigrationsContext = createContext(null);
function SessionMigrationsProvider({ children }) {
	const [exportIdsByProject, setExportIdsByProject] = useState({});
	const [importIdsByProject, setImportIdsByProject] = useState({});
	const [dismissedExportByProject, setDismissedExportByProject] = useState({});
	const [dismissedImportByProject, setDismissedImportByProject] = useState({});
	const dismissedExportRef = useRef({});
	const dismissedImportRef = useRef({});
	dismissedExportRef.current = dismissedExportByProject;
	dismissedImportRef.current = dismissedImportByProject;
	const addExportId = useCallback((projectId, migrationId) => {
		setExportIdsByProject((prev) => {
			const list = prev[projectId] ?? [];
			if (list.includes(migrationId)) return prev;
			return {
				...prev,
				[projectId]: [...list, migrationId]
			};
		});
	}, []);
	const addImportId = useCallback((projectId, migrationId) => {
		setImportIdsByProject((prev) => {
			const list = prev[projectId] ?? [];
			if (list.includes(migrationId)) return prev;
			return {
				...prev,
				[projectId]: [...list, migrationId]
			};
		});
	}, []);
	const dismissExport = useCallback((projectId, migrationId) => {
		setDismissedExportByProject((prev) => {
			const list = prev[projectId] ?? [];
			if (list.includes(migrationId)) return prev;
			return {
				...prev,
				[projectId]: [...list, migrationId]
			};
		});
	}, []);
	const dismissImport = useCallback((projectId, migrationId) => {
		setDismissedImportByProject((prev) => {
			const list = prev[projectId] ?? [];
			if (list.includes(migrationId)) return prev;
			return {
				...prev,
				[projectId]: [...list, migrationId]
			};
		});
	}, []);
	const getExportIds = useCallback((projectId) => exportIdsByProject[projectId] ?? [], [exportIdsByProject]);
	const getImportIds = useCallback((projectId) => importIdsByProject[projectId] ?? [], [importIdsByProject]);
	const getDismissedExportIds = useCallback((projectId) => dismissedExportByProject[projectId] ?? [], [dismissedExportByProject]);
	const getDismissedImportIds = useCallback((projectId) => dismissedImportByProject[projectId] ?? [], [dismissedImportByProject]);
	const addMigrationFromRealtime = useCallback((projectId, payload) => {
		const m = payload;
		if (!m?.$id || typeof m.status !== "string") return;
		const dismissedExport = dismissedExportRef.current[projectId] ?? [];
		const dismissedImport = dismissedImportRef.current[projectId] ?? [];
		if (m.destination === "CSV" && IN_PROGRESS_EXPORT_STATUSES.includes(m.status)) {
			if (!dismissedExport.includes(m.$id)) setExportIdsByProject((prev) => {
				const list = prev[projectId] ?? [];
				if (list.includes(m.$id)) return prev;
				return {
					...prev,
					[projectId]: [...list, m.$id]
				};
			});
		}
		if (m.source === "CSV" && IN_PROGRESS_IMPORT_STATUSES.includes(m.status)) {
			if (!dismissedImport.includes(m.$id)) setImportIdsByProject((prev) => {
				const list = prev[projectId] ?? [];
				if (list.includes(m.$id)) return prev;
				return {
					...prev,
					[projectId]: [...list, m.$id]
				};
			});
		}
	}, []);
	const value = useMemo(() => ({
		exportIdsByProject,
		importIdsByProject,
		addExportId: (p, id) => addExportId(p, id),
		addImportId: (p, id) => addImportId(p, id),
		dismissExport,
		dismissImport,
		getExportIds,
		getImportIds,
		getDismissedExportIds,
		getDismissedImportIds,
		addMigrationFromRealtime
	}), [
		exportIdsByProject,
		importIdsByProject,
		addExportId,
		addImportId,
		dismissExport,
		dismissImport,
		getExportIds,
		getImportIds,
		getDismissedExportIds,
		getDismissedImportIds,
		addMigrationFromRealtime
	]);
	return /* @__PURE__ */ jsx(SessionMigrationsContext.Provider, {
		value,
		children
	});
}
function useSessionMigrations(projectId) {
	const ctx = useContext(SessionMigrationsContext);
	if (!ctx) return {
		sessionExportIds: [],
		sessionImportIds: [],
		dismissedExportIds: [],
		dismissedImportIds: [],
		addExportId: () => {},
		addImportId: () => {},
		dismissExport: () => {},
		dismissImport: () => {},
		addMigrationFromRealtime: () => {}
	};
	return {
		sessionExportIds: projectId ? ctx.getExportIds(projectId) : [],
		sessionImportIds: projectId ? ctx.getImportIds(projectId) : [],
		dismissedExportIds: projectId ? ctx.getDismissedExportIds(projectId) : [],
		dismissedImportIds: projectId ? ctx.getDismissedImportIds(projectId) : [],
		addExportId: ctx.addExportId,
		addImportId: ctx.addImportId,
		dismissExport: ctx.dismissExport,
		dismissImport: ctx.dismissImport,
		addMigrationFromRealtime: ctx.addMigrationFromRealtime
	};
}
export { useSessionMigrations as n, SessionMigrationsProvider as t };
