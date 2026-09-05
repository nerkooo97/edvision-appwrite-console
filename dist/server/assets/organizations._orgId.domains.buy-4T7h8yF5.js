import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { D as organizationDomainsQueryOptions, i as DOMAINS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./organizations._orgId.domains.buy-BYG1GYC3.js");
const buyDomainSearchSchema = z.object({
	payment: z.enum(["purchase"]).optional(),
	invoiceId: z.string().optional(),
	domain: z.string().optional(),
	stage: z.enum(["checkout"]).optional()
});
const Route = createFileRoute("/_public/organizations/$orgId/domains/buy")({
	head: () => ({ meta: [{ title: pageTitle("Buy domain", "Domains") }] }),
	validateSearch: buyDomainSearchSchema,
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
