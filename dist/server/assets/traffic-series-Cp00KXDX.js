import { _ as getFirewallActionChartColor, l as FIREWALL_PASSED_CHART_COLOR } from "./FirewallImpactChart-CpZTWDfN.js";
import { WafRuleAction } from "@appwrite.io/console";
const FIREWALL_TRAFFIC_SERIES = [
	{
		key: "requests",
		label: "Passed",
		color: FIREWALL_PASSED_CHART_COLOR,
		gradientId: "firewall-requests-fill"
	},
	{
		key: "denied",
		label: "Denied",
		color: getFirewallActionChartColor(WafRuleAction.Deny),
		gradientId: "firewall-denied-fill"
	},
	{
		key: "challenged",
		label: "Challenged",
		color: getFirewallActionChartColor(WafRuleAction.Challenge),
		gradientId: "firewall-challenged-fill"
	},
	{
		key: "rateLimited",
		label: "Rate limited",
		color: getFirewallActionChartColor(WafRuleAction.RateLimit),
		gradientId: "firewall-rate-limited-fill"
	},
	{
		key: "redirected",
		label: "Redirected",
		color: getFirewallActionChartColor(WafRuleAction.Redirect),
		gradientId: "firewall-redirected-fill"
	}
];
function getFirewallTrafficSeriesTotals(points) {
	return points.reduce((totals, point) => ({
		requests: totals.requests + point.requests,
		denied: totals.denied + point.denied,
		challenged: totals.challenged + point.challenged,
		rateLimited: totals.rateLimited + point.rateLimited,
		redirected: totals.redirected + point.redirected
	}), {
		requests: 0,
		denied: 0,
		challenged: 0,
		rateLimited: 0,
		redirected: 0
	});
}
function sortFirewallTrafficSeriesByValueAsc(totals) {
	return [...FIREWALL_TRAFFIC_SERIES].sort((a, b) => {
		const diff = totals[a.key] - totals[b.key];
		if (diff !== 0) return diff;
		return FIREWALL_TRAFFIC_SERIES.findIndex((series) => series.key === a.key) - FIREWALL_TRAFFIC_SERIES.findIndex((series) => series.key === b.key);
	});
}
export { getFirewallTrafficSeriesTotals as n, sortFirewallTrafficSeriesByValueAsc as r, FIREWALL_TRAFFIC_SERIES as t };
