import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Is as countriesQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.usage-BMKpDQM6.js");
const Route = createFileRoute("/_public/projects/$projectId/usage")({
	head: () => ({ meta: [{ title: pageTitle("Usage") }] }),
	beforeLoad: ({ params }) => {
		if (typeof window !== "undefined" && !getActiveProfileFeatures().usageStats) throw redirect({
			to: "/projects/$projectId",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		queryClient.prefetchQuery(countriesQueryOptions()).catch(() => void 0);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
