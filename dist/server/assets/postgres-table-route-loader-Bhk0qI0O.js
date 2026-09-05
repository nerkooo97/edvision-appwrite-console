import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { $h as postgresTableInfoQueryOptions, Qh as postgresTableIndexesQueryOptions, Zh as postgresTableColumnsQueryOptions, eg as postgresTablePoliciesQueryOptions, ng as postgresTableRowColumnsQueryOptions, rg as postgresTableRowsQueryOptions, tg as postgresTableRlsQueryOptions } from "./hooks-BONwG3Mt.js";
import { d as postgresNav, i as normalizePostgresTableRouteId } from "./postgres-database-routes-CyTsPbzl.js";
import { pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import { isRedirect, redirect } from "@tanstack/react-router";
async function prefetchPostgresTableLayoutData(_queryClient, _projectId, _databaseId, tableId) {
	return normalizePostgresTableRouteId(tableId);
}
async function prefetchPostgresTableRowsRouteData(queryClient, projectId, databaseId, tableId, routeSearch) {
	const normalizedTableId = normalizePostgresTableRouteId(tableId);
	const search = typeof routeSearch?.search === "string" ? routeSearch.search.trim() || void 0 : void 0;
	const filterMap = queryParamToMap(typeof routeSearch?.query === "string" ? routeSearch.query : null);
	const filterKeys = filterMap.size > 0 ? Array.from(filterMap.keys()) : void 0;
	const hasFilters = filterMap.size > 0;
	const rowColumnsPromise = queryClient.ensureQueryData(postgresTableRowColumnsQueryOptions(projectId, databaseId, normalizedTableId));
	await Promise.all([rowColumnsPromise, ...hasFilters ? [] : [queryClient.ensureQueryData(postgresTableRowsQueryOptions(projectId, databaseId, normalizedTableId, 0, 25, {
		search,
		filterKeys
	}))]]);
	try {
		if (!(await rowColumnsPromise).exists) throw redirect({
			...postgresNav({
				projectId,
				databaseId
			}).sql(),
			replace: true
		});
	} catch (error) {
		if (isRedirect(error)) throw error;
	}
}
async function prefetchPostgresTableRouteData(queryClient, projectId, databaseId, tableId, options) {
	const normalizedTableId = await prefetchPostgresTableLayoutData(queryClient, projectId, databaseId, tableId);
	await Promise.all([
		queryClient.ensureQueryData(postgresTableColumnsQueryOptions(projectId, databaseId, normalizedTableId)),
		...options?.includeTableInfo ? [queryClient.ensureQueryData(postgresTableInfoQueryOptions(projectId, databaseId, normalizedTableId))] : [],
		...options?.includeFullIndexes ? [queryClient.ensureQueryData(postgresTableIndexesQueryOptions(projectId, databaseId, normalizedTableId))] : []
	]);
}
async function prefetchPostgresTableSecurityRouteData(queryClient, projectId, databaseId, tableId) {
	const normalizedTableId = await prefetchPostgresTableLayoutData(queryClient, projectId, databaseId, tableId);
	await Promise.all([
		queryClient.ensureQueryData(postgresTableInfoQueryOptions(projectId, databaseId, normalizedTableId)),
		queryClient.ensureQueryData(postgresTableRlsQueryOptions(projectId, databaseId, normalizedTableId)),
		queryClient.ensureQueryData(postgresTablePoliciesQueryOptions(projectId, databaseId, normalizedTableId))
	]);
}
export { prefetchPostgresTableSecurityRouteData as i, prefetchPostgresTableRouteData as n, prefetchPostgresTableRowsRouteData as r, prefetchPostgresTableLayoutData as t };
