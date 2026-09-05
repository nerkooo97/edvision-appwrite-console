import { vc as projectSmtpStatusQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.auth-6cEaplvo.js");
const Route = createFileRoute("/_public/projects/$projectId/auth")({
	head: () => ({ meta: [{ title: pageTitle("Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) await Promise.all([queryClient.ensureQueryData(projectQueryOptions(projectId)), queryClient.ensureQueryData(projectSmtpStatusQueryOptions(projectId))]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
