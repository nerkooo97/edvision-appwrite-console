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
import { R as useProject, Y as validateVariables } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Ar as hasUnavailableSpecifications, Er as useProjectRuntimes, Or as SpecificationType, jr as isSpecificationAllowedInPlan, kr as getFirstEnabledSpecification, xr as useFunctionSpecifications } from "./affiliates-BOg1SHC6.js";
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
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as Route$1 } from "./projects._projectId.functions.create.repository._repository-OCVh6zXF.js";
import "./WarningAlert-ZIbpbrZO.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { t as RootDirectoryPicker } from "./RootDirectoryPicker-CYhbDyP_.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import "./DomainInput-BVoiQ2EY.js";
import { t as FunctionDomainCard } from "./FunctionDomainCard-C_8TS7-G.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ID, VCSDetectionType, VCSReferenceType } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, FolderOpen, GitBranch, Globe, Key, Loader2, Lock } from "lucide-react";
function RepositoryConfigView({ repositoryParam, installationIdFromSearch, providerRepositoryIdFromSearch }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { formData, updateFormData, generateDomain } = useFunctionWizard();
	const [repoOwner, repoName] = useMemo(() => {
		const parts = decodeURIComponent(repositoryParam).split("/");
		return [parts[0] || "", parts[1] || ""];
	}, [repositoryParam]);
	const installationId = formData.installationId || installationIdFromSearch;
	const providerRepositoryId = formData.providerRepositoryId || providerRepositoryIdFromSearch;
	useEffect(() => {
		if (installationIdFromSearch && !formData.installationId) updateFormData({ installationId: installationIdFromSearch });
		if (providerRepositoryIdFromSearch && !formData.providerRepositoryId) updateFormData({ providerRepositoryId: providerRepositoryIdFromSearch });
	}, [
		installationIdFromSearch,
		providerRepositoryIdFromSearch,
		formData.installationId,
		formData.providerRepositoryId,
		updateFormData
	]);
	const [functionName, setFunctionName] = useState(formData.functionName || repoName);
	const [functionId, setFunctionId] = useState();
	const [runtime, setRuntime] = useState(formData.runtime || "");
	const [entrypoint, setEntrypoint] = useState("");
	const [commands, setCommands] = useState("");
	const [branch, setBranch] = useState("");
	const [rootDirectory, setRootDirectory] = useState("./");
	const [silentMode, setSilentMode] = useState(false);
	const [variables, setVariables] = useState([]);
	const [domain, setDomain] = useState("");
	const [domainValid, setDomainValid] = useState(false);
	const [isPublic, setIsPublic] = useState(true);
	const [specification, setSpecification] = useState("");
	const [isDeploying, setIsDeploying] = useState(false);
	const { data: repository, error: repositoryError, isFetching: repositoryFetching, refetch: refetchRepository } = useRepository(projectId, installationId || null, providerRepositoryId || null);
	const { Icon: RepositoryProviderIcon, label: repositoryProviderLabel } = getVcsProvider(repository?.provider);
	const { data: runtimesData } = useProjectRuntimes(projectId);
	const { data: specificationsData } = useFunctionSpecifications(projectId, SpecificationType.Builds);
	const runtimes = runtimesData?.runtimes ?? [];
	const specifications = useMemo(() => specificationsData?.specifications ?? [], [specificationsData]);
	useEffect(() => {
		if (specifications.length > 0 && !specification) {
			const first = getFirstEnabledSpecification(specifications);
			if (first?.slug) setSpecification(first.slug);
		}
	}, [specifications, specification]);
	const detectRuntimeMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !installationId || !providerRepositoryId) throw new Error("Missing required parameters");
			return await sdk.forProject(projectId).vcs.createRepositoryDetection({
				installationId,
				providerRepositoryId,
				type: VCSDetectionType.Runtime,
				providerRootDirectory: rootDirectory
			});
		},
		onSuccess: (data) => {
			const r = data;
			if (r.runtime) setRuntime(r.runtime);
			if (r.entrypoint != null) setEntrypoint(r.entrypoint);
			if (r.commands != null) setCommands(r.commands);
		}
	});
	useEffect(() => {
		if (installationId && providerRepositoryId && !runtime) detectRuntimeMutation.mutate();
	}, [installationId, providerRepositoryId]);
	const installationErrorKind = getVcsInstallationErrorKind(repositoryError) ?? getVcsInstallationErrorKind(detectRuntimeMutation.error);
	const createBlocked = getVcsInstallationErrorKind(repositoryError) === "reconnect";
	const { provider: installationProvider, organization: installationOrganization, reconnectUrl } = useVcsInstallationReconnect(projectId, installationId);
	const handleInstallationRetry = () => {
		refetchRepository();
		if (installationId && providerRepositoryId) detectRuntimeMutation.mutate();
	};
	useEffect(() => {
		if (functionName && !domain) setDomain(generateDomain(functionName));
	}, [functionName, generateDomain]);
	const handleDeploy = async () => {
		if (!projectId || !functionName || !runtime) {
			toast.error(t("Please fill in function name and runtime"));
			return;
		}
		if (!domain.trim()) {
			toast.error(t("Please enter a domain"));
			return;
		}
		if (!installationId || !providerRepositoryId) {
			toast.error(t("Missing repository connection"));
			return;
		}
		const validationError = validateVariables(variables.filter((v) => v.key.trim()));
		if (validationError) {
			toast.error(validationError);
			return;
		}
		setIsDeploying(true);
		const projectSdk = sdk.forProject(projectId);
		const finalFunctionId = functionId?.trim() || ID.unique();
		const domainTrimmed = domain.toLowerCase().trim();
		try {
			await projectSdk.functions.create({
				functionId: finalFunctionId,
				name: functionName.trim(),
				runtime,
				execute: isPublic ? ["any"] : [],
				enabled: true,
				entrypoint: entrypoint.trim() || void 0,
				commands: commands.trim() || void 0,
				installationId,
				providerRepositoryId,
				providerBranch: branch,
				providerSilentMode: silentMode,
				providerRootDirectory: rootDirectory || void 0,
				buildSpecification: specification || void 0
			});
			await projectSdk.proxy.createFunctionRule({
				domain: domainTrimmed,
				functionId: finalFunctionId,
				branch
			});
			for (const v of variables) {
				if (!v.key.trim()) continue;
				await projectSdk.functions.createVariable({
					functionId: finalFunctionId,
					variableId: ID.unique(),
					key: v.key.trim(),
					value: v.value,
					secret: v.secret
				});
			}
			const deployment = await projectSdk.functions.createVcsDeployment({
				functionId: finalFunctionId,
				type: VCSReferenceType.Branch,
				reference: branch,
				activate: true
			});
			updateFormData({
				createdFunctionId: finalFunctionId,
				createdDeploymentId: deployment.$id
			});
			await queryClient.refetchQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
			navigate({
				to: "/projects/$projectId/functions/create/deploying",
				params: { projectId },
				search: {
					functionId: finalFunctionId,
					deploymentId: deployment.$id
				}
			});
		} catch (err) {
			toast.error(err?.message || t("Failed to create function"));
			setIsDeploying(false);
		}
	};
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
								children: /* @__PURE__ */ jsx(RuntimeIcon, {
									runtime,
									className: "h-5 w-5 text-muted-foreground"
								})
							}), /* @__PURE__ */ jsx("div", {
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
									children: repository?.name || repoName
								}), repository?.private !== void 0 && (repository.private ? /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3 text-muted-foreground shrink-0" }))]
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: [repository ? `${repository.organization}/${repository.name}` : `${repoOwner}/${repoName}`, repository?.pushedAt && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
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
					runtime && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: t("Runtime")
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-foreground",
							children: [/* @__PURE__ */ jsx(RuntimeIcon, {
								runtime,
								size: "sm"
							}), /* @__PURE__ */ jsx("span", {
								className: "truncate max-w-[100px]",
								children: runtime
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
					children: [/* @__PURE__ */ jsx("div", { className: cn("h-2 w-2 rounded-full", installationErrorKind ? "bg-amber-500" : "bg-emerald-500 animate-pulse") }), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: installationErrorKind ? t("Git connection needs attention") : t("Ready to deploy")
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Create function"),
		showBackButton: true,
		backButtonLabel: t("Back"),
		fallbackPath: `/projects/${projectId}/functions`,
		onClose: () => navigate({
			to: "/projects/$projectId/functions",
			params: { projectId }
		}),
		onBack: () => navigate({
			to: "/projects/$projectId/functions/create",
			params: { projectId }
		}),
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		footerAlign: "right",
		sidebar: sidebarContent,
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			onClick: () => navigate({
				to: "/projects/$projectId/functions",
				params: { projectId }
			}),
			disabled: isDeploying,
			children: t("Cancel")
		}), createBlocked ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: "inline-block",
				children: /* @__PURE__ */ jsx(Button, {
					disabled: true,
					children: t("Create and deploy")
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, { children: t("Reconnect the Git installation before creating this function.") })] }) : /* @__PURE__ */ jsx(Button, {
			onClick: handleDeploy,
			disabled: isDeploying || !functionName || !runtime || !domain.trim() || !domainValid,
			children: t("Create and deploy")
		})] }),
		children: [
			installationErrorKind && /* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
				kind: installationErrorKind,
				provider: installationProvider,
				organization: installationOrganization,
				reconnectUrl,
				onRetry: handleInstallationRetry,
				isRetrying: repositoryFetching || detectRuntimeMutation.isPending,
				className: "mb-6",
				children: t("Appwrite could not read this repository, so the runtime was not detected and this function cannot be created from Git yet.")
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 p-4 mb-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
							children: /* @__PURE__ */ jsx(RepositoryProviderIcon, { className: "h-5 w-5 text-muted-foreground" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] font-medium text-foreground",
							children: [
								repoOwner,
								"/",
								repoName
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground",
							children: t(`${repositoryProviderLabel} repository`)
						})] })]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						className: "h-8 text-[12px]",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/projects/$projectId/functions/create",
							params: { projectId },
							children: t("Change")
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden mb-6",
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
									htmlFor: "function-name",
									className: "text-[13px]",
									children: t("Function name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "function-name",
									value: functionName,
									onChange: (e) => setFunctionName(e.target.value),
									placeholder: t("My function"),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px]",
									children: t("Function ID")
								}), /* @__PURE__ */ jsx(IdInput, {
									value: functionId,
									onChange: setFunctionId,
									placeholder: t("Auto-generated")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px]",
									children: t("Runtime")
								}), detectRuntimeMutation.isPending ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: t("Detecting runtime...")
									})]
								}) : /* @__PURE__ */ jsxs(Select, {
									value: runtime,
									onValueChange: setRuntime,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select runtime") })
									}), /* @__PURE__ */ jsx(SelectContent, { children: runtimes.map((r) => /* @__PURE__ */ jsx(SelectItem, {
										value: r.$id || r.key,
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(RuntimeIcon, {
												runtime: r.$id || r.key,
												size: "sm"
											}), /* @__PURE__ */ jsxs("span", { children: [
												r.name,
												" ",
												r.version
											] })]
										})
									}, r.$id)) })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px]",
									children: t("Public")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-muted-foreground",
									children: t("Allow anyone to execute this function (execute role: any)")
								})] }), /* @__PURE__ */ jsx(Switch, {
									checked: isPublic,
									onCheckedChange: setIsPublic
								})]
							}),
							specifications.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "specification",
										className: "text-[13px]",
										children: t("Compute")
									}),
									/* @__PURE__ */ jsxs(Select, {
										value: specification || void 0,
										onValueChange: setSpecification,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											id: "specification",
											className: "h-9 text-[13px]",
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select specification") })
										}), /* @__PURE__ */ jsx(SelectContent, { children: specifications.filter((s) => s.slug?.trim()).map((spec) => /* @__PURE__ */ jsxs(SelectItem, {
											value: spec.slug,
											disabled: !isSpecificationAllowedInPlan(spec),
											children: [
												spec.cpus,
												" CPU, ",
												spec.memory,
												"MB RAM"
											]
										}, spec.slug)) })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: t("Runtime specification for your function")
									}),
									hasUnavailableSpecifications(specifications) && /* @__PURE__ */ jsxs("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: project?.teamId }),
											" ",
											t("to unlock additional specifications.")
										]
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(FunctionDomainCard, {
				domain,
				setDomain,
				domainValid,
				setDomainValid
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden mb-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Production branch")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsx(BranchSelector, {
								projectId,
								installationId,
								providerRepositoryId,
								value: branch,
								onChange: setBranch,
								label: t("Branch")
							}),
							/* @__PURE__ */ jsx(RootDirectoryPicker, {
								projectId,
								installationId,
								providerRepositoryId,
								branch: branch || "main",
								value: rootDirectory,
								onChange: setRootDirectory,
								label: t("Root directory"),
								description: t("Directory containing your function code")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px]",
									children: t("Silent mode")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-muted-foreground",
									children: t("Disable automated comments on repository commits")
								})] }), /* @__PURE__ */ jsx(Switch, {
									checked: silentMode,
									onCheckedChange: setSilentMode
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(Accordion, {
				type: "single",
				collapsible: true,
				className: "rounded-xl border border-border bg-card/50 overflow-hidden mb-6",
				children: /* @__PURE__ */ jsxs(AccordionItem, {
					value: "build-settings",
					className: "border-none",
					children: [/* @__PURE__ */ jsx(AccordionTrigger, {
						className: "px-6 py-4 hover:no-underline hover:bg-transparent cursor-pointer",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Build")
						})
					}), /* @__PURE__ */ jsx(AccordionContent, {
						className: "px-6 pb-4 pt-0 border-t border-border",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4 pt-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "entrypoint",
									className: "text-[13px]",
									children: t("Entrypoint")
								}), /* @__PURE__ */ jsx(Input, {
									id: "entrypoint",
									value: entrypoint,
									onChange: (e) => setEntrypoint(e.target.value),
									placeholder: "src/main.js",
									className: "h-9 text-[13px] font-mono"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "commands",
									className: "text-[13px]",
									children: t("Build commands")
								}), /* @__PURE__ */ jsx(Input, {
									id: "commands",
									value: commands,
									onChange: (e) => setCommands(e.target.value),
									placeholder: "npm install && npm run build",
									className: "h-9 text-[13px] font-mono"
								})]
							})]
						})
					})]
				})
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
	const { repository } = Route$1.useParams();
	const search = Route$1.useSearch({ strict: false });
	return /* @__PURE__ */ jsx(RepositoryConfigView, {
		repositoryParam: repository,
		installationIdFromSearch: search?.installationId,
		providerRepositoryIdFromSearch: search?.providerRepositoryId
	});
}
export { RepositoryConfigPage as component };
