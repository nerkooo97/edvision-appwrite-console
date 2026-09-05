import { n as useT } from "./translate-DZcqveGn.js";
import { b as performConsoleSignOut } from "./auth-BPuxYQAc.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
function VerifyEmail({ onResend, isResendLoading, redirect: redirect$1, status = "pending", preview = false }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [isSigningOutToSignIn, setIsSigningOutToSignIn] = useState(false);
	const handleSignIn = () => {
		if (preview || isSigningOutToSignIn) return;
		setIsSigningOutToSignIn(true);
		performConsoleSignOut(queryClient, { redirect: redirect$1 || void 0 });
	};
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden py-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-semibold tracking-tight",
							children: status === "confirming" ? t("Verifying your email") : t("Verify your email")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: status === "confirming" ? t("Please wait while we confirm your email address.") : t("We've sent a verification link to your email address. Click the link to verify your account and access the console.")
						})]
					}), status === "pending" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [onResend && /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: "w-full",
							onClick: onResend,
							disabled: isResendLoading || isSigningOutToSignIn,
							children: isResendLoading ? t("Sending…") : t("Resend verification email")
						}), preview ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: onResend ? "ghost" : "default",
							className: "w-full",
							children: t("Sign out")
						}) : /* @__PURE__ */ jsx(Link, {
							to: "/sign-out",
							className: "block",
							preload: false,
							children: /* @__PURE__ */ jsx(Button, {
								variant: onResend ? "ghost" : "default",
								className: "w-full",
								disabled: isSigningOutToSignIn,
								children: t("Sign out")
							})
						})]
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-center text-sm text-muted-foreground",
						children: [
							t("Already verified?"),
							" ",
							preview ? /* @__PURE__ */ jsx("span", {
								className: "link-neutral",
								children: t("Sign in")
							}) : /* @__PURE__ */ jsx("button", {
								type: "button",
								className: "link-neutral disabled:opacity-50",
								onClick: handleSignIn,
								disabled: isSigningOutToSignIn,
								children: t("Sign in")
							})
						]
					})] })]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "hidden bg-background md:block min-h-[600px]",
				children: /* @__PURE__ */ jsx("img", {
					alt: "Image",
					className: "h-full w-full object-cover",
					height: "600",
					src: "/cover.avif",
					width: "600"
				})
			})]
		})
	});
}
export { VerifyEmail as t };
