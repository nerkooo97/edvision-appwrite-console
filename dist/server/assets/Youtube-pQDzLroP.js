import { t as cn } from "./utils-DoqqkI3X.js";
import { S as resolvePreferredOsTabId, _ as matchTabToUserOs, b as orderTabsByPreferredOs } from "./i18n-Db4baE06.js";
import { n as getFrameworkIconFile, t as FRAMEWORK_ICON_MAP } from "./icons-Dw9jcxHS.js";
import { c as ThinkingBubble } from "./ThinkingBubble-U48KAaRY.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as resolveFenceCodeLanguage, t as resolveFenceCodeLabel } from "./code-language-RiwE0Xft.js";
import { l as DOCS_TABLE_CELL_TEXT_CLASS, n as DOCS_BODY_TEXT_CLASS } from "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as useUserOs } from "./use-user-os-Cwg5asTC.js";
import { r as useImagePreviewGallery, t as ImagePreviewGalleryDialog } from "./ImagePreviewGallery-CuJmaZOR.js";
import { n as BLOG_BODY_TEXT_SIZE_CLASS, t as BLOG_BODY_TEXT_CLASS, u as BLOG_TABLE_CELL_TEXT_CLASS } from "./prose-typography-DB73MMim.js";
import { l as resolveHeadingId } from "./frontmatter-9RsCswLb.js";
import { n as DOCS_PROSE_LINK_CLASS } from "./prose-link-DLbkQskb.js";
import { t as DocsHeadingLink } from "./DocsHeadingLink-ACXvhwfq.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Children, cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Code2, FileText, Globe, ImageIcon, Info, LayoutGrid, Mail, Maximize2, MessageSquare, Play, Plus, Rocket, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";
import Markdoc from "@markdoc/markdoc";
function extractMarkdocTableColumnWidthsFromAst(tableNode) {
	const widths = [];
	const row = (tableNode.children?.find((child) => child.type === "thead"))?.children?.find((child) => child.type === "tr");
	if (!row?.children) return widths;
	row.children.forEach((cell, index) => {
		if (cell.type !== "th") return;
		if (widths.length <= index) widths.length = index + 1;
		const width = cell.attributes?.width;
		if (typeof width === "number") widths[index] = width;
	});
	return Array.from({ length: widths.length }, (_, index) => widths[index]);
}
const docsMarkdocConfig = {
	tags: {
		partial: { selfClosing: true },
		section: {
			selfClosing: true,
			render: "Section"
		},
		multicode: { render: "MultiCode" },
		info: {
			render: "Info",
			attributes: { title: {
				type: String,
				required: true
			} }
		},
		tabs: { render: "Tabs" },
		tabsitem: {
			render: "TabsItem",
			attributes: {
				id: { type: String },
				title: { type: String }
			}
		},
		cards: { render: "Cards" },
		cards_item: {
			render: "CardsItem",
			attributes: {
				href: { type: String },
				title: { type: String },
				icon: { type: String },
				image: { type: String }
			}
		},
		only_light: { render: "OnlyLight" },
		only_dark: { render: "OnlyDark" },
		accordion: { render: "Accordion" },
		accordion_item: {
			render: "AccordionItem",
			attributes: { title: { type: String } }
		},
		video: {
			render: "Video",
			attributes: {
				src: { type: String },
				title: { type: String }
			}
		},
		youtube: {
			render: "Youtube",
			attributes: {
				id: { type: String },
				src: { type: String },
				thumbnail: { type: String },
				title: { type: String }
			}
		},
		arrow_link: {
			render: "ArrowLink",
			attributes: {
				href: { type: String },
				title: { type: String }
			}
		},
		call_to_action: {
			render: "CallToAction",
			attributes: {
				href: { type: String },
				title: { type: String }
			}
		},
		blockquote: { render: "Blockquote" },
		icon: {
			selfClosing: true,
			render: "MarkdocIcon",
			attributes: {
				icon: { type: String },
				size: { type: String }
			}
		},
		icon_image: {
			selfClosing: true,
			render: "MarkdocIconImage",
			attributes: {
				src: { type: String },
				alt: { type: String },
				size: { type: String }
			}
		},
		prompt_content: {
			selfClosing: true,
			render: "PromptContent"
		},
		table: { render: "MarkdocTableTag" }
	},
	nodes: {
		fence: {
			render: "Fence",
			attributes: {
				content: { type: String },
				language: { type: String }
			}
		},
		heading: {
			render: "Heading",
			attributes: {
				level: {
					type: Number,
					required: true
				},
				id: { type: String }
			}
		},
		link: {
			render: "Link",
			attributes: {
				href: { type: String },
				title: { type: String }
			}
		},
		image: {
			render: "Image",
			attributes: {
				src: { type: String },
				alt: { type: String },
				title: { type: String }
			}
		},
		table: {
			render: "MarkdocTableRoot",
			transform(node, config) {
				const columnWidths = extractMarkdocTableColumnWidthsFromAst(node);
				const attributes = Markdoc.transformer.attributes(node, config);
				const children = Markdoc.transformer.children(node, config);
				return new Markdoc.Tag("MarkdocTableRoot", {
					...attributes,
					columnWidths
				}, children);
			}
		},
		thead: { render: "MarkdocTableHeader" },
		tbody: { render: "MarkdocTableBody" },
		tr: { render: "MarkdocTableRow" },
		th: {
			render: "MarkdocTableHead",
			attributes: { width: { type: Number } }
		},
		td: {
			render: "MarkdocTableCell",
			attributes: { width: { type: Number } }
		}
	}
};
const MARKDOC_BRAND_ICON_CLASS = "h-6 w-6 min-h-6 min-w-6 max-h-6 max-w-6 shrink-0 object-contain";
const MARKDOC_INLINE_LUCIDE_ICON_CLASS = "size-4 shrink-0";
var MARKDOC_ICON_FILE_OVERRIDES = {
	node_js: "node.svg",
	"bun-sh": "bun.svg",
	js: "js.svg",
	javascript: "js.svg",
	ts: "ts.svg",
	typescript: "ts.svg",
	"icon-ts": "ts.svg",
	"icon-typescript": "ts.svg",
	cpp: "cpp.svg",
	c: "cpp.svg",
	"react-native": "react-native.svg",
	dotnet: "dotnet.svg",
	aws: "amazon.svg",
	azure: "microsoft.svg",
	openai: "chatgpt.svg",
	codex: "chatgpt.svg",
	gemini: "google.svg",
	imagine: "imagine.svg",
	"icon-node_js": "node.svg",
	"icon-js": "js.svg",
	"icon-dotnet": "dotnet.svg",
	"icon-react-native": "react-native.svg",
	"icon-vercel": "vercel.svg",
	"web-icon-firebase": "firebase.svg",
	"web-icon-github": "github.svg",
	"web-icon-terraform": "terraform.svg",
	"web-icon-mailgun": "mailgun.svg",
	"web-icon-sendgrid": "sendgrid.svg",
	"icon-twilio": "twilio.svg",
	"icon-msg91": "msg91.svg",
	"icon-vonage": "vonage.svg",
	"icon-textmagic": "textmagic.svg",
	"icon-telesign": "telesign.svg"
};
var MARKDOC_LUCIDE_ICONS = {
	plus: Plus,
	"icon-mail": Mail,
	"icon-annotation": MessageSquare,
	"icon-device-mobile": Smartphone,
	"icon-globe-alt": Globe,
	"icon-document-text": FileText,
	"icon-code-bracket": Code2,
	"icon-rocket-launch": Rocket,
	"icon-squares-2x2": LayoutGrid
};
function stripMarkdocIconPrefix(icon) {
	return icon.replace(/^(icon-|web-icon-)/, "");
}
function getMarkdocIconFile(name) {
	const normalized = name.toLowerCase().replace(/_/g, "-");
	const override = MARKDOC_ICON_FILE_OVERRIDES[name] ?? MARKDOC_ICON_FILE_OVERRIDES[normalized] ?? MARKDOC_ICON_FILE_OVERRIDES[name.replace(/-/g, "_")];
	if (override) return override;
	return getFrameworkIconFile(normalized) ?? getFrameworkIconFile(name);
}
function resolveMarkdocIconByName(icon) {
	if (!icon) return null;
	const lucideIcon = MARKDOC_LUCIDE_ICONS[icon] ?? MARKDOC_LUCIDE_ICONS[`icon-${icon}`];
	if (lucideIcon) return {
		type: "lucide",
		Icon: lucideIcon
	};
	const iconFile = getMarkdocIconFile(stripMarkdocIconPrefix(icon));
	if (iconFile) return {
		type: "image",
		src: `/icons/${iconFile}`
	};
	return null;
}
var CARD_TITLE_ICON_KEYS = {
	"next.js": "nextjs",
	"next.js ssr": "nextjs",
	react: "react",
	"react native": "react-native",
	vue: "vue",
	"vue.js": "vue",
	nuxt: "nuxt",
	"nuxt ssr": "nuxt",
	sveltekit: "svelte",
	"sveltekit ssr": "svelte",
	angular: "angular",
	"astro ssr": "astro",
	"tanstack start": "tanstack",
	flutter: "flutter",
	apple: "apple",
	"apple (swift)": "apple",
	android: "android",
	"android (kotlin)": "android",
	"android (java)": "java",
	"node.js": "node",
	python: "python",
	php: "php",
	ruby: "ruby",
	".net": "dotnet",
	go: "go",
	deno: "deno",
	dart: "dart",
	rust: "rust",
	swift: "swift",
	kotlin: "kotlin",
	web: "js",
	"vanilla js": "js",
	remix: "remix",
	qwik: "qwik",
	solid: "solid",
	refine: "refine",
	astro: "astro",
	vite: "vite",
	"claude code": "claude",
	"claude desktop": "claude",
	codex: "chatgpt",
	cursor: "cursor-ai",
	"vs code": "vscode",
	opencode: "opencode",
	antigravity: "google-antigravity",
	lovable: "lovable",
	emergent: "emergent",
	bolt: "bolt",
	zenflow: "zenflow",
	windsurf: "windsurf",
	zed: "zed",
	"amazon web services": "amazon",
	digitalocean: "digitalocean",
	coolify: "coolify",
	rxdb: "rxdb",
	"google cloud": "google",
	"microsoft azure": "microsoft",
	"migrating from vercel": "vercel",
	"graphql api": "graphql",
	github: "github",
	"terraform registry": "terraform",
	apns: "apple",
	fcm: "firebase",
	mailgun: "mailgun",
	sendgrid: "sendgrid",
	twilio: "twilio",
	msg91: "msg91",
	vonage: "vonage",
	textmagic: "textmagic",
	telesign: "telesign"
};
function normalizeCardTitle(title) {
	return title.toLowerCase().replace(/\s+/g, " ").trim();
}
function isKnownBrandIconKey(key) {
	const normalized = key.toLowerCase().replace(/\s+/g, "-").replace(/_/g, "-").replace(/\./g, "-");
	return Boolean(CARD_TITLE_ICON_KEYS[normalized] ?? CARD_TITLE_ICON_KEYS[key.toLowerCase()] ?? FRAMEWORK_ICON_MAP[normalized]);
}
function resolveMarkdocCardIconFromTitle(title) {
	if (!title) return null;
	const iconKey = CARD_TITLE_ICON_KEYS[normalizeCardTitle(title)];
	if (!iconKey) return null;
	const iconFile = getMarkdocIconFile(iconKey);
	if (iconFile) return {
		type: "image",
		src: `/icons/${iconFile}`
	};
	return null;
}
function resolveMarkdocCardIconFromHref(href) {
	if (!href) return null;
	const lastSegment = href.split("/").filter(Boolean).at(-1);
	if (!lastSegment || !isKnownBrandIconKey(lastSegment)) return null;
	const iconFile = getMarkdocIconFile(lastSegment);
	if (iconFile) return {
		type: "image",
		src: `/icons/${iconFile}`
	};
	return null;
}
function resolveMarkdocCardIcon({ icon, image, title, href }) {
	if (icon) {
		const resolved = resolveMarkdocIconByName(icon);
		if (resolved) return resolved;
	}
	if (image) {
		const src = resolveMarkdocIconImageSrc(image);
		if (src) return {
			type: "image",
			src
		};
	}
	const fromTitle = resolveMarkdocCardIconFromTitle(title);
	if (fromTitle) return fromTitle;
	return resolveMarkdocCardIconFromHref(href);
}
function resolveMarkdocIconImageSrc(src) {
	if (!src) return null;
	if (src.startsWith("/images/docs/") && src.endsWith(".svg")) {
		const filename$1 = src.split("/").pop()?.replace(/\.svg$/i, "");
		if (!filename$1) return null;
		const iconFile$1 = getMarkdocIconFile(filename$1);
		if (iconFile$1) return `/icons/${iconFile$1}`;
		return null;
	}
	const filename = src.split("/").pop()?.replace(/\.svg$/i, "");
	if (!filename) return null;
	const iconFile = getMarkdocIconFile(filename);
	if (iconFile) return `/icons/${iconFile}`;
	return null;
}
var CARD_HOVER_LIGHTS = [
	"bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.14)_0%,rgba(253,54,110,0.045)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.08)_0%,rgba(253,54,110,0.025)_42%,transparent_76%)]",
	"bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.13)_0%,rgba(124,103,254,0.04)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.075)_0%,rgba(124,103,254,0.022)_42%,transparent_76%)]",
	"bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.16)_0%,rgba(133,219,216,0.05)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.09)_0%,rgba(133,219,216,0.028)_42%,transparent_76%)]",
	"bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.11)_0%,rgba(254,149,103,0.035)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.065)_0%,rgba(254,149,103,0.02)_42%,transparent_76%)]",
	"bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_14%,transparent)_0%,color-mix(in_srgb,var(--brand-cta)_4%,transparent)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--brand-cta)_8%,transparent)_0%,color-mix(in_srgb,var(--brand-cta)_2.5%,transparent)_42%,transparent_76%)]",
	"bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.12)_0%,rgba(133,219,216,0.038)_42%,transparent_76%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.07)_0%,rgba(133,219,216,0.02)_42%,transparent_76%)]"
];
var CARD_HOVER_LIGHT_POSITIONS = [
	"absolute -end-[18%] -top-[36%] h-[170px] w-[220px]",
	"absolute -start-[16%] -top-[32%] h-[165px] w-[210px]",
	"absolute end-[8%] -top-[40%] h-[175px] w-[225px]",
	"absolute -end-[22%] top-[8%] h-[160px] w-[205px]",
	"absolute -start-[20%] bottom-[-28%] h-[170px] w-[220px]",
	"absolute -end-[14%] bottom-[-24%] h-[165px] w-[215px]"
];
var CARD_LINK_CLASS = "link-unstyled block h-full";
function getCardLightVariant(seed, fallbackIndex) {
	if (!seed) return fallbackIndex % CARD_HOVER_LIGHTS.length;
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) hash = hash * 31 + seed.charCodeAt(i) >>> 0;
	return hash % CARD_HOVER_LIGHTS.length;
}
function Cards({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "not-prose my-8 grid grid-cols-1 gap-4 @[640px]:grid-cols-2",
		children: Children.map(children, (child, index) => {
			if (!isValidElement(child)) return child;
			return cloneElement(child, { cardIndex: index });
		})
	});
}
function CardHoverLight({ variant }) {
	const lightIndex = variant % CARD_HOVER_LIGHTS.length;
	const positionIndex = variant % CARD_HOVER_LIGHT_POSITIONS.length;
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-0",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: cn(CARD_HOVER_LIGHT_POSITIONS[positionIndex], CARD_HOVER_LIGHTS[lightIndex]) })
	});
}
function CardItemIcon({ resolved }) {
	return /* @__PURE__ */ jsx("span", {
		className: "mb-3 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40",
		children: resolved.type === "image" ? /* @__PURE__ */ jsx("img", {
			src: resolved.src,
			alt: "",
			className: cn(MARKDOC_BRAND_ICON_CLASS, PUBLIC_ICON_MUTED_CLASSES)
		}) : /* @__PURE__ */ jsx(resolved.Icon, {
			className: "size-5 shrink-0 text-muted-foreground",
			"aria-hidden": true
		})
	});
}
function CardsItem({ href, title, icon, image, children, cardIndex = 0, compact = false }) {
	const lightVariant = getCardLightVariant(href ?? title ?? "", cardIndex);
	const resolvedIcon = resolveMarkdocCardIcon({
		icon,
		image,
		title,
		href
	});
	const content = /* @__PURE__ */ jsxs("div", {
		className: "group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 p-5",
		children: [/* @__PURE__ */ jsx(CardHoverLight, { variant: lightVariant }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 flex h-full flex-col",
			children: [
				resolvedIcon ? /* @__PURE__ */ jsx(CardItemIcon, { resolved: resolvedIcon }) : null,
				title ? /* @__PURE__ */ jsx("h3", {
					className: cn("font-medium text-foreground/90", compact ? "text-[13px] @[480px]:text-[14px]" : "text-[15px] @[640px]:text-[16px]"),
					children: title
				}) : null,
				children ? /* @__PURE__ */ jsx("div", {
					className: cn("mt-2 flex-1 leading-[1.6] text-muted-foreground", compact ? "text-[12px] @[480px]:text-[13px]" : "text-[13px] @[640px]:text-[14px]"),
					children
				}) : null,
				href ? /* @__PURE__ */ jsx(ArrowRight, { className: "mt-4 size-4 text-muted-foreground" }) : null
			]
		})]
	});
	if (!href) return content;
	if (href.startsWith("http") || href.startsWith("//")) return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: CARD_LINK_CLASS,
		children: content
	});
	return /* @__PURE__ */ jsx(DocsRouteLink, {
		href,
		className: CARD_LINK_CLASS,
		children: content
	});
}
var MultiCodeContext = createContext(null);
function useMultiCodeContext() {
	return useContext(MultiCodeContext);
}
function MultiCode({ children }) {
	const [snippets, setSnippets] = useState(() => /* @__PURE__ */ new Map());
	const [selected, setSelected] = useState(null);
	const registerSnippet = useCallback((language, content) => {
		setSnippets((prev) => {
			if (prev.get(language) === content) return prev;
			const next = new Map(prev);
			next.set(language, content);
			return next;
		});
		setSelected((current) => current ?? language);
	}, []);
	const value = useMemo(() => ({
		selected,
		setSelected: (lang) => setSelected(lang),
		registerSnippet,
		snippets
	}), [
		selected,
		snippets,
		registerSnippet
	]);
	const languages = Array.from(snippets.keys());
	const activeLanguage = selected ?? languages[0] ?? null;
	const activeContent = activeLanguage ? snippets.get(activeLanguage) ?? "" : "";
	return /* @__PURE__ */ jsx(MultiCodeContext.Provider, {
		value,
		children: /* @__PURE__ */ jsxs("div", {
			className: "not-prose my-6 w-full",
			children: [activeLanguage && activeContent ? /* @__PURE__ */ jsx(ConnectCodeExample, {
				code: activeContent,
				language: resolveFenceCodeLanguage(activeLanguage),
				tabs: languages.map((lang) => ({
					id: lang,
					label: resolveFenceCodeLabel(lang)
				})),
				activeTabId: activeLanguage,
				onTabChange: setSelected,
				selectorVariant: "dropdown"
			}) : null, /* @__PURE__ */ jsx("div", {
				className: "hidden",
				"aria-hidden": true,
				children
			})]
		})
	});
}
var TabsContext = createContext(null);
function useTabsContext() {
	return useContext(TabsContext);
}
function Tabs({ children, proseVariant = "docs" }) {
	const { os } = useUserOs();
	const [activeId, setActiveId] = useState("");
	const [tabs, setTabs] = useState([]);
	const userSelectedRef = useRef(false);
	const previousOsRef = useRef(os);
	const tabTextClass = proseVariant === "blog" ? BLOG_BODY_TEXT_SIZE_CLASS : "text-[13px]";
	const orderedTabs = useMemo(() => orderTabsByPreferredOs(tabs, os), [tabs, os]);
	const selectTab = useCallback((id) => {
		userSelectedRef.current = true;
		setActiveId(id);
	}, []);
	useEffect(() => {
		if (tabs.length === 0) return;
		const hasOsTabs = tabs.some((tab) => matchTabToUserOs(tab.id) != null || matchTabToUserOs(tab.title) != null);
		if (previousOsRef.current !== os) {
			previousOsRef.current = os;
			if (hasOsTabs) userSelectedRef.current = false;
			else return;
		}
		if (userSelectedRef.current) return;
		const next = (hasOsTabs ? resolvePreferredOsTabId(tabs, os) : null) ?? orderedTabs[0]?.id ?? "";
		if (next && next !== activeId) setActiveId(next);
	}, [
		tabs,
		os,
		orderedTabs,
		activeId
	]);
	const value = useMemo(() => ({
		activeId,
		setActiveId: selectTab,
		registerTab: (id, title) => {
			setTabs((prev) => {
				if (prev.some((tab) => tab.id === id)) return prev;
				return [...prev, {
					id,
					title
				}];
			});
		},
		tabs: orderedTabs
	}), [
		activeId,
		orderedTabs,
		selectTab
	]);
	return /* @__PURE__ */ jsx(TabsContext.Provider, {
		value,
		children: /* @__PURE__ */ jsxs("div", {
			className: "not-prose my-6 overflow-hidden rounded-xl border border-border bg-background",
			children: [orderedTabs.length > 1 ? /* @__PURE__ */ jsx("div", {
				className: "flex gap-1 overflow-x-auto border-b border-border px-4 pt-3",
				children: orderedTabs.map((tab) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => selectTab(tab.id),
					className: cn("shrink-0 cursor-pointer border-b-2 px-3 py-2 transition-colors", tabTextClass, activeId === tab.id ? "border-white text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
					children: tab.title
				}, tab.id))
			}) : null, /* @__PURE__ */ jsx("div", {
				className: "px-4 py-3",
				children
			})]
		})
	});
}
function TabsItem({ id, title, children }) {
	const ctx = useContext(TabsContext);
	const tabId = id ?? title ?? "tab";
	if (ctx) {
		ctx.registerTab(tabId, title ?? tabId);
		if (ctx.activeId !== tabId) return null;
	}
	return /* @__PURE__ */ jsx("div", { children });
}
function Fence({ content, language }) {
	const multiCode = useMultiCodeContext();
	const tabs = useTabsContext();
	const lang = language ?? "plaintext";
	const resolvedLanguage = resolveFenceCodeLanguage(lang);
	if (multiCode) {
		multiCode.registerSnippet(lang, content);
		return null;
	}
	if (tabs) return /* @__PURE__ */ jsx("div", {
		className: "not-prose my-2 w-full",
		children: /* @__PURE__ */ jsx(ConnectCodeExample, {
			code: content,
			language: resolvedLanguage
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "not-prose my-4 w-full",
		children: /* @__PURE__ */ jsx(ConnectCodeExample, {
			code: content,
			language: resolvedLanguage
		})
	});
}
function MarkdocIcon({ icon }) {
	const resolved = resolveMarkdocIconByName(icon);
	if (!resolved) return null;
	if (resolved.type === "lucide") return /* @__PURE__ */ jsx("span", {
		className: "inline-flex align-middle",
		children: /* @__PURE__ */ jsx(resolved.Icon, {
			className: cn(MARKDOC_INLINE_LUCIDE_ICON_CLASS, "text-muted-foreground"),
			"aria-hidden": true
		})
	});
	return /* @__PURE__ */ jsx("img", {
		src: resolved.src,
		alt: "",
		className: cn("inline-block align-middle", MARKDOC_BRAND_ICON_CLASS, PUBLIC_ICON_MUTED_CLASSES)
	});
}
function MarkdocIconImage({ src, alt }) {
	const resolvedSrc = resolveMarkdocIconImageSrc(src);
	if (!resolvedSrc) return null;
	return /* @__PURE__ */ jsx("img", {
		src: resolvedSrc,
		alt: alt ?? "",
		className: cn("inline-block align-middle", MARKDOC_BRAND_ICON_CLASS, PUBLIC_ICON_MUTED_CLASSES)
	});
}
var docsNoteContentClassName = cn("[&_p]:my-0 [&_p+p]:mt-2", "[&_strong]:font-semibold [&_strong]:text-foreground", "[&_code]:rounded-md [&_code]:border [&_code]:border-border [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground/85", "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-4", "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-4", "[&_li]:leading-[1.65]", "[&_.not-prose]:w-full", "prose-links-neutral");
var blogNoteContentClassName = cn("[&_p]:my-0 [&_p+p]:mt-2", "[&_strong]:font-semibold [&_strong]:text-foreground", "[&_code]:rounded-md [&_code]:border [&_code]:border-border [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[15px] @[640px]:[&_code]:text-[16px] [&_code]:text-foreground/85", "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-4", "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-4", "[&_li]:leading-[1.65]", "[&_.not-prose]:w-full", "prose-links-neutral");
function Info$1({ title, children, compact = false, proseVariant = "docs" }) {
	const isBlog = proseVariant === "blog";
	return /* @__PURE__ */ jsxs(Alert, {
		variant: "default",
		className: "not-prose my-6 gap-y-2 border-border bg-muted/30 [&>svg]:text-muted-foreground",
		children: [
			/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
			/* @__PURE__ */ jsx(AlertTitle, {
				className: cn("line-clamp-none min-h-0 font-medium leading-[1.45] text-foreground", isBlog ? BLOG_BODY_TEXT_SIZE_CLASS : compact ? "text-[13px]" : "text-[15px]"),
				children: title
			}),
			children ? /* @__PURE__ */ jsx(AlertDescription, {
				className: cn(isBlog ? BLOG_BODY_TEXT_CLASS : compact ? "text-[13px] leading-[1.6] text-muted-foreground @[480px]:text-[14px]" : "text-[15px] leading-[1.65] text-muted-foreground @[640px]:text-[16px] @[640px]:leading-[1.65]", isBlog ? blogNoteContentClassName : docsNoteContentClassName),
				children
			}) : null
		]
	});
}
var DocsMarkdocInTableContext = createContext(false);
function DocsMarkdocInTableProvider({ children }) {
	return /* @__PURE__ */ jsx(DocsMarkdocInTableContext.Provider, {
		value: true,
		children
	});
}
var AUDIO_SRC_RE = /\.(wav|mp3|m4a|ogg)$/i;
function DocsImage({ src, alt = "", title }) {
	const inTable = useContext(DocsMarkdocInTableContext);
	const gallery = useImagePreviewGallery();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	const [localPreviewOpen, setLocalPreviewOpen] = useState(false);
	useEffect(() => {
		if (!gallery || !src || inTable || AUDIO_SRC_RE.test(src)) return;
		return gallery.registerItem({
			src,
			alt
		});
	}, [
		gallery,
		src,
		alt,
		inTable
	]);
	if (!src) return null;
	const contain = title === "contain";
	const isAudio = AUDIO_SRC_RE.test(src);
	if (inTable || isAudio) {
		if (isAudio) return /* @__PURE__ */ jsx("audio", {
			src,
			controls: true,
			className: "w-full",
			children: "Your browser does not support the audio element."
		});
		return /* @__PURE__ */ jsx("img", {
			src,
			alt,
			title: contain ? void 0 : title,
			loading: "lazy",
			className: "max-w-full align-middle"
		});
	}
	const imageClassName = cn("h-full w-full rounded-lg object-contain transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", contain && "p-3 @[480px]:p-4");
	const openPreview = () => {
		if (gallery) {
			gallery.openItem({
				src,
				alt
			});
			return;
		}
		setLocalPreviewOpen(true);
	};
	return /* @__PURE__ */ jsxs("figure", {
		className: "not-prose group relative my-8 w-full",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card/40 p-3 shadow-sm",
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("relative aspect-video w-full overflow-hidden rounded-lg bg-muted/25"),
					children: [
						!loaded && !error ? /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center justify-center bg-muted/30",
							children: /* @__PURE__ */ jsx(ThinkingBubble, {
								size: 40,
								activity: .18,
								interactive: false,
								particleCount: 120,
								colorMode: "brand",
								centered: true
							})
						}) : null,
						error ? /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/30 text-muted-foreground",
							children: [/* @__PURE__ */ jsx(ImageIcon, {
								className: "size-6",
								"aria-hidden": true
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[12px]",
								children: "Image unavailable"
							})]
						}) : /* @__PURE__ */ jsx("img", {
							src,
							alt,
							title: contain ? void 0 : title,
							loading: "lazy",
							className: imageClassName,
							onLoad: () => setLoaded(true),
							onError: () => {
								setError(true);
								setLoaded(true);
							}
						}),
						!error ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "secondary",
							size: "icon",
							className: "absolute end-3 bottom-3 size-8 border border-border/80 bg-background/90 opacity-70 shadow-sm backdrop-blur-sm transition-opacity hover:opacity-100 focus-visible:opacity-100",
							"aria-label": "Expand image",
							onClick: openPreview,
							children: /* @__PURE__ */ jsx(Maximize2, { className: "size-3.5" })
						}) : null
					]
				})
			}),
			alt.trim() ? /* @__PURE__ */ jsx("figcaption", {
				className: "mt-2.5 text-center text-[12px] leading-5 text-muted-foreground",
				children: alt
			}) : null,
			!gallery && !error ? /* @__PURE__ */ jsx(ImagePreviewGalleryDialog, {
				items: [{
					src,
					alt
				}],
				activeIndex: localPreviewOpen ? 0 : null,
				onActiveIndexChange: (index) => setLocalPreviewOpen(index !== null)
			}) : null
		]
	});
}
var tableHeadClassName = "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider whitespace-normal";
function extractText(children) {
	if (typeof children === "string") return children;
	if (Array.isArray(children)) return children.map(extractText).join("");
	if (children && typeof children === "object" && "props" in children) return extractText(children.props.children);
	return "";
}
function Heading({ level = 1, id, children, compact = false, proseVariant = "docs" }) {
	const text = extractText(children);
	const { title, id: headingId } = resolveHeadingId(text, id);
	const displayChildren = Boolean(id ?? text.match(/\{#|{%\s*#/)) ? title : children;
	const displayLevel = Math.min(level + 1, 6);
	const headingProps = {
		id: headingId,
		className: cn(cn("scroll-mt-24 font-aeonik-pro text-foreground/95 text-balance", compact ? [
			level === 1 && "mb-3 mt-6 text-[16px] font-normal leading-[1.3] first:mt-0 @[480px]:text-[17px]",
			level === 2 && "mb-2 mt-5 text-[14px] font-semibold leading-snug @[480px]:text-[15px]",
			level === 3 && "mb-2 mt-4 text-[13px] font-semibold @[480px]:text-[14px]",
			level >= 4 && "mb-1.5 mt-3 text-[12px] font-semibold @[480px]:text-[13px]"
		] : proseVariant === "blog" ? [
			level === 1 && "mb-4 mt-8 text-[21px] font-normal leading-[1.3] first:mt-0 @[640px]:text-[23px]",
			level === 2 && "mb-3 mt-7 text-[18px] font-semibold leading-snug @[640px]:text-[19px]",
			level === 3 && "mb-2 mt-6 text-[17px] font-semibold @[640px]:text-[18px]",
			level >= 4 && "mb-2 mt-5 text-[16px] font-semibold @[640px]:text-[17px]"
		] : [
			level === 1 && "mb-4 mt-8 text-[20px] font-normal leading-[1.3] first:mt-0 @[640px]:text-[22px]",
			level === 2 && "mb-3 mt-7 text-[17px] font-semibold leading-snug @[640px]:text-[18px]",
			level === 3 && "mb-2 mt-6 text-[16px] font-semibold @[640px]:text-[17px]",
			level >= 4 && "mb-2 mt-5 text-[15px] font-semibold"
		]), "group")
	};
	const content = /* @__PURE__ */ jsx(DocsHeadingLink, {
		headingId,
		linkIconSizeClass: compact ? level === 1 ? "size-4" : level === 2 ? "size-3.5" : "size-3" : level === 1 ? "size-[18px]" : level === 2 ? "size-4" : "size-3.5",
		children: displayChildren
	});
	switch (displayLevel) {
		case 2: return /* @__PURE__ */ jsx("h2", {
			...headingProps,
			children: content
		});
		case 3: return /* @__PURE__ */ jsx("h3", {
			...headingProps,
			children: content
		});
		case 4: return /* @__PURE__ */ jsx("h4", {
			...headingProps,
			children: content
		});
		case 5: return /* @__PURE__ */ jsx("h5", {
			...headingProps,
			children: content
		});
		default: return /* @__PURE__ */ jsx("h6", {
			...headingProps,
			children: content
		});
	}
}
function DocsLink({ href, children }) {
	if (!href) return /* @__PURE__ */ jsx("span", { children });
	const external = href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:") || href.startsWith("tel:");
	if (external || href.startsWith("#")) return /* @__PURE__ */ jsx("a", {
		href,
		className: DOCS_PROSE_LINK_CLASS,
		...external && !href.startsWith("#") ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
	return /* @__PURE__ */ jsx(DocsRouteLink, {
		href,
		className: DOCS_PROSE_LINK_CLASS,
		children
	});
}
function OnlyLight({ children }) {
	const { resolvedTheme } = useTheme();
	if (resolvedTheme === "dark") return null;
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function OnlyDark({ children }) {
	const { resolvedTheme } = useTheme();
	if (resolvedTheme !== "dark") return null;
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function Blockquote({ children, proseVariant = "docs" }) {
	return /* @__PURE__ */ jsx("blockquote", {
		className: cn("my-5 border-s-2 border-[var(--brand-cta)] ps-4 italic", proseVariant === "blog" ? BLOG_BODY_TEXT_CLASS : DOCS_BODY_TEXT_CLASS),
		children
	});
}
function MarkdocTableTag({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function normalizeMarkdocTableColumnWidths(columnWidths) {
	if (!columnWidths?.length) return [];
	return Array.from({ length: columnWidths.length }, (_, index) => {
		const width = columnWidths[index];
		return typeof width === "number" ? width : void 0;
	});
}
function buildMarkdocTableColStyles(columnWidths) {
	const fixedTotalPx = columnWidths.reduce((sum, width) => sum + (width ?? 0), 0);
	const fillCount = columnWidths.filter((width) => width == null).length;
	if (fillCount === 0) return columnWidths.map((width) => width != null ? {
		width: `${width}px`,
		minWidth: `${width}px`
	} : void 0);
	return columnWidths.map((width) => {
		if (width != null) return {
			width: `${width}px`,
			minWidth: `${width}px`
		};
		if (fillCount === columnWidths.length) return { width: `${100 / fillCount}%` };
		return {
			width: `calc((100% - ${fixedTotalPx}px) / ${fillCount})`,
			minWidth: 0
		};
	});
}
function MarkdocTableRoot({ children, columnWidths: columnWidthsProp = [] }) {
	const columnWidths = normalizeMarkdocTableColumnWidths(columnWidthsProp);
	const hasColumnWidths = columnWidths.some((width) => width != null);
	const colStyles = useMemo(() => hasColumnWidths ? buildMarkdocTableColStyles(columnWidths) : [], [columnWidths, hasColumnWidths]);
	return /* @__PURE__ */ jsx("div", {
		className: "not-prose my-6 w-full overflow-hidden rounded-lg border border-border bg-card/50",
		children: /* @__PURE__ */ jsxs(Table$1, {
			withScrollContainer: true,
			className: hasColumnWidths ? "table-fixed" : void 0,
			children: [hasColumnWidths ? /* @__PURE__ */ jsx("colgroup", { children: colStyles.map((style, index) => /* @__PURE__ */ jsx("col", { style }, index)) }) : null, children]
		})
	});
}
function MarkdocTableHeader({ children }) {
	return /* @__PURE__ */ jsx(TableHeader, {
		className: "[&_tr]:border-b [&_tr]:border-border [&_tr]:hover:bg-transparent",
		children
	});
}
MarkdocTableHeader.displayName = "MarkdocTableHeader";
function MarkdocTableBody({ children }) {
	return /* @__PURE__ */ jsx(TableBody, { children });
}
MarkdocTableBody.displayName = "MarkdocTableBody";
function MarkdocTableRow({ children }) {
	return /* @__PURE__ */ jsx(TableRow, {
		className: "border-b border-border hover:bg-muted/30",
		children
	});
}
MarkdocTableRow.displayName = "MarkdocTableRow";
function MarkdocTableHead({ children }) {
	return /* @__PURE__ */ jsx(TableHead, {
		className: cn(tableHeadClassName, "whitespace-normal"),
		children
	});
}
MarkdocTableHead.displayName = "MarkdocTableHead";
function MarkdocTableCell({ children, proseVariant = "docs" }) {
	return /* @__PURE__ */ jsx(TableCell, {
		className: cn("px-4 py-3 align-top whitespace-normal", proseVariant === "blog" ? BLOG_TABLE_CELL_TEXT_CLASS : DOCS_TABLE_CELL_TEXT_CLASS, "[&_strong]:font-semibold [&_strong]:text-foreground"),
		children: /* @__PURE__ */ jsx(DocsMarkdocInTableProvider, { children })
	});
}
var accordionContentClassName = cn("[&_p]:my-0 [&_p+p]:mt-3", "[&_strong]:font-semibold [&_strong]:text-foreground", "[&_code]:rounded-md [&_code]:border [&_code]:border-border [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground/85", "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:ps-4", "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:ps-4", "[&_li]:leading-[1.65]", "[&_.not-prose]:my-4 [&_.not-prose]:w-full [&_.not-prose:first-child]:mt-0", "prose-links-neutral");
var MarkdocAccordionIndexContext = createContext(null);
function MarkdocAccordion({ children }) {
	const indexRef = useRef(0);
	indexRef.current = 0;
	const nextIndex = useCallback(() => indexRef.current++, []);
	return /* @__PURE__ */ jsx(MarkdocAccordionIndexContext.Provider, {
		value: { nextIndex },
		children: /* @__PURE__ */ jsx(Accordion, {
			type: "single",
			collapsible: true,
			className: "not-prose my-6 w-full overflow-hidden rounded-xl border border-border bg-card/50",
			children
		})
	});
}
function MarkdocAccordionItem({ title, children, compact = false }) {
	const itemIndex = useContext(MarkdocAccordionIndexContext)?.nextIndex() ?? 0;
	const value = title ? `${itemIndex}-${title}` : `item-${itemIndex}`;
	const triggerTextClass = compact ? "text-[13px] @[480px]:text-[14px]" : "text-[14px] @[640px]:text-[15px]";
	const contentTextClass = compact ? "text-[13px] leading-[1.6] @[480px]:text-[14px]" : cn(DOCS_BODY_TEXT_CLASS, "text-[15px] leading-[1.65] @[640px]:text-[16px]");
	return /* @__PURE__ */ jsxs(AccordionItem, {
		value,
		className: "border-border",
		children: [/* @__PURE__ */ jsx(AccordionTrigger, {
			className: cn("rounded-none px-4 py-4 text-start transition-colors duration-150 hover:bg-muted/40 hover:no-underline data-[state=open]:bg-muted/30", triggerTextClass),
			children: /* @__PURE__ */ jsx("span", {
				className: "pe-4 font-medium text-foreground",
				children: title
			})
		}), /* @__PURE__ */ jsx(AccordionContent, {
			className: cn("px-4 pb-4 text-muted-foreground", contentTextClass, accordionContentClassName),
			children
		})]
	});
}
function resolveEmbedSrc(src, id) {
	if (src?.trim()) return src.trim();
	if (id?.trim()) return `https://www.youtube-nocookie.com/embed/${id.trim()}`;
	return null;
}
function resolveThumbnail(thumbnail, id) {
	if (thumbnail?.trim()) return thumbnail.trim();
	if (id?.trim()) return `https://i.ytimg.com/vi/${id.trim()}/hqdefault.jpg`;
	return null;
}
function withAutoplay(embedSrc) {
	try {
		const url = new URL(embedSrc);
		url.searchParams.set("autoplay", "1");
		return url.toString();
	} catch {
		return `${embedSrc}${embedSrc.includes("?") ? "&" : "?"}autoplay=1`;
	}
}
function MarkdocYoutube({ src, thumbnail, id, title }) {
	const [open, setOpen] = useState(false);
	const [playerKey, setPlayerKey] = useState(0);
	const embedSrc = resolveEmbedSrc(src, id);
	const thumbnailSrc = resolveThumbnail(thumbnail, id);
	const handleOpenChange = useCallback((nextOpen) => {
		setOpen(nextOpen);
		if (!nextOpen) window.setTimeout(() => {
			setPlayerKey((current) => current + 1);
		}, 200);
	}, []);
	if (!embedSrc) return null;
	const dialogTitle = title?.trim() || "YouTube video";
	return /* @__PURE__ */ jsxs(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ jsx("div", {
			className: "not-prose my-8",
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setOpen(true),
				className: "group relative block w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-muted/25 text-start",
				"aria-label": `Play ${dialogTitle}`,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative aspect-video w-full",
					children: [
						thumbnailSrc ? /* @__PURE__ */ jsx("img", {
							src: thumbnailSrc,
							alt: "",
							loading: "lazy",
							decoding: "async",
							className: "size-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
						}) : /* @__PURE__ */ jsx("div", { className: "size-full bg-muted/40" }),
						/* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--foreground)_5%,transparent),transparent_68%)]",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("span", {
							className: "absolute start-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground shadow-sm backdrop-blur-md transition-transform duration-150 group-hover:scale-105 group-active:scale-95",
							children: /* @__PURE__ */ jsx(Play, {
								className: "ms-0.5 size-4 fill-current",
								"aria-hidden": true
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ jsxs(DialogContent, {
			showCloseButton: true,
			overlayClassName: "z-[120] bg-black/80 backdrop-blur-md",
			className: cn("z-[120] w-[min(92vw,960px)] max-w-none gap-0 overflow-visible rounded-2xl border border-border/80", "bg-card/95 p-3 shadow-2xl ring-1 ring-foreground/[0.06] backdrop-blur-xl sm:p-4 sm:max-w-[960px]", "[&_[data-slot=dialog-close]]:-top-3 [&_[data-slot=dialog-close]]:-end-3 sm:[&_[data-slot=dialog-close]]:-top-3.5 sm:[&_[data-slot=dialog-close]]:-end-3.5", "[&_[data-slot=dialog-close]]:z-20 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:size-9 [&_[data-slot=dialog-close]]:shrink-0", "[&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center", "[&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-border/80", "[&_[data-slot=dialog-close]]:bg-background [&_[data-slot=dialog-close]]:opacity-100", "[&_[data-slot=dialog-close]]:shadow-md [&_[data-slot=dialog-close]]:backdrop-blur-sm", "[&_[data-slot=dialog-close]:hover]:bg-background", "[&_[data-slot=dialog-close]_svg]:size-4"),
			children: [/* @__PURE__ */ jsx(DialogTitle, {
				className: "sr-only",
				children: dialogTitle
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-xl border border-border/70 bg-black shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--foreground)_8%,transparent)]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_10%,transparent),transparent)]",
					"aria-hidden": true
				}), /* @__PURE__ */ jsx("div", {
					className: "aspect-video w-full max-h-[min(75dvh,calc(92vw*9/16))]",
					children: open ? /* @__PURE__ */ jsx("iframe", {
						src: withAutoplay(embedSrc),
						title: dialogTitle,
						className: "size-full",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
						allowFullScreen: true
					}, playerKey) : null
				})]
			})]
		})]
	});
}
export { MultiCode as C, docsMarkdocConfig as E, TabsItem as S, CardsItem as T, Info$1 as _, DocsLink as a, Fence as b, MarkdocTableCell as c, MarkdocTableRoot as d, MarkdocTableRow as f, DocsImage as g, OnlyLight as h, Blockquote as i, MarkdocTableHead as l, OnlyDark as m, MarkdocAccordion as n, Heading as o, MarkdocTableTag as p, MarkdocAccordionItem as r, MarkdocTableBody as s, MarkdocYoutube as t, MarkdocTableHeader as u, MarkdocIcon as v, Cards as w, Tabs as x, MarkdocIconImage as y };
