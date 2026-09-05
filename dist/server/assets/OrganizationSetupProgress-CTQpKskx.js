import { t as icons_exports } from "./icons-Dg0oCYUO.js";
import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { jsx, jsxs } from "react/jsx-runtime";
function buildSteps(state) {
	const { mode, planLabel, showPaymentStep, showActivationStep, organizationName, showPlanUpdateStep, showProjectDeletionStep, showResourceDeletionStep, showMembershipDeletionStep, showOrganizationDeletionStep } = state;
	if (mode === "downgrade") {
		const steps$1 = [];
		if (showResourceDeletionStep) steps$1.push({
			phase: "deleting-resources",
			label: "Deleting resources",
			description: "Removing resources that are not kept for the target plan."
		});
		if (showOrganizationDeletionStep) steps$1.push({
			phase: "deleting-organization",
			label: "Deleting organization",
			description: "Removing the organization you chose not to keep."
		});
		if (showProjectDeletionStep) steps$1.push({
			phase: "deleting-projects",
			label: "Deleting projects",
			description: "Removing projects that are not kept for the target plan."
		});
		if (showPlanUpdateStep) steps$1.push({
			phase: "updating-plan",
			label: "Updating plan",
			description: `Applying your ${planLabel} plan changes.`
		});
		if (showMembershipDeletionStep) steps$1.push({
			phase: "deleting-memberships",
			label: "Deleting members",
			description: "Removing members that are not kept for the target plan."
		});
		steps$1.push({
			phase: "complete",
			label: "Finishing up",
			description: "Preparing your organization dashboard."
		});
		return steps$1;
	}
	const steps = [{
		phase: "submitting",
		label: mode === "create" ? "Creating organization" : mode === "downgrade" ? "Preparing downgrade" : "Updating plan",
		description: mode === "create" ? organizationName ? `Setting up ${organizationName} and your billing profile.` : "Setting up your workspace and billing profile." : mode === "downgrade" ? `Preparing your ${planLabel} plan changes.` : `Applying your ${planLabel} plan changes.`
	}];
	if (showProjectDeletionStep) steps.push({
		phase: "deleting-projects",
		label: "Deleting projects",
		description: "Removing projects that are not kept for the target plan."
	});
	if (showResourceDeletionStep) steps.push({
		phase: "deleting-resources",
		label: "Deleting resources",
		description: "Removing resources that are not kept for the target plan."
	});
	if (showOrganizationDeletionStep) steps.push({
		phase: "deleting-organization",
		label: "Deleting organization",
		description: "Removing the organization you chose not to keep."
	});
	if (showPaymentStep) steps.push({
		phase: "confirming-payment",
		label: "Confirming payment",
		description: "Securing your subscription with your payment method."
	});
	if (showActivationStep) steps.push({
		phase: "activating",
		label: "Activating plan",
		description: `Enabling ${planLabel} features for your organization.`
	});
	steps.push({
		phase: "complete",
		label: "Finishing up",
		description: "Preparing your organization dashboard."
	});
	return steps;
}
function getPhaseIndex(steps, phase) {
	const index = steps.findIndex((step) => step.phase === phase);
	return index >= 0 ? index : 0;
}
function OrganizationSetupProgress({ progress }) {
	const t = useT();
	const steps = buildSteps(progress);
	const activeIndex = getPhaseIndex(steps, progress.phase);
	const headline = progress.mode === "create" ? t("Setting up your organization") : progress.mode === "downgrade" ? t("Downgrading your plan") : t("Updating your plan");
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-md flex-col items-center px-4 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/40",
				children: /* @__PURE__ */ jsx(icons_exports.Loader2, { className: "h-6 w-6 animate-spin text-foreground" })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-center text-[20px] font-semibold tracking-tight text-foreground",
				children: headline
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 max-w-xs text-center text-[13px] leading-relaxed text-muted-foreground",
				children: t("This usually takes a few seconds. Please keep this window open.")
			}),
			/* @__PURE__ */ jsx("ol", {
				className: "mt-10 mx-auto w-full max-w-xs space-y-0",
				children: steps.map((step, index) => {
					const isComplete = index < activeIndex;
					const isCurrent = index === activeIndex;
					return /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-semibold transition-colors", isComplete && "border-green-600 bg-green-600 text-white dark:border-green-500 dark:bg-green-500", isCurrent && "border-primary bg-background text-primary", index > activeIndex && "border-border bg-muted/40 text-muted-foreground"),
								children: isComplete ? /* @__PURE__ */ jsx(icons_exports.Check, {
									className: "h-4 w-4",
									strokeWidth: 2.5
								}) : isCurrent ? /* @__PURE__ */ jsx(icons_exports.Loader2, { className: "h-4 w-4 animate-spin" }) : index + 1
							}), index < steps.length - 1 ? /* @__PURE__ */ jsx("div", { className: cn("my-1 w-px flex-1 min-h-[2rem]", isComplete ? "bg-green-600 dark:bg-green-500" : "bg-border") }) : null]
						}), /* @__PURE__ */ jsxs("div", {
							className: cn("min-w-0 pb-8", index === steps.length - 1 && "pb-0"),
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[13px] font-semibold", isCurrent ? "text-foreground" : "text-muted-foreground"),
								children: t(step.label)
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
								children: t(step.description)
							})]
						})]
					}, step.phase);
				})
			})
		]
	});
}
export { OrganizationSetupProgress as t };
