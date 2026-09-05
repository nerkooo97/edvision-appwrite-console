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
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./label-D8nNLJBa.js";
import "./textarea-CfKMnSVC.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import { t as CARD_LINK_HINT_CLASS } from "./link-styles-DzUNTdI9.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights, s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, i as MarketingFeatureGrid, l as MarketingStatGrid, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { i as MarketingApplicationForm, n as submitPartnerApplication } from "./growth-forms-DjFa9_F0.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, ChevronRight, Code2, GraduationCap, Handshake, Headphones, Layers, Lightbulb, Megaphone, Percent, Puzzle, Rocket, Sparkles } from "lucide-react";
const partnersHero = {
	eyebrow: "Partners Program",
	title: "Boost businesses with Appwrite",
	description: "Join the Appwrite Partners program and grow your business. Deliver powerful solutions to clients, increase revenue, and expand your reach.",
	catalogUrl: "/partners"
};
const partnerBenefits = [
	{
		title: "Co-marketing",
		description: "We will have a dedicated partner catalog, an official partner badge, and other visibility opportunities.",
		icon: Megaphone
	},
	{
		title: "Training",
		description: "We provide in-depth training and workshops to help you master Appwrite for your clients.",
		icon: GraduationCap
	},
	{
		title: "Support",
		description: "You will get access to the Appwrite engineering team to get the support you need.",
		icon: Headphones
	},
	{
		title: "Early access",
		description: "You will get early access to new features and products and the ability to influence our roadmap.",
		icon: Sparkles
	},
	{
		title: "Innovation",
		description: "Empower your team and elevate your customers' experiences with the newest technology.",
		icon: Lightbulb
	},
	{
		title: "Discounts",
		description: "Volume discounts are available in case you handle the bill for your clients.",
		icon: Percent
	}
];
const partnerWhyAppwrite = [
	{
		title: "Developer experience",
		description: "Appwrite is built for and by developers, with a strong focus on your experience. Never worry about scaling or security again.",
		icon: Code2
	},
	{
		title: "Ship faster",
		description: "Appwrite reduces the time and resources spent building a backend infrastructure from scratch.",
		icon: Rocket
	},
	{
		title: "All in one platform",
		description: "Everything you need to develop, deploy, and scale your applications.",
		icon: Layers
	}
];
const partnerTiers = [
	{
		title: "Platinum",
		badge: "/images/partners/badges/platinum.svg"
	},
	{
		title: "Gold",
		badge: "/images/partners/badges/gold.svg"
	},
	{
		title: "Silver",
		badge: "/images/partners/badges/silver.svg"
	}
];
const partnerWays = [{
	title: "Experts",
	description: "For agencies, consultancies, freelancers, and integrators who want to provide a scalable backend solution for their clients. Partner with Appwrite to provide a highly custom solution with the newest technology.",
	href: "/partners",
	label: "Find a Partner"
}, {
	title: "Integrations",
	description: "For innovative software companies striving to create solutions that integrate seamlessly with our platform. Partner with Appwrite to create a better developer experience.",
	href: "/integrations",
	label: "Find an Integration"
}];
const partnerStats = [
	{
		value: "650k+",
		label: "Community members"
	},
	{
		value: "50k+",
		label: "GitHub stars"
	},
	{
		value: "900+",
		label: "OSS Contributors"
	},
	{
		value: "300",
		label: "Top GitHub projects"
	}
];
const partnerFormBullets = [
	"Grow your business",
	"Work with the latest technology",
	"Deliver your clients a great experience"
];
const PARTNERS_FORM_ID = "apply";
var PARTNER_FORM_FIELDS = [
	{
		name: "name",
		label: "Full name",
		type: "text",
		placeholder: "Walter O'Brien"
	},
	{
		name: "email",
		label: "Email address",
		type: "email",
		placeholder: "walter@company.com"
	},
	{
		name: "companyName",
		label: "Company name",
		type: "text",
		placeholder: "Acme Inc."
	},
	{
		name: "companyUrl",
		label: "Company URL",
		type: "url",
		placeholder: "https://",
		required: false
	},
	{
		name: "message",
		label: "Any other details you'd like to share?",
		type: "textarea",
		placeholder: "Your message...",
		colSpan: 2
	}
];
function View() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsxs(MarketingHeroSection, {
				eyebrow: partnersHero.eyebrow,
				title: partnersHero.title,
				description: partnersHero.description,
				align: "left",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx("a", {
						href: `#${PARTNERS_FORM_ID}`,
						children: t("Become a Partner")
					})
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(MarketingSiteLink, {
						href: partnersHero.catalogUrl,
						children: t("Find a Partner")
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Growing together"),
						description: t("Partner benefits designed to help you deliver more value to your clients."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
							items: partnerBenefits,
							columns: 3
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border bg-muted/20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, { tone: "purple" }), /* @__PURE__ */ jsx("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName({ align: "center" }),
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: t("Partner Tiers"),
							description: t("As your business grows, so do the opportunities with Appwrite. Our Partner Program is designed to evolve with you, offering flexible tiers that adapt to your unique needs and goals.")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: "mt-6",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: `#${PARTNERS_FORM_ID}`,
								children: t("Become a Partner")
							})
						})] }), /* @__PURE__ */ jsx("div", {
							className: "flex flex-col items-center gap-2",
							children: partnerTiers.map((tier, index) => /* @__PURE__ */ jsx("img", {
								src: tier.badge,
								alt: `${t(tier.title)} ${t("Badge")}`,
								className: "max-w-[280px] object-contain",
								style: {
									marginBottom: index === partnerTiers.length - 1 ? 0 : `-${32 + index * 8}px`,
									transform: `scale(${1 - index * .12})`,
									zIndex: partnerTiers.length - index
								}
							}, tier.title))
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Ways to partner"),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-3 md:grid-cols-2",
						children: partnerWays.map((way) => /* @__PURE__ */ jsxs("a", {
							href: way.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group link-unstyled flex items-start gap-3 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:bg-accent/50 sm:p-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted",
								children: way.title === "Experts" ? /* @__PURE__ */ jsx(Handshake, {
									className: "size-5 text-[var(--brand-cta)]",
									"aria-hidden": true
								}) : /* @__PURE__ */ jsx(Puzzle, {
									className: "size-5 text-[var(--brand-cta)]",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[14px] font-semibold text-foreground",
										children: t(way.title)
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] leading-6 text-muted-foreground",
										children: t(way.description)
									}),
									/* @__PURE__ */ jsxs("span", {
										className: cn("mt-4 text-[13px]", CARD_LINK_HINT_CLASS),
										children: [t(way.label), /* @__PURE__ */ jsx(ChevronRight, {
											className: "ms-0.5 size-4",
											"aria-hidden": true
										})]
									})
								]
							})]
						}, way.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-background py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Partner with one of the fastest growing dev tool companies"),
						description: t("Everyday thousands of companies are built on top of Appwrite. Benefit from our network as an Appwrite Partner."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingStatGrid, {
							items: [...partnerStats],
							compact: false
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(MarketingSectionHeading, {
							title: t("Why Appwrite?"),
							size: "md"
						}),
						" ",
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
								items: partnerWhyAppwrite,
								columns: 3
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: PARTNERS_FORM_ID,
				className: "relative scroll-mt-28 border-b border-border",
				children: [/* @__PURE__ */ jsx(HomeSoftLights, {
					variant: "testimonials",
					className: "opacity-40"
				}), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName({ align: "start" }),
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: t("Become a Partner"),
							description: t("Our team will review your application and follow up to ensure we're a perfect fit.")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-8 space-y-3",
							children: partnerFormBullets.map((item) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-[13px] text-foreground",
								children: [/* @__PURE__ */ jsx(Check, {
									className: "size-4 shrink-0 text-[var(--brand-cta)]",
									"aria-hidden": true
								}), t(item)]
							}, item))
						})] }), /* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8",
							children: /* @__PURE__ */ jsx(MarketingApplicationForm, {
								fields: PARTNER_FORM_FIELDS,
								submitLabel: t("Submit application"),
								submitAnalyticsAction: "partners-form-submit",
								successTitle: t("Thank you for applying"),
								successDescription: t("Our team will review your application and follow up to ensure we're a perfect fit."),
								onSubmit: async (values) => {
									await submitPartnerApplication({
										name: values.name ?? "",
										email: values.email ?? "",
										companyName: values.companyName ?? "",
										companyUrl: values.companyUrl ?? "",
										message: values.message ?? ""
									});
								}
							})
						})]
					})
				})]
			})
		]
	});
}
function PartnersPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { PartnersPage as component };
