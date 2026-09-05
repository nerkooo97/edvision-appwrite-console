function normalizeDomainParam(domain) {
	return domain?.trim().toLowerCase() || void 0;
}
function buildBuyDomainContinuePath(search = {}) {
	const params = new URLSearchParams();
	const domain = normalizeDomainParam(search.domain);
	if (domain) params.set("domain", domain);
	if (search.stage === "checkout") params.set("stage", "checkout");
	const query = params.toString();
	return query ? `/domains/continue?${query}` : "/domains/continue";
}
function buildBuyDomainWizardSearch(search = {}) {
	const normalized = {};
	const domain = normalizeDomainParam(search.domain);
	if (domain) normalized.domain = domain;
	if (search.stage === "checkout") normalized.stage = "checkout";
	return normalized;
}
function buildSignUpForDomainPath(search = {}) {
	return {
		to: "/sign-up",
		search: { redirect: buildBuyDomainContinuePath(search) }
	};
}
function buildSignInForDomainPath(search = {}) {
	return {
		to: "/sign-in",
		search: { redirect: buildBuyDomainContinuePath(search) }
	};
}
export { buildSignInForDomainPath as n, buildSignUpForDomainPath as r, buildBuyDomainWizardSearch as t };
