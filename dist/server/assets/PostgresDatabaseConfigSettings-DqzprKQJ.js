import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Mt as useOrganizationPlan } from "./organizations-BKtnlNrj.js";
import { L as useDedicatedDatabaseStorageChart, Rg as useUpdatePostgresDatabase, U_ as isPostgresClientBackend, _f as usePostgresActiveConnections, ch as useUpdateDedicatedDatabaseHa, k as useDedicatedDatabaseCardMetrics, q as getDedicatedDatabaseGaugeHeadline, sh as useDedicatedDatabaseReplicas } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { Jt as POSTGRES_DATABASE_SPECS_SOURCE, yt as useDatabaseSpecifications } from "./databases-Dh0pwZ6h.js";
import { _ as DEDICATED_DB_HA_REPLICA_OPTIONS, b as MAX_DEDICATED_DB_HA_REPLICA_COUNT, m as parseDatabaseMaxConnections, p as mapDedicatedDatabaseSpecifications, w as getDedicatedDatabaseCreatePricing, x as calculateDedicatedDatabaseMonthlyCost } from "./database-specs-CBc802K0.js";
import { E as isDedicatedDatabaseReady } from "./database-routes-DB_xKWuY.js";
import { t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { a as formatCompactBytes } from "./format-metric-6jsfxd5f.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { a as clusterReplicaChangePreview, i as clusterNodeStatusesFromMembers, n as DatabaseClusterPreview, o as resolveClusterProxyLabel } from "./DatabaseClusterPreview-Cx1tFSPT.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { endOfDay, startOfDay, subDays } from "date-fns";
import { toast } from "sonner";
import { Info, Minus, Plus, X } from "lucide-react";
var SYNC_MODE_OPTIONS = [
	{
		value: "async",
		label: "Asynchronous",
		summary: "Fastest writes; replicas may lag briefly."
	},
	{
		value: "sync",
		label: "Synchronous",
		summary: "Strongest durability; higher write latency."
	},
	{
		value: "quorum",
		label: "Quorum",
		summary: "Majority confirm; balanced for HA."
	}
];
function PostgresReplicationSyncModePicker({ syncMode, onSyncModeChange, disabled = false }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
		className: "hover:bg-transparent border-b border-border",
		children: [
			/* @__PURE__ */ jsx(TableHead, { className: "w-[40px] px-6 py-3" }),
			/* @__PURE__ */ jsx(TableHead, {
				className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("Mode")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "px-6 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("Summary")
			})
		]
	}) }), /* @__PURE__ */ jsx(TableBody, { children: SYNC_MODE_OPTIONS.map((option) => {
		const isSelected = syncMode === option.value;
		return /* @__PURE__ */ jsxs(TableRow, {
			tabIndex: disabled ? -1 : 0,
			"aria-selected": isSelected,
			onClick: () => {
				if (disabled) return;
				onSyncModeChange(option.value);
			},
			onKeyDown: (event) => {
				if (disabled) return;
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					onSyncModeChange(option.value);
				}
			},
			className: cn("cursor-pointer border-b border-border last:border-b-0", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", disabled && "cursor-not-allowed opacity-50", isSelected && "bg-primary/5"),
			children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-6 py-3",
					children: /* @__PURE__ */ jsx("div", {
						className: cn("flex h-4 w-4 items-center justify-center rounded-full border", isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 bg-background"),
						children: isSelected ? /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary-foreground" }) : null
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3 text-[13px] font-medium text-foreground",
					children: t(option.label)
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-6 py-3 text-[13px] text-muted-foreground",
					children: t(option.summary)
				})
			]
		}, option.value);
	}) })] });
}
function getDefaultStorageUsageDateRange() {
	return {
		from: startOfDay(subDays(/* @__PURE__ */ new Date(), 1)),
		to: endOfDay(/* @__PURE__ */ new Date())
	};
}
function getStorageUsageTone(percentage) {
	if (percentage == null) return "normal";
	if (percentage >= 90) return "critical";
	if (percentage >= 75) return "warning";
	return "normal";
}
function getReplicaOption(count) {
	return DEDICATED_DB_HA_REPLICA_OPTIONS.find((option) => option.count === count) ?? DEDICATED_DB_HA_REPLICA_OPTIONS[0];
}
function useWriteAccess(canWrite, isPending) {
	const t = useT();
	return {
		writeDisabled: !canWrite || isPending,
		writeTooltip: !canWrite ? t("You don't have permission to change database settings.") : void 0
	};
}
function useReplicationSource(props) {
	return props.replicationSource ?? {
		type: "engine",
		engine: props.haEngine || props.database.engine || "postgresql"
	};
}
function useHaEngine(props) {
	return props.haEngine || props.database.engine || (props.replicationSource?.type === "engine" ? props.replicationSource.engine : "postgresql");
}
function PostgresDatabaseReplicasCard({ projectId, databaseId, database, canWrite, replicationSource, haEngine }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const source = useReplicationSource({
		projectId,
		databaseId,
		database,
		canWrite,
		replicationSource,
		haEngine
	});
	const engine = useHaEngine({
		projectId,
		databaseId,
		database,
		canWrite,
		replicationSource,
		haEngine
	});
	const updateMutation = useUpdateDedicatedDatabaseHa(projectId, databaseId, source);
	const { data: specificationsData } = useDatabaseSpecifications(projectId, source);
	const { connections, isLoading: connectionsLoading, refetch: refetchConnections } = usePostgresActiveConnections(projectId, engine === "postgresql" || engine === "postgres" || !engine ? databaseId : null);
	const [replicaCount, setReplicaCount] = useState(database.replicas ?? 0);
	const committedReplicaCount = database.replicas ?? 0;
	const fetchReplicas = committedReplicaCount > 0 || replicaCount > 0 || updateMutation.isPending;
	const { members, refetch: refetchReplicas } = useDedicatedDatabaseReplicas(projectId, databaseId, source, fetchReplicas, fetchReplicas ? 5e3 : false);
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setReplicaCount(database.replicas ?? 0);
	}, [database.replicas]);
	const replicaOption = useMemo(() => getReplicaOption(replicaCount), [replicaCount]);
	const maxConnections = useMemo(() => {
		return parseDatabaseMaxConnections(mapDedicatedDatabaseSpecifications(specificationsData?.specifications).find((spec) => spec.id === database.specification)?.connections);
	}, [database.specification, specificationsData?.specifications]);
	const currentConnections = useMemo(() => connections.filter(isPostgresClientBackend).length, [connections]);
	const memberReplicaCount = useMemo(() => members.filter((member) => String(member.role ?? "").trim().toLowerCase() !== "primary").length, [members]);
	const presentReplicaCount = Math.max(committedReplicaCount, memberReplicaCount);
	const [topologyRefreshing, setTopologyRefreshing] = useState(false);
	const { nodeMetrics, refetch: refetchMetrics } = useDedicatedDatabaseCardMetrics(projectId, databaseId, presentReplicaCount, features.usageStats);
	const handleTopologyRefresh = useCallback(() => {
		setTopologyRefreshing(true);
		Promise.all([
			refetchReplicas(),
			refetchConnections(),
			refetchMetrics()
		]).finally(() => {
			setTopologyRefreshing(false);
		});
	}, [
		refetchConnections,
		refetchMetrics,
		refetchReplicas
	]);
	const memberStatuses = useMemo(() => clusterNodeStatusesFromMembers(members, presentReplicaCount, isDedicatedDatabaseReady(database.status) ? "active" : database.status), [
		database.status,
		members,
		presentReplicaCount
	]);
	const clusterProxy = useMemo(() => ({
		label: resolveClusterProxyLabel({
			engine: database.engine || "postgres",
			api: database.api,
			t
		}),
		connections: {
			current: connectionsLoading ? null : currentConnections,
			max: maxConnections
		},
		status: memberStatuses[0] ?? "active"
	}), [
		connectionsLoading,
		currentConnections,
		database.api,
		database.engine,
		maxConnections,
		memberStatuses,
		t
	]);
	const replicasDirty = replicaCount !== committedReplicaCount;
	const clusterPreview = useMemo(() => clusterReplicaChangePreview(database.status, presentReplicaCount, replicaCount, memberStatuses), [
		database.status,
		memberStatuses,
		presentReplicaCount,
		replicaCount
	]);
	const handleReplicasUpdate = () => {
		updateMutation.mutate({
			replicas: replicaCount,
			name: database.name
		}, {
			onSuccess: () => toast.success(t("High availability settings updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update high availability settings")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Read replicas")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Add read-only instances to scale query traffic and improve failover resilience alongside your primary database.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1 space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px] font-medium text-foreground",
									children: t("Replica count")
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t(replicaOption.label),
										" · 0–",
										5
									]
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] leading-relaxed text-muted-foreground",
								children: t(replicaOption.description)
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 items-center gap-1.5",
							role: "group",
							"aria-label": t("Replica count"),
							children: [
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "icon",
									className: "size-8",
									disabled: writeDisabled || replicaCount <= 0,
									onClick: () => setReplicaCount((count) => Math.max(0, count - 1)),
									children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "flex size-8 items-center justify-center rounded-md border border-border bg-muted/40 text-[13px] font-semibold tabular-nums text-foreground",
									children: replicaCount
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "icon",
									className: "size-8",
									disabled: writeDisabled || replicaCount >= 5,
									onClick: () => setReplicaCount((count) => Math.min(5, count + 1)),
									children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
								})
							]
						})]
					}),
					replicaCount >= 5 ? /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3 rounded-lg border border-border bg-muted/30 px-3 py-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] leading-relaxed text-muted-foreground",
							children: t("You have reached the maximum self-serve replica count. Contact sales if you need a custom high availability configuration.")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 shrink-0 text-[13px]",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: CONTACT_ENTERPRISE_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("Contact sales")
							})
						})]
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Cluster topology")
						}), /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-lg border border-border",
							children: /* @__PURE__ */ jsx(DatabaseClusterPreview, {
								replicaCount: clusterPreview.displayReplicaCount,
								nodeStatuses: clusterPreview.nodeStatuses,
								nodeMetrics,
								proxy: clusterProxy,
								withSectionDivider: false,
								interactive: true,
								onRefresh: handleTopologyRefresh,
								isRefreshing: topologyRefreshing
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !replicasDirty,
					title: writeTooltip,
					onClick: handleReplicasUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function PostgresDatabaseSyncModeCard({ projectId, databaseId, database, canWrite, replicationSource, haEngine }) {
	const t = useT();
	const updateMutation = useUpdateDedicatedDatabaseHa(projectId, databaseId, useReplicationSource({
		projectId,
		databaseId,
		database,
		canWrite,
		replicationSource,
		haEngine
	}));
	const [syncMode, setSyncMode] = useState(database.syncMode || "async");
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setSyncMode(database.syncMode || "async");
	}, [database.syncMode]);
	const syncModeDirty = syncMode !== (database.syncMode || "async");
	const handleSyncModeUpdate = () => {
		updateMutation.mutate({
			syncMode,
			name: database.name
		}, {
			onSuccess: () => toast.success(t("High availability settings updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update high availability settings")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Sync mode")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Choose how the primary confirms writes with read replicas.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx(PostgresReplicationSyncModePicker, {
				syncMode,
				onSyncModeChange: setSyncMode,
				disabled: writeDisabled
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !syncModeDirty,
					title: writeTooltip,
					onClick: handleSyncModeUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function PostgresDatabaseNetworkCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const [idleTimeoutSeconds, setIdleTimeoutSeconds] = useState(String(database.networkIdleTimeoutSeconds ?? ""));
	const [ipAllowlist, setIpAllowlist] = useState(database.networkIPAllowlist ?? []);
	const [ipInput, setIpInput] = useState("");
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setIdleTimeoutSeconds(String(database.networkIdleTimeoutSeconds ?? ""));
		setIpAllowlist(database.networkIPAllowlist ?? []);
	}, [database.networkIdleTimeoutSeconds, database.networkIPAllowlist]);
	const networkDirty = idleTimeoutSeconds !== String(database.networkIdleTimeoutSeconds ?? "") || JSON.stringify(ipAllowlist) !== JSON.stringify(database.networkIPAllowlist ?? []);
	const addIpAddress = () => {
		const value = ipInput.trim();
		if (!value || ipAllowlist.includes(value)) return;
		setIpAllowlist((prev) => [...prev, value]);
		setIpInput("");
	};
	const removeIpAddress = (value) => {
		setIpAllowlist((prev) => prev.filter((entry) => entry !== value));
	};
	const handleNetworkUpdate = () => {
		const parsedIdleTimeout = Number.parseInt(idleTimeoutSeconds, 10);
		updateMutation.mutate({
			networkIdleTimeoutSeconds: Number.isFinite(parsedIdleTimeout) ? parsedIdleTimeout : void 0,
			networkIPAllowlist: ipAllowlist
		}, {
			onSuccess: () => toast.success(t("Network settings updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update network settings")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Network")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Configure connection idle timeout and restrict access to specific IP addresses or CIDR ranges.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "network-idle-timeout",
						className: "text-[13px]",
						children: t("Connection idle timeout (seconds)")
					}), /* @__PURE__ */ jsx(Input, {
						id: "network-idle-timeout",
						type: "number",
						min: 60,
						max: 86400,
						value: idleTimeoutSeconds,
						onChange: (e) => setIdleTimeoutSeconds(e.target.value),
						disabled: writeDisabled,
						className: "h-9 max-w-xs text-[13px]"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							className: "text-[13px]",
							children: t("IP allowlist")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Leave empty to allow connections from any IP address.")
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: ipAllowlist.map((entry) => /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 px-2 py-1 text-[12px] font-mono text-foreground",
								children: [entry, canWrite ? /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "text-muted-foreground hover:text-foreground",
									onClick: () => removeIpAddress(entry),
									"aria-label": t("Remove IP address"),
									children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
								}) : null]
							}, entry))
						}),
						canWrite ? /* @__PURE__ */ jsxs("div", {
							className: "flex max-w-md gap-2",
							children: [/* @__PURE__ */ jsx(Input, {
								value: ipInput,
								onChange: (e) => setIpInput(e.target.value),
								placeholder: t("192.168.0.0/24"),
								className: "h-9 text-[13px] font-mono",
								onKeyDown: (e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addIpAddress();
									}
								}
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 shrink-0 text-[13px]",
								onClick: addIpAddress,
								disabled: !ipInput.trim(),
								children: t("Add")
							})]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !networkDirty,
					title: writeTooltip,
					onClick: handleNetworkUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function PostgresDatabasePitrCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const { data: specificationsData } = useDatabaseSpecifications(projectId, POSTGRES_DATABASE_SPECS_SOURCE);
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const [pitrEnabled, setPitrEnabled] = useState(database.pitr === true);
	const [pitrRetentionDays, setPitrRetentionDays] = useState(String(database.pitrRetentionDays ?? ""));
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	const pricing = useMemo(() => getDedicatedDatabaseCreatePricing(organizationPlan, specificationsData?.pricing ?? null), [organizationPlan, specificationsData?.pricing]);
	const pitrCost = calculateDedicatedDatabaseMonthlyCost({
		basePriceUsd: useMemo(() => {
			return mapDedicatedDatabaseSpecifications(specificationsData?.specifications).find((spec) => spec.id === database.specification)?.priceUsd ?? 0;
		}, [database.specification, specificationsData?.specifications]),
		replicaCount: 0,
		pitrEnabled: true,
		pricing
	}).pitrUsd;
	const pitrRatePercent = Math.round(pricing.pitrRate * 100);
	const showPitrChargeAlert = features.billing && database.pitr !== true && pricing.pitrRate > 0;
	useEffect(() => {
		setPitrEnabled(database.pitr === true);
		setPitrRetentionDays(String(database.pitrRetentionDays ?? ""));
	}, [database.pitr, database.pitrRetentionDays]);
	const pitrDirty = pitrEnabled !== (database.pitr === true) || pitrRetentionDays !== String(database.pitrRetentionDays ?? "");
	const handlePitrUpdate = () => {
		const parsedPitrRetention = Number.parseInt(pitrRetentionDays, 10);
		updateMutation.mutate({
			pitr: pitrEnabled,
			pitrRetentionDays: Number.isFinite(parsedPitrRetention) ? parsedPitrRetention : void 0
		}, {
			onSuccess: () => toast.success(t("PITR settings updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update PITR settings")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Point-in-time recovery (PITR)")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Restore this database to any moment within the retention window.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "pitr-enabled",
							className: "text-[13px]",
							children: t("Enable PITR")
						}), /* @__PURE__ */ jsx(Switch, {
							id: "pitr-enabled",
							checked: pitrEnabled,
							onCheckedChange: setPitrEnabled,
							disabled: writeDisabled
						})]
					}),
					pitrEnabled ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "pitr-retention",
								className: "text-[13px]",
								children: t("PITR retention (days)")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("Sets how far back you can restore. Recovery points older than this period are deleted, so choose a window that covers how long data issues may go unnoticed.")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "pitr-retention",
								type: "number",
								min: 1,
								value: pitrRetentionDays,
								onChange: (e) => setPitrRetentionDays(e.target.value),
								disabled: writeDisabled,
								className: "h-9 max-w-xs text-[13px]"
							})
						]
					}) : null,
					showPitrChargeAlert ? /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
						className: "text-[12px]",
						children: /* @__PURE__ */ jsxs("p", { children: [
							t("Enabling PITR will incur an additional charge of"),
							" ",
							/* @__PURE__ */ jsxs("span", {
								className: "font-medium text-foreground",
								children: [
									formatCurrency(pitrCost, "USD"),
									" ",
									t("per month")
								]
							}),
							" ",
							"(",
							pitrRatePercent,
							"% ",
							t("of your database price"),
							")."
						] })
					})] }) : null
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !pitrDirty,
					title: writeTooltip,
					onClick: handlePitrUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function PostgresDatabaseStorageCard({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const updateMutation = useUpdatePostgresDatabase(projectId, databaseId);
	const { data: specificationsData, isLoading: specificationsLoading } = useDatabaseSpecifications(projectId, POSTGRES_DATABASE_SPECS_SOURCE);
	const storageUsageQuery = useDedicatedDatabaseStorageChart(projectId, databaseId, useMemo(() => getDefaultStorageUsageDateRange(), []), true, "1h");
	const [storageAutoscaling, setStorageAutoscaling] = useState(database.storageAutoscaling === true);
	const [autoscalingThreshold, setAutoscalingThreshold] = useState(String(database.storageAutoscalingThresholdPercent ?? ""));
	const [autoscalingMaxGb, setAutoscalingMaxGb] = useState(String(database.storageAutoscalingMaxGb ?? ""));
	const { writeDisabled, writeTooltip } = useWriteAccess(canWrite, updateMutation.isPending);
	useEffect(() => {
		setStorageAutoscaling(database.storageAutoscaling === true);
		setAutoscalingThreshold(String(database.storageAutoscalingThresholdPercent ?? ""));
		setAutoscalingMaxGb(String(database.storageAutoscalingMaxGb ?? ""));
	}, [
		database.storageAutoscaling,
		database.storageAutoscalingThresholdPercent,
		database.storageAutoscalingMaxGb
	]);
	const storageDirty = storageAutoscaling !== (database.storageAutoscaling === true) || autoscalingThreshold !== String(database.storageAutoscalingThresholdPercent ?? "") || autoscalingMaxGb !== String(database.storageAutoscalingMaxGb ?? "");
	const storageLimitGb = useMemo(() => {
		if (database.storage && database.storage > 0) return database.storage;
		const rawSpec = specificationsData?.specifications?.find((spec) => spec.slug === database.specification);
		if (rawSpec?.includedStorage && rawSpec.includedStorage > 0) return rawSpec.includedStorage;
		return null;
	}, [
		database.specification,
		database.storage,
		specificationsData?.specifications
	]);
	const storageLimitBytes = useMemo(() => {
		if (storageLimitGb == null || storageLimitGb <= 0) return null;
		return storageLimitGb * 1e9;
	}, [storageLimitGb]);
	const storagePoints = storageUsageQuery.isError ? [] : storageUsageQuery.data?.chartPoints ?? [];
	const storageUsedBytes = storagePoints.length > 0 ? getDedicatedDatabaseGaugeHeadline(storagePoints) : null;
	const storageUsagePercent = useMemo(() => {
		if (storageUsedBytes == null || storageLimitBytes == null || storageLimitBytes <= 0) return null;
		return storageUsedBytes / storageLimitBytes * 100;
	}, [storageUsedBytes, storageLimitBytes]);
	const storageUsageTone = getStorageUsageTone(storageUsagePercent);
	const awaitingStorageLimit = storageLimitBytes == null && specificationsLoading;
	const awaitingUsage = storageLimitBytes != null && storageUsageQuery.isLoading && storageUsedBytes == null;
	const storageUsageLoading = awaitingStorageLimit || awaitingUsage;
	const showStorageProgress = storageLimitBytes != null || awaitingStorageLimit;
	const handleStorageUpdate = () => {
		const parsedThreshold = Number.parseInt(autoscalingThreshold, 10);
		const parsedMaxGb = Number.parseInt(autoscalingMaxGb, 10);
		updateMutation.mutate({
			storageAutoscaling,
			storageAutoscalingThresholdPercent: Number.isFinite(parsedThreshold) ? parsedThreshold : void 0,
			storageAutoscalingMaxGb: Number.isFinite(parsedMaxGb) ? parsedMaxGb : void 0
		}, {
			onSuccess: () => toast.success(t("Storage settings updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update storage settings")))
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Storage")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Configure automatic storage expansion when disk usage reaches a threshold.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[13px]",
							children: t("Storage used")
						}), /* @__PURE__ */ jsx(TooltipProvider, {
							delayDuration: 0,
							children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "text-muted-foreground transition-colors hover:text-foreground",
									children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
								})
							}), /* @__PURE__ */ jsx(TooltipContent, {
								side: "top",
								className: "max-w-xs text-[12px] leading-relaxed",
								children: /* @__PURE__ */ jsx("p", { children: t("Storage used by this database instance compared to provisioned capacity.") })
							})] })
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex min-h-[18px] items-baseline gap-2",
						children: storageUsageLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-[18px] w-14 shrink-0 rounded-sm" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-40 max-w-full shrink-0 rounded-sm" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold tabular-nums text-foreground",
							children: storageUsedBytes != null ? formatCompactBytes(storageUsedBytes) : "0B"
						}), storageLimitBytes != null ? /* @__PURE__ */ jsx("span", {
							className: "text-[12px] text-muted-foreground",
							children: `/ ${formatCompactBytes(storageLimitBytes)} available${storageUsagePercent != null ? ` · ${storageUsagePercent.toFixed(1)}%` : ""}`
						}) : null] })
					}),
					showStorageProgress ? storageUsageLoading ? /* @__PURE__ */ jsx(Skeleton, { className: "h-1.5 w-full rounded-full" }) : storageUsagePercent != null ? /* @__PURE__ */ jsx(Progress, {
						value: Math.min(100, Math.max(0, storageUsagePercent)),
						className: cn("h-1.5", storageUsageTone === "critical" && "[&_[data-slot=progress-indicator]]:bg-red-500", storageUsageTone === "warning" && "[&_[data-slot=progress-indicator]]:bg-amber-500", storageUsageTone === "normal" && "bg-[var(--chart-brand)]/15 [&_[data-slot=progress-indicator]]:bg-[var(--chart-brand)]")
					}) : /* @__PURE__ */ jsx("div", { className: "h-1.5" }) : null
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "storage-autoscaling",
						className: "text-[13px]",
						children: t("Storage autoscaling")
					}), /* @__PURE__ */ jsx(Switch, {
						id: "storage-autoscaling",
						checked: storageAutoscaling,
						onCheckedChange: setStorageAutoscaling,
						disabled: writeDisabled
					})]
				}), storageAutoscaling ? /* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "autoscaling-threshold",
							className: "text-[13px]",
							children: t("Autoscaling threshold (%)")
						}), /* @__PURE__ */ jsx(Input, {
							id: "autoscaling-threshold",
							type: "number",
							min: 50,
							max: 95,
							value: autoscalingThreshold,
							onChange: (e) => setAutoscalingThreshold(e.target.value),
							disabled: writeDisabled,
							className: "h-9 text-[13px]"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "autoscaling-max-gb",
							className: "text-[13px]",
							children: t("Autoscaling max (GB)")
						}), /* @__PURE__ */ jsx(Input, {
							id: "autoscaling-max-gb",
							type: "number",
							min: 0,
							value: autoscalingMaxGb,
							onChange: (e) => setAutoscalingMaxGb(e.target.value),
							disabled: writeDisabled,
							className: "h-9 text-[13px]"
						})]
					})]
				}) : null]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !storageDirty,
					title: writeTooltip,
					onClick: handleStorageUpdate,
					children: t("Update")
				})
			})
		]
	});
}
export { PostgresDatabaseSyncModeCard as a, PostgresDatabaseStorageCard as i, PostgresDatabasePitrCard as n, PostgresDatabaseReplicasCard as r, PostgresDatabaseNetworkCard as t };
