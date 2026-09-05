import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
const DEFAULT_HA_REPLICA_RATE = .5;
const DEFAULT_PITR_RATE = .2;
function getDedicatedDatabaseCreatePricing(plan, apiPricing) {
	const usage = plan?.usage;
	return {
		haReplicaRate: usage?.dedicatedDbHaReplica?.price ?? apiPricing?.replicaRate ?? .5,
		pitrRate: usage?.dedicatedDbPitr?.price ?? apiPricing?.pitrRate ?? .2,
		haReplicaLabel: usage?.dedicatedDbHaReplica?.name?.trim() || "HA replicas",
		pitrLabel: usage?.dedicatedDbPitr?.name?.trim() || "Point-in-time recovery"
	};
}
function calculateDedicatedDatabaseMonthlyCost(params) {
	const baseUsd = Math.max(0, params.basePriceUsd);
	const haReplicasUsd = baseUsd * params.pricing.haReplicaRate * Math.max(0, params.replicaCount);
	const pitrUsd = params.pitrEnabled ? baseUsd * params.pricing.pitrRate : 0;
	return {
		baseUsd,
		haReplicasUsd,
		pitrUsd,
		totalUsd: baseUsd + haReplicasUsd + pitrUsd
	};
}
function formatDatabaseComputeCreditsNote(amountUsd) {
	return `$${Number.isInteger(amountUsd) ? amountUsd.toFixed(0) : amountUsd.toFixed(2)} of compute credits for database usage included every month.`;
}
const DATABASE_COMPUTE_CREDITS_NOTE = formatDatabaseComputeCreditsNote(10);
function formatDedicatedMonthlyPrice(amountUsd) {
	return `$${Number.isInteger(amountUsd) ? amountUsd.toFixed(0) : amountUsd.toFixed(2)}/mo`;
}
function formatDedicatedAddonPrice(amountUsd) {
	if (amountUsd <= 0) return formatDedicatedMonthlyPrice(0);
	return `+$${Number.isInteger(amountUsd) ? amountUsd.toFixed(0) : amountUsd.toFixed(2)}/mo`;
}
const MAX_DEDICATED_DB_HA_REPLICA_COUNT = 5;
const DEDICATED_DB_HA_REPLICA_OPTIONS = [
	{
		count: 0,
		label: "None",
		description: "Primary instance only. Suitable for development and workloads that can tolerate brief downtime."
	},
	{
		count: 1,
		label: "1 replica",
		description: "One read replica to offload queries and reduce recovery time if the primary fails."
	},
	{
		count: 2,
		label: "2 replicas",
		description: "Two read replicas for higher throughput and smoother operation during maintenance."
	},
	{
		count: 3,
		label: "3 replicas",
		description: "Three read replicas for production workloads with sustained read demand."
	},
	{
		count: 4,
		label: "4 replicas",
		description: "Four read replicas for large-scale read traffic and increased failover capacity."
	},
	{
		count: 5,
		label: "5 replicas",
		description: "Maximum self-serve replica count for high-traffic production environments."
	}
];
const SERVERLESS_DATABASE_SPEC_ID = "shared";
const TABLE_DB_SPEC_OPTIONS = [
	{
		id: SERVERLESS_DATABASE_SPEC_ID,
		label: "Serverless",
		cpu: "-",
		memory: "-",
		storage: "-",
		connections: "-",
		price: "No compute fee"
	},
	{
		id: "micro",
		label: "Micro",
		cpu: "2-core (shared)",
		memory: "1 GB",
		storage: "-",
		connections: "60",
		price: "$10/mo",
		comingSoon: true
	},
	{
		id: "small",
		label: "Small",
		cpu: "2-core (shared)",
		memory: "2 GB",
		storage: "-",
		connections: "90",
		price: "$15/mo",
		comingSoon: true
	},
	{
		id: "medium",
		label: "Medium",
		cpu: "2-core (shared)",
		memory: "4 GB",
		storage: "-",
		connections: "120",
		price: "$60/mo",
		comingSoon: true
	},
	{
		id: "large",
		label: "Large",
		cpu: "2-core (dedicated)",
		memory: "8 GB",
		storage: "-",
		connections: "160",
		price: "$110/mo",
		comingSoon: true
	},
	{
		id: "xl",
		label: "XL",
		cpu: "4-core (dedicated)",
		memory: "16 GB",
		storage: "-",
		connections: "240",
		price: "$210/mo",
		comingSoon: true
	},
	{
		id: "2xl",
		label: "2XL",
		cpu: "8-core (dedicated)",
		memory: "32 GB",
		storage: "-",
		connections: "380",
		price: "$410/mo",
		comingSoon: true
	},
	{
		id: "4xl",
		label: "4XL",
		cpu: "16-core (dedicated)",
		memory: "64 GB",
		storage: "-",
		connections: "480",
		price: "$960/mo",
		comingSoon: true
	}
];
const DEFAULT_TABLES_MONITOR_SPEC_ID = SERVERLESS_DATABASE_SPEC_ID;
function getEffectiveDatabaseSpecIdForMonitoring(databaseType, apiSpecId) {
	if (apiSpecId && apiSpecId.trim() !== "") return apiSpecId.trim();
	if (databaseType === DatabaseType.Tablesdb) return DEFAULT_TABLES_MONITOR_SPEC_ID;
	return "micro";
}
function isServerlessDatabaseSpecId(specId) {
	const normalized = specId.trim().toLowerCase();
	return normalized === "shared" || normalized === "serverless" || normalized === "";
}
function isServerlessDatabaseMonitoring(databaseType, specId) {
	return databaseType === DatabaseType.Tablesdb && isServerlessDatabaseSpecId(specId);
}
function getSpecOptionById(specId) {
	return TABLE_DB_SPEC_OPTIONS.find((s) => s.id === specId);
}
function resolveDatabaseSpecSummary(specs, specSlug) {
	const slug = specSlug?.trim();
	if (!slug) return null;
	const spec = specs.find((item) => item.id === slug) ?? getSpecOptionById(slug);
	if (!spec) return slug;
	const { cpu, memory } = spec;
	if (spec.id === "shared" || cpu === "Serverless" && memory === "Serverless") return "Serverless";
	if (cpu === "-" && memory === "-") return null;
	if (cpu === "-") return memory !== "-" ? memory : null;
	if (memory === "-") return cpu;
	return `${cpu} · ${memory}`;
}
function getSpecOptionForSlug(specs, specSlug) {
	const slug = specSlug?.trim();
	if (!slug) return void 0;
	return specs.find((item) => item.id === slug) ?? getSpecOptionById(slug);
}
function readSpecMetric(value) {
	const trimmed = value?.trim();
	if (!trimmed || trimmed === "-" || trimmed === "Serverless") return null;
	return trimmed;
}
function compactDatabaseSpecCpuLabel(cpu) {
	return cpu.replace(/\s*\([^)]*\)/g, "").trim();
}
function resolveDatabaseSpecDisplayParts(specs, specSlug, options) {
	const slug = specSlug?.trim();
	const spec = getSpecOptionForSlug(specs, slug);
	const summary = resolveDatabaseSpecSummary(specs, slug);
	if (options?.forceServerless === true || spec?.id === "shared" || summary === "Serverless") return {
		variant: "serverless",
		cpu: null,
		memory: null,
		connections: null,
		label: "Serverless"
	};
	const cpu = options?.cpuMillicores != null && options.cpuMillicores > 0 ? formatDedicatedSpecCpu(options.cpuMillicores) : (() => {
		const value = readSpecMetric(spec?.cpu);
		return value ? compactDatabaseSpecCpuLabel(value) : null;
	})();
	const memory = options?.memoryMb != null && options.memoryMb > 0 ? formatDedicatedSpecMemory(options.memoryMb) : readSpecMetric(spec?.memory);
	const connections = readSpecMetric(spec?.connections);
	if (!!(cpu || memory || connections)) return {
		variant: "metrics",
		cpu,
		memory,
		connections,
		label: null
	};
	return {
		variant: "label",
		cpu: null,
		memory: null,
		connections: null,
		label: options?.fallbackLabel?.trim() || spec?.label?.trim() || slug || null
	};
}
function formatDatabaseSpecDisplayTooltip(parts, connectionsUnitLabel = "connections") {
	if (parts.variant === "serverless") return parts.label;
	if (parts.variant === "label") return parts.label;
	const segments = [];
	if (parts.cpu) segments.push(parts.cpu);
	if (parts.memory) segments.push(parts.memory);
	if (parts.connections) segments.push(formatDatabaseSpecConnectionsLabel(parts.connections, connectionsUnitLabel));
	return segments.length > 0 ? segments.join(" · ") : parts.label;
}
function formatDatabaseSpecConnectionsLabel(count, connectionsUnitLabel) {
	return `${count} ${connectionsUnitLabel}`;
}
function formatDedicatedSpecCpu(millicores) {
	if (millicores <= 0) return "-";
	const cores = millicores / 1e3;
	return `${Number.isInteger(cores) ? String(cores) : cores.toFixed(1).replace(/\.0$/, "")}-core`;
}
function formatDedicatedSpecMemory(memoryMb) {
	if (memoryMb <= 0) return "-";
	if (memoryMb >= 1024 && memoryMb % 1024 === 0) return `${memoryMb / 1024} GB`;
	if (memoryMb >= 1024) return `${(memoryMb / 1024).toFixed(1).replace(/\.0$/, "")} GB`;
	return `${memoryMb} MB`;
}
function formatDedicatedSpecStorage(storageGb) {
	if (storageGb <= 0) return "-";
	if (storageGb >= 1024 && storageGb % 1024 === 0) return `${storageGb / 1024} TB`;
	if (storageGb >= 1024) return `${(storageGb / 1024).toFixed(1).replace(/\.0$/, "")} TB`;
	return `${storageGb} GB`;
}
function formatDedicatedSpecPrice(priceUsd) {
	return formatDedicatedMonthlyPrice(Math.max(0, priceUsd));
}
function dedicatedDatabaseSpecificationToSpecOption(spec) {
	return {
		id: spec.slug,
		label: spec.name,
		cpu: formatDedicatedSpecCpu(spec.cpu),
		memory: formatDedicatedSpecMemory(spec.memory),
		storage: formatDedicatedSpecStorage(spec.includedStorage),
		connections: String(spec.maxConnections),
		price: formatDedicatedSpecPrice(spec.price),
		priceUsd: spec.price,
		comingSoon: !spec.enabled
	};
}
function mapDedicatedDatabaseSpecifications(specifications) {
	return (specifications ?? []).map(dedicatedDatabaseSpecificationToSpecOption);
}
function parseDatabaseMaxConnections(connections) {
	if (!connections || connections === "-" || connections === "Serverless") return null;
	const parsed = Number.parseInt(connections, 10);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}
function getDefaultEnabledSpecId(specs) {
	return specs.find((spec) => !spec.comingSoon)?.id ?? null;
}
function hasEnabledDedicatedComputeOptions(specs) {
	return specs.some((spec) => !spec.comingSoon && !isServerlessDatabaseSpecId(spec.id));
}
function hasLockedDatabaseSpecifications(specs) {
	return specs.some((s) => s.comingSoon === true);
}
export { formatDedicatedMonthlyPrice as C, formatDedicatedAddonPrice as S, DEDICATED_DB_HA_REPLICA_OPTIONS as _, formatDedicatedSpecMemory as a, MAX_DEDICATED_DB_HA_REPLICA_COUNT as b, getSpecOptionById as c, isServerlessDatabaseMonitoring as d, isServerlessDatabaseSpecId as f, DATABASE_COMPUTE_CREDITS_NOTE as g, resolveDatabaseSpecDisplayParts as h, formatDedicatedSpecCpu as i, hasEnabledDedicatedComputeOptions as l, parseDatabaseMaxConnections as m, TABLE_DB_SPEC_OPTIONS as n, getDefaultEnabledSpecId as o, mapDedicatedDatabaseSpecifications as p, formatDatabaseSpecDisplayTooltip as r, getEffectiveDatabaseSpecIdForMonitoring as s, SERVERLESS_DATABASE_SPEC_ID as t, hasLockedDatabaseSpecifications as u, DEFAULT_HA_REPLICA_RATE as v, getDedicatedDatabaseCreatePricing as w, calculateDedicatedDatabaseMonthlyCost as x, DEFAULT_PITR_RATE as y };
