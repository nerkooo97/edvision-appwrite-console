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
import { Mt as useOrganizationPlan, fn as resolveOrganizationPlanDisplayLabel } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { lh as POSTGRES_BACKUPS_PAGE_SIZE, mh as usePostgresBackups, ph as usePostgresBackupPolicies } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { St as toByteCount } from "./form-field-type-badge-C7qMzJo0.js";
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
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { n as MenuItemContent } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { r as formatDateTime } from "./date-utils-C_g8GS8c.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { i as supportsAdvancedBackupPolicies, r as isBackupPoliciesAtPlanLimit, t as getBackupPoliciesPlanLimit } from "./backup-policy-plan-limits-CQc9cBuL.js";
import "./postgres-tab-route-loader-B--X8VvC.js";
import { t as Route$1 } from "./projects._projectId.databases.postgres._databaseId.backups-B7wToULU.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-BZWeW6wv.js";
import { t as PlanLimitWarning } from "./PlanLimitWarning-Cyo_O_jj.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { AlertCircle, Archive, CheckCircle2, CircleDashed, Clock, Copy, Plus, RotateCcw, Trash2 } from "lucide-react";
function getPostgresBackupStatus(status) {
	const statusInfo = {
		pending: {
			label: "Pending",
			icon: Clock,
			badgeVariant: "pending"
		},
		running: {
			label: "Processing",
			icon: CircleDashed,
			badgeVariant: "processing"
		},
		completed: {
			label: "Complete",
			icon: CheckCircle2,
			badgeVariant: "completed"
		},
		verified: {
			label: "Verified",
			icon: CheckCircle2,
			badgeVariant: "completed"
		},
		failed: {
			label: "Failed",
			icon: AlertCircle,
			badgeVariant: "failed"
		}
	}[status] || {
		label: "Waiting",
		icon: Clock,
		badgeVariant: "pending"
	};
	return {
		label: statusInfo.label,
		badgeVariant: statusInfo.badgeVariant,
		icon: statusInfo.icon
	};
}
function formatBackupSize(bytes) {
	const n = toByteCount(bytes);
	if (n <= 0) return "-";
	const mb = n / (1e3 * 1e3);
	if (mb < 1) return `${(n / 1e3).toFixed(2)} KB`;
	return `${mb.toFixed(2)} MB`;
}
function getNextBackupDate(schedule, t) {
	const now = /* @__PURE__ */ new Date();
	const nextDate = new Date(now);
	if (schedule === "0 * * * *") nextDate.setHours(nextDate.getHours() + 1, 0, 0, 0);
	else if (schedule.includes("* * *")) {
		nextDate.setDate(nextDate.getDate() + 1);
		nextDate.setHours(0, 0, 0, 0);
	} else return t("Calculating...");
	return formatDateTime(nextDate);
}
function isManualPostgresBackup(backup) {
	return backup.trigger === "manual" || !backup.policyId;
}
function View({ projectId, databaseId }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const backupPoliciesLimit = getBackupPoliciesPlanLimit(organizationPlan);
	const planName = resolveOrganizationPlanDisplayLabel({
		planName: organizationPlan?.name ?? null,
		planId: organizationPlan?.$id
	});
	const [backupsPage, setBackupsPage] = useState(1);
	const [backupsPageSize, setBackupsPageSize] = useState(POSTGRES_BACKUPS_PAGE_SIZE);
	const [createPolicyDialogOpen, setCreatePolicyDialogOpen] = useState(false);
	const [createManualBackupDialogOpen, setCreateManualBackupDialogOpen] = useState(false);
	const [restoreDialogOpen, setRestoreDialogOpen] = useState(false);
	const [deletePolicyDialogOpen, setDeletePolicyDialogOpen] = useState(false);
	const [deleteBackupDialogOpen, setDeleteBackupDialogOpen] = useState(false);
	const [bulkDeleteDialogOpen, setBulkDeleteDialogOpen] = useState(false);
	const [selectedPolicy, setSelectedPolicy] = useState(null);
	const [selectedBackup, setSelectedBackup] = useState(null);
	const [selectedBackups, setSelectedBackups] = useState(/* @__PURE__ */ new Set());
	const { data: policiesData, isLoading: policiesLoading } = usePostgresBackupPolicies(projectId, databaseId);
	const { data: backupsData, isLoading: backupsLoading } = usePostgresBackups(projectId, databaseId, backupsPage - 1, backupsPageSize);
	const policies = policiesData?.policies || [];
	const backups = backupsData?.backups || [];
	const backupsTotal = typeof backupsData?.total === "bigint" ? Number(backupsData.total) : backupsData?.total || 0;
	const isAtBackupPoliciesLimit = isBackupPoliciesAtPlanLimit(policies.length, backupPoliciesLimit);
	const createPolicyDisabledTooltip = isAtBackupPoliciesLimit ? t("You've reached the limit for this resource on your plan") : void 0;
	const isPoliciesActuallyLoading = policiesLoading && policies.length === 0 && !policiesData;
	const isBackupsActuallyLoading = backupsLoading && backups.length === 0 && !backupsData;
	const invalidatePolicies = () => {
		queryClient.invalidateQueries({ queryKey: [
			"dedicated-backup-policies",
			"project",
			projectId,
			databaseId
		] });
	};
	const invalidateBackups = () => {
		queryClient.invalidateQueries({ queryKey: [
			"postgres-backups",
			"project",
			projectId,
			databaseId
		] });
	};
	const createPolicyMutation = useMutation({
		mutationFn: async (items) => {
			const projectSdk = sdk.forProject(projectId);
			return Promise.all(items.map((policy) => projectSdk.postgresql.createBackupPolicy({
				databaseId,
				policyId: policy.policyId,
				name: policy.name,
				schedule: policy.schedule,
				retention: policy.retention,
				enabled: policy.enabled ?? true
			})));
		},
		onSuccess: (_data, variables) => {
			if (variables.length === 1) toast.success(/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("b", { children: variables[0].name || t("Policy") }),
				" ",
				t("policy has been created")
			] }));
			else toast.success(t("Backup policies have been created"));
			invalidatePolicies();
			setCreatePolicyDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to create backup policy"));
		}
	});
	const deletePolicyMutation = useMutation({
		mutationFn: async (policyId) => {
			return sdk.forProject(projectId).postgresql.deleteBackupPolicy({
				databaseId,
				policyId
			});
		},
		onSuccess: () => {
			toast.success(t("Backup policy has been deleted"));
			invalidatePolicies();
			setDeletePolicyDialogOpen(false);
			setSelectedPolicy(null);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete backup policy"));
		}
	});
	const createBackupMutation = useMutation({
		mutationFn: async () => {
			return sdk.forProject(projectId).postgresql.createBackup({ databaseId });
		},
		onSuccess: () => {
			toast.success(t("Database backup has started"));
			invalidateBackups();
			setCreateManualBackupDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to create backup"));
		}
	});
	const deleteBackupMutation = useMutation({
		mutationFn: async (backupId) => {
			return sdk.forProject(projectId).postgresql.deleteBackup({
				databaseId,
				backupId
			});
		},
		onSuccess: () => {
			toast.success(t("1 backup deleted"));
			invalidateBackups();
			setDeleteBackupDialogOpen(false);
			setSelectedBackup(null);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete backup"));
		}
	});
	const bulkDeleteBackupsMutation = useMutation({
		mutationFn: async (backupIds) => {
			const projectSdk = sdk.forProject(projectId);
			await Promise.all(backupIds.map((backupId) => projectSdk.postgresql.deleteBackup({
				databaseId,
				backupId
			})));
		},
		onSuccess: () => {
			toast.success(selectedBackups.size === 1 ? t("Backup deleted successfully") : t("Backups deleted successfully"));
			invalidateBackups();
			setSelectedBackups(/* @__PURE__ */ new Set());
			setBulkDeleteDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete backups"));
		}
	});
	const createRestorationMutation = useMutation({
		mutationFn: async (backupId) => {
			return sdk.forProject(projectId).postgresql.createRestoration({
				databaseId,
				type: "backup",
				backupId
			});
		},
		onSuccess: () => {
			toast.success(t("Database restore initiated"));
			invalidateBackups();
			setRestoreDialogOpen(false);
			setSelectedBackup(null);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to restore backup"));
		}
	});
	const getPreviousBackup = (policyId) => {
		return backups.find((backup) => backup.policyId === policyId && (backup.status === "completed" || backup.status === "verified"));
	};
	useEffect(() => {
		setSelectedBackups(/* @__PURE__ */ new Set());
		setBulkDeleteDialogOpen(false);
	}, [backupsPage, backupsPageSize]);
	const handleBulkDelete = () => {
		if (selectedBackups.size === 0) return;
		setBulkDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedBackups.size === 0) return;
		bulkDeleteBackupsMutation.mutate(Array.from(selectedBackups));
	};
	const handlePageChange = (page) => {
		setBackupsPage(page);
		setSelectedBackups(/* @__PURE__ */ new Set());
	};
	const handlePageSizeChange = (size) => {
		setBackupsPageSize(size);
		setBackupsPage(1);
		setSelectedBackups(/* @__PURE__ */ new Set());
	};
	const showPlanLimitWarning = backupPoliciesLimit > 0 && policies.length >= backupPoliciesLimit * .5;
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [organizationPlan !== void 0 ? /* @__PURE__ */ jsx(PlanLimitWarning, {
			currentCount: policies.length,
			limit: backupPoliciesLimit,
			planName,
			resourceName: "backup policies",
			orgId: project?.teamId,
			fullWidth: true
		}) : null, /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6", !showPlanLimitWarning && "mt-4 sm:mt-6", showPlanLimitWarning && "pt-4 sm:pt-6"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 lg:grid-cols-3 lg:items-stretch",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-1 flex flex-col",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Policies")
								}), /* @__PURE__ */ jsx(Badge, {
									variant: "secondary",
									className: "text-[12px] font-normal",
									children: backupPoliciesLimit > 0 ? `${policies.length}/${backupPoliciesLimit}` : t("Unlimited")
								})]
							}), isAtBackupPoliciesLimit ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(Button, {
									onClick: () => setCreatePolicyDialogOpen(true),
									variant: "brandCta",
									disabled: true,
									size: "sm",
									className: "h-8 gap-1.5 text-[12px] font-medium",
									children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create policy")]
								}) })
							}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", {
								className: "text-xs",
								children: createPolicyDisabledTooltip
							}) })] }) : /* @__PURE__ */ jsxs(Button, {
								onClick: () => setCreatePolicyDialogOpen(true),
								variant: "brandCta",
								size: "sm",
								className: "h-8 gap-1.5 text-[12px] font-medium",
								children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create policy")]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex-1",
							children: isPoliciesActuallyLoading ? /* @__PURE__ */ jsx("div", {
								className: "flex h-full min-h-[280px] items-center justify-center rounded-lg border border-border bg-card py-12 text-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "text-muted-foreground",
									children: t("Loading policies...")
								})
							}) : policies.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Archive,
								title: t("Ensure your data stays safe"),
								description: t("Create a backup policy to automate regular and secure data protection."),
								isEmpty: true,
								variant: "card",
								iconSize: "md",
								className: "flex h-full min-h-[280px] flex-col items-center justify-center"
							}) : /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: policies.map((policy) => {
									const previousBackup = getPreviousBackup(policy.$id);
									const scheduleText = policy.schedule === "0 * * * *" ? t("Runs hourly") : policy.schedule.includes("* * *") ? t("Runs daily") : t("Runs on schedule");
									const retentionText = policy.retention === 36500 ? t("Retained forever") : policy.retention === 7 ? t("Retained for 1 week") : policy.retention === 1 ? t("Retained for 1 day") : `${t("Retained for")} ${policy.retention} ${t("days")}`;
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-lg border border-border bg-background p-4",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start justify-between mb-3",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex-1 min-w-0",
													children: [/* @__PURE__ */ jsx("h4", {
														className: "text-[14px] font-medium text-foreground mb-1",
														children: policy.name || t("Unnamed Policy")
													}), /* @__PURE__ */ jsxs("p", {
														className: "text-[13px] text-muted-foreground",
														children: [
															scheduleText,
															" • ",
															retentionText
														]
													})]
												}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
												}), /* @__PURE__ */ jsx(DropdownMenuContent, {
													align: "end",
													children: /* @__PURE__ */ jsx(DropdownMenuItem, {
														onClick: () => {
															setSelectedPolicy(policy);
															setDeletePolicyDialogOpen(true);
														},
														children: /* @__PURE__ */ jsx(MenuItemContent, {
															icon: Trash2,
															children: t("Delete")
														})
													})
												})] })]
											}),
											/* @__PURE__ */ jsx("div", { className: "border-t border-border my-3" }),
											/* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-2 gap-4 text-[13px]",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-muted-foreground mb-1.5",
													children: t("Previous")
												}), /* @__PURE__ */ jsx("div", {
													className: "flex items-center gap-1.5",
													children: previousBackup ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-green-500 shrink-0" }), /* @__PURE__ */ jsx(DateTooltip, { date: previousBackup.$createdAt })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-muted-foreground shrink-0" }), /* @__PURE__ */ jsx("span", {
														className: "text-foreground",
														children: t("No backups yet")
													})] })
												})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-muted-foreground mb-1.5",
													children: t("Next")
												}), /* @__PURE__ */ jsx("div", {
													className: "text-foreground",
													children: getNextBackupDate(policy.schedule, t)
												})] })]
											})
										]
									}, policy.$id);
								})
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2 flex flex-col",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Backups")
							}), /* @__PURE__ */ jsxs(Button, {
								variant: "brandCta",
								onClick: () => setCreateManualBackupDialogOpen(true),
								size: "sm",
								className: "h-8 gap-1.5 text-[12px] font-medium",
								children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Manual backup")]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex-1",
							children: isBackupsActuallyLoading ? /* @__PURE__ */ jsx("div", {
								className: "flex h-full min-h-[280px] items-center justify-center rounded-lg border border-border bg-card py-12 text-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "text-muted-foreground",
									children: t("Loading backups...")
								})
							}) : backups.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Archive,
								title: t("No backups yet"),
								description: t("Create a manual backup or set up a policy to get started."),
								isEmpty: true,
								variant: "card",
								iconSize: "md",
								className: "flex h-full min-h-[280px] flex-col items-center justify-center"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
								className: "rounded-lg border border-border bg-card",
								children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
									className: "hover:bg-transparent border-b border-border",
									children: [
										/* @__PURE__ */ jsx(TableHead, {
											className: "w-[50px] px-4 py-3",
											children: /* @__PURE__ */ jsx(Checkbox, {
												checked: backups.length > 0 && backups.every((backup) => selectedBackups.has(backup.$id)),
												onCheckedChange: (checked) => {
													if (checked) setSelectedBackups(new Set(backups.map((backup) => backup.$id)));
													else setSelectedBackups(/* @__PURE__ */ new Set());
												}
											})
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
											children: t("Backup ID")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[150px]",
											children: t("Created")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[100px]",
											children: t("Size")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[120px]",
											children: t("Status")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Policy")
										}),
										/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[100px] pe-4" })
									]
								}) }), /* @__PURE__ */ jsx(TableBody, { children: backups.map((backup) => {
									const status = getPostgresBackupStatus(backup.status);
									const StatusIcon = status.icon;
									const policy = backup.policyId ? policies.find((item) => item.$id === backup.policyId) : null;
									const canRestore = backup.status === "completed" || backup.status === "verified";
									return /* @__PURE__ */ jsxs(TableRow, {
										className: "hover:bg-muted/50",
										children: [
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(Checkbox, {
													checked: selectedBackups.has(backup.$id),
													onCheckedChange: (checked) => {
														const next = new Set(selectedBackups);
														if (checked) next.add(backup.$id);
														else next.delete(backup.$id);
														setSelectedBackups(next);
													},
													onClick: (e) => e.stopPropagation()
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: backup.$id,
													size: "sm",
													maxWidth: 180
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(DateTooltip, {
													date: backup.$createdAt,
													className: "text-[12px] font-medium text-muted-foreground"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx("code", {
													className: "text-[12px] font-mono text-muted-foreground",
													children: formatBackupSize(backup.sizeBytes)
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsxs(Badge, {
													variant: status.badgeVariant,
													className: "gap-1.5 text-[11px] font-medium",
													children: [/* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" }), t(status.label)]
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: policy ? /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-foreground",
													children: policy.name || t("Unnamed Policy")
												}) : isManualPostgresBackup(backup) ? /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground",
													children: t("Manual")
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[12px] text-muted-foreground",
													children: "-"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3 text-end pe-4",
												children: /* @__PURE__ */ jsx("div", {
													className: "flex justify-end",
													children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
														asChild: true,
														children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
													}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
														align: "end",
														children: [
															canRestore && /* @__PURE__ */ jsx(DropdownMenuItem, {
																onClick: () => {
																	setSelectedBackup(backup);
																	setRestoreDialogOpen(true);
																},
																children: /* @__PURE__ */ jsx(MenuItemContent, {
																	icon: RotateCcw,
																	children: t("Restore")
																})
															}),
															/* @__PURE__ */ jsx(DropdownMenuItem, {
																onClick: () => {
																	navigator.clipboard.writeText(backup.$id);
																	toast.success(t("Backup ID copied to clipboard"));
																},
																children: /* @__PURE__ */ jsx(MenuItemContent, {
																	icon: Copy,
																	children: t("Copy ID")
																})
															}),
															/* @__PURE__ */ jsx(DropdownMenuItem, {
																onClick: () => {
																	setSelectedBackup(backup);
																	setDeleteBackupDialogOpen(true);
																},
																children: /* @__PURE__ */ jsx(MenuItemContent, {
																	icon: Trash2,
																	children: t("Delete")
																})
															})
														]
													})] })
												})
											})
										]
									}, backup.$id);
								}) })] })
							}), backupsTotal > 0 && /* @__PURE__ */ jsx("div", {
								className: "mt-4",
								children: /* @__PURE__ */ jsx(Pagination, {
									currentPage: backupsPage,
									totalItems: backupsTotal,
									pageSize: backupsPageSize,
									pageSizeOptions: [
										12,
										18,
										36,
										72
									],
									onPageChange: handlePageChange,
									onPageSizeChange: handlePageSizeChange,
									showTotal: true,
									itemLabel: t("backups")
								})
							})] })
						})]
					})]
				}),
				selectedBackups.size > 0 && /* @__PURE__ */ jsx("div", {
					className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
						children: [/* @__PURE__ */ jsxs(Badge, {
							variant: "secondary",
							className: "h-6 px-2.5",
							children: [
								selectedBackups.size,
								" ",
								selectedBackups.size > 1 ? t("backups selected") : t("backup selected")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedBackups(/* @__PURE__ */ new Set()),
								className: "h-8 text-xs",
								children: t("Cancel")
							}), /* @__PURE__ */ jsxs(Button, {
								variant: "destructive",
								size: "sm",
								onClick: handleBulkDelete,
								disabled: bulkDeleteBackupsMutation.isPending,
								className: "h-8 gap-2",
								children: [/* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }), t("Delete")]
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: bulkDeleteDialogOpen,
					onOpenChange: setBulkDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete backups") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: selectedBackups.size > 1 ? t("Are you sure you want to delete the selected backups? This action cannot be undone.") : t("Are you sure you want to delete this backup? This action cannot be undone.")
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => setBulkDeleteDialogOpen(false),
								disabled: bulkDeleteBackupsMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: confirmBulkDelete,
								disabled: bulkDeleteBackupsMutation.isPending,
								children: t("Delete")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(CreatePolicyDialog, {
					open: createPolicyDialogOpen,
					onOpenChange: setCreatePolicyDialogOpen,
					onSubmit: (items) => createPolicyMutation.mutate(items),
					isLoading: createPolicyMutation.isPending,
					existingPoliciesCount: policies.length,
					backupPoliciesLimit
				}),
				/* @__PURE__ */ jsx(CreateManualBackupDialog, {
					open: createManualBackupDialogOpen,
					onOpenChange: setCreateManualBackupDialogOpen,
					onSubmit: () => createBackupMutation.mutate(),
					isLoading: createBackupMutation.isPending
				}),
				selectedBackup && /* @__PURE__ */ jsx(RestoreBackupDialog, {
					open: restoreDialogOpen,
					onOpenChange: setRestoreDialogOpen,
					backup: selectedBackup,
					onSubmit: () => createRestorationMutation.mutate(selectedBackup.$id),
					isLoading: createRestorationMutation.isPending
				}),
				selectedPolicy && /* @__PURE__ */ jsx(DeletePolicyDialog, {
					open: deletePolicyDialogOpen,
					onOpenChange: setDeletePolicyDialogOpen,
					policy: selectedPolicy,
					onConfirm: () => deletePolicyMutation.mutate(selectedPolicy.$id),
					isLoading: deletePolicyMutation.isPending
				}),
				selectedBackup && /* @__PURE__ */ jsx(DeleteBackupDialog, {
					open: deleteBackupDialogOpen,
					onOpenChange: setDeleteBackupDialogOpen,
					backup: selectedBackup,
					onConfirm: () => deleteBackupMutation.mutate(selectedBackup.$id),
					isLoading: deleteBackupMutation.isPending
				})
			]
		})]
	});
}
function CreatePolicyDialog({ open, onOpenChange, onSubmit, isLoading, existingPoliciesCount, backupPoliciesLimit }) {
	const t = useT();
	const [selectedPresets, setSelectedPresets] = useState([]);
	const [customPolicies, setCustomPolicies] = useState([]);
	const handleOpenChange = (newOpen) => {
		if (!newOpen) {
			setSelectedPresets([]);
			setCustomPolicies([]);
		}
		onOpenChange(newOpen);
	};
	const handleSubmit = () => {
		const policies = [];
		if (selectedPresets.includes("hourly")) policies.push({
			policyId: ID.unique(),
			retention: 1,
			schedule: "0 * * * *",
			name: "Hourly backup",
			enabled: true
		});
		if (selectedPresets.includes("daily")) policies.push({
			policyId: ID.unique(),
			retention: 7,
			schedule: "0 2 * * *",
			name: "Daily backup",
			enabled: true
		});
		customPolicies.forEach((custom) => {
			let schedule = "";
			let retention = custom.retention;
			if (custom.retentionUnit === "forever") retention = 36500;
			else if (custom.retentionUnit === "weeks") retention = (custom.customRetention || 1) * 7;
			else if (custom.retentionUnit === "months") retention = (custom.customRetention || 1) * 30;
			else if (custom.retentionUnit === "years") retention = (custom.customRetention || 1) * 365;
			else retention = custom.customRetention || 1;
			const [hour, minute] = custom.time.split(":").map(Number);
			if (custom.frequency === "hourly") schedule = "0 * * * *";
			else if (custom.frequency === "daily") schedule = `${minute || 0} ${hour || 2} * * *`;
			else if (custom.frequency === "weekly") {
				const dayOfWeek = custom.dayOfWeek?.[0] || 1;
				schedule = `${minute || 0} ${hour || 2} * * ${dayOfWeek}`;
			} else if (custom.frequency === "monthly") {
				const dayOfMonth = custom.dayOfMonth === "first" ? 1 : custom.dayOfMonth === "middle" ? 15 : 28;
				schedule = `${minute || 0} ${hour || 2} ${dayOfMonth} * *`;
			}
			policies.push({
				policyId: ID.unique(),
				retention,
				schedule,
				name: custom.name || `${custom.frequency} backup`,
				enabled: true
			});
		});
		if (policies.length === 0) return;
		onSubmit(policies);
	};
	const totalPolicies = selectedPresets.length + customPolicies.length;
	const canCreateCustom = backupPoliciesLimit === 0 || existingPoliciesCount + totalPolicies < backupPoliciesLimit;
	const supportsCustomPolicies = supportsAdvancedBackupPolicies(backupPoliciesLimit);
	const remainingSlots = backupPoliciesLimit > 0 ? Math.max(0, backupPoliciesLimit - existingPoliciesCount - totalPolicies) : null;
	const canSelectAnotherPreset = remainingSlots == null || remainingSlots > 0;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-2xl p-0 max-h-[90dvh] overflow-y-auto",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create backup policy") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: supportsCustomPolicies ? t("Choose preset policies or create custom backup schedules.") : t("Your plan only supports the daily preset policy. Upgrade to create custom policies.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[13px]",
							children: t("Preset Policies")
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [supportsCustomPolicies ? /* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-2 rounded-lg border border-border p-3",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: "hourly",
									checked: selectedPresets.includes("hourly"),
									disabled: !selectedPresets.includes("hourly") && !canSelectAnotherPreset,
									onCheckedChange: (checked) => {
										if (checked) {
											if (selectedPresets.includes("hourly") || !canSelectAnotherPreset) return;
											setSelectedPresets([...selectedPresets, "hourly"]);
										} else setSelectedPresets(selectedPresets.filter((preset) => preset !== "hourly"));
									}
								}), /* @__PURE__ */ jsxs(Label, {
									htmlFor: "hourly",
									className: "flex-1 cursor-pointer",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-medium text-[13px]",
										children: t("Hourly")
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[12px] text-muted-foreground",
										children: t("Runs every hour, retained for 24 hours")
									})]
								})]
							}) : null, /* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-2 rounded-lg border border-border p-3",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: "daily",
									checked: selectedPresets.includes("daily"),
									disabled: !selectedPresets.includes("daily") && !canSelectAnotherPreset,
									onCheckedChange: (checked) => {
										if (checked) {
											if (selectedPresets.includes("daily") || !canSelectAnotherPreset) return;
											setSelectedPresets([...selectedPresets, "daily"]);
										} else setSelectedPresets(selectedPresets.filter((preset) => preset !== "daily"));
									}
								}), /* @__PURE__ */ jsxs(Label, {
									htmlFor: "daily",
									className: "flex-1 cursor-pointer",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-medium text-[13px]",
										children: t("Daily")
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[12px] text-muted-foreground",
										children: t("Runs every day, retained for 7 days")
									})]
								})]
							})]
						})]
					}), supportsCustomPolicies ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx(Label, {
								className: "text-[13px]",
								children: t("Custom Policies")
							}), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								disabled: !canCreateCustom,
								onClick: () => {
									if (!canCreateCustom) return;
									setCustomPolicies([...customPolicies, {
										frequency: "daily",
										time: "02:00",
										retention: 7,
										retentionUnit: "days",
										name: ""
									}]);
								},
								children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add custom policy")]
							})]
						}), customPolicies.map((policy, index) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, {
							className: "pb-3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs(CardTitle, {
									className: "text-[14px]",
									children: [
										t("Custom Policy"),
										" ",
										index + 1
									]
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: () => {
										setCustomPolicies(customPolicies.filter((_, itemIndex) => itemIndex !== index));
									},
									children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
								})]
							})
						}), /* @__PURE__ */ jsxs(CardContent, {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Frequency")
									}), /* @__PURE__ */ jsxs(Select, {
										value: policy.frequency,
										onValueChange: (value) => {
											const updated = [...customPolicies];
											updated[index].frequency = value;
											setCustomPolicies(updated);
										},
										children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsxs(SelectContent, { children: [
											/* @__PURE__ */ jsx(SelectItem, {
												value: "hourly",
												children: t("Hourly")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "daily",
												children: t("Daily")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "weekly",
												children: t("Weekly")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "monthly",
												children: t("Monthly")
											})
										] })]
									})]
								}),
								policy.frequency !== "hourly" && /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Time")
									}), /* @__PURE__ */ jsx(Input, {
										type: "time",
										value: policy.time,
										onChange: (e) => {
											const updated = [...customPolicies];
											updated[index].time = e.target.value;
											setCustomPolicies(updated);
										}
									})]
								}),
								policy.frequency === "weekly" && /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Day of Week")
									}), /* @__PURE__ */ jsxs(Select, {
										value: policy.dayOfWeek?.[0]?.toString() || "1",
										onValueChange: (value) => {
											const updated = [...customPolicies];
											updated[index].dayOfWeek = [parseInt(value, 10)];
											setCustomPolicies(updated);
										},
										children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsxs(SelectContent, { children: [
											/* @__PURE__ */ jsx(SelectItem, {
												value: "1",
												children: t("Monday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "2",
												children: t("Tuesday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "3",
												children: t("Wednesday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "4",
												children: t("Thursday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "5",
												children: t("Friday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "6",
												children: t("Saturday")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "0",
												children: t("Sunday")
											})
										] })]
									})]
								}),
								policy.frequency === "monthly" && /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Day of Month")
									}), /* @__PURE__ */ jsxs(Select, {
										value: policy.dayOfMonth || "first",
										onValueChange: (value) => {
											const updated = [...customPolicies];
											updated[index].dayOfMonth = value;
											setCustomPolicies(updated);
										},
										children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsxs(SelectContent, { children: [
											/* @__PURE__ */ jsx(SelectItem, {
												value: "first",
												children: t("First of month")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "middle",
												children: t("Middle (15th)")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "end",
												children: t("End (28th)")
											})
										] })]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Retention")
									}), /* @__PURE__ */ jsxs(Select, {
										value: policy.retentionUnit,
										onValueChange: (value) => {
											const updated = [...customPolicies];
											updated[index].retentionUnit = value;
											setCustomPolicies(updated);
										},
										children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }), /* @__PURE__ */ jsxs(SelectContent, { children: [
											/* @__PURE__ */ jsx(SelectItem, {
												value: "days",
												children: t("Days")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "weeks",
												children: t("Weeks")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "months",
												children: t("Months")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "years",
												children: t("Years")
											}),
											/* @__PURE__ */ jsx(SelectItem, {
												value: "forever",
												children: t("Forever")
											})
										] })]
									})]
								}),
								policy.retentionUnit !== "forever" && /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Number")
									}), /* @__PURE__ */ jsx(Input, {
										type: "number",
										min: "1",
										value: policy.customRetention || 1,
										onChange: (e) => {
											const updated = [...customPolicies];
											updated[index].customRetention = parseInt(e.target.value, 10) || 1;
											setCustomPolicies(updated);
										}
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										className: "text-[13px]",
										children: t("Policy Name")
									}), /* @__PURE__ */ jsx(Input, {
										placeholder: `${policy.frequency} backup`,
										value: policy.name,
										onChange: (e) => {
											const updated = [...customPolicies];
											updated[index].name = e.target.value;
											setCustomPolicies(updated);
										}
									})]
								})
							]
						})] }, index))]
					}) : null]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => handleOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleSubmit,
						disabled: isLoading || totalPolicies === 0,
						children: t("Create")
					})]
				})
			]
		})
	});
}
function CreateManualBackupDialog({ open, onOpenChange, onSubmit, isLoading }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create manual backup") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Manual backups are retained forever unless manually deleted. Use for major data changes or rollback safeguards.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
						className: "text-[13px]",
						children: /* @__PURE__ */ jsx("b", { children: t("Depending on the size of your data, this may take a while.") })
					})] })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: onSubmit,
						disabled: isLoading,
						children: t("Create")
					})]
				})
			]
		})
	});
}
function RestoreBackupDialog({ open, onOpenChange, backup, onSubmit, isLoading }) {
	const t = useT();
	const [confirmRestore, setConfirmRestore] = useState(false);
	const backupStatus = getPostgresBackupStatus(backup.status);
	const StatusIcon = backupStatus.icon;
	const handleOpenChange = (newOpen) => {
		if (!newOpen) setConfirmRestore(false);
		onOpenChange(newOpen);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-2xl p-0 max-h-[90dvh] overflow-y-auto",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-5 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Restore backup") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Restore this database from the selected backup. All current data will be replaced.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden mb-5",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Archive snapshot")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-x-6 gap-y-3 px-6 py-4 text-[13px]",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-0.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: t("Created")
										}), /* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: new Date(backup.$createdAt).toISOString().replace("T", " ").slice(0, 19)
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-0.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: t("Size")
										}), /* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: formatBackupSize(backup.sizeBytes)
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-0.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: t("Status")
										}), /* @__PURE__ */ jsxs(Badge, {
											variant: backupStatus.badgeVariant,
											className: "gap-1.5 text-[11px] font-medium w-fit",
											children: [/* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" }), t(backupStatus.label)]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-0.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground",
											children: t("Age")
										}), /* @__PURE__ */ jsx("span", {
											className: "text-foreground",
											children: formatDistanceToNow(new Date(backup.$createdAt), { addSuffix: true })
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-muted/30 p-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx(Checkbox, {
								id: "confirm-restore",
								checked: confirmRestore,
								onCheckedChange: (checked) => setConfirmRestore(checked === true),
								className: "mt-0.5"
							}), /* @__PURE__ */ jsx(Label, {
								htmlFor: "confirm-restore",
								className: "flex-1 cursor-pointer text-[13px] text-foreground",
								children: t("I understand that all current database data will be permanently replaced by this backup.")
							})]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => handleOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: onSubmit,
						disabled: isLoading || !confirmRestore,
						children: t("Restore")
					})]
				})
			]
		})
	});
}
function DeletePolicyDialog({ open, onOpenChange, policy, onConfirm, isLoading }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete policy") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Are you sure you want to delete the policy"),
							" ",
							/* @__PURE__ */ jsx("strong", { children: policy.name || t("Unnamed Policy") }),
							"?",
							" ",
							t("This action cannot be undone.")
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0",
					children: /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
						className: "text-[13px]",
						children: t("Backups already taken by this policy are kept until their retention expires.")
					})] })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => onOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "destructive",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: onConfirm,
						disabled: isLoading,
						children: t("Delete")
					})]
				})
			]
		})
	});
}
function DeleteBackupDialog({ open, onOpenChange, backup, onConfirm, isLoading }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete backup") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to delete the backup from"),
						" ",
						/* @__PURE__ */ jsx("strong", { children: new Date(backup.$createdAt).toLocaleString() }),
						"?",
						" ",
						t("This action cannot be undone.")
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: () => onOpenChange(false),
					disabled: isLoading,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: onConfirm,
					disabled: isLoading,
					children: t("Delete")
				})]
			})]
		})
	});
}
function PostgresBackupsPage() {
	const { projectId, databaseId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(View, {
		projectId,
		databaseId
	});
}
export { PostgresBackupsPage as component };
