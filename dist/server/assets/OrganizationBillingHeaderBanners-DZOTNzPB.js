import { n as useT } from "./translate-DZcqveGn.js";
import { F as isBudgetLimitReached, G as organizationQueryOptions, I as isOrganizationBillingReadonlyStatus, Xt as getSingleRecognizedPlanUsageLimitLabel, Zt as isPlanUsageLimitReached, kt as useOrganizationFailedInvoicePresence } from "./organizations-BKtnlNrj.js";
import { n as headerAlertOutlineButtonClass, r as headerAlertTextButtonClass, t as HeaderAlertBar } from "./HeaderAlertBar-CK7Gy4sE.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as OrganizationFailedInvoiceHeaderBanner } from "./OrganizationFailedInvoiceHeaderBanner-voBgqGBe.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
function OrganizationBudgetLimitHeaderBanner({ organizationId, show }) {
	const t = useT();
	if (!show || !organizationId) return null;
	return /* @__PURE__ */ jsx(HeaderAlertBar, {
		variant: "danger",
		icon: AlertCircle,
		role: "alert",
		action: /* @__PURE__ */ jsx(Link, {
			to: "/organizations/$orgId/settings/billing",
			params: { orgId: organizationId },
			hash: "update-budget",
			className: headerAlertOutlineButtonClass("danger"),
			children: t("Update limit")
		}),
		children: t("This organization has reached its budget limit and is now blocked. To continue using Appwrite services, update the budget limit.")
	});
}
function OrganizationPlanLimitHeaderBanner({ organizationId, show, billingLimits }) {
	const t = useT();
	if (!show || !organizationId) return null;
	const resourceLabel = getSingleRecognizedPlanUsageLimitLabel(billingLimits);
	return /* @__PURE__ */ jsx(HeaderAlertBar, {
		variant: "danger",
		icon: AlertCircle,
		role: "alert",
		action: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/organizations/$orgId/settings/billing",
				params: { orgId: organizationId },
				hash: "current-cycle-usage",
				className: headerAlertTextButtonClass("danger"),
				children: t("View current cycle usage")
			}), /* @__PURE__ */ jsx(Link, {
				to: "/upgrade",
				search: { orgId: organizationId },
				className: headerAlertOutlineButtonClass("danger"),
				children: t("Upgrade plan")
			})]
		}),
		children: resourceLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [
			t("This organization has reached its plan limit for"),
			" ",
			t(resourceLabel),
			t(". Upgrade your plan or wait until the end of the billing cycle to restore access.")
		] }) : t("This organization has reached its plan usage limit and is now blocked. Upgrade your plan or wait until the end of the billing cycle to restore access.")
	});
}
function OrganizationBillingHeaderBanners({ organizationId }) {
	const { features } = useConsoleProfile();
	const { data: organization } = useQuery(organizationQueryOptions(organizationId));
	const { data: failedInvoicePresence } = useOrganizationFailedInvoicePresence(organizationId);
	const showFailedInvoice = features.billing && failedInvoicePresence?.hasFailedInvoice === true;
	const showBudgetLimit = features.billing && isBudgetLimitReached(organization);
	const showPlanUsageLimit = features.billing && !showBudgetLimit && isPlanUsageLimitReached(organization);
	const orgBillingReadonly = showFailedInvoice && isOrganizationBillingReadonlyStatus(organization?.status);
	if (!organizationId || !showFailedInvoice && !showBudgetLimit && !showPlanUsageLimit) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(OrganizationFailedInvoiceHeaderBanner, {
			organizationId,
			show: showFailedInvoice,
			orgBillingReadonly
		}),
		/* @__PURE__ */ jsx(OrganizationBudgetLimitHeaderBanner, {
			organizationId,
			show: showBudgetLimit
		}),
		/* @__PURE__ */ jsx(OrganizationPlanLimitHeaderBanner, {
			organizationId,
			show: showPlanUsageLimit,
			billingLimits: organization?.billingLimits
		})
	] });
}
export { OrganizationBillingHeaderBanners as t };
