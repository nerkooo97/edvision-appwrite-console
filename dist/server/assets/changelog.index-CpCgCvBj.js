import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { r as getChangelogEntriesPage } from "./content-NlXhGy_g.js";
import { n as getMarketingPageMetaTags } from "./route-meta-CfD66bzz.js";
import { t as CHANGELOG_DEFAULT_DESCRIPTION } from "./seo-DoyhjBE_.js";
import { n as CHANGELOG_RSS_PATH } from "./rss-D80F0Df7.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./changelog.index-CyjH0jf0.js");
const Route = createFileRoute("/_marketing/changelog/")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({
		meta: getMarketingPageMetaTags({
			pageName: "Changelog",
			description: CHANGELOG_DEFAULT_DESCRIPTION,
			ogImageEyebrow: "Changelog"
		}),
		links: [{
			rel: "alternate",
			type: "application/rss+xml",
			title: "Appwrite Changelog",
			href: CHANGELOG_RSS_PATH
		}]
	}),
	loader: async ({ context }) => {
		return getChangelogEntriesPage(1);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
