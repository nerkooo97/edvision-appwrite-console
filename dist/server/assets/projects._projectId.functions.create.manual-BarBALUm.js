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
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as Route$1 } from "./projects._projectId.functions.create.manual-CZwZ02gM.js";
import { t as VariablesSettingsCard } from "./VariablesSettingsCard-CpqYwPmO.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import "./DomainInput-BVoiQ2EY.js";
import { t as FunctionDomainCard } from "./FunctionDomainCard-C_8TS7-G.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Upload } from "lucide-react";
function ManualCreateView({ runtimeFromSearch }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fileInputRef = useRef(null);
	const { generateDomain, updateFormData } = useFunctionWizard();
	const [functionName, setFunctionName] = useState("");
	const [functionId, setFunctionId] = useState();
	const [runtime, setRuntime] = useState(runtimeFromSearch || "");
	const [entrypoint, setEntrypoint] = useState("");
	const [commands, setCommands] = useState("");
	const [domain, setDomain] = useState("");
	const [domainValid, setDomainValid] = useState(false);
	const [variables, setVariables] = useState([]);
	const [isPublic, setIsPublic] = useState(true);
	const [specification, setSpecification] = useState("");
	const [file, setFile] = useState(null);
	const [isDeploying, setIsDeploying] = useState(false);
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
	useEffect(() => {
		if (runtimeFromSearch && !runtime) setRuntime(runtimeFromSearch);
	}, [runtimeFromSearch]);
	useEffect(() => {
		if (functionName && !domain) {
			setDomain(generateDomain(functionName));
			setDomainValid(true);
		}
	}, [functionName, generateDomain]);
	const handleDeploy = async () => {
		if (!projectId) return;
		if (!functionName || !runtime) {
			toast.error(t("Please fill in function name and runtime"));
			return;
		}
		if (!domain.trim()) {
			toast.error(t("Please enter a domain"));
			return;
		}
		if (!file) {
			toast.error(t("Please upload a .tar.gz file"));
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
			const deployment = await projectSdk.functions.createDeployment({
				functionId: finalFunctionId,
				code: file,
				activate: true,
				entrypoint: entrypoint.trim() || void 0,
				commands: commands.trim() || void 0
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
			disabled: isDeploying || !functionName || !runtime || !domain.trim() || !domainValid || !file,
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
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "commands",
									className: "text-[13px]",
									children: t("Build commands")
								}), /* @__PURE__ */ jsx(Input, {
									id: "commands",
									value: commands,
									onChange: (e) => setCommands(e.target.value),
									placeholder: "npm install",
									className: "h-9 text-[13px] font-mono"
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
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Upload code")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t("Upload a .tar.gz archive containing your function code")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: ".tar.gz,.tgz",
							className: "hidden",
							onChange: (e) => setFile(e.target.files?.[0] || null)
						}), /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							className: "h-9 text-[13px] gap-1.5",
							onClick: () => fileInputRef.current?.click(),
							children: [/* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }), file ? file.name : t("Choose .tar.gz file")]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(VariablesSettingsCard, {
				variant: "wizard",
				variables,
				onChange: setVariables
			})
		]
	});
}
function ManualCreatePage() {
	return /* @__PURE__ */ jsx(ManualCreateView, { runtimeFromSearch: Route$1.useSearch({ strict: false })?.runtime });
}
export { ManualCreatePage as component };
