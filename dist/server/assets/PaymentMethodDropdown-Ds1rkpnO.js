import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { o as formatPaymentMethodSummary } from "./utils-DMkzhjmw.js";
import { n as PaymentMethodBrandAvatar } from "./Payment-BjDWA9P5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Plus, Ticket } from "lucide-react";
function PaymentMethodDropdown({ paymentMethods, selectedPaymentMethodId, onPaymentMethodSelect, onAddPaymentMethod, onAddCredits }) {
	const t = useT();
	const completedPaymentMethods = paymentMethods.filter((pm) => pm.last4);
	const getDisplayText = (method) => formatPaymentMethodSummary(method);
	const renderPaymentMethodOption = (method) => /* @__PURE__ */ jsxs("span", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(PaymentMethodBrandAvatar, { brand: method.brand }), /* @__PURE__ */ jsx("span", {
			className: "truncate",
			children: getDisplayText(method)
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
			className: "text-[13px] font-medium text-foreground mb-2 block",
			children: t("Payment method")
		}), completedPaymentMethods.length > 0 ? /* @__PURE__ */ jsxs(Select, {
			value: selectedPaymentMethodId || void 0,
			onValueChange: onPaymentMethodSelect,
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				className: "h-9 w-full min-w-0 text-[13px]",
				children: /* @__PURE__ */ jsx(SelectValue, {
					placeholder: t("Select payment method"),
					children: selectedPaymentMethodId ? (() => {
						const method = completedPaymentMethods.find((pm) => pm.$id === selectedPaymentMethodId);
						return method ? renderPaymentMethodOption(method) : void 0;
					})() : void 0
				})
			}), /* @__PURE__ */ jsx(SelectContent, { children: completedPaymentMethods.map((method) => /* @__PURE__ */ jsx(SelectItem, {
				value: method.$id,
				children: renderPaymentMethodOption(method)
			}, method.$id)) })]
		}) : /* @__PURE__ */ jsx("div", {
			className: "rounded-md border border-border bg-background px-3 py-2 text-[13px] text-muted-foreground",
			children: t("No payment methods available")
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 text-[13px]",
				onClick: onAddPaymentMethod,
				children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add payment method")]
			}), onAddCredits ? /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 text-[13px]",
				onClick: onAddCredits,
				children: [/* @__PURE__ */ jsx(Ticket, { className: "me-1.5 h-4 w-4" }), t("Add credits")]
			}) : null]
		})]
	});
}
export { PaymentMethodDropdown as t };
