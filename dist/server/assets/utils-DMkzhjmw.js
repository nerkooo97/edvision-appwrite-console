import { r as formatLocalizedDateTime } from "./date-format-BD1j7PxK.js";
function formatCurrency(amount, currency = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(amount);
}
function formatDate(date, options = {
	month: "short",
	day: "numeric",
	year: "numeric"
}) {
	return formatLocalizedDateTime(new Date(date), options);
}
function maskCardNumber(last4) {
	return `•••• •••• •••• ${last4}`;
}
function formatCardExpiry(month, year) {
	return `${month.toString().padStart(2, "0")}/${year.toString().slice(-2)}`;
}
var CARD_BRAND_LABELS = {
	visa: "Visa",
	mastercard: "Mastercard",
	amex: "American Express",
	american_express: "American Express",
	discover: "Discover",
	diners: "Diners Club",
	diners_club: "Diners Club",
	jcb: "JCB",
	unionpay: "UnionPay",
	maestro: "Maestro",
	elo: "Elo",
	hipercard: "Hipercard",
	mir: "MIR",
	rupay: "RuPay",
	argencard: "Argencard",
	cabal: "Cabal",
	cencosud: "Cencosud",
	naranja: "Naranja",
	"targeta-shopping": "Tarjeta Shopping"
};
function normalizePaymentCardBrand(brand) {
	return brand?.trim().toLowerCase().replace(/[\s-]+/g, "_") || "";
}
function formatPaymentCardBrand(brand) {
	const b = normalizePaymentCardBrand(brand);
	if (CARD_BRAND_LABELS[b]) return CARD_BRAND_LABELS[b];
	if (!b) return "Card";
	return b.split(/[\s_]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}
function formatPaymentMethodSummary(method, options) {
	if (!method.last4?.trim()) return method.name?.trim() || "Card";
	let out = `${formatPaymentCardBrand(method.brand)} ending in ${method.last4}`;
	if (options?.includeExpiry && method.expiryMonth && method.expiryYear) out += ` · Expires ${formatCardExpiry(method.expiryMonth, method.expiryYear)}`;
	return out;
}
function asOrganizationPaymentRefs(organization) {
	return organization;
}
function isSubscriptionFailedInvoiceWithError(failedInvoice) {
	return !!failedInvoice && failedInvoice.type === "subscription" && !!failedInvoice.lastError;
}
export { formatPaymentCardBrand as a, maskCardNumber as c, formatDate as i, formatCardExpiry as n, formatPaymentMethodSummary as o, formatCurrency as r, isSubscriptionFailedInvoiceWithError as s, asOrganizationPaymentRefs as t };
