import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { os as topicQueryOptions, ss as topicSubscribersQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter$1 = () => import("./projects._projectId.messaging.topics._topicId-B0IQRoXc.js");
const Route$1 = createFileRoute("/_public/projects/$projectId/messaging/topics/$topicId")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.topic?.name ?? "Topic", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, topicId } = params;
		const { queryClient } = context;
		if (!projectId || !topicId) return;
		await queryClient.ensureQueryData(topicQueryOptions(projectId, topicId));
		return { topic: queryClient.getQueryData(topicQueryOptions(projectId, topicId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects._projectId.messaging.topics._topicId.index-B8TvvWJe.js");
const Route = createFileRoute("/_public/projects/$projectId/messaging/topics/$topicId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.topic?.name ?? "Topic", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, topicId } = params;
		const { queryClient } = context;
		if (projectId && topicId) {
			const subscribersOpts = topicSubscribersQueryOptions(projectId, topicId, 0, 10, "");
			await Promise.all([queryClient.ensureQueryData(topicQueryOptions(projectId, topicId)), queryClient.ensureQueryData(subscribersOpts)]);
			const topic = queryClient.getQueryData(topicQueryOptions(projectId, topicId).queryKey);
			const subscriberList = queryClient.getQueryData(subscribersOpts.queryKey);
			return {
				topic,
				initialSubscribers: subscriberList != null ? {
					subscribers: subscriberList.subscribers ?? [],
					total: subscriberList.total ?? 0
				} : void 0
			};
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route$1 as n, Route as t };
