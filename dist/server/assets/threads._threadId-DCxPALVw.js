import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { g as getThreadMessages, h as getThread, i as getDiscussionForumPageSchema, m as getRelatedThreads, o as getThreadsBreadcrumbSchema, r as getThreadsThreadRouteMetaTags, s as getThreadsCanonicalUrl, y as resolveThreadMentionLookup } from "./route-meta-C-NVlcqg.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./threads._threadId-FaVX9UCW.js");
const Route = createFileRoute("/_marketing/threads/$threadId")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	loader: async ({ context, params }) => {
		let thread;
		try {
			thread = await getThread(params.threadId);
		} catch {
			throw notFound();
		}
		const [messages, related] = await Promise.all([getThreadMessages(params.threadId), getRelatedThreads(thread)]);
		const mentionLookup = await resolveThreadMentionLookup(messages.map((message) => message.message), messages);
		const canonicalUrl = getThreadsCanonicalUrl(`/threads/${params.threadId}`);
		return {
			thread,
			messages,
			related,
			canonicalUrl,
			mentionLookup
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData?.thread) return {};
		const { thread, messages, canonicalUrl } = loaderData;
		return {
			meta: getThreadsThreadRouteMetaTags(thread, canonicalUrl),
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(getDiscussionForumPageSchema({
					canonicalUrl,
					thread,
					messages
				}))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(getThreadsBreadcrumbSchema([{
					name: "Threads",
					path: "/threads"
				}, {
					name: thread.title,
					path: `/threads/${thread.discord_id}`
				}]))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
