import { a as getMarketingPageUrl, u as isMarketingPageExternal } from "./urls-BIlyr2O2.js";
const POLICY_LINKS = [
	{
		slug: "terms",
		label: "Terms and Conditions",
		footerLabel: "Terms",
		path: "/terms"
	},
	{
		slug: "privacy",
		label: "Privacy Policy",
		footerLabel: "Privacy",
		path: "/privacy"
	},
	{
		slug: "cookies",
		label: "Cookies Policy",
		footerLabel: "Cookies",
		path: "/cookies"
	}
];
function resolvePolicyLink(link, marketingEnabled) {
	return {
		...link,
		href: getMarketingPageUrl(link.path, marketingEnabled),
		external: isMarketingPageExternal(marketingEnabled)
	};
}
function getFooterPolicyLinks(marketingEnabled) {
	return POLICY_LINKS.map((link) => {
		const resolved = resolvePolicyLink(link, marketingEnabled);
		return {
			label: link.footerLabel,
			href: resolved.href,
			external: resolved.external
		};
	});
}
function getRelatedPolicyLinks(current, marketingEnabled) {
	return POLICY_LINKS.filter((link) => link.slug !== current).map((link) => resolvePolicyLink(link, marketingEnabled));
}
export { getRelatedPolicyLinks as n, getFooterPolicyLinks as t };
