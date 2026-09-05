import { t as cn } from "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./social-stats-X1CQqP0k.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./badge-L9aO6DfA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import { n as DropdownMenuCheckboxItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import { C as THREADS_MORE_TAGS, _ as getThreads, u as formatThreadsTotal, w as THREADS_PRIMARY_TAGS } from "./route-meta-C-NVlcqg.js";
import { n as buildThreadsRouteSearch, r as toggleThreadsTag, t as Route$1 } from "./threads.index-BCkXpllc.js";
import { a as MarketingHeroSection } from "./MarketingSections-Dg1QJnZV.js";
import { t as ThreadsPreFooter } from "./ThreadsPreFooter-VaWJ0p_4.js";
import { t as ThreadCard } from "./ThreadCard-DYFrS_-A.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
function TagButton({ tag, selected, onToggle }) {
	return /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: cn("h-8 rounded-full px-3 text-[12px] font-normal", selected && "border-foreground/30 bg-muted text-foreground"),
		onClick: () => onToggle(tag),
		children: tag
	});
}
function ThreadTagsFilter({ selectedTags, onToggleTag }) {
	const selectedMoreCount = THREADS_MORE_TAGS.filter((tag) => selectedTags.includes(tag)).length;
	return /* @__PURE__ */ jsxs("ul", {
		className: "flex flex-wrap items-center gap-2",
		children: [THREADS_PRIMARY_TAGS.map((tag) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(TagButton, {
			tag,
			selected: selectedTags.includes(tag),
			onToggle: onToggleTag
		}) }, tag)), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: cn("h-8 rounded-full px-3 text-[12px] font-normal", selectedMoreCount > 0 && "border-foreground/30 bg-muted text-foreground"),
				children: [
					"More",
					selectedMoreCount > 0 ? ` (${selectedMoreCount})` : null,
					/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1 h-3.5 w-3.5" })
				]
			})
		}), /* @__PURE__ */ jsx(DropdownMenuContent, {
			align: "start",
			className: "max-h-48 w-56 overflow-y-auto",
			children: THREADS_MORE_TAGS.map((tag) => /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
				checked: selectedTags.includes(tag),
				onCheckedChange: () => onToggleTag(tag),
				children: tag
			}, tag))
		})] }) })]
	});
}
function View({ threads: loaderThreads, hasMore: loaderHasMore, nextCursor: loaderNextCursor, total, q: loaderQuery = "", tags: loaderTags }) {
	const navigate = useNavigate();
	const [query, setQuery] = useState(loaderQuery);
	const [selectedTags, setSelectedTags] = useState(loaderTags);
	const [extraThreads, setExtraThreads] = useState([]);
	const [hasMore, setHasMore] = useState(loaderHasMore);
	const [nextCursor, setNextCursor] = useState(loaderNextCursor);
	const [loadingMore, setLoadingMore] = useState(false);
	useEffect(() => {
		setQuery(loaderQuery);
		setSelectedTags(loaderTags);
		setExtraThreads([]);
		setHasMore(loaderHasMore);
		setNextCursor(loaderNextCursor);
	}, [
		loaderQuery,
		loaderTags,
		loaderHasMore,
		loaderNextCursor
	]);
	const threads = [...loaderThreads, ...extraThreads];
	const applyFilters = useCallback((nextQuery, nextTags) => {
		navigate({
			to: "/threads",
			search: () => buildThreadsRouteSearch({
				q: nextQuery,
				tags: nextTags
			}),
			replace: true
		});
	}, [navigate]);
	const handleSearch = useCallback((nextQuery = query, nextTags = selectedTags) => {
		applyFilters(nextQuery, nextTags);
	}, [
		query,
		selectedTags,
		applyFilters
	]);
	const handleToggleTag = useCallback((tag) => {
		const nextTags = toggleThreadsTag(selectedTags, tag);
		setSelectedTags(nextTags);
		handleSearch(query, nextTags);
	}, [
		selectedTags,
		query,
		handleSearch
	]);
	const handleLoadMore = useCallback(async () => {
		if (!hasMore || loadingMore || !nextCursor) return;
		setLoadingMore(true);
		try {
			const result = await getThreads({
				q: loaderQuery || void 0,
				tags: loaderTags,
				allTags: true,
				cursor: nextCursor
			});
			setExtraThreads((current) => [...current, ...result.threads]);
			setHasMore(result.hasMore);
			setNextCursor(result.nextCursor);
		} finally {
			setLoadingMore(false);
		}
	}, [
		hasMore,
		loadingMore,
		nextCursor,
		loaderQuery,
		loaderTags
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				title: "Threads",
				description: "Community support discussions from the Appwrite Discord. Search threads, browse topics, and find answers from developers.",
				align: "left"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ jsx(ThreadTagsFilter, {
								selectedTags,
								onToggleTag: handleToggleTag
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative w-full max-w-[350px] lg:ms-auto",
								children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									onKeyDown: (event) => {
										if (event.key === "Enter") handleSearch(event.currentTarget.value, selectedTags);
									},
									placeholder: "Search for threads...",
									className: "ps-9",
									"aria-label": "Search for threads..."
								})]
							})]
						}),
						threads.length > 0 ? /* @__PURE__ */ jsxs("p", {
							className: "mt-6 text-[13px] text-muted-foreground",
							"aria-live": "polite",
							children: [
								"Found ",
								formatThreadsTotal(total),
								" results."
							]
						}) : null,
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex flex-col gap-4",
							children: threads.length > 0 ? threads.map((thread) => /* @__PURE__ */ jsx(ThreadCard, {
								thread,
								query: loaderQuery
							}, thread.$id)) : /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 px-6 py-12 text-center",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[15px] font-medium text-foreground",
										children: "No support threads found"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] text-muted-foreground",
										children: "Try adjusting your search or clearing filters."
									}),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										className: "mt-6",
										onClick: () => {
											setQuery("");
											setSelectedTags([]);
											handleSearch("", []);
										},
										children: "Clear search"
									})
								]
							})
						}),
						hasMore ? /* @__PURE__ */ jsx("div", {
							className: "mt-6 flex justify-center",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								disabled: loadingMore,
								onClick: () => void handleLoadMore(),
								children: "Load more"
							})
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsx(ThreadsPreFooter, {})
		]
	});
}
function ThreadsIndexPage() {
	return /* @__PURE__ */ jsx(View, { ...Route$1.useLoaderData() });
}
export { ThreadsIndexPage as component };
