import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { o as getBlogPostsPage } from "./content-BLzUgV00.js";
import { r as getBlogIndexRouteMetaTags } from "./route-meta-C9mfJlBj.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./blog._page-BAxO8Rl9.js");
var blogSearchSchema = z.object({
	search: z.string().optional(),
	category: z.string().optional()
});
const Route = createFileRoute("/_marketing/blog/$page")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	validateSearch: blogSearchSchema,
	loader: async ({ context, params, location }) => {
		const search = blogSearchSchema.parse(location.search);
		const pageNumber = Number.parseInt(params.page, 10);
		if (!Number.isFinite(pageNumber) || pageNumber < 1) throw redirect({
			to: "/blog",
			replace: true
		});
		if (pageNumber === 1) throw redirect({
			to: "/blog",
			search,
			replace: true
		});
		return getBlogPostsPage({
			page: pageNumber,
			search: search.search,
			category: search.category
		});
	},
	head: () => ({ meta: getBlogIndexRouteMetaTags({ siteOrigin: getRequestSiteOrigin() }) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
