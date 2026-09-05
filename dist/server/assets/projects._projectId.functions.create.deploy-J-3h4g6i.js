import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.functions.create.deploy-GYhyM3oC.js");
const Route = createFileRoute("/_public/projects/$projectId/functions/create/deploy")({
	head: () => ({ meta: [{ title: pageTitle("Deploy from URL", "Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
