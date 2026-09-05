import { d as postgresNav } from "./postgres-database-routes-CyTsPbzl.js";
import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { r as prefetchPostgresTableRowsRouteData } from "./postgres-table-route-loader-Bhk0qI0O.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.tables._tableId.rows-B5USnUgu.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/rows")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...postgresNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	validateSearch: listSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("PostgreSQL", "Databases") }] }),
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		await prefetchPostgresTableRowsRouteData(context.queryClient, projectId, databaseId, tableId, routeSearch);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
