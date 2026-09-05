import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { as as providersQueryOptions, cs as topicsQueryOptions, hv as teamsQueryOptions, uy as usersQueryOptions, yd as bucketsQueryOptions } from "./hooks-BONwG3Mt.js";
import { c as consoleDatabasesQueryOptions, ft as tablesQueryOptions } from "./databases-Dh0pwZ6h.js";
import { in as sitesQueryOptions, lr as functionsQueryOptions } from "./affiliates-BOg1SHC6.js";
import { D as organizationDomainsQueryOptions } from "./domains-Bfw8HsXF.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Database, FolderOpen, Globe, Loader2, Mail, MessageSquare, Terminal, User, Users } from "lucide-react";
var PICK_LIMIT = 25;
var MODAL_PORTAL_HOST_SELECTOR = "[data-slot=\"dialog-content\"], [data-slot=\"sheet-content\"], [data-slot=\"alert-dialog-content\"]";
function getSiteFramework(site) {
	return site.buildFramework || site.buildFrameworkId || site.framework;
}
function ResourceSearchListItemIcon({ kind, item, fallbackIcon: FallbackIcon }) {
	if (kind === "function") return /* @__PURE__ */ jsx(RuntimeIcon, {
		runtime: item.runtime ?? "",
		size: "sm",
		className: "h-4 w-4 shrink-0 text-muted-foreground"
	});
	if (kind === "site") return /* @__PURE__ */ jsx(FrameworkIcon, {
		framework: item.framework,
		size: "sm",
		className: "h-4 w-4 shrink-0"
	});
	if (kind === "user" || kind === "team") return /* @__PURE__ */ jsx(InitialsAvatar, {
		name: item.initialsName || item.label,
		size: "xs",
		className: "shrink-0"
	});
	return /* @__PURE__ */ jsx(FallbackIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground" });
}
var SEARCH_PLACEHOLDERS = {
	function: "Search functions by name or ID...",
	site: "Search sites by name or ID...",
	user: "Search users by name, email, or ID...",
	team: "Search teams by name or ID...",
	bucket: "Search buckets by name or ID...",
	database: "Search databases by name or ID...",
	table: "Search tables by name or ID...",
	topic: "Search topics by name or ID...",
	provider: "Search providers by name or ID...",
	domain: "Search domains by name or ID..."
};
var RESOURCE_ICONS = {
	function: Terminal,
	site: Globe,
	user: User,
	team: Users,
	bucket: FolderOpen,
	database: Database,
	table: Database,
	topic: MessageSquare,
	provider: Mail,
	domain: Globe
};
function ResourceSearchListSkeleton({ rows = 5, kind }) {
	const useInitialsShape = kind === "user" || kind === "team";
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-0.5 p-1",
		"aria-hidden": true,
		children: Array.from({ length: rows }, (_, index) => /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 rounded-sm px-2 py-1.5",
			children: [/* @__PURE__ */ jsx(Skeleton, { className: cn("h-4 w-4 shrink-0", useInitialsShape ? "rounded-full" : "rounded-sm") }), /* @__PURE__ */ jsx(Skeleton, {
				className: "h-4 rounded-sm",
				style: { width: `${55 + index % 3 * 12}%` }
			})]
		}, index))
	});
}
function useResourceSearchList(kind, { projectId, organizationId, databaseId, open, prefetch, debouncedSearch }) {
	const search = debouncedSearch || void 0;
	const enabled = open || !!prefetch;
	const functionQuery = useQuery({
		...functionsQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "function" && !!projectId,
		placeholderData: keepPreviousData
	});
	const siteQuery = useQuery({
		...sitesQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "site" && !!projectId,
		placeholderData: keepPreviousData
	});
	const userQuery = useQuery({
		...usersQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "user" && !!projectId,
		placeholderData: keepPreviousData
	});
	const teamQuery = useQuery({
		...teamsQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "team" && !!projectId,
		placeholderData: keepPreviousData
	});
	const bucketQuery = useQuery({
		...bucketsQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "bucket" && !!projectId,
		placeholderData: keepPreviousData
	});
	const databaseQuery = useQuery({
		...consoleDatabasesQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "database" && !!projectId,
		placeholderData: keepPreviousData
	});
	const tableQuery = useQuery({
		...tablesQueryOptions(projectId, databaseId, "tablesdb", 0, PICK_LIMIT, search),
		enabled: enabled && kind === "table" && !!projectId && !!databaseId,
		placeholderData: keepPreviousData
	});
	const topicQuery = useQuery({
		...topicsQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "topic" && !!projectId,
		placeholderData: keepPreviousData
	});
	const providerQuery = useQuery({
		...providersQueryOptions(projectId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "provider" && !!projectId,
		placeholderData: keepPreviousData
	});
	const domainQuery = useQuery({
		...organizationDomainsQueryOptions(organizationId, 0, PICK_LIMIT, search),
		enabled: enabled && kind === "domain" && !!organizationId,
		placeholderData: keepPreviousData
	});
	return useMemo(() => {
		switch (kind) {
			case "function": return {
				items: (functionQuery.data?.functions ?? []).map((item) => ({
					id: item.$id,
					label: item.name || "Unnamed function",
					runtime: item.runtime
				})),
				isFetching: functionQuery.isFetching
			};
			case "site": return {
				items: (siteQuery.data?.sites ?? []).map((item) => ({
					id: item.$id,
					label: item.name || "Unnamed site",
					framework: getSiteFramework(item)
				})),
				isFetching: siteQuery.isFetching
			};
			case "user": return {
				items: (userQuery.data?.users ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.email || item.phone || item.$id,
					initialsName: item.name || item.email || item.phone || void 0
				})),
				isFetching: userQuery.isFetching
			};
			case "team": return {
				items: (teamQuery.data?.teams ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id,
					initialsName: item.name || void 0
				})),
				isFetching: teamQuery.isFetching
			};
			case "bucket": return {
				items: (bucketQuery.data?.buckets ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id
				})),
				isFetching: bucketQuery.isFetching
			};
			case "database": return {
				items: (databaseQuery.data?.databases ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id
				})),
				isFetching: databaseQuery.isFetching
			};
			case "table": return {
				items: (tableQuery.data?.tables ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id
				})),
				isFetching: tableQuery.isFetching
			};
			case "topic": return {
				items: (topicQuery.data?.topics ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id
				})),
				isFetching: topicQuery.isFetching
			};
			case "provider": return {
				items: (providerQuery.data?.providers ?? []).map((item) => ({
					id: item.$id,
					label: item.name || item.$id
				})),
				isFetching: providerQuery.isFetching
			};
			case "domain": return {
				items: (domainQuery.data?.domains ?? []).map((item) => ({
					id: item.$id,
					label: item.domain || item.$id
				})),
				isFetching: domainQuery.isFetching
			};
			default: return {
				items: [],
				isFetching: false
			};
		}
	}, [
		kind,
		functionQuery.data,
		functionQuery.isFetching,
		siteQuery.data,
		siteQuery.isFetching,
		userQuery.data,
		userQuery.isFetching,
		teamQuery.data,
		teamQuery.isFetching,
		bucketQuery.data,
		bucketQuery.isFetching,
		databaseQuery.data,
		databaseQuery.isFetching,
		tableQuery.data,
		tableQuery.isFetching,
		topicQuery.data,
		topicQuery.isFetching,
		providerQuery.data,
		providerQuery.isFetching,
		domainQuery.data,
		domainQuery.isFetching
	]);
}
function resolveModalPortalHost(from) {
	if (!from) return null;
	return from.closest(MODAL_PORTAL_HOST_SELECTOR);
}
function ResourceSearchPopover({ kind, projectId, organizationId, databaseId, selectedId, onSelect, excludeIds, pinnedItems, disabled = false, contentClassName, align = "start", trigger, className, emptyMessage = "No results found", prefetch = false }) {
	const t = useT();
	const rootRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [portalContainer, setPortalContainer] = useState(null);
	useEffect(() => {
		const timer = window.setTimeout(() => setDebouncedSearch(search.trim()), 150);
		return () => window.clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) {
			setSearch("");
			setDebouncedSearch("");
		}
	}, [open]);
	useLayoutEffect(() => {
		if (!open) return;
		const host = resolveModalPortalHost(rootRef.current) ?? resolveModalPortalHost(document.activeElement instanceof Element ? document.activeElement : null);
		setPortalContainer((prev) => prev === host ? prev : host);
	}, [open]);
	const excluded = useMemo(() => {
		if (!excludeIds) return null;
		return excludeIds instanceof Set ? excludeIds : new Set(excludeIds);
	}, [excludeIds]);
	const { items: fetchedItems, isFetching } = useResourceSearchList(kind, {
		projectId,
		organizationId,
		databaseId,
		open,
		prefetch,
		debouncedSearch
	});
	const items = useMemo(() => {
		const list = fetchedItems.filter((item) => !excluded?.has(item.id));
		const extras = (pinnedItems ?? []).filter((item) => !excluded?.has(item.id) && !list.some((entry) => entry.id === item.id));
		return extras.length > 0 ? [...extras, ...list] : list;
	}, [
		fetchedItems,
		excluded,
		pinnedItems
	]);
	const Icon$1 = RESOURCE_ICONS[kind];
	const showListSkeleton = isFetching && items.length === 0;
	return /* @__PURE__ */ jsx("div", {
		ref: rootRef,
		className: className ?? "contents",
		children: /* @__PURE__ */ jsxs(Popover, {
			open,
			modal: !portalContainer,
			onOpenChange: (nextOpen) => {
				if (disabled && nextOpen) return;
				if (nextOpen) setPortalContainer(resolveModalPortalHost(rootRef.current) ?? resolveModalPortalHost(document.activeElement instanceof Element ? document.activeElement : null));
				else setPortalContainer(null);
				setOpen(nextOpen);
			},
			children: [/* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				disabled,
				children: trigger
			}), /* @__PURE__ */ jsx(PopoverContent, {
				container: portalContainer,
				className: cn("w-[min(100vw-2rem,320px)] p-0", contentClassName),
				align,
				onWheelCapture: (event) => {
					event.stopPropagation();
				},
				onCloseAutoFocus: (event) => {
					if (portalContainer) event.preventDefault();
				},
				children: /* @__PURE__ */ jsxs(Command$1, {
					shouldFilter: false,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t(SEARCH_PLACEHOLDERS[kind]),
							value: search,
							onValueChange: setSearch,
							className: cn("h-9", isFetching && "pe-8")
						}), /* @__PURE__ */ jsx("div", {
							className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
						})]
					}), /* @__PURE__ */ jsx(CommandList, {
						className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
						children: showListSkeleton ? /* @__PURE__ */ jsx(ResourceSearchListSkeleton, { kind }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CommandEmpty, { children: t(emptyMessage) }), /* @__PURE__ */ jsx(CommandGroup, { children: items.map((item) => /* @__PURE__ */ jsxs(CommandItem, {
							value: `${item.id} ${item.label}`,
							onSelect: () => {
								if (item.id !== selectedId) onSelect(item.id, item);
								setOpen(false);
							},
							className: cn("gap-2", item.id === selectedId && "bg-accent/50"),
							children: [/* @__PURE__ */ jsx(ResourceSearchListItemIcon, {
								kind,
								item,
								fallbackIcon: Icon$1
							}), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: item.label
							})]
						}, item.id)) })] })
					})]
				})
			})]
		})
	});
}
export { ResourceSearchPopover as t };
