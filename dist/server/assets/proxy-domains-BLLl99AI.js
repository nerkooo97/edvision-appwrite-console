import { d as sdk, s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import { Query } from "@appwrite.io/console";
import { parse } from "tldts";
function proxyRuleServesActiveDeployment(rule, activeDeploymentId) {
	if (!activeDeploymentId || rule.type !== "deployment") return false;
	if (rule.redirectUrl) return false;
	if (rule.deploymentVcsProviderBranch) return rule.deploymentId === activeDeploymentId;
	return true;
}
const DOMAIN_REGEX = /^(?!-)[A-Za-z0-9-]+([\-.]{1}[a-z0-9]+)*\.[A-Za-z]{2,18}$/;
function isValidDomain(domain) {
	if (!domain || !domain.trim()) return false;
	const normalized = domain.trim().toLowerCase();
	return DOMAIN_REGEX.test(normalized);
}
function getApexDomain(domain) {
	if (!domain?.trim()) return null;
	return parse(domain.trim().toLowerCase()).domain ?? null;
}
function isCloud() {
	try {
		return getBaseEndpoint().includes("cloud.appwrite.io");
	} catch {
		return false;
	}
}
function isBuiltInSiteSubdomain(domain) {
	if (!domain?.trim()) return false;
	const d = domain.trim().toLowerCase();
	return d.endsWith(".appwrite.site") || d.includes("_app_domain_sites");
}
async function ensureApexDomainInOrganization(teamId, domain, options) {
	if (!isCloud() || !teamId || !domain?.trim()) return;
	if (options?.skipForSites && isBuiltInSiteSubdomain(domain)) return;
	const apex = getApexDomain(domain);
	if (!apex) return;
	try {
		const { domains } = await sdk.forConsole.domains.list({ queries: [Query.equal("teamId", teamId), Query.equal("domain", apex)] });
		if (domains && domains.length > 0) return;
	} catch {}
	try {
		await sdk.forConsole.domains.create({
			teamId,
			domain: apex
		});
	} catch (err) {
		const e = err;
		if (e?.type === "domain_already_exists" || e?.message?.includes("already exists")) return;
		throw err;
	}
}
export { proxyRuleServesActiveDeployment as i, getApexDomain as n, isValidDomain as r, ensureApexDomainInOrganization as t };
