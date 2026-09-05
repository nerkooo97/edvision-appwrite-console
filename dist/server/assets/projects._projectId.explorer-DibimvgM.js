import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { c as getProjectApiEndpoint } from "./sdk-DjIJ_hjn.js";
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
import { R as useProject } from "./projects-BaTJenfQ.js";
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
import "./collapsible-BcDIDOgI.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import "./prose-typography-BMJgwhz7.js";
import "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./alert-BTaNwkUC.js";
import "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./display-DbRQIyxk.js";
import "./calendar-6OJ5dwYN.js";
import "./toggle-group-qQyCSBun.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./horizontal-resize-BcegzCwH.js";
import "./resizable-CfBrThFG.js";
import "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./nav-styles-B9rWOQql.js";
import "./mock-data-bi-y2wwb.js";
import "./SearchableSelect-DPl0hr1b.js";
import "./avatar-DsYcfNc5.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import "./scroll-area-CakPDLgR.js";
import "./PermissionsEditor-DzrUP0TS.js";
import { t as ApiExplorer } from "./api-explorer-B4YxdhBU.js";
import "./ApiExplorerResizableLayout-D2_hOOoH.js";
import "./MethodDescriptionMarkdown-HfQh_Tws.js";
import "./EventResourceIdSelector-DoLZYJw-.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useCallback } from "react";
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const search = useSearch({ strict: false });
	const navigate = useNavigate();
	useProject(projectId);
	const handleSelectionChange = useCallback(({ serviceId, operationId }) => {
		if (search.service === serviceId && search.operation === operationId) return;
		if (!projectId) return;
		navigate({
			to: "/projects/$projectId/explorer",
			params: { projectId },
			search: (prev) => ({
				...prev,
				service: serviceId,
				operation: operationId
			}),
			replace: true
		});
	}, [
		navigate,
		projectId,
		search.operation,
		search.service
	]);
	if (!projectId) return null;
	const endpoint = getProjectApiEndpoint(projectId);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Explorer"),
			fullWidthBorder: true,
			fullWidth: true
		}), /* @__PURE__ */ jsx(ApiExplorer, {
			config: {
				endpoint,
				projectId,
				platform: "server"
			},
			initialServiceId: search.service,
			initialOperationId: search.operation,
			onSelectionChange: handleSelectionChange,
			className: "min-h-0 flex-1"
		})]
	});
}
function ExplorerPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { ExplorerPage as component };
