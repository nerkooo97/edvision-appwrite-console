import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Ct as resolvePostAuthRedirect, Nt as resolvePostAuthOrganizationId, w as refreshConsoleAccountAfterAuth, wt as toRedirectNavigateOptions, xt as prefetchPostAuthDestination } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./button-Bnm2QhOm.js";
import "./context-menu-D55xedo-.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import "./card-BZWeW6wv.js";
import { t as VerifyEmail } from "./VerifyEmail-Bcf5Pxwg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function getVerificationParamsFromUrl() {
	if (typeof window === "undefined") return null;
	const params = new URLSearchParams(window.location.search);
	const userId = params.get("userId");
	const secret = params.get("secret");
	if (userId && secret) return {
		userId,
		secret
	};
	return null;
}
function VerifyEmailPage() {
	const t = useT();
	const search = useSearch({ from: "/_auth/verify-email" });
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const confirmMutation = useMutation({
		mutationFn: async (params) => {
			await sdk.forConsole.account.updateEmailVerification({
				userId: params.userId,
				secret: params.secret
			});
		},
		onSuccess: async () => {
			toast.success(t("Email verified successfully"));
			try {
				const account = await refreshConsoleAccountAfterAuth(queryClient);
				await prefetchPostAuthDestination(queryClient, account, search.redirect);
				await router.invalidate();
				const targetRedirect = resolvePostAuthRedirect(search.redirect);
				if (targetRedirect) {
					navigate(toRedirectNavigateOptions(targetRedirect));
					return;
				}
				navigate({
					to: "/organizations/$orgId",
					params: { orgId: await resolvePostAuthOrganizationId(account) },
					replace: true
				});
			} catch {
				navigate({ to: "/" });
			}
		},
		onError: (error) => {
			const message = error instanceof AppwriteException ? error.message : t("Verification link is invalid or has expired.");
			toast.error(message);
		}
	});
	const resendMutation = useMutation({
		mutationFn: async () => {
			const url = `${typeof window !== "undefined" ? window.location.origin : ""}/verify-email${search.redirect ? `?redirect=${encodeURIComponent(search.redirect)}` : ""}`;
			return await sdk.forConsole.account.createEmailVerification({ url });
		},
		onSuccess: () => {
			toast.success(t("Verification email sent"));
		},
		onError: (error) => {
			const message = error instanceof AppwriteException ? error.message : t("Failed to send verification email");
			toast.error(message);
		}
	});
	const hasTriggeredConfirm = useRef(false);
	useEffect(() => {
		const params = getVerificationParamsFromUrl();
		if (params && !hasTriggeredConfirm.current) {
			hasTriggeredConfirm.current = true;
			confirmMutation.mutate(params);
		}
	}, []);
	const urlParams = typeof window !== "undefined" ? getVerificationParamsFromUrl() : null;
	if (Boolean(urlParams) && confirmMutation.isPending) return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(VerifyEmail, { status: "confirming" }),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						t("By continuing, you agree to our"),
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/terms",
							children: t("Terms of Service")
						}),
						" ",
						t("and"),
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/privacy",
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
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(VerifyEmail, {
					onResend: () => resendMutation.mutate(),
					isResendLoading: resendMutation.isPending,
					redirect: search.redirect
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						t("By continuing, you agree to our"),
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/terms",
							children: t("Terms of Service")
						}),
						" ",
						t("and"),
						" ",
						/* @__PURE__ */ jsx(MarketingSiteLink, {
							className: "link-neutral",
							href: "/privacy",
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
export { VerifyEmailPage as component };
