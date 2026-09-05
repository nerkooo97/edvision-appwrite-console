import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
function ComingSoonView({ title, comingSoon }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-[400px] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted ring-1 ring-border",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-xl",
						children: "🚧"
					})
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mb-1.5 text-[15px] font-medium text-foreground",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: comingSoon ? t("This feature is coming soon") : t("This section is under construction")
				})
			]
		})
	});
}
function AdvisorPage() {
	return /* @__PURE__ */ jsx(ComingSoonView, { title: "Advisor" });
}
export { AdvisorPage as component };
