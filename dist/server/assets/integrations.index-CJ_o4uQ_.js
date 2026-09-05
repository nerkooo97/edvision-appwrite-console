import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { n as getFilteredIntegrationsCatalog } from "./content-BNDqilSS.js";
import { n as getIntegrationsIndexRouteMetaTags } from "./route-meta-Ddegy6aO.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./integrations.index-B686PJ5X.js");
var integrationsSearchSchema = z.object({
	search: z.string().optional(),
	category: z.string().optional(),
	platform: z.string().optional()
});
const Route = createFileRoute("/_marketing/integrations/")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	validateSearch: integrationsSearchSchema,
	loader: async ({ context, location }) => {
		return getFilteredIntegrationsCatalog(integrationsSearchSchema.parse(location.search));
	},
	head: () => ({ meta: getIntegrationsIndexRouteMetaTags() }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
