import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { loadStripe } from "@stripe/stripe-js";
var stripePromise = null;
function getStripeInstance(publishableKey) {
	if (!publishableKey) return Promise.resolve(null);
	if (!stripePromise) stripePromise = loadStripe(publishableKey);
	return stripePromise;
}
function getStripeAppearance(theme) {
	if (theme === "dark" || theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) return {
		theme: "night",
		variables: {
			colorPrimary: "#3b82f6",
			colorBackground: "#0a0a0a",
			colorText: "#ffffff",
			colorDanger: "#ef4444",
			fontFamily: "system-ui, sans-serif",
			spacingUnit: "4px",
			borderRadius: "8px"
		}
	};
	return {
		theme: "stripe",
		variables: {
			colorPrimary: "#3b82f6",
			colorBackground: "#ffffff",
			colorText: "#0a0a0a",
			colorDanger: "#ef4444",
			fontFamily: "system-ui, sans-serif",
			spacingUnit: "4px",
			borderRadius: "8px"
		}
	};
}
function getStripeAppearanceFromTheme(theme) {
	return getStripeAppearance(theme);
}
async function confirmPayment(config) {
	const envKey = getRuntimeConfig().stripePublishableKey || void 0;
	const stripe = await getStripeInstance(config.publishableKey ?? (typeof window !== "undefined" ? window.__STRIPE_PUBLISHABLE_KEY__ ?? envKey : envKey));
	if (!stripe) throw new Error("Stripe not available");
	const { paymentIntent, error: retrieveError } = await stripe.retrievePaymentIntent(config.clientSecret);
	if (retrieveError) throw new Error(retrieveError.message ?? "Failed to retrieve payment status");
	const status = paymentIntent?.status;
	if (status === "succeeded" || status === "processing" || status === "requires_capture") return;
	if (status === "requires_payment_method" || status === "requires_confirmation" || status === "requires_action") {
		if (status === "requires_payment_method" && !config.paymentMethod) throw new Error("The card must be re-entered to complete this payment. Please try again with a different payment method.");
		const confirmData = config.paymentMethod ? { payment_method: config.paymentMethod } : void 0;
		const { error, paymentIntent: updatedIntent } = await stripe.confirmCardPayment(config.clientSecret, confirmData);
		if (error) throw new Error(error.message ?? "Payment confirmation failed");
		if (updatedIntent?.status === "requires_payment_method") throw new Error("Authentication was cancelled. Please try again or use a different payment method.");
		if (updatedIntent && updatedIntent.status !== "succeeded" && updatedIntent.status !== "processing" && updatedIntent.status !== "requires_capture") throw new Error(`Payment did not complete (status: ${updatedIntent.status}).`);
		return;
	}
	throw new Error(`Payment cannot be completed in its current state (${status ?? "unknown"}).`);
}
export { getStripeAppearanceFromTheme as n, getStripeInstance as r, confirmPayment as t };
