import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { Tt as useProjectDedicatedDatabases, wt as useProjectDatabase } from "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import { a as isDatabaseRouteKind, c as isProductDatabaseRouteKindEnabled } from "./database-routes-DB_xKWuY.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./button-Bnm2QhOm.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as Route } from "./projects._projectId.databases._dbKind._databaseId-BVYhL05n.js";
import "./resource-status-labels-C-bLMJxj.js";
import { t as DatabaseOperationsLockProvider } from "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as DatabaseTypeUnavailable, r as DedicatedDatabaseStatusHeaderAlert, t as useRedirectIfDedicatedDatabaseProvisioning } from "./useRedirectIfDedicatedDatabaseProvisioning-DNx805WR.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Outlet } from "@tanstack/react-router";
function DatabaseKindLayout() {
	const { projectId, dbKind, databaseId } = Route.useParams();
	const features = getActiveProfileFeatures();
	const { database } = useProjectDatabase(projectId, databaseId, isDatabaseRouteKind(dbKind) ? dbKind : "tablesdb");
	const { databases: dedicatedDatabases } = useProjectDedicatedDatabases(projectId);
	const dedicatedStatus = dedicatedDatabases.find((db) => db.$id === databaseId)?.status;
	const status = database?.status ?? dedicatedStatus ?? null;
	useRedirectIfDedicatedDatabaseProvisioning(status, "/projects/$projectId/databases/$dbKind/$databaseId/", {
		projectId,
		dbKind,
		databaseId
	});
	if (isDatabaseRouteKind(dbKind) && !isProductDatabaseRouteKindEnabled(dbKind, features)) return /* @__PURE__ */ jsx(DatabaseTypeUnavailable, { projectId });
	return /* @__PURE__ */ jsx(DatabaseOperationsLockProvider, {
		projectId,
		databaseId,
		status,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-full min-h-0 flex-1 flex-col overflow-hidden",
			children: [/* @__PURE__ */ jsx(DedicatedDatabaseStatusHeaderAlert, { status }), /* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ jsx(Outlet, {})
			})]
		})
	});
}
export { DatabaseKindLayout as component };
