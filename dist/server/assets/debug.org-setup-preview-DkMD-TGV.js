import "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Route } from "./debug.org-setup-preview-BtB50C6Z.js";
import { t as OrganizationSetupProgress } from "./OrganizationSetupProgress-CTQpKskx.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
var PHASE_OPTIONS = [
	{
		value: "submitting",
		label: "Creating organization"
	},
	{
		value: "confirming-payment",
		label: "Confirming payment"
	},
	{
		value: "activating",
		label: "Activating plan"
	},
	{
		value: "complete",
		label: "Finishing up"
	}
];
function OrgSetupPreviewPage() {
	const search = Route.useSearch();
	const [progress, setProgress] = useState({
		mode: search.mode ?? "create",
		phase: search.phase ?? "activating",
		organizationName: "Acme Inc.",
		planLabel: "Pro",
		showPaymentStep: search.payment ?? true,
		showActivationStep: search.activation ?? true
	});
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[9997] flex flex-col bg-background",
		children: /* @__PURE__ */ jsxs(WizardLayout, {
			title: "Create organization",
			fullscreen: true,
			useSidebar: false,
			skipInitialFieldFocus: true,
			footer: /* @__PURE__ */ jsxs("div", {
				className: "flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: "Debug preview - adjust the setup progress stage below."
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: PHASE_OPTIONS.map((option) => /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						variant: progress.phase === option.value ? "default" : "outline",
						className: "h-8 text-[12px]",
						onClick: () => setProgress((prev) => ({
							...prev,
							phase: option.value
						})),
						children: option.label
					}, option.value))
				})]
			}),
			contentWrapperClassName: "overflow-y-auto",
			children: [/* @__PURE__ */ jsx(OrganizationSetupProgress, { progress }), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-8 w-full max-w-lg rounded-xl border border-dashed border-border bg-muted/20 px-6 py-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-4 text-[13px] font-semibold text-foreground",
					children: "Preview options"
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "preview-mode",
								children: "Mode"
							}), /* @__PURE__ */ jsxs(Select, {
								value: progress.mode,
								onValueChange: (value) => setProgress((prev) => ({
									...prev,
									mode: value
								})),
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									id: "preview-mode",
									className: "h-9",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
									value: "create",
									children: "Create organization"
								}), /* @__PURE__ */ jsx(SelectItem, {
									value: "upgrade",
									children: "Change plan"
								})] })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "preview-plan",
								children: "Plan label"
							}), /* @__PURE__ */ jsx(Input, {
								id: "preview-plan",
								value: progress.planLabel,
								onChange: (e) => setProgress((prev) => ({
									...prev,
									planLabel: e.target.value
								})),
								className: "h-9"
							})]
						}),
						progress.mode === "create" ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-2 sm:col-span-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "preview-org-name",
								children: "Organization name"
							}), /* @__PURE__ */ jsx(Input, {
								id: "preview-org-name",
								value: progress.organizationName ?? "",
								onChange: (e) => setProgress((prev) => ({
									...prev,
									organizationName: e.target.value
								})),
								className: "h-9"
							})]
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "preview-payment",
								className: "text-[13px]",
								children: "Payment step"
							}), /* @__PURE__ */ jsx(Switch, {
								id: "preview-payment",
								checked: progress.showPaymentStep,
								onCheckedChange: (checked) => setProgress((prev) => ({
									...prev,
									showPaymentStep: checked
								}))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "preview-activation",
								className: "text-[13px]",
								children: "Activation step"
							}), /* @__PURE__ */ jsx(Switch, {
								id: "preview-activation",
								checked: progress.showActivationStep,
								onCheckedChange: (checked) => setProgress((prev) => ({
									...prev,
									showActivationStep: checked
								}))
							})]
						})
					]
				})]
			})]
		})
	});
}
export { OrgSetupPreviewPage as component };
