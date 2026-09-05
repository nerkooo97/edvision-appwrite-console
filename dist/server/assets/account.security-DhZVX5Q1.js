import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { i as accountIdentitiesQueryOptions, v as mfaFactorsQueryOptions } from "./auth-BPuxYQAc.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.security-Bsec3EWb.js");
const Route = createFileRoute("/_public/account/security")({
	head: () => ({ meta: [{ title: pageTitle("Security", "Account") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		const features = getActiveProfileFeatures();
		const [identities, mfaFactors] = await Promise.all([features.accountIdentities ? queryClient.ensureQueryData(accountIdentitiesQueryOptions()) : Promise.resolve(void 0), features.accountMfa ? queryClient.ensureQueryData(mfaFactorsQueryOptions()) : Promise.resolve(void 0)]);
		return {
			identities,
			mfaFactors
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
