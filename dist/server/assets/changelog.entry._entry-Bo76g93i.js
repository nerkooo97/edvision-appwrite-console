import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { a as getChangelogMarkdownExport, i as getChangelogEntry } from "./content-NlXhGy_g.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { n as getChangelogEntryMetaTags, r as getChangelogEntrySchema } from "./seo-DoyhjBE_.js";
import { n as CHANGELOG_RSS_PATH } from "./rss-D80F0Df7.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./changelog.entry._entry-BXM33Og5.js");
const Route = createFileRoute("/_marketing/changelog/entry/$entry")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ params, request, next }) => {
		const slug = params.entry;
		if (!slug.endsWith(".md")) return next();
		const markdown = getChangelogMarkdownExport(slug.slice(0, -3));
		if (!markdown) return new Response("Not found", { status: 404 });
		trackServerPageview(request);
		return new Response(markdown, { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
	} } },
	loader: async ({ context, params }) => {
		if (params.entry.endsWith(".md")) throw notFound();
		const entry = getChangelogEntry(params.entry);
		if (!entry) throw notFound();
		return { entry };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.entry) return {};
		return {
			meta: getChangelogEntryMetaTags(loaderData.entry, { siteOrigin: getRequestSiteOrigin() }),
			links: [{
				rel: "alternate",
				type: "application/rss+xml",
				title: "Appwrite Changelog",
				href: CHANGELOG_RSS_PATH
			}, {
				rel: "alternate",
				type: "text/markdown",
				href: `${loaderData.entry.href}.md`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(getChangelogEntrySchema(loaderData.entry))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
