import { dv as fetchUserMFAFactors, lv as fetchUser } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.auth.users._userId-BrdDZEDW.js");
const Route = createFileRoute("/_public/projects/$projectId/auth/users/$userId")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([queryClient.fetchQuery({
				queryKey: [
					"user",
					"project",
					projectId,
					userId
				],
				queryFn: () => fetchUser(projectId, userId),
				staleTime: 30 * 1e3
			}), queryClient.fetchQuery({
				queryKey: [
					"user",
					"mfa-factors",
					"project",
					projectId,
					userId
				],
				queryFn: () => fetchUserMFAFactors(projectId, userId),
				staleTime: 30 * 1e3
			})]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
