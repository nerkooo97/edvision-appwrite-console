import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { n as getRequest, r as getRequestIP } from "../server.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as getRuntimeConfigScript, t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { a as getDebugEndpointOverride, c as removeCustomDebugEndpoint, l as setDebugEndpointOverride, n as getCustomDebugEndpoints, o as getEffectiveEndpointBaseUrl, r as getDebugCustomEndpoint, s as getEnvEndpointBaseUrl, t as ENDPOINT_PRESETS, u as subscribeToDebugEndpointChange } from "./debug-endpoint-BvungD5q.js";
import { B as STALE_CHUNK_BOOT_SCRIPT, C as isConsoleImpersonationActive, G as canTrackAnalytics, U as scheduleClearStaleChunkReloadGuard, W as tryReloadForStaleChunk, d as sdk, h as fetchConsoleAccount, j as sendSentryDebugTestError, q as subscribeCookieConsent } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import { A as getInitMockDayBannerExpired, D as formatInitMockCurrentDay, O as getInitMockCurrentDayMax, T as INIT_MOCK_DAY_BEFORE, a as FEATURE_FLAGS_MENU_DEBUG_DEFAULTS, c as resetFeatureFlagsMenuDebugOverride, d as subscribeToDebugOverrides, f as useDebugOverrides, h as getUserOsLabel, k as getInitMockDayAfter, l as resetFeatureFlagsMenuDebugOverrides, m as detectUserOs, n as getEnglishCatalog, p as USER_OS_LABELS, r as useI18n, s as loadDebugOverrides, t as I18nProvider, u as setDebugOverride, w as INIT_LAUNCH_WEEK_DAY_COUNT } from "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import { n as formatInitMockTicketType } from "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as isHttpPaymentRequiredError, i as getErrorMessage, l as isHttpProjectAccessError, o as isHttpForbiddenError } from "./error-formatting-CL2hjGy5.js";
import { t as createConsoleProject } from "./console-projects-C0b0tMaH.js";
import { i as resolveSiteAssetUrl, n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { n as runWithCoverRenderContext } from "./render-context-C1ssi7kM.js";
import { d as getCoverBrandThemeForSvgExport, h as resolveCoverEditorThemeId, n as COVER_IMAGE_FORMATS } from "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import { o as COVER_BRAND_ICON_COLOR, u as getCoverLucideIconStrokeColor } from "./lucide-icon-svg-BStxTNvw.js";
import { t as readCoverPublicAssetBuffer } from "./public-assets-2YjDGwMP.js";
import { n as buildCoverTableFrameComposition, u as buildCoverExportFontStyleBlock } from "./render-frame-BkUqYiWN.js";
import { a as parseCoverLucideIconName, i as isCoverLucideIconValue } from "./lucide-icon-utils-BZZNNTPu.js";
import { i as buildCoverBrandBackgroundParts, l as resolveCoverImageHref, n as applyCoverImageFormat, r as encodeCoverImageBuffer, t as getCoverFontFaceCss, u as loadCoverLucideIconSvgBuffer } from "./font-embed-BhaGPy8N.js";
import { a as getCoverImageMimeType, i as getCoverImageExtension } from "./cover-image-format-CKZUHQO-.js";
import "./constants-Dd6QzW31.js";
import "./ticket-stack-pzBI8NL4.js";
import { c as notifyInitTicketPrefsChange, d as readInitTicketPrefsFromAccountPrefs, f as readInitTicketPrefsFromStorage, h as writeInitTicketPrefsToStorage, p as stripInitTicketImageFromPrefs, r as INIT_TICKET_PREFS_KEY_PREFIX, s as mergeInitTicketPrefsIntoAccountPrefs, t as DEFAULT_INIT_TICKET_PREFS } from "./ticket-prefs-DDmwAY1F.js";
import { n as respondWithClientStaticFile } from "./static-exports-8foc4A5Y.js";
import { a as DEFAULT_BILLING_PROJECTS_LIMIT, c as DOMAINS_DEFAULT_PAGE_SIZE, f as ROWS_DEFAULT_PAGE_SIZE, g as isClientQueryEnabled, i as CREATE_FUNCTION_WIZARD_STARTER_LIMIT, o as DEFAULT_PAGE_SIZE, r as CREATE_FUNCTION_WIZARD_BROWSE_LIMIT, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { B as organizationInvoicesQueryOptions, G as organizationQueryOptions, H as organizationPlanQueryOptions, L as organizationBillingAggregationQueryOptions, Mt as useOrganizationPlan, Q as resolveOrganizationAccess, Qt as SCREENSHOT_MODE_TOGGLE_SEQUENCE, R as organizationCreditsQueryOptions, U as organizationProjectScopeQueryOptions, V as organizationPaymentMethodQueryOptions, W as organizationProjectsQueryOptions, X as paymentMethodsQueryOptions, Y as organizationsQueryOptions, a as canSeeOrganizationBilling, en as applyScreenshotModeOrganizationName, i as billingPlansQueryOptions, in as writeScreenshotModeOpen, j as fetchOrganizations, n as billingAddressQueryOptions, nn as readScreenshotModeOpen, q as organizationUsageQueryOptions, r as billingAddressesQueryOptions, rn as subscribeScreenshotMode, tn as isScreenshotModeActive } from "./organizations-BKtnlNrj.js";
import { c as getEnvProfileId, d as resetDebugProfileFeatureOverride, f as resetDebugProfileFeatureOverrides, h as setDebugProfileOverride, i as getActiveProfileFeatures, l as hasDebugProfileOverride, m as setDebugProfileFeatureOverride, n as CONSOLE_PROFILE_FEATURE_LABELS, o as getCanonicalProfileFeatures, t as CONSOLE_PROFILES } from "./console-profiles-D__E5Kgi.js";
import { $u as XBrandIcon, At as siteGbHoursForSiteQueryOptions, Bs as fetchLocaleCodes, Ch as fetchFirstPostgresTable, Cs as fetchVcsInstallations, Cu as organizationAppsQueryOptions, Dl as parseFirewallResourceTypeSearch, Ef as postgresDatabaseExtensionsQueryOptions, El as parseFirewallResourceIdSearch, Fo as getStatusIcon, Gh as postgresDatabaseQueryOptions, Id as STORAGE_PLACEHOLDER_BUCKET_ID, Io as getStatusPresentation, J_ as USERS_DEFAULT_SORT_ORDER, Ju as COMMUNITY_SUPPORT_REMINDER_MS, Ku as useCommunitySupportPrompt, Ld as isRealStorageNavigation, Ot as siteExecutionsForSiteQueryOptions, Po as getStatusBannerParts, Ps as vcsInstallationsQueryOptions, Qu as shuffleCommunitySupportShareTexts, Rd as isStoragePlaceholderBucketId, Ru as consoleOAuth2CatalogQueryOptions, Ul as fetchEmailTemplate, Vd as storageSidebarBucketsQueryOptions, Vl as webhooksQueryOptions, Vu as projectOAuth2ProvidersQueryOptions, Wf as fetchFirstMysqlTable, X_ as createProjectUser, Xi as ASSISTANT_MODELS_PICKER_PAGE_SIZE, Xu as COMMUNITY_SUPPORT_UNIQUE_DAYS_THRESHOLD, Y_ as createProjectTeam, Yi as ASSISTANT_MESSAGES_PAGE_SIZE, Yl as consoleProjectScopesQueryOptions, Yu as COMMUNITY_SUPPORT_SHARE_TEXTS, Zu as getCommunitySupportShareHref, as as providersQueryOptions, bd as fetchBucket, bu as marketplaceCatalogQueryOptions, ca as assistantModelsInfiniteQueryOptions, ci as apiExplorerSpecQueryOptions, cl as draftsFromUsageFilterMap, cs as topicsQueryOptions, dc as projectDomainsQueryOptions, dp as mysqlDatabaseQueryOptions, dv as fetchUserMFAFactors, el as firewallRulesQueryOptions, fv as fetchUserMemberships, gh as fetchDedicatedBackupPolicies, gl as createEmptyConditionDraft, hl as areFirewallConditionsComplete, hv as teamsQueryOptions, is as providerQueryOptions, it as firewallTrafficOverviewQueryOptions, iu as projectOAuth2AppsQueryOptions, jf as mysqlDatabaseReplicasQueryOptions, jo as useAppwriteCloudStatus, kl as serializeFirewallConditions, lv as fetchUser, ml as FIREWALL_RESOURCE_TYPES, mv as fetchUserTargets, nc as fetchBackupPolicies, oa as assistantMessagesQueryOptions, pv as fetchUserSessions, q_ as USERS_DEFAULT_SORT_BY, qu as COMMUNITY_SUPPORT_ACTIONS, ra as assistantConversationsQueryOptions, rh as dedicatedDatabaseReplicasQueryOptions, ta as assistantAutomationsQueryOptions, th as postgresDatabaseReplicasQueryOptions, tl as useCreateFirewallRule, ts as messagesQueryOptions, uv as fetchUserIdentities, uy as usersQueryOptions, zd as redirectStorageFirstBucketOrPlaceholder } from "./hooks-BONwG3Mt.js";
import { $ as useRightPaneWidth, $i as resolveDiagramCanvasSize, $n as USER_PREFS_KEY_POSTGRES_SQL_EDITOR_STATE_PREFIX, Aa as getDiagramEdgeDash, An as USER_PREFS_KEY_FEATURE_NOTIFICATIONS, At as parsePinnedProjectIds, Bn as USER_PREFS_KEY_MYSQL_SIDEBAR_TABLES_SORT_PREFIX, Cn as USER_PREFS_KEY_COMMUNITY_SUPPORT, Ct as resolvePostAuthRedirect, D as syncConsoleAccountAfterMutation, Dn as USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH, En as USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT, Et as prefetchOrganizationOverviewData, Fa as DIAGRAM_NODE_KIND_LABELS, Fn as USER_PREFS_KEY_MYSQL_SAVED_QUERIES_PREFIX, Gn as USER_PREFS_KEY_POSTGRES_QUERY_HISTORY_PREFIX, Hn as USER_PREFS_KEY_MYSQL_SQL_EDITOR_STATE_PREFIX, In as USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SCOPE_PREFIX, Jn as USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SORT_PREFIX, Jr as parseAIChatActiveConversationId, Ka as CLI_SHELL_COLLAPSED_HEIGHT_PX, Kn as USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_PREFIX, Li as USER_PREFS_KEY_API_REFERENCE_UI, Ln as USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SORT_PREFIX, Ma as getDiagramEdgeStroke, Mn as USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY, Na as normalizeDiagramEdge, Nn as USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS, Nt as resolvePostAuthOrganizationId, O as updateAccountPrefs, On as USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS, Ot as TEAM_PREFS_KEY_PINNED_PROJECT_IDS, Pn as USER_PREFS_KEY_MYSQL_QUERY_HISTORY_PREFIX, Qn as USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT, Rn as USER_PREFS_KEY_MYSQL_SELECTED_SCHEMA_PREFIX, Sn as USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX, St as requiresConsoleEmailVerification, T as shouldRevalidateConsoleAccount, Tn as USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT, Un as USER_PREFS_KEY_ORGANIZATION, Vn as USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT, Wn as USER_PREFS_KEY_ORG_PROJECTS_LIST_VIEW_MODE, Xn as USER_PREFS_KEY_POSTGRES_SIDEBAR_PANEL_PREFIX, Yn as USER_PREFS_KEY_POSTGRES_SELECTED_SCHEMA_PREFIX, Zn as USER_PREFS_KEY_POSTGRES_SIDEBAR_TABLES_SORT_PREFIX, _n as USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT, ar as USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX, b as performConsoleSignOut, bn as USER_PREFS_KEY_CLI_SHELL_OPEN, c as ensureConsoleAccountOnAuthRoute, cn as USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX, co as RIGHT_PANE_TRANSITION_MS, cr as USER_PREFS_KEY_TABLESDB_ROWS_LIST_COLUMNS_PREFIX, da as normalizeDiagramNode, dn as USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX, er as USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX, fn as USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS, fo as fetchOrganizationMemberships, gn as USER_PREFS_KEY_AUTH_PASSWORD_STRENGTH_COMPLIANCE_OPEN, go as useConsoleTeam, h as isConsoleAccountQuerySettled, hn as USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT, ho as updateConsoleTeamPrefs, ir as USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS, ja as getDiagramEdgeOpacity, jn as USER_PREFS_KEY_FUNCTIONS_LIST_VIEW_MODE, kn as USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT, l as ensureConsoleAccountQueryData, ln as USER_PREFS_KEY_AI_CHAT_EXPANDED, lo as clampRightPaneWidthPx, lr as USER_PREFS_KEY_USAGE_CHART_DATE_RANGE, m as getConsoleAccountFromCache, mn as USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP, mo as organizationMembershipsQueryOptions, n as CONSOLE_ACCOUNT_STALE_TIME_MS, na as createDefaultDiagramDocument, nr as USER_PREFS_KEY_SIDEBAR_COLLAPSED, o as commitConsoleAccountToCaches, oa as buildDiagramEdgeArrowheadPath, or as USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH, pn as USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT, qi as USER_PREFS_KEY_DIAGRAM_GENERATIONS, qn as USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SCOPE_PREFIX, rr as USER_PREFS_KEY_SITES_LIST_VIEW_MODE, s as consoleAccountQueryOptions, sa as buildDiagramEdgePaths, sn as USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID, sr as USER_PREFS_KEY_STORES_LIST_VIEW_MODE, tr as USER_PREFS_KEY_SAVED_FILTERS_PREFIX, un as USER_PREFS_KEY_AI_CHAT_PANEL_OPEN, uo as consoleTeamQueryOptions, ur as USER_PREFS_KEY_USAGE_CHART_INTERVAL, vn as USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX, w as refreshConsoleAccountAfterAuth, wn as USER_PREFS_KEY_CONNECT_PROJECT_TAB, wt as toRedirectNavigateOptions, xa as createDefaultDiagramTable, xn as USER_PREFS_KEY_CLI_SHELL_SESSIONS_PREFIX, yn as USER_PREFS_KEY_CLI_SHELL_HISTORY_PREFIX, zn as USER_PREFS_KEY_MYSQL_SIDEBAR_PANEL_PREFIX } from "./auth-BPuxYQAc.js";
import { E as projectVariablesQueryOptions, R as useProject, S as pinnedProjectsQueryOptions, T as projectQueryOptions, m as fetchProject, nt as projectAuthSecurityQueryOptions, o as activeProjectsQueryOptions } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { $ as productRouteKindQueryOptions, C as dedicatedDatabasesQueryOptions, Jt as POSTGRES_DATABASE_SPECS_SOURCE, Kt as requireOperationalDatabase, Mt as waitForCreatedDatabaseLifecycleReady, Nt as waitForCreatedDatabasePitrReady, Pt as waitForCreatedDatabaseWorkspaceReady, Q as productDatabasesQueryOptions, Qt as dedicatedDatabaseSourceFromRouteKind, S as dedicatedDatabaseByIdQueryOptions, Xt as dedicatedDatabaseSourceFromDatabaseType, Zt as dedicatedDatabaseSourceFromEngine, b as databaseSpecificationsQueryOptions, c as consoleDatabasesQueryOptions, d as createProjectTable, ft as tablesQueryOptions, in as getDedicatedDatabaseIdError, jt as waitForCreatedDatabaseHaReady, k as enabledDatabaseSpecificationsSources, l as createNativeDatabase, ot as seedCreatedDatabaseCaches, qt as MYSQL_DATABASE_SPECS_SOURCE, rn as formatDedicatedDatabaseCreateError, tn as dedicatedEngineService, tt as refetchProjectDatabaseLists, u as createProjectDatabase, x as databasesQueryOptions, y as databaseQueryOptions } from "./databases-Dh0pwZ6h.js";
import { C as formatDedicatedMonthlyPrice, S as formatDedicatedAddonPrice, _ as DEDICATED_DB_HA_REPLICA_OPTIONS, b as MAX_DEDICATED_DB_HA_REPLICA_COUNT, f as isServerlessDatabaseSpecId, l as hasEnabledDedicatedComputeOptions, n as TABLE_DB_SPEC_OPTIONS, o as getDefaultEnabledSpecId, p as mapDedicatedDatabaseSpecifications, t as SERVERLESS_DATABASE_SPEC_ID, u as hasLockedDatabaseSpecifications, w as getDedicatedDatabaseCreatePricing, x as calculateDedicatedDatabaseMonthlyCost } from "./database-specs-CBc802K0.js";
import { a as isDatabaseRouteKind, f as usesCollectionsPath, n as databaseRouteKindFromApiType, r as dbNavLink, t as DATABASE_HOME_TO } from "./database-routes-DB_xKWuY.js";
import { d as postgresNav, f as postgresTableId, l as postgresDatabaseHome, t as POSTGRES_DATABASE_TAB_LABELS } from "./postgres-database-routes-CyTsPbzl.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import { i as mysqlDatabaseHome, o as mysqlNav, s as mysqlTableId, t as MYSQL_DATABASE_TAB_LABELS } from "./mysql-database-routes-CVHkJzTt.js";
import { $ as listSearchSchema, K as omitDatabaseTypeFilters, dt as parseListSearch, ht as urlFromRouterLocation, mt as searchParamsFromRouterLocation, pt as queryParamToMap } from "./form-field-type-badge-C7qMzJo0.js";
import { c as resolveUsageChartIntervalForRange, l as getStableUsageChartDateRange, t as DEFAULT_USAGE_CHART_INTERVAL } from "./chart-interval-Dbrn19qD.js";
import { n as isMarketingPagePath, t as isMarketingPage } from "./is-marketing-page-dgx45Oqy.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { t as useConsoleImpersonationRevision } from "./use-console-impersonation-revision-BiI0c7pX.js";
import { $t as siteQueryOptions, Jt as siteDeploymentQueryOptions, Or as SpecificationType, St as getUsageLogRetentionHoursFromPlan, Xt as siteDomainsQueryOptions, Yt as siteDeploymentsQueryOptions, Zt as siteFrameworksQueryOptions, ar as functionSpecificationsQueryOptions, cr as functionVariablesQueryOptions, dr as projectRuntimesQueryOptions, en as siteSpecificationsQueryOptions, ir as functionExecutionsQueryOptions, jt as deploymentProxyRulesQueryOptions, nn as siteTemplatesQueryOptions, rn as siteVariablesQueryOptions, rr as functionDomainsQueryOptions, sr as functionTemplatesPageQueryOptions, tr as functionDeploymentQueryOptions, ur as projectFunctionQueryOptions } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import { o as formatCompactCount } from "./format-metric-6jsfxd5f.js";
import { D as organizationDomainsQueryOptions, i as DOMAINS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { a as resolvePlausibleEventUrl, c as CLIENT_IP_DEBUG_HEADERS, f as getClientIpSnapshotFromRequest, i as proxyPlausibleScript, l as CLIENT_IP_HEADER, r as proxyPlausibleEvent, u as SSR_CLIENT_IP_WINDOW_KEY } from "./plausible-proxy-Dv8rZ-v1.js";
import { n as usePageDirection, t as PageDirectionProvider } from "./page-direction-CnacIIOa.js";
import { C as resolveFaviconHref, S as isStatusFaviconVariant, T as usesThemeAwareFaviconHost, _ as applyFaviconVariant, a as useFavicon, b as getFaviconStatus, d as useDebugMcpEndpoint, f as ConsoleRightPaneProvider, g as applyFaviconHref, h as FAVICON_VARIANT_LABELS, i as useIsMarketingPage, m as FAVICON_SOURCE_LABELS, n as AgentPanelContent, p as useConsoleRightPane, t as AgentChatProvider, v as formatFaviconStatusSummary, w as subscribeFaviconStatus, x as isBlueFaviconVariant, y as getDefaultFaviconVariant } from "./AgentChat-DNlva4IH.js";
import { r as isLegacyTheme, t as LEGACY_ICON_SRC } from "./legacy-theme-assets-f00JZBAw.js";
import { t as shouldSuppressGlobalShortcuts } from "./global-shortcut-suppress-C5j6k0iy.js";
import { n as useDebugMode, t as DebugModeProvider } from "./DebugMode-DFSPYy81.js";
import "./ThinkingBubble-U48KAaRY.js";
import { t as Slider } from "./slider-BKjrzSmD.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./collapsible-BcDIDOgI.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { r as getAnalyticsActionEventName } from "./analytics-actions-FGYQVzYg.js";
import { i as openInNewTab, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import { r as NavigationHistoryProvider, t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import { d as DOCS_TOC_SECTION_TITLE_CLASS } from "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { n as isOptionalAuthPage, r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { l as redirectLegacyAgentLocation, s as isAgentPagePath } from "./agent-paths-CTRM_FvO.js";
import "./mcp-CgjPVMsn.js";
import { a as getEnvMcpEndpointUrl, s as setDebugMcpEndpointOverride, t as MCP_ENDPOINT_PRESETS } from "./debug-mcp-endpoint-B4hkK2QF.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./skeleton-8d0Q_D56.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import "./CronScheduleEditor-Dctcdb1H.js";
import "./overlay-lock-CIY7GeXu.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import "./context-menu-Ca6WjjAw.js";
import "./ContextMenuIcon-DPnw7e0V.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./display-DbRQIyxk.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./SettingsLayoutShell-B7hNlMNA.js";
import "./calendar-6OJ5dwYN.js";
import "./use-media-min-width-T-T6WgXi.js";
import "./DateRangePicker-BwmpXdP_.js";
import "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./UsageChartIntervalToggle-Bbo7DqjH.js";
import "./CartesianChart-IK-OMdOm.js";
import "./UsageChartBrushReferenceArea-PlRYgCRx.js";
import { a as Route$163, i as FunctionSelector, n as ConditionsBuilder, r as SiteSelector, t as RuleImpactPreview } from "./RuleImpactPreview-Dm4g97zW.js";
import "./ChartXAxis-Sg7PTtJF.js";
import "./chart-panel-CCGEGd61.js";
import "./OverviewChartPanelError-D9UA3Ssz.js";
import "./upgrade-curtain-D427ml_E.js";
import "./addons-DpAB_yDA.js";
import "./stripe-B07yV6XF.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import "./EnablePremiumGeoDBDialog-B57n4Kqr.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import "./HostnameFaviconIcon-BEkCxwPN.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./UsageTimeSeriesChartCard-DvSTn7lw.js";
import { n as DatabaseTypeIcon } from "./DatabaseTypeIcon-CqLDDPFP.js";
import { n as MySQLDolphinIcon, r as PostgresElephantIcon } from "./database-mascot-icons-mAQ4uqbH.js";
import "./chart-animation-CE90Rh4_.js";
import { a as isConsoleRightPanePath, i as isConsoleDocsPreviewPath, n as DocsPreviewNavigationProvider, o as DocsPreviewContext, r as docsHrefToPreviewSlug, s as useDocsPreview, t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as MARKETING_SITE_ORIGIN } from "./urls-BIlyr2O2.js";
import "./ChartSeriesDot-DRSaLZ-2.js";
import "./UsageSectionChartError-Bjd51l80.js";
import { d as inlineEndPaneWidthFromPointer, f as isRtlElement, m as setBodyResizeDragActive, p as resizeHandleOnInlineStartEdgeStyle } from "./horizontal-resize-BcegzCwH.js";
import "./resizable-CfBrThFG.js";
import { a as reportUnhandledError, i as reportRouterCaughtError, t as SentryContextProvider } from "./SentryContext-BM5Kx9zs.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import "./CopyableId-DPIWAPIb.js";
import { _ as loadCliTerminalCacheSummary, g as clearCliTerminalCache, r as useAnalytics } from "./ProjectConnectDialogContext-DgcmISfV.js";
import "./Icon-BtIL187e.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import { i as getAnalyticsRoutePath, l as trackPageView, o as getSafeInternalPathParts, r as getAnalyticsPlanFromBillingId, s as setAnalyticsSessionProps } from "./analytics-C_KnVoso.js";
import "./avif-support-fkUYDvxs.js";
import "./console-hub-DIz9opmN.js";
import { i as isAgentDocsSlug, t as isAgentDocsEnabled } from "./agent-docs-feature-COYbd_m1.js";
import { c as DOCS_SECTION_NAVS, d as isFirewallDocsSlug, l as isFirewallDocsEnabled, n as isDocsNavGroup } from "./navigation-BOrhbgOp.js";
import { A as getDocsPageBreadcrumbItems, C as RECENT_RESOURCES_MAX_SHOWN, D as getRecentResourceDatabaseIconHints, E as getRecentResourceBreadcrumbs, M as getDocsPreviewMenuMeta, N as resolveDocsPreviewView, O as getRecentResourceSiteFramework, S as useRecentResourcesSafe, T as RECENT_RESOURCES_STORAGE_KEY, _ as AppwriteWordmark, a as StandaloneCommandCenterScope, j as canShowDocsPreviewMenu, k as PROJECT_RESOURCE_KIND_LABELS, t as ConsoleLayout, v as CookieConsentProvider, w as RECENT_RESOURCES_MAX_STORED, x as RecentResourcesProvider } from "./ConsoleLayout-c5WGBGep.js";
import { i as shouldBlockPartnersDocs, r as isPartnersDocsSlug, t as isPartnersDocsEnabled } from "./partners-docs-feature-C-dnxcxd.js";
import { a as generateIntegrationsMarkdownIndex, c as getDocsPage, f as DOCS_CONTENT_HMR_EVENT, i as generateDocsMarkdownIndex, l as DocsPageHeaderActions, n as generateBlogMarkdownIndex, o as generateLlmsTxt, r as generateChangelogMarkdownIndex, s as respondWithPrebuiltOrRuntime, t as Route$27, u as DocsMarkdown } from "./_-g8dfkDxO.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-DJFLXbij.js";
import "./ImagePreviewGallery-CuJmaZOR.js";
import "./Youtube-pQDzLroP.js";
import "./prose-typography-DB73MMim.js";
import "./frontmatter-9RsCswLb.js";
import "./link-styles-DzUNTdI9.js";
import "./prose-link-DLbkQskb.js";
import "./DocsHeadingLink-ACXvhwfq.js";
import { a as docsGridQuickStarts, c as docsPreviewPrimaryTitleClass, n as docsContentPaddingX, s as docsGridTwoCol, t as DOCS_CONTAINER } from "./docs-container-qv9gqb9G.js";
import "./DocsHomeSectionHeading-nCMtryIc.js";
import { t as DocsHome } from "./DocsHome-DwJ80grN.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./AiMockPanels-DoPFSJSx.js";
import "./carousel-mJzDxueI.js";
import "./OAuthIcon-C9fW2FkG.js";
import { t as DocsPartnersHome } from "./DocsPartnersHome-D5eQLGL_.js";
import "./nav-styles-B9rWOQql.js";
import { i as docsTocLinkClassName } from "./nav-styles-BnkuEWRE.js";
import { n as stripFrontmatter, r as markdocToMarkdown } from "./frontmatter-CpHldQ8H.js";
import { t as DOCS_PAGES } from "./manifest-THOJt7eC.js";
import { t as QUICK_STARTS_HUB_CATEGORIES } from "./quick-starts-hub-DS4YtXK1.js";
import { t as getTutorialsHubCategories } from "./tutorials-hub-CuQnFF75.js";
import { i as OVERVIEW_CHART_TAB_ORDER, n as OVERVIEW_CHART_TAB_DISABLE_KEYS, r as OVERVIEW_CHART_TAB_LABELS, t as Route$106 } from "./projects._projectId.index-B9DG9XeG.js";
import { a as parseCoverRenderData } from "./parse-params-BpMT2Ilk.js";
import "./editor-image-fields-BA0nVUcU.js";
import { r as USER_PREFS_KEY_COVER_GENERATIONS } from "./cover-generation-prefs-CEWcs08T.js";
import "./template-config-BNvUm4v5.js";
import { t as USER_PREFS_KEY_REALTIME_DEBUGGER_PREFIX } from "./debugger-prefs-xlfdSKub.js";
import { t as CodeEditor } from "./CodeEditor-Z8DByNgB.js";
import { n as getActiveLaunchEvent, r as getLaunchEventBySlug, t as LAUNCH_EVENTS } from "./events-s0i9XY3r.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import "./postgres-sql-editor-actions-C3EmLCXJ.js";
import "./postgres-sql-editor-shortcuts-CXAI529H.js";
import "./mysql-sql-editor-actions-Bp-OLXJY.js";
import "./mysql-sql-editor-shortcuts-vHKpSCi0.js";
import { a as useInitLowPowerAnimationDecision, n as buildInitEventCalendarIcs } from "./init-calendar-D7kvXbWz.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { i as withPageTitleNameContext, n as pageTitle, t as getConsoleRouteIds } from "./page-title-D-d2GRz3.js";
import "./network-connectivity-D-2A27IF.js";
import { t as ErrorComponent } from "./Component-Fg6-kkbf.js";
import { a as getProjectIdFromPathname, c as setInitialLoaderShellGate, i as areInitialLoaderShellGatesReady, l as subscribeInitialLoaderShellGates, n as isOperatorAccount, o as projectRouteRequiresProjectSelectorGate, r as INITIAL_LOADER_SHELL_GATE, s as resetInitialLoaderShellGate } from "./CloudStatusBanner-CLph43RA.js";
import { a as isWebsiteAccessEnabled, c as shouldShowWebsiteAccessGate, n as WEBSITE_ACCESS_PASSWORD, r as hasWebsiteAccessCookie, s as setWebsiteAccessCookie, t as WEBSITE_ACCESS_COOKIE_NAME } from "./website-access-KX3BCndz.js";
import "./upload-manager-DVbeAVI1.js";
import { n as GlobalUploadProgress, r as useActiveUploads, t as Route$72 } from "./projects._projectId-f7MYC5Cv.js";
import "./ProgressBarRow-ec10tuU_.js";
import "./mock-data-bi-y2wwb.js";
import { o as getSeoRobotsMetaTags } from "./indexing-XiUq1KWH.js";
import "./InitWordmark-DLiURix2.js";
import "./org-promo-banner-D8oCrFdK.js";
import { t as InitOrgPromoBanner } from "./InitOrgPromoBanner-DRDIkoKp.js";
import "./date-utils-C_g8GS8c.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import "./use-mobile-C9thwzsE.js";
import "./feedback-BwuMSGir.js";
import "./support-BA-5OzxM.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import "./CloudMarkIcon-ChnstmGW.js";
import { n as getAllChangelogEntries } from "./content-NlXhGy_g.js";
import "./nav-badge-CqWauT26.js";
import "./registry-C4rxXMsK.js";
import "./secondary-sidebar-nav-F3D8GuLT.js";
import { t as MarketingScrollToTop } from "./MarketingScrollToTop-DPpEnmVv.js";
import { r as MarketingSiteLayoutProvider, t as NotFound } from "./NotFound-DJOfHnbz.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { c as getPostCategoryLabel, f as getPublicBlogPosts, h as resolveBlogAuthors } from "./content-BLzUgV00.js";
import "./content-BNDqilSS.js";
import { i as parseOgImageRenderData } from "./og-image-DdV5MU0-.js";
import { t as getDocsMetaTags } from "./route-meta-B5-isquS.js";
import { n as setLastLoginMethod } from "./auth-storage-DvcI7wFF.js";
import { t as Route$22 } from "./i._linkId-DupQpBsO.js";
import { t as Route$23 } from "./_generationId-Bx1eRQ0n.js";
import { t as Route$24 } from "./domains.continue-C-L514cu.js";
import { n as getPageMetaTags } from "./page-meta-DY0pOkK9.js";
import { c as INIT_PAGE_OG_IMAGE_PARAMS, i as initTicketStorageFileExists, l as getInitPageMetaTags, o as getInitTicketStorageFileViewUrl } from "./init-ticket-share-FwW0y3EN.js";
import { n as getMarketingPageMetaTags, t as getMarketingHomeOgImage } from "./route-meta-CfD66bzz.js";
import { n as isPricingHashTarget, r as resetPricingPageScrollContainers } from "./comparison-scroll-D9oVlYcd.js";
import { t as Route$48 } from "./domains-wqiNI2-0.js";
import { t as Route$51 } from "./community-CvKX6Wng.js";
import { t as Route$60 } from "./mfa-BwxyACyg.js";
import "./route-meta-C-NVlcqg.js";
import { t as Route$67 } from "./threads.index-BCkXpllc.js";
import "./route-meta-Ddegy6aO.js";
import { t as Route$68 } from "./integrations.index-CJ_o4uQ_.js";
import { t as BLOG_DEFAULT_DESCRIPTION } from "./seo-BkUvL66S.js";
import { t as CHANGELOG_DEFAULT_DESCRIPTION } from "./seo-DoyhjBE_.js";
import { n as CHANGELOG_RSS_PATH, r as buildRssFeed, t as BLOG_RSS_PATH } from "./rss-D80F0Df7.js";
import { t as Route$69 } from "./changelog.index-CpCgCvBj.js";
import "./route-meta-C9mfJlBj.js";
import { t as Route$70 } from "./blog.index-BAUcru6d.js";
import { t as Route$71 } from "./_generationId-B3e0uwYI.js";
import { t as Route$75 } from "./debug.org-setup-preview-BtB50C6Z.js";
import { t as Route$76 } from "./debug.oauth2-preview-Ac8xjelm.js";
import { t as Route$82 } from "./account.sessions-5ENhiM0w.js";
import { t as Route$83 } from "./account.security-DhZVX5Q1.js";
import { t as Route$85 } from "./account.payment-methods-Dp6mj4hY.js";
import { t as Route$86 } from "./account.billing-addresses-Dk4YWNQS.js";
import { t as Route$87 } from "./account.applications-lnv8hSaH.js";
import { t as Route$88 } from "./account.affiliates-CC3p-MAQ.js";
import { t as Route$89 } from "./threads._threadId-DCxPALVw.js";
import { t as Route$90 } from "./products._productId-gUL1TLRg.js";
import { t as Route$91 } from "./integrations._slug-j63SUavB.js";
import { t as Route$92 } from "./init._ticketId-DNUHWMMd.js";
import { t as Route$93 } from "./blog._page-DK9PE3S8.js";
import { t as Route$94 } from "./oauth2.device-DkvEOKHY.js";
import { t as Route$95 } from "./oauth2.consent-BGeHkwRk.js";
import { n as getDiagramNodeSurfaceColors, r as getDiagramEdgeLabelMetrics, t as getDiagramEdgeLabelSurfaceColors } from "./node-chrome-H37I5O3g.js";
import { t as resolveUsageChartFiltersFromPrefs } from "./usage-chart-filters-pmJA5qvl.js";
import { t as Route$110 } from "./projects._projectId.usage-DmML4BsE.js";
import { a as canAccessMysqlDatabaseSettings, c as canAccessProjectOAuth2Server, d as canAccessSiteSettings, i as canAccessFunctionSecuritySettings, n as canAccessBucketSecuritySettings, o as canAccessOrganizationDomains, s as canAccessPostgresDatabaseSettings, t as canAccessAuthSecuritySettings, u as canAccessProjectSettings } from "./console-rbac-loader-DvaSNNjB.js";
import { t as Route$115 } from "./projects._projectId.onboarding-DwMWCJ9z.js";
import { t as Route$122 } from "./projects._projectId.auth-DlgAPeo2.js";
import { t as Route$123 } from "./projects._projectId.apps-DsuMbKoV.js";
import { t as Route$124 } from "./projects._projectId.api-keys-D4RgOcA6.js";
import { t as Route$127 } from "./projects._projectId.activity-DqRiJkfG.js";
import { t as Route$142 } from "./threads.authors._authorId-BYorlO5O.js";
import { t as Route$143 } from "./changelog.entry._entry-Bo76g93i.js";
import { t as Route$144 } from "./blog.post._slug-bW9vc6zi.js";
import { t as Route$145 } from "./blog.category._category-BU_R4znm.js";
import { t as Route$146 } from "./blog.author._author-BYh9_VPT.js";
import { t as Route$150 } from "./agent.mcp.callback-DPnoxF4-.js";
import { n as getDefaultUsageCategoryId } from "./usage-nav-zbJs1J-k.js";
import { t as Route$156 } from "./projects._projectId.stores.index-Cn2xEv-i.js";
import { t as Route$158 } from "./projects._projectId.sites.index-D-gZrFsl.js";
import { t as Route$162 } from "./projects._projectId.functions.index-Dirs6ANP.js";
import { a as planSupportsDedicatedDatabases, i as getPlanDatabaseOperationOverage, n as getPlanDatabaseComputeCreditUsd, o as formatDedicatedDatabaseRegionUnavailableDescription, r as getPlanDatabaseOperationLimits, s as projectSupportsDedicatedDatabaseCompute, t as formatDatabaseOperationOverageRate } from "./dedicated-database-plan-D5hnUTFL.js";
import "./project-breakdown-resources-Bazw2C09.js";
import { n as marketplaceSearchSchema } from "./View-CHNsld1C.js";
import "./apps-logo-Bz8cZPsI.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import "./ResourceCard-DihVgMpG.js";
import "./MarketplaceAppBadges-CRO6NDF-.js";
import "./seo-BV_qhvZh.js";
import "./api-reference-DWWHtdM8.js";
import { t as Route$170 } from "./references._version.models._model-qJWacSoC.js";
import { t as Route$171 } from "./references._version._platform._service-Dh5lozM4.js";
import { t as Route$172 } from "./projects._projectId.usage._categoryId-Cg5N98Qv.js";
import { t as Route$185 } from "./projects._projectId.functions.templates-DfK5v_Jq.js";
import { t as Route$186 } from "./projects._projectId.functions.editor-C8xiyt4c.js";
import "./LanguageIcon-C0AhXLp0.js";
import "./RuntimeIcon-Dt6YMTy1.js";
import "./ResourceSearchPopover-bBzpMw-c.js";
import "./SearchableSelect-DPl0hr1b.js";
import { a as CHALLENGE_TTL_DEFAULT, d as FIREWALL_RATE_LIMIT_KEY_DEFAULT, f as FIREWALL_RATE_LIMIT_STRATEGIES, h as MAX_BUCKET_SIZE_MIN, i as CHALLENGE_DIFFICULTY_MIN, m as MAX_BUCKET_SIZE_MAX, n as CHALLENGE_DIFFICULTY_DEFAULT, o as CHALLENGE_TTL_MAX, p as FIREWALL_RATE_LIMIT_STRATEGY_DEFAULT, r as CHALLENGE_DIFFICULTY_MAX, s as CHALLENGE_TTL_MIN, u as FIREWALL_RATE_LIMIT_KEYS } from "./FirewallImpactChart-CpZTWDfN.js";
import "./UsageLogRetentionAlert-Ci9K5JH2.js";
import { t as ServerlessSpecPrice } from "./ServerlessSpecPrice-DQXfm9rK.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { i as supportsAdvancedBackupPolicies, n as getBackupPoliciesRemainingSlots, r as isBackupPoliciesAtPlanLimit, t as getBackupPoliciesPlanLimit } from "./backup-policy-plan-limits-CQc9cBuL.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { n as getNewDatabaseNameForType, r as isAutoFilledNewDatabaseName } from "./default-new-database-name-UR9sYnBp.js";
import { t as Route$199 } from "./projects._projectId.apps.add-CnIqxvUn.js";
import { t as Route$200 } from "./projects._projectId.analytics._websiteId-3HwP97MB.js";
import { t as Route$207 } from "./organizations._orgId.domains.transfer-in-BLl6W3LV.js";
import { t as Route$208 } from "./organizations._orgId.domains.buy-4T7h8yF5.js";
import { t as Route$210 } from "./organizations._orgId.apps._appId-D0YMUhvT.js";
import { t as Route$213 } from "./organizations._orgId.agent._agentId-C76WuOES.js";
import { t as Route$214 } from "./projects._projectId.stores._appId.index-BZiPnPBG.js";
import { t as Route$215 } from "./projects._projectId.storage._bucketId.index-CH-R5_Gx.js";
import { t as Route$218 } from "./projects._projectId.settings.migrations.index-DsAs7eYs.js";
import { t as Route$222 } from "./projects._projectId.messaging._messageId.index-DL2osmjI.js";
import { t as Route$224 } from "./projects._projectId.functions._functionId.index-CLSjd5Oe.js";
import { t as Route$225 } from "./organizations._orgId.marketplace._appId.index-DgKL-aC4.js";
import { t as Route$226 } from "./organizations._orgId.domains._domainId.index-BaqDIfog.js";
import { t as Route$235 } from "./projects._projectId.sites.create.deploying-D8DB88Lc.js";
import { t as Route$236 } from "./projects._projectId.sites.create.deploy-DLU1vkSf.js";
import { t as Route$240 } from "./projects._projectId.sites._siteId.logs-DCwKRiuE.js";
import { t as Route$244 } from "./projects._projectId.settings.domains.add-DEFRdpYa.js";
import { n as Route$245, t as Route$285 } from "./projects._projectId.messaging.topics._topicId.index-4b-Ng9QF.js";
import { t as Route$248 } from "./projects._projectId.messaging._messageId.settings-Hk8_TQOG.js";
import { t as Route$249 } from "./projects._projectId.functions.create.manual-CZwZ02gM.js";
import { t as Route$250 } from "./projects._projectId.functions.create.deploying-DLO-n5mp.js";
import { t as Route$251 } from "./projects._projectId.functions.create.deploy-J-3h4g6i.js";
import { t as Route$255 } from "./projects._projectId.functions._functionId.executions-BEmbRDzz.js";
import { t as Route$257 } from "./projects._projectId.databases.postgres._databaseId-CYm0o9jR.js";
import { t as Route$258 } from "./projects._projectId.databases.mysql._databaseId-CiVPb3XH.js";
import { i as throwRedirectTablesDbFromCollectionsChild, n as throwRedirectMysqlDbKind, r as throwRedirectPostgresDbKind, t as throwRedirectCollectionsDbFromTablesChild } from "./database-route-redirects-ECTN0PFz.js";
import { t as Route$259 } from "./projects._projectId.databases._dbKind._databaseId-BVYhL05n.js";
import { t as Route$260 } from "./projects._projectId.auth.users._userId-GF3cq_gx.js";
import { t as Route$261 } from "./projects._projectId.auth.teams._teamId-Dix724PP.js";
import { t as Route$269 } from "./organizations._orgId.domains._domainId.settings-Cajmpo0o.js";
import { t as Route$281 } from "./organizations._orgId.agent.automations._automationId-Avd6eTow.js";
import { t as Route$286 } from "./projects._projectId.messaging.providers._providerId.index-sM7Z76ZI.js";
import { t as Route$292 } from "./projects._projectId.sites.create.templates._template-D3yBBBVz.js";
import { t as Route$299 } from "./projects._projectId.messaging.topics._topicId.settings-7imFt8we.js";
import { t as Route$301 } from "./projects._projectId.messaging.providers._providerId.settings-BOWEvp7h.js";
import { t as Route$303 } from "./projects._projectId.functions.create.template._templateId-07zMF5Lq.js";
import { t as Route$304 } from "./projects._projectId.functions.create.repository._repository-OCVh6zXF.js";
import { t as prefetchPostgresShellData } from "./postgres-tab-route-loader-B--X8VvC.js";
import { t as Route$311 } from "./projects._projectId.databases.postgres._databaseId.visualizer-Cu47kfYK.js";
import { t as Route$312 } from "./projects._projectId.databases.postgres._databaseId.sql-D-zMPyxu.js";
import { t as Route$314 } from "./projects._projectId.databases.postgres._databaseId.roles-Cs5BOchP.js";
import { t as Route$315 } from "./projects._projectId.databases.postgres._databaseId.monitor-DXzkrTQI.js";
import { t as Route$317 } from "./projects._projectId.databases.postgres._databaseId.enums-BilXFXBO.js";
import { t as Route$318 } from "./projects._projectId.databases.postgres._databaseId.connections-B4Qo-ahH.js";
import { t as Route$320 } from "./projects._projectId.databases.postgres._databaseId.backups-B7wToULU.js";
import { t as prefetchMysqlShellData } from "./mysql-tab-route-loader-D18CXQ4h.js";
import { t as Route$321 } from "./projects._projectId.databases.mysql._databaseId.visualizer-KBINgJLe.js";
import { t as Route$322 } from "./projects._projectId.databases.mysql._databaseId.sql-BXlVP8e8.js";
import { t as Route$324 } from "./projects._projectId.databases.mysql._databaseId.roles-m186FgpT.js";
import { t as Route$325 } from "./projects._projectId.databases.mysql._databaseId.monitor-DLrkGBKV.js";
import { t as Route$326 } from "./projects._projectId.databases.mysql._databaseId.connections-DDz-dBIE.js";
import { t as Route$328 } from "./projects._projectId.databases.mysql._databaseId.backups-DyLAW9Di.js";
import { t as Route$329 } from "./projects._projectId.databases._dbKind._databaseId.visualizer-B2XJLBCb.js";
import { t as Route$331 } from "./projects._projectId.databases._dbKind._databaseId.settings-BeMfJGG0.js";
import { t as Route$333 } from "./projects._projectId.databases._dbKind._databaseId.monitor-DsBWxknu.js";
import { t as Route$334 } from "./projects._projectId.databases._dbKind._databaseId.export-import-DG-k-rhO.js";
import { t as Route$338 } from "./projects._projectId.databases._dbKind._databaseId.backups-DYUF4Fmb.js";
import { t as Route$345 } from "./projects._projectId.auth.teams._teamId.members-C616d2sz.js";
import { t as Route$346 } from "./projects._projectId.auth.teams._teamId.activity-cvzH8VLE.js";
import { t as Route$352 } from "./projects._projectId.databases._dbKind._databaseId.overview.index-CtMvabBO.js";
import { t as Route$353 } from "./projects._projectId.sites.create.repositories._installationId._repositoryId-CpvhNgxA.js";
import { t as prefetchPostgresTableLayoutData } from "./postgres-table-route-loader-Bhk0qI0O.js";
import { t as prefetchMysqlTableLayoutData } from "./mysql-table-route-loader-BP-PeWrP.js";
import { n as canConfigureDedicatedReplication } from "./database-compute-CWpwADg-.js";
import { t as Route$376 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.settings-B7IF9z-Z.js";
import { t as Route$377 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.security-BarwFdGW.js";
import { t as Route$378 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.rows-C7mv5yPO.js";
import { t as Route$379 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.indexes-BY0uq358.js";
import { t as Route$380 } from "./projects._projectId.databases.postgres._databaseId.tables._tableId.columns-CJc3tI2F.js";
import { t as Route$381 } from "./projects._projectId.databases.mysql._databaseId.tables._tableId.settings-DbTIy_Wy.js";
import { t as Route$382 } from "./projects._projectId.databases.mysql._databaseId.tables._tableId.security-zf4pjxE7.js";
import { t as Route$383 } from "./projects._projectId.databases.mysql._databaseId.tables._tableId.rows-Cc9eQ2Vf.js";
import { t as Route$384 } from "./projects._projectId.databases.mysql._databaseId.tables._tableId.indexes-DV8jmDFS.js";
import { t as Route$385 } from "./projects._projectId.databases.mysql._databaseId.tables._tableId.columns-BjVNxemH.js";
import { t as Route$387 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.settings-DTEp_eRa.js";
import { t as Route$388 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.security-BJtNQyy1.js";
import { t as Route$389 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.rows-BhEolDyl.js";
import { t as Route$391 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.indexes-CZJj3WiX.js";
import { t as Route$393 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.documents-DV5RI17N.js";
import { t as Route$396 } from "./projects._projectId.databases._dbKind._databaseId.tables._tableId.columns-Dbo4nyYh.js";
import { t as Route$399 } from "./projects._projectId.databases._dbKind._databaseId.collections._collectionId.settings-keWw0rq5.js";
import { t as Route$400 } from "./projects._projectId.databases._dbKind._databaseId.collections._collectionId.security-2CjqbLzB.js";
import { t as Route$403 } from "./projects._projectId.databases._dbKind._databaseId.collections._collectionId.indexes-DHdjai5V.js";
import { t as Route$405 } from "./projects._projectId.databases._dbKind._databaseId.collections._collectionId.documents-DYimwgUh.js";
import { t as Route$408 } from "./projects._projectId.databases._dbKind._databaseId.collections._collectionId.columns-BbhOxl4l.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CatchBoundary, HeadContent, ScriptOnce, Scripts, createFileRoute, createRootRouteWithContext, createRouter, isRedirect, lazyRouteComponent, redirect, useLocation, useMatches, useNavigate, useParams, useRouter, useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { AppwriteException, BackupServices, ID, ProjectEmailTemplateId, ProjectEmailTemplateLocale, Query, SmtpEncryption, WafRuleAction } from "@appwrite.io/console";
import sharp from "sharp";
import { QueryClient, QueryClientProvider, dehydrate, hydrate, useIsFetching, useIsMutating, useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { Toaster, toast } from "sonner";
import { AlertCircle, AlertTriangle, Bell, Boxes, Braces, Brain, Bug, CalendarDays, Check, ChevronLeft, ChevronRight, Cloud, Code2, Columns2, Copy, Cpu, Database, ExternalLink, FileText, FlaskConical, Folder, FolderKanban, Globe, HardDrive, HeartHandshake, History, Image, ImageIcon, KeyRound, Languages, Layers, Link2, Loader2, Mail, Megaphone, MessageSquareQuote, Minus, Monitor, MonitorSmartphone, Network, Palette, Phone, Plus, RefreshCw, RotateCcw, Search, Server, Settings, ShieldCheck, Sparkles, Table, Table2, Terminal, Ticket, Trash2, User, Users as Users$1, UsersRound, Variable, X, Zap } from "lucide-react";
import { z } from "zod";
import { ThemeProvider, useTheme } from "next-themes";
import { Branch } from "@radix-ui/react-dismissable-layer";
import { AnimatePresence, motion } from "motion/react";
function getContext() {
	return { queryClient: new QueryClient({ defaultOptions: { queries: {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		retry: false,
		staleTime: 30 * 1e3,
		gcTime: 0
	} } }) };
}
function Provider({ children, queryClient }) {
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children
	});
}
function setupQueryClientRouterIntegration(router, queryClient) {
	if (router.isServer) {
		const ogDehydrate = router.options.dehydrate;
		let renderCleanupRegistered = false;
		const registerRenderCleanup = () => {
			if (renderCleanupRegistered || !router.serverSsr) return;
			renderCleanupRegistered = true;
			router.serverSsr.onRenderFinished(() => {
				queryClient.clear();
			});
		};
		router.options.dehydrate = async () => {
			registerRenderCleanup();
			const ogDehydrated = await ogDehydrate?.();
			const dehydratedQueryClient = dehydrate(queryClient);
			return {
				...ogDehydrated,
				...dehydratedQueryClient.queries.length > 0 ? { dehydratedQueryClient } : {}
			};
		};
		return;
	}
	const ogHydrate = router.options.hydrate;
	router.options.hydrate = async (dehydrated) => {
		await ogHydrate?.(dehydrated);
		if (dehydrated.dehydratedQueryClient) hydrate(queryClient, dehydrated.dehydratedQueryClient);
	};
}
var styles_default = "/assets/styles-o02DFO-B.css";
const getSsrClientIpSnapshot = () => {
	try {
		const runtimeIp = getRequestIP()?.trim() || null;
		return getClientIpSnapshotFromRequest(getRequest(), runtimeIp);
	} catch {
		return null;
	}
};
function getSsrClientIpScript() {
	return `window.${SSR_CLIENT_IP_WINDOW_KEY}=${JSON.stringify(getSsrClientIpSnapshot())}`;
}
var TOAST_INLINE_END_OFFSET = "1rem";
var toasterInlineEndStyle = {
	right: "auto",
	left: "auto",
	insetInlineStart: "auto",
	insetInlineEnd: TOAST_INLINE_END_OFFSET
};
var toastInlineEndStyle = {
	right: "auto",
	left: "auto",
	insetInlineStart: "auto",
	insetInlineEnd: 0
};
var Toaster$1 = ({ style, toastOptions, dir, offset, ...props }) => {
	const { theme = "system" } = useTheme();
	const pageDirection = usePageDirection();
	return /* @__PURE__ */ jsx(Toaster, {
		theme,
		dir: dir ?? pageDirection,
		className: "toaster toaster-at-inline-end group",
		offset: offset ?? TOAST_INLINE_END_OFFSET,
		style: {
			...toasterInlineEndStyle,
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			...style
		},
		toastOptions: {
			...toastOptions,
			style: {
				...toastInlineEndStyle,
				...toastOptions?.style
			}
		},
		...props
	});
};
var AUTH_ROUTE_PATHNAMES$1 = new Set([
	"/sign-in",
	"/sign-up",
	"/recovery",
	"/mfa",
	"/join",
	"/sign-out",
	"/verify-email"
]);
function isDocsPreviewBlockedPath(pathname) {
	return AUTH_ROUTE_PATHNAMES$1.has(pathname);
}
function DocsPreviewProvider({ children }) {
	const location = useLocation();
	const { showDocs, hideRightPane } = useConsoleRightPane();
	const isAuthBlocked = useMemo(() => isDocsPreviewBlockedPath(location.pathname), [location.pathname]);
	const isPreviewAllowed = useMemo(() => !isAuthBlocked && isConsoleDocsPreviewPath(location.pathname), [isAuthBlocked, location.pathname]);
	const [isOpen, setIsOpen] = useState(false);
	const [slug, setSlug] = useState(null);
	const [view, setView] = useState("article");
	const openDocsPreview = useCallback((nextSlug, options) => {
		if (!isPreviewAllowed) return;
		if (isPartnersDocsSlug(nextSlug) && !isPartnersDocsEnabled()) return;
		if (isFirewallDocsSlug(nextSlug) && !isFirewallDocsEnabled()) return;
		if (isAgentDocsSlug(nextSlug) && !isAgentDocsEnabled()) return;
		showDocs();
		setSlug(nextSlug);
		setView(resolveDocsPreviewView(nextSlug, options?.view));
		setIsOpen(true);
	}, [isPreviewAllowed, showDocs]);
	const closeDocsPreview = useCallback(() => {
		setIsOpen(false);
		setSlug(null);
		setView("article");
		hideRightPane();
	}, [hideRightPane]);
	useEffect(() => {
		if (!isPreviewAllowed) {
			if (isOpen) {
				setIsOpen(false);
				setSlug(null);
				setView("article");
			}
			hideRightPane();
		}
	}, [
		hideRightPane,
		isPreviewAllowed,
		isOpen
	]);
	const value = useMemo(() => ({
		isOpen,
		slug,
		view,
		openDocsPreview,
		closeDocsPreview
	}), [
		isOpen,
		slug,
		view,
		openDocsPreview,
		closeDocsPreview
	]);
	return /* @__PURE__ */ jsx(DocsPreviewContext.Provider, {
		value,
		children
	});
}
function DocsContentHmrRefresh() {
	const queryClient = useQueryClient();
	useEffect(() => {
		const refresh = () => {
			queryClient.invalidateQueries({ queryKey: ["docs", "page"] });
		};
		window.addEventListener(DOCS_CONTENT_HMR_EVENT, refresh);
		return () => {
			window.removeEventListener(DOCS_CONTENT_HMR_EVENT, refresh);
		};
	}, [queryClient]);
	return null;
}
function DocsPreviewInlineToc({ items, scrollContainerRef }) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");
	useEffect(() => {
		if (items.length === 0) return;
		const root = scrollContainerRef?.current ?? null;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActiveId(visible[0].target.id);
		}, {
			root,
			rootMargin: "-12% 0px -55% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const item of items) {
			const element = document.getElementById(item.id);
			if (element) observer.observe(element);
		}
		return () => observer.disconnect();
	}, [items, scrollContainerRef]);
	if (items.length === 0) return null;
	const handleTocClick = (event, id) => {
		event.preventDefault();
		const target = document.getElementById(id);
		const container = scrollContainerRef?.current;
		if (!target || !container) {
			target?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			return;
		}
		const targetTop = target.getBoundingClientRect().top;
		const containerTop = container.getBoundingClientRect().top;
		container.scrollTo({
			top: container.scrollTop + targetTop - containerTop - 12,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": "Table of contents",
		className: "mt-5",
		children: [/* @__PURE__ */ jsx("p", {
			className: DOCS_TOC_SECTION_TITLE_CLASS,
			children: "On this page"
		}), /* @__PURE__ */ jsx("ul", {
			className: "mt-2 space-y-0.5",
			children: items.map((item) => {
				const label = `${item.step ? `${item.step}. ` : ""}${item.label}`;
				return /* @__PURE__ */ jsx("li", {
					className: "min-w-0",
					children: /* @__PURE__ */ jsx("a", {
						href: `#${item.id}`,
						title: label,
						onClick: (event) => handleTocClick(event, item.id),
						className: cn(docsTocLinkClassName(activeId === item.id), item.level > 2 && "ps-4"),
						children: label
					})
				}, item.id);
			})
		})]
	});
}
var PREVIEW_DESCRIPTION_CLASS = "mt-2.5 max-w-2xl text-[13px] leading-[1.6] text-muted-foreground @[480px]:text-[14px]";
function DocsPreviewArticleHeader({ title, description, readingTimeMinutes, slug, toc = [], scrollContainerRef, actions, showActions = true, className }) {
	const headerActions = actions ?? (showActions ? /* @__PURE__ */ jsx(DocsPageHeaderActions, {
		slug,
		buttonClassName: "h-8 text-[12px] @[480px]:h-9 @[480px]:text-[13px]"
	}) : null);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("mb-6", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsxs("h1", {
							className: docsPreviewPrimaryTitleClass,
							children: [title, /* @__PURE__ */ jsx("span", {
								className: "text-[var(--brand-cta)]",
								children: "_"
							})]
						}),
						description ? /* @__PURE__ */ jsx("p", {
							className: PREVIEW_DESCRIPTION_CLASS,
							children: description
						}) : null,
						readingTimeMinutes ? /* @__PURE__ */ jsxs("p", {
							className: "mt-2.5 text-[12px] text-muted-foreground",
							children: [readingTimeMinutes, " min read"]
						}) : null
					]
				}), headerActions ? /* @__PURE__ */ jsx("div", {
					className: "hidden shrink-0 items-center gap-2 @[560px]:flex",
					children: headerActions
				}) : null]
			}),
			headerActions ? /* @__PURE__ */ jsx("div", {
				className: "mt-4 flex flex-wrap items-center gap-2 @[560px]:hidden",
				children: headerActions
			}) : null,
			/* @__PURE__ */ jsx(DocsPreviewInlineToc, {
				items: toc,
				scrollContainerRef
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 h-px w-full bg-border",
				"aria-hidden": true
			})
		]
	});
}
var PREVIEW_MENU_DESCRIPTION_CLASS = "mt-2.5 max-w-2xl text-[13px] leading-[1.6] text-muted-foreground @[480px]:text-[14px]";
var PREVIEW_MENU_GROUP_CLASS = "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground";
var PREVIEW_MENU_LINK_CLASS = cn("block rounded-lg border border-border bg-card/45 px-3 py-2.5 text-[13px] font-medium text-foreground", "transition-colors hover:bg-accent/15");
function PreviewMenuHeader({ title, description }) {
	return /* @__PURE__ */ jsxs("header", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ jsxs("h1", {
				className: docsPreviewPrimaryTitleClass,
				children: [title, /* @__PURE__ */ jsx("span", {
					className: "text-[var(--brand-cta)]",
					children: "_"
				})]
			}),
			description ? /* @__PURE__ */ jsx("p", {
				className: PREVIEW_MENU_DESCRIPTION_CLASS,
				children: description
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 h-px w-full bg-border",
				"aria-hidden": true
			})
		]
	});
}
function QuickStartsPreviewMenu() {
	const meta = getDocsPreviewMenuMeta("quick-starts");
	return /* @__PURE__ */ jsxs("article", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx(PreviewMenuHeader, {
			title: meta.title,
			description: meta.description
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-8",
			children: QUICK_STARTS_HUB_CATEGORIES.map((category) => /* @__PURE__ */ jsxs("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsx("h2", {
					className: PREVIEW_MENU_GROUP_CLASS,
					children: category.title
				}), /* @__PURE__ */ jsx("ul", {
					className: cn("grid gap-2", docsGridQuickStarts),
					children: category.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DocsRouteLink, {
						href: item.href,
						className: PREVIEW_MENU_LINK_CLASS,
						children: /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40",
								children: /* @__PURE__ */ jsx("img", {
									src: item.iconSrc,
									alt: "",
									className: cn("size-3.5", PUBLIC_ICON_MUTED_CLASSES)
								})
							}), item.title]
						})
					}) }, item.href))
				})]
			}, category.title))
		})]
	});
}
function TutorialsPreviewMenu() {
	const categories = getTutorialsHubCategories();
	const meta = getDocsPreviewMenuMeta("tutorials");
	return /* @__PURE__ */ jsxs("article", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx(PreviewMenuHeader, {
			title: meta.title,
			description: meta.description
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-8",
			children: categories.map((category) => /* @__PURE__ */ jsxs("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsx("h2", {
					className: PREVIEW_MENU_GROUP_CLASS,
					children: category.title
				}), /* @__PURE__ */ jsx("ul", {
					className: cn("grid gap-2", docsGridTwoCol),
					children: category.tutorials.map((tutorial) => /* @__PURE__ */ jsx("li", { children: tutorial.draft ? /* @__PURE__ */ jsxs("div", {
						"aria-disabled": true,
						className: cn(PREVIEW_MENU_LINK_CLASS, "cursor-default opacity-70 hover:bg-card/45"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ jsx("span", { children: tutorial.framework }), /* @__PURE__ */ jsx(Badge, {
								variant: "inactive",
								className: "text-[10px] shrink-0",
								children: "Coming soon"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] font-normal text-muted-foreground",
							children: tutorial.title
						})]
					}) : /* @__PURE__ */ jsxs(DocsRouteLink, {
						href: tutorial.href,
						className: PREVIEW_MENU_LINK_CLASS,
						children: [/* @__PURE__ */ jsx("span", { children: tutorial.framework }), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] font-normal text-muted-foreground",
							children: tutorial.title
						})]
					}) }, tutorial.href))
				})]
			}, category.title))
		})]
	});
}
function sectionNavItemPreviewView(href, sectionPrefix) {
	if (docsHrefToPreviewSlug(href) === sectionPrefix) return "article";
}
function SectionPreviewMenu({ slug, scrollContainerRef }) {
	const config = DOCS_SECTION_NAVS.find((entry) => entry.prefix === slug);
	if (!config) return null;
	const meta = getDocsPreviewMenuMeta(slug);
	const { data: overviewPage } = useQuery({
		queryKey: [
			"docs",
			"page",
			slug
		],
		queryFn: () => getDocsPage(slug),
		enabled: isClientQueryEnabled && slug === config.prefix,
		staleTime: 300 * 1e3,
		retry: false
	});
	if (overviewPage) return /* @__PURE__ */ jsxs("article", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ jsx(DocsPreviewArticleHeader, {
				title: overviewPage.meta.title,
				description: overviewPage.meta.description,
				readingTimeMinutes: overviewPage.meta.readingTimeMinutes,
				slug,
				toc: overviewPage.toc,
				scrollContainerRef
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-8 min-w-0",
				children: /* @__PURE__ */ jsx(DocsMarkdown, {
					content: overviewPage.content,
					compact: true
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-6 h-px w-full bg-border",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx(SectionPreviewNav, {
				config,
				slug
			})
		]
	});
	return /* @__PURE__ */ jsxs("article", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx(PreviewMenuHeader, {
			title: meta?.title ?? config.parent.label,
			description: meta?.description
		}), /* @__PURE__ */ jsx(SectionPreviewNav, {
			config,
			slug
		})]
	});
}
function SectionPreviewNav({ config, slug }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": config.parent.label,
		className: "space-y-6",
		children: config.navigation.map((entry, index) => isDocsNavGroup(entry) ? /* @__PURE__ */ jsxs("section", {
			className: "space-y-2",
			children: [entry.label ? /* @__PURE__ */ jsx("h2", {
				className: PREVIEW_MENU_GROUP_CLASS,
				children: entry.label
			}) : null, /* @__PURE__ */ jsx("ul", {
				className: "space-y-1",
				children: entry.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DocsRouteLink, {
					href: item.href,
					className: PREVIEW_MENU_LINK_CLASS,
					previewView: sectionNavItemPreviewView(item.href, slug),
					children: item.label
				}) }, item.href))
			})]
		}, entry.label ?? index) : /* @__PURE__ */ jsx("ul", {
			className: "space-y-1",
			children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DocsRouteLink, {
				href: entry.href,
				className: PREVIEW_MENU_LINK_CLASS,
				previewView: sectionNavItemPreviewView(entry.href, slug),
				children: entry.label
			}) })
		}, entry.href))
	});
}
function DocsPreviewMenu({ slug, scrollContainerRef }) {
	if (!canShowDocsPreviewMenu(slug)) return null;
	if (slug === "quick-starts") return /* @__PURE__ */ jsx(QuickStartsPreviewMenu, {});
	if (slug === "tutorials") return /* @__PURE__ */ jsx(TutorialsPreviewMenu, {});
	return /* @__PURE__ */ jsx(SectionPreviewMenu, {
		slug,
		scrollContainerRef
	});
}
function getDocsPreviewUrl(slug) {
	return slug ? buildConsoleUrl(`/docs/${slug}`) : buildConsoleUrl("/docs/");
}
function DocsPreviewContent() {
	const t = useT();
	const { isOpen, slug, view, openDocsPreview, closeDocsPreview } = useDocsPreview();
	const { features } = useConsoleProfile();
	const contentRef = useRef(null);
	const partnersDocsEnabled = features.partnersDocs;
	const firewallDocsEnabled = features.firewall;
	const agentDocsEnabled = features.agent;
	const showMenu = slug !== null && slug !== "" && view === "menu" && canShowDocsPreviewMenu(slug) && (!isPartnersDocsSlug(slug) || partnersDocsEnabled) && (!isFirewallDocsSlug(slug) || firewallDocsEnabled) && (!isAgentDocsSlug(slug) || agentDocsEnabled);
	const { data: page, isLoading, isError } = useQuery({
		queryKey: [
			"docs",
			"page",
			slug
		],
		queryFn: () => getDocsPage(slug),
		enabled: isOpen && slug !== null && slug !== "" && !showMenu && (!isPartnersDocsSlug(slug) || partnersDocsEnabled) && (!isFirewallDocsSlug(slug) || firewallDocsEnabled) && (!isAgentDocsSlug(slug) || agentDocsEnabled) && isClientQueryEnabled,
		staleTime: 300 * 1e3,
		retry: false
	});
	useEffect(() => {
		contentRef.current?.scrollTo({
			top: 0,
			behavior: "auto"
		});
	}, [slug, view]);
	const navigatePreviewSlug = useCallback((nextSlug, nextView = "article") => {
		if (isPartnersDocsSlug(nextSlug) && !partnersDocsEnabled) {
			openDocsPreview("", { view: "article" });
			return;
		}
		if (isFirewallDocsSlug(nextSlug) && !firewallDocsEnabled) {
			openDocsPreview("", { view: "article" });
			return;
		}
		if (isAgentDocsSlug(nextSlug) && !agentDocsEnabled) {
			openDocsPreview("", { view: "article" });
			return;
		}
		const resolvedView = resolveDocsPreviewView(nextSlug, nextView);
		if (nextSlug === slug && resolvedView === view) return;
		openDocsPreview(nextSlug, { view: nextView });
	}, [
		agentDocsEnabled,
		firewallDocsEnabled,
		openDocsPreview,
		partnersDocsEnabled,
		slug,
		view
	]);
	useEffect(() => {
		if (!isOpen || slug === null) return;
		if (!partnersDocsEnabled && isPartnersDocsSlug(slug)) {
			openDocsPreview("", { view: "article" });
			return;
		}
		if (!firewallDocsEnabled && isFirewallDocsSlug(slug)) {
			openDocsPreview("", { view: "article" });
			return;
		}
		if (!agentDocsEnabled && isAgentDocsSlug(slug)) openDocsPreview("", { view: "article" });
	}, [
		agentDocsEnabled,
		firewallDocsEnabled,
		isOpen,
		openDocsPreview,
		partnersDocsEnabled,
		slug
	]);
	const handleOpenInNewTab = useCallback(() => {
		if (slug === null) return;
		openInNewTab(getDocsPreviewUrl(slug));
	}, [slug]);
	const handleOpenInDocs = useCallback(() => {
		if (slug === null) return;
		openInNewTab(getDocsPreviewUrl(slug));
	}, [slug]);
	const breadcrumbItems = useMemo(() => slug === null ? [] : getDocsPageBreadcrumbItems(slug, void 0, { previewView: showMenu ? "menu" : "article" }), [slug, showMenu]);
	const handleBreadcrumbSelect = useCallback((itemSlug, itemView) => {
		if (itemSlug === null) return;
		navigatePreviewSlug(itemSlug, itemView ?? "article");
	}, [navigatePreviewSlug]);
	const handleContentClick = useCallback((event) => {
		const target = event.target;
		if (!(target instanceof Element)) return;
		const anchor = target.closest("a[href]");
		if (!(anchor instanceof HTMLAnchorElement)) return;
		const href = anchor.getAttribute("href");
		if (!href || href.startsWith("#")) return;
		const previewSlug = docsHrefToPreviewSlug(href);
		if (previewSlug === null) return;
		event.preventDefault();
		navigatePreviewSlug(previewSlug, "article");
	}, [navigatePreviewSlug]);
	if (!isOpen || slug === null) return null;
	if (!partnersDocsEnabled && isPartnersDocsSlug(slug)) return null;
	if (!firewallDocsEnabled && isFirewallDocsSlug(slug)) return null;
	const isDocsHome = slug === "";
	const isPartnersHome = slug === "partners" && partnersDocsEnabled;
	const isHubHome = isDocsHome || isPartnersHome;
	return /* @__PURE__ */ jsx(DocsPreviewNavigationProvider, {
		navigateToSlug: navigatePreviewSlug,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn(DOCS_CONTAINER, "flex h-full min-h-0 flex-col"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-14 min-h-14 shrink-0 items-center justify-between gap-3 border-b border-border px-3",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => navigatePreviewSlug(""),
						className: "min-w-0 truncate text-start text-[13px] font-semibold text-foreground transition-colors hover:text-foreground/80",
						children: t("Docs")
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							className: "h-8 px-2 text-[12px]",
							onClick: handleOpenInNewTab,
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("Open in new tab")]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: closeDocsPreview,
							className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							"aria-label": t("Close documentation preview"),
							children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
						})]
					})]
				}),
				!isHubHome && breadcrumbItems.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: cn("shrink-0 border-b border-border py-2.5", docsContentPaddingX),
					children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, {
						className: "flex-nowrap gap-1 text-[11px] @[480px]:text-[12px]",
						children: breadcrumbItems.map((item, index) => {
							const isLast = index === breadcrumbItems.length - 1;
							const isClickable = !isLast && item.slug !== null && (item.slug !== slug || item.view === "menu");
							return /* @__PURE__ */ jsxs("span", {
								className: "contents",
								children: [index > 0 ? /* @__PURE__ */ jsx(BreadcrumbSeparator, { className: "shrink-0" }) : null, /* @__PURE__ */ jsx(BreadcrumbItem, {
									className: "min-w-0",
									children: isLast ? /* @__PURE__ */ jsx(BreadcrumbPage, {
										className: "truncate font-normal",
										children: item.label
									}) : isClickable ? /* @__PURE__ */ jsx(BreadcrumbLink, {
										asChild: true,
										children: /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => handleBreadcrumbSelect(item.slug, item.view),
											className: "max-w-[9rem] cursor-pointer truncate text-start @[480px]:max-w-[11rem]",
											children: item.label
										})
									}) : /* @__PURE__ */ jsx("span", {
										className: "max-w-[9rem] truncate text-muted-foreground @[480px]:max-w-[11rem]",
										children: item.label
									})
								})]
							}, `${item.label}-${index}`);
						})
					}) })
				}) : null,
				/* @__PURE__ */ jsx("div", {
					ref: contentRef,
					onClick: handleContentClick,
					className: cn("min-h-0 w-full min-w-0 flex-1 overflow-y-auto", isHubHome ? "py-0" : "py-6", docsContentPaddingX),
					children: isDocsHome ? /* @__PURE__ */ jsx(DocsHome, { variant: "preview" }) : isPartnersHome ? /* @__PURE__ */ jsx(DocsPartnersHome, { variant: "preview" }) : showMenu ? /* @__PURE__ */ jsx(DocsPreviewMenu, {
						slug,
						scrollContainerRef: contentRef
					}) : isLoading ? /* @__PURE__ */ jsxs("div", {
						className: "flex h-full min-h-[240px] items-center justify-center text-[13px] text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Loader2, { className: "me-2 h-4 w-4 animate-spin" }), t("Loading documentation...")]
					}) : isError || !page ? /* @__PURE__ */ jsxs("div", {
						className: "flex h-full min-h-[240px] flex-col items-center justify-center gap-3 px-4 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Could not load this documentation page.")
						}), /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							onClick: handleOpenInNewTab,
							children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 h-3.5 w-3.5" }), t("Open in new tab")]
						})]
					}) : /* @__PURE__ */ jsxs("article", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx(DocsPreviewArticleHeader, {
							title: page.meta.title,
							description: page.meta.description,
							readingTimeMinutes: page.meta.readingTimeMinutes,
							slug: page.meta.slug,
							toc: page.toc,
							scrollContainerRef: contentRef
						}), /* @__PURE__ */ jsx(DocsMarkdown, {
							content: page.content,
							compact: true
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: cn("flex shrink-0 items-center border-t border-border bg-background", docsContentPaddingX),
					style: {
						height: 54,
						minHeight: 54,
						maxHeight: 54
					},
					children: /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						className: "h-8 w-full text-[13px]",
						onClick: handleOpenInDocs,
						children: t("Open in docs")
					})
				})
			]
		})
	});
}
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
	return AUTH_ROUTE_PATHNAMES.has(pathname) || isAgentPagePath(pathname);
}
function ConsoleRightPane() {
	const location = useLocation();
	const { features } = useConsoleProfile();
	const { account } = useAuth();
	const { widthPx, setWidthPx } = useRightPaneWidth(account);
	const { activeContent } = useConsoleRightPane();
	const panelRef = useRef(null);
	const [isResizing, setIsResizing] = useState(false);
	const [displayContent, setDisplayContent] = useState(null);
	const [expanded, setExpanded] = useState(false);
	const isMarketingPage$1 = useIsMarketingPage();
	const isConsolePath = useMemo(() => isConsoleRightPanePath(location.pathname), [location.pathname]);
	const isAgentBlocked = useMemo(() => isAgentBlockedPath(location.pathname), [location.pathname]);
	const resolvedContent = isMarketingPage$1 || !isConsolePath ? null : activeContent === "agent" && features.agent && !isAgentBlocked ? "agent" : activeContent === "docs" ? "docs" : null;
	useEffect(() => {
		if (resolvedContent) {
			setDisplayContent(resolvedContent);
			let innerFrame = 0;
			const outerFrame = window.requestAnimationFrame(() => {
				innerFrame = window.requestAnimationFrame(() => {
					setExpanded(true);
				});
			});
			return () => {
				window.cancelAnimationFrame(outerFrame);
				window.cancelAnimationFrame(innerFrame);
			};
		}
		setExpanded(false);
		const timer = window.setTimeout(() => {
			setDisplayContent(null);
		}, 320);
		return () => window.clearTimeout(timer);
	}, [resolvedContent]);
	const handleMouseDown = useCallback((event) => {
		event.preventDefault();
		setBodyResizeDragActive(true);
		setIsResizing(true);
	}, []);
	useEffect(() => {
		if (!isResizing) return;
		const handleMouseMove = (event) => {
			const isRtl = isRtlElement(document.documentElement);
			setWidthPx(clampRightPaneWidthPx(inlineEndPaneWidthFromPointer(event.clientX, window.innerWidth, isRtl)));
		};
		const handleMouseUp = () => {
			setBodyResizeDragActive(false);
			setIsResizing(false);
		};
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			setBodyResizeDragActive(false);
		};
	}, [isResizing, setWidthPx]);
	if (!displayContent) return null;
	return /* @__PURE__ */ jsx("div", {
		ref: panelRef,
		style: {
			width: expanded ? widthPx : 0,
			transitionDuration: isResizing ? "0ms" : `320ms`
		},
		className: cn("relative z-[111] h-full shrink-0 overflow-hidden", !isResizing && "transition-[width] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"),
		"aria-hidden": !expanded,
		children: /* @__PURE__ */ jsxs("div", {
			style: { width: widthPx },
			className: cn("relative flex h-full flex-col border-s border-border bg-background", displayContent === "agent" && "[&_button:not(:disabled)]:cursor-pointer", !expanded && "pointer-events-none"),
			children: [/* @__PURE__ */ jsx("div", {
				onMouseDown: handleMouseDown,
				style: resizeHandleOnInlineStartEdgeStyle(),
				className: cn("absolute top-0 z-20 flex h-full w-1.5 cursor-col-resize items-center justify-center transition-colors hover:bg-primary/20 dark:hover:bg-sidebar-accent/60", isResizing && "bg-primary/30 dark:bg-sidebar-accent/70"),
				"aria-hidden": true
			}), displayContent === "docs" ? /* @__PURE__ */ jsx(DocsPreviewContent, {}) : /* @__PURE__ */ jsx(AgentPanelContent, {})]
		})
	});
}
function PromoBannerComponent({ banners, onDismiss, onDismissAll }) {
	const t = useT();
	const [expandedIndex, setExpandedIndex] = useState(0);
	const { features } = useConsoleProfile();
	const filteredBanners = useMemo(() => banners.filter((b) => b.ctaUrl !== "/ai-assistant" || features.agent), [banners, features.agent]);
	if (filteredBanners.length === 0) return null;
	const visibleBanners = filteredBanners.slice(0, 3);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-4 start-4 z-50",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [visibleBanners.map((banner, index) => {
				const isExpanded = index === expandedIndex;
				const stackOffset = (visibleBanners.length - 1 - index) * 12;
				const stackScale = 1 - (visibleBanners.length - 1 - index) * .04;
				return /* @__PURE__ */ jsx("div", {
					className: cn("absolute bottom-0 start-0 w-[320px] transition-all duration-300 ease-out", isExpanded ? "z-30" : index === 1 ? "z-20" : "z-10", !isExpanded && "cursor-pointer hover:translate-y-[-2px]"),
					style: {
						transform: `translateY(-${stackOffset}px) scale(${stackScale})`,
						transformOrigin: "bottom center"
					},
					onClick: () => !isExpanded && setExpandedIndex(index),
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("overflow-hidden rounded-lg border border-border bg-card", !isExpanded && "opacity-95"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-[140px] overflow-hidden bg-muted",
							children: [banner.image ? /* @__PURE__ */ jsx("img", {
								src: banner.image,
								alt: "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ jsx("div", {
								className: "flex h-full w-full items-center justify-center",
								children: /* @__PURE__ */ jsx(ImageIcon, { className: "h-10 w-10 text-muted-foreground/40" })
							}), isExpanded && /* @__PURE__ */ jsx("button", {
								onClick: (e) => {
									e.stopPropagation();
									onDismiss(banner.id);
									if (expandedIndex >= filteredBanners.length - 1) setExpandedIndex(Math.max(0, filteredBanners.length - 2));
								},
								className: "absolute end-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground",
								children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "text-[15px] font-semibold text-foreground",
									children: t(banner.title)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
									children: t(banner.description)
								}),
								isExpanded && banner.ctaText && /* @__PURE__ */ jsx("button", {
									className: "mt-3 w-full rounded-md bg-primary py-2.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]",
									onClick: (e) => {
										e.stopPropagation();
										if (banner.ctaUrl) window.location.href = banner.ctaUrl;
									},
									children: t(banner.ctaText)
								})
							]
						})]
					})
				}, banner.id);
			}), /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none w-[320px]",
				style: { height: `${240 + (visibleBanners.length - 1) * 12}px` }
			})]
		}), filteredBanners.length > 1 && /* @__PURE__ */ jsxs("div", {
			className: "mt-3 flex items-center justify-between px-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [filteredBanners.slice(0, 3).map((_, index) => /* @__PURE__ */ jsx("button", {
					onClick: () => setExpandedIndex(index),
					className: cn("h-1.5 rounded-full transition-all", index === expandedIndex ? "w-5 bg-foreground" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60")
				}, index)), filteredBanners.length > 3 && /* @__PURE__ */ jsxs("span", {
					className: "ms-1.5 text-[11px] text-muted-foreground",
					children: [
						"+",
						filteredBanners.length - 3,
						" ",
						t("more")
					]
				})]
			}), /* @__PURE__ */ jsx("button", {
				onClick: onDismissAll,
				className: "text-[12px] text-muted-foreground transition-colors hover:text-foreground",
				children: t("Dismiss all")
			})]
		})]
	});
}
const mockPromoBanners = [
	{
		id: "promo-1",
		title: "Introducing Imagine",
		description: "The most complete AI builder to date",
		ctaText: "Try it now",
		ctaUrl: "/ai-assistant"
	},
	{
		id: "promo-2",
		title: "Edge Functions",
		description: "Deploy serverless functions at the edge for ultra-low latency",
		ctaText: "Learn more",
		ctaUrl: "/functions"
	},
	{
		id: "promo-3",
		title: "New Database Regions",
		description: "We've expanded to 12 new regions worldwide",
		ctaText: "See regions",
		ctaUrl: "/regions"
	}
];
var PromoBannerContext = createContext(null);
function usePromoBanner() {
	const context = useContext(PromoBannerContext);
	if (!context) throw new Error("usePromoBanner must be used within a PromoBannerProvider");
	return context;
}
function PromoBannerProvider({ children }) {
	const [banners, setBanners] = useState([]);
	const addBanner = useCallback((banner) => {
		setBanners((prev) => {
			if (prev.some((b) => b.id === banner.id)) return prev;
			return [...prev, banner];
		});
	}, []);
	const removeBanner = useCallback((id) => {
		setBanners((prev) => prev.filter((b) => b.id !== id));
	}, []);
	const clearAllBanners = useCallback(() => {
		setBanners([]);
	}, []);
	const addMockBanner = useCallback(() => {
		const availableMocks = mockPromoBanners.filter((mock) => !banners.some((b) => b.id === mock.id));
		if (availableMocks.length > 0) {
			const randomMock = availableMocks[Math.floor(Math.random() * availableMocks.length)];
			addBanner(randomMock);
		} else addBanner({
			id: `promo-custom-${Date.now()}`,
			title: "New Feature Available",
			description: "Check out our latest updates and improvements to enhance your development experience.",
			ctaText: "Explore"
		});
	}, [banners, addBanner]);
	return /* @__PURE__ */ jsxs(PromoBannerContext.Provider, {
		value: {
			banners,
			addBanner,
			removeBanner,
			clearAllBanners,
			addMockBanner
		},
		children: [children, /* @__PURE__ */ jsx(PromoBannerComponent, {
			banners,
			onDismiss: removeBanner,
			onDismissAll: clearAllBanners
		})]
	});
}
function DebugMenuSwitch({ className, ...props }) {
	return /* @__PURE__ */ jsx(Switch, {
		dir: "ltr",
		className: cn("[&_[data-slot=switch-thumb]]:data-[state=unchecked]:!translate-x-0", "[&_[data-slot=switch-thumb]]:data-[state=checked]:!translate-x-[calc(100%-2px)]", className),
		...props
	});
}
function useDebugEndpoint() {
	const [preset, setPreset] = useState(getDebugEndpointOverride);
	const [customUrl, setCustomUrl] = useState(getDebugCustomEndpoint);
	const [customEndpoints, setCustomEndpoints] = useState(getCustomDebugEndpoints);
	const [effectiveUrl, setEffectiveUrl] = useState(() => getEffectiveEndpointBaseUrl() ?? getEnvEndpointBaseUrl());
	const [envUrl, setEnvUrl] = useState(getEnvEndpointBaseUrl);
	useEffect(() => {
		return subscribeToDebugEndpointChange(() => {
			setPreset(getDebugEndpointOverride());
			setCustomUrl(getDebugCustomEndpoint());
			setCustomEndpoints(getCustomDebugEndpoints());
			setEffectiveUrl(getEffectiveEndpointBaseUrl() ?? getEnvEndpointBaseUrl());
			setEnvUrl(getEnvEndpointBaseUrl());
		});
	}, []);
	return {
		preset,
		customUrl,
		customEndpoints,
		effectiveUrl,
		envUrl
	};
}
const PREFS_CATALOG = [
	{
		id: "organization",
		scope: "account",
		key: USER_PREFS_KEY_ORGANIZATION,
		description: "Preferred organization ID for redirects and console context.",
		category: "Account"
	},
	{
		id: "featureNotifications",
		scope: "account",
		key: USER_PREFS_KEY_FEATURE_NOTIFICATIONS,
		description: "Dismissed coming-soon feature IDs (comma-separated).",
		category: "Account"
	},
	{
		id: "sidebarCollapsed",
		scope: "account",
		key: USER_PREFS_KEY_SIDEBAR_COLLAPSED,
		description: "Main navigation sidebar collapsed state.",
		category: "Layout"
	},
	{
		id: "connectProjectTab",
		scope: "account",
		key: USER_PREFS_KEY_CONNECT_PROJECT_TAB,
		description: "Last selected tab in the Connect project dialog.",
		category: "Layout"
	},
	{
		id: "sidebarCollapsedLegacy",
		scope: "account",
		key: "sidebarCollapsed",
		description: "Legacy sidebar collapsed key (migrated to console.sidebarCollapsed).",
		category: "Layout",
		legacy: true
	},
	{
		id: "rightPaneWidth",
		scope: "account",
		key: USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX,
		description: "Shared right pane width in pixels.",
		category: "Layout"
	},
	{
		id: "aiChatPanelOpen",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_PANEL_OPEN,
		description: "AI assistant panel open state.",
		category: "Layout"
	},
	{
		id: "aiChatExpanded",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_EXPANDED,
		description: "AI assistant fullscreen (expanded) state.",
		category: "Layout"
	},
	{
		id: "aiChatActiveConversationId",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID,
		description: "Last viewed AI assistant conversation id.",
		category: "Layout"
	},
	{
		id: "aiChatPinnedConversationIds",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS,
		description: "Pinned AI assistant conversation ids (JSON array; order is sort order).",
		category: "Layout"
	},
	{
		id: "aiChatConversationsWidth",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX,
		description: "AI assistant conversations sidebar width in pixels.",
		category: "Layout"
	},
	{
		id: "aiChatPanelWidth",
		scope: "account",
		key: USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX,
		description: "AI assistant panel width in pixels.",
		category: "Layout"
	},
	{
		id: "cliShellOpen",
		scope: "account",
		key: USER_PREFS_KEY_CLI_SHELL_OPEN,
		description: "Browser CLI shell expanded state.",
		category: "CLI"
	},
	{
		id: "cliShellHeight",
		scope: "account",
		key: USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX,
		description: "Browser CLI shell height in pixels.",
		category: "CLI"
	},
	{
		id: "cliShellSessionsSidebarWidth",
		scope: "account",
		key: USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX,
		description: "CLI sessions list sidebar width in pixels.",
		category: "CLI"
	},
	{
		id: "cliShellHistory",
		scope: "account",
		prefix: USER_PREFS_KEY_CLI_SHELL_HISTORY_PREFIX,
		description: "Per-project CLI command history (JSON string array).",
		category: "CLI"
	},
	{
		id: "cliShellSessions",
		scope: "account",
		prefix: USER_PREFS_KEY_CLI_SHELL_SESSIONS_PREFIX,
		description: "Per-project CLI session layout (JSON).",
		category: "CLI"
	},
	{
		id: "savedFilters",
		scope: "both",
		prefix: USER_PREFS_KEY_SAVED_FILTERS_PREFIX,
		description: "Saved filter presets per list view scope (JSON SavedFilter[]).",
		category: "Filters"
	},
	{
		id: "functionsListViewMode",
		scope: "account",
		key: USER_PREFS_KEY_FUNCTIONS_LIST_VIEW_MODE,
		description: "Functions list view mode (list or grid).",
		category: "List views"
	},
	{
		id: "sitesListViewMode",
		scope: "account",
		key: USER_PREFS_KEY_SITES_LIST_VIEW_MODE,
		description: "Sites list view mode (list or grid).",
		category: "List views"
	},
	{
		id: "orgProjectsListViewMode",
		scope: "account",
		key: USER_PREFS_KEY_ORG_PROJECTS_LIST_VIEW_MODE,
		description: "Organization projects list view mode (list or grid).",
		category: "List views"
	},
	{
		id: "storesListViewMode",
		scope: "account",
		key: USER_PREFS_KEY_STORES_LIST_VIEW_MODE,
		description: "Stores list view mode (list or grid).",
		category: "List views"
	},
	{
		id: "imageTransformPresets",
		scope: "both",
		key: USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS,
		description: "Saved image transform wizard presets (JSON).",
		category: "Storage"
	},
	{
		id: "storageSidebarWidth",
		scope: "account",
		key: USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH,
		description: "Storage buckets sidebar width in pixels.",
		category: "Storage"
	},
	{
		id: "storageFilesListColumnWidths",
		scope: "account",
		key: USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS,
		description: "Storage files table column widths (JSON).",
		category: "Storage"
	},
	{
		id: "storageFilesTablePaneWidth",
		scope: "account",
		key: USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX,
		description: "Storage files split-pane table width in pixels.",
		category: "Storage"
	},
	{
		id: "databasesSidebarWidth",
		scope: "account",
		key: USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH,
		description: "Databases sidebar width in pixels.",
		category: "Databases"
	},
	{
		id: "databaseTableRowColumnWidths",
		scope: "account",
		key: USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS,
		description: "TablesDB / DocumentsDB row column widths (JSON).",
		category: "Databases"
	},
	{
		id: "tablesDbRowsListColumns",
		scope: "account",
		prefix: USER_PREFS_KEY_TABLESDB_ROWS_LIST_COLUMNS_PREFIX,
		description: "Per-table visible columns for TablesDB rows list (JSON).",
		category: "Databases"
	},
	{
		id: "postgresSavedQueries",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_PREFIX,
		description: "Per-database saved PostgreSQL queries (JSON).",
		category: "PostgreSQL"
	},
	{
		id: "postgresQueryHistory",
		scope: "account",
		prefix: USER_PREFS_KEY_POSTGRES_QUERY_HISTORY_PREFIX,
		description: "Per-database PostgreSQL query history (JSON).",
		category: "PostgreSQL"
	},
	{
		id: "postgresSavedQueriesScope",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SCOPE_PREFIX,
		description: "Per-database saved queries scope (user or team).",
		category: "PostgreSQL"
	},
	{
		id: "postgresSelectedSchema",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SELECTED_SCHEMA_PREFIX,
		description: "Per-database selected PostgreSQL schema.",
		category: "PostgreSQL"
	},
	{
		id: "postgresSavedQueriesSort",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SORT_PREFIX,
		description: "Per-database saved queries sort order.",
		category: "PostgreSQL"
	},
	{
		id: "postgresSidebarTablesSort",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SIDEBAR_TABLES_SORT_PREFIX,
		description: "Per-database sidebar tables sort order.",
		category: "PostgreSQL"
	},
	{
		id: "postgresSidebarPanel",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SIDEBAR_PANEL_PREFIX,
		description: "Per-database sidebar panel state (JSON).",
		category: "PostgreSQL"
	},
	{
		id: "postgresSqlEditorState",
		scope: "both",
		prefix: USER_PREFS_KEY_POSTGRES_SQL_EDITOR_STATE_PREFIX,
		description: "Per-database SQL editor draft state (JSON).",
		category: "PostgreSQL"
	},
	{
		id: "postgresSqlEditorHeight",
		scope: "account",
		key: USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT,
		description: "PostgreSQL SQL editor height in pixels.",
		category: "PostgreSQL"
	},
	{
		id: "mysqlSavedQueries",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SAVED_QUERIES_PREFIX,
		description: "Per-database saved MySQL queries (JSON).",
		category: "MySQL"
	},
	{
		id: "mysqlQueryHistory",
		scope: "account",
		prefix: USER_PREFS_KEY_MYSQL_QUERY_HISTORY_PREFIX,
		description: "Per-database MySQL query history (JSON).",
		category: "MySQL"
	},
	{
		id: "mysqlSavedQueriesScope",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SCOPE_PREFIX,
		description: "Per-database saved queries scope (user or team).",
		category: "MySQL"
	},
	{
		id: "mysqlSelectedSchema",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SELECTED_SCHEMA_PREFIX,
		description: "Per-database selected MySQL schema.",
		category: "MySQL"
	},
	{
		id: "mysqlSavedQueriesSort",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SORT_PREFIX,
		description: "Per-database saved queries sort order.",
		category: "MySQL"
	},
	{
		id: "mysqlSidebarTablesSort",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SIDEBAR_TABLES_SORT_PREFIX,
		description: "Per-database sidebar tables sort order.",
		category: "MySQL"
	},
	{
		id: "mysqlSidebarPanel",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SIDEBAR_PANEL_PREFIX,
		description: "Per-database sidebar panel state (JSON).",
		category: "MySQL"
	},
	{
		id: "mysqlSqlEditorState",
		scope: "both",
		prefix: USER_PREFS_KEY_MYSQL_SQL_EDITOR_STATE_PREFIX,
		description: "Per-database SQL editor draft state (JSON).",
		category: "MySQL"
	},
	{
		id: "mysqlSqlEditorHeight",
		scope: "account",
		key: USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT,
		description: "MySQL SQL editor height in pixels.",
		category: "MySQL"
	},
	{
		id: "authPasswordStrengthComplianceOpen",
		scope: "account",
		key: USER_PREFS_KEY_AUTH_PASSWORD_STRENGTH_COMPLIANCE_OPEN,
		description: "Auth password strength compliance section expanded.",
		category: "Auth"
	},
	{
		id: "usageChartDateRange",
		scope: "account",
		key: USER_PREFS_KEY_USAGE_CHART_DATE_RANGE,
		description: "Usage chart date range selection (JSON).",
		category: "Usage"
	},
	{
		id: "usageChartInterval",
		scope: "account",
		key: USER_PREFS_KEY_USAGE_CHART_INTERVAL,
		description: "Usage chart interval (15m, 1h, or 1d).",
		category: "Usage"
	},
	{
		id: "coverGeneratorColumnsLayout",
		scope: "account",
		key: USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT,
		description: "Cover generator column split percentages (JSON).",
		category: "Generators"
	},
	{
		id: "coverGeneratorGenerations",
		scope: "account",
		key: USER_PREFS_KEY_COVER_GENERATIONS,
		description: "Saved cover generator generations (JSON).",
		category: "Generators"
	},
	{
		id: "diagramGeneratorPropertiesSplit",
		scope: "account",
		key: USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT,
		description: "Diagram generator properties/layers split (JSON).",
		category: "Generators"
	},
	{
		id: "diagramGeneratorGenerations",
		scope: "account",
		key: USER_PREFS_KEY_DIAGRAM_GENERATIONS,
		description: "Saved diagram generator generations (JSON).",
		category: "Generators"
	},
	{
		id: "generatorPanelVisibility",
		scope: "account",
		key: USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY,
		description: "Generator left/right panel visibility (JSON).",
		category: "Generators"
	},
	{
		id: "apiExplorerColumnsLayout",
		scope: "account",
		key: USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT,
		description: "API Explorer column split percentages (JSON).",
		category: "API Explorer"
	},
	{
		id: "apiExplorerResponseSplit",
		scope: "account",
		key: USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT,
		description: "API Explorer request/response split (JSON).",
		category: "API Explorer"
	},
	{
		id: "apiExplorerExpandedProductGroup",
		scope: "account",
		key: USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP,
		description: "Expanded product group id in API Explorer services list.",
		category: "API Explorer"
	},
	{
		id: "apiReferenceUi",
		scope: "account",
		key: USER_PREFS_KEY_API_REFERENCE_UI,
		description: "Docs API reference explorer UI state (JSON).",
		category: "API Explorer"
	},
	{
		id: "realtimeDebugger",
		scope: "account",
		prefix: USER_PREFS_KEY_REALTIME_DEBUGGER_PREFIX,
		description: "Per-project Realtime debugger subscriptions (JSON).",
		category: "Realtime"
	},
	{
		id: "buildNotificationsOptedOut",
		scope: "account",
		key: USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT,
		description: "User dismissed the build completion notifications prompt.",
		category: "Notifications"
	},
	{
		id: "communitySupport",
		scope: "account",
		key: USER_PREFS_KEY_COMMUNITY_SUPPORT,
		description: "Community support wizard state (JSON).",
		category: "Community"
	},
	{
		id: "impersonationRecentUsers",
		scope: "account",
		key: USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT,
		description: "Recent impersonation target user IDs only (JSON string[]). Display labels live in localStorage.",
		category: "Impersonation"
	},
	{
		id: "initTicket",
		scope: "account",
		prefix: INIT_TICKET_PREFS_KEY_PREFIX,
		description: "Per-event Init ticket prefs (JSON).",
		category: "Init"
	},
	{
		id: "pinnedProjectIds",
		scope: "team",
		key: TEAM_PREFS_KEY_PINNED_PROJECT_IDS,
		description: "Pinned project IDs for the organization (JSON string[]).",
		category: "Organization"
	}
];
function entryAppliesToScope(entry, scope) {
	return entry.scope === scope || entry.scope === "both";
}
function matchesEntry(key, entry) {
	if (entry.key != null) return key === entry.key;
	if (entry.prefix != null) return key === entry.prefix || key.startsWith(`${entry.prefix}.`);
	return false;
}
function matchKnownPref(key, scope) {
	const candidates = PREFS_CATALOG.filter((entry) => entryAppliesToScope(entry, scope));
	const exact = candidates.find((entry) => entry.key != null && entry.key === key);
	if (exact) return exact;
	return candidates.find((entry) => entry.prefix != null && matchesEntry(key, entry)) ?? null;
}
function previewPrefValue(value) {
	if (typeof value === "string") return value.length > 120 ? `${value.slice(0, 120)}…` : value;
	try {
		const raw = JSON.stringify(value);
		return raw.length > 120 ? `${raw.slice(0, 120)}…` : raw;
	} catch {
		return String(value);
	}
}
function classifyPrefs(prefs, scope) {
	return Object.entries(prefs ?? {}).map(([key, value]) => {
		const catalog = matchKnownPref(key, scope);
		return {
			key,
			value,
			known: catalog != null,
			catalog,
			preview: previewPrefValue(value)
		};
	}).sort((a, b) => {
		if (a.known !== b.known) return a.known ? 1 : -1;
		const catA = a.catalog?.category ?? "";
		const catB = b.catalog?.category ?? "";
		if (catA !== catB) return catA.localeCompare(catB);
		return a.key.localeCompare(b.key);
	});
}
function summarizePrefsClassification(entries) {
	let known = 0;
	let unknown = 0;
	for (const entry of entries) if (entry.known) known += 1;
	else unknown += 1;
	return {
		known,
		unknown,
		total: entries.length
	};
}
function stringifyPrefs(prefs) {
	return JSON.stringify(prefs ?? {}, null, 2);
}
function parsePrefsJson(text) {
	const parsed = JSON.parse(text);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Prefs must be a JSON object.");
	return parsed;
}
function parseValueInput(raw) {
	const t = raw.trim();
	if (!t) return "";
	try {
		return JSON.parse(t);
	} catch {
		return raw;
	}
}
function getMatchingPrefKeys(prefsJson, query) {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	try {
		const prefs = parsePrefsJson(prefsJson);
		return Object.entries(prefs).filter(([key, value]) => {
			const valueStr = typeof value === "string" ? value : JSON.stringify(value);
			return key.toLowerCase().includes(q) || valueStr.toLowerCase().includes(q);
		}).map(([key, value]) => {
			const valueStr = typeof value === "string" ? value : JSON.stringify(value);
			return {
				key,
				preview: valueStr.length > 80 ? `${valueStr.slice(0, 80)}…` : valueStr
			};
		}).sort((a, b) => a.key.localeCompare(b.key));
	} catch {
		return [];
	}
}
function filterClassifiedPrefs(entries, query) {
	const q = query.trim().toLowerCase();
	if (!q) return entries;
	return entries.filter((entry) => {
		const description = entry.catalog?.description?.toLowerCase() ?? "";
		const category = entry.catalog?.category?.toLowerCase() ?? "";
		return entry.key.toLowerCase().includes(q) || entry.preview.toLowerCase().includes(q) || description.includes(q) || category.includes(q);
	});
}
function scrollEditorToPrefKey(editorInstance, key) {
	if (!editorInstance) return;
	const model = editorInstance.getModel();
	if (!model) return;
	const needle = `"${key.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
	const match = model.findMatches(needle, false, false, false, null, false)[0];
	if (!match) return;
	editorInstance.revealLineInCenter(match.range.startLineNumber);
	editorInstance.setSelection(match.range);
	editorInstance.focus();
}
function PrefsSearchBar({ value, onChange, matches, onSelectKey, disabled, showMatchList }) {
	const trimmed = value.trim();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--network-globe-edge)]/60" }),
				/* @__PURE__ */ jsx(Input, {
					value,
					onChange: (event) => onChange(event.target.value),
					disabled,
					placeholder: "Search keys, values, or descriptions...",
					className: "h-8 border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40 ps-8 pe-8 text-[12px] text-foreground placeholder:text-[var(--network-globe-edge)]/50"
				}),
				value && /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => onChange(""),
					disabled,
					className: "absolute end-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded text-[var(--network-globe-edge)]/70 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground disabled:opacity-50",
					"aria-label": "Clear search",
					children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
				})
			]
		}), showMatchList && trimmed ? /* @__PURE__ */ jsx("div", {
			className: "max-h-[min(24dvh,160px)] overflow-y-auto rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40",
			children: matches.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "px-2.5 py-2 text-[11px] text-[var(--network-globe-edge)]/70",
				children: "No matching keys"
			}) : /* @__PURE__ */ jsx("ul", {
				className: "divide-y divide-[color-mix(in_srgb,var(--network-globe-edge)_10%,var(--border))]",
				children: matches.map(({ key, preview }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => onSelectKey(key),
					disabled,
					className: "flex w-full flex-col gap-0.5 px-2.5 py-2 text-start transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)] disabled:opacity-50",
					children: [/* @__PURE__ */ jsx("code", {
						className: "truncate text-[11px] text-foreground",
						children: key
					}), /* @__PURE__ */ jsx("span", {
						className: "truncate text-[10px] text-[var(--network-globe-edge)]/75",
						children: preview
					})]
				}) }, key))
			})
		}) : null]
	});
}
var UNKNOWN_PREF_CATEGORY = "Unknown";
function getPrefCategory(entry) {
	return entry.known ? entry.catalog?.category ?? "Known" : UNKNOWN_PREF_CATEGORY;
}
function collectPrefCategories(entries) {
	const categories = [UNKNOWN_PREF_CATEGORY];
	const seen = new Set([UNKNOWN_PREF_CATEGORY]);
	for (const entry of entries) {
		const category = getPrefCategory(entry);
		if (seen.has(category)) continue;
		seen.add(category);
		categories.push(category);
	}
	return categories;
}
function groupPrefsByCategory(entries) {
	const groups = [{
		category: UNKNOWN_PREF_CATEGORY,
		entries: []
	}];
	const indexByCategory = new Map([[UNKNOWN_PREF_CATEGORY, 0]]);
	for (const entry of entries) {
		const category = getPrefCategory(entry);
		const existing = indexByCategory.get(category);
		if (existing != null) {
			groups[existing].entries.push(entry);
			continue;
		}
		indexByCategory.set(category, groups.length);
		groups.push({
			category,
			entries: [entry]
		});
	}
	return groups;
}
function categoryNavCount(groups, category) {
	return groups.find((group) => group.category === category)?.entries.length ?? 0;
}
function StructuredPrefsList({ entries, disabled, onDeleteKey }) {
	const listRef = useRef(null);
	const categoryHeadingRefs = useRef(/* @__PURE__ */ new Map());
	const [activeCategory, setActiveCategory] = useState(null);
	const categories = useMemo(() => collectPrefCategories(entries), [entries]);
	const groups = useMemo(() => groupPrefsByCategory(entries), [entries]);
	useEffect(() => {
		if (categories.length === 0) {
			setActiveCategory(null);
			return;
		}
		setActiveCategory((current) => current && categories.includes(current) ? current : categories[0]);
	}, [categories]);
	useEffect(() => {
		const root = listRef.current;
		if (!root || categories.length === 0) return;
		const observer = new IntersectionObserver((observerEntries) => {
			const first = observerEntries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
			if (!first) return;
			const category = first.target.dataset.prefCategory;
			if (category) setActiveCategory(category);
		}, {
			root,
			rootMargin: "-8px 0px -70% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const category of categories) {
			const node = categoryHeadingRefs.current.get(category);
			if (node) observer.observe(node);
		}
		return () => observer.disconnect();
	}, [categories, entries]);
	const scrollToCategory = (category) => {
		const root = listRef.current;
		const heading = categoryHeadingRefs.current.get(category);
		if (!root || !heading) return;
		setActiveCategory(category);
		const rootRect = root.getBoundingClientRect();
		const headingRect = heading.getBoundingClientRect();
		root.scrollTo({
			top: Math.max(0, root.scrollTop + (headingRect.top - rootRect.top) - 4),
			behavior: "smooth"
		});
	};
	if (entries.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "px-3 py-4 text-center text-[11px] text-[var(--network-globe-edge)]/70",
		children: "No preferences stored."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex max-h-[min(48dvh,420px)] gap-2",
		children: [/* @__PURE__ */ jsx("nav", {
			"aria-label": "Preference categories",
			className: "flex w-[120px] shrink-0 flex-col gap-0.5 overflow-y-auto overscroll-contain border-e border-[color-mix(in_srgb,var(--network-globe-edge)_15%,var(--border))] pe-2",
			children: categories.map((category) => {
				const isActive = category === activeCategory;
				const count = categoryNavCount(groups, category);
				const isUnknown = category === UNKNOWN_PREF_CATEGORY;
				return /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => scrollToCategory(category),
					className: cn("flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-start text-[10px] font-medium leading-snug transition-colors", isActive ? "bg-[color-mix(in_srgb,var(--network-globe-edge)_18%,transparent)] text-foreground" : "text-[var(--network-globe-edge)]/75 hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)] hover:text-foreground", isUnknown && count > 0 && !isActive && "text-red-300/90"),
					children: [/* @__PURE__ */ jsx("span", {
						className: "min-w-0 truncate",
						children: category
					}), /* @__PURE__ */ jsx("span", {
						className: cn("shrink-0 tabular-nums", isUnknown && count > 0 ? "text-red-300/80" : "text-[var(--network-globe-edge)]/55"),
						children: count
					})]
				}, category);
			})
		}), /* @__PURE__ */ jsx("div", {
			ref: listRef,
			className: "min-w-0 flex-1 space-y-3 overflow-y-auto overscroll-contain",
			children: groups.map((group) => {
				const isUnknown = group.category === UNKNOWN_PREF_CATEGORY;
				return /* @__PURE__ */ jsxs("section", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ jsx("div", {
						ref: (node) => {
							if (node) categoryHeadingRefs.current.set(group.category, node);
							else categoryHeadingRefs.current.delete(group.category);
						},
						"data-pref-category": group.category,
						className: "sticky top-0 z-[1]",
						children: /* @__PURE__ */ jsxs("div", {
							className: cn("flex items-center gap-2 rounded-md border px-2.5 py-1.5 backdrop-blur-md", isUnknown ? "border-red-500/25 bg-[color-mix(in_srgb,var(--background)_82%,rgb(127_29_29))] shadow-[0_1px_0_0_color-mix(in_srgb,rgb(239_68_68)_12%,transparent)]" : "border-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--border))] bg-[color-mix(in_srgb,var(--background)_82%,transparent)] shadow-[0_1px_0_0_color-mix(in_srgb,var(--network-globe-edge)_8%,transparent)]"),
							children: [
								/* @__PURE__ */ jsx("span", {
									className: cn("shrink-0 text-[11px] font-medium", isUnknown ? "text-red-200/95" : "text-foreground/90"),
									children: group.category
								}),
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": true,
									className: cn("h-px min-w-3 flex-1", isUnknown ? "bg-red-500/25" : "bg-[color-mix(in_srgb,var(--network-globe-edge)_22%,var(--border))]")
								}),
								/* @__PURE__ */ jsx("span", {
									className: cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] tabular-nums", isUnknown ? "bg-red-500/15 text-red-200/90" : "bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] text-[var(--network-globe-edge)]/80"),
									children: group.entries.length
								})
							]
						})
					}), group.entries.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "px-2.5 py-2 text-[11px] leading-snug text-[var(--network-globe-edge)]/70",
						children: isUnknown ? "No unregistered keys. Every stored key matched the prefs catalog." : "No keys in this category."
					}) : group.entries.map((entry) => /* @__PURE__ */ jsx("div", {
						className: cn("rounded-lg border px-3 py-2.5", entry.known ? "border-emerald-500/25 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"),
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1 space-y-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx("code", {
												className: cn("break-all text-[11px] font-medium", entry.known ? "text-emerald-300" : "text-red-300"),
												children: entry.key
											}),
											entry.catalog?.legacy ? /* @__PURE__ */ jsx("span", {
												className: "rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-amber-200/90",
												children: "Legacy"
											}) : null,
											!entry.known ? /* @__PURE__ */ jsx("span", {
												className: "rounded bg-red-500/15 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-red-200/90",
												children: "Unknown"
											}) : null
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] leading-snug text-[var(--network-globe-edge)]/85",
										children: entry.catalog?.description ?? "Not registered in the prefs catalog. Safe to remove if unused."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "break-all font-mono text-[10px] text-[var(--network-globe-edge)]/65",
										children: entry.preview || "(empty)"
									})
								]
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								variant: "ghost",
								className: "h-7 w-7 shrink-0 p-0 text-[var(--network-globe-edge)]/70 hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
								disabled,
								"aria-label": `Delete ${entry.key}`,
								onClick: () => onDeleteKey(entry.key),
								children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
							})]
						})
					}, entry.key))]
				}, group.category);
			})
		})]
	});
}
var tabListClass = "grid h-9 w-full grid-cols-2 gap-0 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/50 p-[3px] text-[var(--network-globe-edge)]/90";
var tabTriggerClass = "rounded-md border border-transparent px-2 py-1 text-[12px] font-medium text-foreground/85 transition-colors hover:text-foreground data-[state=active]:border-[color-mix(in_srgb,var(--network-globe-edge)_35%,var(--border))] data-[state=active]:bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)] data-[state=active]:text-foreground data-[state=inactive]:text-[var(--network-globe-edge)]/75";
var editorShellClass = "min-h-[min(42dvh,320px)] flex-1 overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40";
var structuredShellClass = "min-h-[min(42dvh,320px)] rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/30 p-2";
function DebugMenuPrefsPanel() {
	const queryClient = useQueryClient();
	const consoleImpersonationRevision = useConsoleImpersonationRevision();
	const params = useParams({ strict: false });
	const orgId = typeof params.orgId === "string" ? params.orgId : void 0;
	const { project } = useProject(typeof params.projectId === "string" ? params.projectId : void 0);
	const resolvedTeamId = useMemo(() => orgId || project?.teamId || null, [orgId, project?.teamId]);
	const teamSource = orgId ? "URL organization" : project?.teamId ? "Project organization" : null;
	const { data: account, isLoading: accountLoading, error: accountError, refetch: refetchAccount } = useQuery({
		queryKey: [
			"account",
			"console",
			consoleImpersonationRevision
		],
		queryFn: () => fetchConsoleAccount({ revision: consoleImpersonationRevision }),
		staleTime: CONSOLE_ACCOUNT_STALE_TIME_MS,
		retry: false
	});
	const { data: team, isLoading: teamLoading, error: teamError, refetch: refetchTeam } = useConsoleTeam(resolvedTeamId);
	const [accountDraft, setAccountDraft] = useState("");
	const [teamDraft, setTeamDraft] = useState("");
	const [accountSearch, setAccountSearch] = useState("");
	const [teamSearch, setTeamSearch] = useState("");
	const [accountView, setAccountView] = useState("structured");
	const [teamView, setTeamView] = useState("structured");
	const [accountBusy, setAccountBusy] = useState(false);
	const [teamBusy, setTeamBusy] = useState(false);
	const accountEditorRef = useRef(null);
	const teamEditorRef = useRef(null);
	const accountPrefsObject = useMemo(() => {
		try {
			return accountDraft ? parsePrefsJson(accountDraft) : {};
		} catch {
			return account?.prefs ?? {};
		}
	}, [accountDraft, account?.prefs]);
	const teamPrefsObject = useMemo(() => {
		try {
			return teamDraft ? parsePrefsJson(teamDraft) : {};
		} catch {
			return team?.prefs ?? {};
		}
	}, [teamDraft, team?.prefs]);
	const accountClassified = useMemo(() => classifyPrefs(accountPrefsObject, "account"), [accountPrefsObject]);
	const teamClassified = useMemo(() => classifyPrefs(teamPrefsObject, "team"), [teamPrefsObject]);
	const accountFiltered = useMemo(() => filterClassifiedPrefs(accountClassified, accountSearch), [accountClassified, accountSearch]);
	const teamFiltered = useMemo(() => filterClassifiedPrefs(teamClassified, teamSearch), [teamClassified, teamSearch]);
	const accountSummary = useMemo(() => summarizePrefsClassification(accountClassified), [accountClassified]);
	const teamSummary = useMemo(() => summarizePrefsClassification(teamClassified), [teamClassified]);
	const accountSearchMatches = useMemo(() => getMatchingPrefKeys(accountDraft, accountSearch), [accountDraft, accountSearch]);
	const teamSearchMatches = useMemo(() => getMatchingPrefKeys(teamDraft, teamSearch), [teamDraft, teamSearch]);
	const handleAccountEditorMount = useCallback((editorInstance) => {
		accountEditorRef.current = editorInstance;
	}, []);
	const handleTeamEditorMount = useCallback((editorInstance) => {
		teamEditorRef.current = editorInstance;
	}, []);
	useEffect(() => {
		return () => {
			accountEditorRef.current = null;
			teamEditorRef.current = null;
		};
	}, []);
	useEffect(() => {
		if (!account) return;
		setAccountDraft(stringifyPrefs(account.prefs));
	}, [account]);
	useEffect(() => {
		if (!resolvedTeamId) {
			setTeamDraft("");
			return;
		}
		if (!team) {
			setTeamDraft("{}");
			return;
		}
		setTeamDraft(stringifyPrefs(team.prefs));
	}, [resolvedTeamId, team]);
	const invalidateAccount = useCallback(async () => {
		commitConsoleAccountToCaches(queryClient, await fetchConsoleAccount({
			revision: consoleImpersonationRevision,
			force: true
		}), consoleImpersonationRevision);
	}, [consoleImpersonationRevision, queryClient]);
	const invalidateTeam = useCallback(() => {
		if (!resolvedTeamId) return;
		queryClient.invalidateQueries({ queryKey: [
			"team",
			"console",
			resolvedTeamId
		] });
	}, [queryClient, resolvedTeamId]);
	const copyText = async (label, text) => {
		try {
			await navigator.clipboard.writeText(text);
			toast.success(`${label} copied`);
		} catch {
			toast.error("Could not copy to clipboard");
		}
	};
	const applyAccountPrefs = async () => {
		let next;
		try {
			next = parsePrefsJson(accountDraft);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Invalid JSON");
			return;
		}
		setAccountBusy(true);
		try {
			await updateAccountPrefs(next);
			invalidateAccount();
			await refetchAccount();
			toast.success("Account prefs updated");
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e.message;
			toast.error(msg || "Failed to update account prefs");
		} finally {
			setAccountBusy(false);
		}
	};
	const applyTeamPrefs = async () => {
		if (!resolvedTeamId) return;
		let next;
		try {
			next = parsePrefsJson(teamDraft);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Invalid JSON");
			return;
		}
		setTeamBusy(true);
		try {
			await updateConsoleTeamPrefs(resolvedTeamId, next, { mode: "replace" });
			invalidateTeam();
			await refetchTeam();
			toast.success("Team prefs updated");
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e.message;
			toast.error(msg || "Failed to update team prefs");
		} finally {
			setTeamBusy(false);
		}
	};
	const resetAccountPrefs = async () => {
		if (!window.confirm("Clear all account preference keys? This sends an empty prefs object to the server.")) return;
		setAccountBusy(true);
		try {
			await updateAccountPrefs({});
			invalidateAccount();
			const { data } = await refetchAccount();
			setAccountDraft(stringifyPrefs(data?.prefs));
			if (Object.keys(data?.prefs || {}).length > 0) toast.message("Some keys may still be present if the API merges prefs. Remove them with Delete key or edit JSON.");
			else toast.success("Account prefs cleared");
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e.message;
			toast.error(msg || "Failed to reset account prefs");
		} finally {
			setAccountBusy(false);
		}
	};
	const resetTeamPrefs = async () => {
		if (!resolvedTeamId) return;
		if (!window.confirm("Clear all team preference keys? This sends an empty prefs object to the server.")) return;
		setTeamBusy(true);
		try {
			await updateConsoleTeamPrefs(resolvedTeamId, {}, { mode: "replace" });
			invalidateTeam();
			const { data } = await refetchTeam();
			setTeamDraft(stringifyPrefs(data?.prefs));
			if (Object.keys(data?.prefs || {}).length > 0) toast.message("Some keys may still be present if the API merges prefs. Remove them with Delete key or edit JSON.");
			else toast.success("Team prefs cleared");
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e.message;
			toast.error(msg || "Failed to reset team prefs");
		} finally {
			setTeamBusy(false);
		}
	};
	const deletePrefKey = async (scope, key, confirmPrompt = true) => {
		if (scope === "team" && !resolvedTeamId) return;
		if (confirmPrompt && !window.confirm(`Remove preference key "${key}"?`)) return;
		if (scope === "account") {
			setAccountBusy(true);
			try {
				const base = parsePrefsJson(accountDraft);
				if (!(key in base)) {
					toast.error(`Key "${key}" is not in the current draft`);
					return;
				}
				const rest = { ...base };
				delete rest[key];
				await updateAccountPrefs(rest);
				invalidateAccount();
				await refetchAccount();
				setAccountDraft(stringifyPrefs(rest));
				toast.success(`Removed "${key}"`);
			} catch (e) {
				const msg = e instanceof AppwriteException ? e.message : e instanceof Error ? e.message : "Failed";
				toast.error(msg);
			} finally {
				setAccountBusy(false);
			}
			return;
		}
		setTeamBusy(true);
		try {
			const base = parsePrefsJson(teamDraft);
			if (!(key in base)) {
				toast.error(`Key "${key}" is not in the current draft`);
				return;
			}
			const rest = { ...base };
			delete rest[key];
			await updateConsoleTeamPrefs(resolvedTeamId, rest, { mode: "replace" });
			invalidateTeam();
			await refetchTeam();
			setTeamDraft(stringifyPrefs(rest));
			toast.success(`Removed "${key}"`);
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e instanceof Error ? e.message : "Failed";
			toast.error(msg);
		} finally {
			setTeamBusy(false);
		}
	};
	const deleteAccountKey = async () => {
		const key = window.prompt("Account prefs: key to remove")?.trim();
		if (!key) return;
		await deletePrefKey("account", key, false);
	};
	const deleteTeamKey = async () => {
		if (!resolvedTeamId) return;
		const key = window.prompt("Team prefs: key to remove")?.trim();
		if (!key) return;
		await deletePrefKey("team", key, false);
	};
	const setAccountKey = async () => {
		const key = window.prompt("Account prefs: key")?.trim();
		if (!key) return;
		const raw = window.prompt("Value (JSON or plain text)", "") ?? "";
		setAccountBusy(true);
		try {
			const base = parsePrefsJson(accountDraft);
			const value = parseValueInput(raw);
			const next = {
				...base,
				[key]: value
			};
			await updateAccountPrefs(next);
			invalidateAccount();
			await refetchAccount();
			setAccountDraft(stringifyPrefs(next));
			toast.success(`Set "${key}"`);
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e instanceof Error ? e.message : "Failed";
			toast.error(msg);
		} finally {
			setAccountBusy(false);
		}
	};
	const setTeamKey = async () => {
		if (!resolvedTeamId) return;
		const key = window.prompt("Team prefs: key")?.trim();
		if (!key) return;
		const raw = window.prompt("Value (JSON or plain text)", "") ?? "";
		setTeamBusy(true);
		try {
			const base = parsePrefsJson(teamDraft);
			const value = parseValueInput(raw);
			const next = {
				...base,
				[key]: value
			};
			await updateConsoleTeamPrefs(resolvedTeamId, next, { mode: "replace" });
			invalidateTeam();
			await refetchTeam();
			setTeamDraft(stringifyPrefs(next));
			toast.success(`Set "${key}"`);
		} catch (e) {
			const msg = e instanceof AppwriteException ? e.message : e instanceof Error ? e.message : "Failed";
			toast.error(msg);
		} finally {
			setTeamBusy(false);
		}
	};
	const accountErrMsg = accountError instanceof Error ? accountError.message : accountError != null ? String(accountError) : null;
	const teamErrMsg = teamError instanceof Error ? teamError.message : teamError != null ? String(teamError) : null;
	const accountIdLabel = account && typeof account.$id === "string" ? account.$id : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-3 px-1",
		"aria-label": "User and team preferences",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/90",
			children: [
				"Structured view classifies keys against",
				" ",
				/* @__PURE__ */ jsx("code", {
					className: "rounded bg-muted/50 px-1 text-[10px] text-foreground/90",
					children: "prefs-catalog"
				}),
				". Known keys are green; unknown keys are red. JSON remains available for bulk edits. Team scope uses the organization in the URL when present, otherwise the current project's team."
			]
		}), /* @__PURE__ */ jsxs(Tabs, {
			defaultValue: "account",
			className: "gap-3",
			children: [
				/* @__PURE__ */ jsxs(TabsList, {
					className: tabListClass,
					children: [/* @__PURE__ */ jsxs(TabsTrigger, {
						value: "account",
						className: tabTriggerClass,
						children: ["Account", accountLoading && /* @__PURE__ */ jsx(Loader2, { className: "ms-1 h-3 w-3 shrink-0 animate-spin text-[var(--network-globe-edge)]" })]
					}), /* @__PURE__ */ jsxs(TabsTrigger, {
						value: "team",
						className: tabTriggerClass,
						children: ["Team", resolvedTeamId && teamLoading && /* @__PURE__ */ jsx(Loader2, { className: "ms-1 h-3 w-3 shrink-0 animate-spin text-[var(--network-globe-edge)]" })]
					})]
				}),
				/* @__PURE__ */ jsxs(TabsContent, {
					value: "account",
					className: "mt-0 flex flex-col gap-2",
					children: [
						accountIdLabel && /* @__PURE__ */ jsxs("p", {
							className: "text-[10px] text-[var(--network-globe-edge)]/75",
							children: [
								"User",
								" ",
								/* @__PURE__ */ jsx("code", {
									className: "rounded bg-muted/50 px-1 text-foreground/90",
									children: accountIdLabel
								})
							]
						}),
						accountErrMsg && /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-amber-300/90",
							children: accountErrMsg
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ jsx(Tabs, {
								value: accountView,
								onValueChange: (value) => setAccountView(value),
								className: "w-full max-w-[220px]",
								children: /* @__PURE__ */ jsxs(TabsList, {
									className: cn(tabListClass, "h-8"),
									children: [/* @__PURE__ */ jsx(TabsTrigger, {
										value: "structured",
										className: cn(tabTriggerClass, "text-[11px]"),
										children: "Structured"
									}), /* @__PURE__ */ jsx(TabsTrigger, {
										value: "json",
										className: cn(tabTriggerClass, "text-[11px]"),
										children: "JSON"
									})]
								})
							}), /* @__PURE__ */ jsxs("p", {
								className: "shrink-0 text-[10px] text-[var(--network-globe-edge)]/75",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "text-emerald-300",
										children: [accountSummary.known, " known"]
									}),
									" · ",
									/* @__PURE__ */ jsxs("span", {
										className: "text-red-300",
										children: [accountSummary.unknown, " unknown"]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx(PrefsSearchBar, {
							value: accountSearch,
							onChange: setAccountSearch,
							matches: accountSearchMatches,
							onSelectKey: (key) => {
								if (accountView === "json") scrollEditorToPrefKey(accountEditorRef.current, key);
							},
							showMatchList: accountView === "json",
							disabled: accountLoading || accountBusy || !account
						}),
						accountView === "structured" ? /* @__PURE__ */ jsx("div", {
							className: structuredShellClass,
							children: /* @__PURE__ */ jsx(StructuredPrefsList, {
								entries: accountFiltered,
								disabled: accountLoading || accountBusy || !account,
								onDeleteKey: (key) => void deletePrefKey("account", key)
							})
						}) : /* @__PURE__ */ jsx("div", {
							className: cn(editorShellClass, "flex flex-col"),
							children: /* @__PURE__ */ jsx(CodeEditor, {
								modelPath: "debug-menu/prefs/account.json",
								language: "json",
								value: accountDraft,
								onChange: setAccountDraft,
								onEditorMount: handleAccountEditorMount,
								readOnly: accountLoading || accountBusy || !account,
								minimap: false,
								lineNumbers: "on",
								height: "min(42dvh, 320px)",
								className: "min-h-0 flex-1 rounded-none border-0 bg-transparent"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void refetchAccount(),
									children: "Reload"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void copyText("Account prefs", accountDraft),
									children: "Copy"
								}),
								accountView === "json" ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									className: "h-8 text-[11px]",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void applyAccountPrefs(),
									children: "Apply"
								}) : null,
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void setAccountKey(),
									children: "Set key…"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void deleteAccountKey(),
									children: "Delete key…"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									className: "h-8 border-amber-500/40 text-[11px] text-amber-200/90 hover:bg-amber-500/10",
									disabled: accountLoading || accountBusy || !account,
									onClick: () => void resetAccountPrefs(),
									children: "Reset all"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "team",
					className: "mt-0 flex flex-col gap-2",
					children: !resolvedTeamId ? /* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-[var(--network-globe-edge)]/80",
						children: "No team in context. Open an organization or a project route to load team preferences."
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-[10px] text-[var(--network-globe-edge)]/75",
							children: [
								"Team",
								" ",
								/* @__PURE__ */ jsx("code", {
									className: "rounded bg-muted/50 px-1 text-foreground/90",
									children: resolvedTeamId
								}),
								teamSource ? ` · ${teamSource}` : null
							]
						}),
						teamErrMsg && /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-amber-300/90",
							children: teamErrMsg
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ jsx(Tabs, {
								value: teamView,
								onValueChange: (value) => setTeamView(value),
								className: "w-full max-w-[220px]",
								children: /* @__PURE__ */ jsxs(TabsList, {
									className: cn(tabListClass, "h-8"),
									children: [/* @__PURE__ */ jsx(TabsTrigger, {
										value: "structured",
										className: cn(tabTriggerClass, "text-[11px]"),
										children: "Structured"
									}), /* @__PURE__ */ jsx(TabsTrigger, {
										value: "json",
										className: cn(tabTriggerClass, "text-[11px]"),
										children: "JSON"
									})]
								})
							}), /* @__PURE__ */ jsxs("p", {
								className: "shrink-0 text-[10px] text-[var(--network-globe-edge)]/75",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "text-emerald-300",
										children: [teamSummary.known, " known"]
									}),
									" · ",
									/* @__PURE__ */ jsxs("span", {
										className: "text-red-300",
										children: [teamSummary.unknown, " unknown"]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx(PrefsSearchBar, {
							value: teamSearch,
							onChange: setTeamSearch,
							matches: teamSearchMatches,
							onSelectKey: (key) => {
								if (teamView === "json") scrollEditorToPrefKey(teamEditorRef.current, key);
							},
							showMatchList: teamView === "json",
							disabled: teamLoading || teamBusy || !team
						}),
						teamView === "structured" ? /* @__PURE__ */ jsx("div", {
							className: structuredShellClass,
							children: /* @__PURE__ */ jsx(StructuredPrefsList, {
								entries: teamFiltered,
								disabled: teamLoading || teamBusy || !team,
								onDeleteKey: (key) => void deletePrefKey("team", key)
							})
						}) : /* @__PURE__ */ jsx("div", {
							className: cn(editorShellClass, "flex flex-col"),
							children: /* @__PURE__ */ jsx(CodeEditor, {
								modelPath: "debug-menu/prefs/team.json",
								language: "json",
								value: teamDraft,
								onChange: setTeamDraft,
								onEditorMount: handleTeamEditorMount,
								readOnly: teamLoading || teamBusy || !team,
								minimap: false,
								lineNumbers: "on",
								height: "min(42dvh, 320px)",
								className: "min-h-0 flex-1 rounded-none border-0 bg-transparent"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void refetchTeam(),
									children: "Reload"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void copyText("Team prefs", teamDraft),
									children: "Copy"
								}),
								teamView === "json" ? /* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									className: "h-8 text-[11px]",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void applyTeamPrefs(),
									children: "Apply"
								}) : null,
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void setTeamKey(),
									children: "Set key…"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "secondary",
									className: "h-8 text-[11px]",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void deleteTeamKey(),
									children: "Delete key…"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									className: "h-8 border-amber-500/40 text-[11px] text-amber-200/90 hover:bg-amber-500/10",
									disabled: teamLoading || teamBusy || !team,
									onClick: () => void resetTeamPrefs(),
									children: "Reset all"
								})
							]
						})
					] })
				})
			]
		})]
	});
}
var MOCK_DAY_MIN = 0;
var MOCK_DAY_AFTER = getInitMockDayAfter();
var MOCK_DAY_BANNER_EXPIRED = getInitMockDayBannerExpired();
var MOCK_DAY_MAX = getInitMockCurrentDayMax();
function mockDaySliderLabel(day) {
	if (day === 0) return "Before";
	if (day === MOCK_DAY_AFTER) return "After";
	if (day === MOCK_DAY_BANNER_EXPIRED) return "Banner off";
	return `Day ${day}`;
}
function mockDayPreviewCopy(day) {
	if (day === 0) return "Simulates before the event - all days stay locked.";
	if (day === MOCK_DAY_AFTER) return "Simulates after the event. Recap mode with all days unlocked.";
	if (day === MOCK_DAY_BANNER_EXPIRED) return "Simulates 7+ days after the event. Org promo banner is hidden.";
	return `Simulates day ${day} - unlocks days 1-${day} (schedule, detail cards, Discord sessions, live badges).`;
}
function DebugMenuInitDayPanel() {
	const [overrides, setOverrides] = useState(loadDebugOverrides);
	const mockEnabled = overrides.mockInitCurrentDay !== null;
	const selectedDay = overrides.mockInitCurrentDay ?? 1;
	useEffect(() => subscribeToDebugOverrides(setOverrides), []);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1 py-1",
		"aria-label": "Init current day",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Mock current day"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[11px] text-[var(--network-globe-edge)]/80",
					children: mockEnabled ? formatInitMockCurrentDay(selectedDay) : "Use the real calendar date on /init"
				})]
			}), /* @__PURE__ */ jsx(DebugMenuSwitch, {
				checked: mockEnabled,
				onCheckedChange: (checked) => {
					setDebugOverride("mockInitCurrentDay", checked ? selectedDay : null);
				},
				className: "shrink-0"
			})]
		}), mockEnabled ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 rounded-lg px-3 pb-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between text-[11px] text-[var(--network-globe-edge)]/80",
					children: [
						/* @__PURE__ */ jsx("span", { children: "Before" }),
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: mockDaySliderLabel(selectedDay)
						}),
						/* @__PURE__ */ jsx("span", { children: "Banner off" })
					]
				}),
				/* @__PURE__ */ jsx(Slider, {
					min: MOCK_DAY_MIN,
					max: MOCK_DAY_MAX,
					step: 1,
					value: [selectedDay],
					onValueChange: ([value]) => {
						if (value !== void 0) setDebugOverride("mockInitCurrentDay", value);
					},
					"aria-label": "Mock Init current day"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between text-[10px] text-[var(--network-globe-edge)]/60",
					children: [/* @__PURE__ */ jsx("span", { children: "Day 1" }), /* @__PURE__ */ jsxs("span", { children: ["Day ", 5] })]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
					children: mockDayPreviewCopy(selectedDay)
				})
			]
		}) : null]
	});
}
async function resetInitTicketImagePrefs(params) {
	const next = stripInitTicketImageFromPrefs(readInitTicketPrefsFromAccountPrefs(params.accountPrefs, params.eventId) ?? readInitTicketPrefsFromStorage(params.eventId, params.userId) ?? DEFAULT_INIT_TICKET_PREFS);
	writeInitTicketPrefsToStorage(params.eventId, params.userId, next);
	const updatedAccount = await updateAccountPrefs(mergeInitTicketPrefsIntoAccountPrefs(params.accountPrefs, params.eventId, next));
	if (params.queryClient) syncConsoleAccountAfterMutation(params.queryClient, { apiResult: updatedAccount });
	notifyInitTicketPrefsChange({
		eventId: params.eventId,
		userId: params.userId,
		prefs: next
	});
	return next;
}
var TICKET_TYPE_OPTIONS = [
	{
		id: "standard",
		label: "Standard",
		description: "Theme-based light or dark pass"
	},
	{
		id: "silver",
		label: "Silver VIP",
		description: "3+ year members · Appwrite VIP"
	},
	{
		id: "gold",
		label: "Gold contributor",
		description: "Verified @appwrite.io · Contributor pass"
	}
];
function DebugMenuInitTicketPanel() {
	const [overrides, setOverrides] = useState(loadDebugOverrides);
	const [isResettingImage, setIsResettingImage] = useState(false);
	const { account, isAuthenticated } = useAuth();
	const queryClient = useQueryClient();
	const activeEvent = getActiveLaunchEvent();
	const mockEnabled = overrides.mockInitTicketType !== null;
	const selectedType = overrides.mockInitTicketType ?? "standard";
	const storedTicketPrefs = account && activeEvent ? readInitTicketPrefsFromAccountPrefs(account.prefs, activeEvent.id) ?? readInitTicketPrefsFromStorage(activeEvent.id, account.$id) : null;
	const hasStoredTicketImage = Boolean(storedTicketPrefs?.imageFileId);
	useEffect(() => subscribeToDebugOverrides(setOverrides), []);
	const handleResetTicketImage = async () => {
		if (!account || !activeEvent || isResettingImage) return;
		setIsResettingImage(true);
		try {
			await resetInitTicketImagePrefs({
				eventId: activeEvent.id,
				userId: account.$id,
				accountPrefs: account.prefs,
				queryClient
			});
			toast.success(typeof window !== "undefined" && window.location.pathname.startsWith("/init") ? "Ticket image reset. Regenerating now on /init." : "Ticket image reset. Open /init to regenerate your share image.");
		} catch {
			toast.error("Could not reset ticket image");
		} finally {
			setIsResettingImage(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1 py-1",
		"aria-label": "Init ticket mock",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "Mock ticket type"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[11px] text-[var(--network-globe-edge)]/80",
						children: mockEnabled ? formatInitMockTicketType(selectedType) : "Use account rules on /init"
					})]
				}), /* @__PURE__ */ jsx(DebugMenuSwitch, {
					checked: mockEnabled,
					onCheckedChange: (checked) => {
						setDebugOverride("mockInitTicketType", checked ? selectedType : null);
					},
					className: "shrink-0"
				})]
			}),
			mockEnabled ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg px-3 pb-3",
				children: [TICKET_TYPE_OPTIONS.map((option) => {
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setDebugOverride("mockInitTicketType", option.id),
						className: cn("flex w-full flex-col rounded-lg border px-3 py-2.5 text-start transition-colors", selectedType === option.id ? "border-[color-mix(in_srgb,var(--network-globe-edge)_60%,var(--border))] bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)]" : "border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)]"),
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[13px] font-medium text-foreground",
							children: option.label
						}), /* @__PURE__ */ jsx("span", {
							className: "mt-0.5 text-[11px] text-[var(--network-globe-edge)]/80",
							children: option.description
						})]
					}, option.id);
				}), /* @__PURE__ */ jsx("p", {
					className: "pt-1 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
					children: "Overrides gold, silver, and standard rules while enabled. Sign in on /init to preview the ticket."
				})]
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] px-3 py-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "Reset ticket image"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
						children: isAuthenticated ? hasStoredTicketImage ? "Clears the saved share image from your prefs. The /init page regenerates and saves a new one automatically." : "No saved ticket image in your prefs. Open /init to generate one." : "Sign in to clear your saved ticket image and regenerate it on /init."
					})]
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "mt-3 h-8 w-full text-[12px]",
					disabled: !isAuthenticated || !activeEvent || isResettingImage,
					onClick: () => void handleResetTicketImage(),
					children: isResettingImage ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "me-1.5 size-3.5 animate-spin" }), "Resetting"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(RotateCcw, { className: "me-1.5 size-3.5" }), "Reset ticket image"] })
				})]
			})
		]
	});
}
var DEFAULT_AMOUNT = 5;
var MAX_AMOUNT = 100;
var SEED_USER_PASSWORD = "Password1!";
var MEMORY_CATEGORIES = [
	"preference",
	"instruction",
	"fact"
];
var SEED_FILE_KINDS = [
	{
		ext: "txt",
		type: "text/plain",
		body: (seed, index) => `Debug seed file ${index}\nCreated by the console debug menu (${seed}).\n`
	},
	{
		ext: "json",
		type: "application/json",
		body: (seed, index) => `${JSON.stringify({
			seed,
			index,
			source: "debug-menu"
		}, null, 2)}\n`
	},
	{
		ext: "csv",
		type: "text/csv",
		body: (seed, index) => `id,name\n${index},${seed} file ${index}\n`
	}
];
var MOCK_MODEL_PROVIDERS = [
	{
		provider: "openai",
		model: "gpt-4o"
	},
	{
		provider: "anthropic",
		model: "claude-sonnet-4-5"
	},
	{
		provider: "google",
		model: "gemini-2.5-flash"
	},
	{
		provider: "openrouter",
		model: "openai/gpt-4o-mini"
	},
	{
		provider: "custom",
		model: "mock-model"
	}
];
var RESOURCE_LABELS = {
	projects: {
		singular: "project",
		plural: "projects"
	},
	memberships: {
		singular: "membership",
		plural: "memberships"
	},
	users: {
		singular: "user",
		plural: "users"
	},
	teams: {
		singular: "team",
		plural: "teams"
	},
	databases: {
		singular: "database",
		plural: "databases"
	},
	tables: {
		singular: "table",
		plural: "tables"
	},
	buckets: {
		singular: "bucket",
		plural: "buckets"
	},
	files: {
		singular: "file",
		plural: "files"
	},
	domains: {
		singular: "domain",
		plural: "domains"
	},
	models: {
		singular: "model",
		plural: "models"
	},
	memories: {
		singular: "memory",
		plural: "memories"
	}
};
function buildSeedLabel(prefix) {
	return prefix.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "debug";
}
function buildSeedFile(index, seed) {
	const kind = SEED_FILE_KINDS[(index - 1) % SEED_FILE_KINDS.length];
	return new File([kind.body(seed, index)], `${seed}-file-${index}.${kind.ext}`, { type: kind.type });
}
function getFailureMessage(results) {
	const firstFailure = results.find((result) => result.status === "rejected");
	if (!firstFailure) return null;
	return getErrorMessage(firstFailure.reason, "Failed to create resources");
}
function DebugMenuSeedResourcesPanel() {
	const queryClient = useQueryClient();
	const { features } = useConsoleProfile();
	const params = useParams({ strict: false });
	const routeOrgId = typeof params.orgId === "string" ? params.orgId : void 0;
	const projectId = typeof params.projectId === "string" ? params.projectId : void 0;
	const databaseId = typeof params.databaseId === "string" ? params.databaseId : void 0;
	const routeBucketId = typeof params.bucketId === "string" ? params.bucketId : void 0;
	const bucketId = isStoragePlaceholderBucketId(routeBucketId) ? void 0 : routeBucketId;
	const dbKind = typeof params.dbKind === "string" && isDatabaseRouteKind(params.dbKind) ? params.dbKind : "tablesdb";
	const usesCollections = usesCollectionsPath(dbKind);
	const tableLabels = usesCollections ? {
		singular: "collection",
		plural: "collections"
	} : {
		singular: "table",
		plural: "tables"
	};
	const { project } = useProject(projectId);
	const organizationId = routeOrgId || project?.teamId || null;
	const [amount, setAmount] = useState(String(DEFAULT_AMOUNT));
	const [prefix, setPrefix] = useState("debug");
	const [busyKind, setBusyKind] = useState(null);
	const [progress, setProgress] = useState(null);
	const parsedAmount = Number.parseInt(amount, 10);
	const safeAmount = Number.isFinite(parsedAmount) ? Math.min(MAX_AMOUNT, Math.max(1, parsedAmount)) : DEFAULT_AMOUNT;
	const contextLabel = useMemo(() => {
		const parts = [];
		if (projectId) parts.push(`Project ${projectId}`);
		if (organizationId) parts.push(`organization ${organizationId}`);
		if (databaseId) parts.push(`database ${databaseId}`);
		if (bucketId) parts.push(`bucket ${bucketId}`);
		if (parts.length > 0) return parts.join(", ");
		return "Agent models and memories work anywhere. Open a project or organization route for the rest.";
	}, [
		bucketId,
		databaseId,
		organizationId,
		projectId
	]);
	const runSeed = async (kind, createOne, invalidate, labels = RESOURCE_LABELS[kind]) => {
		const total = safeAmount;
		const seed = `${buildSeedLabel(prefix)}-${Date.now().toString(36)}`;
		setBusyKind(kind);
		setProgress({
			kind,
			created: 0,
			total,
			failed: 0
		});
		const results = [];
		try {
			for (let index = 1; index <= total; index += 1) {
				const result = await createOne(index, seed).then((value) => ({
					status: "fulfilled",
					value
				})).catch((reason) => ({
					status: "rejected",
					reason
				}));
				results.push(result);
				setProgress({
					kind,
					created: results.filter((item) => item.status === "fulfilled").length,
					failed: results.filter((item) => item.status === "rejected").length,
					total
				});
			}
			await invalidate();
			const created = results.filter((item) => item.status === "fulfilled").length;
			const failed = total - created;
			if (created > 0) toast.success(`Created ${created} ${created === 1 ? labels.singular : labels.plural}`);
			if (failed > 0) toast.error(`Failed to create ${failed} ${failed === 1 ? labels.singular : labels.plural}: ${getFailureMessage(results)}`);
		} catch (error) {
			toast.error(getErrorMessage(error, `Failed to create ${labels.plural}`));
		} finally {
			setBusyKind(null);
		}
	};
	const seedMemberships = () => {
		if (!organizationId) return;
		const role = features.orgRoles ? "developer" : "owner";
		runSeed("memberships", (index, seed) => sdk.forConsole.teams.createMembership({
			teamId: organizationId,
			email: `${seed}+member-${index}@appwrite.io`,
			roles: [role],
			url: `${window.location.origin}/join`
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"memberships",
				"organization",
				organizationId
			] });
		});
	};
	const seedUsers = () => {
		if (!projectId) return;
		runSeed("users", (index, seed) => createProjectUser(projectId, {
			email: `${seed}+user-${index}@appwrite.io`,
			name: `${seed} user ${index}`,
			password: SEED_USER_PASSWORD
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		});
	};
	const seedTeams = () => {
		if (!projectId) return;
		runSeed("teams", (index, seed) => createProjectTeam(projectId, { name: `${seed} team ${index}` }), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"teams",
				"project",
				projectId
			] });
		});
	};
	const seedProjects = () => {
		if (!organizationId) return;
		runSeed("projects", (index, seed) => createConsoleProject({
			projectId: ID.unique(),
			name: `${seed} project ${index}`,
			teamId: organizationId
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"projects",
				"team",
				organizationId
			] });
			await queryClient.invalidateQueries({ queryKey: ["organization-projects"] });
			await queryClient.invalidateQueries({ queryKey: ["projects"] });
		});
	};
	const seedDatabases = () => {
		if (!projectId) return;
		runSeed("databases", (index, seed) => createProjectDatabase(projectId, { name: `${seed} database ${index}` }), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"databases",
				"project",
				projectId
			] });
		});
	};
	const seedTables = () => {
		if (!projectId || !databaseId) return;
		try {
			requireOperationalDatabase(queryClient, projectId, databaseId);
		} catch (error) {
			toast.error(getErrorMessage(error, `Failed to create ${tableLabels.plural}`));
			return;
		}
		runSeed("tables", (index, seed) => createProjectTable(projectId, databaseId, dbKind, { name: `${seed} ${tableLabels.singular} ${index}` }), async () => {
			await queryClient.refetchQueries({ queryKey: [
				"tables",
				"project",
				projectId,
				databaseId
			] });
		}, tableLabels);
	};
	const seedBuckets = () => {
		if (!projectId) return;
		runSeed("buckets", (index, seed) => sdk.forProject(projectId).storage.createBucket({
			bucketId: ID.unique(),
			name: `${seed} bucket ${index}`
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: Dependencies.BUCKETS });
		});
	};
	const seedFiles = () => {
		if (!projectId || !bucketId) return;
		runSeed("files", (index, seed) => sdk.forProject(projectId).storage.createFile({
			bucketId,
			fileId: ID.unique(),
			file: buildSeedFile(index, seed)
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: Dependencies.FILES });
			await queryClient.refetchQueries({ queryKey: [
				"files",
				"project",
				projectId,
				"bucket",
				bucketId
			] });
		});
	};
	const seedDomains = () => {
		if (!organizationId) return;
		runSeed("domains", (index, seed) => sdk.forConsole.domains.create({
			teamId: organizationId,
			domain: `${seed}-${index}.example.com`
		}), async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"domains",
				"organization",
				organizationId
			] });
			await queryClient.invalidateQueries({ queryKey: Dependencies.DOMAINS });
		});
	};
	const seedModels = () => {
		runSeed("models", (index, seed) => {
			const provider = MOCK_MODEL_PROVIDERS[(index - 1) % MOCK_MODEL_PROVIDERS.length];
			return sdk.forConsole.agent.createModel({
				modelId: "unique()",
				name: `${seed} ${provider.provider} ${index}`,
				provider: provider.provider,
				model: provider.model,
				apiKey: `sk-debug-${seed}-${index}`,
				enabled: true,
				status: "ready"
			});
		}, async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "models"] });
		});
	};
	const seedMemories = () => {
		runSeed("memories", (index, seed) => {
			const category = MEMORY_CATEGORIES[(index - 1) % MEMORY_CATEGORIES.length];
			return sdk.forConsole.agent.createMemory({
				memoryId: "unique()",
				scope: "user",
				key: `${seed}.${category}.${index}`,
				content: `Debug ${category} #${index}: prefer concise answers and reuse this mock memory.`,
				category,
				priority: index,
				status: "active",
				source: "user"
			});
		}, async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "memories"] });
		});
	};
	const cards = [
		{
			kind: "models",
			title: "Agent models",
			description: "Create mock LLM models with fake API keys for the agent.",
			icon: /* @__PURE__ */ jsx(Cpu, { className: "h-3.5 w-3.5" }),
			disabled: false
		},
		{
			kind: "memories",
			title: "Agent memories",
			description: "Create mock preferences, instructions, and facts for the agent.",
			icon: /* @__PURE__ */ jsx(Brain, { className: "h-3.5 w-3.5" }),
			disabled: false
		},
		{
			kind: "projects",
			title: "Projects",
			description: "Create empty projects in the current organization.",
			icon: /* @__PURE__ */ jsx(FolderKanban, { className: "h-3.5 w-3.5" }),
			disabled: !organizationId,
			disabledReason: "Open an organization or project route first."
		},
		{
			kind: "memberships",
			title: "Memberships",
			description: "Invite mock appwrite.io emails to the current organization.",
			icon: /* @__PURE__ */ jsx(Users$1, { className: "h-3.5 w-3.5" }),
			disabled: !organizationId,
			disabledReason: "Open an organization or project route first."
		},
		{
			kind: "users",
			title: "Users",
			description: `Create Auth users with password ${SEED_USER_PASSWORD} in the current project.`,
			icon: /* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5" }),
			disabled: !projectId,
			disabledReason: "Open a project route first."
		},
		{
			kind: "teams",
			title: "Teams",
			description: "Create empty Auth teams in the current project.",
			icon: /* @__PURE__ */ jsx(UsersRound, { className: "h-3.5 w-3.5" }),
			disabled: !projectId,
			disabledReason: "Open a project route first."
		},
		{
			kind: "databases",
			title: "Empty DBs",
			description: "Create empty TablesDB databases in the current project.",
			icon: /* @__PURE__ */ jsx(Database, { className: "h-3.5 w-3.5" }),
			disabled: !projectId,
			disabledReason: "Open a project route first."
		},
		{
			kind: "tables",
			title: usesCollections ? "Collections" : "Tables",
			description: usesCollections ? "Create empty collections in the current database." : "Create empty tables in the current database.",
			icon: /* @__PURE__ */ jsx(Table2, { className: "h-3.5 w-3.5" }),
			disabled: !projectId || !databaseId,
			disabledReason: "Open a database route first."
		},
		{
			kind: "buckets",
			title: "Empty buckets",
			description: "Create empty storage buckets in the current project.",
			icon: /* @__PURE__ */ jsx(HardDrive, { className: "h-3.5 w-3.5" }),
			disabled: !projectId,
			disabledReason: "Open a project route first."
		},
		{
			kind: "files",
			title: "Files",
			description: "Upload mock text, JSON, and CSV files into the current bucket.",
			icon: /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5" }),
			disabled: !projectId || !bucketId,
			disabledReason: "Open a bucket route first."
		},
		{
			kind: "domains",
			title: "Mock domains",
			description: "Create unverified example.com domains on the organization.",
			icon: /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
			disabled: !organizationId,
			disabledReason: "Open an organization or project route first."
		}
	];
	const actions = {
		projects: seedProjects,
		memberships: seedMemberships,
		users: seedUsers,
		teams: seedTeams,
		databases: seedDatabases,
		tables: seedTables,
		buckets: seedBuckets,
		files: seedFiles,
		domains: seedDomains,
		models: seedModels,
		memories: seedMemories
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-3 px-1",
		"aria-label": "Seed resources",
		children: [
			/* @__PURE__ */ jsxs("p", {
				className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/90",
				children: [
					"Create test resources directly in the current context. Amount is capped at ",
					MAX_AMOUNT,
					" per click."
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 p-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-2 text-[10px] uppercase tracking-wider text-[var(--network-globe-edge)]/75",
					children: "Context"
				}), /* @__PURE__ */ jsx("p", {
					className: "break-all text-[11px] text-foreground/90",
					children: contextLabel
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-[1fr_120px] gap-2",
				children: [/* @__PURE__ */ jsxs("label", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium text-foreground",
						children: "Name prefix"
					}), /* @__PURE__ */ jsx(Input, {
						value: prefix,
						onChange: (event) => setPrefix(event.target.value),
						disabled: busyKind !== null,
						className: "h-8 border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40 text-[12px] text-foreground"
					})]
				}), /* @__PURE__ */ jsxs("label", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-medium text-foreground",
						children: "Amount"
					}), /* @__PURE__ */ jsx(Input, {
						type: "number",
						min: 1,
						max: MAX_AMOUNT,
						value: amount,
						onChange: (event) => setAmount(event.target.value),
						disabled: busyKind !== null,
						className: "h-8 border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40 text-[12px] text-foreground"
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: cards.map((card) => {
					const isBusy = busyKind === card.kind;
					const disabled = busyKind !== null || card.disabled;
					const cardProgress = progress?.kind === card.kind ? Math.round((progress.created + progress.failed) / progress.total * 100) : 0;
					return /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 p-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-start gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mt-0.5 text-[var(--network-globe-edge)]",
									children: card.icon
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[13px] font-medium text-foreground",
										children: card.title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
										children: card.disabled ? card.disabledReason : card.description
									})]
								})]
							}),
							isBusy && progress ? /* @__PURE__ */ jsxs("div", {
								className: "mb-3 space-y-1.5",
								children: [/* @__PURE__ */ jsx(Progress, {
									value: cardProgress,
									className: "h-1.5 bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)]"
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[10px] text-[var(--network-globe-edge)]/80",
									children: [
										progress.created,
										" created, ",
										progress.failed,
										" failed of",
										" ",
										progress.total
									]
								})]
							}) : null,
							/* @__PURE__ */ jsxs(Button, {
								type: "button",
								size: "sm",
								variant: "secondary",
								className: "h-8 w-full text-[11px]",
								disabled,
								onClick: actions[card.kind],
								children: [
									isBusy && /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }),
									"Create ",
									safeAmount
								]
							})
						]
					}, card.kind);
				})
			})
		]
	});
}
function formatCacheSavedAt(savedAt) {
	return new Date(savedAt).toLocaleString();
}
function DebugMenuTerminalPanel() {
	const [summary, setSummary] = useState(null);
	const [loading, setLoading] = useState(true);
	const [clearing, setClearing] = useState(false);
	const refreshSummary = useCallback(async () => {
		setLoading(true);
		try {
			setSummary(await loadCliTerminalCacheSummary());
		} finally {
			setLoading(false);
		}
	}, []);
	useEffect(() => {
		refreshSummary();
	}, [refreshSummary]);
	const handleClearCache = async () => {
		if (!window.confirm("Clear the local terminal cache? The Appwrite CLI will be reinstalled on the next command.")) return;
		setClearing(true);
		try {
			await clearCliTerminalCache();
			await refreshSummary();
			toast.success("Terminal cache cleared");
		} catch {
			toast.error("Failed to clear terminal cache");
		} finally {
			setClearing(false);
		}
	};
	const cache$1 = summary?.cache;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1 py-1",
		"aria-label": "Terminal settings",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg px-3 py-2.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Browser CLI cache"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
					children: "The project terminal installs the Appwrite CLI in the browser and caches the install in IndexedDB so later commands start faster."
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "CLI version"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: summary?.version ?? "…"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Package"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: summary?.packageName ?? "…"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "IndexedDB"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: summary?.indexedDb ?? "…"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Cached install"
						}), loading ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin text-[var(--network-globe-edge)]" }) : cache$1 ? /* @__PURE__ */ jsxs("span", {
							className: "font-medium text-foreground",
							children: [cache$1.fileCount.toLocaleString(), " files"]
						}) : /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground/70",
							children: "None"
						})]
					}),
					cache$1 ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Saved at"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: formatCacheSavedAt(cache$1.savedAt)
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-3",
				children: [/* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 w-full border-[color-mix(in_srgb,var(--network-globe-edge)_30%,var(--border))] bg-transparent text-[13px] text-foreground hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
					disabled: loading || clearing,
					onClick: () => void handleClearCache(),
					children: [clearing ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-3.5 w-3.5" }), "Clear terminal cache"]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/70",
					children: "Clears the cached CLI install and resets in-memory terminal runtimes. Open terminals will reinstall the CLI on the next command."
				})]
			})
		]
	});
}
function formatViewedAt(viewedAt) {
	return new Date(viewedAt).toLocaleString();
}
function RecentResourceDebugIcon({ entry }) {
	const siteFramework = getRecentResourceSiteFramework(entry);
	if (siteFramework) return /* @__PURE__ */ jsx(FrameworkIcon, {
		framework: siteFramework,
		size: "sm",
		className: "h-3.5 w-3.5"
	});
	const databaseIconHints = getRecentResourceDatabaseIconHints(entry);
	if (databaseIconHints.apiType || databaseIconHints.engine) return /* @__PURE__ */ jsx(DatabaseTypeIcon, {
		apiType: databaseIconHints.apiType,
		engine: databaseIconHints.engine,
		className: "h-3.5 w-3.5"
	});
	return /* @__PURE__ */ jsx(History, { className: "h-3.5 w-3.5 text-[var(--network-globe-edge)]" });
}
function metaLine(entry) {
	const parts = [PROJECT_RESOURCE_KIND_LABELS[entry.kind] ?? entry.kind, entry.resourceId];
	const siteFramework = getRecentResourceSiteFramework(entry);
	if (siteFramework) parts.push(`framework: ${siteFramework}`);
	const databaseIconHints = getRecentResourceDatabaseIconHints(entry);
	if (databaseIconHints.apiType) parts.push(`api: ${databaseIconHints.apiType}`);
	if (databaseIconHints.engine) parts.push(`engine: ${databaseIconHints.engine}`);
	return parts.join(" · ");
}
function DebugMenuRecentResourcesPanel() {
	const recentResources = useRecentResourcesSafe();
	const resources = recentResources?.resources ?? [];
	const handleReset = () => {
		if (!window.confirm("Clear all recent Command Center resources from memory and localStorage?")) return;
		recentResources?.clearRecentResources();
		toast.success("Recent resources cleared");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1 py-1",
		"aria-label": "Recent resources",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg px-3 py-2.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Command Center recent list"
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
					children: [
						"Stored in localStorage under",
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-muted px-1 py-0.5 text-[10px]",
							children: RECENT_RESOURCES_STORAGE_KEY
						}),
						". Newest first. Open a resource again after reset to rebuild the list (including site framework icons)."
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-2.5 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Entries"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: resources.length
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-2.5 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Max stored"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: 10
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-3 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-2.5 text-[11px]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[var(--network-globe-edge)]/80",
							children: "Max shown"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: 5
						})]
					})
				]
			}),
			resources.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "px-3 text-[11px] text-[var(--network-globe-edge)]/70",
				children: "No recent resources stored."
			}) : /* @__PURE__ */ jsx("div", {
				className: "space-y-1.5",
				children: resources.map((entry, index) => {
					const breadcrumbs = getRecentResourceBreadcrumbs(entry);
					return /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/30 px-3 py-2.5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/60",
								children: /* @__PURE__ */ jsx(RecentResourceDebugIcon, { entry })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1 space-y-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[12px] font-medium text-foreground",
											children: entry.name
										}), /* @__PURE__ */ jsxs("span", {
											className: "shrink-0 text-[10px] text-[var(--network-globe-edge)]/60",
											children: ["#", index + 1]
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "truncate text-[10px] text-[var(--network-globe-edge)]/80",
										children: breadcrumbs.join(" / ") || "-"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "truncate font-mono text-[10px] text-[var(--network-globe-edge)]/70",
										children: metaLine(entry)
									}),
									/* @__PURE__ */ jsx("p", {
										className: "truncate font-mono text-[10px] text-[var(--network-globe-edge)]/60",
										children: entry.href
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-[var(--network-globe-edge)]/60",
										children: formatViewedAt(entry.viewedAt)
									})
								]
							})]
						})
					}, entry.key);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-3",
				children: [/* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 w-full border-[color-mix(in_srgb,var(--network-globe-edge)_30%,var(--border))] bg-transparent text-[13px] text-foreground hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
					disabled: !recentResources || resources.length === 0,
					onClick: handleReset,
					children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-3.5 w-3.5" }), "Reset recent resources"]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/70",
					children: "Clears the in-memory list and localStorage. Visit site detail pages again to re-record entries with framework icons."
				})]
			})
		]
	});
}
var GROUPS = [
	{
		audience: "all",
		title: "All profiles",
		description: "Shown for both Cloud and self-hosted."
	},
	{
		audience: "cloud",
		title: "Cloud only",
		description: "Shown when the active profile is Cloud."
	},
	{
		audience: "self-hosted",
		title: "Self-hosted only",
		description: "Shown when the active profile is self-hosted."
	}
];
function audienceApplies(audience, profileId) {
	return audience === "all" || audience === profileId;
}
function DebugMenuCommunityShareExamplesPanel({ activeProfileId }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1",
		"aria-label": "Community support X share examples",
		dir: "ltr",
		lang: "en",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/90",
			children: [
				"Example posts for the community support wizard X card. Runtime filtering uses the active console profile (",
				/* @__PURE__ */ jsx("span", {
					className: "font-medium text-foreground",
					children: activeProfileId
				}),
				")."
			]
		}), GROUPS.map((group) => {
			const items = COMMUNITY_SUPPORT_SHARE_TEXTS.filter((item) => item.audience === group.audience);
			const active = audienceApplies(group.audience, activeProfileId);
			return /* @__PURE__ */ jsxs("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-3 px-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[12px] font-semibold text-foreground",
							children: [group.title, /* @__PURE__ */ jsxs("span", {
								className: "ms-1.5 font-normal tabular-nums text-muted-foreground",
								children: [
									"(",
									items.length,
									")"
								]
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-[11px] text-[var(--network-globe-edge)]/80",
							children: group.description
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: cn("shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider", active ? "border-[color-mix(in_srgb,var(--network-globe-edge)_35%,var(--border))] bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] text-foreground" : "border-border/60 text-muted-foreground"),
						children: active ? "Active" : "Hidden"
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-2",
					children: items.map((item, index) => /* @__PURE__ */ jsxs("li", {
						className: cn("rounded-lg border px-3 py-2.5 text-[12px] leading-relaxed", active ? "border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/30 text-foreground" : "border-border/50 bg-muted/10 text-muted-foreground"),
						children: [/* @__PURE__ */ jsx("p", {
							className: "whitespace-pre-wrap",
							children: item.text
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-1.5 text-[10px] tabular-nums text-muted-foreground",
							children: [item.text.length, "/280"]
						})]
					}, `${group.audience}-${index}`))
				})]
			}, group.audience);
		})]
	});
}
function isNonEmpty(value) {
	return typeof value === "string" && value.trim().length > 0;
}
const DEBUG_ENV_CATALOG = [
	{
		key: "VITE_APPWRITE_ENDPOINT",
		aliases: ["APPWRITE_ENDPOINT", "PUBLIC_APPWRITE_ENDPOINT"],
		group: "Runtime",
		description: "Appwrite API endpoint"
	},
	{
		key: "VITE_CONSOLE_PROFILE",
		group: "Runtime",
		description: "Console profile (cloud / self-hosted / native)"
	},
	{
		key: "VITE_CONSOLE_FINGERPRINT_KEY",
		aliases: ["PUBLIC_CONSOLE_FINGERPRINT_KEY"],
		group: "Runtime",
		description: "Console fingerprint HMAC key"
	},
	{
		key: "VITE_GROWTH_ENDPOINT",
		group: "Runtime",
		description: "Growth / feedback / support API"
	},
	{
		key: "VITE_STRIPE_PUBLISHABLE_KEY",
		group: "Runtime",
		description: "Stripe publishable key"
	},
	{
		key: "VITE_SENTRY_DSN",
		group: "Runtime",
		description: "Sentry error reporting"
	},
	{
		key: "VITE_PLAUSIBLE_SCRIPT_SRC",
		group: "Runtime",
		description: "Upstream Plausible script URL (proxied via /r/v.js and /r/e)"
	},
	{
		key: "VITE_CONSOLE_USER_VERIFICATION",
		group: "Runtime",
		description: "Override post-signup email verification"
	},
	{
		key: "VITE_CONSOLE_COOKIE_BANNER",
		group: "Runtime",
		description: "Override cookie consent banner"
	},
	{
		key: "VITE_CONSOLE_BLOG_DRAFTS",
		group: "Runtime",
		description: "Override draft blog post visibility"
	},
	{
		key: "VITE_CONSOLE_WEBSITE_ACCESS",
		group: "Runtime",
		description: "Override demo / soft-launch website password gate"
	},
	{
		key: "VITE_CONSTRUCTION",
		group: "Other",
		description: "Vite DEV header construction bar (false/0/off to hide; unset = on)"
	},
	{
		key: "VITE_THREADS_APPWRITE_ENDPOINT",
		group: "Threads",
		description: "Threads Appwrite endpoint"
	},
	{
		key: "VITE_THREADS_APPWRITE_PROJECT_ID",
		group: "Threads",
		description: "Threads project ID"
	},
	{
		key: "VITE_THREADS_DB_ID",
		group: "Threads",
		description: "Threads database ID"
	},
	{
		key: "VITE_THREADS_COL_THREADS_ID",
		group: "Threads",
		description: "Threads collection ID"
	},
	{
		key: "VITE_THREADS_COL_MESSAGES_ID",
		group: "Threads",
		description: "Messages collection ID"
	},
	{
		key: "VITE_THREADS_COL_AUTHORS_ID",
		group: "Threads",
		description: "Authors collection ID"
	},
	{
		key: "VITE_INIT_TICKET_STORAGE_ENDPOINT",
		group: "Init ticket storage",
		description: "Init ticket storage endpoint"
	},
	{
		key: "VITE_INIT_TICKET_STORAGE_PROJECT_ID",
		group: "Init ticket storage",
		description: "Init ticket storage project ID"
	},
	{
		key: "VITE_INIT_TICKET_STORAGE_BUCKET_ID",
		group: "Init ticket storage",
		description: "Init ticket storage bucket ID"
	},
	{
		key: "VITE_CONTACT_SALES_URL",
		group: "Other",
		description: "Contact sales URL override"
	},
	{
		key: "VITE_COMPANY_NAME",
		group: "Other",
		description: "Company name override"
	},
	{
		key: "VITE_LEGAL_EMAIL",
		group: "Other",
		description: "Legal contact email override"
	},
	{
		key: "VITE_APPWRITE_MCP_URL",
		group: "Other",
		description: "Appwrite MCP endpoint (assistant + OAuth resource)"
	},
	{
		key: "VITE_APPWRITE_AGENT_OAUTH_CLIENT_ID",
		group: "Other",
		description: "Pre-registered OAuth client id for Agent MCP connect"
	},
	{
		key: "VITE_SITE_ORIGIN",
		group: "Other",
		description: "Site origin (sitemap / absolute URLs)"
	}
];
function readBuildTimePresence() {
	return {
		VITE_THREADS_APPWRITE_ENDPOINT: isNonEmpty(void 0),
		VITE_THREADS_APPWRITE_PROJECT_ID: isNonEmpty(void 0),
		VITE_THREADS_DB_ID: isNonEmpty(void 0),
		VITE_THREADS_COL_THREADS_ID: isNonEmpty(void 0),
		VITE_THREADS_COL_MESSAGES_ID: isNonEmpty(void 0),
		VITE_THREADS_COL_AUTHORS_ID: isNonEmpty(void 0),
		VITE_INIT_TICKET_STORAGE_ENDPOINT: isNonEmpty(void 0),
		VITE_INIT_TICKET_STORAGE_PROJECT_ID: isNonEmpty(void 0),
		VITE_INIT_TICKET_STORAGE_BUCKET_ID: isNonEmpty(void 0),
		VITE_CONTACT_SALES_URL: isNonEmpty(""),
		VITE_COMPANY_NAME: isNonEmpty(""),
		VITE_LEGAL_EMAIL: isNonEmpty(""),
		VITE_APPWRITE_MCP_URL: isNonEmpty(void 0),
		VITE_APPWRITE_AGENT_OAUTH_CLIENT_ID: isNonEmpty(void 0),
		VITE_SITE_ORIGIN: isNonEmpty(void 0),
		VITE_CONSTRUCTION: isNonEmpty(void 0)
	};
}
function readRuntimePresence() {
	const config = getRuntimeConfig();
	return {
		VITE_APPWRITE_ENDPOINT: isNonEmpty(config.appwriteEndpoint),
		VITE_CONSOLE_PROFILE: isNonEmpty(config.consoleProfile),
		VITE_CONSOLE_FINGERPRINT_KEY: isNonEmpty(config.fingerprintKey),
		VITE_GROWTH_ENDPOINT: isNonEmpty(config.growthEndpoint),
		VITE_STRIPE_PUBLISHABLE_KEY: isNonEmpty(config.stripePublishableKey),
		VITE_SENTRY_DSN: isNonEmpty(config.sentryDsn),
		VITE_PLAUSIBLE_SCRIPT_SRC: isNonEmpty(config.plausibleScriptSrc),
		VITE_CONSOLE_USER_VERIFICATION: isNonEmpty(config.userVerification),
		VITE_CONSOLE_COOKIE_BANNER: isNonEmpty(config.cookieBanner),
		VITE_CONSOLE_BLOG_DRAFTS: isNonEmpty(config.blogDrafts),
		VITE_CONSOLE_WEBSITE_ACCESS: isNonEmpty(config.websiteAccess)
	};
}
function getDebugEnvStatuses() {
	const presence = {
		...readRuntimePresence(),
		...readBuildTimePresence()
	};
	return DEBUG_ENV_CATALOG.map((entry) => ({
		...entry,
		set: Boolean(presence[entry.key])
	}));
}
function summarizeDebugEnvStatuses(statuses) {
	const setCount = statuses.filter((s) => s.set).length;
	return {
		setCount,
		unsetCount: statuses.length - setCount,
		total: statuses.length
	};
}
var GROUP_ORDER = [
	"Runtime",
	"Threads",
	"Init ticket storage",
	"Other"
];
function groupStatuses(statuses) {
	const byGroup = /* @__PURE__ */ new Map();
	for (const status of statuses) {
		const list = byGroup.get(status.group) ?? [];
		list.push(status);
		byGroup.set(status.group, list);
	}
	return GROUP_ORDER.flatMap((group) => {
		const items = byGroup.get(group);
		return items?.length ? [{
			group,
			items
		}] : [];
	});
}
function matchesQuery(entry, query) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	const aliasHit = entry.aliases?.some((alias) => alias.toLowerCase().includes(q));
	return entry.key.toLowerCase().includes(q) || Boolean(aliasHit) || (entry.description?.toLowerCase().includes(q) ?? false) || entry.group.toLowerCase().includes(q) || (entry.set ? "set" : "not set").includes(q);
}
function DebugMenuEnvPanel() {
	const [search, setSearch] = useState("");
	const statuses = useMemo(() => getDebugEnvStatuses(), []);
	const summary = useMemo(() => summarizeDebugEnvStatuses(statuses), [statuses]);
	const filtered = useMemo(() => statuses.filter((entry) => matchesQuery(entry, search)), [statuses, search]);
	const groups = useMemo(() => groupStatuses(filtered), [filtered]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 px-1 py-1",
		"aria-label": "Environment variables",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg px-3 py-2.5",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "Environment variables"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
						children: [
							"Presence only. Values are never shown. Runtime keys come from",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-muted/60 px-1 py-0.5 text-[10px]",
								children: "window.__APP_CONFIG__"
							}),
							"; others from build-time",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-muted/60 px-1 py-0.5 text-[10px]",
								children: "import.meta.env"
							}),
							". Script-only secrets (e.g. Cloudflare, X/Twitter) are not available in the browser."
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[11px] text-[var(--network-globe-edge)]/70",
						children: [
							summary.setCount,
							" set · ",
							summary.unsetCount,
							" not set · ",
							summary.total,
							" ",
							"total"
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative px-1",
				children: [
					/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--network-globe-edge)]/60" }),
					/* @__PURE__ */ jsx(Input, {
						autoFocus: true,
						value: search,
						onChange: (event) => setSearch(event.target.value),
						placeholder: "Search env keys...",
						className: "h-8 border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40 ps-8 pe-8 text-[12px] text-foreground placeholder:text-[var(--network-globe-edge)]/50"
					}),
					search ? /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSearch(""),
						className: "absolute end-3.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded text-[var(--network-globe-edge)]/70 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
						"aria-label": "Clear search",
						children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
					}) : null
				]
			}),
			groups.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "px-3 py-2 text-[11px] text-[var(--network-globe-edge)]/70",
				children: "No matching env keys"
			}) : /* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: groups.map(({ group, items }) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--network-globe-edge)]/80",
					children: group
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-0.5",
					children: items.map((entry) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 rounded-lg px-3 py-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md", entry.set ? "bg-emerald-500/15 text-emerald-400" : "bg-muted/60 text-[var(--network-globe-edge)]/45"),
							title: entry.set ? "Set" : "Not set",
							"aria-label": entry.set ? "Set" : "Not set",
							children: entry.set ? /* @__PURE__ */ jsx(Check, {
								className: "h-3 w-3",
								"aria-hidden": true
							}) : /* @__PURE__ */ jsx(Minus, {
								className: "h-3 w-3",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-x-2 gap-y-0.5",
									children: [/* @__PURE__ */ jsx("code", {
										className: "break-all text-[12px] font-medium text-foreground",
										children: entry.key
									}), /* @__PURE__ */ jsx("span", {
										className: cn("text-[10px] font-medium uppercase tracking-wide", entry.set ? "text-emerald-400/90" : "text-[var(--network-globe-edge)]/55"),
										children: entry.set ? "Set" : "Not set"
									})]
								}),
								entry.description ? /* @__PURE__ */ jsx("p", {
									className: "mt-0.5 text-[11px] leading-snug text-[var(--network-globe-edge)]/70",
									children: entry.description
								}) : null,
								entry.aliases?.length ? /* @__PURE__ */ jsxs("p", {
									className: "mt-0.5 text-[10px] leading-snug text-[var(--network-globe-edge)]/55",
									children: ["Also accepts: ", entry.aliases.join(", ")]
								}) : null
							]
						})]
					}, entry.key))
				})] }, group))
			})
		]
	});
}
var MANUAL_VARIANTS = [
	{
		label: "Default",
		value: "default"
	},
	{
		label: "Green",
		value: "green"
	},
	{
		label: "Blue",
		value: "blue"
	},
	{
		label: "Red",
		value: "red"
	},
	{
		label: "Theme",
		value: "theme"
	},
	{
		label: "Theme + Green",
		value: "theme-green"
	},
	{
		label: "Theme + Blue",
		value: "theme-blue"
	},
	{
		label: "Theme + Red",
		value: "theme-red"
	}
];
function variantToneClass(variant) {
	if (variant === "blue" || variant === "theme-blue") return "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300";
	if (variant === "green" || variant === "theme-green") return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
	if (variant === "red" || variant === "theme-red") return "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300";
	return "border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 text-foreground";
}
function FaviconPreview({ variant, size = "md", className, alt }) {
	const { href } = resolveFaviconHref(variant);
	return /* @__PURE__ */ jsx("span", {
		className: cn("inline-flex shrink-0 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--border))] bg-[repeating-conic-gradient(#80808014_0%_25%,transparent_0%_50%)] bg-[length:8px_8px] bg-background", size === "lg" ? "h-12 w-12 p-2" : size === "sm" ? "h-7 w-7 p-1.5" : "h-9 w-9 p-2", className),
		"aria-hidden": alt ? void 0 : true,
		children: /* @__PURE__ */ jsx("img", {
			src: href,
			alt: alt ?? "",
			className: "h-full w-full object-contain",
			draggable: false
		})
	});
}
function StatusRow({ label, value, mono = false, leading }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3 px-3 py-2",
		children: [/* @__PURE__ */ jsx("dt", {
			className: "text-[11px] font-medium text-[var(--network-globe-edge)]/80",
			children: label
		}), /* @__PURE__ */ jsxs("dd", {
			className: cn("flex min-w-0 items-center gap-2 break-all text-[12px] leading-relaxed text-foreground", mono && "font-mono text-[11px]"),
			children: [leading, /* @__PURE__ */ jsx("span", {
				className: "min-w-0",
				children: value
			})]
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "px-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--network-globe-edge)]/80",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--border))] bg-muted/20",
			children
		})]
	});
}
function DebugMenuFaviconPanel() {
	const { setFavicon } = useFavicon();
	const params = useParams({ strict: false });
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [status, setStatus] = useState(() => getFaviconStatus());
	const [colorSchemeTick, setColorSchemeTick] = useState(0);
	useEffect(() => subscribeFaviconStatus(setStatus), []);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => setColorSchemeTick((n) => n + 1);
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);
	const routeProjectId = params.projectId?.trim() || void 0;
	const statusProjectId = status.context?.projectId?.trim() || void 0;
	const projectId = statusProjectId || routeProjectId;
	const { project } = useProject(projectId);
	const projectName = status.context?.projectName?.trim() || project?.name?.trim() || void 0;
	const organizationId = status.context?.organizationId?.trim() || params.orgId?.trim() || params.teamId?.trim() || project?.teamId?.trim() || void 0;
	const updatedLabel = useMemo(() => {
		if (!status.updatedAt) return "Never";
		return new Date(status.updatedAt).toLocaleString();
	}, [status.updatedAt]);
	const isBlue = isBlueFaviconVariant(status.variant);
	const isStatus = isStatusFaviconVariant(status.variant);
	const resources = status.context?.resources ?? [];
	const fields = status.context?.fields ?? [];
	const currentHref = resolveFaviconHref(status.variant).href;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 px-1 py-1",
		"aria-label": "Favicon status",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("space-y-2 rounded-lg border px-3 py-3", variantToneClass(status.variant)),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsx(FaviconPreview, {
						variant: status.variant,
						size: "lg",
						alt: `${FAVICON_VARIANT_LABELS[status.variant]} favicon`,
						className: "mt-0.5"
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 space-y-1",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] font-semibold",
								children: [FAVICON_VARIANT_LABELS[status.variant] ?? status.variant, isBlue ? " status dot" : isStatus ? " status" : ""]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] leading-relaxed opacity-90",
								children: status.reason
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-mono text-[10px] opacity-70",
								children: currentHref
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Variants",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-1.5 p-2 sm:grid-cols-4",
					children: MANUAL_VARIANTS.map((opt) => {
						return /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => {
								setFavicon(opt.value, {
									source: "debug-menu",
									reason: `Manually set to ${opt.label}`,
									context: {
										projectId,
										projectName,
										organizationId,
										pathname
									}
								});
							},
							className: cn("flex flex-col items-center gap-2 rounded-md border px-2.5 py-3 text-[11px] font-medium transition-colors", status.variant === opt.value ? "border-[var(--network-globe-edge)]/40 bg-[color-mix(in_srgb,var(--network-globe-edge)_14%,transparent)] text-foreground" : "border-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--border))] bg-background/40 text-[var(--network-globe-edge)] hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)] hover:text-foreground"),
							children: [/* @__PURE__ */ jsx(FaviconPreview, {
								variant: opt.value,
								size: "md",
								alt: opt.label
							}), /* @__PURE__ */ jsx("span", {
								className: "text-center text-[10px]",
								children: opt.label
							})]
						}, opt.value);
					})
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Status",
				children: /* @__PURE__ */ jsxs("dl", {
					className: "divide-y divide-[color-mix(in_srgb,var(--network-globe-edge)_12%,var(--border))]",
					children: [
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Variant",
							value: FAVICON_VARIANT_LABELS[status.variant] ?? status.variant,
							leading: /* @__PURE__ */ jsx(FaviconPreview, {
								variant: status.variant,
								size: "sm"
							})
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Source",
							value: FAVICON_SOURCE_LABELS[status.source] ?? status.source
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Trigger",
							value: status.reason
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Updated",
							value: updatedLabel
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Asset",
							value: currentHref,
							mono: true
						}),
						status.detail ? /* @__PURE__ */ jsx(StatusRow, {
							label: "Summary",
							value: status.detail,
							mono: true
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				title: "Project",
				children: /* @__PURE__ */ jsxs("dl", {
					className: "divide-y divide-[color-mix(in_srgb,var(--network-globe-edge)_12%,var(--border))]",
					children: [
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Name",
							value: projectName || "—"
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Project ID",
							value: projectId || "—",
							mono: true
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Organization",
							value: organizationId || "—",
							mono: true
						}),
						/* @__PURE__ */ jsx(StatusRow, {
							label: "Route",
							value: status.context?.pathname || pathname || "—",
							mono: true
						}),
						!statusProjectId && routeProjectId ? /* @__PURE__ */ jsx(StatusRow, {
							label: "Note",
							value: "Project inferred from current route (trigger did not include project context)."
						}) : null,
						!projectId ? /* @__PURE__ */ jsx(StatusRow, {
							label: "Note",
							value: "No project in favicon context or current route."
						}) : null
					]
				})
			}),
			status.context?.conversationId || fields.length > 0 ? /* @__PURE__ */ jsx(Section, {
				title: "Conversation",
				children: /* @__PURE__ */ jsxs("dl", {
					className: "divide-y divide-[color-mix(in_srgb,var(--network-globe-edge)_12%,var(--border))]",
					children: [status.context?.conversationId ? /* @__PURE__ */ jsx(StatusRow, {
						label: "Conversation ID",
						value: status.context.conversationId,
						mono: true
					}) : null, fields.map((field) => /* @__PURE__ */ jsx(StatusRow, {
						label: field.label,
						value: field.value,
						mono: /id|status|lock/i.test(field.label)
					}, `${field.label}-${field.value}`))]
				})
			}) : null,
			resources.length > 0 ? /* @__PURE__ */ jsx(Section, {
				title: `Active resources (${resources.length})`,
				children: /* @__PURE__ */ jsx("ul", {
					className: "divide-y divide-[color-mix(in_srgb,var(--network-globe-edge)_12%,var(--border))]",
					children: resources.map((resource) => /* @__PURE__ */ jsxs("li", {
						className: "space-y-1 px-3 py-2.5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "rounded border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-background/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--network-globe-edge)]",
									children: resource.type
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[12px] font-medium text-foreground",
									children: resource.name || resource.id
								}),
								resource.status ? /* @__PURE__ */ jsx("span", {
									className: "text-[11px] text-[var(--network-globe-edge)]/80",
									children: resource.status
								}) : null
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-0.5 font-mono text-[11px] text-[var(--network-globe-edge)]/85",
							children: [/* @__PURE__ */ jsxs("p", { children: ["ID: ", resource.id] }), resource.deploymentId ? /* @__PURE__ */ jsxs("p", { children: ["Deployment: ", resource.deploymentId] }) : null]
						})]
					}, `${resource.type}-${resource.id}-${resource.deploymentId ?? ""}`))
				})
			}) : null
		]
	}, `favicon-previews-${colorSchemeTick}`);
}
const DEBUG_CLIENT_IP_PATH = "/debug/ip";
function readSsrClientIpSnapshot() {
	if (typeof window === "undefined") return null;
	return window["__SSR_CLIENT_IP__"] ?? null;
}
function parseCloudflareTraceIp(text) {
	return text.match(/^ip=(.+)$/m)?.[1]?.trim() || null;
}
function normalizeIp(ip) {
	return ip.trim().toLowerCase();
}
function ipsMatch(left, right) {
	if (!left || !right) return false;
	return normalizeIp(left) === normalizeIp(right);
}
async function fetchWithTimeout(url, timeoutMs = 4e3) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	try {
		return await fetch(url, {
			cache: "no-store",
			credentials: "omit",
			signal: controller.signal
		});
	} finally {
		clearTimeout(timer);
	}
}
async function fetchBrowserPublicIp() {
	try {
		const traceResponse = await fetchWithTimeout(new URL("/cdn-cgi/trace", window.location.origin).toString());
		if (traceResponse.ok) {
			const ip = parseCloudflareTraceIp(await traceResponse.text());
			if (ip) return {
				ip,
				source: "cdn-cgi/trace",
				error: null
			};
		}
	} catch {}
	try {
		const ipifyResponse = await fetchWithTimeout("https://api.ipify.org?format=json");
		if (ipifyResponse.ok) {
			const payload = await ipifyResponse.json();
			const ip = typeof payload.ip === "string" ? payload.ip.trim() : "";
			if (ip) return {
				ip,
				source: "ipify",
				error: null
			};
		}
		return {
			ip: null,
			source: null,
			error: `ipify HTTP ${ipifyResponse.status}`
		};
	} catch (error) {
		return {
			ip: null,
			source: null,
			error: error instanceof Error ? error.message : "Browser IP lookup failed"
		};
	}
}
async function fetchLiveClientIpSnapshot() {
	const response = await fetch(DEBUG_CLIENT_IP_PATH, {
		cache: "no-store",
		credentials: "same-origin"
	});
	if (!response.ok) throw new Error(`Debug IP endpoint HTTP ${response.status}`);
	return await response.json();
}
function formatIp(ip, loading) {
	if (loading) return "…";
	return ip || "Missing";
}
function sourceLabel(source) {
	if (source === "cdn-cgi/trace") return "/cdn-cgi/trace";
	if (source === "ipify") return "ipify";
	return "Browser lookup";
}
function resolvedSourceLabel(snapshot) {
	if (snapshot?.source === "x-cdn-client-ip") return CLIENT_IP_HEADER;
	if (snapshot?.source === "runtime") return "Runtime request IP";
	return "No IP resolved";
}
async function copyValue(label, value) {
	try {
		await navigator.clipboard.writeText(value);
		toast.success(`${label} copied`);
	} catch {
		toast.error("Could not copy to clipboard");
	}
}
function IpRow({ label, value, hint, loading }) {
	const display = formatIp(value, loading);
	const canCopy = Boolean(value) && !loading;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start justify-between gap-3 text-[11px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[var(--network-globe-edge)]/80",
				children: label
			}), hint ? /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 text-[10px] leading-relaxed text-[var(--network-globe-edge)]/55",
				children: hint
			}) : null]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [/* @__PURE__ */ jsx("code", {
				className: cn("max-w-[220px] truncate font-medium", loading || !value ? "text-[var(--network-globe-edge)]/70" : "text-foreground"),
				title: value ?? void 0,
				children: display
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: !canCopy,
				onClick: () => {
					if (!value) return;
					copyValue(label, value);
				},
				className: "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[var(--network-globe-edge)]/70 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground disabled:pointer-events-none disabled:opacity-30",
				"aria-label": `Copy ${label}`,
				children: /* @__PURE__ */ jsx(Copy, {
					className: "h-3 w-3",
					"aria-hidden": true
				})
			})]
		})]
	});
}
function ComparisonBadge({ left, right, loading }) {
	if (loading) return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-[var(--network-globe-edge)]/70",
		children: [/* @__PURE__ */ jsx(Loader2, {
			className: "h-3 w-3 animate-spin",
			"aria-hidden": true
		}), "Checking"]
	});
	if (!left || !right) return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-amber-400/90",
		children: [/* @__PURE__ */ jsx(AlertTriangle, {
			className: "h-3 w-3",
			"aria-hidden": true
		}), "Incomplete"]
	});
	if (ipsMatch(left, right)) return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-emerald-400/90",
		children: [/* @__PURE__ */ jsx(Check, {
			className: "h-3 w-3",
			"aria-hidden": true
		}), "Match"]
	});
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-amber-400/90",
		children: [/* @__PURE__ */ jsx(AlertTriangle, {
			className: "h-3 w-3",
			"aria-hidden": true
		}), "Mismatch"]
	});
}
function DebugMenuIpPanel() {
	const [ssrSnapshot, setSsrSnapshot] = useState(null);
	const [liveSnapshot, setLiveSnapshot] = useState(null);
	const [browserIp, setBrowserIp] = useState(null);
	const [state, setState] = useState("loading");
	const [error, setError] = useState(null);
	const refresh = useCallback(async () => {
		setState("loading");
		setError(null);
		setSsrSnapshot(readSsrClientIpSnapshot());
		const [browserResult, liveResult] = await Promise.allSettled([fetchBrowserPublicIp(), fetchLiveClientIpSnapshot()]);
		if (browserResult.status === "fulfilled") setBrowserIp(browserResult.value);
		else setBrowserIp({
			ip: null,
			source: null,
			error: browserResult.reason instanceof Error ? browserResult.reason.message : "Browser IP lookup failed"
		});
		if (liveResult.status === "fulfilled") {
			setLiveSnapshot(liveResult.value);
			setState("ready");
			return;
		}
		setLiveSnapshot(null);
		setState("error");
		setError(liveResult.reason instanceof Error ? liveResult.reason.message : "Failed to read the live server IP");
	}, []);
	useEffect(() => {
		refresh();
	}, [refresh]);
	const loading = state === "loading";
	const browserValue = browserIp?.ip ?? null;
	const ssrValue = ssrSnapshot?.ip ?? null;
	const liveValue = liveSnapshot?.ip ?? null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 px-1 py-1",
		"aria-label": "Client IP comparison",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 rounded-lg px-3 py-2.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "Client IP comparison"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[10px] text-[var(--network-globe-edge)]/70",
							children: ["Browser / SSR", /* @__PURE__ */ jsx(ComparisonBadge, {
								left: browserValue,
								right: ssrValue,
								loading
							})]
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-[10px] text-[var(--network-globe-edge)]/70",
							children: ["SSR / request", /* @__PURE__ */ jsx(ComparisonBadge, {
								left: ssrValue,
								right: liveValue,
								loading
							})]
						})]
					})]
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[11px] leading-relaxed text-[var(--network-globe-edge)]/80",
					children: [
						"Browser IP is looked up from the client. SSR and this request resolve via",
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-muted/60 px-1 py-0.5 text-[10px]",
							children: CLIENT_IP_HEADER
						}),
						", then the runtime request IP if every IP header is missing. Hop headers are shown for diagnosis only."
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2.5 rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-3",
				children: [
					/* @__PURE__ */ jsx(IpRow, {
						label: "Browser",
						value: browserValue,
						hint: browserIp?.error ? browserIp.error : sourceLabel(browserIp?.source ?? null),
						loading: loading && !browserIp
					}),
					/* @__PURE__ */ jsx(IpRow, {
						label: "SSR",
						value: ssrValue,
						hint: resolvedSourceLabel(ssrSnapshot),
						loading: false
					}),
					/* @__PURE__ */ jsx(IpRow, {
						label: "This request",
						value: liveValue,
						hint: loading ? `Client fetch to ${DEBUG_CLIENT_IP_PATH}` : resolvedSourceLabel(liveSnapshot),
						loading
					}),
					/* @__PURE__ */ jsx(IpRow, {
						label: "Runtime",
						value: liveSnapshot?.runtimeIp ?? ssrSnapshot?.runtimeIp ?? null,
						hint: "getRequestIP() / request.ip",
						loading: loading && !liveSnapshot
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40 px-3 py-3",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--network-globe-edge)]/80",
						children: "Hop headers"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-1.5 grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-2 text-[10px] font-medium uppercase tracking-wide text-[var(--network-globe-edge)]/55",
						children: [
							/* @__PURE__ */ jsx("span", { children: "Header" }),
							/* @__PURE__ */ jsx("span", { children: "SSR" }),
							/* @__PURE__ */ jsx("span", { children: "This request" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-1.5",
						children: CLIENT_IP_DEBUG_HEADERS.map((header) => {
							const ssrHeader = ssrSnapshot?.headers[header] ?? null;
							const liveHeader = liveSnapshot?.headers[header] ?? null;
							return /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] items-start gap-2 text-[11px]",
								children: [
									/* @__PURE__ */ jsx("code", {
										className: "break-all text-[var(--network-globe-edge)]/80",
										children: header
									}),
									/* @__PURE__ */ jsx("code", {
										className: cn("truncate font-medium", ssrHeader ? "text-foreground" : "text-[var(--network-globe-edge)]/70"),
										title: ssrHeader ?? void 0,
										children: ssrHeader || "Missing"
									}),
									/* @__PURE__ */ jsx("code", {
										className: cn("truncate font-medium", loading ? "text-[var(--network-globe-edge)]/70" : liveHeader ? "text-foreground" : "text-[var(--network-globe-edge)]/70"),
										title: liveHeader ?? void 0,
										children: loading ? "…" : liveHeader || "Missing"
									})
								]
							}, header);
						})
					})
				]
			}),
			error ? /* @__PURE__ */ jsx("p", {
				className: "px-3 text-[11px] text-amber-400/90",
				children: error
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "px-3",
				children: /* @__PURE__ */ jsxs(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 w-full border-[color-mix(in_srgb,var(--network-globe-edge)_30%,var(--border))] bg-transparent text-[13px] text-foreground hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
					disabled: loading,
					onClick: () => void refresh(),
					children: [loading ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(RefreshCw, { className: "me-1.5 h-3.5 w-3.5" }), "Refresh"]
				})
			})
		]
	});
}
const DEBUG_MENU_POSITION_KEY = "debug:menuPosition";
var LEGACY_DEBUG_MENU_CORNER_KEY = "debug:menuCorner";
var LEGACY_CORNERS = new Set([
	"bottom-right",
	"bottom-left",
	"top-right",
	"top-left"
]);
var DEFAULT_STORED_POSITION = {
	xRatio: 1,
	yRatio: 1
};
function isLegacyDebugMenuCorner(value) {
	return LEGACY_CORNERS.has(value);
}
function isFiniteNumber(value) {
	return typeof value === "number" && Number.isFinite(value);
}
function clampRatio(value) {
	return Math.min(Math.max(value, 0), 1);
}
function getPositionBounds(viewportWidth, viewportHeight) {
	const half = 44 / 2;
	return {
		minX: 16 + half,
		maxX: viewportWidth - 16 - half,
		minY: 16 + half,
		maxY: viewportHeight - 16 - half
	};
}
function storedToPixelPosition(stored, viewportWidth, viewportHeight) {
	const { minX, maxX, minY, maxY } = getPositionBounds(viewportWidth, viewportHeight);
	const xRatio = clampRatio(stored.xRatio);
	const yRatio = clampRatio(stored.yRatio);
	return {
		x: minX + xRatio * (maxX - minX),
		y: minY + yRatio * (maxY - minY)
	};
}
function pixelToStoredPosition(position, viewportWidth, viewportHeight) {
	const clamped = clampDebugMenuPosition(position, viewportWidth, viewportHeight);
	const { minX, maxX, minY, maxY } = getPositionBounds(viewportWidth, viewportHeight);
	const rangeX = maxX - minX;
	const rangeY = maxY - minY;
	return {
		xRatio: rangeX > 0 ? (clamped.x - minX) / rangeX : 1,
		yRatio: rangeY > 0 ? (clamped.y - minY) / rangeY : 1
	};
}
function getDefaultDebugMenuPosition(viewportWidth, viewportHeight) {
	return storedToPixelPosition(DEFAULT_STORED_POSITION, viewportWidth, viewportHeight);
}
function clampDebugMenuPosition(position, viewportWidth, viewportHeight) {
	const { minX, maxX, minY, maxY } = getPositionBounds(viewportWidth, viewportHeight);
	return {
		x: Math.min(Math.max(position.x, minX), Math.max(minX, maxX)),
		y: Math.min(Math.max(position.y, minY), Math.max(minY, maxY))
	};
}
function legacyCornerToStored(corner) {
	switch (corner) {
		case "bottom-right": return {
			xRatio: 1,
			yRatio: 1
		};
		case "bottom-left": return {
			xRatio: 0,
			yRatio: 1
		};
		case "top-right": return {
			xRatio: 1,
			yRatio: 0
		};
		case "top-left": return {
			xRatio: 0,
			yRatio: 0
		};
	}
}
function parseStoredPosition(raw) {
	try {
		const parsed = JSON.parse(raw);
		if (isFiniteNumber(parsed.xRatio) && isFiniteNumber(parsed.yRatio)) return {
			xRatio: clampRatio(parsed.xRatio),
			yRatio: clampRatio(parsed.yRatio)
		};
	} catch {}
	return null;
}
function parseLegacyAbsolutePosition(raw, viewportWidth, viewportHeight) {
	try {
		const parsed = JSON.parse(raw);
		if (isFiniteNumber(parsed.x) && isFiniteNumber(parsed.y)) return pixelToStoredPosition({
			x: parsed.x,
			y: parsed.y
		}, viewportWidth, viewportHeight);
	} catch {}
	return null;
}
function readDebugMenuPosition(viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0, viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0) {
	const width = viewportWidth || 1;
	const height = viewportHeight || 1;
	const fallback = getDefaultDebugMenuPosition(width, height);
	if (typeof window === "undefined") return fallback;
	try {
		const stored = localStorage.getItem(DEBUG_MENU_POSITION_KEY);
		if (stored) {
			const parsed = parseStoredPosition(stored);
			if (parsed) return storedToPixelPosition(parsed, width, height);
			const migrated = parseLegacyAbsolutePosition(stored, width, height);
			if (migrated) {
				writeDebugMenuStoredPosition(migrated);
				return storedToPixelPosition(migrated, width, height);
			}
		}
		const legacyCorner = localStorage.getItem(LEGACY_DEBUG_MENU_CORNER_KEY);
		if (legacyCorner && isLegacyDebugMenuCorner(legacyCorner)) {
			const migrated = legacyCornerToStored(legacyCorner);
			writeDebugMenuStoredPosition(migrated);
			localStorage.removeItem(LEGACY_DEBUG_MENU_CORNER_KEY);
			return storedToPixelPosition(migrated, width, height);
		}
	} catch {}
	return fallback;
}
function writeDebugMenuStoredPosition(position) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(DEBUG_MENU_POSITION_KEY, JSON.stringify(position));
	} catch {}
}
function writeDebugMenuPosition(position, viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0, viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0) {
	if (typeof window === "undefined") return;
	writeDebugMenuStoredPosition(pixelToStoredPosition(position, viewportWidth || 1, viewportHeight || 1));
}
function getDebugMenuPopoverPlacement(position, viewportWidth, viewportHeight) {
	const isBottomHalf = position.y > viewportHeight / 2;
	const isRightHalf = position.x > viewportWidth / 2;
	return {
		side: isBottomHalf ? "top" : "bottom",
		align: isRightHalf ? "end" : "start"
	};
}
function getDebugMenuTooltipSide(position, viewportWidth) {
	return position.x > viewportWidth / 2 ? "left" : "right";
}
var COMMUNITY_SUPPORT_WIZARD_CADENCE = `Shows the "A note from the team" wizard after 7 unique console days, then again every ~${Math.round(COMMUNITY_SUPPORT_REMINDER_MS / (1440 * 60 * 1e3))} days until the user picks an action.`;
var DEBUG_MENU_DRAG_THRESHOLD_PX = 6;
var DEBUG_MENU_LANGUAGE_COPY = getEnglishCatalog().app.debugMenu.language;
function DebugMenuBrandMark({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("pointer-events-none h-6 w-6 shrink-0", className),
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
function formatFeatureFlagDefaultLabel(defaultValue) {
	return defaultValue ? "Default: On" : "Default: Off";
}
function isFeatureFlagOverridden(item) {
	return item.defaultValue !== void 0 && item.switchValue !== void 0 && item.switchValue !== item.defaultValue && Boolean(item.onResetToDefault);
}
function matchesMenuItemSearch(item, query) {
	const trimmed = query.trim();
	if (!trimmed) return true;
	const q = trimmed.toLowerCase();
	if (item.label.toLowerCase().includes(q)) return true;
	if (item.description?.toLowerCase().includes(q)) return true;
	if (item.category?.toLowerCase().includes(q)) return true;
	if (item.submenu?.some((child) => matchesMenuItemSearch(child, query))) return true;
	return false;
}
function matchesFeatureFlagSearch(item, query) {
	if (!query.trim()) return true;
	if (item.label === "Reset all feature flags") return true;
	return matchesMenuItemSearch(item, query);
}
function filterFeatureFlagMenuItems(items, query) {
	if (!query.trim()) return items;
	return items.filter((item) => matchesFeatureFlagSearch(item, query));
}
function filterMenuSections(sections, query) {
	if (!query.trim()) return sections;
	return sections.map((section) => ({
		...section,
		items: section.items.filter((item) => matchesMenuItemSearch(item, query))
	})).filter((section) => section.items.length > 0);
}
function groupFeatureFlagMenuItems(items) {
	const categoryOrder = [];
	const categoryGroups = /* @__PURE__ */ new Map();
	const uncategorized = [];
	for (const item of items) {
		if (!item.category) {
			uncategorized.push(item);
			continue;
		}
		if (!categoryGroups.has(item.category)) {
			categoryOrder.push(item.category);
			categoryGroups.set(item.category, []);
		}
		categoryGroups.get(item.category)?.push(item);
	}
	const groups = categoryOrder.map((category) => ({
		category,
		items: categoryGroups.get(category) ?? []
	}));
	if (uncategorized.length > 0) groups.push({
		category: null,
		items: uncategorized
	});
	return groups;
}
function DebugMenuSwitchRow({ item, id, highlighted = false, navIndex, onHighlight }) {
	const showReset = isFeatureFlagOverridden(item);
	return /* @__PURE__ */ jsxs("div", {
		id,
		role: "option",
		"aria-selected": highlighted,
		"data-debug-nav-index": navIndex,
		onMouseEnter: onHighlight,
		className: cn("flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors", highlighted ? "bg-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--muted))] text-foreground" : "hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)]", item.disabled && "opacity-50", item.rowClassName),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[13px] font-medium text-foreground",
					children: item.label
				}), item.defaultValue !== void 0 && /* @__PURE__ */ jsx("span", {
					className: "text-[11px] font-normal text-[var(--network-globe-edge)]/70",
					children: formatFeatureFlagDefaultLabel(item.defaultValue)
				})]
			}), item.description && /* @__PURE__ */ jsx("div", {
				className: "mt-0.5 whitespace-pre-line text-[11px] text-[var(--network-globe-edge)]/80",
				children: item.description
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-shrink-0 items-center gap-1.5",
			children: [showReset && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => item.onResetToDefault?.(),
					className: "flex h-7 w-7 items-center justify-center rounded-md text-[var(--network-globe-edge)]/80 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40",
					"aria-label": `Reset ${item.label} to default`,
					tabIndex: -1,
					children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "left",
				children: "Reset to default"
			})] }), /* @__PURE__ */ jsx(DebugMenuSwitch, {
				checked: item.switchValue,
				onCheckedChange: item.switchOnChange,
				disabled: item.disabled,
				className: "flex-shrink-0",
				tabIndex: -1
			})]
		})]
	});
}
function debugMenuItemRowClassName({ disabled, active, highlighted, rowClassName }) {
	return cn("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40", disabled ? "cursor-not-allowed opacity-50" : highlighted || active ? "bg-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--muted))] text-foreground" : "text-foreground/90 hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground", rowClassName);
}
function renderDebugSubmenuItemRow(item, itemIndex, keyPrefix, nestedSubmenuParentKey, setActiveSubmenu, options) {
	const nestedSubmenuKey = nestedSubmenuParentKey ? `${nestedSubmenuParentKey}-${item.label}` : null;
	const hasNestedSubmenu = menuItemHasSubmenu(item);
	const key = `${keyPrefix}-${itemIndex}`;
	if (item.variant === "switch") return /* @__PURE__ */ jsx(DebugMenuSwitchRow, {
		item,
		id: options?.id,
		highlighted: options?.highlighted,
		navIndex: options?.navIndex,
		onHighlight: options?.onHighlight
	}, key);
	const handleSelect = () => {
		if (hasNestedSubmenu && nestedSubmenuKey) setActiveSubmenu(nestedSubmenuKey);
		else if (item.onClick) item.onClick();
	};
	const rowClassName = debugMenuItemRowClassName({
		disabled: item.disabled,
		active: item.active,
		highlighted: options?.highlighted,
		rowClassName: item.rowClassName
	});
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [
		item.icon && /* @__PURE__ */ jsx("span", {
			className: "flex-shrink-0 text-[var(--network-globe-edge)]",
			children: item.icon
		}),
		/* @__PURE__ */ jsxs("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("span", {
				className: "block font-medium",
				children: item.label
			}), item.description && /* @__PURE__ */ jsx("span", {
				className: "mt-0.5 block whitespace-pre-line break-all text-[11px] font-normal opacity-80",
				title: item.description,
				children: item.description
			})]
		}),
		item.badge !== void 0 && /* @__PURE__ */ jsx("span", {
			className: "flex-shrink-0 rounded-full bg-[color-mix(in_srgb,var(--network-globe-edge)_22%,transparent)] px-2 py-0.5 text-[11px] font-medium text-[var(--network-globe-edge)]",
			children: item.badge
		}),
		hasNestedSubmenu && /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 flex-shrink-0 text-[var(--network-globe-edge)]/60" })
	] });
	if (item.onRemove) return /* @__PURE__ */ jsxs("div", {
		id: options?.id,
		role: "option",
		"aria-selected": options?.highlighted ?? false,
		"data-debug-nav-index": options?.navIndex,
		onMouseEnter: options?.onHighlight,
		className: cn("flex items-center gap-1 rounded-lg transition-colors", options?.highlighted || item.active ? "bg-[color-mix(in_srgb,var(--network-globe-edge)_18%,var(--muted))]" : "hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)]", item.rowClassName),
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			tabIndex: -1,
			onClick: handleSelect,
			disabled: item.disabled,
			className: cn("flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-start text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40", item.disabled ? "cursor-not-allowed opacity-50" : "text-foreground/90 hover:text-foreground"),
			children: content
		}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				tabIndex: -1,
				onClick: (event) => {
					event.stopPropagation();
					item.onRemove?.();
				},
				className: "mr-1.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-[var(--network-globe-edge)]/80 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40",
				"aria-label": item.removeLabel ?? `Remove ${item.label}`,
				children: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "left",
			children: item.removeLabel ?? "Remove"
		})] })]
	}, key);
	return /* @__PURE__ */ jsx("button", {
		id: options?.id,
		type: "button",
		role: "option",
		"aria-selected": options?.highlighted ?? false,
		"data-debug-nav-index": options?.navIndex,
		tabIndex: -1,
		onMouseEnter: options?.onHighlight,
		onClick: handleSelect,
		disabled: item.disabled,
		className: rowClassName,
		children: content
	}, key);
}
function isDebugPanelSubmenuVariant(variant) {
	return variant === "profileComparison" || variant === "communityShareExamples" || variant === "prefsDebug" || variant === "initDayMock" || variant === "initTicketMock" || variant === "seedResources" || variant === "terminalSettings" || variant === "recentResources" || variant === "envStatus" || variant === "faviconStatus" || variant === "clientIp";
}
function createProfileFeatureFlagItem(label, description, key, profileId, currentValue, options) {
	const defaultValue = getCanonicalProfileFeatures(profileId)[key];
	return {
		label,
		description,
		category: options?.category,
		variant: "switch",
		switchValue: currentValue,
		defaultValue,
		disabled: options?.disabled,
		switchOnChange: (checked) => {
			setTimeout(() => setDebugProfileFeatureOverride(key, checked), 0);
		},
		onResetToDefault: () => {
			resetDebugProfileFeatureOverride(key);
		}
	};
}
function createDebugFeatureFlagItem(label, description, key, currentValue, onChange, onReset, category) {
	return {
		label,
		description,
		category,
		variant: "switch",
		switchValue: currentValue,
		defaultValue: FEATURE_FLAGS_MENU_DEBUG_DEFAULTS[key],
		switchOnChange: onChange,
		onResetToDefault: () => {
			resetFeatureFlagsMenuDebugOverride(key);
			onReset?.();
		}
	};
}
function menuItemHasSubmenu(item) {
	return Boolean(item.submenu?.length) || item.submenuVariant === "profileComparison" || item.submenuVariant === "communityShareExamples" || item.submenuVariant === "prefsDebug" || item.submenuVariant === "initDayMock" || item.submenuVariant === "initTicketMock" || item.submenuVariant === "seedResources" || item.submenuVariant === "terminalSettings" || item.submenuVariant === "recentResources" || item.submenuVariant === "envStatus" || item.submenuVariant === "faviconStatus" || item.submenuVariant === "clientIp";
}
function resolveMenuItemSubmenu(item, itemKey, activeKey, sectionTitle, parentSubmenuKey) {
	if (itemKey === activeKey) {
		if (item.submenuVariant) return {
			title: item.label,
			items: [],
			parentSection: sectionTitle,
			parentSubmenuKey,
			submenuVariant: item.submenuVariant
		};
		if (item.submenu?.length) return {
			title: item.label,
			items: item.submenu,
			parentSection: sectionTitle,
			parentSubmenuKey,
			note: item.submenuNote
		};
	}
	if (item.submenu) for (const child of item.submenu) {
		const resolved = resolveMenuItemSubmenu(child, `${itemKey}-${child.label}`, activeKey, sectionTitle, itemKey);
		if (resolved) return resolved;
	}
	return null;
}
function resolveActiveSubmenu(sections, activeKey) {
	for (const section of sections) for (const item of section.items) {
		const resolved = resolveMenuItemSubmenu(item, `${section.title}-${item.label}`, activeKey, section.title, null);
		if (resolved) return resolved;
	}
	return null;
}
function getInitSubmenuDescription(overrides) {
	const parts = [];
	if (overrides.mockInitCurrentDay !== null) parts.push(formatInitMockCurrentDay(overrides.mockInitCurrentDay));
	if (overrides.mockInitTicketType !== null) parts.push(formatInitMockTicketType(overrides.mockInitTicketType));
	if (overrides.previewInitReactionConfetti) parts.push("Confetti preview on");
	if (overrides.initLowPowerAnimations !== "auto") parts.push(`Low power ${overrides.initLowPowerAnimations}`);
	return parts.length > 0 ? parts.join(" · ") : "Launch week mocks and previews";
}
function formatLowPowerSignalValue(value) {
	if (value === null) return "Unavailable";
	if (typeof value === "boolean") return value ? "On" : "Off";
	return String(value);
}
function getLowPowerDecisionDescription(decision) {
	const result = decision.enabled ? "enabled" : "disabled";
	const jool = decision.joolAnimationEnabled ? "Jool can animate" : "Jool is blocked";
	if (decision.override !== "auto") return `Result: ${result}. ${decision.reason} Auto would be ${decision.autoDetected ? "enabled" : "disabled"}. ${jool}.`;
	return `Result: ${result}. ${decision.reason} ${jool}.`;
}
var PROFILE_IDS = ["cloud", "self-hosted"];
function ConsoleProfileComparisonTable({ activeProfileId }) {
	const featureKeys = Object.keys(CONSOLE_PROFILE_FEATURE_LABELS);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "px-1 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/90",
			children: [
				"Canonical defaults from",
				" ",
				/* @__PURE__ */ jsx("code", {
					className: "rounded bg-muted/50 px-1 py-0.5 text-[10px]",
					children: "CONSOLE_PROFILES"
				}),
				". Debug feature overrides are not reflected here."
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "overflow-x-auto rounded-lg border border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))]",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full border-collapse text-start text-[11px]",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs(TableRow$1, {
					className: "border-b border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-muted/40",
					children: [/* @__PURE__ */ jsx(TableHead$1, {
						className: "min-w-[140px]",
						children: "Feature"
					}), PROFILE_IDS.map((id) => /* @__PURE__ */ jsx(TableHead$1, {
						className: cn("w-[88px] text-center font-semibold uppercase tracking-wider", id === activeProfileId && "bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] text-foreground"),
						children: CONSOLE_PROFILES[id].label
					}, id))]
				}) }), /* @__PURE__ */ jsx("tbody", { children: featureKeys.map((key) => /* @__PURE__ */ jsxs(TableRow$1, {
					className: "border-b border-[color-mix(in_srgb,var(--network-globe-edge)_10%,var(--border))] last:border-0",
					children: [/* @__PURE__ */ jsx(TableCell$1, {
						className: "text-foreground/95",
						children: CONSOLE_PROFILE_FEATURE_LABELS[key]
					}), PROFILE_IDS.map((id) => {
						const on = CONSOLE_PROFILES[id].features[key];
						return /* @__PURE__ */ jsx(TableCell$1, {
							className: cn("text-center", id === activeProfileId && "bg-[color-mix(in_srgb,var(--network-globe-edge)_10%,transparent)]"),
							children: on ? /* @__PURE__ */ jsx(Check, {
								className: "mx-auto h-3.5 w-3.5 text-emerald-400",
								"aria-label": "On"
							}) : /* @__PURE__ */ jsx(Minus, {
								className: "mx-auto h-3.5 w-3.5 text-[var(--network-globe-edge)]/35",
								"aria-label": "Off"
							})
						}, id);
					})]
				}, key)) })]
			})
		})]
	});
}
function TableRow$1({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		className: cn("hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_5%,transparent)]", className),
		...props
	});
}
function TableHead$1({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		className: cn("px-2 py-2 text-[10px] font-semibold text-[var(--network-globe-edge)]/90", className),
		...props
	});
}
function TableCell$1({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		className: cn("px-2 py-1.5 align-middle text-foreground", className),
		...props
	});
}
function DebugMenu({ actions = [] }) {
	const { isDebugModeOpen: isVisible, closeDebugMode } = useDebugMode();
	const queryClient = useQueryClient();
	const [isOpen, setIsOpen] = useState(false);
	const [overrides, setOverrides] = useState(loadDebugOverrides);
	const { addMockBanner, clearAllBanners, banners } = usePromoBanner();
	const [faviconStatus, setFaviconStatus] = useState(() => getFaviconStatus());
	const { theme, setTheme } = useTheme();
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const [menuSearch, setMenuSearch] = useState("");
	const [featureFlagsSearch, setFeatureFlagsSearch] = useState("");
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
	const searchInputRef = useRef(null);
	const menuListRef = useRef(null);
	const languageCopy = DEBUG_MENU_LANGUAGE_COPY;
	const { profileId, features } = useConsoleProfile();
	const { preset: endpointPreset, customUrl: endpointCustomUrl, customEndpoints: endpointCustomEndpoints, effectiveUrl: endpointEffectiveUrl, envUrl: endpointEnvUrl } = useDebugEndpoint();
	const { preset: mcpEndpointPreset, customUrl: mcpEndpointCustomUrl, effectiveUrl: mcpEndpointEffectiveUrl } = useDebugMcpEndpoint();
	const profileFromOverride = hasDebugProfileOverride();
	const envProfileId = getEnvProfileId();
	const navigate = useNavigate();
	const initLowPowerDecision = useInitLowPowerAnimationDecision();
	const [position, setPosition] = useState(() => readDebugMenuPosition());
	const [isDragging, setIsDragging] = useState(false);
	const [dragPosition, setDragPosition] = useState(null);
	const dragStateRef = useRef({
		pointerId: -1,
		startX: 0,
		startY: 0,
		moved: false
	});
	const suppressClickRef = useRef(false);
	useEffect(() => {
		const handleResize = () => {
			setPosition(readDebugMenuPosition());
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const displayPosition = isDragging && dragPosition ? clampDebugMenuPosition(dragPosition, window.innerWidth, window.innerHeight) : position;
	const popoverPlacement = useMemo(() => getDebugMenuPopoverPlacement(displayPosition, window.innerWidth, window.innerHeight), [displayPosition]);
	const tooltipSide = useMemo(() => getDebugMenuTooltipSide(displayPosition, window.innerWidth), [displayPosition]);
	const handleDragPointerDown = useCallback((event) => {
		if (isOpen) return;
		dragStateRef.current = {
			pointerId: event.pointerId,
			startX: event.clientX,
			startY: event.clientY,
			moved: false
		};
		event.currentTarget.setPointerCapture(event.pointerId);
	}, [isOpen]);
	const handleDragPointerMove = useCallback((event) => {
		const dragState = dragStateRef.current;
		if (dragState.pointerId !== event.pointerId) return;
		const deltaX = event.clientX - dragState.startX;
		const deltaY = event.clientY - dragState.startY;
		if (!dragState.moved && Math.hypot(deltaX, deltaY) >= DEBUG_MENU_DRAG_THRESHOLD_PX) {
			dragState.moved = true;
			setIsDragging(true);
			setIsOpen(false);
		}
		if (dragState.moved) setDragPosition(clampDebugMenuPosition({
			x: event.clientX,
			y: event.clientY
		}, window.innerWidth, window.innerHeight));
	}, []);
	const finishDrag = useCallback((event) => {
		const dragState = dragStateRef.current;
		if (dragState.pointerId !== event.pointerId) return;
		event.currentTarget.releasePointerCapture(event.pointerId);
		dragState.pointerId = -1;
		if (dragState.moved) {
			const clamped = clampDebugMenuPosition({
				x: event.clientX,
				y: event.clientY
			}, window.innerWidth, window.innerHeight);
			setPosition(clamped);
			writeDebugMenuPosition(clamped);
			suppressClickRef.current = true;
		}
		dragState.moved = false;
		setIsDragging(false);
		setDragPosition(null);
	}, []);
	const handleDragClick = useCallback((event) => {
		if (suppressClickRef.current) {
			event.preventDefault();
			event.stopPropagation();
			suppressClickRef.current = false;
		}
	}, []);
	const applyOverrideAndGoHome = useCallback((action) => {
		setIsOpen(false);
		setTimeout(() => {
			action();
			window.location.assign("/");
		}, 0);
	}, []);
	useEffect(() => {
		const unsubscribe = subscribeToDebugOverrides(setOverrides);
		return () => {
			unsubscribe?.();
		};
	}, []);
	useEffect(() => {
		if (!isOpen) return;
		return subscribeFaviconStatus(setFaviconStatus);
	}, [isOpen]);
	useEffect(() => {
		if (!isOpen) {
			setActiveSubmenu(null);
			setMenuSearch("");
			setFeatureFlagsSearch("");
			setHighlightedIndex(-1);
		}
	}, [isOpen]);
	const sections = useMemo(() => {
		const themeOptions = [
			{
				label: "☀️ Light",
				themeValue: "light"
			},
			{
				label: "🌙 Dark",
				themeValue: "dark"
			},
			{
				label: "💻 System",
				themeValue: "system"
			},
			{
				label: "🎨 Crazy",
				themeValue: "crazy"
			},
			{
				label: "🥷 Stealth",
				themeValue: "stealth"
			},
			{
				label: "✨ Premium",
				themeValue: "premium"
			},
			{
				label: "🔆 High contrast",
				themeValue: "high-contrast"
			},
			{
				label: "💖 Barbie",
				themeValue: "barbie"
			},
			{
				label: "📟 90s web",
				themeValue: "nineties"
			},
			{
				label: "🏛️ Legacy",
				themeValue: "legacy"
			}
		].map((opt) => ({
			label: opt.label,
			onClick: () => {
				setTheme(opt.themeValue);
				setIsOpen(false);
			},
			active: theme === opt.themeValue,
			icon: /* @__PURE__ */ jsx(Palette, { className: "h-3 w-3" })
		}));
		const detectedOs = detectUserOs();
		const userOsDescription = overrides.userOs === "auto" ? `Auto (${getUserOsLabel(detectedOs)})` : USER_OS_LABELS[overrides.userOs];
		const userOsOptions = [
			{
				label: "Auto",
				value: "auto",
				description: `Detect from device (${getUserOsLabel(detectedOs)})`
			},
			{
				label: "macOS",
				value: "macos",
				description: "macOS UI defaults and ⌘ shortcuts"
			},
			{
				label: "Windows",
				value: "windows",
				description: "Windows UI defaults and Ctrl shortcuts"
			},
			{
				label: "Linux",
				value: "linux",
				description: "Linux UI defaults and Ctrl shortcuts"
			}
		].map((option) => ({
			label: option.label,
			description: option.description,
			onClick: () => {
				setOverrides((prev) => ({
					...prev,
					userOs: option.value
				}));
				setDebugOverride("userOs", option.value);
			},
			active: overrides.userOs === option.value,
			icon: /* @__PURE__ */ jsx(Monitor, { className: "h-3 w-3" })
		}));
		const pageDirectionDescription = overrides.pageDirection === "rtl" ? "Right-to-left (RTL)" : "Left-to-right (LTR)";
		const pageDirectionOptions = [{
			label: "LTR (default)",
			value: "ltr",
			description: "Left-to-right layout"
		}, {
			label: "RTL",
			value: "rtl",
			description: "Right-to-left layout for i18n testing"
		}].map((option) => ({
			label: option.label,
			description: option.description,
			onClick: () => {
				setOverrides((prev) => ({
					...prev,
					pageDirection: option.value
				}));
				setDebugOverride("pageDirection", option.value);
			},
			active: overrides.pageDirection === option.value,
			icon: /* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" })
		}));
		const languageDescription = overrides.language === "bs" ? "Bosanski" : overrides.language === "he" ? languageCopy.activeHebrew : overrides.language === "ja" ? languageCopy.activeJapanese : languageCopy.activeEnglish;
		const languageOptions = [
			{
				label: "Bosanski",
				value: "bs",
				description: "Koristi bosanski jezik."
			},
			{
				label: languageCopy.englishLabel,
				value: "en",
				description: languageCopy.englishDescription
			},
			{
				label: languageCopy.hebrewLabel,
				value: "he",
				description: languageCopy.hebrewDescription
			},
			{
				label: languageCopy.japaneseLabel,
				value: "ja",
				description: languageCopy.japaneseDescription
			}
		].map((option) => ({
			label: option.label,
			description: option.description,
			onClick: () => {
				setOverrides((prev) => ({
					...prev,
					language: option.value,
					...option.value === "he" ? { pageDirection: "rtl" } : option.value === "en" || option.value === "ja" || option.value === "bs" ? { pageDirection: "ltr" } : {}
				}));
				setDebugOverride("language", option.value);
				if (option.value === "he") setDebugOverride("pageDirection", "rtl");
				else if (option.value === "en" || option.value === "ja" || option.value === "bs") setDebugOverride("pageDirection", "ltr");
			},
			active: overrides.language === option.value,
			icon: /* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" })
		}));
		const activeEndpointUrl = endpointEffectiveUrl ?? endpointEnvUrl ?? "—";
		const activeEndpointBadge = !endpointPreset ? "Env" : endpointPreset === "custom" ? "Custom" : ENDPOINT_PRESETS[endpointPreset]?.label ?? endpointPreset;
		const activeMcpEndpointUrl = mcpEndpointEffectiveUrl || getEnvMcpEndpointUrl();
		const activeMcpEndpointBadge = !mcpEndpointPreset ? "Env" : mcpEndpointPreset === "custom" ? "Custom" : MCP_ENDPOINT_PRESETS[mcpEndpointPreset]?.label ?? mcpEndpointPreset;
		const activeProfileLabel = CONSOLE_PROFILES[profileId].label;
		const activeProfileBadge = profileFromOverride ? "Override" : "Env";
		const activeProfileDescription = profileFromOverride ? `${activeProfileLabel} (debug override)` : `${activeProfileLabel} (VITE_CONSOLE_PROFILE → ${CONSOLE_PROFILES[envProfileId].label})`;
		const profileOptions = [
			{
				label: "Cloud",
				description: CONSOLE_PROFILES.cloud.description,
				active: profileFromOverride && profileId === "cloud",
				icon: /* @__PURE__ */ jsx(Cloud, { className: "h-3 w-3" }),
				onClick: () => {
					applyOverrideAndGoHome(() => setDebugProfileOverride("cloud"));
				}
			},
			{
				label: "Self-hosted",
				description: CONSOLE_PROFILES["self-hosted"].description,
				active: profileFromOverride && profileId === "self-hosted",
				icon: /* @__PURE__ */ jsx(Server, { className: "h-3 w-3" }),
				onClick: () => {
					applyOverrideAndGoHome(() => setDebugProfileOverride("self-hosted"));
				}
			},
			{
				label: "Use env var",
				description: `Current env: ${CONSOLE_PROFILES[envProfileId].label}`,
				active: !profileFromOverride,
				onClick: () => {
					applyOverrideAndGoHome(() => setDebugProfileOverride(null));
				},
				icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" })
			},
			{
				label: "Compare profiles",
				description: "Canonical Cloud vs self-hosted feature flags",
				icon: /* @__PURE__ */ jsx(Columns2, { className: "h-3 w-3" }),
				submenuVariant: "profileComparison"
			}
		];
		const lowPowerAnimationSubmenu = [
			...[
				{
					value: "auto",
					label: "Auto",
					description: "Use device, memory, and data-saver signals."
				},
				{
					value: "on",
					label: "On",
					description: "Force optimized Init animations for testing."
				},
				{
					value: "off",
					label: "Off",
					description: "Force full Init animations for comparison."
				}
			].map((option) => ({
				label: option.label,
				description: option.description,
				active: overrides.initLowPowerAnimations === option.value,
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				onClick: () => {
					setOverrides((prev) => ({
						...prev,
						initLowPowerAnimations: option.value
					}));
					setDebugOverride("initLowPowerAnimations", option.value);
				}
			})),
			{
				label: "Low-power decision",
				description: getLowPowerDecisionDescription(initLowPowerDecision),
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				disabled: true,
				rowClassName: "mt-2 border-t border-[color-mix(in_srgb,var(--network-globe-edge)_15%,var(--border))] pt-3"
			},
			{
				label: "Jool animation gate",
				description: initLowPowerDecision.joolAnimationReason,
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				disabled: true
			},
			{
				label: "Detection thresholds",
				description: "Auto enables low-power mode if Data Saver is on, connection is 2g or slow-2g, memory is 4 GB or less, or CPU has 4 logical cores or fewer.",
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				disabled: true
			},
			{
				label: "Detected signals",
				description: `CPU: ${formatLowPowerSignalValue(initLowPowerDecision.signals.hardwareConcurrency)} cores. Memory: ${formatLowPowerSignalValue(initLowPowerDecision.signals.deviceMemory)} GB. Data Saver: ${formatLowPowerSignalValue(initLowPowerDecision.signals.saveData)}. Connection: ${formatLowPowerSignalValue(initLowPowerDecision.signals.effectiveType)}. Reduced motion: ${formatLowPowerSignalValue(initLowPowerDecision.prefersReducedMotion)}.`,
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				disabled: true
			}
		];
		const initSubmenuItems = [
			{
				label: "Day",
				description: formatInitMockCurrentDay(overrides.mockInitCurrentDay),
				icon: /* @__PURE__ */ jsx(CalendarDays, { className: "h-3 w-3" }),
				submenuVariant: "initDayMock"
			},
			{
				label: "Ticket",
				description: formatInitMockTicketType(overrides.mockInitTicketType),
				icon: /* @__PURE__ */ jsx(Ticket, { className: "h-3 w-3" }),
				submenuVariant: "initTicketMock"
			},
			{
				label: "Confetti",
				description: overrides.previewInitReactionConfetti ? "Triggers with 1 user on the same reaction" : "Needs 5 users on the same reaction",
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				variant: "switch",
				switchValue: overrides.previewInitReactionConfetti,
				switchOnChange: (checked) => {
					setOverrides((prev) => ({
						...prev,
						previewInitReactionConfetti: checked
					}));
					setDebugOverride("previewInitReactionConfetti", checked);
				}
			},
			{
				label: "Low power",
				description: getLowPowerDecisionDescription(initLowPowerDecision),
				icon: /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
				submenu: lowPowerAnimationSubmenu
			}
		];
		return [
			{
				title: "Appearance",
				icon: /* @__PURE__ */ jsx(Palette, { className: "h-3.5 w-3.5" }),
				items: [
					{
						label: "Theme",
						icon: /* @__PURE__ */ jsx(Palette, { className: "h-3 w-3" }),
						submenu: themeOptions
					},
					{
						label: "Favicon",
						description: formatFaviconStatusSummary(faviconStatus),
						icon: /* @__PURE__ */ jsx(Image, { className: "h-3 w-3" }),
						submenuVariant: "faviconStatus"
					},
					{
						label: "Operating system",
						description: userOsDescription,
						icon: /* @__PURE__ */ jsx(Monitor, { className: "h-3 w-3" }),
						submenu: userOsOptions
					},
					{
						label: "Page direction",
						description: pageDirectionDescription,
						icon: /* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }),
						submenu: pageDirectionOptions
					},
					{
						label: languageCopy.label,
						description: languageDescription,
						icon: /* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }),
						submenu: languageOptions
					},
					{
						label: "Demos",
						description: "Preview alerts, banners, loaders, OAuth2, and pages.",
						icon: /* @__PURE__ */ jsx(Bug, { className: "h-3 w-3" }),
						submenu: [
							{
								label: "Status alert",
								description: overrides.mockCloudStatusAlert === "live" ? "Live" : overrides.mockCloudStatusAlert === "operational" ? "None" : overrides.mockCloudStatusAlert.charAt(0).toUpperCase() + overrides.mockCloudStatusAlert.slice(1),
								icon: /* @__PURE__ */ jsx(Cloud, { className: "h-3 w-3" }),
								submenu: [{
									label: "Live",
									description: "Use the public Appwrite Cloud status page.",
									onClick: () => {
										setDebugOverride("mockCloudStatusAlert", "live");
										setIsOpen(false);
									},
									active: overrides.mockCloudStatusAlert === "live",
									icon: /* @__PURE__ */ jsx(Cloud, { className: "h-3 w-3" })
								}, ...[
									{
										label: "None",
										value: "operational",
										description: "Normal operational state with no alert."
									},
									{
										label: "Degraded",
										value: "degraded",
										description: "Degraded-service alert."
									},
									{
										label: "Downtime",
										value: "downtime",
										description: "Outage alert."
									},
									{
										label: "Maintenance",
										value: "maintenance",
										description: "Maintenance alert."
									}
								].map((option) => ({
									label: option.label,
									description: option.description,
									onClick: () => {
										setDebugOverride("mockCloudStatusAlert", option.value);
										setIsOpen(false);
									},
									active: overrides.mockCloudStatusAlert === option.value,
									icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" })
								}))]
							},
							{
								label: "Promo banner",
								description: banners.length > 0 ? `${banners.length} active` : "None active",
								icon: /* @__PURE__ */ jsx(Megaphone, { className: "h-3 w-3" }),
								badge: banners.length > 0 ? banners.length : void 0,
								submenu: [{
									label: "Add",
									description: "Add a mock promo banner.",
									onClick: () => {
										addMockBanner();
										setIsOpen(false);
									},
									icon: /* @__PURE__ */ jsx(Megaphone, { className: "h-3 w-3" })
								}, ...banners.length > 0 ? [{
									label: "Clear all",
									description: "Remove all promo banners.",
									onClick: () => {
										clearAllBanners();
										setIsOpen(false);
									},
									icon: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" })
								}] : []]
							},
							{
								label: "Fullscreen loader",
								description: overrides.showFullscreenLoader ? "On" : "Off",
								icon: /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3" }),
								submenu: [{
									label: "On",
									description: "Keep the initial loader visible to preview it.",
									onClick: () => {
										setOverrides((prev) => ({
											...prev,
											showFullscreenLoader: true
										}));
										setDebugOverride("showFullscreenLoader", true);
										setIsOpen(false);
									},
									active: overrides.showFullscreenLoader,
									icon: /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3" })
								}, {
									label: "Off",
									description: "Return to normal loading behavior.",
									onClick: () => {
										setOverrides((prev) => ({
											...prev,
											showFullscreenLoader: false
										}));
										setDebugOverride("showFullscreenLoader", false);
										setIsOpen(false);
									},
									active: !overrides.showFullscreenLoader,
									icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" })
								}]
							},
							{
								label: "Error page",
								description: "Preview the error page.",
								onClick: () => {
									navigate({ to: "/debug/error-preview" });
									setIsOpen(false);
								},
								icon: /* @__PURE__ */ jsx(Bug, { className: "h-3 w-3" })
							},
							{
								label: "Test Sentry",
								description: "Force-init and send a test exception.",
								onClick: () => {
									setIsOpen(false);
									(async () => {
										const result = await sendSentryDebugTestError();
										if (result.ok) {
											toast.success(`Sentry test flushed (${result.eventId}). Check Issues filtered to environment "development".`);
											return;
										}
										toast.error(result.eventId ? `${result.reason} Event: ${result.eventId}` : result.reason);
									})();
								},
								icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" })
							},
							{
								label: "Org setup",
								description: "Preview organization creation progress.",
								onClick: () => {
									navigate({ to: "/debug/org-setup-preview" });
									setIsOpen(false);
								},
								icon: /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3" })
							},
							{
								label: "Verify email",
								description: "Preview the email verification page.",
								onClick: () => {
									navigate({ to: "/debug/verify-email-preview" });
									setIsOpen(false);
								},
								icon: /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3" })
							},
							{
								label: "OAuth2",
								description: "Preview consent, device, outcome, and relay screens.",
								icon: /* @__PURE__ */ jsx(KeyRound, { className: "h-3 w-3" }),
								submenu: [
									{
										label: "All screens",
										description: "Open the OAuth2 preview with a screen picker.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "consent" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(KeyRound, { className: "h-3 w-3" })
									},
									{
										label: "Consent",
										description: "Standard authorization consent.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "consent" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3" })
									},
									{
										label: "Consent (MCP)",
										description: "MCP grant with scope narrowing.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "consent-mcp" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(McpIcon, { className: "h-3 w-3" })
									},
									{
										label: "Consent (resources)",
										description: "Project and organization resource pickers.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "consent-resources" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Folder, { className: "h-3 w-3" })
									},
									{
										label: "Device code",
										description: "Enter a device authorization code.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "device-enter-code" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(MonitorSmartphone, { className: "h-3 w-3" })
									},
									{
										label: "Device confirm",
										description: "Confirm a prefilled device code.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "device-confirm-code" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(MonitorSmartphone, { className: "h-3 w-3" })
									},
									{
										label: "Device consent",
										description: "Device-flow consent screen.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "device-consent" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3" })
									},
									{
										label: "Access granted",
										description: "Authorization approved outcome.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "outcome-approved" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
									},
									{
										label: "Device connected",
										description: "Device-flow approved outcome.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "outcome-approved-device" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
									},
									{
										label: "Access granted (deep link)",
										description: "Approved with native deep-link retry.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "outcome-approved-deeplink" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
									},
									{
										label: "Request cancelled",
										description: "Denied / cancelled outcome.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "outcome-denied" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
									},
									{
										label: "Authorization failed",
										description: "Invalid or expired request error.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "error" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" })
									},
									{
										label: "Loading",
										description: "Consent / device loading spinner.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "loading" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3" })
									},
									{
										label: "Relay success",
										description: "Native OAuth callback success.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "relay-success" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
									},
									{
										label: "Relay failure",
										description: "Native OAuth callback failure.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "relay-failure" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" })
									},
									{
										label: "Relay missing URL",
										description: "Missing project redirect URL.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "relay-missing" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(Link2, { className: "h-3 w-3" })
									},
									{
										label: "Relay error",
										description: "OAuth error payload without project.",
										onClick: () => {
											navigate({
												to: "/debug/oauth2-preview",
												search: { screen: "relay-error" }
											});
											setIsOpen(false);
										},
										icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3" })
									}
								]
							},
							{
								label: "Functions editor",
								description: "Preview the Functions local editor.",
								onClick: () => {
									navigate({ to: "/debug/code-editor-preview" });
									setIsOpen(false);
								},
								icon: /* @__PURE__ */ jsx(Code2, { className: "h-3 w-3" })
							},
							{
								label: "Community support",
								description: "Wizard preview and X share examples",
								icon: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-3 w-3" }),
								submenuNote: COMMUNITY_SUPPORT_WIZARD_CADENCE,
								submenu: [{
									label: "Preview wizard",
									description: overrides.previewCommunitySupportWizard ? "Previewing" : "Force-show the fullscreen wizard",
									active: overrides.previewCommunitySupportWizard,
									onClick: () => {
										setOverrides((prev) => ({
											...prev,
											previewCommunitySupportWizard: true
										}));
										setDebugOverride("previewCommunitySupportWizard", true);
										setIsOpen(false);
									},
									icon: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-3 w-3" })
								}, {
									label: "X share examples",
									description: "Review all Cloud and self-hosted share drafts",
									icon: /* @__PURE__ */ jsx(MessageSquareQuote, { className: "h-3 w-3" }),
									submenuVariant: "communityShareExamples"
								}]
							}
						]
					}
				]
			},
			{
				title: "Settings",
				icon: /* @__PURE__ */ jsx(Settings, { className: "h-3.5 w-3.5" }),
				items: [
					{
						label: "Prefs",
						description: "View and edit account and team prefs.",
						icon: /* @__PURE__ */ jsx(Braces, { className: "h-3 w-3" }),
						submenuVariant: "prefsDebug"
					},
					{
						label: "Env",
						description: "Check if env vars are set (values never shown).",
						icon: /* @__PURE__ */ jsx(Variable, { className: "h-3 w-3" }),
						submenuVariant: "envStatus"
					},
					{
						label: "IP",
						description: "Compare browser IP with the IP SSR saw.",
						icon: /* @__PURE__ */ jsx(Network, { className: "h-3 w-3" }),
						submenuVariant: "clientIp"
					},
					{
						label: "Terminal",
						description: "View and clear the browser CLI cache.",
						icon: /* @__PURE__ */ jsx(Terminal, { className: "h-3 w-3" }),
						submenuVariant: "terminalSettings"
					},
					{
						label: "Recents",
						description: "View and reset Command Center history.",
						icon: /* @__PURE__ */ jsx(History, { className: "h-3 w-3" }),
						submenuVariant: "recentResources"
					},
					{
						label: "Seed",
						description: "Create mock agent models, memories, projects, and more.",
						icon: /* @__PURE__ */ jsx(Boxes, { className: "h-3 w-3" }),
						submenuVariant: "seedResources"
					},
					...features.init ? [{
						label: "Init",
						description: getInitSubmenuDescription(overrides),
						icon: /* @__PURE__ */ jsx(CalendarDays, { className: "h-3 w-3" }),
						submenu: initSubmenuItems
					}] : [],
					{
						label: "Flags",
						description: "Override console profile features.",
						icon: /* @__PURE__ */ jsx(FlaskConical, { className: "h-3 w-3" }),
						submenu: [
							createProfileFeatureFlagItem("Dedicated DBs support (global)", "Use fullscreen create wizard and show spec upgrade for supported DB types.", "dedicatedDbsSupport", profileId, features.dedicatedDbsSupport, { category: "Databases" }),
							createProfileFeatureFlagItem("Dedicated DBs: Documents DB", "Dedicated DBs support for Documents DB.", "dedicatedDbsDocumentsDB", profileId, features.dedicatedDbsDocumentsDB, { category: "Databases" }),
							createProfileFeatureFlagItem("Dedicated DBs: Vectors DB", "Dedicated DBs support for Vectors DB.", "dedicatedDbsVectorsDB", profileId, features.dedicatedDbsVectorsDB, { category: "Databases" }),
							createProfileFeatureFlagItem("Native DBs: PostgreSQL", "Enable dedicated PostgreSQL databases in the create wizard.", "nativeDbsPostgres", profileId, features.nativeDbsPostgres, { category: "Databases" }),
							createProfileFeatureFlagItem("Native DBs: MySQL", "Enable dedicated MySQL databases in the create wizard.", "nativeDbsMySQL", profileId, features.nativeDbsMySQL, { category: "Databases" }),
							createProfileFeatureFlagItem("Native DBs: MongoDB", "Enable dedicated MongoDB databases in the databases list.", "nativeDbsMongo", profileId, features.nativeDbsMongo, { category: "Databases" }),
							createProfileFeatureFlagItem("Console user verification", "Require email verification after signup; redirect to verify-email page on cloud.", "userVerification", profileId, features.userVerification, { category: "Auth & security" }),
							createProfileFeatureFlagItem("Cookie banner", "Show the locale-gated cookie consent banner and footer cookie settings.", "cookieBanner", profileId, features.cookieBanner, { category: "Auth & security" }),
							createProfileFeatureFlagItem("Firewall", "Show the project Firewall section, routes, rules, analytics, and logs.", "firewall", profileId, features.firewall, { category: "Auth & security" }),
							createProfileFeatureFlagItem("Project OAuth2 server", profileId === "cloud" ? "Project settings OAuth2 authorization server card on overview. Cloud profile only." : "Cloud profile only. Switch to Cloud profile to preview.", "oauth2Server", profileId, profileId === "cloud" ? features.oauth2Server : false, {
								disabled: profileId !== "cloud",
								category: "Auth & security"
							}),
							createProfileFeatureFlagItem("Organization OAuth apps", "Org settings OAuth apps tab and /settings/oauth-apps route.", "oauthApps", profileId, features.oauthApps, { category: "Organization" }),
							createProfileFeatureFlagItem("Organization API keys", "Org settings API keys tab and /settings/api-keys route.", "orgApiKeys", profileId, features.orgApiKeys, { category: "Organization" }),
							createProfileFeatureFlagItem("Blog drafts", "List draft blog posts above \"Explore by topic\" and open draft post pages (noindex).", "blogDrafts", profileId, features.blogDrafts, { category: "Docs" }),
							createProfileFeatureFlagItem("Partners docs", "Partner documentation hub, audience switcher, and /docs/partners routes.", "partnersDocs", profileId, features.partnersDocs, { category: "Docs" }),
							createProfileFeatureFlagItem("Agent", "In-app AI agent chat, header button, /agent routes, and Agent docs.", "agent", profileId, features.agent, { category: "UI & tools" }),
							createProfileFeatureFlagItem("Notifications", "Console notifications center (header bell and inbox popover).", "notifications", profileId, features.notifications, { category: "UI & tools" }),
							createProfileFeatureFlagItem("Organization marketplace", profileId === "cloud" ? "Org Marketplace tab (browse and publish apps). Cloud profile only." : "Cloud profile only. Switch to Cloud profile to preview.", "marketplace", profileId, profileId === "cloud" ? features.marketplace : false, {
								disabled: profileId !== "cloud",
								category: "Organization"
							}),
							createDebugFeatureFlagItem("Activity chart", "Show the activity log volume chart above the activity table.", "showActivityChart", overrides.showActivityChart, (checked) => {
								setOverrides((prev) => ({
									...prev,
									showActivityChart: checked
								}));
								setDebugOverride("showActivityChart", checked);
							}, void 0, "Usage & analytics"),
							createDebugFeatureFlagItem("Show native app bar", "App bar above header (native OS).", "showNativeAppBar", overrides.showNativeAppBar, (checked) => {
								setOverrides((prev) => ({
									...prev,
									showNativeAppBar: checked
								}));
								setDebugOverride("showNativeAppBar", checked);
							}, void 0, "UI & tools"),
							createDebugFeatureFlagItem("Success team card", "Show the success team card on organization overview (custom plans).", "showSuccessTeamCard", overrides.showSuccessTeamCard, (checked) => {
								setOverrides((prev) => ({
									...prev,
									showSuccessTeamCard: checked
								}));
								setDebugOverride("showSuccessTeamCard", checked);
							}, void 0, "UI & tools"),
							createDebugFeatureFlagItem("Functions local editor", "Functions list “Local editor” button and /functions/editor (Monaco, gzip for deploy).", "showFunctionsLocalEditor", overrides.showFunctionsLocalEditor, (checked) => {
								setOverrides((prev) => ({
									...prev,
									showFunctionsLocalEditor: checked
								}));
								setDebugOverride("showFunctionsLocalEditor", checked);
							}, void 0, "UI & tools"),
							...[],
							createDebugFeatureFlagItem("Unlock onboarding", "Unlock all Get started product sections without completing Connect.", "unlockOnboardingLocks", overrides.unlockOnboardingLocks, (checked) => {
								setOverrides((prev) => ({
									...prev,
									unlockOnboardingLocks: checked
								}));
								setDebugOverride("unlockOnboardingLocks", checked);
							}, void 0, "UI & tools"),
							createDebugFeatureFlagItem("Preview onboarding complete", "Force Get started progress to 100% to preview advocacy copy and Star on GitHub.", "previewOnboardingComplete", overrides.previewOnboardingComplete, (checked) => {
								setOverrides((prev) => ({
									...prev,
									previewOnboardingComplete: checked
								}));
								setDebugOverride("previewOnboardingComplete", checked);
							}, void 0, "UI & tools"),
							createDebugFeatureFlagItem("Preview community support wizard", `Force-show the skippable "A note from the team" wizard. ${COMMUNITY_SUPPORT_WIZARD_CADENCE}`, "previewCommunitySupportWizard", overrides.previewCommunitySupportWizard, (checked) => {
								setOverrides((prev) => ({
									...prev,
									previewCommunitySupportWizard: checked
								}));
								setDebugOverride("previewCommunitySupportWizard", checked);
							}, void 0, "UI & tools"),
							createDebugFeatureFlagItem("Disable usage breakdown queries", "Skip dimension-based usage API calls on the project overview (top endpoints, buckets, functions/sites). Charts and KPIs still load.", "disableUsageBreakdownQueries", overrides.disableUsageBreakdownQueries, (checked) => {
								setOverrides((prev) => ({
									...prev,
									disableUsageBreakdownQueries: checked
								}));
								setDebugOverride("disableUsageBreakdownQueries", checked);
								queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "usage-events" || query.queryKey[0] === "usage-gauges" || query.queryKey[0] === "usage-breakdown" });
							}, () => {
								setOverrides(loadDebugOverrides());
								queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "usage-events" || query.queryKey[0] === "usage-gauges" || query.queryKey[0] === "usage-breakdown" });
							}, "Usage & analytics"),
							...OVERVIEW_CHART_TAB_ORDER.map((tabId) => {
								const disableKey = OVERVIEW_CHART_TAB_DISABLE_KEYS[tabId];
								const label = OVERVIEW_CHART_TAB_LABELS[tabId];
								return createDebugFeatureFlagItem(`Disable overview ${label.toLowerCase()} chart`, `Hide the ${label} tab and usage queries on the project overview.`, disableKey, overrides[disableKey], (checked) => {
									setOverrides((prev) => ({
										...prev,
										[disableKey]: checked
									}));
									setDebugOverride(disableKey, checked);
									queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "usage-events" || query.queryKey[0] === "usage-gauges" || query.queryKey[0] === "usage-breakdown" });
								}, () => {
									setOverrides(loadDebugOverrides());
									queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "usage-events" || query.queryKey[0] === "usage-gauges" || query.queryKey[0] === "usage-breakdown" });
								}, "Usage & analytics");
							}),
							{
								label: "Reset all feature flags",
								description: "Restore every flag on this list to its default for your current profile.",
								onClick: () => {
									resetDebugProfileFeatureOverrides();
									resetFeatureFlagsMenuDebugOverrides();
									setOverrides(loadDebugOverrides());
									queryClient.invalidateQueries({ predicate: (query) => query.queryKey[0] === "usage-events" || query.queryKey[0] === "usage-gauges" || query.queryKey[0] === "usage-breakdown" });
									setIsOpen(false);
								},
								icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" }),
								rowClassName: "mt-2 border-t border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] pt-2"
							}
						]
					}
				]
			},
			{
				title: "Environment",
				icon: /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
				items: [
					{
						label: "Console profile",
						description: activeProfileDescription,
						badge: activeProfileBadge,
						icon: profileId === "cloud" ? /* @__PURE__ */ jsx(Cloud, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Server, { className: "h-3 w-3" }),
						submenu: profileOptions
					},
					(() => {
						const customEndpointItems = endpointCustomEndpoints.map((url) => {
							let hostLabel = url;
							try {
								hostLabel = new URL(url).host;
							} catch {}
							return {
								label: hostLabel,
								description: url,
								onClick: () => {
									applyOverrideAndGoHome(() => setDebugEndpointOverride("custom", url));
								},
								active: endpointPreset === "custom" && endpointCustomUrl === url,
								icon: /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
								removeLabel: "Remove custom endpoint",
								onRemove: () => {
									if (removeCustomDebugEndpoint(url)) applyOverrideAndGoHome(() => void 0);
								}
							};
						});
						const endpointOptions = [
							...Object.entries(ENDPOINT_PRESETS).map(([id, { label, url, description }]) => ({
								label,
								description: `${url} · ${description}`,
								onClick: () => {
									applyOverrideAndGoHome(() => setDebugEndpointOverride(id));
								},
								active: endpointPreset === id,
								icon: /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" })
							})),
							...customEndpointItems,
							{
								label: "Add custom...",
								description: "Save a custom API URL to this list",
								onClick: () => {
									const url = window.prompt("Enter API endpoint URL (e.g. https://my-appwrite.example/v1)", endpointPreset === "custom" && endpointCustomUrl ? endpointCustomUrl : activeEndpointUrl !== "—" ? activeEndpointUrl : "http://localhost/v1");
									if (url?.trim()) applyOverrideAndGoHome(() => setDebugEndpointOverride("custom", url.trim()));
								},
								icon: /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
								rowClassName: "mt-2 border-t border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] pt-2"
							},
							{
								label: "Use env var",
								description: endpointEnvUrl ? `VITE_APPWRITE_ENDPOINT → ${endpointEnvUrl}` : "Reset to VITE_APPWRITE_ENDPOINT",
								onClick: () => {
									applyOverrideAndGoHome(() => setDebugEndpointOverride(null));
								},
								active: !endpointPreset,
								icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" })
							}
						];
						return {
							label: "Server endpoint",
							description: activeEndpointUrl,
							badge: activeEndpointBadge,
							icon: /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
							submenu: endpointOptions
						};
					})(),
					(() => {
						const envMcpUrl = getEnvMcpEndpointUrl();
						const mcpEndpointOptions = [
							...Object.entries(MCP_ENDPOINT_PRESETS).map(([id, { label, url, description }]) => ({
								label,
								description: `${url} · ${description}`,
								onClick: () => {
									setDebugMcpEndpointOverride(id);
									setIsOpen(false);
								},
								active: mcpEndpointPreset === id,
								icon: /* @__PURE__ */ jsx(McpIcon, { className: "h-3 w-3" })
							})),
							{
								label: "Custom...",
								description: mcpEndpointPreset === "custom" && mcpEndpointCustomUrl ? mcpEndpointCustomUrl : "Enter a custom MCP URL",
								onClick: () => {
									const url = window.prompt("Enter Appwrite MCP endpoint URL (e.g. http://localhost:8100/)", mcpEndpointPreset === "custom" && mcpEndpointCustomUrl ? mcpEndpointCustomUrl : activeMcpEndpointUrl || "http://localhost:8100/");
									if (url?.trim()) {
										setDebugMcpEndpointOverride("custom", url.trim());
										setIsOpen(false);
									}
								},
								active: mcpEndpointPreset === "custom",
								icon: /* @__PURE__ */ jsx(McpIcon, { className: "h-3 w-3" })
							},
							{
								label: "Use env var",
								description: `VITE_APPWRITE_MCP_URL → ${envMcpUrl}`,
								onClick: () => {
									setDebugMcpEndpointOverride(null);
									setIsOpen(false);
								},
								active: !mcpEndpointPreset,
								icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" })
							}
						];
						return {
							label: "MCP endpoint",
							description: activeMcpEndpointUrl,
							badge: activeMcpEndpointBadge,
							icon: /* @__PURE__ */ jsx(McpIcon, { className: "h-3 w-3" }),
							submenu: mcpEndpointOptions
						};
					})()
				]
			},
			...actions.length > 0 ? [{
				title: "Custom Actions",
				items: actions.map((action) => ({
					label: action.label,
					onClick: () => {
						action.onClick();
						setIsOpen(false);
					},
					icon: action.icon
				}))
			}] : []
		];
	}, [
		theme,
		faviconStatus,
		profileId,
		features.dedicatedDbsSupport,
		features.dedicatedDbsDocumentsDB,
		features.dedicatedDbsVectorsDB,
		features.nativeDbsPostgres,
		features.nativeDbsMySQL,
		features.nativeDbsMongo,
		features.userVerification,
		features.cookieBanner,
		features.blogDrafts,
		features.oauthApps,
		features.oauth2Server,
		features.orgApiKeys,
		features.marketplace,
		features.partnersDocs,
		features.agent,
		features.notifications,
		features.firewall,
		features.init,
		endpointPreset,
		endpointCustomUrl,
		endpointCustomEndpoints,
		endpointEffectiveUrl,
		endpointEnvUrl,
		mcpEndpointPreset,
		mcpEndpointCustomUrl,
		mcpEndpointEffectiveUrl,
		profileFromOverride,
		envProfileId,
		initLowPowerDecision,
		overrides,
		banners.length,
		actions,
		navigate,
		setTheme,
		addMockBanner,
		clearAllBanners,
		languageCopy,
		applyOverrideAndGoHome
	]);
	const currentSubmenu = useMemo(() => activeSubmenu ? resolveActiveSubmenu(sections, activeSubmenu) : null, [activeSubmenu, sections]);
	const filteredSections = useMemo(() => filterMenuSections(sections, menuSearch), [sections, menuSearch]);
	const isFeatureFlagsSubmenu = currentSubmenu?.title === "Flags";
	const isPanelSubmenu = isDebugPanelSubmenuVariant(currentSubmenu?.submenuVariant);
	const hasSearchField = !currentSubmenu || isFeatureFlagsSubmenu;
	const filteredFeatureFlagItems = useMemo(() => {
		if (!isFeatureFlagsSubmenu || !currentSubmenu) return [];
		return filterFeatureFlagMenuItems(currentSubmenu.items, featureFlagsSearch);
	}, [
		currentSubmenu,
		featureFlagsSearch,
		isFeatureFlagsSubmenu
	]);
	const groupedFeatureFlagItems = useMemo(() => {
		if (!isFeatureFlagsSubmenu) return [];
		return groupFeatureFlagMenuItems(filteredFeatureFlagItems);
	}, [filteredFeatureFlagItems, isFeatureFlagsSubmenu]);
	const navigableItems = useMemo(() => {
		if (!currentSubmenu) return filteredSections.flatMap((section) => section.items.map((item) => ({
			id: `root__${section.title}__${item.label}`,
			item,
			submenuKey: menuItemHasSubmenu(item) ? `${section.title}-${item.label}` : null
		})));
		if (isPanelSubmenu) return [];
		if (isFeatureFlagsSubmenu) return filteredFeatureFlagItems.map((item) => ({
			id: `flags__${item.category ?? "general"}__${item.label}`,
			item,
			submenuKey: null
		}));
		return currentSubmenu.items.map((item) => ({
			id: `submenu__${activeSubmenu}__${item.label}`,
			item,
			submenuKey: menuItemHasSubmenu(item) && activeSubmenu ? `${activeSubmenu}-${item.label}` : null
		}));
	}, [
		activeSubmenu,
		currentSubmenu,
		filteredFeatureFlagItems,
		filteredSections,
		isFeatureFlagsSubmenu,
		isPanelSubmenu
	]);
	const navigableIndexById = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		navigableItems.forEach((entry, index) => {
			map.set(entry.id, index);
		});
		return map;
	}, [navigableItems]);
	const navigableIdsKey = useMemo(() => navigableItems.map((entry) => entry.id).join("\0"), [navigableItems]);
	useEffect(() => {
		if (!isFeatureFlagsSubmenu) setFeatureFlagsSearch("");
	}, [isFeatureFlagsSubmenu]);
	useEffect(() => {
		setHighlightedIndex(navigableItems.length > 0 ? 0 : -1);
	}, [navigableIdsKey, navigableItems.length]);
	useEffect(() => {
		if (!isOpen) return;
		const frame = window.requestAnimationFrame(() => {
			if (hasSearchField) {
				searchInputRef.current?.focus();
				return;
			}
			if (!isPanelSubmenu) menuListRef.current?.focus();
		});
		return () => window.cancelAnimationFrame(frame);
	}, [
		isOpen,
		activeSubmenu,
		hasSearchField,
		isPanelSubmenu
	]);
	useEffect(() => {
		if (highlightedIndex < 0) return;
		const root = menuListRef.current;
		if (!root) return;
		root.querySelector(`[data-debug-nav-index="${highlightedIndex}"]`)?.scrollIntoView({ block: "nearest" });
	}, [highlightedIndex, navigableIdsKey]);
	const activateNavigableEntry = useCallback((entry) => {
		const { item, submenuKey } = entry;
		if (item.disabled) return;
		if (item.variant === "switch") {
			item.switchOnChange?.(!item.switchValue);
			return;
		}
		if (submenuKey && menuItemHasSubmenu(item)) {
			setActiveSubmenu(submenuKey);
			return;
		}
		item.onClick?.();
	}, []);
	const handleMenuKeyDown = useCallback((event) => {
		const target = event.target;
		const isEditableTarget = target?.tagName === "TEXTAREA" || target?.tagName === "INPUT" || Boolean(target?.isContentEditable);
		if (isPanelSubmenu && isEditableTarget && target !== searchInputRef.current && event.key !== "Escape") return;
		const moveHighlight = (delta) => {
			if (navigableItems.length === 0) return;
			event.preventDefault();
			setHighlightedIndex((prev) => {
				return ((prev < 0 ? delta > 0 ? -1 : 0 : prev) + delta + navigableItems.length) % navigableItems.length;
			});
		};
		switch (event.key) {
			case "ArrowDown":
				moveHighlight(1);
				break;
			case "ArrowUp":
				moveHighlight(-1);
				break;
			case "Home":
				if (target === searchInputRef.current) return;
				if (navigableItems.length === 0) return;
				event.preventDefault();
				setHighlightedIndex(0);
				break;
			case "End":
				if (target === searchInputRef.current) return;
				if (navigableItems.length === 0) return;
				event.preventDefault();
				setHighlightedIndex(navigableItems.length - 1);
				break;
			case "ArrowRight": {
				const entry = navigableItems[highlightedIndex];
				if (!entry || !entry.submenuKey || !menuItemHasSubmenu(entry.item)) return;
				event.preventDefault();
				activateNavigableEntry(entry);
				break;
			}
			case "ArrowLeft":
				if (!currentSubmenu) return;
				if (target === searchInputRef.current && (searchInputRef.current?.value.length ?? 0) > 0) return;
				event.preventDefault();
				setActiveSubmenu(currentSubmenu.parentSubmenuKey);
				break;
			case "Backspace":
				if (target !== searchInputRef.current) return;
				if ((searchInputRef.current?.value.length ?? 0) > 0) return;
				if (!currentSubmenu) return;
				event.preventDefault();
				setActiveSubmenu(currentSubmenu.parentSubmenuKey);
				break;
			case "Enter": {
				const entry = navigableItems[highlightedIndex];
				if (!entry) return;
				event.preventDefault();
				activateNavigableEntry(entry);
				break;
			}
			case " ": {
				const entry = navigableItems[highlightedIndex];
				if (!entry || entry.item.variant !== "switch") return;
				if (target === searchInputRef.current) return;
				event.preventDefault();
				activateNavigableEntry(entry);
				break;
			}
			default: break;
		}
	}, [
		activateNavigableEntry,
		currentSubmenu,
		highlightedIndex,
		isPanelSubmenu,
		navigableItems
	]);
	const handleEscapeKeyDown = useCallback((event) => {
		if (isFeatureFlagsSubmenu && featureFlagsSearch) {
			event.preventDefault();
			setFeatureFlagsSearch("");
			return;
		}
		if (!currentSubmenu && menuSearch) {
			event.preventDefault();
			setMenuSearch("");
			return;
		}
		if (currentSubmenu) {
			event.preventDefault();
			setActiveSubmenu(currentSubmenu.parentSubmenuKey);
		}
	}, [
		currentSubmenu,
		featureFlagsSearch,
		isFeatureFlagsSubmenu,
		menuSearch
	]);
	if (!isVisible) return null;
	return /* @__PURE__ */ jsx(Branch, {
		dir: "ltr",
		lang: "en",
		className: "pointer-events-auto fixed z-[10060]",
		style: {
			left: displayPosition.x,
			top: displayPosition.y,
			transform: "translate(-50%, -50%)"
		},
		children: /* @__PURE__ */ jsxs(Popover, {
			open: isOpen,
			onOpenChange: setIsOpen,
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxs(Tooltip, {
					open: isDragging ? false : void 0,
					children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("button", {
								className: cn("relative flex h-11 w-11 select-none items-center justify-center overflow-hidden rounded-xl bg-[color-mix(in_srgb,var(--network-globe-edge)_22%,var(--background))] shadow-sm transition-colors", "hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_30%,var(--background))]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background", isDragging ? "cursor-grabbing touch-none" : "cursor-grab"),
								"aria-label": "Debug menu",
								onPointerDown: handleDragPointerDown,
								onPointerMove: handleDragPointerMove,
								onPointerUp: finishDrag,
								onPointerCancel: finishDrag,
								onClick: handleDragClick,
								onDragStart: (event) => event.preventDefault(),
								children: /* @__PURE__ */ jsx(DebugMenuBrandMark, { className: "relative z-10 text-foreground" })
							})
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: tooltipSide,
						sideOffset: 8,
						children: "Debug menu"
					})]
				}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: (event) => {
							event.preventDefault();
							event.stopPropagation();
							setIsOpen(false);
							closeDebugMode();
						},
						className: cn("absolute -end-1.5 -top-1.5 z-20 flex h-5 w-5 items-center justify-center rounded-full", "border border-border bg-background text-muted-foreground shadow-sm", "hover:bg-muted hover:text-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/30"),
						"aria-label": "Close debug mode",
						children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: tooltipSide,
					sideOffset: 8,
					children: "Close debug mode"
				})] })]
			}), /* @__PURE__ */ jsxs(PopoverContent, {
				dir: "ltr",
				lang: "en",
				side: popoverPlacement.side,
				align: popoverPlacement.align,
				sideOffset: 8,
				collisionPadding: 16,
				className: cn("z-[10060] flex max-h-[min(85dvh,var(--radix-popper-available-height,100dvh))] flex-col overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-popover p-0 shadow-xl", currentSubmenu?.submenuVariant === "profileComparison" || currentSubmenu?.submenuVariant === "communityShareExamples" || currentSubmenu?.submenuVariant === "prefsDebug" || currentSubmenu?.submenuVariant === "seedResources" || currentSubmenu?.submenuVariant === "initDayMock" || currentSubmenu?.submenuVariant === "initTicketMock" || currentSubmenu?.submenuVariant === "terminalSettings" || currentSubmenu?.submenuVariant === "recentResources" || currentSubmenu?.submenuVariant === "envStatus" || currentSubmenu?.submenuVariant === "faviconStatus" || currentSubmenu?.submenuVariant === "clientIp" ? "w-[min(92vw,720px)]" : "w-80"),
				onWheelCapture: (event) => {
					event.stopPropagation();
				},
				onKeyDown: handleMenuKeyDown,
				onEscapeKeyDown: handleEscapeKeyDown,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "shrink-0 border-b border-[color-mix(in_srgb,var(--network-globe-edge)_20%,var(--border))] bg-popover/95 backdrop-blur-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "px-4 py-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								currentSubmenu && /* @__PURE__ */ jsx("button", {
									onClick: () => setActiveSubmenu(currentSubmenu.parentSubmenuKey),
									className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40",
									"aria-label": "Back",
									children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 text-[var(--network-globe-edge)]" })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 text-[13px] font-semibold text-foreground",
									children: currentSubmenu ? currentSubmenu.title : "Debug"
								}),
								/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => {
											setIsOpen(false);
											closeDebugMode();
										},
										className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_15%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--network-globe-edge)]/40",
										"aria-label": "Close debug mode",
										children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-[var(--network-globe-edge)]" })
									})
								}), /* @__PURE__ */ jsx(TooltipContent, {
									side: "left",
									children: "Close debug mode"
								})] })
							]
						})
					}), !currentSubmenu || isFeatureFlagsSubmenu ? /* @__PURE__ */ jsx("div", {
						className: "px-4 pb-3",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--network-globe-edge)]/60" }),
								/* @__PURE__ */ jsx(Input, {
									ref: searchInputRef,
									autoFocus: true,
									role: "combobox",
									"aria-expanded": true,
									"aria-controls": "debug-menu-listbox",
									"aria-autocomplete": "list",
									"aria-activedescendant": highlightedIndex >= 0 && navigableItems[highlightedIndex] ? navigableItems[highlightedIndex].id : void 0,
									value: isFeatureFlagsSubmenu ? featureFlagsSearch : menuSearch,
									onChange: (event) => {
										if (isFeatureFlagsSubmenu) setFeatureFlagsSearch(event.target.value);
										else setMenuSearch(event.target.value);
									},
									placeholder: isFeatureFlagsSubmenu ? "Search flags..." : "Search menu...",
									className: "h-8 border-[color-mix(in_srgb,var(--network-globe-edge)_25%,var(--border))] bg-muted/40 ps-8 pe-8 text-[12px] text-foreground placeholder:text-[var(--network-globe-edge)]/50"
								}),
								(isFeatureFlagsSubmenu ? featureFlagsSearch : menuSearch) ? /* @__PURE__ */ jsx("button", {
									type: "button",
									tabIndex: -1,
									onClick: () => {
										if (isFeatureFlagsSubmenu) setFeatureFlagsSearch("");
										else setMenuSearch("");
										searchInputRef.current?.focus();
									},
									className: "absolute end-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded text-[var(--network-globe-edge)]/70 transition-colors hover:bg-[color-mix(in_srgb,var(--network-globe-edge)_12%,transparent)] hover:text-foreground",
									"aria-label": "Clear search",
									children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
								}) : null
							]
						})
					}) : null]
				}), /* @__PURE__ */ jsx("div", {
					ref: menuListRef,
					id: "debug-menu-listbox",
					role: "listbox",
					tabIndex: hasSearchField ? -1 : 0,
					"aria-label": currentSubmenu ? currentSubmenu.title : "Debug options",
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 outline-none",
					children: currentSubmenu ? currentSubmenu.submenuVariant === "profileComparison" ? /* @__PURE__ */ jsx("div", {
						className: "px-1",
						"aria-label": currentSubmenu.title,
						children: /* @__PURE__ */ jsx(ConsoleProfileComparisonTable, { activeProfileId: profileId })
					}) : currentSubmenu.submenuVariant === "communityShareExamples" ? /* @__PURE__ */ jsx(DebugMenuCommunityShareExamplesPanel, { activeProfileId: profileId }) : currentSubmenu.submenuVariant === "prefsDebug" ? /* @__PURE__ */ jsx(DebugMenuPrefsPanel, {}) : currentSubmenu.submenuVariant === "seedResources" ? /* @__PURE__ */ jsx(DebugMenuSeedResourcesPanel, {}) : currentSubmenu.submenuVariant === "initDayMock" ? /* @__PURE__ */ jsx(DebugMenuInitDayPanel, {}) : currentSubmenu.submenuVariant === "initTicketMock" ? /* @__PURE__ */ jsx(DebugMenuInitTicketPanel, {}) : currentSubmenu.submenuVariant === "terminalSettings" ? /* @__PURE__ */ jsx(DebugMenuTerminalPanel, {}) : currentSubmenu.submenuVariant === "recentResources" ? /* @__PURE__ */ jsx(DebugMenuRecentResourcesPanel, {}) : currentSubmenu.submenuVariant === "envStatus" ? /* @__PURE__ */ jsx(DebugMenuEnvPanel, {}) : currentSubmenu.submenuVariant === "faviconStatus" ? /* @__PURE__ */ jsx(DebugMenuFaviconPanel, {}) : currentSubmenu.submenuVariant === "clientIp" ? /* @__PURE__ */ jsx(DebugMenuIpPanel, {}) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-0.5",
						children: [
							currentSubmenu.note ? /* @__PURE__ */ jsx("p", {
								className: "mb-2 px-3 text-[11px] leading-relaxed text-[var(--network-globe-edge)]/90",
								children: currentSubmenu.note
							}) : null,
							isFeatureFlagsSubmenu && featureFlagsSearch.trim() && filteredFeatureFlagItems.every((item) => item.label === "Reset all feature flags") ? /* @__PURE__ */ jsx("p", {
								className: "px-3 py-2 text-[11px] text-[var(--network-globe-edge)]/70",
								children: "No matching flags"
							}) : null,
							isFeatureFlagsSubmenu ? groupedFeatureFlagItems.map((group, groupIndex) => /* @__PURE__ */ jsxs("div", { children: [group.category ? /* @__PURE__ */ jsx("div", {
								className: cn("px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--network-globe-edge)]/80", groupIndex === 0 ? "pt-0" : "pt-3"),
								children: group.category
							}) : null, group.items.map((item, itemIndex) => {
								const entryId = `flags__${item.category ?? "general"}__${item.label}`;
								const navIndex = navigableIndexById.get(entryId) ?? -1;
								return renderDebugSubmenuItemRow(item, itemIndex, `feature-flag-${groupIndex}`, activeSubmenu, setActiveSubmenu, {
									id: entryId,
									navIndex,
									highlighted: navIndex === highlightedIndex,
									onHighlight: () => {
										if (navIndex >= 0) setHighlightedIndex(navIndex);
									}
								});
							})] }, `feature-flag-group-${groupIndex}`)) : currentSubmenu.items.map((item, itemIndex) => {
								const entryId = `submenu__${activeSubmenu}__${item.label}`;
								const navIndex = navigableIndexById.get(entryId) ?? -1;
								return renderDebugSubmenuItemRow(item, itemIndex, "submenu", activeSubmenu, setActiveSubmenu, {
									id: entryId,
									navIndex,
									highlighted: navIndex === highlightedIndex,
									onHighlight: () => {
										if (navIndex >= 0) setHighlightedIndex(navIndex);
									}
								});
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [menuSearch.trim() && filteredSections.length === 0 ? /* @__PURE__ */ jsx("p", {
							className: "px-3 py-2 text-[11px] text-[var(--network-globe-edge)]/70",
							children: "No matching items"
						}) : null, filteredSections.map((section) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-2 flex items-center gap-2 px-1",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[var(--network-globe-edge)]",
								children: section.icon
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-[var(--network-globe-edge)]/80",
								children: section.title
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-0.5",
							children: section.items.map((item, itemIndex) => {
								const entryId = `root__${section.title}__${item.label}`;
								const navIndex = navigableIndexById.get(entryId) ?? -1;
								const highlighted = navIndex === highlightedIndex;
								const onHighlight = () => {
									if (navIndex >= 0) setHighlightedIndex(navIndex);
								};
								if (item.variant === "switch") return /* @__PURE__ */ jsx(DebugMenuSwitchRow, {
									item,
									id: entryId,
									navIndex,
									highlighted,
									onHighlight
								}, `${section.title}-${itemIndex}`);
								const hasSubmenu = menuItemHasSubmenu(item);
								const itemKey = `${section.title}-${item.label}`;
								return /* @__PURE__ */ jsxs("button", {
									id: entryId,
									type: "button",
									role: "option",
									"aria-selected": highlighted,
									"data-debug-nav-index": navIndex,
									tabIndex: -1,
									onMouseEnter: onHighlight,
									onClick: (e) => {
										e.stopPropagation();
										if (hasSubmenu) setActiveSubmenu(itemKey);
										else if (item.onClick) item.onClick();
									},
									className: debugMenuItemRowClassName({
										active: item.active,
										highlighted
									}),
									children: [
										item.icon && /* @__PURE__ */ jsx("span", {
											className: "flex-shrink-0 text-[var(--network-globe-edge)]",
											children: item.icon
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block font-medium",
												children: item.label
											}), item.description ? /* @__PURE__ */ jsx("span", {
												className: "mt-0.5 block whitespace-pre-line break-all text-[11px] font-normal opacity-80",
												title: item.description,
												children: item.description
											}) : null]
										}),
										item.badge !== void 0 && /* @__PURE__ */ jsx("span", {
											className: "flex-shrink-0 rounded-full bg-[color-mix(in_srgb,var(--network-globe-edge)_22%,transparent)] px-2 py-0.5 text-[11px] font-medium text-[var(--network-globe-edge)]",
											children: item.badge
										}),
										hasSubmenu && /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 flex-shrink-0 text-[var(--network-globe-edge)]/60" })
									]
								}, `${section.title}-${itemIndex}`);
							})
						})] }, section.title))]
					})
				})]
			})]
		})
	});
}
function isAbsoluteHttpUrl(href) {
	return /^https?:\/\//i.test(href.trim());
}
function ActionLink({ action, className, onAction, children }) {
	if (isAbsoluteHttpUrl(action.href)) return /* @__PURE__ */ jsx("a", {
		href: action.href,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		"data-analytics-track": "manual",
		onClick: () => onAction(action.id),
		children
	});
	return /* @__PURE__ */ jsx(MarketingSiteLink, {
		href: action.href,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		"data-analytics-track": "manual",
		onClick: () => onAction(action.id),
		children
	});
}
function ShareOnXCard({ onAction, className, featured = false }) {
	const t = useT();
	const { profileId } = useConsoleProfile();
	const [deck, setDeck] = useState(() => shuffleCommunitySupportShareTexts(profileId));
	const [deckIndex, setDeckIndex] = useState(0);
	const [shareText, setShareText] = useState(() => deck[0] ?? "");
	const [textKey, setTextKey] = useState(0);
	const shouldSelectAllOnFocusRef = useRef(true);
	const trimmed = shareText.trim();
	const canPost = trimmed.length > 0;
	useEffect(() => {
		const nextDeck = shuffleCommunitySupportShareTexts(profileId);
		setDeck(nextDeck);
		setDeckIndex(0);
		setShareText(nextDeck[0] ?? "");
		setTextKey((key) => key + 1);
		shouldSelectAllOnFocusRef.current = true;
	}, [profileId]);
	const tryAnotherExample = () => {
		const nextIndex = deckIndex + 1;
		if (nextIndex >= deck.length) {
			const reshuffled = shuffleCommunitySupportShareTexts(profileId, shareText);
			setDeck(reshuffled);
			setDeckIndex(0);
			setShareText(reshuffled[0] ?? "");
		} else {
			setDeckIndex(nextIndex);
			setShareText(deck[nextIndex] ?? "");
		}
		setTextKey((key) => key + 1);
		shouldSelectAllOnFocusRef.current = true;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full flex-col rounded-xl border border-border bg-card/50 p-4 text-start", featured && "rounded-2xl p-5 min-h-[280px]", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(XBrandIcon, { className: "h-4 w-4" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1 space-y-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("p", {
							className: cn("font-semibold text-foreground", featured ? "text-[20px]" : "text-[13px]"),
							children: t("Spread the word on X")
						}), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground leading-snug",
						children: t("Write something true to your experience, or start from one of these examples.")
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Textarea, {
				value: shareText,
				onChange: (event) => setShareText(event.target.value),
				onFocus: (event) => {
					if (!shouldSelectAllOnFocusRef.current) return;
					shouldSelectAllOnFocusRef.current = false;
					event.currentTarget.select();
				},
				className: cn("mt-3 min-h-[96px] resize-y text-[13px] animate-in fade-in-0 duration-200", featured && "min-h-[120px] flex-1"),
				maxLength: 280,
				"aria-label": t("Share message")
			}, textKey),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-3 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						"data-analytics-track": "false",
						onClick: tryAnotherExample,
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "me-1.5 h-3.5 w-3.5" }), t("Try another example")]
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[11px] tabular-nums text-muted-foreground",
						children: [shareText.length, "/280"]
					})]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "button",
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !canPost,
					"data-analytics-track": "manual",
					onClick: () => {
						if (!canPost) return;
						onAction("share");
						window.open(getCommunitySupportShareHref(trimmed), "_blank", "noopener,noreferrer");
					},
					children: [/* @__PURE__ */ jsx(XBrandIcon, { className: "me-1.5 h-3.5 w-3.5" }), t("Spread the word")]
				})]
			})
		]
	});
}
function SkipFooter({ onSkip }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Button, {
		variant: "outline",
		onClick: onSkip,
		"data-analytics-track": "manual",
		children: t("Skip for now")
	});
}
function Shell({ onSkip, children }) {
	const t = useT();
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-5 w-auto shrink-0" }),
		fullscreen: true,
		useSidebar: false,
		constrainWidth: true,
		maxWidth: "max-w-4xl",
		footerAlign: "right",
		skipInitialFieldFocus: true,
		onClose: onSkip,
		footer: /* @__PURE__ */ jsx(SkipFooter, { onSkip }),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			"data-analytics-track": "manual",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-[17px] font-semibold tracking-tight text-foreground",
				children: t("A note from the team")
			}), children]
		})
	});
}
function TeamNote() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4 border-b border-border pb-8 text-[14px] leading-relaxed text-foreground/90",
		children: [
			/* @__PURE__ */ jsx("p", { children: t("Hey,") }),
			/* @__PURE__ */ jsx("p", { children: t("Sorry to interrupt. We know you came here to build, not to read a message from us.") }),
			/* @__PURE__ */ jsx("p", { children: t("We are a product-obsessed team. Our job is to make Appwrite something you love building on. The part we cannot do alone is spreading the word and welcoming the next wave of developers.") }),
			/* @__PURE__ */ jsx("p", { children: t("If you have a minute, here is how you can help. If not, skip and get back to work.") })
		]
	});
}
function ActionCard({ actionId, onAction, className, titleClassName }) {
	const t = useT();
	const action = COMMUNITY_SUPPORT_ACTIONS.find((item) => item.id === actionId);
	if (!action) return null;
	const Icon$1 = action.icon;
	return /* @__PURE__ */ jsxs(ActionLink, {
		action,
		onAction,
		className: cn("flex h-full w-full flex-col justify-between gap-4 rounded-2xl border border-border bg-card/50 p-5 text-start transition-colors hover:bg-muted/40 min-h-[160px]", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
			children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 space-y-1.5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("text-[14px] font-semibold", titleClassName),
					children: t(action.title)
				}), action.external ? /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }) : null]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground leading-snug",
				children: t(action.description)
			})]
		})]
	});
}
function CommunitySupportWizardContent({ onSkip, onAction }) {
	const { features } = useConsoleProfile();
	const showAffiliates = features.affiliates;
	return /* @__PURE__ */ jsx(Shell, {
		onSkip,
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ jsx(TeamNote, {}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-3 md:grid-cols-3 md:grid-rows-2",
				children: [
					/* @__PURE__ */ jsx(ShareOnXCard, {
						featured: true,
						onAction,
						className: "md:col-span-2 md:row-span-2"
					}),
					/* @__PURE__ */ jsx(ActionCard, {
						actionId: "community",
						onAction
					}),
					/* @__PURE__ */ jsx(ActionCard, {
						actionId: "contribute",
						onAction
					}),
					/* @__PURE__ */ jsx(ActionCard, {
						actionId: "content",
						onAction
					}),
					showAffiliates ? /* @__PURE__ */ jsx(ActionCard, {
						actionId: "affiliates",
						onAction
					}) : null,
					/* @__PURE__ */ jsx(ActionCard, {
						actionId: "integrations",
						onAction,
						className: showAffiliates ? void 0 : "md:col-span-2"
					})
				]
			})]
		})
	});
}
function CommunitySupportWizard({ onSkip, onAction }) {
	return /* @__PURE__ */ jsx(CommunitySupportWizardContent, {
		onSkip,
		onAction
	});
}
var SURFACE = "community_support_wizard";
function isAuthPage(pathname) {
	return pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/recovery" || pathname === "/reset" || pathname === "/join" || pathname === "/mfa" || pathname === "/verify-email" || pathname === "/auth/magic-url";
}
function shouldSuppressOnPath(pathname) {
	if (isAuthPage(pathname)) return true;
	if (isOptionalAuthPage(pathname)) return true;
	if (isMarketingPagePath(pathname)) return true;
	if (pathname.startsWith("/debug/")) return true;
	return false;
}
function CommunitySupportPromptProvider() {
	const { account, isAuthenticated } = useAuth();
	const location = useLocation();
	const { track } = useAnalytics();
	const { previewCommunitySupportWizard } = useDebugOverrides();
	const suppressed = shouldSuppressOnPath(location.pathname);
	const accountCache = isAuthenticated ? account : void 0;
	const accountId = accountCache && typeof accountCache === "object" && "$id" in accountCache ? accountCache.$id : void 0;
	const isImpersonating = isConsoleImpersonationActive(account);
	const { shouldShow, recordShown, skip, takeAction, state } = useCommunitySupportPrompt(accountCache, { trackActiveDay: isAuthenticated && !suppressed && !isImpersonating });
	const [debugOpen, setDebugOpen] = useState(false);
	const [impressionOpen, setImpressionOpen] = useState(false);
	const recordingShowRef = useRef(false);
	const dismissedRef = useRef(false);
	const trackedDebugOpenRef = useRef(false);
	useEffect(() => {
		dismissedRef.current = false;
		recordingShowRef.current = false;
		setImpressionOpen(false);
	}, [accountId]);
	useEffect(() => {
		if (previewCommunitySupportWizard) {
			setDebugOpen(true);
			setImpressionOpen(false);
		} else setDebugOpen(false);
	}, [previewCommunitySupportWizard]);
	useEffect(() => {
		if (dismissedRef.current || debugOpen || !isAuthenticated || suppressed || isImpersonating || !shouldShow) return;
		if (recordingShowRef.current) return;
		recordingShowRef.current = true;
		setImpressionOpen(true);
		recordShown();
		track("Wizard Opened", {
			surface: SURFACE,
			preview: false,
			shownCount: state.shownCount + 1
		});
	}, [
		debugOpen,
		isAuthenticated,
		isImpersonating,
		recordShown,
		shouldShow,
		state.shownCount,
		suppressed,
		track
	]);
	useEffect(() => {
		if (!debugOpen || suppressed) {
			trackedDebugOpenRef.current = false;
			return;
		}
		if (trackedDebugOpenRef.current) return;
		trackedDebugOpenRef.current = true;
		track("Wizard Opened", {
			surface: SURFACE,
			preview: true
		});
	}, [
		debugOpen,
		suppressed,
		track
	]);
	if (!(!suppressed && !isImpersonating && (debugOpen || isAuthenticated && impressionOpen))) return null;
	const trackOption = (option) => {
		track("Wizard Option Selected", {
			surface: SURFACE,
			option,
			preview: debugOpen,
			...debugOpen ? {} : { shownCount: state.shownCount }
		});
	};
	const dismissImpression = () => {
		dismissedRef.current = true;
		recordingShowRef.current = true;
		setImpressionOpen(false);
	};
	return /* @__PURE__ */ jsx(CommunitySupportWizard, {
		onSkip: () => {
			trackOption("skip");
			if (debugOpen) {
				setDebugOpen(false);
				setDebugOverride("previewCommunitySupportWizard", false);
				return;
			}
			dismissImpression();
			skip();
		},
		onAction: (actionId) => {
			trackOption(actionId);
			if (debugOpen) {
				setDebugOpen(false);
				setDebugOverride("previewCommunitySupportWizard", false);
				return;
			}
			dismissImpression();
			takeAction(actionId);
		}
	});
}
var ScreenshotModeContext = createContext({
	isScreenshotModeActive: false,
	closeScreenshotMode: () => {}
});
function useScreenshotCaptureHidden(enabled) {
	const [hidden, setHidden] = useState(false);
	const hideUntilRef = useRef(0);
	const releaseTimerRef = useRef(null);
	useEffect(() => {
		if (!enabled) {
			setHidden(false);
			if (releaseTimerRef.current) {
				clearTimeout(releaseTimerRef.current);
				releaseTimerRef.current = null;
			}
			return;
		}
		const isPageActive = () => typeof document !== "undefined" && !document.hidden && document.hasFocus();
		const syncFromPageActivity = () => {
			if (!isPageActive()) {
				if (releaseTimerRef.current) {
					clearTimeout(releaseTimerRef.current);
					releaseTimerRef.current = null;
				}
				setHidden(true);
				return;
			}
			if (Date.now() < hideUntilRef.current) {
				setHidden(true);
				return;
			}
			setHidden(false);
		};
		const hideForFocusedCapture = (holdMs) => {
			hideUntilRef.current = Date.now() + holdMs;
			setHidden(true);
			if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
			releaseTimerRef.current = setTimeout(() => {
				syncFromPageActivity();
			}, holdMs);
		};
		const onKeyDown = (e) => {
			if (e.code === "PrintScreen") {
				hideForFocusedCapture(1600);
				return;
			}
			if (e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) hideForFocusedCapture(e.code === "Digit3" || e.code === "Digit4" || e.code === "Digit5" ? 1600 : 900);
		};
		window.addEventListener("blur", syncFromPageActivity);
		window.addEventListener("focus", syncFromPageActivity);
		document.addEventListener("visibilitychange", syncFromPageActivity);
		window.addEventListener("keydown", onKeyDown, true);
		syncFromPageActivity();
		return () => {
			window.removeEventListener("blur", syncFromPageActivity);
			window.removeEventListener("focus", syncFromPageActivity);
			document.removeEventListener("visibilitychange", syncFromPageActivity);
			window.removeEventListener("keydown", onKeyDown, true);
			if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
		};
	}, [enabled]);
	return hidden;
}
function ScreenshotModeIndicator({ active }) {
	const hiddenForCapture = useScreenshotCaptureHidden(active);
	if (!active || hiddenForCapture) return null;
	return /* @__PURE__ */ jsx("div", {
		"data-screenshot-mode-indicator": true,
		className: "pointer-events-none fixed bottom-5 left-1/2 z-[9998] -translate-x-1/2 print:hidden",
		"aria-live": "polite",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-4 py-2 text-[13px] font-semibold text-emerald-700 shadow-md backdrop-blur-sm dark:bg-emerald-500/20 dark:text-emerald-300",
			children: [/* @__PURE__ */ jsx("span", {
				className: "size-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]",
				"aria-hidden": true
			}), "Screenshot mode"]
		})
	});
}
function invalidateScreenshotModeQueries(queryClient) {
	queryClient.invalidateQueries({ queryKey: ["usage-events"] });
	queryClient.invalidateQueries({ queryKey: ["usage-gauges"] });
	queryClient.invalidateQueries({ queryKey: ["usage-breakdown"] });
}
function ScreenshotModeProvider({ children }) {
	const queryClient = useQueryClient();
	const [isScreenshotModeActive$1, setIsScreenshotModeActive] = useState(() => readScreenshotModeOpen());
	const typedSequenceRef = useRef("");
	const skipPersistEffectRef = useRef(true);
	const closeScreenshotMode = useCallback(() => {
		setIsScreenshotModeActive(false);
	}, []);
	useEffect(() => {
		if (skipPersistEffectRef.current) {
			skipPersistEffectRef.current = false;
			return;
		}
		writeScreenshotModeOpen(isScreenshotModeActive$1);
		invalidateScreenshotModeQueries(queryClient);
	}, [isScreenshotModeActive$1, queryClient]);
	useEffect(() => {
		return subscribeScreenshotMode((open) => {
			setIsScreenshotModeActive((prev) => prev === open ? prev : open);
		});
	}, []);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (shouldSuppressGlobalShortcuts(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
			if (e.key.length !== 1) {
				typedSequenceRef.current = "";
				return;
			}
			typedSequenceRef.current = (typedSequenceRef.current + e.key).slice(-SCREENSHOT_MODE_TOGGLE_SEQUENCE.length);
			if (typedSequenceRef.current.toLowerCase() === "smile") {
				typedSequenceRef.current = "";
				setIsScreenshotModeActive((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	return /* @__PURE__ */ jsxs(ScreenshotModeContext.Provider, {
		value: {
			isScreenshotModeActive: isScreenshotModeActive$1,
			closeScreenshotMode
		},
		children: [children, /* @__PURE__ */ jsx(ScreenshotModeIndicator, { active: isScreenshotModeActive$1 })]
	});
}
function AnalyticsSessionPropsSync() {
	const location = useLocation();
	const matches = useMatches();
	const leafRoute = matches[matches.length - 1];
	const { account, isAuthenticated, isFetched } = useAuth();
	const { language } = useI18n();
	const accountUser = account;
	const [consentTick, setConsentTick] = useState(0);
	const { projectId, orgId: orgIdFromUrl } = getConsoleRouteIds(location.pathname);
	const { project, isLoading: projectLoading } = useProject(projectId);
	const currentOrgId = projectId ? project?.teamId ?? void 0 : orgIdFromUrl ?? accountUser?.prefs?.organization;
	const orgIdResolved = !projectId || !isAuthenticated || !projectLoading;
	const { data: orgPlan } = useQuery({
		...organizationPlanQueryOptions(currentOrgId),
		enabled: isAuthenticated && orgIdResolved && !!currentOrgId && typeof window !== "undefined"
	});
	const auth = isFetched && isAuthenticated ? "user" : "guest";
	setAnalyticsSessionProps({
		auth,
		plan: auth === "guest" ? "none" : getAnalyticsPlanFromBillingId(orgPlan?.$id),
		lang: language
	});
	useEffect(() => {
		return subscribeCookieConsent(() => {
			setConsentTick((tick) => tick + 1);
		});
	}, []);
	useEffect(() => {
		if (!canTrackAnalytics() || typeof window === "undefined" || !isFetched) return;
		trackPageView(getAnalyticsRoutePath(leafRoute?.routeId, location.pathname));
	}, [
		isFetched,
		consentTick,
		leafRoute?.routeId,
		location.pathname
	]);
	return null;
}
function RootShellCatchBoundary({ children }) {
	const resetKey = useRouterState({ select: (s) => s.loadedAt });
	return /* @__PURE__ */ jsx(CatchBoundary, {
		getResetKey: () => resetKey,
		errorComponent: ({ error, reset }) => /* @__PURE__ */ jsx(ErrorComponent, {
			error,
			reset
		}),
		onCatch: (error, errorInfo) => {
			reportRouterCaughtError(error, errorInfo, { source: "root-shell-catch-boundary" });
		},
		children
	});
}
var SPINNER_DELAY_MS = 1500;
var EXIT_DURATION_S = .22;
function LoaderBrandMark() {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-center gap-2.5", FORCE_LTR_CLASS),
		dir: "ltr",
		children: [/* @__PURE__ */ jsx("img", { src: "/logo-icon.png", alt: "Logo", className: "h-8 w-8 shrink-0 object-contain" }), /* @__PURE__ */ jsx("span", {
			className: "text-2xl font-bold tracking-tight text-foreground",
			children: "EDVision"
		})]
	});
}
function FullscreenLoader({ isVisible, onComplete, statusBanner }) {
	const t = useT();
	const hasStatusBanner = Boolean(statusBanner);
	const [showSpinner, setShowSpinner] = useState(false);
	useEffect(() => {
		if (!isVisible || hasStatusBanner) {
			setShowSpinner(false);
			return;
		}
		setShowSpinner(false);
		const timer = setTimeout(() => {
			setShowSpinner(true);
		}, SPINNER_DELAY_MS);
		return () => clearTimeout(timer);
	}, [isVisible, hasStatusBanner]);
	return /* @__PURE__ */ jsx(AnimatePresence, {
		onExitComplete: onComplete,
		children: isVisible && /* @__PURE__ */ jsxs(motion.div, {
			initial: { opacity: 1 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: EXIT_DURATION_S,
				ease: "easeOut"
			},
			className: "fixed inset-0 z-[9999] bg-background will-change-[opacity]",
			"aria-label": "Loading",
			"data-fullscreen-loader": "",
			children: [
				statusBanner && (() => {
					const presentation = getStatusPresentation(statusBanner.state);
					const Icon$1 = getStatusIcon(statusBanner.state);
					return /* @__PURE__ */ jsxs("a", {
						href: statusBanner.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: cn("absolute top-0 start-0 end-0 z-10 min-h-14 transition-all duration-200 hover:opacity-95", "flex min-h-14 flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4", presentation.containerClassName),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-1 items-start gap-3 sm:items-center",
							children: [/* @__PURE__ */ jsx(Icon$1, { className: "mt-0.5 h-4 w-4 shrink-0 sm:mt-0" }), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] font-medium leading-snug",
								children: [
									t(statusBanner.title),
									statusBanner.reportTitle ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: t(statusBanner.reportTitle)
									})] }) : null,
									statusBanner.maintenanceWindow ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
										className: "text-foreground/70",
										children: statusBanner.maintenanceWindow
									})] }) : null,
									statusBanner.regionsLine ? /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("span", {
										className: "text-foreground/70",
										children: t(statusBanner.regionsLine)
									})] }) : null
								]
							})]
						}), /* @__PURE__ */ jsxs("span", {
							className: cn("flex h-8 w-fit shrink-0 items-center gap-2 rounded-md px-3 text-[13px] font-medium sm:ms-auto", presentation.buttonClassName),
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: t("View Status")
								}),
								/* @__PURE__ */ jsx("span", {
									className: "sm:hidden",
									children: t("Status")
								}),
								/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })
							]
						})]
					});
				})(),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center",
					children: /* @__PURE__ */ jsx(LoaderBrandMark, {})
				}),
				showSpinner && !hasStatusBanner ? /* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
					"data-fullscreen-loader-spinner": "",
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-foreground/70" })
				}) : null
			]
		})
	});
}
function useInitialLoaderShellGatesReady(pathname) {
	const [ready, setReady] = useState(() => areInitialLoaderShellGatesReady(pathname));
	useEffect(() => {
		setReady(areInitialLoaderShellGatesReady(pathname));
		return subscribeInitialLoaderShellGates(() => {
			setReady(areInitialLoaderShellGatesReady(pathname));
		});
	}, [pathname]);
	return ready;
}
function useConsoleAccountQueryForbidden403() {
	const queryClient = useQueryClient();
	const [cacheTick, bumpCache] = useReducer((n) => n + 1, 0);
	useEffect(() => {
		const lastForbiddenRef = { current: false };
		return queryClient.getQueryCache().subscribe(() => {
			const next = queryClient.getQueryCache().findAll({ queryKey: ["account", "console"] }).some((q) => q.state.status === "error" && isHttpForbiddenError(q.state.error));
			if (next !== lastForbiddenRef.current) {
				lastForbiddenRef.current = next;
				bumpCache();
			}
		});
	}, [queryClient]);
	return useMemo(() => {
		return queryClient.getQueryCache().findAll({ queryKey: ["account", "console"] }).some((q) => q.state.status === "error" && isHttpForbiddenError(q.state.error));
	}, [queryClient, cacheTick]);
}
function useProjectQueryShellGateBypass(pathname) {
	const queryClient = useQueryClient();
	const projectId = getProjectIdFromPathname(pathname);
	const [cacheTick, bumpCache] = useReducer((n) => n + 1, 0);
	useEffect(() => {
		if (!projectId) return;
		const lastBypassRef = { current: false };
		return queryClient.getQueryCache().subscribe((event) => {
			const query = event?.query;
			if (query && (query.queryKey[0] !== "project" || query.queryKey[1] !== projectId)) return;
			const state = queryClient.getQueryState(["project", projectId]);
			const next = state?.status === "error" && (isHttpProjectAccessError(state.error) || isHttpPaymentRequiredError(state.error));
			if (next !== lastBypassRef.current) {
				lastBypassRef.current = next;
				bumpCache();
			}
		});
	}, [queryClient, projectId]);
	return useMemo(() => {
		if (!projectId) return false;
		const state = queryClient.getQueryState(["project", projectId]);
		return state?.status === "error" && (isHttpProjectAccessError(state.error) || isHttpPaymentRequiredError(state.error));
	}, [
		queryClient,
		projectId,
		cacheTick
	]);
}
function useInitialLoader() {
	const router = useRouter();
	const location = useLocation();
	const matches = useMatches();
	const isConsoleAccount403 = useConsoleAccountQueryForbidden403();
	const projectShellGateBypass = useProjectQueryShellGateBypass(location.pathname);
	const shellGatesReady = useInitialLoaderShellGatesReady(location.pathname) || projectShellGateBypass;
	const isFetching = useIsFetching({ predicate: (query) => query.options.meta?.skipInitialLoader !== true });
	const isMutating = useIsMutating();
	const isAuthRoute = useMemo(() => location.pathname === "/sign-in" || location.pathname === "/sign-up" || location.pathname === "/recovery" || location.pathname === "/mfa" || location.pathname === "/join" || location.pathname === "/sign-out" || location.pathname === "/verify-email", [location.pathname]);
	const isInstantPublicRoute = useMemo(() => isOptionalAuthPage(location.pathname), [location.pathname]);
	const isMarketingRoute = useMemo(() => isMarketingPage({
		pathname: location.pathname,
		matches
	}), [location.pathname, matches]);
	const skipStaticLoader = isAuthRoute || isInstantPublicRoute || isMarketingRoute;
	const shouldShowLoader = useMemo(() => !skipStaticLoader && (location.pathname === "/" || location.pathname.startsWith("/protected") || location.pathname.startsWith("/organizations") || location.pathname.startsWith("/projects") || location.pathname.startsWith("/console") || location.pathname.startsWith("/account") || location.pathname.startsWith("/generator")), [location.pathname, skipStaticLoader]);
	const [isLoading, setIsLoading] = useState(() => shouldShowLoader);
	const timeoutRef = useRef(null);
	const maxTimeoutRef = useRef(null);
	const startTimeRef = useRef(shouldShowLoader ? Date.now() : null);
	const wasLoadingRef = useRef(shouldShowLoader);
	const hasCompletedInitialLoadRef = useRef(false);
	const prevIsFetchingRef = useRef(isFetching);
	const prevIsMutatingRef = useRef(isMutating);
	const prevRouterStatusRef = useRef(router.state.status);
	const prevPathnameRef = useRef(location.pathname);
	const prevForbidden403Ref = useRef(isConsoleAccount403);
	const prevShellGatesReadyRef = useRef(shellGatesReady);
	const prevPathnameForShellGateRef = useRef(location.pathname);
	useEffect(() => {
		if (prevPathnameForShellGateRef.current === location.pathname) return;
		prevPathnameForShellGateRef.current = location.pathname;
		if (projectRouteRequiresProjectSelectorGate(location.pathname)) {
			setInitialLoaderShellGate(INITIAL_LOADER_SHELL_GATE.projectSelector, false);
			return;
		}
		resetInitialLoaderShellGate(INITIAL_LOADER_SHELL_GATE.projectSelector);
	}, [location.pathname]);
	useEffect(() => {
		if (hasCompletedInitialLoadRef.current) return;
		if (!shouldShowLoader) {
			if (skipStaticLoader) hasCompletedInitialLoadRef.current = true;
			else if (router.state.status === "idle" && isFetching === 0 && isMutating === 0) hasCompletedInitialLoadRef.current = true;
			if (wasLoadingRef.current) {
				setIsLoading(false);
				wasLoadingRef.current = false;
				startTimeRef.current = null;
			}
			prevIsFetchingRef.current = isFetching;
			prevIsMutatingRef.current = isMutating;
			prevRouterStatusRef.current = router.state.status;
			prevPathnameRef.current = location.pathname;
			return;
		}
		const routerStatusChanged = prevRouterStatusRef.current !== router.state.status;
		const pathnameChanged = prevPathnameRef.current !== location.pathname;
		const fetchingChanged = prevIsFetchingRef.current !== isFetching;
		const mutatingChanged = prevIsMutatingRef.current !== isMutating;
		const forbidden403Changed = prevForbidden403Ref.current !== isConsoleAccount403;
		const shellGatesReadyChanged = prevShellGatesReadyRef.current !== shellGatesReady;
		if (!routerStatusChanged && !pathnameChanged && !fetchingChanged && !mutatingChanged && !forbidden403Changed && !shellGatesReadyChanged) return;
		prevIsFetchingRef.current = isFetching;
		prevIsMutatingRef.current = isMutating;
		prevRouterStatusRef.current = router.state.status;
		prevPathnameRef.current = location.pathname;
		prevForbidden403Ref.current = isConsoleAccount403;
		prevShellGatesReadyRef.current = shellGatesReady;
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (maxTimeoutRef.current) {
			clearTimeout(maxTimeoutRef.current);
			maxTimeoutRef.current = null;
		}
		const currentHasActiveRequests = isFetching > 0 || isMutating > 0;
		const shouldShowLoadingState = router.state.status !== "idle" || currentHasActiveRequests;
		const shouldHideLoader = (location.pathname !== "/" || isConsoleAccount403) && !currentHasActiveRequests && shellGatesReady && wasLoadingRef.current;
		if (shouldShowLoadingState && !wasLoadingRef.current) {
			setIsLoading(true);
			startTimeRef.current = Date.now();
			wasLoadingRef.current = true;
			maxTimeoutRef.current = setTimeout(() => {
				console.warn("Initial loader timeout - hiding loader after 20 seconds");
				setIsLoading(false);
				startTimeRef.current = null;
				wasLoadingRef.current = false;
				hasCompletedInitialLoadRef.current = true;
				maxTimeoutRef.current = null;
			}, 2e4);
		} else if (shouldHideLoader) {
			const minLoadTime = 800;
			const elapsedTime = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
			const remainingTime = Math.max(0, minLoadTime - elapsedTime);
			timeoutRef.current = setTimeout(() => {
				setIsLoading(false);
				startTimeRef.current = null;
				wasLoadingRef.current = false;
				hasCompletedInitialLoadRef.current = true;
				if (maxTimeoutRef.current) {
					clearTimeout(maxTimeoutRef.current);
					maxTimeoutRef.current = null;
				}
			}, remainingTime);
		}
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
		};
	}, [
		shouldShowLoader,
		router.state.status,
		location.pathname,
		isFetching,
		isMutating,
		isConsoleAccount403,
		shellGatesReady
	]);
	return {
		isLoading,
		isAuthRoute,
		skipStaticLoader
	};
}
var BOOT_COVER_ID = "website-access-boot-cover";
const WEBSITE_ACCESS_BOOT_SCRIPT = `(function(){
  try {
    var cfg = window.__APP_CONFIG__ || {};
    var flag = String(cfg.websiteAccess || '').toLowerCase().trim();
    if (flag === 'false' || flag === '0' || flag === 'disabled') return;
    var path = (location.pathname || '/').replace(/\\/+$/, '') || '/';
    if (path === '/i' || path.indexOf('/i/') === 0) return;
    var re = new RegExp('(?:^|;\\\\s*)${WEBSITE_ACCESS_COOKIE_NAME}=([^;]*)');
    var m = document.cookie.match(re);
    if (m && m[1] && m[1].trim()) return;
    document.documentElement.classList.add('website-access-locked');
    var el = document.createElement('div');
    el.id = '${BOOT_COVER_ID}';
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:#ffffff;';
    if (document.documentElement.classList.contains('dark')) {
      el.style.background = '#000000';
    }
    var mount = function(){
      if (!document.getElementById('${BOOT_COVER_ID}')) {
        (document.body || document.documentElement).appendChild(el);
      }
    };
    if (document.body) mount();
    else document.addEventListener('DOMContentLoaded', mount);
  } catch (e) {}
})()`;
function removeBootCover() {
	if (typeof document === "undefined") return;
	document.getElementById(BOOT_COVER_ID)?.remove();
	document.documentElement.classList.remove("website-access-locked");
}
function WebsiteAccessScreen({ onSuccess }) {
	const t = useT();
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	useLayoutEffect(() => {
		removeBootCover();
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		setError(null);
		if (password !== "Appwrite2") {
			setError(t("Incorrect password"));
			return;
		}
		setWebsiteAccessCookie();
		removeBootCover();
		onSuccess();
	};
	return /* @__PURE__ */ jsx("div", {
		"data-website-access-gate": "",
		className: "bg-background fixed inset-0 z-[2147483646] flex h-dvh max-h-dvh w-full flex-col items-center justify-center overflow-hidden p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm space-y-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-6 text-center",
				children: [/* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" }), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold tracking-tight text-foreground",
						children: t("Password protected")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Enter the password to continue.")
					})]
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "website-access-password",
							children: t("Password")
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "website-access-password",
							type: "password",
							autoComplete: "current-password",
							autoFocus: true,
							value: password,
							onChange: (event) => {
								setPassword(event.target.value);
								if (error) setError(null);
							},
							"aria-invalid": Boolean(error)
						}),
						error ? /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-destructive",
							role: "alert",
							children: error
						}) : null
					]
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					className: "w-full",
					children: t("Continue")
				})]
			})]
		})
	});
}
function WebsiteAccessGate({ children }) {
	const [locked, setLocked] = useState(false);
	useLayoutEffect(() => {
		if (!isWebsiteAccessEnabled(getRuntimeConfig().websiteAccess) || !shouldShowWebsiteAccessGate(window.location.pathname) || hasWebsiteAccessCookie()) {
			removeBootCover();
			return;
		}
		setLocked(true);
	}, []);
	if (locked) return /* @__PURE__ */ jsx(WebsiteAccessScreen, { onSuccess: () => {
		const redirect$1 = new URLSearchParams(window.location.search).get("redirect");
		const target = redirect$1?.startsWith("/") && !redirect$1.startsWith("//") ? redirect$1 : window.location.pathname === "/access" ? "/" : null;
		if (target) {
			window.location.replace(target);
			return;
		}
		setLocked(false);
	} });
	return children;
}
function DynamicFavicon() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	useEffect(() => {
		if (typeof window === "undefined" || !mounted) return;
		if (!usesThemeAwareFaviconHost()) return;
		applyFaviconHref("/logo-theme.svg", {
			source: "dynamic-favicon",
			reason: "Theme-aware favicon host (dev/local)",
			variant: "theme"
		});
	}, [mounted]);
	return null;
}
function UploadWarning() {
	const t = useT();
	const { hasActiveUploads } = useActiveUploads();
	useEffect(() => {
		if (!hasActiveUploads) return;
		const handleBeforeUnload = (e) => {
			e.preventDefault();
			e.returnValue = t("You have file uploads in progress. Are you sure you want to leave?");
			return e.returnValue;
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [hasActiveUploads, t]);
	return null;
}
var CLICK_SELECTOR = [
	"a[href]",
	"button",
	"input[type=\"button\"]",
	"input[type=\"submit\"]",
	"input[type=\"reset\"]",
	"[role=\"button\"]",
	"[role=\"menuitem\"]",
	"[role=\"option\"]",
	"[role=\"tab\"]",
	"[role=\"switch\"]",
	"[role=\"checkbox\"]"
].join(",");
var CHANGE_SELECTOR = [
	"select",
	"input[type=\"checkbox\"]",
	"input[type=\"radio\"]",
	"input[type=\"range\"]",
	"[role=\"switch\"]",
	"[role=\"checkbox\"]"
].join(",");
function isHTMLElement(value) {
	return value instanceof HTMLElement;
}
function isFormElement(value) {
	return value instanceof HTMLFormElement;
}
function shouldSkipAnalytics(element) {
	return Boolean(element.closest("[data-analytics-track=\"manual\"], [data-analytics-track=\"false\"]"));
}
function getElementRole(element) {
	const explicitRole = element.getAttribute("role");
	if (explicitRole) return explicitRole;
	if (element instanceof HTMLAnchorElement) return "link";
	if (element instanceof HTMLButtonElement) return "button";
	if (element instanceof HTMLInputElement) return element.type || "input";
	if (element instanceof HTMLSelectElement) return "select";
	return element.tagName.toLowerCase();
}
function getBaseClickEventName(element) {
	const role = getElementRole(element);
	if (role === "tab") return "Tab Changed";
	if (role === "menuitem") return "Menu Item Clicked";
	if (role === "option") return "Control Changed";
	if (role === "switch" || role === "checkbox") return "Control Changed";
	if (element instanceof HTMLAnchorElement) try {
		return new URL(element.href).origin === window.location.origin ? "Navigation Clicked" : "External Link Opened";
	} catch {
		return "Navigation Clicked";
	}
	return "Button Clicked";
}
function getDynamicEventName(element, fallback) {
	const actionId = element.closest("[data-analytics]")?.getAttribute("data-analytics");
	if (actionId) {
		const catalogName = getAnalyticsActionEventName(actionId);
		if (catalogName) return catalogName;
	}
	return fallback;
}
function getLinkProps(element) {
	try {
		const url = new URL(element.href);
		if (url.origin !== window.location.origin) return {
			external: true,
			has_query: url.search.length > 0,
			has_hash: url.hash.length > 0
		};
		const { scope, area } = getSafeInternalPathParts(url.pathname);
		return {
			external: false,
			destination_scope: scope,
			destination_area: area,
			has_query: url.search.length > 0,
			has_hash: url.hash.length > 0
		};
	} catch {
		return { external: false };
	}
}
function getClickProps(element, event) {
	const props = {
		element: getElementRole(element),
		modifier_key: event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
	};
	if (element instanceof HTMLAnchorElement) return {
		...props,
		...getLinkProps(element)
	};
	if (element instanceof HTMLButtonElement) props.button_type = element.type || "button";
	if (element instanceof HTMLInputElement) props.control_type = element.type || "input";
	return props;
}
function getChangeProps(element) {
	const props = { element: getElementRole(element) };
	if (element instanceof HTMLInputElement) {
		props.control_type = element.type || "input";
		props.checked = element.type === "checkbox" || element.type === "radio" ? element.checked : void 0;
		props.has_value = element.value.length > 0;
	}
	if (element instanceof HTMLSelectElement) {
		props.control_type = element.multiple ? "multi_select" : "select";
		props.has_value = element.value.length > 0;
	}
	return props;
}
function getFormProps() {
	return {};
}
function getDialogElements(element) {
	const dialogs = [];
	if (element instanceof HTMLElement && element.matches("[role=\"dialog\"], [role=\"alertdialog\"]")) dialogs.push(element);
	dialogs.push(...Array.from(element.querySelectorAll("[role=\"dialog\"], [role=\"alertdialog\"]")));
	return dialogs;
}
function isDialogOpen(element) {
	return !element.hasAttribute("inert") && element.getAttribute("aria-hidden") !== "true" && element.dataset.state !== "closed";
}
function getDialogProps(element) {
	return { role: element.getAttribute("role") ?? "dialog" };
}
function useGlobalAnalyticsTracker() {
	const { track } = useAnalytics();
	useEffect(() => {
		const activeDialogs = /* @__PURE__ */ new Set();
		const syncDialog = (dialog) => {
			const isOpen = isDialogOpen(dialog);
			const isActive = activeDialogs.has(dialog);
			if (isOpen && !isActive) {
				activeDialogs.add(dialog);
				track("Dialog Opened", getDialogProps(dialog));
			} else if (!isOpen && isActive) {
				activeDialogs.delete(dialog);
				track("Dialog Closed", getDialogProps(dialog));
			}
		};
		const handleClick = (event) => {
			if (!isHTMLElement(event.target)) return;
			const element = event.target.closest(CLICK_SELECTOR);
			if (!element || shouldSkipAnalytics(element)) return;
			if (element instanceof HTMLButtonElement && (element.disabled || element.ariaDisabled === "true")) return;
			track(getDynamicEventName(element, getBaseClickEventName(element)), getClickProps(element, event));
		};
		const handleChange = (event) => {
			if (!isHTMLElement(event.target)) return;
			const element = event.target.closest(CHANGE_SELECTOR);
			if (!element || shouldSkipAnalytics(element)) return;
			track(getDynamicEventName(element, "Control Changed"), getChangeProps(element));
		};
		const handleSubmit = (event) => {
			if (!isFormElement(event.target) || shouldSkipAnalytics(event.target)) return;
			track("Form Submitted", getFormProps());
		};
		document.addEventListener("click", handleClick);
		document.addEventListener("change", handleChange);
		document.addEventListener("submit", handleSubmit);
		document.querySelectorAll("[role=\"dialog\"], [role=\"alertdialog\"]").forEach(syncDialog);
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "attributes" && mutation.target instanceof HTMLElement) {
					syncDialog(mutation.target);
					return;
				}
				mutation.addedNodes.forEach((node) => {
					if (!(node instanceof Element)) return;
					getDialogElements(node).forEach(syncDialog);
				});
				mutation.removedNodes.forEach((node) => {
					if (!(node instanceof Element)) return;
					getDialogElements(node).forEach((dialog) => {
						if (!activeDialogs.has(dialog)) return;
						activeDialogs.delete(dialog);
						track("Dialog Closed", getDialogProps(dialog));
					});
				});
			});
		});
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: [
				"aria-hidden",
				"data-state",
				"inert"
			],
			childList: true,
			subtree: true
		});
		return () => {
			document.removeEventListener("click", handleClick);
			document.removeEventListener("change", handleChange);
			document.removeEventListener("submit", handleSubmit);
			observer.disconnect();
		};
	}, [track]);
}
var CONSOLE_AREA_PREFIXES = new Set([
	"projects",
	"organizations",
	"account",
	"blocks",
	"init",
	"generator",
	"assistant",
	"agent"
]);
function isConsoleAreaPath(pathname) {
	const firstSegment = pathname.split("/").filter(Boolean)[0];
	return firstSegment ? CONSOLE_AREA_PREFIXES.has(firstSegment) : false;
}
function isConsoleAuthRouteMatch(matches) {
	return matches.some((match) => match.routeId === "/_auth" || match.routeId?.startsWith("/_auth/"));
}
function isExcludedMarketingSiteLayoutPath(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	if (normalized === "/docs" || normalized.startsWith("/docs/")) return true;
	if (normalized === "/generator" || normalized.startsWith("/generator/")) return true;
	if (normalized === "/debug" || normalized.startsWith("/debug/")) return true;
	if (normalized === "/reset") return true;
	if (normalized === "/access") return true;
	return false;
}
function isMarketingRouteShellStaticData(value) {
	if (!value || typeof value !== "object") return false;
	return value.pageType === MARKETING_PAGE_ROUTE_STATIC_DATA.pageType;
}
function resolveMarketingRouteShellOptions(matches) {
	for (let index = matches.length - 1; index >= 0; index -= 1) {
		const staticData = matches[index]?.staticData;
		if (!isMarketingRouteShellStaticData(staticData)) continue;
		return {
			showFooter: staticData.showFooter ?? true,
			expandedFooter: staticData.expandedFooter ?? true,
			headerBanner: staticData.headerBanner
		};
	}
	return null;
}
function shouldUseMarketingSiteLayout({ marketingEnabled, pathname, matches }) {
	if (!marketingEnabled) return false;
	if (isConsoleAuthRouteMatch(matches)) return false;
	if (isExcludedMarketingSiteLayoutPath(pathname)) return false;
	if (resolveMarketingRouteShellOptions(matches) !== null) return true;
	return isMarketingPagePath(pathname) || !isConsoleAreaPath(pathname);
}
function MarketingSiteLayout({ children }) {
	const shellOptions = resolveMarketingRouteShellOptions(useMatches()) ?? {
		showFooter: true,
		expandedFooter: true
	};
	return /* @__PURE__ */ jsx(MarketingSiteLayoutProvider, { children: /* @__PURE__ */ jsx(StandaloneCommandCenterScope, {
		context: "account",
		children: /* @__PURE__ */ jsxs(ConsoleLayout, {
			header: { marketingNav: true },
			headerBanner: shellOptions.headerBanner === "init-org-promo" ? /* @__PURE__ */ jsx(InitOrgPromoBanner, {}) : void 0,
			showFooter: shellOptions.showFooter,
			footer: shellOptions.showFooter ? { expanded: shellOptions.expandedFooter } : void 0,
			children: [/* @__PURE__ */ jsx(MarketingScrollToTop, {}), children]
		})
	}) });
}
function MarketingSiteLayoutGate({ children }) {
	const location = useLocation();
	const matches = useMatches();
	const { features } = useConsoleProfile();
	if (!shouldUseMarketingSiteLayout({
		marketingEnabled: features.marketing,
		pathname: location.pathname,
		matches
	})) return children;
	return /* @__PURE__ */ jsx(MarketingSiteLayout, { children });
}
function DevConstructionStripe() {
	const { showConstruction } = useDebugOverrides();
	return null;
}
var THEME_SCRIPT = `(function(){
  try {
    var t = localStorage.getItem('theme') || 'system';
    if (t === 'classic') { localStorage.setItem('theme', 'dark'); t = 'dark'; }
    var r = t === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t;
    var e = document.documentElement;
    ['light','dark','system','crazy','stealth','classic','premium','high-contrast','barbie','nineties','legacy'].forEach(function(c){e.classList.remove(c);});
    e.classList.add(r);
    try {
      var langPref = localStorage.getItem('debug:language');
      var resolvedLang = 'bs';
      var dir = 'ltr';
      if (langPref === 'he') {
        resolvedLang = 'he';
        dir = 'rtl';
      } else if (langPref === 'ja') {
        resolvedLang = 'ja';
      } else if (langPref === 'en') {
        resolvedLang = 'en';
      } else {
        var pd = localStorage.getItem('debug:pageDirection');
        if (pd === 'rtl') dir = 'rtl';
      }
      e.setAttribute('lang', resolvedLang);
      e.setAttribute('dir', dir);
    } catch (e3) {}
  } catch (e) {}
})()`;
var scripts = [];
function getHeadFontPreloads() {
	if (getRuntimeConfig().consoleProfile.toLowerCase().trim().replace(/\s+/g, "-") === "self-hosted") return [{
		rel: "preload",
		href: "/fonts/inter/inter-v8-latin-regular.woff2",
		as: "font",
		type: "font/woff2",
		crossOrigin: "anonymous"
	}, {
		rel: "preload",
		href: "/fonts/inter/inter-v8-latin-600.woff2",
		as: "font",
		type: "font/woff2",
		crossOrigin: "anonymous"
	}];
	return [
		{
			rel: "preload",
			href: "/fonts/aeonik-pro/AeonikPro-Regular.woff2",
			as: "font",
			type: "font/woff2",
			crossOrigin: "anonymous"
		},
		{
			rel: "preload",
			href: "/fonts/noto-sans-hebrew/noto-sans-hebrew-hebrew-400.woff2",
			as: "font",
			type: "font/woff2",
			crossOrigin: "anonymous"
		},
		{
			rel: "preload",
			href: "/fonts/inter/inter-latin-400-normal.woff2",
			as: "font",
			type: "font/woff2",
			crossOrigin: "anonymous"
		}
	];
}
const Route$1 = createRootRouteWithContext()({
	loader: async () => {
		return { currentUser: null };
	},
	errorComponent: ({ error, info, reset }) => /* @__PURE__ */ jsx(ErrorComponent, {
		error,
		info,
		reset
	}),
	head: () => ({
		meta: [
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
			},
			{ title: "Appwrite Console" },
			...getSeoRobotsMetaTags(getRequestSiteOrigin())
		],
		links: [
			{
				rel: "icon",
				href: "/logo.svg",
				type: "image/svg+xml"
			},
			...[{
				rel: "shortcut icon",
				href: "/favicon.ico"
			}],
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180"
			},
			...getHeadFontPreloads()
		],
		scripts: [...scripts]
	}),
	shellComponent: RootDocument
});
function MigrateRemovedThemes() {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		if (theme === "classic") setTheme("dark");
	}, [theme, setTheme]);
	return null;
}
function LegacyThemeFavicon() {
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		if (isLegacyTheme(theme, resolvedTheme)) {
			applyFaviconHref(LEGACY_ICON_SRC, {
				cacheBust: false,
				source: "legacy-theme",
				reason: "Legacy debug theme is active",
				variant: "default"
			});
			return;
		}
		applyFaviconVariant(getDefaultFaviconVariant(), {
			cacheBust: false,
			source: "default",
			reason: "Idle (default favicon)"
		});
	}, [theme, resolvedTheme]);
	return null;
}
function ClientThemeProvider({ children }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ jsx(Fragment, { children });
	return /* @__PURE__ */ jsxs(ThemeProvider, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		themes: [
			"light",
			"dark",
			"system",
			"crazy",
			"stealth",
			"premium",
			"high-contrast",
			"barbie",
			"nineties",
			"legacy"
		],
		children: [
			/* @__PURE__ */ jsx(MigrateRemovedThemes, {}),
			/* @__PURE__ */ jsx(LegacyThemeFavicon, {}),
			children
		]
	});
}
function ClientOnly({ children }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function ContextualDocumentTitle() {
	const location = useLocation();
	const queryClient = useQueryClient();
	const [previousContextPart, setPreviousContextPart] = useState();
	useMatches();
	useEffect(() => {
		if (typeof document === "undefined") return;
		const { projectId, orgId } = getConsoleRouteIds(location.pathname);
		const project = projectId ? queryClient.getQueryData(["project", projectId]) : void 0;
		const organization = orgId ? queryClient.getQueryData(["organization", orgId]) ?? queryClient.getQueryData(["organizations", "console"])?.teams?.find((team) => team.$id === orgId) : void 0;
		const organizationName = organization?.name ? isScreenshotModeActive() ? applyScreenshotModeOrganizationName({ name: organization.name }).name : organization.name : void 0;
		const contextPart = project?.name ?? organizationName;
		const nextTitle = withPageTitleNameContext(document.title, {
			projectName: project?.name,
			organizationName,
			previousContextPart
		});
		if (document.title !== nextTitle) document.title = nextTitle;
		if (previousContextPart !== contextPart) setPreviousContextPart(contextPart);
	});
	return null;
}
function isProjectRoute(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	return parts[0] === "projects" && parts.length >= 2;
}
function RootAppShell({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "root-container flex w-full min-w-0 flex-col overflow-hidden",
		children: [/* @__PURE__ */ jsx(DevConstructionStripe, {}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 min-w-0 flex-1 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "root-scroll-container h-full min-h-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ jsx(MarketingSiteLayoutGate, { children })
			}), /* @__PURE__ */ jsx(ConsoleRightPane, {})]
		})]
	});
}
var STATUS_PAGE_URL = "https://status.appwrite.online";
function RootDocument({ children }) {
	const queryClient = useQueryClient();
	const { isLoading, skipStaticLoader } = useInitialLoader();
	const [clientMounted, setClientMounted] = useState(false);
	const location = useLocation();
	const { isCloud, features } = useConsoleProfile();
	const { account, isFetched } = useAuth();
	const cloudStatusEnabled = isCloud && features.systemStatus;
	const showCloudStatusToOperator = isFetched && isOperatorAccount(account);
	const { data: statusData, isSuccess: isStatusSuccess } = useAppwriteCloudStatus(cloudStatusEnabled && showCloudStatusToOperator);
	const { showFullscreenLoader } = useDebugOverrides();
	useGlobalAnalyticsTracker();
	useEffect(() => {
		setClientMounted(true);
	}, []);
	useEffect(() => {
		if (typeof window === "undefined") return;
		queryClient.prefetchQuery(consoleProjectScopesQueryOptions()).catch(() => {});
	}, [queryClient]);
	const isLoaderVisible = isLoading || showFullscreenLoader;
	const statusBanner = cloudStatusEnabled && showCloudStatusToOperator && isLoaderVisible && isStatusSuccess && statusData?.consoleAlertState && statusData.consoleAlertState !== "operational" ? {
		...getStatusBannerParts(statusData.consoleAlertState, {
			reportTitle: statusData.activeReport?.title,
			startsAt: statusData.activeReport?.startsAt,
			endsAt: statusData.activeReport?.endsAt,
			regionsLine: statusData.regionsLine
		}),
		href: STATUS_PAGE_URL,
		state: statusData.consoleAlertState
	} : void 0;
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("link", {
				rel: "stylesheet",
				href: styles_default
			}),
			/* @__PURE__ */ jsx(HeadContent, {})
		] }), /* @__PURE__ */ jsxs("body", {
			suppressHydrationWarning: true,
			children: [
				/* @__PURE__ */ jsx(ScriptOnce, { children: getRuntimeConfigScript() }),
				/* @__PURE__ */ jsx(ScriptOnce, { children: getSsrClientIpScript() }),
				/* @__PURE__ */ jsx(ScriptOnce, { children: THEME_SCRIPT }),
				/* @__PURE__ */ jsx(ScriptOnce, { children: WEBSITE_ACCESS_BOOT_SCRIPT }),
				/* @__PURE__ */ jsx(ScriptOnce, { children: STALE_CHUNK_BOOT_SCRIPT }),
				/* @__PURE__ */ jsx(DynamicFavicon, {}),
				/* @__PURE__ */ jsx(UploadWarning, {}),
				/* @__PURE__ */ jsx(ContextualDocumentTitle, {}),
				/* @__PURE__ */ jsxs(I18nProvider, { children: [/* @__PURE__ */ jsx(FullscreenLoader, {
					isVisible: showFullscreenLoader || !skipStaticLoader && (clientMounted ? isLoading : true),
					statusBanner: clientMounted && isLoaderVisible ? statusBanner : void 0
				}), /* @__PURE__ */ jsx(ClientThemeProvider, { children: /* @__PURE__ */ jsxs(WebsiteAccessGate, { children: [/* @__PURE__ */ jsx(AnalyticsSessionPropsSync, {}), /* @__PURE__ */ jsx(PageDirectionProvider, { children: /* @__PURE__ */ jsx(CookieConsentProvider, { children: /* @__PURE__ */ jsx(NavigationHistoryProvider, { children: /* @__PURE__ */ jsxs(RecentResourcesProvider, { children: [
					/* @__PURE__ */ jsx(SentryContextProvider, { children: /* @__PURE__ */ jsx(RootShellCatchBoundary, { children: /* @__PURE__ */ jsx(DebugModeProvider, { children: /* @__PURE__ */ jsx(ScreenshotModeProvider, { children: /* @__PURE__ */ jsxs(ConsoleRightPaneProvider, { children: [features.agent ? /* @__PURE__ */ jsx(AgentChatProvider, { children: /* @__PURE__ */ jsx(DocsPreviewProvider, { children: /* @__PURE__ */ jsxs(PromoBannerProvider, { children: [/* @__PURE__ */ jsx(RootAppShell, { children }), /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(DebugMenu, {}) })] }) }) }) : /* @__PURE__ */ jsx(DocsPreviewProvider, { children: /* @__PURE__ */ jsxs(PromoBannerProvider, { children: [/* @__PURE__ */ jsx(RootAppShell, { children }), /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(DebugMenu, {}) })] }) }), /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(CommunitySupportPromptProvider, {}) })] }) }) }) }) }),
					/* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(DocsContentHmrRefresh, {}) }),
					/* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(Toaster$1, {}) }),
					/* @__PURE__ */ jsx(ClientOnly, { children: !isProjectRoute(location.pathname) && /* @__PURE__ */ jsx(GlobalUploadProgress, {}) })
				] }) }) }) })] }) })] }),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
function getProductionRobotsTxt() {
	return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Console and authenticated areas (not public marketing content)
Disallow: /projects/
Disallow: /organizations/
Disallow: /account/
Disallow: /sign-in
Disallow: /sign-up
Disallow: /sign-out
Disallow: /recovery
Disallow: /reset
Disallow: /join
Disallow: /mfa
Disallow: /verify-email
Disallow: /debug/
Disallow: /_protected/
Disallow: /comps
Disallow: /blocks
Disallow: /cache

Sitemap: https://appwrite.io/sitemap.xml
`;
}
const Route$2 = createFileRoute("/robots.txt")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request, { format: "text" });
		return respondWithPrebuiltOrRuntime("robots.txt", "text/plain; charset=utf-8", () => getProductionRobotsTxt());
	} } }
});
const Route$3 = createFileRoute("/llms.txt")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		return respondWithPrebuiltOrRuntime("llms.txt", "text/markdown; charset=utf-8", () => generateLlmsTxt());
	} } }
});
function demoteHeadings(text, levels = 2) {
	return text.replace(/^(#{1,6})\s/gm, (_, hashes) => {
		const next = Math.min(hashes.length + levels, 6);
		return "#".repeat(next) + " ";
	});
}
function stripFirstH1(text) {
	return text.replace(/^#\s+.+\n+/, "");
}
async function generateLlmsFullTxt() {
	const base = "https://appwrite.io";
	return (await Promise.all(DOCS_PAGES.map(async (page) => {
		const pageData = await getDocsPage(page.slug);
		if (!pageData) return null;
		const href = page.slug ? `${base}/docs/${page.slug}` : `${base}/docs`;
		let body = markdocToMarkdown(stripFrontmatter(pageData.rawContent));
		body = stripFirstH1(body);
		body = demoteHeadings(body);
		return `## ${page.title}\n\nURL: ${href}\n\n${body.trim()}`;
	}))).filter(Boolean).join("\n\n---\n\n") + "\n";
}
var cachedLlmsFullTxt = null;
function getLlmsFullTxt() {
	cachedLlmsFullTxt ??= generateLlmsFullTxt();
	return cachedLlmsFullTxt;
}
const Route$4 = createFileRoute("/llms-full.txt")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		if (process.env.NODE_ENV === "production") {
			const prebuilt = await respondWithClientStaticFile("llms-full.txt", "text/markdown; charset=utf-8");
			if (prebuilt.status !== 404) return prebuilt;
		}
		return new Response(await getLlmsFullTxt(), { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
	} } }
});
const Route$5 = createFileRoute("/integrations.md")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		return respondWithPrebuiltOrRuntime("integrations.md", "text/markdown; charset=utf-8", () => generateIntegrationsMarkdownIndex());
	} } }
});
function assertMarketingProfileEnabled() {
	if (!getActiveProfileFeatures().marketing) throw redirect({
		to: "/",
		replace: true
	});
}
async function prefetchOptionalAuthOrganizationPlan(queryClient, account) {
	const orgId = account.prefs?.organization;
	if (!orgId) return;
	await queryClient.ensureQueryData(organizationPlanQueryOptions(orgId));
}
async function prefetchOptionalAuthHeaderData(queryClient) {
	if (typeof window === "undefined") return;
	const cachedAccount = getConsoleAccountFromCache(queryClient);
	if (cachedAccount && "$id" in cachedAccount) {
		await prefetchOptionalAuthOrganizationPlan(queryClient, cachedAccount);
		return;
	}
	if (isConsoleAccountQuerySettled(queryClient)) return;
	if (shouldRevalidateConsoleAccount(queryClient)) {
		try {
			await prefetchOptionalAuthOrganizationPlan(queryClient, await refreshConsoleAccountAfterAuth(queryClient));
		} catch {}
		return;
	}
	try {
		const account = await ensureConsoleAccountQueryData(queryClient);
		if (!account) return;
		await prefetchOptionalAuthOrganizationPlan(queryClient, account);
	} catch {}
}
async function marketingPageLoader(queryClient) {
	assertMarketingProfileEnabled();
	await prefetchOptionalAuthHeaderData(queryClient);
}
var $$splitComponentImporter$204 = () => import("./generator-BSNtBiW-.js");
const Route$6 = createFileRoute("/generator")({
	ssr: true,
	head: () => ({ meta: [
		{ title: pageTitle("Generator") },
		{
			name: "description",
			content: "Internal generator for Appwrite marketing assets, Open Graph images, and diagrams."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		if (!getActiveProfileFeatures().marketing) throw redirect({
			to: "/",
			replace: true
		});
		await marketingPageLoader(context.queryClient);
	},
	component: lazyRouteComponent($$splitComponentImporter$204, "component")
});
const Route$7 = createFileRoute("/docs.md")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		return respondWithPrebuiltOrRuntime("docs.md", "text/markdown; charset=utf-8", () => generateDocsMarkdownIndex());
	} } }
});
var $$splitComponentImporter$203 = () => import("./docs-C-ePOoHo.js");
var $$splitNotFoundComponentImporter$1 = () => import("./docs-BEgzUPV8.js");
const Route$8 = createFileRoute("/docs")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	loader: async ({ context }) => {
		await marketingPageLoader(context.queryClient);
	},
	component: lazyRouteComponent($$splitComponentImporter$203, "component")
});
var DISCORD_INVITE_URL = "https://discord.com/invite/appwrite";
const Route$9 = createFileRoute("/discord")({ beforeLoad: () => {
	throw redirect({
		href: DISCORD_INVITE_URL,
		statusCode: 302,
		replace: true
	});
} });
const Route$10 = createFileRoute("/changelog.md")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		return respondWithPrebuiltOrRuntime("changelog.md", "text/markdown; charset=utf-8", () => generateChangelogMarkdownIndex());
	} } }
});
const Route$11 = createFileRoute("/blog.md")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		return respondWithPrebuiltOrRuntime("blog.md", "text/markdown; charset=utf-8", () => generateBlogMarkdownIndex());
	} } }
});
var $$splitComponentImporter$202 = () => import("./access-Cx1hYv3u.js");
const Route$12 = createFileRoute("/access")({
	ssr: false,
	beforeLoad: () => {
		if (typeof window === "undefined") return;
		if (!isWebsiteAccessEnabled(getRuntimeConfig().websiteAccess) || hasWebsiteAccessCookie()) throw redirect({
			to: "/",
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("Password protected") }] }),
	component: lazyRouteComponent($$splitComponentImporter$202, "component")
});
const Route$13 = createFileRoute("/_public")({
	ssr: false,
	loader: async ({ context, location }) => {
		if (typeof window !== "undefined") {
			const { queryClient } = context;
			const accountQuery = consoleAccountQueryOptions();
			if (isOptionalAuthPage(location.pathname)) {
				if (shouldRevalidateConsoleAccount(queryClient)) refreshConsoleAccountAfterAuth(queryClient).catch(() => {});
				else if (!isConsoleAccountQuerySettled(queryClient)) queryClient.prefetchQuery(accountQuery).catch(() => {});
				return { currentUser: null };
			}
			await ensureConsoleAccountQueryData(queryClient);
		}
		return { currentUser: null };
	}
});
const Route$14 = createFileRoute("/_protected")({
	ssr: false,
	loader: async () => {
		return { currentUser: null };
	}
});
var $$splitComponentImporter$201 = () => import("./_marketing-CYIMH67b.js");
const Route$15 = createFileRoute("/_marketing")({
	staleTime: Number.POSITIVE_INFINITY,
	loaderDeps: () => ({}),
	loader: async ({ context }) => {
		await marketingPageLoader(context.queryClient);
	},
	component: lazyRouteComponent($$splitComponentImporter$201, "component")
});
const Route$16 = createFileRoute("/_auth")({
	ssr: false,
	loader: async ({ context, location }) => {
		if (typeof window !== "undefined") {
			if (location.pathname !== "/mfa") await ensureConsoleAccountOnAuthRoute(context.queryClient);
		}
		return { currentUser: null };
	}
});
var $$splitComponentImporter$200 = () => import("./generator-BGOdIKAl.js");
const Route$17 = createFileRoute("/generator/")({
	head: () => ({ meta: [
		{ title: pageTitle("Covers", "Generator") },
		{
			name: "description",
			content: "Internal cover generator for Appwrite marketing assets and Open Graph images."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$200, "component")
});
var $$splitComponentImporter$199 = () => import("./docs-BHxGUARV.js");
const Route$18 = createFileRoute("/docs/")({
	ssr: true,
	head: () => ({ meta: getDocsMetaTags({
		title: "Documentation",
		description: "Ship faster with Appwrite - by hand or with AI agents over MCP and skills. Quick starts and deep guides for web and mobile: Authentication, Databases, Storage, Functions, Messaging, and hosting.",
		slug: ""
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$199, "component")
});
var $$splitComponentImporter$198 = () => import("./_public-Dx7tcEfZ.js");
const Route$19 = createFileRoute("/_public/")({
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return;
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (!account) {
			const { queryKey } = consoleAccountQueryOptions();
			const queryError = context.queryClient.getQueryState(queryKey)?.error;
			const isMfaRequired = queryError instanceof AppwriteException && queryError.type === "user_more_factors_required";
			const isAccountBlocked = !!queryError && isHttpForbiddenError(queryError);
			if (!isMfaRequired && !isAccountBlocked) {
				if (!getActiveProfileFeatures().marketing) throw redirect({
					to: "/sign-in",
					replace: true
				});
				throw redirect({
					to: "/home",
					replace: true
				});
			}
			return;
		}
		const urlParams = searchParamsFromRouterLocation(location);
		if (urlParams.has("project") || urlParams.has("key") || location.pathname.includes("callback")) {
			if (account.identities?.some((identity) => identity.provider === "github")) setLastLoginMethod("github");
		}
		if (requiresConsoleEmailVerification(account)) throw redirect({
			to: "/verify-email",
			replace: true
		});
		try {
			const orgId = await resolvePostAuthOrganizationId(account, context.queryClient);
			await prefetchOrganizationOverviewData(context.queryClient, orgId);
			throw redirect({
				to: "/organizations/$orgId",
				params: { orgId },
				replace: true
			});
		} catch (error) {
			if (isRedirect(error)) throw error;
			throw redirect({
				to: "/account",
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$198, "component")
});
const Route$20 = createFileRoute("/llms/txt")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		if (process.env.TSS_PRERENDERING === "true") return new Response(generateLlmsTxt(), { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
		const fromNested = await respondWithClientStaticFile("llms/txt", "text/markdown; charset=utf-8");
		if (fromNested.status !== 404) return fromNested;
		return respondWithClientStaticFile("llms.txt", "text/markdown; charset=utf-8");
	} } }
});
const Route$21 = createFileRoute("/llms-full/txt")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request);
		if (process.env.TSS_PRERENDERING === "true") return new Response(await generateLlmsFullTxt(), { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
		const fromNested = await respondWithClientStaticFile("llms-full/txt", "text/markdown; charset=utf-8");
		if (fromNested.status !== 404) return fromNested;
		return respondWithClientStaticFile("llms-full.txt", "text/markdown; charset=utf-8");
	} } }
});
var $$splitComponentImporter$197 = () => import("./tutorials-CrTyIC1L.js");
const Route$25 = createFileRoute("/docs/tutorials")({
	ssr: true,
	head: () => ({ meta: getDocsMetaTags({
		title: "Tutorials",
		description: "Follow a simple tutorial to get started with Appwrite in your preferred framework quickly and easily.",
		slug: "tutorials"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$197, "component")
});
var $$splitComponentImporter$196 = () => import("./quick-starts-BdLaZPUf.js");
const Route$26 = createFileRoute("/docs/quick-starts")({
	ssr: true,
	head: () => ({ meta: getDocsMetaTags({
		title: "Quick start",
		description: "Get started with your favorite framework and language in just a few clicks.",
		slug: "quick-starts"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$196, "component")
});
var SDK_FOR_CLI_RAW_BASE = "https://raw.githubusercontent.com/appwrite/sdk-for-cli/master";
const CLI_INSTALL_SH_UPSTREAM = `${SDK_FOR_CLI_RAW_BASE}/install.sh`;
const CLI_INSTALL_PS1_UPSTREAM = `${SDK_FOR_CLI_RAW_BASE}/install.ps1`;
var CACHE_TTL_MS = 300 * 1e3;
var cache = /* @__PURE__ */ new Map();
async function fetchUpstreamScript(upstreamUrl) {
	const cached = cache.get(upstreamUrl);
	if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) return cached.body;
	const response = await fetch(upstreamUrl, { headers: { Accept: "text/plain" } });
	if (!response.ok) throw new Error(`Failed to fetch CLI install script (${response.status}): ${upstreamUrl}`);
	const body = await response.text();
	cache.set(upstreamUrl, {
		body,
		fetchedAt: Date.now()
	});
	return body;
}
async function getCliInstallSh() {
	return fetchUpstreamScript(CLI_INSTALL_SH_UPSTREAM);
}
async function getCliInstallPs1() {
	return fetchUpstreamScript(CLI_INSTALL_PS1_UPSTREAM);
}
function cliInstallScriptResponse(body) {
	return new Response(body, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
		"X-Content-Type-Options": "nosniff"
	} });
}
const Route$28 = createFileRoute("/cli/install.sh")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request, { format: "text" });
		try {
			return cliInstallScriptResponse(await getCliInstallSh());
		} catch {
			return new Response("Failed to load Appwrite CLI install script.\n", {
				status: 502,
				headers: { "Content-Type": "text/plain; charset=utf-8" }
			});
		}
	} } }
});
const Route$29 = createFileRoute("/cli/install.ps1")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ request }) => {
		trackServerPageview(request, { format: "text" });
		try {
			return cliInstallScriptResponse(await getCliInstallPs1());
		} catch {
			return new Response("Failed to load Appwrite CLI install script.\n", {
				status: 502,
				headers: { "Content-Type": "text/plain; charset=utf-8" }
			});
		}
	} } }
});
var $$splitComponentImporter$195 = () => import("./upgrade-Du6cKnWZ.js");
var upgradeSearchSchema = z.object({
	orgId: z.string().optional(),
	plan: z.string().optional(),
	code: z.string().optional(),
	type: z.string().optional(),
	invites: z.string().optional()
});
const Route$30 = createFileRoute("/_public/upgrade")({
	validateSearch: upgradeSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("Upgrade") }] }),
	beforeLoad: () => {
		if (!getActiveProfileFeatures().billing) throw redirect({
			to: "/",
			replace: true
		});
	},
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		const orgId = searchParamsFromRouterLocation(location).get("orgId") ?? void 0;
		const sharedPrefetches = [queryClient.ensureQueryData(organizationsQueryOptions()), queryClient.ensureQueryData(billingPlansQueryOptions())];
		if (orgId) {
			await Promise.all([
				...sharedPrefetches,
				queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)),
				queryClient.ensureQueryData(organizationQueryOptions(orgId)),
				queryClient.ensureQueryData(organizationMembershipsQueryOptions(orgId, 0, 12, ""))
			]);
			queryClient.prefetchQuery(organizationUsageQueryOptions(orgId)).catch(() => void 0);
			queryClient.prefetchQuery(organizationProjectsQueryOptions(orgId)).catch(() => void 0);
			return;
		}
		await Promise.all(sharedPrefetches);
	},
	component: lazyRouteComponent($$splitComponentImporter$195, "component")
});
var $$splitComponentImporter$194 = () => import("./reset-orpN_LgE.js");
var searchSchema$7 = z.object({
	userId: z.string().min(1, "User ID is required"),
	secret: z.string().min(1, "Secret token is required")
});
const Route$31 = createFileRoute("/_public/reset")({
	component: lazyRouteComponent($$splitComponentImporter$194, "component"),
	validateSearch: searchSchema$7,
	head: () => ({ meta: [{ title: pageTitle("Reset password") }] })
});
var $$splitComponentImporter$193 = () => import("./init-DGHjnCQU.js");
const Route$32 = createFileRoute("/_public/init")({
	ssr: true,
	component: lazyRouteComponent($$splitComponentImporter$193, "component"),
	head: () => ({ meta: getInitPageMetaTags() }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		if (!getActiveProfileFeatures().init) throw redirect({
			to: "/",
			replace: true
		});
		await ensureConsoleAccountQueryData(context.queryClient);
	}
});
var $$splitComponentImporter$192 = () => import("./comps-DN0OBd1Y.js");
const Route$33 = createFileRoute("/_public/comps")({
	head: () => ({ meta: [{ title: pageTitle("Components") }] }),
	component: lazyRouteComponent($$splitComponentImporter$192, "component")
});
var $$splitComponentImporter$191 = () => import("./cache-DAYDLHAy.js");
const Route$34 = createFileRoute("/_public/cache")({
	component: lazyRouteComponent($$splitComponentImporter$191, "component"),
	head: () => ({ meta: [{ title: pageTitle("Cache") }] })
});
var $$splitComponentImporter$190 = () => import("./blocks-DmvrIKwS.js");
const Route$35 = createFileRoute("/_public/blocks")({
	component: lazyRouteComponent($$splitComponentImporter$190, "component"),
	head: () => ({ meta: [{ title: pageTitle("Blocks") }] })
});
const Route$36 = createFileRoute("/_public/assistant")({ beforeLoad: () => {
	throw redirect({
		to: "/agent",
		replace: true
	});
} });
var $$splitComponentImporter$189 = () => import("./agent-Ah-KJPhd.js");
const Route$37 = createFileRoute("/_public/agent")({
	ssr: false,
	beforeLoad: async ({ context, location }) => {
		await redirectLegacyAgentLocation({
			queryClient: context.queryClient,
			pathname: location.pathname
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$189, "component")
});
var $$splitComponentImporter$188 = () => import("./account-DfeKHT0f.js");
var $$splitNotFoundComponentImporter = () => import("./account-Bn4aMrGH.js");
const Route$38 = createFileRoute("/_public/account")({
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$188, "component")
});
var $$splitComponentImporter$187 = () => import("./example-protected-route-CQcyv6s2.js");
const Route$39 = createFileRoute("/_protected/example-protected-route")({ component: lazyRouteComponent($$splitComponentImporter$187, "component") });
var $$splitComponentImporter$186 = () => import("./terms-DlO1YjI8.js");
const Route$40 = createFileRoute("/_marketing/terms")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Terms and Conditions",
		description: "Review our Terms of Service to understand the rules and guidelines for using our open-source backend-as-a-service platform."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$186, "component")
});
var $$splitComponentImporter$185 = () => import("./startups-DHPFH7Jm.js");
const Route$41 = createFileRoute("/_marketing/startups")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Startups",
		description: "Get cloud credits to fulfill all your startup's backend and hosting needs. Apply for Appwrite's Startups Program today."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$185, "component")
});
var $$splitComponentImporter$184 = () => import("./privacy-BUVPXd7t.js");
const Route$42 = createFileRoute("/_marketing/privacy")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Privacy Policy",
		description: "Appwrite's privacy policy outlines the purpose and scope of data collection necessary to operate our business and its impact on users."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$184, "component")
});
var $$splitComponentImporter$183 = () => import("./pricing-CKzQ6cK2.js");
const Route$43 = createFileRoute("/_marketing/pricing")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Pricing",
		description: "All your cloud services under one subscription. Build, deploy, and observe your app from a unified stack under one subscription."
	}) }),
	loader: async ({ context }) => {
		if (typeof window !== "undefined") {
			const hash = window.location.hash.slice(1);
			if (hash && isPricingHashTarget(hash)) {
				history.scrollRestoration = "manual";
				resetPricingPageScrollContainers(true);
			}
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$183, "component")
});
var $$splitComponentImporter$182 = () => import("./partners-GvCMnjt2.js");
const Route$44 = createFileRoute("/_marketing/partners")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Partners",
		description: "Join the Appwrite Partners program and grow your business. Deliver powerful solutions to clients, increase revenue, and expand your reach."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$182, "component")
});
var $$splitComponentImporter$181 = () => import("./home-D0qi1qM0.js");
var HOME_COPY = getEnglishCatalog().website.home;
var HOME_HERO_IMAGE_CACHE_BUST = "20260729";
var HOME_HERO_LIGHT_SRC = `/images/heroes/console-app-light.avif?v=${HOME_HERO_IMAGE_CACHE_BUST}`;
var HOME_HERO_DARK_SRC = `/images/heroes/console-app-dark.avif?v=${HOME_HERO_IMAGE_CACHE_BUST}`;
const Route$45 = createFileRoute("/_marketing/home")({
	staticData: {
		...MARKETING_PAGE_ROUTE_STATIC_DATA,
		headerBanner: "init-org-promo"
	},
	ssr: true,
	head: () => ({
		meta: getMarketingPageMetaTags({
			pageName: "Home",
			description: HOME_COPY.seoDescription,
			ogImage: getMarketingHomeOgImage()
		}),
		links: [{
			rel: "preload",
			as: "image",
			href: HOME_HERO_LIGHT_SRC,
			media: "(prefers-color-scheme: light)"
		}, {
			rel: "preload",
			as: "image",
			href: HOME_HERO_DARK_SRC,
			media: "(prefers-color-scheme: dark)"
		}]
	}),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$181, "component")
});
var $$splitComponentImporter$180 = () => import("./enterprise-D2V0s2tM.js");
const Route$46 = createFileRoute("/_marketing/enterprise")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Enterprise",
		description: "Want to learn more about Appwrite's Enterprise plan? Contact our team for custom resources, premium support, and advanced security features."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$180, "component")
});
var $$splitComponentImporter$179 = () => import("./education-QtmXC61X.js");
const Route$47 = createFileRoute("/_marketing/education")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Education",
		description: "Students can expand their skillset without spending a penny. Sign up for the Appwrite Education program to get access to our Pro plan."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$179, "component")
});
var $$splitComponentImporter$178 = () => import("./cookies-pCXiJd4O.js");
const Route$49 = createFileRoute("/_marketing/cookies")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Cookies Policy",
		description: "This cookie policy explains what cookies are, how we use them at Appwrite, and how you can manage and customize your preferences."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$178, "component")
});
var $$splitComponentImporter$177 = () => import("./company-C8S8-RML.js");
const Route$50 = createFileRoute("/_marketing/company")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Company",
		description: "At Appwrite, we remove technical barriers so developers and agents can build products the world loves. Learn about our mission, team, and investors."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$177, "component")
});
var $$splitComponentImporter$176 = () => import("./baa-C8imH6rb.js");
const Route$52 = createFileRoute("/_marketing/baa")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Business Associate Agreement",
		description: "Appwrite's HIPAA Business Associate Agreement (BAA) governing how protected health information is handled for eligible plans."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$176, "component")
});
var $$splitComponentImporter$175 = () => import("./assets-CSDGK2mn.js");
const Route$53 = createFileRoute("/_marketing/assets")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Assets",
		description: "Appwrite's key brand assets including the logotype, colors, product visuals, and practical guidelines for their usage."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$175, "component")
});
var $$splitComponentImporter$174 = () => import("./affiliates-BZCkf139.js");
const Route$54 = createFileRoute("/_marketing/affiliates")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	head: () => ({ meta: getMarketingPageMetaTags({
		pageName: "Affiliates",
		description: "Earn Appwrite Cloud credits by referring developers. Join the Affiliates program, share invite links, and get rewarded when referrals upgrade to Pro."
	}) }),
	loader: async ({ context }) => {},
	component: lazyRouteComponent($$splitComponentImporter$174, "component")
});
var $$splitComponentImporter$173 = () => import("./verify-email-CqgAE9_a.js");
function isValidRelativeRedirect$2(url) {
	try {
		return url.startsWith("/") && !url.includes("://");
	} catch {
		return false;
	}
}
var searchSchema$6 = z.object({
	redirect: z.string().optional().refine((val) => !val || isValidRelativeRedirect$2(val), { message: "Redirect must be a relative URL" }),
	userId: z.string().optional(),
	secret: z.string().optional(),
	expire: z.string().optional()
});
function getVerificationParamsFromUrl() {
	if (typeof window === "undefined") return null;
	const params = new URLSearchParams(window.location.search);
	const userId = params.get("userId");
	const secret = params.get("secret");
	if (userId && secret) return {
		userId,
		secret
	};
	return null;
}
const Route$55 = createFileRoute("/_auth/verify-email")({
	component: lazyRouteComponent($$splitComponentImporter$173, "component"),
	validateSearch: searchSchema$6,
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return;
		const params = getVerificationParamsFromUrl();
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (params) return;
		if (!account) {
			const pendingRedirect = location.search.redirect;
			throw redirect({
				to: "/sign-in",
				search: { redirect: pendingRedirect || "/verify-email" },
				replace: true
			});
		}
		if (!requiresConsoleEmailVerification(account)) throw redirect({
			to: "/",
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("Verify your email") }] })
});
var $$splitComponentImporter$172 = () => import("./sign-up-Bu61bTGG.js");
function isValidRelativeRedirect$1(url) {
	try {
		return url.startsWith("/") && !url.includes("://");
	} catch {
		return false;
	}
}
var searchSchema$5 = z.object({ redirect: z.string().optional().refine((val) => !val || isValidRelativeRedirect$1(val), { message: "Redirect must be a relative URL" }) });
const Route$56 = createFileRoute("/_auth/sign-up")({
	component: lazyRouteComponent($$splitComponentImporter$172, "component"),
	validateSearch: searchSchema$5,
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return;
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (account) {
			if (requiresConsoleEmailVerification(account)) {
				const pendingRedirect = location.search.redirect;
				throw redirect({
					to: "/verify-email",
					search: pendingRedirect ? { redirect: pendingRedirect } : void 0,
					replace: true
				});
			}
			throw redirect({
				to: "/",
				replace: true
			});
		}
	},
	head: () => ({ meta: [{ title: pageTitle("Sign up") }] })
});
var $$splitComponentImporter$171 = () => import("./sign-out-B5DC6Okg.js");
const Route$57 = createFileRoute("/_auth/sign-out")({
	head: () => ({ meta: [{ title: pageTitle("Sign out") }] }),
	component: lazyRouteComponent($$splitComponentImporter$171, "component"),
	loader: async ({ context, cause, preload }) => {
		if (typeof window === "undefined") return;
		if (cause === "preload" || preload) return;
		await performConsoleSignOut(context.queryClient);
	}
});
var $$splitComponentImporter$170 = () => import("./sign-in-CdefObmY.js");
function isValidRelativeRedirect(url) {
	try {
		return url.startsWith("/") && !url.startsWith("//") && !url.includes("://");
	} catch {
		return false;
	}
}
var searchSchema$4 = z.object({ redirect: z.string().optional().refine((val) => !val || isValidRelativeRedirect(val), { message: "Redirect must be a relative URL" }) });
const Route$58 = createFileRoute("/_auth/sign-in")({
	component: lazyRouteComponent($$splitComponentImporter$170, "component"),
	validateSearch: searchSchema$4,
	loader: async ({ context, location }) => {
		if (typeof window === "undefined") return;
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (account) {
			if (requiresConsoleEmailVerification(account)) {
				const pendingRedirect = location.search.redirect;
				throw redirect({
					to: "/verify-email",
					search: pendingRedirect ? { redirect: pendingRedirect } : void 0,
					replace: true
				});
			}
			const target = resolvePostAuthRedirect(location.search.redirect);
			if (target) throw redirect({
				...toRedirectNavigateOptions(target),
				replace: true
			});
			throw redirect({
				to: "/",
				replace: true
			});
		}
	},
	head: () => ({ meta: [{ title: pageTitle("Sign in") }] })
});
var $$splitComponentImporter$169 = () => import("./recovery-B4K-Dzlx.js");
var searchSchema$3 = z.object({ email: z.string().optional() });
const Route$59 = createFileRoute("/_auth/recovery")({
	component: lazyRouteComponent($$splitComponentImporter$169, "component"),
	validateSearch: searchSchema$3,
	head: () => ({ meta: [{ title: pageTitle("Password recovery") }] })
});
var $$splitComponentImporter$168 = () => import("./join-aFtJsQ4l.js");
var searchSchema$2 = z.object({
	teamId: z.string().optional(),
	membershipId: z.string().optional(),
	userId: z.string().optional(),
	secret: z.string().optional(),
	teamName: z.string().optional()
});
const Route$61 = createFileRoute("/_auth/join")({
	component: lazyRouteComponent($$splitComponentImporter$168, "component"),
	validateSearch: searchSchema$2,
	head: () => ({ meta: [{ title: pageTitle("Accept invite") }] }),
	loader: async () => {
		return {};
	}
});
const Route$62 = createFileRoute("/_api/hello")({ server: { handlers: { GET: async ({ request }) => {
	return new Response("Hello, World! from " + request.url);
} } } });
var $$splitComponentImporter$167 = () => import("./diagrams-CBWvxnAU.js");
const Route$63 = createFileRoute("/generator/diagrams/")({
	head: () => ({ meta: [
		{ title: pageTitle("Diagrams", "Generator") },
		{
			name: "description",
			content: "Diagram generator for Appwrite marketing and documentation assets."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$167, "component")
});
var $$splitComponentImporter$166 = () => import("./partners.index-ClyTD4Fy.js");
const Route$64 = createFileRoute("/docs/partners/")({
	ssr: true,
	beforeLoad: () => {
		if (shouldBlockPartnersDocs()) throw redirect({
			to: "/docs",
			replace: true
		});
	},
	head: () => ({ meta: getDocsMetaTags({
		title: "Partners",
		description: "Integrate Appwrite into your platform. Provision organizations, projects, and domains with OAuth connect, organization API keys, and Console SDK APIs.",
		slug: "partners"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$166, "component")
});
const Route$65 = createFileRoute("/_public/agent/")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
var $$splitComponentImporter$165 = () => import("./account.index-DMWUWDiI.js");
const Route$66 = createFileRoute("/_public/account/")({
	head: () => ({ meta: [{ title: pageTitle("General", "Account") }] }),
	component: lazyRouteComponent($$splitComponentImporter$165, "component")
});
var $$splitComponentImporter$164 = () => import("./organizations._orgId-B7v9B-FN.js");
var searchSchema$1 = z.object({ createOrg: z.boolean().optional() }).passthrough();
const Route$73 = createFileRoute("/_public/organizations/$orgId")({
	validateSearch: searchSchema$1,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (orgId) try {
			await prefetchOrganizationOverviewData(queryClient, orgId);
		} catch (error) {
			console.warn("Failed to fetch organization data in loader:", error);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$164, "component")
});
var $$splitComponentImporter$163 = () => import("./debug.verify-email-preview-DbLNFjoB.js");
const Route$74 = createFileRoute("/_public/debug/verify-email-preview")({
	head: () => ({ meta: [{ title: pageTitle("Verify email preview") }] }),
	component: lazyRouteComponent($$splitComponentImporter$163, "component")
});
var $$splitComponentImporter$162 = () => import("./debug.error-preview-B43mza8A.js");
const Route$77 = createFileRoute("/_public/debug/error-preview")({
	head: () => ({ meta: [{ title: pageTitle("Error preview") }] }),
	component: lazyRouteComponent($$splitComponentImporter$162, "component")
});
var $$splitComponentImporter$161 = () => import("./debug.code-editor-preview-Cbe2QCWE.js");
const Route$78 = createFileRoute("/_public/debug/code-editor-preview")({
	head: () => ({ meta: [{ title: pageTitle("Functions editor preview") }] }),
	component: lazyRouteComponent($$splitComponentImporter$161, "component")
});
var $$splitComponentImporter$160 = () => import("./agent.settings-BMHEuiun.js");
const Route$79 = createFileRoute("/_public/agent/settings")({
	beforeLoad: async ({ context, location }) => {
		await redirectLegacyAgentLocation({
			queryClient: context.queryClient,
			pathname: location.pathname
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$160, "component")
});
var $$splitComponentImporter$159 = () => import("./agent.automations-C_yDKoRf.js");
const Route$80 = createFileRoute("/_public/agent/automations")({
	beforeLoad: async ({ context, location }) => {
		await redirectLegacyAgentLocation({
			queryClient: context.queryClient,
			pathname: location.pathname
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$159, "component")
});
const Route$81 = createFileRoute("/_public/agent/$agentId")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$84 = createFileRoute("/_public/account/payments")({ beforeLoad: () => {
	throw redirect({
		to: "/account/payment-methods",
		replace: true
	});
} });
var $$splitComponentImporter$158 = () => import("./auth.magic-url-5u6vd8D6.js");
const Route$96 = createFileRoute("/_auth/auth/magic-url")({
	component: lazyRouteComponent($$splitComponentImporter$158, "component"),
	head: () => ({ meta: [{ title: pageTitle("Magic URL login") }] })
});
const Route$97 = createFileRoute("/_api/r/v.js")({ server: { handlers: { GET: async () => {
	const scriptSrc = getRuntimeConfig().plausibleScriptSrc;
	return proxyPlausibleScript(scriptSrc);
} } } });
const Route$98 = createFileRoute("/_api/r/e")({ server: { handlers: { POST: async ({ request }) => {
	const scriptSrc = getRuntimeConfig().plausibleScriptSrc;
	if (!scriptSrc) return new Response("Not found", { status: 404 });
	return proxyPlausibleEvent(request, resolvePlausibleEventUrl(scriptSrc));
} } } });
const Route$99 = createFileRoute("/_api/og/init.png")({ server: { handlers: { GET: async ({ request }) => {
	const searchParams = new URLSearchParams();
	searchParams.set("title", INIT_PAGE_OG_IMAGE_PARAMS.title);
	searchParams.set("subtitle", INIT_PAGE_OG_IMAGE_PARAMS.subtitle);
	searchParams.set("eyebrow", INIT_PAGE_OG_IMAGE_PARAMS.eyebrow);
	searchParams.set("cta", INIT_PAGE_OG_IMAGE_PARAMS.cta);
	const data = parseOgImageRenderData(searchParams);
	try {
		const siteOrigin = new URL(request.url).origin;
		const { renderCoverImage } = await import("./render-cover-DDFRWRlC.js");
		const image = await runWithCoverRenderContext(siteOrigin, () => renderCoverImage(data));
		const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);
		const extension = getCoverImageExtension(data.format);
		const contentType = getCoverImageMimeType(data.format);
		return new Response(body, { headers: {
			"Content-Type": contentType,
			"Content-Disposition": `inline; filename="init-og.${extension}"`,
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
		} });
	} catch {
		return new Response("Failed to render Init Open Graph image", { status: 500 });
	}
} } } });
const Route$100 = createFileRoute("/_api/og/image.png")({ server: { handlers: { GET: async ({ request }) => {
	const searchParams = new URL(request.url).searchParams;
	const data = parseOgImageRenderData(searchParams);
	try {
		const siteOrigin = new URL(request.url).origin;
		const { renderCoverImage } = await import("./render-cover-DDFRWRlC.js");
		const image = await runWithCoverRenderContext(siteOrigin, () => renderCoverImage(data));
		const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);
		const extension = getCoverImageExtension(data.format);
		const contentType = getCoverImageMimeType(data.format);
		return new Response(body, { headers: {
			"Content-Type": contentType,
			"Content-Disposition": `inline; filename="og.${extension}"`,
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
		} });
	} catch {
		return new Response("Failed to render Open Graph image", { status: 500 });
	}
} } } });
function isRecord(value) {
	return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function normalizeDiagramDocumentInput(document$1) {
	const size = resolveDiagramCanvasSize(document$1.width, document$1.height);
	return {
		title: typeof document$1.title === "string" ? document$1.title.slice(0, 120) : "Untitled diagram",
		theme: resolveCoverEditorThemeId(document$1.theme),
		width: size.width,
		height: size.height,
		format: document$1.format === "jpeg" || document$1.format === "avif" ? document$1.format : "png",
		nodes: document$1.nodes.map((node) => normalizeDiagramNode(node)),
		edges: document$1.edges.map((edge) => normalizeDiagramEdge(edge))
	};
}
function parseDiagramDocumentFromJson(body) {
	if (!isRecord(body)) throw new Error("Invalid diagram payload");
	const defaults = createDefaultDiagramDocument();
	const nodes = Array.isArray(body.nodes) ? body.nodes : defaults.nodes;
	const edges = Array.isArray(body.edges) ? body.edges : defaults.edges;
	return normalizeDiagramDocumentInput({
		...defaults,
		title: typeof body.title === "string" ? body.title : defaults.title,
		theme: resolveCoverEditorThemeId(typeof body.theme === "string" ? body.theme : defaults.theme),
		width: typeof body.width === "number" ? body.width : defaults.width,
		height: typeof body.height === "number" ? body.height : defaults.height,
		format: body.format === "jpeg" || body.format === "png" || body.format === "avif" ? body.format : defaults.format,
		nodes,
		edges
	});
}
function escapeXml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function withAlpha(color, alpha) {
	if (color.startsWith("#") && color.length === 7) return `${color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
	return color;
}
function buildDiagramEdgeStrokesSvg(document$1, brand) {
	return buildDiagramEdgePaths(document$1.nodes, document$1.edges).map((path) => {
		const stroke = getDiagramEdgeStroke(path.strokeTone, brand, false);
		const strokeOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected: false,
			part: "stroke"
		});
		const dash = getDiagramEdgeDash(path.lineStyle);
		const dashAttr = dash ? ` stroke-dasharray="${dash}"` : "";
		return `
        <g opacity="${strokeOpacity}">
          <path d="${path.d}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"${dashAttr} />
        </g>
      `;
	}).join("");
}
function buildDiagramEdgeArrowheadsSvg(document$1, brand) {
	return buildDiagramEdgePaths(document$1.nodes, document$1.edges).map((path) => {
		const stroke = getDiagramEdgeStroke(path.strokeTone, brand, false);
		const strokeOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected: false,
			part: "stroke"
		});
		const arrows = [path.forwardArrow ? `<path d="${buildDiagramEdgeArrowheadPath(path.forwardArrow)}" fill="${stroke}" stroke="none" opacity="${strokeOpacity}" />` : "", path.backwardArrow ? `<path d="${buildDiagramEdgeArrowheadPath(path.backwardArrow)}" fill="${stroke}" stroke="none" opacity="${strokeOpacity}" />` : ""].join("");
		if (!arrows) return "";
		return `<g opacity="${strokeOpacity}">${arrows}</g>`;
	}).join("");
}
function buildDiagramEdgeLabelsSvg(document$1, brand) {
	const paths = buildDiagramEdgePaths(document$1.nodes, document$1.edges);
	const labelSurface = getDiagramEdgeLabelSurfaceColors(brand, document$1.theme);
	return paths.filter((path) => path.label).map((path) => {
		const labelOpacity = getDiagramEdgeOpacity(path.lineStyle, path.strokeTone, {
			selected: false,
			part: "label"
		});
		const metrics = getDiagramEdgeLabelMetrics(path.label ?? "");
		return `
        <g opacity="${labelOpacity}">
          <rect x="${path.labelX - metrics.offsetX}" y="${path.labelY - metrics.offsetY}" width="${metrics.width}" height="${metrics.height}" rx="${metrics.rx}" fill="${labelSurface.fill}" stroke="${labelSurface.stroke}" stroke-width="1" />
          <text x="${path.labelX}" y="${path.labelY + 5}" text-anchor="middle" fill="${brand.mutedForeground}" font-size="12" font-family="Inter, system-ui, sans-serif" font-weight="500">${escapeXml(path.label ?? "")}</text>
        </g>
      `;
	}).join("");
}
function recolorCoverBrandIconSvg(svg, color) {
	const brandColor = COVER_BRAND_ICON_COLOR;
	return svg.replaceAll(brandColor, color).replaceAll(brandColor.toLowerCase(), color).replaceAll(brandColor.toUpperCase(), color);
}
async function buildNodeIconSvg(node, themeId, x, y, size) {
	if (!node.iconSrc?.trim()) return "";
	const iconSrc = node.iconSrc.trim();
	const iconColor = getCoverLucideIconStrokeColor(themeId);
	if (isCoverLucideIconValue(iconSrc)) {
		const iconName = parseCoverLucideIconName(iconSrc);
		if (!iconName) return "";
		const iconBuffer = await loadCoverLucideIconSvgBuffer(iconName, iconColor);
		if (!iconBuffer) return "";
		return `<image href="${`data:image/svg+xml;base64,${iconBuffer.toString("base64")}`}" x="${x}" y="${y}" width="${size}" height="${size}" />`;
	}
	if (iconSrc.startsWith("/icons/") && iconSrc.toLowerCase().endsWith(".svg")) {
		const buffer = await readCoverPublicAssetBuffer(iconSrc);
		if (!buffer) return "";
		const recolored = recolorCoverBrandIconSvg(buffer.toString("utf-8"), iconColor);
		return `<image href="${`data:image/svg+xml;base64,${Buffer.from(recolored, "utf-8").toString("base64")}`}" x="${x}" y="${y}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" />`;
	}
	const href = await resolveCoverImageHref(iconSrc);
	if (!href) return "";
	return `<image href="${escapeXml(href)}" x="${x}" y="${y}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" />`;
}
async function buildDiagramNodeSvg(node, brand, themeId) {
	const { x, y, width, height, label } = node;
	if (node.kind === "group") return `
      <g>
        <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="${withAlpha(brand.muted, .18)}" stroke="${withAlpha(brand.border, .9)}" stroke-width="1" stroke-dasharray="6 4" />
        <text x="${x + 16}" y="${y + 12}" dominant-baseline="hanging" fill="${brand.mutedForeground}" font-size="12" font-family="Inter, system-ui, sans-serif" font-weight="600" letter-spacing="0.08em">${escapeXml(label.toUpperCase())}</text>
      </g>
    `;
	if (node.kind === "label") return `
      <g>
        <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="${withAlpha(brand.background, .72)}" stroke="${withAlpha(brand.border, .65)}" stroke-width="1" />
        <text x="${x + width / 2}" y="${y + height / 2}" dominant-baseline="middle" text-anchor="middle" fill="${brand.foreground}" font-size="14" font-family="Inter, system-ui, sans-serif" font-weight="500">${escapeXml(label)}</text>
      </g>
    `;
	if (node.kind === "title") {
		const titleLineHeight = 35;
		const subtitleGap = 8;
		const blockTop = y + (height - (node.subtitle ? titleLineHeight + subtitleGap + 19 : titleLineHeight)) / 2;
		const titleBaseline$1 = blockTop + 24;
		const subtitleBaseline$1 = blockTop + titleLineHeight + subtitleGap + 12;
		return `
      <g>
        <text x="${x + width / 2}" y="${titleBaseline$1}" text-anchor="middle" class="cover-title" fill="${brand.foreground}" font-size="28">${escapeXml(label)}</text>
        ${node.subtitle ? `<text x="${x + width / 2}" y="${subtitleBaseline$1}" text-anchor="middle" class="cover-body" fill="${brand.mutedForeground}" font-size="14">${escapeXml(node.subtitle)}</text>` : ""}
      </g>
    `;
	}
	if (node.kind === "table") {
		const defaults = createDefaultDiagramTable();
		const headers = node.tableHeaders ?? defaults.tableHeaders;
		const rows = node.tableRows ?? defaults.tableRows;
		const defaultLabel = DIAGRAM_NODE_KIND_LABELS.table;
		const composition = buildCoverTableFrameComposition({
			themeId,
			frameWidth: width,
			title: Boolean(label.trim() && label !== defaultLabel) ? label : void 0,
			subtitle: node.subtitle,
			headers,
			rows,
			clipIdPrefix: `diagram-table-${node.id}`
		});
		return `
      <g transform="translate(${x}, ${y})">
        <defs>${composition.defs}</defs>
        ${composition.svg}
      </g>
    `;
	}
	if (node.kind === "screenshot") {
		const defaultLabel = DIAGRAM_NODE_KIND_LABELS.screenshot;
		const showCaption = Boolean(label.trim() && label !== defaultLabel);
		const captionBandHeight = showCaption ? 28 : 0;
		const frameHeight = Math.max(1, height - captionBandHeight);
		const imageHref = node.imageSrc?.trim() ? await resolveCoverImageHref(node.imageSrc.trim()) : null;
		const clipId = `diagram-screenshot-${node.id}`;
		return `
      <g>
        <defs>
          <clipPath id="${clipId}">
            <rect x="${x}" y="${y}" width="${width}" height="${frameHeight}" rx="12" />
          </clipPath>
        </defs>
        <rect x="${x}" y="${y}" width="${width}" height="${frameHeight}" rx="12" fill="${withAlpha(brand.muted, .35)}" stroke="${brand.border}" stroke-width="1" />
        ${imageHref ? `<image href="${escapeXml(imageHref)}" x="${x}" y="${y}" width="${width}" height="${frameHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" />` : ""}
        ${showCaption ? `
              <rect x="${x}" y="${y + frameHeight}" width="${width}" height="${captionBandHeight}" fill="${withAlpha(brand.background, .88)}" stroke="${brand.border}" stroke-width="1" />
              <text x="${x + width / 2}" y="${y + frameHeight + captionBandHeight / 2}" dominant-baseline="middle" text-anchor="middle" fill="${brand.foreground}" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="500">${escapeXml(label)}</text>
            ` : ""}
      </g>
    `;
	}
	const serviceIconBoxSize = 40;
	const serviceIconRenderSize = 24;
	const servicePaddingX = 16;
	const serviceGap = 12;
	const surface = getDiagramNodeSurfaceColors(brand, themeId);
	if (node.kind === "icon") {
		const defaultLabel = DIAGRAM_NODE_KIND_LABELS.icon;
		const showCaption = Boolean(label.trim() && label !== defaultLabel);
		const chromePadding = 16;
		const captionBand = showCaption ? 20 : 0;
		const availableWidth = width - chromePadding * 2;
		const availableHeight = height - chromePadding * 2 - captionBand;
		const iconSize = Math.max(24, Math.min(availableWidth, availableHeight));
		const iconMarkup$1 = await buildNodeIconSvg(node, themeId, x + (width - iconSize) / 2, y + chromePadding + (availableHeight - iconSize) / 2, iconSize);
		return `
      <g>
        <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="12" fill="${surface.fill}" stroke="${surface.stroke}" stroke-width="${surface.strokeWidth}" />
        ${iconMarkup$1}
        ${showCaption ? `<text x="${x + width / 2}" y="${y + height - 10}" text-anchor="middle" fill="${brand.mutedForeground}" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="500">${escapeXml(label)}</text>` : ""}
      </g>
    `;
	}
	const iconBoxX = x + servicePaddingX;
	const iconBoxY = y + (height - serviceIconBoxSize) / 2;
	const iconMarkup = await buildNodeIconSvg(node, themeId, iconBoxX + (serviceIconBoxSize - serviceIconRenderSize) / 2, iconBoxY + (serviceIconBoxSize - serviceIconRenderSize) / 2, serviceIconRenderSize);
	const hasIcon = Boolean(iconMarkup);
	const textX = hasIcon ? x + servicePaddingX + serviceIconBoxSize + serviceGap : x + servicePaddingX;
	const titleBaseline = y + (node.subtitle ? height / 2 - 6 : height / 2 + 5);
	const subtitleBaseline = y + height / 2 + 14;
	return `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="12" fill="${surface.fill}" stroke="${surface.stroke}" stroke-width="${surface.strokeWidth}" />
      ${hasIcon ? `<rect x="${iconBoxX}" y="${iconBoxY}" width="${serviceIconBoxSize}" height="${serviceIconBoxSize}" rx="8" fill="${withAlpha(brand.muted, .85)}" />` : ""}
      ${iconMarkup}
      <text x="${textX}" y="${titleBaseline}" fill="${brand.foreground}" font-size="14" font-family="Inter, system-ui, sans-serif" font-weight="600">${escapeXml(label)}</text>
      ${node.subtitle ? `<text x="${textX}" y="${subtitleBaseline}" fill="${brand.mutedForeground}" font-size="12" font-family="Inter, system-ui, sans-serif">${escapeXml(node.subtitle)}</text>` : ""}
    </g>
  `;
}
async function renderDiagramTemplateSvg(document$1) {
	const brand = getCoverBrandThemeForSvgExport(document$1.theme);
	const { defs, layers } = buildCoverBrandBackgroundParts(document$1.theme, document$1.width, document$1.height);
	const fontFaceCss = await getCoverFontFaceCss();
	const edgeStrokes = buildDiagramEdgeStrokesSvg(document$1, brand);
	const nodeFragments = await Promise.all(document$1.nodes.map((node) => buildDiagramNodeSvg(node, brand, document$1.theme)));
	const edgeArrowheads = buildDiagramEdgeArrowheadsSvg(document$1, brand);
	const edgeLabels = buildDiagramEdgeLabelsSvg(document$1, brand);
	return `
    <svg width="${document$1.width}" height="${document$1.height}" viewBox="0 0 ${document$1.width} ${document$1.height}" xmlns="http://www.w3.org/2000/svg">
      ${buildCoverExportFontStyleBlock(fontFaceCss)}
      <defs>${defs}</defs>
      ${layers}
      ${edgeStrokes}
      ${nodeFragments.join("")}
      ${edgeArrowheads}
      ${edgeLabels}
    </svg>
  `;
}
async function renderDiagramImage(document$1) {
	const svg = await renderDiagramTemplateSvg(document$1);
	const buffer = await applyCoverImageFormat(sharp(Buffer.from(svg)), document$1.format);
	return new Uint8Array(buffer);
}
function resolveDiagramDisposition(request, fallback) {
	const value = new URL(request.url).searchParams.get("disposition")?.trim().toLowerCase();
	if (value === "attachment" || value === "inline") return value;
	return fallback;
}
function buildDiagramFilename(document$1) {
	const slug = document$1.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "diagram";
	const extension = getCoverImageExtension(document$1.format);
	return `${slug}-${document$1.width}x${document$1.height}.${extension}`;
}
const Route$101 = createFileRoute("/_api/generator/diagram")({ server: { handlers: { POST: async ({ request }) => {
	if (!getActiveProfileFeatures().marketing) return new Response("Not found", { status: 404 });
	try {
		const document$1 = parseDiagramDocumentFromJson(await request.json());
		const image = await renderDiagramImage(document$1);
		const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);
		const contentType = getCoverImageMimeType(document$1.format);
		const disposition = resolveDiagramDisposition(request, "inline");
		return new Response(body, { headers: {
			"Content-Type": contentType,
			"Content-Disposition": `${disposition}; filename="${buildDiagramFilename(document$1)}"`,
			"Cache-Control": "public, max-age=300"
		} });
	} catch {
		return new Response("Failed to render diagram", { status: 500 });
	}
} } } });
function parseCoverRenderDataFromJson(body) {
	if (!body || typeof body !== "object") throw new Error("Invalid cover payload");
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(body)) {
		if (value == null || value === "") continue;
		params.set(key, String(value));
	}
	return parseCoverRenderData(params);
}
function resolveCoverDisposition(request, fallback) {
	const value = new URL(request.url).searchParams.get("disposition")?.trim().toLowerCase();
	if (value === "attachment" || value === "inline") return value;
	return fallback;
}
async function renderCoverResponse(request, data, disposition) {
	const siteOrigin = new URL(request.url).origin;
	const { renderCoverImage } = await import("./render-cover-DDFRWRlC.js");
	const image = await runWithCoverRenderContext(siteOrigin, () => renderCoverImage(data));
	const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);
	const extension = getCoverImageExtension(data.format);
	const contentType = getCoverImageMimeType(data.format);
	return new Response(body, { headers: {
		"Content-Type": contentType,
		"Content-Disposition": `${disposition}; filename="cover-${data.template}.${extension}"`,
		"Cache-Control": "public, max-age=300"
	} });
}
const Route$102 = createFileRoute("/_api/generator/cover")({ server: { handlers: {
	GET: async ({ request }) => {
		if (!getActiveProfileFeatures().marketing) return new Response("Not found", { status: 404 });
		const searchParams = new URL(request.url).searchParams;
		const data = parseCoverRenderData(searchParams);
		try {
			return await renderCoverResponse(request, data, resolveCoverDisposition(request, "inline"));
		} catch {
			return new Response("Failed to render cover", { status: 500 });
		}
	},
	POST: async ({ request }) => {
		if (!getActiveProfileFeatures().marketing) return new Response("Not found", { status: 404 });
		try {
			return await renderCoverResponse(request, parseCoverRenderDataFromJson(await request.json()), resolveCoverDisposition(request, "inline"));
		} catch {
			return new Response("Failed to render cover", { status: 500 });
		}
	}
} } });
const Route$103 = createFileRoute("/_api/debug/ip")({ server: { handlers: { GET: async ({ request }) => {
	return Response.json(getClientIpSnapshotFromRequest(request), { headers: { "Cache-Control": "no-store" } });
} } } });
var FEED_ITEM_LIMIT$1 = 50;
const Route$104 = createFileRoute("/_api/changelog/rss.xml")({ server: { handlers: { GET: async () => {
	const entries = getAllChangelogEntries().slice(0, FEED_ITEM_LIMIT$1);
	const feed = buildRssFeed({
		title: "Appwrite Changelog",
		link: `${MARKETING_SITE_ORIGIN}/changelog`,
		description: CHANGELOG_DEFAULT_DESCRIPTION,
		feedUrl: `${MARKETING_SITE_ORIGIN}${CHANGELOG_RSS_PATH}`,
		items: entries.map((entry) => ({
			title: entry.title,
			link: `${MARKETING_SITE_ORIGIN}${entry.href}`,
			description: entry.description,
			date: entry.date,
			imageUrl: entry.cover
		}))
	});
	return new Response(feed, { headers: {
		"Content-Type": "application/rss+xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"
	} });
} } } });
var FEED_ITEM_LIMIT = 50;
const Route$105 = createFileRoute("/_api/blog/rss.xml")({ server: { handlers: { GET: async () => {
	const posts = getPublicBlogPosts().slice(0, FEED_ITEM_LIMIT);
	const feed = buildRssFeed({
		title: "Appwrite Blog",
		link: `${MARKETING_SITE_ORIGIN}/blog`,
		description: BLOG_DEFAULT_DESCRIPTION,
		feedUrl: `${MARKETING_SITE_ORIGIN}${BLOG_RSS_PATH}`,
		items: posts.map((post) => ({
			title: post.title,
			link: `${MARKETING_SITE_ORIGIN}${post.href}`,
			description: post.description,
			date: post.date,
			authors: resolveBlogAuthors(post.author).map((author) => author.name),
			category: getPostCategoryLabel(post),
			imageUrl: post.cover ? `${MARKETING_SITE_ORIGIN}${post.cover}` : void 0
		}))
	});
	return new Response(feed, { headers: {
		"Content-Type": "application/rss+xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"
	} });
} } } });
var $$splitComponentImporter$157 = () => import("./organizations._orgId.index-XTdjRwwF.js");
function parseProjectsPage(url) {
	const p = url.searchParams.get("projectsPage");
	if (p == null || p === "") return 1;
	const n = Number(p);
	return Number.isInteger(n) && n >= 1 ? n : 1;
}
function parseProjectsLimit(url) {
	const p = url.searchParams.get("projectsLimit");
	if (p == null || p === "") return 12;
	const n = Number(p);
	return Number.isInteger(n) && n >= 1 ? n : 12;
}
const Route$107 = createFileRoute("/_public/organizations/$orgId/")({
	head: () => ({ meta: [{ title: pageTitle("Organization") }] }),
	loader: async ({ params, context, location }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		const url = urlFromRouterLocation(location);
		const projectsPage = parseProjectsPage(url);
		const projectsLimit = parseProjectsLimit(url);
		await queryClient.ensureQueryData(organizationsQueryOptions());
		if (orgId) {
			const teamPrefs = (await queryClient.ensureQueryData(consoleTeamQueryOptions(orgId)))?.prefs;
			const pinnedIds = parsePinnedProjectIds(teamPrefs);
			const projectScope = await queryClient.ensureQueryData(organizationProjectScopeQueryOptions(orgId)).catch(() => null);
			await Promise.all([
				queryClient.ensureQueryData(activeProjectsQueryOptions(orgId, projectsPage - 1, projectsLimit, "", pinnedIds, projectScope ?? null)),
				queryClient.ensureQueryData(organizationMembershipsQueryOptions(orgId, 0, 12, "")),
				...pinnedIds.length > 0 ? [queryClient.ensureQueryData(pinnedProjectsQueryOptions(orgId, pinnedIds))] : []
			]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$157, "component")
});
const Route$108 = createFileRoute("/_public/agent/settings/")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$109 = createFileRoute("/_public/agent/automations/")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
var $$splitComponentImporter$156 = () => import("./projects._projectId.stores-Cjd8CLqT.js");
const Route$111 = createFileRoute("/_public/projects/$projectId/stores")({ component: lazyRouteComponent($$splitComponentImporter$156, "component") });
var $$splitComponentImporter$155 = () => import("./projects._projectId.storage-DkkNevA9.js");
const Route$112 = createFileRoute("/_public/projects/$projectId/storage")({
	head: () => ({ meta: [{ title: pageTitle("Storage") }] }),
	loader: async ({ params, context, location, cause, preload }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const projectData = await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
		const bucketsOpts = storageSidebarBucketsQueryOptions(projectId);
		await queryClient.ensureQueryData(bucketsOpts);
		await (projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve());
		const pathParts = location.pathname.split("/").filter(Boolean);
		if (pathParts.length === 3 && pathParts[0] === "projects" && pathParts[1] === projectId && pathParts[2] === "storage" && !searchParamsFromRouterLocation(location).get("create") && isRealStorageNavigation(cause, preload)) redirectStorageFirstBucketOrPlaceholder(projectId, await queryClient.fetchQuery(bucketsOpts));
	},
	component: lazyRouteComponent($$splitComponentImporter$155, "component")
});
var $$splitComponentImporter$154 = () => import("./projects._projectId.settings-GbCyyYdc.js");
const Route$113 = createFileRoute("/_public/projects/$projectId/settings")({
	head: () => ({ meta: [{ title: pageTitle("Settings") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessProjectSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId",
			params: { projectId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$154, "component")
});
var $$splitComponentImporter$153 = () => import("./projects._projectId.realtime-Be3WdFse.js");
const Route$114 = createFileRoute("/_public/projects/$projectId/realtime")({
	head: () => ({ meta: [{ title: pageTitle("Realtime") }] }),
	component: lazyRouteComponent($$splitComponentImporter$153, "component")
});
var $$splitComponentImporter$152 = () => import("./projects._projectId.messaging-Bryo_z8a.js");
const Route$116 = createFileRoute("/_public/projects/$projectId/messaging")({
	head: () => ({ meta: [{ title: pageTitle("Messaging") }] }),
	component: lazyRouteComponent($$splitComponentImporter$152, "component")
});
var $$splitComponentImporter$151 = () => import("./projects._projectId.imagine-C4Pdvpym.js");
const Route$117 = createFileRoute("/_public/projects/$projectId/imagine")({
	head: () => ({ meta: [{ title: pageTitle("Imagine") }] }),
	component: lazyRouteComponent($$splitComponentImporter$151, "component")
});
var $$splitComponentImporter$150 = () => import("./projects._projectId.functions-CDqb5S-H.js");
const Route$118 = createFileRoute("/_public/projects/$projectId/functions")({
	head: () => ({ meta: [{ title: pageTitle("Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter$150, "component")
});
var $$splitComponentImporter$149 = () => import("./projects._projectId.firewall-BAhZJVAp.js");
const Route$119 = createFileRoute("/_public/projects/$projectId/firewall")({
	head: () => ({ meta: [{ title: pageTitle("Firewall") }] }),
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().firewall) throw redirect({
			to: "/projects/$projectId",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const project = await queryClient.ensureQueryData({
			queryKey: ["project", projectId],
			queryFn: () => fetchProject(projectId),
			staleTime: 300 * 1e3
		});
		const plan = project?.teamId ? await queryClient.ensureQueryData(organizationPlanQueryOptions(project.teamId)).catch(() => void 0) : void 0;
		const dateRange = getStableUsageChartDateRange();
		const chartInterval = resolveUsageChartIntervalForRange("1h", dateRange, plan);
		const logRetentionHours = getUsageLogRetentionHoursFromPlan(plan);
		await Promise.all([queryClient.ensureQueryData(firewallRulesQueryOptions(projectId, 0, 10, void 0, "api")), queryClient.ensureQueryData(firewallRulesQueryOptions(projectId, 0, 10, void 0))]);
		queryClient.prefetchQuery(firewallTrafficOverviewQueryOptions(projectId, dateRange, chartInterval, logRetentionHours)).catch(() => void 0);
	},
	component: lazyRouteComponent($$splitComponentImporter$149, "component")
});
var $$splitComponentImporter$148 = () => import("./projects._projectId.explorer-DibimvgM.js");
const Route$120 = createFileRoute("/_public/projects/$projectId/explorer")({
	head: () => ({ meta: [{ title: pageTitle("Explorer") }] }),
	validateSearch: (search) => ({
		service: typeof search.service === "string" && search.service.trim() ? search.service.trim() : void 0,
		operation: typeof search.operation === "string" && search.operation.trim() ? search.operation.trim() : void 0
	}),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		await Promise.all([
			queryClient.ensureQueryData(projectQueryOptions(projectId)),
			queryClient.ensureQueryData(apiExplorerSpecQueryOptions("server")),
			queryClient.ensureQueryData(apiExplorerSpecQueryOptions("client"))
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$148, "component")
});
var $$splitComponentImporter$147 = () => import("./projects._projectId.databases-nh0Pqx3n.js");
const Route$121 = createFileRoute("/_public/projects/$projectId/databases")({
	head: () => ({ meta: [{ title: pageTitle("Databases") }] }),
	component: lazyRouteComponent($$splitComponentImporter$147, "component")
});
var $$splitComponentImporter$146 = () => import("./projects._projectId.analytics-DLyT--pa.js");
const Route$125 = createFileRoute("/_public/projects/$projectId/analytics")({
	head: () => ({ meta: [{ title: pageTitle("Analytics") }] }),
	component: lazyRouteComponent($$splitComponentImporter$146, "component")
});
var $$splitComponentImporter$145 = () => import("./projects._projectId.advisor-FqF1-X_n.js");
const Route$126 = createFileRoute("/_public/projects/$projectId/advisor")({
	head: () => ({ meta: [{ title: pageTitle("Advisor") }] }),
	component: lazyRouteComponent($$splitComponentImporter$145, "component")
});
var $$splitComponentImporter$144 = () => import("./organizations._orgId.support-Fh7wuyvx.js");
const Route$128 = createFileRoute("/_public/organizations/$orgId/support")({
	head: () => ({ meta: [{ title: pageTitle("Support", "Organization") }] }),
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().billing) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		if (!(await queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)))?.premiumSupport) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId }
		});
		await queryClient.ensureQueryData(organizationProjectsQueryOptions(orgId)).catch(() => {});
	},
	component: lazyRouteComponent($$splitComponentImporter$144, "component")
});
var $$splitComponentImporter$143 = () => import("./organizations._orgId.settings-LLfV62vo.js");
const Route$129 = createFileRoute("/_public/organizations/$orgId/settings")({
	head: () => ({ meta: [{ title: pageTitle("Settings", "Organization") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		await queryClient.prefetchQuery({
			queryKey: ["organizations", "console"],
			queryFn: fetchOrganizations,
			staleTime: 300 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$143, "component")
});
const Route$130 = createFileRoute("/_public/organizations/$orgId/members")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/organizations/$orgId/settings/members",
		params: { orgId: params.orgId },
		replace: true
	});
} });
var $$splitComponentImporter$142 = () => import("./organizations._orgId.marketplace-BN--s0hQ.js");
const Route$131 = createFileRoute("/_public/organizations/$orgId/marketplace")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().marketplace) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$142, "component")
});
var $$splitComponentImporter$141 = () => import("./organizations._orgId.domains-CeFQF4QN.js");
const Route$132 = createFileRoute("/_public/organizations/$orgId/domains")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().domains) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		if (!await canAccessOrganizationDomains(queryClient, orgId)) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$141, "component")
});
const Route$133 = createFileRoute("/_public/organizations/$orgId/billing")({ beforeLoad: ({ params }) => {
	if (getActiveProfileFeatures().billing) throw redirect({
		to: "/organizations/$orgId/settings/billing",
		params: { orgId: params.orgId }
	});
	throw redirect({
		to: "/organizations/$orgId",
		params: { orgId: params.orgId },
		replace: true
	});
} });
var $$splitComponentImporter$140 = () => import("./organizations._orgId.apps-Bjblc-5J.js");
const Route$134 = createFileRoute("/_public/organizations/$orgId/apps")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().marketplace) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$140, "component")
});
var $$splitComponentImporter$139 = () => import("./organizations._orgId.agent-DhzY1B4w.js");
var AGENT_PAGE_DESCRIPTION = "Chat with the Appwrite Agent to inspect your project, explain issues, and take approved actions.";
function getAgentPageMetaTags(orgId, siteOrigin) {
	const origin = siteOrigin ?? getRequestSiteOrigin();
	return getPageMetaTags({
		title: pageTitle("Agent"),
		description: AGENT_PAGE_DESCRIPTION,
		canonical: resolveSiteAssetUrl(`/organizations/${orgId}/agent`, origin),
		siteOrigin: origin
	});
}
const Route$135 = createFileRoute("/_public/organizations/$orgId/agent")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$139, "component"),
	head: ({ params }) => ({ meta: getAgentPageMetaTags(params.orgId) }),
	loader: async ({ context, params }) => {
		if (typeof window === "undefined") return;
		if (!getActiveProfileFeatures().agent) throw redirect({
			to: "/organizations/$orgId",
			params: { orgId: params.orgId },
			replace: true
		});
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (!account) return;
		await context.queryClient.ensureQueryData(assistantConversationsQueryOptions());
		context.queryClient.ensureInfiniteQueryData(assistantModelsInfiniteQueryOptions(25)).catch(() => {});
		context.queryClient.ensureQueryData(assistantAutomationsQueryOptions("")).catch(() => {});
		const activeConversationId = parseAIChatActiveConversationId(account.prefs);
		if (!activeConversationId) return;
		context.queryClient.ensureQueryData(assistantMessagesQueryOptions(activeConversationId, 25)).catch(() => {});
	}
});
const Route$136 = createFileRoute("/_public/agent/settings/usage")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$137 = createFileRoute("/_public/agent/settings/models")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$138 = createFileRoute("/_public/agent/settings/memory")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$139 = createFileRoute("/_public/agent/settings/mcp")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$140 = createFileRoute("/_public/agent/automations/create")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
const Route$141 = createFileRoute("/_public/agent/automations/$automationId")({ beforeLoad: async ({ context, location }) => {
	await redirectLegacyAgentLocation({
		queryClient: context.queryClient,
		pathname: location.pathname
	});
} });
var $$splitComponentImporter$138 = () => import("./auth.oauth2.success-Cxq225pN.js");
const Route$147 = createFileRoute("/_auth/auth/oauth2/success")({
	component: lazyRouteComponent($$splitComponentImporter$138, "component"),
	head: () => ({ meta: [{ title: pageTitle("Login successful") }] })
});
var $$splitComponentImporter$137 = () => import("./auth.oauth2.failure-C6XGXv6q.js");
const Route$148 = createFileRoute("/_auth/auth/oauth2/failure")({
	component: lazyRouteComponent($$splitComponentImporter$137, "component"),
	head: () => ({ meta: [{ title: pageTitle("Login failed") }] })
});
const Route$149 = createFileRoute("/_auth/assistant/mcp/callback")({
	validateSearch: (search) => search,
	beforeLoad: ({ search }) => {
		throw redirect({
			to: "/agent/mcp/callback",
			search,
			replace: true
		});
	}
});
const Route$151 = createFileRoute("/_api/init/ticket/$eventSlug")({ server: { handlers: { GET: async ({ params, request }) => {
	if (!getActiveProfileFeatures().init) return new Response("Not found", { status: 404 });
	const event = getLaunchEventBySlug(params.eventSlug);
	if (!event) return new Response("Not found", { status: 404 });
	const searchParams = new URL(request.url).searchParams;
	const siteOrigin = new URL(request.url).origin;
	const { buildInitTicketImageRenderData, renderInitTicketImagePng } = await import("./ticket-image-NF8QXDN4.js");
	const { runWithCoverRenderContext: runWithCoverRenderContext$1 } = await import("./render-context-CLJ3qn4X.js");
	const ticket = buildInitTicketImageRenderData(event, searchParams);
	const image = await runWithCoverRenderContext$1(siteOrigin, () => renderInitTicketImagePng(ticket));
	const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);
	const filename = `${event.slug}-ticket.png`;
	return new Response(body, { headers: {
		"Content-Type": "image/png",
		"Content-Disposition": `inline; filename="${filename}"`,
		"Cache-Control": "public, max-age=300"
	} });
} } } });
const Route$152 = createFileRoute("/_api/init/calendar/$eventSlug")({ server: { handlers: { GET: async ({ params, request }) => {
	if (!getActiveProfileFeatures().init) return new Response("Not found", { status: 404 });
	const event = LAUNCH_EVENTS.find((entry) => entry.slug === params.eventSlug);
	if (!event || event.days.length === 0) return new Response("Not found", { status: 404 });
	const download = new URL(request.url).searchParams.get("download") === "1";
	const ics = buildInitEventCalendarIcs(event, { now: /* @__PURE__ */ new Date() });
	return new Response(ics, { headers: {
		"Content-Type": "text/calendar; charset=utf-8",
		"Content-Disposition": download ? `attachment; filename="${event.slug}.ics"` : `inline; filename="${event.slug}.ics"`,
		"Cache-Control": "public, max-age=300"
	} });
} } } });
const Route$153 = createFileRoute("/_api/init/$ticketId/og.png")({ server: { handlers: { GET: async ({ params }) => {
	if (!getActiveProfileFeatures().init) return new Response("Not found", { status: 404 });
	const ticketId = params.ticketId.trim();
	if (!ticketId) return new Response("Not found", { status: 404 });
	if (!await initTicketStorageFileExists(ticketId)) return new Response("Not found", { status: 404 });
	try {
		const viewUrl = getInitTicketStorageFileViewUrl(ticketId);
		const response = await fetch(viewUrl);
		if (!response.ok) return new Response("Not found", { status: 404 });
		const body = await response.arrayBuffer();
		return new Response(body, { headers: {
			"Content-Type": "image/png",
			"Content-Disposition": `inline; filename="init-ticket-${ticketId}.png"`,
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800"
		} });
	} catch {
		return new Response("Failed to load ticket image", { status: 502 });
	}
} } } });
function parseEncodeFormat(value) {
	const normalized = value?.trim().toLowerCase();
	if (!normalized || normalized === "png") return null;
	if (COVER_IMAGE_FORMATS.includes(normalized)) return normalized;
	return null;
}
const Route$154 = createFileRoute("/_api/generator/cover/encode")({ server: { handlers: { POST: async ({ request }) => {
	if (!getActiveProfileFeatures().marketing) return new Response("Not found", { status: 404 });
	const format = parseEncodeFormat(new URL(request.url).searchParams.get("format"));
	if (!format) return new Response("Unsupported format", { status: 400 });
	try {
		const output = await encodeCoverImageBuffer(Buffer.from(await request.arrayBuffer()), format);
		return new Response(output, { headers: {
			"Content-Type": getCoverImageMimeType(format),
			"Cache-Control": "no-store"
		} });
	} catch {
		return new Response("Failed to encode cover image", { status: 500 });
	}
} } } });
const Route$155 = createFileRoute("/_public/projects/$projectId/usage/")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/usage/$categoryId",
		params: {
			projectId: params.projectId,
			categoryId: getDefaultUsageCategoryId()
		},
		replace: true
	});
} });
var $$splitComponentImporter$136 = () => import("./projects._projectId.storage.index-LgZ9ebza.js");
var storageSearchSchema = z.object({ create: z.string().optional().catch(void 0) });
const Route$157 = createFileRoute("/_public/projects/$projectId/storage/")({
	head: () => ({ meta: [{ title: pageTitle("Storage") }] }),
	validateSearch: storageSearchSchema,
	loader: async ({ params, context, search: routeSearch, cause, preload }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if ((routeSearch ?? {}).create || !isRealStorageNavigation(cause, preload)) return;
		redirectStorageFirstBucketOrPlaceholder(projectId, await queryClient.fetchQuery(storageSidebarBucketsQueryOptions(projectId)));
	},
	component: lazyRouteComponent($$splitComponentImporter$136, "component")
});
var $$splitComponentImporter$135 = () => import("./projects._projectId.settings.index-BnlXXD9S.js");
const Route$159 = createFileRoute("/_public/projects/$projectId/settings/")({
	head: () => ({ meta: [{ title: pageTitle("Settings") }] }),
	component: lazyRouteComponent($$splitComponentImporter$135, "component")
});
var $$splitComponentImporter$134 = () => import("./projects._projectId.realtime.index-DOxc9cjo.js");
const Route$160 = createFileRoute("/_public/projects/$projectId/realtime/")({
	head: () => ({ meta: [{ title: pageTitle("Realtime") }] }),
	component: lazyRouteComponent($$splitComponentImporter$134, "component")
});
var $$splitComponentImporter$133 = () => import("./projects._projectId.messaging.index-Dfxa-2nF.js");
const Route$161 = createFileRoute("/_public/projects/$projectId/messaging/")({
	head: () => ({ meta: [{ title: pageTitle("Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			const projectData = await queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3
			});
			await Promise.all([
				queryClient.ensureQueryData(messagesQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(topicsQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(providersQueryOptions(projectId, 0, 10, "")),
				projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()
			]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$133, "component")
});
var $$splitComponentImporter$132 = () => import("./projects._projectId.databases.index-C6ryNipd.js");
var DEFAULT_PAGE$3 = 1;
var databasesSearchSchema = listSearchSchema.extend({ create: z.string().optional().catch(void 0) });
const Route$164 = createFileRoute("/_public/projects/$projectId/databases/")({
	head: () => ({ meta: [{ title: pageTitle("Databases") }] }),
	validateSearch: databasesSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const { search, page, limit, filterMap, filterQueries } = parseListSearch(routeSearch, {
			page: DEFAULT_PAGE$3,
			limit: 12
		});
		const tablesDbFilterMap = omitDatabaseTypeFilters(filterMap);
		const tablesDbFilterQueries = tablesDbFilterMap.size > 0 ? Array.from(tablesDbFilterMap.values()) : void 0;
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const organizationPlan = projectData?.teamId ? await queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)).catch(() => null) : null;
		const profileFeatures = getActiveProfileFeatures();
		const supportsDedicatedDatabaseCompute = projectSupportsDedicatedDatabaseCompute(projectData?.region) && planSupportsDedicatedDatabases(organizationPlan) === true;
		const shouldPrefetchNativeDatabases = supportsDedicatedDatabaseCompute && (profileFeatures.nativeDbsPostgres || profileFeatures.nativeDbsMySQL || profileFeatures.nativeDbsMongo);
		await Promise.all([
			profileFeatures.dedicatedDbsSupport ? queryClient.ensureQueryData(productDatabasesQueryOptions(projectId, DatabaseType.Tablesdb, 0, 12, search ?? void 0, tablesDbFilterQueries)) : Promise.resolve(),
			queryClient.ensureQueryData(databasesQueryOptions(projectId, 0, 25, void 0, void 0)),
			profileFeatures.dedicatedDbsDocumentsDB && supportsDedicatedDatabaseCompute ? queryClient.ensureQueryData(productDatabasesQueryOptions(projectId, DatabaseType.Documentsdb, 0, 12)) : Promise.resolve(),
			profileFeatures.dedicatedDbsVectorsDB && supportsDedicatedDatabaseCompute ? queryClient.ensureQueryData(productDatabasesQueryOptions(projectId, DatabaseType.Vectorsdb, 0, 12)) : Promise.resolve(),
			shouldPrefetchNativeDatabases ? queryClient.ensureQueryData(dedicatedDatabasesQueryOptions(projectId)) : Promise.resolve(),
			queryClient.ensureQueryData(consoleDatabasesQueryOptions(projectId, page - 1, limit, search ?? void 0, filterQueries))
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$132, "component")
});
var DEFAULT_PAGE$2 = 1;
var authSearchSchema = listSearchSchema.extend({
	create: z.string().optional().catch(void 0),
	teamsSearch: z.string().optional().catch(void 0),
	teamsQuery: z.string().optional().catch(void 0),
	teamsPage: z.coerce.number().int().min(1).optional().catch(void 0),
	teamsLimit: z.coerce.number().int().min(1).max(100).optional().catch(void 0)
});
const Route$165 = createFileRoute("/_public/projects/$projectId/auth/")({
	head: () => ({ meta: [{ title: pageTitle("Users", "Auth") }] }),
	validateSearch: authSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const { search, page, limit, filterQueries, sort } = parseListSearch(routeSearch, {
			page: DEFAULT_PAGE$2,
			limit: 12
		});
		const sortBy = sort?.sortBy ?? "$createdAt";
		const sortOrder = sort?.sortOrder ?? "desc";
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(usersQueryOptions(projectId, page - 1, limit, search ?? void 0, filterQueries, sortBy, sortOrder));
	}
});
var $$splitComponentImporter$131 = () => import("./organizations._orgId.marketplace.index-Di66CouX.js");
const Route$166 = createFileRoute("/_public/organizations/$orgId/marketplace/")({
	head: () => ({ meta: [{ title: pageTitle("Marketplace", "Organization") }] }),
	validateSearch: marketplaceSearchSchema,
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		await Promise.all([queryClient.ensureQueryData(organizationAppsQueryOptions(orgId)), queryClient.ensureQueryData(marketplaceCatalogQueryOptions(orgId))]);
	},
	component: lazyRouteComponent($$splitComponentImporter$131, "component")
});
var $$splitComponentImporter$130 = () => import("./organizations._orgId.domains.index-DAOpsVxW.js");
var DEFAULT_PAGE$1 = 1;
const Route$167 = createFileRoute("/_public/organizations/$orgId/domains/")({
	head: () => ({ meta: [{ title: pageTitle("Domains", "Organization") }] }),
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		const { search, page, limit, filterQueries, sort } = parseListSearch(routeSearch, {
			page: DEFAULT_PAGE$1,
			limit: 12
		});
		const sortBy = sort?.sortBy ?? "$createdAt";
		const sortOrder = sort?.sortOrder ?? "desc";
		await Promise.all([
			queryClient.ensureQueryData(organizationsQueryOptions()),
			queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)),
			queryClient.ensureQueryData(organizationDomainsQueryOptions(orgId, page - 1, limit, search ?? void 0, filterQueries, sortBy, sortOrder)),
			queryClient.ensureQueryData(organizationDomainsQueryOptions(orgId, 0, 1, void 0, void 0, DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER))
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$130, "component")
});
var $$splitComponentImporter$129 = () => import("./organizations._orgId.apps.index-Cm6wXdgn.js");
const Route$168 = createFileRoute("/_public/organizations/$orgId/apps/")({
	beforeLoad: ({ params }) => {
		throw redirect({
			to: "/organizations/$orgId/settings/oauth-apps",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$129, "component")
});
var $$splitComponentImporter$128 = () => import("./organizations._orgId.agent.index-BJ5hcxu8.js");
const Route$169 = createFileRoute("/_public/organizations/$orgId/agent/")({
	component: lazyRouteComponent($$splitComponentImporter$128, "component"),
	loader: async ({ context, params }) => {
		if (typeof window === "undefined") return;
		const account = await ensureConsoleAccountQueryData(context.queryClient);
		if (!account) return;
		const activeConversationId = parseAIChatActiveConversationId(account.prefs);
		if (!activeConversationId) return;
		throw redirect({
			to: "/organizations/$orgId/agent/$agentId",
			params: {
				orgId: params.orgId,
				agentId: activeConversationId
			},
			replace: true
		});
	}
});
var $$splitComponentImporter$127 = () => import("./projects._projectId.storage._bucketId-BDh4vDDA.js");
const Route$173 = createFileRoute("/_public/projects/$projectId/storage/$bucketId")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.bucket?.name ?? "Bucket", "Storage") }] }),
	loader: async ({ params, context, cause, preload }) => {
		if (typeof window === "undefined") return;
		const { projectId, bucketId } = params;
		const { queryClient } = context;
		if (!projectId || !bucketId) return;
		if (bucketId === "-") {
			if (cause === "preload" || preload) return { bucket: void 0 };
			const bucketsData = await queryClient.ensureQueryData(storageSidebarBucketsQueryOptions(projectId));
			if (bucketsData.buckets?.[0]?.$id) redirectStorageFirstBucketOrPlaceholder(projectId, bucketsData);
			return { bucket: void 0 };
		}
		await queryClient.fetchQuery({
			queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			],
			queryFn: () => fetchBucket(projectId, bucketId),
			staleTime: 30 * 1e3
		});
		return { bucket: queryClient.getQueryData([
			"bucket",
			"project",
			projectId,
			bucketId
		]) };
	},
	component: lazyRouteComponent($$splitComponentImporter$127, "component")
});
var $$splitComponentImporter$126 = () => import("./projects._projectId.sites.create-BBPW2adv.js");
const Route$174 = createFileRoute("/_public/projects/$projectId/sites/create")({
	head: () => ({ meta: [{ title: pageTitle("Create", "Sites") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			const projectData = await queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3
			});
			await Promise.all([
				queryClient.ensureQueryData(vcsInstallationsQueryOptions(projectId)),
				queryClient.ensureQueryData(siteFrameworksQueryOptions(projectId)),
				queryClient.ensureQueryData(siteTemplatesQueryOptions(projectId, void 0, void 0, 9, 0))
			]);
			return { projectData };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$126, "component")
});
var $$splitComponentImporter$125 = () => import("./projects._projectId.sites._siteId-B-yceafG.js");
const Route$175 = createFileRoute("/_public/projects/$projectId/sites/$siteId")({
	validateSearch: listSearchSchema,
	loaderDeps: () => ({}),
	staleTime: 3e4,
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.site?.name ?? loaderData?.site?.resourceId ?? "Site", "Sites") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		try {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			const site = await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
			await Promise.all([queryClient.ensureQueryData(siteDeploymentsQueryOptions(projectId, siteId, 0, 4, [Query.select([
				"status",
				"type",
				"resourceId",
				"providerRepositoryUrl",
				"providerRepositoryOwner",
				"providerRepositoryName",
				"providerBranchUrl",
				"providerBranch",
				"providerCommitMessage",
				"providerCommitHash",
				"providerCommitUrl",
				"providerCommitAuthor",
				"providerCommitAuthorUrl"
			])])), queryClient.ensureQueryData(siteDomainsQueryOptions(projectId, siteId, 0, 25, ""))]);
			return { site };
		} catch (error) {
			console.warn("Failed to fetch site data in loader:", error);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$125, "component")
});
var $$splitComponentImporter$124 = () => import("./projects._projectId.settings.webhooks-C5hrsD1d.js");
const Route$176 = createFileRoute("/_public/projects/$projectId/settings/webhooks")({
	head: () => ({ meta: [{ title: pageTitle("Webhooks", "Settings") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(webhooksQueryOptions(projectId));
	},
	component: lazyRouteComponent($$splitComponentImporter$124, "component")
});
var $$splitComponentImporter$123 = () => import("./projects._projectId.settings.variables-HRWemWds.js");
const Route$177 = createFileRoute("/_public/projects/$projectId/settings/variables")({
	head: () => ({ meta: [{ title: pageTitle("Variables", "Settings") }] }),
	component: lazyRouteComponent($$splitComponentImporter$123, "component")
});
var $$splitComponentImporter$122 = () => import("./projects._projectId.settings.smtp-_gtl6dwo.js");
const Route$178 = createFileRoute("/_public/projects/$projectId/settings/smtp")({
	head: () => ({ meta: [{ title: pageTitle("SMTP", "Settings") }] }),
	component: lazyRouteComponent($$splitComponentImporter$122, "component")
});
var $$splitComponentImporter$121 = () => import("./projects._projectId.settings.migrations-CUgQJVeY.js");
const Route$179 = createFileRoute("/_public/projects/$projectId/settings/migrations")({ component: lazyRouteComponent($$splitComponentImporter$121, "component") });
var $$splitComponentImporter$120 = () => import("./projects._projectId.settings.domains-BQTWpBUy.js");
const Route$180 = createFileRoute("/_public/projects/$projectId/settings/domains")({
	head: () => ({ meta: [{ title: pageTitle("Domains", "Settings") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([queryClient.ensureQueryData(projectDomainsQueryOptions(projectId, projectData?.region, "")), projectData?.teamId ? queryClient.ensureQueryData(organizationDomainsQueryOptions(projectData.teamId, 0, 500)).catch(() => {}) : Promise.resolve()]);
	},
	component: lazyRouteComponent($$splitComponentImporter$120, "component")
});
const Route$181 = createFileRoute("/_public/projects/$projectId/realtime/messages")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/realtime/",
		params: { projectId: params.projectId },
		replace: true
	});
} });
const Route$182 = createFileRoute("/_public/projects/$projectId/realtime/debugger")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/realtime/",
		params: { projectId: params.projectId },
		replace: true
	});
} });
const Route$183 = createFileRoute("/_public/projects/$projectId/realtime/channels")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/realtime/",
		params: { projectId: params.projectId },
		replace: true
	});
} });
var $$splitComponentImporter$119 = () => import("./projects._projectId.messaging._messageId-Doswtp8n.js");
const Route$184 = createFileRoute("/_public/projects/$projectId/messaging/$messageId")({
	head: () => ({ meta: [{ title: pageTitle("Message", "Messaging") }] }),
	component: lazyRouteComponent($$splitComponentImporter$119, "component")
});
var $$splitComponentImporter$118 = () => import("./projects._projectId.functions.create-1EyOvygY.js");
const Route$187 = createFileRoute("/_public/projects/$projectId/functions/create")({
	head: () => ({ meta: [{ title: pageTitle("Create", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			await queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3
			});
			await Promise.all([
				queryClient.ensureQueryData(vcsInstallationsQueryOptions(projectId, 0, 100)),
				queryClient.ensureQueryData(projectRuntimesQueryOptions(projectId)),
				queryClient.ensureQueryData(functionSpecificationsQueryOptions(projectId, SpecificationType.Builds)),
				queryClient.ensureQueryData(functionTemplatesPageQueryOptions(projectId, 0, 24, [], ["starter"])),
				queryClient.ensureQueryData(functionTemplatesPageQueryOptions(projectId, 0, 48, [], []))
			]);
			return {};
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$118, "component")
});
var $$splitComponentImporter$117 = () => import("./projects._projectId.functions._functionId-BFVFusAB.js");
const Route$188 = createFileRoute("/_public/projects/$projectId/functions/$functionId")({
	validateSearch: listSearchSchema,
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId));
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$117, "component")
});
function initialConditionsFromSearch(query) {
	if (!query) return [createEmptyConditionDraft()];
	return draftsFromUsageFilterMap(queryParamToMap(query)) ?? [createEmptyConditionDraft()];
}
var RESOURCE_TYPE_META = {
	api: {
		description: "All API requests for this project",
		icon: Server
	},
	functions: {
		description: "Requests to a specific function",
		icon: Zap
	},
	sites: {
		description: "Requests to a specific site",
		icon: Globe
	}
};
var DEFAULT_FORM = {
	name: "",
	description: "",
	action: WafRuleAction.Deny,
	resourceType: "api",
	resourceId: "",
	priority: 100,
	enabled: true,
	limit: 100,
	interval: 60,
	rateLimitKey: "ip",
	strategy: FIREWALL_RATE_LIMIT_STRATEGY_DEFAULT,
	maxBucketSize: 50,
	difficulty: 3,
	ttl: CHALLENGE_TTL_DEFAULT,
	location: "/",
	statusCode: 302
};
function View() {
	const t = useT();
	const navigate = useNavigate();
	const { projectId } = useParams({ strict: false });
	const { resourceType: initialResourceType = "api", resourceId: initialResourceId, query: initialQuery } = Route$189.useSearch();
	const createMutation = useCreateFirewallRule(projectId);
	const [ruleId, setRuleId] = useState();
	const [form, setForm] = useState({
		...DEFAULT_FORM,
		resourceType: initialResourceType,
		resourceId: initialResourceType !== "api" && initialResourceId ? initialResourceId : ""
	});
	const [conditions, setConditions] = useState(() => initialConditionsFromSearch(initialQuery));
	const needsResourceId = form.resourceType !== "api";
	const canSubmit = form.name.trim().length > 0 && (!needsResourceId || form.resourceId.trim().length > 0) && areFirewallConditionsComplete(conditions) && (form.action !== WafRuleAction.RateLimit || form.limit > 0 && form.interval > 0 && (form.strategy !== "tokenBucket" || form.maxBucketSize >= 1 && form.maxBucketSize <= 1e6)) && (form.action !== WafRuleAction.Challenge || form.difficulty >= 1 && form.difficulty <= 5 && form.ttl >= 900 && form.ttl <= 86400) && (form.action !== WafRuleAction.Redirect || form.location.trim().length > 0 && form.statusCode > 0);
	const navigateToRules = (resourceType = "api", resourceId) => {
		navigate({
			to: "/projects/$projectId/firewall",
			params: { projectId },
			search: resourceType === "api" || !resourceId?.trim() ? { resourceType: "api" } : {
				resourceType,
				resourceId: resourceId.trim()
			}
		});
	};
	const handleClose = () => {
		navigateToRules(initialResourceType, initialResourceId);
	};
	const handleSubmit = async () => {
		if (!canSubmit || !projectId) return;
		try {
			await createMutation.mutateAsync({
				ruleId,
				action: form.action,
				resourceType: form.resourceType,
				resourceId: needsResourceId ? form.resourceId.trim() : void 0,
				name: form.name.trim(),
				description: form.description.trim() || void 0,
				priority: form.priority,
				enabled: form.enabled,
				conditions: serializeFirewallConditions(conditions),
				limit: form.limit,
				interval: form.interval,
				key: form.rateLimitKey,
				strategy: form.strategy,
				maxBucketSize: form.maxBucketSize,
				difficulty: form.difficulty,
				ttl: form.ttl,
				location: form.location.trim(),
				statusCode: form.statusCode
			});
			toast.success(t("Firewall rule created"));
			navigateToRules(form.resourceType, needsResourceId ? form.resourceId.trim() : void 0);
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create firewall rule")));
		}
	};
	const actionExtras = form.action === WafRuleAction.RateLimit ? /* @__PURE__ */ jsxs("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-strategy",
					className: "text-[12px]",
					children: t("Strategy")
				}), /* @__PURE__ */ jsxs(Select, {
					value: form.strategy,
					onValueChange: (value) => setForm({
						...form,
						strategy: value
					}),
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id: "firewall-strategy",
						className: "h-9 w-full",
						children: /* @__PURE__ */ jsx(SelectValue, {})
					}), /* @__PURE__ */ jsx(SelectContent, { children: FIREWALL_RATE_LIMIT_STRATEGIES.map((s) => /* @__PURE__ */ jsx(SelectItem, {
						value: s.value,
						children: t(s.label)
					}, s.value)) })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-key",
					className: "text-[12px]",
					children: t("Limit by")
				}), /* @__PURE__ */ jsxs(Select, {
					value: form.rateLimitKey,
					onValueChange: (value) => setForm({
						...form,
						rateLimitKey: value
					}),
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id: "firewall-key",
						className: "h-9 w-full",
						children: /* @__PURE__ */ jsx(SelectValue, {})
					}), /* @__PURE__ */ jsx(SelectContent, { children: FIREWALL_RATE_LIMIT_KEYS.map((k) => /* @__PURE__ */ jsx(SelectItem, {
						value: k.value,
						children: t(k.label)
					}, k.value)) })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-limit",
					className: "text-[12px]",
					children: t("Request limit")
				}), /* @__PURE__ */ jsx(Input, {
					id: "firewall-limit",
					type: "number",
					min: 1,
					value: form.limit,
					onChange: (e) => setForm({
						...form,
						limit: Number(e.target.value) || 1
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-interval",
					className: "text-[12px]",
					children: t("Interval (seconds)")
				}), /* @__PURE__ */ jsx(Input, {
					id: "firewall-interval",
					type: "number",
					min: 1,
					value: form.interval,
					onChange: (e) => setForm({
						...form,
						interval: Number(e.target.value) || 1
					})
				})]
			}),
			form.strategy === "tokenBucket" ? /* @__PURE__ */ jsxs("div", {
				className: "space-y-1.5 sm:col-span-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "firewall-max-bucket-size",
						className: "text-[12px]",
						children: t("Max bucket size")
					}),
					/* @__PURE__ */ jsx(Input, {
						id: "firewall-max-bucket-size",
						type: "number",
						min: 1,
						max: MAX_BUCKET_SIZE_MAX,
						value: form.maxBucketSize,
						onChange: (e) => setForm({
							...form,
							maxBucketSize: Number(e.target.value) || 1
						})
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("The largest burst allowed. Defaults to the request limit when left unset.")
					})
				]
			}) : null
		]
	}) : form.action === WafRuleAction.Challenge ? /* @__PURE__ */ jsxs("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [
				/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-difficulty",
					className: "text-[12px]",
					children: t("Difficulty")
				}),
				/* @__PURE__ */ jsx(Input, {
					id: "firewall-difficulty",
					type: "number",
					min: 1,
					max: 5,
					value: form.difficulty,
					onChange: (e) => setForm({
						...form,
						difficulty: Number(e.target.value) || 1
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("1 (easiest) to 5 (hardest).")
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [
				/* @__PURE__ */ jsx(Label, {
					htmlFor: "firewall-ttl",
					className: "text-[12px]",
					children: t("TTL (seconds)")
				}),
				/* @__PURE__ */ jsx(Input, {
					id: "firewall-ttl",
					type: "number",
					min: 900,
					max: CHALLENGE_TTL_MAX,
					value: form.ttl,
					onChange: (e) => setForm({
						...form,
						ttl: Number(e.target.value) || 900
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t("How long a visitor stays cleared after passing.")
				})
			]
		})]
	}) : form.action === WafRuleAction.Redirect ? /* @__PURE__ */ jsxs("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: "firewall-location",
				className: "text-[12px]",
				children: t("Redirect location")
			}), /* @__PURE__ */ jsx(Input, {
				id: "firewall-location",
				value: form.location,
				onChange: (e) => setForm({
					...form,
					location: e.target.value
				}),
				placeholder: "https://example.com"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: "firewall-status-code",
				className: "text-[12px]",
				children: t("Status code")
			}), /* @__PURE__ */ jsx(Input, {
				id: "firewall-status-code",
				type: "number",
				min: 300,
				max: 399,
				value: form.statusCode,
				onChange: (e) => setForm({
					...form,
					statusCode: Number(e.target.value) || 302
				})
			})]
		})]
	}) : null;
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create firewall rule"),
		onClose: handleClose,
		fullscreen: true,
		footerAlign: "right",
		sidebar: /* @__PURE__ */ jsx(RuleImpactPreview, {
			conditions,
			action: form.action,
			resourceType: form.resourceType,
			resourceId: form.resourceId,
			rateLimit: {
				strategy: form.strategy,
				limit: form.limit,
				interval: form.interval,
				maxBucketSize: form.maxBucketSize
			}
		}),
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			onClick: handleClose,
			disabled: createMutation.isPending,
			children: t("Cancel")
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleSubmit,
			disabled: !canSubmit || createMutation.isPending,
			children: t("Create rule")
		})] }),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 sm:col-span-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "firewall-rule-name",
							children: t("Rule name")
						}), /* @__PURE__ */ jsx(Input, {
							id: "firewall-rule-name",
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							placeholder: t("e.g., Deny suspicious IPs")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 sm:col-span-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "firewall-rule-description",
							children: t("Description")
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "firewall-rule-description",
							value: form.description,
							onChange: (e) => setForm({
								...form,
								description: e.target.value
							}),
							placeholder: t("Optional description of what this rule does"),
							rows: 2
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsx(Label, { children: t("Resource type") }),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
							children: FIREWALL_RESOURCE_TYPES.map((resource) => {
								const meta = RESOURCE_TYPE_META[resource.value];
								const Icon$1 = meta.icon;
								return /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => setForm({
										...form,
										resourceType: resource.value,
										resourceId: ""
									}),
									className: cn("flex w-full cursor-pointer items-start gap-3 rounded-xl border border-border bg-card/50 p-3.5 text-start transition-all hover:border-border/80 hover:bg-card/60", form.resourceType === resource.value && "border-primary ring-1 ring-primary/20 hover:border-primary"),
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
										children: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[13px] font-medium text-foreground",
											children: t(resource.label)
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-0.5 text-[12px] leading-snug text-muted-foreground",
											children: t(meta.description)
										})]
									})]
								}, resource.value);
							})
						}),
						needsResourceId ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-2 pt-1",
							children: [/* @__PURE__ */ jsx(Label, { children: t("Resource ID") }), form.resourceType === "functions" ? /* @__PURE__ */ jsx(FunctionSelector, {
								projectId,
								value: form.resourceId,
								onValueChange: (resourceId) => setForm({
									...form,
									resourceId
								}),
								triggerClassName: "w-full justify-between font-normal"
							}) : /* @__PURE__ */ jsx(SiteSelector, {
								projectId,
								value: form.resourceId,
								onValueChange: (resourceId) => setForm({
									...form,
									resourceId
								}),
								triggerClassName: "w-full justify-between font-normal"
							})]
						}) : null
					]
				}),
				/* @__PURE__ */ jsx(ConditionsBuilder, {
					conditions,
					onChange: setConditions,
					resourceType: form.resourceType,
					action: form.action,
					onActionChange: (next) => setForm({
						...form,
						action: next
					}),
					actionExtras
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsx(Label, { children: t("Priority") }),
						/* @__PURE__ */ jsx(Input, {
							type: "number",
							min: 0,
							value: form.priority,
							onChange: (e) => setForm({
								...form,
								priority: Number(e.target.value) || 0
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Lower numbers are evaluated first.")
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, { children: t("Rule ID") }), /* @__PURE__ */ jsx(IdInput, {
						value: ruleId,
						onChange: setRuleId
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between rounded-lg border border-border px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: t("Enabled")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[12px] text-muted-foreground",
						children: t("Rule will be active immediately")
					})] }), /* @__PURE__ */ jsx(Switch, {
						checked: form.enabled,
						onCheckedChange: (enabled) => setForm({
							...form,
							enabled
						})
					})]
				})
			]
		})
	});
}
function parseUsageFilterQuerySearch(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
const Route$189 = createFileRoute("/_public/projects/$projectId/firewall/create")({
	head: () => ({ meta: [{ title: pageTitle("Create firewall rule") }] }),
	validateSearch: (search) => {
		const resourceType = parseFirewallResourceTypeSearch(search.resourceType);
		const resourceId = parseFirewallResourceIdSearch(search.resourceId);
		const query = parseUsageFilterQuerySearch(search.query);
		return {
			...resourceType ? { resourceType } : {},
			...resourceType && resourceType !== "api" && resourceId ? { resourceId } : {},
			...query ? { query } : {}
		};
	},
	codeSplitGroupings: [],
	component: View
});
function DbTypeIcon({ icon, className }) {
	const iconClass = cn("h-3.5 w-3.5 shrink-0", className);
	switch (icon) {
		case "table": return /* @__PURE__ */ jsx(Table, { className: iconClass });
		case "braces": return /* @__PURE__ */ jsx(Braces, { className: iconClass });
		case "layers": return /* @__PURE__ */ jsx(Layers, { className: iconClass });
		case "elephant": return /* @__PURE__ */ jsx(PostgresElephantIcon, { className: iconClass });
		case "dolphin": return /* @__PURE__ */ jsx(MySQLDolphinIcon, { className: iconClass });
		default: return null;
	}
}
function InlineRow({ label, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start justify-between gap-3 text-[13px] leading-snug",
		children: [/* @__PURE__ */ jsx("span", {
			className: "shrink-0 text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "min-w-0 text-end text-foreground",
			children
		})]
	});
}
function formatIncludedOpsValue(value, t) {
	if (value === "unlimited") return t("Unlimited");
	return `${formatCompactCount(value)} ${t("included")}`;
}
function ServerlessPlanOps({ plan }) {
	const t = useT();
	const { reads, writes } = getPlanDatabaseOperationLimits(plan);
	const overage = getPlanDatabaseOperationOverage(plan);
	const showOverage = overage.reads != null || overage.writes != null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2.5",
		children: [
			/* @__PURE__ */ jsx(InlineRow, {
				label: t("Compute"),
				children: /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: t("No compute fee")
				})
			}),
			reads != null ? /* @__PURE__ */ jsx(InlineRow, {
				label: t("Reads"),
				children: /* @__PURE__ */ jsx("span", {
					className: "font-medium tabular-nums",
					children: formatIncludedOpsValue(reads, t)
				})
			}) : null,
			writes != null ? /* @__PURE__ */ jsx(InlineRow, {
				label: t("Writes"),
				children: /* @__PURE__ */ jsx("span", {
					className: "font-medium tabular-nums",
					children: formatIncludedOpsValue(writes, t)
				})
			}) : null,
			showOverage ? /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border/80 pt-3 space-y-2.5",
				children: [overage.reads ? /* @__PURE__ */ jsx(InlineRow, {
					label: t("Additional reads"),
					children: /* @__PURE__ */ jsx("span", {
						className: "font-medium tabular-nums",
						children: formatDatabaseOperationOverageRate(overage.reads)
					})
				}) : null, overage.writes ? /* @__PURE__ */ jsx(InlineRow, {
					label: t("Additional writes"),
					children: /* @__PURE__ */ jsx("span", {
						className: "font-medium tabular-nums",
						children: formatDatabaseOperationOverageRate(overage.writes)
					})
				}) : null]
			}) : null
		]
	});
}
function CostLine({ label, amountUsd, emphasize, zeroLabel }) {
	const isUnset = amountUsd <= 0 && zeroLabel !== void 0;
	const display = isUnset ? zeroLabel : `${formatCurrency(amountUsd)}/mo`;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center justify-between gap-3 text-[13px] leading-snug", emphasize && "pt-2 border-t border-border/80"),
		children: [/* @__PURE__ */ jsx("span", {
			className: emphasize ? "font-medium text-foreground" : "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: cn("shrink-0 tabular-nums font-medium", emphasize && "font-semibold", isUnset && "text-muted-foreground"),
			children: display
		})]
	});
}
function CreateDatabaseSummary({ name, databaseId, dbType, selectedDbType, showSpecs, selectedSpec, showDedicatedOptions = false, replicaCount = 0, pitrEnabled = false, monthlyCost = null, showBackupPolicies = false, backupPoliciesLabel = null, backupsEnabled, canCreate, computeCreditsUsd = null, organizationPlan = null }) {
	const t = useT();
	const trimmedName = name.trim();
	const hasType = Boolean(selectedDbType && dbType);
	const showPricing = Boolean(showDedicatedOptions && selectedSpec && monthlyCost);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border bg-muted/30 px-4 py-3",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[13px] font-semibold tracking-tight text-foreground",
					children: t("Database summary")
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4 px-4 py-4",
				children: [
					/* @__PURE__ */ jsx(InlineRow, {
						label: t("Name"),
						children: trimmedName ? /* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: trimmedName
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Required")
						})
					}),
					/* @__PURE__ */ jsx(InlineRow, {
						label: "ID",
						children: databaseId?.trim() ? /* @__PURE__ */ jsx("span", {
							className: "break-all font-mono text-[12px] font-medium",
							children: databaseId.trim()
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Auto-generated")
						})
					}),
					/* @__PURE__ */ jsx(InlineRow, {
						label: t("Type"),
						children: hasType ? /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center justify-end gap-1.5 font-medium",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "inline-flex h-6 w-6 items-center justify-center rounded-md bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(DbTypeIcon, { icon: selectedDbType.icon })
								}),
								selectedDbType.label,
								(selectedDbType.id === "DocumentsDB" || selectedDbType.id === "VectorsDB") && /* @__PURE__ */ jsx(Badge, {
									variant: "info",
									className: "text-[10px] shrink-0",
									children: t("Beta")
								})
							]
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Not selected")
						})
					}),
					showSpecs && selectedSpec && /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-border bg-muted/20 px-4 py-3 space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-semibold text-foreground",
									children: t(selectedSpec.label)
								}), isServerlessDatabaseSpecId(selectedSpec.id) ? null : /* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-semibold tabular-nums text-foreground",
									children: selectedSpec.price
								})]
							}),
							isServerlessDatabaseSpecId(selectedSpec.id) ? /* @__PURE__ */ jsx(ServerlessPlanOps, { plan: organizationPlan }) : /* @__PURE__ */ jsxs("div", {
								className: "space-y-2.5",
								children: [
									/* @__PURE__ */ jsx(InlineRow, {
										label: "CPU",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium tabular-nums",
											children: selectedSpec.cpu
										})
									}),
									/* @__PURE__ */ jsx(InlineRow, {
										label: t("Memory"),
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium tabular-nums",
											children: selectedSpec.memory
										})
									}),
									/* @__PURE__ */ jsx(InlineRow, {
										label: t("Connections"),
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium tabular-nums",
											children: selectedSpec.connections
										})
									})
								]
							}),
							showPricing && monthlyCost && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "border-t border-border/80 pt-3 space-y-2",
								children: [
									/* @__PURE__ */ jsx(CostLine, {
										label: t("Compute"),
										amountUsd: monthlyCost.baseUsd
									}),
									/* @__PURE__ */ jsx(CostLine, {
										label: replicaCount === 0 ? t("Replicas") : `${t("Replicas")} (${replicaCount})`,
										amountUsd: monthlyCost.haReplicasUsd,
										zeroLabel: t("None")
									}),
									/* @__PURE__ */ jsx(CostLine, {
										label: pitrEnabled ? "PITR" : `PITR (${t("off")})`,
										amountUsd: monthlyCost.pitrUsd,
										zeroLabel: t("Off")
									}),
									/* @__PURE__ */ jsx(CostLine, {
										label: t("Total"),
										amountUsd: monthlyCost.totalUsd,
										emphasize: true
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2.5 text-[13px]",
								children: [computeCreditsUsd != null && computeCreditsUsd > 0 ? /* @__PURE__ */ jsx(InlineRow, {
									label: t("Compute credits"),
									children: /* @__PURE__ */ jsxs("span", {
										className: "font-medium tabular-nums",
										children: [
											formatDedicatedMonthlyPrice(computeCreditsUsd),
											" ",
											t("included")
										]
									})
								}) : null, /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Storage and bandwidth overages billed separately.")
								})]
							})] })
						]
					}),
					showSpecs && !selectedSpec && /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Select a compute tier to continue.")
					}),
					showBackupPolicies && /* @__PURE__ */ jsx(InlineRow, {
						label: t("Backup policies"),
						children: backupsEnabled === false ? /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Not included")
						}) : backupPoliciesLabel ? /* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: backupPoliciesLabel
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("None")
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("border-t px-4 py-2.5", canCreate ? "bg-muted/30" : "bg-transparent"),
				children: /* @__PURE__ */ jsx("p", {
					className: cn("text-[12px] leading-snug", canCreate ? "text-foreground" : "text-muted-foreground"),
					children: canCreate ? /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "h-1.5 w-1.5 shrink-0 rounded-full bg-green-500",
							"aria-hidden": true
						}), t("Ready to create")]
					}) : hasType && selectedDbType?.comingSoon ? t("This database type is not available yet.") : hasType && selectedDbType?.requiresUpgrade ? t("Upgrade your plan to create this database type.") : t("Complete the required fields to continue.")
				})
			})
		]
	});
}
function getReplicaOption(count) {
	return DEDICATED_DB_HA_REPLICA_OPTIONS.find((option) => option.count === count) ?? DEDICATED_DB_HA_REPLICA_OPTIONS[0];
}
function CreateDatabaseDedicatedOptions({ basePriceUsd, pricing, replicaCount, onReplicaCountChange, pitrEnabled, onPitrEnabledChange }) {
	const t = useT();
	const replicaOption = getReplicaOption(replicaCount);
	const replicaAddonUsd = calculateDedicatedDatabaseMonthlyCost({
		basePriceUsd,
		replicaCount,
		pitrEnabled: false,
		pricing
	}).haReplicasUsd;
	const pitrCost = calculateDedicatedDatabaseMonthlyCost({
		basePriceUsd,
		replicaCount: 0,
		pitrEnabled: true,
		pricing
	}).pitrUsd;
	const haReplicaRatePercent = Math.round(pricing.haReplicaRate * 100);
	const pitrRatePercent = Math.round(pricing.pitrRate * 100);
	const decrementReplicas = () => onReplicaCountChange(Math.max(0, replicaCount - 1));
	const incrementReplicas = () => onReplicaCountChange(Math.min(5, replicaCount + 1));
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Read replicas")
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-2 text-[13px] text-muted-foreground",
						children: [
							t("Add read-only instances to scale query traffic and improve failover resilience alongside your primary database."),
							" ",
							t("Each replica is billed at"),
							" ",
							haReplicaRatePercent,
							"%",
							" ",
							t("of your compute tier per month.")
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1 space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "db-replica-count",
									className: "text-[13px] font-medium text-foreground",
									children: t("Replica count")
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t(replicaOption.label),
										" · 0–",
										5
									]
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] leading-relaxed text-muted-foreground",
								children: t(replicaOption.description)
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 flex-col items-end gap-2",
							children: [/* @__PURE__ */ jsxs("div", {
								id: "db-replica-count",
								className: "flex items-center gap-1.5",
								role: "group",
								"aria-label": t("Replica count"),
								children: [
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "icon",
										className: "size-8",
										onClick: decrementReplicas,
										disabled: replicaCount <= 0,
										"aria-label": t("Decrease replica count"),
										"data-analytics-track": "manual",
										children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "flex size-8 items-center justify-center rounded-md border border-border bg-muted/40 text-[13px] font-semibold tabular-nums text-foreground",
										"aria-live": "polite",
										"aria-atomic": "true",
										children: replicaCount
									}),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "icon",
										className: "size-8",
										onClick: incrementReplicas,
										disabled: replicaCount >= 5,
										"aria-label": t("Increase replica count"),
										"data-analytics-track": "manual",
										children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
									})
								]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-semibold tabular-nums text-foreground",
								children: formatDedicatedAddonPrice(replicaAddonUsd)
							})]
						})]
					}), replicaCount >= 5 && /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-col gap-3 rounded-lg border border-border bg-muted/30 px-3 py-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[12px] leading-relaxed text-muted-foreground",
							children: t("You have reached the maximum self-serve replica count. Contact sales if you need a custom high availability configuration.")
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 shrink-0 text-[13px]",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: "/enterprise",
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("Contact sales")
							})
						})]
					})]
				})
			]
		}) }), /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Point-in-time recovery (PITR)")
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-2 text-[13px] text-muted-foreground",
						children: [
							t("Restore your database to a specific moment in time, beyond the latest scheduled backup. Useful for recovering from accidental deletes, failed migrations, or bad writes."),
							" ",
							t("Billed at"),
							" ",
							pitrRatePercent,
							"%",
							" ",
							t("of your compute tier per month when enabled.")
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "db-pitr",
							className: "text-[13px] font-medium text-foreground",
							children: t("Enable PITR")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 flex-col items-end gap-2",
							children: [/* @__PURE__ */ jsx(Switch, {
								id: "db-pitr",
								checked: pitrEnabled,
								onCheckedChange: onPitrEnabledChange,
								"data-analytics-track": "manual"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[13px] font-semibold tabular-nums text-foreground",
								children: pitrEnabled ? formatDedicatedAddonPrice(pitrCost) : formatDedicatedAddonPrice(0)
							})]
						})]
					})
				})
			]
		}) })]
	});
}
const BACKUP_POLICY_PRESETS = {
	hourly: {
		schedule: "0 * * * *",
		retention: 1,
		name: "Hourly backup",
		label: "Hourly",
		description: "Runs every hour, retained for 24 hours"
	},
	daily: {
		schedule: "0 2 * * *",
		retention: 7,
		name: "Daily backup",
		label: "Daily",
		description: "Runs every day, retained for 7 days"
	}
};
function isGenericBackupPolicyName(name) {
	const normalized = (name ?? "").trim().toLowerCase();
	return normalized === "" || normalized === "default";
}
function backupPolicyNameForSchedule(schedule) {
	const normalized = schedule?.trim();
	if (!normalized) return null;
	for (const preset of Object.values(BACKUP_POLICY_PRESETS)) if (preset.schedule === normalized) return preset.name;
	if (/^\d+\s+\d+\s+\*\s+\*\s+\*$/.test(normalized)) return BACKUP_POLICY_PRESETS.daily.name;
	if (normalized === "0 * * * *") return BACKUP_POLICY_PRESETS.hourly.name;
	return null;
}
function CreateDatabaseBackupPolicies({ planBackupsEnabled, backupPoliciesLimit = 0, selectedPresets, onSelectedPresetsChange, orgId }) {
	const t = useT();
	const { features } = useConsoleProfile();
	if (!features.databaseBackups) return null;
	const canSelect = planBackupsEnabled === true;
	const showUpgradeWarning = planBackupsEnabled === false;
	const limit = getBackupPoliciesPlanLimit({ backupPolicies: backupPoliciesLimit });
	const supportsHourly = canSelect && supportsAdvancedBackupPolicies(limit);
	const atSelectionLimit = isBackupPoliciesAtPlanLimit(selectedPresets.length, limit);
	const togglePreset = (preset, checked) => {
		if (!canSelect) return;
		if (checked) {
			if (selectedPresets.includes(preset)) return;
			if (atSelectionLimit) return;
			onSelectedPresetsChange([...selectedPresets, preset]);
			return;
		}
		onSelectedPresetsChange(selectedPresets.filter((p) => p !== preset));
	};
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-8",
		children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Backup policies")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
						children: t("Choose when automated backups run for this database. You can change policies later from the Backups tab.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-3",
					children: [
						showUpgradeWarning && /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: "border-amber-500/30 bg-amber-500/5",
							children: [
								/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }),
								/* @__PURE__ */ jsx(AlertTitle, {
									className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
									children: t("Backups not enabled")
								}),
								/* @__PURE__ */ jsxs(AlertDescription, {
									className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
									children: [
										t("This database will not be backed up on your current plan."),
										" ",
										/* @__PURE__ */ jsx(UpgradePlanLink, { orgId }),
										" ",
										t("to enable automated backups.")
									]
								})
							]
						}),
						supportsHourly && /* @__PURE__ */ jsx(PresetRow, {
							id: "wizard-backup-hourly",
							label: t(BACKUP_POLICY_PRESETS.hourly.label),
							description: t(BACKUP_POLICY_PRESETS.hourly.description),
							checked: selectedPresets.includes("hourly"),
							disabled: !canSelect,
							onCheckedChange: (checked) => togglePreset("hourly", checked)
						}),
						/* @__PURE__ */ jsx(PresetRow, {
							id: "wizard-backup-daily",
							label: t(BACKUP_POLICY_PRESETS.daily.label),
							description: t(BACKUP_POLICY_PRESETS.daily.description),
							checked: selectedPresets.includes("daily"),
							disabled: !canSelect,
							onCheckedChange: (checked) => togglePreset("daily", checked)
						}),
						canSelect && !supportsHourly && limit === 1 && /* @__PURE__ */ jsx("p", {
							className: "text-[12px] leading-relaxed text-muted-foreground",
							children: t("Your plan only supports the daily preset policy. Upgrade to create custom policies.")
						})
					]
				})
			]
		}) })
	});
}
function PresetRow({ id, label, description, checked, disabled, onCheckedChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center space-x-2 rounded-lg border border-border p-3", disabled && "opacity-60", checked && !disabled && "border-primary/40 bg-primary/5"),
		children: [/* @__PURE__ */ jsx(Checkbox, {
			id,
			checked,
			disabled,
			onCheckedChange: (value) => onCheckedChange(value === true)
		}), /* @__PURE__ */ jsxs(Label, {
			htmlFor: id,
			className: "flex-1 cursor-pointer",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-medium text-[13px]",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "text-[12px] text-muted-foreground",
				children: description
			})]
		})]
	});
}
function buildSteps(state) {
	const { databaseName, showProvisioningStep, showHaStep, showPitrStep, showWorkspaceStep, showBackupsStep } = state;
	const name = databaseName.trim();
	const steps = [{
		phase: "creating",
		label: "Creating database",
		description: name ? `Setting up ${name} for your project.` : "Setting up your database resource."
	}];
	if (showProvisioningStep) steps.push({
		phase: "provisioning",
		label: "Provisioning compute",
		description: "Allocating dedicated compute for your database."
	});
	if (showHaStep) steps.push({
		phase: "configuring-ha",
		label: "Configuring high availability",
		description: "Setting up read replicas for failover resilience."
	});
	if (showPitrStep) steps.push({
		phase: "enabling-pitr",
		label: "Enabling point-in-time recovery",
		description: "Configuring continuous recovery for your database."
	});
	if (showWorkspaceStep) steps.push({
		phase: "preparing-workspace",
		label: "Preparing workspace",
		description: "Preparing your database workspace."
	});
	if (showBackupsStep) steps.push({
		phase: "enabling-backups",
		label: "Setting up backups",
		description: "Creating backup policies for your database."
	});
	steps.push({
		phase: "complete",
		label: "Finishing up",
		description: "Opening your database."
	});
	return steps;
}
function getPhaseIndex(steps, phase) {
	const index = steps.findIndex((step) => step.phase === phase);
	return index >= 0 ? index : 0;
}
function CreateDatabaseSetupProgress({ progress }) {
	const t = useT();
	const steps = buildSteps(progress);
	const activeIndex = getPhaseIndex(steps, progress.phase);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-md flex-col items-center px-4 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/40",
				children: /* @__PURE__ */ jsx(icons_exports.Loader2, { className: "h-6 w-6 animate-spin text-foreground" })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-center text-[20px] font-semibold tracking-tight text-foreground",
				children: t("Setting up your database")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 max-w-xs text-center text-[13px] leading-relaxed text-muted-foreground",
				children: t("This usually takes a few seconds. Please keep this window open.")
			}),
			/* @__PURE__ */ jsx("ol", {
				className: "mt-10 mx-auto w-full max-w-xs space-y-0",
				children: steps.map((step, index) => {
					const isComplete = index < activeIndex;
					const isCurrent = index === activeIndex;
					return /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-semibold transition-colors", isComplete && "border-green-600 bg-green-600 text-white dark:border-green-500 dark:bg-green-500", isCurrent && "border-primary bg-background text-primary", index > activeIndex && "border-border bg-muted/40 text-muted-foreground"),
								children: isComplete ? /* @__PURE__ */ jsx(icons_exports.Check, {
									className: "h-4 w-4",
									strokeWidth: 2.5
								}) : isCurrent ? /* @__PURE__ */ jsx(icons_exports.Loader2, { className: "h-4 w-4 animate-spin" }) : index + 1
							}), index < steps.length - 1 ? /* @__PURE__ */ jsx("div", { className: cn("my-1 w-px flex-1 min-h-[2rem]", isComplete ? "bg-green-600 dark:bg-green-500" : "bg-border") }) : null]
						}), /* @__PURE__ */ jsxs("div", {
							className: cn("min-w-0 pb-8", index === steps.length - 1 && "pb-0"),
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[13px] font-semibold", isCurrent ? "text-foreground" : "text-muted-foreground"),
								children: t(step.label)
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
								children: t(step.description)
							})]
						})]
					}, step.phase);
				})
			})
		]
	});
}
var DB_TYPE_GROUPS = [{
	title: "Appwrite databases",
	description: "Managed databases built into Appwrite for app data, documents, and AI workloads.",
	options: [
		{
			id: "TablesDB",
			label: "TablesDB",
			description: "Relational-style database with tables, columns, and indexes. Ideal for structured data and complex queries.",
			icon: "table"
		},
		{
			id: "DocumentsDB",
			label: "DocumentsDB",
			description: "Document-based storage with flexible schemas. Store JSON documents and query with filters and full-text search.",
			icon: "braces"
		},
		{
			id: "VectorsDB",
			label: "VectorsDB",
			description: "Vector database for embeddings and similarity search. Ideal for semantic search and AI.",
			icon: "layers"
		}
	]
}, {
	title: "Native databases",
	description: "Dedicated PostgreSQL and MySQL engines for teams that need direct SQL compatibility.",
	descriptionPostgresOnly: "A dedicated PostgreSQL engine for teams that need direct SQL compatibility.",
	options: [{
		id: "Postgres",
		label: "PostgreSQL",
		description: "A dedicated PostgreSQL database for relational workloads, SQL tooling, and portable schemas.",
		icon: "elephant"
	}, {
		id: "MySQL",
		label: "MySQL",
		description: "A dedicated MySQL database for common relational workloads and existing MySQL applications.",
		icon: "dolphin"
	}]
}];
var DB_TYPE_OPTIONS = DB_TYPE_GROUPS.flatMap((group) => group.options);
function validateDatabaseId(id) {
	if (!id || id.length === 0) return true;
	if (id.length > 36) return false;
	if (!/^[a-zA-Z0-9_]/.test(id)) return false;
	return /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(id);
}
function wizardBackend(t) {
	if (t === "DocumentsDB") return DatabaseType.Documentsdb;
	if (t === "VectorsDB") return DatabaseType.Vectorsdb;
	return DatabaseType.Tablesdb;
}
function isNativeDatabaseType(t) {
	return t === "Postgres" || t === "MySQL";
}
function nativeDatabaseEngine(t) {
	return t === "Postgres" ? "postgres" : "mysql";
}
function specificationsSourceForWizardType(dbType) {
	if (!dbType) return null;
	if (dbType === "Postgres") return dedicatedDatabaseSourceFromEngine("postgresql");
	if (dbType === "MySQL") return dedicatedDatabaseSourceFromEngine("mysql");
	return dedicatedDatabaseSourceFromDatabaseType(wizardBackend(dbType));
}
function CreateDatabaseWizardView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const pid = projectId;
	const { features } = useConsoleProfile();
	const { track } = useAnalytics();
	const { project } = useProject(pid);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const regionSupportsDedicatedCompute = projectSupportsDedicatedDatabaseCompute(project?.region);
	const planSupportsDedicatedCompute = planSupportsDedicatedDatabases(organizationPlan);
	const databaseComputeCreditUsd = getPlanDatabaseComputeCreditUsd(organizationPlan);
	const computeCreditsUsd = databaseComputeCreditUsd > 0 ? databaseComputeCreditUsd : null;
	const [dbType, setDbType] = useState(null);
	const specificationsSource = useMemo(() => specificationsSourceForWizardType(dbType), [dbType]);
	const { data: specificationsData, isLoading: specificationsLoading } = useQuery({
		...databaseSpecificationsQueryOptions(pid, specificationsSource ?? dedicatedDatabaseSourceFromDatabaseType(DatabaseType.Tablesdb)),
		enabled: !!pid && !!specificationsSource
	});
	const apiSpecOptions = useMemo(() => mapDedicatedDatabaseSpecifications(specificationsData?.specifications), [specificationsData?.specifications]);
	const dedicatedPricing = useMemo(() => getDedicatedDatabaseCreatePricing(organizationPlan, specificationsData?.pricing ?? null), [organizationPlan, specificationsData?.pricing]);
	const dedicatedTypeSpecSources = useMemo(() => {
		const items = [];
		if (features.dedicatedDbsDocumentsDB) items.push({
			id: "DocumentsDB",
			source: dedicatedDatabaseSourceFromDatabaseType(DatabaseType.Documentsdb)
		});
		if (features.dedicatedDbsVectorsDB) items.push({
			id: "VectorsDB",
			source: dedicatedDatabaseSourceFromDatabaseType(DatabaseType.Vectorsdb)
		});
		if (features.nativeDbsPostgres) items.push({
			id: "Postgres",
			source: dedicatedDatabaseSourceFromEngine("postgresql")
		});
		if (features.nativeDbsMySQL) items.push({
			id: "MySQL",
			source: dedicatedDatabaseSourceFromEngine("mysql")
		});
		return items;
	}, [
		features.dedicatedDbsDocumentsDB,
		features.dedicatedDbsVectorsDB,
		features.nativeDbsPostgres,
		features.nativeDbsMySQL
	]);
	const dedicatedTypeSpecQueries = useQueries({ queries: dedicatedTypeSpecSources.map(({ source }) => ({
		...databaseSpecificationsQueryOptions(pid, source),
		enabled: !!pid && regionSupportsDedicatedCompute && databaseSpecificationsQueryOptions(pid, source).enabled
	})) });
	const dedicatedTypesWithoutCompute = useMemo(() => {
		const unavailable = /* @__PURE__ */ new Set();
		dedicatedTypeSpecSources.forEach((item, index) => {
			const query = dedicatedTypeSpecQueries[index];
			if (!query?.isSuccess) return;
			if (!hasEnabledDedicatedComputeOptions(mapDedicatedDatabaseSpecifications(query.data?.specifications))) unavailable.add(item.id);
		});
		return unavailable;
	}, [dedicatedTypeSpecQueries, dedicatedTypeSpecSources]);
	const [specId, setSpecId] = useState(null);
	const [haReplicaCount, setHaReplicaCount] = useState(0);
	const [pitrEnabled, setPitrEnabled] = useState(false);
	const [selectedBackupPresets, setSelectedBackupPresets] = useState([]);
	const [backupPresetsInitialized, setBackupPresetsInitialized] = useState(false);
	const [name, setName] = useState("");
	const [databaseId, setDatabaseId] = useState(void 0);
	const [errors, setErrors] = useState({});
	const [setupProgress, setSetupProgress] = useState(null);
	const [isCreating, setIsCreating] = useState(false);
	const createInFlightRef = useRef(false);
	const isTablesDB = dbType === "TablesDB";
	const isDocumentsDB = dbType === "DocumentsDB";
	const isVectorsDB = dbType === "VectorsDB";
	const isNativeDb = isNativeDatabaseType(dbType);
	const usesDedicatedCompute = isDocumentsDB || isVectorsDB || isNativeDb || isTablesDB && specId != null && specId !== "shared";
	const regionUnavailableMessage = formatDedicatedDatabaseRegionUnavailableDescription(t);
	const dbTypeOptions = useMemo(() => {
		const resolveDedicatedType = (opt, featureEnabled) => {
			if (!featureEnabled) return {
				...opt,
				comingSoon: true
			};
			if (!regionSupportsDedicatedCompute) return {
				...opt,
				comingSoon: true,
				comingSoonMessage: regionUnavailableMessage
			};
			if (planSupportsDedicatedCompute === false || dedicatedTypesWithoutCompute.has(opt.id)) return {
				...opt,
				comingSoon: false,
				requiresUpgrade: true
			};
			return {
				...opt,
				comingSoon: false
			};
		};
		return DB_TYPE_OPTIONS.map((opt) => {
			if (opt.id === "Postgres") return resolveDedicatedType(opt, features.nativeDbsPostgres);
			if (opt.id === "MySQL") return resolveDedicatedType(opt, features.nativeDbsMySQL);
			if (opt.id === "DocumentsDB") return resolveDedicatedType(opt, features.dedicatedDbsDocumentsDB);
			if (opt.id === "VectorsDB") return resolveDedicatedType(opt, features.dedicatedDbsVectorsDB);
			return {
				...opt,
				comingSoon: opt.comingSoon
			};
		});
	}, [
		features.nativeDbsPostgres,
		features.nativeDbsMySQL,
		features.dedicatedDbsDocumentsDB,
		features.dedicatedDbsVectorsDB,
		regionSupportsDedicatedCompute,
		planSupportsDedicatedCompute,
		dedicatedTypesWithoutCompute,
		regionUnavailableMessage
	]);
	const visibleDbTypeGroups = useMemo(() => {
		return DB_TYPE_GROUPS.map((group) => {
			const options = group.options.filter((opt) => {
				if (opt.id === "MySQL") return features.nativeDbsMySQL;
				return true;
			});
			if (options.length === 0) return null;
			const description = group.title === "Native databases" && !features.nativeDbsMySQL && group.descriptionPostgresOnly ? group.descriptionPostgresOnly : group.description;
			return {
				...group,
				description,
				options
			};
		}).filter((group) => group != null);
	}, [features.nativeDbsMySQL]);
	const showSpecsForType = regionSupportsDedicatedCompute && (isDocumentsDB || isVectorsDB || isTablesDB || isNativeDb);
	const selectableSpecs = useMemo(() => {
		const dedicatedSpecs = planSupportsDedicatedCompute === true ? apiSpecOptions : apiSpecOptions.map((spec) => ({
			...spec,
			comingSoon: true
		}));
		const visibleDedicatedSpecs = dedicatedSpecs.length > 0 ? dedicatedSpecs : TABLE_DB_SPEC_OPTIONS.filter((spec) => spec.id !== SERVERLESS_DATABASE_SPEC_ID).map((spec) => ({
			...spec,
			comingSoon: true
		}));
		if (isNativeDb || isDocumentsDB || isVectorsDB) return visibleDedicatedSpecs;
		if (isTablesDB) {
			const serverlessSpec = TABLE_DB_SPEC_OPTIONS.find((s) => s.id === SERVERLESS_DATABASE_SPEC_ID);
			return [...serverlessSpec ? [{
				...serverlessSpec,
				comingSoon: false
			}] : [], ...visibleDedicatedSpecs];
		}
		return visibleDedicatedSpecs;
	}, [
		apiSpecOptions,
		isNativeDb,
		isTablesDB,
		isDocumentsDB,
		isVectorsDB,
		planSupportsDedicatedCompute
	]);
	const selectedSpec = useMemo(() => specId ? selectableSpecs.find((s) => s.id === specId) : null, [specId, selectableSpecs]);
	const selectedDbType = useMemo(() => dbType ? dbTypeOptions.find((opt) => opt.id === dbType) : null, [dbType, dbTypeOptions]);
	const isDbTypeUnavailable = Boolean(selectedDbType?.comingSoon || selectedDbType?.requiresUpgrade);
	useEffect(() => {
		if (isDbTypeUnavailable) setDbType(null);
	}, [isDbTypeUnavailable]);
	const showDedicatedOptions = Boolean(usesDedicatedCompute && selectedSpec && !selectedSpec.comingSoon && typeof selectedSpec.priceUsd === "number");
	const basePriceUsd = selectedSpec?.priceUsd ?? 0;
	const monthlyCost = useMemo(() => {
		if (!showDedicatedOptions) return null;
		return calculateDedicatedDatabaseMonthlyCost({
			basePriceUsd,
			replicaCount: haReplicaCount,
			pitrEnabled,
			pricing: dedicatedPricing
		});
	}, [
		showDedicatedOptions,
		basePriceUsd,
		haReplicaCount,
		pitrEnabled,
		dedicatedPricing
	]);
	useEffect(() => {
		track("Wizard Opened", {
			surface: "create_database_wizard",
			resource: "database"
		});
	}, [track]);
	useEffect(() => {
		if (!dbType || !showSpecsForType || specificationsLoading) return;
		if (dbType === "TablesDB" && specId === "shared") return;
		if (specId && selectableSpecs.some((spec) => spec.id === specId && !spec.comingSoon)) return;
		const nextSpecId = getDefaultEnabledSpecId(selectableSpecs);
		if (nextSpecId && nextSpecId !== specId) setSpecId(nextSpecId);
	}, [
		dbType,
		showSpecsForType,
		specificationsLoading,
		selectableSpecs,
		specId
	]);
	useEffect(() => {
		setHaReplicaCount(0);
		setPitrEnabled(false);
	}, [dbType]);
	useEffect(() => {
		if (!features.databaseBackups) {
			setSelectedBackupPresets([]);
			setBackupPresetsInitialized(false);
			return;
		}
		if (backupPresetsInitialized) return;
		if (organizationPlan == null) return;
		setSelectedBackupPresets(organizationPlan.backupsEnabled ? ["daily"] : []);
		setBackupPresetsInitialized(true);
	}, [
		backupPresetsInitialized,
		features.databaseBackups,
		organizationPlan
	]);
	const planBackupsEnabled = features.databaseBackups ? organizationPlan?.backupsEnabled : void 0;
	const backupPoliciesLimit = features.databaseBackups ? getBackupPoliciesPlanLimit(organizationPlan) : 0;
	const showBackupPoliciesSection = Boolean(features.databaseBackups);
	const backupPoliciesSummaryLabel = selectedBackupPresets.length > 0 ? selectedBackupPresets.map((id) => t(BACKUP_POLICY_PRESETS[id].label)).join(", ") : null;
	useEffect(() => {
		if (!features.databaseBackups) return;
		if (!supportsAdvancedBackupPolicies(backupPoliciesLimit)) setSelectedBackupPresets((prev) => {
			const next = prev.filter((id) => id !== "hourly");
			if (next.length === prev.length) return prev;
			return next.length > 0 ? next : prev.includes("daily") ? ["daily"] : next;
		});
		if (backupPoliciesLimit <= 0) return;
		setSelectedBackupPresets((prev) => {
			if (prev.length <= backupPoliciesLimit) return prev;
			return prev.slice(0, backupPoliciesLimit);
		});
	}, [backupPoliciesLimit, features.databaseBackups]);
	const createBackupPoliciesForDatabase = async (database) => {
		if (!features.databaseBackups || planBackupsEnabled !== true || selectedBackupPresets.length === 0) return;
		const projectSdk = sdk.forProject(pid);
		const isNative = isNativeDatabaseType(dbType);
		const engineService = isNative ? dedicatedEngineService(projectSdk, nativeDatabaseEngine(dbType)) : null;
		const existing = isNative ? await fetchDedicatedBackupPolicies(pid, database.$id, nativeDatabaseEngine(dbType)).catch(() => ({
			policies: [],
			total: 0
		})) : await fetchBackupPolicies(pid, database.$id).catch(() => ({
			policies: [],
			total: 0
		}));
		for (const policy of existing.policies) {
			if (!isGenericBackupPolicyName(policy.name)) continue;
			const meaningfulName = backupPolicyNameForSchedule(policy.schedule) ?? (selectedBackupPresets.includes("daily") ? BACKUP_POLICY_PRESETS.daily.name : selectedBackupPresets.includes("hourly") ? BACKUP_POLICY_PRESETS.hourly.name : null);
			if (!meaningfulName) continue;
			try {
				if (engineService) await engineService.updateBackupPolicy({
					databaseId: database.$id,
					policyId: policy.$id,
					name: meaningfulName
				});
				else await projectSdk.backups.updatePolicy({
					policyId: policy.$id,
					name: meaningfulName
				});
				policy.name = meaningfulName;
			} catch {}
		}
		const existingSchedules = new Set(existing.policies.map((policy) => policy.schedule?.trim()).filter((schedule) => Boolean(schedule)));
		const remainingSlots = getBackupPoliciesRemainingSlots(existing.policies.length, backupPoliciesLimit) ?? selectedBackupPresets.length;
		if (remainingSlots === 0) return;
		const presetsToCreate = selectedBackupPresets.filter((presetId) => {
			const schedule = BACKUP_POLICY_PRESETS[presetId].schedule;
			return !existingSchedules.has(schedule);
		}).slice(0, remainingSlots);
		if (presetsToCreate.length === 0) return;
		for (const presetId of presetsToCreate) {
			const preset = BACKUP_POLICY_PRESETS[presetId];
			const policy = {
				policyId: ID.unique(),
				name: preset.name,
				schedule: preset.schedule,
				retention: preset.retention,
				enabled: true
			};
			try {
				if (engineService) await engineService.createBackupPolicy({
					databaseId: database.$id,
					policyId: policy.policyId,
					name: policy.name,
					schedule: policy.schedule,
					retention: policy.retention,
					enabled: policy.enabled
				});
				else await projectSdk.backups.createPolicy({
					policyId: policy.policyId,
					services: [BackupServices.Databases],
					retention: policy.retention,
					schedule: policy.schedule,
					name: policy.name,
					resourceId: database.$id,
					enabled: policy.enabled
				});
			} catch (error) {
				const message = getErrorMessage(error).toLowerCase();
				if (message.includes("limit") && message.includes("polic")) return;
				throw error;
			}
		}
	};
	const handleDbTypeSelect = (option) => {
		setDbType(option.id);
		if (isAutoFilledNewDatabaseName(name)) setName(getNewDatabaseNameForType(option.id));
		if (option.id === "TablesDB") setSpecId(SERVERLESS_DATABASE_SPEC_ID);
		else if (option.id === "DocumentsDB" || option.id === "VectorsDB") setSpecId(getDefaultEnabledSpecId(apiSpecOptions));
		else setSpecId(getDefaultEnabledSpecId(apiSpecOptions));
		track("Wizard Option Selected", {
			surface: "create_database_wizard",
			resource: "database",
			step: "database_type",
			option: option.id
		});
	};
	const handleSpecSelect = (value) => {
		setSpecId(value);
		if (!value) return;
		track("Wizard Option Selected", {
			surface: "create_database_wizard",
			resource: "database",
			step: "specification",
			option: value,
			database_type: dbType ?? "unknown"
		});
	};
	const createMutation = useMutation({ mutationFn: (data) => {
		if (!dbType) throw new Error("Database type is required");
		if (isNativeDatabaseType(dbType)) {
			if (!specId) throw new Error("Database specification is required");
			return createNativeDatabase(pid, {
				...data,
				engine: nativeDatabaseEngine(dbType),
				specification: specId,
				region: project?.region,
				haReplicaCount,
				pitrEnabled
			});
		}
		return createProjectDatabase(pid, data, wizardBackend(dbType), {
			specification: specId ?? void 0,
			region: project?.region,
			haReplicaCount
		});
	} });
	const setSetupPhase = (phase) => {
		setSetupProgress((prev) => prev ? {
			...prev,
			phase
		} : prev);
	};
	const finishDatabaseCreation = async (database) => {
		if (!isNativeDatabaseType(dbType) && database.$id && dbType) seedCreatedDatabaseCaches(queryClient, pid, database.$id, wizardBackend(dbType), database);
		track("Resource Created", {
			surface: "create_database_wizard",
			resource: "database",
			database_type: dbType ?? "unknown",
			spec: selectedSpec?.id ?? "none",
			has_custom_id: Boolean(databaseId?.trim())
		});
		await refetchProjectDatabaseLists(queryClient, pid);
		toast.success(t("Database created"));
		if (isNativeDatabaseType(dbType)) {
			if (dbType === "Postgres") {
				navigate({ ...postgresDatabaseHome({
					projectId: pid,
					databaseId: database.$id,
					tableId: "-"
				}) });
				return;
			}
			if (dbType === "MySQL") {
				navigate({ ...mysqlDatabaseHome({
					projectId: pid,
					databaseId: database.$id,
					tableId: "-"
				}) });
				return;
			}
			navigate({
				to: "/projects/$projectId/databases",
				params: { projectId: pid }
			});
			return;
		}
		navigate({
			to: DATABASE_HOME_TO,
			params: {
				projectId: pid,
				dbKind: databaseRouteKindFromApiType(database.type ?? (dbType ? wizardBackend(dbType) : void 0)),
				databaseId: database.$id
			}
		});
	};
	const handleCreateDatabase = async () => {
		if (createInFlightRef.current) return;
		const newErrors = {};
		if (!name.trim()) newErrors.name = t("Name is required");
		if (isNativeDatabaseType(dbType)) {
			const dedicatedIdError = databaseId?.trim() ? getDedicatedDatabaseIdError(databaseId) : null;
			if (dedicatedIdError) newErrors.databaseId = t(dedicatedIdError);
		} else if (databaseId?.trim() && !validateDatabaseId(databaseId)) newErrors.databaseId = t("Database ID must be 1–36 characters, alphanumeric, underscore, hyphen, or period. Cannot start with a special character.");
		setErrors(newErrors);
		const invalidFields = Object.keys(newErrors);
		if (invalidFields.length > 0) {
			track("Form Validation Failed", {
				surface: "create_database_wizard",
				resource: "database",
				fields: invalidFields.join(","),
				error_count: invalidFields.length
			});
			return;
		}
		const trimmedName = name.trim();
		const showProvisioningStep = usesDedicatedCompute;
		const showHaStep = haReplicaCount > 0;
		const showPitrStep = pitrEnabled && isNativeDatabaseType(dbType);
		const shouldCreateBackupPolicies = features.databaseBackups && planBackupsEnabled === true && selectedBackupPresets.length > 0;
		track("Form Submitted", {
			surface: "create_database_wizard",
			resource: "database",
			database_type: dbType ?? "unknown",
			spec: selectedSpec?.id ?? "none",
			has_custom_id: Boolean(databaseId?.trim())
		});
		createInFlightRef.current = true;
		setSetupProgress({
			phase: "creating",
			databaseName: trimmedName,
			showProvisioningStep,
			showHaStep,
			showPitrStep,
			showWorkspaceStep: true,
			showBackupsStep: shouldCreateBackupPolicies
		});
		setIsCreating(true);
		try {
			const database = await createMutation.mutateAsync({
				databaseId: databaseId?.trim() || void 0,
				name: trimmedName
			});
			const workspaceKind = isNativeDatabaseType(dbType) ? {
				type: "native",
				engine: nativeDatabaseEngine(dbType)
			} : {
				type: "product",
				backend: wizardBackend(dbType)
			};
			if (showProvisioningStep) {
				setSetupPhase("provisioning");
				if (!await waitForCreatedDatabaseLifecycleReady(pid, database.$id, workspaceKind)) throw new Error("Database provisioning failed or timed out. Try again in a moment.");
			}
			if (showHaStep) {
				setSetupPhase("configuring-ha");
				if (!await waitForCreatedDatabaseHaReady(pid, database.$id, workspaceKind, haReplicaCount)) throw new Error("High availability setup failed or timed out. Try again in a moment.");
			}
			if (showPitrStep) {
				setSetupPhase("enabling-pitr");
				if (!await waitForCreatedDatabasePitrReady(pid, database.$id, workspaceKind)) throw new Error("Point-in-time recovery setup failed or timed out. Try again in a moment.");
			}
			setSetupPhase("preparing-workspace");
			if (!await waitForCreatedDatabaseWorkspaceReady(pid, database.$id, workspaceKind)) throw new Error("Database workspace is not ready yet. Try again in a moment.");
			if (shouldCreateBackupPolicies) {
				setSetupPhase("enabling-backups");
				try {
					await createBackupPoliciesForDatabase(database);
				} catch (policyError) {
					toast.error(getErrorMessage(policyError) || t("Database created, but failed to create backup policies"));
				}
			}
			setSetupPhase("complete");
			await finishDatabaseCreation(database);
		} catch (error) {
			setSetupProgress(null);
			track("Resource Creation Failed", {
				surface: "create_database_wizard",
				resource: "database",
				database_type: dbType ?? "unknown",
				spec: selectedSpec?.id ?? "none",
				error_name: error instanceof Error ? error.name : "unknown"
			});
			const fallback = t("Failed to create database");
			const message = isNativeDatabaseType(dbType) || dbType === "DocumentsDB" || dbType === "VectorsDB" ? formatDedicatedDatabaseCreateError(error, fallback) : getErrorMessage(error) || fallback;
			toast.error(t(message));
		} finally {
			createInFlightRef.current = false;
			setIsCreating(false);
		}
	};
	const isSpecSelectionReady = !showSpecsForType || !specificationsLoading && selectedSpec != null && !selectedSpec.comingSoon;
	const showNameForm = Boolean(dbType && !selectedDbType?.comingSoon && !selectedDbType?.requiresUpgrade);
	const canCreate = Boolean(showNameForm && name.trim().length > 0 && dbType && !selectedDbType?.comingSoon && !selectedDbType?.requiresUpgrade && isSpecSelectionReady);
	const isCreatePending = isCreating || createMutation.isPending;
	const footer = /* @__PURE__ */ jsx("div", {
		className: "flex w-full justify-end",
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			disabled: !canCreate || isCreatePending,
			onClick: () => void handleCreateDatabase(),
			"data-analytics-track": "manual",
			children: t("Create database")
		})
	});
	if (setupProgress) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create database"),
		fullscreen: true,
		useSidebar: false,
		skipInitialFieldFocus: true,
		fallbackPath: `/projects/${pid}/databases`,
		children: /* @__PURE__ */ jsx(CreateDatabaseSetupProgress, { progress: setupProgress })
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Create database"),
		fullscreen: true,
		maxWidth: "max-w-[1400px]",
		fallbackPath: `/projects/${pid}/databases`,
		footer,
		footerAlign: "right",
		sidebar: /* @__PURE__ */ jsx(CreateDatabaseSummary, {
			name,
			databaseId,
			dbType,
			selectedDbType: selectedDbType ?? null,
			showSpecs: Boolean(dbType && showSpecsForType),
			selectedSpec: selectedSpec ?? null,
			showDedicatedOptions,
			replicaCount: haReplicaCount,
			pitrEnabled,
			monthlyCost,
			showBackupPolicies: showBackupPoliciesSection && showNameForm,
			backupPoliciesLabel: backupPoliciesSummaryLabel,
			backupsEnabled: planBackupsEnabled,
			computeCreditsUsd,
			organizationPlan,
			canCreate
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-10",
			children: [
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("div", {
					className: "mb-8",
					children: /* @__PURE__ */ jsxs("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: [t("Choose database type"), /* @__PURE__ */ jsxs("span", {
							className: "ms-2 text-[13px] font-normal text-muted-foreground",
							children: [t("Pick an Appwrite database or a native SQL engine."), " "]
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
					children: visibleDbTypeGroups.map((group, groupIndex) => /* @__PURE__ */ jsxs("div", {
						className: cn("space-y-3", groupIndex > 0 && "border-t border-border pt-6 lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-6 flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: t(group.title)
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: group.title === "Native databases" && !regionSupportsDedicatedCompute ? regionUnavailableMessage : t(group.description)
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: group.options.map((opt) => {
								const optionMeta = dbTypeOptions.find((item) => item.id === opt.id) ?? opt;
								const requiresUpgrade = optionMeta.requiresUpgrade === true;
								const isUnavailable = Boolean(optionMeta.comingSoon) || requiresUpgrade;
								const cardClassName = cn("flex w-full items-start gap-4 rounded-xl border border-border bg-card/50 p-4 text-start transition-all", isUnavailable ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:border-border/80 hover:bg-card/60", dbType === opt.id && !isUnavailable && "border-primary ring-1 ring-primary/20 hover:border-primary");
								const cardContent = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: [
										opt.icon === "table" && /* @__PURE__ */ jsx(Table, { className: "h-5 w-5" }),
										opt.icon === "braces" && /* @__PURE__ */ jsx(Braces, { className: "h-5 w-5" }),
										opt.icon === "layers" && /* @__PURE__ */ jsx(Layers, { className: "h-5 w-5" }),
										opt.icon === "elephant" && /* @__PURE__ */ jsx(PostgresElephantIcon, { className: "h-5 w-5" }),
										opt.icon === "dolphin" && /* @__PURE__ */ jsx(MySQLDolphinIcon, { className: "h-5 w-5" })
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1 space-y-2",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[14px] font-medium text-foreground",
												children: opt.label
											}),
											(opt.id === "DocumentsDB" || opt.id === "VectorsDB") && /* @__PURE__ */ jsx(Badge, {
												variant: "info",
												className: "text-[10px] shrink-0",
												children: t("Beta")
											}),
											optionMeta.comingSoon ? /* @__PURE__ */ jsx(Badge, {
												variant: "inactive",
												className: "text-[10px] shrink-0",
												children: t("Coming soon")
											}) : null,
											requiresUpgrade ? /* @__PURE__ */ jsx(Badge, {
												variant: "inactive",
												className: "text-[10px] shrink-0",
												children: t("Upgrade")
											}) : null
										]
									}), requiresUpgrade ? /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] leading-5 text-muted-foreground",
										children: [
											t("Not available on your current plan."),
											" ",
											/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: project?.teamId }),
											" ",
											t("to unlock this database type.")
										]
									}) : /* @__PURE__ */ jsx("p", {
										className: "text-[12px] leading-5 text-muted-foreground",
										children: optionMeta.comingSoonMessage ? optionMeta.comingSoonMessage : t(opt.description)
									})]
								})] });
								if (isUnavailable) return /* @__PURE__ */ jsx("div", {
									className: cardClassName,
									children: cardContent
								}, opt.id);
								return /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => handleDbTypeSelect(opt),
									"data-analytics-track": "manual",
									className: cardClassName,
									children: cardContent
								}, opt.id);
							})
						})]
					}, group.title))
				})] }),
				showNameForm && /* @__PURE__ */ jsxs("section", {
					className: "pt-6 border-t border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-8",
						children: /* @__PURE__ */ jsxs("h2", {
							className: "text-[15px] font-semibold text-foreground",
							children: [t("Name your database"), /* @__PURE__ */ jsx("span", {
								className: "ms-2 text-[13px] font-normal text-muted-foreground",
								children: t("Choose a display name and optional custom ID.")
							})]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									htmlFor: "db-name",
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
									id: "db-name",
									type: "text",
									placeholder: t(getNewDatabaseNameForType(dbType)),
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (errors.name) setErrors((prev) => ({
											...prev,
											name: ""
										}));
									},
									className: errors.name ? "border-destructive" : ""
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.name
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "db-id",
									children: t("Database ID")
								}),
								/* @__PURE__ */ jsx(IdInput, {
									id: "db-id",
									value: databaseId,
									onChange: setDatabaseId,
									maxLength: 36,
									placeholder: t("Leave blank to auto-generate"),
									idFormat: isNativeDatabaseType(dbType) || dbType === "DocumentsDB" || dbType === "VectorsDB" ? "dedicated" : "default"
								}),
								errors.databaseId && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.databaseId
								})
							]
						})]
					})]
				}),
				dbType && showSpecsForType && /* @__PURE__ */ jsxs("section", {
					className: "pt-6",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "mb-4 text-[15px] font-semibold text-foreground",
							children: [t("Specifications"), /* @__PURE__ */ jsx("span", {
								className: "ms-2 text-[13px] font-normal text-muted-foreground",
								children: t("Select the compute and storage tier for your database.")
							})]
						}),
						computeCreditsUsd != null ? /* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[13px] text-muted-foreground",
								children: t("Compute credits")
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] font-semibold tabular-nums text-foreground",
								children: [
									formatDedicatedMonthlyPrice(computeCreditsUsd),
									" ",
									t("included")
								]
							})]
						}) : null,
						/* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border bg-card overflow-hidden",
							children: /* @__PURE__ */ jsx(RadioGroup, {
								value: specId ?? "",
								onValueChange: (value) => handleSpecSelect(value || null),
								className: "w-full",
								children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
									className: "hover:bg-transparent border-b border-border bg-muted/40",
									children: [
										/* @__PURE__ */ jsx(TableHead, { className: "w-[48px] px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider" }),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Tier")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: "CPU"
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Memory")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: t("Connections")
										}),
										/* @__PURE__ */ jsx(TableHead, {
											className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[140px]",
											children: t("Price")
										})
									]
								}) }), /* @__PURE__ */ jsx(TableBody, { children: specificationsLoading && selectableSpecs.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, {
									colSpan: 6,
									className: "px-4 py-8 text-center text-[13px] text-muted-foreground",
									children: t("Loading specifications…")
								}) }) : selectableSpecs.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsxs(TableCell, {
									colSpan: 6,
									className: "px-4 py-8 text-center text-[13px] text-muted-foreground",
									children: [
										t("Not available on your current plan."),
										" ",
										/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: project?.teamId }),
										" ",
										t("to unlock this database type.")
									]
								}) }) : selectableSpecs.map((spec) => {
									const locked = !!spec.comingSoon;
									const isSelected = selectedSpec?.id === spec.id;
									return /* @__PURE__ */ jsxs(TableRow, {
										className: cn("border-b border-border last:border-b-0 transition-colors", locked && "opacity-60", !locked && "cursor-pointer", !locked && !isSelected && "hover:bg-muted/40", isSelected && !locked && "bg-primary/5 hover:bg-primary/5"),
										onClick: () => !locked && handleSpecSelect(spec.id),
										"data-analytics-track": "manual",
										children: [
											/* @__PURE__ */ jsx(TableCell, {
												className: "w-[48px] px-4 py-3.5",
												children: /* @__PURE__ */ jsx(RadioGroupItem, {
													value: spec.id,
													disabled: locked,
													className: "cursor-pointer"
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3.5",
												children: /* @__PURE__ */ jsx("span", {
													className: "text-[13px] font-medium text-foreground",
													children: t(spec.label)
												})
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3.5 text-[13px] text-muted-foreground",
												children: spec.cpu
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3.5 text-[13px] text-muted-foreground",
												children: spec.memory
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3.5 text-[13px] tabular-nums text-muted-foreground",
												children: spec.connections
											}),
											/* @__PURE__ */ jsx(TableCell, {
												className: "px-4 py-3.5 text-end",
												children: locked ? /* @__PURE__ */ jsx(Badge, {
													variant: "inactive",
													className: "text-[10px] shrink-0",
													children: t("Upgrade")
												}) : isServerlessDatabaseSpecId(spec.id) ? /* @__PURE__ */ jsx(ServerlessSpecPrice, { plan: organizationPlan }) : /* @__PURE__ */ jsx("span", {
													className: "inline-block text-end text-[13px] font-semibold tabular-nums tracking-tight text-foreground",
													children: spec.price
												})
											})
										]
									}, spec.id);
								}) })] })
							})
						}),
						hasLockedDatabaseSpecifications(selectableSpecs) && /* @__PURE__ */ jsx("div", {
							className: "mt-3",
							children: /* @__PURE__ */ jsx(SpecificationsUpgradeNote, {
								orgId: project?.teamId,
								showContactSales: true
							})
						})
					]
				}),
				showDedicatedOptions && /* @__PURE__ */ jsx("section", {
					className: "pt-6 border-t border-border",
					children: /* @__PURE__ */ jsx(CreateDatabaseDedicatedOptions, {
						basePriceUsd,
						pricing: dedicatedPricing,
						replicaCount: haReplicaCount,
						onReplicaCountChange: setHaReplicaCount,
						pitrEnabled,
						onPitrEnabledChange: setPitrEnabled
					})
				}),
				showNameForm && showBackupPoliciesSection && /* @__PURE__ */ jsx("section", {
					className: "pt-6 border-t border-border",
					children: /* @__PURE__ */ jsx(CreateDatabaseBackupPolicies, {
						planBackupsEnabled,
						backupPoliciesLimit,
						selectedPresets: selectedBackupPresets,
						onSelectedPresetsChange: setSelectedBackupPresets,
						orgId: project?.teamId
					})
				})
			]
		})
	});
}
const Route$190 = createFileRoute("/_public/projects/$projectId/databases/create")({
	head: () => ({ meta: [{ title: pageTitle("Create database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		if (projectData?.teamId) await queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)).catch(() => null);
		if (projectSupportsDedicatedDatabaseCompute(projectData?.region)) await Promise.all(enabledDatabaseSpecificationsSources().map((source) => queryClient.ensureQueryData(databaseSpecificationsQueryOptions(projectId, source))));
	},
	codeSplitGroupings: [],
	component: CreateDatabaseWizardPage
});
function CreateDatabaseWizardPage() {
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const showWizard = features.dedicatedDbsSupport;
	useEffect(() => {
		if (!showWizard && projectId) navigate({
			to: "/projects/$projectId/databases",
			params: { projectId },
			search: { create: "database" },
			replace: true
		});
	}, [
		showWizard,
		projectId,
		navigate
	]);
	if (!showWizard) return null;
	return /* @__PURE__ */ jsx(CreateDatabaseWizardView, {});
}
const Route$191 = createFileRoute("/_public/projects/$projectId/databases/$databaseId")({ beforeLoad: async ({ params, context }) => {
	if (typeof window === "undefined") return;
	const { projectId, databaseId } = params;
	const { queryClient } = context;
	await queryClient.ensureQueryData(projectQueryOptions(projectId));
	const dbKind = await queryClient.ensureQueryData(productRouteKindQueryOptions(projectId, databaseId));
	if (!dbKind) throw redirect({
		to: "/projects/$projectId/databases",
		params: { projectId },
		replace: true
	});
	throw redirect({
		to: DATABASE_HOME_TO,
		params: {
			projectId,
			dbKind,
			databaseId
		},
		replace: true
	});
} });
var $$splitComponentImporter$116 = () => import("./projects._projectId.auth.templates-BXTeBxrW.js");
var EMAIL_TEMPLATE_TYPES = [
	ProjectEmailTemplateId.Verification,
	ProjectEmailTemplateId.MagicSession,
	ProjectEmailTemplateId.OtpSession,
	ProjectEmailTemplateId.Recovery,
	ProjectEmailTemplateId.Invitation,
	ProjectEmailTemplateId.MfaChallenge,
	ProjectEmailTemplateId.SessionAlert
];
const Route$192 = createFileRoute("/_public/projects/$projectId/auth/templates")({
	head: () => ({ meta: [{ title: pageTitle("Templates", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
				to: "/projects/$projectId/auth",
				params: { projectId },
				replace: true
			});
			await Promise.all([queryClient.fetchQuery({
				queryKey: ["localeCodes", "console"],
				queryFn: fetchLocaleCodes,
				staleTime: 300 * 1e3
			}), Promise.allSettled(EMAIL_TEMPLATE_TYPES.map((templateType) => queryClient.fetchQuery({
				queryKey: [
					"emailTemplate",
					projectId,
					templateType,
					ProjectEmailTemplateLocale.En
				],
				queryFn: () => fetchEmailTemplate(projectId, templateType, ProjectEmailTemplateLocale.En),
				staleTime: 30 * 1e3
			})))]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$116, "component")
});
var $$splitComponentImporter$115 = () => import("./projects._projectId.auth.teams-CoiI-IuC.js");
var DEFAULT_PAGE = 1;
var authTeamsSearchSchema = listSearchSchema.extend({
	teamsSearch: z.string().optional().catch(void 0),
	teamsQuery: z.string().optional().catch(void 0),
	teamsPage: z.coerce.number().int().min(1).optional().catch(void 0),
	teamsLimit: z.coerce.number().int().min(1).max(100).optional().catch(void 0)
});
const Route$193 = createFileRoute("/_public/projects/$projectId/auth/teams")({
	head: () => ({ meta: [{ title: pageTitle("Teams", "Auth") }] }),
	validateSearch: authTeamsSearchSchema,
	loader: async ({ params, context, search: routeSearch, location }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		const validatedSearch = routeSearch ?? authTeamsSearchSchema.parse(location.search && typeof location.search === "object" ? location.search : Object.fromEntries(searchParamsFromRouterLocation(location)));
		const teamsSearch = validatedSearch.teamsSearch?.trim() || void 0;
		const teamsPage = validatedSearch.teamsPage ?? DEFAULT_PAGE;
		const teamsLimit = validatedSearch.teamsLimit ?? 12;
		const teamsFilterMap = queryParamToMap(validatedSearch.teamsQuery ?? null);
		const teamsFilterQueries = teamsFilterMap.size > 0 ? Array.from(teamsFilterMap.values()) : void 0;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(teamsQueryOptions(projectId, teamsPage - 1, teamsLimit, teamsSearch, teamsFilterQueries));
	},
	component: lazyRouteComponent($$splitComponentImporter$115, "component")
});
var $$splitComponentImporter$114 = () => import("./projects._projectId.auth.social-providers-DgVD3Fqq.js");
const Route$194 = createFileRoute("/_public/projects/$projectId/auth/social-providers")({
	head: () => ({ meta: [{ title: pageTitle("Social providers", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const [catalog, providerList] = await Promise.all([queryClient.ensureQueryData(consoleOAuth2CatalogQueryOptions()), queryClient.ensureQueryData(projectOAuth2ProvidersQueryOptions(projectId))]);
		return {
			catalog,
			providerList
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$114, "component")
});
var $$splitComponentImporter$113 = () => import("./projects._projectId.auth.settings-ENYaJ0SU.js");
const Route$195 = createFileRoute("/_public/projects/$projectId/auth/settings")({
	head: () => ({ meta: [{ title: pageTitle("Settings", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$113, "component")
});
const Route$196 = createFileRoute("/_public/projects/$projectId/auth/security")({ beforeLoad: ({ params }) => {
	if (typeof window === "undefined") return;
	const { projectId } = params;
	if (!projectId) return;
	throw redirect({
		to: "/projects/$projectId/auth/settings",
		params: { projectId },
		replace: true
	});
} });
var $$splitComponentImporter$112 = () => import("./projects._projectId.auth.policies-B-mPM0DQ.js");
function isPoliciesIndexPath(pathname) {
	return /\/auth\/policies\/?$/.test(pathname);
}
const Route$197 = createFileRoute("/_public/projects/$projectId/auth/policies")({
	beforeLoad: ({ location, params }) => {
		if (isPoliciesIndexPath(location.pathname)) throw redirect({
			to: "/projects/$projectId/auth/policies/sessions",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$112, "component")
});
var $$splitComponentImporter$111 = () => import("./projects._projectId.auth.oauth2-server-DxTTcgzd.js");
function isOAuth2ServerIndexPath(pathname) {
	return /\/auth\/oauth2-server\/?$/.test(pathname);
}
const Route$198 = createFileRoute("/_public/projects/$projectId/auth/oauth2-server")({
	head: () => ({ meta: [{ title: pageTitle("Server", "OAuth2 server") }] }),
	loader: async ({ params, context, location }) => {
		if (typeof window === "undefined") return void 0;
		if (!isOAuth2ServerIndexPath(location.pathname)) return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (!await canAccessProjectOAuth2Server(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
	},
	component: lazyRouteComponent($$splitComponentImporter$111, "component")
});
var $$splitComponentImporter$110 = () => import("./organizations._orgId.settings.oauth-apps-qIpoJpSC.js");
const Route$201 = createFileRoute("/_public/organizations/$orgId/settings/oauth-apps")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().oauthApps) throw redirect({
			to: "/organizations/$orgId/settings",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("OAuth apps", "Organization") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		await queryClient.prefetchQuery({
			queryKey: ["organizations", "console"],
			queryFn: fetchOrganizations,
			staleTime: 300 * 1e3
		});
		if (orgId) await queryClient.ensureQueryData(organizationAppsQueryOptions(orgId));
	},
	component: lazyRouteComponent($$splitComponentImporter$110, "component")
});
var $$splitComponentImporter$109 = () => import("./organizations._orgId.settings.members-T3jLH0nm.js");
var MEMBERSHIPS_PER_PAGE = 25;
const Route$202 = createFileRoute("/_public/organizations/$orgId/settings/members")({
	head: () => ({ meta: [{ title: pageTitle("Members", "Organization") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		await queryClient.prefetchQuery(organizationsQueryOptions());
		if (orgId) await queryClient.fetchQuery({
			queryKey: [
				"memberships",
				"organization",
				orgId,
				0,
				MEMBERSHIPS_PER_PAGE,
				""
			],
			queryFn: () => fetchOrganizationMemberships(orgId, 0, MEMBERSHIPS_PER_PAGE, ""),
			staleTime: 30 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$109, "component")
});
const Route$203 = createFileRoute("/_public/organizations/$orgId/settings/danger-zone")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/organizations/$orgId/settings",
		params: { orgId: params.orgId }
	});
} });
var $$splitComponentImporter$108 = () => import("./organizations._orgId.settings.compliance-DutxL3Ep.js");
const Route$204 = createFileRoute("/_public/organizations/$orgId/settings/compliance")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().compliance) throw redirect({
			to: "/organizations/$orgId/settings",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("Compliance", "Organization") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		await queryClient.prefetchQuery({
			queryKey: ["organizations", "console"],
			queryFn: fetchOrganizations,
			staleTime: 300 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$108, "component")
});
var $$splitComponentImporter$107 = () => import("./organizations._orgId.settings.billing-Co0CsxoJ.js");
var INVOICES_PER_PAGE = 5;
var CREDITS_PER_PAGE = 5;
const Route$205 = createFileRoute("/_public/organizations/$orgId/settings/billing")({
	head: () => ({ meta: [{ title: pageTitle("Billing", "Organization") }] }),
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().billing) throw redirect({
			to: "/organizations/$orgId/settings",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { orgId } = params;
		const { queryClient } = context;
		if (!orgId) return;
		queryClient.prefetchQuery(organizationsQueryOptions()).catch(() => {});
		const [orgData] = await Promise.all([queryClient.ensureQueryData(organizationQueryOptions(orgId))]);
		const canFetchBillingInvoices = canSeeOrganizationBilling(await resolveOrganizationAccess(queryClient, orgId));
		await Promise.all([
			queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)),
			...canFetchBillingInvoices ? [queryClient.ensureQueryData(organizationInvoicesQueryOptions(orgId, 0, INVOICES_PER_PAGE))] : [],
			queryClient.ensureQueryData(organizationCreditsQueryOptions(orgId, 0, 1)),
			queryClient.ensureQueryData(organizationCreditsQueryOptions(orgId, 0, CREDITS_PER_PAGE)),
			queryClient.ensureQueryData(paymentMethodsQueryOptions()),
			queryClient.ensureQueryData(billingAddressesQueryOptions())
		]);
		if (orgData?.billingAggregationId) queryClient.prefetchQuery(organizationBillingAggregationQueryOptions(orgId, orgData.billingAggregationId, 10, 0)).catch(() => void 0);
		const optionalPrefetches = [];
		if (orgData?.paymentMethodId) optionalPrefetches.push(queryClient.ensureQueryData(organizationPaymentMethodQueryOptions(orgId, orgData.paymentMethodId)).catch(() => {}));
		if (orgData?.backupPaymentMethodId) optionalPrefetches.push(queryClient.ensureQueryData(organizationPaymentMethodQueryOptions(orgId, orgData.backupPaymentMethodId)).catch(() => {}));
		if (orgData?.billingAddressId) optionalPrefetches.push(queryClient.ensureQueryData(billingAddressQueryOptions(orgData.billingAddressId)).catch(() => {}));
		if (optionalPrefetches.length > 0) await Promise.all(optionalPrefetches);
	},
	component: lazyRouteComponent($$splitComponentImporter$107, "component")
});
var $$splitComponentImporter$106 = () => import("./organizations._orgId.settings.api-keys-BfUSjLys.js");
const Route$206 = createFileRoute("/_public/organizations/$orgId/settings/api-keys")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().orgApiKeys) throw redirect({
			to: "/organizations/$orgId/settings",
			params: { orgId: params.orgId },
			replace: true
		});
	},
	head: () => ({ meta: [{ title: pageTitle("API keys", "Organization") }] }),
	loader: async ({ context }) => {
		if (typeof window === "undefined") return;
		const { queryClient } = context;
		await queryClient.prefetchQuery({
			queryKey: ["organizations", "console"],
			queryFn: fetchOrganizations,
			staleTime: 300 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$106, "component")
});
var $$splitComponentImporter$105 = () => import("./organizations._orgId.domains._domainId-jpAzhDvW.js");
const Route$209 = createFileRoute("/_public/organizations/$orgId/domains/$domainId")({ component: lazyRouteComponent($$splitComponentImporter$105, "component") });
var $$splitComponentImporter$104 = () => import("./organizations._orgId.agent.settings-Dzl5hBQW.js");
const Route$211 = createFileRoute("/_public/organizations/$orgId/agent/settings")({ component: lazyRouteComponent($$splitComponentImporter$104, "component") });
var $$splitComponentImporter$103 = () => import("./organizations._orgId.agent.automations-D5oGiuu8.js");
const Route$212 = createFileRoute("/_public/organizations/$orgId/agent/automations")({ component: lazyRouteComponent($$splitComponentImporter$103, "component") });
var $$splitComponentImporter$102 = () => import("./projects._projectId.sites.create.index-DayRVYSu.js");
const Route$216 = createFileRoute("/_public/projects/$projectId/sites/create/")({
	head: () => ({ meta: [{ title: pageTitle("Create", "Sites") }] }),
	component: lazyRouteComponent($$splitComponentImporter$102, "component")
});
var $$splitComponentImporter$101 = () => import("./projects._projectId.sites._siteId.index-CqBYj4_v.js");
var DEPLOYMENTS_SELECT$1 = [Query.select([
	"buildSize",
	"sourceSize",
	"totalSize",
	"buildDuration",
	"status",
	"type",
	"resourceId",
	"providerRepositoryUrl",
	"providerRepositoryOwner",
	"providerRepositoryName",
	"providerBranchUrl",
	"providerBranch",
	"providerCommitMessage",
	"providerCommitHash",
	"providerCommitUrl",
	"providerCommitAuthor",
	"providerCommitAuthorUrl",
	"screenshotDark",
	"screenshotLight",
	"$createdAt"
])];
const Route$217 = createFileRoute("/_public/projects/$projectId/sites/$siteId/")({
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		try {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			const { page, filterQueries } = parseListSearch(routeSearch, {
				page: 1,
				limit: 10
			});
			const pageIndex = page - 1;
			const hasFilterQuery = !!filterQueries?.length;
			const site = await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
			const criticalPromises = [hasFilterQuery ? Promise.resolve(void 0) : queryClient.ensureQueryData(siteDeploymentsQueryOptions(projectId, siteId, pageIndex, 10, DEPLOYMENTS_SELECT$1))];
			if (site?.deploymentId) criticalPromises.push(queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, site.deploymentId)), queryClient.ensureQueryData(deploymentProxyRulesQueryOptions(projectId, siteId, site.deploymentId)));
			await Promise.all(criticalPromises);
		} catch (error) {
			console.warn("Failed to fetch site deployments in loader:", error);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$101, "component")
});
var $$splitComponentImporter$100 = () => import("./projects._projectId.settings.domains.index-Dz9s-9jU.js");
const Route$219 = createFileRoute("/_public/projects/$projectId/settings/domains/")({
	head: () => ({ meta: [{ title: pageTitle("Domains", "Settings") }] }),
	component: lazyRouteComponent($$splitComponentImporter$100, "component")
});
var $$splitComponentImporter$99 = () => import("./projects._projectId.messaging.topics.index-BuXrQj_c.js");
const Route$220 = createFileRoute("/_public/projects/$projectId/messaging/topics/")({
	head: () => ({ meta: [{ title: pageTitle("Topics", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			const projectData = await queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3
			});
			await Promise.all([
				queryClient.ensureQueryData(topicsQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(messagesQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(providersQueryOptions(projectId, 0, 10, "")),
				projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()
			]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$99, "component")
});
var $$splitComponentImporter$98 = () => import("./projects._projectId.messaging.providers.index-DVZhppGl.js");
const Route$221 = createFileRoute("/_public/projects/$projectId/messaging/providers/")({
	head: () => ({ meta: [{ title: pageTitle("Providers", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (projectId) {
			const projectData = await queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3
			});
			await Promise.all([
				queryClient.ensureQueryData(providersQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(messagesQueryOptions(projectId, 0, 10, "")),
				queryClient.ensureQueryData(topicsQueryOptions(projectId, 0, 10, "")),
				projectData?.teamId ? queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)) : Promise.resolve()
			]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$98, "component")
});
var $$splitComponentImporter$97 = () => import("./projects._projectId.functions.create.index-DsqbSYnO.js");
const Route$223 = createFileRoute("/_public/projects/$projectId/functions/create/")({
	head: () => ({ meta: [{ title: pageTitle("Create", "Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter$97, "component")
});
var $$splitComponentImporter$96 = () => import("./organizations._orgId.apps._appId.index-CkyuC1vr.js");
const Route$227 = createFileRoute("/_public/organizations/$orgId/apps/$appId/")({ component: lazyRouteComponent($$splitComponentImporter$96, "component") });
const Route$228 = createFileRoute("/_public/organizations/$orgId/agent/settings/")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/organizations/$orgId/agent/settings/models",
		params: { orgId: params.orgId },
		replace: true
	});
} });
var $$splitComponentImporter$95 = () => import("./organizations._orgId.agent.automations.index-EDDQklmA.js");
const Route$229 = createFileRoute("/_public/organizations/$orgId/agent/automations/")({ component: lazyRouteComponent($$splitComponentImporter$95, "component") });
const Route$230 = createFileRoute("/_public/projects/$projectId/usage/$categoryId/$metricId")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/usage/$categoryId",
		params: {
			projectId: params.projectId,
			categoryId: params.categoryId
		},
		replace: true
	});
} });
var $$splitComponentImporter$94 = () => import("./projects._projectId.storage._bucketId.settings-B5ru6npg.js");
const Route$231 = createFileRoute("/_public/projects/$projectId/storage/$bucketId/settings")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.bucket?.name ?? "Bucket", "Storage") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, bucketId } = params;
		const { queryClient } = context;
		if (!projectId || !bucketId) return;
		if (!await canAccessBucketSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			replace: true
		});
		await queryClient.fetchQuery({
			queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			],
			queryFn: () => fetchBucket(projectId, bucketId),
			staleTime: 30 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$94, "component")
});
var $$splitComponentImporter$93 = () => import("./projects._projectId.storage._bucketId.security-D45ULYU1.js");
const Route$232 = createFileRoute("/_public/projects/$projectId/storage/$bucketId/security")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.bucket?.name ?? "Bucket", "Storage") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, bucketId } = params;
		const { queryClient } = context;
		if (!projectId || !bucketId) return;
		if (!await canAccessBucketSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId
			},
			replace: true
		});
		await queryClient.fetchQuery({
			queryKey: [
				"bucket",
				"project",
				projectId,
				bucketId
			],
			queryFn: () => fetchBucket(projectId, bucketId),
			staleTime: 30 * 1e3
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$93, "component")
});
var $$splitComponentImporter$92 = () => import("./projects._projectId.sites.create.manual-cC3aVLHs.js");
const Route$233 = createFileRoute("/_public/projects/$projectId/sites/create/manual")({
	head: () => ({ meta: [{ title: pageTitle("Create manually", "Sites") }] }),
	component: lazyRouteComponent($$splitComponentImporter$92, "component")
});
var $$splitComponentImporter$91 = () => import("./projects._projectId.sites.create.finish-DAlzZlRU.js");
var searchSchema = z.object({
	siteId: z.string().optional(),
	deploymentId: z.string().optional()
});
const Route$234 = createFileRoute("/_public/projects/$projectId/sites/create/finish")({
	head: () => ({ meta: [{ title: pageTitle("Create", "Sites") }] }),
	validateSearch: searchSchema,
	beforeLoad: ({ params, search }) => {
		throw redirect({
			to: "/projects/$projectId/sites/create/deploying",
			params: { projectId: params.projectId },
			search: {
				siteId: search.siteId,
				deploymentId: search.deploymentId
			},
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$91, "component")
});
var $$splitComponentImporter$90 = () => import("./projects._projectId.sites._siteId.variables-BCwORbMr.js");
const Route$237 = createFileRoute("/_public/projects/$projectId/sites/$siteId/variables")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		if (!await canAccessSiteSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId
			},
			replace: true
		});
		await Promise.all([
			queryClient.ensureQueryData(siteQueryOptions(projectId, siteId)),
			queryClient.ensureQueryData(projectQueryOptions(projectId)),
			queryClient.ensureQueryData(projectVariablesQueryOptions(projectId)),
			queryClient.ensureQueryData(siteVariablesQueryOptions(projectId, siteId))
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$90, "component")
});
var $$splitComponentImporter$89 = () => import("./projects._projectId.sites._siteId.usage-0g59--J8.js");
const Route$238 = createFileRoute("/_public/projects/$projectId/sites/$siteId/usage")({
	beforeLoad: ({ params }) => {
		if (typeof window !== "undefined" && !getActiveProfileFeatures().usageStats) throw redirect({
			to: "/projects/$projectId/sites/$siteId",
			params,
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		const [project, account] = await Promise.all([
			queryClient.ensureQueryData(projectQueryOptions(projectId)),
			queryClient.ensureQueryData(consoleAccountQueryOptions()),
			queryClient.ensureQueryData(siteQueryOptions(projectId, siteId))
		]);
		const plan = project.teamId ? await queryClient.ensureQueryData(organizationPlanQueryOptions(project.teamId)).catch(() => null) : null;
		const { dateRange, chartInterval } = resolveUsageChartFiltersFromPrefs(account.prefs, plan);
		await Promise.all([queryClient.ensureQueryData({
			...siteExecutionsForSiteQueryOptions(projectId, siteId, dateRange, chartInterval),
			revalidateIfStale: true
		}), queryClient.ensureQueryData({
			...siteGbHoursForSiteQueryOptions(projectId, siteId, dateRange, chartInterval),
			revalidateIfStale: true
		})]);
	},
	component: lazyRouteComponent($$splitComponentImporter$89, "component")
});
var $$splitComponentImporter$88 = () => import("./projects._projectId.sites._siteId.settings-CyN5aNDB.js");
const Route$239 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		if (!await canAccessSiteSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/sites/$siteId",
			params: {
				projectId,
				siteId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
		await Promise.all([
			queryClient.ensureQueryData(projectVariablesQueryOptions(projectId)),
			queryClient.ensureQueryData(siteVariablesQueryOptions(projectId, siteId)),
			queryClient.ensureQueryData(siteFrameworksQueryOptions(projectId)),
			queryClient.ensureQueryData(vcsInstallationsQueryOptions(projectId, 0, 10)),
			queryClient.ensureQueryData(siteSpecificationsQueryOptions(projectId, SpecificationType.Runtimes)).catch(() => {}),
			queryClient.ensureQueryData(siteSpecificationsQueryOptions(projectId, SpecificationType.Builds)).catch(() => {})
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$88, "component")
});
var $$splitComponentImporter$87 = () => import("./projects._projectId.sites._siteId.domains-B8LzdoR4.js");
const Route$241 = createFileRoute("/_public/projects/$projectId/sites/$siteId/domains")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		const projectData = await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
		await Promise.all([queryClient.ensureQueryData(siteDomainsQueryOptions(projectId, siteId, 0, 25, "")), projectData?.teamId ? queryClient.ensureQueryData(organizationDomainsQueryOptions(projectData.teamId)).catch(() => {}) : Promise.resolve()]);
	},
	component: lazyRouteComponent($$splitComponentImporter$87, "component")
});
var $$splitComponentImporter$86 = () => import("./projects._projectId.sites._siteId.deployments-D_Il4ptX.js");
const Route$242 = createFileRoute("/_public/projects/$projectId/sites/$siteId/deployments")({ component: lazyRouteComponent($$splitComponentImporter$86, "component") });
var $$splitComponentImporter$85 = () => import("./projects._projectId.settings.migrations.import-D5q_4Amd.js");
const Route$243 = createFileRoute("/_public/projects/$projectId/settings/migrations/import")({
	head: () => ({ meta: [{ title: pageTitle("Import data", "Migrations", "Settings") }] }),
	component: lazyRouteComponent($$splitComponentImporter$85, "component")
});
var COMMON_NAME_FIELD = {
	key: "name",
	label: "Name",
	type: "text",
	required: true,
	placeholder: "Production sender"
};
var COMMON_FROM_EMAIL_FIELDS = [{
	key: "fromName",
	label: "Sender name",
	type: "text",
	placeholder: "Acme Inc."
}, {
	key: "fromEmail",
	label: "Sender email",
	type: "email",
	placeholder: "no-reply@example.com"
}];
var PHONE_FROM_FIELD = {
	key: "from",
	label: "Sender phone",
	type: "text",
	placeholder: "+15551234567",
	helper: "Include the leading + and country code."
};
var PROVIDERS = [
	{
		id: "smtp",
		name: "SMTP",
		type: "email",
		description: "Connect any SMTP server.",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "host",
				label: "Host",
				type: "text",
				required: true,
				placeholder: "smtp.example.com"
			},
			{
				key: "port",
				label: "Port",
				type: "number",
				defaultValue: 587
			},
			{
				key: "encryption",
				label: "Encryption",
				type: "select",
				defaultValue: SmtpEncryption.Tls,
				options: [
					{
						value: SmtpEncryption.None,
						label: "None"
					},
					{
						value: SmtpEncryption.Ssl,
						label: "SSL"
					},
					{
						value: SmtpEncryption.Tls,
						label: "TLS"
					}
				]
			},
			{
				key: "username",
				label: "Username",
				type: "text"
			},
			{
				key: "password",
				label: "Password",
				type: "password"
			},
			...COMMON_FROM_EMAIL_FIELDS
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createSMTPProvider({
			providerId,
			name: String(v.name).trim(),
			host: String(v.host).trim(),
			port: parseInt(String(v.port), 10) || 587,
			username: optString(v.username),
			password: optString(v.password),
			encryption: v.encryption ?? SmtpEncryption.Tls,
			autoTLS: true,
			fromName: optString(v.fromName),
			fromEmail: optString(v.fromEmail),
			enabled: true
		})
	},
	{
		id: "resend",
		name: "Resend",
		type: "email",
		description: "Send transactional email through Resend.",
		icon: "resend.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "apiKey",
				label: "API key",
				type: "password",
				required: true
			},
			...COMMON_FROM_EMAIL_FIELDS
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createResendProvider({
			providerId,
			name: String(v.name).trim(),
			apiKey: optString(v.apiKey),
			fromName: optString(v.fromName),
			fromEmail: optString(v.fromEmail),
			enabled: true
		})
	},
	{
		id: "sendgrid",
		name: "SendGrid",
		type: "email",
		description: "Send transactional email through SendGrid.",
		icon: "sendgrid.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "apiKey",
				label: "API key",
				type: "password",
				required: true
			},
			...COMMON_FROM_EMAIL_FIELDS
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createSendgridProvider({
			providerId,
			name: String(v.name).trim(),
			apiKey: optString(v.apiKey),
			fromName: optString(v.fromName),
			fromEmail: optString(v.fromEmail),
			enabled: true
		})
	},
	{
		id: "mailgun",
		name: "Mailgun",
		type: "email",
		description: "Send transactional email through Mailgun.",
		icon: "mailgun.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "apiKey",
				label: "API key",
				type: "password",
				required: true
			},
			{
				key: "domain",
				label: "Domain",
				type: "text",
				required: true,
				placeholder: "mg.example.com"
			},
			{
				key: "isEuRegion",
				label: "EU region",
				type: "switch",
				defaultValue: false,
				helper: "Enable when your Mailgun account is hosted in the EU."
			},
			...COMMON_FROM_EMAIL_FIELDS
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createMailgunProvider({
			providerId,
			name: String(v.name).trim(),
			apiKey: optString(v.apiKey),
			domain: optString(v.domain),
			isEuRegion: Boolean(v.isEuRegion),
			fromName: optString(v.fromName),
			fromEmail: optString(v.fromEmail),
			enabled: true
		})
	},
	{
		id: "twilio",
		name: "Twilio",
		type: "sms",
		description: "Send SMS through Twilio.",
		icon: "twilio.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "accountSid",
				label: "Account SID",
				type: "text",
				required: true
			},
			{
				key: "authToken",
				label: "Auth token",
				type: "password",
				required: true
			},
			PHONE_FROM_FIELD
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createTwilioProvider({
			providerId,
			name: String(v.name).trim(),
			accountSid: optString(v.accountSid),
			authToken: optString(v.authToken),
			from: optString(v.from),
			enabled: true
		})
	},
	{
		id: "vonage",
		name: "Vonage",
		type: "sms",
		description: "Send SMS through Vonage.",
		icon: "vonage.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "apiKey",
				label: "API key",
				type: "text",
				required: true
			},
			{
				key: "apiSecret",
				label: "API secret",
				type: "password",
				required: true
			},
			PHONE_FROM_FIELD
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createVonageProvider({
			providerId,
			name: String(v.name).trim(),
			apiKey: optString(v.apiKey),
			apiSecret: optString(v.apiSecret),
			from: optString(v.from),
			enabled: true
		})
	},
	{
		id: "msg91",
		name: "MSG91",
		type: "sms",
		description: "Send SMS through MSG91.",
		icon: "msg91.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "authKey",
				label: "Auth key",
				type: "password",
				required: true
			},
			{
				key: "senderId",
				label: "Sender ID",
				type: "text"
			},
			{
				key: "templateId",
				label: "Template ID",
				type: "text"
			}
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createMsg91Provider({
			providerId,
			name: String(v.name).trim(),
			authKey: optString(v.authKey),
			senderId: optString(v.senderId),
			templateId: optString(v.templateId),
			enabled: true
		})
	},
	{
		id: "telesign",
		name: "Telesign",
		type: "sms",
		description: "Send SMS through Telesign.",
		icon: "telesign.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "customerId",
				label: "Customer ID",
				type: "text",
				required: true
			},
			{
				key: "apiKey",
				label: "API key",
				type: "password",
				required: true
			},
			PHONE_FROM_FIELD
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createTelesignProvider({
			providerId,
			name: String(v.name).trim(),
			customerId: optString(v.customerId),
			apiKey: optString(v.apiKey),
			from: optString(v.from),
			enabled: true
		})
	},
	{
		id: "textmagic",
		name: "Textmagic",
		type: "sms",
		description: "Send SMS through Textmagic.",
		icon: "textmagic.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "username",
				label: "Username",
				type: "text",
				required: true
			},
			{
				key: "apiKey",
				label: "API key",
				type: "password",
				required: true
			},
			PHONE_FROM_FIELD
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createTextmagicProvider({
			providerId,
			name: String(v.name).trim(),
			username: optString(v.username),
			apiKey: optString(v.apiKey),
			from: optString(v.from),
			enabled: true
		})
	},
	{
		id: "fcm",
		name: "Firebase Cloud Messaging",
		type: "push",
		description: "Send push notifications via FCM (Android, iOS, web).",
		icon: "firebase.svg",
		fields: [COMMON_NAME_FIELD, {
			key: "serviceAccountJSON",
			label: "Service account JSON",
			type: "json",
			required: true,
			helper: "Paste the contents of the FCM service account JSON file from the Firebase console."
		}],
		submit: (projectSdk, providerId, v) => {
			const parsed = parseJson(v.serviceAccountJSON, "Service account JSON");
			return projectSdk.messaging.createFCMProvider({
				providerId,
				name: String(v.name).trim(),
				serviceAccountJSON: parsed,
				enabled: true
			});
		}
	},
	{
		id: "apns",
		name: "Apple Push Notifications",
		type: "push",
		description: "Send push notifications via APNS (iOS).",
		icon: "apple.svg",
		fields: [
			COMMON_NAME_FIELD,
			{
				key: "authKey",
				label: "Auth key",
				type: "textarea",
				required: true,
				placeholder: "-----BEGIN PRIVATE KEY-----\n…\n-----END PRIVATE KEY-----"
			},
			{
				key: "authKeyId",
				label: "Auth key ID",
				type: "text",
				required: true
			},
			{
				key: "teamId",
				label: "Team ID",
				type: "text",
				required: true
			},
			{
				key: "bundleId",
				label: "Bundle ID",
				type: "text",
				required: true,
				placeholder: "com.example.app"
			},
			{
				key: "sandbox",
				label: "Use sandbox environment",
				type: "switch",
				defaultValue: false,
				helper: "Enable for development builds, disable for production."
			}
		],
		submit: (projectSdk, providerId, v) => projectSdk.messaging.createAPNSProvider({
			providerId,
			name: String(v.name).trim(),
			authKey: optString(v.authKey),
			authKeyId: optString(v.authKeyId),
			teamId: optString(v.teamId),
			bundleId: optString(v.bundleId),
			sandbox: Boolean(v.sandbox),
			enabled: true
		})
	}
];
var TYPE_LABEL = {
	email: "Email",
	sms: "SMS",
	push: "Push"
};
var TYPE_ICON = {
	email: Mail,
	sms: Phone,
	push: Bell
};
function optString(v) {
	if (typeof v !== "string") return void 0;
	const trimmed = v.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
function parseJson(value, label) {
	if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
	try {
		return JSON.parse(value);
	} catch {
		throw new Error(`${label} must be valid JSON`);
	}
}
function defaultsForProvider(p) {
	const out = {};
	for (const f of p.fields) out[f.key] = f.defaultValue ?? (f.type === "switch" ? false : f.type === "number" ? "" : "");
	return out;
}
function isFieldFilled(field, value) {
	if (!field.required) return true;
	if (field.type === "switch") return true;
	if (typeof value === "string") return value.trim().length > 0;
	if (typeof value === "number") return Number.isFinite(value);
	return value != null;
}
function CreateProviderWizardView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const pid = projectId;
	const [step, setStep] = useState("pick");
	const [selectedId, setSelectedId] = useState(null);
	const [values, setValues] = useState({});
	const selected = useMemo(() => PROVIDERS.find((p) => p.id === selectedId) ?? null, [selectedId]);
	const grouped = useMemo(() => {
		const out = {
			email: [],
			sms: [],
			push: []
		};
		for (const p of PROVIDERS) out[p.type].push(p);
		return out;
	}, []);
	useEffect(() => {
		if (step === "configure" && !selected) setStep("pick");
	}, [step, selected]);
	const mutation = useMutation({
		mutationFn: async () => {
			if (!selected) throw new Error("No provider selected");
			const projectSdk = sdk.forProject(pid);
			return selected.submit(projectSdk, ID.unique(), values);
		},
		onSuccess: async (provider) => {
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				pid
			] });
			toast.success(`${t("Provider")} ${selected?.name} ${t("created successfully")}`);
			navigate({
				to: "/projects/$projectId/messaging/providers/$providerId",
				params: {
					projectId: pid,
					providerId: provider.$id
				}
			});
		},
		onError: (e) => toast.error(getErrorMessage(e) || t("Could not create provider"))
	});
	const handlePickProvider = (p) => {
		setSelectedId(p.id);
		setValues(defaultsForProvider(p));
		setStep("configure");
	};
	const handleBackToPick = () => {
		setStep("pick");
	};
	const fallbackPath = `/projects/${pid}/messaging/providers`;
	const canSubmit = selected != null && !mutation.isPending && selected.fields.every((f) => isFieldFilled(f, values[f.key]));
	const title = selected && step === "configure" ? `${t("Configure")} ${selected.name}` : t("Add provider");
	const footer = step === "configure" && selected ? /* @__PURE__ */ jsx("div", {
		className: "flex w-full justify-end",
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			disabled: !canSubmit,
			onClick: () => mutation.mutate(),
			children: t("Create provider")
		})
	}) : void 0;
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title,
		fullscreen: true,
		useSidebar: false,
		maxWidth: step === "configure" ? "max-w-2xl" : "max-w-4xl",
		fallbackPath,
		showBackButton: step === "configure",
		onBack: handleBackToPick,
		footer,
		footerAlign: "right",
		children: [step === "pick" && /* @__PURE__ */ jsx(ProviderPicker, {
			grouped,
			onPick: handlePickProvider
		}), step === "configure" && selected && /* @__PURE__ */ jsx(ProviderForm, {
			provider: selected,
			values,
			onChange: (key, value) => setValues((prev) => ({
				...prev,
				[key]: value
			}))
		})]
	});
}
function ProviderPicker({ grouped, onPick }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-10",
		children: [
			"email",
			"sms",
			"push"
		].map((type) => {
			const TypeIcon = TYPE_ICON[type];
			return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(TypeIcon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("h2", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t(TYPE_LABEL[type])
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: grouped[type].map((p) => /* @__PURE__ */ jsx(ProviderCard, {
					provider: p,
					onPick
				}, p.id))
			})] }, type);
		})
	});
}
function ProviderCard({ provider, onPick }) {
	const t = useT();
	const TypeIcon = TYPE_ICON[provider.type];
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => onPick(provider),
		className: cn("group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-border bg-card/50 p-4 text-start transition-all", "hover:border-border/80 hover:bg-card/60", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
				children: provider.icon ? /* @__PURE__ */ jsx("img", {
					src: `/icons/${provider.icon}`,
					alt: provider.name,
					className: cn("h-5 w-5", PUBLIC_ICON_MUTED_CLASSES)
				}) : /* @__PURE__ */ jsx(TypeIcon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[14px] font-medium text-foreground truncate",
					children: provider.name
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground truncate",
					children: t(provider.description)
				})]
			}),
			/* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground/60 group-hover:text-foreground" })
		]
	});
}
function ProviderForm({ provider, values, onChange }) {
	return /* @__PURE__ */ jsx("div", {
		className: "w-full space-y-4",
		children: provider.fields.map((field) => /* @__PURE__ */ jsx(FieldRenderer, {
			field,
			value: values[field.key],
			onChange: (v) => onChange(field.key, v)
		}, field.key))
	});
}
function FieldRenderer({ field, value, onChange }) {
	const t = useT();
	const id = `provider-field-${field.key}`;
	if (field.type === "switch") return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0 space-y-0.5",
			children: [/* @__PURE__ */ jsx(Label, {
				htmlFor: id,
				children: t(field.label)
			}), field.helper && /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: t(field.helper)
			})]
		}), /* @__PURE__ */ jsx(Switch, {
			id,
			checked: Boolean(value),
			onCheckedChange: (c) => onChange(c)
		})]
	});
	if (field.type === "select") {
		const stringValue = typeof value === "string" ? value : String(field.defaultValue ?? "");
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsxs(Label, {
					htmlFor: id,
					children: [t(field.label), field.required && /* @__PURE__ */ jsx(RequiredMark, {})]
				}),
				/* @__PURE__ */ jsxs(Select, {
					value: stringValue,
					onValueChange: (v) => onChange(v),
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id,
						children: /* @__PURE__ */ jsx(SelectValue, {})
					}), /* @__PURE__ */ jsx(SelectContent, { children: (field.options ?? []).map((o) => /* @__PURE__ */ jsx(SelectItem, {
						value: o.value,
						children: t(o.label)
					}, o.value)) })]
				}),
				field.helper && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: t(field.helper)
				})
			]
		});
	}
	if (field.type === "textarea" || field.type === "json") return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs(Label, {
				htmlFor: id,
				children: [t(field.label), field.required && /* @__PURE__ */ jsx(RequiredMark, {})]
			}),
			/* @__PURE__ */ jsx(Textarea, {
				id,
				value: typeof value === "string" ? value : "",
				onChange: (e) => onChange(e.target.value),
				placeholder: field.placeholder,
				className: "min-h-[140px] font-mono text-[12px]"
			}),
			field.helper && /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: t(field.helper)
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsxs(Label, {
				htmlFor: id,
				children: [t(field.label), field.required && /* @__PURE__ */ jsx(RequiredMark, {})]
			}),
			/* @__PURE__ */ jsx(Input, {
				id,
				type: field.type === "password" ? "password" : field.type === "email" ? "email" : field.type === "number" ? "number" : "text",
				value: typeof value === "string" || typeof value === "number" ? value : "",
				onChange: (e) => onChange(e.target.value),
				placeholder: field.placeholder
			}),
			field.helper && /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: t(field.helper)
			})
		]
	});
}
function RequiredMark() {
	return /* @__PURE__ */ jsx("span", {
		className: "ms-0.5 text-destructive",
		children: "*"
	});
}
const Route$246 = createFileRoute("/_public/projects/$projectId/messaging/providers/create")({
	head: () => ({ meta: [{ title: pageTitle("Add provider", "Messaging") }] }),
	codeSplitGroupings: [],
	component: CreateProviderWizardView
});
var $$splitComponentImporter$84 = () => import("./projects._projectId.messaging.providers._providerId-j8axxjEA.js");
const Route$247 = createFileRoute("/_public/projects/$projectId/messaging/providers/$providerId")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.provider?.name ?? "Provider", "Messaging") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, providerId } = params;
		const { queryClient } = context;
		if (!projectId || !providerId) return;
		await queryClient.ensureQueryData(providerQueryOptions(projectId, providerId));
		return { provider: queryClient.getQueryData(providerQueryOptions(projectId, providerId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$84, "component")
});
var $$splitComponentImporter$83 = () => import("./projects._projectId.functions._functionId.variables-CFV9r3-k.js");
const Route$252 = createFileRoute("/_public/projects/$projectId/functions/$functionId/variables")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		if (!await canAccessFunctionSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId)),
			queryClient.ensureQueryData(functionVariablesQueryOptions(projectId, functionId)),
			queryClient.ensureQueryData(projectVariablesQueryOptions(projectId))
		]);
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$83, "component")
});
var $$splitComponentImporter$82 = () => import("./projects._projectId.functions._functionId.settings-aQEyvD15.js");
const Route$253 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings")({
	head: () => ({ meta: [{ title: pageTitle("Settings", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		if (!await canAccessFunctionSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId)),
			queryClient.ensureQueryData(functionVariablesQueryOptions(projectId, functionId)),
			queryClient.ensureQueryData(projectVariablesQueryOptions(projectId)),
			queryClient.ensureQueryData(projectRuntimesQueryOptions(projectId)),
			queryClient.ensureQueryData(functionSpecificationsQueryOptions(projectId, SpecificationType.Runtimes)),
			queryClient.ensureQueryData(functionSpecificationsQueryOptions(projectId, SpecificationType.Builds))
		]);
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$82, "component")
});
var $$splitComponentImporter$81 = () => import("./projects._projectId.functions._functionId.security-BBMF4is3.js");
const Route$254 = createFileRoute("/_public/projects/$projectId/functions/$functionId/security")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		if (!await canAccessFunctionSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/functions/$functionId",
			params: {
				projectId,
				functionId
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId));
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$81, "component")
});
var $$splitComponentImporter$80 = () => import("./projects._projectId.functions._functionId.domains-C7mRLbz1.js");
const Route$256 = createFileRoute("/_public/projects/$projectId/functions/$functionId/domains")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId)), queryClient.ensureQueryData(functionDomainsQueryOptions(projectId, functionId, 0, 25, ""))]);
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$80, "component")
});
var $$splitComponentImporter$79 = () => import("./projects._projectId.auth.policies.users-CkcFKA-3.js");
const Route$262 = createFileRoute("/_public/projects/$projectId/auth/policies/users")({
	head: () => ({ meta: [{ title: pageTitle("Users", "Policies") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$79, "component")
});
var $$splitComponentImporter$78 = () => import("./projects._projectId.auth.policies.sessions-DR2WVaNj.js");
const Route$263 = createFileRoute("/_public/projects/$projectId/auth/policies/sessions")({
	head: () => ({ meta: [{ title: pageTitle("Sessions", "Policies") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$78, "component")
});
var $$splitComponentImporter$77 = () => import("./projects._projectId.auth.policies.passwords-BVhzk37j.js");
const Route$264 = createFileRoute("/_public/projects/$projectId/auth/policies/passwords")({
	head: () => ({ meta: [{ title: pageTitle("Passwords", "Policies") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$77, "component")
});
var $$splitComponentImporter$76 = () => import("./projects._projectId.auth.policies.memberships-DWTpTXbF.js");
const Route$265 = createFileRoute("/_public/projects/$projectId/auth/policies/memberships")({
	head: () => ({ meta: [{ title: pageTitle("Memberships", "Policies") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$76, "component")
});
var $$splitComponentImporter$75 = () => import("./projects._projectId.auth.policies.emails-DLAEk3-2.js");
const Route$266 = createFileRoute("/_public/projects/$projectId/auth/policies/emails")({
	head: () => ({ meta: [{ title: pageTitle("Emails", "Policies") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return;
		if (!await canAccessAuthSecuritySettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectAuthSecurityQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$75, "component")
});
var $$splitComponentImporter$74 = () => import("./projects._projectId.auth.oauth2-server.settings-BNQirBJv.js");
const Route$267 = createFileRoute("/_public/projects/$projectId/auth/oauth2-server/settings")({
	beforeLoad: ({ params }) => {
		if (typeof window === "undefined") return;
		if (!params.projectId) return;
		throw redirect({
			to: "/projects/$projectId/auth/oauth2-server",
			params: { projectId: params.projectId },
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$74, "component")
});
var $$splitComponentImporter$73 = () => import("./projects._projectId.auth.oauth2-server.apps-Cu1a1xHY.js");
const Route$268 = createFileRoute("/_public/projects/$projectId/auth/oauth2-server/apps")({
	head: () => ({ meta: [{ title: pageTitle("Apps", "OAuth2 server") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return void 0;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		if (!await canAccessProjectOAuth2Server(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/auth",
			params: { projectId },
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const project = queryClient.getQueryData(projectQueryOptions(projectId).queryKey);
		await queryClient.ensureQueryData(projectOAuth2AppsQueryOptions(projectId, project?.region));
	},
	component: lazyRouteComponent($$splitComponentImporter$73, "component")
});
var $$splitComponentImporter$72 = () => import("./organizations._orgId.apps._appId.support-B7ofMHWP.js");
const Route$270 = createFileRoute("/_public/organizations/$orgId/apps/$appId/support")({ component: lazyRouteComponent($$splitComponentImporter$72, "component") });
var $$splitComponentImporter$71 = () => import("./organizations._orgId.apps._appId.settings-Dd0N0kM4.js");
const Route$271 = createFileRoute("/_public/organizations/$orgId/apps/$appId/settings")({ component: lazyRouteComponent($$splitComponentImporter$71, "component") });
var $$splitComponentImporter$70 = () => import("./organizations._orgId.apps._appId.secrets-B7C2RfaU.js");
const Route$272 = createFileRoute("/_public/organizations/$orgId/apps/$appId/secrets")({ component: lazyRouteComponent($$splitComponentImporter$70, "component") });
var $$splitComponentImporter$69 = () => import("./organizations._orgId.apps._appId.oauth-CDtW_R1o.js");
const Route$273 = createFileRoute("/_public/organizations/$orgId/apps/$appId/oauth")({ component: lazyRouteComponent($$splitComponentImporter$69, "component") });
var $$splitComponentImporter$68 = () => import("./organizations._orgId.apps._appId.legal-4YVH2L6h.js");
const Route$274 = createFileRoute("/_public/organizations/$orgId/apps/$appId/legal")({ component: lazyRouteComponent($$splitComponentImporter$68, "component") });
var $$splitComponentImporter$67 = () => import("./organizations._orgId.apps._appId.branding-CJa-Tbh8.js");
const Route$275 = createFileRoute("/_public/organizations/$orgId/apps/$appId/branding")({
	beforeLoad: ({ params }) => {
		throw redirect({
			to: "/organizations/$orgId/apps/$appId/settings",
			params: {
				orgId: params.orgId,
				appId: params.appId
			},
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$67, "component")
});
var $$splitComponentImporter$66 = () => import("./organizations._orgId.agent.settings.usage-DZUQw7o9.js");
const Route$276 = createFileRoute("/_public/organizations/$orgId/agent/settings/usage")({ component: lazyRouteComponent($$splitComponentImporter$66, "component") });
var $$splitComponentImporter$65 = () => import("./organizations._orgId.agent.settings.models-D-5rbj8M.js");
const Route$277 = createFileRoute("/_public/organizations/$orgId/agent/settings/models")({ component: lazyRouteComponent($$splitComponentImporter$65, "component") });
var $$splitComponentImporter$64 = () => import("./organizations._orgId.agent.settings.memory-0NT9w44b.js");
const Route$278 = createFileRoute("/_public/organizations/$orgId/agent/settings/memory")({ component: lazyRouteComponent($$splitComponentImporter$64, "component") });
var $$splitComponentImporter$63 = () => import("./organizations._orgId.agent.settings.mcp-DNZhGT23.js");
const Route$279 = createFileRoute("/_public/organizations/$orgId/agent/settings/mcp")({ component: lazyRouteComponent($$splitComponentImporter$63, "component") });
var $$splitComponentImporter$62 = () => import("./organizations._orgId.agent.automations.create-BEFwMWNf.js");
const Route$280 = createFileRoute("/_public/organizations/$orgId/agent/automations/create")({ component: lazyRouteComponent($$splitComponentImporter$62, "component") });
var $$splitComponentImporter$61 = () => import("./projects._projectId.sites._siteId.settings.index-DpykI3a3.js");
const Route$282 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings/")({ component: lazyRouteComponent($$splitComponentImporter$61, "component") });
var $$splitComponentImporter$60 = () => import("./projects._projectId.sites._siteId.domains.index-zWPqw6c4.js");
const Route$283 = createFileRoute("/_public/projects/$projectId/sites/$siteId/domains/")({
	validateSearch: listSearchSchema,
	component: lazyRouteComponent($$splitComponentImporter$60, "component")
});
var $$splitComponentImporter$59 = () => import("./projects._projectId.sites._siteId.deployments.index-CbA0jNlM.js");
var DEPLOYMENTS_SELECT = [Query.select([
	"buildSize",
	"sourceSize",
	"totalSize",
	"buildDuration",
	"status",
	"type",
	"resourceId",
	"providerRepositoryUrl",
	"providerRepositoryOwner",
	"providerRepositoryName",
	"providerBranchUrl",
	"providerBranch",
	"providerCommitMessage",
	"providerCommitHash",
	"providerCommitUrl",
	"providerCommitAuthor",
	"providerCommitAuthorUrl",
	"screenshotDark",
	"screenshotLight",
	"$createdAt"
])];
const Route$284 = createFileRoute("/_public/projects/$projectId/sites/$siteId/deployments/")({
	validateSearch: listSearchSchema,
	loader: async ({ params, context, search: routeSearch }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const { page, filterQueries } = parseListSearch(routeSearch, {
			page: 1,
			limit: 10
		});
		const pageIndex = page - 1;
		const hasFilterQuery = !!filterQueries?.length;
		const site = await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
		const deploymentsPromise = hasFilterQuery ? Promise.resolve(void 0) : queryClient.ensureQueryData(siteDeploymentsQueryOptions(projectId, siteId, pageIndex, 10, DEPLOYMENTS_SELECT));
		await Promise.all([
			deploymentsPromise,
			site.deploymentId ? queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, site.deploymentId)) : Promise.resolve(),
			queryClient.ensureQueryData({
				queryKey: [
					"vcs",
					"installations",
					projectId,
					0,
					10
				],
				queryFn: () => fetchVcsInstallations(projectId, 0, 10),
				staleTime: 300 * 1e3
			})
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$59, "component")
});
var $$splitComponentImporter$58 = () => import("./projects._projectId.functions._functionId.settings.index-CV7XJ00l.js");
const Route$287 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/")({ component: lazyRouteComponent($$splitComponentImporter$58, "component") });
var $$splitComponentImporter$57 = () => import("./projects._projectId.functions._functionId.domains.index-Ckd0HrQr.js");
const Route$288 = createFileRoute("/_public/projects/$projectId/functions/$functionId/domains/")({
	validateSearch: listSearchSchema,
	component: lazyRouteComponent($$splitComponentImporter$57, "component")
});
const Route$289 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/")({
	head: () => ({ meta: [{ title: pageTitle("PostgreSQL", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(postgresDatabaseQueryOptions(projectId, databaseId));
		let firstTable = null;
		try {
			firstTable = await fetchFirstPostgresTable(projectId, databaseId);
		} catch {}
		if (firstTable) throw redirect({
			...postgresDatabaseHome({
				projectId,
				databaseId,
				tableId: postgresTableId(firstTable.table_schema, firstTable.table_name)
			}),
			replace: true
		});
		throw redirect({
			...postgresNav({
				projectId,
				databaseId
			}).sql(),
			replace: true
		});
	}
});
const Route$290 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/")({
	head: () => ({ meta: [{ title: pageTitle("MySQL", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(mysqlDatabaseQueryOptions(projectId, databaseId));
		let firstTable = null;
		try {
			firstTable = await fetchFirstMysqlTable(projectId, databaseId);
		} catch {}
		if (firstTable) throw redirect({
			...mysqlDatabaseHome({
				projectId,
				databaseId,
				tableId: mysqlTableId(firstTable.table_schema, firstTable.table_name)
			}),
			replace: true
		});
		throw redirect({
			...mysqlNav({
				projectId,
				databaseId
			}).sql(),
			replace: true
		});
	}
});
const Route$291 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		throwRedirectPostgresDbKind(dbKind, {
			projectId,
			databaseId
		});
		throwRedirectMysqlDbKind(dbKind, {
			projectId,
			databaseId
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		const firstTable = (await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 25, void 0, "asc", "$createdAt"))).tables?.[0];
		const nav = dbNavLink(dbKind);
		if (firstTable?.$id) throw redirect({
			...nav.dataGrid({
				projectId,
				dbKind,
				databaseId,
				resourceId: firstTable.$id
			}),
			replace: true
		});
		throw redirect({
			...nav.dataGrid({
				projectId,
				dbKind,
				databaseId,
				resourceId: "-"
			}),
			replace: true
		});
	}
});
var $$splitComponentImporter$56 = () => import("./projects._projectId.sites._siteId.settings.runtime-4vOgq91y.js");
const Route$293 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings/runtime")({ component: lazyRouteComponent($$splitComponentImporter$56, "component") });
var $$splitComponentImporter$55 = () => import("./projects._projectId.sites._siteId.settings.git-wCqgqIxz.js");
const Route$294 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings/git")({ component: lazyRouteComponent($$splitComponentImporter$55, "component") });
const Route$295 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings/danger-zone")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/sites/$siteId/settings",
		params: {
			projectId: params.projectId,
			siteId: params.siteId
		},
		replace: true
	});
} });
var $$splitComponentImporter$54 = () => import("./projects._projectId.sites._siteId.settings.build-CxC5Btlv.js");
const Route$296 = createFileRoute("/_public/projects/$projectId/sites/$siteId/settings/build")({ component: lazyRouteComponent($$splitComponentImporter$54, "component") });
var $$splitComponentImporter$53 = () => import("./projects._projectId.sites._siteId.domains.add-KkynUqwu.js");
const Route$297 = createFileRoute("/_public/projects/$projectId/sites/$siteId/domains/add")({
	head: () => ({ meta: [{ title: pageTitle("Add domain", "Sites") }] }),
	component: lazyRouteComponent($$splitComponentImporter$53, "component")
});
var $$splitComponentImporter$52 = () => import("./projects._projectId.sites._siteId.deployments._deploymentId-Cp6l7sFk.js");
const Route$298 = createFileRoute("/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId, deploymentId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const site = await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
		await Promise.all([
			queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, deploymentId)),
			queryClient.ensureQueryData(deploymentProxyRulesQueryOptions(projectId, siteId, deploymentId)),
			site?.deploymentId ? queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, site.deploymentId)) : Promise.resolve()
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$52, "component")
});
const Route$300 = createFileRoute("/_public/projects/$projectId/messaging/topics/$topicId/activity")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/messaging/topics/$topicId/settings",
		params: {
			projectId: params.projectId,
			topicId: params.topicId
		},
		replace: true
	});
} });
const Route$302 = createFileRoute("/_public/projects/$projectId/messaging/providers/$providerId/activity")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/messaging/providers/$providerId/settings",
		params: {
			projectId: params.projectId,
			providerId: params.providerId
		},
		replace: true
	});
} });
var $$splitComponentImporter$51 = () => import("./projects._projectId.functions._functionId.settings.runtime-C-QhNb9E.js");
const Route$305 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/runtime")({ component: lazyRouteComponent($$splitComponentImporter$51, "component") });
var $$splitComponentImporter$50 = () => import("./projects._projectId.functions._functionId.settings.git-CH6B1YFB.js");
const Route$306 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/git")({ component: lazyRouteComponent($$splitComponentImporter$50, "component") });
var $$splitComponentImporter$49 = () => import("./projects._projectId.functions._functionId.settings.executions-DVdz3VoP.js");
const Route$307 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/executions")({ component: lazyRouteComponent($$splitComponentImporter$49, "component") });
const Route$308 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/danger-zone")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/functions/$functionId/settings",
		params: {
			projectId: params.projectId,
			functionId: params.functionId
		},
		replace: true
	});
} });
var $$splitComponentImporter$48 = () => import("./projects._projectId.functions._functionId.settings.build-DZKa5QnA.js");
const Route$309 = createFileRoute("/_public/projects/$projectId/functions/$functionId/settings/build")({ component: lazyRouteComponent($$splitComponentImporter$48, "component") });
var $$splitComponentImporter$47 = () => import("./projects._projectId.functions._functionId.domains.add-DMCH_phs.js");
const Route$310 = createFileRoute("/_public/projects/$projectId/functions/$functionId/domains/add")({
	head: () => ({ meta: [{ title: pageTitle("Add domain", "Functions") }] }),
	component: lazyRouteComponent($$splitComponentImporter$47, "component")
});
var $$splitComponentImporter$46 = () => import("./projects._projectId.databases.postgres._databaseId.settings-DCurw9kc.js");
const Route$313 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings")({
	head: () => ({ meta: [{ title: pageTitle(POSTGRES_DATABASE_TAB_LABELS.settings, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (!await canAccessPostgresDatabaseSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/databases/postgres/$databaseId",
			params: {
				projectId,
				databaseId
			},
			replace: true
		});
		const shellData = await prefetchPostgresShellData(queryClient, projectId, databaseId);
		await queryClient.ensureQueryData(databaseSpecificationsQueryOptions(projectId, POSTGRES_DATABASE_SPECS_SOURCE));
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter$46, "component")
});
const Route$316 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/extensions")({ beforeLoad: ({ params }) => {
	const { projectId, databaseId } = params;
	throw redirect({
		to: "/projects/$projectId/databases/postgres/$databaseId/settings/extensions",
		params: {
			projectId,
			databaseId
		},
		replace: true
	});
} });
const Route$319 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/connect")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/databases/postgres/$databaseId/sql",
		params: {
			projectId: params.projectId,
			databaseId: params.databaseId
		},
		replace: true
	});
} });
var $$splitComponentImporter$45 = () => import("./projects._projectId.databases.mysql._databaseId.settings-DCc4e_bN.js");
const Route$323 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings")({
	head: () => ({ meta: [{ title: pageTitle(MYSQL_DATABASE_TAB_LABELS.settings, "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return { database: null };
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (!await canAccessMysqlDatabaseSettings(queryClient, projectId)) throw redirect({
			to: "/projects/$projectId/databases/mysql/$databaseId",
			params: {
				projectId,
				databaseId
			},
			replace: true
		});
		const shellData = await prefetchMysqlShellData(queryClient, projectId, databaseId);
		await queryClient.ensureQueryData(databaseSpecificationsQueryOptions(projectId, MYSQL_DATABASE_SPECS_SOURCE));
		return shellData;
	},
	component: lazyRouteComponent($$splitComponentImporter$45, "component")
});
const Route$327 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/connect")({ beforeLoad: ({ params }) => {
	throw redirect({
		to: "/projects/$projectId/databases/mysql/$databaseId/sql",
		params: {
			projectId: params.projectId,
			databaseId: params.databaseId
		},
		replace: true
	});
} });
var $$splitComponentImporter$44 = () => import("./projects._projectId.databases._dbKind._databaseId.tables-CfRq3usn.js");
const Route$330 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables")({
	head: () => ({ meta: [{ title: pageTitle("Databases", "Tables") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		throwRedirectPostgresDbKind(dbKind, {
			projectId,
			databaseId,
			tableId: "-"
		});
		throwRedirectMysqlDbKind(dbKind, {
			projectId,
			databaseId,
			tableId: "-"
		});
		if (usesCollectionsPath(dbKind)) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
			params: {
				projectId,
				dbKind,
				databaseId,
				collectionId: "-"
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)), queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 10))]);
	},
	component: lazyRouteComponent($$splitComponentImporter$44, "component")
});
const Route$332 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/security")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	beforeLoad: ({ params }) => {
		throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/settings/security",
			params: {
				projectId: params.projectId,
				dbKind: params.dbKind,
				databaseId: params.databaseId
			},
			replace: true
		});
	}
});
const Route$335 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/db-security")({
	head: () => ({ meta: [{ title: pageTitle("Security", "Databases") }] }),
	beforeLoad: ({ params }) => {
		throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/settings/security",
			params: {
				projectId: params.projectId,
				dbKind: params.dbKind,
				databaseId: params.databaseId
			},
			replace: true
		});
	}
});
var $$splitComponentImporter$43 = () => import("./projects._projectId.databases._dbKind._databaseId.collections-DKmSzTw2.js");
const Route$336 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections")({
	head: () => ({ meta: [{ title: pageTitle("Databases", "Collections") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		if (!usesCollectionsPath(dbKind)) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows",
			params: {
				projectId,
				dbKind,
				databaseId,
				tableId: "-"
			},
			replace: true
		});
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)), queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 10))]);
	},
	component: lazyRouteComponent($$splitComponentImporter$43, "component")
});
const Route$337 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/browser")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		const resourceId = ((await queryClient.ensureQueryData(tablesQueryOptions(projectId, databaseId, dbKind, 0, 25, void 0, "asc", "$createdAt"))).tables?.[0])?.$id ?? "-";
		throw redirect({
			...dbNavLink(dbKind).dataGrid({
				projectId,
				dbKind,
				databaseId,
				resourceId
			}),
			replace: true
		});
	}
});
var tableSearchSchema = z.object({ tab: z.enum([
	"rows",
	"columns",
	"indexes",
	"security",
	"settings"
]).default("rows") });
const Route$339 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/$tableId")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	validateSearch: tableSearchSchema,
	beforeLoad: ({ params }) => {
		throwRedirectPostgresDbKind(params.dbKind, {
			projectId: params.projectId,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
		throwRedirectMysqlDbKind(params.dbKind, {
			projectId: params.projectId,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	loader: ({ params, search }) => {
		const { projectId, dbKind, databaseId, tableId } = params;
		const kind = dbKind;
		const nav = dbNavLink(kind);
		const p = {
			projectId,
			dbKind: kind,
			databaseId,
			resourceId: tableId
		};
		const tab = search?.tab ?? "rows";
		if (tab === "rows") throw redirect({ ...nav.dataGrid(p) });
		if (tab === "columns") throw redirect({ ...nav.columns(p) });
		if (tab === "indexes") throw redirect({ ...nav.indexes(p) });
		if (tab === "security") throw redirect({ ...nav.security(p) });
		throw redirect({ ...nav.settings(p) });
	}
});
var $$splitComponentImporter$42 = () => import("./projects._projectId.auth.users._userId.targets-XkSKBTCn.js");
const Route$340 = createFileRoute("/_public/projects/$projectId/auth/users/$userId/targets")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUser(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"targets",
						"project",
						projectId,
						userId,
						0,
						25
					],
					queryFn: () => fetchUserTargets(projectId, userId, 0, 10),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"mfa-factors",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserMFAFactors(projectId, userId),
					staleTime: 30 * 1e3
				})
			]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./projects._projectId.auth.users._userId.sessions-DrMwSMzs.js");
const Route$341 = createFileRoute("/_public/projects/$projectId/auth/users/$userId/sessions")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUser(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"sessions",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserSessions(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"mfa-factors",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserMFAFactors(projectId, userId),
					staleTime: 30 * 1e3
				})
			]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$41, "component")
});
var $$splitComponentImporter$40 = () => import("./projects._projectId.auth.users._userId.memberships-CAPjL69X.js");
const Route$342 = createFileRoute("/_public/projects/$projectId/auth/users/$userId/memberships")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUser(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"memberships",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserMemberships(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"mfa-factors",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserMFAFactors(projectId, userId),
					staleTime: 30 * 1e3
				})
			]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$40, "component")
});
var $$splitComponentImporter$39 = () => import("./projects._projectId.auth.users._userId.identities-D-yylKbD.js");
const Route$343 = createFileRoute("/_public/projects/$projectId/auth/users/$userId/identities")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUser(projectId, userId),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"identities",
						"project",
						projectId,
						userId,
						0,
						25,
						""
					],
					queryFn: () => fetchUserIdentities(projectId, userId, 0, 10, ""),
					staleTime: 30 * 1e3
				}),
				queryClient.fetchQuery({
					queryKey: [
						"user",
						"mfa-factors",
						"project",
						projectId,
						userId
					],
					queryFn: () => fetchUserMFAFactors(projectId, userId),
					staleTime: 30 * 1e3
				})
			]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$39, "component")
});
var $$splitComponentImporter$38 = () => import("./projects._projectId.auth.users._userId.activity-3g1NMfdB.js");
const Route$344 = createFileRoute("/_public/projects/$projectId/auth/users/$userId/activity")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().activity) throw redirect({
			to: "/projects/$projectId/auth/users/$userId",
			params: {
				projectId: params.projectId,
				userId: params.userId
			},
			replace: true
		});
	},
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.user?.name ?? loaderData?.user?.email ?? "User", "Auth") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, userId } = params;
		const { queryClient } = context;
		if (projectId && userId) {
			await queryClient.ensureQueryData(projectQueryOptions(projectId));
			await Promise.all([queryClient.fetchQuery({
				queryKey: [
					"user",
					"project",
					projectId,
					userId
				],
				queryFn: () => fetchUser(projectId, userId),
				staleTime: 30 * 1e3
			}), queryClient.fetchQuery({
				queryKey: [
					"user",
					"mfa-factors",
					"project",
					projectId,
					userId
				],
				queryFn: () => fetchUserMFAFactors(projectId, userId),
				staleTime: 30 * 1e3
			})]);
			return { user: queryClient.getQueryData([
				"user",
				"project",
				projectId,
				userId
			]) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./projects._projectId.sites._siteId.deployments._deploymentId.index-Ba1x51Lt.js");
const Route$347 = createFileRoute("/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId/")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, siteId, deploymentId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		const site = await queryClient.ensureQueryData(siteQueryOptions(projectId, siteId));
		await Promise.all([
			queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, deploymentId)),
			queryClient.ensureQueryData(deploymentProxyRulesQueryOptions(projectId, siteId, deploymentId)),
			site?.deploymentId ? queryClient.ensureQueryData(siteDeploymentQueryOptions(projectId, siteId, site.deploymentId)) : Promise.resolve()
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./projects._projectId.functions._functionId.deployments._deploymentId.index-CeSc2ygt.js");
const Route$348 = createFileRoute("/_public/projects/$projectId/functions/$functionId/deployments/$deploymentId/")({
	head: ({ loaderData }) => ({ meta: [{ title: pageTitle(loaderData?.function?.name ?? "Function", "Functions") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, functionId, deploymentId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await Promise.all([
			queryClient.ensureQueryData(projectFunctionQueryOptions(projectId, functionId)),
			queryClient.ensureQueryData(functionDeploymentQueryOptions(projectId, functionId, deploymentId)),
			queryClient.ensureQueryData(functionExecutionsQueryOptions(projectId, functionId, 0, 1, [Query.equal("deploymentId", deploymentId)]))
		]);
		return { function: queryClient.getQueryData(projectFunctionQueryOptions(projectId, functionId).queryKey) };
	},
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./projects._projectId.databases.postgres._databaseId.settings.index-DozZSqHw.js");
const Route$349 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./projects._projectId.databases.mysql._databaseId.settings.index-xbnZFD3E.js");
const Route$350 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./projects._projectId.databases._dbKind._databaseId.settings.index-Z7n0XlMp.js");
const Route$351 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./projects._projectId.databases.postgres._databaseId.tables._tableId-DUhLRHy7.js");
const Route$354 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...postgresNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		await prefetchPostgresTableLayoutData(context.queryClient, projectId, databaseId, tableId);
	},
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./projects._projectId.databases.postgres._databaseId.settings.storage-BVpFhPJa.js");
const Route$355 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/storage")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./projects._projectId.databases.postgres._databaseId.settings.replication-CpvK6Kdn.js");
const Route$356 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/replication")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (((await queryClient.ensureQueryData(postgresDatabaseQueryOptions(projectId, databaseId)))?.replicas ?? 0) > 0) await queryClient.ensureQueryData(postgresDatabaseReplicasQueryOptions(projectId, databaseId));
	},
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./projects._projectId.databases.postgres._databaseId.settings.pitr-CufvITVN.js");
const Route$357 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/pitr")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().databaseBackups) throw redirect({
			to: "/projects/$projectId/databases/postgres/$databaseId/settings",
			params: {
				projectId: params.projectId,
				databaseId: params.databaseId
			},
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./projects._projectId.databases.postgres._databaseId.settings.network-8KtZjM-O.js");
const Route$358 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/network")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./projects._projectId.databases.postgres._databaseId.settings.maintenance-BsPibg3h.js");
const Route$359 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/maintenance")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./projects._projectId.databases.postgres._databaseId.settings.extensions-Xk_UAKUa.js");
const Route$360 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/extensions")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		await queryClient.ensureQueryData(postgresDatabaseExtensionsQueryOptions(projectId, databaseId));
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./projects._projectId.databases.postgres._databaseId.settings.compute-DpyngLxT.js");
const Route$361 = createFileRoute("/_public/projects/$projectId/databases/postgres/$databaseId/settings/compute")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./projects._projectId.databases.mysql._databaseId.tables._tableId-DztpFp11.js");
const Route$362 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId")({
	beforeLoad: ({ params }) => {
		if (params.tableId === "-") throw redirect({
			...mysqlNav({
				projectId: params.projectId,
				databaseId: params.databaseId
			}).sql(),
			replace: true
		});
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, tableId } = params;
		await prefetchMysqlTableLayoutData(context.queryClient, projectId, databaseId, tableId);
	},
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./projects._projectId.databases.mysql._databaseId.settings.storage-CmWeVNBE.js");
const Route$363 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/storage")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./projects._projectId.databases.mysql._databaseId.settings.replication-D6SSxDQl.js");
const Route$364 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/replication")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId } = params;
		const { queryClient } = context;
		if (((await queryClient.ensureQueryData(mysqlDatabaseQueryOptions(projectId, databaseId)))?.replicas ?? 0) > 0) await queryClient.ensureQueryData(mysqlDatabaseReplicasQueryOptions(projectId, databaseId));
	},
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./projects._projectId.databases.mysql._databaseId.settings.pitr-BwkLXXSI.js");
const Route$365 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/pitr")({
	beforeLoad: ({ params }) => {
		if (!getActiveProfileFeatures().databaseBackups) throw redirect({
			to: "/projects/$projectId/databases/mysql/$databaseId/settings",
			params: {
				projectId: params.projectId,
				databaseId: params.databaseId
			},
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./projects._projectId.databases.mysql._databaseId.settings.network-B1MZ7Ewc.js");
const Route$366 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/network")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./projects._projectId.databases.mysql._databaseId.settings.maintenance-DX-JtKA1.js");
const Route$367 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/maintenance")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./projects._projectId.databases.mysql._databaseId.settings.compute-49HVeFCA.js");
const Route$368 = createFileRoute("/_public/projects/$projectId/databases/mysql/$databaseId/settings/compute")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId-BjiqqCLL.js");
const Route$369 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./projects._projectId.databases._dbKind._databaseId.settings.specification-DDR5JNb6.js");
const Route$370 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/specification")({
	head: () => ({ meta: [{ title: pageTitle("Specification", "Databases") }] }),
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, dbKind: rawDbKind } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		const dbKind = isDatabaseRouteKind(rawDbKind ?? "") ? rawDbKind : "tablesdb";
		await Promise.all([queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind)), queryClient.ensureQueryData(databaseSpecificationsQueryOptions(projectId, dedicatedDatabaseSourceFromRouteKind(dbKind)))]);
	},
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./projects._projectId.databases._dbKind._databaseId.settings.security-CE6Yvq5X.js");
const Route$371 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/security")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./projects._projectId.databases._dbKind._databaseId.settings.replication-YGfnnWZL.js");
const Route$372 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/replication")({
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId, databaseId, dbKind: rawDbKind } = params;
		const { queryClient } = context;
		if (!projectId || !databaseId) return;
		const dbKind = isDatabaseRouteKind(rawDbKind ?? "") ? rawDbKind : "tablesdb";
		await queryClient.ensureQueryData(projectQueryOptions(projectId));
		await queryClient.ensureQueryData(databaseQueryOptions(projectId, databaseId, dbKind));
		const dedicated = await queryClient.ensureQueryData(dedicatedDatabaseByIdQueryOptions(projectId, databaseId, {
			type: "product",
			dbKind
		}));
		const product = queryClient.getQueryData(databaseQueryOptions(projectId, databaseId, dbKind).queryKey);
		if (!canConfigureDedicatedReplication({
			$id: product?.$id,
			name: product?.name,
			databaseType: dbKind,
			status: product?.status,
			replicas: product?.replicas,
			specification: product?.specification
		}, dedicated)) throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/settings",
			params: {
				projectId,
				dbKind,
				databaseId
			},
			replace: true
		});
		if ((dedicated?.replicas ?? (typeof product?.replicas === "number" ? product.replicas : 0)) > 0) await queryClient.ensureQueryData(dedicatedDatabaseReplicasQueryOptions(projectId, databaseId, dedicatedDatabaseSourceFromRouteKind(dbKind)));
	},
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId-BBa58Yw3.js");
const Route$373 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
const Route$374 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	loader: ({ params }) => {
		const { projectId, dbKind, databaseId, tableId } = params;
		throwRedirectCollectionsDbFromTablesChild(dbKind, "dataGrid", {
			projectId,
			dbKind,
			databaseId,
			tableId
		});
		throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows",
			params
		});
	}
});
const Route$375 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/")({
	head: () => ({ meta: [{ title: pageTitle("Database", "Databases") }] }),
	loader: ({ params }) => {
		const { projectId, dbKind, databaseId, collectionId } = params;
		throwRedirectTablesDbFromCollectionsChild(dbKind, "dataGrid", {
			projectId,
			dbKind,
			databaseId,
			collectionId
		});
		throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
			params
		});
	}
});
var $$splitComponentImporter$12 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.visualizer-B0bDem98.js");
const Route$386 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/visualizer")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "visualizer", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.monitor-D8ULGX7o.js");
const Route$390 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/monitor")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "monitor", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.export-import-C2KRhyKg.js");
const Route$392 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/export-import")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "export-import", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.db-settings-CPT3oUcB.js");
const Route$394 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-settings")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "db-settings", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.db-security-D6X2tORw.js");
const Route$395 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-security")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "db-security", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./projects._projectId.databases._dbKind._databaseId.tables._tableId.backups-CA5mNEms.js");
const Route$397 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/backups")({
	loader: ({ params }) => {
		throwRedirectCollectionsDbFromTablesChild(params.dbKind, "backups", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			tableId: params.tableId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.visualizer-DFoOFRdl.js");
const Route$398 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/visualizer")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "visualizer", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.monitor-Dv2QJI47.js");
const Route$401 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/monitor")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "monitor", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.json-PCrPjliE.js");
const Route$402 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/json")({
	loader: ({ params }) => {
		if (typeof window === "undefined") return;
		const { projectId, dbKind, databaseId, collectionId } = params;
		if (!projectId || !databaseId) return;
		if (dbKind === "documentsdb" || dbKind === "vectorsdb") throw redirect({
			to: "/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
			params: {
				projectId,
				dbKind,
				databaseId,
				collectionId
			},
			search: true,
			replace: true
		});
		throwRedirectTablesDbFromCollectionsChild(dbKind, "dataJson", {
			projectId,
			dbKind,
			databaseId,
			collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.export-import-DrZFrBVB.js");
const Route$404 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/export-import")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "export-import", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.db-settings-C0Lxp08W.js");
const Route$406 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-settings")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "db-settings", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.db-security-OvWRq0Ns.js");
const Route$407 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-security")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "db-security", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects._projectId.databases._dbKind._databaseId.collections._collectionId.backups-D4c2OGVq.js");
const Route$409 = createFileRoute("/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/backups")({
	loader: ({ params }) => {
		throwRedirectTablesDbFromCollectionsChild(params.dbKind, "backups", {
			projectId: params.projectId,
			dbKind: params.dbKind,
			databaseId: params.databaseId,
			collectionId: params.collectionId
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RobotsDottxtRoute = Route$2.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$1
});
var LlmsDottxtRoute = Route$3.update({
	id: "/llms.txt",
	path: "/llms.txt",
	getParentRoute: () => Route$1
});
var LlmsFullDottxtRoute = Route$4.update({
	id: "/llms-full.txt",
	path: "/llms-full.txt",
	getParentRoute: () => Route$1
});
var IntegrationsDotmdRoute = Route$5.update({
	id: "/integrations.md",
	path: "/integrations.md",
	getParentRoute: () => Route$1
});
var GeneratorRoute = Route$6.update({
	id: "/generator",
	path: "/generator",
	getParentRoute: () => Route$1
});
var DocsDotmdRoute = Route$7.update({
	id: "/docs.md",
	path: "/docs.md",
	getParentRoute: () => Route$1
});
var DocsRoute = Route$8.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => Route$1
});
var DiscordRoute = Route$9.update({
	id: "/discord",
	path: "/discord",
	getParentRoute: () => Route$1
});
var ChangelogDotmdRoute = Route$10.update({
	id: "/changelog.md",
	path: "/changelog.md",
	getParentRoute: () => Route$1
});
var BlogDotmdRoute = Route$11.update({
	id: "/blog.md",
	path: "/blog.md",
	getParentRoute: () => Route$1
});
var AccessRoute = Route$12.update({
	id: "/access",
	path: "/access",
	getParentRoute: () => Route$1
});
var PublicRoute = Route$13.update({
	id: "/_public",
	getParentRoute: () => Route$1
});
var ProtectedRoute = Route$14.update({
	id: "/_protected",
	getParentRoute: () => Route$1
});
var MarketingRoute = Route$15.update({
	id: "/_marketing",
	getParentRoute: () => Route$1
});
var AuthRoute = Route$16.update({
	id: "/_auth",
	getParentRoute: () => Route$1
});
var GeneratorIndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => GeneratorRoute
});
var DocsIndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => DocsRoute
});
var PublicIndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicRoute
});
var LlmsTxtRoute = Route$20.update({
	id: "/llms/txt",
	path: "/llms/txt",
	getParentRoute: () => Route$1
});
var LlmsFullTxtRoute = Route$21.update({
	id: "/llms-full/txt",
	path: "/llms-full/txt",
	getParentRoute: () => Route$1
});
var ILinkIdRoute = Route$22.update({
	id: "/i/$linkId",
	path: "/i/$linkId",
	getParentRoute: () => Route$1
});
var GeneratorGenerationIdRoute = Route$23.update({
	id: "/$generationId",
	path: "/$generationId",
	getParentRoute: () => GeneratorRoute
});
var DomainsContinueRoute = Route$24.update({
	id: "/domains/continue",
	path: "/domains/continue",
	getParentRoute: () => Route$1
});
var DocsTutorialsRoute = Route$25.update({
	id: "/tutorials",
	path: "/tutorials",
	getParentRoute: () => DocsRoute
});
var DocsQuickStartsRoute = Route$26.update({
	id: "/quick-starts",
	path: "/quick-starts",
	getParentRoute: () => DocsRoute
});
var DocsSplatRoute = Route$27.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => DocsRoute
});
var CliInstallDotshRoute = Route$28.update({
	id: "/cli/install.sh",
	path: "/cli/install.sh",
	getParentRoute: () => Route$1
});
var CliInstallDotps1Route = Route$29.update({
	id: "/cli/install.ps1",
	path: "/cli/install.ps1",
	getParentRoute: () => Route$1
});
var PublicUpgradeRoute = Route$30.update({
	id: "/upgrade",
	path: "/upgrade",
	getParentRoute: () => PublicRoute
});
var PublicResetRoute = Route$31.update({
	id: "/reset",
	path: "/reset",
	getParentRoute: () => PublicRoute
});
var PublicInitRoute = Route$32.update({
	id: "/init",
	path: "/init",
	getParentRoute: () => PublicRoute
});
var PublicCompsRoute = Route$33.update({
	id: "/comps",
	path: "/comps",
	getParentRoute: () => PublicRoute
});
var PublicCacheRoute = Route$34.update({
	id: "/cache",
	path: "/cache",
	getParentRoute: () => PublicRoute
});
var PublicBlocksRoute = Route$35.update({
	id: "/blocks",
	path: "/blocks",
	getParentRoute: () => PublicRoute
});
var PublicAssistantRoute = Route$36.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => PublicRoute
});
var PublicAgentRoute = Route$37.update({
	id: "/agent",
	path: "/agent",
	getParentRoute: () => PublicRoute
});
var PublicAccountRoute = Route$38.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => PublicRoute
});
var ProtectedExampleProtectedRouteRoute = Route$39.update({
	id: "/example-protected-route",
	path: "/example-protected-route",
	getParentRoute: () => ProtectedRoute
});
var MarketingTermsRoute = Route$40.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => MarketingRoute
});
var MarketingStartupsRoute = Route$41.update({
	id: "/startups",
	path: "/startups",
	getParentRoute: () => MarketingRoute
});
var MarketingPrivacyRoute = Route$42.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => MarketingRoute
});
var MarketingPricingRoute = Route$43.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => MarketingRoute
});
var MarketingPartnersRoute = Route$44.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => MarketingRoute
});
var MarketingHomeRoute = Route$45.update({
	id: "/home",
	path: "/home",
	getParentRoute: () => MarketingRoute
});
var MarketingEnterpriseRoute = Route$46.update({
	id: "/enterprise",
	path: "/enterprise",
	getParentRoute: () => MarketingRoute
});
var MarketingEducationRoute = Route$47.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => MarketingRoute
});
var MarketingDomainsRoute = Route$48.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => MarketingRoute
});
var MarketingCookiesRoute = Route$49.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => MarketingRoute
});
var MarketingCompanyRoute = Route$50.update({
	id: "/company",
	path: "/company",
	getParentRoute: () => MarketingRoute
});
var MarketingCommunityRoute = Route$51.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => MarketingRoute
});
var MarketingBaaRoute = Route$52.update({
	id: "/baa",
	path: "/baa",
	getParentRoute: () => MarketingRoute
});
var MarketingAssetsRoute = Route$53.update({
	id: "/assets",
	path: "/assets",
	getParentRoute: () => MarketingRoute
});
var MarketingAffiliatesRoute = Route$54.update({
	id: "/affiliates",
	path: "/affiliates",
	getParentRoute: () => MarketingRoute
});
var AuthVerifyEmailRoute = Route$55.update({
	id: "/verify-email",
	path: "/verify-email",
	getParentRoute: () => AuthRoute
});
var AuthSignUpRoute = Route$56.update({
	id: "/sign-up",
	path: "/sign-up",
	getParentRoute: () => AuthRoute
});
var AuthSignOutRoute = Route$57.update({
	id: "/sign-out",
	path: "/sign-out",
	getParentRoute: () => AuthRoute
});
var AuthSignInRoute = Route$58.update({
	id: "/sign-in",
	path: "/sign-in",
	getParentRoute: () => AuthRoute
});
var AuthRecoveryRoute = Route$59.update({
	id: "/recovery",
	path: "/recovery",
	getParentRoute: () => AuthRoute
});
var AuthMfaRoute = Route$60.update({
	id: "/mfa",
	path: "/mfa",
	getParentRoute: () => AuthRoute
});
var AuthJoinRoute = Route$61.update({
	id: "/join",
	path: "/join",
	getParentRoute: () => AuthRoute
});
var ApiHelloRoute = Route$62.update({
	id: "/_api/hello",
	path: "/hello",
	getParentRoute: () => Route$1
});
var GeneratorDiagramsIndexRoute = Route$63.update({
	id: "/diagrams/",
	path: "/diagrams/",
	getParentRoute: () => GeneratorRoute
});
var DocsPartnersIndexRoute = Route$64.update({
	id: "/partners/",
	path: "/partners/",
	getParentRoute: () => DocsRoute
});
var PublicAgentIndexRoute = Route$65.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicAgentRoute
});
var PublicAccountIndexRoute = Route$66.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicAccountRoute
});
var MarketingThreadsIndexRoute = Route$67.update({
	id: "/threads/",
	path: "/threads/",
	getParentRoute: () => MarketingRoute
});
var MarketingIntegrationsIndexRoute = Route$68.update({
	id: "/integrations/",
	path: "/integrations/",
	getParentRoute: () => MarketingRoute
});
var MarketingChangelogIndexRoute = Route$69.update({
	id: "/changelog/",
	path: "/changelog/",
	getParentRoute: () => MarketingRoute
});
var MarketingBlogIndexRoute = Route$70.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => MarketingRoute
});
var GeneratorDiagramsGenerationIdRoute = Route$71.update({
	id: "/diagrams/$generationId",
	path: "/diagrams/$generationId",
	getParentRoute: () => GeneratorRoute
});
var PublicProjectsProjectIdRoute = Route$72.update({
	id: "/projects/$projectId",
	path: "/projects/$projectId",
	getParentRoute: () => PublicRoute
});
var PublicOrganizationsOrgIdRoute = Route$73.update({
	id: "/organizations/$orgId",
	path: "/organizations/$orgId",
	getParentRoute: () => PublicRoute
});
var PublicDebugVerifyEmailPreviewRoute = Route$74.update({
	id: "/debug/verify-email-preview",
	path: "/debug/verify-email-preview",
	getParentRoute: () => PublicRoute
});
var PublicDebugOrgSetupPreviewRoute = Route$75.update({
	id: "/debug/org-setup-preview",
	path: "/debug/org-setup-preview",
	getParentRoute: () => PublicRoute
});
var PublicDebugOauth2PreviewRoute = Route$76.update({
	id: "/debug/oauth2-preview",
	path: "/debug/oauth2-preview",
	getParentRoute: () => PublicRoute
});
var PublicDebugErrorPreviewRoute = Route$77.update({
	id: "/debug/error-preview",
	path: "/debug/error-preview",
	getParentRoute: () => PublicRoute
});
var PublicDebugCodeEditorPreviewRoute = Route$78.update({
	id: "/debug/code-editor-preview",
	path: "/debug/code-editor-preview",
	getParentRoute: () => PublicRoute
});
var PublicAgentSettingsRoute = Route$79.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicAgentRoute
});
var PublicAgentAutomationsRoute = Route$80.update({
	id: "/automations",
	path: "/automations",
	getParentRoute: () => PublicAgentRoute
});
var PublicAgentAgentIdRoute = Route$81.update({
	id: "/$agentId",
	path: "/$agentId",
	getParentRoute: () => PublicAgentRoute
});
var PublicAccountSessionsRoute = Route$82.update({
	id: "/sessions",
	path: "/sessions",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountSecurityRoute = Route$83.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountPaymentsRoute = Route$84.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountPaymentMethodsRoute = Route$85.update({
	id: "/payment-methods",
	path: "/payment-methods",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountBillingAddressesRoute = Route$86.update({
	id: "/billing-addresses",
	path: "/billing-addresses",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountApplicationsRoute = Route$87.update({
	id: "/applications",
	path: "/applications",
	getParentRoute: () => PublicAccountRoute
});
var PublicAccountAffiliatesRoute = Route$88.update({
	id: "/affiliates",
	path: "/affiliates",
	getParentRoute: () => PublicAccountRoute
});
var MarketingThreadsThreadIdRoute = Route$89.update({
	id: "/threads/$threadId",
	path: "/threads/$threadId",
	getParentRoute: () => MarketingRoute
});
var MarketingProductsProductIdRoute = Route$90.update({
	id: "/products/$productId",
	path: "/products/$productId",
	getParentRoute: () => MarketingRoute
});
var MarketingIntegrationsSlugRoute = Route$91.update({
	id: "/integrations/$slug",
	path: "/integrations/$slug",
	getParentRoute: () => MarketingRoute
});
var MarketingInitTicketIdRoute = Route$92.update({
	id: "/init/$ticketId",
	path: "/init/$ticketId",
	getParentRoute: () => MarketingRoute
});
var MarketingBlogPageRoute = Route$93.update({
	id: "/blog/$page",
	path: "/blog/$page",
	getParentRoute: () => MarketingRoute
});
var AuthOauth2DeviceRoute = Route$94.update({
	id: "/oauth2/device",
	path: "/oauth2/device",
	getParentRoute: () => AuthRoute
});
var AuthOauth2ConsentRoute = Route$95.update({
	id: "/oauth2/consent",
	path: "/oauth2/consent",
	getParentRoute: () => AuthRoute
});
var AuthAuthMagicUrlRoute = Route$96.update({
	id: "/auth/magic-url",
	path: "/auth/magic-url",
	getParentRoute: () => AuthRoute
});
var ApiRVDotjsRoute = Route$97.update({
	id: "/_api/r/v.js",
	path: "/r/v.js",
	getParentRoute: () => Route$1
});
var ApiRERoute = Route$98.update({
	id: "/_api/r/e",
	path: "/r/e",
	getParentRoute: () => Route$1
});
var ApiOgInitDotpngRoute = Route$99.update({
	id: "/_api/og/init.png",
	path: "/og/init.png",
	getParentRoute: () => Route$1
});
var ApiOgImageDotpngRoute = Route$100.update({
	id: "/_api/og/image.png",
	path: "/og/image.png",
	getParentRoute: () => Route$1
});
var ApiGeneratorDiagramRoute = Route$101.update({
	id: "/_api/generator/diagram",
	path: "/generator/diagram",
	getParentRoute: () => Route$1
});
var ApiGeneratorCoverRoute = Route$102.update({
	id: "/_api/generator/cover",
	path: "/generator/cover",
	getParentRoute: () => Route$1
});
var ApiDebugIpRoute = Route$103.update({
	id: "/_api/debug/ip",
	path: "/debug/ip",
	getParentRoute: () => Route$1
});
var ApiChangelogRssDotxmlRoute = Route$104.update({
	id: "/_api/changelog/rss.xml",
	path: "/changelog/rss.xml",
	getParentRoute: () => Route$1
});
var ApiBlogRssDotxmlRoute = Route$105.update({
	id: "/_api/blog/rss.xml",
	path: "/blog/rss.xml",
	getParentRoute: () => Route$1
});
var PublicProjectsProjectIdIndexRoute = Route$106.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicOrganizationsOrgIdIndexRoute = Route$107.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicAgentSettingsIndexRoute = Route$108.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicAgentSettingsRoute
});
var PublicAgentAutomationsIndexRoute = Route$109.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicAgentAutomationsRoute
});
var PublicProjectsProjectIdUsageRoute = Route$110.update({
	id: "/usage",
	path: "/usage",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdStoresRoute = Route$111.update({
	id: "/stores",
	path: "/stores",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdStorageRoute = Route$112.update({
	id: "/storage",
	path: "/storage",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdSettingsRoute = Route$113.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdRealtimeRoute = Route$114.update({
	id: "/realtime",
	path: "/realtime",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdOnboardingRoute = Route$115.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdMessagingRoute = Route$116.update({
	id: "/messaging",
	path: "/messaging",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdImagineRoute = Route$117.update({
	id: "/imagine",
	path: "/imagine",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdFunctionsRoute = Route$118.update({
	id: "/functions",
	path: "/functions",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdFirewallRoute = Route$119.update({
	id: "/firewall",
	path: "/firewall",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdExplorerRoute = Route$120.update({
	id: "/explorer",
	path: "/explorer",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdDatabasesRoute = Route$121.update({
	id: "/databases",
	path: "/databases",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdAuthRoute = Route$122.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdAppsRoute = Route$123.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdApiKeysRoute = Route$124.update({
	id: "/api-keys",
	path: "/api-keys",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdAnalyticsRoute = Route$125.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdAdvisorRoute = Route$126.update({
	id: "/advisor",
	path: "/advisor",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdActivityRoute = Route$127.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicOrganizationsOrgIdSupportRoute = Route$128.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdSettingsRoute = Route$129.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdMembersRoute = Route$130.update({
	id: "/members",
	path: "/members",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdMarketplaceRoute = Route$131.update({
	id: "/marketplace",
	path: "/marketplace",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdDomainsRoute = Route$132.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdBillingRoute = Route$133.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdAppsRoute = Route$134.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicOrganizationsOrgIdAgentRoute = Route$135.update({
	id: "/agent",
	path: "/agent",
	getParentRoute: () => PublicOrganizationsOrgIdRoute
});
var PublicAgentSettingsUsageRoute = Route$136.update({
	id: "/usage",
	path: "/usage",
	getParentRoute: () => PublicAgentSettingsRoute
});
var PublicAgentSettingsModelsRoute = Route$137.update({
	id: "/models",
	path: "/models",
	getParentRoute: () => PublicAgentSettingsRoute
});
var PublicAgentSettingsMemoryRoute = Route$138.update({
	id: "/memory",
	path: "/memory",
	getParentRoute: () => PublicAgentSettingsRoute
});
var PublicAgentSettingsMcpRoute = Route$139.update({
	id: "/mcp",
	path: "/mcp",
	getParentRoute: () => PublicAgentSettingsRoute
});
var PublicAgentAutomationsCreateRoute = Route$140.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => PublicAgentAutomationsRoute
});
var PublicAgentAutomationsAutomationIdRoute = Route$141.update({
	id: "/$automationId",
	path: "/$automationId",
	getParentRoute: () => PublicAgentAutomationsRoute
});
var MarketingThreadsAuthorsAuthorIdRoute = Route$142.update({
	id: "/threads/authors/$authorId",
	path: "/threads/authors/$authorId",
	getParentRoute: () => MarketingRoute
});
var MarketingChangelogEntryEntryRoute = Route$143.update({
	id: "/changelog/entry/$entry",
	path: "/changelog/entry/$entry",
	getParentRoute: () => MarketingRoute
});
var MarketingBlogPostSlugRoute = Route$144.update({
	id: "/blog/post/$slug",
	path: "/blog/post/$slug",
	getParentRoute: () => MarketingRoute
});
var MarketingBlogCategoryCategoryRoute = Route$145.update({
	id: "/blog/category/$category",
	path: "/blog/category/$category",
	getParentRoute: () => MarketingRoute
});
var MarketingBlogAuthorAuthorRoute = Route$146.update({
	id: "/blog/author/$author",
	path: "/blog/author/$author",
	getParentRoute: () => MarketingRoute
});
var AuthAuthOauth2SuccessRoute = Route$147.update({
	id: "/auth/oauth2/success",
	path: "/auth/oauth2/success",
	getParentRoute: () => AuthRoute
});
var AuthAuthOauth2FailureRoute = Route$148.update({
	id: "/auth/oauth2/failure",
	path: "/auth/oauth2/failure",
	getParentRoute: () => AuthRoute
});
var AuthAssistantMcpCallbackRoute = Route$149.update({
	id: "/assistant/mcp/callback",
	path: "/assistant/mcp/callback",
	getParentRoute: () => AuthRoute
});
var AuthAgentMcpCallbackRoute = Route$150.update({
	id: "/agent/mcp/callback",
	path: "/agent/mcp/callback",
	getParentRoute: () => AuthRoute
});
var ApiInitTicketEventSlugRoute = Route$151.update({
	id: "/_api/init/ticket/$eventSlug",
	path: "/init/ticket/$eventSlug",
	getParentRoute: () => Route$1
});
var ApiInitCalendarEventSlugRoute = Route$152.update({
	id: "/_api/init/calendar/$eventSlug",
	path: "/init/calendar/$eventSlug",
	getParentRoute: () => Route$1
});
var ApiInitTicketIdOgDotpngRoute = Route$153.update({
	id: "/_api/init/$ticketId/og.png",
	path: "/init/$ticketId/og.png",
	getParentRoute: () => Route$1
});
var ApiGeneratorCoverEncodeRoute = Route$154.update({
	id: "/encode",
	path: "/encode",
	getParentRoute: () => ApiGeneratorCoverRoute
});
var PublicProjectsProjectIdUsageIndexRoute = Route$155.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdUsageRoute
});
var PublicProjectsProjectIdStoresIndexRoute = Route$156.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdStoresRoute
});
var PublicProjectsProjectIdStorageIndexRoute = Route$157.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdStorageRoute
});
var PublicProjectsProjectIdSitesIndexRoute = Route$158.update({
	id: "/sites/",
	path: "/sites/",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdSettingsIndexRoute = Route$159.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdRealtimeIndexRoute = Route$160.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdRealtimeRoute
});
var PublicProjectsProjectIdMessagingIndexRoute = Route$161.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdFunctionsIndexRoute = Route$162.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsRoute
});
var PublicProjectsProjectIdFirewallIndexRoute = Route$163.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFirewallRoute
});
var PublicProjectsProjectIdDatabasesIndexRoute = Route$164.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdAuthIndexRoute = Route$165.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicOrganizationsOrgIdMarketplaceIndexRoute = Route$166.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdMarketplaceRoute
});
var PublicOrganizationsOrgIdDomainsIndexRoute = Route$167.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsRoute
});
var PublicOrganizationsOrgIdAppsIndexRoute = Route$168.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdAppsRoute
});
var PublicOrganizationsOrgIdAgentIndexRoute = Route$169.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdAgentRoute
});
var DocsReferencesVersionModelsModelRoute = Route$170.update({
	id: "/references/$version/models/$model",
	path: "/references/$version/models/$model",
	getParentRoute: () => DocsRoute
});
var DocsReferencesVersionPlatformServiceRoute = Route$171.update({
	id: "/references/$version/$platform/$service",
	path: "/references/$version/$platform/$service",
	getParentRoute: () => DocsRoute
});
var PublicProjectsProjectIdUsageCategoryIdRoute = Route$172.update({
	id: "/$categoryId",
	path: "/$categoryId",
	getParentRoute: () => PublicProjectsProjectIdUsageRoute
});
var PublicProjectsProjectIdStorageBucketIdRoute = Route$173.update({
	id: "/$bucketId",
	path: "/$bucketId",
	getParentRoute: () => PublicProjectsProjectIdStorageRoute
});
var PublicProjectsProjectIdSitesCreateRoute = Route$174.update({
	id: "/sites/create",
	path: "/sites/create",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdSitesSiteIdRoute = Route$175.update({
	id: "/sites/$siteId",
	path: "/sites/$siteId",
	getParentRoute: () => PublicProjectsProjectIdRoute
});
var PublicProjectsProjectIdSettingsWebhooksRoute = Route$176.update({
	id: "/webhooks",
	path: "/webhooks",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdSettingsVariablesRoute = Route$177.update({
	id: "/variables",
	path: "/variables",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdSettingsSmtpRoute = Route$178.update({
	id: "/smtp",
	path: "/smtp",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdSettingsMigrationsRoute = Route$179.update({
	id: "/migrations",
	path: "/migrations",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdSettingsDomainsRoute = Route$180.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => PublicProjectsProjectIdSettingsRoute
});
var PublicProjectsProjectIdRealtimeMessagesRoute = Route$181.update({
	id: "/messages",
	path: "/messages",
	getParentRoute: () => PublicProjectsProjectIdRealtimeRoute
});
var PublicProjectsProjectIdRealtimeDebuggerRoute = Route$182.update({
	id: "/debugger",
	path: "/debugger",
	getParentRoute: () => PublicProjectsProjectIdRealtimeRoute
});
var PublicProjectsProjectIdRealtimeChannelsRoute = Route$183.update({
	id: "/channels",
	path: "/channels",
	getParentRoute: () => PublicProjectsProjectIdRealtimeRoute
});
var PublicProjectsProjectIdMessagingMessageIdRoute = Route$184.update({
	id: "/$messageId",
	path: "/$messageId",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdFunctionsTemplatesRoute = Route$185.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => PublicProjectsProjectIdFunctionsRoute
});
var PublicProjectsProjectIdFunctionsEditorRoute = Route$186.update({
	id: "/editor",
	path: "/editor",
	getParentRoute: () => PublicProjectsProjectIdFunctionsRoute
});
var PublicProjectsProjectIdFunctionsCreateRoute = Route$187.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => PublicProjectsProjectIdFunctionsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdRoute = Route$188.update({
	id: "/$functionId",
	path: "/$functionId",
	getParentRoute: () => PublicProjectsProjectIdFunctionsRoute
});
var PublicProjectsProjectIdFirewallCreateRoute = Route$189.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => PublicProjectsProjectIdFirewallRoute
});
var PublicProjectsProjectIdDatabasesCreateRoute = Route$190.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdDatabasesDatabaseIdRoute = Route$191.update({
	id: "/$databaseId",
	path: "/$databaseId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdAuthTemplatesRoute = Route$192.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthTeamsRoute = Route$193.update({
	id: "/teams",
	path: "/teams",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthSocialProvidersRoute = Route$194.update({
	id: "/social-providers",
	path: "/social-providers",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthSettingsRoute = Route$195.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthSecurityRoute = Route$196.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthPoliciesRoute = Route$197.update({
	id: "/policies",
	path: "/policies",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthOauth2ServerRoute = Route$198.update({
	id: "/oauth2-server",
	path: "/oauth2-server",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAppsAddRoute = Route$199.update({
	id: "/add",
	path: "/add",
	getParentRoute: () => PublicProjectsProjectIdAppsRoute
});
var PublicProjectsProjectIdAnalyticsWebsiteIdRoute = Route$200.update({
	id: "/$websiteId",
	path: "/$websiteId",
	getParentRoute: () => PublicProjectsProjectIdAnalyticsRoute
});
var PublicOrganizationsOrgIdSettingsOauthAppsRoute = Route$201.update({
	id: "/oauth-apps",
	path: "/oauth-apps",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdSettingsMembersRoute = Route$202.update({
	id: "/members",
	path: "/members",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdSettingsDangerZoneRoute = Route$203.update({
	id: "/danger-zone",
	path: "/danger-zone",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdSettingsComplianceRoute = Route$204.update({
	id: "/compliance",
	path: "/compliance",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdSettingsBillingRoute = Route$205.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdSettingsApiKeysRoute = Route$206.update({
	id: "/api-keys",
	path: "/api-keys",
	getParentRoute: () => PublicOrganizationsOrgIdSettingsRoute
});
var PublicOrganizationsOrgIdDomainsTransferInRoute = Route$207.update({
	id: "/transfer-in",
	path: "/transfer-in",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsRoute
});
var PublicOrganizationsOrgIdDomainsBuyRoute = Route$208.update({
	id: "/buy",
	path: "/buy",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsRoute
});
var PublicOrganizationsOrgIdDomainsDomainIdRoute = Route$209.update({
	id: "/$domainId",
	path: "/$domainId",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsRoute
});
var PublicOrganizationsOrgIdAppsAppIdRoute = Route$210.update({
	id: "/$appId",
	path: "/$appId",
	getParentRoute: () => PublicOrganizationsOrgIdAppsRoute
});
var PublicOrganizationsOrgIdAgentSettingsRoute = Route$211.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicOrganizationsOrgIdAgentRoute
});
var PublicOrganizationsOrgIdAgentAutomationsRoute = Route$212.update({
	id: "/automations",
	path: "/automations",
	getParentRoute: () => PublicOrganizationsOrgIdAgentRoute
});
var PublicOrganizationsOrgIdAgentAgentIdRoute = Route$213.update({
	id: "/$agentId",
	path: "/$agentId",
	getParentRoute: () => PublicOrganizationsOrgIdAgentRoute
});
var PublicProjectsProjectIdStoresAppIdIndexRoute = Route$214.update({
	id: "/$appId/",
	path: "/$appId/",
	getParentRoute: () => PublicProjectsProjectIdStoresRoute
});
var PublicProjectsProjectIdStorageBucketIdIndexRoute = Route$215.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdStorageBucketIdRoute
});
var PublicProjectsProjectIdSitesCreateIndexRoute = Route$216.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesSiteIdIndexRoute = Route$217.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSettingsMigrationsIndexRoute = Route$218.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSettingsMigrationsRoute
});
var PublicProjectsProjectIdSettingsDomainsIndexRoute = Route$219.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSettingsDomainsRoute
});
var PublicProjectsProjectIdMessagingTopicsIndexRoute = Route$220.update({
	id: "/topics/",
	path: "/topics/",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdMessagingProvidersIndexRoute = Route$221.update({
	id: "/providers/",
	path: "/providers/",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdMessagingMessageIdIndexRoute = Route$222.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdMessagingMessageIdRoute
});
var PublicProjectsProjectIdFunctionsCreateIndexRoute = Route$223.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdIndexRoute = Route$224.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicOrganizationsOrgIdMarketplaceAppIdIndexRoute = Route$225.update({
	id: "/$appId/",
	path: "/$appId/",
	getParentRoute: () => PublicOrganizationsOrgIdMarketplaceRoute
});
var PublicOrganizationsOrgIdDomainsDomainIdIndexRoute = Route$226.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsDomainIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdIndexRoute = Route$227.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAgentSettingsIndexRoute = Route$228.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdAgentSettingsRoute
});
var PublicOrganizationsOrgIdAgentAutomationsIndexRoute = Route$229.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicOrganizationsOrgIdAgentAutomationsRoute
});
var PublicProjectsProjectIdUsageCategoryIdMetricIdRoute = Route$230.update({
	id: "/$metricId",
	path: "/$metricId",
	getParentRoute: () => PublicProjectsProjectIdUsageCategoryIdRoute
});
var PublicProjectsProjectIdStorageBucketIdSettingsRoute = Route$231.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdStorageBucketIdRoute
});
var PublicProjectsProjectIdStorageBucketIdSecurityRoute = Route$232.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdStorageBucketIdRoute
});
var PublicProjectsProjectIdSitesCreateManualRoute = Route$233.update({
	id: "/manual",
	path: "/manual",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesCreateFinishRoute = Route$234.update({
	id: "/finish",
	path: "/finish",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesCreateDeployingRoute = Route$235.update({
	id: "/deploying",
	path: "/deploying",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesCreateDeployRoute = Route$236.update({
	id: "/deploy",
	path: "/deploy",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesSiteIdVariablesRoute = Route$237.update({
	id: "/variables",
	path: "/variables",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSitesSiteIdUsageRoute = Route$238.update({
	id: "/usage",
	path: "/usage",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsRoute = Route$239.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSitesSiteIdLogsRoute = Route$240.update({
	id: "/logs",
	path: "/logs",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSitesSiteIdDomainsRoute = Route$241.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSitesSiteIdDeploymentsRoute = Route$242.update({
	id: "/deployments",
	path: "/deployments",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdRoute
});
var PublicProjectsProjectIdSettingsMigrationsImportRoute = Route$243.update({
	id: "/import",
	path: "/import",
	getParentRoute: () => PublicProjectsProjectIdSettingsMigrationsRoute
});
var PublicProjectsProjectIdSettingsDomainsAddRoute = Route$244.update({
	id: "/add",
	path: "/add",
	getParentRoute: () => PublicProjectsProjectIdSettingsDomainsRoute
});
var PublicProjectsProjectIdMessagingTopicsTopicIdRoute = Route$245.update({
	id: "/topics/$topicId",
	path: "/topics/$topicId",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdMessagingProvidersCreateRoute = Route$246.update({
	id: "/providers/create",
	path: "/providers/create",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdMessagingProvidersProviderIdRoute = Route$247.update({
	id: "/providers/$providerId",
	path: "/providers/$providerId",
	getParentRoute: () => PublicProjectsProjectIdMessagingRoute
});
var PublicProjectsProjectIdMessagingMessageIdSettingsRoute = Route$248.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdMessagingMessageIdRoute
});
var PublicProjectsProjectIdFunctionsCreateManualRoute = Route$249.update({
	id: "/manual",
	path: "/manual",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsCreateDeployingRoute = Route$250.update({
	id: "/deploying",
	path: "/deploying",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsCreateDeployRoute = Route$251.update({
	id: "/deploy",
	path: "/deploy",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdVariablesRoute = Route$252.update({
	id: "/variables",
	path: "/variables",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute = Route$253.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSecurityRoute = Route$254.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdExecutionsRoute = Route$255.update({
	id: "/executions",
	path: "/executions",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdDomainsRoute = Route$256.update({
	id: "/domains",
	path: "/domains",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute = Route$257.update({
	id: "/postgres/$databaseId",
	path: "/postgres/$databaseId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute = Route$258.update({
	id: "/mysql/$databaseId",
	path: "/mysql/$databaseId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute = Route$259.update({
	id: "/$dbKind/$databaseId",
	path: "/$dbKind/$databaseId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesRoute
});
var PublicProjectsProjectIdAuthUsersUserIdRoute = Route$260.update({
	id: "/users/$userId",
	path: "/users/$userId",
	getParentRoute: () => PublicProjectsProjectIdAuthRoute
});
var PublicProjectsProjectIdAuthTeamsTeamIdRoute = Route$261.update({
	id: "/$teamId",
	path: "/$teamId",
	getParentRoute: () => PublicProjectsProjectIdAuthTeamsRoute
});
var PublicProjectsProjectIdAuthPoliciesUsersRoute = Route$262.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => PublicProjectsProjectIdAuthPoliciesRoute
});
var PublicProjectsProjectIdAuthPoliciesSessionsRoute = Route$263.update({
	id: "/sessions",
	path: "/sessions",
	getParentRoute: () => PublicProjectsProjectIdAuthPoliciesRoute
});
var PublicProjectsProjectIdAuthPoliciesPasswordsRoute = Route$264.update({
	id: "/passwords",
	path: "/passwords",
	getParentRoute: () => PublicProjectsProjectIdAuthPoliciesRoute
});
var PublicProjectsProjectIdAuthPoliciesMembershipsRoute = Route$265.update({
	id: "/memberships",
	path: "/memberships",
	getParentRoute: () => PublicProjectsProjectIdAuthPoliciesRoute
});
var PublicProjectsProjectIdAuthPoliciesEmailsRoute = Route$266.update({
	id: "/emails",
	path: "/emails",
	getParentRoute: () => PublicProjectsProjectIdAuthPoliciesRoute
});
var PublicProjectsProjectIdAuthOauth2ServerSettingsRoute = Route$267.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdAuthOauth2ServerRoute
});
var PublicProjectsProjectIdAuthOauth2ServerAppsRoute = Route$268.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => PublicProjectsProjectIdAuthOauth2ServerRoute
});
var PublicOrganizationsOrgIdDomainsDomainIdSettingsRoute = Route$269.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicOrganizationsOrgIdDomainsDomainIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdSupportRoute = Route$270.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdSettingsRoute = Route$271.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdSecretsRoute = Route$272.update({
	id: "/secrets",
	path: "/secrets",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdOauthRoute = Route$273.update({
	id: "/oauth",
	path: "/oauth",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdLegalRoute = Route$274.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAppsAppIdBrandingRoute = Route$275.update({
	id: "/branding",
	path: "/branding",
	getParentRoute: () => PublicOrganizationsOrgIdAppsAppIdRoute
});
var PublicOrganizationsOrgIdAgentSettingsUsageRoute = Route$276.update({
	id: "/usage",
	path: "/usage",
	getParentRoute: () => PublicOrganizationsOrgIdAgentSettingsRoute
});
var PublicOrganizationsOrgIdAgentSettingsModelsRoute = Route$277.update({
	id: "/models",
	path: "/models",
	getParentRoute: () => PublicOrganizationsOrgIdAgentSettingsRoute
});
var PublicOrganizationsOrgIdAgentSettingsMemoryRoute = Route$278.update({
	id: "/memory",
	path: "/memory",
	getParentRoute: () => PublicOrganizationsOrgIdAgentSettingsRoute
});
var PublicOrganizationsOrgIdAgentSettingsMcpRoute = Route$279.update({
	id: "/mcp",
	path: "/mcp",
	getParentRoute: () => PublicOrganizationsOrgIdAgentSettingsRoute
});
var PublicOrganizationsOrgIdAgentAutomationsCreateRoute = Route$280.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => PublicOrganizationsOrgIdAgentAutomationsRoute
});
var PublicOrganizationsOrgIdAgentAutomationsAutomationIdRoute = Route$281.update({
	id: "/$automationId",
	path: "/$automationId",
	getParentRoute: () => PublicOrganizationsOrgIdAgentAutomationsRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsIndexRoute = Route$282.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdSettingsRoute
});
var PublicProjectsProjectIdSitesSiteIdDomainsIndexRoute = Route$283.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdDomainsRoute
});
var PublicProjectsProjectIdSitesSiteIdDeploymentsIndexRoute = Route$284.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdDeploymentsRoute
});
var PublicProjectsProjectIdMessagingTopicsTopicIdIndexRoute = Route$285.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdMessagingTopicsTopicIdRoute
});
var PublicProjectsProjectIdMessagingProvidersProviderIdIndexRoute = Route$286.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdMessagingProvidersProviderIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsIndexRoute = Route$287.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdDomainsIndexRoute = Route$288.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdDomainsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdIndexRoute = Route$289.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdIndexRoute = Route$290.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdIndexRoute = Route$291.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdSitesCreateTemplatesTemplateRoute = Route$292.update({
	id: "/templates/$template",
	path: "/templates/$template",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsRuntimeRoute = Route$293.update({
	id: "/runtime",
	path: "/runtime",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdSettingsRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsGitRoute = Route$294.update({
	id: "/git",
	path: "/git",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdSettingsRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsDangerZoneRoute = Route$295.update({
	id: "/danger-zone",
	path: "/danger-zone",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdSettingsRoute
});
var PublicProjectsProjectIdSitesSiteIdSettingsBuildRoute = Route$296.update({
	id: "/build",
	path: "/build",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdSettingsRoute
});
var PublicProjectsProjectIdSitesSiteIdDomainsAddRoute = Route$297.update({
	id: "/add",
	path: "/add",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdDomainsRoute
});
var PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRoute = Route$298.update({
	id: "/$deploymentId",
	path: "/$deploymentId",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdDeploymentsRoute
});
var PublicProjectsProjectIdMessagingTopicsTopicIdSettingsRoute = Route$299.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdMessagingTopicsTopicIdRoute
});
var PublicProjectsProjectIdMessagingTopicsTopicIdActivityRoute = Route$300.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => PublicProjectsProjectIdMessagingTopicsTopicIdRoute
});
var PublicProjectsProjectIdMessagingProvidersProviderIdSettingsRoute = Route$301.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdMessagingProvidersProviderIdRoute
});
var PublicProjectsProjectIdMessagingProvidersProviderIdActivityRoute = Route$302.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => PublicProjectsProjectIdMessagingProvidersProviderIdRoute
});
var PublicProjectsProjectIdFunctionsCreateTemplateTemplateIdRoute = Route$303.update({
	id: "/template/$templateId",
	path: "/template/$templateId",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsCreateRepositoryRepositoryRoute = Route$304.update({
	id: "/repository/$repository",
	path: "/repository/$repository",
	getParentRoute: () => PublicProjectsProjectIdFunctionsCreateRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsRuntimeRoute = Route$305.update({
	id: "/runtime",
	path: "/runtime",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsGitRoute = Route$306.update({
	id: "/git",
	path: "/git",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsExecutionsRoute = Route$307.update({
	id: "/executions",
	path: "/executions",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsDangerZoneRoute = Route$308.update({
	id: "/danger-zone",
	path: "/danger-zone",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdSettingsBuildRoute = Route$309.update({
	id: "/build",
	path: "/build",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdDomainsAddRoute = Route$310.update({
	id: "/add",
	path: "/add",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdDomainsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdVisualizerRoute = Route$311.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSqlRoute = Route$312.update({
	id: "/sql",
	path: "/sql",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute = Route$313.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdRolesRoute = Route$314.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdMonitorRoute = Route$315.update({
	id: "/monitor",
	path: "/monitor",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdExtensionsRoute = Route$316.update({
	id: "/extensions",
	path: "/extensions",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdEnumsRoute = Route$317.update({
	id: "/enums",
	path: "/enums",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdConnectionsRoute = Route$318.update({
	id: "/connections",
	path: "/connections",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdConnectRoute = Route$319.update({
	id: "/connect",
	path: "/connect",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdBackupsRoute = Route$320.update({
	id: "/backups",
	path: "/backups",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdVisualizerRoute = Route$321.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSqlRoute = Route$322.update({
	id: "/sql",
	path: "/sql",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute = Route$323.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdRolesRoute = Route$324.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdMonitorRoute = Route$325.update({
	id: "/monitor",
	path: "/monitor",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdConnectionsRoute = Route$326.update({
	id: "/connections",
	path: "/connections",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdConnectRoute = Route$327.update({
	id: "/connect",
	path: "/connect",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdBackupsRoute = Route$328.update({
	id: "/backups",
	path: "/backups",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdVisualizerRoute = Route$329.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRoute = Route$330.update({
	id: "/tables",
	path: "/tables",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute = Route$331.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSecurityRoute = Route$332.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdMonitorRoute = Route$333.update({
	id: "/monitor",
	path: "/monitor",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdExportImportRoute = Route$334.update({
	id: "/export-import",
	path: "/export-import",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdDbSecurityRoute = Route$335.update({
	id: "/db-security",
	path: "/db-security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRoute = Route$336.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdBrowserRoute = Route$337.update({
	id: "/browser",
	path: "/browser",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdBackupsRoute = Route$338.update({
	id: "/backups",
	path: "/backups",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTableIdRoute = Route$339.update({
	id: "/$tableId",
	path: "/$tableId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdAuthUsersUserIdTargetsRoute = Route$340.update({
	id: "/targets",
	path: "/targets",
	getParentRoute: () => PublicProjectsProjectIdAuthUsersUserIdRoute
});
var PublicProjectsProjectIdAuthUsersUserIdSessionsRoute = Route$341.update({
	id: "/sessions",
	path: "/sessions",
	getParentRoute: () => PublicProjectsProjectIdAuthUsersUserIdRoute
});
var PublicProjectsProjectIdAuthUsersUserIdMembershipsRoute = Route$342.update({
	id: "/memberships",
	path: "/memberships",
	getParentRoute: () => PublicProjectsProjectIdAuthUsersUserIdRoute
});
var PublicProjectsProjectIdAuthUsersUserIdIdentitiesRoute = Route$343.update({
	id: "/identities",
	path: "/identities",
	getParentRoute: () => PublicProjectsProjectIdAuthUsersUserIdRoute
});
var PublicProjectsProjectIdAuthUsersUserIdActivityRoute = Route$344.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => PublicProjectsProjectIdAuthUsersUserIdRoute
});
var PublicProjectsProjectIdAuthTeamsTeamIdMembersRoute = Route$345.update({
	id: "/members",
	path: "/members",
	getParentRoute: () => PublicProjectsProjectIdAuthTeamsTeamIdRoute
});
var PublicProjectsProjectIdAuthTeamsTeamIdActivityRoute = Route$346.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => PublicProjectsProjectIdAuthTeamsTeamIdRoute
});
var PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdIndexRoute = Route$347.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRoute
});
var PublicProjectsProjectIdFunctionsFunctionIdDeploymentsDeploymentIdIndexRoute = Route$348.update({
	id: "/deployments/$deploymentId/",
	path: "/deployments/$deploymentId/",
	getParentRoute: () => PublicProjectsProjectIdFunctionsFunctionIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsIndexRoute = Route$349.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsIndexRoute = Route$350.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsIndexRoute = Route$351.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdOverviewIndexRoute = Route$352.update({
	id: "/overview/",
	path: "/overview/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute
});
var PublicProjectsProjectIdSitesCreateRepositoriesInstallationIdRepositoryIdRoute = Route$353.update({
	id: "/repositories/$installationId/$repositoryId",
	path: "/repositories/$installationId/$repositoryId",
	getParentRoute: () => PublicProjectsProjectIdSitesCreateRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute = Route$354.update({
	id: "/tables/$tableId",
	path: "/tables/$tableId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsStorageRoute = Route$355.update({
	id: "/storage",
	path: "/storage",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsReplicationRoute = Route$356.update({
	id: "/replication",
	path: "/replication",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsPitrRoute = Route$357.update({
	id: "/pitr",
	path: "/pitr",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsNetworkRoute = Route$358.update({
	id: "/network",
	path: "/network",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsMaintenanceRoute = Route$359.update({
	id: "/maintenance",
	path: "/maintenance",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsExtensionsRoute = Route$360.update({
	id: "/extensions",
	path: "/extensions",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsComputeRoute = Route$361.update({
	id: "/compute",
	path: "/compute",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute = Route$362.update({
	id: "/tables/$tableId",
	path: "/tables/$tableId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsStorageRoute = Route$363.update({
	id: "/storage",
	path: "/storage",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsReplicationRoute = Route$364.update({
	id: "/replication",
	path: "/replication",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsPitrRoute = Route$365.update({
	id: "/pitr",
	path: "/pitr",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsNetworkRoute = Route$366.update({
	id: "/network",
	path: "/network",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsMaintenanceRoute = Route$367.update({
	id: "/maintenance",
	path: "/maintenance",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsComputeRoute = Route$368.update({
	id: "/compute",
	path: "/compute",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute = Route$369.update({
	id: "/$tableId",
	path: "/$tableId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsSpecificationRoute = Route$370.update({
	id: "/specification",
	path: "/specification",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsSecurityRoute = Route$371.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsReplicationRoute = Route$372.update({
	id: "/replication",
	path: "/replication",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute = Route$373.update({
	id: "/$collectionId",
	path: "/$collectionId",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdIndexRoute = Route$374.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdIndexRoute = Route$375.update({
	id: "/",
	path: "/",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdSettingsRoute = Route$376.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdSecurityRoute = Route$377.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRowsRoute = Route$378.update({
	id: "/rows",
	path: "/rows",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdIndexesRoute = Route$379.update({
	id: "/indexes",
	path: "/indexes",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdColumnsRoute = Route$380.update({
	id: "/columns",
	path: "/columns",
	getParentRoute: () => PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdSettingsRoute = Route$381.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdSecurityRoute = Route$382.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRowsRoute = Route$383.update({
	id: "/rows",
	path: "/rows",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdIndexesRoute = Route$384.update({
	id: "/indexes",
	path: "/indexes",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdColumnsRoute = Route$385.update({
	id: "/columns",
	path: "/columns",
	getParentRoute: () => PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdVisualizerRoute = Route$386.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdSettingsRoute = Route$387.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdSecurityRoute = Route$388.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRowsRoute = Route$389.update({
	id: "/rows",
	path: "/rows",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdMonitorRoute = Route$390.update({
	id: "/monitor",
	path: "/monitor",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdIndexesRoute = Route$391.update({
	id: "/indexes",
	path: "/indexes",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdExportImportRoute = Route$392.update({
	id: "/export-import",
	path: "/export-import",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDocumentsRoute = Route$393.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDbSettingsRoute = Route$394.update({
	id: "/db-settings",
	path: "/db-settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDbSecurityRoute = Route$395.update({
	id: "/db-security",
	path: "/db-security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdColumnsRoute = Route$396.update({
	id: "/columns",
	path: "/columns",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdBackupsRoute = Route$397.update({
	id: "/backups",
	path: "/backups",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdVisualizerRoute = Route$398.update({
	id: "/visualizer",
	path: "/visualizer",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdSettingsRoute = Route$399.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdSecurityRoute = Route$400.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdMonitorRoute = Route$401.update({
	id: "/monitor",
	path: "/monitor",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdJsonRoute = Route$402.update({
	id: "/json",
	path: "/json",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdIndexesRoute = Route$403.update({
	id: "/indexes",
	path: "/indexes",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdExportImportRoute = Route$404.update({
	id: "/export-import",
	path: "/export-import",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDocumentsRoute = Route$405.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDbSettingsRoute = Route$406.update({
	id: "/db-settings",
	path: "/db-settings",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDbSecurityRoute = Route$407.update({
	id: "/db-security",
	path: "/db-security",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdColumnsRoute = Route$408.update({
	id: "/columns",
	path: "/columns",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdBackupsRoute = Route$409.update({
	id: "/backups",
	path: "/backups",
	getParentRoute: () => PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute
});
var AuthRouteChildren = {
	AuthJoinRoute,
	AuthMfaRoute,
	AuthRecoveryRoute,
	AuthSignInRoute,
	AuthSignOutRoute,
	AuthSignUpRoute,
	AuthVerifyEmailRoute,
	AuthAuthMagicUrlRoute,
	AuthOauth2ConsentRoute,
	AuthOauth2DeviceRoute,
	AuthAgentMcpCallbackRoute,
	AuthAssistantMcpCallbackRoute,
	AuthAuthOauth2FailureRoute,
	AuthAuthOauth2SuccessRoute
};
var AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
var MarketingRouteChildren = {
	MarketingAffiliatesRoute,
	MarketingAssetsRoute,
	MarketingBaaRoute,
	MarketingCommunityRoute,
	MarketingCompanyRoute,
	MarketingCookiesRoute,
	MarketingDomainsRoute,
	MarketingEducationRoute,
	MarketingEnterpriseRoute,
	MarketingHomeRoute,
	MarketingPartnersRoute,
	MarketingPricingRoute,
	MarketingPrivacyRoute,
	MarketingStartupsRoute,
	MarketingTermsRoute,
	MarketingBlogPageRoute,
	MarketingInitTicketIdRoute,
	MarketingIntegrationsSlugRoute,
	MarketingProductsProductIdRoute,
	MarketingThreadsThreadIdRoute,
	MarketingBlogIndexRoute,
	MarketingChangelogIndexRoute,
	MarketingIntegrationsIndexRoute,
	MarketingThreadsIndexRoute,
	MarketingBlogAuthorAuthorRoute,
	MarketingBlogCategoryCategoryRoute,
	MarketingBlogPostSlugRoute,
	MarketingChangelogEntryEntryRoute,
	MarketingThreadsAuthorsAuthorIdRoute
};
var MarketingRouteWithChildren = MarketingRoute._addFileChildren(MarketingRouteChildren);
var ProtectedRouteChildren = { ProtectedExampleProtectedRouteRoute };
var ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(ProtectedRouteChildren);
var PublicAccountRouteChildren = {
	PublicAccountAffiliatesRoute,
	PublicAccountApplicationsRoute,
	PublicAccountBillingAddressesRoute,
	PublicAccountPaymentMethodsRoute,
	PublicAccountPaymentsRoute,
	PublicAccountSecurityRoute,
	PublicAccountSessionsRoute,
	PublicAccountIndexRoute
};
var PublicAccountRouteWithChildren = PublicAccountRoute._addFileChildren(PublicAccountRouteChildren);
var PublicAgentAutomationsRouteChildren = {
	PublicAgentAutomationsAutomationIdRoute,
	PublicAgentAutomationsCreateRoute,
	PublicAgentAutomationsIndexRoute
};
var PublicAgentAutomationsRouteWithChildren = PublicAgentAutomationsRoute._addFileChildren(PublicAgentAutomationsRouteChildren);
var PublicAgentSettingsRouteChildren = {
	PublicAgentSettingsMcpRoute,
	PublicAgentSettingsMemoryRoute,
	PublicAgentSettingsModelsRoute,
	PublicAgentSettingsUsageRoute,
	PublicAgentSettingsIndexRoute
};
var PublicAgentRouteChildren = {
	PublicAgentAgentIdRoute,
	PublicAgentAutomationsRoute: PublicAgentAutomationsRouteWithChildren,
	PublicAgentSettingsRoute: PublicAgentSettingsRoute._addFileChildren(PublicAgentSettingsRouteChildren),
	PublicAgentIndexRoute
};
var PublicAgentRouteWithChildren = PublicAgentRoute._addFileChildren(PublicAgentRouteChildren);
var PublicOrganizationsOrgIdAgentAutomationsRouteChildren = {
	PublicOrganizationsOrgIdAgentAutomationsAutomationIdRoute,
	PublicOrganizationsOrgIdAgentAutomationsCreateRoute,
	PublicOrganizationsOrgIdAgentAutomationsIndexRoute
};
var PublicOrganizationsOrgIdAgentAutomationsRouteWithChildren = PublicOrganizationsOrgIdAgentAutomationsRoute._addFileChildren(PublicOrganizationsOrgIdAgentAutomationsRouteChildren);
var PublicOrganizationsOrgIdAgentSettingsRouteChildren = {
	PublicOrganizationsOrgIdAgentSettingsMcpRoute,
	PublicOrganizationsOrgIdAgentSettingsMemoryRoute,
	PublicOrganizationsOrgIdAgentSettingsModelsRoute,
	PublicOrganizationsOrgIdAgentSettingsUsageRoute,
	PublicOrganizationsOrgIdAgentSettingsIndexRoute
};
var PublicOrganizationsOrgIdAgentRouteChildren = {
	PublicOrganizationsOrgIdAgentAgentIdRoute,
	PublicOrganizationsOrgIdAgentAutomationsRoute: PublicOrganizationsOrgIdAgentAutomationsRouteWithChildren,
	PublicOrganizationsOrgIdAgentSettingsRoute: PublicOrganizationsOrgIdAgentSettingsRoute._addFileChildren(PublicOrganizationsOrgIdAgentSettingsRouteChildren),
	PublicOrganizationsOrgIdAgentIndexRoute
};
var PublicOrganizationsOrgIdAgentRouteWithChildren = PublicOrganizationsOrgIdAgentRoute._addFileChildren(PublicOrganizationsOrgIdAgentRouteChildren);
var PublicOrganizationsOrgIdAppsAppIdRouteChildren = {
	PublicOrganizationsOrgIdAppsAppIdBrandingRoute,
	PublicOrganizationsOrgIdAppsAppIdLegalRoute,
	PublicOrganizationsOrgIdAppsAppIdOauthRoute,
	PublicOrganizationsOrgIdAppsAppIdSecretsRoute,
	PublicOrganizationsOrgIdAppsAppIdSettingsRoute,
	PublicOrganizationsOrgIdAppsAppIdSupportRoute,
	PublicOrganizationsOrgIdAppsAppIdIndexRoute
};
var PublicOrganizationsOrgIdAppsRouteChildren = {
	PublicOrganizationsOrgIdAppsAppIdRoute: PublicOrganizationsOrgIdAppsAppIdRoute._addFileChildren(PublicOrganizationsOrgIdAppsAppIdRouteChildren),
	PublicOrganizationsOrgIdAppsIndexRoute
};
var PublicOrganizationsOrgIdAppsRouteWithChildren = PublicOrganizationsOrgIdAppsRoute._addFileChildren(PublicOrganizationsOrgIdAppsRouteChildren);
var PublicOrganizationsOrgIdDomainsDomainIdRouteChildren = {
	PublicOrganizationsOrgIdDomainsDomainIdSettingsRoute,
	PublicOrganizationsOrgIdDomainsDomainIdIndexRoute
};
var PublicOrganizationsOrgIdDomainsRouteChildren = {
	PublicOrganizationsOrgIdDomainsDomainIdRoute: PublicOrganizationsOrgIdDomainsDomainIdRoute._addFileChildren(PublicOrganizationsOrgIdDomainsDomainIdRouteChildren),
	PublicOrganizationsOrgIdDomainsBuyRoute,
	PublicOrganizationsOrgIdDomainsTransferInRoute,
	PublicOrganizationsOrgIdDomainsIndexRoute
};
var PublicOrganizationsOrgIdDomainsRouteWithChildren = PublicOrganizationsOrgIdDomainsRoute._addFileChildren(PublicOrganizationsOrgIdDomainsRouteChildren);
var PublicOrganizationsOrgIdMarketplaceRouteChildren = {
	PublicOrganizationsOrgIdMarketplaceIndexRoute,
	PublicOrganizationsOrgIdMarketplaceAppIdIndexRoute
};
var PublicOrganizationsOrgIdMarketplaceRouteWithChildren = PublicOrganizationsOrgIdMarketplaceRoute._addFileChildren(PublicOrganizationsOrgIdMarketplaceRouteChildren);
var PublicOrganizationsOrgIdSettingsRouteChildren = {
	PublicOrganizationsOrgIdSettingsApiKeysRoute,
	PublicOrganizationsOrgIdSettingsBillingRoute,
	PublicOrganizationsOrgIdSettingsComplianceRoute,
	PublicOrganizationsOrgIdSettingsDangerZoneRoute,
	PublicOrganizationsOrgIdSettingsMembersRoute,
	PublicOrganizationsOrgIdSettingsOauthAppsRoute
};
var PublicOrganizationsOrgIdRouteChildren = {
	PublicOrganizationsOrgIdAgentRoute: PublicOrganizationsOrgIdAgentRouteWithChildren,
	PublicOrganizationsOrgIdAppsRoute: PublicOrganizationsOrgIdAppsRouteWithChildren,
	PublicOrganizationsOrgIdBillingRoute,
	PublicOrganizationsOrgIdDomainsRoute: PublicOrganizationsOrgIdDomainsRouteWithChildren,
	PublicOrganizationsOrgIdMarketplaceRoute: PublicOrganizationsOrgIdMarketplaceRouteWithChildren,
	PublicOrganizationsOrgIdMembersRoute,
	PublicOrganizationsOrgIdSettingsRoute: PublicOrganizationsOrgIdSettingsRoute._addFileChildren(PublicOrganizationsOrgIdSettingsRouteChildren),
	PublicOrganizationsOrgIdSupportRoute,
	PublicOrganizationsOrgIdIndexRoute
};
var PublicOrganizationsOrgIdRouteWithChildren = PublicOrganizationsOrgIdRoute._addFileChildren(PublicOrganizationsOrgIdRouteChildren);
var PublicProjectsProjectIdAnalyticsRouteChildren = { PublicProjectsProjectIdAnalyticsWebsiteIdRoute };
var PublicProjectsProjectIdAnalyticsRouteWithChildren = PublicProjectsProjectIdAnalyticsRoute._addFileChildren(PublicProjectsProjectIdAnalyticsRouteChildren);
var PublicProjectsProjectIdAppsRouteChildren = { PublicProjectsProjectIdAppsAddRoute };
var PublicProjectsProjectIdAppsRouteWithChildren = PublicProjectsProjectIdAppsRoute._addFileChildren(PublicProjectsProjectIdAppsRouteChildren);
var PublicProjectsProjectIdAuthOauth2ServerRouteChildren = {
	PublicProjectsProjectIdAuthOauth2ServerAppsRoute,
	PublicProjectsProjectIdAuthOauth2ServerSettingsRoute
};
var PublicProjectsProjectIdAuthOauth2ServerRouteWithChildren = PublicProjectsProjectIdAuthOauth2ServerRoute._addFileChildren(PublicProjectsProjectIdAuthOauth2ServerRouteChildren);
var PublicProjectsProjectIdAuthPoliciesRouteChildren = {
	PublicProjectsProjectIdAuthPoliciesEmailsRoute,
	PublicProjectsProjectIdAuthPoliciesMembershipsRoute,
	PublicProjectsProjectIdAuthPoliciesPasswordsRoute,
	PublicProjectsProjectIdAuthPoliciesSessionsRoute,
	PublicProjectsProjectIdAuthPoliciesUsersRoute
};
var PublicProjectsProjectIdAuthPoliciesRouteWithChildren = PublicProjectsProjectIdAuthPoliciesRoute._addFileChildren(PublicProjectsProjectIdAuthPoliciesRouteChildren);
var PublicProjectsProjectIdAuthTeamsTeamIdRouteChildren = {
	PublicProjectsProjectIdAuthTeamsTeamIdActivityRoute,
	PublicProjectsProjectIdAuthTeamsTeamIdMembersRoute
};
var PublicProjectsProjectIdAuthTeamsRouteChildren = { PublicProjectsProjectIdAuthTeamsTeamIdRoute: PublicProjectsProjectIdAuthTeamsTeamIdRoute._addFileChildren(PublicProjectsProjectIdAuthTeamsTeamIdRouteChildren) };
var PublicProjectsProjectIdAuthTeamsRouteWithChildren = PublicProjectsProjectIdAuthTeamsRoute._addFileChildren(PublicProjectsProjectIdAuthTeamsRouteChildren);
var PublicProjectsProjectIdAuthUsersUserIdRouteChildren = {
	PublicProjectsProjectIdAuthUsersUserIdActivityRoute,
	PublicProjectsProjectIdAuthUsersUserIdIdentitiesRoute,
	PublicProjectsProjectIdAuthUsersUserIdMembershipsRoute,
	PublicProjectsProjectIdAuthUsersUserIdSessionsRoute,
	PublicProjectsProjectIdAuthUsersUserIdTargetsRoute
};
var PublicProjectsProjectIdAuthRouteChildren = {
	PublicProjectsProjectIdAuthOauth2ServerRoute: PublicProjectsProjectIdAuthOauth2ServerRouteWithChildren,
	PublicProjectsProjectIdAuthPoliciesRoute: PublicProjectsProjectIdAuthPoliciesRouteWithChildren,
	PublicProjectsProjectIdAuthSecurityRoute,
	PublicProjectsProjectIdAuthSettingsRoute,
	PublicProjectsProjectIdAuthSocialProvidersRoute,
	PublicProjectsProjectIdAuthTeamsRoute: PublicProjectsProjectIdAuthTeamsRouteWithChildren,
	PublicProjectsProjectIdAuthTemplatesRoute,
	PublicProjectsProjectIdAuthIndexRoute,
	PublicProjectsProjectIdAuthUsersUserIdRoute: PublicProjectsProjectIdAuthUsersUserIdRoute._addFileChildren(PublicProjectsProjectIdAuthUsersUserIdRouteChildren)
};
var PublicProjectsProjectIdAuthRouteWithChildren = PublicProjectsProjectIdAuthRoute._addFileChildren(PublicProjectsProjectIdAuthRouteChildren);
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRouteChildren = {
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdBackupsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdColumnsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDbSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDbSettingsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdDocumentsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdExportImportRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdIndexesRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdJsonRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdMonitorRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdSettingsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdVisualizerRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdIndexRoute
};
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRouteChildren = { PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsCollectionIdRouteChildren) };
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRouteWithChildren = PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRouteChildren);
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRouteChildren = {
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsReplicationRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsSpecificationRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsIndexRoute
};
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRouteWithChildren = PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRouteChildren);
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRouteChildren = {
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdBackupsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdColumnsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDbSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDbSettingsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdDocumentsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdExportImportRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdIndexesRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdMonitorRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRowsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdSettingsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdVisualizerRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdIndexRoute
};
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRouteChildren = { PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesTableIdRouteChildren) };
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdRouteChildren = {
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTableIdRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdBackupsRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdBrowserRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdCollectionsRouteWithChildren,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdDbSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdExportImportRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdMonitorRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSecurityRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdSettingsRouteWithChildren,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdTablesRouteChildren),
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdVisualizerRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdIndexRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdOverviewIndexRoute
};
var PublicProjectsProjectIdDatabasesDbKindDatabaseIdRouteWithChildren = PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesDbKindDatabaseIdRouteChildren);
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRouteChildren = {
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsComputeRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsMaintenanceRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsNetworkRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsPitrRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsReplicationRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsStorageRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsIndexRoute
};
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRouteWithChildren = PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute._addFileChildren(PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRouteChildren);
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRouteChildren = {
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdColumnsRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdIndexesRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRowsRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdSecurityRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdSettingsRoute
};
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdRouteChildren = {
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdBackupsRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdConnectRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdConnectionsRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdMonitorRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdRolesRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRoute: PublicProjectsProjectIdDatabasesMysqlDatabaseIdSettingsRouteWithChildren,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdSqlRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdVisualizerRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdIndexRoute,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute: PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesMysqlDatabaseIdTablesTableIdRouteChildren)
};
var PublicProjectsProjectIdDatabasesMysqlDatabaseIdRouteWithChildren = PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesMysqlDatabaseIdRouteChildren);
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRouteChildren = {
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsComputeRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsExtensionsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsMaintenanceRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsNetworkRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsPitrRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsReplicationRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsStorageRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsIndexRoute
};
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRouteWithChildren = PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute._addFileChildren(PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRouteChildren);
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRouteChildren = {
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdColumnsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdIndexesRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRowsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdSecurityRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdSettingsRoute
};
var PublicProjectsProjectIdDatabasesPostgresDatabaseIdRouteChildren = {
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdBackupsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdConnectRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdConnectionsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdEnumsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdExtensionsRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdMonitorRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdRolesRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRoute: PublicProjectsProjectIdDatabasesPostgresDatabaseIdSettingsRouteWithChildren,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdSqlRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdVisualizerRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdIndexRoute,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute: PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesPostgresDatabaseIdTablesTableIdRouteChildren)
};
var PublicProjectsProjectIdDatabasesRouteChildren = {
	PublicProjectsProjectIdDatabasesDatabaseIdRoute,
	PublicProjectsProjectIdDatabasesCreateRoute,
	PublicProjectsProjectIdDatabasesIndexRoute,
	PublicProjectsProjectIdDatabasesDbKindDatabaseIdRoute: PublicProjectsProjectIdDatabasesDbKindDatabaseIdRouteWithChildren,
	PublicProjectsProjectIdDatabasesMysqlDatabaseIdRoute: PublicProjectsProjectIdDatabasesMysqlDatabaseIdRouteWithChildren,
	PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute: PublicProjectsProjectIdDatabasesPostgresDatabaseIdRoute._addFileChildren(PublicProjectsProjectIdDatabasesPostgresDatabaseIdRouteChildren)
};
var PublicProjectsProjectIdDatabasesRouteWithChildren = PublicProjectsProjectIdDatabasesRoute._addFileChildren(PublicProjectsProjectIdDatabasesRouteChildren);
var PublicProjectsProjectIdFirewallRouteChildren = {
	PublicProjectsProjectIdFirewallCreateRoute,
	PublicProjectsProjectIdFirewallIndexRoute
};
var PublicProjectsProjectIdFirewallRouteWithChildren = PublicProjectsProjectIdFirewallRoute._addFileChildren(PublicProjectsProjectIdFirewallRouteChildren);
var PublicProjectsProjectIdFunctionsFunctionIdDomainsRouteChildren = {
	PublicProjectsProjectIdFunctionsFunctionIdDomainsAddRoute,
	PublicProjectsProjectIdFunctionsFunctionIdDomainsIndexRoute
};
var PublicProjectsProjectIdFunctionsFunctionIdDomainsRouteWithChildren = PublicProjectsProjectIdFunctionsFunctionIdDomainsRoute._addFileChildren(PublicProjectsProjectIdFunctionsFunctionIdDomainsRouteChildren);
var PublicProjectsProjectIdFunctionsFunctionIdSettingsRouteChildren = {
	PublicProjectsProjectIdFunctionsFunctionIdSettingsBuildRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsDangerZoneRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsExecutionsRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsGitRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsRuntimeRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsIndexRoute
};
var PublicProjectsProjectIdFunctionsFunctionIdRouteChildren = {
	PublicProjectsProjectIdFunctionsFunctionIdDomainsRoute: PublicProjectsProjectIdFunctionsFunctionIdDomainsRouteWithChildren,
	PublicProjectsProjectIdFunctionsFunctionIdExecutionsRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSecurityRoute,
	PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute: PublicProjectsProjectIdFunctionsFunctionIdSettingsRoute._addFileChildren(PublicProjectsProjectIdFunctionsFunctionIdSettingsRouteChildren),
	PublicProjectsProjectIdFunctionsFunctionIdVariablesRoute,
	PublicProjectsProjectIdFunctionsFunctionIdIndexRoute,
	PublicProjectsProjectIdFunctionsFunctionIdDeploymentsDeploymentIdIndexRoute
};
var PublicProjectsProjectIdFunctionsFunctionIdRouteWithChildren = PublicProjectsProjectIdFunctionsFunctionIdRoute._addFileChildren(PublicProjectsProjectIdFunctionsFunctionIdRouteChildren);
var PublicProjectsProjectIdFunctionsCreateRouteChildren = {
	PublicProjectsProjectIdFunctionsCreateDeployRoute,
	PublicProjectsProjectIdFunctionsCreateDeployingRoute,
	PublicProjectsProjectIdFunctionsCreateManualRoute,
	PublicProjectsProjectIdFunctionsCreateIndexRoute,
	PublicProjectsProjectIdFunctionsCreateRepositoryRepositoryRoute,
	PublicProjectsProjectIdFunctionsCreateTemplateTemplateIdRoute
};
var PublicProjectsProjectIdFunctionsRouteChildren = {
	PublicProjectsProjectIdFunctionsFunctionIdRoute: PublicProjectsProjectIdFunctionsFunctionIdRouteWithChildren,
	PublicProjectsProjectIdFunctionsCreateRoute: PublicProjectsProjectIdFunctionsCreateRoute._addFileChildren(PublicProjectsProjectIdFunctionsCreateRouteChildren),
	PublicProjectsProjectIdFunctionsEditorRoute,
	PublicProjectsProjectIdFunctionsTemplatesRoute,
	PublicProjectsProjectIdFunctionsIndexRoute
};
var PublicProjectsProjectIdFunctionsRouteWithChildren = PublicProjectsProjectIdFunctionsRoute._addFileChildren(PublicProjectsProjectIdFunctionsRouteChildren);
var PublicProjectsProjectIdMessagingMessageIdRouteChildren = {
	PublicProjectsProjectIdMessagingMessageIdSettingsRoute,
	PublicProjectsProjectIdMessagingMessageIdIndexRoute
};
var PublicProjectsProjectIdMessagingMessageIdRouteWithChildren = PublicProjectsProjectIdMessagingMessageIdRoute._addFileChildren(PublicProjectsProjectIdMessagingMessageIdRouteChildren);
var PublicProjectsProjectIdMessagingProvidersProviderIdRouteChildren = {
	PublicProjectsProjectIdMessagingProvidersProviderIdActivityRoute,
	PublicProjectsProjectIdMessagingProvidersProviderIdSettingsRoute,
	PublicProjectsProjectIdMessagingProvidersProviderIdIndexRoute
};
var PublicProjectsProjectIdMessagingProvidersProviderIdRouteWithChildren = PublicProjectsProjectIdMessagingProvidersProviderIdRoute._addFileChildren(PublicProjectsProjectIdMessagingProvidersProviderIdRouteChildren);
var PublicProjectsProjectIdMessagingTopicsTopicIdRouteChildren = {
	PublicProjectsProjectIdMessagingTopicsTopicIdActivityRoute,
	PublicProjectsProjectIdMessagingTopicsTopicIdSettingsRoute,
	PublicProjectsProjectIdMessagingTopicsTopicIdIndexRoute
};
var PublicProjectsProjectIdMessagingRouteChildren = {
	PublicProjectsProjectIdMessagingMessageIdRoute: PublicProjectsProjectIdMessagingMessageIdRouteWithChildren,
	PublicProjectsProjectIdMessagingIndexRoute,
	PublicProjectsProjectIdMessagingProvidersProviderIdRoute: PublicProjectsProjectIdMessagingProvidersProviderIdRouteWithChildren,
	PublicProjectsProjectIdMessagingProvidersCreateRoute,
	PublicProjectsProjectIdMessagingTopicsTopicIdRoute: PublicProjectsProjectIdMessagingTopicsTopicIdRoute._addFileChildren(PublicProjectsProjectIdMessagingTopicsTopicIdRouteChildren),
	PublicProjectsProjectIdMessagingProvidersIndexRoute,
	PublicProjectsProjectIdMessagingTopicsIndexRoute
};
var PublicProjectsProjectIdMessagingRouteWithChildren = PublicProjectsProjectIdMessagingRoute._addFileChildren(PublicProjectsProjectIdMessagingRouteChildren);
var PublicProjectsProjectIdRealtimeRouteChildren = {
	PublicProjectsProjectIdRealtimeChannelsRoute,
	PublicProjectsProjectIdRealtimeDebuggerRoute,
	PublicProjectsProjectIdRealtimeMessagesRoute,
	PublicProjectsProjectIdRealtimeIndexRoute
};
var PublicProjectsProjectIdRealtimeRouteWithChildren = PublicProjectsProjectIdRealtimeRoute._addFileChildren(PublicProjectsProjectIdRealtimeRouteChildren);
var PublicProjectsProjectIdSettingsDomainsRouteChildren = {
	PublicProjectsProjectIdSettingsDomainsAddRoute,
	PublicProjectsProjectIdSettingsDomainsIndexRoute
};
var PublicProjectsProjectIdSettingsDomainsRouteWithChildren = PublicProjectsProjectIdSettingsDomainsRoute._addFileChildren(PublicProjectsProjectIdSettingsDomainsRouteChildren);
var PublicProjectsProjectIdSettingsMigrationsRouteChildren = {
	PublicProjectsProjectIdSettingsMigrationsImportRoute,
	PublicProjectsProjectIdSettingsMigrationsIndexRoute
};
var PublicProjectsProjectIdSettingsRouteChildren = {
	PublicProjectsProjectIdSettingsDomainsRoute: PublicProjectsProjectIdSettingsDomainsRouteWithChildren,
	PublicProjectsProjectIdSettingsMigrationsRoute: PublicProjectsProjectIdSettingsMigrationsRoute._addFileChildren(PublicProjectsProjectIdSettingsMigrationsRouteChildren),
	PublicProjectsProjectIdSettingsSmtpRoute,
	PublicProjectsProjectIdSettingsVariablesRoute,
	PublicProjectsProjectIdSettingsWebhooksRoute,
	PublicProjectsProjectIdSettingsIndexRoute
};
var PublicProjectsProjectIdSettingsRouteWithChildren = PublicProjectsProjectIdSettingsRoute._addFileChildren(PublicProjectsProjectIdSettingsRouteChildren);
var PublicProjectsProjectIdStorageBucketIdRouteChildren = {
	PublicProjectsProjectIdStorageBucketIdSecurityRoute,
	PublicProjectsProjectIdStorageBucketIdSettingsRoute,
	PublicProjectsProjectIdStorageBucketIdIndexRoute
};
var PublicProjectsProjectIdStorageRouteChildren = {
	PublicProjectsProjectIdStorageBucketIdRoute: PublicProjectsProjectIdStorageBucketIdRoute._addFileChildren(PublicProjectsProjectIdStorageBucketIdRouteChildren),
	PublicProjectsProjectIdStorageIndexRoute
};
var PublicProjectsProjectIdStorageRouteWithChildren = PublicProjectsProjectIdStorageRoute._addFileChildren(PublicProjectsProjectIdStorageRouteChildren);
var PublicProjectsProjectIdStoresRouteChildren = {
	PublicProjectsProjectIdStoresIndexRoute,
	PublicProjectsProjectIdStoresAppIdIndexRoute
};
var PublicProjectsProjectIdStoresRouteWithChildren = PublicProjectsProjectIdStoresRoute._addFileChildren(PublicProjectsProjectIdStoresRouteChildren);
var PublicProjectsProjectIdUsageCategoryIdRouteChildren = { PublicProjectsProjectIdUsageCategoryIdMetricIdRoute };
var PublicProjectsProjectIdUsageRouteChildren = {
	PublicProjectsProjectIdUsageCategoryIdRoute: PublicProjectsProjectIdUsageCategoryIdRoute._addFileChildren(PublicProjectsProjectIdUsageCategoryIdRouteChildren),
	PublicProjectsProjectIdUsageIndexRoute
};
var PublicProjectsProjectIdUsageRouteWithChildren = PublicProjectsProjectIdUsageRoute._addFileChildren(PublicProjectsProjectIdUsageRouteChildren);
var PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRouteChildren = { PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdIndexRoute };
var PublicProjectsProjectIdSitesSiteIdDeploymentsRouteChildren = {
	PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRoute: PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRoute._addFileChildren(PublicProjectsProjectIdSitesSiteIdDeploymentsDeploymentIdRouteChildren),
	PublicProjectsProjectIdSitesSiteIdDeploymentsIndexRoute
};
var PublicProjectsProjectIdSitesSiteIdDeploymentsRouteWithChildren = PublicProjectsProjectIdSitesSiteIdDeploymentsRoute._addFileChildren(PublicProjectsProjectIdSitesSiteIdDeploymentsRouteChildren);
var PublicProjectsProjectIdSitesSiteIdDomainsRouteChildren = {
	PublicProjectsProjectIdSitesSiteIdDomainsAddRoute,
	PublicProjectsProjectIdSitesSiteIdDomainsIndexRoute
};
var PublicProjectsProjectIdSitesSiteIdDomainsRouteWithChildren = PublicProjectsProjectIdSitesSiteIdDomainsRoute._addFileChildren(PublicProjectsProjectIdSitesSiteIdDomainsRouteChildren);
var PublicProjectsProjectIdSitesSiteIdSettingsRouteChildren = {
	PublicProjectsProjectIdSitesSiteIdSettingsBuildRoute,
	PublicProjectsProjectIdSitesSiteIdSettingsDangerZoneRoute,
	PublicProjectsProjectIdSitesSiteIdSettingsGitRoute,
	PublicProjectsProjectIdSitesSiteIdSettingsRuntimeRoute,
	PublicProjectsProjectIdSitesSiteIdSettingsIndexRoute
};
var PublicProjectsProjectIdSitesSiteIdRouteChildren = {
	PublicProjectsProjectIdSitesSiteIdDeploymentsRoute: PublicProjectsProjectIdSitesSiteIdDeploymentsRouteWithChildren,
	PublicProjectsProjectIdSitesSiteIdDomainsRoute: PublicProjectsProjectIdSitesSiteIdDomainsRouteWithChildren,
	PublicProjectsProjectIdSitesSiteIdLogsRoute,
	PublicProjectsProjectIdSitesSiteIdSettingsRoute: PublicProjectsProjectIdSitesSiteIdSettingsRoute._addFileChildren(PublicProjectsProjectIdSitesSiteIdSettingsRouteChildren),
	PublicProjectsProjectIdSitesSiteIdUsageRoute,
	PublicProjectsProjectIdSitesSiteIdVariablesRoute,
	PublicProjectsProjectIdSitesSiteIdIndexRoute
};
var PublicProjectsProjectIdSitesSiteIdRouteWithChildren = PublicProjectsProjectIdSitesSiteIdRoute._addFileChildren(PublicProjectsProjectIdSitesSiteIdRouteChildren);
var PublicProjectsProjectIdSitesCreateRouteChildren = {
	PublicProjectsProjectIdSitesCreateDeployRoute,
	PublicProjectsProjectIdSitesCreateDeployingRoute,
	PublicProjectsProjectIdSitesCreateFinishRoute,
	PublicProjectsProjectIdSitesCreateManualRoute,
	PublicProjectsProjectIdSitesCreateIndexRoute,
	PublicProjectsProjectIdSitesCreateTemplatesTemplateRoute,
	PublicProjectsProjectIdSitesCreateRepositoriesInstallationIdRepositoryIdRoute
};
var PublicProjectsProjectIdRouteChildren = {
	PublicProjectsProjectIdActivityRoute,
	PublicProjectsProjectIdAdvisorRoute,
	PublicProjectsProjectIdAnalyticsRoute: PublicProjectsProjectIdAnalyticsRouteWithChildren,
	PublicProjectsProjectIdApiKeysRoute,
	PublicProjectsProjectIdAppsRoute: PublicProjectsProjectIdAppsRouteWithChildren,
	PublicProjectsProjectIdAuthRoute: PublicProjectsProjectIdAuthRouteWithChildren,
	PublicProjectsProjectIdDatabasesRoute: PublicProjectsProjectIdDatabasesRouteWithChildren,
	PublicProjectsProjectIdExplorerRoute,
	PublicProjectsProjectIdFirewallRoute: PublicProjectsProjectIdFirewallRouteWithChildren,
	PublicProjectsProjectIdFunctionsRoute: PublicProjectsProjectIdFunctionsRouteWithChildren,
	PublicProjectsProjectIdImagineRoute,
	PublicProjectsProjectIdMessagingRoute: PublicProjectsProjectIdMessagingRouteWithChildren,
	PublicProjectsProjectIdOnboardingRoute,
	PublicProjectsProjectIdRealtimeRoute: PublicProjectsProjectIdRealtimeRouteWithChildren,
	PublicProjectsProjectIdSettingsRoute: PublicProjectsProjectIdSettingsRouteWithChildren,
	PublicProjectsProjectIdStorageRoute: PublicProjectsProjectIdStorageRouteWithChildren,
	PublicProjectsProjectIdStoresRoute: PublicProjectsProjectIdStoresRouteWithChildren,
	PublicProjectsProjectIdUsageRoute: PublicProjectsProjectIdUsageRouteWithChildren,
	PublicProjectsProjectIdIndexRoute,
	PublicProjectsProjectIdSitesSiteIdRoute: PublicProjectsProjectIdSitesSiteIdRouteWithChildren,
	PublicProjectsProjectIdSitesCreateRoute: PublicProjectsProjectIdSitesCreateRoute._addFileChildren(PublicProjectsProjectIdSitesCreateRouteChildren),
	PublicProjectsProjectIdSitesIndexRoute
};
var PublicRouteChildren = {
	PublicAccountRoute: PublicAccountRouteWithChildren,
	PublicAgentRoute: PublicAgentRouteWithChildren,
	PublicAssistantRoute,
	PublicBlocksRoute,
	PublicCacheRoute,
	PublicCompsRoute,
	PublicInitRoute,
	PublicResetRoute,
	PublicUpgradeRoute,
	PublicIndexRoute,
	PublicDebugCodeEditorPreviewRoute,
	PublicDebugErrorPreviewRoute,
	PublicDebugOauth2PreviewRoute,
	PublicDebugOrgSetupPreviewRoute,
	PublicDebugVerifyEmailPreviewRoute,
	PublicOrganizationsOrgIdRoute: PublicOrganizationsOrgIdRouteWithChildren,
	PublicProjectsProjectIdRoute: PublicProjectsProjectIdRoute._addFileChildren(PublicProjectsProjectIdRouteChildren)
};
var PublicRouteWithChildren = PublicRoute._addFileChildren(PublicRouteChildren);
var DocsRouteChildren = {
	DocsSplatRoute,
	DocsQuickStartsRoute,
	DocsTutorialsRoute,
	DocsIndexRoute,
	DocsPartnersIndexRoute,
	DocsReferencesVersionPlatformServiceRoute,
	DocsReferencesVersionModelsModelRoute
};
var DocsRouteWithChildren = DocsRoute._addFileChildren(DocsRouteChildren);
var GeneratorRouteChildren = {
	GeneratorGenerationIdRoute,
	GeneratorIndexRoute,
	GeneratorDiagramsGenerationIdRoute,
	GeneratorDiagramsIndexRoute
};
var GeneratorRouteWithChildren = GeneratorRoute._addFileChildren(GeneratorRouteChildren);
var ApiGeneratorCoverRouteChildren = { ApiGeneratorCoverEncodeRoute };
var rootRouteChildren = {
	AuthRoute: AuthRouteWithChildren,
	MarketingRoute: MarketingRouteWithChildren,
	ProtectedRoute: ProtectedRouteWithChildren,
	PublicRoute: PublicRouteWithChildren,
	AccessRoute,
	BlogDotmdRoute,
	ChangelogDotmdRoute,
	DiscordRoute,
	DocsRoute: DocsRouteWithChildren,
	DocsDotmdRoute,
	GeneratorRoute: GeneratorRouteWithChildren,
	IntegrationsDotmdRoute,
	LlmsFullDottxtRoute,
	LlmsDottxtRoute,
	RobotsDottxtRoute,
	ApiHelloRoute,
	CliInstallDotps1Route,
	CliInstallDotshRoute,
	DomainsContinueRoute,
	ILinkIdRoute,
	LlmsFullTxtRoute,
	LlmsTxtRoute,
	ApiBlogRssDotxmlRoute,
	ApiChangelogRssDotxmlRoute,
	ApiDebugIpRoute,
	ApiGeneratorCoverRoute: ApiGeneratorCoverRoute._addFileChildren(ApiGeneratorCoverRouteChildren),
	ApiGeneratorDiagramRoute,
	ApiOgImageDotpngRoute,
	ApiOgInitDotpngRoute,
	ApiRERoute,
	ApiRVDotjsRoute,
	ApiInitTicketIdOgDotpngRoute,
	ApiInitCalendarEventSlugRoute,
	ApiInitTicketEventSlugRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	const rqContext = getContext();
	const router = createRouter({
		routeTree,
		context: { ...rqContext },
		defaultPreload: "intent",
		defaultPendingMs: Infinity,
		defaultPendingComponent: () => null,
		defaultNotFoundComponent: NotFound,
		defaultErrorComponent: ({ error, info, reset }) => /* @__PURE__ */ jsx(ErrorComponent, {
			error,
			info,
			reset
		}),
		defaultOnCatch: (error, errorInfo) => {
			reportRouterCaughtError(error, errorInfo, { source: "router-defaultOnCatch" });
		},
		Wrap: (props) => {
			return /* @__PURE__ */ jsx(Provider, {
				...rqContext,
				children: props.children
			});
		}
	});
	setupQueryClientRouterIntegration(router, rqContext.queryClient);
	if (!router.isServer) {
		scheduleClearStaleChunkReloadGuard();
		const onUnhandledRejection = (event) => {
			if (tryReloadForStaleChunk(event.reason, { event })) {
				event.preventDefault();
				return;
			}
			reportUnhandledError(event.reason, "unhandledrejection");
		};
		const onWindowError = (event) => {
			if (tryReloadForStaleChunk(event.error ?? event.message, { event })) {
				event.preventDefault();
				return;
			}
			if (!event.error && !event.message) return;
			reportUnhandledError(event.error ?? event.message, "window.error");
		};
		const onVitePreloadError = (event) => {
			const payload = event.payload;
			if (tryReloadForStaleChunk(payload ?? "vite:preloadError", {
				event,
				fromVitePreload: true
			})) event.preventDefault();
		};
		window.addEventListener("unhandledrejection", onUnhandledRejection);
		window.addEventListener("error", onWindowError, true);
		window.addEventListener("vite:preloadError", onVitePreloadError);
	}
	return router;
}
export { getRouter };
