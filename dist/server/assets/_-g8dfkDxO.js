import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { o as DOCS_PROSE_DETAIL_CLASSES, s as DOCS_PROSE_WRAPPER_CLASS } from "./prose-typography-BMJgwhz7.js";
import { a as MCP_SELF_HOSTED_DOCS_URL, s as MCP_SERVER_URL } from "./mcp-CgjPVMsn.js";
import { a as APPWRITE_AGENT_SKILLS_REPO, c as APPWRITE_MCP_SERVER_CARD_PATH, i as APPWRITE_AGENT_SKILLS_INSTALL, n as APPWRITE_AGENT_SKILLS, o as APPWRITE_AI_CATALOG_PATH, r as APPWRITE_AGENT_SKILLS_DISCOVERY_PATH, s as APPWRITE_MCP_DOCS_PATH } from "./agent-discovery-SMCX1bvP.js";
import { i as isAgentDocsSlug, t as isAgentDocsEnabled } from "./agent-docs-feature-COYbd_m1.js";
import { d as isFirewallDocsSlug, l as isFirewallDocsEnabled, n as isDocsNavGroup, s as getAllDocsSectionNavs } from "./navigation-BOrhbgOp.js";
import { i as shouldBlockPartnersDocs, r as isPartnersDocsSlug, t as isPartnersDocsEnabled } from "./partners-docs-feature-C-dnxcxd.js";
import { n as ImagePreviewGalleryProvider } from "./ImagePreviewGallery-CuJmaZOR.js";
import { C as MultiCode, E as docsMarkdocConfig, S as TabsItem, T as CardsItem, _ as Info$1, a as DocsLink, b as Fence, c as MarkdocTableCell, d as MarkdocTableRoot, f as MarkdocTableRow, g as DocsImage, h as OnlyLight, i as Blockquote, l as MarkdocTableHead, m as OnlyDark, n as MarkdocAccordion, o as Heading, p as MarkdocTableTag, r as MarkdocAccordionItem, s as MarkdocTableBody, t as MarkdocYoutube, u as MarkdocTableHeader, v as MarkdocIcon, w as Cards, x as Tabs, y as MarkdocIconImage } from "./Youtube-pQDzLroP.js";
import { c as extractDocsToc } from "./frontmatter-9RsCswLb.js";
import { n as stripFrontmatter, r as markdocToMarkdown, t as parseFrontmatterString } from "./frontmatter-CpHldQ8H.js";
import { n as DOCS_PAGE_MAP, t as DOCS_PAGES } from "./manifest-THOJt7eC.js";
import { n as getAllChangelogEntries } from "./content-NlXhGy_g.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { f as getPublicBlogPosts } from "./content-BLzUgV00.js";
import { t as getAllIntegrationMeta } from "./content-BNDqilSS.js";
import { n as getDocsArticleSchema, r as getDocsBreadcrumbSchema, t as getDocsMetaTags } from "./route-meta-B5-isquS.js";
import { t as getLegacyRedirectTarget } from "./legacy-redirects-DXrxvtwB.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute, lazyRouteComponent, notFound, redirect } from "@tanstack/react-router";
import React, { createContext, useContext, useMemo, useState } from "react";
import { toast } from "sonner";
import { Copy, ExternalLink } from "lucide-react";
import Markdoc from "@markdoc/markdoc";
const DOCS_CONTENT_HMR_EVENT = "docs-content-hmr";
var DocsPromptContext = createContext({ promptText: null });
function DocsPromptProvider({ promptText, children }) {
	return /* @__PURE__ */ jsx(DocsPromptContext.Provider, {
		value: { promptText },
		children
	});
}
function useDocsPrompt() {
	return useContext(DocsPromptContext);
}
function PromptContentMarkdoc() {
	const { promptText } = useDocsPrompt();
	if (!promptText?.trim()) return null;
	return renderDocsMarkdocReact(promptText, false);
}
var baseMarkdocComponents = {
	MultiCode,
	Fence,
	Tabs,
	TabsItem,
	MarkdocIcon,
	MarkdocIconImage,
	Link: DocsLink,
	Image: DocsImage,
	OnlyLight,
	OnlyDark,
	Blockquote,
	MarkdocTableTag,
	MarkdocTableRoot,
	MarkdocTableHeader,
	MarkdocTableBody,
	MarkdocTableRow,
	MarkdocTableHead,
	MarkdocTableCell,
	Section: () => null,
	ArrowLink: ({ href, title }) => /* @__PURE__ */ jsx(DocsLink, {
		href,
		children: title
	}),
	CallToAction: ({ href, title }) => /* @__PURE__ */ jsx("div", {
		className: "not-prose my-6",
		children: /* @__PURE__ */ jsx("a", {
			href,
			className: "inline-flex items-center rounded-lg bg-[var(--brand-cta)] px-4 py-2 text-[13px] font-medium text-white hover:opacity-90",
			children: title
		})
	}),
	PromptContent: PromptContentMarkdoc,
	Video: ({ src, title }) => /* @__PURE__ */ jsx("div", {
		className: "not-prose my-6 overflow-hidden rounded-xl border border-border",
		children: /* @__PURE__ */ jsx("video", {
			src,
			controls: true,
			className: "w-full",
			title
		})
	}),
	Youtube: MarkdocYoutube
};
function createDocsMarkdocComponents(compact) {
	return {
		...baseMarkdocComponents,
		Info: (props) => /* @__PURE__ */ jsx(Info$1, {
			...props,
			compact
		}),
		Cards,
		CardsItem: (props) => /* @__PURE__ */ jsx(CardsItem, {
			...props,
			compact
		}),
		Heading: (props) => /* @__PURE__ */ jsx(Heading, {
			...props,
			compact
		}),
		Accordion: MarkdocAccordion,
		AccordionItem: (props) => /* @__PURE__ */ jsx(MarkdocAccordionItem, {
			...props,
			compact
		})
	};
}
function renderDocsMarkdocReact(content, compact = false) {
	const ast = Markdoc.parse(content);
	const transformed = Markdoc.transform(ast, docsMarkdocConfig);
	return Markdoc.renderers.react(transformed, React, { components: createDocsMarkdocComponents(compact) });
}
function DocsMarkdown({ content, compact = false }) {
	const rendered = useMemo(() => renderDocsMarkdocReact(content, compact), [content, compact]);
	return /* @__PURE__ */ jsx(ImagePreviewGalleryProvider, { children: /* @__PURE__ */ jsx("div", {
		className: cn(DOCS_PROSE_WRAPPER_CLASS, ...DOCS_PROSE_DETAIL_CLASSES, compact && "text-[14px] leading-[1.65] @[480px]:text-[15px]"),
		children: rendered
	}) });
}
function DocsPageHeaderActions({ slug, buttonClassName = "h-9 text-[13px]", showCopyPage = true }) {
	const [copying, setCopying] = useState(false);
	const markdownUrl = slug ? `/docs/${slug}.md` : "/docs.md";
	const handleCopyMarkdown = async () => {
		setCopying(true);
		try {
			const text = await (await fetch(markdownUrl)).text();
			await navigator.clipboard.writeText(text);
			toast.success("Copied to clipboard");
		} catch {
			toast.error("Failed to copy");
		} finally {
			setCopying(false);
		}
	};
	return /* @__PURE__ */ jsx(Fragment, { children: showCopyPage ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
		variant: "outline",
		size: "sm",
		className: buttonClassName,
		onClick: handleCopyMarkdown,
		disabled: copying,
		children: [/* @__PURE__ */ jsx(Copy, { className: "me-1.5 size-3.5" }), "Copy"]
	}), /* @__PURE__ */ jsx(Button, {
		variant: "outline",
		size: "sm",
		className: buttonClassName,
		asChild: true,
		children: /* @__PURE__ */ jsxs("a", {
			href: markdownUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			children: [/* @__PURE__ */ jsx(ExternalLink, { className: "me-1.5 size-3.5" }), "Raw"]
		})
	})] }) : null });
}
var partialLoaders = {
	"/src/content/docs-partials/account-vs-user.md": () => import("./account-vs-user-Pccx5SpF.js").then((m) => m.default),
	"/src/content/docs-partials/auth-events.md": () => import("./auth-events-CVAHuEvt.js").then((m) => m.default),
	"/src/content/docs-partials/auth-security.md": () => import("./auth-security-89pFtM7L.js").then((m) => m.default),
	"/src/content/docs-partials/cli-disclaimer.md": () => import("./cli-disclaimer-C0oempti.js").then((m) => m.default),
	"/src/content/docs-partials/cli-function.md": () => import("./cli-function-1YcsA57a.js").then((m) => m.default),
	"/src/content/docs-partials/cli-push-command.md": () => import("./cli-push-command-D1yHV2j4.js").then((m) => m.default),
	"/src/content/docs-partials/cli-sites.md": () => import("./cli-sites-BKU2qNbS.js").then((m) => m.default),
	"/src/content/docs-partials/configure-github-app.md": () => import("./configure-github-app-BRcC6v-9.js").then((m) => m.default),
	"/src/content/docs-partials/databases-events.md": () => import("./databases-events-D9scq6d3.js").then((m) => m.default),
	"/src/content/docs-partials/functions-env-vars.md": () => import("./functions-env-vars-CQ9EYuZ_.js").then((m) => m.default),
	"/src/content/docs-partials/functions-events.md": () => import("./functions-events-6RoT-uz8.js").then((m) => m.default),
	"/src/content/docs-partials/git-glob-patterns.md": () => import("./git-glob-patterns-CekVVqAu.js").then((m) => m.default),
	"/src/content/docs-partials/mcp-add-ides-tools.md": () => import("./mcp-add-ides-tools--9y67SbT.js").then((m) => m.default),
	"/src/content/docs-partials/messaging-events.md": () => import("./messaging-events-DTijG7cH.js").then((m) => m.default),
	"/src/content/docs-partials/note-on-cors.md": () => import("./note-on-cors-DF5nXwxZ.js").then((m) => m.default),
	"/src/content/docs-partials/policy-contact-us.md": () => import("./policy-contact-us-CJg0qSVA.js").then((m) => m.default),
	"/src/content/docs-partials/policy-modifications.md": () => import("./policy-modifications-DFDII-SP.js").then((m) => m.default),
	"/src/content/docs-partials/prohibited-activities.md": () => import("./prohibited-activities-BnOobbzI.js").then((m) => m.default),
	"/src/content/docs-partials/resource-limits.md": () => import("./resource-limits-Dn5MlrAn.js").then((m) => m.default),
	"/src/content/docs-partials/sites-env-vars.md": () => import("./sites-env-vars-BQn9Yoaa.js").then((m) => m.default),
	"/src/content/docs-partials/sites-events.md": () => import("./sites-events-3mgIMMkW.js").then((m) => m.default),
	"/src/content/docs-partials/storage-events.md": () => import("./storage-events-CRh42pDi.js").then((m) => m.default),
	"/src/content/docs-partials/test.md": () => import("./test-WxeqrVRo.js").then((m) => m.default),
	"/src/content/docs-partials/update-variables.md": () => import("./update-variables-DpsQod8k.js").then((m) => m.default)
};
var partialPathByFileName = /* @__PURE__ */ new Map();
for (const modulePath of Object.keys(partialLoaders)) {
	const fileName = modulePath.split("/").pop();
	if (fileName) partialPathByFileName.set(fileName, modulePath);
}
var partialCache = /* @__PURE__ */ new Map();
async function loadPartial(fileName) {
	{
		const cached = partialCache.get(fileName);
		if (cached !== void 0) return cached;
	}
	const modulePath = partialPathByFileName.get(fileName);
	if (!modulePath) {
		partialCache.set(fileName, "");
		return "";
	}
	const loader = partialLoaders[modulePath];
	if (!loader) {
		partialCache.set(fileName, "");
		return "";
	}
	const content = await loader();
	partialCache.set(fileName, content);
	return content;
}
function resolvePartials(content) {
	return content.replace(/\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g, (_, fileName) => {
		return partialCache.get(fileName) ?? "";
	});
}
async function preloadPartialsForContent(content) {
	const partialRegex = /\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g;
	const fileNames = /* @__PURE__ */ new Set();
	for (const match of content.matchAll(partialRegex)) fileNames.add(match[1]);
	await Promise.all([...fileNames].map((fileName) => loadPartial(fileName)));
}
var importedContentLoaders = {
	"/src/content/docs/advanced/billing/abuse/index.markdoc": () => import("./abuse-B1OIv1n3.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/compute/index.markdoc": () => import("./compute-lT10W7oM.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/database-reads-and-writes/index.markdoc": () => import("./database-reads-and-writes-DAS8hM7-.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/enterprise/index.markdoc": () => import("./enterprise-BnMBVXcD.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/fair-use-policy/index.markdoc": () => import("./fair-use-policy-DtZvNTBE.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/free/index.markdoc": () => import("./free-PeWJsh1z.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/image-transformations/index.markdoc": () => import("./image-transformations-Cta1ZOlZ.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/index.markdoc": () => import("./billing-CVadjpHX.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/oss/index.markdoc": () => import("./oss-C7tb9mFT.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/payments/index.markdoc": () => import("./payments-D5xwnhfI.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/phone-otp/index.markdoc": () => import("./phone-otp-Bnqg6YWU.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/pro/index.markdoc": () => import("./pro-CsVSa9Mu.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/refund-policy/index.markdoc": () => import("./refund-policy-DUnDwY7u.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/support-sla/index.markdoc": () => import("./support-sla-D1gQkjIz.js").then((m) => m.default),
	"/src/content/docs/advanced/billing/uptime-sla/index.markdoc": () => import("./uptime-sla-B2pAdvD8.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/cloud/index.markdoc": () => import("./cloud-CJnR9Qzz.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/firebase/index.markdoc": () => import("./firebase-D_dz2IIj.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/index.markdoc": () => import("./migrations-DVUKrvfK.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/nhost/index.markdoc": () => import("./nhost-TiSjbLnA.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/self-hosted/index.markdoc": () => import("./self-hosted-BqeTZ2Vi.js").then((m) => m.default),
	"/src/content/docs/advanced/migrations/supabase/index.markdoc": () => import("./supabase-DeQLHAsX.js").then((m) => m.default),
	"/src/content/docs/advanced/security/abuse-protection/index.markdoc": () => import("./abuse-protection-LIxZ69tB.js").then((m) => m.default),
	"/src/content/docs/advanced/security/audit-logs/index.markdoc": () => import("./audit-logs-eDUk4LON.js").then((m) => m.default),
	"/src/content/docs/advanced/security/authentication/index.markdoc": () => import("./authentication-Bo7RQ6lx.js").then((m) => m.default),
	"/src/content/docs/advanced/security/backups/index.markdoc": () => import("./backups-C6RKwtf6.js").then((m) => m.default),
	"/src/content/docs/advanced/security/ccpa/index.markdoc": () => import("./ccpa-C9PT82WF.js").then((m) => m.default),
	"/src/content/docs/advanced/security/dev-keys/index.markdoc": () => import("./dev-keys-D4fCm2KL.js").then((m) => m.default),
	"/src/content/docs/advanced/security/encryption/index.markdoc": () => import("./encryption-DLnq4DIj.js").then((m) => m.default),
	"/src/content/docs/advanced/security/gdpr/index.markdoc": () => import("./gdpr-xX1C_4C2.js").then((m) => m.default),
	"/src/content/docs/advanced/security/hipaa/index.markdoc": () => import("./hipaa-CPlD1glD.js").then((m) => m.default),
	"/src/content/docs/advanced/security/https/index.markdoc": () => import("./https-CgiqWVAz.js").then((m) => m.default),
	"/src/content/docs/advanced/security/index.markdoc": () => import("./security-FVxS-7NT.js").then((m) => m.default),
	"/src/content/docs/advanced/security/mfa/index.markdoc": () => import("./mfa-MSAM2KLb.js").then((m) => m.default),
	"/src/content/docs/advanced/security/pci/index.markdoc": () => import("./pci-Ciy_7N2L.js").then((m) => m.default),
	"/src/content/docs/advanced/security/penetration-tests/index.markdoc": () => import("./penetration-tests-C99agiJS.js").then((m) => m.default),
	"/src/content/docs/advanced/security/permissions/index.markdoc": () => import("./permissions-Dg26txwh.js").then((m) => m.default),
	"/src/content/docs/advanced/security/rate-limits/index.markdoc": () => import("./rate-limits-DBEHYYrJ.js").then((m) => m.default),
	"/src/content/docs/advanced/security/roles/index.markdoc": () => import("./roles-BgcweGmd.js").then((m) => m.default),
	"/src/content/docs/advanced/security/soc2/index.markdoc": () => import("./soc2-CqxNpk1_.js").then((m) => m.default),
	"/src/content/docs/advanced/security/tls/index.markdoc": () => import("./tls-D6pRGO5_.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/databases/index.markdoc": () => import("./databases-z-vzTp6Q.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/email/index.markdoc": () => import("./email-DAX7_mOo.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/environment-variables/index.markdoc": () => import("./environment-variables-6COzZ-vh.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/functions/index.markdoc": () => import("./functions-ChR95gr8.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/sites/index.markdoc": () => import("./sites-CK30fSSB.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/sms/index.markdoc": () => import("./sms-D664Ze1L.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/storage/index.markdoc": () => import("./storage-BdgGyrU3.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/tls-certificates/index.markdoc": () => import("./tls-certificates-CirNg51U.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/configuration/version-control/index.markdoc": () => import("./version-control-D7xiTTLc.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/index.markdoc": () => import("./self-hosting-BFe5mPNC.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/installation/index.markdoc": () => import("./installation-CU9FqVbW.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/aws/index.markdoc": () => import("./aws-Cthi7p_g.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/azure/index.markdoc": () => import("./azure-B9rZPdPO.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/coolify/index.markdoc": () => import("./coolify-B1k1K6UN.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/digitalocean/index.markdoc": () => import("./digitalocean-CosMwOl5.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/dokploy/index.markdoc": () => import("./dokploy-BX13G8VH.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/platforms/google-cloud/index.markdoc": () => import("./google-cloud-Dpq3dPHN.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/backups/index.markdoc": () => import("./backups-CkMX-Ty0.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/debugging/index.markdoc": () => import("./debugging-6v0qI7yM.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/emails/index.markdoc": () => import("./emails-DIgSh7SB.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/errors/index.markdoc": () => import("./errors-Bak8QgvE.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/index.markdoc": () => import("./production-DoYx_2Yb.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/rate-limits/index.markdoc": () => import("./rate-limits-g8vHjr_I.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/scaling/index.markdoc": () => import("./scaling-BRXKusQX.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/security/index.markdoc": () => import("./security-BIxDOH5G.js").then((m) => m.default),
	"/src/content/docs/advanced/self-hosting/production/updates/index.markdoc": () => import("./updates-C2dcSQou.js").then((m) => m.default),
	"/src/content/docs/apis/events/index.markdoc": () => import("./events-BKmMoKOk.js").then((m) => m.default),
	"/src/content/docs/apis/graphql/index.markdoc": () => import("./graphql-CeJdkE8q.js").then((m) => m.default),
	"/src/content/docs/apis/index.markdoc": () => import("./apis-BCg1sgi4.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/authentication/index.markdoc": () => import("./authentication-DLrbXX-t.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/channels/index.markdoc": () => import("./channels-MSs6JW4-.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/custom-endpoint/index.markdoc": () => import("./custom-endpoint-CHG-bxX-.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/index.markdoc": () => import("./realtime-DsjqsjYN.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/payload/index.markdoc": () => import("./payload-BsaX70aK.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/presences/index.markdoc": () => import("./presences-BgP7I_l8.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/queries/index.markdoc": () => import("./queries-BPP_T8SJ.js").then((m) => m.default),
	"/src/content/docs/apis/realtime/subscribe/index.markdoc": () => import("./subscribe-C2_Gjt9_.js").then((m) => m.default),
	"/src/content/docs/apis/release-policy/index.markdoc": () => import("./release-policy-CLikx1wE.js").then((m) => m.default),
	"/src/content/docs/apis/response-codes/index.markdoc": () => import("./response-codes-B9CUjDRW.js").then((m) => m.default),
	"/src/content/docs/apis/rest/index.markdoc": () => import("./rest-BmUV19mA.js").then((m) => m.default),
	"/src/content/docs/apis/webhooks/index.markdoc": () => import("./webhooks-B0yatfbz.js").then((m) => m.default),
	"/src/content/docs/partners/apps/consent/index.markdoc": () => import("./consent-BdGd3JFh.js").then((m) => m.default),
	"/src/content/docs/partners/apps/device-flow/index.markdoc": () => import("./device-flow-CtCmiqgS.js").then((m) => m.default),
	"/src/content/docs/partners/apps/index.markdoc": () => import("./apps--xNoLQDB.js").then((m) => m.default),
	"/src/content/docs/partners/apps/quick-start/index.markdoc": () => import("./quick-start-D4zczhWo.js").then((m) => m.default),
	"/src/content/docs/partners/apps/registration/index.markdoc": () => import("./registration-DF7T981R.js").then((m) => m.default),
	"/src/content/docs/partners/apps/scopes/index.markdoc": () => import("./scopes-Di48jB_w.js").then((m) => m.default),
	"/src/content/docs/partners/apps/tokens/index.markdoc": () => import("./tokens-CPqTqoUJ.js").then((m) => m.default),
	"/src/content/docs/partners/project/api-keys/index.markdoc": () => import("./api-keys-D9FnP0Sz.js").then((m) => m.default),
	"/src/content/docs/partners/project/auth-methods/index.markdoc": () => import("./auth-methods-NjNgME7u.js").then((m) => m.default),
	"/src/content/docs/partners/project/branded-emails/index.markdoc": () => import("./branded-emails-_ON4cmuG.js").then((m) => m.default),
	"/src/content/docs/partners/project/email-templates/index.markdoc": () => import("./email-templates-CnU-Nilf.js").then((m) => m.default),
	"/src/content/docs/partners/project/environment-variables/index.markdoc": () => import("./environment-variables-DlxNNL47.js").then((m) => m.default),
	"/src/content/docs/partners/project/index.markdoc": () => import("./project-ixiNevlZ.js").then((m) => m.default),
	"/src/content/docs/partners/project/key-rotation/index.markdoc": () => import("./key-rotation-CNWOvxF4.js").then((m) => m.default),
	"/src/content/docs/partners/project/labels/index.markdoc": () => import("./labels-DDARbwVo.js").then((m) => m.default),
	"/src/content/docs/partners/project/mock-phones/index.markdoc": () => import("./mock-phones-xUK1ggSL.js").then((m) => m.default),
	"/src/content/docs/partners/project/oauth/index.markdoc": () => import("./oauth-DrliKv6P.js").then((m) => m.default),
	"/src/content/docs/partners/project/platforms/index.markdoc": () => import("./platforms-DIXcPzTb.js").then((m) => m.default),
	"/src/content/docs/partners/project/policies/index.markdoc": () => import("./policies-C7Lvun1z.js").then((m) => m.default),
	"/src/content/docs/partners/project/protocols/index.markdoc": () => import("./protocols-B5yNeYFz.js").then((m) => m.default),
	"/src/content/docs/partners/project/provisioning/index.markdoc": () => import("./provisioning-C1-jlpAf.js").then((m) => m.default),
	"/src/content/docs/partners/project/services/index.markdoc": () => import("./services-CX8vJDyC.js").then((m) => m.default),
	"/src/content/docs/partners/project/smtp/index.markdoc": () => import("./smtp-TdLzgS9H.js").then((m) => m.default),
	"/src/content/docs/products/ai/audio-processing/index.markdoc": () => import("./audio-processing-X9a7vhfM.js").then((m) => m.default),
	"/src/content/docs/products/ai/computer-vision/index.markdoc": () => import("./computer-vision-BGG26neS.js").then((m) => m.default),
	"/src/content/docs/products/ai/index.markdoc": () => import("./ai-C7yWxs4D.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/anyscale/index.markdoc": () => import("./anyscale-CFGecQ7e.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/elevenlabs/index.markdoc": () => import("./elevenlabs-EgNB5Lyy.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/fal-ai/index.markdoc": () => import("./fal-ai-DxINHjY8.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/langchain/index.markdoc": () => import("./langchain-BUXubW2I.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/lmnt/index.markdoc": () => import("./lmnt-B3hNZOTK.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/openai/index.markdoc": () => import("./openai-DtEo--a9.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/perplexity/index.markdoc": () => import("./perplexity-YlnAmFR7.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/pinecone/index.markdoc": () => import("./pinecone-DkqcpoDU.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/replicate/index.markdoc": () => import("./replicate-BTWxxkBN.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/tensorflow/index.markdoc": () => import("./tensorflow-YZo4zHx-.js").then((m) => m.default),
	"/src/content/docs/products/ai/integrations/togetherai/index.markdoc": () => import("./togetherai-B2CVzcXF.js").then((m) => m.default),
	"/src/content/docs/products/ai/natural-language/index.markdoc": () => import("./natural-language-DTPZmVVx.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/image-classification/index.markdoc": () => import("./image-classification-B8o8Z6_y.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/language-translation/index.markdoc": () => import("./language-translation-BeNcBE-J.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/music-generation/index.markdoc": () => import("./music-generation-B6DuM-qt.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/object-detection/index.markdoc": () => import("./object-detection-ZN_PjA4C.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/speech-recognition/index.markdoc": () => import("./speech-recognition-DMnIQS7_.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/text-generation/index.markdoc": () => import("./text-generation-BS4RIy5Q.js").then((m) => m.default),
	"/src/content/docs/products/ai/tutorials/text-to-speech/index.markdoc": () => import("./text-to-speech-B0xJBsKe.js").then((m) => m.default),
	"/src/content/docs/products/ai/video-processing/index.markdoc": () => import("./video-processing-wpPYkgLs.js").then((m) => m.default),
	"/src/content/docs/products/auth/accounts/index.markdoc": () => import("./accounts-BHzlPQEJ.js").then((m) => m.default),
	"/src/content/docs/products/auth/anonymous/index.markdoc": () => import("./anonymous-BUqz6GNi.js").then((m) => m.default),
	"/src/content/docs/products/auth/checking-auth-status/index.markdoc": () => import("./checking-auth-status-B3tZS1XD.js").then((m) => m.default),
	"/src/content/docs/products/auth/custom-token/index.markdoc": () => import("./custom-token-D8ckBwRT.js").then((m) => m.default),
	"/src/content/docs/products/auth/email-otp/index.markdoc": () => import("./email-otp-BaEbOu3T.js").then((m) => m.default),
	"/src/content/docs/products/auth/email-password/index.markdoc": () => import("./email-password-DnisDiwV.js").then((m) => m.default),
	"/src/content/docs/products/auth/email-policies/index.markdoc": () => import("./email-policies-D4egweCk.js").then((m) => m.default),
	"/src/content/docs/products/auth/identities/index.markdoc": () => import("./identities-B6jb6y-_.js").then((m) => m.default),
	"/src/content/docs/products/auth/impersonation/index.markdoc": () => import("./impersonation-BZLulNZC.js").then((m) => m.default),
	"/src/content/docs/products/auth/index.markdoc": () => import("./auth-DaZjkciS.js").then((m) => m.default),
	"/src/content/docs/products/auth/jwt/index.markdoc": () => import("./jwt-Dk008hPQ.js").then((m) => m.default),
	"/src/content/docs/products/auth/labels/index.markdoc": () => import("./labels-DmeDktvS.js").then((m) => m.default),
	"/src/content/docs/products/auth/magic-url/index.markdoc": () => import("./magic-url-DKTcjAK8.js").then((m) => m.default),
	"/src/content/docs/products/auth/message-templates/index.markdoc": () => import("./message-templates-eu3bkWJs.js").then((m) => m.default),
	"/src/content/docs/products/auth/mfa/index.markdoc": () => import("./mfa-mAmIW-mO.js").then((m) => m.default),
	"/src/content/docs/products/auth/multi-tenancy/index.markdoc": () => import("./multi-tenancy-D0UHpwFO.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/authorization/index.markdoc": () => import("./authorization-DVO8xu-9.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/clients/index.markdoc": () => import("./clients-BB5z_wX5.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-1/index.markdoc": () => import("./step-1-e4KFN4D3.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-2/index.markdoc": () => import("./step-2-LLiye4qn.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-3/index.markdoc": () => import("./step-3-CLEvPyeR.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-4/index.markdoc": () => import("./step-4-Des4L1lX.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-5/index.markdoc": () => import("./step-5-DvCU3_GQ.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-6/index.markdoc": () => import("./step-6-BfH3WwtK.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/custom-scopes/step-7/index.markdoc": () => import("./step-7-CBfQt2Ih.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/device-flow/index.markdoc": () => import("./device-flow-BBQHUg8U.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/index.markdoc": () => import("./oauth-server-BUtDCqP8.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/quick-start/index.markdoc": () => import("./quick-start-Da-BnHEA.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/scopes/index.markdoc": () => import("./scopes-DissLXnK.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-1/index.markdoc": () => import("./step-1-DL2-QfQ6.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-2/index.markdoc": () => import("./step-2-CPFSJYfd.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-3/index.markdoc": () => import("./step-3-BKd0QJLD.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-4/index.markdoc": () => import("./step-4-Dzqy6DFh.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-5/index.markdoc": () => import("./step-5-D5PPg8ZB.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-6/index.markdoc": () => import("./step-6-B9R2MMc_.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-7/index.markdoc": () => import("./step-7-DN452_FN.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth-server/tokens/index.markdoc": () => import("./tokens-f3QM799H.js").then((m) => m.default),
	"/src/content/docs/products/auth/oauth2/index.markdoc": () => import("./oauth2-id7vgg-Q.js").then((m) => m.default),
	"/src/content/docs/products/auth/phone-sms/index.markdoc": () => import("./phone-sms-vRD1gitx.js").then((m) => m.default),
	"/src/content/docs/products/auth/preferences/index.markdoc": () => import("./preferences-CKBTY2av.js").then((m) => m.default),
	"/src/content/docs/products/auth/presences/index.markdoc": () => import("./presences-B4oPLWDY.js").then((m) => m.default),
	"/src/content/docs/products/auth/quick-start/index.markdoc": () => import("./quick-start-BF4f6QqI.js").then((m) => m.default),
	"/src/content/docs/products/auth/react/index.markdoc": () => import("./react-D7W5cMC5.js").then((m) => m.default),
	"/src/content/docs/products/auth/security/index.markdoc": () => import("./security-DpTn62Pi.js").then((m) => m.default),
	"/src/content/docs/products/auth/server-side-rendering/index.markdoc": () => import("./server-side-rendering-DNgabMxH.js").then((m) => m.default),
	"/src/content/docs/products/auth/team-invites/index.markdoc": () => import("./team-invites-CE7oLz-g.js").then((m) => m.default),
	"/src/content/docs/products/auth/teams/index.markdoc": () => import("./teams-DqxBRVPs.js").then((m) => m.default),
	"/src/content/docs/products/auth/tokens/index.markdoc": () => import("./tokens-DMERBJH6.js").then((m) => m.default),
	"/src/content/docs/products/auth/users/index.markdoc": () => import("./users-Dk6VZcvh.js").then((m) => m.default),
	"/src/content/docs/products/auth/verify-user/index.markdoc": () => import("./verify-user-BRccCVv_.js").then((m) => m.default),
	"/src/content/docs/products/avatars/browsers/index.markdoc": () => import("./browsers-D7xjCpu-.js").then((m) => m.default),
	"/src/content/docs/products/avatars/favicons/index.markdoc": () => import("./favicons-D_XF_YFf.js").then((m) => m.default),
	"/src/content/docs/products/avatars/flags/index.markdoc": () => import("./flags-DbW6BXP_.js").then((m) => m.default),
	"/src/content/docs/products/avatars/image-manipulation/index.markdoc": () => import("./image-manipulation-CsljrSQI.js").then((m) => m.default),
	"/src/content/docs/products/avatars/index.markdoc": () => import("./avatars-DwaknGbk.js").then((m) => m.default),
	"/src/content/docs/products/avatars/initials/index.markdoc": () => import("./initials-BLUtmyFd.js").then((m) => m.default),
	"/src/content/docs/products/avatars/payment-methods/index.markdoc": () => import("./payment-methods-Dq-DA1xU.js").then((m) => m.default),
	"/src/content/docs/products/avatars/qr-codes/index.markdoc": () => import("./qr-codes-wVPjCDRZ.js").then((m) => m.default),
	"/src/content/docs/products/avatars/quick-start/index.markdoc": () => import("./quick-start-D0eQ1C_N.js").then((m) => m.default),
	"/src/content/docs/products/avatars/screenshots/index.markdoc": () => import("./screenshots-Bzs5Nv0y.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/atomic-numeric-operations/index.markdoc": () => import("./atomic-numeric-operations-D8LYRF1P.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/backups/index.markdoc": () => import("./backups-mt1IZjIy.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/bulk-operations/index.markdoc": () => import("./bulk-operations-DpMthOGf.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/collections/index.markdoc": () => import("./collections-Co9LV-Dd.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/databases/index.markdoc": () => import("./databases-BF3PxBAk.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/documents/index.markdoc": () => import("./documents-CckudaWE.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/index.markdoc": () => import("./documentsdb-DzCDmLbH.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/json-exports/index.markdoc": () => import("./json-exports-CyG-mm9o.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/json-imports/index.markdoc": () => import("./json-imports-BLL6QXXx.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/order/index.markdoc": () => import("./order-BGBfvbxo.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/pagination/index.markdoc": () => import("./pagination-D3Gf_kCD.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/permissions/index.markdoc": () => import("./permissions-D-XKsLk6.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/queries/index.markdoc": () => import("./queries-B53sL2Yq.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/quick-start/index.markdoc": () => import("./quick-start-DyRep_pA.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/timestamp-overrides/index.markdoc": () => import("./timestamp-overrides-Dmh6fAMT.js").then((m) => m.default),
	"/src/content/docs/products/databases/documentsdb/transactions/index.markdoc": () => import("./transactions-BltEVk1F.js").then((m) => m.default),
	"/src/content/docs/products/databases/index.markdoc": () => import("./databases-C-437Pl9.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/backups/index.markdoc": () => import("./backups-C1cWOOCk.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/branches/index.markdoc": () => import("./branches-CtVgD5Pd.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/access-control/index.markdoc": () => import("./access-control-vN-C4Hv6.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/data-modeling/index.markdoc": () => import("./data-modeling-BIziGH0G.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/indexes/index.markdoc": () => import("./indexes-Bll29zE6.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/joins/index.markdoc": () => import("./joins-SMTzOIEd.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/queries/index.markdoc": () => import("./queries-DcbeTo9e.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/tables/index.markdoc": () => import("./tables-QByYjlcD.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/concepts/transactions/index.markdoc": () => import("./transactions-DVSnq07R.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/connection-pooling/index.markdoc": () => import("./connection-pooling-BUCASIc7.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/connections/index.markdoc": () => import("./connections-95udfVPp.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/high-availability/index.markdoc": () => import("./high-availability-BA3AH8jS.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/index.markdoc": () => import("./mysql-D3xypY7T.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/auth-js/index.markdoc": () => import("./auth-js-CmwKiWwI.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/better-auth/index.markdoc": () => import("./better-auth-D0NJGzFJ.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/dbt/index.markdoc": () => import("./dbt-DiKzEOpb.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/django/index.markdoc": () => import("./django-Lk1IrBYl.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/drivers/index.markdoc": () => import("./drivers-Co_QFfyY.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/drizzle/index.markdoc": () => import("./drizzle-Da_qteSx.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/ef-core/index.markdoc": () => import("./ef-core-DuopH8fm.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/fastapi/index.markdoc": () => import("./fastapi-DCHhQFd_.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/gorm/index.markdoc": () => import("./gorm-DtJiQNdj.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/grafana/index.markdoc": () => import("./grafana-4LAuZRW8.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/laravel/index.markdoc": () => import("./laravel-DDhqa81g.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/metabase/index.markdoc": () => import("./metabase-DEJddIb2.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/nextjs/index.markdoc": () => import("./nextjs-cvq6Dats.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/prisma/index.markdoc": () => import("./prisma-gqiIrhgB.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/rails/index.markdoc": () => import("./rails-qlRwX0Os.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/retool/index.markdoc": () => import("./retool-DSWnRazk.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/integrations/spring-boot/index.markdoc": () => import("./spring-boot-86HEF-Se.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/maintenance/index.markdoc": () => import("./maintenance-YL0AfnXe.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/monitoring/index.markdoc": () => import("./monitoring-bQzkKjeq.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/network-security/index.markdoc": () => import("./network-security-Dtac0q8T.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/quick-start/index.markdoc": () => import("./quick-start-CB-0Ixa9.js").then((m) => m.default),
	"/src/content/docs/products/databases/mysql/scaling/index.markdoc": () => import("./scaling-C3nVlEsN.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/backups/index.markdoc": () => import("./backups-CJcQIUCm.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/branches/index.markdoc": () => import("./branches-YHJaT5Uv.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/access-control/index.markdoc": () => import("./access-control-BEnYJqtN.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/data-modeling/index.markdoc": () => import("./data-modeling-C32eW5nH.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/indexes/index.markdoc": () => import("./indexes-CLaFZb3l.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/joins/index.markdoc": () => import("./joins-CdJBRsfX.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/queries/index.markdoc": () => import("./queries-CDjzRnfV.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/tables/index.markdoc": () => import("./tables-XsMgdSuJ.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/concepts/transactions/index.markdoc": () => import("./transactions-BVY7VVLq.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/connection-pooling/index.markdoc": () => import("./connection-pooling-DVrw54pA.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/connections/index.markdoc": () => import("./connections-BKVZI6Gs.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/extensions/index.markdoc": () => import("./extensions-v9pHAxxn.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/high-availability/index.markdoc": () => import("./high-availability-XK5IyvqO.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/index.markdoc": () => import("./postgresql-C5OFx65F.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/auth-js/index.markdoc": () => import("./auth-js-CbLC_U3b.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/better-auth/index.markdoc": () => import("./better-auth-DRFK7WCu.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/dbt/index.markdoc": () => import("./dbt-BO2QqYT2.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/django/index.markdoc": () => import("./django-CT7fi9vy.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/drivers/index.markdoc": () => import("./drivers-BbuuGtCQ.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/drizzle/index.markdoc": () => import("./drizzle-Bf_H_4XC.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/ef-core/index.markdoc": () => import("./ef-core-4ueSXvH8.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/fastapi/index.markdoc": () => import("./fastapi-BipT9t8j.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/gorm/index.markdoc": () => import("./gorm-BBbAi6T3.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/grafana/index.markdoc": () => import("./grafana-bqtXCPJN.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/laravel/index.markdoc": () => import("./laravel-S1i7Atg8.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/metabase/index.markdoc": () => import("./metabase-CDcArbXN.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/nextjs/index.markdoc": () => import("./nextjs-CkwWQUaT.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/prisma/index.markdoc": () => import("./prisma-CGtMZFxC.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/rails/index.markdoc": () => import("./rails-CSHScrfA.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/retool/index.markdoc": () => import("./retool-BxiDE5da.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/integrations/spring-boot/index.markdoc": () => import("./spring-boot-IUuKl9Rd.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/maintenance/index.markdoc": () => import("./maintenance-dOcq63jF.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/monitoring/index.markdoc": () => import("./monitoring-DbHKXnK7.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/network-security/index.markdoc": () => import("./network-security-Rk14Lxyw.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/quick-start/index.markdoc": () => import("./quick-start-BoNT0jac.js").then((m) => m.default),
	"/src/content/docs/products/databases/postgresql/scaling/index.markdoc": () => import("./scaling-gGo2R_dW.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/ai-suggestions/index.markdoc": () => import("./ai-suggestions-LEvrBX8V.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/atomic-numeric-operations/index.markdoc": () => import("./atomic-numeric-operations-DvVDiXcz.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/backups/index.markdoc": () => import("./backups-DJiAAUhI.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/bulk-operations/index.markdoc": () => import("./bulk-operations-DAJEBE7q.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/csv-exports/index.markdoc": () => import("./csv-exports-B-ZtfVOF.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/csv-imports/index.markdoc": () => import("./csv-imports-CRL-64n8.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/databases/index.markdoc": () => import("./databases-ODJfihlN.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/geo-queries/index.markdoc": () => import("./geo-queries-C9JC9UYn.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/index.markdoc": () => import("./tablesdb-aipi52qg.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/atomic-numeric-operations/index.markdoc": () => import("./atomic-numeric-operations-Bqj2R_3B.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/bulk-operations/index.markdoc": () => import("./bulk-operations-DLXlF7Kq.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/collections/index.markdoc": () => import("./collections-Cqqap_tL.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/databases/index.markdoc": () => import("./databases-DDHiAgF1.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/documents/index.markdoc": () => import("./documents-C0RJipS6.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/order/index.markdoc": () => import("./order-CnEumaii.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/pagination/index.markdoc": () => import("./pagination-CmmRI3fF.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/permissions/index.markdoc": () => import("./permissions-CC1Ee8Wl.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/queries/index.markdoc": () => import("./queries-VTuBy5LQ.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/quick-start/index.markdoc": () => import("./quick-start-B0jxjQnn.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/relationships/index.markdoc": () => import("./relationships-DLU5vYVO.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/legacy/type-generation/index.markdoc": () => import("./type-generation-kvfZiuzf.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/offline/index.markdoc": () => import("./offline-bsfPlgkv.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/operators/index.markdoc": () => import("./operators-DLMBWvwG.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/order/index.markdoc": () => import("./order-gH60S5u0.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/pagination/index.markdoc": () => import("./pagination-BPFIxii2.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/permissions/index.markdoc": () => import("./permissions-B3hPZLsC.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/queries/index.markdoc": () => import("./queries-DCPFhYZl.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/quick-start/index.markdoc": () => import("./quick-start-DOkhlj9G.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/relationships/index.markdoc": () => import("./relationships-CV5cOfXW.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/rows/index.markdoc": () => import("./rows-DbJuB_eL.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/tables/index.markdoc": () => import("./tables-XRZhOIbA.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/timestamp-overrides/index.markdoc": () => import("./timestamp-overrides-C6UhePPg.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/transactions/index.markdoc": () => import("./transactions-DidUSm51.js").then((m) => m.default),
	"/src/content/docs/products/databases/tablesdb/type-generation/index.markdoc": () => import("./type-generation-rZ5ro7m_.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/backups/index.markdoc": () => import("./backups-DWosXkx2.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/bulk-operations/index.markdoc": () => import("./bulk-operations-C3nKOYV4.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/collections/index.markdoc": () => import("./collections-BbVqUUvf.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/csv-exports/index.markdoc": () => import("./csv-exports-OAUcpJqD.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/csv-imports/index.markdoc": () => import("./csv-imports-B6lSs8Oe.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/databases/index.markdoc": () => import("./databases-DztP9iXU.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/documents/index.markdoc": () => import("./documents-B64honc6.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/embeddings/index.markdoc": () => import("./embeddings-CvLJoqrE.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/index.markdoc": () => import("./vectorsdb-DrmkF9TR.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/order/index.markdoc": () => import("./order-CO8aFL1y.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/pagination/index.markdoc": () => import("./pagination-BZ0oal_V.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/permissions/index.markdoc": () => import("./permissions-ClOdzcuq.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/queries/index.markdoc": () => import("./queries-CPt_rUhs.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/quick-start/index.markdoc": () => import("./quick-start-CqnZwuJZ.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/timestamp-overrides/index.markdoc": () => import("./timestamp-overrides-_czC-3c-.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/transactions/index.markdoc": () => import("./transactions-DROrMIct.js").then((m) => m.default),
	"/src/content/docs/products/databases/vectorsdb/vector-search/index.markdoc": () => import("./vector-search-B_tbZrqZ.js").then((m) => m.default),
	"/src/content/docs/products/functions/deploy-from-git/index.markdoc": () => import("./deploy-from-git-BPt2G-S7.js").then((m) => m.default),
	"/src/content/docs/products/functions/deploy-manually/index.markdoc": () => import("./deploy-manually-DZNVlh7k.js").then((m) => m.default),
	"/src/content/docs/products/functions/deployments/index.markdoc": () => import("./deployments-CYGXd8H_.js").then((m) => m.default),
	"/src/content/docs/products/functions/develop/index.markdoc": () => import("./develop-CtOWhVGU.js").then((m) => m.default),
	"/src/content/docs/products/functions/develop-locally/index.markdoc": () => import("./develop-locally-pWenuIfe.js").then((m) => m.default),
	"/src/content/docs/products/functions/domains/index.markdoc": () => import("./domains-GpuHvS4p.js").then((m) => m.default),
	"/src/content/docs/products/functions/environment-variables/index.markdoc": () => import("./environment-variables-BGFa5yTX.js").then((m) => m.default),
	"/src/content/docs/products/functions/examples/index.markdoc": () => import("./examples-hECHFSzj.js").then((m) => m.default),
	"/src/content/docs/products/functions/execute/index.markdoc": () => import("./execute-BBpnr94v.js").then((m) => m.default),
	"/src/content/docs/products/functions/executions/index.markdoc": () => import("./executions-BxVNxcto.js").then((m) => m.default),
	"/src/content/docs/products/functions/functions/index.markdoc": () => import("./functions-CYt3AGL4.js").then((m) => m.default),
	"/src/content/docs/products/functions/index.markdoc": () => import("./functions-CVcjEFxr.js").then((m) => m.default),
	"/src/content/docs/products/functions/quick-start/index.markdoc": () => import("./quick-start-C8i2FzJB.js").then((m) => m.default),
	"/src/content/docs/products/functions/runtimes/index.markdoc": () => import("./runtimes-C355av_X.js").then((m) => m.default),
	"/src/content/docs/products/functions/templates/index.markdoc": () => import("./templates-Dwph0FW8.js").then((m) => m.default),
	"/src/content/docs/products/messaging/apns/index.markdoc": () => import("./apns-DzrZEuL2.js").then((m) => m.default),
	"/src/content/docs/products/messaging/fcm/index.markdoc": () => import("./fcm-BU5WRKpx.js").then((m) => m.default),
	"/src/content/docs/products/messaging/index.markdoc": () => import("./messaging-BTCuenyl.js").then((m) => m.default),
	"/src/content/docs/products/messaging/mailgun/index.markdoc": () => import("./mailgun-DU8FliI4.js").then((m) => m.default),
	"/src/content/docs/products/messaging/messages/index.markdoc": () => import("./messages-D_ZLzTwk.js").then((m) => m.default),
	"/src/content/docs/products/messaging/msg91/index.markdoc": () => import("./msg91-B4ULiITS.js").then((m) => m.default),
	"/src/content/docs/products/messaging/providers/index.markdoc": () => import("./providers-49Aeixxa.js").then((m) => m.default),
	"/src/content/docs/products/messaging/resend/index.markdoc": () => import("./resend-BVj57m8i.js").then((m) => m.default),
	"/src/content/docs/products/messaging/send-email-messages/index.markdoc": () => import("./send-email-messages-DQbHf6z-.js").then((m) => m.default),
	"/src/content/docs/products/messaging/send-push-notifications/index.markdoc": () => import("./send-push-notifications-DGS5iccq.js").then((m) => m.default),
	"/src/content/docs/products/messaging/send-sms-messages/index.markdoc": () => import("./send-sms-messages-BRvQvYr7.js").then((m) => m.default),
	"/src/content/docs/products/messaging/sendgrid/index.markdoc": () => import("./sendgrid-CMNt0viv.js").then((m) => m.default),
	"/src/content/docs/products/messaging/smtp/index.markdoc": () => import("./smtp-6tA-1-k4.js").then((m) => m.default),
	"/src/content/docs/products/messaging/targets/index.markdoc": () => import("./targets-DNveAw5p.js").then((m) => m.default),
	"/src/content/docs/products/messaging/telesign/index.markdoc": () => import("./telesign-BCQSoTSs.js").then((m) => m.default),
	"/src/content/docs/products/messaging/textmagic/index.markdoc": () => import("./textmagic-QmMBhfez.js").then((m) => m.default),
	"/src/content/docs/products/messaging/topics/index.markdoc": () => import("./topics-BZbHd5m2.js").then((m) => m.default),
	"/src/content/docs/products/messaging/twilio/index.markdoc": () => import("./twilio-BkIy9YJ3.js").then((m) => m.default),
	"/src/content/docs/products/messaging/vonage/index.markdoc": () => import("./vonage-_2qyjZqi.js").then((m) => m.default),
	"/src/content/docs/products/network/caa-records/index.markdoc": () => import("./caa-records-DWG4UI9k.js").then((m) => m.default),
	"/src/content/docs/products/network/caching/index.markdoc": () => import("./caching-Bd_dv1AQ.js").then((m) => m.default),
	"/src/content/docs/products/network/cdn/index.markdoc": () => import("./cdn-CMq15Jgg.js").then((m) => m.default),
	"/src/content/docs/products/network/compression/index.markdoc": () => import("./compression-BZbThHVN.js").then((m) => m.default),
	"/src/content/docs/products/network/custom-domains/index.markdoc": () => import("./custom-domains-YwUWYkgs.js").then((m) => m.default),
	"/src/content/docs/products/network/ddos/index.markdoc": () => import("./ddos-BVMydtlV.js").then((m) => m.default),
	"/src/content/docs/products/network/dns/index.markdoc": () => import("./dns-CpyFXPyp.js").then((m) => m.default),
	"/src/content/docs/products/network/edges/index.markdoc": () => import("./edges-pBZtcHhm.js").then((m) => m.default),
	"/src/content/docs/products/network/endpoints/index.markdoc": () => import("./endpoints-DSWnNF9w.js").then((m) => m.default),
	"/src/content/docs/products/network/index.markdoc": () => import("./network-D_H4zv7s.js").then((m) => m.default),
	"/src/content/docs/products/network/regions/index.markdoc": () => import("./regions-CsKDG-LN.js").then((m) => m.default),
	"/src/content/docs/products/network/tls/index.markdoc": () => import("./tls-BcS6NawW.js").then((m) => m.default),
	"/src/content/docs/products/sites/deploy-from-cli/index.markdoc": () => import("./deploy-from-cli-CKts_3DA.js").then((m) => m.default),
	"/src/content/docs/products/sites/deploy-from-git/index.markdoc": () => import("./deploy-from-git-BsBYW79w.js").then((m) => m.default),
	"/src/content/docs/products/sites/deploy-manually/index.markdoc": () => import("./deploy-manually-oT-SRACS.js").then((m) => m.default),
	"/src/content/docs/products/sites/deployments/index.markdoc": () => import("./deployments-D0mKdqFO.js").then((m) => m.default),
	"/src/content/docs/products/sites/develop/index.markdoc": () => import("./develop-aQlZszWK.js").then((m) => m.default),
	"/src/content/docs/products/sites/domains/index.markdoc": () => import("./domains-DSbrIU7l.js").then((m) => m.default),
	"/src/content/docs/products/sites/environment-variables/index.markdoc": () => import("./environment-variables-ByZzY-dE.js").then((m) => m.default),
	"/src/content/docs/products/sites/frameworks/index.markdoc": () => import("./frameworks-DUFOvteq.js").then((m) => m.default),
	"/src/content/docs/products/sites/index.markdoc": () => import("./sites-CViPOppP.js").then((m) => m.default),
	"/src/content/docs/products/sites/instant-rollbacks/index.markdoc": () => import("./instant-rollbacks-CDDNSQzX.js").then((m) => m.default),
	"/src/content/docs/products/sites/logs/index.markdoc": () => import("./logs-CydBbok_.js").then((m) => m.default),
	"/src/content/docs/products/sites/migrations/vercel/index.markdoc": () => import("./vercel-CkyOXEah.js").then((m) => m.default),
	"/src/content/docs/products/sites/previews/index.markdoc": () => import("./previews-Duizr9r1.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/angular/index.markdoc": () => import("./angular-D_8fuQvC.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/astro/index.markdoc": () => import("./astro-Dew5N_QX.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/flutter/index.markdoc": () => import("./flutter-BsEHQC1S.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/index.markdoc": () => import("./quick-start-BqMhiio7.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/nextjs/index.markdoc": () => import("./nextjs-IuL30e19.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/nuxt/index.markdoc": () => import("./nuxt-aFuK0F7X.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/react/index.markdoc": () => import("./react-qh56u7yA.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/react-native/index.markdoc": () => import("./react-native-DIxiEvg6.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/remix/index.markdoc": () => import("./remix-CEF4HF_v.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/sveltekit/index.markdoc": () => import("./sveltekit-DEnopfq9.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/tanstack-start/index.markdoc": () => import("./tanstack-start-CCU0V-3t.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/vanilla/index.markdoc": () => import("./vanilla-WzHPIJ4P.js").then((m) => m.default),
	"/src/content/docs/products/sites/quick-start/vue/index.markdoc": () => import("./vue-By5nmCn7.js").then((m) => m.default),
	"/src/content/docs/products/sites/rendering/index.markdoc": () => import("./rendering-CjSIOMAO.js").then((m) => m.default),
	"/src/content/docs/products/sites/rendering/ssr/index.markdoc": () => import("./ssr-fcVaaM8l.js").then((m) => m.default),
	"/src/content/docs/products/sites/rendering/static/index.markdoc": () => import("./static-Swq9ApW8.js").then((m) => m.default),
	"/src/content/docs/products/sites/templates/index.markdoc": () => import("./templates-DwAFeHek.js").then((m) => m.default),
	"/src/content/docs/products/storage/buckets/index.markdoc": () => import("./buckets-CcoDHZrD.js").then((m) => m.default),
	"/src/content/docs/products/storage/file-tokens/index.markdoc": () => import("./file-tokens-C__H568H.js").then((m) => m.default),
	"/src/content/docs/products/storage/folders/index.markdoc": () => import("./folders-DkP20U6k.js").then((m) => m.default),
	"/src/content/docs/products/storage/images/index.markdoc": () => import("./images-BJsSIg7l.js").then((m) => m.default),
	"/src/content/docs/products/storage/index.markdoc": () => import("./storage-DiF4eODL.js").then((m) => m.default),
	"/src/content/docs/products/storage/permissions/index.markdoc": () => import("./permissions-DX5EY9gx.js").then((m) => m.default),
	"/src/content/docs/products/storage/quick-start/index.markdoc": () => import("./quick-start-wMOJ1r4c.js").then((m) => m.default),
	"/src/content/docs/products/storage/upload-download/index.markdoc": () => import("./upload-download-BAsxfvS8.js").then((m) => m.default),
	"/src/content/docs/quick-starts/android/index.markdoc": () => import("./android-CYiZT9kk.js").then((m) => m.default),
	"/src/content/docs/quick-starts/android-java/index.markdoc": () => import("./android-java-DyI5tL-z.js").then((m) => m.default),
	"/src/content/docs/quick-starts/angular/index.markdoc": () => import("./angular-93zFGq_y.js").then((m) => m.default),
	"/src/content/docs/quick-starts/apple/index.markdoc": () => import("./apple-BPYI53RW.js").then((m) => m.default),
	"/src/content/docs/quick-starts/astro/index.markdoc": () => import("./astro-AuDZAMkf.js").then((m) => m.default),
	"/src/content/docs/quick-starts/dart/index.markdoc": () => import("./dart-D0nm1k4Y.js").then((m) => m.default),
	"/src/content/docs/quick-starts/deno/index.markdoc": () => import("./deno-pIi8ArYL.js").then((m) => m.default),
	"/src/content/docs/quick-starts/dotnet/index.markdoc": () => import("./dotnet-DtewuACo.js").then((m) => m.default),
	"/src/content/docs/quick-starts/flutter/index.markdoc": () => import("./flutter-CaPb-bKh.js").then((m) => m.default),
	"/src/content/docs/quick-starts/go/index.markdoc": () => import("./go-CraPZ2jY.js").then((m) => m.default),
	"/src/content/docs/quick-starts/kotlin/index.markdoc": () => import("./kotlin-DiwOZE_P.js").then((m) => m.default),
	"/src/content/docs/quick-starts/nextjs/index.markdoc": () => import("./nextjs-BPioe561.js").then((m) => m.default),
	"/src/content/docs/quick-starts/node/index.markdoc": () => import("./node-B9ASK9ih.js").then((m) => m.default),
	"/src/content/docs/quick-starts/nuxt/index.markdoc": () => import("./nuxt-jSy4SUZo.js").then((m) => m.default),
	"/src/content/docs/quick-starts/php/index.markdoc": () => import("./php-CMpJCt3g.js").then((m) => m.default),
	"/src/content/docs/quick-starts/python/index.markdoc": () => import("./python-DvwXriIb.js").then((m) => m.default),
	"/src/content/docs/quick-starts/qwik/index.markdoc": () => import("./qwik-3eLui2SR.js").then((m) => m.default),
	"/src/content/docs/quick-starts/react/index.markdoc": () => import("./react-BHLs28a6.js").then((m) => m.default),
	"/src/content/docs/quick-starts/react-native/index.markdoc": () => import("./react-native-3tf9JoBl.js").then((m) => m.default),
	"/src/content/docs/quick-starts/refine/index.markdoc": () => import("./refine-D7k7CYsl.js").then((m) => m.default),
	"/src/content/docs/quick-starts/ruby/index.markdoc": () => import("./ruby-CkZJwJCK.js").then((m) => m.default),
	"/src/content/docs/quick-starts/rust/index.markdoc": () => import("./rust-10n2Lite.js").then((m) => m.default),
	"/src/content/docs/quick-starts/solid/index.markdoc": () => import("./solid-CKu569_v.js").then((m) => m.default),
	"/src/content/docs/quick-starts/sveltekit/index.markdoc": () => import("./sveltekit-Cv8S5Ne_.js").then((m) => m.default),
	"/src/content/docs/quick-starts/swift/index.markdoc": () => import("./swift-DQqJzDIf.js").then((m) => m.default),
	"/src/content/docs/quick-starts/tanstack-start/index.markdoc": () => import("./tanstack-start-BFAec5wk.js").then((m) => m.default),
	"/src/content/docs/quick-starts/vue/index.markdoc": () => import("./vue-D35R4NpV.js").then((m) => m.default),
	"/src/content/docs/quick-starts/web/index.markdoc": () => import("./web-DRT-hrDp.js").then((m) => m.default),
	"/src/content/docs/references/index.markdoc": () => import("./references-DkvX_Hcs.js").then((m) => m.default),
	"/src/content/docs/references/quick-start/index.markdoc": () => import("./quick-start-C1EU8_AD.js").then((m) => m.default),
	"/src/content/docs/sdks/index.markdoc": () => import("./sdks-Dhq8J54g.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/antigravity/index.markdoc": () => import("./antigravity-Dm8Q_yX9.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/claude-code/index.markdoc": () => import("./claude-code-CNsURY0N.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/codex/index.markdoc": () => import("./codex-D3x04aOt.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/cursor/index.markdoc": () => import("./cursor-fjS1SHJU.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/opencode/index.markdoc": () => import("./opencode-BbGbPTeJ.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/vscode/index.markdoc": () => import("./vscode-CKyaXUuf.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/windsurf/index.markdoc": () => import("./windsurf-BVc12I49.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents/zed/index.markdoc": () => import("./zed-5aEVrnnJ.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/agents-md/index.markdoc": () => import("./agents-md-CEUHKnZ6.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/ai-in-functions/index.markdoc": () => import("./ai-in-functions-BpcEfknf.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/arena/index.markdoc": () => import("./arena-DYp_N00O.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/assistant/index.markdoc": () => import("./assistant-DBuQITfg.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/docs-as-markdown/index.markdoc": () => import("./docs-as-markdown-CYlnjlsX.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/index.markdoc": () => import("./ai-BYmPTULe.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/mcp-servers/api/index.markdoc": () => import("./api-1hSC8gxp.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/mcp-servers/docs/index.markdoc": () => import("./docs-BbliSZpY.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/mcp-servers/index.markdoc": () => import("./mcp-servers-BksjjO1d.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/persistent-agents-with-realtime/index.markdoc": () => import("./persistent-agents-with-realtime-B16qezn2.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/android-java/index.markdoc": () => import("./android-java-BD4KVZYy.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/android-kotlin/index.markdoc": () => import("./android-kotlin-6uExMsj6.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/angular/index.markdoc": () => import("./angular-0Uwwq6Cn.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/apple/index.markdoc": () => import("./apple-DwP1resA.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/dart/index.markdoc": () => import("./dart-DHC4eCub.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/deno/index.markdoc": () => import("./deno-N0FrHSnQ.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/dotnet/index.markdoc": () => import("./dotnet-B0RvLK0-.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/flutter/index.markdoc": () => import("./flutter-ChhpCPPH.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/go/index.markdoc": () => import("./go-CzVTXlVz.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/index.markdoc": () => import("./quickstart-prompts-B1-Iti-i.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/kotlin/index.markdoc": () => import("./kotlin-7n8Mc1u-.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/nextjs/index.markdoc": () => import("./nextjs-DX4nNsYr.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/node/index.markdoc": () => import("./node-Cxe7cKlv.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/nuxt/index.markdoc": () => import("./nuxt-BX4cprx8.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/php/index.markdoc": () => import("./php-TJVreF-T.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/python/index.markdoc": () => import("./python-DU-8lc96.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/react/index.markdoc": () => import("./react-OunfvWS9.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/react-native/index.markdoc": () => import("./react-native-C8AXp4XU.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/refine/index.markdoc": () => import("./refine-xKT9PcaB.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/ruby/index.markdoc": () => import("./ruby-BTeVLNaj.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/rust/index.markdoc": () => import("./rust-DKs1B1xG.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/solid/index.markdoc": () => import("./solid-DEKz4Cvy.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/sveltekit/index.markdoc": () => import("./sveltekit-JJUGylIN.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/swift/index.markdoc": () => import("./swift-Ntjjt1wQ.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/tanstack-start/index.markdoc": () => import("./tanstack-start-CLoRmPWi.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/vue/index.markdoc": () => import("./vue-DlTlFJzl.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/quickstart-prompts/web/index.markdoc": () => import("./web-C-UdM8e1.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/responsible-ai/index.markdoc": () => import("./responsible-ai-Dh3v8IF_.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/skills/index.markdoc": () => import("./skills-BRhm4puY.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vector-db-and-embeddings/index.markdoc": () => import("./vector-db-and-embeddings-A_uSSzAj.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vibe-coding/bolt/index.markdoc": () => import("./bolt-Bh7WSiUY.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vibe-coding/claude-desktop/index.markdoc": () => import("./claude-desktop-D-lowKUu.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vibe-coding/emergent/index.markdoc": () => import("./emergent-B2H3Qcsg.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vibe-coding/lovable/index.markdoc": () => import("./lovable-BEWmGp1_.js").then((m) => m.default),
	"/src/content/docs/tooling/ai/vibe-coding/zenflow/index.markdoc": () => import("./zenflow-Dx9gzxLu.js").then((m) => m.default),
	"/src/content/docs/tooling/appwriter/index.markdoc": () => import("./appwriter-C7sC-2Vc.js").then((m) => m.default),
	"/src/content/docs/tooling/arena/index.markdoc": () => import("./arena-DMHytq8r.js").then((m) => m.default),
	"/src/content/docs/tooling/command-center/index.markdoc": () => import("./command-center-BcoWWiF9.js").then((m) => m.default),
	"/src/content/docs/tooling/command-center/shortcuts/index.markdoc": () => import("./shortcuts-C6LvDVi4.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/buckets/index.markdoc": () => import("./buckets-BpBXqpVp.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/commands/index.markdoc": () => import("./commands-DfhpD-d1.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/functions/index.markdoc": () => import("./functions-BZX1_Tzs.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/generate/index.markdoc": () => import("./generate-ROzkLZ-8.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/installation/index.markdoc": () => import("./installation-CRfqImcC.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/non-interactive/index.markdoc": () => import("./non-interactive-Cpolz6eJ.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/sites/index.markdoc": () => import("./sites-k0Qcihyq.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/tables/index.markdoc": () => import("./tables-BYQ7Sfyw.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/teams/index.markdoc": () => import("./teams-CC-G0hu6.js").then((m) => m.default),
	"/src/content/docs/tooling/command-line/topics/index.markdoc": () => import("./topics-BtEuV5Qb.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/index.markdoc": () => import("./terraform-C_ZGA_0X.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/provider/index.markdoc": () => import("./provider-CzgAnIf5.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/auth/index.markdoc": () => import("./auth-C2frMY2M.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/backups/index.markdoc": () => import("./backups-D91J4-p5.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/databases/index.markdoc": () => import("./databases-U0OESVyj.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/functions/index.markdoc": () => import("./functions-HoUWf3V7.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/messaging/index.markdoc": () => import("./messaging-z4kLEQ7W.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/sites/index.markdoc": () => import("./sites-CrHVld96.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/storage/index.markdoc": () => import("./storage-Tugp2sbG.js").then((m) => m.default),
	"/src/content/docs/tooling/terraform/resources/webhooks/index.markdoc": () => import("./webhooks-x6VLXHb1.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-1/index.markdoc": () => import("./step-1-rWOIrXQd.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-2/index.markdoc": () => import("./step-2-CjQSzLIp.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-3/index.markdoc": () => import("./step-3-DOmDgVXj.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-4/index.markdoc": () => import("./step-4-C0QOybpL.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-5/index.markdoc": () => import("./step-5-BQ-I790G.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-6/index.markdoc": () => import("./step-6-wbHlYXnH.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-7/index.markdoc": () => import("./step-7-CWnjQjPR.js").then((m) => m.default),
	"/src/content/docs/tutorials/android/step-8/index.markdoc": () => import("./step-8-T8MXH1lW.js").then((m) => m.default),
	"/src/content/docs/tutorials/apple/step-1/index.markdoc": () => import("./step-1-NchNJKOQ.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-1/index.markdoc": () => import("./step-1-CNjlF3vV.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-2/index.markdoc": () => import("./step-2-_wIAXjBb.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-3/index.markdoc": () => import("./step-3-BOQMy5Ns.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-4/index.markdoc": () => import("./step-4-BdQVH-nM.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-5/index.markdoc": () => import("./step-5-DrnFfagP.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-6/index.markdoc": () => import("./step-6-dsM-Uh1H.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-7/index.markdoc": () => import("./step-7-DviSRqp_.js").then((m) => m.default),
	"/src/content/docs/tutorials/astro-ssr-auth/step-8/index.markdoc": () => import("./step-8-B2XDcPfO.js").then((m) => m.default),
	"/src/content/docs/tutorials/flutter/step-1/index.markdoc": () => import("./step-1-DmKW4SpR.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-1/index.markdoc": () => import("./step-1-CVCZdysF.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-2/index.markdoc": () => import("./step-2-BF2xkMRJ.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-3/index.markdoc": () => import("./step-3-roszfI4T.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-4/index.markdoc": () => import("./step-4-lrP2MDRC.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-5/index.markdoc": () => import("./step-5-B9CTUX1o.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-6/index.markdoc": () => import("./step-6-Dl68RAXs.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-7/index.markdoc": () => import("./step-7-CYtOQjk-.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs/step-8/index.markdoc": () => import("./step-8-DRBtzmnr.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-1/index.markdoc": () => import("./step-1-Ccldj1C3.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-2/index.markdoc": () => import("./step-2-BpVvM-6E.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-3/index.markdoc": () => import("./step-3-BIonQMQC.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-4/index.markdoc": () => import("./step-4-_TC1FueF.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-5/index.markdoc": () => import("./step-5-1tcpKA5A.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-6/index.markdoc": () => import("./step-6-BhYWAEhg.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-7/index.markdoc": () => import("./step-7-CbQQ93ey.js").then((m) => m.default),
	"/src/content/docs/tutorials/nextjs-ssr-auth/step-8/index.markdoc": () => import("./step-8-6cNwrBBP.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-1/index.markdoc": () => import("./step-1-B7cBURug.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-2/index.markdoc": () => import("./step-2-CQ44wbOG.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-3/index.markdoc": () => import("./step-3-vqfQPGd0.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-4/index.markdoc": () => import("./step-4-Djt56VbZ.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-5/index.markdoc": () => import("./step-5-Dp6feXJy.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-6/index.markdoc": () => import("./step-6-mI70j1Ty.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-7/index.markdoc": () => import("./step-7-BSWm8VjX.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt/step-8/index.markdoc": () => import("./step-8-8bzz1oum.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-1/index.markdoc": () => import("./step-1-BpyGxpgP.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-2/index.markdoc": () => import("./step-2-RjYCn_bw.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-3/index.markdoc": () => import("./step-3-BJ0rIqqX.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-4/index.markdoc": () => import("./step-4-C8KrBgNO.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-5/index.markdoc": () => import("./step-5-Bc_LMfRE.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-6/index.markdoc": () => import("./step-6-PvonmYRD.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-7/index.markdoc": () => import("./step-7-Utrn91-s.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-8/index.markdoc": () => import("./step-8-BhaWJGgR.js").then((m) => m.default),
	"/src/content/docs/tutorials/nuxt-ssr-auth/step-9/index.markdoc": () => import("./step-9-CFnOAMVW.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-1/index.markdoc": () => import("./step-1-7-oyjqMd.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-2/index.markdoc": () => import("./step-2-DPPrCaJ8.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-3/index.markdoc": () => import("./step-3-CbRHdGCC.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-4/index.markdoc": () => import("./step-4-Dqw5DIhT.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-5/index.markdoc": () => import("./step-5-D7KRkJzz.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-6/index.markdoc": () => import("./step-6-D-hIbwGR.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-7/index.markdoc": () => import("./step-7-D2ICTLzv.js").then((m) => m.default),
	"/src/content/docs/tutorials/react/step-8/index.markdoc": () => import("./step-8-BY1ybv8I.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-1/index.markdoc": () => import("./step-1-BkyGVeeN.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-2/index.markdoc": () => import("./step-2-DgzSt34y.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-3/index.markdoc": () => import("./step-3-CivUjWs4.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-4/index.markdoc": () => import("./step-4-_I0vOllP.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-5/index.markdoc": () => import("./step-5-B2MBfx_s.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-6/index.markdoc": () => import("./step-6-BNDfkhCM.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-7/index.markdoc": () => import("./step-7-DBd9ow1b.js").then((m) => m.default),
	"/src/content/docs/tutorials/react-native/step-8/index.markdoc": () => import("./step-8-DH8jFbra.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-1/index.markdoc": () => import("./step-1-z5h9A_od.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-2/index.markdoc": () => import("./step-2-Bu3JAMei.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-3/index.markdoc": () => import("./step-3-BKVhEnVF.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-4/index.markdoc": () => import("./step-4-CHu0Ra5p.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-5/index.markdoc": () => import("./step-5-BTFrKVHt.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-6/index.markdoc": () => import("./step-6-DZUhjeaE.js").then((m) => m.default),
	"/src/content/docs/tutorials/refine/step-7/index.markdoc": () => import("./step-7-BaPJDYbQ.js").then((m) => m.default),
	"/src/content/docs/tutorials/subscriptions-with-stripe/step-1/index.markdoc": () => import("./step-1-ChvB-f7d.js").then((m) => m.default),
	"/src/content/docs/tutorials/subscriptions-with-stripe/step-2/index.markdoc": () => import("./step-2-DP0TiNA0.js").then((m) => m.default),
	"/src/content/docs/tutorials/subscriptions-with-stripe/step-3/index.markdoc": () => import("./step-3-DsUFHRR_.js").then((m) => m.default),
	"/src/content/docs/tutorials/subscriptions-with-stripe/step-4/index.markdoc": () => import("./step-4-zibaa5Q_.js").then((m) => m.default),
	"/src/content/docs/tutorials/subscriptions-with-stripe/step-5/index.markdoc": () => import("./step-5-C21WTA1p.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-1/index.markdoc": () => import("./step-1-BVRCTwBE.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-2/index.markdoc": () => import("./step-2-CTTHCacR.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-3/index.markdoc": () => import("./step-3-De1_VVmH.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-4/index.markdoc": () => import("./step-4-BFcKGsJN.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-5/index.markdoc": () => import("./step-5-DVGplh2E.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-6/index.markdoc": () => import("./step-6-BJyXcSJZ.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit/step-7/index.markdoc": () => import("./step-7-4aC6_FAs.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-1/index.markdoc": () => import("./step-1-VR5KCbla.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-2/index.markdoc": () => import("./step-2-Dn-hmlUx.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-3/index.markdoc": () => import("./step-3-BIF-k_ZZ.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-4/index.markdoc": () => import("./step-4-C7K1l8DV.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-5/index.markdoc": () => import("./step-5-BbHmYPGo.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-6/index.markdoc": () => import("./step-6-XBJvkP5n.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-csr-auth/step-7/index.markdoc": () => import("./step-7-DIrvLOSx.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-1/index.markdoc": () => import("./step-1-Bcl6SFCC.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-2/index.markdoc": () => import("./step-2-eQzapMyU.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-3/index.markdoc": () => import("./step-3-iDMKYjOI.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-4/index.markdoc": () => import("./step-4-CS0GgHV2.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-5/index.markdoc": () => import("./step-5-Bn4-n2BQ.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-6/index.markdoc": () => import("./step-6-BlrOjmdu.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-7/index.markdoc": () => import("./step-7-jc5eyefe.js").then((m) => m.default),
	"/src/content/docs/tutorials/sveltekit-ssr-auth/step-8/index.markdoc": () => import("./step-8-BSbnerAX.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-1/index.markdoc": () => import("./step-1-ByV0Ls9i.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-2/index.markdoc": () => import("./step-2-BiWCB8sZ.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-3/index.markdoc": () => import("./step-3-C1UE4ET8.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-4/index.markdoc": () => import("./step-4-CkUaq_pa.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-5/index.markdoc": () => import("./step-5-LUzKjUkN.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-6/index.markdoc": () => import("./step-6-CiF3X-RH.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-7/index.markdoc": () => import("./step-7-BBfuuH2r.js").then((m) => m.default),
	"/src/content/docs/tutorials/vue/step-8/index.markdoc": () => import("./step-8-Bs1wKZWW.js").then((m) => m.default)
};
var localContentLoaders = {
	"/src/content/docs-local/partners/apps/index.markdoc": () => import("./apps-Cx_-wF0q.js").then((m) => m.default),
	"/src/content/docs-local/partners/architecture/index.markdoc": () => import("./architecture-CY3EIx5J.js").then((m) => m.default),
	"/src/content/docs-local/partners/domains/index.markdoc": () => import("./domains-KxBjBNud.js").then((m) => m.default),
	"/src/content/docs-local/partners/guides/marketplaces/index.markdoc": () => import("./marketplaces-CTxX2pNg.js").then((m) => m.default),
	"/src/content/docs-local/partners/guides/multi-tenancy/index.markdoc": () => import("./multi-tenancy-frLgY-H0.js").then((m) => m.default),
	"/src/content/docs-local/partners/guides/provisioning/index.markdoc": () => import("./provisioning-DSmC6uij.js").then((m) => m.default),
	"/src/content/docs-local/partners/index.markdoc": () => import("./partners-CDAKSBrQ.js").then((m) => m.default),
	"/src/content/docs-local/partners/oauth-connect/index.markdoc": () => import("./oauth-connect-0hiCbvmX.js").then((m) => m.default),
	"/src/content/docs-local/partners/oauth-connect/scopes/index.markdoc": () => import("./scopes-IIiyhw3Z.js").then((m) => m.default),
	"/src/content/docs-local/partners/oauth-connect/setup/index.markdoc": () => import("./setup-DPHNNtGA.js").then((m) => m.default),
	"/src/content/docs-local/partners/org-api-keys/index.markdoc": () => import("./org-api-keys-CqkRmUBg.js").then((m) => m.default),
	"/src/content/docs-local/partners/org-api-keys/scopes/index.markdoc": () => import("./scopes-Bfkamaqn.js").then((m) => m.default),
	"/src/content/docs-local/partners/organizations/index.markdoc": () => import("./organizations-B71jM1ZV.js").then((m) => m.default),
	"/src/content/docs-local/partners/organizations/manage/index.markdoc": () => import("./manage-CUIOgEI0.js").then((m) => m.default),
	"/src/content/docs-local/partners/organizations/members/index.markdoc": () => import("./members-BXn2lUrL.js").then((m) => m.default),
	"/src/content/docs-local/partners/projects/create/index.markdoc": () => import("./create-Ddbqtx8f.js").then((m) => m.default),
	"/src/content/docs-local/partners/projects/index.markdoc": () => import("./projects-C_gmMQmq.js").then((m) => m.default),
	"/src/content/docs-local/partners/projects/resources/index.markdoc": () => import("./resources-CfGXifUM.js").then((m) => m.default),
	"/src/content/docs-local/partners/proxy/index.markdoc": () => import("./proxy-0jl-kk_K.js").then((m) => m.default),
	"/src/content/docs-local/partners/quick-start/index.markdoc": () => import("./quick-start-CFEH0GPE.js").then((m) => m.default),
	"/src/content/docs-local/partners/usage/index.markdoc": () => import("./usage-Cy8DoQiI.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/actions/index.markdoc": () => import("./actions-DrXJK0pv.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/add-memory/index.markdoc": () => import("./add-memory-BPScUYuE.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/add-model/index.markdoc": () => import("./add-model-DQb4FmFu.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/automations/index.markdoc": () => import("./automations-B3ykFDSp.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/chat/index.markdoc": () => import("./chat-B-V63nOg.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/connect-mcp/index.markdoc": () => import("./connect-mcp-DDvMOZEA.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/conversations/index.markdoc": () => import("./conversations-D0y0Uukn.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/create-automation/index.markdoc": () => import("./create-automation-BAZ_hHqO.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/index.markdoc": () => import("./agent-Cyj8_mW1.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/mcp/index.markdoc": () => import("./mcp-Dc-fZGKO.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/memory/index.markdoc": () => import("./memory-66j-Fgr3.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/models/index.markdoc": () => import("./models-DI_ACtI3.js").then((m) => m.default),
	"/src/content/docs-local/products/agent/quick-start/index.markdoc": () => import("./quick-start-WFAgAxnk.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/change-organization/index.markdoc": () => import("./change-organization-CnuPz3AC.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/connect/index.markdoc": () => import("./connect-ShXlwbDC.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/delete/index.markdoc": () => import("./delete-D35xUFYC.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/dns/index.markdoc": () => import("./dns-Cmwb659O.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/external/index.markdoc": () => import("./external-BDiqh3fO.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/index.markdoc": () => import("./domains-B0Lc_zlw.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/manage-dns/index.markdoc": () => import("./manage-dns-CNtqUFPR.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/presets/index.markdoc": () => import("./presets-B4fqy6Ss.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/pricing/index.markdoc": () => import("./pricing-Bv0Xp8V8.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/quick-start/index.markdoc": () => import("./quick-start-DwbRfo7Z.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/register/index.markdoc": () => import("./register-C2dZTAo5.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/registration/index.markdoc": () => import("./registration-C0qKEDBD.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/renewal/index.markdoc": () => import("./renewal-BPngY8H6.js").then((m) => m.default),
	"/src/content/docs-local/products/domains/transfer/index.markdoc": () => import("./transfer-DN3dWx9i.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/actions/index.markdoc": () => import("./actions-CHnyVgIf.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/conditions/index.markdoc": () => import("./conditions-gVmiWgq0.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/create/index.markdoc": () => import("./create-_N2jyxoX.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/delete/index.markdoc": () => import("./delete-Be-B6psV.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/index.markdoc": () => import("./firewall-D6Ji6tT0.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/monitor/index.markdoc": () => import("./monitor-Bx_L4Erv.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/priority/index.markdoc": () => import("./priority-DM3P4Vlh.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/quick-start/index.markdoc": () => import("./quick-start-EioaU3Zu.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/rules/index.markdoc": () => import("./rules-CpNrJZYL.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/scopes/index.markdoc": () => import("./scopes-PLeCM_XF.js").then((m) => m.default),
	"/src/content/docs-local/products/firewall/update/index.markdoc": () => import("./update-Ce_xVEqQ.js").then((m) => m.default),
	"/src/content/docs-local/products/network/index.markdoc": () => import("./network-Bf8iK92-.js").then((m) => m.default),
	"/src/content/docs-local/products/sites/index.markdoc": () => import("./sites-BX6mA7M2.js").then((m) => m.default),
	"/src/content/docs-local/products/storage/s3/index.markdoc": () => import("./s3-CIHBTX-7.js").then((m) => m.default),
	"/src/content/docs-local/tooling/ai/assistant/index.markdoc": () => import("./assistant-CH6JJH3o.js").then((m) => m.default),
	"/src/content/docs-local/tooling/ai/index.markdoc": () => import("./ai-C6-xyIKe.js").then((m) => m.default)
};
function slugFromModulePath(modulePath, base) {
	const pattern = base === "docs-local" ? /\/src\/content\/docs-local\/(.*)\/index\.markdoc$/ : /\/src\/content\/docs\/(.*)\/index\.markdoc$/;
	const match = modulePath.match(pattern);
	if (!match) return "";
	return match[1];
}
var contentPathBySlug = /* @__PURE__ */ new Map();
for (const modulePath of Object.keys(importedContentLoaders)) contentPathBySlug.set(slugFromModulePath(modulePath, "docs"), modulePath);
for (const modulePath of Object.keys(localContentLoaders)) contentPathBySlug.set(slugFromModulePath(modulePath, "docs-local"), modulePath);
var contentLoaders = {
	...importedContentLoaders,
	...localContentLoaders
};
var rawContentCache = /* @__PURE__ */ new Map();
var RAW_CONTENT_CACHE_MAX = 64;
function touchRawContentCache(slug, value) {
	if (rawContentCache.has(slug)) rawContentCache.delete(slug);
	else if (rawContentCache.size >= RAW_CONTENT_CACHE_MAX) {
		const oldest = rawContentCache.keys().next().value;
		if (oldest !== void 0) rawContentCache.delete(oldest);
	}
	rawContentCache.set(slug, value);
	return value;
}
async function loadRawContent(slug) {
	const modulePath = contentPathBySlug.get(slug);
	if (!modulePath) return null;
	{
		const cached = rawContentCache.get(slug);
		if (cached !== void 0) return touchRawContentCache(slug, cached);
	}
	const loader = contentLoaders[modulePath];
	if (!loader) return null;
	return touchRawContentCache(slug, await loader());
}
function preprocessMarkdocContent(content) {
	let result = content;
	result = result.replace(/^(#{1,6})\s+(.+?)\s*\{%\s*#([-\w]+)\s*%\}\s*$/gm, (_, hashes, title, id) => `${hashes} ${title} {#${id}}`);
	result = result.replace(/\{%\s*section\s+([^%]+?)\s*%\}/g, (_, attrs) => {
		const idMatch = attrs.match(/#([-\w]+)/);
		const titleMatch = attrs.match(/\btitle="([^"]*)"/);
		const stepMatch = attrs.match(/\bstep=(\d+)\b/);
		if (!idMatch) return "";
		const title = titleMatch?.[1] ?? idMatch[1];
		return `\n## ${stepMatch ? `${stepMatch[1]}. ` : ""}${title} {#${idMatch[1]}}\n`;
	});
	return result;
}
function buildDocsPage(meta, raw) {
	const withPartials = resolvePartials(raw);
	const content = stripFrontmatter(preprocessMarkdocContent(withPartials));
	const promptPath = parseFrontmatterString(withPartials, "prompt");
	return {
		meta,
		content,
		rawContent: withPartials,
		toc: extractDocsToc(withPartials),
		...promptPath ? { promptPath } : {}
	};
}
function getDocsPageMeta(slug) {
	return DOCS_PAGE_MAP[slug] ?? null;
}
async function getDocsPage(slug) {
	const meta = getDocsPageMeta(slug);
	if (!meta) return null;
	const raw = await loadRawContent(slug);
	if (!raw) return null;
	await preloadPartialsForContent(raw);
	return buildDocsPage(meta, raw);
}
async function getDocsMarkdownExport(slug) {
	const page = await getDocsPage(slug);
	if (!page) return null;
	return markdocToMarkdown(page.rawContent);
}
async function respondWithPrebuiltOrRuntime(relativePath, contentType, runtime) {
	if (process.env.NODE_ENV === "production") {
		const { respondWithClientStaticFile } = await import("./static-exports-Cd-F3eAB.js");
		const prebuilt = await respondWithClientStaticFile(relativePath, contentType);
		if (prebuilt.status !== 404) return prebuilt;
	}
	const body = await runtime();
	return new Response(body, { headers: {
		"Content-Type": contentType,
		"Cache-Control": "public, max-age=3600"
	} });
}
const LLMS_FULL_TXT_PATH = "/llms-full.txt";
const DOCS_LLMS_TXT_PATH = "/docs/llms.txt";
const DOCS_MD_PATH = "/docs.md";
const BLOG_MD_PATH = "/blog.md";
const CHANGELOG_MD_PATH = "/changelog.md";
const INTEGRATIONS_MD_PATH = "/integrations.md";
const DEFAULT_LLMS_ORIGIN = "https://appwrite.io";
function escapeLinkTitle(title) {
	return title.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}
function sanitizeDescription(description) {
	return description?.replace(/\s+/g, " ").trim() || void 0;
}
function formatLink(link, indent = "") {
	const description = sanitizeDescription(link.description);
	const base = `${indent}- [${escapeLinkTitle(link.title)}](${link.url})`;
	return description ? `${base}: ${description}` : base;
}
function formatSection(section) {
	const parts = [`## ${section.heading}`, ""];
	if (section.intro) parts.push(section.intro, "");
	parts.push(section.links.map((link) => formatLink(link)).join("\n"));
	return parts.join("\n");
}
function docsSlugToMarkdownUrl(slug, origin) {
	return slug ? `${origin}/docs/${slug}.md` : `${origin}/docs`;
}
function docsHrefToMarkdownUrl(href, origin) {
	if (!href.startsWith("/docs")) return null;
	return docsSlugToMarkdownUrl(href.replace(/^\/docs\/?/, "").replace(/\/+$/, ""), origin);
}
function buildIntegrationsLlmsSection(integrations, origin) {
	return {
		heading: "Integrations",
		links: integrations.map((integration) => ({
			title: integration.title,
			url: `${origin}/integrations/${integration.slug}.md`,
			description: integration.description
		}))
	};
}
function buildBlogLlmsSection(posts, origin) {
	return {
		heading: "Blog",
		links: posts.map((post) => ({
			title: post.title,
			url: `${origin}/blog/post/${post.slug}.md`,
			description: post.description
		}))
	};
}
function buildChangelogLlmsSection(entries, origin) {
	return {
		heading: "Changelog",
		links: entries.map((entry) => ({
			title: entry.title,
			url: `${origin}/changelog/entry/${entry.slug}.md`,
			description: entry.description
		}))
	};
}
function buildOptionalLlmsSection(origin) {
	return {
		heading: "Optional",
		links: [
			{
				title: "Pricing",
				url: `${origin}/pricing`,
				description: "Appwrite Cloud plans and pricing."
			},
			{
				title: "Auth",
				url: `${origin}/products/auth`,
				description: "Secure authentication with multiple sign-in methods."
			},
			{
				title: "Databases",
				url: `${origin}/products/databases`,
				description: "Scalable and robust databases."
			},
			{
				title: "Storage",
				url: `${origin}/products/storage`,
				description: "Securely store files with advanced compression and encryption."
			},
			{
				title: "Functions",
				url: `${origin}/products/functions`,
				description: "Deploy and scale serverless functions."
			},
			{
				title: "Messaging",
				url: `${origin}/products/messaging`,
				description: "Set up push notifications, emails, and SMS."
			},
			{
				title: "Sites",
				url: `${origin}/products/sites`,
				description: "Deploy and host static and server-side rendered websites."
			}
		]
	};
}
function findMeta(items, slug) {
	return items.find((item) => item.slug === slug);
}
function buildAppwriteLlmsTxt(data, origin = DEFAULT_LLMS_ORIGIN) {
	const blogExample = findMeta(data.blog, "appwrite-realtime") ?? data.blog[0];
	const changelogExample = findMeta(data.changelog, "2023-08-30") ?? data.changelog[0];
	const integrationExample = findMeta(data.integrations, "ai-openai") ?? data.integrations[0];
	const sections = [
		{
			heading: "MCP Server",
			intro: "Add Appwrite to Cursor, Claude, and other MCP clients so agents can call the Appwrite API and search the docs.",
			links: [
				{
					title: "Remote MCP Server",
					url: MCP_SERVER_URL,
					description: "Hosted streamable HTTP MCP endpoint."
				},
				{
					title: "Self-hosted MCP Server",
					url: MCP_SELF_HOSTED_DOCS_URL,
					description: "Run the MCP server locally with uvx and a project API key."
				},
				{
					title: "MCP Server Card",
					url: `${origin}${APPWRITE_MCP_SERVER_CARD_PATH}`,
					description: "SEP-1649 MCP Server Card for pre-connection discovery (/.well-known/mcp/server-card.json)."
				},
				{
					title: "AI Catalog",
					url: `${origin}${APPWRITE_AI_CATALOG_PATH}`,
					description: "Domain AI Catalog listing Appwrite MCP Server Cards (/.well-known/ai-catalog.json)."
				},
				{
					title: "MCP documentation",
					url: `${origin}${APPWRITE_MCP_DOCS_PATH}.md`,
					description: "Setup guides for the API and docs MCP servers."
				}
			]
		},
		{
			heading: "Skills",
			intro: `Best practices for building with Appwrite in coding agents. Install with \`${APPWRITE_AGENT_SKILLS_INSTALL}\`.`,
			links: [
				{
					title: "Skills Discovery",
					url: `${origin}${APPWRITE_AGENT_SKILLS_DISCOVERY_PATH}`,
					description: "Machine-readable list of Appwrite agent skills."
				},
				{
					title: "Skills repository",
					url: APPWRITE_AGENT_SKILLS_REPO,
					description: "Source for all Appwrite agent skills."
				},
				...APPWRITE_AGENT_SKILLS.map((skill) => ({
					title: skill.name,
					url: skill.url,
					description: skill.description
				})),
				{
					title: "Skills documentation",
					url: `${origin}/docs/tooling/ai/skills.md`,
					description: "How to install and use Appwrite agent skills."
				}
			]
		},
		{
			heading: "Command line",
			intro: "Install and use the Appwrite CLI from the terminal.",
			links: [
				{
					title: "CLI installation",
					url: `${origin}/docs/tooling/command-line/installation.md`,
					description: "Install the Appwrite CLI with npm, Homebrew, or a standalone binary."
				},
				{
					title: "CLI commands",
					url: `${origin}/docs/tooling/command-line/commands.md`,
					description: "Reference for Appwrite CLI commands."
				},
				{
					title: "Non-interactive mode",
					url: `${origin}/docs/tooling/command-line/non-interactive.md`,
					description: "Use the CLI in CI/CD pipelines."
				}
			]
		},
		{
			heading: "Documentation",
			intro: "Every documentation page has a plain Markdown version: append `.md` to its URL.",
			links: [
				{
					title: "Docs index (Markdown)",
					url: `${origin}${DOCS_MD_PATH}`,
					description: "Top-level documentation sections for agents."
				},
				{
					title: "Full documentation index",
					url: `${origin}${DOCS_LLMS_TXT_PATH}`,
					description: "Nested link index of every documentation page."
				},
				{
					title: "Complete documentation (single file)",
					url: `${origin}${LLMS_FULL_TXT_PATH}`,
					description: "All documentation pages concatenated as one Markdown file."
				},
				{
					title: "Docs as Markdown",
					url: `${origin}/docs/tooling/ai/docs-as-markdown.md`,
					description: "How Appwrite exposes documentation for AI tools."
				},
				{
					title: "API references",
					url: `${origin}/docs/references.md`,
					description: "REST, GraphQL, and SDK API references."
				},
				{
					title: "SDKs",
					url: `${origin}/docs/sdks.md`,
					description: "Official Appwrite SDKs for every major platform."
				}
			]
		},
		{
			heading: "Blog",
			intro: "Articles on product updates and developer guides. The index enumerates every post. Append `.md` to any post URL for the raw Markdown source.",
			links: [{
				title: "Blog index (Markdown)",
				url: `${origin}${BLOG_MD_PATH}`,
				description: "Flat list of every public blog post."
			}, ...blogExample ? [{
				title: `Example: ${blogExample.title}`,
				url: `${origin}/blog/post/${blogExample.slug}.md`,
				description: blogExample.description
			}] : []]
		},
		{
			heading: "Changelog",
			intro: "Product updates and releases. Append `.md` to any entry URL for the raw Markdown source.",
			links: [{
				title: "Changelog index (Markdown)",
				url: `${origin}${CHANGELOG_MD_PATH}`,
				description: "Flat list of every changelog entry."
			}, ...changelogExample ? [{
				title: `Example: ${changelogExample.title}`,
				url: `${origin}/changelog/entry/${changelogExample.slug}.md`,
				description: changelogExample.description
			}] : []]
		},
		{
			heading: "Integrations",
			intro: "Connect Appwrite to third-party tools. Append `.md` to any integration URL for the raw Markdown source.",
			links: [{
				title: "Integrations index (Markdown)",
				url: `${origin}${INTEGRATIONS_MD_PATH}`,
				description: "Flat list of every integration guide."
			}, ...integrationExample ? [{
				title: `Example: ${integrationExample.title}`,
				url: `${origin}/integrations/${integrationExample.slug}.md`,
				description: integrationExample.description
			}] : []]
		},
		buildOptionalLlmsSection(origin)
	];
	return `${[
		"# Appwrite",
		"",
		"> Appwrite is an open-source backend platform with authentication, databases, storage, serverless functions, messaging, and web hosting, available as a managed cloud service or self-hosted.",
		"",
		"For AI agents and automation, use the tools below."
	].join("\n")}\n\n${sections.map(formatSection).join("\n\n")}\n`;
}
function pageMetaBySlug(pages) {
	return new Map(pages.map((page) => [page.slug, {
		slug: page.slug,
		title: page.title,
		description: page.description
	}]));
}
function linkFromDocsNav(item, origin, metaBySlug) {
	const url = docsHrefToMarkdownUrl(item.href, origin);
	if (!url) return null;
	const slug = item.href.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
	const meta = metaBySlug.get(slug);
	return {
		title: item.label,
		url,
		description: meta?.description
	};
}
function formatDocsNavTree(navigation, origin, metaBySlug, seen) {
	const lines = [];
	for (const node of navigation) {
		if (isDocsNavGroup(node)) {
			if (node.label) lines.push("", `### ${node.label}`, "");
			for (const item of node.items) {
				const link$1 = linkFromDocsNav(item, origin, metaBySlug);
				if (!link$1) continue;
				const slug$1 = item.href.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
				if (slug$1) seen.add(slug$1);
				else seen.add("");
				lines.push(formatLink(link$1));
			}
			continue;
		}
		const link = linkFromDocsNav(node, origin, metaBySlug);
		if (!link) continue;
		const slug = node.href.replace(/^\/docs\/?/, "").replace(/\/+$/, "");
		if (slug) seen.add(slug);
		else seen.add("");
		lines.push(formatLink(link));
	}
	return lines;
}
function buildDocsLlmsTxt(pages, origin = DEFAULT_LLMS_ORIGIN) {
	const metaBySlug = pageMetaBySlug(pages);
	const seen = /* @__PURE__ */ new Set();
	const parts = [
		"# Appwrite Docs",
		"",
		"> Appwrite documentation covering products, APIs, SDKs, tooling, self-hosting, and platform guides.",
		"",
		`Full documentation content (single file): ${origin}${LLMS_FULL_TXT_PATH}`,
		"",
		`Top-level docs index: ${origin}${DOCS_MD_PATH}`,
		"",
		"Every page below is also available as Markdown by appending `.md` to its URL."
	];
	for (const section of getAllDocsSectionNavs()) {
		const sectionLines = formatDocsNavTree(section.navigation, origin, metaBySlug, seen);
		if (sectionLines.every((line) => line === "" || line.startsWith("###"))) continue;
		parts.push("", `## ${section.parent.label}`, ...sectionLines);
	}
	const orphans = pages.filter((page) => !seen.has(page.slug));
	if (orphans.length > 0) {
		parts.push("", "## Other");
		for (const page of orphans) parts.push(formatLink({
			title: page.title,
			url: docsSlugToMarkdownUrl(page.slug, origin),
			description: page.description
		}));
	}
	return `${parts.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
}
function buildDocsMarkdownIndex(pages, origin = DEFAULT_LLMS_ORIGIN) {
	const metaBySlug = pageMetaBySlug(pages);
	const links = [
		{
			slug: "quick-starts",
			title: "Quick starts"
		},
		{
			slug: "tutorials",
			title: "Tutorials"
		},
		{
			slug: "sdks",
			title: "SDKs"
		},
		{
			slug: "products/auth",
			title: "Auth"
		},
		{
			slug: "products/databases",
			title: "Databases"
		},
		{
			slug: "products/storage",
			title: "Storage"
		},
		{
			slug: "products/functions",
			title: "Functions"
		},
		{
			slug: "products/messaging",
			title: "Messaging"
		},
		{
			slug: "products/sites",
			title: "Sites"
		},
		{
			slug: "products/domains",
			title: "Domains"
		},
		{
			slug: "apis",
			title: "APIs"
		},
		{
			slug: "tooling/ai",
			title: "AI tooling"
		},
		{
			slug: "tooling/command-line/installation",
			title: "CLI"
		},
		{
			slug: "advanced/platform",
			title: "Platform"
		},
		{
			slug: "advanced/migrations",
			title: "Migrations"
		},
		{
			slug: "advanced/security",
			title: "Security"
		},
		{
			slug: "advanced/self-hosting",
			title: "Self-hosting"
		},
		{
			slug: "advanced/billing",
			title: "Billing"
		},
		{
			slug: "references",
			title: "API references"
		}
	].flatMap((hub) => {
		const meta = metaBySlug.get(hub.slug);
		if (!meta) return [];
		return [{
			title: hub.title,
			url: docsSlugToMarkdownUrl(hub.slug, origin),
			description: meta.description
		}];
	});
	return `${[
		"# Appwrite Docs",
		"",
		"> Top-level documentation sections. For the full nested page index, see the documentation llms.txt. For the complete concatenated docs, see llms-full.txt.",
		"",
		`- [Full documentation index](${origin}${DOCS_LLMS_TXT_PATH}): Nested link index of every documentation page.`,
		`- [Complete documentation (single file)](${origin}${LLMS_FULL_TXT_PATH}): All documentation pages concatenated as one Markdown file.`,
		"",
		"## Guides",
		"",
		links.map((link) => formatLink(link)).join("\n")
	].join("\n")}\n`;
}
function buildContentIndexMarkdown(options) {
	const { title, description, pathHint, section } = options;
	return [
		`# ${title}`,
		"",
		`> ${description}`,
		"",
		`Append \`.md\` to any ${pathHint} URL, or open the links below, to receive the raw Markdown source.`,
		"",
		section.links.map((link) => formatLink(link)).join("\n"),
		""
	].join("\n");
}
function buildBlogMarkdownIndex(posts, origin = DEFAULT_LLMS_ORIGIN) {
	return buildContentIndexMarkdown({
		title: "Appwrite Blog",
		description: "Articles on Appwrite product updates, engineering, and developer guides.",
		pathHint: "blog post",
		section: buildBlogLlmsSection(posts, origin)
	});
}
function buildChangelogMarkdownIndex(entries, origin = DEFAULT_LLMS_ORIGIN) {
	return buildContentIndexMarkdown({
		title: "Appwrite Changelog",
		description: "Appwrite product updates and release notes.",
		pathHint: "changelog entry",
		section: buildChangelogLlmsSection(entries, origin)
	});
}
function buildIntegrationsMarkdownIndex(integrations, origin = DEFAULT_LLMS_ORIGIN) {
	return buildContentIndexMarkdown({
		title: "Appwrite Integrations",
		description: "Guides for connecting Appwrite to third-party tools and platforms.",
		pathHint: "integration",
		section: buildIntegrationsLlmsSection(integrations, origin)
	});
}
function collectLlmsContentData() {
	return {
		docs: DOCS_PAGES.map((page) => ({
			slug: page.slug,
			title: page.title,
			description: page.description
		})),
		integrations: getAllIntegrationMeta().map((integration) => ({
			slug: integration.slug,
			title: integration.title,
			description: integration.description
		})),
		blog: getPublicBlogPosts().map((post) => ({
			slug: post.slug,
			title: post.title,
			description: post.description
		})),
		changelog: getAllChangelogEntries().map((entry) => ({
			slug: entry.slug,
			title: entry.title,
			description: entry.description
		}))
	};
}
function generateLlmsTxt(origin = DEFAULT_LLMS_ORIGIN) {
	return buildAppwriteLlmsTxt(collectLlmsContentData(), origin);
}
function generateDocsLlmsTxt(origin = DEFAULT_LLMS_ORIGIN) {
	return buildDocsLlmsTxt(DOCS_PAGES, origin);
}
function generateDocsMarkdownIndex(origin = DEFAULT_LLMS_ORIGIN) {
	return buildDocsMarkdownIndex(DOCS_PAGES, origin);
}
function generateBlogMarkdownIndex(origin = DEFAULT_LLMS_ORIGIN) {
	return buildBlogMarkdownIndex(collectLlmsContentData().blog, origin);
}
function generateChangelogMarkdownIndex(origin = DEFAULT_LLMS_ORIGIN) {
	return buildChangelogMarkdownIndex(collectLlmsContentData().changelog, origin);
}
function generateIntegrationsMarkdownIndex(origin = DEFAULT_LLMS_ORIGIN) {
	return buildIntegrationsMarkdownIndex(collectLlmsContentData().integrations, origin);
}
var DOCS_REDIRECTS = {
	references: "references/cloud/client-web/account",
	"references/quick-start": "references/cloud/client-web/account",
	"tooling/command-line": "tooling/command-line/installation",
	"tooling/assistant": "products/agent",
	"tooling/ai/assistant": "products/agent",
	"tooling/skills": "tooling/ai/skills",
	"products/databases/spatial": "products/databases/geo-queries#spatial-columns",
	"tutorials/android": "tutorials/android/step-1",
	"tutorials/apple": "tutorials/apple/step-1",
	"tutorials/astro-ssr-auth": "tutorials/astro-ssr-auth/step-1",
	"tutorials/flutter": "tutorials/flutter/step-1",
	"tutorials/nextjs": "tutorials/nextjs/step-1",
	"tutorials/nextjs-ssr-auth": "tutorials/nextjs-ssr-auth/step-1",
	"tutorials/nuxt": "tutorials/nuxt/step-1",
	"tutorials/nuxt-ssr-auth": "tutorials/nuxt-ssr-auth/step-1",
	"tutorials/react": "tutorials/react/step-1",
	"tutorials/react-native": "tutorials/react-native/step-1",
	"tutorials/refine": "tutorials/refine/step-1",
	"tutorials/subscriptions-with-stripe": "tutorials/subscriptions-with-stripe/step-1",
	"tutorials/sveltekit": "tutorials/sveltekit/step-1",
	"tutorials/sveltekit-csr-auth": "tutorials/sveltekit-csr-auth/step-1",
	"tutorials/sveltekit-ssr-auth": "tutorials/sveltekit-ssr-auth/step-1",
	"tutorials/vue": "tutorials/vue/step-1",
	"partners/guides/manage-domains": "partners/domains",
	"partners/guides/provision-projects": "partners/guides/provisioning",
	"partners/guides/marketplace": "partners/guides/marketplaces",
	"partners/guides/multi-tenant": "partners/guides/multi-tenancy",
	"products/network/waf": "products/firewall"
};
function parseFullPathTarget(fullPath) {
	const hashIndex = fullPath.indexOf("#");
	if (hashIndex === -1) return { pathname: fullPath };
	return {
		pathname: fullPath.slice(0, hashIndex),
		hash: fullPath.slice(hashIndex + 1)
	};
}
function getDocsRedirectTarget(slug) {
	const normalized = slug.replace(/^\/+|\/+$/g, "");
	const target = DOCS_REDIRECTS[normalized];
	if (target) return parseFullPathTarget(`/docs/${target.replace(/\/+$/, "")}`);
	const legacyTarget = getLegacyRedirectTarget(`/docs/${normalized}`);
	if (legacyTarget?.startsWith("/docs")) return parseFullPathTarget(legacyTarget);
	return null;
}
var $$splitComponentImporter = () => import("./_-BNGxzysI.js");
var $$splitNotFoundComponentImporter = () => import("./_-Dy8bWYoL.js");
var DOCS_LLMS_TXT_SPLAT = "llms.txt";
function isFeatureGatedDocsSlugHidden(slug, options) {
	if (isPartnersDocsSlug(slug)) {
		if (options?.deferPartnersOnServer) return shouldBlockPartnersDocs();
		return !isPartnersDocsEnabled();
	}
	if (isFirewallDocsSlug(slug) && !isFirewallDocsEnabled()) return true;
	if (isAgentDocsSlug(slug) && !isAgentDocsEnabled()) return true;
	return false;
}
const Route$1 = createFileRoute("/docs/$")({
	ssr: true,
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	server: { handlers: { GET: async ({ params, request, next }) => {
		const splat = params._splat ?? "";
		if (splat === DOCS_LLMS_TXT_SPLAT) {
			trackServerPageview(request);
			return respondWithPrebuiltOrRuntime("docs/llms.txt", "text/markdown; charset=utf-8", () => generateDocsLlmsTxt());
		}
		if (!splat.endsWith(".md")) return next();
		const slug = splat.slice(0, -3);
		if (isFeatureGatedDocsSlugHidden(slug)) return new Response("Not found", { status: 404 });
		const markdown = await getDocsMarkdownExport(slug);
		if (!markdown) return new Response("Not found", { status: 404 });
		trackServerPageview(request);
		return new Response(markdown, { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600"
		} });
	} } },
	beforeLoad: ({ params }) => {
		const splat = params._splat ?? "";
		if (splat === DOCS_LLMS_TXT_SPLAT || splat.endsWith(".md")) return;
		if (isFeatureGatedDocsSlugHidden(splat, { deferPartnersOnServer: true })) throw redirect({
			to: "/docs",
			replace: true
		});
	},
	loader: async ({ params }) => {
		const splat = params._splat ?? "";
		if (splat === DOCS_LLMS_TXT_SPLAT || splat.endsWith(".md")) throw notFound();
		const redirectTarget = getDocsRedirectTarget(splat);
		if (redirectTarget) {
			if (isFeatureGatedDocsSlugHidden(redirectTarget.pathname.replace(/^\/docs\/?/, "").replace(/\/+$/, ""), { deferPartnersOnServer: true })) throw redirect({
				to: "/docs",
				replace: true
			});
			throw redirect({
				to: redirectTarget.pathname,
				hash: redirectTarget.hash,
				replace: true
			});
		}
		const page = await getDocsPage(splat);
		if (!page) throw notFound();
		return { page };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.page) return {};
		const { meta, slug } = {
			meta: loaderData.page.meta,
			slug: loaderData.page.meta.slug
		};
		return {
			meta: getDocsMetaTags({
				...meta,
				slug
			}),
			links: slug ? [{
				rel: "alternate",
				type: "text/markdown",
				href: `/docs/${slug}.md`
			}] : [],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(getDocsBreadcrumbSchema(meta, slug))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(getDocsArticleSchema(meta, slug))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { generateIntegrationsMarkdownIndex as a, getDocsPage as c, DocsPromptProvider as d, DOCS_CONTENT_HMR_EVENT as f, generateDocsMarkdownIndex as i, DocsPageHeaderActions as l, generateBlogMarkdownIndex as n, generateLlmsTxt as o, generateChangelogMarkdownIndex as r, respondWithPrebuiltOrRuntime as s, Route$1 as t, DocsMarkdown as u };
