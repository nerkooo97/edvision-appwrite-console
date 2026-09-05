import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk, h as fetchConsoleAccount } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ct as resolvePostAuthRedirect, Nt as resolvePostAuthOrganizationId, St as requiresConsoleEmailVerification, g as isConsoleMfaRequiredError, w as refreshConsoleAccountAfterAuth, wt as toRedirectNavigateOptions, xt as prefetchPostAuthDestination, y as navigateToConsoleMfaAfterSession } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./DebugMode-DFSPYy81.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./label-D8nNLJBa.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { n as setLastLoginMethod } from "./auth-storage-DvcI7wFF.js";
import "./card-BZWeW6wv.js";
import "./form-DhO3ifW6.js";
import { t as SignIn } from "./SignIn-D_lgvQaK.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { AppwriteException, OAuthProvider } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function SignInPage() {
	const t = useT();
	const search = useSearch({ from: "/_auth/sign-in" });
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [isGitHubLoading, setIsGitHubLoading] = useState(false);
	const [isOpeningMfa, setIsOpeningMfa] = useState(false);
	const handleGitHubLogin = async () => {
		setIsGitHubLoading(true);
		try {
			const resolvedRedirect = resolvePostAuthRedirect(search.redirect);
			const successUrl = resolvedRedirect ? `${window.location.origin}${resolvedRedirect}` : `${window.location.origin}/`;
			const failureUrl = `${window.location.origin}/sign-in${search.redirect ? `?redirect=${encodeURIComponent(search.redirect)}` : ""}`;
			setLastLoginMethod("github");
			const url = await sdk.forConsole.account.createOAuth2Session({
				provider: OAuthProvider.Github,
				success: successUrl,
				failure: failureUrl
			});
			if (typeof url === "string") window.location.href = url;
		} catch (error) {
			setIsGitHubLoading(false);
			toast.error(getErrorMessage(error, t("Failed to initiate GitHub login")));
			console.error("GitHub OAuth error:", error);
		}
	};
	const signInMutation = useMutation({
		mutationFn: async (data) => {
			try {
				await sdk.forConsole.account.createEmailPasswordSession({
					email: data.email,
					password: data.password
				});
				await fetchConsoleAccount({ force: true });
			} catch (error) {
				if (error instanceof AppwriteException && error.type === "user_more_factors_required") throw {
					...error,
					isMfaRequired: true
				};
				throw error;
			}
		},
		onSuccess: async () => {
			setLastLoginMethod("email");
			try {
				const account = await refreshConsoleAccountAfterAuth(queryClient);
				if (requiresConsoleEmailVerification(account)) {
					navigate({
						to: "/verify-email",
						search: search.redirect ? { redirect: search.redirect } : void 0
					});
					return;
				}
				await prefetchPostAuthDestination(queryClient, account, search.redirect);
				await router.invalidate();
				const targetRedirect = resolvePostAuthRedirect(search.redirect);
				if (targetRedirect) navigate(toRedirectNavigateOptions(targetRedirect));
				else navigate({
					to: "/organizations/$orgId",
					params: { orgId: await resolvePostAuthOrganizationId(account) },
					replace: true
				});
			} catch (error) {
				console.error("Post sign-in navigation error:", error);
				toast.error(getErrorMessage(error, t("Signed in but could not open the console")));
			}
		},
		onError: async (error) => {
			if (typeof error === "object" && error !== null && "isMfaRequired" in error && error.isMfaRequired === true || isConsoleMfaRequiredError(error)) {
				setIsOpeningMfa(true);
				try {
					await navigateToConsoleMfaAfterSession(queryClient, navigate, search.redirect);
				} catch (navigationError) {
					setIsOpeningMfa(false);
					toast.error(getErrorMessage(navigationError, t("Could not open MFA verification")));
				}
				return;
			}
			toast.error(getErrorMessage(error, t("Failed to sign in")));
			console.error("Sign in error:", error);
		}
	});
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(SignIn, {
					mode: "sign-in",
					onSubmit: (data) => signInMutation.mutate(data),
					onGitHubLogin: handleGitHubLogin,
					isLoading: signInMutation.isPending || isOpeningMfa,
					isGitHubLoading,
					redirect: search.redirect
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						t("By clicking continue, you agree to our"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-neutral",
							children: t("Terms of Service")
						}),
						" ",
						t("and"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-neutral",
							children: t("Privacy Policy")
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 md:mt-16 flex justify-center",
					children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
				})
			]
		})
	});
}
export { SignInPage as component };
