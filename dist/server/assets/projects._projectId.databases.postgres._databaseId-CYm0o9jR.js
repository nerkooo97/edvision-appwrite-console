import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Gh as postgresDatabaseQueryOptions, Hh as isPostgresEngine } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { Ht as ensureConsoleSqlApiStatements } from "./databases-Dh0pwZ6h.js";
import { d as postgresNav } from "./postgres-database-routes-CyTsPbzl.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as throwRedirectIfDedicatedDatabaseProvisioning } from "./dedicated-database-provisioning-access-De1sGrke.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.postgres._databaseId-CiBHnHyg.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId")({
	head: () => ({ meta: [{ title: pageTitle("PostgreSQL", "Databases") }] }),
	beforeLoad: async ({ params, context, location }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (!getActiveProfileFeatures().nativeDbsPostgres) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const database = await queryClient.ensureQueryData(postgresDatabaseQueryOptions(projectId, databaseId));
		if (!database) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		if (!isPostgresEngine(database.engine)) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		throwRedirectIfDedicatedDatabaseProvisioning(database.status, location.pathname, postgresNav({
			projectId,
			databaseId
		}).sql());
		try {
			const { database: updated, updated: didUpdate } = await ensureConsoleSqlApiStatements(projectId, databaseId, "postgresql", database);
			if (didUpdate && updated) queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, updated);
		} catch {}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
