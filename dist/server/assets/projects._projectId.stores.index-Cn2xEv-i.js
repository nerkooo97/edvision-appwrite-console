import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { nd as distributionAppsQueryOptions } from "./hooks-BONwG3Mt.js";
import { m as fetchProject } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.stores.index-Bnm_JPio.js");
const Route = createFileRoute("/_public/projects/$projectId/stores/")({
	head: () => ({ meta: [{ title: pageTitle("Distribution") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
		await queryClient.ensureQueryData(distributionAppsQueryOptions(projectId, 0, 12));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
