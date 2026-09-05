import { f as useDebugOverrides } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { s as getEnvProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as InitWordmark } from "./InitWordmark-DLiURix2.js";
import { t as getInitOrgPromoBannerContent } from "./org-promo-banner-D8oCrFdK.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
var BADGE_VARIANT = {
	before: "info",
	during: "success",
	after: "info"
};
function InitOrgPromoBannerLink({ cta, className, children }) {
	if (cta.to) return /* @__PURE__ */ jsx(Link, {
		to: cta.to,
		className,
		children
	});
	if (cta.href) return /* @__PURE__ */ jsx("a", {
		href: cta.href,
		target: cta.external !== false ? "_blank" : void 0,
		rel: cta.external !== false ? "noopener noreferrer" : void 0,
		className,
		children
	});
	return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
}
function InitOrgPromoBanner() {
	const t = useT();
	const { mockInitCurrentDay } = useDebugOverrides();
	const content = useMemo(() => {
		if (!getEnvProfileFeatures().init) return null;
		return getInitOrgPromoBannerContent({ mockCurrentDay: mockInitCurrentDay });
	}, [mockInitCurrentDay]);
	if (!content) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full shrink-0 overflow-hidden border-b border-border bg-background",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px] opacity-60"
		}), /* @__PURE__ */ jsxs(InitOrgPromoBannerLink, {
			cta: content.cta,
			className: "group/banner relative flex h-14 w-full cursor-pointer items-center justify-center gap-2 px-4 sm:gap-2.5 sm:px-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 bg-muted/0 transition-colors duration-300 ease-out group-hover/banner:bg-muted/30"
				}),
				/* @__PURE__ */ jsx(InitWordmark, { className: "relative z-10 shrink-0 text-[20px] text-foreground transition-colors duration-300 ease-out group-hover/banner:text-foreground sm:text-[22px]" }),
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: "relative z-10 hidden shrink-0 text-muted-foreground/40 sm:inline",
					children: "·"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "relative z-10 hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:inline",
					children: content.dateRangeLabel
				}),
				content.badgeLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: "relative z-10 hidden shrink-0 text-muted-foreground/40 md:inline",
					children: "·"
				}), /* @__PURE__ */ jsx(Badge, {
					variant: BADGE_VARIANT[content.phase],
					className: "relative z-10 text-[10px] shrink-0",
					children: t(content.badgeLabel)
				})] }) : null,
				/* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					className: "relative z-10 hidden shrink-0 text-muted-foreground/40 sm:inline",
					children: "·"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "relative z-10 min-w-0 truncate text-[13px] text-muted-foreground transition-colors duration-300 ease-out group-hover/banner:text-foreground/80",
					children: t(content.message)
				})
			]
		})]
	});
}
export { InitOrgPromoBanner as t };
