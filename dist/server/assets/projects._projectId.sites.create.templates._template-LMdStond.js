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
import { Mn as getSiteTemplateScreenshotUrl, Sn as useSiteTemplate, an as useCreateSite, ln as useCreateTemplateDeployment, on as useCreateSiteDomain } from "./affiliates-BOg1SHC6.js";
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
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { r as buildVcsAuthUrl } from "./providers-8aVvAoJZ.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./LanguageIcon-C0AhXLp0.js";
import "./RuntimeIcon-Dt6YMTy1.js";
import { t as Route$1 } from "./projects._projectId.sites.create.templates._template-D3yBBBVz.js";
import "./RefreshButton-BA9lQ7jC.js";
import "./WarningAlert-ZIbpbrZO.js";
import "./use-installation-reconnect-BUTVp2Vb.js";
import "./BranchSelector-M6Yn8zIS.js";
import "./RepositoryPicker-BTzJ0oV8.js";
import "./RootDirectoryPicker-CYhbDyP_.js";
import "./DomainInput-BVoiQ2EY.js";
import { n as resolveTemplatePlaceholder, t as ConnectRepositorySection } from "./ConnectRepositorySection-skrGIyl0.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { t as DomainInput } from "./DomainInput-BQ94HylF.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ID, VCSDetectionType } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, FolderOpen, GitBranch, Key, Layers, LayoutTemplate, Loader2, Tag } from "lucide-react";
import { useTheme } from "next-themes";
function FadeImage({ src, alt, className }) {
	const [loaded, setLoaded] = useState(false);
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		className: cn(className, "transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0"),
		onLoad: () => setLoaded(true)
	});
}
function getFrameworkString(framework) {
	if (!framework) return "";
	if (typeof framework === "string") return framework;
	if (typeof framework === "object" && framework !== null) {
		const obj = framework;
		if (typeof obj.key === "string") return obj.key;
		if (typeof obj.name === "string") return obj.name;
		if (typeof obj.id === "string") return obj.id;
	}
	return "";
}
function TemplateConfigView({ templateParam }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { theme, resolvedTheme } = useTheme();
	const { formData, updateFormData, frameworks, getFrameworkDefaults, generateDomain, installations } = useWizard();
	const { data: template, isLoading: templateLoading } = useSiteTemplate(projectId, decodeURIComponent(templateParam));
	const { project } = useProject(projectId);
	const [siteName, setSiteName] = useState(formData.siteName || "");
	const [siteId, setSiteId] = useState(formData.siteId);
	const [framework, setFramework] = useState(formData.framework || "");
	const [gitConnection, setGitConnection] = useState("later");
	const [variables, setVariables] = useState(formData.variables || []);
	const [domain, setDomain] = useState(formData.domain || "");
	const [domainValid, setDomainValid] = useState(formData.domainValid || false);
	const [isDeploying, setIsDeploying] = useState(false);
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
			const redirectUrl = `${window.location.origin}/projects/${projectId}/sites/create`;
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
	const isDark = useMemo(() => {
		if (typeof window === "undefined") return true;
		return resolvedTheme === "dark" || resolvedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches || theme === "dark";
	}, [theme, resolvedTheme]);
	useEffect(() => {
		if (template) {
			if (!siteName) setSiteName(template.name);
			if (!framework && template.frameworks?.length) setFramework(getFrameworkString(template.frameworks[0]));
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
		}
	}, [template]);
	useEffect(() => {
		if (siteName && !domain) setDomain(generateDomain(siteName));
	}, [siteName, generateDomain]);
	const screenshotUrl = useMemo(() => {
		if (!template) return null;
		return getSiteTemplateScreenshotUrl(template, isDark) ?? null;
	}, [template, isDark]);
	const createSiteMutation = useCreateSite(projectId);
	const createDomainMutation = useCreateSiteDomain(projectId);
	const createTemplateDeploymentMutation = useCreateTemplateDeployment(projectId);
	const handleConnectRepoValueChange = (next) => {
		updateFormData({
			installationId: next.installationId,
			providerRepositoryId: next.providerRepositoryId,
			repositoryName: next.repositoryName,
			repositoryOwner: next.repositoryOwner
		});
	};
	const handleDeploy = async () => {
		if (!projectId || !template || !siteName || !framework) {
			toast.error(t("Please fill in all required fields"));
			return;
		}
		if (!domainValid) {
			toast.error(t("Please enter a valid domain"));
			return;
		}
		if (gitConnection === "now") {
			if (!formData.installationId || !formData.providerRepositoryId) {
				toast.error(t("Please select a repository"));
				return;
			}
		}
		const validationError = validateVariables(variables.filter((v) => v.value));
		if (validationError) {
			toast.error(validationError);
			return;
		}
		setIsDeploying(true);
		try {
			const sdkDefaults = getFrameworkDefaults(framework);
			const defaults = templateFramework ? {
				installCommand: templateFramework.installCommand,
				buildCommand: templateFramework.buildCommand,
				outputDirectory: templateFramework.outputDirectory,
				buildRuntime: templateFramework.buildRuntime,
				adapter: templateFramework.adapter,
				fallbackFile: templateFramework.fallbackFile
			} : sdkDefaults;
			const connectNow = gitConnection === "now" && formData.installationId && formData.providerRepositoryId;
			const site = await createSiteMutation.mutateAsync({
				siteId: siteId || void 0,
				name: siteName,
				framework,
				installCommand: defaults.installCommand,
				buildCommand: defaults.buildCommand,
				startCommand: void 0,
				outputDirectory: defaults.outputDirectory,
				buildRuntime: defaults.buildRuntime ?? "node-22",
				adapter: defaults.adapter ?? "",
				fallbackFile: defaults.fallbackFile ?? "",
				...connectNow && {
					installationId: formData.installationId,
					providerRepositoryId: formData.providerRepositoryId,
					providerBranch: connectBranch,
					providerRootDirectory: connectRootDir || void 0,
					providerSilentMode: false
				}
			});
			if (domain) await createDomainMutation.mutateAsync({
				domain,
				siteId: site.$id
			});
			if (variables.length > 0) {
				const projectSdk = sdk.forProject(projectId);
				await Promise.all(variables.filter((v) => v.value).map((v) => projectSdk.sites.createVariable({
					siteId: site.$id,
					variableId: ID.unique(),
					key: v.key,
					value: v.value,
					secret: v.secret
				})));
			}
			if (!template.providerRepositoryId || !template.providerOwner) {
				toast.error(t("Template is missing repository information"));
				setIsDeploying(false);
				return;
			}
			const deployment = await createTemplateDeploymentMutation.mutateAsync({
				siteId: site.$id,
				repository: template.providerRepositoryId,
				owner: template.providerOwner,
				rootDirectory: templateFramework?.providerRootDirectory ?? "./",
				type: "tag",
				reference: template.providerVersion || "main",
				activate: true
			});
			updateFormData({
				createdSiteId: site.$id,
				createdDeploymentId: deployment?.$id
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
					deploymentId: deployment?.$id ?? ""
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
	const templateFramework = useMemo(() => {
		if (!template?.frameworks?.length || !framework) return null;
		return template.frameworks.find((f) => getFrameworkString(f) === framework) ?? template.frameworks[0];
	}, [template, framework]);
	const templateSourceUrl = useMemo(() => {
		if (!template?.providerOwner || !template?.providerRepositoryId) return null;
		const base = `https://github.com/${template.providerOwner}/${template.providerRepositoryId}`;
		const ref = "main";
		const path = (templateFramework?.providerRootDirectory?.trim() ?? template.providerRootDirectory?.trim() ?? "").replace(/^\.\/?/, "").replace(/\/+$/, "");
		if (!path) return `${base}/tree/${ref}`;
		return `${base}/tree/${ref}/${path}`;
	}, [
		template?.providerOwner,
		template?.providerRepositoryId,
		template?.providerRootDirectory,
		templateFramework?.providerRootDirectory
	]);
	const sidebarContent = template ? /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-5 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 ring-1 ring-border/50",
						children: /* @__PURE__ */ jsx(FrameworkIcon, {
							framework,
							size: "md"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[13px] font-semibold text-foreground truncate",
							children: template.name
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground truncate",
							children: template.tagline || `${template.providerOwner}/${template.providerRepositoryId}`
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative h-[120px] overflow-hidden border-b border-border/50",
				children: screenshotUrl ? /* @__PURE__ */ jsx("div", {
					className: "absolute start-6 -end-4 top-4 aspect-video transform -rotate-3",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative h-full w-full overflow-hidden rounded-lg ring-1 ring-border bg-muted/30",
						children: /* @__PURE__ */ jsx(FadeImage, {
							src: screenshotUrl,
							alt: `${template.name} preview`,
							className: "absolute inset-0 h-full w-full object-cover object-top"
						})
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "absolute start-6 -end-4 top-4 aspect-video transform -rotate-3 flex items-center justify-center rounded-lg bg-muted/50 ring-1 ring-border",
					children: /* @__PURE__ */ jsx(LayoutTemplate, { className: "h-8 w-8 text-muted-foreground/30" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-5 py-4 space-y-3",
				children: [
					frameworkInfo && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }), t("Framework")]
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-foreground",
							children: [/* @__PURE__ */ jsx(FrameworkIcon, {
								framework,
								size: "sm"
							}), /* @__PURE__ */ jsx("span", { children: frameworkInfo.name })]
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
					template.providerRootDirectory && template.providerRootDirectory !== "./" && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(FolderOpen, { className: "h-3.5 w-3.5" }), t("Root directory")]
						}), /* @__PURE__ */ jsx("code", {
							className: "text-[12px] font-mono text-foreground bg-muted/50 px-2 py-0.5 rounded max-w-[120px] truncate",
							children: template.providerRootDirectory
						})]
					}),
					template.variables && template.variables.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("Variables")]
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-foreground",
							children: [
								template.variables.length,
								" ",
								t("required")
							]
						})]
					})
				]
			}),
			(template.providerRepositoryId || template.demoUrl) && /* @__PURE__ */ jsxs("div", {
				className: "px-5 py-4 border-t border-border/50 flex gap-2",
				children: [templateSourceUrl && /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "flex-1 h-9 text-[13px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: templateSourceUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(GitBranch, { className: "me-1.5 h-4 w-4" }), t("View source")]
					})
				}), template.demoUrl && /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "flex-1 h-9 text-[13px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: template.demoUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-4 w-4" }), t("Live demo")]
					})
				})]
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
	if (templateLoading) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create site"),
		fallbackPath: `/projects/${projectId}/sites`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center py-16",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
		})
	});
	if (!template) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create site"),
		fallbackPath: `/projects/${projectId}/sites`,
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center py-16",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: t("Template not found")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				className: "mt-4",
				asChild: true,
				children: /* @__PURE__ */ jsx(Link, {
					to: "/projects/$projectId/sites/create/templates",
					params: { projectId },
					children: t("Browse templates")
				})
			})]
		})
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
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleDeploy,
			disabled: isDeploying || !siteName || !framework || !domainValid || createSiteMutation.isPending || gitConnection === "now" && (!formData.providerRepositoryId || !formData.installationId),
			children: t("Deploy")
		})] }),
		children: [
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
							template.frameworks && template.frameworks.length > 1 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "framework",
									className: "text-[13px]",
									children: t("Framework")
								}), /* @__PURE__ */ jsxs(Select, {
									value: framework,
									onValueChange: setFramework,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select framework") })
									}), /* @__PURE__ */ jsx(SelectContent, { children: template.frameworks.map((f, index) => {
										const fKey = getFrameworkString(f);
										const fInfo = frameworks.find((fr) => fr.key === fKey);
										return /* @__PURE__ */ jsx(SelectItem, {
											value: fKey,
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(FrameworkIcon, {
													framework: fKey,
													size: "sm"
												}), fInfo?.name || fKey]
											})
										}, fKey || index);
									}) })]
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
			/* @__PURE__ */ jsxs(RadioGroup, {
				value: gitConnection,
				onValueChange: (value) => setGitConnection(value),
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
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
							children: t("Deploy now and connect your version control later via CLI or Git integration in your settings.")
						})]
					})]
				})]
			}),
			gitConnection === "now" && /* @__PURE__ */ jsx(ConnectRepositorySection, {
				projectId,
				installations,
				getGitHubAuthUrl,
				getVcsAuthUrl,
				defaultRepositoryName: siteName || template?.name || "",
				detectionType: VCSDetectionType.Framework,
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
				emptyStateTitle: t("Connect Git repository"),
				emptyStateDescription: t("Create and deploy a Site with a connected git repository.")
			}),
			template.variables && template.variables.length > 0 && (() => {
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
								placeholder: templateVar?.placeholder || `Enter ${variable.key}`,
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
			})()
		]
	});
}
function TemplateConfigPage() {
	const { template } = Route$1.useParams();
	return /* @__PURE__ */ jsx(TemplateConfigView, { templateParam: template });
}
export { TemplateConfigPage as component };
