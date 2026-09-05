import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { ff as postgresConnectionAppsQueryOptions, hf as postgresTableActivityQueryOptions, mf as postgresMetricsSnapshotQueryOptions, pf as postgresConnectionStatesQueryOptions } from "./hooks-BONwG3Mt.js";
import { d as postgresNav, t as POSTGRES_DATABASE_TAB_LABELS } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchPostgresShellData } from "./postgres-tab-route-loader-B--X8VvC.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.monitor-Beo8L0up.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/monitor")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().usageStats) throw redirect({
			...postgresNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle(POSTGRES_DATABASE_TAB_LABELS.monitor, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		const shellData = await prefetchPostgresShellData(queryClient, projectId, databaseId);
		await Promise.all([
			queryClient.ensureQueryData(postgresMetricsSnapshotQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(postgresConnectionStatesQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(postgresConnectionAppsQueryOptions(projectId, databaseId)),
			queryClient.ensureQueryData(postgresTableActivityQueryOptions(projectId, databaseId))
		]).catch(() => {});
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
