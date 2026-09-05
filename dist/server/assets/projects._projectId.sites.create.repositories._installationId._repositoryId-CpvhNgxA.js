import { ws as repositoryBranchesQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.sites.create.repositories._installationId._repositoryId-CDMGRUd6.js");
const Route = createFileRoute("/_public/projects/$projectId/sites/create/repositories/$installationId/$repositoryId")({
	head: () => ({ meta: [{ title: pageTitle("Create from repository", "Sites") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, installationId, repositoryId } = params;
		const { queryClient } = context;
		if (projectId && installationId && repositoryId) await queryClient.ensureQueryData(repositoryBranchesQueryOptions(projectId, installationId, repositoryId));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
