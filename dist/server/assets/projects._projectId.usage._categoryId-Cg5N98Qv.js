import { $ as listSearchSchema } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { n as getDefaultUsageCategoryId, o as isValidUsageCategory } from "./usage-nav-zbJs1J-k.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.usage._categoryId-Dfwz57ag.js");
const Route = createFileRoute("/_public/projects/$projectId/usage/$categoryId")({
	validateSearch: listSearchSchema,
	beforeLoad: ({ params }) => {
		const { projectId, categoryId } = params;
		if (!isValidUsageCategory(categoryId)) throw redirect({
			to: "/projects/$projectId/usage/$categoryId",
			params: {
				projectId,
				categoryId: getDefaultUsageCategoryId()
			},
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("Usage") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
