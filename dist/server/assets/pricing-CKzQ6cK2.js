import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-profiles-D__E5Kgi.js";
import { g as DATABASE_COMPUTE_CREDITS_NOTE } from "./database-specs-CBc802K0.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { n as analyticsAttrs, s as getPricingPlanCtaAnalyticsAction } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import { n as PRICING_PLAN_COLUMNS, t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import "./registry-C4rxXMsK.js";
import { a as comparisonPageSections, c as DATABASE_PRICING_COMPARISON_ROWS, i as scrollToComparisonSection, l as DEDICATED_DATABASE_PRICING_TIERS, n as isPricingHashTarget, o as getComparisonTableAnchorId, r as resetPricingPageScrollContainers, s as comparisonTables, t as PRICING_COMPARE_ANCHOR_ID, u as PRICING_DATABASE_ANCHOR_ID } from "./comparison-scroll-D9oVlYcd.js";
import { u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { n as policySidebarLinkClassName, t as PolicySidebarSection } from "./PolicySidebarNav-DoDWiBHs.js";
import { t as PricingSectionHeading } from "./PricingSectionHeading-Bstz-ues.js";
import { n as MarketingProductPills, t as marketingProductToolkit } from "./product-toolkit-C63_kutv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Check, Info } from "lucide-react";
const pricingPlans = [
	{
		id: "free",
		name: "Free",
		price: "$0",
		description: "A great fit for passion projects and small applications.",
		features: [
			"5GB bandwidth",
			"2GB storage",
			"750K executions",
			"75K monthly active users",
			"Community support",
			"1 Database, 1 Bucket, 2 Functions per project",
			"15-minute builds"
		],
		footnote: "Free projects are paused after 1 week of inactivity. Limit of 2 projects.",
		cta: "Start project",
		ctaVariant: "outline",
		href: "/sign-up",
		internal: true
	},
	{
		id: "pro",
		name: "Pro",
		price: "$25",
		pricePrefix: "From",
		priceSuffix: "/month",
		description: "For production applications that need powerful functionality and resources to scale.",
		callout: DATABASE_COMPUTE_CREDITS_NOTE,
		featuresIntro: "Dedicated resources per project:",
		features: [
			"2TB bandwidth",
			"150GB storage",
			"3.5M executions",
			"200K monthly active users",
			"Organization roles",
			"Email support",
			"Daily backups stored for 7 days",
			"Add-ons",
			"Unlimited Databases, Buckets, and Functions",
			"45-minute builds"
		],
		cta: "Start project",
		ctaVariant: "brandCta",
		href: "/sign-up",
		internal: true,
		popular: true
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "Custom",
		description: "For enterprises that need more power, premium support, and advanced security features.",
		featuresIntro: "Everything in Pro, plus:",
		features: [
			"Uptime SLAs",
			"Success manager and 24/7 support on Slack",
			"Volume discounts",
			"Log drains",
			"90-day log retention",
			"Advanced observability",
			"Bring your own Cloud",
			"SOC-2, HIPAA, and BAA",
			"Custom organization roles",
			"Single Sign-On (SSO)",
			"Activity logs",
			"Custom backup policies"
		],
		cta: "Contact us",
		ctaVariant: "outline",
		href: CONTACT_ENTERPRISE_URL,
		internal: true
	}
];
const outlineTierButtonClassName = "border-[var(--brand-cta)]/30 text-foreground hover:bg-[var(--brand-cta)]/10 hover:text-foreground";
const pricingGlassSurfaceClassName = "relative isolate overflow-hidden rounded-xl border border-muted-foreground/8 bg-muted-foreground/[0.035] shadow-sm backdrop-blur-sm dark:border-muted/30 dark:bg-muted/10 supports-[backdrop-filter]:bg-muted-foreground/[0.028] supports-[backdrop-filter]:dark:bg-muted/[0.08]";
var pricingPlanGlassClassName = pricingGlassSurfaceClassName;
function isProPlan(plan) {
	return plan.id === "pro";
}
function PricingPlanCta({ plan, className, size = "default", analyticsAction }) {
	const t = useT();
	const buttonClassName = cn(size === "sm" ? "h-9 text-[12px]" : "h-10 text-[13px]", "w-full", plan.ctaVariant === "outline" && "border-[var(--brand-cta)]/30 text-foreground hover:bg-[var(--brand-cta)]/10 hover:text-foreground", className);
	const action = analyticsAction ?? getPricingPlanCtaAnalyticsAction(plan.id);
	const analytics = action ? analyticsAttrs(action) : void 0;
	if (plan.internal) return /* @__PURE__ */ jsx(Button, {
		variant: plan.ctaVariant,
		className: buttonClassName,
		asChild: true,
		children: /* @__PURE__ */ jsx(Link, {
			to: plan.href,
			search: { redirect: "/" },
			...analytics,
			children: t(plan.cta)
		})
	});
	return /* @__PURE__ */ jsx(Button, {
		variant: plan.ctaVariant,
		className: buttonClassName,
		asChild: true,
		children: /* @__PURE__ */ jsx("a", {
			href: plan.href,
			target: "_blank",
			rel: "noopener noreferrer",
			...analytics,
			children: t(plan.cta)
		})
	});
}
function PricingPlanCard({ plan }) {
	const t = useT();
	const isPro = isProPlan(plan);
	return /* @__PURE__ */ jsxs("article", {
		className: cn(pricingPlanGlassClassName, "flex h-full flex-col p-6 sm:p-7", isPro && "sm:p-7 lg:p-9 lg:shadow-lg"),
		children: [/* @__PURE__ */ jsxs("header", {
			className: "relative z-[1] flex flex-col gap-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx("h2", {
						className: cn("font-semibold text-foreground", isPro ? "text-[16px]" : "text-[14px]"),
						children: t(plan.name)
					}), plan.popular ? /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400",
						children: t("Popular")
					}) : null]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1",
					children: [plan.pricePrefix ? /* @__PURE__ */ jsx("span", {
						className: "text-[12px] text-muted-foreground",
						children: t(plan.pricePrefix)
					}) : /* @__PURE__ */ jsx("span", {
						className: "hidden text-[12px] sm:block sm:min-h-[1.125rem]",
						"aria-hidden": true
					}), /* @__PURE__ */ jsxs("p", {
						className: "flex flex-wrap items-baseline gap-x-1.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: cn("font-aeonik-pro font-normal leading-none tracking-tight text-foreground", isPro ? "text-[48px] sm:text-[52px] lg:text-[56px]" : "text-[36px] sm:text-[40px]"),
							children: t(plan.price)
						}), plan.priceSuffix ? /* @__PURE__ */ jsx("span", {
							className: cn("text-muted-foreground", isPro ? "text-[16px]" : "text-[14px]"),
							children: t(plan.priceSuffix)
						}) : null]
					})]
				}),
				plan.callout ? /* @__PURE__ */ jsx("p", {
					className: "rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[13px] leading-5 text-foreground",
					children: t(plan.callout)
				}) : null,
				/* @__PURE__ */ jsx("p", {
					className: cn("leading-5 text-muted-foreground", isPro ? "min-h-[3.5rem] text-[14px]" : "min-h-[3.75rem] text-[13px]"),
					children: t(plan.description)
				}),
				/* @__PURE__ */ jsx(PricingPlanCta, { plan })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mt-6 flex min-h-0 flex-1 flex-col gap-3 border-t border-muted-foreground/10 pt-6 dark:border-muted/20",
			children: [
				plan.featuresIntro ? /* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: t(plan.featuresIntro)
				}) : /* @__PURE__ */ jsx("div", {
					className: "min-h-[1.25rem]",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("ul", {
					className: cn("min-h-0 flex-1 space-y-2.5", isPro && "lg:space-y-3"),
					children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", {
						className: cn("flex items-start gap-2.5 text-muted-foreground", isPro ? "text-[14px]" : "text-[13px]"),
						children: [/* @__PURE__ */ jsx(Check, {
							className: "mt-0.5 size-4 shrink-0 text-[var(--brand-cta)]",
							"aria-hidden": true
						}), /* @__PURE__ */ jsx("span", { children: t(feature) })]
					}, feature))
				}),
				plan.footnote ? /* @__PURE__ */ jsx("p", {
					className: "mt-auto pt-2 text-[12px] leading-5 text-muted-foreground/80",
					children: t(plan.footnote)
				}) : null
			]
		})]
	});
}
function PricingCardsGrid() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.14fr)_minmax(0,1fr)] lg:items-stretch lg:gap-10",
		children: pricingPlans.map((plan) => /* @__PURE__ */ jsx("div", {
			className: cn("flex h-full min-h-0", isProPlan(plan) && "relative z-[1] origin-center scale-[1.02] self-center sm:scale-[1.04] lg:scale-[1.1]"),
			children: /* @__PURE__ */ jsx(PricingPlanCard, { plan })
		}, plan.id))
	});
}
function isLinkCell(value) {
	return typeof value === "object" && value !== null && "href" in value;
}
function ComparisonCellValue({ value }) {
	const t = useT();
	if (value === true) return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex size-5 items-center justify-center rounded-full bg-muted",
		children: [/* @__PURE__ */ jsx(Check, {
			className: "size-3 text-foreground",
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: t("Included")
		})]
	});
	if (isLinkCell(value)) return /* @__PURE__ */ jsx("a", {
		href: value.href,
		className: "text-[13px] link-neutral",
		target: "_blank",
		rel: "noopener noreferrer",
		children: t(value.text)
	});
	return /* @__PURE__ */ jsx("span", {
		className: "text-[13px] text-muted-foreground",
		children: t(value)
	});
}
function ComparisonRowLabel({ title, info }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5 text-start",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[13px] font-medium text-foreground",
			children: t(title)
		}), info ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "inline-flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
				"aria-label": `${t("More about")} ${t(title)}`,
				children: /* @__PURE__ */ jsx(Info, { className: "size-3.5" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-xs text-[12px] leading-5",
			children: t(info)
		})] }) : null]
	});
}
function getPlanCtaHref(planId) {
	if (planId === "enterprise") return CONTACT_ENTERPRISE_URL;
	return "/sign-up";
}
function getPlanCtaLabel(planId) {
	if (planId === "enterprise") return "Contact us";
	return "Start project";
}
var pricingPageSections = [{
	id: PRICING_DATABASE_ANCHOR_ID,
	label: "Database pricing"
}, ...comparisonPageSections];
function CompareToc({ className }) {
	const t = useT();
	const [activeId, setActiveId] = useState(pricingPageSections[0]?.id ?? "");
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActiveId(visible[0].target.id);
		}, {
			root: document.getElementById("main-content"),
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const section of pricingPageSections) {
			const element = document.getElementById(section.id);
			if (element) observer.observe(element);
		}
		return () => observer.disconnect();
	}, []);
	const handleClick = (event, sectionId) => {
		event.preventDefault();
		scrollToComparisonSection(sectionId);
	};
	return /* @__PURE__ */ jsx("aside", {
		className: cn("sticky top-6 z-10 hidden max-h-[calc(100dvh-3rem)] self-start overflow-y-auto lg:block", className),
		children: /* @__PURE__ */ jsx(PolicySidebarSection, {
			title: t("On this page"),
			ariaLabel: t("Compare plans sections"),
			children: /* @__PURE__ */ jsx("ul", {
				className: "space-y-0.5",
				children: pricingPageSections.map((section) => /* @__PURE__ */ jsx("li", {
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("a", {
						href: `#${section.id}`,
						title: t(section.label),
						onClick: (event) => handleClick(event, section.id),
						className: policySidebarLinkClassName(activeId === section.id),
						"aria-current": activeId === section.id ? "location" : void 0,
						children: t(section.label)
					})
				}, section.id))
			})
		})
	});
}
var PRICING_COMPARE_CTA_ACTIONS = {
	free: "pricing-compare-start-free",
	pro: "pricing-compare-start-pro",
	enterprise: "pricing-compare-contact-enterprise"
};
var compareTableClassName = "w-full table-fixed";
var compareStickyHeadClassName = "sticky top-0 z-10 bg-background px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_-1px_0_var(--border)] sm:px-6";
function MobilePlanTabs({ activePlan, onPlanChange }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Tabs, {
		value: activePlan,
		onValueChange: (value) => onPlanChange(value),
		className: "lg:hidden",
		children: /* @__PURE__ */ jsx(TabsList, {
			className: "grid h-10 w-full grid-cols-3",
			children: PRICING_PLAN_COLUMNS.map((column) => /* @__PURE__ */ jsx(TabsTrigger, {
				value: column.id,
				className: "text-[12px] capitalize",
				children: t(column.label)
			}, column.id))
		})
	});
}
function CompareCategoryTable({ table, mobilePlan }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		id: getComparisonTableAnchorId(table.title),
		className: "scroll-mt-28 overflow-visible rounded-xl border border-border bg-card/45",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border px-4 py-4 sm:px-6",
				children: /* @__PURE__ */ jsx("h3", {
					className: "font-aeonik-pro text-[16px] font-normal text-foreground sm:text-[17px]",
					children: t(table.title)
				})
			}),
			/* @__PURE__ */ jsxs(Table$1, {
				withScrollContainer: false,
				className: cn("hidden lg:table", compareTableClassName),
				children: [
					/* @__PURE__ */ jsxs("colgroup", { children: [
						/* @__PURE__ */ jsx("col", { className: "w-[32%]" }),
						/* @__PURE__ */ jsx("col", {}),
						/* @__PURE__ */ jsx("col", {}),
						/* @__PURE__ */ jsx("col", {})
					] }),
					/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [/* @__PURE__ */ jsx(TableHead, {
							className: cn(compareStickyHeadClassName, "text-start"),
							children: t("Feature")
						}), PRICING_PLAN_COLUMNS.map((column) => /* @__PURE__ */ jsx(TableHead, {
							className: cn(compareStickyHeadClassName, "text-center"),
							children: t(column.label)
						}, column.id))]
					}) }),
					/* @__PURE__ */ jsx(TableBody, { children: table.rows.map((row) => /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 align-middle sm:px-6",
							children: /* @__PURE__ */ jsx(ComparisonRowLabel, {
								title: row.title,
								info: row.info
							})
						}), PRICING_PLAN_COLUMNS.map((column) => /* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-center align-middle sm:px-6",
							children: /* @__PURE__ */ jsx(ComparisonCellValue, { value: row[column.id] })
						}, column.id))]
					}, row.title)) })
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "lg:hidden",
				children: table.rows.map((row, index) => /* @__PURE__ */ jsxs("div", {
					className: cn("flex items-start justify-between gap-4 px-4 py-3 sm:px-6", index > 0 && "border-t border-border"),
					children: [/* @__PURE__ */ jsx(ComparisonRowLabel, {
						title: row.title,
						info: row.info
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0 text-end",
						children: /* @__PURE__ */ jsx(ComparisonCellValue, { value: row[mobilePlan] })
					})]
				}, row.title))
			})
		]
	});
}
function ComparePlansSection() {
	const t = useT();
	const [mobilePlan, setMobilePlan] = useState("pro");
	return /* @__PURE__ */ jsxs("section", {
		id: "compare",
		className: "overflow-visible border-b border-border bg-background py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ jsx(PricingSectionHeading, {
				align: "left",
				title: t("Compare plans"),
				description: t("Discover our plans and find the one that fits your project's needs."),
				className: "max-w-2xl"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl overflow-visible px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 lg:hidden",
					children: /* @__PURE__ */ jsx(MobilePlanTabs, {
						activePlan: mobilePlan,
						onPlanChange: setMobilePlan
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[240px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ jsx(CompareToc, {}), /* @__PURE__ */ jsx("div", {
						className: "min-w-0 space-y-6 overflow-visible sm:space-y-8",
						children: comparisonTables.map((table) => /* @__PURE__ */ jsx(CompareCategoryTable, {
							table,
							mobilePlan
						}, table.title))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:hidden",
					children: PRICING_PLAN_COLUMNS.map((column) => {
						const href = getPlanCtaHref(column.id);
						const label = getPlanCtaLabel(column.id);
						if (column.id === "enterprise") return /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: cn("h-10 flex-1 text-[13px]", outlineTierButtonClassName),
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: href,
								...analyticsAttrs(PRICING_COMPARE_CTA_ACTIONS[column.id]),
								children: t(label)
							})
						}, column.id);
						return /* @__PURE__ */ jsx(Button, {
							variant: column.id === "pro" ? "brandCta" : "outline",
							className: cn("h-10 flex-1 text-[13px]", column.id !== "pro" && "border-[var(--brand-cta)]/30 text-foreground hover:bg-[var(--brand-cta)]/10 hover:text-foreground"),
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/sign-up",
								search: { redirect: "/" },
								...analyticsAttrs(PRICING_COMPARE_CTA_ACTIONS[column.id]),
								children: t(label)
							})
						}, column.id);
					})
				})
			]
		})]
	});
}
var databasesCompareAnchorId = getComparisonTableAnchorId("Databases");
var compareHeadClassName = "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground sm:px-6";
var compareValueCellClassName = "px-4 py-3 align-top text-center text-[13px] leading-5 text-muted-foreground whitespace-pre-line break-words sm:px-6";
function CompareLink({ href, children }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: "link-neutral",
		onClick: (event) => {
			event.preventDefault();
			scrollToComparisonSection(href.slice(1));
		},
		children
	});
}
function DatabasePricingSection() {
	const t = useT();
	return /* @__PURE__ */ jsx("section", {
		id: PRICING_DATABASE_ANCHOR_ID,
		className: "scroll-mt-28 border-b border-border bg-background py-16 sm:py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsx(PricingSectionHeading, {
					align: "left",
					title: t("Database pricing"),
					description: t("Choose serverless or dedicated compute for each database. Pay for usage when traffic is variable, or pick a fixed monthly tier when you need reserved resources and predictable costs."),
					className: "max-w-3xl"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 overflow-visible rounded-xl border border-border bg-card/45",
					children: [/* @__PURE__ */ jsxs(Table$1, {
						withScrollContainer: false,
						className: "w-full table-fixed",
						children: [
							/* @__PURE__ */ jsxs("colgroup", { children: [
								/* @__PURE__ */ jsx("col", { className: "w-[34%]" }),
								/* @__PURE__ */ jsx("col", {}),
								/* @__PURE__ */ jsx("col", {})
							] }),
							/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [
									/* @__PURE__ */ jsx(TableHead, { className: compareHeadClassName }),
									/* @__PURE__ */ jsx(TableHead, {
										className: `${compareHeadClassName} text-center`,
										children: t("Serverless")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: `${compareHeadClassName} text-center`,
										children: t("Dedicated")
									})
								]
							}) }),
							/* @__PURE__ */ jsx(TableBody, { children: DATABASE_PRICING_COMPARISON_ROWS.map((row) => /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border last:border-b-0",
								children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 align-top text-[13px] font-medium text-foreground sm:px-6",
										children: t(row.label)
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: compareValueCellClassName,
										children: t(row.serverless)
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: compareValueCellClassName,
										children: t(row.dedicated)
									})
								]
							}, row.label)) })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "border-t border-border px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-[13px] leading-5 text-muted-foreground",
							children: [
								t(DATABASE_COMPUTE_CREDITS_NOTE),
								" ",
								t("Serverless read/write quotas and overage rates are in"),
								" ",
								/* @__PURE__ */ jsx(CompareLink, {
									href: `#${databasesCompareAnchorId}`,
									children: t("Compare plans")
								}),
								"."
							]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 overflow-hidden rounded-xl border border-border bg-card/45",
					children: [/* @__PURE__ */ jsx("div", {
						className: "border-b border-border px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[14px] font-semibold text-foreground",
							children: t("Dedicated compute tiers")
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs(Table$1, {
							withScrollContainer: false,
							className: "w-full min-w-[520px]",
							children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [
									/* @__PURE__ */ jsx(TableHead, {
										className: compareHeadClassName,
										children: t("Tier")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: compareHeadClassName,
										children: t("CPU")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: compareHeadClassName,
										children: t("Memory")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: `${compareHeadClassName} text-end`,
										children: t("Price")
									})
								]
							}) }), /* @__PURE__ */ jsx(TableBody, { children: DEDICATED_DATABASE_PRICING_TIERS.map((tier) => /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border last:border-b-0",
								children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-[13px] font-medium text-foreground sm:px-6",
										children: t(tier.label)
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-[13px] text-muted-foreground sm:px-6",
										children: t(tier.cpu)
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-[13px] text-muted-foreground sm:px-6",
										children: t(tier.memory)
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end text-[13px] font-medium text-foreground sm:px-6",
										children: t(tier.price)
									})
								]
							}, tier.id)) })]
						})
					})]
				})
			]
		})
	});
}
var linkClassName = "link-neutral";
function T({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children: useT()(children) });
}
const pricingFaqItems = [
	{
		question: "What payment methods does Appwrite support?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "Appwrite currently supports" }),
			" ",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				className: linkClassName,
				href: "/docs/advanced/billing/payments#payment-methods",
				children: /* @__PURE__ */ jsx(T, { children: "credit and debit card payments" })
			}),
			". ",
			/* @__PURE__ */ jsx(T, { children: "We are actively working on adding support for more methods. Please" }),
			" ",
			/* @__PURE__ */ jsx(MarketingSiteLink, {
				className: linkClassName,
				href: CONTACT_ENTERPRISE_URL,
				children: /* @__PURE__ */ jsx(T, { children: "contact us" })
			}),
			" ",
			/* @__PURE__ */ jsx(T, { children: "in case this is an issue for you." })
		] })
	},
	{
		question: "What happens if I reach a resource limit in my Pro plan?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "Your project will continue to run, and additional charges will apply. You can find the costs for additional resources in the pricing plans comparison below. We will also send you email reminders when you hit 75% and 100% of your resource limits. To avoid unexpected payments, you can set up a" }),
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				className: linkClassName,
				href: "/docs/advanced/billing/pro#budget-cap",
				children: /* @__PURE__ */ jsx(T, { children: "budget cap" })
			}),
			" ",
			/* @__PURE__ */ jsx(T, { children: "on your organization." }),
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				className: linkClassName,
				href: "/docs/advanced/billing/pro#reaching-resource-limits",
				children: /* @__PURE__ */ jsx(T, { children: "Learn more in our docs" })
			}),
			"."
		] })
	},
	{
		question: "What happens if I reach a resource limit in my Free plan?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "Your project will freeze, and Appwrite Console will continue running in read-only mode. You need to upgrade to Pro, remove resources that exceed their limit, or wait for the next billing cycle, which resets usage limits. " }),
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				className: linkClassName,
				href: "/docs/advanced/billing/pro#reaching-resource-limits",
				children: /* @__PURE__ */ jsx(T, { children: "Learn more in our docs" })
			}),
			"."
		] })
	},
	{
		question: "Why does Appwrite ask for payment verification for up to $150?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "The Reserve Bank of India (RBI) mandates additional security measures for recurring payments on Indian cards. Appwrite is obligated to ask for verification before billing your card. Appwrite asks for verification for up to $150 in case you use add-ons, but will not charge more than the actual amount used or your budget cap. If you need higher limits, // pragma: allowlist secret" }),
			" ",
			/* @__PURE__ */ jsx("a", {
				className: linkClassName,
				href: "mailto:billing@appwrite.io",
				children: /* @__PURE__ */ jsx(T, { children: "contact us" })
			}),
			"."
		] })
	},
	{
		question: "How can I join the OSS program?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "The OSS program is exclusively for active open-source maintainers using Appwrite Cloud. You can find more information on how to join the program in our " }),
			" ",
			/* @__PURE__ */ jsx(BlogPageAnchor, {
				className: linkClassName,
				href: "/blog/post/announcing-the-appwrite-oss-program",
				children: /* @__PURE__ */ jsx(T, { children: "announcement blog" })
			}),
			"."
		] })
	},
	{
		question: "How can I join the Startups program?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "Are you a founder looking to build with Appwrite? Learn more about our Startups program on our Startups " }),
			" ",
			/* @__PURE__ */ jsx(MarketingSiteLink, {
				className: linkClassName,
				href: "/startups",
				children: /* @__PURE__ */ jsx(T, { children: "landing page" })
			}),
			"."
		] })
	},
	{
		question: "I have a Free plan account. How do I upgrade to a paid plan?",
		answer: "If you want to upgrade to a paid plan, you can do so in your Appwrite dashboard, select your organization, and change your plan in the Billing section."
	},
	{
		question: "How can I apply credits to my organization?",
		answer: "Go to the Appwrite Console and select the organization you wish to add credits to. In your organization overview, you can switch to the billing tab. Here, you need to go to the bottom of the page, where you will find the ability to add credits, as well as see the status of your credits. Credits are only relevant to Pro organizations since Free organizations are 100% free."
	},
	{
		question: "Where can I find an overview of my organization usage stats?",
		answer: "Go to the Appwrite Console and select the organization you wish to view. Here, you will find a usage tab with an overview of all your project's usage stats."
	},
	{
		question: "Where can I find information about my invoices and other billing information?",
		answer: "Go to the Appwrite Console and use the drop-down menu in the top right corner to navigate to your organization overview by clicking on your organization. This will bring you to your overview, where you can select the billing tab. Here you will find your overview, payment history and methods, billing address, set a budget cap, and add your credits."
	},
	{
		question: "I work with sensitive data and need to sign a BAA. Does Appwrite provide this?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(T, { children: "Yes, you can sign a BAA with Appwrite. Learn more about our security and compliance in our " }),
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				className: linkClassName,
				href: "/docs/advanced/security",
				children: /* @__PURE__ */ jsx(T, { children: "documentation" })
			}),
			"."
		] })
	}
];
function FaqSection() {
	const t = useT();
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background py-16 sm:py-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: marketingSplitLayoutClassName(),
				children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
					align: "left",
					title: t("FAQ"),
					description: t("Common questions about plans, billing, and usage limits.")
				}), /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "item-0",
					className: "w-full",
					children: pricingFaqItems.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${index}`,
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "py-5 text-start hover:no-underline",
							children: /* @__PURE__ */ jsx("span", {
								className: "pe-4 text-[14px] font-medium text-foreground",
								children: t(item.question)
							})
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "text-[13px] leading-6 text-muted-foreground",
							children: typeof item.answer === "string" ? t(item.answer) : item.answer
						})]
					}, item.question))
				})]
			})
		})
	});
}
var PRICING_PROMO_CTA_ACTIONS = {
	free: "pricing-promo-start-free",
	pro: "pricing-promo-start-pro",
	enterprise: "pricing-promo-contact-enterprise"
};
function getPlanPromoCtaLabel(planId) {
	switch (planId) {
		case "free": return "Start for free";
		case "pro": return "Start on Pro";
		case "enterprise": return "Contact us";
	}
}
function PricingPromoPlanCard({ plan }) {
	const t = useT();
	const isPro = plan.id === "pro";
	return /* @__PURE__ */ jsxs("article", {
		className: cn(pricingGlassSurfaceClassName, "flex h-full flex-col p-5 sm:p-6", isPro && "lg:shadow-md"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t(plan.name)
				}), plan.popular ? /* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400",
					children: t("Popular")
				}) : null]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-3 flex flex-wrap items-baseline gap-x-1.5",
				children: [
					plan.pricePrefix ? /* @__PURE__ */ jsx("span", {
						className: "text-[12px] text-muted-foreground",
						children: t(plan.pricePrefix)
					}) : null,
					/* @__PURE__ */ jsx("span", {
						className: cn("font-aeonik-pro font-normal leading-none tracking-tight text-foreground", isPro ? "text-[36px]" : "text-[32px]"),
						children: t(plan.price)
					}),
					plan.priceSuffix ? /* @__PURE__ */ jsx("span", {
						className: "text-[14px] text-muted-foreground",
						children: t(plan.priceSuffix)
					}) : null
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 flex-1 text-[13px] leading-6 text-muted-foreground",
				children: t(plan.description)
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-5",
				children: /* @__PURE__ */ jsx(Button, {
					variant: plan.ctaVariant,
					className: cn("h-10 w-full text-[13px]", plan.ctaVariant === "outline" && "border-[var(--brand-cta)]/30 text-foreground hover:bg-[var(--brand-cta)]/10 hover:text-foreground"),
					asChild: true,
					children: plan.internal ? /* @__PURE__ */ jsx(Link, {
						to: plan.href,
						...plan.id === "enterprise" ? {} : { search: { redirect: "/" } },
						...analyticsAttrs(PRICING_PROMO_CTA_ACTIONS[plan.id]),
						children: t(getPlanPromoCtaLabel(plan.id))
					}) : /* @__PURE__ */ jsx("a", {
						href: plan.href,
						target: "_blank",
						rel: "noopener noreferrer",
						...analyticsAttrs(PRICING_PROMO_CTA_ACTIONS[plan.id]),
						children: t(getPlanPromoCtaLabel(plan.id))
					})
				})
			})
		]
	});
}
function PricingCtaSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden border-t border-border bg-background py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, {
			variant: "testimonials",
			className: "opacity-50"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
				align: "center",
				title: t("Ready to get started?"),
				description: t("Pick the plan that fits your stage. Upgrade anytime as your app grows."),
				className: "max-w-2xl"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6",
				children: pricingPlans.map((plan) => /* @__PURE__ */ jsx(PricingPromoPlanCard, { plan }, plan.id))
			})]
		})]
	});
}
var MAX_HASH_SCROLL_ATTEMPTS = 24;
function getPricingHash(locationHash) {
	const fromRouter = locationHash?.replace(/^#/, "") ?? "";
	if (fromRouter) return fromRouter;
	return window.location.hash.slice(1);
}
function scrollPricingHashTarget(hash, behavior, resetMain) {
	if (!isPricingHashTarget(hash)) return;
	resetPricingPageScrollContainers(resetMain);
	let attempts = 0;
	const tryScroll = () => {
		const target = document.getElementById(hash);
		if (!target && attempts < MAX_HASH_SCROLL_ATTEMPTS) {
			attempts += 1;
			requestAnimationFrame(tryScroll);
			return;
		}
		if (target) scrollToComparisonSection(hash, behavior);
	};
	tryScroll();
}
function usePricingHashScroll() {
	const location = useLocation();
	const shouldResetMainRef = useRef(true);
	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		const hash = getPricingHash(location.hash);
		if (!isPricingHashTarget(hash)) return;
		const previousRestoration = history.scrollRestoration;
		history.scrollRestoration = "manual";
		const resetMain = shouldResetMainRef.current;
		shouldResetMainRef.current = false;
		scrollPricingHashTarget(hash, "auto", resetMain);
		return () => {
			history.scrollRestoration = previousRestoration;
		};
	}, [location.hash, location.pathname]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const root = document.querySelector(".root-container");
		const lockRootScroll = () => {
			if (root instanceof HTMLElement && root.scrollTop !== 0) root.scrollTop = 0;
		};
		if (root instanceof HTMLElement) {
			root.addEventListener("scroll", lockRootScroll, { passive: true });
			lockRootScroll();
		}
		const onHashChange = () => {
			const nextHash = window.location.hash.slice(1);
			if (!isPricingHashTarget(nextHash)) return;
			scrollPricingHashTarget(nextHash, "smooth", false);
		};
		const onPricingHashClick = (event) => {
			if (event.defaultPrevented) return;
			const target = event.target;
			if (!(target instanceof Element)) return;
			const anchor = target.closest("a[href^=\"#\"]");
			if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
			const href = anchor.getAttribute("href");
			if (!href?.startsWith("#")) return;
			const hash = href.slice(1);
			if (!isPricingHashTarget(hash)) return;
			event.preventDefault();
			scrollPricingHashTarget(hash, "smooth", false);
		};
		window.addEventListener("hashchange", onHashChange);
		document.addEventListener("click", onPricingHashClick, true);
		return () => {
			if (root instanceof HTMLElement) root.removeEventListener("scroll", lockRootScroll);
			window.removeEventListener("hashchange", onHashChange);
			document.removeEventListener("click", onPricingHashClick, true);
		};
	}, []);
	useEffect(() => {
		shouldResetMainRef.current = true;
	}, [location.pathname]);
}
function PricingHashScroll() {
	usePricingHashScroll();
	return null;
}
function PricingServicesAvatars() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto mt-20 max-w-3xl text-center sm:mt-24 lg:mt-28",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("All platform services included")
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mx-auto mt-2 max-w-2xl text-[13px] leading-6 text-muted-foreground sm:text-[14px] sm:leading-7",
				children: [t("Every plan includes the full Appwrite platform toolkit."), " "]
			}),
			/* @__PURE__ */ jsx(MarketingProductPills, {
				className: "mt-5 sm:mt-6",
				build: marketingProductToolkit.build,
				deploy: marketingProductToolkit.deploy,
				protect: marketingProductToolkit.protect
			})
		]
	});
}
function PricingHeroSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-background pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-20",
		children: [
			/* @__PURE__ */ jsx(HomeSoftLights, { variant: "pricing" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-[1] mx-auto w-full max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(PricingSectionHeading, {
						title: /* @__PURE__ */ jsxs(Fragment, { children: [
							t("Everything your app needs,"),
							/* @__PURE__ */ jsx("br", {}),
							t("one subscription")
						] }),
						description: t("Build, deploy, secure, and observe your app from one platform, all under one subscription.")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-16 px-2 sm:mt-20 sm:px-4 lg:mt-24 lg:px-8",
						children: /* @__PURE__ */ jsx(PricingCardsGrid, {})
					}),
					/* @__PURE__ */ jsx(PricingServicesAvatars, {})
				]
			})
		]
	});
}
var beforeItems = [
	"Multiple tools with overlapping responsibilities",
	"Separate subscriptions, invoices, and renewal cycles",
	"More integration, maintenance, and ownership overhead"
];
var afterItems = [
	"One platform across the app lifecycle",
	"One subscription with simpler billing and procurement",
	"Fewer systems to integrate, secure, and maintain"
];
function StackConsolidationSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden border-b border-border bg-background py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, { variant: "testimonials" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
						align: "left",
						size: "md",
						title: t("One platform. One subscription."),
						className: "max-w-2xl"
					}), /* @__PURE__ */ jsx("span", {
						className: "inline-flex w-fit shrink-0 rounded-full bg-background/70 px-3 py-1 text-[11px] font-medium text-muted-foreground",
						children: t("1 vendor • 1 subscription • 1 bill")
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-3xl text-[14px] leading-7 text-muted-foreground",
					children: t("Replace fragmented backend, hosting, storage, and delivery tooling with a single platform built for the full application lifecycle. Reduce integration surface area, simplify procurement, and give your team one system to operate and scale.")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/45 p-5",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Before")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-3",
							children: beforeItems.map((item) => /* @__PURE__ */ jsx("li", {
								className: "text-[13px] leading-6 text-muted-foreground",
								children: t(item)
							}, item))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/45 p-5",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("After")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-3",
							children: afterItems.map((item) => /* @__PURE__ */ jsx("li", {
								className: "text-[13px] leading-6 text-foreground",
								children: t(item)
							}, item))
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "h-10 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsxs("a", {
							href: `#${PRICING_COMPARE_ANCHOR_ID}`,
							onClick: (event) => {
								event.preventDefault();
								scrollToComparisonSection(PRICING_COMPARE_ANCHOR_ID);
							},
							children: [t("See what's included"), /* @__PURE__ */ jsx(ArrowRight, { className: "ms-1.5 size-4" })]
						})
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Compare plan limits, included capabilities, and scaling options.")
					})]
				})
			]
		})]
	});
}
function View() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ jsx(PricingHeroSection, {}),
			/* @__PURE__ */ jsx(StackConsolidationSection, {}),
			/* @__PURE__ */ jsx(DatabasePricingSection, {}),
			/* @__PURE__ */ jsx(ComparePlansSection, {}),
			/* @__PURE__ */ jsx(FaqSection, {}),
			/* @__PURE__ */ jsx(PricingCtaSection, {}),
			/* @__PURE__ */ jsx(PricingHashScroll, {})
		]
	});
}
function PricingPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { PricingPage as component };
