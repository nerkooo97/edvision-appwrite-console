import { t as cn } from "./utils-DoqqkI3X.js";
import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Bt as useSetOrganizationDefaultPaymentMethod, It as usePaymentMethods, Rt as useSetOrganizationBackupPaymentMethod, Vt as useSetPaymentMethodProvider, xt as useCreatePaymentMethod } from "./organizations-BKtnlNrj.js";
import { Gs as useLocale } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as getStripeAppearanceFromTheme, r as getStripeInstance } from "./stripe-B07yV6XF.js";
import { a as formatPaymentCardBrand, c as maskCardNumber } from "./utils-DMkzhjmw.js";
import { n as warningAlertContainerClassName, r as warningAlertTextClassName } from "./WarningAlert-ZIbpbrZO.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { CreditCard, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
function PaymentMethodBrandAvatar({ brand, className }) {
	const label = formatPaymentCardBrand(brand);
	return /* @__PURE__ */ jsx(CreditCard, {
		className: cn("h-4 w-4 shrink-0 text-muted-foreground", className),
		"aria-label": label
	});
}
var US_STATES = [
	{
		value: "AL",
		label: "Alabama"
	},
	{
		value: "AK",
		label: "Alaska"
	},
	{
		value: "AZ",
		label: "Arizona"
	},
	{
		value: "AR",
		label: "Arkansas"
	},
	{
		value: "CA",
		label: "California"
	},
	{
		value: "CO",
		label: "Colorado"
	},
	{
		value: "CT",
		label: "Connecticut"
	},
	{
		value: "DE",
		label: "Delaware"
	},
	{
		value: "FL",
		label: "Florida"
	},
	{
		value: "GA",
		label: "Georgia"
	},
	{
		value: "HI",
		label: "Hawaii"
	},
	{
		value: "ID",
		label: "Idaho"
	},
	{
		value: "IL",
		label: "Illinois"
	},
	{
		value: "IN",
		label: "Indiana"
	},
	{
		value: "IA",
		label: "Iowa"
	},
	{
		value: "KS",
		label: "Kansas"
	},
	{
		value: "KY",
		label: "Kentucky"
	},
	{
		value: "LA",
		label: "Louisiana"
	},
	{
		value: "ME",
		label: "Maine"
	},
	{
		value: "MD",
		label: "Maryland"
	},
	{
		value: "MA",
		label: "Massachusetts"
	},
	{
		value: "MI",
		label: "Michigan"
	},
	{
		value: "MN",
		label: "Minnesota"
	},
	{
		value: "MS",
		label: "Mississippi"
	},
	{
		value: "MO",
		label: "Missouri"
	},
	{
		value: "MT",
		label: "Montana"
	},
	{
		value: "NE",
		label: "Nebraska"
	},
	{
		value: "NV",
		label: "Nevada"
	},
	{
		value: "NH",
		label: "New Hampshire"
	},
	{
		value: "NJ",
		label: "New Jersey"
	},
	{
		value: "NM",
		label: "New Mexico"
	},
	{
		value: "NY",
		label: "New York"
	},
	{
		value: "NC",
		label: "North Carolina"
	},
	{
		value: "ND",
		label: "North Dakota"
	},
	{
		value: "OH",
		label: "Ohio"
	},
	{
		value: "OK",
		label: "Oklahoma"
	},
	{
		value: "OR",
		label: "Oregon"
	},
	{
		value: "PA",
		label: "Pennsylvania"
	},
	{
		value: "RI",
		label: "Rhode Island"
	},
	{
		value: "SC",
		label: "South Carolina"
	},
	{
		value: "SD",
		label: "South Dakota"
	},
	{
		value: "TN",
		label: "Tennessee"
	},
	{
		value: "TX",
		label: "Texas"
	},
	{
		value: "UT",
		label: "Utah"
	},
	{
		value: "VT",
		label: "Vermont"
	},
	{
		value: "VA",
		label: "Virginia"
	},
	{
		value: "WA",
		label: "Washington"
	},
	{
		value: "WV",
		label: "West Virginia"
	},
	{
		value: "WI",
		label: "Wisconsin"
	},
	{
		value: "WY",
		label: "Wyoming"
	}
];
function PaymentMethodForm({ open, organizationId, isBackup = false, onSuccess, onCancel, variant = "dialog" }) {
	const t = useT();
	const { data: localeData } = useLocale();
	const isUsLocale = localeData?.countryCode?.trim().toUpperCase() === "US";
	const isUsLocaleRef = useRef(isUsLocale);
	isUsLocaleRef.current = isUsLocale;
	const [cardholderName, setCardholderName] = useState("");
	const [selectedState, setSelectedState] = useState("");
	const [showConfirmStep, setShowConfirmStep] = useState(false);
	const [requiresState, setRequiresState] = useState(false);
	const [isRecovery, setIsRecovery] = useState(false);
	const [isStripeLoading, setIsStripeLoading] = useState(true);
	const [error, setError] = useState(null);
	const [paymentMethodId, setPaymentMethodId] = useState(null);
	const [clientSecret, setClientSecret] = useState(null);
	const [providerMethodId, setProviderMethodId] = useState(null);
	const [addedCardPreview, setAddedCardPreview] = useState(null);
	const stripeRef = useRef(null);
	const elementsRef = useRef(null);
	const paymentElementRef = useRef(null);
	const stripeContainerRef = useRef(null);
	const createPaymentMethodMutationRef = useRef(null);
	const submitAbortRef = useRef(null);
	const createPaymentMethodMutation = useCreatePaymentMethod();
	createPaymentMethodMutationRef.current = createPaymentMethodMutation;
	const setPaymentMethodProviderMutation = useSetPaymentMethodProvider();
	const setDefaultPaymentMethodMutation = useSetOrganizationDefaultPaymentMethod();
	const setBackupPaymentMethodMutation = useSetOrganizationBackupPaymentMethod();
	const { paymentMethods: allPaymentMethods } = usePaymentMethods({ enabled: open });
	const { theme } = useTheme();
	const stripePublishableKey = typeof window !== "undefined" ? getRuntimeConfig().stripePublishableKey || window.__STRIPE_PUBLISHABLE_KEY__ : void 0;
	const hasStripePublicKey = !!stripePublishableKey;
	useEffect(() => {
		if (!open || !hasStripePublicKey) {
			if (paymentElementRef.current) paymentElementRef.current = null;
			if (elementsRef.current) elementsRef.current = null;
			return;
		}
		let mounted = true;
		let currentPaymentElement = null;
		let hasInitialized = false;
		let containerForCleanup = null;
		async function initializeStripe() {
			if (hasInitialized) return;
			hasInitialized = true;
			try {
				setIsStripeLoading(true);
				setError(null);
				const existingIncomplete = allPaymentMethods?.find((method) => method.clientSecret && !method.providerMethodId);
				let paymentMethod;
				let secret;
				if (existingIncomplete) {
					paymentMethod = existingIncomplete;
					secret = existingIncomplete.clientSecret;
				} else {
					paymentMethod = await createPaymentMethodMutationRef.current.mutateAsync();
					secret = paymentMethod.clientSecret;
				}
				if (!mounted) return;
				setPaymentMethodId(paymentMethod.$id);
				setClientSecret(secret);
				const stripe = await getStripeInstance(stripePublishableKey);
				if (!stripe || !mounted) {
					setIsStripeLoading(false);
					return;
				}
				stripeRef.current = stripe;
				const { setupIntent: existingIntent } = await stripe.retrieveSetupIntent(secret);
				if (!mounted) return;
				if (existingIntent?.status === "succeeded") {
					const pm = existingIntent.payment_method;
					const pmId = typeof pm === "string" ? pm : pm?.id ?? null;
					const pmCard = typeof pm === "object" && pm !== null ? pm.card : null;
					if (pmId) {
						setProviderMethodId(pmId);
						if (pmCard?.last4) setAddedCardPreview({
							brand: pmCard.brand ?? "",
							last4: pmCard.last4,
							expMonth: pmCard.exp_month ?? 0,
							expYear: pmCard.exp_year ?? 0
						});
						setIsRecovery(true);
						setRequiresState(isUsLocaleRef.current);
						setShowConfirmStep(true);
						setIsStripeLoading(false);
						return;
					}
				}
				const elements = stripe.elements({
					clientSecret: secret,
					appearance: getStripeAppearanceFromTheme(theme)
				});
				elementsRef.current = elements;
				const paymentElement = elements.create("payment");
				currentPaymentElement = paymentElement;
				paymentElementRef.current = paymentElement;
				await new Promise((resolve) => setTimeout(resolve, 50));
				const container = stripeContainerRef.current;
				if (!mounted || !container) {
					setIsStripeLoading(false);
					return;
				}
				containerForCleanup = container;
				try {
					paymentElement.mount(container);
					if (mounted) setIsStripeLoading(false);
				} catch (mountError) {
					if (mounted) {
						setError(t("Failed to mount payment form. Please try again."));
						setIsStripeLoading(false);
						console.error("Stripe mount error:", mountError);
					}
				}
			} catch (err) {
				if (mounted) {
					setError(err instanceof Error ? err.message : t("Failed to initialize payment form"));
					setIsStripeLoading(false);
					console.error("Stripe initialization error:", err);
				}
			}
		}
		const timeoutId = setTimeout(initializeStripe, 100);
		return () => {
			clearTimeout(timeoutId);
			hasInitialized = false;
			mounted = false;
			requestAnimationFrame(() => {
				if (currentPaymentElement && containerForCleanup?.parentNode) try {
					currentPaymentElement.unmount();
				} catch {}
				currentPaymentElement = null;
				containerForCleanup = null;
				paymentElementRef.current = null;
				if (elementsRef.current) elementsRef.current = null;
			});
		};
	}, [
		open,
		hasStripePublicKey,
		stripePublishableKey,
		theme
	]);
	useEffect(() => {
		if (!open) {
			submitAbortRef.current?.abort();
			submitAbortRef.current = null;
			setCardholderName("");
			setSelectedState("");
			setShowConfirmStep(false);
			setRequiresState(false);
			setIsRecovery(false);
			setError(null);
			setPaymentMethodId(null);
			setClientSecret(null);
			setProviderMethodId(null);
			setAddedCardPreview(null);
			setIsStripeLoading(true);
		}
	}, [open]);
	useEffect(() => {
		return () => {
			submitAbortRef.current?.abort();
			submitAbortRef.current = null;
		};
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!cardholderName.trim()) {
			setError(t("Please enter a cardholder name"));
			return;
		}
		if (showConfirmStep && requiresState && !selectedState) {
			setError(t("Please select a state"));
			return;
		}
		if (!paymentMethodId) {
			setError(t("Payment form not ready. Please try again."));
			return;
		}
		submitAbortRef.current?.abort();
		const controller = new AbortController();
		submitAbortRef.current = controller;
		const { signal } = controller;
		const aborted = () => signal.aborted;
		try {
			setError(null);
			let resolvedProviderMethodId = providerMethodId;
			if (!resolvedProviderMethodId) {
				if (!stripeRef.current || !elementsRef.current || !clientSecret) {
					setError(t("Payment form not ready. Please try again."));
					return;
				}
				const { setupIntent: existingIntent } = await stripeRef.current.retrieveSetupIntent(clientSecret);
				if (aborted()) return;
				let finalIntent = existingIntent ?? null;
				let initialPmCard = null;
				if (finalIntent?.status !== "succeeded") {
					await elementsRef.current.submit();
					if (aborted()) return;
					const { setupIntent, error: stripeError } = await stripeRef.current.confirmSetup({
						elements: elementsRef.current,
						clientSecret,
						confirmParams: {
							return_url: typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : "",
							payment_method_data: { billing_details: { name: cardholderName.trim() } },
							expand: ["payment_method"]
						},
						redirect: "if_required"
					});
					if (aborted()) return;
					if (stripeError) throw new Error(stripeError.message);
					if (setupIntent?.payment_method && typeof setupIntent.payment_method === "object") initialPmCard = setupIntent.payment_method.card ?? null;
					finalIntent = setupIntent;
					if (finalIntent?.status === "requires_action") {
						const { setupIntent: next, error: actionError } = await stripeRef.current.handleNextAction({ clientSecret });
						if (aborted()) return;
						if (actionError) throw new Error(actionError.message ?? t("Authentication failed"));
						finalIntent = next ?? finalIntent;
					}
				}
				if (!finalIntent || finalIntent.status !== "succeeded") throw new Error(finalIntent?.last_setup_error?.message ?? (finalIntent?.status === "requires_payment_method" ? t("The card was declined or authentication was cancelled. Please try again or use a different card.") : `${t("Payment setup did not complete")} (status: ${finalIntent?.status ?? "unknown"}).`));
				const stripePaymentMethod = finalIntent.payment_method;
				if (!stripePaymentMethod) throw new Error(t("Invalid payment method response"));
				resolvedProviderMethodId = typeof stripePaymentMethod === "string" ? stripePaymentMethod : stripePaymentMethod.id;
				const pmCard = typeof stripePaymentMethod === "object" && stripePaymentMethod.card ? stripePaymentMethod.card : initialPmCard;
				if (pmCard?.last4) setAddedCardPreview({
					brand: pmCard.brand ?? "",
					last4: pmCard.last4,
					expMonth: pmCard.exp_month ?? 0,
					expYear: pmCard.exp_year ?? 0
				});
				if (isUsLocaleRef.current && !showConfirmStep) {
					setProviderMethodId(resolvedProviderMethodId);
					setRequiresState(true);
					setShowConfirmStep(true);
					return;
				}
			}
			await setPaymentMethodProviderMutation.mutateAsync({
				paymentMethodId,
				providerMethodId: resolvedProviderMethodId,
				name: cardholderName.trim(),
				state: selectedState || void 0
			});
			if (aborted()) return;
			if (organizationId) {
				if (isBackup) await setBackupPaymentMethodMutation.mutateAsync({
					organizationId,
					paymentMethodId
				});
				else await setDefaultPaymentMethodMutation.mutateAsync({
					organizationId,
					paymentMethodId
				});
				if (aborted()) return;
			}
			toast.success(organizationId ? t("Payment method has been added to your organization") : t("A new payment method has been added to your account"));
			onSuccess?.();
		} catch (err) {
			if (aborted()) return;
			setError(err instanceof Error ? err.message : t("Failed to add payment method"));
		} finally {
			if (submitAbortRef.current === controller) submitAbortRef.current = null;
		}
	};
	const isLoading = isStripeLoading || createPaymentMethodMutation.isPending || setPaymentMethodProviderMutation.isPending || setDefaultPaymentMethodMutation.isPending || setBackupPaymentMethodMutation.isPending;
	if (!hasStripePublicKey) return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-4", variant === "dialog" ? "px-6 pb-4" : void 0),
		children: [/* @__PURE__ */ jsx("div", {
			className: "rounded-md bg-yellow-500/10 border border-yellow-500/20 px-3 py-2",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-yellow-600 dark:text-yellow-400",
				children: t("Stripe payment processing is not configured. Please ensure VITE_STRIPE_PUBLISHABLE_KEY is set in your environment.")
			})
		}), onCancel && /* @__PURE__ */ jsx("div", {
			className: cn("flex justify-end gap-2", variant === "dialog" && "-mx-6 -mb-4 px-6 py-4 border-t border-border bg-muted/30"),
			children: /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: variant === "inline" ? "sm" : void 0,
				onClick: onCancel,
				children: t("Close")
			})
		})]
	});
	const buttonSize = variant === "inline" ? "sm" : void 0;
	const buttonClass = variant === "inline" ? "h-8 text-[13px]" : void 0;
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: cn("space-y-4", variant === "dialog" ? "px-6 pb-4" : void 0),
		children: [
			!showConfirmStep ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "cardholder-name",
					className: "text-[13px]",
					children: [
						t("Cardholder name"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-destructive",
							children: "*"
						})
					]
				}), /* @__PURE__ */ jsx(Input, {
					id: "cardholder-name",
					value: cardholderName,
					onChange: (e) => setCardholderName(e.target.value),
					placeholder: "John Doe",
					className: "h-9 text-[13px]",
					disabled: isLoading
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-h-[200px] relative",
				children: [/* @__PURE__ */ jsx("div", {
					ref: stripeContainerRef,
					className: "min-h-[200px]"
				}), isStripeLoading && /* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80",
					children: [/* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Loading payment form...")
					})]
				})]
			}, open ? `stripe-${paymentMethodId || "new"}` : "stripe-closed")] }) : /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					addedCardPreview ? /* @__PURE__ */ jsxs("div", {
						className: "rounded-md border border-border bg-muted/30 px-3 py-2.5",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
								children: t("Card added")
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-foreground mt-1 capitalize",
								children: [
									addedCardPreview.brand,
									" ",
									maskCardNumber(addedCardPreview.last4)
								]
							}),
							addedCardPreview.expMonth > 0 && addedCardPreview.expYear > 0 && /* @__PURE__ */ jsxs("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: [
									t("Expires"),
									" ",
									String(addedCardPreview.expMonth).padStart(2, "0"),
									"/",
									String(addedCardPreview.expYear).slice(-2)
								]
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						className: "rounded-md border border-border bg-muted/30 px-3 py-2.5",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide",
							children: t("Card added")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-foreground mt-1",
							children: t("A card was entered in a previous attempt. Complete the details below to finish adding it.")
						})]
					}),
					isRecovery && /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "cardholder-name-recover",
							className: "text-[13px]",
							children: [
								t("Cardholder name"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-destructive",
									children: "*"
								})
							]
						}), /* @__PURE__ */ jsx(Input, {
							id: "cardholder-name-recover",
							value: cardholderName,
							onChange: (e) => setCardholderName(e.target.value),
							placeholder: "John Doe",
							className: "h-9 text-[13px]",
							disabled: isLoading
						})]
					}),
					requiresState && /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "state",
							className: "text-[13px]",
							children: [
								t("State"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-destructive",
									children: "*"
								})
							]
						}), /* @__PURE__ */ jsxs(Select, {
							value: selectedState,
							onValueChange: setSelectedState,
							disabled: isLoading,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								id: "state",
								className: "h-9 text-[13px]",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select a state") })
							}), /* @__PURE__ */ jsx(SelectContent, { children: US_STATES.map((state) => /* @__PURE__ */ jsx(SelectItem, {
								value: state.value,
								children: state.label
							}, state.value)) })]
						})]
					})
				]
			}),
			error && /* @__PURE__ */ jsx("div", {
				className: cn("rounded-lg border px-3 py-2", "border-red-500/30 bg-red-500/5"),
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-red-600 dark:text-red-400",
					children: error
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex items-center justify-end gap-2", variant === "dialog" && "-mx-6 -mb-4 px-6 py-4 border-t border-border bg-muted/30 flex-col-reverse sm:flex-row sm:justify-end"),
				children: [onCancel && /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: buttonSize,
					className: buttonClass,
					onClick: onCancel,
					disabled: isLoading,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					size: buttonSize,
					className: buttonClass,
					disabled: isLoading || !cardholderName.trim() || showConfirmStep && requiresState && !selectedState,
					children: showConfirmStep ? t("Save") : t("Add")
				})]
			})
		]
	});
}
function PaymentModal({ open, onOpenChange, organizationId, isBackup = false, onSuccess, elevatedForWizard = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: cn("sm:max-w-md p-0", elevatedForWizard && "z-[9999]"),
			overlayClassName: elevatedForWizard ? "z-[9999]" : void 0,
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add payment method") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Enter your card details to add a new payment method.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "pt-4",
					children: /* @__PURE__ */ jsx(PaymentMethodForm, {
						open,
						organizationId,
						isBackup,
						onSuccess: () => {
							onOpenChange(false);
							onSuccess?.();
						},
						onCancel: () => onOpenChange(false),
						variant: "dialog"
					})
				})
			]
		})
	});
}
export { PaymentMethodBrandAvatar as n, PaymentModal as t };
