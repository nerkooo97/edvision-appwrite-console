import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./_generationId-ARdoqioH.js");
const Route = createFileRoute("/generator/$generationId")({
	head: () => ({ meta: [
		{ title: pageTitle("Cover", "Generator") },
		{
			name: "description",
			content: "Internal cover generator for Appwrite marketing assets and Open Graph images."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
