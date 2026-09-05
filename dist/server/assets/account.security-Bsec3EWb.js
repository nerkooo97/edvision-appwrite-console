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
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
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
import "./page-direction-CnacIIOa.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import "./CopyableId-DPIWAPIb.js";
import { t as Route } from "./account.security-DhZVX5Q1.js";
import "./input-otp-DTuOA8dL.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { i as MFASection, r as IdentitiesSection, s as UpdatePasswordSection } from "./Overview-DFHEPqcV.js";
import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
function AccountSecurity({ initialData } = {}) {
	const { features } = useConsoleProfile();
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: useMemo(() => {
		const items = [{
			id: "password",
			search: {
				title: "Update password",
				keywords: [
					"password",
					"change",
					"reset",
					"recovery"
				]
			},
			node: /* @__PURE__ */ jsx(UpdatePasswordSection, {})
		}];
		if (features.accountIdentities) items.push({
			id: "identities",
			search: {
				title: "Identities",
				keywords: [
					"oauth",
					"github",
					"google",
					"social",
					"login"
				]
			},
			node: /* @__PURE__ */ jsx(IdentitiesSection, { initialData: initialData?.identities })
		});
		if (features.accountMfa) items.push({
			id: "mfa",
			search: {
				title: "Multi-factor authentication",
				keywords: [
					"mfa",
					"2fa",
					"totp",
					"authenticator",
					"recovery codes"
				]
			},
			node: /* @__PURE__ */ jsx(MFASection, {})
		});
		return items;
	}, [
		features.accountIdentities,
		features.accountMfa,
		initialData?.identities
	]) });
}
function AccountSecurityPage() {
	return /* @__PURE__ */ jsx(AccountSecurity, { initialData: Route.useLoaderData() });
}
export { AccountSecurityPage as component };
