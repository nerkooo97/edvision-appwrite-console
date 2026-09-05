import { t as cn } from "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./frontmatter-9RsCswLb.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./content-BNDqilSS.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./route-meta-Ddegy6aO.js";
import { t as Route$1 } from "./integrations.index-CJ_o4uQ_.js";
import { a as MarketingHeroSection } from "./MarketingSections-Dg1QJnZV.js";
import { a as IntegrationPartnerNote, r as integrationPillClassName, t as IntegrationCard } from "./IntegrationCard-DsiKZEdw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
function buildIntegrationsRouteSearch(search) {
	const next = {};
	const query = search.search?.trim();
	if (query) next.search = query;
	const category = search.category?.trim();
	if (category && category !== "all") next.category = category;
	const platform = search.platform?.trim();
	if (platform && platform !== "all") next.platform = platform;
	return next;
}
function hasActiveIntegrationFilters(search) {
	return Boolean(search.search?.trim() || search.category && search.category !== "all" || search.platform && search.platform !== "all");
}
function FilterPill({ active, onClick, children }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		className: integrationPillClassName({ active }),
		children
	});
}
function CategorySection({ group }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		id: group.category,
		className: "scroll-mt-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "border-b border-border pb-4",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-aeonik-pro text-[22px] font-normal text-foreground",
				children: t(group.heading)
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-[13px] text-muted-foreground",
				children: t(group.description)
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: group.integrations.map((integration) => /* @__PURE__ */ jsx(IntegrationCard, { integration }, integration.slug))
		})]
	});
}
function View({ featured, categories, platforms, grouped, filtered, search }) {
	const t = useT();
	const navigate = useNavigate();
	const searchDebounceRef = useRef(null);
	const [query, setQuery] = useState(search?.search ?? "");
	const selectedCategory = search?.category ?? "all";
	const selectedPlatform = search?.platform ?? "all";
	const urlSearch = search?.search ?? "";
	const filtersActive = hasActiveIntegrationFilters(search ?? {});
	useEffect(() => {
		setQuery(urlSearch);
	}, [urlSearch]);
	const applyFilters = useCallback((next) => {
		navigate({
			to: "/integrations",
			search: () => buildIntegrationsRouteSearch(next),
			replace: true
		});
	}, [navigate]);
	useEffect(() => {
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = query.trim();
			if (trimmed === urlSearch) return;
			applyFilters({
				search: trimmed,
				category: selectedCategory,
				platform: selectedPlatform
			});
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [
		query,
		urlSearch,
		selectedCategory,
		selectedPlatform,
		applyFilters
	]);
	const showFeatured = featured.length > 0 && !filtersActive;
	const showGrouped = !filtersActive;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				eyebrow: t("Integrations"),
				title: t("Discover infinite possibilities"),
				description: t("Find your favourite apps to integrate with your projects in Appwrite's marketplace."),
				align: "left"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "integration-search",
									className: "sr-only",
									children: t("Search integrations...")
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
										id: "integration-search",
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: t("Search integrations..."),
										className: "h-10 ps-9 text-[13px]"
									})]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
									children: t("Platform")
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ jsx(FilterPill, {
										active: selectedPlatform === "all",
										onClick: () => applyFilters({
											search: query,
											category: selectedCategory,
											platform: "all"
										}),
										children: t("All")
									}), platforms.map((platform) => /* @__PURE__ */ jsx(FilterPill, {
										active: selectedPlatform === platform,
										onClick: () => applyFilters({
											search: query,
											category: selectedCategory,
											platform
										}),
										children: platform
									}, platform))]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
									children: t("Category")
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ jsx(Link, {
										to: "/integrations",
										search: () => buildIntegrationsRouteSearch({
											search: query,
											platform: selectedPlatform
										}),
										className: cn(integrationPillClassName({ active: selectedCategory === "all" }), "link-unstyled"),
										children: t("All categories")
									}), categories.map((category) => /* @__PURE__ */ jsx(Link, {
										to: "/integrations",
										search: () => buildIntegrationsRouteSearch({
											search: query,
											category: category.slug,
											platform: selectedPlatform
										}),
										className: cn(integrationPillClassName({ active: selectedCategory === category.slug }), "link-unstyled"),
										children: t(category.heading)
									}, category.slug))]
								})] })
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 space-y-12",
							children: [
								filtersActive ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "border-b border-border pb-4",
									children: [/* @__PURE__ */ jsxs("h2", {
										className: "font-aeonik-pro text-[22px] font-normal text-foreground",
										children: [
											filtered.length,
											" ",
											filtered.length === 1 ? t("result") : t("results")
										]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] text-muted-foreground",
										children: filtered.length === 0 ? t("Try adjusting or clearing your filters.") : t("Integrations matching your search and filters.")
									})]
								}), filtered.length > 0 ? /* @__PURE__ */ jsx("div", {
									className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-2",
									children: filtered.map((integration) => /* @__PURE__ */ jsx(IntegrationCard, { integration }, integration.slug))
								}) : null] }) : null,
								showFeatured ? /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
									className: "border-b border-border pb-4",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "font-aeonik-pro text-[22px] font-normal text-foreground",
										children: t("Featured")
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] text-muted-foreground",
										children: t("Popular integrations to get started quickly.")
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-6 flex flex-col gap-4",
									children: featured.map((integration) => /* @__PURE__ */ jsx(IntegrationCard, {
										integration,
										variant: "featured"
									}, integration.slug))
								})] }) : null,
								showGrouped ? grouped.map((group) => /* @__PURE__ */ jsx(CategorySection, { group }, group.category)) : null
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(IntegrationPartnerNote, {})
		]
	});
}
function IntegrationsIndexPage() {
	const catalog = Route$1.useLoaderData();
	const search = Route$1.useSearch();
	return /* @__PURE__ */ jsx(View, {
		...catalog,
		search
	});
}
export { IntegrationsIndexPage as component };
