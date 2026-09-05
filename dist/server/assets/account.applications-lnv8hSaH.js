import { t as accountConnectedAppsQueryOptions } from "./account-applications-Bo8bAeE0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.applications-DrgV3qBh.js");
const Route = createFileRoute("/_public/account/applications")({
	head: () => ({ meta: [{ title: pageTitle("Applications", "Account") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		return await queryClient.ensureQueryData(accountConnectedAppsQueryOptions());
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
