import { f as ROWS_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Y as organizationsQueryOptions } from "./organizations-BKtnlNrj.js";
import { $ as listSearchSchema, dt as parseListSearch } from "./form-field-type-badge-C7qMzJo0.js";
import { m as domainRecordsQueryOptions, n as DNS_RECORDS_DEFAULT_SORT_ORDER, p as domainQueryOptions, t as DNS_RECORDS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./organizations._orgId.domains._domainId.index-CBeUXWve.js");
const Route = createFileRoute("/_public/organizations/$orgId/domains/$domainId/")({
	validateSearch: listSearchSchema,
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.domain?.domain ?? "Domain", "Domains") }] }),
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return void 0;
		const { domainId } = params;
		const { queryClient } = context;
		if (!domainId) return void 0;
		const { filterQueries, sort } = parseListSearch(routeSearch, {
			page: 1,
			limit: 25
		});
		const recordsOptions = domainRecordsQueryOptions(domainId, 0, 25, filterQueries, sort?.sortBy ?? "$createdAt", sort?.sortOrder ?? "asc");
		const [domain, organizations, records] = await Promise.all([
			queryClient.ensureQueryData(domainQueryOptions(domainId)),
			queryClient.ensureQueryData(organizationsQueryOptions()),
			queryClient.ensureQueryData(recordsOptions)
		]);
		return {
			domain,
			organizations,
			records
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
