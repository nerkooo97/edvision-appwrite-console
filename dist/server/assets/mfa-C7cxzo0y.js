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
import { Ct as resolvePostAuthRedirect, Nt as resolvePostAuthOrganizationId, St as requiresConsoleEmailVerification, w as refreshConsoleAccountAfterAuth, wt as toRedirectNavigateOptions, xt as prefetchPostAuthDestination } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Route$1 } from "./mfa-BwxyACyg.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { i as InputOTPSlot, n as InputOTPGroup, r as InputOTPSeparator, t as InputOTP } from "./input-otp-DTuOA8dL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AuthenticationFactor } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Mail, Smartphone } from "lucide-react";
function getDefaultChallengeType(factors) {
	if (factors.totp) return AuthenticationFactor.Totp;
	if (factors.email) return AuthenticationFactor.Email;
	if (factors.phone) return AuthenticationFactor.Phone;
	if (factors.recoveryCode) return AuthenticationFactor.Recoverycode;
	return null;
}
function hasAnyMfaFactor(factors) {
	return Boolean(factors.totp || factors.email || factors.phone || factors.recoveryCode);
}
function readOtpFromForm(form, fallback) {
	return (form.querySelector("input[data-input-otp]")?.value ?? fallback).trim();
}
async function verifyMFAChallenge(challenge, code, challengeType, factors) {
	if (factors) {
		if (!{
			[AuthenticationFactor.Totp]: factors.totp,
			[AuthenticationFactor.Email]: factors.email,
			[AuthenticationFactor.Phone]: factors.phone,
			[AuthenticationFactor.Recoverycode]: factors.recoveryCode || false
		}[challengeType]) throw new Error(`Authentication factor ${challengeType} is not enabled`);
	}
	let activeChallenge = challenge;
	const otp = code.trim();
	if (!otp) throw new Error("Please enter a verification code");
	if (!activeChallenge) {
		if (challengeType === AuthenticationFactor.Email || challengeType === AuthenticationFactor.Phone) throw new Error("Challenge must be created for Email/Phone factors");
		activeChallenge = await sdk.forConsole.account.createMFAChallenge({ factor: challengeType });
	}
	await sdk.forConsole.account.updateMFAChallenge({
		challengeId: activeChallenge.$id,
		otp
	});
}
function MFAChallenge({ factors, redirect: redirect$1 }) {
	const t = useT();
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [challengeType, setChallengeType] = useState(() => getDefaultChallengeType(factors));
	const [challenge, setChallenge] = useState(null);
	const [code, setCode] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(null);
	const [isChallengeReady, setIsChallengeReady] = useState(() => {
		const defaultType = getDefaultChallengeType(factors);
		return defaultType === AuthenticationFactor.Totp || defaultType === AuthenticationFactor.Recoverycode || defaultType === null;
	});
	const codeRef = useRef(code);
	const challengeRef = useRef(challenge);
	const challengeTypeRef = useRef(challengeType);
	const challengeRequestIdRef = useRef(0);
	const setCodeValue = (value) => {
		codeRef.current = value;
		setCode(value);
	};
	const setChallengeValue = (value) => {
		challengeRef.current = value;
		setChallenge(value);
	};
	const setChallengeTypeValue = (value) => {
		challengeTypeRef.current = value;
		setChallengeType(value);
	};
	const createChallenge = async (factor) => {
		const requestId = ++challengeRequestIdRef.current;
		setDisabled(true);
		setChallengeTypeValue(factor);
		setCodeValue("");
		setError(null);
		setChallengeValue(null);
		if (factor === AuthenticationFactor.Totp || factor === AuthenticationFactor.Recoverycode) {
			setIsChallengeReady(true);
			setDisabled(false);
			return;
		}
		setIsChallengeReady(false);
		try {
			const newChallenge = await sdk.forConsole.account.createMFAChallenge({ factor });
			if (requestId !== challengeRequestIdRef.current) return;
			setChallengeValue(newChallenge);
			setIsChallengeReady(true);
		} catch (error$1) {
			if (requestId !== challengeRequestIdRef.current) return;
			const message = getErrorMessage(error$1, t("Failed to create challenge"));
			setError(message);
			toast.error(message);
		} finally {
			if (requestId === challengeRequestIdRef.current) setDisabled(false);
		}
	};
	useEffect(() => {
		const defaultType = getDefaultChallengeType(factors);
		if (defaultType === AuthenticationFactor.Email || defaultType === AuthenticationFactor.Phone) createChallenge(defaultType);
	}, []);
	useEffect(() => {
		if (!challengeType) return;
		const focusInput = () => {
			if (challengeType === AuthenticationFactor.Recoverycode) {
				document.getElementById("mfa-code")?.focus();
				return;
			}
			const otpContainer = document.querySelector("[data-slot=\"input-otp\"]");
			if (!otpContainer) return;
			const input = otpContainer.querySelector("input");
			if (input) input.focus();
			else {
				otpContainer.click();
				otpContainer.focus();
			}
		};
		requestAnimationFrame(() => {
			requestAnimationFrame(focusInput);
		});
	}, [challengeType]);
	const verifyMutation = useMutation({
		mutationFn: async (otp) => {
			const activeChallengeType = challengeTypeRef.current;
			if (!activeChallengeType) throw new Error("Please select an authentication factor");
			await verifyMFAChallenge(challengeRef.current, otp, activeChallengeType, factors);
		},
		onSuccess: async () => {
			setError(null);
			try {
				const account = await refreshConsoleAccountAfterAuth(queryClient);
				if (requiresConsoleEmailVerification(account)) {
					navigate({
						to: "/verify-email",
						search: redirect$1 ? { redirect: redirect$1 } : void 0
					});
					return;
				}
				await prefetchPostAuthDestination(queryClient, account, redirect$1);
				await router.invalidate();
				const targetRedirect = resolvePostAuthRedirect(redirect$1);
				if (targetRedirect) {
					navigate(toRedirectNavigateOptions(targetRedirect));
					return;
				}
				navigate({
					to: "/organizations/$orgId",
					params: { orgId: await resolvePostAuthOrganizationId(account) },
					replace: true
				});
			} catch (error$1) {
				console.error("Post MFA navigation error:", error$1);
				toast.error(getErrorMessage(error$1, t("Verified but could not open the console")));
			}
		},
		onError: (error$1) => {
			setError(getErrorMessage(error$1, t("Failed to verify code")));
			setCodeValue("");
		}
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!challengeTypeRef.current) return;
		const otp = readOtpFromForm(e.currentTarget, codeRef.current);
		setCodeValue(otp);
		if (challengeTypeRef.current === AuthenticationFactor.Recoverycode ? otp.length > 0 : otp.length === 6) verifyMutation.mutate(otp);
	};
	const handleBack = async () => {
		try {
			await sdk.forConsole.account.deleteSession({ sessionId: "current" });
		} catch {}
		navigate({ to: "/sign-in" });
	};
	const getFactorDescription = () => {
		switch (challengeType) {
			case AuthenticationFactor.Totp: return t("Enter a 6-digit one-time code from your authenticator app.");
			case AuthenticationFactor.Email: return t("A 6-digit verification code was sent to your email. Enter it below.");
			case AuthenticationFactor.Phone: return t("A 6-digit verification code was sent to your phone. Enter it below.");
			case AuthenticationFactor.Recoverycode: return t("Enter one of the recovery codes you received when enabling MFA.");
			default: return "";
		}
	};
	const enabledMainFactors = [
		factors.totp && AuthenticationFactor.Totp,
		factors.email && AuthenticationFactor.Email,
		factors.phone && AuthenticationFactor.Phone
	].filter(Boolean);
	const isCodeValid = challengeType === AuthenticationFactor.Recoverycode ? code.length > 0 : code.length === 6;
	if (!hasAnyMfaFactor(factors)) return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4 text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: t("Two-factor authentication")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: t("No verification methods are available for this account. Contact support if you need help signing in.")
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => void handleBack(),
					children: t("Back to sign in")
				})
			]
		})
	});
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden py-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: t("Two-factor authentication")
					}) }), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							!isChallengeReady && /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: t("Preparing verification...")
							}),
							enabledMainFactors.length > 1 && /* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx(Label, { children: t("Authentication method") }), /* @__PURE__ */ jsxs("div", {
									className: "grid gap-2",
									children: [
										factors.totp && /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: challengeType === AuthenticationFactor.Totp ? "default" : "outline",
											className: "justify-start",
											onClick: () => void createChallenge(AuthenticationFactor.Totp),
											disabled,
											children: [/* @__PURE__ */ jsx(Smartphone, { className: "me-1.5 h-4 w-4" }), t("Authenticator app")]
										}),
										factors.email && /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: challengeType === AuthenticationFactor.Email ? "default" : "outline",
											className: "justify-start",
											onClick: () => void createChallenge(AuthenticationFactor.Email),
											disabled,
											children: [/* @__PURE__ */ jsx(Mail, { className: "me-1.5 h-4 w-4" }), t("Email")]
										}),
										factors.phone && /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: challengeType === AuthenticationFactor.Phone ? "default" : "outline",
											className: "justify-start",
											onClick: () => void createChallenge(AuthenticationFactor.Phone),
											disabled,
											children: [/* @__PURE__ */ jsx(Smartphone, { className: "me-1.5 h-4 w-4" }), t("Phone")]
										})
									]
								})]
							}),
							challengeType && /* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "mfa-code",
										children: challengeType === AuthenticationFactor.Recoverycode ? t("Recovery code") : t("Verification code")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: getFactorDescription()
									}),
									challengeType === AuthenticationFactor.Recoverycode ? /* @__PURE__ */ jsx(Input, {
										id: "mfa-code",
										type: "text",
										value: code,
										onChange: (e) => {
											setCodeValue(e.target.value);
											setError(null);
										},
										placeholder: t("Enter recovery code"),
										disabled: disabled || verifyMutation.isPending,
										autoFocus: true,
										className: "font-mono"
									}) : /* @__PURE__ */ jsx("div", {
										className: "w-full",
										children: /* @__PURE__ */ jsxs(InputOTP, {
											maxLength: 6,
											value: code,
											onChange: (value) => {
												setCodeValue(value);
												setError(null);
											},
											disabled: disabled || verifyMutation.isPending || !isChallengeReady,
											containerClassName: "w-full justify-center",
											children: [
												/* @__PURE__ */ jsxs(InputOTPGroup, {
													className: "flex-1",
													children: [
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 0,
															className: "h-16 w-full text-2xl"
														}),
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 1,
															className: "h-16 w-full text-2xl"
														}),
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 2,
															className: "h-16 w-full text-2xl"
														})
													]
												}),
												/* @__PURE__ */ jsx(InputOTPSeparator, {}),
												/* @__PURE__ */ jsxs(InputOTPGroup, {
													className: "flex-1",
													children: [
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 3,
															className: "h-16 w-full text-2xl"
														}),
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 4,
															className: "h-16 w-full text-2xl"
														}),
														/* @__PURE__ */ jsx(InputOTPSlot, {
															index: 5,
															className: "h-16 w-full text-2xl"
														})
													]
												})
											]
										})
									}),
									error && /* @__PURE__ */ jsx("div", {
										className: "rounded-md bg-destructive/10 border border-destructive/20 p-3",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-sm text-destructive",
											children: error
										})
									})
								]
							}),
							factors.recoveryCode && challengeType !== AuthenticationFactor.Recoverycode && /* @__PURE__ */ jsx("div", {
								className: "text-center",
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => {
										createChallenge(AuthenticationFactor.Recoverycode);
									},
									disabled: disabled || verifyMutation.isPending,
									className: "text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
									children: t("Use a recovery code instead")
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ jsx(Button, {
									type: "submit",
									className: "w-full",
									disabled: !challengeType || !isCodeValid || !isChallengeReady || disabled || verifyMutation.isPending,
									children: t("Verify")
								}), /* @__PURE__ */ jsx("div", {
									className: "text-center pt-4",
									children: /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => void handleBack(),
										disabled: disabled || verifyMutation.isPending,
										className: "text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
										children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-3.5 w-3.5 inline" }), t("Back to sign in")]
									})
								})]
							})
						]
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
}
function MFAPage() {
	const search = Route$1.useSearch({ from: "/_auth/mfa" });
	const loaderData = Route$1.useLoaderData();
	if (!loaderData?.factors) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: /* @__PURE__ */ jsx(MFAChallenge, {
				factors: loaderData.factors,
				redirect: search.redirect
			})
		})
	});
}
export { MFAPage as component };
