import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.sites.create.deploying-C5RsSDck.js");
var searchSchema = z.object({
	siteId: z.string().optional(),
	deploymentId: z.string().optional()
});
const Route = createFileRoute("/_public/projects/$projectId/sites/create/deploying")({
	head: () => ({ meta: [{ title: pageTitle("Deploying", "Sites") }] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
