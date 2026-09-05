import { fp as mysqlRolesQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as MYSQL_DATABASE_TAB_LABELS } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchMysqlShellData } from "./mysql-tab-route-loader-D18CXQ4h.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.roles-CHZvQxJ_.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/roles")({
	head: () => ({ meta: [{ title: pageTitle(MYSQL_DATABASE_TAB_LABELS.roles, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		const shellData = await prefetchMysqlShellData(queryClient, projectId, databaseId);
		await queryClient.ensureQueryData(mysqlRolesQueryOptions(projectId, databaseId));
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
