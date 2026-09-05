import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { At as useProjectTables, wt as useProjectDatabase } from "./databases-Dh0pwZ6h.js";
import { a as isDatabaseRouteKind } from "./database-routes-DB_xKWuY.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { c as canCreateDatabase } from "./console-access-checks-BTMEOKcL.js";
import { n as useDatabaseAdminOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
function DatabaseSettingsLoading() {
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: useT()("Loading settings...")
		})
	});
}
function useDatabaseSettingsPage() {
	const params = useParams({ strict: false });
	const projectId = params.projectId;
	const databaseId = params.databaseId;
	const dbKind = isDatabaseRouteKind(params.dbKind ?? "") ? params.dbKind : "tablesdb";
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { access } = useOrganizationScopes(project?.teamId);
	const { database, isLoading } = useProjectDatabase(projectId, databaseId, dbKind);
	const { total: containersTotal } = useProjectTables(projectId, databaseId, dbKind, 0, 1, void 0, "asc", "$createdAt");
	const { canWrite } = useDatabaseAdminOperationsAccess();
	return {
		projectId,
		databaseId,
		dbKind,
		database,
		containersTotal: containersTotal ?? 0,
		teamId: project?.teamId,
		canWrite,
		isLoading,
		permissionCanWrite: canCreateDatabase(access, features)
	};
}
export { DatabaseSettingsLoading as n, useDatabaseSettingsPage as t };
