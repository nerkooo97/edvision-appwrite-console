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
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./textarea-CfKMnSVC.js";
import "./use-media-min-width-T-T6WgXi.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./accordion-DmQmnCa5.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import "./registry-C4rxXMsK.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, i as MarketingFeatureGrid, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { t as MarketingFaqSection } from "./MarketingFaqSection-DYJ5RTNJ.js";
import "./avatar-DsYcfNc5.js";
import "./customer-logos-Bzm6qZH_.js";
import { i as MarketingApplicationForm, r as submitStartupsApplication } from "./growth-forms-DjFa9_F0.js";
import { n as MarketingProductPills, t as marketingProductToolkit } from "./product-toolkit-C63_kutv.js";
import { t as TestimonialsSection } from "./TestimonialsSection-DWrG0DG4.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRightLeft, Check, Cloud, Gift, Globe, GraduationCap, Headphones, Rocket, Scale, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
function OpenSourceIcon({ className, ...props }) {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 590 590",
		"aria-hidden": true,
		className: cn("size-3.5", className),
		...props,
		children: /* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M328.7,395.8c40.3-15,61.4-43.8,61.4-93.4S348.3,209,296,208.9c-55.1-0.1-96.8,43.6-96.1,93.5s24.4,83,62.4,94.9L195,563C104.8,539.7,13.2,433.3,13.2,302.4C13.2,147.3,137.8,21.5,294,21.5s282.8,125.7,282.8,280.8c0,133-90.8,237.9-182.9,261.1L328.7,395.8z"
		})
	});
}
const startupsHero = {
	eyebrow: "Startups Program",
	title: "Build your startup with Appwrite",
	description: "The Appwrite Startups Program gives you an all-in-one platform to build and host your product, plus cloud credits, training, priority support, and founder swag."
};
const startupsEligibility = {
	title: "Who qualifies",
	description: "The Startups program is for product teams at an early stage of growth. Apply if your company meets the criteria below.",
	criteria: [
		{
			title: "Product-focused startup",
			description: "You are building a software product or platform. The program is not open to agencies, consultancies, or resellers.",
			icon: Rocket
		},
		{
			title: "Early-stage company",
			description: "Your company is 5 years old or younger and has raised funding (pre-seed through Series A) or bootstrapped revenue up to $5M in annual recurring revenue.",
			icon: TrendingUp
		},
		{
			title: "Building on Appwrite Cloud",
			description: "You are starting a new project on Appwrite or migrating from another backend provider.",
			icon: ArrowRightLeft
		}
	],
	proPlanCallout: {
		title: "No funding or revenue yet?",
		description: "The Startups program is for companies with traction through funding or revenue. If you have neither, Appwrite Cloud Pro is the right place to start building.",
		ctaLabel: "View Pro plan",
		ctaHref: "/pricing"
	},
	exclusions: {
		title: "Outside the program",
		description: "The Startups program is reserved for early-stage product companies with funding or revenue. These profiles are usually not accepted.",
		items: [
			{
				title: "Beyond early stage",
				description: "Companies older than 5 years, unless bootstrapped with up to $5M in annual recurring revenue."
			},
			{
				title: "Later-stage funding",
				description: "VC-backed companies that have raised beyond Series A."
			},
			{
				title: "Bootstrapped above $5M ARR",
				description: "Bootstrapped companies with more than $5M in annual recurring revenue."
			},
			{
				title: "Agencies and consultancies",
				description: "Businesses primarily offering services rather than building their own software product."
			}
		]
	}
};
const startupsTopBenefits = [
	{
		title: "Cloud credits",
		description: "Save on development and cloud costs and reduce risk at an early stage.",
		icon: Cloud
	},
	{
		title: "Training",
		description: "Join workshops and training sessions to help your team build and scale with Appwrite.",
		icon: GraduationCap
	},
	{
		title: "Priority support",
		description: "Get community support and priority support from the Appwrite team.",
		icon: Headphones
	},
	{
		title: "Founder swag",
		description: "Get exclusive Appwrite swag for founders in the program.",
		icon: Gift
	}
];
const startupsPlatformBenefits = [
	{
		title: "All-in-one platform",
		description: "Use one platform for backend development and web hosting and reduce vendors.",
		icon: Globe
	},
	{
		title: "AI-powered development",
		description: "Connect your favorite AI productivity tools with Appwrite's MCP.",
		icon: Sparkles
	},
	{
		title: "Scale effortlessly",
		description: "From MVP to enterprise, our app scales automatically, letting you focus on your business goals.",
		icon: Rocket
	},
	{
		title: "Zero configuration development",
		description: "Spin up your backend in minutes, deploy in seconds. Fast and simple.",
		icon: Zap
	},
	{
		title: "Built-in security",
		description: "Your users' data is safe from day one with Appwrite's built in security.",
		icon: Shield
	},
	{
		title: "Compliance",
		description: "We adhere to all needed compliance: GDPR, HIPAA, CCPA, SOC-2.",
		icon: Scale
	},
	{
		title: "Open-source",
		description: "Your data is always yours. Want to migrate away? You can do so at any time.",
		icon: OpenSourceIcon
	}
];
const startupsToolkit = marketingProductToolkit;
const startupsFormBullets = [
	"Appwrite Cloud Pro for 12 months",
	"Cloud credits for Appwrite Cloud",
	"Unlimited team members",
	"Premium email support",
	"Workshops and training sessions for your team",
	"Private Slack channel with the Appwrite team",
	"Dedicated program manager",
	"Exclusive founder swag"
];
const STARTUPS_FORM_ID = "apply";
const startupsApplySteps = [
	{
		title: "Submit your application",
		description: "Share your name, email, company name, and website using the application form below.",
		href: `#${STARTUPS_FORM_ID}`,
		label: "Go to application form"
	},
	{
		title: "We review your eligibility",
		description: "Our team evaluates your application against the program criteria and follows up by email."
	},
	{
		title: "Get onboarded",
		description: "If accepted, we activate your program benefits and share next steps to build on Appwrite Cloud.",
		href: "/docs",
		label: "Go to Appwrite Docs",
		external: true
	}
];
const startupsFaqItems = [
	{
		question: "How do I apply?",
		answer: "Complete the application form on this page with your full name, email, company name, and website."
	},
	{
		question: "What happens after I apply?",
		answer: "Our team reviews your application against the program criteria and follows up by email with onboarding steps if you are accepted."
	},
	{
		question: "Who is eligible to apply?",
		answer: "We welcome product-focused startups that are 5 years old or younger and have raised funding (pre-seed through Series A) or bootstrapped revenue up to $5M in annual recurring revenue. Companies with no funding and no revenue are not eligible. The program is not open to agencies, consultancies, or resellers."
	},
	{
		question: "What if we have no funding or revenue yet?",
		answer: "The Startups program requires evidence of traction through funding or revenue. If your company has neither, start with Appwrite Cloud Pro instead of applying here.",
		links: [{
			label: "View Pro plan",
			href: "/pricing"
		}]
	},
	{
		question: "Does the Appwrite Startups program include web hosting?",
		answer: "Yes. Accepted startups can host websites and web apps with Appwrite Sites as part of the program."
	},
	{
		question: "What's included in the Appwrite Startups program?",
		answer: "Program members receive Appwrite Cloud Pro for 12 months, cloud credits, unlimited team members, premium email support, training workshops, a private Slack channel with our team, a dedicated program manager, and founder swag."
	},
	{
		question: "What kind of support do we get?",
		answer: "You have access to the Appwrite community for technical questions. Program members also receive a private Slack channel with our support team and a dedicated program manager for non-technical questions."
	},
	{
		question: "What are the limits of the Pro plan?",
		answer: "The Appwrite Pro plan includes generous limits designed for production applications. Review our pricing page for a full overview of included resources and add-ons."
	},
	{
		question: "Are OTP SMS costs covered by Appwrite?",
		answer: "OTP SMS messages are billed per message sent. You can use mock phone numbers to test OTP functionality without incurring costs. See our documentation for regional SMS rates and pricing details."
	},
	{
		question: "What happens if we scale overnight?",
		answer: "Appwrite is built to handle large traffic spikes and grow with your application. During a major launch, we can also provide increased support and on-call help."
	},
	{
		question: "What if we need more resources than the Startups program offers?",
		answer: "If your needs grow beyond the program, contact us to discuss Enterprise options and a tailored plan for your organization."
	},
	{
		question: "I am already using another backend provider. How do I migrate to Appwrite?",
		answer: "Appwrite includes a migration tool to help you move from other platforms. Our team can also assist if you need additional help during your transition."
	},
	{
		question: "I need to sign a BAA. Can I do this with Appwrite?",
		answer: "Yes. We can provide a Business Associate Agreement for organizations that require it."
	}
];
var STARTUPS_FORM_FIELDS = [
	{
		name: "personName",
		label: "Full name",
		type: "text",
		placeholder: "Walter O'Brien"
	},
	{
		name: "personEmail",
		label: "Email address",
		type: "email",
		placeholder: "walter@company.com"
	},
	{
		name: "companyName",
		label: "Company name",
		type: "text",
		placeholder: "Company Inc."
	},
	{
		name: "companyUrl",
		label: "Company website",
		type: "text",
		placeholder: "https://company.com"
	}
];
function scrollToForm() {
	document.getElementById(STARTUPS_FORM_ID)?.scrollIntoView({ behavior: "smooth" });
}
function View() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				eyebrow: startupsHero.eyebrow,
				title: startupsHero.title,
				description: startupsHero.description,
				gradientTitle: true,
				wideFooter: true,
				footer: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
					items: startupsTopBenefits,
					columns: 4,
					className: "mt-16 text-start sm:mt-20"
				}),
				children: /* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					onClick: scrollToForm,
					...analyticsAttrs("startups-apply-now"),
					children: t("Apply now")
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-muted/20 py-14 sm:py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(MarketingSectionHeading, {
							title: startupsEligibility.title,
							description: startupsEligibility.description,
							size: "md"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
								items: startupsEligibility.criteria,
								columns: 3
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-col gap-4 rounded-xl border border-border bg-card/45 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t(startupsEligibility.proPlanCallout.title)
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
									children: t(startupsEligibility.proPlanCallout.description)
								})]
							}), /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								className: "w-fit shrink-0",
								asChild: true,
								children: /* @__PURE__ */ jsx(Link, {
									to: startupsEligibility.proPlanCallout.ctaHref,
									children: t(startupsEligibility.proPlanCallout.ctaLabel)
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-12 border-t border-border pt-10",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t(startupsEligibility.exclusions.title)
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
									children: t(startupsEligibility.exclusions.description)
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-8 grid overflow-hidden rounded-xl border border-border bg-card/45 sm:grid-cols-2",
								children: startupsEligibility.exclusions.items.map((item, index) => /* @__PURE__ */ jsxs("article", {
									className: cn("p-5", index < startupsEligibility.exclusions.items.length - 1 && "border-b border-border sm:border-b-0", index % 2 === 0 && "sm:border-e sm:border-border", index < 2 && "sm:border-b sm:border-border"),
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[14px] font-semibold text-foreground",
										children: t(item.title)
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] leading-5 text-muted-foreground",
										children: t(item.description)
									})]
								}, item.title))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Your startups developer toolkit"),
						description: t("Appwrite offers an all-in-one hosting platform for you to build and deploy your product from a single place."),
						size: "md"
					}), /* @__PURE__ */ jsx(MarketingProductPills, {
						build: startupsToolkit.build,
						deploy: startupsToolkit.deploy,
						protect: startupsToolkit.protect
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName({ align: "start" }),
						children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: t("Benefits of Appwrite for startups"),
							description: t("You don't need to have a team of engineers to develop, host, and scale applications. Appwrite gives you everything you need, including built-in security, AI, and open source.")
						}), /* @__PURE__ */ jsx(MarketingFeatureGrid, {
							items: startupsPlatformBenefits,
							columns: 2
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(TestimonialsSection, {}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("How to apply"),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid overflow-hidden rounded-xl border border-border bg-card/45 lg:grid-cols-3",
						children: startupsApplySteps.map((step, index) => /* @__PURE__ */ jsxs("article", {
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
								}),
								step.href && step.label ? /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "mt-6 w-fit",
									asChild: true,
									children: step.external ? /* @__PURE__ */ jsx("a", {
										href: step.href,
										target: "_blank",
										rel: "noopener noreferrer",
										children: t(step.label)
									}) : /* @__PURE__ */ jsx("a", {
										href: step.href,
										children: t(step.label)
									})
								}) : null
							]
						}, step.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx(MarketingFaqSection, { items: startupsFaqItems }),
			/* @__PURE__ */ jsxs("section", {
				id: STARTUPS_FORM_ID,
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
							title: t("Join the Appwrite Startups program"),
							description: t("Accepted startups receive:")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3",
							children: startupsFormBullets.map((item) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-[13px] text-foreground",
								children: [/* @__PURE__ */ jsx(Check, {
									className: "size-4 shrink-0 text-[var(--brand-cta)]",
									"aria-hidden": true
								}), t(item)]
							}, item))
						})] }), /* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8",
							children: /* @__PURE__ */ jsx(MarketingApplicationForm, {
								fields: STARTUPS_FORM_FIELDS,
								submitLabel: t("Get Started"),
								submitAnalyticsAction: "startups-form-submit",
								onSubmit: async (values) => {
									await submitStartupsApplication({
										personName: values.personName ?? "",
										personEmail: values.personEmail ?? "",
										companyName: values.companyName ?? "",
										companyUrl: values.companyUrl ?? ""
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
function StartupsPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { StartupsPage as component };
