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
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { In as buildFunctionUpdateParams, mr as useDeleteFunction, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
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
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as ConfirmNameDialog } from "./ConfirmNameDialog-CzIMv4mD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data: func, isLoading: funcLoading } = useProjectFunction(projectId, functionId);
	const [name, setName] = useState("");
	const [enabled, setEnabled] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const deleteFunctionMutation = useDeleteFunction(projectId);
	useEffect(() => {
		if (func) {
			setName(func.name || "");
			setEnabled(func.enabled !== false);
		}
	}, [func]);
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
	const updateEnabledMutation = useMutation({
		mutationFn: async (nextEnabled) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, { enabled: nextEnabled }));
		},
		onSuccess: (updated, nextEnabled) => {
			toast.success(nextEnabled ? t("Function has been enabled") : t("Function has been disabled"));
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
			toast.error(getErrorMessage(error));
			if (func) setEnabled(func.enabled !== false);
		}
	});
	const handleSaveName = () => {
		if (!name.trim()) {
			toast.error(t("Function name is required"));
			return;
		}
		updateFunctionMutation.mutate({ name });
	};
	const handleDeleteFunction = () => {
		if (!functionId) return;
		deleteFunctionMutation.mutate(functionId, {
			onSuccess: () => {
				toast.success(t("Function deleted successfully"));
				navigate({
					to: "/projects/$projectId/functions",
					params: { projectId }
				});
			},
			onError: (error) => {
				toast.error(error instanceof Error ? error.message : t("Failed to delete function"));
			}
		});
		setDeleteDialogOpen(false);
	};
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
			id: "details",
			search: {
				title: "Details",
				description: "Identifiers and timestamps for this function.",
				keywords: [
					"id",
					"created",
					"updated",
					"identifiers"
				]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Details")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2",
							children: t("Identifiers and timestamps for this function.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-1",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Function ID:"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "ms-1.5",
										children: /* @__PURE__ */ jsx(CopyableId, {
											id: func.$id,
											size: "sm"
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Created:"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: new Date(func.$createdAt),
										showFormattedDate: true,
										className: "text-foreground"
									})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Last updated:"),
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: new Date(func.$updatedAt || func.$createdAt),
										showFormattedDate: true,
										className: "text-foreground"
									})
								]
							})
						]
					})
				]
			})
		},
		{
			id: "name",
			search: {
				title: "Name",
				description: "Function name used for identification",
				keywords: ["rename", "display"]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Name")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2",
							children: t("Function name used for identification")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx(Input, {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: t("Enter function name"),
							className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: name === func.name || !name.trim() || updateFunctionMutation.isPending,
							onClick: handleSaveName,
							children: t("Update")
						})
					})
				]
			})
		},
		{
			id: "status",
			search: {
				title: "Status",
				description: "Enable or disable this function without deleting it.",
				keywords: [
					"enabled",
					"disabled",
					"toggle"
				]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Status")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2",
							children: t("Enable or disable this function without deleting it.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-between",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx(Switch, {
									id: "toggle-enabled",
									checked: enabled,
									onCheckedChange: setEnabled,
									disabled: updateEnabledMutation.isPending
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "toggle-enabled",
									className: "text-[13px] text-foreground",
									children: enabled ? t("Enabled") : t("Disabled")
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30",
						children: /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: enabled === (func.enabled !== false) || updateEnabledMutation.isPending,
							onClick: () => {
								if (enabled !== (func.enabled !== false)) updateEnabledMutation.mutate(enabled);
							},
							children: t("Update")
						})
					})
				]
			})
		},
		{
			id: "delete",
			search: {
				title: "Delete function",
				keywords: [
					"delete",
					"remove",
					"destroy",
					"danger"
				]
			},
			node: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Delete function")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Permanently delete this function and all its data. This action cannot be undone.")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mt-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
								children: func.runtime ? /* @__PURE__ */ jsx(RuntimeIcon, {
									runtime: func.runtime,
									className: "h-5 w-5"
								}) : /* @__PURE__ */ jsx(Trash2, { className: "h-5 w-5 text-muted-foreground" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[14px] font-medium text-foreground truncate",
									children: func.name || t("Unnamed Function")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: func.runtime || t("No runtime")
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
						children: [/* @__PURE__ */ jsxs(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: deleteFunctionMutation.isPending,
							onClick: () => setDeleteDialogOpen(true),
							children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete function")]
						}), /* @__PURE__ */ jsx(ConfirmNameDialog, {
							open: deleteDialogOpen,
							onOpenChange: setDeleteDialogOpen,
							title: "Delete function",
							description: /* @__PURE__ */ jsxs(Fragment, { children: [
								t("Are you sure you want to delete"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: func.name || t("this function")
								}),
								" ",
								t("and all its data? This action cannot be undone.")
							] }),
							confirmValue: func.name?.trim() || func.$id,
							confirmPlaceholder: "Enter function name",
							onConfirm: handleDeleteFunction,
							isConfirming: deleteFunctionMutation.isPending
						})]
					})
				]
			})
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
