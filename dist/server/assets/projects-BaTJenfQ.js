import { a as truncateMiddle } from "./utils-DoqqkI3X.js";
import { d as sdk, f as setProjectRegion, l as getProjectRegion, m as generateFingerprintToken, o as getApiEndpoint, p as ensureFingerprintServerTimeSynced } from "./sdk-DjIJ_hjn.js";
import { t as translate } from "./translate-DZcqveGn.js";
import { n as listConsoleProjects, t as createConsoleProject } from "./console-projects-C0b0tMaH.js";
import { d as LONG_STALE_TIME, o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME } from "./constants-BDeF927R.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { useMemo } from "react";
import { ID, ProjectAuthMethodId, ProjectPolicyId, ProjectProtocolId, Query, Status } from "@appwrite.io/console";
import { keepPreviousData, queryOptions, useInfiniteQuery, useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 256;
const DEFAULT_PASSWORD_STRENGTH_POLICY = {
	min: 8,
	uppercase: false,
	lowercase: false,
	number: false,
	symbols: false
};
function validatePasswordAgainstPolicy(password, policy) {
	const failures = [];
	if (password.length < policy.min) failures.push(`Password must be at least ${policy.min} characters (current: ${password.length})`);
	if (policy.uppercase && !/[A-Z]/.test(password)) failures.push("Password must include at least one uppercase letter (A-Z)");
	if (policy.lowercase && !/[a-z]/.test(password)) failures.push("Password must include at least one lowercase letter (a-z)");
	if (policy.number && !/[0-9]/.test(password)) failures.push("Password must include at least one number (0-9)");
	if (policy.symbols && !/[^A-Za-z0-9]/.test(password)) failures.push("Password must include at least one symbol (non-alphanumeric character)");
	return {
		valid: failures.length === 0,
		failures
	};
}
function countCharacterClasses(policy) {
	return [
		policy.uppercase,
		policy.lowercase,
		policy.number,
		policy.symbols
	].filter(Boolean).length;
}
function checkStandardCompliance(policy, standard) {
	const reasons = [];
	const req = standard.requirements;
	if (policy.min < req.min) reasons.push(`Minimum length is ${req.min} characters; your policy sets ${policy.min}`);
	if (req.uppercase && !policy.uppercase) reasons.push("Standard requires uppercase letters");
	if (req.lowercase && !policy.lowercase) reasons.push("Standard requires lowercase letters");
	if (req.number && !policy.number) reasons.push("Standard requires numbers");
	if (req.symbols && !policy.symbols) reasons.push("Standard requires symbols");
	if (req.minCharacterClasses != null) {
		const classCount = countCharacterClasses(policy);
		if (classCount < req.minCharacterClasses) reasons.push(`Standard requires at least ${req.minCharacterClasses} character types; your policy requires ${classCount}`);
	}
	return {
		standard,
		compliant: reasons.length === 0,
		reasons
	};
}
const PASSWORD_STRENGTH_STANDARDS = [
	{
		id: "nist",
		name: "NIST SP 800-63B",
		description: "Minimum 8 characters. No mandatory complexity rules; length is the primary control.",
		requirements: { min: 8 }
	},
	{
		id: "owasp-min",
		name: "OWASP (minimum)",
		description: "Baseline web application guidance with an 8-character minimum.",
		requirements: { min: 8 }
	},
	{
		id: "owasp-l2",
		name: "OWASP ASVS Level 2",
		description: "Higher assurance applications should use at least 12 characters.",
		requirements: { min: 12 }
	},
	{
		id: "pci-dss",
		name: "PCI DSS 4.0",
		description: "Payment environments typically require 8+ characters with mixed character types.",
		requirements: {
			min: 8,
			uppercase: true,
			lowercase: true,
			number: true,
			symbols: true
		}
	},
	{
		id: "microsoft-entra",
		name: "Microsoft Entra ID",
		description: "Default cloud identity policy: 8+ characters and at least 3 of 4 character types.",
		requirements: {
			min: 8,
			minCharacterClasses: 3
		}
	},
	{
		id: "cis",
		name: "CIS Controls",
		description: "Enterprise hardening guidance recommending 14+ characters for privileged access.",
		requirements: { min: 14 }
	},
	{
		id: "google",
		name: "Google accounts",
		description: "Consumer account minimum of 8 characters at sign-up.",
		requirements: { min: 8 }
	}
];
const PASSWORD_STRENGTH_PRESETS = [
	{
		id: "appwrite-default",
		label: "Appwrite default",
		description: "8 characters, no character-type requirements",
		policy: {
			min: 8,
			uppercase: false,
			lowercase: false,
			number: false,
			symbols: false
		}
	},
	{
		id: "nist",
		label: "NIST SP 800-63B",
		description: "8 characters, no mandatory complexity",
		policy: {
			min: 8,
			uppercase: false,
			lowercase: false,
			number: false,
			symbols: false
		}
	},
	{
		id: "balanced",
		label: "Balanced (OWASP)",
		description: "10 characters with letters and numbers",
		policy: {
			min: 10,
			uppercase: true,
			lowercase: true,
			number: true,
			symbols: false
		}
	},
	{
		id: "microsoft-entra",
		label: "Microsoft Entra ID",
		description: "8 characters, 3 of 4 character types",
		policy: {
			min: 8,
			uppercase: true,
			lowercase: true,
			number: true,
			symbols: false
		}
	},
	{
		id: "pci-dss",
		label: "PCI DSS",
		description: "8 characters with all character types",
		policy: {
			min: 8,
			uppercase: true,
			lowercase: true,
			number: true,
			symbols: true
		}
	},
	{
		id: "strong",
		label: "Strong",
		description: "12 characters with all character types",
		policy: {
			min: 12,
			uppercase: true,
			lowercase: true,
			number: true,
			symbols: true
		}
	}
];
function policiesEqual(a, b) {
	return a.min === b.min && a.uppercase === b.uppercase && a.lowercase === b.lowercase && a.number === b.number && a.symbols === b.symbols;
}
function findMatchingPasswordStrengthPreset(policy) {
	return PASSWORD_STRENGTH_PRESETS.find((preset) => policiesEqual(policy, preset.policy));
}
function clampPasswordMinLength(value, min = 8, max = 256) {
	return Math.max(min, Math.min(max, value));
}
const AuthEmailPolicyId = {
	DenyFreeEmail: "deny-free-email",
	DenyAliasedEmail: "deny-aliased-email",
	DenyDisposableEmail: "deny-disposable-email",
	DenyCorporateEmail: "deny-corporate-email"
};
var DEFAULT_AUTH_SECURITY = {
	authLimit: 0,
	authDuration: 0,
	authSessionsLimit: 10,
	authPasswordHistory: 0,
	authPasswordStrength: DEFAULT_PASSWORD_STRENGTH_POLICY,
	authPasswordDictionary: false,
	authPersonalDataCheck: false,
	authSessionAlerts: false,
	authInvalidateSessions: false,
	authDenyFreeEmail: false,
	authDenyAliasedEmail: false,
	authDenyDisposableEmail: false,
	authDenyCorporateEmail: false,
	authMockNumbers: [],
	membershipsPrivacy: {
		userName: true,
		userEmail: true,
		mfa: true,
		userId: true,
		userPhone: true
	}
};
function policyById(policies, id) {
	return policies?.find((p) => p.$id === id);
}
function parsePolicyEnabled(policy, defaultWhenMissing = false) {
	if (!policy || !("enabled" in policy)) return defaultWhenMissing;
	return policy.enabled ?? defaultWhenMissing;
}
function parsePolicyCountLimit(policy, defaultWhenMissing) {
	if (!policy || !("total" in policy)) return defaultWhenMissing;
	const total = policy.total;
	if (total == null || total === 0) return 0;
	return total;
}
function parsePasswordStrengthPolicy(policy) {
	if (!policy || !("min" in policy)) return DEFAULT_PASSWORD_STRENGTH_POLICY;
	const strength = policy;
	return {
		min: strength.min ?? DEFAULT_PASSWORD_STRENGTH_POLICY.min,
		uppercase: strength.uppercase ?? false,
		lowercase: strength.lowercase ?? false,
		number: strength.number ?? false,
		symbols: strength.symbols ?? false
	};
}
function parseProjectAuthSecurity(policies, mockNumbers) {
	const userLimit = policyById(policies, ProjectPolicyId.Userlimit);
	const sessionDuration = policyById(policies, ProjectPolicyId.Sessionduration);
	const sessionLimit = policyById(policies, ProjectPolicyId.Sessionlimit);
	const passwordHistory = policyById(policies, ProjectPolicyId.Passwordhistory);
	const passwordStrength = policyById(policies, ProjectPolicyId.Passwordstrength);
	const passwordDictionary = policyById(policies, ProjectPolicyId.Passworddictionary);
	const passwordPersonalData = policyById(policies, ProjectPolicyId.Passwordpersonaldata);
	const sessionAlert = policyById(policies, ProjectPolicyId.Sessionalert);
	const sessionInvalidation = policyById(policies, ProjectPolicyId.Sessioninvalidation);
	const membershipPrivacy = policyById(policies, ProjectPolicyId.Membershipprivacy);
	const denyFreeEmail = policyById(policies, AuthEmailPolicyId.DenyFreeEmail);
	const denyAliasedEmail = policyById(policies, AuthEmailPolicyId.DenyAliasedEmail);
	const denyDisposableEmail = policyById(policies, AuthEmailPolicyId.DenyDisposableEmail);
	const denyCorporateEmail = policyById(policies, AuthEmailPolicyId.DenyCorporateEmail);
	return {
		authLimit: parsePolicyCountLimit(userLimit, 0),
		authDuration: sessionDuration && "duration" in sessionDuration ? sessionDuration.duration ?? 0 : 0,
		authSessionsLimit: parsePolicyCountLimit(sessionLimit, 10),
		authPasswordHistory: parsePolicyCountLimit(passwordHistory, 0),
		authPasswordStrength: parsePasswordStrengthPolicy(passwordStrength),
		authPasswordDictionary: passwordDictionary && "enabled" in passwordDictionary ? passwordDictionary.enabled ?? false : false,
		authPersonalDataCheck: passwordPersonalData && "enabled" in passwordPersonalData ? passwordPersonalData.enabled ?? false : false,
		authSessionAlerts: sessionAlert && "enabled" in sessionAlert ? sessionAlert.enabled ?? false : false,
		authInvalidateSessions: sessionInvalidation && "enabled" in sessionInvalidation ? sessionInvalidation.enabled ?? false : false,
		authDenyFreeEmail: parsePolicyEnabled(denyFreeEmail, false),
		authDenyAliasedEmail: parsePolicyEnabled(denyAliasedEmail, false),
		authDenyDisposableEmail: parsePolicyEnabled(denyDisposableEmail, false),
		authDenyCorporateEmail: parsePolicyEnabled(denyCorporateEmail, false),
		authMockNumbers: (mockNumbers ?? []).map((n) => ({
			phone: n.number,
			otp: n.otp
		})),
		membershipsPrivacy: {
			userName: membershipPrivacy && "userName" in membershipPrivacy ? membershipPrivacy.userName ?? true : true,
			userEmail: membershipPrivacy && "userEmail" in membershipPrivacy ? membershipPrivacy.userEmail ?? true : true,
			mfa: membershipPrivacy && "userMFA" in membershipPrivacy ? membershipPrivacy.userMFA ?? true : true,
			userId: membershipPrivacy && "userId" in membershipPrivacy ? membershipPrivacy.userId ?? true : true,
			userPhone: membershipPrivacy && "userPhone" in membershipPrivacy ? membershipPrivacy.userPhone ?? true : true
		}
	};
}
async function fetchProjectAuthSecurity(projectId, region) {
	const projectSdk = sdk.forProject(projectId, region);
	const [policiesRes, mockRes] = await Promise.all([projectSdk.project.listPolicies({ total: true }).catch(() => null), projectSdk.project.listMockPhones({ total: true }).catch(() => null)]);
	return parseProjectAuthSecurity(policiesRes?.policies, mockRes?.mockNumbers);
}
function projectAuthSecurityQueryOptions(projectId, region) {
	return queryOptions({
		queryKey: ["project-auth-security", projectId],
		queryFn: () => fetchProjectAuthSecurity(projectId, region),
		enabled: !!projectId,
		staleTime: 300 * 1e3,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
async function fetchProjectById(projectId) {
	if (!projectId) throw new Error("Project ID is required");
	try {
		const response = await sdk.forProject(projectId).project.get();
		if (response?.region) setProjectRegion(projectId, response.region);
		return response;
	} catch (error) {
		const { fetchOrganizations } = await import("./organizations-CATeYY3J.js");
		const orgs = await fetchOrganizations().catch(() => ({ teams: [] }));
		let stub;
		for (const org of orgs.teams ?? []) try {
			stub = (await listConsoleProjects({
				organizationId: org.$id,
				queries: [
					Query.equal("teamId", org.$id),
					Query.equal("$id", projectId),
					Query.limit(1)
				],
				total: false
			})).projects?.[0];
			if (stub) break;
		} catch {}
		if (!stub) throw error;
		if (stub.region) setProjectRegion(projectId, stub.region);
		const response = await sdk.forProject(projectId, stub.region).project.get();
		if (response?.region) setProjectRegion(projectId, response.region);
		return response;
	}
}
function authMethodsRecordFromProject(project) {
	const defaults = {
		[ProjectAuthMethodId.Emailpassword]: false,
		[ProjectAuthMethodId.Phone]: false,
		[ProjectAuthMethodId.Magicurl]: false,
		[ProjectAuthMethodId.Emailotp]: false,
		[ProjectAuthMethodId.Anonymous]: false,
		[ProjectAuthMethodId.Invites]: false,
		[ProjectAuthMethodId.Jwt]: false
	};
	if (!project?.authMethods?.length) return defaults;
	for (const method of project.authMethods) defaults[method.$id] = method.enabled;
	return defaults;
}
function servicesRecordFromProject(project, serviceIds) {
	return Object.fromEntries(serviceIds.map((id) => {
		return [id, (project?.services?.find((s) => s.$id === id))?.enabled ?? true];
	}));
}
function protocolsRecordFromProject(project) {
	const defaults = {
		[ProjectProtocolId.Rest]: true,
		[ProjectProtocolId.Graphql]: true,
		[ProjectProtocolId.Websocket]: true
	};
	if (!project?.protocols?.length) return defaults;
	for (const protocol of project.protocols) defaults[protocol.$id] = protocol.enabled;
	return defaults;
}
function patchProjectProtocolsInCache(project, protocolId, enabled) {
	const protocols = [...project.protocols ?? []];
	const idx = protocols.findIndex((p) => p.$id === protocolId);
	const entry = {
		$id: protocolId,
		enabled
	};
	if (idx >= 0) protocols[idx] = entry;
	else protocols.push(entry);
	return {
		...project,
		protocols
	};
}
function registerProjectRegionFromProject(project) {
	if (project?.$id && project.region) setProjectRegion(project.$id, project.region);
}
function registerProjectRegionsFromProjects(projects) {
	for (const project of projects ?? []) registerProjectRegionFromProject(project);
}
async function ensureProjectRegion(queryClient, projectId) {
	if (!projectId || getProjectRegion(projectId)) return;
	const cached = queryClient.getQueryData(["project", projectId]);
	if (cached?.region) {
		setProjectRegion(projectId, cached.region);
		return;
	}
	const { fetchProject: fetchProject$1 } = await import("./projects-VDdRu8G-.js");
	const project = await queryClient.ensureQueryData({
		queryKey: ["project", projectId],
		queryFn: () => fetchProject$1(projectId),
		staleTime: LONG_STALE_TIME
	}).catch(() => null);
	if (project?.region) setProjectRegion(projectId, project.region);
}
var VARIABLE_KEY_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;
function getVariableKeyError(key) {
	if (!key?.trim()) return translate("Variable key is required");
	if (key.length > 255) return `${translate("Variable key")} ${key} ${translate("is longer than 255 allowed characters")}`;
	if (!VARIABLE_KEY_PATTERN.test(key)) return `${translate("Variable key")} ${key} ${translate("can only contain letters, digits and underscores, and cannot start with a digit")}`;
	return null;
}
function getVariableValueError(key, value) {
	if (String(value ?? "").length > 8192) return `${translate("Variable")} ${key} ${translate("is longer than 8192 allowed characters")}`;
	return null;
}
function validateVariables(variables) {
	for (const { key, value } of variables) {
		const keyError = getVariableKeyError(key ?? "");
		if (keyError) return keyError;
		const valueError = getVariableValueError(key ?? "", value);
		if (valueError) return valueError;
	}
	return null;
}
var PROJECT_LIST_SELECT = [
	"$id",
	"name",
	"teamId",
	"region",
	"$createdAt",
	"status"
];
const PROJECT_NAME_MAX_LENGTH = 128;
const PROJECT_NAME_DISPLAY_MAX = 28;
const PROJECT_NAME_DISPLAY_MAX_WIDE = 36;
const PROJECT_NAME_DISPLAY_MAX_COMPACT = 22;
const PROJECT_NAME_DISPLAY_MAX_SELECTOR = 30;
function formatProjectNameForDisplay(name, maxLength = 28) {
	if (!name) return name;
	return truncateMiddle(name, maxLength);
}
function getProjectNameDisplayTitle(name, maxLength = 28) {
	if (!name || name.length <= maxLength) return void 0;
	return name;
}
function mapProjectToListItem(project) {
	return {
		$id: project.$id,
		name: project.name,
		teamId: project.teamId,
		region: project.region || "unknown",
		createdAt: project.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
		icon: project.name.charAt(0).toUpperCase(),
		archived: project.status === "archived",
		paused: project.status === "paused"
	};
}
function getProjectListItemEndpoint(project) {
	return getApiEndpoint(project.region !== "unknown" ? project.region : void 0);
}
function getProjectStatusQueries() {
	return getActiveProfileFeatures().billing ? [Query.or([Query.isNull("status"), Query.notEqual("status", "archived")])] : [];
}
function projectListSearchOrQuery(trimmedSearch) {
	return Query.or([Query.search("search", trimmedSearch), Query.contains("labels", trimmedSearch)]);
}
function isProbableConsoleProjectId(value) {
	return /^[a-z0-9][a-z0-9-]{0,35}$/i.test(value);
}
function projectMatchesActiveListStatus(project) {
	if (!getActiveProfileFeatures().billing) return true;
	const status = project.status;
	return status == null || status !== "archived";
}
async function fetchProject(projectId) {
	return fetchProjectById(projectId);
}
async function fetchActiveProjects(teamId, page = 0, limit = 10, search, excludeProjectIds, restrictToProjectIds) {
	if (!teamId) return {
		projects: [],
		total: 0
	};
	const isRestricted = Array.isArray(restrictToProjectIds);
	const allowedIds = isRestricted ? restrictToProjectIds.filter((id) => typeof id === "string" && id.length > 0) : [];
	if (isRestricted && allowedIds.length === 0) return {
		projects: [],
		total: 0
	};
	const allowedIdSet = new Set(allowedIds);
	const restrictQueries = isRestricted ? [allowedIds.length === 1 ? Query.equal("$id", allowedIds[0]) : Query.or(allowedIds.map((id) => Query.equal("$id", id)))] : [];
	const statusQueries = getProjectStatusQueries();
	const trimmedSearch = search?.trim() ?? "";
	const searchQueries = trimmedSearch ? [projectListSearchOrQuery(trimmedSearch)] : [];
	const baseQueries = [
		Query.select([...PROJECT_LIST_SELECT]),
		Query.equal("teamId", teamId),
		...statusQueries,
		...restrictQueries,
		...searchQueries,
		Query.orderDesc("$createdAt"),
		Query.limit(limit),
		Query.offset(page * limit)
	];
	const excludeIds = excludeProjectIds?.length && excludeProjectIds.every((id) => typeof id === "string" && id.length > 0) ? excludeProjectIds : [];
	if (trimmedSearch && isProbableConsoleProjectId(trimmedSearch)) try {
		const direct = await fetchProjectById(trimmedSearch);
		if (!excludeIds.includes(direct.$id) && direct.teamId === teamId && (!isRestricted || allowedIdSet.has(direct.$id)) && projectMatchesActiveListStatus(direct)) return {
			projects: page === 0 ? [direct] : [],
			total: 1
		};
	} catch {}
	const response = await listConsoleProjects({
		queries: excludeIds.length > 0 ? [
			Query.select([...PROJECT_LIST_SELECT]),
			Query.equal("teamId", teamId),
			...statusQueries,
			...restrictQueries,
			...searchQueries,
			...excludeIds.map((id) => Query.notEqual("$id", id)),
			Query.orderDesc("$createdAt"),
			Query.limit(limit),
			Query.offset(page * limit)
		] : baseQueries,
		total: true
	});
	const projects = response.projects || [];
	registerProjectRegionsFromProjects(projects);
	return {
		projects,
		total: response.total || 0
	};
}
async function fetchProjectsByIds(teamId, projectIds) {
	if (!teamId || projectIds.length === 0) return { projects: [] };
	const validIds = projectIds.filter((id) => typeof id === "string" && id.length > 0);
	if (validIds.length === 0) return { projects: [] };
	const idQuery = validIds.length === 1 ? Query.equal("$id", validIds[0]) : Query.or(validIds.map((id) => Query.equal("$id", id)));
	const list = (await listConsoleProjects({
		queries: [
			Query.select([...PROJECT_LIST_SELECT]),
			Query.equal("teamId", teamId),
			...getProjectStatusQueries(),
			idQuery,
			Query.limit(validIds.length)
		],
		total: false
	})).projects || [];
	const byId = new Map(list.map((p) => [p.$id, p]));
	const projects = validIds.map((id) => byId.get(id)).filter((p) => p != null);
	registerProjectRegionsFromProjects(projects);
	return { projects };
}
async function fetchApiKeys(projectId) {
	if (!projectId) throw new Error("Project ID is required");
	return sdk.forProject(projectId).project.listKeys({ total: true });
}
async function fetchApiKey(projectId, keyId) {
	if (!projectId || !keyId) throw new Error("Project ID and API key ID are required");
	const key = ((await fetchApiKeys(projectId)).keys ?? []).find((k) => {
		return (k.$id ?? k.id) === keyId;
	});
	if (!key) throw new Error("API key not found");
	return key;
}
function apiKeyLastUsedFromRaw(accessedAt) {
	if (accessedAt == null || typeof accessedAt !== "string") return null;
	const trimmed = accessedAt.trim();
	return trimmed.length > 0 ? trimmed : null;
}
function mapApiKeysFromResponse(apiKeysData) {
	if (!apiKeysData?.keys) return [];
	return (apiKeysData.keys || []).map((key) => {
		const k = key;
		return {
			id: k.$id ?? k.id ?? "",
			name: k.name ?? "Unnamed Key",
			key: k.secret ?? "",
			scopes: k.scopes ?? [],
			createdAt: k.$createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			lastUsed: apiKeyLastUsedFromRaw(k.accessedAt),
			expire: k.expire ?? null
		};
	});
}
function apiKeysQueryOptions(projectId) {
	return queryOptions({
		queryKey: ["apiKeys", projectId],
		queryFn: () => fetchApiKeys(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		refetchOnMount: false
	});
}
async function fetchPlatforms(projectId) {
	if (!projectId) throw new Error("Project ID is required");
	return sdk.forProject(projectId).project.listPlatforms({ total: true });
}
async function createPlatformForProject(projectId, input) {
	const projectSdk = sdk.forProject(projectId);
	const platformId = ID.unique();
	const { variant, name, hostname, key } = input;
	const k = key?.trim() ?? "";
	if (variant === "web" || variant === "flutter-web") return projectSdk.project.createWebPlatform({
		platformId,
		name,
		hostname: hostname?.trim() || ""
	});
	if (variant === "android" || variant === "flutter-android" || variant === "react-native-android") return projectSdk.project.createAndroidPlatform({
		platformId,
		name,
		applicationId: k
	});
	if (variant.startsWith("apple-") || variant === "flutter-ios" || variant === "flutter-macos" || variant === "react-native-ios") return projectSdk.project.createApplePlatform({
		platformId,
		name,
		bundleIdentifier: k
	});
	if (variant === "flutter-linux" || variant === "linux") return projectSdk.project.createLinuxPlatform({
		platformId,
		name,
		packageName: k
	});
	if (variant === "flutter-windows" || variant === "windows") return projectSdk.project.createWindowsPlatform({
		platformId,
		name,
		packageIdentifierName: k
	});
	throw new Error(`Unsupported platform variant: ${variant}`);
}
async function updatePlatformForProject(projectId, data) {
	const projectSdk = sdk.forProject(projectId);
	const current = await projectSdk.project.getPlatform({ platformId: data.platformId });
	const name = data.name;
	const key = data.key?.trim();
	if ("hostname" in current) return projectSdk.project.updateWebPlatform({
		platformId: data.platformId,
		name,
		hostname: data.hostname ?? current.hostname
	});
	if ("applicationId" in current) return projectSdk.project.updateAndroidPlatform({
		platformId: data.platformId,
		name,
		applicationId: key || current.applicationId
	});
	if ("bundleIdentifier" in current) return projectSdk.project.updateApplePlatform({
		platformId: data.platformId,
		name,
		bundleIdentifier: key || current.bundleIdentifier
	});
	if ("packageName" in current) return projectSdk.project.updateLinuxPlatform({
		platformId: data.platformId,
		name,
		packageName: key || current.packageName
	});
	if ("packageIdentifierName" in current) return projectSdk.project.updateWindowsPlatform({
		platformId: data.platformId,
		name,
		packageIdentifierName: key || current.packageIdentifierName
	});
	throw new Error("Unsupported platform type");
}
async function fetchProjectVariables(projectId) {
	if (!projectId) return {
		variables: [],
		total: 0
	};
	const projectSdk = sdk.forProject(projectId);
	try {
		const variables = [...(await projectSdk.projectApi.listVariables({ queries: [Query.orderDesc("$createdAt")] })).variables || []].sort((a, b) => {
			const aTime = new Date(a.$createdAt || 0).getTime();
			return new Date(b.$createdAt || 0).getTime() - aTime;
		});
		return {
			variables,
			total: variables.length
		};
	} catch {
		return {
			variables: [],
			total: 0
		};
	}
}
function projectRestrictionKey(restrictToProjectIds) {
	return Array.isArray(restrictToProjectIds) ? `ids:${restrictToProjectIds.slice().sort().join(",")}` : "all";
}
function projectsForTeamInfiniteQueryKey(teamId, limit, search, excludeProjectIds, restrictToProjectIds) {
	return [
		"projects",
		"team",
		"infinite",
		teamId,
		limit,
		search,
		(excludeProjectIds?.length ?? 0) > 0 ? excludeProjectIds.slice().sort().join(",") : "",
		projectRestrictionKey(restrictToProjectIds)
	];
}
function activeProjectsQueryOptions(orgId, page = 0, limit = 10, search = "", excludeProjectIds, restrictToProjectIds) {
	return queryOptions({
		queryKey: [
			"projects",
			"active",
			orgId,
			page,
			limit,
			search,
			(excludeProjectIds?.length ?? 0) > 0 ? excludeProjectIds.slice().sort().join(",") : "",
			projectRestrictionKey(restrictToProjectIds)
		],
		queryFn: () => fetchActiveProjects(orgId, page, limit, search, excludeProjectIds, restrictToProjectIds),
		enabled: !!orgId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		placeholderData: keepPreviousData,
		gcTime: orgId ? 300 * 1e3 : 0
	});
}
function pinnedProjectsQueryOptions(orgId, projectIds) {
	return queryOptions({
		queryKey: [
			"projects",
			"pinned",
			orgId,
			projectIds.length > 0 ? projectIds.slice().sort().join(",") : ""
		],
		queryFn: () => fetchProjectsByIds(orgId, projectIds),
		enabled: !!orgId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		gcTime: orgId ? 300 * 1e3 : 0
	});
}
function projectsByIdsQueryOptions(orgId, projectIds) {
	return queryOptions({
		queryKey: [
			"projects",
			"by-ids",
			orgId,
			projectIds.length > 0 ? projectIds.slice().sort().join(",") : ""
		],
		queryFn: () => fetchProjectsByIds(orgId, projectIds),
		enabled: !!orgId && projectIds.length > 0,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		gcTime: orgId ? 300 * 1e3 : 0
	});
}
function projectVariablesQueryOptions(projectId) {
	return queryOptions({
		queryKey: [
			"variables",
			"project",
			projectId
		],
		queryFn: () => fetchProjectVariables(projectId),
		enabled: !!projectId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function projectQueryOptions(projectId) {
	return queryOptions({
		queryKey: ["project", projectId],
		queryFn: () => fetchProject(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0
	});
}
function useProject(projectId) {
	const { data: projectData, isLoading, error, refetch } = useQuery(projectQueryOptions(projectId));
	return {
		project: useMemo(() => {
			if (!projectData) return null;
			return {
				$id: projectData.$id,
				name: projectData.name,
				teamId: projectData.teamId,
				region: projectData.region || "unknown",
				createdAt: projectData.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
				icon: projectData.name.charAt(0).toUpperCase(),
				archived: projectData.status === "archived",
				status: projectData.status,
				pingCount: projectData.pingCount,
				pingedAt: projectData.pingedAt
			};
		}, [projectData]),
		projectData,
		isLoading,
		error,
		refetch
	};
}
var CONSOLE_FINGERPRINT_HEADER = "X-Appwrite-Console-Fingerprint";
function normalizeProjectRegion(region) {
	if (typeof region !== "string" || !region.trim() || region.toLowerCase() === "unknown") return;
	return region;
}
async function deleteProject(projectId, region) {
	await sdk.forProject(projectId, normalizeProjectRegion(region)).project.delete();
}
function useResumeProject(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => {
			if (!projectId) throw new Error("Project ID is required");
			const client = sdk.forConsole.client;
			await ensureFingerprintServerTimeSynced(client.config?.endpoint ?? "", client.config?.project ?? "console");
			const fingerprint = await generateFingerprintToken();
			if (client.headers) client.headers[CONSOLE_FINGERPRINT_HEADER] = fingerprint;
			try {
				await sdk.forConsole.projects.updateStatus({
					projectId,
					status: Status.Active
				});
			} finally {
				if (client.headers) delete client.headers[CONSOLE_FINGERPRINT_HEADER];
			}
		},
		onSuccess: async () => {
			if (!projectId) return;
			await queryClient.refetchQueries({
				queryKey: ["project", projectId],
				exact: true
			});
			await queryClient.refetchQueries({ predicate: (query) => {
				const k = query.queryKey;
				return k[0] === "project" && k[1] === projectId || k[1] === "project" && k[2] === projectId;
			} });
			await queryClient.refetchQueries({ predicate: (query) => {
				const k = query.queryKey;
				return k[0] === "projects" || k[0] === "organization" && k[1] === "projects";
			} });
		}
	});
}
function useProjectsForTeam(teamId, page = 0, limit = 10, search) {
	const { data: projectsData, isLoading, isFetching, error, refetch } = useQuery({
		queryKey: [
			"projects",
			"team",
			teamId,
			page,
			limit,
			search
		],
		queryFn: () => fetchActiveProjects(teamId, page, limit, search),
		enabled: !!teamId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		gcTime: teamId ? 300 * 1e3 : 0
	});
	const projects = useMemo(() => {
		if (!projectsData?.projects) return [];
		return projectsData.projects.map((project) => {
			const p = project;
			return {
				$id: p.$id,
				name: p.name,
				teamId: p.teamId,
				region: p.region || "unknown",
				createdAt: p.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
				icon: p.name.charAt(0).toUpperCase(),
				archived: p.status === "archived"
			};
		});
	}, [projectsData]);
	const totalPages = useMemo(() => {
		if (!projectsData?.total) return 0;
		return Math.ceil(projectsData.total / limit);
	}, [projectsData?.total, limit]);
	return {
		projects,
		total: projectsData?.total || 0,
		totalPages,
		isLoading,
		isFetching,
		error,
		refetch
	};
}
function useProjectsForTeamInfinite(teamId, limit = 10, search, excludeProjectIds, restrictToProjectIds) {
	const { data, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage, error, refetch, isPlaceholderData } = useInfiniteQuery({
		queryKey: projectsForTeamInfiniteQueryKey(teamId, limit, search ?? "", excludeProjectIds, restrictToProjectIds),
		queryFn: ({ pageParam = 0 }) => fetchActiveProjects(teamId, pageParam, limit, search, excludeProjectIds, restrictToProjectIds),
		enabled: !!teamId,
		staleTime: DEFAULT_STALE_TIME,
		placeholderData: keepPreviousData,
		refetchOnMount: false,
		getNextPageParam: (lastPage, allPages) => {
			const loadedCount = allPages.reduce((sum, page) => sum + (page.projects?.length || 0), 0);
			if (lastPage.total && loadedCount < lastPage.total) return allPages.length;
		},
		initialPageParam: 0
	});
	return {
		projects: useMemo(() => {
			if (!data?.pages) return [];
			return data.pages.flatMap((page) => page.projects || []).map((raw) => {
				const p = raw;
				return {
					$id: p.$id,
					name: p.name,
					teamId: p.teamId,
					region: p.region || "unknown",
					createdAt: p.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
					icon: p.name.charAt(0).toUpperCase(),
					archived: p.status === "archived",
					paused: p.status === "paused"
				};
			});
		}, [data]),
		total: useMemo(() => {
			return data?.pages[0]?.total || 0;
		}, [data]),
		isLoading,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		error,
		refetch,
		isPlaceholderData
	};
}
function useApiKeys(projectId, options) {
	const { data: apiKeysData, isLoading, error, refetch } = useQuery({
		...apiKeysQueryOptions(projectId),
		initialData: options?.initialData ?? void 0,
		initialDataUpdatedAt: options?.initialData ? 1 : 0
	});
	return {
		apiKeys: useMemo(() => {
			if (!apiKeysData) return [];
			return (apiKeysData.keys || []).map((key) => {
				const k = key;
				return {
					id: k.$id ?? k.id ?? "",
					name: k.name || "Unnamed Key",
					key: k.secret || "",
					scopes: k.scopes || [],
					createdAt: k.$createdAt || (/* @__PURE__ */ new Date()).toISOString(),
					lastUsed: apiKeyLastUsedFromRaw(k.accessedAt),
					expire: k.expire ?? null
				};
			});
		}, [apiKeysData]),
		isLoading,
		error,
		refetch
	};
}
function useCreateApiKey(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ name, scopes, expire }) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!name.trim()) throw new Error("API key name is required");
			return await sdk.forProject(projectId).project.createKey({
				keyId: ID.unique(),
				name: name.trim(),
				scopes: scopes ?? [],
				expire
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["apiKeys", projectId] });
			queryClient.invalidateQueries({ queryKey: ["project", projectId] });
		}
	});
}
function useUpdateApiKey(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ keyId, name, scopes, expire }) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!keyId) throw new Error("API key ID is required");
			if (!name.trim()) throw new Error("API key name is required");
			return await sdk.forProject(projectId).project.updateKey({
				keyId,
				name: name.trim(),
				scopes: scopes ?? [],
				expire
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["apiKeys", projectId] });
			queryClient.invalidateQueries({ queryKey: ["project", projectId] });
		}
	});
}
function useDeleteApiKey(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (keyId) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!keyId) throw new Error("API key ID is required");
			return await sdk.forProject(projectId).project.deleteKey({ keyId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["apiKeys", projectId],
				type: "all"
			});
			await queryClient.invalidateQueries({
				queryKey: ["project", projectId],
				refetchType: "all"
			});
		}
	});
}
function platformsQueryOptions(projectId) {
	return queryOptions({
		queryKey: ["platforms", projectId],
		queryFn: () => fetchPlatforms(projectId),
		enabled: !!projectId,
		staleTime: LONG_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: projectId ? 300 * 1e3 : 0,
		meta: { skipInitialLoader: true }
	});
}
function usePlatforms(projectId) {
	const { data: platformsData, isLoading, error, refetch } = useQuery(platformsQueryOptions(projectId));
	return {
		platforms: useMemo(() => {
			if (!platformsData?.platforms) return [];
			return platformsData.platforms;
		}, [platformsData]),
		total: platformsData?.total ?? 0,
		isLoading,
		error,
		refetch
	};
}
function useProjectListPlatforms(projectIds, enabled) {
	const uniqueIds = useMemo(() => [...new Set(projectIds.filter(Boolean))], [projectIds]);
	const queries = useQueries({ queries: uniqueIds.map((projectId) => ({
		...platformsQueryOptions(projectId),
		enabled: enabled && !!projectId
	})) });
	return useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		uniqueIds.forEach((projectId, index) => {
			const query = queries[index];
			map.set(projectId, {
				isLoading: query.isPending && !query.data && !query.isError,
				isError: query.isError,
				platforms: query.data?.platforms ?? []
			});
		});
		return map;
	}, [uniqueIds, queries]);
}
function platformQueryOptions(projectId, platformId) {
	return queryOptions({
		queryKey: [
			"platform",
			"project",
			projectId,
			platformId
		],
		queryFn: async () => {
			if (!projectId || !platformId) throw new Error("Project ID and Platform ID are required");
			return await sdk.forProject(projectId).project.getPlatform({ platformId });
		},
		enabled: !!projectId && !!platformId,
		staleTime: LONG_STALE_TIME
	});
}
function useProjectPlatform(projectId, platformId) {
	const { data, isLoading, error, refetch } = useQuery(platformQueryOptions(projectId, platformId));
	return {
		platform: data ?? null,
		isLoading,
		error,
		refetch
	};
}
function useUpdatePlatform(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			return await updatePlatformForProject(projectId, data);
		},
		onSuccess: async (_, variables) => {
			await queryClient.invalidateQueries({
				queryKey: ["platforms", projectId],
				refetchType: "all"
			});
			await queryClient.invalidateQueries({
				queryKey: ["project", projectId],
				refetchType: "all"
			});
			queryClient.invalidateQueries({
				queryKey: [
					"platform",
					"project",
					projectId,
					variables.platformId
				],
				refetchType: "all"
			});
		}
	});
}
function useDeletePlatform(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (platformId) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.deletePlatform({ platformId });
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["platforms", projectId],
				refetchType: "all"
			});
			await queryClient.invalidateQueries({
				queryKey: ["project", projectId],
				refetchType: "all"
			});
		}
	});
}
function useCreatePlatform(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			return createPlatformForProject(projectId, data);
		},
		onSuccess: async (created) => {
			await queryClient.invalidateQueries({
				queryKey: ["platforms", projectId],
				refetchType: "all"
			});
			await queryClient.invalidateQueries({
				queryKey: ["project", projectId],
				refetchType: "all"
			});
			queryClient.invalidateQueries({
				queryKey: [
					"platform",
					"project",
					projectId,
					created.$id
				],
				refetchType: "all"
			});
		}
	});
}
function useProjectVariables(projectId, page = 0, limit) {
	const { data, isLoading, error, refetch } = useQuery(projectVariablesQueryOptions(projectId));
	const all = data?.variables ?? [];
	const { variables, total } = useMemo(() => {
		const totalCount = all.length;
		if (limit === void 0) return {
			variables: all,
			total: totalCount
		};
		const start = page * limit;
		return {
			variables: all.slice(start, start + limit),
			total: totalCount
		};
	}, [
		all,
		page,
		limit
	]);
	return {
		variables,
		total,
		isLoading,
		error,
		refetch
	};
}
function useCreateProjectVariable(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ key, value, secret = false }) => {
			if (!projectId) throw new Error("Project ID is required");
			const validationError = validateVariables([{
				key: key.trim(),
				value
			}]);
			if (validationError) throw new Error(validationError);
			return await sdk.forProject(projectId).projectApi.createVariable({
				variableId: ID.unique(),
				key: key.trim(),
				value,
				secret
			});
		},
		onSuccess: async () => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"variables",
				"project",
				projectId
			] }), queryClient.refetchQueries({ queryKey: ["project-variables"] })]);
		}
	});
}
function useUpdateProjectVariable(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ variableId, key, value, secret }) => {
			if (!projectId) throw new Error("Project ID is required");
			if (!key.trim()) throw new Error("Variable key is required");
			const valueError = getVariableValueError(key, value);
			if (valueError) throw new Error(valueError);
			return await sdk.forProject(projectId).projectApi.updateVariable({
				variableId,
				key: key.trim(),
				value,
				secret
			});
		},
		onSuccess: async () => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"variables",
				"project",
				projectId
			] }), queryClient.refetchQueries({ queryKey: ["project-variables"] })]);
		}
	});
}
function useDeleteProjectVariable(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (variableId) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).projectApi.deleteVariable({ variableId });
		},
		onSuccess: async () => {
			await Promise.all([queryClient.refetchQueries({ queryKey: [
				"variables",
				"project",
				projectId
			] }), queryClient.refetchQueries({ queryKey: ["project-variables"] })]);
		}
	});
}
function useCreateProject(teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ projectId, name, region }) => {
			if (!teamId) throw new Error("Team ID is required");
			const trimmedName = name.trim();
			if (!trimmedName) throw new Error("Project name is required");
			if (trimmedName.length > 128) throw new Error(`Project name must be no longer than 128 characters`);
			return await createConsoleProject({
				projectId: projectId || ID.unique(),
				name: trimmedName,
				teamId,
				region
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"projects",
				"team",
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: ["organization-projects"] });
			queryClient.invalidateQueries({ queryKey: ["projects"] });
		}
	});
}
export { authMethodsRecordFromProject as $, useCreateApiKey as A, useProjectPlatform as B, platformQueryOptions as C, projectsByIdsQueryOptions as D, projectVariablesQueryOptions as E, useDeletePlatform as F, useUpdateApiKey as G, useProjectsForTeam as H, useDeleteProjectVariable as I, getVariableValueError as J, useUpdatePlatform as K, usePlatforms as L, useCreateProject as M, useCreateProjectVariable as N, projectsForTeamInfiniteQueryKey as O, useDeleteApiKey as P, DEFAULT_AUTH_SECURITY as Q, useProject as R, pinnedProjectsQueryOptions as S, projectQueryOptions as T, useProjectsForTeamInfinite as U, useProjectVariables as V, useResumeProject as W, ensureProjectRegion as X, validateVariables as Y, registerProjectRegionFromProject as Z, formatProjectNameForDisplay as _, PROJECT_NAME_MAX_LENGTH as a, MAX_PASSWORD_LENGTH as at, mapApiKeysFromResponse as b, createPlatformForProject as c, PASSWORD_STRENGTH_STANDARDS as ct, fetchApiKey as d, findMatchingPasswordStrengthPreset as dt, fetchProjectById as et, fetchApiKeys as f, policiesEqual as ft, fetchProjectsByIds as g, fetchProjectVariables as h, PROJECT_NAME_DISPLAY_MAX_WIDE as i, servicesRecordFromProject as it, useCreatePlatform as j, useApiKeys as k, deleteProject as l, checkStandardCompliance as lt, fetchProject as m, PROJECT_NAME_DISPLAY_MAX_COMPACT as n, projectAuthSecurityQueryOptions as nt, activeProjectsQueryOptions as o, MIN_PASSWORD_LENGTH as ot, fetchPlatforms as p, validatePasswordAgainstPolicy as pt, useUpdateProjectVariable as q, PROJECT_NAME_DISPLAY_MAX_SELECTOR as r, protocolsRecordFromProject as rt, apiKeysQueryOptions as s, PASSWORD_STRENGTH_PRESETS as st, PROJECT_NAME_DISPLAY_MAX as t, patchProjectProtocolsInCache as tt, fetchActiveProjects as u, clampPasswordMinLength as ut, getProjectListItemEndpoint as v, platformsQueryOptions as w, mapProjectToListItem as x, getProjectNameDisplayTitle as y, useProjectListPlatforms as z };
