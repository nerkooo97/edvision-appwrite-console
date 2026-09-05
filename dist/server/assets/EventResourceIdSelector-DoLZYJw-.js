import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { as as providersQueryOptions, cs as topicsQueryOptions, hv as teamsQueryOptions, uy as usersQueryOptions, vd as bucketFilesQueryOptions, yd as bucketsQueryOptions } from "./hooks-BONwG3Mt.js";
import { c as consoleDatabasesQueryOptions, ct as tableColumnsQueryOptions, dt as tableRowsQueryOptions, ft as tablesQueryOptions, lt as tableIndexesQueryOptions } from "./databases-Dh0pwZ6h.js";
import { n as databaseRouteKindFromApiType } from "./database-routes-DB_xKWuY.js";
import { in as sitesQueryOptions, lr as functionsQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { Query } from "@appwrite.io/console";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronDown, Columns3, Database, File, FolderOpen, Globe, Hash, Loader2, Mail, MessageSquare, Rows3, Table2, Terminal, User, Users as Users$1 } from "lucide-react";
var ICONS = {
	database: Database,
	table: Table2,
	bucket: FolderOpen,
	file: File,
	row: Rows3,
	column: Columns3,
	index: Hash,
	function: Terminal,
	site: Globe,
	team: Users$1,
	user: User,
	topic: MessageSquare,
	provider: Mail
};
var SEARCH_PLACEHOLDERS = {
	database: "Search databases by name or ID...",
	table: "Search tables by name or ID...",
	bucket: "Search buckets by name or ID...",
	file: "Search files by name or ID...",
	row: "Search rows by ID...",
	column: "Search columns by key or ID...",
	index: "Search indexes by key or ID...",
	function: "Search functions by name or ID...",
	site: "Search sites by name or ID...",
	team: "Search teams by name or ID...",
	user: "Search users by name, email, or ID...",
	topic: "Search topics by name or ID...",
	provider: "Search providers by name or ID..."
};
function EventResourceIdSelector({ projectId, type, databaseId, tableId, bucketId, value, onSelect, placeholder = "All", allowAllOption = true, triggerClassName, contentClassName }) {
	const t = useT();
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
	const dbQuery = useQuery({
		...consoleDatabasesQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "database",
		placeholderData: keepPreviousData
	});
	const needsDbKind = !!databaseId && (type === "table" || type === "row" || type === "column" || type === "index");
	const dbTypeQuery = useQuery({
		...consoleDatabasesQueryOptions(projectId, 0, 1, void 0, [Query.equal("$id", [databaseId ?? ""])]),
		enabled: !!projectId && !!databaseId && open && needsDbKind
	});
	const dbKind = databaseRouteKindFromApiType(dbTypeQuery.data?.databases?.[0]?.type);
	const tableQuery = useQuery({
		...tablesQueryOptions(projectId, databaseId, dbKind, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && !!databaseId && open && type === "table" && dbTypeQuery.isFetched,
		placeholderData: keepPreviousData
	});
	const bucketQuery = useQuery({
		...bucketsQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "bucket",
		placeholderData: keepPreviousData
	});
	const fileQuery = useQuery({
		...bucketFilesQueryOptions(projectId, bucketId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && !!bucketId && open && type === "file",
		placeholderData: keepPreviousData
	});
	const rowQuery = useQuery({
		...tableRowsQueryOptions(projectId, databaseId, tableId, dbKind, 0, 20, debouncedSearch || void 0, void 0, void 0, void 0, void 0),
		enabled: !!projectId && !!databaseId && !!tableId && open && type === "row" && dbTypeQuery.isFetched,
		placeholderData: keepPreviousData
	});
	const columnQuery = useQuery({
		...tableColumnsQueryOptions(projectId, databaseId, dbKind, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && open && type === "column" && dbTypeQuery.isFetched,
		placeholderData: keepPreviousData
	});
	const indexQuery = useQuery({
		...tableIndexesQueryOptions(projectId, databaseId, dbKind, tableId),
		enabled: !!projectId && !!databaseId && !!tableId && open && type === "index" && dbTypeQuery.isFetched,
		placeholderData: keepPreviousData
	});
	const functionQuery = useQuery({
		...functionsQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "function",
		placeholderData: keepPreviousData
	});
	const siteQuery = useQuery({
		...sitesQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "site",
		placeholderData: keepPreviousData
	});
	const teamQuery = useQuery({
		...teamsQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "team",
		placeholderData: keepPreviousData
	});
	const userQuery = useQuery({
		...usersQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "user",
		placeholderData: keepPreviousData
	});
	const topicQuery = useQuery({
		...topicsQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "topic",
		placeholderData: keepPreviousData
	});
	const providerQuery = useQuery({
		...providersQueryOptions(projectId, 0, 20, debouncedSearch || void 0),
		enabled: !!projectId && open && type === "provider",
		placeholderData: keepPreviousData
	});
	const items = useMemo(() => {
		const baseItems = type === "database" ? dbQuery.data?.databases ?? [] : type === "table" ? tableQuery.data?.tables ?? [] : type === "bucket" ? bucketQuery.data?.buckets ?? [] : type === "file" ? fileQuery.data?.files ?? [] : type === "row" ? rowQuery.data?.rows ?? [] : type === "column" ? columnQuery.data?.columns ?? [] : type === "index" ? indexQuery.data?.indexes ?? [] : type === "function" ? functionQuery.data?.functions ?? [] : type === "site" ? siteQuery.data?.sites ?? [] : type === "team" ? teamQuery.data?.teams ?? [] : type === "user" ? userQuery.data?.users ?? [] : type === "topic" ? topicQuery.data?.topics ?? [] : type === "provider" ? providerQuery.data?.providers ?? [] : [];
		if ((type === "column" || type === "index") && debouncedSearch.trim()) {
			const q = debouncedSearch.trim().toLowerCase();
			return baseItems.filter((x) => {
				const id = x.$id ?? x.key ?? "";
				const name = x.name ?? "";
				return String(id).toLowerCase().includes(q) || String(name).toLowerCase().includes(q);
			});
		}
		return baseItems;
	}, [
		type,
		debouncedSearch,
		dbQuery.data,
		tableQuery.data,
		bucketQuery.data,
		fileQuery.data,
		rowQuery.data,
		columnQuery.data,
		indexQuery.data,
		functionQuery.data,
		siteQuery.data,
		teamQuery.data,
		userQuery.data,
		topicQuery.data,
		providerQuery.data
	]);
	const isFetching = type === "database" ? dbQuery.isFetching : type === "table" ? tableQuery.isFetching : type === "bucket" ? bucketQuery.isFetching : type === "file" ? fileQuery.isFetching : type === "row" ? rowQuery.isFetching : type === "column" ? columnQuery.isFetching : type === "index" ? indexQuery.isFetching : type === "function" ? functionQuery.isFetching : type === "site" ? siteQuery.isFetching : type === "team" ? teamQuery.isFetching : type === "user" ? userQuery.isFetching : type === "topic" ? topicQuery.isFetching : providerQuery.isFetching;
	const getItemId = (x) => x.$id ?? x.key ?? "";
	const displayValue = !value || value === "*" ? t(placeholder) : (() => {
		const item = items.find((x) => getItemId(x) === value);
		return item?.name ?? item?.key ?? item?.email ?? value;
	})();
	const Icon$1 = ICONS[type];
	if (!projectId || type === "file" && !bucketId || (type === "row" || type === "column" || type === "index") && (!databaseId || !tableId)) return /* @__PURE__ */ jsx("span", {
		className: "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[13px] text-muted-foreground",
		children: "*"
	});
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: cn("inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-[12px] font-medium leading-normal transition-colors", value && value !== "*" ? "border-primary bg-primary/10 text-primary hover:bg-primary/20" : "border-border bg-background hover:bg-muted", triggerClassName),
				children: [
					/* @__PURE__ */ jsx(Icon$1, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ jsx("span", {
						className: "min-w-0 truncate leading-normal",
						children: displayValue
					}),
					/* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })
				]
			})
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: cn("w-[var(--radix-popover-trigger-width)] min-w-[200px] max-w-[280px] p-0", contentClassName),
			align: "start",
			children: /* @__PURE__ */ jsxs(Command$1, {
				shouldFilter: false,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(CommandInput, {
						placeholder: t(SEARCH_PLACEHOLDERS[type]),
						value: search,
						onValueChange: setSearch,
						className: cn("h-9", isFetching && "pe-8")
					}), /* @__PURE__ */ jsx("div", {
						className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isFetching ? "opacity-100" : "opacity-0"),
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
					})]
				}), /* @__PURE__ */ jsxs(CommandList, {
					className: "min-h-[160px] max-h-[200px]",
					children: [/* @__PURE__ */ jsx(CommandEmpty, { children: isFetching ? t("Loading...") : t("No results found") }), /* @__PURE__ */ jsxs(CommandGroup, { children: [allowAllOption ? /* @__PURE__ */ jsx(CommandItem, {
						value: "__all__",
						onSelect: () => {
							onSelect("*");
							setOpen(false);
						},
						children: /* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground",
							children: [t("All"), " (*)"]
						})
					}) : null, items.map((item) => {
						const id = item.$id ?? item.key ?? "";
						return /* @__PURE__ */ jsxs(CommandItem, {
							value: `${id} ${item.name ?? ""} ${item.key ?? ""} ${item.email ?? ""}`,
							onSelect: () => {
								onSelect(id);
								setOpen(false);
							},
							children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: item.name ?? item.key ?? item.email ?? id
							})]
						}, id);
					})] })]
				})]
			})
		})]
	});
}
export { EventResourceIdSelector as t };
