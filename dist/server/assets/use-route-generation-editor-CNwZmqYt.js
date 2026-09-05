import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { d as getCoverBrandThemeForSvgExport, f as getCoverTheme, g as resolveCoverThemeId, h as resolveCoverEditorThemeId, m as listCoverEditorThemesByFamily } from "./constants-CL7SLzjY.js";
import { A as isCoverMilestoneTemplate, D as getCoverSoftLightLayoutsForTheme, E as getCoverSoftLightCssGradient, O as getCoverSoftLightRect, S as getCoverScreenshotGlassPreviewStyles, T as getCoverBackgroundGridStyleForTheme, _ as buildCoverScreenshotFrameShellLayout, b as getCoverScreenshotFrameRadii, c as getCoverIconPreviewClassesForFamily, d as getCoverLucideIconStrokeColorForFamily, i as loadCoverLucideIconNode, k as getCoverMilestoneConfettiDomPieces, n as getCachedCoverLucideIconNode, p as COVER_HERO_SCREENSHOT_FRAME, r as loadCoverLucideIconNames, s as getCoverIconPreviewClasses } from "./lucide-icon-svg-BStxTNvw.js";
import { t as buildCoverOgBackgroundDataUri } from "./og-background-Ch6x_wVd.js";
import { a as parseCoverLucideIconName, i as isCoverLucideIconValue, n as formatCoverLucideIconValue, o as searchCoverLucideIcons, r as getCoverLucideIconSearchMeta, t as formatCoverLucideIconLabel } from "./lucide-icon-utils-BZZNNTPu.js";
import { $ as normalizeCoverGeneratorColumnsLayout, b as COVER_GENERATOR_COLUMNS_MAX, x as COVER_GENERATOR_COLUMNS_MIN } from "./resizable-layout-BVnWw80t.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as SelectLabel, c as SelectValue, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { n as CreateWizardRightColumn, t as CreateWizardLeftColumn } from "./CreateWizardColumns-N6SbyMed.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { createElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { CheckIcon, Pencil, Search, Trash2 } from "lucide-react";
import { useTheme } from "next-themes";
import * as SelectPrimitive from "@radix-ui/react-select";
var PERSIST_DEBOUNCE_MS = 250;
function applyPanelOpenState(panel, open) {
	if (!panel) return;
	try {
		if (open) panel.expand();
		else panel.collapse();
	} catch {}
}
function GeneratorColumnsResizableLayout({ layout, persistLayout, leftOpen, rightOpen, onLeftOpenChange, onRightOpenChange, handleClassName, className, templates, canvas, properties }) {
	const leftPanelRef = useRef(null);
	const rightPanelRef = useRef(null);
	const [mountedLayout, setMountedLayout] = useState(() => normalizeCoverGeneratorColumnsLayout(layout));
	const isResizingRef = useRef(false);
	const persistTimerRef = useRef(null);
	const lastPersistedRef = useRef(mountedLayout);
	const latestLayoutRef = useRef(mountedLayout);
	useEffect(() => {
		if (isResizingRef.current) return;
		const normalized = normalizeCoverGeneratorColumnsLayout(layout);
		lastPersistedRef.current = normalized;
		latestLayoutRef.current = normalized;
		setMountedLayout((prev) => prev.join(",") === normalized.join(",") ? prev : normalized);
	}, [layout]);
	useEffect(() => {
		let frameId = 0;
		const syncPanels = () => {
			applyPanelOpenState(leftPanelRef.current, leftOpen);
			applyPanelOpenState(rightPanelRef.current, rightOpen);
		};
		frameId = window.requestAnimationFrame(() => {
			frameId = window.requestAnimationFrame(syncPanels);
		});
		return () => {
			if (frameId !== 0) window.cancelAnimationFrame(frameId);
		};
	}, [leftOpen, rightOpen]);
	const handleLayout = useCallback((sizes) => {
		const normalized = normalizeCoverGeneratorColumnsLayout(sizes);
		latestLayoutRef.current = normalized;
		if (!isResizingRef.current) return;
		if (normalized.every((size, index) => Math.abs(size - lastPersistedRef.current[index]) < .5)) return;
		if (persistTimerRef.current !== null) window.clearTimeout(persistTimerRef.current);
		persistTimerRef.current = window.setTimeout(() => {
			persistTimerRef.current = null;
			lastPersistedRef.current = normalized;
			persistLayout(normalized);
		}, PERSIST_DEBOUNCE_MS);
	}, [persistLayout]);
	const handleDragging = useCallback((isDragging) => {
		if (isDragging) {
			isResizingRef.current = true;
			return;
		}
		isResizingRef.current = false;
		if (persistTimerRef.current !== null) {
			window.clearTimeout(persistTimerRef.current);
			persistTimerRef.current = null;
		}
		const next = latestLayoutRef.current;
		lastPersistedRef.current = next;
		setMountedLayout(next);
		persistLayout(next);
	}, [persistLayout]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) window.clearTimeout(persistTimerRef.current);
		};
	}, []);
	const layoutKey = mountedLayout.map((size) => size.toFixed(1)).join("-");
	return /* @__PURE__ */ jsxs(ResizablePanelGroup, {
		direction: "horizontal",
		className,
		onLayout: handleLayout,
		children: [
			/* @__PURE__ */ jsx(ResizablePanel, {
				ref: leftPanelRef,
				defaultSize: leftOpen ? mountedLayout[0] : 0,
				minSize: COVER_GENERATOR_COLUMNS_MIN[0],
				maxSize: COVER_GENERATOR_COLUMNS_MAX[0],
				collapsible: true,
				collapsedSize: 0,
				onCollapse: () => onLeftOpenChange(false),
				onExpand: () => onLeftOpenChange(true),
				className: "min-h-0 min-w-0 overflow-hidden",
				children: templates
			}),
			/* @__PURE__ */ jsx(ResizableHandle, {
				className: handleClassName,
				onDragging: handleDragging
			}),
			/* @__PURE__ */ jsx(ResizablePanel, {
				defaultSize: mountedLayout[1],
				minSize: COVER_GENERATOR_COLUMNS_MIN[1],
				className: "min-h-0 min-w-0 overflow-hidden",
				children: canvas
			}),
			/* @__PURE__ */ jsx(ResizableHandle, {
				className: handleClassName,
				onDragging: handleDragging
			}),
			/* @__PURE__ */ jsx(ResizablePanel, {
				ref: rightPanelRef,
				defaultSize: rightOpen ? mountedLayout[2] : 0,
				minSize: COVER_GENERATOR_COLUMNS_MIN[2],
				maxSize: COVER_GENERATOR_COLUMNS_MAX[2],
				collapsible: true,
				collapsedSize: 0,
				onCollapse: () => onRightOpenChange(false),
				onExpand: () => onRightOpenChange(true),
				className: "min-h-0 min-w-0 overflow-hidden",
				children: properties
			})
		]
	}, layoutKey);
}
function useCoverIconPreviewFamily(colorMode, themeId) {
	const { resolvedTheme } = useTheme();
	if (colorMode === "app") return resolvedTheme === "dark" ? "dark" : "light";
	return getCoverTheme(resolveCoverThemeId(themeId)).family;
}
function CoverLucideIconPreview({ iconNode, stroke, size, className }) {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke,
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: cn("shrink-0", className),
		"aria-hidden": true,
		children: iconNode.map(([tag, attrs], index) => {
			const { key: reactKey, ...rest } = attrs;
			return createElement(tag, {
				...rest,
				key: reactKey ?? index,
				fill: "none",
				stroke,
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			});
		})
	});
}
function CoverLucideIconPreviewLoader({ name, family, size, className }) {
	const [iconNode, setIconNode] = useState(() => getCachedCoverLucideIconNode(name));
	const stroke = getCoverLucideIconStrokeColorForFamily(family);
	const previewClasses = getCoverIconPreviewClassesForFamily(family);
	useEffect(() => {
		let cancelled = false;
		loadCoverLucideIconNode(name).then((node) => {
			if (cancelled) return;
			setIconNode(node);
		});
		return () => {
			cancelled = true;
		};
	}, [name]);
	if (!iconNode) return /* @__PURE__ */ jsx("span", {
		"aria-hidden": true,
		className: cn("inline-block shrink-0 rounded bg-muted/40", className),
		style: {
			width: size,
			height: size
		}
	});
	return /* @__PURE__ */ jsx(CoverLucideIconPreview, {
		iconNode,
		stroke,
		size,
		className: cn(previewClasses, className)
	});
}
function CoverIconPreview({ src, themeId, colorMode = "cover", className, size = 32 }) {
	const family = useCoverIconPreviewFamily(colorMode, themeId);
	if (isCoverLucideIconValue(src)) {
		const name = parseCoverLucideIconName(src);
		if (!name) return null;
		return /* @__PURE__ */ jsx(CoverLucideIconPreviewLoader, {
			name,
			family,
			size,
			className
		});
	}
	return /* @__PURE__ */ jsx("img", {
		src,
		alt: "",
		draggable: false,
		className: cn("shrink-0 object-contain", colorMode === "app" ? getCoverIconPreviewClassesForFamily(family) : getCoverIconPreviewClasses(resolveCoverThemeId(themeId)), className),
		style: {
			width: size,
			height: size
		}
	});
}
function BrowserChromeDots({ paddingX, paddingTop, chromeHeight, dotFill }) {
	const { chromeDotSize, chromeDotGap, chromeDotMarginLeft } = COVER_HERO_SCREENSHOT_FRAME;
	const dotY = paddingTop + chromeHeight / 2 - chromeDotSize / 2;
	const dotStartX = paddingX + chromeDotMarginLeft;
	return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: 3 }, (_, index) => /* @__PURE__ */ jsx("span", {
		"aria-hidden": true,
		className: "absolute rounded-full",
		style: {
			left: dotStartX + index * (chromeDotSize + chromeDotGap),
			top: dotY,
			width: chromeDotSize,
			height: chromeDotSize,
			backgroundColor: dotFill
		}
	}, index)) });
}
function CoverHeroBrowserFrame({ frameWidth, frameHeight, themeId, src, alt = "Screenshot", focusX = 0, focusY = 0, zoom = 1, closed = false, className, placeholder }) {
	const t = useT();
	const glass = getCoverScreenshotGlassPreviewStyles(themeId);
	const { screenshot: shotRect, outerRadius, paddingX, paddingTop, chromeHeight, borderWidth } = buildCoverScreenshotFrameShellLayout(0, 0, frameWidth, frameHeight, { closed });
	const { paddingBottom } = COVER_HERO_SCREENSHOT_FRAME;
	const radii = getCoverScreenshotFrameRadii(closed);
	const shellRadius = closed ? outerRadius : `${outerRadius}px ${outerRadius}px 0 0`;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex flex-col overflow-hidden", className),
		style: {
			width: frameWidth,
			height: frameHeight,
			borderRadius: shellRadius,
			borderWidth,
			borderStyle: "solid",
			borderColor: glass.shellBorder,
			borderBottomWidth: closed ? borderWidth : 0,
			backgroundColor: glass.shellFill
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative shrink-0",
			style: {
				height: paddingTop + chromeHeight,
				width: "100%"
			},
			children: /* @__PURE__ */ jsx(BrowserChromeDots, {
				paddingX,
				paddingTop,
				chromeHeight,
				dotFill: glass.chromeDotFill
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden",
			style: {
				width: shotRect.width,
				height: shotRect.height,
				marginInlineStart: paddingX,
				marginBottom: closed ? paddingBottom : 0,
				borderTopLeftRadius: radii.topLeft,
				borderTopRightRadius: radii.topRight,
				borderBottomLeftRadius: radii.bottomLeft,
				borderBottomRightRadius: radii.bottomRight,
				opacity: COVER_HERO_SCREENSHOT_FRAME.imageOpacity
			},
			children: src ? /* @__PURE__ */ jsx("img", {
				src,
				alt: t(alt),
				draggable: false,
				className: "block h-full w-full object-cover",
				style: {
					objectPosition: `${focusX}% ${focusY}%`,
					transform: zoom > 1 ? `scale(${zoom})` : void 0,
					transformOrigin: `${focusX}% ${focusY}%`
				}
			}) : placeholder ?? /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full items-center justify-center bg-[#17171c] text-[13px] text-white/45",
				children: t("Screenshot preview")
			})
		})]
	});
}
function CoverBrandBackgroundPreview({ themeId, width, height, templateId, className }) {
	const brand = getCoverBrandThemeForSvgExport(themeId);
	const theme = getCoverTheme(themeId);
	const gridStyle = getCoverBackgroundGridStyleForTheme(themeId);
	const backgroundContext = templateId ? { templateId } : void 0;
	const confettiPieces = isCoverMilestoneTemplate(templateId) ? getCoverMilestoneConfettiDomPieces(width, height, theme.family) : [];
	return /* @__PURE__ */ jsxs("div", {
		className: cn("pointer-events-none absolute inset-0 overflow-hidden", className),
		style: { zIndex: 0 },
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				style: { backgroundColor: brand.background }
			}),
			gridStyle ? /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				style: gridStyle
			}) : null,
			getCoverSoftLightLayoutsForTheme(themeId, backgroundContext).map(([side, layout]) => {
				const rect = getCoverSoftLightRect(layout, width, height);
				return /* @__PURE__ */ jsx("div", {
					className: "absolute",
					style: {
						left: rect.x,
						top: rect.y,
						width: rect.width,
						height: rect.height,
						background: getCoverSoftLightCssGradient(themeId, layout)
					}
				}, side);
			}),
			confettiPieces.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				children: confettiPieces.map((piece, index) => /* @__PURE__ */ jsx("div", {
					className: "absolute",
					style: {
						left: piece.left,
						top: piece.top,
						width: piece.width,
						height: piece.height,
						backgroundColor: piece.backgroundColor,
						borderRadius: piece.borderRadius,
						transform: `rotate(${piece.rotation}deg)`
					}
				}, index))
			}) : null
		]
	});
}
const PUBLIC_ICON_FILENAMES = [
	"actix.svg",
	"algolia.svg",
	"amazon.svg",
	"analog.svg",
	"android.svg",
	"angular.svg",
	"anthropic.svg",
	"apple.svg",
	"appsignal.svg",
	"appwrite-white.svg",
	"appwrite.svg",
	"astro.svg",
	"auth0.svg",
	"authentik.svg",
	"autodesk.svg",
	"azure.svg",
	"behance.svg",
	"bitbucket.svg",
	"bitly.svg",
	"bolt.svg",
	"box.svg",
	"bun.svg",
	"capacitor.svg",
	"chatgpt.svg",
	"claude.svg",
	"code.svg",
	"coolify.svg",
	"cpp.svg",
	"css3.svg",
	"cursor-ai.svg",
	"cyberduck.svg",
	"daily-dev.svg",
	"dailymotion.svg",
	"dart.svg",
	"deno.svg",
	"digitalocean.svg",
	"discord-simple.svg",
	"discord.svg",
	"disqus.svg",
	"django.svg",
	"docker.svg",
	"docusaurus.svg",
	"dotnet.svg",
	"dribbble.svg",
	"drizzle.svg",
	"dropbox.svg",
	"elevenlabs.svg",
	"elysia.svg",
	"emergent.svg",
	"empty.svg",
	"etsy.svg",
	"facebook.svg",
	"fastapi.svg",
	"fastify.svg",
	"figma.svg",
	"firebase.svg",
	"firefox.svg",
	"flask.svg",
	"flutter.svg",
	"forgejo.svg",
	"fresh.svg",
	"gin.svg",
	"git.svg",
	"gitea.svg",
	"github-circle.svg",
	"github.svg",
	"gitlab.svg",
	"globe.svg",
	"go.svg",
	"gogs.svg",
	"google-antigravity.svg",
	"google.svg",
	"graphql.svg",
	"hono.svg",
	"html5.svg",
	"hugging-face.svg",
	"imagine.svg",
	"instagram.svg",
	"ionic.svg",
	"ios.svg",
	"java.svg",
	"js.svg",
	"jsr.svg",
	"koa.svg",
	"kotlin.svg",
	"ktor.svg",
	"laravel.svg",
	"lemon-squeezy.svg",
	"linkedin.svg",
	"linux.svg",
	"lovable.svg",
	"lynx.svg",
	"mailgun.svg",
	"medium.svg",
	"microsoft_edge.svg",
	"microsoft.svg",
	"mongo-db.svg",
	"mqtt.svg",
	"msg91.svg",
	"neo4j.svg",
	"neon.svg",
	"nestjs.svg",
	"nextjs.svg",
	"nhost.svg",
	"node.svg",
	"notion.svg",
	"npm.svg",
	"nuxt.svg",
	"oauth.svg",
	"oidc.svg",
	"okta.svg",
	"open-source.svg",
	"opencode.svg",
	"openrouter.svg",
	"opera.svg",
	"origin.svg",
	"paypal.svg",
	"perplexity.svg",
	"php.svg",
	"pinterest.svg",
	"pnpm.svg",
	"podio.svg",
	"prisma.svg",
	"product-hunt.svg",
	"python.svg",
	"quarkus.svg",
	"qwik.svg",
	"rails.svg",
	"raygun.svg",
	"rclone.svg",
	"react-native.svg",
	"react.svg",
	"reddit.svg",
	"redis.svg",
	"refine.svg",
	"remix.svg",
	"resend.svg",
	"ruby.svg",
	"rust.svg",
	"rxdb.svg",
	"safari.svg",
	"salesforce.svg",
	"sendgrid.svg",
	"sentry.svg",
	"sequelize.svg",
	"skype.svg",
	"slack.svg",
	"solid.svg",
	"spotify.svg",
	"spring.svg",
	"sqlalchemy.svg",
	"stripe.svg",
	"supabase.svg",
	"svelte.svg",
	"swift.svg",
	"symfony.svg",
	"tanstack.svg",
	"tauri.svg",
	"telegram.svg",
	"telesign.svg",
	"terraform.svg",
	"textmagic.svg",
	"tiktok.svg",
	"tradeshift.svg",
	"ts.svg",
	"tumbir.svg",
	"twilio.svg",
	"twitch.svg",
	"twitter.svg",
	"typeorm.svg",
	"unity.svg",
	"upstash.svg",
	"vapor.svg",
	"vercel.svg",
	"vimeo.svg",
	"vite.svg",
	"vk.svg",
	"vonage.svg",
	"vs_code.svg",
	"vscode.svg",
	"vue.svg",
	"whatsapp.svg",
	"windsurf.svg",
	"wordpress.svg",
	"x.svg",
	"yahoo.svg",
	"yammer.svg",
	"yandex.svg",
	"yarn.svg",
	"ycombinator.svg",
	"youtube.svg",
	"zed.svg",
	"zenflow.svg",
	"zoho.svg",
	"zoom.svg"
];
const PUBLIC_ICON_PICKER_EXCLUDED = new Set(["empty.svg"]);
function getPublicIconPickerFilenames() {
	return PUBLIC_ICON_FILENAMES.filter((filename) => !PUBLIC_ICON_PICKER_EXCLUDED.has(filename));
}
var COVER_BUILT_IN_ICON_CATEGORY_DEFINITIONS = [
	{
		id: "appwrite",
		label: "Appwrite"
	},
	{
		id: "frameworks",
		label: "Frameworks"
	},
	{
		id: "languages",
		label: "Languages"
	},
	{
		id: "ai",
		label: "AI & IDEs"
	},
	{
		id: "cloud",
		label: "Cloud & hosting"
	},
	{
		id: "devtools",
		label: "Dev tools"
	},
	{
		id: "design",
		label: "Design & storage"
	},
	{
		id: "browsers",
		label: "Browsers"
	},
	{
		id: "auth",
		label: "Auth & OAuth"
	},
	{
		id: "messaging",
		label: "Messaging"
	},
	{
		id: "payments",
		label: "Payments"
	},
	{
		id: "social",
		label: "Social"
	},
	{
		id: "business",
		label: "Business"
	}
];
var COVER_BUILT_IN_ICON_CATEGORY_ICONS = {
	appwrite: [
		"appwrite.svg",
		"appwrite-white.svg",
		"open-source.svg"
	],
	frameworks: [
		"react.svg",
		"react-native.svg",
		"nextjs.svg",
		"remix.svg",
		"tanstack.svg",
		"vue.svg",
		"nuxt.svg",
		"angular.svg",
		"analog.svg",
		"svelte.svg",
		"solid.svg",
		"refine.svg",
		"astro.svg",
		"vite.svg",
		"qwik.svg",
		"docusaurus.svg",
		"lynx.svg"
	],
	languages: [
		"js.svg",
		"ts.svg",
		"node.svg",
		"deno.svg",
		"bun.svg",
		"python.svg",
		"dart.svg",
		"php.svg",
		"ruby.svg",
		"dotnet.svg",
		"go.svg",
		"rust.svg",
		"swift.svg",
		"kotlin.svg",
		"java.svg",
		"cpp.svg",
		"flutter.svg",
		"android.svg",
		"apple.svg",
		"ios.svg",
		"html5.svg",
		"css3.svg",
		"linux.svg",
		"code.svg"
	],
	ai: [
		"anthropic.svg",
		"claude.svg",
		"chatgpt.svg",
		"cursor-ai.svg",
		"opencode.svg",
		"windsurf.svg",
		"zed.svg",
		"vscode.svg",
		"vs_code.svg",
		"lovable.svg",
		"emergent.svg",
		"bolt.svg",
		"zenflow.svg",
		"google-antigravity.svg",
		"imagine.svg",
		"perplexity.svg",
		"elevenlabs.svg",
		"hugging-face.svg"
	],
	cloud: [
		"amazon.svg",
		"google.svg",
		"microsoft.svg",
		"vercel.svg",
		"digitalocean.svg",
		"coolify.svg",
		"docker.svg",
		"terraform.svg",
		"firebase.svg",
		"supabase.svg",
		"nhost.svg",
		"globe.svg",
		"rclone.svg",
		"cyberduck.svg"
	],
	devtools: [
		"github.svg",
		"github-circle.svg",
		"gitlab.svg",
		"bitbucket.svg",
		"git.svg",
		"gitea.svg",
		"gogs.svg",
		"forgejo.svg",
		"graphql.svg",
		"npm.svg",
		"pnpm.svg",
		"redis.svg",
		"mongo-db.svg",
		"neon.svg",
		"neo4j.svg",
		"upstash.svg",
		"algolia.svg",
		"rxdb.svg",
		"sentry.svg",
		"appsignal.svg",
		"raygun.svg",
		"wordpress.svg"
	],
	design: [
		"figma.svg",
		"box.svg",
		"dropbox.svg",
		"autodesk.svg",
		"unity.svg"
	],
	browsers: [
		"firefox.svg",
		"opera.svg",
		"safari.svg",
		"microsoft_edge.svg"
	],
	auth: [
		"auth0.svg",
		"authentik.svg",
		"oidc.svg",
		"okta.svg",
		"discord-simple.svg",
		"discord.svg",
		"notion.svg",
		"x.svg",
		"facebook.svg",
		"linkedin.svg"
	],
	messaging: [
		"mailgun.svg",
		"sendgrid.svg",
		"twilio.svg",
		"msg91.svg",
		"vonage.svg",
		"textmagic.svg",
		"telesign.svg",
		"resend.svg",
		"slack.svg",
		"whatsapp.svg",
		"telegram.svg",
		"mqtt.svg",
		"skype.svg"
	],
	payments: [
		"stripe.svg",
		"paypal.svg",
		"lemon-squeezy.svg"
	],
	social: [
		"twitter.svg",
		"youtube.svg",
		"instagram.svg",
		"tiktok.svg",
		"reddit.svg",
		"medium.svg",
		"product-hunt.svg",
		"ycombinator.svg",
		"dribbble.svg",
		"behance.svg",
		"spotify.svg",
		"twitch.svg",
		"vimeo.svg",
		"vk.svg",
		"pinterest.svg",
		"yahoo.svg",
		"disqus.svg",
		"dailymotion.svg",
		"daily-dev.svg",
		"bitly.svg",
		"etsy.svg",
		"tumbir.svg",
		"yandex.svg"
	],
	business: [
		"salesforce.svg",
		"zoho.svg",
		"podio.svg",
		"zoom.svg",
		"yammer.svg",
		"tradeshift.svg"
	]
};
function formatCoverBuiltInIconLabel(filename) {
	return filename.replace(/\.svg$/i, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function createPublicIconEntry(filename) {
	return {
		path: `/icons/${filename}`,
		label: formatCoverBuiltInIconLabel(filename)
	};
}
function buildCoverBuiltInIconCategories() {
	const pickerFilenames = new Set(getPublicIconPickerFilenames());
	const categorized = /* @__PURE__ */ new Set();
	const categories = COVER_BUILT_IN_ICON_CATEGORY_DEFINITIONS.map((definition) => {
		const icons = (COVER_BUILT_IN_ICON_CATEGORY_ICONS[definition.id] ?? []).filter((filename) => {
			if (!pickerFilenames.has(filename)) return false;
			categorized.add(filename);
			return true;
		}).map(createPublicIconEntry);
		return {
			...definition,
			icons
		};
	}).filter((category) => category.icons.length > 0);
	const uncategorized = getPublicIconPickerFilenames().filter((filename) => !categorized.has(filename)).sort((a, b) => a.localeCompare(b));
	if (uncategorized.length > 0) categories.push({
		id: "other",
		label: "Other",
		icons: uncategorized.map(createPublicIconEntry)
	});
	return categories;
}
const COVER_BUILT_IN_ICON_CATEGORIES = buildCoverBuiltInIconCategories();
var COVER_BUILT_IN_ICON_PATH_SET = new Set(COVER_BUILT_IN_ICON_CATEGORIES.flatMap((category) => category.icons.map((icon) => icon.path)));
const COVER_BUILT_IN_ICONS = COVER_BUILT_IN_ICON_CATEGORIES.flatMap((category) => category.icons).sort((a, b) => a.label.localeCompare(b.label));
function isCoverBuiltInIconPath(value) {
	if (!value) return false;
	return COVER_BUILT_IN_ICON_PATH_SET.has(value);
}
function getCoverBuiltInIconEntry(value) {
	if (!isCoverBuiltInIconPath(value)) return null;
	return COVER_BUILT_IN_ICONS.find((icon) => icon.path === value) ?? null;
}
function searchCoverBuiltInIcons(query) {
	const normalized = query.trim().toLowerCase();
	if (!normalized) return COVER_BUILT_IN_ICONS;
	return COVER_BUILT_IN_ICONS.filter((icon) => {
		return (icon.path.split("/").pop()?.toLowerCase() ?? "").includes(normalized) || icon.label.toLowerCase().includes(normalized) || icon.path.toLowerCase().includes(normalized);
	});
}
function IconPickerGrid({ visibleIcons, selectedPath, isCustomImage, onSelect }) {
	if (visibleIcons.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "px-2 py-10 text-center text-[13px] text-muted-foreground",
		children: "No icons match your search."
	});
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-4 gap-2 sm:grid-cols-5",
		children: visibleIcons.map((icon) => {
			const selected = !isCustomImage && selectedPath === icon.path;
			return /* @__PURE__ */ jsx("button", {
				type: "button",
				title: icon.label,
				"aria-label": icon.label,
				"aria-pressed": selected,
				onClick: () => onSelect(icon.path),
				className: cn("flex aspect-square items-center justify-center rounded-md border p-2 transition-colors", selected ? "border-foreground/30 bg-accent" : "border-transparent hover:border-border hover:bg-accent/50"),
				children: /* @__PURE__ */ jsx(CoverIconPreview, {
					src: icon.path,
					colorMode: "app",
					size: 32
				})
			}, icon.path);
		})
	});
}
function LucideIconPickerGrid({ visibleIcons, selectedName, isCustomImage, onSelect }) {
	if (visibleIcons.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "px-2 py-10 text-center text-[13px] text-muted-foreground",
		children: "No Lucide icons match your search."
	});
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-4 gap-2 sm:grid-cols-5",
		children: visibleIcons.map((iconName) => {
			const selected = !isCustomImage && selectedName === iconName;
			const value = formatCoverLucideIconValue(iconName);
			return /* @__PURE__ */ jsx("button", {
				type: "button",
				title: formatCoverLucideIconLabel(iconName),
				"aria-label": formatCoverLucideIconLabel(iconName),
				"aria-pressed": selected,
				onClick: () => onSelect(value),
				className: cn("flex aspect-square items-center justify-center rounded-md border p-2 transition-colors", selected ? "border-foreground/30 bg-accent" : "border-transparent hover:border-border hover:bg-accent/50"),
				children: /* @__PURE__ */ jsx(CoverIconPreview, {
					src: value,
					colorMode: "app",
					size: 32
				})
			}, iconName);
		})
	});
}
function CoverBuiltInIconPicker({ id, label, description, value, isCustomImage, onSelectBuiltIn }) {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [categoryId, setCategoryId] = useState("all");
	const [source, setSource] = useState(() => isCoverLucideIconValue(value) ? "lucide" : "brand");
	const [lucideIconNames, setLucideIconNames] = useState(null);
	useEffect(() => {
		if (!open) return;
		loadCoverLucideIconNames().then((names) => {
			setLucideIconNames(names);
		});
	}, [open]);
	const selectedIcon = isCustomImage ? null : getCoverBuiltInIconEntry(value);
	const selectedLucideName = isCustomImage ? null : parseCoverLucideIconName(value);
	const visibleBrandIcons = useMemo(() => {
		const searched = searchCoverBuiltInIcons(query);
		if (categoryId === "all") return searched;
		const category = COVER_BUILT_IN_ICON_CATEGORIES.find((item) => item.id === categoryId);
		if (!category) return searched;
		const categoryPaths = new Set(category.icons.map((icon) => icon.path));
		return searched.filter((icon) => categoryPaths.has(icon.path));
	}, [categoryId, query]);
	const visibleLucideIcons = useMemo(() => searchCoverLucideIcons(query, lucideIconNames), [lucideIconNames, query]);
	const lucideSearchMeta = useMemo(() => getCoverLucideIconSearchMeta(query, lucideIconNames), [lucideIconNames, query]);
	const handleOpenChange = (nextOpen) => {
		setOpen(nextOpen);
		if (nextOpen) {
			setSource(isCoverLucideIconValue(value) ? "lucide" : "brand");
			return;
		}
		setQuery("");
		setCategoryId("all");
	};
	const handleSelect = (path) => {
		onSelectBuiltIn(path);
		handleOpenChange(false);
	};
	const selectedLabel = selectedLucideName != null ? formatCoverLucideIconLabel(selectedLucideName) : selectedIcon?.label;
	const selectedPath = selectedLucideName != null ? formatCoverLucideIconValue(selectedLucideName) : selectedIcon?.path;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: `${id}-choose`,
				className: "text-[13px]",
				children: label
			}), description ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] text-muted-foreground",
				children: description
			}) : null] }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-3",
				children: [
					selectedPath && !isCustomImage ? /* @__PURE__ */ jsx(CoverIconPreview, {
						src: selectedPath,
						colorMode: "app",
						size: 40
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-dashed border-border bg-background text-[11px] text-muted-foreground",
						children: "None"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "min-w-0 flex-1",
						children: selectedLabel && selectedPath && !isCustomImage ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
							className: "truncate text-[13px] font-medium text-foreground",
							children: selectedLabel
						}), /* @__PURE__ */ jsx("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: selectedPath
						})] }) : /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: "No icon selected"
						})
					}),
					/* @__PURE__ */ jsx(Button, {
						id: `${id}-choose`,
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 shrink-0 text-[12px]",
						onClick: () => setOpen(true),
						children: "Choose icon"
					})
				]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open,
				onOpenChange: handleOpenChange,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "flex max-h-[min(85dvh,640px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-lg",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: label }), description ? /* @__PURE__ */ jsx(DialogDescription, {
								className: "mt-2 text-[13px]",
								children: description
							}) : null]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-3 overflow-y-auto px-6 py-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-1.5",
									children: [/* @__PURE__ */ jsx(SourceChip, {
										active: source === "brand",
										onClick: () => setSource("brand"),
										label: "Brand icons"
									}), /* @__PURE__ */ jsx(SourceChip, {
										active: source === "lucide",
										onClick: () => setSource("lucide"),
										label: "Lucide"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
										id: `${id}-search`,
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: source === "lucide" ? "Search Lucide icons..." : "Search brand icons...",
										className: "h-9 ps-8 text-[13px]"
									})]
								}),
								source === "brand" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-1.5",
									children: [/* @__PURE__ */ jsx(CategoryChip, {
										active: categoryId === "all",
										onClick: () => setCategoryId("all"),
										label: "All"
									}), COVER_BUILT_IN_ICON_CATEGORIES.map((category) => /* @__PURE__ */ jsx(CategoryChip, {
										active: categoryId === category.id,
										onClick: () => setCategoryId(category.id),
										label: category.label
									}, category.id))]
								}), /* @__PURE__ */ jsx(IconPickerGrid, {
									visibleIcons: visibleBrandIcons,
									selectedPath: selectedIcon?.path ?? null,
									isCustomImage,
									onSelect: handleSelect
								})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [!query.trim() ? /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: "Popular Lucide icons. Search to browse the full library."
								}) : !lucideSearchMeta.isLibraryLoaded ? /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: "Searching popular icons while the full Lucide library loads."
								}) : lucideSearchMeta.isLimited ? /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										"Showing ",
										visibleLucideIcons.length,
										" of ",
										lucideSearchMeta.totalMatches,
										" ",
										"matches. Refine your search to narrow results."
									]
								}) : null, /* @__PURE__ */ jsx(LucideIconPickerGrid, {
									visibleIcons: visibleLucideIcons,
									selectedName: selectedLucideName,
									isCustomImage,
									onSelect: handleSelect
								})] })
							]
						})
					]
				})
			})
		]
	});
}
function SourceChip({ active, onClick, label }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		className: cn("rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors", active ? "border-foreground/30 bg-accent text-foreground" : "border-border text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
		children: label
	});
}
function CategoryChip({ active, onClick, label }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		className: cn("rounded-md px-1.5 py-0.5 text-[10px] font-medium transition-colors", active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
		children: label
	});
}
var THUMB_SOURCE_SIZE = 80;
var THUMB_DISPLAY_SIZE = 24;
function CoverThemePreviewThumb({ themeId, className }) {
	return /* @__PURE__ */ jsx("img", {
		src: useMemo(() => buildCoverOgBackgroundDataUri(themeId, THUMB_SOURCE_SIZE, THUMB_SOURCE_SIZE), [themeId]),
		alt: "",
		"aria-hidden": true,
		draggable: false,
		width: THUMB_DISPLAY_SIZE,
		height: THUMB_DISPLAY_SIZE,
		className: cn("size-6 shrink-0 rounded border border-border object-cover", className)
	});
}
function CoverThemeSelectItem({ theme }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
		value: theme.id,
		className: cn("relative flex w-full cursor-pointer items-start gap-2.5 rounded-sm py-2 pe-8 ps-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"),
		children: [
			/* @__PURE__ */ jsx(CoverThemePreviewThumb, {
				themeId: theme.id,
				className: "mt-0.5"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx(SelectPrimitive.ItemText, {
					className: "block text-[13px] leading-snug text-foreground",
					children: theme.label
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[11px] leading-snug text-muted-foreground",
					children: theme.description
				})]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "absolute end-2 top-2 flex size-3.5 items-center justify-center",
				children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) })
			})
		]
	});
}
function CoverThemeSelect({ theme, onThemeChange, className }) {
	const editorTheme = resolveCoverEditorThemeId(theme);
	const selectedTheme = getCoverTheme(editorTheme);
	return /* @__PURE__ */ jsxs(Select, {
		value: editorTheme,
		onValueChange: (value) => {
			onThemeChange(value);
		},
		children: [/* @__PURE__ */ jsxs(SelectTrigger, {
			className: className ?? "h-8 w-full text-[12px]",
			children: [/* @__PURE__ */ jsx(CoverThemePreviewThumb, { themeId: editorTheme }), /* @__PURE__ */ jsx(SelectValue, { children: selectedTheme.label })]
		}), /* @__PURE__ */ jsx(SelectContent, {
			className: "min-w-[min(100vw-2rem,360px)]",
			children: ["light", "dark"].map((family) => /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, {
				className: "text-[11px] font-semibold uppercase tracking-wider",
				children: family === "light" ? "Light backgrounds" : "Dark backgrounds"
			}), listCoverEditorThemesByFamily(family).map((themeOption) => /* @__PURE__ */ jsx(CoverThemeSelectItem, { theme: themeOption }, themeOption.id))] }, family))
		})]
	});
}
function RenameSavedGenerationDialog({ open, onOpenChange, initialName, maxLength, isSubmitting = false, onSubmit }) {
	const [name, setName] = useState(initialName);
	useEffect(() => {
		if (open) setName(initialName);
	}, [initialName, open]);
	const trimmed = name.trim();
	const canSubmit = trimmed.length > 0 && trimmed.length <= maxLength && !isSubmitting;
	const handleSubmit = () => {
		if (!canSubmit) return;
		onSubmit(trimmed);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Update name" }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: "This name is shown in your saved list."
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx(Input, {
						value: name,
						onChange: (event) => setName(event.target.value),
						maxLength,
						placeholder: "Name",
						className: "h-9 text-[13px]",
						autoFocus: true,
						onKeyDown: (event) => {
							if (event.key === "Enter") {
								event.preventDefault();
								handleSubmit();
							}
						}
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isSubmitting,
						onClick: () => onOpenChange(false),
						children: "Cancel"
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						disabled: !canSubmit,
						onClick: handleSubmit,
						children: "Update"
					})]
				})
			]
		})
	});
}
function GeneratorSavedGenerationsPanel({ generations, isAuthenticated, isDeleting = false, isRenaming = false, maxNameLength, emptyTitle, emptyDescription, signInHint, icon: Icon$1, onOpenGeneration, onRenameGeneration, onDeleteGeneration }) {
	const [renameTarget, setRenameTarget] = useState(null);
	const isBusy = isDeleting || isRenaming;
	const handleRenameSubmit = async (name) => {
		if (!renameTarget) return;
		await onRenameGeneration(renameTarget.id, name);
		setRenameTarget(null);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			!isAuthenticated ? /* @__PURE__ */ jsx("p", {
				className: "mb-4 text-[12px] text-muted-foreground",
				children: signInHint
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-card/50",
				children: generations.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
					icon: Icon$1,
					title: emptyTitle,
					description: emptyDescription,
					isEmpty: true,
					variant: "centered",
					className: "min-h-0 flex-1 py-8"
				}) : /* @__PURE__ */ jsx("ul", {
					className: cn("min-h-0 flex-1 divide-y divide-border overflow-y-auto", isBusy && "pointer-events-none opacity-60"),
					children: generations.map((generation) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-3 bg-card/30 px-4 py-3.5 transition-colors hover:bg-accent/40",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground",
								children: /* @__PURE__ */ jsx(Icon$1, { className: "size-4" })
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onOpenGeneration(generation.id),
								className: "min-w-0 flex-1 text-start",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block truncate text-[13px] font-medium text-foreground",
									children: generation.name
								}), /* @__PURE__ */ jsxs("span", {
									className: "mt-0.5 block truncate text-[11px] text-muted-foreground",
									children: [
										generation.subtitle ? /* @__PURE__ */ jsxs(Fragment, { children: [generation.subtitle, /* @__PURE__ */ jsx("span", {
											className: "mx-1.5 text-border",
											children: "·"
										})] }) : null,
										"Updated",
										" ",
										/* @__PURE__ */ jsx(DateTooltip, { date: new Date(generation.updatedAt).toISOString() })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex shrink-0 items-center gap-1.5",
								children: [
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										className: "h-7 text-[12px]",
										onClick: () => onOpenGeneration(generation.id),
										children: "Open"
									}),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "icon",
										className: "size-7 shrink-0 text-muted-foreground",
										disabled: isBusy,
										"aria-label": "Update name",
										onClick: () => setRenameTarget(generation),
										children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
									}),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "icon",
										className: "size-7 shrink-0 text-muted-foreground",
										disabled: isBusy,
										"aria-label": "Delete",
										onClick: () => onDeleteGeneration(generation.id),
										children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
									})
								]
							})
						]
					}, generation.id))
				})
			}),
			/* @__PURE__ */ jsx(RenameSavedGenerationDialog, {
				open: renameTarget != null,
				onOpenChange: (open) => {
					if (!open) setRenameTarget(null);
				},
				initialName: renameTarget?.name ?? "",
				maxLength: maxNameLength,
				isSubmitting: isRenaming,
				onSubmit: handleRenameSubmit
			})
		]
	});
}
function GeneratorStartShell({ title, description, savedTitle, templatesTitle, saved, templates }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 flex-1 flex-col px-4 py-6 sm:px-6 lg:py-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6 shrink-0 space-y-2",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[22px] font-semibold tracking-tight text-foreground",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "max-w-3xl text-[13px] text-muted-foreground",
					children: description
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid min-h-0 min-w-0 flex-1 gap-8 overflow-hidden lg:grid-cols-5 lg:gap-10",
				children: [/* @__PURE__ */ jsx(CreateWizardLeftColumn, {
					title: savedTitle,
					children: saved
				}), /* @__PURE__ */ jsx(CreateWizardRightColumn, {
					title: templatesTitle,
					children: templates
				})]
			})]
		})
	});
}
var coverDrafts = /* @__PURE__ */ new Map();
var diagramDrafts = /* @__PURE__ */ new Map();
function setCoverGenerationDraft(entry) {
	coverDrafts.set(entry.id, entry);
}
function getCoverGenerationDraft(id) {
	return coverDrafts.get(id);
}
function deleteCoverGenerationDraft(id) {
	return coverDrafts.delete(id);
}
function setDiagramGenerationDraft(entry) {
	diagramDrafts.set(entry.id, entry);
}
function getDiagramGenerationDraft(id) {
	return diagramDrafts.get(id);
}
function deleteDiagramGenerationDraft(id) {
	return diagramDrafts.delete(id);
}
function useRouteGenerationEditor({ routeGenerationId, startTo, editorTo, generations, getGenerationId, loadGeneration, resolveDraft, migrateLegacyIfNeeded, onEnterEditor, onLeaveEditor, notFoundMessage }) {
	const navigate = useNavigate();
	const [activeGenerationId, setActiveGenerationId] = useState(null);
	const activeGenerationIdRef = useRef(null);
	activeGenerationIdRef.current = activeGenerationId;
	const loadedRouteIdRef = useRef(null);
	const previousRouteIdRef = useRef(routeGenerationId);
	const [isRouteSyncing, setIsRouteSyncing] = useState(Boolean(routeGenerationId));
	const generationsRef = useRef(generations);
	const getGenerationIdRef = useRef(getGenerationId);
	const loadGenerationRef = useRef(loadGeneration);
	const resolveDraftRef = useRef(resolveDraft);
	const migrateLegacyIfNeededRef = useRef(migrateLegacyIfNeeded);
	const onEnterEditorRef = useRef(onEnterEditor);
	const onLeaveEditorRef = useRef(onLeaveEditor);
	generationsRef.current = generations;
	getGenerationIdRef.current = getGenerationId;
	loadGenerationRef.current = loadGeneration;
	resolveDraftRef.current = resolveDraft;
	migrateLegacyIfNeededRef.current = migrateLegacyIfNeeded;
	onEnterEditorRef.current = onEnterEditor;
	onLeaveEditorRef.current = onLeaveEditor;
	const phase = routeGenerationId ? "editor" : "start";
	useEffect(() => {
		const previousRouteId = previousRouteIdRef.current;
		previousRouteIdRef.current = routeGenerationId;
		if (!routeGenerationId) {
			loadedRouteIdRef.current = null;
			if (activeGenerationIdRef.current !== null) setActiveGenerationId(null);
			setIsRouteSyncing(false);
			if (previousRouteId) onLeaveEditorRef.current?.(previousRouteId);
			return;
		}
		if (loadedRouteIdRef.current === routeGenerationId) return;
		let cancelled = false;
		setIsRouteSyncing(true);
		(async () => {
			const draft = resolveDraftRef.current?.(routeGenerationId);
			let list = generationsRef.current;
			try {
				const migrated = await migrateLegacyIfNeededRef.current();
				if (Array.isArray(migrated)) list = migrated;
			} catch {}
			if (cancelled) return;
			const generation = list.find((item) => getGenerationIdRef.current(item) === routeGenerationId) ?? draft ?? resolveDraftRef.current?.(routeGenerationId);
			if (!generation) {
				if (loadedRouteIdRef.current === routeGenerationId) return;
				setIsRouteSyncing(false);
				toast.error(notFoundMessage);
				navigate({
					to: startTo,
					replace: true
				});
				return;
			}
			loadGenerationRef.current(generation);
			loadedRouteIdRef.current = routeGenerationId;
			setActiveGenerationId(routeGenerationId);
			setIsRouteSyncing(false);
			onEnterEditorRef.current?.();
		})();
		return () => {
			cancelled = true;
		};
	}, [
		navigate,
		notFoundMessage,
		routeGenerationId,
		routeGenerationId ? generations.some((item) => getGenerationId(item) === routeGenerationId) || Boolean(resolveDraft?.(routeGenerationId)) : false,
		startTo
	]);
	return {
		phase,
		activeGenerationId,
		activeGenerationIdRef,
		isRouteSyncing,
		openEditorRoute: useCallback((generationId) => {
			navigate({
				to: editorTo,
				params: { generationId }
			});
		}, [editorTo, navigate]),
		backToStart: useCallback((beforeNavigate) => {
			beforeNavigate?.();
			navigate({ to: startTo });
		}, [navigate, startTo])
	};
}
export { getDiagramGenerationDraft as a, GeneratorStartShell as c, CoverBuiltInIconPicker as d, CoverBrandBackgroundPreview as f, GeneratorColumnsResizableLayout as h, getCoverGenerationDraft as i, GeneratorSavedGenerationsPanel as l, CoverIconPreview as m, deleteCoverGenerationDraft as n, setCoverGenerationDraft as o, CoverHeroBrowserFrame as p, deleteDiagramGenerationDraft as r, setDiagramGenerationDraft as s, useRouteGenerationEditor as t, CoverThemeSelect as u };
