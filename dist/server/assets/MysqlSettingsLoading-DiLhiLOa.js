import { n as useT } from "./translate-DZcqveGn.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { Pp as useMysqlDatabase } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { c as canCreateDatabase } from "./console-access-checks-BTMEOKcL.js";
import { n as useDatabaseAdminOperationsAccess } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
function useMysqlDatabaseSettingsPage() {
	const { projectId, databaseId } = useParams({ strict: false });
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { access } = useOrganizationScopes(project?.teamId);
	const { database, isLoading } = useMysqlDatabase(projectId, databaseId);
	const { canWrite } = useDatabaseAdminOperationsAccess();
	return {
		projectId,
		databaseId,
		database,
		canWrite,
		isLoading,
		permissionCanWrite: canCreateDatabase(access, features)
	};
}
function MysqlSettingsLoading() {
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: useT()("Loading settings...")
		})
	});
}
export { useMysqlDatabaseSettingsPage as n, MysqlSettingsLoading as t };
