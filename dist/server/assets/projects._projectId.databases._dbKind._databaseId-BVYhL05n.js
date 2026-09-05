import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { $ as productRouteKindQueryOptions, C as dedicatedDatabasesQueryOptions, it as resolveProductRouteKindForDatabase, st as seedDatabaseProductRouteKind, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { a as isDatabaseRouteKind, c as isProductDatabaseRouteKindEnabled } from "./database-routes-DB_xKWuY.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as throwRedirectIfDedicatedDatabaseProvisioning } from "./dedicated-database-provisioning-access-De1sGrke.js";
import { n as throwRedirectMysqlDbKind, r as throwRedirectPostgresDbKind } from "./database-route-redirects-ECTN0PFz.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId-BHSAyhH-.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId")({
	head: () => ({ meta: [{ title: pageTitle("Databases") }] }),
	beforeLoad: async ({ params, context, location }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		throwRedirectPostgresDbKind(dbKind, {
			projectId,
			databaseId
		});
		throwRedirectMysqlDbKind(dbKind, {
			projectId,
			databaseId
		});
		if (!isDatabaseRouteKind(dbKind)) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		if (!isProductDatabaseRouteKindEnabled(dbKind, getActiveProfileFeatures())) return;
		seedDatabaseProductRouteKind(projectId, databaseId, dbKind);
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const routeKindKey = productRouteKindQueryOptions(projectId, databaseId).queryKey;
		let expected = queryClient.getQueryData(routeKindKey);
		if (expected !== dbKind) {
			const resolved = await resolveProductRouteKindForDatabase(projectId, databaseId, dbKind);
			if (resolved != null) {
				expected = resolved;
				queryClient.setQueryData(routeKindKey, resolved);
			}
		}
		if (expected == null) {
			expected = await resolveProductRouteKindForDatabase(projectId, databaseId, dbKind);
			if (expected != null) queryClient.setQueryData(routeKindKey, expected);
		}
		if (!expected) throw redirect({
			to: "/projects/$projectId/databases",
			params: { projectId },
			replace: true
		});
		if (dbKind !== expected) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId",
			params: {
				projectId,
				dbKind: expected,
				databaseId
			},
			replace: true
		});
		seedDatabaseProductRouteKind(projectId, databaseId, dbKind);
		let status;
		try {
			status = (await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)))?.status;
		} catch {
			status = void 0;
		}
		if (!status) try {
			status = (await queryClient.ensureQueryData(dedicatedDatabasesQueryOptions(projectId)))?.databases?.find((db) => db.$id === databaseId)?.status;
		} catch {}
		throwRedirectIfDedicatedDatabaseProvisioning(status, location.pathname, {
			to: "/projects/$projectId/databases/$dbKind/$databaseId/",
			params: {
				projectId,
				dbKind,
				databaseId
			}
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
