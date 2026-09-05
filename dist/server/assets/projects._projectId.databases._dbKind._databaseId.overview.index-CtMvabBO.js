import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.overview.index-qO9TTPDm.js");
const Route = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/overview/")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
