import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.sites.create.deploy-959tHo5m.js");
var searchSchema = z.object({
	repo: z.string().optional(),
	owner: z.string().optional(),
	framework: z.string().optional(),
	branch: z.string().optional(),
	root: z.string().optional(),
	installCommand: z.string().optional(),
	buildCommand: z.string().optional(),
	startCommand: z.string().optional(),
	outputDirectory: z.string().optional(),
	envKeys: z.string().optional()
});
const Route = createFileRoute("/_public/projects/$projectId/sites/create/deploy")({
	head: () => ({ meta: [{ title: pageTitle("Quick deploy", "Sites") }] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
