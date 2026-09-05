import { tn as siteTemplateQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.sites.create.templates._template-LMdStond.js");
const Route = createFileRoute("/_public/projects/$projectId/sites/create/templates/$template")({
	head: () => ({ meta: [{ title: pageTitle("Create from template", "Sites") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, template } = params;
		const { queryClient } = context;
		if (projectId && template) {
			const templateId = decodeURIComponent(template);
			await queryClient.ensureQueryData(siteTemplateQueryOptions(projectId, templateId));
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
