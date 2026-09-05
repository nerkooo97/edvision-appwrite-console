import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.analytics._websiteId-BFf8K4Y3.js");
const Route = createFileRoute("/_public/projects/$projectId/analytics/$websiteId")({
	head: () => ({ meta: [{ title: pageTitle("Website", "Analytics") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
