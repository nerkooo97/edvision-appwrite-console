import { Mt as useOrganizationPlan, fn as resolveOrganizationPlanDisplayLabel } from "./organizations-BKtnlNrj.js";
import { D as organizationDomainsQueryOptions, i as DOMAINS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import { useQuery } from "@tanstack/react-query";
function useOrganizationDomainsPlanLimit(orgId) {
	const { plan } = useOrganizationPlan(orgId);
	const { data } = useQuery(organizationDomainsQueryOptions(orgId, 0, 1, void 0, void 0, DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER));
	const currentCount = data?.total ?? 0;
	const limit = plan?.domains ?? 0;
	return {
		currentCount,
		limit,
		isAtLimit: limit > 0 && currentCount >= limit,
		plan,
		planName: resolveOrganizationPlanDisplayLabel({
			planName: plan?.name ?? null,
			planId: plan?.$id
		})
	};
}
export { useOrganizationDomainsPlanLimit as t };
