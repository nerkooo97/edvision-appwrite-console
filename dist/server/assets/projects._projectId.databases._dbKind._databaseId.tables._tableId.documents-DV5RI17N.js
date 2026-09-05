import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { dt as tableRowsQueryOptions, ft as tablesQueryOptions, ut as tableQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as throwRedirectCollectionsDbFromTablesChild } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.documents-pE2VCNo-.js");
var TABLES_PER_PAGE = 100;
var DEFAULT_PAGE = 1;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.table?.name ?? loaderData?.database?.name ?? "Database", "Databases") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, tableId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		throwRedirectCollectionsDbFromTablesChild(dbKind, "dataJson", {
			projectId,
			dbKind,
			databaseId,
			tableId
		});
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const tablesPromise = queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE, void 0));
		if (tableId === "-") {
			const firstTable = ((await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 25, void 0, "asc", "$createdAt"))).tables || [])[0];
			if (firstTable?.$id) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					tableId: firstTable.$id
				},
				replace: true
			});
			await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
			return {
				database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
				table: void 0
			};
		}
		if (tableId) {
			const tablesData = await tablesPromise;
			if (!tablesData.tables || tablesData.tables.length === 0) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					tableId: "-"
				},
				replace: true
			});
			if (!tablesData.tables.some((table) => table.$id === tableId)) throw redirect({
				to: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
				params: {
					projectId,
					dbKind,
					databaseId,
					tableId: "-"
				},
				replace: true
			});
			const { search, page, limit, filterQueries, sort } = parseListSearch(routeSearch, {
				page: DEFAULT_PAGE,
				limit: 25
			});
			const sortBy = sort?.sortBy ?? "$createdAt";
			const sortOrder = sort?.sortOrder ?? "desc";
			await Promise.all([
				tablesPromise,
				queryClient.ensureQueryData(tableRowsQueryOptions(projectId, databaseId, tableId, dbKind, page - 1, limit, search ?? void 0, sortOrder, sortBy, filterQueries, void 0)).catch(() => {}),
				queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)),
				queryClient.ensureQueryData(tableQueryOptions(projectId, databaseId, dbKind, tableId)),
				projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()
			]);
			return {
				database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
				table: queryClient.getQueryData(tableQueryOptions(projectId, databaseId, dbKind, tableId).queryKey)
			};
		} else await tablesPromise;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
