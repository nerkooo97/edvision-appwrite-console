import { o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { r as prefetchMysqlTableRowsRouteData } from "./mysql-table-route-loader-BP-PeWrP.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.tables._tableId.rows-Cwl9P6Gc.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/rows")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...mysqlNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	validateSearch: listSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("MySQL", "Databases") }] }),
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		await prefetchMysqlTableRowsRouteData(context.queryClient, projectId, databaseId, tableId, routeSearch);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
