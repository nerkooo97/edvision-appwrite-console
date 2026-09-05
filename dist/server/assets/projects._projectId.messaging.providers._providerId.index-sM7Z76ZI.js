import { is as providerQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.messaging.providers._providerId.index-ihbxEHT6.js");
const Route = createFileRoute("/_public/projects/$projectId/messaging/providers/$providerId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.provider?.name ?? "Provider", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, providerId } = params;
		const { queryClient } = context;
		if (projectId && providerId) {
			await queryClient.ensureQueryData(providerQueryOptions(projectId, providerId));
			return { provider: queryClient.getQueryData(providerQueryOptions(projectId, providerId).queryKey) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
