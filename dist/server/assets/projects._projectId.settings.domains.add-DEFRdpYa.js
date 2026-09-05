import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.settings.domains.add-CVpBpl7w.js");
var searchSchema = z.object({ domain: z.string().optional() });
const Route = createFileRoute("/_public/projects/$projectId/settings/domains/add")({
	head: () => ({ meta: [{ title: pageTitle("Add domain", "Settings") }] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
