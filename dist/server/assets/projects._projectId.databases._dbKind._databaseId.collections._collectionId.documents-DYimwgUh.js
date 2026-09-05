import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ct as tableColumnsQueryOptions, dt as tableRowsQueryOptions, ft as tablesQueryOptions, lt as tableIndexesQueryOptions, ut as tableQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { i as throwRedirectTablesDbFromCollectionsChild } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.documents-ObEX3p0W.js");
var TABLES_PER_PAGE = 100;
var DEFAULT_PAGE = 1;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.collection?.name ?? loaderData?.database?.name ?? "Database", "Databases") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, collectionId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		throwRedirectTablesDbFromCollectionsChild(dbKind, "dataGrid", {
			projectId,
			dbKind,
			databaseId,
			collectionId
		});
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const tablesPromise = queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE, void 0));
		if (collectionId === "-") {
			const firstTable = ((await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 25, void 0, "asc", "$createdAt"))).tables || [])[0];
			if (firstTable?.$id) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					collectionId: firstTable.$id
				},
				replace: true
			});
			await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
			return {
				database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
				collection: void 0
			};
		}
		if (collectionId) {
			const tablesData = await tablesPromise;
			if (!tablesData.tables || tablesData.tables.length === 0) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					collectionId: "-"
				},
				replace: true
			});
			if (!tablesData.tables.some((table) => table.$id === collectionId)) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					collectionId: "-"
				},
				replace: true
			});
			const { search, page, limit, filterQueries } = parseListSearch(routeSearch, {
				page: DEFAULT_PAGE,
				limit: 25
			});
			await Promise.all([
				tablesPromise,
				queryClient.ensureQueryData(tableRowsQueryOptions(projectId, databaseId, collectionId, dbKind, page - 1, limit, search ?? void 0, "desc", "$createdAt", filterQueries, void 0)),
				queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)),
				queryClient.ensureQueryData(tableColumnsQueryOptions(projectId, databaseId, dbKind, collectionId)),
				queryClient.ensureQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId)),
				projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve(),
				queryClient.prefetchQuery(tableIndexesQueryOptions(projectId, databaseId, dbKind, collectionId)).catch(() => {})
			]);
			return {
				database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
				collection: queryClient.getQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId).queryKey)
			};
		} else await tablesPromise;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
