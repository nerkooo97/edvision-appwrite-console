import { t as cn } from "./utils-DoqqkI3X.js";
import { a as SERVICE_LABELS, d as isReferenceService, f as isReferenceVersion, h as REFERENCE_VERSIONS, l as getSpecMode, n as PLATFORM_LABELS, r as REFERENCE_PLATFORMS, s as getReferenceOpenApiSpecDownloadFilename, u as isReferencePlatform } from "./constants-Dd6QzW31.js";
import { Bi as mergeApiReferenceUiPrefsIntoAccountPrefs, D as syncConsoleAccountAfterMutation, Hi as readApiReferenceUiPrefsFromLocalStorage, O as updateAccountPrefs, Ri as getApiReferencePlatformForMode, Ui as resolveApiReferenceUiPrefs, Vi as parseApiReferenceUiPrefs, Wi as writeApiReferenceUiPrefsToLocalStorage, zi as mergeApiReferenceUiPrefs } from "./auth-BPuxYQAc.js";
import { c as compareServices, d as getServiceLabel, m as isDatabaseApiServiceVisible } from "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { c as SelectValue, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { a as SheetHeader, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-CbM5lIV1.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { n as DOCS_SECTION_HEADER_CLASS, r as docsSidebarNavLinkClassName, t as DOCS_NAV_SCROLL_CLASS } from "./nav-styles-BnkuEWRE.js";
import { t as CloudMarkIcon } from "./CloudMarkIcon-ChnstmGW.js";
import { i as loadReferenceOpenApiSpecFn, r as loadReferenceNavServiceCountsFn } from "./api-reference-DWWHtdM8.js";
import { n as ApiExplorerPlatformToggle } from "./api-explorer-B4YxdhBU.js";
import { c as REFERENCE_SECTION_SUBNAV_DESKTOP_CLASS } from "./explorer-styles-Diz32kko.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowUpDown, CheckIcon, ChevronLeft, Download, Loader2, Menu, Tags } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
const API_REFERENCE_NAV_SERVICE_ORDER = [
	"account",
	"users",
	"teams",
	"databases",
	"tablesDB",
	"documentsDB",
	"vectorsDB",
	"postgresql",
	"mysql",
	"mongo",
	"sites",
	"storage",
	"functions",
	"messaging",
	"tokens",
	"locale",
	"avatars",
	"presences",
	"project"
];
const API_REFERENCE_PRODUCT_GROUPS = [
	{
		id: "auth",
		label: "Auth",
		services: [
			"account",
			"users",
			"teams",
			"presences"
		]
	},
	{
		id: "databases",
		label: "Databases",
		services: [
			"databases",
			"tablesDB",
			"documentsDB",
			"vectorsDB",
			"postgresql",
			"mysql",
			"mongo"
		]
	},
	{
		id: "sites",
		label: "Sites",
		services: ["sites"]
	},
	{
		id: "storage",
		label: "Storage",
		services: ["storage", "tokens"]
	},
	{
		id: "functions",
		label: "Functions",
		services: ["functions"]
	},
	{
		id: "messaging",
		label: "Messaging",
		services: ["messaging"]
	},
	{
		id: "platform",
		label: "Platform",
		services: ["project"]
	},
	{
		id: "utilities",
		label: "Utilities",
		services: ["locale", "avatars"]
	}
];
var SERVICE_PATH_PATTERN = /^\/docs\/references\/([^/]+)\/(client-[^/]+|server-[^/]+)\/([^/]+)$/;
function parseApiReferencePath(pathname) {
	const normalized = pathname.replace(/\/+$/, "") || "/";
	const serviceMatch = normalized.match(SERVICE_PATH_PATTERN);
	if (serviceMatch) {
		const [, version, platform, service] = serviceMatch;
		if (!isReferenceVersion(version) || !isReferencePlatform(platform) || !isReferenceService(service)) return null;
		return {
			version,
			platform,
			service
		};
	}
	const modelMatch = normalized.match(/^\/docs\/references\/([^/]+)\/models\/[^/]+$/);
	if (modelMatch) {
		const version = modelMatch[1];
		if (!isReferenceVersion(version)) return null;
		return { version };
	}
	if (normalized === "/docs/references" || normalized.startsWith("/docs/references/")) {
		const versionMatch = normalized.match(/^\/docs\/references\/([^/]+)(?:\/|$)/);
		return { version: versionMatch && isReferenceVersion(versionMatch[1]) ? versionMatch[1] : "cloud" };
	}
	return null;
}
function resolveReferenceVersionFromPath(pathname) {
	return parseApiReferencePath(pathname)?.version ?? "cloud";
}
function buildReferenceServiceHref(version, platform, service) {
	return `/docs/references/${version}/${platform}/${service}`;
}
function toReferenceNavService(version, platform, serviceId, serviceCounts) {
	return {
		id: serviceId,
		label: SERVICE_LABELS[serviceId] ?? getServiceLabel(serviceId),
		methodCount: serviceCounts.get(serviceId) ?? 0,
		href: buildReferenceServiceHref(version, platform, serviceId)
	};
}
function buildReferenceNavServices(version, platform, serviceCounts, features) {
	const services = [];
	const assigned = /* @__PURE__ */ new Set();
	for (const serviceId of API_REFERENCE_NAV_SERVICE_ORDER) {
		if (!serviceCounts.has(serviceId)) continue;
		if (!isDatabaseApiServiceVisible(serviceId, features)) continue;
		assigned.add(serviceId);
		services.push(toReferenceNavService(version, platform, serviceId, serviceCounts));
	}
	const remaining = Array.from(serviceCounts.keys()).filter((serviceId) => {
		return isReferenceService(serviceId) && !assigned.has(serviceId) && isDatabaseApiServiceVisible(serviceId, features);
	}).sort(compareServices).map((serviceId) => toReferenceNavService(version, platform, serviceId, serviceCounts));
	return [...services, ...remaining];
}
function buildReferenceNavProductGroups(version, platform, serviceCounts, features) {
	const allServices = buildReferenceNavServices(version, platform, serviceCounts, features);
	const serviceById = new Map(allServices.map((service) => [service.id, service]));
	const assigned = /* @__PURE__ */ new Set();
	const groups = [];
	for (const group of API_REFERENCE_PRODUCT_GROUPS) {
		const services = [];
		for (const serviceId of group.services) {
			const service = serviceById.get(serviceId);
			if (!service) continue;
			assigned.add(serviceId);
			services.push(service);
		}
		if (services.length > 0) groups.push({
			id: group.id,
			label: group.label,
			services
		});
	}
	const remaining = allServices.filter((service) => !assigned.has(service.id));
	if (remaining.length > 0) groups.push({
		id: "other",
		label: "Other",
		services: remaining
	});
	return groups;
}
function findReferenceNavProductGroupForService(groups, serviceId) {
	if (!serviceId) return void 0;
	return groups.find((group) => group.services.some((service) => service.id === serviceId));
}
function findFirstReferenceNavService(services) {
	return services[0];
}
var API_REFERENCE_UI_PREFS_PERSIST_DEBOUNCE_MS = 300;
var ApiReferenceUiPrefsContext = createContext(null);
function ApiReferenceUiPrefsProvider({ children }) {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const [prefs, setPrefs] = useState(() => resolveApiReferenceUiPrefs(void 0));
	const prefsRef = useRef(prefs);
	const persistTimerRef = useRef(null);
	const pendingPrefsRef = useRef(null);
	const migratedFromLocalStorageRef = useRef(false);
	useEffect(() => {
		prefsRef.current = prefs;
	}, [prefs]);
	useEffect(() => {
		setPrefs(resolveApiReferenceUiPrefs(account?.prefs));
	}, [account?.prefs]);
	const updateMutation = useMutation({
		mutationFn: async (value$1) => {
			if (!account) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeApiReferenceUiPrefsIntoAccountPrefs(account.prefs ?? {}, value$1));
		},
		onMutate: async (value$1) => {
			const patch = mergeApiReferenceUiPrefsIntoAccountPrefs(account?.prefs ?? {}, value$1);
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
	const schedulePersistToAccount = useCallback((next) => {
		if (!account) return;
		pendingPrefsRef.current = next;
		if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		persistTimerRef.current = setTimeout(() => {
			persistTimerRef.current = null;
			const pending = pendingPrefsRef.current;
			if (!pending) return;
			pendingPrefsRef.current = null;
			updateMutation.mutate(pending);
		}, API_REFERENCE_UI_PREFS_PERSIST_DEBOUNCE_MS);
	}, [account, updateMutation]);
	useEffect(() => {
		return () => {
			if (persistTimerRef.current !== null) clearTimeout(persistTimerRef.current);
		};
	}, []);
	useEffect(() => {
		if (!account || migratedFromLocalStorageRef.current) return;
		const localPartial = readApiReferenceUiPrefsFromLocalStorage();
		if (!localPartial) {
			migratedFromLocalStorageRef.current = true;
			return;
		}
		if (!parseApiReferenceUiPrefs(account.prefs)) {
			const merged = mergeApiReferenceUiPrefs(resolveApiReferenceUiPrefs(void 0), localPartial);
			writeApiReferenceUiPrefsToLocalStorage(merged);
			setPrefs(merged);
			schedulePersistToAccount(merged);
		}
		migratedFromLocalStorageRef.current = true;
	}, [account, schedulePersistToAccount]);
	const updatePrefs = useCallback((patch) => {
		setPrefs((current) => {
			const next = mergeApiReferenceUiPrefs(current, patch);
			if (next.version === current.version && next.platformMode === current.platformMode && next.clientPlatform === current.clientPlatform && next.serverPlatform === current.serverPlatform && next.cards.parameters === current.cards.parameters && next.cards.responses === current.cards.responses) return current;
			prefsRef.current = next;
			writeApiReferenceUiPrefsToLocalStorage(next);
			schedulePersistToAccount(next);
			return next;
		});
	}, [schedulePersistToAccount]);
	const setCardOpen = useCallback((cardId, open) => {
		updatePrefs({ cards: {
			...prefsRef.current.cards,
			[cardId]: open
		} });
	}, [updatePrefs]);
	const setPlatformMode = useCallback((mode) => {
		updatePrefs({ platformMode: mode });
	}, [updatePrefs]);
	const setClientPlatform = useCallback((platform) => {
		updatePrefs({ clientPlatform: platform });
	}, [updatePrefs]);
	const setServerPlatform = useCallback((platform) => {
		updatePrefs({ serverPlatform: platform });
	}, [updatePrefs]);
	const setVersion = useCallback((version) => {
		updatePrefs({ version });
	}, [updatePrefs]);
	const value = useMemo(() => ({
		prefs,
		updatePrefs,
		setCardOpen,
		setPlatformMode,
		setClientPlatform,
		setServerPlatform,
		setVersion
	}), [
		prefs,
		updatePrefs,
		setCardOpen,
		setPlatformMode,
		setClientPlatform,
		setServerPlatform,
		setVersion
	]);
	return /* @__PURE__ */ jsx(ApiReferenceUiPrefsContext.Provider, {
		value,
		children
	});
}
function useApiReferenceUiPrefs() {
	const context = useContext(ApiReferenceUiPrefsContext);
	if (!context) throw new Error("useApiReferenceUiPrefs must be used within ApiReferenceUiPrefsProvider");
	return context;
}
var ICON_SIZE_CLASS = "h-4 w-4 shrink-0";
var CLIENT_PLATFORM_ICON = {
	"client-web": "web",
	"client-flutter": "flutter",
	"client-react-native": "react-native",
	"client-apple": "apple",
	"client-android-kotlin": "android",
	"client-android-java": "android"
};
var SERVER_FRAMEWORK_ICON = {
	"server-nodejs": "node",
	"server-python": "python",
	"server-dart": "dart",
	"server-php": "php",
	"server-ruby": "ruby",
	"server-dotnet": "dotnet",
	"server-deno": "deno",
	"server-go": "go",
	"server-swift": "swift",
	"server-kotlin": "kotlin",
	"server-rust": "rust",
	"server-java": "java"
};
function ReferencePlatformIcon({ platform, className }) {
	if (platform === "client-graphql" || platform === "server-graphql") return /* @__PURE__ */ jsx("img", {
		src: "/icons/graphql.svg",
		alt: "",
		"aria-hidden": true,
		className: cn(ICON_SIZE_CLASS, PUBLIC_ICON_MUTED_CLASSES, className)
	});
	if (platform === "client-rest" || platform === "server-rest") return /* @__PURE__ */ jsx(ArrowUpDown, {
		className: cn(ICON_SIZE_CLASS, "text-muted-foreground", className),
		"aria-hidden": true
	});
	const clientPlatform = CLIENT_PLATFORM_ICON[platform];
	if (clientPlatform) return /* @__PURE__ */ jsx(PlatformIcon, {
		platform: clientPlatform,
		size: "sm",
		className
	});
	const serverFramework = SERVER_FRAMEWORK_ICON[platform];
	if (serverFramework) return /* @__PURE__ */ jsx(FrameworkIcon, {
		framework: serverFramework,
		size: "sm",
		className
	});
	return /* @__PURE__ */ jsx(PlatformIcon, {
		platform: "web",
		size: "sm",
		className
	});
}
function ReferenceVersionIcon({ version, className }) {
	if (version === "cloud") return /* @__PURE__ */ jsx(CloudMarkIcon, { className: cn(ICON_SIZE_CLASS, "text-muted-foreground", className) });
	return /* @__PURE__ */ jsx(Tags, {
		className: cn(ICON_SIZE_CLASS, "text-muted-foreground", className),
		"aria-hidden": true
	});
}
var REFERENCE_SELECT_ITEM_CLASS = "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pe-8 ps-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";
var REFERENCE_SELECT_TRIGGER_VALUE_CLASS = "flex min-w-0 flex-1 items-center justify-start gap-1.5 overflow-hidden";
function ReferenceSelectTriggerValue({ icon, children }) {
	return /* @__PURE__ */ jsxs("span", {
		className: REFERENCE_SELECT_TRIGGER_VALUE_CLASS,
		children: [icon, children]
	});
}
function ReferenceSelectItem({ value, textValue, icon, label, className }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
		value,
		textValue,
		className: cn(REFERENCE_SELECT_ITEM_CLASS, className),
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "absolute end-2 flex size-3.5 items-center justify-center",
				children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) })
			}),
			icon,
			/* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children: label })
		]
	});
}
function ApiReferenceSidebarSelectors({ version, platform, platformMode, onVersionChange, onPlatformChange }) {
	const platformsForMode = REFERENCE_PLATFORMS.filter((item) => platformMode === "client" ? item.startsWith("client-") : item.startsWith("server-"));
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3 px-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [/* @__PURE__ */ jsx("label", {
				htmlFor: "api-ref-sidebar-platform",
				className: "block px-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: "SDK"
			}), /* @__PURE__ */ jsxs(Select, {
				value: platform,
				onValueChange: (value) => onPlatformChange(value),
				children: [/* @__PURE__ */ jsx(SelectTrigger, {
					id: "api-ref-sidebar-platform",
					className: "h-9 w-full text-[13px]",
					children: /* @__PURE__ */ jsx(ReferenceSelectTriggerValue, {
						icon: /* @__PURE__ */ jsx(ReferencePlatformIcon, { platform }),
						children: /* @__PURE__ */ jsx(SelectValue, {})
					})
				}), /* @__PURE__ */ jsx(SelectContent, { children: platformsForMode.map((item) => /* @__PURE__ */ jsx(ReferenceSelectItem, {
					value: item,
					textValue: PLATFORM_LABELS[item],
					className: "text-[13px]",
					icon: /* @__PURE__ */ jsx(ReferencePlatformIcon, { platform: item }),
					label: PLATFORM_LABELS[item]
				}, item)) })]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-1.5",
			children: [/* @__PURE__ */ jsx("label", {
				htmlFor: "api-ref-sidebar-version",
				className: "block px-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: "Version"
			}), /* @__PURE__ */ jsxs(Select, {
				value: version,
				onValueChange: (value) => onVersionChange(value),
				children: [/* @__PURE__ */ jsx(SelectTrigger, {
					id: "api-ref-sidebar-version",
					className: "h-9 w-full text-[13px]",
					children: /* @__PURE__ */ jsx(ReferenceSelectTriggerValue, {
						icon: /* @__PURE__ */ jsx(ReferenceVersionIcon, { version }),
						children: /* @__PURE__ */ jsx(SelectValue, {})
					})
				}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(ReferenceSelectItem, {
					value: "cloud",
					textValue: "Cloud",
					className: "text-[13px]",
					icon: /* @__PURE__ */ jsx(ReferenceVersionIcon, { version: "cloud" }),
					label: "Cloud"
				}), REFERENCE_VERSIONS.filter((item) => item !== "cloud").map((item) => /* @__PURE__ */ jsx(ReferenceSelectItem, {
					value: item,
					textValue: item,
					className: "text-[13px]",
					icon: /* @__PURE__ */ jsx(ReferenceVersionIcon, { version: item }),
					label: item
				}, item))] })]
			})]
		})]
	});
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
async function downloadReferenceOpenApiSpec(version, mode) {
	if (!isReferenceVersion(version)) throw new Error("Invalid reference version");
	const spec = await loadReferenceOpenApiSpecFn({ data: {
		version,
		mode
	} });
	downloadJsonFile(JSON.stringify(spec, null, 2), getReferenceOpenApiSpecDownloadFilename(version, mode));
}
function ApiReferenceOpenApiSpecDownloadFooter({ version, mode, className }) {
	const [isDownloading, setIsDownloading] = useState(false);
	const handleDownload = useCallback(async () => {
		setIsDownloading(true);
		try {
			await downloadReferenceOpenApiSpec(version, mode);
		} catch {
			toast.error("Failed to download OpenAPI spec");
		} finally {
			setIsDownloading(false);
		}
	}, [mode, version]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("shrink-0 border-t border-border bg-background px-3 py-3", className),
		children: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			disabled: isDownloading,
			onClick: () => void handleDownload(),
			className: "h-9 w-full text-[13px] text-muted-foreground hover:text-foreground",
			children: [isDownloading ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 size-4 animate-spin" }) : /* @__PURE__ */ jsx(Download, { className: "me-1.5 size-4" }), "OpenAPI spec"]
		})
	});
}
var DOCS_MENU_ICON_STROKE = 1.25;
async function fetchReferenceNavServiceCounts(version, mode) {
	const entries = await loadReferenceNavServiceCountsFn({ data: {
		version,
		mode
	} });
	return new Map(entries);
}
function SectionParentLink({ parent, onNavigate }) {
	return /* @__PURE__ */ jsxs(DocsRouteLink, {
		href: parent.href,
		onClick: onNavigate,
		className: "flex items-center gap-1.5 px-2 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-foreground/80",
		children: [/* @__PURE__ */ jsx(ChevronLeft, {
			className: "size-3.5",
			strokeWidth: DOCS_MENU_ICON_STROKE
		}), parent.label]
	});
}
function isReferenceModelPath(pathname) {
	return /^\/docs\/references\/[^/]+\/models\/[^/]+$/.test(pathname.replace(/\/+$/, "") || "/");
}
function ApiReferenceSectionSubnavShell({ parent, onNavigate, className }) {
	const pathname = useLocation().pathname;
	const navigate = useNavigate();
	const parsedPath = parseApiReferencePath(pathname);
	const versionFromPath = resolveReferenceVersionFromPath(pathname);
	const isServiceRoute = Boolean(parsedPath?.service);
	const { prefs, updatePrefs, setPlatformMode, setClientPlatform, setServerPlatform, setVersion } = useApiReferenceUiPrefs();
	const platformMode = (parsedPath?.platform && getSpecMode(parsedPath.platform) === "server" ? "server" : parsedPath?.platform ? "client" : null) ?? prefs.platformMode;
	const version = isServiceRoute || isReferenceModelPath(pathname) ? versionFromPath : prefs.version;
	const platform = parsedPath?.platform ?? getApiReferencePlatformForMode(prefs, platformMode);
	useEffect(() => {
		if (!parsedPath?.platform) return;
		const mode = getSpecMode(parsedPath.platform);
		if (mode !== "client" && mode !== "server") return;
		const patch = {};
		if (mode !== prefs.platformMode) patch.platformMode = mode;
		if (mode === "client" && parsedPath.platform !== prefs.clientPlatform) patch.clientPlatform = parsedPath.platform;
		if (mode === "server" && parsedPath.platform !== prefs.serverPlatform) patch.serverPlatform = parsedPath.platform;
		if ((isServiceRoute || isReferenceModelPath(pathname)) && versionFromPath !== prefs.version) patch.version = versionFromPath;
		if (Object.keys(patch).length > 0) updatePrefs(patch);
	}, [
		isServiceRoute,
		parsedPath?.platform,
		pathname,
		prefs.clientPlatform,
		prefs.platformMode,
		prefs.serverPlatform,
		prefs.version,
		updatePrefs,
		versionFromPath
	]);
	const { features } = useConsoleProfile();
	const { data: serviceCounts, isLoading } = useQuery({
		queryKey: [
			"api-reference-nav-services",
			version,
			platformMode
		],
		queryFn: () => fetchReferenceNavServiceCounts(version, platformMode),
		staleTime: 300 * 1e3
	});
	const navProductGroups = useMemo(() => serviceCounts ? buildReferenceNavProductGroups(version, platform, serviceCounts, features) : [], [
		serviceCounts,
		version,
		platform,
		features.dedicatedDbsDocumentsDB,
		features.dedicatedDbsVectorsDB,
		features.nativeDbsPostgres,
		features.nativeDbsMySQL,
		features.nativeDbsMongo
	]);
	const handlePlatformModeChange = async (nextMode) => {
		setPlatformMode(nextMode);
		const nextPlatform = nextMode === "client" ? prefs.clientPlatform : prefs.serverPlatform;
		if (!parsedPath?.service) return;
		const nextServices = buildReferenceNavProductGroups(version, nextPlatform, await fetchReferenceNavServiceCounts(version, nextMode), features).flatMap((group) => group.services);
		if (nextServices.some((service) => service.id === parsedPath.service) && parsedPath.service) {
			navigate({
				to: "/docs/references/$version/$platform/$service",
				params: {
					version,
					platform: nextPlatform,
					service: parsedPath.service
				},
				hash: typeof window !== "undefined" ? window.location.hash : void 0,
				replace: true
			});
			return;
		}
		const firstService = findFirstReferenceNavService(nextServices);
		if (firstService) navigate({
			to: "/docs/references/$version/$platform/$service",
			params: {
				version,
				platform: nextPlatform,
				service: firstService.id
			},
			replace: true
		});
	};
	const handlePlatformChange = (nextPlatform) => {
		if (platformMode === "client") setClientPlatform(nextPlatform);
		else setServerPlatform(nextPlatform);
		if (!parsedPath?.service) return;
		navigate({
			to: "/docs/references/$version/$platform/$service",
			params: {
				version,
				platform: nextPlatform,
				service: parsedPath.service
			},
			hash: typeof window !== "undefined" ? window.location.hash : void 0,
			replace: true
		});
	};
	const handleVersionChange = (nextVersion) => {
		if (parsedPath?.service) {
			navigate({
				to: "/docs/references/$version/$platform/$service",
				params: {
					version: nextVersion,
					platform,
					service: parsedPath.service
				},
				hash: typeof window !== "undefined" ? window.location.hash : void 0,
				replace: true
			});
			return;
		}
		if (isReferenceModelPath(pathname) && parsedPath?.version) {
			const modelId = pathname.split("/").pop();
			if (modelId) navigate({
				to: "/docs/references/$version/models/$model",
				params: {
					version: nextVersion,
					model: modelId
				},
				replace: true
			});
			return;
		}
		setVersion(nextVersion);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("min-h-0 flex-1 overflow-y-auto px-3 py-4", DOCS_NAV_SCROLL_CLASS),
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					parent ? /* @__PURE__ */ jsx(SectionParentLink, {
						parent,
						onNavigate
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "px-1",
						children: /* @__PURE__ */ jsx(ApiExplorerPlatformToggle, {
							value: platformMode,
							onChange: handlePlatformModeChange,
							className: "w-full [&>button]:flex-1"
						})
					}),
					/* @__PURE__ */ jsx(ApiReferenceSidebarSelectors, {
						version,
						platform,
						platformMode,
						onVersionChange: handleVersionChange,
						onPlatformChange: handlePlatformChange
					}),
					/* @__PURE__ */ jsx(ReferenceServicesNav, {
						productGroups: navProductGroups,
						activeServiceId: parsedPath?.service,
						pathname,
						isLoading,
						onNavigate
					})
				]
			})
		}), /* @__PURE__ */ jsx(ApiReferenceOpenApiSpecDownloadFooter, {
			version,
			mode: platformMode
		})]
	});
}
function ReferenceServicesNav({ productGroups, activeServiceId, pathname, isLoading, onNavigate }) {
	const normalizedPath = pathname.replace(/\/+$/, "") || "/";
	const hasServices = productGroups.some((group) => group.services.length > 0);
	const [expandedGroupId, setExpandedGroupId] = useState("");
	useEffect(() => {
		if (productGroups.length === 0) return;
		const activeGroup = findReferenceNavProductGroupForService(productGroups, activeServiceId);
		if (activeGroup) {
			setExpandedGroupId(activeGroup.id);
			return;
		}
		setExpandedGroupId((current) => current && productGroups.some((group) => group.id === current) ? current : productGroups[0]?.id ?? "");
	}, [productGroups, activeServiceId]);
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": "API services",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: "APIs"
		}), isLoading ? /* @__PURE__ */ jsx("p", {
			className: "px-2 py-2 text-[13px] text-muted-foreground",
			children: "Loading services…"
		}) : !hasServices ? /* @__PURE__ */ jsx("p", {
			className: "px-2 py-2 text-[13px] text-muted-foreground",
			children: "No services available for this API."
		}) : /* @__PURE__ */ jsx(Accordion, {
			type: "single",
			collapsible: true,
			value: expandedGroupId,
			onValueChange: (value) => setExpandedGroupId(value),
			className: "w-full space-y-1 px-2",
			children: productGroups.map((group) => /* @__PURE__ */ jsxs(AccordionItem, {
				value: group.id,
				className: "border-b border-border/50 pb-1 last:border-b-0 last:pb-0",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, {
					className: "gap-1.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 hover:no-underline [&>svg]:size-3.5 [&>svg]:text-muted-foreground/70",
					children: /* @__PURE__ */ jsx("span", {
						className: "min-w-0 flex-1 truncate text-start",
						children: group.label
					})
				}), /* @__PURE__ */ jsx(AccordionContent, {
					className: "pb-2 pt-0",
					children: /* @__PURE__ */ jsx("ul", {
						className: "space-y-0.5",
						children: group.services.map((service) => {
							const isActive = normalizedPath === service.href;
							return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DocsRouteLink, {
								href: service.href,
								onClick: onNavigate,
								className: docsSidebarNavLinkClassName(isActive),
								children: /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: service.label
								})
							}) }, service.id);
						})
					})
				})]
			}, group.id))
		})]
	});
}
function ApiReferenceSectionSubnavPanel({ parent }) {
	return /* @__PURE__ */ jsxs("aside", {
		className: cn("relative z-10 hidden h-full w-[220px] shrink-0 flex-col overflow-hidden border-e border-border bg-background", REFERENCE_SECTION_SUBNAV_DESKTOP_CLASS),
		"aria-label": parent?.label ? `${parent.label} section navigation` : "API references navigation",
		children: [parent ? /* @__PURE__ */ jsx("div", {
			className: cn(DOCS_SECTION_HEADER_CLASS, "px-3"),
			children: /* @__PURE__ */ jsx(SectionParentLink, { parent })
		}) : null, /* @__PURE__ */ jsx(ApiReferenceSectionSubnavShell, { parent: null })]
	});
}
function ApiReferenceSectionSubnavMobile({ parent }) {
	const [sheetOpen, setSheetOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Sheet, {
		open: sheetOpen,
		onOpenChange: setSheetOpen,
		children: [/* @__PURE__ */ jsx(SheetTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "icon",
				className: "size-8 shrink-0",
				"aria-label": "Browse APIs",
				children: /* @__PURE__ */ jsx(Menu, {
					className: "size-3.5",
					strokeWidth: DOCS_MENU_ICON_STROKE
				})
			})
		}), /* @__PURE__ */ jsxs(SheetContent, {
			side: "left",
			className: "flex w-[min(100vw,320px)] flex-col p-0",
			children: [/* @__PURE__ */ jsx(SheetHeader, {
				className: "shrink-0 border-b border-border px-4 py-4 text-start",
				children: /* @__PURE__ */ jsx(SheetTitle, {
					className: "text-[15px]",
					children: parent?.label ?? "API references"
				})
			}), /* @__PURE__ */ jsx(ApiReferenceSectionSubnavShell, {
				parent,
				onNavigate: () => setSheetOpen(false),
				className: "min-h-0 flex-1"
			})]
		})]
	});
}
export { useApiReferenceUiPrefs as i, ApiReferenceSectionSubnavPanel as n, ApiReferenceUiPrefsProvider as r, ApiReferenceSectionSubnavMobile as t };
