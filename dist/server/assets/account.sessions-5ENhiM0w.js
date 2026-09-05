import { a as accountSessionsQueryOptions } from "./auth-BPuxYQAc.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.sessions-CMwchEVt.js");
const Route = createFileRoute("/_public/account/sessions")({
	head: () => ({ meta: [{ title: pageTitle("Sessions", "Account") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		return await queryClient.ensureQueryData(accountSessionsQueryOptions());
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
