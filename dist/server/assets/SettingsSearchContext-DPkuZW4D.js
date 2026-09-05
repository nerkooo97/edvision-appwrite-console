import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from "react";
function normalizeQuery(query) {
	return query.trim().toLowerCase();
}
function searchableText(fields) {
	return [
		fields.title,
		fields.description ?? "",
		...fields.keywords ?? []
	].join(" ").toLowerCase();
}
function matchesSettingsSearch(query, fields) {
	const q = normalizeQuery(query);
	if (!q) return true;
	const haystack = searchableText(fields);
	if (haystack.includes(q)) return true;
	return q.split(/\s+/).filter(Boolean).every((token) => haystack.includes(token));
}
function sectionHasMatchingCards(query, sectionId, cardIndex) {
	const q = normalizeQuery(query);
	if (!q) return true;
	return cardIndex.some((card) => card.sectionId === sectionId && matchesSettingsSearch(q, card));
}
var SettingsSearchContext = createContext(null);
var DeferEmptyResultsContext = createContext(false);
function SettingsSearchProvider({ query, onQueryChange, children }) {
	const value = useMemo(() => ({
		query,
		setQuery: onQueryChange
	}), [query, onQueryChange]);
	return /* @__PURE__ */ jsx(SettingsSearchContext.Provider, {
		value,
		children
	});
}
function SettingsSearchProviderLocal({ children }) {
	const [query, setQuery] = useState("");
	return /* @__PURE__ */ jsx(SettingsSearchProvider, {
		query,
		onQueryChange: setQuery,
		children
	});
}
function DeferEmptyResultsProvider({ deferEmptyResults, children }) {
	return /* @__PURE__ */ jsx(DeferEmptyResultsContext.Provider, {
		value: deferEmptyResults,
		children
	});
}
function useSettingsSearch() {
	const ctx = useContext(SettingsSearchContext);
	const deferEmptyResults = useContext(DeferEmptyResultsContext);
	if (!ctx) throw new Error("useSettingsSearch must be used within SettingsSearchProvider");
	return {
		...ctx,
		deferEmptyResults
	};
}
export { matchesSettingsSearch as a, useSettingsSearch as i, SettingsSearchProvider as n, sectionHasMatchingCards as o, SettingsSearchProviderLocal as r, DeferEmptyResultsProvider as t };
