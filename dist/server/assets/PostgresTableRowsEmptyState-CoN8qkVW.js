import { n as useT } from "./translate-DZcqveGn.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { jsx } from "react/jsx-runtime";
import { Play, Table2 } from "lucide-react";
function SqlWorkbenchPanelEmptyState({ variant }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-0 flex-1 w-full items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-sm",
			children: variant === "query-no-rows" ? /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: Table2,
				iconSize: "md",
				title: t("No results for query"),
				description: t("The query completed successfully but did not return any data."),
				isEmpty: true,
				className: "w-full"
			}) : /* @__PURE__ */ jsx(EmptyState, {
				variant: "centered",
				icon: Play,
				iconClassName: "fill-current",
				iconSize: "md",
				title: t("No query results yet"),
				description: t("Write SQL in the editor above and run your query. Results will appear in this panel."),
				isEmpty: true,
				className: "w-full"
			})
		})
	});
}
function PostgresTableRowsEmptyState() {
	return /* @__PURE__ */ jsx(SqlWorkbenchPanelEmptyState, { variant: "query-no-rows" });
}
export { SqlWorkbenchPanelEmptyState as n, PostgresTableRowsEmptyState as t };
