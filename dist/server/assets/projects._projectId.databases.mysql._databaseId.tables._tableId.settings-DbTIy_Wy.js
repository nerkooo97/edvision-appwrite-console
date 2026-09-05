import { o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as prefetchMysqlTableRouteData } from "./mysql-table-route-loader-BP-PeWrP.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.tables._tableId.settings-xmV86uJq.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/settings")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...mysqlNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("MySQL", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		await prefetchMysqlTableRouteData(context.queryClient, projectId, databaseId, tableId, { includeTableInfo: true });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
