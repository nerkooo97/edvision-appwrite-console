import { i as isResolvedThemeDarkChrome, r as isHtmlDarkChrome, t as getConsoleHeaderLogoClass } from "./html-theme-zz5wyKPq.js";
import { a as truncateMiddle, t as cn } from "./utils-DoqqkI3X.js";
import { A as initSentryClient, G as canTrackAnalytics, K as setCookieConsentState, O as getConsoleAccountUnauthenticatedError, T as readConsoleImpersonationOperatorSnapshot, b as getConsoleAccountQueryRevision, d as sdk, g as getConsoleAccountFromSingleton, n as clearConsoleImpersonateUser, t as applyConsoleImpersonateUserId, w as persistConsoleImpersonationSession, x as hardNavigateToAccountAfterImpersonation, y as clearConsoleImpersonationSession } from "./sdk-DjIJ_hjn.js";
import { d as subscribeToDebugOverrides, f as useDebugOverrides, r as useI18n, s as loadDebugOverrides } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as isHttpPaymentRequiredError, l as isHttpProjectAccessError } from "./error-formatting-CL2hjGy5.js";
import { $t as applyScreenshotModeAccount, I as isOrganizationBillingReadonlyStatus, Mt as useOrganizationPlan, Pt as useOrganizationScopes, U as organizationProjectScopeQueryOptions, kt as useOrganizationFailedInvoicePresence, pn as FULL_ACCESS, sn as getCanonicalPlanDisplayLabel } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Bd as storageHomeNavigation, Bv as useProjectTeams, Fd as useProjectBuckets, J_ as USERS_DEFAULT_SORT_ORDER, Rd as isStoragePlaceholderBucketId, Vo as useRegions, Vs as localeQueryOptions, Vv as useProjectUsers, a as useConsoleNotifications, as as providersQueryOptions, by as computeOnboardingProgress, cs as topicsQueryOptions, ds as useProjectMessages, fs as useProjectProviders, hv as teamsQueryOptions, jo as useAppwriteCloudStatus, my as useProjectOnboardingSnapshot, o as useMarkAllConsoleNotificationsRead, ps as useProjectTopics, q_ as USERS_DEFAULT_SORT_BY, s as useUpdateConsoleNotificationRead, ts as messagesQueryOptions, uy as usersQueryOptions, xy as getAtomicOnboardingStepCount, yd as bucketsQueryOptions } from "./hooks-BONwG3Mt.js";
import { At as parsePinnedProjectIds, Ct as resolvePostAuthRedirect, Ii as writeRecentImpersonationSessionList, Ur as mergeRecentImpersonationLists, dr as appendRecentImpersonationUser, gi as parseRecentImpersonationUsers, go as useConsoleTeam, h as isConsoleAccountQuerySettled, m as getConsoleAccountFromCache, p as flushRecentImpersonationUsersToAccountPrefs, tt as useSidebarCollapsed, uo as consoleTeamQueryOptions, wi as readRecentImpersonationSessionList, yo as useTeams } from "./auth-BPuxYQAc.js";
import { H as useProjectsForTeam, M as useCreateProject, O as projectsForTeamInfiniteQueryKey, R as useProject, S as pinnedProjectsQueryOptions, U as useProjectsForTeamInfinite, _ as formatProjectNameForDisplay, a as PROJECT_NAME_MAX_LENGTH, n as PROJECT_NAME_DISPLAY_MAX_COMPACT, r as PROJECT_NAME_DISPLAY_MAX_SELECTOR, u as fetchActiveProjects } from "./projects-BaTJenfQ.js";
import { t as buildAttributePrefixSearchQueries } from "./appwrite-id-L15yEGeF.js";
import { Ct as useProjectConsoleDatabases, c as consoleDatabasesQueryOptions } from "./databases-Dh0pwZ6h.js";
import { a as isDatabaseRouteKind, g as isPostgresEngine, h as isMysqlEngine, m as isMongoEngine } from "./database-routes-DB_xKWuY.js";
import { Tr as useProjectFunctions, hn as useProjectSites, in as sitesQueryOptions, lr as functionsQueryOptions } from "./affiliates-BOg1SHC6.js";
import { t as MARKETING_SOCIAL_STATS } from "./social-stats-X1CQqP0k.js";
import { c as AGENT_TOGGLE_SHORTCUT_RAW, l as ShortcutGlyph, o as registerCommandCenterOpener, r as useAgentChat, s as AGENT_SHORTCUTS, u as ShortcutGlyphs } from "./AgentChat-DNlva4IH.js";
import { i as isLegacyThemeFromStorage, n as LEGACY_LOGO_SRC, r as isLegacyTheme, t as LEGACY_ICON_SRC } from "./legacy-theme-assets-f00JZBAw.js";
import { n as useDebugMode } from "./DebugMode-DFSPYy81.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, o as SelectSeparator, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as getMarketingProductAnalyticsAction, c as getSidebarNavAnalyticsAction, n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow } from "./context-menu-D55xedo-.js";
import { i as useNavigationHistorySafe } from "./WizardLayout-DWqXFGuX.js";
import { i as ConsoleImpersonationBanner, n as isOptionalAuthPage, r as useAuth } from "./RequireAuth-DahioVQe.js";
import { s as isAgentPagePath } from "./agent-paths-CTRM_FvO.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, s as CommandSeparator, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, o as DropdownMenuLabel, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { a as SheetHeader, c as OFFCANVAS_START_CLOSED, l as SIDEBAR_EDGE_TOGGLE_OVERFLOW, n as SheetClose, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-CbM5lIV1.js";
import { n as usePlatform, r as useSequentialShortcuts, t as useKeyboardShortcut } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { a as mergeShortcutGroups, c as THEME_SYSTEM_SHORTCUT_RAW, i as formatDisplayKeys, l as useThemeShortcuts, n as buildShortcutRefGroup, o as THEME_DARK_SHORTCUT_RAW, r as dedupeShortcutGroups, s as THEME_LIGHT_SHORTCUT_RAW, t as buildShortcutGroups } from "./display-DbRQIyxk.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { n as navigateToUpgradeWizard } from "./upgrade-curtain-D427ml_E.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { n as DatabaseTypeIcon, r as getDatabaseTypeDisplayLabel } from "./DatabaseTypeIcon-CqLDDPFP.js";
import { i as isConsoleDocsPreviewPath, s as useDocsPreview } from "./DocsRouteLink-cLPNKZ9F.js";
import { a as getMarketingPageUrl, c as isBlogPageExternal, d as isProductPageExternal, i as getDocsPageUrlFromSlug, n as getBlogPageUrl, o as getProductPageUrl, r as getDocsPageUrl, u as isMarketingPageExternal } from "./urls-BIlyr2O2.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { f as CLI_SHELL_CONSOLE_SHORTCUTS, h as CLI_TERMINAL_INPUT_SHORTCUTS, m as CLI_SHELL_TOGGLE_SHORTCUT_RAW, n as useProjectConnectDialog, s as useCliShellOptional } from "./ProjectConnectDialogContext-DgcmISfV.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as Separator } from "./separator-B2hXZdKL.js";
import { A as canShowGetStartedSection, B as canShowProjectTerminal, C as canSeeProjects, D as canShowConnectSection, F as canShowOrgMarketplaceTab, I as canShowOrgOAuthAppsSettings, J as canWriteTopics, L as canShowOrgSettingsTab, M as canShowOrgBillingNav, N as canShowOrgComplianceNav, P as canShowOrgDomainsTab, R as canShowProjectOAuth2Server, S as canSeeProjectNavItem, T as canShowAuthSecuritySettings, _ as canCreateUser, a as canAccessOrgSettingsMembers, c as canCreateDatabase, g as canCreateTeam, h as canCreateSite, j as canShowOrgApiKeysSettings, l as canCreateFunction, o as canAccessOrgSettingsOverview, p as canCreateProject, q as canWriteRules, s as canCreateBucket, v as canInviteOrgMember, w as canSeeUsageNav, x as canSeeActivityNav, z as canShowProjectSettings } from "./console-access-checks-BTMEOKcL.js";
import { n as PLAUSIBLE_SCRIPT_SRC, t as PLAUSIBLE_INIT_SCRIPT } from "./analytics-C_KnVoso.js";
import { i as isAgentDocsSlug, t as isAgentDocsEnabled } from "./agent-docs-feature-COYbd_m1.js";
import { d as isFirewallDocsSlug, i as getDocsAudienceFromSlug, l as isFirewallDocsEnabled, n as isDocsNavGroup, o as getDocsGlobalNav, s as getAllDocsSectionNavs } from "./navigation-BOrhbgOp.js";
import { r as isPartnersDocsSlug, t as isPartnersDocsEnabled } from "./partners-docs-feature-C-dnxcxd.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as DOCS_PAGE_MAP } from "./manifest-THOJt7eC.js";
import { i as resolveInitHeaderNavCta } from "./events-s0i9XY3r.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import { n as isPostgresSqlEditorPath, o as registerPostgresSqlJumpToTabPicker, s as usePostgresSqlEditorActions, t as getPostgresSqlEditorActions } from "./postgres-sql-editor-actions-C3EmLCXJ.js";
import { a as POSTGRES_SQL_EXPLAIN_SHORTCUT_RAW, b as POSTGRES_SQL_SAVE_SHORTCUT_RAW, d as POSTGRES_SQL_NEW_TAB_SHORTCUT_RAW, g as POSTGRES_SQL_REDO_SHORTCUT_RAW, h as POSTGRES_SQL_PREV_TAB_SHORTCUT_RAW, l as POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW, n as POSTGRES_SQL_CLOSE_TAB_SHORTCUT_RAW, p as POSTGRES_SQL_NEXT_TAB_SHORTCUT_RAW, r as POSTGRES_SQL_EDITOR_SHORTCUTS, s as POSTGRES_SQL_FORMAT_SHORTCUT_RAW, v as POSTGRES_SQL_RUN_SHORTCUT_RAW, x as POSTGRES_SQL_UNDO_SHORTCUT_RAW } from "./postgres-sql-editor-shortcuts-CXAI529H.js";
import { n as isMysqlSqlEditorPath, t as getMysqlSqlEditorActions } from "./mysql-sql-editor-actions-Bp-OLXJY.js";
import { _ as MYSQL_SQL_RUN_SHORTCUT_RAW, b as MYSQL_SQL_UNDO_SHORTCUT_RAW, c as MYSQL_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW, f as MYSQL_SQL_NEXT_TAB_SHORTCUT_RAW, h as MYSQL_SQL_REDO_SHORTCUT_RAW, i as MYSQL_SQL_EXPLAIN_SHORTCUT_RAW, m as MYSQL_SQL_PREV_TAB_SHORTCUT_RAW, n as MYSQL_SQL_CLOSE_TAB_SHORTCUT_RAW, o as MYSQL_SQL_FORMAT_SHORTCUT_RAW, u as MYSQL_SQL_NEW_TAB_SHORTCUT_RAW, y as MYSQL_SQL_SAVE_SHORTCUT_RAW } from "./mysql-sql-editor-shortcuts-vHKpSCi0.js";
import { t as useConfirmedOffline } from "./network-connectivity-D-2A27IF.js";
import { c as setInitialLoaderShellGate, n as isOperatorAccount, r as INITIAL_LOADER_SHELL_GATE, s as resetInitialLoaderShellGate, t as CloudStatusBanner } from "./CloudStatusBanner-CLph43RA.js";
import { n as formatDateMonthYear } from "./date-utils-C_g8GS8c.js";
import { r as getPlanBadgeColor$1 } from "./status-badge-_8W34wot.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import { t as useIsMobile } from "./use-mobile-C9thwzsE.js";
import { r as submitFeedback, t as FEEDBACK_CUSTOM_FIELDS } from "./feedback-BwuMSGir.js";
import { n as getSupportHoursInLocalTime } from "./support-BA-5OzxM.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { t as CloudMarkIcon } from "./CloudMarkIcon-ChnstmGW.js";
import { n as CHANGELOG_SEEN_UPDATED_EVENT, r as isChangelogNavBadgeVisible, t as CHANGELOG_SEEN_COUNT_KEY } from "./nav-badge-CqWauT26.js";
import { a as isProductId, r as PRODUCT_NAV_REGISTRY, t as MARKETING_PRODUCT_NAV_CATEGORIES } from "./registry-C4rxXMsK.js";
import { a as SECONDARY_SIDEBAR_NAV_LINK_COLLAPSED_CLASS, c as SECONDARY_SIDEBAR_NAV_LINK_LABEL_CLASS, l as secondarySidebarNavLinkClassName, o as SECONDARY_SIDEBAR_NAV_LINK_GRID_CLASS, r as SECONDARY_SIDEBAR_GROUP_HEADING_CLASS, s as SECONDARY_SIDEBAR_NAV_LINK_GRID_TRAILING_CLASS } from "./secondary-sidebar-nav-F3D8GuLT.js";
import { t as getFooterPolicyLinks } from "./policies-DpEX8qSM.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { AppwriteException, Query } from "@appwrite.io/console";
import { keepPreviousData, queryOptions, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Activity, AlertCircle, AlertOctagon, AlertTriangle, ArrowLeft, ArrowRight, ArrowRightLeft, ArrowUpCircle, BarChart2, BarChart3, Bell, BookOpen, Bookmark, BotMessageSquare, Braces, Building2, Check, CheckCheck, ChevronDown, ChevronLeft, ChevronRight, Clock, Code, Cog, Contrast, Cookie, Copy, CreditCard, Database, DatabaseZap, ExternalLink, Eye, FileText, Fingerprint, Folder, FolderOpen, FolderPlus, Globe, Headphones, History, Home, Info, Key, KeyRound, Keyboard, Layers, LayoutDashboard, ListTree, Loader2, LogOut, Mail, MapPin, Megaphone, Menu, MessageCircle, MessageSquare, MessageSquarePlus, Moon, Package, PanelTop, Pin, Play, Plug, Plug2, Plus, Radio, Redo2, ScanSearch, Search, Send, Server, Settings, Settings2, Shield, ShieldAlert, ShieldCheck, Sliders, Sparkles, Store, Sun, Tag, Terminal, Undo2, User, UserPlus, Users as Users$1, WifiOff, Wrench, X, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
var HUB_ONLY_MENU_SLUGS = new Set(["quick-starts", "tutorials"]);
function canShowDocsPreviewMenu(slug) {
	if (!slug) return false;
	if (HUB_ONLY_MENU_SLUGS.has(slug)) return true;
	return getAllDocsSectionNavs().some((config) => config.prefix === slug);
}
function resolveDocsPreviewView(slug, requested = "article") {
	if (requested === "menu") return "menu";
	if (HUB_ONLY_MENU_SLUGS.has(slug)) return "menu";
	return "article";
}
var PREVIEW_HUB_META = {
	"quick-starts": {
		title: "Quick start",
		description: "Get started with your favorite framework and language in just a few clicks."
	},
	tutorials: {
		title: "Tutorials",
		description: "Follow a simple tutorial to get started with Appwrite in your preferred framework quickly and easily."
	}
};
function getDocsPreviewMenuMeta(slug) {
	if (!canShowDocsPreviewMenu(slug)) return null;
	const hubMeta = PREVIEW_HUB_META[slug];
	if (hubMeta) return hubMeta;
	const config = getAllDocsSectionNavs().find((entry) => entry.prefix === slug);
	if (!config) return null;
	return { title: config.parent.label };
}
function slugToHref(slug) {
	return slug ? `/docs/${slug}` : "/docs";
}
function getSectionConfig(slug) {
	let best = null;
	for (const config of getAllDocsSectionNavs()) if (slug === config.prefix || slug.startsWith(`${config.prefix}/`)) {
		if (!best || config.prefix.length > best.prefix.length) best = config;
	}
	return best;
}
function findNavItem(navigation, href) {
	for (const node of navigation) if (isDocsNavGroup(node)) {
		for (const item of node.items) if (item.href === href) return {
			groupLabel: node.label,
			itemLabel: item.label
		};
	} else if (node.href === href) return { itemLabel: node.label };
	return null;
}
function getTitleForSlug(slug, pageMap) {
	return pageMap[slug]?.title ?? slug.split("/").pop()?.replace(/-/g, " ") ?? slug;
}
function formatDocsBreadcrumbs(breadcrumbs) {
	return breadcrumbs.join(" / ");
}
function menuViewForSlug(slug) {
	if (slug === null || slug === "") return void 0;
	return canShowDocsPreviewMenu(slug) ? "menu" : void 0;
}
const DOCS_HOME_BREADCRUMB = {
	label: "Docs",
	slug: ""
};
function hrefToDocsSlug(href) {
	if (href === "/docs" || href === "/docs/") return "";
	if (href.startsWith("/docs/")) return href.slice(6);
	return null;
}
function getGlobalNavRootItem(slug) {
	const href = slugToHref(slug);
	for (const group of getDocsGlobalNav(getDocsAudienceFromSlug(slug))) {
		if (!("items" in group)) continue;
		for (const item of group.items) {
			if (item.href === href) return {
				label: item.label,
				slug: hrefToDocsSlug(item.href)
			};
			if (item.isParent && href.startsWith(`${item.href}/`)) return {
				label: item.label,
				slug: hrefToDocsSlug(item.href)
			};
		}
	}
	return null;
}
function getGlobalNavItemBySlug(slug) {
	const href = slug ? `/docs/${slug}` : "/docs";
	for (const group of getDocsGlobalNav(getDocsAudienceFromSlug(slug))) {
		if (!("items" in group)) continue;
		for (const item of group.items) if (item.href === href) return {
			label: item.label,
			slug: hrefToDocsSlug(item.href)
		};
	}
	return null;
}
function getSectionMenuBreadcrumbItems(config) {
	const crumbs = [DOCS_HOME_BREADCRUMB];
	const parentSlug = hrefToDocsSlug(config.parent.href);
	if (parentSlug !== null && parentSlug !== "" && parentSlug !== config.prefix && canShowDocsPreviewMenu(parentSlug)) {
		const parentNav = getGlobalNavItemBySlug(parentSlug);
		crumbs.push({
			...parentNav ?? {
				label: config.parent.label,
				slug: parentSlug
			},
			view: "menu"
		});
	}
	crumbs.push({
		label: config.parent.label,
		slug: config.prefix,
		view: "menu"
	});
	return crumbs;
}
function appendSlugPathBreadcrumbItems(crumbs, prefix, slug, pageMap) {
	const relative = slug === prefix ? "" : prefix ? slug.slice(prefix.length + 1) : slug;
	if (!relative) {
		const item = {
			label: getTitleForSlug(slug, pageMap),
			slug
		};
		if (crumbs[crumbs.length - 1]?.slug === slug) return crumbs;
		return [...crumbs, item];
	}
	const next = [...crumbs];
	const segments = relative.split("/");
	let path = prefix;
	for (const segment of segments) {
		path = path ? `${path}/${segment}` : segment;
		next.push({
			label: getTitleForSlug(path, pageMap),
			slug: path
		});
	}
	return next;
}
function getDocsPageBreadcrumbItems(slug, pageMap = DOCS_PAGE_MAP, options) {
	if (!slug) return [DOCS_HOME_BREADCRUMB];
	if (options?.previewView === "menu" && canShowDocsPreviewMenu(slug)) {
		const config$1 = getAllDocsSectionNavs().find((entry) => entry.prefix === slug);
		if (config$1) return getSectionMenuBreadcrumbItems(config$1);
		const globalNav = getGlobalNavItemBySlug(slug);
		if (globalNav) return [DOCS_HOME_BREADCRUMB, {
			...globalNav,
			view: "menu"
		}];
	}
	const config = getSectionConfig(slug);
	const href = slugToHref(slug);
	let items;
	if (config) {
		const parentSlug = hrefToDocsSlug(config.parent.href);
		const parentCrumbSlug = parentSlug === "" ? config.prefix : parentSlug;
		const crumbs = [{
			label: config.parent.label,
			slug: parentCrumbSlug,
			view: menuViewForSlug(parentCrumbSlug)
		}];
		const navMatch = findNavItem(config.navigation, href);
		if (navMatch) {
			if (navMatch.groupLabel) crumbs.push({
				label: navMatch.groupLabel,
				slug: config.prefix,
				view: "menu"
			});
			crumbs.push({
				label: navMatch.itemLabel,
				slug
			});
			items = crumbs;
		} else items = appendSlugPathBreadcrumbItems(crumbs, config.prefix, slug, pageMap);
	} else {
		const crumbs = [];
		const globalRoot = getGlobalNavRootItem(slug);
		if (globalRoot) crumbs.push({
			...globalRoot,
			view: menuViewForSlug(globalRoot.slug)
		});
		items = appendSlugPathBreadcrumbItems(crumbs, globalRoot?.slug ?? "", slug, pageMap).filter((item) => item.label);
	}
	if (items[0]?.label === DOCS_HOME_BREADCRUMB.label) return items;
	return [DOCS_HOME_BREADCRUMB, ...items];
}
const DEFAULT_GROUP_LABELS = {
	navigation: "Navigation",
	tab: "Tabs",
	card: "Settings & cards",
	create: "Create",
	action: "Actions"
};
var TOKEN_RE = /\s+/;
function normalize(s) {
	return (s ?? "").toLowerCase().trim();
}
function wordStartsWith(haystack, token) {
	if (!token) return false;
	if (haystack.startsWith(token)) return true;
	return (/* @__PURE__ */ new RegExp(`(^|[\\s\\-/\\._:])${escapeRegExp(token)}`)).test(haystack);
}
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function scoreToken(entry, token) {
	if (!token) return 0;
	const label = normalize(entry.label);
	const description = normalize(entry.description);
	const group = normalize(entry.group ?? DEFAULT_GROUP_LABELS[entry.kind]);
	const keywords = (entry.keywords ?? []).map(normalize);
	let best = 0;
	if (label === token) best = Math.max(best, 1e3);
	if (label.startsWith(token)) best = Math.max(best, 500);
	if (wordStartsWith(label, token)) best = Math.max(best, 350);
	if (label.includes(token)) best = Math.max(best, 200);
	for (const k of keywords) if (k === token) best = Math.max(best, 220);
	else if (k.startsWith(token)) best = Math.max(best, 160);
	else if (k.includes(token)) best = Math.max(best, 100);
	if (description) {
		if (wordStartsWith(description, token)) best = Math.max(best, 120);
		else if (description.includes(token)) best = Math.max(best, 60);
	}
	if (group.includes(token)) best = Math.max(best, 30);
	return best;
}
function searchCommands(query, entries$1) {
	const q = normalize(query);
	if (!q) return entries$1.map((entry) => ({
		entry,
		score: 0
	}));
	const tokens = q.split(TOKEN_RE).filter(Boolean);
	const results = [];
	for (const entry of entries$1) {
		let total = 0;
		let allMatched = true;
		for (const token of tokens) {
			const s = scoreToken(entry, token);
			if (s <= 0) {
				allMatched = false;
				break;
			}
			total += s;
		}
		if (!allMatched) continue;
		if (normalize(entry.label) === q) total += 500;
		results.push({
			entry,
			score: total
		});
	}
	results.sort((a, b) => {
		if (b.score !== a.score) return b.score - a.score;
		return a.entry.label.localeCompare(b.entry.label);
	});
	return results;
}
const PROJECT_RESOURCE_KIND_LABELS = {
	database: "Database",
	user: "User",
	team: "Team",
	bucket: "Bucket",
	function: "Function",
	site: "Site",
	message: "Message",
	topic: "Topic",
	provider: "Provider"
};
var SCORE_ADAPTER = {
	kind: "action",
	scopes: ["project"]
};
function scoreResourceFields(query, label, description, keywords) {
	const trimmed = query.trim();
	if (!trimmed) return 0;
	return searchCommands(trimmed, [{
		id: "resource",
		label,
		description,
		keywords,
		...SCORE_ADAPTER
	}])[0]?.score ?? 0;
}
function rankResourceHits(query, hits, options) {
	const trimmed = query.trim();
	if (!trimmed) return [];
	const prefiltered = options?.prefiltered ?? false;
	return hits.map((hit) => {
		const score = scoreResourceFields(trimmed, hit.label, hit.description, [hit.kind, hit.resourceId]);
		return {
			...hit,
			score: prefiltered ? Math.max(score, 1) : score
		};
	}).filter((hit) => prefiltered || hit.score > 0).sort((a, b) => {
		if (b.score !== a.score) return b.score - a.score;
		return a.label.localeCompare(b.label);
	}).slice(0, 40);
}
function getMessageSearchLabel(message) {
	const data = message.data;
	if (message.providerType === "push" && data?.title) return String(data.title);
	if (message.providerType === "sms" && data?.content) return String(data.content);
	if (message.providerType === "email" && data?.subject) return String(data.subject);
	return message.$id;
}
var PREFILTERED = { prefiltered: true };
function buildDatabaseHits(query, databases) {
	return rankResourceHits(query, databases.map((db) => ({
		id: `db-${db.$id}`,
		kind: "database",
		label: db.name,
		description: db.$id,
		section: "databases",
		resourceId: db.$id
	})), PREFILTERED);
}
function buildUserHits(query, users) {
	return rankResourceHits(query, users.map((user) => ({
		id: `user-${user.$id}`,
		kind: "user",
		label: user.name || user.email || "Unknown user",
		description: user.email || user.$id,
		section: "auth/users",
		resourceId: user.$id
	})), PREFILTERED);
}
function buildTeamHits(query, teams) {
	return rankResourceHits(query, teams.map((team) => ({
		id: `team-${team.id}`,
		kind: "team",
		label: team.name,
		description: team.id,
		section: "auth/teams",
		resourceId: team.id
	})), PREFILTERED);
}
function buildBucketHits(query, buckets) {
	return rankResourceHits(query, buckets.map((bucket) => ({
		id: `bucket-${bucket.$id}`,
		kind: "bucket",
		label: bucket.name,
		description: bucket.$id,
		section: "storage",
		resourceId: bucket.$id
	})), PREFILTERED);
}
function buildFunctionHits(query, functions) {
	return rankResourceHits(query, functions.map((fn) => ({
		id: `fn-${fn.$id}`,
		kind: "function",
		label: fn.name,
		description: fn.runtime || fn.$id,
		section: "functions",
		resourceId: fn.$id
	})), PREFILTERED);
}
function buildSiteHits(query, sites) {
	return rankResourceHits(query, sites.map((site) => ({
		id: `site-${site.$id}`,
		kind: "site",
		label: site.name,
		description: site.$id,
		section: "sites",
		resourceId: site.$id
	})), PREFILTERED);
}
function buildMessageHits(query, messages) {
	return rankResourceHits(query, messages.map((message) => ({
		id: `message-${message.$id}`,
		kind: "message",
		label: getMessageSearchLabel(message),
		description: `${message.providerType} · ${message.$id}`,
		section: "messaging/messages",
		resourceId: message.$id
	})), PREFILTERED);
}
function buildTopicHits(query, topics) {
	return rankResourceHits(query, topics.map((topic) => ({
		id: `topic-${topic.$id}`,
		kind: "topic",
		label: topic.name,
		description: topic.$id,
		section: "messaging/topics",
		resourceId: topic.$id
	})), PREFILTERED);
}
function buildProviderHits(query, providers) {
	return rankResourceHits(query, providers.map((provider) => ({
		id: `provider-${provider.$id}`,
		kind: "provider",
		label: provider.name,
		description: `${provider.type} · ${provider.$id}`,
		section: "messaging/providers",
		resourceId: provider.$id
	})), PREFILTERED);
}
function mergeScoredResourceHits(groups) {
	const byId = /* @__PURE__ */ new Map();
	for (const group of groups) for (const hit of group) {
		const existing = byId.get(hit.id);
		if (!existing || hit.score > existing.score) byId.set(hit.id, hit);
	}
	return Array.from(byId.values()).sort((a, b) => {
		if (b.score !== a.score) return b.score - a.score;
		return a.label.localeCompare(b.label);
	}).slice(0, 40);
}
function searchCommandsWithScores(query, entries$1) {
	return searchCommands(query, entries$1.map((entry) => ({
		...entry,
		scopes: [
			"project",
			"organization",
			"account"
		]
	})));
}
const RECENT_RESOURCES_STORAGE_KEY = "console.recentResources";
const RECENT_RESOURCES_MAX_STORED = 10;
const RECENT_RESOURCES_MAX_SHOWN = 5;
var RESERVED_SEGMENTS = new Set([
	"create",
	"templates",
	"usage",
	"settings",
	"security",
	"activity",
	"domains",
	"deployments",
	"logs",
	"variables",
	"executions",
	"overview",
	"monitor",
	"backups",
	"connections",
	"visualizer",
	"sql",
	"export-import",
	"db-security",
	"db-settings",
	"browser"
]);
function resourceKey(projectId, kind, resourceId) {
	return `${projectId}:${kind}:${resourceId}`;
}
function named(value) {
	if (!value || typeof value !== "object") return void 0;
	const record = value;
	if (typeof record.name === "string" && record.name.trim()) return record.name.trim();
	if (typeof record.email === "string" && record.email.trim()) return record.email.trim();
}
function parseDatabaseIconHintsFromHref(href) {
	const parts = href.split("/").filter(Boolean);
	const databasesIndex = parts.indexOf("databases");
	if (databasesIndex === -1) return {};
	const segment = parts[databasesIndex + 1];
	if (!segment) return {};
	if (isPostgresEngine(segment)) return { engine: "postgres" };
	if (isMysqlEngine(segment)) return { engine: "mysql" };
	if (isMongoEngine(segment)) return { engine: "mongo" };
	if (isDatabaseRouteKind(segment)) return { apiType: segment };
	return {};
}
function findDedicatedDatabaseInCache(queryClient, projectId, resourceId) {
	const entries$1 = queryClient.getQueriesData({ queryKey: [
		"dedicated-databases",
		"project",
		projectId
	] });
	for (const [, data] of entries$1) {
		if (!data || typeof data !== "object") continue;
		const list = data.databases;
		if (!list) continue;
		const hit = list.find((item) => item.$id === resourceId);
		if (hit) return hit;
	}
}
function hintsFromDedicatedDatabase(db) {
	const api = db.api?.toLowerCase().trim() ?? "";
	if (api === "tablesdb" || api === "documentsdb" || api === "vectorsdb") return { apiType: api };
	const engine = db.engine?.toLowerCase().trim() ?? "";
	if (isPostgresEngine(engine)) return { engine: "postgres" };
	if (isMysqlEngine(engine)) return { engine: "mysql" };
	if (isMongoEngine(engine)) return { engine: "mongo" };
	if (engine) return { engine };
	return {};
}
function resolveRecentDatabaseIconHints(queryClient, ref) {
	if (ref.kind !== "database") return {};
	const fromHref = parseDatabaseIconHintsFromHref(ref.href);
	if (fromHref.apiType || fromHref.engine) return fromHref;
	const { projectId, resourceId } = ref;
	if (queryClient.getQueryData([
		"postgres-database",
		"project",
		projectId,
		resourceId
	])) return { engine: "postgres" };
	const dedicatedDb = findDedicatedDatabaseInCache(queryClient, projectId, resourceId);
	if (dedicatedDb) return hintsFromDedicatedDatabase(dedicatedDb);
	const productDb = queryClient.getQueryData([
		"database",
		"project",
		projectId,
		resourceId
	]);
	if (productDb?.type) return { apiType: String(productDb.type) };
	const apiTypeFromList = findInListCache(queryClient, [
		"databases",
		"project",
		projectId
	], (item) => item.$id === resourceId, (item) => item.type ? String(item.type) : void 0);
	if (apiTypeFromList) return { apiType: apiTypeFromList };
	return {};
}
function getRecentResourceDatabaseIconHints(entry) {
	if (entry.kind !== "database") return {};
	if (entry.databaseApiType || entry.databaseEngine) return {
		apiType: entry.databaseApiType,
		engine: entry.databaseEngine
	};
	return parseDatabaseIconHintsFromHref(entry.href);
}
function getSiteFrameworkFromModel(site) {
	if (!site || typeof site !== "object") return void 0;
	const record = site;
	for (const key of [
		"framework",
		"buildFramework",
		"buildFrameworkId"
	]) {
		const value = record[key];
		if (typeof value === "string" && value.trim()) return value.trim();
	}
}
function resolveRecentSiteFramework(queryClient, ref) {
	if (ref.kind !== "site") return void 0;
	const { projectId, resourceId } = ref;
	const fromDirect = getSiteFrameworkFromModel(queryClient.getQueryData([
		"site",
		"project",
		projectId,
		resourceId
	]));
	if (fromDirect) return fromDirect;
	return findInListCache(queryClient, [
		"sites",
		"project",
		projectId
	], (item) => item.$id === resourceId, (item) => getSiteFrameworkFromModel(item));
}
function getRecentResourceSiteFramework(entry) {
	if (entry.kind !== "site") return void 0;
	return entry.siteFramework;
}
function formatRecentDatabaseTypeLabel(hints) {
	if (!hints.apiType && !hints.engine) return null;
	return getDatabaseTypeDisplayLabel(hints.apiType, hints.engine);
}
function getRecentResourceBreadcrumbs(entry) {
	if (entry.kind !== "database") return entry.breadcrumbs;
	const typeLabel = formatRecentDatabaseTypeLabel(getRecentResourceDatabaseIconHints(entry));
	return typeLabel ? [typeLabel] : entry.breadcrumbs;
}
function findInListCache(queryClient, queryKeyPrefix, match, pick) {
	const entries$1 = queryClient.getQueriesData({ queryKey: queryKeyPrefix });
	for (const [, data] of entries$1) {
		if (!data || typeof data !== "object") continue;
		const list = data.buckets ?? data.databases ?? data.users ?? data.teams ?? data.functions ?? data.sites ?? data.messages ?? data.topics ?? data.providers ?? (Array.isArray(data) ? data : void 0);
		if (!list) continue;
		const hit = list.find(match);
		if (hit) {
			const label = pick(hit);
			if (label) return label;
		}
	}
}
function parseRecentResourceRef(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts[0] !== "projects" || !parts[1]) return null;
	let projectId;
	try {
		projectId = decodeURIComponent(parts[1]);
	} catch {
		return null;
	}
	const service = parts[2];
	if (!service) return null;
	if (service === "storage" && parts[3]) {
		const bucketId = safeDecode(parts[3]);
		if (!bucketId || isStoragePlaceholderBucketId(bucketId)) return null;
		if (RESERVED_SEGMENTS.has(bucketId)) return null;
		return {
			projectId,
			kind: "bucket",
			section: "storage",
			resourceId: bucketId,
			href: `/projects/${projectId}/storage/${bucketId}`,
			breadcrumbs: ["Storage"]
		};
	}
	if (service === "functions" && parts[3]) {
		const functionId = safeDecode(parts[3]);
		if (!functionId || RESERVED_SEGMENTS.has(functionId)) return null;
		return {
			projectId,
			kind: "function",
			section: "functions",
			resourceId: functionId,
			href: `/projects/${projectId}/functions/${functionId}`,
			breadcrumbs: ["Functions"]
		};
	}
	if (service === "sites" && parts[3]) {
		const siteId = safeDecode(parts[3]);
		if (!siteId || RESERVED_SEGMENTS.has(siteId)) return null;
		return {
			projectId,
			kind: "site",
			section: "sites",
			resourceId: siteId,
			href: `/projects/${projectId}/sites/${siteId}`,
			breadcrumbs: ["Sites"]
		};
	}
	if (service === "auth" && parts[3] === "users" && parts[4]) {
		const userId = safeDecode(parts[4]);
		if (!userId || RESERVED_SEGMENTS.has(userId)) return null;
		return {
			projectId,
			kind: "user",
			section: "auth/users",
			resourceId: userId,
			href: `/projects/${projectId}/auth/users/${userId}`,
			breadcrumbs: ["Auth", "Users"]
		};
	}
	if (service === "auth" && parts[3] === "teams" && parts[4]) {
		const teamId = safeDecode(parts[4]);
		if (!teamId || RESERVED_SEGMENTS.has(teamId)) return null;
		return {
			projectId,
			kind: "team",
			section: "auth/teams",
			resourceId: teamId,
			href: `/projects/${projectId}/auth/teams/${teamId}`,
			breadcrumbs: ["Auth", "Teams"]
		};
	}
	if (service === "messaging" && parts[3] === "topics" && parts[4]) {
		const topicId = safeDecode(parts[4]);
		if (!topicId || RESERVED_SEGMENTS.has(topicId)) return null;
		return {
			projectId,
			kind: "topic",
			section: "messaging/topics",
			resourceId: topicId,
			href: `/projects/${projectId}/messaging/topics/${topicId}`,
			breadcrumbs: ["Messaging", "Topics"]
		};
	}
	if (service === "messaging" && parts[3] === "providers" && parts[4]) {
		const providerId = safeDecode(parts[4]);
		if (!providerId || RESERVED_SEGMENTS.has(providerId)) return null;
		return {
			projectId,
			kind: "provider",
			section: "messaging/providers",
			resourceId: providerId,
			href: `/projects/${projectId}/messaging/providers/${providerId}`,
			breadcrumbs: ["Messaging", "Providers"]
		};
	}
	if (service === "messaging" && parts[3]) {
		const messageId = safeDecode(parts[3]);
		if (!messageId || RESERVED_SEGMENTS.has(messageId) || messageId === "topics" || messageId === "providers") return null;
		return {
			projectId,
			kind: "message",
			section: "messaging/messages",
			resourceId: messageId,
			href: `/projects/${projectId}/messaging/${messageId}`,
			breadcrumbs: ["Messaging", "Messages"]
		};
	}
	if (service === "databases" && parts[3]) {
		const segment = safeDecode(parts[3]);
		if (!segment || RESERVED_SEGMENTS.has(segment) || segment === "create") return null;
		if (segment === "postgres" && parts[4]) {
			const databaseId = safeDecode(parts[4]);
			if (!databaseId || RESERVED_SEGMENTS.has(databaseId)) return null;
			return {
				projectId,
				kind: "database",
				section: "databases",
				resourceId: databaseId,
				href: `/projects/${projectId}/databases/postgres/${databaseId}`,
				breadcrumbs: ["Databases"]
			};
		}
		if (isDatabaseRouteKind(segment) && parts[4]) {
			const databaseId = safeDecode(parts[4]);
			if (!databaseId || RESERVED_SEGMENTS.has(databaseId)) return null;
			return {
				projectId,
				kind: "database",
				section: "databases",
				resourceId: databaseId,
				href: `/projects/${projectId}/databases/${segment}/${databaseId}`,
				breadcrumbs: ["Databases"]
			};
		}
		if (segment === "postgres" || isDatabaseRouteKind(segment)) return null;
		return {
			projectId,
			kind: "database",
			section: "databases",
			resourceId: segment,
			href: `/projects/${projectId}/databases/${segment}`,
			breadcrumbs: ["Databases"]
		};
	}
	return null;
}
function safeDecode(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return null;
	}
}
function resolveRecentResourceName(queryClient, ref) {
	const { projectId, kind, resourceId } = ref;
	switch (kind) {
		case "bucket": {
			const direct = named(queryClient.getQueryData([
				"bucket",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"buckets",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		case "function": {
			const direct = named(queryClient.getQueryData([
				"function",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"functions",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		case "site": {
			const direct = named(queryClient.getQueryData([
				"site",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"sites",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		case "user": {
			const direct = named(queryClient.getQueryData([
				"user",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"users",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name || item.email);
		}
		case "team": {
			const direct = named(queryClient.getQueryData([
				"team",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"teams",
				"project",
				projectId
			], (item) => item.id === resourceId || item.$id === resourceId, (item) => item.name);
		}
		case "message": {
			const message = queryClient.getQueryData([
				"message",
				"project",
				projectId,
				resourceId
			]);
			if (message) return getMessageSearchLabel(message);
			return findInListCache(queryClient, [
				"messages",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => getMessageSearchLabel(item));
		}
		case "topic": {
			const direct = named(queryClient.getQueryData([
				"topic",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"topics",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		case "provider": {
			const direct = named(queryClient.getQueryData([
				"provider",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"providers",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		case "database": {
			const direct = named(queryClient.getQueryData([
				"database",
				"project",
				projectId,
				resourceId
			])) ?? named(queryClient.getQueryData([
				"postgres-database",
				"project",
				projectId,
				resourceId
			]));
			if (direct) return direct;
			return findInListCache(queryClient, [
				"databases",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name) ?? findInListCache(queryClient, [
				"dedicated-databases",
				"project",
				projectId
			], (item) => item.$id === resourceId, (item) => item.name);
		}
		default: return;
	}
}
function buildRecentResource(ref, name, viewedAt = Date.now(), databaseIconHints = {}, siteFramework) {
	const databaseTypeLabel = ref.kind === "database" ? formatRecentDatabaseTypeLabel(databaseIconHints) : null;
	const breadcrumbs = ref.kind === "database" && databaseTypeLabel ? [databaseTypeLabel] : ref.breadcrumbs;
	return {
		key: resourceKey(ref.projectId, ref.kind, ref.resourceId),
		kind: ref.kind,
		name,
		breadcrumbs,
		projectId: ref.projectId,
		section: ref.section,
		resourceId: ref.resourceId,
		href: ref.href,
		viewedAt,
		...ref.kind === "database" && databaseIconHints.apiType ? { databaseApiType: databaseIconHints.apiType } : {},
		...ref.kind === "database" && databaseIconHints.engine ? { databaseEngine: databaseIconHints.engine } : {},
		...ref.kind === "site" && siteFramework ? { siteFramework } : {}
	};
}
function upsertRecentResource(list, entry, maxStored = 10) {
	return [entry, ...list.filter((item) => item.key !== entry.key)].slice(0, maxStored);
}
function readRecentResourcesFromStorage() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(RECENT_RESOURCES_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter(isRecentResource).sort((a, b) => b.viewedAt - a.viewedAt).slice(0, 10);
	} catch {
		return [];
	}
}
function writeRecentResourcesToStorage(list) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(RECENT_RESOURCES_STORAGE_KEY, JSON.stringify(list.slice(0, 10)));
	} catch {}
}
function isRecentResource(value) {
	if (!value || typeof value !== "object") return false;
	const item = value;
	return typeof item.key === "string" && typeof item.kind === "string" && typeof item.name === "string" && Array.isArray(item.breadcrumbs) && typeof item.projectId === "string" && typeof item.section === "string" && typeof item.resourceId === "string" && typeof item.href === "string" && typeof item.viewedAt === "number";
}
function filterRecentResources(list, options = {}) {
	const { projectId, limit = 5, skipNewestWhenMatches } = options;
	const filtered = projectId ? list.filter((item) => item.projectId === projectId) : list;
	let start = 0;
	const newest = filtered[0];
	if (skipNewestWhenMatches && newest && newest.projectId === skipNewestWhenMatches.projectId && newest.kind === skipNewestWhenMatches.kind && newest.resourceId === skipNewestWhenMatches.resourceId) start = 1;
	return filtered.slice(start, start + limit);
}
var RecentResourcesContext = createContext(null);
function RecentResourcesProvider({ children }) {
	const location = useLocation();
	const queryClient = useQueryClient();
	const [resources, setResources] = useState(() => readRecentResourcesFromStorage());
	const recordResource = useCallback((entry) => {
		setResources((current) => {
			const existing = current.find((item) => item.key === entry.key);
			if (existing && current[0]?.key === entry.key && existing.name === entry.name && existing.href === entry.href && existing.databaseApiType === entry.databaseApiType && existing.databaseEngine === entry.databaseEngine && existing.siteFramework === entry.siteFramework) return current;
			const next = upsertRecentResource(current, entry);
			writeRecentResourcesToStorage(next);
			return next;
		});
	}, []);
	useEffect(() => {
		const ref = parseRecentResourceRef(location.pathname);
		if (!ref) return;
		let done = false;
		let unsubscribe;
		const timeouts = [];
		const finish = () => {
			if (done) return;
			done = true;
			timeouts.forEach((id) => window.clearTimeout(id));
			unsubscribe?.();
			unsubscribe = void 0;
		};
		const tryRecord = (options) => {
			if (done) return;
			const name = resolveRecentResourceName(queryClient, ref);
			if (!name) {
				if (options?.forceFinish) finish();
				return;
			}
			const databaseIconHints = resolveRecentDatabaseIconHints(queryClient, ref);
			const siteFramework = resolveRecentSiteFramework(queryClient, ref);
			recordResource(buildRecentResource(ref, name, Date.now(), databaseIconHints, siteFramework));
			if (ref.kind === "site" && !siteFramework && !options?.forceFinish) return;
			finish();
		};
		tryRecord();
		if (done) return;
		const retryDelays = [
			50,
			200,
			500,
			1500
		];
		for (const ms of retryDelays) timeouts.push(window.setTimeout(() => tryRecord({ forceFinish: ms === retryDelays[retryDelays.length - 1] }), ms));
		unsubscribe = queryClient.getQueryCache().subscribe(() => {
			tryRecord();
		});
		return () => {
			finish();
		};
	}, [
		location.pathname,
		queryClient,
		recordResource
	]);
	const getRecentResources = useCallback((options) => filterRecentResources(resources, options), [resources]);
	const clearRecentResources = useCallback(() => {
		setResources([]);
		writeRecentResourcesToStorage([]);
	}, []);
	const value = useMemo(() => ({
		resources,
		getRecentResources,
		clearRecentResources
	}), [
		resources,
		getRecentResources,
		clearRecentResources
	]);
	return /* @__PURE__ */ jsx(RecentResourcesContext.Provider, {
		value,
		children
	});
}
function useRecentResourcesSafe() {
	return useContext(RecentResourcesContext);
}
var entries = [];
var seen = /* @__PURE__ */ new Set();
function registerCommands(items) {
	for (const item of items) {
		if (seen.has(item.id)) continue;
		seen.add(item.id);
		entries.push(item);
	}
}
function getCommandsForContext(ctx) {
	return entries.filter((entry) => {
		if (!entry.scopes.includes(ctx.scope)) return false;
		if (entry.available && !entry.available(ctx)) return false;
		return true;
	});
}
registerCommands([
	{
		id: "project.nav.projects",
		scopes: ["project"],
		kind: "navigation",
		label: "Projects",
		description: "All projects in this organization",
		icon: FolderOpen,
		shortcut: "G P",
		keywords: [
			"home",
			"projects",
			"list",
			"organization"
		],
		available: (ctx) => Boolean(ctx.orgId),
		to: (ctx) => `/organizations/${ctx.orgId}`
	},
	{
		id: "project.nav.overview",
		scopes: ["project"],
		kind: "navigation",
		label: "Dashboard",
		description: "Project dashboard and key metrics",
		icon: LayoutDashboard,
		shortcut: "G O",
		keywords: [
			"home",
			"dashboard",
			"main",
			"project"
		],
		to: (ctx) => `/projects/${ctx.projectId}`
	},
	{
		id: "project.nav.apps",
		scopes: ["project"],
		kind: "navigation",
		label: "Apps",
		description: "Connect platforms (web, iOS, Android, Flutter, server)",
		icon: Plug,
		shortcut: "G I",
		keywords: [
			"connect",
			"platforms",
			"sdk",
			"integrations",
			"clients"
		],
		available: (ctx) => canShowConnectSection(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/apps`
	},
	{
		id: "project.nav.api-keys",
		scopes: ["project"],
		kind: "navigation",
		label: "API keys",
		description: "Server API keys and tokens",
		icon: Key,
		shortcut: "G K",
		keywords: [
			"keys",
			"tokens",
			"secrets",
			"server",
			"auth"
		],
		available: (ctx) => canShowConnectSection(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/api-keys`
	},
	{
		id: "project.nav.explorer",
		scopes: ["project"],
		kind: "navigation",
		label: "Explorer",
		description: "Browse and test Appwrite REST API endpoints",
		icon: ListTree,
		shortcut: "G X",
		keywords: [
			"api",
			"explorer",
			"rest",
			"openapi",
			"reference",
			"endpoints",
			"methods"
		],
		available: (ctx) => canShowConnectSection(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/explorer`
	},
	{
		id: "project.nav.auth",
		scopes: ["project"],
		kind: "navigation",
		label: "Auth",
		description: "Users, teams, sessions and authentication providers",
		icon: Users$1,
		shortcut: "G A",
		keywords: [
			"users",
			"authentication",
			"login",
			"signup",
			"oauth",
			"auth"
		],
		to: (ctx) => `/projects/${ctx.projectId}/auth`
	},
	{
		id: "project.nav.databases",
		scopes: ["project"],
		kind: "navigation",
		label: "Databases",
		description: "Manage databases, tables and collections",
		icon: Database,
		shortcut: "G D",
		keywords: [
			"db",
			"collections",
			"documents",
			"tables",
			"rows"
		],
		to: (ctx) => `/projects/${ctx.projectId}/databases`
	},
	{
		id: "project.nav.storage",
		scopes: ["project"],
		kind: "navigation",
		label: "Storage",
		description: "Buckets and files",
		icon: Folder,
		shortcut: "G S",
		keywords: [
			"files",
			"buckets",
			"uploads",
			"images",
			"assets",
			"storage"
		],
		to: (ctx) => `/projects/${ctx.projectId}/storage/-`
	},
	{
		id: "project.nav.functions",
		scopes: ["project"],
		kind: "navigation",
		label: "Functions",
		description: "Serverless functions and executions",
		icon: Zap,
		shortcut: "G F",
		keywords: [
			"serverless",
			"lambda",
			"code",
			"fn",
			"cron"
		],
		to: (ctx) => `/projects/${ctx.projectId}/functions`
	},
	{
		id: "project.nav.messaging",
		scopes: ["project"],
		kind: "navigation",
		label: "Messaging",
		description: "Push notifications, email and SMS messages",
		icon: MessageSquare,
		shortcut: "G M",
		keywords: [
			"notifications",
			"push",
			"sms",
			"email",
			"topics",
			"providers"
		],
		to: (ctx) => `/projects/${ctx.projectId}/messaging`
	},
	{
		id: "project.nav.sites",
		scopes: ["project"],
		kind: "navigation",
		label: "Sites",
		description: "Deployed websites and hosting",
		icon: Globe,
		shortcut: "G W",
		keywords: [
			"hosting",
			"deploy",
			"web",
			"website",
			"frontend",
			"static"
		],
		to: (ctx) => `/projects/${ctx.projectId}/sites`
	},
	{
		id: "project.nav.activity",
		scopes: ["project"],
		kind: "navigation",
		label: "Activity",
		description: "Audit log of project events",
		icon: Activity,
		shortcut: "G L",
		keywords: [
			"logs",
			"events",
			"history",
			"audit"
		],
		available: (ctx) => Boolean(ctx.features.activity),
		to: (ctx) => `/projects/${ctx.projectId}/activity`
	},
	{
		id: "project.nav.realtime",
		scopes: ["project"],
		kind: "navigation",
		label: "Realtime",
		description: "Realtime channels and live messages",
		icon: Radio,
		keywords: [
			"realtime",
			"channels",
			"websocket",
			"pubsub",
			"live"
		],
		to: (ctx) => `/projects/${ctx.projectId}/realtime`
	},
	{
		id: "project.nav.usage",
		scopes: ["project"],
		kind: "navigation",
		label: "Usage",
		description: "Usage statistics and quotas",
		icon: BarChart3,
		shortcut: "G U",
		keywords: [
			"stats",
			"metrics",
			"usage",
			"quota",
			"limits"
		],
		available: (ctx) => Boolean(ctx.features.usageStats) && canSeeUsageNav(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/usage`
	},
	{
		id: "project.nav.analytics",
		scopes: ["project"],
		kind: "navigation",
		label: "Analytics",
		description: "Website analytics and traffic insights",
		icon: BarChart2,
		keywords: [
			"analytics",
			"insights",
			"tracking",
			"website",
			"visitors"
		],
		to: (ctx) => `/projects/${ctx.projectId}/analytics`
	},
	{
		id: "project.nav.settings",
		scopes: ["project"],
		kind: "navigation",
		label: "Settings",
		description: "Project settings, custom domains, variables, webhooks",
		icon: Settings,
		shortcut: "G E",
		keywords: [
			"config",
			"preferences",
			"options",
			"settings",
			"env"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings`
	},
	{
		id: "project.nav.settings-comma",
		scopes: ["project"],
		kind: "navigation",
		label: "Settings",
		description: "Project settings (comma shortcut)",
		icon: Settings,
		shortcut: "G ,",
		keywords: [
			"config",
			"preferences",
			"options",
			"settings",
			"env",
			"comma"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings`
	}
]);
registerCommands([{
	id: "project.action.terminal",
	scopes: ["project"],
	kind: "action",
	group: "Actions",
	label: "Open terminal",
	description: "Toggle the built-in Appwrite CLI terminal",
	icon: Terminal,
	shortcut: CLI_SHELL_TOGGLE_SHORTCUT_RAW,
	keywords: [
		"terminal",
		"cli",
		"shell",
		"command",
		"appwrite",
		"console"
	],
	available: (ctx) => canShowProjectTerminal(ctx.access, ctx.features) && Boolean(ctx.handlers.onToggleTerminal),
	perform: (ctx) => {
		ctx.handlers.onToggleTerminal?.();
		ctx.closeCommandCenter();
	}
}, {
	id: "project.action.install-mcp",
	scopes: ["project"],
	kind: "action",
	group: "Actions",
	label: "Install Appwrite MCP",
	description: "Connect Cursor, Claude Code, Codex, or VS Code to this project",
	icon: McpIcon,
	keywords: [
		"mcp",
		"model context protocol",
		"agent",
		"cursor",
		"claude",
		"codex",
		"vscode",
		"ai",
		"install",
		"connect"
	],
	available: (ctx) => canShowConnectSection(ctx.access, ctx.features) && Boolean(ctx.handlers.onOpenConnectMcp),
	perform: (ctx) => {
		ctx.handlers.onOpenConnectMcp?.();
		ctx.closeCommandCenter();
	}
}]);
function sqlEditorActionsAvailable$1(pathname) {
	return isPostgresSqlEditorPath(pathname) && getPostgresSqlEditorActions() !== null;
}
function disabledReasonWhen$1(can, reason) {
	return can ? void 0 : reason;
}
registerCommands([
	{
		id: "postgres.sql.run",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Run",
		description: "Execute the current SQL in the editor",
		icon: Play,
		shortcut: POSTGRES_SQL_RUN_SHORTCUT_RAW,
		keywords: [
			"sql",
			"execute",
			"query",
			"run",
			"postgres"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canRun,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canRun, "Write SQL before running a query."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.run();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.explain",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Explain",
		description: "Show the query execution plan",
		icon: ListTree,
		shortcut: POSTGRES_SQL_EXPLAIN_SHORTCUT_RAW,
		keywords: [
			"sql",
			"explain",
			"plan",
			"postgres",
			"analyze"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canExplain,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canExplain, "Write SQL before explaining a query."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.explain();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.save",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Save query",
		description: "Save the current SQL as a personal or team query",
		icon: Bookmark,
		shortcut: POSTGRES_SQL_SAVE_SHORTCUT_RAW,
		keywords: [
			"sql",
			"save",
			"bookmark",
			"query",
			"postgres"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canSave,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canSave, "Write SQL before saving a query."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.save();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.format",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Format SQL",
		description: "Format the current SQL in the editor",
		icon: Braces,
		shortcut: POSTGRES_SQL_FORMAT_SHORTCUT_RAW,
		keywords: [
			"sql",
			"format",
			"prettify",
			"postgres"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canFormat,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canFormat, "Write SQL before formatting."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.format();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.undo",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Undo",
		description: "Undo the last SQL editor change",
		icon: Undo2,
		shortcut: POSTGRES_SQL_UNDO_SHORTCUT_RAW,
		keywords: [
			"sql",
			"undo",
			"editor",
			"postgres"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canUndo,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canUndo, "Nothing to undo."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.undo();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.redo",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Redo",
		description: "Redo the last undone SQL editor change",
		icon: Redo2,
		shortcut: POSTGRES_SQL_REDO_SHORTCUT_RAW,
		keywords: [
			"sql",
			"redo",
			"editor",
			"postgres"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canRedo,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canRedo, "Nothing to redo."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.redo();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.next-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Next query tab",
		description: "Switch to the next SQL editor tab",
		icon: ChevronRight,
		shortcut: POSTGRES_SQL_NEXT_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"next",
			"postgres",
			"editor"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canSelectNextTab,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canSelectNextTab, "Open another query tab to switch tabs."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.selectNextTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.prev-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Previous query tab",
		description: "Switch to the previous SQL editor tab",
		icon: ChevronLeft,
		shortcut: POSTGRES_SQL_PREV_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"previous",
			"postgres",
			"editor"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canSelectPreviousTab,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canSelectPreviousTab, "Open another query tab to switch tabs."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.selectPreviousTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.new-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "New query tab",
		description: "Open a new SQL editor tab",
		icon: Plus,
		shortcut: POSTGRES_SQL_NEW_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"new",
			"postgres",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canCreateTab,
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.createTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.close-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Close query tab",
		description: "Close the current SQL editor tab",
		icon: X,
		shortcut: POSTGRES_SQL_CLOSE_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"close",
			"postgres",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canCloseTab,
		disabledReason: () => disabledReasonWhen$1(getPostgresSqlEditorActions()?.canCloseTab, "Keep at least one query tab open."),
		perform: (ctx) => {
			getPostgresSqlEditorActions()?.closeTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "postgres.sql.jump-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Go to query tab",
		description: "Pick a SQL editor tab to open",
		icon: PanelTop,
		shortcut: POSTGRES_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"jump",
			"goto",
			"postgres",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable$1(ctx.pathname),
		disabled: () => !getPostgresSqlEditorActions()?.canJumpToTab,
		perform: () => {
			getPostgresSqlEditorActions()?.openJumpToTabPicker();
		}
	}
]);
function sqlEditorActionsAvailable(pathname) {
	return isMysqlSqlEditorPath(pathname) && getMysqlSqlEditorActions() !== null;
}
function disabledReasonWhen(can, reason) {
	return can ? void 0 : reason;
}
registerCommands([
	{
		id: "mysql.sql.run",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Run",
		description: "Execute the current SQL in the editor",
		icon: Play,
		shortcut: MYSQL_SQL_RUN_SHORTCUT_RAW,
		keywords: [
			"sql",
			"execute",
			"query",
			"run",
			"mysql"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canRun,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canRun, "Write SQL before running a query."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.run();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.explain",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Explain",
		description: "Show the query execution plan",
		icon: ListTree,
		shortcut: MYSQL_SQL_EXPLAIN_SHORTCUT_RAW,
		keywords: [
			"sql",
			"explain",
			"plan",
			"mysql",
			"analyze"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canExplain,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canExplain, "Write SQL before explaining a query."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.explain();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.save",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Save query",
		description: "Save the current SQL as a personal or team query",
		icon: Bookmark,
		shortcut: MYSQL_SQL_SAVE_SHORTCUT_RAW,
		keywords: [
			"sql",
			"save",
			"bookmark",
			"query",
			"mysql"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canSave,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canSave, "Write SQL before saving a query."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.save();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.format",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Format SQL",
		description: "Format the current SQL in the editor",
		icon: Braces,
		shortcut: MYSQL_SQL_FORMAT_SHORTCUT_RAW,
		keywords: [
			"sql",
			"format",
			"prettify",
			"mysql"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canFormat,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canFormat, "Write SQL before formatting."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.format();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.undo",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Undo",
		description: "Undo the last SQL editor change",
		icon: Undo2,
		shortcut: MYSQL_SQL_UNDO_SHORTCUT_RAW,
		keywords: [
			"sql",
			"undo",
			"editor",
			"mysql"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canUndo,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canUndo, "Nothing to undo."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.undo();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.redo",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Redo",
		description: "Redo the last undone SQL editor change",
		icon: Redo2,
		shortcut: MYSQL_SQL_REDO_SHORTCUT_RAW,
		keywords: [
			"sql",
			"redo",
			"editor",
			"mysql"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canRedo,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canRedo, "Nothing to redo."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.redo();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.next-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Next query tab",
		description: "Switch to the next SQL editor tab",
		icon: ChevronRight,
		shortcut: MYSQL_SQL_NEXT_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"next",
			"mysql",
			"editor"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canSelectNextTab,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canSelectNextTab, "Open another query tab to switch tabs."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.selectNextTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.prev-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Previous query tab",
		description: "Switch to the previous SQL editor tab",
		icon: ChevronLeft,
		shortcut: MYSQL_SQL_PREV_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"previous",
			"mysql",
			"editor"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canSelectPreviousTab,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canSelectPreviousTab, "Open another query tab to switch tabs."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.selectPreviousTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.new-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "New query tab",
		description: "Open a new SQL editor tab",
		icon: Plus,
		shortcut: MYSQL_SQL_NEW_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"new",
			"mysql",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canCreateTab,
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.createTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.close-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Close query tab",
		description: "Close the current SQL editor tab",
		icon: X,
		shortcut: MYSQL_SQL_CLOSE_TAB_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"close",
			"mysql",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canCloseTab,
		disabledReason: () => disabledReasonWhen(getMysqlSqlEditorActions()?.canCloseTab, "Keep at least one query tab open."),
		perform: (ctx) => {
			getMysqlSqlEditorActions()?.closeTab();
			ctx.closeCommandCenter();
		}
	},
	{
		id: "mysql.sql.jump-tab",
		scopes: ["project"],
		kind: "action",
		group: "SQL editor",
		label: "Go to query tab",
		description: "Pick a SQL editor tab to open",
		icon: PanelTop,
		shortcut: MYSQL_SQL_JUMP_TAB_PICKER_SHORTCUT_RAW,
		keywords: [
			"sql",
			"tab",
			"jump",
			"goto",
			"mysql",
			"editor",
			"query"
		],
		available: (ctx) => sqlEditorActionsAvailable(ctx.pathname),
		disabled: () => !getMysqlSqlEditorActions()?.canJumpToTab,
		perform: () => {
			getMysqlSqlEditorActions()?.openJumpToTabPicker();
		}
	}
]);
function makeCreate(opts) {
	return {
		id: opts.id,
		scopes: ["project"],
		kind: "create",
		label: opts.label,
		icon: opts.icon,
		shortcut: opts.shortcut,
		keywords: [
			"new",
			"add",
			"create",
			...opts.keywords ?? []
		],
		description: `Create a new ${opts.label.replace(/^Create\s+/i, "").toLowerCase()}`,
		disabled: (ctx) => !opts.permission(ctx),
		disabledReason: (ctx) => opts.permission(ctx) ? void 0 : opts.permissionMessage,
		perform: (ctx) => {
			if (!opts.permission(ctx)) return;
			ctx.closeCommandCenter();
			if (ctx.handlers.onProjectCreate) ctx.handlers.onProjectCreate(opts.resourceType);
			else if (ctx.projectId) ctx.navigate(opts.fallbackPath(ctx.projectId));
		}
	};
}
registerCommands([
	makeCreate({
		id: "project.create.database",
		label: "Create database",
		icon: Database,
		shortcut: "C D",
		resourceType: "database",
		fallbackPath: (id) => `/projects/${id}/databases`,
		permission: (ctx) => canCreateDatabase(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create databases.",
		keywords: ["db"]
	}),
	makeCreate({
		id: "project.create.bucket",
		label: "Create bucket",
		icon: Folder,
		shortcut: "C B",
		resourceType: "bucket",
		fallbackPath: (id) => `/projects/${id}/storage`,
		permission: (ctx) => canCreateBucket(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create buckets.",
		keywords: ["storage", "files"]
	}),
	makeCreate({
		id: "project.create.function",
		label: "Create function",
		icon: Zap,
		shortcut: "C F",
		resourceType: "function",
		fallbackPath: (id) => `/projects/${id}/functions`,
		permission: (ctx) => canCreateFunction(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create functions.",
		keywords: ["serverless", "lambda"]
	}),
	makeCreate({
		id: "project.create.site",
		label: "Create site",
		icon: Globe,
		shortcut: "C S",
		resourceType: "site",
		fallbackPath: (id) => `/projects/${id}/sites`,
		permission: (ctx) => canCreateSite(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create sites.",
		keywords: [
			"hosting",
			"deploy",
			"website"
		]
	}),
	makeCreate({
		id: "project.create.user",
		label: "Create user",
		icon: UserPlus,
		shortcut: "C U",
		resourceType: "user",
		fallbackPath: (id) => `/projects/${id}/auth`,
		permission: (ctx) => canCreateUser(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create users.",
		keywords: ["account", "auth"]
	}),
	makeCreate({
		id: "project.create.team",
		label: "Create team",
		icon: Building2,
		shortcut: "C T",
		resourceType: "team",
		fallbackPath: (id) => `/projects/${id}/auth/teams`,
		permission: (ctx) => canCreateTeam(ctx.access, ctx.features),
		permissionMessage: "You don't have permission to create teams.",
		keywords: ["group", "organization"]
	})
]);
registerCommands([
	{
		id: "project.tab.auth.users",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Users",
		description: "Browse and manage your project users",
		icon: Users$1,
		keywords: [
			"users",
			"accounts",
			"people"
		],
		to: (ctx) => `/projects/${ctx.projectId}/auth`
	},
	{
		id: "project.tab.auth.teams",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Teams",
		description: "Group users into teams with roles",
		icon: Users$1,
		keywords: [
			"teams",
			"groups",
			"roles"
		],
		to: (ctx) => `/projects/${ctx.projectId}/auth/teams`
	},
	{
		id: "project.tab.auth.policies",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies",
		description: "User, session, email, membership, and password policies",
		icon: Shield,
		keywords: [
			"policies",
			"users",
			"sessions",
			"emails",
			"memberships",
			"password",
			"privacy",
			"limits",
			"disposable",
			"gmail"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/sessions`
	},
	{
		id: "project.tab.auth.policies.sessions",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies · Sessions",
		description: "Session length, limits, alerts, and invalidation",
		icon: Shield,
		keywords: [
			"sessions",
			"length",
			"limit",
			"invalidation",
			"alerts",
			"email"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/sessions`
	},
	{
		id: "project.tab.auth.policies.users",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies · Users",
		description: "Maximum number of users allowed in the project",
		icon: Users$1,
		keywords: [
			"users",
			"limit",
			"maximum",
			"count"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/users`
	},
	{
		id: "project.tab.auth.policies.emails",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies · Emails",
		description: "Block free, aliased, disposable, and corporate emails at signup",
		icon: Mail,
		keywords: [
			"email",
			"free",
			"gmail",
			"disposable",
			"mailinator",
			"alias",
			"corporate",
			"business",
			"signup"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/emails`
	},
	{
		id: "project.tab.auth.policies.memberships",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies · Memberships",
		description: "Hide member name, email, or MFA status from other team members",
		icon: Users$1,
		keywords: [
			"membership",
			"memberships",
			"privacy",
			"team"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/memberships`
	},
	{
		id: "project.tab.auth.policies.passwords",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Policies · Passwords",
		description: "Password history, dictionary, and personal data checks",
		icon: Shield,
		keywords: [
			"password",
			"history",
			"dictionary",
			"personal data"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/policies/passwords`
	},
	{
		id: "project.tab.auth.social-providers",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Social providers",
		description: "Configure OAuth2 providers for social login",
		icon: ShieldCheck,
		keywords: [
			"oauth",
			"oauth2",
			"social",
			"providers",
			"google",
			"github"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/social-providers`
	},
	{
		id: "project.tab.auth.oauth2-server.server",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · OAuth2 server · Server",
		description: "Configure OAuth2 authorization server for third-party apps",
		icon: Server,
		keywords: [
			"oauth",
			"oauth2",
			"oidc",
			"openid",
			"authorization server",
			"discovery",
			"tokens",
			"settings"
		],
		available: (ctx) => canShowProjectOAuth2Server(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/oauth2-server`
	},
	{
		id: "project.tab.auth.oauth2-server.apps",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · OAuth2 server · Apps",
		description: "Manage OAuth2 client apps for this project",
		icon: KeyRound,
		keywords: [
			"oauth",
			"oauth2",
			"clients",
			"apps",
			"redirect"
		],
		available: (ctx) => canShowProjectOAuth2Server(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/oauth2-server/apps`
	},
	{
		id: "project.tab.auth.templates",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Templates",
		description: "Customize verification, recovery and magic URL emails",
		icon: Mail,
		keywords: [
			"templates",
			"emails",
			"verification",
			"recovery",
			"magic url"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/templates`
	},
	{
		id: "project.tab.auth.settings",
		scopes: ["project"],
		kind: "tab",
		group: "Auth",
		label: "Auth · Settings",
		description: "Configure auth methods and mock phone numbers",
		icon: Settings,
		keywords: [
			"methods",
			"settings",
			"mock",
			"phone"
		],
		available: (ctx) => canShowAuthSecuritySettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/auth/settings`
	},
	{
		id: "project.tab.messaging.messages",
		scopes: ["project"],
		kind: "tab",
		group: "Messaging",
		label: "Messaging · Messages",
		description: "Sent and scheduled messages",
		icon: Send,
		keywords: [
			"messages",
			"history",
			"push",
			"sms",
			"email"
		],
		to: (ctx) => `/projects/${ctx.projectId}/messaging`
	},
	{
		id: "project.tab.messaging.topics",
		scopes: ["project"],
		kind: "tab",
		group: "Messaging",
		label: "Messaging · Topics",
		description: "Subscriber topics for fan-out messaging",
		icon: Megaphone,
		keywords: [
			"topics",
			"subscribers",
			"channels",
			"pubsub"
		],
		to: (ctx) => `/projects/${ctx.projectId}/messaging/topics`
	},
	{
		id: "project.tab.messaging.providers",
		scopes: ["project"],
		kind: "tab",
		group: "Messaging",
		label: "Messaging · Providers",
		description: "Email, SMS and push providers",
		icon: Bell,
		keywords: [
			"providers",
			"twilio",
			"sendgrid",
			"fcm",
			"apns",
			"mailgun"
		],
		to: (ctx) => `/projects/${ctx.projectId}/messaging/providers`
	},
	{
		id: "project.tab.settings.overview",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Overview",
		description: "Project ID, name, region, API endpoint",
		icon: Sliders,
		keywords: [
			"overview",
			"general",
			"project id",
			"endpoint",
			"region"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings`
	},
	{
		id: "project.tab.settings.domains",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Custom domains",
		description: "Custom domains for your project endpoint",
		icon: Globe,
		keywords: [
			"domains",
			"custom",
			"dns",
			"cname",
			"hosting"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings/domains`
	},
	{
		id: "project.tab.settings.variables",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Variables",
		description: "Project-level environment variables",
		icon: Code,
		keywords: [
			"variables",
			"env",
			"environment",
			"secrets"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings/variables`
	},
	{
		id: "project.tab.settings.webhooks",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Webhooks",
		description: "HTTP callbacks for project events",
		icon: Zap,
		keywords: [
			"webhooks",
			"events",
			"http",
			"callbacks"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings/webhooks`
	},
	{
		id: "project.tab.settings.migrations",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Migrations",
		description: "Import data from other backends",
		icon: Layers,
		keywords: [
			"migrations",
			"import",
			"transfer",
			"firebase",
			"supabase"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings/migrations`
	},
	{
		id: "project.tab.settings.smtp",
		scopes: ["project"],
		kind: "tab",
		group: "Settings",
		label: "Settings · SMTP",
		description: "Custom SMTP server for outgoing emails",
		icon: Mail,
		keywords: [
			"smtp",
			"email",
			"mail",
			"server"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings/smtp`
	},
	{
		id: "project.tab.firewall",
		scopes: ["project"],
		kind: "tab",
		group: "Security",
		label: "Security · Firewall rules",
		description: "IP allow/block lists and request rules",
		icon: Shield,
		keywords: [
			"firewall",
			"rules",
			"ip",
			"allowlist",
			"deny",
			"rate limit"
		],
		available: (ctx) => Boolean(ctx.features.firewall),
		to: (ctx) => `/projects/${ctx.projectId}/firewall`
	},
	{
		id: "project.create.firewall-rule",
		scopes: ["project"],
		kind: "create",
		group: "Security",
		label: "Create firewall rule",
		description: "Add a Firewall rule for this project",
		icon: Shield,
		keywords: [
			"firewall",
			"create",
			"rule",
			"deny",
			"rate limit"
		],
		available: (ctx) => Boolean(ctx.features.firewall),
		to: (ctx) => `/projects/${ctx.projectId}/firewall/create`
	}
]);
registerCommands([
	{
		id: "project.card.settings.name",
		scopes: ["project"],
		kind: "card",
		group: "Settings",
		label: "Settings · Project name",
		description: "Rename your project",
		icon: Tag,
		keywords: [
			"rename",
			"name",
			"project"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings#card-project-name`
	},
	{
		id: "project.card.settings.api-credentials",
		scopes: ["project"],
		kind: "card",
		group: "Settings",
		label: "Settings · API credentials",
		description: "Project ID and API endpoint for SDKs",
		icon: KeyRound,
		keywords: [
			"api",
			"endpoint",
			"project id",
			"credentials",
			"connection",
			"sdk"
		],
		to: (ctx) => `/projects/${ctx.projectId}/settings#card-api-credentials`
	},
	{
		id: "project.card.settings.services",
		scopes: ["project"],
		kind: "card",
		group: "Settings",
		label: "Settings · Services",
		description: "Enable or disable Appwrite services for this project",
		icon: Settings,
		keywords: [
			"services",
			"enable",
			"disable",
			"modules",
			"features",
			"toggle"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings#card-services`
	},
	{
		id: "project.card.settings.transfer",
		scopes: ["project"],
		kind: "card",
		group: "Settings",
		label: "Settings · Transfer project",
		description: "Move this project to a different organization",
		icon: ArrowRightLeft,
		keywords: [
			"transfer",
			"move",
			"organization",
			"ownership"
		],
		available: (ctx) => Boolean(ctx.features.multiTenancy) && canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings#card-transfer-project`
	},
	{
		id: "project.card.settings.delete",
		scopes: ["project"],
		kind: "card",
		group: "Settings",
		label: "Settings · Delete project",
		description: "Permanently delete this project and all its data",
		icon: AlertOctagon,
		keywords: [
			"delete",
			"remove",
			"destroy",
			"danger"
		],
		available: (ctx) => canShowProjectSettings(ctx.access, ctx.features),
		to: (ctx) => `/projects/${ctx.projectId}/settings#card-delete-project`
	}
]);
const SOC2_SETTINGS_KEYWORDS = [
	"soc",
	"soc2",
	"soc-2",
	"soc 2",
	"soc ii",
	"soc-ii",
	"soc2 type ii",
	"soc 2 type ii",
	"soc-2 type ii",
	"soc2 type 2",
	"soc 2 type 2",
	"soc-2 type 2",
	"type ii",
	"type 2",
	"type-ii",
	"type-2",
	"service organization control",
	"service organisation control",
	"trust services",
	"trust services criteria",
	"aicpa",
	"audit",
	"audit report",
	"security audit",
	"compliance report",
	"security report",
	"certified",
	"certification",
	"enterprise",
	"security",
	"security controls",
	"auditing standard",
	"vendor compliance",
	"regulated",
	"contact sales"
];
const ORG_SETTINGS_CARD_INDEX = [
	{
		sectionId: "overview",
		title: "Organization ID",
		keywords: [
			"id",
			"api",
			"webhook",
			"sdk",
			"copy"
		]
	},
	{
		sectionId: "overview",
		title: "Organization name",
		keywords: ["rename", "display name"]
	},
	{
		sectionId: "overview",
		title: "Delete organization",
		keywords: [
			"delete",
			"remove",
			"destroy",
			"danger"
		]
	},
	{
		sectionId: "billing",
		title: "Current plan",
		keywords: [
			"plan",
			"subscription",
			"tier",
			"upgrade",
			"downgrade",
			"change plan",
			"pro",
			"scale",
			"core",
			"free",
			"next payment",
			"charges",
			"billing cycle"
		]
	},
	{
		sectionId: "billing",
		title: "Payment history",
		keywords: [
			"invoice",
			"invoices",
			"receipt",
			"payment history",
			"paid"
		]
	},
	{
		sectionId: "billing",
		title: "Payment methods",
		keywords: [
			"card",
			"credit card",
			"stripe",
			"backup",
			"default payment",
			"payment method"
		]
	},
	{
		sectionId: "billing",
		title: "Billing address",
		keywords: [
			"address",
			"country",
			"city",
			"postal",
			"zip",
			"street"
		]
	},
	{
		sectionId: "billing",
		title: "Tax ID",
		keywords: [
			"vat",
			"tax",
			"ein",
			"gst",
			"identification"
		]
	},
	{
		sectionId: "billing",
		title: "Budget cap",
		keywords: [
			"budget",
			"spending limit",
			"cap",
			"overage",
			"usage limit"
		]
	},
	{
		sectionId: "billing",
		title: "Billing alerts",
		keywords: [
			"alerts",
			"threshold",
			"notification",
			"usage",
			"email alert"
		]
	},
	{
		sectionId: "billing",
		title: "Available credits",
		keywords: [
			"credits",
			"balance",
			"coupon",
			"promo",
			"prepaid"
		]
	},
	{
		sectionId: "billing",
		title: "Payment failed",
		keywords: [
			"failed",
			"retry",
			"outstanding",
			"read-only"
		]
	},
	{
		sectionId: "billing",
		title: "Payment method failed",
		keywords: [
			"expired",
			"declined",
			"failed card"
		]
	},
	{
		sectionId: "billing",
		title: "Plan downgrade scheduled",
		keywords: [
			"downgrade",
			"scheduled",
			"end of period"
		]
	},
	{
		sectionId: "compliance",
		title: "Data processing agreement (DPA)",
		keywords: [
			"dpa",
			"gdpr",
			"legal",
			"data processing"
		]
	},
	{
		sectionId: "compliance",
		title: "Business associate agreement (BAA)",
		keywords: [
			"baa",
			"hipaa",
			"phi",
			"healthcare"
		]
	},
	{
		sectionId: "compliance",
		title: "SOC 2 type II report",
		keywords: [...SOC2_SETTINGS_KEYWORDS]
	},
	{
		sectionId: "api-keys",
		title: "API key types",
		keywords: [
			"project keys",
			"account keys",
			"org keys",
			"scopes"
		]
	},
	{
		sectionId: "api-keys",
		title: "Project keys",
		keywords: [
			"database",
			"storage",
			"functions"
		]
	},
	{
		sectionId: "api-keys",
		title: "Account keys",
		keywords: [
			"cli",
			"sessions",
			"user"
		]
	},
	{
		sectionId: "api-keys",
		title: "Org keys",
		keywords: [
			"billing",
			"team",
			"organization"
		]
	}
];
var ORG_NAV = [
	{
		id: "org.nav.projects",
		scopes: ["organization"],
		kind: "navigation",
		label: "Projects",
		description: "All projects in this organization",
		icon: FolderOpen,
		shortcut: "G P",
		keywords: [
			"home",
			"projects",
			"list",
			"main"
		],
		to: (ctx) => `/organizations/${ctx.orgId}`
	},
	{
		id: "org.nav.marketplace",
		scopes: ["organization"],
		kind: "navigation",
		label: "Marketplace",
		description: "Browse and publish Appwrite marketplace apps",
		icon: Store,
		keywords: [
			"apps",
			"integrations",
			"plugins",
			"extensions",
			"catalog"
		],
		available: (ctx) => canShowOrgMarketplaceTab(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/marketplace`
	},
	{
		id: "org.nav.domains",
		scopes: ["organization"],
		kind: "navigation",
		label: "Domains",
		description: "Manage organization-level custom domains",
		icon: Globe,
		shortcut: "G D",
		keywords: [
			"dns",
			"url",
			"hosting",
			"domain",
			"cname"
		],
		available: (ctx) => canShowOrgDomainsTab(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/domains`
	},
	{
		id: "org.nav.settings",
		scopes: ["organization"],
		kind: "navigation",
		label: "Settings",
		description: "Organization settings (members, billing, compliance)",
		icon: Settings,
		shortcut: "G S",
		keywords: [
			"config",
			"preferences",
			"options",
			"settings"
		],
		available: (ctx) => canShowOrgSettingsTab(ctx.access),
		to: (ctx) => `/organizations/${ctx.orgId}/settings`
	},
	{
		id: "org.nav.members",
		scopes: ["organization"],
		kind: "navigation",
		label: "Members",
		description: "Organization members and roles",
		icon: Users$1,
		shortcut: "G M",
		keywords: [
			"team",
			"members",
			"roles",
			"permissions",
			"people"
		],
		available: (ctx) => canAccessOrgSettingsMembers(ctx.access),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/members`
	},
	{
		id: "org.nav.billing",
		scopes: ["organization"],
		kind: "navigation",
		label: "Billing",
		description: "Plan, payment methods and invoices",
		icon: CreditCard,
		shortcut: "G B",
		keywords: [
			"payment",
			"subscription",
			"invoice",
			"plan",
			"billing"
		],
		available: (ctx) => canShowOrgBillingNav(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/billing`
	},
	{
		id: "org.nav.compliance",
		scopes: ["organization"],
		kind: "navigation",
		label: "Compliance",
		description: "DPA, BAA, SOC 2, HIPAA, GDPR",
		icon: ShieldCheck,
		shortcut: "G C",
		keywords: [
			"compliance",
			"dpa",
			"baa",
			"hipaa",
			"gdpr",
			"legal",
			...SOC2_SETTINGS_KEYWORDS
		],
		available: (ctx) => canShowOrgComplianceNav(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/compliance`
	}
];
var ORG_SETTINGS_TABS = [
	{
		id: "org.tab.settings.oauth-apps",
		scopes: ["organization"],
		kind: "tab",
		group: "Settings",
		label: "Settings · OAuth apps",
		description: "Third-party OAuth apps with access to this organization",
		icon: Key,
		keywords: [
			"oauth",
			"apps",
			"third party",
			"integrations"
		],
		available: (ctx) => canShowOrgOAuthAppsSettings(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/oauth-apps`
	},
	{
		id: "org.tab.settings.api-keys",
		scopes: ["organization"],
		kind: "tab",
		group: "Settings",
		label: "Settings · API keys",
		description: "Org-level API keys for automation",
		icon: Key,
		keywords: [
			"api",
			"keys",
			"tokens",
			"automation",
			"org"
		],
		available: (ctx) => canShowOrgApiKeysSettings(ctx.access, ctx.features),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/api-keys`
	},
	{
		id: "org.tab.settings.danger-zone",
		scopes: ["organization"],
		kind: "tab",
		group: "Settings",
		label: "Settings · Delete organization",
		description: "Permanently delete this organization",
		icon: AlertOctagon,
		keywords: [
			"danger",
			"delete",
			"remove",
			"destroy"
		],
		available: (ctx) => ctx.features.multiTenancy && canAccessOrgSettingsOverview(ctx.access),
		to: (ctx) => `/organizations/${ctx.orgId}/settings/danger-zone`
	}
];
var ORG_CREATE = [
	{
		id: "org.create.project",
		scopes: ["organization"],
		kind: "create",
		label: "Create project",
		description: "Spin up a new project in this organization",
		icon: Plus,
		shortcut: "C P",
		keywords: [
			"new",
			"project",
			"add"
		],
		disabled: (ctx) => !canCreateProject(ctx.access, ctx.features),
		disabledReason: (ctx) => canCreateProject(ctx.access, ctx.features) ? void 0 : "You don't have permission to create projects.",
		perform: (ctx) => {
			ctx.closeCommandCenter();
			if (ctx.handlers.onOrgCreateProject) ctx.handlers.onOrgCreateProject();
			else if (ctx.orgId) ctx.navigate(`/organizations/${ctx.orgId}`);
		}
	},
	{
		id: "org.create.organization",
		scopes: ["organization"],
		kind: "create",
		label: "Create organization",
		description: "Create a new organization",
		icon: Building2,
		shortcut: "C T",
		keywords: [
			"new",
			"organization",
			"team",
			"add"
		],
		available: (ctx) => ctx.features.multiTenancy,
		perform: (ctx) => {
			ctx.closeCommandCenter();
			if (ctx.features.billing) ctx.navigate("/upgrade");
		}
	},
	{
		id: "org.create.invite-member",
		scopes: ["organization"],
		kind: "create",
		label: "Invite member",
		description: "Invite a new member to this organization",
		icon: UserPlus,
		shortcut: "C M",
		keywords: [
			"invite",
			"member",
			"user",
			"add"
		],
		available: (ctx) => Boolean(ctx.handlers.onOrgInviteMember) && canInviteOrgMember(ctx.access, ctx.features),
		perform: (ctx) => {
			ctx.closeCommandCenter();
			ctx.handlers.onOrgInviteMember?.();
		}
	}
];
registerCommands([
	...ORG_NAV,
	...ORG_SETTINGS_TABS,
	...ORG_CREATE
]);
registerCommands([
	{
		id: "account.nav.general",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · General",
		description: "Profile, name, email and account ID",
		icon: User,
		keywords: [
			"profile",
			"general",
			"me",
			"name",
			"email"
		],
		to: () => "/account"
	},
	{
		id: "account.nav.security",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · Security",
		description: "Password, identities and MFA",
		icon: Shield,
		keywords: [
			"security",
			"password",
			"mfa",
			"2fa",
			"identities"
		],
		to: () => "/account/security"
	},
	{
		id: "account.nav.sessions",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · Sessions",
		description: "Active sessions and devices",
		icon: LogOut,
		keywords: [
			"sessions",
			"devices",
			"logout",
			"sign out"
		],
		to: () => "/account/sessions"
	},
	{
		id: "account.nav.applications",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · Applications",
		description: "OAuth applications authorized on your account",
		icon: Package,
		keywords: [
			"applications",
			"oauth",
			"authorized",
			"consent",
			"revoke"
		],
		to: () => "/account/applications"
	},
	{
		id: "account.nav.payment-methods",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · Payment methods",
		description: "Saved cards and payment methods",
		icon: CreditCard,
		keywords: [
			"payments",
			"billing",
			"cards",
			"methods"
		],
		available: (ctx) => Boolean(ctx.features.billing),
		to: () => "/account/payment-methods"
	},
	{
		id: "account.nav.billing-addresses",
		scopes: ["account"],
		kind: "navigation",
		label: "Account · Billing addresses",
		description: "Billing addresses on your account",
		icon: MapPin,
		keywords: [
			"address",
			"billing",
			"country",
			"postal"
		],
		available: (ctx) => Boolean(ctx.features.billing),
		to: () => "/account/billing-addresses"
	},
	{
		id: "account.card.security.password",
		scopes: ["account"],
		kind: "card",
		group: "Security",
		label: "Security · Change password",
		description: "Update your account password",
		icon: KeyRound,
		keywords: [
			"password",
			"change",
			"security",
			"reset"
		],
		to: () => "/account/security#card-password"
	},
	{
		id: "account.card.security.mfa",
		scopes: ["account"],
		kind: "card",
		group: "Security",
		label: "Security · Multi-factor authentication",
		description: "Enable MFA with TOTP, email or SMS",
		icon: Shield,
		keywords: [
			"mfa",
			"2fa",
			"totp",
			"authenticator",
			"security"
		],
		available: (ctx) => Boolean(ctx.features.accountMfa),
		to: () => "/account/security#card-mfa"
	}
]);
registerCommands([
	{
		id: "docs.action.search",
		scopes: [
			"docs",
			"project",
			"organization",
			"account"
		],
		kind: "action",
		group: "Search",
		label: "Search documentation",
		description: "Find guides, API references, and tutorials",
		icon: BookOpen,
		keywords: [
			"search",
			"find",
			"docs",
			"documentation",
			"pages"
		],
		perform: (ctx) => ctx.openDocsSearchPage?.()
	},
	{
		id: "docs.nav.home",
		scopes: ["docs"],
		kind: "navigation",
		label: "Docs home",
		description: "Appwrite documentation home",
		icon: BookOpen,
		keywords: [
			"home",
			"docs",
			"documentation"
		],
		to: () => "/docs"
	},
	{
		id: "docs.nav.quick-starts",
		scopes: ["docs"],
		kind: "navigation",
		label: "Quick starts",
		description: "Get started with Appwrite in minutes",
		icon: Play,
		keywords: [
			"quick start",
			"tutorial",
			"setup"
		],
		to: () => "/docs/quick-starts"
	},
	{
		id: "docs.nav.references",
		scopes: ["docs"],
		kind: "navigation",
		label: "API references",
		description: "Browse API references documentation",
		icon: Code,
		keywords: [
			"api",
			"reference",
			"sdk"
		],
		to: () => "/docs/references"
	},
	{
		id: "docs.nav.sdks",
		scopes: ["docs"],
		kind: "navigation",
		label: "SDKs",
		description: "Client and server SDK documentation",
		icon: Cog,
		keywords: [
			"sdk",
			"client",
			"server"
		],
		to: () => "/docs/sdks"
	}
]);
registerCommands([{
	id: "help.feedback",
	scopes: [
		"account",
		"organization",
		"project"
	],
	kind: "action",
	group: "Help",
	label: "Send feedback",
	description: "Share feedback to help us improve the console",
	icon: MessageSquarePlus,
	keywords: [
		"feedback",
		"suggestion",
		"bug report",
		"improve",
		"report"
	],
	perform: (ctx) => ctx.openFeedbackPage?.()
}, {
	id: "help.support",
	scopes: [
		"account",
		"organization",
		"project"
	],
	kind: "action",
	group: "Help",
	label: "Support",
	description: "Contact support, Discord, GitHub, and system status",
	icon: Headphones,
	keywords: [
		"support",
		"help",
		"contact",
		"discord",
		"github",
		"status",
		"sales"
	],
	perform: (ctx) => ctx.openSupportPage?.()
}]);
registerCommands([
	{
		id: "global.theme.light",
		scopes: [
			"account",
			"organization",
			"project"
		],
		kind: "action",
		group: "Global",
		label: "Set theme to light",
		description: "Switch the console to light mode",
		icon: Sun,
		shortcut: "T L",
		keywords: [
			"theme",
			"light",
			"mode",
			"appearance",
			"color"
		],
		perform: (ctx) => {
			ctx.handlers.onSetTheme?.("light");
			ctx.closeCommandCenter();
		}
	},
	{
		id: "global.theme.dark",
		scopes: [
			"account",
			"organization",
			"project"
		],
		kind: "action",
		group: "Global",
		label: "Set theme to dark",
		description: "Switch the console to dark mode",
		icon: Moon,
		shortcut: "T D",
		keywords: [
			"theme",
			"dark",
			"mode",
			"appearance",
			"color"
		],
		perform: (ctx) => {
			ctx.handlers.onSetTheme?.("dark");
			ctx.closeCommandCenter();
		}
	},
	{
		id: "global.theme.system",
		scopes: [
			"account",
			"organization",
			"project"
		],
		kind: "action",
		group: "Global",
		label: "Set theme to system",
		description: "Match your operating system appearance",
		icon: Contrast,
		shortcut: "T A",
		keywords: [
			"theme",
			"system",
			"auto",
			"mode",
			"appearance",
			"color"
		],
		perform: (ctx) => {
			ctx.handlers.onSetTheme?.("system");
			ctx.closeCommandCenter();
		}
	}
]);
function CookieConsentBanner({ customizeOpen, draftAnalytics, reopening, onAcceptAll, onRejectNonEssential, onSaveCustomPreferences, onClose, onCustomizeOpenChange, onDraftAnalyticsChange }) {
	const t = useT();
	const { features } = useConsoleProfile();
	const cookiesPolicyHref = getMarketingPageUrl("/cookies", features.marketing);
	const showPreferences = customizeOpen || reopening;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background shadow-lg",
		role: "dialog",
		"aria-labelledby": "cookie-consent-title",
		"aria-describedby": "cookie-consent-description",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-3xl px-4 py-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsx(Cookie, {
						className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground",
						"aria-hidden": true
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("h2", {
							id: "cookie-consent-title",
							className: "text-[15px] font-semibold text-foreground",
							children: showPreferences ? t("Cookie preferences") : t("We value your privacy")
						}), /* @__PURE__ */ jsx("p", {
							id: "cookie-consent-description",
							className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
							children: showPreferences ? /* @__PURE__ */ jsxs(Fragment, { children: [
								t("Choose which optional cookies you allow. Read our"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: cookiesPolicyHref,
									className: "link-unstyled font-medium text-foreground underline-offset-4 hover:underline",
									children: t("Cookies Policy")
								}),
								"."
							] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
								t("We use essential cookies to keep you signed in, manage site access, and remember your preferences. With your permission, we also use analytics to understand how Appwrite is used and improve it. Read our"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: cookiesPolicyHref,
									className: "link-unstyled font-medium text-foreground underline-offset-4 hover:underline",
									children: t("Cookies Policy")
								}),
								"."
							] })
						})]
					})]
				}),
				showPreferences ? /* @__PURE__ */ jsxs("div", {
					className: "mt-4 space-y-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-start justify-between gap-4 rounded-lg border border-border px-4 py-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[13px] font-medium text-foreground",
									children: t("Essential")
								}), /* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: t("Always active")
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
								children: t("Required for sign-in, site access, security, and remembering your preferences.")
							})]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4 rounded-lg border border-border px-4 py-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "cookie-consent-analytics",
								className: "text-[13px] font-medium text-foreground",
								children: t("Analytics")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
								children: t("Privacy-friendly usage analytics and error reporting to help us improve Appwrite.")
							})]
						}), /* @__PURE__ */ jsx(Switch, {
							id: "cookie-consent-analytics",
							checked: draftAnalytics,
							onCheckedChange: onDraftAnalyticsChange,
							className: "mt-0.5 shrink-0"
						})]
					})]
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: showPreferences ? /* @__PURE__ */ jsxs(Fragment, { children: [reopening ? /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: onClose,
						children: t("Cancel")
					}) : /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => onCustomizeOpenChange(false),
						children: t("Back")
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: onSaveCustomPreferences,
						children: t("Save preferences")
					})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: onRejectNonEssential,
							children: t("Reject non-essential")
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: () => onCustomizeOpenChange(true),
							children: t("Customize")
						}),
						/* @__PURE__ */ jsx(Button, {
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: onAcceptAll,
							children: t("Accept all")
						})
					] })
				})
			]
		})
	});
}
var trackingScriptsLoaded = false;
function appendScript(attributes, inlineContent) {
	const script = document.createElement("script");
	for (const [key, value] of Object.entries(attributes)) {
		if (value === void 0 || value === false) continue;
		if (value === true) {
			script.setAttribute(key, "");
			continue;
		}
		script.setAttribute(key, value);
	}
	if (inlineContent) script.textContent = inlineContent;
	document.head.appendChild(script);
}
function loadTrackingScriptsAfterConsent() {
	if (typeof window === "undefined") return;
	if (!trackingScriptsLoaded) {
		trackingScriptsLoaded = true;
		if (PLAUSIBLE_SCRIPT_SRC) {
			appendScript({}, PLAUSIBLE_INIT_SCRIPT);
			appendScript({
				src: PLAUSIBLE_SCRIPT_SRC,
				async: "true"
			});
		}
	}
	initSentryClient();
}
var GDPR_ALIGNED_COUNTRY_CODES = new Set([
	"GB",
	"IS",
	"LI",
	"NO"
]);
function requiresCookieConsentBanner(locale) {
	if (!locale?.countryCode) return false;
	if (locale.eu) return true;
	return GDPR_ALIGNED_COUNTRY_CODES.has(locale.countryCode.trim().toUpperCase());
}
const COOKIE_CONSENT_STORAGE_KEY = "console.cookieConsent";
function readStoredCookieConsent() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed == null || typeof parsed !== "object" || parsed.version !== 2 || typeof parsed.analytics !== "boolean" || typeof parsed.updatedAt !== "string") return null;
		return parsed;
	} catch {
		return null;
	}
}
function writeStoredCookieConsent(analytics) {
	const value = {
		version: 2,
		analytics,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (typeof window !== "undefined") try {
		localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value));
	} catch {}
	return value;
}
var CookieConsentContext = createContext(null);
function applyAnalyticsConsent(analytics) {
	setCookieConsentState({
		resolved: true,
		bannerRequired: true,
		analyticsGranted: analytics
	});
	if (analytics) loadTrackingScriptsAfterConsent();
}
function applyNonRegulatedRegion() {
	setCookieConsentState({
		resolved: true,
		bannerRequired: false,
		analyticsGranted: true
	});
	loadTrackingScriptsAfterConsent();
}
function CookieConsentProvider({ children }) {
	const { features } = useConsoleProfile();
	const cookieBannerEnabled = features.cookieBanner;
	const { data: locale, isSuccess: localeReady, isError: localeError } = useQuery({
		...localeQueryOptions(),
		enabled: cookieBannerEnabled
	});
	const bannerRequired = !cookieBannerEnabled ? false : localeReady ? requiresCookieConsentBanner(locale) : localeError ? true : false;
	const [preferencesOpen, setPreferencesOpen] = useState(false);
	const [isReopening, setIsReopening] = useState(false);
	const [showBanner, setShowBanner] = useState(false);
	const [customizeOpen, setCustomizeOpen] = useState(false);
	const [draftAnalytics, setDraftAnalytics] = useState(false);
	useEffect(() => {
		if (!cookieBannerEnabled) {
			setShowBanner(false);
			setPreferencesOpen(false);
			setIsReopening(false);
			setCustomizeOpen(false);
			applyNonRegulatedRegion();
			return;
		}
		if (!localeReady && !localeError) return;
		if (!bannerRequired) {
			setShowBanner(false);
			setPreferencesOpen(false);
			setIsReopening(false);
			applyNonRegulatedRegion();
			return;
		}
		const stored = readStoredCookieConsent();
		if (stored) {
			setShowBanner(false);
			setPreferencesOpen(false);
			setIsReopening(false);
			setDraftAnalytics(stored.analytics);
			applyAnalyticsConsent(stored.analytics);
			return;
		}
		setCookieConsentState({
			resolved: true,
			bannerRequired: true,
			analyticsGranted: false
		});
		setShowBanner(true);
		setDraftAnalytics(false);
	}, [
		bannerRequired,
		cookieBannerEnabled,
		localeError,
		localeReady
	]);
	const persistPreferences = useCallback((preferences) => {
		writeStoredCookieConsent(preferences.analytics);
		setDraftAnalytics(preferences.analytics);
		applyAnalyticsConsent(preferences.analytics);
		setShowBanner(false);
		setPreferencesOpen(false);
		setIsReopening(false);
		setCustomizeOpen(false);
	}, []);
	const acceptAll = useCallback(() => {
		persistPreferences({ analytics: true });
	}, [persistPreferences]);
	const rejectNonEssential = useCallback(() => {
		persistPreferences({ analytics: false });
	}, [persistPreferences]);
	const saveCustomPreferences = useCallback(() => {
		persistPreferences({ analytics: draftAnalytics });
	}, [draftAnalytics, persistPreferences]);
	const openPreferences = useCallback(() => {
		if (!cookieBannerEnabled) return;
		setDraftAnalytics(readStoredCookieConsent()?.analytics ?? canTrackAnalytics());
		setCustomizeOpen(true);
		setPreferencesOpen(true);
		setIsReopening(true);
		setShowBanner(true);
	}, [cookieBannerEnabled]);
	const closeBanner = useCallback(() => {
		if (isReopening && readStoredCookieConsent()) {
			setShowBanner(false);
			setPreferencesOpen(false);
			setIsReopening(false);
			setCustomizeOpen(false);
			return;
		}
		if (!readStoredCookieConsent()) rejectNonEssential();
	}, [isReopening, rejectNonEssential]);
	const handleCustomizeOpenChange = useCallback((open) => {
		if (!open && !readStoredCookieConsent()) setDraftAnalytics(false);
		setCustomizeOpen(open);
	}, []);
	const contextValue = useMemo(() => ({
		openPreferences,
		bannerRequired: cookieBannerEnabled && (localeReady || localeError) ? bannerRequired : false,
		preferencesOpen
	}), [
		bannerRequired,
		cookieBannerEnabled,
		localeError,
		localeReady,
		openPreferences,
		preferencesOpen
	]);
	return /* @__PURE__ */ jsxs(CookieConsentContext.Provider, {
		value: contextValue,
		children: [children, cookieBannerEnabled && showBanner ? /* @__PURE__ */ jsx(CookieConsentBanner, {
			customizeOpen,
			draftAnalytics,
			onAcceptAll: acceptAll,
			onClose: closeBanner,
			onCustomizeOpenChange: handleCustomizeOpenChange,
			onDraftAnalyticsChange: setDraftAnalytics,
			onRejectNonEssential: rejectNonEssential,
			onSaveCustomPreferences: saveCustomPreferences,
			reopening: isReopening
		}) : null]
	});
}
function useOptionalCookieConsent() {
	return useContext(CookieConsentContext);
}
function useIsLegacyTheme() {
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		if (typeof window !== "undefined") return isLegacyThemeFromStorage();
		return false;
	}
	return isLegacyTheme(theme, resolvedTheme);
}
function LegacyAppwriteIcon({ className }) {
	return /* @__PURE__ */ jsx("img", {
		src: LEGACY_ICON_SRC,
		alt: "",
		"aria-hidden": true,
		className: cn("h-6 w-auto shrink-0", className)
	});
}
function LegacyAppwriteLogo({ className, "aria-label": ariaLabel = "Appwrite" }) {
	return /* @__PURE__ */ jsx("img", {
		src: LEGACY_LOGO_SRC,
		alt: ariaLabel,
		className: cn("h-6 w-auto shrink-0", className)
	});
}
function AppwriteWordmark({ className, "aria-label": ariaLabel = "Appwrite" }) {
	if (useIsLegacyTheme()) return /* @__PURE__ */ jsx(LegacyAppwriteLogo, {
		className,
		"aria-label": ariaLabel
	});
	return /* @__PURE__ */ jsxs("svg", {
		width: 132,
		height: 24,
		viewBox: "0 0 132 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("h-6 w-auto shrink-0", className),
		role: "img",
		"aria-label": ariaLabel,
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M38.5573 19.4953C40.7162 19.4953 41.8075 18.3821 42.282 17.6242H42.4955C42.5904 18.4295 43.1598 19.1874 44.2749 19.1874H46.3864V16.8188H45.8407C45.4611 16.8188 45.2713 16.6057 45.2713 16.2741V6.77602H42.4718V8.29191H42.2583C41.7126 7.53397 40.5738 6.4681 38.4861 6.4681C35.1646 6.4681 32.6973 9.21567 32.6973 12.9817C32.6973 16.7478 35.2121 19.4953 38.5573 19.4953ZM39.0555 16.7952C37.0863 16.7952 35.5442 15.3503 35.5442 13.0054C35.5442 10.7079 37.0389 9.14461 39.0317 9.14461C40.9297 9.14461 42.5193 10.5421 42.5193 13.0054C42.5193 15.1135 41.167 16.7952 39.0555 16.7952Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M48.0392 24.0001H50.8387V17.6242H51.0522C51.5742 18.3821 52.6893 19.4953 54.8956 19.4953C58.2171 19.4953 60.637 16.7004 60.637 12.9817C60.637 9.23935 58.051 6.4681 54.7058 6.4681C52.5706 6.4681 51.5267 7.62871 51.0285 8.26823H50.815V6.77602H48.0392V24.0001ZM54.3025 16.8662C52.3808 16.8662 50.7913 15.4451 50.7913 12.9817C50.7913 10.8737 52.1436 9.09724 54.2551 9.09724C56.2242 9.09724 57.7663 10.6368 57.7663 12.9817C57.7663 15.2793 56.2717 16.8662 54.3025 16.8662Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M62.0816 24.0001H64.8811V17.6242H65.0946C65.6165 18.3821 66.7316 19.4953 68.938 19.4953C72.2594 19.4953 74.4487 16.7004 74.4487 12.9817C74.4487 9.23935 72.0934 6.4681 68.7482 6.4681C66.613 6.4681 65.5691 7.62871 65.0709 8.26823H64.8573V6.77602H62.0816V24.0001ZM68.3449 16.8662C66.4232 16.8662 64.8336 15.4451 64.8336 12.9817C64.8336 10.8737 66.1859 9.09724 68.2974 9.09724C70.2666 9.09724 71.8087 10.6368 71.8087 12.9817C71.8087 15.2793 70.314 16.8662 68.3449 16.8662Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M78.1493 19.4756H82.1114L84.3652 9.74073H84.5076L86.7614 19.4756H90.6997L93.8533 7.06423H91.0318L88.778 16.8228H88.5645L86.3106 7.06423H82.5858L80.3083 16.8228H80.0948L77.8647 7.06423H74.8754L78.1493 19.4756Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M95.2716 19.4756H98.0711V13.341C98.0711 10.9961 99.1624 9.55125 101.203 9.55125H102.436V6.75631H101.511C99.9216 6.75631 98.7117 7.84586 98.2372 8.88804H98.0474V7.06422H95.2716V19.4756Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M116.329 19.4756H118.512V16.9886H116.353C115.499 16.9886 115.143 16.6096 115.143 15.7333V9.52756H118.654V7.06422H115.143V3.5824H112.486V7.06422H110.161V9.52756H112.32V15.757C112.32 18.3861 113.909 19.4756 116.329 19.4756Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M126.022 19.4953C128.608 19.4953 130.886 18.2163 131.692 15.6345L129.13 15.0187C128.679 16.3925 127.375 17.1031 125.999 17.1031C123.958 17.1031 122.606 15.7767 122.582 13.6923H132.001V12.9107C132.001 9.21567 129.7 6.4681 125.904 6.4681C122.558 6.4681 119.688 9.09724 119.688 13.0054C119.688 16.7952 122.226 19.4953 126.022 19.4953ZM122.606 11.6553C122.772 10.1631 124.124 8.90775 125.904 8.90775C127.612 8.90775 129.012 9.97361 129.154 11.6553H122.606Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M108.916 19.4756H106.116V9.52756H103.934V7.06422H108.916V19.4756Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M107.309 5.34169C108.329 5.34169 109.088 4.58374 109.088 3.58893C109.088 2.61781 108.329 1.85986 107.309 1.85986C106.288 1.85986 105.529 2.61781 105.529 3.58893C105.529 4.58374 106.288 5.34169 107.309 5.34169Z",
				fill: "var(--foreground)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M24.4429 16.4322V21.9096H10.7519C6.76318 21.9096 3.28044 19.7067 1.4171 16.4322C1.14622 15.9561 0.909137 15.4567 0.710264 14.9383C0.319864 13.9225 0.0744552 12.8325 0 11.6952V10.2143C0.0161646 9.96089 0.0416361 9.70942 0.0749451 9.46095C0.143032 8.95105 0.245898 8.45211 0.381093 7.96711C1.66006 3.36909 5.81877 0 10.7519 0C15.6851 0 19.8433 3.36909 21.1223 7.96711H15.2682C14.3072 6.4683 12.6437 5.4774 10.7519 5.4774C8.86017 5.4774 7.19668 6.4683 6.23562 7.96711C5.9427 8.42274 5.71542 8.92516 5.56651 9.46095C5.43425 9.93599 5.36371 10.4369 5.36371 10.9548C5.36371 12.5248 6.01324 13.94 7.05463 14.9383C8.01961 15.865 9.32061 16.4322 10.7519 16.4322H24.4429Z",
				fill: "var(--brand-cta)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M24.4429 9.46094V14.9383H14.4492C15.4906 13.94 16.1401 12.5248 16.1401 10.9548C16.1401 10.4369 16.0696 9.93598 15.9373 9.46094H24.4429Z",
				fill: "var(--brand-cta)"
			})
		]
	});
}
var TOOLTIP_DEFAULT = "Payment failed - update billing to avoid interrupting your projects and services.";
var TOOLTIP_READONLY = "Payment failed - this organization has restricted access until the outstanding invoice is paid. Project and service changes are limited; open Billing to update payment and restore access.";
function FailedInvoiceWarningIcon({ show, orgBillingReadonly, className, iconClassName, suppressTooltip }) {
	const t = useT();
	if (!show) return null;
	const tooltip = t(orgBillingReadonly ? TOOLTIP_READONLY : TOOLTIP_DEFAULT);
	if (suppressTooltip) return /* @__PURE__ */ jsx("span", {
		className: cn("inline-flex shrink-0", className),
		title: tooltip,
		children: /* @__PURE__ */ jsx(AlertTriangle, {
			className: cn("h-3.5 w-3.5 text-red-600 dark:text-red-400", iconClassName),
			"aria-hidden": true
		})
	});
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 0,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: cn("inline-flex shrink-0 cursor-default", className),
				children: /* @__PURE__ */ jsx(AlertTriangle, {
					className: cn("h-3.5 w-3.5 text-red-600 dark:text-red-400", iconClassName),
					"aria-hidden": true
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-xs",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px]",
				children: tooltip
			})
		})] })
	});
}
function getPlanBadgeColor(plan) {
	return getPlanBadgeColor$1(plan);
}
function getPlanDisplayName(plan) {
	return getCanonicalPlanDisplayLabel(plan);
}
var SHARD_SPECS = [
	{
		clip: "polygon(50% 0%, 0% 90%, 100% 65%)",
		sx: -17,
		sy: -13,
		r0: -18,
		r1: 6,
		r2: -32,
		d: 0
	},
	{
		clip: "polygon(15% 0%, 100% 0%, 85% 100%)",
		sx: 18,
		sy: -11,
		r0: 14,
		r1: 28,
		r2: 48,
		d: .08
	},
	{
		clip: "polygon(0 25%, 45% 100%, 100% 70%)",
		sx: -12,
		sy: 16,
		r0: -8,
		r1: -22,
		r2: -38,
		d: .04
	},
	{
		clip: "polygon(0 0, 100% 35%, 55% 100%)",
		sx: 14,
		sy: 14,
		r0: 22,
		r1: 10,
		r2: 36,
		d: .14
	},
	{
		clip: "polygon(50% 0%, 0% 55%, 100% 100%)",
		sx: -19,
		sy: 5,
		r0: -28,
		r1: -12,
		r2: -42,
		d: .18
	},
	{
		clip: "polygon(0 45%, 100% 0%, 100% 100%)",
		sx: 6,
		sy: -18,
		r0: 8,
		r1: 18,
		r2: 32,
		d: .1
	},
	{
		clip: "polygon(30% 0%, 100% 40%, 0% 100%)",
		sx: 3,
		sy: 17,
		r0: 35,
		r1: 52,
		r2: 68,
		d: .06
	}
];
function ProjectSelectorPlanBadge({ plan, billingStress, upcomingDowngrade = false, className }) {
	const t = useT();
	const label = upcomingDowngrade ? t("Downgraded") : getPlanDisplayName(plan);
	const colors = upcomingDowngrade ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : getPlanBadgeColor(plan);
	if (!billingStress || upcomingDowngrade) return /* @__PURE__ */ jsx("span", {
		className: cn("shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-medium capitalize", colors, className),
		children: label
	});
	return /* @__PURE__ */ jsx("span", {
		className: cn("plan-badge-stress-outer inline-flex shrink-0 overflow-visible", className),
		children: /* @__PURE__ */ jsxs("span", {
			className: cn("plan-badge-stress-inner relative isolate inline-flex shrink-0 items-center justify-center overflow-visible rounded-md px-1.5 py-0.5 text-[10px] font-medium capitalize", colors),
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "pointer-events-none absolute inset-0 z-[6] flex items-center justify-center overflow-visible",
					"aria-hidden": true,
					children: SHARD_SPECS.map((s, i) => /* @__PURE__ */ jsx("span", {
						className: "plan-badge-shard",
						style: {
							clipPath: s.clip,
							"--sx": `${s.sx}px`,
							"--sy": `${s.sy}px`,
							"--r0": `${s.r0}deg`,
							"--r1": `${s.r1}deg`,
							"--r2": `${s.r2}deg`,
							"--shard-delay": `${s.d}s`
						}
					}, i))
				}),
				/* @__PURE__ */ jsx("span", {
					className: "plan-badge-stress-crack pointer-events-none absolute start-1/2 top-[12%] z-[5] w-px bg-gradient-to-b from-transparent via-foreground/45 to-transparent dark:via-foreground/40",
					style: { bottom: "12%" },
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("span", {
					className: "plan-badge-stress-label relative z-[4] leading-none",
					children: label
				})
			]
		})
	});
}
function AdditionalChargeAlert({ resourceLabel, pricePerMonth, currency = "USD", perUnit = false }) {
	const formattedPrice = formatCurrency(pricePerMonth, currency);
	return /* @__PURE__ */ jsxs(Alert, { children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
		className: "text-[12px]",
		children: /* @__PURE__ */ jsx("p", { children: perUnit ? /* @__PURE__ */ jsxs(Fragment, { children: [
			"Each additional ",
			resourceLabel,
			" will incur a charge of",
			" ",
			/* @__PURE__ */ jsxs("span", {
				className: "font-medium text-foreground",
				children: [formattedPrice, " per month"]
			}),
			"."
		] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
			"This ",
			resourceLabel,
			" will incur an additional charge of",
			" ",
			/* @__PURE__ */ jsxs("span", {
				className: "font-medium text-foreground",
				children: [formattedPrice, " per month"]
			}),
			"."
		] }) })
	})] });
}
function getAddon(plan, key) {
	return plan?.addons?.[key];
}
function getPlanAddonIncludedCount(plan, key) {
	if (!plan) return null;
	if (key === "projects") {
		const fromPlan = plan.projects;
		if (fromPlan !== void 0 && fromPlan !== null && !Number.isNaN(Number(fromPlan)) && Number(fromPlan) > 0) return Number(fromPlan);
	}
	if (key === "seats") {
		const fromPlan = plan.members;
		if (fromPlan !== void 0 && fromPlan !== null && !Number.isNaN(Number(fromPlan)) && Number(fromPlan) > 0) return Number(fromPlan);
	}
	const planIncluded = getAddon(plan, key)?.planIncluded;
	if (planIncluded !== void 0 && planIncluded !== null && !Number.isNaN(Number(planIncluded))) return Number(planIncluded);
	return null;
}
function getPlanAddonPrice(plan, key) {
	const price = getAddon(plan, key)?.price;
	if (price === void 0 || price === null || Number.isNaN(Number(price))) return 0;
	return Number(price);
}
function wouldIncurPlanAddonCharge(plan, key, currentCount, additionalCount = 1) {
	const price = getPlanAddonPrice(plan, key);
	if (price <= 0) return null;
	const included = getPlanAddonIncludedCount(plan, key);
	if (included === null) return null;
	if (currentCount + additionalCount <= included) return null;
	return {
		pricePerMonth: price,
		currency: getAddon(plan, key)?.currency || "USD"
	};
}
function CreateProjectDialog({ open, onOpenChange, teamId, organizationPlan: organizationPlanProp, currentProjectsCount = 0 }) {
	const t = useT();
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const supportsMultiRegion = features.multiRegion;
	const [projectId, setProjectId] = useState(void 0);
	const [name, setName] = useState("");
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [errors, setErrors] = useState({});
	const { plan: organizationPlanFromHook } = useOrganizationPlan(open && !organizationPlanProp ? teamId : null);
	const organizationPlan = organizationPlanProp ?? organizationPlanFromHook;
	const createProjectMutation = useCreateProject(teamId);
	const { regions, isLoading: regionsLoading, error: regionsError } = useRegions(open && supportsMultiRegion);
	const isRegionComingSoon = (region) => {
		return region.status === "coming-soon" || region.comingSoon === true || region.disabled === true || region.status === "disabled" || region.status === "inactive" || region.inactive === true;
	};
	const availableRegions = useMemo(() => {
		return regions.filter((r) => !isRegionComingSoon(r));
	}, [regions]);
	const sortedRegions = useMemo(() => {
		const available = regions.filter((r) => !isRegionComingSoon(r));
		const inactive = regions.filter((r) => isRegionComingSoon(r));
		return [...available, ...inactive];
	}, [regions]);
	useEffect(() => {
		if (availableRegions.length > 0 && !selectedRegion) {
			const defaultRegion = availableRegions.find((r) => r.$id === "fra") || availableRegions[0];
			if (defaultRegion) setSelectedRegion(defaultRegion.$id);
		}
	}, [availableRegions, selectedRegion]);
	const additionalProjectCharge = useMemo(() => {
		if (!features.billing || !organizationPlan) return null;
		return wouldIncurPlanAddonCharge(organizationPlan, "projects", currentProjectsCount);
	}, [
		features.billing,
		organizationPlan,
		currentProjectsCount
	]);
	const handleOpenChange = (newOpen) => {
		if (!createProjectMutation.isPending) {
			onOpenChange(newOpen);
			if (!newOpen) resetForm();
		}
	};
	const resetForm = () => {
		setProjectId(void 0);
		setName("");
		setSelectedRegion(null);
		setErrors({});
	};
	useEffect(() => {
		if (!open) resetForm();
	}, [open]);
	const validate = () => {
		const newErrors = {};
		const trimmedName = name.trim();
		if (!trimmedName) newErrors.name = t("Name is required");
		else if (trimmedName.length > 128) newErrors.name = `${t("Name must be no longer than")} 128 ${t("characters")}`;
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		if (!teamId) {
			toast.error(t("Team ID is required"));
			return;
		}
		if (supportsMultiRegion && !selectedRegion) {
			toast.error(t("Please select a region"));
			return;
		}
		try {
			const result = await createProjectMutation.mutateAsync({
				projectId,
				name: name.trim(),
				region: supportsMultiRegion ? selectedRegion ?? void 0 : void 0
			});
			toast.success(t("Project created successfully"));
			handleOpenChange(false);
			if (result?.$id) navigate({
				to: "/projects/$projectId",
				params: { projectId: result.$id }
			});
		} catch (error) {
			toast.error(error?.message || t("Failed to create project"));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create project") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create a new project in your organization.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "name",
										children: [
											t("Name"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "name",
										type: "text",
										placeholder: t("Enter project name"),
										value: name,
										onChange: (e) => {
											setName(e.target.value);
											if (errors.name) setErrors((prev) => ({
												...prev,
												name: ""
											}));
										},
										disabled: createProjectMutation.isPending,
										maxLength: 128,
										className: errors.name ? "border-destructive" : "",
										autoFocus: true
									}),
									errors.name && /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-destructive",
										children: errors.name
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "project-id",
									children: t("Project ID")
								}), /* @__PURE__ */ jsx(IdInput, {
									id: "project-id",
									value: projectId,
									onChange: setProjectId,
									maxLength: 36,
									disabled: createProjectMutation.isPending,
									placeholder: t("Leave blank to auto-generate")
								})]
							}),
							supportsMultiRegion && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-muted-foreground" }),
										t("Region"),
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), regionsLoading ? /* @__PURE__ */ jsx("div", { className: "h-9 w-full animate-pulse rounded-md border border-border bg-muted/50" }) : regionsError ? /* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-destructive/50 bg-destructive/5 p-4 text-center",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-destructive mb-1",
										children: t("Failed to load regions")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: regionsError instanceof Error ? regionsError.message : t("Unknown error")
									})]
								}) : regions.length > 0 ? /* @__PURE__ */ jsxs(Select, {
									value: selectedRegion || void 0,
									onValueChange: setSelectedRegion,
									disabled: createProjectMutation.isPending,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "h-9 w-full text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {
											placeholder: t("Select a region"),
											children: selectedRegion ? (() => {
												const region = regions.find((r) => r.$id === selectedRegion);
												if (!region) return t("Select a region");
												const flagCode = region.flag || "";
												const regionName = region.name || region.$id || t("Unknown");
												const flagUrl = flagCode ? `${sdk.forConsole.client.config.endpoint}/avatars/flags/${flagCode.toLowerCase()}?width=80&height=80&quality=100&project=console` : null;
												return /* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 w-full",
													children: [
														flagUrl ? /* @__PURE__ */ jsx("img", {
															src: flagUrl,
															alt: `${regionName} flag`,
															className: "h-4 w-4 shrink-0 rounded border border-border/50 object-cover",
															onError: (e) => {
																const target = e.target;
																target.style.display = "none";
															}
														}) : /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
														/* @__PURE__ */ jsx("span", {
															className: "flex-1",
															children: regionName
														}),
														/* @__PURE__ */ jsx("span", {
															className: "text-[11px] font-mono text-muted-foreground",
															children: region.$id
														})
													]
												});
											})() : t("Select a region")
										})
									}), /* @__PURE__ */ jsx(SelectContent, { children: sortedRegions.map((region, index) => {
										const flagCode = region.flag || "";
										const regionName = region.name || region.$id || t("Unknown");
										const flagUrl = flagCode ? `${sdk.forConsole.client.config.endpoint}/avatars/flags/${flagCode.toLowerCase()}?width=80&height=80&quality=100&project=console` : null;
										const isComingSoon = isRegionComingSoon(region);
										return /* @__PURE__ */ jsxs(Fragment, { children: [index > 0 && !isRegionComingSoon(sortedRegions[index - 1]) && isComingSoon && /* @__PURE__ */ jsx(SelectSeparator, { className: "my-1" }, `separator-${region.$id}`), /* @__PURE__ */ jsx(SelectItem, {
											value: region.$id,
											disabled: isComingSoon,
											className: cn(isComingSoon && "opacity-50 cursor-not-allowed"),
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 w-full",
												children: [
													flagUrl ? /* @__PURE__ */ jsx("img", {
														src: flagUrl,
														alt: `${regionName} flag`,
														className: "h-4 w-4 shrink-0 rounded border border-border/50 object-cover",
														onError: (e) => {
															const target = e.target;
															target.style.display = "none";
														}
													}) : /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
													/* @__PURE__ */ jsx("span", {
														className: "flex-1",
														children: regionName
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-[11px] font-mono text-muted-foreground",
														children: region.$id
													}),
													isComingSoon && /* @__PURE__ */ jsx("span", {
														className: "text-[11px] text-muted-foreground",
														children: t("Coming soon")
													})
												]
											})
										}, region.$id)] });
									}) })]
								}) : /* @__PURE__ */ jsx("div", {
									className: "rounded-lg border border-border bg-muted/50 p-4 text-center",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("No regions available")
									})
								})]
							}),
							additionalProjectCharge && /* @__PURE__ */ jsx(AdditionalChargeAlert, {
								resourceLabel: "project",
								pricePerMonth: additionalProjectCharge.pricePerMonth,
								currency: additionalProjectCharge.currency
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => handleOpenChange(false),
							disabled: createProjectMutation.isPending,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							variant: "brandCta",
							disabled: createProjectMutation.isPending || !name.trim() || name.trim().length > 128 || supportsMultiRegion && !selectedRegion,
							children: t("Create")
						})]
					})]
				})
			]
		})
	});
}
function openCreateOrganizationFlow(navigate, options) {
	const features = getActiveProfileFeatures();
	if (!features.multiTenancy) return;
	if (features.billing) {
		navigateToUpgradeWizard(navigate);
		return;
	}
	if (options.onCreateOrganization) {
		options.onCreateOrganization();
		return;
	}
	if (options.orgId) navigate({
		to: "/organizations/$orgId",
		params: { orgId: options.orgId },
		search: { createOrg: true }
	});
	else navigate({
		to: "/",
		search: { createOrg: true }
	});
}
var TEAM_PROJECTS_PREFETCH_STALE_MS = 300 * 1e3;
function stubTeamFromProject(project) {
	return {
		$id: project.teamId,
		name: "",
		color: "",
		members: 0,
		orgId: project.teamId
	};
}
function ProjectSelectorTriggerSkeleton({ className, isMobile, supportsMultiTenancy, isCloud, compact = false }) {
	if (compact) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-7 max-w-[200px] min-w-0 items-center gap-1.5 rounded-md px-2 py-1", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("div", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded-full bg-muted" }),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-20 max-w-full animate-pulse rounded bg-muted" }),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-3 shrink-0 animate-pulse rounded bg-muted" })
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex max-w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5", isMobile ? "h-auto w-full border border-border bg-background px-2.5 py-2" : "h-9", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("div", { className: "h-6 w-6 shrink-0 animate-pulse rounded-full bg-muted" }),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 space-y-1",
				children: [/* @__PURE__ */ jsx("div", { className: "h-4 w-32 max-w-full animate-pulse rounded bg-muted" }), supportsMultiTenancy && isMobile ? /* @__PURE__ */ jsx("div", { className: "h-3 w-24 animate-pulse rounded bg-muted" }) : null]
			}),
			isCloud ? /* @__PURE__ */ jsx("div", { className: "h-5 w-[4.25rem] shrink-0 animate-pulse rounded border bg-muted" }) : null,
			/* @__PURE__ */ jsx("div", { className: "h-3.5 w-3.5 shrink-0 animate-pulse rounded bg-muted" })
		]
	});
}
function ProjectSelectorIdlePlaceholder({ className, compact = false, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex max-w-full min-w-0 items-center overflow-visible rounded-md text-start opacity-50", compact ? "h-7 max-w-[200px] gap-1.5 px-2 py-1" : "h-9 gap-2 px-2 py-1.5", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("div", { className: cn("shrink-0 rounded-full bg-muted", compact ? "h-3.5 w-3.5" : "h-6 w-6") }),
			/* @__PURE__ */ jsx("p", {
				className: cn("min-w-0 flex-1 truncate font-medium", compact ? "text-[11px] text-muted-foreground" : "text-[13px] text-muted-foreground"),
				children: label
			}),
			/* @__PURE__ */ jsx(ChevronDown, { className: cn("shrink-0 text-muted-foreground", compact ? "h-3 w-3 opacity-70" : "h-3.5 w-3.5") })
		]
	});
}
function ProjectSelectorPlanBadgeSlot({ isCloud, org, billingStress }) {
	if (!isCloud) return null;
	if (org) return /* @__PURE__ */ jsx(ProjectSelectorPlanBadge, {
		plan: org.plan,
		billingStress,
		upcomingDowngrade: !!org.billingPlanDowngrade
	});
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": true,
		className: "invisible shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-medium capitalize",
		children: "Enterprise"
	});
}
function getProjectsInfiniteNextPageParam(lastPage, allPages) {
	const loadedCount = allPages.reduce((sum, page) => sum + (page.projects?.length || 0), 0);
	if (lastPage.total && loadedCount < lastPage.total) return allPages.length;
}
function ProjectSelector({ className, collapsed, projectId, isMobile, onCreateOrganization, onProjectSelect, compact = false, disabled = false }) {
	const t = useT();
	const { features, isCloud } = useConsoleProfile();
	const supportsMultiTenancy = features.multiTenancy;
	const selectionMode = typeof onProjectSelect === "function";
	const navigate = useNavigate();
	const { account, isAuthenticated, isFetched: authFetched } = useAuth();
	const [open, setOpen] = useState(false);
	const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
	const { teams, organizations, isLoading: orgsLoading } = useTeams();
	const { project: currentProject, isLoading: currentProjectLoading, error: currentProjectError } = useProject(projectId);
	const projectPaymentRequired = isHttpPaymentRequiredError(currentProjectError);
	const projectAccessFailed = isHttpProjectAccessError(currentProjectError);
	const { data: routeFailedInvoicePresence, isLoading: invoicePresenceLoading } = useOrganizationFailedInvoicePresence(projectId ? currentProject?.teamId : void 0);
	const billingFailureTeamId = routeFailedInvoicePresence?.hasFailedInvoice && currentProject?.teamId ? currentProject.teamId : null;
	const billingOrgReadonly = useMemo(() => {
		if (!billingFailureTeamId) return false;
		return isOrganizationBillingReadonlyStatus(organizations.find((o) => o.$id === billingFailureTeamId)?.status);
	}, [billingFailureTeamId, organizations]);
	const [projectSearch, setProjectSearch] = useState("");
	const projectsPageSize = 25;
	const initialTeam = useMemo(() => {
		if (currentProject && teams.length > 0) return teams.find((t$1) => t$1.$id === currentProject.teamId) || teams[0];
		return teams[0] || null;
	}, [currentProject, teams]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [selectedProject, setSelectedProject] = useState(null);
	const [teamSearch, setTeamSearch] = useState("");
	const resolvedProject = useMemo(() => {
		const candidate = selectedProject ?? currentProject ?? null;
		if (!candidate || !projectId) return null;
		if (candidate.$id !== projectId) return currentProject?.$id === projectId ? currentProject : null;
		return candidate;
	}, [
		selectedProject,
		currentProject,
		projectId
	]);
	const resolvedTeam = useMemo(() => {
		const fromSelection = selectedTeam ?? initialTeam;
		if (fromSelection) return fromSelection;
		if (resolvedProject?.teamId) return stubTeamFromProject(resolvedProject);
		return null;
	}, [
		selectedTeam,
		initialTeam,
		resolvedProject?.teamId
	]);
	useEffect(() => {
		if (initialTeam && !selectedTeam) setSelectedTeam(initialTeam);
	}, [initialTeam, selectedTeam]);
	useEffect(() => {
		if (currentProject && !selectedProject) setSelectedProject(currentProject);
	}, [currentProject, selectedProject]);
	useEffect(() => {
		if (!projectId) {
			if (selectionMode) setSelectedProject(null);
			return;
		}
		if (currentProject) {
			setSelectedProject(currentProject);
			const team = teams.find((t$1) => t$1.$id === currentProject.teamId);
			if (team) setSelectedTeam(team);
		}
	}, [
		currentProject,
		teams,
		projectId,
		selectionMode
	]);
	useEffect(() => {
		setProjectSearch("");
	}, [resolvedTeam?.$id]);
	const { data: consoleTeam } = useConsoleTeam(resolvedTeam?.$id);
	const pinnedIds = useMemo(() => parsePinnedProjectIds(consoleTeam?.prefs), [consoleTeam?.prefs]);
	const { data: pinnedProjectsData, isPlaceholderData: isPinnedPlaceholder } = useQuery({
		...pinnedProjectsQueryOptions(resolvedTeam?.$id ?? null, pinnedIds),
		placeholderData: keepPreviousData
	});
	const projectSearchActive = Boolean(projectSearch.trim());
	const listExcludePinnedIds = projectSearchActive ? void 0 : pinnedIds;
	const { data: switcherProjectScopeData } = useQuery(organizationProjectScopeQueryOptions(resolvedTeam?.$id));
	const switcherProjectScope = switcherProjectScopeData ?? null;
	const { projects: paginatedProjects, total: infiniteTotal, isFetchingNextPage, hasNextPage, fetchNextPage, isPlaceholderData: isInfinitePlaceholder } = useProjectsForTeamInfinite(resolvedTeam?.$id, projectsPageSize, projectSearch, listExcludePinnedIds, switcherProjectScope);
	const queryClient = useQueryClient();
	const prefetchTeamProjects = useCallback((teamId) => {
		if (!teamId || teamId === resolvedTeam?.$id) return;
		(async () => {
			let excludeIds = [];
			try {
				excludeIds = parsePinnedProjectIds((await queryClient.ensureQueryData({
					...consoleTeamQueryOptions(teamId),
					staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS
				}))?.prefs);
			} catch {
				return;
			}
			const prefetchScope = await queryClient.ensureQueryData(organizationProjectScopeQueryOptions(teamId)).catch(() => null);
			const infiniteQueryKey = projectsForTeamInfiniteQueryKey(teamId, projectsPageSize, "", excludeIds, prefetchScope ?? null);
			const pinnedOptions = pinnedProjectsQueryOptions(teamId, excludeIds);
			try {
				await Promise.all([queryClient.prefetchQuery({
					...pinnedOptions,
					staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS
				}), queryClient.prefetchInfiniteQuery({
					queryKey: infiniteQueryKey,
					queryFn: ({ pageParam = 0 }) => fetchActiveProjects(teamId, pageParam, projectsPageSize, "", excludeIds, prefetchScope ?? null),
					initialPageParam: 0,
					staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS,
					getNextPageParam: getProjectsInfiniteNextPageParam
				})]);
			} catch {}
		})();
	}, [
		queryClient,
		projectsPageSize,
		resolvedTeam?.$id
	]);
	const handleSelectTeam = useCallback(async (team) => {
		if (team.$id === resolvedTeam?.$id) return;
		let excludeIds = [];
		try {
			excludeIds = parsePinnedProjectIds((await queryClient.ensureQueryData({
				...consoleTeamQueryOptions(team.$id),
				staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS
			}))?.prefs);
		} catch {}
		const switchScope = await queryClient.ensureQueryData(organizationProjectScopeQueryOptions(team.$id)).catch(() => null);
		const infiniteQueryKey = projectsForTeamInfiniteQueryKey(team.$id, projectsPageSize, "", excludeIds, switchScope ?? null);
		const pinnedOptions = pinnedProjectsQueryOptions(team.$id, excludeIds);
		const hasInfiniteCache = queryClient.getQueryData(infiniteQueryKey);
		const hasPinnedCache = queryClient.getQueryData(pinnedOptions.queryKey);
		if (hasInfiniteCache && hasPinnedCache) setSelectedTeam(team);
		else {
			await Promise.all([hasPinnedCache ? Promise.resolve() : queryClient.fetchQuery({
				...pinnedOptions,
				staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS
			}), hasInfiniteCache ? Promise.resolve() : queryClient.fetchInfiniteQuery({
				queryKey: infiniteQueryKey,
				queryFn: ({ pageParam = 0 }) => fetchActiveProjects(team.$id, pageParam, projectsPageSize, "", excludeIds, switchScope ?? null),
				initialPageParam: 0,
				staleTime: TEAM_PROJECTS_PREFETCH_STALE_MS,
				getNextPageParam: getProjectsInfiniteNextPageParam
			})]);
			setSelectedTeam(team);
		}
	}, [
		queryClient,
		resolvedTeam?.$id,
		projectsPageSize
	]);
	const currentProjectTeam = useMemo(() => {
		if (!currentProject || !teams.length) return null;
		return teams.find((t$1) => t$1.$id === currentProject.teamId) || null;
	}, [currentProject, teams]);
	const currentProjectOrg = useMemo(() => {
		if (!currentProjectTeam) return null;
		return organizations.find((org) => org.$id === currentProjectTeam.orgId) || null;
	}, [currentProjectTeam, organizations]);
	const orgDisplayName = currentProjectTeam?.name || resolvedTeam?.name || "";
	const lastFullProjectsCountRef = useRef(0);
	if (!projectSearchActive && resolvedTeam?.$id) lastFullProjectsCountRef.current = pinnedIds.length + (infiniteTotal ?? 0);
	const projectsCount = projectSearchActive ? lastFullProjectsCountRef.current : pinnedIds.length + (infiniteTotal ?? 0);
	const filteredTeams = useMemo(() => {
		if (!teams.length) return [];
		if (!teamSearch) return teams;
		return teams.filter((t$1) => t$1.name.toLowerCase().includes(teamSearch.toLowerCase()));
	}, [teamSearch, teams]);
	const pinnedProjects = useMemo(() => {
		if (!pinnedProjectsData?.projects?.length || !resolvedTeam) return [];
		const raw = pinnedProjectsData.projects;
		const byId = new Map(raw.map((p) => [p.$id, p]));
		return pinnedIds.map((id) => byId.get(id)).filter((p) => p != null).map((p) => ({
			$id: p.$id,
			name: p.name,
			teamId: p.teamId,
			region: p.region || "unknown",
			createdAt: p.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			icon: p.name.charAt(0).toUpperCase(),
			archived: p.status === "archived"
		}));
	}, [
		pinnedProjectsData,
		pinnedIds,
		resolvedTeam
	]);
	const displayProjects = useMemo(() => {
		if (!resolvedTeam) return [];
		const otherProjects = paginatedProjects.filter((p) => p.$id !== projectId);
		const pinnedForList = projectSearchActive ? [] : pinnedProjects.filter((p) => p.$id !== projectId);
		if (currentProject && currentProject.teamId === resolvedTeam.$id) return [
			currentProject,
			...pinnedForList,
			...otherProjects
		];
		return [...pinnedForList, ...otherProjects];
	}, [
		currentProject,
		pinnedProjects,
		paginatedProjects,
		projectId,
		projectSearchActive,
		resolvedTeam
	]);
	const lastStableDisplayRef = useRef([]);
	const lastStablePinnedIdsRef = useRef([]);
	const bothQueriesReady = !isPinnedPlaceholder && !isInfinitePlaceholder;
	const stableDisplayProjects = bothQueriesReady && resolvedTeam ? (() => {
		lastStableDisplayRef.current = displayProjects;
		lastStablePinnedIdsRef.current = pinnedIds;
		return displayProjects;
	})() : lastStableDisplayRef.current;
	const stablePinnedIds = bothQueriesReady && resolvedTeam ? pinnedIds : lastStablePinnedIdsRef.current;
	const handleSelectProject = (project, event) => {
		if (!selectionMode && event && (event.ctrlKey || event.metaKey || event.shiftKey)) return;
		if (selectionMode && event) event.preventDefault();
		setSelectedProject(project);
		const projectTeam = teams.find((t$1) => t$1.$id === project.teamId);
		if (projectTeam) setSelectedTeam(projectTeam);
		setOpen(false);
		if (selectionMode) onProjectSelect?.(project.$id);
	};
	const handleCreateOrganization = useCallback(() => {
		if (!supportsMultiTenancy) return;
		const prefs = account?.prefs;
		openCreateOrganizationFlow(navigate, {
			onCreateOrganization,
			orgId: currentProject?.teamId || prefs?.organization
		});
		setOpen(false);
	}, [
		account,
		currentProject?.teamId,
		navigate,
		onCreateOrganization,
		supportsMultiTenancy
	]);
	const isProjectSelectorLoading = !resolvedProject && currentProjectLoading;
	const isProjectSelectorShellReady = useMemo(() => {
		if (!projectId) return true;
		if (projectPaymentRequired || projectAccessFailed) return true;
		if (!resolvedProject || resolvedProject.$id !== projectId) return false;
		if (currentProjectLoading) return false;
		if (invoicePresenceLoading) return false;
		if (supportsMultiTenancy) {
			if (orgsLoading) return false;
			if (!currentProjectTeam?.name) return false;
			if (isCloud && !currentProjectOrg) return false;
		}
		return true;
	}, [
		projectId,
		projectPaymentRequired,
		projectAccessFailed,
		resolvedProject,
		currentProjectLoading,
		invoicePresenceLoading,
		supportsMultiTenancy,
		orgsLoading,
		currentProjectTeam?.name,
		isCloud,
		currentProjectOrg
	]);
	useLayoutEffect(() => {
		if (selectionMode) return;
		if (!projectId) {
			resetInitialLoaderShellGate(INITIAL_LOADER_SHELL_GATE.projectSelector);
			return;
		}
		setInitialLoaderShellGate(INITIAL_LOADER_SHELL_GATE.projectSelector, isProjectSelectorShellReady);
	}, [
		projectId,
		isProjectSelectorShellReady,
		selectionMode
	]);
	if (isProjectSelectorLoading) return /* @__PURE__ */ jsx(ProjectSelectorTriggerSkeleton, {
		className,
		isMobile,
		supportsMultiTenancy,
		isCloud,
		compact
	});
	if (!selectionMode && (!resolvedProject || !resolvedTeam)) return null;
	if (selectionMode && !resolvedTeam) {
		if (authFetched && !isAuthenticated) return /* @__PURE__ */ jsx(ProjectSelectorIdlePlaceholder, {
			className,
			compact,
			label: t("Select project")
		});
		if (orgsLoading || !authFetched) return /* @__PURE__ */ jsx(ProjectSelectorTriggerSkeleton, {
			className,
			isMobile,
			supportsMultiTenancy,
			isCloud,
			compact
		});
		return /* @__PURE__ */ jsx(ProjectSelectorIdlePlaceholder, {
			className,
			compact,
			label: t("Select project")
		});
	}
	if (!resolvedTeam) return null;
	const contentProps = {
		selectedTeam: resolvedTeam,
		onSelectTeam: handleSelectTeam,
		selectedProject: resolvedProject,
		handleSelectProject,
		teamSearch,
		setTeamSearch,
		projectSearch,
		setProjectSearch,
		filteredTeams,
		displayProjects: stableDisplayProjects,
		pinnedProjectIds: stablePinnedIds,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		organizations,
		isCloud,
		supportsMultiTenancy,
		currentProjectId: projectId,
		billingFailureTeamId,
		billingOrgReadonly,
		onCreateProject: () => setCreateProjectDialogOpen(true),
		onCreateOrganization: handleCreateOrganization,
		prefetchTeamProjects,
		selectionMode
	};
	if (collapsed) {
		if (!resolvedProject) return null;
		return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Popover, {
			open,
			onOpenChange: setOpen,
			children: [/* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					disabled,
					...analyticsAttrs("project-switcher"),
					className: cn("flex h-8 w-8 items-center justify-center rounded-md bg-accent text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent/80 cursor-pointer", className),
					children: resolvedProject.name.charAt(0).toUpperCase()
				})
			}), /* @__PURE__ */ jsx(PopoverContent, {
				side: "right",
				align: "start",
				sideOffset: 12,
				className: cn("border-border bg-popover p-0", supportsMultiTenancy ? "w-[520px]" : "w-[320px]"),
				children: /* @__PURE__ */ jsx(ProjectSelectorContent, { ...contentProps })
			})]
		}), !selectionMode ? /* @__PURE__ */ jsx(CreateProjectDialog, {
			open: createProjectDialogOpen,
			onOpenChange: setCreateProjectDialogOpen,
			teamId: resolvedTeam.$id,
			currentProjectsCount: projectsCount
		}) : null] });
	}
	if (isMobile) {
		if (!resolvedProject) return null;
		return /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				...analyticsAttrs("project-switcher"),
				onClick: () => setOpen(true),
				className: cn("flex w-full items-center gap-2 overflow-visible rounded-md border border-border bg-background px-2.5 py-2 text-start transition-colors hover:bg-accent cursor-pointer", className),
				children: [
					/* @__PURE__ */ jsx(InitialsAvatar, {
						name: resolvedProject.name,
						size: "sm"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1.5",
							children: /* @__PURE__ */ jsx("p", {
								className: "min-w-0 flex-1 truncate text-[13px] font-medium text-foreground",
								title: resolvedProject.name,
								children: formatProjectNameForDisplay(resolvedProject.name, 30)
							})
						}), supportsMultiTenancy ? /* @__PURE__ */ jsx("p", {
							className: cn("truncate text-[11px] text-muted-foreground", !orgDisplayName && "invisible"),
							title: orgDisplayName || void 0,
							children: truncateMiddle(orgDisplayName || "Organization", 30)
						}) : null]
					}),
					/* @__PURE__ */ jsx(ProjectSelectorPlanBadgeSlot, {
						isCloud,
						org: currentProjectOrg,
						billingStress: !!billingFailureTeamId
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
				]
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					className: "fixed inset-0 start-0 top-0 z-[132] flex h-[100dvh] max-h-none w-[100dvw] max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 p-0 sm:max-w-none sm:rounded-none",
					overlayClassName: "z-[131]",
					showCloseButton: false,
					children: [
						/* @__PURE__ */ jsx(DialogTitle, {
							className: "sr-only",
							children: t("Select project")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-border px-4 py-3",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Select project")
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setOpen(false),
								className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})]
						}),
						/* @__PURE__ */ jsx(MobileProjectSelectorContent, { ...contentProps })
					]
				})
			}),
			!selectionMode ? /* @__PURE__ */ jsx(CreateProjectDialog, {
				open: createProjectDialogOpen,
				onOpenChange: setCreateProjectDialogOpen,
				teamId: resolvedTeam.$id,
				currentProjectsCount: projectsCount
			}) : null
		] });
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				...analyticsAttrs("project-switcher"),
				className: cn("flex max-w-full min-w-0 items-center overflow-visible rounded-md text-start transition-colors hover:bg-accent cursor-pointer disabled:pointer-events-none disabled:opacity-50", compact ? "h-7 max-w-[200px] gap-1.5 px-2 py-1" : "h-9 gap-2 px-2 py-1.5", className),
				children: [
					resolvedProject ? /* @__PURE__ */ jsx(InitialsAvatar, {
						name: resolvedProject.name,
						size: compact ? "xs" : "sm",
						className: compact ? "h-3.5 w-3.5 text-[8px]" : void 0
					}) : /* @__PURE__ */ jsx("div", {
						className: cn("shrink-0 rounded-full bg-muted", compact ? "h-3.5 w-3.5" : "h-6 w-6"),
						"aria-hidden": true
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex flex-1 items-center gap-2 overflow-visible",
						children: [/* @__PURE__ */ jsx("p", {
							className: cn("min-w-0 flex-1 truncate font-medium", compact ? "text-[11px] text-muted-foreground" : "text-[13px] text-foreground"),
							title: resolvedProject ? supportsMultiTenancy && orgDisplayName ? `${orgDisplayName} / ${resolvedProject.name}` : resolvedProject.name : void 0,
							children: resolvedProject ? supportsMultiTenancy && !compact ? /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx("span", {
									className: cn("shrink-0", !orgDisplayName && "invisible"),
									children: truncateMiddle(orgDisplayName || "Organization", 20)
								}),
								" ",
								"/",
								" ",
								formatProjectNameForDisplay(resolvedProject.name, 22)
							] }) : formatProjectNameForDisplay(resolvedProject.name, compact ? 22 : 30) : t("Select project")
						}), !compact ? /* @__PURE__ */ jsx(ProjectSelectorPlanBadgeSlot, {
							isCloud,
							org: currentProjectOrg,
							billingStress: !!billingFailureTeamId
						}) : null]
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: cn("shrink-0 text-muted-foreground", compact ? "h-3 w-3 opacity-70" : "h-3.5 w-3.5") })
				]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			side: "bottom",
			align: "start",
			sideOffset: 8,
			className: cn("border-border bg-popover p-0", supportsMultiTenancy ? "w-[520px]" : "w-[320px]"),
			children: /* @__PURE__ */ jsx(ProjectSelectorContent, { ...contentProps })
		})]
	}), !selectionMode ? /* @__PURE__ */ jsx(CreateProjectDialog, {
		open: createProjectDialogOpen,
		onOpenChange: setCreateProjectDialogOpen,
		teamId: resolvedTeam.$id,
		currentProjectsCount: projectsCount
	}) : null] });
}
function ProjectSelectorContent({ selectedTeam, onSelectTeam, selectedProject, handleSelectProject, teamSearch, setTeamSearch, projectSearch, setProjectSearch, filteredTeams, displayProjects, pinnedProjectIds, isFetchingNextPage, hasNextPage, fetchNextPage, organizations, isCloud, supportsMultiTenancy, currentProjectId, billingFailureTeamId, billingOrgReadonly, onCreateProject, onCreateOrganization, prefetchTeamProjects, selectionMode = false }) {
	const t = useT();
	const pinnedSet = useMemo(() => new Set(pinnedProjectIds), [pinnedProjectIds]);
	const projectsScrollRef = useRef(null);
	const sentinelRef = useRef(null);
	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel || !hasNextPage || isFetchingNextPage) return;
		const observer = new IntersectionObserver((entries$1) => {
			const [entry] = entries$1;
			if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
		}, {
			root: projectsScrollRef.current,
			rootMargin: "200px",
			threshold: .1
		});
		observer.observe(sentinel);
		return () => {
			observer.disconnect();
		};
	}, [
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage
	]);
	if (!selectedTeam || !selectedProject && !selectionMode) return /* @__PURE__ */ jsx("div", {
		className: "flex h-[300px] items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-sm text-muted-foreground",
			children: t("Loading...")
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex", supportsMultiTenancy && "divide-x divide-border"),
		children: [supportsMultiTenancy && /* @__PURE__ */ jsxs("div", {
			className: "flex w-1/2 flex-col",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border px-3 py-2.5",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: t("Find Organization..."),
						value: teamSearch,
						onChange: (e) => setTeamSearch(e.target.value),
						className: "flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "min-h-[180px] max-h-[240px] flex-1 overflow-y-auto p-1.5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "px-2 py-1.5 text-[11px] font-medium text-muted-foreground",
						children: t("Organizations")
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: filteredTeams.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "px-2 py-4 text-center text-[12px] text-muted-foreground",
							children: t("No organizations found")
						}) : filteredTeams.map((team) => {
							const teamOrg = organizations.find((org) => org.$id === team.orgId);
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => onSelectTeam(team),
								onMouseEnter: () => prefetchTeamProjects(team.$id),
								className: cn("flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-start transition-colors", selectedTeam.$id === team.$id ? "bg-accent" : "hover:bg-accent/50"),
								children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: team.name,
										size: "sm"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex flex-1 items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: team.name
										}), isCloud && teamOrg && /* @__PURE__ */ jsx("span", {
											className: cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium capitalize", teamOrg.billingPlanDowngrade ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : getPlanBadgeColor(teamOrg.plan)),
											children: teamOrg.billingPlanDowngrade ? t("Downgraded") : getPlanDisplayName(teamOrg.plan)
										})]
									}),
									selectedTeam.$id === team.$id && /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 shrink-0 text-foreground" })
								]
							}, team.$id);
						})
					})]
				}),
				!selectionMode ? /* @__PURE__ */ jsx("div", {
					className: "border-t border-border p-1.5",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						...analyticsAttrs("create-organization"),
						onClick: onCreateOrganization,
						className: "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-start text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/50",
							children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[13px]",
							children: t("Create Organization")
						})]
					})
				}) : null
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("flex flex-col", supportsMultiTenancy ? "w-1/2" : "w-full"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border px-3 py-2.5",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: t("Find Project..."),
						value: projectSearch,
						onChange: (e) => setProjectSearch(e.target.value),
						className: "flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					ref: projectsScrollRef,
					className: "min-h-[180px] max-h-[240px] flex-1 overflow-y-auto p-1.5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "px-2 py-1.5 text-[11px] font-medium text-muted-foreground",
						children: t("Projects")
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: displayProjects.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "px-2 py-4 text-center text-[12px] text-muted-foreground",
							children: selectedTeam || !supportsMultiTenancy ? t("No projects found") : t("Select an organization")
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [
							displayProjects.map((project) => {
								const isCurrentProject = project.$id === currentProjectId;
								const isPinned = pinnedSet.has(project.$id);
								const rowClassName = cn("group flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-start transition-colors", selectedProject?.$id === project.$id ? "bg-accent" : "hover:bg-accent/50", isCurrentProject && selectedProject?.$id !== project.$id && "bg-primary/10 hover:bg-primary/20 dark:bg-sidebar-accent dark:hover:bg-sidebar-accent/80");
								const rowContent = /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: project.name,
										size: "sm"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "min-w-0 flex-1 truncate text-[13px] font-medium text-foreground",
											title: project.name,
											children: [
												formatProjectNameForDisplay(project.name),
												isCurrentProject && /* @__PURE__ */ jsx(Badge, {
													variant: "outline",
													className: "ms-1.5 shrink-0 text-[10px] font-normal text-muted-foreground",
													children: t("Current")
												}),
												project.paused && /* @__PURE__ */ jsx(Badge, {
													variant: "outline",
													className: "ms-1.5 shrink-0 text-[10px] font-normal text-muted-foreground",
													children: t("Paused")
												})
											]
										}), /* @__PURE__ */ jsx(FailedInvoiceWarningIcon, {
											show: !!billingFailureTeamId && project.teamId === billingFailureTeamId,
											orgBillingReadonly: billingOrgReadonly
										})]
									}),
									isPinned && /* @__PURE__ */ jsx(Pin, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
								] });
								if (selectionMode) return /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: (e) => handleSelectProject(project, e),
									className: rowClassName,
									children: rowContent
								}, project.$id);
								return /* @__PURE__ */ jsx(Link, {
									to: "/projects/$projectId",
									params: { projectId: project.$id },
									onClick: (e) => handleSelectProject(project, e),
									className: rowClassName,
									children: rowContent
								}, project.$id);
							}),
							hasNextPage && /* @__PURE__ */ jsx("div", {
								ref: sentinelRef,
								className: "h-1"
							}),
							isFetchingNextPage && /* @__PURE__ */ jsx("div", {
								className: "px-2 py-2 text-center text-[11px] text-muted-foreground",
								children: t("Loading more...")
							})
						] })
					})]
				}),
				!selectionMode ? /* @__PURE__ */ jsx("div", {
					className: "border-t border-border p-1.5",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						...analyticsAttrs("create-project"),
						onClick: onCreateProject,
						className: "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-start text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/50",
							children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[13px]",
							children: t("Create Project")
						})]
					})
				}) : null
			]
		})]
	});
}
function MobileProjectSelectorContent({ selectedTeam, onSelectTeam, selectedProject, handleSelectProject, teamSearch, setTeamSearch, projectSearch, setProjectSearch, filteredTeams, displayProjects, pinnedProjectIds, isFetchingNextPage, hasNextPage, fetchNextPage, organizations, isCloud, supportsMultiTenancy, currentProjectId, billingFailureTeamId, billingOrgReadonly, onCreateProject, onCreateOrganization, prefetchTeamProjects, selectionMode = false }) {
	const t = useT();
	const [activeTab, setActiveTab] = useState("projects");
	const pinnedSet = useMemo(() => new Set(pinnedProjectIds), [pinnedProjectIds]);
	const projectsScrollRef = useRef(null);
	const sentinelRef = useRef(null);
	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel || !hasNextPage || isFetchingNextPage || activeTab !== "projects") return;
		const observer = new IntersectionObserver((entries$1) => {
			const [entry] = entries$1;
			if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
		}, {
			root: projectsScrollRef.current,
			rootMargin: "200px",
			threshold: .1
		});
		observer.observe(sentinel);
		return () => {
			observer.disconnect();
		};
	}, [
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
		activeTab
	]);
	if (!selectedTeam || !selectedProject && !selectionMode) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsx("div", {
			className: "text-sm text-muted-foreground",
			children: t("Loading...")
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-1 flex-col overflow-hidden",
		children: [supportsMultiTenancy && /* @__PURE__ */ jsxs("div", {
			className: "flex border-b border-border",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setActiveTab("teams"),
				className: cn("flex-1 cursor-pointer px-4 py-2.5 text-[13px] font-medium transition-colors", activeTab === "teams" ? "border-b-2 border-foreground text-foreground" : "text-muted-foreground"),
				children: t("Organizations")
			}), /* @__PURE__ */ jsx("button", {
				onClick: () => setActiveTab("projects"),
				className: cn("flex-1 cursor-pointer px-4 py-2.5 text-[13px] font-medium transition-colors", activeTab === "projects" ? "border-b-2 border-foreground text-foreground" : "text-muted-foreground"),
				children: t("Projects")
			})]
		}), supportsMultiTenancy && activeTab === "teams" ? /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border px-4 py-2.5",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: t("Find Organization..."),
						value: teamSearch,
						onChange: (e) => setTeamSearch(e.target.value),
						className: "flex-1 bg-transparent text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-[280px] flex-1 overflow-y-auto p-2",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: filteredTeams.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "px-3 py-6 text-center text-[13px] text-muted-foreground",
							children: t("No organizations found")
						}) : filteredTeams.map((team) => {
							const teamOrg = organizations.find((org) => org.$id === team.orgId);
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: async () => {
									await onSelectTeam(team);
									setActiveTab("projects");
								},
								onMouseEnter: () => prefetchTeamProjects(team.$id),
								className: cn("flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-start transition-colors", selectedTeam.$id === team.$id ? "bg-accent" : "hover:bg-accent/50"),
								children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: team.name,
										size: "sm"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "min-w-0 flex-1",
										children: /* @__PURE__ */ jsx("span", {
											className: "block truncate text-[14px] font-medium text-foreground",
											children: team.name
										})
									}),
									isCloud && teamOrg && /* @__PURE__ */ jsx("span", {
										className: cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium capitalize", teamOrg.billingPlanDowngrade ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : getPlanBadgeColor(teamOrg.plan)),
										children: teamOrg.billingPlanDowngrade ? t("Downgraded") : getPlanDisplayName(teamOrg.plan)
									}),
									selectedTeam.$id === team.$id && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0 text-foreground" })
								]
							}, team.$id);
						})
					})
				}),
				!selectionMode ? /* @__PURE__ */ jsx("div", {
					className: "border-t border-border p-2",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						...analyticsAttrs("create-organization"),
						onClick: onCreateOrganization,
						className: "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-start text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/50",
							children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[14px]",
							children: t("Create Organization")
						})]
					})
				}) : null
			]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col overflow-hidden",
			children: [
				supportsMultiTenancy && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-[12px] text-muted-foreground",
							children: t("Organization:")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-[12px] font-medium text-foreground",
							children: selectedTeam.name
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setActiveTab("teams"),
							className: "ms-auto cursor-pointer link-neutral text-[12px] dark:text-muted-foreground",
							children: t("Change")
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border px-4 py-2.5",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: t("Find Project..."),
						value: projectSearch,
						onChange: (e) => setProjectSearch(e.target.value),
						className: "flex-1 bg-transparent text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					ref: projectsScrollRef,
					className: "min-h-[280px] flex-1 overflow-y-auto p-2",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: displayProjects.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "px-3 py-6 text-center text-[13px] text-muted-foreground",
							children: selectedTeam || !supportsMultiTenancy ? t("No projects found") : t("Select an organization")
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [
							displayProjects.map((project) => {
								const isCurrentProject = project.$id === currentProjectId;
								const isPinned = pinnedSet.has(project.$id);
								const rowClassName = cn("flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-start transition-colors", selectedProject?.$id === project.$id ? "bg-accent" : "hover:bg-accent/50", isCurrentProject && selectedProject?.$id !== project.$id && "bg-primary/10 hover:bg-primary/20 dark:bg-sidebar-accent dark:hover:bg-sidebar-accent/80");
								const rowContent = /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: project.name,
										size: "sm"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "min-w-0 flex-1 truncate text-[14px] font-medium text-foreground",
											title: project.name,
											children: [
												formatProjectNameForDisplay(project.name),
												isCurrentProject && /* @__PURE__ */ jsx(Badge, {
													variant: "outline",
													className: "ms-1.5 shrink-0 text-[10px] font-normal text-muted-foreground",
													children: t("Current")
												}),
												project.paused && /* @__PURE__ */ jsx(Badge, {
													variant: "outline",
													className: "ms-1.5 shrink-0 text-[10px] font-normal text-muted-foreground",
													children: t("Paused")
												})
											]
										}), /* @__PURE__ */ jsx(FailedInvoiceWarningIcon, {
											show: !!billingFailureTeamId && project.teamId === billingFailureTeamId,
											orgBillingReadonly: billingOrgReadonly
										})]
									}),
									isPinned && /* @__PURE__ */ jsx(Pin, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
									selectedProject?.$id === project.$id && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0 text-foreground" })
								] });
								if (selectionMode) return /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: (e) => handleSelectProject(project, e),
									className: rowClassName,
									children: rowContent
								}, project.$id);
								return /* @__PURE__ */ jsx(Link, {
									to: "/projects/$projectId",
									params: { projectId: project.$id },
									onClick: (e) => handleSelectProject(project, e),
									className: rowClassName,
									children: rowContent
								}, project.$id);
							}),
							hasNextPage && /* @__PURE__ */ jsx("div", {
								ref: sentinelRef,
								className: "h-1"
							}),
							isFetchingNextPage && /* @__PURE__ */ jsx("div", {
								className: "px-3 py-3 text-center text-[12px] text-muted-foreground",
								children: t("Loading more...")
							})
						] })
					})
				}),
				!selectionMode ? /* @__PURE__ */ jsx("div", {
					className: "border-t border-border p-2",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						...analyticsAttrs("create-project"),
						onClick: onCreateProject,
						className: "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-start text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/50",
							children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[14px]",
							children: t("Create Project")
						})]
					})
				}) : null
			]
		})]
	});
}
const OPEN_COMMAND_CENTER_SHORTCUT_OPTIONS = {
	capture: true,
	ignoreInputs: false,
	stopPropagation: true
};
function useGlobalCommandShortcuts({ commandCenterOpen, onOpenCommandCenter, onOpenShortcutsHelp, enabled = true }) {
	const active = enabled && !commandCenterOpen;
	const openCommandCenterShortcut = {
		...OPEN_COMMAND_CENTER_SHORTCUT_OPTIONS,
		enabled: active
	};
	useKeyboardShortcut("meta+k", onOpenCommandCenter, openCommandCenterShortcut);
	useKeyboardShortcut("control+k", onOpenCommandCenter, openCommandCenterShortcut);
	useKeyboardShortcut("/", (e) => {
		e.preventDefault();
		onOpenCommandCenter();
	}, {
		enabled: active,
		capture: true
	});
	useKeyboardShortcut("shift+?", (e) => {
		e.preventDefault();
		onOpenShortcutsHelp();
	}, {
		enabled: active,
		capture: true
	});
	useKeyboardShortcut("shift+/", (e) => {
		e.preventDefault();
		onOpenShortcutsHelp();
	}, {
		enabled: active,
		capture: true
	});
	useThemeShortcuts({ enabled: active });
}
function useInitThemeUsesDarkImage() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return false;
	if (resolvedTheme === "light") return false;
	if (resolvedTheme === "dark") return true;
	if (!resolvedTheme) return isHtmlDarkChrome();
	if (isResolvedThemeDarkChrome(resolvedTheme)) return true;
	return isHtmlDarkChrome();
}
function useInitThemeImageSrc(imageSrcLight, imageSrcDark) {
	return useInitThemeUsesDarkImage() ? imageSrcDark : imageSrcLight;
}
var APPWRITER_STORE_HREF = "https://appwrite.store/products/preorder-the-appwriter";
var APPWRITER_INIT_IMAGE_LIGHT = "/images/init/prize-day-2-swag-light.jpg";
var APPWRITER_INIT_IMAGE_DARK = "/images/init/prize-day-3-swag.jpg";
var APPWRITER_PROMO_IMAGE_ASPECT = "16 / 10";
function AppwriterPromo({ className }) {
	const t = useT();
	const usesDarkImage = useInitThemeUsesDarkImage();
	const imageSrc = useInitThemeImageSrc(APPWRITER_INIT_IMAGE_LIGHT, APPWRITER_INIT_IMAGE_DARK);
	return /* @__PURE__ */ jsxs("aside", {
		className: cn("flex w-[300px] shrink-0 flex-col justify-center gap-3 border-s border-border/60 px-5 py-3", className),
		"aria-labelledby": "appwriter-promo-heading",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("relative w-full overflow-hidden rounded-lg border border-border", usesDarkImage ? "bg-[#0a0a0a]" : "bg-muted/30"),
				style: { aspectRatio: APPWRITER_PROMO_IMAGE_ASPECT },
				children: /* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: t("The Appwriter mechanical keyboard"),
					className: "size-full object-cover object-center",
					loading: "lazy",
					decoding: "async"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx("h3", {
					id: "appwriter-promo-heading",
					className: "text-[14px] font-semibold leading-snug text-foreground",
					children: "The Appwriter"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[12px] leading-relaxed text-muted-foreground",
					children: t("75% hot-swap mechanical keyboard with Gateron G Pro Yellow switches, tri-mode USB-C/2.4GHz/BT, and 84 dye-sublimated keycaps optimized for Console shortcuts.")
				})]
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "h-8 w-full text-[12px]",
				asChild: true,
				children: /* @__PURE__ */ jsxs("a", {
					href: APPWRITER_STORE_HREF,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [
						t("Order from the Appwrite Store"),
						" ",
						/* @__PURE__ */ jsx(ChevronRight, {
							className: "size-3.5",
							"aria-hidden": true
						})
					]
				})
			})
		]
	});
}
function letter(id, label) {
	return {
		id,
		label: label ?? id.toUpperCase(),
		flex: 1
	};
}
function fKey(n) {
	return {
		id: `f${n}`,
		label: `F${n}`,
		flex: .85
	};
}
function getFunctionRow(isMac) {
	const keys = [{
		id: "escape",
		label: "esc",
		flex: 1.15
	}, ...Array.from({ length: 12 }, (_, i) => fKey(i + 1))];
	if (isMac) keys.push({
		id: "touchId",
		label: "",
		flex: 1
	});
	return { keys };
}
var MAIN_ROWS = [
	{ keys: [
		{
			id: "backquote",
			label: "`",
			flex: 1
		},
		...[
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0"
		].map((k) => letter(k)),
		{
			id: "minus",
			label: "-",
			flex: 1
		},
		{
			id: "equal",
			label: "=",
			flex: 1
		},
		{
			id: "backspace",
			label: "⌫",
			flex: 1.55
		}
	] },
	{ keys: [
		{
			id: "tab",
			label: "tab",
			flex: 1.35
		},
		...[
			"q",
			"w",
			"e",
			"r",
			"t",
			"y",
			"u",
			"i",
			"o",
			"p"
		].map((k) => letter(k)),
		{
			id: "bracketLeft",
			label: "[",
			flex: 1
		},
		{
			id: "bracketRight",
			label: "]",
			flex: 1
		},
		{
			id: "backslash",
			label: "\\",
			flex: 1.15
		}
	] },
	{ keys: [
		{
			id: "caps",
			label: "caps",
			flex: 1.65
		},
		...[
			"a",
			"s",
			"d",
			"f",
			"g",
			"h",
			"j",
			"k",
			"l"
		].map((k) => letter(k)),
		{
			id: "semicolon",
			label: ";",
			flex: 1
		},
		{
			id: "quote",
			label: "'",
			flex: 1
		},
		{
			id: "enter",
			label: "return",
			flex: 1.65
		}
	] },
	{ keys: [
		{
			id: "shiftLeft",
			label: "shift",
			flex: 2.05
		},
		...[
			"z",
			"x",
			"c",
			"v",
			"b",
			"n",
			"m"
		].map((k) => letter(k)),
		{
			id: "comma",
			label: ",",
			flex: 1
		},
		{
			id: "period",
			label: ".",
			flex: 1
		},
		{
			id: "slash",
			label: "/",
			flex: 1
		},
		{
			id: "shiftRight",
			label: "shift",
			flex: 2.05
		}
	] }
];
const ARROW_CLUSTER = [
	{
		id: "arrowUp",
		label: "↑"
	},
	{
		id: "arrowLeft",
		label: "←"
	},
	{
		id: "arrowDown",
		label: "↓"
	},
	{
		id: "arrowRight",
		label: "→"
	}
];
function getMacModifierRow() {
	return { keys: [
		{
			id: "fn",
			label: "fn",
			flex: 1
		},
		{
			id: "controlLeft",
			label: "⌃",
			flex: 1.1
		},
		{
			id: "altLeft",
			label: "⌥",
			flex: 1.1
		},
		{
			id: "metaLeft",
			label: "⌘",
			flex: 1.3
		},
		{
			id: "space",
			label: "space",
			flex: 5.4
		},
		{
			id: "metaRight",
			label: "⌘",
			flex: 1.3
		},
		{
			id: "altRight",
			label: "⌥",
			flex: 1.1
		},
		{
			id: "controlRight",
			label: "⌃",
			flex: 1.1
		}
	] };
}
function getWinModifierRow() {
	return { keys: [
		{
			id: "controlLeft",
			label: "ctrl",
			flex: 1.3
		},
		{
			id: "winLeft",
			label: "",
			flex: 1.1
		},
		{
			id: "altLeft",
			label: "alt",
			flex: 1.1
		},
		{
			id: "space",
			label: "space",
			flex: 5.4
		},
		{
			id: "altRight",
			label: "alt",
			flex: 1.1
		},
		{
			id: "winRight",
			label: "",
			flex: 1.1
		},
		{
			id: "controlRight",
			label: "ctrl",
			flex: 1.3
		}
	] };
}
function getMainKeyboardRows(isMac) {
	return [getFunctionRow(isMac), ...MAIN_ROWS];
}
function WindowsKeyIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className: cn("h-3.5 w-3.5 shrink-0", className),
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M3 5.5 10.5 4.1V11H3V5.5zm8.5 0L21 3.5V11h-9.5V5.5zM3 13h7.5v6.9L3 18.4V13zm9.5 0H21v7.5l-8.5 2.4V13z" })
	});
}
function KeyCap({ keySpec, isHighlighted, sequenceStep, className, compact = false }) {
	if (keySpec.spacer) return /* @__PURE__ */ jsx("div", {
		style: { flex: keySpec.flex ?? 1 },
		className,
		"aria-hidden": true
	});
	const isSequential = sequenceStep !== void 0;
	const hideLabel = keySpec.id === "space" && !isHighlighted;
	const isTouchId = keySpec.id === "touchId";
	const isWindowsKey = keySpec.id === "winLeft" || keySpec.id === "winRight";
	return /* @__PURE__ */ jsx("div", {
		style: keySpec.flex != null ? { flex: keySpec.flex } : void 0,
		className: cn("flex min-w-0 items-center justify-center rounded-md border font-medium transition-colors duration-150", compact ? "h-full px-0 text-[8px]" : "h-8 px-0.5 text-[9px]", keySpec.flex == null && "w-full", isHighlighted ? "border-primary/40 bg-primary text-primary-foreground shadow-sm" : cn("border-border bg-card text-foreground/75 shadow-sm", "dark:border-border/50 dark:bg-background/40 dark:text-muted-foreground dark:shadow-none dark:backdrop-blur-sm"), className),
		title: isTouchId ? "Touch ID" : isWindowsKey ? "Windows" : void 0,
		children: isTouchId ? /* @__PURE__ */ jsx(Fingerprint, {
			className: "h-3.5 w-3.5 shrink-0",
			strokeWidth: 2
		}) : isWindowsKey ? /* @__PURE__ */ jsx(WindowsKeyIcon, {}) : /* @__PURE__ */ jsx("span", {
			className: cn("truncate px-0.5", hideLabel && "text-transparent"),
			children: isSequential && isHighlighted ? `${sequenceStep + 1}. ${keySpec.label}` : keySpec.label
		})
	});
}
function ArrowCluster({ highlighted, sequentialIndex }) {
	const [up, left, down, right] = ARROW_CLUSTER;
	return /* @__PURE__ */ jsxs("div", {
		className: "grid h-8 w-[4.75rem] shrink-0 grid-cols-3 gap-0.5 self-end",
		children: [
			/* @__PURE__ */ jsx(KeyCap, {
				keySpec: left,
				isHighlighted: highlighted.has(left.id),
				sequenceStep: sequentialIndex.get(left.id)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-8 min-h-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ jsx(KeyCap, {
					keySpec: up,
					isHighlighted: highlighted.has(up.id),
					sequenceStep: sequentialIndex.get(up.id),
					compact: true,
					className: "min-h-0 flex-1"
				}), /* @__PURE__ */ jsx(KeyCap, {
					keySpec: down,
					isHighlighted: highlighted.has(down.id),
					sequenceStep: sequentialIndex.get(down.id),
					compact: true,
					className: "min-h-0 flex-1"
				})]
			}),
			/* @__PURE__ */ jsx(KeyCap, {
				keySpec: right,
				isHighlighted: highlighted.has(right.id),
				sequenceStep: sequentialIndex.get(right.id)
			})
		]
	});
}
function KeyboardLayoutVisualizer({ isMac, highlightedKeys, sequentialHighlightKeys, className, compact = false }) {
	const t = useT();
	const mainRows = getMainKeyboardRows(isMac);
	const modifierRow = isMac ? getMacModifierRow() : getWinModifierRow();
	const highlighted = new Set(highlightedKeys);
	const sequential = sequentialHighlightKeys ?? [];
	const sequentialIndex = /* @__PURE__ */ new Map();
	sequential.forEach((key, index) => {
		if (!sequentialIndex.has(key)) sequentialIndex.set(key, index);
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn(compact ? "flex min-h-0 flex-col px-6 py-3" : "border-t border-border/40 px-3 py-3", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-2 flex shrink-0 items-center justify-between px-0.5",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-[11px] font-medium uppercase tracking-wider text-foreground/60 dark:text-muted-foreground",
				children: t("Keyboard layout")
			}), sequential.length > 1 && /* @__PURE__ */ jsx("span", {
				className: "text-[11px] text-muted-foreground",
				children: t("Press keys in order")
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: cn(compact && "flex min-h-0 flex-1 items-center justify-center"),
			children: /* @__PURE__ */ jsx("div", {
				className: cn("rounded-xl border p-3 shadow-sm backdrop-blur-md", "border-border/80 bg-muted/40", "dark:border-border/50 dark:bg-background/35", compact ? "w-full max-w-[640px]" : "min-w-[580px]"),
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto pb-0.5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-1",
						children: [mainRows.map((row, rowIndex) => /* @__PURE__ */ jsx("div", {
							className: "flex gap-1",
							children: row.keys.map((key) => /* @__PURE__ */ jsx(KeyCap, {
								keySpec: key,
								isHighlighted: highlighted.has(key.id),
								sequenceStep: sequentialIndex.get(key.id)
							}, key.id))
						}, rowIndex)), /* @__PURE__ */ jsxs("div", {
							className: "flex items-end gap-1",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex min-w-0 flex-1 gap-1",
								children: modifierRow.keys.map((key) => /* @__PURE__ */ jsx(KeyCap, {
									keySpec: key,
									isHighlighted: highlighted.has(key.id),
									sequenceStep: sequentialIndex.get(key.id)
								}, key.id))
							}), /* @__PURE__ */ jsx(ArrowCluster, {
								highlighted,
								sequentialIndex
							})]
						})]
					})
				})
			})
		})]
	});
}
function ShortcutKeyBadges({ keys, isSequential, highlighted = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		dir: "ltr",
		className: "flex shrink-0 items-center gap-0.5",
		children: keys.map((key, i) => /* @__PURE__ */ jsxs("span", {
			className: "flex items-center gap-0.5",
			children: [isSequential && i > 0 && /* @__PURE__ */ jsx("span", {
				className: cn("text-[10px]", highlighted ? "text-primary/70" : "text-muted-foreground/60"),
				children: t("then")
			}), /* @__PURE__ */ jsx("kbd", {
				className: cn("flex h-5 min-w-[20px] items-center justify-center rounded border px-1.5 text-[10px] font-medium", highlighted ? "border-primary/35 bg-primary/15 text-primary" : "border-border bg-muted/50 text-foreground/80 dark:bg-muted/40 dark:text-muted-foreground"),
				children: /* @__PURE__ */ jsx(ShortcutGlyph, { keyLabel: key })
			})]
		}, i))
	});
}
function getSequentialHighlightKeys(shortcut) {
	if (!shortcut.isSequential) return void 0;
	return shortcut.highlightKeys;
}
function KeyboardShortcutsView({ commands, isMobile, showTerminalShortcuts = false, showSqlEditorShortcuts = false, showAgentShortcuts = false, onBack, onClose, onKeyDown }) {
	const t = useT();
	const { isMac } = usePlatform();
	const [selectedId, setSelectedId] = useState(null);
	const groups = useMemo(() => {
		let merged = buildShortcutGroups(showSqlEditorShortcuts ? commands.filter((command) => !command.id.startsWith("postgres.sql.")) : commands, (kind) => DEFAULT_GROUP_LABELS[kind] ?? kind, isMac);
		if (showAgentShortcuts) merged = mergeShortcutGroups(merged, [buildShortcutRefGroup("Agent", AGENT_SHORTCUTS, isMac)]);
		if (showSqlEditorShortcuts) merged = mergeShortcutGroups(merged, [buildShortcutRefGroup("SQL editor", POSTGRES_SQL_EDITOR_SHORTCUTS, isMac)]);
		if (showTerminalShortcuts) {
			const terminalConsoleShortcuts = CLI_SHELL_CONSOLE_SHORTCUTS.filter((shortcut) => shortcut.id !== "terminal.toggle");
			merged = mergeShortcutGroups(merged, [buildShortcutRefGroup("Terminal", [...terminalConsoleShortcuts, ...CLI_TERMINAL_INPUT_SHORTCUTS], isMac)]);
		}
		return dedupeShortcutGroups(merged);
	}, [
		commands,
		isMac,
		showAgentShortcuts,
		showSqlEditorShortcuts,
		showTerminalShortcuts
	]);
	const allShortcuts = useMemo(() => groups.flatMap((group) => group.shortcuts), [groups]);
	const selectedShortcut = useMemo(() => allShortcuts.find((shortcut) => shortcut.id === selectedId) ?? null, [allShortcuts, selectedId]);
	useEffect(() => {
		if (!selectedId && allShortcuts.length > 0) setSelectedId(allShortcuts[0].id);
	}, [allShortcuts, selectedId]);
	return /* @__PURE__ */ jsxs(Command$1, {
		className: cn("flex min-h-0 flex-1 flex-col bg-transparent", isMobile && "flex-1"),
		onKeyDown,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-14 shrink-0 items-center border-b border-border px-3",
				children: [
					/* @__PURE__ */ jsxs("button", {
						onClick: onBack,
						className: "flex h-6 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
						children: ["← ", t("Back")]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "flex-1 ps-3 text-[14px] font-medium text-foreground",
						children: t("Keyboard shortcuts")
					}),
					isMobile && /* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
						children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ jsx("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6",
					children: /* @__PURE__ */ jsx("div", {
						className: cn("gap-x-6 [column-fill:balance]", isMobile ? "columns-1" : "columns-2"),
						children: groups.map((group) => /* @__PURE__ */ jsxs("section", {
							className: "mb-5 inline-block w-full break-inside-avoid",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-foreground/55 dark:text-muted-foreground",
								children: t(group.label)
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-0.5 rounded-lg border border-border bg-muted/30 p-1 dark:border-border/60 dark:bg-muted/20",
								children: group.shortcuts.map((shortcut) => {
									const isSelected = selectedId === shortcut.id;
									return /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => setSelectedId(shortcut.id),
										onFocus: () => setSelectedId(shortcut.id),
										className: cn("flex w-full items-center gap-3 rounded-md px-3 py-2 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", isSelected ? "bg-primary/10 ring-1 ring-inset ring-primary/25" : "hover:bg-primary/5"),
										children: [/* @__PURE__ */ jsx("span", {
											className: cn("min-w-0 flex-1 text-[13px] leading-snug", isSelected ? "font-medium text-foreground" : "text-foreground/90"),
											children: t(shortcut.description)
										}), /* @__PURE__ */ jsx(ShortcutKeyBadges, {
											keys: shortcut.displayKeys,
											isSequential: shortcut.isSequential,
											highlighted: isSelected
										})]
									}, shortcut.id);
								})
							})]
						}, group.label))
					})
				}), !isMobile && /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-stretch border-t border-border/60",
					children: [/* @__PURE__ */ jsx(KeyboardLayoutVisualizer, {
						isMac,
						highlightedKeys: selectedShortcut?.highlightKeys ?? [],
						sequentialHighlightKeys: selectedShortcut ? getSequentialHighlightKeys(selectedShortcut) : void 0,
						className: "min-w-0 flex-1",
						compact: true
					}), /* @__PURE__ */ jsx(AppwriterPromo, {})]
				})]
			}),
			!isMobile && /* @__PURE__ */ jsx("div", {
				className: "flex shrink-0 items-center border-t border-border px-6 py-2",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1 text-[11px] text-foreground/50 dark:text-muted-foreground/60",
					children: [/* @__PURE__ */ jsx("kbd", {
						className: "rounded border border-border bg-muted/50 px-1 py-0.5 text-[10px] text-foreground/80 dark:bg-muted/40 dark:text-muted-foreground",
						children: "esc"
					}), t("back")]
				})
			})
		]
	});
}
function CommandCenterListFooter({ onOpenShortcuts }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex shrink-0 items-center justify-between border-t border-border px-3 py-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 text-[11px] text-muted-foreground/60",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx("kbd", {
						className: "rounded bg-accent px-1 py-0.5 text-[10px]",
						children: "↑↓"
					}), t("navigate")]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx("kbd", {
						className: "rounded bg-accent px-1 py-0.5 text-[10px]",
						children: "↵"
					}), t("select")]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx("kbd", {
						className: "rounded bg-accent px-1 py-0.5 text-[10px]",
						children: "esc"
					}), t("close")]
				})
			]
		}), onOpenShortcuts ? /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: onOpenShortcuts,
			className: "flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ jsx(Keyboard, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: t("All shortcuts") })]
		}) : null]
	});
}
var RESOURCE_QUERY_ORDER = [
	"database",
	"user",
	"team",
	"bucket",
	"function",
	"site",
	"message",
	"topic",
	"provider"
];
function useCommandCenterResourceSearch({ projectId, query, enabled, kinds }) {
	const trimmedQuery = query.trim();
	const shouldFetch = enabled && !!projectId && trimmedQuery.length > 0;
	const activeKinds = useMemo(() => RESOURCE_QUERY_ORDER.filter((kind) => kinds.has(kind)), [kinds]);
	const results = useQueries({ queries: useMemo(() => {
		const pid = projectId;
		const search = trimmedQuery;
		const limit = 15;
		const baseEnabled = shouldFetch;
		return activeKinds.map((kind) => {
			switch (kind) {
				case "database": return {
					...consoleDatabasesQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "user": return {
					...usersQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "team": return {
					...teamsQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "bucket": return {
					...bucketsQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "function": return {
					...functionsQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "site": return {
					...sitesQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "message": return {
					...messagesQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "topic": return {
					...topicsQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
				case "provider": return {
					...providersQueryOptions(pid, 0, limit, search),
					enabled: baseEnabled
				};
			}
		});
	}, [
		projectId,
		trimmedQuery,
		shouldFetch,
		activeKinds
	]) });
	const isLoading = shouldFetch && results.some((result) => result.isLoading);
	const isFetching = shouldFetch && results.some((result) => result.isFetching);
	return {
		hits: useMemo(() => {
			if (!shouldFetch) return [];
			const groups = [];
			activeKinds.forEach((kind, index) => {
				const data = results[index]?.data;
				if (!data) return;
				switch (kind) {
					case "database": {
						const databases = data.databases;
						if (databases?.length) groups.push(buildDatabaseHits(trimmedQuery, databases));
						break;
					}
					case "user": {
						const users = data.users;
						if (users?.length) groups.push(buildUserHits(trimmedQuery, users));
						break;
					}
					case "team": {
						const teams = data.teams;
						if (teams?.length) groups.push(buildTeamHits(trimmedQuery, teams));
						break;
					}
					case "bucket": {
						const buckets = data.buckets;
						if (buckets?.length) groups.push(buildBucketHits(trimmedQuery, buckets));
						break;
					}
					case "function": {
						const functions = data.functions;
						if (functions?.length) groups.push(buildFunctionHits(trimmedQuery, functions));
						break;
					}
					case "site": {
						const sites = data.sites;
						if (sites?.length) groups.push(buildSiteHits(trimmedQuery, sites));
						break;
					}
					case "message": {
						const messages = data.messages;
						if (messages?.length) groups.push(buildMessageHits(trimmedQuery, messages));
						break;
					}
					case "topic": {
						const topics = data.topics;
						if (topics?.length) groups.push(buildTopicHits(trimmedQuery, topics));
						break;
					}
					case "provider": {
						const providers = data.providers;
						if (providers?.length) groups.push(buildProviderHits(trimmedQuery, providers));
						break;
					}
				}
			});
			return mergeScoredResourceHits(groups);
		}, [
			shouldFetch,
			activeKinds,
			results,
			trimmedQuery
		]),
		isLoading,
		isFetching
	};
}
function DocsSearchResultItem({ entry, onSelect, className }) {
	const breadcrumbLabel = formatDocsBreadcrumbs(entry.breadcrumbs);
	return /* @__PURE__ */ jsxs(CommandItem, {
		value: `${entry.slug} ${entry.title}`,
		onSelect: () => onSelect(entry.slug),
		onMouseDown: (event) => event.preventDefault(),
		className: className ?? "items-start gap-3 py-3",
		children: [/* @__PURE__ */ jsx(FileText, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [
				breadcrumbLabel ? /* @__PURE__ */ jsx("p", {
					className: "truncate text-[11px] text-muted-foreground",
					children: breadcrumbLabel
				}) : null,
				/* @__PURE__ */ jsx("p", {
					className: "truncate text-[13px] font-medium text-foreground",
					children: entry.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1 line-clamp-2 text-[12px] text-muted-foreground",
					children: entry.description
				})
			]
		})]
	});
}
const DOCS_SEARCH_INDEX = [
	{
		"slug": "advanced/billing",
		"title": "Billing",
		"description": "Understand Appwrite's plans, add-ons, service level agreements, and billing policies.",
		"excerpt": "Learn how to manage billing for your organization, find the plan that best suits your needs, explore optional add-ons, and understand Appwrite's service level agreements and billing policies. Manage billing Configure your organization's plan, payment methods, and spending controls. Manage your plan, billing periods, payment methods, budget caps, and invoices. Plans Learn which plan best suits your organization. Learn about Appwrite Free plan. Free plan for hobby projects and learners. Learn about Appwrite Pro, for growing organizations that need to…",
		"breadcrumbs": [
			"Billing",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "advanced/billing/abuse",
		"title": "Abuse policy",
		"description": "Guidelines on abusive behavior, prohibited activities, and reporting mechanisms under our Fair Use Policy.",
		"excerpt": "Appwrite is committed to providing a fair, secure, and high-quality experience for all users. This Abuse Policy, as part of our overall Fair Use Policy, outlines unacceptable behaviors and the steps you can take to report any suspected abuse. Our goal is to maintain a safe environment where everyone can build, innovate, and collaborate without fear of harmful or illegal activity. Reporting Abuse If you observe or suspect any prohibited activity, please report it as soon as possible to abuse@appwrite.io.…",
		"breadcrumbs": [
			"Billing",
			"Policies",
			"Abuse"
		]
	},
	{
		"slug": "advanced/billing/compute",
		"title": "Compute",
		"description": "Learn about CPU and memory options for Appwrite Functions and Sites on Cloud, including separate build and runtime specifications and plan build timeouts.",
		"excerpt": "On Appwrite Cloud, paid plans let you choose how much **CPU** and **memory** apply to **build** work and to **runtime** work. Functions and Sites each expose two settings: a **build specification** (install, compile, bundle, package) and a **runtime specification** (executions for functions; serving traffic and SSR for sites). You can pick different tiers for each phase so heavy builds do not force you to oversize steady execution, and vice versa. These options help you tune performance and cost: for example,…",
		"breadcrumbs": [
			"Billing",
			"Add ons",
			"Compute"
		]
	},
	{
		"slug": "advanced/billing/database-reads-and-writes",
		"title": "Database Reads and Writes",
		"description": "Learn how Appwrite handles database reads and writes and their associated costs.",
		"excerpt": "Appwrite provides powerful database capabilities through TablesDB, allowing you to perform read and write operations across your application data. Understanding how these operations are counted and billed is essential for planning your application's scalability. Database Operations Database operations in Appwrite are categorized into two types: **Read Operations**: Any action that retrieves data from your database, including: - Fetching rows with or . **Write Operations**: Any action that modifies data in your database, including: - Creating rows with . - Updating…",
		"breadcrumbs": [
			"Billing",
			"Add ons",
			"Database Reads and Writes"
		]
	},
	{
		"slug": "advanced/billing/enterprise",
		"title": "Enterprise",
		"description": "How Appwrite can accelerate enterprise development teams and provide custom support and hosting options.",
		"excerpt": "Enterprise development teams face unique challenges and have unique needs. Appwrite can provide tailored solutions for enterprise customers with custom hosting, training, and support needs. If you're interested to learn about what Appwrite can do for your enterprise development teams, contact us for more details.",
		"breadcrumbs": [
			"Billing",
			"Plans",
			"Enterprise"
		]
	},
	{
		"slug": "advanced/billing/fair-use-policy",
		"title": "Fair use policy",
		"description": "Understand Appwrite's usage limits, prohibited activities, and enforcement actions.",
		"excerpt": "At Appwrite, we are committed to providing high-quality, reliable, and scalable backend services for all users. Our Fair Use Policy ensures that resources are used responsibly and that every user receives a consistent experience. This policy applies to all users and outlines acceptable usage patterns and limitations. Definitions and scope - **Normal usage:** Resource usage that falls within expected thresholds for a user's selected plan. - **Excessive usage:** Usage that exceeds defined thresholds and may affect the platform's performance for…",
		"breadcrumbs": [
			"Billing",
			"Policies",
			"Fair use"
		]
	},
	{
		"slug": "advanced/billing/free",
		"title": "Free",
		"description": "Appwrite's Free plan provides a generous free tier. Perfect for budding projects, hobbiests, and side-projects.",
		"excerpt": "Appwrite Cloud provides a **Free** plan to all developers to start building with Appwrite. Appwrite Free plan is perfect for personal hobby projects for students and professional developers alike. Learn more about the Free plan's generous resource limits on the pricing page. Create a Free plan organization Appwrite Cloud's different plans are applied at an organization level. Resources on the Free plan are shared across projects, while paid plans offer dedicated resources per project. When you create your Appwrite Cloud…",
		"breadcrumbs": [
			"Billing",
			"Plans",
			"Free"
		]
	},
	{
		"slug": "advanced/billing/image-transformations",
		"title": "Image Transformations",
		"description": "Learn how to transform images using Appwrite's storage API.",
		"excerpt": "Appwrite enables the transformation of images before retrieval using the getFilePreview endpoint. This functionality supports resizing images by width and height, adjusting quality, and applying filters such as opacity, border colour, border radius, and more. Origin Image An \"origin image\" represents the original, unmodified image file in Appwrite Storage. Each origin image serves as the base for unlimited transformations, allowing the creation of multiple variants without incurring additional origin image charges. How it works: 1. Upload an image to Appwrite…",
		"breadcrumbs": [
			"Billing",
			"Add ons",
			"Image Transformations"
		]
	},
	{
		"slug": "advanced/billing/oss",
		"title": "Open source",
		"description": "Learn how Appwrite supports open-source projects by providing free credits and other benefits.",
		"excerpt": "Appwrite remains open source and continues to support open-source maintainers that build fundamental software that modern developers depend upon with the OSS Program. The OSS Program supports open-projects and their maintainers by alleviating financial burdens and promoting growth. You will receive a free Appwrite Pro subscription and benefit from all its resources and support. The program has no fixed end date but will be reviewed annually to ensure optimal mutual support. Criteria To apply for this program, you must adhere…",
		"breadcrumbs": [
			"Billing",
			"Plans",
			"Open source"
		]
	},
	{
		"slug": "advanced/billing/payments",
		"title": "Manage billing",
		"description": "Understand Appwrite's billing features, like budget caps, billing periods, taxes, and more.",
		"excerpt": "Appwrite allows you to configure billing per organization. You can access your organizations billing information under the **Billing** tab of your organization. Plans You can view or change your organization's plan under the **Billing** section. You'll also find the expected cost, as well as the start and end date of the current billing period. Billing period Billing periods begin the day you change your plan, and lasts 30 days. Your resource limits are reset at the beginning of each billing…",
		"breadcrumbs": [
			"Billing",
			"Getting started",
			"Manage billing"
		]
	},
	{
		"slug": "advanced/billing/phone-otp",
		"title": "Phone OTP",
		"description": "Learn how Appwrite handles SMS-based OTP authentication for secure user verification.",
		"excerpt": "Appwrite supports SMS-based OTP (One-Time Password) authentication to provide secure and reliable user verification. This feature enhances your app's security by adding an extra layer of authentication. Free testing You can use the Mock phone numbers feature to test your integrations without incurring any costs. SMS messages You'll be charged per SMS sent. The cost for additional messages is calculated based on two factors: 1. The number of messages sent 2. The destination country of each message As part of…",
		"breadcrumbs": [
			"Billing",
			"Add ons",
			"Phone OTP"
		]
	},
	{
		"slug": "advanced/billing/pro",
		"title": "Pro",
		"description": "Understand Appwrite's pricing plans, behaviors, billing cycles, and limitations.",
		"excerpt": "Appwrite Cloud's Pro plan is designed for professional developers or development teams that need to build applications at scale. When applications outgrow Appwrite's Free plan, organizations can switch to a Pro plan to continue growing their apps. You can learn more about the Pro plan on the pricing page. Create a Pro plan organization Appwrite's plans are applied to an entire organization, but resources are allocated per project. Get started with a Pro plan organization by visiting the pricing page…",
		"breadcrumbs": [
			"Billing",
			"Plans",
			"Pro"
		]
	},
	{
		"slug": "advanced/billing/refund-policy",
		"title": "Refund policy",
		"description": "Learn about Appwrite's refund policy for services, including eligibility criteria and the request process.",
		"excerpt": "At Appwrite, we strive to provide exceptional backend services that meet your development needs. This policy outlines our approach to refunds for Appwrite services and ensures a fair and consistent process for all customers. General policy Appwrite services are **non-refundable by default**. All purchases, including self-hosted support plans, Appwrite Cloud subscriptions, and professional services (e.g., onboarding, solution engineering, consulting) are considered final transactions. However, we recognize that exceptional circumstances may arise. In rare and specific situations where service performance, billing,…",
		"breadcrumbs": [
			"Billing",
			"Policies",
			"Refund"
		]
	},
	{
		"slug": "advanced/billing/support-sla",
		"title": "Support SLA",
		"description": "Learn about Appwrite's support service level agreement (SLA) including response times, severity levels, and support commitments for different subscription tiers.",
		"excerpt": "This Support Service Level Agreement (\"SLA\") describes the support services provided by APPWRITE (\"we,\" \"us,\" or \"our\") to users of our products and services (\"you\" or \"user\"). By using our services, you agree to the terms of this SLA. Scope This SLA outlines our commitments for providing support services via email, including response and resolution processes based on issue severity. The specific response times depend on the support tier associated with your support plan: **Silver**, **Gold**, or **Platinum**. Severity levels…",
		"breadcrumbs": [
			"Billing",
			"SLAs",
			"Support SLA"
		]
	},
	{
		"slug": "advanced/billing/uptime-sla",
		"title": "Uptime SLA",
		"description": "Learn about Appwrite's uptime service level agreement and commitments for different subscription plans.",
		"excerpt": "This Uptime Service Level Agreement (\"SLA\") describes the uptime commitments and related service credit terms provided by APPWRITE (\"we,\" \"us,\" or \"our\") to users of our products and services (\"you\" or \"user\"). By using our services, you agree to the terms of this SLA. Uptime commitments We commit to maintaining the following monthly uptime percentages based on your subscription plan: | Plan | Monthly Uptime Commitment | | --- | --- | | **Free** | N/A | | **Pro** |…",
		"breadcrumbs": [
			"Billing",
			"SLAs",
			"Uptime SLA"
		]
	},
	{
		"slug": "advanced/migrations",
		"title": "Migrations",
		"description": "Learn how to use Appwrite Migrations service to move projects from other vendors to Appwrite Cloud or from self-hosting to Cloud and the other way around.",
		"excerpt": "If you're looking to migrate existing projects to Appwrite, Migrations can help you make the move more quickly. You can move your app from Firebase, Supabase, Nhost, and even move between self-hosted and Cloud projects using Migrations. You can also use Migrations to move between two self-hosted instances or even to duplicate projects on the same instance. Migrations will automatically move accounts, database rows, and storage files from one source to another. Sources Appwrite supports multiple source destinations for migrating…",
		"breadcrumbs": [
			"Migrations",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "advanced/migrations/cloud",
		"title": "Migrate from Cloud",
		"description": "Self-hosted application migration made easy with Appwrite. Discover the steps and strategies for migrating your self-hosted apps to Appwrite's managed platform.",
		"excerpt": "Migrations make it as easy as a couple of clicks to move all your Appwrite Cloud data into a self-hosted instance. 1. Data transferred by migrations will reset and timestamps to the date of the migration. 2. Your self-hosted Appwrite project must be accessible from the internet for the migration to work. 3. Migrations are non-destructive. No data will be deleted or lost in the source project. To begin migrating to self-hosted, make sure to read the migration overview and…",
		"breadcrumbs": [
			"Migrations",
			"Guides",
			"From Cloud"
		]
	},
	{
		"slug": "advanced/migrations/firebase",
		"title": "Migrate from Firebase",
		"description": "Migrate seamlessly from Firebase to Appwrite. Learn how to transfer data, authentication, and services from Firebase to leverage Appwrite's capabilities.",
		"excerpt": "Appwrite migrations help you quickly migrate your data from Firebase or other sources to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different limitations before completing your migration. When you migrate data from Firebase to Appwrite Cloud, the resource usage…",
		"breadcrumbs": [
			"Migrations",
			"Guides",
			"From Firebase"
		]
	},
	{
		"slug": "advanced/migrations/nhost",
		"title": "Migrate from Nhost",
		"description": "Transition to Appwrite from NHost with confidence. Explore migration steps, considerations, and tools to ensure a successful migration process.",
		"excerpt": "Appwrite migrations help you quickly migrate your data from Nhost or other sources to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different limitations before completing your migration. When you migrate data from Nhost to Appwrite Cloud, the resource usage…",
		"breadcrumbs": [
			"Migrations",
			"Guides",
			"From Nhost"
		]
	},
	{
		"slug": "advanced/migrations/self-hosted",
		"title": "Migrate from self-hosted",
		"description": "Migrate to Appwrite from self-hosted platforms seamlessly. Learn how to move your applications and data to Appwrite for enhanced flexibility and control.",
		"excerpt": "Migrations makes it as easy as a couple clicks to move all of your self-hosted project data to a Cloud instance. 1. Data transferred by migrations will reset and timestamps to the date of the migration. 2. Your self-hosted Appwrite project must be accessible from the internet for the migration to work. 3. Migrations are non-destructive. No data will be deleted or lost in the source project. To begin migrating to Cloud, make sure to read the migration overview and…",
		"breadcrumbs": [
			"Migrations",
			"Guides",
			"From self-hosted"
		]
	},
	{
		"slug": "advanced/migrations/supabase",
		"title": "Migrate from Supabase",
		"description": "Effortlessly migrate from Supabase to Appwrite. Discover migration strategies, data transfer methods, and tips for a smooth transition to Appwrite.",
		"excerpt": "Appwrite migrations help you quickly migrate your data from Supabase or other sources to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different limitations before completing your migration. When you migrate data from Supabase to Appwrite Cloud, the resource usage…",
		"breadcrumbs": [
			"Migrations",
			"Guides",
			"From Supabase"
		]
	},
	{
		"slug": "advanced/security",
		"title": "Security",
		"description": "Learn how Appwrite keeps your project, users, and data secure through security measures and compliance.",
		"excerpt": "Appwrite helps you build secure apps by applying various security and compliance measures. Appwrite is compliant with GDPR, CCPA, HIPAA, and SOC 2. Appwrite also employs enhanced password protection and encryption, rate limits, robust permission systems, and HTTPS/TLS to protect you and your users' data. Compliance The safeguarding of your and your users' data is taken seriously at Appwrite. Appwrite works to achieve compliance with a variety of standards to protect sensitive data, as well as maintain trust and credibility.…",
		"breadcrumbs": [
			"Security",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "advanced/security/abuse-protection",
		"title": "Abuse protection",
		"description": "Learn how Appwrite protects your apps from abuse through rate limiting and cross-site scripting protection.",
		"excerpt": "Appwrite comes packaged with tools to protect against various forms of abuse, like brute force attacks, data scraping, and many other common forms of abuse. Rate limiting Appwrite uses rate limits on some endpoints to avoid abuse or brute-force attacks against Appwrite's REST API. Each Appwrite route documentation has information about any rate limits that might apply to them. Rate limits limit the number of requests a user or IP can make against an API within a period of time.…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Abuse protection"
		]
	},
	{
		"slug": "advanced/security/audit-logs",
		"title": "Audit logs",
		"description": "Appwrite provides audit logs to help detect anomalies and investigate security incidents.",
		"excerpt": "All Appwrite products, like Authentication, Databases, Storage, Functions, and Messaging, provide detailed audit logs. Audit logs are important in detecting and responding to security incidents. Through audit logs, you can detect incidents through anomalous activities, trace the source of security incidents, and understand the scope of users affected so you can respond more quickly and effectively. Access audit logs You can access audit logs for different products under the **Activity** tab where applicable. Logs are available for tables, rows, and…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Audit logs"
		]
	},
	{
		"slug": "advanced/security/authentication",
		"title": "Authentication",
		"description": "Learn how Appwrite protects your passwords and helps users pick better passwords.",
		"excerpt": "Appwrite helps you implement secure authentication in your applications by using password hashing to protect passwords in storage. Appwrite also provides tools to help users pick better passwords, making them harder to break.",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Authentication"
		]
	},
	{
		"slug": "advanced/security/backups",
		"title": "Backups",
		"description": "Appwrite provides both self-managed project backups and automated disaster recovery backups to ensure data security and availability.",
		"excerpt": "Preventing downtime and maintaining data availability is crucial for digital security. Appwrite provides both self-managed backups and automated disaster recovery backups. Self-managed backups are available for Pro plans and above. These backups allow you to: - Configure automatic backup policies - Initiate manual backups through the Console - Recover from accidental data deletion - Restore data to a previous point in time For detailed information about self-managed backup features, configuration options, and restoration procedures, visit our Backup Documentation. For platform-wide…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Backups"
		]
	},
	{
		"slug": "advanced/security/ccpa",
		"title": "CCPA",
		"description": "Protecting your and your users' data privacy is a priority at Appwrite. Learn about Appwrite's compliance with the California Consumer Privacy Act (CCPA).",
		"excerpt": "Appwrite is compliant with the California Consumer Privacy Act (CCPA). The CCPA is a privacy law that gives California residents more control over their personal information, helping ensure their data privacy rights. To confirm Appwrite's compliance with the CCPA, we have ensured the following rights for users: - **Right to know:** Appwrite users can request information about the personal data that is collected, shared, or sold. - **Right to delete:** Users can request that Appwrite delete their personal data, with…",
		"breadcrumbs": [
			"Security",
			"Compliances",
			"CCPA"
		]
	},
	{
		"slug": "advanced/security/dev-keys",
		"title": "Dev keys",
		"description": "Bypass Appwrite rate limits and CORS errors in your development environment with Appwrite Dev keys.",
		"excerpt": "The creation of new dev keys is paused, and dev keys will be deprecated on September 1, 2026. Appwrite's login rate limit has changed so that a successful login now resets it, which means you no longer need a dev key to test authentication flows during development. We recommend planning your migration away from dev keys ahead of time. Learn more in the changelog. Dev keys are secrets used by Appwrite Client SDKs to avoid abuse limits in testing. They…",
		"breadcrumbs": [
			"Security",
			"Access control",
			"Dev keys"
		]
	},
	{
		"slug": "advanced/security/encryption",
		"title": "Encryption",
		"description": "Learn about Appwrite's use of encryption across Appwrite's databases and storage buckets to protect user data.",
		"excerpt": "Other than applying encryption in authentication, enforcing HTTPS, and generating TLS certificate for domains, Appwrite also uses encryption for Storage, and Databases to come. Encryption helps secure your files and data in storage. In the event that an attack happens and a malicious actor gains access to files or data, encrypted files and data cannot be deciphered, adding a further layer of protection. Storage For storage, buckets can have its files encrypted. If enabled, files uploaded to the bucket that…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Encryption"
		]
	},
	{
		"slug": "advanced/security/gdpr",
		"title": "GDPR",
		"description": "The safeguarding of your and your users' data is taken seriously at Appwrite. Learn about Appwrite's measures and compliance with the European General Data Protection Regulation (GDPR).",
		"excerpt": "Appwrite is compliant with the European General Data Protection Regulation (GDPR). GDPR is an EU regulation that concerns data privacy and security in the European Union and the European Economic Area. By attesting that Appwrite is GDPR compliant, we have done the following. - Appwrite users will retain access to their personal information including the right to correct and delete it. - Impose the same rules upon the organization's sub-processors who assist in providing Appwrite's services as described in the…",
		"breadcrumbs": [
			"Security",
			"Compliances",
			"GDPR"
		]
	},
	{
		"slug": "advanced/security/hipaa",
		"title": "HIPAA",
		"description": "Learn about Appwrite Cloud's measures to achieve HIPAA compliance.",
		"excerpt": "Appwrite is compliant with HIPAA (Health Insurance Portability and Accountability Act) regulations. HIPAA is an important regulation that protects patients' health data from being disclosed without consent or knowledge. If you're building apps that handle information that is considered PHI (Personal Health Information) for an U.S. user base, data must be stored in a HIPAA-compliant environment. To attain HIPAA compliance, we've taken extensive measures, ensuring that our practices align with the highest data protection standards. We have implemented robust measures…",
		"breadcrumbs": [
			"Security",
			"Compliances",
			"HIPAA"
		]
	},
	{
		"slug": "advanced/security/https",
		"title": "HTTPS",
		"description": "Learn how Appwrite Cloud enforces secure connections by enforcing HTTPS on all endpoints.",
		"excerpt": "Appwrite Cloud serves all endpoints over an HTTPS connection by default. Requests made through an unsecure HTTP connection will be redirected to. Redirected requests will show a response status. Appwrite Cloud does not support HTTP, which is a common practice in modern development, because unencrypted HTTP traffic is dangerous and exposes sensitive user data to malicious attackers. Strict-Transport-Security Appwrite uses the Strict-Transport-Security header to inform browsers that the website should only be accessed using HTTPS, further protecting against man-in-the-middle attacks…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"HTTPS"
		]
	},
	{
		"slug": "advanced/security/mfa",
		"title": "Multi-factor Authentication",
		"description": "Appwrite helps you secure your developer accounts with MFA (multi-factor authentication).",
		"excerpt": "Multi-factor authentication (MFA) adds multiple layers of authentication to your Appwrite account. When MFA is enabled, a malicious actor needs to compromise multiple authentication factors to gain unauthorized access. Appwrite currently supports MFA using TOTP (Time-based One-Time Password) with an authenticator app. More factors of authentication will be added in the future. This page covers MFA for your Appwrite Console account. If you're looking to add MFA to your app, follow the Multi-factor authentication guide. Enable MFA To enable MFA…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Multi-Factor authentication"
		]
	},
	{
		"slug": "advanced/security/pci",
		"title": "PCI",
		"description": "Learn about Appwrite's measure to achieve PCI compliance when handling payments and transactions, ensuring secure and safe handling of payment information and personal data.",
		"excerpt": "The Payment Card Industry Data Security Standard (PCI) is a standard that concerns the handling of credit card information, transactions, and payments. Appwrite uses Stripe to securely handle payments for Appwrite Pro and Scale plans. Stripe is a PCI Service Provider Level 1 provider with a strong commitment to security and privacy that matches Appwrite's core values. If you're looking to add payment or subscription services to your apps built on Appwrite, we recommend that you **do not store credit…",
		"breadcrumbs": [
			"Security",
			"Compliances",
			"PCI"
		]
	},
	{
		"slug": "advanced/security/penetration-tests",
		"title": "Penetration tests",
		"description": "Learn about how Appwrite keeps your data safe by employing manual third-party penetration tests to discover vulnerabilities.",
		"excerpt": "Appwrite undertakes regular penetration testing and vulnerability assessments conducted by third-party agencies to attest our security standing. These penetration tests and vulnerability assessments are performed periodically. Penetration tests performed by a third-party helps identify vulnerabilities and suggest action plans to constantly improve Appwrite's security. Appwrite has processes for external and internal information security risk management that seek to identify, assess and address risks using a risk treatment plan to implement recommendations and decisions. The risk assessment methodologies utilized include pen-test…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"Penetration tests"
		]
	},
	{
		"slug": "advanced/security/permissions",
		"title": "Permissions",
		"description": "Enhance data security and access control with Appwrite platform permissions. Learn how to set fine-grained permissions to protect user data and resources.",
		"excerpt": "Appwrite's permission mechanism offers a simple, yet flexible way to manage which users, teams, or roles can access a specific resource in your project, such as rows and files. Using permissions, you can decide that only **user A** and **user B** will have read and update access to a specific database row, while **user C** and **team X** will be the only ones with delete access. As the name suggests, read permission allows a user to read a resource, create…",
		"breadcrumbs": [
			"Security",
			"Access control",
			"Permissions"
		]
	},
	{
		"slug": "advanced/security/rate-limits",
		"title": "Rate-limits",
		"description": "Optimize application performance with Appwrite rate limits. Explore rate limiting strategies, configurations, and how to prevent abuse of your services.",
		"excerpt": "Some of Appwrite's API endpoints have a rate limit to avoid abuse or brute-force attacks against Appwrite's REST API. Each Appwrite route documentation has information about any rate limits that might apply to them. Rate limits only apply to Client SDKs. Rate limits do not apply when accessing Appwrite with a Server SDK authenticated using an API key. Headers You can check the returned HTTP headers of any API request to see your current rate limit status: The headers tell…",
		"breadcrumbs": [
			"Security",
			"Access control",
			"Rate limits"
		]
	},
	{
		"slug": "advanced/security/roles",
		"title": "Roles",
		"description": "Learn how to setup role-based access controls in the Appwrite Console",
		"excerpt": "The Appwrite Console supports granular permissions to improve team collaboration and security. Each member of your Console team can be assigned a specific role that grants them access to certain areas of your organization's projects. Below is a breakdown of the new roles available, detailing their permissions and intended use cases. This page covers organization member roles for the Appwrite Console. Visit the Auth roles documentation if you want to learn more about roles for the Teams service. Owner The…",
		"breadcrumbs": [
			"Security",
			"Access control",
			"Roles"
		]
	},
	{
		"slug": "advanced/security/soc2",
		"title": "SOC 2",
		"description": "Learn about Appwrite Cloud's measures to achieve SOC 2 compliance.",
		"excerpt": "SOC 2 refers to the Service Organization Control 2 standards. SOC 2 is a set of standards are designed to ensure that service providers like Appwrite securely manage data to protect the privacy of developers and users. SOC 2 is a set of standards defined by the American Institute of CPAs (AICPA) that assess organizations on the criteria of security, availability, processing integrity, confidentiality, and privacy. While SOC 2 compliance is voluntary, Appwrite is committed to safeguard the data of…",
		"breadcrumbs": [
			"Security",
			"Compliances",
			"SOC 2"
		]
	},
	{
		"slug": "advanced/security/tls",
		"title": "TLS",
		"description": "Appwrite helps keep the web secure by generating TLS (Transport Layer Security) certificates for all user and generated domains.",
		"excerpt": "Appwrite generates TLS certificates to ensure your API traffic is appropriately encrypted. The certificate authority used depends on your deployment type: - **Self-hosted deployments** use Let's Encrypt, an open source and not-for-profit certificate authority provided by the Internet Security Research Group (ISRG) that secures more than 363 million websites. - **Appwrite Cloud** uses Certainly, Fastly's certificate authority, for Sites and Functions. TLS certificates are generated for all of the following. - Appwrite products and endpoints, like Databases, Storage, Authentication, Functions,…",
		"breadcrumbs": [
			"Security",
			"Measures",
			"TLS"
		]
	},
	{
		"slug": "advanced/self-hosting",
		"title": "Self-hosting",
		"description": "Set up your self-hosted Appwrite instance easily. Read the installation guide to configure and deploy Appwrite on your infrastructure for complete control.",
		"excerpt": "Appwrite was designed from the ground up with self-hosting in mind. You can install and run Appwrite on any operating system that can run a Docker CLI. Self-hosted Appwrite instances can be configured flexibly with access to the same features found on Appwrite Cloud. If you are migrating from an older version of Appwrite, you need to follow the migration instructions Cloud vs Self-hosting Choose the deployment method that fits your needs. | Feature | Appwrite Cloud | Self-hosting |…",
		"breadcrumbs": [
			"Self-hosting",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/databases",
		"title": "Databases",
		"description": "Configure the database backend for your self-hosted Appwrite instance. Learn about the supported database options and their configuration.",
		"excerpt": "Appwrite supports MongoDB and MariaDB as database backends. The database is selected during installation via the setup wizard and **cannot be changed after installation**. Regardless of which database you choose, the Appwrite API remains the same. Only the underlying storage engine differs. MongoDB is the default database as of Appwrite 1.9.0. CLI installation If you prefer to skip the setup wizard, you can set the database directly using the flag: Accepted values are and . Supported databases MongoDB MongoDB is…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Databases"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/email",
		"title": "Email delivery",
		"description": "Configure email services for your self-hosted Appwrite instance. Learn how to set up email notifications, templates, and delivery for your applications.",
		"excerpt": "Appwrite v0.7 and above come with support for easy integrations with 3rd party SMTP providers. In order for emails to work, you will need to set up proper SMTP configuration as described below. Because email deliverability can be both tricky and hard, it is often easier to delegate this responsibility to a 3rd-party SMTP provider. These providers help you abstract the complexity of passing SPAM filters by doing a lot of the advanced configuration and validation for you. In this…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Email delivery"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/environment-variables",
		"title": "Environment variables",
		"description": "Customize the behavior of your self-hosted Appwrite instance to your unique needs. Customize SMTP, SMS, functions, S3 adaptor, database, and other behaiors.",
		"excerpt": "Appwrite environment variables allow you to edit your server setup configuration and customize it. You can easily change the environment variables by changing them when running Appwrite using Docker CLI or Docker Compose. Updating your Appwrite environment variables requires you to edit your Appwrite file. Your Docker files should be located inside the \"appwrite\" folder at the location where you first run the Appwrite installation script. It's recommended to use the file as a central point for updating your Appwrite…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Environment variables"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/functions",
		"title": "Functions",
		"description": "Harness the full power of self-hosted functions with Appwrite. Explore function deployment, management, and integration in your self-hosted environment.",
		"excerpt": "This guide covers how to configure functions in your self-hosted Appwrite instance. For GitHub repository integration with functions, see the version control configuration. Configure function runtimes Not all function runtimes are enabled by default. Enable the runtimes that you need and disable unused runtimes to save disk space on your server. To enable a runtime, add it to the environment variable as a comma-separated list. The example below would enable Dart 3.11, .NET 6.0, and Java 18 runtimes. You can…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Functions"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/sites",
		"title": "Sites",
		"description": "Harness the full power of self-hosted sites with Appwrite. Explore site deployment, management, and integration in your self-hosted environment.",
		"excerpt": "This guide covers how to configure sites in your self-hosted Appwrite instance. For GitHub repository integration with sites, see the version control configuration. Configure sites runtimes Not all site runtimes are enabled by default. Enable the runtimes that you need and disable unused runtimes to save disk space on your server. To enable a runtime, add it to the environment variable as a comma-separated list. The three runtimes currently available for Sites are the Static, Node.js 22, and Flutter 3.41…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Sites"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/sms",
		"title": "SMS delivery",
		"description": "Set up SMS services for your self-hosted Appwrite instance. Discover how to configure SMS notifications, verification, and messaging for your applications.",
		"excerpt": "Appwrite supports phone authentication, which allows users to create accounts and log in using SMS messages. Appwrite requires an SMS provider to be set up before using Phone authentication. This page describes how to setup messaging for your self-hosted Appwrite instance to send one-time passwords during phone login. If you are looking to send custom messages for promotions, reminders, and other purposes, view the documentation for Appwrite Messaging documentation. SMS providers Appwrite supports a growing list of SMS providers that…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"SMS delivery"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/storage",
		"title": "Storage",
		"description": "Manage self-hosted storage options with Appwrite. Explore file storage, uploads, and customization in your self-hosted Appwrite environment.",
		"excerpt": "Appwrite's Storage Service can be configured to store files locally, or with self-hosted and cloud storage services. By default, Appwrite's Storage Service **stores files on your server's local storage**. If you expect large volumes of data or the need to have scalable data storage, you may choose to use a separate storage service. Available adapters Appwrite supports AWS S3, Digital Ocean Spaces, Backblaze, Akamai Object Storage, and Wasabi as storage adapters. Some of these services can be self-hosted, just like…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Storage"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/tls-certificates",
		"title": "TLS Certificates",
		"description": "Secure your self-hosted Appwrite instance with TLS certificates. Learn how to obtain, configure, and manage TLS certificates for enhanced security.",
		"excerpt": "Appwrite uses Let's Encrypt to auto-generate TLS certificates for your Appwrite instance to ensure your API traffic is appropriately encrypted. For Appwrite to properly generate certificates, a few conditions need to be met. 1. You need to use a public-facing domain with a known TLD pointing to your Appwrite instance. 2. Your environment variable should be set for production mode. The default Appwrite setup comes with this predefined setting, so you should be OK unless you change it. 3. You…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"TLS certificates"
		]
	},
	{
		"slug": "advanced/self-hosting/configuration/version-control",
		"title": "Version control",
		"description": "Configure version control integration for Functions and Sites in your self-hosted Appwrite instance.",
		"excerpt": "Apply configuration After creating your GitHub App, restart your Appwrite services to apply the configuration: Verify configuration To verify that your GitHub App is correctly configured: 1. Open the Appwrite Console and navigate to a project. 2. Go to either the Functions or Sites section. 3. Try creating a new Function or Site using GitHub as the source. 4. You should be prompted to install your GitHub App on your repositories. Troubleshooting If you encounter issues with your GitHub App…",
		"breadcrumbs": [
			"Self-hosting",
			"Configuration",
			"Version control"
		]
	},
	{
		"slug": "advanced/self-hosting/installation",
		"title": "Installation",
		"description": "Step-by-step guide to install Appwrite using Docker. Learn how to set up a self-hosted Appwrite instance with Docker Compose on any operating system.",
		"excerpt": "This guide will walk you through installing Appwrite on your server using Docker. Appwrite is designed to run on any operating system that supports Docker. System requirements Before installing Appwrite, ensure your system meets these minimum requirements: - **2 CPU cores** - **4GB of RAM** - **2GB of swap memory** - **Operating system** that supports Docker - **Docker Compose Version 2** Install with Docker The easiest way to install Appwrite is using our Docker installer. The installer launches a web-based…",
		"breadcrumbs": [
			"Self-hosting",
			"Getting started",
			"Installation"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/aws",
		"title": "AWS deployment",
		"description": "Deploy Appwrite on Amazon Web Services using the one-click Marketplace app.",
		"excerpt": "Deploy Appwrite on AWS using the pre-configured Marketplace app. One-click installation 1. Visit the Appwrite AWS Marketplace page 2. Click **Continue to Subscribe** 3. Review and accept the subscription terms 4. Click **Continue to Configuration** 5. Choose your preferred region and software version 6. Click **Continue to Launch** 1. Choose **Launch through EC2** action 2. Select instance type: - **t3.medium** minimum (2 vCPU, 4 GB RAM) - **t3.large** or larger for production 3. Configure security group to allow: - HTTP…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"AWS"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/azure",
		"title": "Azure deployment",
		"description": "Deploy Appwrite on Microsoft Azure using Virtual Machines. Learn how to set up a production-ready Appwrite instance on Azure.",
		"excerpt": "Deploy Appwrite on Microsoft Azure using Virtual Machines. Virtual Machines deployment Azure Virtual Machines provide full control over your infrastructure where you can deploy Appwrite. Create a VM with at least 2 vCPU and 4 GB RAM, configure network security groups to allow HTTP/HTTPS traffic, then follow the general installation guide for Docker setup. Custom installations For manual installations on Azure Virtual Machines or other configurations, follow the general installation guide which covers Docker setup and configuration for any Linux…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"Azure"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/coolify",
		"title": "Coolify",
		"description": "Learn how to self-host Appwrite on your infrastructure with Coolify.",
		"excerpt": "Coolify is an open-source, self-hosted platform that simplifies application deployment through an intuitive interface and automated workflows. With its one-click deployment feature, you can quickly deploy various services, including Appwrite's comprehensive backend solution. To explore the full range of supported services, visit the Coolify Docs. This guide will walk you through setting up Appwrite on your Coolify instance and provide necessary troubleshooting tips. Prerequisites Before starting, ensure your server meets the minimum requirements for hosting Appwrite with Coolify. Installation Install…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"Coolify"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/digitalocean",
		"title": "DigitalOcean deployment",
		"description": "Deploy Appwrite on DigitalOcean using the one-click Marketplace app.",
		"excerpt": "Deploy Appwrite on DigitalOcean using the pre-configured Marketplace app. One-click installation 1. Visit the Appwrite Marketplace page 2. Click **Create Appwrite Droplet** 3. Choose your configuration: - **Plan**: Minimum 4GB RAM recommended - **Region**: Select closest to your users - **SSH keys**: Add your SSH key for access 4. Click **Create Droplet** 1. Wait for Droplet provisioning to complete 2. Navigate to your Droplet's IP address in a web browser 3. Complete the initial setup wizard following the prompts Custom…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"DigitalOcean"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/dokploy",
		"title": "Dokploy",
		"description": "Learn how to self-host Appwrite on your infrastructure with Dokploy.",
		"excerpt": "Dokploy is an open-source, self-hosted deployment platform that simplifies application management through an intuitive dashboard and one-click template deployments. Appwrite is available as a template in Dokploy's template catalog, letting you deploy the complete Appwrite stack, including the database, workers, and function executor, in a few clicks. This guide walks you through setting up Appwrite on your Dokploy instance and provides necessary configuration and troubleshooting tips. Prerequisites Before starting, ensure your server meets the minimum requirements for hosting Appwrite with…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"Dokploy"
		]
	},
	{
		"slug": "advanced/self-hosting/platforms/google-cloud",
		"title": "Google Cloud deployment",
		"description": "Deploy Appwrite on Google Cloud Platform using Compute Engine. Learn how to set up a production-ready Appwrite instance on GCP.",
		"excerpt": "Deploy Appwrite on Google Cloud Platform using Compute Engine virtual machines. Compute Engine deployment Google Cloud Compute Engine provides virtual machines where you can deploy Appwrite with full control over the infrastructure. Create a VM instance with at least 2 vCPU and 4 GB RAM, configure firewall rules to allow HTTP/HTTPS traffic, then follow the general installation guide for Docker setup. Custom installations For manual installations on Compute Engine VMs or other Google Cloud services, follow the general installation guide…",
		"breadcrumbs": [
			"Self-hosting",
			"Platform deployment",
			"Google Cloud"
		]
	},
	{
		"slug": "advanced/self-hosting/production",
		"title": "Preparation",
		"description": "Optimize self-hosted Appwrite for production environments. Learn key concepts and best practices for deploying Appwrite in production.",
		"excerpt": "Appwrite's default setup is designed to help you start building quickly. To succeed with Appwrite in a production environment, you should follow key concepts and best practices outlined in this section. This guide assumes you have some basic understanding of Docker and Docker Compose command-line tools. Production checklist Before deploying Appwrite to production, ensure you have configured: - **Security** - Implement essential security practices - **Scaling** - Configure horizontal and vertical scaling for your containers - **Rate limits** - Enable…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Preparation"
		]
	},
	{
		"slug": "advanced/self-hosting/production/backups",
		"title": "Backups",
		"description": "Learn how to set up and manage backups for your self-hosted Appwrite instance to ensure data safety and disaster recovery.",
		"excerpt": "Appwrite Cloud offers automated Backups as a Service with scheduling and one-click restore. For self-hosted instances, you'll need to implement manual backup procedures as outlined on this page. Self-hosted Appwrite requires manual backup procedures to protect your data. What to back up Your Appwrite installation has several components that need backing up: 1. **Database** - User data, rows, and configuration 2. **Storage volumes** - Uploaded files and function code 3. **Environment variables** - Configuration in 4. **System snapshots** - Complete…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Backups"
		]
	},
	{
		"slug": "advanced/self-hosting/production/debugging",
		"title": "Debug",
		"description": "Master debugging techniques for self-hosted Appwrite. Discover best practices and tools for troubleshooting and maintaining a robust deployment.",
		"excerpt": "Appwrite comes with a few built-in tools and methods that easily debug and investigate issues on your Appwrite stack environment. Doctor CLI The doctor CLI helps you validate your server health and best practices. Using the Doctor CLI, you can verify your server configuration for best practices, validate your Appwrite stack connectivity and storage read and write access, and available storage space. To run the Doctor check, simply run the following command from your terminal. You might need to replace…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Debugging"
		]
	},
	{
		"slug": "advanced/self-hosting/production/emails",
		"title": "Email delivery",
		"description": "Configure reliable email delivery for your self-hosted Appwrite instance in production environments.",
		"excerpt": "Sending emails is hard. There are a lot of spam rules and configurations to master in order to set up a functional SMTP server. While it is okay to use a self-hosted SMTP server during development, you should use a third-party SMTP provider for production so your email doesn't get labeled as spam. You can change Appwrite's SMTP settings and credentials to any 3rd party provider you like that supports SMTP integration using our Docker environment variables. Most SMTP providers…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Email delivery"
		]
	},
	{
		"slug": "advanced/self-hosting/production/errors",
		"title": "Error monitoring",
		"description": "Configure error reporting and monitoring for your self-hosted Appwrite instance in production.",
		"excerpt": "By default, your Appwrite installation comes with error reporting turned off. You can enable dev mode to get access to more verbose error logs and stack traces. In production, it is highly recommended to turn error reporting off. To do so, make sure the Appwrite container environment variable is set to and not . To monitor errors in production, configure the environment variable with your provider's DSN. The supported DSN formats are: - Sentry: - LogOwl: - Raygun: - AppSignal:",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Error monitoring"
		]
	},
	{
		"slug": "advanced/self-hosting/production/rate-limits",
		"title": "Rate limits",
		"description": "Configure rate limiting for your self-hosted Appwrite instance to protect against abuse and attacks.",
		"excerpt": "If you disabled rate limits during development, make sure you re-enable them when moving to production environments. Rate limiting can be enabled by setting the environment variable to . Rate limits are an important mechanism to protect your app. Without rate limits, malicious actors can spam your APIs to perform denial-of-service type attacks or brute-force user passwords. How rate limits work Rate limits in self-hosted Appwrite apply differently depending on how you're accessing the API: - **Client SDKs**: Rate limits…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Rate limits"
		]
	},
	{
		"slug": "advanced/self-hosting/production/scaling",
		"title": "Scaling",
		"description": "Learn how to scale your self-hosted Appwrite instance horizontally and vertically to handle increased load.",
		"excerpt": "Appwrite is built with scalability in mind. Appwrite can scale both horizontally and vertically. Each Appwrite instance is composed of many containers, each with its unique job. Appwrite's functions and worker containers are stateless. To scale them, all you need is to replicate them and set up a load balancer to distribute their load. If you decide to set up a load balancer to scale a container, make sure **all** communication are routed through the load balancer and not directly…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Scaling"
		]
	},
	{
		"slug": "advanced/self-hosting/production/security",
		"title": "Security",
		"description": "Implement essential security practices for your self-hosted Appwrite instance to protect your data and infrastructure.",
		"excerpt": "Securing your self-hosted Appwrite instance is crucial to protect your data and infrastructure. This guide covers the essential security configurations and requirements for production Appwrite deployments. Encryption Appwrite does not generate a unique encryption key during a default setup. This key encrypts your files and sensitive data like webhook passwords or API keys to keep them secure. To take advantage of this feature, you must generate a unique key and set it as the value of the environment variable. You…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Security"
		]
	},
	{
		"slug": "advanced/self-hosting/production/updates",
		"title": "Updates and migrations",
		"description": "Keep your self-hosted Appwrite instance up-to-date. Learn how to perform updates, manage versions, and ensure your self-hosted Appwrite stays current.",
		"excerpt": "To upgrade your Appwrite server from an older version, you should use the Appwrite migration tool *after you have installed the new version*. The migration tool will adjust your Appwrite data to the new version's structure to make sure your Appwrite data is compatible with any internal changes. You can upgrade to a newer patch version without running the migration unless the release notes indicate a migration is required. For example, you can upgrade from [](https://github.com/appwrite/appwrite/releases/tag/1.6.0) to [](https://github.com/appwrite/appwrite/releases/tag/1.6.1) without running…",
		"breadcrumbs": [
			"Self-hosting",
			"Production",
			"Updates and migrations"
		]
	},
	{
		"slug": "apis",
		"title": "APIs",
		"description": "Explore the ways to talk to Appwrite. Access every service through the REST and GraphQL APIs, subscribe to changes in Realtime, and react to events with webhooks.",
		"excerpt": "Every Appwrite service is available through a consistent set of APIs. You can call them directly over REST or GraphQL, subscribe to changes in Realtime, or react to changes using events and webhooks. Most applications don't call these APIs by hand. Instead, use one of the official SDKs, which wrap every endpoint for your language and platform, and browse the API reference for the full list of services and methods. The pages below describe the underlying protocols and conventions for…",
		"breadcrumbs": [
			"APIs",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "apis/events",
		"title": "Events",
		"description": "Harness the power of events in Appwrite. Explore event-driven architecture, event types, and how to use events to create dynamic applications.",
		"excerpt": "Appwrite provides a variety of events that allows your application to react to changes as they happen. An event will fire when a change occurs in your Appwrite project, like when a new user registers or a new file is uploaded to Appwrite. You can subscribe to these events with Appwrite Functions, Realtime, or Webhooks. You can subscribe to events for specific resources using their ID or subscribe to changes of all resources of the same type by using a…",
		"breadcrumbs": [
			"APIs",
			"Concepts",
			"Events"
		]
	},
	{
		"slug": "apis/graphql",
		"title": "GraphQL",
		"description": "Get to know Appwrite GraphQL API for flexible data querying & manipulation. Our docs cover the schema, queries, mutations, integration tips and more.",
		"excerpt": "Appwrite supports multiple protocols for accessing the platform, including REST, GraphQL, and Realtime. The GraphQL API allows you to query and mutate any resource type on the Appwrite platform through the endpoint . Every endpoint available through REST is available through GraphQL, except for OAuth. Requests Although every query executes through the same endpoint, there are multiple ways to make a GraphQL request. All requests, however, share a common structure. | Name | Type | Description | |----------------|--------|---------------------------------------------------------------------------| | query…",
		"breadcrumbs": [
			"APIs",
			"Protocols",
			"GraphQL"
		]
	},
	{
		"slug": "apis/realtime",
		"title": "Realtime",
		"description": "Want to build dynamic and interactive applications with real-time data updates? Appwrite Realtime API makes it possible, get started with our intro guide.",
		"excerpt": "Appwrite supports multiple protocols for accessing the server, including REST, GraphQL, and Realtime. The Appwrite Realtime allows you to listen to any Appwrite events in realtime using the service. Instead of requesting new data via HTTP, the subscription will receive new data every time it changes, any connected client receives that update within milliseconds via a WebSocket connection. This lets you build an interactive and responsive user experience by providing information from all of Appwrite's services in realtime. The example…",
		"breadcrumbs": [
			"Realtime",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "apis/realtime/authentication",
		"title": "Authentication",
		"description": "Learn how authentication works with Appwrite Realtime subscriptions and how to handle session-based access.",
		"excerpt": "Realtime authenticates using an existing user session. If you authenticate **after** creating a subscription, the subscription will not receive updates for the newly authenticated user. You will need to re-create the subscription to work with the new user. More information and examples of authenticating users can be found in the dedicated authentication docs. All subscriptions are secured by the permissions system offered by Appwrite, meaning a user will only receive updates to resources they have permission to access. Using on…",
		"breadcrumbs": [
			"Realtime",
			"Getting started",
			"Authentication"
		]
	},
	{
		"slug": "apis/realtime/channels",
		"title": "Channels",
		"description": "Explore the available Realtime channels and learn how to use Channel helpers for type-safe subscriptions in Appwrite.",
		"excerpt": "Channels define which Appwrite resources you want to subscribe to. When subscribing to a channel, you will receive callbacks for events related to that channel's resources. The Appwrite SDKs provide a helper class to build type-safe channel subscriptions using a fluent API. Channel helpers Instead of manually writing channel strings, you can use the helper class to build type-safe channel subscriptions. The helper provides a fluent API that makes it easier to construct channel strings and reduces errors. The helper…",
		"breadcrumbs": [
			"Realtime",
			"Concepts",
			"Channels"
		]
	},
	{
		"slug": "apis/realtime/custom-endpoint",
		"title": "Custom endpoint",
		"description": "Learn how to configure a custom WebSocket endpoint for the Appwrite Realtime API when using a custom proxy.",
		"excerpt": "The SDK will guess the endpoint of the Realtime API when setting the endpoint of your Appwrite instance. If you are running Appwrite with a custom proxy and changed the route of the Realtime API, you can call the method on the Client SDK and set your new endpoint value. By default the endpoint is .",
		"breadcrumbs": [
			"Realtime",
			"Configuration",
			"Custom endpoint"
		]
	},
	{
		"slug": "apis/realtime/payload",
		"title": "Payload",
		"description": "Understand the structure of Appwrite Realtime subscription payloads and learn how to work with the response data.",
		"excerpt": "When you receive an update from a Realtime subscription, the payload contains information about the event and the affected resource. Understanding this structure helps you handle updates effectively in your application. Response structure The payload from the subscription will contain the following properties: * Name * Type * Description --- * events * string[] * The Appwrite events that triggered this update. --- * channels * string[] * An array of channels that can receive this message. --- * timestamp…",
		"breadcrumbs": [
			"Realtime",
			"Concepts",
			"Payload"
		]
	},
	{
		"slug": "apis/realtime/presences",
		"title": "Presences",
		"description": "Use the Appwrite Presences API to track which users are currently active, broadcast their status, and subscribe to live presence updates over Realtime.",
		"excerpt": "The Appwrite **Presences API** tracks which users are currently active in your app and lets every connected client see those statuses in realtime. You can use it to render online indicators next to teammates, show who is viewing a document, broadcast a \"typing\" status in a chat, or surface \"looking at the same page\" cues during collaboration. A presence is a short-lived record tied to a user. Each record carries a , a string (for example , , ), an…",
		"breadcrumbs": [
			"Realtime",
			"Concepts",
			"Presences"
		]
	},
	{
		"slug": "apis/realtime/queries",
		"title": "Queries",
		"description": "Filter realtime events using queries. Use familiar SDK query methods to receive only the updates that match your conditions.",
		"excerpt": "You can filter realtime events by passing queries as a third parameter when subscribing. Events are filtered server-side based on your queries, so your callback only receives updates that match your conditions. This allows you to use familiar SDK queries like to automatically filter events instead of filtering manually in your callback. Supported queries The following query methods are supported for realtime filtering: * Category * Queries --- * Comparison * , , , , , --- * Null checks…",
		"breadcrumbs": [
			"Realtime",
			"Concepts",
			"Queries"
		]
	},
	{
		"slug": "apis/realtime/subscribe",
		"title": "Subscribe",
		"description": "Learn how to subscribe to realtime events from Appwrite services. Subscribe to single or multiple channels and manage your subscriptions.",
		"excerpt": "The Appwrite Realtime API lets you subscribe to events from any Appwrite service through channels. You can subscribe to a single channel, multiple channels at once, and unsubscribe when you no longer need updates. On supported client SDKs (including the Web SDK), multiple subscriptions share one WebSocket and can be added, **updated**, or removed without reconnecting the whole client until you call **** on . Subscribe to a channel In this example we are subscribing to all updates related to…",
		"breadcrumbs": [
			"Realtime",
			"Getting started",
			"Subscribe"
		]
	},
	{
		"slug": "apis/release-policy",
		"title": "Release policy",
		"description": "Understand how Appwrite releases and versions its platforms and APIs.",
		"excerpt": "We value the trust of developers in Appwrite as the backbone of their applications. Our release policy is designed to provide developers with a reliable and consistent experience when using Appwrite. We are committed to providing support for our API, SDKs, and product versions for a reasonable length of time, and we follow industry-standard versioning protocols. Appwrite will prioritize security updates and will release new versions as soon as possible to fix any security vulnerabilities. Schedule We work to release…",
		"breadcrumbs": [
			"APIs",
			"Policies",
			"Release policy"
		]
	},
	{
		"slug": "apis/response-codes",
		"title": "Response codes",
		"description": "Understand Appwrite platform response codes and error handling. Learn to interpret HTTP status codes, error types, and implement best practices for handling errors gracefully.",
		"excerpt": "Appwrite uses conventional HTTP response codes to indicate the success or failure of an API request. - Codes in the range indicate success. - Codes in the range indicate an error caused by invalid request, usually caused by user error. - Codes in the range indicate an error with Appwrite, please check Docker container logs. Response codes | Code | Text | Description | |------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | 200 | OK | Success! | | 201 | Created | The requested resource…",
		"breadcrumbs": [
			"APIs",
			"Concepts",
			"Response codes"
		]
	},
	{
		"slug": "apis/rest",
		"title": "REST",
		"description": "Discover the Appwrite REST API for building robust and scalable applications. Access detailed documentation on REST endpoints, authentication, and data management.",
		"excerpt": "Appwrite supports multiple protocols for accessing the server, including REST, GraphQL, and Realtime. The REST API allows you to access your Appwrite server through HTTP requests without needing an SDK. Each endpoint in the API represents a specific operation on a specific resource. Headers Appwrite's REST APIs expect certain headers to be included with each request: - Header - - Description --- - X-Appwrite-Project: [PROJECT-ID] - required - The ID of your Appwrite project --- - Content-Type: application/json - required…",
		"breadcrumbs": [
			"APIs",
			"Protocols",
			"REST"
		]
	},
	{
		"slug": "apis/webhooks",
		"title": "Webhooks",
		"description": "Leverage webhooks in the Appwrite platform for real-time updates. Learn how to configure, manage, and integrate webhooks to keep your applications in sync.",
		"excerpt": "Webhooks allow you to build or set up integrations which subscribe to certain events on Appwrite. When one of those events is triggered, we'll send an HTTP POST payload to the webhook's configured URL. Webhooks can be used to purge cache from CDN, calculate data or send a Slack notification. You're only limited by your imagination. Getting started To add a webhook from the Appwrite Console: 1. Navigate to your project's **Settings** page. 2. Select the **Webhooks** tab. 3. Click…",
		"breadcrumbs": [
			"APIs",
			"Concepts",
			"Webhooks"
		]
	},
	{
		"slug": "partners",
		"title": "Partners",
		"description": "Integrate Appwrite into your platform. Provision organizations, projects, and domains with OAuth connect, organization API keys, and Console SDK APIs.",
		"excerpt": "Partner documentation is for teams building **platforms on top of Appwrite**. If your product provisions Appwrite backends for users, connects AI agents to their accounts, or orchestrates organizations and projects from a control plane, you are in the right place. Developer documentation covers building apps **inside** a single Appwrite project. Partner documentation covers orchestrating Appwrite **across** organizations and projects from your own platform. Use cases for platform builders Partner docs are designed for platform builders: - **Vibe coding and agentic…",
		"breadcrumbs": ["Overview", "Partners"]
	},
	{
		"slug": "partners/apps",
		"title": "Apps",
		"description": "Register and manage OAuth apps with the Appwrite Console Apps API. Publish integrations, manage client secrets, and connect users through OAuth 2.0.",
		"excerpt": "The Apps API () lets partner platforms register **OAuth apps** that connect to Appwrite organizations. Use it when you publish integrations, run a marketplace, or need programmatic control over OAuth client settings. Apps pair with the OAuth2 service () to start authorization and receive tokens after user consent. Console SDK access Authenticate with an organization API key that includes apps scopes: Common operations | Operation | Use case | | --------- | -------- | | | Show OAuth apps owned…",
		"breadcrumbs": [
			"Apps",
			"Partners",
			"Apps"
		]
	},
	{
		"slug": "partners/apps/consent",
		"title": "Consent",
		"description": "What users see on the Sign in with Appwrite consent screen, what they can change, and what your app receives.",
		"excerpt": "Consent is where the user decides. Appwrite hosts the screen, renders what your app asked for, and gives the user the final say over scopes and targets. Your app never sees the screen; it sees the outcome. The consent screen The screen is built from your registration and your request: - **Your app's identity**: the name, logo, and tagline you registered. - **Permissions**: each requested scope as a plain-language line, under a one-line summary of the overall reach. - **Project…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Consent"
		]
	},
	{
		"slug": "partners/apps/device-flow",
		"title": "Device flow",
		"description": "Sign in with Appwrite from TVs, CLIs, and other input-constrained devices with the OAuth2 device authorization grant.",
		"excerpt": "Some clients cannot run the redirect flow: a TV has no browser to send the user back to, and a CLI has no redirect URI to receive a code. The device flow (RFC 8628) replaces the redirect with a short code. Your app shows the code, the user approves it from their phone or laptop, and your app picks up the tokens by polling. The flow is off by default. Turn it on with the device flow toggle on your…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Device flow"
		]
	},
	{
		"slug": "partners/apps/quick-start",
		"title": "Start with Sign in with Appwrite",
		"description": "Register an app and run the full Sign in with Appwrite flow, from consent screen to your first authorized API call.",
		"excerpt": "This guide builds Sign in with Appwrite into an app, start to finish. The running example is Horizon, a deployment dashboard: - A user clicks its sign-in button. - They approve access on the Appwrite consent screen. - Horizon reads their projects with the tokens it receives. By the end, you will have run the same journey with your own app. You need a server that can receive a redirect and keep a client secret. The examples use as the…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Start with Sign in with Appwrite"
		]
	},
	{
		"slug": "partners/apps/registration",
		"title": "Registration",
		"description": "Register your app for Sign in with Appwrite through the Console.",
		"excerpt": "Your app appears on the consent screen as a registered client: a name, a logo, and a set of credentials tied to redirect URIs. Registration happens in the Console, in your organization's Marketplace tab. Client types Every client is or , and the choice decides how it authenticates. - **Confidential** clients have a backend that keeps a secret. They authenticate token requests with the client secret, and their tokens live longer: 8 hours for access tokens and 365 days for…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Registration"
		]
	},
	{
		"slug": "partners/apps/scopes",
		"title": "Scopes",
		"description": "The Sign in with Appwrite scope catalog, and how grants target the projects and organizations a user chooses.",
		"excerpt": "A scope names an action your app wants to perform. A grant pairs scopes with the projects and organizations they apply to. Both halves matter: by itself says what, and the user's project selection on the consent screen says where. Request the smallest set that serves your app. Every scope you ask for appears on the consent screen as a permission line, and users decline requests that want too much. Identity scopes The OpenID Connect scopes cover who the user…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Scopes"
		]
	},
	{
		"slug": "partners/apps/tokens",
		"title": "Tokens",
		"description": "Use, refresh, and revoke the tokens Appwrite issues to your app through Sign in with Appwrite.",
		"excerpt": "Your app holds three tokens with different jobs: - The **access token** calls APIs. - The **refresh token** replaces expired access tokens. - The **ID token** proves who signed in. All three come from one call. After the user approves your app on the consent screen, exchange the authorization code at the token endpoint, sending your client credentials in the request body: The response carries all three tokens, along with what the user granted: Public clients Mobile apps, desktop apps,…",
		"breadcrumbs": [
			"Partners",
			"Apps",
			"Tokens"
		]
	},
	{
		"slug": "partners/architecture",
		"title": "Architecture",
		"description": "Understand how partner platforms connect to Appwrite with OAuth connect, organization API keys, and Console versus project SDKs.",
		"excerpt": "Partner platforms sit **above** Appwrite organizations and projects. Your backend orchestrates Console-level resources, then uses project-scoped credentials to manage each customer's Appwrite backend. High-level flow 1. **Your platform** authenticates with Appwrite using OAuth tokens (user-linked) or an organization API key (platform-owned). 2. **Console APIs** manage organizations, projects, domains, billing context, and org-level settings. 3. **Project APIs** manage databases, storage, functions, auth users, and other resources inside each project. 4. **Your product UI** exposes a subset of these capabilities to your…",
		"breadcrumbs": [
			"Architecture",
			"Partners",
			"Architecture"
		]
	},
	{
		"slug": "partners/domains",
		"title": "Domains API",
		"description": "Manage organization domains and DNS from your partner platform using the Console Domains API.",
		"excerpt": "The Domains API lets partner platforms register, transfer, and manage organization domains programmatically. Use it when your product offers custom hostnames or domain management to customers. Console SDK access Domains are organization-level resources. Authenticate with an organization API key that includes domain scopes: Common operations | Operation | Use case | | --------- | -------- | | List domains | Show domains attached to an organization | | Register / transfer | Sell or provision domains through your platform |…",
		"breadcrumbs": [
			"Domains",
			"Partners",
			"Domains API"
		]
	},
	{
		"slug": "partners/guides/marketplaces",
		"title": "Marketplaces",
		"description": "Build an OAuth app marketplace with the Apps API and OAuth connect. Publish integrations, let organizations install them, and manage grants on your platform.",
		"excerpt": "Use this guide when you run a **marketplace** where Appwrite organizations discover, install, and manage third-party integrations. Your platform lists OAuth apps, starts authorization on install, and tracks which apps are connected to each customer organization. Marketplace roles | Role | Responsibility | | ---- | -------------- | | **Marketplace operator** (you) | Curates the catalog, registers or approves OAuth apps, runs install and uninstall flows | | **Integration developer** | Builds the app that requests Console scopes after install…",
		"breadcrumbs": [
			"Marketplaces",
			"Partners",
			"guides",
			"Marketplaces"
		]
	},
	{
		"slug": "partners/guides/multi-tenancy",
		"title": "Multi-tenancy",
		"description": "Design patterns for multi-tenant partner platforms on Appwrite with isolated projects, org API keys, and optional OAuth connect.",
		"excerpt": "Multi-tenant platforms give each customer an isolated Appwrite backend while sharing operational tooling on your side. Tenant isolation model The recommended pattern is **one Appwrite project per tenant**: - Data and permissions stay isolated by project boundary - Project API keys can be scoped per tenant - Blast radius of a leaked key is limited to one customer - You can place tenants in different regions Mapping tenants Maintain a table in your platform: | Your tenant ID | Appwrite…",
		"breadcrumbs": [
			"Multi-tenancy",
			"Partners",
			"guides",
			"Multi-tenancy"
		]
	},
	{
		"slug": "partners/guides/provisioning",
		"title": "Provisioning",
		"description": "End-to-end guide for provisioning an Appwrite project per customer from a partner platform using organization API keys.",
		"excerpt": "This guide walks through provisioning a dedicated Appwrite project when a customer signs up for your platform. Flow overview 1. Customer completes signup in your product 2. Your backend creates or selects an Appwrite organization 3. Console API creates a new project in the target region 4. Your backend creates a scoped project API key 5. Your platform stores the mapping and initializes default resources Step 1: Create the project Step 2: Create a project API key Create a key…",
		"breadcrumbs": [
			"Provisioning",
			"Partners",
			"guides",
			"Provisioning"
		]
	},
	{
		"slug": "partners/oauth-connect",
		"title": "OAuth connect",
		"description": "Connect your platform to users' Appwrite accounts with OAuth 2.0. Request consent to manage organizations and projects on their behalf.",
		"excerpt": "OAuth connect lets your platform access a user's Appwrite organizations after they sign in and grant consent. Use it when customers already have Appwrite accounts and want to link them to your product without sharing passwords or API keys. How it works 1. Register an **OAuth app** in your Appwrite organization settings 2. Redirect users to Appwrite's authorization endpoint with your client ID and requested scopes 3. After consent, exchange the authorization code for access and refresh tokens on your…",
		"breadcrumbs": [
			"OAuth connect",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "partners/oauth-connect/scopes",
		"title": "OAuth connect scopes",
		"description": "Request the right Console OAuth scopes when connecting to user Appwrite accounts from your partner platform.",
		"excerpt": "OAuth scopes define what your platform can do after a user grants consent. Request only the scopes required for your integration. Scope principles - Start with read-only scopes if your product only displays Appwrite data - Add write scopes when your platform creates or updates resources - Separate scopes for organizations, projects, and domains where possible - Document which features require which scopes in your product UI Common scope categories | Category | Typical use | | -------- | -----------…",
		"breadcrumbs": [
			"OAuth connect",
			"Getting started",
			"Scopes"
		]
	},
	{
		"slug": "partners/oauth-connect/setup",
		"title": "OAuth connect setup",
		"description": "Register an OAuth app and implement the authorization code flow to connect your platform to user Appwrite accounts.",
		"excerpt": "Register an OAuth app 1. Open your organization in the Appwrite Console 2. Go to **Settings** > **OAuth apps** 3. Create an app with your platform name and redirect URIs 4. Copy the **client ID** and **client secret** to your server environment Redirect URIs must match exactly what your backend uses to receive the authorization code. Authorization flow 1. Send the user to Appwrite's authorize URL with , , , and 2. User signs in and approves the requested scopes…",
		"breadcrumbs": [
			"OAuth connect",
			"Getting started",
			"Setup"
		]
	},
	{
		"slug": "partners/org-api-keys",
		"title": "Org API keys",
		"description": "Use organization API keys to proxy Appwrite and programmatically manage projects, domains, and resources from your partner platform.",
		"excerpt": "Organization API keys authenticate **server-to-server** calls to Appwrite Console APIs from your platform's backend. Use them when your product provisions and manages Appwrite resources inside an organization you operate. How it works 1. Create an **organization API key** in **Organization** > **Settings** > **API keys** 2. Assign Console scopes for the operations your platform performs 3. Initialize the Console SDK with the key on your server 4. Create projects, manage domains, and orchestrate resources for your customers 5. Use project…",
		"breadcrumbs": [
			"Org API keys",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "partners/org-api-keys/scopes",
		"title": "Org API key scopes",
		"description": "Configure organization API key scopes for Console operations like managing projects, domains, and organization settings.",
		"excerpt": "Organization API keys use **Console scopes** that control access to organization-level APIs. Assign the minimum scopes your platform needs. Scope categories | Area | Read scopes | Write scopes | | ---- | ----------- | ------------ | | Projects | List and inspect projects | Create, update, and delete projects | | Domains | List domains and DNS | Register domains and manage records | | Organization | Read org settings and members | Update settings and manage members |…",
		"breadcrumbs": [
			"Org API keys",
			"Getting started",
			"Scopes"
		]
	},
	{
		"slug": "partners/organizations",
		"title": "Organization API",
		"description": "Use the Appwrite Console Organization API to manage organizations, members, and org-level settings from your partner platform.",
		"excerpt": "The Organization API is part of the Console SDK (). Use it to list organizations, read plan information, and manage organization settings when operating a partner platform. Console SDK access Authenticate with an organization API key or a user's OAuth access token: Common operations | Operation | Use case | | --------- | -------- | | | Show organizations available to a linked user or your platform account | | | Read organization details and preferences | | | Provision…",
		"breadcrumbs": [
			"Organization",
			"Partners API",
			"Overview"
		]
	},
	{
		"slug": "partners/organizations/manage",
		"title": "Manage organizations",
		"description": "Create and update Appwrite organizations from your partner platform using the Console Organization API.",
		"excerpt": "Use the Organization API to provision and configure organizations as part of your onboarding flow. Create an organization Store the returned organization ID in your platform database and associate it with the customer record. Update organization settings Update name, billing email, and preferences when customers change settings in your product: Map organizations to customers Maintain a stable mapping between your customer ID and Appwrite . Use this mapping for all Console API calls and audit logs. Related Create projects",
		"breadcrumbs": [
			"Organization",
			"Partners API",
			"Manage organizations"
		]
	},
	{
		"slug": "partners/organizations/members",
		"title": "Members and roles",
		"description": "Manage organization members and roles from your partner platform using the Console Organization and Teams APIs.",
		"excerpt": "Partner platforms often invite customer admins to an Appwrite organization or sync membership from an existing identity provider. Organization roles Appwrite organizations use roles such as owner, developer, and analyst to control Console access. Your platform should assign the minimum role required for each member. When you proxy Console access, enforce the same role boundaries in your product UI. Invite members Use organization membership APIs to invite users by email. Invited users receive Appwrite Console access according to the role…",
		"breadcrumbs": [
			"Organization",
			"Partners API",
			"Members and roles"
		]
	},
	{
		"slug": "partners/project",
		"title": "Project",
		"description": "Configure your Appwrite project, including auth methods, platforms, protocols, services, and policies.",
		"excerpt": "An Appwrite **Project** is the top-level container for all the resources your app uses, from users and databases to storage buckets and functions. The settings on a project control which authentication methods are available, which client platforms can connect, which protocols and services are exposed, and which policies apply to the resources inside it. Built for platform teams The Console configures one project at a time by hand. The Project API does the same configuration programmatically, which is what teams…",
		"breadcrumbs": [
			"Project",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "partners/project/api-keys",
		"title": "API keys",
		"description": "Secure your application with Appwrite API Keys. Discover how to create and manage API keys to control access and enhance your application's security.",
		"excerpt": "API keys are secrets used by Appwrite Server SDKs and the Appwrite CLI to prove their identity. What can be accessed each API key is restricted by scopes instead of permissions. It is a best practice to grant only the scopes you need to meet your project's goals to an API key. API keys should be treated as a secret. Never share the API key and keep API keys out of client applications. API keys vs Dev keys API keys…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"API keys"
		]
	},
	{
		"slug": "partners/project/auth-methods",
		"title": "Auth methods",
		"description": "Enable or disable authentication methods on your Appwrite project programmatically using server SDKs.",
		"excerpt": "Each Appwrite project ships with a configurable set of authentication methods, including email and password, magic URL, email OTP, phone, anonymous sessions, JWT, and team invites. Methods can be toggled on or off from the Appwrite Console under **Auth** > **Settings**, or programmatically through any server SDK using the Project service. When a method is disabled, the matching account endpoints reject requests for that project until it is re-enabled. Toggle from the Console To toggle auth methods manually: 1. Open…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Auth methods"
		]
	},
	{
		"slug": "partners/project/branded-emails",
		"title": "White-label transactional emails",
		"description": "Route a customer's project emails through their own SMTP server and rebrand the email templates per locale with the Project API.",
		"excerpt": "When a user on your customer's app resets their password, the email that lands in their inbox is part of your customer's brand, or it should be. Out of the box, those messages go through Appwrite's shared sender and carry Appwrite's default templates, which quietly breaks the white-label illusion the moment a user reads the \"from\" line. The Project API lets you route a project's mail through the customer's own SMTP server and rewrite every template, so verification, recovery, and…",
		"breadcrumbs": [
			"Project",
			"Guides",
			"Branded emails"
		]
	},
	{
		"slug": "partners/project/email-templates",
		"title": "Email templates",
		"description": "Customize the account management emails Appwrite sends to your users, including verification, password recovery, and magic URL emails, per locale.",
		"excerpt": "Appwrite sends transactional emails on your behalf for account management flows such as email verification, password recovery, and magic URL sign-in. Email templates let you customize the subject, message body, sender identity, and reply-to address of each of these emails, with a separate version for every locale you support. You can view the built-in default templates at any time, but saving a customization requires a custom SMTP server enabled on your project. See Custom SMTP server to set one up.…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Email templates"
		]
	},
	{
		"slug": "partners/project/environment-variables",
		"title": "Environment variables",
		"description": "Use project, function, and site environment variables to pass constants and secrets to your Appwrite Functions and Appwrite Sites at build and runtime.",
		"excerpt": "Environment variables let you pass constants and secrets such as API keys, connection strings, and feature flags into your Appwrite Functions and Appwrite Sites at build and runtime. Storing values outside your source keeps secrets out of version control and lets you change configuration without code changes. Appwrite supports three scopes of environment variables: - **Project variables** are shared across every function and site in the project. Use them for values consumed by more than one resource, such as a…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Environment variables"
		]
	},
	{
		"slug": "partners/project/key-rotation",
		"title": "Issue and rotate API keys",
		"description": "Manage the full life of an API key with the Project API, from issuing a scoped credential to auditing, rotating, and revoking it.",
		"excerpt": "Every connection your platform makes into a customer's project rides on an API key, and a key is a credential like any other in production. Left alone, a long-lived key with broad scopes is exactly the thing a security review flags: too much access, no expiry, no record of when it was last rotated. The Project API lets you run a key's whole life from your backend so it never becomes that liability: - Issue it scoped to one integration,…",
		"breadcrumbs": [
			"Project",
			"Guides",
			"Key rotation"
		]
	},
	{
		"slug": "partners/project/labels",
		"title": "Labels",
		"description": "Assign customizable labels to your Appwrite project to categorize and filter projects within an organization.",
		"excerpt": "Labels are short alphanumeric tags you assign to a project. Use them to categorize your projects and filter them within an organization, for example by environment (, ), team, or region. Manage in the Console To manage labels from the Appwrite Console: 1. Navigate to your project. 2. Open the **Settings** section. The **Labels** card is on the **Overview** tab. 3. In the **Labels** field, type a label and press Enter, or select one of the suggested labels. Labels may…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Labels"
		]
	},
	{
		"slug": "partners/project/mock-phones",
		"title": "Mock phones",
		"description": "Register fictional phone numbers and OTPs to test phone authentication flows without sending real SMS messages.",
		"excerpt": "Mock phones let you register fictional phone numbers and a fixed verification code at the project level. When a tester signs in with a registered number, the registered code works in place of a real SMS, so phone authentication flows can be exercised in CI, demo accounts, and app store review submissions without sending SMS or paying provider fees. Each project stores its mock phones on the project document. Numbers must be in E.164 format, and verification codes are exactly…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Mock phones"
		]
	},
	{
		"slug": "partners/project/oauth",
		"title": "OAuth providers",
		"description": "Configure OAuth2 sign-in providers for your project from the Console or programmatically with a Server SDK.",
		"excerpt": "OAuth2 providers let your users sign in with accounts they already have, such as GitHub, Google, or Apple. Each provider stores a client ID and client secret at the project level, and can be enabled or disabled independently. You can configure providers from the Appwrite Console or programmatically with a Server SDK. Each provider has its own update method (, , and so on), the read methods and cover all of them. Configure from the Console To configure a provider…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"OAuth providers"
		]
	},
	{
		"slug": "partners/project/platforms",
		"title": "Platforms",
		"description": "Register Web, Apple, Android, Windows, and Linux apps to your Appwrite project programmatically using server SDKs.",
		"excerpt": "Each Appwrite project has a list of registered platforms. A platform identifies a client application that is allowed to talk to your project's API: a Web platform pins an allowed hostname for CORS, while Apple, Android, Windows, and Linux platforms pin a bundle, package, or application ID for native clients. Platforms can be added from the Appwrite Console, or programmatically through any server SDK using the Project service. Manage from the Console To add a platform manually: 1. Open your…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Platforms"
		]
	},
	{
		"slug": "partners/project/policies",
		"title": "Policies",
		"description": "Configure password rules, session limits, user limits, and membership privacy on your Appwrite project programmatically using server SDKs.",
		"excerpt": "Project policies control how users authenticate, how long their sessions live, how many users can sign up, and what team members can see about each other. Each policy is an independent toggle on the project. Policies can be configured from the Appwrite Console, or programmatically through any server SDK using the Project service. Manage from the Console To configure policies manually: 1. Open your project in the Appwrite Console. 2. Navigate to **Auth** in the sidebar. 3. Open the **Security**…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Policies"
		]
	},
	{
		"slug": "partners/project/protocols",
		"title": "Protocols",
		"description": "Enable or disable the REST, GraphQL, and WebSocket protocols on your Appwrite project programmatically using server SDKs.",
		"excerpt": "Each Appwrite project exposes its API through three protocols: REST, GraphQL, and WebSocket. You can disable any protocol your clients don't use to shrink the project's surface area, then re-enable it when needed. Protocols can be toggled from the Appwrite Console, or programmatically through any server SDK using the Project service. Manage from the Console To toggle a protocol manually: 1. Open your project in the Appwrite Console. 2. Open **Settings** from the bottom of the side nav. 3. Scroll…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Protocols"
		]
	},
	{
		"slug": "partners/project/provisioning",
		"title": "Provision a project's baseline",
		"description": "Apply a standard configuration to a customer's project programmatically with the Project API, including platforms, auth methods, services, protocols, and variables.",
		"excerpt": "A customer signs up to your platform and a project is created for them. Right now it is wide open: every authentication method is enabled, every service is exposed on the API, and nothing is constrained to the way you run things. Before that customer ever logs in, you want their project to match the baseline that every project on your platform shares. The Project API lets you encode that baseline once and apply it from your backend or a…",
		"breadcrumbs": [
			"Project",
			"Guides",
			"Provisioning"
		]
	},
	{
		"slug": "partners/project/services",
		"title": "Services",
		"description": "Enable or disable individual Appwrite services on your project programmatically using server SDKs.",
		"excerpt": "Each Appwrite project ships with the full set of services enabled by default: Account, TablesDB, Storage, Functions, and so on. You can disable any service your clients don't use to remove it from the client-facing API. Disabled services remain accessible to server SDKs using an API key. Services can be toggled from the Appwrite Console, or programmatically through any server SDK using the Project service. Manage from the Console To toggle a service manually: 1. Open your project in the…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"Services"
		]
	},
	{
		"slug": "partners/project/smtp",
		"title": "SMTP",
		"description": "Configure a custom SMTP server to send Appwrite's account management emails from your own domain, improve deliverability, and unlock custom email templates.",
		"excerpt": "By default, Appwrite sends account management emails such as verification, password recovery, and magic URL links from a shared SMTP server. Configuring a custom SMTP server lets you send these emails through your own provider instead. This sends mail from your own domain, improves deliverability, and unlocks custom email templates. Configure in the Console To configure a custom SMTP server from the Appwrite Console: 1. Navigate to your project. 2. Open the **Settings** section and select the **SMTP** tab. 3.…",
		"breadcrumbs": [
			"Project",
			"Concepts",
			"SMTP"
		]
	},
	{
		"slug": "partners/projects",
		"title": "Project API",
		"description": "Use the Appwrite Console Project API to create and manage projects for your customers from a partner platform.",
		"excerpt": "The Project API () creates and configures Appwrite projects inside an organization. Each customer workspace in your platform typically maps to one project. Initialize the Project service Project lifecycle | Stage | Console API | Next step | | ----- | ----------- | --------- | | Create | | Store and region | | Configure | , platforms, webhooks | Set URLs and integration settings | | Operate | Project SDK + project API key | Manage databases, storage, functions…",
		"breadcrumbs": [
			"Project",
			"Partners API",
			"Overview"
		]
	},
	{
		"slug": "partners/projects/create",
		"title": "Create projects",
		"description": "Provision Appwrite projects for customers using the Console Project API and organization API keys.",
		"excerpt": "Create a project After creation 1. Store and in your platform database 2. Create a project API key with scopes for the services you manage 3. Register platforms if the customer uses client SDKs 4. Initialize the project SDK with the regional endpoint for resource APIs Idempotency Use a deterministic custom project ID or store provisioning state so retries do not create duplicate projects for the same customer. Related Provision projects guide",
		"breadcrumbs": [
			"Project",
			"Partners API",
			"Create projects"
		]
	},
	{
		"slug": "partners/projects/resources",
		"title": "Manage resources",
		"description": "Manage Appwrite project resources from your partner platform using the project SDK and project API keys.",
		"excerpt": "After you create a project, use the **project SDK** () to manage resources inside that project. Switch from Console to project SDK Console APIs manage the project shell. Project APIs manage services inside the project: Common partner operations | Service | Example operations | | ------- | ------------------ | | TablesDB | Create databases, tables, and rows for customer data | | Storage | Create buckets and manage files | | Functions | Deploy functions on behalf of customers |…",
		"breadcrumbs": [
			"Project",
			"Partners API",
			"Manage resources"
		]
	},
	{
		"slug": "partners/proxy",
		"title": "Proxy",
		"description": "Proxy Appwrite Console and project APIs from your partner platform using organization and project credentials.",
		"excerpt": "Many partner platforms expose a simplified API or UI while Appwrite remains the backend. Your server proxies requests to Appwrite using organization API keys and per-customer project credentials. Architecture Your platform API: - Authenticates the customer with your auth system - Resolves the customer to an Appwrite and credentials - Forwards or composes Appwrite operations - Returns responses shaped for your product Two-layer proxy 1. **Console layer**: Org API key + Console SDK for organizations, projects, and domains 2. **Project…",
		"breadcrumbs": [
			"Proxy",
			"Partners",
			"Proxy"
		]
	},
	{
		"slug": "partners/quick-start",
		"title": "Quick start",
		"description": "Choose an Appwrite partner integration model and take your first steps with OAuth connect or organization API keys.",
		"excerpt": "This quick start helps you pick the right integration path and wire up your first Console API call. Choose your integration model | Model | Best for | Auth | | ----- | -------- | ---- | | OAuth connect | Users link existing Appwrite accounts | User consent via OAuth 2.0 | | Org API keys | Your platform provisions resources in your org | Organization API key | Use **OAuth connect** when your customers already use Appwrite and…",
		"breadcrumbs": [
			"Quick start",
			"Partners",
			"Quick start"
		]
	},
	{
		"slug": "partners/usage",
		"title": "Usage",
		"description": "Read organization usage, plan limits, and billing aggregation with the Partners Usage API for metering and reselling Appwrite.",
		"excerpt": "The Usage API lets partner platforms read **organization-level consumption** and plan context. Use it to show usage dashboards, enforce limits, or align your billing with Appwrite Cloud usage. Access usage through with an organization API key or OAuth-delegated access that includes billing scopes. Console SDK access Common operations | Operation | Use case | | --------- | -------- | | | Read plan limits, features, and billing cycle for an organization | | | Fetch current usage metrics for the…",
		"breadcrumbs": [
			"Usage",
			"Partners",
			"Usage"
		]
	},
	{
		"slug": "products/agent",
		"title": "Agent",
		"description": "Chat with the Appwrite Agent in the Console to inspect your project, explain issues, suggest next steps, and run approved actions.",
		"excerpt": "Appwrite **Agent** is the AI chat built into the Appwrite Cloud Console. It helps you inspect the organization and project you are working in, answer Appwrite how-to questions, clarify ambiguous requests, and take approved actions through Appwrite MCP. You can open the Agent as a right-hand panel while you work, or use the dedicated fullscreen experience at . Conversations, custom models, memory, MCP connections, and automations are stored on your Console account. Agent is available on Appwrite Cloud. Self-hosted deployments…",
		"breadcrumbs": [
			"Agent",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/agent/actions",
		"title": "Actions",
		"description": "Learn what the Appwrite Agent can inspect, clarify, and do in your projects and in the Console.",
		"excerpt": "The Agent can answer questions from documentation and project context alone. When MCP is connected, it can also call tools and drive Console UI through approved actions. Answer and guide Without tools, the Agent can: - Explain Appwrite concepts and how-to steps - Troubleshoot common setup issues - Suggest next steps for Auth, Databases, Storage, Functions, Sites, and other products - Use your current Console page as context for more relevant answers Empty-state suggestions focus on how-to questions until MCP…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"Actions"
		]
	},
	{
		"slug": "products/agent/add-memory",
		"title": "Add memory",
		"description": "Save a preference, instruction, or fact for the Appwrite Agent to reuse across conversations.",
		"excerpt": "Add memory when you want the Agent to remember standing guidance without repeating it in every chat. Add memory 1. Sign in to Appwrite Cloud. 2. Go to , or open **Agent** > **Settings** > **Memory**. 3. Click **Add memory**. 4. Enter a **key** (short label) and **content**. 5. Choose a category: **Preference**, **Instruction**, or **Fact**. 6. Optionally set a **priority** so important memories are preferred when context is limited. 7. Leave the memory **active**, then save. Update or archive…",
		"breadcrumbs": [
			"Agent",
			"Guides",
			"Add memory"
		]
	},
	{
		"slug": "products/agent/add-model",
		"title": "Add a custom model",
		"description": "Register a provider API key so the Appwrite Agent can use your own LLM credentials.",
		"excerpt": "Add a custom model when you want conversations or automations to run on a provider and model you control. Add a model 1. Sign in to Appwrite Cloud. 2. Go to , or open **Agent** > **Settings** > **Models**. 3. Click **Add model**. 4. Choose a provider (OpenAI, Anthropic, Google, OpenRouter, Azure, or Custom). 5. Enter the API key and model id. Adjust the base URL if your provider requires a non-default endpoint. 6. Save the model. Use the model…",
		"breadcrumbs": [
			"Agent",
			"Guides",
			"Add a custom model"
		]
	},
	{
		"slug": "products/agent/automations",
		"title": "Automations",
		"description": "Learn how Appwrite Agent automations run scheduled prompts and create conversations on a cron schedule.",
		"excerpt": "**Automations** run Agent prompts on a schedule. Each run creates a new conversation with your prompt, optional model, and project context so you can review the result later. Manage automations from or the Agent automations panel in the Console. What an automation contains | Field | Purpose | |-------|---------| | Name | Label in the automations list | | Prompt | The message sent to the Agent on each run | | Schedule | Cron expression (UI helpers cover common…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"Automations"
		]
	},
	{
		"slug": "products/agent/chat",
		"title": "Chat with the Agent",
		"description": "Open the Appwrite Agent panel or fullscreen chat, send prompts, and manage a conversation.",
		"excerpt": "Chat is the primary way you use the Appwrite Agent. You can work in a side panel while staying on a Console page, or open the fullscreen Agent for longer sessions. Open the Agent Right-hand panel 1. Sign in to Appwrite Cloud. 2. Click the **Agent** control in the Console header. 3. The Agent panel opens on the right. Your panel open state can persist in account preferences. Fullscreen 1. Go to (or for a specific thread). 2. Use the…",
		"breadcrumbs": [
			"Agent",
			"Guides",
			"Chat with the Agent"
		]
	},
	{
		"slug": "products/agent/connect-mcp",
		"title": "Connect Appwrite MCP",
		"description": "Authorize Appwrite MCP so Appwrite Agent can take approved actions in your projects.",
		"excerpt": "Connecting **Appwrite MCP** lets the Agent call Appwrite tools with scopes you grant through OAuth. Without this connection, the Agent can still answer questions and guide you through the Console. Connect 1. Sign in to Appwrite Cloud. 2. Open the Agent panel, or go to . 3. Find **Appwrite MCP**. 4. Click **Connect**. 5. Complete the OAuth consent for the **Appwrite Agent** client. 6. Return to the Console and confirm the badge shows **Connected**. You can also open the connect…",
		"breadcrumbs": [
			"Agent",
			"Guides",
			"Connect Appwrite MCP"
		]
	},
	{
		"slug": "products/agent/conversations",
		"title": "Conversations",
		"description": "Learn how Appwrite Agent conversations work, including threading, attachments, voice, and conversation management.",
		"excerpt": "A **conversation** is a chat thread with the Appwrite Agent. Each conversation belongs to your Console account. You can keep many conversations, pin important ones, archive others, and open any thread in the panel or at . What a conversation contains | Piece | Purpose | |-------|---------| | Messages | User and assistant turns, including edits, retries, and scores | | Timeline | Tool calls and multi-agent activity for a turn | | Attachments | Files you upload for the…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"Conversations"
		]
	},
	{
		"slug": "products/agent/create-automation",
		"title": "Create an automation",
		"description": "Schedule a recurring Appwrite Agent prompt with a cron schedule and optional model.",
		"excerpt": "Create an automation when you want the Agent to run the same prompt on a schedule and leave the result in a conversation you can review. Create 1. Sign in to Appwrite Cloud. 2. Go to (or ). 3. Click the create action if you are on the list view. 4. Enter a **name**. 5. Write the **prompt** the Agent should run each time. 6. Set a **schedule** with the cron editor (for example weekly on Monday). 7. Optionally set…",
		"breadcrumbs": [
			"Agent",
			"Guides",
			"Create an automation"
		]
	},
	{
		"slug": "products/agent/mcp",
		"title": "MCP connections",
		"description": "Learn how the Appwrite Agent uses MCP servers to call tools and take actions in your projects.",
		"excerpt": "**MCP connections** tell the Agent which Model Context Protocol servers it can use. The primary connection is **Appwrite MCP**, the hosted server that lets the Agent take actions in your Appwrite projects. You can also manage other MCP servers from Agent settings. Manage connections under **Agent** > **Settings** > **MCP**, or from the MCP controls in the Agent UI. Appwrite MCP **Appwrite MCP** is listed by default. Its purpose is to let the Agent call Appwrite tools with your account…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"MCP connections"
		]
	},
	{
		"slug": "products/agent/memory",
		"title": "Memory",
		"description": "Learn how Appwrite Agent memory stores preferences, instructions, and facts across conversations.",
		"excerpt": "**Memory** lets you save durable notes the Agent can reuse across chats. Use it for standing preferences (response style), instructions (how to treat your projects), and facts (stable details about your stack). Manage memory under **Agent** > **Settings** > **Memory**. Categories | Category | Use for | |----------|---------| | Preference | How you want the Agent to respond (tone, format, verbosity) | | Instruction | Standing rules the Agent should follow when helping you | | Fact | Stable information…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"Memory"
		]
	},
	{
		"slug": "products/agent/models",
		"title": "Models",
		"description": "Learn how Appwrite Agent models work, including the default model and bring-your-own provider keys.",
		"excerpt": "**Models** control which large language model the Agent uses for a conversation. You can use Appwrite's default model options, or register your own provider credentials under **Agent** > **Settings** > **Models**. Default vs custom - **Default**: Use the models Appwrite provides in the Agent model picker without adding your own keys. - **Custom**: Add a model with your provider API key. The Agent calls that provider with your credentials for conversations that select it. Pick a model per conversation from…",
		"breadcrumbs": [
			"Agent",
			"Concepts",
			"Models"
		]
	},
	{
		"slug": "products/agent/quick-start",
		"title": "Start with Agent",
		"description": "Open the Appwrite Agent in the Console, ask your first question, and optionally connect MCP so it can take actions.",
		"excerpt": "You can start chatting with the Agent in under a minute. This quick start opens the Agent, sends a prompt with your current project context, and optionally connects Appwrite MCP for live actions. Open the Agent 1. Sign in to Appwrite Cloud. 2. Open any project (or stay on an organization page). 3. Click the **Agent** control in the Console header to open the right-hand panel. To use the fullscreen experience, go to in the Console. Guests see a sign-in…",
		"breadcrumbs": [
			"Agent",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/ai",
		"title": "Artificial intelligence",
		"description": "Learn how to implement machine learning models in your applications.",
		"excerpt": "Appwrite allows you to build powerful AI powered applications with ease. Leverage Appwrite's powerful functions architecture and start building the future. Explore capabilities Detailed explanations and deep dives into how you can implement different machine techniques in your Appwrite projects. Label and understand the contents of images Understand and generate human language Process and generate audio data Show me some code If you learn best from code examples, follow one of our tutorials. Computer vision Understand and label the contents…",
		"breadcrumbs": [
			"AI",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/ai/audio-processing",
		"title": "Audio processing",
		"description": "Learn about the basics of audio processing, the most popular tasks and applications of audio processing with ML and how we can leverage Appwrite to build audio processing enabled applications.",
		"excerpt": "Audio processing is a field of machine learning that deals with allowing machines to understand, analyze, and manipulate various audio signals. The applications are vast and varied, from speech recognition to music generation and all the way to noise reduction. it's used in many everyday tools you use including voice assistants, music streaming services and for noise reduction in online calls. Tutorials Recognize and transcribe spoken language into text Convert written text into spoken language",
		"breadcrumbs": [
			"AI",
			"Concepts",
			"Audio processing"
		]
	},
	{
		"slug": "products/ai/computer-vision",
		"title": "Computer vision",
		"description": "Learn about the basics of computer vision, the most popular tasks and applications of computer vision and how we can leverage Appwrite to build computer vision enabled applications.",
		"excerpt": "Computer vision is a field of AI aiming to provide machines with a comprehensive understanding of visual data from a variety of sources. Images, Videos, Point Clouds, X-Rays, and MRI's from medical devices can be processed with the goal of parsing relevant information for subsequent tasks. Tutorials Understand and label the contents of images Detect and label objects in images",
		"breadcrumbs": [
			"AI",
			"Concepts",
			"Computer vision"
		]
	},
	{
		"slug": "products/ai/integrations/anyscale",
		"title": "Integrating Anyscale",
		"description": "Learn how to integrate Anyscale into your Appwrite project.",
		"excerpt": "The Anyscale API is a powerful tool for generating text using the leading open-source models. This tutorial will guide you through setting up the Anyscale API and integrating it into your Appwrite project. You'll create a simple function that takes a text prompt and generates a completion using Mistral's Mixtral 8x7B model. Then, using Appwrite functions, you'll create a UI that allows users to input text and see the generated completion. Prerequisites - An Appwrite Project - An Anyscale API…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"Anyscale"
		]
	},
	{
		"slug": "products/ai/integrations/elevenlabs",
		"title": "Integrating ElevenLabs",
		"description": "Learn how to integrate ElevenLabs into your Appwrite project.",
		"excerpt": "ElevenLabs is an text to speech tool that can generate natural sounding audio from text. It's an excellent tool for dubbing content, creating audiobooks, or even for accessibility purposes. Integrating ElevenLabs into your Appwrite project is simple. This tutorial will guide you through the process of setting up the ElevenLabs API and integrating it into your Appwrite project. Prerequisites - An Appwrite Project - An ElevenLabs API Key Head to the Appwrite Console then click on **Functions** in the left…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"ElevenLabs"
		]
	},
	{
		"slug": "products/ai/integrations/fal-ai",
		"title": "Integrating fal.ai",
		"description": "Learn how to integrate fal.ai into your Appwrite project.",
		"excerpt": "fal.ai is an AI inference platform with popular models such as Stable Diffusion XL, ControlNet, Whisper available as ready-to-use APIs so that you can easily integrate them into your applications. This tutorial will guide you through the process of setting up the fal.ai API to generate an image using the SDXL model and integrating it into your Appwrite project. Prerequisites - An Appwrite Project - A fal.ai API Key Head to the Appwrite Console then click on **Functions** in the…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"fal.ai"
		]
	},
	{
		"slug": "products/ai/integrations/langchain",
		"title": "Integrating LangChain",
		"description": "Learn how to integrate LangChain into your Appwrite project.",
		"excerpt": "Prerequisites - An Appwrite project - An Appwrite table - An OpenAI API key - A Pinecone API key - A Pinecone index Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider. 1. After connecting to GitHub, under **Quick start**, select the **Node.js** starter template. 1. In the…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"LangChain"
		]
	},
	{
		"slug": "products/ai/integrations/lmnt",
		"title": "Integrating LMNT",
		"description": "Learn how to integrate LMNT into your Appwrite project.",
		"excerpt": "LMNT is a text-to-speech tool that can generate natural-sounding audio from text. It's an excellent tool for dubbing content, creating audiobooks, or even for accessibility. Integrating LMNT into your Appwrite project is simple. This tutorial will guide you through setting up the LMNT API and incorporating it into your Appwrite project. Prerequisites - An Appwrite Project - An Appwrite Bucket - An LMNT API Key Head to the Appwrite Console, click on **Functions** in the left sidebar and click the…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"LMNT"
		]
	},
	{
		"slug": "products/ai/integrations/openai",
		"title": "Integrating OpenAI",
		"description": "Learn how to integrate OpenAI into your Appwrite project.",
		"excerpt": "The OpenAI API is a powerful tool that can be used to generate text, images, and more. This tutorial will guide you through the process of setting up the OpenAI API and integrating it into your Appwrite project. We'll create a simple function that takes a text prompt and generates a completion using OpenAI's GPT-3 model. Then, using Appwrite functions we'll create a user interface that allows users to input text and see the generated completion. Prerequisites - An Appwrite…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"OpenAI"
		]
	},
	{
		"slug": "products/ai/integrations/perplexity",
		"title": "Integrating Perplexity",
		"description": "Learn how to integrate the Perplexity API into your Appwrite project.",
		"excerpt": "Integrating Perplexity into your Appwrite project is simple. This tutorial will guide you through the process of setting up the Perplexity API and integrating it into your Appwrite project. Prerequisites - An Appwrite Project - A Perplexity API Key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider.…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"Perplexity"
		]
	},
	{
		"slug": "products/ai/integrations/pinecone",
		"title": "Integrating Pinecone",
		"description": "Learn how to integrate Pinecone into your Appwrite project.",
		"excerpt": "Pinecone is a vector database that allows you to store and query high-dimensional vectors. It is a great tool for building recommendation systems, search engines, and more. In this tutorial, we'll show you how to integrate Pinecone into your Appwrite project. Inside an Appwrite Function, we'll create a method to that indexes an Appwrite table into Pinecone. We'll also create a method to query the Pinecone index and return the results. Prerequisites - An Appwrite project - An Appwrite table…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"Pinecone"
		]
	},
	{
		"slug": "products/ai/integrations/replicate",
		"title": "Integrating Replicate",
		"description": "Learn how to integrate Replicate into your Appwrite project.",
		"excerpt": "Integrating Replicate into your Appwrite project is simple. This tutorial will guide you through the process of setting up the Replicate API and integrating it into your Appwrite project. Prerequisites - An Appwrite Project - A Replicate API Key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider.…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"Replicate"
		]
	},
	{
		"slug": "products/ai/integrations/tensorflow",
		"title": "Integrating TensorFlow with Appwrite",
		"description": "Learn how to integrate TensorFlow into your Appwrite project.",
		"excerpt": "The TensorFlow API allows you to create powerful machine learning models for various tasks. This tutorial will guide you through the process of setting up a TensorFlow-based text generation model and integrating it into your Appwrite project. We'll create a function that uses TensorFlow to generate text completions based on a given prompt. Using Appwrite functions, we'll build a user interface that allows users to input text and see the generated completion. Prerequisites - An Appwrite Project - Basic knowledge…",
		"breadcrumbs": [
			"AI",
			"integrations",
			"Integrating TensorFlow with Appwrite"
		]
	},
	{
		"slug": "products/ai/integrations/togetherai",
		"title": "Integrating Together AI",
		"description": "Learn how to integrate Together AI into your Appwrite project.",
		"excerpt": "Together AI is an AI as a Service provider that's powered by an industry-leading inference engine providing fast and cheap inference. The platform can generate text and images using leading open-source models such as LLaMA 3 and Stable Diffusion. Integrating Together AI into your Appwrite project is simple. This tutorial will guide you through setting up the Together AI API and integrating it into your Appwrite project. Prerequisites - An Appwrite Project - An Appwrite Bucket - A Together AI…",
		"breadcrumbs": [
			"AI",
			"Integrations",
			"Together AI"
		]
	},
	{
		"slug": "products/ai/natural-language",
		"title": "Natural language processing",
		"description": "Learn about the basics of natural language processing, the most popular tasks and applications of natural language processing and how we can leverage Appwrite to build natural language processing enabled applications.",
		"excerpt": "Natural language processing (NLP) is a fascinating intersection of computer science, artificial intelligence, and linguistics. It's about teaching computers to understand, interpret, and generate human language (Jones et al., 2018). Translating languages, answering questions, or helping find information, NLP is at the heart of many technologies we use every day. Tutorials Generate text from a prompt Translate text from one language to another",
		"breadcrumbs": [
			"AI",
			"Concepts",
			"Natural language processing"
		]
	},
	{
		"slug": "products/ai/tutorials/image-classification",
		"title": "Image classification with Hugging Face",
		"description": "Build image classification powered apps with Appwrite and learn how to use Hugging Face's image classification models.",
		"excerpt": "Learn to setup an Appwrite Function utilizing image classification with Hugging Face. Prerequisites - An Appwrite project - A Hugging Face API key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider. 1. After connecting to GitHub, under **Quick start**, select the **Node.js** starter template. 1. In the…",
		"breadcrumbs": [
			"AI",
			"Computer vision",
			"Image classification"
		]
	},
	{
		"slug": "products/ai/tutorials/language-translation",
		"title": "Language translation with Hugging Face",
		"description": "Implement language translation into your app with Appwrite and Hugging Face.",
		"excerpt": "Learn to setup an Appwrite Function utilizing language translation with Hugging Face. Prerequisites - An Appwrite project - A Hugging Face API key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider. 1. After connecting to GitHub, under **Quick start**, select the **Node.js** starter template. 1. In the…",
		"breadcrumbs": [
			"AI",
			"Natural language processing",
			"Language translation"
		]
	},
	{
		"slug": "products/ai/tutorials/music-generation",
		"title": "Music generation with Hugging Face",
		"description": "Learn how to integrate Hugging Face into your Appwrite project for music generation.",
		"excerpt": "Hugging Face is a platform that hosts ML models for all types of applications, including music generation. This example uses the \"facebook/musicgen-large\" from Hugging Face to convert text to music, but the same concept can be applied to other models. Prerequisites - An Appwrite project - A Hugging Face API keys Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**.…",
		"breadcrumbs": [
			"AI",
			"Audio processing",
			"Music generation"
		]
	},
	{
		"slug": "products/ai/tutorials/object-detection",
		"title": "Object detection with Hugging Face",
		"description": "Build object recognition powered apps with Appwrite and learn how to use Hugging Face's image classification models.",
		"excerpt": "Learn to setup an Appwrite Function utilizing object detection with Hugging Face. Prerequisites - An Appwrite project - A Hugging Face API key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider. 1. After connecting to GitHub, under **Quick start**, select the **Node.js** starter template. 1. In the…",
		"breadcrumbs": [
			"AI",
			"Computer vision",
			"Object detection"
		]
	},
	{
		"slug": "products/ai/tutorials/speech-recognition",
		"title": "Speech recognition with Hugging Face",
		"description": "Implement speech recognition into your app with Appwrite and Hugging Face.",
		"excerpt": "Hugging Face is a platform that hosts ML models for all types of applications, including for speech recognition. This example uses the from Hugging Face to perform speech recognition. Prerequisites - An Appwrite project - A Hugging Face API key Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your…",
		"breadcrumbs": [
			"AI",
			"Audio processing",
			"Speech recognition"
		]
	},
	{
		"slug": "products/ai/tutorials/text-generation",
		"title": "Text generation with Hugging Face",
		"description": "Implement text generation into your app with Appwrite and Hugging Face.",
		"excerpt": "Learn to setup an Appwrite Function utilizing text generation with Hugging Face. Prerequisites - An Appwrite project - A Hugging Face API keys Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite Console's sidebar, click **Functions**. 1. Click **Create function**. 1. Under **Connect Git repository**, select your provider. 1. After connecting to GitHub, under **Quick start**, select the **Node.js** starter template. 1. In the…",
		"breadcrumbs": [
			"AI",
			"Natural language processing",
			"Text generation"
		]
	},
	{
		"slug": "products/ai/tutorials/text-to-speech",
		"title": "Text to Speech with Hugging Face",
		"description": "Learn how to integrate Hugging Face into your Appwrite project for text to speech processing.",
		"excerpt": "Hugging Face is a platform that hosts ML models for all types of applications, including text to speech. This example uses the \"ESPnet2 TTS pretrained model\" from Hugging Face to convert text to speech, but the same concept can be applied to other models. Prerequisites - An Appwrite project - A Hugging Face API keys Head to the Appwrite Console then click on **Functions** in the left sidebar and then click on the **Create Function** button. 1. In the Appwrite…",
		"breadcrumbs": [
			"AI",
			"Audio processing",
			"Text to speech"
		]
	},
	{
		"slug": "products/ai/video-processing",
		"title": "Video processing",
		"description": "Learn about the basics of video processing, the most popular tasks and applications of video processing with ML and how we can leverage Appwrite to build video processing enabled applications.",
		"excerpt": "",
		"breadcrumbs": ["AI", "Video processing"]
	},
	{
		"slug": "products/auth",
		"title": "Authentication",
		"description": "Explore Appwrite's powerful authentication solutions. Learn how to implement secure user authentication, manage user identities, and enhance your application's security.\"",
		"excerpt": "Appwrite **Authentication** delivers more than just user sign up and log in. Authentication makes it easy to build secure and robust authentication with support for many different authentication methods. Add authentication to your app in 5 minutes Authentication methods Appwrite supports a variety of authentication methods to fit every app and every niche. Explore Appwrite's authentication flows. Email and password login with just a few lines of code secured with state of the art Argon2 hashing. Log in users without…",
		"breadcrumbs": [
			"Auth",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/auth/accounts",
		"title": "Accounts",
		"description": "Unlock advanced user management - Appwrite's Account API for seamless signups, authentication, and dynamic permissions.",
		"excerpt": "Appwrite Account API is used for user signup and login in client applications. Users can be organized into teams and be given labels, so they can be given different permissions and access different resources. Signup and login You can signup and login a user with an account create through email password, phone (SMS), Anonymous, magic URL, and OAuth 2 authentication. To control which email addresses can sign up, enable email policies to block free, aliased, or disposable email providers. Permissions…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Accounts"
		]
	},
	{
		"slug": "products/auth/anonymous",
		"title": "Anonymous login",
		"description": "Manage user identities and profiles effectively with Appwrite. Dive into user management features, account settings, and user data customization.",
		"excerpt": "Anonymous sessions allow you to implement **guest** users. Guest users let you store user information like items in their cart or theme preferences before they create an account. This reduces the friction for your users to get started with your app. **If a user later creates an account**, their information will be inherited by the newly created account. Create anonymous session Create an anonymous session with Create Anonymous Session method. Attaching an account Anonymous users cannot sign back in. If…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Anonymous login"
		]
	},
	{
		"slug": "products/auth/checking-auth-status",
		"title": "Checking auth status",
		"description": "Learn how to check a user's authentication status in your Appwrite application and handle authentication flow appropriately.",
		"excerpt": "One of the first things your application needs to do when starting up is to check if the user is authenticated. This is an important step in creating a great user experience, as it determines whether to show login screens or protected content. Check auth with The recommended approach for checking authentication status is to use the method when your application starts: Missing scope error When a user is not authenticated and you call , you might see an error…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Auth status check"
		]
	},
	{
		"slug": "products/auth/custom-token",
		"title": "Custom token login",
		"description": "Limitless authentication flow in Appwrite. Find out how to implement custom authentication flow or connect to 3rd party authentication providers.",
		"excerpt": "Tokens are short-lived secrets created by an Appwrite Server SDK that can be exchanged for session by a Client SDK to log in users. You may already be familiar with tokens if you checked out Magic URL login, Email OTP login or Phone (SMS) login. Custom token allows you to use Server SDK to generate tokens for your own implementations. This allows you to code your own authentication methods using Appwrite Functions or your own backend. You could implement username…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Custom token login"
		]
	},
	{
		"slug": "products/auth/email-otp",
		"title": "Email OTP",
		"description": "Seamless sign in with Email OTP authentication in Appwrite. Learn how to provide simple and secure passwordless user accounts.",
		"excerpt": "Email OTP (one-time password) authentication lets users create accounts using their email address and log in using a 6 digit code delivered to their email inbox. This method is similar to Magic URL login, but can provide better user experience in some scenarios. Email OTP sends an email with a 6 digit code that user needs to enter into the app, while Magic URL delivers a clickable button or a link to user's inbox. Both allow passwordless login flows with…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Email OTP login"
		]
	},
	{
		"slug": "products/auth/email-password",
		"title": "Email and password login",
		"description": "Implement email and password authentication with Appwrite. Securely register and authenticate users in your applications using Appwrite's robust email-based authentication system.",
		"excerpt": "Email and password login is the most commonly used authentication method. Appwrite Authentication promotes a safer internet by providing secure APIs and promoting better password choices to end users. Appwrite supports added security features like password strength requirements, blocking personal info in passwords, password dictionary, and password history to help users choose good passwords. You can also restrict which addresses can sign up by enabling email policies to block free, aliased, or disposable email providers. Signup You can use the…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Email and password login"
		]
	},
	{
		"slug": "products/auth/email-policies",
		"title": "Email policies",
		"description": "Control which email addresses can sign up for your Appwrite project by blocking free, aliased, or disposable email providers from the Console or Project API.",
		"excerpt": "Email policies let you restrict which email addresses can be used for user creation and email updates on a project. Each policy is an independent toggle that runs at sign-up time and when an existing user changes their email. Policies do not affect session creation, so existing users can still sign in if their address would not pass the current policy. Three policies are available: | Policy | Blocks | Example | | --- | --- | --- | |…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Email policies"
		]
	},
	{
		"slug": "products/auth/identities",
		"title": "Identities",
		"description": "Handle multiple authentication methods per user through a unified system that maintains consistent identity across providers.",
		"excerpt": "Identities enable linking multiple authentication methods to a single user account. This allows users to access a unified account through various OAuth2 providers. An identity is another way to refer to a user account. A single user can have multiple identities, each corresponding to different authentication methods. Currently, identities are primarily used with OAuth2 providers. When a user logs in via an OAuth2 provider, an identity is created and linked to their Appwrite account. This system enables: - Connecting multiple…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Identities"
		]
	},
	{
		"slug": "products/auth/impersonation",
		"title": "User impersonation",
		"description": "Let trusted operators act as another user in Appwrite Auth for support, QA, and troubleshooting while keeping the flow controlled and auditable.",
		"excerpt": "User impersonation lets a trusted operator temporarily act as another user in the same Appwrite project, without sharing credentials. The operator signs in as themselves first, then sets a single impersonation target on the client. Appwrite resolves that target and executes requests using their permissions. This is especially useful when you need to: - Reproduce a bug that only appears for a specific user - Verify permissions and feature access from the user's point of view - Help customer support…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Impersonation"
		]
	},
	{
		"slug": "products/auth/jwt",
		"title": "JWT login",
		"description": "Integrate Appwrite's authentication into your server-side applications. Explore server integrations, best practices, and security considerations for seamless authentication.",
		"excerpt": "You can extend Appwrite's APIs by building backend apps using Server SDKs. To secure your backend app's APIs, client apps must prove their identity against your backend app before accessing sensitive information. You can secure these APIs and enforce access permissions in your backend app by using JWT authentication. If you are already authenticated on your client-side app and need your backend app to **act on behalf of the user**, this guide will walk you through the process. Proof of…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"JWT login"
		]
	},
	{
		"slug": "products/auth/labels",
		"title": "Labels",
		"description": "Organize your users and grant custom permissions for subscriptions or VIP users with labels.",
		"excerpt": "Labels are a good way to categorize a user to grant them access to resources. For example, a label can be added to a user once they've purchased a subscription. This would correspond with the permissions below. | Description | Code Snippet | | ------------------------------------------- | ------------------------------------------- | | Read | | | Update | | | Delete | | | Create | | Learn more about permissions",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Labels"
		]
	},
	{
		"slug": "products/auth/magic-url",
		"title": "Magic URL login",
		"description": "Add magic URL to your authentication in Appwrite. Explore the convenience of passwordless login and email-based authentication using magic links.",
		"excerpt": "Magic URL is a password-less way to authenticate users. When a user logs in by providing their email, they will receive an email with a \"magic\" link that contains a secret used to log in the user. The user can simply click the link to be logged in. Send email Initialize the log in process with the Create Magic URL Token route. If the email has never been used, a **new account is created** using the provided , then the…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Magic URL login"
		]
	},
	{
		"slug": "products/auth/message-templates",
		"title": "Message templates",
		"description": "Communicate using your brand and voice by customizing email and SMS message templates, localized to your user's language.",
		"excerpt": "Appwrite uses emails to communicate with users to perform authentication and verification actions. Emails can be customized to fit your app's design and voice. Each Appwrite project can have its own set of unique templates. Templates also support localization, so every template can be written in multiple languages and served depending on the configured locale. Custom SMTP server Appwrite Cloud has a default SMTP server to get you started. This SMTP server sends generic emails and doesn't allow customizing SMTP…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Message templates"
		]
	},
	{
		"slug": "products/auth/mfa",
		"title": "Multi-factor authentication",
		"description": "Add multiple layers of authentication to your applications powered by Appwrite Authentication.",
		"excerpt": "Multi-factor authentication (MFA) greatly increases the security of your apps by adding additional layers of protection. When MFA is enabled, a malicious actor needs to compromise multiple authentication factors to gain unauthorized access. Appwrite Authentication lets you easily implement MFA in your apps, letting you build more securely and quickly. This page covers MFA for your app's end-users. If you are looking for MFA on your Appwrite Console account, please refer to the Console MFA page. Appwrite currently allows two…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Multi-factor authentication"
		]
	},
	{
		"slug": "products/auth/multi-tenancy",
		"title": "Multi-tenancy with Teams",
		"description": "Learn how to implement multi-tenancy in your applications using Appwrite Teams.",
		"excerpt": "Appwrite Teams provides an effective way to implement multi-tenancy in your applications. Create a team for each tenant to handle multi-tenant apps with built-in data isolation. Learn more about Teams What is multi-tenancy? Multi-tenancy is a design pattern where a single instance of software serves multiple user groups (tenants). With Appwrite Teams, you can: - Create a team for each tenant in your application - Control access to resources using team-based permissions - Define different roles within each tenant -…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Multi-tenancy"
		]
	},
	{
		"slug": "products/auth/oauth-server",
		"title": "OAuth2 server",
		"description": "Turn your Appwrite project into an OAuth 2.1 and OpenID Connect (OIDC) provider so third-party apps can sign in with your product.",
		"excerpt": "Your Appwrite project can act as an **OAuth 2.1 and OpenID Connect provider** (OIDC provider). When you enable the OAuth2 server, third-party apps register as clients, send your users to a consent screen you host, and receive tokens your project issues. Your project becomes an identity provider that any standards-compliant OAuth or OIDC library can integrate with: the same way apps offer \"Sign in with Google\" or \"Sign in with GitHub\", integrators can offer **Sign in with your product**. How…",
		"breadcrumbs": ["Auth", "OAuth2 server"]
	},
	{
		"slug": "products/auth/oauth-server/authorization",
		"title": "Authorization",
		"description": "How clients request authorization and how to host a consent screen for your Appwrite OAuth2 server.",
		"excerpt": "Authorization is the step where a user allows a client to act on their behalf. Appwrite's OAuth2 server uses the authorization code flow. Public clients protect the flow with PKCE. Confidential clients authenticate with a client secret and can also use PKCE when your project requires it. The authorization code flow 1. The client sends the user to the **authorization endpoint** with its client ID, a registered redirect URI, , and the scopes it wants. 2. Appwrite checks whether the…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"Authorization"
		]
	},
	{
		"slug": "products/auth/oauth-server/clients",
		"title": "Clients",
		"description": "Register confidential and public OAuth clients against your Appwrite project's OAuth2 server and manage them from your own developer platform.",
		"excerpt": "A **client** is a third-party app that authenticates users through your project's OAuth2 server. Each client registers the redirect URIs it is allowed to return to and the post-logout redirect URIs it can end sessions at, sets its type, and chooses whether the device flow is enabled. Its other attributes serve two surfaces: branding like the name, logo, and tagline can appear on your consent screen, while attributes like tags, images, and the privacy policy URL are for your project's…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"Clients"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-1",
		"title": "Protect your API with custom scopes",
		"description": "Define custom scopes on your Appwrite OAuth2 server, request them from a client, and enforce them on your own API.",
		"excerpt": "The Sign in with your product guide gave Vantage the user's identity. Identity alone only answers who the user is. To let an integration read the user's data from your product, you need custom scopes: permissions you define, users approve, and your API enforces. This tutorial continues with the same two apps. TaskFlow gains a task API that checks scopes, and Vantage asks for permission to read the user's tasks and shows them on its dashboard. What you will build…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Protect your API with custom scopes"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-2",
		"title": "Define the scopes",
		"description": "Add tasks.read and tasks.write to your OAuth2 server's scopes.",
		"excerpt": "Scopes have to be defined on the OAuth2 server before a client can request them. Requesting a scope you have not defined fails the authorization request with . Add the scopes In the Console, open **Auth**, select the **OAuth2 server** tab, and find the **Scopes** field on the **Integration** card. Add two scopes and click **Update**: - grants read access to the user's tasks. - grants permission to create and update tasks. The , , , and scopes stay locked…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Define the scopes"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-3",
		"title": "Request the scopes",
		"description": "Ask for the task scopes during authorization and let the user grant each one individually.",
		"excerpt": "A client receives a scope by asking for it during authorization. Vantage requests both task scopes, and TaskFlow's consent screen lets the user decide which of them to grant. Add the scopes to the request In the consumer, extend the scope list in : already passes as the parameter, so nothing else changes on the consumer. The OAuth2 server carries the requested scopes into the grant and shows them to the user. Label the scopes on the consent screen TaskFlow's…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Request the scopes"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-4",
		"title": "Validate access tokens",
		"description": "Verify incoming access tokens against your project's JWKS and read their scopes.",
		"excerpt": "TaskFlow's API is about to accept access tokens from the outside world, so it first needs a way to tell a token it issued from one somebody made up. Access tokens from your OAuth2 server are RS256-signed JWTs, and the matching public keys are published at your project's JWKS endpoint. That means TaskFlow can verify tokens locally, with no call back to the OAuth2 server on each request. Install jose jose handles the JWT verification and the JWKS fetching. Install…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Validate access tokens"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-5",
		"title": "Protect the API route",
		"description": "Serve tasks only to tokens that carry tasks.read.",
		"excerpt": "With the guard in place, TaskFlow can expose its task API. This is where the scope stops being a label and becomes a rule. The task data Create with an in-memory store, keyed by user ID. It stands in for your product's database so the tutorial stays focused on the OAuth side: The guarded route Create . TanStack Start serves the and handlers at : Each handler applies the same two checks, in order: 1. **Authentication**: is the token real?…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Protect the API route"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-6",
		"title": "Call the API from Vantage",
		"description": "Read tasks with the granted access token and add a task composer that lives or dies by its scope.",
		"excerpt": "Vantage already holds the access token in its session after the token exchange. Reading tasks is one authenticated fetch away, and a small composer will exercise the write path. Point Vantage at the API Add TaskFlow's API base to : The API client Create . Every request carries the access token as a Bearer header, and TaskFlow's guard does the rest: does not check any scope itself. Vantage cannot know what the user granted until it tries; the refusal comes…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Call the API from Vantage"
		]
	},
	{
		"slug": "products/auth/oauth-server/custom-scopes/step-7",
		"title": "Run the flow",
		"description": "Grant the read scope, watch a write get refused, then grant the write scope and watch it succeed.",
		"excerpt": "Everything is wired up. Run the flow twice: once granting only read access, and once granting the write too. The same button on the dashboard behaves differently each time, and the only thing that changed is what the user agreed to. Start both apps In two terminals: Grant read, withhold write Open and click **Sign in with TaskFlow**. On the consent screen, switch **Create and update your tasks** off and authorize. The OAuth2 server narrows the grant to what was…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"custom scopes",
			"Run the flow"
		]
	},
	{
		"slug": "products/auth/oauth-server/device-flow",
		"title": "Device flow",
		"description": "Authorize TVs, CLIs, and other input-constrained devices against your Appwrite OAuth2 server with the device authorization grant.",
		"excerpt": "The device authorization grant (RFC 8628) lets a client request access even when it cannot open a browser or accept a callback. A TV app, command-line tool, or hardware device shows the user a code, and the user completes authorization on a phone or computer. This flow involves two applications: - The **device client** is the third-party application requesting access. It communicates with Appwrite over HTTP. - The **verification page** belongs to your project. You build this page with an…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"Device flow"
		]
	},
	{
		"slug": "products/auth/oauth-server/quick-start",
		"title": "OAuth2 server quick start",
		"description": "Enable Appwrite's OAuth2 server, register a client, and run your first authorization code sign-in end to end.",
		"excerpt": "This guide turns your project into an OAuth2 provider and runs one sign-in through it. By the end you will have an enabled server, a registered client, and an access token issued by your project. The examples follow two apps, the same pair the tutorials build out in full: - **TaskFlow** (): your product and the **OAuth2 provider**, also called the authorization server. It authenticates users, presents the consent screen, and issues tokens. - **Vantage** (): the third-party **consumer**, called…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"OAuth2 server quick start"
		]
	},
	{
		"slug": "products/auth/oauth-server/scopes",
		"title": "Scopes",
		"description": "The built-in OpenID Connect scopes and the custom scopes clients can request from your Appwrite OAuth2 server.",
		"excerpt": "Scopes are the permissions a client asks for during authorization. The user sees the requested scopes on the consent screen and approves or declines them. The access token the server issues carries the scopes that were granted. Built-in scopes Four OpenID Connect scopes are always available and cannot be removed: | Scope | Grants access to | | --- | --- | | | The user's subject identifier. Required for OpenID Connect and to receive an ID token. | |…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"Scopes"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-1",
		"title": "Sign in with your product",
		"description": "Build an end-to-end \"Sign in with your product\" experience against your Appwrite OAuth2 server, from the consent screen to the token exchange.",
		"excerpt": "Once your project's OAuth2 server is enabled, other apps can offer \"Sign in with your product\". This tutorial builds that experience end to end with two small TanStack Start apps, so you can see every part of the flow. What you will build Two apps play the two sides of an OAuth integration: - **TaskFlow**, the provider. It owns the Appwrite project with the OAuth2 server enabled, and it hosts the **consent screen** where its users approve access. - **Vantage**,…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Sign in with your product"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-2",
		"title": "Enable the OAuth2 server",
		"description": "Turn on the OAuth2 server on your Appwrite project and register the client app.",
		"excerpt": "Before writing any code, turn TaskFlow's project into an OAuth provider and register Vantage as a client. Enable the server In the Console, open **Auth**, select the **OAuth2 server** tab, and turn on **Enable OAuth2 server**. Set the **Authorization URL** to where TaskFlow will host its consent screen. In this tutorial that is . This is where the OAuth2 server sends users to sign in and approve. Leave the scopes at their defaults. , , and are always included, which…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Enable the OAuth2 server"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-3",
		"title": "Create the apps",
		"description": "Scaffold the two TanStack Start apps and wire up their environment.",
		"excerpt": "Both sides are TanStack Start apps. Scaffold them in a single folder. Scaffold the projects Create the consumer (Vantage) and the provider (TaskFlow): This gives you two full TanStack Start apps with server functions, file-based routing, and Tailwind CSS already set up. Give each a fixed port so the redirect URIs stay stable. In each app's , set the dev script: Configure the environment The apps read the OAuth values from environment variables. Add a to each. Vantage needs the…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Create the apps"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-4",
		"title": "Add Sign in with your product",
		"description": "Build the consumer's sign-in button and the redirect that starts the OAuth flow.",
		"excerpt": "Start with Vantage, the consumer. It needs a helper for the OAuth values, a landing page with a **Sign in with TaskFlow** button, and a route that kicks off the flow. The OAuth helper Create . It reads the config and builds the authorization URL. Import at the top: it makes the build fail if this module is ever pulled into the browser bundle, which keeps the client secret server-side. The start route Clicking the button navigates to . Its…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Add Sign in with your product"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-5",
		"title": "Build the consent screen",
		"description": "Host the consent screen where your users sign in and approve access.",
		"excerpt": "The consent screen is the page TaskFlow hosts at its authorization URL. When the OAuth2 server sends a user here, the screen signs them in, shows what the client is asking for, and records their decision. All of it runs on TaskFlow's server, carrying the user's Appwrite session. Types for the consent card Create . It holds only client-safe values, so the browser can import it: The server helpers Create . Every function here calls the OAuth2 server on behalf…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Build the consent screen"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-6",
		"title": "Exchange the code for tokens",
		"description": "Handle the callback, exchange the authorization code for tokens on the server, and sign the user in.",
		"excerpt": "The OAuth2 server redirects back to Vantage's redirect URI with a and the . Vantage exchanges that code for tokens on its server, reads the user's profile, and signs them in. Add the token functions Extend with the exchange and userinfo calls. The exchange authenticates with the client secret using HTTP Basic auth, which is why it must run on the server. Handle the callback Create . Its loader runs on the server: it checks the against the session, exchanges…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Exchange the code for tokens"
		]
	},
	{
		"slug": "products/auth/oauth-server/sign-in-with-your-product/step-7",
		"title": "Run the flow",
		"description": "Start both apps and sign in with your product end to end.",
		"excerpt": "Everything is in place. Run both apps and sign in. Start both apps In two terminals: Vantage is at and TaskFlow's consent screen at . Sign in Open and click **Sign in with TaskFlow**. You will: 1. Land on TaskFlow's consent screen and sign in with a TaskFlow user. 2. See exactly what Vantage is requesting, and approve it. 3. Return to Vantage, signed in, with your TaskFlow name and email on the dashboard. That round trip is a complete…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"sign in with your product",
			"Run the flow"
		]
	},
	{
		"slug": "products/auth/oauth-server/tokens",
		"title": "Tokens",
		"description": "Access, refresh, and ID tokens issued by Appwrite's OAuth2 server, their lifetimes, and how to validate, refresh, introspect, revoke, and end sessions.",
		"excerpt": "When a client redeems an authorization code, the OAuth2 server issues an access token and refresh token. It also issues an ID token when the scope was granted. This page covers what each token does and how clients and resource servers validate, refresh, introspect, revoke, and end sessions. The three tokens - **Access token.** A signed JWT that a client presents to a resource server when it calls an API on the user's behalf. It contains the authorization information the…",
		"breadcrumbs": [
			"Auth",
			"OAuth2 server",
			"Tokens"
		]
	},
	{
		"slug": "products/auth/oauth2",
		"title": "OAuth 2 login",
		"description": "Integrate OAuth2 authentication seamlessly with Appwrite. Learn how to connect your application with third-party OAuth2 providers for secure user login and access.",
		"excerpt": "OAuth authentication allows users to log in using accounts from other popular services. This can be convenient for users because they can start using your app without creating a new account. It can also be more secure, because the user has one less password that could become vulnerable. When using OAuth to authenticate, the authentication request is initiated from the client application. The user is then redirected to an OAuth 2 provider to complete the authentication step, and finally, the…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"OAuth2 login"
		]
	},
	{
		"slug": "products/auth/phone-sms",
		"title": "Phone (SMS) login",
		"description": "Enhance security with SMS and phone authentication in Appwrite. Add multi-factor authentication via SMS, verify phone numbers, and protect user accounts.",
		"excerpt": "OTPs are billed per message, with rates varying by country. See the phone OTP rates for more information. Phone authentication lets users create accounts using their phone numbers and log in through SMS messages. Create and use mock phone numbers to initiate a phone authentication process without an actual phone number. Send SMS message Phone authentication is done using a two-step authentication process. When using phone authentication, the authentication request is initiated from the client application and an SMS message…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Phone (SMS) login"
		]
	},
	{
		"slug": "products/auth/preferences",
		"title": "Preferences",
		"description": "Store and manage user preferences in Appwrite using Account API and Teams API for individual and shared settings.",
		"excerpt": "Preferences allow you to store settings like theme choice, language selection, or notification preferences that are specific to individual users or shared across teams. User preferences You can store user preferences on a user's account using Appwrite's Update Preferences endpoint. Preferences are stored as a key-value JSON object. The maximum allowed size for preferences is 64kB, and an error will be thrown if this limit is exceeded. Update user preferences Use the method to store user preferences as a JSON…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Preferences"
		]
	},
	{
		"slug": "products/auth/presences",
		"title": "Presences",
		"description": "Track which signed-in users are active right now and broadcast their status in realtime with the Appwrite Presences API.",
		"excerpt": "Authentication tells you **who a user is**. Presences tell you **whether they are around right now**. The Appwrite **Presences API** records a live status for each signed-in user and broadcasts every change over Realtime, so your app can render online indicators, \"viewing this page\" cues, typing signals, and collaboration banners without writing any socket plumbing. A presence is a short-lived record attached to a user. It carries a , a string, an optional JSON object for richer context, and an…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Presences"
		]
	},
	{
		"slug": "products/auth/quick-start",
		"title": "Start with Authentication",
		"description": "Effortlessly add authentication to your apps - simple signup & login in just minutes with Appwrite Authentication",
		"excerpt": "You can get up and running with Appwrite Authentication in minutes. You can add basic email and password authentication to your app with just a few lines of code. You can use the Appwrite Client SDKs to create an account using email and password. After you've created your account, users can be logged in using the Create Email Session method. After logging in, you can check the authentication state of the user. Appwrite's SDKs are stateless, so you need to…",
		"breadcrumbs": [
			"Auth",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/auth/react",
		"title": "React library",
		"description": "Add authentication to React apps with Appwrite's official React library. Supports client-side React, Next.js, and TanStack Start with a single provider and a small set of hooks.",
		"excerpt": "The Appwrite React library is a thin layer over the Web SDK that exposes a provider and a small set of hooks for authentication operations and current user state. It works in both client-rendered React apps and server-rendered apps on Next.js and TanStack Start. Why use it - **SSR auth without boilerplate.** Drop in one handler route per framework and skip the days normally spent writing cookie logic, session sync, and server/client hydration. - **Consistent user state across server and…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"React library"
		]
	},
	{
		"slug": "products/auth/security",
		"title": "Security",
		"description": "Prioritize security in your applications with Appwrite. Discover best practices, security features, and guidelines to protect user data and ensure authentication integrity.",
		"excerpt": "Appwrite provides many security features to keep both your Appwrite project and your user's information secure.",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Security"
		]
	},
	{
		"slug": "products/auth/server-side-rendering",
		"title": "SSR login",
		"description": "How to implement SSR authentication with Appwrite",
		"excerpt": "Server-side rendering (SSR) is fully supported with Appwrite. You can use Appwrite with many SSR-oriented frameworks, such as Next.js, SvelteKit, Nuxt, Gatsby, Remix, and more. SSR is a technique where the server renders a web page and sending the fully rendered page to the client's web browser. This is in contrast to client-side rendering (CSR), where the client's web browser renders the page using JavaScript. This guide will walk you through the process of implementing an SSR application with Appwrite.…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"SSR login"
		]
	},
	{
		"slug": "products/auth/team-invites",
		"title": "Team invites",
		"description": "Learn how to manage team invites in Appwrite. Implement both client-side email invites and server-side custom flows for team memberships.",
		"excerpt": "Appwrite provides two approaches for adding members to teams: client-side email invites and server-side custom flows. Each approach serves different use cases and offers unique benefits. Invite client-side Client-side email invites are perfect for implementing user-to-user invitations, allowing your users to invite others to join their teams, organizations, or shared resources. When creating a membership, Appwrite: 1. Creates a new user account if one doesn't exist for the email address 2. Sends an automated email invitation to the user 3.…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"Team invites"
		]
	},
	{
		"slug": "products/auth/teams",
		"title": "Teams",
		"description": "Master team management in the Appwrite Cloud. Explore team-related functions, permissions, and more.",
		"excerpt": "Teams are a good way to allow users to share access to resources. For example, in a todo app, a user can create a team for one of their todo lists and invite another user to the team to grant the other user access. You can further give special rights to parts of a team using team roles. The invited user can accept the invitation to gain access. If the user's ever removed from the team, they'll lose access again.…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Teams"
		]
	},
	{
		"slug": "products/auth/tokens",
		"title": "Tokens",
		"description": "What are tokens and how to use them in Appwrite",
		"excerpt": "Tokens are short-lived secrets created by an Appwrite Server SDK that can be exchanged for session by a Client SDK to log in users. Some auth methods like Magic URL login, Email OTP login, or Phone (SMS) login already generate tokens. You can also create custom tokens using the Create token endpoint of the Users API. This can be used to implement **custom authentication flows**. Tokens are created with the following properties: | Property | Type | Description | |…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Tokens"
		]
	},
	{
		"slug": "products/auth/users",
		"title": "Manage users",
		"description": "Manage user identities and profiles effectively with Appwrite. Dive into user management features, account settings, and user data customization",
		"excerpt": "Appwrite Users API is used for managing users in server applications. Users API can only be used with an API key and the Server SDK to manage all users. If you need to act on behalf of users through an Appwrite Function or your own backend, use JWT login. Need to troubleshoot from a user's point of view? Use user impersonation to let trusted operators temporarily act as another user without sharing credentials. The users API can be used to…",
		"breadcrumbs": [
			"Auth",
			"Concepts",
			"Users"
		]
	},
	{
		"slug": "products/auth/verify-user",
		"title": "Verify user",
		"description": "Learn about Appwrite's email and phone verification system, including verification flows and role-based access control.",
		"excerpt": "User verification in Appwrite allows you to verify user email addresses and phone numbers. Users don't need to be verified to log in, but you can restrict resource access to verified users only using permissions. Verify email To verify a user's email, first ensure the user is logged in so that the verification email can be sent to the user who created the account. Then, send the verification email specifying a redirect URL. The verification secrets will be appended as…",
		"breadcrumbs": [
			"Auth",
			"Guides",
			"User verification"
		]
	},
	{
		"slug": "products/avatars",
		"title": "Avatars",
		"description": "Generate avatars, icons, and images for your applications. Use Appwrite Avatars to create user initials, QR codes, country flags, browser icons, and more.",
		"excerpt": "Appwrite **Avatars** provides a comprehensive set of utilities for generating and manipulating images, icons, and avatars for your applications. The Avatars service helps you complete everyday tasks related to app images, icons, and avatars without managing complex image processing infrastructure. All Avatars endpoints support image transformations including resizing, cropping, and quality adjustments to optimize performance and ensure images display correctly across different devices and screen sizes. Get started with Avatars in minutes Capabilities Appwrite Avatars supports multiple image generation and…",
		"breadcrumbs": [
			"Avatars",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/avatars/browsers",
		"title": "Browser icons",
		"description": "Retrieve browser icons for displaying user agent information and device compatibility.",
		"excerpt": "The browser icon endpoint provides access to icons for popular web browsers. This is useful for displaying user agent information, browser compatibility indicators, and device compatibility in your application. Get browser icon Retrieve a browser icon by browser code. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | code | string | The browser code. Supported codes include , , , , , and others. | |…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Browser icons"
		]
	},
	{
		"slug": "products/avatars/favicons",
		"title": "Favicons",
		"description": "Fetch favicons from remote websites for link previews and bookmark displays.",
		"excerpt": "The favicon endpoint retrieves favicons from remote websites. This is useful for displaying website icons in link previews, bookmarks, and social sharing interfaces. Get favicon Retrieve a favicon from a remote website URL. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | url | string | The URL of the website to fetch the favicon from. Must be a valid HTTP or HTTPS URL. | | width…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Favicons"
		]
	},
	{
		"slug": "products/avatars/flags",
		"title": "Country flags",
		"description": "Retrieve country flag icons by country code for displaying user locations and regional information.",
		"excerpt": "The country flag endpoint provides access to flag icons for all countries. This is useful for displaying user locations, regional settings, and country-specific information in your application. Get country flag Retrieve a country flag icon by its ISO 3166-1 country code. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | code | string | The ISO ISO 3166-1 country code (e.g., , , ). | | width…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Country flags"
		]
	},
	{
		"slug": "products/avatars/image-manipulation",
		"title": "Image proxy",
		"description": "Transform remote images with resizing, cropping, and quality adjustments for optimal display and performance.",
		"excerpt": "The image proxy endpoint allows you to fetch and transform images from remote URLs. You can resize, crop, and adjust the quality of images to optimize them for your application's display requirements and performance needs. Proxy remote image Fetch and transform an image from a remote URL with various transformation options. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | url | string | The URL of…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Image proxy"
		]
	},
	{
		"slug": "products/avatars/initials",
		"title": "User initials",
		"description": "Generate avatar images from user names or initials with customizable appearance and dimensions.",
		"excerpt": "The user initials endpoint generates avatar images from names or initials. This is particularly useful for displaying user profiles when no profile picture is available, creating a consistent visual identity across your application. Generate initials Generate an avatar image from a user's name. The service automatically extracts initials from the name and displays them on a colored background. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | |…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"User initials"
		]
	},
	{
		"slug": "products/avatars/payment-methods",
		"title": "Payment methods",
		"description": "Retrieve payment method logos for checkout flows and transaction displays.",
		"excerpt": "The payment method endpoint provides access to logos for popular payment methods and credit card brands. This is useful for displaying accepted payment methods in checkout flows, transaction history, and payment settings. Get payment method logo Retrieve a payment method or credit card logo by code. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | code | string | The payment method or credit card code. Supported…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Payment methods"
		]
	},
	{
		"slug": "products/avatars/qr-codes",
		"title": "QR codes",
		"description": "Generate QR codes from text strings with customizable size and margin for authentication, sharing, and data encoding.",
		"excerpt": "The QR code endpoint generates QR code images from any text string. QR codes are commonly used for two-factor authentication, sharing links, encoding data, and enabling quick access to information. Generate QR code Generate a QR code image from a text string. The QR code can be scanned by any standard QR code reader. Parameters The method accepts the following parameters: | Parameter | Type | Description | | --------- | ---- | ----------- | | text | string |…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"QR codes"
		]
	},
	{
		"slug": "products/avatars/quick-start",
		"title": "Start with Avatars",
		"description": "Get started quickly with Appwrite Avatars. Learn how to generate user initials, QR codes, and other avatar images in minutes.",
		"excerpt": "You can start using Appwrite Avatars immediately. The service is publicly accessible and does not require authentication or API keys. Initialize the client First, initialize the Appwrite client with your project endpoint and project ID. Generate user initials Generate an avatar image from a user's name or initials. This is useful for displaying user profiles when no profile picture is available. Generate QR code Create a QR code from any text string. This is commonly used for two-factor authentication, sharing…",
		"breadcrumbs": [
			"Avatars",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/avatars/screenshots",
		"title": "Screenshots",
		"description": "Capture webpage screenshots with customizable viewport, theme, browser settings, and geolocation options for comprehensive web page documentation.",
		"excerpt": "The screenshots endpoint allows you to capture full webpage screenshots with extensive customization options. You can control the browser viewport size, theme, user agent, geolocation, permissions, and other browser settings to capture web pages exactly as they would appear in different scenarios. This is valuable for various use cases, including generating visual documentation, creating link previews, automating QA testing across different devices and browsers, or archiving web pages for compliance and record-keeping. Instead of manually taking screenshots or setting up…",
		"breadcrumbs": [
			"Avatars",
			"Concepts",
			"Screenshots"
		]
	},
	{
		"slug": "products/databases",
		"title": "Databases",
		"description": "Store and query your application data with Appwrite Databases. Choose between Appwrite databases with managed APIs and dedicated native databases with direct access.",
		"excerpt": "Appwrite Databases provide performant and scalable storage for your application, business, and user data. Choose the database that fits your use case, from managed APIs with permissions and realtime to dedicated native engines you connect to directly. Databases store data. If you need to store files like images, PDFs, or videos, use Appwrite Storage. Appwrite databases Managed databases with an Appwrite API on top, including permissions, indexes, queries, and realtime. Available on shared and dedicated infrastructure. Structured, relational data with…",
		"breadcrumbs": [
			"Databases",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/databases/documentsdb",
		"title": "DocumentsDB",
		"description": "Store and query schemaless documents with Appwrite DocumentsDB. Collections give you flexible, JSON-style storage for your application, business, and user data.",
		"excerpt": "Appwrite DocumentsDB lets you store and query schemaless documents. Collections hold documents as flexible JSON, so you can add fields as your data evolves without defining a schema up front. Databases store data, if you need to store files like images, PDFs or videos, use Appwrite Storage. You can organize data into databases, collections, and documents. You can also paginate, order, and query documents. Quick start",
		"breadcrumbs": ["Databases", "DocumentsDB"]
	},
	{
		"slug": "products/databases/documentsdb/atomic-numeric-operations",
		"title": "Atomic numeric operations",
		"description": "Safely increment and decrement numeric fields without race conditions. Perfect for counters, quotas, inventory, and usage metrics in high-concurrency applications.",
		"excerpt": "Atomic numeric operations allow you to safely increase or decrease numeric fields without fetching the full document. This eliminates race conditions and reduces bandwidth usage when updating any numeric values that need to be modified atomically, such as counters, scores, balances, and other fast-moving numeric data. These operations work on numeric document fields, whether the value is an integer or a floating-point number. How atomic operations work Instead of the traditional read-modify-write pattern, atomic numeric operations use dedicated methods to…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Atomic numeric operations"
		]
	},
	{
		"slug": "products/databases/documentsdb/backups",
		"title": "Backups",
		"description": "Learn how to back up and restore your DocumentsDB databases, ensuring data security and seamless recovery.",
		"excerpt": "Backups protect your DocumentsDB data by capturing a full copy of a database that you can restore later. Every backup is **encrypted** and taken as a **hot** backup, so your database keeps serving traffic with zero downtime and recovery stays fast. You manage backups from a database's **Backups** tab, where you can automate backups with policies or create manual backups on demand. Backup policies Backup policies automate your backups on a schedule. To create one, open your database's **Backups** tab…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Backups"
		]
	},
	{
		"slug": "products/databases/documentsdb/bulk-operations",
		"title": "Bulk operations",
		"description": "Perform bulk operations on documents within your collections for efficient data handling.",
		"excerpt": "Appwrite DocumentsDB supports bulk operations for documents, allowing you to create, update, or delete multiple documents in a single request. This can significantly improve performance for apps as it allows you to reduce the number of API calls needed while working with large data sets. Bulk operations can only be performed via the server-side SDKs. The client-side SDKs do not support bulk operations by design to prevent abuse and protect against unexpected costs. This ensures that only trusted server environments…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Bulk operations"
		]
	},
	{
		"slug": "products/databases/documentsdb/collections",
		"title": "Collections",
		"description": "Organize documents with Appwrite DocumentsDB collections. Learn how to create collections, configure permissions, and add indexes for fast queries.",
		"excerpt": "Appwrite uses collections as containers of documents. Collections are schemaless, so documents in the same collection can hold different fields. You shape data in your application instead of defining columns up front. Create collection You can create collections using the Appwrite Console, a Server SDK, or using the CLI. Head to the **Databases** page, open a database, and click **Create collection**. You can also create collections programmatically using a Server SDK. Appwrite Server SDKs require an API key. Permissions Appwrite…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Collections"
		]
	},
	{
		"slug": "products/databases/documentsdb/databases",
		"title": "Databases",
		"description": "Dive deeper into Appwrite DocumentsDB and database configuration. Learn how to create and manage multiple databases for your application.",
		"excerpt": "Databases are the largest organizational unit in Appwrite. Each database contains a group of collections. Create in Console The easiest way to create a database is using the Appwrite Console. Navigate to the **Databases** page and click **Create database**, choose **DocumentsDB** as the database type, and select your preferred tier. Create using Server SDKs You can programmatically create databases using a Server SDK. Appwrite Server SDKs require an API key.",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Databases"
		]
	},
	{
		"slug": "products/databases/documentsdb/documents",
		"title": "Documents",
		"description": "Create, read, update, and delete documents in Appwrite DocumentsDB. Learn how to work with schemaless JSON documents in your collections.",
		"excerpt": "Each piece of data in Appwrite DocumentsDB is a document. Documents are schemaless JSON, so each document in a collection can hold its own set of fields. Create documents You must grant _create_ permissions to users at the _collection level_ before users can create documents. Learn more about permissions Use the method to add a document to a collection. Appwrite Server SDKs require an API key. List documents Use the method to read documents from a collection. Pass queries to…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Documents"
		]
	},
	{
		"slug": "products/databases/documentsdb/json-exports",
		"title": "JSON exports",
		"description": "Export documents from a DocumentsDB collection to a JSON file. Share datasets, create custom backups, or move data to another system without writing custom scripts.",
		"excerpt": "Appwrite's JSON Export feature allows you to export documents from a collection to a JSON file. This is especially useful for creating custom backups, sharing data with other teams, or moving datasets to another system. Export configuration Before exporting, you can configure a few options to control the contents of the output. These settings let you export exactly the data you need. Select fields You can choose which fields to include in your export. By default, every field is exported,…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"JSON exports"
		]
	},
	{
		"slug": "products/databases/documentsdb/json-imports",
		"title": "JSON imports",
		"description": "Create documents in a DocumentsDB collection by uploading a JSON file. Seed test data, restore a dataset, or migrate from another system without writing custom scripts.",
		"excerpt": "Appwrite's JSON Import feature allows you to create multiple documents in a collection by uploading a single JSON file. This is especially useful for importing existing data, seeding test environments, or migrating from other systems. Prepare your JSON file Your JSON file is an array of objects, where each object becomes one document in the collection. DocumentsDB is schemaless, so each object can hold its own set of fields. An example of a valid JSON file: Each object is validated…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"JSON imports"
		]
	},
	{
		"slug": "products/databases/documentsdb/order",
		"title": "Order",
		"description": "Understand how to do data ordering in Appwrite DocumentsDB. Learn how to order and sort your database records for efficient data retrieval.",
		"excerpt": "You can order results returned by Appwrite DocumentsDB by using an order query. For best performance, create an index on the field you plan to order by. Ordering one field When querying using the listDocuments endpoint, you can specify the order of the documents returned using the and query methods. Multiple fields To sort based on multiple fields, simply provide multiple query methods. For better performance, create an index on the first field that you order by. In the example…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Order"
		]
	},
	{
		"slug": "products/databases/documentsdb/pagination",
		"title": "Pagination",
		"description": "Implement pagination for large data sets in Appwrite DocumentsDB. Explore techniques for splitting and displaying data across multiple pages.",
		"excerpt": "As your collection grows in size, you'll need to paginate the documents returned. Pagination improves performance by returning a subset of documents that match a query at a time, called a page. By default, list operations return 25 documents per page, which can be changed using the query method. There is no hard limit on the number of documents you can request. However, beware that **large pages can degrade performance**. Offset pagination Offset pagination divides documents into pages of documents…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Pagination"
		]
	},
	{
		"slug": "products/databases/documentsdb/permissions",
		"title": "Database permissions",
		"description": "Control access to your DocumentsDB data with permissions. Learn how to set collection level and document level access rules.",
		"excerpt": "Permissions define who can access documents in a collection. By default **no permissions** are granted to any users, so no user can access any documents. Permissions exist at two levels, collection level and document level permissions. In Appwrite, permissions are **granted**, meaning a user has no access by default and receives access when granted. A user with access granted at either collection level or document level will be able to access a document. Users **don't need access at both levels**…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Database permissions"
		]
	},
	{
		"slug": "products/databases/documentsdb/queries",
		"title": "Queries",
		"description": "Harness the power of querying with Appwrite DocumentsDB. Discover various query options, filtering, sorting, and advanced querying techniques.",
		"excerpt": "Many list endpoints in Appwrite allow you to filter, sort, and paginate results using queries. Appwrite provides a common set of syntax to build queries. Query class Appwrite SDKs provide a class to help you build queries. The class has methods for each type of supported query operation. Building queries Queries are passed to an endpoint through the parameter as an array of query strings, which can be generated using the class. Each query method is logically separated via operations.…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Queries"
		]
	},
	{
		"slug": "products/databases/documentsdb/quick-start",
		"title": "Start with DocumentsDB",
		"description": "Get started with Appwrite DocumentsDB. Follow a step-by-step guide to create your first database, add a collection, and perform basic document operations.",
		"excerpt": "Head to your Appwrite Console and click **Create database**. Name it and choose **DocumentsDB** as the database type. Optionally, add a custom database ID. Select your preferred tier, then click **Create database**. In the database, click **Create collection** and name it . Optionally, add a custom collection ID. Collections are schemaless, so there are no columns to define. Each document holds its own fields as flexible JSON. Open the collection's **Security** tab. Under **Permissions**, add a new role **Any** and…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Start with DocumentsDB"
		]
	},
	{
		"slug": "products/databases/documentsdb/timestamp-overrides",
		"title": "Timestamp overrides",
		"description": "Set custom $createdAt and $updatedAt timestamps for your documents when using server SDKs.",
		"excerpt": "When creating or updating documents, Appwrite automatically sets and timestamps. However, there are scenarios where you might need to set these timestamps manually, such as when migrating data from another system or backfilling historical records. To manually set and , you must use a **server SDK** with an **API key**. These attributes can be passed inside the parameter on any of the create, update, or upsert routes (single or bulk). Setting custom timestamps You can override a document's timestamps by…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Timestamp overrides"
		]
	},
	{
		"slug": "products/databases/documentsdb/transactions",
		"title": "Transactions",
		"description": "Stage multiple database operations and commit them atomically. Group changes across databases and collections with ordering, isolation, and conflict detection.",
		"excerpt": "Transactions let you stage multiple database operations and apply them together, atomically. Use transactions to keep related changes consistent, even when they span multiple databases and collections. How transactions work 1. Call the createTransaction method to create a transaction. This will return a transaction model, including its ID. 2. Stage operations by passing the parameter to supported document, bulk, and atomic numeric methods. You can stage many operations at once with the createOperations method. 3. Call the updateTransaction method to…",
		"breadcrumbs": [
			"Databases",
			"DocumentsDB",
			"Transactions"
		]
	},
	{
		"slug": "products/databases/mysql",
		"title": "MySQL",
		"description": "Run a native MySQL database provisioned for your project and connect to it directly with standard MySQL clients.",
		"excerpt": "Appwrite native MySQL databases give you a managed MySQL instance provisioned for your project. You pick the compute specification, and Appwrite provisions the engine in your project's region with its own storage, networking, and credentials, exposed through a per-database public hostname secured with TLS. Native databases are different from Appwrite databases like TablesDB, DocumentsDB, and VectorsDB, which are accessed through Appwrite SDKs and platform APIs. A native MySQL database gives you the raw engine. You connect with the client or…",
		"breadcrumbs": ["Databases", "MySQL"]
	},
	{
		"slug": "products/databases/mysql/backups",
		"title": "Backups",
		"description": "Scheduled backups, manual backups, restores, and point-in-time recovery for your MySQL database.",
		"excerpt": "Native databases are backed up automatically. Backups are stored off the database instance and restorable from the API. For finer recovery granularity than scheduled backups, enable point-in-time recovery. Automatic backups Every database gets a default backup policy when it is provisioned, so you have scheduled backups from day one. You can adjust the default policy, or add more policies with different schedules and retention windows. Backup policies A policy defines a schedule (cron expression) and a retention period in days.…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Backups"
		]
	},
	{
		"slug": "products/databases/mysql/branches",
		"title": "Branches",
		"description": "Spin up an ephemeral, isolated copy of your MySQL database in seconds from a storage snapshot. Use branches for previews, migrations, and testing.",
		"excerpt": "A branch is a short-lived, isolated copy of your database. It has its own hostname and reuses the parent's credentials, because it is a snapshot copy of the parent's storage volume taken at a point in time. Branches are not replicas: once created, they diverge from the parent and never sync back. There is no branch merge operation. Use a branch to validate a migration, data repair, or application change, then intentionally cut application traffic over to the validated database…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Branches"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/access-control",
		"title": "Security and access control",
		"description": "How MySQL privileges work, what the admin account on your database can do, and patterns for restricting access to data.",
		"excerpt": "MySQL controls access in two layers: - An **account** is an identity that can connect. - **Privileges** decide what an account may do to each schema, table, or column. This page covers how that model works, what your Appwrite database's account can and cannot do, and the patterns that restrict access to data in practice. The privilege model A MySQL account is a user name plus a host pattern, such as . Privileges attach to accounts at four scopes: global,…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Security and access control"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/data-modeling",
		"title": "Data modeling and normalization",
		"description": "Design MySQL schemas with normalization, decide when to denormalize, and use views to shape data for readers.",
		"excerpt": "Data modeling decides where each fact lives. Normalization is the discipline of storing every fact exactly once, so it can't contradict itself. This page walks a flat spreadsheet-style table through the normal forms, then covers when to deliberately break the rules, and how views let you reshape data without duplicating it. The problem with one big table Start with an orders table designed the way a spreadsheet would be: Every design flaw here causes a concrete failure: - Ada's email…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Data modeling and normalization"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/indexes",
		"title": "Indexes",
		"description": "Speed up MySQL queries with B-tree, composite, prefix, functional, and invisible indexes, and read EXPLAIN ANALYZE output.",
		"excerpt": "An index is a sorted data structure the database maintains next to a table so it can find rows without scanning everything. Reads get faster; writes pay a small tax to keep each index current. Knowing when an index helps, and how to confirm it's being used, is the highest-leverage performance skill in SQL. Setup Index behavior only shows up with enough data on the table, so the setup seeds 100,000 users to give the query optimizer a real choice…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Indexes"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/joins",
		"title": "Joins and relationships",
		"description": "Model relationships with foreign keys and combine MySQL tables with INNER, LEFT, RIGHT, and CROSS joins.",
		"excerpt": "Relational databases keep each entity in its own table and connect them through **keys**. A join combines rows from two tables by matching values, usually a **foreign key** on one side against a **primary key** on the other. This page covers how to model the two relationship shapes you'll meet constantly, and the join types you'll use in practice. Setup The examples below use two tables, customers and orders, where every order records which customer placed it. Create and seed…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Joins and relationships"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/queries",
		"title": "Querying rows",
		"description": "Read and write MySQL rows with SELECT, INSERT, UPDATE, and DELETE. Covers filtering, aggregation, pagination, and upserts.",
		"excerpt": "Four statements do almost all the work in a relational database: - **SELECT** reads rows - **INSERT** adds new rows - **UPDATE** changes existing rows - **DELETE** removes rows SQL is declarative: a query describes the result you want, and the database's optimizer decides how to produce it, choosing between indexes, scans, and join strategies on its own. That's why the same query keeps working as data grows and indexes change. This page walks through each statement, plus the querying…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Querying rows"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/tables",
		"title": "Tables and data types",
		"description": "Create MySQL tables with the right column types and constraints. Covers numeric, string, date and time, JSON, ENUM, and generated columns.",
		"excerpt": "A table is the unit of storage in a relational database, a named grid where: - each **row** is one record: one customer, one order - each **column** is one attribute every record shares: name, price, creation time - each column has a **type** that determines what values it accepts and how they compare, sort, and calculate Unlike a spreadsheet, the set of columns is declared up front and enforced; every row has exactly those columns. This fixed shape is…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Tables and data types"
		]
	},
	{
		"slug": "products/databases/mysql/concepts/transactions",
		"title": "Transactions",
		"description": "Group MySQL statements into atomic transactions. Covers COMMIT, ROLLBACK, savepoints, isolation levels, locking, and deadlocks.",
		"excerpt": "A transaction groups statements into a single all-or-nothing unit. Either every statement takes effect, or none do, and no other connection ever sees a half-finished state. Two distinct things go wrong without that: - **Partial failure**: a crash or dropped connection after the debit but before the credit leaves data in a state that was never supposed to exist. - **Interleaving**: two concurrent processes both read a balance of 100, both compute a new value, both write, and one update…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"concepts",
			"Transactions"
		]
	},
	{
		"slug": "products/databases/mysql/connection-pooling",
		"title": "Connection pooling",
		"description": "Configure the per-database connection pooler to serve many short-lived clients, with automatic read/write splitting when high availability is enabled.",
		"excerpt": "MySQL creates one backend process per connection, which makes each connection relatively expensive. Serverless functions, edge runtimes, and horizontally scaled application servers can easily exhaust the connection limit of your specification. The connection pooler sits in front of your database and multiplexes many client connections onto a small pool of server connections. The pooler runs next to your database and is reachable on port on the same hostname. Your application connects to the pooler exactly like it would connect to…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Connection pooling"
		]
	},
	{
		"slug": "products/databases/mysql/connections",
		"title": "Connections",
		"description": "Connect to your MySQL database with the mysql client or any standard driver. Retrieve connection details and rotate the primary password.",
		"excerpt": "A native MySQL database exposes a MySQL endpoint over TLS. You connect to it the same way you would connect to any MySQL server: with the client, any driver in any language, or any ORM. Get connection details with the API The connection details are returned on the database object itself. Fetch the database with an API key that has the scope: The response includes the connection fields alongside the database configuration: The primary user is and the database name…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Connections"
		]
	},
	{
		"slug": "products/databases/mysql/high-availability",
		"title": "High availability",
		"description": "Run up to five read replicas with asynchronous, synchronous, or quorum replication and automatic failover for your MySQL database.",
		"excerpt": "A single database instance is a single point of failure. High availability (HA) adds streaming replicas next to your primary: they replicate continuously, serve read traffic through the connection pooler, and take over automatically when the primary becomes unhealthy. High availability requires a specification that runs on dedicated compute; the smallest specifications run on shared capacity and do not support replicas. How it works Replicas receive changes from the primary through MySQL binary log replication. Each replica is a full…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"High availability"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/auth-js",
		"title": "Auth.js",
		"description": "Use an Appwrite native MySQL database as the backing store for Auth.js (NextAuth.js). Persist users, accounts, and sessions through the Prisma adapter.",
		"excerpt": "Auth.js (formerly NextAuth.js) persists users, accounts, sessions, and verification tokens through a database adapter. When you configure an adapter, those records live in your database, which makes database sessions, account linking, and email sign-in possible. An Appwrite native MySQL database is a standard MySQL engine, so Auth.js works through the same ORM adapters you use with other MySQL databases. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one with the…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Auth.js"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/better-auth",
		"title": "Better Auth",
		"description": "Use an Appwrite native MySQL database as the database for Better Auth. Configure mysql2, run schema generation and migrations over a direct connection, and store users and sessions in MySQL.",
		"excerpt": "Better Auth is a framework-agnostic authentication library for TypeScript that stores users, sessions, accounts, and verification records in your database. An Appwrite native MySQL database gives Better Auth a standard MySQL engine, so you can use , run the Better Auth CLI, and keep auth data in your Appwrite project. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one and Connections to retrieve the connection string. The primary user is…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Better Auth"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/dbt",
		"title": "dbt",
		"description": "Run dbt Core transformations against an Appwrite native MySQL database with the community dbt-mysql adapter.",
		"excerpt": "Use dbt Core with an Appwrite native MySQL database through the community [](https://docs.getdbt.com/docs/local/connect-data-platform/mysql-setup) adapter. Appwrite exposes standard MySQL on port , so dbt connects with the same host, username, password, and database name you use with other MySQL clients. dbt compiles your models into and statements, then runs them in dependency order to build transformed tables and views inside the MySQL database you configure. dbt Labs lists MySQL as a community adapter. The published [](https://pypi.org/project/dbt-mysql/) package is experimental and is…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"dbt"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/django",
		"title": "Django",
		"description": "Use Django's ORM with an Appwrite native MySQL database. Configure the DATABASES setting, run migrations against the direct MySQL port, and choose the right pooler mode for Django connections.",
		"excerpt": "A native MySQL database is a standard MySQL engine, so Django's ORM works against it with no Appwrite-specific configuration. Point the setting at the credentials from the Connections page, then use migrations, models, and the rest of Django as you would against any MySQL server. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one with the create-database wizard, then use [](/docs/products/databases/mysql/connections#credentials) to read the hostname, port, username, password, and generated…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Django"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/drivers",
		"title": "Node.js drivers",
		"description": "Connect to an Appwrite native MySQL database from Node.js with mysql2 or MariaDB Connector/Node.js. Configure pools, TLS verification, serverless connection management, and troubleshooting.",
		"excerpt": "A native MySQL database works with standard Node.js drivers that speak the MySQL wire protocol. The Connections page shows the smallest query. This guide covers driver pools, TLS verification, serverless connection management, and common connection errors. You'll need a native MySQL database in a state and the connection values returned by the database object: host, port, username, password, and database name. Store the password in an environment variable and keep it out of source control. Raw driver, ORM, or SQL…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Node.js drivers"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/drizzle",
		"title": "Drizzle",
		"description": "Use Drizzle ORM with an Appwrite native MySQL database. Configure mysql2, run migrations against the direct connection, and pool runtime traffic from serverless environments.",
		"excerpt": "Appwrite's native MySQL database is a standard MySQL engine, so Drizzle ORM works against it with no Appwrite-specific configuration. Point Drizzle's mysql2 driver at the connection string from the Connections page and use Drizzle Kit, the query builder, and the rest of the toolchain as you would against any MySQL server. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one and Connections to retrieve the connection string. The primary user…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Drizzle"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/ef-core",
		"title": "EF Core",
		"description": "Use Entity Framework Core with an Appwrite native MySQL database. Configure the MySQL provider, run migrations against the direct MySQL host, and rely on the provider's connection pool from an ASP.NET server.",
		"excerpt": "A native MySQL database is a standard MySQL engine, so Entity Framework Core works with it through a MySQL EF Core provider. Point the provider at the connection details from the Connections page, then use , migrations, and LINQ queries as you would with any MySQL server. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one and Connections to retrieve the connection details. Install the provider Add Oracle's EF Core…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"EF Core"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/fastapi",
		"title": "FastAPI",
		"description": "Use FastAPI and SQLAlchemy 2.x with an Appwrite native MySQL database. Configure the async asyncmy engine, pass TLS through connect_args, inject a session per request, and run Alembic migrations against the direct database port.",
		"excerpt": "An Appwrite native MySQL database is a standard MySQL engine, so FastAPI with SQLAlchemy and an async MySQL driver works against it with no Appwrite-specific runtime code. You point at the connection string from the connections page and use the SQLAlchemy ORM, the FastAPI dependency system, and Alembic the same way you would against any self-hosted MySQL server. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one and connections to…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"FastAPI"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/gorm",
		"title": "GORM",
		"description": "Use GORM with an Appwrite native MySQL database in Go. Build the MySQL DSN, open a connection, size the database/sql pool, and run migrations with AutoMigrate or golang-migrate.",
		"excerpt": "A native MySQL database is a standard MySQL engine, so GORM talks to it through the regular MySQL driver. Build a go-sql-driver DSN from the credentials returned by Appwrite, hand it to , and use models, , and the query API as you would against any MySQL server. You'll need a native MySQL database in a state and its credentials. See native MySQL databases to create one and Connections to retrieve the hostname, password, and generated database name. The primary…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"GORM"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/grafana",
		"title": "Grafana",
		"description": "Connect Grafana to an Appwrite native MySQL database as a data source and build dashboards. Configure the MySQL data source and provision it from YAML.",
		"excerpt": "An Appwrite native MySQL database exposes a standard managed MySQL 8.4 or 8.0 engine, so Grafana connects to it through the built-in **MySQL data source** with no Appwrite-specific configuration. Point the data source at your database hostname, authenticate with your database credentials, and query your tables to build dashboards and alerts. You'll need a native MySQL database in a state and its credentials. Call from the Appwrite API to read , , , , and . The primary user is…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Grafana"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/laravel",
		"title": "Laravel",
		"description": "Use Laravel and Eloquent with an Appwrite native MySQL database. Configure the connection, run migrations against the direct port, and pool serverless traffic through the connection pooler.",
		"excerpt": "A native MySQL database is a standard MySQL engine, so Laravel works against it with no Appwrite-specific configuration. Point the connection in at the credentials from the Connections page, then use Eloquent, the query builder, migrations, and queues as you would against any MySQL server. You'll need a native MySQL database in a state and its credentials. See MySQL databases to create one. To retrieve credentials, call [](/docs/products/databases/mysql/connections#credentials) and use the returned hostname, port, username, password, and database name. The…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Laravel"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/metabase",
		"title": "Metabase",
		"description": "Connect Metabase to an Appwrite native MySQL database for analytics. Configure MySQL connection details, require TLS on Cloud, and build dashboards on a session-safe connection.",
		"excerpt": "Appwrite's native MySQL database is a standard MySQL engine, so Metabase can connect to it without an Appwrite-specific adapter. Add the database in Metabase, use the host and credentials from the Connections page, and Metabase will sync the schema so your team can build questions and dashboards. You'll need a native MySQL database in a state and its credentials. Fetch them with [](/docs/products/databases/mysql/connections#credentials). The response includes , , , , and . The primary user is , and the database…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Metabase"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/nextjs",
		"title": "Next.js",
		"description": "Connect a Next.js App Router application to an Appwrite native MySQL database from Route Handlers, Server Actions, and Server Components, pool from serverless, and fall back to the SQL API on the Edge runtime.",
		"excerpt": "An Appwrite native MySQL database works with standard MySQL drivers and ORMs, so a Next.js App Router application can query it from server-side code. Point your driver at the connection string from the Connections page and keep all database access on the server. You'll need a native MySQL database in a state and its credentials. See MySQL to create one and Connections to retrieve the connection string. The primary user is , and Appwrite generates the database name for each…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Next.js"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/prisma",
		"title": "Prisma",
		"description": "Use Prisma ORM with an Appwrite native MySQL database. Configure the Prisma 7 datasource, apply schema changes through the direct connection, and instantiate Prisma Client with the MySQL driver adapter.",
		"excerpt": "Prisma ORM works with Appwrite's native MySQL database as a standard MySQL target. Configure Prisma with the connection string from Appwrite, apply schema changes through the direct database connection, and use Prisma Client from your application code. You'll need a native MySQL database in a state and its credentials. The database object returned by the Appwrite API includes , , , and ; you can read it with or from the response when you create the database. Initialize Prisma Install…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Prisma"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/rails",
		"title": "Rails",
		"description": "Use Ruby on Rails and ActiveRecord with an Appwrite native MySQL database. Configure database.yml, run migrations against the direct database port, and size the ActiveRecord pool.",
		"excerpt": "A native MySQL database is a standard MySQL engine, so Ruby on Rails works against it through ActiveRecord with no Appwrite-specific configuration. Point at the connection details from the Connections page and use ActiveRecord, migrations, and the rest of the Rails toolchain exactly as you would against any MySQL server. You'll need a native MySQL database in a state and its credentials. Call from the Appwrite API to read , , , and . The primary user is , and…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Rails"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/retool",
		"title": "Retool",
		"description": "Connect Retool to an Appwrite native MySQL database to build internal and admin tools. Fetch connection details with the API, configure the MySQL resource with TLS, and allow Retool Cloud network access when needed.",
		"excerpt": "An Appwrite native MySQL database exposes a standard MySQL connection, so Retool connects to it through the built-in **MySQL** resource. Use the database hostname, generated database name, and credentials from Appwrite, then build queries, tables, and forms in Retool for dashboards and admin panels. You'll need a native MySQL database in a state, an Appwrite API key with , and permission to create resources in Retool. Fetch connection details by calling , which returns , , , , and .…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Retool"
		]
	},
	{
		"slug": "products/databases/mysql/integrations/spring-boot",
		"title": "Spring Boot",
		"description": "Connect a Spring Boot application to an Appwrite native MySQL database with Spring Data JPA and Hibernate. Configure the JDBC datasource and HikariCP pool, map entities, and run Flyway or Liquibase migrations against MySQL.",
		"excerpt": "An Appwrite native MySQL database is a standard MySQL engine, so a Spring Boot application connects to it through MySQL Connector/J with no Appwrite-specific runtime configuration. Point at the JDBC URL from your database credentials, size the built-in HikariCP pool, and use Spring Data JPA, Hibernate, Flyway, or Liquibase as you would with any managed MySQL server. You'll need a native MySQL database in a state and its credentials. You can fetch credentials with the API by calling , which…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"integrations",
			"Spring Boot"
		]
	},
	{
		"slug": "products/databases/mysql/maintenance",
		"title": "Maintenance",
		"description": "Maintenance windows, online engine version upgrades, pause and resume, and the lifecycle states of your MySQL database.",
		"excerpt": "Appwrite manages the infrastructure around your database: security patches, engine upgrades, and instance health. This page covers the controls you have over when and how that maintenance happens. Maintenance window Routine maintenance that can briefly affect the database runs inside a weekly window that you choose. Set it through the API by picking a day and start hour (UTC): accepts through , and accepts to . Engine version upgrades You can upgrade the MySQL version online, such as from 8.0…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Maintenance"
		]
	},
	{
		"slug": "products/databases/mysql/monitoring",
		"title": "Monitoring",
		"description": "Check database health, watch lifecycle states, and inspect active connections on your native MySQL database.",
		"excerpt": "Every native MySQL database ships with programmatic health checks, and the engine's own instrumentation is fully available to you. There is nothing to install in the database for these checks. Database health Poll the database status for live health information after the database is ready: uptime, connection counts, replica state, and storage volumes. Use it from your own monitoring: For the database lifecycle state (, , , and friends), read the field of the database object itself. Use that field…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Monitoring"
		]
	},
	{
		"slug": "products/databases/mysql/network-security",
		"title": "Network security",
		"description": "TLS by default, IP allowlists, and idle timeouts for your MySQL database.",
		"excerpt": "Every native database is reachable through a unique public hostname, secured with TLS, and protected by network controls that you configure per database. Hostname Each database gets a stable hostname in the form: The hostname does not change for the lifetime of the database, across restarts, resizes, failovers, and version upgrades. You can copy it from the database response. TLS Connections on Appwrite Cloud are encrypted with TLS, terminated at Appwrite's edge and forwarded to your database over the internal…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Network security"
		]
	},
	{
		"slug": "products/databases/mysql/quick-start",
		"title": "Quick start",
		"description": "Create your first native MySQL database in the Appwrite Console, retrieve its credentials, and run your first queries with the mysql client.",
		"excerpt": "You can create a MySQL database and run your first query in a few minutes. Create a database 1. In your project, go to **Databases**. 2. Click **Create database**. 3. Give your database a name, and optionally a custom database ID. 4. Under **Choose database type**, select **MySQL** from the **Native databases** group. 5. Under **Specifications**, select your preferred tier. 6. Optionally configure **Read replicas** and **Point-in-time recovery (PITR)**. You can change both later. 7. Review the database summary and…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Quick start"
		]
	},
	{
		"slug": "products/databases/mysql/scaling",
		"title": "Scaling",
		"description": "Resize the compute specification of your MySQL database with zero downtime and grow storage automatically as your data grows.",
		"excerpt": "Native databases scale in two dimensions: the compute specification (CPU, memory, and connection limit) and storage. Both can change after creation, without dump-and-restore migrations. List available specifications Each database runs against a specification that defines its CPU, memory, included storage, and maximum connections. List the specifications available to your plan: Change the compute specification From the API, pass the new specification ID: Resizes apply with zero downtime through a rolling cutover: a new instance is provisioned on the target specification,…",
		"breadcrumbs": [
			"Databases",
			"MySQL",
			"Scaling"
		]
	},
	{
		"slug": "products/databases/postgresql",
		"title": "PostgreSQL",
		"description": "Run a dedicated, native PostgreSQL database provisioned for your project and connect to it directly with standard PostgreSQL clients.",
		"excerpt": "Appwrite native PostgreSQL databases give you a managed PostgreSQL instance provisioned for your project. You pick the compute specification, and Appwrite provisions the engine in your project's region with its own storage, networking, and credentials, exposed through a per-database public hostname secured with TLS. Native databases are different from Appwrite databases like TablesDB, DocumentsDB, and VectorsDB, which are accessed through Appwrite SDKs and platform APIs. A native PostgreSQL database gives you the raw engine. You connect with or any PostgreSQL…",
		"breadcrumbs": ["Databases", "PostgreSQL"]
	},
	{
		"slug": "products/databases/postgresql/backups",
		"title": "Backups",
		"description": "Scheduled backups, manual backups, restores, and point-in-time recovery for your PostgreSQL database.",
		"excerpt": "Native databases are backed up automatically. Backups are stored off the database instance and restorable from the API. For finer recovery granularity than scheduled backups, enable point-in-time recovery. Automatic backups Every database gets a default backup policy when it is provisioned, so you have scheduled backups from day one. You can adjust the default policy, or add more policies with different schedules and retention windows. Backup policies A policy defines a schedule (cron expression) and a retention period in days.…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Backups"
		]
	},
	{
		"slug": "products/databases/postgresql/branches",
		"title": "Branches",
		"description": "Spin up an ephemeral, isolated copy of your PostgreSQL database in seconds from a storage snapshot. Use branches for previews, migrations, and testing.",
		"excerpt": "A branch is a short-lived, isolated copy of your database. It has its own endpoint and reuses the parent's credentials, because it is a snapshot copy of the parent's storage volume taken at a point in time. Branches are not replicas: once created, they diverge from the parent and never sync back. There is no branch merge operation. Use a branch to validate a migration, data repair, or application change, then intentionally cut application traffic over to the validated database…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Branches"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/access-control",
		"title": "Security and access control",
		"description": "Control access to PostgreSQL with roles, GRANT and REVOKE, and row-level security policies for multi-tenant data.",
		"excerpt": "PostgreSQL controls access in three layers: - A **role** is an identity that can connect. - **Privileges** decide what a role may do to each table. - **Row-level security** narrows that further, to which rows. Your database's primary role can create additional roles, so you can give every service and teammate exactly the access it needs instead of sharing one all-powerful login. Setup The examples below protect a documents table whose rows belong to different owners. Create and seed it…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Security and access control"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/data-modeling",
		"title": "Data modeling and normalization",
		"description": "Design PostgreSQL schemas with normalization, decide when to denormalize, and use views to shape data for readers.",
		"excerpt": "Data modeling decides where each fact lives. Normalization is the discipline of storing every fact exactly once, so it can't contradict itself. This page walks a flat spreadsheet-style table through the normal forms, then covers when to deliberately break the rules, and how views let you reshape data without duplicating it. The problem with one big table Start with an orders table designed the way a spreadsheet would be: Every design flaw here causes a concrete failure: - Ada's email…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Data modeling and normalization"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/indexes",
		"title": "Indexes",
		"description": "Speed up PostgreSQL queries with B-tree, composite, partial, and expression indexes, and read EXPLAIN ANALYZE output.",
		"excerpt": "An index is a lookup structure the database maintains next to a table so it can find rows without scanning everything; the default B-tree kind keeps its entries sorted. Reads get faster; writes pay a small tax to keep each index current. Knowing when an index helps, and how to confirm it's being used, is the highest-leverage performance skill in SQL. Setup Index behavior only shows up with enough data on the table, so the setup seeds 100,000 users to…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Indexes"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/joins",
		"title": "Joins and relationships",
		"description": "Model relationships with foreign keys and combine PostgreSQL tables with INNER, LEFT, FULL, and CROSS joins.",
		"excerpt": "Relational databases keep each entity in its own table and connect them through **keys**. A join combines rows from two tables by matching values, usually a **foreign key** on one side against a **primary key** on the other. This page covers how to model the two relationship shapes you'll meet constantly, and the join types you'll use in practice. Setup The examples below use two tables, customers and orders, where every order records which customer placed it. Create and seed…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Joins and relationships"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/queries",
		"title": "Querying rows",
		"description": "Read and write PostgreSQL rows with SELECT, INSERT, UPDATE, and DELETE. Covers filtering, aggregation, pagination, and upserts.",
		"excerpt": "Four statements do almost all the work in a relational database: - **SELECT** reads rows - **INSERT** adds new rows - **UPDATE** changes existing rows - **DELETE** removes rows SQL is declarative: a query describes the result you want, and the database's planner decides how to produce it, choosing between indexes, scans, and join strategies on its own. That's why the same query keeps working as data grows and indexes change. This page walks through each statement, plus the querying…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Querying rows"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/tables",
		"title": "Tables and data types",
		"description": "Create PostgreSQL tables with the right column types and constraints. Covers numeric, text, date and time, JSON, and array types.",
		"excerpt": "A table is the unit of storage in a relational database, a named grid where: - each **row** is one record: one customer, one order - each **column** is one attribute every record shares: name, price, creation time - each column has a **type** that determines what values it accepts and how they compare, sort, and calculate Unlike a spreadsheet, the set of columns is declared up front and enforced; every row has exactly those columns. This fixed shape is…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Tables and data types"
		]
	},
	{
		"slug": "products/databases/postgresql/concepts/transactions",
		"title": "Transactions",
		"description": "Group PostgreSQL statements into atomic transactions. Covers COMMIT, ROLLBACK, savepoints, isolation levels, locking, and deadlocks.",
		"excerpt": "A transaction groups statements into a single all-or-nothing unit. Either every statement takes effect, or none do, and no other connection ever sees a half-finished state. Two distinct things go wrong without that: - **Partial failure**: a crash or dropped connection after the debit but before the credit leaves data in a state that was never supposed to exist. - **Interleaving**: two concurrent processes both read a balance of 100, both compute a new value, both write, and one update…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"concepts",
			"Transactions"
		]
	},
	{
		"slug": "products/databases/postgresql/connection-pooling",
		"title": "Connection pooling",
		"description": "Configure the per-database connection pooler to serve many short-lived clients, with automatic read/write splitting when high availability is enabled.",
		"excerpt": "PostgreSQL creates one backend process per connection, which makes each connection relatively expensive. Serverless functions, edge runtimes, and horizontally scaled application servers can easily exhaust the connection limit of your specification. The connection pooler sits in front of your database and multiplexes many client connections onto a small pool of server connections. The pooler runs next to your database and is reachable on port on the same hostname. Your application connects to the pooler exactly like it would connect to…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Connection pooling"
		]
	},
	{
		"slug": "products/databases/postgresql/connections",
		"title": "Connections",
		"description": "Connect to your PostgreSQL database with psql or any standard driver. Retrieve connection details and rotate the primary password.",
		"excerpt": "A native PostgreSQL database exposes a PostgreSQL endpoint over TLS. You connect to it the same way you would connect to any PostgreSQL server: with , any driver in any language, or any ORM. Get connection details in the Console The fastest way to connect is through the Appwrite Console: 1. In your project, go to **Databases** and select your PostgreSQL database. 2. Click **Credentials** to open the credentials dialog. 3. Copy the individual values from the **Details** tab, or…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Connections"
		]
	},
	{
		"slug": "products/databases/postgresql/extensions",
		"title": "Extensions",
		"description": "Install and manage PostgreSQL extensions like PostGIS, pgvector, and pg_trgm on your database, at no extra cost.",
		"excerpt": "PostgreSQL exposes a rich extension ecosystem: PostGIS for geospatial data, pgvector for embeddings, pg_trgm for fuzzy search, and more. Native PostgreSQL databases on Appwrite support managing extensions through the API, at no extra cost. Install an extension Pass the extension name as it appears in the extension catalog. The install runs asynchronously: the request returns immediately and a worker runs inside the database, typically within a few seconds. The database must be in the state. Requesting an extension that is…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Extensions"
		]
	},
	{
		"slug": "products/databases/postgresql/high-availability",
		"title": "High availability",
		"description": "Run up to five read replicas with asynchronous, synchronous, or quorum replication and automatic failover for your PostgreSQL database.",
		"excerpt": "A single database instance is a single point of failure. High availability (HA) adds streaming replicas next to your primary: they replicate continuously, serve read traffic through the connection pooler, and take over automatically when the primary becomes unhealthy. High availability requires a specification that runs on dedicated compute; the smallest specifications run on shared capacity and do not support replicas. How it works Replicas receive changes from the primary through PostgreSQL streaming replication (WAL shipping). Each replica is a…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"High availability"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/auth-js",
		"title": "Auth.js",
		"description": "Use an Appwrite native PostgreSQL database as the backing store for Auth.js (NextAuth.js). Persist users, accounts, and sessions through a Prisma or Drizzle adapter, pooled from serverless runtimes.",
		"excerpt": "Auth.js (formerly NextAuth.js) persists users, accounts, sessions, and verification tokens through a database adapter. When you configure an adapter, those records live in your own database instead of only in a cookie, which is what makes database sessions, account linking, and email sign-in possible. An Appwrite native PostgreSQL database is a standard PostgreSQL engine, so any Auth.js adapter built on a PostgreSQL ORM works against it with no Appwrite-specific configuration. You'll need a native PostgreSQL database in a state and…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Auth.js"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/better-auth",
		"title": "Better Auth",
		"description": "Use an Appwrite native PostgreSQL database as the database for Better Auth. Point runtime traffic at the pooler, run schema generation and migrations over a direct connection, and store users and sessions in PostgreSQL.",
		"excerpt": "Better Auth is a framework-agnostic authentication library for TypeScript that keeps its state, including users, sessions, accounts, and verification tokens, in a database you own. A native PostgreSQL database gives Better Auth a standard PostgreSQL engine, so you can use the connection string from the Connections page and run the Better Auth CLI to create the schema. You'll need a native PostgreSQL database in a state and its credentials. See PostgreSQL databases to create one, then open the database and…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Better Auth"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/dbt",
		"title": "dbt",
		"description": "Run dbt transformations against an Appwrite native PostgreSQL database. Configure profiles.yml for the direct engine port, size threads to your connection budget, and test models against a branch in CI.",
		"excerpt": "An Appwrite native PostgreSQL database is a standard PostgreSQL server, so dbt works against it through the standard [](https://docs.getdbt.com/docs/local/connect-data-platform/postgres-setup) adapter with no Appwrite-specific configuration. Point a target at the connection details from the Connections page and use , , and the same way you would against any self-hosted PostgreSQL warehouse. dbt compiles your models into / statements and runs them in dependency order, materializing a transformed analytics layer inside a schema you control. You'll need a native PostgreSQL database in…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"dbt"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/django",
		"title": "Django",
		"description": "Use Django's ORM with an Appwrite native PostgreSQL database. Configure the DATABASES setting with TLS options, run migrations on the direct PostgreSQL port, and tune persistent connections for pooling.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so Django's ORM works against it with no Appwrite-specific configuration. Point the setting at the credentials from the Connections page, then use migrations, models, and the rest of Django exactly as you would against any PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See native PostgreSQL databases to create one and Connections to retrieve the connection details. The primary user is , and the database…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Django"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/drivers",
		"title": "Node.js drivers",
		"description": "Connect to an Appwrite native PostgreSQL database from Node.js with node-postgres or postgres.js. Configure pools, TLS verification, serverless connection management, and troubleshooting.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so any Node.js driver that speaks the PostgreSQL wire protocol can connect over TLS without an Appwrite-specific adapter. The Connections page shows the minimal snippet to run your first query. This page covers production pool configuration, certificate verification, serverless connection management, and common connection errors. You'll need a native PostgreSQL database in a state and its credentials. In the Console, open the database and click **Credentials**. Use the **Details** tab for…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Node.js drivers"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/drizzle",
		"title": "Drizzle",
		"description": "Use Drizzle ORM with an Appwrite native PostgreSQL database. Configure the driver, run migrations against the direct connection, and pool runtime traffic from serverless environments.",
		"excerpt": "Appwrite's native PostgreSQL database is a standard PostgreSQL engine, so Drizzle ORM works against it with no Appwrite-specific configuration. Point Drizzle's driver at the connection string from the Connections page and use Drizzle Kit, the query builder, and the rest of the toolchain as you would against any PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See native PostgreSQL databases to create one and Connections to retrieve the connection string. The primary user is…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Drizzle"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/ef-core",
		"title": "EF Core",
		"description": "Use Entity Framework Core with an Appwrite native PostgreSQL database. Configure the Npgsql connection string, run migrations against the direct PostgreSQL host, and rely on the driver's built-in connection pool from an ASP.NET server.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so Entity Framework Core works against it with no Appwrite-specific configuration. Point the Npgsql EF Core provider at the connection string from the Connections page and use , migrations, and the rest of the toolchain exactly as you would against any self-hosted PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See native PostgreSQL databases to create one and Connections to retrieve the connection details. Appwrite…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"EF Core"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/fastapi",
		"title": "FastAPI",
		"description": "Use FastAPI and SQLAlchemy 2.x with an Appwrite native PostgreSQL database. Configure the async asyncpg engine, pass TLS through connect_args, inject a session per request, and run Alembic migrations against the direct database port.",
		"excerpt": "An Appwrite native PostgreSQL database is a standard PostgreSQL engine, so FastAPI with SQLAlchemy and an async driver works against it with no Appwrite-specific configuration. You point at the connection string from the connections page and use the SQLAlchemy ORM, the FastAPI dependency system, and Alembic exactly as you would against any self-hosted PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See native PostgreSQL databases to create one and connections to retrieve the connection…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"FastAPI"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/gorm",
		"title": "GORM",
		"description": "Use GORM with an Appwrite native PostgreSQL database in Go. Build the DSN, open a connection, size the database/sql pool against the direct connection, and run migrations with AutoMigrate or golang-migrate.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so GORM talks to it with no Appwrite-specific configuration. You build a connection string from the credentials in the Console, hand it to the GORM PostgreSQL driver, and use models, , and the query API exactly as you would against any self-hosted PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See PostgreSQL databases to create one. To retrieve the hostname, password, database name, and connection…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"GORM"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/grafana",
		"title": "Grafana",
		"description": "Connect Grafana to an Appwrite native PostgreSQL database as a data source and build dashboards. Create a read-only reporting role, configure the PostgreSQL data source with TLS, and provision it from YAML.",
		"excerpt": "An Appwrite native PostgreSQL database exposes a standard managed PostgreSQL 18 or 17 engine, so Grafana connects to it through the built-in **PostgreSQL data source** with no Appwrite-specific configuration. Point the data source at your database hostname, authenticate with a read-only reporting role, and query your tables to build dashboards and alerts. You'll need a native PostgreSQL database in a state and its credentials. In the Console, open the database and click **Credentials**. Use the **Details** tab for individual values,…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Grafana"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/laravel",
		"title": "Laravel",
		"description": "Use Laravel and Eloquent with an Appwrite native PostgreSQL database. Configure the connection, run migrations against the direct port, and pool serverless traffic through the connection pooler.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so Laravel works against it with no Appwrite-specific configuration. Point the connection in at the credentials from the Connections page, then use Eloquent, the query builder, migrations, and queues as you would against any PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. See PostgreSQL databases to create one. To retrieve credentials, open the database in the Console, click **Credentials**, and use the **Details**, **DSN**, **.env**,…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Laravel"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/metabase",
		"title": "Metabase",
		"description": "Connect Metabase to an Appwrite native PostgreSQL database for analytics. Use a read-only PostgreSQL role, configure SSL, and build dashboards on a session-safe connection.",
		"excerpt": "Appwrite's native PostgreSQL database is a standard PostgreSQL engine, so Metabase can connect to it without an Appwrite-specific adapter. Add the database in Metabase, point it at the host from the Connections page, and Metabase will sync the schema so your team can build questions and dashboards. You'll need a native PostgreSQL database in a state and its credentials. In the Console, open the database and click **Credentials**. Copy the individual values from the **Details** tab, or use the **DSN**,…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Metabase"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/nextjs",
		"title": "Next.js",
		"description": "Connect a Next.js App Router application to an Appwrite native PostgreSQL database from Route Handlers, Server Actions, and Server Components, pool from serverless, and fall back to the SQL API on the Edge runtime.",
		"excerpt": "An Appwrite native PostgreSQL database works with standard PostgreSQL drivers and ORMs, so a Next.js App Router application can query it from server-side code. Point your driver at the connection string from the Connections page and keep all database access on the server. You'll need a native PostgreSQL database in a state and its credentials. See PostgreSQL to create one and Connections to retrieve the connection string. The primary user is , and Appwrite generates the database name for each…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Next.js"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/prisma",
		"title": "Prisma",
		"description": "Use Prisma ORM with an Appwrite native PostgreSQL database. Configure the Prisma 7 datasource, run migrations through the direct connection, and route serverless runtime traffic through the connection pooler.",
		"excerpt": "Prisma ORM works with Appwrite's native PostgreSQL database as a standard PostgreSQL target. Configure Prisma with the connection string from Appwrite, run Prisma Migrate against the direct database connection, and use Prisma Client from your application code. You'll need a native PostgreSQL database in a state and its credentials. Open the database in the Console and click **Credentials** to copy values from the **Details**, **DSN**, **.env**, **Prisma**, **Drizzle**, or **psql** tabs. You can also call from the Appwrite API to…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Prisma"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/rails",
		"title": "Rails",
		"description": "Use Ruby on Rails and ActiveRecord with an Appwrite native PostgreSQL database. Configure database.yml, run migrations against the direct database port, and size the ActiveRecord pool.",
		"excerpt": "A native PostgreSQL database is a standard PostgreSQL engine, so Ruby on Rails works against it through ActiveRecord with no Appwrite-specific configuration. Point at the connection details from the Connections page and use ActiveRecord, migrations, and the rest of the Rails toolchain exactly as you would against any PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. In the Appwrite Console, open the database and click **Credentials**. Use the **Details** tab for individual values, or…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Rails"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/retool",
		"title": "Retool",
		"description": "Connect Retool to an Appwrite native PostgreSQL database to build internal and admin tools. Retrieve credentials from the Console, configure the PostgreSQL resource with TLS, and allow Retool Cloud network access when needed.",
		"excerpt": "An Appwrite native PostgreSQL database exposes a standard PostgreSQL connection, so Retool connects to it through the built-in **PostgreSQL** resource. Use the database hostname, generated database name, and credentials from Appwrite, then build queries, tables, and forms in Retool for dashboards and admin panels. You'll need a native PostgreSQL database in a state and permission to create resources in Retool. In the Appwrite Console, open the database and click **Credentials**. Use the **Details** tab for individual values, or copy a…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Retool"
		]
	},
	{
		"slug": "products/databases/postgresql/integrations/spring-boot",
		"title": "Spring Boot",
		"description": "Connect a Spring Boot application to an Appwrite native PostgreSQL database with Spring Data JPA and Hibernate. Configure the JDBC datasource and HikariCP pool, map entities, and run Flyway or Liquibase migrations against PostgreSQL.",
		"excerpt": "An Appwrite native PostgreSQL database is a standard PostgreSQL engine, so a Spring Boot application connects to it through the PostgreSQL JDBC driver with no Appwrite-specific runtime configuration. Point at the JDBC URL from your database credentials, size the built-in HikariCP pool, and use Spring Data JPA, Hibernate, Flyway, or Liquibase as you would with any managed PostgreSQL server. You'll need a native PostgreSQL database in a state and its credentials. In the Appwrite Console, open the database and click…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"integrations",
			"Spring Boot"
		]
	},
	{
		"slug": "products/databases/postgresql/maintenance",
		"title": "Maintenance",
		"description": "Maintenance windows, online engine version upgrades, pause and resume, and the lifecycle states of your PostgreSQL database.",
		"excerpt": "Appwrite manages the infrastructure around your database: security patches, engine upgrades, and instance health. This page covers the controls you have over when and how that maintenance happens. Maintenance window Routine maintenance that can briefly affect the database runs inside a weekly window that you choose. Set it under **Settings** > **Maintenance** in the Console by picking a day and start hour (UTC), or through the API: accepts through , and accepts to . Engine version upgrades You can upgrade…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Maintenance"
		]
	},
	{
		"slug": "products/databases/postgresql/monitoring",
		"title": "Monitoring",
		"description": "Watch compute, connections, storage, and workload metrics live, inspect active connections, and check database health on your PostgreSQL database.",
		"excerpt": "Every native database ships with built-in observability: live metrics in the Console, an active-connections inspector, and programmatic health checks. There is nothing to install; metrics collection runs next to the database. Monitor tab Open your database and select the **Monitor** tab. The view is organized into sections: - **Overview**: key health indicators at a glance, including connection usage against your limit, storage used, cache hit ratio, uptime, and commit/rollback counts - **Compute**: CPU and memory usage over time - **Connections**:…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Monitoring"
		]
	},
	{
		"slug": "products/databases/postgresql/network-security",
		"title": "Network security",
		"description": "TLS by default, IP allowlists, and idle timeouts for your PostgreSQL database.",
		"excerpt": "Every native database is reachable through a unique public hostname, secured with TLS, and protected by network controls that you configure per database. Hostname Each database gets a stable hostname in the form: The hostname does not change for the lifetime of the database, across restarts, resizes, failovers, and version upgrades. You can copy it from the Console credentials dialog or the database response. TLS Connections on Appwrite Cloud are encrypted with TLS, terminated at Appwrite's edge and forwarded to…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Network security"
		]
	},
	{
		"slug": "products/databases/postgresql/quick-start",
		"title": "Quick start",
		"description": "Create your first native PostgreSQL database in the Appwrite Console, run your first queries in the SQL editor, and connect with psql.",
		"excerpt": "You can create a PostgreSQL database and run your first query in a few minutes. Create a database 1. In your project, go to **Databases**. 2. Click **Create database**. 3. Give your database a name, and optionally a custom database ID. 4. Under **Choose database type**, select **PostgreSQL** from the **Native databases** group. 5. Under **Specifications**, select your preferred tier. 6. Optionally configure **Read replicas** and **Point-in-time recovery (PITR)**. You can change both later. 7. Review the database summary and…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Quick start"
		]
	},
	{
		"slug": "products/databases/postgresql/scaling",
		"title": "Scaling",
		"description": "Resize the compute specification of your PostgreSQL database with zero downtime and grow storage automatically as your data grows.",
		"excerpt": "Native databases scale in two dimensions: the compute specification (CPU, memory, and connection limit) and storage. Both can change after creation, without dump-and-restore migrations. List available specifications Each database runs against a specification that defines its CPU, memory, included storage, and maximum connections. List the specifications available to your plan: Change the compute specification To resize in the Console, open your database, go to **Settings** > **Compute**, and select the new tier. From the API, pass the new specification ID:…",
		"breadcrumbs": [
			"Databases",
			"PostgreSQL",
			"Scaling"
		]
	},
	{
		"slug": "products/databases/tablesdb",
		"title": "TablesDB",
		"description": "Store and query structured data with Appwrite TablesDB. Tables provide performant and scalable storage for your application, business, and user data.",
		"excerpt": "Appwrite Databases let you store and query structured data. Databases provide high-performance and scalable data storage for your key application, business, and user data. Databases store data, if you need to store files like images, PDFs or videos, use Appwrite Storage. You can organize data into databases, tables, and rows. You can also paginate, order, and query rows. For complex business logic, Appwrite supports relationships to help you model your data. Quick start",
		"breadcrumbs": ["Databases", "TablesDB"]
	},
	{
		"slug": "products/databases/tablesdb/ai-suggestions",
		"title": "AI suggestions",
		"description": "Use AI suggestions to automatically generate database schemas. Learn how to create tables with recommended columns and indexes based on your table name and context.",
		"excerpt": "AI suggestions generate columns and indexes for your tables based on the table name, existing database structure, and optional context you provide. This feature analyzes your database to recommend appropriate schema designs that follow best practices. Navigate to **Databases** in the Appwrite Console, select your database, and click **Create table**. Enter a descriptive table name. AI suggestions will use this name to generate relevant columns and indexes. In the table creation dialog, enable **AI suggestions**. Optionally, provide additional context about…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"AI suggestions"
		]
	},
	{
		"slug": "products/databases/tablesdb/atomic-numeric-operations",
		"title": "Atomic numeric operations",
		"description": "Safely increment and decrement numeric fields without race conditions. Perfect for counters, quotas, inventory, and usage metrics in high-concurrency applications.",
		"excerpt": "Atomic numeric operations allow you to safely increase or decrease numeric fields without fetching the full row. This eliminates race conditions and reduces bandwidth usage when updating any numeric values that need to be modified atomically, such as counters, scores, balances, and other fast-moving numeric data. These operations work with , , and columns. Use columns when your counters or accumulators may exceed the 32-bit integer range. How atomic operations work Instead of the traditional read-modify-write pattern, atomic numeric operations…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Atomic numeric operations"
		]
	},
	{
		"slug": "products/databases/tablesdb/backups",
		"title": "Backups",
		"description": "Learn how to efficiently back up your databases on Appwrite Cloud, ensuring data security and seamless recovery.",
		"excerpt": "Appwrite Backups enable seamless, **encrypted** database backups on Cloud. All backups are **hot** backups, ensuring zero downtime and fast recovery. Learn how to efficiently back up your databases to ensure data security and smooth recovery. Appwrite Backups allow you to automate database backups using backup policies, supporting pre-defined, custom retention & other options. You can also create manual backups whenever necessary. Backup policies Backup policies allow you to automate your backup process. The Enterprise plan allows for more customization and…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Backups"
		]
	},
	{
		"slug": "products/databases/tablesdb/bulk-operations",
		"title": "Bulk operations",
		"description": "Perform bulk operations on rows within your tables for efficient data handling.",
		"excerpt": "Appwrite Databases supports bulk operations for rows, allowing you to create, update, or delete multiple rows in a single request. This can significantly improve performance for apps as it allows you to reduce the number of API calls needed while working with large data sets. Bulk operations can only be performed via the server-side SDKs. The client-side SDKs do not support bulk operations by design to prevent abuse and protect against unexpected costs. This ensures that only trusted server environments…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Bulk operations"
		]
	},
	{
		"slug": "products/databases/tablesdb/csv-exports",
		"title": "CSV exports",
		"description": "Export table data to CSV files from the Console. Share clean datasets with your team without writing custom scripts.",
		"excerpt": "Appwrite's CSV Export feature allows you to export rows from a table to a CSV file. This is especially useful for reporting, sharing data with non-technical team members, creating custom backups, or handing off datasets to analytics tools. This feature is available in both Appwrite Cloud and the self-hosted version. Export configuration Before exporting, you can configure several options to control the output format and contents. These settings ensure you get exactly the data you need in the format your…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"CSV exports"
		]
	},
	{
		"slug": "products/databases/tablesdb/csv-imports",
		"title": "CSV imports",
		"description": "Master row imports with Appwrite's CSV Import feature. Learn how to create rows within your tables by uploading a CSV file.",
		"excerpt": "Appwrite's CSV Import feature allows you to create multiple rows in a table by uploading a single CSV file. This is especially useful for importing existing data, seeding test environments, or migrating from other systems. This feature is available in both Appwrite Cloud and the self-hosted version. Prepare your table To get started, create a table in your database and define its columns. Your CSV file must match the structure of this table. All required columns must be present in…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"CSV imports"
		]
	},
	{
		"slug": "products/databases/tablesdb/databases",
		"title": "Databases",
		"description": "Dive deeper into Appwrite Databases and their configuration. Learn how to create, manage, and optimize multiple databases for your application.",
		"excerpt": "Databases are the largest organizational unit in Appwrite. Each database contains a group of tables. In future versions, different databases may be backed by a different database technology of your choosing. Create in Console The easiest way to create a database using the Appwrite Console. You can create a database by navigating to the **Databases** page and clicking **Create database**. Create using Server SDKs You can programmatically create databases using a Server SDK. Appwrite Server SDKs require an API key.",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Databases"
		]
	},
	{
		"slug": "products/databases/tablesdb/geo-queries",
		"title": "Geo queries",
		"description": "Query geographic data with distance, intersects, overlaps, and other location-based operations using spatial columns.",
		"excerpt": "Geo queries let you perform location-based operations on geographic data stored in your database. Find nearby locations, check if coordinates fall within boundaries, calculate distances between points, and more. Appwrite supports geo queries through spatial columns that store coordinates, shapes, and areas as first-class data types. In database terminology, these could also be known as **spatial queries**. Coordinates are specified as arrays. Distance measurements can be specified in meters or degrees. Use cases Use geo queries for location-based features: -…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Geo queries"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/atomic-numeric-operations",
		"title": "Atomic numeric operations",
		"description": "Safely increment and decrement numeric fields without race conditions. Perfect for counters, quotas, inventory, and usage metrics in high-concurrency applications.",
		"excerpt": "Atomic numeric operations allow you to safely increase or decrease numeric fields without fetching the full document. This eliminates race conditions and reduces bandwidth usage when updating any numeric values that need to be modified atomically, such as counters, scores, balances, and other fast-moving numeric data. How atomic operations work Instead of the traditional read-modify-write pattern, atomic numeric operations use dedicated methods to modify values directly on the server. The server applies the change atomically under concurrency control and returns…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Atomic numeric operations"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/bulk-operations",
		"title": "Bulk operations",
		"description": "Perform bulk operations on documents within your collections for efficient data handling.",
		"excerpt": "Appwrite Databases supports bulk operations for documents, allowing you to create, update, or delete multiple documents in a single request. This can significantly improve performance for apps as it allows you to reduce the number of API calls needed while working with large data sets. Bulk operations can only be performed via the server-side SDKs. The client-side SDKs do not support bulk operations by design to prevent abuse and protect against unexpected costs. This ensures that only trusted server environments…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Bulk operations"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/collections",
		"title": "Collections",
		"description": "Organize your data with Appwrite Collections. Explore how to create and configure collections to store and structure your data effectively.",
		"excerpt": "Appwrite uses collections as containers of documents. Each collection contains many documents identical in structure. The terms collections and documents are used because the Appwrite JSON REST API resembles the API of a traditional NoSQL database, making it intuitive and user-friendly, even though Appwrite uses SQL under the hood. That said, Appwrite is designed to support both SQL and NoSQL database adapters like MariaDB, MySQL, or MongoDB in future versions. Create collection You can create collections using the Appwrite Console,…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Collections"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/databases",
		"title": "Databases",
		"description": "Dive deeper into Appwrite Databases and their configuration. Learn how to create, manage, and optimize multiple databases for your application.",
		"excerpt": "Databases are the largest organizational unit in Appwrite. Each database contains a group of collections. In future versions, different databases may be backed by a different database technology of your choosing. Create in Console The easiest way to create a database using the Appwrite Console. You can create a database by navigating to the **Databases** page and clicking **Create database**. Create using Server SDKs You can programmatically create databases using a Server SDK. Appwrite Server SDKs require an API key.",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Databases"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/documents",
		"title": "Documents",
		"description": "Master document management with Appwrite Databases. Learn how to create, update, and query documents within your collections for dynamic data storage.",
		"excerpt": "Each piece of data or information in Appwrite Databases is a document. Documents have a structure defined by the parent collection. Create documents You must grant **create** permissions to users at the **collection level** before users can create documents. Learn more about permissions In most use cases, you will create documents programmatically. During testing, you might prefer to create documents in the Appwrite Console. To do so, navigate to the **Documents** tab of your collection and click the **Add document**…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Documents"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/order",
		"title": "Order",
		"description": "Understand how to do data ordering in Appwrite Databases. Learn how to order and sort your database records for efficient data retrieval.\"",
		"excerpt": "You can order results returned by Appwrite Databases by using an order query. For best performance, create an index on the column you plan to order by. Ordering one column When querying using the listDocuments endpoint, you can specify the order of the documents returned using the and query methods. Multiple columns To sort based on multiple attributes, simply provide multiple query methods. For better performance, create an index on the first attribute that you order by. In the example…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Order"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/pagination",
		"title": "Pagination",
		"description": "Implement pagination for large data sets in Appwrite Databases. Explore techniques for splitting and displaying data across multiple pages.",
		"excerpt": "As your database grows in size, you'll need to paginate results returned. Pagination improves performance by returning a subset of results that match a query at a time, called a page. By default, list operations return 25 items per page, which can be changed using the operator. There is no hard limit on the number of items you can request. However, beware that **large pages can degrade performance**. Offset pagination Offset pagination works by dividing documents into pages containing documents.…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Pagination"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/permissions",
		"title": "Database permissions",
		"description": "Enhance data security and access control with Appwrite Database Permissions. Learn how to set permissions and access rules for your database collections",
		"excerpt": "Permissions define who can access documents in a collection. By default **no permissions** are granted to any users, so no user can access any documents. Permissions exist at two levels, collection level and document level permissions. In Appwrite, permissions are **granted**, meaning a user has no access by default and receive access when granted. A user with access granted at either collection level or document level will be able to access a document. Users **don't need access at both levels**…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Database permissions"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/queries",
		"title": "Queries",
		"description": "Harness the power of querying with Appwrite Databases. Discover various query options, filtering, sorting, and advanced querying techniques.",
		"excerpt": "Many list endpoints in Appwrite allow you to filter, sort, and paginate results using queries. Appwrite provides a common set of syntax to build queries. Query class Appwrite SDKs provide a class to help you build queries. The class has methods for each type of supported query operation. Building queries Queries are passed to an endpoint through the parameter as an array of query strings, which can be generated using the class. Each query method is logically separated via operations.…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Queries"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/quick-start",
		"title": "Start with Databases",
		"description": "Get started with Appwrite Databases. Follow a step-by-step guide to create your first database, define collections, and perform basic data operations.",
		"excerpt": "Head to your Appwrite Console and create a database and name it . Optionally, add a custom database ID. Create a collection and name it . Optionally, add a custom collection ID. Navigate to **Attributes** and create attributes by clicking **Create attribute** and select **String**. Attributes define the structure of your collection's documents. Enter **Attribute key** and **Size**. For example, and . Navigate to **Settings** > **Permissions** and add a new role **Any**. Check the **CREATE** and **READ** permissions, so…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Start with Databases"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/relationships",
		"title": "Relationships",
		"description": "Manage complex data relationships with Appwrite Databases. Discover how to define and work with relationships between documents for interconnected data.",
		"excerpt": "Relationships describe how documents in different collections are associated, so that related documents can be read, updated, or deleted together. Entities in real-life often associate with each other in an organic and logical way, like a person and their dog, an album and its songs, or friends in a social network. These types of association between entities can be modeled in Appwrite using relationships. Relationship Attributes Relationships are represented in a collection using **relationship attributes**. The relationship attribute contains the…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Relationships"
		]
	},
	{
		"slug": "products/databases/tablesdb/legacy/type-generation",
		"title": "Type generation",
		"description": "Generate types from your Appwrite database schema. Learn how to use the Appwrite CLI to create and manage your types effectively.",
		"excerpt": "The Appwrite CLI provides a simple way to generate types based on your Appwrite database schema. This feature is particularly useful for developers who want to ensure type safety in their applications by generating type definitions that match their database collections and attributes. To generate types, the CLI reads the database schema from your project's file and generates type definitions for each collection. Generating types First, ensure you have the Appwrite CLI installed and your project is initialised. Then, run…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"legacy",
			"Type generation"
		]
	},
	{
		"slug": "products/databases/tablesdb/offline",
		"title": "Offline sync",
		"description": "Enable offline synchronization of data between your apps and Appwrite Databases.",
		"excerpt": "Offline synchronization (or offline sync) is a mechanism that allows apps to store and update data locally when a user is offline (i.e., loses internet connectivity), and then synchronize that data with an Appwrite database once the user is back online. This capability is crucial for building resilient and responsive applications, especially in environments with unreliable or intermittent internet connectivity. Suppose you are driving from one city to another and lose internet connectivitity while passing through a rural area, locally-downloaded…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Offline sync"
		]
	},
	{
		"slug": "products/databases/tablesdb/operators",
		"title": "Operators",
		"description": "Update multiple fields atomically without fetching the full row. Perform numeric, array, string, and date updates in a single, consistent workflow.",
		"excerpt": "Database operators let you update fields directly on the server without fetching the full row. Instead of sending new values, you describe the action you want: increment, append, replace, or adjust. This eliminates race conditions and reduces bandwidth usage when updating any values that need to be modified atomically. The operation is applied atomically at the storage layer for safe, concurrent updates. - Atomic by field: Each operation is applied safely at the storage layer to prevent lost updates under…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Operators"
		]
	},
	{
		"slug": "products/databases/tablesdb/order",
		"title": "Order",
		"description": "Understand how to do data ordering in Appwrite Databases. Learn how to order and sort your database records for efficient data retrieval.",
		"excerpt": "You can order results returned by Appwrite Databases by using an order query. For best performance, create an index on the column you plan to order by. Ordering one column When querying using the listRows endpoint, you can specify the order of the rows returned using the and query methods. Multiple columns To sort based on multiple columns, simply provide multiple query methods. For better performance, create an index on the first column that you order by. In the example…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Order"
		]
	},
	{
		"slug": "products/databases/tablesdb/pagination",
		"title": "Pagination",
		"description": "Implement pagination for large data sets in Appwrite Databases. Explore techniques for splitting and displaying data across multiple pages.",
		"excerpt": "As your database grows in size, you'll need to paginate results returned. Pagination improves performance by returning a subset of results that match a query at a time, called a page. By default, list operations return 25 items per page, which can be changed using the operator. There is no hard limit on the number of items you can request. However, beware that **large pages can degrade performance**. Offset pagination Offset pagination works by dividing rows into pages containing rows.…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Pagination"
		]
	},
	{
		"slug": "products/databases/tablesdb/permissions",
		"title": "Database permissions",
		"description": "Enhance data security and access control with Appwrite Database Permissions. Learn how to set permissions and access rules for your database tables",
		"excerpt": "Permissions define who can access rows in a table. By default **no permissions** are granted to any users, so no user can access any rows. Permissions exist at two levels, table level and row level permissions. In Appwrite, permissions are **granted**, meaning a user has no access by default and receive access when granted. A user with access granted at either table level or row level will be able to access a row. Users **don't need access at both levels**…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Database permissions"
		]
	},
	{
		"slug": "products/databases/tablesdb/queries",
		"title": "Queries",
		"description": "Harness the power of querying with Appwrite tablesDB. Discover various query options, filtering, sorting, and advanced querying techniques.",
		"excerpt": "Many list endpoints in Appwrite allow you to filter, sort, and paginate results using queries. Appwrite provides a common set of syntax to build queries. Query class Appwrite SDKs provide a class to help you build queries. The class has methods for each type of supported query operation. Building queries Queries are passed to an endpoint through the parameter as an array of query strings, which can be generated using the class. Each query method is logically separated via operations.…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Queries"
		]
	},
	{
		"slug": "products/databases/tablesdb/quick-start",
		"title": "Start with Databases",
		"description": "Get started with Appwrite Databases. Follow a step-by-step guide to create your first database, define tables, and perform basic data operations.",
		"excerpt": "Head to your Appwrite Console and create a database and name it . Optionally, add a custom database ID. Create a table and name it . Optionally, add a custom table ID. Navigate to **Columns** and create columns by clicking **Create column** and select **Text**. Columns define the structure of your table's rows. Enter **Column key** and **Size**. For example, and . Navigate to **Settings** > **Permissions** and add a new role **Any**. Check the **CREATE** and **READ** permissions, so…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Start with Databases"
		]
	},
	{
		"slug": "products/databases/tablesdb/relationships",
		"title": "Relationships",
		"description": "Manage complex data relationships with Appwrite Databases. Discover how to define and work with relationships between rows for interconnected data.",
		"excerpt": "Relationships describe how rows in different tables are associated, so that related rows can be read, updated, or deleted together. Entities in real-life often associate with each other in an organic and logical way, like a person and their dog, an album and its songs, or friends in a social network. These types of association between entities can be modeled in Appwrite using relationships. Relationship columns Relationships are represented in a table using **relationship columns**. The relationship column contains the…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Relationships"
		]
	},
	{
		"slug": "products/databases/tablesdb/rows",
		"title": "Rows",
		"description": "Master row management with Appwrite Databases. Learn how to create, update, upsert, and query rows within your tables for dynamic data storage.",
		"excerpt": "Each piece of data or information in Appwrite Databases is a row. Rows have a structure defined by the parent table. Create rows You must grant _create_ permissions to users at the _table level_ before users can create rows. Learn more about permissions In most use cases, you will create rows programmatically. During testing, you might prefer to create rows in the Appwrite Console. To do so, navigate to the **Rows** tab of your table and click the **Add row**…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Rows"
		]
	},
	{
		"slug": "products/databases/tablesdb/tables",
		"title": "Tables",
		"description": "Organize your data with Appwrite Tables. Explore how to create and configure tables to store and structure your data effectively.",
		"excerpt": "Appwrite uses tables as containers of rows. Each tables contains many rows identical in structure. The terms tables and rows are used because the Appwrite JSON REST API resembles the API of a traditional NoSQL database, making it intuitive and user-friendly, even though Appwrite uses SQL under the hood. That said, Appwrite is designed to support both SQL and NoSQL database adapters like MariaDB, MySQL, or MongoDB in future versions. Create table You can create tables using the Appwrite Console,…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Tables"
		]
	},
	{
		"slug": "products/databases/tablesdb/timestamp-overrides",
		"title": "Timestamp overrides",
		"description": "Set custom $createdAt and $updatedAt timestamps for your rows when using server SDKs.",
		"excerpt": "When creating or updating rows, Appwrite automatically sets and timestamps. However, there are scenarios where you might need to set these timestamps manually, such as when migrating data from another system or backfilling historical records. To manually set and , you must use a **server SDK** with an **API key**. These columns can be passed inside the parameter on any of the create, update, or upsert routes (single or bulk). Setting custom timestamps You can override a row's timestamps by…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Timestamp overrides"
		]
	},
	{
		"slug": "products/databases/tablesdb/transactions",
		"title": "Transactions",
		"description": "Stage multiple database operations and commit them atomically. Group changes across databases and tables with ordering, isolation, and conflict detection.",
		"excerpt": "Transactions let you stage multiple database operations and apply them together, atomically. Use transactions to keep related changes consistent, even when they span multiple databases and tables. How transactions work 1. Call the createTransaction method to create a transaction. This will return a transaction model, including its ID. 2. Stage operations by passing the parameter to supported row, bulk, and atomic numeric methods. You can stage many operations at once with the createOperations method. 3. Call the updateTransaction method to…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Transactions"
		]
	},
	{
		"slug": "products/databases/tablesdb/type-generation",
		"title": "Type generation",
		"description": "Generate types from your Appwrite database schema. Learn how to use the Appwrite CLI to create and manage your types effectively.",
		"excerpt": "The Appwrite CLI provides a simple way to generate types based on your Appwrite database schema. This feature is particularly useful for developers who want to ensure type safety in their applications by generating type definitions that match their database tables and columns. To generate types, the CLI reads the database schema from your project's file and generates type definitions for each table. Generating types First, ensure you have the Appwrite CLI installed and your project is initialised. Then, run…",
		"breadcrumbs": [
			"Databases",
			"TablesDB",
			"Type generation"
		]
	},
	{
		"slug": "products/databases/vectorsdb",
		"title": "VectorsDB",
		"description": "Store vector embeddings and run similarity search with Appwrite VectorsDB to power semantic search, recommendations, and other AI features.",
		"excerpt": "Appwrite VectorsDB lets you store vector embeddings and run similarity search over them. A collection is created with a fixed , every document holds an vector of that length plus optional , and an HNSW index keeps similarity search fast as your data grows. Databases store data, if you need to store files like images, PDFs or videos, use Appwrite Storage. You organize data into databases, collections, and documents, the same way you do across Appwrite Databases. What sets VectorsDB…",
		"breadcrumbs": ["Databases", "VectorsDB"]
	},
	{
		"slug": "products/databases/vectorsdb/backups",
		"title": "Backups",
		"description": "Learn how to back up and restore your VectorsDB databases, ensuring data security and seamless recovery.",
		"excerpt": "Appwrite Backups enable seamless, **encrypted** database backups. All backups are **hot** backups, ensuring zero downtime and fast recovery. You manage backups from a database's **Backups** tab, where you can automate backups with policies or create manual backups on demand. A backup captures the database along with its collections, documents, and embeddings. Backup policies Backup policies automate your backups on a schedule. To create one, open your database's **Backups** tab and click **Create policy**, then choose a preset policy or add…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Backups"
		]
	},
	{
		"slug": "products/databases/vectorsdb/bulk-operations",
		"title": "Bulk operations",
		"description": "Perform bulk operations on documents within your collections for efficient data handling in Appwrite VectorsDB.",
		"excerpt": "Appwrite VectorsDB supports bulk operations for documents, allowing you to create, update, or delete multiple documents in a single request. This can significantly improve performance for apps as it allows you to reduce the number of API calls needed while working with large data sets. Bulk operations can only be performed via the server-side SDKs. The client-side SDKs do not support bulk operations by design to prevent abuse and protect against unexpected costs. This ensures that only trusted server environments…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Bulk operations"
		]
	},
	{
		"slug": "products/databases/vectorsdb/collections",
		"title": "Collections",
		"description": "Organize embeddings with Appwrite VectorsDB collections. Learn how to create collections with a fixed dimension, manage them, and configure permissions.",
		"excerpt": "Appwrite uses collections as containers of documents. A VectorsDB collection stores embeddings, so every collection is created with a fixed ****, the length of the embedding vectors it holds. All documents in the collection must use vectors of that exact length. Unlike TablesDB, you don't define a schema for a VectorsDB collection. The schema is fixed and provisioned for you when the collection is created: | Attribute | Type | Description | |--------------|----------|-----------------------------------------------------------------------------| | | | The embedding vector. Required,…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Collections"
		]
	},
	{
		"slug": "products/databases/vectorsdb/csv-exports",
		"title": "CSV exports",
		"description": "Export VectorsDB documents to a CSV file. Share embeddings and metadata as a portable dataset without writing custom scripts.",
		"excerpt": "Appwrite's CSV export feature lets you export documents from a VectorsDB collection to a CSV file. This is useful for reporting, sharing a dataset with your team, creating custom backups, or handing embeddings and their metadata off to other tools. Exported columns A VectorsDB collection has a fixed schema, so every export has the same shape. Each row carries the document's system fields together with the two collection attributes: | Column | Type | Description | |--------------|--------|--------------------------------------------------------------------------| | | string…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"CSV exports"
		]
	},
	{
		"slug": "products/databases/vectorsdb/csv-imports",
		"title": "CSV imports",
		"description": "Import embeddings into Appwrite VectorsDB by uploading a CSV file. Learn how to format the embeddings and metadata columns for a bulk import.",
		"excerpt": "Appwrite's CSV Import feature allows you to create multiple documents in a collection by uploading a single CSV file. This is especially useful for loading precomputed embeddings, seeding test environments, or migrating vectors from another system. Prepare your CSV A VectorsDB collection has a fixed schema, so every CSV maps to the same two columns: | Column | Type | Description | |--------------|----------|----------------------------------------------------------------------------------| | | | The embedding vector, written as a JSON array. Required, and its length must equal…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"CSV imports"
		]
	},
	{
		"slug": "products/databases/vectorsdb/databases",
		"title": "Databases",
		"description": "Dive deeper into Appwrite VectorsDB and database configuration. Learn how to create and manage multiple vector databases for your application.",
		"excerpt": "Databases are the largest organizational unit in Appwrite. Each database contains a group of collections. Shared and dedicated databases VectorsDB databases run on either shared or dedicated infrastructure. Shared databases run on infrastructure that Appwrite manages and scales for you. They are the fastest way to get started and you can create them from the Console or programmatically with a Server SDK. Dedicated databases run on infrastructure provisioned for your project alone. They can only be created from the Appwrite…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Databases"
		]
	},
	{
		"slug": "products/databases/vectorsdb/documents",
		"title": "Documents",
		"description": "Create, read, update, and delete documents in Appwrite VectorsDB. Learn how to store embedding vectors and metadata in your collections.",
		"excerpt": "Each piece of data in Appwrite VectorsDB is a document. A document's data follows the fixed schema provisioned by its collection: an vector and an optional object. The array is required, and its length must equal the you set when creating the collection. The field is free-form JSON, so you can attach any data you want to keep alongside each vector. If the array is longer or shorter than the collection's , the request is rejected. The examples on this…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Documents"
		]
	},
	{
		"slug": "products/databases/vectorsdb/embeddings",
		"title": "Embeddings",
		"description": "Generate text embeddings with Appwrite VectorsDB. Turn text into vector embeddings with built-in models and store them in your documents for vector search.",
		"excerpt": "An embedding is a list of numbers that represents the meaning of a piece of text. VectorsDB can generate embeddings for you with built-in models, so you can turn text into vectors and store them in a collection without running a separate embedding service. The typical flow is two steps: generate an embedding from your text, then store that embedding in a document's field. Once stored, you can run vector search over your documents. Generate embeddings Use the method to…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Embeddings"
		]
	},
	{
		"slug": "products/databases/vectorsdb/order",
		"title": "Order",
		"description": "Order documents returned by Appwrite VectorsDB. Learn how to sort by system fields like $createdAt and $sequence, and why metadata sub-fields can't be ordered.",
		"excerpt": "You can order the documents returned by listDocuments using the and query methods. VectorsDB orders on the system fields that Appwrite maintains on every document, such as , , , and . A VectorsDB collection has a fixed schema: an vector and a object. Because is stored as a single JSON object rather than typed columns, you can't order by a value inside it. Ordering by a nested path like is rejected with . Order by the system fields below…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Order"
		]
	},
	{
		"slug": "products/databases/vectorsdb/pagination",
		"title": "Pagination",
		"description": "Implement pagination for large data sets in Appwrite VectorsDB. Explore techniques for splitting and displaying documents across multiple pages.",
		"excerpt": "As your collection grows in size, you'll need to paginate the documents returned. Pagination improves performance by returning a subset of documents that match a query at a time, called a page. By default, list operations return 25 documents per page, which can be changed using the query method. There is no hard limit on the number of documents you can request. However, beware that **large pages can degrade performance**. Offset pagination Offset pagination divides documents into pages of documents…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Pagination"
		]
	},
	{
		"slug": "products/databases/vectorsdb/permissions",
		"title": "Database permissions",
		"description": "Control access to your VectorsDB data with permissions. Learn how to set collection level and document level access rules.",
		"excerpt": "Permissions define who can access documents in a collection. By default **no permissions** are granted to any users, so no user can access any documents. Permissions exist at two levels, collection level and document level permissions. In Appwrite, permissions are **granted**, meaning a user has no access by default and receives access when granted. A user with access granted at either collection level or document level will be able to access a document. Users **don't need access at both levels**…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Database permissions"
		]
	},
	{
		"slug": "products/databases/vectorsdb/queries",
		"title": "Queries",
		"description": "Filter VectorsDB documents by their metadata using the Query class. Discover comparison, string, logical, ordering, and pagination operators.",
		"excerpt": "Many list endpoints in Appwrite allow you to filter, sort, and paginate results using queries. Appwrite provides a common set of syntax to build queries. In VectorsDB, every document stores an vector and an optional object. The queries on this page filter documents by the fields inside that object. To rank documents by vector similarity instead, see vector search. Query class Appwrite SDKs provide a class to help you build queries. The class has methods for each type of supported…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Queries"
		]
	},
	{
		"slug": "products/databases/vectorsdb/quick-start",
		"title": "Start with VectorsDB",
		"description": "Get started with Appwrite VectorsDB. Follow a step-by-step guide to create your first database, add a collection with a fixed dimension, store embeddings with metadata, and read them back.",
		"excerpt": "VectorsDB stores embedding vectors so you can build features like semantic search, recommendations, and retrieval for AI applications. This guide walks through creating a database, adding a collection with a fixed , storing a document with its and , and reading it back. These steps use a Server SDK, which requires an API key. Head to your Appwrite Console and click **Create database**. Name it and choose **VectorsDB** as the database type. Optionally, add a custom database ID. Select your…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Start with VectorsDB"
		]
	},
	{
		"slug": "products/databases/vectorsdb/timestamp-overrides",
		"title": "Timestamp overrides",
		"description": "Set custom $createdAt and $updatedAt timestamps for your documents when using server SDKs.",
		"excerpt": "When creating or updating documents, Appwrite automatically sets and timestamps. However, there are scenarios where you might need to set these timestamps manually, such as when migrating data from another system or backfilling historical records. To manually set and , you must use a **server SDK** with an **API key**. These attributes can be passed inside the parameter on any of the create, update, or upsert routes (single or bulk). Setting custom timestamps You can override a document's timestamps by…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Timestamp overrides"
		]
	},
	{
		"slug": "products/databases/vectorsdb/transactions",
		"title": "Transactions",
		"description": "Stage multiple VectorsDB operations and commit them atomically. Group changes across databases and collections with ordering, isolation, and conflict detection.",
		"excerpt": "Transactions let you stage multiple database operations and apply them together, atomically. Use transactions to keep related changes consistent, even when they span multiple databases and collections. How transactions work 1. Call the createTransaction method to create a transaction. This will return a transaction model, including its ID. 2. Stage operations by passing the parameter to supported document, bulk, and atomic numeric methods. You can stage many operations at once with the createOperations method. 3. Call the updateTransaction method to…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Transactions"
		]
	},
	{
		"slug": "products/databases/vectorsdb/vector-search",
		"title": "Vector search",
		"description": "Run similarity search over your documents with Appwrite VectorsDB. Create an HNSW index on the embeddings field and rank documents by cosine, dot product, or Euclidean distance.",
		"excerpt": "Vector search finds the documents whose are closest to a query vector. Instead of matching exact values, it ranks documents by similarity, so you can build features like semantic search, recommendations, and retrieval for AI applications. There are two steps: create an index on the field so searches are fast, then pass a vector query to to get documents ranked by similarity. Create an index Before you search, create an HNSW index on the field with . HNSW (Hierarchical Navigable…",
		"breadcrumbs": [
			"Databases",
			"VectorsDB",
			"Vector search"
		]
	},
	{
		"slug": "products/domains",
		"title": "Domains",
		"description": "Register, transfer, and manage domains with Appwrite. Buy domains, configure DNS, and connect them to Sites, Functions, and APIs from your organization.",
		"excerpt": "Appwrite **Domains** is organization-level domain management on Appwrite Cloud. You can register new names, transfer existing registrations, delegate DNS for domains you own elsewhere, and connect hostnames to Sites, Functions, and custom API endpoints. Appwrite acts as your registrar for purchases and transfers. Billing, renewal, and registrant details are tied to your organization. You can also change organization to move a domain between orgs you control without transferring registration away from Appwrite. How it works Domain setup on Appwrite has…",
		"breadcrumbs": [
			"Domains",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/domains/change-organization",
		"title": "Change organization",
		"description": "Reassign a domain from one Appwrite organization to another. This is not a registrar transfer.",
		"excerpt": "You can reassign a domain to a different Appwrite organization from the domain **Settings** tab. The domain keeps its DNS zone and registration state. Only which organization owns the domain in the Console changes. **Change organization** updates which Appwrite organization manages the domain. It does not move registration to or from Appwrite at the registry. For that, use Transfer a domain. Before you change organization - You must be a member of both the source and destination organizations. - The…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Change organization"
		]
	},
	{
		"slug": "products/domains/connect",
		"title": "Connect to products",
		"description": "Connect apex domains and subdomains to Appwrite Sites, Functions, and custom API endpoints. Covers DNS methods, verification, and multi-product layouts.",
		"excerpt": "Custom domains on Appwrite work in two layers: 1. **Organization domain** (apex zone, for example ) proves your organization controls the name and can host its DNS zone. 2. **Product domain** (any hostname, for example or ) is a proxy rule that routes HTTPS traffic to a Site, Function, or project API. This guide walks through apex vs subdomain setup, what to configure in each product, and how organization **Domains** fits together with project-level **Add domain** flows. Before you connect…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Connect to products"
		]
	},
	{
		"slug": "products/domains/delete",
		"title": "Delete a domain",
		"description": "Remove a domain and its DNS zone from Appwrite, including bulk delete from the organization list.",
		"excerpt": "Deleting a domain removes it from your organization and deletes all DNS records Appwrite hosted for that zone. This action cannot be undone. This guide covers single and bulk delete and what happens for Appwrite-registered versus external domains. Before you delete - Update or remove product connections (Sites, Functions, API custom domains) that use the hostname. - For **external domains**, plan nameserver changes at your registrar if DNS should continue elsewhere. Deleting in Appwrite does not cancel registration at your…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Delete a domain"
		]
	},
	{
		"slug": "products/domains/dns",
		"title": "DNS records",
		"description": "Learn how DNS zones work for organization domains in Appwrite, including record types and locked entries.",
		"excerpt": "When a domain is verified with Appwrite nameservers, Appwrite hosts the authoritative DNS zone for that domain. The zone contains all records for that domain and is managed under **Organization** > **Domains**. This applies to Appwrite-registered domains and external domains alike. For platform-wide DNS behavior (apex domains, CNAME flattening, TLS), see Appwrite DNS service. Zones and verification A verified domain uses Appwrite nameservers ( and ). The **Records** tab on the domain shows the full zone Appwrite serves. Until verification…",
		"breadcrumbs": [
			"Domains",
			"Concepts",
			"DNS records"
		]
	},
	{
		"slug": "products/domains/external",
		"title": "Add external domain",
		"description": "Add a domain registered with another registrar and delegate DNS to Appwrite without moving registration.",
		"excerpt": "If you already registered a domain elsewhere, you can add it to Appwrite and delegate DNS without transferring registration. The Console shows an external registrar for these domains. Appwrite manages DNS once nameservers are verified. This guide walks you through adding the domain, updating nameservers, and restoring DNS records. Add a domain 1. Open **Domains** in your organization. 2. Click **Add domain**. 3. Enter the domain name without a protocol (for example or ). 4. Click **Add domain** to create…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Add external domain"
		]
	},
	{
		"slug": "products/domains/manage-dns",
		"title": "Manage DNS records",
		"description": "Create, update, import, and filter DNS records for organization domains in Appwrite.",
		"excerpt": "You manage DNS records for verified organization domains from the domain **Records** tab. This guide covers day-to-day record operations, zone import, and email provider presets. For record types and locked entries, see DNS records. Open the records table 1. Open **Organization** > **Domains**. 2. Select a verified domain. 3. Open the **DNS Records** tab. The table lists all records in the zone, including locked records Appwrite created for network routing. Use search filters to narrow by type, name, or value.…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Manage DNS records"
		]
	},
	{
		"slug": "products/domains/presets",
		"title": "DNS presets",
		"description": "Add email provider DNS records to organization domains with one-click presets in Appwrite Cloud.",
		"excerpt": "**DNS presets** are curated record sets for common email providers. They add the MX (and in some cases TXT) records your provider expects at the apex of your domain (), so you can route mail without typing each record manually. Presets are available on verified organization domains where Appwrite hosts the DNS zone. They do not replace provider-specific setup such as domain verification TXT, DKIM, or DMARC. Add those records separately after applying a preset. For manual record operations, see…",
		"breadcrumbs": [
			"Domains",
			"Concepts",
			"DNS presets"
		]
	},
	{
		"slug": "products/domains/pricing",
		"title": "Pricing",
		"description": "Learn how Appwrite prices domain registration, transfers, and renewals, including premium names and registration periods.",
		"excerpt": "Appwrite quotes domain prices before you register or transfer a domain. Prices depend on the TLD, whether the name is premium, and the registration period required by the registry. Registration and transfer quotes When you search for a domain in the Console buy flow or start a transfer in, Appwrite fetches a price quote for each name. Quotes include: - **Price**: total cost for the quoted registration or transfer period (in your organization's billing currency). - **Available**: whether the name…",
		"breadcrumbs": [
			"Domains",
			"Concepts",
			"Pricing"
		]
	},
	{
		"slug": "products/domains/quick-start",
		"title": "Start with Domains",
		"description": "Register or add your first domain in Appwrite Cloud and verify DNS in a few steps.",
		"excerpt": "You can register a new domain or add one you already own in minutes. Both paths end with a verified domain in your organization that you can connect to Appwrite products. Open Domains 1. Sign in to Appwrite Cloud. 2. Select your organization. 3. Open **Domains** in the sidebar. If you do not see **Domains**, confirm your organization is on a Cloud plan that includes the feature. Register or add a domain Choose the path that matches how you want…",
		"breadcrumbs": [
			"Domains",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/domains/register",
		"title": "Register a domain",
		"description": "Search for available domain names and register them through Appwrite with transparent pricing and organization billing.",
		"excerpt": "You can register domain names directly from the Appwrite Console. Appwrite is the registrar for these domains: registration, renewal, and billing run through your organization. This guide walks you through search, checkout, and payment. Search 1. In your organization, open **Domains**. 2. Click **Buy domain**. 3. Enter a name in the search field. The wizard shows suggestions across many TLDs (for example , , , ). Prices load as results appear. Each result indicates whether the name is available, the…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Register a domain"
		]
	},
	{
		"slug": "products/domains/registration",
		"title": "Registration",
		"description": "Learn how domain registration works in Appwrite, including Appwrite-registered and external domains, organization scope, and verification.",
		"excerpt": "In Appwrite Domains, **registration** describes who holds the domain at the registry and how the domain is added to your organization. DNS management in Appwrite is separate from registration: you can delegate DNS to Appwrite for domains registered elsewhere. Domain types Appwrite distinguishes domains by how they are managed: | Type | How it is added | Registrar in Console | Auto-renewal | |------|-----------------|----------------------|--------------| | **Appwrite-registered** | Register or transfer in through Appwrite | Appwrite | Available | | **External**…",
		"breadcrumbs": [
			"Domains",
			"Concepts",
			"Registration"
		]
	},
	{
		"slug": "products/domains/renewal",
		"title": "Renewal",
		"description": "Learn how domain expiry, auto-renewal, and billing work for Appwrite-registered domains.",
		"excerpt": "Renewal applies to domains where **Appwrite is the registrar** (registered or transferred in through Appwrite). External domains renew at your external registrar. Appwrite does not charge renewal for those names. Expiry and renewal dates On the domain detail page and **Settings** tab, Appwrite shows: - **Expiry date**: when the current registration period ends if not renewed - **Renewal date**: when the next renewal cycle applies (aligned with registry data) Track these dates for domains with auto-renewal disabled. Auto-renewal Auto-renewal is…",
		"breadcrumbs": [
			"Domains",
			"Concepts",
			"Renewal"
		]
	},
	{
		"slug": "products/domains/transfer",
		"title": "Transfer a domain",
		"description": "Transfer domain registration into or out of Appwrite, including authorization codes, fees, and transfer status.",
		"excerpt": "You can transfer domain registration **into** Appwrite from another registrar and **out** to another registrar when the domain is registered with Appwrite. This guide covers transfer in, transfer status, and transfer out. To reassign a domain between Appwrite organizations without changing registrar, see Change organization. Transfer in Use transfer in when you want Appwrite to become the registrar for a domain you already own elsewhere. Before you start - Unlock the domain at your current registrar. - Request an **authorization…",
		"breadcrumbs": [
			"Domains",
			"Guides",
			"Transfer a domain"
		]
	},
	{
		"slug": "products/firewall",
		"title": "Firewall",
		"description": "Protect project APIs, Functions, and Sites with Appwrite Firewall. Create rules to deny, challenge, rate limit, redirect, or bypass matching traffic from the Console.",
		"excerpt": "Appwrite **Firewall** is project-level traffic control on Appwrite Cloud. You define rules that match requests by attributes such as IP address, hostname, path, HTTP method, headers, query parameters, user agent, or location, then apply an action before traffic reaches your API, Functions, or Sites. Rules live on each project under **Firewall**. You can scope them to the project API or to a specific function or site, preview how many recent requests would match, and monitor request volume alongside denied, rate-limited,…",
		"breadcrumbs": [
			"Firewall",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/firewall/actions",
		"title": "Actions",
		"description": "Learn Firewall actions in Appwrite: deny, bypass, challenge, rate limit, and redirect, including status codes and rate-limit behavior.",
		"excerpt": "When a request matches a rule's conditions, Appwrite applies the rule **action**. Only one action runs per request: evaluation stops at the first matching enabled rule (see Priority). There is no separate **Allow** action. Use **Bypass** to allowlist traffic that should skip later deny or rate limit rules. Available actions | Action | Client outcome | Usage metric | |--------|----------------|--------------| | **Deny** | with an access-denied error | | | **Bypass** | Request continues; later Firewall rules are skipped |…",
		"breadcrumbs": [
			"Firewall",
			"Concepts",
			"Actions"
		]
	},
	{
		"slug": "products/firewall/conditions",
		"title": "Conditions",
		"description": "Learn how Firewall conditions match requests by hostname, path, method, headers, query parameters, IP, client, and location in Appwrite.",
		"excerpt": "**Conditions** define which requests a Firewall rule matches. A rule must include **at least one** condition. Every condition on the rule must match for the rule to apply (logical AND). Incomplete conditions (operators that need a value but have an empty value) are not saved. The Console requires complete conditions before create or update. Attributes The condition builder groups attributes by what they describe: the request, the client, and the client's location. Request | Attribute | Matches | Typical use…",
		"breadcrumbs": [
			"Firewall",
			"Concepts",
			"Conditions"
		]
	},
	{
		"slug": "products/firewall/create",
		"title": "Create a rule",
		"description": "Create an Appwrite Firewall rule with resource scope, conditions, action, and priority from the Console wizard.",
		"excerpt": "You create Firewall rules from the project Console. The wizard collects scope, conditions, and action, and shows an impact preview before you save. This guide walks through the full create flow. Open the create wizard 1. Open your project. 2. Go to **Firewall**. 3. Optionally select the **API**, **Functions**, or **Sites** tab for the scope you want. 4. Click **Create rule**. The wizard opens fullscreen. Closing it returns you to the Firewall list for the same scope tab. Name and…",
		"breadcrumbs": [
			"Firewall",
			"Guides",
			"Create a rule"
		]
	},
	{
		"slug": "products/firewall/delete",
		"title": "Delete a rule",
		"description": "Remove an Appwrite Firewall rule from a project and understand the impact on traffic.",
		"excerpt": "Deleting a Firewall rule removes it from the project permanently. Matching traffic is no longer affected by that rule. This action cannot be undone. Before you delete - Confirm no other process depends on the rule (for example an allowlist bypass that protects a broad deny). - Prefer **disable** from Update a rule if you only need to pause the policy temporarily. Disabled rules still count toward plan limits. - Note the rule's priority and conditions if you might recreate…",
		"breadcrumbs": [
			"Firewall",
			"Guides",
			"Delete a rule"
		]
	},
	{
		"slug": "products/firewall/monitor",
		"title": "Monitor traffic",
		"description": "Use Firewall traffic overview and rule impact preview to understand how Appwrite Firewall handles project requests.",
		"excerpt": "Firewall includes a **traffic overview** on the project Firewall page and an **impact preview** while creating rules. Together they help you validate policies before and after you enable them. Traffic overview Open **Firewall** in your project. Above the rules list, the overview chart and metrics summarize recent traffic for the selected date range and interval. Series include: | Series | Source | Meaning | |--------|--------|---------| | **Passed** | Project request volume () | Overall requests in the window (not a…",
		"breadcrumbs": [
			"Firewall",
			"Guides",
			"Monitor traffic"
		]
	},
	{
		"slug": "products/firewall/priority",
		"title": "Priority",
		"description": "Learn how Appwrite Firewall evaluates rules by priority and first-match behavior.",
		"excerpt": "**Priority** controls the order in which enabled Firewall rules are evaluated. Lower numbers are evaluated first. Valid values range from to . The first matching enabled rule applies its action and evaluation stops for that request. How evaluation works 1. Appwrite loads **enabled** rules for the project, ordered by priority ascending (for example before ). 2. Rules that do not apply to the current resource scope are skipped. 3. For each remaining rule in order, Appwrite checks whether all conditions…",
		"breadcrumbs": [
			"Firewall",
			"Concepts",
			"Priority"
		]
	},
	{
		"slug": "products/firewall/quick-start",
		"title": "Start with Firewall",
		"description": "Create your first Appwrite Firewall rule and see how it affects project API traffic.",
		"excerpt": "You can protect a project API path or block a noisy IP in a few minutes. This quick start creates a deny rule scoped to the project **API**, then points you to traffic monitoring. Open Firewall 1. Sign in to Appwrite Cloud. 2. Open a project. 3. Open **Firewall** in the sidebar. If you do not see **Firewall**, confirm your Console profile includes the feature and that your role can view project navigation. Create a deny rule 1. Click **Create…",
		"breadcrumbs": [
			"Firewall",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/firewall/rules",
		"title": "Rules",
		"description": "Learn what Appwrite Firewall rules contain, how enabled state works, and how plan limits apply.",
		"excerpt": "A **Firewall rule** is a named policy that matches inbound requests and applies an action. Rules belong to a **project**. They are managed under **Project** > **Firewall**. What a rule contains | Field | Purpose | |-------|---------| | Name | Label shown in the rules list | | Description | Optional notes for your team | | Resource type | API, Functions, or Sites | | Resource ID | Required for Functions and Sites scopes | | Conditions | One…",
		"breadcrumbs": [
			"Firewall",
			"Concepts",
			"Rules"
		]
	},
	{
		"slug": "products/firewall/scopes",
		"title": "Resource scopes",
		"description": "Learn how Appwrite Firewall scopes rules to the project API, a Function, or a Site, and where each scope is enforced.",
		"excerpt": "Every Firewall rule has a **resource type** that limits which traffic the rule can match. Scopes keep API-wide policies separate from policies for a single function or site. Scope types | Resource type | Applies to | Resource ID | |---------------|------------|-------------| | **API** | Project Appwrite API traffic () | Not required (stored empty) | | **Functions** | Public/edge traffic for one function | Function ID required | | **Sites** | Public/edge traffic for one site | Site ID required…",
		"breadcrumbs": [
			"Firewall",
			"Concepts",
			"Resource scopes"
		]
	},
	{
		"slug": "products/firewall/update",
		"title": "Update a rule",
		"description": "Change an existing Appwrite Firewall rule's name, scope, conditions, action settings, priority, or enabled state.",
		"excerpt": "You can update Firewall rules from the rules list without recreating them. Changes apply to new requests after save. Historical metrics are not rewritten. Open update 1. Open **Firewall** in your project. 2. Select the **API**, **Functions**, or **Sites** tab that contains the rule. 3. Open the rule's actions menu and choose **Update**, or use the update action from the rule context menu. What you can change | Field | Notes | |-------|-------| | Name and description | Labels only;…",
		"breadcrumbs": [
			"Firewall",
			"Guides",
			"Update a rule"
		]
	},
	{
		"slug": "products/functions",
		"title": "Functions",
		"description": "Appwrite Functions is your gateway to scalable applications. Explore our complete guide to building and deploying serverless functions effortlessly.",
		"excerpt": "Appwrite Functions unlock limitless potential for developers to extend Appwrite with code snippets. Appwrite Functions are user-defined functions that can start small and scale big, deploying automatically from source control. These Functions can be triggered by HTTP requests, SDK methods, server events, webhooks, and scheduled executions. Each function will have its own URL, execute in its own isolated container, and have its own configurable environment variables and permissions. Getting started Appwrite Functions let you build anything you can imagine, but…",
		"breadcrumbs": [
			"Functions",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/functions/deploy-from-git",
		"title": "Deploy from Git",
		"description": "Learn to version and update your Appwrite Functions' code with deployments.",
		"excerpt": "Appwrite Functions are mini-applications in Appwrite with their own endpoints. Each function can have many deployments, which can be thought of as versions of the mini-application. Appwrite Functions can be automatically deployed from Git repositories, so you can track changes to your function's code naturally as a part of you development workflow. Create deployment The recommended way to manage your Appwrite Function deployments is to use a version control system, like Git. This offers simple versioning and collaboration that will…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Deploy from Git"
		]
	},
	{
		"slug": "products/functions/deploy-manually",
		"title": "Deploy manually",
		"description": "Learn to deploy Appwrite functions manually from the Appwrite CLI or the Appwrite Console.",
		"excerpt": "Appwrite Functions are mini-applications in Appwrite with their own endpoints. Each function can have many deployments, which can be thought of as versions of the mini-application. While we recommend you create deployments through automatic Git deployments, you can also create deployments manually or through the Appwrite CLI. CLI Configure CLI deployments If you need to target a different project, API endpoint, change the path or entry point of your function, or update any of the other configuration options, you can…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Deploy manually"
		]
	},
	{
		"slug": "products/functions/deployments",
		"title": "Deployments",
		"description": "Efficiently deploy your serverless functions with Appwrite. Explore deployment options, strategies, and best practices for seamless function execution.",
		"excerpt": "Each function can have many deployments, which can be thought of as versions of the mini-application. Functions can be created and deployed in different ways to meet your unique development habits. Deployment status Throughout the life cycle of a deployment, it could have the following status. * Status * description --- * * The deployment is built and currently activated and ready to be executed. A function can have one active deployment and deployment a must be active before being…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Deployments"
		]
	},
	{
		"slug": "products/functions/develop",
		"title": "Develop Appwrite Functions",
		"description": "Master serverless function development with Appwrite. Learn how to write and test functions locally, debug code, and optimize for efficient execution.",
		"excerpt": "Appwrite Functions offer a familiar interface if you've developed REST endpoints. Each function is handled following a request and response pattern. Lifecycle There is a clear lifecycle for all Appwrite Functions, from beginning to end. Here's everything that happens during a function execution. 1. The function is invoked. 1. The active deployment's executor will handle the request. 1. The Executor passes in request information like headers, body or path through the object of your exported function. 1. The runtime executes…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Develop"
		]
	},
	{
		"slug": "products/functions/develop-locally",
		"title": "Develop locally",
		"description": "Learn to develop Appwrite functions locally.",
		"excerpt": "Develop your Appwrite functions locally to make code changes without redeploying your function on every code change and hot reload your code for faster testing. Setup We use Docker to replicate the production environment for the local deployment of functions. These can be executed locally with the CLI command, which requires initializing a project with an file and having local code to run the function locally. The CLI also supports various other CLI commands. 1. Install the Docker CLI 2.…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Develop locally"
		]
	},
	{
		"slug": "products/functions/domains",
		"title": "Domains",
		"description": "Execute Appwrite Functions through domains using standard HTTP GET, POST, or other request methods to serve static, JSON, HTML, or other content.",
		"excerpt": "Each deployed function can have its own domain, generated or developer defined. You can use this domain to execute Appwrite Functions through HTTP methods. You can use common practices like using paths, query parameters, headers, HTTP methods, formdata, and all the typical HTTP concepts to implement Appwrite Functions. Appwrite generates TLS certificates to enforce HTTPS on all Appwrite Functions domains, generated or custom. These domains are safe to use and access in production. Learn about Function development Generated domains Each…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Domains"
		]
	},
	{
		"slug": "products/functions/environment-variables",
		"title": "Environment variables",
		"description": "Set environment variables for your Appwrite Functions to pass constants and secrets at build and runtime.",
		"excerpt": "Appwrite Functions can read environment variables at build and runtime. Use them to pass constants and secrets such as API keys, connection strings, and feature flags without hardcoding them in your source. A function reads from three sources, in this order of precedence: 1. **Project variables** are shared across every function and site in your project. Set them once and every function inherits them automatically. See project variables for the full reference. 2. **Function variables** are scoped to a single…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Environment variables"
		]
	},
	{
		"slug": "products/functions/examples",
		"title": "Examples",
		"description": "Accelerate your serverless development with Appwrite Functions examples. Access a library of code samples and use cases to jumpstart your projects.",
		"excerpt": "Appwrite Functions is all about flexibility. Behind the simple workflow hides some useful examples that can help you accomplish your goals faster. Take a look at the following. Here's a currency conversion API that converts from Euros and Indian Rupees to US Dollars. We'll use an external API to get the latest exchange rates and query it using a dependency specific to each runtime. Prerequisites Run the following bash command to create a file. This file is used to manage…",
		"breadcrumbs": ["Functions", "Examples"]
	},
	{
		"slug": "products/functions/execute",
		"title": "Execution",
		"description": "Understand serverless function execution in Appwrite. Explore how triggers, events, and data flow enable dynamic execution of your code.",
		"excerpt": "Appwrite Functions can be executed in several ways. Executions can be invoked through the Appwrite SDK and visiting its REST endpoint. Functions can also be triggered by events and scheduled executions. Here are all the different ways to consume your Appwrite Functions. Execution modes Appwrite Functions support two execution modes: **synchronous** and **asynchronous**. Synchronous executions Synchronous executions are those where Appwrite makes the request to the function runtime synchronously and waits for the response. The client making the request will…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Execute"
		]
	},
	{
		"slug": "products/functions/executions",
		"title": "Execution",
		"description": "Learn how Appwrite handles serverless function executions. More specifically, execution status, details and function logging.",
		"excerpt": "Each time an Appwrite Function runs, an **execution** is created. Each execution has a unique ID. If you enable execution logs in your function, you can find function executions logged in the **Executions** tab. Execution table In your function's **Executions** tab, you will see a table of your recent executions. Here's the information shown on this table. - Column - Description --- - Execution ID - Unique identifier for each execution --- - Status - The current status of the…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Executions"
		]
	},
	{
		"slug": "products/functions/functions",
		"title": "Functions",
		"description": "Learn what an Appwrite Function can do for you and how to create a new Appwrite Function",
		"excerpt": "Each Appwrite Function is a piece of developer defined code that can be executed on demand. When you create a new Appwrite Function, you select a name, ID, and runtime language. Each time a function's code is updated, a deployment is created, which is like a version of a function. Each function has a single active deployment, which is the version of code that's executed when it's called. You can update the Appwrite Function's code by creating new deployments. You…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Functions"
		]
	},
	{
		"slug": "products/functions/quick-start",
		"title": "Start with Functions",
		"description": "Get started quickly with Appwrite Functions. Follow a step-by-step guide to create your first serverless function, define triggers, and execute code.",
		"excerpt": "You can create and execute your first Appwrite Function in minutes. Create function Before deploying your function with Git, create a new function attached to your Git repository. 1. In the Appwrite Console's sidebar, click **Functions**. 2. Click **Create function**. 3. Under **Connect Git repository**, select your provider. 4. After connecting to GitHub, under **Quick start**, select a starter template. 5. Follow the step-by-step wizard and create the function. 6. The function will be created and a build will begin.…",
		"breadcrumbs": [
			"Functions",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/functions/runtimes",
		"title": "Runtimes",
		"description": "Choose the right runtime environment for your serverless functions in Appwrite. Explore available runtimes, dependencies, and runtime-specific considerations.",
		"excerpt": "Appwrite Functions supports an extensive list of runtimes to meet your unique tech preferences. Not all runtimes are available on Appwrite Cloud yet. Check the list below to know which ones are available on Appwrite Cloud. Available runtimes Below is a list of available Functions runtimes. The Appwrite team continually adds support for new runtimes. While still in beta, Appwrite Cloud has limited support for Cloud runtimes. As we continue to improve our Cloud offering, we will add support for…",
		"breadcrumbs": [
			"Functions",
			"Concepts",
			"Runtimes"
		]
	},
	{
		"slug": "products/functions/templates",
		"title": "Templates",
		"description": "Learn about Appwrite Functions' templates that let you jump start function development to extend your Appwrite APIs.",
		"excerpt": "Appwrite provides a variety of Function Templates to help you jump start your function development. You can use Appwrite Function Templates as examples or boilerplates to add new functionality to your Appwrite project. Find templates You can find all available templates by navigating to the Appwrite Console, under your project > **Functions** > **Templates**. You can filter functions by searching, filter by use case, or filter by runtime. Click **Create function** to create a function from a template. Create with…",
		"breadcrumbs": [
			"Functions",
			"Guides",
			"Templates"
		]
	},
	{
		"slug": "products/messaging",
		"title": "Messaging",
		"description": "Send push notifications, text, or emails to users or groups of users using your app.",
		"excerpt": "Appwrite Messaging helps you communicate with your users through push notifications, emails, and SMS text messages. Sending personalized communication for marketing, updates, and realtime alerts can increase user engagement and retention. You can also use Appwrite Messaging to implement security checks and custom authentication flows. Explore what you can build with Appwrite Messaging. Send newsletters, invoices, promotions and other emails. Send SMS messages straight to your user's phone. Send push notifications to your user's devices.",
		"breadcrumbs": [
			"Messaging",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/messaging/apns",
		"title": "Apple Push Notification service",
		"description": "Send push notifications to apps on Apple devices through Apple Push Notification service (APNs) using Appwrite Messaging.",
		"excerpt": "Apple Push Notification service (APNs) lets you send push notifications to Apple devices like macOS, iOS, tvOS, iPadOS, and watchOS devices. APNs is a best-effort service, and will attempt to deliver you messages to your device when it's online and available again. APNs will save the last message for 30 days or less and attempt delivery as soon as it's online. To add APNs as a provider, navigate to **Messaging** > **Providers** > **Create provider** > **Push notification**. Give your…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"Push with APNs"
		]
	},
	{
		"slug": "products/messaging/fcm",
		"title": "Firebase Cloud Messaging",
		"description": "Send push notifications to Android, Apple, or Web app with Firebase Cloud Messaging (FCM).",
		"excerpt": "Firebase Cloud Messaging (FCM) lets you send push notifications to your iOS, Android, and web apps through Appwrite Messaging. Before you can deliver messages, you must connect to a messaging provider. To add FCM as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **Push notification**. Give your provider a name > choose **FCM** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration. In the **Configure**…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"Push with FCM"
		]
	},
	{
		"slug": "products/messaging/mailgun",
		"title": "Mailgun",
		"description": "Send emails to your Appwrite users using Mailgun and Appwrite Messaging.",
		"excerpt": "Mailgun lets you send customized email messages to your users. These emails can be sent immediately or scheduled. You can send emails for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Mailgun as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **Email**. Give your provider a name > choose **Mailgun** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration. In the…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"Email with Mailgun"
		]
	},
	{
		"slug": "products/messaging/messages",
		"title": "Messages",
		"description": "Learn about Appwrite messages, the different types of messages, what can be sent in different message types.",
		"excerpt": "Each time you send or schedule a push notification, email, or SMS text, it's recorded in Appwrite as a **message** is displayed in the **Messages** tab. Messages Each message displays with the following information. * Column * Description --- * Message ID * The unique ID of the message. --- * Description * The developer defined description of the message. End users do not see this description. --- * Message * The message delivered to end users. --- * Type…",
		"breadcrumbs": [
			"Messaging",
			"Concepts",
			"Messages"
		]
	},
	{
		"slug": "products/messaging/msg91",
		"title": "MSG91",
		"description": "Send SMS messages to your Appwrite users using MSG91 and Appwrite Messaging.",
		"excerpt": "MSG91 lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows. To add MSG91 as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **SMS**. Give your provider a name > choose **MSG91** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"SMS with MSG91"
		]
	},
	{
		"slug": "products/messaging/providers",
		"title": "Providers",
		"description": "Learn the different providers that you can use to send messages with Appwrite.",
		"excerpt": "Appwrite allows you to connect to a variety of third-party messaging providers to deliver push notifications, emails, and SMS messages to your users. Before you can deliver messages, you must connect to a messaging provider. Push notifications Send push notifications, which are little notification messages that appear on a user's browser or device to alert them of events or updates. Configure one of the following providers to send push notifications. Send push notifications to apps on Apple devices through Apple…",
		"breadcrumbs": [
			"Messaging",
			"Concepts",
			"Providers"
		]
	},
	{
		"slug": "products/messaging/resend",
		"title": "Resend",
		"description": "Send emails to your Appwrite users using Resend and Appwrite Messaging.",
		"excerpt": "Resend lets you send customized email messages to your users. These emails can be sent immediately or scheduled. You can send emails for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Resend as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **Email**. Give your provider a name > choose **Resend** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration. In the…",
		"breadcrumbs": ["Messaging", "Resend"]
	},
	{
		"slug": "products/messaging/send-email-messages",
		"title": "Send email messages",
		"description": "Send email messages to your users using Appwrite Messaging.",
		"excerpt": "You can send custom email messages to your app's users using Appwrite Messaging and a connected SMTP service. This guide takes you through the implementation path of adding email messaging to your app. Add a provider Appwrite supports Mailgun, Resend, and Sendgrid as SMTP providers. You must configure one of them as a provider. To add a new provider navigate to **Messaging** > **Providers** > **Add provider** > **Email** and follow the wizard. You can find more details about configuring…",
		"breadcrumbs": [
			"Messaging",
			"Guides",
			"Send email messages"
		]
	},
	{
		"slug": "products/messaging/send-push-notifications",
		"title": "Send push notification",
		"description": "Send push notification to your users using Appwrite Messaging.",
		"excerpt": "You can send, schedule, and manage push notifications to your apps using Appwrite Messaging. Push notifications can be used to deliver new message notifications, app updates, promotional offers, and other messages straight to your user's devices. Push notifications must be sent through third-party providers, like Apple Push Notification service and Firebase Cloud Messaging. The push notification APIs for Apple and Android devices can only be accessed through these services. You must configure these services before you can send your first…",
		"breadcrumbs": [
			"Messaging",
			"Guides",
			"Send push notifications"
		]
	},
	{
		"slug": "products/messaging/send-sms-messages",
		"title": "Send SMS messages",
		"description": "Send SMS messages to your users using Appwrite Messaging.",
		"excerpt": "You can send custom SMS messages to your app's users using Appwrite Messaging and a connected SMTP service. This guide takes you through the implementation path of adding SMS messaging to your app. Add a provider Appwrite supports Twilio, MSG91, Telesign, Textmagic, and Vonage as SMS providers. You must configure one of them as a provider. To add a new provider navigate to **Messaging** > **Providers** > **Add provider** > **SMS** and follow the wizard. You can find more details…",
		"breadcrumbs": [
			"Messaging",
			"Guides",
			"Send SMS messages"
		]
	},
	{
		"slug": "products/messaging/sendgrid",
		"title": "SendGrid",
		"description": "Send emails to your Appwrite users using SendGrid and Appwrite Messaging.",
		"excerpt": "SendGrid lets you send customized email messages to your users. These emails can be sent immediately or scheduled. You can send emails for purposes like reminders, promotions, announcements, and even custom authentication flows. To add SendGrid as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **Email**. Give your provider a name > choose **SendGrid** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration. In the…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"Email with SendGrid"
		]
	},
	{
		"slug": "products/messaging/smtp",
		"title": "SMTP",
		"description": "Send emails to your Appwrite users using SMTP and Appwrite Messaging.",
		"excerpt": "If you wish to use a third-party SMTP provider that Appwrite doesn't yet support or host your own SMTP server, you can setup a custom SMTP provider for your project. To add a custom SMTP server as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **Email**. Give your provider a name > choose **SMTP** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration. In the…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"Email with SMTP"
		]
	},
	{
		"slug": "products/messaging/targets",
		"title": "Targets",
		"description": "Manage avenues of communication by targetting user's device, email, or phone number in your notification and messages.",
		"excerpt": "Targets are different ways a user can be reached. For example, a user might have two emails, a phone number as well as a phone and a tablet with your app installed. This means, the user has five different targets that you can deliver messages to. Topics and targets A user can have multiple targets, such as emails, phone numbers, and devices with your app installed. These targets can subscribe to a topic, so when messages are published to a…",
		"breadcrumbs": [
			"Messaging",
			"Concepts",
			"Targets"
		]
	},
	{
		"slug": "products/messaging/telesign",
		"title": "Telesign",
		"description": "Send SMS messages to your Appwrite users using Telesign and Appwrite Messaging.",
		"excerpt": "Telesign lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Telesign as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **SMS**. Give your provider a name > choose **Telesign** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"SMS with Telesign"
		]
	},
	{
		"slug": "products/messaging/textmagic",
		"title": "Textmagic",
		"description": "Send SMS messages to your Appwrite users using Textmagic and Appwrite Messaging.",
		"excerpt": "Textmagic lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Textmagic as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **SMS**. Give your provider a name > choose **Textmagic** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"SMS with Textmagic"
		]
	},
	{
		"slug": "products/messaging/topics",
		"title": "Topics",
		"description": "Allow groups of users to subscribe to a common topic and receive the same notifications.",
		"excerpt": "In Appwrite Messaging, you can use topics to deliver messages to groups of users at once. Topics and targets A user can have multiple targets, such as emails, phone numbers, and devices with your app installed. These targets can subscribe to a topic, so when messages are published to a topic, all subscribed targets receive the message. Learn more about targets Organizing topics A topic should have semantic meaning. For example, a topic can represent a group of customers that…",
		"breadcrumbs": [
			"Messaging",
			"Concepts",
			"Topics"
		]
	},
	{
		"slug": "products/messaging/twilio",
		"title": "Twilio",
		"description": "Send SMS messages to your Appwrite users using Twilio and Appwrite Messaging.",
		"excerpt": "Twilio lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Twilio as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **SMS**. Give your provider a name > choose **Twilio** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"SMS with Twilio"
		]
	},
	{
		"slug": "products/messaging/vonage",
		"title": "Vonage",
		"description": "Send SMS messages to your Appwrite users using Vonage and Appwrite Messaging.",
		"excerpt": "Vonage lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows. To add Vonage as a provider, navigate to **Messaging** > **Providers** > **Add provider** > **SMS**. Give your provider a name > choose **Vonage** > click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.…",
		"breadcrumbs": [
			"Messaging",
			"Providers",
			"SMS with Vonage"
		]
	},
	{
		"slug": "products/network",
		"title": "Network",
		"description": "Discover Appwrite's network architecture with global regions, edge nodes, and optimized routing. Explore how it ensures low latency, reliable performance, and scalable infrastructure for modern applications.",
		"excerpt": "Appwrite's network is designed to deliver low-latency, high-performance experiences for developers and end-users alike. It leverages a robust Content Delivery Network (CDN) with edge locations across multiple regions to ensure fast and reliable data delivery. With distributed infrastructure and multiple deployment regions, Appwrite enables developers to build globally scalable applications while maintaining data sovereignty. Its architecture integrates seamlessly with APIs, storage, and databases, optimizing both speed and availability. Components The Appwrite Network is composed of multiple components that work together…",
		"breadcrumbs": [
			"Network",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/network/caa-records",
		"title": "Certification Authority Authorization (CAA) records",
		"description": "Learn what DNS Certification Authority Authorization (CAA) records are, when they are required to use a custom domain with Appwrite, and how to configure one or more of them at your DNS provider.",
		"excerpt": "A Certification Authority Authorization (CAA) record is a DNS record that specifies which certificate authorities (CAs) are allowed to issue TLS certificates for your domain. CAA records help prevent unauthorized certificate issuance and are defined in RFC 8659. When Appwrite issues a TLS certificate for a custom domain, an Appwrite Sites domain, or a Function domain, the certificate authority used by Appwrite checks your domain's CAA records before issuing. If your domain has no CAA records at all, any CA,…",
		"breadcrumbs": [
			"Network",
			"Features",
			"CAA records"
		]
	},
	{
		"slug": "products/network/caching",
		"title": "Caching",
		"description": "Learn how Appwrite uses smart caching strategies at the region, edge, and CDN levels to optimize performance and protect dynamic APIs, with advanced options for enterprise customers.",
		"excerpt": "Appwrite employs a multi-layered caching approach to enhance the performance of your applications. By utilizing caching at the **region**, **edge**, and **CDN** levels, Appwrite ensures faster response times, optimized resource usage, and efficient handling of dynamic workloads. Region-level At the region level, Appwrite provides smart in-memory caching for various resources: - **Rows**: Frequently accessed rows are cached in memory and automatically purged when updated, ensuring data consistency without manual intervention. - **Storage files**: Frequently accessed files are cached in memory…",
		"breadcrumbs": [
			"Network",
			"Features",
			"Caching"
		]
	},
	{
		"slug": "products/network/cdn",
		"title": "Content Delivery Network (CDN)",
		"description": "Learn about Appwrite's CDN, designed to optimize content delivery with compression, and edge optimization for improved performance and reduced latency.",
		"excerpt": "Appwrite's CDN (Content Delivery Network) is a globally distributed system designed to enhance the speed, reliability, and security of your application's content delivery. With points of presence (PoPs) in over 120 cities worldwide, the CDN ensures low latency and consistent performance for users, no matter their location. Key features - Global coverage: Fast access to content for users across continents through over 120 PoPs worldwide. Available on all projects. - Reduced latency: By caching static content at edge nodes, the…",
		"breadcrumbs": [
			"Network",
			"Concepts",
			"CDN"
		]
	},
	{
		"slug": "products/network/compression",
		"title": "Compression",
		"description": "Appwrite is leveraging compression algorithms to both boost the performance of your app and to reduce and optimize…",
		"excerpt": "Appwrite is leveraging compression algorithms to both boost the performance of your app and to reduce and optimize bandwidth and storage costs for Appwrite developers. This page provides an in-depth explanation of the compression algorithms supported by Appwrite for API responses, image transformations, and storage buckets. API Appwrite supports two primary algorithms for text-based responses: **Brotli** and **Gzip**. These algorithms are integral for improving data transfer speeds across the HTTP based APIs, especially when dealing with textual content, which tends…",
		"breadcrumbs": [
			"Network",
			"Features",
			"Compression"
		]
	},
	{
		"slug": "products/network/custom-domains",
		"title": "Custom domains",
		"description": "Customize your Appwrite platform with custom domains. Learn how to set up and configure custom domains to provide a branded experience for your users.",
		"excerpt": "Appwrite custom domains allows you to use your own domain as your Appwrite API endpoint. Third-party cookies A recent change made in modern browsers will not allow your web app to use 3rd-party cookies. This change is done to protect your users' privacy from malicious web tracking services. When accessing Appwrite from a 3rd party domain, like or , some browsers will treat our secure cookies as 3rd-party cookies and block them, as a fallback Appwrite will store your users'…",
		"breadcrumbs": [
			"Network",
			"Features",
			"Custom domains"
		]
	},
	{
		"slug": "products/network/ddos",
		"title": "DDoS mitigation",
		"description": "Learn how Appwrite protects your applications from Distributed Denial-of-Service (DDoS) attacks with built-in, always-on protection for all Appwrite Cloud plans.",
		"excerpt": "Distributed Denial-of-Service (DDoS) attacks are one of the most common threats to online applications, aimed at overwhelming servers with malicious traffic to disrupt services. Appwrite provides robust, always-on DDoS protection across all Appwrite Cloud plans to ensure the reliability and security of your applications. Appwrite's network is designed to detect and mitigate malicious traffic before it reaches your application. Using a combination of automated filtering and intelligent traffic analysis, our DDoS protection: - Identifies and blocks large-scale attack patterns in…",
		"breadcrumbs": [
			"Network",
			"Features",
			"DDoS mitigation"
		]
	},
	{
		"slug": "products/network/dns",
		"title": "Appwrite DNS service",
		"description": "Learn about Appwrite's DNS service and how to configure domain records for your applications",
		"excerpt": "Appwrite provides a dedicated DNS (Domain Name System) service through its nameservers to help you manage domain records for your applications. This service is ideal for apex domains (root domains) that cannot use CNAME records due to DNS protocol limitations. The DNS service enables you to configure custom domains for Sites, Functions, and APIs while providing automatic SSL certificate management and high availability. Whether you need to set up subdomains or apex domains, Appwrite's DNS service offers a complete solution.…",
		"breadcrumbs": [
			"Network",
			"Features",
			"DNS"
		]
	},
	{
		"slug": "products/network/edges",
		"title": "Edges",
		"description": "Learn about Appwrite edges, where lightweight compute tasks like caching, request routing, and content delivery are handled. Understand how edges enhance performance by bringing operations closer to end-users.",
		"excerpt": "Appwrite edges are strategically distributed locations designed to process requests closer to your users. These edge nodes handle latency-sensitive operations, such as caching, routing, and quick computations, to deliver faster, more efficient interactions while reducing the load on your application's core infrastructure. Currently, Appwrite's edge network includes 6 locations. We are actively working to expand the number of edge locations globally. New locations will be strategically prioritized to ensure the best possible global coverage and performance for all users. List…",
		"breadcrumbs": [
			"Network",
			"Concepts",
			"Edges"
		]
	},
	{
		"slug": "products/network/endpoints",
		"title": "Endpoints",
		"description": "Understand the differences between Appwrite's endpoints, including geo-balanced edges, region-specific services, and custom domains for compute processes.",
		"excerpt": "Appwrite offers multiple endpoints to access its services, each designed to optimize specific aspects of performance, routing, and compute. Understanding these endpoints helps you determine the most efficient way to interact with your Appwrite project. Edge The **** domain provides geo-balanced endpoints that route traffic to the nearest edge node based on the user's geographic location. The edge network endpoints are designed for: - **Latency-sensitive operations**: Quickly serving cached content, routing requests, or performing lightweight edge computations. - **Global traffic…",
		"breadcrumbs": [
			"Network",
			"Concepts",
			"Endpoints"
		]
	},
	{
		"slug": "products/network/regions",
		"title": "Regions",
		"description": "Learn about Appwrite regions, where core services like databases, auth, functions, sites, and storage are hosted. Understand data sovereignty, fault isolation, and scalability for compliant, high-performance deployments",
		"excerpt": "Appwrite regions are geographic locations where all your application's core infrastructure is deployed. Each region operates as an independent, highly available cluster, managing the storage, processing, and serving of your data and Appwrite services. List Appwrite is currently available in the following list of regions: | Region | Code | Endpoint | Status | |---------------------|--------|-----------------------------------------|-----------------| | Frankfurt | FRA | | Available | | New York | NYC | | Available | | Sydney | SYD | | Available |…",
		"breadcrumbs": [
			"Network",
			"Concepts",
			"Regions"
		]
	},
	{
		"slug": "products/network/tls",
		"title": "Transport Layer Security (TLS)",
		"description": "Learn how Appwrite uses TLS to encrypt data in transit, ensuring secure and private communication between clients and servers.",
		"excerpt": "Transport Layer Security (TLS) is a critical feature of the Appwrite Network, ensuring that all data exchanged between clients and servers is encrypted and secure. By using TLS, Appwrite protects sensitive information from interception, tampering, and unauthorized access during transit. TLS operates at the **transport layer** of the OSI model (Layer 4), encrypting all data before it is transmitted over the network. This includes securing HTTP traffic via HTTPS. When a client connects to Appwrite services, a TLS handshake is…",
		"breadcrumbs": [
			"Network",
			"Features",
			"TLS"
		]
	},
	{
		"slug": "products/sites",
		"title": "Sites",
		"description": "Appwrite Sites is your gateway to scalable web applications. Explore our complete guide to building and deploying websites effortlessly.",
		"excerpt": "Appwrite Sites empowers developers to host and manage web applications seamlessly within the Appwrite ecosystem. Appwrite Sites provides a fast, scalable, and secure way to deploy web apps directly from source control, allowing for quick iterations and live updates. Each site has a dedicated URL, runs within its own isolated container, and can be configured with custom domains and environment variables. Appwrite Sites leverages the Appwrite Network infrastructure to enhance your sites' performance and reliability. Your deployed sites automatically benefit…",
		"breadcrumbs": [
			"Sites",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/sites/deploy-from-cli",
		"title": "Deploy from CLI",
		"description": "Learn to deploy Appwrite Sites from the Appwrite CLI.",
		"excerpt": "Appwrite Sites allows you to host and deploy websites directly within the Appwrite platform. Each site can have many deployments, which can be thought of as versions of the web application. While we recommend you create deployments through automatic Git deployments, you can also create deployments via the Appwrite CLI. CLI Configure CLI deployments If you need to target a different project, API endpoint, change the path or entry point of your site, or update any of the other configuration…",
		"breadcrumbs": [
			"Sites",
			"Guides",
			"Deploy from CLI"
		]
	},
	{
		"slug": "products/sites/deploy-from-git",
		"title": "Deploy from Git",
		"description": "Learn to version and update your Appwrite Sites' code with deployments.",
		"excerpt": "Appwrite Sites allows you to host and deploy websites directly within the Appwrite platform. Each site can have many deployments, which can be thought of as versions of the web application. With Appwrite Sites, you can seamlessly deploy updates from Git repositories, enabling you to track changes to your web app as part of your development workflow. This versioning approach ensures that your site stays up-to-date and your deployment process is fully integrated with your source control, streamlining collaboration and…",
		"breadcrumbs": [
			"Sites",
			"Guides",
			"Deploy from Git"
		]
	},
	{
		"slug": "products/sites/deploy-manually",
		"title": "Deploy manually",
		"description": "Learn to deploy Appwrite Sites manually via the Appwrite Console.",
		"excerpt": "Appwrite Sites allows you to host and deploy websites directly within the Appwrite platform. Each site can have many deployments, which can be thought of as versions of the web application. While we recommend you create deployments through automatic Git deployments, you can also create deployments manually by uploading the source code to the Appwrite Console. Manual Deployment You can upload your sites to be deployed using the Appwrite Console. The example below shows a skeleton SvelteKit app. First, create…",
		"breadcrumbs": [
			"Sites",
			"Guides",
			"Deploy manually"
		]
	},
	{
		"slug": "products/sites/deployments",
		"title": "Deployments",
		"description": "Efficiently deploy your web apps with Appwrite. Explore deployment options, strategies, and best practices.",
		"excerpt": "Each site can have many deployments, which can be thought of as versions of the web application. Sites can be created and deployed using different methods to meet your unique development habits. Deployment status Throughout the life cycle of a deployment, it can have any of the following status: | Status | Description | | --- | --- | | | The deployment is built and currently activated and ready to be accessed. A site can have one active deployment…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Deployments"
		]
	},
	{
		"slug": "products/sites/develop",
		"title": "Develop Appwrite Sites",
		"description": "Master site development with Appwrite.",
		"excerpt": "Rendering strategies Appwrite allows you to host both statically-generated and server-rendered websites. Static sites are websites that are pre-built and served as-is to clients. They do not execute server-side code on each request. They are ideal for use-cases such as Single Page Applications (SPAs), documentation sites, personal blogs, and portfolio websites. Server-side rendered (SSR) sites generate content dynamically on the server and send fully rendered pages for each request. They are ideal for use-cases with substantial dynamic content or server-side…",
		"breadcrumbs": [
			"Sites",
			"Guides",
			"Develop"
		]
	},
	{
		"slug": "products/sites/domains",
		"title": "Domains",
		"description": "Discover how domains can be managed for an Appwrite Site",
		"excerpt": "Each deployed site can have its own domain, which can be Appwrite-generated or custom. You can use this domain to consume web apps deployed on Appwrite Sites. Appwrite generates TLS certificates to enforce HTTPS on all Appwrite Sites domains. These domains are safe to use and access in production. Learn about Sites development > Generated domains Each site automatically receives a unique Appwrite-generated domain that's ready to use immediately. 1. In the Appwrite Console's sidebar, click **Sites**. 2. Under the…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Domains"
		]
	},
	{
		"slug": "products/sites/environment-variables",
		"title": "Environment variables",
		"description": "Set environment variables for your Appwrite Sites to pass constants and secrets at build and runtime.",
		"excerpt": "Appwrite Sites can read environment variables at build and runtime. Use them to pass constants and secrets such as API keys, connection strings, and feature flags without hardcoding them in your source. A site reads from three sources, in this order of precedence: 1. **Project variables** are shared across every function and site in your project. Set them once and every site inherits them automatically. See project variables for the full reference. 2. **Site variables** are scoped to a single…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Environment variables"
		]
	},
	{
		"slug": "products/sites/frameworks",
		"title": "Frameworks",
		"description": "Discover which frameworks are supported out-of-the-box by Appwrite Sites.",
		"excerpt": "Appwrite Sites allows web apps developed with a variety of frameworks to be hosted and served to your users. Appwrite Sites allows web apps developed with a variety of frameworks to be hosted and served to your users. When we say a framework is \"supported,\" it means Appwrite can automatically detect, build, and optimize deployments for that framework with minimal configuration from you. Zero-configuration approach Appwrite Sites uses a zero-config approach to make deployments as frictionless as possible. When you…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Frameworks"
		]
	},
	{
		"slug": "products/sites/instant-rollbacks",
		"title": "Instant rollbacks",
		"description": "Safely revert a site to a previous deployment using instant rollbacks.",
		"excerpt": "If a site needs to be reverted to a previously functional state for any reason (runtime errors, security flaw, etc.), you can roll your site back to an existing ready deployment. Instant rollbacks don't delete, modify, or re-deploy your code. Instead, they simply change which deployment is being served to visitors. This makes rollbacks near-instantaneous, with zero downtime. Use instant rollbacks To use the instant rollback feature, follow these steps: 1. Navigate to your site on Appwrite Console. 2. Under…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Instant rollbacks"
		]
	},
	{
		"slug": "products/sites/logs",
		"title": "Logs",
		"description": "Learn how Appwrite Sites handles logs",
		"excerpt": "Each time a URL path on an Appwrite Site is requested, a log is created. Each log has a unique ID. You can find site logs logged in the **Logs** tab. Logs table In your site's **Logs** tab, you will see a table of your recent logs. The following information is shown in this table: | Column | Description | | --- | --- | | Log ID | Unique identifier for each log | | Status code | The…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Logs"
		]
	},
	{
		"slug": "products/sites/migrations/vercel",
		"title": "Migrating from Vercel to Appwrite Sites",
		"description": "A step-by-step guide to migrate your web applications from Vercel to Appwrite Sites.",
		"excerpt": "This guide walks you through migrating from Vercel to Appwrite Sites, covering project setup, configuration, routing, and serverless functionality. Prerequisites Before starting your migration: - Have access to your Vercel project dashboard - Ensure you can modify your domain's DNS settings - Prepare your source code repository Platform differences Understanding the key differences between Vercel and Appwrite Sites will help you plan your migration effectively. - Feature - Vercel - Appwrite Sites --- - DNS configuration - Uses A records…",
		"breadcrumbs": [
			"Sites",
			"migrations",
			"Migrating from Vercel to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/previews",
		"title": "Previews",
		"description": "Preview site deployments to test changes before promoting to production.",
		"excerpt": "If you create a new Pull Request on the GitHub repo for your site, Appwrite Sites will create a preview deployment that you can view and test before promoting to production. Visit preview deployments To access a preview deployment, follow these steps: 1. Navigate to your site on Appwrite Console. 2. Under the **Deployments** tab, click on a ready deployment. 3. Click on the **Visit** button. This preview URL is also visible under the **Domains** section. Appwrite Sites will then…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Previews"
		]
	},
	{
		"slug": "products/sites/quick-start",
		"title": "Start with Sites",
		"description": "Get started quickly with Appwrite Sites. Follow a step-by-step guide to create your first Appwrite Site and deploy a web app.",
		"excerpt": "Start with Sites You can create and execute your first Appwrite Site in minutes. Create site Before deploying your web app with Git, create a new Site attached to your GitHub repository. 1. In the Appwrite Console's sidebar, click **Sites**. 2. Click on the **Create site** button. 3. After clicking on **Connect Git repository**, select your repository. 4. After connecting to GitHub, (optionally) add a name and site ID. 5. Verify that the correct framework is selected. 6. Confirm the…",
		"breadcrumbs": [
			"Sites",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/sites/quick-start/angular",
		"title": "Deploy an Angular app to Appwrite Sites",
		"description": "Learn how to setup and deploy Angular apps on Appwrite Sites.",
		"excerpt": "First, you must either create an Angular app or setup the Angular starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy an Angular app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/astro",
		"title": "Deploy a Astro app to Appwrite Sites",
		"description": "Learn how to setup and deploy Astro apps on Appwrite Sites.",
		"excerpt": "First, you must either create an Astro app or setup the Astro starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Astro app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/flutter",
		"title": "Deploy a Flutter Web app to Appwrite Sites",
		"description": "Learn how to setup and deploy Flutter Web apps on Appwrite Sites.",
		"excerpt": "First, you must either create a Flutter Web app or setup the Flutter Web starter template. Open your terminal, and run the following command. In case you have an existing Flutter app and want to add web support to it, you must run the following command in your project directory: Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Flutter Web app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/nextjs",
		"title": "Deploy a Next.js app to Appwrite Sites",
		"description": "Learn how to setup and deploy Next.js apps on Appwrite Sites.",
		"excerpt": "Appwrite Sites fully supports Next.js out of the box. Unlike other non-Vercel hosting services, the Appwrite Edge runs in a container-based environment for Node.js (and soon Bun as well), managed by a control plane that automatically scales your app as needed. This means all Next.js features work without any extra configuration or the OpenNext adapter. First, you must either create a Next.js app or setup the Next.js starter template. Open your terminal, and run the following command. Push this project…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Next.js app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/nuxt",
		"title": "Deploy a Nuxt app to Appwrite Sites",
		"description": "Learn how to setup and deploy Nuxt apps on Appwrite Sites.",
		"excerpt": "First, you must either create a Nuxt app or setup the Nuxt starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Nuxt app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/react",
		"title": "Deploy a React app to Appwrite Sites",
		"description": "Learn how to setup and deploy React apps on Appwrite Sites.",
		"excerpt": "First, you must either create a React app or setup the React starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a React app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/react-native",
		"title": "Deploy a React Native app to Appwrite Sites",
		"description": "Learn how to setup and deploy React Native apps on Appwrite Sites.",
		"excerpt": "First, you must either create a React Native app or setup the React Native starter template. Open your terminal, and run the following command. Once the app is created, navigate to the project directory, open the file and add the following line under : Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a React Native app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/remix",
		"title": "Deploy a Remix app to Appwrite Sites",
		"description": "Learn how to setup and deploy Remix apps on Appwrite Sites.",
		"excerpt": "First, you must either create a Remix app or setup the Remix starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Remix app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/sveltekit",
		"title": "Deploy a SvelteKit app to Appwrite Sites",
		"description": "Learn how to setup and deploy SvelteKit apps on Appwrite Sites.",
		"excerpt": "First, you must either create a SvelteKit app or setup the SvelteKit starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a SvelteKit app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/tanstack-start",
		"title": "Deploy a TanStack Start app to Appwrite Sites",
		"description": "Learn how to setup and deploy TanStack Start apps on Appwrite Sites.",
		"excerpt": "First, you must either create a TanStack Start app or setup the TanStack Start starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a TanStack Start app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/vanilla",
		"title": "Deploy a Vanilla JS app to Appwrite Sites",
		"description": "Learn how to setup and deploy Vanilla JS apps on Appwrite Sites.",
		"excerpt": "Open your terminal, and run the following command. In this directory, create two files with the following code: - - Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend to deploy…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Vanilla JS app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/quick-start/vue",
		"title": "Deploy a Vue.js app to Appwrite Sites",
		"description": "Learn how to setup and deploy Vue.js apps on Appwrite Sites.",
		"excerpt": "First, you must either create a Vue.js app or setup the Vue.js starter template. Open your terminal, and run the following command. Push this project to a GitHub repository. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Head to the **Sites** page in your Appwrite project, click on the **Create site** button, and select **Connect a repository**. Connect your GitHub account and select the repository you intend…",
		"breadcrumbs": [
			"Sites",
			"Start with Sites",
			"Deploy a Vue.js app to Appwrite Sites"
		]
	},
	{
		"slug": "products/sites/rendering",
		"title": "Rendering",
		"description": "Explore how sites are rendered on Appwrite Sites.",
		"excerpt": "Rendering refers to how your web application's content is processed and delivered to users. Appwrite Sites supports two primary rendering strategies, each with its own advantages and use cases. Understanding these strategies will help you choose the right approach for your project and optimize for performance, SEO, and user experience. Host a static site or SPA Host an SSR site Differences There are several differences between how static hosting and SSR work on Appwrite Sites. | Static/SPA/PWA | SSR |…",
		"breadcrumbs": [
			"Sites",
			"Concepts",
			"Rendering"
		]
	},
	{
		"slug": "products/sites/rendering/ssr",
		"title": "Server Side Rendering",
		"description": "Learn how to host SSR web apps on Appwrite Sites.",
		"excerpt": "Server Side Rendering (SSR) apps generate HTML content dynamically on the server for each request and send fully rendered pages to the browser. This approach improves performance for the initial load and enhances SEO since search engines can easily index the content. While SSR can be slightly slower than static apps due to server-side processing, it provides a good balance between performance and interactivity. Since Appwrite's CDN supports dynamic content delivery, any server-side processing implemented in your site will be…",
		"breadcrumbs": [
			"Sites",
			"Rendering",
			"Server Side Rendering"
		]
	},
	{
		"slug": "products/sites/rendering/static",
		"title": "Static",
		"description": "Learn how to host static web apps on Appwrite Sites.",
		"excerpt": "Static apps, also known as static websites, consist of pre-built HTML, CSS, and JavaScript files that are served to users without any backend processing. These apps do not execute server-side code on each request, meaning the content remains the same until manually updated or rebuilt. Since the pages are pre-generated, static apps offer incredibly fast load times. However, they lack dynamic interactivity and are best suited for use cases like personal portfolios, documentation sites, and landing pages. All static content…",
		"breadcrumbs": [
			"Sites",
			"Rendering",
			"Static"
		]
	},
	{
		"slug": "products/sites/templates",
		"title": "Templates",
		"description": "Learn about Appwrite Sites' templates that let you jump start site development.",
		"excerpt": "Appwrite provides a variety of Site Templates to help you jump-start your web app development. Find templates You can find all available templates by navigating to the Appwrite Console under your project > **Sites** > **Templates**. You can filter sites by searching, filter by use case, or filter by framework. Click **Create site** to create a site from a template. Create with templates The create site wizard for templates will include the following steps: Configure site details Pick a display…",
		"breadcrumbs": [
			"Sites",
			"Guides",
			"Templates"
		]
	},
	{
		"slug": "products/storage",
		"title": "Storage",
		"description": "Unlock the power of cloud storage with Appwrite Storage. Learn how to store, manage, and retrieve files and media assets securely in your applications.",
		"excerpt": "Appwrite Storage allows you to manage files in your project. You can use it to store images, videos, rows, and other files for your projects. It provides APIs to upload, download, delete, and list files, with many added utilities. Appwrite Storage stores files like images, PDFs or videos. If you need to store data like profiles, recipes, or transactions, use Appwrite Databases. Get started Get started with Appwrite Storage. Learn to setup up a bucket, upload, and download your first…",
		"breadcrumbs": [
			"Storage",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "products/storage/buckets",
		"title": "Buckets",
		"description": "Organize and manage your files effectively with Appwrite Storage Buckets. Explore how to create, configure, and use storage buckets for seamless file organization.",
		"excerpt": "Storage buckets are a group of files, similar to tables in Appwrite Databases. Buckets let you limit file size and extensions, whether or not to encrypt the files, and more. Create Bucket You can create your bucket from the Appwrite Console, a Server SDK, or the CLI. You can create a bucket by heading to the **Storage** page and clicking **Create bucket**. You can also create buckets programmatically using a Server SDK. Appwrite Server SDKs require an API key. You…",
		"breadcrumbs": [
			"Storage",
			"Concepts",
			"Buckets"
		]
	},
	{
		"slug": "products/storage/file-tokens",
		"title": "File tokens",
		"description": "Easily share files with external users using file tokens.",
		"excerpt": "File tokens are a type of secret that allow you to share files publicly with anyone. By using file tokens, you can let any external user access your file without having to configure bucket or file permissions. File tokens can either be set to expire on a specific date or work indefinitely. File tokens vs secure cookies Currently, Appwrite uses secure cookies to manage sessions for users, which are essential for any Appwrite products with permissions configured. However, because the…",
		"breadcrumbs": [
			"Storage",
			"Concepts",
			"File tokens"
		]
	},
	{
		"slug": "products/storage/folders",
		"title": "Folders",
		"description": "Organize files in Appwrite Storage buckets with virtual folders. Learn how to upload files into folders, list files by folder, and browse folders.",
		"excerpt": "Appwrite Storage lets you organize the files inside a bucket using virtual folders. Folders work like key prefixes in S3-compatible storage services: they are derived from the paths of your files, so you never create or delete folders explicitly. How folders work A bucket doesn't store folders as records. Instead, every file has a attribute, a path like , and folders are derived from these paths: a folder exists whenever at least one file's path places the file inside it.…",
		"breadcrumbs": ["Storage", "Folders"]
	},
	{
		"slug": "products/storage/images",
		"title": "Image transformations",
		"description": "Optimize image storage and processing with Appwrite. Explore image resizing, transformations, and manipulation to deliver rich media experiences in your apps.",
		"excerpt": "Appwrite provides utilities to manipulate images for previewing images in your apps. Appwrite Storage's preview endpoint let you manipulate resolution, add borders and the border-radius, add background-color, set the opacity for the image, and get the image in the appropriate output format. You can manipulate images resolution to display appropriately on responsive websites. You can also adjust the image border, background color, and border-radius to match the theming of your application. The Appwrite Storage also allows you to change the…",
		"breadcrumbs": [
			"Storage",
			"Guides",
			"Image transformations"
		]
	},
	{
		"slug": "products/storage/permissions",
		"title": "Storage permissions",
		"description": "Enhance data security and control with Appwrite Storage Permissions. Learn how to set access rules, permissions, and restrictions for your stored files.",
		"excerpt": "Permissions define who can access files within a bucket. By default **no permissions** are granted to any users, so no user can access any files. Permissions exist at two levels, bucket level and file level permissions. In Appwrite, permissions are **granted**, meaning a user has no access by default and receive access when granted. A user with access granted at either bucket level or file level will be able to access a file. Users **don't need access at both levels**…",
		"breadcrumbs": [
			"Storage",
			"Concepts",
			"Permissions"
		]
	},
	{
		"slug": "products/storage/quick-start",
		"title": "Start with Storage",
		"description": "Get started quickly with Appwrite Storage. Follow step-by-step instructions to set up storage, upload files, and integrate cloud storage into your projects",
		"excerpt": "You can create your first bucket, upload, and download your first file in minutes. Create bucket You can create a bucket in the Appwrite Console by navigating to **Storage** > **Create bucket**. In your bucket, navigate to **Settings** > **Permissions**, then add a new **Any** role with **CREATE** and **READ** permissions. This allows anyone to create and read files in this bucket. Create file To upload a file, add this to your app. For web apps, you can use the…",
		"breadcrumbs": [
			"Storage",
			"Getting started",
			"Quick start"
		]
	},
	{
		"slug": "products/storage/s3",
		"title": "S3 API",
		"description": "Connect any S3-compatible client, SDK, or tool to Appwrite Storage. Configure credentials once, then manage buckets, objects, and multipart uploads over the S3 API.",
		"excerpt": "Appwrite Storage exposes an S3-compatible API, so you can point the AWS CLI, the AWS SDKs, and third-party tools like rclone or s3cmd at your buckets and files. The API uses AWS Signature Version 4 and maps standard S3 operations onto Appwrite Storage, so most existing S3 code works after you change three settings: the endpoint, the credentials, and the region. The S3 API is available on Appwrite Cloud. It needs a project ID and an API key with the…",
		"breadcrumbs": ["Storage", "S3 API"]
	},
	{
		"slug": "products/storage/upload-download",
		"title": "Upload and download",
		"description": "Effortlessly upload and download files with Appwrite Storage. Learn how to handle file uploads, manage file versions, and ensure secure downloads in your applications.",
		"excerpt": "You can upload and download files both programmatically using SDKs or through the Appwrite Console. Create file After you create a bucket or have navigated to bucket details, you can access the **Files** tab so you can upload, view, delete and update files in the bucket using the Appwrite project's dashboard. You can also perform all those operations from Appwrite's client SDK, server SDKs, and REST APIs as long as you have the proper permission. When you are in the…",
		"breadcrumbs": [
			"Storage",
			"Guides",
			"Upload and download"
		]
	},
	{
		"slug": "quick-starts/android",
		"title": "Start with Android (Kotlin)",
		"description": "Get started with Appwrite on Android and learn how to build secure and scalable apps using our powerful backend.",
		"excerpt": "Learn how to setup your first Android project powered by Appwrite and the Appwrite Android SDK. Check out the Start with Android (Java) guide. Open Android Studio and click **New Project** to create a new project. Choose your desired project template, for example **Empty Activity**, and click **Next**. Now enter your app **name** and **package name**. You will need both of these later when you create your project in the Appwrite console. Click **Finish** to create your project. Head to…",
		"breadcrumbs": [
			"Quick start",
			"Mobile and native",
			"Android"
		]
	},
	{
		"slug": "quick-starts/android-java",
		"title": "Start with Android (Java)",
		"description": "Get started with Appwrite on Android using Java and learn how to build secure and scalable apps using our powerful backend.",
		"excerpt": "Learn how to setup your first Android project powered by Appwrite and the Appwrite Android SDK using Java. Check out the Start with Android (Kotlin) guide. Open Android Studio and click **New Project** to create a new project. Choose your desired project template, for example **Empty Activity**, and click **Next**. Now enter your app **name** and **package name**. You will need both of these later when you create your project in the Appwrite console. Click **Finish** to create your project.…",
		"breadcrumbs": ["Quick start", "Start with Android (Java)"]
	},
	{
		"slug": "quick-starts/angular",
		"title": "Start with Angular",
		"description": "Learn how to use Appwrite to add authentication, user management, file storage, and more to your Angular apps.",
		"excerpt": "Learn how to setup your first Angular project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create an Angular project. If you don't have Angular CLI installed, run this command. Then, create a project. Install the JavaScript Appwrite SDK. Find your project's ID in the…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Angular"
		]
	},
	{
		"slug": "quick-starts/apple",
		"title": "Start with Apple",
		"description": "Build iOS apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Apple project powered by Appwrite and the Appwrite Apple SDK. Open Xcode and click **Create a new Xcode project**. Choose your desired project template, for example **iOS App**, and click **Next**. Now enter your app **product name** and **bundle identifier** and click **Next**. You will need both of these values later when you create your project in the Appwrite console. Choose a directory for your project in and click **Create** to create your project.…",
		"breadcrumbs": [
			"Quick start",
			"Mobile and native",
			"Apple"
		]
	},
	{
		"slug": "quick-starts/astro",
		"title": "Start with Astro",
		"description": "Learn how to use Appwrite to add authentication, user management, file storage, and more to your Astro apps.",
		"excerpt": "Improve the docs, add this guide. We still don't have this guide in place, but we do have some great news. The Appwrite docs, just like Appwrite, is completely open sourced. This means, anyone can help improve them and add new guides and tutorials. If you see this page, **we're actively looking for contributions to this page**. Follow our contribution guidelines, open a PR to our Website repo, and collaborate with our core team to improve this page.",
		"breadcrumbs": ["Quick start", "Start with Astro"]
	},
	{
		"slug": "quick-starts/dart",
		"title": "Start with Dart",
		"description": "Build Flutter apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Dart project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Dart"
		]
	},
	{
		"slug": "quick-starts/deno",
		"title": "Start with Deno",
		"description": "Dive into our step-by-step guide on integrating Appwrite with your Deno server backend application. Get your backend up and running quickly with this tutorial.",
		"excerpt": "The dedicated Deno SDK has been deprecated in favor of using the Node.js SDK directly through npm specifiers, thanks to Deno's excellent Node.js compatibility. This change simplifies maintenance and ensures you always have access to the latest features. Learn how to setup your first Deno project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key**…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Deno"
		]
	},
	{
		"slug": "quick-starts/dotnet",
		"title": "Start with .NET",
		"description": "Learn to get started with server integrations with Appwrite .NET SDK.",
		"excerpt": "Learn how to setup your first .NET project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			".NET"
		]
	},
	{
		"slug": "quick-starts/flutter",
		"title": "Start with Flutter",
		"description": "Build Flutter apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Flutter project powered by Appwrite. Create a Flutter project. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Flutter app**. You can choose between many different platforms. Add your app **name** and **Hostname**. If you're testing your app locally, **Hostname** should be . For web, in order to capture the OAuth2 callback URL and send…",
		"breadcrumbs": [
			"Quick start",
			"Mobile and native",
			"Flutter"
		]
	},
	{
		"slug": "quick-starts/go",
		"title": "Start with Go",
		"description": "Integrating Appwrite with your Go backend application is a quick and simple process. Get your backend up and running with our step-by-step guide.",
		"excerpt": "Learn how to set up your first Go project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Go"
		]
	},
	{
		"slug": "quick-starts/kotlin",
		"title": "Start with Kotlin",
		"description": "Learn to get started with server integrations with Appwrite Kotlin SDK.",
		"excerpt": "Learn how to setup your first Kotlin project powered by Appwrite. Head to the Appwrite Console. This tutorial is for the Kotlin Server SDK, meant for server and backend applications. If you're trying to build a client-side app, like an Android app, follow the Start with Android guide. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Kotlin"
		]
	},
	{
		"slug": "quick-starts/nextjs",
		"title": "Start with Next.js",
		"description": "Build Next.js apps with the Appwrite React library. Add server-rendered authentication, sign-in, sign-up, and user state without writing the SSR plumbing yourself.",
		"excerpt": "Learn how to set up your first Next.js project with the Appwrite React library. The library ships SSR auth handlers, server helpers, and the same React hooks you use on the client. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. In your project, go to **Overview** > **Integrations**…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Next.js"
		]
	},
	{
		"slug": "quick-starts/node",
		"title": "Start with Node.js",
		"description": "Dive into our step-by-step guide on integrating Appwrite with your Node.js server backend application. Get your backend up and running quickly with this tutorial.",
		"excerpt": "Learn how to setup your first Node.js project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Node.js"
		]
	},
	{
		"slug": "quick-starts/nuxt",
		"title": "Start with Nuxt",
		"description": "Build Nuxt.js apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Nuxt project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a Nuxt project. Install the JavaScript Appwrite SDK. Find your project's ID in the **Settings** page. Create a new file and add the following code to it, replace…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Nuxt"
		]
	},
	{
		"slug": "quick-starts/php",
		"title": "Start with PHP",
		"description": "Dive into our step-by-step guide on integrating Appwrite with your PHP server backend application. Get your backend up and running quickly with this tutorial.",
		"excerpt": "Learn how to setup your first PHP project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"PHP"
		]
	},
	{
		"slug": "quick-starts/python",
		"title": "Start with Python",
		"description": "Learn to get started with server integrations with Appwrite Python SDK.",
		"excerpt": "Learn how to setup your first Python project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Python"
		]
	},
	{
		"slug": "quick-starts/qwik",
		"title": "Start with Qwik",
		"description": "Learn how to use Appwrite to add authentication, user management, file storage, and more to your Qwik apps.",
		"excerpt": "Improve the docs, add this guide. We still don't have this guide in place, but we do have some great news. The Appwrite docs, just like Appwrite, is completely open sourced. This means, anyone can help improve them and add new guides and tutorials. If you see this page, **we're actively looking for contributions to this page**. Follow our contribution guidelines, open a PR to our Website repo, and collaborate with our core team to improve this page.",
		"breadcrumbs": ["Quick start", "Start with Qwik"]
	},
	{
		"slug": "quick-starts/react",
		"title": "Start with React",
		"description": "Build React apps with the Appwrite React library and add authentication, sign-in, sign-up, and user state in a few lines.",
		"excerpt": "Learn how to set up your first React project with the Appwrite React library. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a Vite project. Install the Appwrite React library along with the Web SDK and peer dependency. Find your project's ID in the **Settings** page. Create…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"React"
		]
	},
	{
		"slug": "quick-starts/react-native",
		"title": "Start with React Native",
		"description": "Discover how to leverage Appwrite's powerful backend to help you build React Native apps for iOS, Android and other native platforms.",
		"excerpt": "Learn how to setup your first React Native project powered by Appwrite. The React Native SDK is still in . Proceed with caution if you plan to use this SDK in production. Looking to start with React for web? Follow the React quickstart and React tutorial flows. Create a React Native project using npx. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**,…",
		"breadcrumbs": [
			"Quick start",
			"Mobile and native",
			"React Native"
		]
	},
	{
		"slug": "quick-starts/refine",
		"title": "Start with Refine",
		"description": "Build Refine apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Refine project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a Refine project with Appwrite support. Using the preset eliminates the need for extra dependencies for a quick start. If you want to integrate Appwrite into an existing…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Refine"
		]
	},
	{
		"slug": "quick-starts/ruby",
		"title": "Start with Ruby",
		"description": "Dive into our step-by-step guide on integrating Appwrite with your Ruby server backend application. Get your backend up and running quickly with this tutorial.",
		"excerpt": "Learn how to setup your first Ruby project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Ruby"
		]
	},
	{
		"slug": "quick-starts/rust",
		"title": "Start with Rust",
		"description": "Learn to get started with server integrations with Appwrite Rust SDK.",
		"excerpt": "Learn how to setup your first Rust project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the following scopes. | Category | Required scopes | Purpose | |-----------|-----------------------|---------| | Database | | Allows API key to create, update, and delete databases. | | | | Allows API key to create, update, and delete…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Rust"
		]
	},
	{
		"slug": "quick-starts/solid",
		"title": "Start with Solid",
		"description": "Build Solid apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Solid project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a Vite project. Install the JavaScript Appwrite SDK. Find your project's ID in the **Settings** page. Create a new file and add the following code to it, replace…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Solid"
		]
	},
	{
		"slug": "quick-starts/sveltekit",
		"title": "Start with SvelteKit",
		"description": "Learn how to use Appwrite to add authentication, user management, file storage, and more to your SvelteKit apps.",
		"excerpt": "Learn how to setup your first SvelteKit project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a SvelteKit project. Install the JavaScript Appwrite SDK. Find your project's ID in the **Settings** page. Create a new file and add the following code to it, replace…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"SvelteKit"
		]
	},
	{
		"slug": "quick-starts/swift",
		"title": "Start with Swift",
		"description": "Learn to get started with server integrations with Appwrite Swift SDK.",
		"excerpt": "Learn how to setup your first Swift project powered by Appwrite. This tutorial is for the Swift Server SDK, meant for server and backend applications. If you're trying to build a client-side app, like an iOS, macOS, watchOS or tvOS app, follow the Start with Apple guide. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Integrate with your server**, add an **API Key** with the…",
		"breadcrumbs": [
			"Quick start",
			"Server",
			"Swift"
		]
	},
	{
		"slug": "quick-starts/tanstack-start",
		"title": "Start with TanStack Start",
		"description": "Build TanStack Start apps with the Appwrite React library. Add server-rendered authentication via file-route handlers and server functions.",
		"excerpt": "Learn how to set up your first TanStack Start project with the Appwrite React library. The library exposes a TanStack file-route handler, server helpers, and the same React hooks you use on the client. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. In your project, go to **Overview**…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"TanStack Start"
		]
	},
	{
		"slug": "quick-starts/vue",
		"title": "Start with Vue.js",
		"description": "Build Vue.js apps with Appwrite and learn how to use our powerful backend to add authentication, user management, file storage, and more.",
		"excerpt": "Learn how to setup your first Vue project powered by Appwrite. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip optional steps. Create a Vue project. Install the JavaScript Appwrite SDK. Find your project's ID in the **Settings** page. Create a new file and add the following code to it, replace…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Vue.js"
		]
	},
	{
		"slug": "quick-starts/web",
		"title": "Start with Web",
		"description": "Build JavaScript or Typescript web apps with Appwrite. Add authentication, user management, file storage, and more. Read our guide to get started!",
		"excerpt": "Learn how to add Appwrite to your web apps. Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be or the domain on which you're hosting your web app. You can skip optional steps. You can install the Appwrite Web SDK using a package manager. You can also add the Appwrite Web SDK using CDN by…",
		"breadcrumbs": [
			"Quick start",
			"Web app",
			"Web"
		]
	},
	{
		"slug": "references",
		"title": "API reference",
		"description": "Here's a complete API reference for Appwrite SDK, REST, and GraphQL APIs. Learn how to use Authentication, Databases, Storage, and other Appwrite APIs.",
		"excerpt": "Appwrite lets you build integrations on web, mobile, native, and server platforms through a set of APIs. You can use one of our many SDKs or integrate directly through the REST API or GraphQL API. Client vs Server APIs Client APIs and SDKs are for integrating with Appwrite to build client-based applications and websites. Client APIs only give access to resources if users have been granted permissions. Server API and SDKs are for integrating with Appwrite to build backend or…",
		"breadcrumbs": ["API references", "API reference"]
	},
	{
		"slug": "references/quick-start",
		"title": "Quick start",
		"description": "Configure the Appwrite SDKs and take the necessary steps to start using Appwrite.",
		"excerpt": "Follow these steps before you begin using the Appwrite SDKs or accessing Appwrite through the REST and GraphQL API. If you are choosing Appwrite among BaaS platforms or mapping backend infrastructure options first, skim that guide, then return here to wire SDKs. Appwrite has two types of APIs for different use cases, select one or both depending on your use case. If you're creating a **web, mobile, or native application** used by end-users that will register and create accounts, install…",
		"breadcrumbs": ["API references", "Quick start"]
	},
	{
		"slug": "sdks",
		"title": "SDKs",
		"description": "Get started with Appwrite SDKs and learn how to use them to add authentication, user management, file storage, and more to your apps.",
		"excerpt": "Appwrite provides SDK libraries for major programming languages and platforms so you don't have to write code for interacting with our API protocols from scratch. We're always working on improving and extending the current stack of available platforms and SDKs, listed below is a list of official libraries the Appwrite team is maintaining. Client Client libraries for integrating with Appwrite to build client-based applications and websites. Read one of the many quick starts guides for your framework of choice to…",
		"breadcrumbs": ["SDKs", "SDKs"]
	},
	{
		"slug": "tooling/ai",
		"title": "AI",
		"description": "Discover Appwrite's AI tooling ecosystem. Build with AI-powered development tools, integrate AI capabilities into your apps, and leverage documentation designed for AI consumption.",
		"excerpt": "Appwrite provides a comprehensive set of tools and resources to help you build with AI, from AI-powered development tools that accelerate your workflow to infrastructure for building AI-powered applications. IDEs AI-powered IDEs and code editors provide intelligent code completion and context-aware assistance as you write code. These tools support our MCP servers, giving AI agents direct access to your Appwrite project. Vibe coding Vibe coding platforms let you build applications through natural language. Describe what you want to build and…",
		"breadcrumbs": [
			"AI",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "tooling/ai/agents-md",
		"title": "AGENTS.md",
		"description": "Generate an AGENTS.md file to give AI agents project-specific context about Appwrite SDKs, APIs, and services.",
		"excerpt": "files are instruction files that developers place in their repositories to provide context and guidelines to AI agents. These files help AI tools understand your project structure, coding conventions, and preferences, resulting in more accurate and consistent code suggestions. Most IDEs and agents support this file. When an AI agent encounters an file, it uses the instructions to tailor its responses to your specific project requirements. This includes details about your tech stack, file organization, naming conventions, and architectural patterns.…",
		"breadcrumbs": [
			"AI",
			"Tooling",
			"AGENTS.md"
		]
	},
	{
		"slug": "tooling/ai/agents/antigravity",
		"title": "Google Antigravity",
		"description": "Learn how you can add the Appwrite MCP servers to Agent Manager in Google Antigravity to interact with both the Appwrite API and documentation.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to Antigravity for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. To add the Appwrite MCP server, open Antigravity and go to the drop-down (...) menu in the Agent window .…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"Google Antigravity"
		]
	},
	{
		"slug": "tooling/ai/agents/claude-code",
		"title": "Claude Code",
		"description": "Learn how to use Claude Code with Appwrite through the Appwrite plugin, quick start prompts, and MCP servers for AI-assisted development.",
		"excerpt": "The fastest way to get started with Appwrite in Claude Code is to install the **Appwrite plugin** from the official marketplace. The plugin includes agent skills for the CLI and all major SDKs and sets up MCP servers for both the Appwrite API and documentation, giving Claude Code everything it needs to work with your Appwrite projects. To install the plugin, run the following command in your terminal: Once installed, run Claude Code and configure the plugin: - Run in…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"Claude Code"
		]
	},
	{
		"slug": "tooling/ai/agents/codex",
		"title": "Codex",
		"description": "Learn how to use Codex with Appwrite through the Appwrite plugin, quick start prompts, and MCP servers for AI-assisted development.",
		"excerpt": "The fastest way to get started with Appwrite in Codex is to install the **Appwrite plugin** from the Appwrite marketplace. The plugin includes agent skills for the Appwrite CLI and all major SDKs and registers the Appwrite Docs MCP server, giving Codex access to the Appwrite documentation so that it follows the latest and suggested code patterns. Add the Appwrite marketplace to Codex by running the following command in your terminal: Then run and open the plugins menu to install…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"Codex"
		]
	},
	{
		"slug": "tooling/ai/agents/cursor",
		"title": "Cursor",
		"description": "Learn how to use Cursor with Appwrite through the Appwrite plugin, quick start prompts, and MCP servers for AI-assisted development.",
		"excerpt": "The fastest way to get started with Appwrite in Cursor is to install the **Appwrite plugin** from the Cursor Marketplace. The plugin includes agent skills, MCP servers, and commands, giving Cursor's AI agents everything they need to work with your Appwrite projects. To install the plugin: 1. Visit the Appwrite plugin page on the Cursor Marketplace. 2. Sign in with your Cursor account. 3. Click **Add to Cursor**. 4. The plugin will be added to your editor automatically. Once installed,…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"Cursor"
		]
	},
	{
		"slug": "tooling/ai/agents/opencode",
		"title": "OpenCode",
		"description": "Learn how you can add the Appwrite MCP servers to OpenCode to interact with both the Appwrite API and documentation.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to OpenCode for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. Use the following configuration in your file to use the Appwrite MCP servers. **Configuration:** - Replace with your actual Appwrite…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"OpenCode"
		]
	},
	{
		"slug": "tooling/ai/agents/vscode",
		"title": "VS Code",
		"description": "Learn how you can use Appwrite with VS Code and GitHub Copilot for AI-assisted development. Get started quickly with pre-built prompts and connect to Appwrite MCP servers for deeper integration.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to VS Code for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. In VS Code, open the **Command Palette** (press on Windows or on MacOS) and run the command. Choose which…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"VS Code"
		]
	},
	{
		"slug": "tooling/ai/agents/windsurf",
		"title": "Windsurf",
		"description": "Learn how you can use Windsurf Editor with Appwrite by leveraging MCP servers and quick start prompts to build applications faster.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to Windsurf for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. Open the **Windsurf Settings** page, head to the **Cascade** tab, find the **Model Context Protocol (MCP) Servers** section, and click…",
		"breadcrumbs": [
			"AI",
			"agents",
			"Windsurf"
		]
	},
	{
		"slug": "tooling/ai/agents/zed",
		"title": "Zed",
		"description": "Learn how you can use Zed with Appwrite by adding Appwrite MCP servers and installing Appwrite skills for AI-assisted development.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to Zed for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. No additional prerequisites. The docs server runs as a remote HTTP endpoint. In Zed, open the **Command Palette** (press on MacOS or on Linux), run the action, and choose…",
		"breadcrumbs": [
			"AI",
			"IDEs",
			"Zed"
		]
	},
	{
		"slug": "tooling/ai/ai-in-functions",
		"title": "AI in Functions",
		"description": "Learn how to integrate AI capabilities into your Appwrite Functions using the Vercel AI SDK.",
		"excerpt": "Appwrite Functions let you run AI workloads on the server side, keeping API keys secure and giving you full control over how your application interacts with AI providers. Using the Vercel AI SDK, you can integrate with providers like OpenAI, Anthropic, Google, and others through a unified interface. This guide shows how to build an Appwrite Function that generates text using the Vercel AI SDK with OpenAI. Appwrite Functions do not currently support streaming responses. Support for streaming is coming…",
		"breadcrumbs": [
			"AI",
			"Guides",
			"AI in Functions"
		]
	},
	{
		"slug": "tooling/ai/arena",
		"title": "Appwrite Arena",
		"description": "An open-source benchmark that evaluates how well AI models understand Appwrite's services, SDKs, and APIs.",
		"excerpt": "Appwrite Arena is an open-source benchmark that evaluates how well AI models understand Appwrite. It tests models across real-world Appwrite usage scenarios, covering services, SDKs, and APIs, to help you choose the best model for building with Appwrite. Arena ranks models by their ability to answer questions drawn from actual Appwrite platform usage, both with and without access to Appwrite skills. This makes it easy to see which models generate the most accurate Appwrite code out of the box and…",
		"breadcrumbs": [
			"AI",
			"Tooling",
			"Appwrite Arena"
		]
	},
	{
		"slug": "tooling/ai/assistant",
		"title": "Appwrite Agent",
		"description": "Chat with the Appwrite Agent in the Console to inspect your project, explain issues, and take approved actions.",
		"excerpt": "The Console **Appwrite Assistant** has been replaced by **Appwrite Agent**. Appwrite Agent is the AI chat built into Appwrite Cloud. It inspects your project context, answers how-to questions, clarifies ambiguous requests, and can run approved actions through Appwrite MCP. Appwrite Agent documentation Bookmarks to this page should use Appwrite Agent. Legacy URLs redirect there.",
		"breadcrumbs": ["AI", "Appwrite Agent"]
	},
	{
		"slug": "tooling/ai/docs-as-markdown",
		"title": "Docs as Markdown",
		"description": "Access Appwrite documentation as Markdown for AI consumption.",
		"excerpt": "Appwrite documentation is available as Markdown, making it easy to use with AI-powered development tools, code editors, and LLMs. Markdown lets AI tools process more content within their context limits and focus on the documentation itself instead of parsing HTML. This leads to more accurate responses based on official documentation. Copy as Markdown Every page in the Appwrite documentation includes a **Copy page** button that copies the entire page content as Markdown to your clipboard. This is useful when you…",
		"breadcrumbs": ["AI", "Docs as Markdown"]
	},
	{
		"slug": "tooling/ai/mcp-servers",
		"title": "Model Context Protocol",
		"description": "Enable LLMs and code-generation tools to interact with your Appwrite project",
		"excerpt": "Appwrite offers Model Context Protocol (MCP) servers that allow LLMs to directly interact with Appwrite's API and docs. Using MCP servers, you can use applications such as Claude Code, Codex, Cursor, Claude Desktop, and others to operate on your Appwrite project as well as gain context about the latest updates to Appwrite's SDKs, APIs, and CLI. What is MCP? The Model Context Protocol (MCP) is an open standard that enables Large Language Models (LLMs) and AI code-generation tools to interact…",
		"breadcrumbs": [
			"AI",
			"Tooling",
			"MCP servers"
		]
	},
	{
		"slug": "tooling/ai/mcp-servers/api",
		"title": "MCP server for Appwrite API",
		"description": "Enable LLMs and code-generation tools to interact with the Appwrite API",
		"excerpt": "The MCP server for Appwrite API allows LLMs and code-generation tools to interact with the Appwrite platform and perform various operations on your Appwrite resources, such as creating users, managing databases, and more, using natural language commands. Here are some of the key benefits of using the MCP server: - **Direct API interaction**: Enables LLMs to perform actions directly on your Appwrite project - **Real-time data access**: Allows LLMs to fetch and manipulate live data from your Appwrite instance -…",
		"breadcrumbs": [
			"AI",
			"Model Context Protocol",
			"MCP server for Appwrite API"
		]
	},
	{
		"slug": "tooling/ai/mcp-servers/docs",
		"title": "MCP server for Appwrite docs",
		"description": "Enable LLMs and code-generation tools to interact with the Appwrite docs",
		"excerpt": "The MCP server for Appwrite documentation allows LLMs and code-generation tools to interact with comprehensive Appwrite documentation, enabling intelligent code generation for Appwrite's APIs and SDKs, troubleshooting assistance, and implementation guidance using natural language commands. Here are some of the key benefits of using the MCP server: - **Complete documentation access**: Provides AI assistants with access to all Appwrite documentation - **Real-time context**: Ensures AI responses are based on the latest documentation - **Intelligent search**: Enables semantic search across documentation…",
		"breadcrumbs": [
			"AI",
			"Model Context Protocol",
			"MCP server for Appwrite docs"
		]
	},
	{
		"slug": "tooling/ai/persistent-agents-with-realtime",
		"title": "Persistent Agents with Realtime",
		"description": "Building persistent AI agents using Appwrite Realtime.",
		"excerpt": "AI agents that maintain conversation history across sessions provide more contextual and personalized responses. By storing LLM responses in Appwrite Databases and subscribing to changes through Realtime, you can build chat applications where multiple clients receive updates instantly. Architecture 1. **Store messages**: Save user messages and LLM responses in an Appwrite table 2. **Subscribe to changes**: Use Realtime to listen for new messages 3. **Maintain context**: Load conversation history to provide context to the LLM Set up the messages table…",
		"breadcrumbs": [
			"AI",
			"Guides",
			"Persistent agents with Realtime"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts",
		"title": "Quick start prompts",
		"description": "Use AI assistants and code-generation tools to build Appwrite-powered applications faster using quick start prompts.",
		"excerpt": "**Quick start prompts** are pre-built instructions designed to help AI assistants integrate Appwrite into your project. These prompts guide AI tools like Claude Code, Codex, Cursor, and others through the process of setting up authentication, databases, and other Appwrite services in your application. Quick start prompts offer several advantages when building with Appwrite: - **Faster setup**: Skip the manual configuration and let AI handle the boilerplate code and SDK integration. - **Best practices**: Prompts are crafted to follow Appwrite's recommended…",
		"breadcrumbs": [
			"AI",
			"Getting started",
			"Quick start prompts"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/android-java",
		"title": "Android (Java)",
		"description": "Quickstart prompt for integrating Appwrite with Android using Java.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Android (Java)"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/android-kotlin",
		"title": "Android (Kotlin)",
		"description": "Quickstart prompt for integrating Appwrite with Android using Kotlin.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Android (Kotlin)"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/angular",
		"title": "Angular",
		"description": "Quickstart prompt for integrating Appwrite with Angular.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Angular"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/apple",
		"title": "Apple (Swift)",
		"description": "Quickstart prompt for integrating Appwrite with Apple platforms using Swift.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Apple (Swift)"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/dart",
		"title": "Dart",
		"description": "Quickstart prompt for integrating Appwrite with Dart.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Dart"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/deno",
		"title": "Deno",
		"description": "Quickstart prompt for integrating Appwrite with Deno.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Deno"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/dotnet",
		"title": ".NET",
		"description": "Quickstart prompt for integrating Appwrite with .NET.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			".NET"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/flutter",
		"title": "Flutter",
		"description": "Quickstart prompt for integrating Appwrite with Flutter.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Flutter"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/go",
		"title": "Go",
		"description": "Quickstart prompt for integrating Appwrite with Go.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Go"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/kotlin",
		"title": "Kotlin",
		"description": "Quickstart prompt for integrating Appwrite with Kotlin.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Kotlin"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/nextjs",
		"title": "Next.js",
		"description": "Quickstart prompt for integrating Appwrite with Next.js.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Next.js"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/node",
		"title": "Node.js",
		"description": "Quickstart prompt for integrating Appwrite with Node.js.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Node.js"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/nuxt",
		"title": "Nuxt",
		"description": "Quickstart prompt for integrating Appwrite with Nuxt.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Nuxt"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/php",
		"title": "PHP",
		"description": "Quickstart prompt for integrating Appwrite with PHP.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"PHP"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/python",
		"title": "Python",
		"description": "Quickstart prompt for integrating Appwrite with Python.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Python"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/react",
		"title": "React",
		"description": "Quickstart prompt for integrating Appwrite with React.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"React"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/react-native",
		"title": "React Native",
		"description": "Quickstart prompt for integrating Appwrite with React Native.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"React Native"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/refine",
		"title": "Refine",
		"description": "Quickstart prompt for integrating Appwrite with Refine.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Refine"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/ruby",
		"title": "Ruby",
		"description": "Quickstart prompt for integrating Appwrite with Ruby.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Ruby"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/rust",
		"title": "Rust",
		"description": "Quickstart prompt for integrating Appwrite with Rust.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Rust"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/solid",
		"title": "Solid",
		"description": "Quickstart prompt for integrating Appwrite with Solid.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Solid"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/sveltekit",
		"title": "SvelteKit",
		"description": "Quickstart prompt for integrating Appwrite with SvelteKit.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"SvelteKit"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/swift",
		"title": "Swift",
		"description": "Quickstart prompt for integrating Appwrite with Swift.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Swift"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/tanstack-start",
		"title": "TanStack Start",
		"description": "Quickstart prompt for integrating Appwrite with TanStack Start.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"TanStack Start"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/vue",
		"title": "Vue",
		"description": "Quickstart prompt for integrating Appwrite with Vue.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Vue"
		]
	},
	{
		"slug": "tooling/ai/quickstart-prompts/web",
		"title": "Web",
		"description": "Quickstart prompt for integrating Appwrite with Web.",
		"excerpt": "",
		"breadcrumbs": [
			"AI",
			"Quick start prompts",
			"Web"
		]
	},
	{
		"slug": "tooling/ai/responsible-ai",
		"title": "Responsible AI",
		"description": "Best practices for responsible AI usage with Appwrite. Learn how to protect user data, secure API keys, and build transparent AI-powered applications.",
		"excerpt": "Building AI-powered applications comes with responsibility toward your users and their data. Whether you're using AI development tools to build with Appwrite or integrating AI capabilities into your applications, following these best practices helps you build trustworthy and secure experiences. Protect user data When sending data to AI providers like OpenAI, Anthropic, or others, be mindful of what information leaves your application. - **Avoid sending personal data** to AI providers unless necessary for the feature. Strip personally identifiable information (PII)…",
		"breadcrumbs": ["AI", "Responsible AI"]
	},
	{
		"slug": "tooling/ai/skills",
		"title": "Agent skills",
		"description": "Install Appwrite skills to give AI agents pre-built knowledge of Appwrite SDKs and services for your preferred language.",
		"excerpt": "Skills are open-source Markdown files that give AI agents deep knowledge of Appwrite SDKs and services. When installed, skills provide your AI tools with accurate, language-specific context about Appwrite APIs, so they generate correct code without needing to look up documentation. You can find all Appwrite skills on GitHub. Skills work across all major AI dev tools that support them. They are installed per-project or globally, and are available for all Appwrite client and server SDKs. Supported tools include but…",
		"breadcrumbs": [
			"AI",
			"Tooling",
			"Agent skills"
		]
	},
	{
		"slug": "tooling/ai/vector-db-and-embeddings",
		"title": "Vector DB and embeddings",
		"description": "Using vector databases and embeddings with Appwrite.",
		"excerpt": "Vector databases store high-dimensional vectors (embeddings) that represent text, images, or other data. They enable semantic search, where results are based on meaning rather than exact keyword matches. This makes them essential for AI applications like recommendation systems, search engines, and retrieval-augmented generation (RAG). Embeddings are numerical representations of data that capture semantic meaning. Text with similar meanings will have embeddings that are close together in vector space. Appwrite integrates with vector databases through Functions, allowing you to index your…",
		"breadcrumbs": [
			"AI",
			"Guides",
			"Vector DB and embeddings"
		]
	},
	{
		"slug": "tooling/ai/vibe-coding/bolt",
		"title": "Bolt",
		"description": "Learn how to connect the Appwrite docs MCP server to Bolt for AI-assisted development with access to Appwrite documentation.",
		"excerpt": "To connect the Appwrite docs MCP server to Bolt: 1. Go to **Settings** → **Connectors (MCP)**. 2. Click **Custom MCP server**. 3. Enter the following details: - **Name**: - **URL**: - **Transport Type**: HTTP - **Authentication**: None 4. Click **Add MCP server**. The Appwrite docs MCP server will now be available in your Bolt projects. Once connected, Bolt has access to Appwrite documentation context. You can use prompts like: **Example prompts:** - - - - -",
		"breadcrumbs": [
			"AI",
			"Vibe coding",
			"Bolt"
		]
	},
	{
		"slug": "tooling/ai/vibe-coding/claude-desktop",
		"title": "Claude Desktop",
		"description": "Learn how to use Claude Desktop with Appwrite through quick start prompts and MCP servers for AI-assisted development.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to Claude Desktop for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. In the Claude Desktop app, open the app's **Settings** page (press on Windows or on MacOS) and head to…",
		"breadcrumbs": [
			"AI",
			"Vibe coding",
			"Claude Desktop"
		]
	},
	{
		"slug": "tooling/ai/vibe-coding/emergent",
		"title": "Emergent",
		"description": "Learn how to connect Appwrite MCP servers to Emergent for AI-assisted development with access to the Appwrite API and documentation.",
		"excerpt": "To connect Appwrite MCP servers to Emergent: 1. On the homepage, click **Advanced Controls**. 2. Click **Select MCP Tools**. 3. Click **New MCP Server**. 4. Enter a name for your server (e.g., or ). 5. Paste one of the following JSON configurations: **Configuration:** - Replace with your actual Appwrite project ID - Replace with your Appwrite API key - Replace with your Appwrite Cloud region (e.g., , ) Once connected, you can use natural language to interact with Appwrite. Try…",
		"breadcrumbs": [
			"AI",
			"Vibe coding",
			"Emergent"
		]
	},
	{
		"slug": "tooling/ai/vibe-coding/lovable",
		"title": "Lovable",
		"description": "Learn how to connect the Appwrite docs MCP server to Lovable for AI-assisted development with access to Appwrite documentation.",
		"excerpt": "To connect the Appwrite docs MCP server to Lovable: 1. Go to **Settings** → **Connectors** → **Personal connectors**. 2. Click **New MCP server**. 3. Enter the following details: - **Server name**: - **Server URL**: - **Authentication**: Select **No authentication** 4. Click **Add server**. The Appwrite docs MCP server will now appear in your list of personal connectors. Once connected, Lovable has access to Appwrite documentation context. You can use prompts like: **Example prompts:** - - - - -",
		"breadcrumbs": [
			"AI",
			"Vibe coding",
			"Lovable"
		]
	},
	{
		"slug": "tooling/ai/vibe-coding/zenflow",
		"title": "Zenflow",
		"description": "Learn how to add the Appwrite MCP servers to agents in Zenflow to interact with both the Appwrite API and documentation.",
		"excerpt": "Get started quickly with these pre-built prompts for common Appwrite integrations: Browse all quick start prompts Connect Appwrite MCP servers to Zenflow for deeper integration with the Appwrite API and documentation. Before you begin, ensure you have the following **pre-requisites** installed on your system: uv must be installed on your system. Node.js and npm must be installed on your system. To add the Appwrite MCP server, open Zenflow and go to the **Settings** > **MCP servers**. From there, select your…",
		"breadcrumbs": [
			"AI",
			"Vibe coding",
			"Zenflow"
		]
	},
	{
		"slug": "tooling/appwriter",
		"title": "The Appwriter",
		"description": "Learn about the custom Appwriter mechanical keyboard and its specifications",
		"excerpt": "The Appwriter is an exclusive mechanical keyboard custom-designed by the Appwrite team. It is optimized to improve developer productivity and is specially tuned to use with the Appwrite Console. The Appwriter uses icons from the Appwrite Console and Docs on specific keys, making memorizing keyboard shortcuts easier. For example, then is the shortcut for navigating to your project's databases, and the icon on the key matches the icon for Appwrite Databases. What's in the box - Appwriter keyboard - USB-C…",
		"breadcrumbs": [
			"The Appwriter",
			"tooling",
			"The Appwriter"
		]
	},
	{
		"slug": "tooling/arena",
		"title": "Arena",
		"description": "An open-source benchmark that evaluates how well AI models understand Appwrite's services, SDKs, and APIs.",
		"excerpt": "Appwrite Arena is an open-source benchmark that evaluates how well AI models understand Appwrite. It tests models across real-world Appwrite usage scenarios, covering services, SDKs, and APIs, to help you choose the best model for building with Appwrite. Arena ranks models by their ability to answer questions drawn from actual Appwrite platform usage, both with and without access to Appwrite skills. This makes it easy to see which models generate the most accurate Appwrite code out of the box and…",
		"breadcrumbs": ["tooling", "Arena"]
	},
	{
		"slug": "tooling/command-center",
		"title": "Command Center",
		"description": "Appwrite Command Center enhances developer experience with AI, keyboard shortcuts, and context-aware search for efficient navigation and task execution.",
		"excerpt": "The Appwrite **Command Center** is designed to improve the developer experience by enabling straightforward navigation and exploration of features, settings, and sections of the Appwrite Console. The Command Center is enhanced with AI capabilities and is the home of the Appwrite assistant. It allows you to execute tasks and access features within the Appwrite Console efficiently using keyboard shortcuts and advanced context-aware search. Getting started You can access the Command Center by pressing + on Mac or + on Windows…",
		"breadcrumbs": [
			"Command Center",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "tooling/command-center/shortcuts",
		"title": "Keyboard shortcuts",
		"description": "Learn to navigate the Appwrite Console efficiently and effectively with your keyboard",
		"excerpt": "The Appwrite Console was designed with a keyboard first approach. The Appwrite Console supports keyboard shortcuts that make it easier to navigate and perform actions quicker. Shortcuts The Appwrite Console supports keyboard shortcuts that make it easier to navigate and perform common actions quicker. The shortcuts use the following pattern: use the first letter from the call to action followed by the resource, product, service, or page you're targeting. For example, the shortcut keys + navigates to the project's Storage…",
		"breadcrumbs": [
			"Command Center",
			"Getting started",
			"Shortcuts"
		]
	},
	{
		"slug": "tooling/command-line/buckets",
		"title": "Buckets",
		"description": "Efficiently deploy your Appwrite buckets using the Command-Line Tool (CLI).",
		"excerpt": "The Appwrite CLI allows you to configure and deploy buckets across projects. You can also configure your files using the CLI commands. Initialize bucket Create a new bucket using the following command: Pull bucket You can also pull your existing Appwrite buckets from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing buckets, your file should look similar to the following: You can also move the array…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Buckets"
		]
	},
	{
		"slug": "tooling/command-line/commands",
		"title": "Commands",
		"description": "Learn about Appwrites CLI and the powerful, feature complete commands to manage Appwrite's auth, databases, functions, storage, and more.",
		"excerpt": "All commands are compatible with the latest version of the CLI. We recommend running the CLI on its latest version. Other than commands to create and push databases, tables, functions, messaging-topics, teams, and buckets, the Appwrite CLI can be used as a Server SDK as well. The Appwrite CLI has a command for every Server API endpoint. Commands generally follow the following syntax: Commands Below is a list of the available commands in the Appwrite CLI. You can get more…",
		"breadcrumbs": [
			"CLI",
			"Guides",
			"Commands"
		]
	},
	{
		"slug": "tooling/command-line/functions",
		"title": "Functions",
		"description": "Efficiently deploy your Appwrite functions using the Command-Line Tool (CLI).",
		"excerpt": "The CLI handles the creation, deployment, and execution of Appwrite Functions, as well as the configuration of the variables. You can also develop your function locally using CLI commands. Initialize function Create a new function using the following command: Pull function You can also pull your existing Appwrite Functions from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing functions, your file should look similar to the…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Functions"
		]
	},
	{
		"slug": "tooling/command-line/generate",
		"title": "Generate SDK",
		"description": "Generate a type-safe SDK for your Appwrite project using the Command-Line Tool (CLI). Automatically create typed helpers based on your database schema.",
		"excerpt": "The command creates a type-safe SDK tailored to your Appwrite project. It reads your database schema and generates typed helpers, so you can interact with your tables using auto-completed methods, resulting in a better developer experience. Generate SDK Run the following command in your project directory: The CLI automatically detects your project's language and generates the SDK to a directory. Options * Option * Description --- * * Output directory for generated files (default: ) --- * * Target language…",
		"breadcrumbs": [
			"CLI",
			"Guides",
			"Generate SDK"
		]
	},
	{
		"slug": "tooling/command-line/installation",
		"title": "Installation",
		"description": "Get started with the Appwrite CLI by following the installation guide. Learn how to set up and configure the CLI on your development environment.",
		"excerpt": "The Appwrite Command Line Interface (CLI) is an application that allows you to interact with Appwrite to perform server-side tasks using your terminal. This includes creating and managing projects, managing resources (rows, files, users), creating and deploying Appwrite Functions, and other operations available through Appwrite's API. Getting started The CLI is packaged both as an npm module as well as a standalone binary for your operating system, making it completely dependency free, platform independent, and language agnostic. If you plan…",
		"breadcrumbs": [
			"CLI",
			"Guides",
			"Installation"
		]
	},
	{
		"slug": "tooling/command-line/non-interactive",
		"title": "Non-interactive",
		"description": "Deploy changes to Appwrite projects to migrate databases and tables schema, functions, teams, buckets, and more.",
		"excerpt": "The Appwrite CLI can be used in a non-interactive and headless manner, without saving configuration or sessions. This is especially useful when you want to automate tasks on a continuous integration server. You can enable the non-interactive mode for the Appwrite CLI by setting the , , and : When you set the global configuration parameters using the command, they take precedence over the local configuration parameters in your thereby switching the CLI to non-interactive mode. In this mode, the…",
		"breadcrumbs": [
			"CLI",
			"Guides",
			"Non interactive"
		]
	},
	{
		"slug": "tooling/command-line/sites",
		"title": "Sites",
		"description": "Efficiently deploy your Appwrite Sites using the Command-Line Tool (CLI).",
		"excerpt": "The CLI handles the creation, deployment, and execution of Appwrite Sites, as well as the configuration of the variables. Initialize site Create a new site using the following command: Pull site You can also pull your existing Appwrite Sites from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing sites, your file should look similar to the following: You can also move the array into a separate…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Sites"
		]
	},
	{
		"slug": "tooling/command-line/tables",
		"title": "Tables",
		"description": "Efficiently deploy your Appwrite tables using the Command-Line Tool (CLI).",
		"excerpt": "Create and manage your tables using the CLI commands. The Appwrite CLI also helps you push your project's databases and tables schema from one project to another. Initialize table Create a new table using the following command: Pull table You can also pull your existing Appwrite tables and databases from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing tables, your file should look similar to the…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Tables"
		]
	},
	{
		"slug": "tooling/command-line/teams",
		"title": "Teams",
		"description": "Efficiently deploy your Appwrite teams using the Command-Line Tool (CLI).",
		"excerpt": "The Appwrite CLI can create teams to organize users. Teams can be used to configure permissions for a group of users. Initialize team Create a new team using the following command: Pull team You can also pull your existing Appwrite teams from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing teams, your file should look similar to the following: You can also move the array into…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Teams"
		]
	},
	{
		"slug": "tooling/command-line/topics",
		"title": "Topics",
		"description": "Efficiently deploy your Appwrite topics using the Command-Line Tool (CLI).",
		"excerpt": "The Appwrite CLI can create, update, delete, and get topics, as well as configure the provider and the subscribers. Initialize topic Create a new topic using the following command: Pull topics You can also pull your existing Appwrite topics from the Appwrite Console using the command in the folder containing your file. appwrite.config.json After initializing your Appwrite project and pulling your existing topics, your file should look similar to the following: You can also move the array into a separate…",
		"breadcrumbs": [
			"CLI",
			"Deployments",
			"Topics"
		]
	},
	{
		"slug": "tooling/terraform",
		"title": "Terraform provider",
		"description": "Manage Appwrite infrastructure as code with the official Terraform provider. Works with Appwrite Cloud and Community Edition.",
		"excerpt": "The Terraform provider for Appwrite lets you declare **TablesDB** (databases, tables, columns, indexes, rows), **Storage** (buckets and files), **Auth** (users and teams), **Functions** (functions and variables), **Sites** (sites and variables), **Messaging** (providers, topics, subscribers), **webhooks**, **backup policies**, and more in files, and apply those changes through HashiCorp Terraform. It is the official way to automate Appwrite project configuration alongside the rest of your stack. Resources Resource types use the prefix and match the Terraform Registry documentation. | Area | Resources…",
		"breadcrumbs": [
			"Terraform provider",
			"Getting started",
			"Overview"
		]
	},
	{
		"slug": "tooling/terraform/provider",
		"title": "Configuration",
		"description": "Configure the Appwrite Terraform provider for Cloud or Community Edition using endpoints, API keys, and optional environment variables.",
		"excerpt": "The Appwrite provider is published as on the Terraform Registry. The registry hosts **generated reference docs** for the provider and every resource and data source: latest docs. Full examples and attribute tables also live in the provider repository. Terraform block Declare the provider source in a block. You can add a constraint when you want to pin a release; see published versions on the registry provider page. Appwrite Cloud Replace with your project’s region subdomain (see Regions). Community Edition For…",
		"breadcrumbs": [
			"Terraform provider",
			"Getting started",
			"Configuration"
		]
	},
	{
		"slug": "tooling/terraform/resources/auth",
		"title": "Auth",
		"description": "Manage Appwrite users and teams with the Terraform provider.",
		"excerpt": "The provider exposes **Auth** resources so you can align users and teams with the rest of your infrastructure-as-code workflow. For generated schemas and import syntax, see the Terraform Registry: auth_user and auth_team. The provider repository contains source and examples. Resources | Resource | Purpose | |----------|---------| | | Create and manage users | | | Create and manage teams | Use these together with your normal Auth and permission models; scope API keys appropriately when Terraform manages identity resources. Examples…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Auth"
		]
	},
	{
		"slug": "tooling/terraform/resources/backups",
		"title": "Backups",
		"description": "Configure Appwrite backup policies with Terraform where your plan supports them.",
		"excerpt": "The resource configures **backup policies** for supported resources. Availability depends on your Appwrite Cloud plan or self-hosted setup. See the Terraform Registry: backup_policy. The provider repository lists the full argument reference. Resource | Resource | Purpose | |----------|---------| | | Configure backup policies for supported resources | Policies use **** (CRON), **** (days), and **** (for example ). Omit **** to cover all databases in the project, or set **** to a specific database ID (often ) to back up…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Backups"
		]
	},
	{
		"slug": "tooling/terraform/resources/databases",
		"title": "Databases",
		"description": "Use Terraform to manage Appwrite TablesDB databases, tables, columns, indexes, and rows with the official Appwrite provider.",
		"excerpt": "The provider exposes Appwrite **TablesDB** as Terraform resources. Typical order: create a **database** (), then **tables**, then **columns** and **indexes**, and optionally **rows**. For full generated schemas, see the Terraform Registry: tablesdb, tablesdb_table, tablesdb_column, tablesdb_index, and tablesdb_row. The provider repository contains the source and examples. Resources | Resource | Purpose | |----------|---------| | | Create a database in your project | | | Create a table within a database | | | Define columns (types, constraints, defaults) | | |…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Databases"
		]
	},
	{
		"slug": "tooling/terraform/resources/functions",
		"title": "Functions",
		"description": "Manage Appwrite Functions, environment variables, and deployments with Terraform.",
		"excerpt": "Functions can be declared as Terraform resources, including **runtime**, **entrypoint**, **build commands**, **events**, and **per-function environment variables**. The provider also exposes an **** resource so you can ship code from a local tar archive or from a Git template alongside the rest of your configuration. See the Terraform Registry: function, function_variable, and function_deployment. The provider repository includes examples. Resources | Resource | Purpose | |----------|---------| | | Create and update a function (runtime, entrypoint, commands, events, timeout, and related settings)…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Functions"
		]
	},
	{
		"slug": "tooling/terraform/resources/messaging",
		"title": "Messaging",
		"description": "Configure Appwrite Messaging providers, topics, and subscribers with Terraform for email, SMS, and push delivery.",
		"excerpt": "Messaging integrates email, SMS, and push providers. The Terraform provider exposes **providers** (credentials and channel configuration), **topics** (groupings of subscribers for broadcasts), and **subscribers** (who receives messages on a topic). See the Terraform Registry for generated schemas: messaging_provider, messaging_topic, and messaging_subscriber. The provider repository lists every and optional field in source; provider-specific arguments apply only to the matching provider (for example Twilio , SMTP and , FCM ). Resources | Resource | Purpose | |----------|---------| | | Register an email,…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Messaging"
		]
	},
	{
		"slug": "tooling/terraform/resources/sites",
		"title": "Sites",
		"description": "Manage Appwrite Sites, environment variables, and deployments with Terraform.",
		"excerpt": "Sites supports Terraform resources for the **site** definition, **build-time environment variables**, and **deployments** that publish your site from a local artifact or a Git template. See the Terraform Registry: site, site_variable, and site_deployment. The provider repository includes examples. Resources | Resource | Purpose | |----------|---------| | | Create and update a site (framework, build and install commands, runtimes, and related settings) | | | Set environment variables for a site (for example keys) | | | Push a new deployment…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Sites"
		]
	},
	{
		"slug": "tooling/terraform/resources/storage",
		"title": "Storage",
		"description": "Manage Appwrite Storage buckets and files with the Terraform provider, including file limits, extensions, compression, and security options.",
		"excerpt": "The resource manages Storage buckets in your Appwrite project: file size limits, allowed extensions, compression, image transformations, encryption, and optional antivirus. The resource uploads and manages **files** inside a bucket from a local path on the machine running Terraform. See the Terraform Registry for generated schemas: storage_bucket and storage_file. The provider repository contains source and examples. Resources | Resource | Purpose | |----------|---------| | | Create and update a storage bucket | | | Upload and manage a file in…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Storage"
		]
	},
	{
		"slug": "tooling/terraform/resources/webhooks",
		"title": "Webhooks",
		"description": "Register Appwrite webhooks with Terraform to deliver events to your HTTP endpoints.",
		"excerpt": "The resource registers a **URL** and **event** subscriptions so Appwrite can notify your services when resources change. Configure **** for TLS verification on the webhook URL, **** and **** when your endpoint expects HTTP basic authentication, and read **** from Terraform state when you verify **incoming** webhook signatures on your server. See the Terraform Registry: webhook. The provider repository lists the full argument reference. Resource | Resource | Purpose | |----------|---------| | | Register a webhook URL and subscribe to…",
		"breadcrumbs": [
			"Terraform provider",
			"Resources",
			"Webhooks"
		]
	},
	{
		"slug": "tutorials/android/step-1",
		"title": "Build an ideas tracker with Android",
		"description": "Learn to build an Android app with no backend code using an Appwrite backend.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and Android. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Basic knowledge of Kotlin and Android development. 2. Have Android Studio installed on your computer.",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/android/step-2",
		"title": "Create app",
		"description": "Create a Android app project using Appwrite.",
		"excerpt": "Create Android project Create a Android app with the Android Studio **New Project** wizard. Select **Empty Activity** as the template. Add dependencies Install the Android Appwrite SDK. Add the following to your dependencies in the file: In case you need to create OAuth 2 sessions in the future, the following activity needs to be added inside the tag, along side the existing tags in your AndroidManifest.xml. Be sure to replace the **** string with your actual Appwrite project ID. You…",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/android/step-3",
		"title": "Set up Appwrite",
		"description": "Initialize Appwrite in your Android project.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add an **Android app**. The **Package Name** should be the same as the one you used when creating your app. You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our Android app, we'll need to find our project ID. Find your project's ID in the **Settings** page. Create a…",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/android/step-4",
		"title": "Add authentication",
		"description": "Add Appwrite authentication to you Android app.",
		"excerpt": "Creating an account service We can use services to abstract business logic from our views. Create a service to handle user authentication with a new file . Add the following code to it. We can now use this service to login, register and logout a user. Integrate the service to the file. Look for to find where the changes made here. Login screen Using this service, we can now create a screen to login or register a user. Create a…",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/android/step-5",
		"title": "Add MainActivity",
		"description": "Add navigation to your Android application.",
		"excerpt": "Creating the MainActivity To show the new screen, we need to set up our class. Open and update it with following code. This code sets up our with a bottom navigation bar, including a **User** screen. Test the MainActivity Launch the app and you should be able to use the Login screen to register, login, and logout. Confirm your email address is displayed once you are logged in.",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Add MainActivity"
		]
	},
	{
		"slug": "tutorials/android/step-6",
		"title": "Add database",
		"description": "Add databases and queries to store user data in you Android application.",
		"excerpt": "Create table In Appwrite, data is stored as a table of rows. Create a table in the Appwrite Console to store our ideas. Create a new table with the following columns: | Column | Type | Required | Size | |-------------|--------|----------|----------| | userId | Varchar | Yes | 200 | | title | Varchar | Yes | 200 | | description | Text | No | - | Navigate to the **Settings** tab of your table, add the role **Any**…",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/android/step-7",
		"title": "Create ideas page",
		"description": "Add pagination and ordering to you Android application powered by Appwrite Databases.",
		"excerpt": "Using the , we can build a screen to submit and view ideas. Overwrite the contents of with the following code. Update navigation Update to add the to the navigation bar. Look for to find where the changes made here.",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Create ideas page"
		]
	},
	{
		"slug": "tutorials/android/step-8",
		"title": "Next steps",
		"description": "View your Android project powered by Appwrite authentication and databases.",
		"excerpt": "Test your project You can now run your project and test it on your Android device or emulator.",
		"breadcrumbs": [
			"Android",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/apple/step-1",
		"title": "Coming soon",
		"description": "Learn to build an Apple app with no backend code using an Appwrite backend.",
		"excerpt": "Improve the docs, add this guide. We still don't have this guide in place, but we do have some great news. The Appwrite docs, just like Appwrite, is completely open sourced. This means, anyone can help improve them and add new guides and tutorials. If you see this page, **we're actively looking for contributions to this page**. Follow our contribution guidelines, open a PR to our Website repo, and collaborate with our core team to improve this page.",
		"breadcrumbs": [
			"Apple",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-1",
		"title": "Server-side authentication with Astro",
		"description": "Add SSR authentication to your Astro app with Appwrite",
		"excerpt": "Appwrite takes away the stress of building and maintaining a backend. Appwrite helps implement authentication, databases, file storage, and respond to real-time events with **secure** APIs out of the box. If you're a Astro developer, the examples in this guide show you how Appwrite can help you add authentication to Astro apps faster. Before you start Before following this tutorial, have the following prepared: - A recent version of Node.js installed on your system. - A basic knowledge of Astro.…",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-2",
		"title": "Create project",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "Create an Astro project using: The command prompt will be something similar to this. After the prompt is finished, you can head over to the newly created project. Install Appwrite Appwrite provides a Node SDK that can be used in your Astro apps. You can use Appwrite by installing the Node SDK as an NPM package. The Node SDK is intended for server-side use. If you want to use Appwrite in a client-side application, you should use the Web SDK…",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Create project"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-3",
		"title": "Initialize SDK",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "Before you can use Appwrite, you need to create the Appwrite and set the project ID and endpoint. The client is then used to create services like and , so they all point to the same Appwrite project. Create a function to build services you need in a file like and **exporting the instances**. As part of the function, set the current user's session if they are logged in. This is done by accessing the session cookie from the request…",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Initialize SDK"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-4",
		"title": "Add a server hook",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "Astro middleware are functions that run on the server before a page is displayed to the user. Astro locals are a way to store data that is specific to the current request. We can use these features to store the user's account data, so that it is available to all pages. Create a new file in the directory called : To ensure the object is typed correctly, we can add a type definition for it in a file at the…",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Add a server hook"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-5",
		"title": "Create sign up page",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "We can now implement our sign up page. Create a file in the directory: This is an HTML form with an email and password input. When the form is submitted, we want to send the email and password to Appwrite to authenticate the user. To use Astro form actions, add an statement to the server-side javascript. In the same file, implement the following.",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Create sign up page"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-6",
		"title": "Create account page",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "Now the end-user is able to sign up, we can create the account page. This page will display basic information about the user, and allow the user to log out. Create a new file in the directory called and add the following code:",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"Create account page"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-7",
		"title": "OAuth authentication with SSR",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "To support the OAuth flow, we first redirect the user to the OAuth provider, and then handle the callback from the OAuth provider. To redirect, add a button to our sign up page that redirects the user to the OAuth provider. Add a new route to handle the redirect. The method returns a URL to the OAuth provider. After authentication the OAuth provider redirects the user back to the route with the and URL query parameters. Create a new route…",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"OAuth authentication with SSR"
		]
	},
	{
		"slug": "tutorials/astro-ssr-auth/step-8",
		"title": "All set",
		"description": "Add authentication to a Astro project using Appwrite.",
		"excerpt": "Start a preview of your app by running . If you want to see the complete source code with styling, see the demos-for-astro repository. Other authentication methods Appwrite also supports OAuth, passwordless login, anonymous login, and phone login. Learn more about them in the authentication guide.",
		"breadcrumbs": [
			"Astro SSR",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/flutter/step-1",
		"title": "Coming soon",
		"description": "Learn to build an Flutter app with no backend code using an Appwrite backend.",
		"excerpt": "Improve the docs, add this guide. We still don't have this guide in place, but we do have some great news. The Appwrite docs, just like Appwrite, is completely open sourced. This means, anyone can help improve them and add new guides and tutorials. If you see this page, **we're actively looking for contributions to this page**. Follow our contribution guidelines, open a PR to our Website repo, and collaborate with our core team to improve this page.",
		"breadcrumbs": [
			"Flutter",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-1",
		"title": "Server-side authentication with Next.js",
		"description": "Add SSR authentication to your Next.js app with Appwrite",
		"excerpt": "Appwrite takes away the stress of building and maintaining a backend. Appwrite helps implement authentication, databases, file storage, and respond to real-time events with **secure** APIs out of the box. If you're a Next.js developer, the examples in this guide show you how Appwrite can help you add authentication to Next.js apps faster. Before you start Before following this tutorial, have the following prepared: - A recent version of Node.js installed on your system. - A basic knowledge of Next.js…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-2",
		"title": "Create project",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "Create a project using Next.js. The command will give you a prompt with several project types. We'll be starting with a skeleton project. The prompt will be something similar to this. After the prompt is finished, you can head over to the newly created project. Install Appwrite Appwrite provides a Node SDK that can be used in your Next.js apps. You can use Appwrite by installing the Node SDK as an NPM package. The Node SDK is intended for server-side…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Create project"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-3",
		"title": "Initialize SDK",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "Before you can use Appwrite, you need to create the Appwrite and set the project ID and endpoint. The client is then used to create services like and , so they all point to the same Appwrite project. Create a function to build services you need in a file like and **exporting the instances**. As part of the function, set the current user's session if they are logged in. This is done by accessing the session cookie from the request…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Initialize SDK"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-4",
		"title": "Get the logged in user",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "Build a utility function to get the logged in user from Appwrite. This function will be used in our components and routes to check if a user is logged in, and access the user's details. Edit the file to create a new function called . Now, use the function in the home page to redirect based on the user's login status. Create a new file in the directory called . The user will be redirected to the sign up page…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Get the logged in user"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-5",
		"title": "Create sign up page",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "We can now implement our sign up page. Create a file in the directory: This is an HTML form with an email and password input. When the form is submitted, we want to send the email and password to Appwrite to authenticate the user. To use Next.js form actions we create the function in the same file: The function is an async function that takes the form data as an argument. It uses the function to create an admin Appwrite…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Create sign up page"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-6",
		"title": "Create account page",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "Now the end-user is able to sign up, we can create the account page. This page will display basic information about the user, and allow the user to log out. Create a new file in the directory called and add the following code: This code is similar to the page, but it uses the function to get the user's information. If the user is not logged in, the page will redirect to the sign-in page. Again, we use Next.js form…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"Create account page"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-7",
		"title": "OAuth authentication with SSR",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "Enable OAuth provider To enable the GitHub OAuth provider, navigate to your Appwrite Console > Auth > Settings > OAuth2 Providers > GitHub To support the OAuth flow, we first redirect the user to the OAuth provider, and then handle the callback from the OAuth provider. OAuth server action Add a new server action. Navigate to and create a new file : The method redirects the user to the OAuth provider, and then the OAuth provider redirects the user back…",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"OAuth authentication with SSR"
		]
	},
	{
		"slug": "tutorials/nextjs-ssr-auth/step-8",
		"title": "All set",
		"description": "Add authentication to a Next.js project using Appwrite.",
		"excerpt": "If you want to see the complete source code with styling, see the demos-for-react repository. Other authentication methods Appwrite also supports OAuth, passwordless login, anonymous login, and phone login. Learn more about them in the authentication guide.",
		"breadcrumbs": [
			"Next.js SSR",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/nextjs/step-1",
		"title": "Build an idea tracker with Next.js",
		"description": "Learn to build an idea tracker app with Appwrite and Next.js with authentication, databases and tables, queries, pagination, and file storage.",
		"excerpt": "**Idea Tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build an Idea Tracker with Appwrite and Next.js. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Navigation 4. Databases and tables 5. Queries Prerequisites 1. Basic knowledge of JavaScript and React. 2. Have Node.js and NPM installed on your computer.",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/nextjs/step-2",
		"title": "Create app",
		"description": "Create a Next.js app project and integrate with Appwrite",
		"excerpt": "Create Next.js project Create a Next.js app with the command. The command will install all the necessary dependencies for you. Add dependencies Once the project is created, change your current working directory and install the JavaScript Appwrite SDK. Open and replace the content with the following to import the relevant style files. You can start your development server to see your app in the browser. This will start a server at .",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/nextjs/step-3",
		"title": "Set up Appwrite",
		"description": "Import and configure a project with Appwrite Cloud.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip the optional steps. Environment variables To connect to Appwrite in our app, we'll need to configure our project endpoint and project ID. We keep the secrets by using environment variables for the endpoint and project ID. Your project ID is…",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/nextjs/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your Next.js application using Appwrite Web SDK",
		"excerpt": "For our ideas tracker app, we want any visitor to be able to read the ideas that are stored. On the other hand, we don't want the page spammed with just about anything from anyone just stopping by. To prevent that, or at least making it a bit more difficult, editing ideas will be available for logged in users only. With authentication, we can differentiate between users and decide which users have access to which content. We will build a…",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/nextjs/step-5",
		"title": "Add navigation",
		"description": "Add navigation to your app.",
		"excerpt": "To help our users navigate the app we want it to have a navigation bar that's visible on all pages. We will use the hook for information about the current user. With this piece of information we will show a login button when no user is logged in and a logout button when one is. We will also put the user's email address next to the logout button. Create a new file and add the code below. Now we need…",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Add navigation"
		]
	},
	{
		"slug": "tutorials/nextjs/step-6",
		"title": "Add database",
		"description": "Add databases and queries for ideas in your Next.js project.",
		"excerpt": "In Appwrite, data is stored as a table of rows. Create a new database and table in the Appwrite Console to store the ideas. Create a new table with the following columns: | Field | Type | Required | Size | |-------------|--------|----------|----------| | userId | Varchar | Yes | 200 | | title | Varchar | Yes | 200 | | description | Text | No | - | Change the table's permissions in the settings to give access. Navigate…",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/nextjs/step-7",
		"title": "Ideas page",
		"description": "Add ideas from Appwrite database in your app.",
		"excerpt": "With the methods in the hook we can get some ideas to the home page for the users to interact with. We will use it in a form component so the logged in users can add their ideas, and in a list component to render the ten most recent ideas. We start with building the form. Idea form On the home page, the logged in users should be able to add their ideas to the Appwrite database. The form needs…",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Ideas page"
		]
	},
	{
		"slug": "tutorials/nextjs/step-8",
		"title": "Next steps",
		"description": "View your Next.js app built on Appwrite Cloud.",
		"excerpt": "Test your project Run your project with and open the URL shown by the NPM command in your browser. Head to the Appwrite Console to see the new users and follow their interactions.",
		"breadcrumbs": [
			"Next.js",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-1",
		"title": "Server-side authentication with Nuxt",
		"description": "Add SSR authentication to your Nuxt app with Appwrite",
		"excerpt": "Appwrite takes away the stress of building and maintaining a backend. Appwrite helps implement authentication, databases, file storage, and respond to real-time events with **secure** APIs out of the box. This tutorials shows how Appwrite can help you add authentication to your Nuxt app using server-side rendering (SSR). Before you start Before following this tutorial, have the following prepared: - A recent version of Node.js installed on your system. - A basic knowledge of Vue and Nuxt. If you're inspired…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-2",
		"title": "Create project",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "Create a Vue project using Nuxt. The command will give you a prompt with several options, the prompt will be something similar to this. After the prompt is finished, you can head over to the newly created project. Install Appwrite Appwrite provides a Node SDK that can be used in your Nuxt apps. You can use Appwrite by installing the Node SDK as an NPM package. The Node SDK is intended for server-side use. If you want to use Appwrite…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Create project"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-3",
		"title": "Initialize SDK",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "Before you can use Appwrite, you need to create the Appwrite and set the project ID and endpoint. The client is then used to create services like and , so they all point to the same Appwrite project. Create a function to the build services you need in a file like and **exporting the instances**. As part of the function, set the current user's session if they are logged in. This is done by accessing the session cookie from the…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Initialize SDK"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-4",
		"title": "Add server middleware",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "Nuxt server middle are functions that run on the server before a route is displayed to the user. Nuxt context allows you to store data for the lifecycle of the current request. We can use this to store the user's account data, so that it is available to all pages. Create a new file in the directory called . To ensure the object is typed correctly, we can add a type definition for it in the file: Now, use the…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Add server middleware"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-5",
		"title": "Create sign up page",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "We can now implement our sign up page. Create a file in the directory. This is an HTML form with an email and password input. When the form is submitted, we want to send the email and password to Appwrite to authenticate the user. To use Nuxt form actions we create a file in the directory:",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Create sign up page"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-6",
		"title": "Create account page",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "Now the end-user is able to sign up, we can create the account page. This page will display basic information about the user, and allow the user to log out. Before creating the account page, the route should fetch the user data. Create a new file in the directory and add the following code: Create a new file in the directory called and add the following code: This page will display the user's email, name, and ID. It also contains…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Create account page"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-7",
		"title": "OAuth authentication with SSR",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "To support the OAuth flow, we first redirect the user to the OAuth provider, and then handle the callback from the OAuth provider. To redirect, add a button to our sign up page that redirects the user to the OAuth provider. Add a new server route to handle the redirect. The method redirects the user to the OAuth provider, and then the OAuth provider redirects the user back to the route with the and URL query parameters. Handle the callback…",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"OAuth authentication with SSR"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-8",
		"title": "Enable the sign up and account pages",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "For the last step, we must remove the welcome page and enable the pages we have created so far. For that, head to the file, and replace with so that code looks as follows: Replace with to allow the user to navigate to the pages created so far, such as the sign-up and account pages, instead of the default Nuxt welcome page.",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"Enable the sign up and account pages"
		]
	},
	{
		"slug": "tutorials/nuxt-ssr-auth/step-9",
		"title": "All set",
		"description": "Add authentication to a Nuxt project using Appwrite.",
		"excerpt": "If you want to see the complete source code with styling, see the nuxt-ssr-auth repository. Other authentication methods Appwrite also supports OAuth, passwordless login, anonymous login, and phone login. Learn more about them in the authentication guide.",
		"breadcrumbs": [
			"Nuxt SSR",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/nuxt/step-1",
		"title": "Build an ideas tracker with Nuxt",
		"description": "Learn to build an idea tracker app with Appwrite and Nuxt with authentication, databases and tables, queries, pagination, and file storage.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and Nuxt. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Navigation 4. Databases and tables 5. Queries Prerequisites 1. Basic knowledge of JavaScript. 2. Have Node.js and NPM installed on your computer.",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/nuxt/step-2",
		"title": "Create app",
		"description": "Create a Nuxt app project and integrate with Appwrite",
		"excerpt": "Create Nuxt project Create a Nuxt app with the command. The command will install all the necessary dependencies for you. Add dependencies Once the project is created, change your current working directory and install the JavaScript Appwrite SDK. Open and import the relevant style files. Then update to disable SSR for now. SSR support is coming soon to Appwrite, for now, disable SSR. You can start the development server to watch your app update in the browser as you make…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/nuxt/step-3",
		"title": "Set up Appwrite",
		"description": "Import and configure a project with Appwrite Cloud.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be . You can skip the optional steps. Environment variables To connect to Appwrite in our app, we'll need to use sensitive information. We keep the secrets by using environment variables for the endpoint and project id. Your project id is located in the **Settings**…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/nuxt/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your Nuxt application using Appwrite Web SDK",
		"excerpt": "For our ideas tracker app, we want any visitor to be able to read the ideas that are stored. On the other hand, we don't want the page spammed with just about anything from anyone just stopping by. To prevent that, or at least making it a bit more difficult, editing ideas will be available for logged in users only. With a login function, we can differentiate between users and decide which users have access to which content. We will…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/nuxt/step-5",
		"title": "Add navigation",
		"description": "Add navigation to your app.",
		"excerpt": "To help our users navigate the app we want it to have a navigation bar that's visible on all pages. We will once again use the composable for information about the current user. With this piece of information we will show a login button when no user is logged in and a logout button when one is. We will also put the user's e-mail address next to the logout button. From the directory, create the file and add the code…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Add navigation"
		]
	},
	{
		"slug": "tutorials/nuxt/step-6",
		"title": "Add database",
		"description": "Add databases and queries for ideas in your Nuxt project.",
		"excerpt": "In Appwrite, data is stored as a table of rows. Create a new database and table in the Appwrite Console to store the ideas. Create a new table with the following columns: | Field | Type | Required | Size | |-------------|--------|----------|----------| | userId | Varchar | Yes | 200 | | title | Varchar | Yes | 200 | | description | Text | No | - | Change the table's permissions in the settings to give access. Navigate…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/nuxt/step-7",
		"title": "Ideas page",
		"description": "Add ideas from Appwrite database in your app.",
		"excerpt": "With the methods in the composable we can get some ideas to the home page for the users to interact with. We will use it in a form component so the logged in users can add their ideas, and in a list component to render the ten most recent ideas. We start with building the form. Idea form On the home page, the logged in users should be able to add their ideas to the Appwrite database. The form need…",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Ideas page"
		]
	},
	{
		"slug": "tutorials/nuxt/step-8",
		"title": "Next steps",
		"description": "View your Nuxt app built on Appwrite Cloud.",
		"excerpt": "Test your project Run your project with and open the URL shown by the NPM command in your browser. Head to the Appwrite Console to see the new users and follow their interactions.",
		"breadcrumbs": [
			"Nuxt",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/react-native/step-1",
		"title": "Build an ideas tracker with React Native",
		"description": "Learn to build a React Native app with no backend code using an Appwrite backend.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and React Native. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Android, iOS simulators, or a physical device to run the app 2. Have Node.js and NPM installed on your computer 3. Basic knowledge…",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/react-native/step-2",
		"title": "Create app",
		"description": "Create a React Native app project and integrate with Appwrite.",
		"excerpt": "Create React Native project Create a React Native app with the command. Add dependencies Install the React Native Appwrite SDK. Then, install React Navigation to help implement simple navigation logic. Install peer dependencies needed for React Navigation. For iOS with bare React Native project, make sure you have CocoaPods installed. Then install the pods to complete the installation:",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/react-native/step-3",
		"title": "Set up Appwrite",
		"description": "Import and initialize Appwrite for your React Native application.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Android** or **Apple** platform with the package/bundle ID . You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our React Native app, you'll need to find our project ID. Find your project's ID in the **Settings** page. Create a new file to hold our Appwrite related code.…",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/react-native/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your React Native application.",
		"excerpt": "User context In React Native, you can use context to share data between components. You can use a context and a custom hook to manage our user's data. Create a new file and add the following code to it. Now, you can use the hook to access the user's data from any component wrapped by this context's provider. Display toasts For a better user experience, display toasts when the users perform an action, such as login, logout, create new ideas,…",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/react-native/step-5",
		"title": "Add routing",
		"description": "Add routing to your React Native applicating using Appwrite.",
		"excerpt": "In this step, you'll add some basic routing to your app. Based on the user's login status, you'll redirect them to the login page or the home page. Home page Create a new file and add the following stub code to it. We'll update this page later to display the ideas posted by other users and allow the user to post their ideas. Basic routing To handle basic routing, you can use the library. This router also consumes the to…",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Add routing"
		]
	},
	{
		"slug": "tutorials/react-native/step-6",
		"title": "Add database",
		"description": "Connect a database to your React Native application using Appwrite Web SDK.",
		"excerpt": "In this step, you'll set up a database to store ideas in Appwrite, configure permissions, then create a context to manage ideas in your React Native app. Create table In Appwrite, data is stored as a table of rows. Create a table in the Appwrite Console to store our ideas. Create a new table with the following columns: | Field | Type | Required | |-------------|--------|----------| | userId | Varchar | Yes | | title | Varchar | Yes |…",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/react-native/step-7",
		"title": "Create ideas page",
		"description": "Add database queries and pagination using Appwrite in your React Native application.",
		"excerpt": "Using the hook you can now display the ideas on the page and create a form to submit new ideas. If an idea is submitted by the logged-in user, a remove button will be displayed to remove the idea. While this check uses the user ID to determine the render logic, permissions set in step 6 will be used to enforce that only the owner of the idea can remove it. Overwrite the contents of with the following:",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Create ideas page"
		]
	},
	{
		"slug": "tutorials/react-native/step-8",
		"title": "Next steps",
		"description": "Run your React Native project built with Appwrite",
		"excerpt": "Test your project You can run your projects with . This will start the Metro bundler and open the Expo Go app on your device. You can also run your project on an emulator or simulator by pressing for iOS and for Android. Bundling for production Appwrite's React Native SDK is designed to work with the Expo Metro bundler. When you are ready to build your app for production, you can learn more in the Expo documentation.",
		"breadcrumbs": [
			"React Native",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/react/step-1",
		"title": "Build an ideas tracker with React",
		"description": "Learn to build a React app with no backend code using an Appwrite backend.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and React. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Basic knowledge of JavaScript and React. 2. Have Node.js and NPM installed on your computer",
		"breadcrumbs": [
			"React",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/react/step-2",
		"title": "Create app",
		"description": "Create a React app project and integrate with Appwrite.",
		"excerpt": "Create React project Create a React app with the command. Add dependencies Install the JavaScript Appwrite SDK. You can start the development server to watch your app update in the browser as you make changes.",
		"breadcrumbs": [
			"React",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/react/step-3",
		"title": "Set up Appwrite",
		"description": "Import and initialize Appwrite for your react application.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost. You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our React app, we'll need to find our project ID. Find your project's ID in the **Settings** page. Create a new file to hold our Appwrite related code. Only one instance…",
		"breadcrumbs": [
			"React",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/react/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your react application.",
		"excerpt": "User context In React, you can use context to share data between components. We'll use context and a custom hook to manage our user's data. Create a new file and add the following code to it. Now, we can use the hook to access the user's data from any component. However, we first need to wrap our app with the . Basic routing First, wrap the element with the component. Update to the following code. Then, optionally render the component…",
		"breadcrumbs": [
			"React",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/react/step-5",
		"title": "Add navigation",
		"description": "Add navigation to your React applicating using Appwrite.",
		"excerpt": "In our app we want to have a navigation bar that is always visible. We will add it to the component and use the hook to show either: - a logout button if the user is logged in. - a login button if the user is not logged in. Update the App component in :",
		"breadcrumbs": [
			"React",
			"Steps",
			"Add navigation"
		]
	},
	{
		"slug": "tutorials/react/step-6",
		"title": "Add database",
		"description": "Add a database to your React application using Appwrite Web SDK.",
		"excerpt": "Create database To store your ideas, you need to create a database first. 1. Go to the Databases section in your Appwrite Console 2. Click *Create Database* 3. Give it a name and ID. For this tutorial, we'll use as the name and as the ID. 4. You'll need to remember the database ID as you'll need it later. Create table In Appwrite, data is stored as a table of rows. Create a table in the Appwrite Console to store…",
		"breadcrumbs": [
			"React",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/react/step-7",
		"title": "Create ideas page",
		"description": "Add database queries and pagination using Appwrite in your React application.",
		"excerpt": "Using the hook we can now display the ideas on the page. We will also add a form to submit new ideas. Overwrite the contents of with the following: In , wrap the element with the component.",
		"breadcrumbs": [
			"React",
			"Steps",
			"Create ideas page"
		]
	},
	{
		"slug": "tutorials/react/step-8",
		"title": "Next steps",
		"description": "Run your React project built with Appwrite",
		"excerpt": "Test your project Run your project with and open http://localhost:3000 in your browser.",
		"breadcrumbs": [
			"React",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/refine/step-1",
		"title": "Build a blog admin panel with Refine",
		"description": "Learn to build a Refine app with no backend code using an Appwrite backend.",
		"excerpt": "**Blog admin panel**: a CRUD app to manage Blog content. In this tutorial, you will build admin panel app with Appwrite and Refine. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Basic knowledge of Typescript and React. 2. Have Node.js and NPM installed on your computer",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/refine/step-2",
		"title": "Create app",
		"description": "Create a Refine app project and integrate with Appwrite.",
		"excerpt": "Create Refine project Create a Refine app with the command. We're using the preset that installs the [](https://github.com/refinedev/refine/tree/master/packages/appwrite) which already has the Appwrite dependency pre-configured. To make this example more visual, we'll use the Ant Desing UI package which natively supported by Refine. No additional dependencies are required for this tutorial. If you want to integrate Appwrite into an existing Refine app, use the following command. Learn more about adding Appwrite a refine data provider. You can start the development…",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/refine/step-3",
		"title": "Set up Appwrite",
		"description": "Import and initialize Appwrite for your react application.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost. You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our Refine app, we'll need to find our project ID. Find your project's ID in the **Settings** page. Navigate to and add your API credentials.",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/refine/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your Refine application.",
		"excerpt": "Authentication provider Upon creating a new project with Appwrite preset, the CLI automatically creates Auth Provider file. You'll see a file named [](https://github.com/refinedev/refine/blob/master/examples/data-provider-appwrite-tutorial-docs/src/utility/authProvider.ts) created by CLI. This auto-generated file contains pre-defined functions using Appwrite Authentication methods internally to perform authentication and authorization operations. The auth provider registered to the Refine app by default in the . Now, we can configure the routing and auth components to manage logins and sign ups. Routing Refine offers router bindings and utilities for React…",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/refine/step-5",
		"title": "Add database",
		"description": "Add a database to your React application using Appwrite Web SDK.",
		"excerpt": "Create table In Appwrite, data is stored as a table of rows. Create a table in the Appwrite Console to store our ideas. Create a new table with the following columns: | Field | Type | Required | |-------------|--------|----------| | title | Varchar | Yes | | content | Text | Yes | Connect database to the Refine app Now that you have a table to hold blog post contents, we can read and write to it from our app.…",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/refine/step-6",
		"title": "Create CRUD pages",
		"description": "Add database queries and CRUD pages using Appwrite in your Refine application.",
		"excerpt": "We're going to add CRUD pages to our admin panel so you can list, create, and view blog posts records. List page First, create a listing page to show Appwrite API data in a table by copying the code below into and saving it as . Create page Create a new record page for the Appwrite API by copying the following code and saving it as . Edit page Create a page for editing a records with the following code…",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Create CRUD pages"
		]
	},
	{
		"slug": "tutorials/refine/step-7",
		"title": "Next steps",
		"description": "Run your Refine project built with Appwrite",
		"excerpt": "Test your project Run your project with and open http://localhost:3000 in your browser. Now, we are able to listing the records retrieved from Appwrite backend on table, show the each record, edit the existing records, and delete functionality on records. List Page Create Page Edit Page Show Page",
		"breadcrumbs": [
			"Refine",
			"Steps",
			"Next steps"
		]
	},
	{
		"slug": "tutorials/subscriptions-with-stripe/step-1",
		"title": "Add app subscriptions with Stripe",
		"description": "Add paid app subscription plans to your app with Stripe and Appwrite Functions.",
		"excerpt": "As you app grows, you may start offering paid services or features. This is an important part of growing your idea into a business. This tutorial will show you how to accept payments and provide subscribers with premium features using **Stripe**, a popular payment platform. Prerequisites 1. A GitHub account and working knowledge with GitHub 1. A Stripe account. 1. An Appwrite Cloud account. 1. Experience with Appwrite Functions.",
		"breadcrumbs": [
			"Stripe",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/subscriptions-with-stripe/step-2",
		"title": "Setup Stripe",
		"description": "Add paid app subscription plans to your app with Stripe and Appwrite Functions.",
		"excerpt": "Start by visiting Stripe and creating an account. When successful, you will see Stripe Dashboard. This quick start will use test mode, but the same steps will also work for live mode. API key In the header, you can switch to the **Developers** page, where you can head to the **API Keys** section. On this page, reveal and copy the **Secret key**. Note it down, as you will need it later when setting the environment variable. Webhooks Go to the…",
		"breadcrumbs": [
			"Stripe",
			"Steps",
			"Setup Stripe"
		]
	},
	{
		"slug": "tutorials/subscriptions-with-stripe/step-3",
		"title": "Create function",
		"description": "Add paid app subscription plans to your app with Stripe and Appwrite Functions.",
		"excerpt": "Head to the Appwrite Console and create a new project if you haven't already. If this is your first time using Appwrite, you will be asked to sign up first. Create a new function Once inside your project overview, switch to the **Functions** page from the left sidebar. Under the **Templates** section, use the search bar and look for . You will find the **Subscriptions with Stripe** template, which you can use by clicking the **Create function** button. Create a…",
		"breadcrumbs": [
			"Stripe",
			"Steps",
			"Create function"
		]
	},
	{
		"slug": "tutorials/subscriptions-with-stripe/step-4",
		"title": "Configure web platform",
		"description": "Add paid app subscription plans to your app with Stripe and Appwrite Functions.",
		"excerpt": "Add platform To showcase the functionality, the template ships with a demo frontend that you can use. To allow this demo, you must add Function's domain as a trusted web platform. Head to your project's **Overview** page in Apwrite Console, and scroll down to the **Integrations** section. Click the **Add platform** button and select **Web App** from the dropdown. Set **Name** to and **Hostname** to your Function's domain. You can find your function's domain under the **Domains** tab. Click the…",
		"breadcrumbs": [
			"Stripe",
			"Steps",
			"Configure web platform"
		]
	},
	{
		"slug": "tutorials/subscriptions-with-stripe/step-5",
		"title": "All set",
		"description": "Add paid app subscription plans to your app with Stripe and Appwrite Functions.",
		"excerpt": "You are now ready to use the Appwrite Function in your front end. You can initialize the payment process by redirecting your user to the endpoint on the Function's domain. Visit demo You can visit our Function's domain in the browser to see the demo application. In the demo app, click the **Register as anonymous** button to create a guest session. This will create a new user in your Appwrite Project. After registering, the demo app will show that you…",
		"breadcrumbs": [
			"Stripe",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-1",
		"title": "Authentication with SvelteKit",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Appwrite takes away your stress of building and maintaining a backend. Appwrite helps you implement authentication, databases, file storage, and respond to real-time events with **secure** APIs out of the box. If you're a Svelte developer, examples in this guide shows you how Appwrite can help you add authentication to Svelte apps faster. Before you start Even if you've never tried Appwrite, you will get an idea of what it'll feel like to build with Svelte and Appwrite. If you're…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-2",
		"title": "Create project",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "You can create a Svelte project using SvelteKit. The command will give you a prompt with several project types. We'll be starting with a skeleton project. The prompt will be something similar to this. After the prompt is finished, you can head over to the newly created project. Adding Appwrite to your Svelte app Appwrite provides a Web SDK that can be used in your Svelte apps. You can use Appwrite by installing the Web SDK as an NPM package.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Create project"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-3",
		"title": "Initialize SDK",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Before you can use Appwrite, you need to instanciate the Appwrite class with the project ID and endpoint. This tells the SDK where your Appwrite project is hosted and which one to connect to. The client is then used to initialize services like and , so they all point to the same Appwrite project. You can do this by instantiating the services you need in a file like and **exporting the instances**. and are environment variables that are exported in…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Initialize SDK"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-4",
		"title": "Check if logged in",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Before taking a user to the login screen, we should check if they're already logged in. With SvelteKit, you can use the function to check if you're logged in before your app renders. By returning the account data in the root layout, it is globally available to all pages, **before any page is displayed** to the user. If we find the user is not logged in, we can redirect them to log in first. We can get the returned data…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Check if logged in"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-5",
		"title": "Create login page",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "We can now implement our login page. Create a file in the directory: You can see that we added a redirect in the login page to check if the user's already logged in, in which case we redirect them to the homepage. Now we just need to create a form to let the user input sign in data. And that's it. When the user successfully logs in, we use to re-run the relevant functions. In this case, the functions inside…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Create login page"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-6",
		"title": "Create signup page",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "For signup, you can copy the login and files into , with some small changes to the file: With this, you have a simple authentication system.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Create signup page"
		]
	},
	{
		"slug": "tutorials/sveltekit-csr-auth/step-7",
		"title": "All set",
		"description": "Add Authentication to a SvelteKit project using Appwrite.",
		"excerpt": "If you want to see these authentication concepts applied in a more robust manner, you can see them in action in this demo app. Other authentication methods Appwrite also supports OAuth, passwordless login, anonymous login, and phone login. Learn more about them in the authentication guide.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-1",
		"title": "Server-side authentication with SvelteKit",
		"description": "Add SSR authentication to your SvelteKit app with Appwrite",
		"excerpt": "Appwrite takes away the stress of building and maintaining a backend. Appwrite helps implement authentication, databases, file storage, and respond to real-time events with **secure** APIs out of the box. If you're a Svelte developer, the examples in this guide show you how Appwrite can help you add authentication to Svelte apps faster. Before you start Before following this tutorial, have the following prepared: - A recent version of Node.js installed on your system. - A basic knowledge of Svelte…",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-2",
		"title": "Create project",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Create a Svelte project using SvelteKit. The command will give you a prompt with several project types. We'll be starting with a skeleton project. The prompt will be something similar to this. After the prompt is finished, you can head over to the newly created project. Install Appwrite Appwrite provides a Node SDK that can be used in your Svelte apps. You can use Appwrite by installing the Node SDK as an NPM package. The Node SDK is intended for…",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Create project"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-3",
		"title": "Initialize SDK",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Before you can use Appwrite, you need to create the Appwrite and set the project ID and endpoint. The client is then used to create services like and , so they all point to the same Appwrite project. Create a function to build services you need in a file like and **exporting the instances**. As part of the function, set the current user's session if they are logged in. This is done by accessing the session cookie from the request…",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Initialize SDK"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-4",
		"title": "Add a server hook",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "SvelteKit hooks which are functions that run on the server before a page is displayed to the user. SvelteKit locals are a way to store data that is specific to the current request. We can use this to store the user's account data, so that it is available to all pages. Create a new file in the directory called : To ensure the object is typed correctly, we can add a type definition for it in the file: Now, use…",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Add a server hook"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-5",
		"title": "Create sign up page",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "We can now implement our sign up page. Create a file in the directory: This is an HTML form with an email and password input. When the form is submitted, we want to send the email and password to Appwrite to authenticate the user. To use SvelteKit form actions we create a file in the same directory:",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Create sign up page"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-6",
		"title": "Create account page",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "Now the end-user is able to sign up, we can create the account page. This page will display basic information about the user, and allow the user to log out. Create a new file in the directory called and add the following code: Create a new file in the directory called and add the following code:",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"Create account page"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-7",
		"title": "OAuth authentication with SSR",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "To support the OAuth flow, we first redirect the user to the OAuth provider, and then handle the callback from the OAuth provider. To redirect, add a button to our sign up page that redirects the user to the OAuth provider. Add a new server route to handle the redirect. The method redirects the user to the OAuth provider, and then the OAuth provider redirects the user back to the route with the and URL query parameters. Handle the callback…",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"OAuth authentication with SSR"
		]
	},
	{
		"slug": "tutorials/sveltekit-ssr-auth/step-8",
		"title": "All set",
		"description": "Add authentication to a SvelteKit project using Appwrite.",
		"excerpt": "If you want to see the complete source code with styling, see the demos-for-svelte repository. Other authentication methods Appwrite also supports OAuth, passwordless login, anonymous login, and phone login. Learn more about them in the authentication guide.",
		"breadcrumbs": [
			"SvelteKit SSR",
			"Steps",
			"All set"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-1",
		"title": "Build an ideas tracker with SvelteKit",
		"description": "Build a SvelteKit project using Appwrite.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and SvelteKit. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Basic knowledge of JavaScript and Svelte. 2. Have Node.js and NPM installed on your computer",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-2",
		"title": "Create app",
		"description": "Create a SvelteKit app project using Appwrite.",
		"excerpt": "Create SvelteKit project Create a SvelteKit app with the command and select Add dependencies Install the JavaScript Appwrite SDK. You can start the development server to watch your app update in the browser as you make changes. Your app should be available at http://localhost:5173.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-3",
		"title": "Set up Appwrite",
		"description": "Initialize Appwrite in your SvelteKit project.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost. You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our Svelte app, we'll need to find our project ID. Find your project's ID in the **Settings** page. Create a new file to hold our Appwrite related code. Only one instance…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-4",
		"title": "Add authentication",
		"description": "Add Appwrite authentication to you Svelte app using your Svelte store.",
		"excerpt": "Using stores Svelte stores provide an easy way to manage state throughout your application. We'll use a store to keep track of our user's data. Create a new file and add the following code to it. Login page Using this store, we can build a login page. Create a new file and add the following code to it.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-5",
		"title": "Add navigation",
		"description": "Add navigation to your SvelteKit application with Appwrite authentication.",
		"excerpt": "We'll create a layout component, that's used by all pages, to display a navbar. The navbar will show a login button if the user is not logged in, and a logout button if the user is logged in. Create a new file and add the following code to it.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Add navigation"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-6",
		"title": "Add database",
		"description": "Add databases and queries to store user data in you SvelteKit project.",
		"excerpt": "Create table In Appwrite, data is stored as a table of rows. Create a table inside a database in the Appwrite Console to store our ideas. Create the following columns within the table: | Field | Type | Size | Required | | ----------- | ------ | ---- | -------- | | userId | Varchar | 36 | Yes | | title | Varchar | 128 | Yes | | description | Text | - | No | For this…",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/sveltekit/step-7",
		"title": "Create ideas page",
		"description": "Add pagining and ordering to you SvelteKit application powered by Appwrite Databases.",
		"excerpt": "Using our created methods, we can build a page to submit and view ideas. First, let's create a load function for our ideas page. This will load the latest ideas from the database. To do so, create a file called with the following content: Simple as that! Now, let's create the page itself. Replace the contents in with the following: With this you have successfully created an Ideas Tracker! You can now submit ideas and view them.",
		"breadcrumbs": [
			"SvelteKit",
			"Steps",
			"Create ideas page"
		]
	},
	{
		"slug": "tutorials/vue/step-1",
		"title": "Build an ideas tracker with Vue.js",
		"description": "Learn to build an idea tracker app with Appwrite and Vue with authentication, databases and tables, queries, pagination, and file storage.",
		"excerpt": "**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and Vue. Concepts This tutorial will introduce the following concepts: 1. Setting up your first project 2. Authentication 3. Databases and tables 4. Queries and pagination Prerequisites 1. Basic knowledge of JavaScript and Vue. 2. Have Node.js and NPM installed on your computer.",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Introduction"
		]
	},
	{
		"slug": "tutorials/vue/step-2",
		"title": "Create app",
		"description": "Create and app with Appwrite Cloud and Vue.js.",
		"excerpt": "Create Vue project Create a Vue app with the command. Add dependencies Install the JavaScript Appwrite SDK. You can start the development server to watch your app update in the browser as you make changes.",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Create app"
		]
	},
	{
		"slug": "tutorials/vue/step-3",
		"title": "Set up Appwrite",
		"description": "Import and configure a project with Appwrite Cloud and Vue.js.",
		"excerpt": "Create project Head to the Appwrite Console. If this is your first time using Appwrite, create an account and create your first project. Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost. You can skip optional steps. Initialize Appwrite SDK To use Appwrite in our Vue app, we'll need to find our project ID. Find your project's ID in the **Settings** page. Create a new file to hold our Appwrite related code. Only one instance…",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Set up Appwrite"
		]
	},
	{
		"slug": "tutorials/vue/step-4",
		"title": "Add authentication",
		"description": "Add authentication to your Vue application using Appwrite Web SDK.",
		"excerpt": "User store In Vue, you can use the reactive API to share data between components. We'll create a store to share the user's data between components. Create a new file and add the following code to it. Now, we can import the store in any component and use it to login, logout, or register a user. However, we'll need to call the method to initialize the user's data. Basic routing First, import the store in and call the method when…",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Add authentication"
		]
	},
	{
		"slug": "tutorials/vue/step-5",
		"title": "Add navigation",
		"description": "Add navigation to your Vue.js app with Appwrite authentication and pinia stores.",
		"excerpt": "In our app we want to have a navigation bar that is always visible. Use the store to show either: - a logout button if the user is logged in. - a login button if the user is not logged in. Update the App component in :",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Add navigation"
		]
	},
	{
		"slug": "tutorials/vue/step-6",
		"title": "Add database",
		"description": "Add data storage to your Vue.js project powered by Appwrite Cloud databases.",
		"excerpt": "Create table In Appwrite, data is stored as a table of rows. Create a table in the Appwrite Console to store our ideas. Create a new table with the following columns: | Field | Type | Required | |-------------|--------|----------| | userId | Varchar | Yes | | title | Varchar | Yes | | description | Text | No | Ideas context Now that you have a table to hold ideas, we can read and write to it from our…",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Add database"
		]
	},
	{
		"slug": "tutorials/vue/step-7",
		"title": "Create ideas page",
		"description": "Add data queries and pagination to your Vue.js project powered by Appwrite Cloud databases.",
		"excerpt": "Using the store we can now display the ideas on the page. We will also add a form to submit new ideas. Overwrite the contents of with the following:",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Create ideas page"
		]
	},
	{
		"slug": "tutorials/vue/step-8",
		"title": "Next steps",
		"description": "View your Vue.js app build on Appwrite Cloud.",
		"excerpt": "Test your project Run your project with and open http://localhost:3000 in your browser.",
		"breadcrumbs": [
			"Vue",
			"Steps",
			"Next steps"
		]
	}
];
function normalizeQuery(query) {
	return query.trim().toLowerCase();
}
function tokenize(query) {
	return normalizeQuery(query).split(/\s+/).filter((token) => token.length >= 2);
}
function scoreEntry(entry, query) {
	const normalizedQuery = normalizeQuery(query);
	if (!normalizedQuery) return 0;
	const title = entry.title.toLowerCase();
	const description = entry.description.toLowerCase();
	const excerpt = entry.excerpt.toLowerCase();
	const slug = entry.slug.toLowerCase();
	const haystack = `${title} ${description} ${excerpt} ${slug.replace(/-/g, " ")} ${entry.breadcrumbs.join(" ").toLowerCase()}`;
	let score = 0;
	if (title === normalizedQuery) score += 200;
	else if (title.startsWith(normalizedQuery)) score += 140;
	else if (title.includes(normalizedQuery)) score += 110;
	if (slug === normalizedQuery.replace(/\s+/g, "-")) score += 120;
	else if (slug.includes(normalizedQuery.replace(/\s+/g, "-"))) score += 90;
	if (description.includes(normalizedQuery)) score += 70;
	if (excerpt.includes(normalizedQuery)) score += 45;
	for (const token of tokenize(normalizedQuery)) {
		if (title.includes(token)) score += 24;
		if (slug.includes(token)) score += 18;
		if (description.includes(token)) score += 12;
		if (excerpt.includes(token)) score += 8;
		if (haystack.includes(token)) score += 4;
	}
	return score;
}
function isHiddenDocsSearchSlug(slug) {
	if (!isPartnersDocsEnabled() && isPartnersDocsSlug(slug)) return true;
	if (!isFirewallDocsEnabled() && isFirewallDocsSlug(slug)) return true;
	if (!isAgentDocsEnabled() && isAgentDocsSlug(slug)) return true;
	return false;
}
function getVisibleSearchIndex(index = DOCS_SEARCH_INDEX) {
	return index.filter((entry) => !isHiddenDocsSearchSlug(entry.slug));
}
function searchDocs(query, limit = 12, index = DOCS_SEARCH_INDEX) {
	const normalizedQuery = normalizeQuery(query);
	if (!normalizedQuery) return [];
	return getVisibleSearchIndex(index).map((entry) => ({
		...entry,
		score: scoreEntry(entry, normalizedQuery)
	})).filter((entry) => entry.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}
const DOCS_SEARCH_SUGGESTIONS = [
	"OAuth login",
	"API keys",
	"Storage buckets",
	"Database queries",
	"Deploy function"
];
var DOCS_SEARCH_POPULAR_SLUGS = [
	"quick-starts",
	"products/auth",
	"products/databases",
	"products/storage",
	"products/functions",
	"references"
];
function getDocsSearchPopularPages(index = DOCS_SEARCH_INDEX) {
	const bySlug = new Map(getVisibleSearchIndex(index).map((entry) => [entry.slug, entry]));
	return DOCS_SEARCH_POPULAR_SLUGS.flatMap((slug) => {
		const entry = bySlug.get(slug);
		return entry ? [entry] : [];
	});
}
const DOCS_SEARCH_PAGE_COUNT = DOCS_SEARCH_INDEX.length;
function DocsSearchIdle({ onSuggest, onSelect }) {
	const popularPages = getDocsSearchPopularPages();
	return /* @__PURE__ */ jsxs("div", {
		className: "pb-1",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center px-6 pb-5 pt-7 text-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative mb-4",
						children: [/* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "absolute -inset-3 rounded-full bg-primary/10 blur-2xl"
						}), /* @__PURE__ */ jsx("div", {
							className: "relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-gradient-to-b from-muted/70 to-muted/20 shadow-sm",
							children: /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6 text-muted-foreground" })
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[14px] font-semibold text-foreground",
						children: "Search documentation"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-1.5 max-w-[300px] text-[12px] leading-relaxed text-muted-foreground",
						children: [
							"Find guides, API references, and tutorials across",
							" ",
							DOCS_SEARCH_PAGE_COUNT,
							" pages."
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-4 pb-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Try searching for"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-1.5",
					children: DOCS_SEARCH_SUGGESTIONS.map((suggestion) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => onSuggest(suggestion),
						className: "rounded-full border border-border bg-muted/20 px-2.5 py-1 text-[12px] text-foreground transition-colors hover:border-border/80 hover:bg-accent",
						children: suggestion
					}, suggestion))
				})]
			}),
			popularPages.length > 0 ? /* @__PURE__ */ jsx(CommandGroup, {
				heading: "Popular pages",
				children: popularPages.map((entry) => /* @__PURE__ */ jsx(DocsSearchResultItem, {
					entry,
					onSelect,
					className: "items-start gap-3 py-2.5"
				}, entry.slug || "docs-home"))
			}) : null
		]
	});
}
function DocsSearchView({ isMobile, inputRef, onBack, onClose, onKeyDown, onSelect, onOpenShortcuts }) {
	const [query, setQuery] = useState("");
	const results = useMemo(() => searchDocs(query), [query]);
	const hasQuery = query.trim().length > 0;
	useEffect(() => {
		const id = window.requestAnimationFrame(() => {
			inputRef?.current?.focus();
		});
		return () => window.cancelAnimationFrame(id);
	}, [inputRef]);
	const handleViewKeyDown = useCallback((e) => {
		if (e.key === "Escape" && query.trim()) {
			e.preventDefault();
			setQuery("");
			return;
		}
		onKeyDown(e);
	}, [onKeyDown, query]);
	return /* @__PURE__ */ jsxs(Command$1, {
		className: cn("bg-transparent", isMobile && "flex flex-col flex-1"),
		onKeyDown: handleViewKeyDown,
		shouldFilter: false,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center border-b border-border [&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:border-transparent [&_[data-slot=command-input-wrapper]]:flex-1",
				children: [
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onBack,
						className: "ms-3 flex h-6 shrink-0 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
						children: "← Back"
					}),
					/* @__PURE__ */ jsx(CommandInput, {
						ref: inputRef,
						placeholder: "Search documentation...",
						value: query,
						onValueChange: setQuery,
						autoFocus: true,
						className: "h-14 border-0 text-[14px] text-foreground placeholder:text-muted-foreground"
					}),
					isMobile ? /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						className: "me-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
						children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
					}) : null
				]
			}),
			/* @__PURE__ */ jsx(CommandList, {
				className: cn("p-2", isMobile ? "max-h-none flex-1 min-h-0" : "max-h-[min(420px,58dvh)]"),
				children: !hasQuery ? /* @__PURE__ */ jsx(DocsSearchIdle, {
					onSuggest: setQuery,
					onSelect
				}) : results.length > 0 ? /* @__PURE__ */ jsx(CommandGroup, {
					heading: "Pages",
					children: results.map((result) => /* @__PURE__ */ jsx(DocsSearchResultItem, {
						entry: result,
						onSelect
					}, result.slug || "docs-home"))
				}) : /* @__PURE__ */ jsx(CommandEmpty, {
					className: "py-10 text-[13px] text-muted-foreground",
					children: "No documentation pages found. Try a different search term."
				})
			}),
			!isMobile ? /* @__PURE__ */ jsx(CommandCenterListFooter, { onOpenShortcuts }) : null
		]
	});
}
function FeedbackForm({ source = "n/a", orgId = "", projectId = "", billingPlanId, onSubmitted }) {
	const t = useT();
	const { account } = useAuth();
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmit = async () => {
		if (!message.trim()) return;
		setIsSubmitting(true);
		try {
			const firstname = (account?.name || account?.email || "Unknown").slice(0, 40) || "Unknown";
			const customFields = [{
				id: FEEDBACK_CUSTOM_FIELDS.PAGE_URL,
				value: window.location.href
			}, ...billingPlanId ? [{
				id: FEEDBACK_CUSTOM_FIELDS.BILLING_PLAN,
				value: billingPlanId
			}] : []];
			const sent = await submitFeedback({
				subject: "feedback-general",
				message: message.trim(),
				email: account?.email,
				firstname,
				customFields,
				metaFields: {
					source,
					orgId,
					projectId,
					userId: account?.$id ?? ""
				}
			});
			setIsSubmitting(false);
			if (!sent) {
				toast.error(t("Feedback is not configured. Set VITE_GROWTH_ENDPOINT in .env to enable submission."));
				return;
			}
			setIsSubmitted(true);
			onSubmitted?.();
		} catch {
			setIsSubmitting(false);
			toast.error(t("Failed to submit feedback"));
		}
	};
	if (isSubmitted) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center gap-3 p-8",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10",
			children: /* @__PURE__ */ jsx(Check, { className: "h-6 w-6 text-green-500" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "font-medium",
				children: t("Thank you!")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: t("Your feedback helps us improve.")
			})]
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "p-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-3",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "font-medium",
					children: t("Send feedback")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: t("Help us improve your experience")
				})]
			}),
			/* @__PURE__ */ jsx(Textarea, {
				placeholder: t("Share your feedback..."),
				value: message,
				onChange: (e) => setMessage(e.target.value),
				className: "mb-3 min-h-[100px] resize-none",
				autoFocus: true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground",
					children: [message.length, "/500"]
				}), /* @__PURE__ */ jsx(Button, {
					size: "sm",
					onClick: handleSubmit,
					disabled: !message.trim() || message.length > 500 || isSubmitting,
					children: t("Submit")
				})]
			})
		]
	});
}
function CommandCenterFeedbackView({ isMobile, orgId, projectId, onBack, onClose, onKeyDown }) {
	const t = useT();
	const { plan: organizationPlan } = useOrganizationPlan(orgId);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col", isMobile && "flex-1 min-h-0"),
		onKeyDown,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center border-b border-border px-3 h-14",
			children: [
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: onBack,
					className: "flex h-6 shrink-0 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
					children: ["← ", t("Back")]
				}),
				/* @__PURE__ */ jsx("span", {
					className: "ms-3 text-[14px] font-medium text-foreground",
					children: t("Send feedback")
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "ms-auto flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
					"aria-label": t("Close"),
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: cn(isMobile && "flex-1 overflow-y-auto"),
			children: /* @__PURE__ */ jsx(FeedbackForm, {
				source: "command-center",
				orgId: orgId ?? "",
				projectId: projectId ?? "",
				billingPlanId: organizationPlan?.$id,
				onSubmitted: () => {
					setTimeout(onClose, 1500);
				}
			})
		})]
	});
}
var CONTACT_SALES_URL = CONTACT_ENTERPRISE_URL;
function formatMaintenanceWindow(startsAt, endsAt) {
	if (!startsAt) return void 0;
	const startDate = new Date(startsAt);
	const endDate = endsAt ? new Date(endsAt) : void 0;
	if (Number.isNaN(startDate.getTime())) return void 0;
	const dateFormatter = new Intl.DateTimeFormat(void 0, {
		month: "short",
		day: "numeric"
	});
	const timeFormatter = new Intl.DateTimeFormat(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
	if (!endDate || Number.isNaN(endDate.getTime())) return `Starts ${dateFormatter.format(startDate)} at ${timeFormatter.format(startDate)} local time`;
	if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate()) return `${dateFormatter.format(startDate)}, ${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)} local time`;
	return `${dateFormatter.format(startDate)}, ${timeFormatter.format(startDate)} - ${dateFormatter.format(endDate)}, ${timeFormatter.format(endDate)} local time`;
}
function getStatusMeta(statusState) {
	if (statusState === "operational") return {
		iconBg: "bg-emerald-500/10",
		iconText: "text-emerald-500",
		badgeVariant: "success",
		badgeLabel: "Operational",
		summary: "All services are available.",
		Icon: Activity
	};
	if (statusState === "maintenance") return {
		iconBg: "bg-blue-500/10",
		iconText: "text-blue-500",
		badgeVariant: "processing",
		badgeLabel: "Maintenance",
		summary: "Maintenance is in progress.",
		Icon: Wrench
	};
	if (statusState === "downtime") return {
		iconBg: "bg-red-500/10",
		iconText: "text-red-500",
		badgeVariant: "error",
		badgeLabel: "Unavailable",
		summary: "Some services may be unavailable right now.",
		Icon: AlertTriangle
	};
	return {
		iconBg: "bg-amber-500/10",
		iconText: "text-amber-500",
		badgeVariant: "warning",
		badgeLabel: "Degraded",
		summary: "Some services are experiencing issues.",
		Icon: AlertTriangle
	};
}
function getMockReportTitle(state) {
	switch (state) {
		case "downtime": return "Several services may be affected while we restore them.";
		case "maintenance": return "Planned maintenance window in progress.";
		case "operational": return;
		default: return "A subset of services is degraded.";
	}
}
function SupportPanel({ orgId, onNavigateAway }) {
	const t = useT();
	const [supportHours, setSupportHours] = useState(() => getSupportHoursInLocalTime());
	const navigate = useNavigate();
	const { plan: organizationPlan } = useOrganizationPlan(orgId);
	const { isCloud, features } = useConsoleProfile();
	const cloudStatusEnabled = isCloud && features.systemStatus;
	const { mockCloudStatusAlert } = useDebugOverrides();
	const { data: statusData } = useAppwriteCloudStatus(cloudStatusEnabled);
	const hasPremiumSupport = organizationPlan?.premiumSupport === true;
	const hasContactSupportOptions = hasPremiumSupport || features.billing;
	const handleUpgrade = () => {
		onNavigateAway?.();
		navigateToUpgradeWizard(navigate, orgId);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			setSupportHours(getSupportHoursInLocalTime());
		}, 6e4);
		return () => clearInterval(interval);
	}, []);
	const statusState = mockCloudStatusAlert !== "live" ? mockCloudStatusAlert : statusData?.consoleAlertState ?? "operational";
	const statusMeta = getStatusMeta(statusState);
	const statusTitle = mockCloudStatusAlert !== "live" ? getMockReportTitle(mockCloudStatusAlert) : statusData?.activeReport?.title;
	const statusDetail = (statusState === "maintenance" ? mockCloudStatusAlert !== "live" ? formatMaintenanceWindow(new Date(Date.now() + 1800 * 1e3).toISOString(), new Date(Date.now() + 7200 * 1e3).toISOString()) : formatMaintenanceWindow(statusData?.activeReport?.startsAt, statusData?.activeReport?.endsAt) : void 0) ?? statusTitle ?? statusMeta.summary;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10",
						children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-primary" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-1",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-medium",
							children: t("Contact Support")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: hasContactSupportOptions ? t("Get help from our support team") : isCloud ? t("Community and enterprise resources") : t("Community and enterprise resources for self-hosting")
						})]
					})]
				}),
				hasPremiumSupport && /* @__PURE__ */ jsxs("div", {
					className: "mt-4 rounded-lg border border-border bg-muted/20 p-3.5",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[13px] font-semibold text-foreground tracking-tight",
								children: t("Support hours")
							}), /* @__PURE__ */ jsxs("span", {
								className: `shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${supportHours.isOpen ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/10 text-amber-600 dark:text-amber-400"}`,
								children: [/* @__PURE__ */ jsx("span", { className: `h-1 w-1 rounded-full ${supportHours.isOpen ? "bg-emerald-500" : "bg-amber-500"}` }), supportHours.isOpen ? t("Online") : t("Offline")]
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground tabular-nums whitespace-nowrap mt-2",
							children: [
								t("Mon–Fri"),
								" ",
								supportHours.startLocal,
								" – ",
								supportHours.endLocal
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground/70 mt-1 font-mono tracking-tight",
							children: supportHours.timezone
						})
					]
				}),
				hasPremiumSupport ? orgId ? /* @__PURE__ */ jsx(Button, {
					className: "mt-3 w-full",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/organizations/$orgId/support",
						params: { orgId },
						onClick: () => onNavigateAway?.(),
						children: [/* @__PURE__ */ jsx(MessageCircle, { className: "me-1.5 h-4 w-4" }), t("Contact Support")]
					})
				}) : /* @__PURE__ */ jsxs(Button, {
					className: "mt-3 w-full",
					size: "sm",
					disabled: true,
					children: [/* @__PURE__ */ jsx(MessageCircle, { className: "me-1.5 h-4 w-4" }), t("Contact Support")]
				}) : features.billing ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: t("Upgrade your plan to get email support.")
				}), /* @__PURE__ */ jsx(Button, {
					className: "mt-2 w-full",
					size: "sm",
					onClick: handleUpgrade,
					children: t("Upgrade")
				})] }) : null
			]
		}),
		/* @__PURE__ */ jsx(Separator, {}),
		/* @__PURE__ */ jsxs("div", {
			className: "p-4",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
				children: hasContactSupportOptions ? t("More options") : t("Support")
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: CONTACT_SALES_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
								children: /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium text-foreground",
									children: t("Enterprise & 24/7 support")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: t("Contact sales")
								})]
							}),
							/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
						]
					}),
					/* @__PURE__ */ jsxs(MarketingSiteLink, {
						className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
						href: "/discord",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
								children: /* @__PURE__ */ jsx("svg", {
									className: "h-4 w-4",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" })
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium",
									children: t("Discord Community")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: t("Join 24k+ developers")
								})]
							}),
							/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 text-muted-foreground" })
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://github.com/appwrite/appwrite/issues/new/choose",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-md bg-foreground/10",
								children: /* @__PURE__ */ jsx("svg", {
									className: "h-4 w-4",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium",
									children: t("GitHub Issues")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: t("Report bugs or request features")
								})]
							}),
							/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 text-muted-foreground" })
						]
					})
				]
			})]
		}),
		cloudStatusEnabled && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsx("div", {
			className: "p-4",
			children: /* @__PURE__ */ jsxs("a", {
				href: "https://status.appwrite.online",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex cursor-pointer items-start gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${statusMeta.iconBg}`,
						children: /* @__PURE__ */ jsx(statusMeta.Icon, { className: `h-4 w-4 ${statusMeta.iconText}` })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("System status")
							}), /* @__PURE__ */ jsx(Badge, {
								variant: statusMeta.badgeVariant,
								className: "text-[10px] shrink-0",
								children: t(statusMeta.badgeLabel)
							})]
						}), statusDetail ? /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 line-clamp-2 text-[12px] text-muted-foreground",
							children: t(statusDetail)
						}) : null]
					}),
					/* @__PURE__ */ jsx(ExternalLink, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" })
				]
			})
		})] })
	] });
}
function CommandCenterSupportView({ isMobile, orgId, onBack, onClose, onKeyDown }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col", isMobile && "flex-1 min-h-0"),
		onKeyDown,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-center border-b border-border px-3 h-14",
			children: [
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: onBack,
					className: "flex h-6 shrink-0 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
					children: ["← ", t("Back")]
				}),
				/* @__PURE__ */ jsx("span", {
					className: "ms-3 text-[14px] font-medium text-foreground",
					children: t("Support")
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					className: "ms-auto flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
					"aria-label": t("Close"),
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: cn(isMobile && "flex-1 overflow-y-auto"),
			children: /* @__PURE__ */ jsx(SupportPanel, {
				orgId,
				onNavigateAway: onClose
			})
		})]
	});
}
var RESOURCE_KIND_ICONS = {
	database: Database,
	user: Users$1,
	team: Building2,
	bucket: Folder,
	function: Zap,
	site: Globe,
	message: Send,
	topic: Megaphone,
	provider: Bell
};
var RESOURCE_SEARCH_SPECS = [
	{
		scope: "databases",
		label: "Search databases",
		description: "Find a database by name or ID",
		icon: Database,
		availableScopes: ["project"]
	},
	{
		scope: "users",
		label: "Search users",
		description: "Find a user by name, email or ID",
		icon: Users$1,
		availableScopes: ["project"]
	},
	{
		scope: "teams",
		label: "Search teams",
		description: "Find a team by name or ID",
		icon: Building2,
		availableScopes: ["project"]
	},
	{
		scope: "buckets",
		label: "Search buckets",
		description: "Find a storage bucket by name or ID",
		icon: Folder,
		availableScopes: ["project"]
	},
	{
		scope: "functions",
		label: "Search functions",
		description: "Find a function by name or ID",
		icon: Zap,
		availableScopes: ["project"]
	},
	{
		scope: "sites",
		label: "Search sites",
		description: "Find a site by name or ID",
		icon: Globe,
		availableScopes: ["project"]
	},
	{
		scope: "messages",
		label: "Search messages",
		description: "Find a message by content or ID",
		icon: Send,
		availableScopes: ["project"]
	},
	{
		scope: "topics",
		label: "Search topics",
		description: "Find a topic by name or ID",
		icon: Megaphone,
		availableScopes: ["project"]
	},
	{
		scope: "providers",
		label: "Search providers",
		description: "Find a provider by name or ID",
		icon: Bell,
		availableScopes: ["project"]
	},
	{
		scope: "projects",
		label: "Search projects",
		description: "Find a project in this organization",
		icon: FolderOpen,
		availableScopes: ["org"]
	}
];
var RESOURCE_SEARCH_PLACEHOLDERS = {
	databases: "Search databases...",
	users: "Search users...",
	teams: "Search teams...",
	buckets: "Search buckets...",
	functions: "Search functions...",
	sites: "Search sites...",
	messages: "Search messages...",
	topics: "Search topics...",
	providers: "Search providers...",
	projects: "Search projects..."
};
function commandCenterDialogClass(isMobile, page) {
	return cn("overflow-hidden border-border bg-popover p-0 shadow-2xl", isMobile ? "h-[100dvh] w-screen max-w-none rounded-none border-0 flex flex-col" : page === "shortcuts" ? "flex w-full flex-col sm:max-w-5xl h-[85dvh] max-h-[85dvh]" : "w-full sm:max-w-2xl");
}
function commandCenterListHeightClass(isMobile) {
	return isMobile ? "max-h-none flex-1 min-h-0" : "max-h-[min(420px,58dvh)]";
}
function toRegistryScope(ctx) {
	if (ctx === "org") return "organization";
	if (ctx === "account") return "account";
	if (ctx === "docs") return "docs";
	return "project";
}
function navigateToHref(navigate, href) {
	navigate({
		to: href,
		replace: false
	}).catch(() => {
		if (typeof window !== "undefined") window.location.assign(href);
	});
}
function CommandCenter({ open, onOpenChange, onNavigate, onNavigateToResource, onCreateResource, context = "project", onOrgNavigate, onInviteMember, onOrgCreateProject, onToggleTerminal, onOpenConnectMcp, projectId, orgId, initialSubPage, onInitialSubPageConsumed }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [pages, setPages] = useState([]);
	const [searchScope, setSearchScope] = useState(null);
	const inputRef = useRef(null);
	const docsInputRef = useRef(null);
	const focusReturnRef = useRef(null);
	const wasOpenRef = useRef(false);
	const displayedResourceCommandsRef = useRef([]);
	const prevSearchScopeRef = useRef(null);
	const currentPage = pages[pages.length - 1];
	const isMobile = useIsMobile();
	const { isMac } = usePlatform();
	const navigate = useNavigate();
	const location = useLocation();
	const recentResources = useRecentResourcesSafe();
	const { features } = useConsoleProfile();
	const { setTheme } = useTheme();
	const isOrgContext = context === "org";
	const isProjectContext = context === "project";
	const isConsoleDocsPreviewContext = isConsoleDocsPreviewPath(location.pathname);
	const { project } = useProject(isProjectContext ? projectId ?? void 0 : void 0);
	const { access: rbacAccess } = useOrganizationScopes(isOrgContext ? orgId ?? void 0 : project?.teamId);
	const access = rbacAccess ?? FULL_ACCESS;
	const postgresSqlEditorActions = usePostgresSqlEditorActions();
	const openSqlTabPickerPage = useCallback(() => {
		setPages(["sql-tabs"]);
		setSearch("");
		onOpenChange(true);
	}, [onOpenChange]);
	useEffect(() => {
		registerPostgresSqlJumpToTabPicker(openSqlTabPickerPage);
		return () => registerPostgresSqlJumpToTabPicker(null);
	}, [openSqlTabPickerPage]);
	const closeCommandCenter = useCallback(() => onOpenChange(false), [onOpenChange]);
	const openShortcutsPage = useCallback(() => setPages((p) => [...p, "shortcuts"]), []);
	const openDocsSearchPage = useCallback(() => setPages((p) => [...p, "docs"]), []);
	const openFeedbackPage = useCallback(() => setPages((p) => [...p, "feedback"]), []);
	const openSupportPage = useCallback(() => setPages((p) => [...p, "support"]), []);
	const { openDocsPreview } = useDocsPreview();
	const handleDocsSelect = useCallback((slug) => {
		onOpenChange(false);
		if (!features.marketing) {
			openInNewWindow(getDocsPageUrlFromSlug(slug, false));
			return;
		}
		if (isConsoleDocsPreviewContext) {
			openDocsPreview(slug);
			return;
		}
		if (!slug) {
			navigate({ to: "/docs/" });
			return;
		}
		navigate({
			to: "/docs/$",
			params: { _splat: slug }
		});
	}, [
		navigate,
		onOpenChange,
		isConsoleDocsPreviewContext,
		openDocsPreview,
		features.marketing
	]);
	const ctx = useMemo(() => ({
		scope: toRegistryScope(context),
		projectId: projectId ?? null,
		orgId: orgId ?? project?.teamId ?? null,
		pathname: location.pathname,
		features,
		access,
		isMobile,
		navigate: (href) => navigateToHref(navigate, href),
		navigateExternal: (href) => {
			if (typeof window !== "undefined") window.location.assign(href);
		},
		closeCommandCenter,
		openShortcutsPage,
		openDocsSearchPage,
		openFeedbackPage,
		openSupportPage,
		handlers: {
			onProjectCreate: onCreateResource,
			onOrgInviteMember: onInviteMember,
			onOrgCreateProject,
			onToggleTerminal,
			onSetTheme: setTheme,
			onOpenConnectMcp
		}
	}), [
		context,
		projectId,
		orgId,
		project?.teamId,
		location.pathname,
		features,
		access,
		isMobile,
		navigate,
		closeCommandCenter,
		openShortcutsPage,
		openDocsSearchPage,
		openFeedbackPage,
		openSupportPage,
		onCreateResource,
		onInviteMember,
		onOrgCreateProject,
		onToggleTerminal,
		onOpenConnectMcp,
		setTheme
	]);
	const focusSearchInput = useCallback(() => {
		if (currentPage === "shortcuts" || currentPage === "functions" || currentPage === "sql-tabs" || currentPage === "feedback" || currentPage === "support") return;
		if (currentPage === "docs") {
			docsInputRef.current?.focus();
			return;
		}
		inputRef.current?.focus();
	}, [currentPage]);
	const refocusSearchShortcut = {
		...OPEN_COMMAND_CENTER_SHORTCUT_OPTIONS,
		enabled: open
	};
	useKeyboardShortcut("meta+k", focusSearchInput, refocusSearchShortcut);
	useKeyboardShortcut("control+k", focusSearchInput, refocusSearchShortcut);
	useKeyboardShortcut("/", (e) => {
		e.preventDefault();
		focusSearchInput();
	}, { enabled: open && currentPage !== "shortcuts" && currentPage !== "docs" && currentPage !== "sql-tabs" && currentPage !== "feedback" && currentPage !== "support" });
	const registryCommands = useMemo(() => getCommandsForContext(ctx).map((entry) => toRuntimeCommand(entry, ctx)), [ctx]);
	const localActionCommands = useMemo(() => {
		const commands = [];
		if (!isMobile) commands.push({
			id: "action.shortcuts",
			label: "Keyboard shortcuts",
			description: "See all keyboard shortcuts",
			icon: Keyboard,
			kind: "action",
			keywords: [
				"help",
				"keys",
				"hotkeys",
				"shortcuts"
			],
			select: () => setPages((p) => [...p, "shortcuts"])
		});
		return commands;
	}, [isMobile]);
	const searchOnlyActionCommands = useMemo(() => {
		const commands = [];
		if (isProjectContext) {
			commands.push({
				id: "action.execute-function",
				label: "Execute function",
				description: "Pick a function to execute",
				icon: Play,
				kind: "action",
				keywords: [
					"run",
					"execute",
					"invoke",
					"function"
				],
				select: () => setPages((p) => [...p, "functions"])
			});
			if (features.activity) commands.push({
				id: "action.view-logs",
				label: "View activity log",
				description: "Open project activity log",
				icon: Terminal,
				kind: "action",
				keywords: [
					"logs",
					"activity",
					"audit",
					"console"
				],
				select: () => {
					onOpenChange(false);
					if (projectId) navigateToHref(navigate, `/projects/${projectId}/activity`);
					else if (onNavigate) onNavigate("activity");
				}
			});
		}
		return commands;
	}, [
		isProjectContext,
		isMobile,
		features.activity,
		navigate,
		projectId,
		onOpenChange,
		onNavigate
	]);
	const resourceSearchCtas = useMemo(() => {
		return RESOURCE_SEARCH_SPECS.filter((s) => s.availableScopes.includes(context)).map((spec) => ({
			id: `search.${spec.scope}`,
			label: spec.label,
			description: spec.description,
			icon: spec.icon,
			kind: "action",
			group: "Search",
			keywords: [
				spec.scope,
				"search",
				"find"
			],
			select: () => {
				setSearchScope(spec.scope);
				setSearch("");
			},
			isResourceSearch: true
		}));
	}, [context]);
	const recentCommands = useMemo(() => {
		if (!isProjectContext || !projectId) return [];
		const currentRef = parseRecentResourceRef(location.pathname);
		return (recentResources?.getRecentResources({
			projectId,
			limit: 5,
			skipNewestWhenMatches: currentRef ? {
				projectId: currentRef.projectId,
				kind: currentRef.kind,
				resourceId: currentRef.resourceId
			} : null
		}) ?? []).map((entry) => {
			const databaseIconHints = entry.kind === "database" ? getRecentResourceDatabaseIconHints(entry) : null;
			const siteFramework = entry.kind === "site" ? getRecentResourceSiteFramework(entry) : void 0;
			return {
				id: `recent.${entry.key}`,
				label: entry.name,
				breadcrumbs: getRecentResourceBreadcrumbs(entry),
				icon: RESOURCE_KIND_ICONS[entry.kind],
				iconElement: siteFramework ? /* @__PURE__ */ jsx(FrameworkIcon, {
					framework: siteFramework,
					size: "sm",
					className: "h-3.5 w-3.5"
				}) : databaseIconHints && (databaseIconHints.apiType || databaseIconHints.engine) ? /* @__PURE__ */ jsx(DatabaseTypeIcon, {
					apiType: databaseIconHints.apiType,
					engine: databaseIconHints.engine,
					className: "h-3.5 w-3.5"
				}) : void 0,
				kind: "action",
				group: "Recent",
				select: () => {
					onOpenChange(false);
					navigateToHref(navigate, entry.href);
				}
			};
		});
	}, [
		isProjectContext,
		projectId,
		recentResources,
		navigate,
		onOpenChange,
		location.pathname
	]);
	const hasSearch = search.trim().length > 0;
	const shouldFetch = hasSearch || searchScope !== null;
	const { projects: orgProjects, isLoading: orgProjectsLoading } = useProjectsForTeam(isOrgContext && orgId && shouldFetch && searchScope === "projects" ? orgId : null, 0, 100, shouldFetch && searchScope === "projects" ? search : void 0);
	const { databases: projectDatabases, isLoading: databasesLoading } = useProjectConsoleDatabases(isProjectContext && projectId && shouldFetch && searchScope === "databases" ? projectId : null, 0, 100, shouldFetch && searchScope === "databases" ? search : void 0);
	const { users: projectUsers, isLoading: usersLoading } = useProjectUsers(isProjectContext && projectId && shouldFetch && searchScope === "users" ? projectId : null, 0, 100, shouldFetch && searchScope === "users" ? search : void 0);
	const { teams: projectTeams, isLoading: teamsLoading } = useProjectTeams(isProjectContext && projectId && shouldFetch && searchScope === "teams" ? projectId : null, 0, 100, shouldFetch && searchScope === "teams" ? search : void 0);
	const { buckets: projectBuckets, isLoading: bucketsLoading } = useProjectBuckets(isProjectContext && projectId && shouldFetch && searchScope === "buckets" ? projectId : null, 0, 100, shouldFetch && searchScope === "buckets" ? search : void 0);
	const { functions: projectFunctions, isLoading: functionsLoading } = useProjectFunctions(isProjectContext && projectId && shouldFetch && searchScope === "functions" ? projectId : null, 0, 100, shouldFetch && searchScope === "functions" ? search : void 0);
	const { sites: projectSites, isLoading: sitesLoading } = useProjectSites(isProjectContext && projectId && shouldFetch && searchScope === "sites" ? projectId : null, 0, 100, shouldFetch && searchScope === "sites" ? search : void 0);
	const { messages: projectMessages, isLoading: messagesLoading } = useProjectMessages(isProjectContext && projectId && shouldFetch && searchScope === "messages" ? projectId : null, 0, 100, shouldFetch && searchScope === "messages" ? search : void 0);
	const { topics: projectTopics, isLoading: topicsLoading } = useProjectTopics(isProjectContext && projectId && shouldFetch && searchScope === "topics" ? projectId : null, 0, 100, shouldFetch && searchScope === "topics" ? search : void 0);
	const { providers: projectProviders, isLoading: providersLoading } = useProjectProviders(isProjectContext && projectId && shouldFetch && searchScope === "providers" ? projectId : null, 0, 100, shouldFetch && searchScope === "providers" ? search : void 0);
	const searchableResourceKinds = useMemo(() => {
		const kinds = /* @__PURE__ */ new Set();
		if (!isProjectContext) return kinds;
		if (canSeeProjectNavItem(access, features, "databases")) kinds.add("database");
		if (canSeeProjectNavItem(access, features, "storage")) kinds.add("bucket");
		if (canSeeProjectNavItem(access, features, "functions")) kinds.add("function");
		if (canSeeProjectNavItem(access, features, "sites")) kinds.add("site");
		if (canSeeProjectNavItem(access, features, "messaging")) {
			kinds.add("message");
			kinds.add("topic");
			kinds.add("provider");
		}
		kinds.add("user");
		kinds.add("team");
		return kinds;
	}, [
		isProjectContext,
		access,
		features
	]);
	const shouldRunUnifiedResourceSearch = isProjectContext && !!projectId && hasSearch && !searchScope && searchableResourceKinds.size > 0;
	const { hits: unifiedResourceHits, isLoading: unifiedResourceLoading, isFetching: unifiedResourceFetching } = useCommandCenterResourceSearch({
		projectId,
		query: search,
		enabled: shouldRunUnifiedResourceSearch,
		kinds: searchableResourceKinds
	});
	const displayedUnifiedResourceHitsRef = useRef([]);
	useEffect(() => {
		if (!unifiedResourceFetching && shouldRunUnifiedResourceSearch) displayedUnifiedResourceHitsRef.current = unifiedResourceHits;
	}, [
		unifiedResourceFetching,
		shouldRunUnifiedResourceSearch,
		unifiedResourceHits
	]);
	const stableUnifiedResourceHits = unifiedResourceFetching && displayedUnifiedResourceHitsRef.current.length > 0 ? displayedUnifiedResourceHitsRef.current : unifiedResourceHits;
	useEffect(() => {
		if (!open) {
			setSearch("");
			setPages([]);
			setSearchScope(null);
		}
	}, [open]);
	useEffect(() => {
		if (!open || !initialSubPage) return;
		setPages([initialSubPage]);
		onInitialSubPageConsumed?.();
	}, [
		open,
		initialSubPage,
		onInitialSubPageConsumed
	]);
	const isScopeLoading = useMemo(() => {
		if (!searchScope) return false;
		switch (searchScope) {
			case "databases": return databasesLoading;
			case "users": return usersLoading;
			case "teams": return teamsLoading;
			case "buckets": return bucketsLoading;
			case "functions": return functionsLoading;
			case "sites": return sitesLoading;
			case "messages": return messagesLoading;
			case "topics": return topicsLoading;
			case "providers": return providersLoading;
			case "projects": return orgProjectsLoading;
			default: return false;
		}
	}, [
		searchScope,
		databasesLoading,
		usersLoading,
		teamsLoading,
		bucketsLoading,
		functionsLoading,
		sitesLoading,
		messagesLoading,
		topicsLoading,
		providersLoading,
		orgProjectsLoading
	]);
	const hasShownScopeResults = useRef(false);
	const resolvedResourceCommands = useMemo(() => {
		const items = [];
		if (!searchScope) return items;
		if (searchScope === "databases" && projectDatabases && !databasesLoading) projectDatabases.forEach((db) => {
			const dbId = db.$id;
			items.push({
				id: `db-${dbId}`,
				label: db.name,
				description: `Database · ${dbId}`,
				icon: Database,
				kind: "action",
				select: () => {
					if (onNavigateToResource) onNavigateToResource("databases", dbId);
					else onNavigate?.("databases");
					onOpenChange(false);
				}
			});
		});
		if (searchScope === "users" && projectUsers && !usersLoading) projectUsers.forEach((user) => {
			items.push({
				id: `user-${user.$id}`,
				label: user.name || user.email || "Unknown",
				description: `User · ${user.email || "No email"}`,
				icon: Users$1,
				kind: "action",
				select: () => {
					if (onNavigateToResource) onNavigateToResource("auth/users", user.$id);
					else onNavigate?.("auth");
					onOpenChange(false);
				}
			});
		});
		if (searchScope === "teams" && projectTeams && !teamsLoading) projectTeams.forEach((team) => {
			items.push({
				id: `team-${team.id}`,
				label: team.name,
				description: `Team · ${team.id}`,
				icon: Building2,
				kind: "action",
				select: () => {
					if (onNavigateToResource) onNavigateToResource("auth/teams", team.id);
					else onNavigate?.("auth");
					onOpenChange(false);
				}
			});
		});
		if (searchScope === "buckets" && projectBuckets && !bucketsLoading) projectBuckets.forEach((bucket) => {
			items.push({
				id: `bucket-${bucket.$id}`,
				label: bucket.name,
				description: `Bucket · ${bucket.$id}`,
				icon: Folder,
				kind: "action",
				select: () => {
					if (onNavigateToResource) onNavigateToResource("storage", bucket.$id);
					else onNavigate?.("storage");
					onOpenChange(false);
				}
			});
		});
		if (searchScope === "functions" && projectFunctions && !functionsLoading) projectFunctions.forEach((fn) => {
			items.push({
				id: `fn-${fn.$id}`,
				label: fn.name,
				description: `Function · ${fn.runtime || "unknown"}`,
				icon: Zap,
				kind: "action",
				select: () => {
					if (onNavigateToResource) onNavigateToResource("functions", fn.$id);
					else onNavigate?.("functions");
					onOpenChange(false);
				}
			});
		});
		if (searchScope === "sites" && projectSites && !sitesLoading) projectSites.forEach((site) => {
			items.push(projectResourceHitToRuntimeCommand({
				id: `site-${site.$id}`,
				kind: "site",
				label: site.name,
				description: site.$id,
				section: "sites",
				resourceId: site.$id,
				score: 0
			}, {
				onNavigateToResource,
				onNavigate,
				onOpenChange
			}));
		});
		if (searchScope === "messages" && projectMessages && !messagesLoading) projectMessages.forEach((message) => {
			items.push(projectResourceHitToRuntimeCommand({
				id: `message-${message.$id}`,
				kind: "message",
				label: getMessageSearchLabel(message),
				description: `${message.providerType} · ${message.$id}`,
				section: "messaging/messages",
				resourceId: message.$id,
				score: 0
			}, {
				onNavigateToResource,
				onNavigate,
				onOpenChange
			}));
		});
		if (searchScope === "topics" && projectTopics && !topicsLoading) projectTopics.forEach((topic) => {
			items.push(projectResourceHitToRuntimeCommand({
				id: `topic-${topic.$id}`,
				kind: "topic",
				label: topic.name,
				description: topic.$id,
				section: "messaging/topics",
				resourceId: topic.$id,
				score: 0
			}, {
				onNavigateToResource,
				onNavigate,
				onOpenChange
			}));
		});
		if (searchScope === "providers" && projectProviders && !providersLoading) projectProviders.forEach((provider) => {
			items.push(projectResourceHitToRuntimeCommand({
				id: `provider-${provider.$id}`,
				kind: "provider",
				label: provider.name,
				description: `${provider.type} · ${provider.$id}`,
				section: "messaging/providers",
				resourceId: provider.$id,
				score: 0
			}, {
				onNavigateToResource,
				onNavigate,
				onOpenChange
			}));
		});
		if (searchScope === "projects" && orgProjects && !orgProjectsLoading) orgProjects.forEach((project$1) => {
			items.push({
				id: `project-${project$1.$id}`,
				label: formatProjectNameForDisplay(project$1.name),
				description: features.multiRegion ? `Project · ${project$1.region || "unknown"}` : "Project",
				icon: FolderOpen,
				kind: "action",
				select: () => {
					onOpenChange(false);
					navigateToHref(navigate, `/projects/${project$1.$id}`);
				}
			});
		});
		return items;
	}, [
		searchScope,
		projectDatabases,
		databasesLoading,
		projectUsers,
		usersLoading,
		projectTeams,
		teamsLoading,
		projectBuckets,
		bucketsLoading,
		projectFunctions,
		functionsLoading,
		projectSites,
		sitesLoading,
		projectMessages,
		messagesLoading,
		projectTopics,
		topicsLoading,
		projectProviders,
		providersLoading,
		orgProjects,
		orgProjectsLoading,
		features.multiRegion,
		navigate,
		onNavigate,
		onNavigateToResource,
		onOpenChange
	]);
	useEffect(() => {
		if (searchScope !== prevSearchScopeRef.current) {
			prevSearchScopeRef.current = searchScope;
			displayedResourceCommandsRef.current = [];
		}
	}, [searchScope]);
	useEffect(() => {
		if (!isScopeLoading && searchScope) displayedResourceCommandsRef.current = resolvedResourceCommands;
	}, [
		isScopeLoading,
		searchScope,
		resolvedResourceCommands
	]);
	const resourceCommands = isScopeLoading ? displayedResourceCommandsRef.current : resolvedResourceCommands;
	const wrapWithLegacyNavigate = useCallback((cmd) => {
		if (!isProjectContext) return cmd;
		if (cmd.kind !== "navigation") return cmd;
		if (!onNavigate) return cmd;
		const href = cmd.href;
		if (!href || !projectId) return cmd;
		const prefix = `/projects/${projectId}`;
		if (!href.startsWith(prefix)) return cmd;
		const rest = href.slice(prefix.length).replace(/^\//, "");
		if (rest.includes("/") || rest.includes("#")) return cmd;
		const section = rest === "" ? "overview" : rest;
		return {
			...cmd,
			select: () => {
				onOpenChange(false);
				onNavigate(section);
			}
		};
	}, [
		isProjectContext,
		projectId,
		onNavigate,
		onOpenChange
	]);
	const wrapOrgLegacyNavigate = useCallback((cmd) => {
		if (!isOrgContext) return cmd;
		if (!onOrgNavigate) return cmd;
		if (cmd.kind !== "navigation") return cmd;
		const href = cmd.href;
		if (!href || !orgId) return cmd;
		const prefix = `/organizations/${orgId}`;
		if (!href.startsWith(prefix)) return cmd;
		const tail = href.slice(prefix.length).replace(/^\//, "").replace(/\/$/, "");
		if (!new Set([
			"",
			"projects",
			"domains",
			"settings"
		]).has(tail)) return cmd;
		const tab = tail === "" ? "projects" : tail;
		return {
			...cmd,
			select: () => {
				onOpenChange(false);
				onOrgNavigate(tab);
			}
		};
	}, [
		isOrgContext,
		onOrgNavigate,
		orgId,
		onOpenChange
	]);
	const enrichedRegistryCommands = useMemo(() => registryCommands.map(wrapOrgLegacyNavigate).map(wrapWithLegacyNavigate), [
		registryCommands,
		wrapWithLegacyNavigate,
		wrapOrgLegacyNavigate
	]);
	const allCommands = useMemo(() => [
		...enrichedRegistryCommands,
		...resourceSearchCtas,
		...localActionCommands,
		...searchOnlyActionCommands
	], [
		enrichedRegistryCommands,
		resourceSearchCtas,
		localActionCommands,
		searchOnlyActionCommands
	]);
	const defaultGroups = useMemo(() => {
		const sections = [];
		if (recentCommands.length > 0) sections.push({
			id: "recent",
			label: "Recent",
			commands: recentCommands
		});
		const buckets = /* @__PURE__ */ new Map();
		for (const cmd of enrichedRegistryCommands) {
			if (cmd.kind === "tab" || cmd.kind === "card") continue;
			const label = cmd.group ?? DEFAULT_GROUP_LABELS[cmd.kind];
			const arr = buckets.get(label) ?? [];
			arr.push(cmd);
			buckets.set(label, arr);
		}
		if (resourceSearchCtas.length > 0) buckets.set("Search", [...buckets.get("Search") ?? [], ...resourceSearchCtas]);
		if (localActionCommands.length > 0) buckets.set("Actions", [...buckets.get("Actions") ?? [], ...localActionCommands]);
		const HEAD = [DEFAULT_GROUP_LABELS.navigation, DEFAULT_GROUP_LABELS.create];
		const TAIL = ["Search", "Actions"];
		const labels = Array.from(buckets.keys()).sort((a, b) => {
			const ai = HEAD.indexOf(a);
			const bi = HEAD.indexOf(b);
			const at = TAIL.indexOf(a);
			const bt = TAIL.indexOf(b);
			if (ai !== -1 || bi !== -1) {
				if (ai === -1) return 1;
				if (bi === -1) return -1;
				return ai - bi;
			}
			if (at !== -1 || bt !== -1) {
				if (at === -1) return -1;
				if (bt === -1) return 1;
				return at - bt;
			}
			return a.localeCompare(b);
		});
		for (const label of labels) {
			const cmds = buckets.get(label);
			if (cmds.length === 0) continue;
			sections.push({
				id: label.toLowerCase(),
				label,
				commands: cmds
			});
		}
		return sections;
	}, [
		recentCommands,
		enrichedRegistryCommands,
		resourceSearchCtas,
		localActionCommands
	]);
	const unifiedSearchCommands = useMemo(() => {
		if (!shouldRunUnifiedResourceSearch || !search.trim()) return [];
		const scoredCommands = searchCommandsWithScores(search, allCommands.map((cmd) => ({
			id: cmd.id,
			label: cmd.label,
			description: cmd.description,
			keywords: cmd.keywords,
			kind: cmd.kind,
			group: cmd.group
		})));
		const commandById = new Map(allCommands.map((cmd) => [cmd.id, cmd]));
		return [...scoredCommands.map(({ entry, score }) => ({
			command: commandById.get(entry.id),
			score
		})), ...stableUnifiedResourceHits.map((hit) => ({
			command: projectResourceHitToRuntimeCommand(hit, {
				onNavigateToResource,
				onNavigate,
				onOpenChange
			}),
			score: hit.score
		}))].filter((item) => Boolean(item.command)).sort((a, b) => {
			if (b.score !== a.score) return b.score - a.score;
			return a.command.label.localeCompare(b.command.label);
		}).map((item) => item.command);
	}, [
		shouldRunUnifiedResourceSearch,
		search,
		allCommands,
		stableUnifiedResourceHits,
		onNavigateToResource,
		onNavigate,
		onOpenChange
	]);
	const filteredGroups = useMemo(() => {
		if (searchScope) return [{
			id: "resources",
			label: {
				databases: "Databases",
				users: "Users",
				teams: "Teams",
				buckets: "Buckets",
				functions: "Functions",
				sites: "Sites",
				messages: "Messages",
				topics: "Topics",
				providers: "Providers",
				projects: "Projects"
			}[searchScope],
			commands: resourceCommands
		}];
		if (!search.trim()) return defaultGroups;
		if (shouldRunUnifiedResourceSearch) {
			if (unifiedSearchCommands.length === 0) return [];
			return [{
				id: "results",
				label: "Results",
				commands: unifiedSearchCommands
			}];
		}
		const matched = searchCommandsRuntime(search, allCommands);
		if (matched.length === 0) return [];
		const buckets = /* @__PURE__ */ new Map();
		for (const cmd of matched) {
			const label = cmd.group ?? DEFAULT_GROUP_LABELS[cmd.kind];
			const arr = buckets.get(label) ?? [];
			arr.push(cmd);
			buckets.set(label, arr);
		}
		return Array.from(buckets.entries()).map(([label, commands]) => ({
			id: label.toLowerCase(),
			label,
			commands
		}));
	}, [
		search,
		searchScope,
		defaultGroups,
		allCommands,
		resourceCommands,
		shouldRunUnifiedResourceSearch,
		unifiedSearchCommands
	]);
	const nonEmptyGroups = useMemo(() => filteredGroups.filter((group) => group.commands.length > 0), [filteredGroups]);
	useLayoutEffect(() => {
		if (open && !wasOpenRef.current) {
			const el = document.activeElement;
			focusReturnRef.current = el instanceof HTMLElement ? el : null;
		}
		wasOpenRef.current = open;
	}, [open]);
	const restoreFocusOnClose = useCallback(() => {
		const el = focusReturnRef.current;
		focusReturnRef.current = null;
		if (!el?.isConnected) return;
		requestAnimationFrame(() => {
			if (!el.isConnected) return;
			el.focus({ preventScroll: true });
		});
	}, []);
	useEffect(() => {
		if (!open) return;
		const id = window.requestAnimationFrame(() => {
			if (currentPage === "docs") {
				docsInputRef.current?.focus();
				return;
			}
			if (currentPage === "shortcuts" || currentPage === "functions" || currentPage === "sql-tabs" || currentPage === "feedback" || currentPage === "support") return;
			inputRef.current?.focus();
		});
		return () => window.cancelAnimationFrame(id);
	}, [open, currentPage]);
	useEffect(() => {
		if (searchScope && !isScopeLoading && displayedResourceCommandsRef.current.length > 0 && !hasShownScopeResults.current) {
			hasShownScopeResults.current = true;
			requestAnimationFrame(() => {
				inputRef.current?.focus();
			});
		} else if (!searchScope) hasShownScopeResults.current = false;
	}, [searchScope, isScopeLoading]);
	const handleEscape = useCallback((e) => {
		if (search) {
			e.preventDefault();
			e.stopPropagation?.();
			setSearch("");
			return true;
		}
		if (searchScope) {
			e.preventDefault();
			e.stopPropagation?.();
			setSearchScope(null);
			return true;
		}
		if (pages.length > 0) {
			e.preventDefault();
			e.stopPropagation?.();
			setPages(pages.slice(0, -1));
			return true;
		}
		return false;
	}, [
		search,
		searchScope,
		pages
	]);
	const handleKeyDown = useCallback((e) => {
		if (e.key === "Backspace" && !search) {
			if (searchScope) {
				e.preventDefault();
				setSearchScope(null);
				return;
			}
			if (pages.length > 0) {
				e.preventDefault();
				setPages(pages.slice(0, -1));
				return;
			}
		}
		if (e.key === "Escape") handleEscape(e);
	}, [
		search,
		searchScope,
		pages,
		handleEscape
	]);
	const sqlTabPickerItems = useMemo(() => {
		const tabs = postgresSqlEditorActions?.tabs ?? [];
		const query = search.trim().toLowerCase();
		if (!query) return tabs;
		return tabs.filter((tab) => tab.title.toLowerCase().includes(query));
	}, [postgresSqlEditorActions?.tabs, search]);
	const dialogTitle = t(currentPage === "shortcuts" ? "Keyboard shortcuts" : currentPage === "docs" ? "Search documentation..." : currentPage === "feedback" ? "Send feedback" : currentPage === "support" ? "Support" : currentPage === "functions" && context === "project" ? "Execute function" : currentPage === "sql-tabs" && context === "project" ? "Go to query tab" : "Command center");
	const placeholder = t(searchScope ? RESOURCE_SEARCH_PLACEHOLDERS[searchScope] : currentPage === "sql-tabs" ? "Search query tabs..." : context === "docs" ? "Search commands and documentation pages..." : context === "org" ? "Search projects, settings, members..." : context === "account" ? "Search account, sessions, security..." : "Search anything - pages, tabs, settings, resources...");
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: commandCenterDialogClass(isMobile, currentPage),
			showCloseButton: false,
			"aria-describedby": void 0,
			onEscapeKeyDown: (e) => {
				if (handleEscape(e)) return;
			},
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				restoreFocusOnClose();
			},
			children: [/* @__PURE__ */ jsx(VisuallyHidden, { children: /* @__PURE__ */ jsx(DialogTitle, { children: dialogTitle }) }), currentPage === "shortcuts" ? /* @__PURE__ */ jsx(KeyboardShortcutsView, {
				commands: allCommands,
				isMobile,
				showTerminalShortcuts: isProjectContext && !!onToggleTerminal,
				showSqlEditorShortcuts: isProjectContext,
				showAgentShortcuts: true,
				onBack: () => setPages([]),
				onClose: () => onOpenChange(false),
				onKeyDown: handleKeyDown
			}) : currentPage === "docs" ? /* @__PURE__ */ jsx(DocsSearchView, {
				isMobile,
				inputRef: docsInputRef,
				onBack: () => setPages([]),
				onClose: () => onOpenChange(false),
				onKeyDown: handleKeyDown,
				onSelect: handleDocsSelect,
				onOpenShortcuts: () => setPages((p) => [...p, "shortcuts"])
			}) : currentPage === "feedback" ? /* @__PURE__ */ jsx(CommandCenterFeedbackView, {
				isMobile,
				orgId: orgId ?? project?.teamId,
				projectId,
				onBack: () => setPages([]),
				onClose: () => onOpenChange(false),
				onKeyDown: handleKeyDown
			}) : currentPage === "support" ? /* @__PURE__ */ jsx(CommandCenterSupportView, {
				isMobile,
				orgId: orgId ?? project?.teamId,
				onBack: () => setPages([]),
				onClose: () => onOpenChange(false),
				onKeyDown: handleKeyDown
			}) : currentPage === "functions" && context === "project" ? /* @__PURE__ */ jsxs(Command$1, {
				className: cn("bg-transparent", isMobile && "flex flex-col flex-1"),
				onKeyDown: handleKeyDown,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center border-b border-border [&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:border-transparent",
					children: [
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setPages([]),
							className: "ms-3 flex h-6 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
							children: ["← ", t("Back")]
						}),
						/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t("Select function to execute..."),
							value: search,
							onValueChange: setSearch,
							className: "h-14 border-0 text-foreground placeholder:text-muted-foreground"
						}),
						isMobile && /* @__PURE__ */ jsx("button", {
							onClick: () => onOpenChange(false),
							className: "me-3 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ jsxs(CommandList, {
					className: cn("p-2", commandCenterListHeightClass(isMobile)),
					children: [/* @__PURE__ */ jsx(CommandEmpty, {
						className: "py-6 text-center text-[13px] text-muted-foreground",
						children: t("No functions found.")
					}), /* @__PURE__ */ jsx(CommandGroup, {
						heading: t("Functions"),
						className: "text-muted-foreground",
						children: projectFunctions && projectFunctions.length > 0 ? projectFunctions.map((fn) => /* @__PURE__ */ jsxs(CommandItem, {
							value: fn.name,
							onSelect: () => {
								onOpenChange(false);
							},
							className: "group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-muted-foreground data-[selected=true]:bg-accent data-[selected=true]:text-foreground",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-md bg-muted group-data-[selected=true]:bg-accent",
									children: /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium",
										children: fn.name
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-muted-foreground group-data-[selected=true]:text-foreground/80",
										children: fn.runtime || "unknown"
									})]
								}),
								/* @__PURE__ */ jsx("span", {
									className: cn("rounded-full px-2 py-0.5 text-[10px] font-medium", "bg-muted text-muted-foreground"),
									children: t("Function")
								})
							]
						}, fn.$id)) : /* @__PURE__ */ jsx("div", {
							className: "px-3 py-2.5 text-[13px] text-muted-foreground",
							children: functionsLoading ? t("Loading...") : t("No functions found")
						})
					})]
				})]
			}) : currentPage === "sql-tabs" && context === "project" ? /* @__PURE__ */ jsxs(Command$1, {
				className: cn("bg-transparent", isMobile && "flex flex-col flex-1"),
				onKeyDown: handleKeyDown,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center border-b border-border [&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:border-transparent",
					children: [
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setPages([]),
							className: "ms-3 flex h-6 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-muted-foreground hover:bg-accent/80 hover:text-foreground",
							children: ["← ", t("Back")]
						}),
						/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t("Search query tabs..."),
							value: search,
							onValueChange: setSearch,
							className: "h-14 border-0 text-foreground placeholder:text-muted-foreground"
						}),
						isMobile && /* @__PURE__ */ jsx("button", {
							onClick: () => onOpenChange(false),
							className: "me-3 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ jsxs(CommandList, {
					className: cn("p-2", commandCenterListHeightClass(isMobile)),
					children: [/* @__PURE__ */ jsx(CommandEmpty, {
						className: "py-6 text-center text-[13px] text-muted-foreground",
						children: t("No query tabs found.")
					}), /* @__PURE__ */ jsx(CommandGroup, {
						heading: t("Query tabs"),
						className: "text-muted-foreground",
						children: sqlTabPickerItems.length > 0 ? sqlTabPickerItems.map((tab) => {
							const allTabs = postgresSqlEditorActions?.tabs ?? [];
							const tabIndex = allTabs.findIndex((entry) => entry.id === tab.id);
							const shortcutLabel = tabIndex >= 0 && tabIndex === allTabs.length - 1 ? formatDisplayKeys("mod+9", isMac).join("") : tabIndex >= 0 && tabIndex < 8 ? formatDisplayKeys(`mod+${tabIndex + 1}`, isMac).join("") : null;
							return /* @__PURE__ */ jsxs(CommandItem, {
								value: tab.title,
								onSelect: () => {
									postgresSqlEditorActions?.selectTab(tab.id);
									onOpenChange(false);
								},
								className: "group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-muted-foreground data-[selected=true]:bg-accent data-[selected=true]:text-foreground",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 items-center justify-center rounded-md bg-muted group-data-[selected=true]:bg-accent",
										children: /* @__PURE__ */ jsx(PanelTop, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[13px] font-medium",
											children: tab.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground group-data-[selected=true]:text-foreground/80",
											children: tabIndex >= 0 ? `${t("Tab")} ${tabIndex + 1}` : t("Query tab")
										})]
									}),
									shortcutLabel ? /* @__PURE__ */ jsx("span", {
										dir: "ltr",
										className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
										children: shortcutLabel
									}) : null
								]
							}, tab.id);
						}) : /* @__PURE__ */ jsx("div", {
							className: "px-3 py-2.5 text-[13px] text-muted-foreground",
							children: t("No query tabs found")
						})
					})]
				})]
			}) : /* @__PURE__ */ jsxs(Command$1, {
				className: cn("bg-transparent", isMobile && "flex flex-col flex-1"),
				onKeyDown: handleKeyDown,
				shouldFilter: false,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 border-b border-border px-3 [&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:border-transparent [&_[data-slot=command-input-wrapper]]:flex-1",
						children: [
							searchScope && /* @__PURE__ */ jsxs(Badge, {
								variant: "secondary",
								className: "shrink-0 flex items-center gap-1.5 h-6 px-2 text-[11px] font-medium",
								children: [/* @__PURE__ */ jsx("span", {
									className: "capitalize",
									children: t(searchScope)
								}), /* @__PURE__ */ jsx("button", {
									onClick: (e) => {
										e.stopPropagation();
										setSearchScope(null);
										setSearch("");
									},
									className: "ms-0.5 rounded-sm hover:bg-accent/80 p-0.5 -me-0.5",
									"aria-label": t("Remove scope"),
									children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
								})]
							}),
							/* @__PURE__ */ jsx(CommandInput, {
								ref: inputRef,
								placeholder,
								value: search,
								onValueChange: setSearch,
								autoFocus: true,
								className: "h-14 border-0 text-[14px] text-foreground placeholder:text-muted-foreground"
							}),
							isMobile && /* @__PURE__ */ jsx("button", {
								onClick: () => onOpenChange(false),
								className: "shrink-0 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground",
								children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
							})
						]
					}),
					/* @__PURE__ */ jsxs(CommandList, {
						className: cn("p-2", commandCenterListHeightClass(isMobile)),
						children: [nonEmptyGroups.length === 0 && (search.trim() || searchScope) && /* @__PURE__ */ jsx("div", {
							className: "py-6 text-center text-[13px] text-muted-foreground",
							children: searchScope && isScopeLoading ? `${t("Searching")} ${t(searchScope)}…` : shouldRunUnifiedResourceSearch && unifiedResourceLoading ? t("Searching resources…") : t("No results found.")
						}), nonEmptyGroups.map((group, groupIndex) => /* @__PURE__ */ jsxs("div", { children: [groupIndex > 0 && /* @__PURE__ */ jsx(CommandSeparator, { className: "my-2 bg-border" }), /* @__PURE__ */ jsx(CommandGroup, {
							heading: t(group.label),
							className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground",
							children: group.commands.map((cmd) => {
								const Icon$1 = cmd.icon;
								return /* @__PURE__ */ jsxs(CommandItem, {
									value: `${cmd.id}-${cmd.label}`,
									onSelect: cmd.select,
									disabled: cmd.disabled,
									className: "group flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-muted-foreground data-[selected=true]:bg-accent data-[selected=true]:text-foreground",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "flex h-7 w-7 items-center justify-center rounded-md bg-muted group-data-[selected=true]:bg-accent",
											children: cmd.iconElement ?? (Icon$1 && /* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5" }))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 overflow-hidden",
											children: [/* @__PURE__ */ jsx("p", {
												className: "truncate text-[13px] font-medium",
												children: cmd.resourceKind || cmd.breadcrumbs ? cmd.label : t(cmd.label)
											}), cmd.breadcrumbs && cmd.breadcrumbs.length > 0 ? /* @__PURE__ */ jsx("p", {
												className: "truncate text-[11px] text-muted-foreground group-data-[selected=true]:text-foreground/80",
												children: cmd.breadcrumbs.map((segment, index) => /* @__PURE__ */ jsxs("span", { children: [index > 0 ? " › " : null, t(segment)] }, `${segment}-${index}`))
											}) : cmd.description ? /* @__PURE__ */ jsx("p", {
												className: "truncate text-[11px] text-muted-foreground group-data-[selected=true]:text-foreground/80",
												children: cmd.resourceKind ? cmd.description : t(cmd.description)
											}) : null]
										}),
										cmd.shortcut && !isMobile && /* @__PURE__ */ jsx(ShortcutKeyBadges, {
											keys: formatDisplayKeys(cmd.shortcut, isMac),
											isSequential: !cmd.shortcut.includes("+") && cmd.shortcut.split(/\s+/).length > 1
										}),
										cmd.isResourceSearch && /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground/50" }),
										cmd.resourceKind && /* @__PURE__ */ jsx("span", {
											className: cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium", "bg-muted text-muted-foreground"),
											children: t(PROJECT_RESOURCE_KIND_LABELS[cmd.resourceKind])
										})
									]
								}, cmd.id);
							})
						})] }, group.id))]
					}),
					!isMobile && /* @__PURE__ */ jsx(CommandCenterListFooter, { onOpenShortcuts: () => setPages([...pages, "shortcuts"]) })
				]
			})]
		})
	});
}
function projectResourceHitToRuntimeCommand(hit, handlers) {
	const fallbackSection = hit.section.split("/")[0] ?? hit.section;
	return {
		id: hit.id,
		label: hit.label,
		description: hit.description,
		icon: RESOURCE_KIND_ICONS[hit.kind],
		kind: "action",
		resourceKind: hit.kind,
		select: () => {
			if (handlers.onNavigateToResource) handlers.onNavigateToResource(hit.section, hit.resourceId);
			else handlers.onNavigate?.(fallbackSection);
			handlers.onOpenChange(false);
		}
	};
}
function toRuntimeCommand(entry, ctx) {
	const disabled = entry.disabled?.(ctx) ?? false;
	const reason = disabled ? entry.disabledReason?.(ctx) : void 0;
	const href = entry.to?.(ctx) ?? null;
	const select = () => {
		if (disabled) return;
		if (entry.perform) {
			entry.perform(ctx);
			return;
		}
		if (href) {
			ctx.closeCommandCenter();
			ctx.navigate(href);
		}
	};
	return {
		id: entry.id,
		label: entry.label,
		description: reason ?? entry.description,
		icon: entry.icon,
		shortcut: entry.shortcut,
		kind: entry.kind,
		group: entry.group,
		keywords: entry.keywords,
		disabled,
		select,
		href: href ?? void 0
	};
}
function searchCommandsRuntime(query, commands) {
	const ranked = searchCommands(query, commands.map((cmd) => ({
		id: cmd.id,
		label: cmd.label,
		description: cmd.description,
		keywords: cmd.keywords,
		kind: cmd.kind,
		group: cmd.group,
		scopes: [
			"project",
			"organization",
			"account"
		]
	})));
	const byId = new Map(commands.map((c) => [c.id, c]));
	return ranked.map((r) => byId.get(r.entry.id)).filter((x) => Boolean(x));
}
var KeyboardShortcutsContext = createContext(null);
var defaultContextValue = {
	openCommandCenter: () => {},
	openCommandCenterPage: () => {},
	closeCommandCenter: () => {},
	isCommandCenterOpen: false
};
function useKeyboardShortcutsContext() {
	return useContext(KeyboardShortcutsContext) ?? defaultContextValue;
}
function KeyboardShortcutsProvider({ children, projectId, onFocusSearch }) {
	const [commandCenterOpen, setCommandCenterOpen] = useState(false);
	const [initialSubPage, setInitialSubPage] = useState(null);
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { access } = useOrganizationScopes(project?.teamId);
	const toggleTerminal = useCliShellOptional()?.toggle;
	const projectConnect = useProjectConnectDialog();
	const openConnectMcp = useCallback(() => {
		projectConnect?.openConnect("mcp");
	}, [projectConnect]);
	const navigateToSection = useCallback((section) => {
		if (section === "overview") {
			navigate({
				to: "/projects/$projectId",
				params: { projectId }
			});
			return;
		}
		if (section === "storage") {
			const storageNav = storageHomeNavigation(projectId);
			navigate({
				to: storageNav.to,
				params: storageNav.params
			});
			return;
		}
		if (section === "apps") {
			navigate({
				to: "/projects/$projectId/apps",
				params: { projectId }
			});
			return;
		}
		if (section === "api-keys") {
			navigate({
				to: "/projects/$projectId/api-keys",
				params: { projectId }
			});
			return;
		}
		if (section === "projects") {
			const teamId = project?.teamId;
			if (teamId) navigate({
				to: "/organizations/$orgId",
				params: { orgId: teamId }
			});
			return;
		}
		if (section === "explorer") {
			navigate({
				to: "/projects/$projectId/explorer",
				params: { projectId }
			});
			return;
		}
		if (section === "auth") {
			navigate({
				to: "/projects/$projectId/auth",
				params: { projectId }
			});
			return;
		}
		if (section === "databases") {
			navigate({
				to: "/projects/$projectId/databases",
				params: { projectId }
			});
			return;
		}
		if (section === "functions") {
			navigate({
				to: "/projects/$projectId/functions",
				params: { projectId }
			});
			return;
		}
		if (section === "messaging") {
			navigate({
				to: "/projects/$projectId/messaging",
				params: { projectId }
			});
			return;
		}
		if (section === "sites") {
			navigate({
				to: "/projects/$projectId/sites",
				params: { projectId }
			});
			return;
		}
		if (section === "activity") {
			navigate({
				to: "/projects/$projectId/activity",
				params: { projectId }
			});
			return;
		}
		if (section === "usage") {
			navigate({
				to: "/projects/$projectId/usage",
				params: { projectId }
			});
			return;
		}
		if (section === "settings") {
			navigate({
				to: "/projects/$projectId/settings",
				params: { projectId }
			});
			return;
		}
		navigate({ to: `/projects/${projectId}/${section}` });
	}, [
		navigate,
		projectId,
		project?.teamId
	]);
	const onNavigateToResource = useCallback((section, resourceId) => {
		if (section === "databases") navigate({
			to: "/projects/$projectId/databases/$databaseId",
			params: {
				projectId,
				databaseId: resourceId
			}
		});
		else if (section === "auth/users") navigate({
			to: "/projects/$projectId/auth/users/$userId",
			params: {
				projectId,
				userId: resourceId
			}
		});
		else if (section === "auth/teams") navigate({
			to: "/projects/$projectId/auth/teams/$teamId",
			params: {
				projectId,
				teamId: resourceId
			}
		});
		else if (section === "storage") navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId: resourceId
			}
		});
		else if (section === "functions") navigate({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId: resourceId
			}
		});
		else if (section === "sites") navigate({
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId: resourceId
			}
		});
		else if (section === "messaging/messages") navigate({
			to: "/projects/$projectId/messaging/$messageId",
			params: {
				projectId,
				messageId: resourceId
			}
		});
		else if (section === "messaging/topics") navigate({
			to: "/projects/$projectId/messaging/topics/$topicId",
			params: {
				projectId,
				topicId: resourceId
			}
		});
		else if (section === "messaging/providers") navigate({
			to: "/projects/$projectId/messaging/providers/$providerId",
			params: {
				projectId,
				providerId: resourceId
			}
		});
	}, [navigate, projectId]);
	const onCreateResource = useCallback((type) => {
		if (type === "database") navigate({
			to: "/projects/$projectId/databases",
			params: { projectId },
			search: { create: "database" }
		});
		else if (type === "bucket") navigate({
			to: "/projects/$projectId/storage/",
			params: { projectId },
			search: { create: "bucket" }
		});
		else if (type === "user") navigate({
			to: "/projects/$projectId/auth",
			params: { projectId },
			search: { create: "user" }
		});
		else if (type === "team") navigate({
			to: "/projects/$projectId/auth",
			params: { projectId },
			search: { create: "team" }
		});
		else if (type === "function") navigate({
			to: "/projects/$projectId/functions/create",
			params: { projectId }
		});
		else if (type === "site") navigate({
			to: "/projects/$projectId/sites/create",
			params: { projectId }
		});
	}, [navigate, projectId]);
	const openCommandCenter = useCallback(() => {
		setInitialSubPage(null);
		setCommandCenterOpen(true);
	}, []);
	const openCommandCenterPage = useCallback((page) => {
		setInitialSubPage(page);
		setCommandCenterOpen(true);
	}, []);
	const openShortcutsHelp = useCallback(() => {
		openCommandCenterPage("shortcuts");
	}, [openCommandCenterPage]);
	useEffect(() => {
		return registerCommandCenterOpener((page) => {
			setInitialSubPage(page);
			setCommandCenterOpen(true);
		});
	}, []);
	const handleCommandCenterOpenChange = useCallback((open) => {
		setCommandCenterOpen(open);
		if (!open) setInitialSubPage(null);
	}, []);
	useGlobalCommandShortcuts({
		commandCenterOpen,
		onOpenCommandCenter: () => {
			if (onFocusSearch) onFocusSearch();
			else openCommandCenter();
		},
		onOpenShortcutsHelp: openShortcutsHelp
	});
	useSequentialShortcuts(useMemo(() => {
		const shortcuts = { "g o": () => navigateToSection("overview") };
		if (project?.teamId) shortcuts["g p"] = () => navigateToSection("projects");
		if (canShowConnectSection(access, features)) {
			shortcuts["g i"] = () => navigateToSection("apps");
			shortcuts["g k"] = () => navigateToSection("api-keys");
			shortcuts["g x"] = () => navigateToSection("explorer");
		}
		if (canSeeProjectNavItem(access, features, "databases")) shortcuts["g d"] = () => navigateToSection("databases");
		if (canSeeProjectNavItem(access, features, "storage")) shortcuts["g s"] = () => navigateToSection("storage");
		if (canSeeProjectNavItem(access, features, "functions")) shortcuts["g f"] = () => navigateToSection("functions");
		if (canSeeProjectNavItem(access, features, "messaging")) shortcuts["g m"] = () => navigateToSection("messaging");
		if (canSeeProjectNavItem(access, features, "sites")) shortcuts["g w"] = () => navigateToSection("sites");
		if (features.activity && canSeeActivityNav(access, features)) shortcuts["g l"] = () => navigateToSection("activity");
		if (features.usageStats && canSeeUsageNav(access, features)) shortcuts["g u"] = () => navigateToSection("usage");
		shortcuts["g a"] = () => navigateToSection("auth");
		if (canShowProjectSettings(access, features)) {
			shortcuts["g e"] = () => navigateToSection("settings");
			shortcuts["g ,"] = () => navigateToSection("settings");
		}
		if (canCreateDatabase(access, features)) shortcuts["c d"] = () => onCreateResource("database");
		if (canCreateBucket(access, features)) shortcuts["c b"] = () => onCreateResource("bucket");
		if (canCreateFunction(access, features)) shortcuts["c f"] = () => onCreateResource("function");
		if (canCreateSite(access, features)) shortcuts["c s"] = () => onCreateResource("site");
		if (canCreateUser(access, features)) shortcuts["c u"] = () => onCreateResource("user");
		if (canCreateTeam(access, features)) shortcuts["c t"] = () => onCreateResource("team");
		return shortcuts;
	}, [
		access,
		features,
		navigateToSection,
		onCreateResource,
		project?.teamId
	]), { enabled: !commandCenterOpen });
	const contextValue = {
		openCommandCenter,
		openCommandCenterPage,
		closeCommandCenter: useCallback(() => {
			setCommandCenterOpen(false);
		}, []),
		isCommandCenterOpen: commandCenterOpen
	};
	return /* @__PURE__ */ jsxs(KeyboardShortcutsContext.Provider, {
		value: contextValue,
		children: [children, /* @__PURE__ */ jsx(CommandCenter, {
			open: commandCenterOpen,
			onOpenChange: handleCommandCenterOpenChange,
			onNavigate: navigateToSection,
			onNavigateToResource,
			onCreateResource,
			onToggleTerminal: toggleTerminal,
			onOpenConnectMcp: projectConnect ? openConnectMcp : void 0,
			projectId,
			initialSubPage,
			onInitialSubPageConsumed: () => setInitialSubPage(null)
		})]
	});
}
function StandaloneCommandCenterScope({ children, context = "account", ...commandCenterProps }) {
	const [commandCenterOpen, setCommandCenterOpen] = useState(false);
	const [initialSubPage, setInitialSubPage] = useState(null);
	const openCommandCenter = useCallback(() => {
		setInitialSubPage(null);
		setCommandCenterOpen(true);
	}, []);
	const openCommandCenterPage = useCallback((page) => {
		setInitialSubPage(page);
		setCommandCenterOpen(true);
	}, []);
	const openShortcutsHelp = useCallback(() => {
		openCommandCenterPage("shortcuts");
	}, [openCommandCenterPage]);
	useEffect(() => {
		return registerCommandCenterOpener((page) => {
			setInitialSubPage(page);
			setCommandCenterOpen(true);
		});
	}, []);
	const closeCommandCenter = useCallback(() => {
		setCommandCenterOpen(false);
		setInitialSubPage(null);
	}, []);
	useGlobalCommandShortcuts({
		commandCenterOpen,
		onOpenCommandCenter: openCommandCenter,
		onOpenShortcutsHelp: openShortcutsHelp
	});
	const contextValue = useMemo(() => ({
		openCommandCenter,
		openCommandCenterPage,
		closeCommandCenter,
		isCommandCenterOpen: commandCenterOpen
	}), [
		openCommandCenter,
		openCommandCenterPage,
		closeCommandCenter,
		commandCenterOpen
	]);
	return /* @__PURE__ */ jsxs(KeyboardShortcutsContext.Provider, {
		value: contextValue,
		children: [children, /* @__PURE__ */ jsx(CommandCenter, {
			...commandCenterProps,
			context,
			open: commandCenterOpen,
			onOpenChange: (open) => {
				setCommandCenterOpen(open);
				if (!open) setInitialSubPage(null);
			},
			initialSubPage,
			onInitialSubPageConsumed: () => setInitialSubPage(null)
		})]
	});
}
function ThemeToggleGroup({ className }) {
	const t = useT();
	const { theme, setTheme } = useTheme();
	return /* @__PURE__ */ jsxs(ToggleGroup, {
		type: "single",
		value: theme,
		onValueChange: (value) => {
			if (value) setTheme(value);
		},
		className: cn("rounded-lg bg-muted/50 p-0.5", className),
		children: [
			/* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "light",
				"aria-label": t("Light theme"),
				className: "h-7 w-7 rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				...analyticsAttrs("theme-toggle"),
				children: /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "dark",
				"aria-label": t("Dark theme"),
				className: "h-7 w-7 rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				...analyticsAttrs("theme-toggle"),
				children: /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "system",
				"aria-label": t("System theme"),
				className: "h-7 w-7 rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				...analyticsAttrs("theme-toggle"),
				children: /* @__PURE__ */ jsx(Contrast, { className: "h-4 w-4" })
			})
		]
	});
}
function ThemeToggle({ variant = "menu" }) {
	const t = useT();
	if (variant === "header") return /* @__PURE__ */ jsx("div", {
		className: "shrink-0",
		children: /* @__PURE__ */ jsx(ThemeToggleGroup, {})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between px-2 py-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-sm text-muted-foreground",
			children: t("Theme")
		}), /* @__PURE__ */ jsx(ThemeToggleGroup, {})]
	});
}
function LanguageToggle() {
	const t = useT();
	const { language } = useI18n();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between px-2 py-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-sm text-muted-foreground",
			children: t("Language")
		}), /* @__PURE__ */ jsxs(ToggleGroup, {
			type: "single",
			value: language === "bs" ? "bs" : "en",
			className: "rounded-lg bg-muted/50 p-0.5",
			children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "en",
				"aria-label": "English",
				className: "h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				children: "EN"
			}), /* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "bs",
				"aria-label": "Bosanski",
				className: "h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				children: "BA"
			})]
		})]
	});
}

function SupportPopover({ orgId }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-9 w-9 text-muted-foreground hover:bg-accent hover:text-foreground",
				"aria-label": t("Support"),
				...analyticsAttrs("support-open"),
				children: /* @__PURE__ */ jsx(Headphones, { className: "h-4 w-4" })
			})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Support") }) })] }), /* @__PURE__ */ jsx(PopoverContent, {
		align: "end",
		className: "w-80 p-0",
		children: /* @__PURE__ */ jsx(SupportPanel, { orgId })
	})] });
}
function FeedbackPopover({ source = "n/a", orgId = "", projectId = "", billingPlanId } = {}) {
	const t = useT();
	const [isOpen, setIsOpen] = useState(false);
	const [formKey, setFormKey] = useState(0);
	const handleOpenChange = (open) => {
		setIsOpen(open);
		if (!open) setTimeout(() => setFormKey((k) => k + 1), 200);
	};
	const handleSubmitted = () => {
		setTimeout(() => {
			setIsOpen(false);
			setFormKey((k) => k + 1);
		}, 1500);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open: isOpen,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-9 w-9 text-muted-foreground hover:bg-accent hover:text-foreground",
					"aria-label": t("Feedback"),
					...analyticsAttrs("feedback-open"),
					children: /* @__PURE__ */ jsx(MessageSquarePlus, { className: "h-4 w-4" })
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Feedback") }) })] }), /* @__PURE__ */ jsx(PopoverContent, {
			align: "end",
			className: "w-80 p-0",
			children: /* @__PURE__ */ jsx(FeedbackForm, {
				source,
				orgId,
				projectId,
				billingPlanId,
				onSubmitted: handleSubmitted
			}, formKey)
		})]
	});
}
function normalizeResourceType(value) {
	return value?.trim().toLowerCase() ?? "";
}
function getNotificationNavigateTarget(notification) {
	const projectId = notification.projectId?.trim();
	if (!projectId) return null;
	const resourceType = normalizeResourceType(notification.resourceType);
	const resourceId = notification.resourceId?.trim();
	const parentResourceType = normalizeResourceType(notification.parentResourceType);
	const parentResourceId = notification.parentResourceId?.trim();
	if (resourceType === "deployments" && resourceId && parentResourceId) {
		if (parentResourceType === "functions") return {
			to: "/projects/$projectId/functions/$functionId/deployments/$deploymentId",
			params: {
				projectId,
				functionId: parentResourceId,
				deploymentId: resourceId
			}
		};
		if (parentResourceType === "sites") return {
			to: "/projects/$projectId/sites/$siteId/deployments/$deploymentId",
			params: {
				projectId,
				siteId: parentResourceId,
				deploymentId: resourceId
			}
		};
	}
	if (resourceType === "functions" && resourceId) return {
		to: "/projects/$projectId/functions/$functionId",
		params: {
			projectId,
			functionId: resourceId
		}
	};
	if (resourceType === "sites" && resourceId) return {
		to: "/projects/$projectId/sites/$siteId",
		params: {
			projectId,
			siteId: resourceId
		}
	};
	if ((resourceType === "buckets" || resourceType === "bucket") && resourceId) return {
		to: "/projects/$projectId/storage/$bucketId",
		params: {
			projectId,
			bucketId: resourceId
		}
	};
	if (resourceType === "messages" && resourceId) return {
		to: "/projects/$projectId/messaging/$messageId",
		params: {
			projectId,
			messageId: resourceId
		}
	};
	if (resourceType === "executions" && parentResourceId) return {
		to: "/projects/$projectId/functions/$functionId",
		params: {
			projectId,
			functionId: parentResourceId
		}
	};
	if ((resourceType === "databases" || resourceType === "tables" || resourceType === "collections") && resourceId) return {
		to: "/projects/$projectId/databases",
		params: { projectId }
	};
	return {
		to: "/projects/$projectId",
		params: { projectId }
	};
}
function notificationTypeBadgeVariant(type) {
	switch (type.trim().toLowerCase()) {
		case "warning": return "warning";
		case "error": return "error";
		default: return "info";
	}
}
function NotificationTypeIcon({ type, className }) {
	const normalized = type.trim().toLowerCase();
	if (normalized === "error" || normalized === "warning") return /* @__PURE__ */ jsx(AlertCircle, {
		className,
		"aria-hidden": true
	});
	return /* @__PURE__ */ jsx(Info, {
		className,
		"aria-hidden": true
	});
}
function NotificationRow({ notification, onOpen }) {
	const t = useT();
	const isUnread = !notification.read;
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => onOpen(notification),
		className: cn("flex w-full gap-3 px-4 py-3 text-start transition-colors hover:bg-accent/60", isUnread && "bg-muted/30"),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background", isUnread && "border-primary/20 bg-primary/5 text-primary"),
			children: /* @__PURE__ */ jsx(NotificationTypeIcon, {
				type: notification.type,
				className: "h-4 w-4"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1 space-y-1.5 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: cn("min-w-0 flex-1 break-words text-[13px] leading-snug text-foreground", isUnread && "font-semibold"),
						children: notification.title
					}), /* @__PURE__ */ jsx(Badge, {
						variant: notificationTypeBadgeVariant(notification.type),
						className: "text-[10px] shrink-0 capitalize",
						children: notification.type
					})]
				}),
				notification.body?.trim() ? /* @__PURE__ */ jsx("p", {
					className: "line-clamp-2 break-words text-[12px] leading-relaxed text-muted-foreground",
					children: notification.body
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ jsx(DateTooltip, {
						date: notification.$createdAt,
						live: true,
						className: "text-[11px] text-muted-foreground"
					}), isUnread ? /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ jsx("span", {
							className: "size-1.5 rounded-full bg-primary",
							"aria-hidden": true
						}), t("Unread")]
					}) : null]
				})
			]
		})]
	});
}
function NotificationCenterPopover() {
	const t = useT();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const { notifications, unreadCount, isLoading, isFetching, refetch } = useConsoleNotifications(true);
	const updateReadMutation = useUpdateConsoleNotificationRead();
	const markAllReadMutation = useMarkAllConsoleNotificationsRead();
	const handleOpenChange = (nextOpen) => {
		setOpen(nextOpen);
		if (nextOpen) refetch();
	};
	const handleNotificationOpen = async (notification) => {
		if (!notification.read) try {
			await updateReadMutation.mutateAsync({
				notificationId: notification.$id,
				read: true
			});
		} catch {}
		const target = getNotificationNavigateTarget(notification);
		if (target) {
			setOpen(false);
			navigate({
				to: target.to,
				params: target.params
			});
		}
	};
	const handleMarkAllRead = async () => {
		if (unreadCount === 0 || markAllReadMutation.isPending) return;
		await markAllReadMutation.mutateAsync(notifications);
	};
	const unreadBadgeLabel = unreadCount > 9 ? "9+" : unreadCount > 0 ? String(unreadCount) : null;
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					variant: "ghost",
					size: "icon",
					className: "relative h-9 w-9 text-muted-foreground hover:bg-accent hover:text-foreground",
					"aria-label": t("Notifications"),
					...analyticsAttrs("notifications-open"),
					children: [/* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }), unreadBadgeLabel ? /* @__PURE__ */ jsx("span", {
						className: "absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground",
						children: unreadBadgeLabel
					}) : null]
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Notifications") }) })] }), /* @__PURE__ */ jsxs(PopoverContent, {
			align: "end",
			className: "w-[min(24rem,calc(100vw-2rem))] overflow-hidden p-0",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[14px] font-semibold text-foreground",
							children: t("Notifications")
						}), unreadCount > 0 ? /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: unreadCount === 1 ? t("1 unread notification") : /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx("span", {
									dir: "ltr",
									children: unreadCount
								}),
								" ",
								t("unread notifications")
							] })
						}) : /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Stay updated on your projects and resources.")
						})]
					}), unreadCount > 0 ? /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-8 shrink-0 gap-1.5 text-[12px]",
						disabled: markAllReadMutation.isPending,
						onClick: () => void handleMarkAllRead(),
						children: [markAllReadMutation.isPending ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(CheckCheck, { className: "h-3.5 w-3.5" }), t("Mark all as read")]
					}) : null]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "max-h-[min(24rem,60dvh)] overflow-x-hidden overflow-y-auto overscroll-contain",
					children: isLoading && notifications.length === 0 ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 px-4 py-10 text-[13px] text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), t("Loading notifications...")]
					}) : notifications.length === 0 ? /* @__PURE__ */ jsxs("div", {
						className: "px-4 py-10 text-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground",
								children: /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: t("No notifications yet")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] text-muted-foreground",
								children: t("We will notify you here when something needs your attention.")
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						className: "divide-y divide-border",
						children: notifications.map((notification) => /* @__PURE__ */ jsx(NotificationRow, {
							notification,
							onOpen: handleNotificationOpen
						}, notification.$id))
					})
				}),
				isFetching && notifications.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "border-t border-border px-4 py-2 text-[11px] text-muted-foreground",
					children: t("Refreshing...")
				}) : null
			]
		})]
	});
}
var CONSOLE_USERS_SEARCH_LIMIT = 25;
async function fetchConsoleUsersSearch(search) {
	const trimmed = search?.trim() ?? "";
	const orderQuery = Query.orderDesc(USERS_DEFAULT_SORT_BY);
	const queries = [
		...buildAttributePrefixSearchQueries([
			"name",
			"email",
			"phone",
			"$id"
		], trimmed),
		orderQuery,
		Query.limit(CONSOLE_USERS_SEARCH_LIMIT),
		Query.offset(0)
	];
	return sdk.forConsole.users.list({ queries });
}
function consoleUsersImpersonationSearchQueryOptions(debouncedSearch) {
	return queryOptions({
		queryKey: [
			"console",
			"users",
			"impersonation-search",
			debouncedSearch.trim()
		],
		queryFn: () => fetchConsoleUsersSearch(debouncedSearch),
		staleTime: 30 * 1e3,
		retry: false
	});
}
function recentImpersonationUserToModel(r) {
	return {
		$id: r.$id,
		name: r.name ?? "",
		email: r.email ?? ""
	};
}
function ImpersonateConsoleUserPopover() {
	const t = useT();
	const { account: accountRaw } = useAuth();
	const account = accountRaw;
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const showTrigger = account?.impersonator === true || !!account?.impersonatorUserId;
	const isImpersonating = !!account?.impersonatorUserId;
	const { data, isFetching } = useQuery({
		...consoleUsersImpersonationSearchQueryOptions(debouncedSearch),
		enabled: open,
		placeholderData: keepPreviousData
	});
	const users = data?.users ?? [];
	const operatorSnapshot = readConsoleImpersonationOperatorSnapshot();
	const operatorId = isImpersonating ? operatorSnapshot?.$id : account?.$id;
	const recentImpersonationUsers = useMemo(() => {
		if (!operatorId?.trim()) return [];
		if (isImpersonating) return readRecentImpersonationSessionList(operatorId);
		return mergeRecentImpersonationLists(parseRecentImpersonationUsers(account?.prefs, operatorId), readRecentImpersonationSessionList(operatorId));
	}, [
		account,
		isImpersonating,
		operatorId
	]);
	const showRecentSection = !debouncedSearch.trim() && recentImpersonationUsers.length > 0;
	const persistRecentImpersonation = (user) => {
		if (!operatorId?.trim()) return;
		writeRecentImpersonationSessionList(operatorId, appendRecentImpersonationUser(isImpersonating ? readRecentImpersonationSessionList(operatorId) : mergeRecentImpersonationLists(parseRecentImpersonationUsers(account?.prefs, operatorId), readRecentImpersonationSessionList(operatorId)), user));
	};
	const handleSelectUser = (user) => {
		const targetId = user?.$id;
		if (!targetId?.trim()) {
			toast.error(t("This user has no valid ID; pick another user."));
			return;
		}
		if (user.$id === account?.$id) {
			toast.error(t("That user is already the active Console session."));
			return;
		}
		if (operatorId && user.$id === operatorId) {
			toast.error(t("You cannot impersonate your own operator account."));
			return;
		}
		let operator;
		if (isImpersonating) {
			operator = readConsoleImpersonationOperatorSnapshot();
			if (!operator) {
				toast.error(t("Operator context was lost. Stop impersonating, then start again."));
				return;
			}
		} else if (account) operator = {
			$id: account.$id,
			name: account.name ?? "",
			email: account.email ?? ""
		};
		if (!operator) return;
		try {
			persistRecentImpersonation(user);
			applyConsoleImpersonateUserId(targetId);
			persistConsoleImpersonationSession(targetId, operator, { skipNotify: true });
			hardNavigateToAccountAfterImpersonation();
		} catch (e) {
			console.error(e);
			const message = e instanceof AppwriteException ? e.message : e instanceof Error ? e.message : t("Could not start impersonation.");
			toast.error(message);
		}
	};
	const handleStop = async () => {
		const opId = readConsoleImpersonationOperatorSnapshot()?.$id;
		clearConsoleImpersonateUser();
		clearConsoleImpersonationSession({ skipNotify: true });
		setOpen(false);
		if (opId) flushRecentImpersonationUsersToAccountPrefs(opId).catch((e) => {
			console.error(e);
		});
		hardNavigateToAccountAfterImpersonation();
	};
	if (!showTrigger) return null;
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("span", {
				className: "hidden h-9 w-9 shrink-0 @[900px]:inline-flex",
				children: /* @__PURE__ */ jsx(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						"aria-label": isImpersonating ? t("Impersonating") : t("Impersonate"),
						children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
					})
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "bottom",
			children: /* @__PURE__ */ jsx("p", { children: isImpersonating ? t("Impersonating") : t("Impersonate") })
		})] }), /* @__PURE__ */ jsxs(PopoverContent, {
			align: "end",
			className: "w-[min(100vw-2rem,380px)] p-0",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("Impersonate user")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1.5 text-[12px] leading-relaxed text-muted-foreground",
						children: t("Matches the start of name, email, phone, or user ID. The Console runs with the selected account's access until you end impersonation.")
					})]
				}),
				isImpersonating && /* @__PURE__ */ jsxs("div", {
					className: "border-b border-border bg-muted/30 px-4 py-3",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-[12px] text-muted-foreground",
						children: [
							t("Active session:"),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: account?.name || account?.email || account?.$id
							})
						]
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "mt-2 h-8 text-[12px]",
						onClick: () => void handleStop(),
						children: t("Exit impersonation")
					})]
				}),
				/* @__PURE__ */ jsxs(Command$1, {
					shouldFilter: false,
					className: "overflow-visible",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative border-b border-border",
						children: [/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t("Name, email, phone, or user ID…"),
							value: search,
							onValueChange: setSearch,
							className: cn("h-9 text-[13px]", isFetching && "pe-9")
						}), /* @__PURE__ */ jsx("div", {
							className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity", isFetching ? "opacity-100" : "opacity-0"),
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
						})]
					}), /* @__PURE__ */ jsxs(CommandList, {
						className: "min-h-[180px] max-h-[280px]",
						children: [
							showRecentSection && /* @__PURE__ */ jsx(CommandGroup, {
								heading: t("Recent"),
								children: recentImpersonationUsers.map((recent) => {
									const disabled = recent.$id === account?.$id || !!operatorId && recent.$id === operatorId;
									const label = recent.name || recent.email || recent.$id;
									return /* @__PURE__ */ jsxs(CommandItem, {
										value: [
											recent.$id,
											recent.name,
											recent.email,
											"recent"
										].filter(Boolean).join(" "),
										disabled,
										onSelect: () => handleSelectUser(recentImpersonationUserToModel(recent)),
										className: "cursor-pointer gap-2 px-3 py-2.5 aria-disabled:opacity-50",
										children: [/* @__PURE__ */ jsx(InitialsAvatar, {
											name: label,
											size: "sm",
											className: "shrink-0"
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0 flex-1 text-start",
											children: [
												/* @__PURE__ */ jsx("p", {
													className: "truncate text-[13px] font-medium text-foreground",
													children: recent.name || "-"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "truncate text-[12px] text-muted-foreground",
													children: recent.email || "-"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "mt-1",
													onClick: (e) => e.stopPropagation(),
													onPointerDown: (e) => e.stopPropagation(),
													children: /* @__PURE__ */ jsx(CopyableId, {
														id: recent.$id,
														size: "xs",
														maxWidth: 200,
														className: "max-w-full"
													})
												})
											]
										})]
									}, `recent-${recent.$id}`);
								})
							}),
							showRecentSection && users.length > 0 && /* @__PURE__ */ jsx(CommandSeparator, { className: "mx-0" }),
							/* @__PURE__ */ jsx(CommandEmpty, {
								className: "p-0",
								children: isFetching ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-center px-6 py-10",
									children: [/* @__PURE__ */ jsx(Loader2, {
										className: "h-5 w-5 animate-spin text-muted-foreground",
										"aria-hidden": true
									}), /* @__PURE__ */ jsx("span", {
										className: "sr-only",
										children: t("Loading users")
									})]
								}) : /* @__PURE__ */ jsx(EmptyState, {
									icon: Users$1,
									iconSize: "sm",
									variant: "default",
									className: "px-6 py-8",
									title: debouncedSearch.trim() ? t("No matching users") : t("No users to show"),
									description: debouncedSearch.trim() ? t("Try a different prefix for name, email, phone, or user ID.") : t("Enter text that matches the start of a name, email, phone, or user ID.")
								})
							}),
							/* @__PURE__ */ jsx(CommandGroup, { children: users.map((user) => {
								const disabled = user.$id === account?.$id || !!operatorId && user.$id === operatorId;
								const label = user.name || user.email || user.$id;
								return /* @__PURE__ */ jsxs(CommandItem, {
									value: [
										user.$id,
										user.name,
										user.email
									].filter(Boolean).join(" "),
									disabled,
									onSelect: () => handleSelectUser(user),
									className: "cursor-pointer gap-2 px-3 py-2.5 aria-disabled:opacity-50",
									children: [/* @__PURE__ */ jsx(InitialsAvatar, {
										name: label,
										size: "sm",
										className: "shrink-0"
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex-1 text-start",
										children: [
											/* @__PURE__ */ jsx("p", {
												className: "truncate text-[13px] font-medium text-foreground",
												children: user.name || "-"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "truncate text-[12px] text-muted-foreground",
												children: user.email || "-"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-1",
												onClick: (e) => e.stopPropagation(),
												onPointerDown: (e) => e.stopPropagation(),
												children: /* @__PURE__ */ jsx(CopyableId, {
													id: user.$id,
													size: "xs",
													maxWidth: 200,
													className: "max-w-full"
												})
											})
										]
									})]
								}, user.$id);
							}) })
						]
					})]
				})
			]
		})]
	});
}
var logoCloudLockedUntilPointerLeave = false;
var logoCloudLockListeners = /* @__PURE__ */ new Set();
function emitLogoCloudLockChange() {
	logoCloudLockListeners.forEach((listener) => listener());
}
function setLogoCloudLockedUntilPointerLeave(next) {
	if (logoCloudLockedUntilPointerLeave === next) return;
	logoCloudLockedUntilPointerLeave = next;
	emitLogoCloudLockChange();
}
function subscribeLogoCloudLock(listener) {
	logoCloudLockListeners.add(listener);
	return () => logoCloudLockListeners.delete(listener);
}
function getLogoCloudLockSnapshot() {
	return logoCloudLockedUntilPointerLeave;
}
function getLogoCloudLockServerSnapshot() {
	return false;
}
function FilledAppwriteMark({ className }) {
	return /* @__PURE__ */ jsx("img", {
		src: "/logo-icon.png",
		alt: "Logo",
		className: cn("h-6 w-6 shrink-0 object-contain", className)
	});
}
function ConsoleHeaderLogo({ className }) {
	const { isCloud } = useConsoleProfile();
	const isLegacyTheme$1 = useIsLegacyTheme();
	const rootRef = useRef(null);
	const cloudLockedUntilLeave = useSyncExternalStore(subscribeLogoCloudLock, getLogoCloudLockSnapshot, getLogoCloudLockServerSnapshot);
	useEffect(() => {
		if (!isCloud) setLogoCloudLockedUntilPointerLeave(false);
	}, [isCloud]);
	useLayoutEffect(() => {
		if (typeof window === "undefined" || !isCloud) return;
		const parent = rootRef.current?.parentElement;
		if (!parent) return;
		const lockCloud = () => setLogoCloudLockedUntilPointerLeave(true);
		const unlockCloud = () => setLogoCloudLockedUntilPointerLeave(false);
		parent.addEventListener("pointerdown", lockCloud);
		parent.addEventListener("click", lockCloud);
		parent.addEventListener("pointerleave", unlockCloud);
		parent.addEventListener("pointercancel", unlockCloud);
		return () => {
			parent.removeEventListener("pointerdown", lockCloud);
			parent.removeEventListener("click", lockCloud);
			parent.removeEventListener("pointerleave", unlockCloud);
			parent.removeEventListener("pointercancel", unlockCloud);
		};
	}, [isCloud]);
	if (isLegacyTheme$1) return /* @__PURE__ */ jsx(LegacyAppwriteIcon, { className });
	if (!isCloud) return /* @__PURE__ */ jsx("div", {
		className: cn("relative h-6 w-6 shrink-0", className),
		children: /* @__PURE__ */ jsx(FilledAppwriteMark, {})
	});
	return /* @__PURE__ */ jsx("div", {
		ref: rootRef,
		className: cn("relative h-6 w-6 shrink-0 [perspective:88px]", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]", cloudLockedUntilLeave ? "[transform:rotateY(180deg)] transition-none" : cn("[transform:rotateY(0deg)] transition-transform duration-300 ease-out", "group-hover:[transform:rotateY(180deg)]", "motion-reduce:transition-none motion-reduce:group-hover:[transform:rotateY(0deg)]")),
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center [backface-visibility:hidden]",
				style: { transform: "rotateY(0deg)" },
				children: /* @__PURE__ */ jsx(FilledAppwriteMark, {})
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center text-[var(--brand-cta)] [backface-visibility:hidden]",
				style: { transform: "rotateY(180deg)" },
				children: /* @__PURE__ */ jsx(CloudMarkIcon, {})
			})]
		})
	});
}
function useChangelogNavBadge() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const update = () => setVisible(isChangelogNavBadgeVisible(pathname));
		const onStorage = (event) => {
			if (event.key === "console.changelogSeenCount" || event.key === null) update();
		};
		update();
		window.addEventListener(CHANGELOG_SEEN_UPDATED_EVENT, update);
		window.addEventListener("storage", onStorage);
		return () => {
			window.removeEventListener(CHANGELOG_SEEN_UPDATED_EVENT, update);
			window.removeEventListener("storage", onStorage);
		};
	}, [pathname]);
	return visible;
}
const PRODUCT_LAUNCH_DATES = {
	databases: "2026-07-01",
	domains: "2026-07-01",
	firewall: "2026-07-01",
	agent: "2026-08-04"
};
var DOCS_PRODUCT_NEW_HREFS = {
	"/docs/products/databases": "databases",
	"/docs/products/domains": "domains",
	"/docs/products/firewall": "firewall",
	"/docs/products/agent": "agent"
};
function parseUtcDate(isoDate) {
	const [year, month, day] = isoDate.split("-").map(Number);
	return new Date(Date.UTC(year, (month ?? 1) - 1, day ?? 1));
}
function addUtcMonths(date, months) {
	const result = new Date(date.getTime());
	result.setUTCMonth(result.getUTCMonth() + months);
	return result;
}
function isProductNavItemNew(id, now = /* @__PURE__ */ new Date()) {
	const launchedAt = PRODUCT_LAUNCH_DATES[id];
	if (!launchedAt) return false;
	const launch = parseUtcDate(launchedAt);
	if (Number.isNaN(launch.getTime())) return false;
	return now.getTime() < addUtcMonths(launch, 3).getTime();
}
function isDocsProductNavNew(href, now = /* @__PURE__ */ new Date()) {
	const productId = DOCS_PRODUCT_NEW_HREFS[href.replace(/\/+$/, "") || href];
	return productId ? isProductNavItemNew(productId, now) : false;
}
function ProductNewBadge({ label, className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-flex h-4 shrink-0 items-center rounded-full bg-[var(--brand-cta)]/10 px-1.5 text-[10px] font-medium leading-none text-[var(--brand-cta)]", className),
		children: label
	});
}
var NAV_TRIGGER_CLASS = "inline-flex h-9 cursor-pointer items-center gap-1 rounded-md px-2.5 text-start text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground";
function useVisibleMarketingProductNavCategories() {
	const { features } = useConsoleProfile();
	return useMemo(() => MARKETING_PRODUCT_NAV_CATEGORIES.map((category) => ({
		...category,
		productIds: category.productIds.filter((id) => {
			if (id === "firewall") return features.firewall;
			if (id === "domains") return features.domains;
			if (id === "agent") return features.agent;
			return true;
		})
	})).filter((category) => category.productIds.length > 0), [
		features.agent,
		features.domains,
		features.firewall
	]);
}
function getLocalizedCategoryLabel(categoryId, categoriesCopy) {
	if (categoryId === "build") return categoriesCopy.build;
	if (categoryId === "deploy") return categoriesCopy.deploy;
	return categoriesCopy.protect;
}
function getLocalizedProductNavItemName(navItemId, fallbackName, productNamesCopy, navigationItemsCopy) {
	if (navItemId === "auth") return productNamesCopy.auth;
	if (navItemId === "databases") return productNamesCopy.databases;
	if (navItemId === "storage") return productNamesCopy.storage;
	if (navItemId === "functions") return productNamesCopy.functions;
	if (navItemId === "messaging") return productNamesCopy.messaging;
	if (navItemId === "sites") return productNamesCopy.sites;
	if (navItemId === "realtime") return navigationItemsCopy.realtimeName;
	if (navItemId === "agent") return navigationItemsCopy.agentName;
	if (navItemId === "domains") return navigationItemsCopy.domainsName;
	if (navItemId === "firewall") return navigationItemsCopy.firewallName;
	if (navItemId === "advisor") return navigationItemsCopy.advisorName;
	return fallbackName;
}
function getLocalizedProductNavItemTagline(navItemId, fallbackTagline, navigationItemsCopy) {
	if (navItemId === "auth") return navigationItemsCopy.authTagline;
	if (navItemId === "databases") return navigationItemsCopy.databasesTagline;
	if (navItemId === "storage") return navigationItemsCopy.storageTagline;
	if (navItemId === "functions") return navigationItemsCopy.functionsTagline;
	if (navItemId === "messaging") return navigationItemsCopy.messagingTagline;
	if (navItemId === "sites") return navigationItemsCopy.sitesTagline;
	if (navItemId === "realtime") return navigationItemsCopy.realtimeTagline;
	if (navItemId === "agent") return navigationItemsCopy.agentTagline;
	if (navItemId === "domains") return navigationItemsCopy.domainsTagline;
	if (navItemId === "firewall") return navigationItemsCopy.firewallTagline;
	if (navItemId === "advisor") return navigationItemsCopy.advisorTagline;
	return fallbackTagline;
}
function getActiveNavItemId(pathname) {
	const productMatch = pathname.match(/^\/products\/([^/]+)/);
	if (productMatch?.[1] && isProductId(productMatch[1])) return productMatch[1];
	if (pathname === "/domains" || pathname.startsWith("/domains/")) return "domains";
	let bestMatch;
	let bestLength = 0;
	for (const item of Object.values(PRODUCT_NAV_REGISTRY)) {
		if (!item.href.startsWith("/docs")) continue;
		if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
			if (item.href.length > bestLength) {
				bestLength = item.href.length;
				bestMatch = item.id;
			}
		}
	}
	return bestMatch;
}
function ProductNavLink({ navItemId, isActive, onNavigate, productNamesCopy, navigationItemsCopy, newLabel, variant = "default", closeSheet = false }) {
	const item = PRODUCT_NAV_REGISTRY[navItemId];
	const Icon$1 = item.icon;
	const localizedName = getLocalizedProductNavItemName(navItemId, item.name, productNamesCopy, navigationItemsCopy);
	const localizedTagline = getLocalizedProductNavItemTagline(navItemId, item.tagline, navigationItemsCopy);
	const isDense = variant === "dense";
	const isCompact = variant === "compact";
	const productAnalytics = getMarketingProductAnalyticsAction(navItemId);
	const isNew = isProductNavItemNew(navItemId);
	const link = /* @__PURE__ */ jsxs(Link, {
		to: item.href,
		onClick: onNavigate,
		"aria-current": isActive ? "page" : void 0,
		...productAnalytics ? analyticsAttrs(productAnalytics) : {},
		className: cn("group block cursor-pointer rounded-lg border border-transparent text-start transition-colors", isDense && "flex items-center gap-2.5 px-2 py-2 hover:bg-accent/40", isCompact && "flex items-start gap-3 px-3 py-2.5 hover:bg-accent/40", !isDense && !isCompact && "flex items-start gap-3 p-3 hover:border-border/80 hover:bg-accent/40", isActive && (isDense || isCompact ? "bg-muted/30" : "border-border bg-muted/30")),
		children: [
			/* @__PURE__ */ jsx("span", {
				className: cn("flex shrink-0 items-center justify-center rounded-md border border-border bg-muted/40", isDense ? "size-7" : "size-8"),
				children: /* @__PURE__ */ jsx(Icon$1, {
					className: cn("text-muted-foreground", isDense ? "size-3.5" : "size-4"),
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ jsxs("span", {
				className: cn("min-w-0", isDense ? "flex-1" : "flex-1"),
				children: [/* @__PURE__ */ jsxs("span", {
					className: cn("flex items-center gap-1.5 font-semibold text-foreground", isDense ? "text-[12px]" : "text-[13px]"),
					children: [/* @__PURE__ */ jsx("span", {
						className: "min-w-0 truncate",
						children: localizedName
					}), isNew ? /* @__PURE__ */ jsx(ProductNewBadge, { label: newLabel }) : null]
				}), /* @__PURE__ */ jsx("span", {
					className: cn("block text-muted-foreground", isDense ? "mt-0.5 line-clamp-1 text-[11px] leading-4" : isCompact ? "mt-0.5 line-clamp-2 text-[12px] leading-5" : "mt-0.5 text-[12px] leading-5"),
					children: localizedTagline
				})]
			}),
			!isActive && !isDense && !isCompact ? /* @__PURE__ */ jsx(ArrowRight, {
				className: "mt-0.5 size-3.5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground/70 rtl:group-hover:-translate-x-0.5",
				"aria-hidden": true
			}) : null
		]
	});
	if (closeSheet) return /* @__PURE__ */ jsx(SheetClose, {
		asChild: true,
		children: link
	});
	return link;
}
function ProductsNavCategorySection({ label, navItemIds, activeNavItemId, onNavigate, productNamesCopy, navigationItemsCopy, newLabel, variant = "dense", closeSheet = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx("p", {
			className: "px-2 pb-1.5 text-start text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: cn(variant === "dense" ? "grid grid-cols-3 gap-0.5" : "space-y-0.5"),
			children: navItemIds.map((navItemId) => /* @__PURE__ */ jsx(ProductNavLink, {
				navItemId,
				isActive: navItemId === activeNavItemId,
				onNavigate,
				productNamesCopy,
				navigationItemsCopy,
				newLabel,
				variant,
				closeSheet
			}, navItemId))
		})]
	});
}
function DesktopProductsNavPanel({ categories, activeNavItemId, onNavigate, productNamesCopy, navigationCopy }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "text-start",
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/15 px-4 py-2.5",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-start text-[13px] font-semibold text-foreground",
				children: navigationCopy.desktopTitle
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-4 p-3",
			children: categories.map((category) => /* @__PURE__ */ jsx(ProductsNavCategorySection, {
				label: getLocalizedCategoryLabel(category.id, navigationCopy.categories),
				navItemIds: category.productIds,
				activeNavItemId,
				onNavigate,
				productNamesCopy,
				navigationItemsCopy: navigationCopy.items,
				newLabel: navigationCopy.newLabel
			}, category.id))
		})]
	});
}
function MobileProductsNavPanel({ categories, activeNavItemId, productNamesCopy, navigationCopy, closeSheet }) {
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-4 px-1 pb-1 text-start",
		children: categories.map((category) => /* @__PURE__ */ jsx(ProductsNavCategorySection, {
			label: getLocalizedCategoryLabel(category.id, navigationCopy.categories),
			navItemIds: category.productIds,
			activeNavItemId,
			productNamesCopy,
			navigationItemsCopy: navigationCopy.items,
			newLabel: navigationCopy.newLabel,
			variant: "compact",
			closeSheet
		}, category.id))
	});
}
function MarketingProductsNavPanel({ activeNavItemId, onNavigate, compact = false, closeSheet = false }) {
	const { catalog } = useI18n();
	const productNamesCopy = catalog.website.products.productNames;
	const navigationCopy = catalog.website.products.navigation;
	const categories = useVisibleMarketingProductNavCategories();
	if (compact) return /* @__PURE__ */ jsx(MobileProductsNavPanel, {
		categories,
		activeNavItemId,
		productNamesCopy,
		navigationCopy,
		closeSheet
	});
	return /* @__PURE__ */ jsx(DesktopProductsNavPanel, {
		categories,
		activeNavItemId,
		onNavigate,
		productNamesCopy,
		navigationCopy
	});
}
function MarketingProductsNavPopover() {
	const { catalog } = useI18n();
	const navigationCopy = catalog.website.products.navigation;
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const activeNavItemId = useMemo(() => getActiveNavItemId(pathname), [pathname]);
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: NAV_TRIGGER_CLASS,
				"aria-expanded": open,
				"aria-haspopup": "dialog",
				...analyticsAttrs("marketing-nav-products"),
				children: [navigationCopy.triggerLabel, /* @__PURE__ */ jsx(ChevronDown, {
					className: cn("size-3.5 transition-transform duration-200", open && "rotate-180"),
					"aria-hidden": true
				})]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			align: "start",
			sideOffset: 10,
			className: "w-[min(calc(100vw-2rem),720px)] overflow-hidden rounded-xl border border-border bg-popover p-0 text-start shadow-lg md:w-[min(calc(100vw-2rem),840px)] lg:w-[min(calc(100vw-2rem),960px)] xl:w-[min(calc(100vw-2rem),1080px)]",
			children: /* @__PURE__ */ jsx(MarketingProductsNavPanel, {
				activeNavItemId,
				onNavigate: () => setOpen(false)
			})
		})]
	});
}
function MarketingProductsMobileNav() {
	const { catalog } = useI18n();
	const navigationCopy = catalog.website.products.navigation;
	const { pathname } = useLocation();
	const activeNavItemId = useMemo(() => getActiveNavItemId(pathname), [pathname]);
	return /* @__PURE__ */ jsx(Accordion, {
		type: "single",
		collapsible: true,
		className: "px-1",
		children: /* @__PURE__ */ jsxs(AccordionItem, {
			value: "products",
			className: "border-none",
			children: [/* @__PURE__ */ jsx(AccordionTrigger, {
				className: "flex h-10 w-full items-center justify-between rounded-md px-3 py-0 text-start text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground hover:no-underline [&[data-state=open]]:bg-accent [&[data-state=open]]:text-foreground",
				...analyticsAttrs("marketing-nav-products"),
				children: navigationCopy.triggerLabel
			}), /* @__PURE__ */ jsx(AccordionContent, {
				className: "pb-2 pt-1",
				children: /* @__PURE__ */ jsx(MarketingProductsNavPanel, {
					activeNavItemId,
					compact: true,
					closeSheet: true
				})
			})]
		})
	});
}
function isMarketingProductsNavItem(item) {
	return item.menu === "products" || item.label === "Products" || item.label === "מוצרים";
}
function GitHubSolidIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
	});
}
function MarketingGitHubStarsLink({ className, mobile = false }) {
	const t = useT();
	const { link, stat } = MARKETING_SOCIAL_STATS.github;
	const anchor = /* @__PURE__ */ jsxs("a", {
		href: link,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": `${t("Appwrite on GitHub")}, ${stat} ${t("stars")}`,
		...analyticsAttrs("marketing-nav-github"),
		className: cn(mobile ? "flex h-10 w-full items-center justify-start gap-1.5 rounded-md px-3 text-start text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" : "inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-start text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", className),
		children: [/* @__PURE__ */ jsx(GitHubSolidIcon, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: stat })]
	});
	if (mobile) return /* @__PURE__ */ jsx(SheetClose, {
		asChild: true,
		children: anchor
	});
	return anchor;
}
function getDefaultMarketingHeaderNav(copy) {
	return [
		{
			label: copy.products,
			href: "/products/auth",
			menu: "products"
		},
		{
			label: copy.docs,
			href: "/docs"
		},
		{
			label: copy.pricing,
			href: "/pricing"
		},
		{
			label: copy.enterprise,
			href: "/enterprise"
		},
		{
			label: copy.customers,
			href: "/blog/category/customer-stories"
		},
		{
			label: copy.blog,
			href: "/blog"
		},
		{
			label: copy.changelog,
			href: "/changelog"
		}
	];
}
function getMarketingNavAnalyticsAction(href) {
	if (href === "/docs") return "marketing-nav-docs";
	if (href === "/pricing") return "marketing-nav-pricing";
	if (href === "/enterprise") return "marketing-nav-enterprise";
	if (href === "/blog/category/customer-stories") return "marketing-nav-customers";
	if (href === "/blog") return "marketing-nav-blog";
	if (href === "/changelog") return "marketing-nav-changelog";
}
var ACCOUNT_MENU_ITEM_CLASS = "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-start text-[13px] text-muted-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground";
function MarketingNavLabel({ label, showNewIndicator }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "relative",
		children: [label, showNewIndicator ? /* @__PURE__ */ jsx("span", {
			className: "absolute -end-1.5 -top-1 size-1.5 rounded-full bg-[var(--brand-cta)]",
			"aria-hidden": true
		}) : null]
	});
}
function MarketingNavLink({ item, showChangelogBadge, changelogAriaLabel, className }) {
	const navAnalytics = getMarketingNavAnalyticsAction(item.href);
	return /* @__PURE__ */ jsx("a", {
		href: item.href,
		className: cn("link-unstyled inline-flex h-9 items-center gap-1 rounded-md px-2.5 text-start text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", className),
		...navAnalytics ? analyticsAttrs(navAnalytics) : {},
		...item.href === "/changelog" && showChangelogBadge ? { "aria-label": changelogAriaLabel } : {},
		children: /* @__PURE__ */ jsx(MarketingNavLabel, {
			label: item.label,
			showNewIndicator: item.href === "/changelog" && showChangelogBadge
		})
	});
}
function MarketingMobileNavLink({ item, showChangelogBadge, changelogAriaLabel }) {
	const navAnalytics = getMarketingNavAnalyticsAction(item.href);
	return /* @__PURE__ */ jsx(SheetClose, {
		asChild: true,
		children: /* @__PURE__ */ jsx("a", {
			href: item.href,
			className: "link-unstyled flex h-10 w-full items-center justify-start rounded-md px-3 text-start text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
			...navAnalytics ? analyticsAttrs(navAnalytics) : {},
			...item.href === "/changelog" && showChangelogBadge ? { "aria-label": changelogAriaLabel } : {},
			children: /* @__PURE__ */ jsx(MarketingNavLabel, {
				label: item.label,
				showNewIndicator: item.href === "/changelog" && showChangelogBadge
			})
		})
	});
}
function ConsoleHeader({ onMenuClick, className, projectId, onCommandCenterOpen, onCreateOrganization, marketingNav, headerTitleSuffix, centerSearch = false, centerSearchPlaceholder, hideSearch = false }) {
	const { openCommandCenter: contextOpenCommandCenter } = useKeyboardShortcutsContext();
	const { toggleChat, requestCreateAgent } = useAgentChat();
	const queryClient = useQueryClient();
	const { account, signOut, isAuthenticated, isFetched: isAuthFetched } = useAuth();
	const headerAccount = applyScreenshotModeAccount(account ?? getConsoleAccountFromCache(queryClient) ?? getConsoleAccountFromSingleton());
	const showAdminSection = isOperatorAccount(headerAccount);
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams({ strict: false });
	const [copiedField, setCopiedField] = useState(null);
	const projectConnectDialog = useProjectConnectDialog();
	const [themeMounted, setThemeMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		setThemeMounted(true);
	}, []);
	const headerLogoClassName = getConsoleHeaderLogoClass(theme, resolvedTheme, themeMounted);
	const openCommandCenter = onCommandCenterOpen || contextOpenCommandCenter;
	const isOrgOverview = !projectId;
	const { project } = useProject(projectId);
	const orgIdFromRoute = params?.orgId;
	const orgId = projectId ? project?.teamId ?? void 0 : orgIdFromRoute ?? headerAccount?.prefs?.organization;
	const { features } = useConsoleProfile();
	const { catalog } = useI18n();
	const headerCopy = catalog.app.header;
	const resolvedCenterSearchPlaceholder = centerSearchPlaceholder ?? headerCopy.centerSearchPlaceholder;
	const supportsMultiTenancy = features.multiTenancy;
	const overrides = useDebugOverrides();
	const { access } = useOrganizationScopes(orgId ?? project?.teamId);
	const defaultMarketingHeaderNav = getDefaultMarketingHeaderNav(headerCopy.marketingNav);
	const marketingNavItems = (marketingNav === true ? defaultMarketingHeaderNav : marketingNav ? marketingNav : []).map((item) => {
		if (item.href === "/blog") return {
			...item,
			href: getBlogPageUrl("/blog", features.marketing)
		};
		if (item.href === "/blog/category/customer-stories") return {
			...item,
			href: getBlogPageUrl("/blog/category/customer-stories", features.marketing)
		};
		if (item.href === "/docs") return {
			...item,
			href: getMarketingPageUrl("/docs", features.marketing)
		};
		if (item.href === "/changelog") return {
			...item,
			href: getMarketingPageUrl("/changelog", features.marketing)
		};
		return item;
	});
	const showMarketingNav = marketingNavItems.length > 0;
	const showAgent = features.agent && !showMarketingNav;
	const showNotifications = features.notifications && !showMarketingNav;
	const showConnectAndCreate = canShowConnectSection(access, features);
	const canCreateProjectFlag = canCreateProject(access, features);
	const canCreateDatabaseFlag = canCreateDatabase(access, features);
	const canCreateUserFlag = canCreateUser(access, features);
	const canCreateBucketFlag = canCreateBucket(access, features);
	const canCreateFunctionFlag = canCreateFunction(access, features);
	const canCreateSiteFlag = canCreateSite(access, features);
	const canCreateTopicFlag = canWriteTopics(access, features);
	const canCreateFirewallRuleFlag = canWriteRules(access, features);
	const { plan: organizationPlan, isFetched: isPlanFetched } = useOrganizationPlan(orgId);
	const selfService = organizationPlan?.selfService !== false;
	const copyToClipboard = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const displayName = headerAccount?.name || headerAccount?.email || headerCopy.accountMenu.user;
	const userEmail = headerAccount?.email || "";
	const accountId = headerAccount?.$id || "";
	const memberSince = formatDateMonthYear(headerAccount?.registration || headerAccount?.createdAt || headerAccount?.$createdAt);
	const accountStatus = headerAccount ? headerCopy.accountMenu.active : headerCopy.accountMenu.inactive;
	const is2FAEnabled = headerAccount?.mfa === true || headerAccount?.twoFactorAuthenticatorEnabled === true;
	const hasSidebar = !isOrgOverview;
	const isAccountScope = location.pathname.startsWith("/account");
	const isAgentScope = isAgentPagePath(location.pathname);
	const showBackToOrganization = (isAccountScope || isAgentScope) && Boolean(orgId);
	const initHeaderNavCta = features.init && location.pathname === "/init" ? resolveInitHeaderNavCta({ mockCurrentDay: overrides.mockInitCurrentDay }) : null;
	const isOptionalAuth = isOptionalAuthPage(location.pathname);
	const optionalAuthResolved = isAuthFetched || isConsoleAccountQuerySettled(queryClient) || !!headerAccount || getConsoleAccountUnauthenticatedError(getConsoleAccountQueryRevision()) !== void 0;
	const optionalAuthPending = isOptionalAuth && !optionalAuthResolved;
	const showGuestHeader = isOptionalAuth && optionalAuthResolved && !(isAuthenticated || !!headerAccount);
	const authRedirect = resolvePostAuthRedirect(location.pathname);
	const showMarketingLinks = showMarketingNav && !centerSearch;
	const showUpgradeButton = features.billing && orgId && isPlanFetched && selfService && (organizationPlan?.price ?? 0) === 0;
	const showChangelogBadge = useChangelogNavBadge();
	const showOrgDomainsLink = Boolean(orgId && canShowOrgDomainsTab(access, features));
	const docsHref = getMarketingPageUrl("/docs", features.marketing);
	const changelogHref = getMarketingPageUrl("/changelog", features.marketing);
	const homeHref = getMarketingPageUrl("/home", features.marketing);
	const marketingNavLinksExternal = isMarketingPageExternal(features.marketing);
	const showCenterSearch = centerSearch && !hideSearch;
	const showRightSearch = !hideSearch && !centerSearch;
	const { modKey: searchModKey, isMac } = usePlatform();
	const agentToggleShortcutKeys = formatDisplayKeys(AGENT_TOGGLE_SHORTCUT_RAW, isMac);
	const logoColumnWidth = showMarketingNav ? 158 : 60;
	return /* @__PURE__ */ jsx("div", {
		className: "@container w-full overflow-visible",
		children: /* @__PURE__ */ jsxs("header", {
			className: cn("h-14 min-h-14 items-center gap-1 overflow-visible border-b border-border bg-background @[640px]:gap-2", "ps-3 pe-3 @[640px]:ps-4 @[640px]:pe-4 @[1000px]:pe-6", showMarketingLinks ? "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]" : "relative flex flex-wrap justify-between", !showMarketingNav && "@[1024px]:ps-0", className),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn("flex min-w-0 items-center gap-1.5 overflow-visible @[640px]:gap-2", showMarketingLinks ? "justify-self-start" : "flex-1"),
					children: [
						onMenuClick ? /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onMenuClick,
							className: "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[1024px]:hidden",
							"aria-label": headerCopy.actions.openNavigation,
							children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						}) : null,
						showMarketingLinks ? /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[1280px]:hidden",
								"aria-label": headerCopy.actions.openWebsiteNavigation,
								children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsxs(SheetContent, {
							side: "left",
							className: "w-[300px] p-0",
							children: [/* @__PURE__ */ jsx(SheetHeader, {
								className: "border-b border-border px-4 py-4",
								children: /* @__PURE__ */ jsx(SheetTitle, {
									className: "text-start",
									children: /* @__PURE__ */ jsx(AppwriteWordmark, {
										className: "h-5",
										"aria-label": "Appwrite"
									})
								})
							}), /* @__PURE__ */ jsxs("nav", {
								className: "flex flex-col p-2 text-start",
								"aria-label": headerCopy.marketingNav.websiteNavigation,
								children: [marketingNavItems.map((item) => isMarketingProductsNavItem(item) ? /* @__PURE__ */ jsx(MarketingProductsMobileNav, {}, item.label) : /* @__PURE__ */ jsx(MarketingMobileNavLink, {
									item,
									showChangelogBadge,
									changelogAriaLabel: headerCopy.marketingNav.changelogNewUpdatesAria
								}, item.label)), /* @__PURE__ */ jsx(MarketingGitHubStarsLink, { mobile: true })]
							})]
						})] }) : null,
						(() => {
							const linkOrgId = project?.teamId || headerAccount?.prefs?.organization;
							const logoDestination = showMarketingNav ? { to: "/home" } : showGuestHeader && features.init ? { to: "/init" } : linkOrgId ? {
								to: "/organizations/$orgId",
								params: { orgId: linkOrgId }
							} : { to: "/" };
							const logoLink = (childClassName) => /* @__PURE__ */ jsx(Link, {
								...logoDestination,
								"aria-label": "Appwrite",
								className: cn("group inline-flex shrink-0 items-center justify-center rounded-lg transition-transform duration-150 ease-out active:scale-[0.94] active:bg-muted/40 motion-reduce:active:scale-100 motion-reduce:active:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background", showMarketingNav ? "h-10 w-auto px-2" : "size-10", childClassName),
								children: showMarketingNav ? /* @__PURE__ */ jsx(AppwriteWordmark, {
									className: "h-5 transition-transform duration-150 ease-out group-hover:scale-[1.02]",
									"aria-label": "Appwrite"
								}) : /* @__PURE__ */ jsx(ConsoleHeaderLogo, { className: cn("transition-transform duration-150 ease-out group-hover:scale-[1.04]", headerLogoClassName) })
							});
							if (showMarketingNav) return /* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center gap-2",
								children: [logoLink(), headerTitleSuffix ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
									className: "shrink-0 text-[15px] text-muted-foreground/40",
									"aria-hidden": true,
									children: "|"
								}), /* @__PURE__ */ jsx("span", {
									className: "truncate text-[13px] font-medium text-muted-foreground",
									children: headerTitleSuffix
								})] }) : null]
							});
							if (hasSidebar) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
								className: "hidden h-14 shrink-0 items-center justify-center border-e border-border @[1024px]:flex",
								style: { width: logoColumnWidth },
								children: logoLink()
							}), logoLink("@[1024px]:hidden")] });
							return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
								className: "hidden h-14 shrink-0 items-center justify-center @[1024px]:flex",
								style: { width: logoColumnWidth },
								children: logoLink()
							}), logoLink("@[1024px]:hidden")] });
						})(),
						showBackToOrganization && orgId ? /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden h-9 shrink-0 gap-1.5 px-2.5 text-[13px] @[850px]:inline-flex",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/organizations/$orgId",
								params: { orgId },
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), headerCopy.actions.backToOrganization]
							})
						}) : null,
						initHeaderNavCta ? /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden h-9 shrink-0 gap-1.5 px-2.5 text-[13px] @[850px]:inline-flex",
							children: initHeaderNavCta.to ? /* @__PURE__ */ jsxs(Link, {
								to: initHeaderNavCta.to,
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), initHeaderNavCta.label]
							}) : /* @__PURE__ */ jsxs("a", {
								href: initHeaderNavCta.href,
								target: initHeaderNavCta.external ? "_blank" : void 0,
								rel: initHeaderNavCta.external ? "noopener noreferrer" : void 0,
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), initHeaderNavCta.label]
							})
						}) : null,
						!isOrgOverview && /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx("div", {
								className: "hidden min-w-0 overflow-visible @[700px]:block",
								children: /* @__PURE__ */ jsx(ProjectSelector, {
									projectId,
									className: "max-w-full min-w-0",
									onCreateOrganization
								})
							}),
							showConnectAndCreate && projectId && /* @__PURE__ */ jsxs("button", {
								type: "button",
								...analyticsAttrs("connect-project"),
								className: "flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer hidden @[700px]:flex text-[13px]",
								onClick: () => projectConnectDialog?.openConnect(),
								children: [/* @__PURE__ */ jsx(Plug2, { className: "h-4 w-4" }), headerCopy.actions.connect]
							}),
							showConnectAndCreate && /* @__PURE__ */ jsx("div", {
								className: "hidden @[700px]:block shrink-0",
								children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx("button", {
											...analyticsAttrs("header-create-menu"),
											className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer",
											children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
										})
									})
								}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.actions.create }) })] }), /* @__PURE__ */ jsxs(DropdownMenuContent, {
									align: "start",
									className: "w-56",
									children: [
										!canCreateProjectFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("span", {
												className: "block",
												children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
													disabled: true,
													className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
													children: [/* @__PURE__ */ jsx(FolderPlus, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newProject })]
												})
											})
										}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createProjects }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
											...analyticsAttrs("create-project"),
											onClick: () => {
												const orgId$1 = project?.teamId || headerAccount?.prefs?.organization;
												if (orgId$1) navigate({
													to: "/organizations/$orgId",
													params: { orgId: orgId$1 },
													search: { create: "project" }
												});
											},
											className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
											children: [/* @__PURE__ */ jsx(FolderPlus, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newProject })]
										}),
										supportsMultiTenancy && /* @__PURE__ */ jsxs(DropdownMenuItem, {
											...analyticsAttrs("create-organization"),
											onClick: () => {
												openCreateOrganizationFlow(navigate, {
													onCreateOrganization,
													orgId: project?.teamId || headerAccount?.prefs?.organization
												});
											},
											className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
											children: [/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newOrganization })]
										}),
										showAgent ? /* @__PURE__ */ jsxs(DropdownMenuItem, {
											...analyticsAttrs("create-agent"),
											onClick: () => {
												requestCreateAgent();
											},
											className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
											children: [/* @__PURE__ */ jsx(BotMessageSquare, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newAgent })]
										}) : null,
										projectId && /* @__PURE__ */ jsxs(Fragment, { children: [
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuLabel, {
												className: "px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
												children: headerCopy.createMenu.buildSection
											}),
											!canCreateDatabaseFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(Database, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newDatabase })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createDatabases }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-database"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/databases",
														params: { projectId },
														search: { create: "database" }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(Database, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newDatabase })]
											}),
											!canCreateUserFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(Users$1, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newUser })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createUsers }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-user"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/auth",
														params: { projectId },
														search: { create: "user" }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(Users$1, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newUser })]
											}),
											!canCreateBucketFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(Folder, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newBucket })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createBuckets }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-bucket"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/storage/",
														params: { projectId },
														search: { create: "bucket" }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(Folder, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newBucket })]
											}),
											!canCreateFunctionFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newFunction })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createFunctions }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-function"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/functions/create",
														params: { projectId }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newFunction })]
											}),
											!canCreateTopicFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newMessage })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createTopics }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-topic"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/messaging",
														params: { projectId },
														search: { create: "topic" }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newMessage })]
											}),
											/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
											/* @__PURE__ */ jsx(DropdownMenuLabel, {
												className: "px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
												children: headerCopy.createMenu.deploySection
											}),
											!canCreateSiteFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("span", {
													className: "block",
													children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
														disabled: true,
														className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
														children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newSite })]
													})
												})
											}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createSites }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
												...analyticsAttrs("create-site"),
												onClick: () => {
													navigate({
														to: "/projects/$projectId/sites/create",
														params: { projectId }
													});
												},
												className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
												children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newSite })]
											}),
											features.firewall ? /* @__PURE__ */ jsxs(Fragment, { children: [
												/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
												/* @__PURE__ */ jsx(DropdownMenuLabel, {
													className: "px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
													children: headerCopy.createMenu.protectSection
												}),
												!canCreateFirewallRuleFlag ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx("span", {
														className: "block",
														children: /* @__PURE__ */ jsxs(DropdownMenuItem, {
															disabled: true,
															className: "flex cursor-default items-center gap-2 rounded px-2 py-1.5 text-[13px] text-muted-foreground",
															children: [/* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newFirewallRule })]
														})
													})
												}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: headerCopy.permissions.createFirewallRules }) })] }) : /* @__PURE__ */ jsxs(DropdownMenuItem, {
													...analyticsAttrs("create-firewall-rule"),
													onClick: () => {
														navigate({
															to: "/projects/$projectId/firewall/create",
															params: { projectId }
														});
													},
													className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
													children: [/* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.createMenu.newFirewallRule })]
												})
											] }) : null
										] })
									]
								})] })
							})
						] })
					]
				}),
				showMarketingLinks ? /* @__PURE__ */ jsx("div", {
					className: "min-w-0 justify-self-center",
					children: /* @__PURE__ */ jsxs("nav", {
						className: "hidden items-center justify-center gap-1 @[1280px]:flex",
						"aria-label": headerCopy.marketingNav.websiteNavigation,
						children: [marketingNavItems.map((item) => isMarketingProductsNavItem(item) ? /* @__PURE__ */ jsx(MarketingProductsNavPopover, {}, item.label) : /* @__PURE__ */ jsx(MarketingNavLink, {
							item,
							showChangelogBadge,
							changelogAriaLabel: headerCopy.marketingNav.changelogNewUpdatesAria
						}, item.label)), /* @__PURE__ */ jsx(MarketingGitHubStarsLink, {})]
					})
				}) : null,
				showCenterSearch ? /* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute left-1/2 hidden w-full max-w-[25rem] -translate-x-1/2 px-4 @[900px]:block",
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						...analyticsAttrs("command-center"),
						onClick: openCommandCenter,
						className: "pointer-events-auto flex h-9 w-full cursor-pointer items-center gap-2 rounded-md border border-border bg-accent/50 px-3 text-[13px] text-muted-foreground transition-colors hover:border-border hover:bg-accent",
						children: [
							/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 shrink-0" }),
							/* @__PURE__ */ jsx("span", {
								className: "min-w-0 flex-1 truncate text-start",
								children: resolvedCenterSearchPlaceholder
							}),
							searchModKey ? /* @__PURE__ */ jsx("span", {
								className: "ms-auto flex shrink-0 items-center gap-1",
								children: /* @__PURE__ */ jsxs("span", {
									dir: "ltr",
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ jsx("kbd", {
										className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground/85",
										children: searchModKey
									}), /* @__PURE__ */ jsx("kbd", {
										className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground/85",
										children: "K"
									})]
								})
							}) : null
						]
					})
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: cn("flex min-w-0 shrink-0 items-center gap-1 @[640px]:gap-2", showMarketingLinks && "justify-self-end"),
					children: optionalAuthPending ? /* @__PURE__ */ jsxs("div", {
						className: "flex h-9 items-center gap-1 @[640px]:gap-2",
						"aria-hidden": true,
						children: [/* @__PURE__ */ jsx("div", { className: "h-9 w-[4.75rem] shrink-0 rounded-md @[640px]:w-[4.875rem]" }), /* @__PURE__ */ jsx("div", { className: "h-9 w-[4.875rem] shrink-0 rounded-md" })]
					}) : showGuestHeader ? /* @__PURE__ */ jsxs(Fragment, { children: [
						showCenterSearch ? /* @__PURE__ */ jsx("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							"aria-label": resolvedCenterSearchPlaceholder,
							children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
						}) : null,
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/sign-in",
								search: authRedirect ? { redirect: authRedirect } : void 0,
								...analyticsAttrs("auth-sign-in"),
								children: headerCopy.actions.signIn
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							asChild: true,
							size: "sm",
							variant: "brandCta",
							className: "h-9 text-[13px]",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/sign-up",
								search: authRedirect ? { redirect: authRedirect } : void 0,
								...analyticsAttrs("auth-sign-up"),
								children: headerCopy.actions.signUp
							})
						})
					] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
						showRightSearch ? showMarketingLinks ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "hidden h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-border bg-accent/50 px-2.5 text-[13px] text-muted-foreground transition-colors hover:border-border hover:bg-accent @[700px]:flex",
							"aria-label": headerCopy.search.compactPlaceholder,
							children: [/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 shrink-0" }), searchModKey ? /* @__PURE__ */ jsxs("kbd", {
								dir: "ltr",
								className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground/85",
								children: [searchModKey, "K"]
							}) : null]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[700px]:hidden",
							"aria-label": headerCopy.search.compactPlaceholder,
							children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
						})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "hidden h-9 shrink-0 cursor-pointer items-center gap-2 rounded-md border border-border bg-accent/50 px-3 text-[13px] text-muted-foreground transition-colors hover:border-border hover:bg-accent @[700px]:flex",
							children: [
								/* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 shrink-0" }),
								/* @__PURE__ */ jsx("span", {
									className: "hidden @[850px]:inline",
									children: headerCopy.search.compactPlaceholder
								}),
								searchModKey ? /* @__PURE__ */ jsx("span", {
									className: "ms-2 hidden shrink-0 @[850px]:inline",
									children: /* @__PURE__ */ jsxs("kbd", {
										dir: "ltr",
										className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground/85",
										children: [searchModKey, "K"]
									})
								}) : null
							]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[700px]:hidden",
							"aria-label": headerCopy.search.compactPlaceholder,
							children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
						})] }) : showCenterSearch ? /* @__PURE__ */ jsx("button", {
							type: "button",
							...analyticsAttrs("command-center"),
							onClick: openCommandCenter,
							className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[900px]:hidden",
							"aria-label": resolvedCenterSearchPlaceholder,
							children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
						}) : null,
						/* @__PURE__ */ jsx("div", {
							className: cn("hidden shrink-0", showMarketingLinks ? "@[1720px]:flex" : "@[800px]:flex"),
							children: /* @__PURE__ */ jsx(FeedbackPopover, {
								source: "navbar",
								orgId,
								projectId: projectId ?? "",
								billingPlanId: organizationPlan?.$id
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: cn("hidden shrink-0", showMarketingLinks ? "@[1720px]:flex" : "@[900px]:flex"),
							children: /* @__PURE__ */ jsx(SupportPopover, { orgId })
						}),
						showNotifications && /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0",
							children: /* @__PURE__ */ jsx(NotificationCenterPopover, {})
						}),
						/* @__PURE__ */ jsx(ImpersonateConsoleUserPopover, {}),
						showAgent && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": headerCopy.actions.assistant,
								onClick: (event) => {
									event.currentTarget.blur();
									toggleChat();
								},
								...analyticsAttrs("ai-agent-open"),
								className: "hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground @[1000px]:flex",
								children: /* @__PURE__ */ jsx(BotMessageSquare, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsxs("p", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx("span", { children: headerCopy.actions.assistant }), /* @__PURE__ */ jsx("kbd", {
								className: "pointer-events-none inline-flex items-center rounded bg-background/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-background",
								children: /* @__PURE__ */ jsx(ShortcutGlyphs, { keys: agentToggleShortcutKeys })
							})]
						}) })] }),
						showUpgradeButton && /* @__PURE__ */ jsx("div", { className: cn("mx-1 hidden h-5 w-px shrink-0 bg-border @[640px]:mx-2", showMarketingLinks ? "@[1720px]:block" : "@[850px]:block") }),
						showUpgradeButton && /* @__PURE__ */ jsx("div", {
							className: cn("hidden shrink-0 rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background", showMarketingLinks ? "@[1720px]:flex" : "@[850px]:flex"),
							children: /* @__PURE__ */ jsx("div", {
								className: "upgrade-button-wrapper",
								children: /* @__PURE__ */ jsx(Button, {
									asChild: true,
									size: "sm",
									variant: "brandCta",
									className: "h-9 shrink-0 cursor-pointer gap-1.5 px-3 text-[12px] font-semibold relative z-10 rounded-[calc(0.375rem-1px)]",
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/upgrade",
										search: { orgId },
										...analyticsAttrs("upgrade-clicked"),
										children: [/* @__PURE__ */ jsx(ArrowUpCircle, { className: "h-4 w-4" }), headerCopy.actions.upgrade]
									})
								})
							})
						}),
						/* @__PURE__ */ jsx("div", { className: cn("mx-1 hidden h-5 w-px shrink-0 bg-border @[640px]:mx-2", showMarketingLinks ? "@[1280px]:block" : "@[700px]:block") }),
						/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs("button", {
								...analyticsAttrs("user-menu"),
								className: "flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-md px-2 transition-colors hover:bg-accent min-w-0",
								children: [
									/* @__PURE__ */ jsx(InitialsAvatar, {
										name: displayName,
										size: "sm",
										className: "shrink-0"
									}),
									/* @__PURE__ */ jsx("div", {
										className: cn("hidden min-w-0 text-start", showMarketingLinks ? "@[1600px]:block" : "@[800px]:block"),
										children: /* @__PURE__ */ jsx("p", {
											className: "text-[13px] font-medium text-foreground truncate",
											children: displayName
										})
									}),
									/* @__PURE__ */ jsx(ChevronDown, { className: cn("hidden h-3.5 w-3.5 shrink-0 text-muted-foreground", showMarketingLinks ? "@[1600px]:block" : "@[800px]:block") })
								]
							})
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "end",
							className: "w-64 border-border bg-popover p-1",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-3 py-3 text-start",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] font-medium text-foreground",
										children: displayName
									}), userEmail && /* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: userEmail
									})]
								}),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
								/* @__PURE__ */ jsx(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/account",
										className: ACCOUNT_MENU_ITEM_CLASS,
										children: [/* @__PURE__ */ jsx(User, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.account })]
									})
								}),
								/* @__PURE__ */ jsx(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ jsxs(Link, {
										...orgId ? {
											to: "/organizations/$orgId",
											params: { orgId }
										} : { to: "/" },
										className: ACCOUNT_MENU_ITEM_CLASS,
										children: [/* @__PURE__ */ jsx(FolderOpen, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.projects })]
									})
								}),
								showOrgDomainsLink && orgId ? /* @__PURE__ */ jsx(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/organizations/$orgId/domains",
										params: { orgId },
										className: ACCOUNT_MENU_ITEM_CLASS,
										children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.domains })]
									})
								}) : null,
								/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-3 py-2 space-y-4 text-start",
									children: [
										headerAccount?.registration && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground mb-1.5",
											children: headerCopy.accountMenu.memberSince
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[14px] text-foreground",
											children: memberSince
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground mb-1.5",
											children: headerCopy.accountMenu.accountStatus
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ jsx("p", {
												className: "text-[14px] text-foreground",
												children: accountStatus
											})]
										})] }),
										features.accountMfa && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground mb-1.5",
											children: headerCopy.accountMenu.twoFactor
										}), /* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-2",
											children: is2FAEnabled ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5 text-emerald-500" }), /* @__PURE__ */ jsx("p", {
												className: "text-[14px] text-foreground",
												children: headerCopy.accountMenu.enabled
											})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
												className: "text-[14px] text-muted-foreground",
												children: headerCopy.accountMenu.disabled
											})] })
										})] }),
										accountId && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground mb-1.5",
											children: headerCopy.accountMenu.accountId
										}), /* @__PURE__ */ jsx(TooltipProvider, {
											delayDuration: 0,
											children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsxs("button", {
													onClick: () => copyToClipboard(accountId, "accountId"),
													className: "flex cursor-pointer items-center gap-1.5 group",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[14px] text-foreground font-mono",
														children: accountId
													}), copiedField === "accountId" ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })]
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "left",
												children: /* @__PURE__ */ jsx("p", { children: copiedField === "accountId" ? headerCopy.accountMenu.copied : headerCopy.accountMenu.copyAccountId })
											})] })
										})] })
									]
								}),
								/* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
									showMarketingNav ? /* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Link, {
											...orgId ? {
												to: "/organizations/$orgId",
												params: { orgId }
											} : { to: "/" },
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-console"),
											children: [/* @__PURE__ */ jsx(LayoutDashboard, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.console })]
										})
									}) : marketingNavLinksExternal ? /* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs("a", {
											href: homeHref,
											target: "_blank",
											rel: "noopener noreferrer",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-home"),
											children: [/* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.home })]
										})
									}) : /* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/home",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-home"),
											children: [/* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.home })]
										})
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: marketingNavLinksExternal ? /* @__PURE__ */ jsxs("a", {
											href: docsHref,
											target: "_blank",
											rel: "noopener noreferrer",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-docs"),
											children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.docs })]
										}) : /* @__PURE__ */ jsxs(Link, {
											to: "/docs",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-docs"),
											children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.docs })]
										})
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: marketingNavLinksExternal ? /* @__PURE__ */ jsxs("a", {
											href: changelogHref,
											target: "_blank",
											rel: "noopener noreferrer",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...showChangelogBadge ? { "aria-label": headerCopy.marketingNav.changelogNewUpdatesAria } : {},
											children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.changelog })]
										}) : /* @__PURE__ */ jsxs(Link, {
											to: "/changelog",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...showChangelogBadge ? { "aria-label": headerCopy.marketingNav.changelogNewUpdatesAria } : {},
											children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.changelog })]
										})
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs("a", {
											href: "https://cloud.appwrite.io",
											target: "_blank",
											rel: "noopener noreferrer",
											className: ACCOUNT_MENU_ITEM_CLASS,
											...analyticsAttrs("header-old-console"),
											children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.oldConsole })]
										})
									})
								] }),
								showAdminSection && /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
									/* @__PURE__ */ jsx(DropdownMenuLabel, {
										className: "px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
										children: headerCopy.accountMenu.admin
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/cache",
											className: ACCOUNT_MENU_ITEM_CLASS,
											children: [/* @__PURE__ */ jsx(DatabaseZap, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.cache })]
										})
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/blocks",
											className: ACCOUNT_MENU_ITEM_CLASS,
											children: [/* @__PURE__ */ jsx(ShieldAlert, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.blocks })]
										})
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/generator",
											className: ACCOUNT_MENU_ITEM_CLASS,
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.accountMenu.generator })]
										})
									})
								] }),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
								/* @__PURE__ */ jsx(ThemeToggle, {}),
								/* @__PURE__ */ jsx(LanguageToggle, {}),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1 bg-border" }),
								/* @__PURE__ */ jsxs(DropdownMenuItem, {
									onClick: () => signOut(),
									className: ACCOUNT_MENU_ITEM_CLASS,
									children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: headerCopy.actions.signOut })]
								})
							]
						})] })
					] })
				})
			]
		})
	});
}
function useOnboardingProgress(projectId) {
	const { data: snapshot, isPending } = useProjectOnboardingSnapshot(projectId);
	return {
		...useMemo(() => {
			if (!snapshot) return {
				progress: 0,
				completedSteps: 0,
				totalSteps: getAtomicOnboardingStepCount()
			};
			return computeOnboardingProgress(snapshot);
		}, [snapshot]),
		isPending
	};
}
var CARD_BASE = "rounded-md border border-border bg-card/50 overflow-visible";
var EXPANDED_LINK = "block w-full text-start transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
function OnboardingCard({ projectId, collapsed = false }) {
	const { catalog } = useI18n();
	const onboardingCopy = catalog.app.sidebar.onboarding;
	const { progress, completedSteps, totalSteps, isPending } = useOnboardingProgress(projectId);
	const progressAriaLabel = isPending ? onboardingCopy.getStarted : `${onboardingCopy.getStarted} · ${completedSteps} ${onboardingCopy.of} ${totalSteps} ${onboardingCopy.completed}`;
	if (!projectId) return null;
	if (collapsed) {
		const size = 18;
		const strokeWidth = 2;
		const radius = (size - strokeWidth) / 2;
		const circumference = 2 * Math.PI * radius;
		const strokeDashoffset = circumference * (1 - progress / 100);
		return /* @__PURE__ */ jsx("div", {
			className: CARD_BASE,
			children: /* @__PURE__ */ jsxs(Tooltip, {
				delayDuration: 0,
				children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/onboarding",
						params: { projectId },
						className: "flex aspect-square w-full items-center justify-center rounded-md p-2 text-[var(--brand-cta)]",
						"aria-label": progressAriaLabel,
						children: isPending ? /* @__PURE__ */ jsx("span", { className: "h-[18px] w-[18px] rounded-full bg-muted animate-pulse" }) : /* @__PURE__ */ jsxs("svg", {
							width: size,
							height: size,
							viewBox: `0 0 ${size} ${size}`,
							className: "shrink-0 -rotate-90",
							"aria-hidden": true,
							children: [/* @__PURE__ */ jsx("circle", {
								cx: size / 2,
								cy: size / 2,
								r: radius,
								fill: "none",
								stroke: "currentColor",
								strokeWidth,
								className: "opacity-20"
							}), /* @__PURE__ */ jsx("circle", {
								cx: size / 2,
								cy: size / 2,
								r: radius,
								fill: "none",
								stroke: "currentColor",
								strokeWidth,
								strokeLinecap: "round",
								strokeDasharray: circumference,
								strokeDashoffset,
								className: "transition-all duration-300"
							})]
						})
					})
				}), /* @__PURE__ */ jsxs(TooltipContent, {
					side: "right",
					sideOffset: 8,
					children: [/* @__PURE__ */ jsx("p", { children: onboardingCopy.getStarted }), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: isPending ? onboardingCopy.loading : `${completedSteps}/${totalSteps} ${onboardingCopy.completed}`
					})]
				})]
			})
		});
	}
	return /* @__PURE__ */ jsxs(Link, {
		to: "/projects/$projectId/onboarding",
		params: { projectId },
		className: cn(CARD_BASE, EXPANDED_LINK, "block px-3 pt-2 pb-2.5 min-h-[4.75rem] flex flex-col justify-center"),
		"aria-label": progressAriaLabel,
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[13px] font-semibold text-foreground mb-1.5",
			children: onboardingCopy.getStarted
		}), isPending ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground",
					children: onboardingCopy.progress
				}), /* @__PURE__ */ jsx("span", { className: "h-3 w-8 rounded bg-muted animate-pulse" })]
			}), /* @__PURE__ */ jsx("div", { className: "h-1.5 rounded-full bg-muted animate-pulse" })]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground",
					children: onboardingCopy.progress
				}), /* @__PURE__ */ jsxs("span", {
					className: "text-[11px] font-medium text-muted-foreground tabular-nums",
					children: [
						completedSteps,
						"/",
						totalSteps
					]
				})]
			}), /* @__PURE__ */ jsx(Progress, {
				value: progress,
				className: "h-1.5 bg-[color-mix(in_srgb,var(--brand-cta)_20%,transparent)] [&_[data-slot=progress-indicator]]:bg-[var(--brand-cta)] pointer-events-none"
			})]
		})]
	});
}
var getNavItems = (projectId, sidebarCopy) => {
	return {
		overviewItem: {
			id: "overview",
			label: sidebarCopy.items.overview,
			icon: LayoutDashboard,
			path: `/projects/${projectId}`
		},
		navCategories: [
			{
				label: sidebarCopy.sections.connect,
				items: [
					{
						id: "apps",
						label: sidebarCopy.items.apps,
						icon: Plug,
						path: `/projects/${projectId}/apps`
					},
					{
						id: "api-keys",
						label: sidebarCopy.items.apiKeys,
						icon: Key,
						path: `/projects/${projectId}/api-keys`
					},
					{
						id: "explorer",
						label: sidebarCopy.items.explorer,
						icon: ListTree,
						path: `/projects/${projectId}/explorer`
					}
				]
			},
			{
				label: sidebarCopy.sections.build,
				items: [
					{
						id: "auth",
						label: sidebarCopy.items.auth,
						icon: Users$1,
						path: `/projects/${projectId}/auth`
					},
					{
						id: "databases",
						label: sidebarCopy.items.databases,
						icon: Database,
						path: `/projects/${projectId}/databases`
					},
					{
						id: "storage",
						label: sidebarCopy.items.storage,
						icon: Folder,
						path: `/projects/${projectId}/storage/-`
					},
					{
						id: "functions",
						label: sidebarCopy.items.functions,
						icon: Zap,
						path: `/projects/${projectId}/functions`
					},
					{
						id: "messaging",
						label: sidebarCopy.items.messaging,
						icon: MessageSquare,
						path: `/projects/${projectId}/messaging`
					}
				]
			},
			{
				label: sidebarCopy.sections.deploy,
				items: [{
					id: "sites",
					label: sidebarCopy.items.sites,
					icon: Globe,
					path: `/projects/${projectId}/sites`
				}, {
					id: "stores",
					label: sidebarCopy.items.distribution,
					icon: Package,
					path: `/projects/${projectId}/stores`,
					comingSoon: true
				}]
			},
			{
				label: sidebarCopy.sections.observe,
				items: [
					{
						id: "activity",
						label: sidebarCopy.items.activity,
						icon: Activity,
						path: `/projects/${projectId}/activity`
					},
					{
						id: "realtime",
						label: sidebarCopy.items.realtime,
						icon: Radio,
						path: `/projects/${projectId}/realtime`
					},
					{
						id: "logs",
						label: sidebarCopy.items.logs,
						icon: FileText,
						path: `/projects/${projectId}/logs`,
						comingSoon: true
					},
					{
						id: "usage",
						label: sidebarCopy.items.usage,
						icon: BarChart3,
						path: `/projects/${projectId}/usage`
					},
					{
						id: "analytics",
						label: sidebarCopy.items.analytics,
						icon: BarChart2,
						path: `/projects/${projectId}/analytics`,
						comingSoon: true
					},
					{
						id: "errors",
						label: sidebarCopy.items.errors,
						icon: AlertTriangle,
						path: `/projects/${projectId}/errors`,
						comingSoon: true
					}
				]
			},
			{
				label: sidebarCopy.sections.protect,
				items: [{
					id: "firewall",
					label: sidebarCopy.items.firewall,
					icon: Shield,
					path: `/projects/${projectId}/firewall`
				}, {
					id: "advisor",
					label: sidebarCopy.items.advisor,
					icon: ScanSearch,
					path: `/projects/${projectId}/advisor`,
					comingSoon: true
				}]
			}
		],
		settingsItem: {
			id: "settings",
			label: sidebarCopy.items.settings,
			icon: Settings,
			path: `/projects/${projectId}/settings`
		}
	};
};
function ConsoleSidebar({ projectId, activeSection, mobileOpen, onMobileClose, className }) {
	const { account } = useAuth();
	const { catalog } = useI18n();
	const sidebarCopy = catalog.app.sidebar;
	const { collapsed, setCollapsed } = useSidebarCollapsed(account);
	const navRef = useRef(null);
	const { isDebugModeOpen } = useDebugMode();
	const { features } = useConsoleProfile();
	const { project } = useProject(projectId);
	const { access, isLoading: scopesLoading } = useOrganizationScopes(project?.teamId);
	const { overviewItem, settingsItem } = getNavItems(projectId, sidebarCopy);
	const visibleCategories = useMemo(() => {
		const { navCategories: categories } = getNavItems(projectId, sidebarCopy);
		return categories.map((cat) => ({
			...cat,
			items: (isDebugModeOpen ? cat.items : cat.items.filter((item) => !item.comingSoon)).filter((item) => {
				if (item.id === "usage") return features.usageStats && canSeeUsageNav(access, features);
				if (item.id === "activity") return features.activity && canSeeActivityNav(access, features);
				if (item.id === "firewall") return features.firewall && canSeeProjectNavItem(access, features, item.id);
				return canSeeProjectNavItem(access, features, item.id);
			})
		})).filter((cat) => cat.items.length > 0);
	}, [
		projectId,
		isDebugModeOpen,
		features,
		access,
		sidebarCopy
	]);
	const showOverview = canSeeProjects(access, features);
	const showSettings = !features.orgRoles || !scopesLoading && canShowProjectSettings(access, features);
	const showGetStarted = canShowGetStartedSection(access, features);
	const [themeMounted, setThemeMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		setThemeMounted(true);
	}, []);
	const headerLogoClassName = getConsoleHeaderLogoClass(theme, resolvedTheme, themeMounted);
	const handleKeyDown = useCallback((e) => {
		if (!navRef.current) return;
		const items = Array.from(navRef.current.querySelectorAll("[data-nav-item]"));
		const currentIndex = items.findIndex((item) => item === document.activeElement);
		if (e.key === "ArrowDown" || e.key === "j") {
			e.preventDefault();
			items[currentIndex < items.length - 1 ? currentIndex + 1 : 0]?.focus();
		} else if (e.key === "ArrowUp" || e.key === "k") {
			e.preventDefault();
			items[currentIndex > 0 ? currentIndex - 1 : items.length - 1]?.focus();
		} else if (e.key === "Home") {
			e.preventDefault();
			items[0]?.focus();
		} else if (e.key === "End") {
			e.preventDefault();
			items[items.length - 1]?.focus();
		}
	}, []);
	const handleNavClick = useCallback((_item, isMobile) => {
		if (isMobile) onMobileClose?.();
	}, [onMobileClose]);
	const renderNavItem = (item, isMobile = false) => {
		const isActive = activeSection === item.id;
		const isImagineIcon = item.icon === "imagine";
		const navAnalytics = getSidebarNavAnalyticsAction(item.id);
		const renderIcon = () => {
			if (isImagineIcon) return /* @__PURE__ */ jsx("img", {
				src: "/imagine-icon.svg",
				alt: "",
				className: cn("h-4 w-4 shrink-0", PUBLIC_ICON_MUTED_CLASSES, isMobile && "h-[18px] w-[18px]")
			});
			const Icon$1 = item.icon;
			return /* @__PURE__ */ jsx(Icon$1, { className: cn("h-4 w-4 shrink-0", isMobile && "h-[18px] w-[18px]") });
		};
		if (item.comingSoon) {
			const Icon$1 = item.icon;
			const buttonContent = /* @__PURE__ */ jsxs("span", {
				className: cn(secondarySidebarNavLinkClassName(false, "cursor-not-allowed text-muted-foreground/50"), collapsed && !isMobile ? SECONDARY_SIDEBAR_NAV_LINK_COLLAPSED_CLASS : SECONDARY_SIDEBAR_NAV_LINK_GRID_TRAILING_CLASS, isMobile && "gap-x-3 px-3 py-2.5 text-[14px]"),
				children: [
					/* @__PURE__ */ jsx(Icon$1, { className: cn("h-4 w-4 shrink-0", isMobile && "h-[18px] w-[18px]") }),
					(!collapsed || isMobile) && /* @__PURE__ */ jsx("span", {
						className: "min-w-0 flex-1 truncate text-start",
						children: item.label
					}),
					(!collapsed || isMobile) && /* @__PURE__ */ jsx("span", {
						className: "shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
						children: sidebarCopy.badges.soon
					})
				]
			}, item.id);
			if (collapsed && !isMobile) return /* @__PURE__ */ jsxs(Tooltip, {
				delayDuration: 0,
				children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: buttonContent
				}), /* @__PURE__ */ jsxs(TooltipContent, {
					side: "right",
					sideOffset: 8,
					children: [/* @__PURE__ */ jsx("p", { children: item.label }), /* @__PURE__ */ jsx("span", {
						className: "ms-1 text-muted-foreground",
						children: sidebarCopy.accessibility.comingSoonSuffix
					})]
				})]
			}, item.id);
			return buttonContent;
		}
		const linkContent = /* @__PURE__ */ jsxs(Link, {
			to: item.path,
			"data-nav-item": true,
			...navAnalytics ? analyticsAttrs(navAnalytics) : {},
			onClick: () => handleNavClick(item, isMobile),
			className: cn(secondarySidebarNavLinkClassName(isActive, "transition-colors duration-150"), collapsed && !isMobile ? SECONDARY_SIDEBAR_NAV_LINK_COLLAPSED_CLASS : SECONDARY_SIDEBAR_NAV_LINK_GRID_CLASS, isMobile && "gap-x-3 px-3 py-2.5 text-[14px]"),
			children: [renderIcon(), (!collapsed || isMobile) && /* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 truncate text-start",
				children: item.label
			})]
		}, item.id);
		if (collapsed && !isMobile) return /* @__PURE__ */ jsxs(Tooltip, {
			delayDuration: 0,
			children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: linkContent
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "right",
				sideOffset: 8,
				children: /* @__PURE__ */ jsx("p", { children: item.label })
			})]
		}, item.id);
		return linkContent;
	};
	const renderCategory = (category, isMobile = false) => /* @__PURE__ */ jsxs("div", {
		className: "space-y-0.5",
		children: [(!collapsed || isMobile) && /* @__PURE__ */ jsx("p", {
			className: cn("mb-1.5 px-2.5 text-start text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60", isMobile && "px-3"),
			children: category.label
		}), category.items.map((item) => renderNavItem(item, isMobile))]
	}, category.label);
	return /* @__PURE__ */ jsxs(TooltipProvider, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn("relative z-20 hidden h-full flex-shrink-0 @[1024px]:block", "transition-[width] duration-150 ease-out", collapsed ? "w-[60px]" : "w-[220px]", className),
		children: [/* @__PURE__ */ jsxs("aside", {
			className: cn("console-sidebar flex h-full w-full flex-col overflow-hidden border-e border-border bg-background", "[transform:translateZ(0)] [backface-visibility:hidden]"),
			children: [/* @__PURE__ */ jsxs("nav", {
				ref: navRef,
				className: "flex-1 space-y-6 overflow-y-auto px-3 py-4",
				onKeyDown: handleKeyDown,
				role: "navigation",
				"aria-label": sidebarCopy.accessibility.mainNavigation,
				children: [
					showGetStarted && /* @__PURE__ */ jsx(OnboardingCard, {
						projectId,
						collapsed
					}),
					showOverview && /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: renderNavItem(overviewItem)
					}),
					visibleCategories.map((category) => renderCategory(category))
				]
			}), showSettings && /* @__PURE__ */ jsx("div", {
				className: "flex h-[54px] w-full items-center border-t border-border px-3",
				children: /* @__PURE__ */ jsx("div", {
					className: "w-full",
					children: renderNavItem(settingsItem)
				})
			})]
		}), /* @__PURE__ */ jsx("button", {
			...analyticsAttrs("sidebar-collapse"),
			onClick: () => {
				setCollapsed(!collapsed);
			},
			className: cn("absolute end-0 top-1/2 z-10 flex h-6 w-6 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", SIDEBAR_EDGE_TOGGLE_OVERFLOW),
			"aria-label": collapsed ? sidebarCopy.accessibility.expandSidebar : sidebarCopy.accessibility.collapseSidebar,
			children: /* @__PURE__ */ jsx(ChevronLeft, { className: cn("h-3.5 w-3.5 transition-transform duration-200", collapsed && "rotate-180") })
		})]
	}), /* @__PURE__ */ jsxs("aside", {
		className: cn("console-sidebar fixed start-0 top-0 z-[130] flex h-[100dvh] max-h-[100dvh] w-[280px] flex-col overflow-hidden border-e border-border bg-background", "transition-transform duration-200 ease-out [backface-visibility:hidden]", "@[1024px]:hidden", mobileOpen ? "translate-x-0" : OFFCANVAS_START_CLOSED),
		role: "dialog",
		"aria-modal": "true",
		"aria-label": sidebarCopy.accessibility.mobileNavigation,
		inert: !mobileOpen ? true : void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-14 items-center justify-between px-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2.5",
					"aria-label": "Appwrite",
					children: /* @__PURE__ */ jsx(ConsoleHeaderLogo, { className: cn("h-6 w-6 shrink-0", headerLogoClassName) })
				}), /* @__PURE__ */ jsx("button", {
					onClick: onMobileClose,
					className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					"aria-label": sidebarCopy.accessibility.closeNavigation,
					children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-4 pb-3",
				children: /* @__PURE__ */ jsx(ProjectSelector, {
					projectId,
					isMobile: true
				})
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "flex-1 space-y-6 overflow-y-auto px-4 py-2",
				role: "navigation",
				"aria-label": sidebarCopy.accessibility.mobileNavigation,
				children: [
					showGetStarted && /* @__PURE__ */ jsx(OnboardingCard, {
						projectId,
						collapsed: false
					}),
					showOverview && /* @__PURE__ */ jsx("div", {
						className: "space-y-0.5",
						children: renderNavItem(overviewItem, true)
					}),
					visibleCategories.map((category) => renderCategory(category, true))
				]
			}),
			showSettings && /* @__PURE__ */ jsx("div", {
				className: "border-t border-border px-4 py-3",
				children: renderNavItem(settingsItem, true)
			})
		]
	})] });
}
const FOOTER_CONTAINER = "@container/footer";
const footerCompactPaddingX = "px-4 @[640px]/footer:px-6";
const footerShowSeparatorMd = "hidden @[640px]/footer:block";
const footerShowLegalLinks = "hidden @[640px]/footer:flex";
const footerShowSeparatorLg = "hidden @[1080px]/footer:block";
const footerShowSocialIcons = "hidden @[1080px]/footer:flex";
const footerShowTrustBadge = "hidden @[1080px]/footer:flex items-center gap-1.5";
function docsFooterLink(label, path, marketing) {
	return {
		label,
		href: getDocsPageUrl(path, marketing),
		external: isMarketingPageExternal(marketing)
	};
}
function blogFooterLink(label, slug, marketing) {
	return {
		label,
		href: getBlogPageUrl(`/blog/post/${slug}`, marketing),
		external: isBlogPageExternal(marketing)
	};
}
function productFooterLink(label, path, marketing, productId) {
	return {
		label,
		href: getProductPageUrl(path, marketing),
		external: isProductPageExternal(marketing),
		analyticsAction: productId ? getMarketingProductAnalyticsAction(productId) : void 0,
		isNew: productId ? isProductNavItemNew(productId) : false
	};
}
function marketingProductFooterLink(label, path, marketing, productId) {
	return {
		label,
		href: getMarketingPageUrl(path, marketing),
		external: isMarketingPageExternal(marketing),
		analyticsAction: getMarketingProductAnalyticsAction(productId),
		isNew: isProductNavItemNew(productId)
	};
}
function getExpandedFooterGroups(marketing, footerCopy, features) {
	return [
		{
			title: footerCopy.groups.quickStarts,
			links: [
				docsFooterLink(footerCopy.expanded.quickStarts.web, "/docs/quick-starts/web", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.tanstackStart, "/docs/quick-starts/tanstack-start", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.nextjs, "/docs/quick-starts/nextjs", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.react, "/docs/quick-starts/react", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.vue, "/docs/quick-starts/vue", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.nuxt, "/docs/quick-starts/nuxt", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.svelteKit, "/docs/quick-starts/sveltekit", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.refine, "/docs/quick-starts/refine", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.angular, "/docs/quick-starts/angular", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.reactNative, "/docs/quick-starts/react-native", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.flutter, "/docs/quick-starts/flutter", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.apple, "/docs/quick-starts/apple", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.android, "/docs/quick-starts/android", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.qwik, "/docs/quick-starts/qwik", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.solid, "/docs/quick-starts/solid", marketing),
				docsFooterLink(footerCopy.expanded.quickStarts.astro, "/docs/quick-starts/astro", marketing)
			]
		},
		{
			title: footerCopy.groups.products,
			links: [
				productFooterLink(footerCopy.expanded.products.auth, "/products/auth", marketing, "auth"),
				productFooterLink(footerCopy.expanded.products.databases, "/products/databases", marketing, "databases"),
				productFooterLink(footerCopy.expanded.products.storage, "/products/storage", marketing, "storage"),
				productFooterLink(footerCopy.expanded.products.functions, "/products/functions", marketing, "functions"),
				productFooterLink(footerCopy.expanded.products.messaging, "/products/messaging", marketing, "messaging"),
				{
					...docsFooterLink(footerCopy.expanded.products.realtime, "/docs/apis/realtime", marketing),
					analyticsAction: getMarketingProductAnalyticsAction("realtime")
				},
				...features.agent ? [{
					...docsFooterLink(footerCopy.expanded.products.agent, "/docs/products/agent", marketing),
					analyticsAction: getMarketingProductAnalyticsAction("agent"),
					isNew: isProductNavItemNew("agent")
				}] : [],
				productFooterLink(footerCopy.expanded.products.hosting, "/products/sites", marketing, "sites"),
				marketingProductFooterLink(footerCopy.expanded.products.domains, "/domains", marketing, "domains"),
				docsFooterLink(footerCopy.expanded.products.network, "/docs/products/network", marketing),
				productFooterLink(footerCopy.expanded.products.firewall, "/products/firewall", marketing, "firewall")
			]
		},
		{
			title: footerCopy.groups.learn,
			links: [
				{
					label: footerCopy.expanded.learn.blog,
					href: getBlogPageUrl("/blog", marketing),
					external: isBlogPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.docs,
					href: getMarketingPageUrl("/docs", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.integrations,
					href: getMarketingPageUrl("/integrations", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.community,
					href: getMarketingPageUrl("/community", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.init,
					href: "/init",
					external: false
				},
				{
					label: footerCopy.expanded.learn.threads,
					href: getMarketingPageUrl("/threads", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.changelog,
					href: getMarketingPageUrl("/changelog", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.learn.roadmap,
					href: "https://github.com/appwrite/appwrite/projects",
					external: true
				},
				{
					label: footerCopy.expanded.learn.sourceCode,
					href: "https://github.com/appwrite/appwrite",
					external: true
				},
				{
					label: footerCopy.expanded.learn.arena,
					href: "https://arena.appwrite.io/",
					external: true
				},
				{
					label: footerCopy.expanded.learn.techNews,
					href: "https://refetch.io/",
					external: true
				}
			]
		},
		{
			title: footerCopy.groups.programs,
			links: [
				{
					label: footerCopy.expanded.programs.startups,
					href: getMarketingPageUrl("/startups", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.programs.education,
					href: getMarketingPageUrl("/education", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.programs.partners,
					href: getMarketingPageUrl("/partners", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.programs.enterprise,
					href: getMarketingPageUrl("/enterprise", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.programs.affiliates,
					href: getMarketingPageUrl("/affiliates", marketing),
					external: isMarketingPageExternal(marketing)
				}
			]
		},
		{
			title: footerCopy.groups.about,
			links: [
				{
					label: footerCopy.expanded.about.company,
					href: getMarketingPageUrl("/company", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.about.pricing,
					href: getMarketingPageUrl("/pricing", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.about.careers,
					href: `${getMarketingPageUrl("/company", marketing)}#careers`,
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.links.store,
					href: "https://store.appwrite.io/",
					external: true
				},
				{
					label: footerCopy.expanded.about.contactUs,
					href: getMarketingPageUrl("/enterprise", marketing),
					external: isMarketingPageExternal(marketing)
				},
				{
					label: footerCopy.expanded.about.assets,
					href: getMarketingPageUrl("/assets", marketing),
					external: isMarketingPageExternal(marketing)
				},
				docsFooterLink(footerCopy.expanded.about.security, "/docs/advanced/security", marketing)
			]
		},
		{
			title: footerCopy.groups.compare,
			links: [
				blogFooterLink(footerCopy.expanded.compare.vsSupabase, "appwrite-compared-to-supabase", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsFirebase, "open-source-firebase-alternative", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsNeon, "appwrite-vs-neon-ai-backends", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsVercel, "open-source-vercel-alternative", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsNetlify, "open-source-netlify-alternative", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsCloudinary, "appwrite-vs-cloudinary", marketing),
				blogFooterLink(footerCopy.expanded.compare.vsAuth0, "appwrite-vs-auth0", marketing),
				blogFooterLink(footerCopy.expanded.compare.nextjsHosting, "free-nextjs-hosting", marketing),
				blogFooterLink(footerCopy.expanded.compare.reactHosting, "free-react-hosting", marketing),
				blogFooterLink(footerCopy.expanded.compare.vueHosting, "free-vuejs-hosting", marketing),
				blogFooterLink(footerCopy.expanded.compare.baas, "backend-as-a-service", marketing)
			]
		}
	];
}
function FooterGroupLinks({ links, newLabel }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "space-y-2.5",
		children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
			href: link.href,
			...link.external ? {
				target: "_blank",
				rel: "noopener noreferrer"
			} : {},
			...link.analyticsAction ? analyticsAttrs(link.analyticsAction) : {},
			className: "link-unstyled inline-flex items-center gap-1.5 text-[13px] leading-5 text-muted-foreground transition-colors hover:text-foreground",
			children: [link.label, link.isNew ? /* @__PURE__ */ jsx(ProductNewBadge, { label: newLabel }) : null]
		}) }, link.label))
	});
}
function ConsoleFooter({ expanded = false }) {
	const t = useT();
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const { isCloud, features } = useConsoleProfile();
	const { catalog } = useI18n();
	const footerCopy = catalog.app.footer;
	const newLabel = catalog.website.products.navigation.newLabel;
	const cookieConsent = useOptionalCookieConsent();
	const isLegacyTheme$1 = useIsLegacyTheme();
	const cloudStatusEnabled = isCloud && features.systemStatus;
	const expandedFooterGroups = getExpandedFooterGroups(features.marketing, footerCopy, features);
	const resourceLinks = [
		{
			label: footerCopy.links.docs,
			href: getMarketingPageUrl("/docs", features.marketing),
			external: isMarketingPageExternal(features.marketing)
		},
		{
			label: footerCopy.links.store,
			href: "https://store.appwrite.io/",
			external: true
		},
		...cloudStatusEnabled ? [{
			label: footerCopy.links.status,
			href: "https://status.appwrite.online",
			external: true
		}] : []
	];
	const legalLinks = getFooterPolicyLinks(features.marketing);
	const showCookieSettings = cookieConsent?.bannerRequired ?? false;
	const socialLinks = [
		{
			label: footerCopy.social.github,
			href: "https://github.com/appwrite",
			icon: "/icons/github.svg"
		},
		{
			label: footerCopy.social.x,
			href: "https://x.com/appwrite",
			icon: "/icons/x.svg"
		},
		{
			label: footerCopy.social.youtube,
			href: "https://youtube.com/@appwrite",
			icon: "/icons/youtube.svg"
		},
		{
			label: footerCopy.social.linkedIn,
			href: "https://www.linkedin.com/company/appwrite/",
			icon: "/icons/linkedin.svg"
		},
		{
			label: footerCopy.social.instagram,
			href: "https://www.instagram.com/appwrite.io/",
			icon: "/icons/instagram.svg"
		},
		{
			label: footerCopy.social.discord,
			href: "/discord",
			icon: "/icons/discord-simple.svg"
		},
		{
			label: footerCopy.social.dailyDevSquad,
			href: "https://apwr.dev/dailydev",
			icon: "/icons/daily-dev.svg"
		}
	];
	const getSocialIconMaskStyle = (iconPath) => ({
		maskImage: `url(${iconPath})`,
		maskRepeat: "no-repeat",
		maskPosition: "center",
		maskSize: "contain",
		WebkitMaskImage: `url(${iconPath})`,
		WebkitMaskRepeat: "no-repeat",
		WebkitMaskPosition: "center",
		WebkitMaskSize: "contain"
	});
	const compactFooter = /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[54px] items-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-2", footerCompactPaddingX),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 shrink items-center gap-2",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: isLegacyTheme$1 ? "flex shrink-0 items-center py-1.5 pe-2.5 ps-0" : "flex shrink-0 items-center py-1.5 pe-2.5 ps-0 text-foreground opacity-60",
						children: isLegacyTheme$1 ? /* @__PURE__ */ jsx(LegacyAppwriteIcon, { className: "h-4 w-auto" }) : /* @__PURE__ */ jsx(AppwriteMark, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("div", { className: cn("h-4 w-px shrink-0 bg-border", footerShowSeparatorMd) }),
					/* @__PURE__ */ jsx("nav", {
						className: "flex shrink-0 items-center",
						children: resourceLinks.map((link, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ jsx("a", {
								href: link.href,
								...link.external ? {
									target: "_blank",
									rel: "noopener noreferrer"
								} : {},
								className: "link-unstyled whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								children: link.label
							}), index < resourceLinks.length - 1 && /* @__PURE__ */ jsx("span", {
								className: cn("text-border", "hidden @[640px]/footer:inline"),
								children: "·"
							})]
						}, link.label))
					}),
					/* @__PURE__ */ jsx("div", { className: cn("h-4 w-px shrink-0 bg-border", footerShowSeparatorLg) }),
					/* @__PURE__ */ jsx("div", {
						className: cn("shrink-0 items-center gap-1", footerShowSocialIcons),
						children: socialLinks.map((social) => /* @__PURE__ */ jsx("a", {
							href: social.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							"aria-label": social.label,
							children: /* @__PURE__ */ jsx("span", {
								className: "h-4 w-4 bg-current",
								style: getSocialIconMaskStyle(social.icon)
							})
						}, social.label))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: getDocsPageUrl("/docs/advanced/security", features.marketing),
						...isMarketingPageExternal(features.marketing) ? {
							target: "_blank",
							rel: "noopener noreferrer"
						} : {},
						className: cn("link-unstyled rounded-md px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", footerShowTrustBadge),
						children: [/* @__PURE__ */ jsx(ShieldCheck, {
							className: "h-3.5 w-3.5 shrink-0 opacity-70",
							"aria-hidden": true
						}), /* @__PURE__ */ jsx("span", {
							className: "whitespace-nowrap font-medium",
							children: footerCopy.links.soc2
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: cn("h-4 w-px shrink-0 bg-border", footerShowSeparatorLg) }),
					/* @__PURE__ */ jsx("nav", {
						className: cn("items-center", footerShowLegalLinks),
						children: legalLinks.map((link, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: link.href,
									...link.external ? {
										target: "_blank",
										rel: "noopener noreferrer"
									} : {},
									className: "link-unstyled whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
									children: t(link.label)
								}),
								link.label === "Cookies" && showCookieSettings ? /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => cookieConsent?.openPreferences(),
									className: "-ms-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
									"aria-label": footerCopy.links.cookieSettings,
									children: /* @__PURE__ */ jsx(Settings2, {
										className: "h-3.5 w-3.5",
										"aria-hidden": true
									})
								}) : null,
								index < legalLinks.length - 1 && /* @__PURE__ */ jsx("span", {
									className: "text-border",
									children: "·"
								})
							]
						}, link.label))
					}),
					/* @__PURE__ */ jsx("div", { className: cn("h-4 w-px shrink-0 bg-border", footerShowSeparatorMd) }),
					/* @__PURE__ */ jsxs("span", {
						className: "whitespace-nowrap py-1.5 pe-0 ps-2.5 text-[13px] text-muted-foreground",
						children: [
							"© ",
							currentYear,
							" ",
							footerCopy.links.copyrightBrand
						]
					})
				]
			})]
		})
	});
	if (!expanded) return /* @__PURE__ */ jsx("footer", {
		className: cn(FOOTER_CONTAINER, "w-full shrink-0 border-t border-border"),
		children: compactFooter
	});
	return /* @__PURE__ */ jsxs("footer", {
		className: cn(FOOTER_CONTAINER, "w-full shrink-0 border-t border-border bg-background"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12",
			children: [/* @__PURE__ */ jsx(Accordion, {
				type: "multiple",
				className: "md:hidden",
				children: expandedFooterGroups.map((group) => /* @__PURE__ */ jsxs(AccordionItem, {
					value: group.title,
					className: "border-border",
					children: [/* @__PURE__ */ jsx(AccordionTrigger, {
						className: "py-3.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:no-underline",
						children: group.title
					}), /* @__PURE__ */ jsx(AccordionContent, {
						className: "pb-1",
						children: /* @__PURE__ */ jsx("nav", {
							"aria-label": group.title,
							children: /* @__PURE__ */ jsx(FooterGroupLinks, {
								links: group.links,
								newLabel
							})
						})
					})]
				}, group.title))
			}), /* @__PURE__ */ jsx("div", {
				className: "hidden gap-x-8 gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-6",
				children: expandedFooterGroups.map((group) => /* @__PURE__ */ jsxs("nav", {
					"aria-label": group.title,
					children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: group.title
					}), /* @__PURE__ */ jsx(FooterGroupLinks, {
						links: group.links,
						newLabel
					})]
				}, group.title))
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border",
			children: compactFooter
		})]
	});
}
function AppwriteMark({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className,
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M24.4429 16.4322V21.9096H10.7519C6.76318 21.9096 3.28044 19.7067 1.4171 16.4322C1.14622 15.9561 0.909137 15.4567 0.710264 14.9383C0.319864 13.9225 0.0744552 12.8325 0 11.6952V10.2143C0.0161646 9.96089 0.0416361 9.70942 0.0749451 9.46095C0.143032 8.95105 0.245898 8.45211 0.381093 7.96711C1.66006 3.36909 5.81877 0 10.7519 0C15.6851 0 19.8433 3.36909 21.1223 7.96711H15.2682C14.3072 6.4683 12.6437 5.4774 10.7519 5.4774C8.86017 5.4774 7.19668 6.4683 6.23562 7.96711C5.9427 8.42274 5.71542 8.92516 5.56651 9.46095C5.43425 9.93599 5.36371 10.4369 5.36371 10.9548C5.36371 12.5248 6.01324 13.94 7.05463 14.9383C8.01961 15.865 9.32061 16.4322 10.7519 16.4322H24.4429Z"
		}), /* @__PURE__ */ jsx("path", {
			fill: "currentColor",
			d: "M24.4429 9.46094V14.9383H14.4492C15.4906 13.94 16.1401 12.5248 16.1401 10.9548C16.1401 10.4369 16.0696 9.93598 15.9373 9.46094H24.4429Z"
		})]
	});
}
function NetworkOfflineCurtain() {
	const t = useT();
	if (!useConfirmedOffline()) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "alert",
		"aria-live": "assertive",
		"aria-relevant": "additions",
		className: "fixed inset-0 z-[125] flex h-[100dvh] max-h-[100dvh] w-full items-center justify-center bg-background/95 backdrop-blur-sm",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-4 flex max-w-md flex-col items-center text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-6 flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(WifiOff, {
						className: "size-9",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-[22px] font-semibold text-foreground",
					children: t("You're offline")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-[15px] text-muted-foreground",
					children: t("The console needs an internet connection to reach Appwrite's data centers. We'll restore the page automatically when you are back online.")
				})
			]
		})
	});
}
function SkipToContent() {
	return /* @__PURE__ */ jsx("a", {
		href: "#main-content",
		className: "fixed start-4 top-4 z-[110] -translate-y-full rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground opacity-0 shadow-lg ring-1 ring-border/50 transition-[opacity,transform] duration-200 ease-out focus:translate-y-0 focus:rounded-xl focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
		children: useT()("Skip to content")
	});
}
var OS_CONTROLS_WIDTH = 72;
function NativeAppBar() {
	const { openCommandCenter } = useKeyboardShortcutsContext();
	const navigationHistory = useNavigationHistorySafe();
	const navigate = useNavigate();
	const { catalog } = useI18n();
	const nativeAppBarCopy = catalog.app.nativeAppBar;
	const [historyOpen, setHistoryOpen] = useState(false);
	const canGoBack = navigationHistory?.hasInternalHistory() ?? false;
	const canGoForward = navigationHistory?.hasForwardHistory() ?? false;
	const backStack = navigationHistory?.getBackStack() ?? [];
	const hasHistory = backStack.length > 0;
	const handleBack = () => {
		const path = navigationHistory?.popHistory();
		if (path) {
			navigationHistory?.skipNextPush();
			navigate({ to: path });
		}
	};
	const handleForward = () => {
		const path = navigationHistory?.popForward();
		if (path) {
			navigationHistory?.skipNextPush();
			navigate({ to: path });
		}
	};
	const handleHistorySelect = (path) => {
		const target = navigationHistory?.popUntil(path);
		if (target) {
			navigationHistory?.skipNextPush();
			navigate({ to: target });
			setHistoryOpen(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex shrink-0 items-center gap-2 border-b border-border bg-background px-3 py-1.5 sm:px-4 @[1000px]:px-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex shrink-0 items-center",
				style: { width: OS_CONTROLS_WIDTH },
				"aria-hidden": true,
				"data-native-app-bar-os-controls": true
			}),
			/* @__PURE__ */ jsx(TooltipProvider, {
				delayDuration: 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: handleBack,
								disabled: !canGoBack,
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none",
								"aria-label": nativeAppBarCopy.back,
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: nativeAppBarCopy.back }) })] }),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: handleForward,
								disabled: !canGoForward,
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none",
								"aria-label": nativeAppBarCopy.forward,
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: nativeAppBarCopy.forward }) })] }),
						/* @__PURE__ */ jsxs(Popover, {
							open: historyOpen,
							onOpenChange: setHistoryOpen,
							children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(PopoverTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx("button", {
										type: "button",
										disabled: !hasHistory,
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none",
										"aria-label": nativeAppBarCopy.history,
										children: /* @__PURE__ */ jsx(History, { className: "h-4 w-4" })
									})
								})
							}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: nativeAppBarCopy.history }) })] }), /* @__PURE__ */ jsxs(PopoverContent, {
								align: "start",
								className: "w-72 p-0",
								sideOffset: 4,
								children: [/* @__PURE__ */ jsx("div", {
									className: "border-b border-border px-3 py-2",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[12px] font-semibold text-foreground",
										children: nativeAppBarCopy.recentPages
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "max-h-[240px] overflow-y-auto py-1",
									children: hasHistory ? [...backStack].reverse().map((entry) => /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => handleHistorySelect(entry.path),
										className: "flex w-full items-center px-3 py-2 text-start text-[13px] text-foreground transition-colors hover:bg-accent",
										children: /* @__PURE__ */ jsx("span", {
											className: "min-w-0 truncate",
											children: entry.title || entry.path || "/"
										})
									}, entry.path)) : /* @__PURE__ */ jsx("p", {
										className: "px-3 py-4 text-[13px] text-muted-foreground",
										children: nativeAppBarCopy.noRecentPages
									})
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 flex-1 justify-center",
				children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: openCommandCenter,
					className: "flex h-8 w-full max-w-[280px] items-center gap-2 rounded-md border border-border bg-accent/50 px-3 text-[13px] text-muted-foreground transition-colors hover:border-border hover:bg-accent",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0" }),
						/* @__PURE__ */ jsx("span", {
							className: "min-w-0 flex-1 truncate text-start",
							children: nativeAppBarCopy.searchPlaceholder
						}),
						/* @__PURE__ */ jsx("span", {
							className: "ms-auto shrink-0",
							children: /* @__PURE__ */ jsx("kbd", {
								dir: "ltr",
								className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
								children: "⌘K"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0",
				style: { width: OS_CONTROLS_WIDTH + 100 },
				"aria-hidden": true
			})
		]
	});
}
function ConsoleLayout({ children, sidebar, leftSidebar, header, headerBanner, showFooter = true, footer, fixedLayout = false, hideHeader = false, containerClassName, bottomPanel }) {
	const hasSidebar = !!sidebar;
	const hasLeftSidebar = !!leftSidebar;
	const usesSplitMain = fixedLayout || !!bottomPanel;
	const layoutContainerClass = containerClassName || (hasSidebar || hasLeftSidebar ? "project-layout-container" : "org-layout-container");
	const [overrides, setOverrides] = useState(loadDebugOverrides);
	useEffect(() => {
		return subscribeToDebugOverrides(setOverrides);
	}, []);
	const showNativeAppBar = overrides.showNativeAppBar;
	const showAppHeader = !hideHeader;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full flex-col bg-background", layoutContainerClass),
		children: [
			(showNativeAppBar || showAppHeader || headerBanner) && /* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-[110] flex shrink-0 flex-col overflow-visible bg-background",
				children: [
					showNativeAppBar && /* @__PURE__ */ jsx(NativeAppBar, {}),
					/* @__PURE__ */ jsx(CloudStatusBanner, {}),
					/* @__PURE__ */ jsx(ConsoleImpersonationBanner, {}),
					headerBanner,
					showAppHeader ? /* @__PURE__ */ jsx(ConsoleHeader, {
						onMenuClick: sidebar?.onMenuClick ?? leftSidebar?.onMenuClick,
						projectId: header?.projectId,
						onCommandCenterOpen: header?.onCommandCenterOpen,
						onCreateOrganization: header?.onCreateOrganization,
						marketingNav: header?.marketingNav,
						headerTitleSuffix: header?.headerTitleSuffix,
						centerSearch: header?.centerSearch,
						centerSearchPlaceholder: header?.centerSearchPlaceholder,
						hideSearch: showNativeAppBar
					}) : null
				]
			}),
			/* @__PURE__ */ jsx(SkipToContent, {}),
			(sidebar?.mobileOpen || leftSidebar?.mobileOpen) && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-[120] h-[100dvh] max-h-[100dvh] w-full bg-black/60",
				onClick: () => {
					if (sidebar?.mobileOpen) sidebar.onMobileClose();
					else leftSidebar?.onMobileClose();
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "@container flex flex-1 min-h-0 overflow-x-visible overflow-y-hidden",
				children: [
					sidebar && /* @__PURE__ */ jsx(ConsoleSidebar, {
						projectId: sidebar.projectId,
						activeSection: sidebar.activeSection,
						mobileOpen: sidebar.mobileOpen,
						onMobileClose: sidebar.onMobileClose
					}),
					leftSidebar?.content,
					/* @__PURE__ */ jsxs("main", {
						id: "main-content",
						tabIndex: -1,
						className: cn("@container flex min-h-0 min-w-0 flex-1 flex-col bg-background outline-none", usesSplitMain ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto"),
						children: [
							/* @__PURE__ */ jsx("div", {
								className: cn("flex-1", usesSplitMain && "min-h-0", usesSplitMain && (fixedLayout ? "overflow-hidden" : "overflow-y-auto"), fixedLayout && "flex flex-col"),
								children: /* @__PURE__ */ jsx("div", {
									className: cn(usesSplitMain && "h-full", fixedLayout && "min-h-0 flex flex-col"),
									children
								})
							}),
							bottomPanel,
							showFooter && /* @__PURE__ */ jsx(ConsoleFooter, { expanded: footer?.expanded })
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(NetworkOfflineCurtain, {})
		]
	});
}
export { getDocsPageBreadcrumbItems as A, RECENT_RESOURCES_MAX_SHOWN as C, getRecentResourceDatabaseIconHints as D, getRecentResourceBreadcrumbs as E, getDocsPreviewMenuMeta as M, resolveDocsPreviewView as N, getRecentResourceSiteFramework as O, useRecentResourcesSafe as S, RECENT_RESOURCES_STORAGE_KEY as T, AppwriteWordmark as _, StandaloneCommandCenterScope as a, SOC2_SETTINGS_KEYWORDS as b, useInitThemeUsesDarkImage as c, CreateProjectDialog as d, wouldIncurPlanAddonCharge as f, FailedInvoiceWarningIcon as g, getPlanDisplayName as h, KeyboardShortcutsProvider as i, canShowDocsPreviewMenu as j, PROJECT_RESOURCE_KIND_LABELS as k, OPEN_COMMAND_CENTER_SHORTCUT_OPTIONS as l, getPlanBadgeColor as m, ProductNewBadge as n, CommandCenter as o, AdditionalChargeAlert as p, isDocsProductNavNew as r, useInitThemeImageSrc as s, ConsoleLayout as t, useGlobalCommandShortcuts as u, CookieConsentProvider as v, RECENT_RESOURCES_MAX_STORED as w, RecentResourcesProvider as x, ORG_SETTINGS_CARD_INDEX as y };
