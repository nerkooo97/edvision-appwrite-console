import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function UpgradePlanLink({ orgId, children = "Upgrade your plan", className }) {
	const t = useT();
	const linkClassName = cn("link-neutral", className);
	const content = typeof children === "string" ? t(children) : children;
	if (!getActiveProfileFeatures().billing) return /* @__PURE__ */ jsx("span", {
		className: linkClassName,
		children: content
	});
	if (orgId) return /* @__PURE__ */ jsx(Link, {
		to: "/upgrade",
		search: { orgId },
		className: linkClassName,
		...analyticsAttrs("upgrade-clicked"),
		children: content
	});
	return /* @__PURE__ */ jsx(Link, {
		to: "/upgrade",
		className: linkClassName,
		...analyticsAttrs("upgrade-clicked"),
		children: content
	});
}
export { UpgradePlanLink as t };
