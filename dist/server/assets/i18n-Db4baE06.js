import { r as isInitTicketTypeId } from "./ticket-types-BpqSrvYB.js";
import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const INIT_MOCK_DAY_BEFORE = 0;
const INIT_LAUNCH_WEEK_DAY_COUNT = 5;
const INIT_ORG_PROMO_BANNER_DAYS_AFTER_EVENT = 7;
function getInitMockDayAfter(dayCount = 5) {
	return dayCount + 1;
}
function getInitMockDayBannerExpired(dayCount = 5) {
	return getInitMockDayAfter(dayCount) + 1;
}
function getInitMockCurrentDayMax(dayCount = 5) {
	return getInitMockDayBannerExpired(dayCount);
}
function isValidInitMockCurrentDay(day, dayCount = 5) {
	return Number.isInteger(day) && day >= 0 && day <= getInitMockCurrentDayMax(dayCount);
}
function formatInitMockCurrentDay(day) {
	if (day === null) return "Using real calendar date";
	if (day === 0) return "Before event (all days locked)";
	if (day === getInitMockDayAfter()) return "Simulates after the event. Recap mode with all days unlocked.";
	if (day === getInitMockDayBannerExpired()) return "7+ days after event. Org promo banner hidden.";
	return `Day ${day} of 5`;
}
const USER_OS_VALUES = [
	"macos",
	"windows",
	"linux"
];
const USER_OS_LABELS = {
	macos: "macOS",
	windows: "Windows",
	linux: "Linux"
};
function detectUserOs() {
	if (typeof navigator === "undefined") return "macos";
	const ua = navigator.userAgent.toLowerCase();
	const platform = (navigator.userAgentData?.platform ?? navigator.platform ?? "").toLowerCase();
	if (/win32|win64|wow64|windows/.test(platform) || /windows|win32|wow64/.test(ua)) return "windows";
	if (/mac|darwin|iphone|ipad|ipod/.test(platform) || /macintosh|mac os|iphone|ipad|ipod/.test(ua)) return "macos";
	return "linux";
}
function resolveUserOs(override = "auto") {
	if (override === "auto") return detectUserOs();
	return override;
}
function isMacOs(os = detectUserOs()) {
	return os === "macos";
}
function getUserOsLabel(os) {
	return USER_OS_LABELS[os];
}
function orderByPreferredOs(items, preferred, getOs) {
	const preferredItems = [];
	const rest = [];
	for (const item of items) if (getOs(item) === preferred) preferredItems.push(item);
	else rest.push(item);
	return [...preferredItems, ...rest];
}
function orderOsOptions(options, preferred = detectUserOs()) {
	return orderByPreferredOs(options, preferred, (os) => os);
}
function matchTabToUserOs(idOrTitle) {
	if (!idOrTitle) return null;
	const key = idOrTitle.trim().toLowerCase().replace(/\s+/g, "");
	if (key === "macos" || key === "mac" || key === "osx" || key === "darwin") return "macos";
	if (key === "windows" || key === "win" || key === "cmd" || key === "powershell") return "windows";
	if (key === "linux") return "linux";
	if (key === "unix" || key === "macosandlinux" || key === "macandlinux" || key === "linuxandmacos") return "macos";
	return null;
}
function tabMatchesUserOs(idOrTitle, os) {
	if (!idOrTitle) return false;
	const key = idOrTitle.trim().toLowerCase().replace(/\s+/g, "");
	if (matchTabToUserOs(idOrTitle) === os) return true;
	if ((os === "macos" || os === "linux") && (key === "unix" || key === "macosandlinux" || key === "macandlinux" || key === "linuxandmacos")) return true;
	return false;
}
function resolvePreferredOsTabId(tabs, os = detectUserOs()) {
	if (tabs.length === 0) return null;
	const exact = tabs.find((tab) => {
		return (matchTabToUserOs(tab.id) ?? matchTabToUserOs(tab.title ?? null)) === os;
	});
	if (exact) return exact.id;
	return tabs.find((tab) => tabMatchesUserOs(tab.id, os) || tabMatchesUserOs(tab.title ?? null, os))?.id ?? null;
}
function orderTabsByPreferredOs(tabs, preferred = detectUserOs()) {
	const getOs = (tab) => matchTabToUserOs(tab.id) ?? matchTabToUserOs(tab.title ?? null);
	if (tabs.length > 0 && tabs.every((tab) => getOs(tab) != null)) return orderByPreferredOs(tabs, preferred, (tab) => {
		if (tabMatchesUserOs(tab.id, preferred) || tabMatchesUserOs(tab.title, preferred)) return preferred;
		return getOs(tab);
	});
	const osIndexes = [];
	const osTabs = [];
	tabs.forEach((tab, index) => {
		if (getOs(tab) != null) {
			osIndexes.push(index);
			osTabs.push(tab);
		}
	});
	if (osTabs.length === 0) return [...tabs];
	const orderedOs = orderByPreferredOs(osTabs, preferred, (tab) => {
		if (tabMatchesUserOs(tab.id, preferred) || tabMatchesUserOs(tab.title, preferred)) return preferred;
		return getOs(tab);
	});
	const next = [...tabs];
	osIndexes.forEach((index, i) => {
		next[index] = orderedOs[i];
	});
	return next;
}
function resolveDefaultCliShellTab(os = detectUserOs()) {
	return os === "windows" ? "cmd" : "unix";
}
function orderCliShellTabs(os = detectUserOs()) {
	if (os === "windows") return [
		"cmd",
		"powershell",
		"unix"
	];
	return [
		"unix",
		"cmd",
		"powershell"
	];
}
var DEBUG_OVERRIDE_EVENT = "debugOverridesChange";
const DEBUG_OVERRIDE_KEYS = {
	showNativeAppBar: "debug:showNativeAppBar",
	showActivityChart: "debug:showActivityChart",
	showSuccessTeamCard: "debug:showSuccessTeamCard",
	mockCloudStatusAlert: "debug:mockCloudStatusAlert",
	showFullscreenLoader: "debug:showFullscreenLoader",
	showFunctionsLocalEditor: "debug:showFunctionsLocalEditor",
	showConstruction: "debug:showConstruction",
	mockInitCurrentDay: "debug:mockInitCurrentDay",
	mockInitTicketType: "debug:mockInitTicketType",
	previewInitReactionConfetti: "debug:previewInitReactionConfetti",
	initLowPowerAnimations: "debug:initLowPowerAnimations",
	userOs: "debug:userOs",
	keyboardLayout: "debug:keyboardLayout",
	disableUsageBreakdownQueries: "debug:disableUsageBreakdownQueries",
	disableOverviewBandwidthChart: "debug:disableOverviewBandwidthChart",
	disableOverviewRequestsChart: "debug:disableOverviewRequestsChart",
	disableOverviewStorageChart: "debug:disableOverviewStorageChart",
	disableOverviewExecutionsChart: "debug:disableOverviewExecutionsChart",
	disableOverviewComputeChart: "debug:disableOverviewComputeChart",
	unlockOnboardingLocks: "debug:unlockOnboardingLocks",
	previewOnboardingComplete: "debug:previewOnboardingComplete",
	previewCommunitySupportWizard: "debug:previewCommunitySupportWizard",
	pageDirection: "debug:pageDirection",
	language: "debug:language"
};
var EPHEMERAL_OVERRIDE_KEYS = new Set(["showFullscreenLoader"]);
var ephemeralOverrides = {};
function getStorage() {
	if (typeof window === "undefined" || !window.localStorage) return null;
	return window.localStorage;
}
function readBooleanFromStorage(key, defaultValue = false) {
	const storage = getStorage();
	if (!storage) return defaultValue;
	const raw = storage.getItem(key);
	if (raw === null) return defaultValue;
	return raw === "true";
}
function getShowConstructionDefault() {
	const raw = String("").trim().toLowerCase();
	if (!raw) return true;
	if ([
		"0",
		"false",
		"off",
		"no"
	].includes(raw)) return false;
	if ([
		"1",
		"true",
		"on",
		"yes"
	].includes(raw)) return true;
	return true;
}
function readStringFromStorage(key, allowedValues, defaultValue) {
	const storage = getStorage();
	if (!storage) return defaultValue;
	const raw = storage.getItem(key);
	if (raw === null) return defaultValue;
	return allowedValues.includes(raw) ? raw : defaultValue;
}
function readNullableInitDayFromStorage(key) {
	const storage = getStorage();
	if (!storage) return null;
	const raw = storage.getItem(key);
	if (raw === null || raw === "auto") return null;
	const parsed = Number.parseInt(raw, 10);
	if (!isValidInitMockCurrentDay(parsed)) return null;
	return parsed;
}
function readNullableInitTicketTypeFromStorage(key) {
	const storage = getStorage();
	if (!storage) return null;
	const raw = storage.getItem(key);
	if (raw === null || raw === "auto") return null;
	return isInitTicketTypeId(raw) ? raw : null;
}
var USER_OS_OVERRIDE_VALUES = ["auto", ...USER_OS_VALUES];
function readUserOsOverrideFromStorage() {
	const storage = getStorage();
	if (!storage) return "auto";
	const fromUserOs = storage.getItem(DEBUG_OVERRIDE_KEYS.userOs);
	if (fromUserOs !== null && USER_OS_OVERRIDE_VALUES.includes(fromUserOs)) return fromUserOs;
	const legacy = storage.getItem(DEBUG_OVERRIDE_KEYS.keyboardLayout);
	if (legacy !== null && (legacy === "auto" || legacy === "macos" || legacy === "windows")) {
		storage.setItem(DEBUG_OVERRIDE_KEYS.userOs, legacy);
		storage.removeItem(DEBUG_OVERRIDE_KEYS.keyboardLayout);
		return legacy;
	}
	return "auto";
}
function loadDebugOverrides() {
	return {
		showNativeAppBar: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.showNativeAppBar),
		showActivityChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.showActivityChart, false),
		showSuccessTeamCard: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.showSuccessTeamCard, false),
		mockCloudStatusAlert: readStringFromStorage(DEBUG_OVERRIDE_KEYS.mockCloudStatusAlert, [
			"live",
			"operational",
			"degraded",
			"downtime",
			"maintenance"
		], "live"),
		showFullscreenLoader: ephemeralOverrides.showFullscreenLoader ?? false,
		showFunctionsLocalEditor: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.showFunctionsLocalEditor, false),
		showConstruction: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.showConstruction, getShowConstructionDefault()),
		mockInitCurrentDay: readNullableInitDayFromStorage(DEBUG_OVERRIDE_KEYS.mockInitCurrentDay),
		mockInitTicketType: readNullableInitTicketTypeFromStorage(DEBUG_OVERRIDE_KEYS.mockInitTicketType),
		previewInitReactionConfetti: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.previewInitReactionConfetti, false),
		initLowPowerAnimations: readStringFromStorage(DEBUG_OVERRIDE_KEYS.initLowPowerAnimations, [
			"auto",
			"on",
			"off"
		], "auto"),
		userOs: readUserOsOverrideFromStorage(),
		disableUsageBreakdownQueries: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableUsageBreakdownQueries, false),
		disableOverviewBandwidthChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableOverviewBandwidthChart, false),
		disableOverviewRequestsChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableOverviewRequestsChart, false),
		disableOverviewStorageChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableOverviewStorageChart, false),
		disableOverviewExecutionsChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableOverviewExecutionsChart, false),
		disableOverviewComputeChart: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.disableOverviewComputeChart, false),
		unlockOnboardingLocks: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.unlockOnboardingLocks, false),
		previewOnboardingComplete: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.previewOnboardingComplete, false),
		previewCommunitySupportWizard: readBooleanFromStorage(DEBUG_OVERRIDE_KEYS.previewCommunitySupportWizard, false),
		pageDirection: readStringFromStorage(DEBUG_OVERRIDE_KEYS.pageDirection, ["ltr", "rtl"], "ltr"),
		language: readStringFromStorage(DEBUG_OVERRIDE_KEYS.language, [
			"en",
			"he",
			"ja",
			"bs"
		], "bs")
	};
}
function setDebugOverride(key, value) {
	if (EPHEMERAL_OVERRIDE_KEYS.has(key)) {
		ephemeralOverrides[key] = value;
		if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(DEBUG_OVERRIDE_EVENT));
		return;
	}
	const storage = getStorage();
	if (!storage) return;
	const storageKey = DEBUG_OVERRIDE_KEYS[key];
	if (typeof value === "boolean") storage.setItem(storageKey, value ? "true" : "false");
	else if (typeof value === "string") storage.setItem(storageKey, value);
	else if (value === null) storage.removeItem(storageKey);
	else if (typeof value === "number") storage.setItem(storageKey, String(value));
	else if (value) storage.setItem(storageKey, "true");
	else storage.removeItem(storageKey);
	window.dispatchEvent(new CustomEvent(DEBUG_OVERRIDE_EVENT));
}
const FEATURE_FLAGS_MENU_DEBUG_KEYS = [
	"showActivityChart",
	"showNativeAppBar",
	"showSuccessTeamCard",
	"showFunctionsLocalEditor",
	"showConstruction",
	"disableUsageBreakdownQueries",
	"disableOverviewBandwidthChart",
	"disableOverviewRequestsChart",
	"disableOverviewStorageChart",
	"disableOverviewExecutionsChart",
	"disableOverviewComputeChart",
	"unlockOnboardingLocks",
	"previewOnboardingComplete",
	"previewCommunitySupportWizard"
];
const FEATURE_FLAGS_MENU_DEBUG_DEFAULTS = {
	showActivityChart: false,
	showNativeAppBar: false,
	showSuccessTeamCard: false,
	showFunctionsLocalEditor: false,
	showConstruction: getShowConstructionDefault(),
	disableUsageBreakdownQueries: false,
	disableOverviewBandwidthChart: false,
	disableOverviewRequestsChart: false,
	disableOverviewStorageChart: false,
	disableOverviewExecutionsChart: false,
	disableOverviewComputeChart: false,
	unlockOnboardingLocks: false,
	previewOnboardingComplete: false,
	previewCommunitySupportWizard: false
};
function resetFeatureFlagsMenuDebugOverrides() {
	const storage = getStorage();
	if (!storage) return;
	FEATURE_FLAGS_MENU_DEBUG_KEYS.forEach((key) => {
		storage.removeItem(DEBUG_OVERRIDE_KEYS[key]);
	});
	window.dispatchEvent(new CustomEvent(DEBUG_OVERRIDE_EVENT));
}
function resetFeatureFlagsMenuDebugOverride(key) {
	const storage = getStorage();
	if (!storage) return;
	storage.removeItem(DEBUG_OVERRIDE_KEYS[key]);
	window.dispatchEvent(new CustomEvent(DEBUG_OVERRIDE_EVENT));
}
function subscribeToDebugOverrides(callback) {
	if (typeof window === "undefined") return () => void 0;
	const handler = () => callback(loadDebugOverrides());
	window.addEventListener(DEBUG_OVERRIDE_EVENT, handler);
	window.addEventListener("storage", handler);
	return () => {
		window.removeEventListener(DEBUG_OVERRIDE_EVENT, handler);
		window.removeEventListener("storage", handler);
	};
}
function getDefaultDebugOverrides() {
	return {
		showNativeAppBar: false,
		showActivityChart: false,
		showSuccessTeamCard: false,
		mockCloudStatusAlert: "live",
		showFullscreenLoader: ephemeralOverrides.showFullscreenLoader ?? false,
		showFunctionsLocalEditor: false,
		showConstruction: getShowConstructionDefault(),
		mockInitCurrentDay: null,
		mockInitTicketType: null,
		previewInitReactionConfetti: false,
		initLowPowerAnimations: "auto",
		userOs: "auto",
		disableUsageBreakdownQueries: false,
		disableOverviewBandwidthChart: false,
		disableOverviewRequestsChart: false,
		disableOverviewStorageChart: false,
		disableOverviewExecutionsChart: false,
		disableOverviewComputeChart: false,
		unlockOnboardingLocks: false,
		previewOnboardingComplete: false,
		previewCommunitySupportWizard: false,
		pageDirection: "ltr",
		language: "en"
	};
}
function useDebugOverrides() {
	const [overrides, setOverrides] = useState(getDefaultDebugOverrides);
	useEffect(() => {
		setOverrides(loadDebugOverrides());
		return subscribeToDebugOverrides(setOverrides);
	}, []);
	return overrides;
}
function areUsageBreakdownQueriesEnabled() {
	return !loadDebugOverrides().disableUsageBreakdownQueries;
}
const enCatalog = {
	app: {
		header: {
			centerSearchPlaceholder: "Search in docs...",
			marketingNav: {
				products: "Products",
				docs: "Docs",
				pricing: "Pricing",
				enterprise: "Enterprise",
				customers: "Customers",
				blog: "Blog",
				changelog: "Changelog",
				websiteNavigation: "Website navigation",
				changelogNewUpdatesAria: "Changelog, new updates"
			},
			actions: {
				openNavigation: "Open navigation",
				openWebsiteNavigation: "Open website navigation",
				create: "Create",
				connect: "Connect",
				assistant: "Agent",
				upgrade: "Upgrade",
				signIn: "Sign in",
				signUp: "Sign up",
				signOut: "Sign out",
				backToOrganization: "Back to organization"
			},
			createMenu: {
				newProject: "New Project",
				newOrganization: "New Organization",
				newAgent: "New Agent",
				buildSection: "Build",
				deploySection: "Deploy",
				protectSection: "Protect",
				newDatabase: "New Database",
				newUser: "New User",
				newBucket: "New Bucket",
				newFunction: "New Function",
				newMessage: "New Message",
				newFirewallRule: "New Firewall Rule",
				newSite: "New Site"
			},
			permissions: {
				createProjects: "You don't have permission to create projects.",
				createDatabases: "You don't have permission to create databases.",
				createUsers: "You don't have permission to create users.",
				createBuckets: "You don't have permission to create buckets.",
				createFunctions: "You don't have permission to create functions.",
				createTopics: "You don't have permission to create messaging topics.",
				createFirewallRules: "You don't have permission to create firewall rules.",
				createSites: "You don't have permission to create sites."
			},
			accountMenu: {
				user: "User",
				account: "Account",
				projects: "Projects",
				domains: "Domains",
				memberSince: "Member since",
				accountStatus: "Account status",
				accountId: "Account ID",
				copyAccountId: "Copy account ID",
				copied: "Copied!",
				twoFactor: "2FA",
				active: "Active",
				inactive: "Inactive",
				enabled: "Enabled",
				disabled: "Disabled",
				console: "Console",
				oldConsole: "Old console",
				home: "Home",
				docs: "Docs",
				changelog: "Changelog",
				admin: "Admin",
				cache: "Cache",
				blocks: "Blocks",
				generator: "Generator"
			},
			search: { compactPlaceholder: "Search..." }
		},
		footer: {
			groups: {
				quickStarts: "Quick starts",
				products: "Products",
				learn: "Learn",
				programs: "Programs",
				about: "About",
				compare: "Compare"
			},
			links: {
				docs: "Docs",
				store: "Store",
				status: "Status",
				cookieSettings: "Cookie settings",
				soc2: "SOC 2 Type II Certified",
				copyrightBrand: "Appwrite"
			},
			social: {
				github: "GitHub",
				x: "X",
				youtube: "YouTube",
				linkedIn: "LinkedIn",
				instagram: "Instagram",
				discord: "Discord",
				dailyDevSquad: "daily.dev Squad"
			},
			expanded: {
				quickStarts: {
					web: "Web",
					tanstackStart: "TanStack Start",
					nextjs: "Next.js",
					react: "React",
					vue: "Vue.js",
					nuxt: "Nuxt",
					svelteKit: "SvelteKit",
					refine: "Refine",
					angular: "Angular",
					reactNative: "React Native",
					flutter: "Flutter",
					apple: "Apple",
					android: "Android",
					qwik: "Qwik",
					astro: "Astro",
					solid: "Solid"
				},
				products: {
					auth: "Auth",
					databases: "Databases",
					storage: "Storage",
					functions: "Functions",
					messaging: "Messaging",
					realtime: "Realtime",
					agent: "Agent",
					hosting: "Hosting",
					domains: "Domains",
					network: "Network",
					firewall: "Firewall"
				},
				learn: {
					blog: "Blog",
					docs: "Docs",
					integrations: "Integrations",
					community: "Community",
					init: "Init",
					threads: "Threads",
					changelog: "Changelog",
					roadmap: "Roadmap",
					sourceCode: "Source code",
					arena: "Arena",
					techNews: "Tech news"
				},
				programs: {
					startups: "Startups",
					education: "Education",
					partners: "Partners",
					enterprise: "Enterprise",
					affiliates: "Affiliates"
				},
				about: {
					company: "Company",
					pricing: "Pricing",
					careers: "Careers",
					contactUs: "Contact us",
					assets: "Assets",
					security: "Security"
				},
				compare: {
					vsSupabase: "Appwrite vs. Supabase",
					vsFirebase: "Appwrite vs. Firebase",
					vsNeon: "Appwrite vs. Neon",
					vsVercel: "Appwrite vs. Vercel",
					vsNetlify: "Appwrite vs. Netlify",
					vsCloudinary: "Appwrite vs. Cloudinary",
					vsAuth0: "Appwrite vs. Auth0",
					nextjsHosting: "Next.js hosting",
					reactHosting: "React hosting",
					vueHosting: "Vue.js hosting",
					baas: "Backend as a service (BaaS)"
				}
			}
		},
		sidebar: {
			sections: {
				connect: "Connect",
				build: "Build",
				deploy: "Deploy",
				observe: "Observe",
				protect: "Protect"
			},
			items: {
				overview: "Overview",
				apps: "Apps",
				apiKeys: "API Keys",
				explorer: "Explorer",
				auth: "Auth",
				databases: "Databases",
				storage: "Storage",
				functions: "Functions",
				messaging: "Messaging",
				sites: "Sites",
				distribution: "Distribution",
				activity: "Activity",
				realtime: "Realtime",
				logs: "Logs",
				usage: "Usage",
				analytics: "Analytics",
				errors: "Errors",
				firewall: "Firewall",
				advisor: "Advisor",
				settings: "Settings"
			},
			badges: { soon: "Soon" },
			accessibility: {
				mainNavigation: "Main navigation",
				mobileNavigation: "Mobile navigation",
				closeNavigation: "Close navigation",
				expandSidebar: "Expand sidebar",
				collapseSidebar: "Collapse sidebar",
				comingSoonSuffix: "(Coming soon)"
			},
			onboarding: {
				getStarted: "Get started",
				progress: "Progress",
				loading: "Loading...",
				of: "of",
				completed: "completed"
			}
		},
		nativeAppBar: {
			back: "Back",
			forward: "Forward",
			history: "History",
			recentPages: "Recent pages",
			noRecentPages: "No recent pages",
			searchPlaceholder: "Search..."
		},
		consoleBanner: {
			imagineAlt: "Imagine",
			messagePrefix: "Turn your ideas into functional products. Vibe coding powered by",
			dismiss: "Dismiss banner"
		},
		debugMenu: { language: {
			label: "Language",
			englishLabel: "English",
			englishDescription: "Use English copy.",
			hebrewLabel: "Hebrew",
			hebrewDescription: "Use Hebrew copy and RTL direction.",
			japaneseLabel: "Japanese",
			japaneseDescription: "Use Japanese copy.",
			activeEnglish: "English",
			activeHebrew: "Hebrew (RTL)",
			activeJapanese: "Japanese"
		} }
	},
	website: {
		home: {
			seoDescription: "Appwrite is an open-source developer platform with Auth, Databases, Storage, Functions, Messaging, and Sites. Build like a team of hundreds.",
			announcementNew: "Breaking",
			announcementText: "We're thrilled to announce Appwrite 2.0",
			heroTitleLineOne: "Build faster and scale",
			heroTitleLineTwo: "bigger than ever",
			heroDescription: "Appwrite is an open-source platform for building and scaling applications faster, offering Auth, Databases, Storage, Functions, Messaging, Realtime, and web hosting. All in one place.",
			heroPreviewWorkspace: "Appwrite",
			heroPreviewOrganization: "Acme Corp",
			heroPreviewProject: "First Appwrite project",
			heroImageAlt: "Appwrite console overview with usage charts, apps, and API keys",
			startProject: "Start project",
			requestDemo: "Request a demo",
			toolsHeading: "Optimized for the frameworks, languages and agents you love",
			aiDocsNavLabel: "AI and MCP documentation",
			productsHeadingLineOne: "All the services you need",
			productsHeadingLineTwo: "in one platform",
			productsDescription: "Build with modular products that feel unified from the first prototype to production scale.",
			securityHeading: "Embedded security across every layer of the architecture",
			securityDescription: "With a security-first approach, Appwrite helps keep products and users safe by default, making it easier to adhere to strict safety policies.",
			aiDocLinks: {
				mcpServers: "MCP servers",
				skills: "Appwrite Skills",
				aiArena: "AI Arena"
			},
			frameworkTools: {
				react: "React",
				tanstackStart: "TanStack Start",
				nextjs: "Next.js",
				vue: "Vue",
				sveltekit: "SvelteKit",
				android: "Android",
				ios: "iOS",
				flutter: "Flutter",
				claude: "Claude",
				chatgpt: "ChatGPT",
				cursor: "Cursor",
				lovable: "Lovable",
				opencode: "OpenCode",
				bun: "Bun"
			},
			productBento: {
				authTitle: "Auth",
				databasesTitle: "Databases",
				storageTitle: "Storage",
				functionsTitle: "Functions",
				sitesTitle: "Sites",
				messagingTitle: "Messaging",
				firewallTitle: "Firewall",
				realtimeTitle: "Realtime",
				authDescription: "Authenticate users securely with email, SMS, OAuth, anonymous sessions, and magic URLs.",
				databasesDescription: "Model, query, and scale with Appwrite databases or native PostgreSQL and MySQL, so you can match your use case and team's needs.",
				storageDescription: "Store files with compression, encryption, image transformations, and access control.",
				functionsDescription: "Deploy serverless functions with secure isolated runtimes and event-driven execution.",
				sitesDescription: "Deploy static, SSR, and CSR frontends from Git with instant previews and Appwrite behind them.",
				messagingDescription: "Send email, SMS, and push notifications through a unified messaging service.",
				firewallDescription: "Protect apps with traffic rules, abuse controls, and edge security for every project.",
				realtimeDescription: "Subscribe and react to events across your project as they happen.",
				firewallNewLabel: "New"
			},
			securityItems: {
				ddosTitle: "DDoS protection",
				ddosDescription: "Automatically detect and mitigate distributed denial-of-service attacks.",
				encryptionTitle: "Encryption",
				encryptionDescription: "Built-in data encryption for sensitive workloads in rest and in transit.",
				abuseTitle: "Abuse protection",
				abuseDescription: "Protect your APIs from abuse with built-in platform safeguards.",
				migrationsTitle: "Data migrations",
				migrationsDescription: "Move data from third parties or between Cloud and self-hosted environments.",
				gdprTitle: "GDPR",
				gdprDescription: "Support data privacy workflows and safeguards for GDPR requirements.",
				soc2Title: "SOC 2",
				soc2Description: "Operate on infrastructure designed for high security and privacy standards.",
				hipaaTitle: "HIPAA",
				hipaaDescription: "Protect sensitive health data with security-first product controls.",
				ccpaTitle: "CCPA",
				ccpaDescription: "Build with controls that help protect sensitive user data."
			}
		},
		products: {
			pageLayout: {
				startBuilding: "Start building",
				viewDocs: "View docs",
				viewPricing: "View pricing"
			},
			productNames: {
				auth: "Auth",
				databases: "Databases",
				storage: "Storage",
				functions: "Functions",
				messaging: "Messaging",
				sites: "Sites",
				firewall: "Firewall"
			},
			explore: {
				title: "Explore Appwrite",
				description: "Modular backend services that share the same project, permissions model, and console."
			},
			navigation: {
				triggerLabel: "Products",
				desktopTitle: "Platform products",
				desktopSubtitle: "Build, deploy, and scale on one backend platform",
				newLabel: "New",
				categories: {
					build: "Build",
					deploy: "Deploy",
					protect: "Protect"
				},
				items: {
					authTagline: "Email, OAuth, SMS, MFA, teams, and sessions.",
					databasesTagline: "TablesDB, DocumentsDB, VectorsDB, PostgreSQL, MySQL.",
					storageTagline: "Upload, transform, and deliver files on CDN.",
					functionsTagline: "APIs, cron jobs, and event handlers at scale.",
					messagingTagline: "Email, SMS, and push with topics and targets.",
					sitesTagline: "Static, SSR, and CSR deploys from Git.",
					realtimeName: "Realtime",
					realtimeTagline: "Live events, channels, and presence.",
					agentName: "Agent",
					agentTagline: "Chat to inspect your project and take approved actions.",
					domainsName: "Domains",
					domainsTagline: "Search, buy, transfer, and manage domains.",
					firewallName: "Firewall",
					firewallTagline: "Project rules to deny, rate limit, and redirect traffic.",
					advisorName: "Advisor",
					advisorTagline: "Security and performance insights."
				}
			},
			tools: {
				headingTitle: "Tools built for developers and agents",
				headingDescription: "API-first by design. Use the Console, Realtime, SDKs, CLI, Terraform, MCP, and agent skills on the same project.",
				developerExperienceTitle: "Developer and agent experience",
				developerExperienceFallbackCaption: "A typical integration in TypeScript.",
				everythingApiTitle: "Everything is an API",
				everythingApiDescription: "REST, GraphQL, and SDKs for every service. Automate and integrate without console-only workflows.",
				consoleTitle: "Console",
				consoleDescription: "Manage every service in your project from a unified Console. Optimized keyboard access and a Command Center keep you moving fast.",
				commandCenter: "Command Center",
				realtimeTitle: "Realtime",
				realtimeDescription: "Subscribe to live events and react to changes as they happen.",
				mcpTitle: "MCP",
				mcpDescription: "Connect AI agents to your Appwrite project, APIs, and docs through MCP servers.",
				terraformTitle: "Terraform",
				terraformDescription: "Manage Appwrite infrastructure as code with the official provider.",
				agentSkillsTitle: "Agent skills",
				agentSkillsDescription: "Give AI agents SDK-accurate knowledge of Appwrite services and APIs.",
				sdksTitle: "SDKs",
				sdksDescriptionPrefix: "Client and server SDKs for the platforms your team already uses.",
				sdksDescriptionSuffix: "official SDKs available across client and server runtimes.",
				cliTitle: "CLI",
				cliDescription: "Deploy resources, manage projects, and generate typed SDKs from your terminal."
			}
		}
	}
};
const heCatalog = {
	...enCatalog,
	app: {
		...enCatalog.app,
		header: {
			...enCatalog.app.header,
			centerSearchPlaceholder: "חיפוש בדוקומנטציה...",
			marketingNav: {
				...enCatalog.app.header.marketingNav,
				products: "מוצרים",
				docs: "דוקומנטציה",
				pricing: "מחירים",
				enterprise: "אנטרפרייז",
				customers: "לקוחות",
				blog: "בלוג",
				changelog: "יומן שינויים",
				websiteNavigation: "ניווט האתר",
				changelogNewUpdatesAria: "יומן שינויים, עדכונים חדשים"
			},
			actions: {
				...enCatalog.app.header.actions,
				openNavigation: "פתח ניווט",
				openWebsiteNavigation: "פתח ניווט אתר",
				create: "יצירה",
				connect: "חיבור",
				assistant: "Agent",
				upgrade: "שדרוג",
				signIn: "התחברו",
				signUp: "הירשמו",
				signOut: "התנתקות",
				backToOrganization: "חזרה לארגון"
			},
			createMenu: {
				...enCatalog.app.header.createMenu,
				newProject: "פרויקט חדש",
				newOrganization: "ארגון חדש",
				newAgent: "סוכן חדש",
				buildSection: "בניית המוצר",
				deploySection: "פריסה",
				protectSection: "הגנה",
				newDatabase: "מסד נתונים חדש",
				newUser: "משתמש חדש",
				newBucket: "באקט חדש",
				newFunction: "פונקציה חדשה",
				newMessage: "הודעה חדשה",
				newFirewallRule: "כלל Firewall חדש",
				newSite: "אתר חדש"
			},
			permissions: {
				...enCatalog.app.header.permissions,
				createProjects: "אין לך הרשאה ליצור פרויקטים.",
				createDatabases: "אין לך הרשאה ליצור מסדי נתונים.",
				createUsers: "אין לך הרשאה ליצור משתמשים.",
				createBuckets: "אין לך הרשאה ליצור באקטים.",
				createFunctions: "אין לך הרשאה ליצור פונקציות.",
				createTopics: "אין לך הרשאה ליצור נושאי הודעות.",
				createFirewallRules: "אין לך הרשאה ליצור כללי Firewall.",
				createSites: "אין לך הרשאה ליצור אתרים."
			},
			accountMenu: {
				...enCatalog.app.header.accountMenu,
				user: "משתמש",
				account: "חשבון",
				projects: "פרויקטים",
				domains: "דומיינים",
				memberSince: "חבר מאז",
				accountStatus: "סטטוס חשבון",
				accountId: "מזהה חשבון",
				copyAccountId: "העתק מזהה חשבון",
				copied: "הועתק",
				twoFactor: "אימות דו-שלבי",
				active: "פעיל",
				inactive: "לא פעיל",
				enabled: "מופעל",
				disabled: "כבוי",
				console: "קונסול",
				oldConsole: "קונסול ישן",
				home: "בית",
				docs: "דוקומנטציה",
				changelog: "יומן שינויים",
				admin: "ניהול",
				cache: "Cache",
				blocks: "Blocks",
				generator: "Generator"
			},
			search: {
				...enCatalog.app.header.search,
				compactPlaceholder: "חיפוש..."
			}
		},
		footer: {
			...enCatalog.app.footer,
			groups: {
				...enCatalog.app.footer.groups,
				quickStarts: "התחלות מהירות",
				products: "מוצרים",
				learn: "לימוד",
				programs: "תוכניות",
				about: "אודות",
				compare: "השוואה"
			},
			links: {
				...enCatalog.app.footer.links,
				docs: "דוקומנטציה",
				store: "חנות",
				status: "סטטוס",
				cookieSettings: "הגדרות עוגיות",
				soc2: "תאימות SOC 2 Type II"
			},
			social: {
				...enCatalog.app.footer.social,
				github: "GitHub",
				x: "X",
				youtube: "YouTube",
				linkedIn: "LinkedIn",
				instagram: "Instagram",
				discord: "Discord",
				dailyDevSquad: "daily.dev Squad"
			},
			expanded: {
				...enCatalog.app.footer.expanded,
				quickStarts: {
					...enCatalog.app.footer.expanded.quickStarts,
					web: "ווב",
					tanstackStart: "TanStack Start",
					nextjs: "Next.js",
					react: "React",
					vue: "Vue.js",
					nuxt: "Nuxt",
					svelteKit: "SvelteKit",
					refine: "Refine",
					angular: "Angular",
					reactNative: "React Native",
					flutter: "Flutter",
					apple: "Apple",
					android: "Android",
					qwik: "Qwik",
					astro: "Astro",
					solid: "Solid"
				},
				products: {
					...enCatalog.app.footer.expanded.products,
					auth: "אימות",
					databases: "מסדי נתונים",
					storage: "אחסון",
					functions: "פונקציות",
					messaging: "הודעות",
					realtime: "Realtime",
					agent: "Agent",
					hosting: "אירוח",
					domains: "דומיינים",
					network: "רשת",
					firewall: "Firewall"
				},
				learn: {
					...enCatalog.app.footer.expanded.learn,
					blog: "בלוג",
					docs: "דוקומנטציה",
					integrations: "אינטגרציות",
					community: "קהילה",
					init: "Init",
					threads: "Threads",
					changelog: "יומן שינויים",
					roadmap: "מפת דרכים",
					sourceCode: "קוד מקור",
					arena: "Arena",
					techNews: "חדשות טכנולוגיה"
				},
				programs: {
					...enCatalog.app.footer.expanded.programs,
					startups: "סטארטאפים",
					education: "חינוך",
					partners: "שותפים",
					enterprise: "אנטרפרייז",
					affiliates: "אפיליאייטס"
				},
				about: {
					...enCatalog.app.footer.expanded.about,
					company: "החברה",
					pricing: "מחירים",
					careers: "קריירה",
					contactUs: "צור קשר",
					assets: "נכסים",
					security: "אבטחה"
				},
				compare: {
					...enCatalog.app.footer.expanded.compare,
					vsSupabase: "Appwrite מול Supabase",
					vsFirebase: "Appwrite מול Firebase",
					vsNeon: "Appwrite מול Neon",
					vsVercel: "Appwrite מול Vercel",
					vsNetlify: "Appwrite מול Netlify",
					vsCloudinary: "Appwrite מול Cloudinary",
					vsAuth0: "Appwrite מול Auth0",
					nextjsHosting: "אירוח Next.js",
					reactHosting: "אירוח React",
					vueHosting: "אירוח Vue.js",
					baas: "Backend as a service (BaaS)"
				}
			}
		},
		sidebar: {
			...enCatalog.app.sidebar,
			sections: {
				...enCatalog.app.sidebar.sections,
				connect: "חיבור",
				build: "פיתוח",
				deploy: "פריסה",
				observe: "ניטור",
				protect: "הגנה"
			},
			items: {
				...enCatalog.app.sidebar.items,
				overview: "לוח בקרה",
				apps: "אפליקציות",
				apiKeys: "מפתחות API",
				explorer: "אקספלורר",
				auth: "אימות",
				databases: "מסדי נתונים",
				storage: "אחסון",
				functions: "פונקציות",
				messaging: "הודעות",
				sites: "אתרים",
				distribution: "הפצה",
				activity: "פעילות",
				realtime: "Realtime",
				logs: "לוגים",
				usage: "שימוש",
				analytics: "אנליטיקס",
				errors: "שגיאות",
				firewall: "חומת אש",
				advisor: "יועץ",
				settings: "הגדרות"
			},
			badges: {
				...enCatalog.app.sidebar.badges,
				soon: "בקרוב"
			},
			accessibility: {
				...enCatalog.app.sidebar.accessibility,
				mainNavigation: "ניווט ראשי",
				mobileNavigation: "ניווט בנייד",
				closeNavigation: "סגור ניווט",
				expandSidebar: "הרחב סרגל צד",
				collapseSidebar: "כווץ סרגל צד",
				comingSoonSuffix: "(בקרוב)"
			},
			onboarding: {
				...enCatalog.app.sidebar.onboarding,
				getStarted: "צעדים ראשונים",
				progress: "התקדמות",
				loading: "טוען...",
				of: "מתוך",
				completed: "הושלמו"
			}
		},
		nativeAppBar: {
			...enCatalog.app.nativeAppBar,
			back: "חזרה",
			forward: "קדימה",
			history: "היסטוריה",
			recentPages: "עמודים אחרונים",
			noRecentPages: "אין עמודים אחרונים",
			searchPlaceholder: "חיפוש..."
		},
		consoleBanner: {
			...enCatalog.app.consoleBanner,
			messagePrefix: "הפכו רעיונות למוצרים פעילים. Vibe coding מופעל על ידי",
			dismiss: "הסתר באנר"
		},
		debugMenu: enCatalog.app.debugMenu
	},
	website: {
		...enCatalog.website,
		home: {
			...enCatalog.website.home,
			seoDescription: "Appwrite היא פלטפורמת פיתוח בקוד פתוח עם אימות, מסדי נתונים, אחסון, פונקציות, הודעות ואתרים. לבנות כמו צוות של מאות מפתחים.",
			announcementNew: "Breaking",
			announcementText: "אנחנו נרגשים להכריז על Appwrite 2.0",
			heroTitleLineOne: "לבנות מהר יותר,",
			heroTitleLineTwo: "לצמוח רחוק מאי פעם",
			heroDescription: "Appwrite היא פלטפורמת קוד פתוח לבנייה ולהרחבה מהירה של אפליקציות, עם אימות, מסדי נתונים, אחסון, פונקציות, הודעות, Realtime ואירוח אתרים. הכל במקום אחד.",
			heroPreviewWorkspace: "Appwrite",
			heroPreviewOrganization: "Acme Corp",
			heroPreviewProject: "פרויקט Appwrite ראשון",
			heroImageAlt: "תצוגת הקונסול של Appwrite עם גרפי שימוש, אפליקציות ומפתחות API",
			startProject: "התחילו פרויקט",
			requestDemo: "בקשו דמו",
			toolsHeading: "מותאם לפריימוורקים, לשפות ולסוכני ה-AI שאתם אוהבים",
			aiDocsNavLabel: "דוקומנטציית AI ו-MCP",
			productsHeadingLineOne: "כל השירותים שאתם צריכים",
			productsHeadingLineTwo: "בפלטפורמה אחת",
			productsDescription: "לבנות עם מוצרים מודולריים שמרגישים אחידים, מהאב-טיפוס הראשון ועד לקנה מידה מלא בפרודקשן.",
			securityHeading: "אבטחה מובנית בכל שכבות הארכיטקטורה",
			securityDescription: "עם גישה שמתחילה מאבטחה, Appwrite עוזרת לשמור על המוצר ועל המשתמשים בטוחים כברירת מחדל, ומקלה על עמידה במדיניות מחמירה.",
			aiDocLinks: {
				...enCatalog.website.home.aiDocLinks,
				mcpServers: "שרתי MCP",
				skills: "Appwrite Skills",
				aiArena: "AI Arena"
			},
			securityItems: {
				...enCatalog.website.home.securityItems,
				ddosTitle: "הגנת DDoS",
				ddosDescription: "זיהוי והפחתה אוטומטיים של מתקפות מניעת שירות מבוזרות.",
				encryptionTitle: "הצפנה",
				encryptionDescription: "הצפנת נתונים מובנית עבור עומסי עבודה רגישים במנוחה ובתעבורה.",
				abuseTitle: "הגנה מפני ניצול לרעה",
				abuseDescription: "הגנה על ה-API שלכם מפני ניצול לרעה באמצעות מנגנוני פלטפורמה מובנים.",
				migrationsTitle: "העברת נתונים",
				migrationsDescription: "העברת נתונים מצדדים שלישיים או בין סביבות Cloud ו-Self-hosted.",
				gdprTitle: "GDPR",
				gdprDescription: "תמיכה בתהליכי פרטיות נתונים ובאמצעי הגנה לדרישות GDPR.",
				soc2Title: "SOC 2",
				soc2Description: "עבודה על גבי תשתית שתוכננה לסטנדרטים גבוהים של אבטחה ופרטיות.",
				hipaaTitle: "HIPAA",
				hipaaDescription: "הגנה על נתוני בריאות רגישים עם בקרות מוצר שמבוססות אבטחה.",
				ccpaTitle: "CCPA",
				ccpaDescription: "בנייה עם בקרות שעוזרות להגן על נתונים רגישים של משתמשים."
			},
			productBento: {
				...enCatalog.website.home.productBento,
				authTitle: "אימות",
				databasesTitle: "מסדי נתונים",
				storageTitle: "אחסון",
				functionsTitle: "פונקציות",
				sitesTitle: "אתרים",
				messagingTitle: "הודעות",
				firewallTitle: "חומת אש",
				realtimeTitle: "Realtime",
				authDescription: "אימות מאובטח של משתמשים עם אימייל, SMS, OAuth, סשנים אנונימיים ו-Magic URLs.",
				databasesDescription: "מודלים, שאילתות וסקייל עם מסדי הנתונים של Appwrite או עם PostgreSQL ו-MySQL ייעודיים, כדי להתאים לתרחיש העבודה ולצורכי הצוות.",
				storageDescription: "אחסון קבצים עם דחיסה, הצפנה, המרות תמונה ובקרת גישה.",
				functionsDescription: "פריסת פונקציות Serverless עם סביבות ריצה מבודדות ומאובטחות והפעלה מבוססת אירועים.",
				sitesDescription: "פריסת פרונטאנד סטטי, SSR ו-CSR מ-Git עם תצוגות מקדימות מיידיות ו-Appwrite מאחוריהם.",
				messagingDescription: "שליחת אימייל, SMS והתראות Push דרך שירות הודעות אחוד.",
				firewallDescription: "הגנה על אפליקציות עם כללי תעבורה, בקרות ניצול לרעה ואבטחת קצה לכל פרויקט.",
				realtimeDescription: "הרשמה ותגובה לאירועים ברחבי הפרויקט בזמן אמת.",
				firewallNewLabel: "חדש"
			}
		},
		products: {
			...enCatalog.website.products,
			pageLayout: {
				...enCatalog.website.products.pageLayout,
				startBuilding: "התחילו לבנות",
				viewDocs: "צפו בדוקומנטציה",
				viewPricing: "צפו במחירים"
			},
			productNames: {
				...enCatalog.website.products.productNames,
				auth: "אימות",
				databases: "מסדי נתונים",
				storage: "אחסון",
				functions: "פונקציות",
				messaging: "הודעות",
				sites: "אתרים"
			},
			explore: {
				...enCatalog.website.products.explore,
				title: "גלו את Appwrite",
				description: "שירותי Backend מודולריים שחולקים את אותו פרויקט, מודל הרשאות וקונסול."
			},
			navigation: {
				...enCatalog.website.products.navigation,
				triggerLabel: "מוצרים",
				desktopTitle: "מוצרי הפלטפורמה",
				desktopSubtitle: "לבנות, לפרוס ולהתרחב על פלטפורמת Backend אחת",
				newLabel: "חדש",
				categories: {
					...enCatalog.website.products.navigation.categories,
					build: "פיתוח",
					deploy: "פריסה",
					protect: "הגנה"
				},
				items: {
					...enCatalog.website.products.navigation.items,
					authTagline: "אימייל, OAuth, SMS, אימות דו-שלבי, צוותים וסשנים.",
					databasesTagline: "TablesDB, DocumentsDB, VectorsDB, PostgreSQL, MySQL.",
					storageTagline: "העלאה, עיבוד והגשה של קבצים דרך CDN.",
					functionsTagline: "APIs, משימות Cron ומטפלי אירועים בקנה מידה רחב.",
					messagingTagline: "אימייל, SMS ו-Push עם נושאים ויעדים.",
					sitesTagline: "פריסות סטטיות, SSR ו-CSR מ-Git.",
					realtimeName: "Realtime",
					realtimeTagline: "אירועים חיים, ערוצים ונוכחות.",
					agentName: "Agent",
					agentTagline: "צ׳אט לבדיקת הפרויקט וביצוע פעולות מאושרות.",
					domainsName: "Domains",
					domainsTagline: "חיפוש, רכישה, העברה וניהול דומיינים.",
					firewallName: "חומת אש",
					firewallTagline: "כללי פרויקט לחסימה, הגבלת קצב והפניית תעבורה.",
					advisorName: "יועץ",
					advisorTagline: "תובנות אבטחה וביצועים."
				}
			},
			tools: {
				...enCatalog.website.products.tools,
				headingTitle: "כלים שנבנו למפתחים ולסוכני AI",
				headingDescription: "API-first כברירת מחדל. השתמשו בקונסול, Realtime, SDKs, CLI, Terraform, MCP ו-Agent Skills על אותו פרויקט.",
				developerExperienceTitle: "חוויית מפתחים וסוכני AI",
				developerExperienceFallbackCaption: "אינטגרציה טיפוסית ב-TypeScript.",
				everythingApiTitle: "הכל הוא API",
				everythingApiDescription: "REST, GraphQL ו-SDKs לכל שירות. אוטומציה ואינטגרציה ללא תלות בזרימות של קונסול בלבד.",
				consoleTitle: "קונסול",
				consoleDescription: "ניהול כל השירותים בפרויקט מקונסול אחוד. גישת מקלדת מהירה ו-Command Center שומרים על קצב עבודה גבוה.",
				commandCenter: "Command Center",
				realtimeTitle: "Realtime",
				realtimeDescription: "הרשמה לאירועים חיים ותגובה לשינויים בזמן שהם קורים.",
				mcpTitle: "MCP",
				mcpDescription: "חיבור סוכני AI לפרויקט, ל-APIs ולדוקומנטציה של Appwrite דרך שרתי MCP.",
				terraformTitle: "Terraform",
				terraformDescription: "ניהול תשתיות Appwrite כקוד עם הספק הרשמי.",
				agentSkillsTitle: "Agent Skills",
				agentSkillsDescription: "ספקו לסוכני AI ידע מדויק ל-SDK על שירותי Appwrite וה-APIs.",
				sdksTitle: "SDKs",
				sdksDescriptionPrefix: "SDKs לצד לקוח וצד שרת לפלטפורמות שהצוות שלכם כבר משתמש בהן.",
				sdksDescriptionSuffix: "SDKs רשמיים זמינים בסביבות Client ו-Server.",
				cliTitle: "CLI",
				cliDescription: "פריסה של משאבים, ניהול פרויקטים ויצירת SDKs מוקלדים ישירות מהטרמינל."
			}
		}
	}
};
const jaCatalog = {
	...enCatalog,
	app: {
		...enCatalog.app,
		header: {
			...enCatalog.app.header,
			centerSearchPlaceholder: "ドキュメントを検索...",
			marketingNav: {
				...enCatalog.app.header.marketingNav,
				products: "プロダクト",
				docs: "ドキュメント",
				pricing: "料金",
				enterprise: "Enterprise",
				customers: "導入事例",
				blog: "ブログ",
				changelog: "変更履歴",
				websiteNavigation: "サイトナビゲーション",
				changelogNewUpdatesAria: "変更履歴、新着アップデート"
			},
			actions: {
				...enCatalog.app.header.actions,
				openNavigation: "ナビゲーションを開く",
				openWebsiteNavigation: "サイトナビゲーションを開く",
				create: "作成",
				connect: "接続",
				assistant: "Agent",
				upgrade: "アップグレード",
				signIn: "サインイン",
				signUp: "サインアップ",
				signOut: "サインアウト",
				backToOrganization: "組織に戻る"
			},
			createMenu: {
				...enCatalog.app.header.createMenu,
				newProject: "新規プロジェクト",
				newOrganization: "新規組織",
				newAgent: "新規エージェント",
				buildSection: "構築",
				deploySection: "デプロイ",
				protectSection: "保護",
				newDatabase: "新規データベース",
				newUser: "新規ユーザー",
				newBucket: "新規バケット",
				newFunction: "新規関数",
				newMessage: "新規メッセージ",
				newFirewallRule: "新規 Firewall ルール",
				newSite: "新規サイト"
			},
			permissions: {
				...enCatalog.app.header.permissions,
				createProjects: "プロジェクトを作成する権限がありません。",
				createDatabases: "データベースを作成する権限がありません。",
				createUsers: "ユーザーを作成する権限がありません。",
				createBuckets: "バケットを作成する権限がありません。",
				createFunctions: "関数を作成する権限がありません。",
				createTopics: "メッセージングトピックを作成する権限がありません。",
				createFirewallRules: "ファイアウォールルールを作成する権限がありません。",
				createSites: "サイトを作成する権限がありません。"
			},
			accountMenu: {
				...enCatalog.app.header.accountMenu,
				user: "ユーザー",
				account: "アカウント",
				projects: "プロジェクト",
				domains: "ドメイン",
				memberSince: "登録日",
				accountStatus: "アカウントステータス",
				accountId: "アカウント ID",
				copyAccountId: "アカウント ID をコピー",
				copied: "コピーしました",
				twoFactor: "2FA",
				active: "有効",
				inactive: "無効",
				enabled: "有効",
				disabled: "無効",
				console: "コンソール",
				oldConsole: "旧コンソール",
				home: "ホーム",
				docs: "ドキュメント",
				changelog: "変更履歴",
				admin: "管理",
				cache: "Cache",
				blocks: "Blocks",
				generator: "Generator"
			},
			search: {
				...enCatalog.app.header.search,
				compactPlaceholder: "検索..."
			}
		},
		footer: {
			...enCatalog.app.footer,
			groups: {
				...enCatalog.app.footer.groups,
				quickStarts: "クイックスタート",
				products: "プロダクト",
				learn: "学習",
				programs: "プログラム",
				about: "会社情報",
				compare: "比較"
			},
			links: {
				...enCatalog.app.footer.links,
				docs: "ドキュメント",
				store: "ストア",
				status: "ステータス",
				cookieSettings: "Cookie 設定",
				soc2: "SOC 2 Type II 認証取得"
			},
			social: {
				...enCatalog.app.footer.social,
				github: "GitHub",
				x: "X",
				youtube: "YouTube",
				linkedIn: "LinkedIn",
				instagram: "Instagram",
				discord: "Discord",
				dailyDevSquad: "daily.dev Squad"
			},
			expanded: {
				...enCatalog.app.footer.expanded,
				quickStarts: {
					...enCatalog.app.footer.expanded.quickStarts,
					web: "Web",
					tanstackStart: "TanStack Start",
					nextjs: "Next.js",
					react: "React",
					vue: "Vue.js",
					nuxt: "Nuxt",
					svelteKit: "SvelteKit",
					refine: "Refine",
					angular: "Angular",
					reactNative: "React Native",
					flutter: "Flutter",
					apple: "Apple",
					android: "Android",
					qwik: "Qwik",
					astro: "Astro",
					solid: "Solid"
				},
				products: {
					...enCatalog.app.footer.expanded.products,
					auth: "認証",
					databases: "データベース",
					storage: "ストレージ",
					functions: "Functions",
					messaging: "メッセージング",
					realtime: "Realtime",
					agent: "Agent",
					hosting: "ホスティング",
					domains: "Domains",
					network: "Network",
					firewall: "Firewall"
				},
				learn: {
					...enCatalog.app.footer.expanded.learn,
					blog: "ブログ",
					docs: "ドキュメント",
					integrations: "インテグレーション",
					community: "コミュニティ",
					init: "Init",
					threads: "Threads",
					changelog: "変更履歴",
					roadmap: "ロードマップ",
					sourceCode: "ソースコード",
					arena: "Arena",
					techNews: "テックニュース"
				},
				programs: {
					...enCatalog.app.footer.expanded.programs,
					startups: "スタートアップ",
					education: "教育",
					partners: "パートナー",
					enterprise: "Enterprise",
					affiliates: "アフィリエイト"
				},
				about: {
					...enCatalog.app.footer.expanded.about,
					company: "会社",
					pricing: "料金",
					careers: "採用",
					contactUs: "お問い合わせ",
					assets: "アセット",
					security: "セキュリティ"
				},
				compare: {
					...enCatalog.app.footer.expanded.compare,
					vsSupabase: "Appwrite vs. Supabase",
					vsFirebase: "Appwrite vs. Firebase",
					vsNeon: "Appwrite vs. Neon",
					vsVercel: "Appwrite vs. Vercel",
					vsNetlify: "Appwrite vs. Netlify",
					vsCloudinary: "Appwrite vs. Cloudinary",
					vsAuth0: "Appwrite vs. Auth0",
					nextjsHosting: "Next.js ホスティング",
					reactHosting: "React ホスティング",
					vueHosting: "Vue.js ホスティング",
					baas: "Backend as a service (BaaS)"
				}
			}
		},
		sidebar: {
			...enCatalog.app.sidebar,
			sections: {
				...enCatalog.app.sidebar.sections,
				connect: "接続",
				build: "構築",
				deploy: "デプロイ",
				observe: "監視",
				protect: "保護"
			},
			items: {
				...enCatalog.app.sidebar.items,
				overview: "概要",
				apps: "アプリ",
				apiKeys: "API キー",
				explorer: "Explorer",
				auth: "認証",
				databases: "データベース",
				storage: "ストレージ",
				functions: "Functions",
				messaging: "メッセージング",
				sites: "サイト",
				distribution: "Distribution",
				activity: "アクティビティ",
				realtime: "Realtime",
				logs: "ログ",
				usage: "使用量",
				analytics: "アナリティクス",
				errors: "エラー",
				firewall: "Firewall",
				advisor: "Advisor",
				settings: "設定"
			},
			badges: {
				...enCatalog.app.sidebar.badges,
				soon: "近日公開"
			},
			accessibility: {
				...enCatalog.app.sidebar.accessibility,
				mainNavigation: "メインナビゲーション",
				mobileNavigation: "モバイルナビゲーション",
				closeNavigation: "ナビゲーションを閉じる",
				expandSidebar: "サイドバーを展開",
				collapseSidebar: "サイドバーを折りたたむ",
				comingSoonSuffix: "(近日公開)"
			},
			onboarding: {
				...enCatalog.app.sidebar.onboarding,
				getStarted: "はじめる",
				progress: "進捗",
				loading: "読み込み中...",
				of: "/",
				completed: "完了"
			}
		},
		nativeAppBar: {
			...enCatalog.app.nativeAppBar,
			back: "戻る",
			forward: "進む",
			history: "履歴",
			recentPages: "最近のページ",
			noRecentPages: "最近のページはありません",
			searchPlaceholder: "検索..."
		},
		consoleBanner: {
			...enCatalog.app.consoleBanner,
			messagePrefix: "アイデアを動くプロダクトに。Vibe coding powered by",
			dismiss: "バナーを閉じる"
		},
		debugMenu: enCatalog.app.debugMenu
	},
	website: {
		...enCatalog.website,
		home: {
			...enCatalog.website.home,
			seoDescription: "Appwrite は、認証、データベース、ストレージ、Functions、メッセージング、サイトを備えたオープンソースの開発者向けプラットフォームです。数百人規模のチームのように構築できます。",
			announcementNew: "Breaking",
			announcementText: "Appwrite 2.0 の発表を嬉しく思います",
			heroTitleLineOne: "より速く構築し、",
			heroTitleLineTwo: "これまで以上にスケール",
			heroDescription: "Appwrite は、認証、データベース、ストレージ、Functions、メッセージング、Realtime、Web ホスティングを備えたオープンソースプラットフォームです。すべてが一つの場所に。",
			heroPreviewWorkspace: "Appwrite",
			heroPreviewOrganization: "Acme Corp",
			heroPreviewProject: "最初の Appwrite プロジェクト",
			heroImageAlt: "使用量グラフ、アプリ、API キーを表示する Appwrite コンソールの概要",
			startProject: "プロジェクトを開始",
			requestDemo: "デモを依頼",
			toolsHeading: "お気に入りのフレームワーク、言語、エージェント向けに最適化",
			aiDocsNavLabel: "AI と MCP ドキュメント",
			productsHeadingLineOne: "必要なサービスをすべて",
			productsHeadingLineTwo: "一つのプラットフォームに",
			productsDescription: "最初のプロトタイプから本番スケールまで、統一感のあるモジュラープロダクトで構築できます。",
			securityHeading: "アーキテクチャのすべてのレイヤーに組み込まれたセキュリティ",
			securityDescription: "セキュリティファーストのアプローチにより、Appwrite はプロダクトとユーザーをデフォルトで安全に保ち、厳格なポリシーへの準拠を容易にします。",
			aiDocLinks: {
				...enCatalog.website.home.aiDocLinks,
				mcpServers: "MCP サーバー",
				skills: "Appwrite Skills",
				aiArena: "AI Arena"
			},
			securityItems: {
				...enCatalog.website.home.securityItems,
				ddosTitle: "DDoS 保護",
				ddosDescription: "分散型サービス拒否攻撃を自動的に検出し、軽減します。",
				encryptionTitle: "暗号化",
				encryptionDescription: "保存時および転送時の機密ワークロード向けに、組み込みのデータ暗号化を提供します。",
				abuseTitle: "不正利用の防止",
				abuseDescription: "組み込みのプラットフォーム保護機能で API を不正利用から守ります。",
				migrationsTitle: "データ移行",
				migrationsDescription: "サードパーティから、または Cloud とセルフホスト環境間でデータを移行します。",
				gdprTitle: "GDPR",
				gdprDescription: "GDPR 要件に対応するデータプライバシーのワークフローと保護機能をサポートします。",
				soc2Title: "SOC 2",
				soc2Description: "高いセキュリティとプライバシー基準向けに設計されたインフラストラクチャ上で運用できます。",
				hipaaTitle: "HIPAA",
				hipaaDescription: "セキュリティファーストのプロダクトコントロールで機密の健康データを保護します。",
				ccpaTitle: "CCPA",
				ccpaDescription: "機密性の高いユーザーデータを保護するためのコントロールで構築できます。"
			},
			productBento: {
				...enCatalog.website.home.productBento,
				authTitle: "認証",
				databasesTitle: "データベース",
				storageTitle: "ストレージ",
				functionsTitle: "Functions",
				sitesTitle: "サイト",
				messagingTitle: "メッセージング",
				firewallTitle: "Firewall",
				realtimeTitle: "Realtime",
				authDescription: "メール、SMS、OAuth、匿名セッション、Magic URL でユーザーを安全に認証します。",
				databasesDescription: "Appwrite データベース、またはネイティブ PostgreSQL と MySQL でモデル化、クエリ、スケールし、ユースケースとチームのニーズに合わせられます。",
				storageDescription: "圧縮、暗号化、画像変換、アクセス制御でファイルを保存します。",
				functionsDescription: "安全な分離ランタイムとイベント駆動の実行で Serverless 関数をデプロイします。",
				sitesDescription: "Git から静的、SSR、CSR フロントエンドをデプロイし、即時プレビューと Appwrite を組み合わせられます。",
				messagingDescription: "統合メッセージングサービスでメール、SMS、プッシュ通知を送信します。",
				firewallDescription: "トラフィックルール、不正利用コントロール、エッジセキュリティでアプリを保護します。",
				realtimeDescription: "プロジェクト全体のイベントをリアルタイムで購読し、反応できます。",
				firewallNewLabel: "新着"
			}
		},
		products: {
			...enCatalog.website.products,
			pageLayout: {
				...enCatalog.website.products.pageLayout,
				startBuilding: "構築を開始",
				viewDocs: "ドキュメントを見る",
				viewPricing: "料金を見る"
			},
			productNames: {
				...enCatalog.website.products.productNames,
				auth: "認証",
				databases: "データベース",
				storage: "ストレージ",
				functions: "Functions",
				messaging: "メッセージング",
				sites: "サイト"
			},
			explore: {
				...enCatalog.website.products.explore,
				title: "Appwrite を探索",
				description: "同じプロジェクト、権限モデル、コンソールを共有するモジュラー Backend サービス。"
			},
			navigation: {
				...enCatalog.website.products.navigation,
				triggerLabel: "プロダクト",
				desktopTitle: "プラットフォームプロダクト",
				desktopSubtitle: "一つの Backend プラットフォームで構築、デプロイ、スケール",
				newLabel: "新着",
				categories: {
					...enCatalog.website.products.navigation.categories,
					build: "構築",
					deploy: "デプロイ",
					protect: "保護"
				},
				items: {
					...enCatalog.website.products.navigation.items,
					authTagline: "メール、OAuth、SMS、MFA、チーム、セッション。",
					databasesTagline: "TablesDB, DocumentsDB, VectorsDB, PostgreSQL, MySQL.",
					storageTagline: "CDN でファイルをアップロード、変換、配信。",
					functionsTagline: "大規模な API、Cron ジョブ、イベントハンドラー。",
					messagingTagline: "トピックとターゲットでメール、SMS、プッシュ。",
					sitesTagline: "Git から静的、SSR、CSR デプロイ。",
					realtimeName: "Realtime",
					realtimeTagline: "ライブイベント、チャンネル、プレゼンス。",
					agentName: "Agent",
					agentTagline: "チャットでプロジェクトを確認し、承認済みの操作を実行。",
					domainsName: "Domains",
					domainsTagline: "ドメインの検索、購入、移管、管理。",
					firewallName: "Firewall",
					firewallTagline: "プロジェクトルールで拒否、レート制限、リダイレクト。",
					advisorName: "Advisor",
					advisorTagline: "セキュリティとパフォーマンスのインサイト。"
				}
			},
			tools: {
				...enCatalog.website.products.tools,
				headingTitle: "開発者とエージェント向けに構築されたツール",
				headingDescription: "API ファースト設計。同じプロジェクトでコンソール、Realtime、SDK、CLI、Terraform、MCP、エージェントスキルを利用できます。",
				developerExperienceTitle: "開発者とエージェントの体験",
				developerExperienceFallbackCaption: "TypeScript での典型的なインテグレーション。",
				everythingApiTitle: "すべてが API",
				everythingApiDescription: "すべてのサービス向け REST、GraphQL、SDK。コンソール専用ワークフローに依存せず自動化と統合が可能。",
				consoleTitle: "コンソール",
				consoleDescription: "統合コンソールからプロジェクト内のすべてのサービスを管理。最適化されたキーボード操作と Command Center で作業を高速化。",
				commandCenter: "Command Center",
				realtimeTitle: "Realtime",
				realtimeDescription: "ライブイベントを購読し、変更が起きた瞬間に反応できます。",
				mcpTitle: "MCP",
				mcpDescription: "MCP サーバー経由で AI エージェントを Appwrite プロジェクト、API、ドキュメントに接続。",
				terraformTitle: "Terraform",
				terraformDescription: "公式プロバイダーで Appwrite インフラストラクチャをコードとして管理。",
				agentSkillsTitle: "Agent Skills",
				agentSkillsDescription: "Appwrite サービスと API について SDK 精度の知識を AI エージェントに提供。",
				sdksTitle: "SDKs",
				sdksDescriptionPrefix: "チームがすでに使用しているプラットフォーム向けのクライアントおよびサーバー SDK。",
				sdksDescriptionSuffix: "公式 SDK はクライアントおよびサーバーランタイムで利用可能。",
				cliTitle: "CLI",
				cliDescription: "ターミナルからリソースをデプロイし、プロジェクトを管理し、型付き SDK を生成。"
			}
		}
	}
};
const bsCatalog = {"app":{"header":{"centerSearchPlaceholder":"Pretraži dokumentaciju...","marketingNav":{"products":"Proizvodi","docs":"Dokumentacija","pricing":"Cijene","enterprise":"Enterprise","customers":"Korisnici","blog":"Blog","changelog":"Dnevnik promjena","websiteNavigation":"Navigacija stranice","changelogNewUpdatesAria":"Dnevnik promjena, nova ažuriranja"},"actions":{"openNavigation":"Otvori navigaciju","openWebsiteNavigation":"Otvori navigaciju stranice","create":"Kreiraj","connect":"Poveži","assistant":"Agent","upgrade":"Nadogradi","signIn":"Prijavi se","signUp":"Registruj se","signOut":"Odjavi se","backToOrganization":"Nazad na organizaciju"},"createMenu":{"newProject":"Novi projekat","newOrganization":"Nova organizacija","newAgent":"Novi agent","buildSection":"Izrada","deploySection":"Postavljanje","protectSection":"Zaštita","newDatabase":"Nova baza podataka","newUser":"Novi korisnik","newBucket":"Novi bucket","newFunction":"Nova funkcija","newMessage":"Nova poruka","newFirewallRule":"Novo firewall pravilo","newSite":"Nova stranica"},"permissions":{"createProjects":"Nemate dozvolu za kreiranje projekata.","createDatabases":"Nemate dozvolu za kreiranje baza podataka.","createUsers":"Nemate dozvolu za kreiranje korisnika.","createBuckets":"Nemate dozvolu za kreiranje bucketa.","createFunctions":"Nemate dozvolu za kreiranje funkcija.","createTopics":"Nemate dozvolu za kreiranje messaging tema.","createFirewallRules":"Nemate dozvolu za kreiranje firewall pravila.","createSites":"Nemate dozvolu za kreiranje stranica."},"accountMenu":{"user":"Korisnik","account":"Račun","projects":"Projekti","domains":"Domene","memberSince":"Član od","accountStatus":"Status računa","accountId":"ID računa","copyAccountId":"Kopiraj ID računa","copied":"Kopirano!","twoFactor":"2FA","active":"Aktivan","inactive":"Neaktivan","enabled":"Omogućeno","disabled":"Onemogućeno","console":"Konzola","oldConsole":"Stara konzola","home":"Početna","docs":"Dokumentacija","changelog":"Dnevnik promjena","admin":"Admin","cache":"Keš","blocks":"Blokovi","generator":"Generator"},"search":{"compactPlaceholder":"Pretraži..."}},"footer":{"groups":{"quickStarts":"Brzi početak","products":"Proizvodi","learn":"Uči","programs":"Programi","about":"O nama","compare":"Uporedi"},"links":{"docs":"Dokumentacija","store":"Prodavnica","status":"Status","cookieSettings":"Postavke kolačića","soc2":"SOC 2 Type II Certifikovano","copyrightBrand":"Appwrite"},"social":{"github":"GitHub","x":"X","youtube":"YouTube","linkedIn":"LinkedIn","instagram":"Instagram","discord":"Discord","dailyDevSquad":"daily.dev Squad"},"expanded":{"quickStarts":{"web":"Web","tanstackStart":"TanStack Start","nextjs":"Next.js","react":"React","vue":"Vue.js","nuxt":"Nuxt","svelteKit":"SvelteKit","refine":"Refine","angular":"Angular","reactNative":"React Native","flutter":"Flutter","apple":"Apple","android":"Android","qwik":"Qwik","astro":"Astro","solid":"Solid"},"products":{"auth":"Autentifikacija","databases":"Baze podataka","storage":"Pohrana","functions":"Funkcije","messaging":"Poruke","realtime":"Realno vrijeme","agent":"Agent","hosting":"Hosting","domains":"Domene","network":"Mreža","firewall":"Firewall"},"learn":{"blog":"Blog","docs":"Dokumentacija","integrations":"Integracije","community":"Zajednica","init":"Init","threads":"Teme","changelog":"Dnevnik promjena","roadmap":"Plan razvoja","sourceCode":"Izvorni kod","arena":"Arena","techNews":"Tehnološke vijesti"},"programs":{"startups":"Startapi","education":"Edukacija","partners":"Partneri","enterprise":"Enterprise","affiliates":"Partneri / Afiliti"},"about":{"company":"Kompanija","pricing":"Cijene","careers":"Karijere","contactUs":"Kontaktirajte nas","assets":"Materijali brenda","security":"Sigurnost"},"compare":{"vsSupabase":"Appwrite vs. Supabase","vsFirebase":"Appwrite vs. Firebase","vsNeon":"Appwrite vs. Neon","vsVercel":"Appwrite vs. Vercel","vsNetlify":"Appwrite vs. Netlify","vsCloudinary":"Appwrite vs. Cloudinary","vsAuth0":"Appwrite vs. Auth0","nextjsHosting":"Next.js hosting","reactHosting":"React hosting","vueHosting":"Vue.js hosting","baas":"Backend kao servis (BaaS)"}}},"sidebar":{"sections":{"connect":"Povezivanje","build":"Izrada","deploy":"Postavljanje","observe":"Praćenje","protect":"Zaštita"},"items":{"overview":"Pregled","apps":"Aplikacije","apiKeys":"API ključevi","explorer":"Explorer","auth":"Autentifikacija","databases":"Baze podataka","storage":"Pohrana","functions":"Funkcije","messaging":"Poruke","sites":"Web stranice","distribution":"Distribucija","activity":"Aktivnost","realtime":"Realno vrijeme","logs":"Zapisnici","usage":"Potrošnja","analytics":"Analitika","errors":"Greške","firewall":"Firewall","advisor":"Savjetnik","settings":"Postavke"},"badges":{"soon":"Uskoro"},"accessibility":{"mainNavigation":"Glavna navigacija","mobileNavigation":"Mobilna navigacija","closeNavigation":"Zatvori navigaciju","expandSidebar":"Proširi bočnu traku","collapseSidebar":"Skupi bočnu traku","comingSoonSuffix":"(Uskoro)"},"onboarding":{"getStarted":"Započni","progress":"Napredak","loading":"Učitavanje...","of":"od","completed":"završeno"}},"nativeAppBar":{"back":"Nazad","forward":"Naprijed","history":"Historija","recentPages":"Nedavne stranice","noRecentPages":"Nema nedavnih stranica","searchPlaceholder":"Pretraži..."},"consoleBanner":{"imagineAlt":"Imagine","messagePrefix":"Pretvorite vaše ideje u funkcionalne proizvode. Vibe kodiranje pokreće","dismiss":"Zatvori obavijest"},"debugMenu":{"language":{"label":"Jezik","englishLabel":"Engleski","englishDescription":"Koristi engleski jezik.","hebrewLabel":"Hebrejski","hebrewDescription":"Koristi hebrejski jezik i RTL smjer.","japaneseLabel":"Japanski","japaneseDescription":"Koristi japanski jezik.","bosnianLabel":"Bosanski","bosnianDescription":"Koristi bosanski jezik.","activeEnglish":"Engleski","activeHebrew":"Hebrejski (RTL)","activeJapanese":"Japanski","activeBosnian":"Bosanski"}}},"website":{"home":{"seoDescription":"Platforma otvorenog koda za programere sa Autentifikacijom, Bazama podataka, Pohranom, Funkcijama, Porukama i Stranicama. Gradite kao tim od stotinu ljudi.","announcementNew":"Novo","announcementText":"S ponosom najavljujemo verziju 2.0","heroTitleLineOne":"Gradite brže i skalirajte","heroTitleLineTwo":"veće nego ikada","heroDescription":"Platforma otvorenog koda za bržu izradu i skaliranje aplikacija, nudeći Autentifikaciju, Baze podataka, Pohranu, Funkcije, Poruke, Realtime i web hosting. Sve na jednom mjestu.","heroPreviewWorkspace":"Appwrite","heroPreviewOrganization":"Moja Organizacija","heroPreviewProject":"Prvi projekat","heroImageAlt":"Pregled konzole sa grafikonima potrošnje, aplikacijama i API ključevima","startProject":"Započni projekat","requestDemo":"Zatraži demo","toolsHeading":"Optimizovano za razvojne okvire, jezike i agente koje volite","aiDocsNavLabel":"AI i MCP dokumentacija","productsHeadingLineOne":"Sve usluge koje trebate","productsHeadingLineTwo":"na jednoj platformi","productsDescription":"Gradite modularnim proizvodima koji djeluju objedinjeno od prvog prototipa do produkcijskog mjerila.","securityHeading":"Ugrađena sigurnost na svakom nivou arhitekture","securityDescription":"Uz pristup koji na prvo mjesto stavlja sigurnost, platforma pomaže u zaštiti proizvoda i korisnika po zadanom, olakšavajući pridržavanje strogih sigurnosnih pravila.","aiDocLinks":{"mcpServers":"MCP serveri","skills":"Vještine","aiArena":"AI Arena"},"frameworkTools":{"react":"React","tanstackStart":"TanStack Start","nextjs":"Next.js","vue":"Vue","sveltekit":"SvelteKit","android":"Android","ios":"iOS","flutter":"Flutter","claude":"Claude","chatgpt":"ChatGPT","cursor":"Cursor","lovable":"Lovable","opencode":"OpenCode","bun":"Bun"},"productBento":{"authTitle":"Autentifikacija","databasesTitle":"Baze podataka","storageTitle":"Pohrana","functionsTitle":"Funkcije","sitesTitle":"Stranice","messagingTitle":"Poruke","firewallTitle":"Firewall","realtimeTitle":"Realno vrijeme","authDescription":"Sigurno autentifikujte korisnike putem emaila, SMS-a, OAuth-a, anonimnih sesija i magic URL-ova.","databasesDescription":"Modelirajte, pretražujte i skalirajte uz baze podataka ili nativni PostgreSQL i MySQL, kako bi odgovarali vašem slučaju i potrebama tima.","storageDescription":"Pohranjujte datoteke uz kompresiju, enkripciju, transformacije slika i kontrolu pristupa.","functionsDescription":"Postavite serverless funkcije uz sigurna izolovana okruženja i izvršavanje vođeno događajima.","sitesDescription":"Postavite statičke, SSR i CSR frontende iz Git-a uz trenutne preglede.","messagingDescription":"Šaljite email, SMS i push notifikacije kroz jedinstvenu uslugu slanja poruka.","firewallDescription":"Zaštitite aplikacije pravilima prometa, kontrolom zloupotrebe i edge sigurnošću za svaki projekat.","realtimeDescription":"Pretplatite se i reagujte na događaje širom vašeg projekta u trenutku kada se dese.","firewallNewLabel":"Novo"},"securityItems":{"ddosTitle":"DDoS zaštita","ddosDescription":"Automatski detektujte i ublažite napade uskraćivanja usluge (DDoS).","encryptionTitle":"Enkripcija","encryptionDescription":"Ugrađena enkripcija podataka za osjetljiva opterećenja u mirovanju i u prijenosu.","abuseTitle":"Zaštita od zloupotrebe","abuseDescription":"Zaštitite svoje API-je od zloupotrebe uz ugrađene zaštitne mehanizme platforme.","migrationsTitle":"Migracije podataka","migrationsDescription":"Prenesite podatke od trećih strana ili između Cloud i self-hosted okruženja.","gdprTitle":"GDPR","gdprDescription":"Podržite tokove privatnosti podataka i zaštitne mjere za GDPR zahtjeve.","soc2Title":"SOC 2","soc2Description":"Radite na infrastrukturi dizajniranoj za visoke standarde sigurnosti i privatnosti.","hipaaTitle":"HIPAA","hipaaDescription":"Zaštitite osjetljive zdravstvene podatke kontrolama proizvoda koje stavljaju sigurnost na prvo mjesto.","ccpaTitle":"CCPA","ccpaDescription":"Gradite uz kontrole koje pomažu u zaštiti osjetljivih korisničkih podataka."}},"products":{"pageLayout":{"startBuilding":"Započni izradu","viewDocs":"Pogledaj dokumentaciju","viewPricing":"Pogledaj cijene"},"productNames":{"auth":"Autentifikacija","databases":"Baze podataka","storage":"Pohrana","functions":"Funkcije","messaging":"Poruke","sites":"Stranice","firewall":"Firewall"},"explore":{"title":"Istražite mogućnosti","description":"Modularne backend usluge koje dijele isti projekat, model dozvola i konzolu."},"navigation":{"triggerLabel":"Proizvodi","desktopTitle":"Proizvodi platforme","desktopSubtitle":"Gradite, postavljajte i skalirajte na jednoj backend platformi","newLabel":"Novo","categories":{"build":"Izrada","deploy":"Postavljanje","protect":"Zaštita"},"items":{"authTagline":"Email, OAuth, SMS, MFA, timovi i sesije.","databasesTagline":"TablesDB, DocumentsDB, VectorsDB, PostgreSQL, MySQL.","storageTagline":"Prenosite, transformišite i isporučujte datoteke preko CDN-a.","functionsTagline":"API-ji, cron poslovi i obrada događaja na velikoj skali.","messagingTagline":"Email, SMS i push sa temama i ciljevima.","sitesTagline":"Statičko, SSR i CSR postavljanje iz Git-a.","realtimeName":"Realno vrijeme","realtimeTagline":"Događaji uživo, kanali i prisutnost.","agentName":"Agent","agentTagline":"Razgovarajte za pregled vašeg projekta i preduzimanje odobrenih akcija.","domainsName":"Domene","domainsTagline":"Pretražujte, kupujte, prenosite i upravljajte domenama.","firewallName":"Firewall","firewallTagline":"Pravila projekta za zabranu, ograničavanje brzine i preusmjeravanje prometa.","advisorName":"Savjetnik","advisorTagline":"Uvidi u sigurnost i performanse."}},"tools":{"headingTitle":"Alati kreirani za programere i agente","headingDescription":"API-first po dizajnu. Koristite Konzolu, Realtime, SDK-ove, CLI, Terraform, MCP i agent vještine na istom projektu.","developerExperienceTitle":"Iskustvo programera i agenata","developerExperienceFallbackCaption":"Tipična integracija u TypeScript-u.","everythingApiTitle":"Sve je API","everythingApiDescription":"REST, GraphQL i SDK-ovi za svaku uslugu. Automatizujte i integrišite bez tokova ograničenih samo na konzolu.","consoleTitle":"Konzola","consoleDescription":"Upravljajte svakom uslugom u vašem projektu iz jedinstvene Konzole. Optimizovan pristup tastaturom i Command Center omogućavaju vam brz rad.","commandCenter":"Command Center","realtimeTitle":"Realno vrijeme","realtimeDescription":"Pretplatite se na događaje uživo i reagujte na promjene u trenutku kada se dese.","mcpTitle":"MCP","mcpDescription":"Povežite AI agente sa vašim projektom, API-jima i dokumentacijom putem MCP servera.","terraformTitle":"Terraform","terraformDescription":"Upravljajte infrastrukturom kao kodom uz zvanični provajder.","agentSkillsTitle":"Vještine agenta","agentSkillsDescription":"Omogućite AI agentima precizno poznavanje usluga i API-ja usklađeno sa SDK-om.","sdksTitle":"SDK-ovi","sdksDescriptionPrefix":"Klijentski i serverski SDK-ovi za platforme koje vaš tim već koristi.","sdksDescriptionSuffix":"zvaničnih SDK-ova dostupnih za klijentska i serverska okruženja.","cliTitle":"CLI","cliDescription":"Postavljajte resurse, upravljajte projektima i generišite tipizirane SDK-ove direktno iz terminala."}}}};
function resolveLanguagePreference(preference) {
	if (preference === "en" || preference === "he" || preference === "ja" || preference === "bs") return preference;
	return "bs";
}
function getActiveLanguage() {
	return resolveLanguagePreference(loadDebugOverrides().language);
}
var LANGUAGE_CATALOGS = {
	en: enCatalog,
	he: heCatalog,
	ja: jaCatalog,
	bs: bsCatalog
};
var I18nContext = createContext({
	language: "en",
	languagePreference: "en",
	catalog: enCatalog
});
function I18nProvider({ children }) {
	const { language: languagePreference } = useDebugOverrides();
	const language = resolveLanguagePreference(languagePreference);
	const catalog = LANGUAGE_CATALOGS[language];
	useEffect(() => {
		if (typeof document === "undefined") return;
		document.documentElement.lang = language;
	}, [language]);
	const value = useMemo(() => ({
		language,
		languagePreference,
		catalog
	}), [
		language,
		languagePreference,
		catalog
	]);
	return /* @__PURE__ */ jsx(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	return useContext(I18nContext);
}
function getEnglishCatalog() {
	return enCatalog;
}
export { getInitMockDayBannerExpired as A, resolveUserOs as C, formatInitMockCurrentDay as D, INIT_ORG_PROMO_BANNER_DAYS_AFTER_EVENT as E, getInitMockCurrentDayMax as O, resolvePreferredOsTabId as S, INIT_MOCK_DAY_BEFORE as T, matchTabToUserOs as _, FEATURE_FLAGS_MENU_DEBUG_DEFAULTS as a, orderTabsByPreferredOs as b, resetFeatureFlagsMenuDebugOverride as c, subscribeToDebugOverrides as d, useDebugOverrides as f, isMacOs as g, getUserOsLabel as h, getActiveLanguage as i, getInitMockDayAfter as k, resetFeatureFlagsMenuDebugOverrides as l, detectUserOs as m, getEnglishCatalog as n, areUsageBreakdownQueriesEnabled as o, USER_OS_LABELS as p, useI18n as r, loadDebugOverrides as s, I18nProvider as t, setDebugOverride as u, orderCliShellTabs as v, INIT_LAUNCH_WEEK_DAY_COUNT as w, resolveDefaultCliShellTab as x, orderOsOptions as y };
