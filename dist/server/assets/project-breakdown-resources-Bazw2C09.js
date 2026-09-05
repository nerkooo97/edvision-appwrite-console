import { c as getSpecOptionById, p as mapDedicatedDatabaseSpecifications } from "./database-specs-CBc802K0.js";
const BILLING_PROJECT_RESOURCE_CATEGORY_ORDER = [
	"addons",
	"network",
	"storage",
	"auth",
	"databases",
	"dedicated-databases",
	"compute",
	"avatars",
	"realtime"
];
const BILLING_PROJECT_RESOURCE_CATEGORY_LABELS = {
	addons: "Addons",
	network: "Network",
	storage: "Storage",
	auth: "Auth",
	databases: "Databases",
	"dedicated-databases": "Dedicated databases",
	compute: "Compute",
	avatars: "Avatars",
	realtime: "Realtime"
};
function getBillingResourceLabel(resourceId, defaultName, plan) {
	return (plan?.usage)?.[resourceId]?.name?.trim() || defaultName;
}
const DEDICATED_DB_BILLING_METRIC_IDS = [
	"dedicatedDbSpecificationCost",
	"dedicatedDbStorage",
	"dedicatedDbBandwidth",
	"dedicatedDbHaReplica",
	"dedicatedDbReplica",
	"dedicatedDbCrossRegionReplica",
	"dedicatedDbCrossRegion",
	"dedicatedDbPitr",
	"dedicatedDbExtensions"
];
var DEDICATED_DB_PROJECT_RESOURCES = {
	dedicatedDbSpecificationCost: {
		name: "Dedicated databases",
		format: "number",
		planKey: "dedicatedDbSpecificationCost",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbStorage: {
		name: "Dedicated database storage",
		format: "bytes",
		planKey: "dedicatedDbStorage",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbBandwidth: {
		name: "Dedicated database bandwidth",
		format: "bytes",
		planKey: "dedicatedDbBandwidth",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbHaReplica: {
		name: "HA replicas",
		format: "number",
		planKey: "dedicatedDbHaReplica",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbReplica: {
		name: "Replicas",
		format: "number",
		planKey: "dedicatedDbReplica",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbCrossRegionReplica: {
		name: "Cross-region replicas",
		format: "number",
		planKey: "dedicatedDbCrossRegionReplica",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbCrossRegion: {
		name: "Cross-region transfer",
		format: "number",
		planKey: "dedicatedDbCrossRegion",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbPitr: {
		name: "Point-in-time recovery",
		format: "number",
		planKey: "dedicatedDbPitr",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	},
	dedicatedDbExtensions: {
		name: "Database extensions",
		format: "number",
		planKey: "dedicatedDbExtensions",
		category: "dedicated-databases",
		showLimit: false,
		showOnlyWhenUsed: true
	}
};
var BASE_PROJECT_RESOURCES = {
	bandwidth: {
		name: "Bandwidth",
		format: "bytes",
		planKey: "bandwidth",
		category: "network"
	},
	storage: {
		name: "Storage",
		format: "bytes",
		planKey: "storage",
		category: "storage"
	},
	mau: {
		name: "MAU",
		format: "number",
		planKey: "users",
		category: "auth"
	},
	databasesReads: {
		name: "Database reads",
		format: "number",
		planKey: "databaseReads",
		category: "databases"
	},
	databasesWrites: {
		name: "Database writes",
		format: "number",
		planKey: "databaseWrites",
		category: "databases"
	},
	executions: {
		name: "Executions",
		format: "number",
		planKey: "executions",
		category: "compute"
	},
	imageTransformations: {
		name: "Image transformations",
		format: "number",
		planKey: "imageTransformations",
		category: "storage"
	},
	screenshotsGenerated: {
		name: "Screenshots generated",
		format: "number",
		planKey: "screenshotsGenerated",
		category: "avatars"
	},
	GBHours: {
		name: "GB-hours",
		format: "number",
		planKey: "gbHours",
		category: "compute"
	},
	realtime: {
		name: "Realtime connections",
		format: "number",
		planKey: "realtime",
		category: "realtime"
	},
	realtimeMessages: {
		name: "Realtime messages",
		format: "number",
		planKey: "realtimeMessages",
		category: "realtime"
	},
	realtimeBandwidth: {
		name: "Realtime bandwidth",
		format: "bytes",
		planKey: "realtimeBandwidth",
		category: "realtime",
		showLimit: false
	},
	authPhone: {
		name: "Phone OTP",
		format: "sms",
		planKey: "authPhone",
		category: "auth"
	}
};
const BILLING_PROJECT_RESOURCE_ID_ORDER = [
	"bandwidth",
	"storage",
	"imageTransformations",
	"mau",
	"authPhone",
	"databasesReads",
	"databasesWrites",
	...DEDICATED_DB_BILLING_METRIC_IDS,
	"executions",
	"GBHours",
	"screenshotsGenerated",
	"realtime",
	"realtimeMessages",
	"realtimeBandwidth"
];
function formatDedicatedDbEngineLabel(engine) {
	const normalized = engine.trim().toLowerCase();
	if (normalized === "postgres" || normalized === "postgresql") return "PostgreSQL";
	if (normalized === "mysql") return "MySQL";
	if (normalized === "mariadb") return "MariaDB";
	if (normalized === "mongodb") return "MongoDB";
	if (!normalized) return "Database";
	return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}
function formatDedicatedDbSpecSlugFallback(specSlug) {
	const match = specSlug.match(/^s-(\d+)vcpu-(\d+)gb$/i);
	if (match) return `${match[1]} vCPU · ${match[2]} GB`;
	return specSlug;
}
function resolveDedicatedDbSpecLabel(engine, specSlug, specLookup) {
	const compositeKey = `${engine}.${specSlug}`;
	const fromLookup = specLookup?.[compositeKey] ?? specLookup?.[specSlug] ?? null;
	if (fromLookup?.label?.trim()) return fromLookup.label.trim();
	const fromStaticSpec = getSpecOptionById(specSlug);
	if (fromStaticSpec?.label?.trim()) return fromStaticSpec.label.trim();
	return (fromLookup?.cpu && fromLookup?.memory ? `${fromLookup.cpu} · ${fromLookup.memory}` : fromStaticSpec && fromStaticSpec.cpu !== "-" && fromStaticSpec.memory !== "-" ? `${fromStaticSpec.cpu} · ${fromStaticSpec.memory}` : null) ?? formatDedicatedDbSpecSlugFallback(specSlug);
}
function parseDedicatedDbBillingResourceId(resourceId) {
	for (const metricId of DEDICATED_DB_BILLING_METRIC_IDS) {
		const prefix = `${metricId}.`;
		if (!resourceId.startsWith(prefix)) continue;
		const rest = resourceId.slice(prefix.length);
		const dotIndex = rest.indexOf(".");
		if (dotIndex <= 0) return null;
		const engine = rest.slice(0, dotIndex).trim();
		const specSlug = rest.slice(dotIndex + 1).trim();
		if (!engine || !specSlug) return null;
		return {
			metricId,
			engine,
			specSlug
		};
	}
	return null;
}
function buildDedicatedDbBillingSpecLookup(specifications) {
	const lookup = {};
	const specOptions = Array.isArray(specifications) ? specifications.length > 0 && typeof specifications[0] === "object" && specifications[0] !== null && "slug" in specifications[0] ? mapDedicatedDatabaseSpecifications(specifications) : specifications : [];
	for (const spec of specOptions) lookup[spec.id] = {
		label: spec.label,
		cpu: spec.cpu,
		memory: spec.memory
	};
	return lookup;
}
function buildDedicatedDbBillingSpecTitle(engine, specSlug, specLookup) {
	return `${formatDedicatedDbEngineLabel(engine)} · ${resolveDedicatedDbSpecLabel(engine, specSlug, specLookup)}`;
}
var DEDICATED_DB_BILLING_METRIC_SHORT_LABELS = {
	dedicatedDbSpecificationCost: "Compute",
	dedicatedDbStorage: "Storage",
	dedicatedDbBandwidth: "Bandwidth",
	dedicatedDbHaReplica: "HA replicas",
	dedicatedDbReplica: "Replicas",
	dedicatedDbCrossRegionReplica: "Cross-region replicas",
	dedicatedDbCrossRegion: "Cross-region transfer",
	dedicatedDbPitr: "Point-in-time recovery",
	dedicatedDbExtensions: "Extensions"
};
function getDedicatedDbBillingMetricShortLabel(metricId, plan) {
	const fromPlan = getBillingResourceLabel(metricId, DEDICATED_DB_BILLING_METRIC_SHORT_LABELS[metricId], plan);
	if (fromPlan === DEDICATED_DB_PROJECT_RESOURCES[metricId].name) return DEDICATED_DB_BILLING_METRIC_SHORT_LABELS[metricId];
	return fromPlan;
}
function formatBillingBytes(bytes) {
	if (bytes === 0) return "0 B";
	const k = 1e3;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
function formatBillingHoursFromMinutes(minutes) {
	const hours = minutes / 60;
	if (hours >= 100) return `${Math.round(hours).toLocaleString()} hours`;
	return `${hours.toFixed(1).replace(/\.0$/, "")} hours`;
}
function formatDedicatedDbBillingUsageLabel(usage, metricId, formatType) {
	if (formatType === "bytes") return formatBillingBytes(usage);
	switch (metricId) {
		case "dedicatedDbSpecificationCost": return formatBillingHoursFromMinutes(usage);
		case "dedicatedDbPitr":
		case "dedicatedDbExtensions": return usage === 1 ? "1 instance" : `${usage.toLocaleString()} instances`;
		case "dedicatedDbHaReplica":
		case "dedicatedDbReplica":
		case "dedicatedDbCrossRegionReplica": return usage === 1 ? "1 replica" : `${usage.toLocaleString()} replicas`;
		case "dedicatedDbCrossRegion": return usage === 1 ? "1 transfer" : `${usage.toLocaleString()} transfers`;
		default: return usage.toLocaleString();
	}
}
function getDedicatedDbBillingUsageDescription(metricId, formatType) {
	if (formatType === "bytes") {
		if (metricId === "dedicatedDbStorage") return "Additional storage used beyond the tier allowance.";
		if (metricId === "dedicatedDbBandwidth") return "Network egress for this database tier.";
		return;
	}
	switch (metricId) {
		case "dedicatedDbSpecificationCost": return "Billable compute runtime during this billing period, in hours.";
		case "dedicatedDbPitr": return "Number of instances with point-in-time recovery enabled.";
		case "dedicatedDbExtensions": return "Number of billable database extensions.";
		case "dedicatedDbHaReplica": return "Number of high availability replicas provisioned.";
		case "dedicatedDbReplica": return "Number of replicas provisioned.";
		case "dedicatedDbCrossRegionReplica": return "Number of cross-region replicas provisioned.";
		case "dedicatedDbCrossRegion": return "Cross-region data transfer usage.";
		default: return;
	}
}
function groupDedicatedDbBillingResources(resources, plan, specLookup) {
	const groups = /* @__PURE__ */ new Map();
	const ungrouped = [];
	for (const resource of resources) {
		const parsed = parseDedicatedDbBillingResourceId(resource.resourceId);
		if (!parsed) {
			ungrouped.push(resource);
			continue;
		}
		const key = `${parsed.engine}.${parsed.specSlug}`;
		const existing = groups.get(key) ?? {
			key,
			title: buildDedicatedDbBillingSpecTitle(parsed.engine, parsed.specSlug, specLookup),
			totalCost: 0,
			items: []
		};
		existing.items.push({
			resourceId: resource.resourceId,
			metricId: parsed.metricId,
			metricLabel: getDedicatedDbBillingMetricShortLabel(parsed.metricId, plan),
			usage: resource.usage,
			limit: resource.limit,
			cost: resource.cost,
			formatType: resource.formatType,
			showLimit: resource.showLimit
		});
		existing.totalCost += resource.cost;
		groups.set(key, existing);
	}
	return {
		specGroups: [...groups.values()].map((group) => ({
			...group,
			items: group.items.sort((a, b) => DEDICATED_DB_BILLING_METRIC_IDS.indexOf(a.metricId) - DEDICATED_DB_BILLING_METRIC_IDS.indexOf(b.metricId))
		})).sort((a, b) => a.key.localeCompare(b.key)),
		ungrouped
	};
}
function resolveBillingProjectResourceMapping(resourceId, plan, specLookup) {
	const direct = getBillingProjectResourceIdMap(plan)[resourceId];
	if (direct) return direct;
	const parsed = parseDedicatedDbBillingResourceId(resourceId);
	if (!parsed) return null;
	const baseMapping = DEDICATED_DB_PROJECT_RESOURCES[parsed.metricId];
	if (!baseMapping) return null;
	const baseName = getBillingResourceLabel(parsed.metricId, baseMapping.name, plan);
	const engineLabel = formatDedicatedDbEngineLabel(parsed.engine);
	const specLabel = resolveDedicatedDbSpecLabel(parsed.engine, parsed.specSlug, specLookup);
	return {
		...baseMapping,
		name: `${baseName} (${engineLabel} · ${specLabel})`
	};
}
function compareDedicatedDbBillingResourceIds(a, b) {
	const parsedA = parseDedicatedDbBillingResourceId(a);
	const parsedB = parseDedicatedDbBillingResourceId(b);
	if (parsedA && parsedB) {
		const specCompare = `${parsedA.engine}.${parsedA.specSlug}`.localeCompare(`${parsedB.engine}.${parsedB.specSlug}`);
		if (specCompare !== 0) return specCompare;
		return DEDICATED_DB_BILLING_METRIC_IDS.indexOf(parsedA.metricId) - DEDICATED_DB_BILLING_METRIC_IDS.indexOf(parsedB.metricId);
	}
	if (parsedA) return 1;
	if (parsedB) return -1;
	return 0;
}
function getBillingProjectResourceSortIndex(resourceId) {
	const index = BILLING_PROJECT_RESOURCE_ID_ORDER.indexOf(resourceId);
	return index === -1 ? BILLING_PROJECT_RESOURCE_ID_ORDER.length : index;
}
function compareBillingProjectResourceIds(a, b) {
	const dedicatedCompare = compareDedicatedDbBillingResourceIds(a, b);
	if (dedicatedCompare !== 0) return dedicatedCompare;
	return getBillingProjectResourceSortIndex(a) - getBillingProjectResourceSortIndex(b);
}
function getBillingProjectResourceIdMap(plan) {
	return {
		...BASE_PROJECT_RESOURCES,
		...Object.fromEntries(Object.entries(DEDICATED_DB_PROJECT_RESOURCES).map(([resourceId, mapping]) => [resourceId, {
			...mapping,
			name: getBillingResourceLabel(resourceId, mapping.name, plan)
		}]))
	};
}
function groupBillingProjectResources(resources) {
	const byCategory = /* @__PURE__ */ new Map();
	for (const resource of resources) {
		const existing = byCategory.get(resource.category) ?? [];
		existing.push(resource);
		byCategory.set(resource.category, existing);
	}
	return BILLING_PROJECT_RESOURCE_CATEGORY_ORDER.filter((categoryId) => (byCategory.get(categoryId)?.length ?? 0) > 0).map((categoryId) => ({
		id: categoryId,
		label: BILLING_PROJECT_RESOURCE_CATEGORY_LABELS[categoryId],
		resources: byCategory.get(categoryId).sort((a, b) => compareBillingProjectResourceIds(a.resourceId, b.resourceId))
	}));
}
var BILLING_PLAN_RESOURCE_PROPERTY_MAP = {
	bandwidth: "bandwidth",
	storage: "storage",
	users: "users",
	executions: "executions",
	gbHours: "GBHours",
	databaseReads: "databasesReads",
	databaseWrites: "databasesWrites",
	imageTransformations: "imageTransformations",
	screenshotsGenerated: "screenshotsGenerated",
	authPhone: "authPhone",
	realtime: "realtime",
	realtimeMessages: "realtimeMessages",
	realtimeBandwidth: "realtimeBandwidth"
};
function getBillingPlanRawResourceLimit(plan, planKey) {
	if (!plan) return null;
	const limitValue = plan[BILLING_PLAN_RESOURCE_PROPERTY_MAP[planKey] || planKey];
	if (limitValue === null || limitValue === void 0) return null;
	const numValue = Number(limitValue);
	if (!Number.isFinite(numValue)) return null;
	return numValue;
}
function isBillingPlanResourceUnavailable(plan, planKey) {
	const raw = getBillingPlanRawResourceLimit(plan, planKey);
	return raw !== null && raw < 0;
}
function getBillingPlanResourceLimit(plan, planKey) {
	const numValue = getBillingPlanRawResourceLimit(plan, planKey);
	if (numValue === null) return null;
	if (numValue < 0) return null;
	if (planKey === "bandwidth" || planKey === "storage") return numValue * 1e9;
	return numValue;
}
function aggregationResourceValue(resources, ...resourceIds) {
	for (const resourceId of resourceIds) {
		const match = resources.find((r) => r.resourceId === resourceId);
		if (!match) continue;
		const n = Number(match.value);
		if (Number.isFinite(n)) return Math.max(0, n);
	}
	return 0;
}
function aggregationResourceAmount(resources, ...resourceIds) {
	for (const resourceId of resourceIds) {
		const match = resources.find((r) => r.resourceId === resourceId);
		if (!match) continue;
		const n = Number(match.amount);
		if (Number.isFinite(n)) return Math.max(0, n);
	}
	return 0;
}
function buildOrganizationUsageCategoriesFromAggregation(resources, plan) {
	const aggregationResources = Array.isArray(resources) ? resources : [];
	if (!plan && aggregationResources.length === 0) return [];
	const resourceIdMap = getBillingProjectResourceIdMap(plan);
	const usageByResourceId = {
		bandwidth: {
			usage: aggregationResourceValue(aggregationResources, "bandwidth"),
			cost: aggregationResourceAmount(aggregationResources, "bandwidth")
		},
		storage: {
			usage: (() => {
				const storage = aggregationResourceValue(aggregationResources, "storage");
				if (storage > 0) return storage;
				return aggregationResourceValue(aggregationResources, "totalStorage");
			})(),
			cost: aggregationResourceAmount(aggregationResources, "storage", "totalStorage")
		},
		mau: {
			usage: aggregationResourceValue(aggregationResources, "mau", "users"),
			cost: aggregationResourceAmount(aggregationResources, "mau", "users")
		},
		executions: {
			usage: aggregationResourceValue(aggregationResources, "executions"),
			cost: aggregationResourceAmount(aggregationResources, "executions")
		},
		databasesReads: {
			usage: aggregationResourceValue(aggregationResources, "databasesReads"),
			cost: aggregationResourceAmount(aggregationResources, "databasesReads")
		},
		databasesWrites: {
			usage: aggregationResourceValue(aggregationResources, "databasesWrites"),
			cost: aggregationResourceAmount(aggregationResources, "databasesWrites")
		},
		imageTransformations: {
			usage: aggregationResourceValue(aggregationResources, "imageTransformations"),
			cost: aggregationResourceAmount(aggregationResources, "imageTransformations")
		},
		screenshotsGenerated: {
			usage: aggregationResourceValue(aggregationResources, "screenshotsGenerated"),
			cost: aggregationResourceAmount(aggregationResources, "screenshotsGenerated")
		},
		authPhone: {
			usage: aggregationResourceValue(aggregationResources, "authPhone"),
			cost: aggregationResourceAmount(aggregationResources, "authPhone")
		},
		GBHours: {
			usage: aggregationResourceValue(aggregationResources, "GBHours"),
			cost: aggregationResourceAmount(aggregationResources, "GBHours")
		},
		realtime: {
			usage: aggregationResourceValue(aggregationResources, "realtime"),
			cost: aggregationResourceAmount(aggregationResources, "realtime")
		},
		realtimeMessages: {
			usage: aggregationResourceValue(aggregationResources, "realtimeMessages"),
			cost: aggregationResourceAmount(aggregationResources, "realtimeMessages")
		},
		realtimeBandwidth: {
			usage: aggregationResourceValue(aggregationResources, "realtimeBandwidth"),
			cost: aggregationResourceAmount(aggregationResources, "realtimeBandwidth")
		}
	};
	const items = [];
	for (const resourceId of BILLING_PROJECT_RESOURCE_ID_ORDER) {
		const mapping = resourceIdMap[resourceId];
		if (!mapping || mapping.showOnlyWhenUsed) continue;
		const values = usageByResourceId[resourceId] ?? {
			usage: 0,
			cost: 0
		};
		const requiresUpgrade = isBillingPlanResourceUnavailable(plan, mapping.planKey);
		const limit = requiresUpgrade ? null : getBillingPlanResourceLimit(plan, mapping.planKey);
		items.push({
			resourceId,
			name: mapping.name,
			usage: values.usage,
			limit,
			cost: values.cost,
			formatType: mapping.format,
			showLimit: requiresUpgrade ? false : mapping.showLimit !== false,
			requiresUpgrade,
			category: mapping.category
		});
	}
	return groupBillingProjectResources(items);
}
export { getBillingPlanResourceLimit as a, groupBillingProjectResources as c, resolveBillingProjectResourceMapping as d, formatDedicatedDbBillingUsageLabel as i, groupDedicatedDbBillingResources as l, buildDedicatedDbBillingSpecLookup as n, getBillingProjectResourceIdMap as o, buildOrganizationUsageCategoriesFromAggregation as r, getDedicatedDbBillingUsageDescription as s, DEDICATED_DB_BILLING_METRIC_IDS as t, parseDedicatedDbBillingResourceId as u };
