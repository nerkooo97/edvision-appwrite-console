import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Sp as mysqlTableRowsQueryOptions, _p as mysqlTableIndexesQueryOptions, bp as mysqlTableRlsQueryOptions, gp as mysqlTableColumnsQueryOptions, vp as mysqlTableInfoQueryOptions, xp as mysqlTableRowColumnsQueryOptions, yp as mysqlTablePoliciesQueryOptions } from "./hooks-BONwG3Mt.js";
import { l as normalizeMysqlTableRouteId, o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import { isRedirect, redirect } from "@tanstack/react-router";
async function prefetchMysqlTableLayoutData(_queryClient, _projectId, _databaseId, tableId) {
	return normalizeMysqlTableRouteId(tableId);
}
async function prefetchMysqlTableRowsRouteData(queryClient, projectId, databaseId, tableId, routeSearch) {
	const normalizedTableId = normalizeMysqlTableRouteId(tableId);
	const search = typeof routeSearch?.search === "string" ? routeSearch.search.trim() || void 0 : void 0;
	const filterMap = queryParamToMap(typeof routeSearch?.query === "string" ? routeSearch.query : null);
	const filterKeys = filterMap.size > 0 ? Array.from(filterMap.keys()) : void 0;
	const hasFilters = filterMap.size > 0;
	const rowColumnsPromise = queryClient.ensureQueryData(mysqlTableRowColumnsQueryOptions(projectId, databaseId, normalizedTableId));
	await Promise.all([rowColumnsPromise, ...hasFilters ? [] : [queryClient.ensureQueryData(mysqlTableRowsQueryOptions(projectId, databaseId, normalizedTableId, 0, 25, {
		search,
		filterKeys
	}))]]);
	try {
		if (!(await rowColumnsPromise).exists) throw redirect({
			...mysqlNav({
				projectId,
				databaseId
			}).sql(),
			replace: true
		});
	} catch (error) {
		if (isRedirect(error)) throw error;
	}
}
async function prefetchMysqlTableRouteData(queryClient, projectId, databaseId, tableId, options) {
	const normalizedTableId = await prefetchMysqlTableLayoutData(queryClient, projectId, databaseId, tableId);
	await Promise.all([
		queryClient.ensureQueryData(mysqlTableColumnsQueryOptions(projectId, databaseId, normalizedTableId)),
		...options?.includeTableInfo ? [queryClient.ensureQueryData(mysqlTableInfoQueryOptions(projectId, databaseId, normalizedTableId))] : [],
		...options?.includeFullIndexes ? [queryClient.ensureQueryData(mysqlTableIndexesQueryOptions(projectId, databaseId, normalizedTableId))] : []
	]);
}
async function prefetchMysqlTableSecurityRouteData(queryClient, projectId, databaseId, tableId) {
	const normalizedTableId = await prefetchMysqlTableLayoutData(queryClient, projectId, databaseId, tableId);
	await Promise.all([
		queryClient.ensureQueryData(mysqlTableInfoQueryOptions(projectId, databaseId, normalizedTableId)),
		queryClient.ensureQueryData(mysqlTableRlsQueryOptions(projectId, databaseId, normalizedTableId)),
		queryClient.ensureQueryData(mysqlTablePoliciesQueryOptions(projectId, databaseId, normalizedTableId))
	]);
}
export { prefetchMysqlTableSecurityRouteData as i, prefetchMysqlTableRouteData as n, prefetchMysqlTableRowsRouteData as r, prefetchMysqlTableLayoutData as t };
