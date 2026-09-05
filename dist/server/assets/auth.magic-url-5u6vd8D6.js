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
import { w as refreshConsoleAccountAfterAuth } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
function getMagicUrlParamsFromUrl() {
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
function MagicUrlPage() {
	const t = useT();
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [errorMessage, setErrorMessage] = useState(null);
	const confirmMutation = useMutation({
		mutationFn: async (params) => {
			await sdk.forConsole.account.createSession({
				userId: params.userId,
				secret: params.secret
			});
		},
		onSuccess: async () => {
			try {
				await refreshConsoleAccountAfterAuth(queryClient);
				await router.invalidate();
			} catch {}
			navigate({
				to: "/",
				replace: true
			});
		},
		onError: (error) => {
			setErrorMessage(error instanceof AppwriteException ? error.message : t("The magic URL is invalid or has expired."));
		}
	});
	const hasTriggeredConfirm = useRef(false);
	useEffect(() => {
		if (hasTriggeredConfirm.current) return;
		hasTriggeredConfirm.current = true;
		const params = getMagicUrlParamsFromUrl();
		if (params) confirmMutation.mutate(params);
		else setErrorMessage(t("The magic URL is missing required parameters."));
	}, [confirmMutation.mutate, t]);
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [/* @__PURE__ */ jsx(Card, {
				className: "overflow-hidden py-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "space-y-6",
							children: errorMessage ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "text-2xl font-semibold tracking-tight",
									children: t("Unable to sign you in")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: errorMessage
								})]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/sign-in",
								children: /* @__PURE__ */ jsx(Button, {
									className: "w-full",
									children: t("Go to sign in")
								})
							})] }) : /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "text-2xl font-semibold tracking-tight",
									children: t("Signing you in")
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-sm text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), t("Please wait while we confirm your magic URL.")]
								})]
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "hidden bg-background md:block min-h-[600px]",
						children: /* @__PURE__ */ jsx("img", {
							alt: "Appwrite console illustration",
							className: "h-full w-full object-cover",
							height: "600",
							src: "/cover.avif",
							width: "600"
						})
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 md:mt-16 flex justify-center",
				children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
			})]
		})
	});
}
export { MagicUrlPage as component };
