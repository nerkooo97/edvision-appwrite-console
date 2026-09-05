import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { l as getPostsForAuthor, n as getBlogAuthor, t as getAllBlogAuthors } from "./content-BLzUgV00.js";
import { t as getBlogAuthorRouteMetaTags } from "./route-meta-C9mfJlBj.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./blog.author._author-BjvC5xWh.js");
const Route = createFileRoute("/_marketing/blog/author/$author")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	loader: async ({ context, params }) => {
		const author = getBlogAuthor(params.author);
		if (!author) throw notFound();
		return {
			author,
			posts: getPostsForAuthor(params.author),
			authors: getAllBlogAuthors()
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData?.author) return {};
		return { meta: getBlogAuthorRouteMetaTags(loaderData.author, { siteOrigin: getRequestSiteOrigin() }) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
