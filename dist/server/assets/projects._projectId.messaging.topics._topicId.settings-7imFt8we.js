import { os as topicQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { p as canAccessTopicSettings } from "./console-rbac-loader-DvaSNNjB.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.messaging.topics._topicId.settings-BZXDFox4.js");
const Route = createFileRoute("/_public/projects/$projectId/messaging/topics/$topicId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.topic?.name ?? "Topic", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, topicId } = params;
		const { queryClient } = context;
		if (!projectId || !topicId) return;
		if (!await canAccessTopicSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/messaging/topics/$topicId",
			params: {
				projectId,
				topicId
			},
			replace: true
		});
		const topicOpts = topicQueryOptions(projectId, topicId);
		await queryClient.ensureQueryData(topicOpts);
		return { topic: queryClient.getQueryData(topicOpts.queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
