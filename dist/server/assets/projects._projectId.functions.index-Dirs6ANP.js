import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { m as fetchProject } from "./projects-BaTJenfQ.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { Nn as FUNCTIONS_DEFAULT_SORT_BY, Pn as FUNCTIONS_DEFAULT_SORT_ORDER, lr as functionsQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.functions.index-lV5k0Zqr.js");
var DEFAULT_PAGE = 1;
const Route = createFileRoute("/_public/projects/$projectId/functions/")({
	head: () => ({ meta: [{ title: pageTitle("Functions") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const { search, page, limit, filterQueries, sort } = parseListSearch(routeSearch, {
			page: DEFAULT_PAGE,
			limit: 12
		});
		const sortBy = sort?.sortBy ?? "$createdAt";
		const sortOrder = sort?.sortOrder ?? "desc";
		const projectData = await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
		await Promise.all([queryClient.ensureQueryData(functionsQueryOptions(projectId, page - 1, limit, search ?? void 0, filterQueries, sortBy, sortOrder)), projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
