import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, u as getSiteScreenshotFilePreviewUrl } from "./sdk-DjIJ_hjn.js";
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
import { Ms as useRepository, ks as useInstallation } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { bt as formatDecimalBytes } from "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { gn as useSiteDeployment, kt as cancelSiteDeployment, mn as useProjectSite, vn as useSiteDomains } from "./affiliates-BOg1SHC6.js";
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
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./tooltip-DUssQZhw.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { t as Route$1 } from "./projects._projectId.sites.create.deploying-D8DB88Lc.js";
import "./BuildLogsView-ByzI55tv.js";
import { n as getDeploymentStatusBadge } from "./deployment-status-gtgbrodz.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { a as SITE_SCREENSHOT_LARGE_WIDTH, i as SITE_SCREENSHOT_LARGE_HEIGHT, t as SITE_SCREENSHOTS_BUCKET_ID } from "./screenshot-preview-sizes-CXYa3cGX.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { t as BuildLogsCard } from "./BuildLogsCard-BN250kf6.js";
import { r as refetchSitePreviewCaches, t as deploymentHasScreenshot } from "./deployment-screenshots-rgzxpb3Q.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ImageFormat } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, GitBranch, Globe, Loader2, Share2, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";
function formatDuration(seconds) {
	if (seconds < 60) return `${seconds}s`;
	return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
function formatSize(bytes) {
	return formatDecimalBytes(bytes);
}
function DeployingView({ siteId, deploymentId }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { theme, resolvedTheme } = useTheme();
	const { formData, frameworks, resetFormData } = useWizard();
	const [qrDialogOpen, setQrDialogOpen] = useState(false);
	const [previewImageLoaded, setPreviewImageLoaded] = useState(false);
	const [cancelBuildDialogOpen, setCancelBuildDialogOpen] = useState(false);
	const [isNavigatingToDashboard, setIsNavigatingToDashboard] = useState(false);
	const didRefetchPreviewCachesRef = useRef(false);
	const actualSiteId = siteId || formData.createdSiteId;
	const actualDeploymentId = deploymentId || formData.createdDeploymentId;
	const { data: site } = useProjectSite(projectId, actualSiteId);
	const { data: deployment } = useSiteDeployment(projectId, actualSiteId, actualDeploymentId);
	useEffect(() => {
		if (!projectId || !actualSiteId || !deploymentHasScreenshot(deployment) || didRefetchPreviewCachesRef.current) return;
		didRefetchPreviewCachesRef.current = true;
		refetchSitePreviewCaches(queryClient, projectId, actualSiteId, actualDeploymentId);
	}, [
		projectId,
		actualSiteId,
		actualDeploymentId,
		deployment,
		queryClient
	]);
	const { data: installation } = useInstallation(projectId, site?.installationId || null);
	const { data: repository } = useRepository(projectId, site?.installationId || null, site?.providerRepositoryId || null);
	const { rules: domains } = useSiteDomains(projectId, actualSiteId, 0, 10);
	const [status, setStatus] = useState("building");
	const buildLogs = deployment?.buildLogs ?? "";
	useEffect(() => {
		if (deployment) setStatus(deployment.status);
	}, [deployment]);
	const isBuilding = status === "building" || status === "processing" || status === "waiting";
	const cancelDeploymentMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !actualSiteId || !actualDeploymentId) throw new Error("Project, site, and deployment IDs are required");
			return await cancelSiteDeployment(projectId, actualSiteId, actualDeploymentId);
		},
		onSuccess: () => {
			setCancelBuildDialogOpen(false);
			resetFormData();
			toast.success(t("Deployment cancelled"));
			navigate({
				to: "/projects/$projectId/sites",
				params: { projectId }
			});
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to cancel deployment"));
		}
	});
	const handleCancelDeployment = () => setCancelBuildDialogOpen(true);
	const handleGoToDashboard = async () => {
		if (isNavigatingToDashboard) return;
		setIsNavigatingToDashboard(true);
		const siteIdToOpen = actualSiteId;
		const deploymentIdToRefresh = actualDeploymentId;
		try {
			if (projectId && siteIdToOpen) await refetchSitePreviewCaches(queryClient, projectId, siteIdToOpen, deploymentIdToRefresh);
		} catch {}
		if (status === "ready") resetFormData();
		if (siteIdToOpen) navigate({
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId: siteIdToOpen
			}
		});
		else navigate({
			to: "/projects/$projectId/sites",
			params: { projectId }
		});
	};
	const isDark = useMemo(() => {
		if (typeof window === "undefined") return true;
		return resolvedTheme === "dark" || resolvedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches || theme === "dark";
	}, [theme, resolvedTheme]);
	const avifSupported = useAvifSupport();
	const screenshotUrl = useMemo(() => {
		if (!deployment) return null;
		const screenshotId = isDark ? deployment.screenshotDark : deployment.screenshotLight;
		if (!screenshotId || !projectId) return null;
		return getSiteScreenshotFilePreviewUrl(projectId, {
			bucketId: SITE_SCREENSHOTS_BUCKET_ID,
			fileId: screenshotId,
			width: 960,
			height: 540,
			output: avifSupported ? ImageFormat.Avif : void 0
		});
	}, [
		deployment,
		isDark,
		projectId,
		avifSupported
	]);
	const primaryDomain = useMemo(() => {
		if (domains.length > 0) return domains[0].domain;
		return null;
	}, [domains]);
	const siteUrl = primaryDomain ? domainUrl(primaryDomain) : null;
	const qrImageUrl = useMemo(() => {
		if (!siteUrl) return null;
		return sdk.forConsole.avatars.getQR({
			text: siteUrl,
			size: 256
		});
	}, [siteUrl]);
	useEffect(() => {
		setPreviewImageLoaded(false);
	}, [screenshotUrl]);
	const frameworkInfo = site ? frameworks.find((f) => f.key === site.framework) : null;
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
	const sidebarContent = site || deployment ? /* @__PURE__ */ jsx("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "px-5 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [
						site && /* @__PURE__ */ jsxs("div", {
							className: "relative shrink-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
								children: /* @__PURE__ */ jsx(FrameworkIcon, {
									framework: site.framework,
									size: "md"
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute -bottom-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-background",
								children: (() => {
									const { Icon: ProviderIcon } = getVcsProvider(installation?.provider);
									return /* @__PURE__ */ jsx(ProviderIcon, { className: "h-3 w-3 text-muted-foreground" });
								})()
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex-1 min-w-0",
							children: site && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground truncate",
								children: site.name
							}), /* @__PURE__ */ jsx(CopyableId, {
								id: site.$id,
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
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-5 py-3.5 bg-muted/10",
				children: /* @__PURE__ */ jsxs("dl", {
					className: "space-y-2.5",
					children: [
						frameworkInfo && /* @__PURE__ */ jsxs("div", {
							className: "flex justify-between gap-3 items-center",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground shrink-0",
								children: t("Framework")
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-[12px] font-medium text-foreground truncate text-end",
								children: frameworkInfo.name
							})]
						}),
						repository && /* @__PURE__ */ jsxs("div", {
							className: "flex justify-between gap-3 items-center",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground shrink-0",
								children: t("Source")
							}), /* @__PURE__ */ jsxs("dd", {
								className: "text-[12px] font-mono text-foreground truncate text-end",
								children: [
									repository.organization,
									"/",
									repository.name
								]
							})]
						}),
						site?.providerBranch && /* @__PURE__ */ jsxs("div", {
							className: "flex justify-between gap-3 items-center",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground shrink-0",
								children: t("Branch")
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-[12px] font-mono text-foreground truncate text-end",
								children: site.providerBranch
							})]
						}),
						deployment && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between gap-3 items-center",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground shrink-0",
								children: t("Deployed")
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-[12px] font-medium text-foreground text-end",
								children: /* @__PURE__ */ jsx(DateTooltip, { date: deployment.$createdAt })
							})]
						}), (deployment.buildSize ?? 0) + (deployment.sourceSize ?? 0) > 0 && /* @__PURE__ */ jsxs("div", {
							className: "flex justify-between gap-3 items-center",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground shrink-0",
								children: t("Size")
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-[12px] font-medium text-foreground text-end",
								children: formatSize((deployment.buildSize ?? 0) + (deployment.sourceSize ?? 0))
							})]
						})] })
					]
				})
			})]
		})
	}) : null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(WizardLayout, {
			title: t("Create site"),
			fallbackPath: `/projects/${projectId}/sites`,
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
					onClick: handleGoToDashboard,
					disabled: isNavigatingToDashboard,
					children: t("Go to dashboard")
				})]
			}),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [status !== "ready" && /* @__PURE__ */ jsx(BuildLogsCard, {
					buildLogs,
					durationDisplay: buildDurationDisplay,
					downloadFilename: `build-logs-${actualDeploymentId || "deployment"}.txt`
				}), status === "ready" && site && /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 transition-all duration-300 ease-out animate-in fade-in-0 slide-in-from-bottom-4",
					style: {
						animationDuration: "400ms",
						animationFillMode: "backwards"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [screenshotUrl ? /* @__PURE__ */ jsxs("div", {
							className: "aspect-[21/9] w-full relative overflow-hidden bg-muted",
							children: [!previewImageLoaded && /* @__PURE__ */ jsxs("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted/50 via-muted/30 to-muted/20",
								children: [/* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-muted-foreground",
									children: t("Loading preview…")
								})]
							}), /* @__PURE__ */ jsx("img", {
								src: screenshotUrl,
								alt: `${site.name} ${t("preview")}`,
								className: "h-full w-full object-cover object-top",
								onLoad: () => setPreviewImageLoaded(true)
							})]
						}) : /* @__PURE__ */ jsxs("div", {
							className: "aspect-[21/9] w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-muted/50 via-muted/30 to-muted/20",
							children: [
								/* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-muted-foreground",
									children: t("Generating preview…")
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground/80",
									children: t("Screenshot may take a few moments after build completes")
								}),
								/* @__PURE__ */ jsx(FrameworkIcon, {
									framework: site.framework,
									size: "lg",
									className: "mt-2 opacity-50"
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "p-6",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground",
										children: /* @__PURE__ */ jsx(FrameworkIcon, {
											framework: site.framework,
											size: "md"
										})
									}), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-[16px] font-semibold text-foreground",
											children: site.name
										}),
										/* @__PURE__ */ jsx(CopyableId, {
											id: site.$id,
											size: "xs"
										}),
										siteUrl && /* @__PURE__ */ jsxs("a", {
											href: siteUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-2 flex items-center gap-1.5 link-neutral text-[12px]",
											children: [
												/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 shrink-0" }),
												/* @__PURE__ */ jsx("span", {
													className: "min-w-0 truncate",
													children: primaryDomain
												}),
												/* @__PURE__ */ jsx(ExternalLink, {
													className: "h-3.5 w-3.5 shrink-0 opacity-80",
													"aria-hidden": true
												})
											]
										})
									] })]
								}), siteUrl && /* @__PURE__ */ jsx(Button, {
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: siteUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-4 w-4" }), t("Visit site")]
									})
								})]
							})
						})]
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
									children: t("Configure your site or share it with others")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-border",
								children: [
									site && !site.installationId && /* @__PURE__ */ jsxs(Link, {
										to: "/projects/$projectId/sites/$siteId/settings",
										params: {
											projectId,
											siteId: actualSiteId
										},
										className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
											children: /* @__PURE__ */ jsx(GitBranch, { className: "h-5 w-5" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Add repository")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-muted-foreground mt-0.5",
												children: t("Connect Git for automatic deployments")
											})]
										})]
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/projects/$projectId/sites/$siteId/domains",
										params: {
											projectId,
											siteId: actualSiteId
										},
										className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
											children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Add custom domain")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-muted-foreground mt-0.5",
												children: t("Use your own domain name")
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => {
											if (siteUrl) {
												navigator.clipboard.writeText(siteUrl);
												toast.success(t("URL copied to clipboard"));
											}
										},
										className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer text-start w-full",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
											children: /* @__PURE__ */ jsx(Share2, { className: "h-5 w-5" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Copy site URL")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-muted-foreground mt-0.5",
												children: t("Copy URL to clipboard")
											})]
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => {
											if (!siteUrl) {
												toast.error(t("Site URL is not available yet"));
												return;
											}
											setQrDialogOpen(true);
										},
										className: "flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer text-start w-full",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
											children: /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Open on mobile")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-muted-foreground mt-0.5",
												children: t("Scan QR code")
											})]
										})]
									})
								]
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: qrDialogOpen,
			onOpenChange: setQrDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "z-[10000] sm:max-w-md p-0",
				overlayClassName: "z-[9999]",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("View on mobile") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Scan this QR code to open your site on a mobile device")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-6 flex items-center justify-center",
						children: qrImageUrl ? /* @__PURE__ */ jsx("div", {
							className: "p-4 bg-white rounded-lg",
							children: /* @__PURE__ */ jsx("img", {
								src: qrImageUrl,
								alt: t("QR code to open site on mobile"),
								className: "h-48 w-48 rounded"
							})
						}) : /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground text-center px-4",
							children: t("QR code could not be generated. Try again in a moment.")
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => setQrDialogOpen(false),
							children: t("Close")
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: cancelBuildDialogOpen,
			onOpenChange: setCancelBuildDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "z-[10000] sm:max-w-md p-0",
				overlayClassName: "z-[9999]",
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
		})
	] });
}
function DeployingPage() {
	const { siteId, deploymentId } = Route$1.useSearch();
	return /* @__PURE__ */ jsx(DeployingView, {
		siteId,
		deploymentId
	});
}
export { DeployingPage as component };
