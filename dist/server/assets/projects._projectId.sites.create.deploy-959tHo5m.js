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
import { Y as validateVariables } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { an as useCreateSite, ln as useCreateTemplateDeployment, on as useCreateSiteDomain } from "./affiliates-BOg1SHC6.js";
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
import "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./overlay-lock-CIY7GeXu.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import "./accordion-DmQmnCa5.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as Route$1 } from "./projects._projectId.sites.create.deploy-DLU1vkSf.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import "./DomainInput-BVoiQ2EY.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { t as DomainInput } from "./DomainInput-BQ94HylF.js";
import { t as BuildSettings } from "./BuildSettings-Bicajv6M.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink } from "lucide-react";
function GitHubIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
	});
}
function QuickDeployView({ repo, owner, framework: initialFramework, branch: initialBranch, root: initialRoot, installCommand: initialInstall, buildCommand: initialBuild, startCommand: initialStart, outputDirectory: initialOutput, envKeys }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { updateFormData, frameworks, getFramework, getFrameworkDefaults, generateDomain, setCurrentPath } = useWizard();
	useEffect(() => {
		setCurrentPath("deploy");
	}, [setCurrentPath]);
	const envKeysList = useMemo(() => {
		if (!envKeys) return [];
		return envKeys.split(",").map((k) => k.trim()).filter(Boolean);
	}, [envKeys]);
	const [siteName, setSiteName] = useState(repo || "");
	const [siteId, setSiteId] = useState();
	const [framework, setFramework] = useState(initialFramework || "");
	const [rootDirectory, setRootDirectory] = useState(initialRoot || "./");
	const [installCommand, setInstallCommand] = useState(initialInstall || "");
	const [buildCommand, setBuildCommand] = useState(initialBuild || "");
	const [outputDirectory, setOutputDirectory] = useState(initialOutput || "");
	const [startCommand, setStartCommand] = useState(initialStart || "");
	const [variables, setVariables] = useState(envKeysList.map((key) => ({
		key,
		value: "",
		secret: false
	})));
	const [domain, setDomain] = useState("");
	const [domainValid, setDomainValid] = useState(false);
	const [isDeploying, setIsDeploying] = useState(false);
	useEffect(() => {
		if (framework && !initialInstall && !initialBuild && !initialStart && !initialOutput) {
			const defaults = getFrameworkDefaults(framework);
			setInstallCommand(defaults.installCommand);
			setBuildCommand(defaults.buildCommand);
			setOutputDirectory(defaults.outputDirectory);
		}
	}, [
		framework,
		getFramework,
		getFrameworkDefaults,
		initialInstall,
		initialBuild,
		initialStart,
		initialOutput
	]);
	useEffect(() => {
		if (siteName && !domain) setDomain(generateDomain(siteName));
	}, [siteName, generateDomain]);
	const createSiteMutation = useCreateSite(projectId);
	const createDomainMutation = useCreateSiteDomain(projectId);
	const createDeploymentMutation = useCreateTemplateDeployment(projectId);
	const handleDeploy = async () => {
		if (!projectId || !siteName || !framework || !repo || !owner) {
			toast.error(t("Please fill in all required fields"));
			return;
		}
		if (!domainValid) {
			toast.error(t("Please enter a valid domain"));
			return;
		}
		const validationError = validateVariables(variables.filter((v) => v.value));
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
				installCommand: installCommand || defaults.installCommand,
				buildCommand: buildCommand || defaults.buildCommand,
				startCommand: startCommand || void 0,
				outputDirectory: outputDirectory || defaults.outputDirectory,
				adapter: defaults.adapter || void 0
			});
			if (domain) await createDomainMutation.mutateAsync({
				domain,
				siteId: site.$id
			});
			const varsWithValues = variables.filter((v) => v.value);
			if (varsWithValues.length > 0) {
				const projectSdk = sdk.forProject(projectId);
				await Promise.all(varsWithValues.map((v) => projectSdk.sites.createVariable({
					siteId: site.$id,
					variableId: ID.unique(),
					key: v.key,
					value: v.value,
					secret: v.secret
				})));
			}
			const deployment = await createDeploymentMutation.mutateAsync({
				siteId: site.$id,
				repository: repo,
				owner,
				rootDirectory,
				type: "tag",
				reference: initialBranch || "main",
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
	const repoUrl = repo && owner ? `https://github.com/${owner}/${repo}` : null;
	const sidebarContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [repo && owner && /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 p-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 mb-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(GitHubIcon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[13px] font-medium text-foreground truncate",
					children: [
						owner,
						"/",
						repo
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] text-muted-foreground",
					children: t("GitHub Repository")
				})] })]
			}), repoUrl && /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "w-full h-8 text-[12px]",
				asChild: true,
				children: /* @__PURE__ */ jsxs("a", {
					href: repoUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("View on GitHub")]
				})
			})]
		}), frameworkInfo && /* @__PURE__ */ jsx("div", {
			className: "rounded-xl border border-border bg-card/50 p-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(FrameworkIcon, {
						framework,
						size: "sm"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("Framework")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: frameworkInfo.name
				})] })]
			})
		})]
	});
	if (!repo || !owner) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create site"),
		fallbackPath: `/projects/${projectId}/sites`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 p-8 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mb-4",
				children: t("Repository information is missing from the URL.")
			}), /* @__PURE__ */ jsx(Button, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Link, {
					to: "/projects/$projectId/sites/create/repositories",
					params: { projectId },
					children: t("Import from Git")
				})
			})]
		})
	});
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Create site"),
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
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleDeploy,
			disabled: isDeploying || !siteName || !framework || !domainValid || createSiteMutation.isPending,
			children: t("Deploy")
		})] }),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card/50 p-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground",
						children: /* @__PURE__ */ jsx(GitHubIcon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] font-medium text-foreground",
							children: [
								owner,
								"/",
								repo
							]
						}), repoUrl && /* @__PURE__ */ jsx("a", {
							href: repoUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-[11px] text-muted-foreground hover:text-foreground",
							children: t("View repository")
						})]
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
								}), /* @__PURE__ */ jsxs(Select, {
									value: framework,
									onValueChange: (value) => {
										setFramework(value);
										const defaults = getFrameworkDefaults(value);
										setInstallCommand(defaults.installCommand);
										setBuildCommand(defaults.buildCommand);
										setOutputDirectory(defaults.outputDirectory);
									},
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 text-[13px]",
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
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Git configuration")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 space-y-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "root-directory",
								className: "text-[13px]",
								children: t("Root directory")
							}), /* @__PURE__ */ jsx(Input, {
								id: "root-directory",
								value: rootDirectory,
								onChange: (e) => setRootDirectory(e.target.value),
								placeholder: "./",
								className: "h-9 font-mono text-[13px]"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(BuildSettings, {
				installCommand,
				buildCommand,
				outputDirectory,
				startCommand,
				onInstallCommandChange: setInstallCommand,
				onBuildCommandChange: setBuildCommand,
				onOutputDirectoryChange: setOutputDirectory,
				onStartCommandChange: setStartCommand,
				frameworkKey: framework,
				defaultOpen: true
			}),
			/* @__PURE__ */ jsx(VariablesSettingsCard, {
				variant: "wizard",
				variables,
				onChange: setVariables,
				disabled: isDeploying
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
			})
		]
	});
}
function QuickDeployPage() {
	return /* @__PURE__ */ jsx(QuickDeployView, { ...Route$1.useSearch() });
}
export { QuickDeployPage as component };
