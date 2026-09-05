import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { At as deleteSiteDeployment, gn as useSiteDeployment, kt as cancelSiteDeployment, mn as useProjectSite } from "./affiliates-BOg1SHC6.js";
import { t as DeploymentDetailView } from "./DeploymentDetailView-BXeXyWnV.js";
import { jsx } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { DeploymentDownloadType } from "@appwrite.io/console";
import { toast } from "sonner";
function View() {
	const t = useT();
	const { projectId, siteId, deploymentId } = useParams({ strict: false });
	const { data: deployment, isLoading } = useSiteDeployment(projectId, siteId, deploymentId);
	const { data: site } = useProjectSite(projectId, siteId);
	const handleDelete = async (deploymentId$1) => {
		if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
		await deleteSiteDeployment(projectId, siteId, deploymentId$1);
	};
	const handleCancelBuild = async (deploymentId$1) => {
		if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
		await cancelSiteDeployment(projectId, siteId, deploymentId$1);
	};
	const handleDownloadSource = (projectId$1, resourceId, deploymentId$1) => {
		try {
			const url = sdk.forProject(projectId$1).sites.getDeploymentDownload({
				siteId: resourceId,
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
			const url = sdk.forProject(projectId$1).sites.getDeploymentDownload({
				siteId: resourceId,
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
		if (!projectId$1 || !resourceId || !deploymentId$1) throw new Error("Project ID, Site ID, and Deployment ID are required");
		await sdk.forProject(projectId$1).sites.createDuplicateDeployment({
			siteId: resourceId,
			deploymentId: deploymentId$1
		});
	};
	const handleActivate = async (projectId$1, resourceId, deploymentId$1) => {
		if (!projectId$1 || !resourceId || !deploymentId$1) throw new Error("Project ID, Site ID, and Deployment ID are required");
		await sdk.forProject(projectId$1).sites.updateSiteDeployment({
			siteId: resourceId,
			deploymentId: deploymentId$1
		});
	};
	return /* @__PURE__ */ jsx(DeploymentDetailView, {
		projectId,
		resourceId: siteId,
		deploymentId,
		deployment,
		isLoading,
		parentResource: {
			name: site?.name,
			deploymentId: site?.deploymentId,
			framework: site?.framework
		},
		deployments: [],
		deploymentDetailRoute: "/projects/$projectId/sites/$siteId/deployments/$deploymentId",
		listRoute: "/projects/$projectId/sites/$siteId/",
		onDelete: handleDelete,
		onCancelBuild: handleCancelBuild,
		onDownloadSource: handleDownloadSource,
		onDownloadBuild: handleDownloadBuild,
		onRedeploy: handleRedeploy,
		onActivate: handleActivate,
		invalidateQueries: [
			[...Dependencies.DEPLOYMENTS],
			[...Dependencies.SITE],
			[
				"deployment",
				"site",
				projectId,
				siteId,
				deploymentId
			]
		],
		fallbackPath: `/projects/${projectId}/sites/${siteId}`
	});
}
export { View as t };
