import { E as clearConsoleAccountCache, d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { D as syncConsoleAccountAfterMutation, N as useAccountIdentities, X as useMFAFactors } from "./auth-BPuxYQAc.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { i as InputOTPSlot, n as InputOTPGroup, r as InputOTPSeparator, t as InputOTP } from "./input-otp-DTuOA8dL.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AuthenticationFactor, AuthenticatorType } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertTriangle, Check, CheckCircle2, Copy, Download, Loader2, LockOpen, Mail, Smartphone, Trash2, XCircle } from "lucide-react";
async function fetchAuthenticatedImageBlobUrl(url, signal) {
	const headers = { ...sdk.forConsole.client.headers };
	if (typeof window !== "undefined") try {
		const cookieFallback = window.localStorage.getItem("cookieFallback");
		if (cookieFallback) headers["X-Fallback-Cookies"] = cookieFallback;
	} catch {}
	const response = await fetch(url, {
		method: "GET",
		credentials: "include",
		headers,
		cache: "no-store",
		signal
	});
	if (!response.ok) throw new Error(`Failed to load image (${response.status})`);
	const blob = await response.blob();
	if (!blob.size) throw new Error("Empty image response");
	return URL.createObjectURL(blob);
}
function revokeAuthenticatedImageBlobUrl(url) {
	if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
}
async function verifyMfaReauth(challenge, code, challengeType = AuthenticationFactor.Totp, factors) {
	let activeChallenge = challenge;
	const otp = code.trim();
	if (!otp) throw new Error("Please enter a verification code");
	if (!activeChallenge) {
		if (factors) {
			if (!{
				[AuthenticationFactor.Totp]: factors.totp,
				[AuthenticationFactor.Email]: factors.email,
				[AuthenticationFactor.Phone]: factors.phone,
				[AuthenticationFactor.Recoverycode]: factors.recoveryCode || false
			}[challengeType]) throw new Error(`Authentication factor ${challengeType} is not enabled`);
		}
		activeChallenge = await sdk.forConsole.account.createMFAChallenge({ factor: challengeType });
	}
	await sdk.forConsole.account.updateMFAChallenge({
		challengeId: activeChallenge.$id,
		otp
	});
}
function getDefaultFactor(factors) {
	if (factors.totp) return AuthenticationFactor.Totp;
	if (factors.email) return AuthenticationFactor.Email;
	if (factors.phone) return AuthenticationFactor.Phone;
	return null;
}
function useMfaReauth({ factors, excludeRecoveryCode = false, open = false }) {
	const effectiveFactors = useMemo(() => excludeRecoveryCode ? {
		...factors,
		recoveryCode: false
	} : factors, [excludeRecoveryCode, factors]);
	const [challengeType, setChallengeTypeState] = useState(null);
	const [challenge, setChallengeState] = useState(null);
	const [code, setCodeState] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [isChallengeReady, setIsChallengeReady] = useState(false);
	const challengeTypeRef = useRef(null);
	const challengeRef = useRef(null);
	const codeRef = useRef("");
	const challengeRequestIdRef = useRef(0);
	const setChallengeType = (value) => {
		challengeTypeRef.current = value;
		setChallengeTypeState(value);
	};
	const setChallenge = (value) => {
		challengeRef.current = value;
		setChallengeState(value);
	};
	const setCode = (value) => {
		codeRef.current = value;
		setCodeState(value);
	};
	const enabledMainFactors = useMemo(() => [
		effectiveFactors.totp && AuthenticationFactor.Totp,
		effectiveFactors.email && AuthenticationFactor.Email,
		effectiveFactors.phone && AuthenticationFactor.Phone
	].filter(Boolean), [effectiveFactors]);
	const clearFormState = () => {
		setChallenge(null);
		setCode("");
		setDisabled(false);
		setIsChallengeReady(false);
		setChallengeType(getDefaultFactor(effectiveFactors));
	};
	const createChallenge = async (factor) => {
		const requestId = ++challengeRequestIdRef.current;
		setDisabled(true);
		setChallengeType(factor);
		setCode("");
		setChallenge(null);
		if (factor === AuthenticationFactor.Totp || factor === AuthenticationFactor.Recoverycode) {
			setIsChallengeReady(true);
			setDisabled(false);
			return;
		}
		setIsChallengeReady(false);
		try {
			const newChallenge = await sdk.forConsole.account.createMFAChallenge({ factor });
			if (requestId !== challengeRequestIdRef.current) return;
			setChallenge(newChallenge);
			setIsChallengeReady(true);
		} catch (error) {
			if (requestId !== challengeRequestIdRef.current) return;
			throw new Error(getErrorMessage(error, "Failed to create challenge"));
		} finally {
			if (requestId === challengeRequestIdRef.current) setDisabled(false);
		}
	};
	useEffect(() => {
		if (!open) {
			challengeRequestIdRef.current += 1;
			return;
		}
		clearFormState();
		const defaultFactor = getDefaultFactor(effectiveFactors);
		if (!defaultFactor) return;
		createChallenge(defaultFactor).catch(() => {
			setIsChallengeReady(false);
		});
	}, [open]);
	const verify = async (codeOverride) => {
		if (codeOverride !== void 0) setCode(codeOverride);
		const type = challengeTypeRef.current;
		const otp = codeRef.current.trim();
		if (!type) throw new Error("Please select an authentication method");
		if (!otp) throw new Error("Please enter a verification code");
		await verifyMfaReauth(challengeRef.current, otp, type, effectiveFactors);
	};
	const isCodeValid = challengeType === AuthenticationFactor.Recoverycode ? code.trim().length > 0 : code.length === 6;
	const reset = () => {
		challengeRequestIdRef.current += 1;
		clearFormState();
		if (open) {
			const defaultFactor = getDefaultFactor(effectiveFactors);
			if (defaultFactor) createChallenge(defaultFactor).catch(() => {
				setIsChallengeReady(false);
			});
		}
	};
	return {
		effectiveFactors,
		enabledMainFactors,
		challengeType,
		challenge,
		code,
		setCode,
		disabled,
		isChallengeReady,
		createChallenge,
		verify,
		isCodeValid,
		reset
	};
}
function getFactorDescription(challengeType) {
	switch (challengeType) {
		case AuthenticationFactor.Totp: return "Enter a 6-digit one-time code from your authenticator app.";
		case AuthenticationFactor.Email: return "A 6-digit verification code was sent to your email. Enter it below.";
		case AuthenticationFactor.Phone: return "A 6-digit verification code was sent to your phone. Enter it below.";
		case AuthenticationFactor.Recoverycode: return "Enter one of the recovery codes you received when enabling MFA.";
		default: return "";
	}
}
function MfaReauthForm({ reauth }) {
	const t = useT();
	const { effectiveFactors, enabledMainFactors, challengeType, code, setCode, disabled, isChallengeReady, createChallenge } = reauth;
	if (enabledMainFactors.length === 0) return null;
	const showSecondaryOptions = enabledMainFactors.length > 1 || effectiveFactors.recoveryCode && challengeType !== AuthenticationFactor.Recoverycode;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			!isChallengeReady && /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Preparing verification...")
			}),
			challengeType && /* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "mfa-reauth-code",
						children: challengeType === AuthenticationFactor.Recoverycode ? t("Recovery code") : t("Verification code")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t(getFactorDescription(challengeType))
					}),
					challengeType === AuthenticationFactor.Recoverycode ? /* @__PURE__ */ jsx(Input, {
						id: "mfa-reauth-code",
						type: "text",
						value: code,
						onChange: (e) => setCode(e.target.value),
						placeholder: t("Enter recovery code"),
						disabled: disabled || !isChallengeReady,
						autoFocus: true,
						className: "font-mono text-[13px]"
					}) : /* @__PURE__ */ jsxs(InputOTP, {
						maxLength: 6,
						value: code,
						onChange: setCode,
						disabled: disabled || !isChallengeReady,
						containerClassName: "w-full justify-center",
						children: [
							/* @__PURE__ */ jsxs(InputOTPGroup, {
								className: "flex-1",
								children: [
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 0,
										className: "h-12 w-full text-xl"
									}),
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 1,
										className: "h-12 w-full text-xl"
									}),
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 2,
										className: "h-12 w-full text-xl"
									})
								]
							}),
							/* @__PURE__ */ jsx(InputOTPSeparator, {}),
							/* @__PURE__ */ jsxs(InputOTPGroup, {
								className: "flex-1",
								children: [
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 3,
										className: "h-12 w-full text-xl"
									}),
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 4,
										className: "h-12 w-full text-xl"
									}),
									/* @__PURE__ */ jsx(InputOTPSlot, {
										index: 5,
										className: "h-12 w-full text-xl"
									})
								]
							})
						]
					})
				]
			}),
			showSecondaryOptions && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "relative py-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center",
					children: /* @__PURE__ */ jsx("span", { className: "w-full border-t border-border" })
				}), /* @__PURE__ */ jsx("div", {
					className: "relative flex justify-center text-[11px] uppercase tracking-wider",
					children: /* @__PURE__ */ jsx("span", {
						className: "bg-background px-2 text-muted-foreground",
						children: t("or")
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-2",
				children: [
					effectiveFactors.totp && challengeType !== AuthenticationFactor.Totp && /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 justify-start text-[13px]",
						onClick: () => void createChallenge(AuthenticationFactor.Totp),
						disabled,
						children: [/* @__PURE__ */ jsx(Smartphone, { className: "me-1.5 h-4 w-4" }), t("Authenticator app")]
					}),
					effectiveFactors.email && challengeType !== AuthenticationFactor.Email && /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 justify-start text-[13px]",
						onClick: () => void createChallenge(AuthenticationFactor.Email),
						disabled,
						children: [/* @__PURE__ */ jsx(Mail, { className: "me-1.5 h-4 w-4" }), t("Email verification")]
					}),
					effectiveFactors.phone && challengeType !== AuthenticationFactor.Phone && /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 justify-start text-[13px]",
						onClick: () => void createChallenge(AuthenticationFactor.Phone),
						disabled,
						children: [/* @__PURE__ */ jsx(Smartphone, { className: "me-1.5 h-4 w-4" }), t("Phone verification")]
					}),
					effectiveFactors.recoveryCode && challengeType !== AuthenticationFactor.Recoverycode && /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => void createChallenge(AuthenticationFactor.Recoverycode),
						disabled,
						children: t("Use recovery code")
					})
				]
			})] })
		]
	});
}
var Dependencies = {
	ACCOUNT: ["account", "console"],
	IDENTITIES: ["identities", "account"],
	FACTORS: ["factors", "account"]
};
function AccountIdSection() {
	const { account } = useAuth();
	const t = useT();
	if (!account?.$id) return null;
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "account-id",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Account ID")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mb-3",
					children: t("Use this ID when integrating with the Appwrite API or SDKs. Support may also ask for this ID when assisting with issues.")
				}), /* @__PURE__ */ jsx(CopyableId, {
					id: account.$id,
					size: "md",
					maxWidth: 240
				})]
			})
		]
	});
}
function UpdateNameSection() {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const t = useT();
	const [name, setName] = useState("");
	const accountName = account?.name;
	useEffect(() => {
		if (!accountName) return;
		setName((prev) => prev === accountName ? prev : accountName);
	}, [accountName]);
	const updateNameMutation = useMutation({
		mutationFn: async (newName) => {
			return await sdk.forConsole.account.updateName({ name: newName });
		},
		onSuccess: (updatedAccount, newName) => {
			syncConsoleAccountAfterMutation(queryClient, {
				apiResult: updatedAccount,
				patch: { name: newName }
			});
			toast.success(t("Name has been updated"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update name"));
		}
	});
	const hasChanges = name !== (account?.name || "");
	const isDisabled = !name || !hasChanges || updateNameMutation.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updateNameMutation.mutate(name);
	};
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "name",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update name")
			})
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mb-3",
						children: t("Update your account display name.")
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "name",
							children: t("Name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "name",
							type: "text",
							placeholder: t("Enter name"),
							value: name,
							onChange: (e) => setName(e.target.value),
							disabled: updateNameMutation.isPending,
							className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdateEmailSection() {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const t = useT();
	const [email, setEmail] = useState("");
	const [emailPassword, setEmailPassword] = useState("");
	const accountEmail = account?.email;
	useEffect(() => {
		if (!accountEmail) return;
		setEmail((prev) => prev === accountEmail ? prev : accountEmail);
	}, [accountEmail]);
	const updateEmailMutation = useMutation({
		mutationFn: async ({ email: email$1, password }) => {
			return await sdk.forConsole.account.updateEmail({
				email: email$1,
				password
			});
		},
		onSuccess: (updatedAccount, { email: email$1 }) => {
			syncConsoleAccountAfterMutation(queryClient, {
				apiResult: updatedAccount,
				patch: { email: email$1 }
			});
			queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
			setEmailPassword("");
			toast.success(t("Email has been updated"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update email"));
		}
	});
	const emailChanged = email !== (account?.email || "");
	const showPassword = emailChanged && !!email;
	const isDisabled = !email || !emailPassword || !emailChanged || updateEmailMutation.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updateEmailMutation.mutate({
			email,
			password: emailPassword
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "email",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Update email")
				}), account?.emailVerification && /* @__PURE__ */ jsxs(Badge, {
					variant: "success",
					className: "text-[10px] shrink-0 gap-1",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("verified")]
				})]
			})
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mb-3",
						children: t("Update your account email address. Requires password verification when changing email.")
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "email",
								children: t("Email")
							}), /* @__PURE__ */ jsx(Input, {
								id: "email",
								type: "email",
								placeholder: t("Enter email"),
								value: email,
								onChange: (e) => setEmail(e.target.value),
								disabled: updateEmailMutation.isPending,
								className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
								required: true
							})]
						}), showPassword && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "email-password",
								children: t("Password")
							}), /* @__PURE__ */ jsx(Input, {
								id: "email-password",
								type: "password",
								placeholder: t("Enter password"),
								value: emailPassword,
								onChange: (e) => setEmailPassword(e.target.value),
								disabled: updateEmailMutation.isPending,
								className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
								required: true
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function UpdatePasswordSection() {
	const t = useT();
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const queryClient = useQueryClient();
	const updatePasswordMutation = useMutation({
		mutationFn: async ({ password, oldPassword: oldPassword$1 }) => {
			return await sdk.forConsole.account.updatePassword({
				password,
				oldPassword: oldPassword$1
			});
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			setOldPassword("");
			setNewPassword("");
			toast.success(t("Password has been updated"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update password"));
		}
	});
	const isDisabled = !newPassword || !oldPassword || updatePasswordMutation.isPending;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDisabled) updatePasswordMutation.mutate({
			password: newPassword,
			oldPassword
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "password",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "px-6 py-4",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Update password")
			})
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mb-3",
						children: t("Change your account password. Includes link to password recovery if forgotten.")
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "old-password",
									children: t("Old password")
								}), /* @__PURE__ */ jsx(Input, {
									id: "old-password",
									type: "password",
									placeholder: t("Enter password"),
									value: oldPassword,
									onChange: (e) => setOldPassword(e.target.value),
									disabled: updatePasswordMutation.isPending,
									className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "new-password",
									children: t("New password")
								}), /* @__PURE__ */ jsx(Input, {
									id: "new-password",
									type: "password",
									placeholder: t("Enter password"),
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									disabled: updatePasswordMutation.isPending,
									className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
									required: true
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/recovery",
									className: "link-neutral text-[13px]",
									children: t("Forgot your password?")
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: isDisabled,
						children: t("Update")
					})
				})
			]
		})]
	});
}
function IdentitiesSection({ initialData } = {}) {
	const t = useT();
	const { data, isFetched } = useAccountIdentities();
	const queryClient = useQueryClient();
	const identities = data?.identities ?? initialData?.identities ?? [];
	const hasResolvedData = isFetched || initialData !== void 0;
	const deleteIdentityMutation = useMutation({
		mutationFn: async (identityId) => {
			return await sdk.forConsole.account.deleteIdentity({ identityId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: Dependencies.IDENTITIES });
			toast.success(t("Identity has been deleted"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete identity"));
		}
	});
	const handleDelete = (identityId) => {
		if (confirm(t("Are you sure you want to delete this identity?"))) deleteIdentityMutation.mutate(identityId);
	};
	const getProviderIcon = (provider) => {
		return {
			github: "github.svg",
			google: "google.svg",
			apple: "apple.svg",
			facebook: "facebook.svg"
		}[provider.toLowerCase()] || "empty.svg";
	};
	const getProviderName = (provider) => {
		return {
			github: "GitHub",
			google: "Google",
			apple: "Apple",
			facebook: "Facebook"
		}[provider.toLowerCase()] || provider;
	};
	if (!hasResolvedData) return null;
	if (identities.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Identities")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-muted/30 p-6 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[14px] font-medium text-foreground mb-1",
						children: t("No identities are currently available.")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Once you sign in via GitHub, you'll see it here.")
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "identities",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Identities")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[200px]",
						children: t("Provider")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[250px]",
						children: t("Email")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
						children: t("Created At")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
						children: t("Expiry Date")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[80px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: identities.map((identity) => /* @__PURE__ */ jsxs(TableRow, { children: [
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-6 py-3",
					children: /* @__PURE__ */ jsxs(Badge, {
						variant: "info",
						className: "text-[10px] shrink-0 gap-1.5 font-medium",
						children: [/* @__PURE__ */ jsx("img", {
							src: `/icons/${getProviderIcon(identity.provider)}`,
							alt: identity.provider,
							className: `h-3.5 w-3.5 ${PUBLIC_ICON_MUTED_CLASSES}`,
							onError: (e) => {
								e.currentTarget.src = "/icons/empty.svg";
							}
						}), getProviderName(identity.provider)]
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-[13px] text-muted-foreground",
						children: identity.providerEmail || "-"
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: /* @__PURE__ */ jsx(DateTooltip, {
						date: new Date(identity.$createdAt),
						className: "text-[12px] text-muted-foreground"
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-4 py-3",
					children: identity.providerAccessTokenExpiry ? /* @__PURE__ */ jsx(DateTooltip, {
						date: new Date(identity.providerAccessTokenExpiry),
						className: "text-[12px] text-muted-foreground"
					}) : /* @__PURE__ */ jsx("span", {
						className: "text-[12px] text-muted-foreground",
						children: "-"
					})
				}),
				/* @__PURE__ */ jsx(TableCell, {
					className: "px-6 py-3",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 w-7 p-0",
						onClick: () => handleDelete(identity.$id),
						disabled: deleteIdentityMutation.isPending,
						children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
					})
				})
			] }, identity.$id)) })] })
		]
	});
}
function MFASection() {
	const t = useT();
	const { account } = useAuth();
	const { data: factorsData } = useMFAFactors();
	const queryClient = useQueryClient();
	const [mfaEnabled, setMfaEnabled] = useState(account?.mfa || false);
	const accountMfa = account?.mfa;
	useEffect(() => {
		if (accountMfa === void 0) return;
		setMfaEnabled((prev) => prev === accountMfa ? prev : accountMfa);
	}, [accountMfa]);
	const factors = factorsData || {
		totp: false,
		email: false,
		phone: false,
		recoveryCode: false
	};
	const updateMFAMutation = useMutation({
		mutationFn: async (mfa) => {
			return await sdk.forConsole.account.updateMFA({ mfa });
		},
		onSuccess: async (updatedAccount, mfa) => {
			syncConsoleAccountAfterMutation(queryClient, {
				apiResult: updatedAccount,
				patch: { mfa }
			});
			queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
			if (mfa && account?.emailVerification && !factors.email) try {
				await sdk.forConsole.account.createMFAChallenge({ factor: AuthenticationFactor.Email });
				queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
			} catch (error) {
				console.error("Failed to auto-setup email MFA:", error);
			}
			toast.success(mfa ? t("Multi-factor authentication has been enabled") : t("Multi-factor authentication has been disabled"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update MFA"));
			setMfaEnabled(account?.mfa || false);
		}
	});
	const handleMfaToggle = (checked) => {
		setMfaEnabled(checked);
		updateMFAMutation.mutate(checked);
	};
	const hasAnyMfaMethod = factors.totp || factors.email || factors.phone;
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "mfa",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Multi-factor authentication")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-1",
					children: t("Enhance your account's security by requiring a second sign-in method")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-0.5",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "mfa-toggle",
							className: "text-[13px] font-semibold text-foreground cursor-pointer",
							children: t("Multi-factor authentication")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: mfaEnabled ? t("MFA is currently enabled") : t("MFA is currently disabled")
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						id: "mfa-toggle",
						checked: mfaEnabled,
						onCheckedChange: handleMfaToggle,
						disabled: updateMFAMutation.isPending
					})]
				}), mfaEnabled && /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsx(TOTPMethod, { factors }),
						/* @__PURE__ */ jsx(EmailMFAMethod, {
							factors,
							account
						}),
						factors.phone && /* @__PURE__ */ jsx(SMSMFAMethod, {
							factors,
							account
						}),
						/* @__PURE__ */ jsx(RecoveryCodesMethod, {
							factors,
							hasAnyMfaMethod
						})
					]
				})]
			})
		]
	});
}
function TOTPMethod({ factors }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [setupDialogOpen, setSetupDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [deleteError, setDeleteError] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);
	const deleteReauth = useMfaReauth({
		factors,
		open: deleteDialogOpen
	});
	const [, setVerifyDialogOpen] = useState(false);
	const [qrCodeUrl, setQrCodeUrl] = useState(null);
	const [secret, setSecret] = useState(null);
	const [otp, setOtp] = useState("");
	const [step, setStep] = useState("qr");
	const qrBlobUrlRef = useRef(null);
	const resetSetupState = () => {
		revokeAuthenticatedImageBlobUrl(qrBlobUrlRef.current);
		qrBlobUrlRef.current = null;
		setQrCodeUrl(null);
		setSecret(null);
		setOtp("");
		setStep("qr");
	};
	useEffect(() => {
		return () => {
			revokeAuthenticatedImageBlobUrl(qrBlobUrlRef.current);
		};
	}, []);
	const createAuthenticatorMutation = useMutation({
		mutationFn: async () => {
			const mfaType = await sdk.forConsole.account.createMFAAuthenticator({ type: AuthenticatorType.Totp });
			return {
				mfaType,
				qrBlobUrl: await fetchAuthenticatedImageBlobUrl(sdk.forConsole.avatars.getQR({
					text: mfaType.uri,
					size: 384
				}))
			};
		},
		onSuccess: (data) => {
			revokeAuthenticatedImageBlobUrl(qrBlobUrlRef.current);
			qrBlobUrlRef.current = data.qrBlobUrl;
			setQrCodeUrl(data.qrBlobUrl);
			setSecret(data.mfaType.secret || null);
			setStep("qr");
			setSetupDialogOpen(true);
		},
		onError: (error) => {
			setSetupDialogOpen(false);
			resetSetupState();
			toast.error(error.message || t("Failed to create authenticator"));
		}
	});
	const verifyAuthenticatorMutation = useMutation({
		mutationFn: async (code) => {
			return await sdk.forConsole.account.updateMFAAuthenticator({
				type: AuthenticatorType.Totp,
				otp: code
			});
		},
		onSuccess: (updatedAccount) => {
			queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			setSetupDialogOpen(false);
			setVerifyDialogOpen(false);
			resetSetupState();
			toast.success(t("Authenticator app has been connected"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to verify authenticator"));
		}
	});
	const handleDeleteSubmit = async (event) => {
		event.preventDefault();
		setDeleteError(null);
		setIsDeleting(true);
		try {
			const otp$1 = readOtpFromForm(event.currentTarget, deleteReauth.code);
			await deleteReauth.verify(otp$1);
			await sdk.forConsole.account.deleteMFAAuthenticator({ type: AuthenticatorType.Totp });
			setDeleteDialogOpen(false);
			deleteReauth.reset();
			toast.success(t("Authenticator app has been deleted"));
			await queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
		} catch (error) {
			setDeleteError(error instanceof Error ? error.message : t("Failed to delete authenticator"));
			deleteReauth.setCode("");
		} finally {
			setIsDeleting(false);
		}
	};
	const handleStartSetup = () => {
		resetSetupState();
		setSetupDialogOpen(true);
		createAuthenticatorMutation.mutate();
	};
	const handleSetupDialogOpenChange = (open) => {
		setSetupDialogOpen(open);
		if (!open) resetSetupState();
	};
	const handleContinue = () => {
		if (step === "qr") setStep("verify");
		else if (otp.length === 6) verifyAuthenticatorMutation.mutate(otp);
	};
	const handleDelete = () => {
		setDeleteError(null);
		setDeleteDialogOpen(true);
	};
	const handleDeleteDialogOpenChange = (open) => {
		setDeleteDialogOpen(open);
		if (!open) setDeleteError(null);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
					children: /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-muted-foreground" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[14px] font-semibold text-foreground",
							children: t("Authenticator app")
						}), factors.totp && /* @__PURE__ */ jsxs(Badge, {
							variant: "success",
							className: "text-[10px] shrink-0 gap-1",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("connected")]
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Use an authentication app to generate two-factor authentication codes.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { children: factors.totp ? /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleDelete,
					disabled: isDeleting,
					children: t("Delete")
				}) : /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					onClick: handleStartSetup,
					disabled: createAuthenticatorMutation.isPending,
					children: t("Add")
				}) })
			]
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: setupDialogOpen,
			onOpenChange: handleSetupDialogOpenChange,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: step === "qr" ? t("Scan QR code") : t("Enter verification code") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: step === "qr" ? t("Install an authenticator app on your mobile device, open it and scan the provided QR code or enter it manually.") : t("Enter the 6-digit one-time code generated by the app.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-4",
						children: step === "qr" ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [createAuthenticatorMutation.isPending ? /* @__PURE__ */ jsx("div", {
								className: "flex h-[220px] items-center justify-center",
								children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
							}) : qrCodeUrl ? /* @__PURE__ */ jsx("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "rounded-lg bg-white p-4",
									children: /* @__PURE__ */ jsx("img", {
										src: qrCodeUrl,
										alt: t("MFA QR Code"),
										className: "mx-auto block aspect-square w-full max-w-[192px]"
									})
								})
							}) : null, secret && !createAuthenticatorMutation.isPending && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "relative py-2",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute inset-0 flex items-center",
									children: /* @__PURE__ */ jsx("span", { className: "w-full border-t border-border" })
								}), /* @__PURE__ */ jsx("div", {
									className: "relative flex justify-center text-[11px] uppercase tracking-wider",
									children: /* @__PURE__ */ jsx("span", {
										className: "bg-background px-2 text-muted-foreground",
										children: t("or")
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										className: "text-[12px]",
										children: t("Manual entry code")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Manually enter the following code into the authenticator app")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Input, {
											value: secret,
											readOnly: true,
											className: "font-mono text-[13px]"
										}), /* @__PURE__ */ jsx(CopyButton, { text: secret })]
									})
								]
							})] })]
						}) : /* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "otp",
									children: t("Verification code")
								}), /* @__PURE__ */ jsx(Input, {
									id: "otp",
									type: "text",
									placeholder: "000000",
									value: otp,
									onChange: (e) => {
										setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
									},
									maxLength: 6,
									className: "text-center text-2xl tracking-widest font-mono",
									autoFocus: true
								})]
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => handleSetupDialogOpenChange(false),
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleContinue,
							disabled: step === "qr" && (createAuthenticatorMutation.isPending || !qrCodeUrl) || step === "verify" && otp.length !== 6 || verifyAuthenticatorMutation.isPending,
							children: t("Continue")
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteDialogOpen,
			onOpenChange: handleDeleteDialogOpenChange,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete authenticator app") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("This removes authenticator app codes from your account."),
								" ",
								t("To continue, verify your identity with a one-time code.")
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleDeleteSubmit,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx(MfaReauthForm, { reauth: deleteReauth }), deleteError && /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-[13px] text-destructive",
								children: deleteError
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => handleDeleteDialogOpenChange(false),
								disabled: isDeleting,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "submit",
								variant: "destructive",
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !deleteReauth.isCodeValid || !deleteReauth.isChallengeReady || isDeleting,
								children: t("Delete")
							})]
						})]
					})
				]
			})
		})
	] });
}
function EmailMFAMethod({ factors, account }) {
	useQueryClient();
	const t = useT();
	const createVerificationMutation = useMutation({
		mutationFn: async () => {
			return await sdk.forConsole.account.createVerification({ url: window.location.origin + window.location.pathname });
		},
		onSuccess: () => {
			toast.success(t("Verification email has been sent"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to send verification email"));
		}
	});
	const handleVerify = () => {
		createVerificationMutation.mutate();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
				children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-muted-foreground" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 mb-1",
					children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-[14px] font-semibold text-foreground",
							children: t("Email")
						}),
						account?.emailVerification && factors.email && /* @__PURE__ */ jsxs(Badge, {
							variant: "success",
							className: "text-[10px] shrink-0 gap-1",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("verified")]
						}),
						!account?.emailVerification && /* @__PURE__ */ jsxs(Badge, {
							variant: "warning",
							className: "text-[10px] shrink-0 gap-1",
							children: [/* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3" }), t("unverified")]
						})
					]
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[13px] text-muted-foreground",
					children: [
						t("One-time codes will be sent to:"),
						" ",
						account?.email || "-"
					]
				})]
			}),
			!account?.emailVerification && /* @__PURE__ */ jsx(Button, {
				size: "sm",
				className: "h-9 text-[13px]",
				onClick: handleVerify,
				disabled: createVerificationMutation.isPending,
				children: t("Verify")
			})
		]
	});
}
function SMSMFAMethod({ factors, account }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
			children: /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-muted-foreground" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 mb-1",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "text-[14px] font-semibold text-foreground",
					children: "SMS"
				}), account?.phoneVerification && factors.phone && /* @__PURE__ */ jsxs(Badge, {
					variant: "success",
					className: "text-[10px] shrink-0 gap-1",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }), t("verified")]
				})]
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground",
				children: [
					t("One-time codes will be sent to:"),
					" ",
					account?.phone || "-"
				]
			})]
		})]
	});
}
function readOtpFromForm(form, fallback) {
	return (form.querySelector("input[data-input-otp]")?.value ?? fallback).trim();
}
function parseRecoveryCodes(data) {
	return data.recoveryCodes ?? [];
}
function RecoveryCodesMethod({ factors, hasAnyMfaMethod }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [codesDialogOpen, setCodesDialogOpen] = useState(false);
	const [regenerateDialogOpen, setRegenerateDialogOpen] = useState(false);
	const [regenerateError, setRegenerateError] = useState(null);
	const [isRegenerating, setIsRegenerating] = useState(false);
	const [recoveryCodes, setRecoveryCodes] = useState([]);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [viewError, setViewError] = useState(null);
	const [isViewVerifying, setIsViewVerifying] = useState(false);
	const reauth = useMfaReauth({
		factors,
		excludeRecoveryCode: true,
		open: regenerateDialogOpen
	});
	const viewReauth = useMfaReauth({
		factors,
		open: viewDialogOpen
	});
	const createRecoveryCodesMutation = useMutation({
		mutationFn: async () => {
			return await sdk.forConsole.account.createMFARecoveryCodes();
		},
		onSuccess: (data) => {
			setRecoveryCodes(parseRecoveryCodes(data));
			setCodesDialogOpen(true);
			queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to create recovery codes"));
		}
	});
	const handleRegenerateSubmit = async (event) => {
		event.preventDefault();
		setRegenerateError(null);
		setIsRegenerating(true);
		try {
			const otp = readOtpFromForm(event.currentTarget, reauth.code);
			await verifyMfaReauth(reauth.challenge, otp);
			setRecoveryCodes(parseRecoveryCodes(await sdk.forConsole.account.updateMFARecoveryCodes()));
			setRegenerateDialogOpen(false);
			reauth.reset();
			setCodesDialogOpen(true);
			await queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
		} catch (error) {
			setRegenerateError(error instanceof Error ? error.message : t("Failed to regenerate recovery codes"));
			reauth.setCode("");
		} finally {
			setIsRegenerating(false);
		}
	};
	const handleView = async () => {
		try {
			setRecoveryCodes(parseRecoveryCodes(await sdk.forConsole.account.getMFARecoveryCodes()));
			setCodesDialogOpen(true);
		} catch (error) {
			const err = error;
			if (err.code === 404 || err.message?.includes("not found")) createRecoveryCodesMutation.mutate();
			else if (err.type === "user_challenge_required") {
				setViewError(null);
				setViewDialogOpen(true);
			} else toast.error(err.message || t("Failed to get recovery codes"));
		}
	};
	const handleViewDialogOpenChange = (open) => {
		setViewDialogOpen(open);
		if (!open) setViewError(null);
	};
	const handleViewSubmit = async (event) => {
		event.preventDefault();
		setViewError(null);
		setIsViewVerifying(true);
		try {
			const otp = readOtpFromForm(event.currentTarget, viewReauth.code);
			await viewReauth.verify(otp);
			let data;
			try {
				data = await sdk.forConsole.account.getMFARecoveryCodes();
			} catch (error) {
				const err = error;
				if (err.code === 404 || err.message?.includes("not found")) {
					data = await sdk.forConsole.account.createMFARecoveryCodes();
					await queryClient.invalidateQueries({ queryKey: Dependencies.FACTORS });
				} else throw error;
			}
			setRecoveryCodes(parseRecoveryCodes(data));
			setViewDialogOpen(false);
			viewReauth.reset();
			setCodesDialogOpen(true);
		} catch (error) {
			setViewError(error instanceof Error ? error.message : t("Failed to get recovery codes"));
			viewReauth.setCode("");
		} finally {
			setIsViewVerifying(false);
		}
	};
	const handleRegenerateDialogOpenChange = (open) => {
		setRegenerateDialogOpen(open);
		if (!open) setRegenerateError(null);
	};
	const recoveryCodesText = recoveryCodes.join("\n");
	const handleCopyAll = async () => {
		await navigator.clipboard.writeText(recoveryCodesText);
		toast.success(t("Recovery codes copied"));
	};
	const handleDownload = () => {
		const blob = new Blob([recoveryCodesText], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "recovery-codes.txt";
		document.body.appendChild(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 items-center justify-center rounded-full bg-muted",
					children: /* @__PURE__ */ jsx(LockOpen, { className: "h-5 w-5 text-muted-foreground" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-[14px] font-semibold text-foreground mb-1",
						children: t("Recovery codes")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Use in case you can't receive two-factor authentication codes.")
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex gap-2",
					children: factors.recoveryCode ? /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => handleRegenerateDialogOpenChange(true),
						disabled: !hasAnyMfaMethod,
						children: t("Regenerate")
					}) : /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleView,
						disabled: !hasAnyMfaMethod,
						children: t("View")
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: regenerateDialogOpen,
			onOpenChange: handleRegenerateDialogOpenChange,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Regenerate recovery codes") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Are you sure you want to regenerate all recovery codes? All previously generated recovery codes will become invalid.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleRegenerateSubmit,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx(MfaReauthForm, { reauth }), regenerateError && /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-[13px] text-destructive",
								children: regenerateError
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => handleRegenerateDialogOpenChange(false),
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "submit",
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !reauth.isCodeValid || !reauth.isChallengeReady || isRegenerating,
								children: t("Regenerate")
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: viewDialogOpen,
			onOpenChange: handleViewDialogOpenChange,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Verify your identity") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Verification is required to view your recovery codes.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleViewSubmit,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx(MfaReauthForm, { reauth: viewReauth }), viewError && /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-[13px] text-destructive",
								children: viewError
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => handleViewDialogOpenChange(false),
								disabled: isViewVerifying,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "submit",
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !viewReauth.isCodeValid || !viewReauth.isChallengeReady || isViewVerifying,
								children: t("Verify")
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: codesDialogOpen,
			onOpenChange: setCodesDialogOpen,
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-lg p-0",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-start",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Recovery codes") }), /* @__PURE__ */ jsx(DialogDescription, {
							className: "text-[13px] mt-2",
							children: t("Use these codes to access your account if you lose your authenticator.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-3 rounded-lg border border-orange-500/30 bg-orange-500/10 p-3",
								children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "mt-0.5 h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" }), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium text-orange-700 dark:text-orange-300",
										children: t("Save these recovery codes now. They won't be shown again.")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Each code can only be used once.")
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-2 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsxs(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-9 justify-start text-[13px]",
									onClick: handleCopyAll,
									disabled: recoveryCodes.length === 0,
									children: [/* @__PURE__ */ jsx(Copy, { className: "me-1.5 h-4 w-4" }), t("Copy all")]
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 justify-start text-[13px]",
									onClick: handleDownload,
									disabled: recoveryCodes.length === 0,
									children: [/* @__PURE__ */ jsx(Download, { className: "me-1.5 h-4 w-4" }), t("Download .txt")]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: recoveryCodes.map((code, index) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between rounded-md border border-border bg-muted/30 px-3 py-2",
									children: [/* @__PURE__ */ jsx("code", {
										className: "font-mono text-[13px]",
										children: code
									}), /* @__PURE__ */ jsx(CopyButton, { text: code })]
								}, index))
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => setCodesDialogOpen(false),
							children: t("Close")
						})
					})
				]
			})
		})
	] });
}
function CopyButton({ text }) {
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ jsx(Button, {
		variant: "ghost",
		size: "sm",
		className: "h-7 w-7 p-0",
		onClick: handleCopy,
		children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
	});
}
function DeleteAccountSection() {
	const t = useT();
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [error, setError] = useState(null);
	const deleteAccountMutation = useMutation({
		mutationFn: async () => {
			return await sdk.forConsole.account.delete();
		},
		onSuccess: () => {
			clearConsoleAccountCache();
			queryClient.removeQueries({ queryKey: Dependencies.ACCOUNT });
			toast.success(t("Account was deleted"));
			window.location.href = "/sign-in";
		},
		onError: (error$1) => {
			setError(error$1.message || t("Failed to delete account"));
		}
	});
	const handleDelete = () => {
		setError(null);
		deleteAccountMutation.mutate();
	};
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		"data-card-id": "delete-account",
		className: "rounded-xl border border-red-500/30 bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-red-600 dark:text-red-400",
					children: t("Delete account")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-red-500/20" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Your account will be permanently deleted and access will be lost to any of your teams and data. This action is irreversible.")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 mt-4",
					children: [/* @__PURE__ */ jsx(InitialsAvatar, {
						name: account?.name || account?.email || t("User"),
						size: "md"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[14px] font-medium text-foreground truncate",
							children: account?.name || t("User")
						}), account?.email && /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: account.email
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-red-500/20 bg-red-500/5",
				children: /* @__PURE__ */ jsxs(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "destructive",
							size: "sm",
							className: "h-9 text-[13px]",
							children: t("Delete account")
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [
							/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete account") }), /* @__PURE__ */ jsx(DialogDescription, {
									className: "text-[13px] mt-2",
									children: t("Are you sure you want to delete your account? This action cannot be undone.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 pb-4 pt-0",
								children: [account && /* @__PURE__ */ jsx("div", {
									className: "rounded-lg border border-border bg-muted/50 p-3 mb-4 mt-2",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx(InitialsAvatar, {
											name: account.name || account.email || t("User"),
											size: "sm"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[13px] font-medium text-foreground",
											children: account.name || t("User")
										}), account.email && /* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground",
											children: account.email
										})] })]
									})
								}), error && /* @__PURE__ */ jsx("div", {
									className: "rounded-md bg-destructive/10 border border-destructive/20 p-3 mb-4",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-destructive",
										children: error
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => {
										setDeleteDialogOpen(false);
										setError(null);
									},
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: deleteAccountMutation.isPending,
									onClick: handleDelete,
									children: t("Delete account")
								})]
							})
						]
					})]
				})
			})
		]
	}) });
}
export { UpdateEmailSection as a, MFASection as i, DeleteAccountSection as n, UpdateNameSection as o, IdentitiesSection as r, UpdatePasswordSection as s, AccountIdSection as t };
