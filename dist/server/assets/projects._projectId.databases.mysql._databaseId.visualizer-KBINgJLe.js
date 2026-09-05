import { pp as mysqlSidebarSchemasInfiniteQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as MYSQL_DATABASE_TAB_LABELS } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchMysqlShellData } from "./mysql-tab-route-loader-D18CXQ4h.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.visualizer-CstpyvrY.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/visualizer")({
	head: () => ({ meta: [{ title: pageTitle(MYSQL_DATABASE_TAB_LABELS.visualizer, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		const shellData = await prefetchMysqlShellData(queryClient, projectId, databaseId);
		await queryClient.prefetchInfiniteQuery(mysqlSidebarSchemasInfiniteQueryOptions(projectId, databaseId, "")).catch(() => {});
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
