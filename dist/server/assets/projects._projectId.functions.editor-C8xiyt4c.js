import { s as loadDebugOverrides } from "./i18n-Db4baE06.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.functions.editor-tkyEzCUE.js");
const Route = createFileRoute("/_public/projects/$projectId/functions/editor")({
	beforeLoad: ({ params }) => {
		if (typeof window === "undefined") return;
		if (!loadDebugOverrides().showFunctionsLocalEditor) throw redirect({
			to: "/projects/$projectId/functions",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("Editor", "Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
