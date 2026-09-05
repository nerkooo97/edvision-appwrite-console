import { Uh as postgresDatabaseCredentialsQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as POSTGRES_DATABASE_TAB_LABELS } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchPostgresShellData } from "./postgres-tab-route-loader-B--X8VvC.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.sql-WXhiw1tW.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/sql")({
	head: () => ({ meta: [{ title: pageTitle(POSTGRES_DATABASE_TAB_LABELS.sql, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const database = await prefetchPostgresShellData(context.queryClient, projectId, databaseId);
		await context.queryClient.ensureQueryData(postgresDatabaseCredentialsQueryOptions(projectId, databaseId));
		return database;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
