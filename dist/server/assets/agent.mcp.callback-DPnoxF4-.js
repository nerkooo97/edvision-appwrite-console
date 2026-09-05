import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./agent.mcp.callback-DZZXdpOx.js");
const Route = createFileRoute("/_auth/agent/mcp/callback")({
	ssr: false,
	validateSearch: (search) => search,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: pageTitle("Connecting MCP") }] })
});
export { Route as t };
