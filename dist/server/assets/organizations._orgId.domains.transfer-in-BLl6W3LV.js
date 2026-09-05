import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { D as organizationDomainsQueryOptions, i as DOMAINS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./organizations._orgId.domains.transfer-in-BnkDp227.js");
const transferInSearchSchema = z.object({
	payment: z.enum(["transfer_in"]).optional(),
	invoiceId: z.string().optional()
});
const Route = createFileRoute("/_public/organizations/$orgId/domains/transfer-in")({
	head: () => ({ meta: [{ title: pageTitle("Transfer domain in", "Domains") }] }),
	validateSearch: transferInSearchSchema,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		await Promise.all([queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)), queryClient.ensureQueryData(organizationDomainsQueryOptions(orgId, 0, 1, void 0, void 0, DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER))]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
