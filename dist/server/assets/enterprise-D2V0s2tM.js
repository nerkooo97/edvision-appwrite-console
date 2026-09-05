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
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./label-D8nNLJBa.js";
import "./textarea-CfKMnSVC.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./accordion-DmQmnCa5.js";
import { c as trackEvent } from "./analytics-C_KnVoso.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights, s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import "./registry-C4rxXMsK.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, i as MarketingFeatureGrid, o as MarketingHeroStats, t as MarketingBentoFeatureCard, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { t as MarketingFaqSection } from "./MarketingFaqSection-DYJ5RTNJ.js";
import { a as TrustedByLogo, n as allCustomerLogos } from "./customer-logos-Bzm6qZH_.js";
import { i as MarketingApplicationForm, t as submitEnterpriseApplication } from "./growth-forms-DjFa9_F0.js";
import { n as MarketingProductPills, t as marketingProductToolkit } from "./product-toolkit-C63_kutv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Activity, ArrowRight, Building2, Check, Cloud, Compass, GraduationCap, Headphones, Lock, Server, Shield, ShieldAlert, ShieldCheck, UserRoundCheck, Users, Zap } from "lucide-react";
const ENTERPRISE_FORM_ID = "enterprise-contact-form";
const enterpriseHero = {
	eyebrow: "Enterprise",
	title: "Appwrite for Enterprise",
	description: "Replace a patchwork of backend vendors with one platform. Enterprise teams reduce integration overhead, accelerate delivery, and scale with custom resources, dedicated support, and flexible deployment."
};
const enterprisePlatformSection = {
	title: "One platform for your entire stack",
	description: "Reduce vendor sprawl and integration overhead. Appwrite unifies the backend services enterprise teams need to build, deploy, and protect modern applications without juggling multiple contracts or stitching vendors together."
};
const enterpriseSecuritySection = {
	eyebrow: "Trust center",
	title: "Security and compliance",
	description: "Compliance artifacts, agreements, and enterprise governance built for security reviews and procurement. Enterprise plans include access to SOC 2 reporting, data processing agreements, and advanced identity controls."
};
const enterpriseComplianceFrameworks = [
	{
		name: "SOC 2 Type II",
		summary: "Audited security controls"
	},
	{
		name: "HIPAA",
		summary: "Healthcare workloads"
	},
	{
		name: "GDPR",
		summary: "EU data processing"
	},
	{
		name: "CCPA",
		summary: "California privacy"
	}
];
const enterpriseSecurityControls = [
	{
		title: "Compliance",
		icon: "shield",
		items: [
			"SOC 2 Type II report",
			"DPA",
			"HIPAA-aligned controls"
		]
	},
	{
		title: "Identity",
		icon: "lock",
		items: [
			"SSO",
			"Custom organization roles",
			"Activity logs"
		]
	},
	{
		title: "Protection",
		icon: "server",
		items: [
			"Firewall and WAF",
			"90-day log retention",
			"Custom backup policies"
		]
	}
];
const enterpriseStats = [
	{
		value: "40M+",
		label: "Developers worldwide"
	},
	{
		value: "120+",
		label: "CDN locations"
	},
	{
		value: "24/7",
		label: "Slack support"
	},
	{
		value: "99.99%",
		label: "Uptime SLA"
	},
	{
		value: "SOC 2",
		label: "Type II certified"
	}
];
const enterpriseValueProps = [
	{
		title: "All-in-one platform",
		description: "Auth, databases, storage, functions, messaging, hosting, and network security in one stack your teams already know how to operate.",
		icon: Building2
	},
	{
		title: "Faster time to market",
		description: "Ship production features without stitching together multiple vendors or maintaining custom backend infrastructure.",
		icon: Zap
	},
	{
		title: "Built for scale",
		description: "Custom bandwidth, storage, compute, and project limits tailored to your traffic, workloads, and organizational structure.",
		icon: Server
	},
	{
		title: "Enterprise support",
		description: "Dedicated success management, priority response times, and direct access to Appwrite engineers when you need them.",
		icon: Headphones
	}
];
const enterprisePlanCapabilities = [
	{
		title: "Uptime SLAs",
		description: "Contractual availability commitments for mission-critical production workloads.",
		icon: Activity
	},
	{
		title: "Volume discounts",
		description: "Pricing aligned to your usage profile across bandwidth, storage, and compute.",
		icon: Building2
	},
	{
		title: "Log drains",
		description: "Stream execution and platform logs into your observability stack.",
		icon: Server
	},
	{
		title: "90-day log retention",
		description: "Extended retention for audits, incident response, and compliance workflows.",
		icon: Activity
	},
	{
		title: "Advanced observability",
		description: "Deeper visibility into platform activity, performance, and operational health.",
		icon: Zap
	},
	{
		title: "Firewall",
		description: "Appwrite Firewall with WAF capabilities to filter malicious traffic and protect applications at the edge.",
		icon: ShieldCheck
	},
	{
		title: "Premium DDoS protection",
		description: "Enhanced network-level DDoS mitigation for high-traffic production workloads and mission-critical availability.",
		icon: ShieldAlert
	},
	{
		title: "SOC-2 and HIPAA",
		description: "Compliance options for regulated industries and enterprise procurement requirements.",
		icon: Shield
	},
	{
		title: "Single Sign-On (SSO)",
		description: "Centralized identity for console access with enterprise authentication policies.",
		icon: Lock
	},
	{
		title: "Activity logs",
		description: "Track console actions across your organization for security and governance.",
		icon: Activity
	},
	{
		title: "Custom backup policies",
		description: "Retention and recovery settings aligned to your disaster recovery requirements.",
		icon: Server
	},
	{
		title: "Custom organization roles",
		description: "Fine-grained access control beyond standard owner and developer roles.",
		icon: Users
	}
];
const enterpriseDeploymentSection = {
	title: "Cloud or self-hosted",
	description: "Run Enterprise on fully managed Appwrite Cloud or as a premium self-hosted edition in your environment.",
	sharedBenefitsTitle: "Included with both Cloud and self-hosted Enterprise"
};
const enterpriseDeploymentSharedBenefits = [
	{
		title: "24/7 support",
		description: "Round-the-clock Slack and email from our engineering team.",
		icon: Headphones
	},
	{
		title: "Customer success manager",
		description: "Dedicated partner for onboarding and ongoing success.",
		icon: UserRoundCheck
	},
	{
		title: "Consultancy",
		description: "Architecture and deployment guidance for your stack.",
		icon: Compass
	},
	{
		title: "Training",
		description: "Hands-on sessions to onboard your developers.",
		icon: GraduationCap
	}
];
const enterpriseDeploymentOptions = [{
	title: "Appwrite Cloud",
	description: "Fully managed infrastructure with a plan customized to your needs: increased limits, predictable fixed pricing, uptime SLAs, and global CDN.",
	icon: Cloud
}, {
	title: "Self-hosted edition",
	description: "A premium, cloud-equal edition with advanced management tools. The same platform and tooling Appwrite uses to run Cloud at 500K projects scale, deployed in your environment.",
	icon: Server
}];
const enterpriseFormBullets = [
	"Custom bandwidth, storage, and compute limits",
	"Dedicated success manager and 24/7 Slack support",
	"Uptime SLAs and volume-based pricing",
	"SOC-2, HIPAA, SSO, and activity logs",
	"Custom Cloud limits with fixed pricing, or premium self-hosted with enterprise management tools"
];
const enterpriseCompanySizeOptions = [
	{
		value: "1-10 employees",
		label: "1-10 employees"
	},
	{
		value: "11-50 employees",
		label: "11-50 employees"
	},
	{
		value: "51-200 employees",
		label: "51-200 employees"
	},
	{
		value: "201-500 employees",
		label: "201-500 employees"
	},
	{
		value: "501-1000 employees",
		label: "501-1000 employees"
	},
	{
		value: "1001-5000 employees",
		label: "1001-5000 employees"
	},
	{
		value: "5000+ employees",
		label: "5000+ employees"
	}
];
const enterprisePreferredDeploymentOptions = [
	{
		value: "Appwrite Cloud",
		label: "Appwrite Cloud"
	},
	{
		value: "Self-hosted edition",
		label: "Self-hosted edition"
	},
	{
		value: "Not sure yet",
		label: "Not sure yet"
	}
];
const enterpriseTimelineOptions = [
	{
		value: "Exploring options",
		label: "Exploring options"
	},
	{
		value: "Evaluating vendors",
		label: "Evaluating vendors"
	},
	{
		value: "Ready to buy",
		label: "Ready to buy"
	}
];
const enterpriseFaqItems = [
	{
		question: "Who is the Enterprise plan for?",
		answer: "Enterprise is designed for organizations with production workloads that need custom resource limits, premium support, compliance options, or deployment flexibility beyond the Pro plan."
	},
	{
		question: "How is Enterprise pricing determined?",
		answer: "Pricing is based on your usage profile, support requirements, and deployment model. Cloud Enterprise plans offer customized limits with predictable fixed pricing. Our team works with you to build a plan that matches your scale and procurement process."
	},
	{
		question: "Can we self-host Appwrite?",
		answer: "Yes. The Enterprise self-hosted edition is a premium, cloud-equal release with advanced management tools. It is the same platform Appwrite uses to run Cloud at 500K projects scale, deployed in your environment with dedicated support, SLAs, and compliance features."
	},
	{
		question: "What support is included?",
		answer: "Enterprise customers receive a dedicated success manager, 24/7 support on Slack, and priority response times. We also help with onboarding, architecture reviews, and ongoing optimization."
	},
	{
		question: "What compliance options are available?",
		answer: "Enterprise plans can include SOC-2 and HIPAA support, along with SSO, activity logs, and custom backup policies for security and governance workflows."
	},
	{
		question: "How do we get started?",
		answer: "Fill out the contact form on this page. Our sales team will review your use case and schedule a conversation to scope resources, support, and deployment options."
	}
];
function SecuritySectionLinks({ onContactSales }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap items-center justify-center gap-3",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			size: "sm",
			className: "h-9 text-[13px]",
			asChild: true,
			children: /* @__PURE__ */ jsxs(DocsRouteLink, {
				href: "/docs/advanced/security",
				children: [t("Security docs"), /* @__PURE__ */ jsx(ArrowRight, {
					className: "ms-1.5 size-3.5",
					"aria-hidden": true
				})]
			})
		}), onContactSales ? /* @__PURE__ */ jsx(Button, {
			variant: "ghost",
			size: "sm",
			className: "h-9 text-[13px] text-muted-foreground",
			onClick: onContactSales,
			...analyticsAttrs("enterprise-contact-sales"),
			children: t("Contact sales")
		}) : null]
	});
}
function SecurityComplianceSection({ onContactSales }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-b border-border py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx(SectionSoftLight, {
			tone: "purple",
			position: "left"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
							children: [t(enterpriseSecuritySection.eyebrow), /* @__PURE__ */ jsx("span", {
								className: "text-[var(--brand-cta)]",
								children: "_"
							})]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-3 font-aeonik-pro text-balance text-[30px] font-normal leading-none tracking-tight text-foreground sm:text-[36px]",
							children: [t(enterpriseSecuritySection.title), /* @__PURE__ */ jsx("span", {
								className: "text-[var(--brand-cta)]",
								children: "_"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-[14px] leading-7 text-muted-foreground sm:text-[15px]",
							children: t(enterpriseSecuritySection.description)
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6",
							children: /* @__PURE__ */ jsx(SecuritySectionLinks, { onContactSales })
						})
					]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-12 flex flex-wrap items-center justify-center gap-2.5",
					children: enterpriseComplianceFrameworks.map((framework) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", {
						title: framework.summary ? t(framework.summary) : void 0,
						className: "inline-flex items-center rounded-full border border-border/80 bg-muted/25 px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-muted/40",
						children: framework.name
					}) }, framework.name))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid overflow-hidden rounded-xl border border-border sm:grid-cols-3",
					children: enterpriseSecurityControls.map((control, index) => /* @__PURE__ */ jsxs("div", {
						className: cn(index > 0 && "border-t border-border sm:border-t-0 sm:border-s sm:border-border"),
						children: [/* @__PURE__ */ jsx("div", {
							className: "border-b border-border bg-muted/15 px-4 py-3",
							children: /* @__PURE__ */ jsx("h3", {
								className: "text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground",
								children: t(control.title)
							})
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-2 px-4 py-4",
							children: control.items.map((item) => /* @__PURE__ */ jsx("li", {
								className: "text-[13px] leading-5 text-muted-foreground",
								children: t(item)
							}, item))
						})]
					}, control.title))
				})
			]
		})]
	});
}
var ENTERPRISE_FORM_FIELDS = [
	{
		name: "firstName",
		label: "First name",
		type: "text",
		placeholder: "Walter"
	},
	{
		name: "lastName",
		label: "Last name",
		type: "text",
		placeholder: "O'Brien"
	},
	{
		name: "email",
		label: "Work email address",
		type: "email",
		placeholder: "walter@company.com"
	},
	{
		name: "companyName",
		label: "Company name",
		type: "text",
		placeholder: "Acme Corp"
	},
	{
		name: "companySize",
		label: "Company size",
		type: "select",
		placeholder: "Select size",
		required: false,
		options: [...enterpriseCompanySizeOptions]
	},
	{
		name: "companyWebsite",
		label: "Company website",
		type: "text",
		placeholder: "appwrite.io or https://appwrite.io"
	},
	{
		name: "preferredDeployment",
		label: "Preferred deployment",
		type: "select",
		placeholder: "Select deployment",
		required: false,
		options: [...enterprisePreferredDeploymentOptions]
	},
	{
		name: "timeline",
		label: "Timeline",
		type: "select",
		placeholder: "Select timeline",
		required: false,
		options: [...enterpriseTimelineOptions]
	},
	{
		name: "useCase",
		label: "Please share more information about your use case",
		type: "textarea",
		placeholder: "Describe your use case and how our Enterprise plan can support it",
		colSpan: 2
	}
];
function scrollToForm() {
	document.getElementById(ENTERPRISE_FORM_ID)?.scrollIntoView({ behavior: "smooth" });
}
function View() {
	const t = useT();
	const { account, isAuthenticated } = useAuth();
	const formDefaultValues = useMemo(() => {
		if (!isAuthenticated || !account) return void 0;
		const nameParts = account.name?.trim().split(/\s+/) ?? [];
		const firstName = nameParts[0] ?? "";
		const lastName = nameParts.slice(1).join(" ");
		return {
			...firstName ? { firstName } : {},
			...lastName ? { lastName } : {},
			...account.email ? { email: account.email } : {}
		};
	}, [account, isAuthenticated]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsxs(MarketingHeroSection, {
				eyebrow: enterpriseHero.eyebrow,
				title: enterpriseHero.title,
				description: enterpriseHero.description,
				gradientTitle: true,
				wideFooter: enterpriseStats.length === 5,
				footer: /* @__PURE__ */ jsx(MarketingHeroStats, { items: [...enterpriseStats] }),
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					onClick: scrollToForm,
					...analyticsAttrs("enterprise-contact-sales"),
					children: t("Contact sales")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/pricing",
						...analyticsAttrs("enterprise-compare-plans"),
						children: t("Compare plans")
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Why enterprise teams choose Appwrite"),
						description: t("Give your developers a complete backend platform so they can focus on product innovation instead of infrastructure glue code."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
							items: enterpriseValueProps,
							columns: 4
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-muted/20 py-14 sm:py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Trusted by teams at scale"),
						description: t("From global enterprises to fast-growing product companies, teams rely on Appwrite to ship secure applications."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6",
						children: allCustomerLogos.map((logo) => /* @__PURE__ */ jsx("div", {
							className: "flex min-h-14 items-center justify-center rounded-lg border border-border bg-card/45 px-3 py-3",
							children: /* @__PURE__ */ jsx(TrustedByLogo, {
								src: logo.src,
								alt: logo.alt,
								width: logo.width,
								height: logo.height,
								mask: logo.mask,
								maskSrc: logo.maskSrc,
								inverseMask: logo.inverseMask,
								interactive: false,
								className: logo.size === "lg" ? "max-h-5 w-auto opacity-90 sm:max-h-6" : "max-h-4 w-auto opacity-90 sm:max-h-5"
							})
						}, logo.src))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border py-16 sm:py-20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, {
					tone: "purple",
					position: "left"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: enterprisePlatformSection.title,
						description: enterprisePlatformSection.description,
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingProductPills, {
							build: marketingProductToolkit.build,
							deploy: marketingProductToolkit.deploy,
							protect: marketingProductToolkit.protect
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border py-16 sm:py-20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, {
					tone: "teal",
					position: "right"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Everything in Pro, plus enterprise capabilities"),
						description: t("Operational and pricing features for teams that need more than standard Pro limits."),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
							items: enterprisePlanCapabilities,
							columns: 3
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border bg-muted/20 py-16 sm:py-20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, {
					tone: "orange",
					position: "left",
					align: "top"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(MarketingSectionHeading, {
							title: enterpriseDeploymentSection.title,
							description: enterpriseDeploymentSection.description,
							size: "md"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10",
							children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
								items: enterpriseDeploymentOptions,
								columns: 2
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 border-t border-border pt-10",
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto max-w-3xl sm:max-w-4xl lg:max-w-5xl",
								children: /* @__PURE__ */ jsx(MarketingBentoFeatureCard, {
									title: enterpriseDeploymentSection.sharedBenefitsTitle,
									items: enterpriseDeploymentSharedBenefits
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(SecurityComplianceSection, { onContactSales: scrollToForm }),
			/* @__PURE__ */ jsx(MarketingFaqSection, {
				title: t("Enterprise FAQ"),
				description: t("Common questions about pricing, support, compliance, and getting started."),
				items: enterpriseFaqItems
			}),
			/* @__PURE__ */ jsxs("section", {
				id: ENTERPRISE_FORM_ID,
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
							title: t("Talk to our enterprise team"),
							description: t("Ready to explore a custom plan? Share your requirements and one of our experts will follow up with a tailored proposal.")
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3",
							children: enterpriseFormBullets.map((item) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-[13px] text-foreground",
								children: [/* @__PURE__ */ jsx(Check, {
									className: "size-4 shrink-0 text-[var(--brand-cta)]",
									"aria-hidden": true
								}), t(item)]
							}, item))
						})] }), /* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8",
							children: /* @__PURE__ */ jsx(MarketingApplicationForm, {
								fields: ENTERPRISE_FORM_FIELDS,
								defaultValues: formDefaultValues,
								submitLabel: t("Submit"),
								submitAnalyticsAction: "enterprise-form-submit",
								successTitle: t("Thank you for your submission"),
								successDescription: t("Your details have been sent successfully. Our team will get back to you as soon as possible."),
								onSubmit: async (values) => {
									await submitEnterpriseApplication({
										firstName: values.firstName ?? "",
										lastName: values.lastName ?? "",
										email: values.email ?? "",
										companyName: values.companyName ?? "",
										companySize: values.companySize || void 0,
										companyWebsite: values.companyWebsite ?? "",
										preferredDeployment: values.preferredDeployment || void 0,
										timeline: values.timeline || void 0,
										useCase: values.useCase ?? "",
										cloudEmail: isAuthenticated ? account?.email : void 0
									});
									trackEvent("Form Submitted", { form: "enterprise" });
								}
							})
						})]
					})
				})]
			})
		]
	});
}
function EnterprisePage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { EnterprisePage as component };
