import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { n as isAgentDocsHref } from "./agent-docs-feature-COYbd_m1.js";
import { n as DOCS_PROSE_LINK_CLASS } from "./prose-link-DLbkQskb.js";
import { c as docsPreviewPrimaryTitleClass, d as docsSectionPaddingY, i as docsGridFourCol, l as docsPreviewSectionPaddingY, n as docsContentPaddingX, r as docsGridFiveCol, s as docsGridTwoCol } from "./docs-container-qv9gqb9G.js";
import { t as DocsHomeSectionHeading } from "./DocsHomeSectionHeading-nCMtryIc.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights, t as AiTileSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as AiSkillsMockVisual, i as AiPromptsMockVisual, r as AiMcpMockVisual, t as AiFeatureCard } from "./AiMockPanels-DoPFSJSx.js";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-mJzDxueI.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpDown, BotMessageSquare, Database, Folder, Globe, Radio, Send, Server, Share2, Sparkles, UserCircle, Users, Zap } from "lucide-react";
const DOCS_HOME_PRODUCTS = [
	{
		title: "Auth",
		description: "Sign in users with multiple OAuth providers.",
		href: "/docs/products/auth",
		icon: Users
	},
	{
		title: "Databases",
		description: "Store your application and user data.",
		href: "/docs/products/databases",
		icon: Database
	},
	{
		title: "Functions",
		description: "Extend and customize your server's functionality.",
		href: "/docs/products/functions",
		icon: Zap
	},
	{
		title: "Sites",
		description: "Deploy websites on the internet at scale.",
		href: "/docs/products/sites",
		icon: Globe
	},
	{
		title: "Messaging",
		description: "Send and schedule email, SMS, and push notifications.",
		href: "/docs/products/messaging",
		icon: Send
	},
	{
		title: "Storage",
		description: "Store images, videos, documents, and files.",
		href: "/docs/products/storage",
		icon: Folder
	},
	{
		title: "Avatars",
		description: "Generate icons, screenshots, and QR codes for your apps.",
		href: "/docs/products/avatars",
		icon: UserCircle
	},
	{
		title: "Realtime",
		description: "Respond to server events in realtime.",
		href: "/docs/apis/realtime",
		icon: Radio
	},
	{
		title: "Agent",
		description: "Chat in the Console to inspect projects and take approved actions.",
		href: "/docs/products/agent",
		icon: BotMessageSquare
	}
];
var OFFICIAL_TOOL_BADGE = {
	label: "Official",
	variant: "info"
};
const DOCS_HOME_IDE_AI_TOOLS = [
	{
		title: "Claude Code",
		href: "/docs/tooling/ai/agents/claude-code",
		iconSrc: "/icons/claude.svg",
		badges: [OFFICIAL_TOOL_BADGE]
	},
	{
		title: "Codex",
		href: "/docs/tooling/ai/agents/codex",
		iconSrc: "/icons/chatgpt.svg",
		badges: [OFFICIAL_TOOL_BADGE]
	},
	{
		title: "Cursor",
		href: "/docs/tooling/ai/agents/cursor",
		iconSrc: "/icons/cursor-ai.svg",
		badges: [OFFICIAL_TOOL_BADGE]
	},
	{
		title: "VS Code",
		href: "/docs/tooling/ai/agents/vscode",
		iconSrc: "/icons/vscode.svg"
	},
	{
		title: "Zed",
		href: "/docs/tooling/ai/agents/zed",
		iconSrc: "/icons/zed.svg"
	},
	{
		title: "OpenCode",
		href: "/docs/tooling/ai/agents/opencode",
		iconSrc: "/icons/opencode.svg"
	},
	{
		title: "Google Antigravity",
		href: "/docs/tooling/ai/agents/antigravity",
		iconSrc: "/icons/google-antigravity.svg"
	}
];
const DOCS_HOME_VIBE_AI_TOOLS = [
	{
		title: "Claude Desktop",
		href: "/docs/tooling/ai/vibe-coding/claude-desktop",
		iconSrc: "/icons/claude.svg"
	},
	{
		title: "Lovable",
		href: "/docs/tooling/ai/vibe-coding/lovable",
		iconSrc: "/icons/lovable.svg"
	},
	{
		title: "Emergent",
		href: "/docs/tooling/ai/vibe-coding/emergent",
		iconSrc: "/icons/emergent.svg"
	},
	{
		title: "Bolt",
		href: "/docs/tooling/ai/vibe-coding/bolt",
		iconSrc: "/icons/bolt.svg"
	},
	{
		title: "Zenflow",
		href: "/docs/tooling/ai/vibe-coding/zenflow",
		iconSrc: "/icons/zenflow.svg"
	}
];
const DOCS_HOME_INTEGRATIONS = [
	{
		title: "SDKs",
		description: "Light-weight SDKs for your favorite platforms.",
		href: "/docs/sdks"
	},
	{
		title: "REST API",
		description: "Integrate with HTTP requests without needing an SDK.",
		href: "/docs/apis/rest"
	},
	{
		title: "GraphQL",
		description: "Leverage GraphQL through our SDKs or integrate directly with REST endpoints.",
		href: "/docs/apis/graphql",
		iconSrc: "/icons/graphql.svg"
	},
	{
		title: "Realtime",
		description: "Respond to auth, databases, storage, and function events in realtime.",
		href: "/docs/apis/realtime"
	}
];
const DOCS_HOME_TUTORIALS = [
	{
		title: "React tutorial",
		description: "Learn Appwrite Auth, Databases, and more with React.",
		href: "/docs/tutorials/react/step-1",
		iconSrc: "/icons/react.svg"
	},
	{
		title: "Next.js tutorial",
		description: "Learn Appwrite Auth, Databases, and more with Next.js.",
		href: "/docs/tutorials/nextjs/step-1",
		iconSrc: "/icons/nextjs.svg"
	},
	{
		title: "Next.js SSR auth",
		description: "Build authenticated SSR apps with Next.js and Appwrite.",
		href: "/docs/tutorials/nextjs-ssr-auth/step-1",
		iconSrc: "/icons/nextjs.svg"
	},
	{
		title: "Vue tutorial",
		description: "Learn Appwrite Auth, Databases, and more with Vue.",
		href: "/docs/tutorials/vue/step-1",
		iconSrc: "/icons/vue.svg"
	},
	{
		title: "Nuxt tutorial",
		description: "Learn Appwrite Auth, Databases, and more with Nuxt.",
		href: "/docs/tutorials/nuxt/step-1",
		iconSrc: "/icons/nuxt.svg"
	},
	{
		title: "Nuxt SSR auth",
		description: "Build authenticated SSR apps with Nuxt and Appwrite.",
		href: "/docs/tutorials/nuxt-ssr-auth/step-1",
		iconSrc: "/icons/nuxt.svg"
	},
	{
		title: "SvelteKit tutorial",
		description: "Learn Appwrite Auth, Databases, and more with SvelteKit.",
		href: "/docs/tutorials/sveltekit/step-1",
		iconSrc: "/icons/svelte.svg"
	},
	{
		title: "SvelteKit SSR auth",
		description: "Build authenticated SSR apps with SvelteKit and Appwrite.",
		href: "/docs/tutorials/sveltekit-ssr-auth/step-1",
		iconSrc: "/icons/svelte.svg"
	},
	{
		title: "SvelteKit CSR auth",
		description: "Add client-side auth to SvelteKit apps with Appwrite.",
		href: "/docs/tutorials/sveltekit-csr-auth/step-1",
		iconSrc: "/icons/svelte.svg"
	},
	{
		title: "Astro SSR auth",
		description: "Build authenticated SSR apps with Astro and Appwrite.",
		href: "/docs/tutorials/astro-ssr-auth/step-1",
		iconSrc: "/icons/astro.svg"
	},
	{
		title: "React Native tutorial",
		description: "Learn Appwrite Auth, Databases, and more with React Native.",
		href: "/docs/tutorials/react-native/step-1",
		iconSrc: "/icons/react-native.svg"
	},
	{
		title: "Flutter tutorial",
		description: "Learn Appwrite Auth, Databases, and more with Flutter.",
		href: "/docs/tutorials/flutter/step-1",
		iconSrc: "/icons/flutter.svg"
	},
	{
		title: "Android tutorial",
		description: "Learn Appwrite Auth, Databases, and more with Android.",
		href: "/docs/tutorials/android/step-1",
		iconSrc: "/icons/android.svg"
	},
	{
		title: "iOS tutorial",
		description: "Learn Appwrite Auth, Databases, and more with iOS.",
		href: "/docs/tutorials/apple/step-1",
		iconSrc: "/icons/apple.svg"
	},
	{
		title: "Refine tutorial",
		description: "Build admin panels and internal tools with Refine and Appwrite.",
		href: "/docs/tutorials/refine/step-1",
		iconSrc: "/icons/refine.svg"
	}
];
const DOCS_HOME_MIGRATIONS = [
	{
		title: "Self-hosted",
		description: "Move data from self-hosted to Appwrite Cloud.",
		href: "/docs/advanced/migrations/self-hosted"
	},
	{
		title: "Firebase",
		description: "Migrate users and data from Firebase to Appwrite.",
		href: "/docs/advanced/migrations/firebase",
		iconSrc: "/icons/firebase.svg"
	},
	{
		title: "Supabase",
		description: "Migrate users and data from Supabase to Appwrite.",
		href: "/docs/advanced/migrations/supabase",
		iconSrc: "/icons/supabase.svg"
	},
	{
		title: "Vercel",
		description: "Migrate web applications from Vercel to Appwrite Sites.",
		href: "/docs/products/sites/migrations/vercel",
		iconSrc: "/icons/vercel.svg"
	},
	{
		title: "Nhost",
		description: "Migrate users and data from NHost to Appwrite.",
		href: "/docs/advanced/migrations/nhost",
		iconSrc: "/icons/nhost.svg"
	}
];
const DOCS_HOME_INTEGRATION_ICONS = {
	sdks: Share2,
	rest: ArrowUpDown,
	realtime: Radio
};
const DOCS_HOME_MIGRATION_ICONS = { "self-hosted": Server };
var INLINE_LINK_CLASS = DOCS_PROSE_LINK_CLASS;
function DocsAiToolTile({ tool }) {
	return /* @__PURE__ */ jsxs(DocsRouteLink, {
		href: tool.href,
		className: "group flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2.5 transition-colors hover:bg-accent/15",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40",
				children: tool.iconSrc ? /* @__PURE__ */ jsx("img", {
					src: tool.iconSrc,
					alt: "",
					className: cn("size-4 object-contain", PUBLIC_ICON_MUTED_CLASSES)
				}) : /* @__PURE__ */ jsx(Sparkles, {
					className: "size-3.5 text-muted-foreground",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 text-[13px] font-medium text-foreground",
				children: tool.title
			}),
			tool.badges?.length ? /* @__PURE__ */ jsx("span", {
				className: "flex shrink-0 flex-wrap items-center justify-end gap-1",
				children: tool.badges.map((badge) => /* @__PURE__ */ jsx(Badge, {
					variant: badge.variant,
					className: "text-[10px]",
					children: badge.label
				}, badge.label))
			}) : null
		]
	});
}
function DocsAiToolColumn({ title, description, tools, tone, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative py-6 @[900px]:py-0", className),
		children: [
			/* @__PURE__ */ jsx(AiTileSoftLight, { tone }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative space-y-1.5",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[14px] font-medium text-foreground",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] leading-5 text-muted-foreground",
					children: description
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("relative mt-4 grid gap-2", docsGridTwoCol),
				children: tools.map((tool) => /* @__PURE__ */ jsx(DocsAiToolTile, { tool }, tool.href))
			})
		]
	});
}
function DocsAiSection({ variant = "page" }) {
	return /* @__PURE__ */ jsxs("section", {
		className: cn("relative isolate overflow-hidden border-b border-border", variant === "preview" ? docsPreviewSectionPaddingY : docsSectionPaddingY),
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px] opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("relative mx-auto w-full max-w-6xl", docsContentPaddingX),
			children: [
				/* @__PURE__ */ jsx(DocsHomeSectionHeading, {
					title: "Build faster with AI",
					variant
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-3 max-w-3xl text-[13px] leading-6 text-muted-foreground @[480px]:text-[14px] @[480px]:leading-7",
					children: [
						"Wire up MCP so models can reach your Appwrite project and docs, install",
						" ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/tooling/ai/skills",
							className: INLINE_LINK_CLASS,
							children: "agent skills"
						}),
						" ",
						"for SDK-accurate codegen, and use",
						" ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/tooling/ai/quickstart-prompts",
							className: INLINE_LINK_CLASS,
							children: "quickstart prompts"
						}),
						" ",
						"to scaffold features, whether you work in an IDE or a vibe coding platform."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 overflow-hidden rounded-xl border border-border bg-card/50",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid @[900px]:grid-cols-3",
						children: [
							/* @__PURE__ */ jsx(AiFeatureCard, {
								title: "MCP",
								description: "Connect agents to your Appwrite project, APIs, and docs.",
								shade: "mcp",
								className: "border-b border-border @[900px]:border-b-0 @[900px]:border-e",
								cta: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsx(DocsRouteLink, {
										href: "/docs/tooling/ai/mcp-servers",
										children: "Configure the MCP server"
									})
								}),
								children: /* @__PURE__ */ jsx(AiMcpMockVisual, {})
							}),
							/* @__PURE__ */ jsx(AiFeatureCard, {
								title: "Agent skills",
								description: "Teach agents your backend so they make SDK-accurate calls.",
								shade: "skills",
								className: "border-b border-border @[900px]:border-b-0 @[900px]:border-e",
								cta: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsx(DocsRouteLink, {
										href: "/docs/tooling/ai/skills",
										children: "Explore agent skills"
									})
								}),
								children: /* @__PURE__ */ jsx(AiSkillsMockVisual, {})
							}),
							/* @__PURE__ */ jsx(AiFeatureCard, {
								title: "Quickstart prompts",
								description: "Scaffold auth, databases, storage, and more from a prompt.",
								shade: "plugins",
								cta: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsx(DocsRouteLink, {
										href: "/docs/tooling/ai/quickstart-prompts",
										children: "Browse quickstart prompts"
									})
								}),
								children: /* @__PURE__ */ jsx(AiPromptsMockVisual, {})
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 grid overflow-visible pb-4 @[900px]:grid-cols-2 @[900px]:divide-x @[900px]:divide-border",
					children: [/* @__PURE__ */ jsx(DocsAiToolColumn, {
						title: "IDEs & coding agents",
						description: "Editors and agents where you ship code locally or in the terminal.",
						tools: DOCS_HOME_IDE_AI_TOOLS,
						tone: "mcp",
						className: "@[900px]:pe-10"
					}), /* @__PURE__ */ jsx(DocsAiToolColumn, {
						title: "Vibe coding platforms",
						description: "Build from prompts in the browser; connect docs or full MCP where supported.",
						tools: DOCS_HOME_VIBE_AI_TOOLS,
						tone: "integrations",
						className: "border-t border-border pt-6 @[900px]:border-t-0 @[900px]:ps-10 @[900px]:pt-0"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col gap-3 @[560px]:flex-row @[560px]:flex-wrap",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/tooling/ai",
							children: "Explore the AI tooling documentation"
						})
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-9 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/tooling/ai/mcp-servers",
							children: "Configure the MCP server"
						})
					})]
				})
			]
		})]
	});
}
var FAQ_LINK_CLASS = DOCS_PROSE_LINK_CLASS;
var FAQ_ITEMS = [
	{
		question: "What is Appwrite?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Appwrite is an open-source backend platform: Auth, Databases, Storage, Functions, Realtime, Messaging, and hosting for sites. You can build against",
			" ",
			/* @__PURE__ */ jsx("a", {
				href: "https://cloud.appwrite.io/",
				target: "_blank",
				rel: "noopener noreferrer",
				className: FAQ_LINK_CLASS,
				children: "Appwrite Cloud"
			}),
			" ",
			"or run the same stack",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/advanced/self-hosting",
				className: FAQ_LINK_CLASS,
				children: "self-hosted"
			}),
			"."
		] })
	},
	{
		question: "What is Appwrite used for, and what does Appwrite do?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"You use it as the server side for your app: user sign-in, persisted data, file uploads, scheduled or event-driven logic, notifications, and live updates, exposed over APIs and",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/sdks",
				className: FAQ_LINK_CLASS,
				children: "SDKs"
			}),
			" ",
			"so your client or server code stays thin. Browse",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/products/auth",
				className: FAQ_LINK_CLASS,
				children: "products"
			}),
			" ",
			"for what each service covers."
		] })
	},
	{
		question: "How do I use Appwrite from React, Next.js, or another framework?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Appwrite is framework-agnostic: you call it from the browser or server with an SDK or plain HTTP. Pick a",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/quick-starts",
				className: FAQ_LINK_CLASS,
				children: "quick start"
			}),
			" ",
			"for your stack (for example",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/quick-starts/react",
				className: FAQ_LINK_CLASS,
				children: "React"
			}),
			" ",
			"or",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/quick-starts/nextjs",
				className: FAQ_LINK_CLASS,
				children: "Next.js"
			}),
			"), or follow a full",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/tutorials",
				className: FAQ_LINK_CLASS,
				children: "tutorial"
			}),
			" ",
			"if you prefer a guided build."
		] })
	},
	{
		question: "Where should I start in the documentation?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Use",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/quick-starts",
				className: FAQ_LINK_CLASS,
				children: "Quick starts"
			}),
			" ",
			"to connect a project in minutes. Use",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/tutorials",
				className: FAQ_LINK_CLASS,
				children: "Tutorials"
			}),
			" ",
			"for end-to-end apps. When you need exact request shapes and types, open the",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/references",
				className: FAQ_LINK_CLASS,
				children: "API references"
			}),
			" ",
			"for your SDK and runtime."
		] })
	},
	{
		question: "Should I use Appwrite Cloud or self-host?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Appwrite Cloud is the convenient option: we run the stack, ship upgrades, and you pay a predictable subscription. Self-hosting suits strict regulation, full data residency, air-gapped networks, or when you prefer to pay with engineering time instead of a managed service fee, but you operate the cluster yourself: you plan",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/advanced/self-hosting/production/updates",
				className: FAQ_LINK_CLASS,
				children: "version upgrades and data migrations"
			}),
			" ",
			"between releases (including backups and rollback), instead of Appwrite doing that for you. The product surface is aligned either way; see",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/advanced/self-hosting",
				className: FAQ_LINK_CLASS,
				children: "self-hosting"
			}),
			" ",
			"and compare",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/pricing",
				className: FAQ_LINK_CLASS,
				children: "pricing"
			}),
			" ",
			"with your ops cost."
		] })
	},
	{
		question: "Where can I browse the API references?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Open",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/references",
				className: FAQ_LINK_CLASS,
				children: "API references"
			}),
			" ",
			"for REST payloads, GraphQL, and Realtime, organized by platform (web, mobile, server). The",
			" ",
			/* @__PURE__ */ jsx(DocsRouteLink, {
				href: "/docs/sdks",
				className: FAQ_LINK_CLASS,
				children: "SDKs"
			}),
			" ",
			"page lists official client and server libraries."
		] })
	},
	{
		question: "Where can I get help or report a bug?",
		answer: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Ask the community on",
			" ",
			/* @__PURE__ */ jsx(MarketingSiteLink, {
				className: FAQ_LINK_CLASS,
				href: "/discord",
				children: "Discord"
			}),
			", check",
			" ",
			/* @__PURE__ */ jsx(MarketingSiteLink, {
				href: "/enterprise",
				className: FAQ_LINK_CLASS,
				children: "support"
			}),
			" ",
			"for product help options, and use",
			" ",
			/* @__PURE__ */ jsx("a", {
				href: "https://github.com/appwrite/appwrite/issues",
				target: "_blank",
				rel: "noopener noreferrer",
				className: FAQ_LINK_CLASS,
				children: "GitHub issues"
			}),
			" ",
			"for reproducible bugs in the open-source server."
		] })
	}
];
function DocsHubFaq({ variant = "page" }) {
	return /* @__PURE__ */ jsx("section", {
		className: variant === "preview" ? docsPreviewSectionPaddingY : docsSectionPaddingY,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("mx-auto w-full max-w-6xl", docsContentPaddingX),
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 @[900px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] @[900px]:gap-12",
				children: [/* @__PURE__ */ jsx(DocsHomeSectionHeading, {
					title: "Common questions",
					description: "Quick answers when you are new to Appwrite or deciding how to navigate these docs.",
					variant
				}), /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: FAQ_ITEMS.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${index}`,
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "py-5 text-start hover:no-underline",
							children: /* @__PURE__ */ jsx("span", {
								className: "pe-4 text-[14px] font-medium text-foreground",
								children: item.question
							})
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "text-[13px] leading-6 text-muted-foreground",
							children: item.answer
						})]
					}, item.question))
				})]
			})
		})
	});
}
var TILE_HOVER_LIGHTS = [
	"absolute -start-[28%] -top-[48%] h-[200px] w-[260px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.16)_0%,rgba(133,219,216,0.05)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.09)_0%,rgba(133,219,216,0.028)_42%,transparent_76%)]",
	"absolute -end-[28%] -top-[44%] h-[200px] w-[260px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.14)_0%,rgba(253,54,110,0.045)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.08)_0%,rgba(253,54,110,0.025)_42%,transparent_76%)]",
	"absolute start-[8%] -top-[52%] h-[210px] w-[280px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.13)_0%,rgba(124,103,254,0.04)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.075)_0%,rgba(124,103,254,0.022)_42%,transparent_76%)]",
	"absolute -start-[32%] top-[18%] h-[190px] w-[250px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_14%,transparent)_0%,color-mix(in_srgb,var(--brand-cta)_4%,transparent)_42%,transparent_76%)]",
	"absolute -end-[24%] bottom-[-40%] h-[180px] w-[240px] bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.11)_0%,rgba(254,149,103,0.035)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.065)_0%,rgba(254,149,103,0.02)_42%,transparent_76%)]",
	"absolute -start-[24%] bottom-[-42%] h-[180px] w-[240px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.1)_0%,rgba(124,103,254,0.03)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.06)_0%,rgba(124,103,254,0.018)_42%,transparent_76%)]",
	"absolute -end-[30%] bottom-[-38%] h-[170px] w-[230px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.12)_0%,rgba(133,219,216,0.038)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.07)_0%,rgba(133,219,216,0.02)_42%,transparent_76%)]",
	"absolute -end-[26%] -top-[36%] h-[180px] w-[240px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.12)_0%,rgba(253,54,110,0.038)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.07)_0%,rgba(253,54,110,0.02)_42%,transparent_76%)]"
];
function productTileBorderClass(index, count) {
	const smCols = 2;
	const smCol = index % smCols;
	const smRow = Math.floor(index / smCols);
	const smRows = Math.ceil(count / smCols);
	const xlCols = 4;
	const xlCol = index % xlCols;
	const xlRow = Math.floor(index / xlCols);
	const xlRows = Math.ceil(count / xlCols);
	return cn("border-b border-border last:border-b-0", "@[560px]:border-b-0", smCol < smCols - 1 && "@[560px]:border-e @[560px]:border-border", smRow < smRows - 1 && "@[560px]:border-b @[560px]:border-border", "@[1080px]:border-b-0 @[1080px]:border-e-0", xlCol < xlCols - 1 && "@[1080px]:border-e @[1080px]:border-border", xlRow < xlRows - 1 && "@[1080px]:border-b @[1080px]:border-border");
}
function DocsProductTileHoverLight({ variant }) {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-0",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: TILE_HOVER_LIGHTS[variant % TILE_HOVER_LIGHTS.length] })
	});
}
function ProductTileIcon({ icon: Icon$1 }) {
	return /* @__PURE__ */ jsx("span", {
		className: "flex size-9 items-center justify-center rounded-lg border border-border bg-muted/40",
		children: /* @__PURE__ */ jsx(Icon$1, {
			className: "size-4 text-muted-foreground",
			"aria-hidden": true
		})
	});
}
function DocsProductsBento() {
	const { features } = useConsoleProfile();
	const products = useMemo(() => DOCS_HOME_PRODUCTS.filter((product) => features.agent || !isAgentDocsHref(product.href)), [features.agent]);
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card/45",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("grid", docsGridFourCol),
			children: products.map((product, index) => {
				const Icon$1 = product.icon;
				return /* @__PURE__ */ jsxs(DocsRouteLink, {
					href: product.href,
					className: cn("group relative isolate flex flex-col p-5 transition-colors hover:bg-accent/10", productTileBorderClass(index, products.length)),
					children: [/* @__PURE__ */ jsx(DocsProductTileHoverLight, { variant: index }), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsx(ProductTileIcon, { icon: Icon$1 }),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 text-[13px] font-medium text-foreground",
								children: product.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[13px] leading-5 text-muted-foreground",
								children: product.description
							})
						]
					})]
				}, product.href);
			})
		})
	});
}
var TUTORIAL_COVER_LIGHT_PAIRS = [
	["absolute -start-[32%] -top-[45%] h-[150px] w-[170px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.3)_0%,rgba(133,219,216,0.11)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.17)_0%,rgba(133,219,216,0.055)_40%,transparent_72%)]", "absolute -end-[28%] -bottom-[40%] h-[130px] w-[150px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.24)_0%,rgba(253,54,110,0.085)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.14)_0%,rgba(253,54,110,0.045)_40%,transparent_72%)]"],
	["absolute -end-[30%] -top-[42%] h-[145px] w-[165px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.26)_0%,rgba(124,103,254,0.09)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.15)_0%,rgba(124,103,254,0.048)_40%,transparent_72%)]", "absolute -start-[26%] -bottom-[38%] h-[125px] w-[145px] bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.22)_0%,rgba(254,149,103,0.075)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.13)_0%,rgba(254,149,103,0.04)_40%,transparent_72%)]"],
	["absolute start-[10%] -top-[50%] h-[155px] w-[175px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.26)_0%,rgba(253,54,110,0.09)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.15)_0%,rgba(253,54,110,0.048)_40%,transparent_72%)]", "absolute -end-[22%] bottom-[-30%] h-[120px] w-[140px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.22)_0%,rgba(133,219,216,0.075)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.13)_0%,rgba(133,219,216,0.04)_40%,transparent_72%)]"],
	["absolute -start-[24%] top-[5%] h-[140px] w-[160px] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_24%,transparent)_0%,color-mix(in_srgb,var(--brand-cta)_8%,transparent)_40%,transparent_72%)]", "absolute -end-[30%] -top-[35%] h-[135px] w-[155px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.22)_0%,rgba(124,103,254,0.075)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.13)_0%,rgba(124,103,254,0.04)_40%,transparent_72%)]"],
	["absolute -end-[26%] top-[0%] h-[150px] w-[170px] bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.24)_0%,rgba(254,149,103,0.085)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.14)_0%,rgba(254,149,103,0.045)_40%,transparent_72%)]", "absolute -start-[28%] -bottom-[42%] h-[130px] w-[150px] bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.24)_0%,rgba(133,219,216,0.085)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.14)_0%,rgba(133,219,216,0.045)_40%,transparent_72%)]"],
	["absolute -start-[34%] -top-[38%] h-[145px] w-[165px] bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.24)_0%,rgba(124,103,254,0.085)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.14)_0%,rgba(124,103,254,0.045)_40%,transparent_72%)]", "absolute end-[5%] -bottom-[35%] h-[125px] w-[145px] bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.22)_0%,rgba(253,54,110,0.075)_40%,transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.13)_0%,rgba(253,54,110,0.04)_40%,transparent_72%)]"]
];
function TutorialCoverLights({ variant }) {
	const [primary, secondary] = TUTORIAL_COVER_LIGHT_PAIRS[variant % TUTORIAL_COVER_LIGHT_PAIRS.length];
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden opacity-95 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none",
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("div", { className: primary }), /* @__PURE__ */ jsx("div", { className: secondary })]
	});
}
function DocsTutorialsScroll() {
	const [api, setApi] = useState();
	const [showRightFade, setShowRightFade] = useState(false);
	const updateFade = useCallback((carouselApi) => {
		if (!carouselApi) return;
		setShowRightFade(carouselApi.canScrollNext());
	}, []);
	useEffect(() => {
		if (!api) return;
		updateFade(api);
		const onSelect = () => updateFade(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api, updateFade]);
	return /* @__PURE__ */ jsxs(Carousel, {
		opts: {
			align: "start",
			dragFree: true
		},
		setApi,
		className: "w-full",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative min-w-0 overflow-hidden",
			children: [/* @__PURE__ */ jsx(CarouselContent, {
				className: "-ms-4",
				children: DOCS_HOME_TUTORIALS.map((tutorial, index) => /* @__PURE__ */ jsx(CarouselItem, {
					className: "basis-[280px] ps-4 @[480px]:basis-[300px]",
					children: /* @__PURE__ */ jsxs(DocsRouteLink, {
						href: tutorial.href,
						className: "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/45 transition-colors hover:bg-accent/15",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative flex h-32 items-center justify-center overflow-hidden border-b border-border bg-background/50",
							children: [
								/* @__PURE__ */ jsx(TutorialCoverLights, { variant: index }),
								/* @__PURE__ */ jsx("div", {
									className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:14px_14px] opacity-35",
									"aria-hidden": true
								}),
								/* @__PURE__ */ jsx("img", {
									src: tutorial.iconSrc,
									alt: "",
									className: cn("relative z-10 size-12", PUBLIC_ICON_MUTED_CLASSES)
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-5",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[13px] font-medium text-foreground",
								children: tutorial.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[13px] leading-5 text-muted-foreground",
								children: tutorial.description
							})]
						})]
					})
				}, tutorial.href))
			}), /* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: cn("pointer-events-none absolute end-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background via-background/80 to-transparent transition-opacity duration-200 @[480px]:w-24", showRightFade ? "opacity-100" : "opacity-0")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex justify-end gap-2",
			children: [/* @__PURE__ */ jsx(CarouselPrevious, {
				variant: "outline",
				size: "icon",
				className: "static size-8 translate-x-0 translate-y-0 rounded-full"
			}), /* @__PURE__ */ jsx(CarouselNext, {
				variant: "outline",
				size: "icon",
				className: "static size-8 translate-x-0 translate-y-0 rounded-full"
			})]
		})]
	});
}
var FRAMEWORK_STRIP_PRIORITY = [
	"React",
	"TanStack Start",
	"Next.js",
	"Vue",
	"SvelteKit",
	"Nuxt",
	"Astro",
	"Android",
	"iOS",
	"Flutter"
];
var FRAMEWORK_STRIP_SOURCE = [
	{
		name: "React",
		href: "/docs/quick-starts/react",
		iconSrc: "/icons/react.svg"
	},
	{
		name: "TanStack Start",
		href: "/docs/quick-starts/tanstack-start",
		iconSrc: "/icons/tanstack.svg"
	},
	{
		name: "Next.js",
		href: "/docs/quick-starts/nextjs",
		iconSrc: "/icons/nextjs.svg"
	},
	{
		name: "Vue",
		href: "/docs/quick-starts/vue",
		iconSrc: "/icons/vue.svg"
	},
	{
		name: "Angular",
		href: "/docs/quick-starts/angular",
		iconSrc: "/icons/angular.svg"
	},
	{
		name: "SvelteKit",
		href: "/docs/quick-starts/sveltekit",
		iconSrc: "/icons/svelte.svg"
	},
	{
		name: "Nuxt",
		href: "/docs/quick-starts/nuxt",
		iconSrc: "/icons/nuxt.svg"
	},
	{
		name: "Qwik",
		href: "/docs/quick-starts/qwik",
		iconSrc: "/icons/qwik.svg"
	},
	{
		name: "Solid",
		href: "/docs/quick-starts/solid",
		iconSrc: "/icons/solid.svg"
	},
	{
		name: "Refine",
		href: "/docs/quick-starts/refine",
		iconSrc: "/icons/refine.svg"
	},
	{
		name: "Remix",
		href: "/docs/products/sites/quick-start/remix",
		iconSrc: "/icons/remix.svg"
	},
	{
		name: "Astro",
		href: "/docs/quick-starts/astro",
		iconSrc: "/icons/astro.svg"
	},
	{
		name: "Web",
		href: "/docs/quick-starts/web",
		iconSrc: "/icons/js.svg"
	},
	{
		name: "React Native",
		href: "/docs/quick-starts/react-native",
		iconSrc: "/icons/react-native.svg"
	},
	{
		name: "Node.js",
		href: "/docs/quick-starts/node",
		iconSrc: "/icons/node.svg"
	},
	{
		name: "Python",
		href: "/docs/quick-starts/python",
		iconSrc: "/icons/python.svg"
	},
	{
		name: "PHP",
		href: "/docs/quick-starts/php",
		iconSrc: "/icons/php.svg"
	},
	{
		name: "Ruby",
		href: "/docs/quick-starts/ruby",
		iconSrc: "/icons/ruby.svg"
	},
	{
		name: ".NET",
		href: "/docs/quick-starts/dotnet",
		iconSrc: "/icons/dotnet.svg"
	},
	{
		name: "Go",
		href: "/docs/quick-starts/go",
		iconSrc: "/icons/go.svg"
	},
	{
		name: "Deno",
		href: "/docs/quick-starts/deno",
		iconSrc: "/icons/deno.svg"
	},
	{
		name: "Dart",
		href: "/docs/quick-starts/dart",
		iconSrc: "/icons/dart.svg"
	},
	{
		name: "Rust",
		href: "/docs/quick-starts/rust",
		iconSrc: "/icons/rust.svg"
	},
	{
		name: "Kotlin",
		href: "/docs/quick-starts/kotlin",
		iconSrc: "/icons/kotlin.svg"
	},
	{
		name: "Swift",
		href: "/docs/quick-starts/swift",
		iconSrc: "/icons/swift.svg"
	},
	{
		name: "Android",
		href: "/docs/quick-starts/android",
		iconSrc: "/icons/android.svg"
	},
	{
		name: "Android (Java)",
		href: "/docs/quick-starts/android-java",
		iconSrc: "/icons/java.svg"
	},
	{
		name: "iOS",
		href: "/docs/quick-starts/apple",
		iconSrc: "/icons/apple.svg"
	},
	{
		name: "Flutter",
		href: "/docs/quick-starts/flutter",
		iconSrc: "/icons/flutter.svg"
	}
];
function buildOrderedFrameworkStrip(source) {
	const byName = new Map(source.map((item) => [item.name, item]));
	const ordered = [];
	const used = /* @__PURE__ */ new Set();
	for (const name of FRAMEWORK_STRIP_PRIORITY) {
		const item = byName.get(name);
		if (item) {
			ordered.push(item);
			used.add(item.name);
		}
	}
	for (const item of source) if (!used.has(item.name)) ordered.push(item);
	return ordered;
}
const DOCS_FRAMEWORK_STRIP = buildOrderedFrameworkStrip(FRAMEWORK_STRIP_SOURCE);
function DocsHeroSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-background",
		children: [
			/* @__PURE__ */ jsx(HomeSoftLights, { variant: "docs" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative z-[1] mx-auto w-full max-w-6xl pb-16 pt-12 text-start", docsContentPaddingX, "@[480px]:pb-20 @[480px]:pt-16 @[900px]:pb-24 @[900px]:pt-20"),
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
						children: ["Documentation", /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex justify-start @[480px]:mt-6",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-7 rounded-full px-3 text-[12px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(DocsRouteLink, {
								href: "/docs/tooling/mcp",
								...analyticsAttrs("docs-mcp-cta"),
								children: [
									/* @__PURE__ */ jsx(McpIcon, { className: "size-3.5 text-muted-foreground" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-[var(--brand-cta)]",
										children: "New"
									}),
									"MCP servers for AI agents",
									/* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })
								]
							})
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-aeonik-pro mt-6 max-w-[600px] text-balance text-[32px] font-normal leading-[1.08] tracking-tight text-foreground @[480px]:mt-8 @[480px]:text-[40px] @[900px]:text-[48px]",
						children: "Ship faster with Appwrite"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-[600px] text-[14px] leading-7 text-muted-foreground @[480px]:mt-7 @[480px]:text-[15px] @[480px]:leading-8",
						children: "Build secure and scalable apps with guides for Authentication, Databases, Storage, Functions, Messaging, Realtime, and hosting."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center justify-start gap-2 @[480px]:mt-10",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "brandCta",
							size: "lg",
							className: "h-10 text-[14px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(DocsRouteLink, {
								href: "/docs/quick-starts",
								...analyticsAttrs("docs-get-started"),
								children: ["Get started", /* @__PURE__ */ jsx(ArrowRight, { className: "ms-1.5 size-4" })]
							})
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "lg",
							className: "h-10 text-[14px]",
							asChild: true,
							children: /* @__PURE__ */ jsx(DocsRouteLink, {
								href: "/docs/references",
								...analyticsAttrs("docs-api-references"),
								children: "API references"
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-14 w-full min-w-0 @[480px]:mt-16 @[900px]:mt-20",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "font-aeonik-pro max-w-[600px] text-[16px] font-normal tracking-tight text-foreground @[480px]:text-[18px]",
								children: ["Quick starts for the frameworks you love", /* @__PURE__ */ jsx("span", {
									className: "text-[var(--brand-cta)]",
									children: "_"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8 flex flex-wrap items-center justify-start gap-x-7 gap-y-6 @[480px]:mt-10 @[480px]:gap-x-8",
								children: DOCS_FRAMEWORK_STRIP.map((tool) => /* @__PURE__ */ jsx(DocsRouteLink, {
									href: tool.href,
									"aria-label": tool.name,
									title: tool.name,
									className: "flex size-9 items-center justify-center",
									children: /* @__PURE__ */ jsx("img", {
										src: tool.iconSrc,
										alt: "",
										className: cn("size-7", PUBLIC_ICON_MUTED_CLASSES)
									})
								}, tool.href))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8 flex justify-start @[480px]:mt-10",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsxs(DocsRouteLink, {
										href: "/docs/quick-starts",
										...analyticsAttrs("docs-all-quick-starts"),
										children: ["All quick start guides", /* @__PURE__ */ jsx(ArrowRight, { className: "ms-1.5 size-4" })]
									})
								})
							})
						]
					})
				]
			})
		]
	});
}
var PREVIEW_HERO_FRAMEWORK_COUNT = 8;
var FRAMEWORK_CHIP_CLASS = cn("flex size-8 items-center justify-center rounded-lg border border-border bg-card/45", "transition-colors hover:bg-accent/15");
function DocsPreviewHeroSection() {
	const frameworks = DOCS_FRAMEWORK_STRIP.slice(0, PREVIEW_HERO_FRAMEWORK_COUNT);
	return /* @__PURE__ */ jsx("section", {
		className: cn("border-b border-border", docsPreviewSectionPaddingY),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto w-full max-w-6xl text-start", docsContentPaddingX),
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: cn("max-w-[600px]", docsPreviewPrimaryTitleClass),
					children: "Ship faster with Appwrite"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-[600px] text-[13px] leading-[1.6] text-muted-foreground @[480px]:mt-7 @[480px]:text-[14px]",
					children: "Build secure and scalable apps with guides for Authentication, Databases, Storage, Functions, Messaging, Realtime, and hosting."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap items-center justify-start gap-2 @[480px]:mt-10",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 text-[12px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/quick-starts",
							previewView: "menu",
							children: "Quick starts"
						})
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 text-[12px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(DocsRouteLink, {
							href: "/docs/references",
							children: "API references"
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-14 w-full min-w-0 @[480px]:mt-16",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Popular frameworks"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex flex-wrap items-center gap-2 @[480px]:mt-10",
							children: frameworks.map((tool) => /* @__PURE__ */ jsx(DocsRouteLink, {
								href: tool.href,
								"aria-label": tool.name,
								title: tool.name,
								className: FRAMEWORK_CHIP_CLASS,
								children: /* @__PURE__ */ jsx("img", {
									src: tool.iconSrc,
									alt: "",
									className: cn("size-4", PUBLIC_ICON_MUTED_CLASSES)
								})
							}, tool.href))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex justify-start @[480px]:mt-10",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "sm",
								className: "h-9 text-[13px]",
								asChild: true,
								children: /* @__PURE__ */ jsx(DocsRouteLink, {
									href: "/docs/quick-starts",
									previewView: "menu",
									children: "View all quick start guides"
								})
							})
						})
					]
				})
			]
		})
	});
}
var TEXT_CARD_CLASS = "group block h-full rounded-xl border border-border bg-card/45 p-5 transition-colors hover:bg-accent/15";
function DocsHomeSection({ title, description, children, className, variant = "page" }) {
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
function IntegrationIcon({ title, iconSrc }) {
	if (iconSrc) return /* @__PURE__ */ jsx("span", {
		className: "flex size-8 items-center justify-center rounded-lg border border-border bg-muted/40",
		children: /* @__PURE__ */ jsx("img", {
			src: iconSrc,
			alt: "",
			className: cn("size-4", PUBLIC_ICON_MUTED_CLASSES)
		})
	});
	return /* @__PURE__ */ jsx("span", {
		className: "flex size-8 items-center justify-center rounded-lg border border-border bg-muted/40",
		children: /* @__PURE__ */ jsx(title === "SDKs" ? DOCS_HOME_INTEGRATION_ICONS.sdks : title === "REST API" ? DOCS_HOME_INTEGRATION_ICONS.rest : DOCS_HOME_INTEGRATION_ICONS.realtime, {
			className: "size-3.5 text-muted-foreground",
			"aria-hidden": true
		})
	});
}
function MigrationIcon({ title, iconSrc }) {
	if (iconSrc) return /* @__PURE__ */ jsx("img", {
		src: iconSrc,
		alt: "",
		className: cn("shrink-0", title === "Supabase" ? "size-[17px]" : "size-5", PUBLIC_ICON_MUTED_CLASSES)
	});
	const iconKey = title === "Self-hosted" ? "self-hosted" : null;
	if (!iconKey) return null;
	const Icon$1 = DOCS_HOME_MIGRATION_ICONS[iconKey];
	return /* @__PURE__ */ jsx(Icon$1, {
		className: "size-4 shrink-0 text-muted-foreground",
		"aria-hidden": true
	});
}
function DocsHome({ variant = "page" }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		variant === "preview" ? /* @__PURE__ */ jsx(DocsPreviewHeroSection, {}) : /* @__PURE__ */ jsx(DocsHeroSection, {}),
		/* @__PURE__ */ jsx(DocsHomeSection, {
			variant,
			title: "Explore capabilities",
			description: "All the core functionalities you need with a scalable and flexible API. Explore Appwrite's product offerings.",
			children: /* @__PURE__ */ jsx(DocsProductsBento, {})
		}),
		/* @__PURE__ */ jsx(DocsAiSection, { variant }),
		/* @__PURE__ */ jsx(DocsHomeSection, {
			variant,
			title: "Explore ways to integrate",
			description: "Choose how you integrate with Appwrite. Explore references for the Appwrite SDK, REST API, GraphQL API, or Realtime API.",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("grid gap-4", docsGridTwoCol),
				children: DOCS_HOME_INTEGRATIONS.map((item) => /* @__PURE__ */ jsx(DocsRouteLink, {
					href: item.href,
					className: TEXT_CARD_CLASS,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ jsx(IntegrationIcon, {
							title: item.title,
							iconSrc: item.iconSrc
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[13px] font-medium text-foreground",
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[13px] leading-5 text-muted-foreground",
							children: item.description
						})] })]
					})
				}, item.href))
			})
		}),
		/* @__PURE__ */ jsx(DocsHomeSection, {
			variant,
			title: "Show me some code",
			description: "If you learn best from code examples, follow one of our tutorials.",
			children: /* @__PURE__ */ jsx(DocsTutorialsScroll, {})
		}),
		/* @__PURE__ */ jsx(DocsHomeSection, {
			variant,
			title: "Migrate to Appwrite",
			description: "Own your data with automatic data migrations.",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("grid gap-4", docsGridFiveCol),
				children: DOCS_HOME_MIGRATIONS.map((item) => /* @__PURE__ */ jsxs(DocsRouteLink, {
					href: item.href,
					className: TEXT_CARD_CLASS,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(MigrationIcon, {
							title: item.title,
							iconSrc: item.iconSrc
						}), /* @__PURE__ */ jsx("h3", {
							className: "text-[13px] font-medium text-foreground",
							children: item.title
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] leading-5 text-muted-foreground",
						children: item.description
					})]
				}, item.href))
			})
		}),
		/* @__PURE__ */ jsx(DocsHubFaq, { variant })
	] });
}
export { DocsHome as t };
