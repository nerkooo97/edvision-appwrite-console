import { t as DOCS_PAGES } from "./manifest-THOJt7eC.js";
var CATEGORY_ORDER = [
	"Web",
	"Mobile and native",
	"Server",
	"Auth",
	"Databases",
	"Storage",
	"Functions"
];
var FRAMEWORK_ORDER = [
	"React",
	"TanStack Start",
	"Next.js",
	"Vue",
	"Nuxt",
	"SvelteKit",
	"Stripe",
	"Refine",
	"Astro",
	"Flutter",
	"Android",
	"Apple"
];
function tutorialSlugFromStepOne(slug) {
	return slug.replace(/\/step-1$/, "");
}
function getTutorialsHubCategories() {
	const stepOneTutorials = DOCS_PAGES.filter((page) => page.layout === "tutorial" && page.step === 1);
	const byCategory = /* @__PURE__ */ new Map();
	for (const page of stepOneTutorials) {
		const category = page.category?.trim() || "Web";
		const framework = page.framework?.trim() || page.title;
		const href = `/docs/${tutorialSlugFromStepOne(page.slug)}/step-1`;
		const item = {
			title: page.title,
			framework,
			href,
			draft: page.draft === true
		};
		const existing = byCategory.get(category) ?? [];
		existing.push(item);
		byCategory.set(category, existing);
	}
	for (const [category, tutorials] of byCategory) {
		tutorials.sort((a, b) => {
			const frameworkIndexA = FRAMEWORK_ORDER.indexOf(a.framework);
			const frameworkIndexB = FRAMEWORK_ORDER.indexOf(b.framework);
			if (frameworkIndexA !== -1 || frameworkIndexB !== -1) {
				const orderA = frameworkIndexA === -1 ? Number.MAX_SAFE_INTEGER : frameworkIndexA;
				const orderB = frameworkIndexB === -1 ? Number.MAX_SAFE_INTEGER : frameworkIndexB;
				if (orderA !== orderB) return orderA - orderB;
			}
			return a.framework.localeCompare(b.framework);
		});
		byCategory.set(category, tutorials);
	}
	return Array.from(byCategory.entries()).sort(([a], [b]) => {
		const indexA = CATEGORY_ORDER.indexOf(a);
		const indexB = CATEGORY_ORDER.indexOf(b);
		const orderA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
		const orderB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
		if (orderA !== orderB) return orderA - orderB;
		return a.localeCompare(b);
	}).map(([title, tutorials]) => ({
		title,
		tutorials
	}));
}
export { getTutorialsHubCategories as t };
