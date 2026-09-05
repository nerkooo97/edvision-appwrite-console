import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Rg as useUpdatePostgresDatabase } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { Jt as POSTGRES_DATABASE_SPECS_SOURCE, yt as useDatabaseSpecifications } from "./databases-Dh0pwZ6h.js";
import { p as mapDedicatedDatabaseSpecifications, u as hasLockedDatabaseSpecifications } from "./database-specs-CBc802K0.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { s as localizeResourceStatusLabel } from "./resource-status-labels-C-bLMJxj.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
function dedicatedStatusVariant(status) {
	switch (status) {
		case "ready": return "success";
		case "provisioning":
		case "scaling":
		case "restoring":
		case "upgrading":
		case "migrating":
		case "pausing":
		case "resuming":
		case "deleting": return "warning";
		case "failed":
		case "deleted": return "error";
		case "paused":
		case "inactive": return "inactive";
		default: return "info";
	}
}
function useWriteAccess(canWrite, isPending) {
	const t = useT();
	return {
		writeDisabled: !canWrite || isPending,
		writeTooltip: !canWrite ? t("You don't have permission to change database settings.") : void 0
	};
}
function PostgresDatabaseNameCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const [databaseName, setDatabaseName] = useState(database.name);
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setDatabaseName(database.name);
	}, [database.name]);
	const handleNameUpdate = () => {
		const trimmed = databaseName.trim();
		if (!trimmed || trimmed === database.name) return;
		updateMutation.mutate({ name: trimmed }, {
			onSuccess: () => toast.success(t("Database name updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update database name")))
		});
	};
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
					value: databaseName,
					onChange: (e) => setDatabaseName(e.target.value),
					placeholder: t("Database name"),
					disabled: writeDisabled,
					title: writeTooltip,
					className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !databaseName.trim() || databaseName.trim() === database.name,
					title: writeTooltip,
					onClick: handleNameUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function PostgresDatabaseDetailsCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const [paused, setPaused] = useState(database.status === "paused");
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setPaused(database.status === "paused");
	}, [database.status]);
	const canPauseResume = database.status === "ready" || database.status === "paused";
	const handlePausedUpdate = () => {
		const nextStatus = paused ? "paused" : "ready";
		if (nextStatus === database.status) return;
		updateMutation.mutate({ status: nextStatus }, {
			onSuccess: () => toast.success(paused ? t("Database paused") : t("Database resumed")),
			onError: (error) => {
				setPaused(database.status === "paused");
				toast.error(getErrorMessage(error, t("Failed to update database status")));
			}
		});
	};
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
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ jsx(Badge, {
							variant: dedicatedStatusVariant(database.status),
							className: "text-[11px] capitalize",
							children: localizeResourceStatusLabel(database.status, t)
						}), database.version ? /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("Version"),
								": ",
								database.version
							]
						}) : null]
					}),
					canPauseResume ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Switch, {
							id: "postgres-db-paused",
							checked: paused,
							onCheckedChange: setPaused,
							disabled: writeDisabled
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "postgres-db-paused",
							className: "text-[13px] text-foreground",
							children: paused ? t("Paused") : t("Running")
						})]
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-1",
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
									t("Created"),
									":",
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: database.$createdAt,
										showFormattedDate: true,
										className: "text-foreground"
									})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Last updated"),
									":",
									" ",
									/* @__PURE__ */ jsx(DateTooltip, {
										date: database.$updatedAt || database.$createdAt,
										showFormattedDate: true,
										className: "text-foreground"
									})
								]
							}),
							database.networkMaxConnections > 0 ? /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Max connections"),
									":",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground tabular-nums",
										children: database.networkMaxConnections
									})
								]
							}) : null
						]
					})
				]
			}),
			canPauseResume ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || (paused ? "paused" : "ready") === database.status,
					title: writeTooltip,
					onClick: handlePausedUpdate,
					children: t("Update")
				})
			}) : null
		]
	});
}
function PostgresDatabaseComputeTierCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const { project } = useProject(projectId);
	const { data: specificationsData } = useDatabaseSpecifications(projectId, POSTGRES_DATABASE_SPECS_SOURCE);
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const specs = useMemo(() => mapDedicatedDatabaseSpecifications(specificationsData?.specifications), [specificationsData?.specifications]);
	const currentSpecIndex = useMemo(() => specs.findIndex((spec) => spec.id === database.specification), [specs, database.specification]);
	const handleSpecificationUpgrade = (specification) => {
		updateMutation.mutate({ specification }, {
			onSuccess: () => toast.success(t("Compute tier update started")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update compute tier")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "specification",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Compute tier")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Change the compute tier for this database. Upgrades apply with zero downtime via rolling cutover.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border bg-muted/40",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Tier")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "CPU"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Memory")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Connections")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
						children: t("Price")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[120px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: specs.map((spec, index) => {
				const isCurrent = spec.id === database.specification;
				const locked = spec.comingSoon === true;
				const canUpgrade = canWrite && !locked && !isCurrent && !(currentSpecIndex >= 0 && index < currentSpecIndex) && (currentSpecIndex < 0 || index > currentSpecIndex);
				return /* @__PURE__ */ jsxs(TableRow, {
					className: cn("border-b border-border last:border-b-0", isCurrent && "bg-primary/5"),
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3",
							children: /* @__PURE__ */ jsxs("span", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[13px] font-medium text-foreground",
										children: spec.label
									}),
									isCurrent ? /* @__PURE__ */ jsxs(Badge, {
										variant: "success",
										className: "gap-1 text-[10px] shrink-0",
										children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("Current")]
									}) : null,
									locked ? /* @__PURE__ */ jsx(Badge, {
										variant: "inactive",
										className: "text-[10px] shrink-0",
										children: t("Coming soon")
									}) : null
								]
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] text-muted-foreground",
							children: spec.cpu
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] text-muted-foreground",
							children: spec.memory
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] tabular-nums text-muted-foreground",
							children: spec.connections
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-end text-[13px] font-medium tabular-nums text-foreground",
							children: spec.price
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3 text-end",
							children: canUpgrade ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-8 text-[12px]",
								disabled: updateMutation.isPending,
								onClick: () => handleSpecificationUpgrade(spec.id),
								children: t("Upgrade")
							}) : null
						})
					]
				}, spec.id);
			}) })] }),
			hasLockedDatabaseSpecifications(specs) ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-3",
				children: /* @__PURE__ */ jsx(SpecificationsUpgradeNote, {
					orgId: project?.teamId,
					showContactSales: true
				})
			}) : null
		]
	});
}
export { PostgresDatabaseDetailsCard as n, PostgresDatabaseNameCard as r, PostgresDatabaseComputeTierCard as t };
