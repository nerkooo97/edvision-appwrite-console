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
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
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
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./table-CsPM4E9L.js";
import "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./skeleton-8d0Q_D56.js";
import "./alert-BTaNwkUC.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./utils-DMkzhjmw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./progress-DDUqzOsb.js";
import "./useViewportPanZoom-COUwlx3T.js";
import "./SchemaVisualizerRelationshipEdges-DLVYWLVz.js";
import "./RefreshButton-BA9lQ7jC.js";
import "./DatabaseClusterPreview-Cx1tFSPT.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as useMysqlDatabaseSettingsPage, t as MysqlSettingsLoading } from "./MysqlSettingsLoading-DiLhiLOa.js";
import { n as MysqlDatabasePitrCard } from "./MysqlDatabaseConfigSettings-se_DcGf0.js";
import { jsx } from "react/jsx-runtime";
function View() {
	const { projectId, databaseId, database, canWrite, isLoading } = useMysqlDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(MysqlSettingsLoading, {});
	if (!database) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [{
		id: "pitr",
		search: {
			title: "Point-in-time recovery (PITR)",
			keywords: [
				"pitr",
				"retention",
				"restore",
				"recovery",
				"point in time"
			]
		},
		node: /* @__PURE__ */ jsx(MysqlDatabasePitrCard, {
			projectId,
			databaseId,
			database,
			canWrite
		})
	}] });
}
var SplitComponent = View;
export { SplitComponent as component };
