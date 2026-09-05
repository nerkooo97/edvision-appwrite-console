import { a as truncateMiddle, t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { i as getActiveLanguage } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { n as listConsoleProjects } from "./console-projects-C0b0tMaH.js";
import { g as isClientQueryEnabled, o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { U as organizationProjectScopeQueryOptions } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { $a as CONSOLE_PROTOCOL_ID, Aa as useCreateAssistantAutomation, Ba as useScoreAssistantMessage, Bi as AGENT_ACTIVITY_DESCRIPTION, Ca as useAssistantAutomations, Co as normalizeTimeline, Da as useAssistantMemories, Ea as useAssistantMcpConnections, Fa as useDeleteAssistantAutomation, Ga as useUpdateAssistantMessage, Gi as AGENT_TOKENS_BREAKDOWN_SERIES, Ha as useUpdateAssistantConversation, Hi as AGENT_AUTOMATIONS_DESCRIPTION, Ia as useDeleteAssistantConversation, Ja as useUpsertAssistantMcpConnection, Ji as ASSISTANT_ATTACHMENTS_BUCKET_ID, Ka as useUpdateAssistantModel, Ki as formatAgentCountTotal, La as useDeleteAssistantMcpConnection, Ma as useCreateAssistantMemory, Na as useCreateAssistantMessage, Oa as useAssistantMessages, Pa as useCreateAssistantModel, Qa as resolveCatalogToolName, Qi as ASSISTANT_SETTINGS_PAGE_SIZE_OPTIONS, Ra as useDeleteAssistantMemory, Ri as refetchAccountAgentUsageQueries, Sa as useAssistantAutomationRuns, So as isAssistantMessageInFlight, Ta as useAssistantConversations, To as unscopedTools, Ua as useUpdateAssistantMcpConnection, Ui as AGENT_DOCS_HREF, Va as useUpdateAssistantAutomation, Vi as AGENT_ACTIVITY_SERIES, Wa as useUpdateAssistantMemory, Wi as AGENT_TOKENS_BREAKDOWN_DESCRIPTION, Xa as countResourceMutations, Xi as ASSISTANT_MODELS_PICKER_PAGE_SIZE, Ya as classifyResourceMutation, Yi as ASSISTANT_MESSAGES_PAGE_SIZE, Za as hasResourceMutations, Zi as ASSISTANT_SETTINGS_PAGE_SIZE, _a as fetchAssistantMessages, _o as getAssistantBubblePhase, ao as consoleToolApplyKey, bo as getAssistantConversationStatusTone, ca as assistantModelsInfiniteQueryOptions, co as normalizeCardId, do as resolveConsoleChartHref, eo as CONSOLE_REFRESH_SCOPE_KEYS, fo as resolveConsoleListHref, go as getAssistantAgentLabel, ha as fetchAssistantMcpConnections, ho as buildTurnView, io as consoleCtaLabel, ja as useCreateAssistantConversation, ka as useAssistantModels, lo as normalizeConsolePath, mo as scrollToConsoleCard, ni as resolveBandwidthStackedYAxisDomain, no as collectConsoleToolResults, oo as isConsoleToolName, po as resolveConsoleResourceHref, qa as useUploadAssistantAttachments, qi as formatAgentCountValue, ro as collectRenderableConsoleActions, sa as assistantModelQueryOptions, so as isSideEffectConsoleAction, to as collectConsoleCtaActions, uo as parseConsoleEnvelope, va as fetchAssistantMessagesWithTools, vo as getAssistantConversationStatusDotClass, wa as useAssistantConversation, wo as toolsForAgent, xa as useAssistantAttachmentFiles, xo as isAssistantConversationInFlight, yo as getAssistantConversationStatusLabel, za as useDeleteAssistantModel, zi as useAccountAgentUsage } from "./hooks-BONwG3Mt.js";
import { A as useAIChatConversationsWidth, At as parsePinnedProjectIds, M as useAIChatPinnedConversationIds, Nt as resolvePostAuthOrganizationId, Tt as parseOrganizationIdFromPath, Yr as parseAIChatConversationsWidthPx, go as useConsoleTeam, j as useAIChatPanelOpen, k as useAIChatActiveConversationId, s as consoleAccountQueryOptions } from "./auth-BPuxYQAc.js";
import { R as useProject, U as useProjectsForTeamInfinite, _ as formatProjectNameForDisplay, o as activeProjectsQueryOptions } from "./projects-BaTJenfQ.js";
import { J as effectivePanelGroupWidthPx, V as clampAIChatConversationsSidebarWidthPx, i as AI_CHAT_MAIN_MIN_WIDTH_PX, n as AI_CHAT_CONVERSATIONS_SIDEBAR_MAX_WIDTH_PX, nt as syncPanelGroupFirstPanePx, q as computeTwoPanelHorizontalLayout, r as AI_CHAT_CONVERSATIONS_SIDEBAR_MIN_WIDTH_PX, t as AI_CHAT_CONVERSATIONS_SIDEBAR_DEFAULT_WIDTH_PX } from "./resizable-layout-BVnWw80t.js";
import { c as resolveUsageChartIntervalForRange, l as getStableUsageChartDateRange, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { t as isMarketingPage } from "./is-marketing-page-dgx45Oqy.js";
import { H as fillGaugeChartPointsGaps, J as sumUsageChartPoints, V as fillChartPointsGaps } from "./affiliates-BOg1SHC6.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { a as formatCompactBytes, c as formatGbHoursValue, i as createUsageChartAxisTickFormatter, l as getChartSeriesMax, o as formatCompactCount, r as createCompactCountAxisTickFormatter, s as formatGbHoursTotal } from "./format-metric-6jsfxd5f.js";
import { n as useDebugMode } from "./DebugMode-DFSPYy81.js";
import { a as SPHERE_SIZE_SCALE_MAX, c as ThinkingBubble, i as SPHERE_SIZE_SCALE_DEFAULT, l as defaultParticleCountForSize, n as SPHERE_PARTICLE_COUNT_MIN, o as SPHERE_SIZE_SCALE_MIN, r as SPHERE_PARTICLE_COUNT_STEP, s as SPHERE_SIZE_SCALE_STEP, t as SPHERE_PARTICLE_COUNT_MAX, u as scaleSphereSize } from "./ThinkingBubble-U48KAaRY.js";
import { t as Slider } from "./slider-BKjrzSmD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { i as openInNewTab, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { n as resolveFenceCodeLanguage, t as resolveFenceCodeLabel } from "./code-language-RiwE0Xft.js";
import { l as DOCS_TABLE_CELL_TEXT_CLASS } from "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { a as agentIndexPath, c as preferredOrganizationId, d as completeMcpOAuthConnect, f as connectMcpOAuthSilently, h as startMcpOAuthConnect, i as agentConversationPath, m as readPendingMcpOAuthSession, n as agentAutomationDetailPath, o as agentSettingsPath, r as agentAutomationsPath, s as isAgentPagePath, t as agentAutomationCreatePath, u as ASSISTANT_MCP_OAUTH_MESSAGE_TYPE } from "./agent-paths-CTRM_FvO.js";
import { o as MCP_SERVER_NAME } from "./mcp-CgjPVMsn.js";
import { a as getEnvMcpEndpointUrl, c as subscribeToDebugMcpEndpointChange, i as getEffectiveMcpEndpointUrl, n as getDebugCustomMcpEndpoint, o as normalizeMcpEndpointUrl, r as getDebugMcpEndpointOverride } from "./debug-mcp-endpoint-B4hkK2QF.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as formatCronExpression, t as CronScheduleEditor } from "./CronScheduleEditor-Dctcdb1H.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { n as usePlatform, t as useKeyboardShortcut } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { i as formatDisplayKeys } from "./display-DbRQIyxk.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import { t as SettingsLayoutShell } from "./SettingsLayoutShell-B7hNlMNA.js";
import { t as DateRangePicker } from "./DateRangePicker-BwmpXdP_.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./tooltip-DUssQZhw.js";
import { t as UsageChartIntervalToggle } from "./UsageChartIntervalToggle-Bbo7DqjH.js";
import { j as Tooltip, k as ResponsiveContainer } from "./CartesianChart-IK-OMdOm.js";
import { n as Bar, t as BarChart } from "./BarChart-DNAI4HHT.js";
import { n as Area, t as AreaChart } from "./AreaChart-BppVFiiZ.js";
import { n as useUsageChartBrushSelect, t as UsageChartBrushReferenceArea } from "./UsageChartBrushReferenceArea-PlRYgCRx.js";
import { t as CartesianGrid } from "./CartesianGrid-BKkZbBF1.js";
import { a as USAGE_CHART_RESPONSIVE_CONTAINER_PROPS, i as USAGE_CHART_MARGIN, n as UsageChartXAxis, r as UsageChartYAxis, s as XAxis } from "./ChartXAxis-Sg7PTtJF.js";
import { n as OVERVIEW_CHART_HEIGHT } from "./chart-panel-CCGEGd61.js";
import { a as UsageMetricCardFooter, o as UsageMetricCardShell, t as UsageTimeSeriesChartCard } from "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { n as DatabaseTypeIcon } from "./DatabaseTypeIcon-CqLDDPFP.js";
import { t as CHART_ANIMATION_DISABLED } from "./chart-animation-CE90Rh4_.js";
import { a as isConsoleRightPanePath } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as ChartSeriesDot } from "./ChartSeriesDot-DRSaLZ-2.js";
import { t as UsageSectionChartError } from "./UsageSectionChartError-Bjd51l80.js";
import { t as shouldShowUsageChartSkeleton } from "./usage-chart-loading-qgdN2UV0.js";
import { h as verticalPanelResizeHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { n as ResizablePanel, r as ResizablePanelGroup, t as ResizableHandle } from "./resizable-CfBrThFG.js";
import { n as captureExceptionWithContext } from "./SentryContext-BM5Kx9zs.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { n as useProjectConnectDialog, s as useCliShellOptional } from "./ProjectConnectDialogContext-DgcmISfV.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { t as registerConsoleRealtimeListener } from "./console-hub-DIz9opmN.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useMatches, useNavigate, useParams } from "@tanstack/react-router";
import { createContext, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ImageFormat, Query } from "@appwrite.io/console";
import { keepPreviousData, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { format, parseISO, startOfDay, subDays } from "date-fns";
import { toast } from "sonner";
import { AlertCircle, Archive, ArrowUp, BarChart3, Box, Brain, Bug, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsUpDown, Circle, Clock, Copy, Cpu, Database, Download, ExternalLink, File, Folder, Globe, HardDrive, History, Loader2, Mail, Maximize2, Mic, MicOff, PanelLeft, PanelLeftClose, PanelRight, Paperclip, Pencil, Phone, Pin, PinOff, Plus, RefreshCw, Route, Search, Send, Settings, Settings2, Square, Table2, ThumbsDown, ThumbsUp, Trash2, Users as Users$1, Volume2, VolumeOff, VolumeX, Wrench, X, Zap, ZoomIn, ZoomOut } from "lucide-react";
import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function usesThemeAwareFaviconHost() {
	if (typeof window === "undefined") return false;
	return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || false;
}
const FAVICON_MAP = {
	default:"/logo-icon.png",
	green: "/favicons/logo-green.png",
	blue: "/favicons/logo-blue.png",
	red: "/favicons/logo-red.png",
	theme: "/logo-theme.svg",
	"theme-green": "/favicons/logo-theme-green-light.png",
	"theme-blue": "/favicons/logo-theme-blue-light.png",
	"theme-red": "/favicons/logo-theme-red-light.png"
};
const FAVICON_VARIANT_LABELS = {
	default: "Default",
	green: "Green",
	blue: "Blue",
	red: "Red",
	theme: "Theme",
	"theme-green": "Theme + Green",
	"theme-blue": "Theme + Blue",
	"theme-red": "Theme + Red"
};
const FAVICON_SOURCE_LABELS = {
	default: "Default",
	"debug-menu": "Debug menu",
	"build-notifications": "Build notifications",
	"agent-conversation": "Agent conversation",
	"legacy-theme": "Legacy theme",
	"dynamic-favicon": "Theme-aware host",
	unknown: "Unknown"
};
var THEME_STATUS_FAVICONS = {
	"theme-green": {
		light: "/favicons/logo-theme-green-light.png",
		dark: "/favicons/logo-theme-green-dark.png"
	},
	"theme-blue": {
		light: "/favicons/logo-theme-blue-light.png",
		dark: "/favicons/logo-theme-blue-dark.png"
	},
	"theme-red": {
		light: "/favicons/logo-theme-red-light.png",
		dark: "/favicons/logo-theme-red-dark.png"
	}
};
var STATUS_VARIANTS = new Set([
	"green",
	"blue",
	"red",
	"theme-green",
	"theme-blue",
	"theme-red"
]);
var BLUE_VARIANTS = new Set(["blue", "theme-blue"]);
var activeStatusVariant = null;
var faviconStatus = {
	variant: "default",
	source: "default",
	reason: "Idle (default favicon)",
	updatedAt: 0
};
var faviconStatusListeners = /* @__PURE__ */ new Set();
function isThemeStatusVariant(variant) {
	return variant in THEME_STATUS_FAVICONS;
}
function prefersDarkColorScheme() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function faviconMimeType(href) {
	return href.endsWith(".png") ? "image/png" : "image/svg+xml";
}
function notifyFaviconStatusListeners() {
	for (const listener of faviconStatusListeners) listener(faviconStatus);
}
function recordFaviconStatus(variant, meta) {
	if (meta?.source || meta?.reason || meta?.detail !== void 0 || meta?.context) faviconStatus = {
		variant,
		source: meta.source ?? "unknown",
		reason: meta.reason ?? "Favicon updated",
		detail: meta.detail,
		context: meta.context,
		updatedAt: Date.now()
	};
	else faviconStatus = {
		...faviconStatus,
		variant
	};
	notifyFaviconStatusListeners();
}
function getFaviconStatus() {
	return faviconStatus;
}
function subscribeFaviconStatus(listener) {
	faviconStatusListeners.add(listener);
	listener(faviconStatus);
	return () => {
		faviconStatusListeners.delete(listener);
	};
}
function isBlueFaviconVariant(variant) {
	return !!variant && BLUE_VARIANTS.has(variant);
}
function isStatusFaviconVariant(variant) {
	return !!variant && STATUS_VARIANTS.has(variant);
}
function formatFaviconStatusSummary(status) {
	const variantLabel = FAVICON_VARIANT_LABELS[status.variant] ?? status.variant;
	if (status.source === "default" && !isStatusFaviconVariant(status.variant)) return variantLabel;
	return `${variantLabel} · ${status.reason}`;
}
function resolveFaviconHref(variant) {
	if (isThemeStatusVariant(variant)) {
		const paths = THEME_STATUS_FAVICONS[variant];
		return {
			href: prefersDarkColorScheme() ? paths.dark : paths.light,
			type: "image/png"
		};
	}
	const href = FAVICON_MAP[variant];
	return {
		href,
		type: faviconMimeType(href)
	};
}
function variantFromPathname(pathname) {
	for (const [variant, path] of Object.entries(FAVICON_MAP)) if (pathname.endsWith(path)) return variant;
	for (const [variant, paths] of Object.entries(THEME_STATUS_FAVICONS)) if (pathname.endsWith(paths.light) || pathname.endsWith(paths.dark)) return variant;
	return null;
}
function applyFaviconHref(href, options) {
	if (typeof document === "undefined") return;
	const type = options?.type ?? faviconMimeType(href);
	const resolvedHref = (options?.cacheBust ?? true) && !href.includes("?") ? `${href}?v=${Date.now()}` : href;
	const existing = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
	if (existing.length > 0) existing.forEach((node) => {
		if (!(node instanceof HTMLLinkElement)) return;
		node.type = type;
		node.href = resolvedHref;
	});
	else {
		const link = document.createElement("link");
		link.rel = "icon";
		link.type = type;
		link.href = resolvedHref;
		document.head.appendChild(link);
	}
	if (options?.source || options?.reason || options?.detail !== void 0 || options?.context) {
		let pathname = resolvedHref;
		try {
			pathname = new URL(resolvedHref, window.location.origin).pathname;
		} catch {}
		recordFaviconStatus(options.variant ?? variantFromPathname(pathname) ?? faviconStatus.variant, options);
	}
}
function applyFaviconVariant(variant, options) {
	activeStatusVariant = STATUS_VARIANTS.has(variant) ? variant : null;
	const { href, type } = resolveFaviconHref(variant);
	recordFaviconStatus(variant, options);
	applyFaviconHref(href, {
		type,
		cacheBust: options?.cacheBust
	});
}
function getDefaultFaviconVariant() {
	return usesThemeAwareFaviconHost() ? "theme" : "default";
}
if (typeof window !== "undefined") {
	faviconStatus = {
		variant: getDefaultFaviconVariant(),
		source: "default",
		reason: "Idle (default favicon)",
		updatedAt: 0
	};
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (activeStatusVariant && isThemeStatusVariant(activeStatusVariant)) applyFaviconVariant(activeStatusVariant);
	});
}
var MARKDOWN_TABLE_HEAD_CLASS = "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider whitespace-normal";
function normalizeStreamingMarkdown(content) {
	const normalized = content.replace(/\r\n/g, "\n");
	if ((normalized.match(/```/g) ?? []).length % 2 === 1) return `${normalized}\n\`\`\``;
	return normalized;
}
function resolveMarkdownCodeLanguage(className) {
	const language = className?.match(/language-([a-zA-Z0-9_-]+)/)?.[1];
	return resolveFenceCodeLanguage(language);
}
function isExternalDomainLink(href) {
	if (!href) return false;
	if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
	try {
		if (typeof window === "undefined") return /^https?:\/\//i.test(href) || href.startsWith("//");
		const current = new URL(window.location.href);
		const resolved = new URL(href, current);
		return (resolved.protocol === "http:" || resolved.protocol === "https:") && resolved.hostname !== current.hostname;
	} catch {
		return false;
	}
}
function StreamingMarkdown({ content, className, deferCodeBlocks = false }) {
	const safeContent = useMemo(() => normalizeStreamingMarkdown(content || ""), [content]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("text-[13px] leading-relaxed break-words [&_p]:my-0 [&_p+p]:mt-3 [&_h1]:mb-2.5 [&_h1]:mt-3 [&_h1]:text-[16px] [&_h1]:font-semibold [&_h2]:mb-2.5 [&_h2]:mt-3 [&_h2]:text-[15px] [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:mt-2.5 [&_h3]:text-[14px] [&_h3]:font-semibold [&_ul]:my-2 [&_ul]:list-disc [&_ul]:ps-4 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:ps-4 [&_li]:my-1 prose-links-neutral [&_blockquote]:my-2 [&_blockquote]:border-s-2 [&_blockquote]:border-border [&_blockquote]:ps-3", className),
		children: /* @__PURE__ */ jsx(ReactMarkdown, {
			remarkPlugins: [remarkGfm],
			components: {
				a({ href, children, ...props }) {
					const openInNewWindow = isExternalDomainLink(href);
					return /* @__PURE__ */ jsx("a", {
						href,
						target: openInNewWindow ? "_blank" : void 0,
						rel: openInNewWindow ? "noopener noreferrer" : void 0,
						...props,
						children
					});
				},
				table({ children }) {
					return /* @__PURE__ */ jsx("div", {
						className: "not-prose my-3 w-full overflow-hidden rounded-lg border border-border bg-card/50",
						children: /* @__PURE__ */ jsx(Table$1, {
							withScrollContainer: true,
							children
						})
					});
				},
				thead({ children }) {
					return /* @__PURE__ */ jsx(TableHeader, {
						className: "[&_tr]:border-b [&_tr]:border-border [&_tr]:hover:bg-transparent",
						children
					});
				},
				tbody({ children }) {
					return /* @__PURE__ */ jsx(TableBody, { children });
				},
				tr({ children }) {
					return /* @__PURE__ */ jsx(TableRow, {
						className: "border-b border-border hover:bg-muted/30",
						children
					});
				},
				th({ children }) {
					return /* @__PURE__ */ jsx(TableHead, {
						className: MARKDOWN_TABLE_HEAD_CLASS,
						children
					});
				},
				td({ children }) {
					return /* @__PURE__ */ jsx(TableCell, {
						className: cn("px-4 py-3 align-top whitespace-normal", DOCS_TABLE_CELL_TEXT_CLASS, "[&_strong]:font-semibold [&_strong]:text-foreground"),
						children
					});
				},
				hr() {
					return /* @__PURE__ */ jsx("div", {
						className: "my-3 text-center text-[11px] tracking-[0.35em] text-muted-foreground/80",
						"aria-hidden": "true",
						children: "•••"
					});
				},
				img({ src, alt }) {
					if (!src) return null;
					return /* @__PURE__ */ jsx("img", {
						src,
						alt: alt || "",
						className: "my-2 h-auto max-h-64 w-auto max-w-full rounded-md border border-border",
						loading: "lazy"
					});
				},
				pre({ children }) {
					return /* @__PURE__ */ jsx(Fragment, { children });
				},
				code({ className: className$1, children, ...props }) {
					const rawCode = String(children ?? "");
					if (!className$1) return /* @__PURE__ */ jsx("code", {
						dir: "ltr",
						className: cn(FORCE_LTR_CLASS, "rounded-sm bg-muted/60 px-1 py-0.5 text-[12px]", className$1),
						...props,
						children
					});
					if (deferCodeBlocks) {
						resolveMarkdownCodeLanguage(className$1);
						return /* @__PURE__ */ jsxs("div", {
							dir: "ltr",
							"data-code-example": true,
							className: cn(FORCE_LTR_CLASS, "mt-2 mb-3.5 overflow-hidden rounded-xl border border-border bg-background"),
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 items-center border-b border-border px-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: resolveFenceCodeLabel(className$1?.match(/language-([a-zA-Z0-9_-]+)/)?.[1])
								})
							}), /* @__PURE__ */ jsx("pre", {
								className: "overflow-x-auto p-4 text-[12px] font-mono leading-relaxed",
								children: /* @__PURE__ */ jsx("code", { children: rawCode.replace(/\n$/, "") })
							})]
						});
					}
					return /* @__PURE__ */ jsx(CodeBlock, {
						code: rawCode.replace(/\n$/, ""),
						language: resolveMarkdownCodeLanguage(className$1),
						copyInside: true,
						showCopy: true,
						showFullscreen: true,
						transparentBackground: true,
						className: "mt-2 mb-3.5"
					});
				}
			},
			children: safeContent
		})
	});
}
var ConsoleRightPaneContext = createContext(null);
var noopConsoleRightPaneContext = {
	activeContent: null,
	showDocs: () => {},
	showAgent: () => {},
	hideRightPane: () => {}
};
function useConsoleRightPane() {
	return useContext(ConsoleRightPaneContext) ?? noopConsoleRightPaneContext;
}
function ConsoleRightPaneProvider({ children }) {
	const [activeContent, setActiveContent] = useState(null);
	const showDocs = useCallback(() => {
		setActiveContent((current) => current === "docs" ? current : "docs");
	}, []);
	const showAgent = useCallback(() => {
		setActiveContent((current) => current === "agent" ? current : "agent");
	}, []);
	const hideRightPane = useCallback(() => {
		setActiveContent((current) => current === null ? current : null);
	}, []);
	const value = useMemo(() => ({
		activeContent,
		showDocs,
		showAgent,
		hideRightPane
	}), [
		activeContent,
		hideRightPane,
		showAgent,
		showDocs
	]);
	return /* @__PURE__ */ jsx(ConsoleRightPaneContext.Provider, {
		value,
		children
	});
}
const APPWRITE_ASSISTANT_MCP_ID = MCP_SERVER_NAME;
const APPWRITE_ASSISTANT_MCP_NAME = "Appwrite MCP";
const APPWRITE_ASSISTANT_MCP_DESCRIPTION = "Let the agent take actions in your Appwrite projects through the hosted MCP server.";
const APPWRITE_AGENT_OAUTH_CLIENT_ID = "appwrite-agent".trim();
const APPWRITE_AGENT_OAUTH_CLIENT_NAME = "Appwrite Agent";
getEnvMcpEndpointUrl();
function getAppwriteAssistantMcpUrl() {
	return getEffectiveMcpEndpointUrl();
}
function getAppwriteAssistantMcpConnectInput() {
	const url = getAppwriteAssistantMcpUrl();
	return {
		mcpId: APPWRITE_ASSISTANT_MCP_ID,
		name: APPWRITE_ASSISTANT_MCP_NAME,
		url,
		description: APPWRITE_ASSISTANT_MCP_DESCRIPTION,
		resource: url,
		clientId: APPWRITE_AGENT_OAUTH_CLIENT_ID,
		clientName: APPWRITE_AGENT_OAUTH_CLIENT_NAME
	};
}
function isAppwriteMcpConnectionCurrent(connection, mcpUrl = getAppwriteAssistantMcpUrl()) {
	if (!connection?.hasTokens) return false;
	const stored = connection.url?.trim();
	if (!stored) return false;
	return normalizeMcpEndpointUrl(stored) === normalizeMcpEndpointUrl(mcpUrl);
}
var ensureInFlight = null;
function appwriteConnectionFromList(connections) {
	return connections.find((connection) => connection.$id === APPWRITE_ASSISTANT_MCP_ID);
}
async function persistSilentConnect(exists) {
	const result = await connectMcpOAuthSilently(getAppwriteAssistantMcpConnectInput());
	const payload = {
		mcpId: result.mcpId,
		name: result.name,
		url: result.url,
		description: result.description,
		enabled: true,
		status: "connected",
		tokens: JSON.stringify(result.tokens),
		clientInfo: JSON.stringify(result.clientInfo)
	};
	if (exists) return await sdk.forConsole.agent.updateMcpConnection(payload);
	try {
		return await sdk.forConsole.agent.createMcpConnection(payload);
	} catch (error) {
		const message = error && typeof error === "object" && "message" in error ? String(error.message) : "";
		if (!/already exists|conflict|409/i.test(message)) throw error;
		return await sdk.forConsole.agent.updateMcpConnection(payload);
	}
}
async function ensureAppwriteMcpConnected(options) {
	if (typeof window === "undefined") return { status: "skipped" };
	if (!getActiveProfileFeatures().agent) return { status: "skipped" };
	if (ensureInFlight) return ensureInFlight;
	ensureInFlight = (async () => {
		const existing = appwriteConnectionFromList(options?.connections ?? await fetchAssistantMcpConnections());
		if (isAppwriteMcpConnectionCurrent(existing, getAppwriteAssistantMcpUrl())) return {
			status: "already-connected",
			connection: existing
		};
		return {
			status: "connected",
			connection: await persistSilentConnect(!!existing)
		};
	})().finally(() => {
		ensureInFlight = null;
	});
	return ensureInFlight;
}
function useEnsureAppwriteMcpConnected(options) {
	const enabled = options?.enabled ?? true;
	const queryClient = useQueryClient();
	const attemptedForUrlRef = useRef(null);
	useEffect(() => {
		if (!enabled) return;
		if (options?.connectionsReady === false) return;
		if (typeof window === "undefined") return;
		if (!getActiveProfileFeatures().agent) return;
		const run = () => {
			const mcpUrl = getAppwriteAssistantMcpUrl();
			const connections = options?.connections;
			if (connections) {
				if (isAppwriteMcpConnectionCurrent(appwriteConnectionFromList(connections), mcpUrl)) {
					attemptedForUrlRef.current = mcpUrl;
					return;
				}
			}
			if (attemptedForUrlRef.current === mcpUrl) return;
			attemptedForUrlRef.current = mcpUrl;
			ensureAppwriteMcpConnected().then(async (result) => {
				if (result.status === "connected") await queryClient.refetchQueries({ queryKey: ["agent", "mcps"] });
			}).catch((error) => {
				if (attemptedForUrlRef.current === mcpUrl) attemptedForUrlRef.current = null;
			});
		};
		run();
		return subscribeToDebugMcpEndpointChange(run);
	}, [
		enabled,
		options?.connections,
		options?.connectionsReady,
		queryClient
	]);
}
function useDebugMcpEndpoint() {
	const [preset, setPreset] = useState(getDebugMcpEndpointOverride);
	const [customUrl, setCustomUrl] = useState(getDebugCustomMcpEndpoint);
	const [effectiveUrl, setEffectiveUrl] = useState(getEffectiveMcpEndpointUrl);
	useEffect(() => {
		return subscribeToDebugMcpEndpointChange(() => {
			setPreset(getDebugMcpEndpointOverride());
			setCustomUrl(getDebugCustomMcpEndpoint());
			setEffectiveUrl(getEffectiveMcpEndpointUrl());
		});
	}, []);
	return {
		preset,
		customUrl,
		effectiveUrl
	};
}
const ASSISTANT_MODEL_PROVIDERS = [
	{
		id: "openai",
		label: "OpenAI",
		icon: "/icons/chatgpt.svg",
		defaultBaseUrl: "https://api.openai.com/v1",
		models: [
			{
				id: "gpt-4o",
				label: "GPT-4o"
			},
			{
				id: "gpt-4o-mini",
				label: "GPT-4o mini"
			},
			{
				id: "gpt-4.1",
				label: "GPT-4.1"
			},
			{
				id: "gpt-4.1-mini",
				label: "GPT-4.1 mini"
			},
			{
				id: "o3",
				label: "o3"
			},
			{
				id: "o4-mini",
				label: "o4-mini"
			}
		]
	},
	{
		id: "anthropic",
		label: "Anthropic",
		icon: "/icons/anthropic.svg",
		defaultBaseUrl: "https://api.anthropic.com",
		models: [
			{
				id: "claude-sonnet-4-5",
				label: "Claude Sonnet 4.5"
			},
			{
				id: "claude-opus-4-1",
				label: "Claude Opus 4.1"
			},
			{
				id: "claude-haiku-4-5",
				label: "Claude Haiku 4.5"
			},
			{
				id: "claude-3-5-sonnet-latest",
				label: "Claude 3.5 Sonnet"
			},
			{
				id: "claude-3-5-haiku-latest",
				label: "Claude 3.5 Haiku"
			}
		]
	},
	{
		id: "google",
		label: "Google",
		icon: "/icons/google.svg",
		defaultBaseUrl: "https://generativelanguage.googleapis.com/v1beta",
		models: [
			{
				id: "gemini-2.5-pro",
				label: "Gemini 2.5 Pro"
			},
			{
				id: "gemini-2.5-flash",
				label: "Gemini 2.5 Flash"
			},
			{
				id: "gemini-2.0-flash",
				label: "Gemini 2.0 Flash"
			},
			{
				id: "gemini-1.5-pro",
				label: "Gemini 1.5 Pro"
			}
		]
	},
	{
		id: "openrouter",
		label: "OpenRouter",
		icon: "/icons/openrouter.svg",
		defaultBaseUrl: "https://openrouter.ai/api/v1",
		models: [
			{
				id: "openai/gpt-4o",
				label: "GPT-4o"
			},
			{
				id: "openai/gpt-4o-mini",
				label: "GPT-4o mini"
			},
			{
				id: "anthropic/claude-sonnet-4.5",
				label: "Claude Sonnet 4.5"
			},
			{
				id: "google/gemini-2.5-pro",
				label: "Gemini 2.5 Pro"
			},
			{
				id: "meta-llama/llama-4-maverick",
				label: "Llama 4 Maverick"
			}
		]
	},
	{
		id: "azure",
		label: "Azure",
		icon: "/icons/azure.svg",
		defaultBaseUrl: "https://YOUR_RESOURCE.openai.azure.com",
		models: [
			{
				id: "gpt-4o",
				label: "GPT-4o"
			},
			{
				id: "gpt-4o-mini",
				label: "GPT-4o mini"
			},
			{
				id: "o3-mini",
				label: "o3-mini"
			},
			{
				id: "o4-mini",
				label: "o4-mini"
			}
		]
	},
	{
		id: "custom",
		label: "Custom",
		icon: null,
		models: []
	}
];
var providerById = new Map(ASSISTANT_MODEL_PROVIDERS.map((provider) => [provider.id, provider]));
function getAssistantModelProvider(providerId) {
	if (!providerId) return void 0;
	return providerById.get(providerId);
}
function getAssistantProviderIconPath(providerId) {
	return getAssistantModelProvider(providerId)?.icon ?? null;
}
function getAssistantModelIconPath(providerId, modelId) {
	const id = modelId?.trim().toLowerCase() ?? "";
	if (id.includes("claude")) return "/icons/claude.svg";
	if (id.includes("gpt") || id.includes("chatgpt")) return "/icons/chatgpt.svg";
	if (/(^|\/)o[1-9]([.\-]|$)/.test(id)) return "/icons/chatgpt.svg";
	if (id.includes("gemini")) return "/icons/google.svg";
	return getAssistantProviderIconPath(providerId);
}
function getAssistantProviderModels(providerId) {
	return getAssistantModelProvider(providerId)?.models ?? [];
}
function getAssistantProviderDefaultBaseUrl(providerId) {
	return getAssistantModelProvider(providerId)?.defaultBaseUrl;
}
function getAssistantProviderModelLabel(providerId, modelId) {
	if (!modelId) return void 0;
	return getAssistantProviderModels(providerId).find((entry) => entry.id === modelId)?.label;
}
const ASSISTANT_CHAT_MODEL_TEMP = .2;
function modelRequiresFixedTemperature(providerModel) {
	if (!providerModel?.trim()) return true;
	const id = providerModel.trim().toLowerCase();
	if (/(^|\/)o[1-9]([.\-]|$)/.test(id)) return true;
	if (/(^|\/)gpt-5/.test(id)) return true;
	if (id.includes("claude-opus-4-7") || id.includes("claude-opus-4.7")) return true;
	return false;
}
function resolveAssistantModelTemp(providerModel) {
	return modelRequiresFixedTemperature(providerModel) ? 1 : ASSISTANT_CHAT_MODEL_TEMP;
}
function ModelIcon$2({ providerId, modelId, className }) {
	const icon = getAssistantModelIconPath(providerId, modelId);
	if (icon) return /* @__PURE__ */ jsx("img", {
		src: icon,
		alt: "",
		className: cn("h-3.5 w-3.5 shrink-0", PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(Cpu, {
		className: cn("h-3.5 w-3.5 shrink-0 text-muted-foreground", className),
		"aria-hidden": true
	});
}
var DEFAULT_MODEL_ID = "";
function modelLabel$1(model) {
	return model.name?.trim() || model.model?.trim() || model.$id;
}
function AgentModelPicker({ value, onChange, disabled = false, className, size = "compact", onManageModels }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const listScrollRef = useRef(null);
	const sentinelRef = useRef(null);
	useEffect(() => {
		const timer = window.setTimeout(() => setDebouncedSearch(search.trim()), 300);
		return () => window.clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
		...assistantModelsInfiniteQueryOptions(25, open ? debouncedSearch || void 0 : void 0, { enabled: !disabled && open }),
		placeholderData: keepPreviousData
	});
	const { data: selectedModelFromQuery } = useQuery({ ...assistantModelQueryOptions(value || void 0, { enabled: !disabled && !!value }) });
	const models = useMemo(() => (data?.pages.flatMap((page) => page.models) ?? []).filter((model) => model.enabled !== false), [data?.pages]);
	const selectedModel = useMemo(() => {
		if (!value) return void 0;
		return models.find((model) => model.$id === value) ?? selectedModelFromQuery;
	}, [
		models,
		selectedModelFromQuery,
		value
	]);
	const isFormSize = size === "form";
	const iconClassName = isFormSize ? "h-4 w-4" : "h-3.5 w-3.5";
	const itemClassName = isFormSize ? "px-2.5 py-2 text-[13px]" : "px-2 py-1.5 text-[12px]";
	const selectedLabel = useMemo(() => {
		if (!value) return t("Appwrite default");
		return selectedModel ? modelLabel$1(selectedModel) : t("Custom model");
	}, [
		selectedModel,
		t,
		value
	]);
	const showDefaultOption = useMemo(() => {
		if (!debouncedSearch) return true;
		return t("Appwrite default").toLowerCase().includes(debouncedSearch.toLowerCase());
	}, [debouncedSearch, t]);
	const showListSkeleton = isFetching && models.length === 0 && !showDefaultOption;
	useEffect(() => {
		const sentinel = sentinelRef.current;
		const root = listScrollRef.current;
		if (!sentinel || !root || !open || !hasNextPage || isFetchingNextPage || !fetchNextPage) return;
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
		}, {
			root,
			rootMargin: "120px",
			threshold: .1
		});
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		open,
		models.length
	]);
	const selectModel = (modelId) => {
		onChange(modelId);
		setOpen(false);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: isFormSize ? "outline" : "ghost",
				size: "sm",
				disabled,
				className: cn(isFormSize ? "h-9 w-full justify-start gap-1.5 px-3 text-[13px] font-normal text-foreground" : "h-7 max-w-[180px] gap-1 px-2 text-[11px] font-medium text-muted-foreground hover:text-foreground", className),
				"aria-label": t("Model"),
				"aria-expanded": open,
				role: "combobox",
				...analyticsAttrs("agent-model-picker"),
				children: [
					selectedModel ? /* @__PURE__ */ jsx(ModelIcon$2, {
						providerId: selectedModel.provider,
						modelId: selectedModel.model,
						className: iconClassName
					}) : /* @__PURE__ */ jsx("img", {
						src: "/icons/appwrite.svg",
						alt: "",
						className: cn("shrink-0", iconClassName, PUBLIC_ICON_MUTED_CLASSES)
					}),
					/* @__PURE__ */ jsx("span", {
						className: "min-w-0 flex-1 truncate text-start",
						children: selectedLabel
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: cn("shrink-0 opacity-70", isFormSize ? "h-4 w-4" : "h-3 w-3") })
				]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			align: "start",
			className: cn("p-0", isFormSize ? "w-[var(--radix-popover-trigger-width)] min-w-[280px]" : "w-[260px]"),
			onWheelCapture: (event) => {
				event.stopPropagation();
			},
			children: [/* @__PURE__ */ jsxs(Command$1, {
				shouldFilter: false,
				className: "overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(CommandInput, {
						placeholder: t("Search models..."),
						value: search,
						onValueChange: setSearch,
						className: cn(isFormSize ? "h-9 text-[13px]" : "h-8 text-[12px]", isFetching && "pe-8")
					}), /* @__PURE__ */ jsx("div", {
						className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
					})]
				}), /* @__PURE__ */ jsx(CommandList, {
					ref: listScrollRef,
					className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
					children: showListSkeleton ? /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5 p-1",
						"aria-hidden": true,
						children: Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 rounded-sm px-2 py-1.5",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4 shrink-0 rounded-sm" }), /* @__PURE__ */ jsx(Skeleton, {
								className: "h-4 rounded-sm",
								style: { width: `${55 + index % 3 * 12}%` }
							})]
						}, index))
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t("No results found") }), /* @__PURE__ */ jsxs(CommandGroup, { children: [
						showDefaultOption ? /* @__PURE__ */ jsxs(CommandItem, {
							value: `default ${t("Appwrite default")}`,
							onSelect: () => selectModel(DEFAULT_MODEL_ID),
							className: cn("gap-2", itemClassName, !value && "bg-accent/50"),
							children: [
								/* @__PURE__ */ jsx("img", {
									src: "/icons/appwrite.svg",
									alt: "",
									className: cn("shrink-0", iconClassName, PUBLIC_ICON_MUTED_CLASSES)
								}),
								/* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 truncate",
									children: t("Appwrite default")
								}),
								!value ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 shrink-0 text-foreground" }) : null
							]
						}) : null,
						models.map((model) => {
							const selected = value === model.$id;
							return /* @__PURE__ */ jsxs(CommandItem, {
								value: `${model.$id} ${modelLabel$1(model)}`,
								onSelect: () => selectModel(model.$id),
								className: cn("gap-2", itemClassName, selected && "bg-accent/50"),
								children: [
									/* @__PURE__ */ jsx(ModelIcon$2, {
										providerId: model.provider,
										modelId: model.model,
										className: iconClassName
									}),
									/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate",
										children: modelLabel$1(model)
									}),
									selected ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 shrink-0 text-foreground" }) : null
								]
							}, model.$id);
						}),
						hasNextPage ? /* @__PURE__ */ jsx("div", {
							ref: sentinelRef,
							className: "h-px w-full shrink-0",
							"aria-hidden": true
						}) : null,
						isFetchingNextPage ? /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center py-2",
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" })
						}) : null
					] })] })
				})]
			}), onManageModels ? /* @__PURE__ */ jsx("div", {
				className: "shrink-0 border-t border-border p-1",
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: cn("flex w-full cursor-pointer items-center gap-1.5 rounded-md text-start text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", itemClassName),
					disabled,
					...analyticsAttrs("agent-manage-models"),
					onClick: () => {
						setOpen(false);
						onManageModels();
					},
					children: [/* @__PURE__ */ jsx(Settings2, { className: cn("shrink-0", iconClassName) }), t("Manage models")]
				})
			}) : null]
		})]
	});
}
var PROJECT_PICKER_PAGE_SIZE = 25;
function AgentProjectPicker({ organizationId, value, onChange, disabled = false, className, size = "compact" }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const listScrollRef = useRef(null);
	const sentinelRef = useRef(null);
	useEffect(() => {
		const timer = window.setTimeout(() => setDebouncedSearch(search.trim()), 300);
		return () => window.clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const listOrgId = !disabled && open ? organizationId : null;
	const { data: pickerProjectScopeData } = useQuery(organizationProjectScopeQueryOptions(listOrgId));
	const { projects, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useProjectsForTeamInfinite(listOrgId, PROJECT_PICKER_PAGE_SIZE, open ? debouncedSearch || void 0 : void 0, void 0, pickerProjectScopeData ?? null);
	const { project: selectedProject } = useProject(value || void 0);
	const isFormSize = size === "form";
	const iconClassName = isFormSize ? "h-4 w-4" : "h-3.5 w-3.5";
	const itemClassName = isFormSize ? "px-2.5 py-2 text-[13px]" : "px-2 py-1.5 text-[12px]";
	const selectedLabel = useMemo(() => {
		if (!value) return t("Select project");
		if (selectedProject?.name) return formatProjectNameForDisplay(selectedProject.name);
		const fromList = projects.find((project) => project.$id === value);
		if (fromList?.name) return formatProjectNameForDisplay(fromList.name);
		return t("Project");
	}, [
		projects,
		selectedProject?.name,
		t,
		value
	]);
	const showListSkeleton = isFetching && projects.length === 0;
	useEffect(() => {
		const sentinel = sentinelRef.current;
		const root = listScrollRef.current;
		if (!sentinel || !root || !open || !hasNextPage || isFetchingNextPage || !fetchNextPage) return;
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
		}, {
			root,
			rootMargin: "120px",
			threshold: .1
		});
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		open,
		projects.length
	]);
	const selectProject = (projectId) => {
		onChange(projectId);
		setOpen(false);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: isFormSize ? "outline" : "ghost",
				size: "sm",
				disabled: disabled || !organizationId,
				className: cn(isFormSize ? "h-9 w-full justify-start gap-1.5 px-3 text-[13px] font-normal text-foreground" : "h-7 max-w-[180px] gap-1 px-2 text-[11px] font-medium text-muted-foreground hover:text-foreground", className),
				"aria-label": t("Project"),
				"aria-expanded": open,
				role: "combobox",
				...analyticsAttrs("agent-project-picker"),
				children: [
					value && selectedProject?.name ? /* @__PURE__ */ jsx(InitialsAvatar, {
						name: selectedProject.name,
						size: "xs",
						className: cn("shrink-0 text-[8px]", isFormSize ? "h-4 w-4" : "h-3.5 w-3.5")
					}) : /* @__PURE__ */ jsx(Folder, {
						className: cn("shrink-0 text-muted-foreground", iconClassName),
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsx("span", {
						className: "min-w-0 flex-1 truncate text-start",
						children: selectedLabel
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: cn("shrink-0 opacity-70", isFormSize ? "h-4 w-4" : "h-3 w-3") })
				]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			align: "start",
			className: cn("p-0", isFormSize ? "w-[var(--radix-popover-trigger-width)] min-w-[280px]" : "w-[260px]"),
			onWheelCapture: (event) => {
				event.stopPropagation();
			},
			children: /* @__PURE__ */ jsxs(Command$1, {
				shouldFilter: false,
				className: "overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(CommandInput, {
						placeholder: t("Search projects..."),
						value: search,
						onValueChange: setSearch,
						className: cn(isFormSize ? "h-9 text-[13px]" : "h-8 text-[12px]", isFetching && "pe-8")
					}), /* @__PURE__ */ jsx("div", {
						className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
					})]
				}), /* @__PURE__ */ jsx(CommandList, {
					ref: listScrollRef,
					className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
					children: showListSkeleton ? /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5 p-1",
						"aria-hidden": true,
						children: Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 rounded-sm px-2 py-1.5",
							children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4 shrink-0 rounded-sm" }), /* @__PURE__ */ jsx(Skeleton, {
								className: "h-4 rounded-sm",
								style: { width: `${55 + index % 3 * 12}%` }
							})]
						}, index))
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t("No projects found") }), /* @__PURE__ */ jsxs(CommandGroup, { children: [
						projects.map((project) => {
							const selected = value === project.$id;
							const label = formatProjectNameForDisplay(project.name);
							const paused = Boolean(project.paused);
							return /* @__PURE__ */ jsxs(CommandItem, {
								value: `${project.$id} ${label}`,
								onSelect: () => selectProject(project.$id),
								className: cn("gap-2", itemClassName, selected && "bg-accent/50"),
								children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: project.name,
										size: "xs",
										className: cn("shrink-0 text-[8px]", isFormSize ? "h-4 w-4" : "h-3.5 w-3.5")
									}),
									/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate",
										children: paused ? `${label} ${t("(Paused)")}` : label
									}),
									selected ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 shrink-0 text-foreground" }) : null
								]
							}, project.$id);
						}),
						hasNextPage ? /* @__PURE__ */ jsx("div", {
							ref: sentinelRef,
							className: "h-px w-full shrink-0",
							"aria-hidden": true
						}) : null,
						isFetchingNextPage ? /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center py-2",
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-muted-foreground" })
						}) : null
					] })] })
				})]
			})
		})]
	});
}
function ConversationResourceSummary({ conversationId, className, enabled = true }) {
	const t = useT();
	const { data } = useQuery({
		queryKey: [
			"agent",
			"conversation-resource-stats",
			conversationId,
			25
		],
		queryFn: () => fetchAssistantMessagesWithTools(conversationId, 25),
		enabled: enabled && !!conversationId && isClientQueryEnabled && getActiveProfileFeatures().agent,
		staleTime: DEFAULT_STALE_TIME,
		retry: false
	});
	const counts = countResourceMutations(data?.messages);
	if (!hasResourceMutations(counts)) return null;
	const parts = [];
	if (counts.created > 0) parts.push(/* @__PURE__ */ jsx("span", {
		className: "text-emerald-600 dark:text-emerald-400",
		children: `+${counts.created}`
	}, "created"));
	if (counts.updated > 0) parts.push(/* @__PURE__ */ jsx("span", {
		className: "text-muted-foreground",
		children: `±${counts.updated}`
	}, "updated"));
	if (counts.deleted > 0) parts.push(/* @__PURE__ */ jsx("span", {
		className: "text-rose-600 dark:text-rose-400",
		children: `-${counts.deleted}`
	}, "deleted"));
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-flex min-w-0 items-center truncate text-[11px] leading-tight text-muted-foreground", className),
		title: t("Resources changed"),
		children: parts.map((part, index) => /* @__PURE__ */ jsxs("span", { children: [index > 0 ? /* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground/70",
			children: " · "
		}) : null, part] }, index))
	});
}
var STATS_FETCH_LIMIT = 100;
function formFromAutomation$1(automation) {
	return {
		name: automation.name || "",
		prompt: automation.prompt || "",
		schedule: automation.schedule || "",
		titlePrefix: automation.titlePrefix || "",
		modelId: automation.modelId || "",
		contextProjectId: automation.contextProjectId || ""
	};
}
function statusBadgeVariant$1(tone) {
	switch (tone) {
		case "running": return "processing";
		case "queued": return "warning";
		case "failed": return "error";
		case "stopped": return "inactive";
		case "ready":
		default: return "success";
	}
}
function runStatusLabel(tone) {
	if (tone === "ready") return "Succeeded";
	return getAssistantConversationStatusLabel(tone);
}
function formatRunDuration(createdAt, updatedAt) {
	if (!createdAt || !updatedAt) return "-";
	const ms = new Date(updatedAt).getTime() - new Date(createdAt).getTime();
	if (!Number.isFinite(ms) || ms < 0) return "-";
	const totalSeconds = Math.floor(ms / 1e3);
	if (totalSeconds < 1) return "<1s";
	if (totalSeconds < 60) return `${totalSeconds}s`;
	const minutes = Math.floor(totalSeconds / 60);
	if (minutes < 60) return `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remMinutes = minutes % 60;
	return remMinutes > 0 ? `${hours}h ${remMinutes}m` : `${hours}h`;
}
function countRunsInWindow(runs, hours, predicate) {
	const cutoff = Date.now() - hours * 60 * 60 * 1e3;
	return runs.filter((run) => {
		return (run.$createdAt ? new Date(run.$createdAt).getTime() : 0) >= cutoff && predicate(run);
	}).length;
}
function AgentAutomationDetail({ automation, disabled = false, selectedRunId = null, defaultTab = "settings", onAddModel, onDeleted, onSelectRun, organizationId, className }) {
	const t = useT();
	const { account } = useAuth();
	const [tab, setTab] = useState(defaultTab);
	const [form, setForm] = useState(null);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const updateMutation = useUpdateAssistantAutomation();
	const deleteMutation = useDeleteAssistantAutomation();
	useEffect(() => {
		setTab(defaultTab);
	}, [automation?.$id, defaultTab]);
	useEffect(() => {
		if (!automation) {
			setForm(null);
			return;
		}
		setForm(formFromAutomation$1(automation));
	}, [automation]);
	useEffect(() => {
		setRequestedPage(1);
		setDisplayedPage(1);
	}, [automation?.$id]);
	const { data: requestedData, isLoading: requestedLoading, isFetching: requestedFetching } = useAssistantAutomationRuns(automation?.$id, requestedPage - 1, pageSize, { enabled: !disabled && !!automation?.$id && tab === "runs" });
	const { data: displayedData, isLoading: displayedLoading } = useAssistantAutomationRuns(automation?.$id, displayedPage - 1, pageSize, { enabled: !disabled && !!automation?.$id && tab === "runs" });
	const { data: statsData } = useAssistantAutomationRuns(automation?.$id, 0, STATS_FETCH_LIMIT, { enabled: !disabled && !!automation?.$id && tab === "runs" });
	useEffect(() => {
		if (!requestedFetching && requestedPage !== displayedPage && requestedData) setDisplayedPage(requestedPage);
	}, [
		displayedPage,
		requestedData,
		requestedFetching,
		requestedPage
	]);
	const baseline = automation ? formFromAutomation$1(automation) : null;
	const isDirty = !!form && !!baseline && (form.name !== baseline.name || form.prompt !== baseline.prompt || form.schedule !== baseline.schedule || form.titlePrefix !== baseline.titlePrefix || form.modelId !== baseline.modelId || form.contextProjectId !== baseline.contextProjectId);
	const canSave = !!form && form.name.trim().length > 0 && form.prompt.trim().length > 0 && form.schedule.trim().length > 0;
	const runs = displayedData?.runs ?? [];
	const total = displayedData?.total ?? 0;
	const isInitialLoading = tab === "runs" && (displayedLoading || requestedLoading) && runs.length === 0;
	const statsRuns = statsData?.runs ?? [];
	const isSuccessful = (run) => getAssistantConversationStatusTone(run) === "ready";
	const isFailed = (run) => getAssistantConversationStatusTone(run) === "failed";
	const stats = {
		success24h: countRunsInWindow(statsRuns, 24, isSuccessful),
		failed24h: countRunsInWindow(statsRuns, 24, isFailed),
		success7d: countRunsInWindow(statsRuns, 168, isSuccessful),
		failed7d: countRunsInWindow(statsRuns, 168, isFailed)
	};
	const scheduleLabel = automation?.schedule ? t(formatCronExpression(automation.schedule)) : t("Schedule");
	const ownerLabel = account && automation && account.$id === automation.userId ? account.name?.trim() || account.email : null;
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteOpen(false));
	};
	const handleToggleEnabled = async (enabled) => {
		if (!automation || disabled) return;
		try {
			await updateMutation.mutateAsync({
				automationId: automation.$id,
				enabled
			});
			toast.success(enabled ? t("Automation enabled") : t("Automation paused"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to update automation")));
		}
	};
	const handleSave = async () => {
		if (!automation || !form || !canSave || disabled) return;
		try {
			await updateMutation.mutateAsync({
				automationId: automation.$id,
				name: form.name.trim(),
				prompt: form.prompt.trim(),
				schedule: form.schedule.trim(),
				titlePrefix: form.titlePrefix.trim() || void 0,
				modelId: form.modelId.trim() || void 0,
				contextProjectId: form.contextProjectId.trim() || void 0
			});
			toast.success(t("Automation updated"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to update automation")));
		}
	};
	const handleDelete = async () => {
		if (!automation || disabled) return;
		try {
			await deleteMutation.mutateAsync(automation.$id);
			toast.success(t("Automation deleted"));
			closeDeleteDialog();
			onDeleted?.();
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete automation")));
		}
	};
	if (!automation || !form) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full min-h-0 flex-1 flex-col items-center justify-center bg-background px-6", className),
		children: /* @__PURE__ */ jsx("p", {
			className: "text-center text-[13px] text-muted-foreground",
			children: t("Select an automation")
		})
	});
	const isEnabled = automation.enabled !== false;
	const isSaving = updateMutation.isPending;
	const isDeleting = deleteMutation.isPending;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full min-h-0 min-w-0 flex-1 flex-col bg-background", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-4xl px-4 py-6 sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Switch, {
								checked: isEnabled,
								onCheckedChange: (checked) => void handleToggleEnabled(checked),
								disabled: disabled || isSaving || isDeleting,
								"aria-label": isEnabled ? t("Active") : t("Paused")
							}), /* @__PURE__ */ jsx("span", {
								className: cn("text-[12px] font-medium", isEnabled ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"),
								children: isEnabled ? t("Active") : t("Paused")
							})]
						}),
						/* @__PURE__ */ jsx(AgentProjectPicker, {
							organizationId,
							value: form.contextProjectId || "",
							onChange: (projectId) => setForm((current) => current ? {
								...current,
								contextProjectId: projectId || ""
							} : current),
							size: "compact",
							disabled: disabled || isSaving || isDeleting
						}),
						ownerLabel ? /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-muted-foreground",
							children: [
								t("By"),
								" ",
								ownerLabel
							]
						}) : null
					]
				}), /* @__PURE__ */ jsxs(Tabs, {
					value: tab,
					onValueChange: (value) => {
						if (value === "settings" || value === "runs") setTab(value);
					},
					className: "mt-5 gap-0",
					children: [
						/* @__PURE__ */ jsxs(TabsList, {
							className: "h-9",
							children: [/* @__PURE__ */ jsx(TabsTrigger, {
								value: "settings",
								className: "px-3 text-[12px]",
								children: t("Settings")
							}), /* @__PURE__ */ jsx(TabsTrigger, {
								value: "runs",
								className: "px-3 text-[12px]",
								children: t("Run history")
							})]
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "settings",
							className: "mt-6 space-y-6",
							children: [
								/* @__PURE__ */ jsxs("section", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "text-[12px] font-medium text-muted-foreground",
										children: t("Triggers")
									}), /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden rounded-xl border border-border bg-card/50",
										children: /* @__PURE__ */ jsxs("div", {
											className: "space-y-3 px-4 py-3",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Schedule")
											}), /* @__PURE__ */ jsx(CronScheduleEditor, {
												value: form.schedule,
												onChange: (schedule) => setForm((current) => current ? {
													...current,
													schedule
												} : current),
												disabled: disabled || isSaving || isDeleting,
												allowDisabled: false
											})]
										})
									})]
								}),
								/* @__PURE__ */ jsxs("section", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "text-[12px] font-medium text-muted-foreground",
										children: t("Agent instructions")
									}), /* @__PURE__ */ jsxs("div", {
										className: "overflow-hidden rounded-xl border border-border bg-card/50",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "space-y-4 px-4 py-4",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "automation-detail-name",
														children: t("Name")
													}), /* @__PURE__ */ jsx(Input, {
														id: "automation-detail-name",
														value: form.name,
														onChange: (event) => setForm((current) => current ? {
															...current,
															name: event.target.value
														} : current),
														className: "h-9 text-[13px]",
														disabled: disabled || isSaving || isDeleting
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "automation-detail-prompt",
														children: t("Prompt")
													}), /* @__PURE__ */ jsx(Textarea, {
														id: "automation-detail-prompt",
														value: form.prompt,
														onChange: (event) => setForm((current) => current ? {
															...current,
															prompt: event.target.value
														} : current),
														placeholder: t("Summarize project activity and suggest next steps."),
														className: "min-h-28 text-[13px]",
														disabled: disabled || isSaving || isDeleting
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "space-y-2 border-t border-border pt-4",
													children: [/* @__PURE__ */ jsx(Label, {
														htmlFor: "automation-detail-title-prefix",
														children: t("Title prefix (optional)")
													}), /* @__PURE__ */ jsx(Input, {
														id: "automation-detail-title-prefix",
														value: form.titlePrefix,
														onChange: (event) => setForm((current) => current ? {
															...current,
															titlePrefix: event.target.value
														} : current),
														placeholder: t("Weekly review"),
														className: "h-9 text-[13px]",
														disabled: disabled || isSaving || isDeleting
													})]
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-2 border-t border-border px-4 py-4",
											children: [/* @__PURE__ */ jsx(Label, { children: t("Model") }), /* @__PURE__ */ jsx(AgentModelPicker, {
												value: form.modelId,
												onChange: (modelId) => setForm((current) => current ? {
													...current,
													modelId
												} : current),
												size: "form",
												disabled: disabled || isSaving || isDeleting,
												onManageModels: onAddModel
											})]
										})]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ jsx(Button, {
										type: "button",
										disabled: disabled || !canSave || !isDirty || isSaving || isDeleting,
										onClick: () => void handleSave(),
										children: t("Update")
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "px-4 py-3",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-[13px] font-semibold text-foreground",
											children: t("Delete automation")
										}), /* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-[12px] text-muted-foreground",
											children: [
												t("This permanently deletes the automation."),
												" ",
												t("This action cannot be undone.")
											]
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "border-t border-destructive/20 px-4 py-3 bg-destructive/5",
										children: /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "destructive",
											size: "sm",
											className: "h-9 text-[13px]",
											disabled: disabled || isDeleting || isSaving,
											onClick: () => setDeleteOpen(true),
											children: t("Delete")
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "runs",
							className: "mt-6 space-y-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
								children: [
									{
										label: t("Successful · 24h"),
										value: stats.success24h
									},
									{
										label: t("Failed · 24h"),
										value: stats.failed24h
									},
									{
										label: t("Successful · 7d"),
										value: stats.success7d
									},
									{
										label: t("Failed · 7d"),
										value: stats.failed7d
									}
								].map((item) => /* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-border bg-card/50 px-3 py-3",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground",
										children: item.label
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[20px] font-semibold tabular-nums text-foreground",
										children: item.value
									})]
								}, item.label))
							}), isInitialLoading ? /* @__PURE__ */ jsx("div", {
								className: "flex h-64 items-center justify-center",
								children: /* @__PURE__ */ jsx(Loader2, { className: "h-6 w-6 animate-spin text-muted-foreground" })
							}) : runs.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: History,
								iconSize: "md",
								title: "No runs yet.",
								description: "Runs appear here after this automation executes.",
								isEmpty: true,
								variant: "card",
								className: "py-10"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
								className: "rounded-lg border border-border bg-card",
								children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
									className: "hover:bg-transparent border-b border-border",
									children: [
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Trigger")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Triggered")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Resources")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Status")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
											children: t("Duration")
										})
									]
								}) }), /* @__PURE__ */ jsx(TableBody, { children: runs.map((conversation) => {
									const isSelected = selectedRunId === conversation.$id;
									const statusTone = getAssistantConversationStatusTone(conversation);
									const statusLabel = t(runStatusLabel(statusTone));
									return /* @__PURE__ */ jsxs(TableRow, {
										className: cn(disabled ? "opacity-60" : "cursor-pointer", isSelected && "bg-accent/60"),
										onClick: () => {
											if (disabled) return;
											onSelectRun?.(conversation);
										},
										children: [
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsxs("span", {
													className: "inline-flex min-w-0 items-center gap-1.5 text-[13px] text-foreground",
													children: [/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("span", {
														className: "truncate",
														children: [
															t("Scheduled"),
															" · ",
															scheduleLabel
														]
													})]
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: conversation.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
													date: conversation.$createdAt,
													disableTooltip: true
												}) : /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-muted-foreground",
													children: "-"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(ConversationResourceSummary, {
													conversationId: conversation.$id,
													className: "text-[12px]"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3",
												children: /* @__PURE__ */ jsx(Badge, {
													variant: statusBadgeVariant$1(statusTone),
													className: "text-[10px] shrink-0",
													children: statusLabel
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3 text-end text-[13px] text-muted-foreground tabular-nums",
												children: formatRunDuration(conversation.$createdAt, conversation.$updatedAt)
											})
										]
									}, conversation.$id);
								}) })] })
							}), total > 0 ? /* @__PURE__ */ jsx(Pagination, {
								currentPage: displayedPage,
								totalItems: total,
								pageSize,
								pageSizeOptions: [
									10,
									25,
									50,
									100
								],
								onPageChange: setRequestedPage,
								onPageSizeChange: (size) => {
									setPageSize(size);
									setRequestedPage(1);
									setDisplayedPage(1);
								},
								itemLabel: "runs",
								scrollToTopOnPageChange: false
							}) : null] })]
						})
					]
				})]
			})
		}), /* @__PURE__ */ jsx(Dialog, {
			open: deleteOpen,
			onOpenChange: (open) => {
				if (!open) {
					closeDeleteDialog();
					return;
				}
				setDeleteOpen(true);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete automation") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("This permanently deletes the automation."),
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isDeleting,
						onClick: closeDeleteDialog,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						disabled: isDeleting,
						onClick: () => void handleDelete(),
						children: t("Delete")
					})]
				})]
			})
		})]
	});
}
var DEFAULT_AUTOMATION_SCHEDULE = "0 0 * * 1";
var emptyForm$2 = () => ({
	name: "",
	prompt: "",
	schedule: DEFAULT_AUTOMATION_SCHEDULE,
	titlePrefix: "",
	modelId: "",
	enabled: true
});
function formFromAutomation(automation) {
	return {
		name: automation.name || "",
		prompt: automation.prompt || "",
		schedule: automation.schedule || "",
		titlePrefix: automation.titlePrefix || "",
		modelId: automation.modelId || "",
		enabled: automation.enabled !== false
	};
}
function AgentAutomationForm({ automation = null, disabled = false, resolveProjectId, onAddModel, onCancel, onSaved }) {
	const t = useT();
	const createMutation = useCreateAssistantAutomation();
	const updateMutation = useUpdateAssistantAutomation();
	const deleteMutation = useDeleteAssistantAutomation();
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [form, setForm] = useState(() => automation ? formFromAutomation(automation) : emptyForm$2());
	useEffect(() => {
		setForm(automation ? formFromAutomation(automation) : emptyForm$2());
	}, [automation]);
	const isSaving = createMutation.isPending || updateMutation.isPending;
	const isDeleting = deleteMutation.isPending;
	const canSave = form.name.trim().length > 0 && form.prompt.trim().length > 0 && form.schedule.trim().length > 0;
	const isEditing = Boolean(automation?.$id);
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteOpen(false));
	};
	const handleDelete = async () => {
		if (!automation?.$id || isDeleting || disabled) return;
		try {
			await deleteMutation.mutateAsync(automation.$id);
			toast.success(t("Automation deleted"));
			closeDeleteDialog();
			onSaved?.(null);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete automation")));
		}
	};
	const handleSave = async () => {
		if (!canSave || isSaving || disabled) return;
		try {
			const projectId = resolveProjectId ? await resolveProjectId() : null;
			if (isEditing && automation) {
				const updated = await updateMutation.mutateAsync({
					automationId: automation.$id,
					name: form.name.trim(),
					prompt: form.prompt.trim(),
					schedule: form.schedule.trim(),
					titlePrefix: form.titlePrefix.trim() || void 0,
					modelId: form.modelId.trim() || "",
					enabled: form.enabled,
					contextProjectId: projectId || void 0
				});
				toast.success(t("Automation updated"));
				onSaved?.(updated);
			} else {
				const created = await createMutation.mutateAsync({
					name: form.name.trim(),
					prompt: form.prompt.trim(),
					schedule: form.schedule.trim(),
					titlePrefix: form.titlePrefix.trim() || void 0,
					modelId: form.modelId.trim() || void 0,
					enabled: form.enabled,
					contextProjectId: projectId || void 0
				});
				toast.success(t("Automation created"));
				onSaved?.(created);
			}
		} catch (error) {
			toast.error(getErrorMessage(error, isEditing ? t("Failed to update automation") : t("Failed to create automation")));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 px-6 py-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Run a prompt on a schedule. Each run creates a new agent conversation.")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "automation-name",
								children: t("Name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "automation-name",
								value: form.name,
								onChange: (event) => setForm((current) => ({
									...current,
									name: event.target.value
								})),
								placeholder: t("Weekly project review"),
								className: "h-9 text-[13px]",
								disabled
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "automation-prompt",
								children: t("Prompt")
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "automation-prompt",
								value: form.prompt,
								onChange: (event) => setForm((current) => ({
									...current,
									prompt: event.target.value
								})),
								placeholder: t("Summarize project activity and suggest next steps."),
								className: "min-h-28 text-[13px]",
								disabled
							})]
						}),
						/* @__PURE__ */ jsx(CronScheduleEditor, {
							value: form.schedule,
							onChange: (schedule) => setForm((current) => ({
								...current,
								schedule
							})),
							disabled,
							allowDisabled: false
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "automation-title-prefix",
								children: t("Title prefix (optional)")
							}), /* @__PURE__ */ jsx(Input, {
								id: "automation-title-prefix",
								value: form.titlePrefix,
								onChange: (event) => setForm((current) => ({
									...current,
									titlePrefix: event.target.value
								})),
								placeholder: t("Weekly review"),
								className: "h-9 text-[13px]",
								disabled
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx(Label, { children: t("Model") }), onAddModel ? /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "text-[11px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline",
									onClick: onAddModel,
									children: t("Add model")
								}) : null]
							}), /* @__PURE__ */ jsx(AgentModelPicker, {
								value: form.modelId,
								onChange: (modelId) => setForm((current) => ({
									...current,
									modelId
								})),
								disabled,
								size: "form"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2.5",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Enabled")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("Run this automation on its schedule.")
							})] }), /* @__PURE__ */ jsx(Switch, {
								checked: form.enabled,
								onCheckedChange: (checked) => setForm((current) => ({
									...current,
									enabled: checked
								})),
								disabled
							})]
						}),
						isEditing ? /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[13px] font-semibold text-foreground",
									children: t("Delete automation")
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-1 text-[12px] text-muted-foreground",
									children: [
										t("This permanently deletes the automation."),
										" ",
										t("This action cannot be undone.")
									]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "border-t border-destructive/20 px-4 py-3 bg-destructive/5",
								children: /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: disabled || isDeleting || isSaving,
									onClick: () => setDeleteOpen(true),
									children: t("Delete")
								})
							})]
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					disabled: !canSave || isSaving || isDeleting || disabled,
					onClick: () => void handleSave(),
					children: isEditing ? t("Update") : t("Create")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					disabled: isSaving || isDeleting,
					onClick: onCancel,
					children: t("Cancel")
				})]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteOpen,
				onOpenChange: (open) => {
					if (!open) {
						closeDeleteDialog();
						return;
					}
					setDeleteOpen(true);
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "z-[140] sm:max-w-md p-0",
					overlayClassName: "z-[140]",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-left",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete automation") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("This permanently deletes the automation."),
								" ",
								t("This action cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							disabled: isDeleting,
							onClick: closeDeleteDialog,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "destructive",
							disabled: isDeleting,
							onClick: () => void handleDelete(),
							children: t("Delete")
						})]
					})]
				})
			})
		]
	});
}
function AgentAutomationDrawer({ open, onOpenChange, automation = null, disabled = false, resolveProjectId, onAddModel, onSaved }) {
	return /* @__PURE__ */ jsxs(BaseDrawer, {
		open,
		onOpenChange,
		title: Boolean(automation) ? "Update automation" : "Create automation",
		description: "Run a prompt on a schedule. Each run creates a new agent conversation.",
		maxWidth: "sm:max-w-lg",
		children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsx(AgentAutomationForm, {
			automation,
			disabled,
			resolveProjectId,
			onAddModel,
			onCancel: () => onOpenChange(false),
			onSaved: (saved) => {
				onSaved?.(saved);
			}
		})]
	});
}
function ShiftGlyph({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 12 12",
		className: cn("inline-block size-[0.9em] shrink-0", className),
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M6 1.1 11.2 6.8H8.35V10.9H3.65V6.8H0.8L6 1.1Z" })
	});
}
function ShortcutGlyph({ keyLabel, className }) {
	if (keyLabel === "⇧") return /* @__PURE__ */ jsx(ShiftGlyph, { className });
	return /* @__PURE__ */ jsx("span", {
		className,
		children: keyLabel
	});
}
function ShortcutGlyphs({ keys, className }) {
	return /* @__PURE__ */ jsx("span", {
		dir: "ltr",
		className: cn("inline-flex items-center gap-px", className),
		children: keys.map((key, i) => /* @__PURE__ */ jsx(ShortcutGlyph, { keyLabel: key }, `${key}-${i}`))
	});
}
const AGENT_TOGGLE_SHORTCUT_RAW = "mod+i";
const AGENT_TOGGLE_SHORTCUT_COMBOS = ["meta+i", "control+i"];
const AGENT_NEW_SHORTCUT_RAW = "mod+shift+n";
const AGENT_NEW_SHORTCUT_COMBOS = ["meta+shift+n", "control+shift+n"];
const AGENT_NEW_AUTOMATION_SHORTCUT_RAW = "mod+shift+u";
const AGENT_NEW_AUTOMATION_SHORTCUT_COMBOS = ["meta+shift+u", "control+shift+u"];
const AGENT_FOCUS_COMPOSER_SHORTCUT_RAW = "mod+shift+l";
const AGENT_FOCUS_COMPOSER_SHORTCUT_COMBOS = ["meta+shift+l", "control+shift+l"];
const AGENT_SHORTCUTS = [
	{
		id: "agent.toggle",
		description: "Toggle agent",
		raw: AGENT_TOGGLE_SHORTCUT_RAW
	},
	{
		id: "agent.new",
		description: "New agent",
		raw: AGENT_NEW_SHORTCUT_RAW
	},
	{
		id: "agent.new-automation",
		description: "New automation",
		raw: AGENT_NEW_AUTOMATION_SHORTCUT_RAW
	},
	{
		id: "agent.focus-composer",
		description: "Focus prompt",
		raw: AGENT_FOCUS_COMPOSER_SHORTCUT_RAW
	}
];
function AgentAutomationsPanel({ disabled = false, selectedAutomationId = null, onCreate, onSelect, onEdit }) {
	const t = useT();
	const { isMac } = usePlatform();
	const newAutomationShortcutKeys = formatDisplayKeys(AGENT_NEW_AUTOMATION_SHORTCUT_RAW, isMac);
	const newAutomationShortcutLabel = newAutomationShortcutKeys.join("");
	const [automationSearch, setAutomationSearch] = useState("");
	const [debouncedAutomationSearch, setDebouncedAutomationSearch] = useState("");
	const { data: automations = [], isLoading } = useAssistantAutomations(debouncedAutomationSearch || void 0, { enabled: !disabled });
	const deleteMutation = useDeleteAssistantAutomation();
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);
	useEffect(() => {
		const timer = window.setTimeout(() => {
			setDebouncedAutomationSearch(automationSearch.trim());
		}, 300);
		return () => window.clearTimeout(timer);
	}, [automationSearch]);
	const hasAutomationSearch = debouncedAutomationSearch.length > 0;
	const openDelete = (automation) => {
		openDialogAfterOverlayCloses(() => setDeleteTarget(automation));
	};
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteTarget(null));
	};
	const handleDelete = async () => {
		if (!deleteTarget) return;
		setIsDeleting(true);
		try {
			await deleteMutation.mutateAsync(deleteTarget.$id);
			toast.success(t("Automation deleted"));
			closeDeleteDialog();
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete automation")));
		} finally {
			setIsDeleting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
				type: "search",
				value: automationSearch,
				onChange: (event) => setAutomationSearch(event.target.value),
				placeholder: t("Search automations..."),
				className: "h-8 border-border bg-background pe-2 ps-8 text-[12px]",
				"aria-label": t("Search automations..."),
				disabled
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "my-8",
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				className: "h-8 shrink-0 gap-1.5 px-2.5 text-[12px]",
				...analyticsAttrs("create-agent-automation"),
				onClick: onCreate,
				disabled,
				title: `${t("Create automation")} (${newAutomationShortcutLabel})`,
				children: [
					/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }),
					t("Create automation"),
					/* @__PURE__ */ jsx("kbd", {
						className: "ms-0.5 hidden items-center rounded border border-border bg-muted/50 px-1 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex",
						children: /* @__PURE__ */ jsx(ShortcutGlyphs, { keys: newAutomationShortcutKeys })
					})
				]
			})
		}),
		isLoading && automations.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "flex min-h-[120px] items-center justify-center py-8",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
		}) : automations.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "flex min-h-[120px] items-center justify-center px-3 py-8",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-center text-[12px] text-muted-foreground",
				children: hasAutomationSearch ? t("No automations match your search.") : t("No automations yet.")
			})
		}) : /* @__PURE__ */ jsx("div", {
			className: "space-y-0.5",
			children: automations.map((automation) => {
				const isSelected = selectedAutomationId === automation.$id;
				const row = /* @__PURE__ */ jsx("div", {
					role: "button",
					tabIndex: disabled ? -1 : 0,
					"aria-disabled": disabled || void 0,
					"aria-label": automation.name || t("Untitled automation"),
					onClick: () => {
						if (disabled) return;
						onSelect?.(automation);
					},
					onKeyDown: (event) => {
						if (disabled) return;
						if (event.key !== "Enter" && event.key !== " ") return;
						event.preventDefault();
						onSelect?.(automation);
					},
					className: cn("flex w-full items-center gap-1 rounded-md border border-transparent px-1.5 py-1 text-start transition-colors", disabled ? "pointer-events-none cursor-default opacity-60" : "cursor-pointer", isSelected ? "border-border bg-accent" : "hover:border-border hover:bg-accent/60"),
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 flex-1 flex-col gap-0.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "min-w-0 truncate text-[12px] font-medium text-foreground",
							children: automation.name || t("Untitled automation")
						}), automation.lastRunAt ? /* @__PURE__ */ jsx("span", {
							className: "min-w-0 truncate text-[11px] text-muted-foreground",
							children: /* @__PURE__ */ jsx(DateTooltip, {
								date: automation.lastRunAt,
								disableTooltip: true,
								live: true
							})
						}) : null]
					})
				});
				if (disabled) return /* @__PURE__ */ jsx("div", { children: row }, automation.$id);
				return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
					asChild: true,
					children: row
				}), /* @__PURE__ */ jsxs(ContextMenuContent, {
					className: "w-48",
					children: [
						/* @__PURE__ */ jsxs(ContextMenuItem, {
							onSelect: () => onEdit?.(automation),
							children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
						}),
						/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
						/* @__PURE__ */ jsxs(ContextMenuItem, {
							onSelect: () => openDelete(automation),
							children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
						})
					]
				})] }, automation.$id);
			})
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteTarget !== null,
			onOpenChange: (open) => {
				if (!open) {
					closeDeleteDialog();
					return;
				}
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "z-[140] sm:max-w-md p-0",
				overlayClassName: "z-[140]",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete automation") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("This permanently deletes the automation."),
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isDeleting,
						onClick: closeDeleteDialog,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						disabled: isDeleting,
						onClick: () => void handleDelete(),
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
var CUSTOM_MODEL_VALUE = "__custom__";
var emptyForm$1 = () => ({
	name: "",
	provider: "openai",
	model: "gpt-4o",
	apiKey: "",
	baseUrl: getAssistantProviderDefaultBaseUrl("openai") ?? "",
	enabled: true
});
function formFromModel(model) {
	return {
		name: model.name || "",
		provider: model.provider || "openai",
		model: model.model || "",
		apiKey: "",
		baseUrl: model.baseUrl || getAssistantProviderDefaultBaseUrl(model.provider) || "",
		enabled: model.enabled !== false
	};
}
function ProviderIcon({ providerId, className }) {
	const provider = getAssistantModelProvider(providerId);
	if (provider?.icon) return /* @__PURE__ */ jsx("img", {
		src: provider.icon,
		alt: "",
		className: cn("h-4 w-4", PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(Cpu, {
		className: cn("h-4 w-4 text-muted-foreground", className),
		"aria-hidden": true
	});
}
function ModelIcon$1({ providerId, modelId, className }) {
	const icon = getAssistantModelIconPath(providerId, modelId);
	if (icon) return /* @__PURE__ */ jsx("img", {
		src: icon,
		alt: "",
		className: cn("h-4 w-4", PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(Cpu, {
		className: cn("h-4 w-4 text-muted-foreground", className),
		"aria-hidden": true
	});
}
function AgentModelForm({ model = null, disabled = false, onCancel, onSaved }) {
	const t = useT();
	const createMutation = useCreateAssistantModel();
	const updateMutation = useUpdateAssistantModel();
	const deleteMutation = useDeleteAssistantModel();
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [form, setForm] = useState(() => model ? formFromModel(model) : emptyForm$1());
	const autoNameRef = useRef(model ? getAssistantProviderModelLabel(model.provider, model.model) || "" : getAssistantProviderModelLabel("openai", "gpt-4o") || "");
	useEffect(() => {
		setForm(model ? formFromModel(model) : emptyForm$1());
		autoNameRef.current = model ? getAssistantProviderModelLabel(model.provider, model.model) || model.name || "" : getAssistantProviderModelLabel("openai", "gpt-4o") || "";
	}, [model]);
	const isEditing = Boolean(model?.$id);
	const isSaving = createMutation.isPending || updateMutation.isPending;
	const isDeleting = deleteMutation.isPending;
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteOpen(false));
	};
	const handleDelete = async () => {
		if (!model?.$id || isDeleting || disabled) return;
		try {
			await deleteMutation.mutateAsync(model.$id);
			toast.success(t("Model deleted"));
			closeDeleteDialog();
			onSaved?.(null);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete model")));
		}
	};
	const providerModels = useMemo(() => getAssistantProviderModels(form.provider), [form.provider]);
	const knownModelIds = useMemo(() => new Set(providerModels.map((entry) => entry.id)), [providerModels]);
	const modelSelectValue = form.model && knownModelIds.has(form.model) ? form.model : form.model ? CUSTOM_MODEL_VALUE : providerModels[0]?.id || CUSTOM_MODEL_VALUE;
	const showCustomModelInput = form.provider === "custom" || modelSelectValue === CUSTOM_MODEL_VALUE;
	const canSave = form.name.trim().length > 0 && form.provider.trim().length > 0 && form.model.trim().length > 0 && (isEditing || form.apiKey.trim().length > 0);
	const applyProvider = (providerId) => {
		const nextProvider = getAssistantModelProvider(providerId);
		const previousDefault = getAssistantProviderDefaultBaseUrl(form.provider);
		const nextDefault = nextProvider?.defaultBaseUrl ?? "";
		const nextModels = nextProvider?.models ?? [];
		const keepModel = form.model && nextModels.some((entry) => entry.id === form.model) ? form.model : nextModels[0]?.id ?? "";
		const nextModelLabel = getAssistantProviderModelLabel(providerId, keepModel) || nextProvider?.label || "";
		const shouldUpdateName = !form.name.trim() || form.name.trim() === autoNameRef.current;
		setForm((current) => ({
			...current,
			provider: providerId,
			model: keepModel,
			baseUrl: !current.baseUrl.trim() || current.baseUrl === previousDefault ? nextDefault : current.baseUrl,
			name: shouldUpdateName ? nextModelLabel : current.name
		}));
		if (shouldUpdateName) autoNameRef.current = nextModelLabel;
	};
	const applyKnownModel = (modelId) => {
		const label = getAssistantProviderModelLabel(form.provider, modelId) || modelId;
		const shouldUpdateName = !form.name.trim() || form.name.trim() === autoNameRef.current;
		setForm((current) => ({
			...current,
			model: modelId,
			name: shouldUpdateName ? label : current.name
		}));
		if (shouldUpdateName) autoNameRef.current = label;
	};
	const handleSave = async () => {
		if (!canSave || isSaving || isDeleting || disabled) return;
		try {
			if (isEditing && model) {
				const updated = await updateMutation.mutateAsync({
					modelId: model.$id,
					name: form.name.trim(),
					provider: form.provider.trim(),
					model: form.model.trim(),
					apiKey: form.apiKey.trim() || void 0,
					baseUrl: form.baseUrl.trim(),
					enabled: form.enabled
				});
				toast.success(t("Model updated"));
				onSaved?.(updated);
			} else {
				const created = await createMutation.mutateAsync({
					name: form.name.trim(),
					provider: form.provider.trim(),
					model: form.model.trim(),
					apiKey: form.apiKey.trim(),
					baseUrl: form.baseUrl.trim() || void 0,
					enabled: form.enabled
				});
				toast.success(t("Model created"));
				onSaved?.(created);
			}
		} catch (error) {
			toast.error(getErrorMessage(error, isEditing ? t("Failed to update model") : t("Failed to create model")));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 px-6 py-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Configure the provider, model ID, and API key.")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "assistant-model-name",
								children: t("Name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "assistant-model-name",
								value: form.name,
								onChange: (event) => setForm((current) => ({
									...current,
									name: event.target.value
								})),
								placeholder: t("My OpenAI key"),
								className: "h-9 text-[13px]",
								disabled
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, { children: t("Provider") }), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
								children: ASSISTANT_MODEL_PROVIDERS.map((provider) => {
									return /* @__PURE__ */ jsxs("button", {
										type: "button",
										disabled,
										onClick: () => applyProvider(provider.id),
										className: cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 text-start transition-colors", form.provider === provider.id ? "border-foreground/20 bg-accent" : "border-border bg-background hover:bg-accent/50", disabled && "pointer-events-none opacity-60"),
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted",
											children: /* @__PURE__ */ jsx(ProviderIcon, { providerId: provider.id })
										}), /* @__PURE__ */ jsx("span", {
											className: "min-w-0 truncate text-[13px] font-medium text-foreground",
											children: provider.label
										})]
									}, provider.id);
								})
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 px-4 py-4",
								children: [
									providerModels.length > 0 ? /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Label, { children: t("Model") }), /* @__PURE__ */ jsxs(Select, {
											value: modelSelectValue,
											onValueChange: (value) => {
												if (value === CUSTOM_MODEL_VALUE) {
													setForm((current) => ({
														...current,
														model: knownModelIds.has(current.model) ? "" : current.model
													}));
													return;
												}
												applyKnownModel(value);
											},
											disabled,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select a model") })
											}), /* @__PURE__ */ jsxs(SelectContent, { children: [providerModels.map((entry) => /* @__PURE__ */ jsx(SelectItem, {
												value: entry.id,
												children: /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx(ModelIcon$1, {
														providerId: form.provider,
														modelId: entry.id
													}), /* @__PURE__ */ jsx("span", { children: entry.label })]
												})
											}, entry.id)), /* @__PURE__ */ jsx(SelectItem, {
												value: CUSTOM_MODEL_VALUE,
												children: t("Custom model ID")
											})] })]
										})]
									}) : null,
									showCustomModelInput ? /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "assistant-model-id",
											children: providerModels.length > 0 ? t("Custom model ID") : t("Model ID")
										}), /* @__PURE__ */ jsx(Input, {
											id: "assistant-model-id",
											value: form.model,
											onChange: (event) => setForm((current) => ({
												...current,
												model: event.target.value
											})),
											placeholder: form.provider === "openrouter" ? "openai/gpt-4o" : "gpt-4o",
											className: "h-9 font-mono text-[13px]",
											disabled
										})]
									}) : null,
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx(Label, {
												htmlFor: "assistant-model-api-key",
												children: t("API key")
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "assistant-model-api-key",
												type: "password",
												autoComplete: "off",
												value: form.apiKey,
												onChange: (event) => setForm((current) => ({
													...current,
													apiKey: event.target.value
												})),
												placeholder: isEditing && model?.hasApiKey ? `••••${model.hint || "····"}` : t("Enter API key"),
												className: "h-9 font-mono text-[13px]",
												disabled
											}),
											isEditing ? /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-muted-foreground",
												children: t("Leave blank to keep the existing key.")
											}) : null
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx(Label, {
											htmlFor: "assistant-model-base-url",
											children: t("Base URL (optional)")
										}), /* @__PURE__ */ jsx(Input, {
											id: "assistant-model-base-url",
											value: form.baseUrl,
											onChange: (event) => setForm((current) => ({
												...current,
												baseUrl: event.target.value
											})),
											placeholder: getAssistantProviderDefaultBaseUrl(form.provider) || "https://api.example.com/v1",
											className: "h-9 font-mono text-[13px]",
											disabled
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2.5",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("Enabled")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("Allow this model in the agent composer.")
							})] }), /* @__PURE__ */ jsx(Switch, {
								checked: form.enabled,
								onCheckedChange: (checked) => setForm((current) => ({
									...current,
									enabled: checked
								})),
								disabled
							})]
						}),
						isEditing ? /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[13px] font-semibold text-foreground",
									children: t("Delete model")
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-1 text-[12px] text-muted-foreground",
									children: [
										t("This permanently deletes the model credentials."),
										" ",
										t("This action cannot be undone.")
									]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "border-t border-destructive/20 px-4 py-3 bg-destructive/5",
								children: /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: disabled || isDeleting || isSaving,
									onClick: () => setDeleteOpen(true),
									children: t("Delete")
								})
							})]
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					disabled: !canSave || isSaving || isDeleting || disabled,
					onClick: () => void handleSave(),
					children: isEditing ? t("Update") : t("Create")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					disabled: isSaving || isDeleting,
					onClick: onCancel,
					children: t("Cancel")
				})]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteOpen,
				onOpenChange: (open) => {
					if (!open) {
						closeDeleteDialog();
						return;
					}
					setDeleteOpen(true);
				},
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "z-[140] sm:max-w-md p-0",
					overlayClassName: "z-[140]",
					children: [/* @__PURE__ */ jsxs(DialogHeader, {
						className: "px-6 pt-6 pb-4 text-left",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete model") }), /* @__PURE__ */ jsxs(DialogDescription, {
							className: "text-[13px] mt-2",
							children: [
								t("This permanently deletes the model credentials."),
								" ",
								t("This action cannot be undone.")
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							disabled: isDeleting,
							onClick: closeDeleteDialog,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "destructive",
							disabled: isDeleting,
							onClick: () => void handleDelete(),
							children: t("Delete")
						})]
					})]
				})
			})
		]
	});
}
function AgentModelDrawer({ open, onOpenChange, model = null, disabled = false, onSaved }) {
	return /* @__PURE__ */ jsxs(BaseDrawer, {
		open,
		onOpenChange,
		title: Boolean(model) ? "Update model" : "Add model",
		description: "Configure the provider, model ID, and API key.",
		maxWidth: "sm:max-w-lg",
		children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsx(AgentModelForm, {
			model,
			disabled,
			onCancel: () => onOpenChange(false),
			onSaved: (saved) => {
				onSaved?.(saved);
				onOpenChange(false);
			}
		})]
	});
}
function ModelIcon({ model }) {
	const icon = getAssistantModelIconPath(model.provider, model.model);
	if (icon) return /* @__PURE__ */ jsx("img", {
		src: icon,
		alt: "",
		className: cn("h-4 w-4 shrink-0", PUBLIC_ICON_MUTED_CLASSES)
	});
	return /* @__PURE__ */ jsx(Cpu, {
		className: "h-4 w-4 shrink-0 text-muted-foreground",
		"aria-hidden": true
	});
}
function modelLabel(model) {
	return model.name?.trim() || model.model?.trim() || model.$id;
}
function Models() {
	const t = useT();
	const { isAuthenticated } = useAuth();
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(ASSISTANT_SETTINGS_PAGE_SIZE);
	const [editor, setEditor] = useState({ mode: "closed" });
	const { data: requestedData, isFetching: requestedFetching } = useAssistantModels(requestedPage - 1, pageSize, { enabled: isAuthenticated });
	const { data: displayedData, isLoading: displayedLoading } = useAssistantModels(displayedPage - 1, pageSize, { enabled: isAuthenticated });
	useEffect(() => {
		if (!requestedFetching && requestedPage !== displayedPage && requestedData) setDisplayedPage(requestedPage);
	}, [
		displayedPage,
		requestedData,
		requestedFetching,
		requestedPage
	]);
	const models = displayedData?.models ?? [];
	const total = displayedData?.total ?? 0;
	const closeEditor = () => setEditor({ mode: "closed" });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		"data-settings-card": "Models",
		className: "w-full rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3 px-6 py-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Models")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] text-muted-foreground",
						children: t("Add custom LLM providers and API keys for the Appwrite Agent.")
					})]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "button",
					size: "sm",
					className: "h-9 shrink-0 gap-1.5 text-[13px]",
					disabled: !isAuthenticated,
					...analyticsAttrs("create-agent-model"),
					onClick: () => setEditor({ mode: "create" }),
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Add model")]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			!isAuthenticated ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-8",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Cpu,
					iconSize: "md",
					title: "Sign in to manage models.",
					description: "Add custom LLM providers and API keys for the Appwrite Agent.",
					isEmpty: true
				})
			}) : displayedLoading && models.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center gap-1.5 px-6 py-8 text-[13px] text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), t("Loading...")]
			}) : total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-8",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Cpu,
					iconSize: "md",
					title: "No custom models",
					description: "No custom models yet. The Appwrite default model is always available.",
					isEmpty: true,
					action: /* @__PURE__ */ jsxs(Button, {
						type: "button",
						size: "sm",
						className: "h-9 gap-1.5 text-[13px]",
						...analyticsAttrs("create-agent-model"),
						onClick: () => setEditor({ mode: "create" }),
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Add model")]
					})
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("ul", {
				className: "divide-y divide-border",
				children: models.map((model) => {
					const enabled = model.enabled !== false;
					return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "flex w-full cursor-pointer items-center gap-3 px-6 py-4 text-start transition-colors hover:bg-accent/50",
						onClick: () => setEditor({
							mode: "edit",
							model
						}),
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40",
								children: /* @__PURE__ */ jsx(ModelIcon, { model })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "truncate text-[13px] font-medium text-foreground",
									children: modelLabel(model)
								}), /* @__PURE__ */ jsxs("p", {
									className: "truncate text-[11px] text-muted-foreground",
									children: [
										model.provider,
										model.model ? ` · ${model.model}` : "",
										` · ${enabled ? t("Enabled") : t("Disabled")}`
									]
								})]
							}),
							/* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
						]
					}) }, model.$id);
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-2",
				children: /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: total,
					pageSize,
					pageSizeOptions: [...ASSISTANT_SETTINGS_PAGE_SIZE_OPTIONS],
					onPageChange: setRequestedPage,
					onPageSizeChange: (size) => {
						setPageSize(size);
						setRequestedPage(1);
						setDisplayedPage(1);
					},
					itemLabel: "models",
					scrollToTopOnPageChange: false,
					className: "py-0"
				})
			})] })
		]
	}), /* @__PURE__ */ jsx(AgentModelDrawer, {
		open: editor.mode !== "closed",
		onOpenChange: (open) => {
			if (!open) closeEditor();
		},
		model: editor.mode === "edit" ? editor.model : null,
		disabled: !isAuthenticated,
		onSaved: () => {
			closeEditor();
		}
	})] });
}
var MEMORY_CATEGORIES = [
	"preference",
	"instruction",
	"fact"
];
var emptyForm = () => ({
	key: "",
	content: "",
	category: "preference",
	priority: "0",
	active: true
});
function formFromMemory(memory) {
	const category = MEMORY_CATEGORIES.includes(memory.category) ? memory.category : "preference";
	return {
		key: memory.key || "",
		content: memory.content || "",
		category,
		priority: String(memory.priority ?? 0),
		active: memory.status !== "archived"
	};
}
function categoryLabel$1(category, t) {
	switch (category) {
		case "instruction": return t("Instruction");
		case "fact": return t("Fact");
		case "preference":
		default: return t("Preference");
	}
}
function AgentMemoryForm({ memory = null, disabled = false, onCancel, onSaved }) {
	const t = useT();
	const createMutation = useCreateAssistantMemory();
	const updateMutation = useUpdateAssistantMemory();
	const deleteMutation = useDeleteAssistantMemory();
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [form, setForm] = useState(() => memory ? formFromMemory(memory) : emptyForm());
	useEffect(() => {
		setForm(memory ? formFromMemory(memory) : emptyForm());
	}, [memory]);
	const isEditing = Boolean(memory?.$id);
	const isSaving = createMutation.isPending || updateMutation.isPending;
	const isDeleting = deleteMutation.isPending;
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteOpen(false));
	};
	const handleDelete = async () => {
		if (!memory?.$id || isDeleting || disabled) return;
		try {
			await deleteMutation.mutateAsync(memory.$id);
			toast.success(t("Memory deleted"));
			closeDeleteDialog();
			onSaved?.(null);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete memory")));
		}
	};
	const priorityValue = Number.parseInt(form.priority, 10);
	const canSave = form.key.trim().length > 0 && form.content.trim().length > 0 && Number.isFinite(priorityValue);
	const handleSave = async () => {
		if (!canSave || isSaving || isDeleting || disabled) return;
		const status = form.active ? "active" : "archived";
		try {
			if (isEditing && memory?.$id) {
				const updated = await updateMutation.mutateAsync({
					memoryId: memory.$id,
					content: form.content.trim(),
					category: form.category,
					priority: priorityValue,
					status
				});
				toast.success(t("Memory updated"));
				onSaved?.(updated);
				return;
			}
			const created = await createMutation.mutateAsync({
				scope: "user",
				key: form.key.trim(),
				content: form.content.trim(),
				category: form.category,
				priority: priorityValue,
				status,
				source: "user"
			});
			toast.success(t("Memory created"));
			onSaved?.(created);
		} catch (error) {
			toast.error(getErrorMessage(error, isEditing ? t("Failed to update memory") : t("Failed to create memory")));
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4 px-6 py-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "assistant-memory-key",
								children: t("Key")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "assistant-memory-key",
								value: form.key,
								onChange: (event) => setForm((current) => ({
									...current,
									key: event.target.value
								})),
								placeholder: "style.concise",
								className: "h-9 font-mono text-[13px]",
								disabled: disabled || isEditing
							}),
							isEditing ? /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("Key cannot be changed after creation.")
							}) : /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("A stable key for this memory within your account.")
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "assistant-memory-content",
							children: t("Content")
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "assistant-memory-content",
							value: form.content,
							onChange: (event) => setForm((current) => ({
								...current,
								content: event.target.value
							})),
							placeholder: t("What should the agent remember?"),
							className: "min-h-28 text-[13px]",
							disabled
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "assistant-memory-category",
							children: t("Category")
						}), /* @__PURE__ */ jsxs(Select, {
							value: form.category,
							onValueChange: (value) => setForm((current) => ({
								...current,
								category: value
							})),
							disabled,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								id: "assistant-memory-category",
								className: "h-9 text-[13px]",
								children: /* @__PURE__ */ jsx(SelectValue, {})
							}), /* @__PURE__ */ jsx(SelectContent, { children: MEMORY_CATEGORIES.map((category) => /* @__PURE__ */ jsx(SelectItem, {
								value: category,
								children: categoryLabel$1(category, t)
							}, category)) })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "assistant-memory-priority",
								children: t("Priority")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "assistant-memory-priority",
								type: "number",
								value: form.priority,
								onChange: (event) => setForm((current) => ({
									...current,
									priority: event.target.value
								})),
								className: "h-9 text-[13px]",
								disabled
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t("Higher values are kept first when space is limited.")
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2.5",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] font-medium text-foreground",
							children: t("Active")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground",
							children: t("Include this memory when the agent runs.")
						})] }), /* @__PURE__ */ jsx(Switch, {
							checked: form.active,
							onCheckedChange: (checked) => setForm((current) => ({
								...current,
								active: checked
							})),
							disabled
						})]
					}),
					isEditing ? /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[13px] font-semibold text-foreground",
								children: t("Delete memory")
							}), /* @__PURE__ */ jsxs("p", {
								className: "mt-1 text-[12px] text-muted-foreground",
								children: [
									t("This permanently deletes the memory."),
									" ",
									t("This action cannot be undone.")
								]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "border-t border-destructive/20 px-4 py-3 bg-destructive/5",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "destructive",
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: disabled || isDeleting || isSaving,
								onClick: () => setDeleteOpen(true),
								children: t("Delete")
							})
						})]
					}) : null
				]
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
			children: [/* @__PURE__ */ jsx(Button, {
				type: "button",
				disabled: !canSave || isSaving || isDeleting || disabled,
				onClick: () => void handleSave(),
				children: isEditing ? t("Update") : t("Create")
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				disabled: isSaving || isDeleting,
				onClick: onCancel,
				children: t("Cancel")
			})]
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteOpen,
			onOpenChange: (open) => {
				if (!open) closeDeleteDialog();
				else setDeleteOpen(true);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md p-0",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete memory") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("This permanently deletes the memory."),
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isDeleting,
						onClick: closeDeleteDialog,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						disabled: isDeleting,
						onClick: () => void handleDelete(),
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function AgentMemoryDrawer({ open, onOpenChange, memory = null, disabled = false, onSaved }) {
	return /* @__PURE__ */ jsxs(BaseDrawer, {
		open,
		onOpenChange,
		title: Boolean(memory) ? "Update memory" : "Add memory",
		description: "Preferences, instructions, and facts the Appwrite Agent can reuse across conversations.",
		maxWidth: "sm:max-w-lg",
		children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsx(AgentMemoryForm, {
			memory,
			disabled,
			onCancel: () => onOpenChange(false),
			onSaved: (saved) => {
				onSaved?.(saved);
				onOpenChange(false);
			}
		})]
	});
}
function categoryLabel(category, t) {
	switch (category) {
		case "instruction": return t("Instruction");
		case "fact": return t("Fact");
		case "preference": return t("Preference");
		default: return category || t("Preference");
	}
}
function memoryStatusLabel(memory, t) {
	return memory.status === "archived" ? t("Archived") : t("Active");
}
function Memory() {
	const t = useT();
	const { isAuthenticated } = useAuth();
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [pageSize, setPageSize] = useState(ASSISTANT_SETTINGS_PAGE_SIZE);
	const [editor, setEditor] = useState({ mode: "closed" });
	const { data: requestedData, isFetching: requestedFetching } = useAssistantMemories(requestedPage - 1, pageSize, { enabled: isAuthenticated });
	const { data: displayedData, isLoading: displayedLoading } = useAssistantMemories(displayedPage - 1, pageSize, { enabled: isAuthenticated });
	useEffect(() => {
		if (!requestedFetching && requestedPage !== displayedPage && requestedData) setDisplayedPage(requestedPage);
	}, [
		displayedPage,
		requestedData,
		requestedFetching,
		requestedPage
	]);
	const memories = displayedData?.memories ?? [];
	const total = displayedData?.total ?? 0;
	const closeEditor = () => setEditor({ mode: "closed" });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		"data-settings-card": "Memory",
		className: "w-full rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3 px-6 py-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Memory")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] text-muted-foreground",
						children: t("Preferences, instructions, and facts the Appwrite Agent can reuse across conversations.")
					})]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "button",
					size: "sm",
					className: "h-9 shrink-0 gap-1.5 text-[13px]",
					disabled: !isAuthenticated,
					...analyticsAttrs("create-agent-memory"),
					onClick: () => setEditor({ mode: "create" }),
					children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Add memory")]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			!isAuthenticated ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-8",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Brain,
					iconSize: "md",
					title: "Sign in to manage memory.",
					description: "Preferences, instructions, and facts the Appwrite Agent can reuse across conversations.",
					isEmpty: true
				})
			}) : displayedLoading && memories.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center gap-1.5 px-6 py-8 text-[13px] text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), t("Loading...")]
			}) : total === 0 ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-8",
				children: /* @__PURE__ */ jsx(EmptyState, {
					icon: Brain,
					iconSize: "md",
					title: "No memories",
					description: "Add preferences, instructions, or facts for the agent to remember.",
					isEmpty: true,
					action: /* @__PURE__ */ jsxs(Button, {
						type: "button",
						size: "sm",
						className: "h-9 gap-1.5 text-[13px]",
						...analyticsAttrs("create-agent-memory"),
						onClick: () => setEditor({ mode: "create" }),
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Add memory")]
					})
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("ul", {
				className: "divide-y divide-border",
				children: memories.map((memory) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex w-full cursor-pointer items-center gap-3 px-6 py-4 text-start transition-colors hover:bg-accent/50",
					onClick: () => setEditor({
						mode: "edit",
						memory
					}),
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40",
							children: /* @__PURE__ */ jsx(Brain, {
								className: "h-4 w-4 text-muted-foreground",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center gap-2",
								children: [/* @__PURE__ */ jsx("p", {
									className: "truncate text-[13px] font-medium text-foreground",
									children: memory.key || memory.$id
								}), /* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: categoryLabel(memory.category, t)
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "truncate text-[11px] text-muted-foreground",
								children: [memory.content?.trim() || null, memoryStatusLabel(memory, t)].filter(Boolean).join(" · ")
							})]
						}),
						/* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
					]
				}) }, memory.$id))
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-6 py-2",
				children: /* @__PURE__ */ jsx(Pagination, {
					currentPage: displayedPage,
					totalItems: total,
					pageSize,
					pageSizeOptions: [...ASSISTANT_SETTINGS_PAGE_SIZE_OPTIONS],
					onPageChange: setRequestedPage,
					onPageSizeChange: (size) => {
						setPageSize(size);
						setRequestedPage(1);
						setDisplayedPage(1);
					},
					itemLabel: "memories",
					scrollToTopOnPageChange: false,
					className: "py-0"
				})
			})] })
		]
	}), /* @__PURE__ */ jsx(AgentMemoryDrawer, {
		open: editor.mode !== "closed",
		onOpenChange: (open) => {
			if (!open) closeEditor();
		},
		memory: editor.mode === "edit" ? editor.memory : null,
		disabled: !isAuthenticated,
		onSaved: () => {
			closeEditor();
		}
	})] });
}
var TOP_LEVEL_CALLBACK_KEY = "assistant.mcp.oauth.callback";
function hostFromUrl(url) {
	try {
		return new URL(url).host;
	} catch {
		return url;
	}
}
function ConnectionStatusBadge({ connected, needsReconnect }) {
	const t = useT();
	if (connected) return /* @__PURE__ */ jsx(Badge, {
		variant: "success",
		className: "text-[10px] shrink-0",
		children: t("Connected")
	});
	if (needsReconnect) return /* @__PURE__ */ jsx(Badge, {
		variant: "warning",
		className: "text-[10px] shrink-0",
		children: t("Reconnect")
	});
	return /* @__PURE__ */ jsx(Badge, {
		variant: "info",
		className: "text-[10px] shrink-0",
		children: t("Not connected")
	});
}
function useMcpConnectionsController(options) {
	const t = useT();
	const [connecting, setConnecting] = useState(false);
	const resumeAttemptedRef = useRef(false);
	const onConnectedRef = useRef(options?.onConnected);
	onConnectedRef.current = options?.onConnected;
	const { effectiveUrl: appwriteMcpUrl } = useDebugMcpEndpoint();
	const { data: connections = [], isLoading } = useAssistantMcpConnections();
	const upsertMutation = useUpsertAssistantMcpConnection();
	const updateMutation = useUpdateAssistantMcpConnection();
	const deleteMutation = useDeleteAssistantMcpConnection();
	const appwriteConnection = useMemo(() => connections.find((connection) => connection.$id === APPWRITE_ASSISTANT_MCP_ID), [connections]);
	const appwriteConnectionRef = useRef(appwriteConnection);
	appwriteConnectionRef.current = appwriteConnection;
	const hasActiveMcp = useMemo(() => connections.some((connection) => {
		if (!connection.enabled) return false;
		if (connection.$id === APPWRITE_ASSISTANT_MCP_ID) return isAppwriteMcpConnectionCurrent(connection, appwriteMcpUrl);
		return connection.hasTokens;
	}), [appwriteMcpUrl, connections]);
	const listItems = useMemo(() => {
		const otherConnections = connections.filter((connection) => connection.$id !== APPWRITE_ASSISTANT_MCP_ID);
		return [{
			id: APPWRITE_ASSISTANT_MCP_ID,
			name: APPWRITE_ASSISTANT_MCP_NAME,
			url: appwriteMcpUrl,
			description: APPWRITE_ASSISTANT_MCP_DESCRIPTION,
			connection: appwriteConnection,
			isAppwrite: true
		}, ...otherConnections.map((connection) => ({
			id: connection.$id,
			name: connection.name || connection.$id,
			url: connection.url,
			description: connection.description || void 0,
			connection,
			isAppwrite: false
		}))];
	}, [
		appwriteConnection,
		appwriteMcpUrl,
		connections
	]);
	const isBusy = connecting || upsertMutation.isPending || updateMutation.isPending || deleteMutation.isPending;
	const persistConnectedCredentials = async (code) => {
		const result = await completeMcpOAuthConnect({ code });
		await upsertMutation.mutateAsync({
			mcpId: result.mcpId,
			name: result.name,
			url: result.url,
			description: result.description,
			enabled: true,
			status: "connected",
			tokens: JSON.stringify(result.tokens),
			clientInfo: JSON.stringify(result.clientInfo),
			exists: !!appwriteConnectionRef.current
		});
		toast.success(t("Appwrite MCP connected"));
		onConnectedRef.current?.();
	};
	const persistSilentResult = async () => {
		const result = await connectMcpOAuthSilently(getAppwriteAssistantMcpConnectInput());
		await upsertMutation.mutateAsync({
			mcpId: result.mcpId,
			name: result.name,
			url: result.url,
			description: result.description,
			enabled: true,
			status: "connected",
			tokens: JSON.stringify(result.tokens),
			clientInfo: JSON.stringify(result.clientInfo),
			exists: !!appwriteConnectionRef.current
		});
		toast.success(t("Appwrite MCP connected"));
		onConnectedRef.current?.();
	};
	useEffect(() => {
		if (resumeAttemptedRef.current) return;
		if (typeof window === "undefined") return;
		const raw = sessionStorage.getItem(TOP_LEVEL_CALLBACK_KEY);
		if (!raw) return;
		resumeAttemptedRef.current = true;
		sessionStorage.removeItem(TOP_LEVEL_CALLBACK_KEY);
		let payload;
		try {
			payload = JSON.parse(raw);
		} catch {
			return;
		}
		if (payload.type !== "assistant-mcp-oauth") return;
		if (payload.status === "error") {
			toast.error(payload.errorDescription || payload.error);
			return;
		}
		const pending = readPendingMcpOAuthSession();
		if (!pending || pending.state !== payload.state) {
			toast.error(t("Failed to connect Appwrite MCP"));
			return;
		}
		setConnecting(true);
		persistConnectedCredentials(payload.code).catch((error) => {
			toast.error(getErrorMessage(error, t("Failed to connect Appwrite MCP")));
		}).finally(() => {
			setConnecting(false);
		});
	}, []);
	const handleConnectAppwrite = async () => {
		if (isBusy) return;
		setConnecting(true);
		try {
			try {
				await persistSilentResult();
				return;
			} catch {}
			const { code } = await startMcpOAuthConnect({
				...getAppwriteAssistantMcpConnectInput(),
				clientId: void 0
			});
			await persistConnectedCredentials(code);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to connect Appwrite MCP")));
		} finally {
			setConnecting(false);
		}
	};
	const handleToggleEnabled = async (connection, enabled) => {
		try {
			await updateMutation.mutateAsync({
				mcpId: connection.$id,
				enabled
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to update MCP connection")));
		}
	};
	const handleDisconnect = async (mcpId) => {
		if (isBusy) return;
		try {
			await deleteMutation.mutateAsync(mcpId);
			toast.success(mcpId === APPWRITE_ASSISTANT_MCP_ID ? t("Appwrite MCP disconnected") : t("MCP disconnected"));
		} catch (error) {
			toast.error(getErrorMessage(error, mcpId === APPWRITE_ASSISTANT_MCP_ID ? t("Failed to disconnect Appwrite MCP") : t("Failed to disconnect MCP")));
		}
	};
	return {
		t,
		connecting,
		isLoading,
		isBusy,
		hasActiveMcp,
		appwriteMcpUrl,
		listItems,
		upsertPending: upsertMutation.isPending,
		handleConnectAppwrite,
		handleToggleEnabled,
		handleDisconnect
	};
}
function McpConnectionsList({ compact = false, controller }) {
	const { t, connecting, isLoading, isBusy, listItems, appwriteMcpUrl, upsertPending, handleConnectAppwrite, handleToggleEnabled, handleDisconnect } = controller;
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center justify-center gap-1.5 text-muted-foreground", compact ? "px-4 py-6 text-[12px]" : "px-6 py-8 text-[13px]"),
		children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), t("Loading...")]
	});
	if (listItems.length === 1 && listItems[0]?.isAppwrite && !listItems[0]?.connection) return /* @__PURE__ */ jsx("div", {
		className: cn(compact ? "px-4 py-6" : "px-6 py-8"),
		children: /* @__PURE__ */ jsx(EmptyState, {
			icon: McpIcon,
			iconSize: "md",
			title: "No MCP connections",
			description: "Connect Appwrite MCP to give the agent tools for your projects.",
			isEmpty: true,
			action: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				size: "sm",
				className: "h-9 gap-1.5 text-[13px]",
				disabled: isBusy,
				...analyticsAttrs("agent-mcp-connect"),
				onClick: () => void handleConnectAppwrite(),
				children: [connecting || upsertPending ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : null, t("Connect")]
			})
		})
	});
	return /* @__PURE__ */ jsx("ul", {
		className: "divide-y divide-border",
		children: listItems.map((item) => {
			const connected = item.isAppwrite ? isAppwriteMcpConnectionCurrent(item.connection, appwriteMcpUrl) : !!item.connection?.hasTokens;
			const needsReconnect = item.isAppwrite ? !!item.connection && (!item.connection.hasTokens || !isAppwriteMcpConnectionCurrent(item.connection, appwriteMcpUrl)) : !!item.connection && !item.connection.hasTokens;
			const enabled = item.connection?.enabled ?? false;
			return /* @__PURE__ */ jsxs("li", {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn("flex items-start gap-3", compact ? "px-4 py-3" : "px-6 py-4"),
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground",
						children: item.isAppwrite ? /* @__PURE__ */ jsx("img", {
							src: "/icons/appwrite.svg",
							alt: "",
							className: "h-4 w-4",
							"aria-hidden": true
						}) : /* @__PURE__ */ jsx(McpIcon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "truncate text-[13px] font-medium text-foreground",
									children: t(item.name)
								}), /* @__PURE__ */ jsx("p", {
									className: "truncate text-[11px] text-muted-foreground",
									children: hostFromUrl(item.url)
								})]
							}), /* @__PURE__ */ jsx(ConnectionStatusBadge, {
								connected,
								needsReconnect
							})]
						}), item.description ? /* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-[11px] leading-relaxed text-muted-foreground",
							children: t(item.description)
						}) : null]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: cn("flex items-center justify-between gap-2 border-t border-border bg-muted/30", compact ? "px-4 py-2.5" : "px-6 py-3"),
					children: [item.connection ? /* @__PURE__ */ jsxs("label", {
						className: "flex items-center gap-2 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Switch, {
							checked: enabled,
							onCheckedChange: (checked) => {
								if (!item.connection) return;
								handleToggleEnabled(item.connection, checked);
							},
							disabled: isBusy || !connected,
							"aria-label": t("Enable MCP")
						}), /* @__PURE__ */ jsx("span", { children: enabled ? t("Enabled") : t("Disabled") })]
					}) : /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: t("OAuth required")
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [item.isAppwrite ? /* @__PURE__ */ jsxs(Button, {
							type: "button",
							size: "sm",
							variant: connected ? "outline" : "default",
							className: "h-7 px-2.5 text-[11px]",
							disabled: isBusy,
							...analyticsAttrs("agent-mcp-connect"),
							onClick: () => void handleConnectAppwrite(),
							children: [connecting || upsertPending ? /* @__PURE__ */ jsx(Loader2, { className: "me-1 h-3 w-3 animate-spin" }) : connected || needsReconnect ? /* @__PURE__ */ jsx(RefreshCw, { className: "me-1 h-3 w-3" }) : null, connected || needsReconnect ? t("Reconnect") : t("Connect")]
						}) : null, item.connection ? /* @__PURE__ */ jsxs(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							className: "h-7 px-2.5 text-[11px] text-muted-foreground hover:text-foreground",
							disabled: isBusy,
							...analyticsAttrs("agent-mcp-disconnect"),
							onClick: () => void handleDisconnect(item.id),
							children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1 h-3 w-3" }), t("Disconnect")]
						}) : null]
					})]
				})]
			}, item.id);
		})
	});
}
function McpConnectionsPanel() {
	return /* @__PURE__ */ jsx(McpConnectionsList, { controller: useMcpConnectionsController() });
}
function Mcp() {
	const t = useT();
	const { isAuthenticated } = useAuth();
	return /* @__PURE__ */ jsxs("div", {
		"data-settings-card": "MCP connections",
		className: "w-full rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("MCP connections")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Servers available to the agent")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-0 py-0",
				children: isAuthenticated ? /* @__PURE__ */ jsx(McpConnectionsPanel, {}) : /* @__PURE__ */ jsx("div", {
					className: "px-6 py-8",
					children: /* @__PURE__ */ jsx(EmptyState, {
						icon: McpIcon,
						iconSize: "md",
						title: "Sign in to manage MCP connections.",
						description: "Servers available to the agent",
						isEmpty: true
					})
				})
			})
		]
	});
}
var metricHeaderClass = "mt-2 min-h-[52px] flex flex-wrap items-baseline gap-x-2 gap-y-1";
function ChartMetricHeaderSkeleton() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-28 shrink-0 rounded-sm" }),
		/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[4.5rem] shrink-0 rounded-sm" }),
		/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-44 max-w-full shrink-0 rounded-sm" })
	] });
}
function ChartSkeleton() {
	return /* @__PURE__ */ jsx(Skeleton, {
		className: "w-full shrink-0 rounded-md",
		style: { height: 240 },
		"aria-hidden": true
	});
}
function ChartArea({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative w-full shrink-0 text-muted-foreground", FORCE_LTR_CLASS),
		style: { height: 240 },
		children
	});
}
function AgentUsageMultiSeriesChartCard({ title, description, docsHref, unitLabel, total, changePercent, multiSeriesPoints, series, isLoading, isError, error, queryError, errorTitle, errorMessage, formatTotal, formatValue, onRetry, dateRange, chartInterval, onDateRangeChange, stackId = "agent-usage" }) {
	const t = useT();
	const chartData = useMemo(() => multiSeriesPoints.map((point) => {
		return {
			...point,
			fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm")
		};
	}), [multiSeriesPoints]);
	const { canSelect, isSelecting, brushLeft, brushRight, surfaceClassName, chartProps } = useUsageChartBrushSelect({
		points: multiSeriesPoints,
		chartInterval: chartInterval ?? "1h",
		onDateRangeChange
	});
	const formattedTotal = formatTotal(total);
	const changeLabel = changePercent > 0 ? `+${changePercent}%` : changePercent < 0 ? `${changePercent}%` : "0%";
	const axisMax = useMemo(() => chartData.reduce((max, point) => {
		const stacked = series.reduce((sum, entry) => sum + (Number(point[entry.dataKey]) || 0), 0);
		return Math.max(max, stacked, Number(point.total) || 0);
	}, 0), [chartData, series]);
	const yAxisTickFormatter = useMemo(() => createCompactCountAxisTickFormatter(axisMax), [axisMax]);
	const yAxisDomain = useMemo(() => resolveBandwidthStackedYAxisDomain(axisMax), [axisMax]);
	const showSeries = !isLoading && multiSeriesPoints.length > 0 && axisMax > 0;
	return /* @__PURE__ */ jsxs(UsageMetricCardShell, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "shrink-0 flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[14px] font-medium text-foreground",
					children: t(title)
				}), /* @__PURE__ */ jsx("div", {
					className: metricHeaderClass,
					children: isLoading ? /* @__PURE__ */ jsx(ChartMetricHeaderSkeleton, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-[24px] font-semibold tabular-nums text-foreground",
							children: formattedTotal
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-[13px] text-muted-foreground",
							children: t(unitLabel)
						}),
						!isError && multiSeriesPoints.length > 0 ? /* @__PURE__ */ jsxs("span", {
							className: cn("text-[12px] font-medium tabular-nums", changePercent > 0 && "text-emerald-600 dark:text-emerald-400", changePercent < 0 && "text-amber-600 dark:text-amber-400", changePercent === 0 && "text-muted-foreground"),
							children: [
								changeLabel,
								" ",
								t("vs previous period")
							]
						}) : !isLoading ? /* @__PURE__ */ jsxs("span", {
							className: "invisible text-[12px] font-medium tabular-nums",
							"aria-hidden": true,
							children: ["0% ", t("vs previous period")]
						}) : null
					] })
				})]
			}), showSeries ? /* @__PURE__ */ jsx("div", {
				className: "flex shrink-0 flex-wrap items-center gap-3",
				children: series.map((entry) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: `var(${entry.colorVar})` }
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: t(entry.label)
					})]
				}, entry.dataKey))
			}) : null]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex flex-1 flex-col p-4",
			children: isError ? /* @__PURE__ */ jsx(ChartArea, { children: /* @__PURE__ */ jsx(UsageSectionChartError, {
				error: error ?? queryError,
				errorTitle,
				errorMessage,
				onRetry
			}) }) : isLoading ? /* @__PURE__ */ jsx(ChartSkeleton, {}) : chartData.length === 0 ? /* @__PURE__ */ jsx(ChartArea, { children: /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center text-[13px] text-muted-foreground",
				children: t("No data for this date range")
			}) }) : /* @__PURE__ */ jsx(ChartArea, { children: /* @__PURE__ */ jsx("div", {
				className: surfaceClassName,
				"aria-label": canSelect ? t("Drag on the chart to select a date range") : void 0,
				children: /* @__PURE__ */ jsx(ResponsiveContainer, {
					...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
					children: /* @__PURE__ */ jsxs(AreaChart, {
						data: chartData,
						margin: USAGE_CHART_MARGIN,
						...chartProps,
						children: [
							/* @__PURE__ */ jsx("defs", { children: series.map((entry) => /* @__PURE__ */ jsxs("linearGradient", {
								id: entry.gradientId,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: `var(${entry.colorVar})`,
									stopOpacity: .2
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: `var(${entry.colorVar})`,
									stopOpacity: 0
								})]
							}, entry.gradientId)) }),
							/* @__PURE__ */ jsx(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "hsl(var(--border))",
								vertical: false
							}),
							/* @__PURE__ */ jsx(UsageChartXAxis, {
								points: multiSeriesPoints,
								dateRange,
								chartInterval
							}),
							/* @__PURE__ */ jsx(UsageChartYAxis, {
								tickFormatter: yAxisTickFormatter,
								domain: yAxisDomain
							}),
							/* @__PURE__ */ jsx(Tooltip, {
								cursor: !isSelecting,
								content: ({ active, payload }) => {
									if (isSelecting || !active || !payload?.length) return null;
									const data = payload[0]?.payload;
									if (!data) return null;
									return /* @__PURE__ */ jsxs("div", {
										className: "rounded-md border border-border bg-popover px-3 py-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "mb-1 text-[11px] text-muted-foreground",
											children: String(data.fullDate ?? "")
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-0.5",
											children: [series.map((entry) => /* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-1.5 text-[13px] font-medium text-foreground",
												children: [
													/* @__PURE__ */ jsx(ChartSeriesDot, { color: `var(${entry.colorVar})` }),
													formatValue(Number(data[entry.dataKey]) || 0),
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "font-normal text-muted-foreground",
														children: t(entry.label)
													})
												]
											}, entry.dataKey)), /* @__PURE__ */ jsxs("p", {
												className: "border-t border-border pt-1 text-[13px] font-medium text-foreground",
												children: [
													formatValue(Number(data.total) || 0),
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "font-normal text-muted-foreground",
														children: t("total")
													})
												]
											})]
										})]
									});
								}
							}),
							series.map((entry) => /* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: entry.dataKey,
								name: entry.label,
								stackId,
								stroke: `var(${entry.colorVar})`,
								strokeWidth: 2,
								fill: `url(#${entry.gradientId})`,
								...CHART_ANIMATION_DISABLED
							}, entry.dataKey)),
							/* @__PURE__ */ jsx(UsageChartBrushReferenceArea, {
								left: brushLeft,
								right: brushRight
							})
						]
					})
				})
			}) })
		}),
		/* @__PURE__ */ jsx(UsageMetricCardFooter, {
			description,
			docsHref
		})
	] });
}
var AGENT_USAGE_ERROR = {
	title: "Couldn't load agent usage",
	message: "We couldn't fetch usage data from the server. Check your connection and try again."
};
function Usage$1() {
	const t = useT();
	const { isAuthenticated } = useAuth();
	const queryClient = useQueryClient();
	const [dateRange, setDateRange] = useState(() => getStableUsageChartDateRange());
	const [chartInterval, setChartInterval] = useState("1h");
	const resolvedInterval = resolveUsageChartIntervalForRange(chartInterval, dateRange);
	const usageQuery = useAccountAgentUsage(dateRange, resolvedInterval, isAuthenticated);
	const handleDateRangeChange = (next) => {
		if (!next?.from || !next?.to) return;
		setDateRange(next);
		setChartInterval((current) => resolveUsageChartIntervalForRange(current, next));
	};
	const handleIntervalChange = (next) => {
		setChartInterval(resolveUsageChartIntervalForRange(next, dateRange));
	};
	const handleRetry = () => {
		refetchAccountAgentUsageQueries(queryClient);
	};
	const overview = usageQuery.isError ? void 0 : usageQuery.data;
	const showSkeleton = shouldShowUsageChartSkeleton(usageQuery.isError, usageQuery.isLoading, usageQuery.isPlaceholderData);
	const automationsPoints = overview?.automations.chartPoints ?? [];
	const tokensBreakdown = overview?.tokensBreakdown;
	const activity = overview?.activity;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		"data-settings-card": "Usage",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "w-full rounded-xl border border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(BarChart3, {
								className: "h-4 w-4 shrink-0 text-muted-foreground",
								"aria-hidden": true
							}), /* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Usage")
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[13px] text-muted-foreground max-w-xl",
							children: t("Your personal Agent activity: tokens, messages, conversations, tool calls, and automations.")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end",
						children: [/* @__PURE__ */ jsx(UsageChartIntervalToggle, {
							value: resolvedInterval,
							onValueChange: (value) => handleIntervalChange(value),
							dateRange,
							className: "h-9 w-full sm:w-fit"
						}), /* @__PURE__ */ jsx(DateRangePicker, {
							dateRange,
							onDateRangeChange: handleDateRangeChange,
							className: "h-9 w-full min-w-0 sm:w-auto sm:min-w-[180px]",
							popoverContentAlign: "end"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx(AgentUsageMultiSeriesChartCard, {
				title: "Tokens",
				description: AGENT_TOKENS_BREAKDOWN_DESCRIPTION,
				unitLabel: "tokens",
				total: sumUsageChartPoints(tokensBreakdown?.chartPoints ?? []),
				changePercent: tokensBreakdown?.changePercent ?? 0,
				multiSeriesPoints: tokensBreakdown?.multiSeriesPoints ?? [],
				series: tokensBreakdown?.series ?? AGENT_TOKENS_BREAKDOWN_SERIES,
				isLoading: showSkeleton,
				isError: usageQuery.isError,
				queryError: usageQuery.error,
				errorTitle: AGENT_USAGE_ERROR.title,
				errorMessage: AGENT_USAGE_ERROR.message,
				formatTotal: formatAgentCountTotal,
				formatValue: formatAgentCountValue,
				onRetry: handleRetry,
				docsHref: AGENT_DOCS_HREF,
				dateRange,
				chartInterval: resolvedInterval,
				onDateRangeChange: handleDateRangeChange,
				stackId: "agent-tokens"
			}),
			/* @__PURE__ */ jsx(AgentUsageMultiSeriesChartCard, {
				title: "Activity",
				description: AGENT_ACTIVITY_DESCRIPTION,
				unitLabel: "events",
				total: sumUsageChartPoints(activity?.chartPoints ?? []),
				changePercent: activity?.changePercent ?? 0,
				multiSeriesPoints: activity?.multiSeriesPoints ?? [],
				series: activity?.series ?? AGENT_ACTIVITY_SERIES,
				isLoading: showSkeleton,
				isError: usageQuery.isError,
				queryError: usageQuery.error,
				errorTitle: AGENT_USAGE_ERROR.title,
				errorMessage: AGENT_USAGE_ERROR.message,
				formatTotal: formatAgentCountTotal,
				formatValue: formatAgentCountValue,
				onRetry: handleRetry,
				docsHref: AGENT_DOCS_HREF,
				dateRange,
				chartInterval: resolvedInterval,
				onDateRangeChange: handleDateRangeChange,
				stackId: "agent-activity"
			}),
			/* @__PURE__ */ jsx(UsageTimeSeriesChartCard, {
				title: "Automations",
				description: AGENT_AUTOMATIONS_DESCRIPTION,
				unitLabel: "automations",
				chartGradientId: "usage-agent-automations-gradient",
				total: sumUsageChartPoints(automationsPoints),
				changePercent: overview?.automations.changePercent ?? 0,
				chartPoints: automationsPoints,
				isLoading: showSkeleton,
				isError: usageQuery.isError,
				queryError: usageQuery.error,
				errorTitle: AGENT_USAGE_ERROR.title,
				errorMessage: AGENT_USAGE_ERROR.message,
				formatTotal: formatAgentCountTotal,
				formatValue: formatAgentCountValue,
				onRetry: handleRetry,
				docsHref: AGENT_DOCS_HREF,
				dateRange,
				chartInterval: resolvedInterval,
				onDateRangeChange: handleDateRangeChange
			})
		]
	});
}
const AGENT_SETTINGS_CARD_INDEX = [
	{
		sectionId: "models",
		title: "Models",
		keywords: [
			"model",
			"llm",
			"openai",
			"anthropic",
			"provider",
			"api key"
		]
	},
	{
		sectionId: "memory",
		title: "Memory",
		keywords: [
			"memory",
			"memories",
			"preference",
			"instruction",
			"fact",
			"remember"
		]
	},
	{
		sectionId: "mcp",
		title: "MCP connections",
		keywords: [
			"mcp",
			"server",
			"oauth",
			"tools",
			"connect"
		]
	},
	{
		sectionId: "usage",
		title: "Usage",
		keywords: [
			"usage",
			"runs",
			"messages",
			"conversations",
			"tokens",
			"tool calls",
			"automations",
			"metrics"
		]
	}
];
function SettingsSection({ section }) {
	if (section === "mcp") return /* @__PURE__ */ jsx(Mcp, {});
	if (section === "memory") return /* @__PURE__ */ jsx(Memory, {});
	if (section === "usage") return /* @__PURE__ */ jsx(Usage$1, {});
	return /* @__PURE__ */ jsx(Models, {});
}
function AgentSettingsContent({ section, onSectionChange, onBack, onOpenInNewTab, onToggleSidebar, sidebarOpen, toolbarClassName = "px-3" }) {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const [settingsNavSearch, setSettingsNavSearch] = useState("");
	const navItems = useMemo(() => {
		const settingsTo = (id) => orgId ? agentSettingsPath(orgId, id) : "#";
		return [
			{
				id: "models",
				label: t("Models"),
				to: settingsTo("models"),
				icon: Cpu,
				keywords: [
					"model",
					"llm",
					"openai",
					"anthropic",
					"provider",
					"api key"
				]
			},
			{
				id: "memory",
				label: t("Memory"),
				to: settingsTo("memory"),
				icon: Brain,
				keywords: [
					"memory",
					"memories",
					"preference",
					"instruction",
					"fact",
					"remember"
				]
			},
			{
				id: "mcp",
				label: t("MCP"),
				to: settingsTo("mcp"),
				icon: McpIcon,
				keywords: [
					"mcp",
					"server",
					"oauth",
					"tools",
					"connect"
				]
			},
			{
				id: "usage",
				label: t("Usage"),
				to: settingsTo("usage"),
				icon: BarChart3,
				keywords: [
					"usage",
					"runs",
					"messages",
					"conversations",
					"tokens",
					"tool calls",
					"automations",
					"metrics"
				]
			}
		];
	}, [orgId, t]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex h-14 min-h-14 shrink-0 items-center justify-between border-b border-border", toolbarClassName),
			children: [
				"        ",
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [
						onToggleSidebar ? /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onToggleSidebar,
							className: "flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							"aria-label": sidebarOpen ? t("Close sidebar") : t("Open sidebar"),
							title: sidebarOpen ? t("Close sidebar") : t("Open sidebar"),
							...analyticsAttrs(sidebarOpen ? "agent-sidebar-close" : "agent-sidebar-open"),
							children: sidebarOpen ? /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(PanelLeft, { className: "h-3.5 w-3.5" })
						}) : null,
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onBack,
							className: "flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							"aria-label": t("Back"),
							title: t("Back"),
							...analyticsAttrs("agent-back"),
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "truncate px-1.5 text-[13px] font-semibold text-foreground",
							children: t("Settings")
						})
					]
				}),
				onOpenInNewTab ? /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onOpenInNewTab,
					className: "flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
					"aria-label": t("Open in new tab"),
					title: t("Open in new tab"),
					...analyticsAttrs("agent-open-new-tab"),
					children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
				}) : null
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full min-w-0 max-w-7xl px-4 py-4 sm:px-6",
				children: /* @__PURE__ */ jsx(SettingsLayoutShell, {
					navItems,
					activeSectionId: section,
					cardIndex: AGENT_SETTINGS_CARD_INDEX,
					searchQuery: settingsNavSearch,
					onSearchQueryChange: setSettingsNavSearch,
					useRouteLinks: false,
					onNavigateToSection: (sectionId) => {
						if (sectionId === "models" || sectionId === "memory" || sectionId === "mcp" || sectionId === "usage") onSectionChange(sectionId);
					},
					children: /* @__PURE__ */ jsx(SettingsSection, { section })
				})
			})
		})]
	});
}
var HANDLE_CLASS = verticalPanelResizeHandleClass("z-[45]");
function AgentConversationsResizableLayout({ sidebar, children, className }) {
	const containerRef = useRef(null);
	const firstPanelRef = useRef(null);
	const prevContainerWidthRef = useRef(0);
	const [containerWidth, setContainerWidth] = useState(0);
	const { account } = useAuth();
	const accountPrefs = account;
	const { persistSidebarWidthPx } = useAIChatConversationsWidth(accountPrefs);
	const sidebarWidthPx = useMemo(() => clampAIChatConversationsSidebarWidthPx(parseAIChatConversationsWidthPx(accountPrefs?.prefs) ?? 288), [accountPrefs?.prefs]);
	const [mountedSidebarPx, setMountedSidebarPx] = useState(sidebarWidthPx);
	const isSidebarResizingRef = useRef(false);
	useLayoutEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const ro = new ResizeObserver((entries) => {
			setContainerWidth(entries[0]?.contentRect.width ?? 0);
		});
		ro.observe(el);
		setContainerWidth(el.getBoundingClientRect().width);
		return () => ro.disconnect();
	}, []);
	useEffect(() => {
		if (isSidebarResizingRef.current) return;
		setMountedSidebarPx((prev) => prev !== sidebarWidthPx ? sidebarWidthPx : prev);
	}, [sidebarWidthPx]);
	const panelLayout = useMemo(() => computeTwoPanelHorizontalLayout({
		containerWidth: effectivePanelGroupWidthPx(containerWidth),
		firstPx: mountedSidebarPx,
		firstMinPx: 220,
		firstMaxPx: 420,
		secondMinPx: 360
	}), [containerWidth, mountedSidebarPx]);
	useLayoutEffect(() => {
		if (containerWidth <= 0) return;
		if (isSidebarResizingRef.current) return;
		const prevWidth = prevContainerWidthRef.current;
		prevContainerWidthRef.current = containerWidth;
		if (prevWidth === containerWidth) return;
		const nextPx = syncPanelGroupFirstPanePx(firstPanelRef.current, containerWidth, mountedSidebarPx, {
			firstMinPx: 220,
			firstMaxPx: 420,
			secondMinPx: 360
		});
		if (nextPx !== mountedSidebarPx) setMountedSidebarPx(nextPx);
	}, [containerWidth, mountedSidebarPx]);
	const latestSidebarPxRef = useRef(sidebarWidthPx);
	useEffect(() => {
		if (isSidebarResizingRef.current) return;
		latestSidebarPxRef.current = sidebarWidthPx;
	}, [sidebarWidthPx]);
	const handleLayout = useCallback((sizes) => {
		if (!isSidebarResizingRef.current) return;
		const percent = sizes[0];
		if (typeof percent !== "number" || !Number.isFinite(percent)) return;
		const width = effectivePanelGroupWidthPx(containerWidth);
		latestSidebarPxRef.current = computeTwoPanelHorizontalLayout({
			containerWidth: width,
			firstPx: percent / 100 * width,
			firstMinPx: 220,
			firstMaxPx: 420,
			secondMinPx: 360
		}).firstPx;
	}, [containerWidth]);
	const handleSidebarDragging = useCallback((isDragging) => {
		if (isDragging) {
			isSidebarResizingRef.current = true;
			return;
		}
		if (!isSidebarResizingRef.current) return;
		isSidebarResizingRef.current = false;
		persistSidebarWidthPx(latestSidebarPxRef.current);
	}, [persistSidebarWidthPx]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className: cn("flex h-full min-h-0 min-w-0 flex-1 flex-col", className),
		children: /* @__PURE__ */ jsxs(ResizablePanelGroup, {
			direction: "horizontal",
			className: "h-full min-h-0 min-w-0 flex-1",
			onLayout: handleLayout,
			children: [
				/* @__PURE__ */ jsx(ResizablePanel, {
					ref: firstPanelRef,
					defaultSize: panelLayout.firstPercent,
					minSize: panelLayout.firstMinPercent,
					maxSize: panelLayout.firstMaxPercent,
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-e border-border bg-background",
						children: sidebar
					})
				}),
				/* @__PURE__ */ jsx(ResizableHandle, {
					className: HANDLE_CLASS,
					onDragging: handleSidebarDragging
				}),
				/* @__PURE__ */ jsx(ResizablePanel, {
					defaultSize: panelLayout.secondPercent,
					minSize: panelLayout.secondMinPercent,
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden",
						children
					})
				})
			]
		})
	});
}
function shortId(value, length = 8) {
	if (!value) return null;
	return value.length > length ? value.slice(0, length) : value;
}
function formatDebugValue(value) {
	if (value === void 0) return "—";
	if (value === null) return "null";
	if (typeof value === "string") return value.trim() ? value : "\"\"";
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
function DebugField({ label, value }) {
	const text = formatDebugValue(value);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[7.5rem_minmax(0,1fr)] gap-x-2 gap-y-0.5 text-[11px]",
		children: [/* @__PURE__ */ jsx("span", {
			className: "shrink-0 font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: "min-w-0 break-all font-mono text-[10px] text-foreground",
			title: text,
			children: text
		})]
	});
}
function DebugSection({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-1",
			children
		})]
	});
}
function MetaChip({ children }) {
	return /* @__PURE__ */ jsx("span", {
		className: "inline-flex max-w-[10rem] shrink-0 truncate rounded bg-purple-500/10 px-1 py-px font-mono text-[10px] text-purple-700 dark:text-purple-300",
		children
	});
}
function AgentMessageDebugCard({ message, align = "start" }) {
	const [open, setOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const turn = useMemo(() => buildTurnView(message), [message]);
	const tools = Array.isArray(message.tools) ? message.tools : [];
	const timeline = turn.timeline ?? [];
	const contentLength = message.contentText?.length ?? 0;
	const idShort = shortId(message.$id);
	const runShort = shortId(message.runId);
	const chips = [
		message.status || null,
		tools.length > 0 ? `${tools.length} tools` : null,
		turn.route?.agent || null,
		turn.agents.length > 0 ? `${turn.agents.length} subagents` : null,
		message.contextProjectId ? `proj:${shortId(message.contextProjectId)}` : null,
		runShort ? `run:${runShort}` : null,
		idShort ? `id:${idShort}` : null
	].filter(Boolean);
	const exportPayload = useMemo(() => ({
		message,
		turn
	}), [message, turn]);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(JSON.stringify(exportPayload, null, 2));
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1500);
		} catch {}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("button", {
		type: "button",
		dir: "ltr",
		onClick: () => setOpen(true),
		"aria-label": "Open message debug",
		title: "Open message debug",
		className: cn("flex max-w-full items-center gap-1.5 rounded-md px-1.5 py-0.5 text-start transition-colors", "text-purple-600 hover:bg-purple-500/10 dark:text-purple-400 dark:hover:bg-purple-500/15", align === "end" ? "ms-auto" : "me-auto"),
		children: [
			/* @__PURE__ */ jsx(Bug, { className: "h-3 w-3 shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1",
				children: chips.map((chip) => /* @__PURE__ */ jsx(MetaChip, { children: chip }, chip))
			}),
			/* @__PURE__ */ jsx(PanelRight, { className: "h-3 w-3 shrink-0 opacity-70" })
		]
	}), /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: setOpen,
		title: "Message debug",
		description: "Extended assistant message metadata for debugging.",
		maxWidth: "sm:max-w-xl",
		headerActions: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			size: "sm",
			variant: "outline",
			className: cn("h-8 gap-1.5 px-2.5 text-[12px]", "border-purple-500/40 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700", "dark:border-purple-400/40 dark:text-purple-400 dark:hover:bg-purple-500/15 dark:hover:text-purple-300"),
			onClick: () => {
				handleCopy();
			},
			children: [copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), copied ? "Copied" : "Copy JSON"]
		}),
		children: /* @__PURE__ */ jsxs("div", {
			dir: "ltr",
			lang: "en",
			className: "min-h-0 flex-1 space-y-4 overflow-y-auto px-6 pb-6",
			children: [
				/* @__PURE__ */ jsxs(DebugSection, {
					title: "Identity",
					children: [
						/* @__PURE__ */ jsx(DebugField, {
							label: "$id",
							value: message.$id
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "conversationId",
							value: message.conversationId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "parentMessageId",
							value: message.parentMessageId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "runId",
							value: message.runId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "editedFrom",
							value: message.editedFromMessageId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "retryFrom",
							value: message.retryFromMessageId
						})
					]
				}),
				/* @__PURE__ */ jsxs(DebugSection, {
					title: "Status",
					children: [
						/* @__PURE__ */ jsx(DebugField, {
							label: "role",
							value: message.role
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "status",
							value: message.status
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "contentType",
							value: message.contentType
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "contentLength",
							value: contentLength
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "$createdAt",
							value: message.$createdAt
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "$updatedAt",
							value: message.$updatedAt
						})
					]
				}),
				/* @__PURE__ */ jsxs(DebugSection, {
					title: "Context",
					children: [
						/* @__PURE__ */ jsx(DebugField, {
							label: "projectId",
							value: message.contextProjectId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "organizationId",
							value: message.contextOrganizationId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "teamId",
							value: message.contextTeamId
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "pagePath",
							value: message.contextPagePath
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "pageTitle",
							value: message.contextPageTitle
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "pageUrl",
							value: message.contextPageUrl
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "attachments",
							value: message.attachments
						})
					]
				}),
				/* @__PURE__ */ jsxs(DebugSection, {
					title: "Routing",
					children: [
						/* @__PURE__ */ jsx(DebugField, {
							label: "routeAgent",
							value: message.routeAgent
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "routeNext",
							value: message.routeNext
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "routeReason",
							value: message.routeReason
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "answeringAgent",
							value: turn.answeringAgent
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "statusLabel",
							value: turn.statusLabel
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "error",
							value: turn.error
						})
					]
				}),
				/* @__PURE__ */ jsxs(DebugSection, {
					title: "Turn",
					children: [
						/* @__PURE__ */ jsx(DebugField, {
							label: "subagents",
							value: turn.agents.map((agent) => ({
								agent: agent.agent,
								open: agent.open,
								failed: agent.failed,
								toolCallCount: agent.toolCallCount,
								summary: agent.summary
							}))
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "tools",
							value: turn.toolOrder.map((key) => {
								const tool = turn.tools[key];
								return {
									key,
									name: tool?.name,
									agent: tool?.agent,
									status: tool?.status,
									toolCallId: tool?.toolCallId,
									errorMessage: tool?.errorMessage
								};
							})
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "timelineEvents",
							value: timeline.length
						}),
						/* @__PURE__ */ jsx(DebugField, {
							label: "rawTools",
							value: tools.length
						})
					]
				}),
				/* @__PURE__ */ jsx(DebugSection, {
					title: "Raw message",
					children: /* @__PURE__ */ jsx("pre", {
						className: "max-h-[min(40dvh,20rem)] overflow-auto whitespace-pre-wrap break-words rounded-md border border-border bg-muted/30 p-2.5 font-mono text-[10px] text-foreground",
						children: JSON.stringify(message, null, 2)
					})
				}),
				/* @__PURE__ */ jsx(DebugSection, {
					title: "Derived turn",
					children: /* @__PURE__ */ jsx("pre", {
						className: "max-h-[min(40dvh,20rem)] overflow-auto whitespace-pre-wrap break-words rounded-md border border-border bg-muted/30 p-2.5 font-mono text-[10px] text-foreground",
						children: JSON.stringify(turn, null, 2)
					})
				})
			]
		})
	})] });
}
var VISIBLE_COLLAPSED = 5;
function FaviconImage({ site }) {
	const [failed, setFailed] = useState(false);
	const src = sdk.forConsole.avatars.getFavicon({ url: site.url });
	return /* @__PURE__ */ jsx("span", {
		className: cn("relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full", "border border-border bg-muted text-muted-foreground shadow-sm"),
		children: failed ? /* @__PURE__ */ jsx(Globe, {
			className: "h-3 w-3",
			"aria-hidden": true
		}) : /* @__PURE__ */ jsx("img", {
			src,
			alt: "",
			width: 20,
			height: 20,
			className: "h-full w-full object-cover",
			loading: "lazy",
			decoding: "async",
			onError: () => setFailed(true)
		})
	});
}
function ToolSiteFaviconStack({ sites, className }) {
	if (sites.length === 0) return null;
	const overflow = Math.max(0, sites.length - VISIBLE_COLLAPSED);
	const visible = sites.slice(0, VISIBLE_COLLAPSED);
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("group/stack flex shrink-0 items-center", className),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center",
				children: [visible.map((site, index) => /* @__PURE__ */ jsxs(Tooltip$1, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("a", {
						href: site.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: cn("relative block transition-all duration-200 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1", index > 0 && "-ms-2 group-hover/stack:ms-1 group-focus-within/stack:ms-1"),
						style: { zIndex: visible.length - index },
						"aria-label": site.hostname,
						children: /* @__PURE__ */ jsx(FaviconImage, { site })
					})
				}), /* @__PURE__ */ jsxs(TooltipContent, {
					side: "top",
					className: "max-w-[220px] text-[11px]",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-medium",
						children: site.hostname
					}), site.label && site.label !== site.url ? /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 block truncate text-muted-foreground",
						children: site.label
					}) : null]
				})] }, site.url)), overflow > 0 ? /* @__PURE__ */ jsxs("span", {
					className: cn("relative z-0 flex h-5 min-w-5 items-center justify-center rounded-full", "border border-border bg-muted px-1 text-[9px] font-medium text-muted-foreground", "-ms-2 transition-all duration-200 group-hover/stack:ms-1 group-focus-within/stack:ms-1"),
					children: ["+", overflow]
				}) : null]
			})
		})
	});
}
var SITE_VISUAL_TOOLS = new Set([
	"web_search",
	"browser_fetch",
	"browser_navigate",
	"web_fetch",
	"fetch_url",
	"browse_page"
]);
var URL_STRING_RE = /https?:\/\/[^\s"'<>\\)\]]+/gi;
var URL_KEYS = new Set([
	"url",
	"link",
	"href",
	"source",
	"website",
	"uri",
	"pageUrl",
	"page_url",
	"canonicalUrl",
	"canonical_url"
]);
function cleanUrlCandidate(raw) {
	let value = raw.trim();
	if (!value) return null;
	value = value.replace(/[.,;:!?)]+$/g, "");
	try {
		const parsed = new URL(value);
		if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
		return parsed.toString();
	} catch {
		return null;
	}
}
function originUrl(href) {
	try {
		return new URL(href).origin;
	} catch {
		return null;
	}
}
function hostnameOf(href) {
	try {
		return new URL(href).hostname.replace(/^www\./i, "");
	} catch {
		return null;
	}
}
function addSite(sites, href, label) {
	const cleaned = cleanUrlCandidate(href);
	if (!cleaned) return;
	const origin = originUrl(cleaned);
	const hostname = hostnameOf(cleaned);
	if (!origin || !hostname) return;
	const existing = sites.get(origin);
	if (existing) {
		if (!existing.label && label) existing.label = label;
		return;
	}
	sites.set(origin, {
		url: origin,
		hostname,
		label: label || cleaned
	});
}
function collectFromString(sites, value) {
	URL_STRING_RE.lastIndex = 0;
	let match;
	while ((match = URL_STRING_RE.exec(value)) !== null) addSite(sites, match[0]);
}
function collectFromUnknown(sites, value, depth = 0) {
	if (value == null || depth > 6) return;
	if (typeof value === "string") {
		const asUrl = cleanUrlCandidate(value);
		if (asUrl) {
			addSite(sites, asUrl);
			return;
		}
		collectFromString(sites, value);
		return;
	}
	if (Array.isArray(value)) {
		for (const item of value) collectFromUnknown(sites, item, depth + 1);
		return;
	}
	if (typeof value !== "object") return;
	const record = value;
	const title = typeof record.title === "string" ? record.title : typeof record.name === "string" ? record.name : void 0;
	for (const [key, entry] of Object.entries(record)) {
		if (URL_KEYS.has(key) && typeof entry === "string") {
			addSite(sites, entry, title);
			continue;
		}
		collectFromUnknown(sites, entry, depth + 1);
	}
}
function isSiteVisualTool(toolName) {
	if (!toolName) return false;
	return SITE_VISUAL_TOOLS.has(toolName.toLowerCase());
}
function getToolVisualSites(tool, limit = 8) {
	if (!isSiteVisualTool(tool.name)) return null;
	const sites = /* @__PURE__ */ new Map();
	collectFromUnknown(sites, tool.input);
	collectFromUnknown(sites, tool.output);
	if (sites.size === 0) return null;
	return Array.from(sites.values()).slice(0, limit);
}
const CLARIFY_PROTOCOL_ID = "appwrite.clarify/v1";
const CLARIFY_TOOL_NAME = "clarify";
function isClarifyToolName(name) {
	return (name?.trim().toLowerCase() ?? "") === CLARIFY_TOOL_NAME;
}
function toolOutputToText(output) {
	if (output === void 0 || output === null) return null;
	if (typeof output === "string") return output;
	try {
		return JSON.stringify(output);
	} catch {
		return String(output);
	}
}
function asNonEmptyString(value) {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return trimmed ? trimmed : null;
}
function parseClarifyOption(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return null;
	const record = value;
	const id = asNonEmptyString(record.id);
	const label = asNonEmptyString(record.label);
	if (!id || !label) return null;
	const description = asNonEmptyString(record.description) ?? void 0;
	return description ? {
		id,
		label,
		description
	} : {
		id,
		label
	};
}
function parseClarifyPrompt(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return null;
	const record = value;
	const id = asNonEmptyString(record.id);
	const kind = asNonEmptyString(record.kind);
	const question = asNonEmptyString(record.question);
	if (!id || !kind || !question) return null;
	const hint = asNonEmptyString(record.hint) ?? void 0;
	const required = typeof record.required === "boolean" ? record.required : void 0;
	if (kind === "choice") {
		if (!Array.isArray(record.options)) return null;
		const options = record.options.map(parseClarifyOption).filter((option) => option !== null);
		if (options.length < 2) return null;
		return {
			id,
			kind: "choice",
			question,
			hint,
			required,
			options,
			allowMultiple: typeof record.allowMultiple === "boolean" ? record.allowMultiple : void 0
		};
	}
	if (kind === "confirm") return {
		id,
		kind: "confirm",
		question,
		hint,
		required,
		confirmLabel: asNonEmptyString(record.confirmLabel) ?? void 0,
		cancelLabel: asNonEmptyString(record.cancelLabel) ?? void 0,
		danger: typeof record.danger === "boolean" ? record.danger : void 0
	};
	if (kind === "text") return {
		id,
		kind: "text",
		question,
		hint,
		required,
		placeholder: asNonEmptyString(record.placeholder) ?? void 0,
		defaultValue: typeof record.defaultValue === "string" ? record.defaultValue : void 0,
		multiline: typeof record.multiline === "boolean" ? record.multiline : void 0
	};
	return null;
}
function parseClarifyEnvelope(output) {
	const text = toolOutputToText(output)?.trim();
	if (!text) return null;
	if (text.startsWith("Error:")) return null;
	try {
		const parsed = JSON.parse(text);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
		const record = parsed;
		if (record.protocol !== "appwrite.clarify/v1") return null;
		if (!Array.isArray(record.prompts)) return null;
		const prompts = record.prompts.map(parseClarifyPrompt).filter((prompt) => prompt !== null);
		if (prompts.length === 0) return null;
		return {
			protocol: CLARIFY_PROTOCOL_ID,
			title: asNonEmptyString(record.title) ?? void 0,
			prompts
		};
	} catch {
		return null;
	}
}
function clarifyToolKey(tool) {
	return tool.toolCallId || tool.id || `${tool.messageId ?? "message"}:${tool.name ?? "clarify"}`;
}
function collectClarifyEnvelopes(tools) {
	const results = [];
	for (const tool of tools) {
		if (!isClarifyToolName(tool.name)) continue;
		if (tool.errorMessage) continue;
		const status = tool.status?.toLowerCase() ?? "";
		if (status === "error" || status === "failed") continue;
		const envelope = parseClarifyEnvelope(tool.output);
		if (!envelope) continue;
		results.push({
			key: clarifyToolKey(tool),
			messageId: tool.messageId,
			toolCallId: tool.toolCallId,
			envelope
		});
	}
	return results;
}
function isClarifyPromptRequired(prompt) {
	return prompt.required !== false;
}
function serializeClarifyAnswers(answers) {
	return JSON.stringify(answers);
}
function formatClarifyAnswersSummary(answers) {
	return answers.answers.map((answer) => {
		if (answer.kind === "choice") return `${answer.id}: ${answer.values.join(", ")}`;
		if (answer.kind === "confirm") return `${answer.id}: ${answer.confirmed ? "confirmed" : "cancelled"}`;
		return `${answer.id}: ${answer.value}`;
	}).join("\n");
}
function parseClarifyAnswers(text) {
	const trimmed = text.trim();
	if (!trimmed || trimmed.startsWith("Error:")) return null;
	try {
		const parsed = JSON.parse(trimmed);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
		const record = parsed;
		if (record.protocol !== "appwrite.clarify/v1") return null;
		if (!Array.isArray(record.answers)) return null;
		const answers = [];
		for (const item of record.answers) {
			if (!item || typeof item !== "object" || Array.isArray(item)) continue;
			const entry = item;
			const id = asNonEmptyString(entry.id);
			const kind = asNonEmptyString(entry.kind);
			if (!id || !kind) continue;
			if (kind === "choice" && Array.isArray(entry.values)) {
				const values = entry.values.filter((value) => typeof value === "string" && value.trim().length > 0);
				answers.push({
					id,
					kind: "choice",
					values
				});
				continue;
			}
			if (kind === "confirm" && typeof entry.confirmed === "boolean") {
				answers.push({
					id,
					kind: "confirm",
					confirmed: entry.confirmed
				});
				continue;
			}
			if (kind === "text" && typeof entry.value === "string") answers.push({
				id,
				kind: "text",
				value: entry.value
			});
		}
		if (answers.length === 0) return null;
		return {
			protocol: CLARIFY_PROTOCOL_ID,
			answers
		};
	} catch {
		return null;
	}
}
function draftsFromClarifyAnswers(prompts, answers) {
	const drafts = {};
	const byId = new Map((answers?.answers ?? []).map((answer) => [answer.id, answer]));
	for (const prompt of prompts) {
		const answer = byId.get(prompt.id);
		if (prompt.kind === "choice") {
			drafts[prompt.id] = {
				kind: "choice",
				values: answer?.kind === "choice" ? answer.values : []
			};
			continue;
		}
		if (prompt.kind === "confirm") {
			drafts[prompt.id] = {
				kind: "confirm",
				confirmed: answer?.kind === "confirm" ? answer.confirmed : null
			};
			continue;
		}
		drafts[prompt.id] = {
			kind: "text",
			value: answer?.kind === "text" ? answer.value : prompt.defaultValue ?? ""
		};
	}
	return drafts;
}
function visibleTools(tools) {
	return tools.filter((tool) => !isConsoleToolName(tool.name) && !isClarifyToolName(tool.name));
}
var reportedAssistantErrors = /* @__PURE__ */ new Set();
function formatToolPayload(value) {
	if (value === void 0 || value === null || value === "") return null;
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}
function ToolCallCard({ tool, showAgentBadge = true }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const status = tool.status?.toLowerCase() ?? "running";
	const isRunning = status === "running" || status === "queued";
	const isError = status === "error" || status === "failed" || !!tool.errorMessage;
	const inputText = formatToolPayload(tool.input);
	const outputText = formatToolPayload(tool.output ?? tool.errorMessage);
	const visualSites = useMemo(() => getToolVisualSites(tool), [
		tool.input,
		tool.name,
		tool.output
	]);
	return /* @__PURE__ */ jsx(Collapsible, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-md border border-border bg-muted/20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center gap-2 px-3 py-2",
				children: [
					/* @__PURE__ */ jsx(CollapsibleTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "flex min-w-0 flex-1 items-center gap-2 text-start",
							children: [
								isRunning ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" }) : isError ? /* @__PURE__ */ jsx(AlertCircle, { className: "h-3.5 w-3.5 shrink-0 text-destructive" }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 shrink-0 text-green-600" }),
								/* @__PURE__ */ jsx(Wrench, { className: "h-3.5 w-3.5 shrink-0 fill-current text-muted-foreground" }),
								/* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 truncate text-[13px] font-medium text-foreground",
									children: tool.name
								})
							]
						})
					}),
					visualSites && visualSites.length > 0 ? /* @__PURE__ */ jsx(ToolSiteFaviconStack, { sites: visualSites }) : null,
					showAgentBadge && tool.agent ? /* @__PURE__ */ jsx(Badge, {
						variant: "info",
						className: "text-[10px] shrink-0",
						children: t(getAssistantAgentLabel(tool.agent))
					}) : null,
					/* @__PURE__ */ jsx(CollapsibleTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground",
							"aria-label": tool.name,
							children: /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-3 w-3 transition-transform", open && "rotate-180") })
						})
					})
				]
			}), /* @__PURE__ */ jsx(CollapsibleContent, {
				className: "overflow-hidden data-[state=open]:overflow-visible",
				children: /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 space-y-2.5 border-t border-border px-3 py-2.5",
					children: [inputText ? /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Input")
						}), /* @__PURE__ */ jsx("pre", {
							className: "max-h-[min(70dvh,36rem)] overflow-x-auto overflow-y-auto whitespace-pre-wrap break-words rounded bg-background/60 p-2.5 text-[12px] leading-relaxed text-foreground",
							children: inputText
						})]
					}) : null, outputText ? /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: isError ? t("Error") : t("Output")
						}), /* @__PURE__ */ jsx("pre", {
							className: "max-h-[min(70dvh,36rem)] overflow-x-auto overflow-y-auto whitespace-pre-wrap break-words rounded bg-background/60 p-2.5 text-[12px] leading-relaxed text-foreground",
							children: outputText
						})]
					}) : isRunning ? /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Running...")
					}) : null]
				})
			})]
		})
	});
}
function SubagentSection({ turn, agent, open, summary, failed, toolCallCount }) {
	const t = useT();
	const [expanded, setExpanded] = useState(open);
	const tools = visibleTools(toolsForAgent(turn, agent));
	const hasBody = !!summary || tools.length > 0 || open;
	const displayToolCallCount = typeof toolCallCount === "number" ? Math.min(toolCallCount, tools.length || toolCallCount) : tools.length || void 0;
	useEffect(() => {
		setExpanded(open);
	}, [open]);
	return /* @__PURE__ */ jsx(Collapsible, {
		open: expanded && hasBody,
		onOpenChange: (next) => {
			if (!hasBody && next) return;
			setExpanded(next);
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-md border border-border bg-card/40",
			children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "flex w-full items-center gap-2 px-3 py-2 text-start",
					disabled: !hasBody && !open,
					children: [
						open ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" }) : failed ? /* @__PURE__ */ jsx(AlertCircle, { className: "h-3.5 w-3.5 shrink-0 text-destructive" }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 shrink-0 text-green-600" }),
						/* @__PURE__ */ jsx("span", {
							className: "min-w-0 flex-1 truncate text-[13px] font-medium text-foreground",
							children: t(getAssistantAgentLabel(agent))
						}),
						/* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: "text-[10px] shrink-0",
							children: t("Subagent")
						}),
						typeof displayToolCallCount === "number" && displayToolCallCount > 0 ? /* @__PURE__ */ jsxs("span", {
							className: "text-[11px] text-muted-foreground",
							children: [
								displayToolCallCount,
								" ",
								displayToolCallCount === 1 ? t("tool call") : t("tool calls")
							]
						}) : null,
						hasBody ? /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-3 w-3 shrink-0 text-muted-foreground transition-transform", expanded && "rotate-180") }) : null
					]
				})
			}), hasBody ? /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-2 border-t border-border px-3 py-2.5",
				children: [summary ? /* @__PURE__ */ jsx("p", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: summary
				}) : null, tools.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: tools.map((tool) => /* @__PURE__ */ jsx(ToolCallCard, {
						tool,
						showAgentBadge: false
					}, tool.toolCallId || tool.id || `${tool.agent}-${tool.name}`))
				}) : open ? /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("Working...")
				}) : null]
			}) }) : null]
		})
	});
}
function AgentTurnActivity({ message }) {
	const t = useT();
	const turn = useMemo(() => buildTurnView(message), [message]);
	const [copiedError, setCopiedError] = useState(false);
	const inFlight = isAssistantMessageInFlight(message.status);
	const orphanTools = visibleTools(unscopedTools(turn));
	const routeAgent = turn.route?.agent;
	const showRoute = !!routeAgent && routeAgent !== "FINISH" && routeAgent !== "supervisor";
	const hasAnswer = !!turn.contentText.trim() || !!turn.answeringAgent;
	const showStatusLabel = inFlight && !hasAnswer && (!!turn.statusLabel || !showRoute && turn.agents.length === 0 && orphanTools.length === 0);
	const statusText = turn.statusLabel || t("Thinking...");
	const hasActivity = showStatusLabel || showRoute || turn.agents.length > 0 || orphanTools.length > 0 || !!turn.error;
	useEffect(() => {
		if (!turn.error) return;
		const fingerprint = `${turn.messageId}:${turn.error}`;
		if (reportedAssistantErrors.has(fingerprint)) return;
		reportedAssistantErrors.add(fingerprint);
		captureExceptionWithContext(new Error(turn.error), {
			source: "assistant-turn-error",
			messageId: turn.messageId,
			messageStatus: message.status
		});
	}, [
		message.status,
		turn.error,
		turn.messageId
	]);
	if (!hasActivity) return null;
	const handleCopyError = async () => {
		if (!turn.error) return;
		try {
			await navigator.clipboard.writeText(turn.error);
			setCopiedError(true);
			toast.success(t("Error details copied to clipboard"));
			window.setTimeout(() => setCopiedError(false), 2e3);
		} catch {
			toast.error(t("Failed to copy"));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-3 space-y-2",
		children: [
			showStatusLabel ? /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-[12px] text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: statusText })]
			}) : null,
			showRoute || turn.route?.reason ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [showRoute ? /* @__PURE__ */ jsxs(Badge, {
					variant: "info",
					className: "text-[10px] shrink-0 gap-1",
					children: [
						/* @__PURE__ */ jsx(Route, { className: "h-2.5 w-2.5" }),
						t("Routed to"),
						" ",
						t(getAssistantAgentLabel(routeAgent))
					]
				}) : null, turn.route?.reason ? /* @__PURE__ */ jsx("span", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: turn.route.reason
				}) : null]
			}) : null,
			turn.agents.map((section) => /* @__PURE__ */ jsx(SubagentSection, {
				turn,
				agent: section.agent,
				open: section.open,
				summary: section.summary,
				failed: section.failed,
				toolCallCount: section.toolCallCount
			}, `${turn.messageId}-${section.agent}-${section.summary ?? ""}`)),
			orphanTools.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: orphanTools.map((tool) => /* @__PURE__ */ jsx(ToolCallCard, { tool }, tool.toolCallId || tool.id || `${tool.agent}-${tool.name}`))
			}) : null,
			turn.error ? /* @__PURE__ */ jsxs("div", {
				className: "relative flex items-start gap-2 rounded-md border border-border bg-muted/20 px-3 py-2 pe-9 text-[13px] leading-relaxed text-foreground",
				children: [
					/* @__PURE__ */ jsx(AlertCircle, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" }),
					/* @__PURE__ */ jsx("span", {
						className: "min-w-0 flex-1 break-words",
						children: turn.error
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "absolute end-1.5 top-1.5 h-6 w-6 p-0 text-muted-foreground hover:text-foreground",
						onClick: () => void handleCopyError(),
						"aria-label": t("Copy error details"),
						children: copiedError ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
					})
				]
			}) : null
		]
	});
}
function buildInitialDrafts(prompts, priorAnswers) {
	if (priorAnswers) return draftsFromClarifyAnswers(prompts, priorAnswers);
	return draftsFromClarifyAnswers(prompts, null);
}
function isPromptAnswered(prompt, draft) {
	if (!draft || draft.kind !== prompt.kind) return false;
	if (prompt.kind === "choice" && draft.kind === "choice") return draft.values.length > 0;
	if (prompt.kind === "confirm" && draft.kind === "confirm") return draft.confirmed !== null;
	if (prompt.kind === "text" && draft.kind === "text") return draft.value.trim().length > 0;
	return false;
}
function canSubmitClarify(prompts, drafts) {
	for (const prompt of prompts) {
		if (!isClarifyPromptRequired(prompt)) continue;
		if (!isPromptAnswered(prompt, drafts[prompt.id])) return false;
	}
	return true;
}
function buildClarifyAnswers(prompts, drafts) {
	if (!canSubmitClarify(prompts, drafts)) return null;
	const answers = [];
	for (const prompt of prompts) {
		const draft = drafts[prompt.id];
		if (!draft || draft.kind !== prompt.kind) continue;
		if (prompt.kind === "choice" && draft.kind === "choice") {
			if (draft.values.length === 0) {
				if (isClarifyPromptRequired(prompt)) return null;
				continue;
			}
			answers.push({
				id: prompt.id,
				kind: "choice",
				values: draft.values
			});
			continue;
		}
		if (prompt.kind === "confirm" && draft.kind === "confirm") {
			if (draft.confirmed === null) {
				if (isClarifyPromptRequired(prompt)) return null;
				continue;
			}
			answers.push({
				id: prompt.id,
				kind: "confirm",
				confirmed: draft.confirmed
			});
			continue;
		}
		if (prompt.kind === "text" && draft.kind === "text") {
			const value = draft.value.trim();
			if (!value) {
				if (isClarifyPromptRequired(prompt)) return null;
				continue;
			}
			answers.push({
				id: prompt.id,
				kind: "text",
				value
			});
		}
	}
	return {
		protocol: CLARIFY_PROTOCOL_ID,
		answers
	};
}
function toggleChoiceValue(values, optionId, allowMultiple) {
	if (!allowMultiple) return [optionId];
	if (values.includes(optionId)) return values.filter((value) => value !== optionId);
	return [...values, optionId];
}
function ClarifyPromptView({ prompt, draft, disabled, onChange }) {
	const t = useT();
	if (prompt.kind === "choice") {
		const values = draft?.kind === "choice" ? draft.values : [];
		const allowMultiple = prompt.allowMultiple === true;
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: prompt.question
			}), prompt.hint ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] text-muted-foreground",
				children: prompt.hint
			}) : null] }), /* @__PURE__ */ jsx("div", {
				className: "space-y-1.5",
				children: prompt.options.map((option) => {
					const selected = values.includes(option.id);
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						disabled,
						onClick: () => onChange({
							kind: "choice",
							values: toggleChoiceValue(values, option.id, allowMultiple)
						}),
						className: cn("flex w-full items-start gap-2.5 rounded-md border px-3 py-2 text-start transition-colors", "disabled:cursor-not-allowed disabled:opacity-60", selected ? "border-foreground/25 bg-muted/50" : "border-border bg-background hover:bg-muted/30"),
						children: [allowMultiple ? /* @__PURE__ */ jsx(Checkbox, {
							checked: selected,
							disabled,
							className: "mt-0.5",
							tabIndex: -1,
							"aria-hidden": true
						}) : /* @__PURE__ */ jsx("span", {
							className: cn("mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border", selected ? "border-foreground bg-foreground" : "border-muted-foreground/40"),
							"aria-hidden": true,
							children: selected ? /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-background" }) : null
						}), /* @__PURE__ */ jsxs("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block text-[13px] font-medium text-foreground",
								children: option.label
							}), option.description ? /* @__PURE__ */ jsx("span", {
								className: "mt-0.5 block text-[12px] text-muted-foreground",
								children: option.description
							}) : null]
						})]
					}, option.id);
				})
			})]
		});
	}
	if (prompt.kind === "confirm") {
		const confirmed = draft?.kind === "confirm" ? draft.confirmed : null;
		const confirmLabel = prompt.confirmLabel?.trim() || t("Confirm");
		const cancelLabel = prompt.cancelLabel?.trim() || t("Cancel");
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: prompt.question
			}), prompt.hint ? /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[12px] text-muted-foreground",
				children: prompt.hint
			}) : null] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: prompt.danger ? "destructive" : "default",
					className: "h-8 text-[12px]",
					disabled,
					"aria-pressed": confirmed === true,
					onClick: () => onChange({
						kind: "confirm",
						confirmed: true
					}),
					children: confirmLabel
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: "outline",
					className: cn("h-8 text-[12px]", confirmed === false && "border-foreground/25 bg-muted/50"),
					disabled,
					"aria-pressed": confirmed === false,
					onClick: () => onChange({
						kind: "confirm",
						confirmed: false
					}),
					children: cancelLabel
				})]
			})]
		});
	}
	const value = draft?.kind === "text" ? draft.value : prompt.defaultValue ?? "";
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-[13px] font-medium text-foreground",
			children: prompt.question
		}), prompt.hint ? /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[12px] text-muted-foreground",
			children: prompt.hint
		}) : null] }), prompt.multiline ? /* @__PURE__ */ jsx(Textarea, {
			value,
			disabled,
			placeholder: prompt.placeholder,
			onChange: (event) => onChange({
				kind: "text",
				value: event.target.value
			}),
			className: "min-h-[72px] text-[13px]"
		}) : /* @__PURE__ */ jsx(Input, {
			value,
			disabled,
			placeholder: prompt.placeholder,
			onChange: (event) => onChange({
				kind: "text",
				value: event.target.value
			}),
			className: "h-9 text-[13px]"
		})]
	});
}
function ClarifyEnvelopeForm({ item, interactive, priorAnswers, onSubmitAnswers }) {
	const t = useT();
	const { envelope } = item;
	const [drafts, setDrafts] = useState(() => buildInitialDrafts(envelope.prompts, priorAnswers));
	const [submitted, setSubmitted] = useState(!!priorAnswers);
	const submittedRef = useRef(!!priorAnswers);
	useEffect(() => {
		setDrafts(buildInitialDrafts(envelope.prompts, priorAnswers));
		const alreadyAnswered = !!priorAnswers;
		setSubmitted(alreadyAnswered);
		submittedRef.current = alreadyAnswered;
	}, [item.key, priorAnswers]);
	const disabled = !interactive || submitted;
	const canSubmit = canSubmitClarify(envelope.prompts, drafts);
	const confirmOnly = envelope.prompts.length === 1 && envelope.prompts[0]?.kind === "confirm";
	const submitFromDrafts = (nextDrafts) => {
		if (submittedRef.current || !interactive) return;
		const answers = buildClarifyAnswers(envelope.prompts, nextDrafts);
		if (!answers) return;
		submittedRef.current = true;
		setSubmitted(true);
		onSubmitAnswers(serializeClarifyAnswers(answers));
	};
	const handlePromptChange = (prompt, next) => {
		if (submittedRef.current) return;
		const updated = {
			...drafts,
			[prompt.id]: next
		};
		setDrafts(updated);
		if (confirmOnly && next.kind === "confirm" && next.confirmed !== null) submitFromDrafts(updated);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-md border border-border bg-muted/20 p-3",
		children: [
			envelope.title ? /* @__PURE__ */ jsx("p", {
				className: "mb-3 text-[13px] font-semibold text-foreground",
				children: envelope.title
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: envelope.prompts.map((prompt) => /* @__PURE__ */ jsx(ClarifyPromptView, {
					prompt,
					draft: drafts[prompt.id],
					disabled,
					onChange: (next) => handlePromptChange(prompt, next)
				}, prompt.id))
			}),
			!confirmOnly ? /* @__PURE__ */ jsx("div", {
				className: "mt-3 flex justify-end",
				children: /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					className: "h-8 text-[12px]",
					disabled: disabled || !canSubmit,
					onClick: () => submitFromDrafts(drafts),
					children: t("Continue")
				})
			}) : null
		]
	});
}
function AgentClarifySurfaces({ message, interactive = false, followingUserText, onSubmitAnswers }) {
	const priorAnswers = useMemo(() => followingUserText ? parseClarifyAnswers(followingUserText) : null, [followingUserText]);
	const envelopes = useMemo(() => {
		const turn = buildTurnView(message);
		return collectClarifyEnvelopes(turn.toolOrder.map((key) => turn.tools[key]).filter(Boolean).map((tool) => ({
			...tool,
			messageId: turn.messageId
		})));
	}, [message]);
	if (envelopes.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-3",
		children: envelopes.map((item) => /* @__PURE__ */ jsx(ClarifyEnvelopeForm, {
			item,
			interactive: interactive && !!onSubmitAnswers && !priorAnswers,
			priorAnswers,
			onSubmitAnswers: onSubmitAnswers ?? (() => {})
		}, item.key))
	});
}
function createConsoleRefreshHandler(queryClient, projectId) {
	return async (scopes) => {
		const unique = [...new Set(scopes.map((s) => s.trim().toLowerCase()).filter(Boolean))];
		await Promise.all(unique.map(async (scope) => {
			const prefixes = CONSOLE_REFRESH_SCOPE_KEYS[scope] ?? [scope];
			for (const prefix of prefixes) {
				if (projectId && (prefix === "project" || scope === "project")) {
					await queryClient.refetchQueries({ queryKey: ["project", projectId] });
					continue;
				}
				if (projectId) await queryClient.refetchQueries({ queryKey: [
					prefix,
					"project",
					projectId
				] });
				await queryClient.refetchQueries({ queryKey: [prefix] });
			}
		}));
	};
}
function createOpenCreateHandler(navigate, defaultProjectId) {
	return (resource, projectId) => {
		const id = projectId?.trim() || defaultProjectId?.trim();
		if (!id) return;
		if (resource === "database") {
			navigate({
				to: "/projects/$projectId/databases",
				params: { projectId: id },
				search: { create: "database" }
			});
			return;
		}
		if (resource === "bucket") {
			navigate({
				to: "/projects/$projectId/storage",
				params: { projectId: id },
				search: { create: "bucket" }
			});
			return;
		}
		if (resource === "user") {
			navigate({
				to: "/projects/$projectId/auth",
				params: { projectId: id },
				search: { create: "user" }
			});
			return;
		}
		if (resource === "team") {
			navigate({
				to: "/projects/$projectId/auth",
				params: { projectId: id },
				search: { create: "team" }
			});
			return;
		}
		if (resource === "function") {
			navigate({
				to: "/projects/$projectId/functions/create",
				params: { projectId: id }
			});
			return;
		}
		if (resource === "site") navigate({
			to: "/projects/$projectId/sites/create",
			params: { projectId: id }
		});
	};
}
function applyConsoleAction(action, handlers) {
	switch (action.type) {
		case "set_theme":
			if (action.theme === "light" || action.theme === "dark" || action.theme === "system") handlers.setTheme(action.theme);
			return;
		case "navigate":
			if (typeof action.path !== "string" || !action.path.startsWith("/")) return;
			handlers.navigate({
				path: normalizeConsolePath(action.path),
				hash: action.hash,
				replace: action.replace
			});
			return;
		case "open_create":
			handlers.openCreate(action.resource, action.projectId);
			return;
		case "open_dialog":
			handlers.openDialog(action.dialog, action.projectId);
			return;
		case "toast": {
			const opts = action.description ? { description: action.description } : void 0;
			if (action.level === "success") toast.success(action.message, opts);
			else if (action.level === "error") toast.error(action.message, opts);
			else if (action.level === "warning") toast.warning(action.message, opts);
			else toast.info(action.message, opts);
			return;
		}
		case "show_pane":
			handlers.showPane(action.content);
			return;
		case "toggle_terminal":
			handlers.toggleTerminal();
			return;
		case "scroll_to_card":
			if (typeof action.cardId !== "string" || !action.cardId.trim()) return;
			scrollToConsoleCard(normalizeCardId(action.cardId));
			return;
		case "refresh":
			if (!Array.isArray(action.scopes) || action.scopes.length === 0) return;
			handlers.refreshScopes(action.scopes);
			return;
		case "resource":
		case "resource_list":
		case "chart": return;
		default: return;
	}
}
function applyConsoleEnvelope(envelope, handlers) {
	for (const action of envelope.actions) {
		if (!action || typeof action !== "object" || !("type" in action)) continue;
		if (!isSideEffectConsoleAction(action)) continue;
		applyConsoleAction(action, handlers);
	}
}
var opener = null;
function registerCommandCenterOpener(next) {
	opener = next;
	return () => {
		if (opener === next) opener = null;
	};
}
function openCommandCenterViaBridge(page = null) {
	if (!opener) return false;
	opener(page);
	return true;
}
var INCOMPLETE_TOOL_STATUSES$1 = new Set([
	"running",
	"queued",
	"pending",
	"processing",
	"in_progress",
	"in-progress"
]);
function isIncompleteToolStatus$1(status) {
	return INCOMPLETE_TOOL_STATUSES$1.has((status ?? "").trim().toLowerCase());
}
function isSuccessfulToolStatus$1(status) {
	const normalized = (status ?? "").trim().toLowerCase();
	return normalized === "success" || normalized === "completed";
}
function useConsoleProtocolHandlers(options) {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { setTheme } = useTheme();
	const { showAgent, showDocs, hideRightPane } = useConsoleRightPane();
	const cliShell = useCliShellOptional();
	const projectConnect = useProjectConnectDialog();
	const projectId = options?.projectId;
	const organizationId = options?.organizationId;
	return useMemo(() => {
		return {
			setTheme: (theme) => {
				setTheme(theme);
			},
			navigate: ({ path, hash, replace }) => {
				const normalized = normalizeConsolePath(path);
				let hashValue = hash?.trim() || void 0;
				if (hashValue?.startsWith("#")) hashValue = hashValue.slice(1);
				const href = hashValue ? `${normalized}#${hashValue}` : normalized;
				return navigate({
					to: href,
					replace: !!replace
				}).catch(() => {
					if (typeof window !== "undefined") if (replace) window.location.replace(href);
					else window.location.assign(href);
				});
			},
			openCreate: createOpenCreateHandler((opts) => {
				return navigate(opts);
			}, projectId),
			openDialog: (dialog, dialogProjectId) => {
				dialogProjectId?.trim() || projectId?.trim();
				if (dialog === "connect_mcp") {
					projectConnect?.openConnect("mcp");
					return;
				}
				if (dialog === "shortcuts" || dialog === "feedback" || dialog === "support" || dialog === "docs_search") {
					openCommandCenterViaBridge(dialog === "docs_search" ? "docs" : dialog === "shortcuts" ? "shortcuts" : dialog === "feedback" ? "feedback" : "support");
					return;
				}
				if (dialog === "create_project") {
					const orgId = organizationId?.trim();
					if (orgId) navigate({
						to: "/organizations/$orgId",
						params: { orgId },
						search: { create: "project" }
					});
					else navigate({
						to: "/",
						search: { create: "project" }
					});
					return;
				}
				if (dialog === "invite_member") {
					const orgId = organizationId?.trim();
					if (orgId) navigate({
						to: "/organizations/$orgId",
						params: { orgId },
						search: { invite: "member" }
					});
					return;
				}
			},
			showPane: (content) => {
				if (content === "agent") showAgent();
				else if (content === "docs") showDocs();
				else hideRightPane();
			},
			toggleTerminal: () => {
				cliShell?.toggle();
			},
			refreshScopes: createConsoleRefreshHandler(queryClient, projectId)
		};
	}, [
		cliShell,
		hideRightPane,
		navigate,
		organizationId,
		projectConnect,
		projectId,
		queryClient,
		setTheme,
		showAgent,
		showDocs
	]);
}
function useConsoleProtocolEffects(messages, options) {
	const handlers = useConsoleProtocolHandlers(options);
	const conversationId = options?.conversationId;
	const toolStatusByKeyRef = useRef(/* @__PURE__ */ new Map());
	const appliedToolKeysRef = useRef(/* @__PURE__ */ new Set());
	const trackedConversationRef = useRef(null);
	useEffect(() => {
		if (!conversationId) return;
		if (trackedConversationRef.current !== conversationId) {
			trackedConversationRef.current = conversationId;
			toolStatusByKeyRef.current = /* @__PURE__ */ new Map();
			appliedToolKeysRef.current = /* @__PURE__ */ new Set();
		}
		for (const message of messages ?? []) {
			const turn = buildTurnView(message);
			const messageId = turn.messageId?.trim();
			if (!messageId) continue;
			for (const toolKey of turn.toolOrder) {
				const tool = turn.tools[toolKey];
				if (!tool || !isConsoleToolName(tool.name)) continue;
				const applyKey = `${conversationId}:${consoleToolApplyKey(tool, { messageId })}`;
				const status = (tool.status ?? "").trim().toLowerCase() || "unknown";
				const previousStatus = toolStatusByKeyRef.current.get(applyKey);
				toolStatusByKeyRef.current.set(applyKey, status);
				if (previousStatus === void 0) continue;
				if (appliedToolKeysRef.current.has(applyKey)) continue;
				if (!isIncompleteToolStatus$1(previousStatus)) continue;
				if (!isSuccessfulToolStatus$1(status)) continue;
				const envelope = collectConsoleToolResults([{
					...tool,
					messageId
				}])[0]?.envelope;
				if (!envelope) continue;
				appliedToolKeysRef.current.add(applyKey);
				applyConsoleEnvelope(envelope, handlers);
			}
		}
	}, [
		conversationId,
		handlers,
		messages
	]);
}
function normalizeUsageTimestamp(time) {
	const trimmed = time.trim();
	if (!trimmed) return trimmed;
	if (/Z[+-]\d{2}:?\d{2}$/i.test(trimmed)) return trimmed.replace(/Z[+-]\d{2}:?\d{2}$/i, "Z");
	return trimmed;
}
function parseConsoleChartTime(time) {
	const normalized = normalizeUsageTimestamp(time);
	if (!normalized) return null;
	try {
		const day = parseISO(normalized);
		if (Number.isNaN(day.getTime())) return null;
		return day;
	} catch {
		return null;
	}
}
function resolveConsoleChartInterval(interval) {
	const value = interval?.trim().toLowerCase();
	if (!value) return null;
	if (value === "15m" || value === "1h" || value === "1d") return value;
	return null;
}
function formatRawPointLabel(day, from, to) {
	const sameDay = from.toDateString() === to.toDateString();
	const spanMs = Math.abs(to.getTime() - from.getTime());
	if (!sameDay || spanMs > 2160 * 60 * 1e3) return formatLocalizedDate(day, "d MMM HH:mm");
	return format(day, "HH:mm");
}
function metricPointsToMergedMap(points) {
	const merged = /* @__PURE__ */ new Map();
	for (const point of points) {
		const day = parseConsoleChartTime(point.time);
		if (!day) continue;
		const key = day.toISOString();
		const value = Number(point.value);
		if (!Number.isFinite(value)) continue;
		merged.set(key, (merged.get(key) ?? 0) + value);
	}
	return merged;
}
function rawPointsToChartPoints(points) {
	const byTime = /* @__PURE__ */ new Map();
	for (const point of points) {
		const day = parseConsoleChartTime(point.time);
		if (!day) continue;
		const value = Number(point.value);
		if (!Number.isFinite(value)) continue;
		const key = day.getTime();
		const existing = byTime.get(key);
		if (existing) existing.total += value;
		else byTime.set(key, {
			day,
			total: value
		});
	}
	const sorted = Array.from(byTime.values()).sort((a, b) => a.day.getTime() - b.day.getTime());
	if (sorted.length === 0) return [];
	const from = sorted[0].day;
	const to = sorted[sorted.length - 1].day;
	return sorted.map(({ day, total }) => ({
		date: formatRawPointLabel(day, from, to),
		day,
		total
	}));
}
function consoleMetricToChartPoints(metric, options) {
	const points = Array.isArray(metric.points) ? metric.points : [];
	if (points.length === 0) return [];
	const chartInterval = resolveConsoleChartInterval(options.interval);
	const from = options.startAt ? parseConsoleChartTime(options.startAt) : null;
	const to = options.endAt ? parseConsoleChartTime(options.endAt) : null;
	if (chartInterval && from && to && from.getTime() <= to.getTime()) {
		const merged = metricPointsToMergedMap(points);
		if (options.kind === "gauges") return fillGaugeChartPointsGaps(merged, from, to, chartInterval);
		return fillChartPointsGaps(merged, from, to, chartInterval);
	}
	return rawPointsToChartPoints(points);
}
function consoleMetricsToBarRows(metrics) {
	const rows = [];
	for (const metric of metrics) {
		const points = Array.isArray(metric.points) ? metric.points : [];
		for (const point of points) {
			const value = Number(point.value);
			if (!Number.isFinite(value)) continue;
			const label = typeof point.label === "string" && point.label.trim() || metric.metric?.trim() || (() => {
				const day = parseConsoleChartTime(point.time);
				return day ? formatLocalizedDate(day, "d MMM HH:mm") : point.time;
			})();
			rows.push({
				label: truncateLabel(label, 28),
				fullLabel: label,
				value
			});
		}
	}
	return rows;
}
function truncateLabel(label, max) {
	const trimmed = label.trim();
	if (trimmed.length <= max) return trimmed;
	return `${trimmed.slice(0, Math.max(0, max - 1))}…`;
}
function resolveConsoleChartType(action) {
	if (action.chartType === "area" || action.chartType === "bar") return action.chartType;
	const allPoints = (Array.isArray(action.metrics) ? action.metrics : []).flatMap((m) => Array.isArray(m.points) ? m.points : []);
	if (allPoints.some((p) => typeof p.label === "string" && p.label.trim().length > 0)) return "bar";
	if (!action.interval?.trim() && allPoints.length > 1) {
		if (new Set(allPoints.map((p) => parseConsoleChartTime(p.time)?.getTime()).filter((t) => t != null)).size <= 1) return "bar";
	}
	return "area";
}
function resolveConsoleChartUnitLabel(action) {
	if (action.unitLabel?.trim()) return action.unitLabel.trim();
	return action.metrics?.[0]?.metric?.trim() || "total";
}
function resolveConsoleChartAxisFormat(action) {
	if (action.axisFormat === "count" || action.axisFormat === "bytes" || action.axisFormat === "gbhours") return action.axisFormat;
	const hint = `${action.unitLabel ?? ""} ${action.metrics?.[0]?.metric ?? ""}`.toLowerCase();
	if (hint.includes("bandwidth") || hint.includes("storage") || hint.includes("bytes") || hint.includes("inbound") || hint.includes("outbound")) return "bytes";
	if (hint.includes("gbhours") || hint.includes("gb-hours") || hint.includes("gb hours")) return "gbhours";
	return "count";
}
function sumConsoleChartPoints(points) {
	return sumUsageChartPoints(points);
}
function defaultConsoleChartInterval(interval) {
	return resolveConsoleChartInterval(interval) ?? "1h";
}
var AGENT_CHART_HEIGHT = 200;
function formatByAxis(value, axisFormat) {
	if (axisFormat === "bytes") return formatCompactBytes(value);
	if (axisFormat === "gbhours") return formatGbHoursValue(value);
	return formatCompactCount(value);
}
function formatTotalByAxis(value, axisFormat) {
	if (axisFormat === "bytes") return formatCompactBytes(value);
	if (axisFormat === "gbhours") return formatGbHoursTotal(value);
	return formatCompactCount(value);
}
function ConsoleChartTooltipRow({ label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border bg-popover px-3 py-2.5 shadow-sm",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[11px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-0.5 text-[13px] font-medium tabular-nums text-foreground",
			children: value
		})]
	});
}
function ConsoleChartView({ action, projectId, openInNewTab: openInNewTab$1 = false }) {
	const t = useT();
	const chartType = resolveConsoleChartType(action);
	const unitLabel = resolveConsoleChartUnitLabel(action);
	const axisFormat = resolveConsoleChartAxisFormat(action);
	const chartInterval = defaultConsoleChartInterval(action.interval);
	const href = resolveConsoleChartHref(action.href, action.projectId ?? projectId);
	const gradientId = `agent-console-chart-${action.key.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
	const chartPoints = useMemo(() => {
		const metrics = Array.isArray(action.metrics) ? action.metrics : [];
		if (metrics.length === 0) return [];
		return consoleMetricToChartPoints(metrics[0], {
			interval: action.interval,
			startAt: action.startAt,
			endAt: action.endAt,
			kind: action.kind
		});
	}, [
		action.endAt,
		action.interval,
		action.kind,
		action.metrics,
		action.startAt
	]);
	const barRows = useMemo(() => {
		if (chartType !== "bar") return [];
		return consoleMetricsToBarRows(Array.isArray(action.metrics) ? action.metrics : []);
	}, [action.metrics, chartType]);
	const areaData = useMemo(() => chartPoints.map((point) => ({
		date: point.date,
		fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
		value: point.total
	})), [chartPoints]);
	const total = chartType === "bar" ? barRows.reduce((sum, row) => sum + row.value, 0) : sumConsoleChartPoints(chartPoints);
	const dateRange = useMemo(() => {
		if (chartPoints.length === 0) return void 0;
		return {
			from: chartPoints[0].day,
			to: chartPoints[chartPoints.length - 1].day
		};
	}, [chartPoints]);
	const chartAxisMax = useMemo(() => {
		if (chartType === "bar") return Math.max(0, ...barRows.map((row) => row.value));
		return getChartSeriesMax(areaData);
	}, [
		areaData,
		barRows,
		chartType
	]);
	const yAxisTickFormatter = useMemo(() => createUsageChartAxisTickFormatter(axisFormat, chartAxisMax), [axisFormat, chartAxisMax]);
	const formattedTotal = formatTotalByAxis(total, axisFormat);
	const hasData = chartType === "bar" ? barRows.length > 0 : chartPoints.length > 0;
	const showChange = typeof action.changePercent === "number" && Number.isFinite(action.changePercent);
	const changePercent = action.changePercent ?? 0;
	const changeLabel = changePercent > 0 ? `+${changePercent}%` : changePercent < 0 ? `${changePercent}%` : "0%";
	const chartColor = "var(--chart-brand)";
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-1 border-b border-border px-4 py-3",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 items-start justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-[14px] font-medium text-foreground",
							children: t(action.title)
						}),
						action.description ? /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: t(action.description)
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							className: "mt-2 flex min-h-[28px] flex-wrap items-baseline gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[22px] font-semibold tabular-nums text-foreground",
									children: formattedTotal
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[13px] text-muted-foreground",
									children: t(unitLabel)
								}),
								showChange ? /* @__PURE__ */ jsxs("span", {
									className: cn("text-[12px] font-medium tabular-nums", changePercent > 0 && "text-emerald-600 dark:text-emerald-400", changePercent < 0 && "text-amber-600 dark:text-amber-400", changePercent === 0 && "text-muted-foreground"),
									children: [
										changeLabel,
										" ",
										t("vs previous period")
									]
								}) : null
							]
						})
					]
				}), href ? openInNewTab$1 ? /* @__PURE__ */ jsx("a", {
					href: buildConsoleUrl(href),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "shrink-0 text-[12px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline",
					children: t("View usage")
				}) : /* @__PURE__ */ jsx(Link, {
					to: href,
					className: "shrink-0 text-[12px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline",
					children: t("View usage")
				}) : null]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "p-4",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("relative w-full shrink-0 text-muted-foreground", FORCE_LTR_CLASS),
				style: { height: AGENT_CHART_HEIGHT },
				children: !hasData ? /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center justify-center text-[13px] text-muted-foreground",
					children: t("No chart data")
				}) : chartType === "bar" ? /* @__PURE__ */ jsx(ResponsiveContainer, {
					...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
					children: /* @__PURE__ */ jsxs(BarChart, {
						data: barRows,
						margin: USAGE_CHART_MARGIN,
						children: [
							/* @__PURE__ */ jsx(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "hsl(var(--border))",
								vertical: false
							}),
							/* @__PURE__ */ jsx(XAxis, {
								dataKey: "label",
								tick: {
									fill: "currentColor",
									fontSize: 10
								},
								tickLine: false,
								axisLine: false,
								interval: "preserveStartEnd",
								minTickGap: 16
							}),
							/* @__PURE__ */ jsx(UsageChartYAxis, { tickFormatter: yAxisTickFormatter }),
							/* @__PURE__ */ jsx(Tooltip, {
								isAnimationActive: false,
								cursor: { fill: "hsl(var(--muted) / 0.35)" },
								content: ({ active, payload }) => {
									if (!active || !payload?.length) return null;
									const row = payload[0]?.payload;
									return /* @__PURE__ */ jsx(ConsoleChartTooltipRow, {
										label: row.fullLabel,
										value: formatByAxis(row.value, axisFormat)
									});
								}
							}),
							/* @__PURE__ */ jsx(Bar, {
								dataKey: "value",
								fill: chartColor,
								radius: [
									4,
									4,
									0,
									0
								],
								...CHART_ANIMATION_DISABLED
							})
						]
					})
				}) : /* @__PURE__ */ jsx(ResponsiveContainer, {
					...USAGE_CHART_RESPONSIVE_CONTAINER_PROPS,
					children: /* @__PURE__ */ jsxs(AreaChart, {
						data: areaData,
						margin: USAGE_CHART_MARGIN,
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: gradientId,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: chartColor,
									stopOpacity: .2
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: chartColor,
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ jsx(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "hsl(var(--border))",
								vertical: false
							}),
							/* @__PURE__ */ jsx(UsageChartXAxis, {
								points: chartPoints,
								dateRange,
								chartInterval
							}),
							/* @__PURE__ */ jsx(UsageChartYAxis, { tickFormatter: yAxisTickFormatter }),
							/* @__PURE__ */ jsx(Tooltip, {
								isAnimationActive: false,
								content: ({ active, payload }) => {
									if (!active || !payload?.length) return null;
									const row = payload[0]?.payload;
									return /* @__PURE__ */ jsx(ConsoleChartTooltipRow, {
										label: row.fullDate,
										value: formatByAxis(row.value, axisFormat)
									});
								}
							}),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "value",
								stroke: chartColor,
								strokeWidth: 2,
								fill: `url(#${gradientId})`,
								...CHART_ANIMATION_DISABLED
							})
						]
					})
				})
			})
		})]
	});
}
function useConsoleResourceLink(mode) {
	const navigate = useNavigate();
	const openPath = (path) => {
		const normalized = normalizeConsolePath(path);
		if (!normalized) return;
		if (mode.openInNewTab) {
			openInNewTab(buildConsoleUrl(normalized));
			return;
		}
		navigate({ to: normalized }).catch(() => {
			if (typeof window !== "undefined") window.location.assign(normalized);
		});
	};
	return {
		openPath,
		openInNewTab: mode.openInNewTab
	};
}
var PREFERRED_FIELD_KEYS = [
	"email",
	"phone",
	"status",
	"enabled",
	"verified",
	"emailVerification",
	"phoneVerification",
	"region",
	"type",
	"provider",
	"runtime",
	"framework",
	"platform",
	"size",
	"members",
	"roles",
	"$createdAt",
	"createdAt",
	"joined",
	"$updatedAt",
	"updatedAt",
	"accessedAt",
	"lastActive",
	"expire",
	"expiresAt"
];
var DATE_FIELD_KEY_HINTS = [
	"createdat",
	"updatedat",
	"accessedat",
	"deletedat",
	"expire",
	"expires",
	"expiresat",
	"expiredat",
	"joined",
	"joinedat",
	"lastactive",
	"lastactivity",
	"lastlogin",
	"lastsignedin",
	"publishedat",
	"scheduledat",
	"startedat",
	"endedat",
	"timestamp",
	"date",
	"datetime",
	"time"
];
var ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}(?::\d{2}(?:\.\d{1,9})?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;
function isDateFieldKey(key) {
	const normalized = key.trim().toLowerCase().replace(/^\$/, "").replace(/[_\s-]+/g, "");
	if (!normalized) return false;
	return DATE_FIELD_KEY_HINTS.some((hint) => normalized === hint);
}
function parseConsoleDateValue(value, options) {
	if (value === null || value === void 0 || value === "" || typeof value === "boolean") return null;
	if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
	if (typeof value === "number") {
		if (!Number.isFinite(value)) return null;
		const ms = value < 0xe8d4a51000 ? value * 1e3 : value;
		if (ms < 1e11) return null;
		const date$1 = new Date(ms);
		return Number.isNaN(date$1.getTime()) ? null : date$1;
	}
	const text = String(value).trim();
	if (!text) return null;
	if (/^\d{10,13}$/.test(text)) {
		const numeric = Number(text);
		const ms = text.length <= 10 ? numeric * 1e3 : numeric;
		const date$1 = new Date(ms);
		return Number.isNaN(date$1.getTime()) ? null : date$1;
	}
	if (!(options?.keyHint ? isDateFieldKey(options.keyHint) : false) && !ISO_DATE_RE.test(text)) return null;
	const date = new Date(text);
	if (Number.isNaN(date.getTime())) return null;
	const year = date.getUTCFullYear();
	if (year < 1970 || year > 2100) return null;
	return date;
}
function MetaValue({ label, value }) {
	const date = parseConsoleDateValue(value, { keyHint: label });
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex min-w-0 items-center gap-1 shrink-0",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground/70",
				children: label
			}),
			" ",
			date ? /* @__PURE__ */ jsx(DateTooltip, {
				date,
				className: "text-[12px] font-medium text-foreground font-mono"
			}) : /* @__PURE__ */ jsx("span", {
				className: "font-medium text-foreground",
				children: formatFieldValue(value)
			})
		]
	});
}
var SKIP_AUTO_FIELD_KEYS = new Set([
	"id",
	"$id",
	"resourceid",
	"resource_id",
	"name",
	"title"
]);
var PEOPLE_RESOURCE_TYPES = new Set([
	"user",
	"users",
	"team",
	"teams",
	"member",
	"members",
	"membership"
]);
var DATABASE_RESOURCE_TYPES = new Set([
	"database",
	"databases",
	"db",
	"tablesdb",
	"documentsdb",
	"vectorsdb",
	"legacy",
	"postgres",
	"postgresql",
	"mysql",
	"mariadb",
	"mongo",
	"mongodb",
	"nativedb"
]);
function fieldHint(fields, keys) {
	if (!fields) return void 0;
	const lowerKeyMap = new Map(Object.entries(fields).map(([key, value]) => [key.toLowerCase(), value]));
	for (const key of keys) {
		const value = lowerKeyMap.get(key.toLowerCase());
		if (typeof value === "string" && value.trim()) return value.trim();
	}
}
function databaseTypeHints(resourceType, fields) {
	const key = resourceType.trim().toLowerCase();
	if (!DATABASE_RESOURCE_TYPES.has(key) && !key.includes("database")) return null;
	return {
		apiType: fieldHint(fields, [
			"type",
			"dbKind",
			"kind",
			"apiType"
		]) || (key !== "database" && key !== "databases" && key !== "db" ? key : void 0),
		engine: fieldHint(fields, ["engine"]),
		product: fieldHint(fields, ["product", "api"])
	};
}
function resourceTypeIcon(resourceType) {
	const key = resourceType.trim().toLowerCase();
	if (PEOPLE_RESOURCE_TYPES.has(key)) return Users$1;
	if (DATABASE_RESOURCE_TYPES.has(key) || key.includes("database")) return Database;
	if (key.includes("table") || key.includes("collection")) return Table2;
	if (key.includes("bucket") || key.includes("storage")) return HardDrive;
	if (key.includes("file")) return File;
	if (key.includes("folder")) return Folder;
	if (key.includes("function")) return Zap;
	if (key.includes("site")) return Globe;
	return Box;
}
function ResourceTypeAvatar({ resourceType, fields, name }) {
	if (PEOPLE_RESOURCE_TYPES.has(resourceType.trim().toLowerCase())) return /* @__PURE__ */ jsx(InitialsAvatar, {
		name,
		size: "sm",
		className: "shrink-0"
	});
	const dbHints = databaseTypeHints(resourceType, fields);
	if (dbHints) return /* @__PURE__ */ jsx("div", {
		className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
		children: /* @__PURE__ */ jsx(DatabaseTypeIcon, {
			...dbHints,
			className: "h-3.5 w-3.5"
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
		children: /* @__PURE__ */ jsx(resourceTypeIcon(resourceType), { className: "h-3.5 w-3.5" })
	});
}
function mutationLabel(mutation, t) {
	if (mutation === "create") return t("Created");
	if (mutation === "update") return t("Updated");
	return t("Deleted");
}
function mutationBadgeVariant(mutation) {
	if (mutation === "create") return "success";
	if (mutation === "update") return "processing";
	return "error";
}
function humanizeKey(key) {
	const spaced = key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").trim();
	if (!spaced) return key;
	return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
function formatFieldValue(value) {
	if (value === null || value === void 0 || value === "") return "-";
	if (typeof value === "boolean") return value ? "true" : "false";
	return String(value);
}
function metadataKey(label) {
	return label.trim().toLowerCase().replace(/\s+/g, "_");
}
function readField(item, key) {
	if (item.fields?.[key] !== void 0) return item.fields[key];
	if (!item.fields) return void 0;
	return Object.entries(item.fields).find(([k]) => k.toLowerCase() === key.toLowerCase())?.[1];
}
function readMetadata(item, key) {
	return item.metadata?.find((entry) => metadataKey(entry.label) === key)?.value;
}
function itemMatchesFilter(item, query) {
	if (!query) return true;
	const q = query.toLowerCase();
	if (item.title.toLowerCase().includes(q)) return true;
	if (item.subtitle?.toLowerCase().includes(q)) return true;
	if (item.resourceId.toLowerCase().includes(q)) return true;
	if (item.status?.toLowerCase().includes(q)) return true;
	if (item.metadata?.some((m) => `${m.label} ${m.value}`.toLowerCase().includes(q))) return true;
	if (item.fields && Object.values(item.fields).some((v) => String(v ?? "").toLowerCase().includes(q))) return true;
	return false;
}
function deriveListColumns(items, explicit) {
	if (explicit?.length) return explicit.map((col) => ({
		...col,
		from: "fields"
	}));
	const fieldCounts = /* @__PURE__ */ new Map();
	const metadataCounts = /* @__PURE__ */ new Map();
	const hasItemStatus = items.some((row) => !!row.status);
	for (const item of items) {
		if (item.fields) for (const [key, value] of Object.entries(item.fields)) {
			if (value == null || value === "") continue;
			const normalized = key.trim();
			if (!normalized || SKIP_AUTO_FIELD_KEYS.has(normalized.toLowerCase())) continue;
			if (normalized.toLowerCase() === "status" && hasItemStatus) continue;
			fieldCounts.set(normalized, (fieldCounts.get(normalized) ?? 0) + 1);
		}
		if (item.metadata) for (const entry of item.metadata) {
			const label = entry.label?.trim();
			const value = entry.value?.trim();
			if (!label || !value) continue;
			const key = metadataKey(label);
			if (SKIP_AUTO_FIELD_KEYS.has(key)) continue;
			if (key === "status" && hasItemStatus) continue;
			if (fieldCounts.has(key) || fieldCounts.has(label)) continue;
			const existing = metadataCounts.get(key);
			metadataCounts.set(key, {
				count: (existing?.count ?? 0) + 1,
				label
			});
		}
	}
	const hasSubtitle = items.some((item) => !!item.subtitle?.trim());
	if (fieldCounts.size === 0 && metadataCounts.size === 0 && hasSubtitle) return [{
		key: "__subtitle",
		label: "Details",
		from: "metadata"
	}];
	const columns = [...fieldCounts.entries()].sort((a, b) => {
		const prefA = PREFERRED_FIELD_KEYS.indexOf(a[0]);
		const prefB = PREFERRED_FIELD_KEYS.indexOf(b[0]);
		if (prefA !== -1 || prefB !== -1) {
			if (prefA === -1) return 1;
			if (prefB === -1) return -1;
			if (prefA !== prefB) return prefA - prefB;
		}
		if (b[1] !== a[1]) return b[1] - a[1];
		return a[0].localeCompare(b[0]);
	}).map(([key]) => key).slice(0, 4).map((key) => ({
		key,
		label: humanizeKey(key),
		from: "fields"
	}));
	if (columns.length < 4) {
		const metaKeys = [...metadataCounts.entries()].sort((a, b) => b[1].count - a[1].count).map(([key, meta]) => ({
			key,
			label: meta.label
		}));
		for (const meta of metaKeys) {
			if (columns.length >= 4) break;
			if (columns.some((col) => col.key === meta.key)) continue;
			columns.push({
				key: meta.key,
				label: meta.label,
				from: "metadata"
			});
		}
	}
	return columns;
}
function cellRawValue(item, column) {
	if (column.key === "__subtitle") return item.subtitle ?? null;
	if (column.from === "fields") {
		const direct = readField(item, column.key);
		if (direct !== void 0) return direct;
	}
	const meta = readMetadata(item, column.key);
	if (meta !== void 0) return meta;
	const fieldFallback = readField(item, column.key);
	if (fieldFallback !== void 0) return fieldFallback;
	return null;
}
function statusBadgeVariant(status) {
	const value = status.trim().toLowerCase();
	if ([
		"verified",
		"active",
		"enabled",
		"ready",
		"success",
		"completed"
	].includes(value)) return "success";
	if ([
		"unverified",
		"pending",
		"processing",
		"building",
		"disabled"
	].includes(value)) return "warning";
	if ([
		"blocked",
		"failed",
		"error",
		"deleted",
		"expired"
	].includes(value)) return "error";
	return "info";
}
function ColumnCell({ item, column }) {
	const t = useT();
	const value = cellRawValue(item, column);
	const key = column.key.toLowerCase();
	if (value === null || value === void 0 || value === "") return /* @__PURE__ */ jsx("span", {
		className: "text-[13px] text-muted-foreground",
		children: "-"
	});
	const parsedDate = parseConsoleDateValue(value, { keyHint: column.key });
	if (parsedDate) return /* @__PURE__ */ jsx(DateTooltip, {
		date: parsedDate,
		className: "text-[12px] text-muted-foreground font-mono"
	});
	if (key === "email" || typeof value === "string" && value.includes("@")) return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 shrink-0 text-muted-foreground/60" }), /* @__PURE__ */ jsx("span", {
			className: "truncate text-[12px] font-medium text-foreground",
			children: String(value)
		})]
	});
	if (key === "phone") return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 shrink-0 text-muted-foreground/60" }), /* @__PURE__ */ jsx("span", {
			className: "truncate text-[12px] font-medium text-foreground",
			children: String(value)
		})]
	});
	if (typeof value === "boolean" || key.includes("verification") || key === "enabled" || key === "verified") {
		const truthy = typeof value === "boolean" ? value : [
			"true",
			"1",
			"yes",
			"verified",
			"enabled"
		].includes(String(value).toLowerCase());
		return /* @__PURE__ */ jsx(Badge, {
			variant: truthy ? "success" : "warning",
			className: "text-[10px] shrink-0",
			children: key === "enabled" ? truthy ? t("Enabled") : t("Disabled") : truthy ? t("Verified") : t("Unverified")
		});
	}
	if (key === "status" || key === "__status") {
		const label = String(value);
		return /* @__PURE__ */ jsx(Badge, {
			variant: statusBadgeVariant(label),
			className: "text-[10px] shrink-0",
			children: label
		});
	}
	return /* @__PURE__ */ jsx("span", {
		className: "line-clamp-2 break-words text-[13px] text-muted-foreground",
		children: formatFieldValue(value)
	});
}
function ResourceNameCell({ item, resourceType, href, openInNewTab: openInNewTab$1 }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-start gap-3",
		children: [
			/* @__PURE__ */ jsx(ResourceTypeAvatar, {
				resourceType,
				fields: item.fields,
				name: item.title || item.subtitle || item.resourceId
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "truncate text-[13px] font-medium text-foreground",
						children: item.title
					}), item.status ? /* @__PURE__ */ jsx(Badge, {
						variant: statusBadgeVariant(item.status),
						className: "text-[10px] shrink-0",
						children: item.status
					}) : null]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-0.5",
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ jsx(CopyableId, {
						id: item.resourceId,
						size: "xs"
					})
				})]
			}),
			href && openInNewTab$1 ? /* @__PURE__ */ jsx(ExternalLink, {
				className: "mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground",
				"aria-hidden": true
			}) : null
		]
	});
}
function ConsoleResourceCardView({ action, linkMode }) {
	const t = useT();
	const { openPath, openInNewTab: openInNewTab$1 } = useConsoleResourceLink(linkMode);
	const path = resolveConsoleResourceHref(action, action.resourceType, linkMode.projectId);
	const meta = action.metadata?.filter((entry) => metadataKey(entry.label) !== "id");
	const fieldEntries = action.fields ? Object.entries(action.fields).filter(([key, value]) => {
		if (value == null || value === "") return false;
		return !SKIP_AUTO_FIELD_KEYS.has(key.toLowerCase());
	}) : [];
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card",
		children: [/* @__PURE__ */ jsxs("div", {
			role: path ? "link" : void 0,
			tabIndex: path ? 0 : void 0,
			onClick: path ? () => openPath(path) : void 0,
			onKeyDown: path ? (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					openPath(path);
				}
			} : void 0,
			className: cn("flex w-full items-start gap-3 px-4 py-3 text-start transition-colors", path ? "cursor-pointer hover:bg-muted/30" : "cursor-default"),
			children: [
				/* @__PURE__ */ jsx(ResourceTypeAvatar, {
					resourceType: action.resourceType,
					fields: action.fields,
					name: action.title || action.subtitle || action.resourceId
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "truncate text-[13px] font-medium text-foreground",
									children: action.title
								}),
								/* @__PURE__ */ jsx(Badge, {
									variant: mutationBadgeVariant(action.mutation),
									className: "text-[10px] shrink-0",
									children: mutationLabel(action.mutation, t)
								}),
								action.status ? /* @__PURE__ */ jsx(Badge, {
									variant: statusBadgeVariant(action.status),
									className: "text-[10px] shrink-0",
									children: action.status
								}) : null
							]
						}),
						action.subtitle ? /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 truncate text-[12px] text-muted-foreground",
							children: action.subtitle
						}) : null,
						/* @__PURE__ */ jsx("div", {
							className: "mt-0.5",
							onClick: (e) => e.stopPropagation(),
							onKeyDown: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ jsx(CopyableId, {
								id: action.resourceId,
								size: "xs"
							})
						})
					]
				}),
				path && openInNewTab$1 ? /* @__PURE__ */ jsx(ExternalLink, {
					className: "mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground",
					"aria-hidden": true
				}) : null
			]
		}), meta && meta.length > 0 || fieldEntries.length > 0 ? /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 border-t border-border px-4 py-2.5 text-[12px] text-muted-foreground",
			children: [meta?.map((entry) => /* @__PURE__ */ jsx(MetaValue, {
				label: entry.label,
				value: entry.value
			}, `${entry.label}:${entry.value}`)), fieldEntries.slice(0, 4).map(([key, value]) => /* @__PURE__ */ jsx(MetaValue, {
				label: humanizeKey(key),
				value
			}, key))]
		}) : null]
	});
}
function ConsoleResourceListView({ action, linkMode }) {
	const t = useT();
	const { openPath, openInNewTab: openInNewTab$1 } = useConsoleResourceLink(linkMode);
	const [filter, setFilter] = useState("");
	const items = Array.isArray(action.items) ? action.items : [];
	const total = action.total ?? items.length;
	const projectId = action.projectId || linkMode.projectId;
	const filtered = useMemo(() => items.filter((item) => itemMatchesFilter(item, filter.trim())), [items, filter]);
	const columns = useMemo(() => deriveListColumns(items, action.columns), [action.columns, items]);
	const listHref = resolveConsoleListHref(action.listHref, action.resourceType, projectId);
	const nameHeader = PEOPLE_RESOURCE_TYPES.has(action.resourceType.trim().toLowerCase()) ? t("User") : t("Name");
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "truncate text-[13px] font-semibold text-foreground",
							children: action.title || (total === 1 ? t("1 result") : `${total} ${t("results")}`)
						}), action.title ? /* @__PURE__ */ jsx("span", {
							className: "text-[12px] tabular-nums text-muted-foreground",
							children: total === 1 ? t("1 result") : `${total} ${t("results")}`
						}) : null]
					}), action.description ? /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[12px] text-muted-foreground",
						children: action.description
					}) : null]
				}), listHref ? openInNewTab$1 ? /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-8 shrink-0 text-[12px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: buildConsoleUrl(listHref),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("View all")]
					})
				}) : /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-8 shrink-0 text-[12px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs(Link, {
						to: listHref,
						children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("View all")]
					})
				}) : null]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border px-4 py-2.5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: filter,
						onChange: (e) => setFilter(e.target.value),
						placeholder: t("Filter..."),
						className: "h-8 ps-8 text-[12px]"
					})]
				})
			}),
			filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "px-4 py-8 text-center text-[13px] text-muted-foreground",
				children: items.length === 0 ? action.emptyMessage || t("No results") : t("No results match your filter")
			}) : /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [/* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
					children: nameHeader
				}), columns.map((col) => /* @__PURE__ */ jsx(TableHead, {
					className: cn("px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider", isDateFieldKey(col.key) && "text-end"),
					children: col.key === "__subtitle" ? t("Details") : col.key.toLowerCase() === "email" || col.key.toLowerCase() === "phone" ? t("Contact") : col.label
				}, col.key))]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: filtered.map((item) => {
				const path = resolveConsoleResourceHref(item, action.resourceType, projectId);
				return /* @__PURE__ */ jsxs(TableRow, {
					className: cn("transition-colors border-b border-border/50", path ? "cursor-pointer hover:bg-muted/30" : "hover:bg-transparent"),
					onClick: path ? (e) => {
						const target = e.target;
						if (target.closest("button") || target.closest("a")) return;
						openPath(path);
					} : void 0,
					children: [/* @__PURE__ */ jsx(TableCell, {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsx(ResourceNameCell, {
							item,
							resourceType: action.resourceType,
							href: path,
							openInNewTab: openInNewTab$1
						})
					}), columns.map((col) => /* @__PURE__ */ jsx(TableCell, {
						className: cn("px-4 py-3", isDateFieldKey(col.key) && "text-end"),
						children: /* @__PURE__ */ jsx(ColumnCell, {
							item,
							column: col
						})
					}, col.key))]
				}, item.resourceId);
			}) })] }),
			total > items.length ? /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border px-4 py-3 text-[12px] text-muted-foreground",
				children: [
					t("Showing"),
					" ",
					items.length,
					" ",
					t("of"),
					" ",
					total,
					listHref ? /* @__PURE__ */ jsxs(Fragment, { children: [" · ", openInNewTab$1 ? /* @__PURE__ */ jsx("a", {
						href: buildConsoleUrl(listHref),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-foreground underline-offset-2 hover:underline",
						children: t("View all")
					}) : /* @__PURE__ */ jsx(Link, {
						to: listHref,
						className: "text-foreground underline-offset-2 hover:underline",
						children: t("View all")
					})] }) : null
				]
			}) : null
		]
	});
}
function AgentConsoleSurfaces({ message, openInNewTab: openInNewTab$1 = false, projectId, organizationId }) {
	const t = useT();
	const handlers = useConsoleProtocolHandlers({
		projectId,
		organizationId
	});
	const linkMode = useMemo(() => ({
		openInNewTab: openInNewTab$1,
		projectId
	}), [openInNewTab$1, projectId]);
	const { resourceActions, ctaActions } = useMemo(() => {
		const turn = buildTurnView(message);
		const tools = turn.toolOrder.map((key) => turn.tools[key]).filter(Boolean).map((tool) => ({
			...tool,
			messageId: turn.messageId
		}));
		return {
			resourceActions: collectRenderableConsoleActions(tools).filter((action) => {
				if (action.type === "resource_list") return Array.isArray(action.items) && action.items.length > 0;
				if (action.type === "chart") return Array.isArray(action.metrics) && action.metrics.length > 0;
				return true;
			}),
			ctaActions: collectConsoleCtaActions(tools)
		};
	}, [message]);
	if (resourceActions.length === 0 && ctaActions.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [resourceActions.map((action) => {
			switch (action.type) {
				case "resource": return /* @__PURE__ */ jsx(ConsoleResourceCardView, {
					action,
					linkMode
				}, action.key);
				case "chart": return /* @__PURE__ */ jsx(ConsoleChartView, {
					action,
					projectId,
					openInNewTab: openInNewTab$1
				}, action.key);
				case "resource_list": return /* @__PURE__ */ jsx(ConsoleResourceListView, {
					action,
					linkMode
				}, action.key);
				default: return null;
			}
		}), ctaActions.length > 0 ? /* @__PURE__ */ jsx("div", {
			className: "flex flex-wrap gap-2",
			children: ctaActions.map((action) => /* @__PURE__ */ jsx(ConsoleSideEffectCta, {
				action,
				label: t(consoleCtaLabel(action)),
				onRun: () => applyConsoleAction(action, handlers)
			}, action.key))
		}) : null]
	});
}
function ConsoleSideEffectCta({ action, label, onRun }) {
	return /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "h-8 text-[12px]",
		onClick: onRun,
		"data-console-cta": action.type,
		children: label
	});
}
var DEMO_BUTTONS = [
	{
		id: "clarify-choice",
		label: "Clarify choice"
	},
	{
		id: "clarify-confirm",
		label: "Clarify confirm"
	},
	{
		id: "clarify-text",
		label: "Clarify text"
	},
	{
		id: "clarify-mixed",
		label: "Clarify mixed"
	},
	{
		id: "console-resource",
		label: "Resource card"
	},
	{
		id: "console-list",
		label: "Resource list"
	},
	{
		id: "console-chart",
		label: "Chart"
	},
	{
		id: "console-ctas",
		label: "CTAs"
	}
];
function debugButtonClass(isActive) {
	return cn("h-7 px-2 text-[11px]", isActive ? "border-purple-600 bg-purple-600 text-white hover:bg-purple-600/90 dark:border-purple-500 dark:bg-purple-500 dark:hover:bg-purple-500/90" : "border-purple-500/40 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:border-purple-400/40 dark:text-purple-400 dark:hover:bg-purple-500/15 dark:hover:text-purple-300");
}
function buildDemoMessage(input) {
	const output = JSON.stringify(input.envelope);
	const toolCallId = `${input.id}-call`;
	return {
		$id: input.id,
		status: "completed",
		contentText: input.contentText,
		role: "assistant",
		routeAgent: "",
		routeNext: "",
		routeReason: "",
		tools: [],
		timeline: [{
			type: "tool_start",
			tool: input.toolName,
			toolCallId,
			agent: "platform"
		}, {
			type: "tool_end",
			tool: input.toolName,
			toolCallId,
			agent: "platform",
			output
		}]
	};
}
function chartDemoEnvelope() {
	const end = /* @__PURE__ */ new Date();
	const start = /* @__PURE__ */ new Date(end.getTime() - 1440 * 60 * 1e3);
	const points = Array.from({ length: 12 }, (_, index) => {
		return {
			time: new Date(start.getTime() + index * 2 * 60 * 60 * 1e3).toISOString(),
			value: 20 + index * 17 % 40 + index % 3 * 5
		};
	});
	return {
		protocol: CONSOLE_PROTOCOL_ID,
		actions: [{
			type: "chart",
			title: "Requests (last 24 hours)",
			unitLabel: "requests",
			interval: "2h",
			startAt: start.toISOString(),
			endAt: end.toISOString(),
			changePercent: 12.4,
			metrics: [{
				metric: "network.requests",
				points
			}]
		}]
	};
}
function demoMessageFor(id) {
	switch (id) {
		case "clarify-choice": return buildDemoMessage({
			id: "debug-clarify-choice",
			contentText: "Need one detail before I continue.",
			toolName: "clarify",
			envelope: {
				protocol: CLARIFY_PROTOCOL_ID,
				title: "Which bucket?",
				prompts: [{
					id: "bucket",
					kind: "choice",
					question: "Which bucket should I delete?",
					options: [
						{
							id: "avatars",
							label: "avatars",
							description: "64 files"
						},
						{
							id: "uploads",
							label: "uploads",
							description: "12 files"
						},
						{
							id: "backups",
							label: "backups",
							description: "3 files"
						}
					]
				}]
			}
		});
		case "clarify-confirm": return buildDemoMessage({
			id: "debug-clarify-confirm",
			contentText: "Confirm before I continue.",
			toolName: "clarify",
			envelope: {
				protocol: CLARIFY_PROTOCOL_ID,
				prompts: [{
					id: "confirm_delete",
					kind: "confirm",
					question: "Delete bucket avatars and all of its files?",
					confirmLabel: "Delete",
					cancelLabel: "Keep it",
					danger: true,
					hint: "This cannot be undone."
				}]
			}
		});
		case "clarify-text": return buildDemoMessage({
			id: "debug-clarify-text",
			contentText: "What should I name it?",
			toolName: "clarify",
			envelope: {
				protocol: CLARIFY_PROTOCOL_ID,
				title: "Name the database",
				prompts: [{
					id: "name",
					kind: "text",
					question: "Database name",
					placeholder: "main",
					defaultValue: "main"
				}, {
					id: "notes",
					kind: "text",
					question: "Optional notes",
					placeholder: "Anything I should know?",
					required: false,
					multiline: true
				}]
			}
		});
		case "clarify-mixed": return buildDemoMessage({
			id: "debug-clarify-mixed",
			contentText: "A few details before I create this.",
			toolName: "clarify",
			envelope: {
				protocol: CLARIFY_PROTOCOL_ID,
				title: "Create database",
				prompts: [
					{
						id: "name",
						kind: "text",
						question: "Database name",
						placeholder: "main"
					},
					{
						id: "id_mode",
						kind: "choice",
						question: "Database ID",
						options: [{
							id: "unique",
							label: "Auto-generate (unique())"
						}, {
							id: "custom",
							label: "I'll provide a custom ID"
						}]
					},
					{
						id: "confirm_create",
						kind: "confirm",
						question: "Create the database with these settings?",
						confirmLabel: "Create",
						cancelLabel: "Cancel"
					}
				]
			}
		});
		case "console-resource": return buildDemoMessage({
			id: "debug-console-resource",
			contentText: "Created a storage bucket.",
			toolName: "console",
			envelope: {
				protocol: CONSOLE_PROTOCOL_ID,
				actions: [{
					type: "resource",
					mutation: "create",
					resourceType: "bucket",
					resourceId: "avatars",
					title: "avatars",
					subtitle: "Storage bucket",
					status: "enabled",
					href: "/projects/demo/storage/avatars",
					metadata: [{
						label: "Files",
						value: "64"
					}, {
						label: "Region",
						value: "fra"
					}]
				}]
			}
		});
		case "console-list": return buildDemoMessage({
			id: "debug-console-list",
			contentText: "Here are matching users.",
			toolName: "console",
			envelope: {
				protocol: CONSOLE_PROTOCOL_ID,
				actions: [{
					type: "resource_list",
					resourceType: "user",
					title: "Users",
					description: "Recently active accounts",
					total: 3,
					listHref: "/projects/demo/auth",
					items: [
						{
							resourceId: "user_demo_1",
							title: "Ada Lovelace",
							subtitle: "ada@example.com",
							status: "verified",
							fields: {
								email: "ada@example.com",
								status: "verified"
							}
						},
						{
							resourceId: "user_demo_2",
							title: "Grace Hopper",
							subtitle: "grace@example.com",
							status: "unverified",
							fields: {
								email: "grace@example.com",
								status: "unverified"
							}
						},
						{
							resourceId: "user_demo_3",
							title: "Alan Turing",
							subtitle: "alan@example.com",
							status: "blocked",
							fields: {
								email: "alan@example.com",
								status: "blocked"
							}
						}
					]
				}]
			}
		});
		case "console-chart": return buildDemoMessage({
			id: "debug-console-chart",
			contentText: "Request volume over the last day.",
			toolName: "console",
			envelope: chartDemoEnvelope()
		});
		case "console-ctas": return buildDemoMessage({
			id: "debug-console-ctas",
			contentText: "A few shortcuts you can try.",
			toolName: "console",
			envelope: {
				protocol: CONSOLE_PROTOCOL_ID,
				actions: [
					{
						type: "navigate",
						path: "/projects/demo/storage"
					},
					{
						type: "open_create",
						resource: "bucket",
						projectId: "demo"
					},
					{
						type: "open_dialog",
						dialog: "shortcuts"
					},
					{
						type: "show_pane",
						content: "docs"
					},
					{ type: "toggle_terminal" }
				]
			}
		});
	}
}
function DemoPreview({ demoId, projectId, organizationId }) {
	const message = useMemo(() => demoMessageFor(demoId), [demoId]);
	const isClarify = demoId.startsWith("clarify-");
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2 rounded-md border border-purple-500/20 bg-background/80 p-2.5",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
				children: DEMO_BUTTONS.find((button) => button.id === demoId)?.label ?? demoId
			}),
			message.contentText ? /* @__PURE__ */ jsx("p", {
				className: "text-[13px] leading-relaxed text-foreground",
				children: message.contentText
			}) : null,
			isClarify ? /* @__PURE__ */ jsx(AgentClarifySurfaces, {
				message,
				interactive: true,
				onSubmitAnswers: (answersJson) => {
					toast.message("Clarify answers (debug)", { description: answersJson });
				}
			}) : /* @__PURE__ */ jsx(AgentConsoleSurfaces, {
				message,
				projectId,
				organizationId
			})
		]
	});
}
function AgentChatSurfacesDebugPanel({ projectId, organizationId }) {
	const [expanded, setExpanded] = useState(false);
	const [activeDemos, setActiveDemos] = useState([]);
	const toggleDemo = (id) => {
		setActiveDemos((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	};
	const allActive = activeDemos.length === DEMO_BUTTONS.length;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-purple-500/25 bg-purple-500/5",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => setExpanded((value) => !value),
			"aria-expanded": expanded,
			className: "flex w-full items-center gap-2 px-2.5 py-2 text-start transition-colors hover:bg-purple-500/10",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
					children: "Chat surfaces demo"
				}),
				!expanded ? /* @__PURE__ */ jsx("span", {
					className: "truncate text-[10px] tabular-nums text-purple-600/70 dark:text-purple-400/70",
					children: activeDemos.length > 0 ? `${activeDemos.length} active` : "clarify · console"
				}) : null,
				expanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-3.5 w-3.5 shrink-0 text-purple-600/80 dark:text-purple-400/80" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 text-purple-600/80 dark:text-purple-400/80" })
			]
		}), expanded ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 border-t border-purple-500/20 p-2.5 pt-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-1.5",
				children: [
					DEMO_BUTTONS.map(({ id, label }) => /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugButtonClass(activeDemos.includes(id)),
						onClick: () => toggleDemo(id),
						children: label
					}, id)),
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugButtonClass(allActive),
						onClick: () => setActiveDemos(allActive ? [] : DEMO_BUTTONS.map((button) => button.id)),
						children: "All"
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugButtonClass(false),
						onClick: () => setActiveDemos([]),
						disabled: activeDemos.length === 0,
						children: "Clear"
					})
				]
			}), activeDemos.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "max-h-[min(50dvh,420px)] space-y-2 overflow-y-auto",
				children: activeDemos.map((demoId) => /* @__PURE__ */ jsx(DemoPreview, {
					demoId,
					projectId,
					organizationId
				}, demoId))
			}) : /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-purple-600/70 dark:text-purple-400/70",
				children: "Toggle a surface to preview clarify prompts and console cards without sending a message."
			})]
		}) : null]
	});
}
function AgentRenameDialog({ open, onOpenChange, title, onRename }) {
	const t = useT();
	const [draftTitle, setDraftTitle] = useState(title);
	const [isRenaming, setIsRenaming] = useState(false);
	useEffect(() => {
		if (open) setDraftTitle(title);
	}, [open, title]);
	const handleRename = async () => {
		const nextTitle = draftTitle.trim();
		if (!nextTitle || nextTitle === title.trim()) {
			closeDialogBeforeOverlayUnmount(() => onOpenChange(false));
			return;
		}
		setIsRenaming(true);
		try {
			await onRename(nextTitle);
			closeDialogBeforeOverlayUnmount(() => onOpenChange(false));
		} finally {
			setIsRenaming(false);
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: (nextOpen) => {
			if (!nextOpen) {
				closeDialogBeforeOverlayUnmount(() => onOpenChange(false));
				return;
			}
			onOpenChange(true);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "z-[140] sm:max-w-md p-0",
			overlayClassName: "z-[140]",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Update agent") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Change the title for this agent.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-4",
					children: /* @__PURE__ */ jsx(Input, {
						value: draftTitle,
						onChange: (event) => setDraftTitle(event.target.value),
						placeholder: t("Agent title"),
						className: "h-9 text-[13px]",
						autoFocus: true,
						onKeyDown: (event) => {
							if (event.key === "Enter") {
								event.preventDefault();
								handleRename();
							}
						}
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isRenaming,
						onClick: () => closeDialogBeforeOverlayUnmount(() => onOpenChange(false)),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						disabled: isRenaming || !draftTitle.trim(),
						onClick: () => void handleRename(),
						children: t("Update")
					})]
				})
			]
		})
	});
}
function AgentConversationContextMenu({ title, disabled = false, isArchived = false, isPinned = false, children, onRename, onPin, onUnpin, onArchive, onDelete }) {
	const t = useT();
	const [renameOpen, setRenameOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	if (disabled) return /* @__PURE__ */ jsx(Fragment, { children });
	const openRename = () => {
		openDialogAfterOverlayCloses(() => setRenameOpen(true));
	};
	const openDelete = () => {
		openDialogAfterOverlayCloses(() => setDeleteOpen(true));
	};
	const closeDeleteDialog = () => {
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteOpen(false);
		});
	};
	const handleDelete = async () => {
		setIsDeleting(true);
		try {
			await onDelete();
			closeDeleteDialog();
		} finally {
			setIsDeleting(false);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ jsxs(ContextMenuContent, {
			className: "w-48",
			children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: openRename,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
				}),
				isPinned ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => {
						onUnpin?.();
					},
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: PinOff }), t("Unpin")]
				}) : /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => {
						onPin?.();
					},
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pin }), t("Pin")]
				}),
				!isArchived ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => {
						onArchive();
					},
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Archive }), t("Archive")]
				}) : null,
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: openDelete,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
				})
			]
		})] }),
		/* @__PURE__ */ jsx(AgentRenameDialog, {
			open: renameOpen,
			onOpenChange: setRenameOpen,
			title,
			onRename
		}),
		/* @__PURE__ */ jsx(Dialog, {
			open: deleteOpen,
			onOpenChange: (open) => {
				if (!open) {
					closeDeleteDialog();
					return;
				}
				setDeleteOpen(true);
			},
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "z-[140] sm:max-w-md p-0",
				overlayClassName: "z-[140]",
				children: [/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete agent") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("This permanently deletes the agent and its messages."),
							" ",
							t("This action cannot be undone.")
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						disabled: isDeleting,
						onClick: closeDeleteDialog,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "destructive",
						disabled: isDeleting,
						onClick: () => void handleDelete(),
						children: t("Delete")
					})]
				})]
			})
		})
	] });
}
function AgentEmptyState({ hasActiveMcp, suggestions, onSelectSuggestion, sphereSize, activityRef, colorMode, shapeMode, particleCount, debugSlot, requireSignIn = false }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-full flex-1 flex-col items-center justify-center py-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex w-full max-w-md flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-4 scale-[0.82]",
						children: /* @__PURE__ */ jsx(ThinkingBubble, {
							size: sphereSize,
							activityRef,
							colorMode,
							shapeMode,
							particleCount
						})
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-center text-lg font-semibold text-foreground",
						children: requireSignIn ? t("Sign in to use the agent") : hasActiveMcp ? t("What should we do next?") : t("How can I help you?")
					}),
					requireSignIn ? /* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-sm text-center text-[13px] text-muted-foreground",
						children: t("Create an account or sign in to chat with the Appwrite Agent about your projects.")
					}) : hasActiveMcp ? /* @__PURE__ */ jsxs("div", {
						className: "mt-2 inline-flex items-center gap-1.5 text-[12px] text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/40" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" })]
							}),
							/* @__PURE__ */ jsx(McpIcon, { className: "h-3 w-3" }),
							/* @__PURE__ */ jsx("span", { children: t("MCP ready") })
						]
					}) : /* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-sm text-center text-[13px] text-muted-foreground",
						children: t("I can inspect your project, explain issues, suggest next steps, and run approved actions.")
					})
				]
			}), requireSignIn ? /* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					asChild: true,
					className: "h-9 min-w-[160px] px-4 text-[13px]",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/sign-in",
						search: { redirect: "/agent" },
						...analyticsAttrs("auth-sign-in"),
						children: t("Sign in")
					})
				}), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "ghost",
					className: "h-8 text-[12px] text-muted-foreground",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/sign-up",
						search: { redirect: "/" },
						...analyticsAttrs("auth-sign-up"),
						children: t("Create an account")
					})
				})]
			}) : /* @__PURE__ */ jsx("div", {
				className: "mt-6 space-y-2.5",
				children: suggestions.map((question) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => onSelectSuggestion(question),
					className: "w-full rounded-lg border border-transparent bg-muted/35 px-3.5 py-3 text-start text-sm leading-relaxed text-foreground transition-colors hover:border-border hover:bg-muted/55",
					...analyticsAttrs("agent-suggestion"),
					children: t(question)
				}, question))
			})]
		}), debugSlot ? /* @__PURE__ */ jsx("div", {
			className: "mx-auto mt-6 w-full max-w-md",
			children: debugSlot
		}) : null]
	});
}
var SPEECH_RECOGNITION_LANG = {
	en: "en-US",
	he: "he-IL",
	ja: "ja-JP"
};
const VOICE_SUBMIT_TRIGGER_BY_LANG = {
	en: "submit now",
	he: "שלח עכשיו",
	ja: "今すぐ送信"
};
var EMPTY_LEVELS = Object.freeze(Array.from({ length: 32 }, () => 0));
function normalizeVoiceTranscript(text) {
	return text.trim().toLowerCase().replace(/[\p{P}\p{S}]+$/gu, "").replace(/\s+/g, " ");
}
function voiceSubmitTriggersForLang(lang) {
	const primary = VOICE_SUBMIT_TRIGGER_BY_LANG[lang ?? "en"] ?? VOICE_SUBMIT_TRIGGER_BY_LANG.en;
	return Array.from(new Set([normalizeVoiceTranscript(primary), normalizeVoiceTranscript("submit now")])).filter(Boolean);
}
function voiceTranscriptEndsWithSubmitTrigger(text, lang) {
	const normalized = normalizeVoiceTranscript(text);
	if (!normalized) return false;
	return voiceSubmitTriggersForLang(lang).some((trigger) => {
		if (normalized === trigger) return true;
		return normalized.endsWith(` ${trigger}`);
	});
}
function findTrailingVoiceSubmitTriggerRange(text, lang) {
	const triggers = voiceSubmitTriggersForLang(lang).sort((a, b) => b.length - a.length);
	const trimEndCount = text.length - text.trimEnd().length;
	const working = trimEndCount > 0 ? text.slice(0, -trimEndCount) : text;
	for (const trigger of triggers) {
		const escaped = trigger.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
		const match = new RegExp(`(^|\\s)(${escaped})([\\p{P}\\p{S}]*)$`, "iu").exec(working);
		if (!match || match.index == null) continue;
		const start = match.index + match[1].length;
		return {
			start,
			end: start + match[2].length
		};
	}
	return null;
}
function stripVoiceSubmitTrigger(text, lang) {
	const range = findTrailingVoiceSubmitTriggerRange(text, lang);
	if (!range) return text.trim();
	return `${text.slice(0, range.start)}${text.slice(range.end)}`.replace(/[\p{P}\p{S}]+$/gu, "").trim();
}
function getSpeechRecognitionConstructor() {
	if (typeof window === "undefined") return void 0;
	const speechWindow = window;
	return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
}
function isVoicePromptSupported() {
	if (typeof window === "undefined") return false;
	if (!navigator.mediaDevices?.getUserMedia) return false;
	return Boolean(getSpeechRecognitionConstructor());
}
function resolveSpeechLang$1(lang) {
	if (!lang) return SPEECH_RECOGNITION_LANG.en;
	if (lang in SPEECH_RECOGNITION_LANG) return SPEECH_RECOGNITION_LANG[lang];
	return lang;
}
function stopMediaStream(stream) {
	stream?.getTracks().forEach((track) => track.stop());
}
function getAudioContextConstructor() {
	if (typeof window === "undefined") return void 0;
	return window.AudioContext || window.webkitAudioContext;
}
function playVoicePromptCue(kind) {
	const AudioContextCtor = getAudioContextConstructor();
	if (!AudioContextCtor) return;
	try {
		const context = new AudioContextCtor();
		const now = context.currentTime;
		const notes = kind === "start" ? [{
			freq: 880,
			at: 0,
			dur: .085
		}, {
			freq: 1175,
			at: .095,
			dur: .11
		}] : [{
			freq: 1040,
			at: 0,
			dur: .085
		}, {
			freq: 660,
			at: .095,
			dur: .12
		}];
		const peak = kind === "start" ? .18 : .15;
		const totalMs = (notes[notes.length - 1].at + notes[notes.length - 1].dur + .08) * 1e3;
		for (const note of notes) {
			const oscillator = context.createOscillator();
			const gain = context.createGain();
			oscillator.type = "sine";
			oscillator.frequency.setValueAtTime(note.freq, now + note.at);
			oscillator.connect(gain);
			gain.connect(context.destination);
			const startAt = now + note.at;
			const endAt = startAt + note.dur;
			gain.gain.setValueAtTime(1e-4, startAt);
			gain.gain.exponentialRampToValueAtTime(peak, startAt + .01);
			gain.gain.exponentialRampToValueAtTime(1e-4, endAt);
			oscillator.start(startAt);
			oscillator.stop(endAt + .02);
		}
		const close = () => {
			context.close().catch(() => {});
		};
		window.setTimeout(close, totalMs);
		if (context.state === "suspended") context.resume().catch(() => {});
	} catch {}
}
function createAudioLevelMonitor(stream) {
	const AudioContextCtor = getAudioContextConstructor();
	if (!AudioContextCtor) return {
		getLevels: () => EMPTY_LEVELS.slice(),
		stop: () => {}
	};
	const audioContext = new AudioContextCtor();
	const source = audioContext.createMediaStreamSource(stream);
	const analyser = audioContext.createAnalyser();
	analyser.fftSize = 128;
	analyser.smoothingTimeConstant = .72;
	analyser.minDecibels = -75;
	analyser.maxDecibels = -20;
	source.connect(analyser);
	const frequencyData = new Uint8Array(analyser.frequencyBinCount);
	const levels = new Array(32).fill(0);
	const displayLevels = new Array(32).fill(0);
	const getLevels = () => {
		if (audioContext.state === "closed") return EMPTY_LEVELS.slice();
		analyser.getByteFrequencyData(frequencyData);
		const binCount = frequencyData.length;
		const startBin = Math.max(1, Math.floor(binCount * .04));
		const usableBins = Math.max(1, binCount - startBin);
		for (let i = 0; i < 32; i += 1) {
			const t = i / 31;
			const centerWeight = .55 + (1 - Math.abs(t * 2 - 1)) * .45;
			const binStart = startBin + Math.floor(i / 32 * usableBins);
			const binEnd = startBin + Math.floor((i + 1) / 32 * usableBins);
			let sum = 0;
			let count = 0;
			for (let bin = binStart; bin < Math.max(binStart + 1, binEnd); bin += 1) {
				sum += frequencyData[bin] ?? 0;
				count += 1;
			}
			const raw = count > 0 ? sum / count / 255 : 0;
			const shaped = Math.pow(Math.min(1, raw * 1.35), .85) * centerWeight;
			levels[i] = shaped;
			displayLevels[i] = shaped > displayLevels[i] ? shaped : displayLevels[i] * .82 + shaped * .18;
		}
		return displayLevels.slice();
	};
	const stop = () => {
		try {
			source.disconnect();
		} catch {}
		try {
			analyser.disconnect();
		} catch {}
		audioContext.close().catch(() => {});
	};
	if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
	return {
		getLevels,
		stop
	};
}
async function startVoicePrompt(options) {
	const Recognition = getSpeechRecognitionConstructor();
	if (!Recognition || !navigator.mediaDevices?.getUserMedia) throw new Error("Voice input is not supported in this browser");
	let stream = null;
	try {
		stream = await navigator.mediaDevices.getUserMedia({ audio: {
			echoCancellation: true,
			noiseSuppression: true,
			autoGainControl: true
		} });
	} catch (error) {
		if (error instanceof DOMException && (error.name === "NotAllowedError" || error.name === "PermissionDeniedError")) throw new Error("Microphone permission denied");
		throw new Error("Could not start voice input");
	}
	const levelMonitor = createAudioLevelMonitor(stream);
	const recognition = new Recognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.lang = resolveSpeechLang$1(options.lang);
	let stopped = false;
	let finalTranscript = "";
	const teardown = () => {
		levelMonitor.stop();
		stopMediaStream(stream);
		stream = null;
	};
	const session = {
		getLevels: () => levelMonitor.getLevels(),
		stop: () => {
			if (stopped) return;
			stopped = true;
			try {
				recognition.stop();
			} catch {
				try {
					recognition.abort();
				} catch {}
			}
			teardown();
		}
	};
	recognition.onresult = (event) => {
		let interim = "";
		for (let i = event.resultIndex; i < event.results.length; i += 1) {
			const result = event.results[i];
			const transcript = result?.[0]?.transcript?.trim() ?? "";
			if (!transcript) continue;
			if (result.isFinal) {
				finalTranscript = [finalTranscript, transcript].filter(Boolean).join(" ");
				options.onFinal(finalTranscript);
			} else interim = [interim, transcript].filter(Boolean).join(" ");
		}
		if (interim) options.onInterim([finalTranscript, interim].filter(Boolean).join(" "));
	};
	recognition.onerror = (event) => {
		if (stopped) return;
		if (event.error === "aborted" || event.error === "no-speech") return;
		stopped = true;
		teardown();
		if (event.error === "not-allowed") {
			options.onError(/* @__PURE__ */ new Error("Microphone permission denied"));
			return;
		}
		options.onError(/* @__PURE__ */ new Error("Could not start voice input"));
	};
	recognition.onend = () => {
		if (!stopped) {
			stopped = true;
			teardown();
		}
		playVoicePromptCue("end");
		options.onEnd();
	};
	try {
		recognition.start();
	} catch {
		stopped = true;
		teardown();
		throw new Error("Could not start voice input");
	}
	playVoicePromptCue("start");
	return session;
}
const VOICE_SUBMIT_MARKER = {
	mark: "box-decoration-clone rounded-[3px] bg-[#FFE566] px-1.5 py-0.5 text-amber-950 dark:bg-amber-400/45 dark:text-amber-50",
	solid: "bg-[#FFE566] dark:bg-amber-400",
	soft: "bg-[#FFE566]/70 dark:bg-amber-400/60",
	text: "text-amber-900 dark:text-amber-200",
	bar: "bg-[#E6C200] dark:bg-amber-400",
	row: "bg-[#FFE566]/15 dark:bg-amber-400/10"
};
function VoiceRecordingMeter({ active, getLevels, countdownSeconds = null, onCancelCountdown, className }) {
	const t = useT();
	const barsRef = useRef([]);
	const getLevelsRef = useRef(getLevels);
	getLevelsRef.current = getLevels;
	const countdownActive = countdownSeconds != null && countdownSeconds > 0;
	useEffect(() => {
		if (!active) {
			for (const bar of barsRef.current) {
				if (!bar) continue;
				bar.style.transform = "scaleY(0.12)";
				bar.style.opacity = "0.35";
			}
			return;
		}
		let rafId = 0;
		let idlePhase = 0;
		const tick = () => {
			const levels = getLevelsRef.current();
			let energy = 0;
			for (let i = 0; i < 32; i += 1) energy += levels[i] ?? 0;
			energy /= 32;
			idlePhase += .08;
			for (let i = 0; i < 32; i += 1) {
				const bar = barsRef.current[i];
				if (!bar) continue;
				const level = levels[i] ?? 0;
				const idle = energy < .04 ? .08 + Math.sin(idlePhase + i * .45) * .05 + Math.sin(idlePhase * .6 + i * .2) * .03 : 0;
				const value = Math.min(1, Math.max(level, idle));
				bar.style.transform = `scaleY(${.12 + value * .88})`;
				bar.style.opacity = String(.4 + value * .6);
			}
			rafId = window.requestAnimationFrame(tick);
		};
		rafId = window.requestAnimationFrame(tick);
		return () => window.cancelAnimationFrame(rafId);
	}, [active]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-2.5 border-b border-border px-3 py-2 transition-colors", countdownActive && VOICE_SUBMIT_MARKER.row, className),
		role: "status",
		"aria-live": "polite",
		"aria-label": countdownActive ? `${t("Sending in")} ${countdownSeconds}` : t("Listening..."),
		children: [
			/* @__PURE__ */ jsxs("span", {
				className: "relative flex h-2 w-2 shrink-0",
				children: [/* @__PURE__ */ jsx("span", { className: cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", countdownActive ? VOICE_SUBMIT_MARKER.soft : "bg-red-500/60") }), /* @__PURE__ */ jsx("span", { className: cn("relative inline-flex h-2 w-2 rounded-full", countdownActive ? VOICE_SUBMIT_MARKER.solid : "bg-red-500") })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex h-7 flex-1 items-center justify-center gap-[2px]",
				"aria-hidden": true,
				children: Array.from({ length: 32 }, (_, index) => /* @__PURE__ */ jsx("span", {
					ref: (node) => {
						barsRef.current[index] = node;
					},
					className: cn("w-[2.5px] origin-center rounded-full will-change-transform", countdownActive ? VOICE_SUBMIT_MARKER.bar : "bg-primary"),
					style: {
						height: "100%",
						transform: "scaleY(0.12)",
						opacity: .35
					}
				}, index))
			}),
			countdownActive ? /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ jsxs("span", {
					className: cn("text-[11px] font-medium tabular-nums", VOICE_SUBMIT_MARKER.text),
					children: [
						t("Sending in"),
						" ",
						countdownSeconds,
						"..."
					]
				}), onCancelCountdown ? /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onCancelCountdown,
					className: "rounded-md px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
					children: t("Cancel")
				}) : null]
			}) : /* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[11px] font-medium text-muted-foreground",
				children: t("Listening...")
			})
		]
	});
}
function useFavicon() {
	return {
		setFavicon: useCallback((variant, meta) => {
			if (typeof window === "undefined") return;
			if (!FAVICON_MAP[variant]) {
				console.warn(`Unknown favicon variant: ${variant}`);
				return;
			}
			applyFaviconVariant(variant, meta);
		}, []),
		getCurrentFavicon: useCallback(() => {
			if (typeof window === "undefined") return null;
			return getFaviconStatus().variant;
		}, []),
		getFaviconStatus,
		subscribeFaviconStatus
	};
}
var TERMINAL_FAVICON_RESET_MS = 1e4;
function inProgressFavicon() {
	return usesThemeAwareFaviconHost() ? "theme-blue" : "blue";
}
function successFavicon() {
	return usesThemeAwareFaviconHost() ? "theme-green" : "green";
}
function failureFavicon() {
	return usesThemeAwareFaviconHost() ? "theme-red" : "red";
}
function isInFlightTone(tone) {
	return tone === "running" || tone === "queued";
}
function isCancelledOrStopped(status) {
	const normalized = status?.toLowerCase() ?? "";
	return normalized === "stopped" || normalized === "cancelled" || normalized === "canceled";
}
function useAgentConversationFavicon({ enabled = true, conversation, isPending = false, projectId = null, projectName = null, organizationId = null, pathname = null }) {
	const { setFavicon, getCurrentFavicon } = useFavicon();
	const setFaviconRef = useRef(setFavicon);
	setFaviconRef.current = setFavicon;
	const getCurrentFaviconRef = useRef(getCurrentFavicon);
	getCurrentFaviconRef.current = getCurrentFavicon;
	const originalFaviconRef = useRef(null);
	const resetTimerRef = useRef(null);
	const trackedInFlightIdRef = useRef(null);
	const previousToneRef = useRef(null);
	const previousConversationIdRef = useRef(null);
	const conversationRef = useRef(conversation);
	conversationRef.current = conversation;
	const isPendingRef = useRef(isPending);
	isPendingRef.current = isPending;
	const projectIdRef = useRef(projectId);
	projectIdRef.current = projectId;
	const projectNameRef = useRef(projectName);
	projectNameRef.current = projectName;
	const organizationIdRef = useRef(organizationId);
	organizationIdRef.current = organizationId;
	const pathnameRef = useRef(pathname);
	pathnameRef.current = pathname;
	const conversationId = conversation?.$id ?? null;
	const status = conversation?.status ?? null;
	const lockState = conversation?.lockState ?? null;
	useEffect(() => {
		if (typeof window === "undefined") return;
		function buildContext(conversationIdValue, statusValue, lockStateValue, pending) {
			const fields = [];
			if (statusValue) fields.push({
				label: "Status",
				value: statusValue
			});
			if (lockStateValue) fields.push({
				label: "Lock",
				value: lockStateValue
			});
			if (pending) fields.push({
				label: "Pending",
				value: "message create/update"
			});
			return {
				projectId: projectIdRef.current ?? void 0,
				projectName: projectNameRef.current ?? void 0,
				organizationId: organizationIdRef.current ?? void 0,
				conversationId: conversationIdValue ?? void 0,
				pathname: pathnameRef.current ?? void 0,
				fields: fields.length > 0 ? fields : void 0
			};
		}
		function agentMeta(reason, conversationIdValue, statusValue, lockStateValue, pending) {
			const context = buildContext(conversationIdValue, statusValue, lockStateValue, pending);
			const detailParts = [
				context.projectId ? `project ${context.projectId}` : null,
				context.conversationId ? `conversation ${context.conversationId}` : null,
				statusValue ? `status=${statusValue}` : null,
				pending ? "message pending" : null
			].filter(Boolean);
			return {
				source: "agent-conversation",
				reason,
				detail: detailParts.length > 0 ? detailParts.join(" · ") : void 0,
				context
			};
		}
		function clearResetTimer() {
			if (resetTimerRef.current !== null) {
				window.clearTimeout(resetTimerRef.current);
				resetTimerRef.current = null;
			}
		}
		function captureOriginalFavicon() {
			if (originalFaviconRef.current) return;
			const resolved = getCurrentFaviconRef.current() ?? getDefaultFaviconVariant();
			originalFaviconRef.current = isStatusFaviconVariant(resolved) ? getDefaultFaviconVariant() : resolved;
		}
		function restoreOriginalFavicon(reason) {
			clearResetTimer();
			const original = originalFaviconRef.current ?? getDefaultFaviconVariant();
			setFaviconRef.current(original, agentMeta(reason, conversationId, status, lockState, isPending));
			originalFaviconRef.current = null;
		}
		function applyVariant(variant, reason) {
			clearResetTimer();
			captureOriginalFavicon();
			setFaviconRef.current(variant, agentMeta(reason, conversationId, status, lockState, isPending));
		}
		function scheduleRestore() {
			clearResetTimer();
			resetTimerRef.current = window.setTimeout(() => {
				resetTimerRef.current = null;
				restoreOriginalFavicon("Restored after agent terminal favicon timeout");
			}, TERMINAL_FAVICON_RESET_MS);
		}
		function onVisibilityChange() {
			if (document.visibilityState !== "visible") return;
			if (!isInFlightTone(getAssistantConversationStatusTone(conversationRef.current)) && !isPendingRef.current && originalFaviconRef.current && resetTimerRef.current !== null) restoreOriginalFavicon("Restored when tab became visible after agent settled");
		}
		document.addEventListener("visibilitychange", onVisibilityChange);
		if (!enabled) {
			trackedInFlightIdRef.current = null;
			previousToneRef.current = null;
			previousConversationIdRef.current = null;
			if (originalFaviconRef.current) restoreOriginalFavicon("Restored because agent favicon tracking disabled");
			return () => {
				document.removeEventListener("visibilitychange", onVisibilityChange);
			};
		}
		const tone = getAssistantConversationStatusTone({
			status,
			lockState
		});
		if (conversationId !== previousConversationIdRef.current) {
			previousConversationIdRef.current = conversationId;
			previousToneRef.current = null;
			clearResetTimer();
			if (trackedInFlightIdRef.current && trackedInFlightIdRef.current !== conversationId) trackedInFlightIdRef.current = null;
		}
		const previousTone = previousToneRef.current;
		previousToneRef.current = tone;
		if (isInFlightTone(tone) || isPending) {
			if (conversationId) trackedInFlightIdRef.current = conversationId;
			else if (isPending) trackedInFlightIdRef.current = trackedInFlightIdRef.current ?? "__pending__";
			const reason = isPending && !isInFlightTone(tone) ? "Agent message pending (waiting for conversation status)" : tone === "queued" ? "Agent conversation queued" : "Agent conversation running";
			applyVariant(inProgressFavicon(), reason);
		} else {
			const sawInFlight = !!conversationId && (trackedInFlightIdRef.current === conversationId || trackedInFlightIdRef.current === "__pending__");
			const transitionedFromInFlight = previousTone !== null && isInFlightTone(previousTone);
			if (tone === "failed" && (sawInFlight || transitionedFromInFlight)) {
				trackedInFlightIdRef.current = null;
				applyVariant(failureFavicon(), "Agent conversation failed");
				scheduleRestore();
			} else if (tone === "ready" && (sawInFlight || transitionedFromInFlight) && previousTone !== null) {
				trackedInFlightIdRef.current = null;
				if (isCancelledOrStopped(status)) restoreOriginalFavicon("Restored after agent conversation was stopped");
				else {
					applyVariant(successFavicon(), "Agent conversation ready");
					scheduleRestore();
				}
			} else if (originalFaviconRef.current && !resetTimerRef.current) restoreOriginalFavicon("Restored after agent conversation left in-flight");
		}
		return () => {
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	}, [
		enabled,
		conversationId,
		status,
		lockState,
		isPending,
		projectId,
		projectName,
		organizationId,
		pathname
	]);
	useEffect(() => {
		return () => {
			if (typeof window === "undefined") return;
			if (resetTimerRef.current !== null) {
				window.clearTimeout(resetTimerRef.current);
				resetTimerRef.current = null;
			}
			if (originalFaviconRef.current) {
				setFaviconRef.current(originalFaviconRef.current ?? getDefaultFaviconVariant(), {
					source: "agent-conversation",
					reason: "Restored on agent favicon hook unmount",
					context: {
						projectId: projectIdRef.current ?? void 0,
						projectName: projectNameRef.current ?? void 0,
						organizationId: organizationIdRef.current ?? void 0,
						pathname: pathnameRef.current ?? void 0
					}
				});
				originalFaviconRef.current = null;
			}
		};
	}, []);
}
function useIsMarketingPage() {
	const matches = useMatches();
	const { pathname } = useLocation();
	return useMemo(() => isMarketingPage({
		pathname,
		matches
	}), [matches, pathname]);
}
function isRecord(value) {
	return !!value && typeof value === "object";
}
function asAssistantMessage(payload) {
	if (typeof payload.$id !== "string") return null;
	if (typeof payload.conversationId !== "string") return null;
	const timeline = payload.timeline !== void 0 ? normalizeTimeline(payload.timeline) : typeof payload.timelineJson === "string" ? normalizeTimeline(payload.timelineJson) : Array.isArray(payload.timeline) ? normalizeTimeline(payload.timeline) : void 0;
	return {
		...payload,
		$id: payload.$id,
		conversationId: payload.conversationId,
		...timeline !== void 0 ? { timeline } : {}
	};
}
function asAssistantTool(payload) {
	if (typeof payload.$id !== "string") return null;
	if (typeof payload.messageId !== "string") return null;
	return payload;
}
function asAssistantConversation(payload) {
	if (typeof payload.$id !== "string") return null;
	return payload;
}
function mergeMessageFields(previous, next) {
	if (!previous) return next;
	const merged = {
		...previous,
		...next
	};
	if (!Array.isArray(next.tools)) merged.tools = previous.tools;
	else if (next.tools.length === 0 && previous.tools?.length) merged.tools = previous.tools;
	return merged;
}
function upsertMessageInList(messages, next) {
	const existingIndex = messages.findIndex((message) => message.$id === next.$id);
	let nextMessages = existingIndex >= 0 ? messages.map((message, index) => index === existingIndex ? mergeMessageFields(message, next) : message) : [...messages, next];
	const editedFrom = typeof next.editedFromMessageId === "string" ? next.editedFromMessageId : "";
	if (editedFrom) nextMessages = nextMessages.filter((message) => message.$id !== editedFrom);
	return nextMessages.sort((a, b) => a.$createdAt.localeCompare(b.$createdAt));
}
function upsertToolOnMessage(message, tool) {
	const tools = Array.isArray(message.tools) ? [...message.tools] : [];
	const existingIndex = tools.findIndex((entry) => entry.$id === tool.$id || !!tool.toolCallId && entry.toolCallId === tool.toolCallId);
	if (existingIndex >= 0) tools[existingIndex] = {
		...tools[existingIndex],
		...tool
	};
	else tools.push(tool);
	return {
		...message,
		tools
	};
}
function sortConversationsByUpdatedAt(conversations) {
	return [...conversations].sort((a, b) => (b.$updatedAt ?? "").localeCompare(a.$updatedAt ?? ""));
}
function conversationsEqualForList(previous, next) {
	return previous.status === next.status && previous.lockState === next.lockState && previous.title === next.title && previous.$updatedAt === next.$updatedAt && previous.activeMessageId === next.activeMessageId;
}
function isAutomationRunConversation(conversation) {
	return Boolean(typeof conversation.automationId === "string" && conversation.automationId.trim());
}
function mergeAssistantConversationIntoCache(queryClient, conversation) {
	queryClient.setQueriesData({
		queryKey: ["agent", "conversations"],
		exact: false
	}, (old) => {
		if (!old) return old;
		const index = old.findIndex((entry) => entry.$id === conversation.$id);
		if (isAutomationRunConversation(conversation)) {
			if (index < 0) return old;
			const next = old.filter((entry) => entry.$id !== conversation.$id);
			return next.length === old.length ? old : next;
		}
		if (index >= 0) {
			const merged = {
				...old[index],
				...conversation
			};
			if (conversationsEqualForList(old[index], merged)) return old;
			const next = [...old];
			next[index] = merged;
			if (old[index].$updatedAt === merged.$updatedAt) return next;
			return sortConversationsByUpdatedAt(next);
		}
		return sortConversationsByUpdatedAt([conversation, ...old]);
	});
	const status = conversation.status?.toLowerCase() ?? "";
	if (status === "ready" || status === "completed" || status === "failed" || status === "error" || status === "stopped" || status === "cancelled" || status === "canceled") queryClient.invalidateQueries({
		queryKey: [
			"agent",
			"conversation-resource-stats",
			conversation.$id
		],
		exact: false
	});
}
function patchAssistantConversationInCache(queryClient, conversationId, patch) {
	queryClient.setQueriesData({
		queryKey: ["agent", "conversations"],
		exact: false
	}, (old) => {
		if (!old) return old;
		const index = old.findIndex((entry) => entry.$id === conversationId);
		if (index < 0) return old;
		const merged = {
			...old[index],
			...patch
		};
		if (conversationsEqualForList(old[index], merged)) return old;
		const next = [...old];
		next[index] = merged;
		if (patch.$updatedAt !== void 0 && old[index].$updatedAt !== merged.$updatedAt) return sortConversationsByUpdatedAt(next);
		return next;
	});
}
function syncConversationStatusFromMessage(queryClient, message) {
	if (message.role !== "assistant") return;
	const status = message.status?.toLowerCase() ?? "";
	if (!status) return;
	if (isAssistantMessageInFlight(message.status)) {
		patchAssistantConversationInCache(queryClient, message.conversationId, { status: status === "queued" ? "queued" : "running" });
		return;
	}
	if (status === "failed" || status === "error") {
		patchAssistantConversationInCache(queryClient, message.conversationId, { status: "failed" });
		return;
	}
	if (status === "stopped" || status === "cancelled" || status === "canceled") patchAssistantConversationInCache(queryClient, message.conversationId, { status: "stopped" });
}
function removeAssistantConversationFromCache(queryClient, conversationId) {
	queryClient.setQueriesData({
		queryKey: ["agent", "conversations"],
		exact: false
	}, (old) => old?.filter((entry) => entry.$id !== conversationId));
	queryClient.removeQueries({ queryKey: [
		"agent",
		"messages",
		conversationId
	] });
	queryClient.removeQueries({ queryKey: [
		"agent",
		"conversation-resource-stats",
		conversationId
	] });
}
function applyMessagesCacheUpdate(queryClient, conversationId, updater) {
	queryClient.setQueriesData({
		queryKey: [
			"agent",
			"messages",
			conversationId
		],
		exact: false
	}, updater);
	queryClient.setQueriesData({
		queryKey: [
			"agent",
			"conversation-resource-stats",
			conversationId
		],
		exact: false
	}, updater);
}
function mergeAssistantMessageIntoCache(queryClient, message) {
	applyMessagesCacheUpdate(queryClient, message.conversationId, (old) => {
		if (!old) return {
			messages: [message],
			total: 1
		};
		const previousLength = old.messages.length;
		const messages = upsertMessageInList(old.messages, message);
		const added = messages.length - previousLength;
		return {
			messages,
			total: Math.max(old.total + added, messages.length)
		};
	});
}
function mergeAssistantToolIntoCache(queryClient, tool) {
	const conversationId = tool.conversationId;
	if (!conversationId) {
		const updater = (old) => {
			if (!old?.messages?.length) return old;
			let changed = false;
			const messages = old.messages.map((message) => {
				if (message.$id !== tool.messageId) return message;
				changed = true;
				return upsertToolOnMessage(message, tool);
			});
			return changed ? {
				...old,
				messages
			} : old;
		};
		queryClient.setQueriesData({
			queryKey: ["agent", "messages"],
			exact: false
		}, updater);
		queryClient.setQueriesData({
			queryKey: ["agent", "conversation-resource-stats"],
			exact: false
		}, updater);
		return;
	}
	applyMessagesCacheUpdate(queryClient, conversationId, (old) => {
		if (!old?.messages?.length) return old;
		let changed = false;
		const messages = old.messages.map((message) => {
			if (message.$id !== tool.messageId) return message;
			changed = true;
			return upsertToolOnMessage(message, tool);
		});
		return changed ? {
			...old,
			messages
		} : old;
	});
}
function eventMatchesAssistantResource(eventNames, resource) {
	const patterns = [
		`agent${resource}`,
		`agent.${resource}`,
		`assistant${resource}`,
		`assistant.${resource}`
	];
	return eventNames.some((event) => patterns.some((pattern) => event.includes(pattern)));
}
function applyAssistantRealtimePayload(queryClient, events, payload) {
	if (!isRecord(payload)) return false;
	const eventNames = events.map((event) => event.toLowerCase());
	const isDelete = eventNames.some((event) => event.includes(".delete"));
	if (eventMatchesAssistantResource(eventNames, "conversations")) {
		if (isDelete && typeof payload.$id === "string") {
			removeAssistantConversationFromCache(queryClient, payload.$id);
			queryClient.invalidateQueries({
				queryKey: ["agent", "automations"],
				exact: false
			});
			return true;
		}
		const conversation = asAssistantConversation(payload);
		if (conversation) {
			mergeAssistantConversationIntoCache(queryClient, conversation);
			queryClient.invalidateQueries({
				queryKey: ["agent", "automations"],
				exact: false
			});
			return true;
		}
	}
	if (eventMatchesAssistantResource(eventNames, "messages")) {
		const message = asAssistantMessage(payload);
		if (message) {
			mergeAssistantMessageIntoCache(queryClient, message);
			syncConversationStatusFromMessage(queryClient, message);
			return true;
		}
	}
	if (eventMatchesAssistantResource(eventNames, "tools")) {
		const tool = asAssistantTool(payload);
		if (tool) {
			mergeAssistantToolIntoCache(queryClient, tool);
			return true;
		}
	}
	if (eventMatchesAssistantResource(eventNames, "mcps")) {
		queryClient.invalidateQueries({ queryKey: ["agent", "mcps"] });
		return true;
	}
	return false;
}
var COMPOSER_DRAFTS_STORAGE_KEY = "ai-chat-composer-drafts";
var NEW_CONVERSATION_DRAFT_KEY = "__new__";
function draftStorageKey(conversationId) {
	return conversationId?.trim() || NEW_CONVERSATION_DRAFT_KEY;
}
function readAllComposerDrafts() {
	if (typeof window === "undefined") return {};
	try {
		const raw = window.localStorage.getItem(COMPOSER_DRAFTS_STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
		const drafts = {};
		for (const [key, value] of Object.entries(parsed)) if (typeof value === "string" && value.length > 0) drafts[key] = value;
		return drafts;
	} catch {
		return {};
	}
}
function writeAllComposerDrafts(drafts) {
	if (typeof window === "undefined") return;
	try {
		if (Object.keys(drafts).length === 0) {
			window.localStorage.removeItem(COMPOSER_DRAFTS_STORAGE_KEY);
			return;
		}
		window.localStorage.setItem(COMPOSER_DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
	} catch {}
}
function readComposerDraft(conversationId) {
	return readAllComposerDrafts()[draftStorageKey(conversationId)] ?? "";
}
function writeComposerDraft(conversationId, value) {
	const key = draftStorageKey(conversationId);
	const drafts = readAllComposerDrafts();
	if (!value) {
		if (!(key in drafts)) return;
		delete drafts[key];
		writeAllComposerDrafts(drafts);
		return;
	}
	if (drafts[key] === value) return;
	drafts[key] = value;
	writeAllComposerDrafts(drafts);
}
function clearComposerDraft(conversationId) {
	writeComposerDraft(conversationId, "");
}
var SPEECH_SYNTHESIS_LANG = {
	en: "en-US",
	he: "he-IL",
	ja: "ja-JP"
};
var CHUNK_PAUSE_MS = 560;
var LIST_ITEM_PATTERN = /^(?:[-*+•●◦▪▫–—]|\d+[.)])\s+(.+)$/u;
var activeOnEnd = null;
var speakGeneration = 0;
var chunkPauseTimer = null;
function isSpeechSynthesisSupported() {
	if (typeof window === "undefined") return false;
	return typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined";
}
function resolveSpeechLang(lang) {
	if (!lang) return SPEECH_SYNTHESIS_LANG.en;
	if (lang in SPEECH_SYNTHESIS_LANG) return SPEECH_SYNTHESIS_LANG[lang];
	return lang;
}
function stripInlineMarkdown(markdown) {
	return markdown.replace(/```[\s\S]*?```/g, "\n").replace(/`([^`]+)`/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/(\*\*|__)(.*?)\1/g, "$2").replace(/(\*|_)(.*?)\1/g, "$2").replace(/^>\s?/gm, "");
}
function ensureSentence(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?…]$/u.test(trimmed) ? trimmed : `${trimmed}.`;
}
function normalizeProse(text) {
	return text.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").replace(/([.!?…]){2,}/gu, "$1").trim();
}
function splitIntoSentences(text) {
	const normalized = normalizeProse(text);
	if (!normalized) return [];
	const parts = normalized.split(/([.!?…]+)\s+/u);
	const sentences = [];
	for (let i = 0; i < parts.length; i += 2) {
		const combined = `${parts[i]?.trim() ?? ""}${parts[i + 1] ?? ""}`.trim();
		if (combined) sentences.push(ensureSentence(combined));
	}
	return sentences;
}
function toSpeechChunks(markdown) {
	const chunks = [];
	for (const rawLine of stripInlineMarkdown(markdown).split(/\n/)) {
		const line = rawLine.trim();
		if (!line) continue;
		const content = normalizeProse(line.match(LIST_ITEM_PATTERN)?.[1] ?? line);
		if (!content) continue;
		chunks.push(...splitIntoSentences(content));
	}
	return chunks;
}
function pickVoice(lang) {
	if (typeof window === "undefined") return null;
	const voices = window.speechSynthesis.getVoices();
	if (voices.length === 0) return null;
	const exact = voices.find((voice) => voice.lang === lang);
	if (exact) return exact;
	const prefix = lang.split("-")[0]?.toLowerCase();
	if (!prefix) return null;
	return voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix)) ?? null;
}
function clearChunkPauseTimer() {
	if (chunkPauseTimer === null) return;
	window.clearTimeout(chunkPauseTimer);
	chunkPauseTimer = null;
}
function stopSpeaking() {
	if (typeof window === "undefined") return;
	speakGeneration += 1;
	clearChunkPauseTimer();
	const onEnd = activeOnEnd;
	activeOnEnd = null;
	window.speechSynthesis.cancel();
	onEnd?.();
}
function speakText(text, options = {}) {
	if (!isSpeechSynthesisSupported()) {
		options.onError?.(/* @__PURE__ */ new Error("Speech synthesis is not supported"));
		return;
	}
	const chunks = toSpeechChunks(text);
	if (chunks.length === 0) {
		options.onEnd?.();
		return;
	}
	stopSpeaking();
	const lang = resolveSpeechLang(options.lang);
	const generation = speakGeneration;
	let chunkIndex = 0;
	let finished = false;
	const finish = (error) => {
		if (finished) return;
		finished = true;
		clearChunkPauseTimer();
		if (speakGeneration === generation) activeOnEnd = null;
		if (error) {
			options.onError?.(error);
			return;
		}
		options.onEnd?.();
	};
	activeOnEnd = () => finish();
	const speakChunkAt = (index) => {
		if (finished || speakGeneration !== generation) return;
		if (index >= chunks.length) {
			finish();
			return;
		}
		const utterance = new SpeechSynthesisUtterance(chunks[index]);
		utterance.lang = lang;
		const voice = pickVoice(lang);
		if (voice) utterance.voice = voice;
		utterance.onend = () => {
			if (finished || speakGeneration !== generation) return;
			const nextIndex = index + 1;
			if (nextIndex >= chunks.length) {
				finish();
				return;
			}
			clearChunkPauseTimer();
			chunkPauseTimer = window.setTimeout(() => {
				chunkPauseTimer = null;
				speakChunkAt(nextIndex);
			}, CHUNK_PAUSE_MS);
		};
		utterance.onerror = (event) => {
			if (event.error === "canceled" || event.error === "interrupted") {
				finish();
				return;
			}
			finish(new Error(event.error || "Speech synthesis failed"));
		};
		window.speechSynthesis.speak(utterance);
	};
	const startSpeaking = () => {
		if (finished || speakGeneration !== generation) return;
		speakChunkAt(chunkIndex);
	};
	if (window.speechSynthesis.getVoices().length === 0) {
		const onVoicesChanged = () => {
			window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
			startSpeaking();
		};
		window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
		window.setTimeout(() => {
			window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
			startSpeaking();
		}, 250);
		return;
	}
	startSpeaking();
}
var SPECIFIC_TOKEN_SCOPES = {
	user: ["users"],
	users: ["users"],
	team: ["teams"],
	teams: ["teams"],
	bucket: ["buckets"],
	buckets: ["buckets"],
	file: ["files"],
	files: ["files"],
	database: ["databases"],
	databases: ["databases"],
	table: ["tables"],
	tables: ["tables"],
	row: ["tables"],
	rows: ["tables"],
	column: ["tables"],
	columns: ["tables"],
	attribute: ["tables"],
	attributes: ["tables"],
	index: ["tables"],
	indexes: ["tables"],
	function: ["functions"],
	functions: ["functions"],
	site: ["sites"],
	sites: ["sites"],
	deployment: ["deployments"],
	deployments: ["deployments"],
	execution: ["executions"],
	executions: ["executions"],
	variable: ["variables"],
	variables: ["variables"],
	message: ["messages"],
	messages: ["messages"],
	topic: ["topics"],
	topics: ["topics"],
	provider: ["providers"],
	providers: ["providers"],
	subscriber: ["topics"],
	subscribers: ["topics"],
	webhook: ["webhooks"],
	webhooks: ["webhooks"],
	platform: ["platforms"],
	platforms: ["platforms"],
	domain: ["domains"],
	domains: ["domains"],
	rule: ["domains"],
	rules: ["domains"],
	key: ["keys"],
	keys: ["keys"],
	project: ["project"],
	projects: ["project"],
	organization: ["organization"],
	organizations: ["organization"],
	org: ["organization"]
};
var SERVICE_PREFIX_SCOPES = {
	users: ["users"],
	teams: ["teams"],
	storage: ["buckets", "files"],
	databases: ["databases", "tables"],
	database: ["databases", "tables"],
	tables: ["tables"],
	tablesdb: ["tables", "databases"],
	documents: ["databases", "tables"],
	documentsdb: ["databases", "tables"],
	functions: ["functions"],
	sites: ["sites"],
	messaging: [
		"messages",
		"topics",
		"providers"
	],
	projects: ["project"],
	project: ["project"],
	organizations: ["organization"],
	organization: ["organization"],
	webhooks: ["webhooks"],
	platforms: ["platforms"],
	proxy: ["domains"],
	domains: ["domains"],
	keys: ["keys"],
	apikeys: ["keys"]
};
var RESOURCE_TYPE_SCOPES = {
	database: ["databases"],
	databases: ["databases"],
	table: ["tables"],
	tables: ["tables"],
	row: ["tables"],
	column: ["tables"],
	index: ["tables"],
	bucket: ["buckets"],
	buckets: ["buckets"],
	file: ["files"],
	files: ["files"],
	user: ["users"],
	users: ["users"],
	team: ["teams"],
	teams: ["teams"],
	function: ["functions"],
	functions: ["functions"],
	site: ["sites"],
	sites: ["sites"],
	message: ["messages"],
	messages: ["messages"],
	topic: ["topics"],
	topics: ["topics"],
	provider: ["providers"],
	providers: ["providers"],
	deployment: ["deployments"],
	execution: ["executions"],
	variable: ["variables"],
	webhook: ["webhooks"],
	platform: ["platforms"],
	domain: ["domains"],
	project: ["project"],
	organization: ["organization"],
	key: ["keys"]
};
function tokenizeToolName(toolName) {
	const normalized = toolName.trim().toLowerCase();
	if (!normalized) return [];
	return normalized.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase().split(/[._\s-]+/).filter(Boolean);
}
function addScopes(target, scopes) {
	if (!scopes?.length) return;
	for (const scope of scopes) {
		const normalized = scope.trim().toLowerCase();
		if (normalized) target.add(normalized);
	}
}
function refreshScopesForToolName(toolName) {
	if (!classifyResourceMutation(toolName)) return [];
	const tokens = tokenizeToolName(toolName);
	if (tokens.length === 0) return [];
	const scopes = /* @__PURE__ */ new Set();
	for (const token of tokens) addScopes(scopes, SPECIFIC_TOKEN_SCOPES[token]);
	if (scopes.size > 0) return [...scopes];
	addScopes(scopes, SERVICE_PREFIX_SCOPES[tokens[0]]);
	return [...scopes];
}
function refreshScopesForResourceType(resourceType) {
	const normalized = resourceType?.trim().toLowerCase();
	if (!normalized) return [];
	return RESOURCE_TYPE_SCOPES[normalized] ?? [normalized];
}
function refreshScopesFromCompletedTool(tool) {
	if (tool.errorMessage) return [];
	if (isConsoleToolName(tool.name)) {
		const envelope = parseConsoleEnvelope(tool.output);
		if (!envelope) return [];
		const scopes = /* @__PURE__ */ new Set();
		for (const action of envelope.actions) {
			if (!action || typeof action !== "object") continue;
			const type = action.type;
			if (type === "resource") {
				const mutation = action.mutation;
				if (mutation !== "create" && mutation !== "update" && mutation !== "delete") continue;
				addScopes(scopes, refreshScopesForResourceType(action.resourceType));
			} else if (type === "refresh") {
				const refreshScopes = action.scopes;
				if (!Array.isArray(refreshScopes)) continue;
				for (const scope of refreshScopes) if (typeof scope === "string") addScopes(scopes, [scope]);
			}
		}
		return [...scopes];
	}
	return refreshScopesForToolName(resolveCatalogToolName(tool));
}
function collectRefreshScopesFromTools(tools) {
	if (!tools?.length) return [];
	const scopes = /* @__PURE__ */ new Set();
	for (const tool of tools) addScopes(scopes, refreshScopesFromCompletedTool(tool));
	return [...scopes];
}
var INCOMPLETE_TOOL_STATUSES = new Set([
	"running",
	"queued",
	"pending",
	"processing",
	"in_progress",
	"in-progress"
]);
function isIncompleteToolStatus(status) {
	return INCOMPLETE_TOOL_STATUSES.has((status ?? "").trim().toLowerCase());
}
function isSuccessfulToolStatus(status) {
	const normalized = (status ?? "").trim().toLowerCase();
	return normalized === "success" || normalized === "completed";
}
function useAgentResourceRefreshEffects(messages, options) {
	const queryClient = useQueryClient();
	const conversationId = options?.conversationId;
	const projectId = options?.projectId;
	const toolStatusByKeyRef = useRef(/* @__PURE__ */ new Map());
	const refreshedToolKeysRef = useRef(/* @__PURE__ */ new Set());
	const trackedConversationRef = useRef(null);
	useEffect(() => {
		if (!conversationId) return;
		if (trackedConversationRef.current !== conversationId) {
			trackedConversationRef.current = conversationId;
			toolStatusByKeyRef.current = /* @__PURE__ */ new Map();
			refreshedToolKeysRef.current = /* @__PURE__ */ new Set();
		}
		const newlyCompleted = [];
		for (const message of messages ?? []) {
			const turn = buildTurnView(message);
			const messageId = turn.messageId?.trim();
			if (!messageId) continue;
			for (const toolKey of turn.toolOrder) {
				const tool = turn.tools[toolKey];
				if (!tool) continue;
				const applyKey = `${conversationId}:${consoleToolApplyKey(tool, { messageId })}`;
				const status = (tool.status ?? "").trim().toLowerCase() || "unknown";
				const previousStatus = toolStatusByKeyRef.current.get(applyKey);
				toolStatusByKeyRef.current.set(applyKey, status);
				if (previousStatus === void 0) continue;
				if (refreshedToolKeysRef.current.has(applyKey)) continue;
				if (!isIncompleteToolStatus(previousStatus)) continue;
				if (!isSuccessfulToolStatus(status)) continue;
				newlyCompleted.push({
					...tool,
					applyKey
				});
			}
		}
		if (newlyCompleted.length === 0) return;
		const scopes = collectRefreshScopesFromTools(newlyCompleted);
		for (const tool of newlyCompleted) refreshedToolKeysRef.current.add(tool.applyKey);
		if (scopes.length === 0) return;
		createConsoleRefreshHandler(queryClient, projectId)(scopes);
	}, [
		conversationId,
		messages,
		projectId,
		queryClient
	]);
}
var EMPTY_ASSISTANT_CONVERSATIONS = [];
var EMPTY_ASSISTANT_MODELS = [];
var AgentSpeakStopIcon = VolumeOff ?? VolumeX;
function nonEmptyId(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
function assistantConversationProjectId(conversation) {
	if (!conversation) return void 0;
	return nonEmptyId(conversation.projectId);
}
async function fetchFirstAccessibleProjectId() {
	try {
		const { fetchOrganizations } = await import("./organizations-CATeYY3J.js");
		const orgs = await fetchOrganizations();
		for (const org of orgs.teams ?? []) try {
			const projectId = nonEmptyId((await listConsoleProjects({
				organizationId: org.$id,
				queries: [
					Query.equal("teamId", org.$id),
					Query.or([Query.isNull("status"), Query.notEqual("status", "archived")]),
					Query.orderDesc("$createdAt"),
					Query.limit(1)
				],
				total: false
			})).projects?.[0]?.$id);
			if (projectId) return projectId;
		} catch {}
		return null;
	} catch {
		return null;
	}
}
function assistantConversationAutomationId(conversation) {
	if (!conversation) return void 0;
	return nonEmptyId(conversation.automationId);
}
var AgentChatContext = createContext(null);
var AUTH_ROUTE_PATHNAMES = new Set([
	"/sign-in",
	"/sign-up",
	"/recovery",
	"/mfa",
	"/join",
	"/sign-out",
	"/verify-email"
]);
function isAgentBlockedPath(pathname) {
	return AUTH_ROUTE_PATHNAMES.has(pathname);
}
var CONVERSATION_TIME_GROUPS = [
	"Today",
	"Yesterday",
	"Previous 7 days",
	"Previous 30 days",
	"Older"
];
function getConversationTimeGroup(dateValue, now = /* @__PURE__ */ new Date()) {
	const date = dateValue ? new Date(dateValue) : now;
	if (Number.isNaN(date.getTime())) return "Older";
	const day = startOfDay(date).getTime();
	const today = startOfDay(now).getTime();
	const yesterday = startOfDay(subDays(now, 1)).getTime();
	const previous7 = startOfDay(subDays(now, 7)).getTime();
	const previous30 = startOfDay(subDays(now, 30)).getTime();
	if (day >= today) return "Today";
	if (day >= yesterday) return "Yesterday";
	if (day >= previous7) return "Previous 7 days";
	if (day >= previous30) return "Previous 30 days";
	return "Older";
}
function groupConversationsByTime(conversations) {
	const buckets = /* @__PURE__ */ new Map();
	for (const conversation of conversations) {
		const label = getConversationTimeGroup(conversation.$updatedAt || conversation.$createdAt);
		const existing = buckets.get(label);
		if (existing) existing.push(conversation);
		else buckets.set(label, [conversation]);
	}
	return CONVERSATION_TIME_GROUPS.filter((label) => buckets.has(label)).map((label) => ({
		label,
		items: buckets.get(label) ?? []
	}));
}
function AgentChatProvider({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const params = useParams({ strict: false });
	const { project } = useProject(params.projectId);
	const { activeContent, showAgent, hideRightPane } = useConsoleRightPane();
	const isAgentBlocked = useMemo(() => isAgentBlockedPath(location.pathname), [location.pathname]);
	const isMarketingPage$1 = useIsMarketingPage();
	const isConsolePath = useMemo(() => isConsoleRightPanePath(location.pathname), [location.pathname]);
	const onAgentPage = useMemo(() => isAgentPagePath(location.pathname), [location.pathname]);
	const { data: account } = useQuery({
		...consoleAccountQueryOptions(),
		enabled: !isAgentBlocked && isClientQueryEnabled
	});
	const { isOpen, setIsOpen } = useAIChatPanelOpen(account);
	const { activeConversationId, setActiveConversationId } = useAIChatActiveConversationId(account);
	const hasRestoredOpenPrefRef = useRef(false);
	const pendingCreateAgentRef = useRef(false);
	const [pendingCreateAgentTick, setPendingCreateAgentTick] = useState(0);
	const resolveAgentOrgId = useCallback(async () => {
		const fromRoute = params.orgId?.trim() || parseOrganizationIdFromPath(location.pathname) || project?.teamId?.trim() || preferredOrganizationId(account?.prefs);
		if (fromRoute) return fromRoute;
		if (!account) return null;
		try {
			return await resolvePostAuthOrganizationId(account, queryClient);
		} catch {
			return null;
		}
	}, [
		account,
		location.pathname,
		params.orgId,
		project?.teamId,
		queryClient
	]);
	const navigateToAgentPage = useCallback(async (hrefForOrg) => {
		const orgId = await resolveAgentOrgId();
		if (!orgId) return;
		navigate({ to: hrefForOrg ? hrefForOrg(orgId) : agentIndexPath(orgId) });
	}, [navigate, resolveAgentOrgId]);
	const openChat = useCallback(() => {
		if (isAgentBlocked || isMarketingPage$1) return;
		if (onAgentPage) return;
		if (!isConsolePath) {
			navigateToAgentPage();
			return;
		}
		showAgent();
		setIsOpen(true);
	}, [
		isAgentBlocked,
		isConsolePath,
		isMarketingPage$1,
		navigateToAgentPage,
		onAgentPage,
		setIsOpen,
		showAgent
	]);
	const closeChat = useCallback(() => {
		setIsOpen(false);
		hideRightPane();
	}, [hideRightPane, setIsOpen]);
	const toggleChat = useCallback(() => {
		if (isAgentBlocked || isMarketingPage$1) return;
		if (onAgentPage) return;
		if (!isConsolePath) {
			openChat();
			return;
		}
		if (activeContent === "agent") {
			closeChat();
			return;
		}
		openChat();
	}, [
		activeContent,
		closeChat,
		isAgentBlocked,
		isConsolePath,
		isMarketingPage$1,
		onAgentPage,
		openChat
	]);
	const onToggleAgentShortcut = useCallback(() => {
		toggleChat();
	}, [toggleChat]);
	useKeyboardShortcut(AGENT_TOGGLE_SHORTCUT_COMBOS[0], onToggleAgentShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(AGENT_TOGGLE_SHORTCUT_COMBOS[1], onToggleAgentShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	const consumePendingCreateAgent = useCallback(() => {
		if (!pendingCreateAgentRef.current) return false;
		pendingCreateAgentRef.current = false;
		return true;
	}, []);
	const requestCreateAgent = useCallback(() => {
		if (isAgentBlocked || isMarketingPage$1) return;
		pendingCreateAgentRef.current = true;
		setPendingCreateAgentTick((tick) => tick + 1);
		if (onAgentPage) return;
		setIsOpen(false);
		hideRightPane();
		navigateToAgentPage();
	}, [
		hideRightPane,
		isAgentBlocked,
		isMarketingPage$1,
		navigateToAgentPage,
		onAgentPage,
		setIsOpen
	]);
	useEffect(() => {
		if (onAgentPage || !isConsolePath || isMarketingPage$1) {
			if (isOpen) setIsOpen(false);
			if (activeContent === "agent") hideRightPane();
		}
	}, [
		activeContent,
		hideRightPane,
		isConsolePath,
		isMarketingPage$1,
		isOpen,
		onAgentPage,
		setIsOpen
	]);
	useEffect(() => {
		if (isAgentBlocked && isOpen) {
			setIsOpen(false);
			hideRightPane();
		}
	}, [
		hideRightPane,
		isAgentBlocked,
		isOpen,
		setIsOpen
	]);
	useEffect(() => {
		if (hasRestoredOpenPrefRef.current || !account || isAgentBlocked || !isOpen) return;
		hasRestoredOpenPrefRef.current = true;
		showAgent();
	}, [
		account,
		isAgentBlocked,
		isOpen,
		showAgent
	]);
	return /* @__PURE__ */ jsx(AgentChatContext.Provider, {
		value: {
			isOpen,
			activeConversationId,
			openChat,
			closeChat,
			toggleChat,
			setActiveConversationId,
			requestCreateAgent,
			pendingCreateAgentTick,
			consumePendingCreateAgent
		},
		children
	});
}
function useAgentChat() {
	const context = useContext(AgentChatContext);
	if (!context) return {
		isOpen: false,
		activeConversationId: null,
		openChat: () => {},
		closeChat: () => {},
		toggleChat: () => {},
		setActiveConversationId: () => {},
		requestCreateAgent: () => {},
		pendingCreateAgentTick: 0,
		consumePendingCreateAgent: () => false
	};
	return context;
}
var suggestedQuestions = [
	"How do I create a new database?",
	"How do I set up authentication?",
	"How do I upload files to storage?",
	"How do I deploy a function?"
];
var mcpSuggestedQuestions = [
	"List the databases and tables in this project",
	"Show me Auth users created this week",
	"What storage buckets do I have?",
	"Create a todos table with title and done columns"
];
var PLACEHOLDER_TOKENS = [
	"{{APPWRITE_ENDPOINT}}",
	"{{APPWRITE_REGION}}",
	"{{APPWRITE_PROJECT_ID}}",
	"{{APPWRITE_PROJECT_NAME}}",
	"{{APPWRITE_TEAM_ID}}",
	"{{APPWRITE_ORGANIZATION_ID}}",
	"{{APPWRITE_USER_ID}}"
];
var PLACEHOLDER_LABELS = {
	"{{APPWRITE_ENDPOINT}}": "Appwrite endpoint",
	"{{APPWRITE_REGION}}": "Region",
	"{{APPWRITE_PROJECT_ID}}": "Project ID",
	"{{APPWRITE_PROJECT_NAME}}": "Project name",
	"{{APPWRITE_TEAM_ID}}": "Team ID",
	"{{APPWRITE_ORGANIZATION_ID}}": "Organization ID",
	"{{APPWRITE_USER_ID}}": "User ID"
};
function dedupeValues(values) {
	const seen = /* @__PURE__ */ new Set();
	for (const value of values) {
		const trimmed = value?.trim();
		if (trimmed) seen.add(trimmed);
	}
	return [...seen];
}
function extractPlaceholderTokens(content) {
	const found = [];
	for (const token of PLACEHOLDER_TOKENS) if (content.includes(token)) found.push(token);
	return found;
}
function applyPlaceholderValues(content, values) {
	let resolved = content;
	for (const token of PLACEHOLDER_TOKENS) {
		const value = values[token];
		if (!value) continue;
		resolved = resolved.split(token).join(value);
	}
	return resolved;
}
var AUTO_SCROLL_BOTTOM_THRESHOLD = 96;
var VOICE_SUBMIT_COUNTDOWN_MS = 3e3;
function formatAttachmentSize(size) {
	if (!size || size <= 0) return null;
	const units = [
		"B",
		"KB",
		"MB",
		"GB"
	];
	let value = size;
	let unitIndex = 0;
	while (value >= 1024 && unitIndex < units.length - 1) {
		value /= 1024;
		unitIndex += 1;
	}
	const fractionDigits = value >= 10 || unitIndex === 0 ? 0 : 1;
	return `${value.toFixed(fractionDigits)} ${units[unitIndex]}`;
}
var ATTACHMENT_NAME_DISPLAY_MAX = 40;
function formatAttachmentDisplayName(name) {
	return truncateMiddle(name, ATTACHMENT_NAME_DISPLAY_MAX);
}
function getPreviewAspectClass(isPortrait) {
	return isPortrait ? "aspect-[9/16]" : "aspect-video";
}
var MESSAGE_IMAGE_PREVIEW_MAX_H_CLASS = "max-h-64";
function isGridPreviewableImage(attachment) {
	if (!attachment.isImage || !attachment.previewUrl) return false;
	if (attachment.mimeType === "image/svg+xml") return false;
	if (attachment.name.toLowerCase().endsWith(".svg")) return false;
	return true;
}
function isRtlMessageText(text) {
	for (const character of text) {
		if (/\s/.test(character)) continue;
		if (/[A-Za-z0-9]/.test(character)) return false;
		if (/[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(character)) return true;
	}
	return false;
}
function MessageAttachments({ attachmentIds = [], alignment }) {
	const t = useT();
	const uniqueAttachmentIds = useMemo(() => [...new Set(attachmentIds.filter(Boolean))], [attachmentIds]);
	const [fullscreenAttachment, setFullscreenAttachment] = useState(null);
	const [fullscreenZoom, setFullscreenZoom] = useState(1);
	const [fullscreenPan, setFullscreenPan] = useState({
		x: 0,
		y: 0
	});
	const [loadedImageKeys, setLoadedImageKeys] = useState(/* @__PURE__ */ new Set());
	const avifSupported = useAvifSupport();
	const [imageDimensions, setImageDimensions] = useState({});
	const thumbnailStripRef = useRef(null);
	const thumbnailButtonRefs = useRef({});
	const isPanningRef = useRef(false);
	const panStartRef = useRef({
		x: 0,
		y: 0
	});
	const { data: filesData } = useAssistantAttachmentFiles(uniqueAttachmentIds);
	const filesById = useMemo(() => {
		return new Map((filesData ?? []).map((file) => [file.$id, file]));
	}, [filesData]);
	const attachments = useMemo(() => uniqueAttachmentIds.map((fileId) => {
		const file = filesById.get(fileId);
		return {
			id: fileId,
			name: file?.name ?? fileId,
			mimeType: file?.mimeType ?? "",
			size: file?.sizeOriginal,
			isImage: file?.mimeType?.startsWith("image/") ?? false,
			previewUrl: file?.mimeType?.startsWith("image/") ? sdk.forConsole.storage.getFilePreview({
				bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
				fileId,
				height: 640,
				output: avifSupported ? ImageFormat.Avif : void 0
			}) : null,
			fullscreenPreviewUrl: file?.mimeType?.startsWith("image/") ? sdk.forConsole.storage.getFilePreview({
				bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
				fileId,
				height: 900,
				output: avifSupported ? ImageFormat.Avif : void 0
			}) : null,
			openUrl: sdk.forConsole.storage.getFileView({
				bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
				fileId
			}),
			downloadUrl: sdk.forConsole.storage.getFileDownload({
				bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
				fileId
			})
		};
	}), [
		filesById,
		uniqueAttachmentIds,
		avifSupported
	]);
	const imageAttachments = useMemo(() => attachments.filter(isGridPreviewableImage), [attachments]);
	const fileAttachments = useMemo(() => attachments.filter((attachment) => !isGridPreviewableImage(attachment)), [attachments]);
	const visibleImages = useMemo(() => imageAttachments.slice(0, 4), [imageAttachments]);
	const hiddenImageCount = Math.max(0, imageAttachments.length - visibleImages.length);
	const activeFullscreenAttachment = useMemo(() => {
		if (fullscreenAttachment === null) return null;
		return imageAttachments[fullscreenAttachment] ?? null;
	}, [fullscreenAttachment, imageAttachments]);
	const fullscreenLoadedKey = activeFullscreenAttachment ? `fullscreen:${activeFullscreenAttachment.id}` : null;
	const isFullscreenImageLoaded = fullscreenLoadedKey ? loadedImageKeys.has(fullscreenLoadedKey) : false;
	const activeFullscreenDimensions = activeFullscreenAttachment ? imageDimensions[activeFullscreenAttachment.id] : void 0;
	const canGoToPreviousImage = fullscreenAttachment !== null && fullscreenAttachment > 0;
	const canGoToNextImage = fullscreenAttachment !== null && fullscreenAttachment < imageAttachments.length - 1;
	const canZoomOut = fullscreenZoom > .5;
	const canZoomIn = fullscreenZoom < 3;
	const openFullscreenById = useCallback((attachmentId) => {
		const nextIndex = imageAttachments.findIndex((attachment) => attachment.id === attachmentId);
		if (nextIndex < 0) return;
		setFullscreenAttachment(nextIndex);
	}, [imageAttachments]);
	const goToPreviousImage = useCallback(() => {
		setFullscreenAttachment((current) => {
			if (current === null || current <= 0) return current;
			return current - 1;
		});
	}, []);
	const goToNextImage = useCallback(() => {
		setFullscreenAttachment((current) => {
			if (current === null || current >= imageAttachments.length - 1) return current;
			return current + 1;
		});
	}, [imageAttachments.length]);
	const zoomOut = useCallback(() => {
		setFullscreenZoom((current) => Math.max(.5, Number((current - .25).toFixed(2))));
	}, []);
	const zoomIn = useCallback(() => {
		setFullscreenZoom((current) => Math.min(3, Number((current + .25).toFixed(2))));
	}, []);
	const resetZoom = useCallback(() => {
		setFullscreenZoom(1);
		setFullscreenPan({
			x: 0,
			y: 0
		});
	}, []);
	const handleFullscreenWheel = useCallback((event) => {
		event.preventDefault();
		const zoomStep = event.deltaY > 0 ? -.1 : .1;
		setFullscreenZoom((current) => {
			return Math.min(3, Math.max(.5, Number((current + zoomStep).toFixed(2))));
		});
	}, []);
	const handleFullscreenMouseDown = useCallback((event) => {
		if (fullscreenZoom <= 1) return;
		isPanningRef.current = true;
		panStartRef.current = {
			x: event.clientX - fullscreenPan.x,
			y: event.clientY - fullscreenPan.y
		};
	}, [
		fullscreenPan.x,
		fullscreenPan.y,
		fullscreenZoom
	]);
	const handleFullscreenMouseMove = useCallback((event) => {
		if (!isPanningRef.current || fullscreenZoom <= 1) return;
		setFullscreenPan({
			x: event.clientX - panStartRef.current.x,
			y: event.clientY - panStartRef.current.y
		});
	}, [fullscreenZoom]);
	const stopFullscreenPanning = useCallback(() => {
		isPanningRef.current = false;
	}, []);
	useEffect(() => {
		if (fullscreenAttachment === null) return;
		if (fullscreenAttachment >= imageAttachments.length) setFullscreenAttachment(imageAttachments.length > 0 ? imageAttachments.length - 1 : null);
	}, [fullscreenAttachment, imageAttachments.length]);
	useEffect(() => {
		setFullscreenZoom(1);
		setFullscreenPan({
			x: 0,
			y: 0
		});
	}, [activeFullscreenAttachment?.id]);
	useEffect(() => {
		if (fullscreenZoom <= 1) setFullscreenPan({
			x: 0,
			y: 0
		});
	}, [fullscreenZoom]);
	useEffect(() => {
		if (fullscreenAttachment === null) return;
		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				goToPreviousImage();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				goToNextImage();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		fullscreenAttachment,
		goToNextImage,
		goToPreviousImage
	]);
	useEffect(() => {
		const currentIds = new Set(imageAttachments.map((attachment) => attachment.id));
		for (const attachmentId of Object.keys(thumbnailButtonRefs.current)) if (!currentIds.has(attachmentId)) delete thumbnailButtonRefs.current[attachmentId];
	}, [imageAttachments]);
	useEffect(() => {
		if (fullscreenAttachment === null) return;
		const activeAttachment = imageAttachments[fullscreenAttachment];
		if (!activeAttachment) return;
		const strip = thumbnailStripRef.current;
		const thumbnail = thumbnailButtonRefs.current[activeAttachment.id];
		if (!strip || !thumbnail) return;
		const stripRect = strip.getBoundingClientRect();
		const thumbnailRect = thumbnail.getBoundingClientRect();
		if (thumbnailRect.left < stripRect.left || thumbnailRect.right > stripRect.right) thumbnail.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		});
	}, [fullscreenAttachment, imageAttachments]);
	useEffect(() => {
		const handleMouseUp = () => {
			stopFullscreenPanning();
		};
		window.addEventListener("mouseup", handleMouseUp);
		return () => {
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [stopFullscreenPanning]);
	if (attachments.length === 0) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: cn("mt-2 flex w-full min-w-[min(100%,16rem)] max-w-full self-stretch", alignment === "right" ? "justify-end" : "justify-start"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full min-w-0 space-y-2",
			children: [visibleImages.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: cn("grid items-start gap-1.5", visibleImages.length === 1 && "grid-cols-1", visibleImages.length === 2 && "grid-cols-2", visibleImages.length >= 3 && "grid-cols-2"),
				children: visibleImages.map((attachment, index) => {
					const isThreeImageMainTile = visibleImages.length === 3 && index === 0;
					const isOverflowTile = hiddenImageCount > 0 && index === visibleImages.length - 1;
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => openFullscreenById(attachment.id),
						className: cn("group relative w-fit max-w-full overflow-hidden rounded-md border border-border bg-muted/20", isThreeImageMainTile && "row-span-2"),
						children: [/* @__PURE__ */ jsx("img", {
							src: attachment.previewUrl,
							alt: attachment.name,
							onLoad: (event) => {
								setLoadedImageKeys((previous) => {
									const next = new Set(previous);
									next.add(`preview:${attachment.id}`);
									return next;
								});
								const image = event.currentTarget;
								setImageDimensions((previous) => {
									const existing = previous[attachment.id];
									if (existing && existing.width === image.naturalWidth && existing.height === image.naturalHeight) return previous;
									return {
										...previous,
										[attachment.id]: {
											width: image.naturalWidth,
											height: image.naturalHeight
										}
									};
								});
							},
							className: cn(MESSAGE_IMAGE_PREVIEW_MAX_H_CLASS, "h-auto w-auto max-w-full transition-[opacity,transform] duration-300 group-hover:scale-[1.01]", loadedImageKeys.has(`preview:${attachment.id}`) ? "opacity-100" : "opacity-35"),
							loading: "lazy"
						}), /* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30",
							children: isOverflowTile ? /* @__PURE__ */ jsxs("div", {
								className: "rounded-md bg-black/70 px-2.5 py-1.5 text-[12px] font-medium text-white",
								children: ["+", hiddenImageCount]
							}) : /* @__PURE__ */ jsx("div", {
								className: "rounded-md bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100",
								children: /* @__PURE__ */ jsx(Maximize2, { className: "h-3.5 w-3.5" })
							})
						})]
					}, attachment.id);
				})
			}) : null, fileAttachments.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: cn("space-y-1.5", fileAttachments.length > 4 && "max-h-44 overflow-y-auto pe-1"),
				children: fileAttachments.map((attachment) => {
					const fileSize = formatAttachmentSize(attachment.size);
					const displayName = formatAttachmentDisplayName(attachment.name);
					return /* @__PURE__ */ jsx("div", {
						className: "min-w-0 max-w-full rounded-lg border border-border bg-card px-2.5 py-2",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ jsx(Paperclip, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1 overflow-hidden",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate text-[12px] font-medium text-foreground",
										title: attachment.name,
										children: displayName
									}), /* @__PURE__ */ jsxs("p", {
										className: "truncate text-[10px] text-muted-foreground",
										children: [attachment.mimeType || t("File"), fileSize ? ` - ${fileSize}` : ""]
									})]
								}),
								/* @__PURE__ */ jsx(Button, {
									asChild: true,
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 w-7 shrink-0 p-0 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ jsx("a", {
										href: attachment.openUrl,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": `${t("Open")} ${attachment.name}`,
										children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									asChild: true,
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 w-7 shrink-0 p-0 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ jsx("a", {
										href: attachment.downloadUrl,
										download: attachment.name,
										"aria-label": `${t("Download")} ${attachment.name}`,
										children: /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" })
									})
								})
							]
						})
					}, attachment.id);
				})
			}) : null]
		})
	}), activeFullscreenAttachment?.fullscreenPreviewUrl ? /* @__PURE__ */ jsx(WizardLayout, {
		title: activeFullscreenAttachment.name,
		fullscreen: true,
		useSidebar: false,
		constrainWidth: false,
		constrainFooterWidth: false,
		contentPadding: false,
		onClose: () => setFullscreenAttachment(null),
		contentClassName: "-mx-6",
		headerActions: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					onClick: goToPreviousImage,
					disabled: !canGoToPreviousImage,
					"aria-label": t("Previous image"),
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "min-w-[56px] text-center text-[11px] text-muted-foreground",
					children: [
						(fullscreenAttachment ?? 0) + 1,
						"/",
						imageAttachments.length
					]
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					onClick: goToNextImage,
					disabled: !canGoToNextImage,
					"aria-label": t("Next image"),
					children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					children: /* @__PURE__ */ jsx("a", {
						href: activeFullscreenAttachment.openUrl,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": `${t("Open")} ${activeFullscreenAttachment.name}`,
						children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					children: /* @__PURE__ */ jsx("a", {
						href: activeFullscreenAttachment.downloadUrl,
						download: activeFullscreenAttachment.name,
						"aria-label": `${t("Download")} ${activeFullscreenAttachment.name}`,
						children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "mx-1 h-4 w-px bg-border" }),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					onClick: zoomOut,
					disabled: !canZoomOut,
					"aria-label": t("Zoom out"),
					children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "min-w-[44px] text-center text-[11px] text-muted-foreground",
					children: [Math.round(fullscreenZoom * 100), "%"]
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					onClick: zoomIn,
					disabled: !canZoomIn,
					"aria-label": t("Zoom in"),
					children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-8 w-8 p-0",
					onClick: resetZoom,
					disabled: fullscreenZoom === 1,
					"aria-label": t("Fit image to screen"),
					children: /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
				})
			]
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-[calc(100dvh-140px)] w-full flex-col bg-background p-4 sm:p-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-2 sm:p-4",
				children: [!isFullscreenImageLoaded ? /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-[1px]",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), t("Loading image...")]
					})
				}) : null, /* @__PURE__ */ jsx("img", {
					src: activeFullscreenAttachment.fullscreenPreviewUrl,
					alt: activeFullscreenAttachment.name,
					onLoad: () => setLoadedImageKeys((previous) => {
						const next = new Set(previous);
						next.add(`fullscreen:${activeFullscreenAttachment.id}`);
						return next;
					}),
					className: cn("h-auto max-h-[calc(100dvh-320px)] w-full max-w-[1400px] rounded-lg object-contain transition-opacity duration-300 select-none", fullscreenZoom > 1 ? isPanningRef.current ? "cursor-grabbing" : "cursor-grab" : "", isFullscreenImageLoaded ? "opacity-100" : "opacity-20"),
					onWheel: handleFullscreenWheel,
					onMouseDown: handleFullscreenMouseDown,
					onMouseMove: handleFullscreenMouseMove,
					onMouseUp: stopFullscreenPanning,
					onMouseLeave: stopFullscreenPanning,
					style: activeFullscreenDimensions ? {
						aspectRatio: `${activeFullscreenDimensions.width} / ${activeFullscreenDimensions.height}`,
						transform: `translate(${fullscreenPan.x}px, ${fullscreenPan.y}px) scale(${fullscreenZoom})`,
						transformOrigin: "center center"
					} : {
						transform: `translate(${fullscreenPan.x}px, ${fullscreenPan.y}px) scale(${fullscreenZoom})`,
						transformOrigin: "center center"
					}
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-3 flex w-full max-w-2xl items-center gap-2",
				children: [
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 shrink-0 p-0",
						onClick: goToPreviousImage,
						disabled: !canGoToPreviousImage,
						"aria-label": t("Previous image"),
						children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("div", {
						ref: thumbnailStripRef,
						className: "flex-1 overflow-x-auto",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex min-w-max gap-1.5",
							children: imageAttachments.map((imageAttachment, index) => /* @__PURE__ */ jsx("button", {
								ref: (element) => {
									thumbnailButtonRefs.current[imageAttachment.id] = element;
								},
								type: "button",
								onClick: () => setFullscreenAttachment(index),
								className: cn("relative aspect-square w-28 shrink-0 cursor-pointer overflow-hidden rounded-md border bg-muted/20 transition-colors sm:w-32", index === fullscreenAttachment ? "border-primary ring-1 ring-primary/50 dark:border-sidebar-accent dark:ring-sidebar-accent/70" : "border-border hover:border-primary/50 dark:hover:border-sidebar-accent"),
								children: /* @__PURE__ */ jsx("img", {
									src: imageAttachment.previewUrl,
									alt: imageAttachment.name,
									className: "h-full w-full object-cover",
									loading: "lazy"
								})
							}, imageAttachment.id))
						})
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 w-8 shrink-0 p-0",
						onClick: goToNextImage,
						disabled: !canGoToNextImage,
						"aria-label": t("Next image"),
						children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
					})
				]
			})]
		})
	}) : null] });
}
var AssistantMessageRow = memo(function AssistantMessageRow$1({ message, messageAttachments, deferCodeBlocks, placeholderCandidates, copied, showDebug = false, openResourceInNewTab = false, contextProjectId, organizationId, clarifyInteractive = false, clarifyFollowingUserText = null, onSubmitClarifyAnswers, onCopyMessage, onSpeakMessage, speaking = false, onScoreMessage, scoring = false, onStartEditResend, onRetry, canRetry = false }) {
	const t = useT();
	const messageId = message.$id;
	const role = message.role;
	const messageText = message.contentText || "";
	const clarifyAnswers = useMemo(() => messageText ? parseClarifyAnswers(messageText) : null, [messageText]);
	const displayMessageText = clarifyAnswers ? formatClarifyAnswersSummary(clarifyAnswers) : messageText;
	const messageScore = message.score === 1 || message.score === -1 ? message.score : 0;
	const isUserMessage = role.toLowerCase() === "user";
	const isRtlMessage = useMemo(() => isRtlMessageText(displayMessageText), [displayMessageText]);
	const alignRight = isUserMessage ? !isRtlMessage : isRtlMessage;
	const attachmentsAlignment = alignRight ? "right" : "left";
	const placeholderTokens = useMemo(() => extractPlaceholderTokens(messageText), [messageText]);
	const [selectedPlaceholderValues, setSelectedPlaceholderValues] = useState({});
	const autoResolvedValues = useMemo(() => {
		const values = {};
		for (const token of placeholderTokens) {
			const options = placeholderCandidates[token] ?? [];
			if (options.length === 1) values[token] = options[0];
		}
		return values;
	}, [placeholderTokens, placeholderCandidates]);
	const unresolvedSelectableTokens = useMemo(() => placeholderTokens.filter((token) => {
		if (autoResolvedValues[token]) return false;
		return (placeholderCandidates[token]?.length ?? 0) > 0;
	}), [
		placeholderCandidates,
		placeholderTokens,
		autoResolvedValues
	]);
	const resolvedAssistantText = useMemo(() => {
		return applyPlaceholderValues(messageText, {
			...autoResolvedValues,
			...selectedPlaceholderValues
		});
	}, [
		autoResolvedValues,
		messageText,
		selectedPlaceholderValues
	]);
	useEffect(() => {
		setSelectedPlaceholderValues({});
	}, [messageText]);
	return /* @__PURE__ */ jsxs("div", {
		className: "group/message cursor-default space-y-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("flex", alignRight ? "justify-end" : "justify-start"),
			children: isUserMessage ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex max-w-[88%] flex-col", alignRight ? "items-end" : "items-start"),
				children: [
					displayMessageText ? /* @__PURE__ */ jsx("div", {
						dir: isRtlMessage ? "rtl" : "ltr",
						className: cn("inline-block max-w-full cursor-default rounded-lg bg-primary px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap text-primary-foreground dark:bg-sidebar-accent dark:text-sidebar-foreground"),
						children: displayMessageText
					}) : null,
					/* @__PURE__ */ jsx(MessageAttachments, {
						attachmentIds: messageAttachments,
						alignment: attachmentsAlignment
					}),
					showDebug ? /* @__PURE__ */ jsx("div", {
						className: "mt-1 w-full",
						children: /* @__PURE__ */ jsx(AgentMessageDebugCard, {
							message,
							align: alignRight ? "end" : "start"
						})
					}) : null,
					/* @__PURE__ */ jsx("div", {
						dir: "ltr",
						className: cn("mt-1 flex h-6 w-full items-center gap-1.5 opacity-0 transition-opacity duration-150 pointer-events-none group-hover/message:opacity-100 group-hover/message:pointer-events-auto group-focus-within/message:opacity-100 group-focus-within/message:pointer-events-auto", alignRight ? "justify-end" : "justify-start"),
						children: alignRight ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
							onClick: () => onCopyMessage(messageId, messageText),
							"aria-label": t("Copy message"),
							...analyticsAttrs("agent-copy-message"),
							children: copied ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3.5" })
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
							onClick: () => onStartEditResend(messageId, messageText, messageAttachments ?? []),
							"aria-label": t("Edit and resend message"),
							...analyticsAttrs("agent-edit-resend"),
							children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
							onClick: () => onStartEditResend(messageId, messageText, messageAttachments ?? []),
							"aria-label": t("Edit and resend message"),
							...analyticsAttrs("agent-edit-resend"),
							children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
							onClick: () => onCopyMessage(messageId, messageText),
							"aria-label": t("Copy message"),
							...analyticsAttrs("agent-copy-message"),
							children: copied ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3.5" })
						})] })
					})
				]
			}) : /* @__PURE__ */ jsx("div", {
				dir: isRtlMessage ? "rtl" : "ltr",
				className: "max-w-[88%] cursor-default px-3 py-2 text-[13px] leading-relaxed text-foreground",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsx(AgentTurnActivity, { message }),
						/* @__PURE__ */ jsx(AgentConsoleSurfaces, {
							message,
							openInNewTab: openResourceInNewTab,
							projectId: contextProjectId,
							organizationId
						}),
						/* @__PURE__ */ jsx(AgentClarifySurfaces, {
							message,
							interactive: clarifyInteractive,
							followingUserText: clarifyFollowingUserText,
							onSubmitAnswers: onSubmitClarifyAnswers
						}),
						unresolvedSelectableTokens.length > 0 && /* @__PURE__ */ jsxs("div", {
							className: "rounded-md border border-border bg-muted/20 p-2.5",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-2 text-[12px] text-muted-foreground",
								children: t("Select values for placeholders")
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-2",
								children: unresolvedSelectableTokens.map((token) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-[13px]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "w-[122px] shrink-0 text-muted-foreground",
										children: t(PLACEHOLDER_LABELS[token])
									}), /* @__PURE__ */ jsxs(Select, {
										value: selectedPlaceholderValues[token],
										onValueChange: (value) => setSelectedPlaceholderValues((prev) => ({
											...prev,
											[token]: value
										})),
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											className: "h-9 min-w-0 flex-1 text-[13px]",
											children: /* @__PURE__ */ jsx(SelectValue, { placeholder: token })
										}), /* @__PURE__ */ jsx(SelectContent, { children: (placeholderCandidates[token] ?? []).map((option) => /* @__PURE__ */ jsx(SelectItem, {
											value: option,
											className: "text-[13px]",
											children: option
										}, `${token}-${option}`)) })]
									})]
								}, token))
							})]
						}),
						messageText.trim() ? /* @__PURE__ */ jsx(StreamingMarkdown, {
							content: resolvedAssistantText,
							deferCodeBlocks
						}) : null,
						showDebug ? /* @__PURE__ */ jsx(AgentMessageDebugCard, {
							message,
							align: alignRight ? "end" : "start"
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							dir: "ltr",
							className: cn("mt-1 flex h-6 w-full items-center justify-start gap-1.5 transition-opacity duration-150", messageScore !== 0 || speaking ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none group-hover/message:opacity-100 group-hover/message:pointer-events-auto group-focus-within/message:opacity-100 group-focus-within/message:pointer-events-auto"),
							children: [
								messageText.trim() ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
									onClick: () => onCopyMessage(messageId, messageText),
									"aria-label": t("Copy message"),
									...analyticsAttrs("agent-copy-message"),
									children: copied ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3.5" })
								}), onSpeakMessage ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: cn("size-6 rounded-sm p-0 hover:text-foreground", speaking ? "text-foreground" : "text-muted-foreground"),
									onClick: () => onSpeakMessage(messageId, resolvedAssistantText),
									"aria-label": speaking ? t("Stop reading aloud") : t("Read message aloud"),
									"aria-pressed": speaking,
									...analyticsAttrs("agent-speak-message"),
									children: speaking ? /* @__PURE__ */ jsx(AgentSpeakStopIcon, {
										className: "size-3.5",
										"aria-hidden": true
									}) : /* @__PURE__ */ jsx(Volume2, {
										className: "size-3.5",
										"aria-hidden": true
									})
								}) : null] }) : null,
								onScoreMessage ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									disabled: scoring,
									className: cn("size-6 rounded-sm p-0 hover:text-foreground", messageScore === 1 ? "text-foreground" : "text-muted-foreground"),
									onClick: () => onScoreMessage(messageId, messageScore === 1 ? 0 : 1),
									"aria-label": t("Thumbs up"),
									"aria-pressed": messageScore === 1,
									...analyticsAttrs("agent-thumbs-up"),
									children: /* @__PURE__ */ jsx(ThumbsUp, { className: cn("size-3.5", messageScore === 1 && "fill-current") })
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									disabled: scoring,
									className: cn("size-6 rounded-sm p-0 hover:text-foreground", messageScore === -1 ? "text-foreground" : "text-muted-foreground"),
									onClick: () => onScoreMessage(messageId, messageScore === -1 ? 0 : -1),
									"aria-label": t("Thumbs down"),
									"aria-pressed": messageScore === -1,
									...analyticsAttrs("agent-thumbs-down"),
									children: /* @__PURE__ */ jsx(ThumbsDown, { className: cn("size-3.5", messageScore === -1 && "fill-current") })
								})] }) : null,
								canRetry && onRetry ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: "size-6 rounded-sm p-0 text-muted-foreground hover:text-foreground",
									onClick: () => onRetry(messageId),
									"aria-label": t("Retry"),
									...analyticsAttrs("agent-retry"),
									children: /* @__PURE__ */ jsx(RefreshCw, { className: "size-3.5" })
								}) : null
							]
						})
					]
				})
			})
		}), !isUserMessage ? /* @__PURE__ */ jsx(MessageAttachments, {
			attachmentIds: messageAttachments,
			alignment: attachmentsAlignment
		}) : null]
	});
}, (prev, next) => prev.message === next.message && prev.messageAttachments === next.messageAttachments && prev.deferCodeBlocks === next.deferCodeBlocks && prev.canRetry === next.canRetry && prev.showDebug === next.showDebug && prev.placeholderCandidates === next.placeholderCandidates && prev.copied === next.copied && prev.speaking === next.speaking && prev.scoring === next.scoring);
var TYPING_IDLE_ACTIVITY = .15;
var THINKING_ACTIVITY = .55;
var BUBBLE_PHASE_ACTIVITY = {
	idle: TYPING_IDLE_ACTIVITY,
	waiting: .48,
	routing: .62,
	working: .78,
	answering: .42
};
var DEBUG_MODE_ACTIVITY = {
	idle: TYPING_IDLE_ACTIVITY,
	slow: .42,
	fast: .88,
	thinking: THINKING_ACTIVITY,
	max: 1.12
};
function useTypingSpeedActivity(isActive, phase, debugMode = "auto") {
	const activityRef = useRef(TYPING_IDLE_ACTIVITY);
	const lastKeystrokeRef = useRef(null);
	const emaIntervalRef = useRef(320);
	const phaseRef = useRef(phase);
	const isActiveRef = useRef(isActive);
	const debugModeRef = useRef(debugMode);
	useEffect(() => {
		phaseRef.current = phase;
	}, [phase]);
	useEffect(() => {
		isActiveRef.current = isActive;
	}, [isActive]);
	useEffect(() => {
		debugModeRef.current = debugMode;
	}, [debugMode]);
	const registerKeystroke = useCallback(() => {
		const now = performance.now();
		const last = lastKeystrokeRef.current;
		if (last != null) {
			const interval = Math.max(now - last, 25);
			emaIntervalRef.current = emaIntervalRef.current * .3 + interval * .7;
		}
		lastKeystrokeRef.current = now;
	}, []);
	useEffect(() => {
		if (!isActive) {
			activityRef.current = TYPING_IDLE_ACTIVITY;
			lastKeystrokeRef.current = null;
			emaIntervalRef.current = 320;
			return;
		}
		let raf = 0;
		let lastTime = performance.now();
		const tick = (now) => {
			if (!isActiveRef.current) return;
			const dt = Math.min(.05, (now - lastTime) / 1e3);
			lastTime = now;
			const debugOverride = debugModeRef.current;
			if (debugOverride !== "auto") {
				const target$1 = DEBUG_MODE_ACTIVITY[debugOverride];
				const prev$1 = activityRef.current;
				activityRef.current = prev$1 + (target$1 - prev$1) * (1 - Math.exp(-12 * dt));
				raf = requestAnimationFrame(tick);
				return;
			}
			const phaseActivity = BUBBLE_PHASE_ACTIVITY[phaseRef.current];
			const sinceLast = lastKeystrokeRef.current != null ? now - lastKeystrokeRef.current : Number.POSITIVE_INFINITY;
			if (sinceLast > 90) {
				const idleDrift = Math.min(1, (sinceLast - 90) / 500);
				emaIntervalRef.current += (360 - emaIntervalRef.current) * .018 * idleDrift;
			}
			const interval = Math.max(emaIntervalRef.current, 45);
			let typingTarget = TYPING_IDLE_ACTIVITY + Math.min(1, Math.max(0, (260 - interval) / 165)) * (1.05 - TYPING_IDLE_ACTIVITY);
			if (sinceLast < 160) {
				const activeBoost = 1 + (1 - sinceLast / 160) * .4;
				typingTarget = Math.min(1.12, typingTarget * activeBoost);
			}
			if (sinceLast > 900) typingTarget = TYPING_IDLE_ACTIVITY;
			const target = phaseRef.current === "idle" ? typingTarget : Math.max(phaseActivity, sinceLast < 900 ? typingTarget * .35 : 0);
			const prev = activityRef.current;
			const smoothRate = target >= prev ? 14 : 3.5;
			activityRef.current = prev + (target - prev) * (1 - Math.exp(-smoothRate * dt));
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [isActive]);
	return {
		activityRef,
		registerKeystroke
	};
}
var BUBBLE_DEBUG_MODES = [
	{
		id: "auto",
		label: "Auto"
	},
	{
		id: "idle",
		label: "Idle"
	},
	{
		id: "slow",
		label: "Slow type"
	},
	{
		id: "fast",
		label: "Fast type"
	},
	{
		id: "thinking",
		label: "Thinking"
	},
	{
		id: "max",
		label: "Max"
	}
];
var SPHERE_DEBUG_SLIDER_CLASS = "py-1 [&_[data-slot=slider-range]]:bg-purple-600 [&_[data-slot=slider-thumb]]:border-purple-600 dark:[&_[data-slot=slider-range]]:bg-purple-500 dark:[&_[data-slot=slider-thumb]]:border-purple-500";
var SPHERE_COLOR_DEBUG_MODES = [
	{
		id: "brand",
		label: "Brand"
	},
	{
		id: "blue",
		label: "Blue"
	},
	{
		id: "green",
		label: "Green"
	},
	{
		id: "purple",
		label: "Purple"
	},
	{
		id: "amber",
		label: "Amber"
	},
	{
		id: "cyan",
		label: "Cyan"
	}
];
var SPHERE_SHAPE_DEBUG_MODES = [
	{
		id: "sphere",
		label: "Sphere"
	},
	{
		id: "torus",
		label: "Torus"
	},
	{
		id: "disc",
		label: "Disc"
	},
	{
		id: "ring",
		label: "Ring"
	},
	{
		id: "cube",
		label: "Cube"
	},
	{
		id: "helix",
		label: "Helix"
	}
];
var SPHERE_BASE_SIZES = { empty: 220 };
function debugControlButtonClass(isActive) {
	return cn("h-7 px-2 text-[11px]", isActive ? "border-purple-600 bg-purple-600 text-white hover:bg-purple-600/90 dark:border-purple-500 dark:bg-purple-500 dark:hover:bg-purple-500/90" : "border-purple-500/40 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 dark:border-purple-400/40 dark:text-purple-400 dark:hover:bg-purple-500/15 dark:hover:text-purple-300");
}
function AssistantBubbleDebugControls({ expanded, onExpandedChange, activityMode, onActivityModeChange, sizeScale, sizeScaleOverride, onSizeScaleChange, onSizeScaleDefault, colorMode, onColorModeChange, shapeMode, onShapeModeChange, particleCountOverride, autoParticleCount, onParticleCountChange, onParticleCountAuto }) {
	const particleSliderValue = particleCountOverride ?? autoParticleCount;
	const sizePercent = Math.round(sizeScale * 100);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-purple-500/25 bg-purple-500/5",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => onExpandedChange(!expanded),
			"aria-expanded": expanded,
			className: "flex w-full items-center gap-2 px-2.5 py-2 text-start transition-colors hover:bg-purple-500/10",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
					children: "Bubble debug"
				}),
				!expanded ? /* @__PURE__ */ jsxs("span", {
					className: "truncate text-[10px] tabular-nums text-purple-600/70 dark:text-purple-400/70",
					children: [
						activityMode,
						" · ",
						sizePercent,
						"% · ",
						shapeMode
					]
				}) : null,
				expanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-3.5 w-3.5 shrink-0 text-purple-600/80 dark:text-purple-400/80" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 text-purple-600/80 dark:text-purple-400/80" })
			]
		}), expanded ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 border-t border-purple-500/20 p-2.5 pt-2",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
					children: "Activity"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap justify-center gap-1.5",
					children: BUBBLE_DEBUG_MODES.map(({ id, label }) => /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugControlButtonClass(activityMode === id),
						onClick: () => onActivityModeChange(id),
						children: label
					}, id))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-1.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
						children: "Size"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-[11px] tabular-nums text-purple-600 dark:text-purple-400",
							children: [
								sizePercent,
								"%",
								sizeScaleOverride == null ? " (default)" : ""
							]
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							className: debugControlButtonClass(sizeScaleOverride == null),
							onClick: onSizeScaleDefault,
							children: "Default"
						})]
					})]
				}), /* @__PURE__ */ jsx(Slider, {
					min: SPHERE_SIZE_SCALE_MIN,
					max: 2,
					step: SPHERE_SIZE_SCALE_STEP,
					value: [sizeScale],
					onValueChange: (values) => {
						const next = values[0];
						if (next != null) onSizeScaleChange(next);
					},
					className: SPHERE_DEBUG_SLIDER_CLASS
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
					children: "Color"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap justify-center gap-1.5",
					children: SPHERE_COLOR_DEBUG_MODES.map(({ id, label }) => /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugControlButtonClass(colorMode === id),
						onClick: () => onColorModeChange(id),
						children: label
					}, id))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "mb-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
					children: "Shape"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap justify-center gap-1.5",
					children: SPHERE_SHAPE_DEBUG_MODES.map(({ id, label }) => /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: "outline",
						className: debugControlButtonClass(shapeMode === id),
						onClick: () => onShapeModeChange(id),
						children: label
					}, id))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-1.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-purple-600/80 dark:text-purple-400/80",
						children: "Particles"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-[11px] tabular-nums text-purple-600 dark:text-purple-400",
							children: [particleSliderValue.toLocaleString(), particleCountOverride == null ? " (auto)" : ""]
						}), /* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							className: debugControlButtonClass(particleCountOverride == null),
							onClick: onParticleCountAuto,
							children: "Auto"
						})]
					})]
				}), /* @__PURE__ */ jsx(Slider, {
					min: 50,
					max: SPHERE_PARTICLE_COUNT_MAX,
					step: 25,
					value: [particleSliderValue],
					onValueChange: (values) => {
						const next = values[0];
						if (next != null) onParticleCountChange(next);
					},
					className: SPHERE_DEBUG_SLIDER_CLASS
				})] })
			]
		}) : null]
	});
}
function AgentPanelContent({ variant = "pane", section: sectionProp, routeAgentId, routeAutomationId, automationMode: automationModeProp, settingsSection: settingsSectionProp } = {}) {
	const t = useT();
	const { isMac } = usePlatform();
	const navigate = useNavigate();
	const { closeChat, activeConversationId, setActiveConversationId, pendingCreateAgentTick, consumePendingCreateAgent } = useAgentChat();
	const params = useParams({ strict: false });
	const location = useLocation();
	const isPageVariant = variant === "page";
	const [paneSection, setPaneSection] = useState("agents");
	const [paneSettingsSection, setPaneSettingsSection] = useState("models");
	const [automationEditor, setAutomationEditor] = useState({ mode: "closed" });
	const [modelEditor, setModelEditor] = useState({ mode: "closed" });
	const [pendingPaneAutomationId, setPendingPaneAutomationId] = useState(null);
	const [paneDetailAutomationId, setPaneDetailAutomationId] = useState(null);
	const [runAutomationContextId, setRunAutomationContextId] = useState(null);
	const section = sectionProp ?? paneSection;
	const settingsSection = settingsSectionProp ?? paneSettingsSection;
	const isAgentsSection = section === "agents";
	const isAutomationsSection = section === "automations";
	const isSettingsSection = section === "settings";
	const isPageAgentsSection = isPageVariant && isAgentsSection;
	const isModelEditorOpen = modelEditor.mode !== "closed";
	const detailAutomationId = isPageVariant ? automationModeProp === "detail" ? routeAutomationId ?? null : null : paneDetailAutomationId;
	const pageOrgId = nonEmptyId(params.orgId) ?? parseOrganizationIdFromPath(location.pathname) ?? null;
	const navigateToAgent = useCallback((agentId, options) => {
		if (!isPageVariant) {
			setPaneSection(options?.keepAutomationsNav ? "automations" : "agents");
			setAutomationEditor({ mode: "closed" });
			setPendingPaneAutomationId(null);
			return;
		}
		if (!pageOrgId) return;
		if (agentId) {
			navigate({
				to: "/organizations/$orgId/agent/$agentId",
				params: {
					orgId: pageOrgId,
					agentId
				},
				replace: options?.replace
			});
			return;
		}
		navigate({
			to: "/organizations/$orgId/agent",
			params: { orgId: pageOrgId },
			replace: options?.replace
		});
	}, [
		isPageVariant,
		navigate,
		pageOrgId
	]);
	const navigateToAutomations = useCallback((next, options) => {
		const target = next ?? { mode: "list" };
		setActiveConversationId(null);
		setRunAutomationContextId(null);
		if (!isPageVariant) {
			setPaneSection("automations");
			if (target.mode === "create") {
				setPendingPaneAutomationId(null);
				setAutomationEditor({ mode: "create" });
			} else if (target.mode === "detail") {
				setPaneDetailAutomationId(target.automationId);
				setAutomationEditor({ mode: "closed" });
			} else {
				setPendingPaneAutomationId(null);
				setPaneDetailAutomationId(null);
				setAutomationEditor({ mode: "closed" });
			}
			return;
		}
		if (!pageOrgId) return;
		if (target.mode === "create") {
			navigate({
				to: "/organizations/$orgId/agent/automations/create",
				params: { orgId: pageOrgId },
				replace: options?.replace
			});
			return;
		}
		if (target.mode === "detail") {
			navigate({
				to: "/organizations/$orgId/agent/automations/$automationId",
				params: {
					orgId: pageOrgId,
					automationId: target.automationId
				},
				replace: options?.replace
			});
			return;
		}
		navigate({
			to: "/organizations/$orgId/agent/automations",
			params: { orgId: pageOrgId },
			replace: options?.replace
		});
	}, [
		isPageVariant,
		navigate,
		pageOrgId,
		setActiveConversationId
	]);
	const navigateToSettings = useCallback((next = "models", options) => {
		if (!isPageVariant) {
			setPaneSection("settings");
			setPaneSettingsSection(next);
			setAutomationEditor({ mode: "closed" });
			setModelEditor({ mode: "closed" });
			setPendingPaneAutomationId(null);
			return;
		}
		if (!pageOrgId) return;
		navigate({
			to: next === "mcp" ? "/organizations/$orgId/agent/settings/mcp" : next === "memory" ? "/organizations/$orgId/agent/settings/memory" : next === "usage" ? "/organizations/$orgId/agent/settings/usage" : "/organizations/$orgId/agent/settings/models",
			params: { orgId: pageOrgId },
			replace: options?.replace
		});
	}, [
		isPageVariant,
		navigate,
		pageOrgId
	]);
	const isAgentBlocked = useMemo(() => isAgentBlockedPath(location.pathname), [location.pathname]);
	const { isDebugModeOpen } = useDebugMode();
	const [bubbleDebugExpanded, setBubbleDebugExpanded] = useState(false);
	const [bubbleDebugMode, setBubbleDebugMode] = useState("auto");
	const [sphereSizeScaleOverride, setSphereSizeScaleOverride] = useState(null);
	const [sphereColorMode, setSphereColorMode] = useState("brand");
	const [sphereShapeMode, setSphereShapeMode] = useState("sphere");
	const [sphereParticleCountOverride, setSphereParticleCountOverride] = useState(null);
	const effectiveSphereSizeScale = sphereSizeScaleOverride ?? 1;
	const sphereAutoParticleCount = useMemo(() => defaultParticleCountForSize(scaleSphereSize(SPHERE_BASE_SIZES.empty, effectiveSphereSizeScale)), [effectiveSphereSizeScale]);
	const getSphereRenderSize = useCallback((baseSize) => isDebugModeOpen ? scaleSphereSize(baseSize, effectiveSphereSizeScale) : baseSize, [effectiveSphereSizeScale, isDebugModeOpen]);
	const effectiveSphereColorMode = isDebugModeOpen ? sphereColorMode : "brand";
	const effectiveSphereShapeMode = isDebugModeOpen ? sphereShapeMode : "sphere";
	const effectiveSphereParticleCount = isDebugModeOpen ? sphereParticleCountOverride ?? void 0 : void 0;
	const [input, setInput] = useState("");
	const skipDraftPersistRef = useRef(false);
	const [messageQueue, setMessageQueue] = useState([]);
	const [messageQueueExpanded, setMessageQueueExpanded] = useState(true);
	const [restoredQueueAttachmentIds, setRestoredQueueAttachmentIds] = useState([]);
	const isDrainingQueueRef = useRef(false);
	const queuePausedUntilIdleRef = useRef(false);
	const [messagesLimit, setMessagesLimit] = useState(25);
	const [isLoadingOlderMessages, setIsLoadingOlderMessages] = useState(false);
	const [copiedMessageId, setCopiedMessageId] = useState(null);
	const [speakingMessageId, setSpeakingMessageId] = useState(null);
	const [isCopyingConversation, setIsCopyingConversation] = useState(false);
	const [copiedConversation, setCopiedConversation] = useState(false);
	const copiedConversationTimeoutRef = useRef(null);
	const [editingMessageId, setEditingMessageId] = useState(null);
	const [editingMessageAttachments, setEditingMessageAttachments] = useState([]);
	const [pendingAttachments, setPendingAttachments] = useState([]);
	const [composerImageOrientations, setComposerImageOrientations] = useState({});
	const composerAvifSupported = useAvifSupport();
	const pendingAttachmentsRef = useRef([]);
	const uploadTasksRef = useRef(/* @__PURE__ */ new Map());
	const [isWaitingForAttachments, setIsWaitingForAttachments] = useState(false);
	const [conversationsPopoverOpen, setConversationsPopoverOpen] = useState(false);
	const [conversationsSidebarOpen, setConversationsSidebarOpen] = useState(true);
	const [conversationsMenuTab, setConversationsMenuTab] = useState("agents");
	const [conversationSearch, setConversationSearch] = useState("");
	const [debouncedConversationSearch, setDebouncedConversationSearch] = useState("");
	const [collapsedConversationGroups, setCollapsedConversationGroups] = useState(() => /* @__PURE__ */ new Set());
	const [archivedSectionOpen, setArchivedSectionOpen] = useState(false);
	const [pinnedSectionOpen, setPinnedSectionOpen] = useState(true);
	const [headerRenameOpen, setHeaderRenameOpen] = useState(false);
	const [selectedModelId, setSelectedModelId] = useState("");
	const [selectedContextProjectId, setSelectedContextProjectId] = useState("");
	const [pinnedDragId, setPinnedDragId] = useState(null);
	const [pinnedDragOverId, setPinnedDragOverId] = useState(null);
	const messagesEndRef = useRef(null);
	const messagesContainerRef = useRef(null);
	const messagesContentRef = useRef(null);
	const inputRef = useRef(null);
	const voiceTriggerHighlightRef = useRef(null);
	const fileInputRef = useRef(null);
	const [isVoiceListening, setIsVoiceListening] = useState(false);
	const [isVoiceStarting, setIsVoiceStarting] = useState(false);
	const [voiceSupported, setVoiceSupported] = useState(false);
	const [voiceSubmitCountdown, setVoiceSubmitCountdown] = useState(null);
	const voiceSessionRef = useRef(null);
	const voiceBaseTextRef = useRef("");
	const voiceActiveRef = useRef(false);
	const voiceAutoSubmitTimeoutRef = useRef(null);
	const voiceCountdownIntervalRef = useRef(null);
	const voiceCountdownActiveRef = useRef(false);
	const voiceArmedTriggerEndingRef = useRef(null);
	const voiceCancelledTriggerEndingRef = useRef(null);
	const sendComposerRef = useRef(() => {});
	const copiedMessageTimeoutRef = useRef(null);
	const previousConversationIdRef = useRef(null);
	const shouldAutoScrollRef = useRef(true);
	const isProgrammaticScrollRef = useRef(false);
	const [isStickToBottom, setIsStickToBottom] = useState(true);
	const [messagesCanScroll, setMessagesCanScroll] = useState(false);
	const olderMessagesAnchorRef = useRef(null);
	useEffect(() => {
		const timer = window.setTimeout(() => {
			setDebouncedConversationSearch(conversationSearch.trim());
		}, 300);
		return () => window.clearTimeout(timer);
	}, [conversationSearch]);
	const clearVoiceAutoSubmit = useCallback((options) => {
		if (voiceAutoSubmitTimeoutRef.current != null) {
			window.clearTimeout(voiceAutoSubmitTimeoutRef.current);
			voiceAutoSubmitTimeoutRef.current = null;
		}
		if (voiceCountdownIntervalRef.current != null) {
			window.clearInterval(voiceCountdownIntervalRef.current);
			voiceCountdownIntervalRef.current = null;
		}
		voiceCountdownActiveRef.current = false;
		if (options?.updateCountdownState !== false) setVoiceSubmitCountdown(null);
	}, []);
	const scheduleVoiceAutoSubmit = useCallback(() => {
		clearVoiceAutoSubmit();
		voiceCountdownActiveRef.current = true;
		const endsAt = Date.now() + VOICE_SUBMIT_COUNTDOWN_MS;
		setVoiceSubmitCountdown(Math.ceil(VOICE_SUBMIT_COUNTDOWN_MS / 1e3));
		voiceCountdownIntervalRef.current = window.setInterval(() => {
			const remainingMs = endsAt - Date.now();
			if (remainingMs <= 0) {
				setVoiceSubmitCountdown(null);
				return;
			}
			setVoiceSubmitCountdown(Math.ceil(remainingMs / 1e3));
		}, 200);
		voiceAutoSubmitTimeoutRef.current = window.setTimeout(() => {
			voiceAutoSubmitTimeoutRef.current = null;
			if (voiceCountdownIntervalRef.current != null) {
				window.clearInterval(voiceCountdownIntervalRef.current);
				voiceCountdownIntervalRef.current = null;
			}
			voiceCountdownActiveRef.current = false;
			setVoiceSubmitCountdown(null);
			sendComposerRef.current();
		}, VOICE_SUBMIT_COUNTDOWN_MS);
	}, [clearVoiceAutoSubmit]);
	const handleCancelVoiceSubmitCountdown = useCallback(() => {
		voiceCancelledTriggerEndingRef.current = normalizeVoiceTranscript(input);
		clearVoiceAutoSubmit();
	}, [clearVoiceAutoSubmit, input]);
	useEffect(() => {
		clearVoiceAutoSubmit();
		voiceArmedTriggerEndingRef.current = null;
		voiceCancelledTriggerEndingRef.current = null;
		voiceActiveRef.current = false;
		voiceSessionRef.current?.stop();
		voiceSessionRef.current = null;
		setIsVoiceListening(false);
		setIsVoiceStarting(false);
		skipDraftPersistRef.current = true;
		setInput(readComposerDraft(activeConversationId));
		requestAnimationFrame(() => {
			const el = inputRef.current;
			if (!el) return;
			el.style.height = "40px";
			el.style.height = `${Math.min(Math.max(el.scrollHeight, 40), 128)}px`;
			skipDraftPersistRef.current = false;
		});
	}, [activeConversationId, clearVoiceAutoSubmit]);
	useEffect(() => {
		return () => {
			clearVoiceAutoSubmit({ updateCountdownState: false });
			voiceActiveRef.current = false;
			voiceSessionRef.current?.stop();
			voiceSessionRef.current = null;
		};
	}, [clearVoiceAutoSubmit]);
	useEffect(() => {
		setVoiceSupported(isVoicePromptSupported());
	}, []);
	const { account, isAuthenticated, isLoading: authLoading } = useAuth();
	const authReady = !authLoading;
	const isGuest = authReady && !isAuthenticated;
	const interactionsDisabled = isGuest || authLoading;
	const { pinnedConversationIds, setPinnedConversationIds, pinConversation, unpinConversation } = useAIChatPinnedConversationIds(account);
	const effectiveExpanded = isPageVariant;
	const queryClient = useQueryClient();
	const { data: conversationsData, isLoading: conversationsLoading } = useAssistantConversations(debouncedConversationSearch || void 0, { enabled: isAuthenticated });
	const conversations = useMemo(() => conversationsData ?? EMPTY_ASSISTANT_CONVERSATIONS, [conversationsData]);
	const hasConversationSearch = debouncedConversationSearch.length > 0;
	const conversationsReady = !authReady || !isAuthenticated || !(conversationsLoading && conversations.length === 0);
	const { data: mcpConnections = [], isFetched: mcpConnectionsFetched } = useAssistantMcpConnections({ enabled: isAuthenticated });
	const { effectiveUrl: appwriteMcpUrl } = useDebugMcpEndpoint();
	useEnsureAppwriteMcpConnected({
		enabled: isAuthenticated && !isGuest,
		connections: mcpConnections,
		connectionsReady: mcpConnectionsFetched
	});
	const hasActiveMcp = useMemo(() => mcpConnections.some((connection) => {
		if (!connection.enabled) return false;
		if (connection.$id === APPWRITE_ASSISTANT_MCP_ID) return isAppwriteMcpConnectionCurrent(connection, appwriteMcpUrl);
		return connection.hasTokens;
	}), [appwriteMcpUrl, mcpConnections]);
	const emptyStateSuggestions = hasActiveMcp ? mcpSuggestedQuestions : suggestedQuestions;
	const createConversationMutation = useCreateAssistantConversation();
	const deleteConversationMutation = useDeleteAssistantConversation();
	const createMessageMutation = useCreateAssistantMessage();
	const updateMessageMutation = useUpdateAssistantMessage();
	const scoreMessageMutation = useScoreAssistantMessage();
	const updateConversationMutation = useUpdateAssistantConversation();
	const uploadAssistantAttachmentsMutation = useUploadAssistantAttachments();
	const { data: assistantModelsData } = useAssistantModels(0, 25, { enabled: isAuthenticated });
	const assistantModels = assistantModelsData?.models ?? EMPTY_ASSISTANT_MODELS;
	const focusedConversationId = isPageAgentsSection && routeAgentId || activeConversationId || null;
	const conversationFromList = useMemo(() => focusedConversationId ? conversations.find((conversation) => conversation.$id === focusedConversationId) : void 0, [conversations, focusedConversationId]);
	const { data: fetchedActiveConversation, isPending: activeConversationPending, isFetched: activeConversationFetched, isError: activeConversationError } = useAssistantConversation(focusedConversationId && !conversationFromList ? focusedConversationId : null, { enabled: isAuthenticated });
	const activeConversation = conversationFromList ?? fetchedActiveConversation ?? void 0;
	const conversationAutomationId = assistantConversationAutomationId(activeConversation);
	const activeAutomationId = conversationAutomationId ?? (activeConversationId ? runAutomationContextId : null);
	useEffect(() => {
		if (!activeConversationId) {
			setRunAutomationContextId(null);
			return;
		}
		if (conversationAutomationId) {
			setRunAutomationContextId(conversationAutomationId);
			return;
		}
		if (activeConversation) setRunAutomationContextId(null);
	}, [
		activeConversation,
		activeConversationId,
		conversationAutomationId
	]);
	const resolveModelTempForSelection = useCallback((modelId) => {
		if (!modelId) return resolveAssistantModelTemp(null);
		return resolveAssistantModelTemp(assistantModels.find((model) => model.$id === modelId)?.model ?? null);
	}, [assistantModels]);
	useEffect(() => {
		setSelectedModelId(activeConversation?.modelId || "");
	}, [activeConversationId, activeConversation?.modelId]);
	const contextProjectId = nonEmptyId(selectedContextProjectId) ?? nonEmptyId(params.projectId) ?? assistantConversationProjectId(activeConversation);
	const { project, isLoading: projectLoading } = useProject(contextProjectId);
	const accountId = account?.$id ?? null;
	const organizationId = nonEmptyId(params.orgId) ?? nonEmptyId(params.teamId) ?? nonEmptyId(project?.teamId) ?? null;
	const waitingForProjectTeam = Boolean(contextProjectId) && !params.orgId && !params.teamId && projectLoading;
	const assistantRealtimeChannels = useMemo(() => buildAssistantRealtimeChannels({
		projectId: contextProjectId,
		organizationId,
		accountId
	}), [
		accountId,
		contextProjectId,
		organizationId
	]);
	const canSubscribeAssistantRealtime = accountId != null && !waitingForProjectTeam;
	useEffect(() => {
		if (!canSubscribeAssistantRealtime) return;
		let cancelled = false;
		let unregister = null;
		const handleRealtimeEvent = (response) => {
			if (!(response.events.some((eventName) => {
				const lower = eventName.toLowerCase();
				return lower.includes("agentconversation") || lower.includes("agentmessage") || lower.includes("agenttool") || lower.includes("agentmcp") || lower.includes("agentmodel") || lower.includes("agentautomation") || lower.includes("agent.conversation") || lower.includes("agent.message") || lower.includes("agent.tool") || lower.includes("agent.mcp") || lower.includes("agent.model") || lower.includes("agent.automation") || lower.includes("assistant");
			}) || response.channels.some((channel) => {
				const lower = channel.toLowerCase();
				return lower.includes("agentconversation") || lower.includes("agentmessage") || lower.includes("agenttool") || lower.includes("agentmcp") || lower.includes("agentmodel") || lower.includes("agentautomation") || lower.includes("assistant");
			}))) return;
			const payload = response.payload && typeof response.payload === "object" ? response.payload : null;
			if (applyAssistantRealtimePayload(queryClient, response.events, payload)) return;
			const isConversationEvent = response.events.map((eventName) => eventName.toLowerCase()).some((eventName) => eventName.includes("agentconversations") || eventName.includes("agent.conversations") || eventName.includes("assistantconversations") || eventName.includes("assistant.conversations"));
			const conversationId = typeof payload?.conversationId === "string" ? payload.conversationId : typeof payload?.$id === "string" && isConversationEvent ? payload.$id : null;
			if (isConversationEvent || !conversationId) queryClient.invalidateQueries({ queryKey: ["agent", "conversations"] });
			if (conversationId) queryClient.invalidateQueries({ queryKey: [
				"agent",
				"messages",
				conversationId
			] });
		};
		registerConsoleRealtimeListener(assistantRealtimeChannels, handleRealtimeEvent).then((unreg) => {
			if (cancelled) {
				unreg();
				return;
			}
			unregister = unreg;
		}).catch(() => {});
		return () => {
			cancelled = true;
			if (unregister) unregister();
		};
	}, [
		assistantRealtimeChannels,
		canSubscribeAssistantRealtime,
		queryClient
	]);
	const placeholderCandidates = useMemo(() => {
		const region = project?.region && project.region.toLowerCase() !== "unknown" ? project.region : void 0;
		const endpoint = getApiEndpoint(region);
		return {
			"{{APPWRITE_ENDPOINT}}": dedupeValues([endpoint]),
			"{{APPWRITE_REGION}}": dedupeValues([region]),
			"{{APPWRITE_PROJECT_ID}}": dedupeValues([
				params.projectId,
				assistantConversationProjectId(activeConversation),
				project?.$id
			]),
			"{{APPWRITE_PROJECT_NAME}}": dedupeValues([project?.name]),
			"{{APPWRITE_TEAM_ID}}": dedupeValues([
				params.teamId,
				project?.teamId,
				params.orgId
			]),
			"{{APPWRITE_ORGANIZATION_ID}}": dedupeValues([
				params.orgId,
				params.teamId,
				project?.teamId
			]),
			"{{APPWRITE_USER_ID}}": dedupeValues([account?.$id])
		};
	}, [
		activeConversation,
		account,
		params.orgId,
		params.projectId,
		params.teamId,
		project?.$id,
		project?.name,
		project?.region,
		project?.teamId
	]);
	const { data: messagesData, isFetching: isFetchingMessages, isLoading: messagesLoading } = useAssistantMessages(activeConversationId, messagesLimit);
	const messages = messagesData?.messages ?? [];
	const totalMessages = messagesData?.total ?? messages.length;
	const hasOlderMessages = totalMessages > messages.length;
	const messagesReady = !activeConversationId || !(messagesLoading && messages.length === 0);
	useConsoleProtocolEffects(messages, {
		conversationId: activeConversationId,
		projectId: contextProjectId,
		organizationId
	});
	useAgentResourceRefreshEffects(messages, {
		conversationId: activeConversationId,
		projectId: contextProjectId
	});
	const routeProjectId = nonEmptyId(params.projectId);
	const routeOrgId = nonEmptyId(params.orgId) ?? nonEmptyId(params.teamId);
	const needsComposerProjectDefault = isAuthenticated && !selectedContextProjectId && !routeProjectId;
	const { data: routeOrgTeam, isLoading: routeOrgTeamLoading } = useConsoleTeam(needsComposerProjectDefault ? routeOrgId : null);
	const routeOrgPinnedIds = useMemo(() => parsePinnedProjectIds(routeOrgTeam?.prefs), [routeOrgTeam?.prefs]);
	const { data: routeOrgProjectScopeData } = useQuery(organizationProjectScopeQueryOptions(routeOrgId));
	const routeOrgProjectScope = routeOrgProjectScopeData ?? null;
	const { data: routeOrgProjectsPage, isFetched: routeOrgProjectsFetched, isFetching: routeOrgProjectsFetching } = useQuery({
		...activeProjectsQueryOptions(routeOrgId, 0, 12, "", routeOrgPinnedIds.length > 0 ? routeOrgPinnedIds : void 0, routeOrgProjectScope),
		enabled: Boolean(needsComposerProjectDefault && routeOrgId && !routeOrgTeamLoading && routeOrgPinnedIds.length === 0)
	});
	useEffect(() => {
		const fromConversation = assistantConversationProjectId(activeConversation);
		if (!activeConversationId) {
			if (routeProjectId) setSelectedContextProjectId(routeProjectId);
			return;
		}
		if (fromConversation) {
			setSelectedContextProjectId(fromConversation);
			return;
		}
		if (routeProjectId) setSelectedContextProjectId(routeProjectId);
	}, [activeConversationId, routeProjectId]);
	useEffect(() => {
		if (selectedContextProjectId) return;
		if (routeProjectId) {
			setSelectedContextProjectId(routeProjectId);
			return;
		}
		const fromConversation = assistantConversationProjectId(activeConversation);
		if (fromConversation) {
			setSelectedContextProjectId(fromConversation);
			return;
		}
		const fromLastUserMessage = [...messages].reverse().find((message) => message.role === "user" && nonEmptyId(message.contextProjectId))?.contextProjectId;
		if (fromLastUserMessage) setSelectedContextProjectId(fromLastUserMessage);
	}, [
		activeConversation,
		messages,
		routeProjectId,
		selectedContextProjectId
	]);
	useEffect(() => {
		if (!needsComposerProjectDefault) return;
		if (assistantConversationProjectId(activeConversation)) return;
		if (activeConversationId && !activeConversation) return;
		if (routeOrgId) {
			if (routeOrgTeamLoading) return;
			const fromPinned = nonEmptyId(routeOrgPinnedIds[0]);
			if (fromPinned) {
				setSelectedContextProjectId(fromPinned);
				return;
			}
			const fromOrgList = nonEmptyId(routeOrgProjectsPage?.projects?.[0]?.$id);
			if (fromOrgList) {
				setSelectedContextProjectId(fromOrgList);
				return;
			}
			if (!routeOrgProjectsFetched || routeOrgProjectsFetching) return;
			return;
		}
		let cancelled = false;
		(async () => {
			const firstProjectId = await fetchFirstAccessibleProjectId();
			if (cancelled || !firstProjectId) return;
			setSelectedContextProjectId((current) => current || firstProjectId);
		})();
		return () => {
			cancelled = true;
		};
	}, [
		activeConversation,
		activeConversationId,
		needsComposerProjectDefault,
		routeOrgId,
		routeOrgPinnedIds,
		routeOrgProjectsFetched,
		routeOrgProjectsFetching,
		routeOrgProjectsPage?.projects,
		routeOrgTeamLoading
	]);
	const assistantListReady = authReady && conversationsReady;
	const assistantThreadReady = assistantListReady && messagesReady;
	const assistantEmptyReady = assistantThreadReady;
	const { data: editingAttachmentFilesData } = useAssistantAttachmentFiles(editingMessageAttachments);
	const latestMessageId = messages[messages.length - 1]?.$id;
	const latestMessage = messages[messages.length - 1];
	const isConversationRunning = useMemo(() => isAssistantConversationInFlight(activeConversation), [activeConversation]);
	useAgentConversationFavicon({
		conversation: activeConversation,
		isPending: createMessageMutation.isPending || updateMessageMutation.isPending,
		projectId: contextProjectId,
		projectName: project?.name,
		organizationId,
		pathname: location.pathname
	});
	const latestAssistantMessage = useMemo(() => [...messages].reverse().find((message) => message.role.toLowerCase() !== "user"), [messages]);
	const activeAssistantMessageId = activeConversation?.activeMessageId || (isAssistantMessageInFlight(latestAssistantMessage?.status) ? latestAssistantMessage?.$id : void 0);
	const isLatestAssistantMessageRunning = useMemo(() => isAssistantMessageInFlight(latestAssistantMessage?.status), [latestAssistantMessage?.status]);
	const waitingForAssistantReply = latestMessage?.role?.toLowerCase() === "user" && isConversationRunning;
	const liveTurnView = useMemo(() => {
		if (!latestAssistantMessage) return null;
		return buildTurnView(latestAssistantMessage);
	}, [latestAssistantMessage]);
	const liveTurnStatusLabel = liveTurnView?.statusLabel;
	const isSending = createMessageMutation.isPending || updateMessageMutation.isPending;
	const isThinking = isSending || isLatestAssistantMessageRunning || waitingForAssistantReply;
	const bubblePhase = useMemo(() => getAssistantBubblePhase({
		isConversationRunning: isConversationRunning || isSending,
		isSending,
		latestUserWaiting: waitingForAssistantReply,
		message: latestAssistantMessage,
		turn: liveTurnView
	}), [
		isConversationRunning,
		isSending,
		latestAssistantMessage,
		liveTurnView,
		waitingForAssistantReply
	]);
	const canSendWhileIdle = !isConversationRunning && !createMessageMutation.isPending && !updateMessageMutation.isPending && !updateConversationMutation.isPending;
	const { activityRef: bubbleActivityRef, registerKeystroke: registerTypingKeystroke } = useTypingSpeedActivity(!isAgentBlocked, bubblePhase, bubbleDebugMode);
	const hasUploadingAttachments = pendingAttachments.some((attachment) => attachment.status === "uploading");
	const hasReadyComposerAttachments = pendingAttachments.some((attachment) => attachment.status === "ready") || editingMessageAttachments.length > 0 || restoredQueueAttachmentIds.length > 0;
	const canSendComposerContent = input.trim().length > 0 || hasReadyComposerAttachments || hasUploadingAttachments;
	const orderedPendingAttachments = useMemo(() => [...pendingAttachments].reverse(), [pendingAttachments]);
	const isInputRtl = useMemo(() => isRtlMessageText(input), [input]);
	const voiceSubmitTriggerRange = useMemo(() => {
		if (voiceSubmitCountdown == null) return null;
		return findTrailingVoiceSubmitTriggerRange(input, getActiveLanguage());
	}, [input, voiceSubmitCountdown]);
	const focusInput = useCallback((placeCursorAtEnd = false) => {
		if (typeof window === "undefined") return;
		window.setTimeout(() => {
			const inputElement = inputRef.current;
			if (!inputElement) return;
			inputElement.focus();
			if (placeCursorAtEnd) {
				const endPosition = inputElement.value.length;
				inputElement.setSelectionRange(endPosition, endPosition);
			}
		}, 0);
	}, []);
	const syncComposerTextareaHeight = useCallback(() => {
		const el = inputRef.current;
		if (!el) return;
		el.style.height = "40px";
		el.style.height = `${Math.min(Math.max(el.scrollHeight, 40), 128)}px`;
	}, []);
	const applyVoiceTranscript = useCallback((transcript, persistDraft) => {
		if (!voiceActiveRef.current) return;
		const trimmedTranscript = transcript.trim();
		const base = voiceBaseTextRef.current.trimEnd();
		const nextValue = [base, trimmedTranscript].filter(Boolean).join(base && trimmedTranscript ? " " : "");
		setInput(nextValue);
		if (persistDraft && !editingMessageId && !skipDraftPersistRef.current) writeComposerDraft(activeConversationId, nextValue);
		requestAnimationFrame(() => {
			syncComposerTextareaHeight();
		});
		if (voiceTranscriptEndsWithSubmitTrigger(nextValue, getActiveLanguage())) {
			const ending = normalizeVoiceTranscript(nextValue);
			if (voiceCancelledTriggerEndingRef.current === ending) return;
			if (voiceCountdownActiveRef.current && voiceArmedTriggerEndingRef.current === ending) return;
			voiceArmedTriggerEndingRef.current = ending;
			voiceCancelledTriggerEndingRef.current = null;
			scheduleVoiceAutoSubmit();
		} else {
			voiceArmedTriggerEndingRef.current = null;
			voiceCancelledTriggerEndingRef.current = null;
			clearVoiceAutoSubmit();
		}
	}, [
		activeConversationId,
		clearVoiceAutoSubmit,
		editingMessageId,
		scheduleVoiceAutoSubmit,
		syncComposerTextareaHeight
	]);
	const stopVoiceListening = useCallback(() => {
		clearVoiceAutoSubmit();
		voiceArmedTriggerEndingRef.current = null;
		voiceCancelledTriggerEndingRef.current = null;
		voiceActiveRef.current = false;
		voiceSessionRef.current?.stop();
		voiceSessionRef.current = null;
		setIsVoiceListening(false);
		setIsVoiceStarting(false);
	}, [clearVoiceAutoSubmit]);
	const getVoiceLevels = useCallback(() => {
		return voiceSessionRef.current?.getLevels() ?? Array.from({ length: 32 }, () => 0);
	}, []);
	const handleToggleVoiceInput = useCallback(async () => {
		if (interactionsDisabled) return;
		if (isVoiceListening || isVoiceStarting) {
			stopVoiceListening();
			return;
		}
		if (!voiceSupported) {
			toast.error(t("Voice input is not supported in this browser"));
			return;
		}
		setIsVoiceStarting(true);
		voiceBaseTextRef.current = input;
		voiceArmedTriggerEndingRef.current = null;
		voiceCancelledTriggerEndingRef.current = null;
		clearVoiceAutoSubmit();
		try {
			voiceSessionRef.current = await startVoicePrompt({
				lang: getActiveLanguage(),
				onInterim: (transcript) => {
					applyVoiceTranscript(transcript, false);
				},
				onFinal: (transcript) => {
					applyVoiceTranscript(transcript, true);
				},
				onError: (error) => {
					clearVoiceAutoSubmit();
					voiceArmedTriggerEndingRef.current = null;
					voiceCancelledTriggerEndingRef.current = null;
					voiceActiveRef.current = false;
					toast.error(t(error.message === "Microphone permission denied" ? "Microphone permission denied" : "Could not start voice input"));
					voiceSessionRef.current = null;
					setIsVoiceListening(false);
					setIsVoiceStarting(false);
				},
				onEnd: () => {
					voiceActiveRef.current = false;
					voiceSessionRef.current = null;
					setIsVoiceListening(false);
					setIsVoiceStarting(false);
					focusInput(true);
				}
			});
			voiceActiveRef.current = true;
			setIsVoiceListening(true);
			setIsVoiceStarting(false);
		} catch (error) {
			clearVoiceAutoSubmit();
			voiceActiveRef.current = false;
			const message = error instanceof Error ? error.message : "Could not start voice input";
			toast.error(t(message === "Microphone permission denied" ? "Microphone permission denied" : message === "Voice input is not supported in this browser" ? "Voice input is not supported in this browser" : "Could not start voice input"));
			setIsVoiceListening(false);
			setIsVoiceStarting(false);
		}
	}, [
		applyVoiceTranscript,
		clearVoiceAutoSubmit,
		focusInput,
		input,
		interactionsDisabled,
		isVoiceListening,
		isVoiceStarting,
		stopVoiceListening,
		t,
		voiceSupported
	]);
	const updateMessagesCanScroll = useCallback(() => {
		const container = messagesContainerRef.current;
		if (!container) {
			setMessagesCanScroll(false);
			return;
		}
		const canScroll = container.scrollHeight > container.clientHeight + 2;
		setMessagesCanScroll((current) => current === canScroll ? current : canScroll);
	}, []);
	const isNearBottom = useCallback((container) => {
		return container.scrollHeight - (container.scrollTop + container.clientHeight) <= AUTO_SCROLL_BOTTOM_THRESHOLD;
	}, []);
	const scrollMessagesToBottom = useCallback(() => {
		const container = messagesContainerRef.current;
		if (!container) return;
		isProgrammaticScrollRef.current = true;
		container.scrollTop = container.scrollHeight;
		requestAnimationFrame(() => {
			const el = messagesContainerRef.current;
			if (el && shouldAutoScrollRef.current) el.scrollTop = el.scrollHeight;
			requestAnimationFrame(() => {
				isProgrammaticScrollRef.current = false;
				updateMessagesCanScroll();
			});
		});
	}, [updateMessagesCanScroll]);
	const pinToBottom = useCallback(() => {
		shouldAutoScrollRef.current = true;
		setIsStickToBottom(true);
		scrollMessagesToBottom();
	}, [scrollMessagesToBottom]);
	const handleMessagesScroll = useCallback(() => {
		if (isProgrammaticScrollRef.current) return;
		if (olderMessagesAnchorRef.current) return;
		const container = messagesContainerRef.current;
		if (!container) return;
		const nearBottom = isNearBottom(container);
		shouldAutoScrollRef.current = nearBottom;
		setIsStickToBottom((current) => current === nearBottom ? current : nearBottom);
		updateMessagesCanScroll();
	}, [isNearBottom, updateMessagesCanScroll]);
	useLayoutEffect(() => {
		const conversationId = activeConversationId ?? null;
		const conversationChanged = previousConversationIdRef.current !== conversationId;
		if (olderMessagesAnchorRef.current && messagesContainerRef.current) {
			const { scrollTop, scrollHeight } = olderMessagesAnchorRef.current;
			const newScrollHeight = messagesContainerRef.current.scrollHeight;
			isProgrammaticScrollRef.current = true;
			messagesContainerRef.current.scrollTop = scrollTop + (newScrollHeight - scrollHeight);
			olderMessagesAnchorRef.current = null;
			requestAnimationFrame(() => {
				isProgrammaticScrollRef.current = false;
			});
		} else if (conversationChanged) {
			shouldAutoScrollRef.current = true;
			setIsStickToBottom(true);
			scrollMessagesToBottom();
		} else if (latestMessageId && shouldAutoScrollRef.current && messages.length > 0) scrollMessagesToBottom();
		previousConversationIdRef.current = conversationId;
	}, [
		activeConversationId,
		latestMessageId,
		messages.length,
		scrollMessagesToBottom
	]);
	useEffect(() => {
		const container = messagesContainerRef.current;
		const content = messagesContentRef.current;
		if (!container || !content) {
			setMessagesCanScroll(false);
			return;
		}
		const syncOverflow = () => {
			updateMessagesCanScroll();
			if (!shouldAutoScrollRef.current) return;
			if (olderMessagesAnchorRef.current) return;
			if (messages.length === 0) return;
			scrollMessagesToBottom();
		};
		syncOverflow();
		const observer = new ResizeObserver(syncOverflow);
		observer.observe(content);
		observer.observe(container);
		return () => observer.disconnect();
	}, [
		messages.length,
		scrollMessagesToBottom,
		updateMessagesCanScroll
	]);
	useEffect(() => {
		window.setTimeout(() => inputRef.current?.focus(), 300);
	}, []);
	useEffect(() => {
		return () => {
			if (copiedMessageTimeoutRef.current !== null) window.clearTimeout(copiedMessageTimeoutRef.current);
			if (copiedConversationTimeoutRef.current !== null) window.clearTimeout(copiedConversationTimeoutRef.current);
			stopSpeaking();
		};
	}, []);
	useEffect(() => {
		stopSpeaking();
		setSpeakingMessageId(null);
	}, [activeConversationId]);
	useEffect(() => {
		pendingAttachmentsRef.current = pendingAttachments;
	}, [pendingAttachments]);
	const { data: automationsList = [] } = useAssistantAutomations(void 0, { enabled: isAuthenticated });
	const parentAutomation = useMemo(() => {
		if (!activeAutomationId) return null;
		return automationsList.find((item) => item.$id === activeAutomationId) ?? null;
	}, [activeAutomationId, automationsList]);
	useEffect(() => {
		if (section === "automations" || activeAutomationId) {
			setConversationsMenuTab("automations");
			return;
		}
		if (section === "agents") setConversationsMenuTab("agents");
	}, [activeAutomationId, section]);
	useEffect(() => {
		if (!isPageVariant || section !== "automations") return;
		if (automationModeProp === "create") {
			setAutomationEditor({ mode: "create" });
			return;
		}
		setAutomationEditor((current) => current.mode === "create" ? { mode: "closed" } : current);
	}, [
		automationModeProp,
		isPageVariant,
		section
	]);
	useEffect(() => {
		if (isPageVariant || !pendingPaneAutomationId) return;
		const automation = automationsList.find((item) => item.$id === pendingPaneAutomationId);
		if (!automation) return;
		setPaneDetailAutomationId(automation.$id);
		setPaneSection("automations");
		setAutomationEditor({ mode: "closed" });
		setPendingPaneAutomationId(null);
	}, [
		automationsList,
		isPageVariant,
		pendingPaneAutomationId
	]);
	const syncedRouteAgentIdRef = useRef(null);
	useEffect(() => {
		if (!isPageAgentsSection || !routeAgentId) {
			if (!routeAgentId) syncedRouteAgentIdRef.current = null;
			return;
		}
		if (syncedRouteAgentIdRef.current === routeAgentId) return;
		syncedRouteAgentIdRef.current = routeAgentId;
		setActiveConversationId(routeAgentId);
	}, [
		isPageAgentsSection,
		routeAgentId,
		setActiveConversationId
	]);
	useEffect(() => {
		if (!isPageAgentsSection || routeAgentId) return;
		if (activeConversationId) navigateToAgent(activeConversationId, { replace: true });
	}, [
		activeConversationId,
		isPageAgentsSection,
		navigateToAgent,
		routeAgentId
	]);
	useEffect(() => {
		if (!account || conversationsLoading) return;
		if (isPageAgentsSection && routeAgentId) {
			if (conversations.some((conversation) => conversation.$id === routeAgentId) || hasConversationSearch) return;
			if (fetchedActiveConversation?.$id === routeAgentId) return;
			if (activeConversationPending) return;
			if (!activeConversationFetched && !activeConversationError) return;
			const fallbackId = conversations[0]?.$id ?? null;
			if (fallbackId === routeAgentId) return;
			navigateToAgent(fallbackId, { replace: true });
			return;
		}
		if (activeConversationId) {
			if (hasConversationSearch) return;
			if (conversations.some((conversation) => conversation.$id === activeConversationId)) return;
			if (fetchedActiveConversation?.$id === activeConversationId) return;
			if (activeConversationPending) return;
			if (!activeConversationFetched && !activeConversationError) return;
		}
		if (conversations.length > 0) {
			const nextId = conversations[0].$id;
			setActiveConversationId(nextId);
			if (isPageAgentsSection) navigateToAgent(nextId, { replace: true });
			return;
		}
		if (!hasConversationSearch) {
			setActiveConversationId(null);
			if (isPageAgentsSection) navigateToAgent(null, { replace: true });
		}
	}, [
		account,
		activeConversationError,
		activeConversationFetched,
		activeConversationId,
		activeConversationPending,
		conversations,
		conversationsLoading,
		fetchedActiveConversation?.$id,
		hasConversationSearch,
		isPageAgentsSection,
		navigateToAgent,
		routeAgentId,
		setActiveConversationId
	]);
	useEffect(() => {
		setMessagesLimit(25);
		setMessageQueue([]);
		setMessageQueueExpanded(true);
		setRestoredQueueAttachmentIds([]);
		isDrainingQueueRef.current = false;
		queuePausedUntilIdleRef.current = false;
	}, [activeConversationId]);
	useEffect(() => {
		shouldAutoScrollRef.current = true;
		setIsStickToBottom(true);
	}, [activeConversationId]);
	useEffect(() => {
		if (isLoadingOlderMessages && !isFetchingMessages) setIsLoadingOlderMessages(false);
	}, [isFetchingMessages, isLoadingOlderMessages]);
	const resolveConversationProjectId = async () => {
		const directContextProjectId = !activeConversationId ? routeProjectId ?? nonEmptyId(selectedContextProjectId) ?? assistantConversationProjectId(conversations[0]) : nonEmptyId(selectedContextProjectId) ?? routeProjectId ?? assistantConversationProjectId(activeConversation) ?? assistantConversationProjectId(conversations[0]);
		if (directContextProjectId) return directContextProjectId;
		return fetchFirstAccessibleProjectId();
	};
	const handleCreateConversation = async () => {
		if (interactionsDisabled) return;
		const carriedPrompt = inputRef.current?.value ?? input;
		if (routeProjectId) setSelectedContextProjectId(routeProjectId);
		const conversationProjectId = routeProjectId ?? await resolveConversationProjectId();
		if (!conversationProjectId) {
			toast.error(t("No accessible project found to create an agent."));
			return;
		}
		try {
			const conversation = await createConversationMutation.mutateAsync({
				projectId: conversationProjectId,
				title: "New agent",
				modelId: selectedModelId || void 0,
				modelTemp: resolveModelTempForSelection(selectedModelId)
			});
			writeComposerDraft(conversation.$id, carriedPrompt);
			if (!activeConversationId) clearComposerDraft(null);
			closeModelEditor();
			setActiveConversationId(conversation.$id);
			navigateToAgent(conversation.$id);
			setConversationsPopoverOpen(false);
			focusInput(true);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create agent")));
		}
	};
	const handleCreateConversationRef = useRef(handleCreateConversation);
	handleCreateConversationRef.current = handleCreateConversation;
	useEffect(() => {
		if (interactionsDisabled) return;
		if (!consumePendingCreateAgent()) return;
		handleCreateConversationRef.current();
	}, [
		consumePendingCreateAgent,
		interactionsDisabled,
		pendingCreateAgentTick
	]);
	const canCreateAgentShortcut = !interactionsDisabled && isAgentsSection && !activeAutomationId && !createConversationMutation.isPending;
	const onNewAgentShortcut = useCallback(() => {
		if (!canCreateAgentShortcut) return;
		handleCreateConversationRef.current();
	}, [canCreateAgentShortcut]);
	useKeyboardShortcut(AGENT_NEW_SHORTCUT_COMBOS[0], onNewAgentShortcut, {
		enabled: canCreateAgentShortcut,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(AGENT_NEW_SHORTCUT_COMBOS[1], onNewAgentShortcut, {
		enabled: canCreateAgentShortcut,
		ignoreInputs: false,
		capture: true
	});
	const canCreateAutomationShortcut = !interactionsDisabled;
	const onNewAutomationShortcut = useCallback(() => {
		if (!canCreateAutomationShortcut) return;
		navigateToAutomations({ mode: "create" });
	}, [canCreateAutomationShortcut, navigateToAutomations]);
	useKeyboardShortcut(AGENT_NEW_AUTOMATION_SHORTCUT_COMBOS[0], onNewAutomationShortcut, {
		enabled: canCreateAutomationShortcut,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(AGENT_NEW_AUTOMATION_SHORTCUT_COMBOS[1], onNewAutomationShortcut, {
		enabled: canCreateAutomationShortcut,
		ignoreInputs: false,
		capture: true
	});
	const onFocusComposerShortcut = useCallback(() => {
		if (interactionsDisabled) return;
		if (!isAgentsSection) return;
		focusInput(true);
	}, [
		focusInput,
		interactionsDisabled,
		isAgentsSection
	]);
	useKeyboardShortcut(AGENT_FOCUS_COMPOSER_SHORTCUT_COMBOS[0], onFocusComposerShortcut, {
		enabled: !interactionsDisabled && isAgentsSection,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(AGENT_FOCUS_COMPOSER_SHORTCUT_COMBOS[1], onFocusComposerShortcut, {
		enabled: !interactionsDisabled && isAgentsSection,
		ignoreInputs: false,
		capture: true
	});
	const newAgentShortcutKeys = formatDisplayKeys(AGENT_NEW_SHORTCUT_RAW, isMac);
	const newAgentShortcutLabel = newAgentShortcutKeys.join("");
	const focusComposerShortcutLabel = formatDisplayKeys(AGENT_FOCUS_COMPOSER_SHORTCUT_RAW, isMac).join("");
	const handleSelectModel = async (modelId) => {
		if (interactionsDisabled) return;
		const previousModelId = selectedModelId;
		setSelectedModelId(modelId);
		if (!activeConversationId) return;
		if ((activeConversation?.modelId || "") === modelId) return;
		try {
			await updateConversationMutation.mutateAsync({
				conversationId: activeConversationId,
				modelId,
				modelTemp: resolveModelTempForSelection(modelId)
			});
		} catch (error) {
			setSelectedModelId(previousModelId);
			toast.error(getErrorMessage(error, t("Failed to update model")));
		}
	};
	const selectNextConversation = (conversationId) => {
		if (conversationId !== activeConversationId) return;
		const nextId = conversations.find((conversation) => conversation.$id !== conversationId && conversation.status?.toLowerCase() !== "archived")?.$id ?? null;
		setActiveConversationId(nextId);
		navigateToAgent(nextId);
	};
	const handleArchiveConversation = async (conversationId) => {
		if (interactionsDisabled) return;
		try {
			await updateConversationMutation.mutateAsync({
				conversationId,
				status: "archived"
			});
			selectNextConversation(conversationId);
			toast.success(t("Agent archived"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to archive agent")));
		}
	};
	const handleRenameConversation = async (conversationId, title) => {
		if (interactionsDisabled) return;
		try {
			await updateConversationMutation.mutateAsync({
				conversationId,
				title
			});
			toast.success(t("Agent updated"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to update agent")));
			throw error;
		}
	};
	const handleDeleteConversation = async (conversationId) => {
		if (interactionsDisabled) return;
		try {
			await deleteConversationMutation.mutateAsync(conversationId);
			unpinConversation(conversationId);
			selectNextConversation(conversationId);
			toast.success(t("Agent deleted"));
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to delete agent")));
			throw error;
		}
	};
	const handleAttachmentInputClick = useCallback(() => {
		fileInputRef.current?.click();
	}, []);
	const startAttachmentUpload = useCallback((file) => {
		const localId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
		const pendingAttachment = {
			localId,
			name: file.name,
			mimeType: file.type,
			size: file.size,
			status: "uploading"
		};
		setPendingAttachments((previous) => [...previous, pendingAttachment]);
		const contextForUploadProjectId = nonEmptyId(params.projectId) ?? assistantConversationProjectId(activeConversation);
		const uploadPromise = uploadAssistantAttachmentsMutation.mutateAsync({
			files: [file],
			projectId: contextForUploadProjectId
		}).then((attachmentIds) => {
			const fileId = attachmentIds[0];
			setPendingAttachments((previous) => previous.map((attachment) => attachment.localId === localId ? {
				...attachment,
				status: fileId ? "ready" : "failed",
				fileId
			} : attachment));
		}).catch(() => {
			setPendingAttachments((previous) => previous.map((attachment) => attachment.localId === localId ? {
				...attachment,
				status: "failed"
			} : attachment));
		}).finally(() => {
			uploadTasksRef.current.delete(localId);
		});
		uploadTasksRef.current.set(localId, uploadPromise);
	}, [
		activeConversation,
		params.projectId,
		uploadAssistantAttachmentsMutation
	]);
	const handleAttachmentFileChange = useCallback((event) => {
		const files = Array.from(event.target.files ?? []);
		if (!files.length) {
			focusInput();
			return;
		}
		files.forEach((file) => startAttachmentUpload(file));
		event.target.value = "";
		focusInput();
	}, [focusInput, startAttachmentUpload]);
	const handleInputPaste = useCallback((event) => {
		const imageFiles = Array.from(event.clipboardData?.items ?? []).filter((item) => item.kind === "file" && item.type.toLowerCase().startsWith("image/")).map((item) => item.getAsFile()).filter((file) => file !== null);
		if (imageFiles.length === 0) return;
		event.preventDefault();
		imageFiles.forEach((file) => startAttachmentUpload(file));
		focusInput();
	}, [focusInput, startAttachmentUpload]);
	const handleRemoveAttachment = useCallback((localId) => {
		setPendingAttachments((previous) => previous.filter((attachment) => attachment.localId !== localId));
		setComposerImageOrientations((previous) => {
			if (!(localId in previous)) return previous;
			const { [localId]: _removed, ...rest } = previous;
			return rest;
		});
	}, []);
	const handleRemoveEditingAttachment = useCallback((attachmentId) => {
		setEditingMessageAttachments((previous) => previous.filter((id) => id !== attachmentId));
	}, []);
	const waitForPendingAttachmentUploads = useCallback(async () => {
		if (!pendingAttachmentsRef.current.some((attachment) => attachment.status === "uploading")) return;
		setIsWaitingForAttachments(true);
		const uploadPromises = pendingAttachmentsRef.current.filter((attachment) => attachment.status === "uploading").map((attachment) => uploadTasksRef.current.get(attachment.localId)).filter((promise) => !!promise);
		await Promise.allSettled(uploadPromises);
		setIsWaitingForAttachments(false);
	}, []);
	const collectReadyAttachmentIds = useCallback(() => {
		return pendingAttachmentsRef.current.filter((attachment) => attachment.status === "ready" && !!attachment.fileId).map((attachment) => attachment.fileId);
	}, []);
	const submitComposerMessage = useCallback(async ({ content, attachmentIds, editingId }) => {
		const trimmed = content.trim();
		if (!trimmed && attachmentIds.length === 0) return false;
		const conversationProjectId = await resolveConversationProjectId();
		if (!activeConversationId && !conversationProjectId) {
			toast.error(t("No accessible project found to start a new agent."));
			return false;
		}
		const messageProjectId = nonEmptyId(selectedContextProjectId) ?? nonEmptyId(conversationProjectId) ?? nonEmptyId(params.projectId) ?? assistantConversationProjectId(activeConversation);
		if (messageProjectId && messageProjectId !== selectedContextProjectId) setSelectedContextProjectId(messageProjectId);
		shouldAutoScrollRef.current = true;
		setIsStickToBottom(true);
		scrollMessagesToBottom();
		let conversationId = activeConversationId;
		try {
			if (!conversationId) {
				if (!conversationProjectId) return false;
				const createdConversation = await createConversationMutation.mutateAsync({
					projectId: conversationProjectId,
					title: makeConversationTitle(trimmed || "Attachment"),
					modelId: selectedModelId || void 0,
					modelTemp: resolveModelTempForSelection(selectedModelId)
				});
				conversationId = createdConversation.$id;
				setActiveConversationId(createdConversation.$id);
				navigateToAgent(createdConversation.$id);
			}
			if (!conversationId) return false;
			const conversationForTemp = conversationId === activeConversation?.$id ? activeConversation : conversations.find((conversation) => conversation.$id === conversationId);
			const expectedTemp = resolveModelTempForSelection(conversationForTemp?.modelId || selectedModelId);
			if (conversationForTemp && typeof conversationForTemp.modelTemp === "number" && conversationForTemp.modelTemp !== expectedTemp) await updateConversationMutation.mutateAsync({
				conversationId,
				modelTemp: expectedTemp
			});
			const messageContext = {
				contextTeamId: nonEmptyId(params.orgId) ?? nonEmptyId(params.teamId) ?? nonEmptyId(project?.teamId),
				contextProjectId: messageProjectId,
				contextOrganizationId: nonEmptyId(params.orgId) ?? nonEmptyId(params.teamId) ?? nonEmptyId(project?.teamId),
				contextPagePath: location.pathname,
				contextPageTitle: typeof document !== "undefined" ? document.title : void 0,
				contextPageUrl: typeof window !== "undefined" ? window.location.href : void 0
			};
			if (editingId) {
				setEditingMessageId(null);
				setEditingMessageAttachments([]);
				await updateMessageMutation.mutateAsync({
					conversationId,
					messageId: editingId,
					contentText: trimmed,
					context: messageContext,
					attachments: attachmentIds
				});
			} else await createMessageMutation.mutateAsync({
				conversationId,
				contentText: trimmed,
				context: messageContext,
				attachments: attachmentIds,
				continueRun: true
			});
			return true;
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to send message")));
			return false;
		}
	}, [
		activeConversation,
		activeConversationId,
		conversations,
		createConversationMutation,
		createMessageMutation,
		location.pathname,
		params.orgId,
		params.projectId,
		params.teamId,
		project?.teamId,
		resolveModelTempForSelection,
		scrollMessagesToBottom,
		selectedContextProjectId,
		selectedModelId,
		setActiveConversationId,
		t,
		updateConversationMutation,
		updateMessageMutation
	]);
	const enqueueComposerMessage = useCallback((content, attachmentIds) => {
		const trimmed = content.trim();
		if (!trimmed && attachmentIds.length === 0) return;
		const queued = {
			id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `queue-${Date.now()}-${Math.random().toString(36).slice(2)}`,
			content: trimmed,
			attachmentIds
		};
		setMessageQueue((current) => [...current, queued]);
	}, []);
	const handleRemoveQueuedMessage = useCallback((queueId) => {
		setMessageQueue((current) => current.filter((message) => message.id !== queueId));
	}, []);
	const handlePromoteQueuedMessage = useCallback((queueId) => {
		setMessageQueue((current) => {
			const item = current.find((message) => message.id === queueId);
			if (!item) return current;
			return [item, ...current.filter((message) => message.id !== queueId)];
		});
	}, []);
	const handleEditQueuedMessage = useCallback((queueId) => {
		const item = messageQueue.find((message) => message.id === queueId);
		if (!item) return;
		setMessageQueue((current) => current.filter((message) => message.id !== queueId));
		setEditingMessageId(null);
		setEditingMessageAttachments([]);
		setPendingAttachments([]);
		setComposerImageOrientations({});
		setRestoredQueueAttachmentIds(item.attachmentIds);
		setInput(item.content);
		writeComposerDraft(activeConversationId, item.content);
		focusInput(true);
	}, [
		activeConversationId,
		focusInput,
		messageQueue
	]);
	const handleSend = async (content = input) => {
		if (interactionsDisabled) return;
		const trimmed = content.trim();
		const hasPendingOrEditingAttachments = pendingAttachmentsRef.current.some((attachment) => attachment.status === "uploading" || attachment.status === "ready") || editingMessageAttachments.length > 0 || restoredQueueAttachmentIds.length > 0;
		if (!trimmed && !hasPendingOrEditingAttachments || createMessageMutation.isPending || updateMessageMutation.isPending || isWaitingForAttachments) return;
		if (editingMessageId && isConversationRunning) return;
		stopVoiceListening();
		voiceBaseTextRef.current = "";
		try {
			await waitForPendingAttachmentUploads();
			if (pendingAttachmentsRef.current.filter((attachment) => attachment.status === "failed").length > 0) {
				toast.error(t("Some attachments failed to upload. Remove them and try again."));
				return;
			}
			const pendingAttachmentIds = collectReadyAttachmentIds();
			const editingId = editingMessageId;
			const attachmentIds = editingId ? Array.from(new Set([...editingMessageAttachments, ...pendingAttachmentIds])) : Array.from(new Set([...restoredQueueAttachmentIds, ...pendingAttachmentIds]));
			if (isConversationRunning && !editingId) {
				enqueueComposerMessage(trimmed, attachmentIds);
				setInput("");
				clearComposerDraft(activeConversationId);
				setPendingAttachments([]);
				setComposerImageOrientations({});
				setRestoredQueueAttachmentIds([]);
				setMessageQueueExpanded(true);
				if (inputRef.current) inputRef.current.style.height = "auto";
				return;
			}
			setInput("");
			clearComposerDraft(activeConversationId);
			if (await submitComposerMessage({
				content: trimmed,
				attachmentIds,
				editingId
			})) {
				setPendingAttachments([]);
				setComposerImageOrientations({});
				setRestoredQueueAttachmentIds([]);
				if (inputRef.current) inputRef.current.style.height = "auto";
			} else {
				setInput(trimmed);
				if (!editingId) writeComposerDraft(activeConversationId, trimmed);
			}
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to send message")));
		} finally {
			setIsWaitingForAttachments(false);
		}
	};
	sendComposerRef.current = () => {
		handleSend(stripVoiceSubmitTrigger(input, getActiveLanguage()));
	};
	useEffect(() => {
		if (isDrainingQueueRef.current) return;
		if (createMessageMutation.isPending || updateMessageMutation.isPending || isWaitingForAttachments || editingMessageId) return;
		if (queuePausedUntilIdleRef.current) {
			if (isConversationRunning) return;
			queuePausedUntilIdleRef.current = false;
		}
		if (isConversationRunning) return;
		if (messageQueue.length === 0) return;
		const next = messageQueue[0];
		isDrainingQueueRef.current = true;
		setMessageQueue((current) => current.slice(1));
		(async () => {
			if (!await submitComposerMessage({
				content: next.content,
				attachmentIds: next.attachmentIds
			})) {
				setMessageQueue((current) => [next, ...current]);
				isDrainingQueueRef.current = false;
				return;
			}
			queuePausedUntilIdleRef.current = true;
			isDrainingQueueRef.current = false;
		})();
	}, [
		createMessageMutation.isPending,
		editingMessageId,
		isConversationRunning,
		isWaitingForAttachments,
		messageQueue,
		submitComposerMessage,
		updateMessageMutation.isPending
	]);
	const handleStopConversation = useCallback(async () => {
		if (!activeConversationId || updateConversationMutation.isPending) return;
		try {
			await updateConversationMutation.mutateAsync({
				conversationId: activeConversationId,
				controlType: "stop"
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to stop response")));
		}
	}, [
		activeConversationId,
		t,
		updateConversationMutation
	]);
	const handleRetryMessage = useCallback(async (messageId) => {
		if (!activeConversationId || updateConversationMutation.isPending) return;
		try {
			await updateConversationMutation.mutateAsync({
				conversationId: activeConversationId,
				controlType: "retry",
				retryFromMessageId: messageId
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to retry response")));
		}
	}, [
		activeConversationId,
		t,
		updateConversationMutation
	]);
	const handleCopyMessage = useCallback(async (messageId, text) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		try {
			await navigator.clipboard.writeText(trimmed);
			setCopiedMessageId(messageId);
			if (copiedMessageTimeoutRef.current !== null) window.clearTimeout(copiedMessageTimeoutRef.current);
			copiedMessageTimeoutRef.current = window.setTimeout(() => {
				setCopiedMessageId(null);
			}, 1500);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to copy message")));
		}
	}, [t]);
	const handleSpeakMessage = useCallback((messageId, text) => {
		if (!isSpeechSynthesisSupported()) {
			toast.error(t("Text to speech is not supported in this browser"));
			return;
		}
		if (speakingMessageId === messageId) {
			stopSpeaking();
			setSpeakingMessageId(null);
			return;
		}
		const trimmed = text.trim();
		if (!trimmed) return;
		setSpeakingMessageId(messageId);
		speakText(trimmed, {
			lang: getActiveLanguage(),
			onEnd: () => {
				setSpeakingMessageId((current) => current === messageId ? null : current);
			},
			onError: (error) => {
				setSpeakingMessageId((current) => current === messageId ? null : current);
				toast.error(getErrorMessage(error, t("Failed to read message aloud")));
			}
		});
	}, [speakingMessageId, t]);
	const handleScoreMessage = useCallback(async (messageId, score) => {
		if (!activeConversationId || scoreMessageMutation.isPending) return;
		try {
			await scoreMessageMutation.mutateAsync({
				conversationId: activeConversationId,
				messageId,
				score
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to score message")));
		}
	}, [
		activeConversationId,
		scoreMessageMutation,
		t
	]);
	const handleCopyConversationDebug = useCallback(async () => {
		if (!activeConversationId || isCopyingConversation) return;
		setIsCopyingConversation(true);
		try {
			const { messages: listedMessages, total } = await fetchAssistantMessages(activeConversationId, Math.min(Math.max(totalMessages, messages.length, 25), 1e3));
			const messagesForExport = await Promise.all(listedMessages.map(async (message) => {
				let fullMessage = message;
				if (message.role !== "user") try {
					fullMessage = await sdk.forConsole.agent.getMessage({
						conversationId: activeConversationId,
						messageId: message.$id
					});
				} catch {}
				return {
					message: fullMessage,
					turn: fullMessage.role === "user" ? null : buildTurnView(fullMessage)
				};
			}));
			const payload = {
				exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
				source: "console-ai-chat-debug",
				conversation: activeConversation ?? { $id: activeConversationId },
				messages: messagesForExport,
				meta: {
					total,
					exportedCount: messagesForExport.length,
					truncated: total > messagesForExport.length,
					activeConversationId,
					activeMessageId: activeConversation?.activeMessageId ?? null,
					conversationStatus: activeConversation?.status ?? null,
					contextProjectId: contextProjectId ?? null,
					organizationId,
					pagePath: location.pathname,
					pageUrl: typeof window !== "undefined" ? window.location.href : null
				}
			};
			await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
			setCopiedConversation(true);
			if (copiedConversationTimeoutRef.current !== null) window.clearTimeout(copiedConversationTimeoutRef.current);
			copiedConversationTimeoutRef.current = window.setTimeout(() => {
				setCopiedConversation(false);
			}, 1500);
		} catch (error) {
			toast.error(getErrorMessage(error, "Failed to copy conversation JSON"));
		} finally {
			setIsCopyingConversation(false);
		}
	}, [
		activeConversation,
		activeConversationId,
		contextProjectId,
		isCopyingConversation,
		location.pathname,
		messages.length,
		organizationId,
		totalMessages
	]);
	const handleStartEditResend = useCallback((messageId, text, attachmentIds) => {
		if (isConversationRunning) return;
		setEditingMessageId(messageId);
		setEditingMessageAttachments(attachmentIds);
		setPendingAttachments([]);
		setComposerImageOrientations({});
		setInput(text);
		focusInput(true);
	}, [focusInput, isConversationRunning]);
	const handleCancelEditResend = useCallback(() => {
		setEditingMessageId(null);
		setEditingMessageAttachments([]);
		setPendingAttachments([]);
		setComposerImageOrientations({});
		skipDraftPersistRef.current = true;
		setInput(readComposerDraft(activeConversationId));
		requestAnimationFrame(() => {
			const el = inputRef.current;
			if (!el) return;
			el.style.height = "40px";
			el.style.height = `${Math.min(Math.max(el.scrollHeight, 40), 128)}px`;
			skipDraftPersistRef.current = false;
		});
	}, [activeConversationId]);
	const handleLoadOlderMessages = useCallback(() => {
		if (!hasOlderMessages || isFetchingMessages || isLoadingOlderMessages) return;
		const container = messagesContainerRef.current;
		if (container) olderMessagesAnchorRef.current = {
			scrollTop: container.scrollTop,
			scrollHeight: container.scrollHeight
		};
		setIsLoadingOlderMessages(true);
		setMessagesLimit((current) => Math.min(current + 25, totalMessages));
	}, [
		hasOlderMessages,
		isFetchingMessages,
		isLoadingOlderMessages,
		totalMessages
	]);
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};
	const leaveAgentPage = useCallback(() => {
		if (pageOrgId) {
			navigate({
				to: "/organizations/$orgId",
				params: { orgId: pageOrgId },
				replace: false
			});
			return;
		}
		navigate({
			to: "/",
			replace: false
		});
	}, [navigate, pageOrgId]);
	const handleCloseChat = useCallback(() => {
		if (isPageVariant) {
			leaveAgentPage();
			return;
		}
		closeChat();
	}, [
		closeChat,
		isPageVariant,
		leaveAgentPage
	]);
	const closeAutomationEditor = useCallback(() => {
		const wasCreate = automationEditor.mode === "create";
		setAutomationEditor({ mode: "closed" });
		setPendingPaneAutomationId(null);
		if (isPageVariant && wasCreate) {
			if (!pageOrgId) return;
			if (routeAutomationId) {
				navigate({
					to: "/organizations/$orgId/agent/automations/$automationId",
					params: {
						orgId: pageOrgId,
						automationId: routeAutomationId
					}
				});
				return;
			}
			navigate({
				to: "/organizations/$orgId/agent/automations",
				params: { orgId: pageOrgId }
			});
		}
	}, [
		automationEditor.mode,
		isPageVariant,
		navigate,
		pageOrgId,
		routeAutomationId
	]);
	const closeModelEditor = useCallback(() => {
		setModelEditor({ mode: "closed" });
	}, []);
	const openModelCreate = useCallback(() => {
		setConversationsPopoverOpen(false);
		setAutomationEditor({ mode: "closed" });
		setModelEditor({ mode: "create" });
	}, []);
	const getAgentSurfacePath = useCallback(() => {
		const accountPrefs = account?.prefs;
		const orgId = pageOrgId ?? nonEmptyId(params.orgId) ?? nonEmptyId(params.teamId) ?? nonEmptyId(project?.teamId) ?? preferredOrganizationId(accountPrefs);
		if (!orgId) return "/";
		if (section === "settings") return agentSettingsPath(orgId, settingsSection);
		if (section === "automations") {
			if (automationEditor.mode === "create") return agentAutomationCreatePath(orgId);
			if (detailAutomationId) return agentAutomationDetailPath(orgId, detailAutomationId);
			return agentAutomationsPath(orgId);
		}
		if (activeConversationId) return agentConversationPath(orgId, activeConversationId);
		return agentIndexPath(orgId);
	}, [
		account,
		activeConversationId,
		automationEditor.mode,
		detailAutomationId,
		pageOrgId,
		params.orgId,
		params.teamId,
		project?.teamId,
		section,
		settingsSection
	]);
	const handleOpenInNewTab = useCallback(() => {
		openInNewTab(buildConsoleUrl(getAgentSurfacePath()));
	}, [getAgentSurfacePath]);
	useEffect(() => {
		if (isPageVariant) return;
		const onKeyDown = (event) => {
			if (event.key !== "Escape") return;
			if (document.querySelector("[data-wizard-layout]")) return;
			if (document.querySelector("[data-slot=\"sheet-content\"][data-state=\"open\"], [data-slot=\"dialog-content\"][data-state=\"open\"], [data-slot=\"alert-dialog-content\"][data-state=\"open\"]")) return;
			if (paneSection === "settings") {
				event.preventDefault();
				setPaneSection("agents");
			}
		};
		window.addEventListener("keydown", onKeyDown, true);
		return () => window.removeEventListener("keydown", onKeyDown, true);
	}, [isPageVariant, paneSection]);
	const conversationById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const conversation of conversations) map.set(conversation.$id, conversation);
		return map;
	}, [conversations]);
	const pinnedConversations = useMemo(() => {
		const items = [];
		for (const id of pinnedConversationIds) {
			const conversation = conversationById.get(id);
			if (conversation) items.push(conversation);
		}
		return items;
	}, [conversationById, pinnedConversationIds]);
	const pinnedIdSet = useMemo(() => new Set(pinnedConversations.map((conversation) => conversation.$id)), [pinnedConversations]);
	const activeConversations = useMemo(() => conversations.filter((conversation) => conversation.status?.toLowerCase() !== "archived" && !pinnedIdSet.has(conversation.$id)), [conversations, pinnedIdSet]);
	const archivedConversations = useMemo(() => conversations.filter((conversation) => conversation.status?.toLowerCase() === "archived" && !pinnedIdSet.has(conversation.$id)), [conversations, pinnedIdSet]);
	const activeConversationGroups = useMemo(() => groupConversationsByTime(activeConversations), [activeConversations]);
	useEffect(() => {
		if (!account || conversationsLoading || hasConversationSearch) return;
		const existingIds = new Set(conversations.map((conversation) => conversation.$id));
		const pruned = pinnedConversationIds.filter((id) => existingIds.has(id));
		if (pruned.length !== pinnedConversationIds.length) setPinnedConversationIds(pruned);
	}, [
		account,
		conversations,
		conversationsLoading,
		hasConversationSearch,
		pinnedConversationIds,
		setPinnedConversationIds
	]);
	const toggleConversationGroup = useCallback((groupKey) => {
		setCollapsedConversationGroups((current) => {
			const next = new Set(current);
			if (next.has(groupKey)) next.delete(groupKey);
			else next.add(groupKey);
			return next;
		});
	}, []);
	const reorderPinnedConversations = useCallback((dragId, dropId) => {
		if (dragId === dropId) return;
		setPinnedConversationIds((current) => {
			const fromIndex = current.indexOf(dragId);
			const toIndex = current.indexOf(dropId);
			if (fromIndex < 0 || toIndex < 0) return current;
			const next = [...current];
			const [moved] = next.splice(fromIndex, 1);
			next.splice(toIndex, 0, moved);
			return next;
		});
	}, [setPinnedConversationIds]);
	const renderConversationsSearch = () => /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
			type: "search",
			value: conversationSearch,
			onChange: (event) => setConversationSearch(event.target.value),
			placeholder: t("Search agents..."),
			className: "h-8 border-border bg-background pe-2 ps-8 text-[12px]",
			"aria-label": t("Search agents..."),
			disabled: interactionsDisabled
		})]
	});
	const renderCreateAgentButton = () => /* @__PURE__ */ jsxs(Button, {
		type: "button",
		variant: "outline",
		className: "h-8 shrink-0 gap-1.5 px-2.5 text-[12px]",
		...analyticsAttrs("create-agent"),
		onClick: () => {
			handleCreateConversation();
		},
		disabled: interactionsDisabled || createConversationMutation.isPending,
		title: `${t("Create agent")} (${newAgentShortcutLabel})`,
		children: [
			createConversationMutation.isPending ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }),
			t("Create agent"),
			/* @__PURE__ */ jsx("kbd", {
				className: "ms-0.5 hidden items-center rounded border border-border bg-muted/50 px-1 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex",
				children: /* @__PURE__ */ jsx(ShortcutGlyphs, { keys: newAgentShortcutKeys })
			})
		]
	});
	const renderConversationsMenuBody = (options) => /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-1 flex-col overflow-hidden",
		children: /* @__PURE__ */ jsx(Tabs, {
			value: conversationsMenuTab,
			onValueChange: (value) => {
				if (value !== "agents" && value !== "automations") return;
				if (value === "automations") {
					navigateToAutomations({ mode: "list" });
					return;
				}
				if (activeAutomationId) {
					setActiveConversationId(null);
					setRunAutomationContextId(null);
					navigateToAgent(null);
					return;
				}
				navigateToAgent(isPageVariant ? activeConversationId : null);
			},
			className: "flex min-h-0 flex-1 flex-col gap-0 overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain p-3.5",
				children: [
					/* @__PURE__ */ jsxs(TabsList, {
						className: "mb-3 grid h-9 w-full grid-cols-2 shadow-none",
						children: [/* @__PURE__ */ jsx(TabsTrigger, {
							value: "agents",
							className: "w-full text-[12px]",
							...analyticsAttrs("agent-tab-agents"),
							children: t("Agents")
						}), /* @__PURE__ */ jsx(TabsTrigger, {
							value: "automations",
							className: "w-full text-[12px]",
							...analyticsAttrs("agent-tab-automations"),
							children: t("Automations")
						})]
					}),
					/* @__PURE__ */ jsxs(TabsContent, {
						value: "agents",
						className: "mt-0 data-[state=inactive]:hidden",
						children: [
							renderConversationsSearch(),
							options?.hideCreateButton ? null : /* @__PURE__ */ jsx("div", {
								className: "my-8",
								children: renderCreateAgentButton()
							}),
							renderConversationsList({
								dense: options?.dense,
								onSelect: options?.onSelectConversation
							})
						]
					}),
					/* @__PURE__ */ jsx(TabsContent, {
						value: "automations",
						className: "mt-0 data-[state=inactive]:hidden",
						children: /* @__PURE__ */ jsx(AgentAutomationsPanel, {
							disabled: interactionsDisabled,
							selectedAutomationId: detailAutomationId ?? activeAutomationId ?? null,
							onCreate: () => {
								navigateToAutomations({ mode: "create" });
							},
							onSelect: (automation) => {
								navigateToAutomations({
									mode: "detail",
									automationId: automation.$id
								});
							},
							onEdit: (automation) => {
								navigateToAutomations({
									mode: "detail",
									automationId: automation.$id
								});
							}
						})
					})
				]
			})
		})
	});
	const renderConversationRow = (conversation, options) => {
		const isActive = conversation.$id === activeConversationId;
		const isArchived = conversation.status?.toLowerCase() === "archived";
		const isPinned = pinnedIdSet.has(conversation.$id);
		const statusTone = getAssistantConversationStatusTone(conversation);
		const statusLabel = t(getAssistantConversationStatusLabel(statusTone));
		const isArchiving = updateConversationMutation.isPending && updateConversationMutation.variables?.conversationId === conversation.$id && updateConversationMutation.variables?.status === "archived";
		const canDrag = Boolean(options?.draggable) && !interactionsDisabled;
		const isDragOver = canDrag && pinnedDragOverId === conversation.$id && pinnedDragId !== conversation.$id;
		return /* @__PURE__ */ jsx(AgentConversationContextMenu, {
			title: conversation.title || t("Untitled agent"),
			disabled: interactionsDisabled,
			isArchived,
			isPinned,
			onRename: (title) => handleRenameConversation(conversation.$id, title),
			onPin: () => pinConversation(conversation.$id),
			onUnpin: () => unpinConversation(conversation.$id),
			onArchive: () => handleArchiveConversation(conversation.$id),
			onDelete: () => handleDeleteConversation(conversation.$id),
			children: /* @__PURE__ */ jsxs("div", {
				role: "button",
				tabIndex: 0,
				draggable: canDrag,
				onClick: () => {
					closeModelEditor();
					setActiveConversationId(conversation.$id);
					navigateToAgent(conversation.$id);
					options?.onSelect?.();
				},
				onKeyDown: (event) => {
					if (event.key !== "Enter" && event.key !== " ") return;
					event.preventDefault();
					closeModelEditor();
					setActiveConversationId(conversation.$id);
					navigateToAgent(conversation.$id);
					options?.onSelect?.();
				},
				onDragStart: canDrag ? (event) => {
					setPinnedDragId(conversation.$id);
					event.dataTransfer.effectAllowed = "move";
					event.dataTransfer.setData("text/plain", conversation.$id);
				} : void 0,
				onDragEnd: canDrag ? () => {
					setPinnedDragId(null);
					setPinnedDragOverId(null);
				} : void 0,
				onDragOver: canDrag ? (event) => {
					event.preventDefault();
					event.dataTransfer.dropEffect = "move";
					setPinnedDragOverId(conversation.$id);
				} : void 0,
				onDragLeave: canDrag ? () => {
					setPinnedDragOverId((current) => current === conversation.$id ? null : current);
				} : void 0,
				onDrop: canDrag ? (event) => {
					event.preventDefault();
					const dragId = event.dataTransfer.getData("text/plain") || pinnedDragId;
					if (dragId) reorderPinnedConversations(dragId, conversation.$id);
					setPinnedDragId(null);
					setPinnedDragOverId(null);
				} : void 0,
				className: cn("group flex w-full items-center gap-1 rounded-md border border-transparent px-1.5 py-1 text-start transition-colors", canDrag ? "cursor-grab active:cursor-grabbing" : "cursor-pointer", isActive ? "border-border bg-accent" : "hover:border-border hover:bg-accent/60", isDragOver && "border-primary bg-primary/10", options?.dense && "py-1.5"),
				"aria-label": canDrag ? `${conversation.title || t("Untitled agent")}, ${t("drag to reorder")}` : conversation.title || t("Untitled agent"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "min-w-0 truncate text-[12px] font-medium text-foreground",
							children: conversation.title || t("Untitled agent")
						}),
						statusTone !== "ready" ? /* @__PURE__ */ jsx("span", {
							className: cn("h-1.5 w-1.5 shrink-0 rounded-full", getAssistantConversationStatusDotClass(statusTone)),
							title: statusLabel,
							"aria-label": statusLabel,
							role: "img"
						}) : null,
						/* @__PURE__ */ jsx(ConversationResourceSummary, {
							conversationId: conversation.$id,
							className: "shrink-0"
						})
					]
				}), !isArchived ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "icon",
					variant: "ghost",
					className: cn("h-6 w-6 shrink-0 transition-opacity", isArchiving ? "opacity-100" : "opacity-0 group-hover:opacity-100 disabled:opacity-0"),
					onClick: (event) => {
						event.stopPropagation();
						handleArchiveConversation(conversation.$id);
					},
					disabled: interactionsDisabled || isArchiving,
					"aria-label": t("Archive agent"),
					children: isArchiving ? /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsx(Archive, { className: "h-3 w-3" })
				}) : null]
			})
		}, conversation.$id);
	};
	const renderConversationTimeGroups = (groups, options) => groups.map((group) => {
		const groupKey = group.label;
		const isOpen = !collapsedConversationGroups.has(groupKey);
		return /* @__PURE__ */ jsx(Collapsible, {
			open: isOpen,
			onOpenChange: () => toggleConversationGroup(groupKey),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-0.5",
				children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "group flex w-full items-center gap-1 rounded-md px-1.5 py-1 text-start text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "inline-flex min-w-0 items-center gap-0.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: t(group.label)
							}), /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-3 w-3 shrink-0 opacity-0 transition-all group-hover:opacity-100", !isOpen && "-rotate-90") })]
						}), /* @__PURE__ */ jsx("span", {
							className: "ms-auto tabular-nums text-[10px] font-medium normal-case tracking-normal text-muted-foreground/80",
							children: group.items.length
						})]
					})
				}), /* @__PURE__ */ jsx(CollapsibleContent, {
					className: "space-y-0.5",
					children: group.items.map((conversation) => renderConversationRow(conversation, options))
				})]
			})
		}, groupKey);
	});
	const renderConversationsList = (options) => {
		if (!assistantListReady) return null;
		if (conversations.length === 0) return /* @__PURE__ */ jsx("div", {
			className: "px-1.5 py-2 text-[11px] text-muted-foreground",
			children: hasConversationSearch ? t("No agents match your search.") : t("No agents yet.")
		});
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [pinnedConversations.length > 0 ? /* @__PURE__ */ jsx(Collapsible, {
					open: pinnedSectionOpen,
					onOpenChange: setPinnedSectionOpen,
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-0.5",
						children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "group flex w-full items-center gap-1 rounded-md px-1.5 py-1 text-start text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex min-w-0 items-center gap-0.5",
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: t("Pinned")
									}), /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-3 w-3 shrink-0 opacity-0 transition-all group-hover:opacity-100", !pinnedSectionOpen && "-rotate-90") })]
								}), /* @__PURE__ */ jsx("span", {
									className: "ms-auto tabular-nums text-[10px] font-medium normal-case tracking-normal text-muted-foreground/80",
									children: pinnedConversations.length
								})]
							})
						}), /* @__PURE__ */ jsx(CollapsibleContent, {
							className: "space-y-0.5",
							children: pinnedConversations.map((conversation) => renderConversationRow(conversation, {
								...options,
								draggable: true
							}))
						})]
					})
				}) : null, activeConversationGroups.length > 0 ? renderConversationTimeGroups(activeConversationGroups, options) : pinnedConversations.length === 0 && archivedConversations.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "px-1.5 py-1 text-[11px] text-muted-foreground",
					children: hasConversationSearch ? t("No active agents match your search.") : t("No active agents.")
				}) : null]
			}), archivedConversations.length > 0 ? /* @__PURE__ */ jsx(Collapsible, {
				open: archivedSectionOpen,
				onOpenChange: setArchivedSectionOpen,
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-0.5",
					children: [/* @__PURE__ */ jsx(CollapsibleTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "group flex w-full items-center gap-1 rounded-md px-1.5 py-1 text-start text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex min-w-0 items-center gap-0.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: t("Archived")
								}), /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-3 w-3 shrink-0 opacity-0 transition-all group-hover:opacity-100", !archivedSectionOpen && "-rotate-90") })]
							}), /* @__PURE__ */ jsx("span", {
								className: "ms-auto tabular-nums text-[10px] font-medium normal-case tracking-normal text-muted-foreground/80",
								children: archivedConversations.length
							})]
						})
					}), /* @__PURE__ */ jsx(CollapsibleContent, {
						className: "space-y-0.5",
						children: archivedConversations.map((conversation) => renderConversationRow(conversation, options))
					})]
				})
			}) : null]
		});
	};
	if (isAgentBlocked) return null;
	const conversationsSidebar = /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			children: renderConversationsMenuBody({ dense: true })
		})
	});
	const renderSidebarToggleButton = () => isPageVariant ? /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: () => setConversationsSidebarOpen((open) => !open),
		className: "flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
		"aria-label": conversationsSidebarOpen ? t("Close sidebar") : t("Open sidebar"),
		title: conversationsSidebarOpen ? t("Close sidebar") : t("Open sidebar"),
		...analyticsAttrs(conversationsSidebarOpen ? "agent-sidebar-close" : "agent-sidebar-open"),
		children: conversationsSidebarOpen ? /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(PanelLeft, { className: "h-3.5 w-3.5" })
	}) : null;
	const wrapWithConversationsSidebar = (content) => isPageVariant && conversationsSidebarOpen ? /* @__PURE__ */ jsx(AgentConversationsResizableLayout, {
		sidebar: conversationsSidebar,
		children: content
	}) : content;
	const toolbarPaddingClass = isPageVariant ? "ps-3 pe-3 min-[640px]:ps-4 min-[640px]:pe-4 min-[1000px]:pe-6" : "px-3";
	if (isSettingsSection) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 w-full min-w-0 flex-col bg-background",
		children: wrapWithConversationsSidebar(/* @__PURE__ */ jsx(AgentSettingsContent, {
			section: settingsSection,
			onSectionChange: (next) => {
				navigateToSettings(next);
			},
			onBack: () => {
				if (isPageVariant) {
					navigateToAgent(activeConversationId);
					return;
				}
				navigateToAgent(null);
			},
			onOpenInNewTab: isPageVariant ? void 0 : handleOpenInNewTab,
			onToggleSidebar: isPageVariant ? () => setConversationsSidebarOpen((open) => !open) : void 0,
			sidebarOpen: isPageVariant ? conversationsSidebarOpen : void 0,
			toolbarClassName: toolbarPaddingClass
		}))
	});
	const selectedAutomation = automationsList.find((item) => item.$id === detailAutomationId) ?? null;
	const automationHeaderTitle = selectedAutomation?.name || (detailAutomationId ? t("Untitled automation") : t("Automations"));
	const automationsMain = /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 min-w-0 flex-1 flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex h-14 min-h-14 shrink-0 items-center justify-between border-b border-border", toolbarPaddingClass),
			children: [
				"        ",
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [renderSidebarToggleButton(), /* @__PURE__ */ jsx("div", {
						className: "min-w-0",
						children: isPageVariant ? /* @__PURE__ */ jsx("span", {
							className: "truncate px-1.5 text-[13px] font-semibold text-foreground",
							children: automationHeaderTitle
						}) : /* @__PURE__ */ jsxs(Popover, {
							open: conversationsPopoverOpen,
							onOpenChange: setConversationsPopoverOpen,
							children: [/* @__PURE__ */ jsx(PopoverTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									className: "h-8 max-w-[220px] shrink gap-1.5 px-1.5",
									"aria-label": t("Automations"),
									children: [/* @__PURE__ */ jsx("span", {
										className: "truncate text-[13px] font-semibold text-foreground",
										children: automationHeaderTitle
									}), /* @__PURE__ */ jsx(ChevronsUpDown, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })]
								})
							}), /* @__PURE__ */ jsx(PopoverContent, {
								align: "start",
								className: "w-[300px] p-0",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex max-h-[360px] flex-col overflow-hidden",
									children: renderConversationsMenuBody({
										hideCreateButton: true,
										onSelectConversation: () => setConversationsPopoverOpen(false)
									})
								})
							})]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => navigateToSettings("models"),
						className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						"aria-label": t("Settings"),
						title: t("Settings"),
						...analyticsAttrs("agent-settings"),
						children: /* @__PURE__ */ jsx(Settings, { className: "h-3.5 w-3.5" })
					}), !isPageVariant ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: handleOpenInNewTab,
						className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						"aria-label": t("Open in new tab"),
						title: t("Open in new tab"),
						...analyticsAttrs("agent-open-new-tab"),
						children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: handleCloseChat,
						className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						"aria-label": t("Close"),
						...analyticsAttrs("agent-close"),
						children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
					})] }) : null]
				})
			]
		}), /* @__PURE__ */ jsx(AgentAutomationDetail, {
			automation: selectedAutomation,
			disabled: interactionsDisabled,
			selectedRunId: activeConversationId,
			defaultTab: "settings",
			organizationId: organizationId ?? pageOrgId,
			onAddModel: () => navigateToSettings("models"),
			onDeleted: () => navigateToAutomations({ mode: "list" }),
			onSelectRun: (conversation) => {
				const runAutomationId = assistantConversationAutomationId(conversation);
				if (runAutomationId) {
					setRunAutomationContextId(runAutomationId);
					setPaneDetailAutomationId(runAutomationId);
					queryClient.setQueryData([
						"agent",
						"conversation",
						conversation.$id
					], conversation);
				}
				setConversationsPopoverOpen(false);
				closeModelEditor();
				setActiveConversationId(conversation.$id);
				navigateToAgent(conversation.$id, { keepAutomationsNav: true });
			}
		})]
	});
	const chatMain = /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 min-w-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex h-14 min-h-14 shrink-0 items-center justify-between border-b border-border", toolbarPaddingClass),
				children: [
					"            ",
					/* @__PURE__ */ jsx("div", {
						className: "min-w-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [renderSidebarToggleButton(), effectiveExpanded ? /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "group flex min-w-0 max-w-full items-center gap-1 rounded-md px-1.5 py-1 text-start transition-colors hover:bg-accent/60 disabled:pointer-events-none disabled:opacity-60",
								onClick: () => setHeaderRenameOpen(true),
								disabled: interactionsDisabled || !activeConversationId || !activeConversation,
								"aria-label": t("Update agent"),
								children: [/* @__PURE__ */ jsx("span", {
									className: "truncate text-[13px] font-semibold text-foreground",
									children: activeConversation?.title || t("New agent")
								}), activeConversationId && activeConversation ? /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" }) : null]
							}) : /* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center gap-1",
								children: [/* @__PURE__ */ jsxs(Popover, {
									open: conversationsPopoverOpen,
									onOpenChange: setConversationsPopoverOpen,
									children: [/* @__PURE__ */ jsx(PopoverTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "ghost",
											className: "h-8 max-w-[200px] shrink gap-1.5 px-1.5",
											"aria-label": activeAutomationId ? t("Automations") : t("Agents"),
											children: [/* @__PURE__ */ jsx("span", {
												className: "truncate text-[13px] font-semibold text-foreground",
												children: activeConversation?.title || t("New agent")
											}), /* @__PURE__ */ jsx(ChevronsUpDown, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })]
										})
									}), /* @__PURE__ */ jsx(PopoverContent, {
										align: "start",
										className: "w-[300px] p-0",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex max-h-[360px] flex-col overflow-hidden",
											children: renderConversationsMenuBody({
												hideCreateButton: true,
												onSelectConversation: () => setConversationsPopoverOpen(false)
											})
										})
									})]
								}), !activeAutomationId ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8 shrink-0",
									...analyticsAttrs("create-agent"),
									onClick: () => {
										handleCreateConversation();
									},
									disabled: interactionsDisabled || createConversationMutation.isPending,
									"aria-label": t("Create agent"),
									title: `${t("Create agent")} (${newAgentShortcutLabel})`,
									children: createConversationMutation.isPending ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
								}) : null]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1",
						children: [
							isDebugModeOpen && activeConversationId ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "icon",
								className: "h-7 w-7 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 disabled:text-purple-600/40 dark:text-purple-400 dark:hover:bg-purple-500/15 dark:hover:text-purple-300 dark:disabled:text-purple-400/40",
								onClick: () => {
									handleCopyConversationDebug();
								},
								disabled: isCopyingConversation || messages.length === 0,
								"aria-label": "Copy conversation JSON",
								title: "Copy conversation JSON",
								children: isCopyingConversation ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : copiedConversation ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
							}) : null,
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => navigateToSettings("models"),
								className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								"aria-label": t("Settings"),
								title: t("Settings"),
								...analyticsAttrs("agent-settings"),
								children: /* @__PURE__ */ jsx(Settings, { className: "h-3.5 w-3.5" })
							}),
							!isPageVariant ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: handleOpenInNewTab,
								className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								"aria-label": t("Open in new tab"),
								title: t("Open in new tab"),
								...analyticsAttrs("agent-open-new-tab"),
								children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: handleCloseChat,
								className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								"aria-label": t("Close"),
								...analyticsAttrs("agent-close"),
								children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
							})] }) : null
						]
					})
				]
			}),
			activeAutomationId ? /* @__PURE__ */ jsx("div", {
				className: "shrink-0 border-b border-border bg-muted/30",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto flex w-full max-w-3xl items-center px-4 py-2 sm:px-6",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-md text-[12px] text-muted-foreground transition-colors hover:text-foreground",
						onClick: () => {
							navigateToAutomations({
								mode: "detail",
								automationId: activeAutomationId
							});
						},
						"aria-label": t("Back to automation"),
						children: [/* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ jsxs("span", {
							className: "truncate",
							children: [
								/* @__PURE__ */ jsx("span", { children: t("Automation") }),
								/* @__PURE__ */ jsx("span", {
									className: "mx-1 text-muted-foreground/70",
									children: "/"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: parentAutomation?.name || t("Untitled automation")
								})
							]
						})]
					})
				})
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative min-h-0 flex-1",
					children: [
						/* @__PURE__ */ jsx("div", {
							ref: messagesContainerRef,
							onScroll: handleMessagesScroll,
							className: "h-full overflow-y-auto",
							children: /* @__PURE__ */ jsx("div", {
								className: cn("p-4", effectiveExpanded && "mx-auto w-full max-w-3xl", messages.length === 0 && "flex min-h-full flex-col"),
								children: !assistantThreadReady ? null : messages.length === 0 ? !assistantEmptyReady ? null : /* @__PURE__ */ jsx(AgentEmptyState, {
									hasActiveMcp: hasActiveMcp && !isGuest,
									suggestions: emptyStateSuggestions,
									onSelectSuggestion: (question) => handleSend(t(question)),
									requireSignIn: isGuest,
									sphereSize: getSphereRenderSize(SPHERE_BASE_SIZES.empty),
									activityRef: bubbleActivityRef,
									colorMode: effectiveSphereColorMode,
									shapeMode: effectiveSphereShapeMode,
									particleCount: effectiveSphereParticleCount,
									debugSlot: isDebugModeOpen ? /* @__PURE__ */ jsx(AssistantBubbleDebugControls, {
										expanded: bubbleDebugExpanded,
										onExpandedChange: setBubbleDebugExpanded,
										activityMode: bubbleDebugMode,
										onActivityModeChange: setBubbleDebugMode,
										sizeScale: effectiveSphereSizeScale,
										sizeScaleOverride: sphereSizeScaleOverride,
										onSizeScaleChange: setSphereSizeScaleOverride,
										onSizeScaleDefault: () => setSphereSizeScaleOverride(null),
										colorMode: sphereColorMode,
										onColorModeChange: setSphereColorMode,
										shapeMode: sphereShapeMode,
										onShapeModeChange: setSphereShapeMode,
										particleCountOverride: sphereParticleCountOverride,
										autoParticleCount: sphereAutoParticleCount,
										onParticleCountChange: setSphereParticleCountOverride,
										onParticleCountAuto: () => setSphereParticleCountOverride(null)
									}) : null
								}) : /* @__PURE__ */ jsxs("div", {
									ref: messagesContentRef,
									className: "space-y-5",
									children: [
										hasOlderMessages ? /* @__PURE__ */ jsx("div", {
											className: "flex justify-center",
											children: /* @__PURE__ */ jsx(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												disabled: isFetchingMessages || isLoadingOlderMessages,
												className: "h-8 px-2.5 text-[12px] text-muted-foreground",
												onClick: handleLoadOlderMessages,
												children: isLoadingOlderMessages ? /* @__PURE__ */ jsxs(Fragment, { children: [
													/* @__PURE__ */ jsx(Loader2, { className: "me-1 h-3 w-3 animate-spin" }),
													t("Loading older messages..."),
													" "
												] }) : t("Load older messages")
											})
										}) : null,
										messages.map((message, messageIndex) => {
											const messageText = message.contentText || "";
											const messageAttachments = getMessageAttachments(message);
											const isUserMessage = message.role.toLowerCase() === "user";
											const isLiveAssistant = !isUserMessage && (message.$id === activeAssistantMessageId || isAssistantMessageInFlight(message.status));
											const turn = isUserMessage ? null : buildTurnView(message);
											const hasTurnChrome = !!turn && (!!turn.statusLabel || !!turn.route?.agent || turn.agents.length > 0 || turn.toolOrder.length > 0 || !!turn.error);
											if (!isUserMessage && !messageText.trim() && messageAttachments.length === 0 && !isLiveAssistant && !hasTurnChrome) return null;
											const messageStatus = message.status?.toLowerCase();
											const canRetryMessage = !isConversationRunning && !isUserMessage && (messageStatus === "failed" || messageStatus === "stopped" || activeConversation?.status?.toLowerCase() === "failed" || activeConversation?.status?.toLowerCase() === "stopped");
											const canScoreMessage = !isUserMessage && !isAssistantMessageInFlight(message.status);
											const followingMessage = messages[messageIndex + 1];
											const clarifyFollowingUserText = !isUserMessage && followingMessage?.role.toLowerCase() === "user" ? followingMessage.contentText || "" : null;
											const clarifyInteractive = !isUserMessage && message.$id === latestMessageId && !clarifyFollowingUserText;
											return /* @__PURE__ */ jsx(AssistantMessageRow, {
												message,
												messageAttachments,
												placeholderCandidates,
												copied: copiedMessageId === message.$id,
												showDebug: isDebugModeOpen,
												openResourceInNewTab: isPageVariant,
												contextProjectId,
												organizationId,
												clarifyInteractive,
												clarifyFollowingUserText,
												onSubmitClarifyAnswers: clarifyInteractive ? (answersJson) => {
													handleSend(answersJson);
												} : void 0,
												onCopyMessage: handleCopyMessage,
												onSpeakMessage: !isUserMessage && !isAssistantMessageInFlight(message.status) ? handleSpeakMessage : void 0,
												speaking: speakingMessageId === message.$id,
												onScoreMessage: canScoreMessage ? handleScoreMessage : void 0,
												scoring: scoreMessageMutation.isPending && scoreMessageMutation.variables?.messageId === message.$id,
												onStartEditResend: handleStartEditResend,
												onRetry: handleRetryMessage,
												canRetry: canRetryMessage,
												deferCodeBlocks: isThinking && message.$id === latestMessageId
											}, message.$id);
										}),
										isThinking && !latestAssistantMessage && waitingForAssistantReply ? /* @__PURE__ */ jsx("div", {
											className: "flex",
											children: /* @__PURE__ */ jsxs("div", {
												className: "mb-2 flex items-center gap-2 px-3 py-2 text-[12px] text-muted-foreground",
												children: [/* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: liveTurnStatusLabel || t("Thinking...") })]
											})
										}) : null,
										/* @__PURE__ */ jsx("div", { ref: messagesEndRef })
									]
								})
							})
						}),
						!isStickToBottom && messages.length > 0 ? /* @__PURE__ */ jsx("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-3 z-10 flex justify-center px-3",
							children: /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "secondary",
								size: "sm",
								className: "pointer-events-auto h-8 gap-1.5 rounded-full border border-border bg-background/95 px-3 text-[12px] shadow-md backdrop-blur-sm",
								onClick: pinToBottom,
								children: [/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" }), t("Jump to latest")]
							})
						}) : null,
						messagesCanScroll && !isStickToBottom ? /* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute bottom-0 left-1/2 z-[5] h-4 w-[min(420px,70%)] -translate-x-1/2 translate-y-1/4 rounded-[100%] bg-foreground/[0.045] blur-2xl dark:bg-black/28"
						}) : null
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative z-10 shrink-0 bg-background",
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("p-4", effectiveExpanded && "mx-auto w-full max-w-3xl"),
						children: [
							isDebugModeOpen ? /* @__PURE__ */ jsxs("div", {
								className: "mb-3 space-y-2",
								children: [/* @__PURE__ */ jsx(AgentChatSurfacesDebugPanel, {
									projectId: contextProjectId,
									organizationId
								}), messages.length > 0 ? /* @__PURE__ */ jsx(AssistantBubbleDebugControls, {
									expanded: bubbleDebugExpanded,
									onExpandedChange: setBubbleDebugExpanded,
									activityMode: bubbleDebugMode,
									onActivityModeChange: setBubbleDebugMode,
									sizeScale: effectiveSphereSizeScale,
									sizeScaleOverride: sphereSizeScaleOverride,
									onSizeScaleChange: setSphereSizeScaleOverride,
									onSizeScaleDefault: () => setSphereSizeScaleOverride(null),
									colorMode: sphereColorMode,
									onColorModeChange: setSphereColorMode,
									shapeMode: sphereShapeMode,
									onShapeModeChange: setSphereShapeMode,
									particleCountOverride: sphereParticleCountOverride,
									autoParticleCount: sphereAutoParticleCount,
									onParticleCountChange: setSphereParticleCountOverride,
									onParticleCountAuto: () => setSphereParticleCountOverride(null)
								}) : null]
							}) : null,
							editingMessageId ? /* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center justify-between rounded-md border border-border bg-muted/20 px-3 py-2",
								children: [/* @__PURE__ */ jsxs("p", {
									className: "truncate text-[12px] text-muted-foreground",
									children: [t("Editing message"), editingMessageAttachments.length > 0 ? ` (${editingMessageAttachments.length} ${editingMessageAttachments.length > 1 ? t("attachments selected") : t("attachment selected")})` : ""]
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 px-2.5 text-[12px]",
									onClick: handleCancelEditResend,
									children: t("Cancel")
								})]
							}) : null,
							editingMessageId && editingMessageAttachments.length > 0 ? /* @__PURE__ */ jsx("div", {
								className: "mb-2 overflow-x-auto",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex min-w-max flex-nowrap gap-1.5 pb-1",
									children: editingMessageAttachments.map((attachmentId) => {
										const attachmentFile = editingAttachmentFilesData?.find((file) => file.$id === attachmentId);
										const attachmentName = attachmentFile?.name || `${t("Attachment")} ${attachmentId.slice(0, 8)}`;
										const attachmentDisplayName = formatAttachmentDisplayName(attachmentName);
										const isImageAttachment = attachmentFile?.mimeType?.startsWith("image/");
										const attachmentSize = typeof attachmentFile?.sizeOriginal === "number" ? formatAttachmentSize(attachmentFile.sizeOriginal) : null;
										return /* @__PURE__ */ jsxs("div", {
											className: "w-40 shrink-0 rounded-md border border-border bg-muted/20 p-1.5",
											children: [isImageAttachment ? /* @__PURE__ */ jsx("img", {
												src: sdk.forConsole.storage.getFilePreview({
													bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
													fileId: attachmentId,
													height: 240,
													output: composerAvifSupported ? ImageFormat.Avif : void 0
												}),
												alt: attachmentName,
												onLoad: (event) => {
													const image = event.currentTarget;
													const orientation = image.naturalHeight > image.naturalWidth ? "portrait" : "landscape";
													setComposerImageOrientations((previous) => previous[attachmentId] === orientation ? previous : {
														...previous,
														[attachmentId]: orientation
													});
												},
												className: cn("mb-1 w-full rounded object-cover", getPreviewAspectClass(composerImageOrientations[attachmentId] === "portrait")),
												loading: "lazy"
											}) : /* @__PURE__ */ jsx("div", {
												className: "mb-1 flex aspect-video w-full items-center justify-center rounded bg-muted/40",
												children: /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4 text-muted-foreground" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-1.5",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ jsx("p", {
														className: "truncate text-[11px] font-medium text-foreground",
														title: attachmentName,
														children: attachmentDisplayName
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-muted-foreground",
														children: attachmentSize ?? t("Ready")
													})]
												}), /* @__PURE__ */ jsx("button", {
													type: "button",
													onClick: () => handleRemoveEditingAttachment(attachmentId),
													className: "rounded p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
													"aria-label": `${t("Remove")} ${attachmentName}`,
													children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
												})]
											})]
										}, attachmentId);
									})
								})
							}) : null,
							/* @__PURE__ */ jsxs("div", {
								className: "overflow-hidden rounded-md border border-border bg-card",
								children: [
									messageQueue.length > 0 ? /* @__PURE__ */ jsxs("div", {
										className: "border-b border-border",
										children: [/* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setMessageQueueExpanded((current) => !current),
											className: "flex w-full items-center gap-1.5 px-2.5 py-1.5 text-start text-[12px] text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground",
											children: [
												messageQueueExpanded ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 shrink-0" }),
												/* @__PURE__ */ jsx("span", {
													className: "tabular-nums font-medium text-foreground",
													children: messageQueue.length
												}),
												/* @__PURE__ */ jsx("span", { children: t("Queued") })
											]
										}), messageQueueExpanded ? /* @__PURE__ */ jsx("div", {
											className: "pb-1",
											children: messageQueue.map((queued, index) => {
												const queueNumber = index + 1 + (isConversationRunning ? 1 : 0);
												return /* @__PURE__ */ jsxs("div", {
													className: "group/queue flex items-center gap-2 px-2.5 py-1 hover:bg-muted/30",
													children: [
														/* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 shrink-0 text-muted-foreground/70" }),
														/* @__PURE__ */ jsx("span", {
															className: "w-4 shrink-0 text-[11px] tabular-nums text-muted-foreground",
															children: queueNumber
														}),
														/* @__PURE__ */ jsx("p", {
															className: "min-w-0 flex-1 truncate text-[12px] text-foreground",
															children: queued.content
														}),
														queued.attachmentIds.length > 0 ? /* @__PURE__ */ jsxs("span", {
															className: "inline-flex shrink-0 items-center gap-0.5 text-[10px] text-muted-foreground",
															title: t("Attachment"),
															children: [/* @__PURE__ */ jsx(Paperclip, { className: "h-3 w-3" }), queued.attachmentIds.length]
														}) : null,
														/* @__PURE__ */ jsxs("div", {
															className: "flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover/queue:opacity-100 group-focus-within/queue:opacity-100",
															children: [
																/* @__PURE__ */ jsx("button", {
																	type: "button",
																	onClick: () => handleEditQueuedMessage(queued.id),
																	className: "rounded p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
																	"aria-label": t("Edit queued message"),
																	title: t("Edit queued message"),
																	children: /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3" })
																}),
																/* @__PURE__ */ jsx("button", {
																	type: "button",
																	onClick: () => handlePromoteQueuedMessage(queued.id),
																	disabled: index === 0,
																	className: "rounded p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30",
																	"aria-label": t("Send next"),
																	title: t("Send next"),
																	children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3" })
																}),
																/* @__PURE__ */ jsx("button", {
																	type: "button",
																	onClick: () => handleRemoveQueuedMessage(queued.id),
																	className: "rounded p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
																	"aria-label": t("Remove from queue"),
																	title: t("Remove from queue"),
																	children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" })
																})
															]
														})
													]
												}, queued.id);
											})
										}) : null]
									}) : null,
									pendingAttachments.length > 0 ? /* @__PURE__ */ jsx("div", {
										className: "border-b border-border px-2 py-2",
										children: /* @__PURE__ */ jsx("div", {
											className: "overflow-x-auto",
											children: /* @__PURE__ */ jsx("div", {
												className: "flex min-w-max flex-nowrap gap-1.5",
												children: orderedPendingAttachments.map((attachment) => /* @__PURE__ */ jsxs("div", {
													className: "w-40 shrink-0 rounded-md border border-border bg-muted/20 p-1.5",
													children: [attachment.mimeType.startsWith("image/") && attachment.fileId ? /* @__PURE__ */ jsx("img", {
														src: sdk.forConsole.storage.getFilePreview({
															bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
															fileId: attachment.fileId,
															height: 240,
															output: composerAvifSupported ? ImageFormat.Avif : void 0
														}),
														alt: attachment.name,
														onLoad: (event) => {
															const image = event.currentTarget;
															const orientation = image.naturalHeight > image.naturalWidth ? "portrait" : "landscape";
															setComposerImageOrientations((previous) => previous[attachment.localId] === orientation ? previous : {
																...previous,
																[attachment.localId]: orientation
															});
														},
														className: cn("mb-1 w-full rounded object-cover", getPreviewAspectClass(composerImageOrientations[attachment.localId] === "portrait")),
														loading: "lazy"
													}) : /* @__PURE__ */ jsx("div", {
														className: "mb-1 flex aspect-video w-full items-center justify-center rounded bg-muted/40",
														children: /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4 text-muted-foreground" })
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-start gap-1.5",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ jsx("p", {
																className: "truncate text-[11px] font-medium text-foreground",
																title: attachment.name,
																children: formatAttachmentDisplayName(attachment.name)
															}), /* @__PURE__ */ jsx("p", {
																className: "text-[10px] text-muted-foreground",
																children: attachment.status === "uploading" ? t("Uploading...") : attachment.status === "failed" ? t("Upload failed") : formatAttachmentSize(attachment.size) ?? t("Ready")
															})]
														}), /* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: () => handleRemoveAttachment(attachment.localId),
															className: "rounded p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
															"aria-label": `${t("Remove")} ${attachment.name}`,
															children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
														})]
													})]
												}, attachment.localId))
											})
										})
									}) : null,
									restoredQueueAttachmentIds.length > 0 ? /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 border-b border-border px-2.5 py-1.5 text-[11px] text-muted-foreground",
										children: [
											/* @__PURE__ */ jsx(Paperclip, { className: "h-3 w-3 shrink-0" }),
											/* @__PURE__ */ jsxs("span", {
												className: "min-w-0 flex-1 truncate",
												children: [
													restoredQueueAttachmentIds.length,
													" ",
													t("Attachment")
												]
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => setRestoredQueueAttachmentIds([]),
												className: "rounded p-0.5 transition-colors hover:bg-accent hover:text-foreground",
												"aria-label": t("Remove"),
												children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
											})
										]
									}) : null,
									isVoiceListening ? /* @__PURE__ */ jsx(VoiceRecordingMeter, {
										active: isVoiceListening,
										getLevels: getVoiceLevels,
										countdownSeconds: voiceSubmitCountdown,
										onCancelCountdown: handleCancelVoiceSubmitCountdown
									}) : null,
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-end gap-2 p-2",
										children: [
											/* @__PURE__ */ jsx("input", {
												ref: fileInputRef,
												type: "file",
												multiple: true,
												className: "hidden",
												onChange: handleAttachmentFileChange
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "relative max-h-32 min-h-10 flex-1",
												children: [voiceSubmitTriggerRange ? /* @__PURE__ */ jsxs("div", {
													ref: voiceTriggerHighlightRef,
													"aria-hidden": true,
													dir: isInputRtl ? "rtl" : "ltr",
													className: "pointer-events-none absolute inset-0 overflow-hidden whitespace-pre-wrap break-words px-2 py-2.5 text-[13px] leading-5 text-foreground",
													children: [
														input.slice(0, voiceSubmitTriggerRange.start),
														/* @__PURE__ */ jsx("mark", {
															className: VOICE_SUBMIT_MARKER.mark,
															children: input.slice(voiceSubmitTriggerRange.start, voiceSubmitTriggerRange.end)
														}),
														input.slice(voiceSubmitTriggerRange.end)
													]
												}) : null, /* @__PURE__ */ jsx("textarea", {
													ref: inputRef,
													value: input,
													onChange: (e) => {
														if (interactionsDisabled) return;
														const nextValue = e.target.value;
														setInput(nextValue);
														if (!editingMessageId && !skipDraftPersistRef.current) writeComposerDraft(activeConversationId, nextValue);
														if (messages.length === 0) registerTypingKeystroke();
													},
													onPaste: interactionsDisabled ? void 0 : handleInputPaste,
													onKeyDown: interactionsDisabled ? void 0 : handleKeyDown,
													onScroll: (e) => {
														const highlight = voiceTriggerHighlightRef.current;
														if (!highlight) return;
														highlight.scrollTop = e.currentTarget.scrollTop;
														highlight.scrollLeft = e.currentTarget.scrollLeft;
													},
													placeholder: interactionsDisabled ? t("Sign in to chat with the agent...") : isVoiceListening ? t("Listening...") : editingMessageId ? t("Edit message...") : isConversationRunning || messageQueue.length > 0 ? t("Add a follow-up") : t("Ask anything..."),
													dir: isInputRtl ? "rtl" : "ltr",
													rows: 1,
													disabled: interactionsDisabled,
													title: `${t("Focus prompt")} (${focusComposerShortcutLabel})`,
													className: cn("max-h-32 min-h-10 w-full resize-none bg-transparent px-2 py-2.5 text-[13px] leading-5 placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-60", voiceSubmitTriggerRange ? "caret-foreground text-transparent" : "text-foreground"),
													style: {
														height: "40px",
														minHeight: "40px"
													},
													onInput: (e) => {
														const target = e.target;
														target.style.height = "40px";
														target.style.height = `${Math.min(Math.max(target.scrollHeight, 40), 128)}px`;
													}
												})]
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: handleAttachmentInputClick,
												disabled: interactionsDisabled || isWaitingForAttachments || Boolean(editingMessageId) || isVoiceListening,
												className: cn("mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors", interactionsDisabled || isWaitingForAttachments || editingMessageId || isVoiceListening ? "bg-muted text-muted-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
												"aria-label": t("Attach files"),
												...analyticsAttrs("agent-attach"),
												children: /* @__PURE__ */ jsx(Paperclip, { className: "h-3.5 w-3.5" })
											}),
											voiceSupported ? /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => void handleToggleVoiceInput(),
												disabled: interactionsDisabled || isVoiceStarting,
												className: cn("mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors", interactionsDisabled || isVoiceStarting ? "bg-muted text-muted-foreground" : isVoiceListening ? "bg-primary/10 text-primary hover:bg-primary/15" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
												"aria-label": isVoiceListening ? t("Stop voice input") : t("Voice input"),
												"aria-pressed": isVoiceListening,
												...analyticsAttrs("agent-voice"),
												children: isVoiceStarting ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : isVoiceListening ? /* @__PURE__ */ jsx(MicOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Mic, { className: "h-3.5 w-3.5" })
											}) : null,
											isConversationRunning ? /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => void handleStopConversation(),
												disabled: interactionsDisabled || updateConversationMutation.isPending,
												className: "mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors hover:bg-accent disabled:bg-muted disabled:text-muted-foreground",
												"aria-label": t("Stop"),
												...analyticsAttrs("agent-stop"),
												children: updateConversationMutation.isPending ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Square, { className: "h-3.5 w-3.5 fill-current" })
											}) : null,
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => void handleSend(),
												disabled: interactionsDisabled || !canSendComposerContent || isWaitingForAttachments || Boolean(editingMessageId && isConversationRunning) || !isConversationRunning && !canSendWhileIdle,
												className: cn("mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors", !interactionsDisabled && canSendComposerContent && !isWaitingForAttachments && !(editingMessageId && isConversationRunning) && (isConversationRunning || canSendWhileIdle) ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-muted-foreground"),
												"aria-label": isConversationRunning ? t("Add to queue") : t("Send"),
												...analyticsAttrs("agent-send"),
												children: createMessageMutation.isPending || updateMessageMutation.isPending || isWaitingForAttachments || hasUploadingAttachments ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "h-3.5 w-3.5" })
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex min-h-9 items-center gap-1 border-t border-border px-1.5 py-1",
										children: [/* @__PURE__ */ jsx(AgentModelPicker, {
											value: selectedModelId,
											onChange: (modelId) => {
												handleSelectModel(modelId);
											},
											disabled: interactionsDisabled,
											onManageModels: interactionsDisabled ? void 0 : () => navigateToSettings("models")
										}), /* @__PURE__ */ jsx(AgentProjectPicker, {
											organizationId: organizationId ?? pageOrgId,
											value: contextProjectId || "",
											onChange: setSelectedContextProjectId,
											disabled: interactionsDisabled
										})]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1.5 text-center text-[11px] text-muted-foreground",
								children: isVoiceListening ? voiceSubmitCountdown != null ? t("Sending soon. Cancel to keep editing") : t("Listening... Say \"submit now\" to submit") : hasUploadingAttachments ? t("Attachments upload in background. Sending waits until they are ready.") : isConversationRunning ? t("Press Enter to queue, Shift+Enter for new line") : t("Press Enter to send, Shift+Enter for new line")
							})
						]
					})
				})]
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 w-full min-w-0 flex-col bg-background",
		children: [
			wrapWithConversationsSidebar(isAutomationsSection && !(Boolean(activeConversationId) && Boolean(activeAutomationId)) ? automationsMain : chatMain),
			/* @__PURE__ */ jsx(AgentModelDrawer, {
				open: isModelEditorOpen,
				onOpenChange: (open) => {
					if (!open) closeModelEditor();
				},
				model: modelEditor.mode === "edit" ? modelEditor.model : null,
				disabled: interactionsDisabled,
				onSaved: (model) => {
					if (model?.$id) setSelectedModelId(model.$id);
				}
			}),
			/* @__PURE__ */ jsx(AgentAutomationDrawer, {
				open: automationEditor.mode === "create",
				onOpenChange: (open) => {
					if (!open) closeAutomationEditor();
				},
				automation: null,
				disabled: interactionsDisabled,
				resolveProjectId: resolveConversationProjectId,
				onAddModel: openModelCreate,
				onSaved: (saved) => {
					setAutomationEditor({ mode: "closed" });
					setPendingPaneAutomationId(null);
					if (!saved?.$id) {
						navigateToAutomations({ mode: "list" });
						return;
					}
					navigateToAutomations({
						mode: "detail",
						automationId: saved.$id
					}, { replace: true });
				}
			}),
			activeConversationId && activeConversation ? /* @__PURE__ */ jsx(AgentRenameDialog, {
				open: headerRenameOpen,
				onOpenChange: setHeaderRenameOpen,
				title: activeConversation.title || t("Untitled agent"),
				onRename: (title) => handleRenameConversation(activeConversationId, title)
			}) : null
		]
	});
}
function makeConversationTitle(text) {
	const cleanText = text.trim().replace(/\s+/g, " ");
	if (!cleanText) return "New agent";
	return cleanText.length > 42 ? `${cleanText.slice(0, 42)}...` : cleanText;
}
function getMessageAttachments(message) {
	const attachments = message.attachments;
	if (!Array.isArray(attachments)) return [];
	return attachments.filter((attachment) => typeof attachment === "string" && attachment.length > 0);
}
function buildAssistantRealtimeChannels(scopes) {
	const channels = new Set(["console"]);
	if (scopes.projectId) channels.add(`projects.${scopes.projectId}`);
	if (scopes.organizationId) channels.add(`teams.${scopes.organizationId}`);
	if (scopes.accountId) channels.add(`account.${scopes.accountId}`);
	return [...channels];
}
export { resolveFaviconHref as C, isStatusFaviconVariant as S, usesThemeAwareFaviconHost as T, applyFaviconVariant as _, useFavicon as a, getFaviconStatus as b, AGENT_TOGGLE_SHORTCUT_RAW as c, useDebugMcpEndpoint as d, ConsoleRightPaneProvider as f, applyFaviconHref as g, FAVICON_VARIANT_LABELS as h, useIsMarketingPage as i, ShortcutGlyph as l, FAVICON_SOURCE_LABELS as m, AgentPanelContent as n, registerCommandCenterOpener as o, useConsoleRightPane as p, useAgentChat as r, AGENT_SHORTCUTS as s, AgentChatProvider as t, ShortcutGlyphs as u, formatFaviconStatusSummary as v, subscribeFaviconStatus as w, isBlueFaviconVariant as x, getDefaultFaviconVariant as y };
