import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { a as matchesSettingsSearch, i as useSettingsSearch, n as SettingsSearchProvider, o as sectionHasMatchingCards, r as SettingsSearchProviderLocal, t as DeferEmptyResultsProvider } from "./SettingsSearchContext-DPkuZW4D.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { Search, X } from "lucide-react";
const SETTINGS_LAYOUT_CONTAINER = "@container/settings-layout w-full min-w-0";
const settingsLayoutRootClass = "flex w-full min-w-0 flex-col gap-4 @[1024px]/settings-layout:flex-row @[1024px]/settings-layout:gap-8";
const settingsLayoutMobileNavClass = "w-full space-y-2 @[1024px]/settings-layout:hidden";
const settingsLayoutDesktopNavClass = "sticky top-4 hidden shrink-0 flex-col gap-2 self-start @[1024px]/settings-layout:flex";
const settingsLayoutContentClass = "min-w-0 w-full flex-1";
const SETTINGS_LAYOUT_NAV_WIDTH_CLASS = "w-56";
function SettingsSearchInput({ value, onChange, placeholder }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full mb-2",
		children: [
			/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" }),
			/* @__PURE__ */ jsx(Input, {
				placeholder: t(placeholder),
				value,
				onChange: (e) => onChange(e.target.value),
				className: cn("h-9 w-full rounded-md border border-border bg-accent/50 ps-10 pe-4 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", value && "pe-9")
			}),
			value ? /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => onChange(""),
				className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground rounded p-0.5",
				"aria-label": t("Clear search"),
				children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
			}) : null
		]
	});
}
function SettingsLayoutShellContent({ navItems, activeSectionId, cardIndex, onNavigateToSection, children, searchPlaceholder = "Search settings...", mobileNavAriaLabel = "Settings navigation", desktopNavAriaLabel = "Settings navigation", navWidthClassName = SETTINGS_LAYOUT_NAV_WIDTH_CLASS, useRouteLinks = true }) {
	const t = useT();
	const { query, setQuery } = useSettingsSearch();
	const q = query.trim().toLowerCase();
	const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
	const navMatchBySection = useMemo(() => {
		if (!q) return /* @__PURE__ */ new Map();
		return new Map(navItems.map((item) => [item.id, sectionHasMatchingCards(q, item.id, cardIndex) || matchesSettingsSearch(q, {
			title: item.label,
			keywords: item.keywords
		})]));
	}, [
		q,
		navItems,
		cardIndex
	]);
	const deferEmptyResults = Boolean(q && !navMatchBySection.get(activeSectionId) && sectionIds.some((id) => navMatchBySection.get(id)));
	const onNavigateToSectionRef = useRef(onNavigateToSection);
	onNavigateToSectionRef.current = onNavigateToSection;
	useEffect(() => {
		if (!q) return;
		if (navMatchBySection.get(activeSectionId)) return;
		const target = sectionIds.find((id) => navMatchBySection.get(id));
		if (!target || target === activeSectionId) return;
		const timeoutId = window.setTimeout(() => {
			onNavigateToSectionRef.current(target);
		}, 400);
		return () => window.clearTimeout(timeoutId);
	}, [
		q,
		activeSectionId,
		sectionIds,
		navMatchBySection
	]);
	const navLinkClassName = (itemId, isActive) => cn("flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium transition-colors", isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground", q && navMatchBySection.get(itemId) && !isActive ? "ring-1 ring-ring/40" : void 0);
	return /* @__PURE__ */ jsx("div", {
		className: SETTINGS_LAYOUT_CONTAINER,
		children: /* @__PURE__ */ jsxs("div", {
			className: settingsLayoutRootClass,
			children: [
				/* @__PURE__ */ jsxs("nav", {
					"data-testid": "settings-navigation",
					className: settingsLayoutMobileNavClass,
					"aria-label": t(mobileNavAriaLabel),
					children: [/* @__PURE__ */ jsx(SettingsSearchInput, {
						value: query,
						onChange: setQuery,
						placeholder: searchPlaceholder
					}), /* @__PURE__ */ jsxs(Select, {
						value: activeSectionId,
						onValueChange: onNavigateToSection,
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							size: "sm",
							className: "h-9 w-full cursor-pointer text-[13px]",
							children: /* @__PURE__ */ jsx(SelectValue, {})
						}), /* @__PURE__ */ jsx(SelectContent, { children: navItems.map((item) => /* @__PURE__ */ jsx(SelectItem, {
							value: item.id,
							className: "text-[13px]",
							children: /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 shrink-0" }),
									t(item.label),
									item.endAdornment
								]
							})
						}, item.id)) })]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					"data-testid": "settings-navigation",
					className: cn(settingsLayoutDesktopNavClass, navWidthClassName),
					"aria-label": t(desktopNavAriaLabel),
					children: [/* @__PURE__ */ jsx(SettingsSearchInput, {
						value: query,
						onChange: setQuery,
						placeholder: searchPlaceholder
					}), navItems.map((item) => {
						const Icon$1 = item.icon;
						const className = navLinkClassName(item.id, activeSectionId === item.id);
						if (!useRouteLinks) return /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: cn(className, "w-full text-start"),
							onClick: () => onNavigateToSection(item.id),
							children: [
								/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }),
								/* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 truncate",
									children: t(item.label)
								}),
								item.endAdornment
							]
						}, item.id);
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							params: item.params,
							className,
							children: [
								/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }),
								/* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 truncate",
									children: t(item.label)
								}),
								item.endAdornment
							]
						}, item.id);
					})]
				}),
				/* @__PURE__ */ jsx(DeferEmptyResultsProvider, {
					deferEmptyResults,
					children: /* @__PURE__ */ jsx("div", {
						className: settingsLayoutContentClass,
						children
					})
				})
			]
		})
	});
}
function SettingsLayoutShell({ searchQuery, onSearchQueryChange, ...props }) {
	if (searchQuery !== void 0 && onSearchQueryChange !== void 0) return /* @__PURE__ */ jsx(SettingsSearchProvider, {
		query: searchQuery,
		onQueryChange: onSearchQueryChange,
		children: /* @__PURE__ */ jsx(SettingsLayoutShellContent, { ...props })
	});
	return /* @__PURE__ */ jsx(SettingsSearchProviderLocal, { children: /* @__PURE__ */ jsx(SettingsLayoutShellContent, { ...props }) });
}
export { SettingsLayoutShell as t };
