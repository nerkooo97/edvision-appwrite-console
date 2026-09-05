import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { sv as fetchTeam } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.auth.teams._teamId.activity-DddUGzPI.js");
const Route = createFileRoute("/_public/projects/$projectId/auth/teams/$teamId/activity")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().activity) throw redirect({
			to: "/projects/$projectId/auth/teams/$teamId",
			params: {
				projectId: params.projectId,
				teamId: params.teamId
			},
			replace: true
		});
	},
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.team?.name ?? "Team", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, teamId } = params;
		const { queryClient } = context;
		if (projectId && teamId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await queryClient.fetchQuery({
				queryKey: [
					"team",
					"project",
					projectId,
					teamId
				],
				queryFn: () => fetchTeam(projectId, teamId),
				staleTime: 30 * 1e3
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
