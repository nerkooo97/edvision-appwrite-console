import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ms as useRepository } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { Y as validateVariables } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { an as useCreateSite, on as useCreateSiteDomain, un as useCreateVcsDeployment } from "./affiliates-BOg1SHC6.js";
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
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./overlay-lock-CIY7GeXu.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as Route$1 } from "./projects._projectId.sites.create.repositories._installationId._repositoryId-CpvhNgxA.js";
import "./WarningAlert-ZIbpbrZO.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { t as RootDirectoryPicker } from "./RootDirectoryPicker-CYhbDyP_.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import "./DomainInput-BVoiQ2EY.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { t as DomainInput } from "./DomainInput-BQ94HylF.js";
import { t as BuildSettings } from "./BuildSettings-Bicajv6M.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ID, VCSDetectionType } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, FolderOpen, GitBranch, Globe, Key, Layers, Loader2, Lock } from "lucide-react";
function RepositoryConfigView({ installationId: installationIdFromUrl, providerRepositoryId: providerRepositoryIdFromUrl }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { formData, updateFormData, frameworks, getFrameworkDefaults, generateDomain } = useWizard();
	const installationId = installationIdFromUrl;
	const providerRepositoryId = providerRepositoryIdFromUrl;
	useEffect(() => {
		if (installationId && providerRepositoryId) updateFormData({
			installationId,
			providerRepositoryId
		});
	}, [
		installationId,
		providerRepositoryId,
		updateFormData
	]);
	const [siteName, setSiteName] = useState(formData.siteName || "");
	const [siteId, setSiteId] = useState(formData.siteId);
	const [framework, setFramework] = useState(formData.framework || "");
	const [branch, setBranch] = useState(formData.providerBranch || "");
	const [rootDirectory, setRootDirectory] = useState(formData.providerRootDirectory || "./");
	const [silentMode, setSilentMode] = useState(formData.providerSilentMode || false);
	const [installCommand, setInstallCommand] = useState(formData.installCommand || "");
	const [buildCommand, setBuildCommand] = useState(formData.buildCommand || "");
	const [outputDirectory, setOutputDirectory] = useState(formData.outputDirectory || "");
	const [startCommand, setStartCommand] = useState(formData.startCommand || "");
	const [fallbackFile, setFallbackFile] = useState(formData.fallbackFile || "");
	const [variables, setVariables] = useState(formData.variables || []);
	const [domain, setDomain] = useState(formData.domain || "");
	const [domainValid, setDomainValid] = useState(formData.domainValid || false);
	const [isDeploying, setIsDeploying] = useState(false);
	const { data: repository, error: repositoryError, isFetching: repositoryFetching, refetch: refetchRepository } = useRepository(projectId, installationId || null, providerRepositoryId || null);
	const { provider: installationProvider, organization: installationOrganization, reconnectUrl } = useVcsInstallationReconnect(projectId, installationId || null);
	const repoName = repository?.name ?? formData.repositoryName ?? "";
	const repoOwner = repository?.organization ?? formData.repositoryOwner ?? "";
	const { Icon: RepositoryProviderIcon, label: repositoryProviderLabel } = getVcsProvider(repository?.provider ?? installationProvider);
	useEffect(() => {
		if (repoName && !siteName) setSiteName(repoName);
	}, [repoName]);
	const detectFrameworkMutation = useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Missing project");
			return await sdk.forProject(projectId).vcs.createRepositoryDetection({
				installationId: params.installationId,
				providerRepositoryId: params.providerRepositoryId,
				type: VCSDetectionType.Framework,
				providerRootDirectory: params.rootDirectory || "./"
			});
		},
		onSuccess: (data) => {
			const detectedFramework = data.framework ?? "";
			if (detectedFramework) {
				setFramework(detectedFramework);
				const defaults = getFrameworkDefaults(detectedFramework);
				setInstallCommand(data.installCommand ?? defaults.installCommand);
				setBuildCommand(data.buildCommand ?? defaults.buildCommand);
				setOutputDirectory(data.outputDirectory ?? defaults.outputDirectory);
				setFallbackFile(defaults.fallbackFile);
				updateFormData({
					framework: detectedFramework,
					buildRuntime: defaults.buildRuntime,
					installCommand: data.installCommand ?? defaults.installCommand,
					buildCommand: data.buildCommand ?? defaults.buildCommand,
					outputDirectory: data.outputDirectory ?? defaults.outputDirectory,
					fallbackFile: defaults.fallbackFile
				});
			}
		},
		onError: (error) => {
			if (getVcsInstallationErrorKind(error) === "reconnect") return;
			toast.error(t("Could not detect framework. Select one manually."));
		}
	});
	const runFrameworkDetection = useCallback(() => {
		if (!projectId || !installationId || !providerRepositoryId) {
			toast.error(t("Repository not connected. Go back and select a repository."));
			return;
		}
		detectFrameworkMutation.mutate({
			installationId,
			providerRepositoryId,
			rootDirectory: rootDirectory || "./"
		});
	}, [
		projectId,
		installationId,
		providerRepositoryId,
		rootDirectory,
		detectFrameworkMutation,
		t
	]);
	const installationErrorKind = getVcsInstallationErrorKind(repositoryError) ?? getVcsInstallationErrorKind(detectFrameworkMutation.error);
	const retryRepositoryLoad = useCallback(() => {
		refetchRepository();
		runFrameworkDetection();
	}, [refetchRepository, runFrameworkDetection]);
	useEffect(() => {
		if (!installationId || !providerRepositoryId || !projectId) return;
		detectFrameworkMutation.mutate({
			installationId,
			providerRepositoryId,
			rootDirectory: rootDirectory || "./"
		});
	}, [
		projectId,
		installationId,
		providerRepositoryId,
		rootDirectory
	]);
	useEffect(() => {
		if (framework) {
			const defaults = getFrameworkDefaults(framework);
			if (!installCommand) setInstallCommand(defaults.installCommand);
			if (!buildCommand) setBuildCommand(defaults.buildCommand);
			if (!outputDirectory) setOutputDirectory(defaults.outputDirectory);
			if (!fallbackFile) setFallbackFile(defaults.fallbackFile);
		}
	}, [framework, getFrameworkDefaults]);
	useEffect(() => {
		if (siteName && !domain) setDomain(generateDomain(siteName));
	}, [siteName, generateDomain]);
	const createSiteMutation = useCreateSite(projectId);
	const createDomainMutation = useCreateSiteDomain(projectId);
	const createDeploymentMutation = useCreateVcsDeployment(projectId);
	const handleDeploy = async () => {
		if (!projectId || !siteName || !framework) {
			toast.error(t("Please fill in all required fields"));
			return;
		}
		if (!domainValid) {
			toast.error(t("Please enter a valid domain"));
			return;
		}
		const validationError = validateVariables(variables);
		if (validationError) {
			toast.error(validationError);
			return;
		}
		setIsDeploying(true);
		try {
			const defaults = getFrameworkDefaults(framework);
			const site = await createSiteMutation.mutateAsync({
				siteId: siteId || void 0,
				name: siteName,
				framework,
				buildRuntime: defaults.buildRuntime,
				installCommand: installCommand || void 0,
				buildCommand: buildCommand || void 0,
				startCommand: startCommand || void 0,
				outputDirectory: outputDirectory || void 0,
				adapter: defaults.adapter || void 0,
				fallbackFile: defaults.adapter === "static" ? fallbackFile || void 0 : void 0,
				installationId,
				providerRepositoryId,
				providerBranch: branch,
				providerSilentMode: silentMode,
				providerRootDirectory: rootDirectory || void 0
			});
			if (domain) await createDomainMutation.mutateAsync({
				domain,
				siteId: site.$id
			});
			if (variables.length > 0) {
				const projectSdk = sdk.forProject(projectId);
				await Promise.all(variables.map((v) => projectSdk.sites.createVariable({
					siteId: site.$id,
					variableId: ID.unique(),
					key: v.key,
					value: v.value,
					secret: v.secret
				})));
			}
			const deployment = await createDeploymentMutation.mutateAsync({
				siteId: site.$id,
				type: "branch",
				reference: branch,
				activate: true
			});
			updateFormData({
				createdSiteId: site.$id,
				createdDeploymentId: deployment.$id
			});
			await queryClient.refetchQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
			navigate({
				to: "/projects/$projectId/sites/create/deploying",
				params: { projectId },
				search: {
					siteId: site.$id,
					deploymentId: deployment.$id
				}
			});
		} catch (error) {
			toast.error(error.message || t("Failed to create site"));
			setIsDeploying(false);
		}
	};
	const frameworkInfo = useMemo(() => {
		return frameworks.find((f) => f.key === framework);
	}, [frameworks, framework]);
	const deployBlockedReason = getVcsInstallationErrorKind(repositoryError) === "reconnect" ? t("Reconnect the Git installation before you can deploy this repository.") : !siteName ? t("Enter a site name to continue.") : !framework ? t("Select a framework to continue.") : !domainValid ? t("Enter a valid domain to continue.") : void 0;
	const sidebarContent = /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-5 py-4 border-b border-border/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
								children: frameworkInfo ? /* @__PURE__ */ jsx(FrameworkIcon, {
									framework,
									size: "md"
								}) : /* @__PURE__ */ jsx(RepositoryProviderIcon, { className: "h-5 w-5 text-muted-foreground" })
							}), frameworkInfo && /* @__PURE__ */ jsx("div", {
								className: "absolute -bottom-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-background",
								children: /* @__PURE__ */ jsx(RepositoryProviderIcon, { className: "h-3 w-3 text-muted-foreground" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[13px] font-semibold text-foreground truncate",
									children: frameworkInfo?.name || t("Repository")
								}), repository?.private ? /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3 text-muted-foreground shrink-0" })]
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: [repository ? `${repository.organization}/${repository.name}` : repoName, repository?.pushedAt && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
									className: "mx-1.5",
									children: "·"
								}), /* @__PURE__ */ jsxs("span", { children: [
									t("Updated"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, { date: repository.pushedAt })
								] })] })]
							})]
						}),
						repository?.url && /* @__PURE__ */ jsx("a", {
							href: repository.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
							children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-5 py-4 space-y-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3.5 w-3.5" }), t("Branch")]
						}), /* @__PURE__ */ jsx("code", {
							className: "text-[12px] font-mono text-foreground bg-muted/50 px-2 py-0.5 rounded",
							children: branch || repository?.defaultBranch || "main"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(FolderOpen, { className: "h-3.5 w-3.5" }), t("Root directory")]
						}), /* @__PURE__ */ jsx("code", {
							className: "text-[12px] font-mono text-foreground bg-muted/50 px-2 py-0.5 rounded max-w-[120px] truncate",
							children: rootDirectory || "./"
						})]
					}),
					framework && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }), t("Framework")]
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-foreground",
							children: [/* @__PURE__ */ jsx(FrameworkIcon, {
								framework,
								size: "sm"
							}), /* @__PURE__ */ jsx("span", {
								className: "capitalize",
								children: frameworkInfo?.name || framework
							})]
						})]
					}),
					variables.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("Variables")]
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-foreground",
							children: [
								variables.length,
								" ",
								t("configured")
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-5 py-3 bg-muted/20 border-t border-border/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", { className: cn("h-2 w-2 rounded-full", installationErrorKind ? "bg-red-500" : deployBlockedReason ? "bg-muted-foreground/40" : "bg-emerald-500 animate-pulse") }), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: installationErrorKind ? t("Repository unavailable") : deployBlockedReason ? t("Configuration incomplete") : t("Ready to deploy")
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Create site"),
		showBackButton: true,
		backButtonLabel: t("Back"),
		fallbackPath: `/projects/${projectId}/sites`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		footerAlign: "right",
		sidebar: sidebarContent,
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			onClick: () => window.history.back(),
			disabled: isDeploying,
			children: t("Cancel")
		}), /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("span", {
					className: "inline-flex",
					children: /* @__PURE__ */ jsx(Button, {
						onClick: handleDeploy,
						disabled: isDeploying || createSiteMutation.isPending || !!deployBlockedReason,
						children: t("Deploy")
					})
				})
			}), deployBlockedReason ? /* @__PURE__ */ jsx(TooltipContent, {
				className: "max-w-xs text-xs",
				children: deployBlockedReason
			}) : null] })
		})] }),
		children: [
			installationErrorKind && /* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
				kind: installationErrorKind,
				provider: installationProvider,
				organization: installationOrganization,
				reconnectUrl,
				onRetry: retryRepositoryLoad,
				isRetrying: repositoryFetching || detectFrameworkMutation.isPending,
				children: t("This repository could not be read, so its branches, directories and framework are unavailable and the site cannot be deployed yet.")
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 p-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
							children: frameworkInfo ? /* @__PURE__ */ jsx(FrameworkIcon, {
								framework,
								size: "md"
							}) : /* @__PURE__ */ jsx(RepositoryProviderIcon, { className: "h-5 w-5 text-muted-foreground" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] font-medium text-foreground",
							children: [
								repoOwner,
								"/",
								repoName
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground",
							children: t(`${repositoryProviderLabel} Repository`)
						})] })]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						className: "h-8 text-[12px]",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/sites/create/repositories",
							params: { projectId },
							children: t("Change")
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Details")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "site-name",
									className: "text-[13px]",
									children: t("Site name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "site-name",
									value: siteName,
									onChange: (e) => setSiteName(e.target.value),
									placeholder: t("My awesome site"),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px]",
									children: t("Site ID")
								}), /* @__PURE__ */ jsx(IdInput, {
									value: siteId,
									onChange: setSiteId,
									placeholder: t("Auto-generated")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "framework",
									className: "text-[13px]",
									children: t("Framework")
								}), detectFrameworkMutation.isPending ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: t("Detecting framework...")
									})]
								}) : /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsxs(Select, {
										value: framework,
										onValueChange: (value) => {
											setFramework(value);
											const defaults = getFrameworkDefaults(value);
											setInstallCommand(defaults.installCommand);
											setBuildCommand(defaults.buildCommand);
											setOutputDirectory(defaults.outputDirectory);
											setFallbackFile(defaults.fallbackFile);
										},
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											className: "h-9 text-[13px] flex-1 min-w-0",
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select framework") })
										}), /* @__PURE__ */ jsx(SelectContent, { children: frameworks.map((f) => /* @__PURE__ */ jsx(SelectItem, {
											value: f.key,
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(FrameworkIcon, {
													framework: f.key,
													size: "sm"
												}), f.name]
											})
										}, f.key)) })]
									}), !framework && /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 shrink-0",
										onClick: runFrameworkDetection,
										disabled: detectFrameworkMutation.isPending,
										children: t("Detect")
									})]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Domain")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t("Your site will be accessible at this URL")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx(DomainInput, {
							value: domain,
							onChange: setDomain,
							onValidChange: setDomainValid
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/20",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-[11px] text-muted-foreground leading-relaxed",
							children: [
								t("Want to use your own domain? After deployment, you can connect a custom domain via CNAME record or let Appwrite manage your DNS."),
								" ",
								/* @__PURE__ */ jsx(DocsRouteLink, {
									className: "link-neutral font-medium",
									href: "/docs/products/sites/domains",
									children: t("Learn more →")
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Accordion, {
				type: "single",
				collapsible: true,
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsxs(AccordionItem, {
					value: "repository",
					className: "border-none",
					children: [/* @__PURE__ */ jsx(AccordionTrigger, {
						className: "px-6 py-4 hover:no-underline hover:bg-transparent cursor-pointer",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Repository")
						})
					}), /* @__PURE__ */ jsx(AccordionContent, {
						className: "px-6 pb-4 pt-0 border-t border-border",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 pt-4",
							children: [
								/* @__PURE__ */ jsx(BranchSelector, {
									projectId,
									installationId,
									providerRepositoryId,
									value: branch,
									onChange: setBranch,
									label: t("Branch"),
									labelTooltip: t("Production branch for the repo linked to the site. Successful deployments from this branch get activated automatically.")
								}),
								/* @__PURE__ */ jsx(RootDirectoryPicker, {
									projectId,
									installationId,
									providerRepositoryId,
									branch: branch || "main",
									value: rootDirectory,
									onChange: setRootDirectory,
									label: t("Root directory"),
									labelTooltip: t("Path to site code in the linked repo. Use the repository root (./) or a subdirectory that contains your app (e.g. ./apps/web)."),
									description: t("Choose the directory containing your site code")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "silent-mode",
										className: "text-[13px]",
										children: t("Silent mode")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: t("Disable automated comments on repository commits")
									})] }), /* @__PURE__ */ jsx(Switch, {
										id: "silent-mode",
										checked: silentMode,
										onCheckedChange: setSilentMode
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(BuildSettings, {
				installCommand,
				buildCommand,
				outputDirectory,
				startCommand,
				fallbackFile,
				onInstallCommandChange: setInstallCommand,
				onBuildCommandChange: setBuildCommand,
				onOutputDirectoryChange: setOutputDirectory,
				onStartCommandChange: setStartCommand,
				onFallbackFileChange: setFallbackFile,
				frameworkKey: framework
			}),
			/* @__PURE__ */ jsx(VariablesSettingsCard, {
				variant: "wizard",
				variables,
				onChange: setVariables
			})
		]
	});
}
function RepositoryConfigPage() {
	const { installationId, repositoryId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(RepositoryConfigView, {
		installationId,
		providerRepositoryId: repositoryId
	});
}
export { RepositoryConfigPage as component };
