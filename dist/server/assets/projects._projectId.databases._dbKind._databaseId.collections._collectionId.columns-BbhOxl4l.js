import { n as COLUMNS_INDEXES_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { ct as tableColumnsQueryOptions, ft as tablesQueryOptions, lt as tableIndexesQueryOptions, ut as tableQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { i as throwRedirectTablesDbFromCollectionsChild } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.columns-C6eno1I-.js");
var TABLES_PER_PAGE = 100;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/columns")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.collection?.name ?? loaderData?.database?.name ?? "Database", "Databases") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, collectionId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId || !collectionId) return;
		throwRedirectTablesDbFromCollectionsChild(dbKind, "columns", {
			projectId,
			dbKind,
			databaseId,
			collectionId
		});
		const { page, limit, filterQueries: columnsFilterQueries } = parseListSearch(routeSearch, {
			page: 1,
			limit: 100
		});
		const pageIndexed = Math.max(0, page - 1);
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE)),
			queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)),
			queryClient.ensureQueryData(tableColumnsQueryOptions(projectId, databaseId, dbKind, collectionId, columnsFilterQueries, pageIndexed, limit)),
			queryClient.prefetchQuery(tableIndexesQueryOptions(projectId, databaseId, dbKind, collectionId)),
			queryClient.ensureQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId))
		]);
		const database = queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey);
		const dbType = database?.databaseType;
		if (dbType === DatabaseType.Documentsdb || dbType === DatabaseType.Vectorsdb) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
			params: {
				projectId,
				dbKind,
				databaseId,
				collectionId
			},
			replace: true
		});
		return {
			database,
			collection: queryClient.getQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId).queryKey)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
