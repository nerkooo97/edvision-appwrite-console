import { d as postgresNav } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { f as canAccessTableSecuritySettings } from "./console-rbac-loader-DvaSNNjB.js";
import { i as prefetchPostgresTableSecurityRouteData } from "./postgres-table-route-loader-Bhk0qI0O.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.tables._tableId.security-C5LTmQeh.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/security")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...postgresNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("PostgreSQL", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		const { queryClient } = context;
		if (!await canAccessTableSecuritySettings(queryClient, projectId)) throw redirect({
			...postgresNav({
				projectId,
				databaseId
			}).table({ tableId }).rows(),
			replace: true
		});
		await prefetchPostgresTableSecurityRouteData(queryClient, projectId, databaseId, tableId);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
