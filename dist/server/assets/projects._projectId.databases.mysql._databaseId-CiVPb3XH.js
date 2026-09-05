import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { cp as isMysqlEngine, dp as mysqlDatabaseQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { Ht as ensureConsoleSqlApiStatements } from "./databases-Dh0pwZ6h.js";
import { o as mysqlNav } from "./mysql-database-routes-CVHkJzTt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as throwRedirectIfDedicatedDatabaseProvisioning } from "./dedicated-database-provisioning-access-De1sGrke.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases.mysql._databaseId-Cy1UmHDj.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId")({
	head: () => ({ meta: [{ title: pageTitle("MySQL", "Databases") }] }),
	beforeLoad: async ({ params, context, location }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (!getActiveProfileFeatures().nativeDbsMySQL) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const database = await queryClient.ensureQueryData(mysqlDatabaseQueryOptions(projectId, databaseId));
		if (!database) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		if (!isMysqlEngine(database.engine)) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		throwRedirectIfDedicatedDatabaseProvisioning(database.status, location.pathname, mysqlNav({
			projectId,
			databaseId
		}).sql());
		try {
			const { database: updated, updated: didUpdate } = await ensureConsoleSqlApiStatements(projectId, databaseId, "mysql", database);
			if (didUpdate && updated) queryClient.setQueryData(mysqlDatabaseQueryOptions(projectId, databaseId).queryKey, updated);
		} catch {}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
