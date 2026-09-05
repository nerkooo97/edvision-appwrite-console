import { j as fetchOrganizations } from "./organizations-BKtnlNrj.js";
import { _ as fetchDomain } from "./domains-Bfw8HsXF.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { o as canAccessOrganizationDomains } from "./console-rbac-loader-DvaSNNjB.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./organizations._orgId.domains._domainId.settings-ByOxAi0U.js");
var STALE_TIME = 30 * 1e3;
const Route = createFileRoute("/_public/organizations/$orgId/domains/$domainId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.domain?.domain ?? "Domain", "Domains") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId, domainId } = params;
		const { queryClient } = context;
		if (!orgId || !domainId) return;
		if (!await canAccessOrganizationDomains(queryClient, orgId)) throw redirect({
			to: "/organizations/$orgId/domains/$domainId",
			params: {
				orgId,
				domainId
			},
			replace: true
		});
		await Promise.all([queryClient.fetchQuery({
			queryKey: ["domain", domainId],
			queryFn: () => fetchDomain(domainId),
			staleTime: STALE_TIME
		}), queryClient.fetchQuery({
			queryKey: ["organizations", "console"],
			queryFn: fetchOrganizations,
			staleTime: STALE_TIME
		})]);
		return { domain: queryClient.getQueryData(["domain", domainId]) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
