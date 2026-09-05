import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { a as getThreadsAuthorPageSchema, d as getAuthor, f as getAuthorThreads, o as getThreadsBreadcrumbSchema, s as getThreadsCanonicalUrl, t as getThreadsAuthorRouteMetaTags } from "./route-meta-C-NVlcqg.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./threads.authors._authorId-BTrK8fkR.js");
const Route = createFileRoute("/_marketing/threads/authors/$authorId")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	loader: async ({ context, params }) => {
		let author;
		try {
			author = await getAuthor(params.authorId);
		} catch {
			throw notFound();
		}
		let threads = [];
		let total = 0;
		try {
			({threads, total} = await getAuthorThreads(params.authorId));
		} catch {}
		const canonicalUrl = getThreadsCanonicalUrl(`/threads/authors/${params.authorId}`);
		return {
			author,
			threads,
			total,
			canonicalUrl
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData?.author) return {};
		const { author, canonicalUrl } = loaderData;
		return {
			meta: getThreadsAuthorRouteMetaTags(author, canonicalUrl),
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(getThreadsAuthorPageSchema(author, canonicalUrl))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(getThreadsBreadcrumbSchema([{
					name: "Threads",
					path: "/threads"
				}, {
					name: author.display_name,
					path: `/threads/authors/${author.discord_id}`
				}]))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
