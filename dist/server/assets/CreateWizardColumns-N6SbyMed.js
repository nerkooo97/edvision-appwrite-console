import { n as useT } from "./translate-DZcqveGn.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
function CreateWizardLeftColumn({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 min-w-0 flex-col lg:col-span-2",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 shrink-0 text-[14px] font-semibold text-foreground",
			children: useT()(title)
		}), /* @__PURE__ */ jsx("div", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col",
			children
		})]
	});
}
function CreateWizardRightColumn({ title = "Clone template", search, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 min-w-0 flex-col lg:col-span-3",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 shrink-0 text-[14px] font-semibold text-foreground",
			children: t(title)
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col",
			children: [search ? /* @__PURE__ */ jsx("div", {
				className: "mb-4 shrink-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
						value: search.value,
						onChange: (e) => search.onChange(e.target.value),
						placeholder: t(search.placeholder ?? "Search templates..."),
						className: "h-9 ps-9 text-[13px]"
					})]
				})
			}) : null, /* @__PURE__ */ jsx("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain",
				children
			})]
		})]
	});
}
export { CreateWizardRightColumn as n, CreateWizardLeftColumn as t };
