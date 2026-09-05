import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { r as canAccessDatabaseSecuritySettings } from "./console-rbac-loader-DvaSNNjB.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.settings-D0Pnvf4O.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.database?.name ?? "Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		if (!await canAccessDatabaseSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/",
			params: {
				projectId,
				dbKind,
				databaseId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		return { database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
