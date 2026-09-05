import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { n as getMarketingPageMetaTags } from "./route-meta-CfD66bzz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
const domainsHero = {
	title: "Register domains where you build",
	description: "Search 160+ TLDs with live pricing and private WHOIS. Manage DNS, connect Sites, Functions, or custom API domains, and provision TLS without leaving Appwrite."
};
var $$splitComponentImporter = () => import("./domains-CgNzlpNc.js");
var domainsSearchSchema = z.object({ q: z.string().optional() });
const Route = createFileRoute("/_marketing/domains")({
	staticData: {
		...MARKETING_PAGE_ROUTE_STATIC_DATA,
		showFooter: false
	},
	ssr: true,
	validateSearch: domainsSearchSchema,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Domains",
		description: domainsHero.description
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { domainsHero as n, Route as t };
