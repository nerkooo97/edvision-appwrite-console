import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.functions.create.template._templateId-AhnVqRyY.js");
var searchSchema = z.object({ runtime: z.string().optional() });
const Route = createFileRoute("/_public/projects/$projectId/functions/create/template/$templateId")({
	head: () => ({ meta: [{ title: pageTitle("Create from template", "Functions") }] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
