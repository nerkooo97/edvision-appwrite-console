import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { ct as tableColumnsQueryOptions, ft as tablesQueryOptions, lt as tableIndexesQueryOptions, ut as tableQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { f as canAccessTableSecuritySettings } from "./console-rbac-loader-DvaSNNjB.js";
import { i as throwRedirectTablesDbFromCollectionsChild } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.security-BFR6xAe4.js");
var TABLES_PER_PAGE = 100;
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/security")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.collection?.name ?? loaderData?.database?.name ?? "Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, collectionId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId || !collectionId) return;
		throwRedirectTablesDbFromCollectionsChild(dbKind, "security", {
			projectId,
			dbKind,
			databaseId,
			collectionId
		});
		if (!await canAccessTableSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
			params: {
				projectId,
				dbKind,
				databaseId,
				collectionId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, TABLES_PER_PAGE)),
			queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)),
			queryClient.ensureQueryData(tableColumnsQueryOptions(projectId, databaseId, dbKind, collectionId)),
			queryClient.prefetchQuery(tableIndexesQueryOptions(projectId, databaseId, dbKind, collectionId)),
			queryClient.ensureQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId))
		]);
		return {
			database: queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey),
			collection: queryClient.getQueryData(tableQueryOptions(projectId, databaseId, dbKind, collectionId).queryKey)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
