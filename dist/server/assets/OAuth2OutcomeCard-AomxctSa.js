import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { n as listConsoleProjects } from "./console-projects-C0b0tMaH.js";
import { j as fetchOrganizations } from "./organizations-BKtnlNrj.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { i as getEffectiveMcpEndpointUrl } from "./debug-mcp-endpoint-B4hkK2QF.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as normalizeHostnameForFavicon } from "./hostname-favicon-C9NpbUP-.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { Query } from "@appwrite.io/console";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeftRight, Building2, Check, ChevronDown, ChevronUp, CircleAlert, Copy, Folder, IdCard, KeyRound, Loader2, Lock, Mail, Package, Pencil, Plus, ShieldCheck, SlidersHorizontal, Smartphone, TriangleAlert, User, X } from "lucide-react";
function appFaviconUrl(app) {
	const candidates = [app.clientUri, ...app.redirectUris ?? []];
	for (const candidate of candidates) {
		if (!candidate?.trim()) continue;
		const host = normalizeHostnameForFavicon(candidate);
		if (!host) continue;
		return sdk.forConsole.avatars.getFavicon({ url: `https://${host}` });
	}
	return null;
}
function OAuth2AppAvatar({ app, className }) {
	const [logoFailed, setLogoFailed] = useState(false);
	const [faviconFailed, setFaviconFailed] = useState(false);
	const faviconSrc = useMemo(() => app ? appFaviconUrl(app) : null, [app]);
	const frameClassName = cn("bg-muted text-muted-foreground flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-border/50", className);
	if (app?.logoUri && !logoFailed) return /* @__PURE__ */ jsx("img", {
		src: app.logoUri,
		alt: app.name,
		className: cn("size-14 shrink-0 rounded-xl object-cover ring-1 ring-border/50", className),
		height: 56,
		width: 56,
		onError: () => setLogoFailed(true)
	});
	if (faviconSrc && !faviconFailed) return /* @__PURE__ */ jsx("div", {
		className: frameClassName,
		children: /* @__PURE__ */ jsx("img", {
			src: faviconSrc,
			alt: app?.name ?? "",
			className: "size-full object-contain p-2",
			height: 56,
			width: 56,
			onError: () => setFaviconFailed(true)
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: frameClassName,
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Package, { className: "size-6" })
	});
}
const PROJECT_ALL_SCOPE = "project:all";
const ORGANIZATION_ALL_SCOPE = "organization:all";
const PROJECT_SCOPE_PREFIX = "project:";
const ORGANIZATION_SCOPE_PREFIX = "organization:";
const IDENTITY_SCOPES = [
	"openid",
	"profile",
	"email",
	"phone"
];
const FULL_ACCESS_SCOPE = {
	id: "all",
	title: "Full access to your account",
	description: "Manage all your organizations, projects, and their resources on your behalf.",
	icon: ShieldCheck
};
var BUILTIN_SCOPES = {
	openid: {
		title: "Verify your identity",
		description: "Confirm who you are using your Appwrite account.",
		icon: IdCard
	},
	profile: {
		title: "View your profile",
		description: "Read your name and profile details.",
		icon: User
	},
	email: {
		title: "View your email address",
		description: "Read your account's email address.",
		icon: Mail
	},
	phone: {
		title: "View your phone number",
		description: "Read your account's phone number.",
		icon: Smartphone
	},
	["all"]: {
		title: FULL_ACCESS_SCOPE.title,
		description: FULL_ACCESS_SCOPE.description,
		icon: ShieldCheck
	}
};
function titleizeScope(scope) {
	const cleaned = scope.replace(/[._:-]+/g, " ").trim();
	if (!cleaned) return scope;
	return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}
function describeScope(scope) {
	const builtin = BUILTIN_SCOPES[scope];
	if (builtin) return {
		id: scope,
		...builtin
	};
	return {
		id: scope,
		title: titleizeScope(scope),
		description: `Access to ${scope}.`,
		icon: KeyRound
	};
}
function collectTier(scopes, prefix, allScope) {
	let all = false;
	const seen = /* @__PURE__ */ new Set();
	const collected = [];
	for (const scope of scopes) {
		if (scope === allScope) {
			all = true;
			continue;
		}
		if (scope.startsWith(prefix)) {
			const rest = scope.slice(prefix.length);
			if (rest && !seen.has(rest)) {
				seen.add(rest);
				collected.push(rest);
			}
		}
	}
	return {
		all,
		scopes: collected
	};
}
function splitConsentScopes(scopes) {
	const requested = new Set(scopes);
	return {
		identity: IDENTITY_SCOPES.filter((scope) => requested.has(scope)).map(describeScope),
		all: requested.has("all") ? describeScope("all") : null,
		project: collectTier(scopes, PROJECT_SCOPE_PREFIX, PROJECT_ALL_SCOPE),
		organization: collectTier(scopes, ORGANIZATION_SCOPE_PREFIX, ORGANIZATION_ALL_SCOPE)
	};
}
var PROJECT_RESOURCE_COPY = {
	project: {
		name: "Project settings",
		desc: "This project's general settings, name, and configuration."
	},
	keys: {
		name: "API keys",
		desc: "API keys that grant server-side access to this project's resources."
	},
	platforms: {
		name: "Platforms",
		desc: "The web, mobile, and native app platforms registered with this project."
	},
	mocks: {
		name: "Mock numbers",
		desc: "Mock phone numbers used to test phone authentication flows."
	},
	"project.policies": {
		name: "Project policies",
		desc: "This project's security and access policies."
	},
	policies: {
		name: "Policies",
		desc: "Legacy access to this project's security and backup policies."
	},
	"project.oauth2": {
		name: "OAuth2 configuration",
		desc: "This project's OAuth2 authorization server configuration."
	},
	templates: {
		name: "Templates",
		desc: "The project's customizable email and SMS message templates."
	},
	stages: {
		name: "Stages",
		desc: "Deployment stages used to promote changes across environments."
	},
	oauth2: {
		name: "OAuth2",
		desc: "This project's OAuth2 provider configuration and token introspection."
	},
	users: {
		name: "Users",
		desc: "End-user accounts, including their profiles, preferences, and identifiers."
	},
	sessions: {
		name: "Sessions",
		desc: "Active login sessions belonging to this project's users."
	},
	teams: {
		name: "Teams",
		desc: "Teams and their memberships, used to group and organize users."
	},
	databases: {
		name: "Databases",
		desc: "Databases and their overall configuration within this project."
	},
	tables: {
		name: "Tables",
		desc: "Database tables along with their columns, indexes, and structure."
	},
	columns: {
		name: "Columns",
		desc: "The columns that define the structure of your database tables."
	},
	indexes: {
		name: "Indexes",
		desc: "The indexes that speed up queries against your database tables."
	},
	rows: {
		name: "Rows",
		desc: "The individual rows of data stored inside your database tables."
	},
	collections: {
		name: "Collections",
		desc: "Legacy database collections and their structure, replaced by tables."
	},
	attributes: {
		name: "Attributes",
		desc: "Legacy collection attributes that define document structure, replaced by columns."
	},
	documents: {
		name: "Documents",
		desc: "Legacy documents stored inside your collections, replaced by rows."
	},
	buckets: {
		name: "Storage buckets",
		desc: "Storage buckets and their file-level permission and security settings."
	},
	files: {
		name: "Files",
		desc: "Files stored in your buckets, including uploads, downloads, and previews."
	},
	tokens: {
		name: "File tokens",
		desc: "Access tokens that grant shareable links to individual storage files."
	},
	functions: {
		name: "Functions",
		desc: "Serverless functions along with their code deployments and configuration."
	},
	executions: {
		name: "Executions",
		desc: "The execution history and logs of your serverless functions."
	},
	execution: {
		name: "Executions (legacy)",
		desc: "Legacy access to function executions, replaced by Executions."
	},
	sites: {
		name: "Sites",
		desc: "Hosted sites and their deployments, builds, and configuration."
	},
	log: {
		name: "Site logs",
		desc: "Runtime and build logs produced by your sites."
	},
	providers: {
		name: "Messaging providers",
		desc: "Messaging providers used to send email, SMS, and push notifications."
	},
	topics: {
		name: "Topics",
		desc: "Messaging topics that group subscribers for targeted broadcasts."
	},
	subscribers: {
		name: "Subscribers",
		desc: "Subscribers enrolled in your messaging topics."
	},
	targets: {
		name: "Targets",
		desc: "The delivery targets (email, phone, or device) attached to your users."
	},
	messages: {
		name: "Messages",
		desc: "Email, SMS, and push messages, including drafts and delivery status."
	},
	rules: {
		name: "Proxy rules",
		desc: "Proxy rules that route custom domains to this project's resources."
	},
	webhooks: {
		name: "Webhooks",
		desc: "Webhooks that notify external services when project events occur."
	},
	locale: {
		name: "Locale",
		desc: "The Locale service for reading locale, language, and geo information."
	},
	avatars: {
		name: "Avatars",
		desc: "The Avatars service for generating avatars, icons, flags, and QR codes."
	},
	health: {
		name: "Health",
		desc: "The health and operational status of this project's services."
	},
	assistant: {
		name: "AI Assistant",
		desc: "Legacy AI Assistant scope. Prefer agent scopes for the console Agent."
	},
	agent: {
		name: "Agent",
		desc: "The console Agent that suggests answers and configuration."
	},
	migrations: {
		name: "Migrations",
		desc: "Data migrations that import from or export to other projects."
	},
	schedules: {
		name: "Schedules",
		desc: "Scheduled tasks that run functions or messages at set times."
	},
	vcs: {
		name: "Git",
		desc: "Connected Git repositories used to deploy functions and sites."
	},
	insights: {
		name: "Advisor insights",
		desc: "Advisor insights that surface recommendations for your project."
	},
	reports: {
		name: "Advisor reports",
		desc: "Advisor reports generated from your project's activity."
	},
	presences: {
		name: "Presence",
		desc: "Realtime presence data showing which users are currently online."
	},
	"backups.policies": {
		name: "Backup policies",
		desc: "Policies that define when and how your data is backed up."
	},
	archives: {
		name: "Backup archives",
		desc: "Backup archives captured from this project's data."
	},
	restorations: {
		name: "Restorations",
		desc: "Restore operations that recover data from backup archives."
	},
	dedicatedDatabases: {
		name: "Dedicated SQL",
		desc: "Direct SQL access to run statements against dedicated databases."
	},
	domains: {
		name: "Domains",
		desc: "Custom domains connected to this project."
	},
	events: {
		name: "Events",
		desc: "The realtime and system events emitted by this project."
	},
	apps: {
		name: "OAuth2 apps",
		desc: "OAuth2 applications registered to authorize against this project."
	},
	usage: {
		name: "Usage",
		desc: "Usage statistics and metrics for this project's resources."
	}
};
var ORGANIZATION_RESOURCE_COPY = {
	projects: {
		name: "Projects",
		desc: "The names, IDs, and settings of this organization's projects, but not the data inside them."
	},
	"organization.keys": {
		name: "Organization keys",
		desc: "Organization-level API keys that authorize access across projects."
	},
	keys: {
		name: "Organization keys (legacy)",
		desc: "Legacy access to organization API keys, replaced by Organization keys."
	},
	devKeys: {
		name: "Development keys",
		desc: "Development keys used to bypass rate limits while building locally."
	},
	"organization.memberships": {
		name: "Organization memberships",
		desc: "Memberships that control who belongs to this organization and their roles."
	},
	organization: {
		name: "Organization",
		desc: "This organization's name, settings, and other general configuration."
	},
	domains: {
		name: "Organization domains",
		desc: "Custom domains owned and managed at the organization level."
	}
};
function actionRank(action) {
	if (action === "read") return 0;
	if (action === "write") return 1;
	return 2;
}
function scopeAction(scope) {
	const dot = scope.lastIndexOf(".");
	return dot === -1 ? scope : scope.slice(dot + 1);
}
function scopeResource(scope) {
	const dot = scope.lastIndexOf(".");
	return dot === -1 ? scope : scope.slice(0, dot);
}
var actionOf = scopeAction;
var resourceOf = scopeResource;
function accessRank(actions) {
	const set = new Set(actions);
	const read = set.has("read");
	const write = set.has("write");
	if (read && write) return 0;
	if (write) return 1;
	if (read) return 3;
	return 2;
}
function describeResource(resource, actions, copyMap) {
	const copy = copyMap[resource];
	const title = copy?.name ?? titleizeScope(resource);
	const description = copy?.desc;
	const set = new Set(actions);
	const read = set.has("read");
	const write = set.has("write");
	let access;
	let accessStrong;
	if (read && write) {
		access = "Read + Write";
		accessStrong = true;
	} else if (write) {
		access = "Write";
		accessStrong = true;
	} else if (read) {
		access = "Read";
		accessStrong = false;
	} else {
		access = actions[0] ? titleizeScope(actions[0]) : "Access";
		accessStrong = true;
	}
	return {
		title,
		description,
		access,
		accessStrong
	};
}
function tierLines(tier, prefix, allScope, copyMap) {
	const lines = [];
	if (tier.all) {
		const isProject = prefix === PROJECT_SCOPE_PREFIX;
		lines.push({
			title: isProject ? "Full project access" : "Full organization access",
			description: `Grant every available permission on the selected ${isProject ? "projects" : "organizations"}.`,
			token: allScope
		});
	}
	const groups = /* @__PURE__ */ new Map();
	const order = [];
	for (const scope of tier.scopes) {
		const resource = resourceOf(scope);
		if (!groups.has(resource)) {
			groups.set(resource, []);
			order.push(resource);
		}
		groups.get(resource).push(scope);
	}
	const rows = order.map((resource) => {
		const scopes = groups.get(resource).slice().sort((a, b) => actionRank(actionOf(a)) - actionRank(actionOf(b)));
		const actions = scopes.map(actionOf);
		const described = describeResource(resource, actions, copyMap);
		return {
			resource,
			actions,
			line: {
				title: described.title,
				description: described.description,
				token: scopes.map((scope) => prefix + scope).join(" "),
				access: described.access,
				accessStrong: described.accessStrong
			}
		};
	});
	rows.sort((a, b) => accessRank(a.actions) - accessRank(b.actions));
	for (const row of rows) lines.push(row.line);
	return lines;
}
function buildConsentPermissions(model) {
	const groups = [];
	const accountLines = [];
	if (model.identity.length > 0) accountLines.push({
		title: "View your identity",
		description: "Confirm who you are and read your basic profile details.",
		token: model.identity.map((scope) => scope.id).join(" ")
	});
	if (model.all) accountLines.push({
		title: model.all.title,
		description: model.all.description,
		token: model.all.id
	});
	if (accountLines.length > 0) groups.push({
		heading: "Account",
		lines: accountLines
	});
	const projectLines = tierLines(model.project, PROJECT_SCOPE_PREFIX, PROJECT_ALL_SCOPE, PROJECT_RESOURCE_COPY);
	if (projectLines.length > 0) groups.push({
		heading: "Projects",
		note: "Applies only to the projects you select below.",
		collapsible: true,
		lines: projectLines
	});
	const organizationLines = tierLines(model.organization, ORGANIZATION_SCOPE_PREFIX, ORGANIZATION_ALL_SCOPE, ORGANIZATION_RESOURCE_COPY);
	if (organizationLines.length > 0) groups.push({
		heading: "Organizations",
		note: "Applies only to the organizations you select below.",
		collapsible: true,
		lines: organizationLines
	});
	return groups;
}
function buildTierEditorRows(tier, prefix) {
	const copyMap = prefix === "project:" ? PROJECT_RESOURCE_COPY : ORGANIZATION_RESOURCE_COPY;
	const groups = /* @__PURE__ */ new Map();
	const order = [];
	for (const scope of tier.scopes) {
		const resource = resourceOf(scope);
		if (!groups.has(resource)) {
			groups.set(resource, []);
			order.push(resource);
		}
		groups.get(resource).push(scope);
	}
	return order.map((resource) => {
		const actions = groups.get(resource).slice().sort((a, b) => actionRank(actionOf(a)) - actionRank(actionOf(b))).map(actionOf);
		const { title, description, access, accessStrong } = describeResource(resource, actions, copyMap);
		return {
			resource,
			title,
			description,
			actions,
			hasRead: actions.includes("read"),
			hasWrite: actions.includes("write"),
			access,
			accessStrong
		};
	});
}
function normalizeResourceUrl(url) {
	return url.trim().replace(/\/+$/, "");
}
function mcpResourceUrlsForEndpoint(mcpUrl) {
	const normalized = normalizeResourceUrl(mcpUrl);
	if (!normalized) return [];
	const aliases = new Set([normalized]);
	try {
		const url = new URL(normalized);
		aliases.add(url.origin);
		const path = url.pathname.replace(/\/+$/, "") || "/";
		if (path === "/") aliases.add(`${url.origin}/mcp`);
		else if (path === "/mcp") aliases.add(url.origin);
	} catch {}
	return [...aliases];
}
function mcpResourceUrls() {
	return mcpResourceUrlsForEndpoint(getEffectiveMcpEndpointUrl());
}
function isMcpResource(resources, urls = mcpResourceUrls()) {
	const known = new Set(urls.map(normalizeResourceUrl));
	return resources.some((resource) => typeof resource === "string" && known.has(normalizeResourceUrl(resource)));
}
function isMcpGrant(grant, urls) {
	return isMcpResource(grant.resources ?? [], urls ?? mcpResourceUrls());
}
function tierEmission(tier, selection, readOnly) {
	const tokens = [];
	for (const token of tier.scopes) {
		const resource = scopeResource(token);
		const action = scopeAction(token);
		const row = selection[resource] ?? {
			selected: true,
			level: "full"
		};
		if (!row.selected) continue;
		if ((readOnly ? "read" : row.level) === "read" && action !== "read") continue;
		tokens.push(token);
	}
	return {
		tokens,
		full: tokens.length === tier.scopes.length
	};
}
function composeGrantedScopes(input) {
	const { model, readOnly, resourcesNarrowed } = input;
	const project = tierEmission(model.project, input.project, readOnly);
	const organization = tierEmission(model.organization, input.organization, readOnly);
	if (project.full && organization.full && !readOnly && !resourcesNarrowed) return {
		scope: void 0,
		untouched: true,
		blocked: false,
		lengthCollapsed: false
	};
	const tierScopes = (tier, emission, prefix, umbrella) => {
		if ((tier.all || tier.scopes.length > 0) && emission.full && tier.all && !readOnly) return [umbrella];
		return emission.tokens.map((token) => prefix + token);
	};
	let projectScopes = tierScopes(model.project, project, PROJECT_SCOPE_PREFIX, PROJECT_ALL_SCOPE);
	let organizationScopes = tierScopes(model.organization, organization, ORGANIZATION_SCOPE_PREFIX, ORGANIZATION_ALL_SCOPE);
	const identity = model.identity.map((scope) => scope.id);
	const join = () => [
		...identity,
		...projectScopes,
		...organizationScopes
	].join(" ");
	let lengthCollapsed = false;
	if (!readOnly && join().length > 8192) {
		if (projectScopes.join(" ").length >= organizationScopes.join(" ").length && model.project.all) {
			projectScopes = [PROJECT_ALL_SCOPE];
			lengthCollapsed = true;
		} else if (model.organization.all) {
			organizationScopes = [ORGANIZATION_ALL_SCOPE];
			lengthCollapsed = true;
		}
		if (join().length > 8192 && model.project.all) {
			projectScopes = [PROJECT_ALL_SCOPE];
			lengthCollapsed = true;
		}
	}
	while (join().length > 8192 && projectScopes.length + organizationScopes.length > 0) {
		(projectScopes.join(" ").length >= organizationScopes.join(" ").length ? projectScopes.length > 0 ? projectScopes : organizationScopes : organizationScopes.length > 0 ? organizationScopes : projectScopes).pop();
		lengthCollapsed = true;
	}
	const blocked = projectScopes.length === 0 && organizationScopes.length === 0;
	return {
		scope: join(),
		untouched: false,
		blocked,
		lengthCollapsed
	};
}
const PROJECT_RAR_TYPE = "project";
const ORGANIZATION_RAR_TYPE = "organization";
var RESERVED_CONSOLE_PROJECT = "console";
function parseAuthorizationDetails(raw) {
	if (!raw) return [];
	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function identifiersOf(detail) {
	if (!Array.isArray(detail.identifiers)) return [];
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const identifier of detail.identifiers) if (typeof identifier === "string" && identifier !== "" && !seen.has(identifier)) {
		seen.add(identifier);
		out.push(identifier);
	}
	return out;
}
function mergeIdentifiers(details, type) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const detail of details) {
		if (detail.type !== type) continue;
		for (const identifier of identifiersOf(detail)) {
			if (type === "project" && identifier === RESERVED_CONSOLE_PROJECT) continue;
			if (seen.has(identifier)) continue;
			seen.add(identifier);
			out.push(identifier);
		}
	}
	return out;
}
function serializeGrantedDetails(granted) {
	const out = [];
	if (granted.project && granted.project.length > 0) out.push({
		type: PROJECT_RAR_TYPE,
		identifiers: granted.project
	});
	if (granted.organization && granted.organization.length > 0) out.push({
		type: ORGANIZATION_RAR_TYPE,
		identifiers: granted.organization
	});
	return JSON.stringify(out);
}
function idOnlyMap(ids) {
	const map = /* @__PURE__ */ new Map();
	for (const id of ids) map.set(id, {
		id,
		name: id,
		resolved: false
	});
	return map;
}
var SEARCH_LIMIT = 8;
var SEARCH_ORG_SCAN = 20;
async function resolveProjectNames(ids) {
	const map = idOnlyMap(ids);
	if (ids.length === 0) return map;
	try {
		const orgs = await fetchOrganizations();
		const results = await Promise.allSettled((orgs.teams ?? []).map((org) => listConsoleProjects({ queries: [
			Query.equal("teamId", org.$id),
			Query.equal("$id", ids),
			Query.select([
				"$id",
				"name",
				"region",
				"teamId"
			]),
			Query.limit(ids.length)
		] })));
		for (const result of results) {
			if (result.status !== "fulfilled") continue;
			for (const project of result.value.projects ?? []) map.set(project.$id, {
				id: project.$id,
				name: project.name,
				region: project.region,
				resolved: true
			});
		}
	} catch {}
	return map;
}
async function resolveOrganizationNames(ids) {
	const map = idOnlyMap(ids);
	if (ids.length === 0) return map;
	try {
		const orgs = await fetchOrganizations();
		for (const org of orgs.teams ?? []) if (map.has(org.$id)) map.set(org.$id, {
			id: org.$id,
			name: org.name,
			resolved: true
		});
	} catch {}
	return map;
}
async function searchProjects(term) {
	try {
		const scanned = ((await fetchOrganizations()).teams ?? []).slice(0, SEARCH_ORG_SCAN);
		const trimmed = term.trim();
		const results = await Promise.allSettled(scanned.map((org) => {
			const queries = [
				Query.equal("teamId", org.$id),
				Query.select([
					"$id",
					"name",
					"region",
					"teamId"
				]),
				Query.limit(SEARCH_LIMIT)
			];
			if (trimmed !== "") queries.unshift(Query.startsWith("name", trimmed));
			return listConsoleProjects({ queries });
		}));
		const seen = /* @__PURE__ */ new Set();
		const out = [];
		for (const result of results) {
			if (result.status !== "fulfilled") continue;
			for (const project of result.value.projects ?? []) {
				if (project.$id === RESERVED_CONSOLE_PROJECT || seen.has(project.$id)) continue;
				seen.add(project.$id);
				out.push({
					id: project.$id,
					name: project.name,
					region: project.region,
					resolved: true
				});
				if (out.length >= SEARCH_LIMIT) return out;
			}
		}
		return out;
	} catch {
		return [];
	}
}
async function listOrganizationResources() {
	try {
		return ((await fetchOrganizations()).teams ?? []).map((org) => ({
			id: org.$id,
			name: org.name,
			resolved: true
		}));
	} catch {
		return [];
	}
}
function isWebRedirect(uri) {
	try {
		const protocol = new URL(uri).protocol;
		return protocol === "http:" || protocol === "https:";
	} catch {
		return false;
	}
}
var WILDCARD = "*";
function OAuth2ResourceSelector({ pluralLabel, requested, selected, onSelectedChange, find, resolveNames, disabled = false }) {
	const t = useT();
	const [expanded, setExpanded] = useState(false);
	const [names, setNames] = useState({});
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [searching, setSearching] = useState(false);
	const wildcard = requested.includes(WILDCARD);
	const isAll = selected.includes(WILDCARD);
	const specificIds = useMemo(() => selected.filter((id) => id !== WILDCARD), [selected]);
	const isEmpty = !isAll && specificIds.length === 0;
	const isDefault = selected.length === requested.length && selected.every((id) => requested.includes(id));
	const searchable = wildcard && !isAll;
	const labelFor = (id) => names[id] ?? {
		id,
		name: id,
		resolved: false
	};
	useEffect(() => {
		const ids = requested.filter((id) => id !== WILDCARD);
		if (ids.length === 0) return;
		let cancelled = false;
		resolveNames(ids).then((map) => {
			if (cancelled) return;
			setNames((prev) => {
				const next = { ...prev };
				for (const [id, resource] of map) next[id] = resource;
				return next;
			});
		});
		return () => {
			cancelled = true;
		};
	}, [requested.join(",")]);
	const findRef = useRef(find);
	findRef.current = find;
	useEffect(() => {
		if (!expanded || !searchable) return;
		let cancelled = false;
		setSearching(true);
		const handle = setTimeout(() => {
			findRef.current(term).then((found) => {
				if (cancelled) return;
				setResults(found);
				setNames((prev) => {
					const next = { ...prev };
					for (const resource of found) next[resource.id] = resource;
					return next;
				});
				setSearching(false);
			});
		}, 250);
		return () => {
			cancelled = true;
			clearTimeout(handle);
		};
	}, [
		term,
		expanded,
		searchable
	]);
	const suggestions = results.filter((r) => !selected.includes(r.id));
	const setAll = (all) => onSelectedChange(all ? [WILDCARD] : []);
	const add = (id) => onSelectedChange([...selected.filter((x) => x !== WILDCARD), id]);
	const remove = (id) => onSelectedChange(selected.filter((x) => x !== id));
	const summary = useMemo(() => {
		if (isAll) return `${t("All")} ${pluralLabel}`;
		if (specificIds.length === 0) return `${t("No")} ${pluralLabel} ${t("selected")}`;
		if (specificIds.length <= 2) return specificIds.map((id) => labelFor(id).name).join(", ");
		return `${specificIds.length} ${pluralLabel}`;
	}, [
		isAll,
		specificIds,
		names,
		pluralLabel
	]);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex min-w-0 items-center gap-1.5 text-[13px]", isEmpty && "text-muted-foreground"),
			children: [
				isEmpty && /* @__PURE__ */ jsx(CircleAlert, { className: "size-4 shrink-0" }),
				/* @__PURE__ */ jsx("span", {
					className: "truncate font-medium",
					children: summary
				}),
				isDefault && /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "ms-1 text-[10px] shrink-0",
					children: t("Default")
				})
			]
		}), /* @__PURE__ */ jsxs("button", {
			type: "button",
			disabled,
			onClick: () => setExpanded((v) => !v),
			className: cn("text-muted-foreground hover:text-foreground flex shrink-0 cursor-pointer items-center gap-1 text-xs font-medium disabled:opacity-50", expanded && "text-foreground"),
			children: [expanded ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" }), expanded ? t("Done") : t("Change")]
		})]
	}), expanded && /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 pt-3",
		children: [
			wildcard && /* @__PURE__ */ jsxs("div", {
				role: "group",
				className: "bg-muted flex rounded-md p-0.5 text-xs font-medium",
				children: [/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => setAll(true),
					className: cn("flex-1 cursor-pointer rounded px-2 py-1.5 transition", isAll ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"),
					children: [
						t("All"),
						" ",
						pluralLabel
					]
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => setAll(false),
					className: cn("flex-1 cursor-pointer rounded px-2 py-1.5 transition", !isAll ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"),
					children: [
						t("Specific"),
						" ",
						pluralLabel
					]
				})]
			}),
			specificIds.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-1.5",
				children: specificIds.map((id) => {
					const r = labelFor(id);
					return /* @__PURE__ */ jsxs("span", {
						className: "bg-muted flex items-center gap-1 rounded-md py-1 pe-1 ps-2 text-xs",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: cn(!r.resolved && "font-mono"),
								children: r.name
							}),
							r.region && /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground bg-background rounded px-1 text-[0.6rem] uppercase",
								children: r.region
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": `${t("Remove")} ${r.name}`,
								onClick: () => remove(id),
								className: "text-muted-foreground hover:text-foreground cursor-pointer",
								children: /* @__PURE__ */ jsx(X, { className: "size-3" })
							})
						]
					}, id);
				})
			}),
			searchable && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx(Input, {
					value: term,
					onChange: (e) => setTerm(e.target.value),
					placeholder: `${t("Search")} ${pluralLabel} ${t("by name")}...`,
					disabled,
					className: "h-8 text-sm"
				}), /* @__PURE__ */ jsx("ul", {
					className: "max-h-48 space-y-1 overflow-y-auto",
					children: searching ? /* @__PURE__ */ jsx("li", {
						className: "text-muted-foreground flex items-center justify-center gap-2 py-3 text-xs",
						children: /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" })
					}) : suggestions.length === 0 ? /* @__PURE__ */ jsx("li", {
						className: "text-muted-foreground py-3 text-center text-xs",
						children: term.trim() ? `${t("No matching")} ${pluralLabel}` : `${t("Type to search")} ${pluralLabel}`
					}) : suggestions.map((r) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => add(r.id),
						className: "hover:bg-muted flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "min-w-0 flex-1 truncate",
								children: r.name
							}),
							r.region && /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground bg-muted rounded px-1 text-[0.6rem] uppercase",
								children: r.region
							}),
							/* @__PURE__ */ jsx(Plus, { className: "text-muted-foreground size-3.5 shrink-0" })
						]
					}) }, r.id))
				})]
			})
		]
	})] });
}
function hostnameOf(uri) {
	try {
		return new URL(uri).hostname;
	} catch {
		return null;
	}
}
function OAuth2ConsentCard({ grant, app, accountLabel, flow, onDone, onSwitchAccount, preview = false }) {
	const t = useT();
	const [error, setError] = useState(null);
	const [showPermissions, setShowPermissions] = useState(true);
	const [permissionGroupOpen, setPermissionGroupOpen] = useState({});
	const [copiedToken, setCopiedToken] = useState(null);
	const copyTimer = useRef(null);
	const [projectSelected, setProjectSelected] = useState([]);
	const [organizationSelected, setOrganizationSelected] = useState([]);
	const [customize, setCustomize] = useState(false);
	const [readOnlyAll, setReadOnlyAll] = useState(false);
	const [projectSelection, setProjectSelection] = useState({});
	const [organizationSelection, setOrganizationSelection] = useState({});
	const [projectPermissionsOpen, setProjectPermissionsOpen] = useState(true);
	const [organizationPermissionsOpen, setOrganizationPermissionsOpen] = useState(true);
	const scopeModel = useMemo(() => splitConsentScopes(grant.scopes ?? []), [grant.scopes]);
	const details = useMemo(() => parseAuthorizationDetails(grant.authorizationDetails), [grant.authorizationDetails]);
	const permissionGroups = useMemo(() => buildConsentPermissions(scopeModel), [scopeModel]);
	const canNarrow = useMemo(() => isMcpGrant(grant), [grant]);
	const projectRows = useMemo(() => canNarrow ? buildTierEditorRows(scopeModel.project, PROJECT_SCOPE_PREFIX) : [], [canNarrow, scopeModel.project]);
	const organizationRows = useMemo(() => canNarrow ? buildTierEditorRows(scopeModel.organization, ORGANIZATION_SCOPE_PREFIX) : [], [canNarrow, scopeModel.organization]);
	const projectScopesRequested = scopeModel.project.all || scopeModel.project.scopes.length > 0;
	const organizationScopesRequested = scopeModel.organization.all || scopeModel.organization.scopes.length > 0;
	const projectIdentifiers = useMemo(() => {
		const merged = mergeIdentifiers(details, PROJECT_RAR_TYPE);
		if (merged.length > 0) return merged;
		return projectScopesRequested ? ["*"] : [];
	}, [details, projectScopesRequested]);
	const organizationIdentifiers = useMemo(() => {
		const merged = mergeIdentifiers(details, ORGANIZATION_RAR_TYPE);
		if (merged.length > 0) return merged;
		return organizationScopesRequested ? ["*"] : [];
	}, [details, organizationScopesRequested]);
	const projectRequested = projectScopesRequested && projectIdentifiers.length > 0;
	const organizationRequested = organizationScopesRequested && organizationIdentifiers.length > 0;
	const redirectHost = hostnameOf(grant.redirectUri);
	const accountInitial = (accountLabel || "?").charAt(0).toUpperCase();
	useEffect(() => {
		setProjectSelected([...projectIdentifiers]);
		setOrganizationSelected([...organizationIdentifiers]);
		setCustomize(false);
		setReadOnlyAll(false);
		setProjectSelection({});
		setOrganizationSelection({});
		setProjectPermissionsOpen(true);
		setOrganizationPermissionsOpen(true);
		setPermissionGroupOpen({});
	}, [grant.$id]);
	function sameIdentifiers(a, b) {
		return a.length === b.length && a.every((id) => b.includes(id));
	}
	const resourcesNarrowed = !sameIdentifiers(projectSelected, projectIdentifiers) || !sameIdentifiers(organizationSelected, organizationIdentifiers);
	const composed = useMemo(() => canNarrow ? composeGrantedScopes({
		model: scopeModel,
		project: projectSelection,
		organization: organizationSelection,
		readOnly: readOnlyAll,
		resourcesNarrowed
	}) : null, [
		canNarrow,
		scopeModel,
		projectSelection,
		organizationSelection,
		readOnlyAll,
		resourcesNarrowed
	]);
	function rowState(selection, resource) {
		return selection[resource] ?? {
			selected: true,
			level: "full"
		};
	}
	function updateRow(tier, resource, patch) {
		const selection = tier === "project" ? projectSelection : organizationSelection;
		const next = {
			...selection,
			[resource]: {
				...rowState(selection, resource),
				...patch
			}
		};
		if (tier === "project") setProjectSelection(next);
		else setOrganizationSelection(next);
	}
	function setAllRows(tier, rows, selected) {
		const selection = tier === "project" ? projectSelection : organizationSelection;
		const next = {};
		for (const row of rows) next[row.resource] = {
			selected,
			level: rowState(selection, row.resource).level
		};
		if (tier === "project") setProjectSelection(next);
		else setOrganizationSelection(next);
	}
	function tierAllSelected(rows, selection) {
		return rows.every((row) => rowState(selection, row.resource).selected);
	}
	const projectGranted = projectRequested && projectSelected.length > 0;
	const organizationGranted = organizationRequested && organizationSelected.length > 0;
	const projectNeedsResource = projectRequested && projectSelected.length === 0;
	const organizationNeedsResource = organizationRequested && organizationSelected.length === 0;
	const nothingToGrant = scopeModel.identity.length === 0 && !scopeModel.all && !projectGranted && !organizationGranted;
	const nothingSelected = composed?.blocked ?? false;
	const blocked = nothingToGrant || projectNeedsResource || organizationNeedsResource || nothingSelected;
	const orgCache = useRef(null);
	const findProjects = (term) => searchProjects(term);
	const findOrganizations = async (term) => {
		if (orgCache.current === null) orgCache.current = await listOrganizationResources();
		const trimmed = term.trim().toLowerCase();
		const all = orgCache.current;
		return (trimmed ? all.filter((r) => r.name.toLowerCase().includes(trimmed)) : all).slice(0, 8);
	};
	const resolveProjects = (ids) => resolveProjectNames(ids);
	const resolveOrganizations = (ids) => resolveOrganizationNames(ids);
	const summary = useMemo(() => {
		const parts = [];
		if (scopeModel.identity.length > 0) parts.push(t("view your identity"));
		if (scopeModel.all) parts.push(t("fully manage your Appwrite account"));
		if (projectRequested) parts.push(t("access the projects you choose"));
		if (organizationRequested) parts.push(t("manage the organizations you choose"));
		if (parts.length === 0) return `${app.name} ${t("is requesting access to your Appwrite account.")}`;
		let joined;
		if (parts.length === 1) joined = parts[0];
		else joined = `${parts.slice(0, -1).join(", ")} ${t("and")} ${parts[parts.length - 1]}`;
		return `${t("This will allow")} ${app.name} ${t("to")} ${joined}.`;
	}, [
		scopeModel,
		projectRequested,
		organizationRequested,
		app.name,
		t
	]);
	const copyToken = (token) => {
		if (!navigator.clipboard) return;
		navigator.clipboard.writeText(token).then(() => {
			setCopiedToken(token);
			if (copyTimer.current) clearTimeout(copyTimer.current);
			copyTimer.current = setTimeout(() => setCopiedToken(null), 1500);
		});
	};
	useEffect(() => () => {
		if (copyTimer.current) clearTimeout(copyTimer.current);
	}, []);
	const approveMutation = useMutation({
		mutationFn: async () => {
			if (preview) return { redirectUrl: flow === "device" ? void 0 : grant.redirectUri || "https://example.com/callback" };
			const authorizationDetails = projectRequested || organizationRequested ? canNarrow && !resourcesNarrowed ? void 0 : serializeGrantedDetails({
				project: projectGranted ? projectSelected : void 0,
				organization: organizationGranted ? organizationSelected : void 0
			}) : void 0;
			return sdk.forConsole.oauth2.approve({
				grantId: grant.$id,
				scope: composed?.scope,
				authorizationDetails
			});
		},
		onSuccess: (result) => {
			if (preview || flow === "device" || !result.redirectUrl) {
				onDone?.("approved", result.redirectUrl);
				return;
			}
			window.location.assign(result.redirectUrl);
			if (!isWebRedirect(result.redirectUrl)) onDone?.("approved", result.redirectUrl);
		},
		onError: (e) => {
			const message = getErrorMessage(e, t("Failed to authorize the application"));
			setError(message);
			toast.error(message);
		}
	});
	const rejectMutation = useMutation({
		mutationFn: async () => {
			if (preview) return { redirectUrl: flow === "device" ? void 0 : grant.redirectUri || "https://example.com/callback" };
			return sdk.forConsole.oauth2.reject({ grantId: grant.$id });
		},
		onSuccess: (result) => {
			if (preview || flow === "device" || !result.redirectUrl) {
				onDone?.("denied", result.redirectUrl);
				return;
			}
			window.location.assign(result.redirectUrl);
			if (!isWebRedirect(result.redirectUrl)) onDone?.("denied", result.redirectUrl);
		},
		onError: (e) => {
			const message = getErrorMessage(e, t("Failed to cancel the request"));
			setError(message);
			toast.error(message);
		}
	});
	const isBusy = approveMutation.isPending || rejectMutation.isPending;
	const editorGroup = (tierKey, heading, note, rows, selection, open, setOpen) => {
		if (rows.length === 0) return null;
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					checked: tierAllSelected(rows, selection),
					onCheckedChange: (checked) => setAllRows(tierKey, rows, checked === true),
					disabled: isBusy,
					"aria-label": `${t("Allow all")} ${heading.toLowerCase()} ${t("permissions")}`
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					"aria-expanded": open,
					"aria-controls": `${tierKey}-permissions-list`,
					onClick: () => setOpen(!open),
					className: "cursor-pointer text-muted-foreground hover:text-foreground flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider",
					children: [t(heading), open ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-3.5" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5" })]
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground mt-1 ps-6 text-[12px] leading-relaxed",
				children: t(note)
			})] }), open && /* @__PURE__ */ jsx("ul", {
				id: `${tierKey}-permissions-list`,
				className: "space-y-4",
				children: rows.map((row) => {
					const state = rowState(selection, row.resource);
					return /* @__PURE__ */ jsxs("li", {
						className: cn("flex items-start gap-2.5", !state.selected && "opacity-50"),
						children: [/* @__PURE__ */ jsx(Checkbox, {
							className: "mt-0.5",
							checked: state.selected,
							onCheckedChange: (checked) => updateRow(tierKey, row.resource, { selected: checked === true }),
							disabled: isBusy,
							"aria-label": `${t("Allow access to")} ${row.title}`
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-medium",
									children: t(row.title)
								}), row.hasRead && row.hasWrite ? /* @__PURE__ */ jsxs("span", {
									className: cn("border-border flex shrink-0 overflow-hidden rounded-md border text-[10px] font-medium", !state.selected && "pointer-events-none"),
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										disabled: isBusy || !state.selected,
										onClick: () => updateRow(tierKey, row.resource, { level: "read" }),
										className: cn("cursor-pointer px-1.5 py-0.5 transition", state.level === "read" || readOnlyAll ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"),
										children: t("Read")
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										disabled: isBusy || !state.selected || readOnlyAll,
										onClick: () => updateRow(tierKey, row.resource, { level: "full" }),
										className: cn("border-border cursor-pointer border-s px-1.5 py-0.5 transition", state.level === "full" && !readOnlyAll ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground", readOnlyAll && "opacity-50"),
										children: t("Read + Write")
									})]
								}) : /* @__PURE__ */ jsx(Badge, {
									variant: row.accessStrong ? "warning" : "info",
									className: "text-[10px] shrink-0",
									children: t(row.access)
								})]
							}), row.description && /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground mt-1 text-[12px] leading-relaxed",
								children: t(row.description)
							})]
						})]
					}, row.resource);
				})
			})]
		});
	};
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-4 text-center",
					children: [
						/* @__PURE__ */ jsx(OAuth2AppAvatar, { app }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "text-2xl font-semibold tracking-tight",
								children: [
									t("Authorize"),
									" ",
									app.name
								]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-[13px] leading-relaxed",
								children: summary
							})]
						}),
						accountLabel ? onSwitchAccount ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: true,
							disabled: isBusy,
							children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "cursor-pointer text-muted-foreground hover:text-foreground border-border hover:bg-muted/50 flex max-w-full items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] transition disabled:opacity-60",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "bg-muted text-muted-foreground flex size-5 items-center justify-center rounded-md text-[10px] font-semibold",
										children: accountInitial
									}),
									/* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: accountLabel
									}),
									/* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5 shrink-0" })
								]
							})
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "center",
							className: "w-72",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 px-2 py-1.5",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "bg-muted text-muted-foreground flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
										children: accountInitial
									}),
									/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate text-start text-[13px]",
										children: accountLabel
									}),
									/* @__PURE__ */ jsx(Check, { className: "text-muted-foreground size-4 shrink-0" })
								]
							}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
								disabled: isBusy,
								onSelect: () => void onSwitchAccount(),
								children: [/* @__PURE__ */ jsx(ArrowLeftRight, { className: "size-4" }), t("Use a different account")]
							})]
						})] }) : /* @__PURE__ */ jsxs("p", {
							className: "text-muted-foreground text-[12px]",
							children: [
								t("Signed in as"),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-foreground font-medium",
									children: accountLabel
								})
							]
						}) : null
					]
				}),
				canNarrow ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 px-4 py-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-lg",
								children: /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium",
									children: composed?.untouched ? t("Full access") : t("Custom access")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground mt-1 text-[12px] leading-relaxed",
									children: composed?.untouched ? `${app.name} ${t("will be able to manage your organizations, projects, and their data on your behalf.")}` : `${app.name} ${t("only gets the permissions you selected below.")}`
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							"aria-expanded": customize,
							onClick: () => setCustomize((v) => !v),
							className: "cursor-pointer hover:bg-muted/40 flex w-full items-center justify-between px-4 py-3",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2.5 text-start",
								children: [/* @__PURE__ */ jsx("span", {
									className: "bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-lg",
									children: /* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-4" })
								}), /* @__PURE__ */ jsxs("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block text-[13px] font-medium",
										children: t("Customize access")
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-muted-foreground mt-0.5 block text-[12px] leading-relaxed",
										children: [
											t("You can limit"),
											" ",
											app.name,
											" ",
											t("to specific projects and actions.")
										]
									})]
								})]
							}), customize ? /* @__PURE__ */ jsx(ChevronUp, { className: "text-muted-foreground size-4 shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "text-muted-foreground size-4 shrink-0" })]
						}),
						customize ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
							className: "space-y-5 px-4 py-4",
							children: [
								/* @__PURE__ */ jsxs("label", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ jsx(Checkbox, {
										className: "mt-0.5",
										checked: readOnlyAll,
										onCheckedChange: (checked) => setReadOnlyAll(checked === true),
										disabled: isBusy
									}), /* @__PURE__ */ jsxs("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block text-[13px] font-medium",
											children: t("Read-only")
										}), /* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground mt-0.5 block text-[12px] leading-relaxed",
											children: t("Limit every selected permission to viewing data - nothing can be created, changed, or deleted.")
										})]
									})]
								}),
								scopeModel.identity.length > 0 ? /* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground text-[12px] leading-relaxed",
									children: [
										t("Basic identity"),
										" (",
										scopeModel.identity.map((scope) => scope.id).join(", "),
										")",
										" ",
										t("is always shared so"),
										" ",
										app.name,
										" ",
										t("can recognize your account.")
									]
								}) : null,
								editorGroup("project", "Projects", "Applies only to the projects you select below.", projectRows, projectSelection, projectPermissionsOpen, setProjectPermissionsOpen),
								editorGroup("organization", "Organizations", "Applies only to the organizations you select below.", organizationRows, organizationSelection, organizationPermissionsOpen, setOrganizationPermissionsOpen),
								nothingSelected ? /* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground flex items-center gap-1.5 text-[12px]",
									children: [/* @__PURE__ */ jsx(CircleAlert, { className: "size-3.5 shrink-0" }), t("Select at least one permission.")]
								}) : null,
								composed?.lengthCollapsed ? /* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground flex items-center gap-1.5 text-[12px]",
									children: [/* @__PURE__ */ jsx(CircleAlert, { className: "size-3.5 shrink-0" }), t("Your selection was too long to grant scope-by-scope, so a fully selected tier was granted as full tier access instead.")]
								}) : null
							]
						})] }) : null
					]
				}) : permissionGroups.length > 0 ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-expanded": showPermissions,
						onClick: () => setShowPermissions((v) => !v),
						className: "cursor-pointer hover:bg-muted/40 flex w-full items-center justify-between px-4 py-3",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-2 text-[13px] font-medium",
							children: [/* @__PURE__ */ jsx(Lock, { className: "text-muted-foreground size-4" }), t("Permissions")]
						}), showPermissions ? /* @__PURE__ */ jsx(ChevronUp, { className: "text-muted-foreground size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "text-muted-foreground size-4" })]
					}), showPermissions ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsx("div", {
						className: "space-y-5 px-4 py-4",
						children: permissionGroups.map((group) => {
							const collapsible = group.collapsible === true;
							const open = permissionGroupOpen[group.heading] !== false;
							return /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", { children: [collapsible ? /* @__PURE__ */ jsxs("button", {
									type: "button",
									"aria-expanded": open,
									"aria-controls": `permission-group-${group.heading.toLowerCase()}`,
									onClick: () => setPermissionGroupOpen((current) => ({
										...current,
										[group.heading]: current[group.heading] === false
									})),
									className: "cursor-pointer text-muted-foreground hover:text-foreground flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider",
									children: [t(group.heading), open ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-3.5" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5" })]
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground text-[12px] font-semibold uppercase tracking-wider",
									children: t(group.heading)
								}), group.note ? /* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground mt-1 text-[12px] leading-relaxed",
									children: t(group.note)
								}) : null] }), !collapsible || open ? /* @__PURE__ */ jsx("ul", {
									id: `permission-group-${group.heading.toLowerCase()}`,
									className: "space-y-3",
									children: group.lines.map((line) => /* @__PURE__ */ jsx(PermissionRow, {
										line,
										copied: copiedToken === line.token,
										onCopy: () => copyToken(line.token)
									}, line.token))
								}) : null]
							}, group.heading);
						})
					})] }) : null]
				}) : null,
				projectRequested ? /* @__PURE__ */ jsx(ScopePanel, {
					icon: /* @__PURE__ */ jsx(Folder, { className: "size-4" }),
					title: t("Project access"),
					subtitle: `${t("Choose which projects")} ${app.name} ${t("can access.")}`,
					needsAttention: projectNeedsResource,
					warning: projectNeedsResource ? `${t("Pick at least one project, or")} ${app.name} ${t("gets no project access.")}` : void 0,
					children: /* @__PURE__ */ jsx(OAuth2ResourceSelector, {
						pluralLabel: "projects",
						requested: projectIdentifiers,
						selected: projectSelected,
						onSelectedChange: setProjectSelected,
						find: findProjects,
						resolveNames: resolveProjects,
						disabled: isBusy
					})
				}) : null,
				organizationRequested ? /* @__PURE__ */ jsx(ScopePanel, {
					icon: /* @__PURE__ */ jsx(Building2, { className: "size-4" }),
					title: t("Organization access"),
					subtitle: `${t("Choose which organizations")} ${app.name} ${t("can access.")}`,
					needsAttention: organizationNeedsResource,
					warning: organizationNeedsResource ? `${t("Pick at least one organization, or")} ${app.name} ${t("gets no organization access.")}` : void 0,
					children: /* @__PURE__ */ jsx(OAuth2ResourceSelector, {
						pluralLabel: "organizations",
						requested: organizationIdentifiers,
						selected: organizationSelected,
						onSelectedChange: setOrganizationSelected,
						find: findOrganizations,
						resolveNames: resolveOrganizations,
						disabled: isBusy
					})
				}) : null,
				error ? /* @__PURE__ */ jsxs("div", {
					className: "border-destructive/20 bg-destructive/10 flex items-start gap-2 rounded-lg border p-3",
					children: [/* @__PURE__ */ jsx(TriangleAlert, { className: "text-destructive mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ jsx("p", {
						className: "text-destructive text-[13px]",
						children: error
					})]
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "brandCta",
						className: "w-full",
						disabled: isBusy || blocked,
						onClick: () => {
							setError(null);
							approveMutation.mutate();
						},
						children: t("Authorize")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "w-full",
						disabled: isBusy,
						onClick: () => {
							setError(null);
							rejectMutation.mutate();
						},
						children: t("Cancel")
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[12px]",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Lock, { className: "size-3.5" }), flow === "authorization" && redirectHost ? `${t("You'll be returned to")} ${redirectHost}` : flow === "device" ? t("After authorizing, return to your device") : t("You can revoke access anytime")]
						}),
						app.privacyPolicyUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "·"
						}), /* @__PURE__ */ jsx("a", {
							href: app.privacyPolicyUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "link-neutral",
							children: t("Privacy")
						})] }) : null,
						app.termsUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "·"
						}), /* @__PURE__ */ jsx("a", {
							href: app.termsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "link-neutral",
							children: t("Terms")
						})] }) : null
					]
				})
			]
		})
	});
}
function PermissionRow({ line, copied, onCopy }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("li", {
		className: "group relative flex items-start gap-2.5 pe-6",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "bg-muted text-muted-foreground mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md",
				children: /* @__PURE__ */ jsx(Check, { className: "size-3" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[13px] font-medium",
						children: t(line.title)
					}), line.access ? /* @__PURE__ */ jsx(Badge, {
						variant: line.accessStrong ? "warning" : "info",
						className: "text-[10px] shrink-0",
						children: t(line.access)
					}) : null]
				}), line.description ? /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground mt-1 text-[12px] leading-relaxed",
					children: t(line.description)
				}) : null]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				title: t("Copy scope"),
				"aria-label": `${t("Copy scope")} ${line.token}`,
				onClick: onCopy,
				className: "cursor-pointer text-muted-foreground hover:text-foreground absolute end-0 top-0 opacity-0 transition group-hover:opacity-100 focus:opacity-100",
				children: copied ? /* @__PURE__ */ jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3.5" })
			})
		]
	});
}
function ScopePanel({ icon, title, subtitle, needsAttention, warning, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border bg-card/50 overflow-hidden", needsAttention ? "border-amber-500/40" : "border-border"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2.5 px-4 py-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: "bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-lg",
					children: icon
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium",
						children: title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mt-1 text-[12px] leading-relaxed",
						children: subtitle
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-3 px-4 py-4",
				children: [children, warning ? /* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground flex items-center gap-1.5 text-[12px]",
					children: [/* @__PURE__ */ jsx(CircleAlert, { className: "size-3.5 shrink-0" }), warning]
				}) : null]
			})
		]
	});
}
function OAuth2OutcomeCard({ outcome, flow, app = null, accountLabel, redirectUrl }) {
	const t = useT();
	const approved = outcome === "approved";
	const appName = app?.name ?? t("the application");
	const StatusIcon = approved ? Check : X;
	const title = approved ? flow === "device" ? t("Device connected") : t("Access granted") : t("Request cancelled");
	let message;
	if (!approved) message = `${t("No access was granted to")} ${appName}. ${t("You can close this tab.")}`;
	else if (flow === "device") message = `${t("You've authorized")} ${appName}. ${t("Return to your device - it will continue automatically.")}`;
	else if (redirectUrl) message = `${t("Return to")} ${appName} ${t("to continue. If it didn’t open automatically, use the button below.")}`;
	else message = `${t("Return to")} ${appName} ${t("to continue. You can close this tab.")}`;
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-4 text-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(OAuth2AppAvatar, { app }), /* @__PURE__ */ jsx("span", {
							className: approved ? "absolute -end-1 -bottom-1 flex size-5 items-center justify-center rounded-full border-2 border-[var(--card)] bg-emerald-500 text-white" : "bg-muted text-muted-foreground absolute -end-1 -bottom-1 flex size-5 items-center justify-center rounded-full border-2 border-[var(--card)]",
							children: /* @__PURE__ */ jsx(StatusIcon, { className: "size-3" })
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ jsx("h1", {
								className: "text-2xl font-semibold tracking-tight",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-[13px] leading-relaxed",
								children: message
							}),
							accountLabel ? /* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground text-[12px]",
								children: [
									t("Signed in as"),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground font-medium",
										children: accountLabel
									})
								]
							}) : null
						]
					})]
				}),
				approved && redirectUrl ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "brandCta",
						className: "w-full",
						onClick: () => {
							window.location.href = redirectUrl;
						},
						children: [
							t("Open"),
							" ",
							app?.name ?? t("application")
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-center text-[12px]",
						children: t("It's safe to close this tab.")
					})]
				}) : null,
				/* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground flex items-center justify-center gap-1.5 text-center text-[12px]",
					children: [/* @__PURE__ */ jsx(Lock, { className: "size-3.5" }), approved ? t("You can revoke access anytime in your account settings") : `${appName} ${t("was not given access to your account")}`]
				})
			]
		})
	});
}
export { PROJECT_RAR_TYPE as a, ORGANIZATION_RAR_TYPE as i, OAuth2ConsentCard as n, isWebRedirect as r, OAuth2OutcomeCard as t };
