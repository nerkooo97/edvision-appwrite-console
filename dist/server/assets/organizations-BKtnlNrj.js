import { d as sdk, h as fetchConsoleAccount } from "./sdk-DjIJ_hjn.js";
import { n as listConsoleProjects } from "./console-projects-C0b0tMaH.js";
import { d as LONG_STALE_TIME, o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ID, Query } from "@appwrite.io/console";
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const BillingPlanTier = {
	Tier0: "tier-0",
	Tier1: "tier-1",
	Tier2: "tier-2"
};
Object.values(BillingPlanTier);
const PROJECT_ROLE_VALUES = [
	"owner",
	"developer",
	"editor",
	"analyst"
];
var PROJECT_ROLE_PREFIX = "project-";
var PROJECT_ROLE_NAMES = new Set(PROJECT_ROLE_VALUES);
function isProjectSpecificRole(role) {
	if (!role.startsWith(PROJECT_ROLE_PREFIX)) return false;
	const lastDash = role.lastIndexOf("-");
	if (lastDash <= 8) return false;
	return PROJECT_ROLE_NAMES.has(role.slice(lastDash + 1));
}
function parseProjectRole(role) {
	if (!isProjectSpecificRole(role)) return null;
	const withoutPrefix = role.slice(8);
	const lastDash = withoutPrefix.lastIndexOf("-");
	if (lastDash === -1) return null;
	const projectId = withoutPrefix.slice(0, lastDash);
	if (!projectId) return null;
	return {
		projectId,
		roleName: withoutPrefix.slice(lastDash + 1)
	};
}
function buildProjectRole(projectId, roleName) {
	return `${PROJECT_ROLE_PREFIX}${projectId}-${roleName}`;
}
function hasProjectSpecificRoles(roles) {
	return (roles ?? []).some(isProjectSpecificRole);
}
function parseProjectAccess(roles) {
	return (roles ?? []).map(parseProjectRole).filter((entry) => entry !== null);
}
function projectIdsFromRoles(roles) {
	return parseProjectAccess(roles).map((entry) => entry.projectId);
}
const DEFAULT_ROLES = ["owner"];
const DEFAULT_SCOPES = [
	"projects.read",
	"projects.write",
	"databases.read",
	"databases.write",
	"tables.write",
	"collections.write",
	"rows.write",
	"documents.write",
	"functions.read",
	"functions.write",
	"buckets.read",
	"buckets.write",
	"keys.write",
	"platforms.write",
	"webhooks.write",
	"users.write",
	"teams.read",
	"teams.write",
	"messages.read",
	"messages.write",
	"topics.write",
	"providers.write",
	"subscribers.write",
	"sites.read",
	"sites.write",
	"domains.write",
	"executions.write",
	"migrations.write",
	"vcs.write",
	"rules.write",
	"billing.read"
];
function deriveAccessFromRolesScopes(roles, scopes) {
	const roleSet = new Set(roles);
	const scopeSet = new Set(scopes);
	const has = (s) => scopeSet.has(s);
	const hasTableOrCollections = has("tables.write") || has("collections.write");
	const hasRowsOrDocuments = has("rows.write") || has("documents.write");
	return {
		isOwner: roleSet.has("owner"),
		isDeveloper: roleSet.has("developer"),
		isBilling: roleSet.has("billing"),
		canSeeProjects: has("projects.read"),
		canSeeDatabases: has("databases.read"),
		canSeeFunctions: has("functions.read"),
		canSeeBuckets: has("buckets.read"),
		canSeeMessages: has("messages.read"),
		canSeeTeams: has("teams.read"),
		canSeeSites: has("sites.read"),
		canSeeBilling: has("billing.read"),
		canWriteProjects: has("projects.write"),
		canWriteDatabases: has("databases.write"),
		canWriteTables: hasTableOrCollections,
		canWriteRows: hasRowsOrDocuments,
		canWriteFunctions: has("functions.write"),
		canWriteBuckets: has("buckets.write"),
		canWriteKeys: has("keys.write"),
		canWritePlatforms: has("platforms.write"),
		canWriteWebhooks: has("webhooks.write"),
		canWriteUsers: has("users.write"),
		canWriteTeams: has("teams.write"),
		canWriteMessages: has("messages.write"),
		canWriteTopics: has("topics.write"),
		canWriteProviders: has("providers.write"),
		canWriteSites: has("sites.write"),
		canWriteDomains: has("domains.write"),
		canWriteExecutions: has("executions.write"),
		canWriteMigrations: has("migrations.write"),
		canWriteVcs: has("vcs.write"),
		canWriteRules: has("rules.write"),
		canWriteSubscribers: has("subscribers.write")
	};
}
const FULL_ACCESS = deriveAccessFromRolesScopes([...DEFAULT_ROLES], [...DEFAULT_SCOPES]);
var AUTO_EDUCATION_PLAN = /^auto-1$/i;
function getPlanNameFromTier(tier) {
	if (tier === null || tier === void 0) return "free";
	if (typeof tier === "string") {
		if (AUTO_EDUCATION_PLAN.test(tier.trim())) return "education";
		const tierMatch = tier.match(/tier-(\d+)/i);
		if (tierMatch) {
			const tierNumber = parseInt(tierMatch[1], 10);
			if (tierNumber === 0) return "free";
			if (tierNumber === 1) return "pro";
			if (tierNumber === 2) return "core";
			return "custom";
		}
		if (tier === "0" || tier.toLowerCase() === "tier-0") return "free";
		if (tier === "1" || tier.toLowerCase() === "tier-1") return "pro";
		if (tier === "2" || tier.toLowerCase() === "tier-2") return "core";
		const normalized = tier.toLowerCase();
		if ([
			"free",
			"pro",
			"core",
			"custom",
			"education"
		].includes(normalized)) return normalized;
		if (normalized === "scale") return "core";
		if (normalized === "enterprise") return "custom";
		return "custom";
	}
	if (typeof tier === "number") {
		if (tier === 0) return "free";
		if (tier === 1) return "pro";
		if (tier === 2) return "core";
		return "custom";
	}
	return "free";
}
function getCanonicalPlanDisplayLabel(plan) {
	switch (plan) {
		case "free": return "Free";
		case "pro": return "Pro";
		case "core": return "Core";
		case "education": return "Education";
		case "custom":
		default: return "Custom";
	}
}
function getBillingPlanDisplayLabel(tier) {
	return getCanonicalPlanDisplayLabel(getPlanNameFromTier(tier));
}
function isAutoEducationPlanRef(id, billing, name) {
	return AUTO_EDUCATION_PLAN.test(id) || AUTO_EDUCATION_PLAN.test(billing) || AUTO_EDUCATION_PLAN.test(name);
}
function resolveOrganizationPlanDisplayLabel(input) {
	const id = input.planId?.trim() ?? "";
	const billing = input.billingPlan?.trim() ?? "";
	const name = input.planName?.trim() ?? "";
	if (isAutoEducationPlanRef(id, billing, name)) return getCanonicalPlanDisplayLabel("education");
	if (name.length > 0) return input.planName;
	return getBillingPlanDisplayLabel(input.billingPlan);
}
function canonicalRank(plan) {
	if (plan === "free") return 0;
	if (plan === "pro" || plan === "education") return 1;
	if (plan === "core") return 2;
	return 3;
}
function resolveBillingPlanRecord(planRef, plans) {
	if (!planRef || !plans) return null;
	if (plans[planRef]) return plans[planRef];
	return Object.values(plans).find((plan) => plan.$id === planRef) ?? null;
}
function getPlanCanonicalFromRecord(planRef, plans) {
	const plan = resolveBillingPlanRecord(planRef, plans);
	if (plan?.name) {
		const name = plan.name.toLowerCase();
		if (name.includes("free") || name === "starter") return "free";
		if (name.includes("pro")) return "pro";
		if (name.includes("core") || name.includes("scale")) return "core";
		if (name.includes("education") || name.includes("sponsored")) return "education";
	}
	if (plan && typeof plan.order === "number") {
		if (plan.order <= 0 && (plan.price ?? 0) === 0) return "free";
		if (plan.order === 1) return "pro";
		if (plan.order === 2) return "core";
	}
	return getPlanNameFromTier(plan?.$id ?? planRef);
}
function isFreePlanRef(planRef, plans) {
	return getPlanCanonicalFromRecord(planRef, plans) === "free";
}
function compareBillingPlanRefs(currentRef, selectedRef, plans) {
	if (!currentRef || !selectedRef) return "unknown";
	if (currentRef === selectedRef) return "same";
	const currentPlan = resolveBillingPlanRecord(currentRef, plans);
	const selectedPlan = resolveBillingPlanRecord(selectedRef, plans);
	if (currentPlan && selectedPlan && typeof currentPlan.order === "number" && typeof selectedPlan.order === "number" && currentPlan.order !== selectedPlan.order) return selectedPlan.order < currentPlan.order ? "downgrade" : "upgrade";
	if (currentPlan && selectedPlan && typeof currentPlan.price === "number" && typeof selectedPlan.price === "number" && currentPlan.price !== selectedPlan.price) return selectedPlan.price < currentPlan.price ? "downgrade" : "upgrade";
	const currentRank = canonicalRank(getPlanCanonicalFromRecord(currentRef, plans));
	const selectedRank = canonicalRank(getPlanCanonicalFromRecord(selectedRef, plans));
	if (selectedRank < currentRank) return "downgrade";
	if (selectedRank > currentRank) return "upgrade";
	return "unknown";
}
const SCREENSHOT_MODE_OPEN_KEY = "screenshot:modeOpen";
const SCREENSHOT_MODE_CHANGE_EVENT = "screenshotModeChange";
const SCREENSHOT_MODE_TOGGLE_SEQUENCE = "smile";
const SCREENSHOT_MODE_USER_NAME = "Walter O'Brien";
const SCREENSHOT_MODE_ORG_NAME = "ACME Corps";
function readScreenshotModeOpen() {
	if (typeof window === "undefined") return false;
	try {
		return localStorage.getItem(SCREENSHOT_MODE_OPEN_KEY) === "true";
	} catch {
		return false;
	}
}
function writeScreenshotModeOpen(open) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(SCREENSHOT_MODE_OPEN_KEY, open ? "true" : "false");
	} catch {}
	try {
		window.dispatchEvent(new CustomEvent(SCREENSHOT_MODE_CHANGE_EVENT, { detail: { open } }));
	} catch {}
}
function isScreenshotModeActive() {
	return readScreenshotModeOpen();
}
function subscribeScreenshotMode(listener) {
	if (typeof window === "undefined") return () => {};
	const onCustom = (event) => {
		const detail = event.detail;
		listener(detail?.open ?? readScreenshotModeOpen());
	};
	const onStorage = (event) => {
		if (event.key === "screenshot:modeOpen" || event.key === null) listener(readScreenshotModeOpen());
	};
	window.addEventListener(SCREENSHOT_MODE_CHANGE_EVENT, onCustom);
	window.addEventListener("storage", onStorage);
	return () => {
		window.removeEventListener(SCREENSHOT_MODE_CHANGE_EVENT, onCustom);
		window.removeEventListener("storage", onStorage);
	};
}
function applyScreenshotModeAccount(account) {
	if (!account || !isScreenshotModeActive()) return account;
	return {
		...account,
		name: SCREENSHOT_MODE_USER_NAME
	};
}
function applyScreenshotModeOrganizationName(org) {
	if (!org || !isScreenshotModeActive()) return org;
	return {
		...org,
		name: SCREENSHOT_MODE_ORG_NAME
	};
}
const BILLING_LIMIT_RESOURCE_LABELS = {
	bandwidth: "Bandwidth",
	storage: "Storage",
	users: "Users",
	executions: "Executions",
	GBHours: "GB-hours",
	imageTransformations: "Image transformations",
	authPhone: "Phone auth",
	databasesWrites: "Database writes",
	databasesReads: "Database reads",
	screenshotsGenerated: "Screenshots",
	realtime: "Realtime connections",
	realtimeMessages: "Realtime messages",
	documents: "Documents"
};
var BUDGET_LIMIT_KEY = "budgetLimit";
var USAGE_LIMIT_THRESHOLD = 100;
function toFiniteNumber(value) {
	if (value == null || value === "") return null;
	const n = typeof value === "number" ? value : Number(value);
	return Number.isFinite(n) ? n : null;
}
function getReachedPlanUsageLimitKeys(billingLimits) {
	if (!billingLimits || typeof billingLimits !== "object") return [];
	return Object.entries(billingLimits).filter(([key, value]) => {
		if (key === BUDGET_LIMIT_KEY) return false;
		const n = toFiniteNumber(value);
		return n != null && n >= USAGE_LIMIT_THRESHOLD;
	}).map(([key]) => key);
}
function isPlanUsageLimitReached(resource) {
	return getReachedPlanUsageLimitKeys(resource?.billingLimits).length > 0;
}
function getBillingLimitResourceLabel(key) {
	if (key in BILLING_LIMIT_RESOURCE_LABELS) return BILLING_LIMIT_RESOURCE_LABELS[key];
	return null;
}
function getSingleRecognizedPlanUsageLimitLabel(billingLimits) {
	const keys = getReachedPlanUsageLimitKeys(billingLimits);
	if (keys.length !== 1) return null;
	return getBillingLimitResourceLabel(keys[0]);
}
var ESTIMATION_STALE_TIME = 300 * 1e3;
var EMPTY_ESTIMATION_INVITES = [];
function isOrganizationBillingReadonlyStatus(status) {
	return (status ?? "").toLowerCase() === "readonly";
}
function isBudgetLimitReached(resource) {
	const raw = resource?.billingLimits?.budgetLimit;
	if (raw == null || raw === "") return false;
	const budgetLimit = typeof raw === "number" ? raw : Number(raw);
	return Number.isFinite(budgetLimit) && budgetLimit >= 100;
}
async function resolveProjectTeamIdFromConsole(projectId) {
	if (!projectId) return null;
	try {
		const orgs = await fetchOrganizations();
		const { listConsoleProjects: listConsoleProjects$1 } = await import("./console-projects-cFlSoZUo.js");
		const { Query: Query$1 } = await import("@appwrite.io/console");
		for (const org of orgs.teams ?? []) try {
			const teamId = (await listConsoleProjects$1({
				organizationId: org.$id,
				queries: [
					Query$1.equal("teamId", org.$id),
					Query$1.equal("$id", projectId),
					Query$1.limit(1)
				],
				total: false
			})).projects?.[0]?.teamId;
			if (teamId) return teamId;
		} catch {}
		return null;
	} catch {
		return null;
	}
}
function isBillingEnabled() {
	return getActiveProfileFeatures().billing;
}
function isMultiTenancyEnabled() {
	return getActiveProfileFeatures().multiTenancy;
}
function createSelfHostedOrganizationPlan() {
	return {
		$id: "self-hosted",
		name: "Self-hosted",
		desc: "Self-hosted Appwrite installation",
		order: 0,
		price: 0,
		trial: 0,
		bandwidth: Number.MAX_SAFE_INTEGER,
		storage: Number.MAX_SAFE_INTEGER,
		imageTransformations: Number.MAX_SAFE_INTEGER,
		screenshotsGenerated: Number.MAX_SAFE_INTEGER,
		members: Number.MAX_SAFE_INTEGER,
		webhooks: Number.MAX_SAFE_INTEGER,
		wafRules: Number.MAX_SAFE_INTEGER,
		projects: Number.MAX_SAFE_INTEGER,
		platforms: Number.MAX_SAFE_INTEGER,
		users: Number.MAX_SAFE_INTEGER,
		teams: Number.MAX_SAFE_INTEGER,
		databases: Number.MAX_SAFE_INTEGER,
		databasesReads: Number.MAX_SAFE_INTEGER,
		databasesWrites: Number.MAX_SAFE_INTEGER,
		databasesBatchSize: Number.MAX_SAFE_INTEGER,
		buckets: Number.MAX_SAFE_INTEGER,
		fileSize: Number.MAX_SAFE_INTEGER,
		functions: Number.MAX_SAFE_INTEGER,
		sites: Number.MAX_SAFE_INTEGER,
		executions: Number.MAX_SAFE_INTEGER,
		executionsRetentionCount: Number.MAX_SAFE_INTEGER,
		GBHours: Number.MAX_SAFE_INTEGER,
		realtime: Number.MAX_SAFE_INTEGER,
		realtimeMessages: Number.MAX_SAFE_INTEGER,
		messages: Number.MAX_SAFE_INTEGER,
		topics: Number.MAX_SAFE_INTEGER,
		authPhone: Number.MAX_SAFE_INTEGER,
		domains: 0,
		activityLogs: Number.MAX_SAFE_INTEGER,
		usageLogs: Number.MAX_SAFE_INTEGER,
		usageLogsIntervals: [
			"15m",
			"1h",
			"1d"
		],
		projectInactivityDays: 0,
		alertLimit: 0,
		usage: {},
		addons: {
			seats: {
				supported: true,
				planIncluded: Number.MAX_SAFE_INTEGER,
				limit: Number.MAX_SAFE_INTEGER,
				type: "self-hosted",
				currency: "USD",
				price: 0,
				value: 0,
				invoiceDesc: ""
			},
			projects: {
				supported: true,
				planIncluded: Number.MAX_SAFE_INTEGER,
				limit: Number.MAX_SAFE_INTEGER,
				type: "self-hosted",
				currency: "USD",
				price: 0,
				value: 0,
				invoiceDesc: ""
			}
		},
		budgetCapEnabled: false,
		customSmtp: true,
		emailBranding: true,
		requiresPaymentMethod: false,
		requiresBillingAddress: false,
		isAvailable: true,
		selfService: false,
		premiumSupport: false,
		budgeting: false,
		supportsMockNumbers: true,
		supportsOrganizationRoles: false,
		supportsProjectSpecificRoles: false,
		supportsCredits: false,
		supportsDedicatedDatabases: true,
		databaseComputeCredit: 0,
		supportsDisposableEmailValidation: false,
		supportsCanonicalEmailValidation: false,
		supportsFreeEmailValidation: false,
		supportsCorporateEmailValidation: false,
		backupsEnabled: false,
		usagePerProject: false,
		supportedAddons: {
			baa: false,
			premiumGeoDB: false,
			premiumGeoDBOrg: false
		},
		backupPolicies: 0,
		deploymentSize: Number.MAX_SAFE_INTEGER,
		buildSize: Number.MAX_SAFE_INTEGER,
		databasesAllowEncrypt: true,
		group: "starter"
	};
}
async function fetchOrganizations() {
	if (isBillingEnabled()) return await sdk.forConsole.organizations.list({ queries: [Query.equal("platform", "appwrite")] });
	return await sdk.forConsole.teams.list({ total: true });
}
async function fetchOrganizationById(orgId) {
	if (!orgId) throw new Error("Organization ID is required");
	if (isBillingEnabled()) return (await sdk.forConsole.organizations.list({ queries: [Query.equal("$id", orgId)] })).teams?.[0] || null;
	return await sdk.forConsole.teams.get({ teamId: orgId });
}
async function fetchOrganizationPlan(orgId) {
	if (!orgId) throw new Error("Organization ID is required");
	if (!isBillingEnabled()) return createSelfHostedOrganizationPlan();
	try {
		return await sdk.forConsole.organizations.getPlan(orgId);
	} catch {
		return createSelfHostedOrganizationPlan();
	}
}
async function fetchOrganizationScopes(organizationId, projectId) {
	if (!organizationId) return {
		roles: [...DEFAULT_ROLES],
		scopes: [...DEFAULT_SCOPES]
	};
	try {
		const orgService = sdk.forConsole.organizations;
		if (typeof orgService.getScopes !== "function") return {
			roles: [...DEFAULT_ROLES],
			scopes: [...DEFAULT_SCOPES]
		};
		const response = await orgService.getScopes({
			organizationId,
			...projectId ? { projectId } : {}
		});
		return {
			roles: response.roles ?? [...DEFAULT_ROLES],
			scopes: response.scopes ?? [...DEFAULT_SCOPES]
		};
	} catch {
		return {
			roles: [...DEFAULT_ROLES],
			scopes: [...DEFAULT_SCOPES]
		};
	}
}
async function fetchOrganizationInvoices(organizationId, page = 0, limit = 10, queries) {
	if (!organizationId) return {
		invoices: [],
		total: 0
	};
	const defaultQueries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const finalQueries = queries ? [...defaultQueries, ...queries] : defaultQueries;
	const response = await sdk.forConsole.organizations.listInvoices({
		organizationId,
		queries: finalQueries
	});
	return {
		invoices: response.invoices || [],
		total: response.total || 0
	};
}
async function fetchOrganizationHasFailedInvoice(organizationId) {
	if (!organizationId) return { hasFailedInvoice: false };
	try {
		const response = await sdk.forConsole.organizations.listInvoices({
			organizationId,
			queries: [
				Query.equal("status", "failed"),
				Query.equal("type", "subscription"),
				Query.orderDesc("$createdAt"),
				Query.limit(1),
				Query.offset(0)
			]
		});
		const total = response.total ?? 0;
		const count = response.invoices?.length ?? 0;
		return { hasFailedInvoice: total > 0 || count > 0 };
	} catch {
		return { hasFailedInvoice: false };
	}
}
function organizationFailedInvoicePresenceQueryOptions(organizationId) {
	return queryOptions({
		queryKey: [
			"invoices",
			"organization",
			organizationId,
			"presence",
			"failed",
			"subscription"
		],
		queryFn: () => fetchOrganizationHasFailedInvoice(organizationId),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function useOrganizationFailedInvoicePresence(organizationId) {
	const { access } = useOrganizationScopes(organizationId, void 0, { projectId: null });
	const canFetchInvoices = canSeeOrganizationBilling(access);
	return useQuery({
		...organizationFailedInvoicePresenceQueryOptions(organizationId),
		enabled: !!organizationId && canFetchInvoices
	});
}
async function fetchOrganizationBillingAggregation(organizationId, aggregationId, limit = 10, offset = 0) {
	if (!organizationId || !aggregationId) return null;
	try {
		return await sdk.forConsole.organizations.getAggregation({
			organizationId,
			aggregationId,
			limit,
			offset
		});
	} catch (error) {
		if (error?.code === 404 || error?.response?.code === 404) return null;
		throw error;
	}
}
async function fetchOrganizationCredits(organizationId, page = 0, limit = 5) {
	if (!organizationId) return {
		credits: [],
		total: 0
	};
	const queries = [
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const response = await sdk.forConsole.organizations.listCredits({
		organizationId,
		queries
	});
	return {
		credits: response.credits || [],
		total: response.total || 0
	};
}
async function addOrganizationCredit(params) {
	return await sdk.forConsole.organizations.addCredit({
		organizationId: params.organizationId,
		couponId: params.couponId
	});
}
async function fetchPaymentMethods() {
	const response = await sdk.forConsole.account.listPaymentMethods();
	return {
		paymentMethods: response.paymentMethods || [],
		total: response.total || 0
	};
}
async function fetchPaymentMethod(paymentMethodId) {
	if (!paymentMethodId) return null;
	return await sdk.forConsole.account.getPaymentMethod({ paymentMethodId });
}
async function fetchOrganizationPaymentMethod(organizationId, paymentMethodId) {
	if (!organizationId || !paymentMethodId) return null;
	return await sdk.forConsole.organizations.getPaymentMethod({
		organizationId,
		paymentMethodId
	});
}
async function fetchBillingAddresses() {
	const response = await sdk.forConsole.account.listBillingAddresses();
	return {
		addresses: response.billingAddresses || [],
		total: response.total || 0
	};
}
async function fetchBillingAddress(billingAddressId) {
	if (!billingAddressId) return null;
	return await sdk.forConsole.account.getBillingAddress({ billingAddressId });
}
async function fetchBillingPlans() {
	try {
		const response = await sdk.forConsole.console.getPlans();
		const plansObject = {};
		if (response.plans && Array.isArray(response.plans)) response.plans.forEach((plan) => {
			const p = plan;
			if (p.$id) plansObject[p.$id] = p;
		});
		return {
			plans: plansObject,
			total: response.total || 0
		};
	} catch {
		return {
			plans: {},
			total: 0
		};
	}
}
async function fetchCouponAccount(couponCode) {
	const trimmed = couponCode?.trim();
	if (!trimmed) return null;
	return await sdk.forConsole.account.getCoupon({ couponId: trimmed });
}
async function fetchOrganizationUsage(organizationId, startDate, endDate) {
	if (!organizationId) return null;
	try {
		return await sdk.forConsole.organizations.getUsage({
			organizationId,
			...startDate ? { startDate } : {},
			...endDate ? { endDate } : {}
		});
	} catch {
		return null;
	}
}
async function fetchOrganizationProjects(organizationId, page = 0, limit = 1e3) {
	if (!organizationId) return { projects: [] };
	try {
		const response = await listConsoleProjects({ queries: [
			Query.equal("teamId", organizationId),
			Query.limit(limit),
			Query.offset(page * limit)
		] });
		return {
			projects: response.projects || [],
			total: response.total || 0
		};
	} catch {
		return {
			projects: [],
			total: 0
		};
	}
}
async function fetchEstimationCreateOrganization(billingPlan, couponId, collaborators, paymentMethodId) {
	const couponParam = typeof couponId === "string" && couponId.trim().length > 0 ? couponId.trim() : void 0;
	return await sdk.forConsole.organizations.estimationCreateOrganization({
		billingPlan,
		paymentMethodId,
		invites: collaborators,
		couponId: couponParam
	});
}
async function fetchEstimationUpdatePlan(organizationId, billingPlan, couponId, collaborators) {
	if (!organizationId) return null;
	const couponParam = typeof couponId === "string" && couponId.trim().length > 0 ? couponId.trim() : void 0;
	return await sdk.forConsole.organizations.estimationUpdatePlan({
		organizationId,
		billingPlan,
		invites: collaborators,
		couponId: couponParam
	});
}
async function createOrganization(orgData) {
	if (!isMultiTenancyEnabled()) {
		const existing = await fetchOrganizations();
		if ((existing.total ?? existing.teams?.length ?? 0) > 0) throw new Error("This console profile supports only one organization");
	}
	if (!orgData.name.trim()) throw new Error("Organization name is required");
	const organizationId = orgData.organizationId || ID.unique();
	if (isBillingEnabled()) return await sdk.forConsole.organizations.create({
		organizationId,
		name: orgData.name.trim(),
		billingPlan: orgData.billingPlan ?? BillingPlanTier.Tier0,
		paymentMethodId: orgData.paymentMethodId,
		billingAddressId: orgData.billingAddressId,
		couponId: orgData.couponId,
		invites: orgData.invites,
		budget: orgData.budget,
		taxId: orgData.taxId || void 0
	});
	return await sdk.forConsole.teams.create({
		teamId: organizationId,
		name: orgData.name.trim()
	});
}
async function deleteOrganization(organizationId) {
	if (!isMultiTenancyEnabled()) throw new Error("This console profile requires one organization");
	if (!organizationId) throw new Error("Organization ID is required");
	if (isBillingEnabled()) return await sdk.forConsole.organizations.delete({ organizationId });
	return await sdk.forConsole.teams.delete({ teamId: organizationId });
}
async function updateOrganizationBudget(params) {
	return await sdk.forConsole.organizations.updateBudget(params);
}
async function updateOrganizationTaxId(params) {
	const taxId = params.billingTaxId || "";
	return await sdk.forConsole.organizations.setBillingTaxId({
		organizationId: params.organizationId,
		taxId
	});
}
async function updateOrganizationPaymentMethod(params) {
	const updatePrimary = params.paymentMethodId !== void 0;
	const updateBackup = params.backupPaymentMethodId !== void 0;
	if (!updatePrimary && !updateBackup) throw new Error("Either paymentMethodId or backupPaymentMethodId must be provided");
	let result;
	if (updatePrimary) if (params.paymentMethodId) result = await sdk.forConsole.organizations.setDefaultPaymentMethod({
		organizationId: params.organizationId,
		paymentMethodId: params.paymentMethodId
	});
	else result = await sdk.forConsole.organizations.deleteDefaultPaymentMethod({ organizationId: params.organizationId });
	if (updateBackup) if (params.backupPaymentMethodId) result = await sdk.forConsole.organizations.setBackupPaymentMethod({
		organizationId: params.organizationId,
		paymentMethodId: params.backupPaymentMethodId
	});
	else result = await sdk.forConsole.organizations.deleteBackupPaymentMethod({ organizationId: params.organizationId });
	return result;
}
async function setOrganizationBillingAddress(params) {
	return await sdk.forConsole.organizations.setBillingAddress({
		organizationId: params.organizationId,
		billingAddressId: params.billingAddressId
	});
}
async function deleteOrganizationBillingAddress(params) {
	return await sdk.forConsole.organizations.deleteBillingAddress({ organizationId: params.organizationId });
}
async function updateOrganizationPlan(params) {
	try {
		if (sdk.forConsole.billing?.updatePlan) return await sdk.forConsole.billing.updatePlan(params.organizationId, params.billingPlan, params.paymentMethodId, params.billingAddressId, params.couponId, params.invites, params.budget, params.taxId);
		return await sdk.forConsole.organizations.updatePlan({
			organizationId: params.organizationId,
			billingPlan: params.billingPlan,
			paymentMethodId: params.paymentMethodId,
			billingAddressId: params.billingAddressId,
			couponId: params.couponId,
			invites: params.invites,
			budget: params.budget,
			taxId: params.taxId || void 0
		});
	} catch (error) {
		throw error;
	}
}
async function validateOrganization(organizationId, invites) {
	if (!organizationId) throw new Error("Organization ID is required");
	return sdk.forConsole.organizations.validatePayment(organizationId, invites);
}
async function createDowngradeFeedback(params) {
	if (!params.organizationId) throw new Error("Organization ID is required");
	try {
		return await sdk.forConsole.organizations.createDowngradeFeedback({
			organizationId: params.organizationId,
			reason: params.reason,
			message: params.message,
			fromPlanId: params.fromPlanId,
			toPlanId: params.toPlanId
		});
	} catch {}
}
async function retryInvoicePayment(params) {
	return await sdk.forConsole.organizations.createInvoicePayment({
		organizationId: params.organizationId,
		invoiceId: params.invoiceId,
		paymentMethodId: params.paymentMethodId
	});
}
async function resolvePaymentMethodIdForInvoiceRetry(params) {
	let paymentMethodId = params.organization.paymentMethodId;
	if (!paymentMethodId || params.primaryPaymentMethodFailed) paymentMethodId = params.organization.backupPaymentMethodId;
	if (!paymentMethodId) {
		const paymentMethods = await sdk.forConsole.account.listPaymentMethods();
		if (paymentMethods.paymentMethods && paymentMethods.paymentMethods.length > 0) paymentMethodId = paymentMethods.paymentMethods[0].$id;
	}
	return paymentMethodId ?? null;
}
async function createPaymentMethod() {
	return await sdk.forConsole.account.createPaymentMethod();
}
async function setPaymentMethodProvider(params) {
	return await sdk.forConsole.account.updatePaymentMethodProvider({
		paymentMethodId: params.paymentMethodId,
		providerMethodId: params.providerMethodId,
		name: params.name,
		state: params.state
	});
}
async function setOrganizationDefaultPaymentMethod(params) {
	return await sdk.forConsole.organizations.setDefaultPaymentMethod({
		organizationId: params.organizationId,
		paymentMethodId: params.paymentMethodId
	});
}
async function setOrganizationBackupPaymentMethod(params) {
	return await sdk.forConsole.organizations.setBackupPaymentMethod({
		organizationId: params.organizationId,
		paymentMethodId: params.paymentMethodId
	});
}
async function updatePaymentMethod(params) {
	return await sdk.forConsole.account.updatePaymentMethod({
		paymentMethodId: params.paymentMethodId,
		expiryMonth: params.expiryMonth,
		expiryYear: params.expiryYear,
		state: params.state
	});
}
async function deletePaymentMethod(params) {
	return await sdk.forConsole.account.deletePaymentMethod({ paymentMethodId: params.paymentMethodId });
}
async function createBillingAddress(params) {
	return await sdk.forConsole.account.createBillingAddress({
		country: params.country,
		streetAddress: params.streetAddress,
		city: params.city,
		state: params.state,
		postalCode: params.postalCode,
		addressLine2: params.addressLine2
	});
}
async function updateBillingAddress(params) {
	return await sdk.forConsole.account.updateBillingAddress({
		billingAddressId: params.billingAddressId,
		country: params.country,
		streetAddress: params.streetAddress,
		city: params.city,
		state: params.state,
		postalCode: params.postalCode,
		addressLine2: params.addressLine2
	});
}
async function deleteBillingAddress(params) {
	return await sdk.forConsole.account.deleteBillingAddress({ billingAddressId: params.billingAddressId });
}
function organizationsQueryOptions() {
	return queryOptions({
		queryKey: ["organizations", "console"],
		queryFn: fetchOrganizations,
		staleTime: LONG_STALE_TIME,
		gcTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
async function fetchOrganizationsWithBillingFields() {
	return (await sdk.forConsole.organizations.list({ queries: [Query.equal("platform", "appwrite")] })).teams || [];
}
function organizationsFullQueryOptions() {
	return queryOptions({
		queryKey: [
			"organizations",
			"console",
			"full"
		],
		queryFn: fetchOrganizationsWithBillingFields,
		staleTime: 30 * 1e3,
		gcTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function organizationQueryOptions(orgId) {
	return queryOptions({
		queryKey: ["organization", orgId],
		queryFn: () => fetchOrganizationById(orgId),
		enabled: !!orgId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: !!orgId ? 300 * 1e3 : 0
	});
}
function organizationPlanQueryOptions(orgId) {
	return queryOptions({
		queryKey: [
			"organization",
			"plan",
			orgId
		],
		queryFn: () => fetchOrganizationPlan(orgId),
		enabled: !!orgId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: !!orgId ? 300 * 1e3 : 0
	});
}
function organizationScopesQueryOptions(organizationId, projectId) {
	const features = getActiveProfileFeatures();
	const enabled = !!organizationId && !!features.orgRoles;
	return queryOptions({
		queryKey: [
			"organization",
			"scopes",
			organizationId,
			projectId ?? null
		],
		queryFn: () => fetchOrganizationScopes(organizationId, projectId),
		enabled,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
async function fetchOrganizationProjectScope(organizationId) {
	if (!organizationId || !getActiveProfileFeatures().orgRoles) return null;
	try {
		const account = await fetchConsoleAccount();
		if (!account?.$id) return null;
		const mine = ((await sdk.forConsole.teams.listMemberships({
			teamId: organizationId,
			queries: [Query.equal("userId", account.$id)]
		}))?.memberships ?? []).find((m) => m.userId === account.$id);
		if (!mine) return null;
		const roles = mine.roles ?? [];
		if (!hasProjectSpecificRoles(roles)) return null;
		return projectIdsFromRoles(roles);
	} catch {
		return null;
	}
}
function organizationProjectScopeQueryOptions(organizationId) {
	const features = getActiveProfileFeatures();
	const enabled = !!organizationId && !!features.orgRoles;
	return queryOptions({
		queryKey: [
			"organization",
			"project-scope",
			organizationId
		],
		queryFn: () => fetchOrganizationProjectScope(organizationId),
		enabled,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function canSeeOrganizationBilling(access) {
	const features = getActiveProfileFeatures();
	return !!(features.billing && (!features.orgRoles || access.canSeeBilling));
}
async function resolveOrganizationAccess(queryClient, organizationId) {
	if (!getActiveProfileFeatures().orgRoles) return FULL_ACCESS;
	const data = await queryClient.ensureQueryData(organizationScopesQueryOptions(organizationId));
	return deriveAccessFromRolesScopes(data.roles, data.scopes);
}
async function prefetchOrganizationInvoiceDataIfAllowed(queryClient, organizationId) {
	if (!getActiveProfileFeatures().billing) return;
	if (!canSeeOrganizationBilling(await resolveOrganizationAccess(queryClient, organizationId))) return;
	await queryClient.ensureQueryData(organizationFailedInvoicePresenceQueryOptions(organizationId)).catch(() => {});
}
function billingPlansQueryOptions() {
	return queryOptions({
		queryKey: ["billing-plans"],
		queryFn: fetchBillingPlans,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: Infinity
	});
}
function organizationUsageQueryOptions(organizationId, startDate, endDate) {
	return queryOptions({
		queryKey: [
			"organization-usage",
			organizationId,
			startDate ?? null,
			endDate ?? null
		],
		queryFn: () => fetchOrganizationUsage(organizationId, startDate, endDate),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function organizationProjectsQueryOptions(organizationId) {
	return queryOptions({
		queryKey: ["organization-projects", organizationId],
		queryFn: () => fetchOrganizationProjects(organizationId),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function useOrganizations() {
	const { data: organizationsData, isLoading, error, refetch } = useQuery(organizationsQueryOptions());
	const [screenshotModeEpoch, setScreenshotModeEpoch] = useState(0);
	useEffect(() => {
		return subscribeScreenshotMode(() => {
			setScreenshotModeEpoch((epoch) => epoch + 1);
		});
	}, []);
	return {
		organizations: useMemo(() => {
			if (!organizationsData?.teams) return [];
			return organizationsData.teams.map((org) => {
				const o = org;
				const mocked = applyScreenshotModeOrganizationName(o);
				const plan = getPlanNameFromTier(o.billingPlan);
				return {
					$id: o.$id,
					name: mocked.name,
					slug: mocked.name.toLowerCase().replace(/\s+/g, "-"),
					avatar: void 0,
					plan,
					members: o.total || 0,
					status: o.status,
					billingPlanDowngrade: o.billingPlanDowngrade
				};
			});
		}, [organizationsData, screenshotModeEpoch]),
		isLoading,
		error,
		refetch
	};
}
function useCreateOrganization() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createOrganization,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
		}
	});
}
function useOrganizationById(orgId) {
	const { data: orgData, isLoading, error, refetch } = useQuery(organizationQueryOptions(orgId));
	const [screenshotModeEpoch, setScreenshotModeEpoch] = useState(0);
	useEffect(() => {
		return subscribeScreenshotMode(() => {
			setScreenshotModeEpoch((epoch) => epoch + 1);
		});
	}, []);
	return {
		organization: useMemo(() => {
			if (!orgData) return null;
			const planName = getPlanNameFromTier(orgData.billingPlan);
			const plan = planName;
			return {
				...applyScreenshotModeOrganizationName(orgData),
				plan,
				planName,
				billingPlan: orgData.billingPlan
			};
		}, [orgData, screenshotModeEpoch]),
		isLoading,
		error,
		refetch
	};
}
function useOrganizationPlan(orgId, initialData) {
	const { data: planData, isLoading, isFetched, error, refetch } = useQuery({
		...organizationPlanQueryOptions(orgId),
		initialData,
		initialDataUpdatedAt: initialData ? 1 : 0
	});
	return {
		plan: planData,
		isLoading,
		isFetched,
		error,
		refetch
	};
}
function useOrganizationScopes(organizationId, initialData, options) {
	const features = getActiveProfileFeatures();
	const shouldFetch = !!organizationId && features.orgRoles;
	const routeParams = useParams({ strict: false });
	const { data, isLoading, error, refetch } = useQuery({
		...organizationScopesQueryOptions(organizationId, options && "projectId" in options ? options.projectId : routeParams?.projectId ?? null),
		enabled: shouldFetch,
		initialData,
		initialDataUpdatedAt: initialData ? 1 : 0
	});
	return {
		roles: data?.roles ?? [...DEFAULT_ROLES],
		scopes: data?.scopes ?? [...DEFAULT_SCOPES],
		access: useMemo(() => shouldFetch && data ? deriveAccessFromRolesScopes(data.roles, data.scopes) : FULL_ACCESS, [shouldFetch, data]),
		isLoading: shouldFetch ? isLoading : false,
		error,
		refetch
	};
}
function organizationInvoicesQueryOptions(organizationId, page = 0, limit = 10, queries) {
	return queryOptions({
		queryKey: [
			"invoices",
			"organization",
			organizationId,
			page,
			limit,
			queries ?? null
		],
		queryFn: () => fetchOrganizationInvoices(organizationId, page, limit, queries),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function organizationBillingAggregationQueryOptions(organizationId, aggregationId, limit = 10, offset = 0) {
	return queryOptions({
		queryKey: [
			"billing-aggregation",
			"organization",
			organizationId,
			aggregationId ?? null,
			limit,
			offset
		],
		queryFn: () => fetchOrganizationBillingAggregation(organizationId, aggregationId, limit, offset),
		enabled: !!organizationId && !!aggregationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId && aggregationId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function organizationCreditsQueryOptions(organizationId, page = 0, limit = 5) {
	return queryOptions({
		queryKey: [
			"credits",
			"organization",
			organizationId,
			page,
			limit
		],
		queryFn: () => fetchOrganizationCredits(organizationId, page, limit),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function paymentMethodsQueryOptions() {
	return queryOptions({
		queryKey: ["payment-methods", "account"],
		queryFn: fetchPaymentMethods,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function billingAddressesQueryOptions() {
	return queryOptions({
		queryKey: ["billing-addresses", "account"],
		queryFn: fetchBillingAddresses,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function organizationPaymentMethodQueryOptions(organizationId, paymentMethodId) {
	return queryOptions({
		queryKey: [
			"payment-method",
			"organization",
			organizationId,
			paymentMethodId
		],
		queryFn: () => fetchOrganizationPaymentMethod(organizationId, paymentMethodId),
		enabled: !!organizationId && !!paymentMethodId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId && paymentMethodId ? 300 * 1e3 : 0
	});
}
function seedOrganizationPaymentMethodFromAccountCache(queryClient, organizationId, paymentMethodId) {
	if (!paymentMethodId) return;
	const method = queryClient.getQueryData(paymentMethodsQueryOptions().queryKey)?.paymentMethods?.find((pm) => pm.$id === paymentMethodId);
	if (!method) return;
	queryClient.setQueryData(organizationPaymentMethodQueryOptions(organizationId, paymentMethodId).queryKey, method);
}
function billingAddressQueryOptions(billingAddressId) {
	return queryOptions({
		queryKey: ["billing-address", billingAddressId],
		queryFn: () => fetchBillingAddress(billingAddressId),
		enabled: !!billingAddressId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: billingAddressId ? 300 * 1e3 : 0
	});
}
function useOrganizationInvoices(organizationId, page = 0, limit = 10, queries) {
	const { access } = useOrganizationScopes(organizationId, void 0, { projectId: null });
	const canFetchInvoices = canSeeOrganizationBilling(access);
	const { data, isLoading, isFetching, isPending, error, refetch } = useQuery({
		...organizationInvoicesQueryOptions(organizationId, page, limit, queries),
		enabled: !!organizationId && canFetchInvoices
	});
	return {
		invoices: data?.invoices || [],
		total: data?.total || 0,
		data,
		isLoading,
		isFetching,
		isPending,
		error,
		refetch
	};
}
function useOrganizationCredits(organizationId, page = 0, limit = 5) {
	const { data, isLoading, error, refetch } = useQuery(organizationCreditsQueryOptions(organizationId, page, limit));
	return {
		credits: data?.credits || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function usePaymentMethods(options) {
	const enabled = options?.enabled ?? true;
	const { data, isLoading, error, refetch } = useQuery({
		...paymentMethodsQueryOptions(),
		enabled
	});
	return {
		paymentMethods: useMemo(() => data?.paymentMethods ?? [], [data?.paymentMethods]),
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useOrganizationPaymentMethod(organizationId, paymentMethodId) {
	const { data, isLoading, error, refetch } = useQuery(organizationPaymentMethodQueryOptions(organizationId, paymentMethodId));
	return {
		paymentMethod: data,
		isLoading,
		error,
		refetch
	};
}
function useBillingAddresses() {
	const { data, isLoading, error, refetch } = useQuery(billingAddressesQueryOptions());
	return {
		addresses: data?.addresses || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useBillingAddress(billingAddressId) {
	const { data, isLoading, error, refetch } = useQuery(billingAddressQueryOptions(billingAddressId));
	return {
		address: data,
		isLoading,
		error,
		refetch
	};
}
function useUpdateOrganizationBudget() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateOrganizationBudget,
		onSuccess: async (_, variables) => {
			await queryClient.refetchQueries({ queryKey: ["organization", variables.organizationId] });
			await queryClient.refetchQueries({ queryKey: [
				"billing-aggregation",
				"organization",
				variables.organizationId
			] });
			await queryClient.refetchQueries({ queryKey: ["project"] });
		}
	});
}
function useUpdateOrganizationTaxId() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateOrganizationTaxId,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
		}
	});
}
function useUpdateOrganizationPaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateOrganizationPaymentMethod,
		onMutate: async (variables) => {
			const { organizationId } = variables;
			await queryClient.cancelQueries({ queryKey: ["organization", organizationId] });
			const previousOrg = queryClient.getQueryData(["organization", organizationId]);
			if (previousOrg) {
				const nextOrg = { ...previousOrg };
				if (variables.paymentMethodId !== void 0) {
					nextOrg.paymentMethodId = variables.paymentMethodId ?? void 0;
					seedOrganizationPaymentMethodFromAccountCache(queryClient, organizationId, variables.paymentMethodId);
				}
				if (variables.backupPaymentMethodId !== void 0) {
					nextOrg.backupPaymentMethodId = variables.backupPaymentMethodId ?? void 0;
					seedOrganizationPaymentMethodFromAccountCache(queryClient, organizationId, variables.backupPaymentMethodId);
				}
				queryClient.setQueryData(["organization", organizationId], nextOrg);
			}
			return { previousOrg };
		},
		onError: (_error, variables, context) => {
			if (context?.previousOrg) queryClient.setQueryData(["organization", variables.organizationId], context.previousOrg);
		},
		onSuccess: (data, variables) => {
			const { organizationId } = variables;
			if (data && typeof data === "object" && "$id" in data) queryClient.setQueryData(["organization", organizationId], data);
			if (variables.paymentMethodId) seedOrganizationPaymentMethodFromAccountCache(queryClient, organizationId, variables.paymentMethodId);
			if (variables.backupPaymentMethodId) seedOrganizationPaymentMethodFromAccountCache(queryClient, organizationId, variables.backupPaymentMethodId);
		}
	});
}
function useSetOrganizationBillingAddress() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: setOrganizationBillingAddress,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: ["billing-addresses", "account"] });
		}
	});
}
function useDeleteOrganizationBillingAddress() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteOrganizationBillingAddress,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: ["billing-addresses", "account"] });
		}
	});
}
function useRetryInvoicePayment() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: retryInvoicePayment,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: [
				"invoices",
				"organization",
				variables.organizationId
			] });
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
		}
	});
}
function useAddOrganizationCredit() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addOrganizationCredit,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: [
				"credits",
				"organization",
				variables.organizationId
			] });
		}
	});
}
function useCreatePaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createPaymentMethod,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
		}
	});
}
function useSetPaymentMethodProvider() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: setPaymentMethodProvider,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
			queryClient.invalidateQueries({ queryKey: ["payment-method"] });
		}
	});
}
function useSetOrganizationDefaultPaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: setOrganizationDefaultPaymentMethod,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
			queryClient.invalidateQueries({ queryKey: [
				"payment-method",
				"organization",
				variables.organizationId
			] });
		}
	});
}
function useSetOrganizationBackupPaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: setOrganizationBackupPaymentMethod,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
			queryClient.invalidateQueries({ queryKey: [
				"payment-method",
				"organization",
				variables.organizationId
			] });
		}
	});
}
function useUpdatePaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updatePaymentMethod,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
			queryClient.invalidateQueries({ queryKey: ["payment-method", variables.paymentMethodId] });
		}
	});
}
function useDeletePaymentMethod() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deletePaymentMethod,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["payment-methods", "account"] });
			queryClient.invalidateQueries({ queryKey: ["payment-method"] });
		}
	});
}
function useCreateBillingAddress() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createBillingAddress,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["billing-addresses", "account"] });
		}
	});
}
function useUpdateBillingAddress() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateBillingAddress,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["billing-addresses", "account"] });
			queryClient.invalidateQueries({ queryKey: ["billing-address", variables.billingAddressId] });
		}
	});
}
function useDeleteBillingAddress() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteBillingAddress,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["billing-addresses", "account"] });
			queryClient.invalidateQueries({ queryKey: ["billing-address"] });
		}
	});
}
function useBillingPlans() {
	const { data, isLoading, error, refetch } = useQuery(billingPlansQueryOptions());
	return {
		plans: data?.plans || {},
		isLoading,
		error,
		refetch
	};
}
function useCouponAccount(couponCode) {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["coupon-account", couponCode],
		queryFn: () => fetchCouponAccount(couponCode),
		enabled: !!couponCode,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: couponCode ? 300 * 1e3 : 0
	});
	return {
		coupon: data,
		isLoading,
		error,
		refetch
	};
}
function useOrganizationProjects(organizationId) {
	const { data, isLoading, error, refetch } = useQuery(organizationProjectsQueryOptions(organizationId));
	return {
		projects: data?.projects || [],
		total: data?.total || 0,
		isLoading,
		error,
		refetch
	};
}
function useEstimationCreateOrganization(billingPlan, couponId, collaborators = EMPTY_ESTIMATION_INVITES, paymentMethodId) {
	const collaboratorsKey = useMemo(() => {
		if (collaborators.length === 0) return "";
		return JSON.stringify([...collaborators].sort());
	}, [collaborators]);
	const { data, isLoading, isFetching, error, refetch } = useQuery({
		queryKey: [
			"estimation-create-org",
			billingPlan,
			couponId ?? null,
			collaboratorsKey,
			paymentMethodId ?? null
		],
		queryFn: () => fetchEstimationCreateOrganization(billingPlan, couponId ?? null, collaborators, paymentMethodId ?? void 0),
		enabled: !!billingPlan && !!paymentMethodId,
		staleTime: ESTIMATION_STALE_TIME,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: ESTIMATION_STALE_TIME
	});
	return {
		estimation: data,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useEstimationUpdatePlan(organizationId, billingPlan, couponId, collaborators = EMPTY_ESTIMATION_INVITES) {
	const collaboratorsKey = useMemo(() => {
		if (collaborators.length === 0) return "";
		return JSON.stringify([...collaborators].sort());
	}, [collaborators]);
	const { data, isLoading, isFetching, error, refetch } = useQuery({
		queryKey: [
			"estimation-update-plan",
			organizationId,
			billingPlan,
			couponId ?? null,
			collaboratorsKey
		],
		queryFn: () => fetchEstimationUpdatePlan(organizationId, billingPlan, couponId ?? void 0, collaborators),
		enabled: !!organizationId && !!billingPlan,
		staleTime: ESTIMATION_STALE_TIME,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		retry: false,
		gcTime: ESTIMATION_STALE_TIME
	});
	return {
		estimation: data,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useUpdateOrganizationPlan() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateOrganizationPlan,
		onSuccess: (data, variables) => {
			if (!data || typeof data !== "object" || typeof data.$id !== "string") return;
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: [
				"organization",
				"plan",
				variables.organizationId
			] });
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
		}
	});
}
function useValidateOrganization() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ organizationId, invites }) => validateOrganization(organizationId, invites),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["organization", variables.organizationId] });
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
		}
	});
}
function useCreateDowngradeFeedback() {
	return useMutation({ mutationFn: createDowngradeFeedback });
}
export { resolvePaymentMethodIdForInvoiceRetry as $, applyScreenshotModeAccount as $t, fetchOrganizationUsage as A, useOrganizationInvoices as At, organizationInvoicesQueryOptions as B, useSetOrganizationDefaultPaymentMethod as Bt, fetchOrganizationHasFailedInvoice as C, useDeleteOrganizationBillingAddress as Ct, fetchOrganizationProjectScope as D, useOrganizationById as Dt, fetchOrganizationPlan as E, useEstimationUpdatePlan as Et, isBudgetLimitReached as F, useOrganizations as Ft, organizationQueryOptions as G, useUpdateOrganizationPlan as Gt, organizationPlanQueryOptions as H, useUpdateBillingAddress as Ht, isOrganizationBillingReadonlyStatus as I, usePaymentMethods as It, organizationsFullQueryOptions as J, useValidateOrganization as Jt, organizationScopesQueryOptions as K, useUpdateOrganizationTaxId as Kt, organizationBillingAggregationQueryOptions as L, useRetryInvoicePayment as Lt, fetchOrganizationsWithBillingFields as M, useOrganizationPlan as Mt, fetchPaymentMethod as N, useOrganizationProjects as Nt, fetchOrganizationProjects as O, useOrganizationCredits as Ot, fetchPaymentMethods as P, useOrganizationScopes as Pt, resolveOrganizationAccess as Q, SCREENSHOT_MODE_TOGGLE_SEQUENCE as Qt, organizationCreditsQueryOptions as R, useSetOrganizationBackupPaymentMethod as Rt, fetchOrganizationCredits as S, useDeleteBillingAddress as St, fetchOrganizationPaymentMethod as T, useEstimationCreateOrganization as Tt, organizationProjectScopeQueryOptions as U, useUpdateOrganizationBudget as Ut, organizationPaymentMethodQueryOptions as V, useSetPaymentMethodProvider as Vt, organizationProjectsQueryOptions as W, useUpdateOrganizationPaymentMethod as Wt, paymentMethodsQueryOptions as X, getSingleRecognizedPlanUsageLimitLabel as Xt, organizationsQueryOptions as Y, validateOrganization as Yt, prefetchOrganizationInvoiceDataIfAllowed as Z, isPlanUsageLimitReached as Zt, fetchCouponAccount as _, hasProjectSpecificRoles as _n, useCouponAccount as _t, canSeeOrganizationBilling as a, compareBillingPlanRefs as an, setOrganizationDefaultPaymentMethod as at, fetchOrganizationBillingAggregation as b, BillingPlanTier as bn, useCreateOrganization as bt, createOrganization as c, getPlanCanonicalFromRecord as cn, updateOrganizationBudget as ct, deleteOrganization as d, resolveBillingPlanRecord as dn, updateOrganizationTaxId as dt, applyScreenshotModeOrganizationName as en, resolveProjectTeamIdFromConsole as et, deleteOrganizationBillingAddress as f, resolveOrganizationPlanDisplayLabel as fn, updatePaymentMethod as ft, fetchBillingPlans as g, buildProjectRole as gn, useBillingPlans as gt, fetchBillingAddresses as h, PROJECT_ROLE_VALUES as hn, useBillingAddresses as ht, billingPlansQueryOptions as i, writeScreenshotModeOpen as in, setOrganizationBillingAddress as it, fetchOrganizations as j, useOrganizationPaymentMethod as jt, fetchOrganizationScopes as k, useOrganizationFailedInvoicePresence as kt, createPaymentMethod as l, getPlanNameFromTier as ln, updateOrganizationPaymentMethod as lt, fetchBillingAddress as m, deriveAccessFromRolesScopes as mn, useBillingAddress as mt, billingAddressQueryOptions as n, readScreenshotModeOpen as nn, seedOrganizationPaymentMethodFromAccountCache as nt, createBillingAddress as o, getBillingPlanDisplayLabel as on, setPaymentMethodProvider as ot, deletePaymentMethod as p, FULL_ACCESS as pn, useAddOrganizationCredit as pt, organizationUsageQueryOptions as q, useUpdatePaymentMethod as qt, billingAddressesQueryOptions as r, subscribeScreenshotMode as rn, setOrganizationBackupPaymentMethod as rt, createDowngradeFeedback as s, getCanonicalPlanDisplayLabel as sn, updateBillingAddress as st, addOrganizationCredit as t, isScreenshotModeActive as tn, retryInvoicePayment as tt, deleteBillingAddress as u, isFreePlanRef as un, updateOrganizationPlan as ut, fetchEstimationCreateOrganization as v, parseProjectAccess as vn, useCreateBillingAddress as vt, fetchOrganizationInvoices as w, useDeletePaymentMethod as wt, fetchOrganizationById as x, useCreatePaymentMethod as xt, fetchEstimationUpdatePlan as y, projectIdsFromRoles as yn, useCreateDowngradeFeedback as yt, organizationFailedInvoicePresenceQueryOptions as z, useSetOrganizationBillingAddress as zt };
