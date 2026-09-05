import { d as sdk } from "./sdk-DjIJ_hjn.js";
const ADDON_KEY_PREMIUM_GEO_DB = "premiumGeoDB";
const ADDON_KEY_BAA = "baa";
function isPaymentAuthentication(result) {
	return !!result && typeof result === "object" && "clientSecret" in result && typeof result.clientSecret === "string";
}
function findActiveOrPendingAddon(addons, key) {
	return addons?.find((addon) => addon.key === key && (addon.status === "active" || addon.status === "pending"));
}
function isAddonScheduledForRemoval(addon) {
	return !!addon && addon.status === "active" && addon.nextValue === 0;
}
function hasUpgradeablePlanWithAddon(currentPlan, plans, addonKey) {
	if (!currentPlan) return false;
	for (const plan of Object.values(plans)) if (plan.order > currentPlan.order && plan.supportedAddons?.[addonKey]) return true;
	return false;
}
function getAddonConfirmSearchParams(search) {
	const params = new URLSearchParams(search);
	return {
		type: params.get("type"),
		addonId: params.get("addonId")
	};
}
async function resolveStripeProviderMethodId(params) {
	const { organizationId, paymentMethodId } = params;
	if (!organizationId || !paymentMethodId) return void 0;
	return (await sdk.forConsole.organizations.getPaymentMethod({
		organizationId,
		paymentMethodId
	})).providerMethodId || void 0;
}
export { hasUpgradeablePlanWithAddon as a, resolveStripeProviderMethodId as c, getAddonConfirmSearchParams as i, ADDON_KEY_PREMIUM_GEO_DB as n, isAddonScheduledForRemoval as o, findActiveOrPendingAddon as r, isPaymentAuthentication as s, ADDON_KEY_BAA as t };
