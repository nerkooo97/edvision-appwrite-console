const OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT = 6;
const USAGE_BREAKDOWN_DRAWER_LIMIT = 100;
const COMPUTE_BREAKDOWN_RESOURCE_LIMIT = 8;
function resolveUsageListOrder(params) {
	const limit = params.limit ?? 5e3;
	if (params.interval) return {
		orderBy: "time",
		orderDir: "asc",
		limit
	};
	if (params.hasDimensions) return {
		orderBy: "value",
		orderDir: "desc",
		limit
	};
	return {
		orderBy: "time",
		orderDir: "desc",
		limit
	};
}
export { resolveUsageListOrder as i, OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT as n, USAGE_BREAKDOWN_DRAWER_LIMIT as r, COMPUTE_BREAKDOWN_RESOURCE_LIMIT as t };
