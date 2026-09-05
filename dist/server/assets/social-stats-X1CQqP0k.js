var github_stars_default = {
	stars: 57072,
	fetchedAt: "2026-08-21T07:12:26.113Z"
};
function formatStars(count) {
	if (count >= 1e3) return `${(count / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
	return String(count);
}
const MARKETING_SOCIAL_STATS = {
	github: {
		stat: formatStars(github_stars_default.stars),
		link: "https://github.com/appwrite/appwrite",
		commits: "27K+",
		pullRequests: "4.7K+",
		issues: "3K+",
		openIssues: "600+",
		closedIssues: "3.3K+",
		forks: "4.4K+",
		contributors: "800+"
	},
	discord: {
		stat: "23K+",
		link: "/discord"
	},
	twitter: {
		stat: "127K+",
		link: "https://twitter.com/intent/follow?screen_name=appwrite"
	},
	youtube: {
		stat: "13K+",
		link: "https://www.youtube.com/c/appwrite?sub_confirmation=1"
	}
};
export { MARKETING_SOCIAL_STATS as t };
