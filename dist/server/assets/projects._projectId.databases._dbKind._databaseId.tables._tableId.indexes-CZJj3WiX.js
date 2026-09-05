import { n as COLUMNS_INDEXES_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ct as tableColumnsQueryOptions, ft as tablesQueryOptions, lt as tableIndexesQueryOptions, ut as tableQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as throwRedirectCollectionsDbFromTablesChild } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.indexes-D9fdloTd.js");
var TABLES_PER_PAGE = 100;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/indexes")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.table?.name ?? loaderData?.database?.name ?? "Database", "Databases") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, tableId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId || !tableId) return;
		throwRedirectCollectionsDbFromTablesChild(dbKind, "indexes", {
			projectId,
			dbKind,
			databaseId,
			tableId
		});
		const { page, limit, filterQueries: indexesFilterQueries } = parseListSearch(routeSearch, {
			page: 1,
			limit: 100
		});
		const pageIndexed = Math.max(0, page - 1);
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE)),
			queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)),
			queryClient.ensureQueryData(tableColumnsQueryOptions(projectId, databaseId, dbKind, tableId)),
			queryClient.ensureQueryData(tableIndexesQueryOptions(projectId, databaseId, dbKind, tableId, indexesFilterQueries, pageIndexed, limit)),
			queryClient.ensureQueryData(tableQueryOptions(projectId, databaseId, dbKind, tableId))
		]);
		return {
			database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
			table: queryClient.getQueryData(tableQueryOptions(projectId, databaseId, dbKind, tableId).queryKey)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
