import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-profiles-D__E5Kgi.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./context-menu-D55xedo-.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { f as isSiteLinkExternal, g as resolveSiteLinkUrl, h as parseMarketingSitePagePath, m as parseDocsPagePath, p as parseBlogPagePath, s as getSiteLinkInternalPath } from "./urls-BIlyr2O2.js";
import { t as ImagePreviewGalleryDialog } from "./ImagePreviewGallery-CuJmaZOR.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights, s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as MarketingHeroSection } from "./MarketingSections-Dg1QJnZV.js";
import { t as PricingSectionHeading } from "./PricingSectionHeading-Bstz-ues.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Github, Megaphone, Newspaper, Rocket } from "lucide-react";
const companyFounder = {
	name: "Eldad Fux",
	title: "Founder & CEO",
	image: {
		src: "/images/company/eldad-fux.avif",
		alt: "Eldad Fux, Founder and CEO of Appwrite"
	},
	quote: "Start small, build consistently, and give things enough time to become real.",
	bio: [
		"Eldad discovered programming at a young age and built his career through open source, learning from developers and maintainers around the world while contributing back to the community that helped shape him as an engineer.",
		"In 2019, he launched Appwrite as a way of giving back to that same community. Driven by the belief that software development should be dramatically easier, faster, and accessible to anyone with an idea, he set out to remove much of the complexity that stands between developers and the products they want to build. What began as a side project has since grown into a platform used by hundreds of thousands of developers worldwide.",
		"Before Appwrite, Eldad co-founded Careerpage and served as its CTO. He also spent more than a decade at Walla!, where he joined as a junior developer and eventually became CTO. Throughout his career, he has remained passionate about building developer tools, supporting open source, and helping teams move faster with better software."
	],
	links: {
		website: "https://eldadfux.com",
		github: "https://github.com/eldadfux",
		twitter: "https://x.com/eldadfux",
		linkedin: "https://www.linkedin.com/in/eldadfux"
	}
};
const COMPANY_SECTION_IDS = {
	story: "story",
	founder: "founder",
	team: "team",
	investors: "investors",
	careers: "careers"
};
const companyPageSections = [
	{
		id: COMPANY_SECTION_IDS.story,
		label: "Our story"
	},
	{
		id: COMPANY_SECTION_IDS.team,
		label: "Team"
	},
	{
		id: COMPANY_SECTION_IDS.founder,
		label: "Founder"
	},
	{
		id: COMPANY_SECTION_IDS.investors,
		label: "Investors"
	},
	{
		id: COMPANY_SECTION_IDS.careers,
		label: "Careers"
	}
];
function SocialIconMask({ icon, label }) {
	return /* @__PURE__ */ jsx("span", {
		className: "h-4 w-4 bg-current",
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
var founderSocialLinks = [
	{
		id: "website",
		href: companyFounder.links.website,
		label: `${companyFounder.name} website`,
		icon: "/icons/globe.svg"
	},
	{
		id: "github",
		href: companyFounder.links.github,
		label: `${companyFounder.name} on GitHub`,
		icon: "/icons/github.svg"
	},
	{
		id: "twitter",
		href: companyFounder.links.twitter,
		label: `${companyFounder.name} on X`,
		icon: "/icons/x.svg"
	},
	{
		id: "linkedin",
		href: companyFounder.links.linkedin,
		label: `${companyFounder.name} on LinkedIn`,
		icon: "/icons/linkedin.svg"
	}
];
function CompanyFounder() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		id: COMPANY_SECTION_IDS.founder,
		className: "relative isolate scroll-mt-28 overflow-x-hidden border-b border-border",
		children: [/* @__PURE__ */ jsx(SectionSoftLight, {
			tone: "orange",
			position: "right",
			align: "center"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16",
			children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
				title: t("Founder"),
				size: "md",
				align: "left"
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] xl:gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center text-center lg:items-start lg:text-start",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: companyFounder.image.src,
							alt: companyFounder.image.alt,
							className: "size-20 rounded-full object-cover object-center sm:size-24",
							loading: "lazy",
							decoding: "async"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 font-aeonik-pro text-[18px] font-normal leading-tight text-foreground sm:text-[20px]",
							children: companyFounder.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[13px] text-muted-foreground sm:text-[14px]",
							children: t(companyFounder.title)
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex items-center justify-center gap-1 lg:justify-start",
							children: founderSocialLinks.map((link) => /* @__PURE__ */ jsx("a", {
								href: link.href,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": link.label,
								className: "flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								children: /* @__PURE__ */ jsx(SocialIconMask, {
									icon: link.icon,
									label: link.label
								})
							}, link.id))
						})
					]
				}), /* @__PURE__ */ jsxs("figure", {
					className: "min-w-0 text-center lg:text-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto w-fit max-w-2xl lg:mx-0",
						children: [/* @__PURE__ */ jsx("span", {
							className: "absolute end-full top-0.5 me-3 font-aeonik-pro text-[2rem] leading-none text-muted-foreground/30 sm:top-1 sm:me-4 sm:text-[2.25rem]",
							"aria-hidden": true,
							children: "“"
						}), /* @__PURE__ */ jsx("blockquote", {
							className: "text-center font-aeonik-pro text-balance text-[17px] font-normal leading-7 text-foreground sm:text-[18px] sm:leading-8 lg:text-start",
							children: t(companyFounder.quote)
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid grid-cols-1 gap-5 text-start md:grid-cols-2 md:gap-6 lg:mt-5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: companyFounder.bio.slice(0, 2).map((paragraph) => /* @__PURE__ */ jsx("p", {
								className: "text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7",
								children: t(paragraph)
							}, paragraph))
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7",
							children: companyFounder.bio[2] ? t(companyFounder.bio[2]) : null
						})]
					})]
				})]
			})]
		})]
	});
}
const companyHero = {
	title: "Unleashing creativity and innovation in every creator",
	lead: "Software development transforms our everyday lives, shaped by the creativity and innovation of developers and the AI agents they work with. At Appwrite, we enable them to build products the world loves by removing technical barriers with our backend platform.",
	mission: {
		title: "Our mission",
		body: "Eliminate friction and abstract complexity for every creator. We build Appwrite for agents and developers, giving them the tools and experience they need to create and innovate without limits and with minimum concerns."
	},
	platform: {
		title: "What we build",
		body: "A complete development platform, backed by the open source community, built to keep teams efficient by cutting context switching and integration overhead. From auth, databases, storage, and functions to MCP servers, Skills, and agent integrations, everything lives in one place so Appwrite moves with you from ideation to scale."
	},
	tagline: "Build like a team of hundreds."
};
function scrollToCompanySection(sectionId) {
	if (typeof document === "undefined") return;
	const main = document.getElementById("main-content");
	const el = document.getElementById(sectionId);
	if (!main || !el) return;
	const mainRect = main.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	const targetTop = main.scrollTop + elRect.top - mainRect.top - 112;
	main.scrollTo({
		top: Math.max(0, targetTop),
		behavior: "smooth"
	});
	if (typeof window !== "undefined") window.history.replaceState(null, "", `#${sectionId}`);
}
function scrollToCompanySectionFromHash() {
	if (typeof window === "undefined") return;
	const hash = window.location.hash.slice(1);
	if (!companyPageSections.some((section) => section.id === hash)) return;
	scrollToCompanySection(hash);
}
function HeroColumn({ title, body }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2.5",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-[15px] font-semibold text-foreground",
			children: t(title)
		}), /* @__PURE__ */ jsx("p", {
			className: "text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
			children: t(body)
		})]
	});
}
function CompanyHero() {
	const t = useT();
	return /* @__PURE__ */ jsx(MarketingHeroSection, {
		title: companyHero.title,
		description: companyHero.lead,
		wideFooter: true,
		footer: /* @__PURE__ */ jsxs("div", {
			className: "mt-10 border-t border-border/60 pt-8 text-start sm:mt-12 sm:pt-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 md:grid-cols-2 md:gap-0",
				children: [/* @__PURE__ */ jsx("div", {
					className: "md:pe-10 lg:pe-12",
					children: /* @__PURE__ */ jsx(HeroColumn, {
						title: companyHero.mission.title,
						body: companyHero.mission.body
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "md:border-s md:border-border/60 md:ps-10 lg:ps-12",
					children: /* @__PURE__ */ jsx(HeroColumn, {
						title: companyHero.platform.title,
						body: companyHero.platform.body
					})
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-8 text-[14px] font-medium text-foreground sm:mt-10 sm:text-[15px]",
				children: t(companyHero.tagline)
			})]
		}),
		children: /* @__PURE__ */ jsx(Button, {
			variant: "brandCta",
			size: "lg",
			className: "h-10 text-[14px]",
			onClick: () => scrollToCompanySection(COMPANY_SECTION_IDS.careers),
			children: t("Join the team")
		})
	});
}
function CompanySectionNav() {
	const t = useT();
	const [activeId, setActiveId] = useState(companyPageSections[0]?.id ?? "");
	useEffect(() => {
		scrollToCompanySectionFromHash();
	}, []);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActiveId(visible[0].target.id);
		}, {
			root: document.getElementById("main-content"),
			rootMargin: "-20% 0px -55% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const section of companyPageSections) {
			const element = document.getElementById(section.id);
			if (element) observer.observe(element);
		}
		return () => observer.disconnect();
	}, []);
	const handleClick = (event, sectionId) => {
		event.preventDefault();
		scrollToCompanySection(sectionId);
	};
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": t("Company page sections"),
		className: "relative z-[1] border-b border-border bg-background/80 backdrop-blur-sm",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4",
			children: /* @__PURE__ */ jsx("ul", {
				className: "flex flex-wrap items-center justify-center gap-2",
				children: companyPageSections.map((section) => {
					const isActive = activeId === section.id;
					return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${section.id}`,
						onClick: (event) => handleClick(event, section.id),
						className: cn("inline-flex h-8 items-center justify-center rounded-full border px-3.5 text-[12px] font-medium transition-colors", isActive ? "border-border bg-foreground text-background" : "border-border bg-card/50 text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
						"aria-current": isActive ? "location" : void 0,
						children: t(section.label)
					}) }, section.id);
				})
			})
		})
	});
}
const companyTeamIntro = {
	title: "Team Appwrite",
	description: "We are a remote-first, AI-native team built to stay lean. We recruit exceptional talent worldwide, communicate with clarity, and combine human judgment with AI to ship ambitious work at speed."
};
const companyTeamPhotos = [
	{
		id: "camp-5-group",
		src: "/images/company/team-camp-5.avif",
		alt: "The Appwrite team at Camp 5.0",
		caption: "Team Appwrite at Camp 5.0, Barcelona",
		gridClassName: "sm:col-span-2 lg:col-span-6",
		variant: "wide"
	},
	{
		id: "camp-3-nyc",
		src: "/images/company/team-camp-3-nyc.avif",
		alt: "The Appwrite team at Camp 3.0 on a rooftop in New York City",
		caption: "Team Appwrite at Camp 3.0, New York City",
		gridClassName: "sm:col-span-2 lg:col-span-6",
		variant: "wide"
	},
	{
		id: "barcelona-cafe",
		src: "/images/company/team-barcelona-cafe.avif",
		alt: "Appwrite team members working together at a cafe in Barcelona",
		caption: "Deep work over coffee in Barcelona during Camp",
		gridClassName: "lg:col-span-4"
	},
	{
		id: "init-prague-portraits",
		src: "/images/company/team-init-prague-portraits.avif",
		alt: "Appwrite team members during the first Init shoot in Prague",
		caption: "Behind the scenes: portrait setup for the first Init in Prague",
		gridClassName: "lg:col-span-4"
	},
	{
		id: "init-prague-monitor",
		src: "/images/company/team-init-prague-monitor.avif",
		alt: "On-set monitor during the first Init filming in Prague",
		caption: "Behind the scenes: reviewing takes on the first Init set in Prague",
		gridClassName: "lg:col-span-4"
	}
];
const companyTeamPillars = [
	{
		id: "ai-native",
		title: "AI-native team",
		body: "Appwrite is built for developers, agents, and AI-assisted workflows, and our team works the same way. We integrate AI into how we plan, build, ship, and support, pairing human judgment with tooling that helps us move faster without adding unnecessary overhead."
	},
	{
		id: "lean",
		title: "Lean and effective",
		body: "We strive to stay a smaller team that punches above its weight. That means clear priorities, async-first communication, and workflows designed for effectiveness. We minimize bureaucracy, keep decision-making close to the work, and use AI where it saves time so people can focus on high-impact work."
	},
	{
		id: "global",
		title: "Global and remote-first",
		body: "We hire the best people wherever they are. Being remote-first keeps us thoughtful about communication across time zones and cultures. We stay humble, treat each other with respect, and work to help everyone on the team do their best work."
	}
];
const companyTeamMetrics = [
	{
		id: "countries",
		value: "15+",
		label: "Countries"
	},
	{
		id: "continents",
		value: "5",
		label: "Continents"
	},
	{
		id: "remote",
		value: "100%",
		label: "Remote"
	}
];
const companyTeamValues = [
	{
		id: "structure",
		label: "Flat org structure"
	},
	{
		id: "communication",
		label: "Efficient communication"
	},
	{
		id: "ai",
		label: "AI-native"
	}
];
const companyTeamLinks = {
	evolutionBlog: "/blog/post/the-evolution-of-team-appwrite",
	cultureBlog: "/blog/post/building-culture-remote-camp"
};
const companyTeamCta = {
	title: "Join a lean, AI-native team",
	description: "Explore open roles or learn how Appwriters join from the community."
};
var COMPANY_TEAM_ROLE_COUNTS = [
	{
		id: "engineers",
		label: "Engineering",
		count: 13,
		barClassName: "bg-[var(--brand-cta)]"
	},
	{
		id: "community-marketing",
		label: "Community and marketing",
		count: 3,
		barClassName: "bg-[color-mix(in_oklch,var(--brand-cta)_68%,transparent)]"
	},
	{
		id: "ga",
		label: "G&A",
		count: 2,
		barClassName: "bg-[color-mix(in_oklch,var(--brand-cta)_42%,transparent)]"
	},
	{
		id: "business",
		label: "Business",
		count: 1,
		barClassName: "bg-[color-mix(in_oklch,var(--brand-cta)_24%,transparent)]"
	}
];
function toRolePercentages(roles) {
	const total = roles.reduce((sum, role) => sum + role.count, 0);
	if (total === 0) return roles.map(() => 0);
	const exact = roles.map((role) => role.count / total * 100);
	const floored = exact.map((value) => Math.floor(value));
	let remainder = 100 - floored.reduce((sum, value) => sum + value, 0);
	const order = exact.map((value, index) => ({
		index,
		remainder: value - floored[index]
	})).sort((a, b) => b.remainder - a.remainder);
	const percentages = [...floored];
	for (let i = 0; i < remainder; i += 1) {
		const target = order[i % order.length];
		if (target) percentages[target.index] += 1;
	}
	return percentages;
}
const companyTeamProductFirst = {
	title: "Product-first team",
	description: "We keep overhead lean and our investments close to the product. Most of our team is dedicated to creating products developers genuinely enjoy using."
};
const companyTeamRoleSegments = COMPANY_TEAM_ROLE_COUNTS.map((role, index) => ({
	id: role.id,
	label: role.label,
	percentage: toRolePercentages(COMPANY_TEAM_ROLE_COUNTS)[index] ?? 0,
	barClassName: role.barClassName
}));
function TeamMetricCell({ value, label }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10",
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-aeonik-pro text-[28px] font-normal leading-none tracking-tight text-foreground tabular-nums sm:text-[32px]",
			children: value
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]",
			children: t(label)
		})]
	});
}
function TeamSnapshotOverview() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-card/50",
		children: [/* @__PURE__ */ jsx("ul", {
			className: "grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0",
			children: companyTeamMetrics.map((metric) => /* @__PURE__ */ jsx("li", {
				className: "min-w-0",
				children: /* @__PURE__ */ jsx(TeamMetricCell, { ...metric })
			}, metric.id))
		}), /* @__PURE__ */ jsxs("div", {
			className: "border-t border-border bg-muted/20 px-4 py-4 sm:px-6 sm:py-5",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]",
				children: t("How we work")
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-3 flex flex-wrap items-center justify-center gap-2",
				children: companyTeamValues.map((value) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", {
					className: "inline-flex rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-foreground sm:text-[13px]",
					children: t(value.label)
				}) }, value.id))
			})]
		})]
	});
}
function TeamRoleBreakdown() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-2xl space-y-5 text-center",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t(companyTeamProductFirst.title)
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
			children: t(companyTeamProductFirst.description)
		})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-2 overflow-hidden rounded-md bg-muted/30",
			role: "img",
			"aria-label": `${t("Team composition:")} ${companyTeamRoleSegments.map((segment) => `${t(segment.label)} ${segment.percentage}%`).join(", ")}`,
			children: companyTeamRoleSegments.map((segment) => /* @__PURE__ */ jsx("div", {
				className: cn("h-full min-w-0 first:rounded-s-md last:rounded-e-md", segment.barClassName),
				style: { width: `${segment.percentage}%` },
				title: `${t(segment.label)}: ${segment.percentage}%`
			}, segment.id))
		}), /* @__PURE__ */ jsx("ul", {
			className: "mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2",
			children: companyTeamRoleSegments.map((segment) => /* @__PURE__ */ jsxs("li", {
				className: "flex min-w-0 items-center gap-2 text-[13px] text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: cn("size-2 shrink-0 rounded-full", segment.barClassName),
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: t(segment.label)
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "tabular-nums",
						children: [segment.percentage, "%"]
					})
				]
			}, segment.id))
		})] })]
	});
}
function TeamSnapshot() {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-12 space-y-12 border-t border-border pt-12 sm:mt-14 sm:space-y-14 sm:pt-14",
		children: [/* @__PURE__ */ jsx(TeamSnapshotOverview, {}), /* @__PURE__ */ jsx(TeamRoleBreakdown, {})]
	});
}
function TeamPhoto({ src, alt, caption, gridClassName, variant = "standard" }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("figure", {
		className: cn("min-w-0", gridClassName),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("overflow-hidden rounded-lg bg-muted/20", variant === "wide" ? "aspect-[3/2]" : "aspect-[4/3]"),
			children: /* @__PURE__ */ jsx("img", {
				src,
				alt: t(alt),
				className: "h-full w-full object-cover object-center",
				loading: "lazy",
				decoding: "async"
			})
		}), /* @__PURE__ */ jsx("figcaption", {
			className: "mt-2 text-[12px] leading-relaxed text-muted-foreground",
			children: t(caption)
		})]
	});
}
function TeamPhotoGrid() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5",
		children: companyTeamPhotos.map((photo) => /* @__PURE__ */ jsx(TeamPhoto, { ...photo }, photo.id))
	});
}
function TeamPillar({ title, body }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2.5 md:px-6 md:first:ps-0 md:last:pe-0",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t(title)
		}), /* @__PURE__ */ jsx("p", {
			className: "text-[14px] leading-7 text-muted-foreground",
			children: t(body)
		})]
	});
}
function TeamCta() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-12 flex flex-col gap-4 border-t border-border pt-12 sm:mt-14 sm:pt-14 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-[14px] font-medium text-foreground",
			children: t(companyTeamCta.title)
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: t(companyTeamCta.description)
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 flex-wrap gap-3",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "brandCta",
				onClick: () => scrollToCompanySection(COMPANY_SECTION_IDS.careers),
				children: t("View careers")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ jsxs(BlogPageAnchor, {
					href: companyTeamLinks.evolutionBlog,
					className: "gap-1.5",
					children: [t("How we hire"), /* @__PURE__ */ jsx(ArrowUpRight, {
						className: "size-3.5",
						"aria-hidden": true
					})]
				})
			})]
		})]
	});
}
function CompanyTeam() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		id: COMPANY_SECTION_IDS.team,
		className: "relative isolate scroll-mt-28 overflow-x-hidden border-b border-border",
		children: [/* @__PURE__ */ jsx(SectionSoftLight, {
			tone: "teal",
			position: "left",
			align: "top"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "font-aeonik-pro text-balance text-[28px] font-normal leading-none tracking-tight text-foreground sm:text-[36px]",
						children: [t(companyTeamIntro.title), /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-5 text-[14px] leading-7 text-muted-foreground sm:mt-6 sm:text-[15px]",
						children: t(companyTeamIntro.description)
					})]
				}),
				/* @__PURE__ */ jsx(TeamSnapshot, {}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 border-t border-border pt-12 sm:mt-14 sm:pt-14",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border",
						children: companyTeamPillars.map((pillar) => /* @__PURE__ */ jsx(TeamPillar, { ...pillar }, pillar.id))
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 border-t border-border pt-12 sm:mt-14 sm:pt-14",
					children: /* @__PURE__ */ jsx(TeamPhotoGrid, {})
				}),
				/* @__PURE__ */ jsx(TeamCta, {})
			]
		})]
	});
}
const companyTimelineIntro = "Appwrite began in 2019 as a founder-led open-source project built to give developers a consistent, predictable layer over cloud infrastructure. What started as a side project has grown into a platform used by hundreds of thousands of developers worldwide.";
function getTimelineMilestoneYear(date) {
	const match = date.match(/\b(20\d{2})\b/);
	return match ? Number(match[1]) : 0;
}
function groupTimelineMilestonesByYear(milestones) {
	const groups = [];
	for (const milestone of milestones) {
		const year = getTimelineMilestoneYear(milestone.date);
		const lastGroup = groups.at(-1);
		if (lastGroup?.year === year) {
			lastGroup.milestones.push(milestone);
			continue;
		}
		groups.push({
			year,
			milestones: [milestone]
		});
	}
	return groups;
}
const companyTimelineMilestones = [
	{
		id: "2019-launch",
		date: "September 2019",
		title: "Open-source launch",
		description: "Appwrite launched publicly as an open-source backend platform. Designed from the outset to abstract cloud complexity through familiar APIs and protocols, the project gained rapid traction in its first month, including strong visibility across developer communities.",
		category: "launch",
		images: [{
			src: "/images/company/first-release-console.jpg",
			alt: "The very first Appwrite Console"
		}],
		links: [{
			id: "github",
			label: "View on GitHub",
			href: "https://github.com/appwrite/appwrite",
			kind: "github"
		}, {
			id: "docs",
			label: "Getting started",
			href: "/docs",
			kind: "docs"
		}]
	},
	{
		id: "2021-seed",
		date: "May 2021",
		title: "Seed funding",
		description: "Appwrite raised $10M in seed funding led by Bessemer Venture Partners and Flybridge, with participation from Ibex Investors, Seedcamp, and the Abraham Fund. The round supported company formation, brought foundational engineering talent from the open-source contributor community, and expanded the investor and board network.",
		category: "funding",
		links: [{
			id: "zdnet",
			label: "Seed round coverage",
			href: "https://www.zdnet.com/article/open-source-backend-as-a-service-appwrite-gets-10m-seed-funding-to-commercialize-traction/",
			kind: "news"
		}]
	},
	{
		id: "2021-series-a",
		date: "December 2021",
		title: "Series A",
		description: "Appwrite completed a $27M Series A led by Tiger Global, with participation from existing investors, to accelerate product development and global growth.",
		category: "funding",
		links: [{
			id: "venturebeat",
			label: "Series A coverage",
			href: "https://venturebeat.com/business/appwrite-an-open-source-backend-as-a-service-provider-raises-27m",
			kind: "news"
		}]
	},
	{
		id: "2022-oss-fund",
		date: "May 2022",
		title: "Open source fund",
		description: "Following the Series A, Appwrite established a $50,000 fund to support independent open-source projects, reinforcing the company's commitment to the broader ecosystem.",
		category: "community",
		links: [{
			id: "oss-fund",
			label: "OSS fund announcement",
			href: "https://dev.to/appwrite/announcing-the-appwrite-oss-fund-4ilg",
			kind: "news"
		}]
	},
	{
		id: "2022-1-0",
		date: "September 2022",
		title: "Appwrite 1.0",
		description: "The first stable release marked a major milestone after years of community-driven development, spanning thousands of commits and contributions from developers worldwide.",
		category: "product",
		links: [{
			id: "release",
			label: "1.0 release notes",
			href: "https://github.com/appwrite/appwrite/releases/tag/1.0.0",
			kind: "github"
		}]
	},
	{
		id: "2022-console",
		date: "November 2022",
		title: "Console 2.0",
		description: "Appwrite shipped a redesigned Console with a new in-house design system and a developer experience built specifically for managing production backends at scale.",
		category: "product",
		links: [{
			id: "launch-video",
			label: "Console 2.0 launch",
			href: "https://www.youtube.com/watch?v=XfT1gvC7orc",
			kind: "youtube"
		}]
	},
	{
		id: "2022-golden-kitty",
		date: "December 2022",
		title: "Golden Kitty Award",
		description: "Appwrite won Product Hunt's Golden Kitty Award for Best Developer Tool, recognizing the platform's impact among makers and the broader developer community.",
		category: "community",
		images: [{
			src: "/images/company/golden-kitty-winners.jpg",
			alt: "Appwrite won Best Developer Tool at the 2022 Golden Kitty Awards"
		}, {
			src: "/images/company/golden-kitty-product-hunt.jpg",
			alt: "Appwrite on Product Hunt as #1 Product of the Week"
		}],
		links: []
	},
	{
		id: "2023-cloud-beta",
		date: "April 2023",
		title: "Cloud public beta",
		description: "Appwrite Cloud entered public beta, making the platform available without self-hosting and opening the door to managed infrastructure for teams of every size.",
		category: "platform",
		links: [{
			id: "public-beta",
			label: "Public beta announcement",
			href: "/blog/post/public-beta",
			kind: "blog"
		}, {
			id: "cloud",
			label: "Appwrite Cloud",
			href: "/docs/advanced/platform/cloud",
			kind: "docs"
		}]
	},
	{
		id: "2023-rebrand",
		date: "September 2023",
		title: "Brand refresh",
		description: "Appwrite unveiled a refreshed brand identity, including a new logo, redesigned website, and improved documentation, reflecting the company's evolution from a backend service into an all-in-one open-source development platform.",
		category: "platform",
		images: [{
			src: "/images/company/rebrand-before-after.jpg",
			alt: "Side-by-side comparison of the previous and refreshed Appwrite logos"
		}, {
			src: "/images/company/rebrand-logo-sketches.jpg",
			alt: "Early hand-drawn logo sketches from the Appwrite rebrand process"
		}],
		links: [
			{
				id: "announcement",
				label: "Rebrand announcement",
				href: "/blog/post/meet-the-new-appwrite",
				kind: "blog"
			},
			{
				id: "logo",
				label: "The new logo",
				href: "/blog/post/the-journey-and-meaning-behind-our-new-logo",
				kind: "blog"
			},
			{
				id: "website",
				label: "Designing the new website",
				href: "/blog/post/designing-the-new-appwrite-website",
				kind: "blog"
			}
		]
	},
	{
		id: "2024-messaging",
		date: "February 2024",
		title: "Appwrite Messaging",
		description: "Messaging expanded the platform with email, push, and SMS capabilities, giving teams native tools for user communication and notifications.",
		category: "product",
		links: [{
			id: "announcement",
			label: "Messaging announcement",
			href: "/blog/post/announcing-appwrite-messaging",
			kind: "blog"
		}, {
			id: "docs",
			label: "Messaging docs",
			href: "/docs/products/messaging",
			kind: "docs"
		}]
	},
	{
		id: "2024-startups",
		date: "April 2024",
		title: "Startups program",
		description: "The Appwrite Startups Program launched to support early-stage teams with credits, guidance, and infrastructure as they build on the platform.",
		category: "community",
		links: [{
			id: "announcement",
			label: "Program announcement",
			href: "/blog/post/announcing-appwrite-startups-program",
			kind: "blog"
		}, {
			id: "startups",
			label: "Apply to the program",
			href: "/startups",
			kind: "product"
		}]
	},
	{
		id: "2024-github-stars",
		date: "November 2024",
		title: "50,000 GitHub stars",
		description: "Appwrite surpassed 50,000 GitHub stars, reflecting sustained adoption and the strength of its global open-source community.",
		category: "community",
		links: [{
			id: "github",
			label: "Star on GitHub",
			href: "https://github.com/appwrite/appwrite",
			kind: "github"
		}, {
			id: "discord",
			label: "Join the community",
			href: "/discord",
			kind: "product"
		}]
	},
	{
		id: "2025-sites",
		date: "May 18, 2025",
		title: "Appwrite Sites",
		description: "Appwrite Sites launched as an open-source application hosting product, letting teams develop, deploy, and scale web apps from the same platform as their backend services.",
		category: "product",
		images: [{
			src: "/images/company/sites-empty-state.jpg",
			alt: "The Sites view in Console, ready to deploy your first web app"
		}, {
			src: "/images/company/sites-create-templates.jpg",
			alt: "Creating a site from starter templates and popular frameworks"
		}],
		links: [{
			id: "docs",
			label: "Sites docs",
			href: "/docs/products/sites",
			kind: "docs"
		}]
	},
	{
		id: "2025-cloud-ga",
		date: "September 2025",
		title: "Cloud is GA!",
		description: "Appwrite Cloud reached general availability with production-grade reliability, expanded infrastructure, and the performance teams need to run applications at scale.",
		category: "platform",
		images: [{
			src: "/images/company/cloud-ga-journey.jpg",
			alt: "The Appwrite Cloud GA journey from private beta to launch"
		}],
		links: [{
			id: "cloud-ga",
			label: "Cloud GA",
			href: "/blog/post/product-update-august-2025",
			kind: "product"
		}]
	},
	{
		id: "2026-arena",
		date: "March 2026",
		title: "Appwrite Arena",
		description: "Appwrite Arena launched as an open benchmark for evaluating how effectively AI models understand and work with Appwrite APIs and workflows.",
		category: "platform",
		links: [{
			id: "announcement",
			label: "Arena announcement",
			href: "/blog/post/announcing-appwrite-arena",
			kind: "blog"
		}, {
			id: "arena",
			label: "View leaderboard",
			href: "https://arena.appwrite.io",
			kind: "product"
		}]
	},
	{
		id: "2026-presences",
		date: "May 25, 2026",
		title: "Appwrite Presences",
		description: "Appwrite Presences introduced a Realtime API for short-lived user statuses, with built-in channels, automatic expiry, and permission-aware subscriptions.",
		category: "product",
		links: [{
			id: "announcement",
			label: "Presences announcement",
			href: "/blog/post/announcing-presences-api",
			kind: "blog"
		}, {
			id: "docs",
			label: "Presences docs",
			href: "/docs/apis/realtime/presences",
			kind: "docs"
		}]
	},
	{
		id: "2026-appwrite-2",
		date: "August 31, 2026",
		title: "Appwrite 2.0",
		description: "Appwrite 2.0 introduced a refreshed platform experience and stronger foundations, powered by Hyperloop B, a new engine for the platform, and Console IV, a next-generation console rebuilt with TanStack.",
		category: "product"
	},
	{
		id: "2026-native-databases",
		date: "September 2026",
		title: "Native PostgreSQL and MySQL",
		description: "Appwrite introduced native PostgreSQL and MySQL database solutions to the platform, giving teams dedicated relational engines for SQL workflows, portable schemas, and production workloads alongside Appwrite's managed data layer.",
		category: "product"
	}
];
const companyTimelineYearGroups = groupTimelineMilestonesByYear(companyTimelineMilestones);
const companyTimelineYears = companyTimelineYearGroups.map((group) => group.year);
function getTimelineYearAnchorId(year) {
	return `year-${year}`;
}
function scrollToTimelineYear(year) {
	if (typeof document === "undefined") return;
	const main = document.getElementById("main-content");
	if (!main) return;
	const el = Array.from(main.querySelectorAll(`[data-timeline-year="${year}"]`)).find((node) => node.getClientRects().length > 0);
	if (!el) return;
	const mainRect = main.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	const targetTop = main.scrollTop + elRect.top - mainRect.top - 112;
	main.scrollTo({
		top: Math.max(0, targetTop),
		behavior: "smooth"
	});
	if (typeof window !== "undefined") window.history.replaceState(null, "", `#${getTimelineYearAnchorId(year)}`);
}
function scrollToTimelineYearFromHash() {
	if (typeof window === "undefined") return;
	const match = window.location.hash.slice(1).match(/^year-(20\d{2})$/);
	if (!match) return;
	scrollToTimelineYear(Number(match[1]));
}
var LINK_KIND_META = {
	blog: {
		icon: Newspaper,
		typeLabel: "Blog"
	},
	docs: {
		icon: BookOpen,
		typeLabel: "Docs"
	},
	github: {
		icon: Github,
		typeLabel: "GitHub"
	},
	news: {
		icon: Megaphone,
		typeLabel: "News"
	},
	product: {
		icon: Rocket,
		typeLabel: "Product"
	},
	"product-hunt": {
		iconSrc: "/icons/product-hunt.svg",
		typeLabel: "Product Hunt"
	},
	youtube: {
		iconSrc: "/icons/youtube.svg",
		typeLabel: "YouTube"
	}
};
function MilestoneLinkContent({ link, typeLabel, icon: Icon$1, iconSrc }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("span", {
			className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
			children: iconSrc ? /* @__PURE__ */ jsx("img", {
				src: iconSrc,
				alt: "",
				className: "size-3.5",
				"aria-hidden": true
			}) : Icon$1 ? /* @__PURE__ */ jsx(Icon$1, {
				className: "size-3.5",
				"aria-hidden": true
			}) : null
		}),
		/* @__PURE__ */ jsxs("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("span", {
				className: "block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t(typeLabel)
			}), /* @__PURE__ */ jsx("span", {
				className: "mt-0.5 block text-[12px] font-medium leading-snug text-foreground",
				children: t(link.label)
			})]
		}),
		/* @__PURE__ */ jsx(ArrowUpRight, {
			className: "size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground",
			"aria-hidden": true
		})
	] });
}
function MilestoneLinks({ links }) {
	const { features } = useConsoleProfile();
	if (links.length === 0) return null;
	const linkClassName = "group flex items-center gap-2.5 px-3 py-2 transition-colors hover:bg-accent/30";
	return /* @__PURE__ */ jsx("ul", {
		className: "mt-3 overflow-hidden rounded-lg border border-border",
		children: links.map((link) => {
			const { icon: Icon$1, iconSrc, typeLabel } = LINK_KIND_META[link.kind];
			return /* @__PURE__ */ jsx("li", {
				className: "border-b border-border last:border-b-0",
				children: parseBlogPagePath(link.href) ? /* @__PURE__ */ jsx(BlogPageAnchor, {
					href: link.href,
					className: linkClassName,
					children: /* @__PURE__ */ jsx(MilestoneLinkContent, {
						link,
						typeLabel,
						icon: Icon$1,
						iconSrc
					})
				}) : parseDocsPagePath(link.href) ? /* @__PURE__ */ jsx(DocsRouteLink, {
					href: link.href,
					className: linkClassName,
					children: /* @__PURE__ */ jsx(MilestoneLinkContent, {
						link,
						typeLabel,
						icon: Icon$1,
						iconSrc
					})
				}) : parseMarketingSitePagePath(link.href) || getSiteLinkInternalPath(link.href) ? /* @__PURE__ */ jsx(MarketingSiteLink, {
					href: link.href,
					className: linkClassName,
					children: /* @__PURE__ */ jsx(MilestoneLinkContent, {
						link,
						typeLabel,
						icon: Icon$1,
						iconSrc
					})
				}) : /* @__PURE__ */ jsx("a", {
					href: resolveSiteLinkUrl(link.href, features.marketing),
					...isSiteLinkExternal(link.href, features.marketing) ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					className: linkClassName,
					children: /* @__PURE__ */ jsx(MilestoneLinkContent, {
						link,
						typeLabel,
						icon: Icon$1,
						iconSrc
					})
				})
			}, link.id);
		})
	});
}
function MilestoneImages({ images }) {
	const t = useT();
	const [previewIndex, setPreviewIndex] = useState(null);
	if (images.length === 0) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("ul", {
		className: "mt-3 flex flex-wrap gap-2 border-t border-border pt-3",
		children: images.map((image, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setPreviewIndex(index),
			className: "block cursor-pointer overflow-hidden rounded-md border border-border bg-muted/20 transition-colors hover:border-foreground/20 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			"aria-label": `${t("Enlarge image:")} ${image.alt}`,
			children: /* @__PURE__ */ jsx("img", {
				src: image.src,
				alt: "",
				className: "h-14 w-[4.5rem] object-cover object-center sm:h-16 sm:w-24",
				loading: "lazy",
				decoding: "async"
			})
		}) }, image.src))
	}), /* @__PURE__ */ jsx(ImagePreviewGalleryDialog, {
		items: images,
		activeIndex: previewIndex,
		onActiveIndexChange: setPreviewIndex
	})] });
}
function MilestoneCard({ title, description, links, images, className }) {
	const t = useT();
	const milestoneImages = images ?? [];
	const hasLinks = links && links.length > 0;
	return /* @__PURE__ */ jsxs("article", {
		className: cn("w-full max-w-md rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5", className),
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "text-[14px] font-semibold leading-snug text-foreground sm:text-[15px]",
				children: t(title)
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-[14px]",
				children: t(description)
			}),
			hasLinks ? /* @__PURE__ */ jsx(MilestoneLinks, { links }) : null,
			milestoneImages.length > 0 ? /* @__PURE__ */ jsx(MilestoneImages, { images: milestoneImages }) : null
		]
	});
}
function TimelineDate({ date, highlighted = false, className }) {
	return /* @__PURE__ */ jsx("time", {
		dateTime: date,
		className: cn("inline-block shrink-0 self-start whitespace-nowrap text-[12px] font-medium leading-none sm:text-[13px]", highlighted ? "rounded-full bg-foreground px-3 py-1.5 text-[11px] text-background sm:text-[12px]" : "text-muted-foreground", className),
		children: date
	});
}
function TimelineYearNav() {
	const t = useT();
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": t("Jump to timeline year"),
		className: "mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2",
		children: companyTimelineYears.map((year) => /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => scrollToTimelineYear(year),
			className: "inline-flex h-8 min-w-14 cursor-pointer items-center justify-center rounded-full border border-border bg-card/50 px-3 text-[12px] font-medium text-muted-foreground transition-colors hover:border-border hover:bg-accent/50 hover:text-foreground",
			children: year
		}, year))
	});
}
function TimelineYearMarker({ year, variant }) {
	if (variant === "mobile") return /* @__PURE__ */ jsx("li", {
		"data-timeline-year": year,
		id: getTimelineYearAnchorId(year),
		className: "relative scroll-mt-28 pb-3 pt-1 first:pt-0",
		children: /* @__PURE__ */ jsx("div", {
			className: "ps-8",
			children: /* @__PURE__ */ jsx("span", {
				className: "inline-flex rounded-full bg-muted px-3 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground",
				children: year
			})
		})
	});
	return /* @__PURE__ */ jsx("li", {
		"data-timeline-year": year,
		className: "relative scroll-mt-28 pb-3 pt-1 first:pt-0",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex justify-center py-0.5",
			children: /* @__PURE__ */ jsx("span", {
				className: "relative z-10 inline-flex rounded-full bg-background px-3 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground shadow-sm",
				children: year
			})
		})
	});
}
function MobileTimelineEntry({ index, milestone }) {
	return /* @__PURE__ */ jsxs("li", {
		className: "relative pb-8 last:pb-0",
		children: [/* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			className: "absolute start-3 top-2 z-[1] size-2 -translate-x-1/2 rounded-full bg-muted-foreground/50 ring-[3px] ring-background"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 ps-8",
			children: [/* @__PURE__ */ jsx(TimelineDate, {
				date: milestone.date,
				highlighted: index === 0
			}), /* @__PURE__ */ jsx(MilestoneCard, {
				title: milestone.title,
				description: milestone.description,
				links: milestone.links,
				images: milestone.images
			})]
		})]
	});
}
function DesktopTimelineEntry({ index, milestone }) {
	const cardOnRight = index % 2 === 0;
	return /* @__PURE__ */ jsxs("li", {
		className: "relative pb-10 last:pb-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute left-1/2 top-2.5 z-[1] -translate-x-1/2",
			children: /* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "block size-2 rounded-full bg-muted-foreground/50 ring-[3px] ring-background"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-start",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex w-1/2 min-w-0 justify-end pe-6 lg:pe-8",
				children: cardOnRight ? /* @__PURE__ */ jsx(TimelineDate, {
					date: milestone.date,
					highlighted: index === 0
				}) : /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-md",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": true,
						className: "absolute end-0 top-3 h-px w-6 ltr:translate-x-full rtl:-translate-x-full bg-border lg:w-8"
					}), /* @__PURE__ */ jsx(MilestoneCard, {
						title: milestone.title,
						description: milestone.description,
						links: milestone.links,
						images: milestone.images
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex w-1/2 min-w-0 justify-start ps-6 lg:ps-8",
				children: cardOnRight ? /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-md",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": true,
						className: "absolute start-0 top-3 h-px w-6 ltr:-translate-x-full rtl:translate-x-full bg-border lg:w-8"
					}), /* @__PURE__ */ jsx(MilestoneCard, {
						title: milestone.title,
						description: milestone.description,
						links: milestone.links,
						images: milestone.images
					})]
				}) : /* @__PURE__ */ jsx(TimelineDate, {
					date: milestone.date,
					highlighted: index === 0
				})
			})]
		})]
	});
}
function useTimelineEntryIndex() {
	return useMemo(() => {
		const indexById = /* @__PURE__ */ new Map();
		companyTimelineMilestones.forEach((milestone, index) => {
			indexById.set(milestone.id, index);
		});
		return indexById;
	}, []);
}
function CompanyTimeline() {
	const t = useT();
	const milestoneIndexById = useTimelineEntryIndex();
	useEffect(() => {
		scrollToTimelineYearFromHash();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: COMPANY_SECTION_IDS.story,
		className: "relative isolate scroll-mt-28 overflow-x-hidden border-b border-border bg-background",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px] opacity-70",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "@container relative z-[1] mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16",
			children: [
				/* @__PURE__ */ jsx(PricingSectionHeading, {
					size: "md",
					title: t("Our story"),
					description: t(companyTimelineIntro),
					className: "mx-auto max-w-2xl"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 sm:mt-10",
					children: /* @__PURE__ */ jsx(TimelineYearNav, {})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mt-8 sm:mt-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "@[768px]:hidden",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute start-3 top-0 bottom-0 z-0 w-px -translate-x-1/2 bg-border"
						}), /* @__PURE__ */ jsx("ol", {
							className: "relative z-[1]",
							children: companyTimelineYearGroups.map((group) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TimelineYearMarker, {
								year: group.year,
								variant: "mobile"
							}), group.milestones.map((milestone) => /* @__PURE__ */ jsx(MobileTimelineEntry, {
								index: milestoneIndexById.get(milestone.id) ?? 0,
								milestone
							}, milestone.id))] }, group.year))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden @[768px]:block",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute left-1/2 top-0 bottom-0 z-0 w-px -translate-x-1/2 bg-border"
						}), /* @__PURE__ */ jsx("ol", {
							className: "relative z-[1]",
							children: companyTimelineYearGroups.map((group) => /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TimelineYearMarker, {
								year: group.year,
								variant: "desktop"
							}), group.milestones.map((milestone) => /* @__PURE__ */ jsx(DesktopTimelineEntry, {
								index: milestoneIndexById.get(milestone.id) ?? 0,
								milestone
							}, milestone.id))] }, group.year))
						})]
					})]
				})
			]
		})]
	});
}
const companyOpenRoles = [];
const ventureInvestors = [
	{
		name: "Ibex Investors",
		href: "https://www.ibexinvestors.com/",
		logoSrc: "/images/investors/light/ibex.svg"
	},
	{
		name: "Tiger Global",
		href: "https://www.tigerglobal.com/",
		logoSrc: "/images/investors/light/tiger-global.svg"
	},
	{
		name: "Bessemer Venture Partners",
		href: "https://www.bvp.com/",
		logoSrc: "/images/investors/light/bessemer.svg"
	},
	{
		name: "Flybridge",
		href: "https://www.flybridge.com/",
		logoSrc: "/images/investors/light/flybridge.svg"
	},
	{
		name: "Seedcamp",
		href: "https://seedcamp.com/",
		logoSrc: "/images/investors/light/seedcamp.svg"
	}
];
const angelInvestors = [
	{
		name: "Aaron Applebaum",
		role: "Partner",
		organization: "MizMaa",
		github: "https://github.com/aapplbaum",
		twitter: "https://twitter.com/aapplbaum"
	},
	{
		name: "Ariel Maislos",
		role: "Angel Investor",
		organization: "Former Apple IL CEO",
		github: "https://github.com/arielmaislos",
		twitter: "https://twitter.com/arielmaislos"
	},
	{
		name: "Gilad Engel",
		role: "Angel Investor"
	},
	{
		name: "Krishna Visvanathan",
		role: "Co-founder & Partner",
		organization: "Crane Venture Partners",
		github: "https://github.com/KVCVP"
	},
	{
		name: "Ameet Patel",
		role: "Angel Investor",
		github: "https://github.com/ameet-patel"
	},
	{
		name: "Benno Jering",
		role: "Partner",
		organization: "Redline Capital",
		github: "https://github.com/bennojering/"
	},
	{
		name: "James Lindenbaum",
		role: "Co-founder",
		organization: "Heroku",
		github: "https://github.com/jnl"
	},
	{
		name: "Uri Boness",
		role: "Co-Founder",
		organization: "Elastic",
		twitter: "https://twitter.com/uboness"
	}
];
function XIcon$1({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
function View() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(CompanyHero, {}),
			/* @__PURE__ */ jsx(CompanySectionNav, {}),
			/* @__PURE__ */ jsx(CompanyTimeline, {}),
			/* @__PURE__ */ jsx(CompanyTeam, {}),
			/* @__PURE__ */ jsx(CompanyFounder, {}),
			/* @__PURE__ */ jsxs("section", {
				id: COMPANY_SECTION_IDS.investors,
				className: "relative isolate scroll-mt-28 overflow-x-hidden bg-muted/20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, { tone: "purple" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ jsx(PricingSectionHeading, {
							title: t("Backed by top investors"),
							description: t("Appwrite is proudly backed by some of the top investors in the industry."),
							size: "md"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
							children: ventureInvestors.map((investor) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: investor.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-24 items-center justify-center rounded-xl border border-border bg-card/50 p-4 transition-colors hover:bg-card",
								children: /* @__PURE__ */ jsx("img", {
									src: investor.logoSrc,
									alt: investor.name,
									className: "max-h-10 w-full max-w-[140px] object-contain dark:invert"
								})
							}) }, investor.name))
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-14 text-center font-aeonik-pro text-[22px] font-normal text-foreground",
							children: t("Angel Investors")
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: angelInvestors.map((investor) => /* @__PURE__ */ jsxs("li", {
								className: "flex flex-col rounded-xl border border-border bg-card/50 p-5",
								children: [
									/* @__PURE__ */ jsx("h4", {
										className: "text-[14px] font-semibold text-foreground",
										children: investor.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[13px] text-muted-foreground",
										children: t(investor.role)
									}),
									investor.organization ? /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: investor.organization
									}) : null,
									(investor.github || investor.twitter) && /* @__PURE__ */ jsxs("div", {
										className: "mt-auto flex gap-2 pt-4",
										children: [investor.github ? /* @__PURE__ */ jsx("a", {
											href: investor.github,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": `${investor.name} ${t("on GitHub")}`,
											className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
											children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
										}) : null, investor.twitter ? /* @__PURE__ */ jsx("a", {
											href: investor.twitter,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": `${investor.name} ${t("on X")}`,
											className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
											children: /* @__PURE__ */ jsx(XIcon$1, { className: "h-3.5 w-3.5" })
										}) : null]
									})
								]
							}, investor.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: COMPANY_SECTION_IDS.careers,
				className: "relative scroll-mt-28 border-t border-border",
				children: [/* @__PURE__ */ jsx(HomeSoftLights, {
					variant: "testimonials",
					className: "opacity-50"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
						title: t("Open roles"),
						description: t("Find your next career at Appwrite and join a remote team building the platform developers and agents rely on."),
						size: "md"
					}), companyOpenRoles.length === 0 ? /* @__PURE__ */ jsx("div", {
						className: "mx-auto mt-10 max-w-xl rounded-xl border border-border bg-card/50 px-6 py-12 text-center",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[14px] text-muted-foreground",
							children: t("No open roles right now.")
						})
					}) : /* @__PURE__ */ jsx("ul", {
						className: "mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-card/50",
						children: companyOpenRoles.map((role) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: role.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[14px] font-medium text-foreground",
								children: t(role.title)
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-[13px] text-muted-foreground",
								children: t(role.department)
							})] }), /* @__PURE__ */ jsx("p", {
								className: "shrink-0 text-[13px] text-muted-foreground",
								children: t(role.location)
							})]
						}) }, role.id))
					})]
				})]
			})
		]
	});
}
function CompanyPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { CompanyPage as component };
