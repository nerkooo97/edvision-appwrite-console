var MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
function toPlanLimitNumber(value) {
	if (value == null) return 0;
	if (typeof value === "bigint") {
		if (value <= 0n || value >= MAX_SAFE) return 0;
		return Number(value);
	}
	if (!Number.isFinite(value) || value <= 0 || value >= Number.MAX_SAFE_INTEGER) return 0;
	return value;
}
function getBackupPoliciesPlanLimit(plan) {
	return toPlanLimitNumber(plan?.backupPolicies);
}
function isBackupPoliciesAtPlanLimit(currentCount, limit) {
	return limit > 0 && currentCount >= limit;
}
function getBackupPoliciesRemainingSlots(currentCount, limit) {
	if (limit <= 0) return null;
	return Math.max(0, limit - currentCount);
}
function supportsAdvancedBackupPolicies(limit) {
	return limit === 0 || limit > 1;
}
export { supportsAdvancedBackupPolicies as i, getBackupPoliciesRemainingSlots as n, isBackupPoliciesAtPlanLimit as r, getBackupPoliciesPlanLimit as t };
