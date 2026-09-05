import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import { Nt as resolvePostAuthOrganizationId, S as purgeConsoleAccountCaches, g as isConsoleMfaRequiredError, w as refreshConsoleAccountAfterAuth, xt as prefetchPostAuthDestination, y as navigateToConsoleMfaAfterSession } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./label-D8nNLJBa.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, s as FormMessage, t as Form } from "./form-DhO3ifW6.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import * as z$1 from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
var createResetPasswordSchema = (t) => z$1.object({
	password: z$1.string().min(8, t("Password must be at least 8 characters")),
	confirmPassword: z$1.string().min(8, t("Please confirm your password"))
}).refine((data) => data.password === data.confirmPassword, {
	message: t("Passwords don't match"),
	path: ["confirmPassword"]
});
function Reset({ onSubmit, isLoading, isSuccess }) {
	const t = useT();
	const form = useForm({
		resolver: zodResolver(createResetPasswordSchema(t)),
		defaultValues: {
			password: "",
			confirmPassword: ""
		}
	});
	const handleSubmit = (data) => {
		onSubmit({ password: data.password });
	};
	if (isSuccess) return /* @__PURE__ */ jsx(Card, {
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
							children: t("Password reset")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: t("Your password has been successfully reset. You can now sign in with your new password.")
						})]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/sign-in",
						children: /* @__PURE__ */ jsx(Button, {
							className: "w-full",
							children: t("Sign in")
						})
					})]
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
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden py-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
				children: /* @__PURE__ */ jsx(Form, {
					...form,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: form.handleSubmit(handleSubmit),
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "text-2xl font-semibold tracking-tight",
									children: t("Reset your password")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: t("Enter your new password below.")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ jsx(FormField, {
									control: form.control,
									name: "password",
									render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
										/* @__PURE__ */ jsx(FormLabel, { children: t("New Password") }),
										/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
											type: "password",
											...field
										}) }),
										/* @__PURE__ */ jsx(FormMessage, {})
									] })
								}), /* @__PURE__ */ jsx(FormField, {
									control: form.control,
									name: "confirmPassword",
									render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
										/* @__PURE__ */ jsx(FormLabel, { children: t("Confirm Password") }),
										/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
											type: "password",
											...field
										}) }),
										/* @__PURE__ */ jsx(FormMessage, {})
									] })
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								className: "w-full",
								disabled: isLoading,
								children: t("Reset password")
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-center text-sm text-muted-foreground",
								children: [
									t("Remember your password?"),
									" ",
									/* @__PURE__ */ jsx(Link, {
										to: "/sign-in",
										className: "link-neutral",
										children: t("Sign in")
									})
								]
							})
						]
					})
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
function ResetPage() {
	const t = useT();
	const search = useSearch({ from: "/_public/reset" });
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [isSuccess, setIsSuccess] = useState(false);
	const [isOpeningMfa, setIsOpeningMfa] = useState(false);
	const resetMutation = useMutation({
		mutationFn: async (data) => {
			try {
				await sdk.forConsole.account.updateRecovery({
					userId: search.userId,
					secret: search.secret,
					password: data.password
				});
				try {
					await sdk.forConsole.account.get();
				} catch (error) {
					if (error instanceof AppwriteException && error.type === "user_more_factors_required") throw {
						...error,
						isMfaRequired: true
					};
				}
			} catch (error) {
				if (typeof error === "object" && error !== null && "isMfaRequired" in error && error.isMfaRequired === true) throw error;
				if (error instanceof AppwriteException) throw new Error(error.message || "Failed to reset password");
				throw error;
			}
		},
		onSuccess: async () => {
			try {
				const account = await refreshConsoleAccountAfterAuth(queryClient);
				await prefetchPostAuthDestination(queryClient, account);
				await router.invalidate();
				toast.success(t("Password reset successfully"));
				navigate({
					to: "/organizations/$orgId",
					params: { orgId: await resolvePostAuthOrganizationId(account) },
					replace: true
				});
			} catch {
				purgeConsoleAccountCaches(queryClient);
				toast.success(t("Password reset successfully"));
				setIsSuccess(true);
			}
		},
		onError: async (error) => {
			if (typeof error === "object" && error !== null && "isMfaRequired" in error && error.isMfaRequired === true || isConsoleMfaRequiredError(error)) {
				setIsOpeningMfa(true);
				try {
					await navigateToConsoleMfaAfterSession(queryClient, navigate);
				} catch (navigationError) {
					setIsOpeningMfa(false);
					toast.error(getErrorMessage(navigationError, t("Could not open MFA verification")));
				}
				return;
			}
			console.error("Reset error:", error);
			toast.error(getErrorMessage(error, t("Failed to reset password")));
		}
	});
	if (!search.userId || !search.secret) return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border bg-card p-6 text-center",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold tracking-tight mb-2",
						children: t("Invalid reset link")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mb-4",
						children: t("This password reset link is invalid or has expired. Please request a new one.")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-2 justify-center",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/recovery",
							className: "link-neutral text-sm",
							children: t("Request new reset link")
						})
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 flex justify-center",
				children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
			})]
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(Reset, {
					onSubmit: (data) => resetMutation.mutate(data),
					isLoading: resetMutation.isPending || isOpeningMfa,
					isSuccess
				}),
				isSuccess ? /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-center",
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "link-neutral text-sm",
						onClick: () => {
							purgeConsoleAccountCaches(queryClient);
							navigate({
								to: "/sign-in",
								replace: true
							});
						},
						children: t("Continue to sign in")
					})
				}) : null,
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
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
				})
			]
		})
	});
}
export { ResetPage as component };
