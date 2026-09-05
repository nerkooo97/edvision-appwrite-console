import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Ed as fileTokensQueryOptions, Id as STORAGE_PLACEHOLDER_BUCKET_ID, Td as fileQueryOptions, _d as FILES_DEFAULT_SORT_ORDER, bd as fetchBucket, gd as FILES_DEFAULT_SORT_BY, vd as bucketFilesQueryOptions } from "./hooks-BONwG3Mt.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./projects._projectId.storage._bucketId.index-DkH9RESB.js");
var DEFAULT_PAGE = 1;
var bucketFilesSearchSchema = listSearchSchema.extend({
	file: z.string().optional().catch(void 0),
	filePanel: z.enum([
		"overview",
		"permissions",
		"tokens",
		"security"
	]).optional().catch(void 0)
});
const Route = createFileRoute("/_public/projects/$projectId/storage/$bucketId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.bucket?.name ?? "Bucket", "Storage") }] }),
	validateSearch: bucketFilesSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, bucketId } = params;
		const { queryClient } = context;
		if (!projectId || !bucketId) return;
		if (bucketId === "-") return;
		const routeSearchParams = routeSearch ?? {};
		const fileId = routeSearchParams.file?.trim() || void 0;
		const { search, page, limit, filterQueries, sort } = parseListSearch(routeSearchParams, {
			page: DEFAULT_PAGE,
			limit: 25
		});
		const sortBy = sort?.sortBy ?? "$createdAt";
		const sortOrder = sort?.sortOrder ?? "desc";
		const [bucket] = await Promise.all([
			queryClient.fetchQuery({
				queryKey: [
					"bucket",
					"project",
					projectId,
					bucketId
				],
				queryFn: () => fetchBucket(projectId, bucketId),
				staleTime: 30 * 1e3
			}),
			queryClient.ensureQueryData(bucketFilesQueryOptions(projectId, bucketId, page - 1, limit, search ?? void 0, void 0, filterQueries, sortBy, sortOrder)),
			...fileId ? [queryClient.ensureQueryData(fileQueryOptions(projectId, bucketId, fileId)), queryClient.ensureQueryData(fileTokensQueryOptions(projectId, bucketId, fileId, 0))] : []
		]);
		return { bucket };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
