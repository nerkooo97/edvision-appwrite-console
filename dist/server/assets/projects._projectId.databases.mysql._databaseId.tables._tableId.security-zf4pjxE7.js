import { o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { f as canAccessTableSecuritySettings } from "./console-rbac-loader-DvaSNNjB.js";
import { i as prefetchMysqlTableSecurityRouteData } from "./mysql-table-route-loader-BP-PeWrP.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.tables._tableId.security-B5vMp73q.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/security")({
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
		const { queryClient } = context;
		if (!await canAccessTableSecuritySettings(queryClient, projectId)) throw redirect({
			...mysqlNav({
				projectId,
				databaseId
			}).table({ tableId }).rows(),
			replace: true
		});
		await prefetchMysqlTableSecurityRouteData(queryClient, projectId, databaseId, tableId);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
