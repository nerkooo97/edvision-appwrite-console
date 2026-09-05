import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { n as useDebugMode } from "./DebugMode-DFSPYy81.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as getLastLoginMethod } from "./auth-storage-DvcI7wFF.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, s as FormMessage, t as Form } from "./form-DhO3ifW6.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppwriteException, ID } from "@appwrite.io/console";
import { toast } from "sonner";
import { Bug, Eye, EyeOff } from "lucide-react";
import * as z$1 from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
var DEMO_USER_EMAIL = "dev@appwrite.io";
var DEMO_USER_PASSWORD = "appwritedev";
var DEMO_USER_NAME = "Demo";
function isAccountAlreadyExistsError(error) {
	if (!(error instanceof AppwriteException)) return false;
	return error.code === 409 || error.type === "user_already_exists" || error.type === "user_email_already_exists";
}
var createLoginSchema = (t) => z$1.object({
	email: z$1.string().email(t("Please enter a valid email address")),
	password: z$1.string().min(1, t("Password is required"))
});
var createSignUpSchema = (t) => z$1.object({
	name: z$1.string().min(2, t("Name must be at least 2 characters")),
	email: z$1.string().email(t("Please enter a valid email address")),
	password: z$1.string().min(8, t("Password must be at least 8 characters"))
});
function SignIn({ mode = "sign-in", onSubmit, onGitHubLogin, isLoading, isGitHubLoading, redirect: redirect$1 }) {
	const t = useT();
	const { isDebugModeOpen } = useDebugMode();
	const form = useForm({
		resolver: zodResolver(mode === "sign-in" ? createLoginSchema(t) : createSignUpSchema(t)),
		defaultValues: {
			email: "",
			password: "",
			name: ""
		}
	});
	const [isCreatingDemo, setIsCreatingDemo] = useState(false);
	const emailValue = form.watch("email");
	const location = useLocation();
	const [lastLoginMethod, setLastLoginMethod] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const updateLastLoginMethod = () => {
		setLastLoginMethod(getLastLoginMethod());
	};
	useEffect(() => {
		updateLastLoginMethod();
		const handleVisibilityChange = () => {
			if (document.visibilityState === "visible") updateLastLoginMethod();
		};
		const handleFocus = () => {
			updateLastLoginMethod();
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		window.addEventListener("focus", handleFocus);
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			window.removeEventListener("focus", handleFocus);
		};
	}, []);
	useEffect(() => {
		updateLastLoginMethod();
	}, [location.pathname]);
	const handleSubmit = (data) => {
		onSubmit(data);
	};
	const formBusy = isLoading || isCreatingDemo;
	const handleCreateDemoUser = async () => {
		form.setValue("email", DEMO_USER_EMAIL, {
			shouldDirty: true,
			shouldValidate: true
		});
		form.setValue("password", DEMO_USER_PASSWORD, {
			shouldDirty: true,
			shouldValidate: true
		});
		if (mode === "sign-up") form.setValue("name", DEMO_USER_NAME, {
			shouldDirty: true,
			shouldValidate: true
		});
		setShowPassword(true);
		toast.message("Creating demo user", { description: `Email: ${DEMO_USER_EMAIL}. Password: ${DEMO_USER_PASSWORD}` });
		setIsCreatingDemo(true);
		try {
			try {
				await sdk.forConsole.account.create({
					userId: ID.unique(),
					email: DEMO_USER_EMAIL,
					password: DEMO_USER_PASSWORD,
					name: DEMO_USER_NAME
				});
			} catch (error) {
				if (!isAccountAlreadyExistsError(error)) {
					toast.error(getErrorMessage(error, "Failed to create demo user"));
					return;
				}
			}
			onSubmit({
				email: DEMO_USER_EMAIL,
				password: DEMO_USER_PASSWORD,
				name: DEMO_USER_NAME
			}, { skipAccountCreate: true });
		} finally {
			setIsCreatingDemo(false);
		}
	};
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden py-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
				children: [/* @__PURE__ */ jsx(Form, {
					...form,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: form.handleSubmit(handleSubmit),
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "text-2xl font-semibold tracking-tight",
									children: mode === "sign-in" ? t("Welcome back") : t("Create an account")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: mode === "sign-in" ? t("Login to your account") : t("Enter your details to create a new account")
								})]
							}),
							onGitHubLogin && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [lastLoginMethod === "github" && /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2 start-3 bg-foreground text-background text-[10px] font-medium px-1.5 py-0.5 rounded border border-border z-10",
									children: t("Last used")
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									type: "button",
									className: "w-full",
									onClick: onGitHubLogin,
									disabled: isGitHubLoading || formBusy,
									children: [/* @__PURE__ */ jsx("svg", {
										className: "me-1.5 h-4 w-4",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ jsx("path", {
											fillRule: "evenodd",
											clipRule: "evenodd",
											d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.737 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
										})
									}), mode === "sign-up" ? t("Sign up with GitHub") : t("Login with GitHub")]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute inset-0 flex items-center",
									children: /* @__PURE__ */ jsx("span", { className: "w-full border-t" })
								}), /* @__PURE__ */ jsx("div", {
									className: "relative flex justify-center text-xs uppercase",
									children: /* @__PURE__ */ jsx("span", {
										className: "bg-card px-2 text-muted-foreground",
										children: t("Or continue with")
									})
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									mode === "sign-up" && /* @__PURE__ */ jsx(FormField, {
										control: form.control,
										name: "name",
										render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
											/* @__PURE__ */ jsx(FormLabel, { children: t("Name") }),
											/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
												placeholder: t("Your name"),
												...field
											}) }),
											/* @__PURE__ */ jsx(FormMessage, {})
										] })
									}),
									/* @__PURE__ */ jsx(FormField, {
										control: form.control,
										name: "email",
										render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
											/* @__PURE__ */ jsx(FormLabel, { children: t("Email") }),
											/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
												type: "email",
												placeholder: "m@example.com",
												...field
											}) }),
											/* @__PURE__ */ jsx(FormMessage, {})
										] })
									}),
									/* @__PURE__ */ jsx(FormField, {
										control: form.control,
										name: "password",
										render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
											/* @__PURE__ */ jsx(FormLabel, { children: t("Password") }),
											/* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx(Input, {
													type: showPassword ? "text" : "password",
													className: "pe-10",
													...field
												}), /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => setShowPassword((current) => !current),
													className: "absolute end-2 top-1/2 -translate-y-1/2 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													"aria-label": showPassword ? t("Hide password") : t("Show password"),
													children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
												})]
											}) }),
											/* @__PURE__ */ jsx(FormMessage, {}),
											mode === "sign-in" && /* @__PURE__ */ jsx(Link, {
												to: "/recovery",
												search: emailValue ? { email: emailValue } : void 0,
												className: "link-neutral text-sm",
												children: t("Forgot your password?")
											})
										] })
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [lastLoginMethod === "email" && /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2 start-3 bg-foreground text-background text-[10px] font-medium px-1.5 py-0.5 rounded border border-border z-10",
									children: t("Last used")
								}), /* @__PURE__ */ jsx(Button, {
									type: "submit",
									className: "w-full",
									disabled: formBusy,
									children: mode === "sign-in" ? t("Login") : t("Sign up")
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-center text-sm text-muted-foreground",
								children: [
									mode === "sign-in" ? t("Don't have an account?") : t("Already have an account?"),
									" ",
									/* @__PURE__ */ jsx(Link, {
										to: mode === "sign-in" ? "/sign-up" : "/sign-in",
										search: redirect$1 ? { redirect: redirect$1 } : void 0,
										className: "link-neutral",
										children: mode === "sign-in" ? t("Sign up") : t("Sign in")
									})
								]
							})
						]
					})
				}), isDebugModeOpen ? /* @__PURE__ */ jsxs("div", {
					dir: "ltr",
					lang: "en",
					"data-analytics-track": "false",
					className: "mt-6 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 p-3 text-left",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-[var(--network-globe-edge)]/75",
							children: [/* @__PURE__ */ jsx(Bug, { className: "h-3 w-3 shrink-0 text-[var(--network-globe-edge)]" }), "Debug"]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
							children: "Create a demo user and sign in with these credentials."
						}),
						/* @__PURE__ */ jsxs("dl", {
							className: "mt-2 space-y-1 font-mono text-[11px]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "shrink-0 text-[var(--network-globe-edge)]/70",
									children: "Email"
								}), /* @__PURE__ */ jsx("dd", {
									className: "min-w-0 break-all text-foreground",
									children: DEMO_USER_EMAIL
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "shrink-0 text-[var(--network-globe-edge)]/70",
									children: "Password"
								}), /* @__PURE__ */ jsx("dd", {
									className: "min-w-0 break-all text-foreground",
									children: DEMO_USER_PASSWORD
								})]
							})]
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "mt-3 h-7 border-[color-mix(in_srgb,var(--network-globe-edge)_30%,var(--border))] bg-transparent text-[12px] text-foreground hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
							disabled: formBusy,
							onClick: () => {
								handleCreateDemoUser();
							},
							children: "Create demo user"
						})
					]
				}) : null]
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
export { SignIn as t };
