import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { m as fetchProject } from "./projects-BaTJenfQ.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { Dt as SITES_DEFAULT_SORT_ORDER, Et as SITES_DEFAULT_SORT_BY, in as sitesQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./projects._projectId.sites.index-BCUN1Yjj.js");
var DEFAULT_PAGE = 1;
const Route = createFileRoute("/_public/projects/$projectId/sites/")({
	head: () => ({ meta: [{ title: pageTitle("Sites") }] }),
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
		await Promise.all([queryClient.ensureQueryData(sitesQueryOptions(projectId, page - 1, limit, search ?? void 0, filterQueries, sortBy, sortOrder)), projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
