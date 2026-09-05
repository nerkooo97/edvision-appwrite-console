import { d as sdk } from "./sdk-DjIJ_hjn.js";
function extractOrganizationIdFromQueries(queries) {
	if (!queries?.length) return void 0;
	for (const query of queries) try {
		const parsed = JSON.parse(query);
		if (parsed.method === "equal" && parsed.attribute === "teamId" && Array.isArray(parsed.values) && typeof parsed.values[0] === "string" && parsed.values[0].trim()) return parsed.values[0].trim();
	} catch {}
}
function resolveOrganizationId(params) {
	const fromParams = params?.organizationId?.trim() || params?.teamId?.trim() || "";
	if (fromParams) return fromParams;
	const fromQueries = extractOrganizationIdFromQueries(params?.queries);
	if (fromQueries) return fromQueries;
	throw new Error("Organization ID is required for organization project API calls");
}
function listConsoleProjects(params) {
	const organizationId = resolveOrganizationId(params);
	return sdk.forConsole.organization(organizationId).listProjects({
		queries: params?.queries,
		search: params?.search,
		total: params?.total
	});
}
function createConsoleProject(params) {
	return sdk.forConsole.organization(params.teamId).createProject({
		projectId: params.projectId,
		name: params.name,
		...params.region !== void 0 ? { region: params.region } : {}
	});
}
function updateConsoleProject(params) {
	return sdk.forConsole.organization(params.organizationId).updateProject({
		projectId: params.projectId,
		name: params.name
	});
}
export { listConsoleProjects as n, updateConsoleProject as r, createConsoleProject as t };
