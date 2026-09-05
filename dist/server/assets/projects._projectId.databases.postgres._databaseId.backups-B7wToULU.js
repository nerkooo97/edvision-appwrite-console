import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { dh as postgresBackupPoliciesQueryOptions, fh as postgresBackupsQueryOptions, lh as POSTGRES_BACKUPS_PAGE_SIZE } from "./hooks-BONwG3Mt.js";
import { d as postgresNav, t as POSTGRES_DATABASE_TAB_LABELS } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { t as prefetchPostgresShellData } from "./postgres-tab-route-loader-B--X8VvC.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId.backups-Fi0bVSmf.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/backups")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().databaseBackups) throw redirect({
			...postgresNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle(POSTGRES_DATABASE_TAB_LABELS.backups, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		const shellData = await prefetchPostgresShellData(queryClient, projectId, databaseId);
		await Promise.all([queryClient.ensureQueryData(postgresBackupPoliciesQueryOptions(projectId, databaseId)), queryClient.ensureQueryData(postgresBackupsQueryOptions(projectId, databaseId, 0, POSTGRES_BACKUPS_PAGE_SIZE))]).catch(() => {});
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
