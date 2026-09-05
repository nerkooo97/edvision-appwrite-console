import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Dt as useOrganizationById } from "./organizations-BKtnlNrj.js";
import { Fy as useProjectAddonPrice, My as projectAddonsQueryOptions, jy as projectAddonPriceQueryOptions } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { c as resolveStripeProviderMethodId, n as ADDON_KEY_PREMIUM_GEO_DB, s as isPaymentAuthentication } from "./addons-DpAB_yDA.js";
import { t as confirmPayment } from "./stripe-B07yV6XF.js";
import { r as formatCurrency } from "./utils-DMkzhjmw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function EnablePremiumGeoDBDialog({ open, onOpenChange, projectId, onEnabled }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { organization } = useOrganizationById(project?.teamId);
	const { addonPrice } = useProjectAddonPrice(open ? projectId : null, ADDON_KEY_PREMIUM_GEO_DB);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const refreshAddonQueries = async () => {
		await Promise.all([
			queryClient.refetchQueries({ queryKey: projectAddonsQueryOptions(projectId).queryKey }),
			queryClient.refetchQueries({ queryKey: projectAddonPriceQueryOptions(projectId, ADDON_KEY_PREMIUM_GEO_DB).queryKey }),
			queryClient.refetchQueries({ queryKey: ["project", projectId] }),
			queryClient.refetchQueries({ queryKey: ["billing-aggregation", "organization"] })
		]);
	};
	const handleEnable = async () => {
		setSubmitting(true);
		setError(null);
		try {
			const result = await sdk.forConsole.projects.createPremiumGeoDBAddon({ projectId });
			if (isPaymentAuthentication(result)) {
				const paymentMethodId = organization?.paymentMethodId;
				if (!paymentMethodId || !organization?.$id) throw new Error(t("Add a payment method to your organization before enabling this addon."));
				const providerMethodId = await resolveStripeProviderMethodId({
					organizationId: organization.$id,
					paymentMethodId
				});
				await confirmPayment({
					clientSecret: result.clientSecret,
					paymentMethod: providerMethodId
				});
				try {
					await sdk.forConsole.projects.confirmAddonPayment({
						projectId,
						addonId: result.addonId
					});
				} catch (confirmError) {
					const candidate = confirmError;
					if (candidate?.type !== "billing_invoice_not_found" && candidate?.type !== "addon_not_found" && candidate?.code !== 404) throw confirmError;
				}
			}
			await refreshAddonQueries();
			toast.success(t("Premium Geo DB addon has been enabled"));
			onOpenChange(false);
			onEnabled?.();
		} catch (enableError) {
			if (enableError?.code === 409) {
				await refreshAddonQueries();
				toast.success(t("Premium Geo DB addon is already active for this project"));
				onOpenChange(false);
				onEnabled?.();
				return;
			}
			setError(getErrorMessage(enableError));
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-left",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Enable Premium Geo DB") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: addonPrice ? t("By clicking Enable, the monthly addon amount will be added to your subscription and your payment method will be charged the prorated amount immediately for the remaining days in your billing cycle.") : t("By clicking Enable, your payment method will be charged for the prorated amount for the remaining days in your billing cycle, and the addon will be added to this project subscription for future cycles.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-4",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Premium Geo DB enriches session and request data with premium geolocation details including timezone, postal code, ISP, connection type, and organization.")
						}),
						addonPrice ? /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border p-4 space-y-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-3 text-[13px]",
									children: [/* @__PURE__ */ jsx("span", { children: addonPrice.name }), /* @__PURE__ */ jsxs("span", {
										className: "tabular-nums",
										children: [
											formatCurrency(addonPrice.monthlyPrice, addonPrice.currency),
											" ",
											"/ ",
											t("month")
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-3 text-[13px] font-medium",
									children: [/* @__PURE__ */ jsx("span", { children: t("Due today (prorated)") }), /* @__PURE__ */ jsx("span", {
										className: "tabular-nums",
										children: formatCurrency(addonPrice.proratedAmount, addonPrice.currency)
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground text-end",
									children: t("* Plus applicable tax and fees")
								})
							]
						}) : null,
						error ? /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-destructive",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						disabled: submitting,
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						disabled: submitting,
						onClick: () => void handleEnable(),
						children: t("Enable")
					})]
				})
			]
		})
	});
}
export { EnablePremiumGeoDBDialog as t };
