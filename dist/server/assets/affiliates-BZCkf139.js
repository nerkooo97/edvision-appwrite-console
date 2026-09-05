import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { i as AFFILIATE_REWARD_AMOUNT_USD, t as AFFILIATE_ATTRIBUTION_DAYS } from "./affiliates-BOg1SHC6.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./accordion-DmQmnCa5.js";
import { s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, i as MarketingFeatureGrid, n as MarketingCtaSection } from "./MarketingSections-Dg1QJnZV.js";
import { t as MarketingFaqSection } from "./MarketingFaqSection-DYJ5RTNJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { BarChart3, Gift, Link2, Share2, Sparkles, Wallet } from "lucide-react";
var CLICKS_COLOR = "var(--chart-2)";
var SIGNUPS_COLOR = "var(--chart-brand)";
var CONVERSIONS_COLOR = "var(--chart-1)";
var METRICS = [
	{
		label: "Clicks",
		value: "2.4K",
		hint: "Invite link visits",
		color: CLICKS_COLOR
	},
	{
		label: "Signups",
		value: "186",
		hint: "Signup rate: 7.8%",
		color: SIGNUPS_COLOR
	},
	{
		label: "Conversions",
		value: "24",
		hint: "Conversion rate: 12.9%",
		color: CONVERSIONS_COLOR
	}
];
var PENDING_REWARDS_LABEL = "3 pending rewards";
var LINKS = [
	{
		name: "Twitter launch",
		id: "tw-launch",
		clicks: "1.1K"
	},
	{
		name: "Dev.to article",
		id: "devto-guide",
		clicks: "842"
	},
	{
		name: "Discord share",
		id: "discord-q1",
		clicks: "418"
	}
];
var CHART_SERIES = [
	{
		clicks: 28,
		signups: 8,
		conversions: 2
	},
	{
		clicks: 36,
		signups: 11,
		conversions: 3
	},
	{
		clicks: 32,
		signups: 10,
		conversions: 2
	},
	{
		clicks: 44,
		signups: 14,
		conversions: 4
	},
	{
		clicks: 40,
		signups: 12,
		conversions: 3
	},
	{
		clicks: 52,
		signups: 18,
		conversions: 5
	},
	{
		clicks: 48,
		signups: 16,
		conversions: 4
	},
	{
		clicks: 58,
		signups: 20,
		conversions: 6
	},
	{
		clicks: 54,
		signups: 19,
		conversions: 5
	},
	{
		clicks: 62,
		signups: 22,
		conversions: 7
	},
	{
		clicks: 56,
		signups: 18,
		conversions: 5
	},
	{
		clicks: 68,
		signups: 24,
		conversions: 8
	}
];
function seriesToPath(values, width, height, max) {
	if (values.length === 0) return "";
	const step = width / Math.max(values.length - 1, 1);
	return values.map((value, index) => {
		const x = index * step;
		const y = height - value / max * height;
		return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(" ");
}
function FunnelChart({ className }) {
	const width = 560;
	const height = 120;
	const max = Math.max(...CHART_SERIES.map((point) => point.clicks)) * 1.1;
	const clicks = CHART_SERIES.map((point) => point.clicks);
	const signups = CHART_SERIES.map((point) => point.signups);
	const conversions = CHART_SERIES.map((point) => point.conversions);
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: `0 0 ${width} ${height}`,
		preserveAspectRatio: "none",
		className: cn("h-full min-h-0 w-full", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
				id: "affiliates-preview-clicks",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ jsx("stop", {
					offset: "0%",
					stopColor: CLICKS_COLOR,
					stopOpacity: "0.18"
				}), /* @__PURE__ */ jsx("stop", {
					offset: "100%",
					stopColor: CLICKS_COLOR,
					stopOpacity: "0"
				})]
			}) }),
			[
				.25,
				.5,
				.75
			].map((line) => /* @__PURE__ */ jsx("line", {
				x1: "0",
				x2: width,
				y1: height * line,
				y2: height * line,
				stroke: "hsl(var(--border))",
				strokeDasharray: "3 3"
			}, line)),
			/* @__PURE__ */ jsx("path", {
				d: `${seriesToPath(clicks, width, height, max)} L${width},${height} L0,${height} Z`,
				fill: "url(#affiliates-preview-clicks)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: seriesToPath(clicks, width, height, max),
				fill: "none",
				stroke: CLICKS_COLOR,
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ jsx("path", {
				d: seriesToPath(signups, width, height, max),
				fill: "none",
				stroke: SIGNUPS_COLOR,
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ jsx("path", {
				d: seriesToPath(conversions, width, height, max),
				fill: "none",
				stroke: CONVERSIONS_COLOR,
				strokeWidth: "1.5"
			})
		]
	});
}
function LegendDot({ label, color }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "h-1.5 w-1.5 rounded-full",
			style: { backgroundColor: color },
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[10px] text-muted-foreground",
			children: t(label)
		})]
	});
}
function DashboardPreview({ className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card/50 shadow-sm", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3 border-b border-border px-4 py-3 sm:px-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("Affiliates program")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[11px] text-muted-foreground",
						children: t("Track links, referrals, and rewards")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "rounded-md border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground",
						children: t("All links")
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden rounded-md border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground sm:inline",
						children: t("Last 30 days")
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3 sm:px-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background",
						children: /* @__PURE__ */ jsx(Gift, { className: "h-3.5 w-3.5 text-muted-foreground" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[13px] font-semibold tabular-nums text-foreground",
							children: [
								"$45",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-muted-foreground",
									children: t("ready to claim")
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground",
							children: t(PENDING_REWARDS_LABEL)
						})]
					})]
				}), /* @__PURE__ */ jsx("span", {
					className: "rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background",
					children: t("Claim")
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-3 divide-x divide-border border-b border-border",
				children: METRICS.map((metric) => /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 px-3 py-3 sm:px-4 sm:py-3.5",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t(metric.label)
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[18px] font-semibold tabular-nums tracking-tight text-foreground sm:text-[20px]",
							children: metric.value
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-0.5 truncate text-[10px] text-muted-foreground",
							children: t(metric.hint)
						})
					]
				}, metric.label))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-0 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-stretch",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-h-[12rem] flex-col border-b border-border px-4 py-3 sm:px-5 lg:min-h-0 lg:border-b-0 lg:border-e",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex shrink-0 flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-medium text-foreground",
							children: t("Funnel over time")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [
								/* @__PURE__ */ jsx(LegendDot, {
									label: "Clicks",
									color: CLICKS_COLOR
								}),
								/* @__PURE__ */ jsx(LegendDot, {
									label: "Signups",
									color: SIGNUPS_COLOR
								}),
								/* @__PURE__ */ jsx(LegendDot, {
									label: "Conversions",
									color: CONVERSIONS_COLOR
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "min-h-0 flex-1",
						children: /* @__PURE__ */ jsx(FunnelChart, {})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-4 py-3 sm:px-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-2 text-[11px] font-medium text-foreground",
						children: t("Invite links")
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-1.5",
						children: LINKS.map((link) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-muted/20 px-3 py-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "truncate text-[12px] font-medium text-foreground",
									children: link.name
								}), /* @__PURE__ */ jsxs("p", {
									className: "truncate font-mono text-[10px] text-muted-foreground",
									children: ["/i/", link.id]
								})]
							}), /* @__PURE__ */ jsxs("p", {
								className: "shrink-0 text-[11px] tabular-nums text-muted-foreground",
								children: [
									link.clicks,
									" ",
									t("clicks")
								]
							})]
						}, link.id))
					})]
				})]
			})
		]
	});
}
const affiliatesHero = {
	eyebrow: "Affiliates Program",
	title: "Earn credits by referring developers",
	description: "Share Appwrite with other builders. When someone you invite upgrades to Pro, you earn organization credits to use on Appwrite Cloud."
};
const affiliatesTopBenefits = [
	{
		title: "Simple invite links",
		description: "Create shareable links for each campaign or channel and track clicks automatically.",
		icon: Link2
	},
	{
		title: "Long attribution window",
		description: `Signups stay attributed to you for 180 days after they join.`,
		icon: Share2
	},
	{
		title: "Credits you can spend",
		description: `Earn $15 in organization credits for each referred Pro upgrade.`,
		icon: Wallet
	},
	{
		title: "Built into the console",
		description: "Manage links, referrals, and rewards from your Appwrite account. No separate dashboard required.",
		icon: BarChart3
	}
];
const affiliatesSteps = [
	{
		title: "Create an Appwrite account",
		description: "Sign up for Appwrite Cloud, or sign in if you already have an account. Affiliates is available from your account."
	},
	{
		title: "Open Affiliates",
		description: "Go to Account, then Affiliates. From there you can create invite links and track referrals."
	},
	{
		title: "Create and share your first link",
		description: `Generate an invite link for each campaign or channel. Signups stay attributed for 180 days, and you earn $15 when a referral upgrades to Pro.`
	}
];
const affiliatesRewards = {
	title: "How rewards work",
	description: "Rewards are simple, transparent, and paid as credits you can use on Appwrite Cloud.",
	highlights: [
		{
			value: `$15`,
			label: "Credits added to your organization for each Pro upgrade"
		},
		{
			value: `180 days`,
			label: "Time after signup during which a Pro upgrade still counts for you"
		},
		{
			value: "Pro",
			label: "Only referrals who upgrade to Pro generate a reward"
		}
	]
};
const affiliatesWhyJoin = [
	{
		title: "Help developers discover Appwrite",
		description: "Recommend a backend you already trust and help more builders ship faster.",
		icon: Sparkles
	},
	{
		title: "Get rewarded for referrals",
		description: "Turn community advocacy into credits that offset your own Appwrite usage.",
		icon: Gift
	},
	{
		title: "Track what works",
		description: "See clicks, signups, and conversions so you know which channels perform best.",
		icon: BarChart3
	}
];
const affiliatesFaqItems = [
	{
		question: "What is the Appwrite Affiliates program?",
		answer: "The Affiliates program lets you create invite links and earn organization credits when people you refer join Appwrite Cloud and upgrade to Pro."
	},
	{
		question: "How do I join?",
		answer: "Sign in to Appwrite Cloud and open Affiliates in your account. From there you can create invite links and track referrals.",
		links: [{
			label: "Open Affiliates",
			href: "/account/affiliates"
		}]
	},
	{
		question: "How much do I earn?",
		answer: `You receive $15 in organization credits for each referred user who upgrades to Pro.`
	},
	{
		question: "How does attribution work if someone clicks more than one invite link?",
		answer: "We use last-click attribution. Credit goes to the last invite link clicked before signup. Earlier clicks still appear in analytics, but only the last affiliate earns the reward if that user upgrades to Pro."
	},
	{
		question: "How long does attribution last?",
		answer: `After someone signs up through an attributed invite link, Pro upgrades count for that affiliate for 180 days.`
	},
	{
		question: "When do I get rewarded?",
		answer: "A reward is created when a referred user upgrades to Pro within the attribution window. Credits are added to your organization after the reward is claimed or applied."
	},
	{
		question: "Who can join the Affiliates program?",
		answer: "The Affiliates program is available on Appwrite Cloud. Create an account, then open Affiliates from your account settings to get started."
	},
	{
		question: "Can I create more than one invite link?",
		answer: "Yes. Create separate links for different campaigns, posts, or communities so you can compare performance."
	},
	{
		question: "Where can I use the credits?",
		answer: "Affiliate rewards are added as organization credits on Appwrite Cloud and can be used toward eligible Cloud charges."
	}
];
const affiliatesDashboard = {
	title: "Track everything from your dashboard",
	description: "See clicks, attributed signups, and Pro conversions for each invite link. Claim credits when rewards are ready, without leaving the Appwrite Console."
};
const affiliatesCta = {
	title: "Start earning with the Affiliates program",
	description: "Create your first invite link, share Appwrite with developers, and earn credits when they upgrade to Pro."
};
var AFFILIATES_ACCOUNT_PATH = "/account/affiliates";
function View() {
	const t = useT();
	const { isAuthenticated, isFetched } = useAuth();
	const joinCta = /* @__PURE__ */ jsx(Button, {
		variant: "brandCta",
		size: "lg",
		className: "h-10 text-[14px]",
		asChild: true,
		children: isFetched && isAuthenticated ? /* @__PURE__ */ jsx(Link, {
			to: AFFILIATES_ACCOUNT_PATH,
			...analyticsAttrs("affiliates-join"),
			children: t("Get started")
		}) : /* @__PURE__ */ jsx(Link, {
			to: "/sign-up",
			search: { redirect: AFFILIATES_ACCOUNT_PATH },
			...analyticsAttrs("affiliates-join"),
			children: t("Get started")
		})
	});
	const [rewardPrimary, ...rewardSecondary] = affiliatesRewards.highlights;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				eyebrow: affiliatesHero.eyebrow,
				title: affiliatesHero.title,
				description: affiliatesHero.description,
				gradientTitle: true,
				wideFooter: true,
				footer: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
					items: affiliatesTopBenefits,
					columns: 4,
					className: "mt-16 text-start sm:mt-20"
				}),
				children: joinCta
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Get started"),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid overflow-hidden rounded-xl border border-border bg-card/45 lg:grid-cols-3",
						children: affiliatesSteps.map((step, index) => /* @__PURE__ */ jsxs("article", {
							className: "flex h-full flex-col border-b border-border p-6 last:border-b-0 lg:border-b-0 lg:border-e lg:last:border-e-0",
							children: [
								/* @__PURE__ */ jsxs(Badge, {
									variant: "info",
									className: "w-fit shrink-0 text-[10px]",
									children: [
										t("Step"),
										" ",
										index + 1
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-[14px] font-semibold text-foreground",
									children: t(step.title)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 flex-1 text-[13px] leading-6 text-muted-foreground",
									children: t(step.description)
								})
							]
						}, step.title))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border bg-muted/20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, {
					tone: "teal",
					position: "right"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: affiliatesDashboard.title,
						description: affiliatesDashboard.description,
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mx-auto mt-10 max-w-5xl lg:max-w-6xl",
						children: /* @__PURE__ */ jsx(DashboardPreview, {})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: affiliatesRewards.title,
						description: affiliatesRewards.description,
						size: "md"
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-10 grid gap-3 lg:grid-cols-5 lg:gap-4",
						children: [rewardPrimary ? /* @__PURE__ */ jsxs("article", {
							className: "relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 sm:p-8 lg:col-span-3 lg:min-h-[280px] lg:p-10",
							children: [/* @__PURE__ */ jsx("div", {
								className: "pointer-events-none absolute -start-[20%] top-1/2 h-[140%] w-[90%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_16%,transparent)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_10%,transparent)_0%,transparent_70%)]",
								"aria-hidden": true
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative z-[1] flex h-full flex-col justify-between gap-8",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: t("Per Pro upgrade")
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "font-aeonik-pro text-[64px] font-normal leading-none tracking-tight text-foreground sm:text-[80px]",
									children: rewardPrimary.value
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 max-w-md text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
									children: t(rewardPrimary.label)
								})] })]
							})]
						}) : null, /* @__PURE__ */ jsx("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 lg:gap-4",
							children: rewardSecondary.map((item) => /* @__PURE__ */ jsxs("article", {
								className: "flex flex-col justify-between rounded-2xl border border-border bg-muted/30 p-5 sm:p-6 lg:min-h-[132px]",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-aeonik-pro text-[32px] font-normal leading-none text-foreground sm:text-[36px]",
									children: item.value
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-3 text-[13px] leading-6 text-muted-foreground",
									children: t(item.label)
								})]
							}, item.label))
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Why join Affiliates"),
						description: t("Recommend Appwrite, help developers ship, and earn credits along the way."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
							items: affiliatesWhyJoin,
							columns: 3
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(MarketingFaqSection, { items: affiliatesFaqItems }),
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: affiliatesCta.title,
				description: affiliatesCta.description,
				children: joinCta
			})
		]
	});
}
function AffiliatesPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { AffiliatesPage as component };
