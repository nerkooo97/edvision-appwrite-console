import { t as MARKETING_SOCIAL_STATS } from "./social-stats-X1CQqP0k.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as MarketingCtaSection } from "./MarketingSections-Dg1QJnZV.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function ThreadsPreFooter() {
	return /* @__PURE__ */ jsxs(MarketingCtaSection, {
		title: "Need support?",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "brandCta",
			size: "lg",
			className: "h-10 text-[14px]",
			asChild: true,
			children: /* @__PURE__ */ jsx("a", {
				href: MARKETING_SOCIAL_STATS.discord.link,
				target: "_blank",
				rel: "noopener noreferrer",
				children: "Join Discord"
			})
		}), /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			size: "lg",
			className: "h-10 text-[14px]",
			asChild: true,
			children: /* @__PURE__ */ jsx(Link, {
				to: "/pricing",
				children: "Get premium support"
			})
		})]
	});
}
export { ThreadsPreFooter as t };
