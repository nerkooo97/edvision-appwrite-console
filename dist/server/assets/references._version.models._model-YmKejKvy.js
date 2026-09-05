import "./utils-DoqqkI3X.js";
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
import "./constants-B5zUV45z.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import "./prose-typography-BMJgwhz7.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./badge-L9aO6DfA.js";
import "./textarea-CfKMnSVC.js";
import "./sheet-CbM5lIV1.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./horizontal-resize-BcegzCwH.js";
import "./CopyableId-DPIWAPIb.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import "./agent-docs-feature-COYbd_m1.js";
import "./navigation-BOrhbgOp.js";
import "./nav-styles-B9rWOQql.js";
import "./nav-styles-BnkuEWRE.js";
import "./parse-params-BpMT2Ilk.js";
import "./feedback-BwuMSGir.js";
import "./og-image-DdV5MU0-.js";
import "./route-meta-B5-isquS.js";
import "./seo-BV_qhvZh.js";
import "./api-reference-DWWHtdM8.js";
import { t as Route } from "./references._version.models._model-qJWacSoC.js";
import "./use-article-sticky-overlay-BWMK17-U.js";
import { t as MethodDescriptionMarkdown } from "./MethodDescriptionMarkdown-HfQh_Tws.js";
import "./explorer-styles-Diz32kko.js";
import "./DocsSectionSubnav-DjZ_YztL.js";
import { t as DocsLayout } from "./DocsLayout-t9FmNqQ4.js";
import { r as ApiReferenceCopyableName, t as ApiReferencePropertyTypeCell } from "./ApiReferencePropertyTypeCell-0qU58M-h.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
function ApiReferenceModelView({ data, version }) {
	const slug = `references/${version}/models/${data.id}`;
	const [exampleTab, setExampleTab] = useState(() => data.examples[0]?.type.toLowerCase() ?? "rest");
	const activeExample = useMemo(() => data.examples.find((example) => example.type.toLowerCase() === exampleTab) ?? data.examples[0], [data.examples, exampleTab]);
	return /* @__PURE__ */ jsx(DocsLayout, {
		slug,
		title: data.title,
		toc: [],
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-10",
			children: [/* @__PURE__ */ jsxs("section", {
				id: "properties",
				className: "scroll-mt-28 space-y-4",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[20px] font-semibold tracking-tight text-foreground",
					children: "Properties"
				}), /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-xl border border-border",
					children: /* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Name"
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Type"
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: "Description"
							})
						]
					}) }), /* @__PURE__ */ jsx(TableBody, { children: data.properties.map((property) => /* @__PURE__ */ jsxs(TableRow, { children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3",
							children: /* @__PURE__ */ jsx(ApiReferenceCopyableName, {
								name: property.name,
								textClassName: "text-[13px] text-foreground"
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 align-top",
							children: /* @__PURE__ */ jsx(ApiReferencePropertyTypeCell, { property })
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] text-muted-foreground",
							children: property.description ? /* @__PURE__ */ jsx(MethodDescriptionMarkdown, {
								content: property.relatedModels ? `${property.description} Can be one of: ${property.relatedModels}` : property.description,
								className: "border-0 bg-transparent p-0 text-[13px] text-muted-foreground [&_a]:text-foreground [&_a]:underline-offset-4 [&_a]:hover:underline [&_code]:bg-muted/50"
							}) : null
						})
					] }, property.name)) })] })
				})]
			}), activeExample ? /* @__PURE__ */ jsxs("section", {
				id: "example",
				className: "scroll-mt-28 space-y-4",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[20px] font-semibold tracking-tight text-foreground",
					children: "Example"
				}), /* @__PURE__ */ jsx(ConnectCodeExample, {
					code: JSON.stringify(activeExample.example, null, 2),
					language: "json",
					tabs: data.examples.length > 1 ? data.examples.map((example) => ({
						id: example.type.toLowerCase(),
						label: example.type
					})) : void 0,
					activeTabId: exampleTab,
					onTabChange: setExampleTab
				})]
			}) : null]
		})
	});
}
function ApiReferenceModelPage() {
	const { data, version } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(ApiReferenceModelView, {
		data,
		version
	});
}
export { ApiReferenceModelPage as component };
