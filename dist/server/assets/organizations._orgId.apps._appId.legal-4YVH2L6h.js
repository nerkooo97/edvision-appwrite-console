import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { ku as useOrganizationApp } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { n as trimOrEmpty, r as useOrgAppUpdate } from "./useOrgAppUpdate-SSQwla9J.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
function View() {
	const t = useT();
	const { orgId, appId } = useParams({ strict: false });
	const { app } = useOrganizationApp(appId);
	if (!app || !orgId) return null;
	const { submit, isUpdating } = useOrgAppUpdate(orgId, app);
	const [privacyPolicyUrl, setPrivacyPolicyUrl] = useState(app.privacyPolicyUrl ?? "");
	const [termsUrl, setTermsUrl] = useState(app.termsUrl ?? "");
	const [dataDeletionUrl, setDataDeletionUrl] = useState(app.dataDeletionUrl ?? "");
	useEffect(() => {
		setPrivacyPolicyUrl(app.privacyPolicyUrl ?? "");
		setTermsUrl(app.termsUrl ?? "");
		setDataDeletionUrl(app.dataDeletionUrl ?? "");
	}, [app]);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Legal")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Policy links shown on the OAuth2 consent screen.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-legal-privacy",
							children: t("Privacy policy")
						}), /* @__PURE__ */ jsx(Input, {
							id: "app-legal-privacy",
							value: privacyPolicyUrl,
							onChange: (e) => setPrivacyPolicyUrl(e.target.value),
							placeholder: "https://example.com/privacy"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-legal-terms",
							children: t("Terms of service")
						}), /* @__PURE__ */ jsx(Input, {
							id: "app-legal-terms",
							value: termsUrl,
							onChange: (e) => setTermsUrl(e.target.value),
							placeholder: "https://example.com/terms"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-legal-deletion",
							children: t("Data deletion")
						}), /* @__PURE__ */ jsx(Input, {
							id: "app-legal-deletion",
							value: dataDeletionUrl,
							onChange: (e) => setDataDeletionUrl(e.target.value),
							placeholder: "https://example.com/delete-data"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: isUpdating,
					onClick: () => submit({
						privacyPolicyUrl: trimOrEmpty(privacyPolicyUrl),
						termsUrl: trimOrEmpty(termsUrl),
						dataDeletionUrl: trimOrEmpty(dataDeletionUrl)
					}),
					children: t("Update")
				})
			})
		]
	});
}
function OrgAppLegalPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { OrgAppLegalPage as component };
