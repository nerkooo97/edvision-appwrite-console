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
import { Ar as hasUnavailableSpecifications, Er as useProjectRuntimes, In as buildFunctionUpdateParams, Or as SpecificationType, wr as useProjectFunction, xr as useFunctionSpecifications } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as SpecificationTableCard } from "./SpecificationTableCard-ecVebCBg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function FunctionImageCard({ projectId, functionId, func }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data: runtimesData } = useProjectRuntimes(projectId);
	const [runtime, setRuntime] = useState("");
	const [entrypoint, setEntrypoint] = useState("");
	const runtimes = useMemo(() => runtimesData?.runtimes || [], [runtimesData]);
	useEffect(() => {
		setRuntime(func.runtime || "");
		setEntrypoint(func.entrypoint || "");
	}, [func]);
	const updateMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Image updated successfully"));
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
			toast.error(getErrorMessage(error, t("Failed to update image")));
		}
	});
	const handleSave = () => {
		if (!runtime || !entrypoint.trim()) {
			toast.error(t("Image and entrypoint are required"));
			return;
		}
		updateMutation.mutate({
			runtime,
			entrypoint
		});
	};
	const hasChanges = runtime !== (func.runtime || "") || entrypoint !== (func.entrypoint || "");
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Image")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Execution environment for this function and the file Appwrite loads as the handler. CPU and memory per run are set under Specification.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "function-image",
						className: "text-[13px]",
						children: t("Image")
					}), runtimes.length > 0 ? /* @__PURE__ */ jsxs(Select, {
						value: runtime || void 0,
						onValueChange: setRuntime,
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							id: "function-image",
							className: "mt-2 h-9 border-border bg-background text-[13px]",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select an image") })
						}), /* @__PURE__ */ jsx(SelectContent, { children: runtimes.map((rt) => /* @__PURE__ */ jsx(SelectItem, {
							value: rt.$id,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(RuntimeIcon, {
									runtime: rt.$id,
									size: "sm"
								}), /* @__PURE__ */ jsxs("span", { children: [
									rt.name,
									" ",
									rt.version
								] })]
							})
						}, rt.$id)) })]
					}) : /* @__PURE__ */ jsx(Input, {
						id: "function-image",
						value: runtime,
						onChange: (e) => setRuntime(e.target.value),
						placeholder: t("Runtime ID"),
						className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
					})] }), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "function-entrypoint",
							className: "text-[13px]",
							children: t("Entrypoint")
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "function-entrypoint",
							value: entrypoint,
							onChange: (e) => setEntrypoint(e.target.value),
							placeholder: "src/index.js",
							className: "mt-2 h-9 font-mono border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: t("Path to your function's entry point")
						})
					] })]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !runtime || !entrypoint.trim() || updateMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function FunctionTimeoutCard({ projectId, functionId, func }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [requestTimeout, setRequestTimeout] = useState(15);
	useEffect(() => {
		setRequestTimeout(func.timeout || 15);
	}, [func]);
	const updateMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Timeout updated successfully"));
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
			toast.error(getErrorMessage(error, t("Failed to update timeout")));
		}
	});
	const handleSave = () => {
		if (requestTimeout < 1 || requestTimeout > 900) {
			toast.error(t("Timeout must be between 1 and 900 seconds"));
			return;
		}
		updateMutation.mutate({ timeout: requestTimeout });
	};
	const hasChanges = requestTimeout !== (func.timeout || 15);
	const timeoutValid = requestTimeout >= 1 && requestTimeout <= 900;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Timeout")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Maximum time a single execution may run before it is stopped. Use a higher value for slow I/O or heavy work; use a lower value to cap run time. Allowed range is 1–900 seconds.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "function-timeout",
						className: "text-[13px]",
						children: t("Seconds per execution")
					}), /* @__PURE__ */ jsx(Input, {
						id: "function-timeout",
						type: "number",
						min: 1,
						max: 900,
						value: requestTimeout,
						onChange: (e) => setRequestTimeout(Number(e.target.value)),
						className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !timeoutValid || updateMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function FunctionLoggingCard({ projectId, functionId, func }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [logging, setLogging] = useState(true);
	useEffect(() => {
		setLogging(func.logging ?? true);
	}, [func]);
	const updateMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId) throw new Error("Project ID and Function ID are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Logging updated successfully"));
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
			toast.error(getErrorMessage(error, t("Failed to update logging")));
		}
	});
	const handleSave = () => {
		updateMutation.mutate({ logging });
	};
	const hasChanges = logging !== (func.logging ?? true);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Logging")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("When enabled, execution output is written to your function logs in the console, which helps debugging. Disabling it reduces log volume when you do not need stdout and stderr from every run.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "function-logging",
							className: "text-[13px]",
							children: t("Execution logging")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: logging ? t("Enabled - function stdout and stderr are recorded.") : t("Disabled - less log output per execution.")
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						id: "function-logging",
						checked: logging,
						onCheckedChange: setLogging,
						disabled: updateMutation.isPending,
						className: "shrink-0"
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || updateMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { data: func, isLoading: funcLoading } = useProjectFunction(projectId, functionId);
	const { data: specificationsData } = useFunctionSpecifications(projectId, SpecificationType.Runtimes);
	const [runtimeSpecification, setRuntimeSpecification] = useState("");
	useEffect(() => {
		if (func) setRuntimeSpecification(func.runtimeSpecification || "");
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
	const handleSaveSpecification = () => {
		updateFunctionMutation.mutate({ runtimeSpecification: runtimeSpecification || void 0 });
	};
	const specDirty = runtimeSpecification !== (func?.runtimeSpecification || "");
	if (funcLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!func) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "image",
			search: {
				title: "Image",
				keywords: [
					"runtime",
					"docker",
					"container"
				]
			},
			node: /* @__PURE__ */ jsx(FunctionImageCard, {
				projectId,
				functionId,
				func
			})
		},
		{
			id: "timeout",
			search: {
				title: "Timeout",
				keywords: [
					"execute",
					"seconds",
					"limit"
				]
			},
			node: /* @__PURE__ */ jsx(FunctionTimeoutCard, {
				projectId,
				functionId,
				func
			})
		},
		{
			id: "logging",
			search: {
				title: "Logging",
				keywords: [
					"logs",
					"stdout",
					"stderr"
				]
			},
			node: /* @__PURE__ */ jsx(FunctionLoggingCard, {
				projectId,
				functionId,
				func
			})
		},
		...specifications.length > 0 ? [{
			id: "specification",
			search: {
				title: "Specification",
				description: "CPU and memory available to each function execution at runtime.",
				keywords: [
					"vcpu",
					"memory",
					"cpu",
					"resources"
				]
			},
			node: /* @__PURE__ */ jsx(SpecificationTableCard, {
				title: t("Specification"),
				description: t("CPU and memory available to each function execution at runtime."),
				scope: "runtime-function",
				specs: specifications,
				selectedSlug: runtimeSpecification,
				onSelectedSlugChange: setRuntimeSpecification,
				hasChanges: specDirty,
				isSaving: updateFunctionMutation.isPending,
				onSave: handleSaveSpecification,
				footerNote: hasUnavailableSpecifications(specifications) ? /* @__PURE__ */ jsx(SpecificationsUpgradeNote, {
					orgId: project?.teamId,
					showContactSales: true
				}) : void 0
			})
		}] : []
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
