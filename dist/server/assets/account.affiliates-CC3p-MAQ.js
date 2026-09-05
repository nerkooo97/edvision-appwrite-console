import { o as DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { J as organizationsFullQueryOptions } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Is as countriesQueryOptions } from "./hooks-BONwG3Mt.js";
import { c as affiliateReferralsQueryOptions, l as affiliateRewardsQueryOptions, o as affiliateLinksQueryOptions, s as affiliatePendingRewardsQueryOptions, u as affiliateUsageQueryOptions, x as getDefaultAffiliateUsageQueryParams } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.affiliates-BgrnyOIO.js");
var AFFILIATE_LINK_LOOKUP_LIMIT = 100;
const Route = createFileRoute("/_public/account/affiliates")({
	head: () => ({ meta: [{ title: pageTitle("Affiliates", "Account") }] }),
	beforeLoad: () => {
		if (!getActiveProfileFeatures().affiliates) throw redirect({
			to: "/account",
			replace: true
		});
	},
	loader: async ({ context }) => {
		if (typeof window === "undefined") return void 0;
		const { queryClient } = context;
		const links = await queryClient.ensureQueryData(affiliateLinksQueryOptions(0, 10));
		if (links.total === 0) return {
			links,
			isProgramEmpty: true
		};
		const [referrals, rewards, pendingRewards, usage, organizations] = await Promise.all([
			queryClient.ensureQueryData(affiliateReferralsQueryOptions(0, 10)),
			queryClient.ensureQueryData(affiliateRewardsQueryOptions(0, 10)),
			queryClient.ensureQueryData(affiliatePendingRewardsQueryOptions()),
			queryClient.ensureQueryData(affiliateUsageQueryOptions(getDefaultAffiliateUsageQueryParams())),
			queryClient.ensureQueryData(organizationsFullQueryOptions())
		]);
		await queryClient.ensureQueryData(affiliateLinksQueryOptions(0, AFFILIATE_LINK_LOOKUP_LIMIT));
		queryClient.prefetchQuery(countriesQueryOptions()).catch(() => {});
		return {
			links,
			referrals,
			rewards,
			pendingRewards,
			usage,
			organizations,
			isProgramEmpty: false
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
