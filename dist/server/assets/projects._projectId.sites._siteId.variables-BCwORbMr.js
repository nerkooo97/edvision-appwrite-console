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
import { V as useProjectVariables } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Tn as useUpdateSiteVariable, cn as useCreateSiteVariable, fn as useDeleteSiteVariable, wn as useSiteVariables } from "./affiliates-BOg1SHC6.js";
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
import "./tabs-XaWkg9jR.js";
import "./context-menu-D55xedo-.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./overlay-lock-CIY7GeXu.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import "./checkbox-r_hqIB3d.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
function SiteVariablesCard({ projectId, siteId }) {
	const t = useT();
	const { variables: siteVariables, total, isLoading } = useSiteVariables(projectId, siteId);
	const { variables: projectVariablesList } = useProjectVariables(projectId);
	const createMutation = useCreateSiteVariable(projectId, siteId);
	const updateMutation = useUpdateSiteVariable(projectId, siteId);
	const deleteMutation = useDeleteSiteVariable(projectId, siteId);
	const globalVariableKeys = new Set(projectVariablesList.map((v) => v.key));
	return /* @__PURE__ */ jsx(VariablesSettingsCard, {
		title: t("Environment variables"),
		description: t("Configure environment variables for your site deployments. Site-specific variables override global project variables. Set the environment variables or secret keys that will be passed to this site during deployment."),
		variables: siteVariables,
		total,
		isLoading,
		createMutation,
		updateMutation,
		deleteMutation,
		scopeLabel: t("Site"),
		isVariableEditable: (v) => !globalVariableKeys.has(v.key),
		getVariableBadge: (v) => globalVariableKeys.has(v.key) ? t("Global") : void 0,
		projectVariableKeysForWarning: globalVariableKeys,
		projectVariablesProjectId: projectId
	});
}
function View() {
	const params = useParams({ strict: false });
	const projectId = params.projectId;
	const siteId = params.siteId;
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6",
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-6",
			children: /* @__PURE__ */ jsx(SiteVariablesCard, {
				projectId,
				siteId
			})
		})
	});
}
function SiteVariablesPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { SiteVariablesPage as component };
