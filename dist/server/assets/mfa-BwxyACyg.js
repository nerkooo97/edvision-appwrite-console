import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { Ct as resolvePostAuthRedirect, Nt as resolvePostAuthOrganizationId, St as requiresConsoleEmailVerification, v as mfaFactorsQueryOptions, w as refreshConsoleAccountAfterAuth, wt as toRedirectNavigateOptions, xt as prefetchPostAuthDestination } from "./auth-BPuxYQAc.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, isRedirect, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { AppwriteException } from "@appwrite.io/console";
import { z } from "zod";
var $$splitComponentImporter = () => import("./mfa-C7cxzo0y.js");
function isValidRelativeRedirect(url) {
	try {
		return url.startsWith("/") && !url.includes("://");
	} catch {
		return false;
	}
}
var searchSchema = z.object({ redirect: z.string().optional().refine((val) => !val || isValidRelativeRedirect(val), { message: "Redirect must be a relative URL" }) });
const Route = createFileRoute("/_auth/mfa")({
	validateSearch: searchSchema,
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return void 0;
		const { queryClient } = context;
		const redirectSearch = typeof location.search === "object" && location.search !== null && "redirect" in location.search && typeof location.search.redirect === "string" ? location.search.redirect : void 0;
		try {
			await sdk.forConsole.account.get();
			const account = await refreshConsoleAccountAfterAuth(queryClient);
			if (requiresConsoleEmailVerification(account)) throw redirect({
				to: "/verify-email",
				search: redirectSearch ? { redirect: redirectSearch } : void 0,
				replace: true
			});
			await prefetchPostAuthDestination(queryClient, account, redirectSearch);
			const targetRedirect = resolvePostAuthRedirect(redirectSearch);
			if (targetRedirect) throw redirect({
				...toRedirectNavigateOptions(targetRedirect),
				replace: true
			});
			throw redirect({
				to: "/organizations/$orgId",
				params: { orgId: await resolvePostAuthOrganizationId(account) },
				replace: true
			});
		} catch (error) {
			if (isRedirect(error)) throw error;
			if (!(error instanceof AppwriteException)) throw redirect({
				to: "/sign-in",
				replace: true
			});
			if (error.type === "user_more_factors_required") return { factors: {
				...await queryClient.ensureQueryData(mfaFactorsQueryOptions()),
				recoveryCode: true
			} };
			if (error.code === 401) throw redirect({
				to: "/sign-in",
				search: redirectSearch && isValidRelativeRedirect(redirectSearch) ? { redirect: redirectSearch } : void 0,
				replace: true
			});
			throw redirect({
				to: "/sign-in",
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: pageTitle("Two-factor authentication") }] })
});
export { Route as t };
