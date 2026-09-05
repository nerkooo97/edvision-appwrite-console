import { J as organizationsFullQueryOptions, X as paymentMethodsQueryOptions } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Rs as fetchCountries, zs as fetchLocale } from "./hooks-BONwG3Mt.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./account.payment-methods-DS1J_9PJ.js");
const Route = createFileRoute("/_public/account/payment-methods")({
	head: () => ({ meta: [{ title: pageTitle("Payment methods", "Account") }] }),
	beforeLoad: () => {
		if (!getActiveProfileFeatures().billing) throw redirect({
			to: "/account",
			replace: true
		});
	},
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		const [paymentMethods, organizations] = await Promise.all([queryClient.ensureQueryData(paymentMethodsQueryOptions()), queryClient.ensureQueryData(organizationsFullQueryOptions())]);
		await Promise.all([queryClient.prefetchQuery({
			queryKey: ["countries", "console"],
			queryFn: fetchCountries,
			staleTime: 300 * 1e3
		}), queryClient.prefetchQuery({
			queryKey: ["locale", "console"],
			queryFn: fetchLocale,
			staleTime: 300 * 1e3
		})]);
		return {
			paymentMethods,
			organizations
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
