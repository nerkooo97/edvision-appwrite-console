import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./console-profiles-D__E5Kgi.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import "./ThinkingBubble-U48KAaRY.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import "./prose-typography-BMJgwhz7.js";
import "./table-CsPM4E9L.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./alert-BTaNwkUC.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./accordion-DmQmnCa5.js";
import "./use-user-os-Cwg5asTC.js";
import "./ImagePreviewGallery-CuJmaZOR.js";
import "./Youtube-pQDzLroP.js";
import "./prose-typography-DB73MMim.js";
import "./frontmatter-9RsCswLb.js";
import "./link-styles-DzUNTdI9.js";
import "./prose-link-DLbkQskb.js";
import "./DocsHeadingLink-ACXvhwfq.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import { t as formatDate } from "./date-utils-C_g8GS8c.js";
import "./content-NlXhGy_g.js";
import "./nav-badge-CqWauT26.js";
import "./server-analytics-C9eyNcYe.js";
import "./content-BLzUgV00.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./seo-BkUvL66S.js";
import "./seo-DoyhjBE_.js";
import { t as Route$1 } from "./changelog.entry._entry-Bo76g93i.js";
import { n as MarketingCtaSection, r as MarketingCtaSignupButtons } from "./MarketingSections-Dg1QJnZV.js";
import { t as ChangelogMarkdown } from "./ChangelogMarkdown-BiBlRG_b.js";
import { t as ChangelogSeenSync } from "./ChangelogSeenSync-CycEyzdk.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
function DetailView({ entry }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ jsx("section", {
			className: "border-b border-border py-10 sm:py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-[42.5rem] px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-9 px-0 text-[13px] text-muted-foreground",
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/changelog",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), "Back to Changelog"]
						})
					}),
					/* @__PURE__ */ jsxs("header", {
						className: "mt-8 border-y border-border py-4",
						children: [/* @__PURE__ */ jsx("time", {
							className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
							dateTime: entry.date,
							children: formatDate(entry.date)
						}), /* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-aeonik-pro text-[26px] font-normal leading-tight text-foreground sm:text-[30px]",
							children: entry.title
						})]
					}),
					entry.cover ? /* @__PURE__ */ jsx("div", {
						className: "mt-8 overflow-hidden rounded-xl border border-border bg-card/40",
						children: /* @__PURE__ */ jsx("img", {
							src: entry.cover,
							alt: "",
							className: "block w-full",
							loading: "lazy"
						})
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: /* @__PURE__ */ jsx(ChangelogMarkdown, { content: entry.content })
					})
				]
			})
		}), /* @__PURE__ */ jsx(MarketingCtaSection, {
			title: "Ready to build?",
			children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
		})]
	});
}
function ChangelogEntryPage() {
	const { entry } = Route$1.useLoaderData();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ChangelogSeenSync, {}), /* @__PURE__ */ jsx(DetailView, { entry })] });
}
export { ChangelogEntryPage as component };
