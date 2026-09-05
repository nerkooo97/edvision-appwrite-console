import { $o as messageQueryOptions, rs as prefetchMessageDetailData } from "./hooks-BONwG3Mt.js";
import { n as pageTitle, r as trimForPageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.messaging._messageId.settings-CZ2TtebU.js");
const Route = createFileRoute("/_public/projects/$projectId/messaging/$messageId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.messageTitle ?? "Message", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, messageId } = params;
		const { queryClient } = context;
		if (projectId && messageId) {
			await prefetchMessageDetailData(queryClient, projectId, messageId);
			const message = queryClient.getQueryData(messageQueryOptions(projectId, messageId).queryKey);
			return {
				messageTitle: message?.providerType === "email" && message.data?.subject ? trimForPageTitle(String(message.data.subject)) : message?.providerType === "sms" && message.data?.content ? String(message.data.content).slice(0, 80) : message?.providerType === "push" && message.data?.title ? String(message.data.title) : void 0,
				message
			};
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
