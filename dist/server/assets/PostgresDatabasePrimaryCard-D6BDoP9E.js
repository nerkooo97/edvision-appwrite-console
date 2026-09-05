import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Gh as postgresDatabaseQueryOptions, oh as useCreateDedicatedDatabaseFailover, sh as useDedicatedDatabaseReplicas } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-CRQIrNDu.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function isPrimaryRole(role) {
	return role.trim().toLowerCase() === "primary";
}
function isPlaceholderMemberId(id) {
	return id.startsWith("__");
}
function getMemberId(member, index) {
	const rawId = member.$id || member.id || `${member.role || "member"}-${index}`;
	return String(rawId);
}
function sortMembers(members) {
	return [...members].sort((left, right) => {
		if (isPrimaryRole(left.role)) return -1;
		if (isPrimaryRole(right.role)) return 1;
		return getMemberId(left, 0).localeCompare(getMemberId(right, 0));
	});
}
function expandClusterMembers(members, configuredReplicaCount) {
	const sorted = sortMembers(members);
	const primary = sorted.find((member) => isPrimaryRole(member.role));
	const replicaMembers = sorted.filter((member) => !isPrimaryRole(member.role));
	const targetReplicas = Math.max(Math.max(0, Math.floor(configuredReplicaCount)), replicaMembers.length);
	if (!primary && sorted.length > 0) return sorted;
	const result = [];
	if (primary) result.push(primary);
	else if (targetReplicas > 0) result.push({
		$id: "__primary__",
		role: "primary",
		status: "provisioning",
		lagSeconds: 0
	});
	else return [];
	for (let index = 0; index < targetReplicas; index++) {
		const existing = replicaMembers[index];
		if (existing) result.push(existing);
		else result.push({
			$id: `__replica_${index + 1}__`,
			role: "replica",
			status: "provisioning",
			lagSeconds: 0
		});
	}
	return result;
}
function getMemberStatusVariant(status) {
	const normalized = status.trim().toLowerCase();
	if (normalized === "active") return "success";
	if (normalized === "provisioning" || normalized === "starting") return "warning";
	if (normalized === "failed") return "error";
	if (normalized === "pending") return "warning";
	if (normalized === "notfound") return "error";
	return "info";
}
function formatMemberStatus(status, t) {
	const normalized = status.trim().toLowerCase();
	if (normalized === "active") return t("Active");
	if (normalized === "provisioning") return t("Provisioning");
	if (normalized === "starting") return t("Starting");
	if (normalized === "failed") return t("Failed");
	if (normalized === "pending") return t("Pending");
	if (normalized === "notfound") return t("Not found");
	return status;
}
function formatLagSeconds(role, lagSeconds, t) {
	if (isPrimaryRole(role)) return "-";
	if (lagSeconds == null || !Number.isFinite(lagSeconds)) return t("N/A");
	return t("{seconds}s lag").replace("{seconds}", String(lagSeconds));
}
function getReplicaLabel(member, replicaIndex, t) {
	if (isPrimaryRole(member.role)) return t("Primary instance");
	return `${t("Read replica")} ${replicaIndex}`;
}
function PostgresDatabasePrimaryCard({ projectId, databaseId, database, canWrite, replicationSource, haEngine }) {
	const t = useT();
	const queryClient = useQueryClient();
	const source = replicationSource ?? {
		type: "engine",
		engine: haEngine || database.engine || "postgresql"
	};
	const haEnabled = (database.replicas ?? 0) > 0;
	const pollReplicas = database.status !== "ready";
	const { replicas, members, isLoading } = useDedicatedDatabaseReplicas(projectId, databaseId, source, haEnabled, pollReplicas ? 5e3 : false);
	const failoverMutation = useCreateDedicatedDatabaseFailover(projectId, databaseId, source);
	const [selectedReplicaId, setSelectedReplicaId] = useState(null);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const configuredReplicaCount = replicas?.replicas ?? database.replicas ?? 0;
	const displayMembers = useMemo(() => expandClusterMembers(members, configuredReplicaCount), [members, configuredReplicaCount]);
	const primaryMember = displayMembers.find((member) => isPrimaryRole(member.role));
	const failoverTargets = displayMembers.filter((member) => !isPrimaryRole(member.role) && !isPlaceholderMemberId(getMemberId(member, 0)));
	useEffect(() => {
		if (!selectedReplicaId) return;
		if (!failoverTargets.some((member) => member.$id === selectedReplicaId)) setSelectedReplicaId(null);
	}, [failoverTargets, selectedReplicaId]);
	useEffect(() => {
		if (!pollReplicas || !projectId || !databaseId) return;
		queryClient.invalidateQueries({ queryKey: postgresDatabaseQueryOptions(projectId, databaseId).queryKey });
	}, [
		databaseId,
		pollReplicas,
		projectId,
		queryClient
	]);
	const writeDisabled = !canWrite || failoverMutation.isPending;
	const writeTooltip = !canWrite ? t("You don't have permission to change database settings.") : void 0;
	const databaseBusy = database.status !== "ready";
	const busyTooltip = databaseBusy ? t("Failover is unavailable while the database status is {status}.").replace("{status}", database.status) : void 0;
	const selectedMember = failoverTargets.find((member) => member.$id === selectedReplicaId);
	const promoteDisabled = writeDisabled || databaseBusy || !selectedMember || selectedMember.status.trim().toLowerCase() !== "active";
	const promoteTooltip = writeTooltip ?? busyTooltip ?? (!selectedMember ? t("Select a read replica to promote.") : selectedMember.status.trim().toLowerCase() !== "active" ? t("Only active replicas can be promoted to primary.") : void 0);
	const handlePromote = () => {
		if (!selectedReplicaId || isPlaceholderMemberId(selectedReplicaId)) return;
		failoverMutation.mutate({ targetReplicaId: selectedReplicaId }, {
			onSuccess: () => {
				toast.success(t("Failover started"));
				setConfirmOpen(false);
				setSelectedReplicaId(null);
			},
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to start failover")))
		});
	};
	if (!haEnabled) return null;
	let replicaCounter = 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Primary instance")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Choose which cluster member accepts reads and writes. Promoting a read replica triggers a manual failover.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			isLoading && displayMembers.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Loading cluster members…")
				})
			}) : displayMembers.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("No cluster members are available yet.")
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(RadioGroup, {
				value: selectedReplicaId ?? void 0,
				onValueChange: setSelectedReplicaId,
				className: "w-full gap-0",
				children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
					className: "hover:bg-transparent border-b border-border",
					children: [
						/* @__PURE__ */ jsx(TableHead, { className: "w-[40px] px-6 py-3" }),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Instance")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Role")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
							children: t("Status")
						}),
						/* @__PURE__ */ jsx(TableHead, {
							className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-right",
							children: t("Replication lag")
						})
					]
				}) }), /* @__PURE__ */ jsx(TableBody, { children: displayMembers.map((member, index) => {
					const memberId = getMemberId(member, index);
					const isPrimary = isPrimaryRole(member.role);
					const isPlaceholder = isPlaceholderMemberId(memberId);
					const label = getReplicaLabel(member, isPrimary ? 0 : ++replicaCounter, t);
					const statusVariant = getMemberStatusVariant(member.status);
					const rowDisabled = writeDisabled || databaseBusy || isPlaceholder;
					return /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3",
							children: isPrimary ? /* @__PURE__ */ jsx("span", {
								className: "inline-block size-4",
								"aria-hidden": true
							}) : /* @__PURE__ */ jsx(RadioGroupItem, {
								value: memberId,
								id: `primary-target-${memberId}`,
								disabled: rowDisabled,
								"aria-label": label
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(Label, {
								htmlFor: isPrimary ? void 0 : `primary-target-${memberId}`,
								className: cn("text-[13px] font-medium text-foreground", !isPrimary && !rowDisabled && "cursor-pointer", rowDisabled && !isPrimary && "cursor-not-allowed"),
								children: label
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: isPrimary ? t("Primary") : t("Read replica")
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(Badge, {
								variant: statusVariant,
								className: "text-[10px] shrink-0",
								children: formatMemberStatus(member.status, t)
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3 text-right",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-[13px] tabular-nums text-muted-foreground",
								children: formatLagSeconds(member.role, member.lagSeconds, t)
							})
						})
					] }, `${member.role}-${memberId}-${index}`);
				}) })] })
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-2 px-6 py-3",
				children: primaryMember ? /* @__PURE__ */ jsx("p", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: t("The current primary is {instance}. Select a read replica and promote it to move write traffic.").replace("{instance}", getReplicaLabel(primaryMember, 0, t))
				}) : null
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: promoteDisabled,
					title: promoteTooltip,
					onClick: () => setConfirmOpen(true),
					children: t("Promote to primary")
				})
			})
		]
	}), /* @__PURE__ */ jsx(AlertDialog, {
		open: confirmOpen,
		onOpenChange: setConfirmOpen,
		children: /* @__PURE__ */ jsxs(AlertDialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(AlertDialogHeader, {
				className: "px-6 pt-6 pb-4 text-left",
				children: [/* @__PURE__ */ jsx(AlertDialogTitle, { children: t("Promote to primary") }), /* @__PURE__ */ jsx(AlertDialogDescription, {
					className: "text-[13px] mt-2",
					children: selectedMember ? t("Promote {instance} to primary? The current primary will become a read replica. Writes may be briefly unavailable while failover completes.").replace("{instance}", getReplicaLabel(selectedMember, failoverTargets.indexOf(selectedMember) + 1, t)) : t("Promote the selected read replica to primary? The current primary will become a read replica.")
				})]
			}), /* @__PURE__ */ jsxs(AlertDialogFooter, {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
					disabled: failoverMutation.isPending,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					disabled: failoverMutation.isPending || !selectedMember,
					onClick: handlePromote,
					children: t("Promote to primary")
				})]
			})]
		})
	})] });
}
export { PostgresDatabasePrimaryCard as t };
