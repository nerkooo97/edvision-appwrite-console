import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { R as useDomainPrices } from "./domains-Bfw8HsXF.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, XCircle } from "lucide-react";
const DOMAIN_SEARCH_TLDS = [
	"com",
	"net",
	"org",
	"io",
	"co",
	"dev",
	"app",
	"ai",
	"xyz",
	"me",
	"shop",
	"store",
	"online",
	"site",
	"tech",
	"cloud",
	"blog",
	"pro",
	"top",
	"live",
	"info",
	"biz",
	"name",
	"mobi",
	"asia",
	"tel",
	"travel",
	"jobs",
	"academy",
	"agency",
	"art",
	"bar",
	"cafe",
	"camp",
	"capital",
	"care",
	"careers",
	"center",
	"cheap",
	"church",
	"city",
	"claims",
	"cleaning",
	"clinic",
	"club",
	"codes",
	"coffee",
	"community",
	"company",
	"computer",
	"construction",
	"contractors",
	"cooking",
	"cool",
	"coupons",
	"credit",
	"creditcard",
	"dental",
	"digital",
	"direct",
	"directory",
	"discount",
	"education",
	"email",
	"energy",
	"engineer",
	"engineering",
	"enterprises",
	"equipment",
	"estate",
	"events",
	"exchange",
	"expert",
	"express",
	"family",
	"finance",
	"financial",
	"fish",
	"fitness",
	"fund",
	"furniture",
	"gallery",
	"garden",
	"gifts",
	"gratis",
	"graphics",
	"guru",
	"health",
	"healthcare",
	"hockey",
	"holdings",
	"hospital",
	"house",
	"immo",
	"immobilien",
	"industries",
	"international",
	"investments",
	"law",
	"legal",
	"life",
	"loan",
	"loans",
	"maison",
	"management",
	"market",
	"marketing",
	"media",
	"memorial",
	"money",
	"movie",
	"network",
	"news",
	"ninja",
	"partners",
	"parts",
	"photo",
	"photography",
	"photos",
	"pictures",
	"pizza",
	"place",
	"plumbing",
	"plus",
	"productions",
	"properties",
	"property",
	"recipes",
	"rent",
	"repair",
	"report",
	"reviews",
	"run",
	"sale",
	"school",
	"services",
	"solutions",
	"space",
	"studio",
	"style",
	"supplies",
	"supply",
	"support",
	"surgery",
	"systems",
	"tax",
	"taxi",
	"team",
	"technology",
	"theater",
	"tips",
	"today",
	"tools",
	"training",
	"ventures",
	"video",
	"villas",
	"vision",
	"watch",
	"website",
	"wiki",
	"works",
	"world",
	"wtf",
	"zone"
];
function normalizeDomainSearchInput(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9.-]/g, "");
}
function parseDomainBaseName(normalizedSearch) {
	if (!normalizedSearch) return "";
	const dotIdx = normalizedSearch.indexOf(".");
	if (dotIdx > 0) return normalizedSearch.slice(0, dotIdx);
	return normalizedSearch;
}
function parseTypedDomainTld(normalizedSearch) {
	if (!normalizedSearch.includes(".")) return "";
	return normalizedSearch.slice(normalizedSearch.indexOf(".") + 1).replace(/\./g, "");
}
function formatDomainPricePeriod(periodYears) {
	if (periodYears <= 1) return "/yr";
	return `/${periodYears} yrs`;
}
function tldRank(tld, typedTld) {
	if (!typedTld) return 4;
	const lower = tld.toLowerCase();
	if (lower === typedTld) return 0;
	if (lower.startsWith(typedTld)) return 1;
	if (lower.includes(typedTld)) return 2;
	if (lower === "com") return 3;
	return 4;
}
function buildDomainSuggestions({ baseName, normalizedSearch, apiDataByDomain, typedTld, showSuggestions }) {
	if (!baseName || !showSuggestions) return [];
	const hasExactMatch = DOMAIN_SEARCH_TLDS.some((tld) => `${baseName}.${tld}` === normalizedSearch);
	return DOMAIN_SEARCH_TLDS.map((tld) => {
		const full = `${baseName}.${tld}`;
		const apiData = apiDataByDomain.get(full);
		const isExactMatch = full === normalizedSearch;
		const isPreferredCom = tld === "com" && normalizedSearch === baseName && !hasExactMatch;
		return {
			full,
			tld,
			priceLoaded: apiData != null,
			price: apiData?.price ?? void 0,
			periodYears: apiData?.periodYears ?? 1,
			renewalPrice: apiData?.renewalPrice,
			renewalPeriodYears: apiData?.renewalPeriodYears,
			taken: apiData ? !apiData.available : void 0,
			premium: apiData?.premium,
			isPerfectMatch: isExactMatch || isPreferredCom
		};
	}).sort((a, b) => {
		const aExact = a.full === normalizedSearch ? 1 : 0;
		const bExact = b.full === normalizedSearch ? 1 : 0;
		if (aExact !== bExact) return bExact - aExact;
		const aRank = tldRank(a.tld, typedTld);
		const bRank = tldRank(b.tld, typedTld);
		if (aRank !== bRank) return aRank - bRank;
		const aCom = a.tld === "com" ? 1 : 0;
		return (b.tld === "com" ? 1 : 0) - aCom;
	});
}
function useDomainSearch(initialSearch = "") {
	const [searchValue, setSearchValue] = useState(initialSearch);
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [requestedTlds, setRequestedTlds] = useState(() => DOMAIN_SEARCH_TLDS.slice(0, 24));
	const addRequestedTld = useCallback((tld) => {
		setRequestedTlds((prev) => prev.includes(tld) ? prev : [...prev, tld]);
	}, []);
	const normalizedSearch = useMemo(() => normalizeDomainSearchInput(searchValue), [searchValue]);
	const baseName = useMemo(() => parseDomainBaseName(normalizedSearch), [normalizedSearch]);
	const typedTld = useMemo(() => parseTypedDomainTld(normalizedSearch), [normalizedSearch]);
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(baseName), 500);
		return () => clearTimeout(timer);
	}, [baseName]);
	const showSuggestions = baseName.length >= 2 || baseName.length === 1 && normalizedSearch.includes(".");
	const { pricesByDomain, error } = useDomainPrices(showSuggestions ? debouncedSearch : "", requestedTlds);
	const apiDataByDomain = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		pricesByDomain.forEach((data, domain) => {
			map.set(domain, {
				price: data.price,
				available: data.available,
				periodYears: data.periodYears ?? 1,
				premium: data.premium,
				renewalPrice: data.renewalPrice,
				renewalPeriodYears: data.renewalPeriodYears
			});
		});
		return map;
	}, [pricesByDomain]);
	return {
		searchValue,
		setSearchValue,
		suggestions: useMemo(() => buildDomainSuggestions({
			baseName,
			normalizedSearch,
			apiDataByDomain,
			typedTld,
			showSuggestions
		}), [
			baseName,
			normalizedSearch,
			apiDataByDomain,
			typedTld,
			showSuggestions
		]),
		error,
		showSuggestions,
		hasContent: searchValue.trim().length > 0,
		baseName,
		addRequestedTld
	};
}
var DOMAIN_CARD_PRICE_BLOCK_MIN_H = "min-h-[4.25rem]";
function DomainSuggestionCard({ suggestion, onSelect, onVisible, disabled = false, disabledReason, actionLabel = "Add" }) {
	const t = useT();
	const { full, tld, priceLoaded, price, periodYears = 1, renewalPrice, renewalPeriodYears, taken, premium, isPerfectMatch } = suggestion;
	const cardRef = useRef(null);
	const hasReportedVisible = useRef(false);
	const canSelect = !disabled && !taken && priceLoaded && !(premium && (price == null || price <= 0));
	useEffect(() => {
		if (!onVisible || hasReportedVisible.current) return;
		const el = cardRef.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			if (hasReportedVisible.current) return;
			if (entries[0]?.isIntersecting) {
				hasReportedVisible.current = true;
				onVisible();
			}
		}, {
			rootMargin: "100px",
			threshold: 0
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [onVisible]);
	return /* @__PURE__ */ jsxs("button", {
		ref: cardRef,
		type: "button",
		disabled: !canSelect,
		"aria-label": taken ? `${full} ${t("is taken")}` : disabled && disabledReason === "limit" ? t("Domain limit reached") : canSelect ? `${t("Select")} ${full}` : `${t("Loading price for")} ${full}`,
		onClick: () => {
			if (canSelect && onSelect) onSelect(full);
		},
		className: cn("group flex h-full min-h-[8.75rem] w-full min-w-0 flex-col rounded-xl border px-4 py-3.5 text-start backdrop-blur-sm", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:pointer-events-none", taken ? "border-border/40 bg-muted/20 opacity-75" : isPerfectMatch ? "border-blue-500/25 bg-blue-500/5 dark:bg-blue-500/10 ring-1 ring-blue-500/20 shadow-sm transition-all duration-150 enabled:hover:border-blue-500/35 enabled:hover:bg-blue-500/10 dark:enabled:hover:bg-blue-500/15 enabled:cursor-pointer" : "border-border/60 bg-card/40 transition-all duration-150 enabled:hover:border-foreground/15 enabled:hover:bg-muted/30 enabled:cursor-pointer", !canSelect && !taken && (disabled ? "cursor-not-allowed" : "cursor-wait"), taken && "cursor-not-allowed"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 items-baseline gap-1.5 min-w-0",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: cn("font-mono text-[14px] font-medium tracking-tight truncate", taken ? "text-muted-foreground line-through" : "text-foreground"),
					children: full.split(".")[0]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: cn("shrink-0 font-mono text-[12px]", taken ? "text-muted-foreground/70" : "text-muted-foreground/90"),
					children: [".", tld]
				}),
				premium ? /* @__PURE__ */ jsx(Badge, {
					variant: "info",
					className: "ms-auto shrink-0 px-1.5 py-0 text-[10px] font-medium",
					children: t("Premium")
				}) : null
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-2 flex min-h-0 w-full min-w-0 flex-1 flex-row items-end justify-between gap-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("flex min-h-0 min-w-0 flex-1 flex-col items-start justify-end gap-1 text-start", DOMAIN_CARD_PRICE_BLOCK_MIN_H),
				children: priceLoaded ? taken ? /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-1 duration-200",
					children: [/* @__PURE__ */ jsx(XCircle, { className: "h-3.5 w-3.5 shrink-0" }), t("Taken")]
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [price != null && price > 0 ? /* @__PURE__ */ jsxs("span", {
					className: "truncate font-mono text-[13px] font-semibold tabular-nums text-foreground animate-in fade-in-0 slide-in-from-bottom-1 duration-200",
					children: [
						"$",
						price.toLocaleString("en-US", {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						}),
						/* @__PURE__ */ jsx("span", {
							className: "font-normal text-[11px] text-muted-foreground",
							children: formatDomainPricePeriod(periodYears)
						})
					]
				}) : /* @__PURE__ */ jsx("span", {
					className: "text-[12px] text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-1 duration-200",
					children: premium ? t("Contact for price") : "-"
				}), renewalPrice != null && renewalPrice > 0 ? /* @__PURE__ */ jsxs("span", {
					className: "truncate text-[11px] leading-snug text-muted-foreground tabular-nums animate-in fade-in-0 slide-in-from-bottom-1 duration-200",
					children: [
						t("Renewal"),
						" ",
						/* @__PURE__ */ jsxs("span", {
							className: "font-mono font-medium text-foreground/90",
							children: ["$", renewalPrice.toLocaleString("en-US", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							})]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "font-normal text-muted-foreground",
							children: formatDomainPricePeriod(renewalPeriodYears ?? periodYears ?? 1)
						})
					]
				}) : null] }) : /* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-col items-start justify-end gap-2",
					children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20 rounded bg-muted/60" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-28 rounded bg-muted/50" })]
				})
			}), !taken ? /* @__PURE__ */ jsx("div", {
				className: "flex min-h-8 shrink-0 items-center",
				children: /* @__PURE__ */ jsxs("span", {
					className: cn("flex items-center gap-1 text-[12px] font-medium text-muted-foreground transition-colors group-hover:text-foreground", !canSelect && "opacity-50 group-hover:text-muted-foreground"),
					children: [t(actionLabel), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			}) : null]
		})]
	});
}
var DOMAIN_SEARCH_FIELD_CLASS = "h-11 ps-10 font-mono text-[14px] tracking-tight bg-muted/30 border-border/80 focus:bg-background";
var DOMAIN_SEARCH_HELPER_CLASS = "text-[12px] leading-5 text-muted-foreground";
var FOCUS_MARKETING_CONTENT_WIDTH = "max-w-2xl";
function getSelectionQuote(suggestion) {
	return {
		price: suggestion.price,
		periodYears: suggestion.periodYears,
		premium: suggestion.premium,
		renewalPrice: suggestion.renewalPrice,
		renewalPeriodYears: suggestion.renewalPeriodYears
	};
}
function DomainSearchField({ inputId, searchValue, onSearchValueChange, limitMessage, footer, className }) {
	const t = useT();
	const showFooterSlot = footer != null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("w-full max-w-md space-y-2 text-start", className),
		children: [
			/* @__PURE__ */ jsx(Label, {
				htmlFor: inputId,
				className: "text-[13px]",
				children: t("Domain name")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					id: inputId,
					value: searchValue,
					onChange: (e) => onSearchValueChange(e.target.value),
					placeholder: t("e.g. mycompany or mycompany.com"),
					className: DOMAIN_SEARCH_FIELD_CLASS,
					autoFocus: true
				})]
			}),
			limitMessage,
			showFooterSlot ? /* @__PURE__ */ jsx("div", {
				className: DOMAIN_SEARCH_HELPER_CLASS,
				children: footer
			}) : null
		]
	});
}
function DomainSearchResults({ initialSearch = "", onSelectDomain, limitReached = false, limitMessage, actionLabel = "Add", inputId = "domain-search", className, compactEmptyState = false, variant = "default", title, description, footer }) {
	const t = useT();
	const isFocus = variant === "focus";
	const { searchValue, setSearchValue, suggestions, error, hasContent, baseName, addRequestedTld } = useDomainSearch(initialSearch);
	const searchField = /* @__PURE__ */ jsx(DomainSearchField, {
		inputId,
		searchValue,
		onSearchValueChange: setSearchValue,
		limitMessage,
		footer: !hasContent ? footer : void 0,
		className: isFocus ? "max-w-none" : void 0
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-col", isFocus && "min-h-[calc(100dvh-3.5rem)]", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("transition-[min-height,padding] duration-300 ease-out", hasContent ? cn("min-h-0", isFocus && "mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6") : isFocus ? "flex flex-1 flex-col items-center justify-center px-4 pb-10 pt-6 sm:px-6 sm:pt-8" : compactEmptyState ? "min-h-0" : "flex min-h-[24dvh] flex-1 items-center justify-center sm:min-h-[32dvh]"),
			children: isFocus ? /* @__PURE__ */ jsxs("div", {
				className: cn("mx-auto w-full", FOCUS_MARKETING_CONTENT_WIDTH, !hasContent && "-translate-y-6 sm:-translate-y-8"),
				children: [!hasContent && (title || description) ? /* @__PURE__ */ jsxs("div", {
					className: "mb-8 space-y-3 text-center",
					children: [title ? /* @__PURE__ */ jsxs("h1", {
						className: "font-aeonik-pro whitespace-nowrap text-[clamp(1.125rem,2.5vw+0.75rem,2.25rem)] font-normal leading-none tracking-tight text-foreground",
						children: [title, /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}) : null, description ? /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-6 text-muted-foreground",
						children: description
					}) : null]
				}) : null, searchField]
			}) : searchField
		}), hasContent ? /* @__PURE__ */ jsx("div", {
			className: cn("mt-6 flex-1 min-h-0", isFocus && "mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6"),
			children: suggestions.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: suggestions.map((suggestion) => /* @__PURE__ */ jsx(DomainSuggestionCard, {
					suggestion,
					onSelect: (full) => onSelectDomain(full, getSelectionQuote(suggestion)),
					onVisible: () => addRequestedTld(suggestion.tld),
					disabled: limitReached,
					disabledReason: limitReached ? "limit" : void 0,
					actionLabel
				}, suggestion.full))
			}) : baseName.length > 0 && baseName.length < 2 ? /* @__PURE__ */ jsx("p", {
				className: DOMAIN_SEARCH_HELPER_CLASS,
				children: t("Type at least 2 characters to see suggestions")
			}) : baseName.length >= 2 && error ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-destructive",
				children: t("Failed to load domain prices. Please try again.")
			}) : null
		}) : null]
	});
}
export { DomainSearchResults as t };
