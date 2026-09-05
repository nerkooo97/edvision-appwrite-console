import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Is as countriesQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.activity-e81hn3CP.js");
var activitySearchSchema = z.object({
	event: z.string().optional().catch(void 0),
	query: z.string().optional().catch(void 0)
});
const Route = createFileRoute("/_public/projects/$projectId/activity")({
	head: () => ({ meta: [{ title: pageTitle("Activity") }] }),
	validateSearch: activitySearchSchema,
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().activity) throw redirect({
			to: "/projects/$projectId",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		await queryClient.ensureQueryData(countriesQueryOptions()).catch(() => void 0);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
