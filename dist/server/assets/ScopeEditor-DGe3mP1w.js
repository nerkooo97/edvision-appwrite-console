import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Zl as useConsoleProjectScopes } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { a as getScopeCategoryIcon, c as isOAuth2AppsScopeEditorRow, d as sortScopeCategories, i as filterScopeEditorRows, l as scopeEditorCategory, n as compareScopeRowsDeprecatedLast, o as isCloudEnvironment, r as consoleKeyScopesToEditorRows, s as isOAuth2AppsCatalogScope, t as compareScopeEditorRowsForDisplay, u as scopeRowDeprecated } from "./console-project-scopes-nd4nTLJF.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { a as AccordionRowTrigger, i as AccordionItem, n as AccordionContent, r as AccordionHeader, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as Separator } from "./separator-B2hXZdKL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Loader2, MoreHorizontal, Search } from "lucide-react";
function ScopeEditor({ value, onChange, disabled = false }) {
	const t = useT();
	const isCloud = isCloudEnvironment();
	const { features } = useConsoleProfile();
	const { data: scopeList, isLoading, isError, error } = useConsoleProjectScopes();
	const [searchQuery, setSearchQuery] = useState("");
	const [openCategories, setOpenCategories] = useState([]);
	const openCategoriesRef = useRef([]);
	const previousValueRef = useRef(value);
	const isUserInteractionRef = useRef(false);
	const availableScopes = useMemo(() => {
		const scopeById = new Map((scopeList?.scopes ?? []).map((s) => [s.$id, s]));
		const base = consoleKeyScopesToEditorRows(scopeList, {
			isCloud,
			oauth2Server: features.oauth2Server,
			selectedScopeIds: value
		});
		const byId = new Map(base.map((r) => [r.scope, r]));
		for (const v of value) {
			if (byId.has(v)) continue;
			const orphanEntry = scopeById.get(v);
			if (!features.oauth2Server && isOAuth2AppsCatalogScope(v, orphanEntry?.category)) continue;
			const categoryLooksDeprecated = (orphanEntry?.category ?? "").trim().toLowerCase() === "deprecated";
			const deprecatedBadge = scopeRowDeprecated(orphanEntry?.deprecated, categoryLooksDeprecated);
			const accordionCategory = scopeEditorCategory(v, orphanEntry?.category);
			byId.set(v, {
				scope: v,
				description: orphanEntry?.description ?? "This scope is on the API key but was not returned in the server scope list.",
				category: accordionCategory,
				icon: getScopeCategoryIcon(accordionCategory, v),
				deprecated: deprecatedBadge
			});
		}
		return Array.from(byId.values()).filter((row) => features.oauth2Server || !isOAuth2AppsScopeEditorRow(row)).sort(compareScopeEditorRowsForDisplay);
	}, [
		features.oauth2Server,
		scopeList,
		isCloud,
		value
	]);
	const filteredScopes = useMemo(() => filterScopeEditorRows(availableScopes, searchQuery), [availableScopes, searchQuery]);
	const scopesByCategory = useMemo(() => {
		const grouped = {};
		for (const row of filteredScopes) {
			if (!grouped[row.category]) grouped[row.category] = [];
			grouped[row.category].push(row);
		}
		for (const k of Object.keys(grouped)) grouped[k].sort(compareScopeRowsDeprecatedLast);
		return grouped;
	}, [filteredScopes]);
	const categoryKeys = useMemo(() => sortScopeCategories(Object.keys(scopesByCategory)), [scopesByCategory]);
	const isFiltering = searchQuery.trim().length > 0;
	useEffect(() => {
		openCategoriesRef.current = openCategories;
	}, [openCategories]);
	useEffect(() => {
		if (!isFiltering) return;
		setOpenCategories(categoryKeys);
		openCategoriesRef.current = categoryKeys;
	}, [
		categoryKeys,
		isFiltering,
		searchQuery
	]);
	useEffect(() => {
		if (JSON.stringify(previousValueRef.current) !== JSON.stringify(value) && !isUserInteractionRef.current) {
			if (!isFiltering) {
				setOpenCategories([]);
				openCategoriesRef.current = [];
			}
		}
		if (isUserInteractionRef.current) isUserInteractionRef.current = false;
		previousValueRef.current = value;
	}, [isFiltering, value]);
	const displayScopes = useMemo(() => Array.from(new Set(value)), [value]);
	const handleScopeToggle = (scope, checked) => {
		isUserInteractionRef.current = true;
		if (checked) onChange([...new Set([...value, scope])]);
		else onChange(value.filter((s) => s !== scope));
	};
	const handleCategoryToggle = (category, checked) => {
		isUserInteractionRef.current = true;
		const ids = (scopesByCategory[category] || []).map((r) => r.scope);
		const idSet = new Set(ids);
		if (checked) onChange([...new Set([...value, ...ids])]);
		else onChange(value.filter((s) => !idSet.has(s)));
	};
	const isSelectingAllRef = useRef(false);
	const handleSelectAll = (e) => {
		e.preventDefault();
		e.stopPropagation();
		isSelectingAllRef.current = true;
		isUserInteractionRef.current = true;
		const allIds = /* @__PURE__ */ new Set();
		filteredScopes.forEach((scopeDef) => {
			if (scopeDef.deprecated) return;
			allIds.add(scopeDef.scope);
		});
		onChange([...new Set([...value, ...allIds])]);
		requestAnimationFrame(() => {
			isSelectingAllRef.current = false;
		});
	};
	const handleDeselectAll = (e) => {
		e.preventDefault();
		e.stopPropagation();
		isSelectingAllRef.current = true;
		isUserInteractionRef.current = true;
		const filteredIds = new Set(filteredScopes.map((scopeDef) => scopeDef.scope));
		onChange(value.filter((scope) => !filteredIds.has(scope)));
		requestAnimationFrame(() => {
			isSelectingAllRef.current = false;
		});
	};
	const handleAccordionChange = (newValue) => {
		if (isSelectingAllRef.current) return;
		setOpenCategories(newValue);
		openCategoriesRef.current = newValue;
	};
	useLayoutEffect(() => {
		if (isSelectingAllRef.current) setOpenCategories(openCategoriesRef.current);
	}, [value]);
	const getCategoryState = (category) => {
		const categoryScopes = scopesByCategory[category] || [];
		if (categoryScopes.length === 0) return "unchecked";
		const selectedCount = categoryScopes.filter((scopeDef) => displayScopes.includes(scopeDef.scope)).length;
		if (selectedCount === 0) return "unchecked";
		if (selectedCount === categoryScopes.length) return "checked";
		return "indeterminate";
	};
	const getCategorySelectedCount = (category) => {
		return (scopesByCategory[category] || []).filter((scopeDef) => displayScopes.includes(scopeDef.scope)).length;
	};
	if (isLoading && !scopeList) return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-center gap-2 py-8 text-muted-foreground text-[13px]",
		children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }), t("Loading scopes…")]
	});
	if (isError) return /* @__PURE__ */ jsx("p", {
		className: "text-[13px] text-destructive",
		children: error instanceof Error ? error.message : t("Failed to load scopes")
	});
	if (availableScopes.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "text-[13px] text-muted-foreground",
		children: t("No API key scopes are available from the server.")
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: searchQuery,
						onChange: (event) => setSearchQuery(event.target.value),
						placeholder: t("Search scopes..."),
						className: "h-9 ps-9 text-[13px]",
						disabled
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center justify-end gap-1.5",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 px-2.5 text-[12px]",
							onClick: handleSelectAll,
							disabled: disabled || filteredScopes.length === 0,
							children: isFiltering ? t("Select shown") : t("Select all")
						}),
						/* @__PURE__ */ jsx(Separator, {
							orientation: "vertical",
							className: "h-3"
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 px-2.5 text-[12px]",
							onClick: handleDeselectAll,
							disabled: disabled || filteredScopes.length === 0,
							children: isFiltering ? t("Clear shown") : t("Deselect all")
						})
					]
				})]
			}),
			isFiltering ? /* @__PURE__ */ jsx("p", {
				className: "text-[12px] text-muted-foreground",
				children: filteredScopes.length === 0 ? t("No scopes match your search.") : `${t("Showing")} ${filteredScopes.length} ${t("of")} ${availableScopes.length} ${t("scopes.")}`
			}) : null,
			filteredScopes.length === 0 ? null : /* @__PURE__ */ jsx(Accordion, {
				type: "multiple",
				value: openCategories,
				onValueChange: handleAccordionChange,
				className: "w-full",
				children: categoryKeys.map((category, categoryIndex) => {
					const categoryScopes = scopesByCategory[category] || [];
					if (categoryScopes.length === 0) return null;
					const Icon$1 = categoryScopes[0]?.icon || MoreHorizontal;
					const selectedCount = getCategorySelectedCount(category);
					const categoryState = getCategoryState(category);
					return /* @__PURE__ */ jsxs(AccordionItem, {
						value: category,
						className: cn("border-b", categoryIndex === categoryKeys.length - 1 && "border-b-0"),
						children: [/* @__PURE__ */ jsxs(AccordionHeader, {
							className: "flex w-full min-w-0 items-stretch",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex shrink-0 items-center self-center py-4 ps-1 pe-2",
								children: /* @__PURE__ */ jsx(Checkbox, {
									checked: categoryState === "checked" ? true : categoryState === "indeterminate" ? "indeterminate" : false,
									onCheckedChange: (checked) => {
										handleCategoryToggle(category, checked === true);
									},
									disabled
								})
							}), /* @__PURE__ */ jsx(AccordionRowTrigger, {
								className: "hover:no-underline min-w-0 flex-1",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 flex-1 items-center justify-between pe-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 items-center gap-3",
										children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: t(category)
										})]
									}), /* @__PURE__ */ jsxs(Badge, {
										variant: "secondary",
										className: "shrink-0 text-[12px]",
										children: [
											selectedCount,
											" ",
											selectedCount === 1 ? t("Scope") : t("Scopes")
										]
									})]
								})
							})]
						}), /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", {
							className: "space-y-2 pt-2",
							children: categoryScopes.map((scopeDef) => {
								const isSelected = displayScopes.includes(scopeDef.scope);
								return /* @__PURE__ */ jsxs("label", {
									className: cn("flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors", "hover:bg-accent/50 cursor-pointer", disabled && "cursor-not-allowed opacity-50"),
									children: [/* @__PURE__ */ jsx(Checkbox, {
										checked: isSelected,
										onCheckedChange: (checked) => {
											handleScopeToggle(scopeDef.scope, checked === true);
										},
										disabled,
										className: "mt-0.5"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 space-y-0.5",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-2 text-[13px] font-mono text-foreground",
											children: [/* @__PURE__ */ jsx("span", { children: scopeDef.scope }), scopeDef.deprecated ? /* @__PURE__ */ jsx(Badge, {
												variant: "warning",
												className: "text-[10px] shrink-0",
												children: t("Deprecated")
											}) : null]
										}), /* @__PURE__ */ jsx("div", {
											className: "text-[12px] text-muted-foreground",
											children: t(scopeDef.description)
										})]
									})]
								}, scopeDef.scope);
							})
						}) })]
					}, category);
				})
			})
		]
	});
}
export { ScopeEditor as t };
