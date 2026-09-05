import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { _ as getThreads, c as getThreadsIndexPageSchema, n as getThreadsIndexRouteMetaTags } from "./route-meta-C-NVlcqg.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
const threadsSearchSchema = z.object({
	q: z.string().optional(),
	tags: z.string().optional()
});
function parseThreadsTags(tagsParam) {
	if (!tagsParam?.trim()) return [];
	return tagsParam.split(",").map((tag) => tag.trim()).filter(Boolean);
}
function buildThreadsRouteSearch(input) {
	const q = input.q?.trim();
	const tags = input.tags?.filter(Boolean) ?? [];
	return {
		...q ? { q } : {},
		...tags.length > 0 ? { tags: tags.join(",") } : {}
	};
}
function toggleThreadsTag(selectedTags, tag) {
	if (selectedTags.includes(tag)) return selectedTags.filter((item) => item !== tag);
	return [...selectedTags, tag];
}
var $$splitComponentImporter = () => import("./threads.index-DLBxNbuq.js");
const Route = createFileRoute("/_marketing/threads/")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	validateSearch: threadsSearchSchema,
	loader: async ({ context, location }) => {
		const search = threadsSearchSchema.parse(location.search);
		const tags = parseThreadsTags(search.tags);
		const q = search.q?.trim() || void 0;
		return {
			...await getThreads({
				q,
				tags,
				allTags: true
			}),
			q: q ?? "",
			tags
		};
	},
	head: () => ({
		meta: getThreadsIndexRouteMetaTags(),
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(getThreadsIndexPageSchema())
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { buildThreadsRouteSearch as n, toggleThreadsTag as r, Route as t };
