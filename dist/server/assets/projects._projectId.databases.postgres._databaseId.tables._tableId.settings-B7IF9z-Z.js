import { d as postgresNav } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as prefetchPostgresTableRouteData } from "./postgres-table-route-loader-Bhk0qI0O.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.tables._tableId.settings-DV_IKNSl.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/settings")({
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
		await prefetchPostgresTableRouteData(context.queryClient, projectId, databaseId, tableId, { includeTableInfo: true });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
