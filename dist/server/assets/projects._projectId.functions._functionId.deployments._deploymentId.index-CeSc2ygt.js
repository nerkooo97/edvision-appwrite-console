import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import { Ln as cancelFunctionDeployment, Rn as deleteFunctionDeployment, gr as useFunctionDeployment, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
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
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./mcp-CgjPVMsn.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./dropdown-menu-DH51wH-m.js";
import "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./McpIcon-D1Jv-oq2.js";
import "./calendar-6OJ5dwYN.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import "./ProjectConnectDialogContext-DgcmISfV.js";
import "./Icon-BtIL187e.js";
import "./FrameworkIcon-DTkSe6r3.js";
import "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import "./analytics-C_KnVoso.js";
import "./avif-support-fkUYDvxs.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import "./BuildLogsView-ByzI55tv.js";
import "./deployment-status-gtgbrodz.js";
import "./drawer-By6QdQ1h.js";
import "./FixWithAgentDropdown-Bbwqh7Cs.js";
import { t as DeploymentDetailView } from "./DeploymentDetailView-BXeXyWnV.js";
import "./DeploymentInfo-CB1fVDuW.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { DeploymentDownloadType } from "@appwrite.io/console";
import { toast } from "sonner";
function View() {
	const t = useT();
	const { projectId, functionId, deploymentId } = useParams({ strict: false });
	const { data: deployment, isLoading } = useFunctionDeployment(projectId, functionId, deploymentId);
	const { data: func } = useProjectFunction(projectId, functionId);
	const handleDelete = async (deploymentId$1) => {
		if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
		await deleteFunctionDeployment(projectId, functionId, deploymentId$1);
	};
	const handleCancelBuild = async (deploymentId$1) => {
		if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
		await cancelFunctionDeployment(projectId, functionId, deploymentId$1);
	};
	const handleDownloadSource = (projectId$1, resourceId, deploymentId$1) => {
		try {
			const url = sdk.forProject(projectId$1).functions.getDeploymentDownload({
				functionId: resourceId,
				deploymentId: deploymentId$1,
				type: DeploymentDownloadType.Source
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download source code"));
		}
	};
	const handleDownloadBuild = (projectId$1, resourceId, deploymentId$1) => {
		try {
			const url = sdk.forProject(projectId$1).functions.getDeploymentDownload({
				functionId: resourceId,
				deploymentId: deploymentId$1,
				type: DeploymentDownloadType.Output
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download build output"));
		}
	};
	const handleRedeploy = async (projectId$1, resourceId, deploymentId$1) => {
		if (!projectId$1 || !resourceId || !deploymentId$1) throw new Error("Project ID, Function ID, and Deployment ID are required");
		await sdk.forProject(projectId$1).functions.createDuplicateDeployment({
			functionId: resourceId,
			deploymentId: deploymentId$1
		});
	};
	const handleActivate = async (projectId$1, resourceId, deploymentId$1) => {
		if (!projectId$1 || !resourceId || !deploymentId$1) throw new Error("Project ID, Function ID, and Deployment ID are required");
		await sdk.forProject(projectId$1).functions.updateFunctionDeployment({
			functionId: resourceId,
			deploymentId: deploymentId$1
		});
	};
	return /* @__PURE__ */ jsx(DeploymentDetailView, {
		projectId,
		resourceId: functionId,
		deploymentId,
		deployment,
		isLoading,
		parentResource: {
			name: func?.name,
			deploymentId: func?.deploymentId,
			runtime: func?.runtime
		},
		deployments: [],
		deploymentDetailRoute: "/projects/$projectId/functions/$functionId/deployments/$deploymentId",
		listRoute: "/projects/$projectId/functions/$functionId",
		onDelete: handleDelete,
		onCancelBuild: handleCancelBuild,
		onDownloadSource: handleDownloadSource,
		onDownloadBuild: handleDownloadBuild,
		onRedeploy: handleRedeploy,
		onActivate: handleActivate,
		showRuntime: true,
		RuntimeIcon,
		invalidateQueries: [
			[
				"deployments",
				"project",
				projectId,
				functionId
			],
			[
				"function",
				"project",
				projectId,
				functionId
			],
			[
				"deployment",
				"function",
				projectId,
				functionId,
				deploymentId
			]
		],
		fallbackPath: `/projects/${projectId}/functions/${functionId}`
	});
}
function DeploymentDetailPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { DeploymentDetailPage as component };
