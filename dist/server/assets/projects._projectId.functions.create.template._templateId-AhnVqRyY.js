import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
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
import { R as useProject, Y as validateVariables } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Ar as hasUnavailableSpecifications, Or as SpecificationType, Sr as useFunctionTemplate, jr as isSpecificationAllowedInPlan, kr as getFirstEnabledSpecification, xr as useFunctionSpecifications } from "./affiliates-BOg1SHC6.js";
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
import "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./overlay-lock-CIY7GeXu.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import "./FrameworkIcon-DTkSe6r3.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { r as buildVcsAuthUrl } from "./providers-8aVvAoJZ.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as Route$1 } from "./projects._projectId.functions.create.template._templateId-07zMF5Lq.js";
import "./RefreshButton-BA9lQ7jC.js";
import "./WarningAlert-ZIbpbrZO.js";
import "./use-installation-reconnect-BUTVp2Vb.js";
import "./BranchSelector-M6Yn8zIS.js";
import "./RepositoryPicker-BTzJ0oV8.js";
import "./RootDirectoryPicker-CYhbDyP_.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import "./DomainInput-BVoiQ2EY.js";
import { t as FunctionDomainCard } from "./FunctionDomainCard-C_8TS7-G.js";
import { n as resolveTemplatePlaceholder, t as ConnectRepositorySection } from "./ConnectRepositorySection-skrGIyl0.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ID, TemplateReferenceType, VCSDetectionType } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { GitBranch, Key, Loader2, Tag } from "lucide-react";
function TemplateConfigView({ templateId, runtimeFromSearch }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { formData, updateFormData, installations, generateDomain } = useFunctionWizard();
	const { project } = useProject(projectId);
	const { data: template, isLoading: templateLoading } = useFunctionTemplate(projectId, templateId);
	const { data: specificationsData } = useFunctionSpecifications(projectId, SpecificationType.Builds);
	const specifications = useMemo(() => specificationsData?.specifications ?? [], [specificationsData]);
	const [functionName, setFunctionName] = useState("");
	const [functionId, setFunctionId] = useState();
	const [runtime, setRuntime] = useState("");
	const [domain, setDomain] = useState("");
	const [domainValid, setDomainValid] = useState(false);
	const [variables, setVariables] = useState([]);
	const [isPublic, setIsPublic] = useState(true);
	const [specification, setSpecification] = useState("");
	const [isDeploying, setIsDeploying] = useState(false);
	const [gitConnection, setGitConnection] = useState("later");
	const connectRepoValue = useMemo(() => ({
		installationId: formData.installationId,
		providerRepositoryId: formData.providerRepositoryId,
		repositoryName: formData.repositoryName,
		repositoryOwner: formData.repositoryOwner
	}), [
		formData.installationId,
		formData.providerRepositoryId,
		formData.repositoryName,
		formData.repositoryOwner
	]);
	const [connectBranch, setConnectBranch] = useState(formData.providerBranch || "");
	const [connectRootDir, setConnectRootDir] = useState(formData.providerRootDirectory || "./");
	const getVcsAuthUrl = useMemo(() => {
		return (provider = "github") => {
			if (typeof window === "undefined" || !projectId) return "#";
			const redirectUrl = `${window.location.origin}/projects/${projectId}/functions/create`;
			return buildVcsAuthUrl({
				endpoint: getApiEndpoint(project?.region),
				provider,
				projectId,
				successUrl: redirectUrl,
				failureUrl: redirectUrl
			});
		};
	}, [projectId, project?.region]);
	const getGitHubAuthUrl = getVcsAuthUrl("github");
	const handleConnectRepoValueChange = (next) => {
		updateFormData({
			installationId: next.installationId,
			providerRepositoryId: next.providerRepositoryId,
			repositoryName: next.repositoryName,
			repositoryOwner: next.repositoryOwner
		});
	};
	useEffect(() => {
		if (specifications.length > 0 && !specification) {
			const first = getFirstEnabledSpecification(specifications);
			if (first?.slug) setSpecification(first.slug);
		}
	}, [specifications, specification]);
	useEffect(() => {
		if (template) {
			if (!functionName) setFunctionName(template.name);
			if (template.variables?.length && variables.length === 0) {
				const context = {
					apiEndpoint: getApiEndpoint(project?.region),
					projectId: projectId ?? "",
					projectName: project?.name ?? ""
				};
				setVariables(template.variables.map((v) => ({
					key: v.name,
					value: resolveTemplatePlaceholder(v.value || "", context),
					secret: v.secret || false
				})));
			}
			const defaultRuntimeName = (template.runtimes?.[0])?.name ?? (template.runtimes?.[0])?.key;
			if (defaultRuntimeName && !runtime) setRuntime((runtimeFromSearch && (() => {
				const base = runtimeFromSearch.toLowerCase().split("-")[0];
				const matching = (template.runtimes ?? []).filter((t$1) => {
					return (t$1.name ?? t$1.key ?? "").toLowerCase().split("-")[0] === base;
				});
				if (matching.length === 0) return runtimeFromSearch;
				if (matching.length === 1) {
					const r = matching[0];
					return r.name ?? r.key;
				}
				const getVersion = (r) => {
					return (r.name ?? r.key ?? "").split("-").slice(1).join("-").split(".").map((s) => parseInt(s, 10) || 0);
				};
				const latest = matching.reduce((a, b) => {
					const va = getVersion(a);
					const vb = getVersion(b);
					for (let i = 0; i < Math.max(va.length, vb.length); i++) {
						const na = va[i] ?? 0;
						const nb = vb[i] ?? 0;
						if (na !== nb) return nb > na ? b : a;
					}
					return b;
				});
				return latest.name ?? latest.key;
			})()) ?? defaultRuntimeName);
		}
	}, [template, runtimeFromSearch]);
	useEffect(() => {
		if (functionName && !domain) setDomain(generateDomain(functionName));
	}, [functionName, generateDomain]);
	const handleDeploy = async () => {
		if (!projectId || !template) {
			toast.error(t("Template not loaded"));
			return;
		}
		if (!functionName || !runtime) {
			toast.error(t("Please fill in function name and runtime"));
			return;
		}
		if (!domain.trim()) {
			toast.error(t("Please enter a domain"));
			return;
		}
		if (gitConnection === "now") {
			if (!formData.installationId || !formData.providerRepositoryId) {
				toast.error(t("Please select a repository"));
				return;
			}
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
		const selectedRuntimeObj = (template.runtimes ?? []).find((r) => r.name === runtime || r.key === runtime);
		const connectNow = gitConnection === "now" && formData.installationId && formData.providerRepositoryId;
		try {
			await projectSdk.functions.create({
				functionId: finalFunctionId,
				name: functionName.trim(),
				runtime,
				execute: isPublic ? ["any"] : template.permissions?.length ? template.permissions : [],
				events: template.events?.length ? template.events : void 0,
				schedule: template.cron || void 0,
				timeout: template.timeout ?? void 0,
				enabled: true,
				entrypoint: selectedRuntimeObj?.entrypoint,
				commands: selectedRuntimeObj?.commands,
				scopes: template.scopes?.length ? template.scopes : void 0,
				...connectNow ? {
					installationId: formData.installationId,
					providerRepositoryId: formData.providerRepositoryId,
					providerBranch: connectBranch,
					providerRootDirectory: connectRootDir || "./",
					providerSilentMode: false
				} : {
					providerBranch: "main",
					providerSilentMode: false,
					providerRootDirectory: "./"
				},
				buildSpecification: specification || void 0
			});
			await projectSdk.proxy.createFunctionRule({
				domain: domainTrimmed,
				functionId: finalFunctionId
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
			if (!template.providerRepositoryId || !template.providerOwner) {
				toast.error(t("Template is missing repository information"));
				setIsDeploying(false);
				return;
			}
			const rootDirectory = selectedRuntimeObj?.providerRootDirectory?.trim() || (runtime ? `${runtime.split("-")[0]}/starter` : "./");
			const reference = template.providerVersion?.trim() || "main";
			const deployment = await projectSdk.functions.createTemplateDeployment({
				functionId: finalFunctionId,
				repository: template.providerRepositoryId,
				owner: template.providerOwner,
				rootDirectory,
				type: TemplateReferenceType.Tag,
				reference,
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
			toast.error(err instanceof Error ? err.message : t("Failed to create function"));
			setIsDeploying(false);
		}
	};
	const templateRuntimes = template?.runtimes ?? [];
	const sidebarContent = template ? /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-5 py-4 border-b border-border/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
						children: /* @__PURE__ */ jsx(RuntimeIcon, {
							runtime,
							className: "h-5 w-5 text-muted-foreground"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[13px] font-semibold text-foreground truncate",
							children: template.name
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground truncate",
							children: template.tagline || (template.providerOwner && template.providerRepositoryId ? `${template.providerOwner}/${template.providerRepositoryId}` : t("Template"))
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-5 py-4 space-y-3",
				children: [
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
					template.providerVersion && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Tag, { className: "h-3.5 w-3.5" }), t("Version")]
						}), /* @__PURE__ */ jsx("code", {
							className: "text-[12px] font-mono text-foreground bg-muted/50 px-2 py-0.5 rounded",
							children: template.providerVersion
						})]
					}),
					(variables.length > 0 || (template.variables?.length ?? 0) > 0) && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("Variables")]
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-foreground",
							children: [
								variables.length,
								" ",
								t("configured"),
								template.variables?.length ? ` · ${template.variables.length} ${t("in template")}` : ""
							]
						})]
					})
				]
			}),
			template.providerRepositoryId && /* @__PURE__ */ jsx("div", {
				className: "px-5 py-4 border-t border-border/50 flex gap-2",
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "flex-1 h-9 text-[13px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: `https://github.com/${template.providerOwner || "appwrite"}/${template.providerRepositoryId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(GitBranch, { className: "me-1.5 h-4 w-4" }), t("View source")]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-5 py-3 bg-muted/20 border-t border-border/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: t("Ready to deploy")
					})]
				})
			})
		]
	}) : null;
	if (templateLoading || !template) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create function"),
		fallbackPath: `/projects/${projectId}/functions/create`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center py-12",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
		})
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
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleDeploy,
			disabled: isDeploying || !functionName || !runtime || !domain.trim() || !domainValid || gitConnection === "now" && (!formData.providerRepositoryId || !formData.installationId),
			children: t("Create and deploy")
		})] }),
		children: [
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
								}), /* @__PURE__ */ jsxs(Select, {
									value: runtime,
									onValueChange: setRuntime,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select runtime") })
									}), /* @__PURE__ */ jsx(SelectContent, { children: templateRuntimes.map((r) => {
										const rName = r.name || r.key;
										if (!rName) return null;
										return /* @__PURE__ */ jsx(SelectItem, {
											value: rName,
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(RuntimeIcon, {
													runtime: rName,
													size: "sm"
												}), rName]
											})
										}, rName);
									}) })]
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
			/* @__PURE__ */ jsxs(RadioGroup, {
				value: gitConnection,
				onValueChange: (value) => setGitConnection(value),
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "git-now",
					className: cn("relative flex items-start cursor-pointer rounded-xl border p-5 transition-all", gitConnection === "now" ? "border-foreground bg-card/80" : "border-border bg-card/50 hover:border-border/80 hover:bg-card/60"),
					children: [/* @__PURE__ */ jsx(RadioGroupItem, {
						value: "now",
						id: "git-now",
						className: "mt-1 shrink-0"
					}), /* @__PURE__ */ jsxs("div", {
						className: "ms-3 flex-1",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[14px] font-medium text-foreground",
							children: t("Connect your repository")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-[12px] text-muted-foreground leading-relaxed",
							children: t("Clone this template into a new Git repository or link it to an existing one.")
						})]
					})]
				}), /* @__PURE__ */ jsxs(Label, {
					htmlFor: "git-later",
					className: cn("relative flex items-start cursor-pointer rounded-xl border p-5 transition-all", gitConnection === "later" ? "border-foreground bg-card/80" : "border-border bg-card/50 hover:border-border/80 hover:bg-card/60"),
					children: [/* @__PURE__ */ jsx(RadioGroupItem, {
						value: "later",
						id: "git-later",
						className: "mt-1 shrink-0"
					}), /* @__PURE__ */ jsxs("div", {
						className: "ms-3 flex-1",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[14px] font-medium text-foreground",
							children: t("Connect later")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-[12px] text-muted-foreground leading-relaxed",
							children: t("Deploy now and connect your version control later via CLI or Git integration in your function settings.")
						})]
					})]
				})]
			}),
			gitConnection === "now" && /* @__PURE__ */ jsx(ConnectRepositorySection, {
				projectId,
				installations,
				getGitHubAuthUrl,
				getVcsAuthUrl,
				defaultRepositoryName: functionName || template?.name || "",
				detectionType: VCSDetectionType.Runtime,
				value: connectRepoValue,
				onValueChange: handleConnectRepoValueChange,
				showBranchAndRoot: !!(formData.providerRepositoryId && formData.installationId),
				branch: connectBranch,
				onBranchChange: (b) => {
					setConnectBranch(b);
					updateFormData({ providerBranch: b });
				},
				rootDirectory: connectRootDir,
				onRootDirectoryChange: (r) => {
					setConnectRootDir(r);
					updateFormData({ providerRootDirectory: r });
				},
				branchLabelTooltip: t("Production branch for the repo linked to the function. Successful deployments from this branch get activated automatically."),
				rootDirectoryLabelTooltip: t("Path to function code in the linked repo. Use the repository root (./) or a subdirectory that contains your function code."),
				rootDirectoryDescription: t("Choose the directory containing your function code"),
				emptyStateTitle: t("Connect Git repository"),
				emptyStateDescription: t("Create and deploy a Function with a connected git repository."),
				className: "mb-6"
			}),
			template.variables && template.variables.length > 0 ? (() => {
				const requiredKeys = new Set(template.variables.filter((v) => v.required).map((v) => v.name));
				const optionalKeys = new Set(template.variables.filter((v) => !v.required).map((v) => v.name));
				const requiredVars = variables.filter((v) => requiredKeys.has(v.key));
				const optionalVars = variables.filter((v) => optionalKeys.has(v.key));
				const renderVariable = (variable, indexInFull) => {
					const templateVar = template.variables?.find((v) => v.name === variable.key);
					return /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs(Label, {
									className: "text-[13px] font-mono",
									children: [variable.key, templateVar?.required && /* @__PURE__ */ jsx("span", {
										className: "text-destructive ms-1",
										children: "*"
									})]
								}), templateVar?.secret && /* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-muted-foreground",
									children: t("Secret")
								})]
							}),
							templateVar?.description && /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								dangerouslySetInnerHTML: { __html: templateVar.description }
							}),
							/* @__PURE__ */ jsx(Input, {
								value: variable.value,
								onChange: (e) => {
									const newVars = [...variables];
									newVars[indexInFull] = {
										...variable,
										value: e.target.value
									};
									setVariables(newVars);
								},
								placeholder: templateVar?.placeholder || `${t("Enter")} ${variable.key}`,
								type: templateVar?.secret ? "password" : "text",
								className: "h-9 text-[13px] font-mono"
							})
						]
					}, variable.key);
				};
				return /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Template variables")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-1",
								children: t("Configure the environment variables for this template")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: requiredVars.map((variable) => {
									return renderVariable(variable, variables.findIndex((v) => v.key === variable.key));
								})
							}), optionalVars.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 border-t border-border pt-4",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "text-[13px] font-medium text-muted-foreground mb-3",
									children: [
										t("Optional variables"),
										" (",
										optionalVars.length,
										")"
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: optionalVars.map((variable) => {
										return renderVariable(variable, variables.findIndex((v) => v.key === variable.key));
									})
								})]
							})]
						})
					]
				});
			})() : /* @__PURE__ */ jsx(VariablesSettingsCard, {
				variant: "wizard",
				variables,
				onChange: setVariables
			})
		]
	});
}
function TemplateConfigPage() {
	const { templateId } = Route$1.useParams();
	const { runtime: runtimeFromSearch } = Route$1.useSearch({ strict: false });
	return /* @__PURE__ */ jsx(TemplateConfigView, {
		templateId,
		runtimeFromSearch
	});
}
export { TemplateConfigPage as component };
