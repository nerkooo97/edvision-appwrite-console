import { m as fetchProject } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.apps.add-CJbMp1Sj.js");
var addAppSearchSchema = z.object({
	step: z.enum(["configure", "setup"]).optional(),
	kind: z.enum([
		"web",
		"android",
		"apple",
		"flutter",
		"react-native",
		"windows",
		"linux"
	]).optional(),
	variant: z.string().optional(),
	framework: z.enum([
		"analog",
		"angular",
		"astro",
		"js",
		"nextjs",
		"nuxt",
		"react",
		"remix",
		"solid",
		"svelte",
		"sveltekit",
		"tanstack-start",
		"vite",
		"vue"
	]).optional(),
	platformId: z.string().optional(),
	configureStep: z.enum(["platform", "details"]).optional()
});
const Route = createFileRoute("/_public/projects/$projectId/apps/add")({
	head: () => ({ meta: [{ title: pageTitle("Add app") }] }),
	validateSearch: addAppSearchSchema,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
