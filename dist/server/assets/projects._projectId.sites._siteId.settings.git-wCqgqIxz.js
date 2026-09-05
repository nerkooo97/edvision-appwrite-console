import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind, i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ms as useRepository, Ns as useVcsInstallations, Ts as resolveConnectBranch } from "./hooks-BONwG3Mt.js";
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
import { Ot as buildSiteUpdateParams, mn as useProjectSite } from "./affiliates-BOg1SHC6.js";
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
import "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./FrameworkIcon-DTkSe6r3.js";
import { r as buildVcsAuthUrl, s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import "./LanguageIcon-C0AhXLp0.js";
import "./RuntimeIcon-Dt6YMTy1.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./WarningAlert-ZIbpbrZO.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { t as RepositoryPicker } from "./RepositoryPicker-BTzJ0oV8.js";
import { t as RootDirectoryPicker } from "./RootDirectoryPicker-CYhbDyP_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, GitBranch, Loader2, Lock, X } from "lucide-react";
function GitRepositoryCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [connectDialogOpen, setConnectDialogOpen] = useState(false);
	const [disconnectDialogOpen, setDisconnectDialogOpen] = useState(false);
	const [selectedBranch, setSelectedBranch] = useState(site?.providerBranch || "");
	const [selectedDir, setSelectedDir] = useState(site?.providerRootDirectory || "");
	const [selectedInstallationId, setSelectedInstallationId] = useState("");
	const [selectedRepositoryId, setSelectedRepositoryId] = useState("");
	const hasRepository = site?.installationId && site.providerRepositoryId;
	const { data: repository, isLoading: repositoryLoading, isFetching: repositoryFetching, error: repositoryError, refetch: refetchRepository } = useRepository(projectId, site?.installationId || null, site?.providerRepositoryId || null);
	const repositoryErrorKind = getVcsInstallationErrorKind(repositoryError);
	const { provider: installationProvider, organization: installationOrganization, reconnectUrl } = useVcsInstallationReconnect(projectId, site?.installationId);
	const { data: installationsData } = useVcsInstallations(projectId);
	const { project } = useProject(projectId ?? void 0);
	const getVcsAuthUrl = useMemo(() => {
		return (provider = "github") => {
			if (typeof window === "undefined" || !projectId || !siteId) return "#";
			const redirectUrl = `${window.location.origin}/projects/${projectId}/sites/${siteId}/settings`;
			return buildVcsAuthUrl({
				endpoint: getApiEndpoint(project?.region),
				provider,
				projectId,
				successUrl: redirectUrl,
				failureUrl: redirectUrl
			});
		};
	}, [
		projectId,
		siteId,
		project?.region
	]);
	const getGitHubAuthUrl = getVcsAuthUrl("github");
	useEffect(() => {
		if (installationsData?.installations && installationsData.installations.length > 0 && !selectedInstallationId) setSelectedInstallationId(installationsData.installations[0].$id);
	}, [installationsData, selectedInstallationId]);
	useEffect(() => {
		if (site) {
			setSelectedBranch(site.providerBranch || "");
			setSelectedDir(site.providerRootDirectory || "");
		}
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Repository settings updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
			if (hasRepository) {
				queryClient.invalidateQueries({ queryKey: [
					"vcs",
					"repository",
					projectId,
					site.installationId,
					site.providerRepositoryId
				] });
				queryClient.invalidateQueries({ queryKey: [
					"vcs",
					"branches",
					projectId,
					site.installationId,
					site.providerRepositoryId
				] });
			}
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update repository settings")));
		}
	});
	const connectRepositoryMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !site || !selectedInstallationId || !selectedRepositoryId) throw new Error("Installation and Repository are required");
			const providerBranch = await resolveConnectBranch(projectId, selectedInstallationId, selectedRepositoryId, site.providerBranch ?? "");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, {
				installationId: selectedInstallationId,
				providerRepositoryId: selectedRepositoryId,
				providerBranch
			}));
		},
		onSuccess: (updated) => {
			toast.success(t("Repository connected successfully"));
			setConnectDialogOpen(false);
			setSelectedRepositoryId("");
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to connect repository")));
		}
	});
	const disconnectRepositoryMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, {
				installationId: void 0,
				providerRepositoryId: void 0,
				providerBranch: void 0,
				providerSilentMode: void 0,
				providerRootDirectory: void 0
			}));
		},
		onSuccess: (updated) => {
			toast.success(t("Repository disconnected successfully"));
			setDisconnectDialogOpen(false);
			setSelectedBranch("");
			setSelectedDir("");
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to disconnect repository")));
		}
	});
	const handleSaveConfiguration = () => {
		if (!(selectedBranch !== site?.providerBranch || selectedDir !== (site?.providerRootDirectory || ""))) {
			toast.info(t("No changes to save"));
			return;
		}
		updateSiteMutation.mutate({
			providerBranch: selectedBranch || void 0,
			providerRootDirectory: selectedDir || void 0
		});
	};
	const handleConnectRepository = () => {
		if (!selectedInstallationId || !selectedRepositoryId) {
			toast.error(t("Please select an installation and repository"));
			return;
		}
		connectRepositoryMutation.mutate();
	};
	const handleDisconnectRepository = () => {
		disconnectRepositoryMutation.mutate();
	};
	const hasChanges = useMemo(() => {
		return selectedBranch !== site?.providerBranch || selectedDir !== (site?.providerRootDirectory || "");
	}, [
		selectedBranch,
		selectedDir,
		site
	]);
	const repositoryLabel = repository ? `${repository.organization}/${repository.name}` : installationOrganization || t("Connected repository");
	const installationId = site?.installationId != null ? site.installationId : void 0;
	const providerRepositoryId = site?.providerRepositoryId != null ? site.providerRepositoryId : void 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Repository")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Connect your site to a Git repository for automatic deployments")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: !hasRepository ? /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center justify-center py-8 text-center",
					children: [/* @__PURE__ */ jsx(EmptyState, {
						icon: GitBranch,
						title: t("No repository connected"),
						description: t("Connect a repository to enable automatic deployments"),
						isEmpty: true,
						iconSize: "md"
					}), /* @__PURE__ */ jsxs(Dialog, {
						open: connectDialogOpen,
						onOpenChange: (open) => {
							setConnectDialogOpen(open);
							if (open) setSelectedRepositoryId("");
						},
						children: [/* @__PURE__ */ jsx(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px] mt-4",
								children: t("Connect repository")
							})
						}), /* @__PURE__ */ jsxs(DialogContent, {
							className: "sm:max-w-2xl p-0",
							children: [
								/* @__PURE__ */ jsxs(DialogHeader, {
									className: "px-6 pt-6 text-start",
									children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Connect repository") }), /* @__PURE__ */ jsx(DialogDescription, {
										className: "text-[13px] mt-2",
										children: t("Select a Git installation and repository to connect to this site. You can connect an existing repository or create a new site from a template.")
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 pb-4 pt-4 max-h-[70dvh] overflow-y-auto",
									children: /* @__PURE__ */ jsx(RepositoryPicker, {
										projectId,
										getGitHubAuthUrl,
										getVcsAuthUrl,
										installations: installationsData?.installations ?? [],
										selectedInstallationId,
										onInstallationChange: setSelectedInstallationId,
										selectedRepositoryId,
										onRepositorySelect: (repo) => setSelectedRepositoryId(repo.id),
										mode: "connect",
										showCreateNewSiteLink: true
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
									children: [/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: () => setConnectDialogOpen(false),
										disabled: connectRepositoryMutation.isPending,
										children: t("Cancel")
									}), /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: handleConnectRepository,
										disabled: !selectedInstallationId || !selectedRepositoryId || connectRepositoryMutation.isPending,
										children: t("Connect")
									})]
								})
							]
						})]
					})]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						repositoryLoading ? /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center py-4",
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
						}) : repository || repositoryErrorKind ? /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-md border border-border bg-background px-3 py-2",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-8 w-8 shrink-0 items-center justify-center rounded bg-muted",
									children: (() => {
										const { Icon: RepositoryProviderIcon } = getVcsProvider(repository?.provider ?? installationProvider);
										return /* @__PURE__ */ jsx(RepositoryProviderIcon, { className: "h-4 w-4 text-muted-foreground" });
									})()
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: repositoryLabel
										}), repository?.private && /* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })]
									}), !repository ? /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Repository details unavailable")
									}) : "pushedAt" in repository && repository.pushedAt && /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Last updated"),
											" ",
											/* @__PURE__ */ jsx(DateTooltip, { date: repository.pushedAt })
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [repository && repository.url && /* @__PURE__ */ jsx(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-8 w-8 p-0",
										asChild: true,
										"aria-label": t("Open repository in new tab"),
										children: /* @__PURE__ */ jsx("a", {
											href: repository.url,
											target: "_blank",
											rel: "noopener noreferrer",
											children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
										})
									}), /* @__PURE__ */ jsxs(Dialog, {
										open: disconnectDialogOpen,
										onOpenChange: setDisconnectDialogOpen,
										children: [/* @__PURE__ */ jsx(DialogTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsxs(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-[13px] text-foreground hover:text-foreground",
												children: [/* @__PURE__ */ jsx(X, { className: "me-1.5 h-4 w-4" }), t("Disconnect")]
											})
										}), /* @__PURE__ */ jsxs(DialogContent, {
											className: "sm:max-w-md p-0",
											children: [/* @__PURE__ */ jsxs(DialogHeader, {
												className: "px-6 pt-6 text-start",
												children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Disconnect repository") }), /* @__PURE__ */ jsxs(DialogDescription, {
													className: "text-[13px] mt-2",
													children: [
														t("Are you sure you want to disconnect"),
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "font-medium text-foreground",
															children: repositoryLabel
														}),
														" ",
														t("from this site? This will remove the Git integration but won't affect your deployments.")
													]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
												children: [/* @__PURE__ */ jsx(Button, {
													variant: "outline",
													size: "sm",
													className: "h-9 text-[13px]",
													onClick: () => setDisconnectDialogOpen(false),
													disabled: disconnectRepositoryMutation.isPending,
													children: t("Cancel")
												}), /* @__PURE__ */ jsx(Button, {
													variant: "destructive",
													size: "sm",
													className: "h-9 text-[13px]",
													onClick: handleDisconnectRepository,
													disabled: disconnectRepositoryMutation.isPending,
													children: t("Disconnect")
												})]
											})]
										})]
									})]
								})
							]
						}) : null,
						repositoryErrorKind && /* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
							kind: repositoryErrorKind,
							provider: installationProvider,
							organization: installationOrganization,
							reconnectUrl,
							onRetry: () => refetchRepository(),
							isRetrying: repositoryFetching,
							children: t("This site's repository details could not be loaded. Its Git connection is unchanged, but branch and root directory options are unavailable until access is restored.")
						}),
						/* @__PURE__ */ jsxs("fieldset", {
							className: "rounded-lg border border-border p-4 space-y-4",
							children: [
								/* @__PURE__ */ jsx("legend", {
									className: "text-[13px] font-medium text-foreground px-2",
									children: t("Branch Settings")
								}),
								/* @__PURE__ */ jsx(BranchSelector, {
									projectId: projectId ?? void 0,
									installationId,
									providerRepositoryId,
									value: selectedBranch,
									onChange: setSelectedBranch,
									label: t("Production branch"),
									suppressInstallationError: !!repositoryErrorKind
								}),
								/* @__PURE__ */ jsx(RootDirectoryPicker, {
									projectId: projectId ?? void 0,
									installationId,
									providerRepositoryId,
									branch: selectedBranch || "main",
									value: selectedDir,
									onChange: setSelectedDir,
									label: t("Root directory"),
									description: t("Choose the directory containing your site code")
								})
							]
						})
					]
				})
			}),
			hasRepository && /* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || updateSiteMutation.isPending,
					onClick: handleSaveConfiguration,
					children: t("Update")
				})
			})
		]
	});
}
function GitSilentModeCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [silentMode, setSilentMode] = useState(site.providerSilentMode ?? false);
	useEffect(() => {
		setSilentMode(site.providerSilentMode ?? false);
	}, [site.providerSilentMode, site.$id]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Repository settings updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update repository settings")));
		}
	});
	const hasChanges = useMemo(() => silentMode !== (site.providerSilentMode ?? false), [silentMode, site.providerSilentMode]);
	const handleSave = () => {
		if (!hasChanges) {
			toast.info(t("No changes to save"));
			return;
		}
		updateSiteMutation.mutate({ providerSilentMode: silentMode });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Silent mode")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Control whether Appwrite posts automated comments on commits in your connected GitHub repository (for example deployment notes on pull requests). Deployments, checks, and builds are unchanged-only optional commit comments are skipped when silent mode is on.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "site-git-silent-mode",
						className: "text-[13px]",
						children: t("Disable automated commit comments")
					}), /* @__PURE__ */ jsx(Switch, {
						id: "site-git-silent-mode",
						checked: silentMode,
						onCheckedChange: setSilentMode,
						disabled: updateSiteMutation.isPending
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const { data: site, isLoading } = useProjectSite(projectId, siteId);
	const hasRepository = Boolean(site?.installationId && site?.providerRepositoryId);
	const cards = useMemo(() => {
		if (!site) return [];
		const items = [{
			id: "repository",
			search: {
				title: "Repository",
				keywords: [
					"git",
					"github",
					"branch",
					"connect",
					"deployment"
				]
			},
			node: /* @__PURE__ */ jsx(GitRepositoryCard, {
				projectId,
				siteId,
				site
			})
		}];
		if (hasRepository) items.push({
			id: "silent-mode",
			search: {
				title: "Silent mode",
				keywords: [
					"comments",
					"commits",
					"pull request"
				]
			},
			node: /* @__PURE__ */ jsx(GitSilentModeCard, {
				projectId,
				siteId,
				site
			})
		});
		return items;
	}, [
		site,
		projectId,
		siteId,
		hasRepository
	]);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!site) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards });
}
var SplitComponent = View;
export { SplitComponent as component };
