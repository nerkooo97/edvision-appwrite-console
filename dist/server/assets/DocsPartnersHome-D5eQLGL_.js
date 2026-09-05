import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { c as docsPreviewPrimaryTitleClass, d as docsSectionPaddingY, l as docsPreviewSectionPaddingY, n as docsContentPaddingX, o as docsGridThreeCol, s as docsGridTwoCol } from "./docs-container-qv9gqb9G.js";
import { t as DocsHomeSectionHeading } from "./DocsHomeSectionHeading-nCMtryIc.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import { t as OAuthIcon } from "./OAuthIcon-C9fW2FkG.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeftRight, ArrowRight, BarChart2, Boxes, Building2, FileText, Globe, Key, LayoutGrid } from "lucide-react";
function DocsPartnersCardIcon({ item, className, iconClassName }) {
	if (item.customIcon === "oauth") return /* @__PURE__ */ jsx("span", {
		className: cn("flex shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40", className),
		children: /* @__PURE__ */ jsx(OAuthIcon, {
			variant: "brand",
			className: cn("size-3.5", iconClassName)
		})
	});
	const Icon$1 = item.icon;
	return /* @__PURE__ */ jsx("span", {
		className: cn("flex shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40", className),
		children: /* @__PURE__ */ jsx(Icon$1, {
			className: cn("size-3.5 text-muted-foreground", iconClassName),
			"aria-hidden": true
		})
	});
}
var TILE_HOVER_LIGHTS = [
	"absolute -start-[28%] -top-[48%] h-[200px] w-[260px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.16)_0%,rgba(133,219,216,0.05)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.09)_0%,rgba(133,219,216,0.028)_42%,transparent_76%)]",
	"absolute -end-[28%] -top-[44%] h-[200px] w-[260px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.14)_0%,rgba(253,54,110,0.045)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.08)_0%,rgba(253,54,110,0.025)_42%,transparent_76%)]",
	"absolute start-[8%] -top-[52%] h-[210px] w-[280px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.13)_0%,rgba(124,103,254,0.04)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.075)_0%,rgba(124,103,254,0.022)_42%,transparent_76%)]",
	"absolute -start-[32%] top-[18%] h-[190px] w-[250px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_14%,transparent)_0%,color-mix(in_srgb,var(--brand-cta)_4%,transparent)_42%,transparent_76%)]",
	"absolute -end-[24%] bottom-[-40%] h-[180px] w-[240px] bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.11)_0%,rgba(254,149,103,0.035)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.065)_0%,rgba(254,149,103,0.02)_42%,transparent_76%)]",
	"absolute -start-[24%] bottom-[-42%] h-[180px] w-[240px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.1)_0%,rgba(124,103,254,0.03)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.06)_0%,rgba(124,103,254,0.018)_42%,transparent_76%)]"
];
function tileBorderClass(index, count) {
	const smCols = 2;
	const smCol = index % smCols;
	const smRow = Math.floor(index / smCols);
	const smRows = Math.ceil(count / smCols);
	const xlCols = 3;
	const xlCol = index % xlCols;
	const xlRow = Math.floor(index / xlCols);
	const xlRows = Math.ceil(count / xlCols);
	return cn("border-b border-border last:border-b-0", "@[560px]:border-b-0", smCol < smCols - 1 && "@[560px]:border-e @[560px]:border-border", smRow < smRows - 1 && "@[560px]:border-b @[560px]:border-border", "@[900px]:border-b-0 @[900px]:border-e-0", xlCol < xlCols - 1 && "@[900px]:border-e @[900px]:border-border", xlRow < xlRows - 1 && "@[900px]:border-b @[900px]:border-border");
}
function TileHoverLight({ variant }) {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-0",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: TILE_HOVER_LIGHTS[variant % TILE_HOVER_LIGHTS.length] })
	});
}
function TileIcon({ item }) {
	return /* @__PURE__ */ jsx(DocsPartnersCardIcon, {
		item,
		className: "size-9",
		iconClassName: "size-4"
	});
}
function DocsPartnersHubBento({ items }) {
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card/45",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("grid", docsGridThreeCol),
			children: items.map((item, index) => /* @__PURE__ */ jsxs(DocsRouteLink, {
				href: item.href,
				className: cn("group relative isolate flex flex-col p-5 transition-colors hover:bg-accent/10", tileBorderClass(index, items.length)),
				children: [/* @__PURE__ */ jsx(TileHoverLight, { variant: index }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ jsx(TileIcon, { item }),
						/* @__PURE__ */ jsxs("h3", {
							className: "mt-3 text-[13px] font-medium text-foreground",
							children: [item.title, item.new ? /* @__PURE__ */ jsx("span", {
								className: "ms-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-cta)]",
								children: "New"
							}) : null]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[13px] leading-5 text-muted-foreground",
							children: item.description
						})
					]
				})]
			}, item.href))
		})
	});
}
const DOCS_PARTNERS_HOME_HERO = {
	title: "Integrate Appwrite into your platform",
	description: "Use OAuth connect, organization API keys, and Console SDK APIs to provision organizations, projects, and domains for your users."
};
const DOCS_PARTNERS_HOME_AUDIENCES = [
	{
		title: "Vibe coding and agentic platforms",
		description: "Users describe an app in natural language while your product provisions Appwrite projects, auth, and databases on their behalf."
	},
	{
		title: "AI agents and MCP tools",
		description: "Agents, skills, and IDE integrations that connect to a user Appwrite account and manage backends during autonomous workflows."
	},
	{
		title: "Multi-tenant SaaS control planes",
		description: "Products that isolate each customer in a dedicated Appwrite project or organization from one operator account."
	},
	{
		title: "Embedded and white-label backends",
		description: "Developer platforms that expose your own product UX while Appwrite powers provisioning, domains, and project lifecycle behind the scenes."
	}
];
const DOCS_PARTNERS_HOME_INTEGRATIONS = [{
	title: "OAuth connect",
	description: "Let users authorize your platform to access their Appwrite organizations and projects.",
	href: "/docs/partners/oauth-connect",
	customIcon: "oauth",
	new: true
}, {
	title: "Org API keys",
	description: "Use organization-scoped API keys to proxy Appwrite and manage resources on behalf of your users.",
	href: "/docs/partners/org-api-keys",
	icon: Key,
	new: true
}];
const DOCS_PARTNERS_HOME_APIS = [
	{
		title: "Organization",
		description: "Create organizations, manage members, and read billing and plan information.",
		href: "/docs/partners/organizations",
		icon: Building2
	},
	{
		title: "Project",
		description: "Create projects and manage databases, storage, functions, and other resources.",
		href: "/docs/partners/projects",
		icon: Boxes
	},
	{
		title: "Domains",
		description: "Register, transfer, and manage organization domains and DNS records.",
		href: "/docs/partners/domains",
		icon: Globe
	},
	{
		title: "Proxy",
		description: "Wrap Console and project APIs so customers use your product while Appwrite stays the backend.",
		href: "/docs/partners/proxy",
		icon: ArrowLeftRight
	},
	{
		title: "Usage",
		description: "Read organization usage, plan limits, and billing aggregation for customer dashboards.",
		href: "/docs/partners/usage",
		icon: BarChart2
	},
	{
		title: "Apps",
		description: "Register OAuth apps, manage client credentials, and start authorization flows.",
		href: "/docs/partners/apps",
		icon: LayoutGrid
	}
];
const DOCS_PARTNERS_HOME_GUIDES = [
	{
		title: "Provisioning",
		description: "Choose an integration model and provision projects for your customers.",
		href: "/docs/partners/guides/provisioning",
		icon: FileText
	},
	{
		title: "Marketplaces",
		description: "Publish OAuth apps, run install flows, and manage integrations with the Apps and OAuth APIs.",
		href: "/docs/partners/guides/marketplaces",
		icon: FileText
	},
	{
		title: "Multi-tenancy",
		description: "Isolate customer data and resources across organizations and projects.",
		href: "/docs/partners/guides/multi-tenancy",
		icon: FileText
	}
];
function DocsPartnersHeroSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-background",
		children: [
			/* @__PURE__ */ jsx(HomeSoftLights, { variant: "partners" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative z-[1] mx-auto w-full max-w-6xl pb-16 pt-12 text-start", docsContentPaddingX, "@[480px]:pb-20 @[480px]:pt-16 @[900px]:pb-24 @[900px]:pt-20"),
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
						children: ["Partner documentation", /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-aeonik-pro mt-5 max-w-[640px] text-balance text-[32px] font-normal leading-[1.08] tracking-tight text-foreground @[480px]:mt-6 @[480px]:text-[40px] @[900px]:text-[48px]",
						children: DOCS_PARTNERS_HOME_HERO.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-[640px] text-[14px] leading-7 text-muted-foreground @[480px]:mt-7 @[480px]:text-[15px] @[480px]:leading-8",
						children: DOCS_PARTNERS_HOME_HERO.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center justify-start gap-2 @[480px]:mt-10",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "brandCta",
							size: "lg",
							className: "h-10 text-[14px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(DocsRouteLink, {
								href: "/docs/partners/quick-start",
								children: ["Quick start", /* @__PURE__ */ jsx(ArrowRight, { className: "ms-1.5 size-4" })]
							})
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "lg",
							className: "h-10 text-[14px]",
							asChild: true,
							children: /* @__PURE__ */ jsx(DocsRouteLink, {
								href: "/docs/partners/architecture",
								children: "Architecture"
							})
						})]
					})
				]
			})
		]
	});
}
function DocsPartnersPreviewHeroSection() {
	return /* @__PURE__ */ jsx("section", {
		className: cn("border-b border-border", docsPreviewSectionPaddingY),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto w-full max-w-6xl text-start", docsContentPaddingX),
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Partner documentation"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: cn("mt-4 max-w-[640px] text-foreground", docsPreviewPrimaryTitleClass),
					children: DOCS_PARTNERS_HOME_HERO.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-[640px] text-[13px] leading-[1.6] text-muted-foreground @[480px]:mt-7 @[480px]:text-[14px]",
					children: DOCS_PARTNERS_HOME_HERO.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap items-center justify-start gap-2 @[480px]:mt-10",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 text-[12px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/partners/quick-start",
							children: "Quick start"
						})
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 text-[12px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/partners/architecture",
							children: "Architecture"
						})
					})]
				})
			]
		})
	});
}
var TEXT_CARD_CLASS = "group block h-full rounded-xl border border-border bg-card/45 p-5 transition-colors hover:bg-accent/15";
function DocsPartnersHomeSection({ title, description, children, className, variant = "page" }) {
	return /* @__PURE__ */ jsx("section", {
		className: cn("border-b border-border", variant === "preview" ? docsPreviewSectionPaddingY : docsSectionPaddingY, className),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto w-full max-w-6xl", docsContentPaddingX),
			children: [/* @__PURE__ */ jsx(DocsHomeSectionHeading, {
				title,
				description,
				variant
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8",
				children
			})]
		})
	});
}
function DocsPartnersHome({ variant = "page" }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		variant === "preview" ? /* @__PURE__ */ jsx(DocsPartnersPreviewHeroSection, {}) : /* @__PURE__ */ jsx(DocsPartnersHeroSection, {}),
		/* @__PURE__ */ jsx(DocsPartnersHomeSection, {
			variant,
			title: "Who is this for?",
			description: "Appwrite partner APIs help you provision and orchestrate backends for vibe coding products, AI agents, multi-tenant SaaS, and embedded developer experiences.",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("grid gap-4", docsGridTwoCol),
				children: DOCS_PARTNERS_HOME_AUDIENCES.map((item) => /* @__PURE__ */ jsxs("div", {
					className: TEXT_CARD_CLASS,
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[13px] font-medium text-foreground",
						children: item.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] leading-5 text-muted-foreground",
						children: item.description
					})]
				}, item.title))
			})
		}),
		/* @__PURE__ */ jsx(DocsPartnersHomeSection, {
			variant,
			title: "Choose an integration model",
			description: "Connect to existing Appwrite accounts with OAuth, or provision resources in your own organization with org API keys. Many platforms combine both.",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("grid gap-4", docsGridTwoCol),
				children: DOCS_PARTNERS_HOME_INTEGRATIONS.map((item) => /* @__PURE__ */ jsx(DocsRouteLink, {
					href: item.href,
					className: TEXT_CARD_CLASS,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsx(DocsPartnersCardIcon, {
							item,
							className: "size-8"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-[13px] font-medium text-foreground",
							children: [item.title, item.new ? /* @__PURE__ */ jsx("span", {
								className: "ms-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-cta)]",
								children: "New"
							}) : null]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[13px] leading-5 text-muted-foreground",
							children: item.description
						})] })]
					})
				}, item.href))
			})
		}),
		/* @__PURE__ */ jsx(DocsPartnersHomeSection, {
			variant,
			title: "Partners APIs",
			description: "Use the Console SDK to manage infrastructure-level resources across organizations and projects.",
			children: /* @__PURE__ */ jsx(DocsPartnersHubBento, { items: DOCS_PARTNERS_HOME_APIS })
		}),
		/* @__PURE__ */ jsx(DocsPartnersHomeSection, {
			variant,
			title: "Guides for your use case",
			description: "Follow end-to-end workflows for provisioning, app marketplaces, and multi-tenant platform design.",
			className: "border-b-0",
			children: /* @__PURE__ */ jsx(DocsPartnersHubBento, { items: DOCS_PARTNERS_HOME_GUIDES })
		})
	] });
}
export { DocsPartnersHome as t };
