import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
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
import { Ar as hasUnavailableSpecifications, In as buildFunctionUpdateParams, Or as SpecificationType, wr as useProjectFunction, xr as useFunctionSpecifications } from "./affiliates-BOg1SHC6.js";
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
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./alert-BTaNwkUC.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./input-tags-CcIzF147.js";
import { t as SpecificationTableCard } from "./SpecificationTableCard-ecVebCBg.js";
import { a as getDeploymentRetention, i as DeploymentRetentionCard, n as describeTriggerBehavior, r as normalizeTriggerPatterns, t as BuildTriggersCard } from "./BuildTriggersCard-CJ04gXqH.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function FunctionDeploymentRetentionCard({ projectId, functionId, func }) {
	const t = useT();
	const queryClient = useQueryClient();
	const updateFunctionMutation = useMutation({
		mutationFn: async (deploymentRetention) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, { deploymentRetention }));
		},
		onSuccess: (updated) => {
			toast.success(t("Retention has been updated"));
			queryClient.setQueryData([
				"function",
				"project",
				projectId,
				functionId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update retention")));
		}
	});
	if (!func) return null;
	return /* @__PURE__ */ jsx(DeploymentRetentionCard, {
		deploymentRetention: getDeploymentRetention(func),
		onUpdate: (deploymentRetention) => updateFunctionMutation.mutate(deploymentRetention),
		isPending: updateFunctionMutation.isPending
	});
}
var FUNCTIONS_BUILD_TRIGGERS_DOCS = "/docs/products/functions/deploy-from-git#build-triggers";
function FunctionBuildTriggersCard({ func }) {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const updateFunctionMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !func.$id) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated, variables) => {
			const summary = describeTriggerBehavior(variables.providerBranches, variables.providerPaths);
			toast.success(`${t("Triggers updated.")} ${summary}`);
			queryClient.setQueryData([
				"function",
				"project",
				projectId,
				func.$id
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update triggers")));
		}
	});
	if (!projectId || !functionId) return null;
	return /* @__PURE__ */ jsx(BuildTriggersCard, {
		kind: "function",
		resource: func,
		projectId,
		resourceId: functionId,
		docsLink: FUNCTIONS_BUILD_TRIGGERS_DOCS,
		isSaving: updateFunctionMutation.isPending,
		onSave: (updates) => updateFunctionMutation.mutate({
			providerBranches: normalizeTriggerPatterns(updates.providerBranches),
			providerPaths: normalizeTriggerPatterns(updates.providerPaths)
		})
	});
}
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { data: func, isLoading: funcLoading } = useProjectFunction(projectId, functionId);
	const { data: specificationsData } = useFunctionSpecifications(projectId, SpecificationType.Builds);
	const [commands, setCommands] = useState("");
	const [buildSpecification, setBuildSpecification] = useState("");
	useEffect(() => {
		if (func) {
			setCommands(func.commands || "");
			setBuildSpecification(func.buildSpecification || "");
		}
	}, [func]);
	const specifications = useMemo(() => specificationsData?.specifications || [], [specificationsData]);
	const updateFunctionMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Function updated successfully"));
			queryClient.setQueryData([
				"function",
				"project",
				projectId,
				functionId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(error instanceof Error ? error.message : t("Failed to update function"));
		}
	});
	const commandsDirty = commands !== (func?.commands || "");
	const specDirty = buildSpecification !== (func?.buildSpecification || "");
	const handleSaveCommands = () => {
		updateFunctionMutation.mutate({ commands });
	};
	const handleSaveSpecification = () => {
		updateFunctionMutation.mutate({ buildSpecification: buildSpecification || void 0 });
	};
	if (funcLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!func) return null;
	const specFooterNote = hasUnavailableSpecifications(specifications) ? /* @__PURE__ */ jsx(SpecificationsUpgradeNote, {
		orgId: project?.teamId,
		showContactSales: true
	}) : void 0;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "commands",
			search: {
				title: "Commands",
				description: "Commands run while your function deployment is being built and packaged.",
				keywords: [
					"install",
					"build",
					"package",
					"npm"
				]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Commands")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2",
							children: t("Commands run while your function deployment is being built and packaged.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "build-commands",
								className: "text-[13px]",
								children: t("Commands")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "build-commands",
								value: commands,
								onChange: (e) => setCommands(e.target.value),
								placeholder: "npm install",
								className: "mt-2 h-9 font-mono text-[13px]"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] text-muted-foreground",
								children: t("Commands to run during function build.")
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: !commandsDirty || updateFunctionMutation.isPending,
							onClick: handleSaveCommands,
							children: t("Update")
						})
					})
				]
			})
		},
		{
			id: "triggers",
			search: {
				title: "Triggers",
				description: "Control which branch pushes and file changes trigger automatic deployments.",
				keywords: [
					"git",
					"branch",
					"path",
					"glob",
					"filter",
					"deploy",
					"pattern"
				]
			},
			node: /* @__PURE__ */ jsx(FunctionBuildTriggersCard, { func })
		},
		{
			id: "deployment-retention",
			search: {
				title: "Retention",
				description: "Keep active deployments and choose when inactive deployments are deleted.",
				keywords: [
					"deployment",
					"retention",
					"delete",
					"inactive",
					"forever",
					"cleanup"
				]
			},
			node: /* @__PURE__ */ jsx(FunctionDeploymentRetentionCard, {
				projectId,
				functionId,
				func
			})
		},
		...specifications.length > 0 ? [{
			id: "specification",
			search: {
				title: "Specification",
				description: "CPU and memory allocated on the build worker while your function image is produced.",
				keywords: [
					"vcpu",
					"memory",
					"worker",
					"cpu"
				]
			},
			node: /* @__PURE__ */ jsx(SpecificationTableCard, {
				title: t("Specification"),
				description: t("CPU and memory allocated on the build worker while your function image is produced."),
				scope: "build",
				specs: specifications,
				selectedSlug: buildSpecification,
				onSelectedSlugChange: setBuildSpecification,
				hasChanges: specDirty,
				isSaving: updateFunctionMutation.isPending,
				onSave: handleSaveSpecification,
				footerNote: specFooterNote
			})
		}] : []
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
