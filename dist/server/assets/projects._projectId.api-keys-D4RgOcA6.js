import { T as projectQueryOptions, b as mapApiKeysFromResponse, s as apiKeysQueryOptions } from "./projects-BaTJenfQ.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.api-keys-L482xwGz.js");
const Route = createFileRoute("/_public/projects/$projectId/api-keys")({
	head: () => ({ meta: [{ title: pageTitle("API keys") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		const [project, apiKeysResponse] = await Promise.all([queryClient.ensureQueryData(projectQueryOptions(projectId)), queryClient.ensureQueryData(apiKeysQueryOptions(projectId)).catch(() => null)]);
		return {
			project,
			apiKeys: mapApiKeysFromResponse(apiKeysResponse),
			apiKeysRaw: apiKeysResponse
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
