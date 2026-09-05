import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { id as distributionSubmissionsQueryOptions, rd as distributionBuildsQueryOptions, td as distributionAppQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.stores._appId.index-CKWkKLHr.js");
const Route = createFileRoute("/_public/projects/$projectId/stores/$appId/")({
	head: () => ({ meta: [{ title: pageTitle("App", "Distribution") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, appId } = params;
		const { queryClient } = context;
		if (!projectId || !appId) return;
		try {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			const [app] = await Promise.all([
				queryClient.ensureQueryData(distributionAppQueryOptions(projectId, appId)),
				queryClient.ensureQueryData(distributionBuildsQueryOptions(projectId, appId, 0, 10)),
				queryClient.ensureQueryData(distributionSubmissionsQueryOptions(projectId, appId, 0, 10))
			]);
			return { app };
		} catch (error) {
			console.warn("Failed to fetch distribution app in loader:", error);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
