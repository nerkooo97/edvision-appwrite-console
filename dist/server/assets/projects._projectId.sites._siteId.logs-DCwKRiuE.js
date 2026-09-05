import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { $t as siteQueryOptions } from "./affiliates-BOg1SHC6.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.sites._siteId.logs-WAnM3O1-.js");
var searchSchema = listSearchSchema.extend({ executionId: z.string().optional().catch(void 0) });
const Route = createFileRoute("/_public/projects/$projectId/sites/$siteId/logs")({
	validateSearch: searchSchema,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
