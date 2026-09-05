import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.functions.create.deploying-CXu9lKhW.js");
var searchSchema = z.object({
	functionId: z.string().optional(),
	deploymentId: z.string().optional()
});
const Route = createFileRoute("/_public/projects/$projectId/functions/create/deploying")({
	head: () => ({ meta: [{ title: pageTitle("Deploying", "Functions") }] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
