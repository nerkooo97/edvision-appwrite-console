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
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./apps-logo-Bz8cZPsI.js";
import { n as trimOrEmpty, r as useOrgAppUpdate, t as nonEmptyList } from "./useOrgAppUpdate-SSQwla9J.js";
import { n as AppLogoFilePicker, t as AppImagesPicker } from "./AppImagesPicker-CH9XXBuS.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
function BrandingCard({ orgId, app }) {
	const t = useT();
	const { submit, isUpdating } = useOrgAppUpdate(orgId, app);
	const [clientUri, setClientUri] = useState(app.clientUri ?? "");
	const [logoUri, setLogoUri] = useState(app.logoUri ?? "");
	const [images, setImages] = useState(app.images ?? []);
	useEffect(() => {
		setClientUri(app.clientUri ?? "");
		setLogoUri(app.logoUri ?? "");
		setImages(app.images ?? []);
	}, [app]);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Branding")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("URLs shown on the OAuth2 consent screen.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-branding-homepage",
							children: t("Homepage URL")
						}), /* @__PURE__ */ jsx(Input, {
							id: "app-branding-homepage",
							value: clientUri,
							onChange: (e) => setClientUri(e.target.value),
							placeholder: "https://example.com"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, { children: t("Logo") }), /* @__PURE__ */ jsx(AppLogoFilePicker, {
							teamId: orgId,
							value: logoUri,
							onChange: setLogoUri,
							disabled: isUpdating
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, { children: t("Images") }), /* @__PURE__ */ jsx(AppImagesPicker, {
							teamId: orgId,
							value: images,
							onChange: setImages,
							disabled: isUpdating
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
						clientUri: trimOrEmpty(clientUri),
						logoUri: trimOrEmpty(logoUri),
						images: nonEmptyList(images)
					}),
					children: t("Update")
				})
			})
		]
	});
}
function View() {
	const t = useT();
	const { orgId, appId } = useParams({ strict: false });
	const { app } = useOrganizationApp(appId);
	if (!app || !orgId) return null;
	const { submit, isUpdating } = useOrgAppUpdate(orgId, app);
	const handlePublishToggle = async (enabled) => {
		try {
			await submit({ enabled }, { successMessage: enabled ? t("App published") : t("App unpublished") });
		} catch {}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Publish")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Published apps appear in the marketplace catalog for other organizations.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "app-publication-enabled",
							children: t("Published")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: app.enabled ? t("This app is visible in the marketplace.") : t("This app is a draft and not listed publicly.")
						})] }), /* @__PURE__ */ jsx(Switch, {
							id: "app-publication-enabled",
							checked: app.enabled,
							onCheckedChange: handlePublishToggle,
							disabled: isUpdating
						})]
					})
				})
			]
		}), /* @__PURE__ */ jsx(BrandingCard, {
			orgId,
			app
		})]
	});
}
function OrgAppSettingsPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { OrgAppSettingsPage as component };
