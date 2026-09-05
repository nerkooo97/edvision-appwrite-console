import { cv as fetchTeamMemberships, sv as fetchTeam } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.auth.teams._teamId.members-DB9WwDOj.js");
var MEMBERSHIPS_PER_PAGE = 25;
const Route = createFileRoute("/_public/projects/$projectId/auth/teams/$teamId/members")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.team?.name ?? "Team", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, teamId } = params;
		const { queryClient } = context;
		if (projectId && teamId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([queryClient.fetchQuery({
				queryKey: [
					"team",
					"project",
					projectId,
					teamId
				],
				queryFn: () => fetchTeam(projectId, teamId),
				staleTime: 30 * 1e3
			}), queryClient.fetchQuery({
				queryKey: [
					"team",
					"memberships",
					"project",
					projectId,
					teamId,
					0,
					MEMBERSHIPS_PER_PAGE,
					""
				],
				queryFn: () => fetchTeamMemberships(projectId, teamId, 0, MEMBERSHIPS_PER_PAGE, ""),
				staleTime: 30 * 1e3
			})]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
