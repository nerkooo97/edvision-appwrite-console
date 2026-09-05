import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { r as getBlogCategory, t as getAllBlogAuthors, u as getPostsForCategory } from "./content-BLzUgV00.js";
import { n as getBlogCategoryRouteMetaTags } from "./route-meta-C9mfJlBj.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./blog.category._category-ClP3pBI-.js");
const Route = createFileRoute("/_marketing/blog/category/$category")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	loader: async ({ context, params }) => {
		const category = getBlogCategory(params.category);
		if (!category) throw notFound();
		return {
			category,
			posts: getPostsForCategory(params.category),
			authors: getAllBlogAuthors()
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData?.category) return {};
		return { meta: getBlogCategoryRouteMetaTags(loaderData.category, { siteOrigin: getRequestSiteOrigin() }) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
