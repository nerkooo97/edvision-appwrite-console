import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.functions.create.repository._repository-D4VnYqnD.js");
const Route = createFileRoute("/_public/projects/$projectId/functions/create/repository/$repository")({
	head: () => ({ meta: [{ title: pageTitle("Create from repository", "Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
