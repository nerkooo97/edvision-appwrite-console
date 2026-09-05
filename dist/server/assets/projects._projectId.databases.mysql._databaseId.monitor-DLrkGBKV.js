import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Jd as mysqlConnectionAppsQueryOptions, Xd as mysqlMetricsSnapshotQueryOptions, Yd as mysqlConnectionStatesQueryOptions, Zd as mysqlTableActivityQueryOptions } from "./hooks-BONwG3Mt.js";
import { o as mysqlNav, t as MYSQL_DATABASE_TAB_LABELS } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchMysqlShellData } from "./mysql-tab-route-loader-D18CXQ4h.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId.monitor-CtfjHii4.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/monitor")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().usageStats) throw redirect({
			...mysqlNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle(MYSQL_DATABASE_TAB_LABELS.monitor, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		const shellData = await prefetchMysqlShellData(queryClient, projectId, databaseId);
		await Promise.all([
			queryClient.ensureQueryData(mysqlMetricsSnapshotQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(mysqlConnectionStatesQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(mysqlConnectionAppsQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(mysqlTableActivityQueryOptions(projectId, databaseId))
		]).catch(() => {});
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
