import { s as createServerFn, t as createServerRpc } from "../server.js";
import { c as getProjectApiEndpoint, d as sdk, l as getProjectRegion } from "./sdk-DjIJ_hjn.js";
import { o as areUsageBreakdownQueriesEnabled } from "./i18n-Db4baE06.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { m as LATEST_EXAMPLES_VERSION } from "./constants-Dd6QzW31.js";
import { d as LONG_STALE_TIME, g as isClientQueryEnabled, h as TINY_PAGE_SIZE, l as FILE_TOKENS_DEFAULT_PAGE_SIZE, o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME, t as ACTIVITY_DEFAULT_PAGE_SIZE, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { tn as isScreenshotModeActive } from "./organizations-BKtnlNrj.js";
import { a as getActiveProfileId, i as getActiveProfileFeatures, p as setBackendUsageStatsAvailability } from "./console-profiles-D__E5Kgi.js";
import { $t as POSTGRES_SIDEBAR_PANEL_DEFAULT, Br as mergeMysqlSqlEditorStateIntoPrefs, Bt as MAX_SAVED_MYSQL_QUERIES, Cr as buildPostgresSidebarPanelPrefs, D as syncConsoleAccountAfterMutation, Di as resolveMysqlSelectedSchema, Ei as resolveMysqlSavedQueriesScope, Gt as MAX_SAVED_POSTGRES_QUERY_SQL_CHARS, Hr as mergePostgresSqlEditorStateIntoPrefs, Ht as MAX_SAVED_MYSQL_QUERY_SQL_CHARS, Jt as MYSQL_SIDEBAR_PANEL_DEFAULT, Kt as MYSQL_SAVED_QUERIES_DEFAULT_SORT, Lr as mergeCommunitySupportPrefsIntoPrefs, Mr as getPostgresSqlEditorStateKey, O as updateAccountPrefs, Oi as resolvePostgresSavedQueriesScope, Qr as parseCommunitySupportPrefs, Sr as buildPostgresSelectedSchemaPrefs, Tr as buildPostgresSqlEditorStatePrefs, Ut as MAX_SAVED_POSTGRES_QUERIES, Vr as mergePostgresQueryHistoryIntoPrefs, Vt as MAX_SAVED_MYSQL_QUERY_NAME_LENGTH, Wt as MAX_SAVED_POSTGRES_QUERY_NAME_LENGTH, Yt as MYSQL_SIDEBAR_TABLES_DEFAULT_SORT, Zt as POSTGRES_SAVED_QUERIES_DEFAULT_SORT, _r as buildMysqlSidebarTablesSortPrefs, ai as parseMysqlSidebarPanel, bo as useUpdateConsoleTeamPrefs, br as buildPostgresSavedQueriesScopePrefs, ci as parsePostgresQueryHistory, di as parsePostgresSavedQueriesSort, ei as parseMysqlQueryHistory, en as POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT, fi as parsePostgresSelectedSchema, fr as buildMysqlSavedQueriesPrefs, go as useConsoleTeam, gr as buildMysqlSidebarPanelPrefs, hi as parsePostgresSqlEditorState, hr as buildMysqlSelectedSchemaPrefs, ii as parseMysqlSelectedSchema, jr as getMysqlSqlEditorStateKey, ki as resolvePostgresSelectedSchema, li as parsePostgresSavedQueries, m as getConsoleAccountFromCache, mi as parsePostgresSidebarTablesSort, mr as buildMysqlSavedQueriesSortPrefs, ni as parseMysqlSavedQueriesScope, o as commitConsoleAccountToCaches, oi as parseMysqlSidebarTablesSort, pi as parsePostgresSidebarPanel, pr as buildMysqlSavedQueriesScopePrefs, ri as parseMysqlSavedQueriesSort, s as consoleAccountQueryOptions, si as parseMysqlSqlEditorState, ti as parseMysqlSavedQueries, ui as parsePostgresSavedQueriesScope, vr as buildMysqlSqlEditorStatePrefs, wr as buildPostgresSidebarTablesSortPrefs, xr as buildPostgresSavedQueriesSortPrefs, yr as buildPostgresSavedQueriesPrefs, zr as mergeMysqlQueryHistoryIntoPrefs } from "./auth-BPuxYQAc.js";
import { et as fetchProjectById } from "./projects-BaTJenfQ.js";
import { t as buildAttributePrefixSearchQueries } from "./appwrite-id-L15yEGeF.js";
import { $t as dedicatedDatabaseSourceKey, Bt as normalizePostgresExecutionResult, Ht as ensureConsoleSqlApiStatements, J as invalidateDatabaseModel, Kt as requireOperationalDatabase, Ut as isSqlApiDdlBlockedError, Vt as wrapPostgresSqlForDisplay, Yt as dedicatedDatabaseService, nn as mapDedicatedDatabaseCredentials, tn as dedicatedEngineService, tt as refetchProjectDatabaseLists, zt as formatPostgresExecutionCellValue } from "./databases-Dh0pwZ6h.js";
import { D as shouldPollDedicatedDatabaseStatus, _ as matchesNativeEngine, b as coerceTrimmedString, y as DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS } from "./database-routes-DB_xKWuY.js";
import { f as postgresTableId, m as quotePostgresIdentifier, s as parsePostgresTableId } from "./postgres-database-routes-CyTsPbzl.js";
import { $ as postgresRelationSupportsRowCtid, B as buildPostgresTableColumnsForRowsSql, F as buildPostgresListTablesSql, G as executionResultRows$1, H as buildPostgresTableIndexesSql, I as buildPostgresSchemaEnumsSql, M as buildPostgresListSchemasCountSql, N as buildPostgresListSchemasSql, P as buildPostgresListTablesCountSql, Q as peelLeadingPostgresSqlComments, R as buildPostgresSingleRequestDdlSql, U as buildPostgresTableInfoSql, V as buildPostgresTableColumnsSql, X as isPostgresPrimaryKeyColumn, et as prefixPostgresSqlComment, it as sortPostgresTableIndexes, j as POSTGRES_SIDEBAR_LIST_PAGE_SIZE, nt as sortPostgresSchemaEnums, rt as sortPostgresTableColumns, tt as quotePostgresStringLiteral, z as buildPostgresTableAutocompleteColumnsSql } from "./database-row-inline-edits-CdyGeTxj.js";
import { f as parseMysqlTableId, m as quoteMysqlIdentifier, s as mysqlTableId } from "./mysql-database-routes-CVHkJzTt.js";
import { i as resolveUsageListOrder, n as OVERVIEW_ENDPOINT_BREAKDOWN_LIMIT, r as USAGE_BREAKDOWN_DRAWER_LIMIT, t as COMPUTE_BREAKDOWN_RESOURCE_LIMIT } from "./breakdown-limits-DJuGSNvk.js";
import { An as stripLeadingMysqlSqlComments, Cn as mysqlRelationSupportsRowCtid, Dn as readMysqlRowString, En as quoteMysqlStringLiteral, Et as filterMysqlRowCreateValues, F as getActivityFilterQueryParts, In as groupPostgresEditsByRow, Nn as filterPostgresRowCreateValues, On as sortMysqlTableColumns, Tn as prefixMysqlSqlComment, an as buildMysqlListTablesCountSql, bt as formatDecimalBytes, cn as buildMysqlSingleRequestDdlSql, dn as buildMysqlTableColumnsSql, fn as buildMysqlTableIndexesSql, gn as executionResultRows, hn as decodeMysqlDriverByteArray, in as buildMysqlListSchemasSql, jn as buildPostgresRowsListWhereClause, kn as sortMysqlTableIndexes, kt as groupMysqlEditsByRow, ln as buildMysqlTableAutocompleteColumnsSql, mn as coerceMysqlStringValue, nn as MYSQL_SIDEBAR_LIST_PAGE_SIZE, on as buildMysqlListTablesSql, pn as buildMysqlTableInfoSql, pt as queryParamToMap, rn as buildMysqlListSchemasCountSql, un as buildMysqlTableColumnsForRowsSql, wn as peelLeadingMysqlSqlComments, wt as buildMysqlRowsListWhereClause, xn as isMysqlPrimaryKeyColumn, yn as isMysqlDriverByteArray } from "./form-field-type-badge-C7qMzJo0.js";
import { g as resolveUsageDateBounds, h as resolveUsageChartFetchBounds, l as getStableUsageChartDateRange, t as DEFAULT_USAGE_CHART_INTERVAL, u as getUsageChartQueryRangeKeyPart, v as shouldRefetchUsageChartOnMount } from "./chart-interval-Dbrn19qD.js";
import { t as useConsoleImpersonationRevision } from "./use-console-impersonation-revision-BiI0c7pX.js";
import { $ as parseTableUsageResourceType, B as fetchUsageMetricsChartSeriesByMetric, F as fetchProjectUsageChartOverview, G as mergeTopEndpoints, H as fillGaugeChartPointsGaps, I as fetchProjectUsageEventBreakdown, J as sumUsageChartPoints, K as mergeUsageBreakdownItems, L as fetchProjectUsageMetricSeriesOverview, N as buildScreenshotModeChartPoints, P as computeChangePercent, Q as isUsageProjectResourceType, R as fetchProjectUsageMetricsOverview, U as getUsageChartFirstHalfPoints, V as fillChartPointsGaps, W as mergeChartPointsSeries, Y as sumUsageChartPointsForComparison, _t as DEDICATED_DATABASE_USAGE_RESOURCE_TYPE, at as fetchStorageBreakdownResources, bt as DEFAULT_USAGE_LOG_RETENTION_HOURS, dt as normalizeComputeBreakdownResourceIds, ht as normalizeDatabaseBreakdownResourceIds, lt as fetchComputeBreakdownResources, pt as fetchDatabaseBreakdownResources, q as resolveOverviewUsagePeriod, rt as normalizeTableBreakdownResourceLabels, st as normalizeStorageBreakdownResourceIds, tt as fetchTableBreakdownResources, vt as buildUsageResourceFilterQueries, z as fetchUsageMetricsBreakdownByMetric } from "./affiliates-BOg1SHC6.js";
import { t as MARKETING_SOCIAL_STATS } from "./social-stats-X1CQqP0k.js";
import { t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { a as formatCompactBytes, o as formatCompactCount, u as mbSecondsToGbHours } from "./format-metric-6jsfxd5f.js";
import { f as groupServicesByProduct, n as findMethodByOperationId, o as mergeConsoleOnlyDatabaseServices, s as parseOpenApiSpec } from "./parse-spec-DW3UGcrS.js";
import { t as assertAllowedExplorerRequestUrl } from "./proxy-validation-Bk7Iiado.js";
import { jsx } from "react/jsx-runtime";
import { redirect } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppwriteMigrationResource, FirebaseMigrationResource, ID, NHostMigrationResource, ProjectOAuthProviderId, ProjectSMTPSecure, Query, SupabaseMigrationResource, UsageInterval, WafRuleAction } from "@appwrite.io/console";
import { infiniteQueryOptions, keepPreviousData, queryOptions, useInfiniteQuery, useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { parseISO, subHours } from "date-fns";
import { toast } from "sonner";
import { AlertTriangle, BarChart3, Blocks, CreditCard, FileText, Gift, HardDrive, HeartHandshake, MessageSquare, Shield, Sparkles, Wrench } from "lucide-react";
import { z } from "zod";
async function fetchProjectAddons(projectId) {
	return sdk.forConsole.projects.listAddons({ projectId });
}
async function fetchProjectAddonPrice(projectId, addon) {
	return sdk.forConsole.projects.getAddonPrice({
		projectId,
		addon
	});
}
async function fetchOrganizationAddons(organizationId) {
	return sdk.forConsole.organizations.listAddons({ organizationId });
}
async function fetchOrganizationAddonPrice(organizationId, addon) {
	return sdk.forConsole.organizations.getAddonPrice({
		organizationId,
		addon
	});
}
function projectAddonsQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"addons",
			"project",
			projectId
		],
		queryFn: () => fetchProjectAddons(projectId),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function projectAddonPriceQueryOptions(projectId, addon) {
	return queryOptions({
		queryKey: [
			"addons",
			"project",
			"price",
			projectId,
			addon
		],
		queryFn: () => fetchProjectAddonPrice(projectId, addon),
		enabled: !!projectId && !!addon,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && addon ? 300 * 1e3 : 0
	});
}
function organizationAddonsQueryOptions(organizationId) {
	return queryOptions({
		queryKey: [
			"addons",
			"organization",
			organizationId
		],
		queryFn: () => fetchOrganizationAddons(organizationId),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function organizationAddonPriceQueryOptions(organizationId, addon) {
	return queryOptions({
		queryKey: [
			"addons",
			"organization",
			"price",
			organizationId,
			addon
		],
		queryFn: () => fetchOrganizationAddonPrice(organizationId, addon),
		enabled: !!organizationId && !!addon,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId && addon ? 300 * 1e3 : 0
	});
}
function useProjectAddons(projectId) {
	const query = useQuery(projectAddonsQueryOptions(projectId));
	return {
		addons: query.data?.addons ?? [],
		total: query.data?.total ?? 0,
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useProjectAddonPrice(projectId, addon) {
	const query = useQuery(projectAddonPriceQueryOptions(projectId, addon));
	return {
		addonPrice: query.data ?? null,
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useOrganizationAddons(organizationId) {
	const query = useQuery(organizationAddonsQueryOptions(organizationId));
	return {
		addons: query.data?.addons ?? [],
		total: query.data?.total ?? 0,
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useOrganizationAddonPrice(organizationId, addon) {
	const query = useQuery(organizationAddonPriceQueryOptions(organizationId, addon));
	return {
		addonPrice: query.data ?? null,
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
const ONBOARDING_PLATFORM_SDK_KEYS = [
	"project.createWebPlatform",
	"project.createAndroidPlatform",
	"project.createApplePlatform",
	"project.createWindowsPlatform",
	"project.createLinuxPlatform"
];
const ONBOARDING_DATABASE_SDK_KEYS = [
	"tablesDB.create",
	"documentsDB.create",
	"databases.create"
];
const ONBOARDING_DATABASE_SCHEMA_SDK_KEYS = [
	"tablesDB.createTable",
	"tablesDB.createRow",
	"documentsDB.createCollection",
	"documentsDB.createDocument",
	"databases.createCollection",
	"databases.createDocument"
];
const ONBOARDING_FUNCTION_DEPLOY_SDK_KEYS = [
	"functions.createDeployment",
	"functions.createTemplateDeployment",
	"functions.createVcsDeployment",
	"functions.updateFunctionDeployment"
];
const ONBOARDING_MESSAGING_PROVIDER_SDK_KEYS = [
	"messaging.createMailgunProvider",
	"messaging.createSendgridProvider",
	"messaging.createSesProvider",
	"messaging.createResendProvider",
	"messaging.createSmtpProvider",
	"messaging.createSMTPProvider",
	"messaging.createMsg91Provider",
	"messaging.createTelesignProvider",
	"messaging.createTextmagicProvider",
	"messaging.createTwilioProvider",
	"messaging.createVonageProvider",
	"messaging.createFcmProvider",
	"messaging.createFCMProvider",
	"messaging.createApnsProvider",
	"messaging.createAPNSProvider"
];
const ONBOARDING_SITE_DEPLOY_SDK_KEYS = [
	"sites.createDeployment",
	"sites.createTemplateDeployment",
	"sites.createVcsDeployment",
	"sites.updateSiteDeployment"
];
const ONBOARDING_AGENT_STEP = {
	id: "agent",
	label: "Connect your coding agent",
	hint: "Install Appwrite MCP in Cursor, Claude Code, Codex, or VS Code so your agent can manage this project.",
	cta: "Install MCP",
	ctaDone: "Open MCP",
	debug: "Done when the user opens Connect → MCP or skips this step (local only)."
};
const ONBOARDING_CONNECT = [{
	id: "app",
	label: "Register your app platform",
	hint: "Map your app's hostname or bundle ID so the SDK can reach this project.",
	cta: "Add platform",
	ctaDone: "Manage apps",
	to: "/projects/$projectId/apps",
	debug: `Done when any of: ${ONBOARDING_PLATFORM_SDK_KEYS.join(", ")}.`,
	sdkKeys: ONBOARDING_PLATFORM_SDK_KEYS
}, {
	id: "apiKey",
	label: "Create a server API key",
	hint: "Add a scoped secret for servers and CI; client apps use sessions instead.",
	cta: "Add API key",
	ctaDone: "Manage keys",
	to: "/projects/$projectId/api-keys",
	debug: "Done when `project.createKey` is completed or skipped.",
	sdkKeys: ["project.createKey"]
}];
var GROUP_AUTH = {
	id: "auth",
	label: "Auth",
	description: "Sign users in, organize teams, and control who can access each part of your product.",
	subSteps: [{
		id: "auth-users",
		label: "Add your first user",
		hint: "Register, import, or invite someone so Auth is in use.",
		cta: "Add user",
		ctaDone: "Manage users",
		to: "/projects/$projectId/auth",
		debug: "Done when any of `users.create`, `account.create`, or `account.createAnonymousSession` is completed or skipped.",
		sdkKeys: [
			"users.create",
			"account.create",
			"account.createAnonymousSession"
		]
	}, {
		id: "auth-teams",
		label: "Create a team",
		hint: "Group users and assign roles for access control.",
		cta: "Create team",
		ctaDone: "Manage teams",
		to: "/projects/$projectId/auth",
		debug: "Done when `teams.create` is completed or skipped.",
		sdkKeys: ["teams.create"]
	}]
};
var GROUP_DATABASE = {
	id: "database",
	label: "Databases",
	description: "Store and query structured data - add indexes and vector search when you need them.",
	subSteps: [{
		id: "db-database",
		label: "Create a database",
		hint: "Spin up a database (tables or documents) for your app data.",
		cta: "Create database",
		ctaDone: "Open databases",
		to: "/projects/$projectId/databases",
		debug: `Done when any of: ${ONBOARDING_DATABASE_SDK_KEYS.join(", ")}.`,
		sdkKeys: ONBOARDING_DATABASE_SDK_KEYS
	}, {
		id: "db-schema",
		label: "Define tables and load data",
		hint: "Add collections or tables, attributes, and indexes; then insert rows.",
		cta: "Set up schema",
		ctaDone: "Open databases",
		to: "/projects/$projectId/databases",
		debug: `Done when any of: ${ONBOARDING_DATABASE_SCHEMA_SDK_KEYS.join(", ")}.`,
		sdkKeys: ONBOARDING_DATABASE_SCHEMA_SDK_KEYS
	}]
};
var GROUP_STORAGE = {
	id: "storage",
	label: "Storage",
	description: "Upload files to buckets and serve or download them with secure, scoped access.",
	subSteps: [{
		id: "st-bucket",
		label: "Create a bucket",
		hint: "Add a bucket and set who can read or write files.",
		cta: "Create bucket",
		ctaDone: "Manage buckets",
		to: "/projects/$projectId/storage/$bucketId",
		params: { bucketId: "-" },
		debug: "Done when `storage.createBucket` is completed or skipped.",
		sdkKeys: ["storage.createBucket"]
	}, {
		id: "st-files",
		label: "Upload a file",
		hint: "Put an object in a bucket; use signed URLs or previews as needed.",
		cta: "Upload files",
		ctaDone: "Open storage",
		to: "/projects/$projectId/storage/$bucketId",
		params: { bucketId: "-" },
		debug: "Done when `storage.createFile` is completed or skipped.",
		sdkKeys: ["storage.createFile"]
	}]
};
var GROUP_FUNCTION = {
	id: "function",
	label: "Functions",
	description: "Run backend code on HTTP requests, schedules, or events from other services.",
	subSteps: [{
		id: "fn-function",
		label: "Create a function",
		hint: "Add serverless code and choose a runtime.",
		cta: "Create function",
		ctaDone: "Manage functions",
		to: "/projects/$projectId/functions",
		debug: "Done when `functions.create` is completed or skipped.",
		sdkKeys: ["functions.create"]
	}, {
		id: "fn-deploy",
		label: "Ship a deployment",
		hint: "Deploy your code so executions can run.",
		cta: "Open deployments",
		ctaDone: "View function",
		to: "/projects/$projectId/functions",
		debug: `Done when any of: ${ONBOARDING_FUNCTION_DEPLOY_SDK_KEYS.join(", ")}.`,
		sdkKeys: ONBOARDING_FUNCTION_DEPLOY_SDK_KEYS
	}]
};
var GROUP_MESSAGING = {
	id: "messaging",
	label: "Messaging",
	description: "Send email, push, and SMS by routing messages through topics and providers.",
	subSteps: [{
		id: "msg-topic",
		label: "Create a topic",
		hint: "Add a channel for push, email, or SMS broadcasts.",
		cta: "Create topic",
		ctaDone: "Manage topics",
		to: "/projects/$projectId/messaging",
		debug: "Done when `messaging.createTopic` is completed or skipped.",
		sdkKeys: ["messaging.createTopic"]
	}, {
		id: "msg-provider",
		label: "Add a provider",
		hint: "Connect SMTP, FCM, APNS, or another provider to send messages.",
		cta: "Add provider",
		ctaDone: "Manage providers",
		to: "/projects/$projectId/messaging",
		debug: `Done when any messaging provider create method is completed or skipped.`,
		sdkKeys: ONBOARDING_MESSAGING_PROVIDER_SDK_KEYS
	}]
};
var GROUP_SITE = {
	id: "site",
	label: "Sites",
	description: "Connect a Git repo and ship your frontend with builds, deploys, and custom domains.",
	subSteps: [{
		id: "site-create",
		label: "Create a site",
		hint: "Connect a repository and configure your build.",
		cta: "Create site",
		ctaDone: "Manage sites",
		to: "/projects/$projectId/sites",
		debug: "Done when `sites.create` is completed or skipped.",
		sdkKeys: ["sites.create"]
	}, {
		id: "site-pipeline",
		label: "Run a production deploy",
		hint: "Ship a build to production and tune environments.",
		cta: "Open deployments",
		ctaDone: "View site",
		to: "/projects/$projectId/sites",
		debug: `Done when any of: ${ONBOARDING_SITE_DEPLOY_SDK_KEYS.join(", ")}.`,
		sdkKeys: ONBOARDING_SITE_DEPLOY_SDK_KEYS
	}]
};
const ONBOARDING_PRODUCT_CATEGORIES = [{
	id: "build",
	label: "Build",
	groups: [
		GROUP_AUTH,
		GROUP_DATABASE,
		GROUP_STORAGE,
		GROUP_FUNCTION,
		GROUP_MESSAGING
	]
}, {
	id: "deploy",
	label: "Deploy",
	groups: [GROUP_SITE]
}];
function subStepCountsTowardProgress(sub) {
	return sub.countsTowardProgress !== false;
}
function forEachTrackedProductSubStep(fn) {
	for (const cat of ONBOARDING_PRODUCT_CATEGORIES) for (const group of cat.groups) for (const sub of group.subSteps) if (subStepCountsTowardProgress(sub)) fn(sub);
}
function getAtomicOnboardingStepCount() {
	let n = ONBOARDING_CONNECT.length;
	forEachTrackedProductSubStep(() => {
		n += 1;
	});
	return n;
}
function stageStatusFulfillsStep(status) {
	return status === "completed" || status === "skipped";
}
function getOnboardingStepState(snapshot, sdkKeys) {
	let hasCompleted = false;
	let hasSkipped = false;
	for (const key of sdkKeys) {
		const status = snapshot.stagesBySdk[key];
		if (status === "completed") hasCompleted = true;
		else if (status === "skipped") hasSkipped = true;
	}
	if (hasCompleted) return "completed";
	if (hasSkipped) return "skipped";
	return "pending";
}
function isOnboardingStepDone(snapshot, sdkKeys) {
	return sdkKeys.some((key) => stageStatusFulfillsStep(snapshot.stagesBySdk[key]));
}
function stagesToSnapshot(stages) {
	const stagesBySdk = {};
	for (const stage of stages) if (stage.sdk) stagesBySdk[stage.sdk] = stage.status;
	return { stagesBySdk };
}
async function fetchProjectOnboardingSnapshot(projectId) {
	return stagesToSnapshot((await sdk.forConsole.projects.listStages({ projectId })).stages ?? []);
}
async function skipOnboardingSteps(projectId, sdkKeys) {
	await Promise.all(sdkKeys.map((stageId) => sdk.forConsole.projects.updateStage({
		projectId,
		stageId,
		skip: true
	})));
}
function buildOnboardingStepStateMap(snapshot) {
	const map = /* @__PURE__ */ new Map();
	for (const step of ONBOARDING_CONNECT) map.set(step.id, getOnboardingStepState(snapshot, step.sdkKeys));
	for (const cat of ONBOARDING_PRODUCT_CATEGORIES) for (const group of cat.groups) for (const sub of group.subSteps) map.set(sub.id, getOnboardingStepState(snapshot, sub.sdkKeys));
	return map;
}
function getOnboardingGroupState(subStepIds, stepStates) {
	if (subStepIds.length === 0) return "pending";
	const states = subStepIds.map((id) => stepStates.get(id) ?? "pending");
	if (states.some((s) => s === "pending")) return "pending";
	if (states.every((s) => s === "skipped")) return "skipped";
	if (states.every((s) => s === "completed")) return "completed";
	if (states.some((s) => s === "completed")) return "completed";
	return "skipped";
}
function computeOnboardingProductBreakdown(snapshot) {
	const rows = [{
		id: "connect",
		label: "Connect",
		completed: ONBOARDING_CONNECT.filter((step) => isOnboardingStepDone(snapshot, step.sdkKeys)).length,
		total: ONBOARDING_CONNECT.length
	}];
	for (const cat of ONBOARDING_PRODUCT_CATEGORIES) for (const group of cat.groups) {
		let completed = 0;
		let total = 0;
		for (const sub of group.subSteps) {
			if (!subStepCountsTowardProgress(sub)) continue;
			total += 1;
			if (isOnboardingStepDone(snapshot, sub.sdkKeys)) completed += 1;
		}
		rows.push({
			id: group.id,
			label: group.label,
			completed,
			total
		});
	}
	return rows;
}
function computeOnboardingProgress(snapshot) {
	let completed = 0;
	let total = 0;
	for (const step of ONBOARDING_CONNECT) {
		total += 1;
		if (isOnboardingStepDone(snapshot, step.sdkKeys)) completed += 1;
	}
	for (const cat of ONBOARDING_PRODUCT_CATEGORIES) for (const group of cat.groups) for (const sub of group.subSteps) {
		if (!subStepCountsTowardProgress(sub)) continue;
		total += 1;
		if (isOnboardingStepDone(snapshot, sub.sdkKeys)) completed += 1;
	}
	const progress = total === 0 ? 0 : Math.round(completed / total * 100);
	return {
		completedSteps: completed,
		totalSteps: total,
		progress
	};
}
function onboardingSnapshotQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"onboarding",
			"snapshot",
			"project",
			projectId
		],
		queryFn: () => fetchProjectOnboardingSnapshot(projectId),
		enabled: !!projectId,
		staleTime: 30 * 1e3,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: true,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectOnboardingSnapshot(projectId) {
	return useQuery(onboardingSnapshotQueryOptions(projectId));
}
function useOnboardingProgressFromSnapshot(snapshot) {
	return useMemo(() => {
		if (!snapshot) return {
			progress: 0,
			completedSteps: 0,
			totalSteps: getAtomicOnboardingStepCount()
		};
		return computeOnboardingProgress(snapshot);
	}, [snapshot]);
}
function emptyStepStateMap() {
	const map = /* @__PURE__ */ new Map();
	for (const step of ONBOARDING_CONNECT) map.set(step.id, "pending");
	for (const cat of ONBOARDING_PRODUCT_CATEGORIES) for (const group of cat.groups) for (const sub of group.subSteps) map.set(sub.id, "pending");
	return map;
}
function useOnboardingStepStates(snapshot) {
	return useMemo(() => {
		if (!snapshot) return emptyStepStateMap();
		return buildOnboardingStepStateMap(snapshot);
	}, [snapshot]);
}
function useSkipOnboardingStep(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (sdkKeys) => skipOnboardingSteps(projectId, sdkKeys),
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"onboarding",
				"snapshot",
				"project",
				projectId
			] });
		}
	});
}
const USERS_DEFAULT_SORT_BY = "$createdAt";
const USERS_DEFAULT_SORT_ORDER = "desc";
async function fetchProjectUsers(projectId, page = 0, limit = 10, search, filterQueries, sortBy = USERS_DEFAULT_SORT_BY, sortOrder = USERS_DEFAULT_SORT_ORDER) {
	if (!projectId) return {
		users: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries([
			"name",
			"email",
			"phone",
			"$id"
		], search),
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.users.list({ queries });
	return {
		users: response.users || [],
		total: response.total || 0
	};
}
async function fetchProjectTeams(projectId, page = 0, limit = 10, search, filterQueries) {
	if (!projectId) return {
		teams: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.teams.list({ queries });
	return {
		teams: response.teams || [],
		total: response.total || 0
	};
}
async function createProjectUser(projectId, userData) {
	if (!projectId) throw new Error("Project ID is required");
	const projectSdk = sdk.forProject(projectId);
	const userId = userData.userId || ID.unique();
	return await projectSdk.users.create({
		userId,
		email: userData.email,
		phone: userData.phone,
		password: userData.password,
		name: userData.name
	});
}
async function createProjectTeam(projectId, teamData) {
	if (!projectId) throw new Error("Project ID is required");
	if (!teamData.name.trim()) throw new Error("Team name is required");
	const projectSdk = sdk.forProject(projectId);
	const teamId = teamData.teamId || ID.unique();
	return await projectSdk.teams.create({
		teamId,
		name: teamData.name.trim()
	});
}
async function deleteProjectUser(projectId, userId) {
	if (!projectId) throw new Error("Project ID is required");
	if (!userId) throw new Error("User ID is required");
	await sdk.forProject(projectId).users.delete({ userId });
}
async function deleteProjectTeam(projectId, teamId) {
	if (!projectId) throw new Error("Project ID is required");
	if (!teamId) throw new Error("Team ID is required");
	await sdk.forProject(projectId).teams.delete({ teamId });
}
function usersQueryOptions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = USERS_DEFAULT_SORT_BY, sortOrder = USERS_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"users",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchProjectUsers(projectId, page, limit, search, filterQueries, sortBy, sortOrder),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		placeholderData: keepPreviousData
	});
}
function teamsQueryOptions(projectId, page = 0, limit = 10, search, filterQueries) {
	return queryOptions({
		queryKey: [
			"teams",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries
		],
		queryFn: () => fetchProjectTeams(projectId, page, limit, search, filterQueries),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectUsers(projectId, page = 0, limit = 10, search, filterQueries, sortBy = USERS_DEFAULT_SORT_BY, sortOrder = USERS_DEFAULT_SORT_ORDER) {
	const { data: usersData, isLoading, isFetching, isFetched, error, refetch } = useQuery(usersQueryOptions(projectId, page, limit, search, filterQueries, sortBy, sortOrder));
	const users = useMemo(() => {
		if (!usersData?.users) return [];
		return usersData.users.map((user) => {
			return {
				$id: user.$id,
				name: user.name || "",
				email: user.email || "",
				phone: user.phone || "",
				avatar: user.avatar || void 0,
				emailVerification: !!user.emailVerification,
				phoneVerification: !!user.phoneVerification,
				status: user.status,
				createdAt: user.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
				mfaEnabled: user.mfa === true || user.twoFactorAuthenticatorEnabled === true || false,
				accessedAt: user.accessedAt || void 0
			};
		});
	}, [usersData]);
	const totalPages = useMemo(() => {
		if (!usersData?.total) return 0;
		return Math.ceil(usersData.total / limit);
	}, [usersData?.total, limit]);
	return {
		users,
		total: usersData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useCreateProjectUser(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (userData) => {
			if (!projectId) throw new Error("Project ID is required");
			return createProjectUser(projectId, userData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useProjectTeams(projectId, page = 0, limit = 10, search, filterQueries) {
	const { data: teamsData, isLoading, isFetching, error, refetch } = useQuery(teamsQueryOptions(projectId, page, limit, search, filterQueries));
	const teams = useMemo(() => {
		if (!teamsData?.teams) return [];
		return teamsData.teams.map((team) => {
			const members = team.total || 0;
			const owners = 0;
			const admins = 0;
			const regularMembers = members - owners - admins;
			return {
				id: team.$id,
				name: team.name,
				members,
				createdAt: team.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
				owners,
				admins,
				regularMembers,
				lastActivity: team.$createdAt || (/* @__PURE__ */ new Date()).toISOString()
			};
		});
	}, [teamsData]);
	const totalPages = useMemo(() => {
		if (!teamsData?.total) return 0;
		return Math.ceil(teamsData.total / limit);
	}, [teamsData?.total, limit]);
	return {
		teams,
		total: teamsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useCreateProjectTeam(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (teamData) => {
			if (!projectId) throw new Error("Project ID is required");
			return createProjectTeam(projectId, teamData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"teams",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteProjectUser(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (userId) => {
			if (!projectId) throw new Error("Project ID is required");
			return deleteProjectUser(projectId, userId);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteProjectTeam(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (teamId) => {
			if (!projectId) throw new Error("Project ID is required");
			return deleteProjectTeam(projectId, teamId);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"teams",
				"project",
				projectId
			] });
		}
	});
}
async function fetchUser(projectId, userId) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.get({ userId });
}
async function fetchUserMemberships(projectId, userId) {
	if (!projectId || !userId) return {
		memberships: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).users.listMemberships({ userId });
	return {
		memberships: response.memberships || [],
		total: response.total || 0
	};
}
async function fetchUserIdentities(projectId, userId, page = 0, limit = 10, search) {
	if (!projectId || !userId) return {
		identities: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.equal("userId", userId),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.users.listIdentities({
		queries,
		search: search?.trim() || void 0
	});
	return {
		identities: response.identities || [],
		total: response.total || 0
	};
}
async function fetchUserTargets(projectId, userId, page = 0, limit = 10) {
	if (!projectId || !userId) return {
		targets: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.users.listTargets({
		userId,
		queries
	});
	return {
		targets: response.targets || [],
		total: response.total || 0
	};
}
async function fetchUserSessions(projectId, userId) {
	if (!projectId || !userId) return {
		sessions: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).users.listSessions({ userId });
	return {
		sessions: response.sessions || [],
		total: response.total || 0
	};
}
async function fetchUserMFAFactors(projectId, userId) {
	if (!projectId || !userId) return {
		totp: false,
		authenticators: []
	};
	const response = await sdk.forProject(projectId).users.listMFAFactors({ userId });
	return {
		totp: response.totp || false,
		authenticators: response.authenticators || []
	};
}
async function updateUserName(projectId, userId, name) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateName({
		userId,
		name
	});
}
async function updateUserEmail(projectId, userId, email) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateEmail({
		userId,
		email
	});
}
async function updateUserPhone(projectId, userId, phone) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updatePhone({
		userId,
		number: phone
	});
}
async function updateUserPassword(projectId, userId, password) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updatePassword({
		userId,
		password
	});
}
async function updateUserLabels(projectId, userId, labels) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateLabels({
		userId,
		labels
	});
}
async function updateUserPrefs(projectId, userId, prefs) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updatePrefs({
		userId,
		prefs
	});
}
async function updateUserStatus(projectId, userId, status) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateStatus({
		userId,
		status
	});
}
async function updateUserImpersonator(projectId, userId, impersonator) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateImpersonator({
		userId,
		impersonator
	});
}
async function updateUserEmailVerification(projectId, userId, emailVerification) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateEmailVerification({
		userId,
		emailVerification
	});
}
async function updateUserPhoneVerification(projectId, userId, phoneVerification) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updatePhoneVerification({
		userId,
		phoneVerification
	});
}
async function updateUserMFA(projectId, userId, mfa) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.updateMFA({
		userId,
		mfa
	});
}
async function deleteUserMFAAuthenticator(projectId, userId, type) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.deleteMFAAuthenticator({
		userId,
		type
	});
}
async function createUserTarget(projectId, userId, targetData) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	const projectSdk = sdk.forProject(projectId);
	const targetId = targetData.targetId || ID.unique();
	return await projectSdk.users.createTarget({
		userId,
		targetId,
		providerType: targetData.providerType,
		identifier: targetData.identifier,
		providerId: targetData.providerId,
		name: targetData.name
	});
}
async function deleteUserSession(projectId, userId, sessionId) {
	if (!projectId || !userId || !sessionId) throw new Error("Project ID, User ID, and Session ID are required");
	return await sdk.forProject(projectId).users.deleteSession({
		userId,
		sessionId
	});
}
async function deleteAllUserSessions(projectId, userId) {
	if (!projectId || !userId) throw new Error("Project ID and User ID are required");
	return await sdk.forProject(projectId).users.deleteSessions({ userId });
}
function useUser(projectId, userId) {
	return useQuery({
		queryKey: [
			"user",
			"project",
			projectId,
			userId
		],
		queryFn: () => fetchUser(projectId, userId),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUserMemberships(projectId, userId) {
	return useQuery({
		queryKey: [
			"user",
			"memberships",
			"project",
			projectId,
			userId
		],
		queryFn: () => fetchUserMemberships(projectId, userId),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUserIdentities(projectId, userId, page = 0, limit = 10, search) {
	return useQuery({
		queryKey: [
			"user",
			"identities",
			"project",
			projectId,
			userId,
			page,
			limit,
			search
		],
		queryFn: () => fetchUserIdentities(projectId, userId, page, limit, search),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUserTargets(projectId, userId, page = 0, limit = 10) {
	return useQuery({
		queryKey: [
			"user",
			"targets",
			"project",
			projectId,
			userId,
			page,
			limit
		],
		queryFn: () => fetchUserTargets(projectId, userId, page, limit),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUserSessions(projectId, userId) {
	return useQuery({
		queryKey: [
			"user",
			"sessions",
			"project",
			projectId,
			userId
		],
		queryFn: () => fetchUserSessions(projectId, userId),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUserMFAFactors(projectId, userId) {
	return useQuery({
		queryKey: [
			"user",
			"mfa-factors",
			"project",
			projectId,
			userId
		],
		queryFn: () => fetchUserMFAFactors(projectId, userId),
		enabled: !!projectId && !!userId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUpdateUserName(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (name) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserName(projectId, userId, name);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserEmail(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (email) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserEmail(projectId, userId, email);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserPhone(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (phone) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserPhone(projectId, userId, phone);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserPassword(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (password) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserPassword(projectId, userId, password);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
		}
	});
}
function useUpdateUserLabels(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (labels) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserLabels(projectId, userId, labels);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserPrefs(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (prefs) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserPrefs(projectId, userId, prefs);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserStatus$1(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (status) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserStatus(projectId, userId, status);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserImpersonator(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (impersonator) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserImpersonator(projectId, userId, impersonator);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserEmailVerification(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (emailVerification) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserEmailVerification(projectId, userId, emailVerification);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserPhoneVerification(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (phoneVerification) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserPhoneVerification(projectId, userId, phoneVerification);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateUserMFA(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (mfa) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return updateUserMFA(projectId, userId, mfa);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"mfa-factors",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"users",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteUserMFAAuthenticator(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (type) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return deleteUserMFAAuthenticator(projectId, userId, type);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"mfa-factors",
				"project",
				projectId,
				userId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"project",
				projectId,
				userId
			] });
		}
	});
}
function useCreateUserTarget(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (targetData) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return createUserTarget(projectId, userId, targetData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"targets",
				"project",
				projectId,
				userId
			] });
		}
	});
}
function useDeleteUserSession(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (sessionId) => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return deleteUserSession(projectId, userId, sessionId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"sessions",
				"project",
				projectId,
				userId
			] });
		}
	});
}
function useDeleteAllUserSessions(projectId, userId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			if (!projectId || !userId) throw new Error("Project ID and User ID are required");
			return deleteAllUserSessions(projectId, userId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"user",
				"sessions",
				"project",
				projectId,
				userId
			] });
		}
	});
}
async function fetchTeam(projectId, teamId) {
	if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
	return await sdk.forProject(projectId).teams.get({ teamId });
}
async function fetchTeamMemberships(projectId, teamId, page = 0, limit = 10, search) {
	if (!projectId || !teamId) return {
		memberships: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.teams.listMemberships({
		teamId,
		queries,
		search: search?.trim() || void 0
	});
	return {
		memberships: response.memberships || [],
		total: response.total || 0
	};
}
async function updateTeamName(projectId, teamId, name) {
	if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
	return await sdk.forProject(projectId).teams.updateName({
		teamId,
		name
	});
}
async function updateTeamPrefs(projectId, teamId, prefs) {
	if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
	return await sdk.forProject(projectId).teams.updatePrefs({
		teamId,
		prefs
	});
}
async function createTeamMembership(projectId, teamId, membershipData) {
	if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
	if (!membershipData.userId && !membershipData.email && !membershipData.phone) throw new Error("User ID, email, or phone is required");
	return await sdk.forProject(projectId).teams.createMembership({
		teamId,
		roles: membershipData.roles,
		email: membershipData.email,
		userId: membershipData.userId,
		phone: membershipData.phone,
		url: membershipData.url,
		name: membershipData.name
	});
}
async function deleteTeamMembership(projectId, teamId, membershipId) {
	if (!projectId || !teamId || !membershipId) throw new Error("Project ID, Team ID, and Membership ID are required");
	return await sdk.forProject(projectId).teams.deleteMembership({
		teamId,
		membershipId
	});
}
async function updateTeamMembership(projectId, teamId, membershipId, roles) {
	if (!projectId || !teamId || !membershipId) throw new Error("Project ID, Team ID, and Membership ID are required");
	return await sdk.forProject(projectId).teams.updateMembership({
		teamId,
		membershipId,
		roles
	});
}
function useTeam(projectId, teamId) {
	return useQuery({
		queryKey: [
			"team",
			"project",
			projectId,
			teamId
		],
		queryFn: () => fetchTeam(projectId, teamId),
		enabled: !!projectId && !!teamId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useTeamMemberships(projectId, teamId, page = 0, limit = 10, search) {
	return useQuery({
		queryKey: [
			"team",
			"memberships",
			"project",
			projectId,
			teamId,
			page,
			limit,
			search
		],
		queryFn: () => fetchTeamMemberships(projectId, teamId, page, limit, search),
		enabled: !!projectId && !!teamId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useUpdateTeamName(projectId, teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (name) => {
			if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
			return updateTeamName(projectId, teamId, name);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"teams",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateTeamPrefs(projectId, teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (prefs) => {
			if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
			return updateTeamPrefs(projectId, teamId, prefs);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"teams",
				"project",
				projectId
			] });
		}
	});
}
function useCreateTeamMembership(projectId, teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (membershipData) => {
			if (!projectId) throw new Error("Project ID is required");
			const resolvedTeamId = teamId || membershipData.teamId;
			if (!resolvedTeamId) throw new Error("Team ID is required");
			return createTeamMembership(projectId, resolvedTeamId, membershipData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"memberships",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: ["user", "memberships"] });
		}
	});
}
function useDeleteTeamMembership(projectId, teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (membershipId) => {
			if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
			return deleteTeamMembership(projectId, teamId, membershipId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"memberships",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: ["user", "memberships"] });
		}
	});
}
function useUpdateTeamMembership(projectId, teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ membershipId, roles }) => {
			if (!projectId || !teamId) throw new Error("Project ID and Team ID are required");
			return updateTeamMembership(projectId, teamId, membershipId, roles);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"memberships",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"project",
				projectId,
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: ["user", "memberships"] });
		}
	});
}
const POSTGRES_METRICS_SNAPSHOT_SQL = prefixPostgresSqlComment(`
SELECT
  d.numbackends::bigint AS active_connections,
  d.xact_commit::bigint AS xact_commit,
  d.xact_rollback::bigint AS xact_rollback,
  d.blks_read::bigint AS blks_read,
  d.blks_hit::bigint AS blks_hit,
  d.tup_returned::bigint AS tup_returned,
  d.tup_fetched::bigint AS tup_fetched,
  d.tup_inserted::bigint AS tup_inserted,
  d.tup_updated::bigint AS tup_updated,
  d.tup_deleted::bigint AS tup_deleted,
  d.conflicts::bigint AS conflicts,
  d.deadlocks::bigint AS deadlocks,
  d.temp_bytes::bigint AS temp_bytes,
  pg_database_size(current_database())::bigint AS database_size_bytes,
  (
    SELECT count(*)::bigint
    FROM pg_stat_activity
    WHERE datname = current_database()
      AND pid != pg_backend_pid()
  ) AS total_connections,
  (
    SELECT count(*)::bigint
    FROM pg_stat_activity
    WHERE datname = current_database()
      AND state = 'active'
      AND pid != pg_backend_pid()
  ) AS active_queries,
  (
    SELECT count(*)::bigint
    FROM pg_stat_activity
    WHERE datname = current_database()
      AND state = 'idle in transaction'
      AND pid != pg_backend_pid()
  ) AS idle_in_transaction,
  (
    SELECT count(*)::bigint
    FROM pg_stat_activity
    WHERE datname = current_database()
      AND state = 'active'
      AND query_start < now() - interval '10 seconds'
      AND pid != pg_backend_pid()
  ) AS long_running_queries,
  pg_postmaster_start_time() AS server_started_at,
  EXTRACT(EPOCH FROM (now() - pg_postmaster_start_time()))::bigint AS uptime_seconds
FROM pg_stat_database d
WHERE d.datname = current_database()
`.trim(), "Load metrics snapshot");
const POSTGRES_METRICS_CONNECTION_STATES_SQL = prefixPostgresSqlComment(`
SELECT
  COALESCE(state, 'unknown') AS state,
  count(*)::bigint AS count
FROM pg_stat_activity
WHERE datname = current_database()
  AND pid != pg_backend_pid()
GROUP BY state
ORDER BY count DESC
`.trim(), "List connection states");
const POSTGRES_METRICS_CONNECTION_APPS_SQL = prefixPostgresSqlComment(`
SELECT
  COALESCE(NULLIF(application_name, ''), 'unknown') AS application_name,
  count(*)::bigint AS count
FROM pg_stat_activity
WHERE datname = current_database()
  AND pid != pg_backend_pid()
GROUP BY application_name
ORDER BY count DESC
LIMIT 12
`.trim(), "List connection apps");
const POSTGRES_ACTIVE_CONNECTIONS_SQL = prefixPostgresSqlComment(`
SELECT
  pid,
  backend_type,
  (backend_type = 'client backend') AS is_client_backend,
  usename AS username,
  datname AS database,
  NULLIF(application_name, '') AS application_name,
  COALESCE(host(client_addr), '') AS client_host,
  client_port,
  state,
  wait_event_type,
  wait_event,
  backend_start,
  query_start,
  state_change,
  query
FROM pg_stat_activity
WHERE pid != pg_backend_pid()
ORDER BY
  CASE backend_type
    WHEN 'client backend' THEN 0
    ELSE 1
  END,
  CASE state
    WHEN 'active' THEN 0
    WHEN 'idle in transaction' THEN 1
    WHEN 'idle in transaction (aborted)' THEN 2
    ELSE 3
  END,
  query_start NULLS LAST,
  pid ASC
`.trim(), "List active connections");
const POSTGRES_METRICS_TABLE_ACTIVITY_SQL = prefixPostgresSqlComment(`
SELECT
  schemaname,
  relname AS table_name,
  pg_total_relation_size(relid)::bigint AS total_bytes,
  n_live_tup::bigint AS live_tuples,
  n_dead_tup::bigint AS dead_tuples,
  seq_scan::bigint AS seq_scans,
  idx_scan::bigint AS idx_scans,
  (n_tup_ins + n_tup_upd + n_tup_del)::bigint AS write_operations,
  (seq_scan + idx_scan)::bigint AS read_operations
FROM pg_stat_user_tables
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
ORDER BY total_bytes DESC
LIMIT 12
`.trim(), "List table activity");
const POSTGRES_LONG_RUNNING_QUERY_THRESHOLD_MS = 1e4;
function toFiniteNumber$1(value, fallback = 0) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	const parsed = Number.parseFloat(String(value ?? fallback));
	return Number.isFinite(parsed) ? parsed : fallback;
}
function parseServerStartedAt$1(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string" && value.trim()) {
		const parsed = Date.parse(value);
		return Number.isFinite(parsed) ? parsed : null;
	}
	return null;
}
function formatPostgresUptime(seconds) {
	if (!Number.isFinite(seconds) || seconds <= 0) return "-";
	const days = Math.floor(seconds / 86400);
	const hours = Math.floor(seconds % 86400 / 3600);
	const minutes = Math.floor(seconds % 3600 / 60);
	if (days > 0) return hours > 0 ? `${days}d ${hours}h` : `${days}d`;
	if (hours > 0) return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
	if (minutes > 0) return `${minutes}m`;
	return "< 1m";
}
function parsePostgresMetricsSnapshot(execution, timestamp = Date.now()) {
	const row = executionResultRows$1(execution)[0];
	if (!row) return null;
	const blksRead = toFiniteNumber$1(row.blks_read);
	const blksHit = toFiniteNumber$1(row.blks_hit);
	const blockTotal = blksRead + blksHit;
	return {
		timestamp,
		activeConnections: toFiniteNumber$1(row.active_connections),
		totalConnections: toFiniteNumber$1(row.total_connections),
		activeQueries: toFiniteNumber$1(row.active_queries),
		idleInTransaction: toFiniteNumber$1(row.idle_in_transaction),
		longRunningQueries: toFiniteNumber$1(row.long_running_queries),
		xactCommit: toFiniteNumber$1(row.xact_commit),
		xactRollback: toFiniteNumber$1(row.xact_rollback),
		blksRead,
		blksHit,
		tupReturned: toFiniteNumber$1(row.tup_returned),
		tupFetched: toFiniteNumber$1(row.tup_fetched),
		tupInserted: toFiniteNumber$1(row.tup_inserted),
		tupUpdated: toFiniteNumber$1(row.tup_updated),
		tupDeleted: toFiniteNumber$1(row.tup_deleted),
		conflicts: toFiniteNumber$1(row.conflicts),
		deadlocks: toFiniteNumber$1(row.deadlocks),
		tempBytes: toFiniteNumber$1(row.temp_bytes),
		databaseSizeBytes: toFiniteNumber$1(row.database_size_bytes),
		cacheHitRatio: blockTotal > 0 ? blksHit / blockTotal * 100 : 100,
		uptimeSeconds: toFiniteNumber$1(row.uptime_seconds),
		serverStartedAt: parseServerStartedAt$1(row.server_started_at)
	};
}
function parsePostgresConnectionStates(execution) {
	return executionResultRows$1(execution).map((row) => ({
		state: String(row.state ?? "unknown"),
		count: toFiniteNumber$1(row.count)
	}));
}
function parsePostgresConnectionApps(execution) {
	return executionResultRows$1(execution).map((row) => ({
		applicationName: String(row.application_name ?? "unknown"),
		count: toFiniteNumber$1(row.count)
	}));
}
function parsePostgresBoolean(value) {
	if (value === true) return true;
	if (value === false || value == null) return false;
	if (typeof value === "number") return value !== 0;
	const normalized = String(value).trim().toLowerCase();
	return normalized === "t" || normalized === "true" || normalized === "1" || normalized === "yes";
}
function readPostgresMetricsRowString(row, ...keys) {
	for (const key of keys) {
		const value = row[key];
		if (value == null || value === "") continue;
		const str = String(value).trim();
		if (str) return str;
	}
	return null;
}
function readPostgresMetricsRowBoolean(row, ...keys) {
	for (const key of keys) {
		if (!(key in row)) continue;
		return parsePostgresBoolean(row[key]);
	}
	return null;
}
var CLIENT_SESSION_STATES$1 = new Set([
	"active",
	"idle",
	"idle in transaction",
	"idle in transaction (aborted)",
	"fastpath function call",
	"disabled"
]);
function normalizePostgresBackendType(backendType) {
	if (!backendType?.trim()) return null;
	return backendType.trim().toLowerCase();
}
function inferPostgresClientBackend(row) {
	const normalizedType = normalizePostgresBackendType(row.backendType);
	if (normalizedType === "client backend") return true;
	if (normalizedType) return false;
	const state = row.state?.trim().toLowerCase() ?? "";
	if (CLIENT_SESSION_STATES$1.has(state)) return true;
	if (row.username?.trim() || row.database?.trim()) return true;
	return false;
}
function parsePostgresActiveConnections(execution) {
	return executionResultRows$1(execution).map((row) => {
		const clientPortRaw = row.client_port ?? row.clientPort;
		const clientPort = clientPortRaw == null || clientPortRaw === "" ? null : toFiniteNumber$1(clientPortRaw, NaN);
		const backendType = readPostgresMetricsRowString(row, "backend_type", "backendType");
		const username = readPostgresMetricsRowString(row, "username", "usename");
		const database = readPostgresMetricsRowString(row, "database", "datname");
		const state = readPostgresMetricsRowString(row, "state");
		const isClientBackend = readPostgresMetricsRowBoolean(row, "is_client_backend", "isClientBackend") ?? inferPostgresClientBackend({
			backendType,
			state,
			username,
			database
		});
		return {
			pid: toFiniteNumber$1(row.pid ?? row.Pid),
			isClientBackend,
			backendType,
			username,
			database,
			applicationName: readPostgresMetricsRowString(row, "application_name", "applicationName"),
			clientHost: readPostgresMetricsRowString(row, "client_host", "clientHost") ?? "",
			clientPort: Number.isFinite(clientPort) ? clientPort : null,
			state,
			waitEventType: readPostgresMetricsRowString(row, "wait_event_type", "waitEventType"),
			waitEvent: readPostgresMetricsRowString(row, "wait_event", "waitEvent"),
			backendStart: readPostgresMetricsRowString(row, "backend_start", "backendStart"),
			queryStart: readPostgresMetricsRowString(row, "query_start", "queryStart"),
			stateChange: readPostgresMetricsRowString(row, "state_change", "stateChange"),
			query: readPostgresMetricsRowString(row, "query")
		};
	});
}
const POSTGRES_CLIENT_BACKEND_TYPE = "client backend";
function isPostgresClientBackend(connection) {
	if (typeof connection.isClientBackend === "boolean") return connection.isClientBackend;
	return inferPostgresClientBackend({
		backendType: connection.backendType ?? null,
		state: connection.state ?? null,
		username: connection.username ?? null,
		database: connection.database ?? null
	});
}
function matchesPostgresConnectionBackendScope(connection, scope) {
	const isClient = isPostgresClientBackend(connection);
	return scope === "clients" ? isClient : !isClient;
}
function formatPostgresBackendTypeLabel(backendType) {
	const normalized = normalizePostgresBackendType(backendType);
	if (!normalized) return "Unknown";
	switch (normalized) {
		case POSTGRES_CLIENT_BACKEND_TYPE: return "Client";
		case "background worker": return "Background";
		case "autovacuum worker": return "Autovacuum";
		case "parallel worker": return "Parallel";
		case "logical replication launcher": return "Replication";
		default: return normalized.split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
	}
}
function backendTypeBadgeVariant$1(backendType) {
	if (normalizePostgresBackendType(backendType) === "client backend") return "success";
	if (normalizePostgresBackendType(backendType) === "autovacuum worker") return "warning";
	return "info";
}
function formatPostgresConnectionUsername(username, backendType) {
	if (username?.trim()) return username.trim();
	if (!isPostgresClientBackend({ backendType })) return "System";
	return "-";
}
function formatPostgresConnectionDatabase(database) {
	return database?.trim() || "-";
}
function formatPostgresApplicationName(applicationName) {
	return applicationName?.trim() || "-";
}
function formatPostgresConnectionStateLabel(state, backendType) {
	if (state?.trim()) return formatConnectionStateLabel$1(state.trim());
	if (!isPostgresClientBackend({ backendType })) return "System";
	return "-";
}
function formatPostgresClientAddress(clientHost, clientPort) {
	if (!clientHost) return "Local";
	return clientPort != null ? `${clientHost}:${clientPort}` : clientHost;
}
function connectionStateBadgeVariant$1(state, backendType = null) {
	if (!state?.trim()) return isPostgresClientBackend({ backendType }) ? "info" : "info";
	switch (state.toLowerCase()) {
		case "active": return "success";
		case "idle": return "info";
		case "idle in transaction": return "warning";
		case "idle in transaction (aborted)": return "error";
		default: return "info";
	}
}
function parsePostgresTableActivity(execution) {
	return executionResultRows$1(execution).map((row) => ({
		schema: String(row.schemaname ?? ""),
		tableName: String(row.table_name ?? ""),
		totalBytes: toFiniteNumber$1(row.total_bytes),
		liveTuples: toFiniteNumber$1(row.live_tuples),
		deadTuples: toFiniteNumber$1(row.dead_tuples),
		seqScans: toFiniteNumber$1(row.seq_scans),
		idxScans: toFiniteNumber$1(row.idx_scans),
		writeOperations: toFiniteNumber$1(row.write_operations),
		readOperations: toFiniteNumber$1(row.read_operations)
	}));
}
function formatConnectionStateLabel$1(state) {
	switch (state) {
		case "active": return "Active";
		case "idle": return "Idle";
		case "idle in transaction": return "Idle in transaction";
		case "idle in transaction (aborted)": return "Idle in transaction (aborted)";
		case "fastpath function call": return "Fastpath function call";
		case "disabled": return "Disabled";
		default: return state.charAt(0).toUpperCase() + state.slice(1);
	}
}
function matchesPostgresConnectionStateFilter(connection, filter) {
	if (filter === "all") return true;
	if (filter === "long-running") return isLongRunningConnection$1(connection);
	if (filter === "idle in transaction") {
		const state = connection.state?.toLowerCase() ?? "";
		return state === "idle in transaction" || state === "idle in transaction (aborted)";
	}
	return connection.state?.toLowerCase() === filter;
}
function isLongRunningConnection$1(connection, thresholdMs = POSTGRES_LONG_RUNNING_QUERY_THRESHOLD_MS) {
	if (!isPostgresClientBackend(connection)) return false;
	if (connection.state?.toLowerCase() !== "active") return false;
	if (!connection.queryStart) return false;
	const start = Date.parse(connection.queryStart);
	if (!Number.isFinite(start)) return false;
	return Date.now() - start >= thresholdMs;
}
function formatPostgresDurationSince(isoDate) {
	if (!isoDate) return "-";
	const parsed = Date.parse(isoDate);
	if (!Number.isFinite(parsed)) return "-";
	const totalSeconds = Math.max(0, Math.floor((Date.now() - parsed) / 1e3));
	if (totalSeconds < 60) return `${totalSeconds}s`;
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	if (minutes < 60) return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}
function formatPostgresWaitEvent(waitEventType, waitEvent) {
	if (!waitEventType && !waitEvent) return "-";
	if (waitEventType && waitEvent) return `${waitEventType} / ${waitEvent}`;
	return waitEventType ?? waitEvent ?? "-";
}
function serializePostgresActiveConnectionJson(connection) {
	return JSON.stringify({
		pid: connection.pid,
		backendType: connection.backendType,
		username: connection.username,
		database: connection.database,
		applicationName: connection.applicationName,
		clientHost: connection.clientHost,
		clientPort: connection.clientPort,
		clientAddress: formatPostgresClientAddress(connection.clientHost, connection.clientPort),
		state: connection.state,
		waitEventType: connection.waitEventType,
		waitEvent: connection.waitEvent,
		backendStart: connection.backendStart,
		queryStart: connection.queryStart,
		stateChange: connection.stateChange,
		query: connection.query,
		longRunning: isLongRunningConnection$1(connection)
	}, null, 2);
}
function preparePostgresQueryForExplanation(sql) {
	const { leadingComments, sqlWithoutLeadingComments } = peelLeadingPostgresSqlComments(sql.trim());
	let text = sqlWithoutLeadingComments.trim();
	let analyze = false;
	const explainMatch = text.match(/^explain\s+/i);
	if (!explainMatch) return {
		query: leadingComments ? `${leadingComments}\n${text}`.trim() : text,
		analyze: false
	};
	text = text.slice(explainMatch[0].length).trimStart();
	const parenMatch = text.match(/^\(([^)]*)\)\s*/i);
	if (parenMatch) {
		const options = parenMatch[1].toLowerCase();
		analyze = /\banalyze\b/.test(options);
		text = text.slice(parenMatch[0].length).trimStart();
	} else {
		if (/^analyze\b/i.test(text)) {
			analyze = true;
			text = text.replace(/^analyze\b/i, "").trimStart();
		}
		text = text.replace(/^verbose\b/i, "").trimStart();
		text = text.replace(/^format\s+\w+\b/i, "").trimStart();
	}
	const query = text.trim();
	return {
		query: leadingComments ? `${leadingComments}\n${query}`.trim() : query,
		analyze
	};
}
function buildPostgresExplainSql(query, analyze) {
	const prepared = preparePostgresQueryForExplanation(query);
	const shouldAnalyze = analyze ?? prepared.analyze;
	const options = ["FORMAT JSON"];
	if (shouldAnalyze) options.push("ANALYZE", "VERBOSE", "BUFFERS");
	return `EXPLAIN (${options.join(", ")}) ${prepared.query}`;
}
function isPlainObject$2(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parseExplainPlanValue$1(value) {
	if (Array.isArray(value)) return value.filter(isPlainObject$2);
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (!trimmed) return [];
		try {
			return parseExplainPlanValue$1(JSON.parse(trimmed));
		} catch {
			return [];
		}
	}
	if (isPlainObject$2(value)) return [value];
	return [];
}
function parseExplainExecution$1(execution) {
	const rows = executionResultRows$1(execution);
	if (rows.length === 0) throw new Error("No query plan returned.");
	const firstRow = rows[0];
	const planColumnKey = Object.keys(firstRow).find((key) => key.toLowerCase() === "query plan");
	const planValue = planColumnKey ? firstRow[planColumnKey] : Object.values(firstRow)[0];
	const plan = parseExplainPlanValue$1(planValue);
	const raw = typeof planValue === "string" ? planValue : plan.length > 0 ? JSON.stringify(plan, null, 2) : formatPostgresExecutionCellValue(planValue);
	if (plan.length === 0 && !raw.trim()) throw new Error("No query plan returned.");
	return {
		plan,
		raw
	};
}
async function explainPostgresDatabaseQuery(projectId, databaseId, query, analyze) {
	return parseExplainExecution$1(normalizePostgresExecutionResult(await sdk.forProject(projectId).postgresql.createExecution({
		databaseId,
		sql: buildPostgresExplainSql(query, analyze)
	})));
}
function qualifiedEnumType(schema, enumName) {
	return `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(enumName)}`;
}
function buildPostgresCreateEnumSql(schema, enumName, values, options) {
	const createSql = `CREATE TYPE ${qualifiedEnumType(schema, enumName)} AS ENUM (${values.map((value) => quotePostgresStringLiteral(value)).join(", ")})`;
	const comment = options?.comment?.trim();
	if (!comment) return prefixPostgresSqlComment(createSql, "Create enum type");
	return buildPostgresSingleRequestDdlSql([createSql, `EXECUTE format('COMMENT ON TYPE %I.%I IS %L', ${quotePostgresStringLiteral(schema)}, ${quotePostgresStringLiteral(enumName)}, ${quotePostgresStringLiteral(comment)})`], "Create enum type");
}
function buildPostgresAddEnumValueSql(schema, enumName, value, options) {
	let sql = `ALTER TYPE ${qualifiedEnumType(schema, enumName)} ADD VALUE ${quotePostgresStringLiteral(value)}`;
	if (options?.before) sql += ` BEFORE ${quotePostgresStringLiteral(options.before)}`;
	else if (options?.after) sql += ` AFTER ${quotePostgresStringLiteral(options.after)}`;
	return prefixPostgresSqlComment(sql, "Add enum value");
}
function buildPostgresRenameEnumValueSql(schema, enumName, fromValue, toValue) {
	return prefixPostgresSqlComment(`ALTER TYPE ${qualifiedEnumType(schema, enumName)} RENAME VALUE ${quotePostgresStringLiteral(fromValue)} TO ${quotePostgresStringLiteral(toValue)}`, "Rename enum value");
}
function buildPostgresRenameEnumTypeSql(schema, enumName, nextName) {
	return prefixPostgresSqlComment(`ALTER TYPE ${qualifiedEnumType(schema, enumName)} RENAME TO ${quotePostgresIdentifier(nextName)}`, "Rename enum type");
}
function buildPostgresDropEnumSql(schema, enumName) {
	return prefixPostgresSqlComment(`DROP TYPE ${qualifiedEnumType(schema, enumName)}`, "Drop enum type");
}
function buildPostgresEnumCommentSql(schema, enumName, comment) {
	const qualified = qualifiedEnumType(schema, enumName);
	if (!comment?.trim()) return prefixPostgresSqlComment(`COMMENT ON TYPE ${qualified} IS NULL`, "Clear enum comment");
	return prefixPostgresSqlComment(`COMMENT ON TYPE ${qualified} IS ${quotePostgresStringLiteral(comment.trim())}`, "Set enum comment");
}
function createEnumValueEntry(value = "", originalValue) {
	return {
		id: crypto.randomUUID(),
		value,
		originalValue
	};
}
function createDefaultPostgresEnumFormState() {
	return {
		name: "",
		entries: [createEnumValueEntry()],
		comment: ""
	};
}
function createPostgresEnumFormStateFromRow(row) {
	return {
		name: row.enum_name,
		entries: row.values.map((value) => createEnumValueEntry(value, value)),
		comment: row.enum_comment?.trim() ?? ""
	};
}
function parsePostgresEnumValues(raw) {
	if (Array.isArray(raw)) return raw.map(String);
	if (typeof raw === "string") {
		const trimmed = raw.trim();
		if (!trimmed) return [];
		try {
			const parsed = JSON.parse(trimmed);
			return Array.isArray(parsed) ? parsed.map(String) : [];
		} catch {
			return [];
		}
	}
	return [];
}
function isPostgresEnumValueEntryNew(entry) {
	return entry.originalValue == null;
}
var POSTGRES_IDENTIFIER_PATTERN = /^[a-z_][a-z0-9_$]*$/i;
function isValidPostgresEnumIdentifier(name) {
	const trimmed = name.trim();
	return trimmed.length > 0 && POSTGRES_IDENTIFIER_PATTERN.test(trimmed);
}
function getNormalizedEnumEntries(entries) {
	return entries.filter((entry) => entry.value.trim() || entry.originalValue != null);
}
function validateEnumValueLabels(labels) {
	if (labels.length === 0) return "Add at least one enum value.";
	const seen = /* @__PURE__ */ new Set();
	for (const label of labels) {
		if (seen.has(label)) return "Duplicate enum value.";
		seen.add(label);
	}
	return null;
}
function validatePostgresEnumCreateForm(state) {
	const trimmedName = state.name.trim();
	if (!trimmedName) return "Enum name is required.";
	if (!isValidPostgresEnumIdentifier(trimmedName)) return "Enum name must start with a letter or underscore and contain only letters, numbers, and underscores.";
	return validateEnumValueLabels(getNormalizedEnumEntries(state.entries).map((entry) => entry.value.trim()).filter(Boolean));
}
function validatePostgresEnumUpdateForm(args) {
	const trimmedName = args.state.name.trim();
	if (!trimmedName) return "Enum name is required.";
	if (!isValidPostgresEnumIdentifier(trimmedName)) return "Enum name must start with a letter or underscore and contain only letters, numbers, and underscores.";
	for (const entry of args.state.entries) if (entry.originalValue != null && !entry.value.trim()) return "Enum values cannot be empty.";
	const labels = getNormalizedEnumEntries(args.state.entries).map((entry) => entry.value.trim()).filter(Boolean);
	const duplicateError = validateEnumValueLabels(labels);
	if (duplicateError && labels.length > 0) return duplicateError;
	if (!hasPostgresEnumFormChanges(args.state, args.original)) return "No changes to save.";
	return null;
}
function hasPostgresEnumFormChanges(state, original) {
	if (state.name.trim() !== original.enum_name) return true;
	if (state.comment.trim() !== (original.enum_comment?.trim() ?? "")) return true;
	const entries = getNormalizedEnumEntries(state.entries).filter((entry) => entry.value.trim());
	for (const entry of entries) {
		if (isPostgresEnumValueEntryNew(entry)) return true;
		if (entry.originalValue != null && entry.value.trim() !== entry.originalValue) return true;
	}
	return false;
}
function normalizePostgresEnumFormValues(entries) {
	return getNormalizedEnumEntries(entries).map((entry) => entry.value.trim()).filter(Boolean);
}
function buildPostgresEnumUpdateStatements(schema, original, state) {
	const statements = [];
	const trimmedName = state.name.trim();
	const targetEnumName = trimmedName !== original.enum_name ? trimmedName : original.enum_name;
	if (trimmedName !== original.enum_name) statements.push(buildPostgresRenameEnumTypeSql(schema, original.enum_name, trimmedName));
	const entries = getNormalizedEnumEntries(state.entries).filter((entry) => entry.value.trim());
	for (const entry of entries) if (entry.originalValue != null && entry.value.trim() !== entry.originalValue) statements.push(buildPostgresRenameEnumValueSql(schema, targetEnumName, entry.originalValue, entry.value.trim()));
	for (let index = 0; index < entries.length; index += 1) {
		const entry = entries[index];
		if (!isPostgresEnumValueEntryNew(entry)) continue;
		const label = entry.value.trim();
		if (!label) continue;
		let afterLabel;
		for (let prevIndex = index - 1; prevIndex >= 0; prevIndex -= 1) {
			const previousLabel = entries[prevIndex].value.trim();
			if (previousLabel) {
				afterLabel = previousLabel;
				break;
			}
		}
		if (afterLabel) {
			statements.push(buildPostgresAddEnumValueSql(schema, targetEnumName, label, { after: afterLabel }));
			continue;
		}
		let beforeLabel;
		for (let nextIndex = index + 1; nextIndex < entries.length; nextIndex += 1) {
			const nextEntry = entries[nextIndex];
			if (nextEntry.originalValue != null && nextEntry.value.trim()) {
				beforeLabel = nextEntry.value.trim();
				break;
			}
		}
		if (beforeLabel) statements.push(buildPostgresAddEnumValueSql(schema, targetEnumName, label, { before: beforeLabel }));
		else statements.push(buildPostgresAddEnumValueSql(schema, targetEnumName, label));
	}
	const nextComment = state.comment.trim();
	if (nextComment !== (original.enum_comment?.trim() ?? "")) statements.push(buildPostgresEnumCommentSql(schema, targetEnumName, nextComment || null));
	return statements;
}
function isPostgresTruthyFlag(value) {
	return value === true || value === "true" || value === "t";
}
function readPostgresPolicyField(row, ...keys) {
	for (const key of keys) if (key in row) return row[key];
	const lowerEntries = Object.entries(row).map(([entryKey, value]) => [entryKey.toLowerCase(), value]);
	for (const key of keys) {
		const match = lowerEntries.find(([entryKey]) => entryKey === key.toLowerCase());
		if (match) return match[1];
	}
}
function readPostgresPolicyText(value) {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value.trim();
	return String(value).trim();
}
function normalizePostgresPolicyRoleName(role) {
	const trimmed = role.trim();
	const lower = trimmed.toLowerCase();
	if (lower === "public") return "public";
	if (lower === "current_user") return "CURRENT_USER";
	if (lower === "current_role") return "CURRENT_ROLE";
	return trimmed;
}
function parsePostgresPolicyRoles(roles) {
	if (roles === null || roles === void 0) return [];
	if (Array.isArray(roles)) return roles.map((role) => normalizePostgresPolicyRoleName(String(role))).filter(Boolean);
	if (typeof roles !== "string" || !roles.trim()) return [];
	const trimmed = roles.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		const inner = trimmed.slice(1, -1).trim();
		if (!inner) return [];
		return inner.split(",").map((role) => normalizePostgresPolicyRoleName(role.trim().replace(/^"(.*)"$/, "$1"))).filter(Boolean);
	}
	if (trimmed.startsWith("[") && trimmed.endsWith("]")) try {
		const parsed = JSON.parse(trimmed);
		if (Array.isArray(parsed)) return parsed.map((role) => normalizePostgresPolicyRoleName(String(role))).filter(Boolean);
	} catch {}
	if (trimmed.includes(",")) return trimmed.split(",").map((role) => normalizePostgresPolicyRoleName(role)).filter(Boolean);
	return [normalizePostgresPolicyRoleName(trimmed)];
}
function normalizePostgresTablePolicyRow(row) {
	const source = row;
	const parsedRoles = parsePostgresPolicyRoles(readPostgresPolicyField(source, "roles"));
	return {
		policyname: readPostgresPolicyText(readPostgresPolicyField(source, "policyname", "policy_name")),
		permissive: readPostgresPolicyText(readPostgresPolicyField(source, "permissive")),
		roles: parsedRoles.length > 0 ? parsedRoles : null,
		cmd: readPostgresPolicyText(readPostgresPolicyField(source, "cmd", "command")),
		qual: readPostgresPolicyText(readPostgresPolicyField(source, "qual", "using")) || null,
		with_check: readPostgresPolicyText(readPostgresPolicyField(source, "with_check", "withcheck", "with check")) || null
	};
}
function formatPostgresPolicyRoles(roles) {
	const parsed = parsePostgresPolicyRoles(roles);
	if (parsed.length === 0) return "PUBLIC";
	return parsed.join(", ");
}
function createDefaultPostgresPolicyFormState() {
	return {
		name: "",
		command: "ALL",
		permissive: "PERMISSIVE",
		roles: "",
		usingExpression: "",
		withCheckExpression: ""
	};
}
function parsePostgresPolicyFormRoles(rolesInput) {
	return parsePostgresPolicyRoles(rolesInput);
}
function formatPostgresPolicyFormRoles(roles) {
	return roles.join(", ");
}
function isPostgresPolicyPublicRole(role) {
	return role.trim().toLowerCase() === "public";
}
function addPostgresPolicyFormRole(selectedRoles, roleName) {
	const trimmed = roleName.trim();
	if (!trimmed) return [...selectedRoles];
	const normalized = normalizePostgresPolicyRoleName(trimmed);
	if (isPostgresPolicyPublicRole(normalized)) return ["public"];
	const withoutPublic = selectedRoles.filter((role) => !isPostgresPolicyPublicRole(role));
	if (withoutPublic.some((role) => role.trim().toLowerCase() === normalized.toLowerCase())) return withoutPublic;
	return [...withoutPublic, normalized];
}
function removePostgresPolicyFormRole(selectedRoles, roleName) {
	const key = roleName.trim().toLowerCase();
	return selectedRoles.filter((role) => role.trim().toLowerCase() !== key);
}
function resolvePostgresPolicyRolesForSql(rolesInput) {
	const roles = parsePostgresPolicyRoles(rolesInput);
	if (roles.length === 0) return [];
	if (!roles.some((role) => !isPostgresPolicyPublicRole(role) && role !== "CURRENT_USER" && role !== "CURRENT_ROLE")) return roles;
	return roles.filter((role) => !isPostgresPolicyPublicRole(role));
}
function mapPostgresPolicyRowToFormState(policy) {
	const normalized = normalizePostgresTablePolicyRow(policy);
	const roles = parsePostgresPolicyRoles(normalized.roles);
	return {
		name: normalized.policyname,
		command: normalizePostgresPolicyCommand(normalized.cmd),
		permissive: normalizePostgresPolicyPermissive(normalized.permissive),
		roles: roles.length > 0 ? roles.join(", ") : "",
		usingExpression: normalized.qual ?? "",
		withCheckExpression: normalized.with_check ?? ""
	};
}
function normalizePostgresPolicyPermissive(permissive) {
	return String(permissive ?? "PERMISSIVE").trim().toUpperCase() === "RESTRICTIVE" ? "RESTRICTIVE" : "PERMISSIVE";
}
function normalizePostgresPolicyCommand(command) {
	const normalized = String(command ?? "ALL").trim().toUpperCase();
	if (normalized === "*" || normalized === "ALL") return "ALL";
	if (normalized === "SELECT" || normalized === "INSERT" || normalized === "UPDATE" || normalized === "DELETE") return normalized;
	return "ALL";
}
function qualifiedPostgresTable(tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	return `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
}
function formatPostgresPolicyRolesClause(rolesInput) {
	const roles = resolvePostgresPolicyRolesForSql(rolesInput);
	if (roles.length === 0) return "PUBLIC";
	return roles.map((role) => {
		const normalized = role.toLowerCase();
		if (normalized === "public" || normalized === "current_user" || normalized === "current_role") return normalized.toUpperCase();
		return quotePostgresIdentifier(role);
	}).join(", ");
}
function buildPostgresTableRlsStatusSql(schema, table) {
	return prefixPostgresSqlComment(`
SELECT
  c.relrowsecurity AS row_security_enabled,
  c.relforcerowsecurity AS force_row_security
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname = ${quotePostgresStringLiteral(schema)}
  AND c.relname = ${quotePostgresStringLiteral(table)}
`.trim(), "Load table RLS status");
}
function buildPostgresTablePoliciesSql(schema, table) {
	return prefixPostgresSqlComment(`
SELECT
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = ${quotePostgresStringLiteral(schema)}
  AND tablename = ${quotePostgresStringLiteral(table)}
ORDER BY policyname
`.trim(), "List table policies");
}
function buildPostgresEnableRlsSql(tableId) {
	return prefixPostgresSqlComment(`ALTER TABLE ${qualifiedPostgresTable(tableId)} ENABLE ROW LEVEL SECURITY`, "Enable row level security");
}
function buildPostgresDisableRlsSql(tableId) {
	return prefixPostgresSqlComment(`ALTER TABLE ${qualifiedPostgresTable(tableId)} DISABLE ROW LEVEL SECURITY`, "Disable row level security");
}
function buildPostgresForceRlsSql(tableId) {
	return prefixPostgresSqlComment(`ALTER TABLE ${qualifiedPostgresTable(tableId)} FORCE ROW LEVEL SECURITY`, "Force row level security");
}
function buildPostgresNoForceRlsSql(tableId) {
	return prefixPostgresSqlComment(`ALTER TABLE ${qualifiedPostgresTable(tableId)} NO FORCE ROW LEVEL SECURITY`, "Disable forced row level security");
}
function buildPostgresCreatePolicySql(tableId, form) {
	const policyName = form.name.trim();
	if (!policyName) throw new Error("Policy name is required");
	const parts = [
		`CREATE POLICY ${quotePostgresIdentifier(policyName)}`,
		`ON ${qualifiedPostgresTable(tableId)}`,
		`AS ${form.permissive}`,
		`FOR ${form.command}`,
		`TO ${formatPostgresPolicyRolesClause(form.roles)}`
	];
	const usingExpression = form.usingExpression.trim();
	if (usingExpression) parts.push(`USING (${usingExpression})`);
	const withCheckExpression = form.withCheckExpression.trim();
	if (withCheckExpression) parts.push(`WITH CHECK (${withCheckExpression})`);
	return prefixPostgresSqlComment(parts.join("\n"), "Create table policy");
}
function buildPostgresAlterPolicySql(tableId, policyName, form) {
	const trimmedName = policyName.trim();
	if (!trimmedName) throw new Error("Policy name is required");
	const parts = [
		`ALTER POLICY ${quotePostgresIdentifier(trimmedName)}`,
		`ON ${qualifiedPostgresTable(tableId)}`,
		`TO ${formatPostgresPolicyRolesClause(form.roles)}`
	];
	const usingExpression = form.usingExpression.trim();
	if (usingExpression) parts.push(`USING (${usingExpression})`);
	const withCheckExpression = form.withCheckExpression.trim();
	if (withCheckExpression) parts.push(`WITH CHECK (${withCheckExpression})`);
	return prefixPostgresSqlComment(parts.join("\n"), "Update table policy");
}
function buildPostgresDropPolicySql(tableId, policyName) {
	const trimmedName = policyName.trim();
	if (!trimmedName) throw new Error("Policy name is required");
	return prefixPostgresSqlComment(`DROP POLICY ${quotePostgresIdentifier(trimmedName)} ON ${qualifiedPostgresTable(tableId)}`, "Delete table policy");
}
function validatePostgresPolicyFormState(form, _options) {
	if (!form.name.trim()) return "Policy name is required";
	return null;
}
const POSTGRES_ROLE_NAME_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;
var POSTGRES_BUILTIN_PROTECTED_ROLES = new Set([
	"PUBLIC",
	"postgres",
	"rdsadmin",
	"rds_superuser",
	"cloudsqlsuperuser",
	"azure_superuser",
	"supabase_admin",
	"supabase_auth_admin",
	"supabase_storage_admin"
]);
function isPostgresRoleFlag(value) {
	return isPostgresTruthyFlag(value);
}
function isPostgresBuiltinRole(row) {
	if (POSTGRES_BUILTIN_PROTECTED_ROLES.has(row.role_name)) return true;
	if (row.role_name.startsWith("pg_")) return true;
	return false;
}
function isPostgresProtectedRole(row) {
	if (isPostgresBuiltinRole(row)) return true;
	if (isPostgresRoleFlag(row.is_superuser)) return true;
	return false;
}
function canUpdatePostgresRole(row) {
	return !isPostgresBuiltinRole(row);
}
function parsePostgresRoleMembership(memberOf) {
	if (Array.isArray(memberOf)) return memberOf.map((role) => String(role).trim()).filter(Boolean);
	if (typeof memberOf !== "string" || !memberOf.trim()) return [];
	const trimmed = memberOf.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		const inner = trimmed.slice(1, -1).trim();
		if (!inner) return [];
		return inner.split(",").map((role) => role.trim().replace(/^"(.*)"$/, "$1")).filter(Boolean);
	}
	return [trimmed];
}
function formatPostgresRoleMembership(memberOf) {
	const parsed = parsePostgresRoleMembership(memberOf);
	if (parsed.length === 0) return "";
	return parsed.join(", ");
}
function formatPostgresRoleConnectionLimit(value) {
	if (value === null || value === void 0 || value === "") return null;
	const parsed = Number(value);
	if (!Number.isFinite(parsed)) return String(value);
	if (parsed === -1) return "Unlimited";
	return String(parsed);
}
function createDefaultPostgresRoleFormState() {
	return {
		roleName: "",
		password: "",
		canLogin: false,
		isSuperuser: false,
		canCreateRole: false,
		canCreateDb: false,
		canReplicate: false,
		inherit: true,
		bypassRls: false,
		unlimitedConnections: true,
		connectionLimit: "",
		noExpiry: true,
		validUntil: "",
		memberOf: []
	};
}
function formatValidUntilForInput$1(value) {
	if (!value || value === "infinity") return {
		noExpiry: true,
		validUntil: ""
	};
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return {
		noExpiry: true,
		validUntil: ""
	};
	return {
		noExpiry: false,
		validUntil: parsed.toISOString()
	};
}
function mapPostgresRoleRowToFormState(row) {
	const connectionLimit = formatPostgresRoleConnectionLimit(row.connection_limit);
	const expiry = formatValidUntilForInput$1(row.valid_until);
	return {
		roleName: row.role_name,
		password: "",
		canLogin: isPostgresRoleFlag(row.can_login),
		isSuperuser: isPostgresRoleFlag(row.is_superuser),
		canCreateRole: isPostgresRoleFlag(row.can_create_role),
		canCreateDb: isPostgresRoleFlag(row.can_create_db),
		canReplicate: isPostgresRoleFlag(row.can_replicate),
		inherit: isPostgresRoleFlag(row.inherit),
		bypassRls: isPostgresRoleFlag(row.bypass_rls),
		unlimitedConnections: connectionLimit === "Unlimited" || connectionLimit === null,
		connectionLimit: connectionLimit && connectionLimit !== "Unlimited" ? connectionLimit : "",
		noExpiry: expiry.noExpiry,
		validUntil: expiry.validUntil,
		memberOf: parsePostgresRoleMembership(row.member_of)
	};
}
function validatePostgresRoleFormState(formState, options) {
	const roleName = formState.roleName.trim();
	if (!options.isEdit) {
		if (!roleName) return "Role name is required";
		if (!POSTGRES_ROLE_NAME_REGEX.test(roleName)) return "Role name must use letters, numbers, and underscores only.";
	}
	if (formState.canLogin && !options.isEdit && !formState.password.trim()) return "Password is required when login is enabled.";
	if (!formState.unlimitedConnections) {
		const limit = Number.parseInt(formState.connectionLimit.trim(), 10);
		if (!Number.isFinite(limit) || limit < 0) return "Connection limit must be a non-negative number.";
	}
	if (!formState.noExpiry && !formState.validUntil.trim()) return "Valid until is required when expiry is enabled.";
	return null;
}
function quotePostgresRoleNames(roleNames) {
	return roleNames.map((role) => quotePostgresIdentifier(role)).join(", ");
}
function buildPostgresRoleAttributeClauses(formState, options) {
	const clauses = [
		formState.canLogin ? "LOGIN" : "NOLOGIN",
		formState.isSuperuser ? "SUPERUSER" : "NOSUPERUSER",
		formState.canCreateRole ? "CREATEROLE" : "NOCREATEROLE",
		formState.canCreateDb ? "CREATEDB" : "NOCREATEDB",
		formState.canReplicate ? "REPLICATION" : "NOREPLICATION",
		formState.inherit ? "INHERIT" : "NOINHERIT",
		formState.bypassRls ? "BYPASSRLS" : "NOBYPASSRLS"
	];
	if (options.includePassword && formState.password.trim()) clauses.push(`PASSWORD ${quotePostgresStringLiteral(formState.password.trim())}`);
	if (formState.unlimitedConnections) clauses.push("CONNECTION LIMIT -1");
	else {
		const limit = Number.parseInt(formState.connectionLimit.trim(), 10);
		clauses.push(`CONNECTION LIMIT ${limit}`);
	}
	if (formState.noExpiry) clauses.push("VALID UNTIL 'infinity'");
	else {
		const parsed = new Date(formState.validUntil.trim());
		const pad = (n) => String(n).padStart(2, "0");
		const normalized = Number.isNaN(parsed.getTime()) ? formState.validUntil.trim().replace("T", " ") : `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())} ${pad(parsed.getHours())}:${pad(parsed.getMinutes())}:${pad(parsed.getSeconds())}`;
		clauses.push(`VALID UNTIL ${quotePostgresStringLiteral(normalized)}`);
	}
	return clauses;
}
function buildPostgresListRolesSql() {
	return prefixPostgresSqlComment(`
SELECT
  r.rolname AS role_name,
  r.rolcanlogin AS can_login,
  r.rolcreaterole AS can_create_role,
  r.rolcreatedb AS can_create_db,
  r.rolsuper AS is_superuser,
  r.rolreplication AS can_replicate,
  r.rolinherit AS inherit,
  r.rolbypassrls AS bypass_rls,
  r.rolconnlimit AS connection_limit,
  r.rolvaliduntil AS valid_until,
  COALESCE(
    array_agg(DISTINCT parent.rolname ORDER BY parent.rolname)
      FILTER (WHERE parent.rolname IS NOT NULL),
    '{}'::name[]
  ) AS member_of
FROM pg_catalog.pg_roles r
LEFT JOIN pg_catalog.pg_auth_members membership
  ON membership.member = r.oid
LEFT JOIN pg_catalog.pg_roles parent
  ON parent.oid = membership.roleid
WHERE r.rolname !~ '^pg_'
GROUP BY
  r.rolname,
  r.rolcanlogin,
  r.rolcreaterole,
  r.rolcreatedb,
  r.rolsuper,
  r.rolreplication,
  r.rolinherit,
  r.rolbypassrls,
  r.rolconnlimit,
  r.rolvaliduntil
ORDER BY r.rolname ASC
`.trim(), "List PostgreSQL roles (excluding pg_* system roles)");
}
function buildPostgresCreateRoleSql(formState) {
	const roleName = formState.roleName.trim();
	const clauses = buildPostgresRoleAttributeClauses(formState, { includePassword: true });
	if (formState.memberOf.length > 0) clauses.push(`IN ROLE ${quotePostgresRoleNames(formState.memberOf)}`);
	const withClause = clauses.length > 0 ? ` WITH ${clauses.join(" ")}` : "";
	return prefixPostgresSqlComment(`CREATE ROLE ${quotePostgresIdentifier(roleName)}${withClause}`, `Create PostgreSQL role ${roleName}`);
}
function buildPostgresRoleMembershipChangeSql(roleName, previousMembers, nextMembers) {
	const previous = new Set(previousMembers);
	const next = new Set(nextMembers);
	const statements = [];
	for (const member of next) if (!previous.has(member)) statements.push(`GRANT ${quotePostgresIdentifier(member)} TO ${quotePostgresIdentifier(roleName)}`);
	for (const member of previous) if (!next.has(member)) statements.push(`REVOKE ${quotePostgresIdentifier(member)} FROM ${quotePostgresIdentifier(roleName)}`);
	return statements;
}
function buildPostgresUpdateRoleSql(formState, previousMembers) {
	const roleName = formState.roleName.trim();
	return buildPostgresSingleRequestDdlSql([`ALTER ROLE ${quotePostgresIdentifier(roleName)} WITH ${buildPostgresRoleAttributeClauses(formState, { includePassword: Boolean(formState.password.trim()) }).join(" ")}`, ...buildPostgresRoleMembershipChangeSql(roleName, previousMembers, formState.memberOf)], `Update PostgreSQL role ${roleName}`);
}
function buildPostgresDropRoleSql(roleName) {
	return prefixPostgresSqlComment(`DROP ROLE ${quotePostgresIdentifier(roleName)}`, `Drop PostgreSQL role ${roleName}`);
}
function quotePostgresRelationPair(schema, table) {
	return `(${quotePostgresStringLiteral(schema)}, ${quotePostgresStringLiteral(table)})`;
}
function buildPostgresVisualizerColumnsBatchSql(schema, tableNames) {
	const trimmedNames = tableNames.map((name) => name.trim()).filter(Boolean);
	if (trimmedNames.length === 0) return prefixPostgresSqlComment("SELECT NULL::text AS table_schema LIMIT 0", "List visualizer columns (empty batch)");
	return prefixPostgresSqlComment(`
WITH relations AS (
  SELECT
    c.oid AS rel_oid,
    n.nspname AS table_schema,
    c.relname AS table_name,
    CASE c.relkind
      WHEN 'r' THEN 'BASE TABLE'
      WHEN 'v' THEN 'VIEW'
      ELSE c.relkind::text
    END AS table_type
  FROM pg_catalog.pg_class c
  JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = ${quotePostgresStringLiteral(schema.trim())}
    AND c.relname IN (${trimmedNames.map((name) => quotePostgresStringLiteral(name)).join(", ")})
    AND c.relkind IN ('r', 'v')
)
SELECT
  r.table_schema,
  r.table_name,
  r.table_type,
  a.attname AS column_name,
  format_type(a.atttypid, a.atttypmod) AS data_type,
  t.typname AS udt_name,
  CASE WHEN a.attnotnull THEN 'NO' ELSE 'YES' END AS is_nullable,
  a.attnum AS ordinal_position,
  EXISTS (
    SELECT 1
    FROM pg_catalog.pg_index i
    WHERE i.indrelid = r.rel_oid
      AND i.indisprimary
      AND a.attnum = ANY (i.indkey)
  ) AS is_primary_key
FROM relations r
JOIN pg_catalog.pg_attribute a ON a.attrelid = r.rel_oid
JOIN pg_catalog.pg_type t ON t.oid = a.atttypid
WHERE a.attnum > 0
  AND NOT a.attisdropped
ORDER BY r.table_name, a.attnum
`.trim(), "List visualizer columns batch");
}
function buildPostgresVisualizerExternalColumnsSql(relations) {
	const pairs = relations.map(({ schema, table }) => ({
		schema: schema.trim(),
		table: table.trim()
	})).filter(({ schema, table }) => schema && table);
	if (pairs.length === 0) return prefixPostgresSqlComment("SELECT NULL::text AS table_schema LIMIT 0", "List visualizer external columns (empty)");
	return prefixPostgresSqlComment(`
WITH relations AS (
  SELECT
    c.oid AS rel_oid,
    n.nspname AS table_schema,
    c.relname AS table_name,
    CASE c.relkind
      WHEN 'r' THEN 'BASE TABLE'
      WHEN 'v' THEN 'VIEW'
      ELSE c.relkind::text
    END AS table_type
  FROM pg_catalog.pg_class c
  JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
  WHERE (n.nspname, c.relname) IN (${pairs.map(({ schema, table }) => quotePostgresRelationPair(schema, table)).join(", ")})
    AND c.relkind IN ('r', 'v')
)
SELECT
  r.table_schema,
  r.table_name,
  r.table_type,
  a.attname AS column_name,
  format_type(a.atttypid, a.atttypmod) AS data_type,
  t.typname AS udt_name,
  CASE WHEN a.attnotnull THEN 'NO' ELSE 'YES' END AS is_nullable,
  a.attnum AS ordinal_position,
  EXISTS (
    SELECT 1
    FROM pg_catalog.pg_index i
    WHERE i.indrelid = r.rel_oid
      AND i.indisprimary
      AND a.attnum = ANY (i.indkey)
  ) AS is_primary_key
FROM relations r
JOIN pg_catalog.pg_attribute a ON a.attrelid = r.rel_oid
JOIN pg_catalog.pg_type t ON t.oid = a.atttypid
WHERE a.attnum > 0
  AND NOT a.attisdropped
ORDER BY r.table_schema, r.table_name, a.attnum
`.trim(), "List visualizer external columns");
}
function buildPostgresVisualizerForeignKeysSql(schema) {
	return prefixPostgresSqlComment(`
SELECT
  con.conname AS constraint_name,
  src_ns.nspname AS source_schema,
  src.relname AS source_table,
  src_att.attname AS source_column,
  ref_ns.nspname AS target_schema,
  ref.relname AS target_table,
  ref_att.attname AS target_column
FROM pg_catalog.pg_constraint con
JOIN pg_catalog.pg_class src ON src.oid = con.conrelid
JOIN pg_catalog.pg_namespace src_ns ON src_ns.oid = src.relnamespace
JOIN pg_catalog.pg_class ref ON ref.oid = con.confrelid
JOIN pg_catalog.pg_namespace ref_ns ON ref_ns.oid = ref.relnamespace
JOIN LATERAL unnest(con.conkey) WITH ORDINALITY AS sk(attnum, ord) ON true
JOIN LATERAL unnest(con.confkey) WITH ORDINALITY AS rk(attnum, ord) ON sk.ord = rk.ord
JOIN pg_catalog.pg_attribute src_att
  ON src_att.attrelid = src.oid
  AND src_att.attnum = sk.attnum
  AND NOT src_att.attisdropped
JOIN pg_catalog.pg_attribute ref_att
  ON ref_att.attrelid = ref.oid
  AND ref_att.attnum = rk.attnum
  AND NOT ref_att.attisdropped
WHERE con.contype = 'f'
  AND src_ns.nspname = ${quotePostgresStringLiteral(schema.trim())}
  AND src_ns.nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
  AND src_ns.nspname NOT LIKE 'pg_temp_%'
  AND src_ns.nspname NOT LIKE 'pg_toast_temp_%'
ORDER BY src.relname, con.conname, sk.ord
`.trim(), "List visualizer foreign keys");
}
function formatPostgresSqlLiteral(value) {
	if (value === null || value === void 0) return "NULL";
	if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
	if (typeof value === "number") {
		if (!Number.isFinite(value)) throw new Error("Invalid numeric value.");
		return String(value);
	}
	if (typeof value === "bigint") return String(value);
	if (typeof value === "object") return `${quotePostgresStringLiteral(JSON.stringify(value))}::jsonb`;
	return quotePostgresStringLiteral(String(value));
}
const POSTGRES_ROW_CTID_COLUMN = "__ctid__";
function qualifiedTable$1(schema, table) {
	return `${quotePostgresIdentifier(schema)}.${quotePostgresIdentifier(table)}`;
}
function getPostgresPrimaryKeyColumns(columns) {
	return columns.filter(isPostgresPrimaryKeyColumn);
}
function buildPostgresRowIdentityFromRow(row, columns) {
	const pkColumns = getPostgresPrimaryKeyColumns(columns);
	if (pkColumns.length > 0) {
		const primaryKeyValues = {};
		for (const column of pkColumns) primaryKeyValues[column.column_name] = row[column.column_name];
		return { primaryKeyValues };
	}
	const ctid = row[POSTGRES_ROW_CTID_COLUMN];
	return { ctid: ctid != null ? String(ctid) : void 0 };
}
function getPostgresRowKey(row, columns) {
	const identity = buildPostgresRowIdentityFromRow(row, columns);
	if (identity.primaryKeyValues) return JSON.stringify(identity.primaryKeyValues);
	if (identity.ctid) return `ctid:${identity.ctid}`;
	return JSON.stringify(row);
}
function buildPostgresRowWhereClause(identity) {
	const conditions = [];
	if (identity.primaryKeyValues) for (const [column, value] of Object.entries(identity.primaryKeyValues)) if (value === null || value === void 0) conditions.push(`${quotePostgresIdentifier(column)} IS NULL`);
	else conditions.push(`${quotePostgresIdentifier(column)} = ${formatPostgresSqlLiteral(value)}`);
	else if (identity.ctid) conditions.push(`ctid = ${quotePostgresStringLiteral(identity.ctid)}::tid`);
	if (conditions.length === 0) throw new Error("Cannot identify row for update or delete.");
	return conditions.join(" AND ");
}
function appendWhereAndOrder$1(baseSql, options) {
	let sql = baseSql;
	if (options.whereClause?.trim()) sql += `\nWHERE ${options.whereClause.trim()}`;
	if (options.orderByClause?.trim()) sql += `\nORDER BY ${options.orderByClause.trim()}`;
	sql += `\nLIMIT ${Math.max(1, Math.floor(options.limit))}`;
	sql += `\nOFFSET ${Math.max(0, Math.floor(options.offset))}`;
	return sql;
}
function buildPostgresSelectRowsSql(tableId, options) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = qualifiedTable$1(schema, table);
	return prefixPostgresSqlComment(appendWhereAndOrder$1(options.includeCtid !== false ? `SELECT *, ctid::text AS ${quotePostgresIdentifier(POSTGRES_ROW_CTID_COLUMN)} FROM ${qualified}` : `SELECT * FROM ${qualified}`, options), "Select filtered rows");
}
function buildPostgresCountRowsSql(tableId, whereClause) {
	const { schema, table } = parsePostgresTableId(tableId);
	let sql = `SELECT COUNT(*) AS total FROM ${qualifiedTable$1(schema, table)}`;
	if (whereClause?.trim()) sql += `\nWHERE ${whereClause.trim()}`;
	return prefixPostgresSqlComment(sql, "Count filtered rows");
}
function buildPostgresUpdateRowSql(tableId, identity, changes) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = qualifiedTable$1(schema, table);
	const assignments = Object.entries(changes).map(([column, value]) => {
		if (value === null || value === void 0) return `${quotePostgresIdentifier(column)} = NULL`;
		return `${quotePostgresIdentifier(column)} = ${formatPostgresSqlLiteral(value)}`;
	});
	if (assignments.length === 0) throw new Error("No changes to update.");
	const whereClause = buildPostgresRowWhereClause(identity);
	return prefixPostgresSqlComment(`UPDATE ${qualified}\nSET ${assignments.join(", ")}\nWHERE ${whereClause}`, "Update table row");
}
function isPostgresSequenceBackedColumn(column) {
	if (column.serial_sequence?.trim()) return true;
	const identity = String(column.is_identity ?? "").toUpperCase();
	if (identity === "YES" || identity === "TRUE" || identity === "T") return true;
	const generation = String(column.identity_generation ?? "").toUpperCase();
	if (generation === "ALWAYS" || generation === "BY DEFAULT") return true;
	return (column.column_default?.toLowerCase() ?? "").includes("nextval(");
}
function getPostgresColumnSequenceName(column) {
	const fromMeta = column.serial_sequence?.trim();
	if (fromMeta) return fromMeta;
	const match = (column.column_default ?? "").match(/nextval\s*\(\s*'((?:[^']|'')+)'/i);
	if (match) return match[1].replace(/''/g, "'");
	return null;
}
function buildSyncPostgresSerialSequencesSql(tableId, columns) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = qualifiedTable$1(schema, table);
	const qualifiedLiteral = quotePostgresStringLiteral(`${schema}.${table}`);
	const blocks = [];
	for (const column of columns) {
		if (!isPostgresSequenceBackedColumn(column)) continue;
		const columnName = quotePostgresIdentifier(column.column_name);
		const columnNameLiteral = quotePostgresStringLiteral(column.column_name);
		const sequenceName = getPostgresColumnSequenceName(column);
		const sequenceExpr = sequenceName ? `${quotePostgresStringLiteral(sequenceName)}::regclass` : `pg_get_serial_sequence(${qualifiedLiteral}, ${columnNameLiteral})::regclass`;
		blocks.push(`
seq := ${sequenceExpr};
IF seq IS NOT NULL THEN
  SELECT MAX(${columnName}) INTO max_id FROM ${qualified};
  IF max_id IS NULL THEN
    PERFORM setval(seq, 1, false);
  ELSE
    PERFORM setval(seq, max_id, true);
  END IF;
END IF;`.trim());
	}
	if (blocks.length === 0) return null;
	return prefixPostgresSqlComment(`DO $sync$
DECLARE
  seq regclass;
  max_id bigint;
BEGIN
  ${blocks.join("\n  ")}
END
$sync$`, "Sync serial sequences");
}
function isPostgresDuplicatePrimaryKeyError(error) {
	const normalized = (getErrorMessage(error) ?? String(error)).toLowerCase();
	if (!normalized.includes("duplicate key")) return false;
	return normalized.includes("pkey") || normalized.includes("unique constraint") || normalized.includes("primary key");
}
function buildPostgresInsertRowSql(tableId, values) {
	const { schema, table } = parsePostgresTableId(tableId);
	const qualified = qualifiedTable$1(schema, table);
	const entries = Object.entries(values).filter(([, value]) => value !== void 0);
	if (entries.length === 0) return prefixPostgresSqlComment(`INSERT INTO ${qualified} DEFAULT VALUES`, "Insert table row");
	const columnNames = entries.map(([column]) => quotePostgresIdentifier(column));
	const valueLiterals = entries.map(([, value]) => value === null ? "NULL" : formatPostgresSqlLiteral(value));
	return prefixPostgresSqlComment(`INSERT INTO ${qualified} (${columnNames.join(", ")})\nVALUES (${valueLiterals.join(", ")})`, "Insert table row");
}
function buildPostgresDeleteRowSql(tableId, identity) {
	const { schema, table } = parsePostgresTableId(tableId);
	return prefixPostgresSqlComment(`DELETE FROM ${qualifiedTable$1(schema, table)}\nWHERE ${buildPostgresRowWhereClause(identity)}`, "Delete table row");
}
function isPostgresEngine(engine) {
	return matchesNativeEngine(engine, "postgres");
}
async function fetchPostgresDatabaseFromList(projectId, databaseId) {
	return (await sdk.forProject(projectId).postgresql.list({ queries: [Query.equal("$id", databaseId), Query.limit(1)] })).databases?.find((db) => db.$id === databaseId) ?? null;
}
async function fetchPostgresDatabase(projectId, databaseId) {
	if (!projectId || !databaseId) return null;
	try {
		const database = await sdk.forProject(projectId).postgresql.get({ databaseId });
		if (database?.$id) return database;
	} catch {}
	try {
		return await fetchPostgresDatabaseFromList(projectId, databaseId);
	} catch {
		return null;
	}
}
async function executePostgresDatabaseSql(projectId, databaseId, sql, timeoutSeconds) {
	const run = async () => {
		return normalizePostgresExecutionResult(await sdk.forProject(projectId).postgresql.createExecution({
			databaseId,
			sql: wrapPostgresSqlForDisplay(sql),
			timeoutSeconds
		}));
	};
	try {
		return await run();
	} catch (error) {
		if (!isSqlApiDdlBlockedError(error)) throw error;
		await ensureConsoleSqlApiStatements(projectId, databaseId, "postgresql").catch(() => {});
		return await run();
	}
}
function parsePostgresCountTotal(execution, fallback = 0) {
	const totalRaw = executionResultRows$1(execution)[0]?.total;
	if (typeof totalRaw === "number" && Number.isFinite(totalRaw)) return totalRaw;
	const parsed = Number.parseInt(String(totalRaw ?? fallback), 10);
	return Number.isFinite(parsed) ? parsed : fallback;
}
async function fetchPostgresSchemasPage(projectId, databaseId, options) {
	const limit = options?.limit ?? 50;
	const page = options?.page ?? 0;
	const offset = page * limit;
	const search = options?.search?.trim() || void 0;
	const [dataExecution, countExecution] = await Promise.all([executePostgresDatabaseSql(projectId, databaseId, buildPostgresListSchemasSql({
		search,
		limit,
		offset
	})), executePostgresDatabaseSql(projectId, databaseId, buildPostgresListSchemasCountSql({ search }))]);
	const schemas = executionResultRows$1(dataExecution).map((row) => coerceTrimmedString(row.schema_name)).filter(Boolean);
	const total = parsePostgresCountTotal(countExecution, schemas.length);
	return {
		schemas,
		total,
		page,
		limit,
		hasMore: offset + schemas.length < total
	};
}
async function fetchPostgresTablesPage(projectId, databaseId, options) {
	const schema = options.schema?.trim() || void 0;
	const limit = options.limit ?? 50;
	const page = options.page ?? 0;
	const offset = page * limit;
	const search = options.search?.trim() || void 0;
	const [dataExecution, countExecution] = await Promise.all([executePostgresDatabaseSql(projectId, databaseId, buildPostgresListTablesSql({
		schema,
		search,
		limit,
		offset
	})), executePostgresDatabaseSql(projectId, databaseId, buildPostgresListTablesCountSql({
		schema,
		search
	}))]);
	const tables = executionResultRows$1(dataExecution).filter((row) => row.table_schema && row.table_name);
	const total = parsePostgresCountTotal(countExecution, tables.length);
	return {
		tables,
		total,
		page,
		limit,
		hasMore: offset + tables.length < total
	};
}
async function fetchFirstPostgresTable(projectId, databaseId) {
	return (await fetchPostgresTablesPage(projectId, databaseId, {
		limit: 1,
		page: 0
	})).tables[0] ?? null;
}
async function fetchPostgresTableAutocompleteColumns(projectId, databaseId, schema, table) {
	return executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableAutocompleteColumnsSql(schema, table))).filter((row) => row.table_schema && row.table_name && row.column_name);
}
async function fetchPostgresTableColumns(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	const columns = sortPostgresTableColumns(executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableColumnsSql(schema, table))).filter((row) => row.column_name));
	return {
		columns,
		total: columns.length
	};
}
async function fetchPostgresTableRowColumns(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	const rows = executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableColumnsForRowsSql(schema, table)));
	const relKind = rows[0]?.rel_kind ?? null;
	const columns = sortPostgresTableColumns(rows.filter((row) => row.column_name));
	return {
		columns,
		total: columns.length,
		exists: relKind != null,
		supportsRowCtid: postgresRelationSupportsRowCtid(relKind)
	};
}
async function fetchPostgresTableIndexes(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	const indexes = sortPostgresTableIndexes(executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableIndexesSql(schema, table))).filter((row) => row.index_name));
	return {
		indexes,
		total: indexes.length
	};
}
async function fetchPostgresSchemaEnums(projectId, databaseId, schema) {
	const enums = sortPostgresSchemaEnums(executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresSchemaEnumsSql(schema))).filter((row) => row.enum_name).map((row) => ({
		...row,
		values: parsePostgresEnumValues(row.enum_values)
	})));
	return {
		enums,
		total: enums.length
	};
}
async function fetchPostgresTableInfo(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	return executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableInfoSql(schema, table)))[0] ?? null;
}
async function fetchPostgresTableRls(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	const row = executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTableRlsStatusSql(schema, table)))[0];
	return {
		rowSecurityEnabled: isPostgresTruthyFlag(row?.row_security_enabled),
		forceRowSecurity: isPostgresTruthyFlag(row?.force_row_security)
	};
}
async function fetchPostgresTablePolicies(projectId, databaseId, tableId) {
	const { schema, table } = parsePostgresTableId(tableId);
	const policies = executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresTablePoliciesSql(schema, table)));
	return {
		policies,
		total: policies.length
	};
}
async function fetchPostgresRoles(projectId, databaseId) {
	const roles = executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresListRolesSql()));
	return {
		roles,
		total: roles.length
	};
}
function mapPostgresVisualizerColumnRow(row) {
	return {
		name: row.column_name,
		dataType: row.data_type,
		udtName: row.udt_name,
		required: row.is_nullable !== "YES",
		isPrimaryKey: row.is_primary_key === true || row.is_primary_key === "true"
	};
}
function groupPostgresVisualizerColumns(rows) {
	const grouped = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const key = postgresTableId(row.table_schema, row.table_name);
		const columns = grouped.get(key) ?? [];
		columns.push(mapPostgresVisualizerColumnRow(row));
		grouped.set(key, columns);
	}
	return grouped;
}
async function fetchPostgresVisualizerColumnsBatch(projectId, databaseId, schema, tableNames) {
	if (!schema.trim() || tableNames.length === 0) return /* @__PURE__ */ new Map();
	return groupPostgresVisualizerColumns(executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresVisualizerColumnsBatchSql(schema, tableNames))));
}
async function fetchPostgresVisualizerExternalColumns(projectId, databaseId, relations) {
	if (relations.length === 0) return /* @__PURE__ */ new Map();
	return groupPostgresVisualizerColumns(executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresVisualizerExternalColumnsSql(relations))));
}
async function fetchPostgresVisualizerForeignKeys(projectId, databaseId, schema) {
	if (!schema.trim()) return [];
	return executionResultRows$1(await executePostgresDatabaseSql(projectId, databaseId, buildPostgresVisualizerForeignKeysSql(schema))).filter((row) => row.source_schema && row.source_table && row.source_column && row.target_schema && row.target_table && row.target_column);
}
function postgresVisualizerForeignKeysQueryOptions(projectId, databaseId, schema) {
	const normalizedSchema = schema?.trim() || void 0;
	return queryOptions({
		queryKey: [
			"postgres-visualizer",
			"foreign-keys",
			"project",
			projectId,
			databaseId,
			normalizedSchema
		],
		queryFn: () => fetchPostgresVisualizerForeignKeys(projectId, databaseId, normalizedSchema),
		enabled: !!projectId && !!databaseId && !!normalizedSchema,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && normalizedSchema ? 300 * 1e3 : 0
	});
}
async function resolvePostgresTableColumnsForRows(projectId, databaseId, tableId, tableColumns) {
	if (tableColumns) return {
		columns: tableColumns,
		total: tableColumns.length
	};
	return fetchPostgresTableRowColumns(projectId, databaseId, tableId);
}
function buildPostgresRowsWhereClause(params, columns) {
	return buildPostgresRowsListWhereClause(params?.filterKeys, params?.search, columns);
}
function buildPostgresRowsOrderClause(columns, sortBy, orderDirection = "asc", supportsRowCtid = true) {
	const direction = orderDirection === "desc" ? "DESC" : "ASC";
	const sortColumn = sortBy?.trim();
	if (sortColumn && columns.some((column) => column.column_name === sortColumn)) return `${quotePostgresIdentifier(sortColumn)} ${direction}`;
	const pkColumns = columns.filter((column) => column.is_primary_key === true || column.is_primary_key === "true");
	if (pkColumns.length > 0) return pkColumns.map((column) => `${quotePostgresIdentifier(column.column_name)} ${direction}`).join(", ");
	if (supportsRowCtid) return `${quotePostgresIdentifier(POSTGRES_ROW_CTID_COLUMN)} ${direction}`;
	const sortableColumns = columns.filter((column) => column.column_name !== POSTGRES_ROW_CTID_COLUMN);
	if (sortableColumns.length === 0) return void 0;
	return sortableColumns.map((column) => `${quotePostgresIdentifier(column.column_name)} ${direction}`).join(", ");
}
async function fetchPostgresTableRows(projectId, databaseId, tableId, page, limit, params, options) {
	const columnsResult = await resolvePostgresTableColumnsForRows(projectId, databaseId, tableId, options?.tableColumns);
	const supportsRowCtid = options?.supportsRowCtid !== false;
	const whereClause = buildPostgresRowsWhereClause(params, columnsResult.columns);
	const orderByClause = buildPostgresRowsOrderClause(columnsResult.columns, params?.orderBy, params?.orderDirection ?? "asc", supportsRowCtid);
	const offset = page * limit;
	const [dataExecution, countExecution] = await Promise.all([executePostgresDatabaseSql(projectId, databaseId, buildPostgresSelectRowsSql(tableId, {
		whereClause,
		orderByClause,
		limit,
		offset,
		includeCtid: supportsRowCtid
	})), executePostgresDatabaseSql(projectId, databaseId, buildPostgresCountRowsSql(tableId, whereClause))]);
	const rows = executionResultRows$1(dataExecution);
	return {
		rows,
		total: parsePostgresCountTotal(countExecution, rows.length),
		columns: dataExecution.columns ?? [],
		tableColumns: columnsResult.columns,
		durationMs: dataExecution.durationMs,
		truncated: dataExecution.truncated
	};
}
function postgresDatabaseQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres-database",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresDatabase(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresTableAutocompleteColumnsQueryOptions(projectId, databaseId, schema, table) {
	const normalizedSchema = schema?.trim() ?? "";
	const normalizedTable = table?.trim() ?? "";
	return queryOptions({
		queryKey: [
			"postgres-autocomplete-columns",
			"project",
			projectId,
			databaseId,
			normalizedSchema,
			normalizedTable
		],
		queryFn: () => fetchPostgresTableAutocompleteColumns(projectId, databaseId, normalizedSchema, normalizedTable),
		enabled: !!projectId && !!databaseId && !!normalizedSchema && !!normalizedTable,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && normalizedSchema && normalizedTable ? 300 * 1e3 : 0
	});
}
async function fetchPostgresDatabaseCredentials(projectId, databaseId) {
	const database = await fetchPostgresDatabase(projectId, databaseId);
	if (!database) throw new Error("Database not found");
	return mapDedicatedDatabaseCredentials(database);
}
function postgresDatabaseCredentialsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres-database-credentials",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresDatabaseCredentials(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
async function fetchPostgresDatabasePooler(projectId, databaseId) {
	try {
		return await sdk.forProject(projectId).postgresql.getPooler({ databaseId });
	} catch {
		return null;
	}
}
function postgresDatabasePoolerQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres-database-pooler",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresDatabasePooler(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
async function updatePostgresDatabase(projectId, input) {
	const { databaseId, ...params } = input;
	return sdk.forProject(projectId).postgresql.update({
		databaseId,
		...params
	});
}
async function updatePostgresDatabaseMaintenance(projectId, databaseId, day, hourUtc) {
	return sdk.forProject(projectId).postgresql.updateMaintenance({
		databaseId,
		day,
		hourUtc
	});
}
async function deletePostgresDatabase(projectId, databaseId) {
	return sdk.forProject(projectId).postgresql.delete({ databaseId });
}
async function resetPostgresDatabaseCredentials(projectId, databaseId) {
	return sdk.forProject(projectId).postgresql.updateCredentials({ databaseId });
}
function useUpdatePostgresDatabase(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (input) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updatePostgresDatabase(projectId, {
				databaseId,
				...input
			});
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			await refetchProjectDatabaseLists(queryClient, projectId);
		}
	});
}
function useUpdatePostgresDatabaseMaintenance(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ day, hourUtc }) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updatePostgresDatabaseMaintenance(projectId, databaseId, day, hourUtc);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, database);
		}
	});
}
function useResetPostgresDatabaseCredentials(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return resetPostgresDatabaseCredentials(projectId, databaseId);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			queryClient.setQueryData(postgresDatabaseCredentialsQueryOptions(projectId, databaseId).queryKey, mapDedicatedDatabaseCredentials(database));
			await queryClient.invalidateQueries({ queryKey: [
				"dedicated-databases",
				"project",
				projectId
			] });
		}
	});
}
function useDeletePostgresDatabase(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (databaseId) => {
			return deletePostgresDatabase(projectId, databaseId);
		},
		onSuccess: async (_data, databaseId) => {
			if (!projectId) return;
			invalidateDatabaseModel(projectId, databaseId);
			queryClient.removeQueries({ queryKey: postgresDatabaseQueryOptions(projectId, databaseId).queryKey });
			await refetchProjectDatabaseLists(queryClient, projectId);
		}
	});
}
function postgresTableColumnsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-columns",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTableColumns(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresTableRowColumnsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-row-columns",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTableRowColumns(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresTableIndexesQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-indexes",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTableIndexes(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresSchemaEnumsQueryOptions(projectId, databaseId, schema) {
	return queryOptions({
		queryKey: [
			"postgres-schema-enums",
			"project",
			projectId,
			databaseId,
			schema
		],
		queryFn: () => fetchPostgresSchemaEnums(projectId, databaseId, schema),
		enabled: !!projectId && !!databaseId && !!schema,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && schema ? 300 * 1e3 : 0
	});
}
function postgresTableInfoQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-info",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTableInfo(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresTableRlsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-rls",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTableRls(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresTablePoliciesQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"postgres-table-policies",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchPostgresTablePolicies(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function postgresRolesQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres-roles",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresRoles(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresTableRowsQueryOptions(projectId, databaseId, tableId, page = 0, limit = 25, params) {
	const filterKey = params?.filterKeys?.length ? JSON.stringify(params.filterKeys) : void 0;
	return queryOptions({
		queryKey: [
			"postgres-table-rows",
			"project",
			projectId,
			databaseId,
			tableId,
			page,
			limit,
			params?.search?.trim() || void 0,
			filterKey,
			params?.orderBy,
			params?.orderDirection
		],
		queryFn: async ({ client }) => {
			const rowColumns = await client.ensureQueryData(postgresTableRowColumnsQueryOptions(projectId, databaseId, tableId));
			return fetchPostgresTableRows(projectId, databaseId, tableId, page, limit, params, {
				tableColumns: rowColumns.columns,
				supportsRowCtid: rowColumns.supportsRowCtid
			});
		},
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
async function updatePostgresTableRow(projectId, databaseId, tableId, identity, changes) {
	return executePostgresDatabaseSql(projectId, databaseId, buildPostgresUpdateRowSql(tableId, identity, changes));
}
async function createPostgresTableRow(projectId, databaseId, tableId, values) {
	const { columns } = await fetchPostgresTableRowColumns(projectId, databaseId, tableId);
	const filteredValues = filterPostgresRowCreateValues(values, columns);
	const sql = buildPostgresInsertRowSql(tableId, filteredValues);
	const omittedSequenceColumns = columns.filter((column) => isPostgresSequenceBackedColumn(column) && !Object.prototype.hasOwnProperty.call(filteredValues, column.column_name));
	const syncSql = omittedSequenceColumns.length > 0 ? buildSyncPostgresSerialSequencesSql(tableId, omittedSequenceColumns) : null;
	const runSync = async () => {
		if (!syncSql) return;
		await executePostgresDatabaseSql(projectId, databaseId, syncSql);
	};
	await runSync();
	const runInsert = () => executePostgresDatabaseSql(projectId, databaseId, sql);
	try {
		return await runInsert();
	} catch (error) {
		if (!syncSql || !isPostgresDuplicatePrimaryKeyError(error)) throw error;
		await runSync();
		return await runInsert();
	}
}
async function deletePostgresTableRow(projectId, databaseId, tableId, identity) {
	return executePostgresDatabaseSql(projectId, databaseId, buildPostgresDeleteRowSql(tableId, identity));
}
async function deletePostgresTableRows(projectId, databaseId, tableId, identities) {
	await Promise.all(identities.map((identity) => deletePostgresTableRow(projectId, databaseId, tableId, identity)));
}
async function commitPostgresRowEdits(projectId, databaseId, tableId, edits) {
	const grouped = groupPostgresEditsByRow(edits);
	for (const [, { identity, changes }] of grouped) await updatePostgresTableRow(projectId, databaseId, tableId, identity, changes);
}
function useUpdatePostgresTableRow(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (params) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updatePostgresTableRow(projectId, databaseId, tableId, params.identity, params.changes);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useCreatePostgresTableRow(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (values) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return createPostgresTableRow(projectId, databaseId, tableId, values);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-columns",
				"project",
				projectId,
				databaseId,
				tableId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-row-columns",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useDeletePostgresTableRows(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (identities) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return deletePostgresTableRows(projectId, databaseId, tableId, identities);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useCommitPostgresRowEdits(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (edits) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return commitPostgresRowEdits(projectId, databaseId, tableId, edits);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"postgres-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function usePostgresDatabase(projectId, databaseId) {
	const queryClient = useQueryClient();
	const { data, isLoading, error, refetch, isFetching } = useQuery({
		...postgresDatabaseQueryOptions(projectId, databaseId),
		refetchInterval: (query) => shouldPollDedicatedDatabaseStatus(query.state.data?.status) ? DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS : false
	});
	useEffect(() => {
		if (!projectId || !databaseId || !data?.status) return;
		const nextStatus = data.status;
		queryClient.setQueryData([
			"dedicated-databases",
			"project",
			projectId
		], (prev) => {
			if (!prev?.databases?.length) return prev;
			let changed = false;
			const databases = prev.databases.map((db) => {
				if (db.$id !== databaseId || db.status === nextStatus) return db;
				changed = true;
				return {
					...db,
					status: nextStatus
				};
			});
			return changed ? {
				...prev,
				databases
			} : prev;
		});
	}, [
		data?.status,
		databaseId,
		projectId,
		queryClient
	]);
	return {
		database: data ?? null,
		isLoading,
		error,
		refetch,
		isFetching
	};
}
function keepPreviousDataIfQueryPrefixMatches$1(previousData, previousQuery, queryKey, prefixLength) {
	if (!previousQuery) return void 0;
	for (let index = 0; index < prefixLength; index += 1) if (previousQuery.queryKey[index] !== queryKey[index]) return void 0;
	return previousData;
}
function postgresSidebarSchemasInfiniteQueryOptions(projectId, databaseId, search) {
	const normalizedSearch = search.trim() || void 0;
	return infiniteQueryOptions({
		queryKey: [
			"postgres-schemas",
			"project",
			projectId,
			databaseId,
			"sidebar",
			normalizedSearch
		],
		queryFn: ({ pageParam }) => fetchPostgresSchemasPage(projectId, databaseId, {
			search: normalizedSearch,
			page: pageParam
		}),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.page + 1 : void 0,
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresSidebarTablesInfiniteQueryOptions(projectId, databaseId, schema, search) {
	const normalizedSearch = search.trim() || void 0;
	return infiniteQueryOptions({
		queryKey: [
			"postgres-tables",
			"project",
			projectId,
			databaseId,
			"sidebar",
			schema,
			normalizedSearch
		],
		queryFn: ({ pageParam }) => fetchPostgresTablesPage(projectId, databaseId, {
			schema: schema?.trim() || void 0,
			search: normalizedSearch,
			page: pageParam
		}),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.page + 1 : void 0,
		enabled: !!projectId && !!databaseId && !!schema?.trim(),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && schema?.trim() ? 300 * 1e3 : 0
	});
}
function usePostgresSidebarSchemas(projectId, databaseId, search) {
	const sidebarQueryOptions = postgresSidebarSchemasInfiniteQueryOptions(projectId, databaseId, search.trim());
	const { data, isLoading, isFetching, isFetchingNextPage, error, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
		...sidebarQueryOptions,
		placeholderData: (previousData, previousQuery) => keepPreviousDataIfQueryPrefixMatches$1(previousData, previousQuery, sidebarQueryOptions.queryKey, 5)
	});
	const schemas = useMemo(() => data?.pages.flatMap((page) => page.schemas) ?? [], [data?.pages]);
	return {
		schemas,
		total: data?.pages[0]?.total ?? schemas.length,
		isLoading,
		isFetching,
		isFetchingNextPage,
		error,
		refetch,
		fetchNextPage,
		hasNextPage: hasNextPage ?? false
	};
}
function usePostgresSidebarTables(projectId, databaseId, schema, search) {
	const sidebarQueryOptions = postgresSidebarTablesInfiniteQueryOptions(projectId, databaseId, schema, search.trim());
	const { data, isLoading, isFetching, isFetchingNextPage, error, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
		...sidebarQueryOptions,
		placeholderData: (previousData, previousQuery) => keepPreviousDataIfQueryPrefixMatches$1(previousData, previousQuery, sidebarQueryOptions.queryKey, 6)
	});
	const tables = useMemo(() => data?.pages.flatMap((page) => page.tables) ?? [], [data?.pages]);
	return {
		tables,
		total: data?.pages[0]?.total ?? tables.length,
		isLoading,
		isFetching,
		isFetchingNextPage,
		error,
		refetch,
		fetchNextPage,
		hasNextPage: hasNextPage ?? false
	};
}
function usePostgresDatabaseCredentials(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresDatabaseCredentialsQueryOptions(projectId, databaseId));
	return {
		credentials: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresDatabasePooler(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresDatabasePoolerQueryOptions(projectId, databaseId));
	return {
		pooler: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTableRows(projectId, databaseId, tableId, page = 0, limit = 25, params) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTableRowsQueryOptions(projectId, databaseId, tableId, page, limit, params));
	return {
		rows: data?.rows ?? [],
		total: data?.total ?? 0,
		columns: data?.columns ?? [],
		tableColumns: data?.tableColumns ?? [],
		durationMs: data?.durationMs,
		truncated: data?.truncated,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTableColumns(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTableColumnsQueryOptions(projectId, databaseId, tableId));
	return {
		columns: data?.columns ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTableIndexes(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTableIndexesQueryOptions(projectId, databaseId, tableId));
	return {
		indexes: data?.indexes ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresSchemaEnums(projectId, databaseId, schema) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresSchemaEnumsQueryOptions(projectId, databaseId, schema));
	return {
		enums: data?.enums ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresRoles(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresRolesQueryOptions(projectId, databaseId));
	return {
		roles: data?.roles ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTableInfo(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTableInfoQueryOptions(projectId, databaseId, tableId));
	return {
		tableInfo: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTableRls(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTableRlsQueryOptions(projectId, databaseId, tableId));
	return {
		rowSecurityEnabled: data?.rowSecurityEnabled ?? false,
		forceRowSecurity: data?.forceRowSecurity ?? false,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function usePostgresTablePolicies(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresTablePoliciesQueryOptions(projectId, databaseId, tableId));
	return {
		policies: data?.policies ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function buildPostgresVisualizerRelationships(foreignKeys) {
	return foreignKeys.map((row) => ({
		from: postgresTableId(row.source_schema, row.source_table),
		to: postgresTableId(row.target_schema, row.target_table),
		fromColumn: row.source_column,
		toColumn: row.target_column,
		constraintName: row.constraint_name
	}));
}
function collectExternalPostgresVisualizerTargets(foreignKeys, loadedRelationIds, activeSchema) {
	const targets = /* @__PURE__ */ new Map();
	for (const row of foreignKeys) {
		const targetId = postgresTableId(row.target_schema, row.target_table);
		if (loadedRelationIds.has(targetId)) continue;
		if (row.target_schema === activeSchema) continue;
		targets.set(targetId, {
			schema: row.target_schema,
			table: row.target_table
		});
	}
	return Array.from(targets.values());
}
function usePostgresSchemaVisualizer(projectId, databaseId, schema) {
	const normalizedSchema = schema?.trim() || void 0;
	const [relations, setRelations] = useState([]);
	const [totalRelations, setTotalRelations] = useState(0);
	const [loadedRelations, setLoadedRelations] = useState(0);
	const [isLoadingRelations, setIsLoadingRelations] = useState(false);
	const [isLoadingColumns, setIsLoadingColumns] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const [loadError, setLoadError] = useState(null);
	const loadGenerationRef = useRef(0);
	const externalTargetsLoadedRef = useRef(null);
	const { data: foreignKeys = [], isLoading: foreignKeysLoading, error: foreignKeysError } = useQuery(postgresVisualizerForeignKeysQueryOptions(projectId, databaseId, normalizedSchema));
	useEffect(() => {
		if (!projectId || !databaseId || !normalizedSchema) {
			setRelations([]);
			setTotalRelations(0);
			setLoadedRelations(0);
			setIsLoadingRelations(false);
			setIsLoadingColumns(false);
			setIsComplete(false);
			setLoadError(null);
			return;
		}
		const generation = loadGenerationRef.current + 1;
		loadGenerationRef.current = generation;
		let cancelled = false;
		async function loadSchemaVisualizer() {
			setRelations([]);
			setTotalRelations(0);
			setLoadedRelations(0);
			setIsComplete(false);
			setLoadError(null);
			setIsLoadingRelations(true);
			setIsLoadingColumns(false);
			const relationMap = /* @__PURE__ */ new Map();
			let page = 0;
			let total = 0;
			try {
				while (!cancelled && loadGenerationRef.current === generation) {
					const tablesPage = await fetchPostgresTablesPage(projectId, databaseId, {
						schema: normalizedSchema,
						page,
						limit: 25
					});
					if (page === 0) {
						total = tablesPage.total;
						setTotalRelations(total);
					}
					if (tablesPage.tables.length === 0) break;
					setIsLoadingColumns(true);
					const columnsByRelation = await fetchPostgresVisualizerColumnsBatch(projectId, databaseId, normalizedSchema, tablesPage.tables.map((row) => row.table_name));
					for (const table of tablesPage.tables) {
						const id = postgresTableId(table.table_schema, table.table_name);
						relationMap.set(id, {
							id,
							schema: table.table_schema,
							name: table.table_name,
							tableType: table.table_type,
							isExternal: false,
							columns: columnsByRelation.get(id) ?? [],
							columnsLoaded: true
						});
					}
					setRelations(Array.from(relationMap.values()));
					setLoadedRelations(relationMap.size);
					setIsLoadingRelations(false);
					setIsLoadingColumns(false);
					if (!tablesPage.hasMore) break;
					page += 1;
				}
				if (cancelled || loadGenerationRef.current !== generation) return;
				setIsComplete(true);
				setIsLoadingRelations(false);
				setIsLoadingColumns(false);
			} catch (error) {
				if (cancelled || loadGenerationRef.current !== generation) return;
				setLoadError(error instanceof Error ? error : /* @__PURE__ */ new Error("Failed to load schema"));
				setIsLoadingRelations(false);
				setIsLoadingColumns(false);
			}
		}
		loadSchemaVisualizer();
		return () => {
			cancelled = true;
		};
	}, [
		projectId,
		databaseId,
		normalizedSchema
	]);
	useEffect(() => {
		externalTargetsLoadedRef.current = null;
	}, [normalizedSchema]);
	useEffect(() => {
		if (!projectId || !databaseId || !normalizedSchema) return;
		if (foreignKeysLoading || foreignKeys.length === 0) return;
		if (!isComplete) return;
		if (externalTargetsLoadedRef.current === normalizedSchema) return;
		const externalTargets = collectExternalPostgresVisualizerTargets(foreignKeys, new Set(relations.map((relation) => relation.id)), normalizedSchema);
		if (externalTargets.length === 0) {
			externalTargetsLoadedRef.current = normalizedSchema;
			return;
		}
		externalTargetsLoadedRef.current = normalizedSchema;
		let cancelled = false;
		async function loadExternalTargets() {
			try {
				const columnsByRelation = await fetchPostgresVisualizerExternalColumns(projectId, databaseId, externalTargets);
				if (cancelled) return;
				setRelations((current) => {
					const next = [...current];
					const existingIds = new Set(current.map((relation) => relation.id));
					for (const target of externalTargets) {
						const id = postgresTableId(target.schema, target.table);
						if (existingIds.has(id)) continue;
						next.push({
							id,
							schema: target.schema,
							name: target.table,
							tableType: "BASE TABLE",
							isExternal: true,
							columns: columnsByRelation.get(id) ?? [],
							columnsLoaded: true
						});
						existingIds.add(id);
					}
					return next;
				});
			} catch {}
		}
		loadExternalTargets();
		return () => {
			cancelled = true;
		};
	}, [
		projectId,
		databaseId,
		normalizedSchema,
		foreignKeys,
		foreignKeysLoading,
		isComplete,
		relations
	]);
	return {
		relations,
		relationships: useMemo(() => buildPostgresVisualizerRelationships(foreignKeys), [foreignKeys]),
		totalRelations,
		loadedRelations,
		isLoading: isLoadingRelations || isLoadingColumns || foreignKeysLoading || !!normalizedSchema && !isComplete && relations.length === 0 && !loadError,
		isLoadingRelations,
		isLoadingColumns,
		isComplete,
		error: loadError ?? foreignKeysError ?? null
	};
}
function useExplainPostgresSql(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({ mutationFn: (query) => {
		requireOperationalDatabase(queryClient, projectId, databaseId);
		return explainPostgresDatabaseQuery(projectId, databaseId, query);
	} });
}
async function refreshPostgresDatabaseCaches(queryClient, projectId, databaseId) {
	const schemaQueryKeys = [
		[
			"postgres-schemas",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-tables",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-autocomplete-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-rows",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-row-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-indexes",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-schema-enums",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-info",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-rls",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-table-policies",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-roles",
			"project",
			projectId,
			databaseId
		],
		[
			"postgres-visualizer",
			"project",
			projectId,
			databaseId
		]
	];
	for (const queryKey of schemaQueryKeys) queryClient.removeQueries({
		queryKey,
		type: "inactive"
	});
	await Promise.all(schemaQueryKeys.map((queryKey) => queryClient.invalidateQueries({ queryKey })));
}
function useExecutePostgresSql(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (sql) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executePostgresDatabaseSql(projectId, databaseId, sql);
		},
		onSuccess: () => refreshPostgresDatabaseCaches(queryClient, projectId, databaseId)
	});
}
function usePostgresSelectedSchema(databaseId, knownSchemas, account) {
	const queryClient = useQueryClient();
	const [selectedSchema, setSelectedSchemaState] = useState(null);
	const [selectionDatabaseId, setSelectionDatabaseId] = useState(databaseId);
	const initializedDatabaseIdRef = useRef(null);
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [account?.prefs, queryClient]);
	if (selectionDatabaseId !== databaseId) {
		setSelectionDatabaseId(databaseId);
		setSelectedSchemaState(null);
		initializedDatabaseIdRef.current = null;
	}
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		const next = resolvePostgresSelectedSchema({
			schemas: knownSchemas,
			persisted: parsePostgresSelectedSchema(accountPrefs, databaseId)
		});
		if (!next) return;
		setSelectedSchemaState(next);
		initializedDatabaseIdRef.current = databaseId;
	}, [
		accountPrefs,
		databaseId,
		knownSchemas
	]);
	useEffect(() => {
		if (selectedSchema || knownSchemas.length === 0) return;
		setSelectedSchemaState(resolvePostgresSelectedSchema({
			schemas: knownSchemas,
			persisted: null
		}));
	}, [knownSchemas, selectedSchema]);
	return {
		selectedSchema,
		setSelectedSchema: useCallback((schema) => {
			const trimmed = schema.trim();
			if (!trimmed) return;
			setSelectedSchemaState(trimmed);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildPostgresSelectedSchemaPrefs(databaseId, trimmed)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function usePostgresSavedQueriesSort(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [sort, setSortState] = useState(POSTGRES_SAVED_QUERIES_DEFAULT_SORT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setSortState(parsePostgresSavedQueriesSort(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		sort,
		setSort: useCallback((next) => {
			setSortState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildPostgresSavedQueriesSortPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function usePostgresSidebarTablesSort(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [sort, setSortState] = useState(POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setSortState(parsePostgresSidebarTablesSort(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		sort,
		setSort: useCallback((next) => {
			setSortState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildPostgresSidebarTablesSortPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function usePostgresSidebarPanel(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [panel, setPanelState] = useState(POSTGRES_SIDEBAR_PANEL_DEFAULT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setPanelState(parsePostgresSidebarPanel(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		panel,
		setPanel: useCallback((next) => {
			setPanelState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildPostgresSidebarPanelPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function usePostgresSavedQueryScope(databaseId, account, teamId) {
	const queryClient = useQueryClient();
	const { isLoading: teamLoading } = useConsoleTeam(teamId);
	const { userQueries, teamQueries, hasTeamLevel } = usePostgresSavedQueries(databaseId, account, teamId);
	const [savedQueryLevel, setSavedQueryLevelState] = useState("user");
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		if (!account) return;
		if (teamId && teamLoading) return;
		setSavedQueryLevelState(resolvePostgresSavedQueriesScope({
			persisted: parsePostgresSavedQueriesScope(account.prefs, databaseId),
			hasTeamLevel,
			userQueryCount: userQueries.length,
			teamQueryCount: teamQueries.length
		}));
		initializedDatabaseIdRef.current = databaseId;
	}, [
		account,
		databaseId,
		hasTeamLevel,
		teamId,
		teamLoading,
		teamQueries.length,
		userQueries.length
	]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		savedQueryLevel,
		setSavedQueryLevel: useCallback((level) => {
			setSavedQueryLevelState(level);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildPostgresSavedQueriesScopePrefs(databaseId, level)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function buildNextPostgresSavedQueriesList(current, name, sql) {
	const trimmedSql = sql.trim();
	const trimmedName = name.trim().slice(0, 64);
	if (!trimmedName) throw new Error("Name is required");
	if (!trimmedSql) throw new Error("SQL is required");
	const head = current[0];
	if (head && head.name === trimmedName && head.sql === trimmedSql) return current;
	if (current.length >= 30) throw new Error(`Maximum 30 saved queries`);
	return [{
		id: crypto.randomUUID(),
		name: trimmedName,
		sql: trimmedSql
	}, ...current].slice(0, 30);
}
function usePostgresSavedQueries(databaseId, account, teamId) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const { data: team } = useConsoleTeam(teamId);
	const updateTeamPrefs$1 = useUpdateConsoleTeamPrefs(teamId);
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const userQueries = databaseId && accountPrefs ? parsePostgresSavedQueries(accountPrefs, databaseId) : [];
	const teamQueries = databaseId && team?.prefs && teamId ? parsePostgresSavedQueries(team.prefs, databaseId) : [];
	const addUserMutation = useMutation({
		mutationFn: async ({ name, sql }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			if (sql.trim().length > 48e3) throw new Error("Query is too large to save");
			const next = buildNextPostgresSavedQueriesList(parsePostgresSavedQueries(currentAccount.prefs, databaseId), name, sql);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildPostgresSavedQueriesPrefs(databaseId, next)
			});
		},
		onMutate: async ({ name, sql }) => {
			if (!databaseId) return void 0;
			const trimmedSql = sql.trim();
			if (!name.trim().slice(0, 64) || !trimmedSql) return void 0;
			await queryClient.cancelQueries({ queryKey: ["account", "console"] });
			const previousAccounts = queryClient.getQueriesData({ queryKey: ["account", "console"] });
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => {
				if (!current) return current;
				const currentList = parsePostgresSavedQueries(current.prefs, databaseId);
				try {
					const next = buildNextPostgresSavedQueriesList(currentList, name, sql);
					return {
						...current,
						prefs: {
							...current.prefs ?? {},
							...buildPostgresSavedQueriesPrefs(databaseId, next)
						}
					};
				} catch {
					return current;
				}
			});
			return { previousAccounts };
		},
		onError: (_error, _variables, context) => {
			if (context?.previousAccounts) for (const [queryKey, data] of context.previousAccounts) queryClient.setQueryData(queryKey, data);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const addTeamMutation = useMutation({
		mutationFn: async ({ name, sql }) => {
			if (!databaseId || !teamId) throw new Error("Team or database not available");
			if (sql.trim().length > 48e3) throw new Error("Query is too large to save");
			await updateTeamPrefs$1.mutateAsync((freshPrefs) => {
				return buildPostgresSavedQueriesPrefs(databaseId, buildNextPostgresSavedQueriesList(parsePostgresSavedQueries(freshPrefs, databaseId), name, sql));
			});
		},
		onMutate: async ({ name, sql }) => {
			if (!databaseId || !teamId) return void 0;
			const trimmedSql = sql.trim();
			if (!name.trim().slice(0, 64) || !trimmedSql) return void 0;
			const teamQueryKey = [
				"team",
				"console",
				teamId
			];
			await queryClient.cancelQueries({ queryKey: teamQueryKey });
			const previousTeam = queryClient.getQueryData(teamQueryKey);
			queryClient.setQueryData(teamQueryKey, (current) => {
				if (!current) return current;
				const currentList = parsePostgresSavedQueries(current.prefs, databaseId);
				try {
					const next = buildNextPostgresSavedQueriesList(currentList, name, sql);
					return {
						...current,
						prefs: {
							...current.prefs ?? {},
							...buildPostgresSavedQueriesPrefs(databaseId, next)
						}
					};
				} catch {
					return current;
				}
			});
			return { previousTeam };
		},
		onError: (_error, _variables, context) => {
			if (!teamId || context?.previousTeam === void 0) return;
			queryClient.setQueryData([
				"team",
				"console",
				teamId
			], context.previousTeam);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const deleteUserMutation = useMutation({
		mutationFn: async (id) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			const next = parsePostgresSavedQueries(currentAccount.prefs, databaseId).filter((query) => query.id !== id);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildPostgresSavedQueriesPrefs(databaseId, next)
			});
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const deleteTeamMutation = useMutation({
		mutationFn: async (id) => {
			if (!databaseId || !teamId) throw new Error("Team or database not available");
			await updateTeamPrefs$1.mutateAsync((freshPrefs) => {
				return buildPostgresSavedQueriesPrefs(databaseId, parsePostgresSavedQueries(freshPrefs, databaseId).filter((query) => query.id !== id));
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const addSavedQuery = async (args) => {
		const trimmedSql = args.sql.trim();
		const trimmedName = args.name.trim();
		if (args.level === "team" && teamId) {
			await addTeamMutation.mutateAsync({
				name: args.name,
				sql: args.sql
			});
			const team$1 = queryClient.getQueryData([
				"team",
				"console",
				teamId
			]);
			if (!team$1 || !databaseId) return void 0;
			const queries$1 = parsePostgresSavedQueries(team$1.prefs, databaseId);
			return queries$1.find((query) => query.name === trimmedName && query.sql === trimmedSql) ?? queries$1[0];
		}
		const updatedAccount = await addUserMutation.mutateAsync({
			name: args.name,
			sql: args.sql
		});
		if (!databaseId) return void 0;
		const queries = parsePostgresSavedQueries(updatedAccount.prefs, databaseId);
		return queries.find((query) => query.name === trimmedName && query.sql === trimmedSql) ?? queries[0];
	};
	const deleteSavedQuery = async (id, level) => {
		if (level === "team" && teamId) return deleteTeamMutation.mutateAsync(id);
		return deleteUserMutation.mutateAsync(id);
	};
	return {
		userQueries,
		teamQueries,
		addSavedQuery,
		deleteSavedQuery,
		isAdding: addUserMutation.isPending || addTeamMutation.isPending,
		isDeleting: deleteUserMutation.isPending || deleteTeamMutation.isPending,
		hasTeamLevel: !!teamId
	};
}
var POSTGRES_QUERY_HISTORY_PERSIST_DEBOUNCE_MS = 400;
var POSTGRES_SQL_EDITOR_STATE_PERSIST_DEBOUNCE_MS = 400;
function usePostgresSqlEditorPersistence(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const persistTimerRef = useRef(null);
	const parseInitialEditorState = useCallback(() => {
		if (!databaseId) return null;
		return parsePostgresSqlEditorState(accountPrefs, databaseId);
	}, [accountPrefs, databaseId]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			return await updateAccountPrefs(mergePostgresSqlEditorStateIntoPrefs(currentAccount.prefs ?? {}, databaseId, value));
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistEditorTabState = useCallback((value) => {
		if (!databaseId) return;
		const currentPrefs = getConsoleAccountFromCache(queryClient)?.prefs ?? {};
		const prefsKey = getPostgresSqlEditorStateKey(databaseId);
		const nextSerialized = buildPostgresSqlEditorStatePrefs(databaseId, value)[prefsKey];
		const currentSerialized = currentPrefs[prefsKey];
		if ((typeof nextSerialized === "string" ? nextSerialized : nextSerialized != null ? JSON.stringify(nextSerialized) : void 0) === (typeof currentSerialized === "string" ? currentSerialized : currentSerialized != null ? JSON.stringify(currentSerialized) : void 0)) return;
		const patch = mergePostgresSqlEditorStateIntoPrefs(currentPrefs, databaseId, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, POSTGRES_SQL_EDITOR_STATE_PERSIST_DEBOUNCE_MS);
	}, [
		databaseId,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		parseInitialEditorState,
		persistEditorTabState
	};
}
function usePostgresQueryHistory(databaseId, account) {
	const queryClient = useQueryClient();
	const recentQueries = databaseId && account?.prefs ? parsePostgresQueryHistory(account.prefs, databaseId) : [];
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account || !databaseId) throw new Error("Account or database not available");
			return await updateAccountPrefs(mergePostgresQueryHistoryIntoPrefs(account.prefs ?? {}, databaseId, value));
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistRecentQueries = useCallback((value) => {
		if (!account || !databaseId) return;
		const patch = mergePostgresQueryHistoryIntoPrefs(account.prefs ?? {}, databaseId, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, POSTGRES_QUERY_HISTORY_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		databaseId,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		recentQueries,
		persistRecentQueries
	};
}
function normalizeDedicatedEngine(engine) {
	const normalized = (engine ?? "").toLowerCase().trim();
	if (normalized === "mongodb" || normalized === "mongo") return "mongodb";
	if (normalized === "mysql" || normalized === "mariadb") return "mysql";
	return "postgresql";
}
async function fetchDedicatedBackupPolicies(projectId, databaseId, engine) {
	if (!projectId || !databaseId) return {
		policies: [],
		total: 0
	};
	return dedicatedEngineService(sdk.forProject(projectId), engine).listBackupPolicies({
		databaseId,
		queries: [Query.orderDesc("$createdAt")]
	});
}
function dedicatedBackupPoliciesQueryOptions(projectId, databaseId, engine) {
	const normalizedEngine = normalizeDedicatedEngine(engine);
	return queryOptions({
		queryKey: [
			"dedicated-backup-policies",
			"project",
			projectId,
			databaseId,
			normalizedEngine
		],
		queryFn: () => fetchDedicatedBackupPolicies(projectId, databaseId, normalizedEngine),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
const POSTGRES_BACKUPS_PAGE_SIZE = 12;
async function fetchPostgresBackups(projectId, databaseId, page = 0, limit = POSTGRES_BACKUPS_PAGE_SIZE) {
	if (!projectId || !databaseId) return {
		backups: [],
		total: 0
	};
	return sdk.forProject(projectId).postgresql.listBackups({
		databaseId,
		queries: [
			Query.limit(limit),
			Query.offset(page * limit),
			Query.orderDesc("$createdAt")
		]
	});
}
function postgresBackupPoliciesQueryOptions(projectId, databaseId) {
	return dedicatedBackupPoliciesQueryOptions(projectId, databaseId, "postgresql");
}
function postgresBackupsQueryOptions(projectId, databaseId, page = 0, limit = POSTGRES_BACKUPS_PAGE_SIZE) {
	return queryOptions({
		queryKey: [
			"postgres-backups",
			"project",
			projectId,
			databaseId,
			page,
			limit
		],
		queryFn: () => fetchPostgresBackups(projectId, databaseId, page, limit),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function usePostgresBackupPolicies(projectId, databaseId) {
	return useQuery(postgresBackupPoliciesQueryOptions(projectId, databaseId));
}
function usePostgresBackups(projectId, databaseId, page = 0, limit = POSTGRES_BACKUPS_PAGE_SIZE) {
	return useQuery(postgresBackupsQueryOptions(projectId, databaseId, page, limit));
}
async function fetchDedicatedDatabaseReplicas(projectId, databaseId, source) {
	if (!projectId || !databaseId) return null;
	try {
		return await dedicatedDatabaseService(sdk.forProject(projectId), source).getReplicas({ databaseId });
	} catch {
		return null;
	}
}
function dedicatedDatabaseReplicasQueryOptions(projectId, databaseId, source, enabled = true, refetchInterval) {
	return queryOptions({
		queryKey: [
			"dedicated-database-replicas",
			"project",
			projectId,
			databaseId,
			dedicatedDatabaseSourceKey(source)
		],
		queryFn: () => fetchDedicatedDatabaseReplicas(projectId, databaseId, source),
		enabled: !!projectId && !!databaseId && enabled,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchInterval,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useDedicatedDatabaseReplicas(projectId, databaseId, source, enabled = true, refetchInterval) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(dedicatedDatabaseReplicasQueryOptions(projectId, databaseId, source, enabled, refetchInterval));
	return {
		replicas: data ?? null,
		members: data?.members ?? [],
		isLoading,
		isFetching,
		error,
		refetch
	};
}
async function createDedicatedDatabaseFailover(projectId, databaseId, source, targetReplicaId) {
	return dedicatedDatabaseService(sdk.forProject(projectId), source).createFailover({
		databaseId,
		targetReplicaId
	});
}
function useCreateDedicatedDatabaseFailover(projectId, databaseId, source) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ targetReplicaId }) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return createDedicatedDatabaseFailover(projectId, databaseId, source, targetReplicaId);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			queryClient.setQueryData([
				"dedicated-database",
				"project",
				projectId,
				databaseId
			], database);
			await Promise.all([
				queryClient.invalidateQueries({ queryKey: [
					"dedicated-database-replicas",
					"project",
					projectId,
					databaseId
				] }),
				queryClient.invalidateQueries({ queryKey: [
					"postgres-database-replicas",
					"project",
					projectId,
					databaseId
				] }),
				queryClient.invalidateQueries({ queryKey: [
					"database",
					"project",
					projectId,
					databaseId
				] }),
				queryClient.invalidateQueries({ queryKey: [
					"dedicated-database",
					"project",
					projectId,
					databaseId
				] })
			]);
		}
	});
}
async function updateDedicatedDatabaseHa(projectId, databaseId, source, input) {
	const service = dedicatedDatabaseService(sdk.forProject(projectId), source);
	const updateHa = service.update.bind(service);
	if (source.type === "product") return updateHa({
		databaseId,
		...input.name != null && input.name !== "" ? { name: input.name } : {},
		...input.replicas != null ? { replicas: input.replicas } : {},
		...input.syncMode != null ? { syncMode: input.syncMode } : {}
	});
	const { name: _name, ...engineInput } = input;
	return updateHa({
		databaseId,
		...engineInput
	});
}
function useUpdateDedicatedDatabaseHa(projectId, databaseId, source) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (input) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updateDedicatedDatabaseHa(projectId, databaseId, source, input);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(postgresDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			queryClient.setQueryData([
				"dedicated-database",
				"project",
				projectId,
				databaseId
			], database);
			invalidateDatabaseModel(projectId, databaseId);
			await Promise.all([
				queryClient.invalidateQueries({ queryKey: [
					"database",
					"project",
					projectId,
					databaseId
				] }),
				queryClient.invalidateQueries({ queryKey: [
					"dedicated-database-replicas",
					"project",
					projectId,
					databaseId
				] }),
				queryClient.invalidateQueries({ queryKey: [
					"postgres-database-replicas",
					"project",
					projectId,
					databaseId
				] }),
				refetchProjectDatabaseLists(queryClient, projectId)
			]);
		}
	});
}
var POSTGRES_SOURCE = {
	type: "engine",
	engine: "postgresql"
};
function postgresDatabaseReplicasQueryOptions(projectId, databaseId, enabled = true, refetchInterval) {
	return dedicatedDatabaseReplicasQueryOptions(projectId, databaseId, POSTGRES_SOURCE, enabled, refetchInterval);
}
function statusValue(name) {
	return `(
    SELECT CAST(VARIABLE_VALUE AS UNSIGNED)
    FROM performance_schema.global_status
    WHERE VARIABLE_NAME = '${name}'
    LIMIT 1
  )`;
}
const MYSQL_METRICS_SNAPSHOT_SQL = prefixMysqlSqlComment(`
SELECT
  ${statusValue("Threads_connected")} AS active_connections,
  ${statusValue("Com_commit")} AS xact_commit,
  ${statusValue("Com_rollback")} AS xact_rollback,
  ${statusValue("Innodb_buffer_pool_reads")} AS blks_read,
  ${statusValue("Innodb_buffer_pool_read_requests")} AS blks_hit,
  ${statusValue("Innodb_rows_read")} AS tup_returned,
  ${statusValue("Innodb_rows_read")} AS tup_fetched,
  ${statusValue("Innodb_rows_inserted")} AS tup_inserted,
  ${statusValue("Innodb_rows_updated")} AS tup_updated,
  ${statusValue("Innodb_rows_deleted")} AS tup_deleted,
  0 AS conflicts,
  ${statusValue("Innodb_deadlocks")} AS deadlocks,
  ${statusValue("Created_tmp_disk_tables")} AS temp_bytes,
  (
    SELECT COALESCE(SUM(DATA_LENGTH + INDEX_LENGTH), 0)
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = DATABASE()
  ) AS database_size_bytes,
  (
    SELECT COUNT(*)
    FROM information_schema.PROCESSLIST
  ) AS total_connections,
  (
    SELECT COUNT(*)
    FROM information_schema.PROCESSLIST
    WHERE COMMAND NOT IN ('Sleep', 'Daemon', 'Binlog Dump', 'Binlog Dump GTID')
  ) AS active_queries,
  0 AS idle_in_transaction,
  (
    SELECT COUNT(*)
    FROM information_schema.PROCESSLIST
    WHERE COMMAND NOT IN ('Sleep', 'Daemon', 'Binlog Dump', 'Binlog Dump GTID')
      AND TIME >= 10
  ) AS long_running_queries,
  NULL AS server_started_at,
  ${statusValue("Uptime")} AS uptime_seconds
`.trim(), "Load metrics snapshot");
const MYSQL_METRICS_CONNECTION_STATES_SQL = prefixMysqlSqlComment(`
SELECT
  COALESCE(NULLIF(COMMAND, ''), 'unknown') AS state,
  COUNT(*) AS count
FROM information_schema.PROCESSLIST
GROUP BY COMMAND
ORDER BY count DESC
`.trim(), "List connection states");
const MYSQL_METRICS_CONNECTION_APPS_SQL = prefixMysqlSqlComment(`
SELECT
  COALESCE(NULLIF(USER, ''), 'unknown') AS application_name,
  COUNT(*) AS count
FROM information_schema.PROCESSLIST
GROUP BY USER
ORDER BY count DESC
LIMIT 12
`.trim(), "List connection apps");
const MYSQL_ACTIVE_CONNECTIONS_SQL = prefixMysqlSqlComment(`
SELECT
  ID AS pid,
  'client backend' AS backend_type,
  TRUE AS is_client_backend,
  USER AS username,
  DB AS \`database\`,
  NULL AS application_name,
  SUBSTRING_INDEX(HOST, ':', 1) AS client_host,
  CASE
    WHEN HOST LIKE '%:%' THEN CAST(SUBSTRING_INDEX(HOST, ':', -1) AS UNSIGNED)
    ELSE NULL
  END AS client_port,
  COMMAND AS state,
  NULL AS wait_event_type,
  STATE AS wait_event,
  NULL AS backend_start,
  NULL AS query_start,
  NULL AS state_change,
  INFO AS query
FROM information_schema.PROCESSLIST
ORDER BY
  CASE COMMAND
    WHEN 'Query' THEN 0
    WHEN 'Execute' THEN 0
    WHEN 'Sleep' THEN 2
    ELSE 1
  END,
  TIME DESC,
  ID ASC
`.trim(), "List active connections");
const MYSQL_METRICS_TABLE_ACTIVITY_SQL = prefixMysqlSqlComment(`
SELECT
  TABLE_SCHEMA AS schemaname,
  TABLE_NAME AS table_name,
  (COALESCE(DATA_LENGTH, 0) + COALESCE(INDEX_LENGTH, 0)) AS total_bytes,
  COALESCE(TABLE_ROWS, 0) AS live_tuples,
  0 AS dead_tuples,
  0 AS seq_scans,
  0 AS idx_scans,
  0 AS write_operations,
  0 AS read_operations
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = DATABASE()
  AND TABLE_TYPE = 'BASE TABLE'
ORDER BY total_bytes DESC
LIMIT 12
`.trim(), "List table activity");
const MYSQL_LONG_RUNNING_QUERY_THRESHOLD_MS = 1e4;
function toFiniteNumber(value, fallback = 0) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	const parsed = Number.parseFloat(String(value ?? fallback));
	return Number.isFinite(parsed) ? parsed : fallback;
}
function parseServerStartedAt(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string" && value.trim()) {
		const parsed = Date.parse(value);
		return Number.isFinite(parsed) ? parsed : null;
	}
	return null;
}
function formatMysqlUptime(seconds) {
	if (!Number.isFinite(seconds) || seconds <= 0) return "-";
	const days = Math.floor(seconds / 86400);
	const hours = Math.floor(seconds % 86400 / 3600);
	const minutes = Math.floor(seconds % 3600 / 60);
	if (days > 0) return hours > 0 ? `${days}d ${hours}h` : `${days}d`;
	if (hours > 0) return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
	if (minutes > 0) return `${minutes}m`;
	return "< 1m";
}
function parseMysqlMetricsSnapshot(execution, timestamp = Date.now()) {
	const row = executionResultRows(execution)[0];
	if (!row) return null;
	const blksRead = toFiniteNumber(row.blks_read);
	const blksHit = toFiniteNumber(row.blks_hit);
	const blockTotal = blksRead + blksHit;
	return {
		timestamp,
		activeConnections: toFiniteNumber(row.active_connections),
		totalConnections: toFiniteNumber(row.total_connections),
		activeQueries: toFiniteNumber(row.active_queries),
		idleInTransaction: toFiniteNumber(row.idle_in_transaction),
		longRunningQueries: toFiniteNumber(row.long_running_queries),
		xactCommit: toFiniteNumber(row.xact_commit),
		xactRollback: toFiniteNumber(row.xact_rollback),
		blksRead,
		blksHit,
		tupReturned: toFiniteNumber(row.tup_returned),
		tupFetched: toFiniteNumber(row.tup_fetched),
		tupInserted: toFiniteNumber(row.tup_inserted),
		tupUpdated: toFiniteNumber(row.tup_updated),
		tupDeleted: toFiniteNumber(row.tup_deleted),
		conflicts: toFiniteNumber(row.conflicts),
		deadlocks: toFiniteNumber(row.deadlocks),
		tempBytes: toFiniteNumber(row.temp_bytes),
		databaseSizeBytes: toFiniteNumber(row.database_size_bytes),
		cacheHitRatio: blockTotal > 0 ? blksHit / blockTotal * 100 : 100,
		uptimeSeconds: toFiniteNumber(row.uptime_seconds),
		serverStartedAt: parseServerStartedAt(row.server_started_at)
	};
}
function parseMysqlConnectionStates(execution) {
	return executionResultRows(execution).map((row) => ({
		state: String(row.state ?? "unknown"),
		count: toFiniteNumber(row.count)
	}));
}
function parseMysqlConnectionApps(execution) {
	return executionResultRows(execution).map((row) => ({
		applicationName: String(row.application_name ?? "unknown"),
		count: toFiniteNumber(row.count)
	}));
}
function parseMysqlBoolean(value) {
	if (value === true) return true;
	if (value === false || value == null) return false;
	if (typeof value === "number") return value !== 0;
	const normalized = String(value).trim().toLowerCase();
	return normalized === "t" || normalized === "true" || normalized === "1" || normalized === "yes";
}
function readMysqlMetricsRowString(row, ...keys) {
	for (const key of keys) {
		const value = row[key];
		if (value == null || value === "") continue;
		const str = String(value).trim();
		if (str) return str;
	}
	return null;
}
function readMysqlMetricsRowBoolean(row, ...keys) {
	for (const key of keys) {
		if (!(key in row)) continue;
		return parseMysqlBoolean(row[key]);
	}
	return null;
}
var CLIENT_SESSION_STATES = new Set([
	"active",
	"idle",
	"idle in transaction",
	"idle in transaction (aborted)",
	"fastpath function call",
	"disabled"
]);
function normalizeMysqlBackendType(backendType) {
	if (!backendType?.trim()) return null;
	return backendType.trim().toLowerCase();
}
function inferMysqlClientBackend(row) {
	const normalizedType = normalizeMysqlBackendType(row.backendType);
	if (normalizedType === "client backend") return true;
	if (normalizedType) return false;
	const state = row.state?.trim().toLowerCase() ?? "";
	if (CLIENT_SESSION_STATES.has(state)) return true;
	if (row.username?.trim() || row.database?.trim()) return true;
	return false;
}
function parseMysqlActiveConnections(execution) {
	return executionResultRows(execution).map((row) => {
		const clientPortRaw = row.client_port ?? row.clientPort;
		const clientPort = clientPortRaw == null || clientPortRaw === "" ? null : toFiniteNumber(clientPortRaw, NaN);
		const backendType = readMysqlMetricsRowString(row, "backend_type", "backendType");
		const username = readMysqlMetricsRowString(row, "username", "usename");
		const database = readMysqlMetricsRowString(row, "database", "datname");
		const state = readMysqlMetricsRowString(row, "state");
		const isClientBackend = readMysqlMetricsRowBoolean(row, "is_client_backend", "isClientBackend") ?? inferMysqlClientBackend({
			backendType,
			state,
			username,
			database
		});
		return {
			pid: toFiniteNumber(row.pid ?? row.Pid),
			isClientBackend,
			backendType,
			username,
			database,
			applicationName: readMysqlMetricsRowString(row, "application_name", "applicationName"),
			clientHost: readMysqlMetricsRowString(row, "client_host", "clientHost") ?? "",
			clientPort: Number.isFinite(clientPort) ? clientPort : null,
			state,
			waitEventType: readMysqlMetricsRowString(row, "wait_event_type", "waitEventType"),
			waitEvent: readMysqlMetricsRowString(row, "wait_event", "waitEvent"),
			backendStart: readMysqlMetricsRowString(row, "backend_start", "backendStart"),
			queryStart: readMysqlMetricsRowString(row, "query_start", "queryStart"),
			stateChange: readMysqlMetricsRowString(row, "state_change", "stateChange"),
			query: readMysqlMetricsRowString(row, "query")
		};
	});
}
const MYSQL_CLIENT_BACKEND_TYPE = "client backend";
function isMysqlClientBackend(connection) {
	if (typeof connection.isClientBackend === "boolean") return connection.isClientBackend;
	return inferMysqlClientBackend({
		backendType: connection.backendType ?? null,
		state: connection.state ?? null,
		username: connection.username ?? null,
		database: connection.database ?? null
	});
}
function matchesMysqlConnectionBackendScope(connection, scope) {
	const isClient = isMysqlClientBackend(connection);
	return scope === "clients" ? isClient : !isClient;
}
function formatMysqlBackendTypeLabel(backendType) {
	const normalized = normalizeMysqlBackendType(backendType);
	if (!normalized) return "Unknown";
	switch (normalized) {
		case MYSQL_CLIENT_BACKEND_TYPE: return "Client";
		case "background worker": return "Background";
		case "autovacuum worker": return "Autovacuum";
		case "parallel worker": return "Parallel";
		case "logical replication launcher": return "Replication";
		default: return normalized.split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
	}
}
function backendTypeBadgeVariant(backendType) {
	if (normalizeMysqlBackendType(backendType) === "client backend") return "success";
	if (normalizeMysqlBackendType(backendType) === "autovacuum worker") return "warning";
	return "info";
}
function formatMysqlConnectionUsername(username, backendType) {
	if (username?.trim()) return username.trim();
	if (!isMysqlClientBackend({ backendType })) return "System";
	return "-";
}
function formatMysqlConnectionDatabase(database) {
	return database?.trim() || "-";
}
function formatMysqlApplicationName(applicationName) {
	return applicationName?.trim() || "-";
}
function formatMysqlConnectionStateLabel(state, backendType) {
	if (state?.trim()) return formatConnectionStateLabel(state.trim());
	if (!isMysqlClientBackend({ backendType })) return "System";
	return "-";
}
function formatMysqlClientAddress(clientHost, clientPort) {
	if (!clientHost) return "Local";
	return clientPort != null ? `${clientHost}:${clientPort}` : clientHost;
}
function connectionStateBadgeVariant(state, backendType = null) {
	if (!state?.trim()) return isMysqlClientBackend({ backendType }) ? "info" : "info";
	switch (state.toLowerCase()) {
		case "active": return "success";
		case "idle": return "info";
		case "idle in transaction": return "warning";
		case "idle in transaction (aborted)": return "error";
		default: return "info";
	}
}
function parseMysqlTableActivity(execution) {
	return executionResultRows(execution).map((row) => ({
		schema: String(row.schemaname ?? ""),
		tableName: String(row.table_name ?? ""),
		totalBytes: toFiniteNumber(row.total_bytes),
		liveTuples: toFiniteNumber(row.live_tuples),
		deadTuples: toFiniteNumber(row.dead_tuples),
		seqScans: toFiniteNumber(row.seq_scans),
		idxScans: toFiniteNumber(row.idx_scans),
		writeOperations: toFiniteNumber(row.write_operations),
		readOperations: toFiniteNumber(row.read_operations)
	}));
}
function formatConnectionStateLabel(state) {
	switch (state) {
		case "active": return "Active";
		case "idle": return "Idle";
		case "idle in transaction": return "Idle in transaction";
		case "idle in transaction (aborted)": return "Idle in transaction (aborted)";
		case "fastpath function call": return "Fastpath function call";
		case "disabled": return "Disabled";
		default: return state.charAt(0).toUpperCase() + state.slice(1);
	}
}
function matchesMysqlConnectionStateFilter(connection, filter) {
	if (filter === "all") return true;
	if (filter === "long-running") return isLongRunningConnection(connection);
	if (filter === "idle in transaction") {
		const state = connection.state?.toLowerCase() ?? "";
		return state === "idle in transaction" || state === "idle in transaction (aborted)";
	}
	return connection.state?.toLowerCase() === filter;
}
function isLongRunningConnection(connection, thresholdMs = MYSQL_LONG_RUNNING_QUERY_THRESHOLD_MS) {
	if (!isMysqlClientBackend(connection)) return false;
	if (connection.state?.toLowerCase() !== "active") return false;
	if (!connection.queryStart) return false;
	const start = Date.parse(connection.queryStart);
	if (!Number.isFinite(start)) return false;
	return Date.now() - start >= thresholdMs;
}
function formatMysqlDurationSince(isoDate) {
	if (!isoDate) return "-";
	const parsed = Date.parse(isoDate);
	if (!Number.isFinite(parsed)) return "-";
	const totalSeconds = Math.max(0, Math.floor((Date.now() - parsed) / 1e3));
	if (totalSeconds < 60) return `${totalSeconds}s`;
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	if (minutes < 60) return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}
function formatMysqlWaitEvent(waitEventType, waitEvent) {
	if (!waitEventType && !waitEvent) return "-";
	if (waitEventType && waitEvent) return `${waitEventType} / ${waitEvent}`;
	return waitEventType ?? waitEvent ?? "-";
}
function serializeMysqlActiveConnectionJson(connection) {
	return JSON.stringify({
		pid: connection.pid,
		backendType: connection.backendType,
		username: connection.username,
		database: connection.database,
		applicationName: connection.applicationName,
		clientHost: connection.clientHost,
		clientPort: connection.clientPort,
		clientAddress: formatMysqlClientAddress(connection.clientHost, connection.clientPort),
		state: connection.state,
		waitEventType: connection.waitEventType,
		waitEvent: connection.waitEvent,
		backendStart: connection.backendStart,
		queryStart: connection.queryStart,
		stateChange: connection.stateChange,
		query: connection.query,
		longRunning: isLongRunningConnection(connection)
	}, null, 2);
}
const MYSQL_CONSOLE_RESULT_COLUMN = "__console_result_rows";
var UNSUPPORTED_TYPE_PATTERN = /^<unsupported type ([^>]+)>$/i;
var READ_QUERY_PATTERN = /^(with\b|select\b)/i;
var MUTATION_QUERY_PATTERN = /^(insert\b|update\b|delete\b|create\b|alter\b|drop\b|truncate\b|call\b|do\b|copy\b|grant\b|revoke\b|comment\b|begin\b|commit\b|rollback\b|set\b|vacuum\b|analyze\b|explain\b)/i;
function stripTrailingStatementSemicolon(sql) {
	return sql.replace(/;\s*$/, "").trim();
}
function isMysqlReadQuery(sql) {
	const trimmed = stripTrailingStatementSemicolon(stripLeadingMysqlSqlComments(sql.trim()));
	if (!trimmed) return false;
	if (MUTATION_QUERY_PATTERN.test(trimmed)) return false;
	if (/\bselect\s+into\b/i.test(trimmed)) return false;
	return READ_QUERY_PATTERN.test(trimmed);
}
function buildMysqlJsonObjectExpr(columnNames) {
	const seen = /* @__PURE__ */ new Map();
	const parts = [];
	for (const name of columnNames) {
		const baseKey = name.trim() || "column";
		const count = seen.get(baseKey) ?? 0;
		seen.set(baseKey, count + 1);
		const jsonKey = count === 0 ? baseKey : `${baseKey}_${count}`;
		parts.push(quoteMysqlStringLiteral(jsonKey), quoteMysqlIdentifier(name));
	}
	return `JSON_OBJECT(${parts.join(", ")})`;
}
function wrapMysqlSqlForDisplay(sql, columnNames) {
	const trimmed = sql.trim();
	const { leadingComments, sqlWithoutLeadingComments } = peelLeadingMysqlSqlComments(trimmed);
	const innerSql = stripTrailingStatementSemicolon(sqlWithoutLeadingComments);
	if (!isMysqlReadQuery(sqlWithoutLeadingComments)) return trimmed;
	if (!columnNames?.length) return trimmed;
	const column = quoteMysqlIdentifier(MYSQL_CONSOLE_RESULT_COLUMN);
	const wrapped = `SELECT COALESCE(JSON_ARRAYAGG(${buildMysqlJsonObjectExpr(columnNames)}), JSON_ARRAY()) AS ${column} FROM (${innerSql}) AS __console_subq`;
	if (!leadingComments) return wrapped;
	return `${leadingComments}\n${wrapped}`;
}
function mysqlExecutionNeedsJsonWrap(execution) {
	const rows = executionResultRows(execution);
	for (const row of rows) for (const value of Object.values(row)) {
		if (typeof value === "string" && UNSUPPORTED_TYPE_PATTERN.test(value)) return true;
		if (isMysqlDriverByteArray(value) && value.length > 0) return true;
	}
	return false;
}
function getMysqlExecutionColumnNames(execution) {
	const fromMeta = (execution.columns ?? []).map((column) => column.name).filter((name) => typeof name === "string" && name.length > 0);
	if (fromMeta.length > 0) return fromMeta;
	const first = executionResultRows(execution)[0];
	return first ? Object.keys(first) : [];
}
function parseJsonArray(value) {
	if (Array.isArray(value)) return value;
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	if (!trimmed) return [];
	try {
		const parsed = JSON.parse(trimmed);
		return Array.isArray(parsed) ? parsed : null;
	} catch {
		return null;
	}
}
function isPlainObject$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function readTaggedField(object, ...keys) {
	for (const key of keys) if (key in object) return object[key];
}
function decodeBase64ToUtf8(value) {
	if (typeof atob === "function") {
		const binary = atob(value);
		const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
		return new TextDecoder().decode(bytes);
	}
	return value;
}
function formatByteaValue(value) {
	if (typeof value === "string") {
		if (value.startsWith("\\x")) {
			const hex = value.slice(2);
			if (hex.length % 2 === 0 && /^[0-9a-f]+$/i.test(hex)) {
				const bytes = Uint8Array.from(hex.match(/.{1,2}/g) ?? [], (pair) => Number.parseInt(pair, 16));
				const decoded = new TextDecoder().decode(bytes);
				if (decoded && /^[\x20-\x7E\s]+$/.test(decoded)) return decoded;
				return `\\x${hex}`;
			}
		}
		return value;
	}
	if (Array.isArray(value)) {
		if (isMysqlDriverByteArray(value)) {
			const decoded = decodeMysqlDriverByteArray(value);
			if (decoded !== null) return decoded;
		}
		return `[${value.map((entry) => formatMysqlExecutionCellValue(entry)).join(", ")}]`;
	}
	return String(value);
}
function formatMysqlExecutionCellValue(value) {
	if (value === null || value === void 0) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	if (typeof value === "bigint") return value.toString();
	if (Array.isArray(value)) {
		if (isMysqlDriverByteArray(value)) {
			const decoded = decodeMysqlDriverByteArray(value);
			if (decoded !== null) return decoded;
		}
		return `[${value.map((entry) => formatMysqlExecutionCellValue(entry)).join(", ")}]`;
	}
	if (isPlainObject$1(value) && value.type === "Buffer" && isMysqlDriverByteArray(value.data)) return formatMysqlExecutionCellValue(value.data);
	if (!isPlainObject$1(value)) return String(value);
	const taggedType = String(readTaggedField(value, "type", "Type", "$type", "pgType", "pg_type") ?? "").toLowerCase();
	const taggedValue = readTaggedField(value, "value", "Value", "$value", "text", "Text", "string", "String");
	if (taggedType.includes("bytea") || taggedType === "bytes") {
		const bytes = readTaggedField(value, "bytes", "Bytes", "data", "Data");
		if (typeof bytes === "string") {
			if (value.encoding === "base64" || value.Encoding === "base64") return decodeBase64ToUtf8(bytes);
			return formatByteaValue(bytes);
		}
		if (taggedValue !== void 0) return formatByteaValue(taggedValue);
	}
	if (taggedType.includes("numeric") || taggedType.includes("decimal") || taggedType.includes("money") || taggedType.includes("int") || taggedType.includes("float") || taggedType.includes("double") || taggedType === "number") {
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("timestamp") || taggedType.includes("date") || taggedType.includes("time") || taggedType.includes("interval")) {
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("bool")) {
		if (typeof taggedValue === "boolean") return String(taggedValue);
		if (taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	}
	if (taggedType.includes("uuid") && taggedValue !== void 0 && taggedValue !== null) return String(taggedValue);
	if (taggedType.includes("json") && taggedValue !== void 0) try {
		return typeof taggedValue === "string" ? taggedValue : JSON.stringify(taggedValue);
	} catch {
		return String(taggedValue);
	}
	if (taggedValue !== void 0) return formatMysqlExecutionCellValue(taggedValue);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
function normalizeMysqlExecutionCellValue(value) {
	if (value === null || value === void 0) return null;
	if (typeof value === "string") {
		if (UNSUPPORTED_TYPE_PATTERN.test(value)) return value;
		return value;
	}
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return value;
	if (Array.isArray(value)) {
		if (isMysqlDriverByteArray(value)) {
			const decoded = decodeMysqlDriverByteArray(value);
			if (decoded !== null) return decoded;
		}
		return value.map((entry) => normalizeMysqlExecutionCellValue(entry));
	}
	if (isPlainObject$1(value) && value.type === "Buffer" && isMysqlDriverByteArray(value.data)) return normalizeMysqlExecutionCellValue(value.data);
	if (!isPlainObject$1(value)) return formatMysqlExecutionCellValue(value);
	const taggedType = String(readTaggedField(value, "type", "Type", "$type", "pgType", "pg_type") ?? "").toLowerCase();
	const taggedValue = readTaggedField(value, "value", "Value", "$value", "text", "Text", "string", "String");
	if (taggedValue !== void 0 && isMysqlTaggedScalarObject(value)) return normalizeMysqlExecutionCellValue(taggedValue);
	if (taggedType && taggedValue !== void 0) return normalizeMysqlExecutionCellValue(taggedValue);
	const normalizedEntries = Object.entries(value).map(([key, entry]) => [key, normalizeMysqlExecutionCellValue(entry)]);
	return Object.fromEntries(normalizedEntries);
}
var MYSQL_TAGGED_SCALAR_KEYS = new Set([
	"type",
	"Type",
	"$type",
	"pgType",
	"pg_type",
	"value",
	"Value",
	"$value",
	"text",
	"Text",
	"string",
	"String"
]);
function isMysqlTaggedScalarObject(value) {
	const keys = Object.keys(value);
	if (keys.length === 0 || keys.length > 3) return false;
	return keys.every((key) => MYSQL_TAGGED_SCALAR_KEYS.has(key));
}
function normalizeMysqlExecutionRow(row) {
	const normalized = {};
	for (const [key, value] of Object.entries(row)) normalized[key] = normalizeMysqlExecutionCellValue(value);
	return normalized;
}
function inferMysqlColumnType(value) {
	if (value === null || value === void 0) return "text";
	if (typeof value === "boolean") return "bool";
	if (typeof value === "number") return "float8";
	if (typeof value === "bigint") return "int8";
	if (typeof value === "string") return "text";
	if (Array.isArray(value)) return "json";
	if (typeof value === "object") return "json";
	return "text";
}
function deriveColumnsFromRows(rows, fallback) {
	const firstRow = rows[0];
	if (!firstRow) return fallback;
	return Object.keys(firstRow).map((name) => ({
		name,
		type: fallback.find((column) => column.name === name)?.type ?? inferMysqlColumnType(firstRow[name])
	}));
}
function unwrapWrappedMysqlExecution(execution) {
	const rows = executionResultRows(execution);
	if (rows.length !== 1) return null;
	const payload = rows[0][MYSQL_CONSOLE_RESULT_COLUMN];
	if (payload === void 0) return null;
	const parsedRows = parseJsonArray(payload);
	if (!parsedRows) return null;
	const normalizedRows = parsedRows.filter(isPlainObject$1).map((row) => normalizeMysqlExecutionRow(row));
	const columns = execution.columns?.length === 1 && execution.columns[0]?.name === "__console_result_rows" ? deriveColumnsFromRows(normalizedRows, execution.columns) : deriveColumnsFromRows(normalizedRows, execution.columns ?? []);
	return {
		...execution,
		rows: normalizedRows,
		columns,
		rowCount: normalizedRows.length
	};
}
function normalizeMysqlExecutionResult(execution) {
	const unwrapped = unwrapWrappedMysqlExecution(execution);
	if (unwrapped) return unwrapped;
	const rows = executionResultRows(execution).map((row) => normalizeMysqlExecutionRow(row));
	return {
		...execution,
		rows,
		columns: deriveColumnsFromRows(rows, execution.columns ?? []),
		rowCount: rows.length > 0 ? rows.length : execution.rowCount
	};
}
function prepareMysqlQueryForExplanation(sql) {
	const { leadingComments, sqlWithoutLeadingComments } = peelLeadingMysqlSqlComments(sql.trim());
	let text = sqlWithoutLeadingComments.trim();
	let analyze = false;
	const explainMatch = text.match(/^explain\s+/i);
	if (!explainMatch) return {
		query: leadingComments ? `${leadingComments}\n${text}`.trim() : text,
		analyze: false
	};
	text = text.slice(explainMatch[0].length).trimStart();
	if (/^analyze\b/i.test(text)) {
		analyze = true;
		text = text.replace(/^analyze\b/i, "").trimStart();
	}
	text = text.replace(/^format\s*=?\s*\w+\b/i, "").trimStart();
	const query = text.trim();
	return {
		query: leadingComments ? `${leadingComments}\n${query}`.trim() : query,
		analyze
	};
}
function buildMysqlExplainSql(query, analyze) {
	const prepared = prepareMysqlQueryForExplanation(query);
	if (analyze ?? prepared.analyze) return `EXPLAIN ANALYZE FORMAT=JSON ${prepared.query}`;
	return `EXPLAIN FORMAT=JSON ${prepared.query}`;
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parseExplainPlanValue(value) {
	if (Array.isArray(value)) return value.filter(isPlainObject);
	if (typeof value === "string") {
		const trimmed = value.trim();
		if (!trimmed) return [];
		try {
			return parseExplainPlanValue(JSON.parse(trimmed));
		} catch {
			return [];
		}
	}
	if (isPlainObject(value)) return [value];
	return [];
}
function parseExplainExecution(execution) {
	const rows = executionResultRows(execution);
	if (rows.length === 0) throw new Error("No query plan returned.");
	const firstRow = rows[0];
	const planColumnKey = Object.keys(firstRow).find((key) => {
		const lower = key.toLowerCase();
		return lower === "query plan" || lower === "explain" || lower === "json" || lower.includes("explain");
	});
	const planValue = planColumnKey ? firstRow[planColumnKey] : Object.values(firstRow)[0];
	const plan = parseExplainPlanValue(planValue);
	const raw = typeof planValue === "string" ? planValue : plan.length > 0 ? JSON.stringify(plan, null, 2) : formatMysqlExecutionCellValue(planValue);
	if (plan.length === 0 && !raw.trim()) throw new Error("No query plan returned.");
	return {
		plan,
		raw
	};
}
async function explainMysqlDatabaseQuery(projectId, databaseId, query, analyze) {
	return parseExplainExecution(normalizeMysqlExecutionResult(await sdk.forProject(projectId).mysql.createExecution({
		databaseId,
		sql: buildMysqlExplainSql(query, analyze)
	})));
}
function isMysqlTruthyFlag(value) {
	return value === true || value === "true" || value === "t";
}
function readMysqlPolicyField(row, ...keys) {
	for (const key of keys) if (key in row) return row[key];
	const lowerEntries = Object.entries(row).map(([entryKey, value]) => [entryKey.toLowerCase(), value]);
	for (const key of keys) {
		const match = lowerEntries.find(([entryKey]) => entryKey === key.toLowerCase());
		if (match) return match[1];
	}
}
function readMysqlPolicyText(value) {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value.trim();
	return String(value).trim();
}
function normalizeMysqlPolicyRoleName(role) {
	const trimmed = role.trim();
	const lower = trimmed.toLowerCase();
	if (lower === "public") return "public";
	if (lower === "current_user") return "CURRENT_USER";
	if (lower === "current_role") return "CURRENT_ROLE";
	return trimmed;
}
function parseMysqlPolicyRoles(roles) {
	if (roles === null || roles === void 0) return [];
	if (Array.isArray(roles)) return roles.map((role) => normalizeMysqlPolicyRoleName(String(role))).filter(Boolean);
	if (typeof roles !== "string" || !roles.trim()) return [];
	const trimmed = roles.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		const inner = trimmed.slice(1, -1).trim();
		if (!inner) return [];
		return inner.split(",").map((role) => normalizeMysqlPolicyRoleName(role.trim().replace(/^"(.*)"$/, "$1"))).filter(Boolean);
	}
	if (trimmed.startsWith("[") && trimmed.endsWith("]")) try {
		const parsed = JSON.parse(trimmed);
		if (Array.isArray(parsed)) return parsed.map((role) => normalizeMysqlPolicyRoleName(String(role))).filter(Boolean);
	} catch {}
	if (trimmed.includes(",")) return trimmed.split(",").map((role) => normalizeMysqlPolicyRoleName(role)).filter(Boolean);
	return [normalizeMysqlPolicyRoleName(trimmed)];
}
function normalizeMysqlTablePolicyRow(row) {
	const source = row;
	const parsedRoles = parseMysqlPolicyRoles(readMysqlPolicyField(source, "roles"));
	return {
		policyname: readMysqlPolicyText(readMysqlPolicyField(source, "policyname", "policy_name")),
		permissive: readMysqlPolicyText(readMysqlPolicyField(source, "permissive")),
		roles: parsedRoles.length > 0 ? parsedRoles : null,
		cmd: readMysqlPolicyText(readMysqlPolicyField(source, "cmd", "command")),
		qual: readMysqlPolicyText(readMysqlPolicyField(source, "qual", "using")) || null,
		with_check: readMysqlPolicyText(readMysqlPolicyField(source, "with_check", "withcheck", "with check")) || null
	};
}
function formatMysqlPolicyRoles(roles) {
	const parsed = parseMysqlPolicyRoles(roles);
	if (parsed.length === 0) return "PUBLIC";
	return parsed.join(", ");
}
function createDefaultMysqlPolicyFormState() {
	return {
		name: "",
		command: "ALL",
		permissive: "PERMISSIVE",
		roles: "",
		usingExpression: "",
		withCheckExpression: ""
	};
}
function parseMysqlPolicyFormRoles(rolesInput) {
	return parseMysqlPolicyRoles(rolesInput);
}
function formatMysqlPolicyFormRoles(roles) {
	return roles.join(", ");
}
function isMysqlPolicyPublicRole(role) {
	return role.trim().toLowerCase() === "public";
}
function addMysqlPolicyFormRole(selectedRoles, roleName) {
	const trimmed = roleName.trim();
	if (!trimmed) return [...selectedRoles];
	const normalized = normalizeMysqlPolicyRoleName(trimmed);
	if (isMysqlPolicyPublicRole(normalized)) return ["public"];
	const withoutPublic = selectedRoles.filter((role) => !isMysqlPolicyPublicRole(role));
	if (withoutPublic.some((role) => role.trim().toLowerCase() === normalized.toLowerCase())) return withoutPublic;
	return [...withoutPublic, normalized];
}
function removeMysqlPolicyFormRole(selectedRoles, roleName) {
	const key = roleName.trim().toLowerCase();
	return selectedRoles.filter((role) => role.trim().toLowerCase() !== key);
}
function mapMysqlPolicyRowToFormState(policy) {
	const normalized = normalizeMysqlTablePolicyRow(policy);
	const roles = parseMysqlPolicyRoles(normalized.roles);
	return {
		name: normalized.policyname,
		command: normalizeMysqlPolicyCommand(normalized.cmd),
		permissive: normalizeMysqlPolicyPermissive(normalized.permissive),
		roles: roles.length > 0 ? roles.join(", ") : "",
		usingExpression: normalized.qual ?? "",
		withCheckExpression: normalized.with_check ?? ""
	};
}
function normalizeMysqlPolicyPermissive(permissive) {
	return String(permissive ?? "PERMISSIVE").trim().toUpperCase() === "RESTRICTIVE" ? "RESTRICTIVE" : "PERMISSIVE";
}
function normalizeMysqlPolicyCommand(command) {
	const normalized = String(command ?? "ALL").trim().toUpperCase();
	if (normalized === "*" || normalized === "ALL") return "ALL";
	if (normalized === "SELECT" || normalized === "INSERT" || normalized === "UPDATE" || normalized === "DELETE") return normalized;
	return "ALL";
}
function buildMysqlTableRlsStatusSql(schema, table) {
	return prefixMysqlSqlComment(`
SELECT
  FALSE AS row_security_enabled,
  FALSE AS force_row_security
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}
  AND TABLE_NAME = ${quoteMysqlStringLiteral(table)}
LIMIT 1
`.trim(), "Load table RLS status (unsupported on MySQL)");
}
function buildMysqlTablePoliciesSql(schema, table) {
	return prefixMysqlSqlComment(`
SELECT
  NULL AS policyname,
  NULL AS permissive,
  NULL AS roles,
  NULL AS cmd,
  NULL AS qual,
  NULL AS with_check
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema)}
  AND TABLE_NAME = ${quoteMysqlStringLiteral(table)}
  AND FALSE
`.trim(), "List table policies (unsupported on MySQL)");
}
function buildMysqlEnableRlsSql(_tableId) {
	throw new Error("Row level security is not supported on MySQL.");
}
function buildMysqlDisableRlsSql(_tableId) {
	throw new Error("Row level security is not supported on MySQL.");
}
function buildMysqlForceRlsSql(_tableId) {
	throw new Error("Row level security is not supported on MySQL.");
}
function buildMysqlNoForceRlsSql(_tableId) {
	throw new Error("Row level security is not supported on MySQL.");
}
function buildMysqlCreatePolicySql(_tableId, _form) {
	throw new Error("Row level security policies are not supported on MySQL.");
}
function buildMysqlAlterPolicySql(_tableId, _policyName, _form) {
	throw new Error("Row level security policies are not supported on MySQL.");
}
function buildMysqlDropPolicySql(_tableId, _policyName) {
	throw new Error("Row level security policies are not supported on MySQL.");
}
function validateMysqlPolicyFormState(form, _options) {
	if (!form.name.trim()) return "Policy name is required";
	return null;
}
const MYSQL_ROLE_NAME_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;
var MYSQL_BUILTIN_PROTECTED_ROLES = new Set([
	"PUBLIC",
	"mysql",
	"rdsadmin",
	"rds_superuser",
	"cloudsqlsuperuser",
	"azure_superuser",
	"supabase_admin",
	"supabase_auth_admin",
	"supabase_storage_admin"
]);
function isMysqlRoleFlag(value) {
	if (typeof value === "number") return value !== 0;
	if (typeof value === "string") {
		const normalized = value.trim().toLowerCase();
		if ([
			"1",
			"y",
			"yes"
		].includes(normalized)) return true;
	}
	return isMysqlTruthyFlag(typeof value === "boolean" || typeof value === "string" || value == null ? value : void 0);
}
function isMysqlBuiltinRole(row) {
	if (MYSQL_BUILTIN_PROTECTED_ROLES.has(row.role_name)) return true;
	if (row.role_name === "root" || row.role_name === "mysql.sys") return true;
	if (row.role_name.startsWith("mysql.")) return true;
	return false;
}
function isMysqlProtectedRole(row) {
	if (isMysqlBuiltinRole(row)) return true;
	if (isMysqlRoleFlag(row.is_superuser)) return true;
	return false;
}
function canUpdateMysqlRole(row) {
	return !isMysqlBuiltinRole(row);
}
function parseMysqlRoleMembership(memberOf) {
	if (Array.isArray(memberOf)) return memberOf.map((role) => String(role).trim()).filter(Boolean);
	if (typeof memberOf !== "string" || !memberOf.trim()) return [];
	const trimmed = memberOf.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		const inner = trimmed.slice(1, -1).trim();
		if (!inner) return [];
		return inner.split(",").map((role) => role.trim().replace(/^"(.*)"$/, "$1")).filter(Boolean);
	}
	return [trimmed];
}
function formatMysqlRoleMembership(memberOf) {
	const parsed = parseMysqlRoleMembership(memberOf);
	if (parsed.length === 0) return "";
	return parsed.join(", ");
}
function formatMysqlRoleConnectionLimit(value) {
	if (value === null || value === void 0 || value === "") return null;
	const parsed = Number(value);
	if (!Number.isFinite(parsed)) return String(value);
	if (parsed === -1) return "Unlimited";
	return String(parsed);
}
function createDefaultMysqlRoleFormState() {
	return {
		roleName: "",
		password: "",
		canLogin: false,
		isSuperuser: false,
		canCreateRole: false,
		canCreateDb: false,
		canReplicate: false,
		inherit: true,
		bypassRls: false,
		unlimitedConnections: true,
		connectionLimit: "",
		noExpiry: true,
		validUntil: "",
		memberOf: []
	};
}
function formatValidUntilForInput(value) {
	if (!value || value === "infinity") return {
		noExpiry: true,
		validUntil: ""
	};
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return {
		noExpiry: true,
		validUntil: ""
	};
	return {
		noExpiry: false,
		validUntil: parsed.toISOString()
	};
}
function mapMysqlRoleRowToFormState(row) {
	const connectionLimit = formatMysqlRoleConnectionLimit(row.connection_limit);
	const expiry = formatValidUntilForInput(row.valid_until);
	return {
		roleName: row.role_name,
		password: "",
		canLogin: isMysqlRoleFlag(row.can_login),
		isSuperuser: isMysqlRoleFlag(row.is_superuser),
		canCreateRole: isMysqlRoleFlag(row.can_create_role),
		canCreateDb: isMysqlRoleFlag(row.can_create_db),
		canReplicate: isMysqlRoleFlag(row.can_replicate),
		inherit: isMysqlRoleFlag(row.inherit),
		bypassRls: isMysqlRoleFlag(row.bypass_rls),
		unlimitedConnections: connectionLimit === "Unlimited" || connectionLimit === null,
		connectionLimit: connectionLimit && connectionLimit !== "Unlimited" ? connectionLimit : "",
		noExpiry: expiry.noExpiry,
		validUntil: expiry.validUntil,
		memberOf: parseMysqlRoleMembership(row.member_of)
	};
}
function validateMysqlRoleFormState(formState, options) {
	const roleName = formState.roleName.trim();
	if (!options.isEdit) {
		if (!roleName) return "Role name is required";
		if (!MYSQL_ROLE_NAME_REGEX.test(roleName)) return "Role name must use letters, numbers, and underscores only.";
	}
	if (formState.canLogin && !options.isEdit && !formState.password.trim()) return "Password is required when login is enabled.";
	if (!formState.unlimitedConnections) {
		const limit = Number.parseInt(formState.connectionLimit.trim(), 10);
		if (!Number.isFinite(limit) || limit < 0) return "Connection limit must be a non-negative number.";
	}
	if (!formState.noExpiry && !formState.validUntil.trim()) return "Valid until is required when expiry is enabled.";
	return null;
}
function quoteMysqlUserAccount(userName, host = "%") {
	return `${quoteMysqlStringLiteral(userName)}@${quoteMysqlStringLiteral(host)}`;
}
function mysqlMaxUserConnectionsClause(formState) {
	if (formState.unlimitedConnections) return "WITH MAX_USER_CONNECTIONS 0";
	return `WITH MAX_USER_CONNECTIONS ${Number.parseInt(formState.connectionLimit.trim(), 10)}`;
}
function mysqlAccountLockClause(formState) {
	return formState.canLogin ? "ACCOUNT UNLOCK" : "ACCOUNT LOCK";
}
function buildMysqlRolePrivilegeStatements(account, formState) {
	const statements = [];
	if (formState.canCreateDb) statements.push(`GRANT CREATE ON *.* TO ${account}`);
	if (formState.canCreateRole) statements.push(`GRANT CREATE USER ON *.* TO ${account}`);
	if (formState.canReplicate) statements.push(`GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO ${account}`);
	if (formState.isSuperuser) statements.push(`GRANT ALL ON *.* TO ${account} WITH GRANT OPTION`);
	return statements;
}
function buildMysqlRoleMembershipStatements(account, previousMembers, nextMembers, inherit) {
	const statements = [];
	const previous = new Set(previousMembers);
	const next = new Set(nextMembers);
	for (const member of next) if (!previous.has(member)) statements.push(`GRANT ${quoteMysqlUserAccount(member)} TO ${account}`);
	for (const member of previous) if (!next.has(member)) statements.push(`REVOKE ${quoteMysqlUserAccount(member)} FROM ${account}`);
	if (next.size > 0) statements.push(inherit ? `ALTER USER ${account} DEFAULT ROLE ALL` : `ALTER USER ${account} DEFAULT ROLE NONE`);
	else if (previous.size > 0) statements.push(`ALTER USER ${account} DEFAULT ROLE NONE`);
	return statements;
}
function buildMysqlListRolesSql() {
	return prefixMysqlSqlComment(`
SELECT
  u.User AS role_name,
  MAX(IF(u.account_locked = 'N', 1, 0)) AS can_login,
  MAX(IF(u.Create_user_priv = 'Y', 1, 0)) AS can_create_role,
  MAX(IF(u.Create_priv = 'Y', 1, 0)) AS can_create_db,
  MAX(IF(u.Super_priv = 'Y', 1, 0)) AS is_superuser,
  MAX(IF(u.Repl_slave_priv = 'Y' OR u.Repl_client_priv = 'Y', 1, 0)) AS can_replicate,
  1 AS inherit,
  0 AS bypass_rls,
  CASE
    WHEN MAX(u.max_user_connections) = 0 THEN -1
    ELSE MAX(u.max_user_connections)
  END AS connection_limit,
  NULL AS valid_until,
  NULL AS member_of
FROM mysql.user u
WHERE u.User <> ''
  AND u.User NOT LIKE 'mysql.%'
GROUP BY u.User
ORDER BY u.User ASC
`.trim(), "List MySQL users");
}
function buildMysqlListRolesFallbackSql() {
	return prefixMysqlSqlComment(`
SELECT
  REPLACE(SUBSTRING_INDEX(GRANTEE, '@', 1), '''', '') AS role_name,
  1 AS can_login,
  MAX(PRIVILEGE_TYPE = 'CREATE USER') AS can_create_role,
  MAX(PRIVILEGE_TYPE = 'CREATE') AS can_create_db,
  MAX(PRIVILEGE_TYPE = 'SUPER') AS is_superuser,
  MAX(PRIVILEGE_TYPE IN ('REPLICATION SLAVE', 'REPLICATION CLIENT')) AS can_replicate,
  1 AS inherit,
  0 AS bypass_rls,
  NULL AS connection_limit,
  NULL AS valid_until,
  NULL AS member_of
FROM information_schema.USER_PRIVILEGES
GROUP BY GRANTEE
ORDER BY role_name ASC
`.trim(), "List MySQL users from information_schema");
}
function buildMysqlCreateRoleSql(formState) {
	const roleName = formState.roleName.trim();
	const password = formState.password.trim();
	const account = quoteMysqlUserAccount(roleName);
	return buildMysqlSingleRequestDdlSql([
		`CREATE USER ${account}${password ? ` IDENTIFIED BY ${quoteMysqlStringLiteral(password)}` : ""} ${mysqlMaxUserConnectionsClause(formState)} ${mysqlAccountLockClause(formState)}`,
		...buildMysqlRolePrivilegeStatements(account, formState),
		...buildMysqlRoleMembershipStatements(account, [], formState.memberOf, formState.inherit)
	], `Create MySQL user ${roleName}`);
}
function buildMysqlUpdateRoleSql(formState, previousMembers) {
	const roleName = formState.roleName.trim();
	const password = formState.password.trim();
	const account = quoteMysqlUserAccount(roleName);
	const statements = [`ALTER USER ${account} ${mysqlMaxUserConnectionsClause(formState)} ${mysqlAccountLockClause(formState)}`];
	if (password) statements.push(`ALTER USER ${account} IDENTIFIED BY ${quoteMysqlStringLiteral(password)}`);
	statements.push(...buildMysqlRolePrivilegeStatements(account, formState), ...buildMysqlRoleMembershipStatements(account, previousMembers, formState.memberOf, formState.inherit));
	return buildMysqlSingleRequestDdlSql(statements, `Update MySQL user ${roleName}`);
}
function buildMysqlDropRoleSql(roleName) {
	return prefixMysqlSqlComment(`DROP USER ${quoteMysqlUserAccount(roleName.trim())}`, `Drop MySQL user ${roleName}`);
}
function quoteMysqlRelationPair(schema, table) {
	return `(${quoteMysqlStringLiteral(schema)}, ${quoteMysqlStringLiteral(table)})`;
}
function buildMysqlVisualizerColumnsBatchSql(schema, tableNames) {
	const trimmedNames = tableNames.map((name) => name.trim()).filter(Boolean);
	if (trimmedNames.length === 0) return prefixMysqlSqlComment("SELECT NULL AS table_schema WHERE FALSE", "List visualizer columns (empty batch)");
	const schemaLit = quoteMysqlStringLiteral(schema.trim());
	return prefixMysqlSqlComment(`
SELECT
  c.TABLE_SCHEMA AS table_schema,
  c.TABLE_NAME AS table_name,
  t.TABLE_TYPE AS table_type,
  c.COLUMN_NAME AS column_name,
  c.DATA_TYPE AS data_type,
  COALESCE(c.COLUMN_TYPE, c.DATA_TYPE) AS udt_name,
  c.IS_NULLABLE AS is_nullable,
  c.ORDINAL_POSITION AS ordinal_position,
  CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_primary_key
FROM information_schema.COLUMNS c
JOIN information_schema.TABLES t
  ON t.TABLE_SCHEMA = c.TABLE_SCHEMA
  AND t.TABLE_NAME = c.TABLE_NAME
LEFT JOIN (
  SELECT kcu.TABLE_SCHEMA, kcu.TABLE_NAME, kcu.COLUMN_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    AND tc.TABLE_SCHEMA = ${schemaLit}
) pk
  ON pk.TABLE_SCHEMA = c.TABLE_SCHEMA
  AND pk.TABLE_NAME = c.TABLE_NAME
  AND pk.COLUMN_NAME = c.COLUMN_NAME
WHERE c.TABLE_SCHEMA = ${schemaLit}
  AND c.TABLE_NAME IN (${trimmedNames.map((name) => quoteMysqlStringLiteral(name)).join(", ")})
  AND t.TABLE_TYPE IN ('BASE TABLE', 'VIEW')
ORDER BY c.TABLE_NAME, c.ORDINAL_POSITION
`.trim(), "List visualizer columns batch");
}
function buildMysqlVisualizerExternalColumnsSql(relations) {
	const pairs = relations.map(({ schema, table }) => ({
		schema: schema.trim(),
		table: table.trim()
	})).filter(({ schema, table }) => schema && table);
	if (pairs.length === 0) return prefixMysqlSqlComment("SELECT NULL AS table_schema WHERE FALSE", "List visualizer external columns (empty)");
	return prefixMysqlSqlComment(`
SELECT
  c.TABLE_SCHEMA AS table_schema,
  c.TABLE_NAME AS table_name,
  t.TABLE_TYPE AS table_type,
  c.COLUMN_NAME AS column_name,
  c.DATA_TYPE AS data_type,
  COALESCE(c.COLUMN_TYPE, c.DATA_TYPE) AS udt_name,
  c.IS_NULLABLE AS is_nullable,
  c.ORDINAL_POSITION AS ordinal_position,
  CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN TRUE ELSE FALSE END AS is_primary_key
FROM information_schema.COLUMNS c
JOIN information_schema.TABLES t
  ON t.TABLE_SCHEMA = c.TABLE_SCHEMA
  AND t.TABLE_NAME = c.TABLE_NAME
LEFT JOIN (
  SELECT kcu.TABLE_SCHEMA, kcu.TABLE_NAME, kcu.COLUMN_NAME
  FROM information_schema.TABLE_CONSTRAINTS tc
  JOIN information_schema.KEY_COLUMN_USAGE kcu
    ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
    AND tc.TABLE_NAME = kcu.TABLE_NAME
  WHERE tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
) pk
  ON pk.TABLE_SCHEMA = c.TABLE_SCHEMA
  AND pk.TABLE_NAME = c.TABLE_NAME
  AND pk.COLUMN_NAME = c.COLUMN_NAME
WHERE (c.TABLE_SCHEMA, c.TABLE_NAME) IN (${pairs.map(({ schema, table }) => quoteMysqlRelationPair(schema, table)).join(", ")})
  AND t.TABLE_TYPE IN ('BASE TABLE', 'VIEW')
ORDER BY c.TABLE_SCHEMA, c.TABLE_NAME, c.ORDINAL_POSITION
`.trim(), "List visualizer external columns");
}
function buildMysqlVisualizerForeignKeysSql(schema) {
	return prefixMysqlSqlComment(`
SELECT
  kcu.CONSTRAINT_NAME AS constraint_name,
  kcu.TABLE_SCHEMA AS source_schema,
  kcu.TABLE_NAME AS source_table,
  kcu.COLUMN_NAME AS source_column,
  kcu.REFERENCED_TABLE_SCHEMA AS target_schema,
  kcu.REFERENCED_TABLE_NAME AS target_table,
  kcu.REFERENCED_COLUMN_NAME AS target_column
FROM information_schema.KEY_COLUMN_USAGE kcu
JOIN information_schema.TABLE_CONSTRAINTS tc
  ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
  AND tc.TABLE_SCHEMA = kcu.TABLE_SCHEMA
  AND tc.TABLE_NAME = kcu.TABLE_NAME
WHERE tc.CONSTRAINT_TYPE = 'FOREIGN KEY'
  AND kcu.TABLE_SCHEMA = ${quoteMysqlStringLiteral(schema.trim())}
  AND kcu.REFERENCED_TABLE_NAME IS NOT NULL
ORDER BY kcu.TABLE_NAME, kcu.CONSTRAINT_NAME, kcu.ORDINAL_POSITION
`.trim(), "List visualizer foreign keys");
}
function formatMysqlSqlLiteral(value) {
	if (value === null || value === void 0) return "NULL";
	if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
	if (typeof value === "number") {
		if (!Number.isFinite(value)) throw new Error("Invalid numeric value.");
		return String(value);
	}
	if (typeof value === "bigint") return String(value);
	if (typeof value === "object") return `CAST(${quoteMysqlStringLiteral(JSON.stringify(value))} AS JSON)`;
	return quoteMysqlStringLiteral(String(value));
}
const MYSQL_ROW_CTID_COLUMN = "__ctid__";
function qualifiedTable(schema, table) {
	return `${quoteMysqlIdentifier(schema)}.${quoteMysqlIdentifier(table)}`;
}
function getMysqlPrimaryKeyColumns(columns) {
	return columns.filter(isMysqlPrimaryKeyColumn);
}
function buildMysqlRowIdentityFromRow(row, columns) {
	const pkColumns = getMysqlPrimaryKeyColumns(columns);
	if (pkColumns.length > 0) {
		const primaryKeyValues = {};
		for (const column of pkColumns) primaryKeyValues[column.column_name] = row[column.column_name];
		return { primaryKeyValues };
	}
	return {};
}
function getMysqlRowKey(row, columns) {
	const identity = buildMysqlRowIdentityFromRow(row, columns);
	if (identity.primaryKeyValues) return JSON.stringify(identity.primaryKeyValues);
	return JSON.stringify(row);
}
function buildMysqlRowWhereClause(identity) {
	const conditions = [];
	if (identity.primaryKeyValues) for (const [column, value] of Object.entries(identity.primaryKeyValues)) if (value === null || value === void 0) conditions.push(`${quoteMysqlIdentifier(column)} IS NULL`);
	else conditions.push(`${quoteMysqlIdentifier(column)} = ${formatMysqlSqlLiteral(value)}`);
	if (conditions.length === 0) throw new Error("Cannot identify row for update or delete. MySQL row edits require a primary key.");
	return conditions.join(" AND ");
}
function appendWhereAndOrder(baseSql, options) {
	let sql = baseSql;
	if (options.whereClause?.trim()) sql += `\nWHERE ${options.whereClause.trim()}`;
	if (options.orderByClause?.trim()) sql += `\nORDER BY ${options.orderByClause.trim()}`;
	sql += `\nLIMIT ${Math.max(1, Math.floor(options.limit))}`;
	sql += `\nOFFSET ${Math.max(0, Math.floor(options.offset))}`;
	return sql;
}
function buildMysqlSelectRowsSql(tableId, options) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(appendWhereAndOrder(`SELECT * FROM ${qualifiedTable(schema, table)}`, options), "Select filtered rows");
}
function buildMysqlCountRowsSql(tableId, whereClause) {
	const { schema, table } = parseMysqlTableId(tableId);
	let sql = `SELECT COUNT(*) AS total FROM ${qualifiedTable(schema, table)}`;
	if (whereClause?.trim()) sql += `\nWHERE ${whereClause.trim()}`;
	return prefixMysqlSqlComment(sql, "Count filtered rows");
}
function buildMysqlUpdateRowSql(tableId, identity, changes) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = qualifiedTable(schema, table);
	const assignments = Object.entries(changes).map(([column, value]) => {
		if (value === null || value === void 0) return `${quoteMysqlIdentifier(column)} = NULL`;
		return `${quoteMysqlIdentifier(column)} = ${formatMysqlSqlLiteral(value)}`;
	});
	if (assignments.length === 0) throw new Error("No changes to update.");
	const whereClause = buildMysqlRowWhereClause(identity);
	return prefixMysqlSqlComment(`UPDATE ${qualified}\nSET ${assignments.join(", ")}\nWHERE ${whereClause}`, "Update table row");
}
function isMysqlSequenceBackedColumn(column) {
	if (column.serial_sequence?.trim()) return true;
	const identity = String(column.is_identity ?? "").toUpperCase();
	if (identity === "YES" || identity === "TRUE" || identity === "T") return true;
	const generation = String(column.identity_generation ?? "").toUpperCase();
	if (generation === "ALWAYS" || generation === "BY DEFAULT") return true;
	return (column.column_default?.toLowerCase() ?? "").includes("auto_increment");
}
function buildSyncMysqlSerialSequencesSql(_tableId, _columns) {
	return null;
}
function isMysqlDuplicatePrimaryKeyError(error) {
	const normalized = (getErrorMessage(error) ?? String(error)).toLowerCase();
	if (normalized.includes("duplicate entry") || normalized.includes("duplicate key")) return normalized.includes("primary") || normalized.includes("unique") || normalized.includes("1062");
	return false;
}
function buildMysqlInsertRowSql(tableId, values) {
	const { schema, table } = parseMysqlTableId(tableId);
	const qualified = qualifiedTable(schema, table);
	const entries = Object.entries(values).filter(([, value]) => value !== void 0);
	if (entries.length === 0) return prefixMysqlSqlComment(`INSERT INTO ${qualified} () VALUES ()`, "Insert table row");
	const columnNames = entries.map(([column]) => quoteMysqlIdentifier(column));
	const valueLiterals = entries.map(([, value]) => value === null ? "NULL" : formatMysqlSqlLiteral(value));
	return prefixMysqlSqlComment(`INSERT INTO ${qualified} (${columnNames.join(", ")})\nVALUES (${valueLiterals.join(", ")})`, "Insert table row");
}
function buildMysqlDeleteRowSql(tableId, identity) {
	const { schema, table } = parseMysqlTableId(tableId);
	return prefixMysqlSqlComment(`DELETE FROM ${qualifiedTable(schema, table)}\nWHERE ${buildMysqlRowWhereClause(identity)}`, "Delete table row");
}
function isMysqlEngine(engine) {
	return matchesNativeEngine(engine, "mysql");
}
async function fetchMysqlDatabaseFromList(projectId, databaseId) {
	return (await sdk.forProject(projectId).mysql.list({ queries: [Query.equal("$id", databaseId), Query.limit(1)] })).databases?.find((db) => db.$id === databaseId) ?? null;
}
async function fetchMysqlDatabase(projectId, databaseId) {
	if (!projectId || !databaseId) return null;
	try {
		const database = await sdk.forProject(projectId).mysql.get({ databaseId });
		if (database?.$id) return database;
	} catch {}
	try {
		return await fetchMysqlDatabaseFromList(projectId, databaseId);
	} catch {
		return null;
	}
}
async function executeMysqlDatabaseSql(projectId, databaseId, sql, timeoutSeconds) {
	const projectSdk = sdk.forProject(projectId);
	const run = (sqlToRun) => projectSdk.mysql.createExecution({
		databaseId,
		sql: sqlToRun,
		timeoutSeconds
	});
	const execute = async () => {
		const execution = await run(wrapMysqlSqlForDisplay(sql));
		if (isMysqlReadQuery(sql) && mysqlExecutionNeedsJsonWrap(execution)) {
			const columnNames = getMysqlExecutionColumnNames(execution);
			const wrappedSql = wrapMysqlSqlForDisplay(sql, columnNames);
			if (wrappedSql !== sql.trim() && columnNames.length > 0) return normalizeMysqlExecutionResult(await run(wrappedSql));
		}
		return normalizeMysqlExecutionResult(execution);
	};
	try {
		return await execute();
	} catch (error) {
		if (!isSqlApiDdlBlockedError(error)) throw error;
		await ensureConsoleSqlApiStatements(projectId, databaseId, "mysql").catch(() => {});
		return await execute();
	}
}
function parseMysqlCountTotal(execution, fallback = 0) {
	const totalRaw = executionResultRows(execution)[0]?.total;
	if (typeof totalRaw === "number" && Number.isFinite(totalRaw)) return totalRaw;
	const asString = coerceMysqlStringValue(totalRaw) ?? String(totalRaw ?? fallback);
	const parsed = Number.parseInt(asString, 10);
	return Number.isFinite(parsed) ? parsed : fallback;
}
async function fetchMysqlSchemasPage(projectId, databaseId, options) {
	const limit = options?.limit ?? 50;
	const page = options?.page ?? 0;
	const offset = page * limit;
	const search = options?.search?.trim() || void 0;
	const [dataExecution, countExecution] = await Promise.all([executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListSchemasSql({
		search,
		limit,
		offset
	})), executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListSchemasCountSql({ search }))]);
	const schemas = executionResultRows(dataExecution).map((row) => readMysqlRowString(row, "schema_name", "SCHEMA_NAME")).filter((name) => !!name);
	const total = parseMysqlCountTotal(countExecution, schemas.length);
	return {
		schemas,
		total,
		page,
		limit,
		hasMore: offset + schemas.length < total
	};
}
async function fetchMysqlTablesPage(projectId, databaseId, options) {
	const schema = coerceMysqlStringValue(options.schema) || void 0;
	const limit = options.limit ?? 50;
	const page = options.page ?? 0;
	const offset = page * limit;
	const search = options.search?.trim() || void 0;
	const [dataExecution, countExecution] = await Promise.all([executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListTablesSql({
		schema,
		search,
		limit,
		offset
	})), executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListTablesCountSql({
		schema,
		search
	}))]);
	const tables = executionResultRows(dataExecution).filter((row) => row.table_schema && row.table_name);
	const total = parseMysqlCountTotal(countExecution, tables.length);
	return {
		tables,
		total,
		page,
		limit,
		hasMore: offset + tables.length < total
	};
}
async function fetchFirstMysqlTable(projectId, databaseId) {
	return (await fetchMysqlTablesPage(projectId, databaseId, {
		limit: 1,
		page: 0
	})).tables[0] ?? null;
}
async function fetchMysqlTableAutocompleteColumns(projectId, databaseId, schema, table) {
	return executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableAutocompleteColumnsSql(schema, table))).filter((row) => row.table_schema && row.table_name && row.column_name);
}
async function fetchMysqlTableColumns(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	const columns = sortMysqlTableColumns(executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableColumnsSql(schema, table))).filter((row) => row.column_name));
	return {
		columns,
		total: columns.length
	};
}
async function fetchMysqlTableRowColumns(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	const rows = executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableColumnsForRowsSql(schema, table)));
	const relKind = rows[0]?.rel_kind ?? null;
	const columns = sortMysqlTableColumns(rows.filter((row) => row.column_name));
	return {
		columns,
		total: columns.length,
		exists: relKind != null,
		supportsRowCtid: mysqlRelationSupportsRowCtid(relKind)
	};
}
async function fetchMysqlTableIndexes(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	const indexes = sortMysqlTableIndexes(executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableIndexesSql(schema, table))).filter((row) => row.index_name));
	return {
		indexes,
		total: indexes.length
	};
}
async function fetchMysqlTableInfo(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	return executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableInfoSql(schema, table)))[0] ?? null;
}
async function fetchMysqlTableRls(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	const row = executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTableRlsStatusSql(schema, table)))[0];
	return {
		rowSecurityEnabled: isMysqlTruthyFlag(row?.row_security_enabled),
		forceRowSecurity: isMysqlTruthyFlag(row?.force_row_security)
	};
}
async function fetchMysqlTablePolicies(projectId, databaseId, tableId) {
	const { schema, table } = parseMysqlTableId(tableId);
	const policies = executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTablePoliciesSql(schema, table)));
	return {
		policies,
		total: policies.length
	};
}
async function fetchMysqlRoles(projectId, databaseId) {
	try {
		const roles = executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListRolesSql()));
		return {
			roles,
			total: roles.length
		};
	} catch {
		const roles = executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlListRolesFallbackSql()));
		return {
			roles,
			total: roles.length
		};
	}
}
function mapMysqlVisualizerColumnRow(row) {
	return {
		name: row.column_name,
		dataType: row.data_type,
		udtName: row.udt_name,
		required: row.is_nullable !== "YES",
		isPrimaryKey: row.is_primary_key === true || row.is_primary_key === "true"
	};
}
function groupMysqlVisualizerColumns(rows) {
	const grouped = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const key = mysqlTableId(row.table_schema, row.table_name);
		const columns = grouped.get(key) ?? [];
		columns.push(mapMysqlVisualizerColumnRow(row));
		grouped.set(key, columns);
	}
	return grouped;
}
async function fetchMysqlVisualizerColumnsBatch(projectId, databaseId, schema, tableNames) {
	if (!schema.trim() || tableNames.length === 0) return /* @__PURE__ */ new Map();
	return groupMysqlVisualizerColumns(executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlVisualizerColumnsBatchSql(schema, tableNames))));
}
async function fetchMysqlVisualizerExternalColumns(projectId, databaseId, relations) {
	if (relations.length === 0) return /* @__PURE__ */ new Map();
	return groupMysqlVisualizerColumns(executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlVisualizerExternalColumnsSql(relations))));
}
async function fetchMysqlVisualizerForeignKeys(projectId, databaseId, schema) {
	if (!schema.trim()) return [];
	return executionResultRows(await executeMysqlDatabaseSql(projectId, databaseId, buildMysqlVisualizerForeignKeysSql(schema))).filter((row) => row.source_schema && row.source_table && row.source_column && row.target_schema && row.target_table && row.target_column);
}
function mysqlVisualizerForeignKeysQueryOptions(projectId, databaseId, schema) {
	const normalizedSchema = schema?.trim() || void 0;
	return queryOptions({
		queryKey: [
			"mysql-visualizer",
			"foreign-keys",
			"project",
			projectId,
			databaseId,
			normalizedSchema
		],
		queryFn: () => fetchMysqlVisualizerForeignKeys(projectId, databaseId, normalizedSchema),
		enabled: !!projectId && !!databaseId && !!normalizedSchema,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && normalizedSchema ? 300 * 1e3 : 0
	});
}
async function resolveMysqlTableColumnsForRows(projectId, databaseId, tableId, tableColumns) {
	if (tableColumns) return {
		columns: tableColumns,
		total: tableColumns.length
	};
	return fetchMysqlTableRowColumns(projectId, databaseId, tableId);
}
function buildMysqlRowsWhereClause(params, columns) {
	return buildMysqlRowsListWhereClause(params?.filterKeys, params?.search, columns);
}
function buildMysqlRowsOrderClause(columns, sortBy, orderDirection = "asc", supportsRowCtid = true) {
	const direction = orderDirection === "desc" ? "DESC" : "ASC";
	const sortColumn = sortBy?.trim();
	if (sortColumn && columns.some((column) => column.column_name === sortColumn)) return `${quoteMysqlIdentifier(sortColumn)} ${direction}`;
	const pkColumns = columns.filter((column) => column.is_primary_key === true || column.is_primary_key === "true");
	if (pkColumns.length > 0) return pkColumns.map((column) => `${quoteMysqlIdentifier(column.column_name)} ${direction}`).join(", ");
	if (supportsRowCtid) return `${quoteMysqlIdentifier(MYSQL_ROW_CTID_COLUMN)} ${direction}`;
	const sortableColumns = columns.filter((column) => column.column_name !== MYSQL_ROW_CTID_COLUMN);
	if (sortableColumns.length === 0) return void 0;
	return sortableColumns.map((column) => `${quoteMysqlIdentifier(column.column_name)} ${direction}`).join(", ");
}
async function fetchMysqlTableRows(projectId, databaseId, tableId, page, limit, params, options) {
	const columnsResult = await resolveMysqlTableColumnsForRows(projectId, databaseId, tableId, options?.tableColumns);
	const supportsRowCtid = options?.supportsRowCtid !== false;
	const whereClause = buildMysqlRowsWhereClause(params, columnsResult.columns);
	const orderByClause = buildMysqlRowsOrderClause(columnsResult.columns, params?.orderBy, params?.orderDirection ?? "asc", supportsRowCtid);
	const offset = page * limit;
	const [dataExecution, countExecution] = await Promise.all([executeMysqlDatabaseSql(projectId, databaseId, buildMysqlSelectRowsSql(tableId, {
		whereClause,
		orderByClause,
		limit,
		offset,
		includeCtid: supportsRowCtid
	})), executeMysqlDatabaseSql(projectId, databaseId, buildMysqlCountRowsSql(tableId, whereClause))]);
	const rows = executionResultRows(dataExecution);
	return {
		rows,
		total: parseMysqlCountTotal(countExecution, rows.length),
		columns: dataExecution.columns ?? [],
		tableColumns: columnsResult.columns,
		durationMs: dataExecution.durationMs,
		truncated: dataExecution.truncated
	};
}
function mysqlDatabaseQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql-database",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlDatabase(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlTableAutocompleteColumnsQueryOptions(projectId, databaseId, schema, table) {
	const normalizedSchema = schema?.trim() ?? "";
	const normalizedTable = table?.trim() ?? "";
	return queryOptions({
		queryKey: [
			"mysql-autocomplete-columns",
			"project",
			projectId,
			databaseId,
			normalizedSchema,
			normalizedTable
		],
		queryFn: () => fetchMysqlTableAutocompleteColumns(projectId, databaseId, normalizedSchema, normalizedTable),
		enabled: !!projectId && !!databaseId && !!normalizedSchema && !!normalizedTable,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && normalizedSchema && normalizedTable ? 300 * 1e3 : 0
	});
}
async function fetchMysqlDatabaseCredentials(projectId, databaseId) {
	const database = await fetchMysqlDatabase(projectId, databaseId);
	if (!database) throw new Error("Database not found");
	return mapDedicatedDatabaseCredentials(database);
}
function mysqlDatabaseCredentialsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql-database-credentials",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlDatabaseCredentials(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
async function fetchMysqlDatabasePooler(projectId, databaseId) {
	try {
		return await sdk.forProject(projectId).mysql.getPooler({ databaseId });
	} catch {
		return null;
	}
}
function mysqlDatabasePoolerQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql-database-pooler",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlDatabasePooler(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
async function updateMysqlDatabase(projectId, input) {
	const { databaseId, ...params } = input;
	return sdk.forProject(projectId).mysql.update({
		databaseId,
		...params
	});
}
async function updateMysqlDatabaseMaintenance(projectId, databaseId, day, hourUtc) {
	return sdk.forProject(projectId).mysql.updateMaintenance({
		databaseId,
		day,
		hourUtc
	});
}
async function deleteMysqlDatabase(projectId, databaseId) {
	return sdk.forProject(projectId).mysql.delete({ databaseId });
}
async function resetMysqlDatabaseCredentials(projectId, databaseId) {
	return sdk.forProject(projectId).mysql.updateCredentials({ databaseId });
}
function useUpdateMysqlDatabase(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (input) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updateMysqlDatabase(projectId, {
				databaseId,
				...input
			});
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(mysqlDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			await refetchProjectDatabaseLists(queryClient, projectId);
		}
	});
}
function useUpdateMysqlDatabaseMaintenance(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ day, hourUtc }) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updateMysqlDatabaseMaintenance(projectId, databaseId, day, hourUtc);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(mysqlDatabaseQueryOptions(projectId, databaseId).queryKey, database);
		}
	});
}
function useResetMysqlDatabaseCredentials(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return resetMysqlDatabaseCredentials(projectId, databaseId);
		},
		onSuccess: async (database) => {
			if (!projectId || !databaseId) return;
			queryClient.setQueryData(mysqlDatabaseQueryOptions(projectId, databaseId).queryKey, database);
			queryClient.setQueryData(mysqlDatabaseCredentialsQueryOptions(projectId, databaseId).queryKey, mapDedicatedDatabaseCredentials(database));
			await queryClient.invalidateQueries({ queryKey: [
				"dedicated-databases",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteMysqlDatabase(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (databaseId) => {
			return deleteMysqlDatabase(projectId, databaseId);
		},
		onSuccess: async (_data, databaseId) => {
			if (!projectId) return;
			invalidateDatabaseModel(projectId, databaseId);
			queryClient.removeQueries({ queryKey: mysqlDatabaseQueryOptions(projectId, databaseId).queryKey });
			await refetchProjectDatabaseLists(queryClient, projectId);
		}
	});
}
function mysqlTableColumnsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-columns",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTableColumns(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlTableRowColumnsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-row-columns",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTableRowColumns(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlTableIndexesQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-indexes",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTableIndexes(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlTableInfoQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-info",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTableInfo(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlTableRlsQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-rls",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTableRls(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlTablePoliciesQueryOptions(projectId, databaseId, tableId) {
	return queryOptions({
		queryKey: [
			"mysql-table-policies",
			"project",
			projectId,
			databaseId,
			tableId
		],
		queryFn: () => fetchMysqlTablePolicies(projectId, databaseId, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
function mysqlRolesQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql-roles",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlRoles(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlTableRowsQueryOptions(projectId, databaseId, tableId, page = 0, limit = 25, params) {
	const filterKey = params?.filterKeys?.length ? JSON.stringify(params.filterKeys) : void 0;
	return queryOptions({
		queryKey: [
			"mysql-table-rows",
			"project",
			projectId,
			databaseId,
			tableId,
			page,
			limit,
			params?.search?.trim() || void 0,
			filterKey,
			params?.orderBy,
			params?.orderDirection
		],
		queryFn: async ({ client }) => {
			const rowColumns = await client.ensureQueryData(mysqlTableRowColumnsQueryOptions(projectId, databaseId, tableId));
			return fetchMysqlTableRows(projectId, databaseId, tableId, page, limit, params, {
				tableColumns: rowColumns.columns,
				supportsRowCtid: rowColumns.supportsRowCtid
			});
		},
		enabled: !!projectId && !!databaseId && !!tableId && tableId !== "-",
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && databaseId && tableId ? 300 * 1e3 : 0
	});
}
async function updateMysqlTableRow(projectId, databaseId, tableId, identity, changes) {
	return executeMysqlDatabaseSql(projectId, databaseId, buildMysqlUpdateRowSql(tableId, identity, changes));
}
async function createMysqlTableRow(projectId, databaseId, tableId, values) {
	const { columns } = await fetchMysqlTableRowColumns(projectId, databaseId, tableId);
	const filteredValues = filterMysqlRowCreateValues(values, columns);
	const sql = buildMysqlInsertRowSql(tableId, filteredValues);
	const omittedSequenceColumns = columns.filter((column) => isMysqlSequenceBackedColumn(column) && !Object.prototype.hasOwnProperty.call(filteredValues, column.column_name));
	const syncSql = omittedSequenceColumns.length > 0 ? buildSyncMysqlSerialSequencesSql(tableId, omittedSequenceColumns) : null;
	const runSync = async () => {
		if (!syncSql) return;
		await executeMysqlDatabaseSql(projectId, databaseId, syncSql);
	};
	await runSync();
	const runInsert = () => executeMysqlDatabaseSql(projectId, databaseId, sql);
	try {
		return await runInsert();
	} catch (error) {
		if (!syncSql || !isMysqlDuplicatePrimaryKeyError(error)) throw error;
		await runSync();
		return await runInsert();
	}
}
async function deleteMysqlTableRow(projectId, databaseId, tableId, identity) {
	return executeMysqlDatabaseSql(projectId, databaseId, buildMysqlDeleteRowSql(tableId, identity));
}
async function deleteMysqlTableRows(projectId, databaseId, tableId, identities) {
	await Promise.all(identities.map((identity) => deleteMysqlTableRow(projectId, databaseId, tableId, identity)));
}
async function commitMysqlRowEdits(projectId, databaseId, tableId, edits) {
	const grouped = groupMysqlEditsByRow(edits);
	for (const [, { identity, changes }] of grouped) await updateMysqlTableRow(projectId, databaseId, tableId, identity, changes);
}
function useUpdateMysqlTableRow(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (params) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return updateMysqlTableRow(projectId, databaseId, tableId, params.identity, params.changes);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useCreateMysqlTableRow(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (values) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return createMysqlTableRow(projectId, databaseId, tableId, values);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-columns",
				"project",
				projectId,
				databaseId,
				tableId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-row-columns",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useDeleteMysqlTableRows(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (identities) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return deleteMysqlTableRows(projectId, databaseId, tableId, identities);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useCommitMysqlRowEdits(projectId, databaseId, tableId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (edits) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return commitMysqlRowEdits(projectId, databaseId, tableId, edits);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"mysql-table-rows",
				"project",
				projectId,
				databaseId,
				tableId
			] });
		}
	});
}
function useMysqlDatabase(projectId, databaseId) {
	const queryClient = useQueryClient();
	const { data, isLoading, error, refetch, isFetching } = useQuery({
		...mysqlDatabaseQueryOptions(projectId, databaseId),
		refetchInterval: (query) => shouldPollDedicatedDatabaseStatus(query.state.data?.status) ? DEDICATED_DATABASE_STATUS_POLL_INTERVAL_MS : false
	});
	useEffect(() => {
		if (!projectId || !databaseId || !data?.status) return;
		const nextStatus = data.status;
		queryClient.setQueryData([
			"dedicated-databases",
			"project",
			projectId
		], (prev) => {
			if (!prev?.databases?.length) return prev;
			let changed = false;
			const databases = prev.databases.map((db) => {
				if (db.$id !== databaseId || db.status === nextStatus) return db;
				changed = true;
				return {
					...db,
					status: nextStatus
				};
			});
			return changed ? {
				...prev,
				databases
			} : prev;
		});
	}, [
		data?.status,
		databaseId,
		projectId,
		queryClient
	]);
	return {
		database: data ?? null,
		isLoading,
		error,
		refetch,
		isFetching
	};
}
function keepPreviousDataIfQueryPrefixMatches(previousData, previousQuery, queryKey, prefixLength) {
	if (!previousQuery) return void 0;
	for (let index = 0; index < prefixLength; index += 1) if (previousQuery.queryKey[index] !== queryKey[index]) return void 0;
	return previousData;
}
function mysqlSidebarSchemasInfiniteQueryOptions(projectId, databaseId, search) {
	const normalizedSearch = search.trim() || void 0;
	return infiniteQueryOptions({
		queryKey: [
			"mysql-schemas",
			"project",
			projectId,
			databaseId,
			"sidebar",
			normalizedSearch
		],
		queryFn: ({ pageParam }) => fetchMysqlSchemasPage(projectId, databaseId, {
			search: normalizedSearch,
			page: pageParam
		}),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.page + 1 : void 0,
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlSidebarTablesInfiniteQueryOptions(projectId, databaseId, schema, search) {
	const normalizedSchema = coerceMysqlStringValue(schema) ?? "";
	const normalizedSearch = search.trim() || void 0;
	return infiniteQueryOptions({
		queryKey: [
			"mysql-tables",
			"project",
			projectId,
			databaseId,
			"sidebar",
			normalizedSchema || null,
			normalizedSearch
		],
		queryFn: ({ pageParam }) => fetchMysqlTablesPage(projectId, databaseId, {
			schema: normalizedSchema || void 0,
			search: normalizedSearch,
			page: pageParam
		}),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.page + 1 : void 0,
		enabled: !!projectId && !!databaseId && !!normalizedSchema,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId && normalizedSchema ? 300 * 1e3 : 0
	});
}
function useMysqlSidebarSchemas(projectId, databaseId, search) {
	const sidebarQueryOptions = mysqlSidebarSchemasInfiniteQueryOptions(projectId, databaseId, search.trim());
	const { data, isLoading, isFetching, isFetchingNextPage, error, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
		...sidebarQueryOptions,
		placeholderData: (previousData, previousQuery) => keepPreviousDataIfQueryPrefixMatches(previousData, previousQuery, sidebarQueryOptions.queryKey, 5)
	});
	const schemas = useMemo(() => (data?.pages.flatMap((page) => page.schemas) ?? []).filter((schema) => typeof schema === "string" && schema.trim().length > 0), [data?.pages]);
	return {
		schemas,
		total: data?.pages[0]?.total ?? schemas.length,
		isLoading,
		isFetching,
		isFetchingNextPage,
		error,
		refetch,
		fetchNextPage,
		hasNextPage: hasNextPage ?? false
	};
}
function useMysqlSidebarTables(projectId, databaseId, schema, search) {
	const sidebarQueryOptions = mysqlSidebarTablesInfiniteQueryOptions(projectId, databaseId, schema, search.trim());
	const { data, isLoading, isFetching, isFetchingNextPage, error, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
		...sidebarQueryOptions,
		placeholderData: (previousData, previousQuery) => keepPreviousDataIfQueryPrefixMatches(previousData, previousQuery, sidebarQueryOptions.queryKey, 6)
	});
	const tables = useMemo(() => data?.pages.flatMap((page) => page.tables) ?? [], [data?.pages]);
	return {
		tables,
		total: data?.pages[0]?.total ?? tables.length,
		isLoading,
		isFetching,
		isFetchingNextPage,
		error,
		refetch,
		fetchNextPage,
		hasNextPage: hasNextPage ?? false
	};
}
function useMysqlDatabaseCredentials(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlDatabaseCredentialsQueryOptions(projectId, databaseId));
	return {
		credentials: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlDatabasePooler(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlDatabasePoolerQueryOptions(projectId, databaseId));
	return {
		pooler: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTableRows(projectId, databaseId, tableId, page = 0, limit = 25, params) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTableRowsQueryOptions(projectId, databaseId, tableId, page, limit, params));
	return {
		rows: data?.rows ?? [],
		total: data?.total ?? 0,
		columns: data?.columns ?? [],
		tableColumns: data?.tableColumns ?? [],
		durationMs: data?.durationMs,
		truncated: data?.truncated,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTableColumns(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTableColumnsQueryOptions(projectId, databaseId, tableId));
	return {
		columns: data?.columns ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTableIndexes(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTableIndexesQueryOptions(projectId, databaseId, tableId));
	return {
		indexes: data?.indexes ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlRoles(projectId, databaseId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlRolesQueryOptions(projectId, databaseId));
	return {
		roles: data?.roles ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTableInfo(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTableInfoQueryOptions(projectId, databaseId, tableId));
	return {
		tableInfo: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTableRls(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTableRlsQueryOptions(projectId, databaseId, tableId));
	return {
		rowSecurityEnabled: data?.rowSecurityEnabled ?? false,
		forceRowSecurity: data?.forceRowSecurity ?? false,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMysqlTablePolicies(projectId, databaseId, tableId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(mysqlTablePoliciesQueryOptions(projectId, databaseId, tableId));
	return {
		policies: data?.policies ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function buildMysqlVisualizerRelationships(foreignKeys) {
	return foreignKeys.map((row) => ({
		from: mysqlTableId(row.source_schema, row.source_table),
		to: mysqlTableId(row.target_schema, row.target_table),
		fromColumn: row.source_column,
		toColumn: row.target_column,
		constraintName: row.constraint_name
	}));
}
function collectExternalMysqlVisualizerTargets(foreignKeys, loadedRelationIds, activeSchema) {
	const targets = /* @__PURE__ */ new Map();
	for (const row of foreignKeys) {
		const targetId = mysqlTableId(row.target_schema, row.target_table);
		if (loadedRelationIds.has(targetId)) continue;
		if (row.target_schema === activeSchema) continue;
		targets.set(targetId, {
			schema: row.target_schema,
			table: row.target_table
		});
	}
	return Array.from(targets.values());
}
function useMysqlSchemaVisualizer(projectId, databaseId, schema) {
	const normalizedSchema = schema?.trim() || void 0;
	const [relations, setRelations] = useState([]);
	const [totalRelations, setTotalRelations] = useState(0);
	const [loadedRelations, setLoadedRelations] = useState(0);
	const [isLoadingRelations, setIsLoadingRelations] = useState(false);
	const [isLoadingColumns, setIsLoadingColumns] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const [loadError, setLoadError] = useState(null);
	const loadGenerationRef = useRef(0);
	const externalTargetsLoadedRef = useRef(null);
	const { data: foreignKeys = [], isLoading: foreignKeysLoading, error: foreignKeysError } = useQuery(mysqlVisualizerForeignKeysQueryOptions(projectId, databaseId, normalizedSchema));
	useEffect(() => {
		if (!projectId || !databaseId || !normalizedSchema) {
			setRelations([]);
			setTotalRelations(0);
			setLoadedRelations(0);
			setIsLoadingRelations(false);
			setIsLoadingColumns(false);
			setIsComplete(false);
			setLoadError(null);
			return;
		}
		const generation = loadGenerationRef.current + 1;
		loadGenerationRef.current = generation;
		let cancelled = false;
		async function loadSchemaVisualizer() {
			setRelations([]);
			setTotalRelations(0);
			setLoadedRelations(0);
			setIsComplete(false);
			setLoadError(null);
			setIsLoadingRelations(true);
			setIsLoadingColumns(false);
			const relationMap = /* @__PURE__ */ new Map();
			let page = 0;
			let total = 0;
			try {
				while (!cancelled && loadGenerationRef.current === generation) {
					const tablesPage = await fetchMysqlTablesPage(projectId, databaseId, {
						schema: normalizedSchema,
						page,
						limit: 25
					});
					if (page === 0) {
						total = tablesPage.total;
						setTotalRelations(total);
					}
					if (tablesPage.tables.length === 0) break;
					setIsLoadingColumns(true);
					const columnsByRelation = await fetchMysqlVisualizerColumnsBatch(projectId, databaseId, normalizedSchema, tablesPage.tables.map((row) => row.table_name));
					for (const table of tablesPage.tables) {
						const id = mysqlTableId(table.table_schema, table.table_name);
						relationMap.set(id, {
							id,
							schema: table.table_schema,
							name: table.table_name,
							tableType: table.table_type,
							isExternal: false,
							columns: columnsByRelation.get(id) ?? [],
							columnsLoaded: true
						});
					}
					setRelations(Array.from(relationMap.values()));
					setLoadedRelations(relationMap.size);
					setIsLoadingRelations(false);
					setIsLoadingColumns(false);
					if (!tablesPage.hasMore) break;
					page += 1;
				}
				if (cancelled || loadGenerationRef.current !== generation) return;
				setIsComplete(true);
				setIsLoadingRelations(false);
				setIsLoadingColumns(false);
			} catch (error) {
				if (cancelled || loadGenerationRef.current !== generation) return;
				setLoadError(error instanceof Error ? error : /* @__PURE__ */ new Error("Failed to load schema"));
				setIsLoadingRelations(false);
				setIsLoadingColumns(false);
			}
		}
		loadSchemaVisualizer();
		return () => {
			cancelled = true;
		};
	}, [
		projectId,
		databaseId,
		normalizedSchema
	]);
	useEffect(() => {
		externalTargetsLoadedRef.current = null;
	}, [normalizedSchema]);
	useEffect(() => {
		if (!projectId || !databaseId || !normalizedSchema) return;
		if (foreignKeysLoading || foreignKeys.length === 0) return;
		if (!isComplete) return;
		if (externalTargetsLoadedRef.current === normalizedSchema) return;
		const externalTargets = collectExternalMysqlVisualizerTargets(foreignKeys, new Set(relations.map((relation) => relation.id)), normalizedSchema);
		if (externalTargets.length === 0) {
			externalTargetsLoadedRef.current = normalizedSchema;
			return;
		}
		externalTargetsLoadedRef.current = normalizedSchema;
		let cancelled = false;
		async function loadExternalTargets() {
			try {
				const columnsByRelation = await fetchMysqlVisualizerExternalColumns(projectId, databaseId, externalTargets);
				if (cancelled) return;
				setRelations((current) => {
					const next = [...current];
					const existingIds = new Set(current.map((relation) => relation.id));
					for (const target of externalTargets) {
						const id = mysqlTableId(target.schema, target.table);
						if (existingIds.has(id)) continue;
						next.push({
							id,
							schema: target.schema,
							name: target.table,
							tableType: "BASE TABLE",
							isExternal: true,
							columns: columnsByRelation.get(id) ?? [],
							columnsLoaded: true
						});
						existingIds.add(id);
					}
					return next;
				});
			} catch {}
		}
		loadExternalTargets();
		return () => {
			cancelled = true;
		};
	}, [
		projectId,
		databaseId,
		normalizedSchema,
		foreignKeys,
		foreignKeysLoading,
		isComplete,
		relations
	]);
	return {
		relations,
		relationships: useMemo(() => buildMysqlVisualizerRelationships(foreignKeys), [foreignKeys]),
		totalRelations,
		loadedRelations,
		isLoading: isLoadingRelations || isLoadingColumns || foreignKeysLoading || !!normalizedSchema && !isComplete && relations.length === 0 && !loadError,
		isLoadingRelations,
		isLoadingColumns,
		isComplete,
		error: loadError ?? foreignKeysError ?? null
	};
}
function useExplainMysqlSql(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({ mutationFn: (query) => {
		requireOperationalDatabase(queryClient, projectId, databaseId);
		return explainMysqlDatabaseQuery(projectId, databaseId, query);
	} });
}
async function refreshMysqlDatabaseCaches(queryClient, projectId, databaseId) {
	const schemaQueryKeys = [
		[
			"mysql-schemas",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-tables",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-autocomplete-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-rows",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-row-columns",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-indexes",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-info",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-rls",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-table-policies",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-roles",
			"project",
			projectId,
			databaseId
		],
		[
			"mysql-visualizer",
			"project",
			projectId,
			databaseId
		]
	];
	for (const queryKey of schemaQueryKeys) queryClient.removeQueries({
		queryKey,
		type: "inactive"
	});
	await Promise.all(schemaQueryKeys.map((queryKey) => queryClient.invalidateQueries({ queryKey })));
}
function useExecuteMysqlSql(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (sql) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executeMysqlDatabaseSql(projectId, databaseId, sql);
		},
		onSuccess: () => refreshMysqlDatabaseCaches(queryClient, projectId, databaseId)
	});
}
function useMysqlSelectedSchema(databaseId, knownSchemas, account) {
	const queryClient = useQueryClient();
	const [selectedSchema, setSelectedSchemaState] = useState(null);
	const [selectionDatabaseId, setSelectionDatabaseId] = useState(databaseId);
	const initializedDatabaseIdRef = useRef(null);
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [account?.prefs, queryClient]);
	if (selectionDatabaseId !== databaseId) {
		setSelectionDatabaseId(databaseId);
		setSelectedSchemaState(null);
		initializedDatabaseIdRef.current = null;
	}
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		const next = resolveMysqlSelectedSchema({
			schemas: knownSchemas,
			persisted: parseMysqlSelectedSchema(accountPrefs, databaseId)
		});
		if (!next) return;
		setSelectedSchemaState(next);
		initializedDatabaseIdRef.current = databaseId;
	}, [
		accountPrefs,
		databaseId,
		knownSchemas
	]);
	useEffect(() => {
		if (selectedSchema || knownSchemas.length === 0) return;
		setSelectedSchemaState(resolveMysqlSelectedSchema({
			schemas: knownSchemas,
			persisted: null
		}));
	}, [knownSchemas, selectedSchema]);
	return {
		selectedSchema,
		setSelectedSchema: useCallback((schema) => {
			const trimmed = coerceMysqlStringValue(schema) ?? "";
			if (!trimmed) return;
			setSelectedSchemaState(trimmed);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildMysqlSelectedSchemaPrefs(databaseId, trimmed)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function useMysqlSavedQueriesSort(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [sort, setSortState] = useState(MYSQL_SAVED_QUERIES_DEFAULT_SORT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setSortState(parseMysqlSavedQueriesSort(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		sort,
		setSort: useCallback((next) => {
			setSortState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildMysqlSavedQueriesSortPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function useMysqlSidebarTablesSort(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [sort, setSortState] = useState(MYSQL_SIDEBAR_TABLES_DEFAULT_SORT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setSortState(parseMysqlSidebarTablesSort(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		sort,
		setSort: useCallback((next) => {
			setSortState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildMysqlSidebarTablesSortPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function useMysqlSidebarPanel(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const [panel, setPanelState] = useState(MYSQL_SIDEBAR_PANEL_DEFAULT);
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		setPanelState(parseMysqlSidebarPanel(accountPrefs, databaseId));
		initializedDatabaseIdRef.current = databaseId;
	}, [accountPrefs, databaseId]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		panel,
		setPanel: useCallback((next) => {
			setPanelState(next);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildMysqlSidebarPanelPrefs(databaseId, next)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function useMysqlSavedQueryScope(databaseId, account, teamId) {
	const queryClient = useQueryClient();
	const { isLoading: teamLoading } = useConsoleTeam(teamId);
	const { userQueries, teamQueries, hasTeamLevel } = useMysqlSavedQueries(databaseId, account, teamId);
	const [savedQueryLevel, setSavedQueryLevelState] = useState("user");
	const initializedDatabaseIdRef = useRef(null);
	useEffect(() => {
		if (!databaseId) return;
		if (initializedDatabaseIdRef.current === databaseId) return;
		if (!account) return;
		if (teamId && teamLoading) return;
		setSavedQueryLevelState(resolveMysqlSavedQueriesScope({
			persisted: parseMysqlSavedQueriesScope(account.prefs, databaseId),
			hasTeamLevel,
			userQueryCount: userQueries.length,
			teamQueryCount: teamQueries.length
		}));
		initializedDatabaseIdRef.current = databaseId;
	}, [
		account,
		databaseId,
		hasTeamLevel,
		teamId,
		teamLoading,
		teamQueries.length,
		userQueries.length
	]);
	useEffect(() => {
		initializedDatabaseIdRef.current = null;
	}, [databaseId]);
	return {
		savedQueryLevel,
		setSavedQueryLevel: useCallback((level) => {
			setSavedQueryLevelState(level);
			if (!databaseId) return;
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) return;
			updateAccountPrefs({
				...currentAccount.prefs ?? {},
				...buildMysqlSavedQueriesScopePrefs(databaseId, level)
			}).then((updatedAccount) => {
				syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			}).catch(() => {});
		}, [databaseId, queryClient])
	};
}
function buildNextMysqlSavedQueriesList(current, name, sql) {
	const trimmedSql = sql.trim();
	const trimmedName = name.trim().slice(0, 64);
	if (!trimmedName) throw new Error("Name is required");
	if (!trimmedSql) throw new Error("SQL is required");
	const head = current[0];
	if (head && head.name === trimmedName && head.sql === trimmedSql) return current;
	if (current.length >= 30) throw new Error(`Maximum 30 saved queries`);
	return [{
		id: crypto.randomUUID(),
		name: trimmedName,
		sql: trimmedSql
	}, ...current].slice(0, 30);
}
function useMysqlSavedQueries(databaseId, account, teamId) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const { data: team } = useConsoleTeam(teamId);
	const updateTeamPrefs$1 = useUpdateConsoleTeamPrefs(teamId);
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const userQueries = databaseId && accountPrefs ? parseMysqlSavedQueries(accountPrefs, databaseId) : [];
	const teamQueries = databaseId && team?.prefs && teamId ? parseMysqlSavedQueries(team.prefs, databaseId) : [];
	const addUserMutation = useMutation({
		mutationFn: async ({ name, sql }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			if (sql.trim().length > 48e3) throw new Error("Query is too large to save");
			const next = buildNextMysqlSavedQueriesList(parseMysqlSavedQueries(currentAccount.prefs, databaseId), name, sql);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildMysqlSavedQueriesPrefs(databaseId, next)
			});
		},
		onMutate: async ({ name, sql }) => {
			if (!databaseId) return void 0;
			const trimmedSql = sql.trim();
			if (!name.trim().slice(0, 64) || !trimmedSql) return void 0;
			await queryClient.cancelQueries({ queryKey: ["account", "console"] });
			const previousAccounts = queryClient.getQueriesData({ queryKey: ["account", "console"] });
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => {
				if (!current) return current;
				const currentList = parseMysqlSavedQueries(current.prefs, databaseId);
				try {
					const next = buildNextMysqlSavedQueriesList(currentList, name, sql);
					return {
						...current,
						prefs: {
							...current.prefs ?? {},
							...buildMysqlSavedQueriesPrefs(databaseId, next)
						}
					};
				} catch {
					return current;
				}
			});
			return { previousAccounts };
		},
		onError: (_error, _variables, context) => {
			if (context?.previousAccounts) for (const [queryKey, data] of context.previousAccounts) queryClient.setQueryData(queryKey, data);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const addTeamMutation = useMutation({
		mutationFn: async ({ name, sql }) => {
			if (!databaseId || !teamId) throw new Error("Team or database not available");
			if (sql.trim().length > 48e3) throw new Error("Query is too large to save");
			await updateTeamPrefs$1.mutateAsync((freshPrefs) => {
				return buildMysqlSavedQueriesPrefs(databaseId, buildNextMysqlSavedQueriesList(parseMysqlSavedQueries(freshPrefs, databaseId), name, sql));
			});
		},
		onMutate: async ({ name, sql }) => {
			if (!databaseId || !teamId) return void 0;
			const trimmedSql = sql.trim();
			if (!name.trim().slice(0, 64) || !trimmedSql) return void 0;
			const teamQueryKey = [
				"team",
				"console",
				teamId
			];
			await queryClient.cancelQueries({ queryKey: teamQueryKey });
			const previousTeam = queryClient.getQueryData(teamQueryKey);
			queryClient.setQueryData(teamQueryKey, (current) => {
				if (!current) return current;
				const currentList = parseMysqlSavedQueries(current.prefs, databaseId);
				try {
					const next = buildNextMysqlSavedQueriesList(currentList, name, sql);
					return {
						...current,
						prefs: {
							...current.prefs ?? {},
							...buildMysqlSavedQueriesPrefs(databaseId, next)
						}
					};
				} catch {
					return current;
				}
			});
			return { previousTeam };
		},
		onError: (_error, _variables, context) => {
			if (!teamId || context?.previousTeam === void 0) return;
			queryClient.setQueryData([
				"team",
				"console",
				teamId
			], context.previousTeam);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const deleteUserMutation = useMutation({
		mutationFn: async (id) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			const next = parseMysqlSavedQueries(currentAccount.prefs, databaseId).filter((query) => query.id !== id);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildMysqlSavedQueriesPrefs(databaseId, next)
			});
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const deleteTeamMutation = useMutation({
		mutationFn: async (id) => {
			if (!databaseId || !teamId) throw new Error("Team or database not available");
			await updateTeamPrefs$1.mutateAsync((freshPrefs) => {
				return buildMysqlSavedQueriesPrefs(databaseId, parseMysqlSavedQueries(freshPrefs, databaseId).filter((query) => query.id !== id));
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const addSavedQuery = async (args) => {
		const trimmedSql = args.sql.trim();
		const trimmedName = args.name.trim();
		if (args.level === "team" && teamId) {
			await addTeamMutation.mutateAsync({
				name: args.name,
				sql: args.sql
			});
			const team$1 = queryClient.getQueryData([
				"team",
				"console",
				teamId
			]);
			if (!team$1 || !databaseId) return void 0;
			const queries$1 = parseMysqlSavedQueries(team$1.prefs, databaseId);
			return queries$1.find((query) => query.name === trimmedName && query.sql === trimmedSql) ?? queries$1[0];
		}
		const updatedAccount = await addUserMutation.mutateAsync({
			name: args.name,
			sql: args.sql
		});
		if (!databaseId) return void 0;
		const queries = parseMysqlSavedQueries(updatedAccount.prefs, databaseId);
		return queries.find((query) => query.name === trimmedName && query.sql === trimmedSql) ?? queries[0];
	};
	const deleteSavedQuery = async (id, level) => {
		if (level === "team" && teamId) return deleteTeamMutation.mutateAsync(id);
		return deleteUserMutation.mutateAsync(id);
	};
	return {
		userQueries,
		teamQueries,
		addSavedQuery,
		deleteSavedQuery,
		isAdding: addUserMutation.isPending || addTeamMutation.isPending,
		isDeleting: deleteUserMutation.isPending || deleteTeamMutation.isPending,
		hasTeamLevel: !!teamId
	};
}
var MYSQL_QUERY_HISTORY_PERSIST_DEBOUNCE_MS = 400;
var MYSQL_SQL_EDITOR_STATE_PERSIST_DEBOUNCE_MS = 400;
function useMysqlSqlEditorPersistence(databaseId, account) {
	const queryClient = useQueryClient();
	const { data: consoleAccount } = useQuery(consoleAccountQueryOptions({ revision: useConsoleImpersonationRevision() }));
	const accountPrefs = useMemo(() => {
		const cachedPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		return {
			...account?.prefs ?? {},
			...consoleAccount?.prefs ?? {},
			...cachedPrefs ?? {}
		};
	}, [
		account?.prefs,
		consoleAccount?.prefs,
		queryClient
	]);
	const persistTimerRef = useRef(null);
	const parseInitialEditorState = useCallback(() => {
		if (!databaseId) return null;
		return parseMysqlSqlEditorState(accountPrefs, databaseId);
	}, [accountPrefs, databaseId]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId) throw new Error("Account or database not available");
			return await updateAccountPrefs(mergeMysqlSqlEditorStateIntoPrefs(currentAccount.prefs ?? {}, databaseId, value));
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistEditorTabState = useCallback((value) => {
		if (!databaseId) return;
		const currentPrefs = getConsoleAccountFromCache(queryClient)?.prefs ?? {};
		const prefsKey = getMysqlSqlEditorStateKey(databaseId);
		const nextSerialized = buildMysqlSqlEditorStatePrefs(databaseId, value)[prefsKey];
		const currentSerialized = currentPrefs[prefsKey];
		if ((typeof nextSerialized === "string" ? nextSerialized : nextSerialized != null ? JSON.stringify(nextSerialized) : void 0) === (typeof currentSerialized === "string" ? currentSerialized : currentSerialized != null ? JSON.stringify(currentSerialized) : void 0)) return;
		const patch = mergeMysqlSqlEditorStateIntoPrefs(currentPrefs, databaseId, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, MYSQL_SQL_EDITOR_STATE_PERSIST_DEBOUNCE_MS);
	}, [
		databaseId,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		parseInitialEditorState,
		persistEditorTabState
	};
}
function useMysqlQueryHistory(databaseId, account) {
	const queryClient = useQueryClient();
	const recentQueries = databaseId && account?.prefs ? parseMysqlQueryHistory(account.prefs, databaseId) : [];
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account || !databaseId) throw new Error("Account or database not available");
			return await updateAccountPrefs(mergeMysqlQueryHistoryIntoPrefs(account.prefs ?? {}, databaseId, value));
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistRecentQueries = useCallback((value) => {
		if (!account || !databaseId) return;
		const patch = mergeMysqlQueryHistoryIntoPrefs(account.prefs ?? {}, databaseId, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, MYSQL_QUERY_HISTORY_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		databaseId,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		recentQueries,
		persistRecentQueries
	};
}
const MYSQL_BACKUPS_PAGE_SIZE = 12;
async function fetchMysqlBackups(projectId, databaseId, page = 0, limit = MYSQL_BACKUPS_PAGE_SIZE) {
	if (!projectId || !databaseId) return {
		backups: [],
		total: 0
	};
	return sdk.forProject(projectId).mysql.listBackups({
		databaseId,
		queries: [
			Query.limit(limit),
			Query.offset(page * limit),
			Query.orderDesc("$createdAt")
		]
	});
}
function mysqlBackupPoliciesQueryOptions(projectId, databaseId) {
	return dedicatedBackupPoliciesQueryOptions(projectId, databaseId, "mysql");
}
function mysqlBackupsQueryOptions(projectId, databaseId, page = 0, limit = MYSQL_BACKUPS_PAGE_SIZE) {
	return queryOptions({
		queryKey: [
			"mysql-backups",
			"project",
			projectId,
			databaseId,
			page,
			limit
		],
		queryFn: () => fetchMysqlBackups(projectId, databaseId, page, limit),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useMysqlBackupPolicies(projectId, databaseId) {
	return useQuery(mysqlBackupPoliciesQueryOptions(projectId, databaseId));
}
function useMysqlBackups(projectId, databaseId, page = 0, limit = MYSQL_BACKUPS_PAGE_SIZE) {
	return useQuery(mysqlBackupsQueryOptions(projectId, databaseId, page, limit));
}
var MYSQL_SOURCE = {
	type: "engine",
	engine: "mysql"
};
function mysqlDatabaseReplicasQueryOptions(projectId, databaseId, enabled = true, refetchInterval) {
	return dedicatedDatabaseReplicasQueryOptions(projectId, databaseId, MYSQL_SOURCE, enabled, refetchInterval);
}
var EXTENSIONS_POLL_INTERVAL_MS = 3e3;
async function fetchPostgresDatabaseExtensions(projectId, databaseId) {
	return sdk.forProject(projectId).postgresql.listExtensions({ databaseId });
}
function postgresDatabaseExtensionsQueryOptions(projectId, databaseId, options) {
	return queryOptions({
		queryKey: [
			"postgres-database-extensions",
			"project",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresDatabaseExtensions(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchInterval: options?.pollWhilePending ? EXTENSIONS_POLL_INTERVAL_MS : false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function usePostgresDatabaseExtensions(projectId, databaseId, options) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(postgresDatabaseExtensionsQueryOptions(projectId, databaseId, options));
	return {
		installed: data?.installed ?? [],
		available: data?.available ?? [],
		metadata: data?.metadata ?? [],
		isLoading,
		isFetching,
		error,
		refetch
	};
}
async function installPostgresDatabaseExtension(projectId, databaseId, name) {
	return sdk.forProject(projectId).postgresql.createExtension({
		databaseId,
		name
	});
}
async function uninstallPostgresDatabaseExtension(projectId, databaseId, extensionName) {
	return sdk.forProject(projectId).postgresql.deleteExtension({
		databaseId,
		extensionName
	});
}
function useInstallPostgresDatabaseExtension(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (name) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return installPostgresDatabaseExtension(projectId, databaseId, name);
		},
		onSuccess: async () => {
			if (!projectId || !databaseId) return;
			await queryClient.invalidateQueries({ queryKey: [
				"postgres-database-extensions",
				"project",
				projectId,
				databaseId
			] });
		}
	});
}
function useUninstallPostgresDatabaseExtension(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (extensionName) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return uninstallPostgresDatabaseExtension(projectId, databaseId, extensionName);
		},
		onSuccess: async () => {
			if (!projectId || !databaseId) return;
			await queryClient.invalidateQueries({ queryKey: [
				"postgres-database-extensions",
				"project",
				projectId,
				databaseId
			] });
		}
	});
}
function buildPostgresCancelBackendSql(pid) {
	return prefixPostgresSqlComment(`SELECT pg_cancel_backend(${pid});`, "Cancel backend query");
}
function buildPostgresTerminateBackendSql(pid) {
	return prefixPostgresSqlComment(`SELECT pg_terminate_backend(${pid});`, "Terminate backend");
}
const POSTGRES_TERMINATE_IDLE_IN_TRANSACTION_SQL = prefixPostgresSqlComment(`
SELECT pg_terminate_backend(pid) AS terminated, pid
FROM pg_stat_activity
WHERE state = 'idle in transaction'
  AND pid != pg_backend_pid()
`.trim(), "Terminate idle backends");
var METRICS_POLL_INTERVAL_MS$1 = 6e4;
var ACTIVE_CONNECTIONS_POLL_INTERVAL_MS$1 = 3e4;
async function fetchPostgresActiveConnections(projectId, databaseId) {
	return parsePostgresActiveConnections(await executePostgresDatabaseSql(projectId, databaseId, POSTGRES_ACTIVE_CONNECTIONS_SQL, 30));
}
async function fetchPostgresMetricsSnapshot(projectId, databaseId) {
	return parsePostgresMetricsSnapshot(await executePostgresDatabaseSql(projectId, databaseId, POSTGRES_METRICS_SNAPSHOT_SQL, 30));
}
async function fetchPostgresConnectionStates(projectId, databaseId) {
	return parsePostgresConnectionStates(await executePostgresDatabaseSql(projectId, databaseId, POSTGRES_METRICS_CONNECTION_STATES_SQL, 30));
}
async function fetchPostgresConnectionApps(projectId, databaseId) {
	return parsePostgresConnectionApps(await executePostgresDatabaseSql(projectId, databaseId, POSTGRES_METRICS_CONNECTION_APPS_SQL, 30));
}
async function fetchPostgresTableActivity(projectId, databaseId) {
	return parsePostgresTableActivity(await executePostgresDatabaseSql(projectId, databaseId, POSTGRES_METRICS_TABLE_ACTIVITY_SQL, 30));
}
function postgresMetricsSnapshotQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres",
			"metrics",
			"snapshot",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresMetricsSnapshot(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: 3e4,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresConnectionStatesQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres",
			"metrics",
			"connection-states",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresConnectionStates(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresConnectionAppsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres",
			"metrics",
			"connection-apps",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresConnectionApps(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresActiveConnectionsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres",
			"active-connections",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresActiveConnections(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: 15e3,
		refetchInterval: ACTIVE_CONNECTIONS_POLL_INTERVAL_MS$1,
		refetchOnMount: false,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function postgresTableActivityQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"postgres",
			"metrics",
			"tables",
			projectId,
			databaseId
		],
		queryFn: () => fetchPostgresTableActivity(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function usePostgresConnectionStates(projectId, databaseId) {
	const query = useQuery(postgresConnectionStatesQueryOptions(projectId, databaseId));
	return {
		states: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function usePostgresConnectionApps(projectId, databaseId) {
	const query = useQuery(postgresConnectionAppsQueryOptions(projectId, databaseId));
	return {
		apps: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function usePostgresActiveConnections(projectId, databaseId) {
	const query = useQuery(postgresActiveConnectionsQueryOptions(projectId, databaseId));
	return {
		connections: query.data ?? [],
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		refetch: query.refetch
	};
}
function usePostgresTableActivity(projectId, databaseId) {
	const query = useQuery(postgresTableActivityQueryOptions(projectId, databaseId));
	return {
		tables: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function usePostgresMetricsSampling(projectId, databaseId, options) {
	const enabled = options?.enabled ?? true;
	const pollIntervalMs = options?.pollIntervalMs ?? METRICS_POLL_INTERVAL_MS$1;
	const query = useQuery({
		...postgresMetricsSnapshotQueryOptions(projectId, databaseId),
		enabled: enabled && !!projectId && !!databaseId,
		refetchInterval: enabled ? pollIntervalMs : false
	});
	const refresh = useCallback(() => query.refetch(), [query.refetch]);
	return {
		snapshot: query.data ?? null,
		lastRecordedAt: query.dataUpdatedAt > 0 ? query.dataUpdatedAt : null,
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		refresh
	};
}
function postgresActiveConnectionsQueryKey(projectId, databaseId) {
	return [
		"postgres",
		"active-connections",
		projectId,
		databaseId
	];
}
async function refreshPostgresActiveConnections(queryClient, projectId, databaseId) {
	await queryClient.refetchQueries({ queryKey: postgresActiveConnectionsQueryKey(projectId, databaseId) });
}
function useCancelPostgresBackend(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (pid) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executePostgresDatabaseSql(projectId, databaseId, buildPostgresCancelBackendSql(pid));
		},
		onSuccess: async () => {
			await refreshPostgresActiveConnections(queryClient, projectId, databaseId);
			toast.success("Query canceled");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to cancel query");
		}
	});
}
function useTerminatePostgresBackend(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (pid) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executePostgresDatabaseSql(projectId, databaseId, buildPostgresTerminateBackendSql(pid));
		},
		onSuccess: async () => {
			await refreshPostgresActiveConnections(queryClient, projectId, databaseId);
			toast.success("Connection terminated");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to terminate connection");
		}
	});
}
function useTerminatePostgresIdleInTransaction(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executePostgresDatabaseSql(projectId, databaseId, POSTGRES_TERMINATE_IDLE_IN_TRANSACTION_SQL);
		},
		onSuccess: async () => {
			await refreshPostgresActiveConnections(queryClient, projectId, databaseId);
			toast.success("Idle in transaction connections terminated");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to terminate idle in transaction connections");
		}
	});
}
function buildMysqlCancelBackendSql(pid) {
	return prefixMysqlSqlComment(`KILL QUERY ${Math.floor(Number(pid))}`, "Cancel backend query");
}
function buildMysqlTerminateBackendSql(pid) {
	return prefixMysqlSqlComment(`KILL CONNECTION ${Math.floor(Number(pid))}`, "Terminate backend");
}
const MYSQL_TERMINATE_IDLE_IN_TRANSACTION_SQL = prefixMysqlSqlComment(`
SELECT ID AS terminated, ID AS pid
FROM information_schema.PROCESSLIST
WHERE COMMAND = 'Sleep'
  AND TIME > 0
  AND FALSE
`.trim(), "Terminate idle backends (no-op stub on MySQL)");
var METRICS_POLL_INTERVAL_MS = 6e4;
var ACTIVE_CONNECTIONS_POLL_INTERVAL_MS = 3e4;
async function fetchMysqlActiveConnections(projectId, databaseId) {
	return parseMysqlActiveConnections(await executeMysqlDatabaseSql(projectId, databaseId, MYSQL_ACTIVE_CONNECTIONS_SQL, 30));
}
async function fetchMysqlMetricsSnapshot(projectId, databaseId) {
	return parseMysqlMetricsSnapshot(await executeMysqlDatabaseSql(projectId, databaseId, MYSQL_METRICS_SNAPSHOT_SQL, 30));
}
async function fetchMysqlConnectionStates(projectId, databaseId) {
	return parseMysqlConnectionStates(await executeMysqlDatabaseSql(projectId, databaseId, MYSQL_METRICS_CONNECTION_STATES_SQL, 30));
}
async function fetchMysqlConnectionApps(projectId, databaseId) {
	return parseMysqlConnectionApps(await executeMysqlDatabaseSql(projectId, databaseId, MYSQL_METRICS_CONNECTION_APPS_SQL, 30));
}
async function fetchMysqlTableActivity(projectId, databaseId) {
	return parseMysqlTableActivity(await executeMysqlDatabaseSql(projectId, databaseId, MYSQL_METRICS_TABLE_ACTIVITY_SQL, 30));
}
function mysqlMetricsSnapshotQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql",
			"metrics",
			"snapshot",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlMetricsSnapshot(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: 3e4,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlConnectionStatesQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql",
			"metrics",
			"connection-states",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlConnectionStates(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlConnectionAppsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql",
			"metrics",
			"connection-apps",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlConnectionApps(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlActiveConnectionsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql",
			"active-connections",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlActiveConnections(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: 15e3,
		refetchInterval: ACTIVE_CONNECTIONS_POLL_INTERVAL_MS,
		refetchOnMount: false,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function mysqlTableActivityQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"mysql",
			"metrics",
			"tables",
			projectId,
			databaseId
		],
		queryFn: () => fetchMysqlTableActivity(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useMysqlConnectionStates(projectId, databaseId) {
	const query = useQuery(mysqlConnectionStatesQueryOptions(projectId, databaseId));
	return {
		states: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useMysqlConnectionApps(projectId, databaseId) {
	const query = useQuery(mysqlConnectionAppsQueryOptions(projectId, databaseId));
	return {
		apps: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useMysqlActiveConnections(projectId, databaseId) {
	const query = useQuery(mysqlActiveConnectionsQueryOptions(projectId, databaseId));
	return {
		connections: query.data ?? [],
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		refetch: query.refetch
	};
}
function useMysqlTableActivity(projectId, databaseId) {
	const query = useQuery(mysqlTableActivityQueryOptions(projectId, databaseId));
	return {
		tables: query.data ?? [],
		isLoading: query.isLoading,
		error: query.error,
		refetch: query.refetch
	};
}
function useMysqlMetricsSampling(projectId, databaseId, options) {
	const enabled = options?.enabled ?? true;
	const pollIntervalMs = options?.pollIntervalMs ?? METRICS_POLL_INTERVAL_MS;
	const query = useQuery({
		...mysqlMetricsSnapshotQueryOptions(projectId, databaseId),
		enabled: enabled && !!projectId && !!databaseId,
		refetchInterval: enabled ? pollIntervalMs : false
	});
	const refresh = useCallback(() => query.refetch(), [query.refetch]);
	return {
		snapshot: query.data ?? null,
		lastRecordedAt: query.dataUpdatedAt > 0 ? query.dataUpdatedAt : null,
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		refresh
	};
}
function mysqlActiveConnectionsQueryKey(projectId, databaseId) {
	return [
		"mysql",
		"active-connections",
		projectId,
		databaseId
	];
}
async function refreshMysqlActiveConnections(queryClient, projectId, databaseId) {
	await queryClient.refetchQueries({ queryKey: mysqlActiveConnectionsQueryKey(projectId, databaseId) });
}
function useCancelMysqlBackend(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (pid) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executeMysqlDatabaseSql(projectId, databaseId, buildMysqlCancelBackendSql(pid));
		},
		onSuccess: async () => {
			await refreshMysqlActiveConnections(queryClient, projectId, databaseId);
			toast.success("Query canceled");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to cancel query");
		}
	});
}
function useTerminateMysqlBackend(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (pid) => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executeMysqlDatabaseSql(projectId, databaseId, buildMysqlTerminateBackendSql(pid));
		},
		onSuccess: async () => {
			await refreshMysqlActiveConnections(queryClient, projectId, databaseId);
			toast.success("Connection terminated");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to terminate connection");
		}
	});
}
function useTerminateMysqlIdleInTransaction(projectId, databaseId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => {
			requireOperationalDatabase(queryClient, projectId, databaseId);
			return executeMysqlDatabaseSql(projectId, databaseId, MYSQL_TERMINATE_IDLE_IN_TRANSACTION_SQL);
		},
		onSuccess: async () => {
			await refreshMysqlActiveConnections(queryClient, projectId, databaseId);
			toast.success("Idle in transaction connections terminated");
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) ?? "Failed to terminate idle in transaction connections");
		}
	});
}
const STORAGE_PLACEHOLDER_BUCKET_ID = "-";
function isStoragePlaceholderBucketId(bucketId) {
	return bucketId === "-";
}
function storageSidebarBucketsQueryOptions(projectId) {
	return bucketsQueryOptions(projectId, 0, 100, void 0, void 0, "name", "asc");
}
function isRealStorageNavigation(cause, preload) {
	return cause !== "preload" && !preload;
}
function storageHomeNavigation(projectId) {
	return {
		to: "/projects/$projectId/storage/$bucketId",
		params: {
			projectId,
			bucketId: "-"
		}
	};
}
function redirectStorageFirstBucketOrPlaceholder(projectId, bucketsData) {
	const firstId = bucketsData.buckets?.[0]?.$id;
	throw redirect({
		to: "/projects/$projectId/storage/$bucketId",
		params: {
			projectId,
			bucketId: firstId ?? "-"
		},
		replace: true
	});
}
const BUCKETS_DEFAULT_SORT_BY = "$createdAt";
const BUCKETS_DEFAULT_SORT_ORDER = "desc";
async function fetchProjectBuckets(projectId, page = 0, limit = 10, search, filterQueries, sortBy = BUCKETS_DEFAULT_SORT_BY, sortOrder = BUCKETS_DEFAULT_SORT_ORDER) {
	if (!projectId) return {
		buckets: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.storage.listBuckets({ queries });
	return {
		buckets: response.buckets || [],
		total: response.total || 0
	};
}
function pickNextBucketIdAfterDelete(bucketLists, deletedBucketId) {
	for (const buckets of bucketLists) {
		if (buckets.length === 0) continue;
		const idx = buckets.findIndex((b) => b.$id === deletedBucketId);
		if (idx === -1) continue;
		if (buckets.length === 1) return null;
		if (idx < buckets.length - 1) return buckets[idx + 1].$id;
		return buckets[idx - 1].$id;
	}
	return null;
}
function getCachedBucketListsFromQueryClient(queryClient, projectId) {
	if (!projectId) return [];
	return queryClient.getQueriesData({ queryKey: [
		"buckets",
		"project",
		projectId
	] }).map(([, data]) => data?.buckets ?? []);
}
function getBucketFromProjectCaches(queryClient, projectId, bucketId) {
	if (!projectId || !bucketId) return void 0;
	const detail = queryClient.getQueryData([
		"bucket",
		"project",
		projectId,
		bucketId
	]);
	if (detail) return detail;
	for (const list of getCachedBucketListsFromQueryClient(queryClient, projectId)) {
		const b = list.find((x) => x.$id === bucketId);
		if (b) return b;
	}
}
async function fetchBucket(projectId, bucketId) {
	if (!projectId || !bucketId || isStoragePlaceholderBucketId(bucketId)) throw new Error("Project ID and Bucket ID are required");
	return await sdk.forProject(projectId).storage.getBucket({ bucketId });
}
var CSV_FILE_QUERIES = [Query.or([
	Query.equal("mimeType", "text/csv"),
	Query.equal("mimeType", "text/plain"),
	Query.startsWith("mimeType", "text/"),
	Query.endsWith("name", ".csv")
])];
const FILES_DEFAULT_SORT_BY = "$createdAt";
const FILES_DEFAULT_SORT_ORDER = "desc";
async function fetchBucketFiles(projectId, bucketId, page = 0, limit = 10, search, csvOnly, filterQueries, sortBy = FILES_DEFAULT_SORT_BY, sortOrder = FILES_DEFAULT_SORT_ORDER) {
	if (!projectId || !bucketId || isStoragePlaceholderBucketId(bucketId)) return {
		files: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const orderQuery = sortOrder === "asc" ? Query.orderAsc(sortBy) : Query.orderDesc(sortBy);
	const queries = [
		...filterQueries ?? [],
		...csvOnly ? CSV_FILE_QUERIES : [],
		orderQuery,
		Query.limit(limit),
		Query.offset(page * limit)
	];
	return await projectSdk.storage.listFiles({
		bucketId,
		queries,
		search: search?.trim() || void 0
	});
}
async function fetchFile(projectId, bucketId, fileId) {
	if (!projectId || !bucketId || !fileId) throw new Error("Project ID, Bucket ID, and File ID are required");
	return await sdk.forProject(projectId).storage.getFile({
		bucketId,
		fileId
	});
}
async function fetchFileTokens(projectId, bucketId, fileId, page = 0, limit = 10) {
	if (!projectId || !bucketId || !fileId) return {
		tokens: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	return await projectSdk.tokens.list({
		bucketId,
		fileId,
		queries
	});
}
function bucketFilesQueryOptions(projectId, bucketId, page = 0, limit = 10, search, csvOnly, filterQueries, sortBy = FILES_DEFAULT_SORT_BY, sortOrder = FILES_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"files",
			"project",
			projectId,
			"bucket",
			bucketId,
			page,
			limit,
			search,
			csvOnly,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchBucketFiles(projectId, bucketId, page, limit, search, csvOnly, filterQueries, sortBy, sortOrder),
		enabled: !!projectId && !!bucketId && !isStoragePlaceholderBucketId(bucketId),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && bucketId ? 300 * 1e3 : 0
	});
}
function fileQueryOptions(projectId, bucketId, fileId) {
	return queryOptions({
		queryKey: [
			"file",
			"project",
			projectId,
			"bucket",
			bucketId,
			fileId
		],
		queryFn: () => fetchFile(projectId, bucketId, fileId),
		enabled: !!projectId && !!bucketId && !!fileId && !isStoragePlaceholderBucketId(bucketId),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && bucketId && fileId ? 300 * 1e3 : 0
	});
}
function fileTokensQueryOptions(projectId, bucketId, fileId, page = 0, limit = 25) {
	return queryOptions({
		queryKey: [
			"file-tokens",
			"project",
			projectId,
			"bucket",
			bucketId,
			fileId,
			page,
			limit
		],
		queryFn: () => fetchFileTokens(projectId, bucketId, fileId, page, limit),
		enabled: !!projectId && !!bucketId && !!fileId && !isStoragePlaceholderBucketId(bucketId),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && bucketId && fileId ? 300 * 1e3 : 0
	});
}
function bucketsQueryOptions(projectId, page = 0, limit = 10, search, filterQueries, sortBy = BUCKETS_DEFAULT_SORT_BY, sortOrder = BUCKETS_DEFAULT_SORT_ORDER) {
	return queryOptions({
		queryKey: [
			"buckets",
			"project",
			projectId,
			page,
			limit,
			search,
			filterQueries,
			sortBy,
			sortOrder
		],
		queryFn: () => fetchProjectBuckets(projectId, page, limit, search, filterQueries, sortBy, sortOrder),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectBuckets(projectId, page = 0, limit = 10, search, filterQueries, sortBy = BUCKETS_DEFAULT_SORT_BY, sortOrder = BUCKETS_DEFAULT_SORT_ORDER) {
	const { data: bucketsData, isLoading, isFetching, isFetched, error, refetch } = useQuery(bucketsQueryOptions(projectId, page, limit, search, filterQueries, sortBy, sortOrder));
	const buckets = useMemo(() => {
		if (!bucketsData?.buckets) return [];
		return bucketsData.buckets;
	}, [bucketsData]);
	const totalPages = useMemo(() => {
		if (!bucketsData?.total) return 0;
		return Math.ceil(bucketsData.total / limit);
	}, [bucketsData?.total, limit]);
	return {
		buckets,
		total: bucketsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useBucket(projectId, bucketId) {
	return useQuery({
		queryKey: [
			"bucket",
			"project",
			projectId,
			bucketId
		],
		queryFn: () => fetchBucket(projectId, bucketId),
		enabled: !!projectId && !!bucketId && !isStoragePlaceholderBucketId(bucketId),
		staleTime: DEFAULT_STALE_TIME
	});
}
function useBucketFiles(projectId, bucketId, page = 0, limit = 10, search, csvOnly, filterQueries, sortBy = FILES_DEFAULT_SORT_BY, sortOrder = FILES_DEFAULT_SORT_ORDER) {
	return useQuery(bucketFilesQueryOptions(projectId, bucketId, page, limit, search, csvOnly, filterQueries, sortBy, sortOrder));
}
function removeCachedFile(queryClient, projectId, bucketId, fileId) {
	queryClient.removeQueries({ queryKey: [
		"file",
		"project",
		projectId,
		"bucket",
		bucketId,
		fileId
	] });
}
function useFile(projectId, bucketId, fileId) {
	return useQuery(fileQueryOptions(projectId, bucketId, fileId));
}
function useFileTokens(projectId, bucketId, fileId, page = 0, limit = 25) {
	return useQuery(fileTokensQueryOptions(projectId, bucketId, fileId, page, limit));
}
function distributionUrl(projectId, path = "") {
	const { client } = sdk.forProject(projectId);
	return new URL(`${client.config.endpoint}/distribution${path}`);
}
async function fetchDistributionApps(projectId, page = 0, limit = 10, search) {
	if (!projectId) return {
		apps: [],
		total: 0
	};
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const res = await sdk.forProject(projectId).client.call("get", distributionUrl(projectId, "/apps"), {}, {
		queries,
		search: search?.trim() || void 0
	});
	return {
		apps: res.apps ?? [],
		total: res.total ?? 0
	};
}
async function fetchDistributionApp(projectId, appId) {
	if (!projectId || !appId) throw new Error("Project ID and App ID are required");
	return await sdk.forProject(projectId).client.call("get", distributionUrl(projectId, `/apps/${appId}`), {}, {});
}
async function fetchDistributionBuilds(projectId, appId, page = 0, limit = 10) {
	if (!projectId || !appId) return {
		builds: [],
		total: 0
	};
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const res = await sdk.forProject(projectId).client.call("get", distributionUrl(projectId, `/apps/${appId}/builds`), {}, { queries });
	return {
		builds: res.builds ?? [],
		total: res.total ?? 0
	};
}
async function fetchDistributionSubmissions(projectId, appId, page = 0, limit = 10) {
	if (!projectId || !appId) return {
		submissions: [],
		total: 0
	};
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const res = await sdk.forProject(projectId).client.call("get", distributionUrl(projectId, `/apps/${appId}/submissions`), {}, { queries });
	return {
		submissions: res.submissions ?? [],
		total: res.total ?? 0
	};
}
async function createDistributionApp(projectId, params) {
	if (!projectId) throw new Error("Project ID is required");
	const payload = {
		appId: ID.unique(),
		name: params.name,
		platforms: params.platforms,
		framework: params.framework
	};
	if (params.applicationId) payload.applicationId = params.applicationId;
	if (params.bundleId) payload.bundleId = params.bundleId;
	if (params.packageIdentity) payload.packageIdentity = params.packageIdentity;
	if (params.teamId) payload.teamId = params.teamId;
	return await sdk.forProject(projectId).client.call("post", distributionUrl(projectId, "/apps"), { "content-type": "application/json" }, payload);
}
function distributionAppsQueryOptions(projectId, page = 0, limit = 10, search) {
	return queryOptions({
		queryKey: [
			"distribution-apps",
			"project",
			projectId,
			page,
			limit,
			search
		],
		queryFn: () => fetchDistributionApps(projectId, page, limit, search),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function distributionAppQueryOptions(projectId, appId) {
	return queryOptions({
		queryKey: [
			"distribution-app",
			"project",
			projectId,
			appId
		],
		queryFn: () => fetchDistributionApp(projectId, appId),
		enabled: !!projectId && !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function distributionBuildsQueryOptions(projectId, appId, page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"distribution-builds",
			"project",
			projectId,
			appId,
			page,
			limit
		],
		queryFn: () => fetchDistributionBuilds(projectId, appId, page, limit),
		enabled: !!projectId && !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function distributionSubmissionsQueryOptions(projectId, appId, page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"distribution-submissions",
			"project",
			projectId,
			appId,
			page,
			limit
		],
		queryFn: () => fetchDistributionSubmissions(projectId, appId, page, limit),
		enabled: !!projectId && !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useDistributionApps(projectId, page = 0, limit = 10, search) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(distributionAppsQueryOptions(projectId, page, limit, search));
	return {
		apps: data?.apps ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useDistributionApp(projectId, appId) {
	return useQuery(distributionAppQueryOptions(projectId, appId));
}
function useDistributionBuilds(projectId, appId, page = 0, limit = 10) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(distributionBuildsQueryOptions(projectId, appId, page, limit));
	return {
		builds: data?.builds ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useDistributionSubmissions(projectId, appId, page = 0, limit = 10) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(distributionSubmissionsQueryOptions(projectId, appId, page, limit));
	return {
		submissions: data?.submissions ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useCreateDistributionApp(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (params) => createDistributionApp(projectId, params),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: [
				"distribution-apps",
				"project",
				projectId
			] });
		}
	});
}
function GitHubBrandIcon({ className, ...props }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 50 50",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M25.0022 0.836914C38.3485 0.836914 49.1672 11.9285 49.1672 25.6131C49.1672 36.5574 42.2511 45.8417 32.6552 49.1208C31.43 49.3649 30.9951 48.5912 30.9951 47.9315C30.9951 47.1147 31.0241 44.447 31.0241 41.1315C31.0241 38.8214 30.2508 37.3136 29.3833 36.5451C34.7648 35.9314 40.4194 33.8361 40.4194 24.3199C40.4194 21.6134 39.4818 19.4048 37.9304 17.6698C38.1817 17.0439 39.0106 14.5238 37.6936 11.1117C37.6936 11.1117 35.6686 10.4479 31.0555 13.6521C29.1247 13.1036 27.0562 12.8276 25.0022 12.8179C22.9481 12.8276 20.882 13.1036 18.9537 13.6521C14.3357 10.4479 12.3059 11.1117 12.3059 11.1117C10.9937 14.5238 11.8226 17.0439 12.0715 17.6698C10.5273 19.4048 9.58248 21.6134 9.58248 24.3199C9.58248 33.8119 15.225 35.9393 20.5921 36.5652C19.9009 37.1838 19.2751 38.2751 19.0576 39.8773C17.6802 40.5104 14.1811 41.6061 12.0255 37.8195C12.0255 37.8195 10.7472 35.4389 8.32106 35.2649C8.32106 35.2649 5.96497 35.2336 8.15673 36.7705C8.15673 36.7705 9.73954 37.5317 10.8391 40.3953C10.8391 40.3953 12.2575 44.8174 18.9802 43.3191C18.9923 45.3901 19.0141 47.3418 19.0141 47.9315C19.0141 48.5863 18.5694 49.3528 17.3636 49.1232C7.76042 45.8488 0.837158 36.5598 0.837158 25.6131C0.837158 11.9285 11.6582 0.836914 25.0022 0.836914Z"
		})
	});
}
function XBrandIcon({ className, ...props }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
const COMMUNITY_SUPPORT_UNIQUE_DAYS_THRESHOLD = 7;
const COMMUNITY_SUPPORT_REMINDER_MS = 1440 * 60 * 60 * 1e3;
const COMMUNITY_SUPPORT_SHARE_TEXTS = [
	{
		audience: "all",
		text: "I've been building with @appwrite and it just stays out of the way. Auth, DB, storage. Done. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Stopped stitching together five backend services. @appwrite covers the boring parts so I can ship. https://appwrite.io"
	},
	{
		audience: "all",
		text: "If you need a backend that feels open source and production-ready, try @appwrite. Been happy with it. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Been shipping side projects on @appwrite instead of wiring everything from scratch. It's a good call. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Auth used to eat a weekend. With @appwrite I set it up and moved on. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Replaced a pile of custom backend glue with @appwrite. Fewer moving parts, same velocity. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Databases, file storage, and functions in one place. @appwrite has been a solid foundation for my last few apps. https://appwrite.io"
	},
	{
		audience: "all",
		text: "I tell friends to try @appwrite when they ask what to use instead of rolling their own backend. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Open source backend that does not feel like a science project: @appwrite. Worth a look. https://appwrite.io"
	},
	{
		audience: "all",
		text: "Spent less time on auth edge cases this month thanks to @appwrite. That alone was worth it. https://appwrite.io"
	},
	{
		audience: "cloud",
		text: "Moved a side project onto @appwrite Cloud and stopped babysitting servers. Feels great. https://appwrite.io"
	},
	{
		audience: "cloud",
		text: "Using @appwrite Cloud for auth and databases so I can stay focused on the product. https://appwrite.io"
	},
	{
		audience: "cloud",
		text: "Spun up @appwrite Cloud for a weekend build and kept shipping on it. Solid choice. https://appwrite.io"
	},
	{
		audience: "cloud",
		text: "Quiet recommendation if you want a managed backend: @appwrite Cloud. Open source roots, less ops. https://appwrite.io"
	},
	{
		audience: "self-hosted",
		text: "Self-hosting @appwrite for a client project and it has been refreshingly boring (in a good way). https://appwrite.io"
	},
	{
		audience: "self-hosted",
		text: "Running a self-hosted @appwrite instance for our team. Open source, under our control, still nice to use. https://appwrite.io"
	},
	{
		audience: "self-hosted",
		text: "Quiet recommendation: self-hosted @appwrite. Solid APIs, and I actually enjoy using the console. https://appwrite.io"
	},
	{
		audience: "self-hosted",
		text: "Self-hosted @appwrite has been a calm foundation for our internal tools. No surprise lock-in. https://appwrite.io"
	}
];
function getCommunitySupportShareTextsForProfile(profileId) {
	return COMMUNITY_SUPPORT_SHARE_TEXTS.filter((item) => item.audience === "all" || item.audience === profileId).map((item) => item.text);
}
function shuffleCommunitySupportShareTexts(profileId, avoidFirst) {
	const shuffled = [...getCommunitySupportShareTextsForProfile(profileId)];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const current = shuffled[i];
		shuffled[i] = shuffled[j];
		shuffled[j] = current;
	}
	if (avoidFirst && shuffled.length > 1 && shuffled[0] === avoidFirst) {
		const swapWith = 1 + Math.floor(Math.random() * (shuffled.length - 1));
		const first = shuffled[0];
		shuffled[0] = shuffled[swapWith];
		shuffled[swapWith] = first;
	}
	return shuffled;
}
function getCommunitySupportShareText(profileId = "cloud") {
	return shuffleCommunitySupportShareTexts(profileId)[0];
}
function getCommunitySupportShareHref(text) {
	return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}
const COMMUNITY_SUPPORT_ACTIONS = [
	{
		id: "community",
		title: "Join the community",
		description: "Help other Appwriters on Discord and grow with the community.",
		href: MARKETING_SOCIAL_STATS.discord.link,
		external: true,
		icon: HeartHandshake
	},
	{
		id: "contribute",
		title: "Star us on GitHub",
		description: "A star helps more developers discover Appwrite.",
		href: "https://github.com/appwrite/appwrite/stargazers",
		external: true,
		icon: GitHubBrandIcon
	},
	{
		id: "share",
		title: "Spread the word on X",
		description: "Tell others what you are building with Appwrite.",
		href: getCommunitySupportShareHref(getCommunitySupportShareText()),
		external: true,
		icon: XBrandIcon
	},
	{
		id: "content",
		title: "Write content",
		description: "Publish blogs, videos, or tutorials that help developers discover Appwrite.",
		href: "/community",
		external: true,
		icon: FileText
	},
	{
		id: "affiliates",
		title: "Join the Affiliates program",
		description: "Share invite links and earn credits when developers upgrade to Pro.",
		href: "/affiliates",
		external: true,
		icon: Gift
	},
	{
		id: "integrations",
		title: "Build integrations",
		description: "Connect Appwrite to the tools your stack already uses.",
		href: "/integrations",
		external: true,
		icon: Blocks
	}
];
function getLocalDayKey(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function shouldShowCommunitySupportPrompt(state, now = /* @__PURE__ */ new Date()) {
	if (state.actionTakenAt) return false;
	if (state.uniqueDayCount < 7) return false;
	if (!state.lastShownAt) return true;
	const lastShownMs = Date.parse(state.lastShownAt);
	if (Number.isNaN(lastShownMs)) return true;
	return now.getTime() - lastShownMs >= COMMUNITY_SUPPORT_REMINDER_MS;
}
function withRecordedActiveDay(state, dayKey = getLocalDayKey()) {
	if (state.lastActiveDay === dayKey) return state;
	return {
		...state,
		lastActiveDay: dayKey,
		uniqueDayCount: state.uniqueDayCount + 1
	};
}
function withRecordedShow(state, now = /* @__PURE__ */ new Date()) {
	return {
		...state,
		shownCount: state.shownCount + 1,
		lastShownAt: now.toISOString()
	};
}
function withSkippedPrompt(state, now = /* @__PURE__ */ new Date()) {
	return {
		...state,
		lastShownAt: now.toISOString()
	};
}
function isCommunitySupportStateAhead(local, remote) {
	if (local.actionTakenAt && !remote.actionTakenAt) return true;
	if (remote.actionTakenAt && !local.actionTakenAt) return false;
	if (local.shownCount !== remote.shownCount) return local.shownCount > remote.shownCount;
	const localShown = local.lastShownAt ? Date.parse(local.lastShownAt) : 0;
	const remoteShown = remote.lastShownAt ? Date.parse(remote.lastShownAt) : 0;
	const localShownMs = Number.isFinite(localShown) ? localShown : 0;
	const remoteShownMs = Number.isFinite(remoteShown) ? remoteShown : 0;
	if (localShownMs !== remoteShownMs) return localShownMs > remoteShownMs;
	return local.uniqueDayCount > remote.uniqueDayCount;
}
function withTakenAction(state, actionId, now = /* @__PURE__ */ new Date()) {
	return {
		...state,
		actionId,
		actionTakenAt: now.toISOString(),
		lastShownAt: now.toISOString()
	};
}
function toPromptState(prefs) {
	return {
		uniqueDayCount: prefs.uniqueDayCount,
		lastActiveDay: prefs.lastActiveDay,
		shownCount: prefs.shownCount,
		lastShownAt: prefs.lastShownAt,
		actionTakenAt: prefs.actionTakenAt,
		actionId: prefs.actionId ?? null
	};
}
function toPrefs(state) {
	return {
		uniqueDayCount: state.uniqueDayCount,
		lastActiveDay: state.lastActiveDay,
		shownCount: state.shownCount,
		lastShownAt: state.lastShownAt,
		actionTakenAt: state.actionTakenAt,
		actionId: state.actionId
	};
}
function isAccountUser(value) {
	return !!value && typeof value === "object" && "$id" in value;
}
function patchAccountPrefsCache(queryClient, next) {
	const current = getConsoleAccountFromCache(queryClient);
	if (!isAccountUser(current)) {
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (existing) => existing ? {
			...existing,
			prefs: mergeCommunitySupportPrefsIntoPrefs(existing.prefs ?? {}, next)
		} : existing);
		return;
	}
	commitConsoleAccountToCaches(queryClient, {
		...current,
		prefs: mergeCommunitySupportPrefsIntoPrefs(current.prefs ?? {}, next)
	});
}
function useCommunitySupportPrompt(account, options) {
	const queryClient = useQueryClient();
	const trackActiveDay = options?.trackActiveDay ?? true;
	const accountId = isAccountUser(account) ? account.$id : void 0;
	const accountRef = useRef(account);
	accountRef.current = account;
	const recordedDayGuardRef = useRef(null);
	const recordedShowGuardRef = useRef(false);
	const writeChainRef = useRef(Promise.resolve());
	const state = useMemo(() => toPromptState(parseCommunitySupportPrefs(account?.prefs)), [account?.prefs]);
	const readLatestState = useCallback(() => {
		return toPromptState(parseCommunitySupportPrefs(getConsoleAccountFromCache(queryClient)?.prefs ?? accountRef.current?.prefs));
	}, [queryClient]);
	const persist = useCallback((next) => {
		if (!accountRef.current) return;
		patchAccountPrefsCache(queryClient, toPrefs(next));
		writeChainRef.current = writeChainRef.current.catch(() => void 0).then(async () => {
			const currentAccount = getConsoleAccountFromCache(queryClient) ?? accountRef.current;
			if (!currentAccount) return;
			const latestCs = parseCommunitySupportPrefs(getConsoleAccountFromCache(queryClient)?.prefs ?? currentAccount.prefs);
			const updatedAccount = await updateAccountPrefs(mergeCommunitySupportPrefsIntoPrefs(getConsoleAccountFromCache(queryClient)?.prefs ?? currentAccount.prefs ?? {}, latestCs), "community-support-prompt");
			if (!updatedAccount) return;
			const localBeforeSync = parseCommunitySupportPrefs(getConsoleAccountFromCache(queryClient)?.prefs);
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
			const remoteAfterSync = parseCommunitySupportPrefs(updatedAccount.prefs);
			if (isCommunitySupportStateAhead(toPromptState(localBeforeSync), toPromptState(remoteAfterSync))) patchAccountPrefsCache(queryClient, localBeforeSync);
		});
	}, [queryClient]);
	useEffect(() => {
		recordedDayGuardRef.current = null;
		recordedShowGuardRef.current = false;
		writeChainRef.current = Promise.resolve();
	}, [accountId]);
	useEffect(() => {
		if (!account || !trackActiveDay) return;
		const dayKey = getLocalDayKey();
		const guardKey = `${accountId ?? "unknown"}:${dayKey}`;
		if (recordedDayGuardRef.current === guardKey) return;
		const latest = readLatestState();
		if (latest.lastActiveDay === dayKey) {
			recordedDayGuardRef.current = guardKey;
			return;
		}
		recordedDayGuardRef.current = guardKey;
		persist(withRecordedActiveDay(latest, dayKey));
	}, [
		account,
		accountId,
		persist,
		readLatestState,
		trackActiveDay
	]);
	return {
		state,
		shouldShow: shouldShowCommunitySupportPrompt(state),
		recordShown: useCallback(() => {
			if (recordedShowGuardRef.current) return;
			recordedShowGuardRef.current = true;
			persist(withRecordedShow(readLatestState()));
		}, [persist, readLatestState]),
		skip: useCallback(() => {
			recordedShowGuardRef.current = true;
			persist(withSkippedPrompt(readLatestState()));
		}, [persist, readLatestState]),
		takeAction: useCallback((actionId) => {
			recordedShowGuardRef.current = true;
			persist(withTakenAction(readLatestState(), actionId));
		}, [persist, readLatestState]),
		todayKey: getLocalDayKey()
	};
}
var OAUTH2_PROVIDER_IDS_WITHOUT_UPDATE = new Set([ProjectOAuthProviderId.Yammer]);
var OAUTH2_UPDATE_BY_PROVIDER = {
	[ProjectOAuthProviderId.Amazon]: (p, b) => p.updateOAuth2Amazon(b),
	[ProjectOAuthProviderId.Apple]: (p, b) => p.updateOAuth2Apple(b),
	[ProjectOAuthProviderId.Appwrite]: (p, b) => p.updateOAuth2Appwrite(b),
	[ProjectOAuthProviderId.Auth0]: (p, b) => p.updateOAuth2Auth0(b),
	[ProjectOAuthProviderId.Authentik]: (p, b) => p.updateOAuth2Authentik(b),
	[ProjectOAuthProviderId.Autodesk]: (p, b) => p.updateOAuth2Autodesk(b),
	[ProjectOAuthProviderId.Bitbucket]: (p, b) => p.updateOAuth2Bitbucket(b),
	[ProjectOAuthProviderId.Bitly]: (p, b) => p.updateOAuth2Bitly(b),
	[ProjectOAuthProviderId.Box]: (p, b) => p.updateOAuth2Box(b),
	[ProjectOAuthProviderId.Dailymotion]: (p, b) => p.updateOAuth2Dailymotion(b),
	[ProjectOAuthProviderId.Discord]: (p, b) => p.updateOAuth2Discord(b),
	[ProjectOAuthProviderId.Disqus]: (p, b) => p.updateOAuth2Disqus(b),
	[ProjectOAuthProviderId.Dropbox]: (p, b) => p.updateOAuth2Dropbox(b),
	[ProjectOAuthProviderId.Etsy]: (p, b) => p.updateOAuth2Etsy(b),
	[ProjectOAuthProviderId.Facebook]: (p, b) => p.updateOAuth2Facebook(b),
	[ProjectOAuthProviderId.Figma]: (p, b) => p.updateOAuth2Figma(b),
	[ProjectOAuthProviderId.Fusionauth]: (p, b) => p.updateOAuth2FusionAuth(b),
	[ProjectOAuthProviderId.Github]: (p, b) => p.updateOAuth2GitHub(b),
	[ProjectOAuthProviderId.Gitlab]: (p, b) => p.updateOAuth2Gitlab(b),
	[ProjectOAuthProviderId.Google]: (p, b) => p.updateOAuth2Google(b),
	[ProjectOAuthProviderId.Keycloak]: (p, b) => p.updateOAuth2Keycloak(b),
	[ProjectOAuthProviderId.Kick]: (p, b) => p.updateOAuth2Kick(b),
	[ProjectOAuthProviderId.Linkedin]: (p, b) => p.updateOAuth2Linkedin(b),
	[ProjectOAuthProviderId.Microsoft]: (p, b) => p.updateOAuth2Microsoft(b),
	[ProjectOAuthProviderId.Notion]: (p, b) => p.updateOAuth2Notion(b),
	[ProjectOAuthProviderId.Oidc]: (p, b) => p.updateOAuth2Oidc(b),
	[ProjectOAuthProviderId.Okta]: (p, b) => p.updateOAuth2Okta(b),
	[ProjectOAuthProviderId.Paypal]: (p, b) => p.updateOAuth2Paypal(b),
	[ProjectOAuthProviderId.PaypalSandbox]: (p, b) => p.updateOAuth2PaypalSandbox(b),
	[ProjectOAuthProviderId.Podio]: (p, b) => p.updateOAuth2Podio(b),
	[ProjectOAuthProviderId.Salesforce]: (p, b) => p.updateOAuth2Salesforce(b),
	[ProjectOAuthProviderId.Slack]: (p, b) => p.updateOAuth2Slack(b),
	[ProjectOAuthProviderId.Spotify]: (p, b) => p.updateOAuth2Spotify(b),
	[ProjectOAuthProviderId.Stripe]: (p, b) => p.updateOAuth2Stripe(b),
	[ProjectOAuthProviderId.Tradeshift]: (p, b) => p.updateOAuth2Tradeshift(b),
	[ProjectOAuthProviderId.TradeshiftBox]: (p, b) => p.updateOAuth2TradeshiftSandbox(b),
	[ProjectOAuthProviderId.Twitch]: (p, b) => p.updateOAuth2Twitch(b),
	[ProjectOAuthProviderId.Wordpress]: (p, b) => p.updateOAuth2WordPress(b),
	[ProjectOAuthProviderId.X]: (p, b) => p.updateOAuth2X(b),
	[ProjectOAuthProviderId.Yahoo]: (p, b) => p.updateOAuth2Yahoo(b),
	[ProjectOAuthProviderId.Yandex]: (p, b) => p.updateOAuth2Yandex(b),
	[ProjectOAuthProviderId.Zoho]: (p, b) => p.updateOAuth2Zoho(b),
	[ProjectOAuthProviderId.Zoom]: (p, b) => p.updateOAuth2Zoom(b)
};
function isProjectOAuthProviderId(providerId) {
	return Object.values(ProjectOAuthProviderId).includes(providerId);
}
function canUpdateProjectOAuth2Provider(providerId) {
	if (!isProjectOAuthProviderId(providerId)) return false;
	if (OAUTH2_PROVIDER_IDS_WITHOUT_UPDATE.has(providerId)) return false;
	return OAUTH2_UPDATE_BY_PROVIDER[providerId] != null;
}
function pruneOAuth2Body(values) {
	const body = {};
	if (typeof values.enabled === "boolean") body.enabled = values.enabled;
	for (const [key, value] of Object.entries(values)) {
		if (key === "enabled") continue;
		if (typeof value === "string") {
			const trimmed = value.trim();
			if (trimmed !== "") body[key] = trimmed;
		}
	}
	return body;
}
async function updateProjectOAuth2Provider(projectSdk, providerId, values) {
	if (!isProjectOAuthProviderId(providerId)) throw new Error(`Unknown OAuth2 provider "${providerId}".`);
	if (OAUTH2_PROVIDER_IDS_WITHOUT_UPDATE.has(providerId)) throw new Error(`OAuth2 provider "${providerId}" is not supported by this Appwrite server version.`);
	const handler = OAUTH2_UPDATE_BY_PROVIDER[providerId];
	if (!handler) throw new Error(`No OAuth2 update method for provider "${providerId}".`);
	await handler(projectSdk.project, pruneOAuth2Body(values));
}
async function fetchConsoleOAuth2Catalog() {
	return await sdk.forConsole.console.listOAuth2Providers();
}
async function fetchProjectOAuth2Providers(projectId) {
	return await sdk.forProject(projectId).project.listOAuth2Providers();
}
function consoleOAuth2CatalogQueryOptions() {
	return queryOptions({
		queryKey: [
			"oauth2",
			"console",
			"catalog"
		],
		queryFn: fetchConsoleOAuth2Catalog,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function projectOAuth2ProvidersQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"oauth2",
			"project",
			projectId,
			"providers"
		],
		queryFn: () => fetchProjectOAuth2Providers(projectId),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useConsoleOAuth2Catalog(options) {
	return useQuery({
		...consoleOAuth2CatalogQueryOptions(),
		initialData: options?.initialData,
		initialDataUpdatedAt: options?.initialData ? 1 : void 0
	});
}
function useProjectOAuth2Providers(projectId, options) {
	return useQuery({
		...projectOAuth2ProvidersQueryOptions(projectId),
		initialData: options?.initialData,
		initialDataUpdatedAt: options?.initialData ? 1 : void 0
	});
}
function useUpdateProjectOAuth2Provider(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			if (!projectId) throw new Error("Project ID is required");
			await updateProjectOAuth2Provider(sdk.forProject(projectId), input.providerId, input.values);
		},
		onSuccess: async () => {
			if (!projectId) return;
			await queryClient.refetchQueries({ queryKey: [
				"oauth2",
				"project",
				projectId,
				"providers"
			] });
			await queryClient.refetchQueries({ queryKey: ["project", projectId] });
		}
	});
}
const MARKETPLACE_CATEGORY_LABELS = {
	auth: "Authentication",
	storage: "Storage",
	analytics: "Analytics",
	payments: "Payments",
	ai: "AI & ML",
	devtools: "Developer tools",
	messaging: "Messaging"
};
const MARKETPLACE_CATEGORY_ICONS = {
	auth: Shield,
	storage: HardDrive,
	analytics: BarChart3,
	payments: CreditCard,
	ai: Sparkles,
	devtools: Wrench,
	messaging: MessageSquare
};
const MARKETPLACE_CATEGORY_ORDER = [
	"auth",
	"storage",
	"analytics",
	"payments",
	"ai",
	"messaging",
	"devtools"
];
var CATEGORY_TAG_SET = new Set(MARKETPLACE_CATEGORY_ORDER);
function buildMarketplaceAppTags(category, existingTags) {
	return [category, ...existingTags.filter((tag) => {
		const normalized = tag.trim().toLowerCase();
		return !CATEGORY_TAG_SET.has(normalized);
	})];
}
var CATEGORY_SET = new Set(MARKETPLACE_CATEGORY_ORDER);
function normalizeTag(tag) {
	return tag.trim().toLowerCase();
}
function hasTag(tags, value) {
	const needle = normalizeTag(value);
	return tags.some((tag) => normalizeTag(tag) === needle);
}
function resolveCategory(tags) {
	for (const tag of tags) {
		const normalized = normalizeTag(tag);
		if (CATEGORY_SET.has(normalized)) return normalized;
	}
	return "devtools";
}
function resolveCreators(contacts) {
	if (!contacts.length) return [];
	return contacts.map((contact) => {
		const trimmed = contact.trim();
		if (!trimmed) return { name: "Contact" };
		if (trimmed.includes("@")) return {
			name: (trimmed.split("@")[0] ?? trimmed).replace(/[._-]+/g, " ").trim() || trimmed,
			role: "Contact"
		};
		return { name: trimmed };
	});
}
function mapAppToMarketplaceApp(app, options) {
	const tags = app.tags ?? [];
	const isOwned = app.teamId === options.organizationId;
	const author = options.authorOverride ?? (app.teamId ? options.teamNamesById?.[app.teamId] ?? "Community" : "Community");
	return {
		$id: app.$id,
		name: app.name,
		slug: app.$id,
		description: app.description?.trim() || app.tagline?.trim() || app.name,
		shortDescription: app.tagline?.trim() || app.description?.trim() || app.name,
		category: resolveCategory(tags),
		author: isOwned ? "Your organization" : author,
		creators: resolveCreators(app.contacts ?? []),
		featured: hasTag(tags, "featured"),
		isOfficial: hasTag(tags, "official"),
		isVerified: hasTag(tags, "verified"),
		isOwned,
		status: app.enabled ? "published" : "draft",
		tags,
		$createdAt: app.$createdAt,
		$updatedAt: app.$updatedAt,
		logoUri: app.logoUri || void 0,
		clientUri: app.clientUri || void 0,
		redirectUris: app.redirectUris ?? [],
		postLogoutRedirectUris: app.postLogoutRedirectUris ?? [],
		privacyPolicyUrl: app.privacyPolicyUrl || void 0,
		termsUrl: app.termsUrl || void 0,
		supportUrl: app.supportUrl || void 0,
		dataDeletionUrl: app.dataDeletionUrl || void 0,
		images: app.images ?? [],
		contacts: app.contacts ?? [],
		type: app.type || void 0,
		deviceFlow: app.deviceFlow,
		teamId: app.teamId || void 0
	};
}
function mapAppsToMarketplaceApps(apps, options) {
	return apps.map((app) => mapAppToMarketplaceApp(app, options));
}
const MARKETPLACE_APPS_LIMIT = 100;
async function fetchOrganizationAppsRaw(organizationId) {
	if (!organizationId) return {
		apps: [],
		total: 0
	};
	const response = await sdk.forConsole.apps.list({
		queries: [
			Query.equal("teamId", organizationId),
			Query.orderDesc("$createdAt"),
			Query.limit(100)
		],
		total: true
	});
	return {
		apps: response.apps ?? [],
		total: response.total ?? 0
	};
}
async function fetchMarketplaceCatalogAppsRaw(organizationId) {
	if (!organizationId) return {
		apps: [],
		total: 0
	};
	const apps = ((await sdk.forConsole.apps.list({
		queries: [
			Query.contains("labels", "official"),
			Query.equal("enabled", true),
			Query.orderDesc("$createdAt"),
			Query.limit(100)
		],
		total: true
	})).apps ?? []).filter((app) => app.teamId !== organizationId);
	return {
		apps,
		total: apps.length
	};
}
function sanitizeAppId$1(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "-").replace(/^[^a-z0-9]+/, "").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, 36);
}
function defaultMarketplaceRedirectUri() {
	if (typeof window === "undefined") return "https://cloud.appwrite.io/oauth2/consent";
	return `${window.location.origin}/oauth2/consent`;
}
async function fetchOrganizationApp(appId) {
	if (!appId) throw new Error("App ID is required");
	return await sdk.forConsole.apps.get({ appId });
}
async function fetchOrganizationAppSecrets(appId) {
	if (!appId) throw new Error("App ID is required");
	return (await sdk.forConsole.apps.listSecrets({ appId })).secrets ?? [];
}
function organizationAppQueryOptions(appId) {
	return queryOptions({
		queryKey: ["app", appId],
		queryFn: () => fetchOrganizationApp(appId),
		enabled: !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: appId ? 300 * 1e3 : 0
	});
}
function organizationAppSecretsQueryOptions(appId) {
	return queryOptions({
		queryKey: [
			"app",
			appId,
			"secrets"
		],
		queryFn: () => fetchOrganizationAppSecrets(appId),
		enabled: !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: appId ? 300 * 1e3 : 0
	});
}
function organizationAppsQueryOptions(organizationId) {
	return queryOptions({
		queryKey: [
			"apps",
			"organization",
			organizationId
		],
		queryFn: () => fetchOrganizationAppsRaw(organizationId),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function marketplaceCatalogQueryOptions(organizationId) {
	return queryOptions({
		queryKey: [
			"apps",
			"marketplace",
			"catalog",
			organizationId
		],
		queryFn: () => fetchMarketplaceCatalogAppsRaw(organizationId),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function mapListedApps(apps, organizationId, teamNamesById) {
	return mapAppsToMarketplaceApps(apps, {
		organizationId,
		teamNamesById
	});
}
function useOrganizationApps(organizationId, teamNamesById) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(organizationAppsQueryOptions(organizationId));
	return {
		apps: useMemo(() => data?.apps ? mapListedApps(data.apps, organizationId, teamNamesById) : [], [
			data?.apps,
			organizationId,
			teamNamesById
		]),
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMarketplaceCatalog(organizationId, teamNamesById) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(marketplaceCatalogQueryOptions(organizationId));
	const apps = useMemo(() => data?.apps ? mapListedApps(data.apps, organizationId, teamNamesById) : [], [
		data?.apps,
		organizationId,
		teamNamesById
	]);
	return {
		apps,
		total: data?.total ?? apps.length,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useOrganizationApp(appId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(organizationAppQueryOptions(appId));
	return {
		app: data,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useOrganizationAppSecrets(appId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(organizationAppSecretsQueryOptions(appId));
	return {
		secrets: data ?? [],
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useCreateOrganizationApp(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			if (!organizationId) throw new Error("Organization ID is required");
			const appId = input.slug?.trim() ? sanitizeAppId$1(input.slug) || ID.unique() : ID.unique();
			const description = (input.description || input.shortDescription || input.name).trim();
			const tagline = (input.shortDescription || input.name).trim();
			const tags = input.category ? [input.category] : void 0;
			return await sdk.forConsole.apps.create({
				appId,
				name: input.name.trim(),
				redirectUris: [input.redirectUri?.trim() || defaultMarketplaceRedirectUri()],
				description,
				tagline,
				tags,
				teamId: organizationId,
				enabled: input.enabled ?? false,
				type: "confidential"
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"apps",
				"organization",
				organizationId
			] });
		}
	});
}
function useUpdateOrganizationApp(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			return await sdk.forConsole.apps.update({
				appId: input.appId,
				name: input.name,
				enabled: input.enabled,
				description: input.description,
				tagline: input.tagline,
				tags: input.tags,
				clientUri: input.clientUri,
				logoUri: input.logoUri,
				privacyPolicyUrl: input.privacyPolicyUrl,
				termsUrl: input.termsUrl,
				contacts: input.contacts,
				images: input.images,
				supportUrl: input.supportUrl,
				dataDeletionUrl: input.dataDeletionUrl,
				redirectUris: input.redirectUris,
				postLogoutRedirectUris: input.postLogoutRedirectUris,
				type: input.type,
				deviceFlow: input.deviceFlow
			});
		},
		onSuccess: async (app) => {
			queryClient.setQueryData(["app", app.$id], app);
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"apps",
				"organization",
				organizationId
			] }), queryClient.refetchQueries({ queryKey: [
				"apps",
				"marketplace",
				"catalog",
				organizationId
			] })]);
		}
	});
}
function useCreateOrganizationAppSecret(appId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (options) => {
			const id = options?.appId || appId;
			if (!id) throw new Error("App ID is required");
			return await sdk.forConsole.apps.createSecret({ appId: id });
		},
		onSuccess: async (_data, options) => {
			const id = options?.appId || appId;
			await queryClient.refetchQueries({ queryKey: [
				"app",
				id,
				"secrets"
			] });
		}
	});
}
function useDeleteOrganizationAppSecret(appId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (secretId) => {
			if (!appId) throw new Error("App ID is required");
			await sdk.forConsole.apps.deleteSecret({
				appId,
				secretId
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"app",
				appId,
				"secrets"
			] });
		}
	});
}
function useDeleteOrganizationApp(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (appId) => {
			await sdk.forConsole.apps.delete({ appId });
		},
		onSuccess: async (_, appId) => {
			queryClient.removeQueries({ queryKey: ["app", appId] });
			await queryClient.refetchQueries({ queryKey: [
				"apps",
				"organization",
				organizationId
			] });
		}
	});
}
const PROJECT_OAUTH2_APPS_LIMIT = 100;
function sanitizeAppId(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "-").replace(/^[^a-z0-9]+/, "").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, 36);
}
async function fetchProjectOAuth2Apps(projectId, region) {
	if (!projectId) return {
		apps: [],
		total: 0
	};
	const response = await sdk.forProject(projectId, region).apps.list({
		queries: [Query.orderDesc("$createdAt"), Query.limit(100)],
		total: true
	});
	return {
		apps: response.apps ?? [],
		total: response.total ?? 0
	};
}
async function fetchProjectOAuth2App(projectId, appId, region) {
	return sdk.forProject(projectId, region).apps.get({ appId });
}
async function fetchProjectOAuth2AppSecrets(projectId, appId, region) {
	return (await sdk.forProject(projectId, region).apps.listSecrets({ appId })).secrets ?? [];
}
function projectOAuth2AppsQueryOptions(projectId, region) {
	return queryOptions({
		queryKey: [
			"oauth2-apps",
			"project",
			projectId,
			region
		],
		queryFn: () => fetchProjectOAuth2Apps(projectId, region),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function projectOAuth2AppQueryOptions(projectId, appId, region) {
	return queryOptions({
		queryKey: [
			"oauth2-app",
			"project",
			projectId,
			appId,
			region
		],
		queryFn: () => fetchProjectOAuth2App(projectId, appId, region),
		enabled: !!projectId && !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && appId ? 300 * 1e3 : 0
	});
}
function projectOAuth2AppSecretsQueryOptions(projectId, appId, region) {
	return queryOptions({
		queryKey: [
			"oauth2-app",
			"project",
			projectId,
			appId,
			"secrets",
			region
		],
		queryFn: () => fetchProjectOAuth2AppSecrets(projectId, appId, region),
		enabled: !!projectId && !!appId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && appId ? 300 * 1e3 : 0
	});
}
function useProjectOAuth2Apps(projectId, region) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(projectOAuth2AppsQueryOptions(projectId, region));
	return {
		apps: data?.apps ?? [],
		total: data?.total ?? 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProjectOAuth2App(projectId, appId, region) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(projectOAuth2AppQueryOptions(projectId, appId, region));
	return {
		app: data ?? null,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProjectOAuth2AppSecrets(projectId, appId, region) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(projectOAuth2AppSecretsQueryOptions(projectId, appId, region));
	return {
		secrets: data ?? [],
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useCreateProjectOAuth2App(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			const appId = input.appId?.trim() ? sanitizeAppId(input.appId) || ID.unique() : ID.unique();
			const redirectUris = input.redirectUris.map((uri) => uri.trim()).filter(Boolean);
			if (redirectUris.length === 0) throw new Error("At least one redirect URI is required.");
			const trimOptional = (value) => {
				const next = value?.trim();
				return next ? next : void 0;
			};
			const trimList = (values) => values?.map((value) => value.trim()).filter(Boolean);
			return sdk.forProject(projectId, region).apps.create({
				appId,
				name: input.name.trim(),
				redirectUris,
				postLogoutRedirectUris: trimList(input.postLogoutRedirectUris),
				type: input.type ?? "confidential",
				deviceFlow: input.deviceFlow ?? false,
				description: trimOptional(input.description),
				tagline: trimOptional(input.tagline),
				tags: trimList(input.tags),
				enabled: input.enabled ?? true,
				clientUri: trimOptional(input.clientUri),
				logoUri: trimOptional(input.logoUri),
				privacyPolicyUrl: trimOptional(input.privacyPolicyUrl),
				termsUrl: trimOptional(input.termsUrl),
				contacts: trimList(input.contacts),
				images: trimList(input.images),
				supportUrl: trimOptional(input.supportUrl),
				dataDeletionUrl: trimOptional(input.dataDeletionUrl)
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-apps",
				"project",
				projectId
			] });
		}
	});
}
function useUpdateProjectOAuth2App(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			return sdk.forProject(projectId, region).apps.update({
				appId: input.appId,
				name: input.name.trim(),
				description: input.description,
				clientUri: input.clientUri,
				logoUri: input.logoUri,
				privacyPolicyUrl: input.privacyPolicyUrl,
				termsUrl: input.termsUrl,
				contacts: input.contacts,
				tagline: input.tagline,
				tags: input.tags,
				images: input.images,
				supportUrl: input.supportUrl,
				dataDeletionUrl: input.dataDeletionUrl,
				enabled: input.enabled,
				redirectUris: input.redirectUris,
				postLogoutRedirectUris: input.postLogoutRedirectUris,
				type: input.type,
				deviceFlow: input.deviceFlow
			});
		},
		onSuccess: async (app, variables) => {
			queryClient.setQueryData([
				"oauth2-app",
				"project",
				projectId,
				variables.appId,
				region
			], app);
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-apps",
				"project",
				projectId
			] });
			await queryClient.invalidateQueries({ queryKey: [
				"oauth2-app",
				"project",
				projectId,
				variables.appId
			] });
		}
	});
}
function useDeleteProjectOAuth2App(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (appId) => {
			await sdk.forProject(projectId, region).apps.delete({ appId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-apps",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteProjectOAuth2AppTokens(projectId, region) {
	return useMutation({ mutationFn: async (appId) => {
		await sdk.forProject(projectId, region).apps.deleteTokens({ appId });
	} });
}
function useCreateProjectOAuth2AppSecret(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (appId) => {
			return sdk.forProject(projectId, region).apps.createSecret({ appId });
		},
		onSuccess: async (_data, appId) => {
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-app",
				"project",
				projectId,
				appId,
				"secrets"
			] });
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-apps",
				"project",
				projectId
			] });
		}
	});
}
function useDeleteProjectOAuth2AppSecret(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ appId, secretId }) => {
			await sdk.forProject(projectId, region).apps.deleteSecret({
				appId,
				secretId
			});
		},
		onSuccess: async (_data, { appId }) => {
			await queryClient.refetchQueries({ queryKey: [
				"oauth2-app",
				"project",
				projectId,
				appId,
				"secrets"
			] });
		}
	});
}
var PROJECT_SCOPES_GC_TIME = 3600 * 1e3;
async function fetchConsoleProjectScopes() {
	return await sdk.forConsole.console.listProjectScopes();
}
function consoleProjectScopesQueryOptions() {
	return queryOptions({
		queryKey: ["console", "project-scopes"],
		queryFn: fetchConsoleProjectScopes,
		staleTime: LONG_STALE_TIME,
		gcTime: PROJECT_SCOPES_GC_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useConsoleProjectScopes() {
	return useQuery(consoleProjectScopesQueryOptions());
}
async function fetchEmailTemplate(projectId, type, locale) {
	if (!projectId) throw new Error("Project ID is required");
	return await sdk.forProject(projectId).project.getEmailTemplate({
		templateId: type,
		locale
	});
}
async function fetchDefaultEmailTemplate(type, locale) {
	return await sdk.forConsole.console.getEmailTemplate({
		templateId: type,
		locale
	});
}
async function resetProjectEmailTemplate(projectId, type, locale) {
	const defaultTemplate = await fetchDefaultEmailTemplate(type, locale);
	return await sdk.forProject(projectId).project.updateEmailTemplate({
		templateId: type,
		locale,
		subject: defaultTemplate.subject ?? "",
		message: defaultTemplate.message ?? "",
		senderName: defaultTemplate.senderName ?? "",
		senderEmail: defaultTemplate.senderEmail ?? "",
		replyToEmail: defaultTemplate.replyToEmail ?? "",
		replyToName: defaultTemplate.replyToName ?? ""
	});
}
function useEmailTemplate(projectId, type, locale) {
	useQueryClient();
	return useQuery({
		queryKey: [
			"emailTemplate",
			projectId,
			type,
			locale
		],
		queryFn: () => fetchEmailTemplate(projectId, type, locale),
		enabled: !!projectId && !!type && !!locale,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false
	});
}
function useUpdateEmailTemplate(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ type, locale, subject, message, senderName, senderEmail, replyToEmail, replyToName }) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updateEmailTemplate({
				templateId: type,
				locale,
				subject,
				message,
				senderName,
				senderEmail,
				replyToEmail,
				replyToName
			});
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: [
				"emailTemplate",
				projectId,
				variables.type,
				variables.locale
			] });
		}
	});
}
function useResetEmailTemplate(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ type, locale }) => {
			if (!projectId) throw new Error("Project ID is required");
			return await resetProjectEmailTemplate(projectId, type, locale);
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: [
				"emailTemplate",
				projectId,
				variables.type,
				variables.locale
			] });
		}
	});
}
const useDeleteEmailTemplate = useResetEmailTemplate;
async function fetchProjectWebhooks(projectId) {
	if (!projectId) return {
		webhooks: [],
		total: 0
	};
	const response = await sdk.forProject(projectId).webhooks.list();
	return {
		webhooks: response.webhooks || [],
		total: response.total || 0
	};
}
async function fetchProjectWebhook(projectId, webhookId) {
	if (!projectId || !webhookId) throw new Error("Project ID and Webhook ID are required");
	return await sdk.forProject(projectId).webhooks.get({ webhookId });
}
function webhooksQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"webhooks",
			"project",
			projectId
		],
		queryFn: () => fetchProjectWebhooks(projectId),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectWebhooks(projectId) {
	const { data, isLoading, error, refetch } = useQuery(webhooksQueryOptions(projectId));
	return {
		webhooks: data?.webhooks || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useProjectWebhook(projectId, webhookId) {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: [
			"webhook",
			"project",
			projectId,
			webhookId
		],
		queryFn: () => fetchProjectWebhook(projectId, webhookId),
		enabled: !!projectId && !!webhookId,
		staleTime: DEFAULT_STALE_TIME
	});
	return {
		webhook: data || null,
		isLoading,
		error,
		refetch
	};
}
function useCreateWebhook(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).webhooks.create({
				webhookId: ID.unique(),
				name: data.name,
				events: data.events,
				url: data.url,
				tls: data.tls,
				enabled: data.enabled ?? true,
				authUsername: data.authUsername,
				authPassword: data.authPassword
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"webhooks",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.WEBHOOKS });
		}
	});
}
function useUpdateWebhook(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).webhooks.update({
				webhookId: data.webhookId,
				name: data.name,
				events: data.events,
				url: data.url,
				tls: data.tls,
				enabled: data.enabled,
				authUsername: data.authUsername,
				authPassword: data.authPassword
			});
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: [
				"webhooks",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"webhook",
				"project",
				projectId,
				variables.webhookId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.WEBHOOKS });
			queryClient.invalidateQueries({ queryKey: Dependencies.WEBHOOK });
		}
	});
}
function useUpdateWebhookSecret(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			if (!projectId) throw new Error("Project ID is required");
			const webhookId = typeof input === "string" ? input : input.webhookId;
			const secret = typeof input === "string" ? void 0 : input.secret?.trim() || void 0;
			return await sdk.forProject(projectId).webhooks.updateSecret({
				webhookId,
				secret
			});
		},
		onSuccess: (_, input) => {
			const webhookId = typeof input === "string" ? input : input.webhookId;
			queryClient.invalidateQueries({ queryKey: [
				"webhook",
				"project",
				projectId,
				webhookId
			] });
			queryClient.invalidateQueries({ queryKey: [
				"webhooks",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.WEBHOOK });
		}
	});
}
function useDeleteWebhook(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (webhookId) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).webhooks.delete({ webhookId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"webhooks",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.WEBHOOKS });
		}
	});
}
const REQUESTS_EVENT_METRICS = ["network.requests"];
function formatRequestsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatRequestsValue(count) {
	return formatCompactCount(count, { compact: true });
}
async function fetchProjectRequestsOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricsOverview(projectId, dateRange, REQUESTS_EVENT_METRICS, interval, void 0, void 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints,
		topEndpoints: overview.topEndpoints
	};
}
async function fetchProjectRequestsChartOverview(projectId, dateRange, interval = "1h", queries, logRetentionHours) {
	const overview = await fetchProjectUsageChartOverview(projectId, dateRange, REQUESTS_EVENT_METRICS, interval, queries, logRetentionHours);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
const FIREWALL_TRAFFIC_EVENT_METRICS = [
	...REQUESTS_EVENT_METRICS,
	"waf.requests.denied",
	"waf.requests.challenged",
	"waf.requests.rateLimited",
	"waf.requests.redirected",
	"waf.requests.challengeSolved",
	"waf.challenge.solveTimeMs"
];
const FIREWALL_DENIED_METRIC = "waf.requests.denied";
const FIREWALL_RATE_LIMITED_METRIC = "waf.requests.rateLimited";
const FIREWALL_REDIRECTED_METRIC = "waf.requests.redirected";
const FIREWALL_CHALLENGE_SOLVED_METRIC = "waf.requests.challengeSolved";
const FIREWALL_CHALLENGE_SOLVE_TIME_METRIC = "waf.challenge.solveTimeMs";
const FIREWALL_REQUESTS_METRIC = REQUESTS_EVENT_METRICS[0];
function changeFor(currentPoints, previousPoints) {
	const total = sumUsageChartPoints(currentPoints);
	return {
		total,
		change: computeChangePercent(total, sumUsageChartPoints(previousPoints))
	};
}
function mergeFirewallTrafficPoints(requests, denied, challenged, rateLimited, redirected) {
	const base = requests.length > 0 ? requests : denied.length > 0 ? denied : challenged.length > 0 ? challenged : rateLimited.length > 0 ? rateLimited : redirected;
	const deniedByTime = new Map(denied.map((point) => [point.day.getTime(), point.total]));
	const challengedByTime = new Map(challenged.map((point) => [point.day.getTime(), point.total]));
	const rateLimitedByTime = new Map(rateLimited.map((point) => [point.day.getTime(), point.total]));
	const redirectedByTime = new Map(redirected.map((point) => [point.day.getTime(), point.total]));
	const requestsByTime = new Map(requests.map((point) => [point.day.getTime(), point.total]));
	return base.map((point) => {
		const time = point.day.getTime();
		return {
			date: point.date,
			day: point.day,
			fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
			requests: requestsByTime.get(time) ?? (base === requests ? point.total : 0),
			denied: deniedByTime.get(time) ?? (base === denied ? point.total : 0),
			challenged: challengedByTime.get(time) ?? (base === challenged ? point.total : 0),
			rateLimited: rateLimitedByTime.get(time) ?? (base === rateLimited ? point.total : 0),
			redirected: redirectedByTime.get(time) ?? (base === redirected ? point.total : 0)
		};
	});
}
async function fetchProjectFirewallTrafficOverview(projectId, dateRange, interval = "1h", logRetentionHours = 720) {
	if (!projectId) return emptyFirewallTrafficOverview();
	const seriesByMetric = await fetchUsageMetricsChartSeriesByMetric(projectId, FIREWALL_TRAFFIC_EVENT_METRICS, dateRange, interval, void 0, logRetentionHours);
	const requestsSeries = seriesByMetric.get(FIREWALL_REQUESTS_METRIC) ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const deniedSeries = seriesByMetric.get("waf.requests.denied") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const challengedSeries = seriesByMetric.get("waf.requests.challenged") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const rateLimitedSeries = seriesByMetric.get("waf.requests.rateLimited") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const redirectedSeries = seriesByMetric.get("waf.requests.redirected") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const challengeSolvedSeries = seriesByMetric.get("waf.requests.challengeSolved") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const solveTimeSeries = seriesByMetric.get("waf.challenge.solveTimeMs") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const passed = changeFor(requestsSeries.chartPoints, requestsSeries.previousChartPoints);
	const denied = changeFor(deniedSeries.chartPoints, deniedSeries.previousChartPoints);
	const challenged = changeFor(challengedSeries.chartPoints, challengedSeries.previousChartPoints);
	const rateLimited = changeFor(rateLimitedSeries.chartPoints, rateLimitedSeries.previousChartPoints);
	const redirected = changeFor(redirectedSeries.chartPoints, redirectedSeries.previousChartPoints);
	const challengeSolved = changeFor(challengeSolvedSeries.chartPoints, challengeSolvedSeries.previousChartPoints);
	const solveTimeTotal = sumUsageChartPoints(solveTimeSeries.chartPoints);
	const previousSolveTimeTotal = sumUsageChartPoints(solveTimeSeries.previousChartPoints);
	const previousChallengeSolved = sumUsageChartPoints(challengeSolvedSeries.previousChartPoints);
	const avgSolveTimeMs = challengeSolved.total > 0 ? solveTimeTotal / challengeSolved.total : 0;
	const previousAvgSolveTimeMs = previousChallengeSolved > 0 ? previousSolveTimeTotal / previousChallengeSolved : 0;
	const totalRequests = passed.total + denied.total + challenged.total + rateLimited.total + redirected.total;
	const previousTotalRequests = sumUsageChartPoints(requestsSeries.previousChartPoints) + sumUsageChartPoints(deniedSeries.previousChartPoints) + sumUsageChartPoints(challengedSeries.previousChartPoints) + sumUsageChartPoints(rateLimitedSeries.previousChartPoints) + sumUsageChartPoints(redirectedSeries.previousChartPoints);
	const previousBlocked = sumUsageChartPoints(deniedSeries.previousChartPoints) + sumUsageChartPoints(rateLimitedSeries.previousChartPoints);
	const currentBlocked = denied.total + rateLimited.total;
	const previousBlockRate = previousTotalRequests > 0 ? previousBlocked / previousTotalRequests * 100 : 0;
	const currentBlockRate = totalRequests > 0 ? currentBlocked / totalRequests * 100 : 0;
	return {
		totalRequests,
		totalPassed: passed.total,
		totalDenied: denied.total,
		totalChallenged: challenged.total,
		totalRateLimited: rateLimited.total,
		totalRedirected: redirected.total,
		totalChallengeSolved: challengeSolved.total,
		avgSolveTimeMs,
		requestsChange: computeChangePercent(totalRequests, previousTotalRequests),
		passedChange: passed.change,
		deniedChange: denied.change,
		challengedChange: challenged.change,
		rateLimitedChange: rateLimited.change,
		redirectedChange: redirected.change,
		challengeSolvedChange: challengeSolved.change,
		avgSolveTimeChange: computeChangePercent(avgSolveTimeMs, previousAvgSolveTimeMs),
		blockRateChange: computeChangePercent(currentBlockRate, previousBlockRate),
		chartPoints: mergeFirewallTrafficPoints(requestsSeries.chartPoints, deniedSeries.chartPoints, challengedSeries.chartPoints, rateLimitedSeries.chartPoints, redirectedSeries.chartPoints)
	};
}
function emptyFirewallTrafficOverview() {
	return {
		totalRequests: 0,
		totalPassed: 0,
		totalDenied: 0,
		totalChallenged: 0,
		totalRateLimited: 0,
		totalRedirected: 0,
		totalChallengeSolved: 0,
		avgSolveTimeMs: 0,
		requestsChange: 0,
		passedChange: 0,
		deniedChange: 0,
		challengedChange: 0,
		rateLimitedChange: 0,
		redirectedChange: 0,
		challengeSolvedChange: 0,
		avgSolveTimeChange: 0,
		blockRateChange: 0,
		chartPoints: []
	};
}
const FIREWALL_ACTION_METRIC = {
	[WafRuleAction.Deny]: {
		metric: FIREWALL_DENIED_METRIC,
		label: "Denied"
	},
	[WafRuleAction.RateLimit]: {
		metric: FIREWALL_RATE_LIMITED_METRIC,
		label: "Rate limited"
	},
	[WafRuleAction.Redirect]: {
		metric: FIREWALL_REDIRECTED_METRIC,
		label: "Redirected"
	},
	[WafRuleAction.Challenge]: {
		metric: FIREWALL_CHALLENGE_SOLVED_METRIC,
		label: "Challenge solves"
	}
};
function getFirewallActionMetric(action) {
	return action ? FIREWALL_ACTION_METRIC[action] : void 0;
}
const FIREWALL_RESOURCE_TYPES = [
	{
		value: "api",
		label: "API"
	},
	{
		value: "functions",
		label: "Functions"
	},
	{
		value: "sites",
		label: "Sites"
	}
];
function isFirewallResourceType(value) {
	return value === "api" || value === "functions" || value === "sites";
}
function parseFirewallResourceTypeSearch(value) {
	return isFirewallResourceType(value) ? value : void 0;
}
function parseFirewallResourceIdSearch(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
function resolveFirewallListSearch(search) {
	const resourceType = parseFirewallResourceTypeSearch(search.resourceType) ?? "api";
	const resourceId = parseFirewallResourceIdSearch(search.resourceId);
	if (resourceType === "api") return { resourceType: "api" };
	if (!resourceId) return { resourceType: "api" };
	return {
		resourceType,
		resourceId
	};
}
const FIREWALL_CONDITION_ATTRIBUTE_GROUPS = [
	{
		label: "Request",
		attributes: [
			{
				value: "host",
				label: "Hostname"
			},
			{
				value: "path",
				label: "Path"
			},
			{
				value: "method",
				label: "Method"
			},
			{
				value: "headers",
				label: "Header"
			},
			{
				value: "query",
				label: "Query parameter"
			}
		]
	},
	{
		label: "Client",
		attributes: [
			{
				value: "ip",
				label: "IP address"
			},
			{
				value: "os",
				label: "Operating system"
			},
			{
				value: "browser",
				label: "Browser"
			},
			{
				value: "userAgent",
				label: "User agent"
			}
		]
	},
	{
		label: "Location",
		attributes: [
			{
				value: "country",
				label: "Country"
			},
			{
				value: "continent",
				label: "Continent"
			},
			{
				value: "city",
				label: "City"
			},
			{
				value: "state",
				label: "State"
			}
		]
	}
];
const FIREWALL_CONDITION_ATTRIBUTES = FIREWALL_CONDITION_ATTRIBUTE_GROUPS.flatMap((group) => group.attributes);
const FIREWALL_PREMIUM_ATTRIBUTES = new Set(["city", "state"]);
function isPremiumAttribute(attribute) {
	return FIREWALL_PREMIUM_ATTRIBUTES.has(attribute);
}
var DYNAMIC_KEY_PREFIXES = {
	headers: "headers.",
	query: "query."
};
function isDynamicKeyAttribute(attribute) {
	return attribute in DYNAMIC_KEY_PREFIXES;
}
function normalizeConditionKey(attribute, key) {
	let normalized = key.trim().toLowerCase();
	const prefix = DYNAMIC_KEY_PREFIXES[attribute];
	if (normalized.startsWith(prefix)) normalized = normalized.slice(prefix.length);
	return normalized;
}
function resolveConditionAttribute(draft) {
	if (!isDynamicKeyAttribute(draft.attribute)) return draft.attribute;
	const key = normalizeConditionKey(draft.attribute, draft.key ?? "");
	return key ? `${DYNAMIC_KEY_PREFIXES[draft.attribute]}${key}` : null;
}
const FIREWALL_CONDITION_OPERATORS = [
	{
		value: "equal",
		label: "Equals"
	},
	{
		value: "notEqual",
		label: "Not equal"
	},
	{
		value: "contains",
		label: "Contains"
	},
	{
		value: "notContains",
		label: "Does not contain"
	},
	{
		value: "startsWith",
		label: "Starts with"
	},
	{
		value: "endsWith",
		label: "Ends with"
	},
	{
		value: "isNull",
		label: "Is empty",
		noValue: true
	},
	{
		value: "isNotNull",
		label: "Is not empty",
		noValue: true
	}
];
var NO_VALUE_OPERATORS = new Set(["isNull", "isNotNull"]);
var TEXT_MATCH_OPERATORS = new Set([
	"contains",
	"notContains",
	"startsWith",
	"endsWith"
]);
function isNoValueOperator(operator) {
	return NO_VALUE_OPERATORS.has(operator);
}
function isTextMatchOperator(operator) {
	return TEXT_MATCH_OPERATORS.has(operator);
}
const FIREWALL_HTTP_METHODS = [
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE",
	"OPTIONS",
	"HEAD"
];
var FREE_TEXT_OPERATORS = [
	"equal",
	"notEqual",
	"contains",
	"startsWith",
	"endsWith",
	"isNull",
	"isNotNull"
];
var OPERATORS_BY_ATTRIBUTE = {
	ip: FREE_TEXT_OPERATORS,
	host: FREE_TEXT_OPERATORS,
	path: FREE_TEXT_OPERATORS,
	headers: FREE_TEXT_OPERATORS,
	query: FREE_TEXT_OPERATORS,
	city: FREE_TEXT_OPERATORS,
	state: FREE_TEXT_OPERATORS,
	os: FREE_TEXT_OPERATORS,
	browser: FREE_TEXT_OPERATORS,
	userAgent: FREE_TEXT_OPERATORS,
	method: [
		"equal",
		"notEqual",
		"isNull",
		"isNotNull"
	],
	country: [
		"equal",
		"notEqual",
		"contains",
		"notContains"
	],
	continent: [
		"equal",
		"notEqual",
		"contains",
		"notContains"
	]
};
function getOperatorsForAttribute(attribute) {
	const allowed = new Set(OPERATORS_BY_ATTRIBUTE[attribute]);
	return FIREWALL_CONDITION_OPERATORS.filter((op) => allowed.has(op.value));
}
function isOperatorAllowedForAttribute(attribute, operator) {
	return getOperatorsForAttribute(attribute).some((op) => op.value === operator);
}
function createEmptyConditionDraft() {
	return {
		id: `cond_${Math.random().toString(36).slice(2, 10)}`,
		attribute: "path",
		operator: "equal",
		value: ""
	};
}
function isConditionDraftComplete(draft) {
	if (resolveConditionAttribute(draft) == null) return false;
	return isNoValueOperator(draft.operator) || draft.value.trim().length > 0;
}
function areFirewallConditionsComplete(drafts) {
	return drafts.every(isConditionDraftComplete);
}
var UPPERCASE_VALUE_ATTRIBUTES = new Set(["country", "continent"]);
function buildQueryString(draft) {
	const attribute = resolveConditionAttribute(draft);
	if (!attribute) return null;
	if (isNoValueOperator(draft.operator)) return draft.operator === "isNotNull" ? Query.isNotNull(attribute) : Query.isNull(attribute);
	const raw = draft.value.trim();
	if (!raw) return null;
	const value = UPPERCASE_VALUE_ATTRIBUTES.has(draft.attribute) ? raw.toUpperCase() : raw;
	switch (draft.operator) {
		case "equal": return Query.equal(attribute, value);
		case "notEqual": return Query.notEqual(attribute, value);
		case "contains": return Query.contains(attribute, value);
		case "notContains": return Query.notContains(attribute, value);
		case "startsWith": return Query.startsWith(attribute, value);
		case "endsWith": return Query.endsWith(attribute, value);
		default: return Query.equal(attribute, value);
	}
}
function serializeFirewallConditions(drafts) {
	return drafts.map(buildQueryString).filter((value) => Boolean(value));
}
function parseFirewallConditions(conditions) {
	return (Array.isArray(conditions) ? conditions : typeof conditions === "string" ? (() => {
		try {
			const parsed = JSON.parse(conditions);
			return Array.isArray(parsed) ? parsed : [conditions];
		} catch {
			return [conditions];
		}
	})() : conditions && typeof conditions === "object" ? Object.values(conditions) : []).map((item) => {
		if (typeof item === "string") try {
			const parsed = JSON.parse(item);
			if (!parsed.method || !parsed.attribute) return null;
			return {
				attribute: parsed.attribute,
				operator: parsed.method,
				values: (parsed.values ?? []).map(String)
			};
		} catch {
			return {
				attribute: "condition",
				operator: "equal",
				values: [item]
			};
		}
		if (item && typeof item === "object") {
			const record = item;
			const attribute = String(record.attribute ?? record.field ?? record.key ?? "condition");
			const operator = String(record.method ?? record.operator ?? "equal");
			const valuesRaw = record.values ?? record.value;
			return {
				attribute,
				operator,
				values: Array.isArray(valuesRaw) ? valuesRaw.map(String) : valuesRaw != null ? [String(valuesRaw)] : []
			};
		}
		return null;
	}).filter((item) => item != null);
}
function draftsFromParsedConditions(parsed) {
	if (parsed.length === 0) return [createEmptyConditionDraft()];
	return parsed.map((item) => {
		const dynamic = splitDynamicAttribute(item.attribute);
		const attribute = dynamic?.attribute ?? (FIREWALL_CONDITION_ATTRIBUTES.some((a) => a.value === item.attribute) ? item.attribute : "ip");
		const operator = FIREWALL_CONDITION_OPERATORS.some((o) => o.value === item.operator) && isOperatorAllowedForAttribute(attribute, item.operator) ? item.operator : "equal";
		const rawValue = item.values[0] ?? "";
		const value = UPPERCASE_VALUE_ATTRIBUTES.has(attribute) ? rawValue.toUpperCase() : rawValue;
		return {
			id: `cond_${Math.random().toString(36).slice(2, 10)}`,
			attribute,
			operator,
			value,
			key: dynamic?.key
		};
	});
}
function splitDynamicAttribute(attribute) {
	for (const [dynamicAttribute, prefix] of Object.entries(DYNAMIC_KEY_PREFIXES)) if (attribute.startsWith(prefix) && attribute.length > prefix.length) return {
		attribute: dynamicAttribute,
		key: attribute.slice(prefix.length)
	};
	return null;
}
function formatConditionSummary(condition) {
	const dynamic = splitDynamicAttribute(condition.attribute);
	const attr = dynamic ? `${FIREWALL_CONDITION_ATTRIBUTES.find((a) => a.value === dynamic.attribute)?.label ?? dynamic.attribute} "${dynamic.key}"` : FIREWALL_CONDITION_ATTRIBUTES.find((a) => a.value === condition.attribute)?.label ?? condition.attribute;
	const op = FIREWALL_CONDITION_OPERATORS.find((o) => o.value === condition.operator)?.label ?? condition.operator;
	const value = condition.values.join(", ");
	return value ? `${attr} ${op} ${value}` : `${attr} ${op}`;
}
var USAGE_RESOURCE_TYPE = {
	api: null,
	functions: "function",
	sites: "site"
};
function toUsageAttribute(attribute) {
	switch (attribute) {
		case "ip":
		case "path":
		case "method":
		case "country":
		case "city": return attribute;
		case "host": return "hostname";
		case "os": return "osName";
		case "browser":
		case "userAgent": return "clientName";
		default: return null;
	}
}
function toFirewallConditionAttribute(attribute) {
	switch (attribute) {
		case "ip":
		case "path":
		case "method":
		case "country":
		case "city": return attribute;
		case "hostname": return "host";
		case "osName": return "os";
		case "clientName": return "browser";
		default: return null;
	}
}
function isFirewallConditionOperator(operator) {
	return FIREWALL_CONDITION_OPERATORS.some((op) => op.value === operator);
}
function compactFilterValue(key) {
	if (key.v == null) return "";
	if (Array.isArray(key.v)) return String(key.v[0] ?? "");
	return String(key.v);
}
function canApplyUsageFiltersAsFirewallRule(filterMap) {
	if (filterMap.size === 0) return false;
	for (const key of filterMap.keys()) {
		const attribute = toFirewallConditionAttribute(String(key.c));
		if (!attribute) return false;
		if (!isFirewallConditionOperator(key.o)) return false;
		if (!isOperatorAllowedForAttribute(attribute, key.o)) return false;
		if (!isNoValueOperator(key.o) && compactFilterValue(key).trim().length === 0) return false;
	}
	return true;
}
function draftsFromUsageFilterMap(filterMap) {
	if (!canApplyUsageFiltersAsFirewallRule(filterMap)) return null;
	return Array.from(filterMap.keys()).map((key) => {
		const attribute = toFirewallConditionAttribute(String(key.c));
		const operator = key.o;
		const rawValue = compactFilterValue(key).trim();
		const value = attribute === "country" ? rawValue.toUpperCase() : rawValue;
		return {
			id: `cond_${Math.random().toString(36).slice(2, 10)}`,
			attribute,
			operator,
			value
		};
	});
}
var UNESTIMABLE_OPERATORS = new Set(["notContains"]);
function isUnestimableFirewallCondition(draft) {
	return toUsageAttribute(draft.attribute) == null || UNESTIMABLE_OPERATORS.has(draft.operator);
}
function countUnestimableFirewallConditions(conditions) {
	return conditions.filter((draft) => isConditionDraftComplete(draft) && isUnestimableFirewallCondition(draft)).length;
}
function exceedsFirewallUsageConditionLimit(conditions) {
	return conditions.filter((draft) => isConditionDraftComplete(draft) && !isUnestimableFirewallCondition(draft)).length > 8;
}
function buildFirewallConditionUsageQueries(conditions) {
	const queries = [];
	for (const draft of conditions) {
		const attribute = toUsageAttribute(draft.attribute);
		if (!attribute) continue;
		if (UNESTIMABLE_OPERATORS.has(draft.operator)) continue;
		if (isNoValueOperator(draft.operator)) queries.push(draft.operator === "isNotNull" ? Query.isNotNull(attribute) : Query.isNull(attribute));
		else {
			const value = draft.value.trim();
			if (value.length === 0) continue;
			switch (draft.operator) {
				case "notEqual":
					queries.push(Query.notEqual(attribute, value));
					break;
				case "contains":
					queries.push(Query.contains(attribute, value));
					break;
				case "startsWith":
					queries.push(Query.startsWith(attribute, value));
					break;
				case "endsWith":
					queries.push(Query.endsWith(attribute, value));
					break;
				case "equal":
				default:
					queries.push(Query.equal(attribute, value));
					break;
			}
		}
		if (queries.length >= 8) break;
	}
	return queries;
}
function buildFirewallResourceUsageQueries(resourceType, resourceId) {
	const queries = [];
	const usageResourceType = USAGE_RESOURCE_TYPE[resourceType];
	if (usageResourceType) queries.push(Query.equal("resourceType", usageResourceType));
	const id = resourceId?.trim();
	if (id && resourceType !== "api") queries.push(Query.equal("resourceId", id));
	return queries;
}
function buildFirewallUsageQueries(options) {
	const resourceQueries = buildFirewallResourceUsageQueries(options.resourceType, options.resourceId);
	if (options.includeConditions === false) return resourceQueries;
	return [...resourceQueries, ...buildFirewallConditionUsageQueries(options.conditions)];
}
function buildFirewallUsageConditionSnapshots(conditions) {
	const snapshots = [];
	for (const draft of conditions) {
		const value = draft.value.trim();
		if (value.length === 0 && !isNoValueOperator(draft.operator)) continue;
		snapshots.push({
			attribute: draft.attribute,
			operator: draft.operator,
			value
		});
	}
	return snapshots;
}
function firewallUsageConditionsKey(conditions) {
	return JSON.stringify(buildFirewallUsageConditionSnapshots(conditions));
}
function draftsFromUsageConditionSnapshots(snapshots) {
	return snapshots.map((snapshot, index) => ({
		id: `impact_${index}`,
		attribute: snapshot.attribute,
		operator: snapshot.operator,
		value: snapshot.value
	}));
}
function buildActionActivitySeries(countPoints, solveTimePoints) {
	const solveTimeByTime = new Map((solveTimePoints ?? []).map((point) => [point.day.getTime(), point.total]));
	return countPoints.map((point) => {
		const value = point.total;
		const base = {
			date: point.date,
			day: point.day,
			fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
			value
		};
		if (solveTimePoints) {
			const solveTimeTotal = solveTimeByTime.get(point.day.getTime()) ?? 0;
			base.avgSolveTimeMs = value > 0 ? solveTimeTotal / value : 0;
		}
		return base;
	});
}
function formatFirewallSolveTime(ms) {
	if (ms <= 0) return "0ms";
	if (ms >= 1e3) return `${(ms / 1e3).toFixed(1)}s`;
	return `${Math.round(ms)}ms`;
}
function mergeImpactSeries(totalPoints, matchedPoints) {
	const matchedByTime = new Map(matchedPoints.map((point) => [point.day.getTime(), point.total]));
	return totalPoints.map((point) => {
		const matched = matchedByTime.get(point.day.getTime()) ?? 0;
		return {
			date: point.date,
			day: point.day,
			fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
			total: point.total,
			matched: Math.min(point.total, matched)
		};
	});
}
async function fetchFirewallRuleImpact(projectId, options) {
	const to = options.dateRange?.to ?? /* @__PURE__ */ new Date();
	const from = options.dateRange?.from ?? subHours(to, 24);
	const dateRange = {
		from,
		to
	};
	const chartInterval = options.chartInterval ?? "1h";
	const logRetentionHours = options.logRetentionHours;
	const hasConditionFilters = buildFirewallConditionUsageQueries(options.conditions).length > 0;
	const totalQueries = buildFirewallUsageQueries({
		conditions: options.conditions,
		resourceType: options.resourceType,
		resourceId: options.resourceId,
		includeConditions: false
	});
	const matchedQueries = buildFirewallUsageQueries({
		conditions: options.conditions,
		resourceType: options.resourceType,
		resourceId: options.resourceId,
		includeConditions: true
	});
	const activityConfig = options.action === WafRuleAction.Challenge && options.resourceType === "sites" ? getFirewallActionMetric(options.action) : void 0;
	const activityMetrics = activityConfig ? [activityConfig.metric, FIREWALL_CHALLENGE_SOLVE_TIME_METRIC] : [];
	const [totalOverview, matchedOverview, activitySeries] = await Promise.all([
		fetchProjectRequestsChartOverview(projectId, dateRange, chartInterval, totalQueries.length > 0 ? totalQueries : void 0, logRetentionHours),
		hasConditionFilters ? fetchProjectRequestsChartOverview(projectId, dateRange, chartInterval, matchedQueries, logRetentionHours) : Promise.resolve(null),
		activityConfig ? fetchUsageMetricsChartSeriesByMetric(projectId, activityMetrics, dateRange, chartInterval, totalQueries.length > 0 ? totalQueries : void 0, logRetentionHours) : Promise.resolve(null)
	]);
	let activity;
	if (activitySeries && activityConfig && options.action) {
		const countPoints = activitySeries.get(activityConfig.metric)?.chartPoints ?? [];
		const total$1 = sumUsageChartPoints(countPoints);
		const solveTimePoints = activitySeries.get("waf.challenge.solveTimeMs")?.chartPoints ?? [];
		const solveTimeTotal = sumUsageChartPoints(solveTimePoints);
		activity = {
			action: options.action,
			total: total$1,
			avgSolveTimeMs: total$1 > 0 ? solveTimeTotal / total$1 : 0,
			series: buildActionActivitySeries(countPoints, solveTimePoints)
		};
	}
	const matchedChart = matchedOverview ?? totalOverview;
	const series = mergeImpactSeries(totalOverview.chartPoints, matchedChart.chartPoints);
	const total = sumUsageChartPoints(totalOverview.chartPoints);
	const matched = hasConditionFilters ? Math.min(total, sumUsageChartPoints(matchedChart.chartPoints)) : total;
	return {
		series: hasConditionFilters ? series : totalOverview.chartPoints.map((point) => ({
			date: point.date,
			day: point.day,
			fullDate: formatLocalizedDate(point.day, "MMM d, yyyy HH:mm"),
			total: point.total,
			matched: point.total
		})),
		total,
		matched,
		rate: total > 0 ? matched / total : 0,
		dateRange: {
			from,
			to
		},
		activity
	};
}
function conditionsPayload(conditions) {
	if (!conditions || conditions.length === 0) return void 0;
	return conditions;
}
async function fetchFirewallRules(projectId, page = 0, limit = 10, search, resourceType, resourceId) {
	if (!projectId) return {
		rules: [],
		total: 0
	};
	const queries = [
		Query.orderDesc("priority"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	if (resourceType) queries.unshift(Query.equal("resourceType", resourceType));
	const normalizedResourceId = resourceId?.trim();
	if (normalizedResourceId && resourceType && resourceType !== "api") queries.unshift(Query.equal("resourceId", normalizedResourceId));
	const response = await sdk.forProject(projectId).waf.listRules({
		queries,
		search: search?.trim() || void 0,
		total: true
	});
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
async function fetchFirewallRule(projectId, ruleId) {
	if (!projectId || !ruleId) throw new Error("Project ID and rule ID are required");
	return await sdk.forProject(projectId).waf.getRule({ ruleId });
}
function firewallRulesQueryOptions(projectId, page = 0, limit = 10, search, resourceType, resourceId) {
	const normalizedSearch = search?.trim() || void 0;
	const normalizedResourceId = resourceId?.trim() || void 0;
	return queryOptions({
		queryKey: [
			"firewall-rules",
			"project",
			projectId,
			page,
			limit,
			normalizedSearch,
			resourceType ?? null,
			normalizedResourceId ?? null
		],
		queryFn: () => fetchFirewallRules(projectId, page, limit, normalizedSearch, resourceType, normalizedResourceId),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useFirewallRules(projectId, page = 0, limit = 10, search, resourceType, resourceId) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(firewallRulesQueryOptions(projectId, page, limit, search, resourceType, resourceId));
	return {
		rules: data?.rules || [],
		total: data?.total || 0,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
async function createFirewallRule(projectId, input) {
	const waf = sdk.forProject(projectId).waf;
	const base = {
		ruleId: input.ruleId?.trim() || ID.unique(),
		resourceType: input.resourceType,
		name: input.name,
		resourceId: input.resourceId?.trim() || void 0,
		description: input.description?.trim() || void 0,
		priority: input.priority,
		enabled: input.enabled ?? true,
		conditions: conditionsPayload(input.conditions)
	};
	switch (input.action) {
		case WafRuleAction.Bypass: return waf.createBypassRule(base);
		case WafRuleAction.Deny: return waf.createDenyRule(base);
		case WafRuleAction.Challenge: return waf.createChallengeRule({
			...base,
			challengeType: input.challengeType?.trim() || void 0,
			difficulty: input.difficulty,
			ttl: input.ttl
		});
		case WafRuleAction.RateLimit: return waf.createRateLimitRule({
			...base,
			limit: input.limit ?? 100,
			interval: input.interval ?? 60,
			key: input.key,
			strategy: input.strategy,
			maxBucketSize: input.strategy === "tokenBucket" ? input.maxBucketSize : void 0
		});
		case WafRuleAction.Redirect: return waf.createRedirectRule({
			...base,
			location: input.location?.trim() || "/",
			statusCode: input.statusCode ?? 302
		});
		default: throw new Error(`Unsupported firewall action: ${input.action}`);
	}
}
async function updateFirewallRule(projectId, input) {
	const waf = sdk.forProject(projectId).waf;
	const base = {
		ruleId: input.ruleId,
		resourceType: input.resourceType,
		resourceId: input.resourceId,
		name: input.name,
		description: input.description,
		priority: input.priority,
		enabled: input.enabled,
		conditions: conditionsPayload(input.conditions)
	};
	switch (input.action) {
		case WafRuleAction.Bypass: return waf.updateBypassRule(base);
		case WafRuleAction.Deny: return waf.updateDenyRule(base);
		case WafRuleAction.Challenge: return waf.updateChallengeRule({
			...base,
			challengeType: input.challengeType,
			difficulty: input.difficulty,
			ttl: input.ttl
		});
		case WafRuleAction.RateLimit: return waf.updateRateLimitRule({
			...base,
			limit: input.limit,
			interval: input.interval,
			key: input.key,
			maxBucketSize: input.strategy === "tokenBucket" ? input.maxBucketSize : void 0
		});
		case WafRuleAction.Redirect: return waf.updateRedirectRule({
			...base,
			location: input.location,
			statusCode: input.statusCode
		});
		default: throw new Error(`Unsupported firewall action: ${input.action}`);
	}
}
function useCreateFirewallRule(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			if (!projectId) throw new Error("Project ID is required");
			return createFirewallRule(projectId, input);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"firewall-rules",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.FIREWALL_RULES });
		}
	});
}
function useUpdateFirewallRule(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			if (!projectId) throw new Error("Project ID is required");
			return updateFirewallRule(projectId, input);
		},
		onSuccess: async (_data, variables) => {
			await queryClient.refetchQueries({ queryKey: [
				"firewall-rules",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.FIREWALL_RULES });
			queryClient.invalidateQueries({ queryKey: [
				"firewall-rule",
				"project",
				projectId,
				variables.ruleId
			] });
		}
	});
}
function useDeleteFirewallRule(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (ruleId) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).waf.deleteRule({ ruleId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"firewall-rules",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.FIREWALL_RULES });
		}
	});
}
function firewallRuleImpactQueryOptions(projectId, conditions, resourceType, resourceId, dateRange, chartInterval, logRetentionHours, action) {
	const normalizedResourceId = resourceId?.trim() || void 0;
	const conditionSnapshots = buildFirewallUsageConditionSnapshots(conditions);
	const from = dateRange?.from?.toISOString();
	const to = dateRange?.to?.toISOString();
	return queryOptions({
		queryKey: [
			"firewall-impact",
			"project",
			projectId,
			resourceType,
			normalizedResourceId ?? "",
			conditionSnapshots,
			from ?? "",
			to ?? "",
			chartInterval ?? "",
			logRetentionHours ?? null,
			action ?? ""
		],
		queryFn: ({ queryKey }) => {
			const [, , impactProjectId, impactResourceType, impactResourceId, impactConditions, impactFrom, impactTo, impactChartInterval, impactLogRetentionHours, impactAction] = queryKey;
			return fetchFirewallRuleImpact(String(impactProjectId), {
				conditions: draftsFromUsageConditionSnapshots(impactConditions),
				resourceType: impactResourceType,
				resourceId: impactResourceId ? String(impactResourceId) : void 0,
				dateRange: impactFrom ? {
					from: new Date(String(impactFrom)),
					to: impactTo ? new Date(String(impactTo)) : void 0
				} : void 0,
				chartInterval: impactChartInterval ? impactChartInterval : void 0,
				logRetentionHours: typeof impactLogRetentionHours === "number" ? impactLogRetentionHours : void 0,
				action: impactAction ? impactAction : void 0
			});
		},
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useFirewallRuleImpact(projectId, conditions, resourceType, resourceId, dateRange, chartInterval, logRetentionHours, action) {
	const { data, isLoading, isFetching, error } = useQuery(firewallRuleImpactQueryOptions(projectId, conditions, resourceType, resourceId, dateRange, chartInterval, logRetentionHours, action));
	return {
		impact: data,
		isLoading,
		isFetching,
		error
	};
}
function getMigrationTableRef(migration) {
	const resourceId = migration.resourceId?.trim() ?? "";
	const parentResourceId = migration.parentResourceId?.trim() ?? "";
	if (parentResourceId && resourceId && !parentResourceId.includes(":") && !resourceId.includes(":")) return {
		databaseId: parentResourceId,
		tableId: resourceId
	};
	const idx = resourceId.indexOf(":");
	if (idx > 0) return {
		databaseId: resourceId.slice(0, idx),
		tableId: resourceId.slice(idx + 1)
	};
	return null;
}
function migrationMatchesDatabaseTables(migration, databaseId, tableIds) {
	const ref = getMigrationTableRef(migration);
	if (!ref) return false;
	return ref.databaseId === databaseId && tableIds.has(ref.tableId);
}
function projectMigrationsQueryOptions(projectId, region) {
	return queryOptions({
		queryKey: [
			"migrations",
			"project",
			projectId,
			region
		],
		queryFn: () => fetchProjectMigrations(projectId, region),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnMount: false
	});
}
async function fetchProjectMigrations(projectId, region) {
	if (!projectId) return {
		migrations: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId, region);
	const queries = [
		Query.equal("source", [
			"Appwrite",
			"Firebase",
			"NHost",
			"Supabase"
		]),
		Query.or([Query.equal("destination", [
			"Appwrite",
			"Firebase",
			"NHost",
			"Supabase"
		]), Query.isNull("destination")]),
		Query.orderDesc("$createdAt")
	];
	const response = await projectSdk.migrations.list({ queries });
	return {
		migrations: response.migrations || [],
		total: response.total || 0
	};
}
async function fetchCsvExportMigrations(projectId) {
	if (!projectId) return { migrations: [] };
	return { migrations: (await sdk.forProject(projectId).migrations.list({ queries: [
		Query.equal("destination", "CSV"),
		Query.orderDesc("$updatedAt"),
		Query.limit(20)
	] })).migrations || [] };
}
async function fetchCsvImportMigrations(projectId) {
	if (!projectId) return { migrations: [] };
	return { migrations: (await sdk.forProject(projectId).migrations.list({ queries: [
		Query.equal("source", "CSV"),
		Query.orderDesc("$updatedAt"),
		Query.limit(20)
	] })).migrations || [] };
}
var MIGRATIONS_LIST_LIMIT = 100;
async function fetchDatabaseCsvMigrations(projectId, databaseId, tableIds) {
	if (!projectId || !databaseId) return { migrations: [] };
	const all = (await sdk.forProject(projectId).migrations.list({ queries: [
		Query.or([Query.equal("destination", "CSV"), Query.equal("source", "CSV")]),
		Query.orderDesc("$updatedAt"),
		Query.limit(MIGRATIONS_LIST_LIMIT)
	] })).migrations || [];
	const tableIdSet = new Set(tableIds);
	return { migrations: tableIdSet.size > 0 ? all.filter((m) => migrationMatchesDatabaseTables(m, databaseId, tableIdSet)) : [] };
}
function useProjectMigrations(projectId, region) {
	const { data, isLoading, error, refetch } = useQuery(projectMigrationsQueryOptions(projectId, region));
	return {
		migrations: data?.migrations || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
var IN_PROGRESS_MIGRATION_STATUSES = new Set([
	"pending",
	"processing",
	"uploading",
	"downloading"
]);
function projectMigrationQueryOptions(projectId, region, migrationId, options) {
	const pollWhileInProgress = options?.pollWhileInProgress ?? false;
	return queryOptions({
		queryKey: [
			"migration",
			"project",
			projectId,
			region,
			migrationId
		],
		queryFn: async () => {
			if (!projectId || !migrationId) throw new Error("Project ID and Migration ID are required");
			return await sdk.forProject(projectId, region).migrations.get({ migrationId });
		},
		enabled: !!projectId && !!migrationId,
		staleTime: pollWhileInProgress ? 0 : DEFAULT_STALE_TIME,
		refetchInterval: pollWhileInProgress ? (query) => {
			const status = query.state.data?.status;
			if (status && IN_PROGRESS_MIGRATION_STATUSES.has(status)) return 2e3;
			return false;
		} : false,
		refetchOnWindowFocus: false
	});
}
function useProjectMigration(projectId, region, migrationId, options) {
	const { data, isLoading, error, refetch } = useQuery(projectMigrationQueryOptions(projectId, region, migrationId, options));
	return {
		migration: data || null,
		isLoading,
		error,
		refetch
	};
}
function useCsvExportMigrations(projectId, sessionExportIds) {
	const hasSessionIds = sessionExportIds.length > 0;
	const { data, refetch } = useQuery({
		queryKey: [
			"migrations",
			"project",
			projectId,
			"csv-export",
			sessionExportIds
		],
		queryFn: async () => {
			const result = await fetchCsvExportMigrations(projectId);
			const set = new Set(sessionExportIds);
			return { migrations: (result.migrations || []).filter((m) => set.has(m.$id)) };
		},
		enabled: !!projectId && hasSessionIds,
		staleTime: 30 * 1e3,
		refetchOnWindowFocus: false
	});
	return {
		migrations: data?.migrations ?? [],
		refetch
	};
}
function useCsvImportMigrations(projectId, sessionImportIds) {
	const hasSessionIds = sessionImportIds.length > 0;
	const { data, refetch } = useQuery({
		queryKey: [
			"migrations",
			"project",
			projectId,
			"csv-import",
			sessionImportIds
		],
		queryFn: async () => {
			const result = await fetchCsvImportMigrations(projectId);
			const set = new Set(sessionImportIds);
			return { migrations: (result.migrations || []).filter((m) => set.has(m.$id)) };
		},
		enabled: !!projectId && hasSessionIds,
		staleTime: 30 * 1e3,
		refetchOnWindowFocus: false
	});
	return {
		migrations: data?.migrations ?? [],
		refetch
	};
}
function databaseCsvMigrationsQueryOptions(projectId, databaseId, tableIds) {
	const sortedTableIds = tableIds.slice().sort();
	return queryOptions({
		queryKey: [
			"migrations",
			"project",
			projectId,
			"database",
			databaseId,
			"csv",
			sortedTableIds
		],
		queryFn: () => fetchDatabaseCsvMigrations(projectId, databaseId, sortedTableIds),
		enabled: !!projectId && !!databaseId && sortedTableIds.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useDatabaseCsvMigrations(projectId, databaseId, tableIds) {
	const { data, isLoading, refetch } = useQuery(databaseCsvMigrationsQueryOptions(projectId, databaseId, tableIds));
	return {
		migrations: data?.migrations ?? [],
		isLoading,
		refetch
	};
}
function useCreateCSVExport(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).migrations.createCSVExport({
				databaseId: params.databaseId,
				collectionId: params.collectionId,
				filename: params.filename,
				columns: params.columns,
				queries: params.queries ?? [],
				delimiter: params.delimiter ?? ",",
				header: params.header ?? true,
				notify: params.notify ?? true
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
function useCreateCSVImport(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).migrations.createCSVImport({
				bucketId: params.bucketId,
				fileId: params.fileId,
				databaseId: params.databaseId,
				collectionId: params.collectionId,
				internalFile: params.internalFile ?? false,
				onDuplicate: params.onDuplicate
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
const APPWRITE_RESOURCES = [
	AppwriteMigrationResource.User,
	AppwriteMigrationResource.Database,
	AppwriteMigrationResource.Table,
	AppwriteMigrationResource.Column,
	AppwriteMigrationResource.Index,
	AppwriteMigrationResource.Row,
	AppwriteMigrationResource.Document,
	AppwriteMigrationResource.Attribute,
	AppwriteMigrationResource.Collection,
	AppwriteMigrationResource.Bucket,
	AppwriteMigrationResource.File
];
const SUPABASE_NHOST_RESOURCES = [
	SupabaseMigrationResource.User,
	SupabaseMigrationResource.Database,
	SupabaseMigrationResource.Collection,
	SupabaseMigrationResource.Attribute,
	SupabaseMigrationResource.Index,
	SupabaseMigrationResource.Document,
	SupabaseMigrationResource.Bucket,
	SupabaseMigrationResource.File
];
const NHOST_RESOURCES = [
	NHostMigrationResource.User,
	NHostMigrationResource.Database,
	NHostMigrationResource.Collection,
	NHostMigrationResource.Attribute,
	NHostMigrationResource.Index,
	NHostMigrationResource.Document,
	NHostMigrationResource.Bucket,
	NHostMigrationResource.File
];
const FIREBASE_RESOURCES = [
	FirebaseMigrationResource.User,
	FirebaseMigrationResource.Database,
	FirebaseMigrationResource.Collection,
	FirebaseMigrationResource.Attribute,
	FirebaseMigrationResource.Document,
	FirebaseMigrationResource.Bucket,
	FirebaseMigrationResource.File
];
async function fetchAppwriteReport(projectId, params, region) {
	return await sdk.forProject(projectId, region).migrations.getAppwriteReport({
		resources: APPWRITE_RESOURCES,
		endpoint: params.endpoint,
		projectID: params.projectID,
		key: params.key
	});
}
async function fetchSupabaseReport(projectId, params, region) {
	return await sdk.forProject(projectId, region).migrations.getSupabaseReport({
		resources: SUPABASE_NHOST_RESOURCES,
		endpoint: params.endpoint,
		apiKey: params.apiKey,
		databaseHost: params.databaseHost,
		username: params.username,
		password: params.password,
		port: params.port
	});
}
async function fetchFirebaseReport(projectId, params, region) {
	return await sdk.forProject(projectId, region).migrations.getFirebaseReport({
		resources: FIREBASE_RESOURCES,
		serviceAccount: params.serviceAccount
	});
}
async function fetchNHostReport(projectId, params, region) {
	return await sdk.forProject(projectId, region).migrations.getNHostReport({
		resources: NHOST_RESOURCES,
		subdomain: params.subdomain,
		region: params.region,
		adminSecret: params.adminSecret,
		database: params.database ?? params.subdomain,
		username: params.username ?? "postgres",
		password: params.password,
		port: params.port
	});
}
function useCreateAppwriteMigration(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId, region).migrations.createAppwriteMigration({
				resources: params.resources,
				endpoint: params.endpoint,
				projectId: params.projectId,
				apiKey: params.apiKey,
				onDuplicate: params.onDuplicate
			});
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
function useCreateSupabaseMigration(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId, region).migrations.createSupabaseMigration({
				resources: params.resources,
				endpoint: params.endpoint,
				apiKey: params.apiKey,
				databaseHost: params.databaseHost,
				username: params.username,
				password: params.password,
				port: params.port
			});
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
function useCreateFirebaseMigration(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId, region).migrations.createFirebaseMigration({
				resources: params.resources,
				serviceAccount: params.serviceAccount
			});
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
function useCreateNHostMigration(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId, region).migrations.createNHostMigration({
				resources: params.resources,
				subdomain: params.subdomain,
				region: params.region,
				adminSecret: params.adminSecret,
				database: params.database ?? params.subdomain,
				username: params.username ?? "postgres",
				password: params.password,
				port: params.port
			});
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [
				"migrations",
				"project",
				projectId
			] });
		}
	});
}
function isCustomSmtpEnabled(project) {
	return Boolean(project?.smtpEnabled);
}
async function fetchProjectSmtpStatus(projectId) {
	return isCustomSmtpEnabled(await fetchProjectById(projectId));
}
function projectSmtpStatusQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"project",
			projectId,
			"smtp-status"
		],
		queryFn: () => fetchProjectSmtpStatus(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectSmtpEnabled(projectId) {
	const { data: isSmtpEnabled = false, isLoading } = useQuery(projectSmtpStatusQueryOptions(projectId));
	return {
		isSmtpEnabled,
		isLoading
	};
}
async function updateProjectSmtp(projectId, data) {
	return await sdk.forProject(projectId).project.updateSMTP({
		enabled: data.enabled,
		senderName: data.enabled ? data.senderName : void 0,
		senderEmail: data.enabled ? data.senderEmail : void 0,
		replyToEmail: data.enabled ? data.replyTo : void 0,
		host: data.enabled ? data.host : void 0,
		port: data.enabled ? data.port : void 0,
		username: data.enabled ? data.username : void 0,
		password: data.enabled ? data.password : void 0,
		secure: data.enabled ? data.secure === "tls" ? ProjectSMTPSecure.Tls : data.secure === "ssl" ? ProjectSMTPSecure.Ssl : void 0 : void 0
	});
}
async function sendProjectSMTPTest(projectId, emails, smtp) {
	await updateProjectSmtp(projectId, smtp);
	return await sdk.forProject(projectId).project.createSMTPTest({ emails });
}
function invalidateProjectSmtpQueries(queryClient, projectId) {
	queryClient.invalidateQueries({ queryKey: ["project", projectId] });
	queryClient.invalidateQueries({ queryKey: [
		"project",
		projectId,
		"smtp-status"
	] });
	queryClient.invalidateQueries({ queryKey: Dependencies.PROJECT });
}
function useUpdateSMTP(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			return await updateProjectSmtp(projectId, data);
		},
		onSuccess: () => {
			invalidateProjectSmtpQueries(queryClient, projectId);
		}
	});
}
function useTestSMTP(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ emails, smtp }) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sendProjectSMTPTest(projectId, emails, smtp);
		},
		onSuccess: () => {
			invalidateProjectSmtpQueries(queryClient, projectId);
		}
	});
}
async function fetchProjectDomains(projectId, region, search) {
	if (!projectId) return {
		rules: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId, region);
	const queries = [
		Query.equal("type", "api"),
		Query.equal("trigger", "manual"),
		Query.orderDesc("$createdAt")
	];
	const response = await projectSdk.proxy.listRules({
		queries,
		search: search?.trim() || void 0
	});
	return {
		rules: response.rules || [],
		total: response.total || 0
	};
}
function projectDomainsQueryOptions(projectId, region, search) {
	return queryOptions({
		queryKey: [
			"proxy-rules",
			"project",
			projectId,
			region,
			search
		],
		queryFn: () => fetchProjectDomains(projectId, region, search),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectDomains(projectId, region, search) {
	const { data, isLoading, error, refetch } = useQuery(projectDomainsQueryOptions(projectId, region, search));
	return {
		rules: data?.rules || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useCreateDomain(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (domain) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!domain.trim()) throw new Error("Domain is required");
			return await sdk.forProject(projectId, region).proxy.createAPIRule({ domain: domain.toLowerCase().trim() });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"proxy-rules",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.DOMAINS });
		}
	});
}
function useVerifyDomain(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			const ruleId = typeof input === "string" ? input : input.ruleId;
			const organizationDomainId = typeof input === "string" ? void 0 : input.organizationDomainId;
			if (!projectId) throw new Error("Project ID is required");
			if (!ruleId) throw new Error("Rule ID is required");
			if (getActiveProfileId() === "cloud" && organizationDomainId) try {
				await sdk.forConsole.domains.verifyNameservers({ domainId: organizationDomainId });
			} catch {}
			return await sdk.forProject(projectId, region).proxy.updateRuleStatus({ ruleId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"proxy-rules",
				"project",
				projectId
			] });
			queryClient.invalidateQueries({ queryKey: Dependencies.DOMAINS });
		}
	});
}
function useDeleteDomain(projectId, region) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (ruleId) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!ruleId) throw new Error("Rule ID is required");
			return await sdk.forProject(projectId, region).proxy.deleteRule({ ruleId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["proxy-rules"] });
		}
	});
}
var IN_PROGRESS_RESTORATION_STATUSES = [
	"pending",
	"downloading",
	"processing"
];
var RECENT_RESTORATION_STATUSES = [
	...IN_PROGRESS_RESTORATION_STATUSES,
	"completed",
	"failed"
];
var RECENT_RESTORATION_WINDOW_MS = 1440 * 60 * 1e3;
async function fetchBackupPolicies(projectId, databaseId) {
	if (!projectId || !databaseId) return {
		policies: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.equal("resourceType", "database"),
		Query.equal("resourceId", databaseId)
	];
	return await projectSdk.backups.listPolicies({ queries });
}
async function fetchBackupArchives(projectId, databaseId, page = 0, limit = 6) {
	if (!projectId || !databaseId) return {
		archives: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.limit(limit),
		Query.offset(page * limit),
		Query.orderDesc("$createdAt"),
		Query.equal("resourceType", "database"),
		Query.equal("resourceId", databaseId)
	];
	return await projectSdk.backups.listArchives({ queries });
}
function backupPoliciesQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"backup-policies",
			"project",
			projectId,
			"database",
			databaseId
		],
		queryFn: () => fetchBackupPolicies(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function backupArchivesQueryOptions(projectId, databaseId, page = 0, limit = 6) {
	return queryOptions({
		queryKey: [
			"backup-archives",
			"project",
			projectId,
			"database",
			databaseId,
			page,
			limit
		],
		queryFn: () => fetchBackupArchives(projectId, databaseId, page, limit),
		enabled: !!projectId && !!databaseId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useBackupPolicies(projectId, databaseId, options) {
	const queryOpts = backupPoliciesQueryOptions(projectId, databaseId);
	return useQuery({
		...queryOpts,
		enabled: queryOpts.enabled && (options?.enabled ?? true)
	});
}
function useBackupArchives(projectId, databaseId, page = 0, limit = 6, options) {
	const queryOpts = backupArchivesQueryOptions(projectId, databaseId, page, limit);
	return useQuery({
		...queryOpts,
		enabled: queryOpts.enabled && (options?.enabled ?? true)
	});
}
function parseRestorationOptions(restoration) {
	try {
		const raw = restoration.options;
		if (typeof raw === "string") return JSON.parse(raw);
		if (raw && typeof raw === "object") return raw;
	} catch {}
	return null;
}
function getRestorationDatabaseMappings(restoration) {
	const options = parseRestorationOptions(restoration);
	if (!options) return [];
	const databases = options.databases;
	if (!databases || typeof databases !== "object") return [];
	const mappings = databases.database;
	return Array.isArray(mappings) ? mappings : [];
}
function getRestorationDatabaseIds(restoration) {
	const ids = [];
	for (const mapping of getRestorationDatabaseMappings(restoration)) {
		if (typeof mapping?.oldId === "string" && mapping.oldId) ids.push(mapping.oldId);
		if (typeof mapping?.newId === "string" && mapping.newId) ids.push(mapping.newId);
	}
	return ids;
}
function getRestorationDbKind(restoration) {
	const resources = restoration.resources || [];
	if (resources.includes("vectorsdb")) return "vectorsdb";
	if (resources.includes("documentsdb")) return "documentsdb";
	return "tablesdb";
}
function getRestoredDatabaseTarget(restoration) {
	const mapping = getRestorationDatabaseMappings(restoration)[0];
	if (!mapping) return null;
	const newId = typeof mapping.newId === "string" && mapping.newId.trim() ? mapping.newId.trim() : "";
	const oldId = typeof mapping.oldId === "string" && mapping.oldId.trim() ? mapping.oldId.trim() : "";
	const newName = typeof mapping.newName === "string" && mapping.newName.trim() ? mapping.newName.trim() : "";
	const hasDistinctNewId = !!newId && newId !== oldId;
	if (hasDistinctNewId || !!newName) return {
		databaseId: hasDistinctNewId ? newId : "",
		isNew: true,
		name: newName || void 0,
		dbKind: getRestorationDbKind(restoration)
	};
	if (!oldId) return null;
	return {
		databaseId: oldId,
		isNew: false,
		name: newName || void 0,
		dbKind: getRestorationDbKind(restoration)
	};
}
function enrichRestorationTargetOptions(restoration, target) {
	const options = parseRestorationOptions(restoration) ?? {};
	const databases = options.databases && typeof options.databases === "object" ? { ...options.databases } : {};
	const existing = Array.isArray(databases.database) ? [...databases.database] : [];
	const current = existing[0] ?? {};
	const apiNewId = typeof current.newId === "string" && current.newId.trim() ? current.newId.trim() : "";
	const targetNewId = typeof target.newId === "string" && target.newId.trim() ? target.newId.trim() : "";
	const resolvedNewId = (apiNewId && apiNewId !== target.oldId ? apiNewId : "") || (targetNewId && targetNewId !== target.oldId ? targetNewId : "") || "";
	const nextMapping = {
		...current,
		oldId: current.oldId || target.oldId,
		newId: resolvedNewId,
		newName: current.newName || target.newName || ""
	};
	return {
		...restoration,
		options: JSON.stringify({
			...options,
			databases: {
				...databases,
				database: [nextMapping, ...existing.slice(1)]
			}
		})
	};
}
async function fetchRestoredDatabaseIdByName(projectId, dbKind, name) {
	if (!projectId || !name.trim()) return null;
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.equal("name", name.trim()), Query.limit(5)];
	return ((dbKind === "documentsdb" ? await projectSdk.documentsDB.list({ queries }) : dbKind === "vectorsdb" ? await projectSdk.vectorsDB.list({ queries }) : await projectSdk.tablesDB.list({ queries })).databases || []).find((db) => db.name === name.trim())?.$id ?? null;
}
function restorationBelongsToDatabase(restoration, databaseId, databaseArchiveIds) {
	if (getRestorationDatabaseIds(restoration).includes(databaseId)) return true;
	if (restoration.archiveId && databaseArchiveIds.has(restoration.archiveId)) return true;
	return false;
}
function isRecentRestoration(restoration) {
	if (IN_PROGRESS_RESTORATION_STATUSES.includes(restoration.status)) return true;
	const createdAt = Date.parse(restoration.$createdAt || restoration.$updatedAt);
	if (Number.isNaN(createdAt)) return false;
	return Date.now() - createdAt <= RECENT_RESTORATION_WINDOW_MS;
}
async function fetchDatabaseRestoreMigrations(projectId, databaseId) {
	if (!projectId || !databaseId) return [];
	const projectSdk = sdk.forProject(projectId);
	const [restorationsResponse, archivesResponse] = await Promise.all([projectSdk.backups.listRestorations({ queries: [
		Query.equal("status", [...RECENT_RESTORATION_STATUSES]),
		Query.orderDesc("$createdAt"),
		Query.limit(50)
	] }), projectSdk.backups.listArchives({ queries: [
		Query.equal("resourceType", "database"),
		Query.equal("resourceId", databaseId),
		Query.orderDesc("$createdAt"),
		Query.limit(100)
	] })]);
	const databaseArchiveIds = new Set((archivesResponse.archives || []).map((a) => a.$id));
	return (restorationsResponse.restorations || []).filter((restoration) => !!restoration.migrationId && isRecentRestoration(restoration) && restorationBelongsToDatabase(restoration, databaseId, databaseArchiveIds));
}
function databaseRestoreMigrationsQueryOptions(projectId, databaseId) {
	return queryOptions({
		queryKey: [
			"restorations",
			"project",
			projectId,
			"database",
			databaseId,
			"recent-migrations"
		],
		queryFn: () => fetchDatabaseRestoreMigrations(projectId, databaseId),
		enabled: !!projectId && !!databaseId,
		staleTime: 15 * 1e3,
		refetchInterval: (query) => {
			if (query.state.data?.some((r) => IN_PROGRESS_RESTORATION_STATUSES.includes(r.status))) return 5e3;
			return false;
		},
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function useDatabaseRestoreMigrations(projectId, databaseId, options) {
	const queryOpts = databaseRestoreMigrationsQueryOptions(projectId, databaseId);
	return useQuery({
		...queryOpts,
		enabled: queryOpts.enabled && (options?.enabled ?? true)
	});
}
function buildCountryLookups(countries) {
	const codeToName = /* @__PURE__ */ new Map();
	const nameToCode = /* @__PURE__ */ new Map();
	for (const country of countries ?? []) {
		const code = country.code.trim().toUpperCase();
		const name = country.name.trim();
		if (!code || !name || code === "--") continue;
		codeToName.set(code, name);
		nameToCode.set(name.toLowerCase(), code);
	}
	return {
		codeToName,
		nameToCode
	};
}
function normalizeCountryCode(value) {
	const trimmed = value?.trim();
	if (!trimmed || trimmed === "--") return null;
	if (/^[a-z]{2}$/i.test(trimmed)) return trimmed.toUpperCase();
	return null;
}
function resolveCountryCode(label, lookups) {
	const trimmed = label.trim();
	if (!trimmed || trimmed === "--" || trimmed === "Unknown") return null;
	const asCode = normalizeCountryCode(trimmed);
	if (asCode) return asCode;
	return lookups.nameToCode.get(trimmed.toLowerCase()) ?? null;
}
function resolveCountryDisplayName(label, lookups) {
	const code = resolveCountryCode(label, lookups);
	if (code) return lookups.codeToName.get(code) ?? label;
	return label;
}
function getCountryDisplayName(codeOrLabel, lookups) {
	const trimmed = codeOrLabel?.trim();
	if (!trimmed || trimmed === "--") return null;
	if (lookups) {
		const name = resolveCountryDisplayName(trimmed, lookups);
		return name.trim() ? name : null;
	}
	return normalizeCountryCode(trimmed) ?? trimmed;
}
async function fetchLocaleCodes() {
	return await sdk.forConsole.locale.listCodes();
}
async function fetchCountries() {
	return await sdk.forConsole.locale.listCountries();
}
async function fetchContinents() {
	return await sdk.forConsole.locale.listContinents();
}
async function fetchLocale() {
	return await sdk.forConsole.locale.get();
}
function countriesQueryOptions() {
	return queryOptions({
		queryKey: ["countries", "console"],
		queryFn: fetchCountries,
		staleTime: LONG_STALE_TIME
	});
}
function continentsQueryOptions() {
	return queryOptions({
		queryKey: ["continents", "console"],
		queryFn: fetchContinents,
		staleTime: LONG_STALE_TIME
	});
}
function useLocaleCodes() {
	return useQuery({
		queryKey: ["localeCodes", "console"],
		queryFn: fetchLocaleCodes,
		staleTime: LONG_STALE_TIME
	});
}
function useCountries() {
	return useQuery(countriesQueryOptions());
}
function useCountryLookups() {
	const { data, isLoading, isFetched, isError, error, refetch } = useCountries();
	return {
		lookups: useMemo(() => buildCountryLookups(data?.countries), [data?.countries]),
		countries: data?.countries ?? [],
		isLoading,
		isFetched,
		isError,
		error,
		refetch
	};
}
function useContinents() {
	return useQuery(continentsQueryOptions());
}
function localeQueryOptions() {
	return queryOptions({
		queryKey: ["locale", "console"],
		queryFn: fetchLocale,
		staleTime: LONG_STALE_TIME
	});
}
function useLocale() {
	return useQuery(localeQueryOptions());
}
const REPOSITORY_BRANCHES_LIMIT = 100;
async function fetchVcsInstallations(projectId, page = 0, limit = 10) {
	if (!projectId) return {
		installations: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.limit(limit), Query.offset(page * limit)];
	return await projectSdk.vcs.listInstallations({ queries });
}
async function fetchRepository(projectId, installationId, providerRepositoryId) {
	if (!projectId || !installationId || !providerRepositoryId) throw new Error("Project ID, Installation ID, and Repository ID are required");
	return await sdk.forProject(projectId).vcs.getRepository({
		installationId,
		providerRepositoryId
	});
}
async function fetchInstallation(projectId, installationId) {
	if (!projectId || !installationId) throw new Error("Project ID and Installation ID are required");
	return await sdk.forProject(projectId).vcs.getInstallation(installationId);
}
function useInstallation(projectId, installationId) {
	return useQuery({
		queryKey: [
			"vcs",
			"installation",
			projectId,
			installationId
		],
		queryFn: () => fetchInstallation(projectId, installationId),
		enabled: !!projectId && !!installationId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function sortRepositoryBranches(branches) {
	return [...branches].sort((a, b) => {
		if (a.name === "main" || a.name === "master") return -1;
		if (b.name === "main" || b.name === "master") return 1;
		return a.name.localeCompare(b.name);
	});
}
async function fetchRepositoryBranches(projectId, installationId, providerRepositoryId, search) {
	if (!projectId || !installationId || !providerRepositoryId) return {
		branches: [],
		total: 0
	};
	return await sdk.forProject(projectId).vcs.listRepositoryBranches({
		installationId,
		providerRepositoryId,
		search: search?.trim() || void 0,
		queries: [Query.limit(100)]
	});
}
async function resolveConnectBranch(projectId, installationId, providerRepositoryId, currentBranch) {
	let nextBranch = currentBranch || "main";
	if (!projectId || !installationId || !providerRepositoryId) return nextBranch;
	try {
		const projectSdk = sdk.forProject(projectId);
		const all = [];
		let offset = 0;
		while (true) {
			const { branches, total } = await projectSdk.vcs.listRepositoryBranches({
				installationId,
				providerRepositoryId,
				queries: [Query.limit(100), Query.offset(offset)]
			});
			all.push(...branches);
			if (all.length >= total || branches.length < 100) break;
			offset += 100;
		}
		const sorted = sortRepositoryBranches(all);
		nextBranch = sorted.find((branch) => branch.name === currentBranch)?.name ?? sorted.find((branch) => branch.name === "main" || branch.name === "master")?.name ?? sorted[0]?.name ?? nextBranch;
	} catch {}
	return nextBranch;
}
async function fetchRepositories(projectId, installationId, type, page = 0, limit = 5, search, providerNamespace) {
	if (!projectId || !installationId) return {
		frameworkProviderRepositories: [],
		runtimeProviderRepositories: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.limit(limit), Query.offset(page * limit)];
	if (providerNamespace) queries.push(Query.equal("namespace", providerNamespace));
	return await projectSdk.vcs.listRepositories({
		installationId,
		type,
		search: search?.trim() || void 0,
		queries
	});
}
async function fetchNamespaces(projectId, installationId, page = 0, limit = 20, search) {
	if (!projectId || !installationId) return {
		namespaces: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.limit(limit), Query.offset(page * limit)];
	return await projectSdk.vcs.listNamespaces({
		installationId,
		search: search?.trim() || void 0,
		queries
	});
}
function useNamespacesForInstallations(projectId, installations) {
	const queries = useQueries({ queries: installations.map((installation) => ({
		queryKey: [
			"vcs",
			"namespaces",
			projectId,
			installation.$id
		],
		queryFn: () => fetchNamespaces(projectId, installation.$id, 0, 100),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME
	})) });
	const namespacesByInstallation = {};
	installations.forEach((installation, index) => {
		namespacesByInstallation[installation.$id] = queries[index]?.data?.namespaces ?? [];
	});
	return {
		namespacesByInstallation,
		isLoading: queries.some((query) => query.isLoading)
	};
}
function repositoryBranchesQueryOptions(projectId, installationId, providerRepositoryId, search) {
	const normalizedSearch = search?.trim() || void 0;
	return queryOptions({
		queryKey: [
			"vcs",
			"branches",
			projectId,
			installationId,
			providerRepositoryId,
			normalizedSearch
		],
		queryFn: () => fetchRepositoryBranches(projectId, installationId, providerRepositoryId, normalizedSearch),
		enabled: !!projectId && !!installationId && !!providerRepositoryId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function vcsInstallationsQueryOptions(projectId, page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"vcs",
			"installations",
			projectId,
			page,
			limit
		],
		queryFn: () => fetchVcsInstallations(projectId, page, limit),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useVcsInstallations(projectId, page = 0, limit = 10) {
	return useQuery(vcsInstallationsQueryOptions(projectId, page, limit));
}
function useDeleteVcsInstallation(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (installationId) => {
			if (!projectId || !installationId) throw new Error("Project ID and Installation ID are required");
			return await sdk.forProject(projectId).vcs.deleteInstallation({ installationId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"vcs",
				"installations",
				projectId
			] });
		}
	});
}
function useCreateVcsRepository(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).vcs.createRepository({
				installationId: params.installationId,
				name: params.name,
				xprivate: params.xprivate,
				providerNamespace: params.providerNamespace || void 0
			});
		},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: [
				"vcs",
				"repositories",
				projectId,
				variables.installationId
			] });
		}
	});
}
function useRepository(projectId, installationId, providerRepositoryId) {
	return useQuery({
		queryKey: [
			"vcs",
			"repository",
			projectId,
			installationId,
			providerRepositoryId
		],
		queryFn: () => fetchRepository(projectId, installationId, providerRepositoryId),
		enabled: !!projectId && !!installationId && !!providerRepositoryId,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useRepositories(projectId, installationId, type, page = 0, limit = 5, search, providerNamespace) {
	return useQuery({
		queryKey: [
			"vcs",
			"repositories",
			projectId,
			installationId,
			type,
			page,
			limit,
			search,
			providerNamespace
		],
		queryFn: () => fetchRepositories(projectId, installationId, type, page, limit, search, providerNamespace),
		enabled: !!projectId && !!installationId,
		staleTime: DEFAULT_STALE_TIME
	});
}
const MESSAGE_DETAIL_TARGETS_LIMIT = 100;
async function fetchProjectMessages(projectId, page = 0, limit = 10, search) {
	if (!projectId) return {
		messages: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.messaging.listMessages({
		queries,
		search: search?.trim() || void 0
	});
	return {
		messages: response.messages || [],
		total: response.total || 0
	};
}
async function fetchMessage(projectId, messageId) {
	if (!projectId || !messageId) throw new Error("Project ID and Message ID are required");
	return await sdk.forProject(projectId).messaging.getMessage({ messageId });
}
async function fetchMessageTargets(projectId, messageId, page = 0, limit = 10) {
	if (!projectId || !messageId) return {
		targets: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [Query.limit(limit), Query.offset(page * limit)];
	const response = await projectSdk.messaging.listTargets({
		messageId,
		queries
	});
	return {
		targets: response.targets || [],
		total: response.total || 0
	};
}
async function fetchProjectTopics(projectId, page = 0, limit = 10, search) {
	if (!projectId) return {
		topics: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.messaging.listTopics({ queries });
	return {
		topics: response.topics || [],
		total: response.total || 0
	};
}
async function fetchTopic(projectId, topicId) {
	if (!projectId || !topicId) throw new Error("Project ID and Topic ID are required");
	return await sdk.forProject(projectId).messaging.getTopic({ topicId });
}
async function fetchTopicSubscribers(projectId, topicId, page = 0, limit = 10, search) {
	if (!projectId || !topicId) return {
		subscribers: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.messaging.listSubscribers({
		topicId,
		queries,
		search: search?.trim() || void 0
	});
	return {
		subscribers: response.subscribers || [],
		total: response.total || 0
	};
}
async function fetchProjectProviders(projectId, page = 0, limit = 10, search) {
	if (!projectId) return {
		providers: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		...buildAttributePrefixSearchQueries(["name", "$id"], search),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await projectSdk.messaging.listProviders({ queries });
	return {
		providers: response.providers || [],
		total: response.total || 0
	};
}
async function fetchProvider(projectId, providerId) {
	if (!projectId || !providerId) throw new Error("Project ID and Provider ID are required");
	return await sdk.forProject(projectId).messaging.getProvider({ providerId });
}
function messagesQueryOptions(projectId, page = 0, limit = 10, search) {
	const normalizedSearch = search?.trim() || "";
	return queryOptions({
		queryKey: [
			"messages",
			"project",
			projectId,
			page,
			limit,
			normalizedSearch
		],
		queryFn: () => fetchProjectMessages(projectId, page, limit, normalizedSearch || void 0),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function messageQueryOptions(projectId, messageId) {
	return queryOptions({
		queryKey: [
			"message",
			"project",
			projectId,
			messageId
		],
		queryFn: () => fetchMessage(projectId, messageId),
		enabled: !!projectId && !!messageId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && messageId ? 300 * 1e3 : 0
	});
}
function topicsQueryOptions(projectId, page = 0, limit = 10, search) {
	const normalizedSearch = search?.trim() || "";
	return queryOptions({
		queryKey: [
			"topics",
			"project",
			projectId,
			page,
			limit,
			normalizedSearch
		],
		queryFn: () => fetchProjectTopics(projectId, page, limit, normalizedSearch || void 0),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function providersQueryOptions(projectId, page = 0, limit = 10, search) {
	const normalizedSearch = search?.trim() || "";
	return queryOptions({
		queryKey: [
			"providers",
			"project",
			projectId,
			page,
			limit,
			normalizedSearch
		],
		queryFn: () => fetchProjectProviders(projectId, page, limit, normalizedSearch || void 0),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function topicQueryOptions(projectId, topicId) {
	return queryOptions({
		queryKey: [
			"topic",
			"project",
			projectId,
			topicId
		],
		queryFn: () => fetchTopic(projectId, topicId),
		enabled: !!projectId && !!topicId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && topicId ? 300 * 1e3 : 0
	});
}
function providerQueryOptions(projectId, providerId) {
	return queryOptions({
		queryKey: [
			"provider",
			"project",
			projectId,
			providerId
		],
		queryFn: () => fetchProvider(projectId, providerId),
		enabled: !!projectId && !!providerId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId && providerId ? 300 * 1e3 : 0
	});
}
function messageTargetsQueryOptions(projectId, messageId, page = 0, limit = 10) {
	return queryOptions({
		queryKey: [
			"message-targets",
			"project",
			projectId,
			messageId,
			page,
			limit
		],
		queryFn: () => fetchMessageTargets(projectId, messageId, page, limit),
		enabled: !!projectId && !!messageId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && messageId ? 300 * 1e3 : 0
	});
}
async function prefetchMessageDetailData(queryClient, projectId, messageId) {
	const message = await queryClient.ensureQueryData(messageQueryOptions(projectId, messageId));
	await Promise.all([queryClient.ensureQueryData(messageTargetsQueryOptions(projectId, messageId, 0, 100)), queryClient.ensureQueryData(bucketsQueryOptions(projectId, 0, 100, ""))]);
	const targetsOpts = messageTargetsQueryOptions(projectId, messageId, 0, 100);
	const targets = queryClient.getQueryData(targetsOpts.queryKey)?.targets ?? [];
	const topicIds = message.topics ?? [];
	await Promise.all(topicIds.map((tid) => queryClient.ensureQueryData(topicQueryOptions(projectId, tid))));
	const userIds = /* @__PURE__ */ new Set();
	for (const t of targets) if (t.userId) userIds.add(t.userId);
	const messageWithUsers = message;
	if (messageWithUsers.users) for (const uid of messageWithUsers.users) userIds.add(uid);
	await Promise.all([...userIds].map((userId) => queryClient.prefetchQuery({
		queryKey: [
			"user",
			"project",
			projectId,
			userId
		],
		queryFn: async () => {
			try {
				return await fetchUser(projectId, userId);
			} catch {
				return null;
			}
		},
		staleTime: DEFAULT_STALE_TIME
	})));
}
function topicSubscribersQueryOptions(projectId, topicId, page = 0, limit = 10, search) {
	const normalizedSearch = search?.trim() || "";
	return queryOptions({
		queryKey: [
			"subscribers",
			"project",
			projectId,
			"topic",
			topicId,
			page,
			limit,
			normalizedSearch
		],
		queryFn: () => fetchTopicSubscribers(projectId, topicId, page, limit, normalizedSearch || void 0),
		enabled: !!projectId && !!topicId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: projectId && topicId ? 300 * 1e3 : 0
	});
}
function useProjectMessages(projectId, page = 0, limit = 10, search) {
	const { data: messagesData, isLoading, isFetching, error, refetch } = useQuery(messagesQueryOptions(projectId, page, limit, search));
	const messages = useMemo(() => {
		if (!messagesData?.messages) return [];
		return messagesData.messages;
	}, [messagesData]);
	const totalPages = useMemo(() => {
		if (!messagesData?.total) return 0;
		return Math.ceil(messagesData.total / limit);
	}, [messagesData?.total, limit]);
	return {
		messages,
		total: messagesData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useMessage(projectId, messageId, initialMessage) {
	return useQuery({
		...messageQueryOptions(projectId, messageId),
		...initialMessage !== void 0 ? { initialData: initialMessage } : {}
	});
}
function useMessageTargets(projectId, messageId, page = 0, limit = 10) {
	return useQuery(messageTargetsQueryOptions(projectId, messageId, page, limit));
}
function useProjectTopics(projectId, page = 0, limit = 10, search) {
	const { data: topicsData, isLoading, isFetching, error, refetch } = useQuery(topicsQueryOptions(projectId, page, limit, search));
	const topics = useMemo(() => {
		if (!topicsData?.topics) return [];
		return topicsData.topics;
	}, [topicsData]);
	const totalPages = useMemo(() => {
		if (!topicsData?.total) return 0;
		return Math.ceil(topicsData.total / limit);
	}, [topicsData?.total, limit]);
	return {
		topics,
		total: topicsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useTopic(projectId, topicId, initialTopic) {
	return useQuery({
		...topicQueryOptions(projectId, topicId),
		...initialTopic !== void 0 ? { initialData: initialTopic } : {}
	});
}
function useTopicSubscribers(projectId, topicId, page = 0, limit = 10, search) {
	const { data: subscribersData, isLoading, isFetching, isFetched, error, refetch } = useQuery(topicSubscribersQueryOptions(projectId, topicId, page, limit, search));
	const subscribers = useMemo(() => {
		if (!subscribersData?.subscribers) return [];
		return subscribersData.subscribers;
	}, [subscribersData]);
	const totalPages = useMemo(() => {
		if (!subscribersData?.total) return 0;
		return Math.ceil(subscribersData.total / limit);
	}, [subscribersData?.total, limit]);
	return {
		subscribers,
		total: subscribersData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		isFetched,
		error,
		refetch
	};
}
function useProjectProviders(projectId, page = 0, limit = 10, search) {
	const { data: providersData, isLoading, isFetching, error, refetch } = useQuery(providersQueryOptions(projectId, page, limit, search));
	const providers = useMemo(() => {
		if (!providersData?.providers) return [];
		return providersData.providers;
	}, [providersData]);
	const totalPages = useMemo(() => {
		if (!providersData?.total) return 0;
		return Math.ceil(providersData.total / limit);
	}, [providersData?.total, limit]);
	return {
		providers,
		total: providersData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProvider(projectId, providerId, initialProvider) {
	return useQuery({
		...providerQueryOptions(projectId, providerId),
		...initialProvider !== void 0 ? { initialData: initialProvider } : {}
	});
}
const MESSAGING_TARGET_PICKER_PAGE_SIZE = 25;
async function fetchUsersForMessagingTargetPicker(projectId, page = 0, limit = 25, search, providerType) {
	if (!projectId) return {
		users: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	if (providerType === "email") queries.push(Query.notEqual("email", ""));
	else if (providerType === "sms") queries.push(Query.notEqual("phone", ""));
	const response = await projectSdk.users.list({
		queries,
		search: search?.trim() || void 0
	});
	return {
		users: response.users || [],
		total: response.total || 0
	};
}
function messagingTargetPickerUsersQueryOptions(projectId, page, limit, search, providerType) {
	const normalizedSearch = search?.trim() || "";
	return queryOptions({
		queryKey: [
			"messaging-target-picker-users",
			"project",
			projectId,
			page,
			limit,
			normalizedSearch,
			providerType ?? "all"
		],
		queryFn: () => fetchUsersForMessagingTargetPicker(projectId, page, limit, normalizedSearch || void 0, providerType),
		enabled: !!projectId,
		staleTime: 30 * 1e3,
		retry: false
	});
}
async function fetchRegions() {
	return { regions: (await sdk.forConsole.console.listRegions()).regions || [] };
}
function useRegions(enabled = true) {
	const { data: regionsData, isLoading, error, refetch } = useQuery({
		queryKey: ["regions"],
		queryFn: fetchRegions,
		enabled,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false
	});
	return {
		regions: regionsData?.regions || [],
		isLoading,
		error,
		refetch
	};
}
async function fetchConsoleVariables(region) {
	const variables = await (region ? sdk.forConsoleIn(region) : sdk.forConsole).console.variables();
	setBackendUsageStatsAvailability(variables._APP_USAGE_STATS);
	return variables;
}
function consoleVariablesQueryOptions(region) {
	return queryOptions({
		queryKey: ["console-variables", region ?? "default"],
		queryFn: () => fetchConsoleVariables(region),
		staleTime: Infinity,
		gcTime: 3600 * 1e3,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useConsoleVariables(region) {
	const query = useQuery(consoleVariablesQueryOptions(region));
	const vars = query.data;
	return {
		...query,
		cname: vars?._APP_DOMAIN_TARGET_CNAME,
		a: vars?._APP_DOMAIN_TARGET_A,
		aaaa: vars?._APP_DOMAIN_TARGET_AAAA,
		caa: vars?._APP_DOMAIN_TARGET_CAA,
		nameservers: vars?._APP_DOMAINS_NAMESERVERS ? vars._APP_DOMAINS_NAMESERVERS.split(",").map((s) => s.trim()).filter(Boolean) : [],
		sitesDomain: vars?._APP_DOMAIN_SITES,
		functionsDomain: vars?._APP_DOMAIN_FUNCTIONS,
		vcsProvidersWithRepositoryCreation: vars?._APP_VCS_PROVIDERS_WITH_REPOSITORY_CREATION,
		vcsProvidersWithPublicRepositories: vars?._APP_VCS_PROVIDERS_WITH_PUBLIC_REPOSITORIES
	};
}
function getStatusPresentation(state) {
	switch (state) {
		case "downtime": return {
			containerClassName: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-b border-red-600/12 dark:border-red-400/18",
			buttonClassName: "border border-red-500 bg-transparent text-red-600 hover:bg-red-500/10 hover:text-red-700 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500/20 dark:hover:text-red-300",
			title: "Some Appwrite Cloud services are temporarily unavailable."
		};
		case "maintenance": return {
			containerClassName: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-b border-blue-600/12 dark:border-blue-400/18",
			buttonClassName: "border border-blue-500 bg-transparent text-blue-600 hover:bg-blue-500/10 hover:text-blue-700 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500/20 dark:hover:text-blue-300",
			title: "Scheduled maintenance is in progress."
		};
		default: return {
			containerClassName: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-b border-amber-700/14 dark:border-amber-400/22",
			buttonClassName: "border border-amber-500 bg-transparent text-amber-600 hover:bg-amber-500/10 hover:text-amber-700 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-500/20 dark:hover:text-amber-300",
			title: "We’re experiencing issues with some services."
		};
	}
}
function getStatusIcon(state) {
	return state === "maintenance" ? Wrench : AlertTriangle;
}
function getMockReportTitle(state) {
	switch (state) {
		case "downtime": return "You may have trouble accessing some services. We’re working to restore full access.";
		case "maintenance": return "Planned maintenance window in progress.";
		case "operational": return;
		default: return "A subset of Appwrite Cloud services is degraded.";
	}
}
function formatLocalMaintenanceWindow(startsAt, endsAt) {
	if (!startsAt) return;
	const startDate = new Date(startsAt);
	if (Number.isNaN(startDate.getTime())) return;
	const endDate = endsAt ? new Date(endsAt) : void 0;
	const hasValidEndDate = endDate !== void 0 && !Number.isNaN(endDate.getTime());
	const dateFormatter = new Intl.DateTimeFormat(void 0, {
		month: "short",
		day: "numeric"
	});
	const timeFormatter = new Intl.DateTimeFormat(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
	if (!hasValidEndDate) return `Starts ${dateFormatter.format(startDate)} at ${timeFormatter.format(startDate)} local time.`;
	if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate()) return `${dateFormatter.format(startDate)}, ${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)} local time.`;
	return `${dateFormatter.format(startDate)}, ${timeFormatter.format(startDate)} - ${dateFormatter.format(endDate)}, ${timeFormatter.format(endDate)} local time.`;
}
function formatStatusAffectedRegionsLine(allRegionsAffected, regionCodes) {
	if (allRegionsAffected) return "All regions are affected.";
	const codes = regionCodes.filter(Boolean);
	if (codes.length === 0) return;
	if (codes.length === 1) return `Affected region: ${codes[0]}.`;
	return `Affected regions: ${codes.join(", ")}.`;
}
function getStatusBannerParts(state, options) {
	const presentation = getStatusPresentation(state);
	const reportTitle = options?.reportTitle?.trim() || void 0;
	const maintenanceWindow = state === "maintenance" && (options?.startsAt ?? options?.endsAt) ? formatLocalMaintenanceWindow(options.startsAt, options.endsAt) : void 0;
	const regionsLine = options?.regionsLine?.trim() || void 0;
	return {
		title: presentation.title,
		reportTitle,
		maintenanceWindow,
		regionsLine
	};
}
var APPWRITE_CLOUD_STATUS_URL = "https://status.appwrite.online/index.json";
var STATUS_REFRESH_INTERVAL = 60 * 1e3;
const DEFAULT_APPWRITE_CLOUD_SERVICE_NAMES = [
	"Main",
	"Documentation",
	"Console",
	"API",
	"Auth",
	"Databases",
	"Functions",
	"Sites",
	"Storage",
	"Messaging",
	"MCP",
	"Support",
	"DNS ns1.appwrite.zone",
	"DNS ns2.appwrite.zone"
];
const STATUS_BANNER_EXCLUDED_SERVICE_NAMES = new Set(["Support", "Documentation"]);
function normalizeServiceState(value) {
	switch (value) {
		case "degraded":
		case "downtime":
		case "maintenance":
		case "not_monitored": return value;
		default: return "operational";
	}
}
function getServiceStateWeight(state) {
	switch (state) {
		case "downtime": return 4;
		case "degraded": return 3;
		case "maintenance": return 2;
		case "operational": return 1;
		default: return 0;
	}
}
function getAggregateStateWeight(state) {
	return getServiceStateWeight(state);
}
function computeConsoleAlertState(services) {
	let worst = "operational";
	for (const service of services) {
		if (STATUS_BANNER_EXCLUDED_SERVICE_NAMES.has(service.name)) continue;
		if (service.status === "operational" || service.status === "not_monitored") continue;
		const nextState = service.status;
		if (getAggregateStateWeight(nextState) > getAggregateStateWeight(worst)) worst = nextState;
	}
	return worst;
}
function compareServiceNames(left, right) {
	const leftIndex = DEFAULT_APPWRITE_CLOUD_SERVICE_NAMES.indexOf(left);
	const rightIndex = DEFAULT_APPWRITE_CLOUD_SERVICE_NAMES.indexOf(right);
	if (leftIndex >= 0 && rightIndex >= 0) return leftIndex - rightIndex;
	if (leftIndex >= 0) return -1;
	if (rightIndex >= 0) return 1;
	return left.localeCompare(right);
}
function normalizeAggregateState(value) {
	switch (value) {
		case "degraded":
		case "downtime":
		case "maintenance": return value;
		default: return "operational";
	}
}
function normalizeReportType(value) {
	switch (value) {
		case "automatic":
		case "maintenance": return value;
		default: return "manual";
	}
}
function normalizeReportAggregateState(value) {
	switch (value) {
		case "degraded":
		case "downtime":
		case "maintenance":
		case "resolved":
		case "not_monitored": return value;
		default: return "resolved";
	}
}
function parseTimestamp(value) {
	if (!value) return null;
	const timestamp = Date.parse(value);
	return Number.isNaN(timestamp) ? null : timestamp;
}
var CLOUD_SERVICES_SECTION = /^Cloud services - (.+)$/i;
function buildCloudRegionSectionMap(included) {
	const sectionIdToRegionCode = /* @__PURE__ */ new Map();
	for (const item of included ?? []) {
		if (item.type !== "status_page_section") continue;
		const section = item;
		const name = section.attributes?.name?.trim();
		if (!name) continue;
		const match = name.match(CLOUD_SERVICES_SECTION);
		if (!match) continue;
		const code = match[1].trim();
		const sectionId = Number(section.id);
		if (!Number.isFinite(sectionId)) continue;
		sectionIdToRegionCode.set(sectionId, code);
	}
	return {
		sectionIdToRegionCode,
		allRegionCodes: [...new Set(sectionIdToRegionCode.values())].sort((a, b) => a.localeCompare(b))
	};
}
function buildResourceRegionIndex(included) {
	const resourceById = /* @__PURE__ */ new Map();
	for (const item of included ?? []) {
		if (item.type !== "status_page_resource") continue;
		const resource = item;
		if (resource.id === void 0 || resource.id === null) continue;
		const rawSectionId = resource.attributes?.status_page_section_id;
		if (rawSectionId === void 0 || rawSectionId === null) continue;
		const sectionId = typeof rawSectionId === "number" ? rawSectionId : Number(rawSectionId);
		if (!Number.isFinite(sectionId)) continue;
		resourceById.set(String(resource.id), {
			sectionId,
			status: normalizeServiceState(resource.attributes?.status)
		});
	}
	return resourceById;
}
function regionCodesFromAffectedResources(affected, sectionIdToRegionCode, resourceById) {
	const refs = Array.isArray(affected) ? affected : [];
	const unresolved = refs.filter((r) => r.status !== "resolved");
	const toScan = unresolved.length > 0 ? unresolved : refs;
	const set = /* @__PURE__ */ new Set();
	for (const ref of toScan) {
		const resourceId = ref.status_page_resource_id;
		if (resourceId === void 0 || resourceId === null) continue;
		const res = resourceById.get(String(resourceId));
		if (!res) continue;
		const code = sectionIdToRegionCode.get(res.sectionId);
		if (code) set.add(code);
	}
	return [...set].sort((a, b) => a.localeCompare(b));
}
function regionCodesFromLiveNonOperationalCloud(sectionIdToRegionCode, resourceById) {
	const set = /* @__PURE__ */ new Set();
	for (const res of resourceById.values()) {
		if (res.status === "operational" || res.status === "not_monitored") continue;
		const code = sectionIdToRegionCode.get(res.sectionId);
		if (code) set.add(code);
	}
	return [...set].sort((a, b) => a.localeCompare(b));
}
function emptyAppwriteCloudStatusSummary() {
	return {
		aggregateState: "operational",
		consoleAlertState: "operational",
		services: []
	};
}
function buildStatusRegionsLine(title, affected, sectionIdToRegionCode, allRegionCodes, resourceById) {
	let codes = regionCodesFromAffectedResources(affected, sectionIdToRegionCode, resourceById);
	if (codes.length === 0) codes = regionCodesFromLiveNonOperationalCloud(sectionIdToRegionCode, resourceById);
	const titleSaysAll = /\ball regions\b/i.test(title);
	const coversAll = allRegionCodes.length > 0 && codes.length === allRegionCodes.length && allRegionCodes.every((c) => codes.includes(c));
	return formatStatusAffectedRegionsLine(titleSaysAll || coversAll, codes);
}
function parseAppwriteStatusPayload(payload) {
	const included = Array.isArray(payload.included) ? payload.included : [];
	const aggregateState = normalizeAggregateState(payload.data?.attributes?.aggregate_state);
	const { sectionIdToRegionCode, allRegionCodes } = buildCloudRegionSectionMap(included);
	const resourceById = buildResourceRegionIndex(included);
	const reports = included.filter((item) => item.type === "status_report").map((report) => ({
		title: report.attributes?.title?.trim() || "Ongoing Appwrite Cloud issue",
		reportType: normalizeReportType(report.attributes?.report_type),
		aggregateState: normalizeReportAggregateState(report.attributes?.aggregate_state),
		startsAt: report.attributes?.starts_at,
		endsAt: report.attributes?.ends_at,
		sortStartsAt: report.attributes?.starts_at ? Date.parse(report.attributes.starts_at) : 0,
		affectedResources: Array.isArray(report.attributes?.affected_resources) ? report.attributes.affected_resources : []
	})).sort((left, right) => right.sortStartsAt - left.sortStartsAt);
	const servicesMap = /* @__PURE__ */ new Map();
	included.filter((item) => item.type === "status_page_resource").forEach((resource) => {
		const serviceName = resource.attributes?.public_name?.trim();
		if (!serviceName) return;
		const nextState = normalizeServiceState(resource.attributes?.status);
		const currentState = servicesMap.get(serviceName);
		if (!currentState || getServiceStateWeight(nextState) > getServiceStateWeight(currentState)) servicesMap.set(serviceName, nextState);
	});
	const services = Array.from(servicesMap.entries()).map(([name, status]) => ({
		name,
		status
	})).sort((left, right) => compareServiceNames(left.name, right.name));
	const consoleAlertState = computeConsoleAlertState(services);
	const now = Date.now();
	const activeReports = reports.filter((report) => {
		if (report.aggregateState === "resolved") return false;
		const startsAt = parseTimestamp(report.startsAt);
		const endsAt = parseTimestamp(report.endsAt);
		if (startsAt !== null && startsAt > now) return false;
		if (endsAt !== null && endsAt <= now) return false;
		return true;
	});
	const activeReport = consoleAlertState === "operational" ? void 0 : activeReports.find((report) => report.aggregateState === consoleAlertState) ?? activeReports.find((report) => report.aggregateState !== "maintenance") ?? activeReports[0];
	return {
		aggregateState,
		consoleAlertState,
		regionsLine: consoleAlertState === "operational" ? void 0 : buildStatusRegionsLine(activeReport?.title ?? "", activeReport?.affectedResources, sectionIdToRegionCode, allRegionCodes, resourceById),
		activeReport: activeReport ? {
			title: activeReport.title,
			reportType: activeReport.reportType,
			aggregateState: activeReport.aggregateState,
			startsAt: activeReport.startsAt,
			endsAt: activeReport.endsAt
		} : void 0,
		services
	};
}
async function fetchAppwriteCloudStatus() {
	const response = await fetch(APPWRITE_CLOUD_STATUS_URL);
	if (!response.ok) throw new Error(`Failed to fetch Appwrite Cloud status: ${response.status}`);
	let payload;
	try {
		payload = await response.json();
	} catch {
		return emptyAppwriteCloudStatusSummary();
	}
	if (!payload || typeof payload !== "object") return emptyAppwriteCloudStatusSummary();
	try {
		return parseAppwriteStatusPayload(payload);
	} catch {
		return emptyAppwriteCloudStatusSummary();
	}
}
function appwriteCloudStatusQueryOptions(enabled = true) {
	return queryOptions({
		queryKey: ["status-page", "appwrite-cloud"],
		queryFn: fetchAppwriteCloudStatus,
		enabled,
		meta: { skipInitialLoader: true },
		staleTime: STATUS_REFRESH_INTERVAL,
		gcTime: STATUS_REFRESH_INTERVAL * 5,
		refetchInterval: STATUS_REFRESH_INTERVAL,
		refetchOnWindowFocus: true,
		retry: 1
	});
}
function useAppwriteCloudStatus(enabled = true) {
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);
	return useQuery(appwriteCloudStatusQueryOptions(enabled && hasMounted));
}
var KNOWN_AGENT_LABELS = {
	supervisor: "Supervisor",
	researcher: "Researcher",
	appwrite: "Appwrite",
	worker: "Worker",
	platform: "Platform",
	planner: "Planner",
	FINISH: "Supervisor"
};
function getAssistantAgentLabel(agent) {
	if (!agent) return "Agent";
	const base = KNOWN_AGENT_LABELS[agent] ?? agent;
	const trimmed = String(base).trim();
	if (!trimmed) return "Agent";
	if (/agent$/i.test(trimmed)) return trimmed;
	return `${trimmed} agent`;
}
function isAssistantMessageInFlight(status) {
	const normalized = status?.toLowerCase();
	return normalized === "running" || normalized === "queued" || normalized === "processing" || normalized === "pending";
}
function isAssistantConversationInFlight(conversation) {
	if (!conversation) return false;
	const status = conversation.status?.toLowerCase();
	const lockState = conversation.lockState?.toLowerCase();
	return status === "running" || status === "queued" || lockState === "locked";
}
function getAssistantConversationStatusTone(conversation) {
	if (!conversation) return "ready";
	const status = conversation.status?.toLowerCase() ?? "";
	const lockState = conversation.lockState?.toLowerCase() ?? "";
	if (status === "failed" || status === "error") return "failed";
	if (status === "stopped" || status === "cancelled" || status === "canceled" || status === "archived") return "ready";
	if (status === "queued" || status === "pending") return "queued";
	if (status === "running" || lockState === "locked") return "running";
	return "ready";
}
function getAssistantConversationStatusLabel(tone) {
	switch (tone) {
		case "running": return "Running";
		case "queued": return "Queued";
		case "failed": return "Failed";
		case "stopped": return "Stopped";
		case "ready":
		default: return "Ready";
	}
}
function getAssistantConversationStatusDotClass(tone) {
	switch (tone) {
		case "running": return "bg-blue-500 animate-pulse";
		case "queued": return "bg-amber-500";
		case "failed": return "bg-destructive";
		case "stopped": return "bg-amber-500";
		case "ready":
		default: return "bg-muted-foreground/40";
	}
}
function normalizeTimeline(raw) {
	if (Array.isArray(raw)) return raw.filter((event) => !!event && typeof event === "object" && typeof event.type === "string");
	if (typeof raw === "string" && raw.trim()) try {
		return normalizeTimeline(JSON.parse(raw));
	} catch {
		return [];
	}
	if (raw && typeof raw === "object") {
		const asRecord = raw;
		if (Array.isArray(asRecord.events)) return normalizeTimeline(asRecord.events);
	}
	return [];
}
function parseMaybeJson$1(value) {
	if (typeof value !== "string") return value;
	const trimmed = value.trim();
	if (!trimmed) return value;
	if (!(trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]"))) return value;
	try {
		return JSON.parse(trimmed);
	} catch {
		return value;
	}
}
function toolKey(tool) {
	if (tool.toolCallId) return tool.toolCallId;
	if (tool.id) return tool.id;
	if (tool.$id) return tool.$id;
	return `${tool.agent ?? "agent"}:${tool.name ?? "tool"}:${tool.status ?? "unknown"}`;
}
function isTerminalToolStatus(status) {
	const normalized = status?.toLowerCase();
	return normalized === "success" || normalized === "completed" || normalized === "error" || normalized === "failed" || normalized === "cancelled" || normalized === "canceled";
}
function upsertTool(tools, toolOrder, next, preferredKey) {
	const key = preferredKey || toolKey(next);
	const existing = tools[key];
	if (!existing) tools[key] = next;
	else {
		const merged = { ...existing };
		Object.keys(next).forEach((field) => {
			const value = next[field];
			if (value !== void 0) merged[field] = value;
		});
		tools[key] = merged;
	}
	if (!toolOrder.includes(key)) toolOrder.push(key);
	return key;
}
function findRunningToolKey(tools, toolOrder, agent, name) {
	for (let index = toolOrder.length - 1; index >= 0; index -= 1) {
		const key = toolOrder[index];
		const tool = tools[key];
		if (!tool) continue;
		if (agent && tool.agent && tool.agent !== agent) continue;
		if (name && tool.name !== name) continue;
		if (tool.status?.toLowerCase() === "running") return key;
	}
}
function applyToolDocument(tools, toolOrder, tool) {
	const record = tool;
	const name = typeof record.name === "string" && record.name || typeof record.tool === "string" && record.tool || "tool";
	const toolCallId = typeof record.toolCallId === "string" ? record.toolCallId : void 0;
	const id = typeof record.$id === "string" ? record.$id : typeof record.id === "string" ? record.id : void 0;
	upsertTool(tools, toolOrder, {
		id,
		toolCallId,
		name,
		agent: typeof record.agent === "string" ? record.agent : void 0,
		status: typeof record.status === "string" ? record.status : "running",
		input: record.input !== void 0 ? record.input : record.argumentsJson !== void 0 ? parseMaybeJson$1(record.argumentsJson) : void 0,
		output: record.output !== void 0 && record.output !== "" ? record.output : record.resultJson !== void 0 && record.resultJson !== "" ? parseMaybeJson$1(record.resultJson) : record.resultText !== void 0 && record.resultText !== "" ? record.resultText : void 0,
		errorMessage: typeof record.errorMessage === "string" ? record.errorMessage : void 0
	}, toolCallId || id);
}
function replayTimeline(timeline, seedTools = [], seedRoute) {
	let route = seedRoute;
	let statusLabel;
	let answeringAgent;
	let error;
	const agents = [];
	const tools = {};
	const toolOrder = [];
	for (const event of timeline) switch (event.type) {
		case "status":
			if (typeof event.message === "string" && event.message.trim()) statusLabel = event.message;
			break;
		case "route":
			statusLabel = void 0;
			route = {
				agent: typeof event.agent === "string" ? event.agent : route?.agent,
				next: typeof event.next === "string" ? event.next : route?.next,
				reason: typeof event.reason === "string" ? event.reason : route?.reason
			};
			break;
		case "subagent_start": {
			statusLabel = void 0;
			const agent = typeof event.agent === "string" ? event.agent : "unknown";
			const existing = agents.find((entry) => entry.agent === agent && entry.open);
			if (existing) existing.open = true;
			else agents.push({
				agent,
				open: true
			});
			break;
		}
		case "subagent_end": {
			const agent = typeof event.agent === "string" ? event.agent : "unknown";
			const section = [...agents].reverse().find((entry) => entry.agent === agent) ?? agents[agents.length - 1];
			if (section) {
				section.open = false;
				if (typeof event.summary === "string") section.summary = event.summary;
				if (typeof event.failed === "boolean") section.failed = event.failed;
				if (typeof event.tool_calls === "number") section.toolCallCount = event.tool_calls;
			}
			break;
		}
		case "tool_start": {
			const agent = typeof event.agent === "string" ? event.agent : void 0;
			const name = typeof event.tool === "string" ? event.tool : typeof event.name === "string" ? event.name : "tool";
			const toolCallId = typeof event.toolCallId === "string" ? event.toolCallId : void 0;
			upsertTool(tools, toolOrder, {
				toolCallId,
				name,
				agent,
				status: "running",
				input: event.input
			}, toolCallId);
			break;
		}
		case "tool_end": {
			const agent = typeof event.agent === "string" ? event.agent : void 0;
			const name = typeof event.tool === "string" ? event.tool : typeof event.name === "string" ? event.name : void 0;
			const toolCallId = typeof event.toolCallId === "string" ? event.toolCallId : void 0;
			const key = (toolCallId && tools[toolCallId] ? toolCallId : void 0) || findRunningToolKey(tools, toolOrder, agent, name) || (toolCallId ? upsertTool(tools, toolOrder, {
				toolCallId,
				name: name || "tool",
				agent,
				status: "success",
				output: event.output
			}, toolCallId) : void 0) || (name ? upsertTool(tools, toolOrder, {
				name,
				agent,
				status: "success",
				output: event.output
			}, void 0) : findRunningToolKey(tools, toolOrder, agent, void 0));
			if (key && tools[key]) tools[key] = {
				...tools[key],
				status: "success",
				output: event.output ?? tools[key].output,
				agent: agent ?? tools[key].agent,
				name: name ?? tools[key].name,
				toolCallId: toolCallId ?? tools[key].toolCallId
			};
			break;
		}
		case "answer_start":
			statusLabel = void 0;
			if (typeof event.agent === "string") answeringAgent = event.agent;
			for (const key of Object.keys(tools)) {
				const tool = tools[key];
				if (!tool || isTerminalToolStatus(tool.status)) continue;
				tools[key] = {
					...tool,
					status: tool.errorMessage ? "error" : "success"
				};
			}
			break;
		case "error":
			statusLabel = void 0;
			if (typeof event.detail === "string" && event.detail.trim()) error = event.detail;
			break;
		default: break;
	}
	for (const tool of seedTools) applyToolDocument(tools, toolOrder, tool);
	return {
		route,
		statusLabel,
		answeringAgent,
		agents,
		tools,
		toolOrder,
		error
	};
}
function finalizeTurnDerivedState(derived, message) {
	const inFlight = isAssistantMessageInFlight(message.status);
	const hasAnswer = typeof message.contentText === "string" && message.contentText.trim().length > 0;
	const toolsPhaseDone = !inFlight || hasAnswer || !!derived.answeringAgent;
	let statusLabel = derived.statusLabel;
	if (toolsPhaseDone) statusLabel = void 0;
	const tools = { ...derived.tools };
	if (toolsPhaseDone) for (const key of Object.keys(tools)) {
		const tool = tools[key];
		if (!tool || isTerminalToolStatus(tool.status)) continue;
		tools[key] = {
			...tool,
			status: tool.errorMessage ? "error" : "success"
		};
	}
	const agents = derived.agents.map((section) => toolsPhaseDone && section.open ? {
		...section,
		open: false
	} : section);
	return {
		...derived,
		statusLabel,
		tools,
		agents
	};
}
function buildTurnView(message, extraTools = []) {
	const timeline = normalizeTimeline(message.timeline !== void 0 && message.timeline !== null ? message.timeline : message.timelineJson);
	const seedRoute = message.routeAgent || message.routeNext || message.routeReason ? {
		agent: message.routeAgent || void 0,
		next: message.routeNext || void 0,
		reason: message.routeReason || void 0
	} : void 0;
	const derived = finalizeTurnDerivedState(replayTimeline(timeline, [...Array.isArray(message.tools) ? message.tools : [], ...extraTools], seedRoute), message);
	const errorFromMessage = typeof message.errorMessage === "string" && message.errorMessage.trim() ? message.errorMessage : void 0;
	return {
		messageId: message.$id,
		status: message.status ?? "queued",
		contentText: message.contentText ?? "",
		route: derived.route ?? seedRoute,
		statusLabel: derived.statusLabel,
		answeringAgent: derived.answeringAgent,
		agents: derived.agents,
		tools: derived.tools,
		toolOrder: derived.toolOrder,
		timeline,
		error: derived.error ?? errorFromMessage
	};
}
function getAssistantBubblePhase(input) {
	if (input.isSending) return "waiting";
	if (!input.isConversationRunning) return "idle";
	const message = input.message;
	if (!message) return input.latestUserWaiting ? "waiting" : "routing";
	const turn = input.turn ?? buildTurnView(message);
	if (turn.contentText.trim() || turn.answeringAgent) return "answering";
	if (turn.agents.some((agent) => agent.open) || turn.toolOrder.length > 0) return "working";
	if (turn.statusLabel || turn.route?.agent) return "routing";
	if (isAssistantMessageInFlight(message.status)) return "waiting";
	return "waiting";
}
function toolsForAgent(turn, agent) {
	return turn.toolOrder.map((key) => turn.tools[key]).filter((tool) => {
		if (!tool) return false;
		if (!agent) return true;
		return tool.agent === agent;
	});
}
function unscopedTools(turn) {
	const scopedAgents = new Set(turn.agents.map((agent) => agent.agent));
	const scopedToolIds = new Set(turn.toolOrder.map((key) => turn.tools[key]).filter((tool) => !!tool?.agent && scopedAgents.has(tool.agent)).flatMap((tool) => [tool.toolCallId, tool.id].filter((value) => typeof value === "string" && !!value)));
	return turn.toolOrder.map((key) => turn.tools[key]).filter((tool) => {
		if (!tool) return false;
		if (tool.agent && scopedAgents.has(tool.agent)) return false;
		if (scopedToolIds.size > 0 && tool.name === "tool" && !tool.toolCallId && !tool.id) return false;
		if (tool.toolCallId && scopedToolIds.has(tool.toolCallId) || tool.id && scopedToolIds.has(tool.id)) return false;
		return true;
	});
}
const CONSOLE_PROTOCOL_ID = "appwrite.console/v1";
const CONSOLE_TOOL_NAME = "console";
function isConsoleToolName(name) {
	return (name?.trim().toLowerCase() ?? "") === CONSOLE_TOOL_NAME;
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
function parseConsoleEnvelope(output) {
	const text = toolOutputToText(output)?.trim();
	if (!text) return null;
	if (text.startsWith("Error:")) return null;
	try {
		const parsed = JSON.parse(text);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
		const record = parsed;
		if (record.protocol !== "appwrite.console/v1") return null;
		if (!Array.isArray(record.actions)) return null;
		return {
			protocol: CONSOLE_PROTOCOL_ID,
			actions: record.actions
		};
	} catch {
		return null;
	}
}
function isRenderableConsoleAction(action) {
	return action.type === "resource" || action.type === "resource_list" || action.type === "chart";
}
function resolveConsoleChartHref(href, projectId) {
	if (href?.trim()) return normalizeConsolePath(href);
	const pid = projectId?.trim();
	if (!pid) return void 0;
	return `/projects/${pid}/usage`;
}
function isSideEffectConsoleAction(action) {
	return !isRenderableConsoleAction(action);
}
function normalizeConsolePath(path) {
	const trimmed = path.trim();
	if (!trimmed) return trimmed;
	if (trimmed.startsWith("/project/")) return `/projects/${trimmed.slice(9)}`;
	if (trimmed === "/project") return "/projects";
	return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}
function fieldString(fields, keys) {
	if (!fields) return void 0;
	for (const key of keys) {
		const direct = fields[key];
		if (typeof direct === "string" && direct.trim()) return direct.trim();
		const match = Object.entries(fields).find(([k]) => k.toLowerCase() === key.toLowerCase());
		if (typeof match?.[1] === "string" && match[1].trim()) return match[1].trim();
	}
}
function resolveConsoleResourceHref(item, resourceType, projectId) {
	if (item.href?.trim()) return normalizeConsolePath(item.href);
	const pid = projectId?.trim();
	const id = item.resourceId?.trim();
	if (!pid || !id) return void 0;
	const type = resourceType.trim().toLowerCase();
	if (type === "user" || type === "users") return `/projects/${pid}/auth/users/${id}`;
	if (type === "team" || type === "teams") return `/projects/${pid}/auth/teams/${id}`;
	if (type === "bucket" || type === "buckets") return `/projects/${pid}/storage/${id}`;
	if (type === "function" || type === "functions") return `/projects/${pid}/functions/${id}`;
	if (type === "site" || type === "sites") return `/projects/${pid}/sites/${id}`;
	if (type === "database" || type === "databases") {
		const kind = fieldString(item.fields, [
			"type",
			"dbKind",
			"kind"
		])?.toLowerCase() || "tablesdb";
		return `/projects/${pid}/databases/${kind === "legacy" || kind === "documentsdb" || kind === "collections" ? "legacy" : kind === "postgres" || kind === "postgresql" ? "postgres" : kind === "mysql" ? "mysql" : kind === "mongo" || kind === "mongodb" ? "mongo" : "tablesdb"}/${id}`;
	}
	if (type === "file" || type === "files") {
		const bucketId = fieldString(item.fields, ["bucketId", "bucket"]);
		if (bucketId) return `/projects/${pid}/storage/${bucketId}/files/${id}`;
	}
	if (type === "table" || type === "tables" || type === "collection") {
		const databaseId = fieldString(item.fields, [
			"databaseId",
			"database",
			"database_id"
		]);
		const kind = fieldString(item.fields, [
			"dbKind",
			"type",
			"kind"
		])?.toLowerCase() || "tablesdb";
		if (databaseId) return (kind === "legacy" || kind === "documentsdb" ? "legacy" : "tablesdb") === "legacy" ? `/projects/${pid}/databases/legacy/${databaseId}/collections/${id}` : `/projects/${pid}/databases/tablesdb/${databaseId}/tables/${id}`;
	}
}
function resolveConsoleListHref(listHref, resourceType, projectId) {
	if (listHref?.trim()) return normalizeConsolePath(listHref);
	const pid = projectId?.trim();
	if (!pid) return void 0;
	const type = resourceType.trim().toLowerCase();
	if (type === "user" || type === "users") return `/projects/${pid}/auth`;
	if (type === "team" || type === "teams") return `/projects/${pid}/auth/teams`;
	if (type === "bucket" || type === "buckets" || type === "file" || type === "files") return `/projects/${pid}/storage`;
	if (type === "function" || type === "functions") return `/projects/${pid}/functions`;
	if (type === "site" || type === "sites") return `/projects/${pid}/sites`;
	if (type === "database" || type === "databases" || type === "table" || type === "tables") return `/projects/${pid}/databases`;
}
function normalizeCardId(cardId) {
	const trimmed = cardId.trim();
	if (trimmed.toLowerCase().startsWith("card-")) return trimmed.slice(5);
	return trimmed;
}
function scrollToConsoleCard(cardId) {
	if (typeof document === "undefined") return;
	const id = normalizeCardId(cardId);
	if (!id) return;
	const highlightClasses = [
		"ring-2",
		"ring-foreground/30",
		"ring-offset-2",
		"ring-offset-background",
		"transition-all",
		"duration-700"
	];
	let attempts = 0;
	const tick = () => {
		const el = document.querySelector(`[data-card-id="${CSS.escape(id)}"]`);
		if (el) {
			el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			el.classList.add(...highlightClasses);
			window.setTimeout(() => {
				el.classList.remove(...highlightClasses);
			}, 1600);
			return;
		}
		if (attempts++ < 10) window.setTimeout(tick, 80);
	};
	tick();
}
const CONSOLE_REFRESH_SCOPE_KEYS = {
	databases: ["databases", "database"],
	tables: [
		"tables",
		"table",
		"rows",
		"columns",
		"indexes"
	],
	buckets: ["buckets", "bucket"],
	files: [
		"files",
		"file",
		"file-tokens"
	],
	users: ["users", "user"],
	teams: ["teams", "team"],
	functions: ["functions", "function"],
	sites: ["sites", "site"],
	providers: ["providers", "provider"],
	topics: ["topics", "topic"],
	messages: ["messages", "message"],
	project: ["project"],
	organization: ["organization", "organizations"],
	webhooks: ["webhooks", "webhook"],
	platforms: ["platforms"],
	variables: ["variables"],
	deployments: ["deployments", "deployment"],
	executions: ["executions", "execution"],
	domains: ["proxy-rules", "domains"],
	keys: ["apiKeys"]
};
function consoleToolApplyKey(tool, options) {
	const toolCallId = tool.toolCallId?.trim();
	const messageId = options?.messageId?.trim();
	if (messageId && toolCallId) return `msg:${messageId}:call:${toolCallId}`;
	const documentId = tool.id?.trim();
	if (documentId) return `tool:${documentId}`;
	if (messageId) return `msg:${messageId}:console:${options?.fallbackIndex ?? 0}`;
	if (toolCallId) return `call:${toolCallId}`;
	return `console:${options?.fallbackIndex ?? 0}`;
}
function collectConsoleToolResults(tools) {
	const results = [];
	for (const tool of tools) {
		if (!isConsoleToolName(tool.name)) continue;
		const status = tool.status?.toLowerCase() ?? "";
		if (status === "running" || status === "queued" || status === "pending" || status === "processing") continue;
		if (status === "error" || status === "failed" || status === "cancelled" || status === "canceled" || !!tool.errorMessage) continue;
		const envelope = parseConsoleEnvelope(tool.output);
		if (!envelope) continue;
		const key = consoleToolApplyKey(tool, {
			messageId: tool.messageId,
			fallbackIndex: results.length
		});
		results.push({
			key,
			toolCallId: tool.toolCallId?.trim() || void 0,
			envelope
		});
	}
	return results;
}
function collectRenderableConsoleActions(tools) {
	const collected = [];
	for (const result of collectConsoleToolResults(tools)) result.envelope.actions.forEach((action, index) => {
		if (!isRenderableConsoleAction(action)) return;
		collected.push({
			...action,
			key: `${result.key}:${index}`
		});
	});
	return collected;
}
function isConsoleCtaAction(action) {
	switch (action.type) {
		case "open_dialog":
		case "open_create":
		case "navigate":
		case "toggle_terminal":
		case "show_pane":
		case "set_theme": return true;
		default: return false;
	}
}
function collectConsoleCtaActions(tools) {
	const collected = [];
	for (const result of collectConsoleToolResults(tools)) result.envelope.actions.forEach((action, index) => {
		if (!isConsoleCtaAction(action)) return;
		collected.push({
			...action,
			key: `${result.key}:cta:${index}`
		});
	});
	return collected;
}
function consoleCtaLabel(action) {
	switch (action.type) {
		case "open_dialog": switch (action.dialog) {
			case "shortcuts": return "Show keyboard shortcuts";
			case "docs_search": return "Search docs";
			case "feedback": return "Send feedback";
			case "support": return "Contact support";
			case "connect_mcp": return "Connect MCP";
			case "create_project": return "Create project";
			case "invite_member": return "Invite member";
			default: return "Open";
		}
		case "open_create": switch (action.resource) {
			case "database": return "Create database";
			case "bucket": return "Create bucket";
			case "user": return "Create user";
			case "team": return "Create team";
			case "function": return "Create function";
			case "site": return "Create site";
			default: return "Create";
		}
		case "navigate": return "Open in Console";
		case "toggle_terminal": return "Open terminal";
		case "show_pane":
			if (action.content === "docs") return "Open docs";
			if (action.content === "agent") return "Open agent";
			return "Close panel";
		case "set_theme":
			if (action.theme === "dark") return "Switch to dark mode";
			if (action.theme === "light") return "Switch to light mode";
			return "Use system theme";
		default: return "Open";
	}
}
var META_TOOLS = new Set([
	"appwrite_call_tool",
	"appwrite_search_tools",
	"appwrite_get_context",
	"appwrite_search_docs",
	"appwrite_list_tools",
	"console",
	"clarify"
]);
var CREATE_VERBS = new Set([
	"create",
	"add",
	"insert",
	"upload",
	"new"
]);
var UPDATE_VERBS = new Set([
	"update",
	"upsert",
	"patch",
	"set",
	"edit",
	"rename",
	"move",
	"replace"
]);
var DELETE_VERBS = new Set([
	"delete",
	"remove",
	"destroy",
	"drop",
	"purge"
]);
var READ_VERBS = new Set([
	"list",
	"get",
	"read",
	"fetch",
	"search",
	"find",
	"preview",
	"download",
	"export"
]);
function parseMaybeJson(value) {
	if (typeof value !== "string") return value;
	const trimmed = value.trim();
	if (!trimmed) return value;
	try {
		return JSON.parse(trimmed);
	} catch {
		return value;
	}
}
function isRecord(value) {
	return !!value && typeof value === "object" && !Array.isArray(value);
}
function tokenizeToolName(toolName) {
	const normalized = toolName.trim().toLowerCase();
	if (!normalized) return [];
	return normalized.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase().split(/[._\s-]+/).filter(Boolean);
}
function isFailedToolStatus(status) {
	const normalized = status?.toLowerCase() ?? "";
	return normalized === "failed" || normalized === "error" || normalized === "cancelled" || normalized === "canceled" || normalized === "stopped";
}
function isInFlightToolStatus(status) {
	const normalized = status?.toLowerCase() ?? "";
	return normalized === "running" || normalized === "queued" || normalized === "pending" || normalized === "processing";
}
function stringField(record, keys) {
	for (const key of keys) {
		const value = record[key];
		if (typeof value === "string" && value.trim()) return value.trim();
	}
}
function extractCatalogNameFromInput(input) {
	const parsed = parseMaybeJson(input);
	if (!isRecord(parsed)) return void 0;
	const direct = stringField(parsed, [
		"tool_name",
		"toolName",
		"tool",
		"name",
		"operation",
		"method",
		"action"
	]);
	if (direct) return direct;
	for (const nestedKey of [
		"arguments",
		"params",
		"input",
		"data"
	]) {
		const nested = parsed[nestedKey];
		if (!isRecord(nested)) continue;
		const nestedName = stringField(nested, [
			"tool_name",
			"toolName",
			"tool",
			"name",
			"operation",
			"method",
			"action"
		]);
		if (nestedName) return nestedName;
	}
}
function isCallToolWrapper(name) {
	const normalized = name.trim().toLowerCase();
	return normalized === "appwrite_call_tool" || normalized.endsWith("_call_tool") || normalized.endsWith(".call_tool") || normalized.includes("appwrite_call_tool");
}
function resolveCatalogToolName(tool) {
	const outer = tool.name?.trim() || "";
	const fromInput = extractCatalogNameFromInput(tool.input !== void 0 ? tool.input : tool.argumentsJson);
	if (fromInput && (!outer || isCallToolWrapper(outer))) return fromInput;
	if (fromInput && isCallToolWrapper(outer)) return fromInput;
	return outer || fromInput || "";
}
function classifyResourceMutation(toolName) {
	const normalized = toolName.trim().toLowerCase();
	if (!normalized || META_TOOLS.has(normalized) || isCallToolWrapper(normalized)) return null;
	const tokens = tokenizeToolName(normalized);
	if (tokens.length === 0) return null;
	for (const token of tokens) {
		if (CREATE_VERBS.has(token)) return "create";
		if (UPDATE_VERBS.has(token)) return "update";
		if (DELETE_VERBS.has(token)) return "delete";
		if (READ_VERBS.has(token)) return null;
	}
	return null;
}
function emptyResourceMutationCounts() {
	return {
		created: 0,
		updated: 0,
		deleted: 0
	};
}
function hasResourceMutations(counts) {
	return counts.created > 0 || counts.updated > 0 || counts.deleted > 0;
}
function shouldCountTool(tool) {
	if (tool.errorMessage) return false;
	if (isFailedToolStatus(tool.status)) return false;
	if (isInFlightToolStatus(tool.status)) return false;
	return true;
}
function countResourceMutationsFromTools(tools) {
	const counts = emptyResourceMutationCounts();
	if (!tools?.length) return counts;
	for (const tool of tools) {
		if (!shouldCountTool(tool)) continue;
		if (isConsoleToolName(tool.name)) {
			const envelope = parseConsoleEnvelope(tool.output);
			if (!envelope) continue;
			for (const action of envelope.actions) {
				if (!action || typeof action !== "object") continue;
				if (action.type !== "resource") continue;
				const mutation = action.mutation;
				if (mutation === "create") counts.created += 1;
				else if (mutation === "update") counts.updated += 1;
				else if (mutation === "delete") counts.deleted += 1;
			}
			continue;
		}
		const kind = classifyResourceMutation(resolveCatalogToolName(tool));
		if (kind === "create") counts.created += 1;
		else if (kind === "update") counts.updated += 1;
		else if (kind === "delete") counts.deleted += 1;
	}
	return counts;
}
function toolsFromMessage(message) {
	const turn = buildTurnView(message);
	const fromTurn = turn.toolOrder.map((key) => turn.tools[key]).filter((tool) => !!tool);
	if (fromTurn.length > 0) return fromTurn;
	return Array.isArray(message.tools) ? message.tools : [];
}
function countResourceMutations(messages) {
	const counts = emptyResourceMutationCounts();
	if (!messages?.length) return counts;
	for (const message of messages) {
		if (message.role && message.role.toLowerCase() === "user") continue;
		const next = countResourceMutationsFromTools(toolsFromMessage(message));
		counts.created += next.created;
		counts.updated += next.updated;
		counts.deleted += next.deleted;
	}
	return counts;
}
function messageNeedsToolHydration(message) {
	if (message.role?.toLowerCase() === "user") return false;
	if (hasResourceMutations(countResourceMutationsFromTools(toolsFromMessage(message)))) return false;
	const tools = Array.isArray(message.tools) ? message.tools : [];
	const turn = buildTurnView(message);
	if (tools.length === 0 && turn.toolOrder.length === 0) return true;
	return [...tools, ...Object.values(turn.tools)].some((tool) => {
		const outer = tool?.name?.trim() || "";
		if (!outer || !isCallToolWrapper(outer)) return false;
		return !extractCatalogNameFromInput("input" in tool && tool.input !== void 0 ? tool.input : "argumentsJson" in tool ? tool.argumentsJson : void 0);
	});
}
var ASSISTANT_TOOL_HYDRATION_LIMIT = 8;
const ASSISTANT_MESSAGES_PAGE_SIZE = 25;
const ASSISTANT_MODELS_PICKER_PAGE_SIZE = 25;
const ASSISTANT_SETTINGS_PAGE_SIZE = 10;
const ASSISTANT_SETTINGS_PAGE_SIZE_OPTIONS = [
	10,
	25,
	50,
	100
];
function isAutomationRunConversation(conversation) {
	return Boolean(typeof conversation.automationId === "string" && conversation.automationId.trim());
}
async function fetchAssistantConversations(search) {
	const trimmedSearch = search?.trim() || void 0;
	return ((await sdk.forConsole.agent.listConversations({
		queries: [Query.or([Query.isNull("automationId"), Query.equal("automationId", "")]), Query.orderDesc("$updatedAt")],
		search: trimmedSearch
	})).conversations ?? []).filter((conversation) => !isAutomationRunConversation(conversation));
}
async function fetchAssistantMessages(conversationId, limit = 25) {
	if (!conversationId) return {
		messages: [],
		total: 0
	};
	const response = await sdk.forConsole.agent.listMessages({
		conversationId,
		queries: [Query.orderDesc("$createdAt"), Query.limit(limit)]
	});
	const messages = (response.messages ?? []).slice().reverse();
	return {
		messages,
		total: response.total ?? messages.length
	};
}
async function fetchAssistantMessagesWithTools(conversationId, limit = 25) {
	const listed = await fetchAssistantMessages(conversationId, limit);
	const toHydrate = listed.messages.map((message, index) => ({
		message,
		index
	})).reverse().filter(({ message }) => messageNeedsToolHydration(message)).slice(0, ASSISTANT_TOOL_HYDRATION_LIMIT);
	const hydratedByIndex = /* @__PURE__ */ new Map();
	await Promise.all(toHydrate.map(async ({ message, index }) => {
		try {
			const full = await sdk.forConsole.agent.getMessage({
				conversationId,
				messageId: message.$id
			});
			hydratedByIndex.set(index, full);
		} catch {}
	}));
	return {
		messages: listed.messages.map((message, index) => hydratedByIndex.get(index) ?? message),
		total: listed.total
	};
}
function optionalContextString(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
function toAssistantMessageContextPayload(context) {
	return {
		contextTeamId: optionalContextString(context?.contextTeamId),
		contextProjectId: optionalContextString(context?.contextProjectId),
		contextOrganizationId: optionalContextString(context?.contextOrganizationId),
		contextPagePath: optionalContextString(context?.contextPagePath),
		contextPageTitle: optionalContextString(context?.contextPageTitle),
		contextPageUrl: optionalContextString(context?.contextPageUrl)
	};
}
const ASSISTANT_ATTACHMENTS_BUCKET_ID = "attachements";
function assistantConversationsQueryOptions(search, options) {
	const normalizedSearch = search?.trim() || void 0;
	const enabled = (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"conversations",
			normalizedSearch ?? ""
		],
		queryFn: () => fetchAssistantConversations(normalizedSearch),
		staleTime: DEFAULT_STALE_TIME,
		placeholderData: keepPreviousData,
		enabled,
		retry: false
	});
}
async function fetchAssistantConversation(conversationId) {
	return await sdk.forConsole.agent.getConversation({ conversationId });
}
function assistantConversationQueryOptions(conversationId, options) {
	const enabled = (options?.enabled ?? true) && !!conversationId && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"conversation",
			conversationId ?? ""
		],
		queryFn: () => fetchAssistantConversation(conversationId),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false
	});
}
function useAssistantConversation(conversationId, options) {
	return useQuery(assistantConversationQueryOptions(conversationId, options));
}
function assistantMessagesQueryOptions(conversationId, limit = 25) {
	const enabled = !!conversationId && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"messages",
			conversationId,
			limit
		],
		queryFn: () => fetchAssistantMessages(conversationId, limit),
		enabled,
		placeholderData: keepPreviousData,
		staleTime: DEFAULT_STALE_TIME
	});
}
async function fetchAssistantAttachmentFiles(fileIds) {
	const uniqueFileIds = [...new Set(fileIds.filter(Boolean))];
	if (uniqueFileIds.length === 0) return [];
	return (await Promise.all(uniqueFileIds.map(async (fileId) => {
		try {
			return await sdk.forConsole.storage.getFile({
				bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
				fileId
			});
		} catch {
			return null;
		}
	}))).filter((file) => file !== null);
}
function assistantAttachmentFilesQueryOptions(fileIds) {
	const uniqueFileIds = [...new Set(fileIds.filter(Boolean))];
	const enabled = uniqueFileIds.length > 0 && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"attachments",
			...uniqueFileIds
		],
		queryFn: () => fetchAssistantAttachmentFiles(uniqueFileIds),
		enabled,
		staleTime: DEFAULT_STALE_TIME
	});
}
function useAssistantConversations(search, options) {
	return useQuery(assistantConversationsQueryOptions(search, options));
}
function useAssistantMessages(conversationId, limit = 25) {
	return useQuery(assistantMessagesQueryOptions(conversationId, limit));
}
function useAssistantAttachmentFiles(fileIds) {
	return useQuery(assistantAttachmentFilesQueryOptions(fileIds));
}
function useCreateAssistantConversation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			const { projectId: _projectId, modelTemp, ...conversationParams } = params;
			return await sdk.forConsole.agent.createConversation({
				...conversationParams,
				modelTemp: modelTemp ?? 1
			});
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["agent", "conversations"] });
		}
	});
}
function useDeleteAssistantConversation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (conversationId) => {
			return await sdk.forConsole.agent.deleteConversation({ conversationId });
		},
		onSuccess: async (_, conversationId) => {
			await Promise.all([queryClient.invalidateQueries({ queryKey: ["agent", "conversations"] }), queryClient.removeQueries({ queryKey: [
				"agent",
				"messages",
				conversationId
			] })]);
		}
	});
}
function useCreateAssistantMessage() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.createMessage({
				conversationId: params.conversationId,
				contentText: params.contentText,
				contentType: "text",
				...toAssistantMessageContextPayload(params.context),
				attachments: params.attachments ?? [],
				continueRun: params.continueRun ?? true
			});
		},
		onSuccess: async (message) => {
			await Promise.all([queryClient.invalidateQueries({ queryKey: ["agent", "conversations"] }), queryClient.invalidateQueries({ queryKey: [
				"agent",
				"messages",
				message.conversationId
			] })]);
		}
	});
}
function useUpdateAssistantMessage() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateMessage({
				conversationId: params.conversationId,
				messageId: params.messageId,
				contentText: params.contentText,
				...toAssistantMessageContextPayload(params.context),
				attachments: params.attachments
			});
		},
		onSuccess: async (message) => {
			await Promise.all([queryClient.refetchQueries({ queryKey: ["agent", "conversations"] }), queryClient.refetchQueries({ queryKey: [
				"agent",
				"messages",
				message.conversationId
			] })]);
		}
	});
}
function useScoreAssistantMessage() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateMessage({
				conversationId: params.conversationId,
				messageId: params.messageId,
				score: String(params.score)
			});
		},
		onMutate: async (params) => {
			await queryClient.cancelQueries({ queryKey: [
				"agent",
				"messages",
				params.conversationId
			] });
			const previous = queryClient.getQueriesData({ queryKey: [
				"agent",
				"messages",
				params.conversationId
			] });
			queryClient.setQueriesData({ queryKey: [
				"agent",
				"messages",
				params.conversationId
			] }, (current) => {
				if (!current) return current;
				return {
					...current,
					messages: current.messages.map((message) => message.$id === params.messageId ? {
						...message,
						score: params.score
					} : message)
				};
			});
			return { previous };
		},
		onError: (_error, params, context) => {
			if (!context?.previous) return;
			for (const [queryKey, data] of context.previous) queryClient.setQueryData(queryKey, data);
		},
		onSuccess: (message) => {
			queryClient.setQueriesData({ queryKey: [
				"agent",
				"messages",
				message.conversationId
			] }, (current) => {
				if (!current) return current;
				return {
					...current,
					messages: current.messages.map((cached) => cached.$id === message.$id ? {
						...cached,
						score: message.score
					} : cached)
				};
			});
		}
	});
}
function useUpdateAssistantConversation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateConversation({
				conversationId: params.conversationId,
				title: params.title,
				status: params.status,
				controlType: params.controlType,
				retryFromMessageId: params.retryFromMessageId,
				modelName: params.modelName,
				modelTemp: params.modelTemp,
				modelId: params.modelId,
				lockReason: params.lockReason
			});
		},
		onSuccess: async (conversation) => {
			await Promise.all([queryClient.refetchQueries({ queryKey: ["agent", "conversations"] }), queryClient.refetchQueries({ queryKey: [
				"agent",
				"messages",
				conversation.$id
			] })]);
		}
	});
}
function useUploadAssistantAttachments() {
	return useMutation({ mutationFn: async (params) => {
		const region = params.projectId ? getProjectRegion(params.projectId) ?? "unknown" : "unknown";
		const consoleSdk = sdk.forConsoleIn(region);
		return (await Promise.all(params.files.map((file) => consoleSdk.storage.createFile({
			bucketId: ASSISTANT_ATTACHMENTS_BUCKET_ID,
			fileId: ID.unique(),
			file
		})))).map((file) => file.$id);
	} });
}
async function fetchAssistantMcpConnections() {
	return (await sdk.forConsole.agent.listMcpConnections({ queries: [Query.orderDesc("$updatedAt")] })).mcps ?? [];
}
function assistantMcpConnectionsQueryOptions(options) {
	return queryOptions({
		queryKey: ["agent", "mcps"],
		queryFn: fetchAssistantMcpConnections,
		staleTime: DEFAULT_STALE_TIME,
		enabled: (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent,
		retry: false
	});
}
function useAssistantMcpConnections(options) {
	return useQuery(assistantMcpConnectionsQueryOptions(options));
}
function useUpsertAssistantMcpConnection() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			const payload = {
				mcpId: params.mcpId,
				name: params.name,
				url: params.url,
				description: params.description,
				enabled: params.enabled ?? true,
				tokens: params.tokens,
				clientInfo: params.clientInfo,
				status: params.status
			};
			if (params.exists) return await sdk.forConsole.agent.updateMcpConnection(payload);
			try {
				return await sdk.forConsole.agent.createMcpConnection(payload);
			} catch (error) {
				const message = error && typeof error === "object" && "message" in error ? String(error.message) : "";
				if (!/already exists|conflict|409/i.test(message)) throw error;
				return await sdk.forConsole.agent.updateMcpConnection(payload);
			}
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "mcps"] });
		}
	});
}
function useUpdateAssistantMcpConnection() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateMcpConnection(params);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "mcps"] });
		}
	});
}
function useDeleteAssistantMcpConnection() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (mcpId) => {
			return await sdk.forConsole.agent.deleteMcpConnection({ mcpId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "mcps"] });
		}
	});
}
async function fetchAssistantMemories(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE) {
	const response = await sdk.forConsole.agent.listMemories({ queries: [
		Query.orderDesc("$updatedAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	] });
	const memories = response.memories ?? [];
	return {
		memories,
		total: response.total ?? memories.length
	};
}
function assistantMemoriesQueryOptions(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE, options) {
	const enabled = (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"memories",
			page,
			limit
		],
		queryFn: () => fetchAssistantMemories(page, limit),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false,
		placeholderData: keepPreviousData
	});
}
function useAssistantMemories(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE, options) {
	return useQuery(assistantMemoriesQueryOptions(page, limit, options));
}
function useCreateAssistantMemory() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.createMemory({
				memoryId: params.memoryId?.trim() || "unique()",
				scope: params.scope,
				key: params.key,
				content: params.content,
				category: params.category,
				priority: params.priority,
				status: params.status,
				source: params.source,
				expiresAt: params.expiresAt
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "memories"] });
		}
	});
}
function useUpdateAssistantMemory() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateMemory(params);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "memories"] });
		}
	});
}
function useDeleteAssistantMemory() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (memoryId) => {
			return await sdk.forConsole.agent.deleteMemory({ memoryId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "memories"] });
		}
	});
}
async function fetchAssistantModels(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE, search) {
	const trimmedSearch = search?.trim() || void 0;
	const response = await sdk.forConsole.agent.listModels({ queries: [
		Query.orderDesc("$updatedAt"),
		Query.limit(limit),
		Query.offset(page * limit),
		...trimmedSearch ? [Query.search("search", trimmedSearch)] : []
	] });
	const models = response.models ?? [];
	return {
		models,
		total: response.total ?? models.length
	};
}
async function fetchAssistantModel(modelId) {
	return await sdk.forConsole.agent.getModel({ modelId });
}
function assistantModelQueryOptions(modelId, options) {
	const enabled = (options?.enabled ?? true) && !!modelId && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"models",
			"detail",
			modelId
		],
		queryFn: () => fetchAssistantModel(modelId),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false
	});
}
function assistantModelsQueryOptions(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE, search, options) {
	const trimmedSearch = search?.trim() || void 0;
	const enabled = (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"models",
			page,
			limit,
			trimmedSearch ?? ""
		],
		queryFn: () => fetchAssistantModels(page, limit, trimmedSearch),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false,
		placeholderData: keepPreviousData
	});
}
function useAssistantModels(page = 0, limit = ASSISTANT_SETTINGS_PAGE_SIZE, options) {
	return useQuery(assistantModelsQueryOptions(page, limit, options?.search, options));
}
function assistantModelsInfiniteQueryOptions(limit = 25, search, options) {
	const trimmedSearch = search?.trim() || void 0;
	const enabled = (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return infiniteQueryOptions({
		queryKey: [
			"agent",
			"models",
			"infinite",
			limit,
			trimmedSearch ?? ""
		],
		queryFn: ({ pageParam }) => fetchAssistantModels(pageParam, limit, trimmedSearch),
		initialPageParam: 0,
		getNextPageParam: (lastPage, _pages, lastPageParam) => {
			return (lastPageParam + 1) * limit < (lastPage.total ?? 0) ? lastPageParam + 1 : void 0;
		},
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false,
		placeholderData: keepPreviousData
	});
}
function useCreateAssistantModel() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.createModel({
				modelId: params.modelId?.trim() || "unique()",
				name: params.name,
				provider: params.provider,
				model: params.model,
				apiKey: params.apiKey,
				baseUrl: params.baseUrl?.trim() || void 0,
				enabled: params.enabled ?? true,
				status: params.status
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "models"] });
		}
	});
}
function useUpdateAssistantModel() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateModel({
				modelId: params.modelId,
				name: params.name,
				provider: params.provider,
				model: params.model,
				apiKey: params.apiKey?.trim() ? params.apiKey : void 0,
				baseUrl: params.baseUrl,
				enabled: params.enabled,
				status: params.status
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "models"] });
		}
	});
}
function useDeleteAssistantModel() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (modelId) => {
			return await sdk.forConsole.agent.deleteModel({ modelId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "models"] });
		}
	});
}
async function fetchAssistantAutomations(search) {
	const trimmedSearch = search?.trim() || void 0;
	return (await sdk.forConsole.agent.listAutomations({ queries: [Query.orderDesc("$updatedAt"), ...trimmedSearch ? [Query.search("search", trimmedSearch)] : []] })).automations ?? [];
}
async function fetchAssistantAutomationRuns(automationId, page = 0, limit = 10) {
	if (!automationId) return {
		runs: [],
		total: 0
	};
	const response = await sdk.forConsole.agent.listConversations({ queries: [
		Query.equal("automationId", automationId),
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	] });
	const runs = response.conversations ?? [];
	return {
		runs,
		total: response.total ?? runs.length
	};
}
function assistantAutomationRunsQueryOptions(automationId, page = 0, limit = 10, options) {
	const enabled = (options?.enabled ?? true) && !!automationId && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"automations",
			automationId ?? "",
			"runs",
			page,
			limit
		],
		queryFn: () => fetchAssistantAutomationRuns(automationId, page, limit),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false,
		placeholderData: keepPreviousData
	});
}
function useAssistantAutomationRuns(automationId, page = 0, limit = 10, options) {
	return useQuery(assistantAutomationRunsQueryOptions(automationId, page, limit, options));
}
function assistantAutomationsQueryOptions(search, options) {
	const normalizedSearch = search?.trim() || void 0;
	const enabled = (options?.enabled ?? true) && isClientQueryEnabled && getActiveProfileFeatures().agent;
	return queryOptions({
		queryKey: [
			"agent",
			"automations",
			normalizedSearch ?? ""
		],
		queryFn: () => fetchAssistantAutomations(normalizedSearch),
		staleTime: DEFAULT_STALE_TIME,
		enabled,
		retry: false,
		placeholderData: keepPreviousData
	});
}
function useAssistantAutomations(search, options) {
	return useQuery(assistantAutomationsQueryOptions(search, options));
}
function useCreateAssistantAutomation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.createAutomation({
				automationId: params.automationId?.trim() || "unique()",
				name: params.name,
				prompt: params.prompt,
				schedule: params.schedule,
				titlePrefix: params.titlePrefix,
				modelId: params.modelId?.trim() || void 0,
				modelTemp: params.modelTemp ?? 1,
				contextTeamId: params.contextTeamId,
				contextProjectId: params.contextProjectId,
				contextOrganizationId: params.contextOrganizationId,
				contextPagePath: params.contextPagePath,
				contextPageTitle: params.contextPageTitle,
				contextPageUrl: params.contextPageUrl,
				attachments: params.attachments,
				enabled: params.enabled ?? true
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "automations"] });
		}
	});
}
function useUpdateAssistantAutomation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return await sdk.forConsole.agent.updateAutomation(params);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "automations"] });
		}
	});
}
function useDeleteAssistantAutomation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (automationId) => {
			return await sdk.forConsole.agent.deleteAutomation({ automationId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["agent", "automations"] });
		}
	});
}
const AGENT_MESSAGES_EVENT_METRIC = "agent.messages";
const AGENT_CONVERSATIONS_EVENT_METRIC = "agent.conversations";
const AGENT_TOOL_CALLS_EVENT_METRIC = "agent.toolCalls";
const AGENT_AUTOMATIONS_EVENT_METRIC = "agent.automations";
const AGENT_TOKENS_INPUT_EVENT_METRIC = "agent.tokens.input";
const AGENT_TOKENS_OUTPUT_EVENT_METRIC = "agent.tokens.output";
const AGENT_AUTOMATIONS_DESCRIPTION = "Automation runs started during the selected period. Each automation execution counts as one.";
const AGENT_TOKENS_BREAKDOWN_DESCRIPTION = "Input and output tokens consumed by the agent during the selected period.";
const AGENT_ACTIVITY_DESCRIPTION = "Messages, conversations, and tool calls during the selected period.";
const AGENT_DOCS_HREF = "/docs/products/agent";
var AGENT_USAGE_EVENT_METRICS = [
	{
		id: "tokens-input",
		metric: AGENT_TOKENS_INPUT_EVENT_METRIC
	},
	{
		id: "tokens-output",
		metric: AGENT_TOKENS_OUTPUT_EVENT_METRIC
	},
	{
		id: "messages",
		metric: AGENT_MESSAGES_EVENT_METRIC
	},
	{
		id: "conversations",
		metric: AGENT_CONVERSATIONS_EVENT_METRIC
	},
	{
		id: "tool-calls",
		metric: AGENT_TOOL_CALLS_EVENT_METRIC
	},
	{
		id: "automations",
		metric: AGENT_AUTOMATIONS_EVENT_METRIC
	}
].map((entry) => entry.metric);
const AGENT_TOKENS_BREAKDOWN_SERIES = [{
	dataKey: "input",
	label: "Input",
	colorVar: "--chart-2",
	gradientId: "usage-agent-tokens-input-gradient"
}, {
	dataKey: "output",
	label: "Output",
	colorVar: "--chart-brand",
	gradientId: "usage-agent-tokens-output-gradient"
}];
const AGENT_ACTIVITY_SERIES = [
	{
		dataKey: "messages",
		label: "Messages",
		colorVar: "--chart-2",
		gradientId: "usage-agent-messages-gradient"
	},
	{
		dataKey: "conversations",
		label: "Conversations",
		colorVar: "--chart-brand",
		gradientId: "usage-agent-conversations-gradient"
	},
	{
		dataKey: "toolCalls",
		label: "Tool calls",
		colorVar: "--chart-3",
		gradientId: "usage-agent-tool-calls-gradient"
	}
];
function formatAgentCountTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAgentCountValue(count) {
	return formatCompactCount(count, { compact: true });
}
function mergeValuesByTime(groups) {
	const merged = /* @__PURE__ */ new Map();
	for (const point of groups) {
		if (!point.time) continue;
		merged.set(point.time, (merged.get(point.time) ?? 0) + (point.value || 0));
	}
	return merged;
}
function toUsageInterval(interval) {
	if (interval === "15m") return UsageInterval.FifteenMinutes;
	if (interval === "1d") return UsageInterval.OneDay;
	return UsageInterval.OneHour;
}
async function listConsoleUsageEventGroupsByMetric(params) {
	if (params.metrics.length === 0) return /* @__PURE__ */ new Map();
	const response = await sdk.forConsole.usage.listEvents({
		metrics: [...params.metrics],
		interval: toUsageInterval(params.interval),
		startAt: params.startAt,
		endAt: params.endAt
	});
	const result = /* @__PURE__ */ new Map();
	for (const metric of params.metrics) result.set(metric, response.metrics?.find((entry) => entry.metric === metric)?.points ?? []);
	return result;
}
function buildSeriesOverview(chartPoints, previousChartPoints, comparisonMode) {
	return {
		chartPoints,
		changePercent: computeChangePercent(sumUsageChartPointsForComparison(chartPoints, comparisonMode), sumUsageChartPoints(previousChartPoints))
	};
}
function mergeKeyedSeriesPoints(basePoints, seriesByKey) {
	return basePoints.map((point, index) => {
		const values = {};
		let total = 0;
		for (const [key, points] of Object.entries(seriesByKey)) {
			const value = points[index]?.total ?? 0;
			values[key] = value;
			total += value;
		}
		return {
			date: point.date,
			day: point.day,
			total,
			...values
		};
	});
}
function emptySingleOverview() {
	return {
		changePercent: 0,
		chartPoints: []
	};
}
function emptyMultiOverview(series) {
	return {
		changePercent: 0,
		chartPoints: [],
		multiSeriesPoints: [],
		series
	};
}
function emptyAgentUsageOverview() {
	return {
		automations: emptySingleOverview(),
		tokensBreakdown: emptyMultiOverview(AGENT_TOKENS_BREAKDOWN_SERIES),
		activity: emptyMultiOverview(AGENT_ACTIVITY_SERIES)
	};
}
async function fetchAccountAgentUsageOverview(dateRange, interval = "1h") {
	const { from, to, previousFrom, previousTo, interval: resolvedInterval, comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, 0);
	const currentByMetric = await listConsoleUsageEventGroupsByMetric({
		metrics: AGENT_USAGE_EVENT_METRICS,
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString()
	});
	const previousByMetric = comparisonMode === "prior_window" ? await listConsoleUsageEventGroupsByMetric({
		metrics: AGENT_USAGE_EVENT_METRICS,
		interval: resolvedInterval,
		startAt: previousFrom.toISOString(),
		endAt: previousTo.toISOString()
	}) : null;
	const seriesFor = (metric) => {
		const chartPoints = fillChartPointsGaps(mergeValuesByTime(currentByMetric.get(metric) ?? []), from, to, resolvedInterval);
		return {
			chartPoints,
			previousChartPoints: comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : fillChartPointsGaps(mergeValuesByTime(previousByMetric?.get(metric) ?? []), previousFrom, previousTo, resolvedInterval)
		};
	};
	const tokensInput = seriesFor(AGENT_TOKENS_INPUT_EVENT_METRIC);
	const tokensOutput = seriesFor(AGENT_TOKENS_OUTPUT_EVENT_METRIC);
	const messages = seriesFor(AGENT_MESSAGES_EVENT_METRIC);
	const conversations = seriesFor(AGENT_CONVERSATIONS_EVENT_METRIC);
	const toolCalls = seriesFor(AGENT_TOOL_CALLS_EVENT_METRIC);
	const automations = seriesFor(AGENT_AUTOMATIONS_EVENT_METRIC);
	const tokensBreakdownPoints = mergeChartPointsSeries([tokensInput.chartPoints, tokensOutput.chartPoints]);
	const tokensBreakdownPrevious = mergeChartPointsSeries([tokensInput.previousChartPoints, tokensOutput.previousChartPoints]);
	const activityPoints = mergeChartPointsSeries([
		messages.chartPoints,
		conversations.chartPoints,
		toolCalls.chartPoints
	]);
	const activityPrevious = mergeChartPointsSeries([
		messages.previousChartPoints,
		conversations.previousChartPoints,
		toolCalls.previousChartPoints
	]);
	const overview = emptyAgentUsageOverview();
	overview.automations = buildSeriesOverview(automations.chartPoints, automations.previousChartPoints, comparisonMode);
	overview.tokensBreakdown = {
		...buildSeriesOverview(tokensBreakdownPoints, tokensBreakdownPrevious, comparisonMode),
		multiSeriesPoints: mergeKeyedSeriesPoints(tokensBreakdownPoints, {
			input: tokensInput.chartPoints,
			output: tokensOutput.chartPoints
		}),
		series: AGENT_TOKENS_BREAKDOWN_SERIES
	};
	overview.activity = {
		...buildSeriesOverview(activityPoints, activityPrevious, comparisonMode),
		multiSeriesPoints: mergeKeyedSeriesPoints(activityPoints, {
			messages: messages.chartPoints,
			conversations: conversations.chartPoints,
			toolCalls: toolCalls.chartPoints
		}),
		series: AGENT_ACTIVITY_SERIES
	};
	return overview;
}
function agentUsageRangeKey(dateRange) {
	if (!dateRange?.from || !dateRange?.to) {
		const { from: from$1, to: to$1 } = resolveUsageDateBounds(getStableUsageChartDateRange());
		return `${from$1.toISOString()}|${to$1.toISOString()}`;
	}
	const { from, to } = resolveUsageDateBounds(dateRange);
	return `${from.toISOString()}|${to.toISOString()}`;
}
function accountAgentUsageQueryOptions(dateRange, interval = "1h") {
	return queryOptions({
		queryKey: [
			"usage-events",
			"agent",
			"account",
			"overview",
			agentUsageRangeKey(dateRange),
			interval
		],
		queryFn: () => fetchAccountAgentUsageOverview(dateRange, interval),
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		meta: { skipInitialLoader: true }
	});
}
function useAccountAgentUsage(dateRange, interval = "1h", enabled = true) {
	return useQuery({
		...accountAgentUsageQueryOptions(dateRange, interval),
		enabled
	});
}
function refetchAccountAgentUsageQueries(queryClient) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey[0] === "usage-events" && query.queryKey[1] === "agent" && query.queryKey[2] === "account" });
}
function splitAuthLabel(authLabel) {
	if (!authLabel?.trim()) return [];
	return authLabel.split(",").map((item) => item.trim()).filter(Boolean);
}
function getMethodAuthKeys(method) {
	const auth = method.xAppwrite?.auth;
	if (auth && Object.keys(auth).length > 0) return Object.keys(auth);
	return splitAuthLabel(method.authLabel);
}
function methodRequiresSessionAuthChoice(method, platform) {
	if (platform === "client") return true;
	const keys = getMethodAuthKeys(method);
	return keys.includes("Session") || keys.includes("JWT");
}
function methodRequiresApiKey(method, platform) {
	if (platform !== "server") return false;
	return getMethodAuthKeys(method).includes("Key");
}
function allowsApiKeyInSecurity$1(method) {
	return Boolean(method.security?.[0]?.Key);
}
function methodSupportsServerApiKey(method, platform) {
	if (platform !== "server") return false;
	if (methodRequiresApiKey(method, platform)) return true;
	return allowsApiKeyInSecurity$1(method) && !getMethodAuthKeys(method).includes("Key");
}
function methodSupportsServerSessionAuth(method, platform) {
	if (platform !== "server") return false;
	return !methodSupportsServerApiKey(method, platform);
}
function methodUsesSessionAuthChoice(method, platform) {
	if (platform === "client") return methodRequiresSessionAuthChoice(method, platform);
	return methodSupportsServerSessionAuth(method, platform);
}
function getMethodRequiredScopes(method) {
	if (!method.scope?.trim()) return [];
	return method.scope.split(",").map((scope) => scope.trim()).filter(Boolean);
}
function resolveServerAuthApiKey(serverAuth) {
	return (serverAuth.mode === "manual" ? serverAuth.manualApiKey : serverAuth.ephemeralApiKey).trim() || void 0;
}
function scopesIncludeRequired(keyScopes, requiredScopes) {
	if (requiredScopes.length === 0) return true;
	const keySet = new Set(keyScopes);
	return requiredScopes.every((scope) => keySet.has(scope));
}
function getScopesMissingFromKey(keyScopes, requiredScopes) {
	const keySet = new Set(keyScopes);
	return requiredScopes.filter((scope) => !keySet.has(scope));
}
function mergeUniqueScopes(...scopeLists) {
	return [...new Set(scopeLists.flat())];
}
const API_EXPLORER_AUTH_LOCAL_STORAGE_KEY = "console.apiExplorer.auth";
const DEFAULT_API_EXPLORER_CLIENT_AUTH = {
	mode: "guest",
	userId: ""
};
const DEFAULT_API_EXPLORER_SERVER_AUTH = {
	mode: "manual",
	manualApiKey: "",
	ephemeralApiKey: "",
	ephemeralDraftScopes: [],
	ephemeralKeyScopes: []
};
function parsePlatform(value) {
	if (value === "client" || value === "server") return value;
}
function parseSessionAuthMode(value) {
	return value === "user" ? "user" : "guest";
}
function parseServerAuthMode(value) {
	return value === "ephemeral" ? "ephemeral" : "manual";
}
function parseStringArray(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string");
}
function parseApiExplorerClientAuth(raw) {
	if (!raw || typeof raw !== "object") return { ...DEFAULT_API_EXPLORER_CLIENT_AUTH };
	const entry = raw;
	return {
		mode: parseSessionAuthMode(entry.mode),
		userId: typeof entry.userId === "string" ? entry.userId : ""
	};
}
function parseApiExplorerServerAuth(raw) {
	if (!raw || typeof raw !== "object") return { ...DEFAULT_API_EXPLORER_SERVER_AUTH };
	const entry = raw;
	return {
		mode: parseServerAuthMode(entry.mode),
		manualApiKey: typeof entry.manualApiKey === "string" ? entry.manualApiKey : "",
		ephemeralApiKey: typeof entry.ephemeralApiKey === "string" ? entry.ephemeralApiKey : "",
		ephemeralDraftScopes: parseStringArray(entry.ephemeralDraftScopes),
		ephemeralKeyScopes: parseStringArray(entry.ephemeralKeyScopes)
	};
}
function readStoragePayload() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(API_EXPLORER_AUTH_LOCAL_STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return {};
		return parsed;
	} catch {
		return {};
	}
}
function readApiExplorerAuthFromLocalStorage(projectId) {
	if (!projectId) return null;
	const entry = readStoragePayload()[projectId];
	if (!entry || typeof entry !== "object") return null;
	const record = entry;
	const platform = parsePlatform(record.platform);
	const partial = {};
	if (platform) partial.platform = platform;
	if (record.clientAuth !== void 0) partial.clientAuth = parseApiExplorerClientAuth(record.clientAuth);
	if (record.serverAuth !== void 0) partial.serverAuth = parseApiExplorerServerAuth(record.serverAuth);
	if (!partial.platform && !partial.clientAuth && !partial.serverAuth) return null;
	return partial;
}
function writeApiExplorerAuthToLocalStorage(projectId, snapshot) {
	if (typeof window === "undefined" || !projectId) return;
	try {
		const payload = readStoragePayload();
		payload[projectId] = snapshot;
		localStorage.setItem(API_EXPLORER_AUTH_LOCAL_STORAGE_KEY, JSON.stringify(payload));
	} catch {}
}
function resolveApiExplorerAuthSnapshot(projectId, fallbackPlatform) {
	const stored = readApiExplorerAuthFromLocalStorage(projectId);
	return {
		platform: stored?.platform ?? fallbackPlatform,
		clientAuth: stored?.clientAuth ?? { ...DEFAULT_API_EXPLORER_CLIENT_AUTH },
		serverAuth: stored?.serverAuth ?? { ...DEFAULT_API_EXPLORER_SERVER_AUTH }
	};
}
var API_EXPLORER_AUTH_PERSIST_DEBOUNCE_MS = 300;
function useApiExplorerAuthPersistence(projectId, fallbackPlatform) {
	const [internalPlatform, setInternalPlatformState] = useState(() => resolveApiExplorerAuthSnapshot(projectId, fallbackPlatform).platform);
	const [clientAuth, setClientAuthState] = useState(() => resolveApiExplorerAuthSnapshot(projectId, fallbackPlatform).clientAuth);
	const [serverAuth, setServerAuthState] = useState(() => resolveApiExplorerAuthSnapshot(projectId, fallbackPlatform).serverAuth);
	const skipPersistRef = useRef(true);
	const persistTimerRef = useRef(null);
	const pendingSnapshotRef = useRef(null);
	const hydrateFromStorage = useCallback((nextProjectId, nextFallbackPlatform) => {
		skipPersistRef.current = true;
		const snapshot = resolveApiExplorerAuthSnapshot(nextProjectId, nextFallbackPlatform);
		setInternalPlatformState(snapshot.platform);
		setClientAuthState(snapshot.clientAuth);
		setServerAuthState(snapshot.serverAuth);
		queueMicrotask(() => {
			skipPersistRef.current = false;
		});
	}, []);
	useEffect(() => {
		hydrateFromStorage(projectId, fallbackPlatform);
	}, [
		fallbackPlatform,
		hydrateFromStorage,
		projectId
	]);
	const schedulePersist = useCallback((snapshot) => {
		if (skipPersistRef.current || !projectId) return;
		pendingSnapshotRef.current = snapshot;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			const pending = pendingSnapshotRef.current;
			if (!pending) return;
			pendingSnapshotRef.current = null;
			writeApiExplorerAuthToLocalStorage(projectId, pending);
		}, API_EXPLORER_AUTH_PERSIST_DEBOUNCE_MS);
	}, [projectId]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	useEffect(() => {
		schedulePersist({
			platform: internalPlatform,
			clientAuth,
			serverAuth
		});
	}, [
		clientAuth,
		internalPlatform,
		schedulePersist,
		serverAuth
	]);
	return {
		internalPlatform,
		setInternalPlatform: useCallback((platform) => {
			setInternalPlatformState(platform);
		}, []),
		clientAuth,
		setClientAuth: useCallback((value) => {
			setClientAuthState(value);
		}, []),
		serverAuth,
		setServerAuth: useCallback((value) => {
			setServerAuthState(value);
		}, [])
	};
}
var EPHEMERAL_KEY_TTL_SECONDS = 3600;
async function createEphemeralApiKeyForExplorer(projectId, scopes) {
	if (scopes.length === 0) throw new Error("This endpoint has no listed scopes for an ephemeral key.");
	const result = await sdk.forProject(projectId).project.createEphemeralKey({
		scopes,
		duration: EPHEMERAL_KEY_TTL_SECONDS
	});
	if (!result.secret?.trim()) throw new Error("Failed to create ephemeral API key: empty secret");
	return {
		keyId: result.$id,
		secret: result.secret,
		expire: result.expire,
		scopes: result.scopes
	};
}
async function explorerFetch(url, init = {}) {
	return fetch(url, {
		...init,
		credentials: "omit",
		mode: "cors",
		cache: "no-store",
		headers: init.headers
	});
}
async function createUserJwtForExplorer(projectId, userId) {
	const url = `${getProjectApiEndpoint(projectId).replace(/\/$/, "")}/users/${encodeURIComponent(userId)}/jwts`;
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Appwrite-Project": projectId,
			"X-Appwrite-Mode": "admin"
		},
		credentials: "include",
		body: JSON.stringify({})
	});
	const text = await response.text();
	let data = {};
	if (text.trim()) try {
		data = JSON.parse(text);
	} catch {
		data = { message: text };
	}
	if (!response.ok) throw new Error(data.message || `Failed to create JWT (${response.status})`);
	if (!data.jwt?.trim()) throw new Error("Failed to create JWT: empty response");
	return data.jwt;
}
var NUMBERED_CONSOLE_SPEC_LOADERS = {
	"1.9.x": () => import("./open-api3-1.9.x-console-BPDVrAvk.js"),
	"1.8.x": () => import("./open-api3-1.8.x-console-DuCkPgsH.js")
};
var specLoaders = {
	server: () => import("./open-api3-latest-server-Cj-yLgfB.js"),
	client: () => import("./open-api3-latest-client-NmRJYJvS.js"),
	console: () => import("./open-api3-latest-console-BwZa9CDm.js")
};
var parsedCache = /* @__PURE__ */ new Map();
var rawSpecCache = /* @__PURE__ */ new Map();
var numberedConsoleSpecCache;
async function loadRawApiSpec(platform = "server") {
	const cached = rawSpecCache.get(platform);
	if (cached) return cached;
	const loader = specLoaders[platform];
	const module = await loader();
	rawSpecCache.set(platform, module.default);
	return module.default;
}
async function loadNumberedConsoleSpec() {
	if (numberedConsoleSpecCache) return numberedConsoleSpecCache;
	const preferred = NUMBERED_CONSOLE_SPEC_LOADERS[LATEST_EXAMPLES_VERSION];
	if (preferred) {
		numberedConsoleSpecCache = (await preferred()).default;
		return numberedConsoleSpecCache;
	}
	for (const loader of Object.values(NUMBERED_CONSOLE_SPEC_LOADERS)) try {
		numberedConsoleSpecCache = (await loader()).default;
		return numberedConsoleSpecCache;
	} catch {}
	numberedConsoleSpecCache = await loadRawApiSpec("console");
	return numberedConsoleSpecCache;
}
function consoleSpecHasNativeDatabaseServices(spec) {
	for (const pathItem of Object.values(spec.paths ?? {})) for (const [method, operation] of Object.entries(pathItem ?? {})) {
		if (method.startsWith("x-") || !operation || typeof operation !== "object") continue;
		const tags = operation.tags ?? [];
		if (tags.includes("postgresql") || tags.includes("mysql") || tags.includes("mongo")) return true;
	}
	return false;
}
async function loadConsoleSpecForNativeDatabases() {
	const latestConsole = await loadRawApiSpec("console");
	if (consoleSpecHasNativeDatabaseServices(latestConsole)) return latestConsole;
	return loadNumberedConsoleSpec();
}
async function loadParsedApiSpec(platform = "server") {
	const cached = parsedCache.get(platform);
	if (cached) return cached;
	let parsed = parseOpenApiSpec(await loadRawApiSpec(platform), platform);
	if (platform === "server" || platform === "client") {
		const consoleParsed = parseOpenApiSpec(await loadConsoleSpecForNativeDatabases(), "console");
		parsed = mergeConsoleOnlyDatabaseServices(parsed, consoleParsed);
	}
	parsedCache.set(platform, parsed);
	return parsed;
}
function downloadJsonFile(content, filename) {
	const blob = new Blob([content], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
async function downloadOpenApiSpec(platform) {
	const spec = await loadRawApiSpec(platform);
	downloadJsonFile(JSON.stringify(spec, null, 2), `appwrite-open-api3-${platform}.json`);
}
var proxyApiExplorerRequestSchema = z.object({
	url: z.string().url(),
	method: z.string().min(1),
	headers: z.record(z.string(), z.string()),
	body: z.string().optional(),
	allowedEndpoint: z.string().url()
});
var proxyApiExplorerRequestFn_createServerFn_handler = createServerRpc("src_server_functions_api-explorer_ts--proxyApiExplorerRequestFn_createServerFn_handler", (opts, signal) => {
	return proxyApiExplorerRequestFn.__executeServer(opts, signal);
});
const proxyApiExplorerRequestFn = createServerFn({ method: "POST" }).inputValidator(proxyApiExplorerRequestSchema).handler(proxyApiExplorerRequestFn_createServerFn_handler, async ({ data }) => {
	assertAllowedExplorerRequestUrl(data.url, data.allowedEndpoint);
	const startedAt = performance.now();
	const response = await fetch(data.url, {
		method: data.method.toUpperCase(),
		headers: data.headers,
		body: data.body,
		cache: "no-store",
		redirect: "manual"
	});
	const buffer = Buffer.from(await response.arrayBuffer());
	const responseHeaders = {};
	response.headers.forEach((value, key) => {
		responseHeaders[key] = value;
	});
	return {
		status: response.status,
		statusText: response.statusText,
		headers: responseHeaders,
		bodyBase64: buffer.toString("base64"),
		durationMs: Math.round(performance.now() - startedAt),
		ok: response.ok
	};
});
function buildExplorerRequestHeaders$1(input) {
	const headers = { "X-Appwrite-Project": input.projectId };
	if (input.contentType) headers["Content-Type"] = input.contentType;
	if (input.apiKey?.trim()) headers["X-Appwrite-Key"] = input.apiKey.trim();
	if (input.jwt?.trim()) headers["X-Appwrite-JWT"] = input.jwt.trim();
	return headers;
}
function buildRequestUrl$1(endpoint, path, pathParams, queryParams) {
	let resolvedPath = path;
	for (const [key, value] of Object.entries(pathParams)) resolvedPath = resolvedPath.replace(`{${key}}`, encodeURIComponent(value));
	const base = endpoint.replace(/\/$/, "");
	const url = new URL(`${base}${resolvedPath}`);
	for (const [key, value] of Object.entries(queryParams)) {
		if (value.trim() === "") continue;
		let parsedArray = null;
		try {
			const parsed = JSON.parse(value);
			if (Array.isArray(parsed)) parsedArray = parsed;
		} catch {
			parsedArray = null;
		}
		if (parsedArray) {
			for (const item of parsedArray) url.searchParams.append(`${key}[]`, String(item));
			continue;
		}
		url.searchParams.set(key, value);
	}
	return url.toString();
}
function formatResponseBody(body) {
	if (!body.trim()) return body;
	try {
		return JSON.stringify(JSON.parse(body), null, 2);
	} catch {
		return body;
	}
}
function getResponseHeader(headers, name) {
	const target = name.toLowerCase();
	for (const [key, value] of Object.entries(headers)) if (key.toLowerCase() === target) return value;
}
function parseImageContentType(contentType) {
	if (!contentType) return void 0;
	const mediaType = contentType.split(";")[0]?.trim().toLowerCase();
	return mediaType?.startsWith("image/") ? mediaType : void 0;
}
function base64ToArrayBuffer(base64) {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes.buffer;
}
function arrayBufferToDataUrl(buffer, mediaType) {
	const bytes = new Uint8Array(buffer);
	const chunks = [];
	const chunkSize = 32768;
	for (let i = 0; i < bytes.length; i += chunkSize) chunks.push(String.fromCharCode(...bytes.subarray(i, Math.min(i + chunkSize, bytes.length))));
	return `data:${mediaType};base64,${btoa(chunks.join(""))}`;
}
function formatBinaryImageBody(mediaType, byteSize) {
	return `(binary image, ${mediaType}, ${formatDecimalBytes(byteSize)})`;
}
function buildExecuteApiRequestResult(input) {
	const imageContentType = parseImageContentType(getResponseHeader(input.headers, "content-type"));
	if (imageContentType) return {
		status: input.status,
		statusText: input.statusText,
		headers: input.headers,
		body: formatBinaryImageBody(imageContentType, input.bodyBytes.byteLength),
		durationMs: input.durationMs,
		ok: input.ok,
		imagePreviewUrl: arrayBufferToDataUrl(input.bodyBytes, imageContentType),
		responseContentType: imageContentType,
		responseByteSize: input.bodyBytes.byteLength
	};
	const responseText = new TextDecoder().decode(input.bodyBytes);
	const responseContentType = getResponseHeader(input.headers, "content-type");
	return {
		status: input.status,
		statusText: input.statusText,
		headers: input.headers,
		body: formatResponseBody(responseText),
		durationMs: input.durationMs,
		ok: input.ok,
		responseContentType,
		responseByteSize: input.bodyBytes.byteLength
	};
}
async function executeApiRequest(input) {
	const { config, method, pathParams, queryParams, body, requestAuth } = input;
	const { endpoint, projectId, apiKey } = config;
	const contentType = method.contentType ?? "application/json";
	const hasBody = method.httpMethod !== "get" && method.httpMethod !== "head" && body !== void 0 && body.trim() !== "";
	const headers = buildExplorerRequestHeaders$1({
		projectId,
		apiKey,
		jwt: requestAuth?.mode === "user" ? requestAuth.jwt : void 0,
		contentType: hasBody && contentType === "application/json" ? contentType : void 0
	});
	const proxied = await proxyApiExplorerRequestFn({ data: {
		url: buildRequestUrl$1(endpoint, method.path, pathParams, queryParams),
		method: method.httpMethod.toUpperCase(),
		headers,
		body: hasBody ? body : void 0,
		allowedEndpoint: endpoint
	} });
	return buildExecuteApiRequestResult({
		status: proxied.status,
		statusText: proxied.statusText,
		headers: proxied.headers,
		bodyBytes: base64ToArrayBuffer(proxied.bodyBase64),
		durationMs: proxied.durationMs,
		ok: proxied.ok
	});
}
async function executeApiMultipartRequest(input) {
	const { config, method, pathParams, queryParams, formData, requestAuth } = input;
	const { endpoint, projectId, apiKey } = config;
	const headers = buildExplorerRequestHeaders$1({
		projectId,
		apiKey,
		jwt: requestAuth?.mode === "user" ? requestAuth.jwt : void 0
	});
	const url = buildRequestUrl$1(endpoint, method.path, pathParams, queryParams);
	assertAllowedExplorerRequestUrl(url, endpoint);
	const started = performance.now();
	const response = await explorerFetch(url, {
		method: method.httpMethod.toUpperCase(),
		headers,
		body: formData
	});
	const durationMs = Math.round(performance.now() - started);
	const bodyBytes = await response.arrayBuffer();
	const responseHeaders = {};
	response.headers.forEach((value, key) => {
		responseHeaders[key] = value;
	});
	return buildExecuteApiRequestResult({
		status: response.status,
		statusText: response.statusText,
		headers: responseHeaders,
		bodyBytes,
		durationMs,
		ok: response.ok
	});
}
function isMultipartMethod(method) {
	return method.contentType === "multipart/form-data";
}
function shellQuote(value) {
	return `'${value.replace(/'/g, `'\\''`)}'`;
}
function buildExplorerRequestHeaders(input) {
	const headers = { "X-Appwrite-Project": input.projectId };
	if (input.contentType) headers["Content-Type"] = input.contentType;
	if (input.apiKey?.trim()) headers["X-Appwrite-Key"] = input.apiKey.trim();
	if (input.jwt?.trim()) headers["X-Appwrite-JWT"] = input.jwt.trim();
	return headers;
}
function buildRequestUrl(endpoint, path, pathParams, queryParams) {
	let resolvedPath = path;
	for (const [key, value] of Object.entries(pathParams)) resolvedPath = resolvedPath.replace(`{${key}}`, encodeURIComponent(value));
	const base = endpoint.replace(/\/$/, "");
	const url = new URL(`${base}${resolvedPath}`);
	for (const [key, value] of Object.entries(queryParams)) {
		if (value.trim() === "") continue;
		let parsedArray = null;
		try {
			const parsed = JSON.parse(value);
			if (Array.isArray(parsed)) parsedArray = parsed;
		} catch {
			parsedArray = null;
		}
		if (parsedArray) {
			for (const item of parsedArray) url.searchParams.append(`${key}[]`, String(item));
			continue;
		}
		url.searchParams.set(key, value);
	}
	return url.toString();
}
function buildCurlCommand(input) {
	const { config, method, pathParams, queryParams, body, formData, requestAuth } = input;
	const methodUpper = method.httpMethod.toUpperCase();
	const url = buildRequestUrl(config.endpoint, method.path, pathParams, queryParams);
	const contentType = method.contentType ?? "application/json";
	const hasJsonBody = !formData && body !== void 0 && body.trim() !== "" && methodUpper !== "GET" && methodUpper !== "HEAD";
	const headers = buildExplorerRequestHeaders({
		projectId: config.projectId,
		apiKey: config.apiKey,
		jwt: requestAuth?.mode === "user" ? requestAuth.jwt : void 0,
		contentType: hasJsonBody && contentType === "application/json" ? contentType : void 0
	});
	const lines = [`curl -X ${methodUpper} ${shellQuote(url)} \\`];
	for (const [key, value] of Object.entries(headers)) lines.push(`  -H ${shellQuote(`${key}: ${value}`)} \\`);
	if (formData) for (const [key, value] of formData.entries()) if (value instanceof File) lines.push(`  -F ${shellQuote(`${key}=@${value.name}`)} \\`);
	else lines.push(`  -F ${shellQuote(`${key}=${String(value)}`)} \\`);
	else if (hasJsonBody) lines.push(`  -d ${shellQuote(body)} \\`);
	const lastIndex = lines.length - 1;
	lines[lastIndex] = lines[lastIndex].replace(/ \\$/, "");
	return lines.join("\n");
}
function methodRequiresSendConfirmation(method) {
	const httpMethod = method.httpMethod.toLowerCase();
	if (httpMethod === "delete" || httpMethod === "put" || httpMethod === "patch") return true;
	if (httpMethod !== "post") return false;
	const operationId = method.operationId.toLowerCase();
	const summary = method.summary.trim().toLowerCase();
	return operationId.includes("update") || summary.startsWith("update ");
}
function getSendRequestConfirmationCopy(method) {
	if (method.httpMethod.toLowerCase() === "delete") return {
		title: "Send delete request",
		description: `This will call the live API for "${method.summary}" and may permanently delete data. This action cannot be undone.`,
		confirmVariant: "destructive"
	};
	return {
		title: "Send update request",
		description: `This will call the live API for "${method.summary}" and may modify data in your project.`,
		confirmVariant: "default"
	};
}
function getDefaultExplorerMethod(services) {
	if (services.length === 0) return void 0;
	const productGroups = groupServicesByProduct(services);
	for (const group of productGroups) for (const service of group.services) {
		const firstMethod = service.methods[0];
		if (firstMethod) return firstMethod;
	}
	return services[0]?.methods[0];
}
function resolveExplorerSelection(input) {
	const { visibleServices, initialServiceId, initialOperationId, preservedOperationId } = input;
	if (visibleServices.length === 0) return {
		method: void 0,
		serviceId: null
	};
	const initialMethod = findMethodByOperationId(visibleServices, initialOperationId ?? void 0);
	if (initialMethod) return {
		method: initialMethod,
		serviceId: initialMethod.service
	};
	const preservedMethod = findMethodByOperationId(visibleServices, preservedOperationId ?? void 0);
	if (preservedMethod) return {
		method: preservedMethod,
		serviceId: preservedMethod.service
	};
	const serviceFromUrl = initialServiceId ? visibleServices.find((service) => service.id === initialServiceId) : void 0;
	if (serviceFromUrl?.methods[0]) return {
		method: serviceFromUrl.methods[0],
		serviceId: serviceFromUrl.id
	};
	const defaultMethod = getDefaultExplorerMethod(visibleServices);
	if (defaultMethod) return {
		method: defaultMethod,
		serviceId: defaultMethod.service
	};
	return {
		method: void 0,
		serviceId: serviceFromUrl?.id ?? visibleServices[0]?.id ?? null
	};
}
function getExplorerMethodRoute(input) {
	return {
		to: "/projects/$projectId/explorer",
		params: { projectId: input.projectId },
		search: {
			service: input.serviceId,
			operation: input.operationId
		}
	};
}
function getExplorerMethodLinkUrl(input) {
	const url = new URL(window.location.origin);
	url.pathname = `/projects/${input.projectId}/explorer`;
	url.searchParams.set("service", input.serviceId);
	url.searchParams.set("operation", input.operationId);
	return url.toString();
}
var TIME_UNITS = [
	{
		seconds: 86400,
		singular: "day",
		plural: "days"
	},
	{
		seconds: 3600,
		singular: "hour",
		plural: "hours"
	},
	{
		seconds: 60,
		singular: "minute",
		plural: "minutes"
	},
	{
		seconds: 1,
		singular: "second",
		plural: "seconds"
	}
];
var RATE_KEY_DIMENSIONS = {
	url: "endpoint",
	ip: "ip",
	userId: "user",
	email: "email",
	challengeId: "challenge"
};
function formatRateLimitWindow(seconds) {
	for (const unit of TIME_UNITS) {
		if (seconds % unit.seconds !== 0) continue;
		const count = seconds / unit.seconds;
		if (count === 1) return unit.singular;
		return `${count} ${unit.plural}`;
	}
	return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
}
function parseRateKeyDimensions(rateKey) {
	const seen = /* @__PURE__ */ new Set();
	const dimensions = [];
	for (const segment of rateKey.split(",")) {
		const trimmed = segment.trim();
		if (!trimmed) continue;
		const colonIndex = trimmed.indexOf(":");
		const dimension = RATE_KEY_DIMENSIONS[colonIndex === -1 ? trimmed : trimmed.slice(0, colonIndex).trim()];
		if (!dimension || seen.has(dimension)) continue;
		seen.add(dimension);
		dimensions.push(dimension);
	}
	return dimensions;
}
function normalizeRateKeys(rateKey) {
	if (!rateKey) return [];
	return (Array.isArray(rateKey) ? rateKey : [rateKey]).filter(Boolean);
}
function formatScopePhrase(dimensions) {
	const has = (dimension) => dimensions.includes(dimension);
	if (has("endpoint") && has("ip")) return "each IP address calling this endpoint";
	if (has("endpoint") && has("user")) return "each user calling this endpoint";
	if (has("endpoint") && has("email")) return "each email address using this endpoint";
	if (has("endpoint") && has("challenge")) return "each verification challenge on this endpoint";
	if (has("ip") && has("user")) return "each user from the same IP address";
	if (has("ip") && has("email")) return "each email address from the same IP address";
	if (has("endpoint")) return "this endpoint";
	if (has("ip")) return "each IP address";
	if (has("user")) return "each user";
	if (has("email")) return "each email address";
	if (has("challenge")) return "each verification challenge";
	return null;
}
function joinNaturalList(items) {
	if (items.length === 0) return "";
	if (items.length === 1) return items[0];
	if (items.length === 2) return `${items[0]} and ${items[1]}`;
	return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}
function buildScopedRateLimitText(limit, windowSeconds, scopePhrase) {
	const windowLabel = formatRateLimitWindow(windowSeconds);
	return `Up to ${limit} ${limit === 1 ? "request" : "requests"} per ${windowLabel} for ${scopePhrase}.`;
}
function buildHumanRateLimitText(limit, windowSeconds = 3600, rateKey) {
	const keys = normalizeRateKeys(rateKey);
	const windowLabel = formatRateLimitWindow(windowSeconds);
	const requestLabel = limit === 1 ? "request" : "requests";
	if (keys.length === 0) return `Up to ${limit} ${requestLabel} per ${windowLabel}.`;
	const scopePhrases = keys.map(parseRateKeyDimensions).map(formatScopePhrase).filter((phrase) => Boolean(phrase));
	if (scopePhrases.length === 0) return `Up to ${limit} ${requestLabel} per ${windowLabel}.`;
	if (scopePhrases.length === 1) return buildScopedRateLimitText(limit, windowSeconds, scopePhrases[0]);
	return `Up to ${limit} ${requestLabel} per ${windowLabel}, counted separately for ${joinNaturalList(scopePhrases)}.`;
}
const API_KEY_RATE_LIMIT_BYPASS_NOTE = "Server API key requests bypass this rate limit.";
function getRateLimitDescription(limit, windowSeconds = 3600, rateKey) {
	return {
		text: buildHumanRateLimitText(limit, windowSeconds, rateKey),
		apiKeyNote: limit > 0 ? API_KEY_RATE_LIMIT_BYPASS_NOTE : void 0
	};
}
function formatRateLimitDescription(limit, windowSeconds = 3600, rateKey) {
	const description = getRateLimitDescription(limit, windowSeconds, rateKey);
	const lines = [description.text];
	if (description.apiKeyNote) lines.push(description.apiKeyNote);
	return lines.join("\n\n");
}
const IMPERSONATION_DOCS_HREF = "/docs/products/auth/impersonation";
var USER_AUTH_SCHEMES = new Set([
	"Session",
	"JWT",
	"Cookie"
]);
var IMPERSONATION_SCHEMES = new Set([
	"ImpersonateUserId",
	"ImpersonateUserEmail",
	"ImpersonateUserPhone"
]);
function getAuthMap(method) {
	return method.xAppwrite?.auth ?? {};
}
function getSecurityMap(method) {
	return method.security?.[0] ?? {};
}
function getRequiredSchemeNames(method) {
	const auth = getAuthMap(method);
	if (Object.keys(auth).length > 0) return Object.keys(auth);
	const security = getSecurityMap(method);
	if (Object.keys(security).length > 0) return Object.keys(security);
	return ["Project"];
}
function getUserAuthOptions(method) {
	const auth = getAuthMap(method);
	const security = getSecurityMap(method);
	const options = [];
	const seen = /* @__PURE__ */ new Set();
	for (const scheme of [...Object.keys(auth), ...Object.keys(security)]) {
		if (!USER_AUTH_SCHEMES.has(scheme) || seen.has(scheme)) continue;
		seen.add(scheme);
		options.push(scheme);
	}
	return options;
}
function getImpersonationSchemes(method) {
	const schemes = [];
	const seen = /* @__PURE__ */ new Set();
	for (const scheme of [...Object.keys(getAuthMap(method)), ...Object.keys(getSecurityMap(method))]) {
		if (!IMPERSONATION_SCHEMES.has(scheme) || seen.has(scheme)) continue;
		seen.add(scheme);
		schemes.push(scheme);
	}
	return schemes;
}
function securityHasOnlyProject(method) {
	const schemes = Object.keys(getSecurityMap(method));
	return schemes.length > 0 && schemes.every((scheme) => scheme === "Project" || scheme === "ProjectPath");
}
function isProjectOnlyGuestEndpoint(method) {
	if (["avatars", "locale"].includes(method.service)) return true;
	if (method.service !== "account") return false;
	const { path, httpMethod } = method;
	if (path === "/account" && httpMethod === "post") return true;
	if (path.startsWith("/account/recovery")) return true;
	if (path.startsWith("/account/tokens/") && httpMethod === "post") return true;
	if (path.startsWith("/account/sessions/") && httpMethod === "post") return true;
	if (path.startsWith("/account/sessions/oauth2/") && httpMethod === "get") return true;
	if (path === "/account/sessions/magic-url" && httpMethod === "put") return true;
	if (path === "/account/sessions/phone" && httpMethod === "put") return true;
	return false;
}
function requiresKeyInAuth(method) {
	return "Key" in getAuthMap(method);
}
function allowsApiKeyInSecurity(method) {
	return "Key" in getSecurityMap(method);
}
function isClientPlatform(platform) {
	return platform === "client" || Boolean(platform?.startsWith("client-"));
}
function isServerPlatform(platform) {
	return platform === "server" || Boolean(platform?.startsWith("server-"));
}
function isConsolePlatform(platform) {
	return platform === "console";
}
function allowsApiKeyAlternative(method, platform) {
	if (!isServerPlatform(platform) || !allowsApiKeyInSecurity(method)) return false;
	return !requiresKeyInAuth(method);
}
function requiresUserAuthentication(method, platform) {
	const auth = getAuthMap(method);
	if (Object.keys(auth).some((scheme) => USER_AUTH_SCHEMES.has(scheme))) return true;
	if ("Key" in auth && !("Session" in auth) && !("JWT" in auth)) return false;
	if (isProjectOnlyGuestEndpoint(method)) return false;
	if (platform === "console" && securityHasOnlyProject(method)) return false;
	return getUserAuthOptions(method).length > 0;
}
function buildAuthDescriptionContext(method, platform) {
	const required = getRequiredSchemeNames(method);
	const userAuthOptions = getUserAuthOptions(method);
	return {
		requiresProject: required.includes("Project") || required.includes("ProjectPath"),
		requiresKey: requiresKeyInAuth(method),
		allowsApiKeyAlt: allowsApiKeyAlternative(method, platform),
		requiresUser: requiresUserAuthentication(method, platform),
		allowsUserWithKey: requiresKeyInAuth(method) && userAuthOptions.length > 0 && !requiresUserAuthentication(method, platform),
		userAuthOptions,
		impersonationSchemes: getImpersonationSchemes(method)
	};
}
function formatRestSentence(ctx, platform) {
	if (isClientPlatform(platform)) return null;
	const { requiresProject, requiresKey, requiresUser, allowsApiKeyAlt, allowsUserWithKey, userAuthOptions } = ctx;
	if (!requiresUser && !requiresKey && !allowsApiKeyAlt) return null;
	const project = requiresProject ? "`X-Appwrite-Project`" : null;
	if (requiresKey && !requiresUser && !allowsUserWithKey && project) return `For direct REST calls, send ${project} and \`X-Appwrite-Key\`.`;
	if (requiresProject && requiresUser && allowsApiKeyAlt && userAuthOptions.length > 0) return `For direct REST calls, send ${project} with either \`X-Appwrite-Key\` or session/JWT headers.`;
	if (requiresProject && requiresUser && userAuthOptions.length > 0) return `For direct REST calls, send ${project} with session/JWT headers.`;
	if (requiresKey && allowsUserWithKey && userAuthOptions.length > 0 && project) return `For direct REST calls, send ${project} with either \`X-Appwrite-Key\` or session/JWT headers.`;
	return null;
}
function buildAuthSummary(ctx, method, platform) {
	const { requiresProject, requiresKey, allowsApiKeyAlt, requiresUser, allowsUserWithKey, userAuthOptions } = ctx;
	const sentences = [];
	if (!requiresProject && requiresKey) sentences.push("Initialize the Appwrite client with a server API key (`setKey()`).");
	else if (requiresKey && allowsUserWithKey && userAuthOptions.length > 0) sentences.push("Initialize the Appwrite client with `setProject()` and a server API key (`setKey()`), or authenticate as a signed-in user (`setSession()` or `setJWT()`).");
	else if (requiresProject && requiresKey && !requiresUser) sentences.push("Initialize the Appwrite client with `setProject()` and a server API key (`setKey()`).");
	else if (requiresProject && requiresUser && allowsApiKeyAlt && userAuthOptions.length > 0) sentences.push("Initialize the Appwrite client with `setProject()` and authenticate with either a server API key (`setKey()`) or a signed-in user (`setSession()` or `setJWT()`).");
	else if (requiresProject && requiresUser && userAuthOptions.length > 0) if (isClientPlatform(platform)) sentences.push("Initialize the Appwrite client with `setProject()` and ensure the user is signed in. The SDK sends the session header automatically after login.");
	else sentences.push("Initialize the Appwrite client with `setProject()` and a signed-in user (`setSession()` or `setJWT()`).");
	else if (isConsolePlatform(platform) && securityHasOnlyProject(method) && requiresProject && !requiresUser && !requiresKey) sentences.push("Initialize the Appwrite client with `setProject()`. The Console uses your browser session for cloud account login.");
	else if (requiresProject && !requiresKey && !requiresUser) sentences.push("Initialize the Appwrite client with `setProject()`. No signed-in user or server API key is required.");
	else sentences.push("See the endpoint security requirements before calling this route.");
	const rest = formatRestSentence(ctx, platform);
	if (rest) sentences.push(rest);
	return sentences.join(" ");
}
function getMethodAuthDescription(method, platform) {
	const ctx = buildAuthDescriptionContext(method, platform);
	return {
		summary: buildAuthSummary(ctx, method, platform),
		impersonation: ctx.impersonationSchemes.length > 0
	};
}
function formatMethodAuthDescription(method, platform) {
	const description = getMethodAuthDescription(method, platform);
	const lines = [description.summary];
	if (description.impersonation) lines.push(`Supports optional user impersonation. Learn more: ${IMPERSONATION_DOCS_HREF}`);
	return lines.join("\n\n");
}
async function fetchParsedApiSpec(platform) {
	return loadParsedApiSpec(platform);
}
function apiExplorerSpecQueryOptions(platform) {
	return queryOptions({
		queryKey: [
			"api-explorer",
			"spec",
			platform
		],
		queryFn: () => fetchParsedApiSpec(platform),
		staleTime: Infinity,
		gcTime: Infinity,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useApiExplorerSpec(platform) {
	return useQuery(apiExplorerSpecQueryOptions(platform));
}
async function fetchProjectActivities({ projectId, limit = 150, cursorAfter, cursorBefore, mergedSince, until, extraQueries }) {
	if (!projectId) return {
		events: [],
		hasMore: false
	};
	const queries = [Query.orderDesc("time"), Query.limit(limit)];
	if (cursorBefore) queries.push(Query.cursorBefore(cursorBefore));
	else if (cursorAfter) queries.push(Query.cursorAfter(cursorAfter));
	queries.push(Query.greaterThanEqual("time", mergedSince));
	if (until) queries.push(Query.lessThanEqual("time", until));
	for (const q of extraQueries ?? []) queries.push(q);
	const events = (await sdk.forProject(projectId).activities.listEvents({ queries })).events ?? [];
	return {
		events,
		hasMore: events.length === limit
	};
}
function activitiesQueryOptions(params) {
	const { projectId, limit = 150, cursorAfter = null, cursorBefore = null, planRetentionHours, filterQueryKey } = params;
	return queryOptions({
		queryKey: [
			"activities",
			"project",
			projectId,
			limit,
			cursorAfter ?? null,
			cursorBefore ?? null,
			planRetentionHours,
			filterQueryKey ?? null
		],
		queryFn: () => {
			const planSinceIso = (/* @__PURE__ */ new Date(Date.now() - planRetentionHours * 60 * 60 * 1e3)).toISOString();
			const { mergedSince, until, extraQueries } = getActivityFilterQueryParts(queryParamToMap(filterQueryKey), planSinceIso);
			return fetchProjectActivities({
				projectId,
				limit,
				cursorAfter,
				cursorBefore,
				mergedSince,
				until,
				extraQueries
			});
		},
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		placeholderData: keepPreviousData,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
async function fetchProjectActivityEvent(projectId, eventId) {
	return sdk.forProject(projectId).activities.getEvent({ eventId });
}
function activityEventQueryOptions(projectId, eventId) {
	return queryOptions({
		queryKey: [
			"activity",
			"project",
			projectId,
			eventId
		],
		queryFn: () => fetchProjectActivityEvent(projectId, eventId),
		staleTime: DEFAULT_STALE_TIME,
		retry: false
	});
}
function useProjectActivities(params) {
	const { data, isLoading, isFetching, error, refetch } = useQuery(activitiesQueryOptions(params));
	return {
		events: data?.events ?? [],
		hasMore: data?.hasMore ?? false,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProjectActivity(projectId, eventId) {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: [
			"activity",
			"project",
			projectId,
			eventId
		],
		queryFn: () => fetchProjectActivityEvent(projectId, eventId),
		enabled: !!projectId && !!eventId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false
	});
	return {
		event: data ?? null,
		isLoading,
		error,
		refetch
	};
}
const BANDWIDTH_EVENT_METRICS = ["network.inbound", "network.outbound"];
function formatBandwidthTotal(bytes) {
	return formatCompactBytes(bytes, { compact: true });
}
function formatBandwidthValue(bytes) {
	return formatCompactBytes(bytes, { compact: true });
}
function resolveBandwidthDualChartDisplay(points) {
	const hasDualFields = points.some((point) => typeof point.inbound === "number" && typeof point.outbound === "number");
	const stackedMax = hasDualFields ? points.reduce((max, point) => Math.max(max, (point.inbound ?? 0) + (point.outbound ?? 0)), 0) : 0;
	const showDualSeries = hasDualFields && stackedMax > 0;
	return {
		showDualSeries,
		axisMax: showDualSeries ? stackedMax : points.reduce((max, point) => Math.max(max, point.total ?? 0), 0)
	};
}
function resolveBandwidthStackedYAxisDomain(axisMax) {
	if (!Number.isFinite(axisMax) || axisMax <= 0) return void 0;
	return [0, axisMax];
}
function mergeBandwidthDualChartPoints(inbound, outbound) {
	if (inbound.length === 0) return outbound.map((point) => ({
		...point,
		inbound: 0,
		outbound: point.total
	}));
	return inbound.map((point, index) => {
		const outboundTotal = outbound[index]?.total ?? 0;
		return {
			date: point.date,
			day: point.day,
			inbound: point.total,
			outbound: outboundTotal,
			total: point.total + outboundTotal
		};
	});
}
async function fetchProjectBandwidthOverview(projectId, dateRange, interval = "1h", options) {
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const logRetentionHours = options?.logRetentionHours ?? 720;
	const [chartSeriesByMetric, breakdownByMetric] = await Promise.all([fetchUsageMetricsChartSeriesByMetric(projectId, BANDWIDTH_EVENT_METRICS, dateRange, interval, queries, logRetentionHours), includeBreakdown ? fetchUsageMetricsBreakdownByMetric(projectId, BANDWIDTH_EVENT_METRICS, dateRange, ["path"], 6, queries) : Promise.resolve(/* @__PURE__ */ new Map())]);
	const inbound = chartSeriesByMetric.get("network.inbound") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const outbound = chartSeriesByMetric.get("network.outbound") ?? {
		chartPoints: [],
		previousChartPoints: []
	};
	const inboundChartPoints = inbound.chartPoints;
	const outboundChartPoints = outbound.chartPoints;
	const chartPoints = mergeChartPointsSeries([inboundChartPoints, outboundChartPoints]);
	const previousChartPoints = mergeChartPointsSeries([inbound.previousChartPoints, outbound.previousChartPoints]);
	return {
		inboundChartPoints,
		outboundChartPoints,
		dualChartPoints: mergeBandwidthDualChartPoints(inboundChartPoints, outboundChartPoints),
		chartPoints,
		changePercent: computeChangePercent(sumUsageChartPoints(chartPoints), sumUsageChartPoints(previousChartPoints)),
		topConsumers: mergeTopEndpoints([breakdownByMetric.get("network.inbound") ?? [], breakdownByMetric.get("network.outbound") ?? []], 6)
	};
}
const EXECUTIONS_EVENT_METRICS = ["executions"];
const FUNCTION_EXECUTIONS_EVENT_METRICS = ["functions.executions"];
const SITE_EXECUTIONS_EVENT_METRICS = ["sites.executions"];
var EXECUTIONS_BREAKDOWN_DIMENSIONS = ["resourceId", "resourceType"];
function formatExecutionsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatExecutionsValue(count) {
	return formatCompactCount(count, { compact: true });
}
async function fetchExecutionsOverviewForMetrics(projectId, dateRange, metrics, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricsOverview(projectId, dateRange, metrics, interval, EXECUTIONS_BREAKDOWN_DIMENSIONS, 8, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints,
		topConsumers: overview.topEndpoints
	};
}
async function fetchProjectExecutionsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchExecutionsOverviewForMetrics(projectId, dateRange, EXECUTIONS_EVENT_METRICS, interval, options);
}
async function fetchProjectFunctionExecutionsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchExecutionsOverviewForMetrics(projectId, dateRange, FUNCTION_EXECUTIONS_EVENT_METRICS, interval, options);
}
async function fetchProjectSiteExecutionsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchExecutionsOverviewForMetrics(projectId, dateRange, SITE_EXECUTIONS_EVENT_METRICS, interval, options);
}
const GB_HOURS_MB_SECONDS_METRICS = ["executions.mbSeconds", "builds.mbSeconds"];
const FUNCTION_GB_HOURS_MB_SECONDS_METRICS = ["functions.executions.mbSeconds", "functions.builds.mbSeconds"];
const SITE_GB_HOURS_MB_SECONDS_METRICS = ["sites.executions.mbSeconds", "sites.builds.mbSeconds"];
var GB_HOURS_BREAKDOWN_DIMENSIONS = ["resourceId", "resourceType"];
function convertChartPointsToGbHours(points) {
	return points.map((point) => ({
		...point,
		total: mbSecondsToGbHours(point.total)
	}));
}
function convertTopConsumersToGbHours(items) {
	return items.map((item) => ({
		...item,
		count: mbSecondsToGbHours(item.count)
	}));
}
async function fetchGbHoursOverviewForMetrics(projectId, dateRange, metrics, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricsOverview(projectId, dateRange, metrics, interval, GB_HOURS_BREAKDOWN_DIMENSIONS, 8, options);
	return {
		chartPoints: convertChartPointsToGbHours(overview.chartPoints),
		topConsumers: convertTopConsumersToGbHours(overview.topEndpoints),
		changePercent: overview.changePercent
	};
}
async function fetchProjectGbHoursOverview(projectId, dateRange, interval = "1h", options) {
	return fetchGbHoursOverviewForMetrics(projectId, dateRange, GB_HOURS_MB_SECONDS_METRICS, interval, options);
}
async function fetchProjectFunctionGbHoursOverview(projectId, dateRange, interval = "1h", options) {
	return fetchGbHoursOverviewForMetrics(projectId, dateRange, FUNCTION_GB_HOURS_MB_SECONDS_METRICS, interval, options);
}
async function fetchProjectSiteGbHoursOverview(projectId, dateRange, interval = "1h", options) {
	return fetchGbHoursOverviewForMetrics(projectId, dateRange, SITE_GB_HOURS_MB_SECONDS_METRICS, interval, options);
}
const REQUESTS_BREAKDOWN_SECTIONS = [
	{
		dimension: "path",
		title: "Paths",
		description: "API endpoint paths with the highest request volume.",
		metricId: "breakdown-path",
		labelVariant: "mono"
	},
	{
		dimension: "method",
		title: "HTTP methods",
		description: "Request volume grouped by HTTP method.",
		metricId: "breakdown-method",
		labelVariant: "default"
	},
	{
		dimension: "status",
		title: "Status codes",
		description: "Request volume grouped by HTTP response status.",
		metricId: "breakdown-status",
		labelVariant: "default"
	},
	{
		dimension: "service",
		title: "Services",
		description: "Request volume grouped by Appwrite service segment.",
		metricId: "breakdown-service",
		labelVariant: "default"
	},
	{
		dimension: "country",
		title: "Countries",
		description: "Request volume grouped by caller country.",
		metricId: "breakdown-country",
		labelVariant: "default"
	},
	{
		dimension: "city",
		title: "Cities",
		description: "Request volume grouped by caller city.",
		metricId: "breakdown-city",
		labelVariant: "default"
	},
	{
		dimension: "hostname",
		title: "Hostnames",
		description: "Request volume grouped by caller hostname.",
		metricId: "breakdown-hostname",
		labelVariant: "mono"
	},
	{
		dimension: "ip",
		title: "IP addresses",
		description: "Request volume grouped by caller IP address.",
		metricId: "breakdown-ip",
		labelVariant: "mono"
	},
	{
		dimension: "osName",
		title: "Operating systems",
		description: "Request volume grouped by client operating system.",
		metricId: "breakdown-os",
		labelVariant: "default"
	},
	{
		dimension: "clientType",
		title: "Client types",
		description: "Request volume grouped by client type.",
		metricId: "breakdown-client-type",
		labelVariant: "default"
	},
	{
		dimension: "clientName",
		title: "Clients",
		description: "Request volume grouped by client name.",
		metricId: "breakdown-client-name",
		labelVariant: "default"
	},
	{
		dimension: "deviceName",
		title: "Devices",
		description: "Request volume grouped by device classification.",
		metricId: "breakdown-device",
		labelVariant: "default"
	},
	{
		dimension: "sdk",
		title: "SDKs",
		description: "Request volume grouped by SDK and version.",
		metricId: "breakdown-sdk",
		labelVariant: "mono"
	},
	{
		dimension: "resource",
		title: "Resources",
		description: "Request volume grouped by resource.",
		metricId: "breakdown-resources",
		labelVariant: "default"
	},
	{
		dimension: "resourceType",
		title: "Resource types",
		description: "Request volume grouped by resource type.",
		metricId: "breakdown-resource-type",
		labelVariant: "default"
	}
];
async function fetchProjectRequestsBreakdown(projectId, dateRange, dimension, limit = 6, queries) {
	return fetchProjectUsageEventBreakdown(projectId, REQUESTS_EVENT_METRICS[0], dateRange, dimension, limit, queries);
}
const BANDWIDTH_BREAKDOWN_SECTIONS = [
	{
		dimension: "path",
		title: "Paths",
		description: "Endpoint paths with the highest bandwidth consumption.",
		metricId: "breakdown-path",
		labelVariant: "mono"
	},
	{
		dimension: "method",
		title: "HTTP methods",
		description: "Bandwidth grouped by HTTP method.",
		metricId: "breakdown-method",
		labelVariant: "default"
	},
	{
		dimension: "status",
		title: "Status codes",
		description: "Bandwidth grouped by HTTP response status.",
		metricId: "breakdown-status",
		labelVariant: "default"
	},
	{
		dimension: "service",
		title: "Services",
		description: "Bandwidth grouped by Appwrite service segment.",
		metricId: "breakdown-service",
		labelVariant: "default"
	},
	{
		dimension: "country",
		title: "Countries",
		description: "Bandwidth grouped by caller country.",
		metricId: "breakdown-country",
		labelVariant: "default"
	},
	{
		dimension: "city",
		title: "Cities",
		description: "Bandwidth grouped by caller city.",
		metricId: "breakdown-city",
		labelVariant: "default"
	},
	{
		dimension: "hostname",
		title: "Hostnames",
		description: "Bandwidth grouped by caller hostname.",
		metricId: "breakdown-hostname",
		labelVariant: "mono"
	},
	{
		dimension: "ip",
		title: "IP addresses",
		description: "Bandwidth grouped by caller IP address.",
		metricId: "breakdown-ip",
		labelVariant: "mono"
	},
	{
		dimension: "osName",
		title: "Operating systems",
		description: "Bandwidth grouped by client operating system.",
		metricId: "breakdown-os",
		labelVariant: "default"
	},
	{
		dimension: "clientType",
		title: "Client types",
		description: "Bandwidth grouped by client type.",
		metricId: "breakdown-client-type",
		labelVariant: "default"
	},
	{
		dimension: "clientName",
		title: "Clients",
		description: "Bandwidth grouped by client name.",
		metricId: "breakdown-client-name",
		labelVariant: "default"
	},
	{
		dimension: "deviceName",
		title: "Devices",
		description: "Bandwidth grouped by device classification.",
		metricId: "breakdown-device",
		labelVariant: "default"
	},
	{
		dimension: "sdk",
		title: "SDKs",
		description: "Bandwidth grouped by SDK and version.",
		metricId: "breakdown-sdk",
		labelVariant: "mono"
	},
	{
		dimension: "resource",
		title: "Resources",
		description: "Bandwidth grouped by resource.",
		metricId: "breakdown-resources",
		labelVariant: "default"
	},
	{
		dimension: "resourceType",
		title: "Resource types",
		description: "Bandwidth grouped by resource type.",
		metricId: "breakdown-resource-type",
		labelVariant: "default"
	}
];
async function fetchProjectBandwidthBreakdown(projectId, dateRange, dimension, limit = 6, queries) {
	return mergeUsageBreakdownItems(await Promise.all(BANDWIDTH_EVENT_METRICS.map((metric) => fetchProjectUsageEventBreakdown(projectId, metric, dateRange, dimension, limit, queries))), limit);
}
const USAGE_RESOURCES_BREAKDOWN_TITLE = "Resources";
function partitionUsageBreakdownResourceIds(items) {
	const bucketIds = /* @__PURE__ */ new Set();
	const computeIds = /* @__PURE__ */ new Set();
	const databaseIds = /* @__PURE__ */ new Set();
	const tableIds = /* @__PURE__ */ new Set();
	const unknownIds = /* @__PURE__ */ new Set();
	for (const item of items) {
		if (isUsageProjectResourceType(item.resourceType)) continue;
		const resourceId = (item.resourceId ?? item.label).trim();
		if (!resourceId) continue;
		const resourceType = item.resourceType?.trim() ?? "";
		if (resourceType === "bucket") {
			bucketIds.add(resourceId);
			continue;
		}
		if (resourceType === "function" || resourceType === "site") {
			computeIds.add(resourceId);
			continue;
		}
		if (resourceType === "database" || resourceType === "dedicatedDatabases") {
			databaseIds.add(resourceId);
			continue;
		}
		const tableDatabaseId = parseTableUsageResourceType(resourceType);
		if (tableDatabaseId) {
			tableIds.add(resourceId);
			tableIds.add(`${tableDatabaseId}/${resourceId}`);
			continue;
		}
		unknownIds.add(resourceId);
	}
	return {
		bucketIds: Array.from(bucketIds),
		computeIds: Array.from(computeIds),
		databaseIds: Array.from(databaseIds),
		tableIds: Array.from(tableIds),
		unknownIds: Array.from(unknownIds)
	};
}
function splitUsageBreakdownEntries(entries) {
	return {
		standardEntries: entries.filter((entry) => entry.section.dimension !== "resource" && entry.section.dimension !== "resourceType"),
		resourceEntry: entries.find((entry) => entry.section.dimension === "resource"),
		resourceTypeEntry: entries.find((entry) => entry.section.dimension === "resourceType")
	};
}
function collectUsageResourceBreakdownItems(entries) {
	return entries.filter((entry) => entry.section.dimension === "resource").flatMap((entry) => entry.items);
}
async function listUsageGaugeGroupsByMetric(projectId, params) {
	if (params.metrics.length === 0) return /* @__PURE__ */ new Map();
	const projectSdk = sdk.forProject(projectId);
	const queries = [...buildUsageResourceFilterQueries({
		queries: params.queries,
		resourceId: params.resourceId,
		resourceType: params.resourceType,
		ordinal: params.ordinal
	}) ?? []];
	const teamId = params.teamId?.trim();
	if (teamId && !queries.some((query) => query.includes("\"teamId\""))) queries.push(Query.equal("teamId", teamId));
	const { orderBy, orderDir, limit } = resolveUsageListOrder({
		interval: params.interval,
		hasDimensions: (params.dimensions?.length ?? 0) > 0,
		limit: params.limit
	});
	const request = {
		metrics: [...params.metrics],
		startAt: params.startAt,
		endAt: params.endAt,
		orderBy,
		orderDir,
		limit
	};
	if (params.interval) request.interval = params.interval;
	if (params.dimensions?.length) request.dimensions = params.dimensions;
	if (queries.length > 0) request.queries = queries;
	if (params.aggregate) request.aggregate = params.aggregate;
	const response = await projectSdk.usage.listGauges(request);
	const result = /* @__PURE__ */ new Map();
	for (const metric of params.metrics) result.set(metric, response.metrics?.find((entry) => entry.metric === metric)?.points ?? []);
	return result;
}
async function listUsageGaugeGroups(projectId, params) {
	return (await listUsageGaugeGroupsByMetric(projectId, {
		...params,
		metrics: [params.metric]
	})).get(params.metric) ?? [];
}
function mapGaugeBreakdownGroups(groups, dimensions, limit = 6) {
	const useResourceDimensions = dimensions.includes("resourceId") && dimensions.includes("resourceType");
	const dimension = dimensions[0] === "resourceType" ? "resourceType" : "resourceId";
	const latestByKey = /* @__PURE__ */ new Map();
	for (const group of groups) {
		const resourceId = group.resourceId?.trim();
		const resourceType = group.resourceType?.trim();
		const key = useResourceDimensions ? isUsageProjectResourceType(resourceType) ? "project" : resourceId && resourceType ? `${resourceType}\0${resourceId}` : void 0 : dimension === "resourceType" ? resourceType : resourceId;
		if (!key) continue;
		const timeMs = parseISO(group.time).getTime();
		const existing = latestByKey.get(key);
		if (!existing || timeMs >= existing.timeMs) latestByKey.set(key, {
			value: group.value,
			timeMs,
			resourceType: useResourceDimensions ? resourceType : void 0
		});
	}
	return Array.from(latestByKey.entries()).filter(([, { value }]) => value > 0).sort((a, b) => b[1].value - a[1].value).slice(0, limit).map(([key, { value, resourceType }]) => {
		if (useResourceDimensions && isUsageProjectResourceType(resourceType)) return {
			id: "project",
			method: "",
			statusCode: 0,
			path: "project",
			count: value,
			resourceType: "project"
		};
		const resourceId = useResourceDimensions ? key.split("\0")[1] ?? key : key;
		return {
			id: resourceId,
			method: "",
			statusCode: 0,
			path: resourceId,
			count: value,
			resourceType
		};
	});
}
function getLatestUsageGaugeValueInRange(groups, startAt, endAt) {
	const startMs = startAt.getTime();
	const endMs = endAt.getTime();
	let latestValue = 0;
	let latestTimeMs = -1;
	for (const group of groups) {
		const timeMs = parseISO(group.time).getTime();
		if (timeMs < startMs || timeMs > endMs) continue;
		if (timeMs >= latestTimeMs) {
			latestTimeMs = timeMs;
			latestValue = group.value;
		}
	}
	return latestValue;
}
async function fetchUsageGaugeBreakdown(projectId, metric, startAt, endAt, dimensions, breakdownLimit = 6, queries) {
	return mapGaugeBreakdownGroups(await listUsageGaugeGroups(projectId, {
		metric,
		dimensions: [...dimensions],
		startAt: startAt.toISOString(),
		endAt: endAt.toISOString(),
		queries,
		limit: breakdownLimit
	}), dimensions, breakdownLimit);
}
async function listUsageGaugeGroupsForMetrics(projectId, metrics, params) {
	const groupsByMetric = await listUsageGaugeGroupsByMetric(projectId, {
		...params,
		metrics
	});
	return Array.from(groupsByMetric.values()).flat();
}
function mergeGaugeValuesByTime(groups) {
	const merged = /* @__PURE__ */ new Map();
	for (const group of groups) merged.set(group.time, (merged.get(group.time) ?? 0) + group.value);
	return merged;
}
function mergeGaugeValuesByTimePerSeries(groups, series) {
	const seriesKeyByResourceType = /* @__PURE__ */ new Map();
	for (const entry of series) for (const resourceType of entry.resourceTypes) seriesKeyByResourceType.set(resourceType, entry.key);
	const merged = new Map(series.map((entry) => [entry.key, /* @__PURE__ */ new Map()]));
	for (const group of groups) {
		const seriesKey = seriesKeyByResourceType.get(group.resourceType?.trim() ?? "");
		if (!seriesKey) continue;
		const byTime = merged.get(seriesKey);
		byTime.set(group.time, (byTime.get(group.time) ?? 0) + group.value);
	}
	return merged;
}
function buildGaugeChartPoints(samples, from, to, interval) {
	if (!samples?.size) return [];
	return fillGaugeChartPointsGaps(samples, from, to, interval);
}
async function fetchProjectUsageGaugeChartSeriesByResourceType(projectId, dateRange, metric, series, interval = "1h", queries, logRetentionHours = 720) {
	const emptySeries = () => new Map(series.map((entry) => [entry.key, []]));
	if (!projectId || series.length === 0) return {
		chartPointsBySeries: emptySeries(),
		previousChartPointsBySeries: emptySeries()
	};
	const { from, to, previousFrom, previousTo, interval: resolvedInterval, comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, logRetentionHours);
	if (isScreenshotModeActive()) {
		const chartPointsBySeries$1 = /* @__PURE__ */ new Map();
		const previousChartPointsBySeries$1 = /* @__PURE__ */ new Map();
		for (const entry of series) {
			const chartPoints = buildScreenshotModeChartPoints(from, to, resolvedInterval, `${metric}:${entry.key}`, { gauge: true });
			chartPointsBySeries$1.set(entry.key, chartPoints);
			previousChartPointsBySeries$1.set(entry.key, comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : buildScreenshotModeChartPoints(previousFrom, previousTo, resolvedInterval, `${metric}:${entry.key}`, {
				quieter: true,
				gauge: true
			}));
		}
		return {
			chartPointsBySeries: chartPointsBySeries$1,
			previousChartPointsBySeries: previousChartPointsBySeries$1
		};
	}
	const resourceTypes = series.flatMap((entry) => [...entry.resourceTypes]);
	const scopedQueries = [...queries ?? [], Query.equal("resourceType", resourceTypes)];
	const dimensions = ["resourceType", "resourceId"];
	const currentGroups = await listUsageGaugeGroupsForMetrics(projectId, [metric], {
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		dimensions,
		queries: scopedQueries
	});
	const previousGroups = comparisonMode === "prior_window" ? await listUsageGaugeGroupsForMetrics(projectId, [metric], {
		interval: resolvedInterval,
		startAt: previousFrom.toISOString(),
		endAt: previousTo.toISOString(),
		dimensions,
		queries: scopedQueries
	}) : [];
	const currentBySeries = mergeGaugeValuesByTimePerSeries(currentGroups, series);
	const previousBySeries = mergeGaugeValuesByTimePerSeries(previousGroups, series);
	const chartPointsBySeries = /* @__PURE__ */ new Map();
	const previousChartPointsBySeries = /* @__PURE__ */ new Map();
	for (const entry of series) {
		const chartPoints = buildGaugeChartPoints(currentBySeries.get(entry.key), from, to, resolvedInterval);
		chartPointsBySeries.set(entry.key, chartPoints);
		previousChartPointsBySeries.set(entry.key, comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : buildGaugeChartPoints(previousBySeries.get(entry.key), previousFrom, previousTo, resolvedInterval));
	}
	return {
		chartPointsBySeries,
		previousChartPointsBySeries
	};
}
async function fetchProjectUsageGaugeChartSeries(projectId, dateRange, metrics, interval = "1h", queries, logRetentionHours = 720, resourceId, resourceType, ordinal, aggregate) {
	if (!projectId || metrics.length === 0) return {
		chartPoints: [],
		previousChartPoints: []
	};
	const { from, to, previousFrom, previousTo, interval: resolvedInterval, comparisonMode } = resolveOverviewUsagePeriod(dateRange, interval, logRetentionHours);
	if (isScreenshotModeActive()) {
		const metricKey = metrics.join("|");
		const chartPoints$1 = buildScreenshotModeChartPoints(from, to, resolvedInterval, metricKey, { gauge: true });
		return {
			chartPoints: chartPoints$1,
			previousChartPoints: comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints$1) : buildScreenshotModeChartPoints(previousFrom, previousTo, resolvedInterval, metricKey, {
				quieter: true,
				gauge: true
			})
		};
	}
	const currentGroups = await listUsageGaugeGroupsForMetrics(projectId, metrics, {
		interval: resolvedInterval,
		startAt: from.toISOString(),
		endAt: to.toISOString(),
		queries,
		resourceId,
		resourceType,
		ordinal,
		aggregate
	});
	const previousGroups = comparisonMode === "prior_window" ? await listUsageGaugeGroupsForMetrics(projectId, metrics, {
		interval: resolvedInterval,
		startAt: previousFrom.toISOString(),
		endAt: previousTo.toISOString(),
		queries,
		resourceId,
		resourceType,
		ordinal,
		aggregate
	}) : [];
	const chartPoints = buildGaugeChartPoints(mergeGaugeValuesByTime(currentGroups), from, to, resolvedInterval);
	return {
		chartPoints,
		previousChartPoints: comparisonMode === "first_half" ? getUsageChartFirstHalfPoints(chartPoints) : buildGaugeChartPoints(mergeGaugeValuesByTime(previousGroups), previousFrom, previousTo, resolvedInterval)
	};
}
async function fetchProjectUsageGaugesChartOverview(projectId, dateRange, metrics, interval = "1h", queries, logRetentionHours = 720, resourceId, resourceType, ordinal) {
	if (!projectId || metrics.length === 0) return {
		changePercent: 0,
		chartPoints: []
	};
	const { chartPoints, previousChartPoints } = await fetchProjectUsageGaugeChartSeries(projectId, dateRange, metrics, interval, queries, logRetentionHours, resourceId, resourceType, ordinal);
	return {
		changePercent: computeChangePercent(chartPoints.length > 0 ? chartPoints[chartPoints.length - 1].total : 0, previousChartPoints.length > 0 ? previousChartPoints[previousChartPoints.length - 1].total : 0),
		chartPoints
	};
}
async function fetchProjectUsageGaugeSnapshotOverview(projectId, dateRange, metric, interval = "1h", breakdown, options) {
	if (!projectId) return {
		changePercent: 0,
		latestValue: 0,
		topConsumers: []
	};
	const { from, to, previousFrom, previousTo } = resolveOverviewUsagePeriod(dateRange, interval, options?.logRetentionHours ?? 720);
	const includeBreakdown = options?.includeBreakdown !== false && breakdown != null && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const [snapshotGroups, topConsumers] = await Promise.all([listUsageGaugeGroups(projectId, {
		metric,
		startAt: previousFrom.toISOString(),
		endAt: to.toISOString(),
		queries
	}), includeBreakdown ? fetchUsageGaugeBreakdown(projectId, metric, from, to, breakdown.dimensions, breakdown.limit ?? 6, queries) : Promise.resolve([])]);
	const latestValue = getLatestUsageGaugeValueInRange(snapshotGroups, from, to);
	return {
		latestValue,
		changePercent: computeChangePercent(latestValue, getLatestUsageGaugeValueInRange(snapshotGroups, previousFrom, previousTo)),
		topConsumers
	};
}
const DATABASE_READS_EVENT_METRICS = [
	"databases.operations.reads",
	"documentsdb.databases.operations.reads",
	"vectorsdb.databases.operations.reads"
];
const DATABASE_WRITES_EVENT_METRICS = [
	"databases.operations.writes",
	"documentsdb.databases.operations.writes",
	"vectorsdb.databases.operations.writes"
];
const DATABASE_COLLECTIONS_GAUGE_METRICS = [
	"collections",
	"documentsdb.collections",
	"vectorsdb.collections"
];
const DATABASE_DOCUMENTS_GAUGE_METRICS = [
	"documents",
	"documentsdb.documents",
	"vectorsdb.documents"
];
const DATABASE_READS_DESCRIPTION = "Document read operations across all databases. Each row returned counts as one read.";
const DATABASE_WRITES_DESCRIPTION = "Create, update, and delete operations across all databases. Each mutation counts as one write.";
const DATABASE_READS_FOR_DATABASE_DESCRIPTION = "Read operations for this database. Each row returned counts as one read.";
const DATABASE_WRITES_FOR_DATABASE_DESCRIPTION = "Create, update, and delete operations for this database. Each mutation counts as one write.";
const DATABASE_COLLECTIONS_DESCRIPTION = "Total collections (tables) across all databases in your project.";
const DATABASE_DOCUMENTS_DESCRIPTION = "Total rows stored across all collections in your project.";
const DATABASE_READS_AND_WRITES_DOCS_HREF = "/docs/advanced/platform/database-reads-and-writes";
const DATABASE_TABLES_DOCS_HREF = "/docs/products/databases/tables";
const DATABASE_ROWS_DOCS_HREF = "/docs/products/databases/rows";
function formatDatabaseOperationsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatDatabaseOperationsValue(count) {
	return formatCompactCount(count, { compact: true });
}
function formatDatabaseCountTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatDatabaseCountValue(count) {
	return formatCompactCount(count, { compact: true });
}
function getUsageChartLatestValue(points) {
	if (points.length === 0) return 0;
	return points[points.length - 1]?.total ?? 0;
}
async function fetchMergedEventMetricsChartOverview(projectId, dateRange, metrics, interval = "1h", options) {
	const results = await Promise.all(metrics.map((metric) => fetchProjectUsageMetricSeriesOverview(projectId, metric, dateRange, interval, [], 0, options)));
	const chartPoints = mergeChartPointsSeries(results.map((result) => result.chartPoints));
	const previousChartPoints = mergeChartPointsSeries(results.map((result) => result.previousChartPoints));
	return {
		chartPoints,
		changePercent: computeChangePercent(sumUsageChartPoints(chartPoints), sumUsageChartPoints(previousChartPoints))
	};
}
async function fetchProjectDatabaseReadsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchMergedEventMetricsChartOverview(projectId, dateRange, DATABASE_READS_EVENT_METRICS, interval, options);
}
async function fetchProjectDatabaseWritesOverview(projectId, dateRange, interval = "1h", options) {
	return fetchMergedEventMetricsChartOverview(projectId, dateRange, DATABASE_WRITES_EVENT_METRICS, interval, options);
}
async function fetchProjectDatabaseCollectionsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchProjectUsageGaugesChartOverview(projectId, dateRange, DATABASE_COLLECTIONS_GAUGE_METRICS, interval, options?.queries, options?.logRetentionHours);
}
async function fetchProjectDatabaseDocumentsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchProjectUsageGaugesChartOverview(projectId, dateRange, DATABASE_DOCUMENTS_GAUGE_METRICS, interval, options?.queries, options?.logRetentionHours);
}
const STORAGE_GAUGE_METRIC = "storage";
const IMAGE_TRANSFORMATIONS_GAUGE_METRIC = "files.imagesTransformed";
const IMAGE_TRANSFORMATIONS_GAUGE_METRICS = [IMAGE_TRANSFORMATIONS_GAUGE_METRIC];
const IMAGE_TRANSFORMATIONS_DESCRIPTION = "Unique origin images transformed during the selected period. Each origin image is billed once, regardless of how many variants you generate from it.";
const STORAGE_DOCS_HREF = "/docs/products/storage";
const IMAGE_TRANSFORMATIONS_DOCS_HREF = "/docs/advanced/platform/image-transformations";
const OVERVIEW_STORAGE_CHART_TITLE = "Storage over time";
const OVERVIEW_STORAGE_BREAKDOWN_OPTIONS = [
	{
		value: "buckets",
		label: "Buckets",
		title: "Buckets",
		resourceTypes: ["bucket"],
		description: "Bytes stored across all storage buckets, including uploaded files and versions. Counts toward your plan storage limit."
	},
	{
		value: "databases",
		label: "Databases",
		title: "Databases",
		resourceTypes: ["database", "dedicatedDatabases"],
		description: "Bytes stored by your databases, including dedicated database instances. Counts toward your plan storage limit."
	},
	{
		value: "functions",
		label: "Functions",
		title: "Functions",
		resourceTypes: ["function"],
		description: "Storage used by function deployment artifacts and their builds. Counts toward your plan storage limit."
	},
	{
		value: "sites",
		label: "Sites",
		title: "Sites",
		resourceTypes: ["site"],
		description: "Storage used by site deployment artifacts and their builds. Counts toward your plan storage limit."
	}
];
const OVERVIEW_STORAGE_BREAKDOWN_TYPES = OVERVIEW_STORAGE_BREAKDOWN_OPTIONS.map((option) => option.value);
function getOverviewStorageBreakdownOption(value) {
	return OVERVIEW_STORAGE_BREAKDOWN_OPTIONS.find((option) => option.value === value) ?? OVERVIEW_STORAGE_BREAKDOWN_OPTIONS[0];
}
function storageResourceTypeQueries(breakdownType, queries) {
	return [...queries ?? [], Query.equal("resourceType", [...getOverviewStorageBreakdownOption(breakdownType).resourceTypes])];
}
function emptyStorageBreakdown() {
	return {
		buckets: [],
		databases: [],
		functions: [],
		sites: []
	};
}
function emptyStorageTotals() {
	return {
		buckets: 0,
		databases: 0,
		functions: 0,
		sites: 0
	};
}
function formatStorageBytesTotal(bytes) {
	return formatCompactBytes(bytes, { compact: true });
}
function formatStorageBytesValue(bytes) {
	return formatCompactBytes(bytes, { compact: true });
}
function formatImageTransformationsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatImageTransformationsValue(count) {
	return formatCompactCount(count, { compact: true });
}
function mergeOverviewStorageChartPoints(pointsByType) {
	const byTime = /* @__PURE__ */ new Map();
	for (const type of OVERVIEW_STORAGE_BREAKDOWN_TYPES) for (const point of pointsByType.get(type) ?? []) {
		const timeMs = point.day.getTime();
		const existing = byTime.get(timeMs);
		if (existing) existing[type] = point.total;
		else byTime.set(timeMs, {
			date: point.date,
			day: point.day,
			...emptyStorageTotals(),
			[type]: point.total,
			total: 0
		});
	}
	return Array.from(byTime.values()).map((point) => ({
		...point,
		total: OVERVIEW_STORAGE_BREAKDOWN_TYPES.reduce((sum, type) => sum + point[type], 0)
	})).sort((a, b) => a.day.getTime() - b.day.getTime());
}
function getLatestOverviewStorageComponents(chartPoints) {
	const latest = chartPoints.at(-1);
	if (!latest) return {
		latestValue: 0,
		latestByType: emptyStorageTotals()
	};
	const latestByType = emptyStorageTotals();
	for (const type of OVERVIEW_STORAGE_BREAKDOWN_TYPES) latestByType[type] = latest[type];
	return {
		latestValue: latest.total,
		latestByType
	};
}
async function fetchProjectOverviewStorageOverview(projectId, dateRange, interval = "1h", options) {
	if (!projectId) return {
		changePercent: 0,
		latestValue: 0,
		latestByType: emptyStorageTotals(),
		chartPoints: [],
		storageBreakdown: emptyStorageBreakdown()
	};
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const { from, to } = resolveOverviewUsagePeriod(dateRange, interval);
	const [series, ...breakdowns] = await Promise.all([fetchProjectUsageGaugeChartSeriesByResourceType(projectId, dateRange, STORAGE_GAUGE_METRIC, OVERVIEW_STORAGE_BREAKDOWN_OPTIONS.map((option) => ({
		key: option.value,
		resourceTypes: option.resourceTypes
	})), interval, queries), ...OVERVIEW_STORAGE_BREAKDOWN_OPTIONS.map((option) => includeBreakdown ? fetchUsageGaugeBreakdown(projectId, STORAGE_GAUGE_METRIC, from, to, ["resourceId", "resourceType"], 6, storageResourceTypeQueries(option.value, queries)) : Promise.resolve([]))]);
	const chartPoints = mergeOverviewStorageChartPoints(series.chartPointsBySeries);
	const previousChartPoints = mergeOverviewStorageChartPoints(series.previousChartPointsBySeries);
	const latest = getLatestOverviewStorageComponents(chartPoints);
	const previousLatest = getLatestOverviewStorageComponents(previousChartPoints);
	const storageBreakdown = emptyStorageBreakdown();
	OVERVIEW_STORAGE_BREAKDOWN_OPTIONS.forEach((option, index) => {
		storageBreakdown[option.value] = breakdowns[index] ?? [];
	});
	return {
		...latest,
		changePercent: computeChangePercent(latest.latestValue, previousLatest.latestValue),
		chartPoints,
		storageBreakdown
	};
}
async function fetchProjectStorageResourceTypeUsageOverview(projectId, dateRange, breakdownType, interval = "1h", options) {
	if (!projectId) return {
		changePercent: 0,
		chartPoints: [],
		topConsumers: []
	};
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const { from, to } = resolveOverviewUsagePeriod(dateRange, interval);
	const option = getOverviewStorageBreakdownOption(breakdownType);
	const [series, topConsumers] = await Promise.all([fetchProjectUsageGaugeChartSeriesByResourceType(projectId, dateRange, STORAGE_GAUGE_METRIC, [{
		key: option.value,
		resourceTypes: option.resourceTypes
	}], interval, options?.queries), includeBreakdown ? fetchUsageGaugeBreakdown(projectId, STORAGE_GAUGE_METRIC, from, to, ["resourceId", "resourceType"], 6, storageResourceTypeQueries(breakdownType, options?.queries)) : Promise.resolve([])]);
	const chartPoints = series.chartPointsBySeries.get(option.value) ?? [];
	const previousChartPoints = series.previousChartPointsBySeries.get(option.value) ?? [];
	return {
		changePercent: computeChangePercent(getUsageChartLatestValue(chartPoints), getUsageChartLatestValue(previousChartPoints)),
		chartPoints,
		topConsumers
	};
}
async function fetchProjectImageTransformationsUsageOverview(projectId, dateRange, interval = "1h", options) {
	const includeBreakdown = options?.includeBreakdown !== false && areUsageBreakdownQueriesEnabled();
	const queries = options?.queries;
	const [chartOverview, snapshotOverview] = await Promise.all([fetchProjectUsageGaugesChartOverview(projectId, dateRange, IMAGE_TRANSFORMATIONS_GAUGE_METRICS, interval, queries), includeBreakdown ? fetchProjectUsageGaugeSnapshotOverview(projectId, dateRange, IMAGE_TRANSFORMATIONS_GAUGE_METRIC, interval, { dimensions: ["resourceId", "resourceType"] }, options) : Promise.resolve({
		changePercent: 0,
		latestValue: 0,
		topConsumers: []
	})]);
	return {
		changePercent: chartOverview.changePercent,
		chartPoints: chartOverview.chartPoints,
		topConsumers: snapshotOverview.topConsumers
	};
}
const DATABASE_OPERATIONS_BREAKDOWN_SECTIONS = [
	{
		dimension: "path",
		title: "Paths",
		description: "API endpoint paths with the highest operation volume.",
		metricId: "breakdown-path",
		labelVariant: "mono"
	},
	{
		dimension: "method",
		title: "HTTP methods",
		description: "Operations grouped by HTTP method.",
		metricId: "breakdown-method",
		labelVariant: "default"
	},
	{
		dimension: "service",
		title: "Services",
		description: "Operations grouped by Appwrite database API (TablesDB, DocumentsDB, VectorsDB).",
		metricId: "breakdown-service",
		labelVariant: "default"
	},
	{
		dimension: "country",
		title: "Countries",
		description: "Operations grouped by caller country.",
		metricId: "breakdown-country",
		labelVariant: "default"
	},
	{
		dimension: "ip",
		title: "IP addresses",
		description: "Operations grouped by caller IP address.",
		metricId: "breakdown-ip",
		labelVariant: "mono"
	},
	{
		dimension: "resource",
		title: "Resources",
		description: "Operations grouped by database or table.",
		metricId: "breakdown-resources",
		labelVariant: "default"
	}
];
async function fetchProjectDatabaseReadsBreakdown(projectId, dateRange, dimension, limit = 6, queries, resourceId) {
	return mergeUsageBreakdownItems(await Promise.all(DATABASE_READS_EVENT_METRICS.map((metric) => fetchProjectUsageEventBreakdown(projectId, metric, dateRange, dimension, limit, queries, resourceId))), limit);
}
async function fetchProjectDatabaseWritesBreakdown(projectId, dateRange, dimension, limit = 6, queries, resourceId) {
	return mergeUsageBreakdownItems(await Promise.all(DATABASE_WRITES_EVENT_METRICS.map((metric) => fetchProjectUsageEventBreakdown(projectId, metric, dateRange, dimension, limit, queries, resourceId))), limit);
}
const REALTIME_CONNECTIONS_METRIC = "realtime.connections";
const REALTIME_MESSAGES_EVENT_METRIC = "realtime.messages.sent";
const REALTIME_INBOUND_EVENT_METRIC = "realtime.inbound";
const REALTIME_OUTBOUND_EVENT_METRIC = "realtime.outbound";
const REALTIME_CONNECTIONS_METRICS = [REALTIME_CONNECTIONS_METRIC];
const REALTIME_CONNECTIONS_DESCRIPTION = "Peak concurrent WebSocket connections during the selected period. Each open client connection counts toward your plan limit.";
const REALTIME_MESSAGES_DESCRIPTION = "Messages sent through the Realtime service during the selected period. Includes server events delivered to subscribed clients.";
const REALTIME_BANDWIDTH_DESCRIPTION = "Inbound and outbound data transferred through Realtime WebSocket connections during the selected period.";
const REALTIME_DOCS_HREF = "/docs/apis/realtime";
function formatRealtimeConnectionsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatRealtimeConnectionsValue(count) {
	return formatCompactCount(count, { compact: true });
}
function formatRealtimeMessagesTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatRealtimeMessagesValue(count) {
	return formatCompactCount(count, { compact: true });
}
function getUsageChartPeakValue(points) {
	if (points.length === 0) return 0;
	return Math.max(...points.map((point) => point.total));
}
async function fetchProjectRealtimeConnectionsOverview(projectId, dateRange, interval = "1h", options) {
	const { chartPoints, previousChartPoints } = await fetchProjectUsageGaugeChartSeries(projectId, dateRange, REALTIME_CONNECTIONS_METRICS, interval, options?.queries, 0, options?.resourceId, options?.resourceType, void 0, "max");
	return {
		changePercent: computeChangePercent(getUsageChartPeakValue(chartPoints), getUsageChartPeakValue(previousChartPoints)),
		chartPoints
	};
}
async function fetchProjectRealtimeMessagesOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, REALTIME_MESSAGES_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectRealtimeBandwidthOverview(projectId, dateRange, interval = "1h", options) {
	const [inbound, outbound] = await Promise.all([fetchProjectUsageMetricSeriesOverview(projectId, REALTIME_INBOUND_EVENT_METRIC, dateRange, interval, [], 0, options), fetchProjectUsageMetricSeriesOverview(projectId, REALTIME_OUTBOUND_EVENT_METRIC, dateRange, interval, [], 0, options)]);
	const inboundChartPoints = inbound.chartPoints;
	const outboundChartPoints = outbound.chartPoints;
	const chartPoints = mergeChartPointsSeries([inboundChartPoints, outboundChartPoints]);
	const previousChartPoints = mergeChartPointsSeries([inbound.previousChartPoints, outbound.previousChartPoints]);
	return {
		inboundChartPoints,
		outboundChartPoints,
		dualChartPoints: mergeBandwidthDualChartPoints(inboundChartPoints, outboundChartPoints),
		chartPoints,
		changePercent: computeChangePercent(sumUsageChartPoints(chartPoints), sumUsageChartPoints(previousChartPoints))
	};
}
const AUTH_MAU_GAUGE_METRIC = "users.mau";
const AUTH_OTP_EVENT_METRIC = "auth.method.phone";
const AUTH_USERS_GAUGE_METRIC = "users";
const AUTH_MAU_GAUGE_METRICS = [AUTH_MAU_GAUGE_METRIC];
const AUTH_MAU_DESCRIPTION = "Rolling monthly active user count over time. Each point is the MAU snapshot at that moment, not new users in that interval. MAU beyond your plan limit may incur additional charges.";
const AUTH_OTP_DESCRIPTION = "Phone OTP verification attempts during the selected period. Each SMS or voice OTP sent counts toward your plan limit.";
const AUTH_SIGNUPS_DESCRIPTION = "New user registrations during the selected period. Net growth in total registered users (account deletions reduce this count).";
const AUTH_DOCS_HREF = "/docs/products/auth";
function formatAuthMauTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAuthMauValue(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAuthOtpTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAuthOtpValue(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAuthSignupsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAuthSignupsValue(count) {
	return formatCompactCount(count, { compact: true });
}
function toIncrementalGaugeChartPoints(points, baselineTotal = 0) {
	if (points.length === 0) return [];
	return points.map((point, index) => {
		const previousTotal = index === 0 ? baselineTotal : points[index - 1].total;
		return {
			...point,
			total: Math.max(0, point.total - previousTotal)
		};
	});
}
async function fetchProjectAuthMauOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageGaugesChartOverview(projectId, dateRange, AUTH_MAU_GAUGE_METRICS, interval, options?.queries);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectAuthOtpOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, AUTH_OTP_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectAuthSignupsOverview(projectId, dateRange, interval = "1h", options) {
	const { chartPoints, previousChartPoints } = await fetchProjectUsageGaugeChartSeries(projectId, dateRange, [AUTH_USERS_GAUGE_METRIC], interval, options?.queries);
	const incrementalCurrent = toIncrementalGaugeChartPoints(chartPoints, previousChartPoints.length > 0 ? previousChartPoints[previousChartPoints.length - 1].total : 0);
	const incrementalPrevious = toIncrementalGaugeChartPoints(previousChartPoints);
	return {
		chartPoints: incrementalCurrent,
		changePercent: computeChangePercent(sumUsageChartPoints(incrementalCurrent), sumUsageChartPoints(incrementalPrevious))
	};
}
function getAuthMauDisplayTotal(points) {
	return getUsageChartLatestValue(points);
}
function getAuthSignupsDisplayTotal(points) {
	return sumUsageChartPoints(points);
}
const AVATARS_SCREENSHOTS_EVENT_METRIC = "avatars.screenshotsGenerated";
const AVATARS_SCREENSHOTS_DESCRIPTION = "Webpage screenshots generated through the Avatars Screenshots API during the selected period. Each successful screenshot request counts toward your plan limit.";
const AVATARS_DOCS_HREF = "/docs/products/avatars/screenshots";
function formatAvatarsScreenshotsTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatAvatarsScreenshotsValue(count) {
	return formatCompactCount(count, { compact: true });
}
async function fetchProjectAvatarsScreenshotsOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, AVATARS_SCREENSHOTS_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		chartPoints: overview.chartPoints,
		changePercent: computeChangePercent(sumUsageChartPoints(overview.chartPoints), sumUsageChartPoints(overview.previousChartPoints))
	};
}
const MESSAGING_MESSAGES_SENT_EVENT_METRIC = "messages.sent";
const MESSAGING_SMS_SENT_EVENT_METRIC = "messages.sms.sent";
const MESSAGING_TOPICS_GAUGE_METRICS = ["topics"];
const MESSAGING_MESSAGES_DESCRIPTION = "Messages sent across all channels (push, email, SMS) during the selected period. Each delivery to an end-user target counts as one message.";
const MESSAGING_TOPICS_DESCRIPTION = "Messaging topics in your project. Topics group subscribers for broadcast and targeted notifications.";
const MESSAGING_SMS_DESCRIPTION = "SMS messages sent during the selected period. Each SMS segment delivered to a phone target counts as one message.";
const MESSAGING_DOCS_HREF = "/docs/products/messaging";
function formatMessagingCountTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatMessagingCountValue(count) {
	return formatCompactCount(count, { compact: true });
}
async function fetchProjectMessagingMessagesOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, MESSAGING_MESSAGES_SENT_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectMessagingSmsOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, MESSAGING_SMS_SENT_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectMessagingTopicsOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageGaugesChartOverview(projectId, dateRange, MESSAGING_TOPICS_GAUGE_METRICS, interval, options?.queries);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
const WEBHOOKS_EVENTS_SENT_EVENT_METRIC = "webhooks.events.sent";
const WEBHOOKS_EVENTS_FAILED_EVENT_METRIC = "webhooks.events.failed";
const WEBHOOKS_GAUGE_METRICS = ["webhooks"];
const WEBHOOKS_EVENTS_SENT_DESCRIPTION = "Webhook events successfully delivered during the selected period. Each HTTP request sent to your endpoint counts as one event.";
const WEBHOOKS_EVENTS_FAILED_DESCRIPTION = "Webhook delivery failures during the selected period. Failed attempts include non-2xx responses and connection errors.";
const WEBHOOKS_COUNT_DESCRIPTION = "Webhooks configured in your project. Each webhook subscribes to one or more Appwrite events.";
const WEBHOOKS_DOCS_HREF = "/docs/advanced/platform/webhooks";
function formatWebhooksCountTotal(count) {
	return formatCompactCount(count, { compact: true });
}
function formatWebhooksCountValue(count) {
	return formatCompactCount(count, { compact: true });
}
async function fetchProjectWebhooksEventsSentOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, WEBHOOKS_EVENTS_SENT_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectWebhooksEventsFailedOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageMetricSeriesOverview(projectId, WEBHOOKS_EVENTS_FAILED_EVENT_METRIC, dateRange, interval, [], 0, options);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
async function fetchProjectWebhooksCountOverview(projectId, dateRange, interval = "1h", options) {
	const overview = await fetchProjectUsageGaugesChartOverview(projectId, dateRange, WEBHOOKS_GAUGE_METRICS, interval, options?.queries);
	return {
		changePercent: overview.changePercent,
		chartPoints: overview.chartPoints
	};
}
const USAGE_EVENT_FILTER_ATTRIBUTES = [
	"path",
	"method",
	"status",
	"service",
	"resourceType",
	"resourceId",
	"country",
	"city",
	"hostname",
	"ip",
	"osName",
	"clientType",
	"clientName",
	"deviceName",
	"sdk",
	"sdkVersion"
];
const USAGE_GAUGE_FILTER_ATTRIBUTES = [
	"service",
	"resourceType",
	"resourceId"
];
const USAGE_EVENT_FILTER_OPERATORS = [
	"equal",
	"notEqual",
	"contains",
	"startsWith",
	"endsWith",
	"isNull",
	"isNotNull"
];
const USAGE_GAUGE_FILTER_OPERATORS = [
	"equal",
	"notEqual",
	"isNull",
	"isNotNull"
];
const USAGE_FILTER_EXCLUDED_ATTRIBUTES = new Set(["teamId"]);
var HTTP_METHODS = [
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE",
	"OPTIONS",
	"HEAD"
].map((method) => ({
	value: method,
	label: method
}));
var NETWORK_SERVICES = [
	"account",
	"avatars",
	"databases",
	"documentsDB",
	"functions",
	"graphql",
	"health",
	"locale",
	"messaging",
	"project",
	"storage",
	"tablesDB",
	"teams",
	"tokens",
	"users",
	"vectorsDB",
	"webhooks"
].map((service) => ({
	value: service,
	label: service
}));
var DATABASE_SERVICES = [
	"tablesDB",
	"documentsDB",
	"vectorsDB",
	"databases"
].map((service) => ({
	value: service,
	label: service
}));
var COMPUTE_SERVICES = [{
	value: "functions",
	label: "functions"
}, {
	value: "sites",
	label: "sites"
}];
var EVENT_OPERATORS = [...USAGE_EVENT_FILTER_OPERATORS];
var GAUGE_OPERATORS = [...USAGE_GAUGE_FILTER_OPERATORS];
function stringColumn(id, title, operators = EVENT_OPERATORS) {
	return {
		id,
		title,
		type: "string",
		allowedOperators: [...operators]
	};
}
function enumColumn(id, title, elements, operators = EVENT_OPERATORS) {
	return {
		id,
		title,
		type: "enum",
		format: "enum",
		elements,
		optional: false,
		allowedOperators: [...operators]
	};
}
var NETWORK_EVENT_FILTER_COLUMNS = [
	stringColumn("path", "Path"),
	enumColumn("method", "Method", HTTP_METHODS),
	stringColumn("status", "Status"),
	enumColumn("service", "Service", NETWORK_SERVICES),
	stringColumn("resourceType", "Resource type"),
	stringColumn("resourceId", "Resource ID"),
	stringColumn("country", "Country"),
	stringColumn("city", "Caller city"),
	stringColumn("hostname", "Hostname"),
	stringColumn("ip", "IP address"),
	stringColumn("osName", "Operating system"),
	stringColumn("clientType", "Client type"),
	stringColumn("clientName", "Client name"),
	stringColumn("deviceName", "Device name"),
	stringColumn("sdk", "SDK"),
	stringColumn("sdkVersion", "SDK version")
];
var CATEGORY_FILTER_COLUMNS = {
	requests: NETWORK_EVENT_FILTER_COLUMNS,
	bandwidth: NETWORK_EVENT_FILTER_COLUMNS,
	storage: [
		stringColumn("resourceId", "Resource ID", GAUGE_OPERATORS),
		stringColumn("resourceType", "Resource type", GAUGE_OPERATORS),
		enumColumn("service", "Service", [{
			value: "storage",
			label: "storage"
		}], GAUGE_OPERATORS)
	],
	compute: [
		stringColumn("resourceId", "Resource ID"),
		stringColumn("resourceType", "Resource type"),
		enumColumn("service", "Service", COMPUTE_SERVICES)
	],
	functions: [stringColumn("resourceId", "Function ID"), stringColumn("resourceType", "Resource type")],
	sites: [stringColumn("resourceId", "Site ID"), stringColumn("resourceType", "Resource type")],
	databases: [
		stringColumn("resourceId", "Resource ID", GAUGE_OPERATORS),
		enumColumn("service", "Service", DATABASE_SERVICES, GAUGE_OPERATORS),
		stringColumn("path", "API path"),
		stringColumn("resourceType", "Resource type", GAUGE_OPERATORS),
		stringColumn("ip", "IP address")
	],
	realtime: [stringColumn("resourceId", "Resource ID")],
	auth: [
		enumColumn("service", "Service", [{
			value: "users",
			label: "users"
		}, {
			value: "account",
			label: "account"
		}], GAUGE_OPERATORS),
		stringColumn("resourceId", "Resource ID", GAUGE_OPERATORS),
		stringColumn("resourceType", "Resource type", GAUGE_OPERATORS)
	],
	avatars: [
		enumColumn("service", "Service", [{
			value: "avatars",
			label: "avatars"
		}]),
		stringColumn("path", "Path"),
		stringColumn("resourceId", "Resource ID")
	],
	messaging: [
		enumColumn("service", "Service", [{
			value: "messaging",
			label: "messaging"
		}], GAUGE_OPERATORS),
		stringColumn("resourceId", "Resource ID", GAUGE_OPERATORS),
		stringColumn("resourceType", "Resource type", GAUGE_OPERATORS)
	],
	webhooks: [
		enumColumn("service", "Service", [{
			value: "webhooks",
			label: "webhooks"
		}], GAUGE_OPERATORS),
		stringColumn("resourceId", "Resource ID", GAUGE_OPERATORS),
		stringColumn("resourceType", "Resource type", GAUGE_OPERATORS)
	]
};
function getUsageFilterColumnsForCategory(categoryId, availability = {}) {
	const columns = CATEGORY_FILTER_COLUMNS[categoryId] ?? [];
	return availability.allowCity === false ? columns.filter((column) => column.id !== "city") : columns;
}
function getUsageFilterColumnIdsForCategory(categoryId, availability = {}) {
	return new Set(getUsageFilterColumnsForCategory(categoryId, availability).map((column) => column.id));
}
function isUsageFilterDimensionAllowed(categoryId, dimension, availability = {}) {
	if (USAGE_FILTER_EXCLUDED_ATTRIBUTES.has(dimension)) return false;
	return getUsageFilterColumnIdsForCategory(categoryId, availability).has(dimension);
}
function getUsageSavedFilterScope(categoryId) {
	return `usage.${categoryId}`;
}
function categorySupportsUsageFilters(categoryId) {
	return categoryId in CATEGORY_FILTER_COLUMNS;
}
function isUsageEventFilterAttribute(attribute) {
	return USAGE_EVENT_FILTER_ATTRIBUTES.includes(attribute);
}
function isUsageGaugeFilterAttribute(attribute) {
	return USAGE_GAUGE_FILTER_ATTRIBUTES.includes(attribute);
}
function isUsageEventFilterOperator(operator) {
	return USAGE_EVENT_FILTER_OPERATORS.includes(operator);
}
function isUsageGaugeFilterOperator(operator) {
	return USAGE_GAUGE_FILTER_OPERATORS.includes(operator);
}
function isFilterKeyAllowedForSurface(attribute, operator, surface) {
	if (USAGE_FILTER_EXCLUDED_ATTRIBUTES.has(attribute)) return false;
	if (surface === "events") return isUsageEventFilterAttribute(attribute) && isUsageEventFilterOperator(operator);
	return isUsageGaugeFilterAttribute(attribute) && isUsageGaugeFilterOperator(operator);
}
function isFilterKeyAllowedForCategory(attribute, operator, categoryId, availability) {
	if (USAGE_FILTER_EXCLUDED_ATTRIBUTES.has(attribute)) return false;
	if (!getUsageFilterColumnIdsForCategory(categoryId, availability).has(attribute)) return false;
	const column = getUsageFilterColumnsForCategory(categoryId, availability).find((entry) => entry.id === attribute);
	if (column?.allowedOperators?.length) return column.allowedOperators.includes(operator);
	return true;
}
function sanitizeUsageFilterMap(filterMap, categoryId, availability = {}) {
	if (filterMap.size === 0) return filterMap;
	const sanitized = new Map(filterMap);
	for (const key of sanitized.keys()) if (!isFilterKeyAllowedForCategory(String(key.c), key.o, categoryId, availability)) sanitized.delete(key);
	return sanitized;
}
function getUsageFilterQueriesForSurface(filterMap, categoryId, surface, availability = {}) {
	const sanitized = sanitizeUsageFilterMap(filterMap, categoryId, availability);
	if (sanitized.size === 0) return void 0;
	const queries = [];
	for (const [key, queryStr] of sanitized) {
		if (!isFilterKeyAllowedForSurface(String(key.c), key.o, surface)) continue;
		queries.push(queryStr);
	}
	return queries.length > 0 ? queries : void 0;
}
function appendUsageFiltersToQueryKey(key, filterQueries) {
	if (!filterQueries?.length) return key;
	return [
		...key,
		"filters",
		filterQueries
	];
}
function mergeUsageFetchOptions(options, filterQueries, logRetentionHours = 720) {
	const withRetention = {
		logRetentionHours,
		...options
	};
	if (!filterQueries?.length) return withRetention;
	return {
		...withRetention,
		queries: filterQueries
	};
}
function usageBreakdownQueries(filterQueries) {
	return filterQueries?.length ? filterQueries : void 0;
}
var UsageFiltersContext = createContext(null);
function UsageFiltersProvider({ value, children }) {
	return /* @__PURE__ */ jsx(UsageFiltersContext.Provider, {
		value,
		children
	});
}
function useUsageFilters() {
	const context = useContext(UsageFiltersContext);
	if (!context) throw new Error("useUsageFilters must be used within UsageFiltersProvider");
	return context;
}
function useOptionalUsageFilters() {
	return useContext(UsageFiltersContext);
}
function useUsageSectionFilterQueries(surface = "events", logRetentionHoursOverride) {
	const context = useOptionalUsageFilters();
	return {
		filterQueries: context == null ? void 0 : surface === "gauges" ? context.gaugeFilterQueries : context.eventFilterQueries,
		logRetentionHours: logRetentionHoursOverride ?? context?.usageLogRetentionHours ?? 720
	};
}
function normalizeDateRangeKey$1(dateRange) {
	const rangeKeyPart = getUsageChartQueryRangeKeyPart(dateRange);
	return {
		rangeKeyPart,
		getBounds: () => resolveUsageChartFetchBounds(dateRange),
		refetchOnMountRolling: shouldRefetchUsageChartOnMount(rangeKeyPart)
	};
}
function getProjectIdFromUsageQueryKey(queryKey) {
	const projectIndex = queryKey.indexOf("project");
	if (projectIndex === -1) return void 0;
	const projectId = queryKey[projectIndex + 1];
	return typeof projectId === "string" ? projectId : void 0;
}
function isUsageQueryKeyForResource(queryKey, projectId, resourceType, resourceId) {
	const projectIndex = queryKey.indexOf("project");
	const resourceIndex = queryKey.indexOf(resourceType);
	return projectIndex >= 0 && queryKey[projectIndex + 1] === projectId && resourceIndex >= 0 && queryKey[resourceIndex + 1] === resourceId;
}
function keepPreviousUsageChartDataForProject(currentProjectId) {
	return (previousData, previousQuery) => {
		if (previousData === void 0 || !previousQuery || !currentProjectId) return;
		if (getProjectIdFromUsageQueryKey(previousQuery.queryKey) !== currentProjectId) return;
		return previousData;
	};
}
var usageEventsQueryOptionsBase = {
	staleTime: DEFAULT_STALE_TIME,
	retry: false,
	refetchOnMount: false,
	refetchOnWindowFocus: false,
	refetchOnReconnect: false,
	meta: { skipInitialLoader: true }
};
function keepPreviousUsageChartDataForResource(projectId, resourceType, resourceId) {
	return (previousData, previousQuery) => {
		if (previousData === void 0 || !previousQuery || !projectId || !resourceId) return;
		return isUsageQueryKeyForResource(previousQuery.queryKey, projectId, resourceType, resourceId) ? previousData : void 0;
	};
}
function usageOverviewQueryScope(includeBreakdown) {
	return includeBreakdown ? "overview" : "chart";
}
function usageOverviewPlaceholderData(queryClient, projectId, siblingQueryKey) {
	return (previousData, previousQuery) => {
		const kept = keepPreviousUsageChartDataForProject(projectId)(previousData, previousQuery);
		if (kept !== void 0) return kept;
		if (!projectId) return;
		return queryClient.getQueryData(siblingQueryKey);
	};
}
function bandwidthOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"bandwidth",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectBandwidthOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function firewallTrafficOverviewQueryOptions(projectId, dateRange, interval = "1h", logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"firewall",
			"traffic",
			"project",
			projectId,
			rangeKeyPart,
			interval,
			logRetentionHours ?? null
		],
		queryFn: () => fetchProjectFirewallTrafficOverview(projectId, getBounds(), interval, logRetentionHours),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectFirewallTrafficOverview(projectId, dateRange, interval = "1h", logRetentionHours) {
	return useQuery({
		...firewallTrafficOverviewQueryOptions(projectId, dateRange, interval, logRetentionHours),
		enabled: !!projectId
	});
}
function requestsOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"requests",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectRequestsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function executionsOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"executions",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectExecutionsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function functionExecutionsOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"function-executions",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectFunctionExecutionsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function functionExecutionsForFunctionChartQueryOptions(projectId, functionId, dateRange, interval = "1h") {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"function-executions",
			"chart",
			"project",
			projectId,
			"function",
			functionId,
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchProjectFunctionExecutionsOverview(projectId, getBounds(), interval, {
			resourceId: functionId,
			resourceType: "function",
			includeBreakdown: false
		}),
		enabled: !!projectId && !!functionId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId && functionId ? 300 * 1e3 : 0
	});
}
function useFunctionExecutionsForFunctionChart(projectId, functionId, dateRange, enabled = true, interval = "1h") {
	return useQuery({
		...functionExecutionsForFunctionChartQueryOptions(projectId, functionId, dateRange, interval),
		enabled: !!projectId && !!functionId && enabled
	});
}
function siteExecutionsForSiteQueryOptions(projectId, siteId, dateRange, interval = "1h") {
	const { rangeKeyPart, getBounds } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"site-executions",
			"chart",
			"project",
			projectId,
			"site",
			siteId,
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchProjectSiteExecutionsOverview(projectId, getBounds(), interval, {
			resourceId: siteId,
			resourceType: "site",
			includeBreakdown: false
		}),
		enabled: !!projectId && !!siteId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForResource(projectId, "site", siteId),
		gcTime: projectId && siteId ? 300 * 1e3 : 0
	});
}
function useSiteExecutionsForSite(projectId, siteId, dateRange, interval = "1h") {
	return useQuery(siteExecutionsForSiteQueryOptions(projectId, siteId, dateRange, interval));
}
function siteExecutionsOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"site-executions",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectSiteExecutionsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function gbHoursOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"gb-hours",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectGbHoursOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function functionGbHoursOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"function-gb-hours",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectFunctionGbHoursOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function functionGbHoursForFunctionChartQueryOptions(projectId, functionId, dateRange, interval = "1h") {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"function-gb-hours",
			"chart",
			"project",
			projectId,
			"function",
			functionId,
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchProjectFunctionGbHoursOverview(projectId, getBounds(), interval, {
			resourceId: functionId,
			resourceType: "function",
			includeBreakdown: false
		}),
		enabled: !!projectId && !!functionId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId && functionId ? 300 * 1e3 : 0
	});
}
function useFunctionGbHoursForFunctionChart(projectId, functionId, dateRange, enabled = true, interval = "1h") {
	return useQuery({
		...functionGbHoursForFunctionChartQueryOptions(projectId, functionId, dateRange, interval),
		enabled: !!projectId && !!functionId && enabled
	});
}
function siteGbHoursForSiteQueryOptions(projectId, siteId, dateRange, interval = "1h") {
	const { rangeKeyPart, getBounds } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"site-gb-hours",
			"chart",
			"project",
			projectId,
			"site",
			siteId,
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchProjectSiteGbHoursOverview(projectId, getBounds(), interval, {
			resourceId: siteId,
			resourceType: "site",
			includeBreakdown: false
		}),
		enabled: !!projectId && !!siteId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForResource(projectId, "site", siteId),
		gcTime: projectId && siteId ? 300 * 1e3 : 0
	});
}
function useSiteGbHoursForSite(projectId, siteId, dateRange, interval = "1h") {
	return useQuery(siteGbHoursForSiteQueryOptions(projectId, siteId, dateRange, interval));
}
function siteGbHoursOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"site-gb-hours",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectSiteGbHoursOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function overviewStorageOverviewQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"storage",
			"overview",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectOverviewStorageOverview(projectId, getBounds(), interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function requestsChartOverviewQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"requests",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectRequestsChartOverview(projectId, getBounds(), interval, usageBreakdownQueries(filterQueries), logRetentionHours),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectBandwidthOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true, logRetentionHoursOverride) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("events", logRetentionHoursOverride);
	const queryClient = useQueryClient();
	return useQuery({
		...bandwidthOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, bandwidthOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectRequestsOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true, logRetentionHoursOverride) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("events", logRetentionHoursOverride);
	const queryClient = useQueryClient();
	return useQuery({
		...requestsOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, requestsOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectExecutionsOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true, logRetentionHoursOverride) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("events", logRetentionHoursOverride);
	const queryClient = useQueryClient();
	return useQuery({
		...executionsOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, executionsOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectFunctionExecutionsOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queryClient = useQueryClient();
	return useQuery({
		...functionExecutionsOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, functionExecutionsOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectSiteExecutionsOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queryClient = useQueryClient();
	return useQuery({
		...siteExecutionsOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, siteExecutionsOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectGbHoursOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true, logRetentionHoursOverride) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("events", logRetentionHoursOverride);
	const queryClient = useQueryClient();
	return useQuery({
		...gbHoursOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, gbHoursOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectFunctionGbHoursOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queryClient = useQueryClient();
	return useQuery({
		...functionGbHoursOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, functionGbHoursOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectSiteGbHoursOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queryClient = useQueryClient();
	return useQuery({
		...siteGbHoursOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, siteGbHoursOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectOverviewStorageOverview(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true, logRetentionHoursOverride) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges", logRetentionHoursOverride);
	const queryClient = useQueryClient();
	return useQuery({
		...overviewStorageOverviewQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, overviewStorageOverviewQueryOptions(projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function storageResourceTypeUsageQueryOptions(breakdownType, projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"storage",
			breakdownType,
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectStorageResourceTypeUsageOverview(projectId, getBounds(), breakdownType, interval, mergeUsageFetchOptions({ includeBreakdown }, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function imageTransformationsUsageQueryOptions(projectId, dateRange, interval = "1h", includeBreakdown = true, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"storage",
			"image-transformations",
			usageOverviewQueryScope(includeBreakdown),
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectImageTransformationsUsageOverview(projectId, getBounds(), interval, { includeBreakdown }),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectStorageResourceTypeUsage(breakdownType, projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	const queryClient = useQueryClient();
	return useQuery({
		...storageResourceTypeUsageQueryOptions(breakdownType, projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, storageResourceTypeUsageQueryOptions(breakdownType, projectId, dateRange, interval, !includeBreakdown, filterQueries, logRetentionHours).queryKey)
	});
}
function useProjectImageTransformationsUsage(projectId, dateRange, enabled = true, interval = "1h", includeBreakdown = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	const queryClient = useQueryClient();
	return useQuery({
		...imageTransformationsUsageQueryOptions(projectId, dateRange, interval, includeBreakdown, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled,
		placeholderData: usageOverviewPlaceholderData(queryClient, projectId, imageTransformationsUsageQueryOptions(projectId, dateRange, interval, !includeBreakdown).queryKey)
	});
}
function storageBreakdownResourcesQueryOptions(projectId, resourceIds) {
	const normalizedIds = normalizeStorageBreakdownResourceIds(resourceIds);
	return queryOptions({
		queryKey: [
			"usage-breakdown",
			"storage-resources",
			"project",
			projectId,
			normalizedIds.join(",")
		],
		queryFn: () => fetchStorageBreakdownResources(projectId, normalizedIds),
		enabled: !!projectId && normalizedIds.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function useStorageBreakdownResources(projectId, resourceIds, enabled = true) {
	const normalizedIds = useMemo(() => normalizeStorageBreakdownResourceIds(resourceIds), [resourceIds]);
	return useQuery({
		...storageBreakdownResourcesQueryOptions(projectId, normalizedIds),
		enabled: enabled && !!projectId && normalizedIds.length > 0
	});
}
function refetchProjectStorageUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-gauges" && query.queryKey[1] === "storage" || query.queryKey[0] === "usage-breakdown" && query.queryKey[1] === "storage-resources") });
}
function computeBreakdownResourcesQueryOptions(projectId, resourceIds) {
	const normalizedIds = normalizeComputeBreakdownResourceIds(resourceIds);
	return queryOptions({
		queryKey: [
			"usage-breakdown",
			"compute-resources",
			"project",
			projectId,
			normalizedIds.join(",")
		],
		queryFn: () => fetchComputeBreakdownResources(projectId, normalizedIds),
		enabled: !!projectId && normalizedIds.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function useComputeBreakdownResources(projectId, resourceIds, enabled = true) {
	const normalizedIds = useMemo(() => normalizeComputeBreakdownResourceIds(resourceIds), [resourceIds]);
	return useQuery({
		...computeBreakdownResourcesQueryOptions(projectId, normalizedIds),
		enabled: enabled && !!projectId && normalizedIds.length > 0
	});
}
function useUsageResourceBreakdownLookups(projectId, items, enabled = true) {
	const partitioned = useMemo(() => partitionUsageBreakdownResourceIds(items), [items]);
	const computeIds = useMemo(() => [...partitioned.computeIds, ...partitioned.unknownIds], [partitioned.computeIds, partitioned.unknownIds]);
	const databaseIds = useMemo(() => [...partitioned.databaseIds, ...partitioned.unknownIds], [partitioned.databaseIds, partitioned.unknownIds]);
	const bucketIds = useMemo(() => [...partitioned.bucketIds, ...partitioned.unknownIds], [partitioned.bucketIds, partitioned.unknownIds]);
	const tableIds = useMemo(() => [...partitioned.tableIds, ...partitioned.unknownIds], [partitioned.tableIds, partitioned.unknownIds]);
	const shouldFetch = enabled && !!projectId && items.length > 0;
	const { data: computeData } = useComputeBreakdownResources(projectId, computeIds, shouldFetch && computeIds.length > 0);
	const { data: databaseData } = useDatabaseBreakdownResources(projectId, databaseIds, shouldFetch && databaseIds.length > 0);
	const { data: storageData } = useStorageBreakdownResources(projectId, bucketIds, shouldFetch && bucketIds.length > 0);
	const { data: tableData } = useTableBreakdownResources(projectId, tableIds, shouldFetch && tableIds.length > 0);
	return {
		computeLookup: computeData?.resources,
		databaseLookup: databaseData?.resources,
		storageLookup: storageData?.resources,
		tableLookup: tableData?.resources
	};
}
function requestsChartOnlyQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	return requestsChartOverviewQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours);
}
function requestsBreakdownQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"requests",
			"breakdown",
			"project",
			projectId,
			dimension,
			rangeKeyPart
		], filterQueries),
		queryFn: () => fetchProjectRequestsBreakdown(projectId, getBounds(), dimension, 6, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function requestsBreakdownDrawerQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"requests",
			"breakdown",
			"drawer",
			"project",
			projectId,
			dimension,
			rangeKeyPart,
			100
		], filterQueries),
		queryFn: () => fetchProjectRequestsBreakdown(projectId, getBounds(), dimension, 100, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectRequestsBreakdownDrawer(projectId, dateRange, dimension, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...requestsBreakdownDrawerQueryOptions(projectId, dateRange, dimension ?? "path", filterQueries),
		enabled: enabled && !!projectId && !!dimension
	});
}
function useProjectRequestsChartOnly(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...requestsChartOnlyQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function useProjectRequestsBreakdowns(projectId, dateRange, enabled = true, allowCity = true) {
	const { filterQueries } = useUsageSectionFilterQueries();
	const sections = useMemo(() => REQUESTS_BREAKDOWN_SECTIONS.filter((section) => allowCity || section.dimension !== "city"), [allowCity]);
	const queries = useQueries({ queries: sections.map((section) => ({
		...requestsBreakdownQueryOptions(projectId, dateRange, section.dimension, filterQueries),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => sections.map((section, index) => {
		const query = queries[index];
		return {
			section,
			isLoading: query.isPending && !query.data && !query.isError,
			isError: query.isError,
			error: query.error,
			items: query.data ?? []
		};
	}), [queries, sections]);
}
function refetchProjectRequestsUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey[0] === "usage-events" && query.queryKey[1] === "requests" && query.queryKey.includes("project") && query.queryKey.includes(projectId) });
}
function bandwidthChartOnlyQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	return bandwidthOverviewQueryOptions(projectId, dateRange, interval, false, filterQueries, logRetentionHours);
}
function useProjectBandwidthChartOnly(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...bandwidthChartOnlyQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function bandwidthBreakdownQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"bandwidth",
			"breakdown",
			"project",
			projectId,
			dimension,
			rangeKeyPart
		], filterQueries),
		queryFn: () => fetchProjectBandwidthBreakdown(projectId, getBounds(), dimension, 6, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function bandwidthBreakdownDrawerQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"bandwidth",
			"breakdown",
			"drawer",
			"project",
			projectId,
			dimension,
			rangeKeyPart,
			100
		], filterQueries),
		queryFn: () => fetchProjectBandwidthBreakdown(projectId, getBounds(), dimension, 100, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectBandwidthBreakdownDrawer(projectId, dateRange, dimension, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...bandwidthBreakdownDrawerQueryOptions(projectId, dateRange, dimension ?? "path", filterQueries),
		enabled: enabled && !!projectId && !!dimension
	});
}
function useProjectBandwidthBreakdowns(projectId, dateRange, enabled = true, allowCity = true) {
	const { filterQueries } = useUsageSectionFilterQueries();
	const sections = useMemo(() => BANDWIDTH_BREAKDOWN_SECTIONS.filter((section) => allowCity || section.dimension !== "city"), [allowCity]);
	const queries = useQueries({ queries: sections.map((section) => ({
		...bandwidthBreakdownQueryOptions(projectId, dateRange, section.dimension, filterQueries),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => sections.map((section, index) => {
		const query = queries[index];
		return {
			section,
			isLoading: query.isPending && !query.data && !query.isError,
			isError: query.isError,
			error: query.error,
			items: query.data ?? []
		};
	}), [queries, sections]);
}
function refetchProjectBandwidthUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey[0] === "usage-events" && query.queryKey[1] === "bandwidth" && query.queryKey.includes("project") && query.queryKey.includes(projectId) });
}
function getProjectListRequestsChartDateRange() {
	return getStableUsageChartDateRange();
}
function useProjectListRequestsUsage(projectIds, enabled) {
	const dateRange = useMemo(() => getProjectListRequestsChartDateRange(), []);
	const uniqueIds = useMemo(() => [...new Set(projectIds.filter(Boolean))], [projectIds]);
	const queries = useQueries({ queries: uniqueIds.map((projectId) => ({
		...requestsChartOverviewQueryOptions(projectId, dateRange, "1h"),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		uniqueIds.forEach((projectId, index) => {
			const query = queries[index];
			map.set(projectId, {
				isLoading: query.isPending && !query.data && !query.isError,
				isError: query.isError,
				data: query.data
			});
		});
		return map;
	}, [uniqueIds, queries]);
}
function databaseReadsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"reads",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectDatabaseReadsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions(void 0, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseWritesChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"writes",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectDatabaseWritesOverview(projectId, getBounds(), interval, mergeUsageFetchOptions(void 0, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseCollectionsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"databases",
			"collections",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectDatabaseCollectionsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions(void 0, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseDocumentsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"databases",
			"documents",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectDatabaseDocumentsOverview(projectId, getBounds(), interval, mergeUsageFetchOptions(void 0, filterQueries, logRetentionHours)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectDatabaseReadsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...databaseReadsChartQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function useProjectDatabaseWritesChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...databaseWritesChartQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function useProjectDatabaseCollectionsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...databaseCollectionsChartQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function useProjectDatabaseDocumentsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...databaseDocumentsChartQueryOptions(projectId, dateRange, interval, filterQueries, logRetentionHours),
		enabled: !!projectId && enabled
	});
}
function databaseReadsBreakdownQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"reads",
			"breakdown",
			"project",
			projectId,
			dimension,
			rangeKeyPart
		], filterQueries),
		queryFn: () => fetchProjectDatabaseReadsBreakdown(projectId, getBounds(), dimension, 6, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseWritesBreakdownQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"writes",
			"breakdown",
			"project",
			projectId,
			dimension,
			rangeKeyPart
		], filterQueries),
		queryFn: () => fetchProjectDatabaseWritesBreakdown(projectId, getBounds(), dimension, 6, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseReadsBreakdownDrawerQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"reads",
			"breakdown",
			"drawer",
			"project",
			projectId,
			dimension,
			rangeKeyPart,
			100
		], filterQueries),
		queryFn: () => fetchProjectDatabaseReadsBreakdown(projectId, getBounds(), dimension, 100, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function databaseWritesBreakdownDrawerQueryOptions(projectId, dateRange, dimension, filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"databases",
			"writes",
			"breakdown",
			"drawer",
			"project",
			projectId,
			dimension,
			rangeKeyPart,
			100
		], filterQueries),
		queryFn: () => fetchProjectDatabaseWritesBreakdown(projectId, getBounds(), dimension, 100, usageBreakdownQueries(filterQueries)),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectDatabaseReadsBreakdownDrawer(projectId, dateRange, dimension, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...databaseReadsBreakdownDrawerQueryOptions(projectId, dateRange, dimension ?? "resource", filterQueries),
		enabled: enabled && !!projectId && !!dimension
	});
}
function useProjectDatabaseWritesBreakdownDrawer(projectId, dateRange, dimension, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...databaseWritesBreakdownDrawerQueryOptions(projectId, dateRange, dimension ?? "resource", filterQueries),
		enabled: enabled && !!projectId && !!dimension
	});
}
function useProjectDatabaseReadsBreakdowns(projectId, dateRange, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queries = useQueries({ queries: DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
		...databaseReadsBreakdownQueryOptions(projectId, dateRange, section.dimension, filterQueries),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section, index) => {
		const query = queries[index];
		return {
			section,
			isLoading: query.isPending && !query.data && !query.isError,
			isError: query.isError,
			error: query.error,
			items: query.data ?? []
		};
	}), [queries]);
}
function useProjectDatabaseWritesBreakdowns(projectId, dateRange, enabled = true) {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	const queries = useQueries({ queries: DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
		...databaseWritesBreakdownQueryOptions(projectId, dateRange, section.dimension, filterQueries),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section, index) => {
		const query = queries[index];
		return {
			section,
			isLoading: query.isPending && !query.data && !query.isError,
			isError: query.isError,
			error: query.error,
			items: query.data ?? []
		};
	}), [queries]);
}
function databaseBreakdownResourcesQueryOptions(projectId, resourceIds) {
	const normalizedIds = normalizeDatabaseBreakdownResourceIds(resourceIds);
	return queryOptions({
		queryKey: [
			"usage-breakdown",
			"database-resources",
			"project",
			projectId,
			normalizedIds.join(",")
		],
		queryFn: () => fetchDatabaseBreakdownResources(projectId, normalizedIds),
		enabled: !!projectId && normalizedIds.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function useDatabaseBreakdownResources(projectId, resourceIds, enabled = true) {
	const normalizedIds = useMemo(() => normalizeDatabaseBreakdownResourceIds(resourceIds), [resourceIds]);
	return useQuery({
		...databaseBreakdownResourcesQueryOptions(projectId, normalizedIds),
		enabled: enabled && !!projectId && normalizedIds.length > 0
	});
}
function tableBreakdownResourcesQueryOptions(projectId, resourceLabels) {
	const normalizedLabels = normalizeTableBreakdownResourceLabels(resourceLabels);
	return queryOptions({
		queryKey: [
			"usage-breakdown",
			"table-resources",
			"project",
			projectId,
			normalizedLabels.join(",")
		],
		queryFn: () => fetchTableBreakdownResources(projectId, normalizedLabels),
		enabled: !!projectId && normalizedLabels.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function useTableBreakdownResources(projectId, resourceLabels, enabled = true) {
	const normalizedLabels = useMemo(() => normalizeTableBreakdownResourceLabels(resourceLabels), [resourceLabels]);
	return useQuery({
		...tableBreakdownResourcesQueryOptions(projectId, normalizedLabels),
		enabled: enabled && !!projectId && normalizedLabels.length > 0
	});
}
function refetchProjectDatabaseUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-events" && query.queryKey[1] === "databases" || query.queryKey[0] === "usage-gauges" && query.queryKey[1] === "databases" || query.queryKey[0] === "usage-breakdown" && query.queryKey[1] === "database-resources") });
}
function realtimeConnectionsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"realtime",
			"connections",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectRealtimeConnectionsOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function realtimeMessagesChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"realtime",
			"messages",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectRealtimeMessagesOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function realtimeBandwidthChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"realtime",
			"bandwidth",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectRealtimeBandwidthOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectRealtimeConnectionsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...realtimeConnectionsChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectRealtimeMessagesChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...realtimeMessagesChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectRealtimeBandwidthChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...realtimeBandwidthChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function refetchProjectRealtimeUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && query.queryKey[0] === "usage-events" && query.queryKey[1] === "realtime" });
}
function authMauChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"auth",
			"mau",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectAuthMauOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function authOtpChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"auth",
			"otp",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectAuthOtpOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function authSignupsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"auth",
			"signups",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectAuthSignupsOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectAuthMauChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...authMauChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectAuthOtpChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...authOtpChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectAuthSignupsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...authSignupsChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function refetchProjectAuthUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-events" && query.queryKey[1] === "auth" || query.queryKey[0] === "usage-gauges" && query.queryKey[1] === "auth") });
}
function avatarsScreenshotsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"avatars",
			"screenshots",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectAvatarsScreenshotsOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectAvatarsScreenshotsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...avatarsScreenshotsChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function refetchProjectAvatarsUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && query.queryKey[0] === "usage-events" && query.queryKey[1] === "avatars" });
}
function messagingMessagesChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"messaging",
			"messages",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectMessagingMessagesOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function messagingSmsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"messaging",
			"sms",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectMessagingSmsOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function messagingTopicsChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"messaging",
			"topics",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectMessagingTopicsOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectMessagingMessagesChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...messagingMessagesChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectMessagingSmsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...messagingSmsChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectMessagingTopicsChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...messagingTopicsChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function refetchProjectMessagingUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-events" && query.queryKey[1] === "messaging" || query.queryKey[0] === "usage-gauges" && query.queryKey[1] === "messaging") });
}
function webhooksEventsSentChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"webhooks",
			"events-sent",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectWebhooksEventsSentOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function webhooksEventsFailedChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-events",
			"webhooks",
			"events-failed",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectWebhooksEventsFailedOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function webhooksCountChartQueryOptions(projectId, dateRange, interval = "1h", filterQueries, logRetentionHours) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey$1(dateRange);
	return queryOptions({
		queryKey: appendUsageFiltersToQueryKey([
			"usage-gauges",
			"webhooks",
			"count",
			"chart",
			"project",
			projectId,
			rangeKeyPart,
			interval
		], filterQueries),
		queryFn: () => fetchProjectWebhooksCountOverview(projectId, getBounds(), interval),
		enabled: !!projectId,
		...usageEventsQueryOptionsBase,
		placeholderData: keepPreviousUsageChartDataForProject(projectId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageEventsQueryOptionsBase.refetchOnMount,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProjectWebhooksEventsSentChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...webhooksEventsSentChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectWebhooksEventsFailedChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries();
	return useQuery({
		...webhooksEventsFailedChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function useProjectWebhooksCountChart(projectId, dateRange, enabled = true, interval = "1h") {
	const { filterQueries, logRetentionHours } = useUsageSectionFilterQueries("gauges");
	return useQuery({
		...webhooksCountChartQueryOptions(projectId, dateRange, interval, filterQueries),
		enabled: !!projectId && enabled
	});
}
function refetchProjectWebhooksUsageQueries(queryClient, projectId) {
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-events" && query.queryKey[1] === "webhooks" || query.queryKey[0] === "usage-gauges" && query.queryKey[1] === "webhooks") });
}
function refetchProjectComputeUsageQueries(queryClient, projectId) {
	const computeScopes = new Set([
		"executions",
		"function-executions",
		"site-executions",
		"gb-hours",
		"function-gb-hours",
		"site-gb-hours"
	]);
	return queryClient.refetchQueries({ predicate: (query) => Array.isArray(query.queryKey) && query.queryKey.includes("project") && query.queryKey.includes(projectId) && (query.queryKey[0] === "usage-events" && typeof query.queryKey[1] === "string" && computeScopes.has(query.queryKey[1]) || query.queryKey[0] === "usage-breakdown" && query.queryKey[1] === "compute-resources") });
}
function formatDedicatedDatabasePercentTotal(value) {
	return `${value.toFixed(1)}%`;
}
function formatDedicatedDatabasePercentValue(value) {
	return `${value.toFixed(1)}%`;
}
const DEDICATED_DATABASE_STORAGE_METRIC = "dedicatedDatabases.storage";
const DEDICATED_DATABASE_CONNECTIONS_METRIC = "dedicatedDatabases.connections";
const DEDICATED_DATABASE_CPU_METRIC = "dedicatedDatabases.cpu";
const DEDICATED_DATABASE_MEMORY_METRIC = "dedicatedDatabases.memory";
const DEDICATED_DATABASE_QPS_METRIC = "dedicatedDatabases.qps";
const DEDICATED_DATABASE_IOPS_READ_METRIC = "dedicatedDatabases.iopsRead";
const DEDICATED_DATABASE_IOPS_WRITE_METRIC = "dedicatedDatabases.iopsWrite";
const DEDICATED_DATABASE_STORAGE_DESCRIPTION = "Storage used by this database instance over the selected period.";
const DEDICATED_DATABASE_CONNECTIONS_DESCRIPTION = "Active client connections sampled for this database instance.";
const DEDICATED_DATABASE_CPU_DESCRIPTION = "Average CPU utilization for this database instance.";
const DEDICATED_DATABASE_MEMORY_DESCRIPTION = "Memory utilization relative to provisioned RAM for this database instance.";
const DEDICATED_DATABASE_QPS_DESCRIPTION = "Queries per second handled by this database instance.";
const DEDICATED_DATABASE_IOPS_DESCRIPTION = "Disk read and write operations per second for instance storage.";
async function fetchDedicatedDatabaseMetricOverview(projectId, metric, dateRange, interval = "1h", options) {
	return fetchProjectUsageGaugesChartOverview(projectId, dateRange, [metric], interval, options?.queries, options?.logRetentionHours, options?.resourceId, options?.resourceType ?? "dedicatedDatabases", options?.ordinal);
}
async function fetchDedicatedDatabaseStorageOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_STORAGE_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseConnectionsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_CONNECTIONS_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseCpuOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_CPU_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseMemoryOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_MEMORY_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseQpsOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_QPS_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseIopsReadOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_IOPS_READ_METRIC, dateRange, interval, options);
}
async function fetchDedicatedDatabaseIopsWriteOverview(projectId, dateRange, interval = "1h", options) {
	return fetchDedicatedDatabaseMetricOverview(projectId, DEDICATED_DATABASE_IOPS_WRITE_METRIC, dateRange, interval, options);
}
function usageChartPointsToMonitorSeries(points) {
	return points.map((point) => ({
		timestamp: point.day.getTime(),
		value: point.total
	}));
}
function mergeDualUsageChartSeries(primary, secondary) {
	const secondaryByTime = new Map(secondary.map((point) => [point.day.getTime(), point.total]));
	return primary.map((point) => {
		const timestamp = point.day.getTime();
		return {
			timestamp,
			value: point.total,
			secondaryValue: secondaryByTime.get(timestamp) ?? 0
		};
	});
}
function getDedicatedDatabaseGaugeHeadline(points) {
	return getUsageChartLatestValue(points);
}
function getDedicatedDatabaseRateHeadline(points) {
	if (points.length === 0) return 0;
	const latest = getUsageChartLatestValue(points);
	if (latest > 0) return latest;
	return sumUsageChartPoints(points) / points.length;
}
function normalizeDateRangeKey(dateRange) {
	const rangeKeyPart = getUsageChartQueryRangeKeyPart(dateRange);
	return {
		rangeKeyPart,
		getBounds: () => resolveUsageChartFetchBounds(dateRange),
		refetchOnMountRolling: shouldRefetchUsageChartOnMount(rangeKeyPart)
	};
}
var usageQueryOptionsBase = {
	staleTime: DEFAULT_STALE_TIME,
	retry: false,
	refetchOnMount: false,
	refetchOnWindowFocus: false,
	refetchOnReconnect: false,
	meta: { skipInitialLoader: true }
};
function keepPreviousDedicatedChartData(projectId, databaseId, ordinal) {
	return (previousData, previousQuery) => {
		if (previousData === void 0 || !previousQuery || !projectId || !databaseId) return;
		const key = previousQuery.queryKey;
		const projectIndex = key.indexOf("project");
		const databaseIndex = key.indexOf("database");
		const ordinalIndex = key.indexOf("ordinal");
		const expectedOrdinal = ordinal ?? "all";
		if (projectIndex === -1 || databaseIndex === -1 || key[projectIndex + 1] !== projectId || key[databaseIndex + 1] !== databaseId) return;
		if (ordinalIndex === -1 || key[ordinalIndex + 1] !== expectedOrdinal) return;
		return previousData;
	};
}
function dedicatedMetricFetchOptions(databaseId, ordinal) {
	return {
		resourceId: databaseId,
		resourceType: DEDICATED_DATABASE_USAGE_RESOURCE_TYPE,
		includeBreakdown: false,
		...ordinal !== void 0 ? { ordinal } : {}
	};
}
function dedicatedDatabaseMetricChartQueryOptions(metricKey, fetchFn, projectId, databaseId, dateRange, interval = "1h", ordinal) {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey(dateRange);
	return queryOptions({
		queryKey: [
			"usage-gauges",
			"dedicated-databases",
			metricKey,
			"chart",
			"project",
			projectId,
			"database",
			databaseId,
			"ordinal",
			ordinal ?? "all",
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchFn(projectId, getBounds(), interval, dedicatedMetricFetchOptions(databaseId, ordinal)),
		enabled: !!projectId && !!databaseId,
		...usageQueryOptionsBase,
		placeholderData: keepPreviousDedicatedChartData(projectId, databaseId, ordinal),
		refetchOnMount: refetchOnMountRolling ? "always" : usageQueryOptionsBase.refetchOnMount,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function dedicatedDatabaseStorageChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("storage", fetchDedicatedDatabaseStorageOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseConnectionsChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("connections", fetchDedicatedDatabaseConnectionsOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseCpuChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("cpu", fetchDedicatedDatabaseCpuOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseMemoryChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("memory", fetchDedicatedDatabaseMemoryOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseQpsChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("qps", fetchDedicatedDatabaseQpsOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseIopsReadChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("iops-read", fetchDedicatedDatabaseIopsReadOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function dedicatedDatabaseIopsWriteChartQueryOptions(projectId, databaseId, dateRange, interval = "1h", ordinal) {
	return dedicatedDatabaseMetricChartQueryOptions("iops-write", fetchDedicatedDatabaseIopsWriteOverview, projectId, databaseId, dateRange, interval, ordinal);
}
function useDedicatedDatabaseStorageChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseStorageChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseConnectionsChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseConnectionsChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseCpuChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseCpuChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseMemoryChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseMemoryChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseQpsChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseQpsChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseIopsReadChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseIopsReadChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseIopsWriteChart(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	return useQuery({
		...dedicatedDatabaseIopsWriteChartQueryOptions(projectId, databaseId, dateRange, interval, ordinal),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDedicatedDatabaseMonitorMetrics(projectId, databaseId, dateRange, enabled = true, interval = "1h", ordinal) {
	const storage = useDedicatedDatabaseStorageChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const connections = useDedicatedDatabaseConnectionsChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const cpu = useDedicatedDatabaseCpuChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const memory = useDedicatedDatabaseMemoryChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const qps = useDedicatedDatabaseQpsChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const iopsRead = useDedicatedDatabaseIopsReadChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	const iopsWrite = useDedicatedDatabaseIopsWriteChart(projectId, databaseId, dateRange, enabled, interval, ordinal);
	return {
		storage,
		connections,
		cpu,
		memory,
		qps,
		iopsRead,
		iopsWrite,
		refetchAll: useCallback(async () => {
			await Promise.all([
				storage.refetch(),
				connections.refetch(),
				cpu.refetch(),
				memory.refetch(),
				qps.refetch(),
				iopsRead.refetch(),
				iopsWrite.refetch()
			]);
		}, [
			storage.refetch,
			connections.refetch,
			cpu.refetch,
			memory.refetch,
			qps.refetch,
			iopsRead.refetch,
			iopsWrite.refetch
		])
	};
}
function databaseOperationsChartQueryOptions(operation, fetchFn, projectId, databaseId, dateRange, interval = "1h") {
	const { rangeKeyPart, getBounds, refetchOnMountRolling } = normalizeDateRangeKey(dateRange);
	return queryOptions({
		queryKey: [
			"usage-events",
			"databases",
			operation,
			"chart",
			"project",
			projectId,
			"database",
			databaseId,
			rangeKeyPart,
			interval
		],
		queryFn: () => fetchFn(projectId, getBounds(), interval, {
			resourceId: databaseId,
			includeBreakdown: false
		}),
		enabled: !!projectId && !!databaseId,
		...usageQueryOptionsBase,
		placeholderData: keepPreviousDedicatedChartData(projectId, databaseId),
		refetchOnMount: refetchOnMountRolling ? "always" : usageQueryOptionsBase.refetchOnMount,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	});
}
function databaseReadsForDatabaseChartQueryOptions(projectId, databaseId, dateRange, interval = "1h") {
	return databaseOperationsChartQueryOptions("reads", fetchProjectDatabaseReadsOverview, projectId, databaseId, dateRange, interval);
}
function databaseWritesForDatabaseChartQueryOptions(projectId, databaseId, dateRange, interval = "1h") {
	return databaseOperationsChartQueryOptions("writes", fetchProjectDatabaseWritesOverview, projectId, databaseId, dateRange, interval);
}
function useDatabaseReadsForDatabaseChart(projectId, databaseId, dateRange, enabled = true, interval = "1h") {
	return useQuery({
		...databaseReadsForDatabaseChartQueryOptions(projectId, databaseId, dateRange, interval),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDatabaseWritesForDatabaseChart(projectId, databaseId, dateRange, enabled = true, interval = "1h") {
	return useQuery({
		...databaseWritesForDatabaseChartQueryOptions(projectId, databaseId, dateRange, interval),
		enabled: !!projectId && !!databaseId && enabled
	});
}
function useDatabaseReadsForDatabaseBreakdowns(projectId, databaseId, dateRange, enabled = true) {
	const showBreakdown = enabled && areUsageBreakdownQueriesEnabled();
	const { rangeKeyPart, getBounds } = normalizeDateRangeKey(dateRange);
	const queries = useQueries({ queries: DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
		queryKey: [
			"usage-events",
			"databases",
			"reads",
			"breakdown",
			"project",
			projectId,
			"database",
			databaseId,
			section.dimension,
			rangeKeyPart
		],
		queryFn: () => fetchProjectDatabaseReadsBreakdown(projectId, getBounds(), section.dimension, 6, void 0, databaseId),
		enabled: !!projectId && !!databaseId && showBreakdown,
		...usageQueryOptionsBase,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	})) });
	return DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section, index) => {
		const query = queries[index];
		return {
			section,
			items: query.data ?? [],
			isLoading: query.isLoading,
			isError: query.isError,
			error: query.error
		};
	});
}
function useDatabaseWritesForDatabaseBreakdowns(projectId, databaseId, dateRange, enabled = true) {
	const showBreakdown = enabled && areUsageBreakdownQueriesEnabled();
	const { rangeKeyPart, getBounds } = normalizeDateRangeKey(dateRange);
	const queries = useQueries({ queries: DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
		queryKey: [
			"usage-events",
			"databases",
			"writes",
			"breakdown",
			"project",
			projectId,
			"database",
			databaseId,
			section.dimension,
			rangeKeyPart
		],
		queryFn: () => fetchProjectDatabaseWritesBreakdown(projectId, getBounds(), section.dimension, 6, void 0, databaseId),
		enabled: !!projectId && !!databaseId && showBreakdown,
		...usageQueryOptionsBase,
		gcTime: projectId && databaseId ? 300 * 1e3 : 0
	})) });
	return DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section, index) => {
		const query = queries[index];
		return {
			section,
			items: query.data ?? [],
			isLoading: query.isLoading,
			isError: query.isError,
			error: query.error
		};
	});
}
async function refetchDedicatedDatabaseMonitorQueries(queryClient, projectId, databaseId) {
	await Promise.all([queryClient.refetchQueries({
		queryKey: ["usage-gauges", "dedicated-databases"],
		predicate: (query) => query.queryKey.includes(projectId) && query.queryKey.includes(databaseId)
	}), queryClient.refetchQueries({
		queryKey: ["usage-events", "databases"],
		predicate: (query) => query.queryKey.includes(projectId) && query.queryKey.includes(databaseId)
	})]);
}
function useRefetchOnMonitorChartTick(chartTick, refetch) {
	useEffect(() => {
		if (chartTick <= 0) return;
		refetch();
	}, [chartTick, refetch]);
}
function useDedicatedDatabaseCardMetrics(projectId, databaseId, replicaCount, enabled = true) {
	const dateRange = useMemo(() => getStableUsageChartDateRange(), []);
	const nodeCount = 1 + Math.max(0, Math.floor(replicaCount));
	const canFetch = Boolean(projectId && databaseId && enabled);
	const hasReplicas = replicaCount > 0;
	const connectionsQuery = useDedicatedDatabaseConnectionsChart(projectId, databaseId, dateRange, canFetch, "1h", hasReplicas ? 0 : void 0);
	const cpuQueries = useQueries({ queries: Array.from({ length: nodeCount }, (_, index) => ({
		...dedicatedDatabaseCpuChartQueryOptions(projectId, databaseId, dateRange, "1h", hasReplicas ? index : void 0),
		enabled: canFetch
	})) });
	const memoryQueries = useQueries({ queries: Array.from({ length: nodeCount }, (_, index) => ({
		...dedicatedDatabaseMemoryChartQueryOptions(projectId, databaseId, dateRange, "1h", hasReplicas ? index : void 0),
		enabled: canFetch
	})) });
	const nodeMetrics = Array.from({ length: nodeCount }, (_, index) => {
		const cpuPoints = cpuQueries[index]?.data?.chartPoints;
		const memoryPoints = memoryQueries[index]?.data?.chartPoints;
		return {
			cpu: cpuPoints && cpuPoints.length > 0 ? getUsageChartLatestValue(cpuPoints) : null,
			memory: memoryPoints && memoryPoints.length > 0 ? getUsageChartLatestValue(memoryPoints) : null
		};
	});
	const connectionPoints = connectionsQuery.data?.chartPoints;
	const connections = connectionPoints && connectionPoints.length > 0 ? Math.round(getUsageChartLatestValue(connectionPoints)) : null;
	const refetch = useCallback(async () => {
		await Promise.all([
			connectionsQuery.refetch(),
			...cpuQueries.map((query) => query.refetch()),
			...memoryQueries.map((query) => query.refetch())
		]);
	}, [
		connectionsQuery,
		cpuQueries,
		memoryQueries
	]);
	return {
		nodeMetrics,
		connections,
		isLoading: canFetch && (connectionsQuery.isLoading || cpuQueries.some((query) => query.isLoading) || memoryQueries.some((query) => query.isLoading)),
		isFetching: canFetch && (connectionsQuery.isFetching || cpuQueries.some((query) => query.isFetching) || memoryQueries.some((query) => query.isFetching)),
		refetch
	};
}
var BLOCKS_QUERY_KEY = "manager-blocks";
function blocksKey(projectId) {
	return [BLOCKS_QUERY_KEY, projectId ?? null];
}
async function fetchBlocks(projectId) {
	if (!projectId) return {
		blocks: [],
		total: 0
	};
	return sdk.forConsole.manager.listBlocks({ projectId });
}
function blocksQueryOptions(projectId) {
	return queryOptions({
		queryKey: blocksKey(projectId),
		queryFn: () => fetchBlocks(projectId),
		enabled: !!projectId?.trim(),
		staleTime: 15 * 1e3,
		retry: false,
		refetchOnMount: true,
		refetchOnWindowFocus: false
	});
}
function useBlocks(projectId, options) {
	const opts = blocksQueryOptions(projectId);
	return useQuery({
		...opts,
		enabled: opts.enabled && (options?.enabled ?? true)
	});
}
function useCreateBlock(options) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return sdk.forConsole.manager.createBlock({
				projectId: params.projectId,
				resourceType: params.resourceType,
				resourceId: params.resourceId?.trim() || void 0,
				mode: params.mode,
				reason: params.reason?.trim() || void 0,
				expiredAt: params.expiredAt?.trim() || void 0
			});
		},
		...options,
		onSuccess: (data, vars, onMutateResult, ctx) => {
			qc.invalidateQueries({ queryKey: blocksKey(vars.projectId) });
			options?.onSuccess?.(data, vars, onMutateResult, ctx);
		}
	});
}
function useDeleteBlock(options) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: async (params) => {
			return sdk.forConsole.manager.deleteBlock({
				projectId: params.projectId,
				resourceType: params.resourceType,
				resourceId: params.resourceId?.trim() || void 0
			});
		},
		...options,
		onSuccess: (data, vars, onMutateResult, ctx) => {
			qc.invalidateQueries({ queryKey: blocksKey(vars.projectId) });
			options?.onSuccess?.(data, vars, onMutateResult, ctx);
		}
	});
}
function useDeleteCache(options) {
	return useMutation({
		mutationFn: async (params) => {
			return sdk.forConsole.manager.deleteCache({
				region: params.region,
				cache: params.cache,
				all: params.all,
				database: params.database,
				projectId: params.projectId?.trim() || void 0,
				collectionId: params.collectionId?.trim() || void 0,
				documentId: params.documentId?.trim() || void 0
			});
		},
		...options
	});
}
function useUpdateUserStatus(options) {
	return useMutation({
		mutationFn: async (params) => {
			return sdk.forConsole.manager.updateUserStatus({
				status: params.status,
				userId: params.userId?.trim() || void 0,
				email: params.email?.trim() || void 0,
				reason: params.reason?.trim() || void 0
			});
		},
		...options
	});
}
const CONSOLE_NOTIFICATIONS_LIMIT = 50;
const consoleNotificationsQueryKey = [
	"notifications",
	"console",
	50
];
async function fetchConsoleNotifications(limit = 50) {
	const response = await sdk.forConsole.notifications.list({ queries: [Query.orderDesc("$createdAt"), Query.limit(limit)] });
	return {
		notifications: response.notifications ?? [],
		total: response.total ?? 0
	};
}
function consoleNotificationsQueryOptions(enabled = isClientQueryEnabled) {
	return queryOptions({
		queryKey: consoleNotificationsQueryKey,
		queryFn: () => fetchConsoleNotifications(),
		enabled,
		staleTime: DEFAULT_STALE_TIME,
		refetchOnWindowFocus: true,
		refetchInterval: enabled ? 6e4 : false
	});
}
function useConsoleNotifications(enabled = true) {
	const query = useQuery(consoleNotificationsQueryOptions(enabled));
	const notifications = query.data?.notifications ?? [];
	const unreadCount = notifications.filter((item) => !item.read).length;
	return {
		notifications,
		total: query.data?.total ?? 0,
		unreadCount,
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		refetch: query.refetch
	};
}
function useUpdateConsoleNotificationRead() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ notificationId, read }) => {
			return await sdk.forConsole.notifications.update({
				notificationId,
				read
			});
		},
		onSuccess: (updated) => {
			queryClient.setQueryData(consoleNotificationsQueryKey, (current) => {
				if (!current) return current;
				return {
					...current,
					notifications: current.notifications.map((item) => item.$id === updated.$id ? updated : item)
				};
			});
		}
	});
}
function useMarkAllConsoleNotificationsRead() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (notifications) => {
			const unread = notifications.filter((item) => !item.read);
			if (unread.length === 0) return [];
			return await Promise.all(unread.map((item) => sdk.forConsole.notifications.update({
				notificationId: item.$id,
				read: true
			})));
		},
		onSuccess: (updatedItems) => {
			if (updatedItems.length === 0) return;
			const updatedById = new Map(updatedItems.map((item) => [item.$id, item]));
			queryClient.setQueryData(consoleNotificationsQueryKey, (current) => {
				if (!current) return current;
				return {
					...current,
					notifications: current.notifications.map((item) => updatedById.has(item.$id) ? updatedById.get(item.$id) ?? item : item)
				};
			});
		}
	});
}
export { bandwidthChartOnlyQueryOptions as $, deleteAllUserSessions as $_, CONSOLE_PROTOCOL_ID as $a, firewallRuleImpactQueryOptions as $c, useMysqlActiveConnections as $d, fetchMysqlTableInfo as $f, isPostgresRoleFlag as $g, postgresTableInfoQueryOptions as $h, assistantAttachmentFilesQueryOptions as $i, fetchProjectOAuth2App as $l, matchesMysqlConnectionStateFilter as $m, formatAvatarsScreenshotsTotal as $n, messageQueryOptions as $o, useMysqlTableRls as $p, formatBandwidthTotal as $r, databaseRestoreMigrationsQueryOptions as $s, useProjectDatabaseWritesChart as $t, XBrandIcon as $u, useUpdateUserPassword as $v, useDedicatedDatabaseConnectionsChart as A, backendTypeBadgeVariant$1 as A_, useCreateAssistantAutomation as Aa, fetchCsvExportMigrations as Ac, removeCachedFile as Ad, useUninstallPostgresDatabaseExtension as Af, usePostgresSqlEditorPersistence as Ag, fetchPostgresTableAutocompleteColumns as Ah, getScopesMissingFromKey as Ai, getFirewallActionMetric as Al, formatMysqlPolicyFormRoles as Am, useOptionalUsageFilters as An, fetchAppwriteCloudStatus as Ao, useDeleteMysqlDatabase as Ap, formatStorageBytesTotal as Ar, useNamespacesForInstallations as As, siteGbHoursForSiteQueryOptions as At, useOrganizationAppSecrets as Au, useCreateProjectTeam as Av, organizationAddonsQueryOptions as Ay, DEDICATED_DATABASE_CPU_DESCRIPTION as B, formatPostgresUptime as B_, useScoreAssistantMessage as Ba, useCreateCSVExport as Bc, storageHomeNavigation as Bd, deleteMysqlDatabase as Bf, useUpdatePostgresTableRow as Bg, fetchPostgresVisualizerExternalColumns as Bh, AGENT_ACTIVITY_DESCRIPTION as Bi, useUpdateWebhookSecret as Bl, formatConnectionStateLabel as Bm, WEBHOOKS_DOCS_HREF as Bn, fetchRegions as Bo, useMysqlSavedQueriesSort as Bp, DATABASE_WRITES_FOR_DATABASE_DESCRIPTION as Br, fetchLocaleCodes as Bs, useProjectAuthSignupsChart as Bt, fetchProjectOAuth2Providers as Bu, useProjectTeams as Bv, dedicatedDatabaseStorageChartQueryOptions as C, createPostgresEnumFormStateFromRow as C_, useAssistantAutomations as Ca, useUpdateSMTP as Cc, fetchFileTokens as Cd, useTerminatePostgresIdleInTransaction as Cf, usePostgresSchemaEnums as Cg, fetchFirstPostgresTable as Ch, executeApiRequest as Ci, isPremiumAttribute as Cl, buildMysqlCreatePolicySql as Cm, useProjectWebhooksEventsSentChart as Cn, normalizeTimeline as Co, mysqlVisualizerForeignKeysQueryOptions as Cp, IMAGE_TRANSFORMATIONS_DESCRIPTION as Cr, fetchVcsInstallations as Cs, requestsBreakdownDrawerQueryOptions as Ct, organizationAppsQueryOptions as Cu, updateUserMFA as Cv, isOnboardingStepDone as Cy, useDatabaseWritesForDatabaseBreakdowns as D, validatePostgresEnumUpdateForm as D_, useAssistantMemories as Da, SUPABASE_NHOST_RESOURCES as Dc, getBucketFromProjectCaches as Dd, uninstallPostgresDatabaseExtension as Df, usePostgresSidebarSchemas as Dg, fetchPostgresRoles as Dh, createEphemeralApiKeyForExplorer as Di, parseFirewallResourceTypeSearch as Dl, buildMysqlForceRlsSql as Dm, useTableBreakdownResources as Dn, STATUS_BANNER_EXCLUDED_SERVICE_NAMES as Do, updateMysqlTableRow as Dp, STORAGE_DOCS_HREF as Dr, useCreateVcsRepository as Ds, requestsOverviewQueryOptions as Dt, useDeleteOrganizationAppSecret as Du, updateUserPhoneVerification as Dv, fetchProjectAddonPrice as Dy, useDatabaseReadsForDatabaseChart as E, validatePostgresEnumCreateForm as E_, useAssistantMcpConnections as Ea, NHOST_RESOURCES as Ec, fileTokensQueryOptions as Ed, postgresDatabaseExtensionsQueryOptions as Ef, usePostgresSidebarPanel as Eg, fetchPostgresDatabasePooler as Eh, createUserJwtForExplorer as Ei, parseFirewallResourceIdSearch as El, buildMysqlEnableRlsSql as Em, useStorageBreakdownResources as En, DEFAULT_APPWRITE_CLOUD_SERVICE_NAMES as Eo, updateMysqlDatabaseMaintenance as Ep, OVERVIEW_STORAGE_CHART_TITLE as Er, sortRepositoryBranches as Es, requestsChartOverviewQueryOptions as Et, useDeleteOrganizationApp as Eu, updateUserPhone as Ev, fetchOrganizationAddons as Ey, useDedicatedDatabaseMonitorMetrics as F, formatPostgresClientAddress as F_, useDeleteAssistantAutomation as Fa, fetchProjectMigrations as Fc, useProjectBuckets as Fd, mysqlBackupsQueryOptions as Ff, usePostgresTableRls as Fg, fetchPostgresTableRls as Fh, resolveServerAuthApiKey as Fi, useCreateWebhook as Fl, parseMysqlPolicyFormRoles as Fm, categorySupportsUsageFilters as Fn, getStatusIcon as Fo, useMysqlDatabaseCredentials as Fp, DATABASE_READS_DESCRIPTION as Fr, continentsQueryOptions as Fs, useDatabaseBreakdownResources as Ft, MARKETPLACE_CATEGORY_LABELS as Fu, useDeleteProjectTeam as Fv, useProjectAddonPrice as Fy, formatDedicatedDatabasePercentTotal as G, matchesPostgresConnectionStateFilter as G_, useUpdateAssistantMessage as Ga, useCsvExportMigrations as Gc, fetchMysqlMetricsSnapshot as Gd, fetchMysqlDatabase as Gf, buildPostgresDropRoleSql as Gg, postgresDatabaseQueryOptions as Gh, AGENT_TOKENS_BREAKDOWN_SERIES as Gi, useDeleteEmailTemplate as Gl, formatMysqlConnectionStateLabel as Gm, MESSAGING_DOCS_HREF as Gn, fetchMessageTargets as Go, useMysqlSidebarSchemas as Gp, getUsageChartLatestValue as Gr, useLocale as Gs, useProjectBandwidthOverview as Gt, canUpdateProjectOAuth2Provider as Gu, useUpdateTeamName as Gv, DEDICATED_DATABASE_MEMORY_DESCRIPTION as H, isLongRunningConnection$1 as H_, useUpdateAssistantConversation as Ha, useCreateFirebaseMigration as Hc, fetchMysqlActiveConnections as Hd, deleteMysqlTableRows as Hf, buildPostgresRowIdentityFromRow as Hg, isPostgresEngine as Hh, AGENT_AUTOMATIONS_DESCRIPTION as Hi, fetchDefaultEmailTemplate as Hl, formatMysqlBackendTypeLabel as Hm, WEBHOOKS_EVENTS_SENT_DESCRIPTION as Hn, MESSAGE_DETAIL_TARGETS_LIMIT as Ho, useMysqlSchemaVisualizer as Hp, formatDatabaseCountValue as Hr, useContinents as Hs, useProjectBandwidthBreakdownDrawer as Ht, useConsoleOAuth2Catalog as Hu, useTeam as Hv, useDedicatedDatabaseQpsChart as I, formatPostgresConnectionDatabase as I_, useDeleteAssistantConversation as Ia, fetchSupabaseReport as Ic, STORAGE_PLACEHOLDER_BUCKET_ID as Id, useMysqlBackupPolicies as If, usePostgresTableRows as Ig, fetchPostgresTableRowColumns as Ih, scopesIncludeRequired as Ii, useDeleteWebhook as Il, removeMysqlPolicyFormRole as Im, getUsageFilterColumnsForCategory as In, getStatusPresentation as Io, useMysqlDatabasePooler as Ip, DATABASE_READS_FOR_DATABASE_DESCRIPTION as Ir, countriesQueryOptions as Is, useFunctionExecutionsForFunctionChart as It, MARKETPLACE_CATEGORY_ORDER as Iu, useDeleteProjectUser as Iv, useProjectAddons as Iy, getDedicatedDatabaseRateHeadline as J, USERS_DEFAULT_SORT_ORDER as J_, useUpsertAssistantMcpConnection as Ja, useProjectMigration as Jc, mysqlConnectionAppsQueryOptions as Jd, fetchMysqlRoles as Jf, createDefaultPostgresRoleFormState as Jg, postgresSidebarSchemasInfiniteQueryOptions as Jh, ASSISTANT_ATTACHMENTS_BUCKET_ID as Ji, useUpdateEmailTemplate as Jl, formatMysqlUptime as Jm, MESSAGING_TOPICS_DESCRIPTION as Jn, fetchProjectTopics as Jo, useMysqlSqlEditorPersistence as Jp, splitUsageBreakdownEntries as Jr, normalizeCountryCode as Js, useProjectDatabaseReadsBreakdownDrawer as Jt, COMMUNITY_SUPPORT_REMINDER_MS as Ju, useUpdateUserEmailVerification as Jv, formatDedicatedDatabasePercentValue as K, serializePostgresActiveConnectionJson as K_, useUpdateAssistantModel as Ka, useCsvImportMigrations as Kc, fetchMysqlTableActivity as Kd, fetchMysqlDatabaseCredentials as Kf, buildPostgresUpdateRoleSql as Kg, postgresRolesQueryOptions as Kh, formatAgentCountTotal as Ki, useEmailTemplate as Kl, formatMysqlConnectionUsername as Km, MESSAGING_MESSAGES_DESCRIPTION as Kn, fetchProjectMessages as Ko, useMysqlSidebarTables as Kp, USAGE_RESOURCES_BREAKDOWN_TITLE as Kr, useLocaleCodes as Ks, useProjectDatabaseCollectionsChart as Kt, useCommunitySupportPrompt as Ku, useUpdateTeamPrefs as Kv, useDedicatedDatabaseStorageChart as L, formatPostgresConnectionStateLabel as L_, useDeleteAssistantMcpConnection as La, projectMigrationQueryOptions as Lc, isRealStorageNavigation as Ld, useMysqlBackups as Lf, useResetPostgresDatabaseCredentials as Lg, fetchPostgresTableRows as Lh, accountAgentUsageQueryOptions as Li, useProjectWebhook as Ll, validateMysqlPolicyFormState as Lm, getUsageSavedFilterScope as Ln, consoleVariablesQueryOptions as Lo, useMysqlQueryHistory as Lp, DATABASE_ROWS_DOCS_HREF as Lr, fetchContinents as Ls, useFunctionGbHoursForFunctionChart as Lt, buildMarketplaceAppTags as Lu, useDeleteTeamMembership as Lv, useDedicatedDatabaseIopsReadChart as M, formatConnectionStateLabel$1 as M_, useCreateAssistantMemory as Ma, fetchDatabaseCsvMigrations as Mc, useBucketFiles as Md, MYSQL_BACKUPS_PAGE_SIZE as Mf, usePostgresTableIndexes as Mg, fetchPostgresTableIndexes as Mh, methodRequiresApiKey as Mi, formatRequestsValue as Ml, mapMysqlPolicyRowToFormState as Mm, getUsageFilterQueriesForSurface as Mn, formatLocalMaintenanceWindow as Mo, useExecuteMysqlSql as Mp, DATABASE_COLLECTIONS_DESCRIPTION as Mr, useRepository as Ms, storageBreakdownResourcesQueryOptions as Mt, useUpdateOrganizationApp as Mu, useCreateTeamMembership as Mv, projectAddonsQueryOptions as My, useDedicatedDatabaseIopsWriteChart as N, formatPostgresApplicationName as N_, useCreateAssistantMessage as Na, fetchFirebaseReport as Nc, useFile as Nd, fetchMysqlBackups as Nf, usePostgresTableInfo as Ng, fetchPostgresTableInfo as Nh, methodSupportsServerApiKey as Ni, fetchProjectWebhook as Nl, normalizeMysqlPolicyCommand as Nm, sanitizeUsageFilterMap as Nn, getMockReportTitle as No, useExplainMysqlSql as Np, DATABASE_DOCUMENTS_DESCRIPTION as Nr, useVcsInstallations as Ns, tableBreakdownResourcesQueryOptions as Nt, mapAppToMarketplaceApp as Nu, useCreateUserTarget as Nv, useOrganizationAddonPrice as Ny, useDatabaseWritesForDatabaseChart as O, buildPostgresCreateEnumSql as O_, useAssistantMessages as Oa, databaseCsvMigrationsQueryOptions as Oc, getCachedBucketListsFromQueryClient as Od, useInstallPostgresDatabaseExtension as Of, usePostgresSidebarTables as Og, fetchPostgresSchemaEnums as Oh, useApiExplorerAuthPersistence as Oi, resolveFirewallListSearch as Ol, buildMysqlNoForceRlsSql as Om, useUsageResourceBreakdownLookups as On, appwriteCloudStatusQueryOptions as Oo, useCommitMysqlRowEdits as Op, formatImageTransformationsTotal as Or, useDeleteVcsInstallation as Os, siteExecutionsForSiteQueryOptions as Ot, useMarketplaceCatalog as Ou, updateUserPrefs as Ov, fetchProjectAddons as Oy, useDedicatedDatabaseMemoryChart as P, formatPostgresBackendTypeLabel as P_, useCreateAssistantModel as Pa, fetchNHostReport as Pc, useFileTokens as Pd, mysqlBackupPoliciesQueryOptions as Pf, usePostgresTablePolicies as Pg, fetchPostgresTablePolicies as Ph, methodUsesSessionAuthChoice as Pi, fetchProjectWebhooks as Pl, normalizeMysqlTablePolicyRow as Pm, USAGE_FILTER_EXCLUDED_ATTRIBUTES as Pn, getStatusBannerParts as Po, useMysqlDatabase as Pp, DATABASE_READS_AND_WRITES_DOCS_HREF as Pr, vcsInstallationsQueryOptions as Ps, useComputeBreakdownResources as Pt, MARKETPLACE_CATEGORY_ICONS as Pu, useDeleteAllUserSessions as Pv, useOrganizationAddons as Py, bandwidthBreakdownQueryOptions as Q, createUserTarget as Q_, resolveCatalogToolName as Qa, fetchFirewallRules as Qc, useCancelMysqlBackend as Qd, fetchMysqlTableIndexes as Qf, isPostgresProtectedRole as Qg, postgresTableIndexesQueryOptions as Qh, ASSISTANT_SETTINGS_PAGE_SIZE_OPTIONS as Qi, PROJECT_OAUTH2_APPS_LIMIT as Ql, matchesMysqlConnectionBackendScope as Qm, AVATARS_SCREENSHOTS_DESCRIPTION as Qn, fetchUsersForMessagingTargetPicker as Qo, useMysqlTablePolicies as Qp, formatExecutionsValue as Qr, backupPoliciesQueryOptions as Qs, useProjectDatabaseWritesBreakdowns as Qt, shuffleCommunitySupportShareTexts as Qu, useUpdateUserName as Qv, useRefetchOnMonitorChartTick as R, formatPostgresConnectionUsername as R_, useDeleteAssistantMemory as Ra, projectMigrationsQueryOptions as Rc, isStoragePlaceholderBucketId as Rd, commitMysqlRowEdits as Rf, useUpdatePostgresDatabase as Rg, fetchPostgresTablesPage as Rh, refetchAccountAgentUsageQueries as Ri, useProjectWebhooks as Rl, backendTypeBadgeVariant as Rm, isUsageFilterDimensionAllowed as Rn, fetchConsoleVariables as Ro, useMysqlRoles as Rp, DATABASE_TABLES_DOCS_HREF as Rr, fetchCountries as Rs, useProjectAuthMauChart as Rt, consoleOAuth2CatalogQueryOptions as Ru, useDeleteUserMFAAuthenticator as Rv, dedicatedDatabaseQpsChartQueryOptions as S, createEnumValueEntry as S_, useAssistantAutomationRuns as Sa, useTestSMTP as Sc, fetchFile as Sd, useTerminatePostgresBackend as Sf, usePostgresSavedQueryScope as Sg, executePostgresDatabaseSql as Sh, executeApiMultipartRequest as Si, isOperatorAllowedForAttribute as Sl, buildMysqlAlterPolicySql as Sm, useProjectWebhooksEventsFailedChart as Sn, isAssistantMessageInFlight as So, mysqlTableRowsQueryOptions as Sp, DATABASE_OPERATIONS_BREAKDOWN_SECTIONS as Sr, fetchRepositoryBranches as Ss, refetchProjectWebhooksUsageQueries as St, organizationAppSecretsQueryOptions as Su, updateUserLabels as Sv, getOnboardingGroupState as Sy, useDatabaseReadsForDatabaseBreakdowns as T, normalizePostgresEnumFormValues as T_, useAssistantConversations as Ta, FIREBASE_RESOURCES as Tc, fileQueryOptions as Td, installPostgresDatabaseExtension as Tf, usePostgresSelectedSchema as Tg, fetchPostgresDatabaseCredentials as Th, downloadOpenApiSpec as Ti, parseFirewallConditions as Tl, buildMysqlDropPolicySql as Tm, useSiteGbHoursForSite as Tn, unscopedTools as To, updateMysqlDatabase as Tp, OVERVIEW_STORAGE_BREAKDOWN_OPTIONS as Tr, resolveConnectBranch as Ts, requestsChartOnlyQueryOptions as Tt, useCreateOrganizationAppSecret as Tu, updateUserPassword as Tv, fetchOrganizationAddonPrice as Ty, DEDICATED_DATABASE_QPS_DESCRIPTION as U, isPostgresClientBackend as U_, useUpdateAssistantMcpConnection as Ua, useCreateNHostMigration as Uc, fetchMysqlConnectionApps as Ud, executeMysqlDatabaseSql as Uf, getPostgresRowKey as Ug, postgresDatabaseCredentialsQueryOptions as Uh, AGENT_DOCS_HREF as Ui, fetchEmailTemplate as Ul, formatMysqlClientAddress as Um, formatWebhooksCountTotal as Un, MESSAGING_TARGET_PICKER_PAGE_SIZE as Uo, useMysqlSelectedSchema as Up, formatDatabaseOperationsTotal as Ur, useCountries as Us, useProjectBandwidthBreakdowns as Ut, useProjectOAuth2Providers as Uu, useTeamMemberships as Uv, DEDICATED_DATABASE_IOPS_DESCRIPTION as V, formatPostgresWaitEvent as V_, useUpdateAssistantAutomation as Va, useCreateCSVImport as Vc, storageSidebarBucketsQueryOptions as Vd, deleteMysqlTableRow as Vf, POSTGRES_ROW_CTID_COLUMN as Vg, fetchPostgresVisualizerForeignKeys as Vh, AGENT_ACTIVITY_SERIES as Vi, webhooksQueryOptions as Vl, formatMysqlApplicationName as Vm, WEBHOOKS_EVENTS_FAILED_DESCRIPTION as Vn, useRegions as Vo, useMysqlSavedQueryScope as Vp, formatDatabaseCountTotal as Vr, localeQueryOptions as Vs, useProjectAvatarsScreenshotsChart as Vt, projectOAuth2ProvidersQueryOptions as Vu, useProjectUsers as Vv, DEDICATED_DATABASE_STORAGE_DESCRIPTION as W, matchesPostgresConnectionBackendScope as W_, useUpdateAssistantMemory as Wa, useCreateSupabaseMigration as Wc, fetchMysqlConnectionStates as Wd, fetchFirstMysqlTable as Wf, buildPostgresCreateRoleSql as Wg, postgresDatabasePoolerQueryOptions as Wh, AGENT_TOKENS_BREAKDOWN_DESCRIPTION as Wi, resetProjectEmailTemplate as Wl, formatMysqlConnectionDatabase as Wm, formatWebhooksCountValue as Wn, fetchMessage as Wo, useMysqlSidebarPanel as Wp, formatDatabaseOperationsValue as Wr, useCountryLookups as Ws, useProjectBandwidthChartOnly as Wt, useUpdateProjectOAuth2Provider as Wu, useUpdateTeamMembership as Wv, usageChartPointsToMonitorSeries as X, createProjectUser as X_, countResourceMutations as Xa, getMigrationTableRef as Xc, mysqlMetricsSnapshotQueryOptions as Xd, fetchMysqlTableAutocompleteColumns as Xf, formatPostgresRoleMembership as Xg, postgresTableAutocompleteColumnsQueryOptions as Xh, ASSISTANT_MODELS_PICKER_PAGE_SIZE as Xi, fetchConsoleProjectScopes as Xl, isLongRunningConnection as Xm, formatMessagingCountValue as Xn, fetchTopic as Xo, useMysqlTableIndexes as Xp, REQUESTS_BREAKDOWN_SECTIONS as Xr, resolveCountryDisplayName as Xs, useProjectDatabaseReadsChart as Xt, COMMUNITY_SUPPORT_UNIQUE_DAYS_THRESHOLD as Xu, useUpdateUserLabels as Xv, mergeDualUsageChartSeries as Y, createProjectTeam as Y_, classifyResourceMutation as Ya, useProjectMigrations as Yc, mysqlConnectionStatesQueryOptions as Yd, fetchMysqlSchemasPage as Yf, formatPostgresRoleConnectionLimit as Yg, postgresSidebarTablesInfiniteQueryOptions as Yh, ASSISTANT_MESSAGES_PAGE_SIZE as Yi, consoleProjectScopesQueryOptions as Yl, formatMysqlWaitEvent as Ym, formatMessagingCountTotal as Yn, fetchProvider as Yo, useMysqlTableColumns as Yp, BANDWIDTH_BREAKDOWN_SECTIONS as Yr, resolveCountryCode as Ys, useProjectDatabaseReadsBreakdowns as Yt, COMMUNITY_SUPPORT_SHARE_TEXTS as Yu, useUpdateUserImpersonator as Yv, bandwidthBreakdownDrawerQueryOptions as Z, createTeamMembership as Z_, hasResourceMutations as Za, fetchFirewallRule as Zc, mysqlTableActivityQueryOptions as Zd, fetchMysqlTableColumns as Zf, isPostgresBuiltinRole as Zg, postgresTableColumnsQueryOptions as Zh, ASSISTANT_SETTINGS_PAGE_SIZE as Zi, useConsoleProjectScopes as Zl, isMysqlClientBackend as Zm, AVATARS_DOCS_HREF as Zn, fetchTopicSubscribers as Zo, useMysqlTableInfo as Zp, formatExecutionsTotal as Zr, backupArchivesQueryOptions as Zs, useProjectDatabaseWritesBreakdownDrawer as Zt, getCommunitySupportShareHref as Zu, useUpdateUserMFA as Zv, dedicatedDatabaseConnectionsChartQueryOptions as _, parsePostgresPolicyFormRoles as __, fetchAssistantMessages as _a, isCustomSmtpEnabled as _c, FILES_DEFAULT_SORT_ORDER as _d, usePostgresActiveConnections as _f, usePostgresDatabasePooler as _g, commitPostgresRowEdits as _h, getExplorerMethodRoute as _i, draftsFromParsedConditions as _l, isMysqlRoleFlag as _m, useProjectRequestsOverview as _n, getAssistantBubblePhase as _o, mysqlTableIndexesQueryOptions as _p, formatRealtimeConnectionsTotal as _r, REPOSITORY_BRANCHES_LIMIT as _s, refetchProjectDatabaseUsageQueries as _t, fetchOrganizationApp as _u, updateTeamName as _v, ONBOARDING_CONNECT as _y, useConsoleNotifications as a, buildPostgresCreatePolicySql as a_, assistantMemoriesQueryOptions as aa, getRestorationDbKind as ac, fetchDistributionApp as ad, useTerminateMysqlIdleInTransaction as af, resetPostgresDatabaseCredentials as ag, updateDedicatedDatabaseHa as ah, fetchProjectActivities as ai, useUpdateFirewallRule as al, MYSQL_ROW_CTID_COLUMN as am, useProjectImageTransformationsUsage as an, consoleToolApplyKey as ao, fetchMysqlVisualizerColumnsBatch as ap, formatAuthMauTotal as ar, providersQueryOptions as as, functionExecutionsForFunctionChartQueryOptions as at, useCreateProjectOAuth2App as au, fetchProjectTeams as av, useUserIdentities as ay, dedicatedDatabaseIopsWriteChartQueryOptions as b, buildPostgresEnumUpdateStatements as b_, fetchAssistantModels as ba, updateProjectSmtp as bc, fetchBucket as bd, usePostgresMetricsSampling as bf, usePostgresSavedQueries as bg, deletePostgresTableRow as bh, methodRequiresSendConfirmation as bi, isDynamicKeyAttribute as bl, validateMysqlRoleFormState as bm, useProjectStorageResourceTypeUsage as bn, getAssistantConversationStatusTone as bo, mysqlTableRlsQueryOptions as bp, formatRealtimeMessagesValue as br, fetchRepositories as bs, refetchProjectRequestsUsageQueries as bt, marketplaceCatalogQueryOptions as bu, updateUserEmailVerification as bv, computeOnboardingProgress as by, blocksQueryOptions as c, buildPostgresEnableRlsSql as c_, assistantModelsInfiniteQueryOptions as ca, useBackupPolicies as cc, fetchDistributionSubmissions as cd, fetchPostgresConnectionStates as cf, updatePostgresTableRow as cg, useUpdateDedicatedDatabaseHa as ch, apiExplorerSpecQueryOptions as ci, draftsFromUsageFilterMap as cl, buildMysqlCreateRoleSql as cm, useProjectMessagingSmsChart as cn, normalizeCardId as co, isMysqlEngine as cp, formatAuthOtpValue as cr, topicsQueryOptions as cs, functionGbHoursOverviewQueryOptions as ct, useDeleteProjectOAuth2AppSecret as cu, fetchTeamMemberships as cv, useUserSessions as cy, useCreateBlock as d, createDefaultPostgresPolicyFormState as d_, fetchAssistantAutomationRuns as da, projectDomainsQueryOptions as dc, useDistributionApps as dd, postgresActiveConnectionsQueryOptions as df, useDeletePostgresDatabase as dg, postgresBackupPoliciesQueryOptions as dh, IMPERSONATION_DOCS_HREF as di, formatFirewallSolveTime as dl, canUpdateMysqlRole as dm, useProjectRealtimeBandwidthChart as dn, resolveConsoleChartHref as do, mysqlDatabaseQueryOptions as dp, getAuthMauDisplayTotal as dr, useProjectMessages as ds, isUsageQueryKeyForResource as dt, useProjectOAuth2AppSecrets as du, fetchUserMFAFactors as dv, onboardingSnapshotQueryOptions as dy, mapPostgresRoleRowToFormState as e_, assistantAutomationRunsQueryOptions as ea, enrichRestorationTargetOptions as ec, createDistributionApp as ed, useMysqlConnectionApps as ef, postgresTablePoliciesQueryOptions as eg, serializeMysqlActiveConnectionJson as eh, formatBandwidthValue as ei, firewallRulesQueryOptions as el, useMysqlTableRows as em, useProjectExecutionsOverview as en, CONSOLE_REFRESH_SCOPE_KEYS as eo, fetchMysqlTablePolicies as ep, formatAvatarsScreenshotsValue as er, messageTargetsQueryOptions as es, bandwidthOverviewQueryOptions as et, fetchProjectOAuth2AppSecrets as eu, deleteProjectTeam as ev, useUpdateUserPhone as ey, useDeleteBlock as f, formatPostgresPolicyFormRoles as f_, fetchAssistantAutomations as fa, useCreateDomain as fc, useDistributionBuilds as fd, postgresConnectionAppsQueryOptions as ff, useDeletePostgresTableRows as fg, postgresBackupsQueryOptions as fh, formatMethodAuthDescription as fi, FIREWALL_CONDITION_ATTRIBUTE_GROUPS as fl, createDefaultMysqlRoleFormState as fm, useProjectRealtimeConnectionsChart as fn, resolveConsoleListHref as fo, mysqlRolesQueryOptions as fp, getAuthSignupsDisplayTotal as fr, useProjectProviders as fs, overviewStorageOverviewQueryOptions as ft, useProjectOAuth2Apps as fu, fetchUserMemberships as fv, useOnboardingProgressFromSnapshot as fy, databaseWritesForDatabaseChartQueryOptions as g, normalizePostgresTablePolicyRow as g_, fetchAssistantMemories as ga, fetchProjectSmtpStatus as gc, FILES_DEFAULT_SORT_BY as gd, useCancelPostgresBackend as gf, usePostgresDatabaseCredentials as gg, fetchDedicatedBackupPolicies as gh, getExplorerMethodLinkUrl as gi, createEmptyConditionDraft as gl, isMysqlProtectedRole as gm, useProjectRequestsChartOnly as gn, getAssistantAgentLabel as go, mysqlTableColumnsQueryOptions as gp, REALTIME_MESSAGES_DESCRIPTION as gr, useTopicSubscribers as gs, refetchProjectComputeUsageQueries as gt, fetchMarketplaceCatalogAppsRaw as gu, updateTeamMembership as gv, ONBOARDING_AGENT_STEP as gy, databaseReadsForDatabaseChartQueryOptions as h, normalizePostgresPolicyCommand as h_, fetchAssistantMcpConnections as ha, useVerifyDomain as hc, BUCKETS_DEFAULT_SORT_ORDER as hd, postgresTableActivityQueryOptions as hf, usePostgresDatabase as hg, dedicatedBackupPoliciesQueryOptions as hh, getRateLimitDescription as hi, areFirewallConditionsComplete as hl, isMysqlBuiltinRole as hm, useProjectRequestsBreakdowns as hn, buildTurnView as ho, mysqlTableAutocompleteColumnsQueryOptions as hp, REALTIME_DOCS_HREF as hr, useTopic as hs, refetchProjectBandwidthUsageQueries as ht, defaultMarketplaceRedirectUri as hu, teamsQueryOptions as hv, useSkipOnboardingStep as hy, fetchConsoleNotifications as i, buildPostgresAlterPolicySql as i_, assistantMcpConnectionsQueryOptions as ia, fetchRestoredDatabaseIdByName as ic, distributionSubmissionsQueryOptions as id, useTerminateMysqlBackend as if, postgresVisualizerForeignKeysQueryOptions as ig, fetchDedicatedDatabaseReplicas as ih, activityEventQueryOptions as ii, useFirewallRules as il, useUpdateMysqlTableRow as im, useProjectGbHoursOverview as in, consoleCtaLabel as io, fetchMysqlTablesPage as ip, AUTH_SIGNUPS_DESCRIPTION as ir, providerQueryOptions as is, firewallTrafficOverviewQueryOptions as it, projectOAuth2AppsQueryOptions as iu, deleteUserSession as iv, useUser as iy, useDedicatedDatabaseCpuChart as j, connectionStateBadgeVariant$1 as j_, useCreateAssistantConversation as ja, fetchCsvImportMigrations as jc, useBucket as jd, mysqlDatabaseReplicasQueryOptions as jf, usePostgresTableColumns as jg, fetchPostgresTableColumns as jh, mergeUniqueScopes as ji, formatRequestsTotal as jl, formatMysqlPolicyRoles as jm, useUsageFilters as jn, useAppwriteCloudStatus as jo, useDeleteMysqlTableRows as jp, formatStorageBytesValue as jr, useRepositories as js, siteGbHoursOverviewQueryOptions as jt, useOrganizationApps as ju, useCreateProjectUser as jv, projectAddonPriceQueryOptions as jy, useDedicatedDatabaseCardMetrics as k, buildPostgresDropEnumSql as k_, useAssistantModels as ka, fetchAppwriteReport as kc, pickNextBucketIdAfterDelete as kd, usePostgresDatabaseExtensions as kf, usePostgresSidebarTablesSort as kg, fetchPostgresSchemasPage as kh, getMethodRequiredScopes as ki, serializeFirewallConditions as kl, createDefaultMysqlPolicyFormState as km, UsageFiltersProvider as kn, computeConsoleAlertState as ko, useCreateMysqlTableRow as kp, formatImageTransformationsValue as kr, useInstallation as ks, siteExecutionsOverviewQueryOptions as kt, useOrganizationApp as ku, updateUserStatus as kv, organizationAddonPriceQueryOptions as ky, fetchBlocks as l, buildPostgresForceRlsSql as l_, assistantModelsQueryOptions as la, useDatabaseRestoreMigrations as lc, useCreateDistributionApp as ld, fetchPostgresMetricsSnapshot as lf, useCommitPostgresRowEdits as lg, POSTGRES_BACKUPS_PAGE_SIZE as lh, fetchParsedApiSpec as li, exceedsFirewallUsageConditionLimit as ll, buildMysqlDropRoleSql as lm, useProjectMessagingTopicsChart as ln, normalizeConsolePath as lo, mysqlDatabaseCredentialsQueryOptions as lp, formatAuthSignupsTotal as lr, useMessage as ls, gbHoursOverviewQueryOptions as lt, useDeleteProjectOAuth2AppTokens as lu, fetchUser as lv, useUserTargets as ly, useUpdateUserStatus as m, mapPostgresPolicyRowToFormState as m_, fetchAssistantConversations as ma, useProjectDomains as mc, BUCKETS_DEFAULT_SORT_BY as md, postgresMetricsSnapshotQueryOptions as mf, useExplainPostgresSql as mg, usePostgresBackups as mh, formatRateLimitDescription as mi, FIREWALL_RESOURCE_TYPES as ml, formatMysqlRoleMembership as mm, useProjectRequestsBreakdownDrawer as mn, scrollToConsoleCard as mo, mysqlSidebarTablesInfiniteQueryOptions as mp, REALTIME_CONNECTIONS_DESCRIPTION as mr, useProvider as ms, refetchProjectAvatarsUsageQueries as mt, MARKETPLACE_APPS_LIMIT as mu, fetchUserTargets as mv, useProjectOnboardingSnapshot as my, consoleNotificationsQueryKey as n, validatePostgresRoleFormState as n_, assistantConversationQueryOptions as na, fetchBackupPolicies as nc, distributionAppsQueryOptions as nd, useMysqlMetricsSampling as nf, postgresTableRowColumnsQueryOptions as ng, createDedicatedDatabaseFailover as nh, resolveBandwidthStackedYAxisDomain as ni, useDeleteFirewallRule as nl, useUpdateMysqlDatabase as nm, useProjectFunctionExecutionsOverview as nn, collectConsoleToolResults as no, fetchMysqlTableRowColumns as np, AUTH_MAU_DESCRIPTION as nr, messagingTargetPickerUsersQueryOptions as ns, databaseBreakdownResourcesQueryOptions as nt, projectOAuth2AppQueryOptions as nu, deleteTeamMembership as nv, useUpdateUserPrefs as ny, useMarkAllConsoleNotificationsRead as o, buildPostgresDisableRlsSql as o_, assistantMessagesQueryOptions as oa, getRestoredDatabaseTarget as oc, fetchDistributionApps as od, fetchPostgresActiveConnections as of, updatePostgresDatabase as og, useCreateDedicatedDatabaseFailover as oh, useProjectActivities as oi, canApplyUsageFiltersAsFirewallRule as ol, buildMysqlRowIdentityFromRow as om, useProjectListRequestsUsage as on, isConsoleToolName as oo, fetchMysqlVisualizerExternalColumns as op, formatAuthMauValue as or, topicQueryOptions as os, functionExecutionsOverviewQueryOptions as ot, useCreateProjectOAuth2AppSecret as ou, fetchProjectUsers as ov, useUserMFAFactors as oy, useDeleteCache as p, formatPostgresPolicyRoles as p_, fetchAssistantConversation as pa, useDeleteDomain as pc, useDistributionSubmissions as pd, postgresConnectionStatesQueryOptions as pf, useExecutePostgresSql as pg, usePostgresBackupPolicies as ph, getMethodAuthDescription as pi, FIREWALL_HTTP_METHODS as pl, formatMysqlRoleConnectionLimit as pm, useProjectRealtimeMessagesChart as pn, resolveConsoleResourceHref as po, mysqlSidebarSchemasInfiniteQueryOptions as pp, REALTIME_BANDWIDTH_DESCRIPTION as pr, useProjectTopics as ps, refetchProjectAuthUsageQueries as pt, useUpdateProjectOAuth2App as pu, fetchUserSessions as pv, useOnboardingStepStates as py, getDedicatedDatabaseGaugeHeadline as q, USERS_DEFAULT_SORT_BY as q_, useUploadAssistantAttachments as qa, useDatabaseCsvMigrations as qc, mysqlActiveConnectionsQueryOptions as qd, fetchMysqlDatabasePooler as qf, canUpdatePostgresRole as qg, postgresSchemaEnumsQueryOptions as qh, formatAgentCountValue as qi, useResetEmailTemplate as ql, formatMysqlDurationSince as qm, MESSAGING_SMS_DESCRIPTION as qn, fetchProjectProviders as qo, useMysqlSidebarTablesSort as qp, collectUsageResourceBreakdownItems as qr, getCountryDisplayName as qs, useProjectDatabaseDocumentsChart as qt, COMMUNITY_SUPPORT_ACTIONS as qu, useUpdateUserEmail as qv, consoleNotificationsQueryOptions as r, addPostgresPolicyFormRole as r_, assistantConversationsQueryOptions as ra, fetchDatabaseRestoreMigrations as rc, distributionBuildsQueryOptions as rd, useMysqlTableActivity as rf, postgresTableRowsQueryOptions as rg, dedicatedDatabaseReplicasQueryOptions as rh, activitiesQueryOptions as ri, useFirewallRuleImpact as rl, useUpdateMysqlDatabaseMaintenance as rm, useProjectFunctionGbHoursOverview as rn, collectRenderableConsoleActions as ro, fetchMysqlTableRows as rp, AUTH_OTP_DESCRIPTION as rr, prefetchMessageDetailData as rs, executionsOverviewQueryOptions as rt, projectOAuth2AppSecretsQueryOptions as ru, deleteUserMFAAuthenticator as rv, useUpdateUserStatus$1 as ry, useUpdateConsoleNotificationRead as s, buildPostgresDropPolicySql as s_, assistantModelQueryOptions as sa, useBackupArchives as sc, fetchDistributionBuilds as sd, fetchPostgresConnectionApps as sf, updatePostgresDatabaseMaintenance as sg, useDedicatedDatabaseReplicas as sh, useProjectActivity as si, countUnestimableFirewallConditions as sl, getMysqlRowKey as sm, useProjectMessagingMessagesChart as sn, isSideEffectConsoleAction as so, fetchMysqlVisualizerForeignKeys as sp, formatAuthOtpTotal as sr, topicSubscribersQueryOptions as ss, functionGbHoursForFunctionChartQueryOptions as st, useDeleteProjectOAuth2App as su, fetchTeam as sv, useUserMemberships as sy, CONSOLE_NOTIFICATIONS_LIMIT as t, parsePostgresRoleMembership as t_, assistantAutomationsQueryOptions as ta, fetchBackupArchives as tc, distributionAppQueryOptions as td, useMysqlConnectionStates as tf, postgresTableRlsQueryOptions as tg, postgresDatabaseReplicasQueryOptions as th, resolveBandwidthDualChartDisplay as ti, useCreateFirewallRule as tl, useResetMysqlDatabaseCredentials as tm, useProjectFirewallTrafficOverview as tn, collectConsoleCtaActions as to, fetchMysqlTableRls as tp, AUTH_DOCS_HREF as tr, messagesQueryOptions as ts, computeBreakdownResourcesQueryOptions as tt, fetchProjectOAuth2Apps as tu, deleteProjectUser as tv, useUpdateUserPhoneVerification as ty, useBlocks as u, buildPostgresNoForceRlsSql as u_, fetchAssistantAttachmentFiles as ua, fetchProjectDomains as uc, useDistributionApp as ud, fetchPostgresTableActivity as uf, useCreatePostgresTableRow as ug, fetchPostgresBackups as uh, useApiExplorerSpec as ui, firewallUsageConditionsKey as ul, buildMysqlUpdateRoleSql as um, useProjectOverviewStorageOverview as un, parseConsoleEnvelope as uo, mysqlDatabasePoolerQueryOptions as up, formatAuthSignupsValue as ur, useMessageTargets as us, getProjectListRequestsChartDateRange as ut, useProjectOAuth2App as uu, fetchUserIdentities as uv, usersQueryOptions as uy, dedicatedDatabaseCpuChartQueryOptions as v, removePostgresPolicyFormRole as v_, fetchAssistantMessagesWithTools as va, projectSmtpStatusQueryOptions as vc, bucketFilesQueryOptions as vd, usePostgresConnectionApps as vf, usePostgresQueryHistory as vg, createPostgresTableRow as vh, resolveExplorerSelection as vi, formatConditionSummary as vl, mapMysqlRoleRowToFormState as vm, useProjectSiteExecutionsOverview as vn, getAssistantConversationStatusDotClass as vo, mysqlTableInfoQueryOptions as vp, formatRealtimeConnectionsValue as vr, fetchInstallation as vs, refetchProjectMessagingUsageQueries as vt, fetchOrganizationAppSecrets as vu, updateTeamPrefs as vv, ONBOARDING_PRODUCT_CATEGORIES as vy, refetchDedicatedDatabaseMonitorQueries as w, isPostgresEnumValueEntryNew as w_, useAssistantConversation as wa, APPWRITE_RESOURCES as wc, fetchProjectBuckets as wd, fetchPostgresDatabaseExtensions as wf, usePostgresSchemaVisualizer as wg, fetchPostgresDatabase as wh, isMultipartMethod as wi, isTextMatchOperator as wl, buildMysqlDisableRlsSql as wm, useSiteExecutionsForSite as wn, toolsForAgent as wo, resetMysqlDatabaseCredentials as wp, IMAGE_TRANSFORMATIONS_DOCS_HREF as wr, repositoryBranchesQueryOptions as ws, requestsBreakdownQueryOptions as wt, useCreateOrganizationApp as wu, updateUserName as wv, subStepCountsTowardProgress as wy, dedicatedDatabaseMemoryChartQueryOptions as x, createDefaultPostgresEnumFormState as x_, useAssistantAttachmentFiles as xa, useProjectSmtpEnabled as xc, fetchBucketFiles as xd, usePostgresTableActivity as xf, usePostgresSavedQueriesSort as xg, deletePostgresTableRows as xh, buildCurlCommand as xi, isNoValueOperator as xl, addMysqlPolicyFormRole as xm, useProjectWebhooksCountChart as xn, isAssistantConversationInFlight as xo, mysqlTableRowColumnsQueryOptions as xp, getUsageChartPeakValue as xr, fetchRepository as xs, refetchProjectStorageUsageQueries as xt, organizationAppQueryOptions as xu, updateUserImpersonator as xv, getAtomicOnboardingStepCount as xy, dedicatedDatabaseIopsReadChartQueryOptions as y, validatePostgresPolicyFormState as y_, fetchAssistantModel as ya, sendProjectSMTPTest as yc, bucketsQueryOptions as yd, usePostgresConnectionStates as yf, usePostgresRoles as yg, deletePostgresDatabase as yh, getSendRequestConfirmationCopy as yi, getOperatorsForAttribute as yl, parseMysqlRoleMembership as ym, useProjectSiteGbHoursOverview as yn, getAssistantConversationStatusLabel as yo, mysqlTablePoliciesQueryOptions as yp, formatRealtimeMessagesTotal as yr, fetchNamespaces as ys, refetchProjectRealtimeUsageQueries as yt, fetchOrganizationAppsRaw as yu, updateUserEmail as yv, computeOnboardingProductBreakdown as yy, DEDICATED_DATABASE_CONNECTIONS_DESCRIPTION as z, formatPostgresDurationSince as z_, useDeleteAssistantModel as za, useCreateAppwriteMigration as zc, redirectStorageFirstBucketOrPlaceholder as zd, createMysqlTableRow as zf, useUpdatePostgresDatabaseMaintenance as zg, fetchPostgresVisualizerColumnsBatch as zh, useAccountAgentUsage as zi, useUpdateWebhook as zl, connectionStateBadgeVariant as zm, WEBHOOKS_COUNT_DESCRIPTION as zn, useConsoleVariables as zo, useMysqlSavedQueries as zp, DATABASE_WRITES_DESCRIPTION as zr, fetchLocale as zs, useProjectAuthOtpChart as zt, fetchConsoleOAuth2Catalog as zu, useDeleteUserSession as zv };
