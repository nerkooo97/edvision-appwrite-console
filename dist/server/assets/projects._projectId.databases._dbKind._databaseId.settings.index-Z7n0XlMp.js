import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
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
import { J as invalidateDatabaseModel, Y as invalidateDatabaseModelAndType, mt as updateProjectDatabase, tt as refetchProjectDatabaseLists, w as deleteProjectDatabase } from "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
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
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as getLocalizedDatabaseConsoleLabels } from "./database-console-labels-Bc5DeMXt.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as DatabaseSettingsLoading, t as useDatabaseSettingsPage } from "./useDatabaseSettingsPage-nyiksSB_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Database } from "lucide-react";
function DatabaseDangerZoneCard({ projectId, databaseId, database, dbKind, containersTotal, canWrite }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const dbLabels = getLocalizedDatabaseConsoleLabels(t, dbKind);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteConfirmation, setDeleteConfirmation] = useState("");
	const deleteMutation = useMutation({
		mutationFn: async () => {
			await deleteProjectDatabase(projectId, databaseId, dbKind);
		},
		onSuccess: async () => {
			invalidateDatabaseModelAndType(projectId, databaseId);
			await refetchProjectDatabaseLists(queryClient, projectId);
			toast.success(t("Database deleted successfully"));
			setDeleteDialogOpen(false);
			setDeleteConfirmation("");
			navigate({
				to: "/projects/$projectId/databases",
				params: { projectId },
				replace: true
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to delete database")));
		}
	});
	if (!canWrite) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Delete database")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: dbLabels.deleteDatabaseContainersDescription
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
						children: /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-muted-foreground" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							children: database.name
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								containersTotal,
								" ",
								containersTotal === 1 ? dbLabels.containerSingular : dbLabels.containerPlural
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
				children: /* @__PURE__ */ jsxs(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							children: t("Delete database")
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [
							/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Database") }), /* @__PURE__ */ jsxs(DialogDescription, {
									className: "text-[13px] mt-2",
									children: [
										t("Are you sure you want to delete"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											children: database.name
										}),
										" ",
										dbLabels.deleteDatabaseConfirmSuffix
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-4 pt-0",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "rounded-lg border border-border bg-muted/50 p-3 mb-4 mt-2",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
												children: /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-muted-foreground" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: database.name
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-[11px] text-muted-foreground",
												children: [
													containersTotal,
													" ",
													containersTotal === 1 ? dbLabels.containerSingular : dbLabels.containerPlural,
													" ",
													t("will be deleted")
												]
											})] })]
										})
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "text-[13px] text-muted-foreground",
										children: [
											t("Type"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "font-mono font-medium text-foreground bg-muted px-1.5 py-0.5 rounded",
												children: database.name
											}),
											" ",
											t("to confirm")
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										value: deleteConfirmation,
										onChange: (e) => setDeleteConfirmation(e.target.value),
										placeholder: t("Enter database name"),
										className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => {
										setDeleteDialogOpen(false);
										setDeleteConfirmation("");
									},
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: deleteConfirmation !== database.name || deleteMutation.isPending,
									onClick: () => deleteMutation.mutate(),
									children: t("Delete")
								})]
							})
						]
					})]
				})
			})
		]
	});
}
function DatabaseDetailsCard({ projectId, databaseId, dbKind, database, canWrite }) {
	const t = useT();
	const queryClient = useQueryClient();
	const originalEnabled = database.enabled !== false;
	const [enabled, setEnabled] = useState(originalEnabled);
	useEffect(() => {
		setEnabled(database.enabled !== false);
	}, [database.enabled]);
	const updateMutation = useMutation({
		mutationFn: async (nextEnabled) => {
			await updateProjectDatabase(projectId, databaseId, {
				name: database.name,
				enabled: nextEnabled
			}, dbKind);
		},
		onSuccess: (_data, nextEnabled) => {
			toast.success(nextEnabled ? t("Database has been enabled") : t("Database has been disabled"));
			invalidateDatabaseModel(projectId, databaseId);
			queryClient.invalidateQueries({ queryKey: [
				"database",
				"project",
				projectId,
				databaseId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"databases",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
			setEnabled(originalEnabled);
		}
	});
	const hasChanges = enabled !== originalEnabled;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: database.name
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Switch, {
							id: "database-enabled",
							checked: enabled,
							onCheckedChange: setEnabled,
							disabled: !canWrite || updateMutation.isPending
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "database-enabled",
							className: "text-[13px] text-foreground",
							children: enabled ? t("Enabled") : t("Disabled")
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 space-y-1",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("Database ID"),
								":",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "ms-1.5",
									children: /* @__PURE__ */ jsx(CopyableId, {
										id: database.$id,
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
									date: database.createdAt,
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
									date: database.updatedAt || database.createdAt,
									showFormattedDate: true,
									className: "text-foreground"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !canWrite || !hasChanges || updateMutation.isPending,
					onClick: () => updateMutation.mutate(enabled),
					children: t("Update")
				})
			})
		]
	});
}
function DatabaseNameCard({ projectId, databaseId, dbKind, database, canWrite }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [name, setName] = useState(database.name);
	useEffect(() => {
		setName(database.name);
	}, [database.name]);
	const updateMutation = useMutation({
		mutationFn: async (nextName) => {
			const trimmed = nextName.trim();
			if (trimmed.length < 1) throw new Error(t("Name must be at least 1 character"));
			if (trimmed.length > 128) throw new Error(t("Name must be no longer than 128 characters"));
			await updateProjectDatabase(projectId, databaseId, { name: trimmed }, dbKind);
		},
		onSuccess: () => {
			invalidateDatabaseModel(projectId, databaseId);
			queryClient.invalidateQueries({ queryKey: [
				"database",
				"project",
				projectId,
				databaseId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"databases",
				"project",
				projectId
			] });
			toast.success(t("Database name updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update database name")));
		}
	});
	const hasChanges = name.trim() !== database.name && name.trim().length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Name")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Update your database's display name. This will be visible to all organization members.")
				}), /* @__PURE__ */ jsx(Input, {
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: t("Database name"),
					disabled: !canWrite,
					className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !canWrite || !hasChanges || updateMutation.isPending,
					onClick: () => updateMutation.mutate(name),
					children: t("Update")
				})
			})
		]
	});
}
function View() {
	const { projectId, databaseId, dbKind, database, containersTotal, canWrite, permissionCanWrite, isLoading } = useDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(DatabaseSettingsLoading, {});
	if (!database) return null;
	const cardProps = {
		projectId,
		databaseId,
		dbKind,
		database,
		canWrite
	};
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "name",
			search: {
				title: "Name",
				keywords: [
					"rename",
					"display",
					"database name"
				]
			},
			node: /* @__PURE__ */ jsx(DatabaseNameCard, { ...cardProps })
		},
		{
			id: "details",
			search: {
				title: "Details",
				keywords: [
					"id",
					"created",
					"updated",
					"enabled",
					"disabled",
					"status"
				]
			},
			node: /* @__PURE__ */ jsx(DatabaseDetailsCard, { ...cardProps })
		},
		{
			id: "delete",
			search: {
				title: "Delete database",
				keywords: [
					"delete",
					"remove",
					"destroy",
					"danger"
				]
			},
			node: /* @__PURE__ */ jsx(DatabaseDangerZoneCard, {
				projectId,
				databaseId,
				database,
				dbKind,
				containersTotal,
				canWrite: permissionCanWrite
			})
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
