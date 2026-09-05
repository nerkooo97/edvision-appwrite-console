import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Qs as backupPoliciesQueryOptions, Zs as backupArchivesQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ft as tablesQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.backups-PNswBnN5.js");
var TABLES_PER_PAGE = 100;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/backups")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().databaseBackups) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/",
			params: {
				projectId: params.projectId,
				dbKind: params.dbKind,
				databaseId: params.databaseId
			},
			replace: true
		});
	},
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.database?.name ?? "Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE, void 0));
		await Promise.all([queryClient.prefetchQuery(backupPoliciesQueryOptions(projectId, databaseId)), queryClient.prefetchQuery(backupArchivesQueryOptions(projectId, databaseId, 0, 10))]).catch(() => {});
		return { database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
