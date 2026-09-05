import { Su as organizationAppSecretsQueryOptions, xu as organizationAppQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./organizations._orgId.apps._appId-C9U-Ec49.js");
var $$splitNotFoundComponentImporter = () => import("./organizations._orgId.apps._appId-T7kzJuWd.js");
const Route = createFileRoute("/_public/organizations/$orgId/apps/$appId")({
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.app?.name ?? "App", "Apps") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { orgId, appId } = params;
		const { queryClient } = context;
		if (!orgId || !appId) return void 0;
		const app = await queryClient.fetchQuery(organizationAppQueryOptions(appId));
		if (app.teamId !== orgId) throw redirect({
			to: "/organizations/$orgId/marketplace/$appId",
			params: {
				orgId,
				appId
			},
			replace: true
		});
		if (app.type !== "public") await queryClient.ensureQueryData(organizationAppSecretsQueryOptions(appId)).catch(() => void 0);
		return { app };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
