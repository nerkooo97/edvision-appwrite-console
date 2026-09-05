import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ft as tablesQueryOptions, n as allTablesForVisualizerQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.visualizer-Cg20E6yQ.js");
var TABLES_PER_PAGE = 100;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/visualizer")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.database?.name ?? "Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE, void 0));
		await queryClient.ensureQueryData(allTablesForVisualizerQueryOptions(projectId, databaseId, dbKind));
		return { database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
