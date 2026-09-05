import { T as projectQueryOptions, w as platformsQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.apps-kve7o-An.js");
const Route = createFileRoute("/_public/projects/$projectId/apps")({
	head: () => ({ meta: [{ title: pageTitle("Apps") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		const [, platformsResponse] = await Promise.all([queryClient.ensureQueryData(projectQueryOptions(projectId)), queryClient.ensureQueryData(platformsQueryOptions(projectId))]);
		return { platforms: platformsResponse?.platforms ?? [] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
