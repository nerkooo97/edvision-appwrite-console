import { df as postgresActiveConnectionsQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as POSTGRES_DATABASE_TAB_LABELS } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchPostgresShellData } from "./postgres-tab-route-loader-B--X8VvC.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.connections-CzLC-H7j.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/connections")({
	head: () => ({ meta: [{ title: pageTitle(POSTGRES_DATABASE_TAB_LABELS.connections, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const database = await prefetchPostgresShellData(context.queryClient, projectId, databaseId);
		await context.queryClient.ensureQueryData(postgresActiveConnectionsQueryOptions(projectId, databaseId));
		return database;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
