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
import { Ap as useDeleteMysqlDatabase } from "./hooks-BONwG3Mt.js";
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
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./CopyableId-DPIWAPIb.js";
import "./UpgradePlanLink-BCG1Z_E2.js";
import "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./resource-status-labels-C-bLMJxj.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as MysqlDatabaseDetailsCard, r as MysqlDatabaseNameCard } from "./MysqlDatabaseGeneralSettings-Crx3JkNk.js";
import { n as useMysqlDatabaseSettingsPage, t as MysqlSettingsLoading } from "./MysqlSettingsLoading-DiLhiLOa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Database, Trash2 } from "lucide-react";
function MysqlDatabaseDangerZoneCard({ projectId, database, canWrite }) {
	const t = useT();
	const navigate = useNavigate();
	const deleteMutation = useDeleteMysqlDatabase(projectId);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteConfirmation, setDeleteConfirmation] = useState("");
	const handleDelete = () => {
		deleteMutation.mutate(database.$id, {
			onSuccess: () => {
				toast.success(t("Database deleted"));
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
	};
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
					children: t("Permanently delete this database and all its data. This action cannot be undone.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
						children: /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-muted-foreground" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "truncate text-[14px] font-medium text-foreground",
							children: database.name
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: database.$id
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
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							disabled: deleteMutation.isPending,
							children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete database")]
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [
							/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete database") }), /* @__PURE__ */ jsxs(DialogDescription, {
									className: "mt-2 text-[13px]",
									children: [
										t("Are you sure you want to delete"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											children: database.name
										}),
										"? ",
										t("This action cannot be undone.")
									]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-4 pt-0",
								children: [/* @__PURE__ */ jsxs("label", {
									className: "text-[13px] text-muted-foreground",
									children: [
										t("Type"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "rounded bg-muted px-1.5 py-0.5 font-mono font-medium text-foreground",
											children: database.name
										}),
										" ",
										t("to confirm")
									]
								}), /* @__PURE__ */ jsx(Input, {
									value: deleteConfirmation,
									onChange: (e) => setDeleteConfirmation(e.target.value),
									placeholder: t("Enter database name"),
									className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end",
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
									onClick: handleDelete,
									children: t("Delete database")
								})]
							})
						]
					})]
				})
			})
		]
	});
}
function View() {
	const { projectId, databaseId, database, canWrite, permissionCanWrite, isLoading } = useMysqlDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(MysqlSettingsLoading, {});
	if (!database) return null;
	const cardProps = {
		projectId,
		databaseId,
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
			node: /* @__PURE__ */ jsx(MysqlDatabaseNameCard, { ...cardProps })
		},
		{
			id: "details",
			search: {
				title: "Details",
				keywords: [
					"id",
					"created",
					"updated",
					"status",
					"paused",
					"version"
				]
			},
			node: /* @__PURE__ */ jsx(MysqlDatabaseDetailsCard, { ...cardProps })
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
			node: /* @__PURE__ */ jsx(MysqlDatabaseDangerZoneCard, {
				projectId,
				database,
				canWrite: permissionCanWrite
			})
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
