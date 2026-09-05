import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { f as ROWS_DEFAULT_PAGE_SIZE, u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import { B as domainsFilterColumns, at as getLimit, ct as getSearch, et as MIN_SEARCH_LENGTH, ft as parseSort, ht as urlFromRouterLocation, lt as getSort, ot as getPage, pt as queryParamToMap, rt as encodeSort, st as getQueryParam, tt as buildListSearchParams, ut as mapToQueryParam } from "./form-field-type-badge-C7qMzJo0.js";
import { H as useOrganizationDomains, I as useDeleteOrganizationDomain, P as useCreateOrganizationDomain, _ as fetchDomain, i as DOMAINS_DEFAULT_SORT_ORDER, m as domainRecordsQueryOptions, n as DNS_RECORDS_DEFAULT_SORT_ORDER, r as DOMAINS_DEFAULT_SORT_BY, t as DNS_RECORDS_DEFAULT_SORT_BY } from "./domains-Bfw8HsXF.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { f as ResourceCard, i as RESOURCE_CARD_GRID_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as RetryVerification } from "./RetryVerification-yAjjptiv.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { t as useOrganizationDomainsPlanLimit } from "./useOrganizationDomainsPlanLimit-CdhZDNIk.js";
import { t as ConfirmNameDialog } from "./ConfirmNameDialog-CzIMv4mD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeftRight, Copy, ExternalLink, FileJson, Globe, Link2, Plus, RefreshCw, Search, Settings, ShoppingCart, Square, Trash2 } from "lucide-react";
function CreateDomainDialog({ open, onOpenChange, onCreate, isLoading = false }) {
	const t = useT();
	const [domain, setDomain] = useState("");
	useEffect(() => {
		if (!open) setDomain("");
	}, [open]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!domain.trim()) return;
		onCreate(domain.trim().toLowerCase());
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add Domain") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Enter the domain name you want to add to your organization.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "domain",
									children: t("Domain")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "domain",
									value: domain,
									onChange: (e) => setDomain(e.target.value),
									placeholder: "example.com",
									disabled: isLoading,
									autoFocus: true
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Enter the domain name without protocol (e.g., example.com)")
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => onOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || !domain.trim(),
							children: t("Add Domain")
						})]
					})]
				})
			]
		})
	});
}
function DomainContextMenu({ orgId, domain, children }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [retryDialogOpen, setRetryDialogOpen] = useState(false);
	const isVerified = domain.nameservers?.toLowerCase() === "appwrite";
	const domainHref = buildConsoleUrl(`/organizations/${orgId}/domains/${domain.$id}`);
	const deleteDomain = useDeleteOrganizationDomain(orgId);
	const deleteMutation = useMutation({
		mutationFn: async () => {
			await deleteDomain.mutateAsync(domain.$id);
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				orgId
			] });
			toast.success(`${domain.domain} ${t("has been deleted")}`);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete domain"));
		}
	});
	const handleDeleteClick = () => {
		openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
	};
	const handleDelete = () => {
		closeDialogBeforeOverlayUnmount(() => setDeleteDialogOpen(false));
		deleteMutation.mutate();
	};
	const handleRetryVerificationClick = () => {
		openDialogAfterOverlayCloses(() => setRetryDialogOpen(true));
	};
	const handleDomainVerified = () => {
		queryClient.invalidateQueries({ queryKey: [
			"domains",
			"organization",
			orgId
		] });
		queryClient.invalidateQueries({ queryKey: ["domain", domain.$id] });
	};
	const navigateToTab = (path) => {
		navigate({
			to: path,
			params: {
				orgId,
				domainId: domain.$id
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ jsxs(ContextMenuContent, {
			className: "w-56",
			children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => navigateToTab("/organizations/$orgId/domains/$domainId"),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Globe }), t("DNS Records")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => navigateToTab("/organizations/$orgId/domains/$domainId/settings"),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Settings }), t("Settings")]
				}),
				!isVerified && /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: handleRetryVerificationClick,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: RefreshCw }), t("Retry verification")]
				}),
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => copyToClipboard("ID", domain.$id),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
					}),
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => copyToClipboard("Domain", domain.domain),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy domain")]
					}),
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => copyToClipboard("Link", domainHref),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
					}),
					/* @__PURE__ */ jsxs(ContextMenuItem, {
						onSelect: () => void copyResourceAsJson(() => fetchDomain(domain.$id)),
						children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
					})
				] })] }),
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => openInNewTab(domainHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => openInNewWindow(domainHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
				}),
				/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: handleDeleteClick,
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
				})
			]
		})] }),
		/* @__PURE__ */ jsx(ConfirmNameDialog, {
			open: deleteDialogOpen,
			onOpenChange: setDeleteDialogOpen,
			title: "Delete domain",
			description: /* @__PURE__ */ jsxs(Fragment, { children: [
				t("Are you sure you want to delete this domain?"),
				" ",
				t("This action cannot be undone.")
			] }),
			confirmValue: domain.domain,
			confirmPlaceholder: "Enter domain name",
			onConfirm: handleDelete,
			isConfirming: deleteMutation.isPending
		}),
		/* @__PURE__ */ jsx(RetryVerification, {
			open: retryDialogOpen,
			onOpenChange: setRetryDialogOpen,
			domain,
			orgId,
			onVerified: handleDomainVerified
		})
	] });
}
function View() {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const search = useSearch({ strict: false });
	const queryClient = useQueryClient();
	const [isCreateDomainSubmitting, setIsCreateDomainSubmitting] = useState(false);
	const isDomainsIndex = location.pathname.replace(/\/$/, "") === `/organizations/${orgId}/domains`;
	const defaultDomainsSort = {
		sortBy: DOMAINS_DEFAULT_SORT_BY,
		sortOrder: DOMAINS_DEFAULT_SORT_ORDER
	};
	const domainsListParams = useMemo(() => {
		if (!isDomainsIndex || typeof search !== "object") return null;
		const url = urlFromRouterLocation(location, window.location.origin);
		const parsed = parseSort(search.sort) ?? getSort(url) ?? defaultDomainsSort;
		const pageFromSearch = search.page != null ? typeof search.page === "number" ? search.page : Number(search.page) : void 0;
		const limitFromSearch = search.limit != null ? typeof search.limit === "number" ? search.limit : Number(search.limit) : void 0;
		const page = Number.isInteger(pageFromSearch) && (pageFromSearch ?? 0) >= 1 ? pageFromSearch : getPage(url, 1);
		const limit = Number.isInteger(limitFromSearch) && (limitFromSearch ?? 0) >= 1 ? limitFromSearch : getLimit(url, 12);
		return {
			search: getSearch(url) ?? search.search,
			page,
			limit,
			filterMap: queryParamToMap(getQueryParam(url) ?? search.query ?? null),
			sortBy: parsed.sortBy,
			sortOrder: parsed.sortOrder
		};
	}, [
		isDomainsIndex,
		search,
		location.pathname,
		location.search,
		orgId
	]);
	const urlPage = domainsListParams?.page ?? 1;
	const urlLimit = domainsListParams?.limit ?? 12;
	const urlSearch = domainsListParams?.search;
	const urlSortBy = domainsListParams?.sortBy ?? "$createdAt";
	const urlSortOrder = domainsListParams?.sortOrder ?? "desc";
	const filterMap = domainsListParams?.filterMap ?? /* @__PURE__ */ new Map();
	const filterQueries = filterMap.size > 0 ? Array.from(filterMap.values()) : void 0;
	const filterQueryString = filterMap.size > 0 ? mapToQueryParam(filterMap) : "";
	const [searchInput, setSearchInput] = useState("");
	const searchDebounceRef = useRef(null);
	const [requestedPage, setRequestedPage] = useState(1);
	const [displayedPage, setDisplayedPage] = useState(1);
	const [displayedSearch, setDisplayedSearch] = useState(void 0);
	const [displayedSortBy, setDisplayedSortBy] = useState(DOMAINS_DEFAULT_SORT_BY);
	const [displayedSortOrder, setDisplayedSortOrder] = useState(DOMAINS_DEFAULT_SORT_ORDER);
	const [displayedFilterQueryString, setDisplayedFilterQueryString] = useState("");
	const displayedFilterQueries = useMemo(() => {
		if (!displayedFilterQueryString) return void 0;
		const map = queryParamToMap(displayedFilterQueryString);
		return map.size > 0 ? Array.from(map.values()) : void 0;
	}, [displayedFilterQueryString]);
	const hasInitedDisplayedRef = useRef(false);
	const [createDialogOpen, setCreateDialogOpen] = useState(false);
	const [selectedDomains, setSelectedDomains] = useState(/* @__PURE__ */ new Set());
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [filtersOpen, setFiltersOpen] = useState(false);
	useEffect(() => {
		setSearchInput(urlSearch ?? "");
	}, [urlSearch]);
	useEffect(() => {
		if (!isDomainsIndex) return;
		setRequestedPage((p) => p === urlPage ? p : urlPage);
	}, [isDomainsIndex, urlPage]);
	useEffect(() => {
		if (!isDomainsIndex || !domainsListParams) return;
		if (!hasInitedDisplayedRef.current) {
			setDisplayedPage(urlPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
			hasInitedDisplayedRef.current = true;
		}
	}, [
		isDomainsIndex,
		domainsListParams,
		urlPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString
	]);
	useEffect(() => {
		if (!isDomainsIndex) return;
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = searchInput.trim();
			if (trimmed === (urlSearch ?? "")) return;
			if (trimmed.length > 0 && trimmed.length < 3) return;
			navigateToDomainsList({
				search: trimmed || void 0,
				query: filterQueryString || void 0,
				page: 1,
				limit: urlLimit,
				sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
			});
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [
		searchInput,
		urlSearch,
		urlLimit,
		urlSortBy,
		urlSortOrder,
		filterQueryString,
		isDomainsIndex,
		navigate,
		orgId
	]);
	const navigateToDomainsList = (params) => {
		const hasQueryKey = "query" in params;
		const hasSearchKey = "search" in params;
		const hasSortKey = "sort" in params;
		navigate({
			to: "/organizations/$orgId/domains",
			params: { orgId },
			search: (prev) => {
				const built = buildListSearchParams({
					search: hasSearchKey ? params.search : urlSearch ?? void 0,
					query: hasQueryKey ? params.query : filterQueryString || void 0,
					page: params.page ?? 1,
					limit: params.limit ?? urlLimit,
					sort: hasSortKey ? params.sort : urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
				});
				const next = {
					...prev,
					...built
				};
				if (params.page === 1) delete next.page;
				if (hasQueryKey && params.query === void 0) delete next.query;
				if (hasSearchKey && (params.search === void 0 || params.search === "")) delete next.search;
				if (hasSortKey && params.sort === void 0) delete next.sort;
				return next;
			},
			replace: true
		});
	};
	const handleDomainsSortChange = (sortBy, sortOrder) => {
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: filterQueryString || void 0,
			page: 1,
			limit: urlLimit,
			sort: sortBy !== "$createdAt" || sortOrder !== "desc" ? encodeSort(sortBy, sortOrder) : void 0
		});
	};
	const applyFilter = (compactKey, queryStr, replaceKey) => {
		const next = new Map(filterMap);
		if (replaceKey) next.delete(replaceKey);
		next.set(compactKey, queryStr);
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: mapToQueryParam(next) || void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const removeFilter = (compactKey) => {
		const next = new Map(filterMap);
		next.delete(compactKey);
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: next.size > 0 ? mapToQueryParam(next) : void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const clearAllFilters = () => {
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: void 0,
			page: 1,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
		setFiltersOpen(false);
	};
	const { total: domainsTotal, isLoading: domainsLoading, isFetching: domainsFetching, isFetched: domainsFetched } = useOrganizationDomains(orgId, requestedPage - 1, urlLimit, urlSearch ?? void 0, filterQueries, urlSortBy, urlSortOrder);
	const { domains: apiDomains, total: displayedTotal, isLoading: displayedLoading } = useOrganizationDomains(orgId, displayedPage - 1, urlLimit, displayedSearch ?? void 0, displayedFilterQueries, displayedSortBy, displayedSortOrder);
	useEffect(() => {
		if (!isDomainsIndex || domainsFetching || domainsLoading || !domainsFetched) return;
		if (!(requestedPage === displayedPage && (urlSearch ?? "") === (displayedSearch ?? "") && filterQueryString === displayedFilterQueryString && urlSortBy === displayedSortBy && urlSortOrder === displayedSortOrder)) {
			setDisplayedPage(requestedPage);
			setDisplayedSearch(urlSearch ?? void 0);
			setDisplayedSortBy(urlSortBy);
			setDisplayedSortOrder(urlSortOrder);
			setDisplayedFilterQueryString(filterQueryString);
		}
	}, [
		isDomainsIndex,
		domainsFetching,
		domainsLoading,
		domainsFetched,
		requestedPage,
		urlSearch,
		urlSortBy,
		urlSortOrder,
		filterQueryString,
		displayedPage,
		displayedSearch,
		displayedSortBy,
		displayedSortOrder,
		displayedFilterQueryString
	]);
	const showLoading = displayedLoading && apiDomains.length === 0;
	const paginationTotal = displayedTotal ?? domainsTotal;
	const paginatedDomains = apiDomains;
	const { limit: domainsLimit, isAtLimit: isDomainLimitReached } = useOrganizationDomainsPlanLimit(orgId);
	const domainLimitTooltip = isDomainLimitReached ? `${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.` : void 0;
	useEffect(() => {
		setSelectedDomains(/* @__PURE__ */ new Set());
		setDeleteDialogOpen(false);
	}, [
		location.pathname,
		orgId,
		urlSearch
	]);
	const handleSearchChange = (value) => {
		setSearchInput(value);
		setRequestedPage(1);
		setSelectedDomains(/* @__PURE__ */ new Set());
	};
	const deleteDomainMutation = useDeleteOrganizationDomain(orgId);
	const bulkDeleteMutation = useMutation({
		mutationFn: async (domainIds) => {
			if (!orgId) throw new Error("Organization ID is required");
			await Promise.all(domainIds.map((domainId) => deleteDomainMutation.mutateAsync(domainId)));
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"domains",
				"organization",
				orgId
			] });
			toast.success(`${t("Successfully deleted")} ${selectedDomains.size} ${selectedDomains.size > 1 ? t("domains") : t("domain")}`);
			setSelectedDomains(/* @__PURE__ */ new Set());
			setDeleteDialogOpen(false);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete domains"));
		}
	});
	const handleBulkDelete = () => {
		if (selectedDomains.size === 0) return;
		setDeleteDialogOpen(true);
	};
	const confirmBulkDelete = () => {
		if (selectedDomains.size === 0) return;
		bulkDeleteMutation.mutate(Array.from(selectedDomains));
	};
	const handlePageChange = (page) => {
		setRequestedPage(page);
		setSelectedDomains(/* @__PURE__ */ new Set());
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: filterQueryString || void 0,
			page,
			limit: urlLimit,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const handlePageSizeChange = (newPageSize) => {
		setRequestedPage(1);
		setDisplayedPage(1);
		setSelectedDomains(/* @__PURE__ */ new Set());
		navigateToDomainsList({
			search: urlSearch ?? void 0,
			query: filterQueryString || void 0,
			page: 1,
			limit: newPageSize,
			sort: urlSortBy !== "$createdAt" || urlSortOrder !== "desc" ? encodeSort(urlSortBy, urlSortOrder) : void 0
		});
	};
	const createDomainMutation = useCreateOrganizationDomain(orgId);
	const handleCreateDomain = async (domain) => {
		if (!orgId) return;
		if (isDomainLimitReached) {
			toast.error(`${t("Your current plan includes up to")} ${domainsLimit} ${t("domains")}.`);
			return;
		}
		setIsCreateDomainSubmitting(true);
		try {
			const createdDomain = await createDomainMutation.mutateAsync(domain);
			const domainId = createdDomain.$id;
			queryClient.setQueryData(["domain", domainId], createdDomain);
			await queryClient.ensureQueryData(domainRecordsQueryOptions(domainId, 0, 25, void 0, DNS_RECORDS_DEFAULT_SORT_BY, "asc"));
			toast.success(`${createdDomain.domain} ${t("has been created")}`);
			await navigate({
				to: "/organizations/$orgId/domains/$domainId",
				params: {
					orgId,
					domainId
				}
			});
		} catch (error) {
			toast.error(getErrorMessage(error));
		} finally {
			setIsCreateDomainSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative w-64",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
							placeholder: t("Search domains..."),
							value: searchInput,
							onChange: (e) => handleSearchChange(e.target.value),
							className: "h-9 border-border bg-accent/50 ps-10 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
						})]
					}), /* @__PURE__ */ jsx(FiltersPopover, {
						open: filtersOpen,
						onOpenChange: setFiltersOpen,
						columns: domainsFilterColumns,
						filterMap,
						onRemoveFilter: removeFilter,
						onClearAll: clearAllFilters,
						onApplyFilter: applyFilter,
						resourceLabel: "domains",
						filterScope: "organizations.domains",
						onApplyQuery: (queryParam, sortParam) => navigateToDomainsList({
							search: urlSearch ?? void 0,
							query: queryParam ?? void 0,
							page: 1,
							limit: urlLimit,
							sort: sortParam ?? void 0
						}),
						sortBy: urlSortBy,
						sortOrder: urlSortOrder,
						onSortChange: handleDomainsSortChange,
						defaultSortParam: encodeSort(DOMAINS_DEFAULT_SORT_BY, DOMAINS_DEFAULT_SORT_ORDER),
						onReset: () => {
							navigate({
								to: "/organizations/$orgId/domains",
								params: { orgId },
								search: {
									page: 1,
									limit: urlLimit
								},
								replace: true
							});
						},
						teamId: orgId
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "ms-auto flex items-center gap-2",
					children: /* @__PURE__ */ jsxs(TooltipProvider, {
						delayDuration: 0,
						children: [
							/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "outline",
										disabled: isDomainLimitReached,
										onClick: () => navigate({
											to: "/organizations/$orgId/domains/transfer-in",
											params: { orgId }
										}),
										className: "h-9 gap-1.5 text-[13px] font-medium",
										children: [/* @__PURE__ */ jsx(ArrowLeftRight, { className: "h-4 w-4" }), t("Transfer in")]
									})
								})
							}), domainLimitTooltip ? /* @__PURE__ */ jsx(TooltipContent, {
								className: "max-w-xs text-xs",
								children: domainLimitTooltip
							}) : null] }),
							/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "outline",
										disabled: isDomainLimitReached,
										onClick: () => navigate({
											to: "/organizations/$orgId/domains/buy",
											params: { orgId }
										}),
										className: "h-9 gap-1.5 text-[13px] font-medium",
										...analyticsAttrs("buy-domain"),
										children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4" }), t("Buy domain")]
									})
								})
							}), domainLimitTooltip ? /* @__PURE__ */ jsx(TooltipContent, {
								className: "max-w-xs text-xs",
								children: domainLimitTooltip
							}) : null] }),
							/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx("span", {
									className: "inline-flex",
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "brandCta",
										onClick: () => setCreateDialogOpen(true),
										disabled: isDomainLimitReached,
										className: "h-9 gap-1.5 text-[13px] font-medium",
										...analyticsAttrs("add-org-domain"),
										children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Add domain")]
									})
								})
							}), domainLimitTooltip ? /* @__PURE__ */ jsx(TooltipContent, {
								className: "max-w-xs text-xs",
								children: domainLimitTooltip
							}) : null] })
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1",
				children: [
					showLoading ? /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-card py-12 text-center",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Loading domains...")
						})
					}) : paginatedDomains.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						className: RESOURCE_CARD_GRID_CLASSNAME,
						children: paginatedDomains.map((domain) => /* @__PURE__ */ jsx(DomainContextMenu, {
							orgId,
							domain,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/organizations/$orgId/domains/$domainId",
								params: {
									orgId,
									domainId: domain.$id
								},
								children: /* @__PURE__ */ jsx(ResourceCard, {
									title: domain.domain,
									resourceId: domain.$id,
									metadata: [{
										label: t("Nameservers"),
										value: /* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-medium text-muted-foreground",
											children: domain.nameservers || t("3rd party")
										})
									}, {
										label: t("Created"),
										value: /* @__PURE__ */ jsx(DateTooltip, {
											date: domain.$createdAt,
											className: "text-[11px] font-medium text-muted-foreground"
										})
									}]
								})
							})
						}, domain.$id))
					}), !showLoading && paginatedDomains.length > 0 && /* @__PURE__ */ jsx(Pagination, {
						currentPage: displayedPage,
						totalItems: paginationTotal,
						pageSize: urlLimit,
						pageSizeOptions: [
							12,
							18,
							36,
							72
						],
						onPageChange: handlePageChange,
						onPageSizeChange: handlePageSizeChange,
						itemLabel: t("domains")
					})] }) : /* @__PURE__ */ jsx(EmptyState, {
						icon: Globe,
						title: t("No domains yet"),
						description: t("Create your first domain to get started"),
						isEmpty: !(urlSearch || filterMap.size > 0),
						hasFilters: !!(urlSearch || filterMap.size > 0),
						variant: "card"
					}),
					selectedDomains.size > 0 && /* @__PURE__ */ jsx("div", {
						className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
							children: [/* @__PURE__ */ jsxs(Badge, {
								variant: "secondary",
								className: "h-6 px-2.5",
								children: [
									selectedDomains.size,
									" ",
									selectedDomains.size > 1 ? t("domains") : t("domain"),
									" ",
									t("selected")
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setSelectedDomains(/* @__PURE__ */ new Set()),
									className: "h-8 text-xs",
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									size: "sm",
									onClick: handleBulkDelete,
									disabled: bulkDeleteMutation.isPending,
									className: "h-8 gap-2",
									children: t("Delete")
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx(Dialog, {
						open: deleteDialogOpen,
						onOpenChange: setDeleteDialogOpen,
						children: /* @__PURE__ */ jsxs(DialogContent, {
							className: "sm:max-w-md p-0",
							children: [/* @__PURE__ */ jsxs(DialogHeader, {
								className: "px-6 pt-6 text-start",
								children: [/* @__PURE__ */ jsx(DialogTitle, { children: selectedDomains.size > 1 ? t("Delete Domains") : t("Delete Domain") }), /* @__PURE__ */ jsxs(DialogDescription, {
									className: "text-[13px] mt-2",
									children: [
										t("Are you sure you want to delete"),
										" ",
										selectedDomains.size,
										" ",
										selectedDomains.size > 1 ? t("domains") : t("domain"),
										"?",
										" ",
										t("This action cannot be undone.")
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									onClick: () => setDeleteDialogOpen(false),
									disabled: bulkDeleteMutation.isPending,
									children: t("Cancel")
								}), /* @__PURE__ */ jsx(Button, {
									variant: "destructive",
									onClick: confirmBulkDelete,
									disabled: bulkDeleteMutation.isPending,
									children: t("Delete")
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(CreateDomainDialog, {
				open: createDialogOpen,
				onOpenChange: setCreateDialogOpen,
				onCreate: handleCreateDomain,
				isLoading: isCreateDomainSubmitting
			})
		]
	});
}
export { View as t };
