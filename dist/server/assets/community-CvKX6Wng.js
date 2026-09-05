import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { n as getMarketingPageMetaTags } from "./route-meta-CfD66bzz.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var MOCK_ISSUES = [
	{
		number: 12530,
		url: "https://github.com/appwrite/appwrite/pull/12530",
		title: "Refactor Projects permission test coverage",
		repository: "appwrite/appwrite",
		tags: []
	},
	{
		number: 12529,
		url: "https://github.com/appwrite/appwrite/pull/12529",
		title: "fix: attribute default value persistence bug",
		repository: "appwrite/appwrite",
		tags: []
	},
	{
		number: 12528,
		url: "https://github.com/appwrite/appwrite/pull/12528",
		title: "fix: handle null name in user creation",
		repository: "appwrite/appwrite",
		tags: []
	},
	{
		number: 12527,
		url: "https://github.com/appwrite/appwrite/pull/12527",
		title: "fix: account deletion flow improvements",
		repository: "appwrite/appwrite",
		tags: []
	},
	{
		number: 12526,
		url: "https://github.com/appwrite/appwrite/pull/12526",
		title: "fix: add CORS headers to GraphQL endpoint",
		repository: "appwrite/appwrite",
		tags: []
	},
	{
		number: 12525,
		url: "https://github.com/appwrite/appwrite/pull/12525",
		title: "feat: add emailCanonical to user model",
		repository: "appwrite/appwrite",
		tags: []
	}
];
async function fetchCommunityGitHubIssues() {
	try {
		const issues = await (await fetch("https://api.github.com/repos/appwrite/appwrite/issues?state=open&per_page=6")).json();
		if (!Array.isArray(issues) || issues?.message?.includes("API rate limit exceeded")) return MOCK_ISSUES;
		return issues.filter((issue) => !issue.pull_request).slice(0, 6).map((issue) => ({
			number: issue.number,
			url: issue.html_url,
			title: issue.title,
			repository: issue.repository_url.replace("https://api.github.com/repos/", ""),
			tags: issue.labels.map((label) => label.name).slice(0, 3)
		}));
	} catch {
		return MOCK_ISSUES;
	}
}
var $$splitComponentImporter = () => import("./community-DEOlQxSl.js");
const Route = createFileRoute("/_marketing/community")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Community",
		description: "Join our vibrant community of developers. Ask questions, contribute solutions, and inspire others to improve the backend development experience."
	}) }),
	loader: async ({ context }) => {
		return { issues: await fetchCommunityGitHubIssues() };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
