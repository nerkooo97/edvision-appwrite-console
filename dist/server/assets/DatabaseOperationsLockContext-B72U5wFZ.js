import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { Gt as getDedicatedDatabaseOperationsLockTooltipKey, Tt as useProjectDedicatedDatabases, Wt as getDedicatedDatabaseOperationsLock } from "./databases-Dh0pwZ6h.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { H as canShowTableSecuritySettings, c as canCreateDatabase, m as canCreateRow } from "./console-access-checks-BTMEOKcL.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { createContext, useContext, useMemo } from "react";
var DatabaseOperationsLockContext = createContext(null);
var unlockedValue = {
	operationsLock: {
		locked: false,
		reason: null
	},
	isOperationsLocked: false,
	operationsLockTooltip: void 0,
	isWriteLocked: false,
	writeLockTooltip: void 0,
	writeLock: {
		locked: false,
		reason: null
	}
};
function DatabaseOperationsLockProvider({ projectId: projectIdProp, databaseId: databaseIdProp, status: statusProp, children }) {
	const t = useT();
	const params = useParams({ strict: false });
	const projectId = projectIdProp ?? params.projectId ?? null;
	const databaseId = databaseIdProp ?? params.databaseId ?? null;
	const { databases: dedicatedDatabases } = useProjectDedicatedDatabases(statusProp == null ? projectId : null);
	const resolvedStatus = useMemo(() => {
		if (statusProp != null) return statusProp;
		if (!databaseId) return void 0;
		return dedicatedDatabases.find((db) => db.$id === databaseId)?.status;
	}, [
		databaseId,
		dedicatedDatabases,
		statusProp
	]);
	const value = useMemo(() => {
		const operationsLock = getDedicatedDatabaseOperationsLock(resolvedStatus);
		const operationsLockTooltip = operationsLock.reason ? t(getDedicatedDatabaseOperationsLockTooltipKey(operationsLock.reason)) : void 0;
		return {
			operationsLock,
			isOperationsLocked: operationsLock.locked,
			operationsLockTooltip,
			writeLock: operationsLock,
			isWriteLocked: operationsLock.locked,
			writeLockTooltip: operationsLockTooltip
		};
	}, [resolvedStatus, t]);
	return /* @__PURE__ */ jsx(DatabaseOperationsLockContext.Provider, {
		value,
		children
	});
}
function useDatabaseOperationsLock() {
	const context = useContext(DatabaseOperationsLockContext);
	if (!context) return unlockedValue;
	return context;
}
function useDatabaseOperationsAccess({ permissionCanWrite, permissionDeniedTooltip, isPending = false }) {
	const { isOperationsLocked, operationsLockTooltip } = useDatabaseOperationsLock();
	const canWrite = permissionCanWrite && !isOperationsLocked;
	return {
		canWrite,
		writeDisabled: !canWrite || isPending,
		writeTooltip: !permissionCanWrite ? permissionDeniedTooltip : isOperationsLocked ? operationsLockTooltip : void 0,
		isOperationsLocked,
		isWriteLocked: isOperationsLocked
	};
}
function useDatabaseTableOperationsAccess(options) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	return useDatabaseOperationsAccess({
		permissionCanWrite: canShowTableSecuritySettings(access, features),
		permissionDeniedTooltip: options?.permissionDeniedTooltip ?? t("You don't have permission to modify table structure."),
		isPending: options?.isPending
	});
}
function useDatabaseAdminOperationsAccess(options) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	return useDatabaseOperationsAccess({
		permissionCanWrite: canCreateDatabase(access, features),
		permissionDeniedTooltip: options?.permissionDeniedTooltip ?? t("You don't have permission to change database settings."),
		isPending: options?.isPending
	});
}
function useDatabaseRowOperationsAccess(options) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	return useDatabaseOperationsAccess({
		permissionCanWrite: canCreateRow(access, features),
		permissionDeniedTooltip: options?.permissionDeniedTooltip ?? t("You don't have permission to perform this action."),
		isPending: options?.isPending
	});
}
export { useDatabaseTableOperationsAccess as a, useDatabaseRowOperationsAccess as i, useDatabaseAdminOperationsAccess as n, useDatabaseOperationsLock as r, DatabaseOperationsLockProvider as t };
