import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { o as getBlogPostsPage } from "./content-BLzUgV00.js";
import { t as BLOG_RSS_PATH } from "./rss-D80F0Df7.js";
import { r as getBlogIndexRouteMetaTags } from "./route-meta-C9mfJlBj.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./blog.index-59mwg77Y.js");
var blogSearchSchema = z.object({
	search: z.string().optional(),
	category: z.string().optional()
});
const Route = createFileRoute("/_marketing/blog/")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	validateSearch: blogSearchSchema,
	loader: async ({ context, location }) => {
		const search = blogSearchSchema.parse(location.search);
		return getBlogPostsPage({
			page: 1,
			search: search.search,
			category: search.category
		});
	},
	head: () => ({
		meta: getBlogIndexRouteMetaTags({ siteOrigin: getRequestSiteOrigin() }),
		links: [{
			rel: "alternate",
			type: "application/rss+xml",
			title: "Appwrite Blog",
			href: BLOG_RSS_PATH
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
