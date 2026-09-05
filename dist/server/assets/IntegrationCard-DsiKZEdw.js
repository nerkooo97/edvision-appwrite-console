import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as getFrameworkIconFile } from "./icons-Dw9jcxHS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { o as getIntegrationCategoryHeading } from "./content-BNDqilSS.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, Handshake, Puzzle } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
function IntegrationPartnerNote({ className }) {
	const t = useT();
	return /* @__PURE__ */ jsx("section", {
		className: cn("border-b border-border py-10 sm:py-14", className),
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card/50",
				children: [/* @__PURE__ */ jsx("div", {
					className: "border-b border-border bg-muted/20 px-6 py-4 sm:px-8",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
						children: t("Technology Partner Program")
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-7",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 items-start gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40",
							children: /* @__PURE__ */ jsx(Handshake, {
								className: "size-5 text-muted-foreground",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsxs("h2", {
								className: "font-aeonik-pro text-[20px] font-normal leading-tight text-foreground sm:text-[22px]",
								children: [t("Building on Appwrite?"), " "]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 max-w-2xl text-[13px] leading-6 text-muted-foreground sm:text-[14px] sm:leading-7",
								children: t("Teams and developers who ship integrations, tools, or services on Appwrite can join our partner program for verified catalog placement, co-marketing, training, and engineering support.")
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "brandCta",
							size: "lg",
							className: "h-10 w-full text-[14px] sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/partners",
								children: t("Explore the partner program")
							})
						})
					})]
				})]
			})
		})
	});
}
const INTEGRATION_SLUG_ICON_MAP = {
	"ai-elevenlabs-text-to-speech": "elevenlabs.svg",
	"ai-hugging-face-image-classification": "hugging-face.svg",
	"ai-hugging-face-language-translation": "hugging-face.svg",
	"ai-hugging-face-speech-recognition": "hugging-face.svg",
	"ai-openai": "chatgpt.svg",
	"ai-perplexity": "perplexity.svg",
	"deployments-github": "github.svg",
	"email-sendgrid": "sendgrid.svg",
	"flutterflow-auth-kit": "flutter.svg",
	"lemon-squeezy-payments": "lemon-squeezy.svg",
	"lemon-squeezy-subscriptions": "lemon-squeezy.svg",
	"logging-appsignal": "appsignal.svg",
	"logging-raygun": "raygun.svg",
	"logging-sentry": "sentry.svg",
	"mcp-claude": "claude.svg",
	"mcp-cursor": "cursor-ai.svg",
	"mcp-windsurf": "windsurf.svg",
	"native-auth-apple": "apple.svg",
	"oauth-amazon": "amazon.svg",
	"oauth-apple": "apple.svg",
	"oauth-discord": "discord-simple.svg",
	"oauth-google": "google.svg",
	"oauth-notion": "notion.svg",
	"oauth-x": "x.svg",
	"phone-auth-twilio": "twilio.svg",
	"push-apns": "apple.svg",
	"push-fcm": "firebase.svg",
	"query-mongodb": "mongo-db.svg",
	"query-upstash": "upstash.svg",
	"replication-rxdb": "rxdb.svg",
	"search-algolia": "algolia.svg",
	"self-hosted-mongodb": "mongo-db.svg",
	"sites-docusaurus": "docusaurus.svg",
	"sites-magic-portfolio": "appwrite.svg",
	"sites-nxtlnk": "appwrite.svg",
	"sites-react-admin": "react.svg",
	"sites-starlight": "astro.svg",
	"sites-vuepress": "vue.svg",
	"sms-twilio": "twilio.svg",
	"storage-s3": "amazon.svg",
	"stripe-payments": "stripe.svg",
	"stripe-subscriptions": "stripe.svg",
	"terraform-provider": "terraform.svg",
	"whatsapp-vonage": "vonage.svg"
};
var VENDOR_ICON_ALIASES = {
	anthropic: "anthropic.svg",
	aws: "amazon.svg",
	firebase: "firebase.svg",
	mongodb: "mongo-db.svg",
	"react admin": "react.svg",
	starlight: "astro.svg",
	vuepress: "vue.svg",
	"magic portfolio": "appwrite.svg",
	nxtlnk: "appwrite.svg",
	flutterflow: "flutter.svg",
	"lemon squeezy": "lemon-squeezy.svg",
	"hugging face": "hugging-face.svg",
	elevenlabs: "elevenlabs.svg",
	openai: "chatgpt.svg",
	cursor: "cursor-ai.svg"
};
function normalizeVendorKey(value) {
	return value.toLowerCase().replace(/\s+/g, " ").trim();
}
function getIntegrationIconFile(slug, vendor) {
	const slugIcon = INTEGRATION_SLUG_ICON_MAP[slug];
	if (slugIcon) return slugIcon;
	if (vendor) {
		const alias = VENDOR_ICON_ALIASES[normalizeVendorKey(vendor)];
		if (alias) return alias;
		const frameworkIcon = getFrameworkIconFile(vendor);
		if (frameworkIcon) return frameworkIcon;
	}
	return null;
}
function getIntegrationIconPath(slug, vendor) {
	const file = getIntegrationIconFile(slug, vendor);
	return file ? `/icons/${file}` : null;
}
var sizeClasses = {
	sm: "h-8 w-8",
	md: "h-10 w-10",
	lg: "h-12 w-12"
};
var iconSizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6"
};
function IntegrationIcon({ slug, vendor, alt, className, size = "md" }) {
	const iconPath = getIntegrationIconPath(slug, vendor);
	const label = alt ?? vendor ?? slug;
	const containerClass = sizeClasses[size];
	const iconClass = iconSizeClasses[size];
	if (iconPath) return /* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 p-1.5", containerClass, className),
		children: /* @__PURE__ */ jsx("img", {
			src: iconPath,
			alt: label,
			className: cn(iconClass, PUBLIC_ICON_MUTED_CLASSES),
			loading: "lazy"
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40", containerClass, className),
		children: /* @__PURE__ */ jsx(Puzzle, {
			className: cn(iconClass, "text-muted-foreground"),
			"aria-hidden": true
		})
	});
}
function integrationPillClassName({ active = false, variant = "default" } = {}) {
	const base = "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-medium shrink-0 transition-colors [&>svg]:size-3";
	if (variant === "success") return cn(base, "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400");
	return cn(base, active ? "bg-foreground text-background" : "bg-muted/60 text-muted-foreground hover:text-foreground");
}
function IntegrationPill({ active, variant = "default", className, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "span", {
		className: cn(integrationPillClassName({
			active,
			variant
		}), className),
		...props
	});
}
function IntegrationCard({ integration, variant = "default", className }) {
	const t = useT();
	const isFeatured = variant === "featured";
	return /* @__PURE__ */ jsxs(Link, {
		to: "/integrations/$slug",
		params: { slug: integration.slug },
		className: cn("group link-unstyled flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:bg-accent/40", isFeatured ? "sm:flex-row" : void 0, className),
		children: [isFeatured && integration.cover ? /* @__PURE__ */ jsx("div", {
			className: "relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-muted sm:aspect-auto sm:w-[42%]",
			children: /* @__PURE__ */ jsx("img", {
				src: integration.cover,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy"
			})
		}) : null, /* @__PURE__ */ jsxs("div", {
			className: cn("flex flex-1 flex-col p-5", isFeatured ? "sm:py-6 sm:pe-6" : void 0),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start gap-3",
					children: [/* @__PURE__ */ jsx(IntegrationIcon, {
						slug: integration.slug,
						vendor: integration.product.vendor,
						alt: integration.product.vendor,
						size: isFeatured ? "md" : "sm"
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-[15px] font-semibold text-foreground group-hover:text-foreground",
							children: [integration.title, integration.isPartner ? /* @__PURE__ */ jsx(BadgeCheck, {
								className: "ms-1.5 inline-block size-4 translate-y-[-1px] align-middle text-emerald-600 dark:text-emerald-400",
								"aria-label": t("Verified")
							}) : null]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: integration.product.vendor
						})]
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted-foreground",
					children: integration.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsx(IntegrationPill, { children: t(getIntegrationCategoryHeading(integration.category)) }), integration.platform.map((platform) => /* @__PURE__ */ jsx(IntegrationPill, { children: platform }, platform))]
				})
			]
		})]
	});
}
export { IntegrationPartnerNote as a, IntegrationIcon as i, IntegrationPill as n, integrationPillClassName as r, IntegrationCard as t };
