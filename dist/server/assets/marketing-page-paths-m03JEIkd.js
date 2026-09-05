const MARKETING_PAGE_PATHS = [
	"/home",
	"/pricing",
	"/privacy",
	"/terms",
	"/cookies",
	"/baa",
	"/company",
	"/startups",
	"/education",
	"/partners",
	"/enterprise",
	"/affiliates",
	"/community",
	"/changelog",
	"/blog",
	"/assets",
	"/products/auth",
	"/products/databases",
	"/products/storage",
	"/products/functions",
	"/products/messaging",
	"/products/sites",
	"/domains",
	"/integrations",
	"/llms/txt",
	"/llms-full/txt"
];
function normalizeMarketingPath(pathname) {
	return pathname.replace(/\/+$/, "") || "/";
}
export { normalizeMarketingPath as n, MARKETING_PAGE_PATHS as t };
