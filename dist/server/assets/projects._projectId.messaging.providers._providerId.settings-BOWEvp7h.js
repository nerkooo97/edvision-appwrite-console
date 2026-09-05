import { is as providerQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.messaging.providers._providerId.settings-ZS6pZU9b.js");
const Route = createFileRoute("/_public/projects/$projectId/messaging/providers/$providerId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.provider?.name ?? "Provider", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { provider: void 0 };
		const { projectId, providerId } = params;
		const { queryClient } = context;
		if (!projectId || !providerId) return { provider: void 0 };
		const providerOpts = providerQueryOptions(projectId, providerId);
		await queryClient.ensureQueryData(providerOpts);
		return { provider: queryClient.getQueryData(providerOpts.queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
