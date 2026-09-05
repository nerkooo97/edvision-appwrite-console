import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { b as coerceTrimmedString } from "./database-routes-DB_xKWuY.js";
import { o as formatCompactCount } from "./format-metric-6jsfxd5f.js";
import { a as getBillingPlanResourceLimit } from "./project-breakdown-resources-Bazw2C09.js";
const DEDICATED_DATABASE_SUPPORTED_REGIONS = ["fra", "nyc"];
const DEDICATED_DATABASE_REGION_DISPLAY_NAMES = {
	fra: "Frankfurt (FRA)",
	nyc: "New York (NYC)"
};
function normalizeProjectRegion(region) {
	return coerceTrimmedString(region).toLowerCase();
}
function projectSupportsDedicatedDatabaseCompute(region) {
	const normalized = normalizeProjectRegion(region);
	if (!normalized || normalized === "unknown") return false;
	return DEDICATED_DATABASE_SUPPORTED_REGIONS.includes(normalized);
}
function getDedicatedDatabaseSupportedRegionsLabel() {
	return DEDICATED_DATABASE_SUPPORTED_REGIONS.map((region) => DEDICATED_DATABASE_REGION_DISPLAY_NAMES[region]).join(" and ");
}
function formatDedicatedDatabaseRegionUnavailableDescription(t) {
	return `${t("Coming soon in your project region. Available in")} ${getDedicatedDatabaseSupportedRegionsLabel()}.`;
}
function readDedicatedDatabaseFields(plan) {
	if (!plan) return {};
	return plan;
}
function toCreditUsd(value) {
	if (value == null) return 0;
	if (typeof value === "bigint") {
		if (value <= 0n) return 0;
		return Number(value);
	}
	if (!Number.isFinite(value) || value <= 0) return 0;
	return value;
}
function normalizeOperationLimit(value) {
	if (value == null) return null;
	if (value <= 0 || value >= Number.MAX_SAFE_INTEGER) return "unlimited";
	return value;
}
function readUsageRate(plan, usageKey) {
	if (!plan) return null;
	const entry = plan.usage?.[usageKey];
	if (!entry) return null;
	const priceUsd = Number(entry.price);
	if (!Number.isFinite(priceUsd) || priceUsd <= 0) return null;
	let perOps = Number(entry.value);
	if (!Number.isFinite(perOps) || perOps <= 0) perOps = 1e5;
	if (perOps === 1 && priceUsd < .01) return {
		priceUsd: priceUsd * 1e5,
		perOps: 1e5,
		currency: entry.currency?.trim() || "USD"
	};
	return {
		priceUsd,
		perOps,
		currency: entry.currency?.trim() || "USD"
	};
}
function planSupportsDedicatedDatabases(plan) {
	const features = getActiveProfileFeatures();
	if (!features.billing) return features.dedicatedDbsSupport;
	if (plan == null) return null;
	return readDedicatedDatabaseFields(plan).supportsDedicatedDatabases === true;
}
function getPlanDatabaseComputeCreditUsd(plan) {
	return toCreditUsd(readDedicatedDatabaseFields(plan).databaseComputeCredit);
}
function getPlanDatabaseOperationLimits(plan) {
	if (!plan) return {
		reads: null,
		writes: null
	};
	return {
		reads: normalizeOperationLimit(getBillingPlanResourceLimit(plan, "databaseReads")),
		writes: normalizeOperationLimit(getBillingPlanResourceLimit(plan, "databaseWrites"))
	};
}
function getPlanDatabaseOperationOverage(plan) {
	return {
		reads: readUsageRate(plan, "databasesReads"),
		writes: readUsageRate(plan, "databasesWrites")
	};
}
function formatDatabaseOperationOverageRate(rate) {
	const digits = rate.priceUsd > 0 && rate.priceUsd < .1 ? 3 : 2;
	return `${new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: rate.currency || "USD",
		minimumFractionDigits: digits,
		maximumFractionDigits: 3
	}).format(rate.priceUsd)} / ${formatCompactCount(rate.perOps)}`;
}
export { planSupportsDedicatedDatabases as a, getPlanDatabaseOperationOverage as i, getPlanDatabaseComputeCreditUsd as n, formatDedicatedDatabaseRegionUnavailableDescription as o, getPlanDatabaseOperationLimits as r, projectSupportsDedicatedDatabaseCompute as s, formatDatabaseOperationOverageRate as t };
