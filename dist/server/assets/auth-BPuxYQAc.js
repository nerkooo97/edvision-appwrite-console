import { D as getConsoleAccountSync, E as clearConsoleAccountCache, O as getConsoleAccountUnauthenticatedError, S as hasConsoleImpersonationSessionTarget, _ as hasLikelyConsoleSession, b as getConsoleAccountQueryRevision, d as sdk, g as getConsoleAccountFromSingleton, h as fetchConsoleAccount, k as setConsoleAccountCache, n as clearConsoleImpersonateUser, r as clearConsoleSessionLocally, y as clearConsoleImpersonationSession } from "./sdk-DjIJ_hjn.js";
import { s as isHttpNotFoundError, u as isHttpUnauthorizedError } from "./error-formatting-CL2hjGy5.js";
import { t as createConsoleProject } from "./console-projects-C0b0tMaH.js";
import { a as COVER_WIDTH, h as resolveCoverEditorThemeId, t as COVER_HEIGHT, u as DEFAULT_COVER_THEME_ID } from "./constants-CL7SLzjY.js";
import { n as formatCoverLucideIconValue } from "./lucide-icon-utils-BZZNNTPu.js";
import { f as isReferenceVersion, o as getDefaultReferencePlatform, u as isReferencePlatform } from "./constants-Dd6QzW31.js";
import { o as DEFAULT_PAGE_SIZE, s as DEFAULT_STALE_TIME, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { Ft as useOrganizations, G as organizationQueryOptions, H as organizationPlanQueryOptions, K as organizationScopesQueryOptions, O as fetchOrganizationProjects, U as organizationProjectScopeQueryOptions, Y as organizationsQueryOptions, Z as prefetchOrganizationInvoiceDataIfAllowed, _n as hasProjectSpecificRoles, c as createOrganization, j as fetchOrganizations } from "./organizations-BKtnlNrj.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { S as pinnedProjectsQueryOptions, o as activeProjectsQueryOptions } from "./projects-BaTJenfQ.js";
import { $ as normalizeCoverGeneratorColumnsLayout, H as clampCliShellSessionsSidebarWidthPx, K as clampTableViewSidebarWidthPx, N as POSTGRES_SQL_EDITOR_DEFAULT_HEIGHT_PX, R as TABLE_VIEW_SIDEBAR_DEFAULT_WIDTH_PX, S as DIAGRAM_GENERATOR_PROPERTIES_SPLIT_DEFAULT_LAYOUT, U as clampMysqlSqlEditorHeightPx, V as clampAIChatConversationsSidebarWidthPx, W as clampPostgresSqlEditorHeightPx, X as normalizeApiExplorerColumnsLayout, Z as normalizeApiExplorerResponseSplitLayout, a as API_EXPLORER_COLUMNS_DEFAULT_LAYOUT, c as API_EXPLORER_RESPONSE_SPLIT_DEFAULT_LAYOUT, et as normalizeDiagramGeneratorPropertiesSplitLayout, k as MYSQL_SQL_EDITOR_DEFAULT_HEIGHT_PX, m as CLI_SHELL_SESSIONS_SIDEBAR_DEFAULT_WIDTH_PX, t as AI_CHAT_CONVERSATIONS_SIDEBAR_DEFAULT_WIDTH_PX, tt as normalizeLegacySidebarWidthPrefValue, y as COVER_GENERATOR_COLUMNS_DEFAULT_LAYOUT } from "./resizable-layout-BVnWw80t.js";
import { S as inferUsageDateRangePresetFromStoredRange, _ as serializeUsageChartDateRange, f as normalizeUsageDateRangeSelection, o as normalizeUsageChartIntervalPref, x as getUsageDateRangePresetByValue } from "./chart-interval-Dbrn19qD.js";
import { n as isMarketingPagePath } from "./is-marketing-page-dgx45Oqy.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppwriteException, ID, Query } from "@appwrite.io/console";
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
async function fetchOrganizationMemberships(organizationId, page = 0, limit = 10, search) {
	if (!organizationId) return {
		memberships: [],
		total: 0
	};
	try {
		const response = await sdk.forConsole.organizations.listMemberships(organizationId, {
			queries: [
				Query.orderAsc("$createdAt"),
				Query.limit(limit),
				Query.offset(page * limit)
			],
			search: search?.trim() || void 0,
			total: true
		});
		return {
			memberships: response.memberships || response || [],
			total: response.total || 0
		};
	} catch {
		try {
			const response = await sdk.forConsole.teams.listMemberships(organizationId, [
				Query.orderAsc("$createdAt"),
				Query.limit(limit),
				Query.offset(page * limit)
			]);
			return {
				memberships: response.memberships || [],
				total: response.total || 0
			};
		} catch {
			return {
				memberships: [],
				total: 0
			};
		}
	}
}
function mapOrganizationMembershipsToTeamMembers(membershipsData, organizationId) {
	if (!membershipsData?.memberships) return [];
	return membershipsData.memberships.map((membership) => {
		const m = membership;
		const name = m.userName || m.name || "";
		const email = m.userEmail || m.email || "";
		let role = "member";
		if (m.roles && m.roles.length > 0) {
			const firstRole = m.roles[0];
			if ([
				"owner",
				"admin",
				"member",
				"developer",
				"editor",
				"analyst",
				"billing"
			].includes(firstRole)) role = firstRole;
			else if (firstRole === "owner") role = "owner";
			else if (firstRole === "admin") role = "admin";
			else if (hasProjectSpecificRoles(m.roles)) role = "analyst";
		} else if (m.role) {
			const roleValue = m.role;
			if ([
				"owner",
				"admin",
				"member",
				"developer",
				"editor",
				"analyst",
				"billing"
			].includes(roleValue)) role = roleValue;
		}
		const avatar = m.user?.avatar || m.avatar || void 0;
		const status = m.confirm === false ? "pending" : "active";
		const roles = m.roles || (m.role ? [m.role] : []);
		const mfaEnabled = m.user?.mfa === true || m.user?.twoFactorAuthenticatorEnabled === true || m.mfa === true || false;
		return {
			$id: m.$id || m.id,
			userName: name,
			userEmail: email,
			avatar,
			role,
			roles,
			orgId: organizationId || "",
			joinedAt: m.$createdAt || m.joinedAt || (/* @__PURE__ */ new Date()).toISOString(),
			status,
			membershipId: m.$id || m.id,
			mfaEnabled
		};
	});
}
async function fetchConsoleTeam(teamId) {
	if (!teamId) throw new Error("Team ID is required");
	return await sdk.forConsole.teams.get({ teamId });
}
var teamPrefsWriteChains = /* @__PURE__ */ new Map();
function enqueueConsoleTeamPrefsWrite(teamId, task) {
	const next = (teamPrefsWriteChains.get(teamId) ?? Promise.resolve()).then(task, task);
	teamPrefsWriteChains.set(teamId, next.then(() => void 0, () => void 0));
	return next;
}
async function updateConsoleTeamPrefs(teamId, prefs, options) {
	if (!teamId) throw new Error("Team ID is required");
	if (hasConsoleImpersonationSessionTarget()) return;
	const mode = options?.mode ?? "merge";
	return enqueueConsoleTeamPrefsWrite(teamId, async () => {
		if (mode === "replace" && typeof prefs !== "function") return await sdk.forConsole.teams.updatePrefs({
			teamId,
			prefs
		});
		const freshPrefs = { ...(await fetchConsoleTeam(teamId)).prefs || {} };
		const patch = typeof prefs === "function" ? prefs(freshPrefs) : prefs;
		const nextPrefs = mode === "replace" ? patch : {
			...freshPrefs,
			...patch
		};
		return await sdk.forConsole.teams.updatePrefs({
			teamId,
			prefs: nextPrefs
		});
	});
}
function consoleTeamQueryOptions(teamId) {
	return queryOptions({
		queryKey: [
			"team",
			"console",
			teamId
		],
		queryFn: () => fetchConsoleTeam(teamId),
		enabled: !!teamId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		gcTime: teamId ? 300 * 1e3 : 0
	});
}
function organizationMembershipsQueryOptions(organizationId, page = 0, limit = 10, search) {
	return queryOptions({
		queryKey: [
			"memberships",
			"organization",
			organizationId,
			page,
			limit,
			search
		],
		queryFn: () => fetchOrganizationMemberships(organizationId, page, limit, search),
		enabled: !!organizationId,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		gcTime: organizationId ? 300 * 1e3 : 0
	});
}
function useTeams() {
	const { organizations, isLoading, error, refetch } = useOrganizations();
	return {
		teams: useMemo(() => {
			return organizations.map((org) => ({
				$id: org.$id,
				name: org.name,
				color: `from-${[
					"orange",
					"pink",
					"blue",
					"violet",
					"green",
					"purple"
				][organizations.indexOf(org) % 6]}-400 to-${[
					"pink",
					"red",
					"violet",
					"purple",
					"emerald",
					"indigo"
				][organizations.indexOf(org) % 6]}-500`,
				members: org.members,
				orgId: org.$id
			}));
		}, [organizations]),
		organizations,
		isLoading,
		error,
		refetch
	};
}
function useConsoleTeam(teamId) {
	return useQuery(consoleTeamQueryOptions(teamId));
}
function useUpdateConsoleTeamPrefs(teamId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (prefs) => updateConsoleTeamPrefs(teamId, prefs),
		onSuccess: (prefs) => {
			if (prefs && teamId) queryClient.setQueryData([
				"team",
				"console",
				teamId
			], (current) => current ? {
				...current,
				prefs
			} : current);
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
			queryClient.invalidateQueries({ queryKey: ["organizations", "console"] });
		}
	});
}
function useResendMembershipInvite(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ membershipId, email, roles }) => {
			if (!organizationId) throw new Error("Organization ID is required");
			await sdk.forConsole.teams.deleteMembership(organizationId, membershipId);
			const acceptUrl = `${window.location.origin}/join`;
			return await sdk.forConsole.teams.createMembership({
				teamId: organizationId,
				email,
				roles,
				url: acceptUrl
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"memberships",
				"organization",
				organizationId
			] });
		}
	});
}
function useUpdateMembershipRole(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ membershipId, roles }) => {
			if (!organizationId) throw new Error("Organization ID is required");
			return await sdk.forConsole.teams.updateMembership({
				teamId: organizationId,
				membershipId,
				roles
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"memberships",
				"organization",
				organizationId
			] });
		}
	});
}
function useRemoveTeamMember(organizationId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (membershipId) => {
			if (!organizationId) throw new Error("Organization ID is required");
			return await sdk.forConsole.teams.deleteMembership(organizationId, membershipId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"memberships",
				"organization",
				organizationId
			] });
		}
	});
}
const RIGHT_PANE_TRANSITION_MS = 320;
function clampRightPaneWidthPx(px) {
	return Math.min(800, Math.max(400, Math.round(px)));
}
const GENERATOR_PANEL_VISIBILITY_DEFAULT = {
	left: true,
	right: true
};
const GENERATOR_PANEL_VISIBILITY_STORAGE_KEY = "console.generator.panelVisibility";
function normalizeGeneratorPanelVisibility(value) {
	return {
		left: value?.left !== false,
		right: value?.right !== false
	};
}
function readGeneratorPanelVisibilityFromStorage() {
	if (typeof window === "undefined") return GENERATOR_PANEL_VISIBILITY_DEFAULT;
	try {
		const raw = window.localStorage.getItem(GENERATOR_PANEL_VISIBILITY_STORAGE_KEY);
		if (!raw) return GENERATOR_PANEL_VISIBILITY_DEFAULT;
		return normalizeGeneratorPanelVisibility(JSON.parse(raw));
	} catch {
		return GENERATOR_PANEL_VISIBILITY_DEFAULT;
	}
}
function writeGeneratorPanelVisibilityToStorage(visibility) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(GENERATOR_PANEL_VISIBILITY_STORAGE_KEY, JSON.stringify(visibility));
	} catch {}
}
const WELCOME_BLOCKED_APPWRITE_SUBCOMMANDS = [
	"pull",
	"push",
	"init",
	"login",
	"run"
];
var BLOCKED_APPWRITE_SUBCOMMANDS = { logout: ["Logout is not supported in the browser terminal.", "This terminal signs in with your Console session. Sign out from the Console account menu instead."].join("\n") };
function getBlockedCliCommandMessage(rawCommand) {
	const trimmed = rawCommand.trim();
	if (!trimmed.startsWith("appwrite")) return null;
	const body = trimmed.slice(8).trimStart();
	if (!body) return null;
	const subcommand = body.split(/\s+/)[0]?.toLowerCase();
	if (!subcommand) return null;
	return BLOCKED_APPWRITE_SUBCOMMANDS[subcommand] ?? null;
}
var LINK_CURSOR_SELECTOR = ".xterm-screen, .xterm-viewport, .xterm-canvas-canvas-layer, canvas";
var resetTimers = /* @__PURE__ */ new WeakMap();
function setCliTerminalLinkCursor(terminal, active) {
	const root = terminal.element;
	if (!root) return;
	const cursor = active ? "pointer" : "text";
	root.style.cursor = cursor;
	root.classList.toggle("xterm-cursor-pointer", active);
	root.querySelectorAll(LINK_CURSOR_SELECTOR).forEach((node) => {
		node.style.cursor = cursor;
	});
}
function clearPendingLinkCursorReset(terminal) {
	const pending = resetTimers.get(terminal);
	if (pending !== void 0) {
		window.clearTimeout(pending);
		resetTimers.delete(terminal);
	}
}
function registerCliTerminalLinkCursorCleanup(terminal) {
	const root = terminal.element;
	if (!root) return { dispose: () => {} };
	const onMouseLeave = () => {
		clearPendingLinkCursorReset(terminal);
		setCliTerminalLinkCursor(terminal, false);
	};
	root.addEventListener("mouseleave", onMouseLeave);
	return { dispose: () => {
		clearPendingLinkCursorReset(terminal);
		root.removeEventListener("mouseleave", onMouseLeave);
		setCliTerminalLinkCursor(terminal, false);
	} };
}
function withCliTerminalLinkCursor(terminal, link) {
	return {
		...link,
		hover: (event, text) => {
			clearPendingLinkCursorReset(terminal);
			setCliTerminalLinkCursor(terminal, true);
			link.hover?.(event, text);
		},
		leave: (event, text) => {
			link.leave?.(event, text);
			const pending = window.setTimeout(() => {
				resetTimers.delete(terminal);
				setCliTerminalLinkCursor(terminal, false);
			}, 0);
			resetTimers.set(terminal, pending);
		}
	};
}
const CLI_TERMINAL_URL_REGEX = /https?:\/\/[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/g;
function isHttpUrl(url) {
	try {
		const parsed = new URL(url);
		return parsed.protocol === "http:" || parsed.protocol === "https:";
	} catch {
		return false;
	}
}
function findUrls(lineText) {
	const matches = [];
	const regex = new RegExp(CLI_TERMINAL_URL_REGEX.source, "g");
	let match;
	while (match = regex.exec(lineText)) {
		const url = match[0];
		if (!isHttpUrl(url)) continue;
		matches.push({
			url,
			startX: match.index + 1
		});
	}
	return matches;
}
function createCliTerminalWebLinksAddon(handler) {
	let terminal = null;
	const disposables = [];
	return {
		activate(nextTerminal) {
			terminal = nextTerminal;
			disposables.push(registerCliTerminalLinkCursorCleanup(terminal));
			disposables.push(terminal.registerLinkProvider({ provideLinks(y, callback) {
				if (!terminal) {
					callback(void 0);
					return;
				}
				const line = terminal.buffer.active.getLine(y - 1);
				if (!line) {
					callback(void 0);
					return;
				}
				const lineText = line.translateToString(true);
				const links = [];
				for (const { url, startX } of findUrls(lineText)) {
					const range = {
						start: {
							x: startX,
							y
						},
						end: {
							x: startX + url.length,
							y
						}
					};
					links.push(withCliTerminalLinkCursor(terminal, {
						text: url,
						range,
						decorations: {
							underline: true,
							pointerCursor: true
						},
						activate: (event) => {
							handler(event, url);
							event.preventDefault();
						}
					}));
				}
				callback(links.length > 0 ? links : void 0);
			} }));
		},
		dispose() {
			for (const disposable of disposables) disposable.dispose();
			disposables.length = 0;
			terminal = null;
		}
	};
}
const CLI_TERMINAL_MUTED = "\x1B[90m";
const CLI_TERMINAL_RESET = "\x1B[0m";
const CLI_TERMINAL_STDERR = "\x1B[31m";
const CLI_TERMINAL_BLUE = "\x1B[34m";
const CLI_TERMINAL_BRIGHT_BLUE = "\x1B[94m";
const CLI_TERMINAL_CYAN = "\x1B[36m";
const CLI_TERMINAL_GREEN = "\x1B[32m";
const CLI_TERMINAL_YELLOW = "\x1B[33m";
const CLI_TERMINAL_PROMPT = `${CLI_TERMINAL_CYAN}$${CLI_TERMINAL_RESET} `;
function sanitizeTerminalPromptSegment(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
}
function resolveCliTerminalUsername(account) {
	if (account?.name?.trim()) return sanitizeTerminalPromptSegment(account.name) || "user";
	if (account?.email?.trim()) return sanitizeTerminalPromptSegment(account.email.split("@")[0] ?? "") || "user";
	return "user";
}
function resolveCliTerminalProjectLabel(project, projectId) {
	if (project?.name?.trim()) return sanitizeTerminalPromptSegment(project.name) || projectId;
	return sanitizeTerminalPromptSegment(projectId) || "project";
}
function formatCliTerminalPrompt(options) {
	const { username, projectName } = options;
	return `${CLI_TERMINAL_GREEN}${username}@${projectName}${CLI_TERMINAL_RESET}${CLI_TERMINAL_CYAN}$${CLI_TERMINAL_RESET} `;
}
function formatTerminalLink(text) {
	return `${CLI_TERMINAL_BRIGHT_BLUE}${text}${CLI_TERMINAL_RESET}`;
}
function linkifyTerminalText(text) {
	return text.replace(CLI_TERMINAL_URL_REGEX, (url) => formatTerminalLink(url));
}
function createTerminalOutputLinkifier() {
	let pending = "";
	function writeLine(api, line) {
		api.write(linkifyTerminalText(line));
	}
	return {
		write(api, chunk) {
			if (!api || !chunk) return;
			pending += chunk;
			let newlineIndex = pending.indexOf("\n");
			while (newlineIndex !== -1) {
				const line = pending.slice(0, newlineIndex + 1);
				pending = pending.slice(newlineIndex + 1);
				writeLine(api, line);
				newlineIndex = pending.indexOf("\n");
			}
		},
		flush(api) {
			if (!api || !pending) return;
			writeLine(api, pending);
			pending = "";
		}
	};
}
function showInputPromptIfIdle(api) {
	api.showInputPrompt?.();
}
function writeSegment(api, data) {
	return new Promise((resolve) => {
		api.write(data, () => resolve());
	});
}
function isValidSuggestionLinkRange(start, end) {
	return end.y > start.y || end.y === start.y && end.x > start.x;
}
async function writeCliShellSuggestions(api, commands) {
	const links = [];
	await writeSegment(api, `${CLI_TERMINAL_BLUE}Try:${CLI_TERMINAL_RESET}  `);
	for (let index = 0; index < commands.length; index++) {
		const command = commands[index];
		const start = api.getBufferCursor?.();
		await writeSegment(api, `${CLI_TERMINAL_CYAN}${command}${CLI_TERMINAL_RESET}`);
		const end = api.getBufferCursor?.();
		if (start && end && isValidSuggestionLinkRange(start, end)) links.push({
			command,
			start,
			end
		});
		if (index < commands.length - 1) await writeSegment(api, `${CLI_TERMINAL_MUTED}, ${CLI_TERMINAL_RESET}`);
	}
	await writeSegment(api, `${CLI_TERMINAL_RESET}\n`);
	api.registerSuggestionCommandLinks?.(links);
}
function writeCliShellLine(api, line, options) {
	if (!api) return;
	switch (line.type) {
		case "system":
			api.writeln(`${CLI_TERMINAL_MUTED}${line.text}${CLI_TERMINAL_RESET}`);
			break;
		case "rich":
			api.writeln(line.text);
			break;
		case "stderr":
			api.writeln(`${CLI_TERMINAL_STDERR}${line.text}${CLI_TERMINAL_RESET}`);
			break;
		case "stdout":
			api.writeln(linkifyTerminalText(line.text));
			break;
		case "command": {
			const prompt = api.getPrompt?.() ?? CLI_TERMINAL_PROMPT;
			api.writeln(`${prompt}${line.text}`);
			break;
		}
		case "suggestions":
			writeCliShellSuggestions(api, line.commands).then(() => {
				if (options?.showPromptAfter) showInputPromptIfIdle(api);
			});
			return;
	}
	if (options?.showPromptAfter) showInputPromptIfIdle(api);
}
function writeCliTerminalRaw(api, chunk) {
	if (!api || !chunk) return;
	const lines = chunk.split("\n");
	const tail = lines.pop();
	for (const line of lines) api.write(linkifyTerminalText(`${line}\n`));
	if (tail) api.write(linkifyTerminalText(tail));
}
const CLI_DOCS_URL = "/docs/tooling/command-line/commands";
const CLI_PROJECT_CWD = "/project";
const BROWSER_PROXY_SESSION_COOKIE = "a_session_console=__browser_session__";
const CLI_SHELL_COLLAPSED_HEIGHT_PX = 54;
const CLI_SHELL_COLLAPSE_MS = 200;
const CLI_SHELL_MAX_HEIGHT_RATIO = .55;
const CLI_BOOTSTRAP_READY_MESSAGE = "Appwrite CLI is ready.";
const CLI_SHELL_TRY_COMMANDS = [
	"appwrite help",
	"appwrite whoami",
	"appwrite users list --json",
	"appwrite functions list",
	"appwrite tablesdb list"
];
function createCliShellWelcomeLines() {
	const blockedList = WELCOME_BLOCKED_APPWRITE_SUBCOMMANDS.map((name) => `${CLI_TERMINAL_YELLOW}${name}${CLI_TERMINAL_MUTED}`).join(", ");
	return [
		{
			type: "rich",
			text: [
				CLI_TERMINAL_CYAN,
				"Appwrite CLI",
				CLI_TERMINAL_RESET,
				CLI_TERMINAL_MUTED,
				" · run API commands against this project from your browser.",
				CLI_TERMINAL_RESET
			].join("")
		},
		{
			type: "rich",
			text: [
				CLI_TERMINAL_GREEN,
				"✓",
				CLI_TERMINAL_RESET,
				" ",
				CLI_TERMINAL_MUTED,
				"Session and project context are configured automatically.",
				CLI_TERMINAL_RESET
			].join("")
		},
		{
			type: "rich",
			text: [
				CLI_TERMINAL_YELLOW,
				"!",
				CLI_TERMINAL_RESET,
				" ",
				CLI_TERMINAL_MUTED,
				"Interactive commands (",
				blockedList,
				") are not supported here.",
				CLI_TERMINAL_RESET
			].join("")
		},
		{
			type: "rich",
			text: [
				CLI_TERMINAL_MUTED,
				"Docs: ",
				formatTerminalLink(CLI_DOCS_URL)
			].join("")
		},
		{
			type: "suggestions",
			commands: CLI_SHELL_TRY_COMMANDS
		}
	];
}
const DIAGRAM_SIZE_PRESETS = [
	{
		id: "og",
		label: "Open Graph",
		width: 1200,
		height: 630
	},
	{
		id: "blog",
		label: "Blog post (16:9)",
		width: 1920,
		height: 1080
	},
	{
		id: "twitter",
		label: "Twitter / X",
		width: 1600,
		height: 900
	},
	{
		id: "square",
		label: "Square",
		width: 1080,
		height: 1080
	},
	{
		id: "large",
		label: "Large diagram",
		width: 1920,
		height: 2048
	}
];
function getDiagramSizePresetKey(width, height) {
	return DIAGRAM_SIZE_PRESETS.find((preset) => preset.width === width && preset.height === height)?.id ?? `${width}x${height}`;
}
function resolveDiagramSizePresetKey(key) {
	const preset = DIAGRAM_SIZE_PRESETS.find((item) => item.id === key);
	if (preset) return {
		width: preset.width,
		height: preset.height
	};
	const [widthRaw, heightRaw] = key.split("x");
	const width = Number(widthRaw);
	const height = Number(heightRaw);
	if (Number.isFinite(width) && Number.isFinite(height) && width >= 320 && width <= 4096 && height >= 200 && height <= 4096) return {
		width: Math.round(width),
		height: Math.round(height)
	};
	return {
		width: COVER_WIDTH,
		height: 630
	};
}
const DIAGRAM_DEFAULT_WIDTH = COVER_WIDTH;
const DIAGRAM_DEFAULT_HEIGHT = 630;
function getDiagramArtboardRenderScale(documentWidth, zoom = 1) {
	return 720 / documentWidth * zoom;
}
function getDiagramArtboardDisplaySize(documentWidth, documentHeight, zoom = 1) {
	const scale = getDiagramArtboardRenderScale(documentWidth, zoom);
	return {
		width: Math.ceil(documentWidth * scale),
		height: Math.ceil(documentHeight * scale)
	};
}
const DIAGRAM_SNAP_GRID = 16;
const DEFAULT_DIAGRAM_ICON = "/icons/appwrite.svg";
const DIAGRAM_NODE_DEFAULTS = {
	service: {
		width: 208,
		height: 76
	},
	title: {
		width: 720,
		height: 72
	},
	label: {
		width: 168,
		height: 36
	},
	group: {
		width: 360,
		height: 220
	},
	icon: {
		width: 72,
		height: 72
	},
	screenshot: {
		width: 320,
		height: 200
	},
	table: {
		width: 320,
		height: 200
	}
};
const DIAGRAM_NODE_KIND_LABELS = {
	service: "Element",
	title: "Title",
	label: "Label",
	group: "Group",
	icon: "Icon",
	screenshot: "Screenshot",
	table: "Table"
};
const DIAGRAM_STORAGE_KEY = "console.diagramGenerator.state";
const DIAGRAM_EDGE_LINE_STYLE_LABELS = {
	solid: "Solid",
	dashed: "Dashed",
	dotted: "Dotted"
};
const DIAGRAM_EDGE_ARROW_LABELS = {
	forward: "Forward arrow",
	both: "Both ends",
	none: "No arrow"
};
const DIAGRAM_EDGE_STROKE_TONE_LABELS = {
	default: "Default",
	muted: "Muted",
	accent: "Accent",
	purple: "Purple"
};
const DIAGRAM_EDGE_LABEL_SUGGESTIONS = [
	"HTTPS",
	"REST",
	"gRPC",
	"WebSocket",
	"JSON",
	"SQL",
	"Webhook",
	"Subscribe",
	"Publish",
	"Invoke",
	"Upload",
	"Download"
];
const DIAGRAM_EDGE_PRESETS = [
	{
		id: "request",
		label: "Request",
		description: "Solid line with a forward arrow",
		lineStyle: "solid",
		arrow: "forward",
		strokeTone: "default",
		labelSuggestion: "HTTPS"
	},
	{
		id: "response",
		label: "Response",
		description: "Dashed return path",
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted",
		labelSuggestion: "JSON"
	},
	{
		id: "event",
		label: "Event",
		description: "Async or webhook delivery",
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted",
		labelSuggestion: "Webhook"
	},
	{
		id: "data",
		label: "Data",
		description: "Database or storage access",
		lineStyle: "dotted",
		arrow: "forward",
		strokeTone: "purple",
		labelSuggestion: "SQL"
	},
	{
		id: "stream",
		label: "Stream",
		description: "Bidirectional realtime flow",
		lineStyle: "solid",
		arrow: "both",
		strokeTone: "accent",
		labelSuggestion: "WebSocket"
	},
	{
		id: "link",
		label: "Link",
		description: "Lightweight association",
		lineStyle: "dotted",
		arrow: "none",
		strokeTone: "muted"
	}
];
var DEFAULT_EDGE_APPEARANCE = {
	lineStyle: "solid",
	arrow: "forward",
	strokeTone: "default"
};
function isLegacyEdgeKind(value) {
	return value === "flow" || value === "async" || value === "data";
}
function migrateLegacyDiagramEdgeKind(kind) {
	switch (kind) {
		case "async": return {
			lineStyle: "dashed",
			arrow: "forward",
			strokeTone: "muted"
		};
		case "data": return {
			lineStyle: "dotted",
			arrow: "forward",
			strokeTone: "purple"
		};
		case "flow":
		default: return DEFAULT_EDGE_APPEARANCE;
	}
}
function normalizeDiagramEdge(edge$1) {
	const legacyKind = edge$1.kind;
	const appearance = typeof edge$1.lineStyle === "string" && typeof edge$1.arrow === "string" && typeof edge$1.strokeTone === "string" ? {
		lineStyle: edge$1.lineStyle,
		arrow: edge$1.arrow,
		strokeTone: edge$1.strokeTone
	} : isLegacyEdgeKind(legacyKind) ? migrateLegacyDiagramEdgeKind(legacyKind) : DEFAULT_EDGE_APPEARANCE;
	return {
		id: edge$1.id,
		fromNodeId: edge$1.fromNodeId,
		toNodeId: edge$1.toNodeId,
		fromSide: edge$1.fromSide,
		toSide: edge$1.toSide,
		label: edge$1.label,
		...appearance
	};
}
function getDefaultDiagramEdgeAppearance() {
	return { ...DEFAULT_EDGE_APPEARANCE };
}
function getDiagramEdgeStroke(tone, brand, selected) {
	if (selected) return brand.brandCta;
	switch (tone) {
		case "muted": return brand.mutedForeground;
		case "accent": return brand.brandCta;
		case "purple": return brand.brandPurple;
		case "default":
		default: return brand.foreground;
	}
}
function getDiagramEdgeDash(lineStyle) {
	switch (lineStyle) {
		case "dashed": return "7 6";
		case "dotted": return "2 5";
		case "solid":
		default: return;
	}
}
function edgeUsesForwardArrow(arrow) {
	return arrow === "forward" || arrow === "both";
}
function edgeUsesBackwardArrow(arrow) {
	return arrow === "both";
}
function getDiagramEdgeOpacity(lineStyle, tone, options) {
	const selected = options?.selected ?? false;
	if ((options?.part ?? "stroke") === "label") return selected ? 1 : .94;
	if (selected) return tone === "muted" ? .48 : .56;
	if (tone === "muted") return lineStyle === "dashed" ? .26 : .3;
	if (tone === "accent" || tone === "purple") return .34;
	return .32;
}
const DIAGRAM_TABLE_MIN_COLUMNS = 2;
const DIAGRAM_TABLE_MAX_COLUMNS = 6;
const DIAGRAM_TABLE_MIN_ROWS = 2;
const DIAGRAM_TABLE_MAX_ROWS = 8;
function createDefaultDiagramTable() {
	return {
		tableHeaders: [
			"Column A",
			"Column B",
			"Column C"
		],
		tableRows: [[
			"Value",
			"Value",
			"Value"
		], [
			"Value",
			"Value",
			"Value"
		]]
	};
}
function normalizeCellValue(value, fallback) {
	return typeof value === "string" ? value.slice(0, 48) : fallback;
}
function normalizeDiagramTableData(headers, rows) {
	const defaults = createDefaultDiagramTable();
	const sourceHeaders = Array.isArray(headers) ? headers : defaults.tableHeaders;
	const columnCount = Math.min(6, Math.max(2, sourceHeaders.length || defaults.tableHeaders.length));
	const tableHeaders = Array.from({ length: columnCount }, (_, index) => normalizeCellValue(sourceHeaders[index], `Column ${index + 1}`));
	const sourceRows = Array.isArray(rows) ? rows : defaults.tableRows;
	const rowCount = Math.min(8, Math.max(2, sourceRows.length || defaults.tableRows.length));
	return {
		tableHeaders,
		tableRows: Array.from({ length: rowCount }, (_, rowIndex) => {
			const sourceRow = Array.isArray(sourceRows[rowIndex]) ? sourceRows[rowIndex] : [];
			return Array.from({ length: columnCount }, (_$1, columnIndex) => normalizeCellValue(sourceRow[columnIndex], "Value"));
		})
	};
}
function normalizeDiagramTableNode(node) {
	if (node.kind !== "table") return {
		tableHeaders: void 0,
		tableRows: void 0
	};
	return normalizeDiagramTableData(node.tableHeaders, node.tableRows);
}
function resizeDiagramTableColumns(headers, rows, columnCount) {
	const nextCount = Math.min(6, Math.max(2, columnCount));
	return normalizeDiagramTableData(Array.from({ length: nextCount }, (_, index) => headers[index] ?? `Column ${index + 1}`), rows.map((row) => Array.from({ length: nextCount }, (_, index) => row[index] ?? "Value")));
}
function resizeDiagramTableRows(headers, rows, rowCount) {
	const nextCount = Math.min(8, Math.max(2, rowCount));
	const columnCount = headers.length;
	return normalizeDiagramTableData(headers, Array.from({ length: nextCount }, (_, rowIndex) => {
		if (rowIndex < rows.length) return [...rows[rowIndex]];
		return Array.from({ length: columnCount }, () => "Value");
	}));
}
function updateDiagramTableCell(headers, rows, rowIndex, columnIndex, value) {
	if (rowIndex === -1) return {
		tableHeaders: headers.map((header, index) => index === columnIndex ? value.slice(0, 48) : header),
		tableRows: rows
	};
	return {
		tableHeaders: headers,
		tableRows: rows.map((row, index) => index === rowIndex ? row.map((cell, cellIndex) => cellIndex === columnIndex ? value.slice(0, 48) : cell) : row)
	};
}
const DEFAULT_DIAGRAM_SCREENSHOT_FOCUS = {
	focusX: 50,
	focusY: 50
};
const DIAGRAM_SCREENSHOT_GRAVITY_GRID_ROWS = [
	[
		"top-left",
		"top",
		"top-right"
	],
	[
		"left",
		"center",
		"right"
	],
	[
		"bottom-left",
		"bottom",
		"bottom-right"
	]
];
var GRAVITY_FOCUS = {
	"top-left": {
		focusX: 0,
		focusY: 0
	},
	top: {
		focusX: 50,
		focusY: 0
	},
	"top-right": {
		focusX: 100,
		focusY: 0
	},
	left: {
		focusX: 0,
		focusY: 50
	},
	center: {
		focusX: 50,
		focusY: 50
	},
	right: {
		focusX: 100,
		focusY: 50
	},
	"bottom-left": {
		focusX: 0,
		focusY: 100
	},
	bottom: {
		focusX: 50,
		focusY: 100
	},
	"bottom-right": {
		focusX: 100,
		focusY: 100
	}
};
function clampDiagramScreenshotFocus(value, axis = "x") {
	const fallback = axis === "x" ? DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusX : DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusY;
	if (!Number.isFinite(value)) return fallback;
	return Math.min(100, Math.max(0, Math.round(value)));
}
function getDiagramScreenshotFocus(node) {
	return {
		focusX: clampDiagramScreenshotFocus(node.focusX ?? DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusX, "x"),
		focusY: clampDiagramScreenshotFocus(node.focusY ?? DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusY, "y")
	};
}
function getDiagramScreenshotGravityFromFocus(focusX, focusY) {
	let closest = "center";
	let minDistance = Number.POSITIVE_INFINITY;
	for (const [gravity, position] of Object.entries(GRAVITY_FOCUS)) {
		const distance = Math.hypot(position.focusX - focusX, position.focusY - focusY);
		if (distance < minDistance) {
			minDistance = distance;
			closest = gravity;
		}
	}
	return closest;
}
function getDiagramScreenshotFocusForGravity(gravity) {
	return GRAVITY_FOCUS[gravity];
}
function formatDiagramScreenshotGravityLabel(gravity) {
	return gravity.replace("-", " ");
}
function hasDiagramNodeIcon(node) {
	return Boolean(node.iconSrc?.trim());
}
function getDiagramNodeIconSrc(node) {
	if (node.kind === "icon") return node.iconSrc || "/icons/appwrite.svg";
	if (node.kind === "service") return node.iconSrc?.trim() ?? "";
	return node.iconSrc ?? "";
}
function normalizeDiagramNode(node) {
	const legacy = node;
	const legacyServiceId = legacy.serviceId;
	const kind = (legacy.kind ?? node.kind) === "component" ? "service" : node.kind;
	switch (kind) {
		case "service": {
			const { serviceId: _legacy, ...rest } = legacy;
			return {
				...rest,
				kind: "service",
				iconSrc: rest.iconSrc?.trim() || void 0,
				subtitle: rest.subtitle?.trim() || void 0
			};
		}
		case "icon": return {
			...node,
			kind: "icon",
			iconSrc: node.iconSrc || "/icons/appwrite.svg"
		};
		case "screenshot": return {
			...node,
			kind: "screenshot",
			imageSrc: typeof node.imageSrc === "string" ? node.imageSrc : void 0,
			focusX: clampDiagramScreenshotFocus(node.focusX ?? DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusX, "x"),
			focusY: clampDiagramScreenshotFocus(node.focusY ?? DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusY, "y")
		};
		case "table": {
			const table = normalizeDiagramTableNode({
				...node,
				kind: "table"
			});
			return {
				...node,
				kind: "table",
				...table
			};
		}
		case "title": return {
			...node,
			kind: "title",
			subtitle: node.subtitle?.trim() || void 0
		};
		default:
			if (legacyServiceId) {
				const { serviceId: _legacy, ...rest } = legacy;
				return {
					...rest,
					kind
				};
			}
			return {
				...node,
				kind
			};
	}
}
function getDiagramNodeCreateDefaults(kind) {
	switch (kind) {
		case "service": return { label: "Element" };
		case "icon": return {
			iconSrc: DEFAULT_DIAGRAM_ICON,
			label: "Icon"
		};
		case "screenshot": return {
			label: "Screenshot",
			focusX: DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusX,
			focusY: DEFAULT_DIAGRAM_SCREENSHOT_FOCUS.focusY
		};
		case "table": return {
			label: "Table",
			...createDefaultDiagramTable()
		};
		case "title": return { label: "Diagram title" };
		default: return {};
	}
}
var MIN_EDGE_STUB = 8;
var MIN_EDGE_MIDDLE = 4;
function snapDiagramCoord(value) {
	return Math.round(value);
}
function snapPoint(point) {
	return {
		x: snapDiagramCoord(point.x),
		y: snapDiagramCoord(point.y)
	};
}
function isVerticalAnchorSide(side) {
	return side === "top" || side === "bottom";
}
function getSegmentAngle(from, to) {
	return Math.atan2(to.y - from.y, to.x - from.x);
}
function getDiagramEdgeArrowBase(tip, approach, size = 8) {
	const angle = getSegmentAngle(approach, tip);
	return snapPoint({
		x: tip.x - Math.cos(angle) * size,
		y: tip.y - Math.sin(angle) * size
	});
}
function buildDiagramEdgeArrowheadPath(arrow, size = 8) {
	const halfWidth = size / 2;
	const baseX = arrow.tipX - Math.cos(arrow.angle) * size;
	const baseY = arrow.tipY - Math.sin(arrow.angle) * size;
	const offsetX = Math.sin(arrow.angle) * halfWidth;
	const offsetY = -Math.cos(arrow.angle) * halfWidth;
	const leftX = baseX + offsetX;
	const leftY = baseY + offsetY;
	const rightX = baseX - offsetX;
	const rightY = baseY - offsetY;
	return `M ${arrow.tipX} ${arrow.tipY} L ${leftX} ${leftY} L ${rightX} ${rightY} Z`;
}
function getDiagramNodeAnchor(node, side) {
	switch (side) {
		case "top": return snapPoint({
			x: node.x + node.width / 2,
			y: node.y
		});
		case "bottom": return snapPoint({
			x: node.x + node.width / 2,
			y: node.y + node.height
		});
		case "left": return snapPoint({
			x: node.x,
			y: node.y + node.height / 2
		});
		case "right": return snapPoint({
			x: node.x + node.width,
			y: node.y + node.height / 2
		});
	}
}
function extendDiagramAnchor(point, side, distance) {
	switch (side) {
		case "top": return snapPoint({
			x: point.x,
			y: point.y - distance
		});
		case "bottom": return snapPoint({
			x: point.x,
			y: point.y + distance
		});
		case "left": return snapPoint({
			x: point.x - distance,
			y: point.y
		});
		case "right": return snapPoint({
			x: point.x + distance,
			y: point.y
		});
	}
}
function getAnchorSpan(start, end, fromSide, toSide) {
	if (fromSide === "bottom" && toSide === "top") return Math.max(0, end.y - start.y);
	if (fromSide === "top" && toSide === "bottom") return Math.max(0, start.y - end.y);
	if (fromSide === "right" && toSide === "left") return Math.max(0, end.x - start.x);
	if (fromSide === "left" && toSide === "right") return Math.max(0, start.x - end.x);
	if (isVerticalAnchorSide(fromSide) && isVerticalAnchorSide(toSide)) return Math.abs(end.y - start.y);
	if (!isVerticalAnchorSide(fromSide) && !isVerticalAnchorSide(toSide)) return Math.abs(end.x - start.x);
	return Math.max(Math.abs(end.x - start.x), Math.abs(end.y - start.y));
}
function resolveDiagramEdgeStub(start, end, fromSide, toSide) {
	const span = getAnchorSpan(start, end, fromSide, toSide);
	if (span <= 0) return MIN_EDGE_STUB;
	const maxStub = Math.floor(span / 2) - MIN_EDGE_MIDDLE;
	if (maxStub < MIN_EDGE_STUB) return Math.max(4, Math.floor(span / 3));
	return Math.min(28, maxStub);
}
function pickDiagramAnchorSides(from, to) {
	const fromCenter = {
		x: from.x + from.width / 2,
		y: from.y + from.height / 2
	};
	const toCenter = {
		x: to.x + to.width / 2,
		y: to.y + to.height / 2
	};
	const dx = toCenter.x - fromCenter.x;
	const dy = toCenter.y - fromCenter.y;
	if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? {
		fromSide: "right",
		toSide: "left"
	} : {
		fromSide: "left",
		toSide: "right"
	};
	return dy > 0 ? {
		fromSide: "bottom",
		toSide: "top"
	} : {
		fromSide: "top",
		toSide: "bottom"
	};
}
function pointsToPath(points) {
	return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
}
function buildOrthogonalPath(start, end, startStub, endStub, verticalFirst, options) {
	const midY = options?.busY ?? snapDiagramCoord((startStub.y + endStub.y) / 2);
	const midX = options?.busX ?? snapDiagramCoord((startStub.x + endStub.x) / 2);
	const points = [start, startStub];
	if (verticalFirst) {
		points.push({
			x: startStub.x,
			y: midY
		});
		points.push({
			x: endStub.x,
			y: midY
		});
	} else {
		points.push({
			x: midX,
			y: startStub.y
		});
		points.push({
			x: midX,
			y: endStub.y
		});
	}
	points.push(endStub, end);
	return pointsToPath(points);
}
function computeEdgeLayout(edge$1, fromNode, toNode) {
	const start = getDiagramNodeAnchor(fromNode, edge$1.fromSide);
	const end = getDiagramNodeAnchor(toNode, edge$1.toSide);
	const stub = resolveDiagramEdgeStub(start, end, edge$1.fromSide, edge$1.toSide);
	return {
		edge: edge$1,
		start,
		end,
		startStub: extendDiagramAnchor(start, edge$1.fromSide, stub),
		endStub: extendDiagramAnchor(end, edge$1.toSide, stub),
		verticalFirst: isVerticalAnchorSide(edge$1.fromSide)
	};
}
function computeFanOutBusY(layouts) {
	const startStubY = layouts[0]?.startStub.y ?? 0;
	const endStubYs = layouts.map((layout) => layout.endStub.y);
	const minEndStubY = Math.min(...endStubYs);
	const maxEndStubY = Math.max(...endStubYs);
	if (startStubY <= minEndStubY) return snapDiagramCoord((startStubY + minEndStubY) / 2);
	return snapDiagramCoord((startStubY + maxEndStubY) / 2);
}
function computeConvergeBusY(layouts) {
	const endStubY = layouts[0]?.endStub.y ?? 0;
	const startStubYs = layouts.map((layout) => layout.startStub.y);
	const minStartStubY = Math.min(...startStubYs);
	const maxStartStubY = Math.max(...startStubYs);
	if (minStartStubY <= endStubY) return snapDiagramCoord((maxStartStubY + endStubY) / 2);
	return snapDiagramCoord((minStartStubY + endStubY) / 2);
}
function computeFanOutBusX(layouts) {
	const startStubX = layouts[0]?.startStub.x ?? 0;
	const endStubXs = layouts.map((layout) => layout.endStub.x);
	const minEndStubX = Math.min(...endStubXs);
	const maxEndStubX = Math.max(...endStubXs);
	if (startStubX <= minEndStubX) return snapDiagramCoord((startStubX + minEndStubX) / 2);
	return snapDiagramCoord((startStubX + maxEndStubX) / 2);
}
function computeConvergeBusX(layouts) {
	const endStubX = layouts[0]?.endStub.x ?? 0;
	const startStubXs = layouts.map((layout) => layout.startStub.x);
	const minStartStubX = Math.min(...startStubXs);
	const maxStartStubX = Math.max(...startStubXs);
	if (minStartStubX <= endStubX) return snapDiagramCoord((maxStartStubX + endStubX) / 2);
	return snapDiagramCoord((minStartStubX + endStubX) / 2);
}
function buildDiagramEdgePathFromLayout(layout, options) {
	const { edge: edge$1, start, end, startStub, endStub, verticalFirst } = layout;
	const hasForwardArrow = edgeUsesForwardArrow(edge$1.arrow);
	const hasBackwardArrow = edgeUsesBackwardArrow(edge$1.arrow);
	const d = buildOrthogonalPath(hasBackwardArrow ? getDiagramEdgeArrowBase(start, startStub) : start, hasForwardArrow ? getDiagramEdgeArrowBase(end, endStub) : end, startStub, endStub, verticalFirst, {
		busX: options?.busX,
		busY: options?.busY
	});
	const labelX = snapDiagramCoord(options?.busX ?? (startStub.x + endStub.x) / 2);
	const labelY = snapDiagramCoord(options?.busY ?? (startStub.y + endStub.y) / 2);
	return {
		id: edge$1.id,
		d,
		lineStyle: edge$1.lineStyle,
		arrow: edge$1.arrow,
		strokeTone: edge$1.strokeTone,
		label: edge$1.label,
		labelX,
		labelY,
		forwardArrow: hasForwardArrow ? {
			tipX: end.x,
			tipY: end.y,
			angle: getSegmentAngle(endStub, end)
		} : void 0,
		backwardArrow: hasBackwardArrow ? {
			tipX: start.x,
			tipY: start.y,
			angle: getSegmentAngle(startStub, start)
		} : void 0
	};
}
function buildDiagramEdgePaths(nodes, edges) {
	const safeNodes = Array.isArray(nodes) ? nodes : [];
	const safeEdges = Array.isArray(edges) ? edges : [];
	const nodeById = new Map(safeNodes.map((node) => [node.id, node]));
	const layouts = safeEdges.flatMap((edge$1) => {
		const fromNode = nodeById.get(edge$1.fromNodeId);
		const toNode = nodeById.get(edge$1.toNodeId);
		if (!fromNode || !toNode) return [];
		return [computeEdgeLayout(edge$1, fromNode, toNode)];
	});
	const fanOutBusY = /* @__PURE__ */ new Map();
	const fanOutGroups = /* @__PURE__ */ new Map();
	for (const layout of layouts) {
		if (!layout.verticalFirst) continue;
		const key = `from:${layout.edge.fromNodeId}:${layout.edge.fromSide}`;
		const group = fanOutGroups.get(key) ?? [];
		group.push(layout);
		fanOutGroups.set(key, group);
	}
	for (const [key, group] of fanOutGroups) {
		if (group.length < 2) continue;
		fanOutBusY.set(key, computeFanOutBusY(group));
	}
	const convergeBusY = /* @__PURE__ */ new Map();
	const convergeGroups = /* @__PURE__ */ new Map();
	for (const layout of layouts) {
		if (!layout.verticalFirst) continue;
		const key = `to:${layout.edge.toNodeId}:${layout.edge.toSide}`;
		const group = convergeGroups.get(key) ?? [];
		group.push(layout);
		convergeGroups.set(key, group);
	}
	for (const [key, group] of convergeGroups) {
		if (group.length < 2) continue;
		convergeBusY.set(key, computeConvergeBusY(group));
	}
	const fanOutBusX = /* @__PURE__ */ new Map();
	const fanOutHorizontalGroups = /* @__PURE__ */ new Map();
	for (const layout of layouts) {
		if (layout.verticalFirst) continue;
		const key = `from:${layout.edge.fromNodeId}:${layout.edge.fromSide}`;
		const group = fanOutHorizontalGroups.get(key) ?? [];
		group.push(layout);
		fanOutHorizontalGroups.set(key, group);
	}
	for (const [key, group] of fanOutHorizontalGroups) {
		if (group.length < 2) continue;
		fanOutBusX.set(key, computeFanOutBusX(group));
	}
	const convergeBusX = /* @__PURE__ */ new Map();
	const convergeHorizontalGroups = /* @__PURE__ */ new Map();
	for (const layout of layouts) {
		if (layout.verticalFirst) continue;
		const key = `to:${layout.edge.toNodeId}:${layout.edge.toSide}`;
		const group = convergeHorizontalGroups.get(key) ?? [];
		group.push(layout);
		convergeHorizontalGroups.set(key, group);
	}
	for (const [key, group] of convergeHorizontalGroups) {
		if (group.length < 2) continue;
		convergeBusX.set(key, computeConvergeBusX(group));
	}
	return layouts.map((layout) => {
		const fromKey = `from:${layout.edge.fromNodeId}:${layout.edge.fromSide}`;
		const toKey = `to:${layout.edge.toNodeId}:${layout.edge.toSide}`;
		return buildDiagramEdgePathFromLayout(layout, {
			busY: fanOutBusY.get(fromKey) ?? convergeBusY.get(toKey),
			busX: fanOutBusX.get(fromKey) ?? convergeBusX.get(toKey)
		});
	});
}
function createId() {
	return crypto.randomUUID();
}
function snapDiagramValue(value) {
	return Math.round(value / 16) * 16;
}
function createDefaultDiagramDocument() {
	return {
		title: "Untitled diagram",
		theme: DEFAULT_COVER_THEME_ID,
		width: DIAGRAM_DEFAULT_WIDTH,
		height: DIAGRAM_DEFAULT_HEIGHT,
		format: "png",
		nodes: [],
		edges: []
	};
}
function createDiagramNode(kind, position, overrides) {
	const defaults = DIAGRAM_NODE_DEFAULTS[kind];
	const kindDefaults = getDiagramNodeCreateDefaults(kind);
	return {
		id: createId(),
		kind,
		x: snapDiagramValue(position.x),
		y: snapDiagramValue(position.y),
		width: overrides?.width ?? defaults.width,
		height: overrides?.height ?? defaults.height,
		label: overrides?.label ?? kindDefaults.label ?? DIAGRAM_NODE_KIND_LABELS[kind],
		subtitle: overrides?.subtitle,
		iconSrc: overrides?.iconSrc ?? kindDefaults.iconSrc,
		imageSrc: overrides?.imageSrc ?? kindDefaults.imageSrc,
		focusX: overrides?.focusX ?? kindDefaults.focusX,
		focusY: overrides?.focusY ?? kindDefaults.focusY,
		tableHeaders: overrides?.tableHeaders ?? kindDefaults.tableHeaders,
		tableRows: overrides?.tableRows ?? kindDefaults.tableRows
	};
}
function createDiagramEdge(fromNode, toNode, overrides) {
	const sides = pickDiagramAnchorSides(fromNode, toNode);
	const defaults = getDefaultDiagramEdgeAppearance();
	return {
		id: createId(),
		fromNodeId: fromNode.id,
		toNodeId: toNode.id,
		fromSide: overrides?.fromSide ?? sides.fromSide,
		toSide: overrides?.toSide ?? sides.toSide,
		lineStyle: overrides?.lineStyle ?? defaults.lineStyle,
		arrow: overrides?.arrow ?? defaults.arrow,
		strokeTone: overrides?.strokeTone ?? defaults.strokeTone,
		label: overrides?.label
	};
}
var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 2048;
var MODULES_COLUMN_X = 1664;
var MODULE_LABEL_WIDTH = 128;
var EDGE_PRESETS = {
	request: {
		lineStyle: "solid",
		arrow: "forward",
		strokeTone: "default"
	},
	response: {
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted"
	},
	event: {
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted"
	},
	data: {
		lineStyle: "dotted",
		arrow: "forward",
		strokeTone: "purple"
	},
	stream: {
		lineStyle: "solid",
		arrow: "both",
		strokeTone: "accent"
	},
	link: {
		lineStyle: "dotted",
		arrow: "none",
		strokeTone: "muted"
	}
};
function edge(fromNode, toNode, preset, overrides) {
	return createDiagramEdge(fromNode, toNode, {
		...EDGE_PRESETS[preset],
		...overrides
	});
}
function labelNode(x, y, text, width = 128, height = 36) {
	return createDiagramNode("label", {
		x,
		y
	}, {
		label: text,
		width,
		height
	});
}
function sectionLabel(x, y, text, width) {
	return createDiagramNode("label", {
		x,
		y
	}, {
		label: text,
		width,
		height: 28
	});
}
function serviceNode(x, y, text, options) {
	let iconSrc;
	if (options?.icon === "/icons/appwrite.svg") iconSrc = DEFAULT_DIAGRAM_ICON;
	else if (options?.icon) iconSrc = formatCoverLucideIconValue(options.icon);
	return createDiagramNode("service", {
		x,
		y
	}, {
		label: text,
		subtitle: options?.subtitle,
		width: options?.width ?? 176,
		height: options?.height ?? 64,
		...iconSrc ? { iconSrc } : {}
	});
}
function groupNode(x, y, text, width, height) {
	return createDiagramNode("group", {
		x,
		y
	}, {
		label: text,
		width,
		height
	});
}
function centerUnderX(node, childWidth) {
	return snapDiagramValue(node.x + (node.width - childWidth) / 2);
}
function workerColumn(anchor, startY, labels, width = 120, rowGap = 44) {
	const x = centerUnderX(anchor, width);
	return labels.map((label, index) => labelNode(x, startY + index * rowGap, label, width, 36));
}
function connectVerticalFan(fromNode, targets, preset) {
	return targets.map((target) => edge(fromNode, target, preset, {
		fromSide: "bottom",
		toSide: "top"
	}));
}
function connectApiModules(api, modules, preset = "link") {
	return modules.map((module) => edge(api, module, preset, {
		fromSide: "right",
		toSide: "left"
	}));
}
function createAppwriteArchitectureDiagram() {
	const clientY = 96;
	const clientWidth = 120;
	const clientGap = 20;
	const clientCount = 5;
	const clientRowWidth = clientCount * clientWidth + (clientCount - 1) * clientGap;
	const clientStartX = snapDiagramValue((CANVAS_WIDTH - clientRowWidth) / 2);
	const clientsLabel = sectionLabel(clientStartX, 56, "Clients", clientRowWidth);
	const web = labelNode(clientStartX, clientY, "Web", clientWidth);
	const flutter = labelNode(clientStartX + (clientWidth + clientGap) * 1, clientY, "Flutter", clientWidth);
	const ios = labelNode(clientStartX + (clientWidth + clientGap) * 2, clientY, "iOS", clientWidth);
	const android = labelNode(clientStartX + (clientWidth + clientGap) * 3, clientY, "Android", clientWidth);
	const servers = labelNode(clientStartX + (clientWidth + clientGap) * 4, clientY, "Servers", clientWidth);
	const appwrite = serviceNode(snapDiagramValue(CANVAS_WIDTH / 2 - 104), 192, "Appwrite", {
		icon: DEFAULT_DIAGRAM_ICON,
		width: 208,
		height: 76
	});
	const entryY = 320;
	const loadbalancer = serviceNode(snapDiagramValue(CANVAS_WIDTH / 2 - 88), entryY, "Loadbalancer", {
		icon: "network",
		width: 176,
		height: 64
	});
	const sslGateway = serviceNode(snapDiagramValue(loadbalancer.x + loadbalancer.width + 64), entryY, "SSL Gateway", {
		icon: "shield-check",
		width: 176,
		height: 64
	});
	const apiY = 448;
	const apiWidth = 168;
	const apiGap = 28;
	const apiRowWidth = 4 * apiWidth + 3 * apiGap;
	const apiStartX = snapDiagramValue((MODULES_COLUMN_X - 48 - apiRowWidth) / 2);
	const console$1 = serviceNode(apiStartX, apiY, "Console", {
		icon: "layout-dashboard",
		width: apiWidth
	});
	const graphql = serviceNode(apiStartX + (apiWidth + apiGap) * 1, apiY, "GraphQL API", {
		subtitle: "Coming soon",
		icon: "braces",
		width: apiWidth
	});
	const restApi = serviceNode(apiStartX + (apiWidth + apiGap) * 2, apiY, "REST API", {
		icon: "globe",
		width: apiWidth
	});
	const realtimeApi = serviceNode(apiStartX + (apiWidth + apiGap) * 3, apiY, "Realtime API", {
		icon: "radio",
		width: apiWidth
	});
	const securityY = apiY + 64 + 64;
	const securityLayer = groupNode(snapDiagramValue(apiStartX - 32), securityY, "Security Layer", apiRowWidth + 64, 80);
	const coreY = securityY + 80 + 64;
	const coreGap = 40;
	const coreWidth = 176;
	const coreRowWidth = 4 * coreWidth + 3 * coreGap;
	const coreStartX = snapDiagramValue((MODULES_COLUMN_X - 48 - coreRowWidth) / 2);
	const executor = serviceNode(coreStartX, coreY, "Executor", {
		subtitle: "Open Runtimes",
		icon: "cpu",
		width: coreWidth,
		height: 72
	});
	const cache = serviceNode(coreStartX + (coreWidth + coreGap) * 1, coreY, "Cache", {
		subtitle: "Redis",
		icon: "database-backup",
		width: coreWidth,
		height: 72
	});
	const queue = serviceNode(coreStartX + (coreWidth + coreGap) * 2, coreY, "Queue", {
		subtitle: "Redis",
		icon: "list-ordered",
		width: coreWidth,
		height: 72
	});
	const antivirus = serviceNode(coreStartX + (coreWidth + coreGap) * 3, coreY, "AntiVirus", {
		subtitle: "ClamAV",
		icon: "shield",
		width: coreWidth,
		height: 72
	});
	const infraY = coreY + 72 + 72;
	const dockerK8s = serviceNode(centerUnderX(executor, 168), infraY, "Docker / K8S", {
		icon: "container",
		width: 168,
		height: 64
	});
	const database = serviceNode(centerUnderX(cache, 168), infraY, "Database", {
		icon: "database",
		width: 168,
		height: 64
	});
	const queueInfra = serviceNode(centerUnderX(queue, 168), infraY, "Redis", {
		subtitle: "Queue store",
		icon: "database-backup",
		width: 168,
		height: 64
	});
	const apiServicesLabel = sectionLabel(MODULES_COLUMN_X, apiY - 36, "API modules", MODULE_LABEL_WIDTH);
	const moduleRowHeight = 40;
	const moduleGap = 10;
	const modulesStartY = apiY;
	const serviceFunctions = labelNode(MODULES_COLUMN_X, modulesStartY, "Functions", MODULE_LABEL_WIDTH);
	const serviceUsers = labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 1, "Users", MODULE_LABEL_WIDTH);
	const serviceAccount = labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 2, "Account", MODULE_LABEL_WIDTH);
	const serviceTeams = labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 3, "Teams", MODULE_LABEL_WIDTH);
	const serviceDatabase = labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 4, "Database", MODULE_LABEL_WIDTH);
	const serviceStorage = labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 5, "Storage", MODULE_LABEL_WIDTH);
	const restApiModules = [
		serviceFunctions,
		serviceUsers,
		serviceAccount,
		serviceTeams,
		serviceDatabase,
		serviceStorage,
		labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 6, "Localization", MODULE_LABEL_WIDTH),
		labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 7, "Avatars", MODULE_LABEL_WIDTH),
		labelNode(MODULES_COLUMN_X, modulesStartY + (moduleRowHeight + moduleGap) * 8, "Health", MODULE_LABEL_WIDTH)
	];
	const workerSectionY = infraY + 64 + 72;
	const workersLabel = sectionLabel(snapDiagramValue(coreStartX), workerSectionY, "Background workers", coreRowWidth);
	const workerStartY = workerSectionY + 48;
	const workerRowGap = 44;
	const executionWorkers = workerColumn(dockerK8s, workerStartY, [
		"Builds",
		"Functions",
		"Maintenance"
	], 120, workerRowGap);
	const [builds, workerFunctions, maintenance] = executionWorkers;
	const queueWorkers = workerColumn(queueInfra, workerStartY, [
		"Scheduler",
		"Webhooks",
		"Deletes"
	], 120, workerRowGap);
	const [scheduler, webhooks, deletes] = queueWorkers;
	const dataWorkers = workerColumn(database, workerStartY, [
		"Usage",
		"Database",
		"Audits"
	], 120, workerRowGap);
	const [usage, workerDatabase, audits] = dataWorkers;
	const integrationWorkers = workerColumn(antivirus, workerStartY, ["Mails", "Certs"], 120, workerRowGap);
	const [mails, certs] = integrationWorkers;
	const integrationInfraY = workerStartY + workerRowGap * 2 + 36 + 48;
	const smtp = serviceNode(centerUnderX(mails, 136), integrationInfraY, "SMTP", {
		icon: "mail",
		width: 136,
		height: 56
	});
	const letsencrypt = serviceNode(centerUnderX(certs, 136), integrationInfraY, "Letsencrypt", {
		icon: "badge-check",
		width: 136,
		height: 56
	});
	const clientNodes = [
		web,
		flutter,
		ios,
		android,
		servers
	];
	const apiNodes = [
		console$1,
		graphql,
		restApi,
		realtimeApi
	];
	const coreNodes = [
		executor,
		cache,
		queue,
		antivirus
	];
	const edges = [
		...clientNodes.map((client) => edge(client, appwrite, "request", {
			fromSide: "bottom",
			toSide: "top"
		})),
		edge(appwrite, loadbalancer, "request", {
			fromSide: "bottom",
			toSide: "top"
		}),
		edge(sslGateway, loadbalancer, "request", {
			fromSide: "left",
			toSide: "right",
			label: "HTTPS"
		}),
		...connectVerticalFan(loadbalancer, apiNodes, "request"),
		...apiNodes.map((api) => edge(api, securityLayer, "request", {
			fromSide: "bottom",
			toSide: "top"
		})),
		...connectVerticalFan(securityLayer, coreNodes, "request"),
		edge(executor, dockerK8s, "data", {
			fromSide: "bottom",
			toSide: "top"
		}),
		edge(queue, queueInfra, "data", {
			fromSide: "bottom",
			toSide: "top"
		}),
		edge(queue, scheduler, "event", {
			fromSide: "bottom",
			toSide: "top"
		}),
		edge(builds, dockerK8s, "event", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(workerFunctions, executor, "event", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(maintenance, cache, "request", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(workerDatabase, database, "data", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(usage, database, "data", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(audits, database, "data", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(webhooks, queue, "event", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(deletes, queue, "event", {
			fromSide: "top",
			toSide: "bottom"
		}),
		edge(mails, smtp, "request", {
			fromSide: "bottom",
			toSide: "top"
		}),
		edge(certs, letsencrypt, "request", {
			fromSide: "bottom",
			toSide: "top"
		}),
		...connectApiModules(restApi, restApiModules, "link"),
		...connectApiModules(realtimeApi, [
			serviceFunctions,
			serviceDatabase,
			serviceStorage
		], "event")
	];
	return {
		title: "Appwrite architecture",
		theme: DEFAULT_COVER_THEME_ID,
		width: CANVAS_WIDTH,
		height: CANVAS_HEIGHT,
		format: "png",
		nodes: [
			clientsLabel,
			...clientNodes,
			appwrite,
			loadbalancer,
			sslGateway,
			...apiNodes,
			securityLayer,
			...coreNodes,
			dockerK8s,
			database,
			queueInfra,
			apiServicesLabel,
			...restApiModules,
			workersLabel,
			...executionWorkers,
			...queueWorkers,
			...dataWorkers,
			...integrationWorkers,
			smtp,
			letsencrypt
		],
		edges
	};
}
var DIAGRAM_TEMPLATE_EDGE_PRESETS = {
	request: {
		lineStyle: "solid",
		arrow: "forward",
		strokeTone: "default"
	},
	response: {
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted"
	},
	event: {
		lineStyle: "dashed",
		arrow: "forward",
		strokeTone: "muted"
	},
	data: {
		lineStyle: "dotted",
		arrow: "forward",
		strokeTone: "purple"
	},
	stream: {
		lineStyle: "solid",
		arrow: "both",
		strokeTone: "accent"
	},
	link: {
		lineStyle: "dotted",
		arrow: "none",
		strokeTone: "muted"
	}
};
function diagramEdge(fromNode, toNode, preset, overrides) {
	return createDiagramEdge(fromNode, toNode, {
		...DIAGRAM_TEMPLATE_EDGE_PRESETS[preset],
		...overrides
	});
}
function diagramElement(x, y, label, icon) {
	let iconSrc;
	if (icon === "/icons/appwrite.svg") iconSrc = DEFAULT_DIAGRAM_ICON;
	else if (icon) iconSrc = formatCoverLucideIconValue(icon);
	return createDiagramNode("service", {
		x,
		y
	}, {
		label,
		...iconSrc ? { iconSrc } : {}
	});
}
var DIAGRAM_TITLE_STACK_GAP = 16;
var DIAGRAM_TITLE_TO_CONTENT_GAP = 72;
var DIAGRAM_TITLE_GAP = DIAGRAM_TITLE_TO_CONTENT_GAP;
function diagramTitle(label, subtitle, width = 720) {
	return createDiagramNode("title", {
		x: 0,
		y: 0
	}, {
		label,
		subtitle,
		width,
		height: subtitle ? 88 : 56
	});
}
function diagramTitleAt(x, y, label, subtitle, width = 720) {
	return createDiagramNode("title", {
		x,
		y
	}, {
		label,
		subtitle,
		width,
		height: subtitle ? 88 : 56
	});
}
function withDiagramHeading(label, nodes, subtitle) {
	const heading = diagramTitle(label, subtitle);
	const offset = heading.height + DIAGRAM_TITLE_GAP;
	return [heading, ...nodes.map((node) => ({
		...node,
		y: snapDiagramValue(node.y + offset)
	}))];
}
var DIAGRAM_GROUP_PADDING = 32;
var DIAGRAM_GROUP_LABEL_BAND = 36;
var DIAGRAM_TEMPLATE_MARGIN = 56;
function getNodesBoundingBox(nodes) {
	const minX = Math.min(...nodes.map((node) => node.x));
	const minY = Math.min(...nodes.map((node) => node.y));
	const maxX = Math.max(...nodes.map((node) => node.x + node.width));
	const maxY = Math.max(...nodes.map((node) => node.y + node.height));
	return {
		minX,
		minY,
		maxX,
		maxY,
		width: maxX - minX,
		height: maxY - minY
	};
}
function fitNodesToArtboard(nodes, artboardWidth, artboardHeight, margin = DIAGRAM_TEMPLATE_MARGIN, reservedTop = 0) {
	if (nodes.length === 0) return nodes;
	const { minX, minY, width: contentWidth, height: contentHeight } = getNodesBoundingBox(nodes);
	const availableWidth = artboardWidth - margin * 2;
	const availableHeight = artboardHeight - margin * 2 - reservedTop;
	if (contentWidth <= 0 || contentHeight <= 0 || availableWidth <= 0 || availableHeight <= 0) return nodes;
	const scaleX = availableWidth / contentWidth;
	const scaleY = availableHeight / contentHeight;
	const contentCenterX = minX + contentWidth / 2;
	const contentCenterY = minY + contentHeight / 2;
	const artboardCenterX = artboardWidth / 2;
	const artboardCenterY = margin + reservedTop + availableHeight / 2;
	return nodes.map((node) => {
		const nodeCenterX = node.x + node.width / 2;
		const nodeCenterY = node.y + node.height / 2;
		const newCenterX = artboardCenterX + (nodeCenterX - contentCenterX) * scaleX;
		const newCenterY = artboardCenterY + (nodeCenterY - contentCenterY) * scaleY;
		return {
			...node,
			x: snapDiagramValue(newCenterX - node.width / 2),
			y: snapDiagramValue(newCenterY - node.height / 2)
		};
	});
}
function getDiagramTitleBlockHeight(titleNodes) {
	if (titleNodes.length === 0) return 0;
	const titlesHeight = titleNodes.reduce((total, node) => total + node.height, 0);
	const stackGaps = DIAGRAM_TITLE_STACK_GAP * Math.max(0, titleNodes.length - 1);
	return DIAGRAM_TEMPLATE_MARGIN + titlesHeight + stackGaps + DIAGRAM_TITLE_TO_CONTENT_GAP;
}
function positionDiagramTitlesAboveContent(titleNodes, bodyNodes, artboardWidth, margin = DIAGRAM_TEMPLATE_MARGIN, anchorTop) {
	if (titleNodes.length === 0) return [];
	const titleWidth = snapDiagramValue(Math.min(720, artboardWidth - margin * 2));
	let cursor = (anchorTop ?? (bodyNodes.length > 0 ? getNodesBoundingBox(bodyNodes).minY : margin + DIAGRAM_TITLE_TO_CONTENT_GAP)) - DIAGRAM_TITLE_TO_CONTENT_GAP;
	return [...titleNodes].reverse().map((title) => {
		const y = snapDiagramValue(cursor - title.height);
		cursor = y - DIAGRAM_TITLE_STACK_GAP;
		return {
			...title,
			width: titleWidth,
			x: snapDiagramValue((artboardWidth - titleWidth) / 2),
			y
		};
	}).reverse();
}
function splitDiagramTitleNodes(contentNodes) {
	return {
		titleNodes: contentNodes.filter((node) => node.kind === "title"),
		bodyNodes: contentNodes.filter((node) => node.kind !== "title")
	};
}
function createDiagramGroupFromNodes(label, nodes) {
	const minX = Math.min(...nodes.map((node) => node.x));
	const minY = Math.min(...nodes.map((node) => node.y));
	const maxX = Math.max(...nodes.map((node) => node.x + node.width));
	const maxY = Math.max(...nodes.map((node) => node.y + node.height));
	return createDiagramNode("group", {
		x: snapDiagramValue(minX - DIAGRAM_GROUP_PADDING),
		y: snapDiagramValue(minY - DIAGRAM_GROUP_PADDING - DIAGRAM_GROUP_LABEL_BAND)
	}, {
		label,
		width: snapDiagramValue(maxX - minX + DIAGRAM_GROUP_PADDING * 2),
		height: snapDiagramValue(maxY - minY + DIAGRAM_GROUP_PADDING * 2 + DIAGRAM_GROUP_LABEL_BAND)
	});
}
function finalizeTemplateDocument(base, title, contentNodes, edges, groupLabel, options) {
	const { titleNodes, bodyNodes } = splitDiagramTitleNodes(contentNodes);
	const reservedTop = getDiagramTitleBlockHeight(titleNodes);
	const fittedBody = options?.fit === false ? bodyNodes : fitNodesToArtboard(bodyNodes, base.width, base.height, DIAGRAM_TEMPLATE_MARGIN, reservedTop);
	const groupNode$1 = groupLabel ? createDiagramGroupFromNodes(groupLabel, fittedBody) : void 0;
	const positionedTitles = positionDiagramTitlesAboveContent(titleNodes, fittedBody, base.width, DIAGRAM_TEMPLATE_MARGIN, groupNode$1?.y);
	const contentLayer = groupNode$1 ? [groupNode$1, ...fittedBody] : fittedBody;
	return {
		...base,
		title,
		nodes: [...contentLayer, ...positionedTitles],
		edges
	};
}
function createDiagramFromTemplate(templateId) {
	const base = createDefaultDiagramDocument();
	switch (templateId) {
		case "blank": return base;
		case "three-tier": {
			const client = diagramElement(0, 0, "Client app");
			const api = diagramElement(360, 0, "API", "server");
			const database = diagramElement(720, 0, "Database", "database");
			return finalizeTemplateDocument(base, "Three-tier architecture", withDiagramHeading("Three-tier architecture", [
				client,
				api,
				database
			], "Client, API, and database"), [diagramEdge(client, api, "request", { label: "HTTPS" }), diagramEdge(api, database, "data", { label: "SQL" })]);
		}
		case "serverless": {
			const client = diagramElement(0, 48, "Client app");
			const functions = diagramElement(300, 0, "Functions", "zap");
			const database = diagramElement(660, 0, "Database", "database");
			const storage = diagramElement(660, 180, "Storage", "hard-drive");
			return finalizeTemplateDocument(base, "Serverless stack", withDiagramHeading("Serverless stack", [
				client,
				functions,
				database,
				storage
			], "Functions with data and storage"), [
				diagramEdge(client, functions, "request", { label: "Invoke" }),
				diagramEdge(functions, database, "data", { label: "SQL" }),
				diagramEdge(functions, storage, "event", { label: "Files" })
			]);
		}
		case "realtime-flow": {
			const client = diagramElement(0, 0, "Client app");
			const realtime = diagramElement(340, 0, "Realtime", "radio");
			const database = diagramElement(700, 0, "Database", "database");
			return finalizeTemplateDocument(base, "Realtime flow", withDiagramHeading("Realtime flow", [
				client,
				realtime,
				database
			], "Subscribe and event flow"), [diagramEdge(client, realtime, "stream", { label: "WebSocket" }), diagramEdge(realtime, database, "event", { label: "Events" })], "Realtime data flow");
		}
		case "appwrite-architecture": return createAppwriteArchitectureDiagram();
		case "appwrite-platform": {
			const heading = diagramTitleAt(240, 48, "Appwrite platform", "Clients, API, and core project services");
			const webApp = diagramElement(64, 248, "Web app", "monitor");
			const mobileApp = diagramElement(64, 408, "Mobile app", "smartphone");
			const appwrite = diagramElement(352, 328, "Appwrite", DEFAULT_DIAGRAM_ICON);
			const auth = diagramElement(640, 248, "Auth", "key-round");
			const storage = diagramElement(640, 408, "Storage", "hard-drive");
			const database = diagramElement(928, 248, "Database", "database");
			const functions = diagramElement(928, 408, "Functions", "zap");
			return finalizeTemplateDocument(base, "Appwrite platform", [
				heading,
				webApp,
				mobileApp,
				appwrite,
				auth,
				database,
				storage,
				functions
			], [
				diagramEdge(webApp, appwrite, "request", {
					label: "HTTPS",
					fromSide: "right",
					toSide: "left"
				}),
				diagramEdge(mobileApp, appwrite, "request", {
					label: "HTTPS",
					fromSide: "right",
					toSide: "left"
				}),
				diagramEdge(appwrite, auth, "request", {
					label: "REST",
					strokeTone: "accent",
					fromSide: "right",
					toSide: "left"
				}),
				diagramEdge(appwrite, storage, "event", {
					label: "REST",
					fromSide: "right",
					toSide: "left"
				}),
				diagramEdge(auth, database, "data", {
					fromSide: "right",
					toSide: "left"
				}),
				diagramEdge(storage, functions, "response", {
					fromSide: "right",
					toSide: "left"
				})
			], "Appwrite project", { fit: false });
		}
		case "appwrite-auth": {
			const client = diagramElement(0, 24, "Client app");
			const auth = diagramElement(320, 24, "Auth", "key-round");
			const usersTable = createDiagramNode("table", {
				x: 640,
				y: 0
			}, {
				label: "Users",
				width: 280,
				height: 176,
				tableHeaders: [
					"$id",
					"email",
					"name"
				],
				tableRows: [[
					"user_1",
					"user@example.com",
					"Alex"
				], [
					"user_2",
					"team@example.com",
					"Sam"
				]]
			});
			return finalizeTemplateDocument(base, "Appwrite auth", withDiagramHeading("Appwrite auth", [
				client,
				auth,
				usersTable
			], "Sign in, sessions, and users table"), [diagramEdge(client, auth, "request", { label: "Sign in" }), diagramEdge(auth, usersTable, "data", { label: "Sessions" })], "Authentication");
		}
		case "appwrite-storage": {
			const client = diagramElement(0, 80, "Client app");
			const storage = diagramElement(256, 80, "Storage", "hard-drive");
			const functions = diagramElement(528, 0, "Functions", "zap");
			const database = diagramElement(528, 192, "Database", "database");
			return finalizeTemplateDocument(base, "Appwrite storage", withDiagramHeading("Appwrite storage", [
				client,
				storage,
				functions,
				database
			], "Uploads, functions, and file metadata"), [
				diagramEdge(client, storage, "request", { label: "Upload" }),
				diagramEdge(storage, functions, "event", { label: "Event" }),
				diagramEdge(storage, database, "data", { label: "Metadata" }),
				diagramEdge(functions, database, "response", { label: "Update" })
			], "File storage");
		}
		case "appwrite-messaging": {
			const functions = diagramElement(0, 80, "Functions", "zap");
			const messaging = diagramElement(288, 80, "Messaging", "mail");
			const email = diagramElement(608, 0, "Email provider", "mail");
			const push = diagramElement(608, 192, "Push provider", "bell");
			return finalizeTemplateDocument(base, "Appwrite messaging", withDiagramHeading("Appwrite messaging", [
				functions,
				messaging,
				email,
				push
			], "Function triggers to email and push"), [
				diagramEdge(functions, messaging, "event", { label: "Trigger" }),
				diagramEdge(messaging, email, "request", {
					label: "Send email",
					strokeTone: "accent"
				}),
				diagramEdge(messaging, push, "link", { label: "Send push" })
			], "Messaging");
		}
	}
}
function getDiagramPlacementOffset(index) {
	return index % 6 * 16;
}
function getDiagramNodeCenterPlacement(document$1, node, index = 0) {
	const offset = getDiagramPlacementOffset(index);
	return {
		x: snapDiagramValue((document$1.width - node.width) / 2 + offset),
		y: snapDiagramValue((document$1.height - node.height) / 2 + offset)
	};
}
function normalizeDiagramDocument(document$1) {
	return {
		...document$1,
		theme: resolveCoverEditorThemeId(document$1.theme),
		format: document$1.format === "jpeg" || document$1.format === "avif" ? document$1.format : "png",
		nodes: Array.isArray(document$1.nodes) ? document$1.nodes.map((node) => normalizeDiagramNode(node)) : [],
		edges: Array.isArray(document$1.edges) ? document$1.edges.map((edge$1) => normalizeDiagramEdge(edge$1)) : []
	};
}
function resolveDiagramCanvasSize(width, height) {
	if (Number.isFinite(width) && Number.isFinite(height) && width >= 320 && width <= 4096 && height >= 200 && height <= 4096) return {
		width: Math.round(width),
		height: Math.round(height)
	};
	return resolveDiagramSizePresetKey("og");
}
const USER_PREFS_KEY_DIAGRAM_GENERATIONS = "console.diagramGenerator.generations";
const DIAGRAM_GENERATIONS_LOCAL_STORAGE_KEY = "console.diagramGenerator.generations";
const MAX_SAVED_DIAGRAM_GENERATION_NAME_LENGTH = 64;
function isValidSavedDiagramGeneration(value) {
	if (value == null || typeof value !== "object") return false;
	const item = value;
	return typeof item.id === "string" && typeof item.name === "string" && typeof item.updatedAt === "number" && Number.isFinite(item.updatedAt) && item.document != null && typeof item.document === "object";
}
function parseSavedDiagramGenerations(raw) {
	let parsed = raw;
	if (typeof raw === "string") {
		const trimmed = raw.trim();
		if (!trimmed) return [];
		try {
			parsed = JSON.parse(trimmed);
		} catch {
			return [];
		}
	}
	if (!Array.isArray(parsed)) return [];
	return parsed.filter(isValidSavedDiagramGeneration).map((item) => ({
		id: item.id,
		name: String(item.name).trim().slice(0, 64) || "Untitled diagram",
		updatedAt: item.updatedAt,
		...item.templateId ? { templateId: item.templateId } : {},
		document: normalizeDiagramDocument(item.document)
	})).sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 30);
}
function buildSavedDiagramGenerationsPrefs(list) {
	return { [USER_PREFS_KEY_DIAGRAM_GENERATIONS]: JSON.stringify(list.slice(0, 30)) };
}
function mergeDiagramGenerationsIntoPrefs(prefs, list) {
	return {
		...prefs,
		...buildSavedDiagramGenerationsPrefs(list)
	};
}
function upsertSavedDiagramGeneration(list, entry) {
	return [{
		id: entry.id,
		name: entry.name.trim().slice(0, 64) || "Untitled diagram",
		updatedAt: entry.updatedAt,
		...entry.templateId ? { templateId: entry.templateId } : {},
		document: normalizeDiagramDocument(entry.document)
	}, ...list.filter((item) => item.id !== entry.id)].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 30);
}
function removeSavedDiagramGeneration(list, id) {
	return list.filter((item) => item.id !== id);
}
const USER_PREFS_KEY_API_REFERENCE_UI = "console.apiReference.ui";
const API_REFERENCE_UI_LOCAL_STORAGE_KEY = USER_PREFS_KEY_API_REFERENCE_UI;
const DEFAULT_API_REFERENCE_UI_PREFS = {
	version: "cloud",
	platformMode: "client",
	clientPlatform: getDefaultReferencePlatform("client"),
	serverPlatform: getDefaultReferencePlatform("server"),
	cards: {
		parameters: true,
		responses: true
	}
};
function parseCardPrefs(raw) {
	if (!raw || typeof raw !== "object") return null;
	const parameters = typeof raw.parameters === "boolean" ? raw.parameters : void 0;
	const responses = typeof raw.responses === "boolean" ? raw.responses : void 0;
	if (parameters === void 0 && responses === void 0) return null;
	return {
		parameters: parameters ?? DEFAULT_API_REFERENCE_UI_PREFS.cards.parameters,
		responses: responses ?? DEFAULT_API_REFERENCE_UI_PREFS.cards.responses
	};
}
function parsePlatformMode(value) {
	if (value === "client" || value === "server") return value;
}
function parsePartialApiReferenceUiPrefs(raw) {
	if (!raw || typeof raw !== "object") return null;
	const json = raw;
	const version = typeof json.version === "string" && isReferenceVersion(json.version) ? json.version : void 0;
	const platformMode = parsePlatformMode(json.platformMode);
	const clientPlatform = typeof json.clientPlatform === "string" && isReferencePlatform(json.clientPlatform) ? json.clientPlatform : void 0;
	const serverPlatform = typeof json.serverPlatform === "string" && isReferencePlatform(json.serverPlatform) ? json.serverPlatform : void 0;
	const cards = parseCardPrefs(json.cards);
	if (!version && !platformMode && !clientPlatform && !serverPlatform && !cards) return null;
	return {
		...version ? { version } : {},
		...platformMode ? { platformMode } : {},
		...clientPlatform ? { clientPlatform } : {},
		...serverPlatform ? { serverPlatform } : {},
		...cards ? { cards } : {}
	};
}
function parseApiReferenceUiPrefsFromJson(raw) {
	if (typeof raw === "string") {
		if (raw.length === 0) return null;
		try {
			return parsePartialApiReferenceUiPrefs(JSON.parse(raw));
		} catch {
			return null;
		}
	}
	return parsePartialApiReferenceUiPrefs(raw);
}
function parseApiReferenceUiPrefs(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_API_REFERENCE_UI];
	return parseApiReferenceUiPrefsFromJson(raw);
}
function readApiReferenceUiPrefsFromLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(API_REFERENCE_UI_LOCAL_STORAGE_KEY);
		if (!raw) return null;
		return parseApiReferenceUiPrefsFromJson(raw);
	} catch {
		return null;
	}
}
function writeApiReferenceUiPrefsToLocalStorage(prefs) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(API_REFERENCE_UI_LOCAL_STORAGE_KEY, JSON.stringify(prefs));
	} catch {}
}
function resolveApiReferenceUiPrefs(accountPrefs) {
	const fromAccount = parseApiReferenceUiPrefs(accountPrefs);
	const fromStorage = readApiReferenceUiPrefsFromLocalStorage();
	return {
		...DEFAULT_API_REFERENCE_UI_PREFS,
		...fromStorage,
		...fromAccount,
		cards: {
			...DEFAULT_API_REFERENCE_UI_PREFS.cards,
			...fromStorage?.cards,
			...fromAccount?.cards
		}
	};
}
function mergeApiReferenceUiPrefs(current, patch) {
	return {
		...current,
		...patch,
		cards: {
			...current.cards,
			...patch.cards
		}
	};
}
function mergeApiReferenceUiPrefsIntoAccountPrefs(prefs, uiPrefs) {
	return {
		...prefs,
		[USER_PREFS_KEY_API_REFERENCE_UI]: JSON.stringify(uiPrefs)
	};
}
function getApiReferencePlatformForMode(prefs, mode = prefs.platformMode) {
	return mode === "client" ? prefs.clientPlatform : prefs.serverPlatform;
}
const USER_PREFS_KEY_ORGANIZATION = "organization";
const USER_PREFS_KEY_FEATURE_NOTIFICATIONS = "featureNotifications";
const APPWRITE_ACCOUNT_PREFS_MAX_BYTES = 65535;
function sanitizeAccountPrefsForWrite(prefs) {
	const out = {};
	for (const [key, value] of Object.entries(prefs)) if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
		if (typeof value === "number" && !Number.isFinite(value)) continue;
		out[key] = value;
	}
	return out;
}
function getAccountPrefsPayloadByteSize(prefs) {
	return new TextEncoder().encode(JSON.stringify(sanitizeAccountPrefsForWrite(prefs))).length;
}
function isAccountPrefsPayloadWithinLimit(prefs, maxBytes = APPWRITE_ACCOUNT_PREFS_MAX_BYTES) {
	return getAccountPrefsPayloadByteSize(prefs) <= maxBytes;
}
const USER_PREFS_KEY_SAVED_FILTERS_PREFIX = "console.savedFilters";
function getSavedFiltersKey(scope) {
	return `${USER_PREFS_KEY_SAVED_FILTERS_PREFIX}.${scope}`;
}
function parseSavedFilters(prefs, scope) {
	const key = getSavedFiltersKey(scope);
	if (!prefs || typeof prefs[key] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[key]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.name === "string" && typeof item.query === "string").map((item) => {
			const s = item;
			return {
				id: s.id,
				name: String(s.name).slice(0, 64),
				query: s.query,
				...typeof s.sort === "string" ? { sort: s.sort } : {}
			};
		}).slice(0, 20);
	} catch {
		return [];
	}
}
function buildSavedFiltersPrefs(scope, list) {
	const key = getSavedFiltersKey(scope);
	const trimmed = list.slice(0, 20);
	return { [key]: JSON.stringify(trimmed) };
}
const USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS = "console.imageTransformPresets";
const MAX_SAVED_IMAGE_TRANSFORM_PRESET_JSON_CHARS = 24e3;
function parseSavedImageTransformPresets(prefs) {
	if (!prefs || typeof prefs["console.imageTransformPresets"] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.name === "string" && typeof item.json === "string").map((item) => {
			const p = item;
			const json = typeof p.json === "string" ? p.json.slice(0, MAX_SAVED_IMAGE_TRANSFORM_PRESET_JSON_CHARS) : "";
			return {
				id: p.id,
				name: String(p.name).slice(0, 64),
				json
			};
		}).slice(0, 20);
	} catch {
		return [];
	}
}
function buildSavedImageTransformPresetsPrefs(list) {
	return { [USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS]: JSON.stringify(list.slice(0, 20)) };
}
const USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_PREFIX = "console.postgresSavedQueries";
const MAX_SAVED_POSTGRES_QUERIES = 30;
const MAX_SAVED_POSTGRES_QUERY_NAME_LENGTH = 64;
const MAX_SAVED_POSTGRES_QUERY_SQL_CHARS = 48e3;
function getPostgresSavedQueriesKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_PREFIX}.${databaseId}`;
}
function parsePostgresSavedQueries(prefs, databaseId) {
	if (!prefs || !databaseId) return [];
	const stored = prefs[getPostgresSavedQueriesKey(databaseId)];
	let raw;
	if (typeof stored === "string") try {
		raw = JSON.parse(stored);
	} catch {
		return [];
	}
	else if (Array.isArray(stored)) raw = stored;
	else return [];
	if (!Array.isArray(raw)) return [];
	return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.name === "string" && typeof item.sql === "string").map((item) => {
		const query = item;
		return {
			id: query.id,
			name: String(query.name).slice(0, 64),
			sql: String(query.sql).slice(0, MAX_SAVED_POSTGRES_QUERY_SQL_CHARS)
		};
	}).slice(0, 30);
}
function buildPostgresSavedQueriesPrefs(databaseId, list) {
	return { [getPostgresSavedQueriesKey(databaseId)]: JSON.stringify(list.slice(0, 30)) };
}
const USER_PREFS_KEY_POSTGRES_QUERY_HISTORY_PREFIX = "console.postgresQueryHistory";
const MAX_POSTGRES_QUERY_HISTORY_ENTRIES = 30;
function getPostgresQueryHistoryKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_QUERY_HISTORY_PREFIX}.${databaseId}`;
}
function parsePostgresQueryHistory(prefs, databaseId) {
	if (!prefs || !databaseId) return [];
	const key = getPostgresQueryHistoryKey(databaseId);
	if (typeof prefs[key] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[key]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.sql === "string" && typeof item.ranAt === "number" && Number.isFinite(item.ranAt)).map((item) => {
			const entry = item;
			const sql = String(entry.sql).trim();
			if (!sql) return null;
			return {
				id: entry.id,
				sql: sql.slice(0, MAX_SAVED_POSTGRES_QUERY_SQL_CHARS),
				ranAt: entry.ranAt
			};
		}).filter((entry) => entry != null).slice(0, 30);
	} catch {
		return [];
	}
}
function mergePostgresQueryHistoryIntoPrefs(prefs, databaseId, history) {
	const key = getPostgresQueryHistoryKey(databaseId);
	return {
		...prefs,
		[key]: JSON.stringify(history.slice(0, 30))
	};
}
const USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SCOPE_PREFIX = "console.postgresSavedQueriesScope";
function getPostgresSavedQueriesScopeKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SCOPE_PREFIX}.${databaseId}`;
}
function parsePostgresSavedQueriesScope(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const value = prefs[getPostgresSavedQueriesScopeKey(databaseId)];
	if (value === "user" || value === "team") return value;
	return null;
}
function buildPostgresSavedQueriesScopePrefs(databaseId, scope) {
	return { [getPostgresSavedQueriesScopeKey(databaseId)]: scope };
}
const USER_PREFS_KEY_POSTGRES_SELECTED_SCHEMA_PREFIX = "console.postgresSelectedSchema";
function getPostgresSelectedSchemaKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SELECTED_SCHEMA_PREFIX}.${databaseId}`;
}
function parsePostgresSelectedSchema(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const value = prefs[getPostgresSelectedSchemaKey(databaseId)];
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : null;
}
function buildPostgresSelectedSchemaPrefs(databaseId, schema) {
	return { [getPostgresSelectedSchemaKey(databaseId)]: schema.trim() };
}
function resolvePostgresSelectedSchema(args) {
	const { schemas, persisted } = args;
	if (persisted) return persisted;
	if (schemas.length === 0) return null;
	if (schemas.includes("public")) return "public";
	return schemas[0] ?? null;
}
const USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SORT_PREFIX = "console.postgresSavedQueriesSort";
const POSTGRES_SAVED_QUERIES_DEFAULT_SORT = "saved_desc";
var POSTGRES_SAVED_QUERIES_SORT_VALUES = [
	"saved_desc",
	"saved_asc",
	"name_asc",
	"name_desc"
];
const POSTGRES_SAVED_QUERIES_SORT_OPTIONS = [
	{
		value: "saved_desc",
		label: "Newest first"
	},
	{
		value: "saved_asc",
		label: "Oldest first"
	},
	{
		value: "name_asc",
		label: "Name (A to Z)"
	},
	{
		value: "name_desc",
		label: "Name (Z to A)"
	}
];
function getPostgresSavedQueriesSortKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SORT_PREFIX}.${databaseId}`;
}
function parsePostgresSavedQueriesSort(prefs, databaseId) {
	if (!prefs || !databaseId) return POSTGRES_SAVED_QUERIES_DEFAULT_SORT;
	const value = prefs[getPostgresSavedQueriesSortKey(databaseId)];
	if (typeof value === "string" && POSTGRES_SAVED_QUERIES_SORT_VALUES.includes(value)) return value;
	return POSTGRES_SAVED_QUERIES_DEFAULT_SORT;
}
function buildPostgresSavedQueriesSortPrefs(databaseId, sort) {
	return { [getPostgresSavedQueriesSortKey(databaseId)]: sort };
}
function sortSavedPostgresQueries(queries, sort) {
	switch (sort) {
		case "name_asc": return [...queries].sort((a, b) => a.name.localeCompare(b.name, void 0, { sensitivity: "base" }));
		case "name_desc": return [...queries].sort((a, b) => b.name.localeCompare(a.name, void 0, { sensitivity: "base" }));
		case "saved_asc": return [...queries].reverse();
		case "saved_desc":
		default: return queries;
	}
}
const USER_PREFS_KEY_POSTGRES_SIDEBAR_TABLES_SORT_PREFIX = "console.postgresSidebarTablesSort";
const POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT = "name_asc";
var POSTGRES_SIDEBAR_TABLES_SORT_VALUES = [
	"list_desc",
	"list_asc",
	"name_asc",
	"name_desc"
];
const POSTGRES_SIDEBAR_TABLES_SORT_OPTIONS = [
	{
		value: "name_asc",
		label: "Name (A to Z)"
	},
	{
		value: "name_desc",
		label: "Name (Z to A)"
	},
	{
		value: "list_desc",
		label: "Default order"
	},
	{
		value: "list_asc",
		label: "Reverse order"
	}
];
function getPostgresSidebarTablesSortKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SIDEBAR_TABLES_SORT_PREFIX}.${databaseId}`;
}
function parsePostgresSidebarTablesSort(prefs, databaseId) {
	if (!prefs || !databaseId) return POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT;
	const value = prefs[getPostgresSidebarTablesSortKey(databaseId)];
	if (typeof value === "string" && POSTGRES_SIDEBAR_TABLES_SORT_VALUES.includes(value)) return value;
	return POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT;
}
function buildPostgresSidebarTablesSortPrefs(databaseId, sort) {
	return { [getPostgresSidebarTablesSortKey(databaseId)]: sort };
}
function sortPostgresSidebarTableRows(tables, sort) {
	switch (sort) {
		case "name_asc": return [...tables].sort((a, b) => a.table_name.localeCompare(b.table_name, void 0, { sensitivity: "base" }));
		case "name_desc": return [...tables].sort((a, b) => b.table_name.localeCompare(a.table_name, void 0, { sensitivity: "base" }));
		case "list_asc": return [...tables].reverse();
		case "list_desc":
		default: return tables;
	}
}
const USER_PREFS_KEY_POSTGRES_SIDEBAR_PANEL_PREFIX = "console.postgresSidebarPanel";
const POSTGRES_SIDEBAR_PANEL_DEFAULT = "schemas";
var POSTGRES_SIDEBAR_PANEL_VALUES = [
	"schemas",
	"queries",
	"history"
];
function getPostgresSidebarPanelKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SIDEBAR_PANEL_PREFIX}.${databaseId}`;
}
function parsePostgresSidebarPanel(prefs, databaseId) {
	if (!prefs || !databaseId) return POSTGRES_SIDEBAR_PANEL_DEFAULT;
	const value = prefs[getPostgresSidebarPanelKey(databaseId)];
	if (typeof value === "string" && POSTGRES_SIDEBAR_PANEL_VALUES.includes(value)) return value;
	return POSTGRES_SIDEBAR_PANEL_DEFAULT;
}
function buildPostgresSidebarPanelPrefs(databaseId, panel) {
	return { [getPostgresSidebarPanelKey(databaseId)]: panel };
}
const USER_PREFS_KEY_POSTGRES_SQL_EDITOR_STATE_PREFIX = "console.postgresSqlEditorState";
const MAX_POSTGRES_SQL_EDITOR_TAB_TITLE_LENGTH = 64;
function getPostgresSqlEditorStateKey(databaseId) {
	return `${USER_PREFS_KEY_POSTGRES_SQL_EDITOR_STATE_PREFIX}.${databaseId}`;
}
function parsePostgresSqlEditorState(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const stored = prefs[getPostgresSqlEditorStateKey(databaseId)];
	let raw;
	if (typeof stored === "string") try {
		raw = JSON.parse(stored);
	} catch {
		return null;
	}
	else if (stored != null && typeof stored === "object") raw = stored;
	else return null;
	if (!raw || typeof raw !== "object") return null;
	const record = raw;
	if (!Array.isArray(record.tabs)) return null;
	const tabs = record.tabs.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.title === "string" && typeof item.sql === "string").map((item) => {
		const tab = item;
		const tableId = typeof tab.tableId === "string" && tab.tableId.trim() ? tab.tableId.trim() : void 0;
		return {
			id: tab.id,
			title: String(tab.title).slice(0, 64),
			sql: String(tab.sql).slice(0, MAX_SAVED_POSTGRES_QUERY_SQL_CHARS),
			...tableId ? { tableId } : {}
		};
	}).slice(0, 20);
	if (tabs.length === 0) return null;
	return {
		tabs,
		activeTabId: typeof record.activeTabId === "string" && tabs.some((tab) => tab.id === record.activeTabId) ? record.activeTabId : tabs[0].id
	};
}
function buildPostgresSqlEditorStatePrefs(databaseId, state) {
	const key = getPostgresSqlEditorStateKey(databaseId);
	const tabs = state.tabs.slice(0, 20).map((tab) => ({
		id: tab.id,
		title: String(tab.title).slice(0, 64),
		sql: String(tab.sql).slice(0, MAX_SAVED_POSTGRES_QUERY_SQL_CHARS),
		...tab.tableId ? { tableId: tab.tableId } : {}
	}));
	const activeTabId = tabs.some((tab) => tab.id === state.activeTabId) ? state.activeTabId : tabs[0]?.id ?? state.activeTabId;
	return { [key]: JSON.stringify({
		tabs,
		activeTabId
	}) };
}
function mergePostgresSqlEditorStateIntoPrefs(prefs, databaseId, state) {
	return {
		...prefs,
		...buildPostgresSqlEditorStatePrefs(databaseId, state)
	};
}
function resolvePostgresSavedQueriesScope(args) {
	const { persisted, hasTeamLevel, userQueryCount, teamQueryCount } = args;
	if (persisted === "user") return "user";
	if (persisted === "team" && hasTeamLevel) return "team";
	if (!hasTeamLevel) return "user";
	if (userQueryCount > 0 && teamQueryCount === 0) return "user";
	if (teamQueryCount > 0 && userQueryCount === 0) return "team";
	return "user";
}
const USER_PREFS_KEY_MYSQL_SAVED_QUERIES_PREFIX = "console.mysqlSavedQueries";
const MAX_SAVED_MYSQL_QUERIES = 30;
const MAX_SAVED_MYSQL_QUERY_NAME_LENGTH = 64;
const MAX_SAVED_MYSQL_QUERY_SQL_CHARS = 48e3;
function getMysqlSavedQueriesKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SAVED_QUERIES_PREFIX}.${databaseId}`;
}
function parseMysqlSavedQueries(prefs, databaseId) {
	if (!prefs || !databaseId) return [];
	const stored = prefs[getMysqlSavedQueriesKey(databaseId)];
	let raw;
	if (typeof stored === "string") try {
		raw = JSON.parse(stored);
	} catch {
		return [];
	}
	else if (Array.isArray(stored)) raw = stored;
	else return [];
	if (!Array.isArray(raw)) return [];
	return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.name === "string" && typeof item.sql === "string").map((item) => {
		const query = item;
		return {
			id: query.id,
			name: String(query.name).slice(0, 64),
			sql: String(query.sql).slice(0, MAX_SAVED_MYSQL_QUERY_SQL_CHARS)
		};
	}).slice(0, 30);
}
function buildMysqlSavedQueriesPrefs(databaseId, list) {
	return { [getMysqlSavedQueriesKey(databaseId)]: JSON.stringify(list.slice(0, 30)) };
}
const USER_PREFS_KEY_MYSQL_QUERY_HISTORY_PREFIX = "console.mysqlQueryHistory";
const MAX_MYSQL_QUERY_HISTORY_ENTRIES = 30;
function getMysqlQueryHistoryKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_QUERY_HISTORY_PREFIX}.${databaseId}`;
}
function parseMysqlQueryHistory(prefs, databaseId) {
	if (!prefs || !databaseId) return [];
	const key = getMysqlQueryHistoryKey(databaseId);
	if (typeof prefs[key] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[key]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.sql === "string" && typeof item.ranAt === "number" && Number.isFinite(item.ranAt)).map((item) => {
			const entry = item;
			const sql = String(entry.sql).trim();
			if (!sql) return null;
			return {
				id: entry.id,
				sql: sql.slice(0, MAX_SAVED_MYSQL_QUERY_SQL_CHARS),
				ranAt: entry.ranAt
			};
		}).filter((entry) => entry != null).slice(0, 30);
	} catch {
		return [];
	}
}
function mergeMysqlQueryHistoryIntoPrefs(prefs, databaseId, history) {
	const key = getMysqlQueryHistoryKey(databaseId);
	return {
		...prefs,
		[key]: JSON.stringify(history.slice(0, 30))
	};
}
const USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SCOPE_PREFIX = "console.mysqlSavedQueriesScope";
function getMysqlSavedQueriesScopeKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SCOPE_PREFIX}.${databaseId}`;
}
function parseMysqlSavedQueriesScope(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const value = prefs[getMysqlSavedQueriesScopeKey(databaseId)];
	if (value === "user" || value === "team") return value;
	return null;
}
function buildMysqlSavedQueriesScopePrefs(databaseId, scope) {
	return { [getMysqlSavedQueriesScopeKey(databaseId)]: scope };
}
const USER_PREFS_KEY_MYSQL_SELECTED_SCHEMA_PREFIX = "console.mysqlSelectedSchema";
function getMysqlSelectedSchemaKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SELECTED_SCHEMA_PREFIX}.${databaseId}`;
}
function parseMysqlSelectedSchema(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const value = prefs[getMysqlSelectedSchemaKey(databaseId)];
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : null;
}
function buildMysqlSelectedSchemaPrefs(databaseId, schema) {
	return { [getMysqlSelectedSchemaKey(databaseId)]: schema.trim() };
}
function resolveMysqlSelectedSchema(args) {
	const { schemas, persisted } = args;
	const normalizedSchemas = schemas.map((schema) => typeof schema === "string" ? schema.trim() : "").filter((schema) => schema.length > 0);
	if (persisted) {
		const trimmed = persisted.trim();
		if (trimmed) return trimmed;
	}
	if (normalizedSchemas.length === 0) return null;
	const systemSchemas = new Set([
		"mysql",
		"information_schema",
		"performance_schema",
		"sys"
	]);
	const userSchema = normalizedSchemas.find((schema) => !systemSchemas.has(schema.toLowerCase()));
	if (userSchema) return userSchema;
	if (normalizedSchemas.includes("public")) return "public";
	return normalizedSchemas[0] ?? null;
}
const USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SORT_PREFIX = "console.mysqlSavedQueriesSort";
const MYSQL_SAVED_QUERIES_DEFAULT_SORT = "saved_desc";
var MYSQL_SAVED_QUERIES_SORT_VALUES = [
	"saved_desc",
	"saved_asc",
	"name_asc",
	"name_desc"
];
const MYSQL_SAVED_QUERIES_SORT_OPTIONS = [
	{
		value: "saved_desc",
		label: "Newest first"
	},
	{
		value: "saved_asc",
		label: "Oldest first"
	},
	{
		value: "name_asc",
		label: "Name (A to Z)"
	},
	{
		value: "name_desc",
		label: "Name (Z to A)"
	}
];
function getMysqlSavedQueriesSortKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SORT_PREFIX}.${databaseId}`;
}
function parseMysqlSavedQueriesSort(prefs, databaseId) {
	if (!prefs || !databaseId) return MYSQL_SAVED_QUERIES_DEFAULT_SORT;
	const value = prefs[getMysqlSavedQueriesSortKey(databaseId)];
	if (typeof value === "string" && MYSQL_SAVED_QUERIES_SORT_VALUES.includes(value)) return value;
	return MYSQL_SAVED_QUERIES_DEFAULT_SORT;
}
function buildMysqlSavedQueriesSortPrefs(databaseId, sort) {
	return { [getMysqlSavedQueriesSortKey(databaseId)]: sort };
}
function sortSavedMysqlQueries(queries, sort) {
	switch (sort) {
		case "name_asc": return [...queries].sort((a, b) => a.name.localeCompare(b.name, void 0, { sensitivity: "base" }));
		case "name_desc": return [...queries].sort((a, b) => b.name.localeCompare(a.name, void 0, { sensitivity: "base" }));
		case "saved_asc": return [...queries].reverse();
		case "saved_desc":
		default: return queries;
	}
}
const USER_PREFS_KEY_MYSQL_SIDEBAR_TABLES_SORT_PREFIX = "console.mysqlSidebarTablesSort";
const MYSQL_SIDEBAR_TABLES_DEFAULT_SORT = "name_asc";
var MYSQL_SIDEBAR_TABLES_SORT_VALUES = [
	"list_desc",
	"list_asc",
	"name_asc",
	"name_desc"
];
const MYSQL_SIDEBAR_TABLES_SORT_OPTIONS = [
	{
		value: "name_asc",
		label: "Name (A to Z)"
	},
	{
		value: "name_desc",
		label: "Name (Z to A)"
	},
	{
		value: "list_desc",
		label: "Default order"
	},
	{
		value: "list_asc",
		label: "Reverse order"
	}
];
function getMysqlSidebarTablesSortKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SIDEBAR_TABLES_SORT_PREFIX}.${databaseId}`;
}
function parseMysqlSidebarTablesSort(prefs, databaseId) {
	if (!prefs || !databaseId) return MYSQL_SIDEBAR_TABLES_DEFAULT_SORT;
	const value = prefs[getMysqlSidebarTablesSortKey(databaseId)];
	if (typeof value === "string" && MYSQL_SIDEBAR_TABLES_SORT_VALUES.includes(value)) return value;
	return MYSQL_SIDEBAR_TABLES_DEFAULT_SORT;
}
function buildMysqlSidebarTablesSortPrefs(databaseId, sort) {
	return { [getMysqlSidebarTablesSortKey(databaseId)]: sort };
}
function sortMysqlSidebarTableRows(tables, sort) {
	switch (sort) {
		case "name_asc": return [...tables].sort((a, b) => a.table_name.localeCompare(b.table_name, void 0, { sensitivity: "base" }));
		case "name_desc": return [...tables].sort((a, b) => b.table_name.localeCompare(a.table_name, void 0, { sensitivity: "base" }));
		case "list_asc": return [...tables].reverse();
		case "list_desc":
		default: return tables;
	}
}
const USER_PREFS_KEY_MYSQL_SIDEBAR_PANEL_PREFIX = "console.mysqlSidebarPanel";
const MYSQL_SIDEBAR_PANEL_DEFAULT = "schemas";
var MYSQL_SIDEBAR_PANEL_VALUES = [
	"schemas",
	"queries",
	"history"
];
function getMysqlSidebarPanelKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SIDEBAR_PANEL_PREFIX}.${databaseId}`;
}
function parseMysqlSidebarPanel(prefs, databaseId) {
	if (!prefs || !databaseId) return MYSQL_SIDEBAR_PANEL_DEFAULT;
	const value = prefs[getMysqlSidebarPanelKey(databaseId)];
	if (typeof value === "string" && MYSQL_SIDEBAR_PANEL_VALUES.includes(value)) return value;
	return MYSQL_SIDEBAR_PANEL_DEFAULT;
}
function buildMysqlSidebarPanelPrefs(databaseId, panel) {
	return { [getMysqlSidebarPanelKey(databaseId)]: panel };
}
const USER_PREFS_KEY_MYSQL_SQL_EDITOR_STATE_PREFIX = "console.mysqlSqlEditorState";
const MAX_MYSQL_SQL_EDITOR_TAB_TITLE_LENGTH = 64;
function getMysqlSqlEditorStateKey(databaseId) {
	return `${USER_PREFS_KEY_MYSQL_SQL_EDITOR_STATE_PREFIX}.${databaseId}`;
}
function parseMysqlSqlEditorState(prefs, databaseId) {
	if (!prefs || !databaseId) return null;
	const stored = prefs[getMysqlSqlEditorStateKey(databaseId)];
	let raw;
	if (typeof stored === "string") try {
		raw = JSON.parse(stored);
	} catch {
		return null;
	}
	else if (stored != null && typeof stored === "object") raw = stored;
	else return null;
	if (!raw || typeof raw !== "object") return null;
	const record = raw;
	if (!Array.isArray(record.tabs)) return null;
	const tabs = record.tabs.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.title === "string" && typeof item.sql === "string").map((item) => {
		const tab = item;
		const tableId = typeof tab.tableId === "string" && tab.tableId.trim() ? tab.tableId.trim() : void 0;
		return {
			id: tab.id,
			title: String(tab.title).slice(0, 64),
			sql: String(tab.sql).slice(0, MAX_SAVED_MYSQL_QUERY_SQL_CHARS),
			...tableId ? { tableId } : {}
		};
	}).slice(0, 20);
	if (tabs.length === 0) return null;
	return {
		tabs,
		activeTabId: typeof record.activeTabId === "string" && tabs.some((tab) => tab.id === record.activeTabId) ? record.activeTabId : tabs[0].id
	};
}
function buildMysqlSqlEditorStatePrefs(databaseId, state) {
	const key = getMysqlSqlEditorStateKey(databaseId);
	const tabs = state.tabs.slice(0, 20).map((tab) => ({
		id: tab.id,
		title: String(tab.title).slice(0, 64),
		sql: String(tab.sql).slice(0, MAX_SAVED_MYSQL_QUERY_SQL_CHARS),
		...tab.tableId ? { tableId: tab.tableId } : {}
	}));
	const activeTabId = tabs.some((tab) => tab.id === state.activeTabId) ? state.activeTabId : tabs[0]?.id ?? state.activeTabId;
	return { [key]: JSON.stringify({
		tabs,
		activeTabId
	}) };
}
function mergeMysqlSqlEditorStateIntoPrefs(prefs, databaseId, state) {
	return {
		...prefs,
		...buildMysqlSqlEditorStatePrefs(databaseId, state)
	};
}
function resolveMysqlSavedQueriesScope(args) {
	const { persisted, hasTeamLevel, userQueryCount, teamQueryCount } = args;
	if (persisted === "user") return "user";
	if (persisted === "team" && hasTeamLevel) return "team";
	if (!hasTeamLevel) return "user";
	if (userQueryCount > 0 && teamQueryCount === 0) return "user";
	if (teamQueryCount > 0 && userQueryCount === 0) return "team";
	return "user";
}
const USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH = "console.databases.sidebarWidth";
function parseDatabasesSidebarWidthPx(prefs) {
	return parseSidebarWidthPxForKey(prefs, USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH);
}
function buildDatabasesSidebarWidthPrefs(widthPx) {
	return buildSidebarWidthPxPrefsForKey(USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH, widthPx);
}
const USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH = "console.storage.sidebarWidth";
function parseStorageSidebarWidthPx(prefs) {
	return parseSidebarWidthPxForKey(prefs, USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH);
}
function buildStorageSidebarWidthPrefs(widthPx) {
	return buildSidebarWidthPxPrefsForKey(USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH, widthPx);
}
function parseSidebarWidthPxForKey(prefs, key) {
	if (!prefs) return null;
	const raw = prefs[key];
	let value = null;
	if (typeof raw === "number" && Number.isFinite(raw)) value = raw;
	else if (typeof raw === "string" && raw.length > 0) {
		const parsed = Number(raw);
		if (Number.isFinite(parsed)) value = parsed;
	}
	if (value === null) return null;
	return normalizeLegacySidebarWidthPrefValue(value);
}
function buildSidebarWidthPxPrefsForKey(key, widthPx) {
	return { [key]: String(clampTableViewSidebarWidthPx(widthPx)) };
}
const USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT = "console.databases.postgresSqlEditorHeight";
function parsePostgresSqlEditorHeightPx(prefs) {
	if (!prefs) return null;
	const raw = prefs[USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT];
	let value = null;
	if (typeof raw === "number" && Number.isFinite(raw)) value = raw;
	else if (typeof raw === "string" && raw.length > 0) {
		const parsed = Number(raw);
		if (Number.isFinite(parsed)) value = parsed;
	}
	if (value === null) return null;
	return clampPostgresSqlEditorHeightPx(value);
}
function buildPostgresSqlEditorHeightPrefs(heightPx) {
	return { [USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT]: String(clampPostgresSqlEditorHeightPx(heightPx)) };
}
const USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT = "console.databases.mysqlSqlEditorHeight";
function parseMysqlSqlEditorHeightPx(prefs) {
	if (!prefs) return null;
	const raw = prefs[USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT];
	let value = null;
	if (typeof raw === "number" && Number.isFinite(raw)) value = raw;
	else if (typeof raw === "string" && raw.length > 0) {
		const parsed = Number(raw);
		if (Number.isFinite(parsed)) value = parsed;
	}
	if (value === null) return null;
	return clampMysqlSqlEditorHeightPx(value);
}
function buildMysqlSqlEditorHeightPrefs(heightPx) {
	return { [USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT]: String(clampMysqlSqlEditorHeightPx(heightPx)) };
}
const USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS = "console.storageFiles.listColumnWidths";
const STORAGE_FILES_LIST_DATA_COLUMN_MIN_WIDTH_PX = 72;
const STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS = [
	"$id",
	"name",
	"mimeType",
	"sizeOriginal",
	"$createdAt",
	"$updatedAt"
];
const STORAGE_FILES_LIST_RESIZABLE_COLUMN_WIDTH_KEYS = STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS.filter((k) => k !== "$id");
const STORAGE_FILES_LIST_COLUMN_DEFAULT_WIDTHS = {
	$id: 180,
	name: 160,
	mimeType: 140,
	sizeOriginal: 120,
	$createdAt: 180,
	$updatedAt: 180
};
var STORAGE_FILES_LIST_COLUMN_WIDTH_KEY_SET = new Set(STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS);
function clampStorageFilesListDataColumnWidthPx(px) {
	return Math.min(640, Math.max(72, Math.round(px)));
}
function mergeStorageFilesListColumnWidthsWithDefaults(stored) {
	const out = { ...STORAGE_FILES_LIST_COLUMN_DEFAULT_WIDTHS };
	if (!stored) return out;
	for (const k of STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS) {
		if (k === "$id") continue;
		const v = stored[k];
		if (typeof v === "number" && Number.isFinite(v)) out[k] = clampStorageFilesListDataColumnWidthPx(v);
	}
	return out;
}
function getStorageFilesListColumnWidthsFromPrefs(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS];
	if (raw == null) return {};
	let parsed;
	if (typeof raw === "string") {
		const s = raw.trim();
		if (s.length === 0) return {};
		try {
			parsed = JSON.parse(s);
		} catch {
			return {};
		}
	} else if (typeof raw === "object" && !Array.isArray(raw)) parsed = raw;
	else return {};
	if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return {};
	const out = {};
	for (const [k, v] of Object.entries(parsed)) {
		if (!STORAGE_FILES_LIST_COLUMN_WIDTH_KEY_SET.has(k)) continue;
		const n = typeof v === "number" ? v : Number(v);
		if (!Number.isFinite(n)) continue;
		out[k] = clampStorageFilesListDataColumnWidthPx(n);
	}
	return out;
}
function mergeStorageFilesListColumnWidthsIntoPrefs(prefs, widths) {
	const next = { ...prefs };
	const payload = {};
	for (const k of STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS) {
		const w = widths[k];
		if (typeof w === "number" && Number.isFinite(w)) payload[k] = clampStorageFilesListDataColumnWidthPx(w);
	}
	if (Object.keys(payload).length === 0) {
		delete next[USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS];
		return next;
	}
	next[USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS] = JSON.stringify(payload);
	return next;
}
const USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX = "console.storageFiles.tablePaneWidthPx";
const STORAGE_FILES_TABLE_PANE_MIN_PX = 260;
const STORAGE_FILES_TABLE_PANE_MAX_PX = 4e3;
const LEGACY_LOCAL_STORAGE_STORAGE_FILES_TABLE_PANE_WIDTH = "console.storageFilesTablePaneWidthPx";
function clampStorageFilesTablePaneWidthPx(px) {
	return Math.min(STORAGE_FILES_TABLE_PANE_MAX_PX, Math.max(260, Math.round(px)));
}
function parseStorageFilesTablePaneWidthPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n) && n >= 260 && n <= 4e3) return n;
	return null;
}
function hasStorageFilesTablePaneWidthPref(prefs) {
	return prefs?.[USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX] !== void 0;
}
function mergeStorageFilesTablePaneWidthPxIntoPrefs(prefs, widthPx) {
	return {
		...prefs,
		[USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX]: String(clampStorageFilesTablePaneWidthPx(widthPx))
	};
}
function readLegacyStorageFilesTablePaneWidthFromLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(LEGACY_LOCAL_STORAGE_STORAGE_FILES_TABLE_PANE_WIDTH);
		if (!raw) return null;
		const n = parseInt(raw, 10);
		if (Number.isFinite(n) && n >= 260 && n <= 4e3) return n;
		return null;
	} catch {
		return null;
	}
}
function clearLegacyStorageFilesTablePaneWidthLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(LEGACY_LOCAL_STORAGE_STORAGE_FILES_TABLE_PANE_WIDTH);
	} catch {}
}
const USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS = "console.databaseTables.rowColumnWidths";
function parseInnerRowColumnWidthMap(cols) {
	const inner = {};
	if (typeof cols !== "object" || cols === null || Array.isArray(cols)) return inner;
	for (const [ck, w] of Object.entries(cols)) {
		if (!ck || ck.startsWith("$")) continue;
		const n = typeof w === "number" ? w : Number(w);
		if (!Number.isFinite(n)) continue;
		inner[ck] = n;
	}
	return inner;
}
function parseRowColumnWidthsByDatabase(raw) {
	const out = {};
	if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return out;
	for (const [dbId, tables] of Object.entries(raw)) {
		if (!dbId) continue;
		if (typeof tables !== "object" || tables === null || Array.isArray(tables)) continue;
		const bucket = {};
		for (const [tableKey, colMap] of Object.entries(tables)) {
			if (!tableKey) continue;
			bucket[tableKey] = parseInnerRowColumnWidthMap(colMap);
		}
		out[dbId] = bucket;
	}
	return out;
}
function isLegacyFlatTableColumnMap(v) {
	if (typeof v !== "object" || v === null || Array.isArray(v)) return false;
	const vals = Object.values(v);
	if (vals.length === 0) return false;
	return vals.every((x) => typeof x === "number");
}
function parseRowColumnWidthsStorage(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS];
	if (raw == null) return {
		databases: {},
		legacyFlatByTable: {}
	};
	let parsed;
	if (typeof raw === "string") {
		const s = raw.trim();
		if (s.length === 0) return {
			databases: {},
			legacyFlatByTable: {}
		};
		try {
			parsed = JSON.parse(s);
		} catch {
			return {
				databases: {},
				legacyFlatByTable: {}
			};
		}
	} else if (typeof raw === "object" && !Array.isArray(raw)) parsed = raw;
	else return {
		databases: {},
		legacyFlatByTable: {}
	};
	try {
		if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return {
			databases: {},
			legacyFlatByTable: {}
		};
		const root = parsed;
		if (!("databases" in root && typeof root.databases === "object" && root.databases !== null && !Array.isArray(root.databases))) {
			const legacyOnly = {};
			for (const [tid, cols] of Object.entries(root)) {
				if (!tid) continue;
				if (typeof cols !== "object" || cols === null || Array.isArray(cols)) continue;
				legacyOnly[tid] = parseInnerRowColumnWidthMap(cols);
			}
			return {
				databases: {},
				legacyFlatByTable: legacyOnly
			};
		}
		const databases = parseRowColumnWidthsByDatabase(root.databases);
		const legacyFlatByTable = {};
		for (const [k, v] of Object.entries(root)) {
			if (k === "databases") continue;
			if (!isLegacyFlatTableColumnMap(v)) continue;
			legacyFlatByTable[k] = parseInnerRowColumnWidthMap(v);
		}
		return {
			databases,
			legacyFlatByTable
		};
	} catch {
		return {
			databases: {},
			legacyFlatByTable: {}
		};
	}
}
function serializeDatabaseTableRowColumnWidths(databases, legacyFlatByTable) {
	const dbIds = Object.keys(databases).filter((id) => Object.keys(databases[id] ?? {}).length > 0);
	const legacyIds = Object.keys(legacyFlatByTable).filter((id) => Object.keys(legacyFlatByTable[id] ?? {}).length > 0);
	if (dbIds.length === 0 && legacyIds.length === 0) return null;
	if (dbIds.length === 0) {
		const flat = {};
		for (const id of legacyIds) flat[id] = legacyFlatByTable[id];
		return JSON.stringify(flat);
	}
	const payload = { databases: {} };
	for (const id of dbIds) payload.databases[id] = databases[id];
	for (const id of legacyIds) payload[id] = legacyFlatByTable[id];
	return JSON.stringify(payload);
}
function getDatabaseTableRowColumnWidthsFromPrefs(prefs, databaseId, tableId) {
	const { databases, legacyFlatByTable } = parseRowColumnWidthsStorage(prefs);
	const bucket = databases[databaseId];
	if (bucket && Object.prototype.hasOwnProperty.call(bucket, tableId)) return parseInnerRowColumnWidthMap(bucket[tableId]);
	const leg = legacyFlatByTable[tableId];
	return leg ? parseInnerRowColumnWidthMap(leg) : {};
}
function mergeDatabaseTableRowColumnWidthsTableIntoPrefs(prefs, databaseId, tableId, widths) {
	const { databases, legacyFlatByTable } = parseRowColumnWidthsStorage(prefs);
	const nextLegacy = { ...legacyFlatByTable };
	delete nextLegacy[tableId];
	delete nextLegacy[`${tableId}#columns`];
	delete nextLegacy[`${tableId}#indexes`];
	const encoded = serializeDatabaseTableRowColumnWidths({
		...databases,
		[databaseId]: {
			...databases[databaseId] || {},
			[tableId]: widths
		}
	}, nextLegacy);
	const next = { ...prefs };
	if (!encoded) {
		delete next[USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS];
		return next;
	}
	next[USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS] = encoded;
	return next;
}
function deleteDatabaseTableRowColumnWidthsFromPrefs(prefs, databaseId, tableId) {
	const { databases, legacyFlatByTable } = parseRowColumnWidthsStorage(prefs);
	const nextLegacy = { ...legacyFlatByTable };
	delete nextLegacy[tableId];
	delete nextLegacy[`${tableId}#columns`];
	delete nextLegacy[`${tableId}#indexes`];
	const nextDatabases = { ...databases };
	const bucket = { ...nextDatabases[databaseId] || {} };
	delete bucket[tableId];
	delete bucket[`${tableId}#columns`];
	delete bucket[`${tableId}#indexes`];
	if (Object.keys(bucket).length === 0) delete nextDatabases[databaseId];
	else nextDatabases[databaseId] = bucket;
	const encoded = serializeDatabaseTableRowColumnWidths(nextDatabases, nextLegacy);
	const next = { ...prefs };
	if (!encoded) {
		delete next[USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS];
		return next;
	}
	next[USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS] = encoded;
	return next;
}
const USER_PREFS_KEY_TABLESDB_ROWS_LIST_COLUMNS_PREFIX = "console.tablesDb.rowsListColumns";
var TABLESDB_ROWS_LIST_COLUMN_ALLOWED_SYSTEM_KEYS = new Set([
	"$sequence",
	"$id",
	"$createdAt",
	"$updatedAt"
]);
function getTablesDbRowsListColumnsPrefsKey(databaseId, tableId) {
	return `${USER_PREFS_KEY_TABLESDB_ROWS_LIST_COLUMNS_PREFIX}.${databaseId}.${tableId}`;
}
function parseStoredTablesDbRowsListColumnEntry(item) {
	const trimmed = item.trim();
	if (!trimmed) return null;
	const hidden = trimmed.startsWith("!");
	const key = hidden ? trimmed.slice(1).trim() : trimmed;
	if (!key) return null;
	if (key.startsWith("$")) {
		if (!TABLESDB_ROWS_LIST_COLUMN_ALLOWED_SYSTEM_KEYS.has(key)) return null;
	}
	return {
		key,
		hidden
	};
}
function readTablesDbRowsListColumnsRawFromPrefs(prefs, databaseId, tableId) {
	if (!prefs || !databaseId || !tableId) return null;
	const raw = prefs[getTablesDbRowsListColumnsPrefsKey(databaseId, tableId)];
	if (raw == null) return null;
	let parsed;
	if (typeof raw === "string") {
		const s = raw.trim();
		if (!s) return null;
		try {
			parsed = JSON.parse(s);
		} catch {
			return null;
		}
	} else if (Array.isArray(raw)) parsed = raw;
	else return null;
	if (!Array.isArray(parsed) || parsed.length === 0) return null;
	const out = [];
	for (const item of parsed) {
		if (typeof item !== "string") continue;
		const entry = parseStoredTablesDbRowsListColumnEntry(item);
		if (!entry) continue;
		const stored = entry.hidden ? `!${entry.key}` : entry.key;
		if (out.includes(stored)) continue;
		out.push(stored);
		if (out.length >= 200) break;
	}
	return out.length > 0 ? out : null;
}
function parseTablesDbRowsListColumnsFromPrefs(prefs, databaseId, tableId) {
	const stored = readTablesDbRowsListColumnsRawFromPrefs(prefs, databaseId, tableId);
	if (!stored) return null;
	const out = [];
	for (const item of stored) {
		const entry = parseStoredTablesDbRowsListColumnEntry(item);
		if (!entry || entry.hidden) continue;
		if (out.includes(entry.key)) continue;
		out.push(entry.key);
		if (out.length >= 200) break;
	}
	return out.length > 0 ? out : null;
}
function parseTablesDbRowsListColumnLayout(stored, allKeys) {
	const allKeysSet = new Set(allKeys);
	if (!allKeys.length) return {
		orderedKeys: [],
		hiddenKeys: /* @__PURE__ */ new Set()
	};
	if (!stored?.length) return {
		orderedKeys: [...allKeys],
		hiddenKeys: /* @__PURE__ */ new Set()
	};
	if (stored.some((item) => item.trim().startsWith("!"))) {
		const orderedKeys = [];
		const hiddenKeys$1 = /* @__PURE__ */ new Set();
		const seen$1 = /* @__PURE__ */ new Set();
		for (const item of stored) {
			const entry = parseStoredTablesDbRowsListColumnEntry(item);
			if (!entry || !allKeysSet.has(entry.key) || seen$1.has(entry.key)) continue;
			seen$1.add(entry.key);
			orderedKeys.push(entry.key);
			if (entry.hidden) hiddenKeys$1.add(entry.key);
		}
		for (const k of allKeys) if (!seen$1.has(k)) orderedKeys.push(k);
		return {
			orderedKeys,
			hiddenKeys: hiddenKeys$1
		};
	}
	const seen = /* @__PURE__ */ new Set();
	const visibleOrdered = [];
	for (const item of stored) {
		const entry = parseStoredTablesDbRowsListColumnEntry(item);
		if (!entry || entry.hidden || !allKeysSet.has(entry.key) || seen.has(entry.key)) continue;
		seen.add(entry.key);
		visibleOrdered.push(entry.key);
	}
	if (visibleOrdered.length === 0) return {
		orderedKeys: [...allKeys],
		hiddenKeys: /* @__PURE__ */ new Set()
	};
	const hiddenKeys = new Set(allKeys.filter((k) => !seen.has(k)));
	return {
		orderedKeys: [...visibleOrdered, ...allKeys.filter((k) => hiddenKeys.has(k))],
		hiddenKeys
	};
}
function serializeTablesDbRowsListColumnLayout(orderedKeys, hiddenKeys) {
	return orderedKeys.map((key) => hiddenKeys.has(key) ? `!${key}` : key);
}
function isDefaultTablesDbRowsListColumnLayout(orderedKeys, hiddenKeys, allKeys) {
	if (hiddenKeys.size > 0) return false;
	if (orderedKeys.length !== allKeys.length) return false;
	return orderedKeys.every((k, i) => k === allKeys[i]);
}
function mergeTablesDbRowsListColumnsIntoPrefs(prefs, databaseId, tableId, keys) {
	const next = { ...prefs };
	const prefKey = getTablesDbRowsListColumnsPrefsKey(databaseId, tableId);
	if (!keys?.length) {
		delete next[prefKey];
		return next;
	}
	next[prefKey] = JSON.stringify(keys.slice(0, 200));
	return next;
}
function deleteTablesDbRowsListColumnsFromPrefs(prefs, databaseId, tableId) {
	return mergeTablesDbRowsListColumnsIntoPrefs(prefs, databaseId, tableId, null);
}
const USER_PREFS_KEY_SIDEBAR_COLLAPSED = "console.sidebarCollapsed";
var LEGACY_USER_PREFS_KEY_SIDEBAR_COLLAPSED = "sidebarCollapsed";
function parseSidebarCollapsed(prefs) {
	const current = parseBooleanAccountPref(prefs?.[USER_PREFS_KEY_SIDEBAR_COLLAPSED]);
	if (current !== null) return current;
	return parseBooleanAccountPref(prefs?.[LEGACY_USER_PREFS_KEY_SIDEBAR_COLLAPSED]) ?? false;
}
function mergeSidebarCollapsedIntoPrefs(prefs, collapsed) {
	const next = {
		...prefs,
		[USER_PREFS_KEY_SIDEBAR_COLLAPSED]: collapsed
	};
	delete next[LEGACY_USER_PREFS_KEY_SIDEBAR_COLLAPSED];
	return next;
}
const USER_PREFS_KEY_CONNECT_PROJECT_TAB = "console.connect.tab";
var CONNECT_PROJECT_TAB_PREF_SET = new Set([
	"mcp",
	"app",
	"cli",
	"skills",
	"terraform",
	"s3"
]);
function parseConnectProjectTab(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_CONNECT_PROJECT_TAB];
	if (typeof raw === "string" && CONNECT_PROJECT_TAB_PREF_SET.has(raw)) return raw;
	return "mcp";
}
function mergeConnectProjectTabIntoPrefs(prefs, tab) {
	return {
		...prefs,
		[USER_PREFS_KEY_CONNECT_PROJECT_TAB]: tab
	};
}
const USER_PREFS_KEY_AI_CHAT_PANEL_OPEN = "console.aiChat.panelOpen";
const USER_PREFS_KEY_AI_CHAT_EXPANDED = "console.aiChat.expanded";
const USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID = "console.aiChat.activeConversationId";
const USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS = "console.aiChat.pinnedConversationIds";
const USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX = "console.aiChat.conversationsWidthPx";
const USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX = "console.aiChat.panelWidthPx";
const LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_OPEN = "ai-chat-panel-open";
const LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_WIDTH = "ai-chat-panel-width";
function parseBooleanAccountPref(raw) {
	if (raw === true || raw === "true") return true;
	if (raw === false || raw === "false") return false;
	return null;
}
function parseAIChatPanelOpen(prefs) {
	return parseBooleanAccountPref(prefs?.["console.aiChat.panelOpen"]) ?? false;
}
function hasAIChatPanelOpenPref(prefs) {
	return prefs?.[USER_PREFS_KEY_AI_CHAT_PANEL_OPEN] !== void 0;
}
function parseAIChatPanelWidthPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n) && n >= 320 && n <= 600) return n;
	return 400;
}
function hasAIChatPanelWidthPref(prefs) {
	return prefs?.[USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX] !== void 0;
}
function mergeAIChatPanelOpenIntoPrefs(prefs, open) {
	return {
		...prefs,
		[USER_PREFS_KEY_AI_CHAT_PANEL_OPEN]: open
	};
}
function parseAIChatActiveConversationId(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID];
	if (typeof raw !== "string") return null;
	const trimmed = raw.trim();
	return trimmed.length > 0 ? trimmed : null;
}
function mergeAIChatActiveConversationIdIntoPrefs(prefs, conversationId) {
	return {
		...prefs,
		[USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID]: conversationId?.trim() || ""
	};
}
var EMPTY_AI_CHAT_PINNED_CONVERSATION_IDS = [];
function parseAIChatPinnedConversationIds(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS];
	if (typeof raw !== "string" || !raw.trim()) return EMPTY_AI_CHAT_PINNED_CONVERSATION_IDS;
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return EMPTY_AI_CHAT_PINNED_CONVERSATION_IDS;
		const seen = /* @__PURE__ */ new Set();
		const ids = [];
		for (const entry of parsed) {
			if (typeof entry !== "string") continue;
			const id = entry.trim();
			if (!id || seen.has(id)) continue;
			seen.add(id);
			ids.push(id);
		}
		return ids.length > 0 ? ids : EMPTY_AI_CHAT_PINNED_CONVERSATION_IDS;
	} catch {
		return EMPTY_AI_CHAT_PINNED_CONVERSATION_IDS;
	}
}
function mergeAIChatPinnedConversationIdsIntoPrefs(prefs, conversationIds) {
	const seen = /* @__PURE__ */ new Set();
	const ids = [];
	for (const entry of conversationIds) {
		const id = entry.trim();
		if (!id || seen.has(id)) continue;
		seen.add(id);
		ids.push(id);
	}
	return {
		...prefs,
		[USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS]: JSON.stringify(ids)
	};
}
function parseAIChatConversationsWidthPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n)) return clampAIChatConversationsSidebarWidthPx(n);
	return 288;
}
function mergeAIChatConversationsWidthPxIntoPrefs(prefs, widthPx) {
	return {
		...prefs,
		[USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX]: String(clampAIChatConversationsSidebarWidthPx(widthPx))
	};
}
function mergeAIChatPanelWidthPxIntoPrefs(prefs, widthPx) {
	const clamped = Math.min(600, Math.max(320, Math.round(widthPx)));
	return {
		...prefs,
		[USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX]: String(clamped)
	};
}
const USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX = "console.rightPane.widthPx";
function parseRightPaneWidthPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n) && n >= 400 && n <= 800) return n;
	if (hasAIChatPanelWidthPref(prefs)) return clampRightPaneWidthPx(parseAIChatPanelWidthPx(prefs));
	return 560;
}
function hasRightPaneWidthPref(prefs) {
	return prefs?.[USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX] !== void 0;
}
function mergeRightPaneWidthPxIntoPrefs(prefs, widthPx) {
	return {
		...prefs,
		[USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX]: String(clampRightPaneWidthPx(widthPx))
	};
}
const USER_PREFS_KEY_AUTH_PASSWORD_STRENGTH_COMPLIANCE_OPEN = "console.auth.passwordStrengthComplianceOpen";
function parseAuthPasswordStrengthComplianceOpen(prefs) {
	return parseBooleanAccountPref(prefs?.["console.auth.passwordStrengthComplianceOpen"]) ?? false;
}
function mergeAuthPasswordStrengthComplianceOpenIntoPrefs(prefs, open) {
	return {
		...prefs,
		[USER_PREFS_KEY_AUTH_PASSWORD_STRENGTH_COMPLIANCE_OPEN]: open
	};
}
function readLegacyAIChatPanelOpenFromLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_OPEN);
		if (raw === "true") return true;
		if (raw === "false") return false;
		return null;
	} catch {
		return null;
	}
}
function readLegacyAIChatPanelWidthFromLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_WIDTH);
		if (!raw) return null;
		const n = parseInt(raw, 10);
		if (Number.isFinite(n) && n >= 320 && n <= 600) return n;
		return null;
	} catch {
		return null;
	}
}
function clearLegacyAIChatLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_OPEN);
		localStorage.removeItem(LEGACY_LOCAL_STORAGE_AI_CHAT_PANEL_WIDTH);
	} catch {}
}
const USER_PREFS_KEY_CLI_SHELL_OPEN = "console.cliShell.open";
const USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX = "console.cliShell.heightPx";
const USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX = "console.cliShell.sessionsSidebarWidthPx";
const USER_PREFS_KEY_CLI_SHELL_HISTORY_PREFIX = "console.cliShell.history";
const USER_PREFS_KEY_CLI_SHELL_SESSIONS_PREFIX = "console.cliShell.sessions";
const MAX_CLI_SHELL_SESSIONS = 10;
const MAX_CLI_SHELL_SESSION_NAME_LENGTH = 48;
const LEGACY_LOCAL_STORAGE_CLI_SHELL_HEIGHT = "console.cliShellHeight";
function clampCliShellHeightPx(px, viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800) {
	const maxHeight = Math.floor(viewportHeight * CLI_SHELL_MAX_HEIGHT_RATIO);
	return Math.min(Math.max(Math.round(px), 160), Math.max(maxHeight, 160));
}
function parseCliShellOpen(prefs) {
	return parseBooleanAccountPref(prefs?.["console.cliShell.open"]) ?? false;
}
function parseCliShellHeightPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n) && n >= 160) return clampCliShellHeightPx(n);
	return 280;
}
function hasCliShellHeightPref(prefs) {
	return prefs?.[USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX] !== void 0;
}
function mergeCliShellOpenIntoPrefs(prefs, open) {
	return {
		...prefs,
		[USER_PREFS_KEY_CLI_SHELL_OPEN]: open
	};
}
function mergeCliShellHeightPxIntoPrefs(prefs, heightPx) {
	return {
		...prefs,
		[USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX]: String(clampCliShellHeightPx(heightPx))
	};
}
function parseCliShellSessionsSidebarWidthPx(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX];
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
	if (Number.isFinite(n)) return clampCliShellSessionsSidebarWidthPx(n);
	return 208;
}
function mergeCliShellSessionsSidebarWidthPxIntoPrefs(prefs, widthPx) {
	return {
		...prefs,
		[USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX]: String(clampCliShellSessionsSidebarWidthPx(widthPx))
	};
}
function readLegacyCliShellHeightFromLocalStorage() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(LEGACY_LOCAL_STORAGE_CLI_SHELL_HEIGHT);
		if (!raw) return null;
		const n = parseInt(raw, 10);
		if (Number.isFinite(n) && n >= 160) return clampCliShellHeightPx(n);
		return null;
	} catch {
		return null;
	}
}
function getCliShellHistoryKey(projectId) {
	return `${USER_PREFS_KEY_CLI_SHELL_HISTORY_PREFIX}.${projectId}`;
}
function getCliShellSessionsKey(projectId) {
	return `${USER_PREFS_KEY_CLI_SHELL_SESSIONS_PREFIX}.${projectId}`;
}
function isPersistableCliShellHistoryCommand(command) {
	const trimmed = command.trim();
	if (!trimmed) return false;
	if (!/[a-zA-Z0-9]/.test(trimmed)) return false;
	return /^[\x20-\x7e]+$/.test(trimmed);
}
function parseCliShellHistory(prefs, projectId) {
	const key = getCliShellHistoryKey(projectId);
	if (!prefs || typeof prefs[key] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[key]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((item) => typeof item === "string" && isPersistableCliShellHistoryCommand(item)).slice(-200);
	} catch {
		return [];
	}
}
function mergeCliShellHistoryIntoPrefs(prefs, projectId, history) {
	const key = getCliShellHistoryKey(projectId);
	const trimmed = history.slice(-200);
	return {
		...prefs,
		[key]: JSON.stringify(trimmed)
	};
}
function parseCliShellSessions(prefs, projectId) {
	const key = getCliShellSessionsKey(projectId);
	if (!prefs || typeof prefs[key] !== "string") return null;
	try {
		const raw = JSON.parse(prefs[key]);
		if (!raw || typeof raw !== "object") return null;
		const sessions = Array.isArray(raw.sessions) ? raw.sessions.filter((item) => item != null && typeof item === "object" && typeof item.id === "string" && typeof item.name === "string").map((item) => ({
			id: item.id,
			name: String(item.name).slice(0, 48),
			parentSessionId: typeof item.parentSessionId === "string" ? item.parentSessionId : null
		})).slice(0, 10) : [];
		const activeSessionId = typeof raw.activeSessionId === "string" ? raw.activeSessionId : "";
		const splitPaneSessionIds = Array.isArray(raw.splitPaneSessionIds) ? raw.splitPaneSessionIds.filter((id) => typeof id === "string" && sessions.some((session) => session.id === id)).slice(0, 10) : [];
		if (sessions.length === 0) return null;
		return {
			sessions,
			activeSessionId: sessions.some((session) => session.id === activeSessionId) ? activeSessionId : sessions[0].id,
			splitPaneSessionIds: splitPaneSessionIds.length > 1 ? splitPaneSessionIds : void 0
		};
	} catch {
		return null;
	}
}
function normalizeCliShellSessionsState(state) {
	const sessions = state.sessions.slice(0, 10).map((session) => ({
		id: session.id,
		name: String(session.name).slice(0, 48),
		parentSessionId: session.parentSessionId ?? null
	}));
	const activeExists = sessions.some((session) => session.id === state.activeSessionId);
	const splitPaneSessionIds = Array.isArray(state.splitPaneSessionIds) ? state.splitPaneSessionIds.filter((id) => sessions.some((session) => session.id === id)).slice(0, 10) : [];
	return {
		sessions,
		activeSessionId: activeExists ? state.activeSessionId : sessions[0]?.id ?? "",
		splitPaneSessionIds: splitPaneSessionIds.length > 1 ? splitPaneSessionIds : void 0
	};
}
function serializeCliShellSessionsState(state) {
	return JSON.stringify(normalizeCliShellSessionsState(state));
}
function mergeCliShellSessionsIntoPrefs(prefs, projectId, state) {
	const key = getCliShellSessionsKey(projectId);
	return {
		...prefs,
		[key]: serializeCliShellSessionsState(state)
	};
}
function clearLegacyCliShellHeightLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(LEGACY_LOCAL_STORAGE_CLI_SHELL_HEIGHT);
	} catch {}
}
const USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT = "console.coverGenerator.columnsLayout";
const USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT = "console.apiExplorer.columnsLayout";
const USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT = "console.apiExplorer.responseSplitLayout";
const USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT = "console.diagramGenerator.propertiesSplitLayout";
const USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY = "console.generator.panelVisibility";
function parseGeneratorPanelVisibility(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY];
	if (typeof raw !== "string" || raw.length === 0) return null;
	try {
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return null;
		return normalizeGeneratorPanelVisibility(parsed);
	} catch {
		return null;
	}
}
function mergeGeneratorPanelVisibilityIntoPrefs(prefs, visibility) {
	return {
		...prefs,
		[USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY]: JSON.stringify(normalizeGeneratorPanelVisibility(visibility))
	};
}
function parsePanelLayoutPref(prefs, key, expectedLength) {
	const raw = prefs?.[key];
	if (typeof raw !== "string" || raw.length === 0) return null;
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed) || parsed.length !== expectedLength) return null;
		const sizes = parsed.map((value) => typeof value === "number" ? value : Number(value));
		if (sizes.some((value) => !Number.isFinite(value))) return null;
		return sizes;
	} catch {
		return null;
	}
}
function parseCoverGeneratorColumnsLayout(prefs) {
	return parsePanelLayoutPref(prefs, USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT, 3);
}
function mergeCoverGeneratorColumnsLayoutIntoPrefs(prefs, layout) {
	return {
		...prefs,
		[USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT]: JSON.stringify(layout)
	};
}
function parseApiExplorerColumnsLayout(prefs) {
	return parsePanelLayoutPref(prefs, USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT, 3);
}
function parseApiExplorerResponseSplitLayout(prefs) {
	return parsePanelLayoutPref(prefs, USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT, 2);
}
function mergeApiExplorerColumnsLayoutIntoPrefs(prefs, layout) {
	return {
		...prefs,
		[USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT]: JSON.stringify(layout)
	};
}
function mergeApiExplorerResponseSplitLayoutIntoPrefs(prefs, layout) {
	return {
		...prefs,
		[USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT]: JSON.stringify(layout)
	};
}
function parseDiagramGeneratorPropertiesSplitLayout(prefs) {
	return parsePanelLayoutPref(prefs, USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT, 2);
}
function mergeDiagramGeneratorPropertiesSplitLayoutIntoPrefs(prefs, layout) {
	return {
		...prefs,
		[USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT]: JSON.stringify(layout)
	};
}
const USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP = "console.apiExplorer.expandedProductGroup";
function parseApiExplorerExpandedProductGroup(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP];
	return typeof raw === "string" && raw.length > 0 ? raw : null;
}
function mergeApiExplorerExpandedProductGroupIntoPrefs(prefs, groupId) {
	if (!groupId) {
		const next = { ...prefs };
		delete next[USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP];
		return next;
	}
	return {
		...prefs,
		[USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP]: groupId
	};
}
const USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT = "console.buildNotifications.optedOut";
const USER_PREFS_KEY_COMMUNITY_SUPPORT = "console.communitySupport";
const EMPTY_COMMUNITY_SUPPORT_PREFS = {
	uniqueDayCount: 0,
	lastActiveDay: null,
	shownCount: 0,
	lastShownAt: null,
	actionTakenAt: null,
	actionId: null
};
function parseNonNegativeInt(value) {
	return typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
}
function parseCommunitySupportPrefs(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_COMMUNITY_SUPPORT];
	if (typeof raw !== "string" || !raw.trim()) return { ...EMPTY_COMMUNITY_SUPPORT_PREFS };
	try {
		const parsed = JSON.parse(raw);
		return {
			uniqueDayCount: parseNonNegativeInt(parsed.uniqueDayCount),
			lastActiveDay: typeof parsed.lastActiveDay === "string" ? parsed.lastActiveDay : null,
			shownCount: parseNonNegativeInt(parsed.shownCount),
			lastShownAt: typeof parsed.lastShownAt === "string" ? parsed.lastShownAt : null,
			actionTakenAt: typeof parsed.actionTakenAt === "string" ? parsed.actionTakenAt : null,
			actionId: typeof parsed.actionId === "string" ? parsed.actionId : null
		};
	} catch {
		return { ...EMPTY_COMMUNITY_SUPPORT_PREFS };
	}
}
function mergeCommunitySupportPrefsIntoPrefs(prefs, value) {
	return {
		...prefs,
		[USER_PREFS_KEY_COMMUNITY_SUPPORT]: JSON.stringify(value)
	};
}
const LEGACY_LOCAL_STORAGE_BUILD_NOTIFICATIONS_OPTED_OUT = "appwrite.buildNotifications.optedOut";
function parseBuildNotificationsOptedOut(prefs) {
	return parseBooleanAccountPref(prefs?.["console.buildNotifications.optedOut"]) ?? false;
}
function hasBuildNotificationsOptedOutPref(prefs) {
	return prefs?.[USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT] !== void 0;
}
function mergeBuildNotificationsOptedOutIntoPrefs(prefs, optedOut) {
	return {
		...prefs,
		[USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT]: optedOut
	};
}
function readLegacyBuildNotificationsOptedOutFromLocalStorage() {
	if (typeof window === "undefined") return false;
	try {
		return localStorage.getItem(LEGACY_LOCAL_STORAGE_BUILD_NOTIFICATIONS_OPTED_OUT) === "1";
	} catch {
		return false;
	}
}
function clearLegacyBuildNotificationsOptedOutLocalStorage() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(LEGACY_LOCAL_STORAGE_BUILD_NOTIFICATIONS_OPTED_OUT);
	} catch {}
}
const USER_PREFS_KEY_USAGE_CHART_DATE_RANGE = "console.usageChart.dateRange";
const USER_PREFS_KEY_USAGE_CHART_INTERVAL = "console.usageChart.interval";
var USAGE_CHART_INTERVAL_PREF_VALUES = [
	"15m",
	"1h",
	"1d"
];
function isUsageChartIntervalPref(value) {
	return USAGE_CHART_INTERVAL_PREF_VALUES.includes(value);
}
function parseUsageChartDateRangeFromPrefs(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_USAGE_CHART_DATE_RANGE];
	if (typeof raw !== "string" || !raw.trim()) return null;
	try {
		const parsed = JSON.parse(raw);
		if (typeof parsed?.preset === "string" && parsed.preset.trim()) {
			const preset = getUsageDateRangePresetByValue(parsed.preset.trim());
			if (preset) return { preset: preset.value };
		}
		if (typeof parsed?.from !== "string" || typeof parsed?.to !== "string") return null;
		const from = new Date(parsed.from);
		const to = new Date(parsed.to);
		if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) return null;
		if (from.getTime() > to.getTime()) return null;
		const storedRange = {
			from,
			to
		};
		const inferred = inferUsageDateRangePresetFromStoredRange(storedRange);
		if (inferred) return { preset: inferred.value };
		const normalized = normalizeUsageDateRangeSelection(storedRange);
		if (normalized?.from && normalized.to) return serializeUsageChartDateRange({
			from: normalized.from,
			to: normalized.to
		});
		return {
			from: parsed.from,
			to: parsed.to
		};
	} catch {
		return null;
	}
}
function parseUsageChartIntervalFromPrefs(prefs) {
	const raw = prefs?.[USER_PREFS_KEY_USAGE_CHART_INTERVAL];
	if (typeof raw !== "string") return null;
	const normalized = normalizeUsageChartIntervalPref(raw);
	if (normalized && isUsageChartIntervalPref(normalized)) return normalized;
	return null;
}
function mergeUsageChartFiltersIntoPrefs(prefs, serializedDateRange, chartInterval) {
	return {
		...prefs,
		[USER_PREFS_KEY_USAGE_CHART_DATE_RANGE]: JSON.stringify(serializedDateRange),
		[USER_PREFS_KEY_USAGE_CHART_INTERVAL]: chartInterval
	};
}
const SERVICE_LIST_VIEW_MODE_DEFAULT = "grid";
const USER_PREFS_KEY_FUNCTIONS_LIST_VIEW_MODE = "console.functions.listViewMode";
const USER_PREFS_KEY_SITES_LIST_VIEW_MODE = "console.sites.listViewMode";
const USER_PREFS_KEY_ORG_PROJECTS_LIST_VIEW_MODE = "console.organizations.projects.listViewMode";
const USER_PREFS_KEY_STORES_LIST_VIEW_MODE = "console.stores.listViewMode";
function getServiceListViewModeKey(scope) {
	switch (scope) {
		case "functions": return USER_PREFS_KEY_FUNCTIONS_LIST_VIEW_MODE;
		case "sites": return USER_PREFS_KEY_SITES_LIST_VIEW_MODE;
		case "projects": return USER_PREFS_KEY_ORG_PROJECTS_LIST_VIEW_MODE;
		case "stores": return USER_PREFS_KEY_STORES_LIST_VIEW_MODE;
	}
}
function parseServiceListViewMode(prefs, scope) {
	const raw = prefs?.[getServiceListViewModeKey(scope)];
	if (raw === "list" || raw === "grid") return raw;
	return SERVICE_LIST_VIEW_MODE_DEFAULT;
}
function mergeServiceListViewModeIntoPrefs(prefs, scope, mode) {
	return {
		...prefs,
		[getServiceListViewModeKey(scope)]: mode
	};
}
const USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT = "console.impersonation.recentUsers";
var SESSION_STORAGE_RECENT_BY_OPERATOR_KEY = "console.impersonation.recentByOperator";
var LOCAL_STORAGE_RECENT_DETAILS_BY_OPERATOR_KEY = "console.impersonation.recentUserDetails";
function isOversizedOrBinaryLabel(value) {
	const trimmed = value.trim();
	if (!trimmed) return true;
	if (trimmed.length > 128) return true;
	if (/^data:/i.test(trimmed)) return true;
	if (/^blob:/i.test(trimmed)) return true;
	return false;
}
function sanitizeRecentImpersonationLabel(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	if (!trimmed || isOversizedOrBinaryLabel(trimmed)) return void 0;
	return trimmed.slice(0, 128);
}
function sanitizeRecentImpersonationUser(raw) {
	if (raw == null || typeof raw !== "object") return null;
	const record = raw;
	const id = typeof record.$id === "string" ? record.$id.trim() : typeof record.id === "string" ? record.id.trim() : "";
	if (!id || id.length > 64) return null;
	const entry = { $id: id };
	const name = sanitizeRecentImpersonationLabel(record.name);
	const email = sanitizeRecentImpersonationLabel(record.email);
	if (name) entry.name = name;
	if (email) entry.email = email;
	return entry;
}
function sanitizeRecentImpersonationList(list) {
	if (!Array.isArray(list)) return [];
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const item of list) {
		const user = sanitizeRecentImpersonationUser(item);
		if (!user || seen.has(user.$id)) continue;
		seen.add(user.$id);
		out.push(user);
		if (out.length >= 5) break;
	}
	return out;
}
function readRecentByOperatorMap() {
	if (typeof sessionStorage === "undefined") return {};
	try {
		const raw = sessionStorage.getItem(SESSION_STORAGE_RECENT_BY_OPERATOR_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (typeof parsed !== "object" || parsed === null) return {};
		const out = {};
		for (const [operatorId, list] of Object.entries(parsed)) {
			const sanitized = sanitizeRecentImpersonationList(list);
			if (sanitized.length > 0) out[operatorId] = sanitized;
		}
		return out;
	} catch {
		return {};
	}
}
function writeRecentByOperatorMap(map) {
	if (typeof sessionStorage === "undefined") return;
	try {
		const sanitized = {};
		for (const [operatorId, list] of Object.entries(map)) sanitized[operatorId] = sanitizeRecentImpersonationList(list);
		sessionStorage.setItem(SESSION_STORAGE_RECENT_BY_OPERATOR_KEY, JSON.stringify(sanitized));
	} catch {}
}
function readRecentDetailsByOperatorMap() {
	if (typeof localStorage === "undefined") return {};
	try {
		const raw = localStorage.getItem(LOCAL_STORAGE_RECENT_DETAILS_BY_OPERATOR_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (typeof parsed !== "object" || parsed === null) return {};
		const out = {};
		for (const [operatorId, users] of Object.entries(parsed)) {
			if (typeof users !== "object" || users === null) continue;
			const byUser = {};
			for (const [userId, details] of Object.entries(users)) {
				const id = userId.trim();
				if (!id) continue;
				const sanitized = sanitizeRecentImpersonationUser({
					$id: id,
					...typeof details === "object" && details !== null ? details : {}
				});
				if (!sanitized) continue;
				const entry = {};
				if (sanitized.name) entry.name = sanitized.name;
				if (sanitized.email) entry.email = sanitized.email;
				if (entry.name || entry.email) byUser[id] = entry;
			}
			if (Object.keys(byUser).length > 0) out[operatorId] = byUser;
		}
		return out;
	} catch {
		return {};
	}
}
function writeRecentDetailsByOperatorMap(map) {
	if (typeof localStorage === "undefined") return;
	try {
		localStorage.setItem(LOCAL_STORAGE_RECENT_DETAILS_BY_OPERATOR_KEY, JSON.stringify(map));
	} catch {}
}
function writeRecentImpersonationDetails(operatorId, list) {
	const id = operatorId?.trim();
	if (!id) return;
	const map = readRecentDetailsByOperatorMap();
	const previous = map[id] ?? {};
	const byUser = {};
	const sanitizedList = sanitizeRecentImpersonationList(list);
	for (const user of sanitizedList) {
		const prev = previous[user.$id];
		const details = {};
		const name = user.name || prev?.name;
		const email = user.email || prev?.email;
		if (name) details.name = name;
		if (email) details.email = email;
		if (details.name || details.email) byUser[user.$id] = details;
	}
	if (Object.keys(byUser).length === 0) delete map[id];
	else map[id] = byUser;
	writeRecentDetailsByOperatorMap(map);
}
function enrichRecentImpersonationUsers(operatorId, list) {
	const id = operatorId?.trim();
	const detailsByUser = id ? readRecentDetailsByOperatorMap()[id] : void 0;
	return list.map((user) => {
		const details = detailsByUser?.[user.$id];
		if (!details) return user;
		return {
			$id: user.$id,
			name: user.name || details.name,
			email: user.email || details.email
		};
	});
}
function readRecentImpersonationSessionList(operatorId) {
	const id = operatorId?.trim();
	if (!id) return [];
	return enrichRecentImpersonationUsers(id, sanitizeRecentImpersonationList(readRecentByOperatorMap()[id]));
}
function writeRecentImpersonationSessionList(operatorId, list) {
	const id = operatorId?.trim();
	if (!id) return;
	const sanitized = sanitizeRecentImpersonationList(list);
	const map = readRecentByOperatorMap();
	map[id] = sanitized;
	writeRecentByOperatorMap(map);
	writeRecentImpersonationDetails(id, sanitized);
}
function clearRecentImpersonationSessionList(operatorId) {
	const id = operatorId?.trim();
	if (!id) return;
	const map = readRecentByOperatorMap();
	delete map[id];
	writeRecentByOperatorMap(map);
}
function parseRecentImpersonationUsers(prefs, operatorId) {
	const key = USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT;
	if (!prefs || typeof prefs[key] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[key]);
		if (!Array.isArray(raw)) return [];
		const fromPrefs = [];
		for (const item of raw) {
			if (typeof item === "string") {
				const id = item.trim();
				if (id && id.length <= 64) fromPrefs.push({ $id: id });
				continue;
			}
			const sanitized = sanitizeRecentImpersonationUser(item);
			if (sanitized) fromPrefs.push(sanitized);
			if (fromPrefs.length >= 5) break;
		}
		const limited = fromPrefs.slice(0, 5);
		const opId = operatorId?.trim();
		if (opId) {
			if (limited.filter((u) => u.name || u.email).length > 0) writeRecentImpersonationDetails(opId, limited);
			return enrichRecentImpersonationUsers(opId, limited.map((u) => ({ $id: u.$id })));
		}
		return limited.map((u) => ({
			$id: u.$id,
			...u.name ? { name: u.name } : {},
			...u.email ? { email: u.email } : {}
		}));
	} catch {
		return [];
	}
}
function mergeRecentImpersonationLists(a, b) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const u of [...a, ...b]) {
		const sanitized = sanitizeRecentImpersonationUser(u);
		if (!sanitized || seen.has(sanitized.$id)) continue;
		seen.add(sanitized.$id);
		out.push(sanitized);
		if (out.length >= 5) break;
	}
	return out;
}
function appendRecentImpersonationUser(current, user) {
	const entry = sanitizeRecentImpersonationUser(user);
	if (!entry) return sanitizeRecentImpersonationList(current);
	return mergeRecentImpersonationLists([entry], current.filter((u) => u.$id !== entry.$id));
}
function mergeRecentImpersonationIntoAccountPrefs(prefs, list) {
	const ids = sanitizeRecentImpersonationList(list).map((u) => u.$id);
	return {
		...prefs ?? {},
		[USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT]: JSON.stringify(ids)
	};
}
var PERSONAL_ORG_NAME = "Personal Projects";
var FIRST_PROJECT_NAME = "My first project";
async function resolvePostAuthOrganizationId(account, queryClient) {
	const prefs = (account ?? await fetchConsoleAccount()).prefs || {};
	const fromPrefs = prefs[USER_PREFS_KEY_ORGANIZATION];
	if (fromPrefs) {
		if ((queryClient ? await queryClient.ensureQueryData(organizationsQueryOptions()) : await fetchOrganizations()).teams?.some((org) => org.$id === fromPrefs)) return fromPrefs;
		const { [USER_PREFS_KEY_ORGANIZATION]: _removed, ...restPrefs } = prefs;
		const updatedAccount = await updateAccountPrefs(restPrefs);
		if (updatedAccount && typeof updatedAccount === "object" && "$id" in updatedAccount) setConsoleAccountCache(updatedAccount, getConsoleAccountQueryRevision());
	}
	return await ensurePersonalOrgAndFirstProject();
}
async function ensurePersonalOrgAndFirstProject() {
	const prefs = (await fetchConsoleAccount()).prefs || {};
	const orgs = (await fetchOrganizations()).teams || [];
	if (orgs.length === 0) {
		const orgId$1 = (await createOrganization({ name: PERSONAL_ORG_NAME })).$id;
		await updateAccountPrefs({
			...prefs,
			[USER_PREFS_KEY_ORGANIZATION]: orgId$1
		});
		await createConsoleProject({
			projectId: ID.unique(),
			name: FIRST_PROJECT_NAME,
			teamId: orgId$1
		});
		return orgId$1;
	}
	const orgId = prefs["organization"] || orgs[0].$id;
	if (!prefs["organization"]) await updateAccountPrefs({
		...prefs,
		[USER_PREFS_KEY_ORGANIZATION]: orgId
	});
	const { total } = await fetchOrganizationProjects(orgId);
	if (total === 0) await createConsoleProject({
		projectId: ID.unique(),
		name: FIRST_PROJECT_NAME,
		teamId: orgId
	});
	return orgId;
}
const MAX_PINNED_PROJECTS = 6;
const TEAM_PREFS_KEY_PINNED_PROJECT_IDS = "console.pinnedProjectIds";
function parsePinnedProjectIds(prefs) {
	if (!prefs || typeof prefs["console.pinnedProjectIds"] !== "string") return [];
	try {
		const raw = JSON.parse(prefs[TEAM_PREFS_KEY_PINNED_PROJECT_IDS]);
		if (!Array.isArray(raw)) return [];
		return raw.filter((id) => typeof id === "string" && id.length > 0).slice(0, 6);
	} catch {
		return [];
	}
}
function buildPinnedProjectIdsPrefs(ids) {
	const trimmed = ids.slice(0, 6);
	return { [TEAM_PREFS_KEY_PINNED_PROJECT_IDS]: JSON.stringify(trimmed) };
}
function reorderPinnedProjectIds(ids, fromIndex, toIndex) {
	if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= ids.length || toIndex >= ids.length) return ids;
	const next = [...ids];
	const [removed] = next.splice(fromIndex, 1);
	next.splice(toIndex, 0, removed);
	return next.slice(0, 6);
}
async function prefetchOrganizationOverviewData(queryClient, orgId, options) {
	if (!orgId || typeof window === "undefined") return;
	const features = getActiveProfileFeatures();
	const projectsPage = options?.projectsPage ?? 0;
	const projectsLimit = options?.projectsLimit ?? 12;
	const search = options?.search ?? "";
	if (features.billing) prefetchOrganizationInvoiceDataIfAllowed(queryClient, orgId).catch(() => {});
	const teamPromise = queryClient.ensureQueryData(consoleTeamQueryOptions(orgId));
	const parallel = [
		queryClient.ensureQueryData(organizationsQueryOptions()),
		queryClient.ensureQueryData(organizationQueryOptions(orgId)),
		teamPromise,
		queryClient.ensureQueryData(organizationMembershipsQueryOptions(orgId, 0, 12, ""))
	];
	if (features.billing) parallel.push(queryClient.ensureQueryData(organizationPlanQueryOptions(orgId)));
	if (features.orgRoles) parallel.push(queryClient.ensureQueryData(organizationScopesQueryOptions(orgId)).catch(() => {}));
	await Promise.all(parallel);
	const pinnedIds = parsePinnedProjectIds((await teamPromise)?.prefs);
	const projectScope = await queryClient.ensureQueryData(organizationProjectScopeQueryOptions(orgId)).catch(() => null);
	await Promise.all([queryClient.ensureQueryData(activeProjectsQueryOptions(orgId, projectsPage, projectsLimit, search, pinnedIds, projectScope ?? null)), ...pinnedIds.length > 0 ? [queryClient.ensureQueryData(pinnedProjectsQueryOptions(orgId, pinnedIds))] : []]);
}
function parseOrganizationIdFromPath(path) {
	return path.match(/^\/organizations\/([^/]+)/)?.[1];
}
function requiresConsoleEmailVerification(account) {
	if (!account) return false;
	return getActiveProfileFeatures().userVerification && !account.emailVerification;
}
var AUTH_PAGE_PATHS = [
	"/sign-in",
	"/sign-up",
	"/recovery",
	"/reset",
	"/mfa",
	"/verify-email",
	"/auth/magic-url"
];
function isValidRelativeRedirect(url) {
	return url.startsWith("/") && !url.startsWith("//") && !url.includes("://");
}
function normalizeRedirectPathname(redirect) {
	return (redirect.split("?")[0]?.split("#")[0] ?? redirect).replace(/\/+$/, "") || "/";
}
function isAuthPagePath(pathname) {
	const normalized = normalizeRedirectPathname(pathname);
	return AUTH_PAGE_PATHS.includes(normalized);
}
var OAUTH2_FLOW_PATHS = ["/oauth2/consent", "/oauth2/device"];
function isOAuth2FlowRedirect(redirect) {
	if (!redirect) return false;
	const normalized = normalizeRedirectPathname(redirect);
	return OAUTH2_FLOW_PATHS.includes(normalized);
}
function resolvePostAuthRedirect(redirect) {
	if (!redirect || !isValidRelativeRedirect(redirect)) return void 0;
	const pathname = normalizeRedirectPathname(redirect);
	if (pathname === "/") return void 0;
	if (isAuthPagePath(pathname)) return void 0;
	if (isMarketingPagePath(pathname)) return void 0;
	return redirect;
}
function toRedirectNavigateOptions(redirect) {
	const url = new URL(redirect, "http://localhost");
	return {
		to: url.pathname,
		search: Object.fromEntries(url.searchParams)
	};
}
async function prefetchOrganizationOverviewSafe(queryClient, orgId) {
	try {
		await prefetchOrganizationOverviewData(queryClient, orgId);
	} catch (error) {
		if (!isHttpNotFoundError(error)) throw error;
	}
}
async function prefetchPostAuthDestination(queryClient, account, redirect) {
	if (isOAuth2FlowRedirect(redirect)) return;
	const resolvedRedirect = resolvePostAuthRedirect(redirect);
	if (resolvedRedirect) {
		const orgIdFromPath = parseOrganizationIdFromPath(resolvedRedirect);
		if (orgIdFromPath) {
			await prefetchOrganizationOverviewSafe(queryClient, orgIdFromPath);
			return;
		}
	}
	let orgId = await resolvePostAuthOrganizationId(account, queryClient);
	try {
		await prefetchOrganizationOverviewData(queryClient, orgId);
	} catch (error) {
		if (!isHttpNotFoundError(error)) return;
		orgId = await resolvePostAuthOrganizationId();
		await prefetchOrganizationOverviewSafe(queryClient, orgId);
	}
}
function getConsoleAccountFromCache(queryClient) {
	const rows = queryClient.getQueriesData({ queryKey: ["account", "console"] });
	for (const [, data] of rows) if (data) return data;
}
const CONSOLE_ACCOUNT_STALE_TIME_MS = Number.POSITIVE_INFINITY;
const CONSOLE_ACCOUNT_GC_TIME_MS = Number.POSITIVE_INFINITY;
function isConsoleAccountUser(value) {
	return !!value && typeof value === "object" && "$id" in value;
}
function commitConsoleAccountToCaches(queryClient, account, revision = getConsoleAccountQueryRevision()) {
	setConsoleAccountCache(account, revision);
	queryClient.setQueriesData({ queryKey: ["account", "console"] }, account);
}
function syncConsoleAccountAfterMutation(queryClient, options) {
	const revision = getConsoleAccountQueryRevision();
	const cached = getConsoleAccountFromCache(queryClient) ?? getConsoleAccountFromSingleton(revision);
	let next;
	if (options?.apiResult && isConsoleAccountUser(options.apiResult)) next = cached ? {
		...cached,
		...options.apiResult,
		prefs: sanitizeAccountPrefsForWrite(options.apiResult.prefs ?? {})
	} : {
		...options.apiResult,
		prefs: sanitizeAccountPrefsForWrite(options.apiResult.prefs ?? {})
	};
	else if (options?.updater && cached) next = options.updater(cached);
	else if (options?.patch && cached) next = {
		...cached,
		...options.patch
	};
	else next = getConsoleAccountFromCache(queryClient) ?? cached;
	if (next && options?.patch) next = {
		...next,
		...options.patch
	};
	if (next) commitConsoleAccountToCaches(queryClient, next, revision);
}
function consoleAccountQueryOptions(options) {
	const revision = options?.revision ?? getConsoleAccountQueryRevision();
	return queryOptions({
		queryKey: [
			"account",
			"console",
			revision
		],
		queryFn: () => fetchConsoleAccount({ revision }),
		staleTime: CONSOLE_ACCOUNT_STALE_TIME_MS,
		gcTime: CONSOLE_ACCOUNT_GC_TIME_MS,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		enabled: typeof window !== "undefined"
	});
}
function isConsoleAccountQuerySettled(queryClient, revision) {
	const { queryKey } = consoleAccountQueryOptions({ revision });
	const state = queryClient.getQueryState(queryKey);
	return state?.status === "success" || state?.status === "error";
}
function isConsoleMfaRequiredError(error) {
	return error instanceof AppwriteException && error.type === "user_more_factors_required";
}
function purgeConsoleAccountCaches(queryClient) {
	clearConsoleAccountCache();
	queryClient.cancelQueries({ queryKey: ["account", "console"] });
	queryClient.removeQueries({ queryKey: ["account", "console"] });
}
var CONSOLE_SIGN_OUT_COVER_ID = "console-sign-out-cover";
var consoleSigningOut = false;
function isConsoleSigningOut() {
	return consoleSigningOut;
}
function showConsoleSignOutCover() {
	if (typeof document === "undefined") return;
	if (document.getElementById(CONSOLE_SIGN_OUT_COVER_ID)) return;
	const cover = document.createElement("div");
	cover.id = CONSOLE_SIGN_OUT_COVER_ID;
	cover.setAttribute("aria-busy", "true");
	cover.setAttribute("aria-live", "polite");
	cover.style.cssText = [
		"position:fixed",
		"inset:0",
		"z-index:2147483647",
		"background:var(--background)",
		"pointer-events:auto"
	].join(";");
	document.documentElement.appendChild(cover);
}
function redirectToSignInAfterConsoleSignOut(redirect) {
	if (typeof window === "undefined") return;
	const isValidRelativeRedirect$1 = !!redirect && redirect.startsWith("/") && !redirect.startsWith("//") && !redirect.includes("://");
	window.location.replace(isValidRelativeRedirect$1 ? `/sign-in?redirect=${encodeURIComponent(redirect)}` : "/sign-in");
}
async function performConsoleSignOut(queryClient, options) {
	if (consoleSigningOut) return;
	consoleSigningOut = true;
	showConsoleSignOutCover();
	clearConsoleImpersonateUser();
	clearConsoleImpersonationSession();
	try {
		await sdk.forConsole.account.deleteSession({ sessionId: "current" });
	} catch (error) {
		console.error("Error signing out (deleteSession current):", error);
		try {
			const sessions = (await sdk.forConsole.account.listSessions()).sessions || [];
			const currentSession = sessions.find((session) => session.current === true);
			if (currentSession) await sdk.forConsole.account.deleteSession({ sessionId: currentSession.$id });
			else if (sessions.length > 0) await sdk.forConsole.account.deleteSessions();
		} catch (fallbackError) {
			console.error("Error signing out (fallback):", fallbackError);
		}
	} finally {
		clearConsoleSessionLocally();
		purgeConsoleAccountCaches(queryClient);
		redirectToSignInAfterConsoleSignOut(options?.redirect);
	}
}
async function prefetchConsoleMfaRouteData(queryClient) {
	purgeConsoleAccountCaches(queryClient);
	await queryClient.ensureQueryData(mfaFactorsQueryOptions());
}
async function navigateToConsoleMfaAfterSession(queryClient, navigate, redirect) {
	await prefetchConsoleMfaRouteData(queryClient);
	const redirectUrl = resolvePostAuthRedirect(redirect);
	navigate({
		to: "/mfa",
		search: redirectUrl ? { redirect: redirectUrl } : void 0
	});
}
function shouldRevalidateConsoleAccount(queryClient, revision = getConsoleAccountQueryRevision()) {
	const cachedAccount = getConsoleAccountFromCache(queryClient);
	if (cachedAccount && isConsoleAccountUser(cachedAccount)) return false;
	if (getConsoleAccountUnauthenticatedError(revision)) return true;
	const { queryKey } = consoleAccountQueryOptions({ revision });
	const state = queryClient.getQueryState(queryKey);
	if (state?.status === "error" && isHttpUnauthorizedError(state.error)) return true;
	if (state?.status === "error" && isConsoleMfaRequiredError(state.error)) return true;
	return false;
}
function shouldRevalidateConsoleAccountOnAuthRoute(queryClient, revision = getConsoleAccountQueryRevision()) {
	if (shouldRevalidateConsoleAccount(queryClient, revision)) return true;
	if (!hasLikelyConsoleSession()) return false;
	const { queryKey } = consoleAccountQueryOptions({ revision });
	return !(getConsoleAccountFromSingleton(revision) ?? queryClient.getQueryData(queryKey));
}
async function refreshConsoleAccountAfterAuth(queryClient) {
	purgeConsoleAccountCaches(queryClient);
	const revision = getConsoleAccountQueryRevision();
	const account = await fetchConsoleAccount({
		revision,
		force: true
	});
	commitConsoleAccountToCaches(queryClient, account, revision);
	return account;
}
async function ensureConsoleAccountOnAuthRoute(queryClient) {
	if (!shouldRevalidateConsoleAccountOnAuthRoute(queryClient)) return;
	try {
		await refreshConsoleAccountAfterAuth(queryClient);
	} catch {}
}
async function ensureConsoleAccountQueryData(queryClient) {
	if (shouldRevalidateConsoleAccount(queryClient)) try {
		return await refreshConsoleAccountAfterAuth(queryClient);
	} catch {
		return;
	}
	try {
		return await queryClient.ensureQueryData(consoleAccountQueryOptions());
	} catch {
		return;
	}
}
function invalidateProjectAuthQueries(queryClient, projectId) {
	queryClient.invalidateQueries({ queryKey: ["project", projectId] });
	queryClient.invalidateQueries({ queryKey: ["project-auth-security", projectId] });
}
const MAX_AUTH_POLICY_TOTAL = 5e3;
function assertAuthPolicyTotal(limit, featureLabel) {
	if (limit !== 0 && (limit < 1 || limit > 5e3)) throw new Error(`${featureLabel} must be disabled/unlimited or between 1 and ${MAX_AUTH_POLICY_TOTAL.toLocaleString()}`);
}
function authPolicyTotalForApi(limit) {
	return limit === 0 ? null : limit;
}
function useUpdateAuthLimit(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (limit) => {
			if (!projectId) throw new Error("Project ID is required");
			assertAuthPolicyTotal(limit, "Users limit");
			return await sdk.forProject(projectId).project.updateUserLimitPolicy({ total: authPolicyTotalForApi(limit) });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthDuration(projectId) {
	const queryClient = useQueryClient();
	const MAX_DURATION_SECONDS = 31536e3;
	return useMutation({
		mutationFn: async (duration) => {
			if (!projectId) throw new Error("Project ID is required");
			if (duration < 0 || duration > MAX_DURATION_SECONDS) throw new Error(`Duration must be between 0 and ${MAX_DURATION_SECONDS} seconds (1 year)`);
			const clampedDuration = Math.max(0, Math.min(duration, MAX_DURATION_SECONDS));
			return await sdk.forProject(projectId).project.updateSessionDurationPolicy({ duration: clampedDuration });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthSessionsLimit(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (limit) => {
			if (!projectId) throw new Error("Project ID is required");
			assertAuthPolicyTotal(limit, "Sessions limit");
			return await sdk.forProject(projectId).project.updateSessionLimitPolicy({ total: authPolicyTotalForApi(limit) });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthPasswordHistory(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (limit) => {
			if (!projectId) throw new Error("Project ID is required");
			assertAuthPolicyTotal(limit, "Password history");
			return await sdk.forProject(projectId).project.updatePasswordHistoryPolicy({ total: authPolicyTotalForApi(limit) });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthPasswordStrength(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (policy) => {
			if (!projectId) throw new Error("Project ID is required");
			if (policy.min < 8 || policy.min > 256) throw new Error("Minimum length must be between 8 and 256 characters");
			return await sdk.forProject(projectId).project.updatePasswordStrengthPolicy({
				min: policy.min,
				uppercase: policy.uppercase,
				lowercase: policy.lowercase,
				number: policy.number,
				symbols: policy.symbols
			});
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthPasswordDictionary(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updatePasswordDictionaryPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdatePersonalDataCheck(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updatePasswordPersonalDataPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateSessionAlerts(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (alerts) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updateSessionAlertPolicy({ enabled: alerts });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateSessionInvalidation(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updateSessionInvalidationPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateMockNumbers(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (numbers) => {
			if (!projectId) throw new Error("Project ID is required");
			if (numbers.length > 10) throw new Error("Maximum 10 mock phone numbers allowed");
			const projectSdk = sdk.forProject(projectId);
			const existing = await projectSdk.project.listMockPhones({ total: true });
			const existingByNumber = new Map((existing.mockNumbers ?? []).map((n) => [n.number, n]));
			const nextNumbers = new Set(numbers.map((n) => n.phone));
			for (const mock of existing.mockNumbers ?? []) if (!nextNumbers.has(mock.number)) await projectSdk.project.deleteMockPhone({ number: mock.number });
			for (const { phone, otp } of numbers) {
				const prev = existingByNumber.get(phone);
				if (prev) {
					if (prev.otp !== otp) await projectSdk.project.updateMockPhone({
						number: phone,
						otp
					});
				} else await projectSdk.project.createMockPhone({
					number: phone,
					otp
				});
			}
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["project-auth-security", projectId] });
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateMembershipsPrivacy(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (privacy) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updateMembershipPrivacyPolicy({
				userName: privacy.userName,
				userEmail: privacy.userEmail,
				userMFA: privacy.mfa,
				userId: privacy.userId,
				userPhone: privacy.userPhone
			});
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function projectEmailPolicyService(projectId) {
	return sdk.forProject(projectId).project;
}
function useUpdateDenyFreeEmailPolicy(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await projectEmailPolicyService(projectId).updateDenyFreeEmailPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateDenyAliasedEmailPolicy(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await projectEmailPolicyService(projectId).updateDenyAliasedEmailPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateDenyDisposableEmailPolicy(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await projectEmailPolicyService(projectId).updateDenyDisposableEmailPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateDenyCorporateEmailPolicy(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (enabled) => {
			if (!projectId) throw new Error("Project ID is required");
			return await projectEmailPolicyService(projectId).updateDenyCorporateEmailPolicy({ enabled });
		},
		onSuccess: () => {
			invalidateProjectAuthQueries(queryClient, projectId);
		}
	});
}
function useUpdateAuthMethod(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ method, status }) => {
			if (!projectId) throw new Error("Project ID is required");
			return await sdk.forProject(projectId).project.updateAuthMethod({
				methodId: method,
				enabled: status
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project", projectId] });
		}
	});
}
async function fetchMFAFactors() {
	return await sdk.forConsole.account.listMFAFactors();
}
function mfaFactorsQueryOptions() {
	return queryOptions({
		queryKey: ["factors", "account"],
		queryFn: fetchMFAFactors,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useMFAFactors() {
	return useQuery(mfaFactorsQueryOptions());
}
async function fetchAccountIdentities() {
	const pageSize = 100;
	const maxPages = 50;
	const identities = [];
	let total = 0;
	for (let page = 0; page < maxPages; page++) {
		const response = await sdk.forConsole.account.listIdentities({ queries: [
			Query.limit(pageSize),
			Query.offset(identities.length),
			Query.orderDesc("$createdAt")
		] });
		const chunk = response.identities || [];
		identities.push(...chunk);
		total = response.total || 0;
		if (chunk.length < pageSize || identities.length >= total) break;
	}
	return {
		identities,
		total
	};
}
async function fetchAccountSessions() {
	const response = await sdk.forConsole.account.listSessions();
	return {
		sessions: response.sessions || [],
		total: response.total || 0
	};
}
function accountIdentitiesQueryOptions() {
	return queryOptions({
		queryKey: ["identities", "account"],
		queryFn: fetchAccountIdentities,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function accountSessionsQueryOptions() {
	return queryOptions({
		queryKey: ["sessions", "account"],
		queryFn: fetchAccountSessions,
		staleTime: DEFAULT_STALE_TIME,
		retry: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});
}
function useAccountIdentities() {
	return useQuery(accountIdentitiesQueryOptions());
}
function useAccountSessions() {
	return useQuery(accountSessionsQueryOptions());
}
function diffAccountPrefs(previous, next) {
	const prev = previous ?? {};
	const added = {};
	const changed = {};
	const removed = [];
	for (const key of Object.keys(next)) {
		if (!(key in prev)) {
			added[key] = next[key];
			continue;
		}
		if (prev[key] !== next[key]) changed[key] = {
			from: prev[key],
			to: next[key]
		};
	}
	for (const key of Object.keys(prev)) if (!(key in next)) removed.push(key);
	return {
		added,
		changed,
		removed
	};
}
function getAccountPrefsCallerStack() {
	return (/* @__PURE__ */ new Error()).stack?.split("\n").slice(1).map((line) => line.trim().replace(/^at\s+/, "")).filter((line) => {
		if (!line) return false;
		if (line.includes("updateAccountPrefs")) return false;
		if (line.includes("getAccountPrefsCallerStack")) return false;
		if (line.includes("diffAccountPrefs")) return false;
		if (line.includes("node_modules")) return false;
		if (line.includes("@tanstack")) return false;
		return true;
	}).slice(0, 8) ?? [];
}
async function updateAccountPrefs(prefs, reason = "unknown") {
	if (hasConsoleImpersonationSessionTarget()) return;
	const sanitized = sanitizeAccountPrefsForWrite(prefs);
	const cachedAccount = getConsoleAccountSync(getConsoleAccountQueryRevision());
	const previous = cachedAccount?.prefs;
	const diff = diffAccountPrefs(previous, sanitized);
	const hasDiff = Object.keys(diff.added).length > 0 || Object.keys(diff.changed).length > 0 || diff.removed.length > 0;
	const caller = getAccountPrefsCallerStack();
	if (!hasDiff) {
		console.log("[account prefs] skip (unchanged)", {
			reason,
			keyCount: Object.keys(sanitized).length,
			caller
		});
		return cachedAccount;
	}
	console.log("[account prefs] update", diff, {
		reason,
		keyCount: Object.keys(sanitized).length,
		caller
	});
	return await sdk.forConsole.account.updatePrefs({ prefs: sanitized });
}
async function flushRecentImpersonationUsersToAccountPrefs(operatorId) {
	const list = readRecentImpersonationSessionList(operatorId);
	if (list.length === 0) return;
	clearRecentImpersonationSessionList(operatorId);
	writeRecentImpersonationDetails(operatorId, list);
	const account = await fetchConsoleAccount({ force: true });
	const merged = mergeRecentImpersonationLists(parseRecentImpersonationUsers(account.prefs, operatorId), list);
	writeRecentImpersonationDetails(operatorId, merged);
	const updatedPrefs = mergeRecentImpersonationIntoAccountPrefs(account.prefs, merged);
	const updatedAccount = await updateAccountPrefs(updatedPrefs, "flush-recent-impersonation-users");
	setConsoleAccountCache(updatedAccount && isConsoleAccountUser(updatedAccount) ? updatedAccount : {
		...account,
		prefs: updatedPrefs
	}, getConsoleAccountQueryRevision());
}
function useSidebarCollapsed(account) {
	const queryClient = useQueryClient();
	const accountPrefs = account?.prefs;
	const collapsed = parseSidebarCollapsed(accountPrefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeSidebarCollapsedIntoPrefs({ ...account.prefs ?? {} }, value), "sidebar-collapsed");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeSidebarCollapsedIntoPrefs({ ...current.prefs ?? {} }, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		collapsed,
		setCollapsed: useCallback((value) => {
			const nextValue = typeof value === "function" ? value(collapsed) : value;
			updateMutation.mutate(nextValue);
		}, [collapsed, updateMutation])
	};
}
function useConnectProjectTab(account) {
	const queryClient = useQueryClient();
	const accountPrefs = account?.prefs;
	const tab = parseConnectProjectTab(accountPrefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeConnectProjectTabIntoPrefs({ ...account.prefs ?? {} }, value), "connect-project-tab");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeConnectProjectTabIntoPrefs({ ...current.prefs ?? {} }, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		tab,
		setTab: useCallback((value) => {
			const nextValue = typeof value === "function" ? value(tab) : value;
			if (nextValue === tab) return;
			updateMutation.mutate(nextValue);
		}, [tab, updateMutation])
	};
}
function useTableViewSidebarWidth(account, scope = "databases") {
	const queryClient = useQueryClient();
	const parse = scope === "storage" ? parseStorageSidebarWidthPx : parseDatabasesSidebarWidthPx;
	const build = scope === "storage" ? buildStorageSidebarWidthPrefs : buildDatabasesSidebarWidthPrefs;
	const widthPx = parse(account?.prefs) ?? 224;
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs({
				...account.prefs,
				...build(value)
			}, "table-view-sidebar-width");
		},
		onMutate: async (value) => {
			const patch = build(value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		widthPx,
		persistSidebarWidthPx: useCallback((value) => {
			updateMutation.mutate(value);
		}, [updateMutation])
	};
}
function usePostgresSqlEditorHeight(account) {
	const queryClient = useQueryClient();
	const heightPx = parsePostgresSqlEditorHeightPx(account?.prefs) ?? 220;
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs({
				...account.prefs,
				...buildPostgresSqlEditorHeightPrefs(value)
			}, "postgres-sql-editor-height");
		},
		onMutate: async (value) => {
			const patch = buildPostgresSqlEditorHeightPrefs(value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		heightPx,
		persistEditorHeightPx: useCallback((value) => {
			updateMutation.mutate(value);
		}, [updateMutation])
	};
}
function useMysqlSqlEditorHeight(account) {
	const queryClient = useQueryClient();
	const heightPx = parseMysqlSqlEditorHeightPx(account?.prefs) ?? 220;
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs({
				...account.prefs,
				...buildMysqlSqlEditorHeightPrefs(value)
			}, "mysql-sql-editor-height");
		},
		onMutate: async (value) => {
			const patch = buildMysqlSqlEditorHeightPrefs(value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		heightPx,
		persistEditorHeightPx: useCallback((value) => {
			updateMutation.mutate(value);
		}, [updateMutation])
	};
}
function usePersistedPanelLayoutPref(account, parseLayout, normalizeLayout, defaultLayout, mergeIntoPrefs) {
	const queryClient = useQueryClient();
	const layout = useMemo(() => normalizeLayout(parseLayout(account?.prefs) ?? [...defaultLayout]), [
		account?.prefs,
		defaultLayout,
		normalizeLayout,
		parseLayout
	]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeIntoPrefs(account.prefs ?? {}, value), "persisted-panel-layout");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		layout,
		persistLayout: useCallback((value) => {
			if (!account) return;
			updateMutation.mutate(normalizeLayout(value));
		}, [
			account,
			normalizeLayout,
			updateMutation
		])
	};
}
function useApiExplorerColumnsLayout(account) {
	return usePersistedPanelLayoutPref(account, parseApiExplorerColumnsLayout, normalizeApiExplorerColumnsLayout, API_EXPLORER_COLUMNS_DEFAULT_LAYOUT, mergeApiExplorerColumnsLayoutIntoPrefs);
}
function useApiExplorerResponseSplitLayout(account) {
	return usePersistedPanelLayoutPref(account, parseApiExplorerResponseSplitLayout, normalizeApiExplorerResponseSplitLayout, API_EXPLORER_RESPONSE_SPLIT_DEFAULT_LAYOUT, mergeApiExplorerResponseSplitLayoutIntoPrefs);
}
function useCoverGeneratorColumnsLayout(account) {
	return usePersistedPanelLayoutPref(account, parseCoverGeneratorColumnsLayout, normalizeCoverGeneratorColumnsLayout, COVER_GENERATOR_COLUMNS_DEFAULT_LAYOUT, mergeCoverGeneratorColumnsLayoutIntoPrefs);
}
function useDiagramGeneratorPropertiesSplitLayout(account) {
	return usePersistedPanelLayoutPref(account, parseDiagramGeneratorPropertiesSplitLayout, normalizeDiagramGeneratorPropertiesSplitLayout, DIAGRAM_GENERATOR_PROPERTIES_SPLIT_DEFAULT_LAYOUT, mergeDiagramGeneratorPropertiesSplitLayoutIntoPrefs);
}
function useGeneratorPanelVisibility(account) {
	const queryClient = useQueryClient();
	const hydratedRef = useRef(false);
	const visibilityRef = useRef(GENERATOR_PANEL_VISIBILITY_DEFAULT);
	const [visibility, setVisibility] = useState(() => readGeneratorPanelVisibilityFromStorage());
	useEffect(() => {
		if (!account) {
			hydratedRef.current = false;
			return;
		}
		if (hydratedRef.current) return;
		hydratedRef.current = true;
		const parsed = parseGeneratorPanelVisibility(account.prefs) ?? readGeneratorPanelVisibilityFromStorage();
		visibilityRef.current = parsed;
		setVisibility(parsed);
	}, [account]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeGeneratorPanelVisibilityIntoPrefs(account.prefs ?? {}, value), "generator-panel-visibility");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeGeneratorPanelVisibilityIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistVisibility = useCallback((value) => {
		writeGeneratorPanelVisibilityToStorage(value);
		if (account) updateMutation.mutate(value);
	}, [account, updateMutation]);
	const setLeftOpen = useCallback((open) => {
		setVisibility((prev) => {
			const nextLeft = typeof open === "function" ? open(prev.left) : open;
			if (nextLeft === prev.left) return prev;
			const next = {
				...prev,
				left: nextLeft
			};
			visibilityRef.current = next;
			persistVisibility(next);
			return next;
		});
	}, [persistVisibility]);
	const setRightOpen = useCallback((open) => {
		setVisibility((prev) => {
			const nextRight = typeof open === "function" ? open(prev.right) : open;
			if (nextRight === prev.right) return prev;
			const next = {
				...prev,
				right: nextRight
			};
			visibilityRef.current = next;
			persistVisibility(next);
			return next;
		});
	}, [persistVisibility]);
	const toggleLeft = useCallback(() => {
		setLeftOpen((prev) => !prev);
	}, [setLeftOpen]);
	const toggleRight = useCallback(() => {
		setRightOpen((prev) => !prev);
	}, [setRightOpen]);
	return {
		leftOpen: visibility.left,
		rightOpen: visibility.right,
		setLeftOpen,
		setRightOpen,
		toggleLeft,
		toggleRight
	};
}
function useApiExplorerExpandedProductGroup(account) {
	const queryClient = useQueryClient();
	const [expandedProductGroupId, setExpandedProductGroupId] = useState(null);
	const hydratedRef = useRef(false);
	const expandedProductGroupIdRef = useRef(null);
	useEffect(() => {
		if (!account) {
			hydratedRef.current = false;
			return;
		}
		if (hydratedRef.current) return;
		hydratedRef.current = true;
		const parsed = parseApiExplorerExpandedProductGroup(account.prefs);
		expandedProductGroupIdRef.current = parsed;
		setExpandedProductGroupId(parsed);
	}, [account]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeApiExplorerExpandedProductGroupIntoPrefs(account.prefs ?? {}, value), "api-explorer-expanded-product-group");
		},
		onMutate: async (value) => {
			const patch = mergeApiExplorerExpandedProductGroupIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		}
	});
	const persistExpandedRef = useRef(updateMutation.mutate);
	persistExpandedRef.current = updateMutation.mutate;
	const setExpandedProductGroup = useCallback((groupId) => {
		const next = groupId ?? null;
		if (expandedProductGroupIdRef.current === next) return;
		expandedProductGroupIdRef.current = next;
		setExpandedProductGroupId(next);
		if (account) persistExpandedRef.current(next);
	}, [account]);
	useEffect(() => {
		expandedProductGroupIdRef.current = expandedProductGroupId;
	}, [expandedProductGroupId]);
	return {
		expandedProductGroupId,
		setExpandedProductGroup
	};
}
var RIGHT_PANE_WIDTH_PERSIST_DEBOUNCE_MS = 250;
async function migrateLegacyBrowserPrefsToAccount(account, queryClient) {
	const prefs = account.prefs ?? {};
	let next = { ...prefs };
	let changed = false;
	if (!hasAIChatPanelOpenPref(prefs)) {
		const legacyOpen = readLegacyAIChatPanelOpenFromLocalStorage();
		if (legacyOpen !== null) {
			next = mergeAIChatPanelOpenIntoPrefs(next, legacyOpen);
			changed = true;
		}
	}
	if (!hasAIChatPanelWidthPref(prefs)) {
		const legacyWidth = readLegacyAIChatPanelWidthFromLocalStorage();
		if (legacyWidth !== null) {
			next = mergeAIChatPanelWidthPxIntoPrefs(next, legacyWidth);
			changed = true;
		}
	}
	if (!hasRightPaneWidthPref(prefs)) if (hasAIChatPanelWidthPref(next)) {
		next = mergeRightPaneWidthPxIntoPrefs(next, parseAIChatPanelWidthPx(next));
		changed = true;
	} else {
		const legacyWidth = readLegacyAIChatPanelWidthFromLocalStorage();
		if (legacyWidth !== null) {
			next = mergeRightPaneWidthPxIntoPrefs(next, legacyWidth);
			changed = true;
		}
	}
	if (!hasBuildNotificationsOptedOutPref(prefs)) {
		if (readLegacyBuildNotificationsOptedOutFromLocalStorage()) {
			next = mergeBuildNotificationsOptedOutIntoPrefs(next, true);
			changed = true;
		}
	}
	if (!hasStorageFilesTablePaneWidthPref(prefs)) {
		const legacyPaneWidth = readLegacyStorageFilesTablePaneWidthFromLocalStorage();
		if (legacyPaneWidth !== null) {
			next = mergeStorageFilesTablePaneWidthPxIntoPrefs(next, legacyPaneWidth);
			changed = true;
		}
	}
	if (!hasCliShellHeightPref(prefs)) {
		const legacyCliShellHeight = readLegacyCliShellHeightFromLocalStorage();
		if (legacyCliShellHeight !== null) {
			next = mergeCliShellHeightPxIntoPrefs(next, legacyCliShellHeight);
			changed = true;
		}
	}
	if (!changed) {
		clearLegacyAIChatLocalStorage();
		clearLegacyBuildNotificationsOptedOutLocalStorage();
		clearLegacyCliShellHeightLocalStorage();
		clearLegacyStorageFilesTablePaneWidthLocalStorage();
		return;
	}
	const updatedAccount = await updateAccountPrefs(next, "migrate-legacy-browser-prefs");
	clearLegacyAIChatLocalStorage();
	clearLegacyBuildNotificationsOptedOutLocalStorage();
	clearLegacyCliShellHeightLocalStorage();
	clearLegacyStorageFilesTablePaneWidthLocalStorage();
	commitConsoleAccountToCaches(queryClient, updatedAccount ?? {
		...account,
		prefs: next
	});
}
var legacyBrowserPrefsMigrationPromise = null;
function useMigrateLegacyBrowserPrefsToAccount(account) {
	const queryClient = useQueryClient();
	useEffect(() => {
		if (!account) return;
		if (!legacyBrowserPrefsMigrationPromise) legacyBrowserPrefsMigrationPromise = migrateLegacyBrowserPrefsToAccount(account, queryClient).catch(() => {
			legacyBrowserPrefsMigrationPromise = null;
		});
	}, [account, queryClient]);
}
function useAIChatPanelOpen(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const isOpen = parseAIChatPanelOpen(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeAIChatPanelOpenIntoPrefs(account.prefs ?? {}, value), "ai-chat-panel-open");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeAIChatPanelOpenIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		isOpen,
		setIsOpen: useCallback((value) => {
			const nextValue = typeof value === "function" ? value(isOpen) : value;
			if (!account) return;
			if (nextValue === isOpen) return;
			updateMutation.mutate(nextValue);
		}, [
			account,
			isOpen,
			updateMutation
		])
	};
}
function useAIChatActiveConversationId(account) {
	const queryClient = useQueryClient();
	const activeConversationId = parseAIChatActiveConversationId(account?.prefs);
	const activeConversationIdRef = useRef(activeConversationId);
	activeConversationIdRef.current = activeConversationId;
	const accountRef = useRef(account);
	accountRef.current = account;
	const mutateActiveConversationId = useMutation({
		mutationFn: async (value) => {
			const currentAccount = getConsoleAccountFromCache(queryClient) ?? accountRef.current;
			if (!currentAccount) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeAIChatActiveConversationIdIntoPrefs(currentAccount.prefs ?? {}, value), "ai-chat-active-conversation");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeAIChatActiveConversationIdIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount, value) => {
			if (parseAIChatActiveConversationId(getConsoleAccountFromCache(queryClient)?.prefs) !== value) return;
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	}).mutate;
	return {
		activeConversationId,
		setActiveConversationId: useCallback((value) => {
			const previous = activeConversationIdRef.current;
			const nextValue = typeof value === "function" ? value(previous) : value;
			const normalized = typeof nextValue === "string" && nextValue.trim() ? nextValue.trim() : null;
			if (normalized === previous) return;
			if (!accountRef.current) return;
			activeConversationIdRef.current = normalized;
			mutateActiveConversationId(normalized);
		}, [mutateActiveConversationId])
	};
}
function useAIChatPinnedConversationIds(account) {
	const queryClient = useQueryClient();
	const pinnedConversationIds = parseAIChatPinnedConversationIds(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeAIChatPinnedConversationIdsIntoPrefs(account.prefs ?? {}, value), "ai-chat-pinned-conversations");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeAIChatPinnedConversationIdsIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const setPinnedConversationIds = useCallback((value) => {
		const nextValue = typeof value === "function" ? value(pinnedConversationIds) : value;
		if (!account) return;
		const normalized = nextValue.map((id) => id.trim()).filter((id, index, all) => !!id && all.indexOf(id) === index);
		if (normalized.length === pinnedConversationIds.length && normalized.every((id, index) => id === pinnedConversationIds[index])) return;
		updateMutation.mutate(normalized);
	}, [
		account,
		pinnedConversationIds,
		updateMutation
	]);
	return {
		pinnedConversationIds,
		setPinnedConversationIds,
		pinConversation: useCallback((conversationId) => {
			const id = conversationId.trim();
			if (!id) return;
			setPinnedConversationIds((current) => current.includes(id) ? current : [id, ...current]);
		}, [setPinnedConversationIds]),
		unpinConversation: useCallback((conversationId) => {
			const id = conversationId.trim();
			if (!id) return;
			setPinnedConversationIds((current) => current.filter((entry) => entry !== id));
		}, [setPinnedConversationIds])
	};
}
var AI_CHAT_CONVERSATIONS_WIDTH_PERSIST_DEBOUNCE_MS = 250;
function useAIChatConversationsWidth(account) {
	const queryClient = useQueryClient();
	const widthPx = parseAIChatConversationsWidthPx(account?.prefs);
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeAIChatConversationsWidthPxIntoPrefs(account.prefs ?? {}, value), "ai-chat-conversations-width");
		},
		onMutate: async (value) => {
			const patch = mergeAIChatConversationsWidthPxIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistSidebarWidthPx = useCallback((value) => {
		if (!account) return;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		const patch = mergeAIChatConversationsWidthPxIntoPrefs(account.prefs ?? {}, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, AI_CHAT_CONVERSATIONS_WIDTH_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		widthPx,
		persistSidebarWidthPx
	};
}
function useAuthPasswordStrengthComplianceOpen(account) {
	const queryClient = useQueryClient();
	const isOpen = parseAuthPasswordStrengthComplianceOpen(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeAuthPasswordStrengthComplianceOpenIntoPrefs(account.prefs ?? {}, value), "auth-password-strength-compliance-open");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeAuthPasswordStrengthComplianceOpenIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		isOpen,
		setIsOpen: useCallback((value) => {
			const nextValue = typeof value === "function" ? value(isOpen) : value;
			if (!account) return;
			updateMutation.mutate(nextValue);
		}, [
			account,
			isOpen,
			updateMutation
		])
	};
}
function useRightPaneWidth(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const widthPx = parseRightPaneWidthPx(account?.prefs);
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeRightPaneWidthPxIntoPrefs(account.prefs ?? {}, value), "right-pane-width");
		},
		onMutate: async (value) => {
			const patch = mergeRightPaneWidthPxIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const setWidthPx = useCallback((value) => {
		const nextValue = typeof value === "function" ? value(widthPx) : value;
		if (!account) return;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		const patch = mergeRightPaneWidthPxIntoPrefs(account.prefs ?? {}, nextValue);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(nextValue);
		}, RIGHT_PANE_WIDTH_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		queryClient,
		updateMutation,
		widthPx
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		widthPx,
		setWidthPx
	};
}
var CLI_SHELL_HEIGHT_PERSIST_DEBOUNCE_MS = 250;
function useCliShellOpen(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const isOpen = parseCliShellOpen(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeCliShellOpenIntoPrefs(currentAccount.prefs ?? {}, value), "cli-shell-open");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeCliShellOpenIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		isOpen,
		setIsOpen: useCallback((value) => {
			const nextValue = typeof value === "function" ? value(isOpen) : value;
			if (!account) return;
			updateMutation.mutate(nextValue);
		}, [
			account,
			isOpen,
			updateMutation
		])
	};
}
function useCliShellHeight(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const heightPx = parseCliShellHeightPx(account?.prefs);
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeCliShellHeightPxIntoPrefs(account.prefs ?? {}, value), "cli-shell-height");
		},
		onMutate: async (value) => {
			const patch = mergeCliShellHeightPxIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const setHeightPx = useCallback((value) => {
		const nextValue = typeof value === "function" ? value(heightPx) : value;
		if (!account) return;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		const patch = mergeCliShellHeightPxIntoPrefs(account.prefs ?? {}, nextValue);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(nextValue);
		}, CLI_SHELL_HEIGHT_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		queryClient,
		updateMutation,
		heightPx
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		heightPx,
		setHeightPx
	};
}
var CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PERSIST_DEBOUNCE_MS = 250;
function useCliShellSessionsSidebarWidth(account) {
	const queryClient = useQueryClient();
	const widthPx = parseCliShellSessionsSidebarWidthPx(account?.prefs);
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeCliShellSessionsSidebarWidthPxIntoPrefs(account.prefs ?? {}, value), "cli-shell-sessions-sidebar-width");
		},
		onMutate: async (value) => {
			const patch = mergeCliShellSessionsSidebarWidthPxIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistSidebarWidthPx = useCallback((value) => {
		if (!account) return;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		const patch = mergeCliShellSessionsSidebarWidthPxIntoPrefs(account.prefs ?? {}, value);
		queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
			...current,
			prefs: {
				...current.prefs,
				...patch
			}
		} : current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			updateMutation.mutate(value);
		}, CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		widthPx,
		persistSidebarWidthPx
	};
}
var CLI_SHELL_PREFS_PERSIST_DEBOUNCE_MS = 400;
function useCliShellHistory(account, projectId) {
	const queryClient = useQueryClient();
	const history = parseCliShellHistory(account?.prefs, projectId);
	const persistTimerRef = useRef(null);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeCliShellHistoryIntoPrefs(account.prefs ?? {}, projectId, value), "cli-shell-history");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistHistory = useCallback((value) => {
		if (!account) return;
		const patch = mergeCliShellHistoryIntoPrefs(account.prefs ?? {}, projectId, value);
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
		}, CLI_SHELL_PREFS_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		projectId,
		queryClient,
		updateMutation
	]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		history,
		persistHistory
	};
}
function useCliShellSessionsPrefs(account, projectId) {
	const queryClient = useQueryClient();
	const savedSessions = parseCliShellSessions(account?.prefs, projectId);
	const persistTimerRef = useRef(null);
	const pendingPersistRef = useRef(null);
	const isSessionsPrefsUnchanged = useCallback((value) => {
		const key = getCliShellSessionsKey(projectId);
		const nextValue = serializeCliShellSessionsState(value);
		const singletonPrefs = getConsoleAccountSync(getConsoleAccountQueryRevision())?.prefs;
		const rqPrefs = getConsoleAccountFromCache(queryClient)?.prefs;
		const accountPrefs = account?.prefs;
		for (const prefs of [
			singletonPrefs,
			rqPrefs,
			accountPrefs
		]) {
			if (!prefs) continue;
			if (prefs[key] === nextValue) return true;
			const parsed = parseCliShellSessions(prefs, projectId);
			if (parsed && serializeCliShellSessionsState(parsed) === nextValue) return true;
		}
		return false;
	}, [
		account?.prefs,
		projectId,
		queryClient
	]);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (isSessionsPrefsUnchanged(value)) return getConsoleAccountSync(getConsoleAccountQueryRevision());
			const currentAccount = getConsoleAccountFromCache(queryClient) ?? getConsoleAccountSync(getConsoleAccountQueryRevision()) ?? account;
			if (!currentAccount) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeCliShellSessionsIntoPrefs(currentAccount.prefs ?? {}, projectId, value), "cli-shell-sessions");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const persistSessions = useCallback((value) => {
		if (!account) return;
		if (isSessionsPrefsUnchanged(value)) return;
		const patch = mergeCliShellSessionsIntoPrefs(getConsoleAccountFromCache(queryClient)?.prefs ?? getConsoleAccountSync(getConsoleAccountQueryRevision())?.prefs ?? account.prefs ?? {}, projectId, value);
		pendingPersistRef.current = value;
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
			pendingPersistRef.current = null;
			updateMutation.mutate(value);
		}, CLI_SHELL_PREFS_PERSIST_DEBOUNCE_MS);
	}, [
		account,
		isSessionsPrefsUnchanged,
		projectId,
		queryClient,
		updateMutation
	]);
	const flushPersistSessions = useCallback(() => {
		if (persistTimerRef.current !== null) {
			clearTimeout(persistTimerRef.current);
			persistTimerRef.current = null;
		}
		const pending = pendingPersistRef.current;
		if (!pending) return;
		pendingPersistRef.current = null;
		if (isSessionsPrefsUnchanged(pending)) return;
		updateMutation.mutate(pending);
	}, [isSessionsPrefsUnchanged, updateMutation]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	return {
		savedSessions,
		persistSessions,
		flushPersistSessions
	};
}
function useBuildNotificationsOptedOut(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const optedOut = parseBuildNotificationsOptedOut(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeBuildNotificationsOptedOutIntoPrefs(account.prefs ?? {}, value), "build-notifications-opted-out");
		},
		onMutate: async (value) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeBuildNotificationsOptedOutIntoPrefs(current.prefs ?? {}, value)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		optedOut,
		setOptedOut: useCallback((value) => {
			if (!account) return;
			updateMutation.mutate(value);
		}, [account, updateMutation])
	};
}
function useStorageFilesTablePaneWidth(account) {
	const queryClient = useQueryClient();
	useMigrateLegacyBrowserPrefsToAccount(account);
	const tablePaneWidthPx = parseStorageFilesTablePaneWidthPx(account?.prefs);
	const updateMutation = useMutation({
		mutationFn: async (value) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeStorageFilesTablePaneWidthPxIntoPrefs(account.prefs ?? {}, value), "storage-files-table-pane-width");
		},
		onMutate: async (value) => {
			const patch = mergeStorageFilesTablePaneWidthPxIntoPrefs(account?.prefs ?? {}, value);
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: {
					...current.prefs,
					...patch
				}
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		tablePaneWidthPx,
		persistTablePaneWidthPx: useCallback((value) => {
			if (!account) return;
			updateMutation.mutate(value);
		}, [account, updateMutation])
	};
}
function useSavedFilters(scope, account, teamId) {
	const queryClient = useQueryClient();
	const { data: team } = useConsoleTeam(teamId);
	const updateTeamPrefs = useUpdateConsoleTeamPrefs(teamId);
	const userSavedFilters = scope && account?.prefs ? parseSavedFilters(account.prefs, scope) : [];
	const teamSavedFilters = scope && team?.prefs && teamId ? parseSavedFilters(team.prefs, scope) : [];
	const addUserMutation = useMutation({
		mutationFn: async ({ name, query, sort }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !scope) throw new Error("Account or filter scope not available");
			const current = parseSavedFilters(currentAccount.prefs, scope);
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			const next = [{
				id: crypto.randomUUID(),
				name: trimmedName,
				query,
				...sort ? { sort } : {}
			}, ...current];
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedFiltersPrefs(scope, next)
			}, "saved-filters");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const addTeamMutation = useMutation({
		mutationFn: async ({ name, query, sort }) => {
			if (!scope || !teamId) throw new Error("Team or filter scope not available");
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				const current = parseSavedFilters(freshPrefs, scope);
				return buildSavedFiltersPrefs(scope, [{
					id: crypto.randomUUID(),
					name: trimmedName,
					query,
					...sort ? { sort } : {}
				}, ...current]);
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
	const deleteUserMutation = useMutation({
		mutationFn: async (id) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !scope) throw new Error("Account or filter scope not available");
			const next = parseSavedFilters(currentAccount.prefs, scope).filter((f) => f.id !== id);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedFiltersPrefs(scope, next)
			}, "saved-filters");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const deleteTeamMutation = useMutation({
		mutationFn: async (id) => {
			if (!scope || !teamId) throw new Error("Team or filter scope not available");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				return buildSavedFiltersPrefs(scope, parseSavedFilters(freshPrefs, scope).filter((f) => f.id !== id));
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
	const reorderUserMutation = useMutation({
		mutationFn: async (orderedFilters) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !scope) throw new Error("Account or filter scope not available");
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedFiltersPrefs(scope, orderedFilters)
			}, "saved-filters");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const reorderTeamMutation = useMutation({
		mutationFn: async (orderedFilters) => {
			if (!scope || !teamId) throw new Error("Team or filter scope not available");
			await updateTeamPrefs.mutateAsync(buildSavedFiltersPrefs(scope, orderedFilters));
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const addSavedFilter = async (args) => {
		if ((args.level ?? "user") === "team" && teamId) return addTeamMutation.mutateAsync({
			name: args.name,
			query: args.query,
			sort: args.sort
		});
		return addUserMutation.mutateAsync({
			name: args.name,
			query: args.query,
			sort: args.sort
		});
	};
	const deleteSavedFilter = async (id, level) => {
		if (level === "team" && teamId) return deleteTeamMutation.mutateAsync(id);
		return deleteUserMutation.mutateAsync(id);
	};
	const reorderSavedFilters = async (orderedFilters, level) => {
		if (level === "team" && teamId) return reorderTeamMutation.mutateAsync(orderedFilters);
		return reorderUserMutation.mutateAsync(orderedFilters);
	};
	const updateUserFilterMutation = useMutation({
		mutationFn: async ({ id, name }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !scope) throw new Error("Account or filter scope not available");
			const current = parseSavedFilters(currentAccount.prefs, scope);
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			const next = current.map((f) => f.id === id ? {
				...f,
				name: trimmedName
			} : f);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedFiltersPrefs(scope, next)
			}, "saved-filters");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const updateTeamFilterMutation = useMutation({
		mutationFn: async ({ id, name }) => {
			if (!scope || !teamId) throw new Error("Team or filter scope not available");
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				return buildSavedFiltersPrefs(scope, parseSavedFilters(freshPrefs, scope).map((f) => f.id === id ? {
					...f,
					name: trimmedName
				} : f));
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
	const updateSavedFilterName = async (id, level, name) => {
		if (level === "team" && teamId) return updateTeamFilterMutation.mutateAsync({
			id,
			name
		});
		return updateUserFilterMutation.mutateAsync({
			id,
			name
		});
	};
	return {
		userSavedFilters,
		teamSavedFilters,
		savedFilters: [...userSavedFilters, ...teamSavedFilters],
		addSavedFilter,
		deleteSavedFilter,
		reorderSavedFilters,
		updateSavedFilterName,
		isAdding: addUserMutation.isPending || addTeamMutation.isPending,
		isDeleting: deleteUserMutation.isPending || deleteTeamMutation.isPending,
		hasTeamLevel: !!teamId
	};
}
function useTablesDbRowsListColumns(databaseId, tableId, account) {
	const queryClient = useQueryClient();
	const savedAttrKeys = useMemo(() => {
		if (!databaseId || !tableId || !account?.prefs) return null;
		return parseTablesDbRowsListColumnsFromPrefs(account.prefs, databaseId, tableId);
	}, [
		account?.prefs,
		databaseId,
		tableId
	]);
	const persistMutation = useMutation({
		mutationFn: async (keys) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount || !databaseId || !tableId) throw new Error("Account or table context unavailable");
			return await updateAccountPrefs(mergeTablesDbRowsListColumnsIntoPrefs(currentAccount.prefs || {}, databaseId, tableId, keys), "tablesdb-rows-list-columns");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		savedAttrKeys,
		persistAttrKeys: persistMutation.mutateAsync,
		isPersisting: persistMutation.isPending
	};
}
function useImageTransformSavedPresets(account, teamId) {
	const queryClient = useQueryClient();
	const { data: team } = useConsoleTeam(teamId);
	const updateTeamPrefs = useUpdateConsoleTeamPrefs(teamId);
	const userPresets = account?.prefs ? parseSavedImageTransformPresets(account.prefs) : [];
	const teamPresets = team?.prefs && teamId ? parseSavedImageTransformPresets(team.prefs) : [];
	const addUserMutation = useMutation({
		mutationFn: async ({ name, json }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) throw new Error("Account not available");
			if (json.length > 24e3) throw new Error("Preset data is too large");
			const current = parseSavedImageTransformPresets(currentAccount.prefs);
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			if (current.length >= 20) throw new Error(`Maximum 20 presets`);
			const next = [{
				id: crypto.randomUUID(),
				name: trimmedName,
				json
			}, ...current];
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedImageTransformPresetsPrefs(next)
			}, "image-transform-saved-presets");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const addTeamMutation = useMutation({
		mutationFn: async ({ name, json }) => {
			if (!teamId) throw new Error("Team not available");
			if (json.length > 24e3) throw new Error("Preset data is too large");
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				const current = parseSavedImageTransformPresets(freshPrefs);
				if (current.length >= 20) throw new Error(`Maximum 20 presets`);
				return buildSavedImageTransformPresetsPrefs([{
					id: crypto.randomUUID(),
					name: trimmedName,
					json
				}, ...current]);
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
	const deleteUserMutation = useMutation({
		mutationFn: async (id) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) throw new Error("Account not available");
			const next = parseSavedImageTransformPresets(currentAccount.prefs).filter((p) => p.id !== id);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedImageTransformPresetsPrefs(next)
			}, "image-transform-saved-presets");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const deleteTeamMutation = useMutation({
		mutationFn: async (id) => {
			if (!teamId) throw new Error("Team not available");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				return buildSavedImageTransformPresetsPrefs(parseSavedImageTransformPresets(freshPrefs).filter((p) => p.id !== id));
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
	const reorderUserMutation = useMutation({
		mutationFn: async (ordered) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) throw new Error("Account not available");
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedImageTransformPresetsPrefs(ordered)
			}, "image-transform-saved-presets");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const reorderTeamMutation = useMutation({
		mutationFn: async (ordered) => {
			if (!teamId) throw new Error("Team not available");
			await updateTeamPrefs.mutateAsync(buildSavedImageTransformPresetsPrefs(ordered));
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [
				"team",
				"console",
				teamId
			] });
		}
	});
	const updateUserPresetNameMutation = useMutation({
		mutationFn: async ({ id, name }) => {
			const currentAccount = getConsoleAccountFromCache(queryClient);
			if (!currentAccount) throw new Error("Account not available");
			const current = parseSavedImageTransformPresets(currentAccount.prefs);
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			const next = current.map((p) => p.id === id ? {
				...p,
				name: trimmedName
			} : p);
			return await updateAccountPrefs({
				...currentAccount.prefs,
				...buildSavedImageTransformPresetsPrefs(next)
			}, "image-transform-saved-presets");
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const updateTeamPresetNameMutation = useMutation({
		mutationFn: async ({ id, name }) => {
			if (!teamId) throw new Error("Team not available");
			const trimmedName = name.trim().slice(0, 64);
			if (!trimmedName) throw new Error("Name is required");
			await updateTeamPrefs.mutateAsync((freshPrefs) => {
				return buildSavedImageTransformPresetsPrefs(parseSavedImageTransformPresets(freshPrefs).map((p) => p.id === id ? {
					...p,
					name: trimmedName
				} : p));
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
	return {
		userPresets,
		teamPresets,
		addPreset: useCallback(async (args) => {
			if (args.level === "team" && teamId) return addTeamMutation.mutateAsync({
				name: args.name,
				json: args.json
			});
			return addUserMutation.mutateAsync({
				name: args.name,
				json: args.json
			});
		}, [
			addTeamMutation,
			addUserMutation,
			teamId
		]),
		deletePreset: useCallback(async (id, level) => {
			if (level === "team" && teamId) return deleteTeamMutation.mutateAsync(id);
			return deleteUserMutation.mutateAsync(id);
		}, [
			deleteTeamMutation,
			deleteUserMutation,
			teamId
		]),
		reorderPresets: useCallback(async (ordered, level) => {
			if (level === "team" && teamId) return reorderTeamMutation.mutateAsync(ordered);
			return reorderUserMutation.mutateAsync(ordered);
		}, [
			reorderTeamMutation,
			reorderUserMutation,
			teamId
		]),
		updatePresetName: useCallback(async (id, level, name) => {
			if (level === "team" && teamId) return updateTeamPresetNameMutation.mutateAsync({
				id,
				name
			});
			return updateUserPresetNameMutation.mutateAsync({
				id,
				name
			});
		}, [
			teamId,
			updateTeamPresetNameMutation,
			updateUserPresetNameMutation
		]),
		isAdding: addUserMutation.isPending || addTeamMutation.isPending,
		isDeleting: deleteUserMutation.isPending || deleteTeamMutation.isPending,
		isReordering: reorderUserMutation.isPending || reorderTeamMutation.isPending,
		hasTeamLevel: !!teamId
	};
}
export { useRightPaneWidth as $, formatCliTerminalPrompt as $a, resolveDiagramCanvasSize as $i, USER_PREFS_KEY_POSTGRES_SQL_EDITOR_STATE_PREFIX as $n, parseDatabasesSidebarWidthPx as $r, POSTGRES_SIDEBAR_PANEL_DEFAULT as $t, useAIChatConversationsWidth as A, getDiagramEdgeDash as Aa, serializeCliShellSessionsState as Ai, USER_PREFS_KEY_FEATURE_NOTIFICATIONS as An, getDatabaseTableRowColumnWidthsFromPrefs as Ar, parsePinnedProjectIds as At, useCliShellHeight as B, getDiagramArtboardRenderScale as Ba, mergeApiReferenceUiPrefsIntoAccountPrefs as Bi, USER_PREFS_KEY_MYSQL_SIDEBAR_TABLES_SORT_PREFIX as Bn, mergeMysqlSqlEditorStateIntoPrefs as Br, MAX_SAVED_MYSQL_QUERIES as Bt, redirectToSignInAfterConsoleSignOut as C, resizeDiagramTableRows as Ca, parseUsageChartIntervalFromPrefs as Ci, USER_PREFS_KEY_COMMUNITY_SUPPORT as Cn, buildPostgresSidebarPanelPrefs as Cr, resolvePostAuthRedirect as Ct, syncConsoleAccountAfterMutation as D, DIAGRAM_EDGE_LINE_STYLE_LABELS as Da, resolveMysqlSelectedSchema as Di, USER_PREFS_KEY_DATABASES_SIDEBAR_WIDTH as Dn, clampStorageFilesListDataColumnWidthPx as Dr, MAX_PINNED_PROJECTS as Dt, shouldRevalidateConsoleAccountOnAuthRoute as E, DIAGRAM_EDGE_LABEL_SUGGESTIONS as Ea, resolveMysqlSavedQueriesScope as Ei, USER_PREFS_KEY_COVER_GENERATOR_COLUMNS_LAYOUT as En, clampCliShellHeightPx as Er, prefetchOrganizationOverviewData as Et, useApiExplorerColumnsLayout as F, DIAGRAM_NODE_KIND_LABELS as Fa, sortSavedPostgresQueries as Fi, USER_PREFS_KEY_MYSQL_SAVED_QUERIES_PREFIX as Fn, isAccountPrefsPayloadWithinLimit as Fr, MAX_CLI_SHELL_SESSION_NAME_LENGTH as Ft, useConnectProjectTab as G, CLI_PROJECT_CWD as Ga, DIAGRAM_GENERATIONS_LOCAL_STORAGE_KEY as Gi, USER_PREFS_KEY_POSTGRES_QUERY_HISTORY_PREFIX as Gn, mergeStorageFilesListColumnWidthsIntoPrefs as Gr, MAX_SAVED_POSTGRES_QUERY_SQL_CHARS as Gt, useCliShellOpen as H, resolveDiagramSizePresetKey as Ha, readApiReferenceUiPrefsFromLocalStorage as Hi, USER_PREFS_KEY_MYSQL_SQL_EDITOR_STATE_PREFIX as Hn, mergePostgresSqlEditorStateIntoPrefs as Hr, MAX_SAVED_MYSQL_QUERY_SQL_CHARS as Ht, useApiExplorerExpandedProductGroup as I, DIAGRAM_SIZE_PRESETS as Ia, writeRecentImpersonationSessionList as Ii, USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SCOPE_PREFIX as In, isDefaultTablesDbRowsListColumnLayout as Ir, MAX_MYSQL_QUERY_HISTORY_ENTRIES as It, useGeneratorPanelVisibility as J, CLI_SHELL_TRY_COMMANDS as Ja, mergeDiagramGenerationsIntoPrefs as Ji, USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SORT_PREFIX as Jn, parseAIChatActiveConversationId as Jr, MYSQL_SIDEBAR_PANEL_DEFAULT as Jt, useCoverGeneratorColumnsLayout as K, CLI_SHELL_COLLAPSED_HEIGHT_PX as Ka, MAX_SAVED_DIAGRAM_GENERATION_NAME_LENGTH as Ki, USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_PREFIX as Kn, mergeStorageFilesListColumnWidthsWithDefaults as Kr, MYSQL_SAVED_QUERIES_DEFAULT_SORT as Kt, useApiExplorerResponseSplitLayout as L, DIAGRAM_SNAP_GRID as La, USER_PREFS_KEY_API_REFERENCE_UI as Li, USER_PREFS_KEY_MYSQL_SAVED_QUERIES_SORT_PREFIX as Ln, mergeCommunitySupportPrefsIntoPrefs as Lr, MAX_MYSQL_SQL_EDITOR_TAB_TITLE_LENGTH as Lt, useAIChatPinnedConversationIds as M, getDiagramEdgeStroke as Ma, sortMysqlSidebarTableRows as Mi, USER_PREFS_KEY_GENERATOR_PANEL_VISIBILITY as Mn, getPostgresSqlEditorStateKey as Mr, ensurePersonalOrgAndFirstProject as Mt, useAccountIdentities as N, normalizeDiagramEdge as Na, sortPostgresSidebarTableRows as Ni, USER_PREFS_KEY_IMAGE_TRANSFORM_PRESETS as Nn, getStorageFilesListColumnWidthsFromPrefs as Nr, resolvePostAuthOrganizationId as Nt, updateAccountPrefs as O, DIAGRAM_EDGE_PRESETS as Oa, resolvePostgresSavedQueriesScope as Oi, USER_PREFS_KEY_DATABASE_TABLE_ROW_COLUMN_WIDTHS as On, deleteDatabaseTableRowColumnWidthsFromPrefs as Or, TEAM_PREFS_KEY_PINNED_PROJECT_IDS as Ot, useAccountSessions as P, DIAGRAM_NODE_DEFAULTS as Pa, sortSavedMysqlQueries as Pi, USER_PREFS_KEY_MYSQL_QUERY_HISTORY_PREFIX as Pn, hasStorageFilesTablePaneWidthPref as Pr, MAX_CLI_SHELL_SESSIONS as Pt, usePostgresSqlEditorHeight as Q, createTerminalOutputLinkifier as Qa, normalizeDiagramDocument as Qi, USER_PREFS_KEY_POSTGRES_SQL_EDITOR_HEIGHT as Qn, parseCommunitySupportPrefs as Qr, POSTGRES_SAVED_QUERIES_SORT_OPTIONS as Qt, useAuthPasswordStrengthComplianceOpen as R, DIAGRAM_STORAGE_KEY as Ra, getApiReferencePlatformForMode as Ri, USER_PREFS_KEY_MYSQL_SELECTED_SCHEMA_PREFIX as Rn, mergeDatabaseTableRowColumnWidthsTableIntoPrefs as Rr, MAX_POSTGRES_QUERY_HISTORY_ENTRIES as Rt, purgeConsoleAccountCaches as S, resizeDiagramTableColumns as Sa, parseUsageChartDateRangeFromPrefs as Si, USER_PREFS_KEY_CLI_SHELL_SESSIONS_SIDEBAR_WIDTH_PX as Sn, buildPostgresSelectedSchemaPrefs as Sr, requiresConsoleEmailVerification as St, shouldRevalidateConsoleAccount as T, DIAGRAM_EDGE_ARROW_LABELS as Ta, readTablesDbRowsListColumnsRawFromPrefs as Ti, USER_PREFS_KEY_CONSOLE_IMPERSONATION_RECENT as Tn, buildPostgresSqlEditorStatePrefs as Tr, parseOrganizationIdFromPath as Tt, useCliShellSessionsPrefs as U, BROWSER_PROXY_SESSION_COOKIE as Ua, resolveApiReferenceUiPrefs as Ui, USER_PREFS_KEY_ORGANIZATION as Un, mergeRecentImpersonationLists as Ur, MAX_SAVED_POSTGRES_QUERIES as Ut, useCliShellHistory as V, getDiagramSizePresetKey as Va, parseApiReferenceUiPrefs as Vi, USER_PREFS_KEY_MYSQL_SQL_EDITOR_HEIGHT as Vn, mergePostgresQueryHistoryIntoPrefs as Vr, MAX_SAVED_MYSQL_QUERY_NAME_LENGTH as Vt, useCliShellSessionsSidebarWidth as W, CLI_BOOTSTRAP_READY_MESSAGE as Wa, writeApiReferenceUiPrefsToLocalStorage as Wi, USER_PREFS_KEY_ORG_PROJECTS_LIST_VIEW_MODE as Wn, mergeServiceListViewModeIntoPrefs as Wr, MAX_SAVED_POSTGRES_QUERY_NAME_LENGTH as Wt, useMFAFactors as X, CLI_TERMINAL_MUTED as Xa, removeSavedDiagramGeneration as Xi, USER_PREFS_KEY_POSTGRES_SIDEBAR_PANEL_PREFIX as Xn, parseCliShellSessions as Xr, MYSQL_SIDEBAR_TABLES_SORT_OPTIONS as Xt, useImageTransformSavedPresets as Y, createCliShellWelcomeLines as Ya, parseSavedDiagramGenerations as Yi, USER_PREFS_KEY_POSTGRES_SELECTED_SCHEMA_PREFIX as Yn, parseAIChatConversationsWidthPx as Yr, MYSQL_SIDEBAR_TABLES_DEFAULT_SORT as Yt, useMysqlSqlEditorHeight as Z, CLI_TERMINAL_RESET as Za, upsertSavedDiagramGeneration as Zi, USER_PREFS_KEY_POSTGRES_SIDEBAR_TABLES_SORT_PREFIX as Zn, parseCliShellSessionsSidebarWidthPx as Zr, POSTGRES_SAVED_QUERIES_DEFAULT_SORT as Zt, isConsoleSigningOut as _, DIAGRAM_TABLE_MAX_COLUMNS as _a, parseServiceListViewMode as _i, USER_PREFS_KEY_BUILD_NOTIFICATIONS_OPTED_OUT as _n, useRemoveTeamMember as _o, buildMysqlSidebarTablesSortPrefs as _r, useUpdateMockNumbers as _t, accountSessionsQueryOptions as a, snapDiagramValue as aa, parseMysqlSidebarPanel as ai, STORAGE_FILES_TABLE_PANE_MAX_PX as an, createCliTerminalWebLinksAddon as ao, USER_PREFS_KEY_STORAGE_FILES_TABLE_PANE_WIDTH_PX as ar, useUpdateAuthDuration as at, performConsoleSignOut as b, DIAGRAM_TABLE_MIN_ROWS as ba, parseTablesDbRowsListColumnLayout as bi, USER_PREFS_KEY_CLI_SHELL_OPEN as bn, useUpdateConsoleTeamPrefs as bo, buildPostgresSavedQueriesScopePrefs as br, useUpdateSessionInvalidation as bt, ensureConsoleAccountOnAuthRoute as c, getDiagramNodeAnchor as ca, parsePostgresQueryHistory as ci, USER_PREFS_KEY_AI_CHAT_CONVERSATIONS_WIDTH_PX as cn, RIGHT_PANE_TRANSITION_MS as co, USER_PREFS_KEY_TABLESDB_ROWS_LIST_COLUMNS_PREFIX as cr, useUpdateAuthPasswordDictionary as ct, fetchAccountSessions as d, normalizeDiagramNode as da, parsePostgresSavedQueriesSort as di, USER_PREFS_KEY_AI_CHAT_PANEL_WIDTH_PX as dn, fetchConsoleTeam as do, appendRecentImpersonationUser as dr, useUpdateAuthSessionsLimit as dt, createDiagramFromTemplate as ea, parseMysqlQueryHistory as ei, POSTGRES_SIDEBAR_TABLES_DEFAULT_SORT as en, resolveCliTerminalProjectLabel as eo, USER_PREFS_KEY_RIGHT_PANE_WIDTH_PX as er, useSavedFilters as et, fetchMFAFactors as f, DIAGRAM_SCREENSHOT_GRAVITY_GRID_ROWS as fa, parsePostgresSelectedSchema as fi, USER_PREFS_KEY_AI_CHAT_PINNED_CONVERSATION_IDS as fn, fetchOrganizationMemberships as fo, buildMysqlSavedQueriesPrefs as fr, useUpdateDenyAliasedEmailPolicy as ft, isConsoleMfaRequiredError as g, getDiagramScreenshotGravityFromFocus as ga, parseRecentImpersonationUsers as gi, USER_PREFS_KEY_AUTH_PASSWORD_STRENGTH_COMPLIANCE_OPEN as gn, useConsoleTeam as go, buildMysqlSidebarPanelPrefs as gr, useUpdateMembershipsPrivacy as gt, isConsoleAccountQuerySettled as h, getDiagramScreenshotFocusForGravity as ha, parsePostgresSqlEditorState as hi, USER_PREFS_KEY_API_EXPLORER_RESPONSE_SPLIT_LAYOUT as hn, updateConsoleTeamPrefs as ho, buildMysqlSelectedSchemaPrefs as hr, useUpdateDenyFreeEmailPolicy as ht, accountIdentitiesQueryOptions as i, createDiagramNode as ia, parseMysqlSelectedSchema as ii, STORAGE_FILES_LIST_RESIZABLE_COLUMN_WIDTH_KEYS as in, writeCliTerminalRaw as io, USER_PREFS_KEY_STORAGE_FILES_LIST_COLUMN_WIDTHS as ir, useTablesDbRowsListColumns as it, useAIChatPanelOpen as j, getDiagramEdgeOpacity as ja, serializeTablesDbRowsListColumnLayout as ji, USER_PREFS_KEY_FUNCTIONS_LIST_VIEW_MODE as jn, getMysqlSqlEditorStateKey as jr, reorderPinnedProjectIds as jt, useAIChatActiveConversationId as k, DIAGRAM_EDGE_STROKE_TONE_LABELS as ka, resolvePostgresSelectedSchema as ki, USER_PREFS_KEY_DIAGRAM_GENERATOR_PROPERTIES_SPLIT_LAYOUT as kn, deleteTablesDbRowsListColumnsFromPrefs as kr, buildPinnedProjectIdsPrefs as kt, ensureConsoleAccountQueryData as l, getDiagramNodeIconSrc as la, parsePostgresSavedQueries as li, USER_PREFS_KEY_AI_CHAT_EXPANDED as ln, clampRightPaneWidthPx as lo, USER_PREFS_KEY_USAGE_CHART_DATE_RANGE as lr, useUpdateAuthPasswordHistory as lt, getConsoleAccountFromCache as m, getDiagramScreenshotFocus as ma, parsePostgresSidebarTablesSort as mi, USER_PREFS_KEY_API_EXPLORER_EXPANDED_PRODUCT_GROUP as mn, organizationMembershipsQueryOptions as mo, buildMysqlSavedQueriesSortPrefs as mr, useUpdateDenyDisposableEmailPolicy as mt, CONSOLE_ACCOUNT_STALE_TIME_MS as n, createDefaultDiagramDocument as na, parseMysqlSavedQueriesScope as ni, STORAGE_FILES_LIST_COLUMN_WIDTH_KEYS as nn, writeCliShellLine as no, USER_PREFS_KEY_SIDEBAR_COLLAPSED as nr, useStorageFilesTablePaneWidth as nt, commitConsoleAccountToCaches as o, buildDiagramEdgeArrowheadPath as oa, parseMysqlSidebarTablesSort as oi, STORAGE_FILES_TABLE_PANE_MIN_PX as on, withCliTerminalLinkCursor as oo, USER_PREFS_KEY_STORAGE_SIDEBAR_WIDTH as or, useUpdateAuthLimit as ot, flushRecentImpersonationUsersToAccountPrefs as p, formatDiagramScreenshotGravityLabel as pa, parsePostgresSidebarPanel as pi, USER_PREFS_KEY_API_EXPLORER_COLUMNS_LAYOUT as pn, mapOrganizationMembershipsToTeamMembers as po, buildMysqlSavedQueriesScopePrefs as pr, useUpdateDenyCorporateEmailPolicy as pt, useDiagramGeneratorPropertiesSplitLayout as q, CLI_SHELL_COLLAPSE_MS as qa, USER_PREFS_KEY_DIAGRAM_GENERATIONS as qi, USER_PREFS_KEY_POSTGRES_SAVED_QUERIES_SCOPE_PREFIX as qn, mergeUsageChartFiltersIntoPrefs as qr, MYSQL_SAVED_QUERIES_SORT_OPTIONS as qt, MAX_AUTH_POLICY_TOTAL as r, createDiagramEdge as ra, parseMysqlSavedQueriesSort as ri, STORAGE_FILES_LIST_DATA_COLUMN_MIN_WIDTH_PX as rn, writeCliShellSuggestions as ro, USER_PREFS_KEY_SITES_LIST_VIEW_MODE as rr, useTableViewSidebarWidth as rt, consoleAccountQueryOptions as s, buildDiagramEdgePaths as sa, parseMysqlSqlEditorState as si, USER_PREFS_KEY_AI_CHAT_ACTIVE_CONVERSATION_ID as sn, getBlockedCliCommandMessage as so, USER_PREFS_KEY_STORES_LIST_VIEW_MODE as sr, useUpdateAuthMethod as st, CONSOLE_ACCOUNT_GC_TIME_MS as t, getDiagramNodeCenterPlacement as ta, parseMysqlSavedQueries as ti, POSTGRES_SIDEBAR_TABLES_SORT_OPTIONS as tn, resolveCliTerminalUsername as to, USER_PREFS_KEY_SAVED_FILTERS_PREFIX as tr, useSidebarCollapsed as tt, fetchAccountIdentities as u, hasDiagramNodeIcon as ua, parsePostgresSavedQueriesScope as ui, USER_PREFS_KEY_AI_CHAT_PANEL_OPEN as un, consoleTeamQueryOptions as uo, USER_PREFS_KEY_USAGE_CHART_INTERVAL as ur, useUpdateAuthPasswordStrength as ut, mfaFactorsQueryOptions as v, DIAGRAM_TABLE_MAX_ROWS as va, parseStorageFilesTablePaneWidthPx as vi, USER_PREFS_KEY_CLI_SHELL_HEIGHT_PX as vn, useResendMembershipInvite as vo, buildMysqlSqlEditorStatePrefs as vr, useUpdatePersonalDataCheck as vt, refreshConsoleAccountAfterAuth as w, updateDiagramTableCell as wa, readRecentImpersonationSessionList as wi, USER_PREFS_KEY_CONNECT_PROJECT_TAB as wn, buildPostgresSidebarTablesSortPrefs as wr, toRedirectNavigateOptions as wt, prefetchConsoleMfaRouteData as x, createDefaultDiagramTable as xa, parseTablesDbRowsListColumnsFromPrefs as xi, USER_PREFS_KEY_CLI_SHELL_SESSIONS_PREFIX as xn, useUpdateMembershipRole as xo, buildPostgresSavedQueriesSortPrefs as xr, prefetchPostAuthDestination as xt, navigateToConsoleMfaAfterSession as y, DIAGRAM_TABLE_MIN_COLUMNS as ya, parseStorageSidebarWidthPx as yi, USER_PREFS_KEY_CLI_SHELL_HISTORY_PREFIX as yn, useTeams as yo, buildPostgresSavedQueriesPrefs as yr, useUpdateSessionAlerts as yt, useBuildNotificationsOptedOut as z, getDiagramArtboardDisplaySize as za, mergeApiReferenceUiPrefs as zi, USER_PREFS_KEY_MYSQL_SIDEBAR_PANEL_PREFIX as zn, mergeMysqlQueryHistoryIntoPrefs as zr, MAX_POSTGRES_SQL_EDITOR_TAB_TITLE_LENGTH as zt };
