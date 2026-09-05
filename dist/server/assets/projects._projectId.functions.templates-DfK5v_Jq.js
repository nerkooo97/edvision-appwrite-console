import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { H as organizationPlanQueryOptions } from "./organizations-BKtnlNrj.js";
import { m as fetchProject } from "./projects-BaTJenfQ.js";
import { sr as functionTemplatesPageQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.functions.templates-BSrGWKHF.js");
function parseCsvParam(s) {
	if (!s?.trim()) return [];
	return s.split(",").map((x) => x.trim()).filter(Boolean);
}
function parseTemplatesLimit(value, fallback) {
	const n = Number(value);
	if (!Number.isFinite(n) || n < 1) return fallback;
	return Math.min(Math.max(1, Math.floor(n)), 100);
}
function parseTemplatesOffset(value) {
	const n = Number(value);
	if (!Number.isFinite(n) || n < 0) return 0;
	return Math.min(Math.floor(n), 1e9);
}
var templatesSearchSchema = z.object({
	search: z.string().optional().catch(void 0),
	page: z.coerce.number().int().min(1).optional().catch(void 0),
	offset: z.coerce.number().int().min(0).optional().catch(void 0),
	limit: z.coerce.number().int().min(1).max(100).optional().catch(void 0),
	uc: z.string().optional().catch(void 0),
	rt: z.string().optional().catch(void 0)
});
const Route = createFileRoute("/_public/projects/$projectId/functions/templates")({
	head: () => ({ meta: [{ title: pageTitle("Templates", "Functions") }] }),
	validateSearch: templatesSearchSchema,
	loaderDeps: ({ search }) => search,
	loader: async ({ params, context, deps: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const nameSearch = (routeSearch.search ?? "").trim();
		const projectData = await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
		const prefetch = [];
		if (!nameSearch) {
			const limit = parseTemplatesLimit(routeSearch.limit, 12);
			let offset = parseTemplatesOffset(routeSearch.offset);
			if (routeSearch.offset == null && routeSearch.page != null) {
				const p = routeSearch.page;
				if (Number.isFinite(p) && p >= 1) offset = (Math.floor(p) - 1) * limit;
			}
			const runtimes = parseCsvParam(routeSearch.rt);
			const useCases = parseCsvParam(routeSearch.uc);
			prefetch.push(queryClient.ensureQueryData(functionTemplatesPageQueryOptions(projectId, offset, limit, runtimes, useCases)));
			if (offset !== 0 || runtimes.length > 0 || useCases.length > 0 || limit !== 12) prefetch.push(queryClient.ensureQueryData(functionTemplatesPageQueryOptions(projectId, 0, 12, [], [])));
		}
		await Promise.all([...prefetch, projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
