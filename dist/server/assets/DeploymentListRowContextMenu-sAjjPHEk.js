import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { At as deleteSiteDeployment, Bn as fetchFunctionDeployment, Lt as fetchSiteDeployment, Rn as deleteFunctionDeployment } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as isDeploymentInProgress, r as isDeploymentCompleted } from "./deployment-status-gtgbrodz.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { DeploymentDownloadType } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Copy, Download, ExternalLink, FileCode, FileJson, LayoutList, Link2, Package, Play, RefreshCw, Square, Trash2, XCircle } from "lucide-react";
function DeploymentListRowContextMenu({ variant, projectId, resourceId, deployment, isActive, children, onRequestCancelBuild }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deletePending, setDeletePending] = useState(false);
	const deploymentHref = buildConsoleUrl(variant === "function" ? `/projects/${projectId}/functions/${resourceId}/deployments/${deployment.$id}` : `/projects/${projectId}/sites/${resourceId}/deployments/${deployment.$id}`);
	const navigateToDeploymentOverview = () => {
		if (variant === "function") navigate({
			to: "/projects/$projectId/functions/$functionId/deployments/$deploymentId",
			params: {
				projectId,
				functionId: resourceId,
				deploymentId: deployment.$id
			}
		});
		else navigate({
			to: "/projects/$projectId/sites/$siteId/deployments/$deploymentId",
			params: {
				projectId,
				siteId: resourceId,
				deploymentId: deployment.$id
			}
		});
	};
	const inProgress = isDeploymentInProgress(deployment.status);
	const canDownloadBuild = isDeploymentCompleted(deployment.status);
	const canActivate = !isActive && deployment.status === "ready";
	const canDeleteFromMenu = !isActive && !inProgress;
	const invalidateAfterFunctionMutation = async () => {
		await queryClient.refetchQueries({ queryKey: [
			"deployments",
			"project",
			projectId,
			resourceId
		] });
		await queryClient.refetchQueries({ queryKey: [
			"function",
			"project",
			projectId,
			resourceId
		] });
	};
	const invalidateAfterSiteMutation = () => {
		queryClient.invalidateQueries({ queryKey: [...Dependencies.DEPLOYMENTS] });
		queryClient.invalidateQueries({ queryKey: [
			"site",
			"project",
			projectId,
			resourceId
		] });
	};
	const handleDownloadSource = () => {
		try {
			const projectSdk = sdk.forProject(projectId);
			const url = variant === "function" ? projectSdk.functions.getDeploymentDownload({
				functionId: resourceId,
				deploymentId: deployment.$id,
				type: DeploymentDownloadType.Source
			}) : projectSdk.sites.getDeploymentDownload({
				siteId: resourceId,
				deploymentId: deployment.$id,
				type: DeploymentDownloadType.Source
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download source code"));
		}
	};
	const handleDownloadBuild = () => {
		if (!canDownloadBuild) return;
		try {
			const projectSdk = sdk.forProject(projectId);
			const url = variant === "function" ? projectSdk.functions.getDeploymentDownload({
				functionId: resourceId,
				deploymentId: deployment.$id,
				type: DeploymentDownloadType.Output
			}) : projectSdk.sites.getDeploymentDownload({
				siteId: resourceId,
				deploymentId: deployment.$id,
				type: DeploymentDownloadType.Output
			});
			const urlWithMode = url + (url.includes("?") ? "&" : "?") + "mode=admin";
			window.open(urlWithMode, "_blank");
			toast.success(t("Download started"));
		} catch {
			toast.error(t("Failed to download build output"));
		}
	};
	const handleConfirmDelete = async () => {
		const deploymentId = deployment.$id;
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
		});
		setDeletePending(true);
		try {
			if (variant === "function") {
				await deleteFunctionDeployment(projectId, resourceId, deploymentId);
				await invalidateAfterFunctionMutation();
			} else {
				await deleteSiteDeployment(projectId, resourceId, deploymentId);
				invalidateAfterSiteMutation();
			}
			toast.success(t("Deployment deleted successfully"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to delete deployment"));
		} finally {
			setDeletePending(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: navigateToDeploymentOverview,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: LayoutList }), t("Overview")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Download }), t("Download")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: handleDownloadSource,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileCode }), t("Source code")]
			}), /* @__PURE__ */ jsxs(ContextMenuItem, {
				disabled: !canDownloadBuild,
				title: !canDownloadBuild ? t("Build output is available after the deployment has completed.") : void 0,
				onSelect: handleDownloadBuild,
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Package }), t("Build output")]
			})] })] }),
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", deployment.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", deploymentHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => variant === "function" ? fetchFunctionDeployment(projectId, resourceId, deployment.$id) : fetchSiteDeployment(projectId, resourceId, deployment.$id)),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(deploymentHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(deploymentHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			canActivate && /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: async () => {
					try {
						const projectSdk = sdk.forProject(projectId);
						if (variant === "function") {
							await projectSdk.functions.updateFunctionDeployment({
								functionId: resourceId,
								deploymentId: deployment.$id
							});
							queryClient.invalidateQueries({ queryKey: [
								"deployments",
								"project",
								projectId,
								resourceId
							] });
							queryClient.invalidateQueries({ queryKey: [
								"function",
								"project",
								projectId,
								resourceId
							] });
						} else {
							await projectSdk.sites.updateSiteDeployment({
								siteId: resourceId,
								deploymentId: deployment.$id
							});
							invalidateAfterSiteMutation();
						}
						toast.success(t("Deployment activated successfully"));
					} catch {
						toast.error(t("Failed to activate deployment"));
					}
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Play }), t("Activate")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: async () => {
					try {
						const projectSdk = sdk.forProject(projectId);
						if (variant === "function") {
							await projectSdk.functions.createDuplicateDeployment({
								functionId: resourceId,
								deploymentId: deployment.$id
							});
							queryClient.invalidateQueries({ queryKey: [
								"deployments",
								"project",
								projectId,
								resourceId
							] });
						} else {
							await projectSdk.sites.createDuplicateDeployment({
								siteId: resourceId,
								deploymentId: deployment.$id
							});
							invalidateAfterSiteMutation();
						}
						toast.success(t("Deployment rebuild started"));
					} catch {
						toast.error(t("Failed to redeploy"));
					}
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: RefreshCw }), t("Redeploy")]
			}),
			inProgress && /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => {
					const id = deployment.$id;
					openDialogAfterOverlayCloses(() => onRequestCancelBuild(id));
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: XCircle }), t("Cancel")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				disabled: !canDeleteFromMenu,
				title: !canDeleteFromMenu ? isActive ? t("The active deployment cannot be deleted from the list") : inProgress ? t("Wait for the build to finish or cancel it first") : void 0 : void 0,
				onSelect: () => {
					if (!canDeleteFromMenu) return;
					openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
				},
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			})
		]
	})] }), /* @__PURE__ */ jsx(Dialog, {
		open: deleteDialogOpen,
		onOpenChange: setDeleteDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete deployment") }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: t("Are you sure you want to delete this deployment? This action cannot be undone.")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => setDeleteDialogOpen(false),
					disabled: deletePending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					onClick: handleConfirmDelete,
					disabled: deletePending,
					children: t("Delete")
				})]
			})]
		})
	})] });
}
export { DeploymentListRowContextMenu as t };
