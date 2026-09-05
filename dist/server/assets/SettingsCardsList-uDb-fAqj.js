import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as matchesSettingsSearch, i as useSettingsSearch } from "./SettingsSearchContext-DPkuZW4D.js";
import { jsx } from "react/jsx-runtime";
import { Fragment as Fragment$1, useMemo } from "react";
function SettingsCardsList({ cards, className, emptyMessage = "No matching settings" }) {
	const t = useT();
	const { query, deferEmptyResults } = useSettingsSearch();
	const visible = useMemo(() => {
		const q = query.trim();
		if (!q || deferEmptyResults) return cards;
		return cards.filter((card) => matchesSettingsSearch(q, card.search));
	}, [
		cards,
		query,
		deferEmptyResults
	]);
	if (visible.length === 0 && query.trim() && !deferEmptyResults) return /* @__PURE__ */ jsx("p", {
		className: "py-8 text-center text-[13px] text-muted-foreground",
		children: t(emptyMessage)
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("space-y-6", className),
		children: visible.map((card) => /* @__PURE__ */ jsx(Fragment$1, { children: card.node }, card.id))
	});
}
export { SettingsCardsList as t };
