import { n as useT } from "./translate-DZcqveGn.js";
import { n as headerAlertOutlineButtonClass, t as HeaderAlertBar } from "./HeaderAlertBar-CK7Gy4sE.js";
import { jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";
function OrganizationFailedInvoiceHeaderBanner({ organizationId, show, orgBillingReadonly }) {
	const t = useT();
	if (!show || !organizationId) return null;
	return /* @__PURE__ */ jsx(HeaderAlertBar, {
		variant: "danger",
		icon: AlertCircle,
		role: "alert",
		action: /* @__PURE__ */ jsx(Link, {
			to: "/organizations/$orgId/settings/billing",
			params: { orgId: organizationId },
			className: headerAlertOutlineButtonClass("danger"),
			children: t("Fix payment")
		}),
		children: orgBillingReadonly ? t("Payment failed - your organization has restricted access due to an unresolved billing issue. Changes to projects and services are restricted until payment succeeds. Update billing to restore full access.") : t("Payment failed - act now. Unresolved billing may interrupt your projects and services.")
	});
}
export { OrganizationFailedInvoiceHeaderBanner as t };
