import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./context-menu-D55xedo-.js";
import "./prose-typography-BMJgwhz7.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./textarea-CfKMnSVC.js";
import "./sheet-CbM5lIV1.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./agent-docs-feature-COYbd_m1.js";
import "./navigation-BOrhbgOp.js";
import "./link-styles-DzUNTdI9.js";
import "./prose-link-DLbkQskb.js";
import "./DocsHeadingLink-ACXvhwfq.js";
import { s as docsGridTwoCol } from "./docs-container-qv9gqb9G.js";
import "./nav-styles-B9rWOQql.js";
import "./nav-styles-BnkuEWRE.js";
import "./manifest-THOJt7eC.js";
import { t as getTutorialsHubCategories } from "./tutorials-hub-CuQnFF75.js";
import "./feedback-BwuMSGir.js";
import "./use-article-sticky-overlay-BWMK17-U.js";
import "./DocsSectionSubnav-DjZ_YztL.js";
import { t as DocsLayout } from "./DocsLayout-t9FmNqQ4.js";
import { n as getHubCategoryTocItem, t as DocsHubCategorySection } from "./DocsHubCategorySection-B3ONEAgm.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
function View() {
	const categories = useMemo(() => getTutorialsHubCategories(), []);
	return /* @__PURE__ */ jsx(DocsLayout, {
		slug: "tutorials",
		title: "Tutorials",
		description: "Follow a simple tutorial to get started with Appwrite in your preferred framework quickly and easily.",
		toc: useMemo(() => categories.map((category) => getHubCategoryTocItem(category.title)), [categories]),
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-12",
			children: categories.map((category) => /* @__PURE__ */ jsx(DocsHubCategorySection, {
				title: category.title,
				children: /* @__PURE__ */ jsx("ul", {
					className: cn("grid gap-3", docsGridTwoCol),
					children: category.tutorials.map((tutorial) => /* @__PURE__ */ jsx("li", { children: tutorial.draft ? /* @__PURE__ */ jsxs("div", {
						"aria-disabled": true,
						className: cn("block rounded-xl border border-border bg-card/45 px-4 py-4 opacity-70"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground",
								children: tutorial.framework
							}), /* @__PURE__ */ jsx(Badge, {
								variant: "inactive",
								className: "text-[10px] shrink-0",
								children: "Coming soon"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: tutorial.title
						})]
					}) : /* @__PURE__ */ jsxs(DocsRouteLink, {
						href: tutorial.href,
						className: "block rounded-xl border border-border bg-card/45 px-4 py-4 transition-colors hover:bg-accent/15",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] font-medium text-foreground",
							children: tutorial.framework
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: tutorial.title
						})]
					}) }, tutorial.href))
				})
			}, category.title))
		})
	});
}
var SplitComponent = View;
export { SplitComponent as component };
