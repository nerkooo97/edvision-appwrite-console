import { J as organizationsFullQueryOptions, r as billingAddressesQueryOptions } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Is as countriesQueryOptions } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.billing-addresses-xlcNLBjL.js");
const Route = createFileRoute("/_public/account/billing-addresses")({
	head: () => ({ meta: [{ title: pageTitle("Billing addresses", "Account") }] }),
	beforeLoad: () => {
		if (!getActiveProfileFeatures().billing) throw redirect({
			to: "/account",
			replace: true
		});
	},
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		const [addresses, organizations] = await Promise.all([queryClient.ensureQueryData(billingAddressesQueryOptions()), queryClient.ensureQueryData(organizationsFullQueryOptions())]);
		await queryClient.ensureQueryData(countriesQueryOptions());
		return {
			addresses,
			organizations
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
