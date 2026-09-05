import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { ur as projectFunctionQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.functions._functionId.executions-1kqqTR61.js");
var searchSchema = listSearchSchema.extend({ executionId: z.string().optional().catch(void 0) });
const Route = createFileRoute("/_public/projects/$projectId/functions/$functionId/executions")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	validateSearch: searchSchema,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId));
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
