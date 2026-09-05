import { c as DOMAINS_DEFAULT_PAGE_SIZE, o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { Or as SpecificationType, ar as functionSpecificationsQueryOptions, dr as projectRuntimesQueryOptions, nr as functionDeploymentsQueryOptions, rr as functionDomainsQueryOptions, tr as functionDeploymentQueryOptions, ur as projectFunctionQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.functions._functionId.index-Mp6s6-9y.js");
const Route = createFileRoute("/_public/projects/$projectId/functions/$functionId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const { page, filterQueries } = parseListSearch(routeSearch, {
			page: 1,
			limit: 10
		});
		const pageIndex = page - 1;
		const hasFilterQuery = !!filterQueries?.length;
		const func = await queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId));
		const criticalPromises = [
			hasFilterQuery ? Promise.resolve(void 0) : queryClient.ensureQueryData(functionDeploymentsQueryOptions(projectId, functionId, pageIndex, 10)),
			queryClient.ensureQueryData(functionDomainsQueryOptions(projectId, functionId, 0, 25, "")),
			queryClient.ensureQueryData(projectRuntimesQueryOptions(projectId)),
			queryClient.ensureQueryData(functionSpecificationsQueryOptions(projectId, SpecificationType.Runtimes))
		];
		if (func?.deploymentId) criticalPromises.push(queryClient.ensureQueryData(functionDeploymentQueryOptions(projectId, functionId, func.deploymentId)));
		await Promise.all(criticalPromises);
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
