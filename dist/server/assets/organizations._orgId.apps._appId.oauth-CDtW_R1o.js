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
import "./input-yKHNPhDZ.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./radio-group-aZurL4eE.js";
import { r as useOrgAppUpdate, t as nonEmptyList } from "./useOrgAppUpdate-SSQwla9J.js";
import { t as InputTags } from "./input-tags-CcIzF147.js";
import { n as OAuth2ClientTypePicker, t as OAUTH2_DEVICE_FLOW_DESCRIPTION } from "./OAuth2ClientTypePicker-p69MRt9P.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
function View() {
	const t = useT();
	const { orgId, appId } = useParams({ strict: false });
	const { app } = useOrganizationApp(appId);
	if (!app || !orgId) return null;
	const { submit, isUpdating } = useOrgAppUpdate(orgId, app);
	const [clientType, setClientType] = useState(app.type || "confidential");
	const [deviceFlow, setDeviceFlow] = useState(app.deviceFlow ?? false);
	const [redirectUris, setRedirectUris] = useState(app.redirectUris ?? []);
	const [postLogoutRedirectUris, setPostLogoutRedirectUris] = useState(app.postLogoutRedirectUris ?? []);
	useEffect(() => {
		setClientType(app.type || "confidential");
		setDeviceFlow(app.deviceFlow ?? false);
		setRedirectUris(app.redirectUris ?? []);
		setPostLogoutRedirectUris(app.postLogoutRedirectUris ?? []);
	}, [app]);
	const handleUpdate = async () => {
		const uris = nonEmptyList(redirectUris);
		if (uris.length === 0) return;
		await submit({
			type: clientType,
			deviceFlow,
			redirectUris: uris,
			postLogoutRedirectUris: nonEmptyList(postLogoutRedirectUris)
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("OAuth client")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Redirect URIs and client type for OAuth2 and OpenID Connect.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsx(OAuth2ClientTypePicker, {
						value: clientType,
						onChange: setClientType,
						disabled: isUpdating
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-oauth-device-flow",
							children: t("Device flow")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t(OAUTH2_DEVICE_FLOW_DESCRIPTION)
						})] }), /* @__PURE__ */ jsx(Switch, {
							id: "app-oauth-device-flow",
							checked: deviceFlow,
							disabled: isUpdating,
							onCheckedChange: setDeviceFlow
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, { children: t("Redirect URIs") }), /* @__PURE__ */ jsx(InputTags, {
							value: redirectUris,
							onChange: setRedirectUris,
							placeholder: t("Add redirect URI and press Enter")
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, { children: t("Post-logout redirect URIs") }), /* @__PURE__ */ jsx(InputTags, {
							value: postLogoutRedirectUris,
							onChange: setPostLogoutRedirectUris,
							placeholder: t("Add post-logout URI and press Enter")
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: isUpdating || nonEmptyList(redirectUris).length === 0,
					onClick: handleUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function OrgAppOAuthPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { OrgAppOAuthPage as component };
