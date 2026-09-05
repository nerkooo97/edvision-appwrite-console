import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
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
import "./SettingsSearchContext-DPkuZW4D.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as DatabaseSettingsLoading, t as useDatabaseSettingsPage } from "./useDatabaseSettingsPage-nyiksSB_.js";
import { jsx, jsxs } from "react/jsx-runtime";
var PERMISSIONS_COPY = {
	tablesdb: "Permissions are configured at the table or row level. You can select the permission model for each table in its settings. When Row Level Security (RLS) is enabled, you can also modify permissions per row when updating individual rows.",
	documentsdb: "Permissions are configured at the collection or document level. You can select the permission model for each collection in its settings. When document level security is enabled, you can also modify permissions per document when updating individual documents.",
	vectorsdb: "Permissions are configured at the table or row level. You can select the permission model for each table in its settings. When Row Level Security (RLS) is enabled, you can also modify permissions per row when updating individual rows."
};
function DatabasePermissionsCard({ dbKind }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Permissions")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t(PERMISSIONS_COPY[dbKind])
				})
			})
		]
	});
}
function View() {
	const { dbKind, database, isLoading } = useDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(DatabaseSettingsLoading, {});
	if (!database) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [{
		id: "permissions",
		search: {
			title: "Permissions",
			keywords: [
				"permissions",
				"rls",
				"row level",
				"access",
				"security"
			]
		},
		node: /* @__PURE__ */ jsx(DatabasePermissionsCard, { dbKind })
	}] });
}
var SplitComponent = View;
export { SplitComponent as component };
