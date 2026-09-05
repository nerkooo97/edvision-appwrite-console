import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./_generationId-BS9bGK2u.js");
const Route = createFileRoute("/generator/diagrams/$generationId")({
	head: () => ({ meta: [
		{ title: pageTitle("Diagram", "Generator") },
		{
			name: "description",
			content: "Diagram generator for Appwrite marketing and documentation assets."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
