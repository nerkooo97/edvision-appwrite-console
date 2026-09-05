import { Rc as projectMigrationsQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.settings.migrations.index-CLFyhOzE.js");
const Route = createFileRoute("/_public/projects/$projectId/settings/migrations/")({
	head: () => ({ meta: [{ title: pageTitle("Migrations", "Settings") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		const project = await queryClient.ensureQueryData(projectQueryOptions(projectId)).catch(() => null);
		const region = project ? project.region || "unknown" : void 0;
		return { migrationsData: await queryClient.ensureQueryData(projectMigrationsQueryOptions(projectId, region)).catch(() => void 0) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
