import { m as TABLE_WORKSPACE_TABLES_LIST_LIMIT } from "./constants-BDeF927R.js";
import { Oc as databaseCsvMigrationsQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ft as tablesQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.export-import-CmBgvwV7.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/export-import")({
	validateSearch: listSearchSchema,
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.database?.name ?? "Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		const tableIds = ((await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 100, void 0))).tables || []).map((t) => t.$id);
		if (tableIds.length > 0) await queryClient.ensureQueryData(databaseCsvMigrationsQueryOptions(projectId, databaseId, tableIds)).catch(() => {});
		return { database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
