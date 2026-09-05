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
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./label-D8nNLJBa.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form } from "./form-DhO3ifW6.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import * as z$1 from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
var createRecoverySchema = (t) => z$1.object({ email: z$1.string().email(t("Please enter a valid email address")) });
function Recovery({ onSubmit, isLoading, isSuccess, initialEmail }) {
	const t = useT();
	const form = useForm({
		resolver: zodResolver(createRecoverySchema(t)),
		defaultValues: { email: initialEmail || "" }
	});
	const handleSubmit = (data) => {
		onSubmit(data);
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
							children: t("Check your email")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: t("We've sent a password recovery link to your email address.")
						})]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/sign-in",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: "w-full",
							children: t("Back to sign in")
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
									children: t("Enter your email address and we'll send you a link to reset your password.")
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ jsx(FormField, {
									control: form.control,
									name: "email",
									render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
										/* @__PURE__ */ jsx(FormLabel, { children: t("Email") }),
										/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
											type: "email",
											placeholder: "m@example.com",
											...field
										}) }),
										/* @__PURE__ */ jsx(FormDescription, { children: t("We'll send a recovery link to this email address.") }),
										/* @__PURE__ */ jsx(FormMessage, {})
									] })
								})
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								className: "w-full",
								disabled: isLoading,
								children: t("Send recovery link")
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
				className: "hidden bg-background md:block",
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
function RecoveryPage() {
	const t = useT();
	const search = useSearch({ from: "/_auth/recovery" });
	const [isSuccess, setIsSuccess] = useState(false);
	const recoveryMutation = useMutation({
		mutationFn: async (data) => {
			try {
				const redirectUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/reset`;
				await sdk.forConsole.account.createRecovery({
					email: data.email,
					url: redirectUrl
				});
			} catch (error) {
				if (error instanceof AppwriteException) throw new Error(error.message || "Failed to send recovery email");
				throw error;
			}
		},
		onSuccess: () => {
			setIsSuccess(true);
			toast.success(t("Recovery email sent"));
		},
		onError: (error) => {
			console.error("Recovery error:", error);
			toast.error(error.message || t("Failed to send recovery email"));
		}
	});
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(Recovery, {
					onSubmit: (data) => recoveryMutation.mutate(data),
					isLoading: recoveryMutation.isPending,
					isSuccess,
					initialEmail: search.email
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
export { RecoveryPage as component };
