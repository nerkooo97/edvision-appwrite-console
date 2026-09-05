import { r as resetConsoleShellDocumentScroll, t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { f as useDebugOverrides, n as getEnglishCatalog, r as useI18n } from "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-profiles-D__E5Kgi.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./tabs-XaWkg9jR.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import "./use-media-min-width-T-T6WgXi.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./database-mascot-icons-mAQ4uqbH.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import { t as CARD_LINK_HINT_CLASS } from "./link-styles-DzUNTdI9.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { i as ProductBentoSoftLights, n as HomeSoftLights, r as ProductBentoHoverLight, t as AiTileSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as AiSkillsMockVisual, n as AiFeatureCtaButton, r as AiMcpMockVisual, t as AiFeatureCard } from "./AiMockPanels-DoPFSJSx.js";
import { n as getActiveLaunchEvent, u as applyInitEventVisibility } from "./events-s0i9XY3r.js";
import { t as InitWordmark } from "./InitWordmark-DLiURix2.js";
import { n as isInitEventDuring } from "./org-promo-banner-D8oCrFdK.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { r as PRODUCT_NAV_REGISTRY } from "./registry-C4rxXMsK.js";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DsYcfNc5.js";
import "./customer-logos-Bzm6qZH_.js";
import { n as MarketingProductPills, t as marketingProductToolkit } from "./product-toolkit-C63_kutv.js";
import { i as getOfficialPlugins, r as getMcpIntegrations } from "./ide-Ch0cGqVM.js";
import { a as getInitDayCardId, c as InitDayCountdown, n as DatabasesProductVisual, r as isLaunchEventDayLocked, t as FirewallProductVisual } from "./FirewallProductVisual-B4ibK_Hf.js";
import { n as useIntersectionVisible, t as NetworkGlobeMount } from "./NetworkGlobeMount-CQkI5gh4.js";
import { t as TestimonialsSection } from "./TestimonialsSection-DWrG0DG4.js";
import { o as productBentoContainer, s as productBentoIdle } from "./MockSyntax-BoA_nXCY.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, Bell, Check, CheckCircle2, ChevronRight, Clock, Database, DatabaseBackup, Folder, Globe, Globe2, HeartPulse, Lock, LockKeyhole, Mail, Megaphone, MessageSquare, Pentagon, Phone, Radio, Scale, Shield, ShieldCheck, Users, Zap } from "lucide-react";
var OFFICIAL_PLUGINS = getOfficialPlugins();
var MCP_INTEGRATIONS = getMcpIntegrations();
var BENCHMARK_ROWS = [
	{
		model: "GPT 5.5",
		icon: "/icons/chatgpt.svg",
		cost: "$5.00",
		overall: 97.7,
		auth: 98.5,
		tablesDb: 96.5,
		functions: 99.5,
		storage: 94.3,
		sites: 100,
		messaging: 100
	},
	{
		model: "Claude Opus 4.7",
		icon: "/icons/claude.svg",
		cost: "$5.00",
		overall: 97.1,
		auth: 99,
		tablesDb: 91.3,
		functions: 100,
		storage: 94.8,
		sites: 100,
		messaging: 100
	},
	{
		model: "Claude Opus 4.8",
		icon: "/icons/claude.svg",
		cost: "$5.00",
		overall: 97.1,
		auth: 99.3,
		tablesDb: 96.1,
		functions: 95,
		storage: 94.3,
		sites: 100,
		messaging: 100
	},
	{
		model: "Grok Build 0.1",
		icon: "/icons/x.svg",
		cost: "$1.00",
		overall: 96.7,
		auth: 92,
		tablesDb: 96.3,
		functions: 100,
		storage: 93.5,
		sites: 99.7,
		messaging: 100
	}
];
function formatScore(value) {
	return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}%`;
}
function McpFeaturePanel() {
	const t = useT();
	return /* @__PURE__ */ jsx(AiFeatureCard, {
		title: "MCP",
		description: t("Connect AI agents to your Appwrite backend. No custom integrations required."),
		shade: "mcp",
		className: "border-b border-border lg:border-b-0 lg:border-e",
		cta: /* @__PURE__ */ jsx(AiFeatureCtaButton, {
			href: "/docs/tooling/mcp",
			label: t("Learn more")
		}),
		children: /* @__PURE__ */ jsx(AiMcpMockVisual, {})
	});
}
function SkillsFeaturePanel() {
	const t = useT();
	return /* @__PURE__ */ jsx(AiFeatureCard, {
		title: t("Skills"),
		description: t("Teach AI agents your backend, so they always make the right call."),
		shade: "skills",
		cta: /* @__PURE__ */ jsx(AiFeatureCtaButton, {
			href: "/docs/tooling/ai/skills",
			label: t("Learn more")
		}),
		children: /* @__PURE__ */ jsx(AiSkillsMockVisual, {})
	});
}
function PluginTile({ plugin, href, badges }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(MarketingSiteLink, {
		href,
		className: "group flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2.5 transition-colors hover:bg-accent/15",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40",
				children: /* @__PURE__ */ jsx("img", {
					src: plugin.iconPath,
					alt: "",
					className: "size-4 object-contain"
				})
			}),
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 text-[13px] font-medium text-foreground",
				children: plugin.name
			}),
			/* @__PURE__ */ jsx("span", {
				className: "flex shrink-0 flex-wrap items-center justify-end gap-1",
				children: badges.map((badge) => /* @__PURE__ */ jsx(Badge, {
					variant: badge.variant,
					className: "text-[10px]",
					children: t(badge.label)
				}, badge.label))
			})
		]
	});
}
function AiPluginsSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-10 grid overflow-visible pb-4 lg:mt-12 lg:grid-cols-2 lg:divide-x lg:divide-border",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative py-6 lg:py-0 lg:pe-10",
			children: [
				/* @__PURE__ */ jsx(AiTileSoftLight, { tone: "plugins" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative space-y-1.5",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-aeonik-pro text-[16px] font-normal text-foreground sm:text-[18px]",
						children: t("Official plugins")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-5 text-muted-foreground",
						children: t("One-click marketplace plugins for Cursor, Claude Code, and Codex.")
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
					children: OFFICIAL_PLUGINS.map((plugin) => /* @__PURE__ */ jsx(PluginTile, {
						plugin,
						href: plugin.docsUrl,
						badges: [{
							label: "Official",
							variant: "info"
						}]
					}, plugin.id))
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative border-t border-border py-6 lg:border-t-0 lg:py-0 lg:ps-10",
			children: [
				/* @__PURE__ */ jsx(AiTileSoftLight, { tone: "integrations" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative space-y-1.5",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-aeonik-pro text-[16px] font-normal text-foreground sm:text-[18px]",
						children: t("Integrations")
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] leading-5 text-muted-foreground",
						children: [t("Connect Appwrite in other agents and IDEs."), " "]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative mt-4 grid grid-cols-2 gap-2",
					children: MCP_INTEGRATIONS.map((integration) => /* @__PURE__ */ jsx(PluginTile, {
						plugin: integration,
						href: integration.mcpDocsUrl,
						badges: [{
							label: "Skills",
							variant: "inactive"
						}]
					}, integration.id))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative mt-4",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "h-9 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(MarketingSiteLink, {
							href: "/docs/tooling/mcp",
							children: t("Learn more")
						})
					})
				})
			]
		})]
	});
}
function BenchmarkTable() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0",
		children: /* @__PURE__ */ jsxs(Table$1, {
			className: "min-w-[56rem]",
			children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Model")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Cost/1M")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Overall")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Auth")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: "TablesDB"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Functions")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Storage")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Sites")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-end text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Messaging")
					})
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: BENCHMARK_ROWS.map((row) => /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-accent/10",
				children: [
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("img", {
								src: row.icon,
								alt: "",
								className: "size-4 object-contain"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-medium text-foreground",
								children: row.model
							})]
						})
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: row.cost
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] font-semibold tabular-nums text-emerald-600 dark:text-emerald-400",
						children: formatScore(row.overall)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.auth)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.tablesDb)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.functions)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.storage)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.sites)
					}),
					/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3 text-end text-[13px] tabular-nums text-muted-foreground",
						children: formatScore(row.messaging)
					})
				]
			}, row.model)) })]
		})
	});
}
function AiSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-t border-border bg-background py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px] opacity-70",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro max-w-3xl text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
					children: [t("Designed for the AI agents in your workflow"), /* @__PURE__ */ jsx("span", {
						className: "text-[var(--brand-cta)]",
						children: "_"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 overflow-hidden rounded-xl border border-border bg-card/50 lg:mt-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-2",
						children: [/* @__PURE__ */ jsx(McpFeaturePanel, {}), /* @__PURE__ */ jsx(SkillsFeaturePanel, {})]
					})
				}),
				/* @__PURE__ */ jsx(AiPluginsSection, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "pt-8 sm:pt-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4 lg:gap-5",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-aeonik-pro shrink-0 text-[16px] font-normal text-foreground sm:text-[17px]",
								children: t("Benchmark")
							}), /* @__PURE__ */ jsx("p", {
								className: "min-w-0 max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-[15px]",
								children: t("Works with every major LLM. Find out how well your model integrates with Appwrite.")
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 flex-wrap gap-2",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								className: "h-10 text-[13px]",
								asChild: true,
								children: /* @__PURE__ */ jsx("a", {
									href: "https://arena.appwrite.io/",
									target: "_blank",
									rel: "noopener noreferrer",
									children: t("View full benchmark")
								})
							})
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-6 overflow-hidden rounded-xl border border-border bg-card/45",
						children: /* @__PURE__ */ jsx(BenchmarkTable, {})
					})]
				})
			]
		})]
	});
}
function HomeInitDayCard({ day, eventStartDate }) {
	const t = useT();
	if (isLaunchEventDayLocked(day)) return /* @__PURE__ */ jsxs(Link, {
		to: "/init",
		hash: getInitDayCardId(day.day),
		className: cn("link-unstyled flex min-h-full flex-col rounded-xl border border-dashed border-border bg-muted/20 p-4 text-start transition-colors", "hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: [
						t("Day"),
						" ",
						day.day,
						" · ",
						t(day.dateLabel)
					]
				}), /* @__PURE__ */ jsx(Lock, {
					className: "size-3.5 shrink-0 text-muted-foreground",
					"aria-hidden": true
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-[13px] font-medium text-muted-foreground",
				children: t("Coming soon")
			}),
			/* @__PURE__ */ jsx(InitDayCountdown, {
				eventStartDate,
				dayNumber: day.day,
				size: "sm",
				className: "mt-2"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-2 text-[12px] leading-normal text-muted-foreground/80",
				children: [
					t("Unlocks on"),
					" ",
					t(day.dateLabel)
				]
			})
		]
	});
	return /* @__PURE__ */ jsxs(Link, {
		to: "/init",
		hash: getInitDayCardId(day.day),
		className: cn("link-unstyled group flex min-h-full flex-col rounded-xl border bg-card/50 p-4 text-start transition-colors", "hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", day.isLive ? "border-[color-mix(in_srgb,var(--brand-cta)_45%,var(--border))]" : "border-border"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: [
						t("Day"),
						" ",
						day.day,
						" · ",
						t(day.dateLabel)
					]
				}), day.isLive ? /* @__PURE__ */ jsx(Badge, {
					variant: "error",
					className: "text-[10px] shrink-0",
					children: t("Live")
				}) : null]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-3 text-[15px] font-semibold leading-none text-foreground",
				children: t(day.title)
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 min-h-[2lh] flex-1 line-clamp-2 text-[12px] leading-normal text-muted-foreground",
				children: t(day.description)
			}),
			/* @__PURE__ */ jsxs("span", {
				className: cn("mt-4 text-[12px]", CARD_LINK_HINT_CLASS),
				children: [
					t("View day"),
					" ",
					day.day,
					/* @__PURE__ */ jsx(ArrowRight, {
						className: "size-3.5",
						"aria-hidden": true
					})
				]
			})
		]
	});
}
function InitSection() {
	const t = useT();
	const { mockInitCurrentDay } = useDebugOverrides();
	const visible = useMemo(() => isInitEventDuring({ mockCurrentDay: mockInitCurrentDay }), [mockInitCurrentDay]);
	const event = useMemo(() => {
		if (!visible) return null;
		const active = getActiveLaunchEvent();
		if (!active) return null;
		return applyInitEventVisibility(active, { mockCurrentDay: mockInitCurrentDay });
	}, [visible, mockInitCurrentDay]);
	if (!visible || !event) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-background py-8 sm:py-10",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px] opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2.5 overflow-hidden sm:gap-3",
				children: [
					/* @__PURE__ */ jsx(InitWordmark, { className: "shrink-0 text-[20px] text-foreground sm:text-[22px]" }),
					/* @__PURE__ */ jsx(Badge, {
						variant: "success",
						className: "text-[10px] shrink-0",
						children: t("Live")
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": true,
						className: "hidden shrink-0 text-muted-foreground/40 md:inline",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:inline",
						children: t(event.dateRangeLabel)
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": true,
						className: "hidden shrink-0 text-muted-foreground/40 min-[420px]:inline",
						children: "·"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "min-w-0 flex-1 truncate text-[13px] text-muted-foreground max-[419px]:sr-only",
						children: t("Launch week is live. Follow daily drops, live sessions, and giveaways.")
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "brandCta",
						size: "sm",
						className: "h-8 shrink-0 px-3 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/init",
							...analyticsAttrs("home-join-init"),
							children: [t("Join Init"), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
						})
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: event.days.map((day) => /* @__PURE__ */ jsx(HomeInitDayCard, {
					day,
					eventStartDate: event.startDate
				}, day.day))
			})]
		})]
	});
}
var networkProtections = [
	"Global CDN",
	"DDoS protection",
	"Sub-50ms latency"
];
function NetworkSection() {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "border-t border-border bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden px-4 pt-16 pb-0 sm:px-6 sm:pt-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex w-full max-w-4xl flex-col items-center text-center",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-aeonik-pro text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
							children: [
								t("The Appwrite Network"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--brand-cta)]",
									children: "_"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-2xl text-[14px] leading-6 text-muted-foreground sm:text-[15px]",
							children: t("Built into every Appwrite project: backend APIs, serverless functions, and hosted websites, with requests and assets served through our CDN and DDoS protection at the network edge. Choose global regions and edges to optimize latency, compliance, and data residency.")
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2",
							"aria-label": t("Network protections included with every Appwrite project"),
							children: networkProtections.map((label) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
								children: [/* @__PURE__ */ jsx(CheckCircle2, {
									className: "size-4 shrink-0 text-emerald-600 dark:text-emerald-400",
									"aria-hidden": true
								}), t(label)]
							}, label))
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: "relative z-30 mt-6 h-10 text-[13px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(MarketingSiteLink, {
								href: "/docs/products/network",
								children: [t("More about the Appwrite Network"), " "]
							})
						})
					]
				}),
				/* @__PURE__ */ jsx(NetworkGlobeMount, { className: "relative z-20 -mt-2 w-full sm:-mt-6 lg:-mt-10" }),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-10",
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx("div", { className: "h-32 w-full bg-gradient-to-b from-transparent to-background sm:h-40 lg:h-48" })
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "w-full border-t border-border",
			"aria-hidden": true
		})]
	});
}
var HOME_PRICING_CTA_ACTIONS = {
	free: "home-pricing-start-free",
	pro: "home-pricing-start-pro",
	enterprise: "home-pricing-contact-enterprise"
};
var pricingTiers = [
	{
		id: "free",
		name: "Free",
		price: "$0",
		description: "A great fit for passion projects and small applications.",
		cta: "Start project",
		ctaVariant: "outline",
		href: "/sign-up"
	},
	{
		id: "pro",
		name: "Pro",
		price: "$25",
		priceSuffix: "/month",
		description: "For production applications that need powerful functionality and resources to scale.",
		cta: "Start project",
		ctaVariant: "brandCta",
		href: "/sign-up",
		popular: true
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "Custom",
		description: "For enterprises that need more power and premium support.",
		cta: "Contact us",
		ctaVariant: "outline",
		href: CONTACT_ENTERPRISE_URL,
		marketingAware: true
	}
];
var outlineTierButtonClassName = "border-[var(--brand-cta)]/30 text-foreground hover:bg-[var(--brand-cta)]/10 hover:text-foreground";
function PricingTierCta({ tier }) {
	const t = useT();
	const buttonClassName = cn("h-10 w-full text-[13px]", tier.ctaVariant === "outline" && outlineTierButtonClassName);
	const action = HOME_PRICING_CTA_ACTIONS[tier.id];
	const analytics = action ? analyticsAttrs(action) : void 0;
	if (tier.marketingAware) return /* @__PURE__ */ jsx(Button, {
		variant: tier.ctaVariant,
		className: buttonClassName,
		asChild: true,
		children: /* @__PURE__ */ jsx(MarketingSiteLink, {
			href: tier.href,
			...analytics,
			children: t(tier.cta)
		})
	});
	return /* @__PURE__ */ jsx(Button, {
		variant: tier.ctaVariant,
		className: buttonClassName,
		asChild: true,
		children: /* @__PURE__ */ jsx(Link, {
			to: tier.href,
			search: { redirect: "/" },
			...analytics,
			children: t(tier.cta)
		})
	});
}
function PricingTierCard({ tier }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("article", {
		className: "group flex min-h-[280px] flex-col border-b border-border p-6 transition-colors last:border-b-0 hover:bg-accent/15 sm:min-h-[300px] sm:border-e sm:border-b-0 sm:p-7 sm:[&:nth-child(3n)]:border-e-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[14px] font-semibold text-foreground",
						children: t(tier.name)
					}), tier.popular ? /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-[var(--brand-cta)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-cta)]",
						children: t("Popular")
					}) : null]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "flex flex-wrap items-baseline gap-x-1.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-aeonik-pro text-[40px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
						children: t(tier.price)
					}), tier.priceSuffix ? /* @__PURE__ */ jsx("span", {
						className: "text-[14px] text-muted-foreground",
						children: t(tier.priceSuffix)
					}) : null]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] leading-5 text-muted-foreground",
					children: t(tier.description)
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-8",
			children: /* @__PURE__ */ jsx(PricingTierCta, { tier })
		})]
	});
}
function PricingSection() {
	const t = useT();
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-border bg-background py-16 sm:py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro max-w-xl text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
					children: [t("Start building like a team of hundreds today"), /* @__PURE__ */ jsx("span", {
						className: "text-[var(--brand-cta)]",
						children: "_"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "brandCta",
						className: "h-10 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(Link, {
							to: "/sign-up",
							search: { redirect: "/" },
							...analyticsAttrs("home-start-building"),
							children: t("Start building")
						})
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "h-10 text-[13px]",
						asChild: true,
						children: /* @__PURE__ */ jsx(MarketingSiteLink, {
							href: "/pricing",
							...analyticsAttrs("home-view-pricing"),
							children: t("View pricing plans")
						})
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid overflow-hidden rounded-xl border border-border bg-card/45 sm:grid-cols-3",
				children: pricingTiers.map((tier) => /* @__PURE__ */ jsx(PricingTierCard, { tier }, tier.id))
			})]
		})
	});
}
var SCALE_QUOTE = {
	lineOne: "The switch to using Appwrite brought",
	lineTwo: "infinite value that I’m still discovering today.",
	name: "Ryan O’Connor",
	title: "Founder",
	company: "K-Collect",
	avatar: "/images/testimonials/ryan-oconner-testimonial.avif"
};
function ScaleQuoteBelowChart() {
	const t = useT();
	return /* @__PURE__ */ jsxs("figure", {
		className: "mx-auto flex w-full max-w-[21rem] flex-col items-center text-center sm:max-w-[24rem]",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "font-aeonik-pro text-[3.5rem] leading-none text-muted-foreground/30 sm:text-[4rem]",
				"aria-hidden": true,
				children: "“"
			}),
			/* @__PURE__ */ jsxs("blockquote", {
				className: "mt-3 text-sm leading-snug text-muted-foreground sm:text-[15px] sm:leading-6",
				children: [/* @__PURE__ */ jsx("span", {
					className: "block",
					children: t(SCALE_QUOTE.lineOne)
				}), /* @__PURE__ */ jsx("span", {
					className: "mt-1 block",
					children: t(SCALE_QUOTE.lineTwo)
				})]
			}),
			/* @__PURE__ */ jsxs("figcaption", {
				className: "mt-7 flex items-center justify-center gap-2.5 sm:mt-8",
				children: [/* @__PURE__ */ jsxs(Avatar, {
					className: "size-8",
					children: [/* @__PURE__ */ jsx(AvatarImage, {
						src: SCALE_QUOTE.avatar,
						alt: ""
					}), /* @__PURE__ */ jsx(AvatarFallback, {
						className: "text-xs",
						children: "RO"
					})]
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-start text-sm leading-snug",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground",
						children: SCALE_QUOTE.name
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground",
						children: [
							" ",
							"· ",
							t(SCALE_QUOTE.title),
							", ",
							SCALE_QUOTE.company
						]
					})]
				})]
			})
		]
	});
}
var SCALE_STATS = [
	{
		value: 24,
		suffix: "K+",
		label: "Discord members"
	},
	{
		value: 56,
		suffix: "K+",
		label: "GitHub stars"
	},
	{
		value: 300,
		suffix: "+",
		label: "PoP locations"
	},
	{
		value: 300,
		suffix: "K+",
		label: "Cloud projects"
	},
	{
		value: 500,
		suffix: "K+",
		label: "Developers"
	},
	{
		value: 20,
		suffix: "B+",
		label: "DB operations / month"
	},
	{
		value: 7,
		suffix: "B+",
		label: "Requests / month"
	}
];
function scaleStatMagnitude(stat) {
	if (stat.suffix.startsWith("B")) return stat.value * 1e9;
	if (stat.suffix.startsWith("K")) return stat.value * 1e3;
	return stat.value;
}
var SORTED_SCALE_STATS = [...SCALE_STATS].sort((a, b) => scaleStatMagnitude(a) - scaleStatMagnitude(b));
function ScaleStatCard({ value, suffix, label }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-w-0 flex-col justify-center rounded-xl border border-border/80 px-2.5 py-2.5 sm:px-3 sm:py-3",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "text-base font-semibold tabular-nums tracking-tight text-foreground sm:text-lg lg:text-xl",
			children: [value, suffix]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-0.5 text-[10px] leading-snug text-muted-foreground sm:text-[11px]",
			children: t(label)
		})]
	});
}
function ScaleAreaCurve({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		className: cn("absolute inset-0 h-full w-full origin-center rtl:-scale-x-100", className),
		viewBox: "0 0 400 280",
		preserveAspectRatio: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
				id: "scale-area-fill",
				gradientUnits: "userSpaceOnUse",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "280",
				children: [
					/* @__PURE__ */ jsx("stop", {
						offset: "0%",
						stopColor: "var(--brand-cta)",
						stopOpacity: .2
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "38%",
						stopColor: "var(--brand-cta)",
						stopOpacity: .1
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "62%",
						stopColor: "var(--brand-cta)",
						stopOpacity: .04
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "82%",
						stopColor: "var(--brand-cta)",
						stopOpacity: .012
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "100%",
						stopColor: "var(--brand-cta)",
						stopOpacity: 0
					})
				]
			}) }),
			/* @__PURE__ */ jsx("path", {
				d: "M0 280 L0 228 C28 220 56 210 86 198 C114 186 142 170 172 152 C200 134 228 118 256 100 C286 82 314 64 342 46 C368 30 386 22 400 14 L400 280 Z",
				fill: "url(#scale-area-fill)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M0 228 C28 220 56 210 86 198 C114 186 142 170 172 152 C200 134 228 118 256 100 C286 82 314 64 342 46 C368 30 386 22 400 14",
				fill: "none",
				stroke: "var(--brand-cta)",
				strokeWidth: 2,
				vectorEffect: "non-scaling-stroke"
			})
		]
	});
}
function ScaleChartBackground() {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			20,
			40,
			60,
			80
		].map((top) => /* @__PURE__ */ jsx("div", {
			className: "absolute inset-x-0 border-t border-border/80",
			style: { top: `${top}%` }
		}, top))
	});
}
function ScaleStatCards() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7 min-[1200px]:gap-3",
		children: SORTED_SCALE_STATS.map((stat) => /* @__PURE__ */ jsx(ScaleStatCard, {
			value: stat.value,
			suffix: stat.suffix,
			label: stat.label
		}, stat.label))
	});
}
function ScaleChart() {
	return /* @__PURE__ */ jsx("div", {
		className: "relative left-1/2 w-[100dvw] -translate-x-1/2",
		children: /* @__PURE__ */ jsx("div", {
			className: "relative min-h-[22rem] w-full overflow-hidden bg-transparent sm:min-h-[26rem] lg:min-h-[28rem]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-0",
				"aria-hidden": true,
				children: [/* @__PURE__ */ jsx(ScaleChartBackground, {}), /* @__PURE__ */ jsx(ScaleAreaCurve, { className: "scale-area-curve" })]
			})
		})
	});
}
function ScaleSection() {
	return /* @__PURE__ */ jsxs("section", {
		id: "scale",
		className: "scroll-mt-28 border-t border-border bg-background py-16 sm:py-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro max-w-3xl text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
					children: [
						useT()("Over half a million developers scale with Appwrite"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 sm:mt-10",
					children: /* @__PURE__ */ jsx(ScaleStatCards, {})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 w-full sm:mt-8",
				children: /* @__PURE__ */ jsx(ScaleChart, {})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-[1] mx-auto -mt-6 w-full max-w-7xl px-4 sm:-mt-8 sm:px-6",
				children: /* @__PURE__ */ jsx(ScaleQuoteBelowChart, {})
			})
		]
	});
}
const HOME_SCALE_SECTION_ID = "scale";
function isHomeHashTarget(hash) {
	return hash === HOME_SCALE_SECTION_ID;
}
function scrollToMarketingSection(sectionId, behavior = "smooth") {
	if (typeof document === "undefined") return;
	const main = document.getElementById("main-content");
	const el = document.getElementById(sectionId);
	if (!main || !el) return;
	resetConsoleShellDocumentScroll();
	const mainRect = main.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	const targetTop = main.scrollTop + elRect.top - mainRect.top - 112;
	main.scrollTo({
		top: Math.max(0, targetTop),
		behavior
	});
	if (typeof window !== "undefined") {
		const nextHash = `#${sectionId}`;
		if (window.location.hash !== nextHash) {
			window.history.replaceState(null, "", nextHash);
			resetConsoleShellDocumentScroll();
		}
	}
}
var MAX_HASH_SCROLL_ATTEMPTS = 24;
function getHomeHash(locationHash) {
	const fromRouter = locationHash?.replace(/^#/, "") ?? "";
	if (fromRouter) return fromRouter;
	return window.location.hash.slice(1);
}
function scrollHomeHashTarget(hash, behavior, resetMain) {
	if (!isHomeHashTarget(hash)) return;
	resetConsoleShellDocumentScroll();
	if (resetMain) {
		const main = document.getElementById("main-content");
		if (main) main.scrollTop = 0;
	}
	let attempts = 0;
	const tryScroll = () => {
		const target = document.getElementById(hash);
		if (!target && attempts < MAX_HASH_SCROLL_ATTEMPTS) {
			attempts += 1;
			requestAnimationFrame(tryScroll);
			return;
		}
		if (target) scrollToMarketingSection(hash, behavior);
	};
	tryScroll();
}
function HomeHashScroll() {
	const location = useLocation();
	const shouldResetMainRef = useRef(true);
	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		const hash = getHomeHash(location.hash);
		if (!isHomeHashTarget(hash)) return;
		const previousRestoration = history.scrollRestoration;
		history.scrollRestoration = "manual";
		const resetMain = shouldResetMainRef.current;
		shouldResetMainRef.current = false;
		scrollHomeHashTarget(hash, "auto", resetMain);
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
			if (!isHomeHashTarget(nextHash)) return;
			scrollHomeHashTarget(nextHash, "smooth", false);
		};
		const onHomeHashClick = (event) => {
			if (event.defaultPrevented) return;
			const target = event.target;
			if (!(target instanceof Element)) return;
			const anchor = target.closest("a[href^=\"#\"]");
			if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
			const href = anchor.getAttribute("href");
			if (!href?.startsWith("#")) return;
			const hash = href.slice(1);
			if (!isHomeHashTarget(hash)) return;
			event.preventDefault();
			scrollHomeHashTarget(hash, "smooth", false);
		};
		window.addEventListener("hashchange", onHashChange);
		document.addEventListener("click", onHomeHashClick, true);
		return () => {
			if (root instanceof HTMLElement) root.removeEventListener("scroll", lockRootScroll);
			window.removeEventListener("hashchange", onHashChange);
			document.removeEventListener("click", onHomeHashClick, true);
		};
	}, []);
	useEffect(() => {
		shouldResetMainRef.current = true;
	}, [location.pathname]);
	return null;
}
var OAUTH_PROVIDERS = [
	{
		id: "google",
		label: "Google",
		icon: "/icons/google.svg",
		hoverClass: "group-hover:border-blue-500/35 group-hover:bg-blue-500/[0.06] motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background"
	},
	{
		id: "github",
		label: "GitHub",
		icon: "/icons/github.svg",
		hoverClass: "group-hover:border-foreground/25 group-hover:bg-foreground/[0.04] motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background"
	},
	{
		id: "apple",
		label: "Apple",
		icon: "/icons/apple.svg",
		hoverClass: "group-hover:border-foreground/30 group-hover:bg-foreground/[0.05] motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background"
	}
];
function MockEmailField({ placeholder, typeDelayMs = 160 }) {
	const t = useT();
	const typedText = "paige@acme.io";
	const cursorDelay = typeDelayMs + 715;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ jsx("label", {
			className: cn("text-[11px] font-medium", productBentoIdle.text),
			children: t("Email")
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative rounded-md border border-border bg-background px-2.5 py-1.5 text-[12px]",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground transition-opacity duration-200 group-hover:opacity-0 motion-reduce:group-hover:opacity-100",
				children: placeholder
			}), /* @__PURE__ */ jsx("span", {
				className: "absolute inset-x-2.5 inset-y-0 flex items-center opacity-0 group-hover:opacity-100 motion-reduce:opacity-100",
				children: /* @__PURE__ */ jsxs("span", {
					className: cn("inline-flex max-w-full items-center overflow-hidden whitespace-nowrap", productBentoIdle.text),
					children: [/* @__PURE__ */ jsx("span", {
						className: "inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:animate-[product-bento-email-reveal_1.4s_steps(18,end)_forwards] motion-reduce:max-w-none motion-reduce:group-hover:animate-none",
						style: { animationDelay: `${typeDelayMs}ms` },
						children: typedText
					}), /* @__PURE__ */ jsx("span", {
						className: "ms-px inline-block h-2.5 w-px shrink-0 bg-muted-foreground opacity-0 group-hover:animate-[ai-mock-cursor-blink_1s_step-end_infinite] motion-reduce:opacity-100 motion-reduce:group-hover:animate-none",
						style: { animationDelay: `${cursorDelay}ms` }
					})]
				})
			})]
		})]
	});
}
function OAuthButton({ provider, index, highlighted }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2 py-1.5 text-[12px] transition-[border-color,background-color,transform,box-shadow,color] duration-300", productBentoIdle.text, provider.hoverClass, highlighted && "group-hover:animate-[product-bento-oauth-highlight_0.45s_ease-out_both] motion-reduce:group-hover:animate-none"),
		style: highlighted ? { animationDelay: `${80 + index * 90}ms` } : void 0,
		children: [/* @__PURE__ */ jsx("img", {
			src: provider.icon,
			alt: "",
			className: cn("size-3.5 shrink-0", productBentoIdle.providerIcon),
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "truncate",
			children: provider.label
		})]
	});
}
function AuthProductVisual() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto flex h-full min-h-0 w-full max-w-[20rem] flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("flex min-h-0 flex-1 flex-col", productBentoContainer.shell),
				children: [/* @__PURE__ */ jsx("div", {
					className: cn(productBentoContainer.header, "px-3 py-2"),
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: cn("size-2 rounded-full", productBentoIdle.brandDot),
							"aria-hidden": true
						}), /* @__PURE__ */ jsx("span", {
							className: cn("text-[12px] font-semibold", productBentoIdle.text),
							children: "Acme"
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-3 overflow-hidden p-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: cn("text-[13px] font-semibold", productBentoIdle.text),
							children: t("Welcome back")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-[11px] text-muted-foreground",
							children: t("Sign in to your account")
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-3 gap-1.5",
							children: OAUTH_PROVIDERS.map((provider, index) => /* @__PURE__ */ jsx(OAuthButton, {
								provider,
								index,
								highlighted: index === 0
							}, provider.id))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: t("or")
								}),
								/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative",
							children: /* @__PURE__ */ jsx(MockEmailField, {
								placeholder: "you@company.com",
								typeDelayMs: 220
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-center gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1.5 text-[12px] font-medium text-muted-foreground transition-[border-color,background-color,color] duration-300 group-hover:border-[color-mix(in_srgb,var(--brand-cta)_35%,var(--border))] group-hover:bg-[color-mix(in_srgb,var(--brand-cta)_12%,var(--background))] group-hover:text-foreground motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-muted/30 motion-reduce:group-hover:text-muted-foreground",
							style: { transitionDelay: "480ms" },
							children: [/* @__PURE__ */ jsx(Mail, {
								className: cn("size-3.5 shrink-0", productBentoIdle.brandIcon),
								"aria-hidden": true
							}), /* @__PURE__ */ jsx("span", { children: t("Send magic link") })]
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute -end-1 top-8 z-10 max-w-[calc(100%-0.5rem)] translate-x-2 rounded-lg border border-border bg-background/95 px-2 py-1.5 opacity-0 shadow-sm transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100 sm:-end-2",
				style: { transitionDelay: "640ms" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-4 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
						children: /* @__PURE__ */ jsx(Mail, {
							className: "size-2.5",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-medium text-foreground",
						children: t("Check your inbox")
					})]
				})
			})]
		})
	});
}
var USE_CASES = [
	{
		id: "schedule",
		label: "Schedules",
		detail: "Cron schedules trigger functions automatically",
		icon: Clock,
		highlightKey: "schedule"
	},
	{
		id: "stripe",
		label: "Stripe webhooks",
		detail: "Verify events and sync billing state",
		iconSrc: "/icons/stripe.svg",
		highlightKey: "webhook"
	},
	{
		id: "events",
		label: "Database events",
		detail: "React when rows are created or updated",
		icon: Database
	},
	{
		id: "email",
		label: "Notifications",
		detail: "Send email when users sign up",
		icon: Mail
	}
];
function UseCaseRow({ useCase }) {
	const t = useT();
	const Icon$1 = useCase.icon;
	const highlighted = Boolean(useCase.highlightKey);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-start gap-2 rounded-md border border-border/80 bg-background px-2 py-1.5 transition-[border-color,background-color] duration-300", highlighted && "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_30%,var(--border))] group-hover:bg-muted/30 motion-reduce:group-hover:border-border/80 motion-reduce:group-hover:bg-background"),
		children: [/* @__PURE__ */ jsx("span", {
			className: cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-background", highlighted && "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_25%,var(--border))] motion-reduce:group-hover:border-border"),
			children: useCase.iconSrc ? /* @__PURE__ */ jsx("img", {
				src: useCase.iconSrc,
				alt: "",
				className: cn("size-3.5", productBentoIdle.providerIcon),
				"aria-hidden": true
			}) : Icon$1 ? /* @__PURE__ */ jsx(Icon$1, {
				className: "size-3.5 text-muted-foreground",
				"aria-hidden": true
			}) : null
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: cn("text-[11px] font-medium leading-tight", productBentoIdle.text),
				children: t(useCase.label)
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 text-[10px] leading-snug text-muted-foreground",
				children: t(useCase.detail)
			})]
		})]
	});
}
function FunctionsProductVisual() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex h-full min-h-0 w-full max-w-[20rem] flex-col", productBentoContainer.shell),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn(productBentoContainer.header, "px-3 py-2"),
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("text-[11px] font-medium", productBentoIdle.text),
					children: t("My functions")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[10px] text-muted-foreground",
					children: t("Auto-scales with demand, schedules, and events")
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-1.5 overflow-hidden p-2.5",
				children: USE_CASES.map((useCase) => /* @__PURE__ */ jsx(UseCaseRow, { useCase }, useCase.id))
			})]
		})
	});
}
var CHANNELS = [
	{
		id: "email",
		label: "Email",
		icon: Mail
	},
	{
		id: "sms",
		label: "SMS",
		icon: Phone
	},
	{
		id: "push",
		label: "Push",
		icon: Bell
	}
];
var PROVIDERS = [
	{
		label: "SendGrid",
		icon: "/icons/sendgrid.svg"
	},
	{
		label: "Twilio",
		icon: "/icons/twilio.svg"
	},
	{
		label: "Firebase",
		icon: "/icons/firebase.svg"
	}
];
function ChannelPill({ label, icon: Icon$1, index }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2 py-1.5 text-[11px] font-medium text-muted-foreground transition-[border-color,background-color,color] duration-300 sm:text-[12px]", "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_28%,var(--border))] group-hover:bg-[color-mix(in_srgb,var(--brand-cta)_10%,var(--background))] group-hover:text-foreground motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background motion-reduce:group-hover:text-muted-foreground"),
		style: { transitionDelay: `${index * 60}ms` },
		children: [/* @__PURE__ */ jsx(Icon$1, {
			className: "size-3.5 shrink-0",
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", { children: t(label) })]
	});
}
function DeliveryChip({ label, delayMs }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border/80 px-2 py-1.5 text-muted-foreground transition-[border-color,background-color,color] duration-300", productBentoContainer.panelMd, "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_22%,var(--border))] group-hover:bg-background group-hover:text-foreground motion-reduce:group-hover:border-border/80 motion-reduce:group-hover:bg-card/70 motion-reduce:group-hover:text-muted-foreground"),
		style: { transitionDelay: `${delayMs}ms` },
		children: [/* @__PURE__ */ jsx(CheckCircle2, {
			className: cn("hidden size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400", "group-hover:inline-block motion-reduce:inline-block"),
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[10px] font-medium sm:text-[11px]",
			children: t(label)
		})]
	});
}
function MessagingProductVisual() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex h-full min-h-0 w-full max-w-[21rem] flex-col", productBentoContainer.shell),
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn(productBentoContainer.header, "px-3.5 py-2.5"),
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("text-[12px] font-medium sm:text-[13px]", productBentoIdle.text),
					children: t("Campaign message")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[11px] text-muted-foreground sm:text-[12px]",
					children: t("Email, SMS, and push from one message")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 flex-1 flex-col overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "p-3",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-1.5",
							children: CHANNELS.map((channel, index) => /* @__PURE__ */ jsx(ChannelPill, {
								label: channel.label,
								icon: channel.icon,
								index
							}, channel.id))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: cn("mt-2.5 px-3 py-2.5 transition-[border-color,background-color] duration-300", productBentoContainer.panelMd, "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_24%,var(--border))] group-hover:bg-background"),
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[12px] font-medium sm:text-[13px]", productBentoIdle.text),
								children: t("Welcome to Acme")
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative mt-1 min-h-[2.25rem] text-[11px] leading-snug text-muted-foreground sm:text-[12px] sm:leading-relaxed",
								children: [/* @__PURE__ */ jsx("span", {
									className: "transition-opacity duration-200 group-hover:opacity-0 motion-reduce:group-hover:opacity-100",
									children: t("Draft your message once...")
								}), /* @__PURE__ */ jsx("span", {
									className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:static motion-reduce:opacity-100",
									children: t("Thanks for signing up. Here's how to get started with your new account.")
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-2.5 flex items-center gap-2 rounded-md border border-border/70 bg-muted/8 px-2.5 py-2",
							children: [
								/* @__PURE__ */ jsx(Users, {
									className: "size-3.5 shrink-0 text-muted-foreground",
									"aria-hidden": true
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: cn("truncate font-mono text-[11px] sm:text-[12px]", productBentoIdle.text),
										children: "product-updates"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-muted-foreground sm:text-[11px]",
										children: t("Topic")
									})]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "shrink-0 text-[10px] tabular-nums text-muted-foreground sm:text-[11px]",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: cn("font-medium", productBentoIdle.text),
											children: "1,248"
										}),
										" ",
										t("targets")
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-auto shrink-0 border-t border-border bg-muted/5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-3 py-2.5",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex gap-1.5",
							children: CHANNELS.map((channel, index) => /* @__PURE__ */ jsx(DeliveryChip, {
								label: channel.label,
								delayMs: 220 + index * 120
							}, channel.id))
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 hidden text-center text-[10px] text-muted-foreground group-hover:block motion-reduce:block sm:text-[11px]",
							children: t("Delivered across every selected channel")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2 border-t border-border/80 px-3 py-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-2",
							"aria-hidden": true,
							children: PROVIDERS.map((provider) => /* @__PURE__ */ jsx("img", {
								src: provider.icon,
								alt: "",
								className: cn("size-4", productBentoIdle.providerIcon)
							}, provider.label))
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[10px] text-muted-foreground sm:text-[11px]",
							children: t("Your providers")
						})]
					})]
				})]
			})]
		})
	});
}
function ProductBentoPlaceholder() {
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-x-8 bottom-6 h-px bg-border/60",
		"aria-hidden": true
	});
}
var PEERS = [
	{
		name: "Happy Quinn",
		color: "var(--brand-cta)"
	},
	{
		name: "Paige Dineen",
		color: "#7C67FE"
	},
	{
		name: "You",
		color: "#85DBD8"
	}
];
function PeerCursor({ name, color, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("pointer-events-none absolute z-10 flex origin-top-start items-center gap-1 opacity-0 transition-all duration-700 ease-out", className),
		children: [/* @__PURE__ */ jsx("svg", {
			width: "17",
			height: "20",
			viewBox: "0 0 24 28",
			className: "shrink-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.22)]",
			"aria-hidden": true,
			children: /* @__PURE__ */ jsx("path", {
				d: "M4 2.5v19.8c0 .55.66.82 1.04.43l5.9-5.7a.6.6 0 0 1 .42-.17h8.2c.55 0 .82-.66.43-1.04L5.47 2.07A.6.6 0 0 0 4 2.5Z",
				fill: color,
				stroke: "white",
				strokeWidth: "1.75",
				strokeLinejoin: "round"
			})
		}), /* @__PURE__ */ jsx("span", {
			className: "rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none text-white shadow-[0_1px_4px_rgba(0,0,0,0.18)] sm:text-[11px]",
			style: { backgroundColor: color },
			children: name.split(" ")[0]
		})]
	});
}
function PresenceBar() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex -space-x-1.5",
			children: PEERS.map((peer) => /* @__PURE__ */ jsx(InitialsAvatar, {
				name: peer.name,
				size: "xs",
				className: "ring-2 ring-background"
			}, peer.name))
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "relative flex size-2",
				children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-muted-foreground/30 opacity-0 motion-reduce:animate-none group-hover:bg-emerald-500 group-hover:opacity-40" }), /* @__PURE__ */ jsx("span", { className: cn("relative inline-flex size-2 rounded-full bg-muted-foreground transition-colors duration-300 group-hover:bg-emerald-500") })]
			}), /* @__PURE__ */ jsxs("p", {
				className: cn("text-[11px] font-medium sm:text-[12px]", productBentoIdle.text),
				children: ["3 ", t("online")]
			})]
		})]
	});
}
function RealtimeProductVisual() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex h-full min-h-0 w-full max-w-[21rem] flex-col", productBentoContainer.shell),
			children: [/* @__PURE__ */ jsx("div", {
				className: cn(productBentoContainer.header, "px-3.5 py-2.5"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: cn("text-[12px] font-medium sm:text-[13px]", productBentoIdle.text),
						children: t("Shared doc")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[11px] text-muted-foreground sm:text-[12px]",
						children: t("Collaborate on the same page in real time")
					})] }), /* @__PURE__ */ jsx("span", {
						className: "relative mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-background",
						children: /* @__PURE__ */ jsx(Radio, {
							className: cn("size-3.5 motion-reduce:animate-none group-hover:animate-pulse", productBentoIdle.brandIcon),
							"aria-hidden": true
						})
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden p-3",
				children: [
					/* @__PURE__ */ jsx(PresenceBar, {}),
					/* @__PURE__ */ jsxs("div", {
						className: cn("relative mt-2.5 overflow-hidden p-3", productBentoContainer.panel),
						children: [
							/* @__PURE__ */ jsx(PeerCursor, {
								name: "Happy Quinn",
								color: PEERS[0].color,
								className: "start-[4%] top-[14%] translate-x-0 translate-y-0 group-hover:translate-x-14 group-hover:translate-y-2 group-hover:opacity-100 motion-reduce:translate-x-14 motion-reduce:translate-y-2 motion-reduce:opacity-100"
							}),
							/* @__PURE__ */ jsx(PeerCursor, {
								name: "Paige Dineen",
								color: PEERS[1].color,
								className: "start-[4%] top-[50%] translate-x-0 translate-y-0 delay-150 group-hover:translate-x-12 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-x-12 motion-reduce:opacity-100"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]",
								children: t("Launch plan")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "relative mt-2 rounded-md px-2 py-1.5",
								children: /* @__PURE__ */ jsxs("p", {
									className: cn("relative min-h-[1.25rem] text-[12px] font-semibold leading-snug sm:text-[13px]", productBentoIdle.text),
									children: [/* @__PURE__ */ jsx("span", {
										className: "transition-opacity duration-500 ease-out delay-500 group-hover:opacity-0 motion-reduce:delay-0 motion-reduce:group-hover:opacity-100",
										children: t("Launch landing page")
									}), /* @__PURE__ */ jsx("span", {
										className: "absolute inset-0 opacity-0 transition-opacity duration-500 ease-out delay-700 group-hover:opacity-100 motion-reduce:static motion-reduce:delay-0 motion-reduce:opacity-100",
										children: t("Launch homepage v2")
									})]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 space-y-1.5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 rounded-md border border-border/60 bg-muted/8 px-2 py-1.5",
									children: [/* @__PURE__ */ jsx("span", {
										className: cn("flex size-3.5 shrink-0 items-center justify-center rounded border border-border bg-background transition-[border-color,background-color] duration-500 ease-out delay-500", "group-hover:border-emerald-500/50 group-hover:bg-emerald-500/15 motion-reduce:delay-0 motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background"),
										children: /* @__PURE__ */ jsx(Check, {
											className: cn("size-2.5 opacity-0 transition-opacity duration-500 ease-out delay-500 group-hover:opacity-100 motion-reduce:delay-0 motion-reduce:opacity-100", productBentoIdle.emeraldIcon),
											"aria-hidden": true
										})
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[11px] text-muted-foreground transition-[color,text-decoration-color] duration-500 ease-out delay-500 group-hover:text-muted-foreground group-hover:line-through motion-reduce:delay-0 sm:text-[12px]",
										children: t("Draft hero copy")
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 px-2 py-1",
									children: [/* @__PURE__ */ jsx("span", { className: "size-3.5 shrink-0 rounded border border-border/80 bg-background" }), /* @__PURE__ */ jsx("span", {
										className: "text-[11px] text-muted-foreground sm:text-[12px]",
										children: t("Ship pricing section")
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2.5 text-center text-[10px] text-muted-foreground sm:text-[11px]",
						children: t("Edits sync instantly for everyone in the doc")
					})
				]
			})]
		})
	});
}
var COMMIT_HASH = "01ab234c";
var BUILD_ANIMATION_DELAY_MS = 250;
var BUILD_ANIMATION_DURATION_MS = 1100;
var BUILD_TOTAL_SECONDS = 14;
function getBuildProgress(elapsedMs) {
	if (elapsedMs < BUILD_ANIMATION_DELAY_MS) return {
		progress: 0,
		seconds: 0,
		complete: false
	};
	const progress = Math.min(1, (elapsedMs - BUILD_ANIMATION_DELAY_MS) / BUILD_ANIMATION_DURATION_MS);
	return {
		progress,
		seconds: progress >= 1 ? BUILD_TOTAL_SECONDS : Math.floor(progress * BUILD_TOTAL_SECONDS),
		complete: progress >= 1
	};
}
function PipelineRow({ children, className, revealDelayMs }) {
	if (revealDelayMs === void 0) return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-500 group-hover:max-h-28 group-hover:opacity-100 motion-reduce:group-hover:max-h-28 motion-reduce:group-hover:opacity-100", className),
		style: { transitionDelay: `${revealDelayMs}ms` },
		children
	});
}
function SitesProductVisual() {
	const t = useT();
	const [isHovered, setIsHovered] = useState(false);
	const [buildSeconds, setBuildSeconds] = useState(null);
	const [buildComplete, setBuildComplete] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setPrefersReducedMotion(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);
	useEffect(() => {
		if (!isHovered) {
			setBuildSeconds(null);
			setBuildComplete(false);
			return;
		}
		if (prefersReducedMotion) {
			setBuildSeconds(BUILD_TOTAL_SECONDS);
			setBuildComplete(true);
			return;
		}
		setBuildSeconds(0);
		setBuildComplete(false);
		const startedAt = Date.now();
		const tick = () => {
			const { seconds, complete } = getBuildProgress(Date.now() - startedAt);
			setBuildSeconds(seconds);
			setBuildComplete(complete);
		};
		tick();
		const tickId = window.setInterval(tick, 200);
		return () => {
			window.clearInterval(tickId);
		};
	}, [isHovered, prefersReducedMotion]);
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col overflow-hidden",
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-full min-h-0 w-full max-w-[21rem] flex-col justify-end space-y-3.5 transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center gap-2.5 px-3.5 py-3 transition-[border-color,background-color] duration-300", productBentoContainer.panel, "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_28%,var(--border))] group-hover:bg-background"),
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted/40",
							children: /* @__PURE__ */ jsx("img", {
								src: "/icons/github.svg",
								alt: "",
								className: "size-4",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[12px] font-medium", productBentoIdle.text),
								children: t("Push to main")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 font-mono text-[11px] text-muted-foreground",
								children: COMMIT_HASH
							})]
						}),
						/* @__PURE__ */ jsx(ArrowRight, {
							className: "size-4 shrink-0 text-muted-foreground/50 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--brand-cta)] motion-reduce:group-hover:translate-x-0",
							"aria-hidden": true
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(productBentoContainer.panel, "px-3.5 py-3"),
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: cn("text-[12px] font-medium", productBentoIdle.text),
							children: t("Build")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: cn("min-w-[2rem] text-end font-mono text-[11px] tabular-nums text-muted-foreground transition-opacity duration-200", buildSeconds === null && "opacity-50"),
								children: buildSeconds === null ? "-" : `${buildSeconds}s`
							}), /* @__PURE__ */ jsx(CheckCircle2, {
								className: cn("size-4 shrink-0 text-emerald-600 transition-opacity duration-300 dark:text-emerald-400", buildComplete ? "opacity-100" : "opacity-0"),
								"aria-hidden": true
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ jsx("div", { className: cn("product-bento-site-build h-full w-[6%] rounded-full motion-reduce:w-full", productBentoIdle.buildBar) })
					})]
				}),
				/* @__PURE__ */ jsx(PipelineRow, {
					revealDelayMs: 1400,
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("flex items-start gap-2.5 px-3.5 py-3", productBentoContainer.panel),
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex size-7 shrink-0 items-center justify-center rounded-full bg-muted/40",
							children: /* @__PURE__ */ jsx("img", {
								src: "/icons/appwrite.svg",
								alt: "",
								className: "size-3.5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1 space-y-1",
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[12px] font-medium", productBentoIdle.text),
								children: t("Your site has been deployed.")
							}), /* @__PURE__ */ jsx("p", {
								className: cn("text-[11px]", productBentoIdle.link),
								children: t("Open preview")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(PipelineRow, {
					revealDelayMs: 1650,
					className: "group-hover:max-h-36 sm:group-hover:max-h-40",
					children: /* @__PURE__ */ jsx("div", {
						className: cn("overflow-hidden p-2.5", productBentoContainer.panel),
						children: /* @__PURE__ */ jsxs("div", {
							className: "overflow-hidden rounded-md border border-border/80 bg-card",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5 border-b border-border/80 bg-muted/15 px-2.5 py-1.5",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "size-1.5 rounded-full bg-muted-foreground/25",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("span", {
										className: "size-1.5 rounded-full bg-muted-foreground/25",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("span", {
										className: "size-1.5 rounded-full bg-muted-foreground/25",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("span", {
										className: "ms-0.5 truncate font-mono text-[9px] text-muted-foreground",
										children: "preview.appwrite.network"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2 bg-muted/8 p-3",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: cn("size-2 rounded-full", productBentoIdle.brandDot),
											"aria-hidden": true
										}), /* @__PURE__ */ jsx("span", {
											className: cn("text-[11px] font-semibold", productBentoIdle.text),
											children: "Appwrite"
										})]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: cn("text-[11px] font-medium leading-tight", productBentoIdle.text),
										children: [t("Ship faster with Appwrite"), " "]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "h-2 w-full max-w-[11rem] rounded-sm bg-muted-foreground/10",
										"aria-hidden": true
									}),
									/* @__PURE__ */ jsx("div", {
										className: cn("h-4 w-14 rounded-sm", productBentoIdle.ctaBlock),
										"aria-hidden": true
									})
								]
							})]
						})
					})
				})
			]
		})
	});
}
var RING_SIZE = 32;
var RING_STROKE = 2;
var RING_R = (RING_SIZE - RING_STROKE) / 2;
var RING_C = 2 * Math.PI * RING_R;
var SAVED_PCT = 62;
function PreviewReductionRing({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative shrink-0",
		style: {
			width: RING_SIZE,
			height: RING_SIZE
		},
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsxs("svg", {
			width: RING_SIZE,
			height: RING_SIZE,
			viewBox: `0 0 ${RING_SIZE} ${RING_SIZE}`,
			className: "-rotate-90",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: RING_SIZE / 2,
				cy: RING_SIZE / 2,
				r: RING_R,
				fill: "none",
				className: "stroke-border",
				strokeWidth: RING_STROKE
			}), /* @__PURE__ */ jsx("circle", {
				cx: RING_SIZE / 2,
				cy: RING_SIZE / 2,
				r: RING_R,
				fill: "none",
				className: cn("product-bento-storage-ring-arc motion-reduce:transition-none", productBentoIdle.ring),
				strokeWidth: RING_STROKE,
				strokeLinecap: "round",
				strokeDasharray: RING_C,
				strokeDashoffset: RING_C,
				style: {
					"--ring-offset-idle": RING_C,
					"--ring-offset-hover": RING_C * (1 - SAVED_PCT / 100)
				}
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 grid place-items-center",
			children
		})]
	});
}
function MockSliderRow({ label, idleFill, hoverFill, idleValue, hoverValue, sliderKey, animationKey, delayMs = 0 }) {
	const t = useT();
	const trackKey = sliderKey && animationKey !== void 0 ? `${sliderKey}-${animationKey}` : sliderKey;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-[10px] text-muted-foreground",
				children: t(label)
			}), idleValue && hoverValue ? /* @__PURE__ */ jsxs("span", {
				className: cn("relative min-w-[2.25rem] text-end text-[10px] tabular-nums", productBentoIdle.text),
				children: [/* @__PURE__ */ jsx("span", {
					className: "transition-opacity duration-200 group-hover:opacity-0 motion-reduce:group-hover:opacity-100",
					children: idleValue
				}), /* @__PURE__ */ jsx("span", {
					className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100",
					style: { transitionDelay: `${delayMs}ms` },
					children: hoverValue
				})]
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-1 overflow-hidden rounded-full bg-muted",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("product-bento-storage-slider h-full rounded-full motion-reduce:!w-[var(--slider-hover)]", productBentoIdle.slider),
				style: {
					"--slider-idle": `${idleFill}%`,
					"--slider-hover": `${hoverFill}%`,
					"--slider-delay": `${delayMs}ms`,
					width: `${idleFill}%`
				}
			}, trackKey)
		})]
	});
}
function MockImagePreview() {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("product-bento-storage-preview relative aspect-[4/3] w-[68%] max-w-[7.5rem] overflow-hidden rounded-md border border-border bg-muted/40"),
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-muted-foreground/10 via-muted-foreground/5 to-transparent" }), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-2 rounded-sm border border-dashed border-primary/0 opacity-0 transition-[opacity,border-color] duration-500 group-hover:border-primary/45 group-hover:opacity-100 motion-reduce:group-hover:opacity-100",
			style: { transitionDelay: "160ms" }
		})]
	});
}
function StorageProductVisual() {
	const t = useT();
	const [widthSliderKey, setWidthSliderKey] = useState(0);
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col overflow-hidden",
		onMouseEnter: () => setWidthSliderKey((key) => key + 1),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex h-full min-h-0 flex-col", productBentoContainer.shell),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn(productBentoContainer.header, "flex shrink-0 items-center justify-between gap-2 px-3 py-2"),
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("rounded-sm bg-background px-2 py-0.5 text-[10px] font-medium shadow-sm", productBentoIdle.text),
						children: t("Design")
					}), /* @__PURE__ */ jsx(Badge, {
						variant: "success",
						className: "h-5 px-1.5 text-[9px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100",
						style: { transitionDelay: "360ms" },
						children: "AVIF"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden sm:flex-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative min-h-[5rem] min-w-0 flex-1 overflow-hidden bg-background sm:min-h-[7rem]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:22px_22px]",
							"aria-hidden": true
						}), /* @__PURE__ */ jsx("div", {
							className: "relative z-[1] flex h-full items-center justify-center p-2 sm:p-3",
							children: /* @__PURE__ */ jsx(MockImagePreview, {})
						})]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "w-full shrink-0 border-t border-border bg-card/70 p-2 sm:w-[42%] sm:border-s sm:border-t-0 sm:p-2.5",
						children: [/* @__PURE__ */ jsx("p", {
							className: cn("text-[11px] font-medium", productBentoIdle.text),
							children: t("Transform")
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-1.5 space-y-1.5 sm:mt-2.5 sm:space-y-2",
							children: [/* @__PURE__ */ jsx(MockSliderRow, {
								label: "Width (px)",
								idleValue: "1200",
								hoverValue: "480",
								sliderKey: "width-px",
								animationKey: widthSliderKey,
								idleFill: 100,
								hoverFill: 40,
								delayMs: 120
							}), /* @__PURE__ */ jsx(MockSliderRow, {
								label: "Quality",
								idleFill: 82,
								hoverFill: 64,
								delayMs: 240
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-2 border-t border-border bg-muted/8 px-2.5 py-2 sm:px-3",
					children: [/* @__PURE__ */ jsx(PreviewReductionRing, { children: /* @__PURE__ */ jsxs("span", {
						className: cn("inline-flex items-baseline tabular-nums text-[8px] font-medium", productBentoIdle.text),
						children: [/* @__PURE__ */ jsx("span", {
							className: "product-bento-storage-ring-value opacity-40 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100",
							children: SAVED_PCT
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[7px] font-normal text-muted-foreground",
							children: "%"
						})]
					}) }), /* @__PURE__ */ jsxs("p", {
						className: cn("min-w-0 flex-1 text-[10px] leading-tight", productBentoIdle.text),
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-medium tabular-nums",
								children: "2.4 MB"
							}),
							/* @__PURE__ */ jsx(ArrowRight, { className: "mx-0.5 inline size-2.5 shrink-0 align-text-bottom text-muted-foreground sm:mx-1" }),
							/* @__PURE__ */ jsx("span", {
								className: "font-medium tabular-nums opacity-70 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100",
								children: "920 KB"
							})
						]
					})]
				})
			]
		})
	});
}
var PRODUCT_VISUALS = {
	auth: AuthProductVisual,
	databases: DatabasesProductVisual,
	firewall: FirewallProductVisual,
	functions: FunctionsProductVisual,
	messaging: MessagingProductVisual,
	realtime: RealtimeProductVisual,
	sites: SitesProductVisual,
	storage: StorageProductVisual
};
function ProductBentoVisual({ productId }) {
	const Visual = PRODUCT_VISUALS[productId];
	if (Visual) return /* @__PURE__ */ jsx(Visual, {});
	return /* @__PURE__ */ jsx(ProductBentoPlaceholder, {});
}
function ProductBentoVisualDeferred({ productId }) {
	const ref = useRef(null);
	const { hasBeenVisible } = useIntersectionVisible(ref, {
		rootMargin: "240px 0px",
		once: true
	});
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "relative h-full min-h-0 w-full",
		children: hasBeenVisible ? /* @__PURE__ */ jsx(ProductBentoVisual, { productId }) : null
	});
}
var linkClassName = "link-unstyled absolute inset-0 z-[1] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
function ProductBentoCardLink({ href, title }) {
	const label = `${useT()("Learn more about")} ${title}`;
	return /* @__PURE__ */ jsx(MarketingSiteLink, {
		href,
		className: linkClassName,
		"aria-label": label,
		children: /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: label
		})
	});
}
var HOME_COPY = getEnglishCatalog().website.home;
var frameworkTools = [
	{
		name: HOME_COPY.frameworkTools.react,
		icon: "/icons/react.svg",
		href: "/docs/quick-starts/react"
	},
	{
		name: HOME_COPY.frameworkTools.tanstackStart,
		icon: "/icons/tanstack.svg",
		href: "/docs/quick-starts/tanstack-start"
	},
	{
		name: HOME_COPY.frameworkTools.nextjs,
		icon: "/icons/nextjs.svg",
		href: "/docs/quick-starts/nextjs"
	},
	{
		name: HOME_COPY.frameworkTools.vue,
		icon: "/icons/vue.svg",
		href: "/docs/quick-starts/vue"
	},
	{
		name: HOME_COPY.frameworkTools.sveltekit,
		icon: "/icons/svelte.svg",
		href: "/docs/quick-starts/sveltekit"
	},
	{
		name: HOME_COPY.frameworkTools.android,
		icon: "/icons/android.svg",
		href: "/docs/quick-starts/android"
	},
	{
		name: HOME_COPY.frameworkTools.ios,
		icon: "/icons/apple.svg",
		href: "/docs/quick-starts/apple"
	},
	{
		name: HOME_COPY.frameworkTools.flutter,
		icon: "/icons/flutter.svg",
		href: "/docs/quick-starts/flutter"
	},
	{
		name: HOME_COPY.frameworkTools.claude,
		icon: "/icons/claude.svg",
		href: "/docs/tooling/mcp/claude-code"
	},
	{
		name: HOME_COPY.frameworkTools.chatgpt,
		icon: "/icons/chatgpt.svg",
		href: "/docs/tooling/ai/agents/codex"
	},
	{
		name: HOME_COPY.frameworkTools.cursor,
		icon: "/icons/cursor-ai.svg",
		href: "/docs/tooling/mcp/cursor"
	},
	{
		name: HOME_COPY.frameworkTools.lovable,
		icon: "/icons/lovable.svg",
		href: "/docs/tooling/ai/vibe-coding/lovable"
	},
	{
		name: HOME_COPY.frameworkTools.opencode,
		icon: "/icons/opencode.svg",
		href: "/docs/tooling/mcp/opencode"
	},
	{
		name: HOME_COPY.frameworkTools.bun,
		icon: "/icons/bun.svg",
		href: "/docs/products/functions/runtimes"
	}
];
var aiDocLinks = [
	{
		label: HOME_COPY.aiDocLinks.mcpServers,
		href: "/docs/tooling/ai/mcp-servers"
	},
	{
		label: HOME_COPY.aiDocLinks.skills,
		href: "/docs/tooling/ai/skills"
	},
	{
		label: HOME_COPY.aiDocLinks.aiArena,
		href: "https://arena.appwrite.io/",
		external: true
	}
];
var productBentoLayout = [
	{
		id: "auth",
		icon: Users,
		className: "lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:row-span-2"
	},
	{
		id: "databases",
		icon: Database,
		className: "lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:row-span-3",
		tall: true,
		mobileVisualTall: true
	},
	{
		id: "storage",
		icon: Folder,
		className: "lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:row-span-2"
	},
	{
		id: "functions",
		icon: Zap,
		className: "lg:col-span-4 lg:col-start-1 lg:row-start-5 lg:row-span-2"
	},
	{
		id: "sites",
		icon: Globe,
		className: "lg:col-span-8 lg:col-start-5 lg:row-start-4 lg:row-span-3",
		tall: true
	},
	{
		id: "messaging",
		icon: MessageSquare,
		className: "lg:col-span-4 lg:col-start-1 lg:row-start-7 lg:row-span-2",
		compact: true
	},
	{
		id: "firewall",
		icon: Shield,
		className: "lg:col-span-4 lg:col-start-5 lg:row-start-7 lg:row-span-2",
		compact: true,
		badgeLabelKey: "firewallNewLabel"
	},
	{
		id: "realtime",
		icon: Radio,
		className: "lg:col-span-4 lg:col-start-9 lg:row-start-7 lg:row-span-2",
		compact: true
	}
];
function getProductBentoItems(homeCopy) {
	const productBento = homeCopy.productBento;
	return productBentoLayout.map((item) => ({
		...item,
		title: productBento[`${item.id}Title`],
		description: productBento[`${item.id}Description`],
		label: item.badgeLabelKey ? productBento[item.badgeLabelKey] : void 0,
		href: PRODUCT_NAV_REGISTRY[item.id].href
	}));
}
function getSecurityItems(homeCopy) {
	const items = homeCopy.securityItems;
	return [
		{
			id: "ddos",
			title: items.ddosTitle,
			description: items.ddosDescription,
			icon: ShieldCheck
		},
		{
			id: "encryption",
			title: items.encryptionTitle,
			description: items.encryptionDescription,
			icon: LockKeyhole
		},
		{
			id: "abuse",
			title: items.abuseTitle,
			description: items.abuseDescription,
			icon: BadgeCheck
		},
		{
			id: "migrations",
			title: items.migrationsTitle,
			description: items.migrationsDescription,
			icon: DatabaseBackup
		},
		{
			id: "gdpr",
			title: items.gdprTitle,
			description: items.gdprDescription,
			icon: Globe2
		},
		{
			id: "soc2",
			title: items.soc2Title,
			description: items.soc2Description,
			icon: Pentagon
		},
		{
			id: "hipaa",
			title: items.hipaaTitle,
			description: items.hipaaDescription,
			icon: HeartPulse
		},
		{
			id: "ccpa",
			title: items.ccpaTitle,
			description: items.ccpaDescription,
			icon: Scale
		}
	];
}
var HOME_HERO_IMAGE_CACHE_BUST = "20260729";
var HOME_HERO_LIGHT_SRC = `/images/heroes/console-app-light.avif?v=${HOME_HERO_IMAGE_CACHE_BUST}`;
var HOME_HERO_DARK_SRC = `/images/heroes/console-app-dark.avif?v=${HOME_HERO_IMAGE_CACHE_BUST}`;
function HomePage() {
	const { catalog } = useI18n();
	const homeCopy = catalog.website.home;
	const productBentoItems = useMemo(() => getProductBentoItems(homeCopy), [homeCopy]);
	const securityItems = useMemo(() => getSecurityItems(homeCopy), [homeCopy]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(HomeHashScroll, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative isolate overflow-hidden border-b border-border bg-background",
			children: [
				/* @__PURE__ */ jsx(HomeSoftLights, {}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-[1] mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-0 pt-14 text-center sm:px-6 sm:pt-20",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-7 rounded-full px-3 text-[12px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(MarketingSiteLink, {
								href: "/init",
								children: [
									/* @__PURE__ */ jsx(Megaphone, { className: "size-3.5" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-[var(--brand-cta)]",
										children: homeCopy.announcementNew
									}),
									homeCopy.announcementText,
									/* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })
								]
							})
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-aeonik-pro text-gradient-brand mt-6 max-w-6xl pb-3 text-balance text-[48px] font-normal leading-[1.04] tracking-[-0.022em] lg:text-[76px]",
							children: [
								homeCopy.heroTitleLineOne,
								/* @__PURE__ */ jsx("br", {}),
								homeCopy.heroTitleLineTwo,
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--brand-cta)]",
									children: "_"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-2xl text-balance text-[15px] leading-6 text-muted-foreground sm:text-[16px] sm:leading-7",
							children: homeCopy.heroDescription
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex flex-wrap items-center justify-center gap-2",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "brandCta",
								size: "lg",
								className: "h-10 text-[14px]",
								asChild: true,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/sign-up",
									search: { redirect: "/" },
									...analyticsAttrs("home-start-project"),
									children: homeCopy.startProject
								})
							}), /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								size: "lg",
								className: "h-10 text-[14px]",
								asChild: true,
								children: /* @__PURE__ */ jsx(MarketingSiteLink, {
									href: "/enterprise",
									...analyticsAttrs("home-request-demo"),
									children: homeCopy.requestDemo
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative z-[1] mt-8 w-full sm:mt-10",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto w-full max-w-full px-3 sm:max-w-[min(100vw-3rem,84rem)] sm:px-6 lg:max-w-[min(100vw-4rem,88rem)]",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative isolate z-[1] flex w-full flex-col overflow-hidden rounded-t-[20px] border-x-2 border-t-2 border-b-0 border-muted-foreground/8 bg-muted-foreground/[0.035] px-1.5 pb-0 pt-1 sm:rounded-t-[28px] sm:px-4 dark:border-muted/30 dark:bg-muted/10",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative z-10 flex h-8 shrink-0 items-center gap-2 text-start sm:h-10",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "ms-1.5 flex items-center gap-1.5 sm:ms-2",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-muted-foreground/30 sm:size-2.5" }),
										/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-muted-foreground/30 sm:size-2.5" }),
										/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-muted-foreground/30 sm:size-2.5" })
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "ms-1.5 flex min-w-0 items-center gap-1.5 pe-2 text-[11px] text-muted-foreground sm:ms-2 sm:pe-4 sm:text-[12px]",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "font-medium text-foreground",
											children: homeCopy.heroPreviewWorkspace
										}),
										/* @__PURE__ */ jsx(ChevronRight, { className: "size-3" }),
										/* @__PURE__ */ jsx("span", {
											className: "truncate",
											children: homeCopy.heroPreviewOrganization
										}),
										/* @__PURE__ */ jsx(ChevronRight, { className: "size-3" }),
										/* @__PURE__ */ jsx("span", {
											className: "truncate",
											children: homeCopy.heroPreviewProject
										})
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 aspect-[148/65] w-full overflow-hidden",
								children: [/* @__PURE__ */ jsx("img", {
									src: HOME_HERO_LIGHT_SRC,
									alt: homeCopy.heroImageAlt,
									width: 1920,
									height: 1234,
									fetchPriority: "high",
									decoding: "async",
									className: "block h-full w-full rounded-t-md object-cover object-top opacity-95 dark:hidden sm:rounded-t-lg"
								}), /* @__PURE__ */ jsx("img", {
									src: HOME_HERO_DARK_SRC,
									alt: homeCopy.heroImageAlt,
									width: 1920,
									height: 1234,
									fetchPriority: "high",
									decoding: "async",
									className: "hidden h-full w-full rounded-t-md object-cover object-top opacity-95 dark:block sm:rounded-t-lg"
								})]
							})]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(InitSection, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "border-b border-border bg-background py-14 sm:py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-6xl px-4 text-center sm:px-6",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro text-[16px] font-normal tracking-tight text-foreground sm:text-[18px]",
					children: [homeCopy.toolsHeading, /* @__PURE__ */ jsx("span", {
						className: "text-[var(--brand-cta)]",
						children: "_"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-7 sm:gap-x-10",
					children: frameworkTools.map((tool) => /* @__PURE__ */ jsx(MarketingSiteLink, {
						href: tool.href,
						"aria-label": tool.name,
						className: "group flex size-9 items-center justify-center transition-transform duration-200 hover:scale-110",
						children: /* @__PURE__ */ jsx("img", {
							src: tool.icon,
							alt: "",
							className: "size-8 object-contain opacity-45 transition-opacity duration-200 group-hover:opacity-100 dark:opacity-40 dark:group-hover:opacity-100"
						})
					}, tool.name))
				})]
			}), /* @__PURE__ */ jsx("nav", {
				className: "mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] font-medium text-muted-foreground",
				"aria-label": homeCopy.aiDocsNavLabel,
				children: aiDocLinks.map((link, index) => /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2",
					children: [index > 0 ? /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground/40",
						"aria-hidden": true,
						children: "·"
					}) : null, "external" in link && link.external ? /* @__PURE__ */ jsx("a", {
						href: link.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "link-neutral text-[12px]",
						children: link.label
					}) : /* @__PURE__ */ jsx(MarketingSiteLink, {
						href: link.href,
						className: "link-neutral text-[12px]",
						children: link.label
					})]
				}, link.href))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-16 sm:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "font-aeonik-pro text-[40px] font-normal leading-none tracking-tight text-foreground sm:text-[48px]",
							children: [
								homeCopy.productsHeadingLineOne,
								/* @__PURE__ */ jsx("br", {}),
								homeCopy.productsHeadingLineTwo,
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--brand-cta)]",
									children: "_"
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-muted-foreground",
							children: homeCopy.productsDescription
						})]
					}),
					/* @__PURE__ */ jsx(MarketingProductPills, {
						build: marketingProductToolkit.build,
						deploy: marketingProductToolkit.deploy,
						protect: marketingProductToolkit.protect,
						scale: { href: "#scale" }
					}),
					/* @__PURE__ */ jsx("div", {
						className: "product-bento-grid mt-10 grid gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[repeat(8,minmax(0,1fr))] lg:min-h-[960px]",
						children: productBentoItems.map((item) => {
							const Icon$1 = item.icon;
							const href = item.href;
							return /* @__PURE__ */ jsxs("article", {
								className: `${item.className} group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card/50 hover:bg-accent/10 ${item.mobileVisualTall ? "min-h-[540px]" : "min-h-[380px]"} ${item.tall ? "lg:min-h-0" : ""}`,
								children: [
									href ? /* @__PURE__ */ jsx(ProductBentoCardLink, {
										href,
										title: item.title
									}) : null,
									/* @__PURE__ */ jsx(ProductBentoHoverLight, { tall: item.tall }),
									/* @__PURE__ */ jsxs("div", {
										className: `pointer-events-none relative z-[2] flex min-h-0 flex-1 flex-col lg:h-full ${item.tall ? "lg:min-h-full" : ""}`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: `relative z-10 shrink-0 px-4 pt-4 ${item.compact ? "pb-2" : "pb-2.5"}`,
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx("span", {
														className: "flex size-7 items-center justify-center rounded-md border border-border bg-muted/40",
														children: /* @__PURE__ */ jsx(Icon$1, {
															className: "size-3.5 text-[var(--brand-cta)]",
															"aria-hidden": true
														})
													}),
													/* @__PURE__ */ jsx("h3", {
														className: "font-aeonik-pro text-[16px] font-normal text-foreground",
														children: item.title
													}),
													item.label ? /* @__PURE__ */ jsx("span", {
														className: "rounded-full bg-[var(--brand-cta)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-cta)]",
														children: item.label
													}) : null
												]
											}), /* @__PURE__ */ jsx("p", {
												className: `mt-2 min-h-10 max-w-xl text-[13px] leading-5 text-muted-foreground ${item.compact ? "line-clamp-2" : "line-clamp-3"}`,
												children: item.description
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: `relative flex min-h-0 flex-1 flex-col px-3 pb-3 sm:px-3.5 sm:pb-3.5 ${item.mobileVisualTall ? "max-lg:min-h-[460px]" : ""}`,
											children: /* @__PURE__ */ jsxs("div", {
												className: `relative isolate min-h-0 flex-1 overflow-hidden rounded-lg border border-border bg-muted/20 contain-paint ${item.mobileVisualTall ? "min-h-[280px] lg:min-h-[15rem]" : item.compact ? "min-h-[240px] lg:min-h-[11rem]" : item.tall ? "min-h-[260px] lg:min-h-[14rem]" : "min-h-[260px] lg:min-h-[12rem]"}`,
												"aria-hidden": true,
												children: [/* @__PURE__ */ jsx(ProductBentoSoftLights, {}), /* @__PURE__ */ jsx("div", {
													className: "absolute inset-0 p-2 sm:p-2.5",
													children: /* @__PURE__ */ jsx(ProductBentoVisualDeferred, { productId: item.id })
												})]
											})
										})]
									})
								]
							}, item.id);
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(AiSection, {}),
		/* @__PURE__ */ jsx(TestimonialsSection, {}),
		/* @__PURE__ */ jsx("section", {
			className: "border-t border-border bg-background py-16 sm:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-5xl text-center",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "font-aeonik-pro mx-auto max-w-5xl text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
						children: [homeCopy.securityHeading, /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-5 max-w-2xl text-balance text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7",
						children: homeCopy.securityDescription
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid overflow-hidden rounded-xl border border-border bg-card/45 sm:grid-cols-2 lg:grid-cols-4",
					children: securityItems.map((item) => {
						const Icon$1 = item.icon;
						return /* @__PURE__ */ jsx("article", {
							className: "group border-b border-border p-5 transition-colors hover:bg-accent/15 sm:border-e sm:[&:nth-child(2n)]:border-e-0 sm:[&:nth-child(n+7)]:border-b-0 lg:[&:nth-child(2n)]:border-e lg:[&:nth-child(4n)]:border-e-0 lg:[&:nth-child(n+5)]:border-b-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex size-7 items-center justify-center rounded-md border border-border bg-muted/40",
									children: /* @__PURE__ */ jsx(Icon$1, {
										className: "size-3.5 text-[var(--brand-cta)]",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[14px] font-semibold text-foreground",
									children: item.title
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-[13px] leading-5 text-muted-foreground",
									children: item.description
								})] })]
							})
						}, item.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(NetworkSection, {}),
		/* @__PURE__ */ jsx(ScaleSection, {}),
		/* @__PURE__ */ jsx(PricingSection, {})
	] });
}
export { HomePage as component };
