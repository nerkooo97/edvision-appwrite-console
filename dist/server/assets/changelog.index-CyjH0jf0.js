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
import { r as getChangelogEntriesPage } from "./content-NlXhGy_g.js";
import "./nav-badge-CqWauT26.js";
import "./content-BLzUgV00.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./route-meta-CfD66bzz.js";
import "./seo-BkUvL66S.js";
import "./seo-DoyhjBE_.js";
import { t as Route } from "./changelog.index-CpCgCvBj.js";
import { a as MarketingHeroSection, n as MarketingCtaSection, r as MarketingCtaSignupButtons } from "./MarketingSections-Dg1QJnZV.js";
import { t as ChangelogMarkdown } from "./ChangelogMarkdown-BiBlRG_b.js";
import { t as ChangelogSeenSync } from "./ChangelogSeenSync-CycEyzdk.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function ChangelogEntryCard({ entry }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "grid min-w-0 gap-5",
		children: [
			/* @__PURE__ */ jsx("time", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				dateTime: entry.date,
				children: formatDate(entry.date)
			}),
			entry.cover ? /* @__PURE__ */ jsx(Link, {
				to: "/changelog/entry/$entry",
				params: { entry: entry.slug },
				className: "block overflow-hidden rounded-xl border border-border bg-card/40",
				children: /* @__PURE__ */ jsx("img", {
					src: entry.cover,
					alt: "",
					loading: "lazy",
					className: "aspect-video w-full object-cover"
				})
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 overflow-x-clip px-4 sm:px-0",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-8 font-aeonik-pro text-[22px] font-normal leading-tight text-foreground sm:text-[24px]",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/changelog/entry/$entry",
						params: { entry: entry.slug },
						className: "transition-colors hover:text-foreground/80",
						children: entry.title
					})
				}), /* @__PURE__ */ jsx(ChangelogMarkdown, { content: entry.content })]
			})
		]
	});
}
function ChangelogTimeline({ initialEntries, initialNextPage }) {
	const [entries, setEntries] = useState(initialEntries);
	const [nextPage, setNextPage] = useState(initialNextPage);
	function loadMore() {
		if (!nextPage) return;
		const { entries: nextEntries, nextPage: followingPage } = getChangelogEntriesPage(nextPage);
		setEntries(nextEntries);
		setNextPage(followingPage);
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("ol", {
		className: "relative grid min-w-0 gap-20 border-s border-border ps-8 sm:ps-0 sm:[&>li]:ps-8",
		children: entries.map((entry) => /* @__PURE__ */ jsxs("li", {
			className: "relative min-w-0",
			children: [/* @__PURE__ */ jsx("span", {
				className: "absolute start-0 top-1 hidden size-2.5 -translate-x-1/2 rounded-full border-2 border-border bg-background sm:block",
				"aria-hidden": true
			}), /* @__PURE__ */ jsx(ChangelogEntryCard, { entry })]
		}, entry.slug))
	}), nextPage ? /* @__PURE__ */ jsx("div", {
		className: "mt-20 flex justify-center",
		children: /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			className: "min-w-44",
			onClick: loadMore,
			children: "Load more"
		})
	}) : null] });
}
function View({ entries, nextPage }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				title: "Changelog",
				description: "Explore Appwrite's changelog to stay on top of all the product updates and track our journey.",
				align: "left"
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-[49.375rem] px-4 sm:px-6",
					children: /* @__PURE__ */ jsx(ChangelogTimeline, {
						initialEntries: entries,
						initialNextPage: nextPage
					})
				})
			}),
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: "Ready to build?",
				children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
			})
		]
	});
}
function ChangelogPage() {
	const { entries, nextPage } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ChangelogSeenSync, {}), /* @__PURE__ */ jsx(View, {
		entries,
		nextPage
	})] });
}
export { ChangelogPage as component };
