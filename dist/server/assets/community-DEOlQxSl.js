import "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import { t as MARKETING_SOCIAL_STATS } from "./social-stats-X1CQqP0k.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./route-meta-CfD66bzz.js";
import { t as Route$1 } from "./community-CvKX6Wng.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, l as MarketingStatGrid, n as MarketingCtaSection, s as MarketingInvolvementCards, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Bug, FileText, Github, HeartHandshake, Lightbulb, Mic, Video } from "lucide-react";
const communityHero = {
	eyebrow: "Community",
	title: "Built by a community of 800+ contributors",
	description: "Inspire and get inspired. Join Appwrite's community of maintainers and contributors and help us make Appwrite better for developers worldwide."
};
const communityContributors = {
	title: "The power of open source benefits us all",
	description: "See contributors of Appwrite since 2019 and discover how you can start contributing.",
	contributorsUrl: "https://github.com/appwrite/appwrite/graphs/contributors"
};
const communityGetInvolved = {
	title: "Get involved",
	description: "With every contribution, Appwrite gets better for all of us. Start contributing today.",
	issuesTitle: "Check our Open Issues",
	issuesDescription: "Anyone can join and help Appwrite become better.",
	issuesUrl: "https://github.com/appwrite/appwrite/issues"
};
const communityHelpCards = [
	{
		title: "Create content",
		description: "Help others discover Appwrite with videos and blogs.",
		icon: Video
	},
	{
		title: "Present at meetups",
		description: "Share your experience and represent Appwrite in public.",
		icon: Mic
	},
	{
		title: "Report bugs",
		description: "Find bugs and submit PRs to fix them.",
		icon: Bug
	},
	{
		title: "Submit new ideas",
		description: "Suggest features, integrations, or SDKs for our roadmap.",
		icon: Lightbulb
	},
	{
		title: "Improve documentation",
		description: "Find improvements in our docs and improve accessibility.",
		icon: FileText
	},
	{
		title: "Helping others",
		description: "Support developers with their projects and contributions.",
		icon: HeartHandshake
	}
];
const communityShowcase = {
	title: "Inspire and get inspired",
	description: "Visit our showcase website built with Appwrite to find inspiration for your projects or to showcase what you have built.",
	href: "https://builtwith.appwrite.io"
};
const communityProjects = [
	{
		title: "Refetch.io",
		description: "Open-source alternative to Hacker News.",
		image: "https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/68b984b5000e9ce4e9e6/preview?width=1280&output=webp&project=builtWithAppwrite",
		href: "https://builtwith.appwrite.io/projects/68b69752de6ca9dd5313/"
	},
	{
		title: "Auth UI",
		description: "Appwrite-powered authentication screens generator for any application.",
		image: "https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/64803bb4f34eb4b05ee3/preview?width=800&output=webp&project=builtWithAppwrite",
		href: "https://builtwith.appwrite.io/projects/6467cedd4502d0e29205/"
	},
	{
		title: "uCanEarn",
		description: "Appwrite-powered platform where you can sell your digital products online.",
		image: "/images/community/projects/ucanearn.avif",
		href: "https://builtwith.appwrite.io/projects/648606ad9cd179190b28/"
	}
];
const communityPlatforms = {
	title: "Visit the community",
	description: "Discover Appwrite's community across platforms and join the fun."
};
const communityCta = { title: "Start building with Appwrite today" };
var METRICS = [
	{
		value: MARKETING_SOCIAL_STATS.github.stat,
		label: "GitHub Stars"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.pullRequests,
		label: "Pull Requests"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.commits,
		label: "Commits"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.issues,
		label: "Issues"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.openIssues,
		label: "Open Issues"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.closedIssues,
		label: "Closed Issues"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.forks,
		label: "Forks"
	},
	{
		value: MARKETING_SOCIAL_STATS.github.contributors,
		label: "Contributors"
	}
];
function SocialIconMask({ icon, label, className = "h-8 w-8" }) {
	return /* @__PURE__ */ jsx("span", {
		className: `inline-block shrink-0 bg-foreground ${className}`,
		style: {
			WebkitMaskImage: `url(${icon})`,
			maskImage: `url(${icon})`,
			WebkitMaskSize: "contain",
			maskSize: "contain",
			WebkitMaskRepeat: "no-repeat",
			maskRepeat: "no-repeat",
			WebkitMaskPosition: "center",
			maskPosition: "center"
		},
		role: "img",
		"aria-label": label
	});
}
var COMMUNITY_PLATFORM_CARDS = [
	{
		label: "Discord",
		href: MARKETING_SOCIAL_STATS.discord.link,
		icon: "/icons/discord-simple.svg",
		stat: MARKETING_SOCIAL_STATS.discord.stat,
		statLabel: "members"
	},
	{
		label: "X",
		href: MARKETING_SOCIAL_STATS.twitter.link,
		icon: "/icons/x.svg",
		stat: MARKETING_SOCIAL_STATS.twitter.stat,
		statLabel: "followers"
	},
	{
		label: "GitHub",
		href: MARKETING_SOCIAL_STATS.github.link,
		icon: "/icons/github-circle.svg",
		stat: MARKETING_SOCIAL_STATS.github.stat,
		statLabel: "stargazers"
	},
	{
		label: "YouTube",
		href: MARKETING_SOCIAL_STATS.youtube.link,
		icon: "/icons/youtube.svg",
		stat: MARKETING_SOCIAL_STATS.youtube.stat,
		statLabel: "subscribers"
	}
];
function View({ issues }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsxs(MarketingHeroSection, {
				eyebrow: communityHero.eyebrow,
				title: communityHero.title,
				description: communityHero.description,
				align: "left",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx("a", {
						href: MARKETING_SOCIAL_STATS.discord.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: t("Join our Discord")
					})
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: MARKETING_SOCIAL_STATS.github.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(Github, { className: "me-1.5 h-4 w-4" }), MARKETING_SOCIAL_STATS.github.stat]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsx(MarketingStatGrid, { items: [...METRICS] })
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative border-b border-border bg-muted/20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, { tone: "purple" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: communityContributors.title,
						description: communityContributors.description,
						size: "md"
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "mt-8",
						asChild: true,
						children: /* @__PURE__ */ jsx("a", {
							href: communityContributors.contributorsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: t("View all contributors")
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							title: communityGetInvolved.title,
							description: communityGetInvolved.description,
							size: "md"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 overflow-hidden rounded-xl border border-border bg-card/50",
							children: /* @__PURE__ */ jsxs("div", {
								className: marketingSplitLayoutClassName({ className: "p-6 sm:p-8" }),
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t(communityGetInvolved.issuesTitle)
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] leading-6 text-muted-foreground",
										children: t(communityGetInvolved.issuesDescription)
									}),
									/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										className: "mt-6",
										asChild: true,
										children: /* @__PURE__ */ jsxs("a", {
											href: communityGetInvolved.issuesUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [/* @__PURE__ */ jsx(Github, { className: "me-1.5 h-4 w-4" }), t("View all Open Issues")]
										})
									})
								] }), /* @__PURE__ */ jsx("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
										className: "hover:bg-transparent border-b border-border",
										children: [/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: t("Issue #")
										}), /* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: t("Title")
										})]
									}) }), /* @__PURE__ */ jsx(TableBody, { children: issues.map((issue) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 whitespace-nowrap",
										children: /* @__PURE__ */ jsxs("span", {
											className: "text-[13px] text-muted-foreground",
											children: ["#", issue.number]
										})
									}), /* @__PURE__ */ jsxs(TableCell, {
										className: "px-4 py-3",
										children: [
											/* @__PURE__ */ jsx("a", {
												href: issue.url,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-[13px] font-medium link-neutral",
												children: issue.title
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "ms-1 text-[12px] text-muted-foreground",
												children: [
													"(",
													issue.repository,
													")"
												]
											}),
											issue.tags.length > 0 ? /* @__PURE__ */ jsx("div", {
												className: "mt-2 flex flex-wrap gap-2",
												children: issue.tags.map((tag) => /* @__PURE__ */ jsx(Badge, {
													variant: "info",
													className: "text-[10px]",
													children: tag
												}, tag))
											}) : null
										]
									})] }, issue.number)) })] })
								})]
							})
						}),
						/* @__PURE__ */ jsx(MarketingInvolvementCards, {
							className: "mt-12",
							title: t("Other ways to help"),
							items: communityHelpCards.map((card) => ({
								...card,
								external: false
							}))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-muted/10 py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(MarketingSectionHeading, {
							title: communityShowcase.title,
							description: communityShowcase.description,
							size: "md"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex justify-center",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ jsx("a", {
									href: communityShowcase.href,
									target: "_blank",
									rel: "noopener noreferrer",
									children: t("View all projects")
								})
							})
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-12 grid gap-4 md:grid-cols-3",
							children: communityProjects.map((project) => /* @__PURE__ */ jsx("li", {
								className: "overflow-hidden rounded-xl border border-border bg-card/50",
								children: /* @__PURE__ */ jsxs("a", {
									href: project.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group block h-full transition-colors hover:bg-accent/15",
									children: [/* @__PURE__ */ jsx("img", {
										src: project.image,
										alt: "",
										className: "aspect-[16/10] w-full border-b border-border object-cover",
										loading: "lazy"
									}), /* @__PURE__ */ jsxs("div", {
										className: "p-5",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-[14px] font-semibold text-foreground",
											children: project.title
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-2 text-[13px] leading-6 text-muted-foreground",
											children: t(project.description)
										})]
									})]
								})
							}, project.title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName(),
						children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: communityPlatforms.title,
							description: communityPlatforms.description
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid gap-3 sm:grid-cols-2",
							children: COMMUNITY_PLATFORM_CARDS.map((platform) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
								href: platform.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex min-h-[160px] flex-col rounded-xl border border-border bg-card/50 p-5 transition-colors hover:bg-accent/15",
								children: [/* @__PURE__ */ jsx(SocialIconMask, {
									icon: platform.icon,
									label: platform.label
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-auto font-aeonik-pro text-[18px] text-foreground",
									children: [
										platform.stat,
										" ",
										t(platform.statLabel)
									]
								})]
							}) }, platform.label))
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: communityCta.title,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/sign-up",
						search: { redirect: "/" },
						children: t("Get started")
					})
				})
			})
		]
	});
}
function CommunityPage() {
	const { issues } = Route$1.useLoaderData();
	return /* @__PURE__ */ jsx(View, { issues });
}
export { CommunityPage as component };
