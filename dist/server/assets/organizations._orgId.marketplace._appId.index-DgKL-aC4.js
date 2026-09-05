import { xu as organizationAppQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./organizations._orgId.marketplace._appId.index-C9BpnRwc.js");
const Route = createFileRoute("/_public/organizations/$orgId/marketplace/$appId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.app?.name ?? "App", "Marketplace") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { orgId, appId } = params;
		const { queryClient } = context;
		if (!orgId || !appId) return void 0;
		const app = await queryClient.fetchQuery(organizationAppQueryOptions(appId));
		if (app.teamId === orgId) throw redirect({
			to: "/organizations/$orgId/apps/$appId",
			params: {
				orgId,
				appId
			},
			replace: true
		});
		return { app };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
