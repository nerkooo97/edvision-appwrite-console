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
import { Ln as cancelFunctionDeployment, gr as useFunctionDeployment, wr as useProjectFunction, yr as useFunctionDomains } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./tooltip-DUssQZhw.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as Route$1 } from "./projects._projectId.functions.create.deploying-DLO-n5mp.js";
import "./BuildLogsView-ByzI55tv.js";
import { n as getDeploymentStatusBadge } from "./deployment-status-gtgbrodz.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { t as BuildLogsCard } from "./BuildLogsCard-BN250kf6.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, GitBranch, Play } from "lucide-react";
function formatDuration(seconds) {
	if (seconds < 60) return `${seconds}s`;
	return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
function DeployingView({ functionId, deploymentId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { formData, resetFormData } = useFunctionWizard();
	const actualFunctionId = functionId || formData.createdFunctionId;
	const actualDeploymentId = deploymentId || formData.createdDeploymentId;
	const { data: func } = useProjectFunction(projectId, actualFunctionId);
	const { data: deployment } = useFunctionDeployment(projectId, actualFunctionId, actualDeploymentId);
	const { data: domainsData } = useFunctionDomains(projectId, actualFunctionId, 0, 10);
	const domains = domainsData?.rules ?? [];
	const [status, setStatus] = useState("building");
	const [cancelBuildDialogOpen, setCancelBuildDialogOpen] = useState(false);
	const buildLogs = deployment?.buildLogs ?? "";
	useEffect(() => {
		if (deployment) setStatus(deployment.status);
	}, [deployment]);
	const isBuilding = status === "building" || status === "processing" || status === "waiting";
	const cancelDeploymentMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !actualFunctionId || !actualDeploymentId) throw new Error("Project, function, and deployment IDs are required");
			return await cancelFunctionDeployment(projectId, actualFunctionId, actualDeploymentId);
		},
		onSuccess: () => {
			setCancelBuildDialogOpen(false);
			resetFormData();
			toast.success(t("Deployment cancelled"));
			navigate({
				to: "/projects/$projectId/functions",
				params: { projectId }
			});
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to cancel deployment"));
		}
	});
	const handleCancelDeployment = () => setCancelBuildDialogOpen(true);
	const handleGoToFunction = () => {
		if (status === "ready" || status === "failed") resetFormData();
		if (actualFunctionId) navigate({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId: actualFunctionId
			}
		});
		else navigate({
			to: "/projects/$projectId/functions",
			params: { projectId }
		});
	};
	const statusBadge = deployment ? getDeploymentStatusBadge(deployment.status, deployment.$createdAt) : null;
	const [elapsedSeconds, setElapsedSeconds] = useState(0);
	useEffect(() => {
		if (!deployment?.$createdAt) return;
		const tick = () => {
			const created = new Date(deployment.$createdAt).getTime();
			setElapsedSeconds(Math.floor((Date.now() - created) / 1e3));
		};
		tick();
		const interval = setInterval(tick, 1e3);
		return () => clearInterval(interval);
	}, [deployment?.$createdAt]);
	const buildDurationDisplay = useMemo(() => {
		if (!deployment?.$createdAt) return null;
		if ((deployment.status === "ready" || deployment.status === "failed") && deployment.buildDuration != null && deployment.buildDuration >= 0) return formatDuration(deployment.buildDuration);
		const elapsed = deployment.status === "building" || deployment.status === "processing" || deployment.status === "waiting" ? elapsedSeconds : Math.floor((Date.now() - new Date(deployment.$createdAt).getTime()) / 1e3);
		return formatDuration(Math.max(0, elapsed));
	}, [deployment, elapsedSeconds]);
	const primaryDomain = domains?.[0]?.domain;
	const functionUrl = primaryDomain ? domainUrl(primaryDomain) : func?.name ? `https://${func.name.toLowerCase().replace(/[^a-z0-9-]/g, "-")}.appwrite.network` : null;
	const sidebarContent = func || deployment ? /* @__PURE__ */ jsx("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-5 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [
						func && /* @__PURE__ */ jsx("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50 shrink-0",
							children: /* @__PURE__ */ jsx(RuntimeIcon, {
								runtime: func.runtime,
								className: "h-5 w-5 text-muted-foreground"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex-1 min-w-0",
							children: func && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground truncate",
								children: func.name
							}), /* @__PURE__ */ jsx(CopyableId, {
								id: func.$id,
								size: "xs",
								className: "mt-0.5"
							})] })
						}),
						statusBadge && /* @__PURE__ */ jsxs(Badge, {
							variant: statusBadge.badgeVariant,
							className: "gap-1.5 text-[11px] font-medium shrink-0 h-6 px-2.5",
							children: [(() => {
								const StatusIcon = statusBadge.icon;
								return /* @__PURE__ */ jsx(StatusIcon, { className: "h-3.5 w-3.5" });
							})(), t(statusBadge.label)]
						})
					]
				})
			})
		})
	}) : null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create function"),
		fallbackPath: `/projects/${projectId}/functions`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		footerAlign: "right",
		sidebar: sidebarContent,
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [isBuilding && /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				onClick: handleCancelDeployment,
				disabled: cancelDeploymentMutation.isPending,
				children: t("Cancel deployment")
			}), /* @__PURE__ */ jsx(Button, {
				variant: status === "ready" ? "default" : "outline",
				onClick: handleGoToFunction,
				children: t("Go to function")
			})]
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [status !== "ready" && /* @__PURE__ */ jsx(BuildLogsCard, {
				buildLogs,
				durationDisplay: buildDurationDisplay,
				downloadFilename: `build-logs-${actualDeploymentId || "deployment"}.txt`
			}), (status === "ready" || status === "failed") && func && /* @__PURE__ */ jsxs("div", {
				className: "space-y-4 transition-all duration-300 ease-out animate-in fade-in-0 slide-in-from-bottom-4",
				style: {
					animationDuration: "400ms",
					animationFillMode: "backwards"
				},
				children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "p-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(RuntimeIcon, {
										runtime: func.runtime,
										className: "h-6 w-6"
									})
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-[16px] font-semibold text-foreground",
										children: func.name
									}),
									/* @__PURE__ */ jsx(CopyableId, {
										id: func.$id,
										size: "xs"
									}),
									functionUrl && /* @__PURE__ */ jsxs("a", {
										href: functionUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-2 flex items-center gap-1 link-neutral text-[12px]",
										children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }), primaryDomain || t("Function URL")]
									})
								] })]
							}), functionUrl && /* @__PURE__ */ jsx(Button, {
								asChild: true,
								children: /* @__PURE__ */ jsxs("a", {
									href: functionUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-4 w-4" }), t("Open URL")]
								})
							})]
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Next steps")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Run your function or connect a repository for deployments")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-border",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/projects/$projectId/functions/$functionId/executions",
								params: {
									projectId,
									functionId: actualFunctionId
								},
								className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(Play, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium text-foreground",
										children: t("Create execution")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: t("Run your function manually")
									})]
								})]
							}), (!func.installationId || !func.providerRepositoryId) && /* @__PURE__ */ jsxs(Link, {
								to: "/projects/$projectId/functions/$functionId/settings",
								params: {
									projectId,
									functionId: actualFunctionId
								},
								className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(GitBranch, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium text-foreground",
										children: t("Connect repository")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: t("Link Git for automatic deployments")
									})]
								})]
							})]
						})
					]
				})]
			})]
		})
	}), /* @__PURE__ */ jsx(Dialog, {
		open: cancelBuildDialogOpen,
		onOpenChange: setCancelBuildDialogOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Cancel build") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Stop the current deployment? You can deploy again later.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-4",
					children: deployment && /* @__PURE__ */ jsx(DeploymentInfo, {
						deployment,
						showStatus: true
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => setCancelBuildDialogOpen(false),
						className: "h-9 text-[13px]",
						children: t("Keep building")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						onClick: () => cancelDeploymentMutation.mutate(),
						disabled: cancelDeploymentMutation.isPending,
						className: "h-9 text-[13px]",
						children: t("Cancel build")
					})]
				})
			]
		})
	})] });
}
function DeployingPage() {
	const { functionId, deploymentId } = Route$1.useSearch();
	return /* @__PURE__ */ jsx(DeployingView, {
		functionId,
		deploymentId
	});
}
export { DeployingPage as component };
