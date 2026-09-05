import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { i as getIntegrationMarkdownExport, r as getIntegration } from "./content-BNDqilSS.js";
import { t as getIntegrationDetailRouteMetaTags } from "./route-meta-Ddegy6aO.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./integrations._slug-DzC8T_An.js");
const Route = createFileRoute("/_marketing/integrations/$slug")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ params, request, next }) => {
		const slug = params.slug;
		if (!slug.endsWith(".md")) return next();
		const markdown = getIntegrationMarkdownExport(slug.slice(0, -3));
		if (!markdown) return new Response("Not found", { status: 404 });
		trackServerPageview(request);
		return new Response(markdown, { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
	} } },
	loader: async ({ context, params }) => {
		if (params.slug.endsWith(".md")) throw notFound();
		const integration = getIntegration(params.slug);
		if (!integration) throw notFound();
		return { integration };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.integration) return {};
		return {
			meta: getIntegrationDetailRouteMetaTags(loaderData.integration),
			links: [{
				rel: "alternate",
				type: "text/markdown",
				href: `${loaderData.integration.href}.md`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
