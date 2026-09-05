import { t as cn } from "./utils-DoqqkI3X.js";
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
import { an as useCreateSite, on as useCreateSiteDomain } from "./affiliates-BOg1SHC6.js";
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
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import "./DomainInput-BVoiQ2EY.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { t as DomainInput } from "./DomainInput-BQ94HylF.js";
import { t as BuildSettings } from "./BuildSettings-Bicajv6M.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { File, GitBranch, LayoutTemplate, Upload, X } from "lucide-react";
function ManualUploadView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fileInputRef = useRef(null);
	const { formData, updateFormData, frameworks, getFrameworkDefaults, generateDomain, setCurrentPath } = useWizard();
	useEffect(() => {
		setCurrentPath("manual");
	}, [setCurrentPath]);
	const [siteName, setSiteName] = useState(formData.siteName || "My website");
	const [siteId, setSiteId] = useState(formData.siteId);
	const [framework, setFramework] = useState(formData.framework || "");
	const [installCommand, setInstallCommand] = useState(formData.installCommand || "");
	const [buildCommand, setBuildCommand] = useState(formData.buildCommand || "");
	const [outputDirectory, setOutputDirectory] = useState(formData.outputDirectory || "");
	const [startCommand, setStartCommand] = useState(formData.startCommand || "");
	const [fallbackFile, setFallbackFile] = useState(formData.fallbackFile || "");
	const [variables, setVariables] = useState(formData.variables || []);
	const [domain, setDomain] = useState(formData.domain || "");
	const [domainValid, setDomainValid] = useState(formData.domainValid || false);
	const [uploadFile, setUploadFile] = useState(formData.uploadFile || null);
	const [isDragging, setIsDragging] = useState(false);
	const [isDeploying, setIsDeploying] = useState(false);
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
	const handleFileSelect = (files) => {
		if (!files || files.length === 0) return;
		const file = files[0];
		if (!file.name.endsWith(".tar.gz") && !file.name.endsWith(".tgz")) {
			toast.error(t("Only .tar.gz files are supported"));
			return;
		}
		if (file.size > 100 * 1024 * 1024) {
			toast.error(t("File size must be less than 100MB"));
			return;
		}
		setUploadFile(file);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		handleFileSelect(e.dataTransfer.files);
	};
	const formatFileSize = (bytes) => {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	};
	const createSiteMutation = useCreateSite(projectId);
	const createDomainMutation = useCreateSiteDomain(projectId);
	const handleDeploy = async () => {
		if (!projectId || !siteName || !framework || !uploadFile) {
			toast.error(t("Please fill in all required fields and upload a file"));
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
				fallbackFile: defaults.adapter === "static" ? fallbackFile || void 0 : void 0
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
			const deployment = await sdk.forProject(projectId).sites.createDeployment({
				siteId: site.$id,
				code: uploadFile,
				activate: true,
				installCommand,
				buildCommand,
				outputDirectory,
				startCommand
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
	const sidebarContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [framework && /* @__PURE__ */ jsx("div", {
			className: "rounded-xl border border-border bg-card/50 p-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(FrameworkIcon, {
						framework,
						size: "md"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("Framework")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: frameworks.find((f) => f.key === framework)?.name || framework
				})] })]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 p-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-semibold text-foreground mb-3",
				children: t("Other options")
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/projects/$projectId/sites/create/repositories",
					params: { projectId },
					className: "flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors",
					children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3.5 w-3.5" }), t("Import from Git")]
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/projects/$projectId/sites/create/templates",
					params: { projectId },
					className: "flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors",
					children: [/* @__PURE__ */ jsx(LayoutTemplate, { className: "h-3.5 w-3.5" }), t("Browse templates")]
				})]
			})]
		})]
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
			disabled: isDeploying || !siteName || !framework || !uploadFile || !domainValid || createSiteMutation.isPending,
			children: t("Deploy")
		})] }),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Upload file")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t("Upload a .tar.gz file containing your site source code")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: ".tar.gz,.tgz",
							onChange: (e) => handleFileSelect(e.target.files),
							className: "hidden"
						}), !uploadFile ? /* @__PURE__ */ jsxs("div", {
							onDragOver: handleDragOver,
							onDragLeave: handleDragLeave,
							onDrop: handleDrop,
							onClick: () => fileInputRef.current?.click(),
							className: cn("flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12 px-6 cursor-pointer transition-colors", isDragging ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground hover:bg-accent/50"),
							children: [
								/* @__PURE__ */ jsx(Upload, { className: "h-8 w-8 text-muted-foreground mb-3" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground",
									children: t("Drop your file here or click to browse")
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground mt-1",
									children: t("Only .tar.gz files up to 100MB")
								})
							]
						}) : /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
									children: /* @__PURE__ */ jsx(File, { className: "h-5 w-5 text-muted-foreground" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate text-[13px] font-medium text-foreground",
										children: uploadFile.name
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: formatFileSize(uploadFile.size)
									})]
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setUploadFile(null),
									className: "h-8 w-8 p-0",
									children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
								})
							]
						})]
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
										setFallbackFile(defaults.fallbackFile);
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
function ManualUploadPage() {
	return /* @__PURE__ */ jsx(ManualUploadView, {});
}
export { ManualUploadPage as component };
