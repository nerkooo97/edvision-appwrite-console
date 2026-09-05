import { dy as onboardingSnapshotQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { l as canAccessProjectOnboarding } from "./console-rbac-loader-DvaSNNjB.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.onboarding-BtVaIF6D.js");
const Route = createFileRoute("/_public/projects/$projectId/onboarding")({
	head: () => ({ meta: [{ title: pageTitle("Get started") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (!await canAccessProjectOnboarding(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId",
			params: { projectId },
			replace: true
		});
		return { snapshot: await queryClient.ensureQueryData(onboardingSnapshotQueryOptions(projectId)) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
